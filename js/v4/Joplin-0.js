// @@ The Entertainer p 1/3  by Scott Joplin
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1632');
svg.setAttributeNS('', 'height', '2112');
svg.setAttributeNS('', 'viewBox', '0 0 1989 2574');
//
// create the musical objects
VF.setMusicFont("Bravura","Gonville","Custom");
const fmtsmo1039870 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo103987v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103987v0ar = [];
const smo103959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
smo103959.setAttribute('id', 'smo103959');
smo103987v0ar.push(smo103959);
const smo103961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/6/n"]}'))
smo103961.setAttribute('id', 'smo103961');
smo103987v0ar.push(smo103961);
const smo103962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
smo103962.setAttribute('id', 'smo103962');
smo103987v0ar.push(smo103962);
const smo103963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo103963.setAttribute('id', 'smo103963');
smo103987v0ar.push(smo103963);
const smo103964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo103964.setAttribute('id', 'smo103964');
smo103987v0ar.push(smo103964);
const smo103965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo103965.setAttribute('id', 'smo103965');
smo103987v0ar.push(smo103965);
const smo103966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo103966.setAttribute('id', 'smo103966');
smo103987v0ar.push(smo103966);
smo103987v0.addTickables(smo103987v0ar)
fmtsmo1039870.joinVoices([smo103987v0]);
const smo103987v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103987v1ar = [];
const smo103967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo103967.setAttribute('id', 'smo103967');
smo103967.setStyle({ fillStyle: "#115511" });
smo103987v1ar.push(smo103967);
const smo103968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo103968.setAttribute('id', 'smo103968');
smo103968.setStyle({ fillStyle: "#115511" });
smo103987v1ar.push(smo103968);
const smo103969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo103969.setAttribute('id', 'smo103969');
smo103969.setStyle({ fillStyle: "#115511" });
smo103987v1ar.push(smo103969);
const smo103970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo103970.setAttribute('id', 'smo103970');
smo103970.setStyle({ fillStyle: "#115511" });
smo103987v1ar.push(smo103970);
const smo103971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo103971.setAttribute('id', 'smo103971');
smo103971.setStyle({ fillStyle: "#115511" });
smo103987v1ar.push(smo103971);
const smo103972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo103972.setAttribute('id', 'smo103972');
smo103972.setStyle({ fillStyle: "#115511" });
smo103987v1ar.push(smo103972);
const smo103973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo103973.setAttribute('id', 'smo103973');
smo103973.setStyle({ fillStyle: "#115511" });
smo103987v1ar.push(smo103973);
smo103987v1.addTickables(smo103987v1ar)
fmtsmo1039870.joinVoices([smo103987v1]);
const fmtsmo1068640 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo106864v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106864v0ar = [];
const smo106850 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo106850.setAttribute('id', 'smo106850');
smo106864v0ar.push(smo106850);
smo106864v0.addTickables(smo106864v0ar)
fmtsmo1068640.joinVoices([smo106864v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo108885 = smo103959.getStemDirection();
smo103959.setStemDirection(dirsmo108885);
smo103961.setStemDirection(dirsmo108885);
smo103962.setStemDirection(dirsmo108885);
smo103963.setStemDirection(dirsmo108885);
const smo108885 = new VF.Beam([smo103959,smo103961,smo103962,smo103963]);
const dirsmo108886 = smo103964.getStemDirection();
smo103964.setStemDirection(dirsmo108886);
smo103965.setStemDirection(dirsmo108886);
smo103966.setStemDirection(dirsmo108886);
const smo108886 = new VF.Beam([smo103964,smo103965,smo103966]);
const dirsmo108887 = smo103967.getStemDirection();
smo103967.setStemDirection(dirsmo108887);
smo103968.setStemDirection(dirsmo108887);
smo103969.setStemDirection(dirsmo108887);
smo103970.setStemDirection(dirsmo108887);
const smo108887 = new VF.Beam([smo103967,smo103968,smo103969,smo103970]);
const dirsmo108888 = smo103971.getStemDirection();
smo103971.setStemDirection(dirsmo108888);
smo103972.setStemDirection(dirsmo108888);
smo103973.setStemDirection(dirsmo108888);
const smo108888 = new VF.Beam([smo103971,smo103972,smo103973]);
 
// formatting measures in staff group smo103216
fmtsmo1039870.format([smo103987v0,smo103987v1,smo106864v0], 213);
const stavesmo103987 = new VF.Stave(73, 406, 295);
stavesmo103987.setAttribute('id', 'stavesmo103987');
stavesmo103987.setBegBarType(1);
stavesmo103987.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":72}'), -1 * 55);
stavesmo103987.addClef('treble');
stavesmo103987.addTimeSignature('2/4');
stavesmo103987.setContext(context);
stavesmo103987.draw();
smo103987v0.draw(context, stavesmo103987);
smo103987v1.draw(context, stavesmo103987);
smo108885.setContext(context);
smo108885.draw();
smo108886.setContext(context);
smo108886.draw();
smo108887.setContext(context);
smo108887.draw();
smo108888.setContext(context);
smo108888.draw();
const stavesmo106864 = new VF.Stave(73, 545, 295);
stavesmo106864.setAttribute('id', 'stavesmo106864');
stavesmo106864.setBegBarType(1);
stavesmo106864.addClef('bass');
stavesmo106864.addTimeSignature('2/4');
stavesmo106864.setContext(context);
stavesmo106864.draw();
smo106864v0.draw(context, stavesmo106864);
const leftsmo103216stavesmo1039871 = new VF.StaveConnector(stavesmo103987, stavesmo106864).setType(3);
leftsmo103216stavesmo1039871.setContext(context).draw();
const fmtsmo1040081 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo104008v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104008v0ar = [];
const smo103988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo103988.setAttribute('id', 'smo103988');
smo104008v0ar.push(smo103988);
const smo103989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo103989.setAttribute('id', 'smo103989');
smo104008v0ar.push(smo103989);
const smo103990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo103990.setAttribute('id', 'smo103990');
smo104008v0ar.push(smo103990);
const smo103991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo103991.setAttribute('id', 'smo103991');
smo104008v0ar.push(smo103991);
const smo103992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo103992.setAttribute('id', 'smo103992');
smo104008v0ar.push(smo103992);
const smo103993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo103993.setAttribute('id', 'smo103993');
smo104008v0ar.push(smo103993);
const smo103994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo103994.setAttribute('id', 'smo103994');
smo104008v0ar.push(smo103994);
smo104008v0.addTickables(smo104008v0ar)
fmtsmo1040081.joinVoices([smo104008v0]);
const fmtsmo1068851 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo106885v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106885v0ar = [];
const smo106865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo106865.setAttribute('id', 'smo106865');
smo106885v0ar.push(smo106865);
const smo106866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo106866.setAttribute('id', 'smo106866');
smo106885v0ar.push(smo106866);
const smo106867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo106867.setAttribute('id', 'smo106867');
smo106885v0ar.push(smo106867);
const smo106868 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo106868.setAttribute('id', 'smo106868');
smo106885v0ar.push(smo106868);
const smo106869 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo106869.setAttribute('id', 'smo106869');
smo106885v0ar.push(smo106869);
const smo106870 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo106870.setAttribute('id', 'smo106870');
smo106885v0ar.push(smo106870);
const smo106871 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo106871.setAttribute('id', 'smo106871');
smo106885v0ar.push(smo106871);
smo106885v0.addTickables(smo106885v0ar)
fmtsmo1068851.joinVoices([smo106885v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo108893 = smo103988.getStemDirection();
smo103988.setStemDirection(dirsmo108893);
smo103989.setStemDirection(dirsmo108893);
smo103990.setStemDirection(dirsmo108893);
smo103991.setStemDirection(dirsmo108893);
const smo108893 = new VF.Beam([smo103988,smo103989,smo103990,smo103991]);
const dirsmo108894 = smo103992.getStemDirection();
smo103992.setStemDirection(dirsmo108894);
smo103993.setStemDirection(dirsmo108894);
smo103994.setStemDirection(dirsmo108894);
const smo108894 = new VF.Beam([smo103992,smo103993,smo103994]);
const dirsmo108897 = smo106865.getStemDirection();
smo106865.setStemDirection(dirsmo108897);
smo106866.setStemDirection(dirsmo108897);
smo106867.setStemDirection(dirsmo108897);
smo106868.setStemDirection(dirsmo108897);
const smo108897 = new VF.Beam([smo106865,smo106866,smo106867,smo106868]);
const dirsmo108898 = smo106869.getStemDirection();
smo106869.setStemDirection(dirsmo108898);
smo106870.setStemDirection(dirsmo108898);
smo106871.setStemDirection(dirsmo108898);
const smo108898 = new VF.Beam([smo106869,smo106870,smo106871]);
 
// formatting measures in staff group smo103216
fmtsmo1040081.format([smo104008v0,smo106885v0], 281);
const stavesmo104008 = new VF.Stave(368, 406, 295);
stavesmo104008.setAttribute('id', 'stavesmo104008');
stavesmo104008.setBegBarType(VF.Barline.type.NONE);
stavesmo104008.setContext(context);
stavesmo104008.draw();
smo104008v0.draw(context, stavesmo104008);
smo108893.setContext(context);
smo108893.draw();
smo108894.setContext(context);
smo108894.draw();
const stavesmo106885 = new VF.Stave(368, 545, 295);
stavesmo106885.setAttribute('id', 'stavesmo106885');
stavesmo106885.setBegBarType(VF.Barline.type.NONE);
stavesmo106885.setContext(context);
stavesmo106885.draw();
smo106885v0.draw(context, stavesmo106885);
smo108897.setContext(context);
smo108897.draw();
smo108898.setContext(context);
smo108898.draw();
const fmtsmo1040302 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo104030v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104030v0ar = [];
const smo104009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo104009.setAttribute('id', 'smo104009');
smo104030v0ar.push(smo104009);
const smo104010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo104010.setAttribute('id', 'smo104010');
smo104030v0ar.push(smo104010);
const smo104011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo104011.setAttribute('id', 'smo104011');
smo104030v0ar.push(smo104011);
const smo104012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo104012.setAttribute('id', 'smo104012');
smo104030v0ar.push(smo104012);
const smo104013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo104013.setAttribute('id', 'smo104013');
smo104030v0ar.push(smo104013);
const smo104014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo104014.setAttribute('id', 'smo104014');
smo104030v0ar.push(smo104014);
const smo104015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo104015.setAttribute('id', 'smo104015');
smo104030v0ar.push(smo104015);
const smo104016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n"]}'))
smo104016.setAttribute('id', 'smo104016');
const smo1040160acc = new VF.Accidental('b');
smo104016.addModifier(smo1040160acc, 0);
smo104030v0ar.push(smo104016);
smo104030v0.addTickables(smo104030v0ar)
fmtsmo1040302.joinVoices([smo104030v0]);
const fmtsmo1069072 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo106907v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106907v0ar = [];
const smo106886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo106886.setAttribute('id', 'smo106886');
smo106907v0ar.push(smo106886);
const smo106887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo106887.setAttribute('id', 'smo106887');
smo106907v0ar.push(smo106887);
const smo106888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo106888.setAttribute('id', 'smo106888');
smo106907v0ar.push(smo106888);
const smo106889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo106889.setAttribute('id', 'smo106889');
smo106907v0ar.push(smo106889);
const smo106890 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo106890.setAttribute('id', 'smo106890');
smo106907v0ar.push(smo106890);
const smo106891 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo106891.setAttribute('id', 'smo106891');
smo106907v0ar.push(smo106891);
const smo106892 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo106892.setAttribute('id', 'smo106892');
smo106907v0ar.push(smo106892);
const smo106893 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n"]}'))
smo106893.setAttribute('id', 'smo106893');
const smo1068930acc = new VF.Accidental('b');
smo106893.addModifier(smo1068930acc, 0);
smo106907v0ar.push(smo106893);
smo106907v0.addTickables(smo106907v0ar)
fmtsmo1069072.joinVoices([smo106907v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo108901 = smo104009.getStemDirection();
smo104009.setStemDirection(dirsmo108901);
smo104010.setStemDirection(dirsmo108901);
smo104011.setStemDirection(dirsmo108901);
smo104012.setStemDirection(dirsmo108901);
const smo108901 = new VF.Beam([smo104009,smo104010,smo104011,smo104012]);
const dirsmo108902 = smo104013.getStemDirection();
smo104013.setStemDirection(dirsmo108902);
smo104014.setStemDirection(dirsmo108902);
smo104015.setStemDirection(dirsmo108902);
smo104016.setStemDirection(dirsmo108902);
const smo108902 = new VF.Beam([smo104013,smo104014,smo104015,smo104016]);
const dirsmo108905 = smo106886.getStemDirection();
smo106886.setStemDirection(dirsmo108905);
smo106887.setStemDirection(dirsmo108905);
smo106888.setStemDirection(dirsmo108905);
smo106889.setStemDirection(dirsmo108905);
const smo108905 = new VF.Beam([smo106886,smo106887,smo106888,smo106889]);
const dirsmo108906 = smo106890.getStemDirection();
smo106890.setStemDirection(dirsmo108906);
smo106891.setStemDirection(dirsmo108906);
smo106892.setStemDirection(dirsmo108906);
smo106893.setStemDirection(dirsmo108906);
const smo108906 = new VF.Beam([smo106890,smo106891,smo106892,smo106893]);
 
// formatting measures in staff group smo103216
fmtsmo1040302.format([smo104030v0,smo106907v0], 281);
const stavesmo104030 = new VF.Stave(663, 406, 295);
stavesmo104030.setAttribute('id', 'stavesmo104030');
stavesmo104030.setBegBarType(VF.Barline.type.NONE);
stavesmo104030.setContext(context);
stavesmo104030.draw();
smo104030v0.draw(context, stavesmo104030);
smo108901.setContext(context);
smo108901.draw();
smo108902.setContext(context);
smo108902.draw();
const stavesmo106907 = new VF.Stave(663, 545, 295);
stavesmo106907.setAttribute('id', 'stavesmo106907');
stavesmo106907.setBegBarType(VF.Barline.type.NONE);
stavesmo106907.setContext(context);
stavesmo106907.draw();
smo106907v0.draw(context, stavesmo106907);
smo108905.setContext(context);
smo108905.draw();
smo108906.setContext(context);
smo108906.draw();
const fmtsmo1040483 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo104048v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104048v0ar = [];
const smo104031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo104031.setAttribute('id', 'smo104031');
smo104048v0ar.push(smo104031);
const smo104032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bn/4/n","dn/5/n","gn/5/n"]}'))
smo104032.setAttribute('id', 'smo104032');
smo104048v0ar.push(smo104032);
const smo104033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo104033.setAttribute('id', 'smo104033');
smo104048v0ar.push(smo104033);
const smo104034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo104034.setAttribute('id', 'smo104034');
const smo1040340acc = new VF.Accidental('b');
smo104034.addModifier(smo1040340acc, 0);
smo104048v0ar.push(smo104034);
smo104048v0.addTickables(smo104048v0ar)
fmtsmo1040483.joinVoices([smo104048v0]);
const fmtsmo1069253 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo106925v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106925v0ar = [];
const smo106908 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo106908.setAttribute('id', 'smo106908');
smo106925v0ar.push(smo106908);
const smo106909 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo106909.setAttribute('id', 'smo106909');
smo106925v0ar.push(smo106909);
const smo106910 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/1/n","gn/2/n"]}'))
smo106910.setAttribute('id', 'smo106910');
smo106925v0ar.push(smo106910);
const smo106911 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo106911.setAttribute('id', 'smo106911');
smo106925v0ar.push(smo106911);
smo106925v0.addTickables(smo106925v0ar)
fmtsmo1069253.joinVoices([smo106925v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo108909 = smo104032.getStemDirection();
smo104032.setStemDirection(dirsmo108909);
smo104033.setStemDirection(dirsmo108909);
smo104034.setStemDirection(dirsmo108909);
const smo108909 = new VF.Beam([smo104032,smo104033,smo104034]);
const dirsmo108912 = smo106910.getStemDirection();
smo106910.setStemDirection(dirsmo108912);
smo106911.setStemDirection(dirsmo108912);
const smo108912 = new VF.Beam([smo106910,smo106911]);
 
// formatting measures in staff group smo103216
fmtsmo1040483.format([smo104048v0,smo106925v0], 281);
const stavesmo104048 = new VF.Stave(958, 406, 295);
stavesmo104048.setAttribute('id', 'stavesmo104048');
stavesmo104048.setBegBarType(VF.Barline.type.NONE);
stavesmo104048.setContext(context);
stavesmo104048.draw();
smo104048v0.draw(context, stavesmo104048);
smo108909.setContext(context);
smo108909.draw();
const stavesmo106925 = new VF.Stave(958, 545, 295);
stavesmo106925.setAttribute('id', 'stavesmo106925');
stavesmo106925.setBegBarType(VF.Barline.type.NONE);
stavesmo106925.setContext(context);
stavesmo106925.draw();
smo106925v0.draw(context, stavesmo106925);
smo108912.setContext(context);
smo108912.draw();
const fmtsmo1040694 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo104069v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104069v0ar = [];
const smo104049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo104049.setAttribute('id', 'smo104049');
smo104069v0ar.push(smo104049);
const smo104051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104051.setAttribute('id', 'smo104051');
smo104069v0ar.push(smo104051);
const smo104052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo104052.setAttribute('id', 'smo104052');
smo104069v0ar.push(smo104052);
const smo104053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104053.setAttribute('id', 'smo104053');
smo104069v0ar.push(smo104053);
const smo104054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo104054.setAttribute('id', 'smo104054');
smo104069v0ar.push(smo104054);
const smo104055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104055.setAttribute('id', 'smo104055');
smo104069v0ar.push(smo104055);
smo104069v0.addTickables(smo104069v0ar)
fmtsmo1040694.joinVoices([smo104069v0]);
const fmtsmo1069434 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo106943v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106943v0ar = [];
const smo106926 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo106926.setAttribute('id', 'smo106926');
smo106943v0ar.push(smo106926);
const smo106927 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo106927.setAttribute('id', 'smo106927');
smo106943v0ar.push(smo106927);
const smo106928 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo106928.setAttribute('id', 'smo106928');
smo106943v0ar.push(smo106928);
const smo106929 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo106929.setAttribute('id', 'smo106929');
const smo1069291acc = new VF.Accidental('b');
smo106929.addModifier(smo1069291acc, 1);
smo106943v0ar.push(smo106929);
smo106943v0.addTickables(smo106943v0ar)
fmtsmo1069434.joinVoices([smo106943v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo108915 = smo104049.getStemDirection();
smo104049.setStemDirection(dirsmo108915);
smo104051.setStemDirection(dirsmo108915);
smo104052.setStemDirection(dirsmo108915);
const smo108915 = new VF.Beam([smo104049,smo104051,smo104052]);
const dirsmo108916 = smo104053.getStemDirection();
smo104053.setStemDirection(dirsmo108916);
smo104054.setStemDirection(dirsmo108916);
smo104055.setStemDirection(dirsmo108916);
const smo108916 = new VF.Beam([smo104053,smo104054,smo104055]);
const dirsmo108918 = smo106926.getStemDirection();
smo106926.setStemDirection(dirsmo108918);
smo106927.setStemDirection(dirsmo108918);
const smo108918 = new VF.Beam([smo106926,smo106927]);
const dirsmo108919 = smo106928.getStemDirection();
smo106928.setStemDirection(dirsmo108919);
smo106929.setStemDirection(dirsmo108919);
const smo108919 = new VF.Beam([smo106928,smo106929]);
 
// formatting measures in staff group smo103216
fmtsmo1040694.format([smo104069v0,smo106943v0], 272);
const stavesmo104069 = new VF.Stave(1253, 406, 295);
stavesmo104069.setAttribute('id', 'stavesmo104069');
stavesmo104069.setBegBarType(4);
stavesmo104069.setContext(context);
stavesmo104069.draw();
smo104069v0.draw(context, stavesmo104069);
smo108915.setContext(context);
smo108915.draw();
smo108916.setContext(context);
smo108916.draw();
const stavesmo106943 = new VF.Stave(1253, 545, 295);
stavesmo106943.setAttribute('id', 'stavesmo106943');
stavesmo106943.setBegBarType(4);
stavesmo106943.setContext(context);
stavesmo106943.draw();
smo106943v0.draw(context, stavesmo106943);
smo108918.setContext(context);
smo108918.draw();
smo108919.setContext(context);
smo108919.draw();
const fmtsmo1040885 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo104088v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104088v0ar = [];
const smo104070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104070.setAttribute('id', 'smo104070');
smo104088v0ar.push(smo104070);
const smo104071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104071.setAttribute('id', 'smo104071');
smo104088v0ar.push(smo104071);
const smo104072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104072.setAttribute('id', 'smo104072');
smo104088v0ar.push(smo104072);
const smo104073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo104073.setAttribute('id', 'smo104073');
smo104088v0ar.push(smo104073);
const smo104074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo104074.setAttribute('id', 'smo104074');
const smo1040740acc = new VF.Accidental('b');
smo104074.addModifier(smo1040740acc, 0);
const smo1040741acc = new VF.Accidental('b');
smo104074.addModifier(smo1040741acc, 1);
const smo1040742acc = new VF.Accidental('b');
smo104074.addModifier(smo1040742acc, 2);
smo104088v0ar.push(smo104074);
smo104088v0.addTickables(smo104088v0ar)
fmtsmo1040885.joinVoices([smo104088v0]);
const fmtsmo1069615 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo106961v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106961v0ar = [];
const smo106944 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo106944.setAttribute('id', 'smo106944');
smo106961v0ar.push(smo106944);
const smo106945 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo106945.setAttribute('id', 'smo106945');
smo106961v0ar.push(smo106945);
const smo106946 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo106946.setAttribute('id', 'smo106946');
smo106961v0ar.push(smo106946);
const smo106947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo106947.setAttribute('id', 'smo106947');
smo106961v0ar.push(smo106947);
smo106961v0.addTickables(smo106961v0ar)
fmtsmo1069615.joinVoices([smo106961v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo108921 = smo104071.getStemDirection();
smo104071.setStemDirection(dirsmo108921);
smo104072.setStemDirection(dirsmo108921);
smo104073.setStemDirection(dirsmo108921);
smo104074.setStemDirection(dirsmo108921);
const smo108921 = new VF.Beam([smo104071,smo104072,smo104073,smo104074]);
const dirsmo108924 = smo106944.getStemDirection();
smo106944.setStemDirection(dirsmo108924);
smo106945.setStemDirection(dirsmo108924);
const smo108924 = new VF.Beam([smo106944,smo106945]);
const dirsmo108925 = smo106946.getStemDirection();
smo106946.setStemDirection(dirsmo108925);
smo106947.setStemDirection(dirsmo108925);
const smo108925 = new VF.Beam([smo106946,smo106947]);
 
// formatting measures in staff group smo103216
fmtsmo1040885.format([smo104088v0,smo106961v0], 281);
const stavesmo104088 = new VF.Stave(1548, 406, 295);
stavesmo104088.setAttribute('id', 'stavesmo104088');
stavesmo104088.setBegBarType(VF.Barline.type.NONE);
stavesmo104088.setContext(context);
stavesmo104088.draw();
smo104088v0.draw(context, stavesmo104088);
smo108921.setContext(context);
smo108921.draw();
const stavesmo106961 = new VF.Stave(1548, 545, 295);
stavesmo106961.setAttribute('id', 'stavesmo106961');
stavesmo106961.setBegBarType(VF.Barline.type.NONE);
stavesmo106961.setContext(context);
stavesmo106961.draw();
smo106961v0.draw(context, stavesmo106961);
smo108924.setContext(context);
smo108924.draw();
smo108925.setContext(context);
smo108925.draw();
const rightsmo103216stavesmo1040881 = new VF.StaveConnector(stavesmo104088, stavesmo106961).setType(0);
rightsmo103216stavesmo1040881.setContext(context).draw();
const fmtsmo1041106 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo104110v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104110v0ar = [];
const smo104089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo104089.setAttribute('id', 'smo104089');
smo104110v0ar.push(smo104089);
const smo104091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104091.setAttribute('id', 'smo104091');
smo104110v0ar.push(smo104091);
const smo104092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo104092.setAttribute('id', 'smo104092');
smo104110v0ar.push(smo104092);
const smo104093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo104093.setAttribute('id', 'smo104093');
smo104110v0ar.push(smo104093);
const smo104094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo104094.setAttribute('id', 'smo104094');
smo104110v0ar.push(smo104094);
const smo104095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo104095.setAttribute('id', 'smo104095');
smo104110v0ar.push(smo104095);
const smo104096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo104096.setAttribute('id', 'smo104096');
smo104110v0ar.push(smo104096);
smo104110v0.addTickables(smo104110v0ar)
fmtsmo1041106.joinVoices([smo104110v0]);
const fmtsmo1069796 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo106979v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106979v0ar = [];
const smo106962 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo106962.setAttribute('id', 'smo106962');
smo106979v0ar.push(smo106962);
const smo106963 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo106963.setAttribute('id', 'smo106963');
smo106979v0ar.push(smo106963);
const smo106964 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo106964.setAttribute('id', 'smo106964');
smo106979v0ar.push(smo106964);
const smo106965 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo106965.setAttribute('id', 'smo106965');
smo106979v0ar.push(smo106965);
smo106979v0.addTickables(smo106979v0ar)
fmtsmo1069796.joinVoices([smo106979v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo108936 = smo104089.getStemDirection();
smo104089.setStemDirection(dirsmo108936);
smo104091.setStemDirection(dirsmo108936);
smo104092.setStemDirection(dirsmo108936);
smo104093.setStemDirection(dirsmo108936);
const smo108936 = new VF.Beam([smo104089,smo104091,smo104092,smo104093]);
const dirsmo108937 = smo104094.getStemDirection();
smo104094.setStemDirection(dirsmo108937);
smo104095.setStemDirection(dirsmo108937);
smo104096.setStemDirection(dirsmo108937);
const smo108937 = new VF.Beam([smo104094,smo104095,smo104096]);
const dirsmo108940 = smo106962.getStemDirection();
smo106962.setStemDirection(dirsmo108940);
smo106963.setStemDirection(dirsmo108940);
const smo108940 = new VF.Beam([smo106962,smo106963]);
const dirsmo108941 = smo106964.getStemDirection();
smo106964.setStemDirection(dirsmo108941);
smo106965.setStemDirection(dirsmo108941);
const smo108941 = new VF.Beam([smo106964,smo106965]);
 
// formatting measures in staff group smo103216
fmtsmo1041106.format([smo104110v0,smo106979v0], 237);
const stavesmo104110 = new VF.Stave(73, 779, 295);
stavesmo104110.setAttribute('id', 'stavesmo104110');
stavesmo104110.setBegBarType(1);
stavesmo104110.addClef('treble');
stavesmo104110.setContext(context);
stavesmo104110.draw();
smo104110v0.draw(context, stavesmo104110);
smo108936.setContext(context);
smo108936.draw();
smo108937.setContext(context);
smo108937.draw();
const stavesmo106979 = new VF.Stave(73, 934, 295);
stavesmo106979.setAttribute('id', 'stavesmo106979');
stavesmo106979.setBegBarType(1);
stavesmo106979.addClef('bass');
stavesmo106979.setContext(context);
stavesmo106979.draw();
smo106979v0.draw(context, stavesmo106979);
smo108940.setContext(context);
smo108940.draw();
smo108941.setContext(context);
smo108941.draw();
const leftsmo103216stavesmo1041101 = new VF.StaveConnector(stavesmo104110, stavesmo106979).setType(3);
leftsmo103216stavesmo1041101.setContext(context).draw();
const fmtsmo1041287 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo104128v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104128v0ar = [];
const smo104111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104111.setAttribute('id', 'smo104111');
smo104128v0ar.push(smo104111);
const smo104112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104112.setAttribute('id', 'smo104112');
smo104128v0ar.push(smo104112);
const smo104113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo104113.setAttribute('id', 'smo104113');
smo104128v0ar.push(smo104113);
const smo104114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo104114.setAttribute('id', 'smo104114');
const smo1041140acc = new VF.Accidental('b');
smo104114.addModifier(smo1041140acc, 0);
smo104128v0ar.push(smo104114);
smo104128v0.addTickables(smo104128v0ar)
fmtsmo1041287.joinVoices([smo104128v0]);
const fmtsmo1069977 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo106997v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106997v0ar = [];
const smo106980 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo106980.setAttribute('id', 'smo106980');
smo106997v0ar.push(smo106980);
const smo106981 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo106981.setAttribute('id', 'smo106981');
smo106997v0ar.push(smo106981);
const smo106982 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo106982.setAttribute('id', 'smo106982');
smo106997v0ar.push(smo106982);
const smo106983 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo106983.setAttribute('id', 'smo106983');
smo106997v0ar.push(smo106983);
smo106997v0.addTickables(smo106997v0ar)
fmtsmo1069977.joinVoices([smo106997v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo108944 = smo104112.getStemDirection();
smo104112.setStemDirection(dirsmo108944);
smo104113.setStemDirection(dirsmo108944);
smo104114.setStemDirection(dirsmo108944);
const smo108944 = new VF.Beam([smo104112,smo104113,smo104114]);
const dirsmo108947 = smo106980.getStemDirection();
smo106980.setStemDirection(dirsmo108947);
smo106981.setStemDirection(dirsmo108947);
const smo108947 = new VF.Beam([smo106980,smo106981]);
const dirsmo108948 = smo106982.getStemDirection();
smo106982.setStemDirection(dirsmo108948);
smo106983.setStemDirection(dirsmo108948);
const smo108948 = new VF.Beam([smo106982,smo106983]);
 
// formatting measures in staff group smo103216
fmtsmo1041287.format([smo104128v0,smo106997v0], 281);
const stavesmo104128 = new VF.Stave(368, 779, 295);
stavesmo104128.setAttribute('id', 'stavesmo104128');
stavesmo104128.setBegBarType(VF.Barline.type.NONE);
stavesmo104128.setContext(context);
stavesmo104128.draw();
smo104128v0.draw(context, stavesmo104128);
smo108944.setContext(context);
smo108944.draw();
const stavesmo106997 = new VF.Stave(368, 934, 295);
stavesmo106997.setAttribute('id', 'stavesmo106997');
stavesmo106997.setBegBarType(VF.Barline.type.NONE);
stavesmo106997.setContext(context);
stavesmo106997.draw();
smo106997v0.draw(context, stavesmo106997);
smo108947.setContext(context);
smo108947.draw();
smo108948.setContext(context);
smo108948.draw();
const fmtsmo1041498 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo104149v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104149v0ar = [];
const smo104129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo104129.setAttribute('id', 'smo104129');
smo104149v0ar.push(smo104129);
const smo104131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104131.setAttribute('id', 'smo104131');
smo104149v0ar.push(smo104131);
const smo104132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo104132.setAttribute('id', 'smo104132');
smo104149v0ar.push(smo104132);
const smo104133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104133.setAttribute('id', 'smo104133');
smo104149v0ar.push(smo104133);
const smo104134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo104134.setAttribute('id', 'smo104134');
smo104149v0ar.push(smo104134);
const smo104135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104135.setAttribute('id', 'smo104135');
smo104149v0ar.push(smo104135);
smo104149v0.addTickables(smo104149v0ar)
fmtsmo1041498.joinVoices([smo104149v0]);
const fmtsmo1070158 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo107015v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107015v0ar = [];
const smo106998 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo106998.setAttribute('id', 'smo106998');
smo107015v0ar.push(smo106998);
const smo106999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo106999.setAttribute('id', 'smo106999');
smo107015v0ar.push(smo106999);
const smo107000 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo107000.setAttribute('id', 'smo107000');
smo107015v0ar.push(smo107000);
const smo107001 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo107001.setAttribute('id', 'smo107001');
const smo1070011acc = new VF.Accidental('b');
smo107001.addModifier(smo1070011acc, 1);
smo107015v0ar.push(smo107001);
smo107015v0.addTickables(smo107015v0ar)
fmtsmo1070158.joinVoices([smo107015v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo108951 = smo104129.getStemDirection();
smo104129.setStemDirection(dirsmo108951);
smo104131.setStemDirection(dirsmo108951);
smo104132.setStemDirection(dirsmo108951);
const smo108951 = new VF.Beam([smo104129,smo104131,smo104132]);
const dirsmo108952 = smo104133.getStemDirection();
smo104133.setStemDirection(dirsmo108952);
smo104134.setStemDirection(dirsmo108952);
smo104135.setStemDirection(dirsmo108952);
const smo108952 = new VF.Beam([smo104133,smo104134,smo104135]);
const dirsmo108955 = smo106998.getStemDirection();
smo106998.setStemDirection(dirsmo108955);
smo106999.setStemDirection(dirsmo108955);
const smo108955 = new VF.Beam([smo106998,smo106999]);
const dirsmo108956 = smo107000.getStemDirection();
smo107000.setStemDirection(dirsmo108956);
smo107001.setStemDirection(dirsmo108956);
const smo108956 = new VF.Beam([smo107000,smo107001]);
 
// formatting measures in staff group smo103216
fmtsmo1041498.format([smo104149v0,smo107015v0], 281);
const stavesmo104149 = new VF.Stave(663, 779, 295);
stavesmo104149.setAttribute('id', 'stavesmo104149');
stavesmo104149.setBegBarType(VF.Barline.type.NONE);
stavesmo104149.setContext(context);
stavesmo104149.draw();
smo104149v0.draw(context, stavesmo104149);
smo108951.setContext(context);
smo108951.draw();
smo108952.setContext(context);
smo108952.draw();
const stavesmo107015 = new VF.Stave(663, 934, 295);
stavesmo107015.setAttribute('id', 'stavesmo107015');
stavesmo107015.setBegBarType(VF.Barline.type.NONE);
stavesmo107015.setContext(context);
stavesmo107015.draw();
smo107015v0.draw(context, stavesmo107015);
smo108955.setContext(context);
smo108955.draw();
smo108956.setContext(context);
smo108956.draw();
const fmtsmo1041679 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo104167v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104167v0ar = [];
const smo104150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104150.setAttribute('id', 'smo104150');
smo104167v0ar.push(smo104150);
const smo104151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104151.setAttribute('id', 'smo104151');
smo104167v0ar.push(smo104151);
const smo104152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
smo104152.setAttribute('id', 'smo104152');
smo104167v0ar.push(smo104152);
const smo104153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n","gn/5/n"]}'))
smo104153.setAttribute('id', 'smo104153');
smo104167v0ar.push(smo104153);
smo104167v0.addTickables(smo104167v0ar)
fmtsmo1041679.joinVoices([smo104167v0]);
const fmtsmo1070339 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo107033v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107033v0ar = [];
const smo107016 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo107016.setAttribute('id', 'smo107016');
smo107033v0ar.push(smo107016);
const smo107017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo107017.setAttribute('id', 'smo107017');
smo107033v0ar.push(smo107017);
const smo107018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo107018.setAttribute('id', 'smo107018');
smo107033v0ar.push(smo107018);
const smo107019 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/2/n","eb/3/n"]}'))
smo107019.setAttribute('id', 'smo107019');
const smo1070190acc = new VF.Accidental('b');
smo107019.addModifier(smo1070190acc, 0);
const smo1070191acc = new VF.Accidental('b');
smo107019.addModifier(smo1070191acc, 1);
smo107033v0ar.push(smo107019);
smo107033v0.addTickables(smo107033v0ar)
fmtsmo1070339.joinVoices([smo107033v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo108959 = smo104151.getStemDirection();
smo104151.setStemDirection(dirsmo108959);
smo104152.setStemDirection(dirsmo108959);
smo104153.setStemDirection(dirsmo108959);
const smo108959 = new VF.Beam([smo104151,smo104152,smo104153]);
const dirsmo108962 = smo107016.getStemDirection();
smo107016.setStemDirection(dirsmo108962);
smo107017.setStemDirection(dirsmo108962);
const smo108962 = new VF.Beam([smo107016,smo107017]);
const dirsmo108963 = smo107018.getStemDirection();
smo107018.setStemDirection(dirsmo108963);
smo107019.setStemDirection(dirsmo108963);
const smo108963 = new VF.Beam([smo107018,smo107019]);
 
// formatting measures in staff group smo103216
fmtsmo1041679.format([smo104167v0,smo107033v0], 281);
const stavesmo104167 = new VF.Stave(958, 779, 295);
stavesmo104167.setAttribute('id', 'stavesmo104167');
stavesmo104167.setBegBarType(VF.Barline.type.NONE);
stavesmo104167.setContext(context);
stavesmo104167.draw();
smo104167v0.draw(context, stavesmo104167);
smo108959.setContext(context);
smo108959.draw();
const stavesmo107033 = new VF.Stave(958, 934, 295);
stavesmo107033.setAttribute('id', 'stavesmo107033');
stavesmo107033.setBegBarType(VF.Barline.type.NONE);
stavesmo107033.setContext(context);
stavesmo107033.draw();
smo107033v0.draw(context, stavesmo107033);
smo108962.setContext(context);
smo108962.draw();
smo108963.setContext(context);
smo108963.draw();
const fmtsmo10419010 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo104190v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104190v0ar = [];
const smo104168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n","gb/5/n"]}'))
smo104168.setAttribute('id', 'smo104168');
const smo1041680acc = new VF.Accidental('b');
smo104168.addModifier(smo1041680acc, 0);
const smo1041682acc = new VF.Accidental('b');
smo104168.addModifier(smo1041682acc, 2);
smo104190v0ar.push(smo104168);
const smo104170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
smo104170.setAttribute('id', 'smo104170');
smo104190v0ar.push(smo104170);
const smo104171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo104171.setAttribute('id', 'smo104171');
smo104190v0ar.push(smo104171);
const smo104172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo104172.setAttribute('id', 'smo104172');
smo104190v0ar.push(smo104172);
const smo104173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo104173.setAttribute('id', 'smo104173');
smo104190v0ar.push(smo104173);
const smo104174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo104174.setAttribute('id', 'smo104174');
smo104190v0ar.push(smo104174);
const smo104175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo104175.setAttribute('id', 'smo104175');
smo104190v0ar.push(smo104175);
const smo104176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
smo104176.setAttribute('id', 'smo104176');
smo104190v0ar.push(smo104176);
smo104190v0.addTickables(smo104190v0ar)
fmtsmo10419010.joinVoices([smo104190v0]);
const fmtsmo10705110 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo107051v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107051v0ar = [];
const smo107034 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo107034.setAttribute('id', 'smo107034');
smo107051v0ar.push(smo107034);
const smo107035 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","gb/3/n","an/3/n","cn/4/n"]}'))
smo107035.setAttribute('id', 'smo107035');
const smo1070351acc = new VF.Accidental('b');
smo107035.addModifier(smo1070351acc, 1);
smo107051v0ar.push(smo107035);
const smo107036 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo107036.setAttribute('id', 'smo107036');
smo107051v0ar.push(smo107036);
const smo107037 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n"]}'))
smo107037.setAttribute('id', 'smo107037');
smo107051v0ar.push(smo107037);
smo107051v0.addTickables(smo107051v0ar)
fmtsmo10705110.joinVoices([smo107051v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo108966 = smo104168.getStemDirection();
smo104168.setStemDirection(dirsmo108966);
smo104170.setStemDirection(dirsmo108966);
smo104171.setStemDirection(dirsmo108966);
smo104172.setStemDirection(dirsmo108966);
const smo108966 = new VF.Beam([smo104168,smo104170,smo104171,smo104172]);
const dirsmo108967 = smo104173.getStemDirection();
smo104173.setStemDirection(dirsmo108967);
smo104174.setStemDirection(dirsmo108967);
smo104175.setStemDirection(dirsmo108967);
smo104176.setStemDirection(dirsmo108967);
const smo108967 = new VF.Beam([smo104173,smo104174,smo104175,smo104176]);
const dirsmo108970 = smo107034.getStemDirection();
smo107034.setStemDirection(dirsmo108970);
smo107035.setStemDirection(dirsmo108970);
const smo108970 = new VF.Beam([smo107034,smo107035]);
const dirsmo108971 = smo107036.getStemDirection();
smo107036.setStemDirection(dirsmo108971);
smo107037.setStemDirection(dirsmo108971);
const smo108971 = new VF.Beam([smo107036,smo107037]);
 
// formatting measures in staff group smo103216
fmtsmo10419010.format([smo104190v0,smo107051v0], 281);
const stavesmo104190 = new VF.Stave(1253, 779, 295);
stavesmo104190.setAttribute('id', 'stavesmo104190');
stavesmo104190.setBegBarType(VF.Barline.type.NONE);
stavesmo104190.setContext(context);
stavesmo104190.draw();
smo104190v0.draw(context, stavesmo104190);
smo108966.setContext(context);
smo108966.draw();
smo108967.setContext(context);
smo108967.draw();
const stavesmo107051 = new VF.Stave(1253, 934, 295);
stavesmo107051.setAttribute('id', 'stavesmo107051');
stavesmo107051.setBegBarType(VF.Barline.type.NONE);
stavesmo107051.setContext(context);
stavesmo107051.draw();
smo107051v0.draw(context, stavesmo107051);
smo108970.setContext(context);
smo108970.draw();
smo108971.setContext(context);
smo108971.draw();
const fmtsmo10420811 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo104208v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104208v0ar = [];
const smo104191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo104191.setAttribute('id', 'smo104191');
smo104208v0ar.push(smo104191);
const smo104192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo104192.setAttribute('id', 'smo104192');
smo104208v0ar.push(smo104192);
const smo104193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo104193.setAttribute('id', 'smo104193');
smo104208v0ar.push(smo104193);
const smo104194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo104194.setAttribute('id', 'smo104194');
const smo1041940acc = new VF.Accidental('b');
smo104194.addModifier(smo1041940acc, 0);
smo104208v0ar.push(smo104194);
smo104208v0.addTickables(smo104208v0ar)
fmtsmo10420811.joinVoices([smo104208v0]);
const fmtsmo10706911 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo107069v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107069v0ar = [];
const smo107052 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo107052.setAttribute('id', 'smo107052');
smo107069v0ar.push(smo107052);
const smo107053 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo107053.setAttribute('id', 'smo107053');
smo107069v0ar.push(smo107053);
const smo107054 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo107054.setAttribute('id', 'smo107054');
smo107069v0ar.push(smo107054);
const smo107055 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo107055.setAttribute('id', 'smo107055');
smo107069v0ar.push(smo107055);
smo107069v0.addTickables(smo107069v0ar)
fmtsmo10706911.joinVoices([smo107069v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo108974 = smo104192.getStemDirection();
smo104192.setStemDirection(dirsmo108974);
smo104193.setStemDirection(dirsmo108974);
smo104194.setStemDirection(dirsmo108974);
const smo108974 = new VF.Beam([smo104192,smo104193,smo104194]);
const dirsmo108977 = smo107052.getStemDirection();
smo107052.setStemDirection(dirsmo108977);
smo107053.setStemDirection(dirsmo108977);
const smo108977 = new VF.Beam([smo107052,smo107053]);
const dirsmo108978 = smo107054.getStemDirection();
smo107054.setStemDirection(dirsmo108978);
smo107055.setStemDirection(dirsmo108978);
const smo108978 = new VF.Beam([smo107054,smo107055]);
 
// formatting measures in staff group smo103216
fmtsmo10420811.format([smo104208v0,smo107069v0], 281);
const stavesmo104208 = new VF.Stave(1548, 779, 295);
stavesmo104208.setAttribute('id', 'stavesmo104208');
stavesmo104208.setBegBarType(VF.Barline.type.NONE);
stavesmo104208.setContext(context);
stavesmo104208.draw();
smo104208v0.draw(context, stavesmo104208);
smo108974.setContext(context);
smo108974.draw();
const stavesmo107069 = new VF.Stave(1548, 934, 295);
stavesmo107069.setAttribute('id', 'stavesmo107069');
stavesmo107069.setBegBarType(VF.Barline.type.NONE);
stavesmo107069.setContext(context);
stavesmo107069.draw();
smo107069v0.draw(context, stavesmo107069);
smo108977.setContext(context);
smo108977.draw();
smo108978.setContext(context);
smo108978.draw();
const rightsmo103216stavesmo1042081 = new VF.StaveConnector(stavesmo104208, stavesmo107069).setType(0);
rightsmo103216stavesmo1042081.setContext(context).draw();
const fmtsmo10422912 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo104229v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104229v0ar = [];
const smo104209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo104209.setAttribute('id', 'smo104209');
smo104229v0ar.push(smo104209);
const smo104211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104211.setAttribute('id', 'smo104211');
smo104229v0ar.push(smo104211);
const smo104212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo104212.setAttribute('id', 'smo104212');
smo104229v0ar.push(smo104212);
const smo104213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104213.setAttribute('id', 'smo104213');
smo104229v0ar.push(smo104213);
const smo104214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo104214.setAttribute('id', 'smo104214');
smo104229v0ar.push(smo104214);
const smo104215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104215.setAttribute('id', 'smo104215');
smo104229v0ar.push(smo104215);
smo104229v0.addTickables(smo104229v0ar)
fmtsmo10422912.joinVoices([smo104229v0]);
const fmtsmo10708712 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo107087v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107087v0ar = [];
const smo107070 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo107070.setAttribute('id', 'smo107070');
smo107087v0ar.push(smo107070);
const smo107071 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo107071.setAttribute('id', 'smo107071');
smo107087v0ar.push(smo107071);
const smo107072 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo107072.setAttribute('id', 'smo107072');
smo107087v0ar.push(smo107072);
const smo107073 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo107073.setAttribute('id', 'smo107073');
const smo1070731acc = new VF.Accidental('b');
smo107073.addModifier(smo1070731acc, 1);
smo107087v0ar.push(smo107073);
smo107087v0.addTickables(smo107087v0ar)
fmtsmo10708712.joinVoices([smo107087v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo108989 = smo104209.getStemDirection();
smo104209.setStemDirection(dirsmo108989);
smo104211.setStemDirection(dirsmo108989);
smo104212.setStemDirection(dirsmo108989);
const smo108989 = new VF.Beam([smo104209,smo104211,smo104212]);
const dirsmo108990 = smo104213.getStemDirection();
smo104213.setStemDirection(dirsmo108990);
smo104214.setStemDirection(dirsmo108990);
smo104215.setStemDirection(dirsmo108990);
const smo108990 = new VF.Beam([smo104213,smo104214,smo104215]);
const dirsmo108993 = smo107070.getStemDirection();
smo107070.setStemDirection(dirsmo108993);
smo107071.setStemDirection(dirsmo108993);
const smo108993 = new VF.Beam([smo107070,smo107071]);
const dirsmo108994 = smo107072.getStemDirection();
smo107072.setStemDirection(dirsmo108994);
smo107073.setStemDirection(dirsmo108994);
const smo108994 = new VF.Beam([smo107072,smo107073]);
 
// formatting measures in staff group smo103216
fmtsmo10422912.format([smo104229v0,smo107087v0], 237);
const stavesmo104229 = new VF.Stave(73, 1132, 295);
stavesmo104229.setAttribute('id', 'stavesmo104229');
stavesmo104229.setBegBarType(1);
stavesmo104229.addClef('treble');
stavesmo104229.setContext(context);
stavesmo104229.draw();
smo104229v0.draw(context, stavesmo104229);
smo108989.setContext(context);
smo108989.draw();
smo108990.setContext(context);
smo108990.draw();
const stavesmo107087 = new VF.Stave(73, 1287, 295);
stavesmo107087.setAttribute('id', 'stavesmo107087');
stavesmo107087.setBegBarType(1);
stavesmo107087.addClef('bass');
stavesmo107087.setContext(context);
stavesmo107087.draw();
smo107087v0.draw(context, stavesmo107087);
smo108993.setContext(context);
smo108993.draw();
smo108994.setContext(context);
smo108994.draw();
const leftsmo103216stavesmo1042291 = new VF.StaveConnector(stavesmo104229, stavesmo107087).setType(3);
leftsmo103216stavesmo1042291.setContext(context).draw();
const fmtsmo10424813 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo104248v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104248v0ar = [];
const smo104230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104230.setAttribute('id', 'smo104230');
smo104248v0ar.push(smo104230);
const smo104231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104231.setAttribute('id', 'smo104231');
smo104248v0ar.push(smo104231);
const smo104232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104232.setAttribute('id', 'smo104232');
smo104248v0ar.push(smo104232);
const smo104233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo104233.setAttribute('id', 'smo104233');
smo104248v0ar.push(smo104233);
const smo104234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo104234.setAttribute('id', 'smo104234');
const smo1042340acc = new VF.Accidental('b');
smo104234.addModifier(smo1042340acc, 0);
const smo1042341acc = new VF.Accidental('b');
smo104234.addModifier(smo1042341acc, 1);
const smo1042342acc = new VF.Accidental('b');
smo104234.addModifier(smo1042342acc, 2);
smo104248v0ar.push(smo104234);
smo104248v0.addTickables(smo104248v0ar)
fmtsmo10424813.joinVoices([smo104248v0]);
const fmtsmo10710513 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo107105v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107105v0ar = [];
const smo107088 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo107088.setAttribute('id', 'smo107088');
smo107105v0ar.push(smo107088);
const smo107089 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo107089.setAttribute('id', 'smo107089');
smo107105v0ar.push(smo107089);
const smo107090 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo107090.setAttribute('id', 'smo107090');
smo107105v0ar.push(smo107090);
const smo107091 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo107091.setAttribute('id', 'smo107091');
smo107105v0ar.push(smo107091);
smo107105v0.addTickables(smo107105v0ar)
fmtsmo10710513.joinVoices([smo107105v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo108997 = smo104231.getStemDirection();
smo104231.setStemDirection(dirsmo108997);
smo104232.setStemDirection(dirsmo108997);
smo104233.setStemDirection(dirsmo108997);
smo104234.setStemDirection(dirsmo108997);
const smo108997 = new VF.Beam([smo104231,smo104232,smo104233,smo104234]);
const dirsmo109000 = smo107088.getStemDirection();
smo107088.setStemDirection(dirsmo109000);
smo107089.setStemDirection(dirsmo109000);
const smo109000 = new VF.Beam([smo107088,smo107089]);
const dirsmo109001 = smo107090.getStemDirection();
smo107090.setStemDirection(dirsmo109001);
smo107091.setStemDirection(dirsmo109001);
const smo109001 = new VF.Beam([smo107090,smo107091]);
 
// formatting measures in staff group smo103216
fmtsmo10424813.format([smo104248v0,smo107105v0], 281);
const stavesmo104248 = new VF.Stave(368, 1132, 295);
stavesmo104248.setAttribute('id', 'stavesmo104248');
stavesmo104248.setBegBarType(VF.Barline.type.NONE);
stavesmo104248.setContext(context);
stavesmo104248.draw();
smo104248v0.draw(context, stavesmo104248);
smo108997.setContext(context);
smo108997.draw();
const stavesmo107105 = new VF.Stave(368, 1287, 295);
stavesmo107105.setAttribute('id', 'stavesmo107105');
stavesmo107105.setBegBarType(VF.Barline.type.NONE);
stavesmo107105.setContext(context);
stavesmo107105.draw();
smo107105v0.draw(context, stavesmo107105);
smo109000.setContext(context);
smo109000.draw();
smo109001.setContext(context);
smo109001.draw();
const fmtsmo10427014 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo104270v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104270v0ar = [];
const smo104249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo104249.setAttribute('id', 'smo104249');
smo104270v0ar.push(smo104249);
const smo104251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104251.setAttribute('id', 'smo104251');
smo104270v0ar.push(smo104251);
const smo104252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo104252.setAttribute('id', 'smo104252');
smo104270v0ar.push(smo104252);
const smo104253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo104253.setAttribute('id', 'smo104253');
smo104270v0ar.push(smo104253);
const smo104254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo104254.setAttribute('id', 'smo104254');
smo104270v0ar.push(smo104254);
const smo104255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo104255.setAttribute('id', 'smo104255');
smo104270v0ar.push(smo104255);
const smo104256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo104256.setAttribute('id', 'smo104256');
smo104270v0ar.push(smo104256);
smo104270v0.addTickables(smo104270v0ar)
fmtsmo10427014.joinVoices([smo104270v0]);
const fmtsmo10712314 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo107123v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107123v0ar = [];
const smo107106 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo107106.setAttribute('id', 'smo107106');
smo107123v0ar.push(smo107106);
const smo107107 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo107107.setAttribute('id', 'smo107107');
smo107123v0ar.push(smo107107);
const smo107108 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo107108.setAttribute('id', 'smo107108');
smo107123v0ar.push(smo107108);
const smo107109 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo107109.setAttribute('id', 'smo107109');
smo107123v0ar.push(smo107109);
smo107123v0.addTickables(smo107123v0ar)
fmtsmo10712314.joinVoices([smo107123v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109004 = smo104249.getStemDirection();
smo104249.setStemDirection(dirsmo109004);
smo104251.setStemDirection(dirsmo109004);
smo104252.setStemDirection(dirsmo109004);
smo104253.setStemDirection(dirsmo109004);
const smo109004 = new VF.Beam([smo104249,smo104251,smo104252,smo104253]);
const dirsmo109005 = smo104254.getStemDirection();
smo104254.setStemDirection(dirsmo109005);
smo104255.setStemDirection(dirsmo109005);
smo104256.setStemDirection(dirsmo109005);
const smo109005 = new VF.Beam([smo104254,smo104255,smo104256]);
const dirsmo109008 = smo107106.getStemDirection();
smo107106.setStemDirection(dirsmo109008);
smo107107.setStemDirection(dirsmo109008);
const smo109008 = new VF.Beam([smo107106,smo107107]);
const dirsmo109009 = smo107108.getStemDirection();
smo107108.setStemDirection(dirsmo109009);
smo107109.setStemDirection(dirsmo109009);
const smo109009 = new VF.Beam([smo107108,smo107109]);
 
// formatting measures in staff group smo103216
fmtsmo10427014.format([smo104270v0,smo107123v0], 281);
const stavesmo104270 = new VF.Stave(663, 1132, 295);
stavesmo104270.setAttribute('id', 'stavesmo104270');
stavesmo104270.setBegBarType(VF.Barline.type.NONE);
stavesmo104270.setContext(context);
stavesmo104270.draw();
smo104270v0.draw(context, stavesmo104270);
smo109004.setContext(context);
smo109004.draw();
smo109005.setContext(context);
smo109005.draw();
const stavesmo107123 = new VF.Stave(663, 1287, 295);
stavesmo107123.setAttribute('id', 'stavesmo107123');
stavesmo107123.setBegBarType(VF.Barline.type.NONE);
stavesmo107123.setContext(context);
stavesmo107123.draw();
smo107123v0.draw(context, stavesmo107123);
smo109008.setContext(context);
smo109008.draw();
smo109009.setContext(context);
smo109009.draw();
const fmtsmo10428815 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo104288v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104288v0ar = [];
const smo104271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104271.setAttribute('id', 'smo104271');
smo104288v0ar.push(smo104271);
const smo104272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104272.setAttribute('id', 'smo104272');
smo104288v0ar.push(smo104272);
const smo104273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo104273.setAttribute('id', 'smo104273');
smo104288v0ar.push(smo104273);
const smo104274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo104274.setAttribute('id', 'smo104274');
smo104288v0ar.push(smo104274);
smo104288v0.addTickables(smo104288v0ar)
fmtsmo10428815.joinVoices([smo104288v0]);
const fmtsmo10714115 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo107141v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107141v0ar = [];
const smo107124 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo107124.setAttribute('id', 'smo107124');
smo107141v0ar.push(smo107124);
const smo107125 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo107125.setAttribute('id', 'smo107125');
smo107141v0ar.push(smo107125);
const smo107126 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107126.setAttribute('id', 'smo107126');
smo107141v0ar.push(smo107126);
const smo107127 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo107127.setAttribute('id', 'smo107127');
smo107141v0ar.push(smo107127);
smo107141v0.addTickables(smo107141v0ar)
fmtsmo10714115.joinVoices([smo107141v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109012 = smo104272.getStemDirection();
smo104272.setStemDirection(dirsmo109012);
smo104273.setStemDirection(dirsmo109012);
smo104274.setStemDirection(dirsmo109012);
const smo109012 = new VF.Beam([smo104272,smo104273,smo104274]);
const dirsmo109015 = smo107124.getStemDirection();
smo107124.setStemDirection(dirsmo109015);
smo107125.setStemDirection(dirsmo109015);
const smo109015 = new VF.Beam([smo107124,smo107125]);
 
// formatting measures in staff group smo103216
fmtsmo10428815.format([smo104288v0,smo107141v0], 281);
const stavesmo104288 = new VF.Stave(958, 1132, 295);
stavesmo104288.setAttribute('id', 'stavesmo104288');
stavesmo104288.setBegBarType(VF.Barline.type.NONE);
stavesmo104288.setContext(context);
stavesmo104288.draw();
smo104288v0.draw(context, stavesmo104288);
smo109012.setContext(context);
smo109012.draw();
const stavesmo107141 = new VF.Stave(958, 1287, 295);
stavesmo107141.setAttribute('id', 'stavesmo107141');
stavesmo107141.setBegBarType(VF.Barline.type.NONE);
stavesmo107141.setContext(context);
stavesmo107141.draw();
smo107141v0.draw(context, stavesmo107141);
smo109015.setContext(context);
smo109015.draw();
const fmtsmo10431016 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo104310v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104310v0ar = [];
const smo104289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo104289.setAttribute('id', 'smo104289');
smo104310v0ar.push(smo104289);
const smo104290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo104290.setAttribute('id', 'smo104290');
smo104310v0ar.push(smo104290);
const smo104291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo104291.setAttribute('id', 'smo104291');
smo104310v0ar.push(smo104291);
const smo104292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo104292.setAttribute('id', 'smo104292');
smo104310v0ar.push(smo104292);
const smo104293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo104293.setAttribute('id', 'smo104293');
smo104310v0ar.push(smo104293);
const smo104294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo104294.setAttribute('id', 'smo104294');
smo104310v0ar.push(smo104294);
const smo104295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo104295.setAttribute('id', 'smo104295');
smo104310v0ar.push(smo104295);
const smo104296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo104296.setAttribute('id', 'smo104296');
smo104310v0ar.push(smo104296);
smo104310v0.addTickables(smo104310v0ar)
fmtsmo10431016.joinVoices([smo104310v0]);
const fmtsmo10715916 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo107159v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107159v0ar = [];
const smo107142 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo107142.setAttribute('id', 'smo107142');
smo107159v0ar.push(smo107142);
const smo107143 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107143.setAttribute('id', 'smo107143');
smo107159v0ar.push(smo107143);
const smo107144 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo107144.setAttribute('id', 'smo107144');
const smo1071440acc = new VF.Accidental('b');
smo107144.addModifier(smo1071440acc, 0);
const smo1071441acc = new VF.Accidental('b');
smo107144.addModifier(smo1071441acc, 1);
smo107159v0ar.push(smo107144);
const smo107145 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107145.setAttribute('id', 'smo107145');
smo107159v0ar.push(smo107145);
smo107159v0.addTickables(smo107159v0ar)
fmtsmo10715916.joinVoices([smo107159v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109018 = smo104289.getStemDirection();
smo104289.setStemDirection(dirsmo109018);
smo104290.setStemDirection(dirsmo109018);
smo104291.setStemDirection(dirsmo109018);
smo104292.setStemDirection(dirsmo109018);
const smo109018 = new VF.Beam([smo104289,smo104290,smo104291,smo104292]);
const dirsmo109019 = smo104293.getStemDirection();
smo104293.setStemDirection(dirsmo109019);
smo104294.setStemDirection(dirsmo109019);
smo104295.setStemDirection(dirsmo109019);
smo104296.setStemDirection(dirsmo109019);
const smo109019 = new VF.Beam([smo104293,smo104294,smo104295,smo104296]);
const dirsmo109022 = smo107142.getStemDirection();
smo107142.setStemDirection(dirsmo109022);
smo107143.setStemDirection(dirsmo109022);
const smo109022 = new VF.Beam([smo107142,smo107143]);
const dirsmo109023 = smo107144.getStemDirection();
smo107144.setStemDirection(dirsmo109023);
smo107145.setStemDirection(dirsmo109023);
const smo109023 = new VF.Beam([smo107144,smo107145]);
 
// formatting measures in staff group smo103216
fmtsmo10431016.format([smo104310v0,smo107159v0], 281);
const stavesmo104310 = new VF.Stave(1253, 1132, 295);
stavesmo104310.setAttribute('id', 'stavesmo104310');
stavesmo104310.setBegBarType(VF.Barline.type.NONE);
stavesmo104310.setContext(context);
stavesmo104310.draw();
smo104310v0.draw(context, stavesmo104310);
smo109018.setContext(context);
smo109018.draw();
smo109019.setContext(context);
smo109019.draw();
const stavesmo107159 = new VF.Stave(1253, 1287, 295);
stavesmo107159.setAttribute('id', 'stavesmo107159');
stavesmo107159.setBegBarType(VF.Barline.type.NONE);
stavesmo107159.setContext(context);
stavesmo107159.draw();
smo107159v0.draw(context, stavesmo107159);
smo109022.setContext(context);
smo109022.draw();
smo109023.setContext(context);
smo109023.draw();
const fmtsmo10433217 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo104332v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104332v0ar = [];
const smo104311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo104311.setAttribute('id', 'smo104311');
smo104332v0ar.push(smo104311);
const smo104312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo104312.setAttribute('id', 'smo104312');
smo104332v0ar.push(smo104312);
const smo104313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo104313.setAttribute('id', 'smo104313');
smo104332v0ar.push(smo104313);
const smo104314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo104314.setAttribute('id', 'smo104314');
smo104332v0ar.push(smo104314);
const smo104315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo104315.setAttribute('id', 'smo104315');
smo104332v0ar.push(smo104315);
const smo104316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo104316.setAttribute('id', 'smo104316');
smo104332v0ar.push(smo104316);
const smo104317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo104317.setAttribute('id', 'smo104317');
smo104332v0ar.push(smo104317);
const smo104318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo104318.setAttribute('id', 'smo104318');
smo104332v0ar.push(smo104318);
smo104332v0.addTickables(smo104332v0ar)
fmtsmo10433217.joinVoices([smo104332v0]);
const fmtsmo10717717 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo107177v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107177v0ar = [];
const smo107160 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo107160.setAttribute('id', 'smo107160');
smo107177v0ar.push(smo107160);
const smo107161 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo107161.setAttribute('id', 'smo107161');
smo107177v0ar.push(smo107161);
const smo107162 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo107162.setAttribute('id', 'smo107162');
const smo1071620acc = new VF.Accidental('b');
smo107162.addModifier(smo1071620acc, 0);
const smo1071621acc = new VF.Accidental('b');
smo107162.addModifier(smo1071621acc, 1);
smo107177v0ar.push(smo107162);
const smo107163 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo107163.setAttribute('id', 'smo107163');
smo107177v0ar.push(smo107163);
smo107177v0.addTickables(smo107177v0ar)
fmtsmo10717717.joinVoices([smo107177v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109026 = smo104311.getStemDirection();
smo104311.setStemDirection(dirsmo109026);
smo104312.setStemDirection(dirsmo109026);
smo104313.setStemDirection(dirsmo109026);
smo104314.setStemDirection(dirsmo109026);
const smo109026 = new VF.Beam([smo104311,smo104312,smo104313,smo104314]);
const dirsmo109027 = smo104315.getStemDirection();
smo104315.setStemDirection(dirsmo109027);
smo104316.setStemDirection(dirsmo109027);
smo104317.setStemDirection(dirsmo109027);
smo104318.setStemDirection(dirsmo109027);
const smo109027 = new VF.Beam([smo104315,smo104316,smo104317,smo104318]);
const dirsmo109030 = smo107160.getStemDirection();
smo107160.setStemDirection(dirsmo109030);
smo107161.setStemDirection(dirsmo109030);
const smo109030 = new VF.Beam([smo107160,smo107161]);
const dirsmo109031 = smo107162.getStemDirection();
smo107162.setStemDirection(dirsmo109031);
smo107163.setStemDirection(dirsmo109031);
const smo109031 = new VF.Beam([smo107162,smo107163]);
 
// formatting measures in staff group smo103216
fmtsmo10433217.format([smo104332v0,smo107177v0], 281);
const stavesmo104332 = new VF.Stave(1548, 1132, 295);
stavesmo104332.setAttribute('id', 'stavesmo104332');
stavesmo104332.setBegBarType(VF.Barline.type.NONE);
stavesmo104332.setContext(context);
stavesmo104332.draw();
smo104332v0.draw(context, stavesmo104332);
smo109026.setContext(context);
smo109026.draw();
smo109027.setContext(context);
smo109027.draw();
const stavesmo107177 = new VF.Stave(1548, 1287, 295);
stavesmo107177.setAttribute('id', 'stavesmo107177');
stavesmo107177.setBegBarType(VF.Barline.type.NONE);
stavesmo107177.setContext(context);
stavesmo107177.draw();
smo107177v0.draw(context, stavesmo107177);
smo109030.setContext(context);
smo109030.draw();
smo109031.setContext(context);
smo109031.draw();
const rightsmo103216stavesmo1043321 = new VF.StaveConnector(stavesmo104332, stavesmo107177).setType(0);
rightsmo103216stavesmo1043321.setContext(context).draw();
const fmtsmo10435318 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo104353v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104353v0ar = [];
const smo104333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo104333.setAttribute('id', 'smo104333');
smo104353v0ar.push(smo104333);
const smo104334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104334.setAttribute('id', 'smo104334');
smo104353v0ar.push(smo104334);
const smo104335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo104335.setAttribute('id', 'smo104335');
smo104353v0ar.push(smo104335);
const smo104336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo104336.setAttribute('id', 'smo104336');
smo104353v0ar.push(smo104336);
const smo104337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo104337.setAttribute('id', 'smo104337');
smo104353v0ar.push(smo104337);
const smo104338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo104338.setAttribute('id', 'smo104338');
smo104353v0ar.push(smo104338);
const smo104339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo104339.setAttribute('id', 'smo104339');
smo104353v0ar.push(smo104339);
smo104353v0.addTickables(smo104353v0ar)
fmtsmo10435318.joinVoices([smo104353v0]);
const fmtsmo10719518 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo107195v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107195v0ar = [];
const smo107178 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo107178.setAttribute('id', 'smo107178');
smo107195v0ar.push(smo107178);
const smo107179 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107179.setAttribute('id', 'smo107179');
smo107195v0ar.push(smo107179);
const smo107180 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo107180.setAttribute('id', 'smo107180');
smo107195v0ar.push(smo107180);
const smo107181 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo107181.setAttribute('id', 'smo107181');
smo107195v0ar.push(smo107181);
smo107195v0.addTickables(smo107195v0ar)
fmtsmo10719518.joinVoices([smo107195v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109042 = smo104333.getStemDirection();
smo104333.setStemDirection(dirsmo109042);
smo104334.setStemDirection(dirsmo109042);
smo104335.setStemDirection(dirsmo109042);
smo104336.setStemDirection(dirsmo109042);
const smo109042 = new VF.Beam([smo104333,smo104334,smo104335,smo104336]);
const dirsmo109043 = smo104337.getStemDirection();
smo104337.setStemDirection(dirsmo109043);
smo104338.setStemDirection(dirsmo109043);
smo104339.setStemDirection(dirsmo109043);
const smo109043 = new VF.Beam([smo104337,smo104338,smo104339]);
const dirsmo109046 = smo107178.getStemDirection();
smo107178.setStemDirection(dirsmo109046);
smo107179.setStemDirection(dirsmo109046);
const smo109046 = new VF.Beam([smo107178,smo107179]);
const dirsmo109047 = smo107180.getStemDirection();
smo107180.setStemDirection(dirsmo109047);
smo107181.setStemDirection(dirsmo109047);
const smo109047 = new VF.Beam([smo107180,smo107181]);
 
// formatting measures in staff group smo103216
fmtsmo10435318.format([smo104353v0,smo107195v0], 237);
const stavesmo104353 = new VF.Stave(73, 1481, 295);
stavesmo104353.setAttribute('id', 'stavesmo104353');
stavesmo104353.setBegBarType(1);
stavesmo104353.addClef('treble');
stavesmo104353.setContext(context);
stavesmo104353.draw();
smo104353v0.draw(context, stavesmo104353);
smo109042.setContext(context);
smo109042.draw();
smo109043.setContext(context);
smo109043.draw();
const stavesmo107195 = new VF.Stave(73, 1625, 295);
stavesmo107195.setAttribute('id', 'stavesmo107195');
stavesmo107195.setBegBarType(1);
stavesmo107195.addClef('bass');
stavesmo107195.setContext(context);
stavesmo107195.draw();
smo107195v0.draw(context, stavesmo107195);
smo109046.setContext(context);
smo109046.draw();
smo109047.setContext(context);
smo109047.draw();
const leftsmo103216stavesmo1043531 = new VF.StaveConnector(stavesmo104353, stavesmo107195).setType(3);
leftsmo103216stavesmo1043531.setContext(context).draw();
const fmtsmo10437219 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo104372v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104372v0ar = [];
const smo104354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104354.setAttribute('id', 'smo104354');
smo104372v0ar.push(smo104354);
const smo104355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104355.setAttribute('id', 'smo104355');
smo104372v0ar.push(smo104355);
const smo104356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo104356.setAttribute('id', 'smo104356');
smo104372v0ar.push(smo104356);
const smo104357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo104357.setAttribute('id', 'smo104357');
const smo1043570acc = new VF.Accidental('b');
smo104357.addModifier(smo1043570acc, 0);
smo104372v0ar.push(smo104357);
smo104372v0.addTickables(smo104372v0ar)
fmtsmo10437219.joinVoices([smo104372v0]);
const fmtsmo10721419 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo107214v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107214v0ar = [];
const smo107196 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
smo107196.setAttribute('id', 'smo107196');
smo107214v0ar.push(smo107196);
const smo107197 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo107197.setAttribute('id', 'smo107197');
smo107214v0ar.push(smo107197);
const smo107198 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo107198.setAttribute('id', 'smo107198');
smo107214v0ar.push(smo107198);
const smo107199 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo107199.setAttribute('id', 'smo107199');
smo107214v0ar.push(smo107199);
smo107214v0.addTickables(smo107214v0ar)
fmtsmo10721419.joinVoices([smo107214v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109050 = smo104355.getStemDirection();
smo104355.setStemDirection(dirsmo109050);
smo104356.setStemDirection(dirsmo109050);
smo104357.setStemDirection(dirsmo109050);
const smo109050 = new VF.Beam([smo104355,smo104356,smo104357]);
const dirsmo109052 = smo107196.getStemDirection();
smo107196.setStemDirection(dirsmo109052);
smo107197.setStemDirection(dirsmo109052);
const smo109052 = new VF.Beam([smo107196,smo107197]);
const dirsmo109053 = smo107198.getStemDirection();
smo107198.setStemDirection(dirsmo109053);
smo107199.setStemDirection(dirsmo109053);
const smo109053 = new VF.Beam([smo107198,smo107199]);
 
// formatting measures in staff group smo103216
fmtsmo10437219.format([smo104372v0,smo107214v0], 277);
const stavesmo104372 = new VF.Stave(368, 1481, 295);
stavesmo104372.setAttribute('id', 'stavesmo104372');
stavesmo104372.setBegBarType(VF.Barline.type.NONE);
stavesmo104372.setEndBarType(5);
stavesmo104372.setContext(context);
stavesmo104372.draw();
smo104372v0.draw(context, stavesmo104372);
smo109050.setContext(context);
smo109050.draw();
const stavesmo107214 = new VF.Stave(368, 1625, 295);
stavesmo107214.setAttribute('id', 'stavesmo107214');
stavesmo107214.setBegBarType(VF.Barline.type.NONE);
stavesmo107214.setEndBarType(5);
stavesmo107214.setContext(context);
stavesmo107214.draw();
smo107214v0.draw(context, stavesmo107214);
smo109052.setContext(context);
smo109052.draw();
smo109053.setContext(context);
smo109053.draw();
const fmtsmo10439220 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo104392v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104392v0ar = [];
const smo104373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104373.setAttribute('id', 'smo104373');
smo104392v0ar.push(smo104373);
const smo104374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104374.setAttribute('id', 'smo104374');
smo104392v0ar.push(smo104374);
const smo104375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo104375.setAttribute('id', 'smo104375');
smo104392v0ar.push(smo104375);
const smo104376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo104376.setAttribute('id', 'smo104376');
smo104392v0ar.push(smo104376);
const smo104377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo104377.setAttribute('id', 'smo104377');
const smo1043770acc = new VF.Accidental('b');
smo104377.addModifier(smo1043770acc, 0);
const smo1043771acc = new VF.Accidental('b');
smo104377.addModifier(smo1043771acc, 1);
const smo1043772acc = new VF.Accidental('b');
smo104377.addModifier(smo1043772acc, 2);
smo104392v0ar.push(smo104377);
smo104392v0.addTickables(smo104392v0ar)
fmtsmo10439220.joinVoices([smo104392v0]);
const fmtsmo10723320 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo107233v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107233v0ar = [];
const smo107215 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
smo107215.setAttribute('id', 'smo107215');
smo107233v0ar.push(smo107215);
const smo107216 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo107216.setAttribute('id', 'smo107216');
smo107233v0ar.push(smo107216);
const smo107217 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo107217.setAttribute('id', 'smo107217');
smo107233v0ar.push(smo107217);
const smo107218 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo107218.setAttribute('id', 'smo107218');
smo107233v0ar.push(smo107218);
smo107233v0.addTickables(smo107233v0ar)
fmtsmo10723320.joinVoices([smo107233v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109055 = smo104374.getStemDirection();
smo104374.setStemDirection(dirsmo109055);
smo104375.setStemDirection(dirsmo109055);
smo104376.setStemDirection(dirsmo109055);
smo104377.setStemDirection(dirsmo109055);
const smo109055 = new VF.Beam([smo104374,smo104375,smo104376,smo104377]);
const dirsmo109058 = smo107215.getStemDirection();
smo107215.setStemDirection(dirsmo109058);
smo107216.setStemDirection(dirsmo109058);
const smo109058 = new VF.Beam([smo107215,smo107216]);
 
// formatting measures in staff group smo103216
fmtsmo10439220.format([smo104392v0,smo107233v0], 281);
const stavesmo104392 = new VF.Stave(663, 1481, 295);
stavesmo104392.setAttribute('id', 'stavesmo104392');
stavesmo104392.setBegBarType(VF.Barline.type.NONE);
stavesmo104392.setContext(context);
stavesmo104392.draw();
smo104392v0.draw(context, stavesmo104392);
smo109055.setContext(context);
smo109055.draw();
const stavesmo107233 = new VF.Stave(663, 1625, 295);
stavesmo107233.setAttribute('id', 'stavesmo107233');
stavesmo107233.setBegBarType(VF.Barline.type.NONE);
stavesmo107233.setContext(context);
stavesmo107233.draw();
smo107233v0.draw(context, stavesmo107233);
smo109058.setContext(context);
smo109058.draw();
const fmtsmo10441321 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo104413v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104413v0ar = [];
const smo104393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo104393.setAttribute('id', 'smo104393');
smo104413v0ar.push(smo104393);
const smo104394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo104394.setAttribute('id', 'smo104394');
smo104413v0ar.push(smo104394);
const smo104395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo104395.setAttribute('id', 'smo104395');
smo104413v0ar.push(smo104395);
const smo104396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo104396.setAttribute('id', 'smo104396');
smo104413v0ar.push(smo104396);
const smo104397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo104397.setAttribute('id', 'smo104397');
smo104413v0ar.push(smo104397);
const smo104398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo104398.setAttribute('id', 'smo104398');
smo104413v0ar.push(smo104398);
const smo104399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo104399.setAttribute('id', 'smo104399');
const smo1043990acc = new VF.Accidental('b');
smo104399.addModifier(smo1043990acc, 0);
const smo1043991acc = new VF.Accidental('b');
smo104399.addModifier(smo1043991acc, 1);
const smo1043992acc = new VF.Accidental('b');
smo104399.addModifier(smo1043992acc, 2);
smo104413v0ar.push(smo104399);
smo104413v0.addTickables(smo104413v0ar)
fmtsmo10441321.joinVoices([smo104413v0]);
const fmtsmo10725121 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo107251v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107251v0ar = [];
const smo107234 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo107234.setAttribute('id', 'smo107234');
smo107251v0ar.push(smo107234);
const smo107235 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107235.setAttribute('id', 'smo107235');
smo107251v0ar.push(smo107235);
const smo107236 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo107236.setAttribute('id', 'smo107236');
smo107251v0ar.push(smo107236);
const smo107237 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107237.setAttribute('id', 'smo107237');
smo107251v0ar.push(smo107237);
smo107251v0.addTickables(smo107251v0ar)
fmtsmo10725121.joinVoices([smo107251v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109061 = smo104393.getStemDirection();
smo104393.setStemDirection(dirsmo109061);
smo104394.setStemDirection(dirsmo109061);
smo104395.setStemDirection(dirsmo109061);
const smo109061 = new VF.Beam([smo104393,smo104394,smo104395]);
const dirsmo109062 = smo104396.getStemDirection();
smo104396.setStemDirection(dirsmo109062);
smo104397.setStemDirection(dirsmo109062);
smo104398.setStemDirection(dirsmo109062);
smo104399.setStemDirection(dirsmo109062);
const smo109062 = new VF.Beam([smo104396,smo104397,smo104398,smo104399]);
const dirsmo109064 = smo107234.getStemDirection();
smo107234.setStemDirection(dirsmo109064);
smo107235.setStemDirection(dirsmo109064);
const smo109064 = new VF.Beam([smo107234,smo107235]);
const dirsmo109065 = smo107236.getStemDirection();
smo107236.setStemDirection(dirsmo109065);
smo107237.setStemDirection(dirsmo109065);
const smo109065 = new VF.Beam([smo107236,smo107237]);
 
// formatting measures in staff group smo103216
fmtsmo10441321.format([smo104413v0,smo107251v0], 272);
const stavesmo104413 = new VF.Stave(958, 1481, 295);
stavesmo104413.setAttribute('id', 'stavesmo104413');
stavesmo104413.setBegBarType(4);
stavesmo104413.setContext(context);
stavesmo104413.draw();
smo104413v0.draw(context, stavesmo104413);
smo109061.setContext(context);
smo109061.draw();
smo109062.setContext(context);
smo109062.draw();
const stavesmo107251 = new VF.Stave(958, 1625, 295);
stavesmo107251.setAttribute('id', 'stavesmo107251');
stavesmo107251.setBegBarType(4);
stavesmo107251.setContext(context);
stavesmo107251.draw();
smo107251v0.draw(context, stavesmo107251);
smo109064.setContext(context);
smo109064.draw();
smo109065.setContext(context);
smo109065.draw();
const fmtsmo10443422 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo104434v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104434v0ar = [];
const smo104414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo104414.setAttribute('id', 'smo104414');
smo104434v0ar.push(smo104414);
const smo104415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo104415.setAttribute('id', 'smo104415');
smo104434v0ar.push(smo104415);
const smo104416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo104416.setAttribute('id', 'smo104416');
smo104434v0ar.push(smo104416);
const smo104417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo104417.setAttribute('id', 'smo104417');
smo104434v0ar.push(smo104417);
const smo104418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo104418.setAttribute('id', 'smo104418');
smo104434v0ar.push(smo104418);
const smo104419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104419.setAttribute('id', 'smo104419');
smo104434v0ar.push(smo104419);
const smo104420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo104420.setAttribute('id', 'smo104420');
smo104434v0ar.push(smo104420);
smo104434v0.addTickables(smo104434v0ar)
fmtsmo10443422.joinVoices([smo104434v0]);
const fmtsmo10726922 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo107269v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107269v0ar = [];
const smo107252 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo107252.setAttribute('id', 'smo107252');
smo107269v0ar.push(smo107252);
const smo107253 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107253.setAttribute('id', 'smo107253');
smo107269v0ar.push(smo107253);
const smo107254 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo107254.setAttribute('id', 'smo107254');
smo107269v0ar.push(smo107254);
const smo107255 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107255.setAttribute('id', 'smo107255');
smo107269v0ar.push(smo107255);
smo107269v0.addTickables(smo107269v0ar)
fmtsmo10726922.joinVoices([smo107269v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109067 = smo104414.getStemDirection();
smo104414.setStemDirection(dirsmo109067);
smo104415.setStemDirection(dirsmo109067);
smo104416.setStemDirection(dirsmo109067);
const smo109067 = new VF.Beam([smo104414,smo104415,smo104416]);
const dirsmo109068 = smo104417.getStemDirection();
smo104417.setStemDirection(dirsmo109068);
smo104418.setStemDirection(dirsmo109068);
smo104419.setStemDirection(dirsmo109068);
smo104420.setStemDirection(dirsmo109068);
const smo109068 = new VF.Beam([smo104417,smo104418,smo104419,smo104420]);
const dirsmo109071 = smo107252.getStemDirection();
smo107252.setStemDirection(dirsmo109071);
smo107253.setStemDirection(dirsmo109071);
const smo109071 = new VF.Beam([smo107252,smo107253]);
const dirsmo109072 = smo107254.getStemDirection();
smo107254.setStemDirection(dirsmo109072);
smo107255.setStemDirection(dirsmo109072);
const smo109072 = new VF.Beam([smo107254,smo107255]);
 
// formatting measures in staff group smo103216
fmtsmo10443422.format([smo104434v0,smo107269v0], 281);
const stavesmo104434 = new VF.Stave(1253, 1481, 295);
stavesmo104434.setAttribute('id', 'stavesmo104434');
stavesmo104434.setBegBarType(VF.Barline.type.NONE);
stavesmo104434.setContext(context);
stavesmo104434.draw();
smo104434v0.draw(context, stavesmo104434);
smo109067.setContext(context);
smo109067.draw();
smo109068.setContext(context);
smo109068.draw();
const stavesmo107269 = new VF.Stave(1253, 1625, 295);
stavesmo107269.setAttribute('id', 'stavesmo107269');
stavesmo107269.setBegBarType(VF.Barline.type.NONE);
stavesmo107269.setContext(context);
stavesmo107269.draw();
smo107269v0.draw(context, stavesmo107269);
smo109071.setContext(context);
smo109071.draw();
smo109072.setContext(context);
smo109072.draw();
const fmtsmo10445623 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo104456v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104456v0ar = [];
const smo104435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo104435.setAttribute('id', 'smo104435');
smo104456v0ar.push(smo104435);
const smo104436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo104436.setAttribute('id', 'smo104436');
smo104456v0ar.push(smo104436);
const smo104437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104437.setAttribute('id', 'smo104437');
smo104456v0ar.push(smo104437);
const smo104438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo104438.setAttribute('id', 'smo104438');
smo104456v0ar.push(smo104438);
const smo104439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo104439.setAttribute('id', 'smo104439');
smo104456v0ar.push(smo104439);
const smo104440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo104440.setAttribute('id', 'smo104440');
smo104456v0ar.push(smo104440);
const smo104441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104441.setAttribute('id', 'smo104441');
smo104456v0ar.push(smo104441);
const smo104442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo104442.setAttribute('id', 'smo104442');
smo104456v0ar.push(smo104442);
smo104456v0.addTickables(smo104456v0ar)
fmtsmo10445623.joinVoices([smo104456v0]);
const fmtsmo10728723 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo107287v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107287v0ar = [];
const smo107270 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo107270.setAttribute('id', 'smo107270');
smo107287v0ar.push(smo107270);
const smo107271 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo107271.setAttribute('id', 'smo107271');
smo107287v0ar.push(smo107271);
const smo107272 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo107272.setAttribute('id', 'smo107272');
smo107287v0ar.push(smo107272);
const smo107273 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo107273.setAttribute('id', 'smo107273');
const smo1072730acc = new VF.Accidental('b');
smo107273.addModifier(smo1072730acc, 0);
smo107287v0ar.push(smo107273);
smo107287v0.addTickables(smo107287v0ar)
fmtsmo10728723.joinVoices([smo107287v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109075 = smo104435.getStemDirection();
smo104435.setStemDirection(dirsmo109075);
smo104436.setStemDirection(dirsmo109075);
smo104437.setStemDirection(dirsmo109075);
smo104438.setStemDirection(dirsmo109075);
const smo109075 = new VF.Beam([smo104435,smo104436,smo104437,smo104438]);
const dirsmo109076 = smo104439.getStemDirection();
smo104439.setStemDirection(dirsmo109076);
smo104440.setStemDirection(dirsmo109076);
smo104441.setStemDirection(dirsmo109076);
smo104442.setStemDirection(dirsmo109076);
const smo109076 = new VF.Beam([smo104439,smo104440,smo104441,smo104442]);
const dirsmo109079 = smo107270.getStemDirection();
smo107270.setStemDirection(dirsmo109079);
smo107271.setStemDirection(dirsmo109079);
const smo109079 = new VF.Beam([smo107270,smo107271]);
const dirsmo109080 = smo107272.getStemDirection();
smo107272.setStemDirection(dirsmo109080);
smo107273.setStemDirection(dirsmo109080);
const smo109080 = new VF.Beam([smo107272,smo107273]);
 
// formatting measures in staff group smo103216
fmtsmo10445623.format([smo104456v0,smo107287v0], 281);
const stavesmo104456 = new VF.Stave(1548, 1481, 295);
stavesmo104456.setAttribute('id', 'stavesmo104456');
stavesmo104456.setBegBarType(VF.Barline.type.NONE);
stavesmo104456.setContext(context);
stavesmo104456.draw();
smo104456v0.draw(context, stavesmo104456);
smo109075.setContext(context);
smo109075.draw();
smo109076.setContext(context);
smo109076.draw();
const stavesmo107287 = new VF.Stave(1548, 1625, 295);
stavesmo107287.setAttribute('id', 'stavesmo107287');
stavesmo107287.setBegBarType(VF.Barline.type.NONE);
stavesmo107287.setContext(context);
stavesmo107287.draw();
smo107287v0.draw(context, stavesmo107287);
smo109079.setContext(context);
smo109079.draw();
smo109080.setContext(context);
smo109080.draw();
const rightsmo103216stavesmo1044561 = new VF.StaveConnector(stavesmo104456, stavesmo107287).setType(0);
rightsmo103216stavesmo1044561.setContext(context).draw();
const fmtsmo10447824 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo104478v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104478v0ar = [];
const smo104457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo104457.setAttribute('id', 'smo104457');
smo104478v0ar.push(smo104457);
const smo104458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo104458.setAttribute('id', 'smo104458');
smo104478v0ar.push(smo104458);
const smo104459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo104459.setAttribute('id', 'smo104459');
smo104478v0ar.push(smo104459);
const smo104460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo104460.setAttribute('id', 'smo104460');
smo104478v0ar.push(smo104460);
const smo104461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo104461.setAttribute('id', 'smo104461');
smo104478v0ar.push(smo104461);
const smo104462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo104462.setAttribute('id', 'smo104462');
smo104478v0ar.push(smo104462);
const smo104463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo104463.setAttribute('id', 'smo104463');
smo104478v0ar.push(smo104463);
const smo104464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo104464.setAttribute('id', 'smo104464');
smo104478v0ar.push(smo104464);
smo104478v0.addTickables(smo104478v0ar)
fmtsmo10447824.joinVoices([smo104478v0]);
const fmtsmo10730524 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo107305v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107305v0ar = [];
const smo107288 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo107288.setAttribute('id', 'smo107288');
smo107305v0ar.push(smo107288);
const smo107289 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107289.setAttribute('id', 'smo107289');
smo107305v0ar.push(smo107289);
const smo107290 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo107290.setAttribute('id', 'smo107290');
smo107305v0ar.push(smo107290);
const smo107291 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107291.setAttribute('id', 'smo107291');
smo107305v0ar.push(smo107291);
smo107305v0.addTickables(smo107305v0ar)
fmtsmo10730524.joinVoices([smo107305v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109091 = smo104457.getStemDirection();
smo104457.setStemDirection(dirsmo109091);
smo104458.setStemDirection(dirsmo109091);
smo104459.setStemDirection(dirsmo109091);
smo104460.setStemDirection(dirsmo109091);
const smo109091 = new VF.Beam([smo104457,smo104458,smo104459,smo104460]);
const dirsmo109092 = smo104461.getStemDirection();
smo104461.setStemDirection(dirsmo109092);
smo104462.setStemDirection(dirsmo109092);
smo104463.setStemDirection(dirsmo109092);
smo104464.setStemDirection(dirsmo109092);
const smo109092 = new VF.Beam([smo104461,smo104462,smo104463,smo104464]);
const dirsmo109095 = smo107288.getStemDirection();
smo107288.setStemDirection(dirsmo109095);
smo107289.setStemDirection(dirsmo109095);
const smo109095 = new VF.Beam([smo107288,smo107289]);
const dirsmo109096 = smo107290.getStemDirection();
smo107290.setStemDirection(dirsmo109096);
smo107291.setStemDirection(dirsmo109096);
const smo109096 = new VF.Beam([smo107290,smo107291]);
 
// formatting measures in staff group smo103216
fmtsmo10447824.format([smo104478v0,smo107305v0], 237);
const stavesmo104478 = new VF.Stave(73, 1828, 295);
stavesmo104478.setAttribute('id', 'stavesmo104478');
stavesmo104478.setBegBarType(1);
stavesmo104478.addClef('treble');
stavesmo104478.setContext(context);
stavesmo104478.draw();
smo104478v0.draw(context, stavesmo104478);
smo109091.setContext(context);
smo109091.draw();
smo109092.setContext(context);
smo109092.draw();
const stavesmo107305 = new VF.Stave(73, 1988, 295);
stavesmo107305.setAttribute('id', 'stavesmo107305');
stavesmo107305.setBegBarType(1);
stavesmo107305.addClef('bass');
stavesmo107305.setContext(context);
stavesmo107305.draw();
smo107305v0.draw(context, stavesmo107305);
smo109095.setContext(context);
smo109095.draw();
smo109096.setContext(context);
smo109096.draw();
const leftsmo103216stavesmo1044781 = new VF.StaveConnector(stavesmo104478, stavesmo107305).setType(3);
leftsmo103216stavesmo1044781.setContext(context).draw();
const fmtsmo10449925 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo104499v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104499v0ar = [];
const smo104479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo104479.setAttribute('id', 'smo104479');
smo104499v0ar.push(smo104479);
const smo104480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo104480.setAttribute('id', 'smo104480');
smo104499v0ar.push(smo104480);
const smo104481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo104481.setAttribute('id', 'smo104481');
smo104499v0ar.push(smo104481);
const smo104482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo104482.setAttribute('id', 'smo104482');
smo104499v0ar.push(smo104482);
const smo104483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo104483.setAttribute('id', 'smo104483');
smo104499v0ar.push(smo104483);
const smo104484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo104484.setAttribute('id', 'smo104484');
smo104499v0ar.push(smo104484);
const smo104485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo104485.setAttribute('id', 'smo104485');
const smo1044850acc = new VF.Accidental('b');
smo104485.addModifier(smo1044850acc, 0);
const smo1044851acc = new VF.Accidental('b');
smo104485.addModifier(smo1044851acc, 1);
const smo1044852acc = new VF.Accidental('b');
smo104485.addModifier(smo1044852acc, 2);
smo104499v0ar.push(smo104485);
smo104499v0.addTickables(smo104499v0ar)
fmtsmo10449925.joinVoices([smo104499v0]);
const fmtsmo10732325 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo107323v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107323v0ar = [];
const smo107306 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo107306.setAttribute('id', 'smo107306');
smo107323v0ar.push(smo107306);
const smo107307 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107307.setAttribute('id', 'smo107307');
smo107323v0ar.push(smo107307);
const smo107308 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo107308.setAttribute('id', 'smo107308');
smo107323v0ar.push(smo107308);
const smo107309 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107309.setAttribute('id', 'smo107309');
smo107323v0ar.push(smo107309);
smo107323v0.addTickables(smo107323v0ar)
fmtsmo10732325.joinVoices([smo107323v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109099 = smo104479.getStemDirection();
smo104479.setStemDirection(dirsmo109099);
smo104480.setStemDirection(dirsmo109099);
smo104481.setStemDirection(dirsmo109099);
const smo109099 = new VF.Beam([smo104479,smo104480,smo104481]);
const dirsmo109100 = smo104482.getStemDirection();
smo104482.setStemDirection(dirsmo109100);
smo104483.setStemDirection(dirsmo109100);
smo104484.setStemDirection(dirsmo109100);
smo104485.setStemDirection(dirsmo109100);
const smo109100 = new VF.Beam([smo104482,smo104483,smo104484,smo104485]);
const dirsmo109103 = smo107306.getStemDirection();
smo107306.setStemDirection(dirsmo109103);
smo107307.setStemDirection(dirsmo109103);
const smo109103 = new VF.Beam([smo107306,smo107307]);
const dirsmo109104 = smo107308.getStemDirection();
smo107308.setStemDirection(dirsmo109104);
smo107309.setStemDirection(dirsmo109104);
const smo109104 = new VF.Beam([smo107308,smo107309]);
 
// formatting measures in staff group smo103216
fmtsmo10449925.format([smo104499v0,smo107323v0], 281);
const stavesmo104499 = new VF.Stave(368, 1828, 295);
stavesmo104499.setAttribute('id', 'stavesmo104499');
stavesmo104499.setBegBarType(VF.Barline.type.NONE);
stavesmo104499.setContext(context);
stavesmo104499.draw();
smo104499v0.draw(context, stavesmo104499);
smo109099.setContext(context);
smo109099.draw();
smo109100.setContext(context);
smo109100.draw();
const stavesmo107323 = new VF.Stave(368, 1988, 295);
stavesmo107323.setAttribute('id', 'stavesmo107323');
stavesmo107323.setBegBarType(VF.Barline.type.NONE);
stavesmo107323.setContext(context);
stavesmo107323.draw();
smo107323v0.draw(context, stavesmo107323);
smo109103.setContext(context);
smo109103.draw();
smo109104.setContext(context);
smo109104.draw();
const fmtsmo10452026 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo104520v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104520v0ar = [];
const smo104500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo104500.setAttribute('id', 'smo104500');
smo104520v0ar.push(smo104500);
const smo104501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo104501.setAttribute('id', 'smo104501');
smo104520v0ar.push(smo104501);
const smo104502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo104502.setAttribute('id', 'smo104502');
smo104520v0ar.push(smo104502);
const smo104503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo104503.setAttribute('id', 'smo104503');
smo104520v0ar.push(smo104503);
const smo104504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo104504.setAttribute('id', 'smo104504');
smo104520v0ar.push(smo104504);
const smo104505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo104505.setAttribute('id', 'smo104505');
smo104520v0ar.push(smo104505);
const smo104506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo104506.setAttribute('id', 'smo104506');
const smo1045060acc = new VF.Accidental('b');
smo104506.addModifier(smo1045060acc, 0);
smo104520v0ar.push(smo104506);
smo104520v0.addTickables(smo104520v0ar)
fmtsmo10452026.joinVoices([smo104520v0]);
const fmtsmo10734126 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo107341v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107341v0ar = [];
const smo107324 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo107324.setAttribute('id', 'smo107324');
smo107341v0ar.push(smo107324);
const smo107325 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107325.setAttribute('id', 'smo107325');
smo107341v0ar.push(smo107325);
const smo107326 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo107326.setAttribute('id', 'smo107326');
smo107341v0ar.push(smo107326);
const smo107327 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
smo107327.setAttribute('id', 'smo107327');
const smo1073270acc = new VF.Accidental('b');
smo107327.addModifier(smo1073270acc, 0);
smo107341v0ar.push(smo107327);
smo107341v0.addTickables(smo107341v0ar)
fmtsmo10734126.joinVoices([smo107341v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109107 = smo104500.getStemDirection();
smo104500.setStemDirection(dirsmo109107);
smo104501.setStemDirection(dirsmo109107);
smo104502.setStemDirection(dirsmo109107);
const smo109107 = new VF.Beam([smo104500,smo104501,smo104502]);
const dirsmo109108 = smo104503.getStemDirection();
smo104503.setStemDirection(dirsmo109108);
smo104504.setStemDirection(dirsmo109108);
smo104505.setStemDirection(dirsmo109108);
smo104506.setStemDirection(dirsmo109108);
const smo109108 = new VF.Beam([smo104503,smo104504,smo104505,smo104506]);
const dirsmo109111 = smo107324.getStemDirection();
smo107324.setStemDirection(dirsmo109111);
smo107325.setStemDirection(dirsmo109111);
const smo109111 = new VF.Beam([smo107324,smo107325]);
const dirsmo109112 = smo107326.getStemDirection();
smo107326.setStemDirection(dirsmo109112);
smo107327.setStemDirection(dirsmo109112);
const smo109112 = new VF.Beam([smo107326,smo107327]);
 
// formatting measures in staff group smo103216
fmtsmo10452026.format([smo104520v0,smo107341v0], 281);
const stavesmo104520 = new VF.Stave(663, 1828, 295);
stavesmo104520.setAttribute('id', 'stavesmo104520');
stavesmo104520.setBegBarType(VF.Barline.type.NONE);
stavesmo104520.setContext(context);
stavesmo104520.draw();
smo104520v0.draw(context, stavesmo104520);
smo109107.setContext(context);
smo109107.draw();
smo109108.setContext(context);
smo109108.draw();
const stavesmo107341 = new VF.Stave(663, 1988, 295);
stavesmo107341.setAttribute('id', 'stavesmo107341');
stavesmo107341.setBegBarType(VF.Barline.type.NONE);
stavesmo107341.setContext(context);
stavesmo107341.draw();
smo107341v0.draw(context, stavesmo107341);
smo109111.setContext(context);
smo109111.draw();
smo109112.setContext(context);
smo109112.draw();
const fmtsmo10454127 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo104541v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104541v0ar = [];
const smo104521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bn/5/n"]}'))
smo104521.setAttribute('id', 'smo104521');
smo104541v0ar.push(smo104521);
const smo104522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bn/5/n"]}'))
smo104522.setAttribute('id', 'smo104522');
smo104541v0ar.push(smo104522);
const smo104523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n","bn/5/n"]}'))
smo104523.setAttribute('id', 'smo104523');
const smo1045231acc = new VF.Accidental('b');
smo104523.addModifier(smo1045231acc, 1);
smo104541v0ar.push(smo104523);
const smo104524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n","bn/5/n"]}'))
smo104524.setAttribute('id', 'smo104524');
smo104541v0ar.push(smo104524);
const smo104525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo104525.setAttribute('id', 'smo104525');
smo104541v0ar.push(smo104525);
const smo104526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n"]}'))
smo104526.setAttribute('id', 'smo104526');
smo104541v0ar.push(smo104526);
const smo104527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo104527.setAttribute('id', 'smo104527');
smo104541v0ar.push(smo104527);
smo104541v0.addTickables(smo104541v0ar)
fmtsmo10454127.joinVoices([smo104541v0]);
const fmtsmo10735927 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo107359v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107359v0ar = [];
const smo107342 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo107342.setAttribute('id', 'smo107342');
smo107359v0ar.push(smo107342);
const smo107343 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n","dn/4/n"]}'))
smo107343.setAttribute('id', 'smo107343');
smo107359v0ar.push(smo107343);
const smo107344 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo107344.setAttribute('id', 'smo107344');
smo107359v0ar.push(smo107344);
const smo107345 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","dn/4/n"]}'))
smo107345.setAttribute('id', 'smo107345');
smo107359v0ar.push(smo107345);
smo107359v0.addTickables(smo107359v0ar)
fmtsmo10735927.joinVoices([smo107359v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109115 = smo104521.getStemDirection();
smo104521.setStemDirection(dirsmo109115);
smo104522.setStemDirection(dirsmo109115);
smo104523.setStemDirection(dirsmo109115);
const smo109115 = new VF.Beam([smo104521,smo104522,smo104523]);
const dirsmo109116 = smo104524.getStemDirection();
smo104524.setStemDirection(dirsmo109116);
smo104525.setStemDirection(dirsmo109116);
smo104526.setStemDirection(dirsmo109116);
smo104527.setStemDirection(dirsmo109116);
const smo109116 = new VF.Beam([smo104524,smo104525,smo104526,smo104527]);
const dirsmo109119 = smo107342.getStemDirection();
smo107342.setStemDirection(dirsmo109119);
smo107343.setStemDirection(dirsmo109119);
const smo109119 = new VF.Beam([smo107342,smo107343]);
const dirsmo109120 = smo107344.getStemDirection();
smo107344.setStemDirection(dirsmo109120);
smo107345.setStemDirection(dirsmo109120);
const smo109120 = new VF.Beam([smo107344,smo107345]);
 
// formatting measures in staff group smo103216
fmtsmo10454127.format([smo104541v0,smo107359v0], 281);
const stavesmo104541 = new VF.Stave(958, 1828, 295);
stavesmo104541.setAttribute('id', 'stavesmo104541');
stavesmo104541.setBegBarType(VF.Barline.type.NONE);
stavesmo104541.setContext(context);
stavesmo104541.draw();
smo104541v0.draw(context, stavesmo104541);
smo109115.setContext(context);
smo109115.draw();
smo109116.setContext(context);
smo109116.draw();
const stavesmo107359 = new VF.Stave(958, 1988, 295);
stavesmo107359.setAttribute('id', 'stavesmo107359');
stavesmo107359.setBegBarType(VF.Barline.type.NONE);
stavesmo107359.setContext(context);
stavesmo107359.draw();
smo107359v0.draw(context, stavesmo107359);
smo109119.setContext(context);
smo109119.draw();
smo109120.setContext(context);
smo109120.draw();
const fmtsmo10456028 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo104560v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104560v0ar = [];
const smo104542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","gn/5/n"]}'))
smo104542.setAttribute('id', 'smo104542');
smo104560v0ar.push(smo104542);
const smo104543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","gn/5/n"]}'))
smo104543.setAttribute('id', 'smo104543');
smo104560v0ar.push(smo104543);
const smo104544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo104544.setAttribute('id', 'smo104544');
smo104560v0ar.push(smo104544);
const smo104545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo104545.setAttribute('id', 'smo104545');
smo104560v0ar.push(smo104545);
const smo104546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo104546.setAttribute('id', 'smo104546');
const smo1045460acc = new VF.Accidental('b');
smo104546.addModifier(smo1045460acc, 0);
const smo1045461acc = new VF.Accidental('b');
smo104546.addModifier(smo1045461acc, 1);
const smo1045462acc = new VF.Accidental('b');
smo104546.addModifier(smo1045462acc, 2);
smo104560v0ar.push(smo104546);
smo104560v0.addTickables(smo104560v0ar)
fmtsmo10456028.joinVoices([smo104560v0]);
const fmtsmo10737728 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo107377v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107377v0ar = [];
const smo107360 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n","dn/4/n"]}'))
smo107360.setAttribute('id', 'smo107360');
smo107377v0ar.push(smo107360);
const smo107361 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo107361.setAttribute('id', 'smo107361');
smo107377v0ar.push(smo107361);
const smo107362 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo107362.setAttribute('id', 'smo107362');
smo107377v0ar.push(smo107362);
const smo107363 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo107363.setAttribute('id', 'smo107363');
smo107377v0ar.push(smo107363);
smo107377v0.addTickables(smo107377v0ar)
fmtsmo10737728.joinVoices([smo107377v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109123 = smo104543.getStemDirection();
smo104543.setStemDirection(dirsmo109123);
smo104544.setStemDirection(dirsmo109123);
smo104545.setStemDirection(dirsmo109123);
smo104546.setStemDirection(dirsmo109123);
const smo109123 = new VF.Beam([smo104543,smo104544,smo104545,smo104546]);
const dirsmo109126 = smo107360.getStemDirection();
smo107360.setStemDirection(dirsmo109126);
smo107361.setStemDirection(dirsmo109126);
const smo109126 = new VF.Beam([smo107360,smo107361]);
const dirsmo109127 = smo107362.getStemDirection();
smo107362.setStemDirection(dirsmo109127);
smo107363.setStemDirection(dirsmo109127);
const smo109127 = new VF.Beam([smo107362,smo107363]);
 
// formatting measures in staff group smo103216
fmtsmo10456028.format([smo104560v0,smo107377v0], 281);
const stavesmo104560 = new VF.Stave(1253, 1828, 295);
stavesmo104560.setAttribute('id', 'stavesmo104560');
stavesmo104560.setBegBarType(VF.Barline.type.NONE);
stavesmo104560.setContext(context);
stavesmo104560.draw();
smo104560v0.draw(context, stavesmo104560);
smo109123.setContext(context);
smo109123.draw();
const stavesmo107377 = new VF.Stave(1253, 1988, 295);
stavesmo107377.setAttribute('id', 'stavesmo107377');
stavesmo107377.setBegBarType(VF.Barline.type.NONE);
stavesmo107377.setContext(context);
stavesmo107377.draw();
smo107377v0.draw(context, stavesmo107377);
smo109126.setContext(context);
smo109126.draw();
smo109127.setContext(context);
smo109127.draw();
const fmtsmo10458229 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo104582v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104582v0ar = [];
const smo104561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo104561.setAttribute('id', 'smo104561');
smo104582v0ar.push(smo104561);
const smo104563 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo104563.setAttribute('id', 'smo104563');
smo104582v0ar.push(smo104563);
const smo104564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo104564.setAttribute('id', 'smo104564');
smo104582v0ar.push(smo104564);
const smo104565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo104565.setAttribute('id', 'smo104565');
smo104582v0ar.push(smo104565);
const smo104566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo104566.setAttribute('id', 'smo104566');
smo104582v0ar.push(smo104566);
const smo104567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo104567.setAttribute('id', 'smo104567');
smo104582v0ar.push(smo104567);
const smo104568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo104568.setAttribute('id', 'smo104568');
const smo1045680acc = new VF.Accidental('b');
smo104568.addModifier(smo1045680acc, 0);
const smo1045681acc = new VF.Accidental('b');
smo104568.addModifier(smo1045681acc, 1);
const smo1045682acc = new VF.Accidental('b');
smo104568.addModifier(smo1045682acc, 2);
smo104582v0ar.push(smo104568);
smo104582v0.addTickables(smo104582v0ar)
fmtsmo10458229.joinVoices([smo104582v0]);
const fmtsmo10739529 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo107395v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107395v0ar = [];
const smo107378 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo107378.setAttribute('id', 'smo107378');
smo107395v0ar.push(smo107378);
const smo107379 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107379.setAttribute('id', 'smo107379');
smo107395v0ar.push(smo107379);
const smo107380 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo107380.setAttribute('id', 'smo107380');
smo107395v0ar.push(smo107380);
const smo107381 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107381.setAttribute('id', 'smo107381');
smo107395v0ar.push(smo107381);
smo107395v0.addTickables(smo107395v0ar)
fmtsmo10739529.joinVoices([smo107395v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109130 = smo104561.getStemDirection();
smo104561.setStemDirection(dirsmo109130);
smo104563.setStemDirection(dirsmo109130);
smo104564.setStemDirection(dirsmo109130);
const smo109130 = new VF.Beam([smo104561,smo104563,smo104564]);
const dirsmo109131 = smo104565.getStemDirection();
smo104565.setStemDirection(dirsmo109131);
smo104566.setStemDirection(dirsmo109131);
smo104567.setStemDirection(dirsmo109131);
smo104568.setStemDirection(dirsmo109131);
const smo109131 = new VF.Beam([smo104565,smo104566,smo104567,smo104568]);
const dirsmo109134 = smo107378.getStemDirection();
smo107378.setStemDirection(dirsmo109134);
smo107379.setStemDirection(dirsmo109134);
const smo109134 = new VF.Beam([smo107378,smo107379]);
const dirsmo109135 = smo107380.getStemDirection();
smo107380.setStemDirection(dirsmo109135);
smo107381.setStemDirection(dirsmo109135);
const smo109135 = new VF.Beam([smo107380,smo107381]);
 
// formatting measures in staff group smo103216
fmtsmo10458229.format([smo104582v0,smo107395v0], 281);
const stavesmo104582 = new VF.Stave(1548, 1828, 295);
stavesmo104582.setAttribute('id', 'stavesmo104582');
stavesmo104582.setBegBarType(VF.Barline.type.NONE);
stavesmo104582.setContext(context);
stavesmo104582.draw();
smo104582v0.draw(context, stavesmo104582);
smo109130.setContext(context);
smo109130.draw();
smo109131.setContext(context);
smo109131.draw();
const stavesmo107395 = new VF.Stave(1548, 1988, 295);
stavesmo107395.setAttribute('id', 'stavesmo107395');
stavesmo107395.setBegBarType(VF.Barline.type.NONE);
stavesmo107395.setContext(context);
stavesmo107395.draw();
smo107395v0.draw(context, stavesmo107395);
smo109134.setContext(context);
smo109134.draw();
smo109135.setContext(context);
smo109135.draw();
const rightsmo103216stavesmo1045821 = new VF.StaveConnector(stavesmo104582, stavesmo107395).setType(0);
rightsmo103216stavesmo1045821.setContext(context).draw();
// modifier from 0-5-0-2 to 0-5-0-4
const smo110150 = new VF.StaveHairpin({ first_note: smo104072, last_note: smo104072,
       firstNote: smo104072, lastNote: smo104072 });
smo110150.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo110150.setContext(context).setPosition(4).draw();
// modifier from 0-7-0-2 to 0-8-0-0
const smo110151 = new VF.StaveHairpin({ first_note: smo104113, last_note: smo104113,
       firstNote: smo104113, lastNote: smo104113 });
smo110151.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo110151.setContext(context).setPosition(4).draw();
// modifier from 0-9-0-2 to 0-10-0-0
const smo110152 = new VF.StaveHairpin({ first_note: smo104152, last_note: smo104152,
       firstNote: smo104152, lastNote: smo104152 });
smo110152.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo110152.setContext(context).setPosition(4).draw();
// modifier from 0-11-0-2 to 0-12-0-0
// modifier from 0-11-0-2 to 0-12-0-0
// modifier from 0-13-0-2 to 0-13-0-4
const smo110155 = new VF.StaveHairpin({ first_note: smo104232, last_note: smo104232,
       firstNote: smo104232, lastNote: smo104232 });
smo110155.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo110155.setContext(context).setPosition(4).draw();
// modifier from 0-19-0-2 to 0-20-0-0
const smo110156 = new VF.StaveHairpin({ first_note: smo104356, last_note: smo104356,
       firstNote: smo104356, lastNote: smo104356 });
smo110156.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo110156.setContext(context).setPosition(4).draw();
// modifier from 0-0-0-3 to 0-0-0-4
const smo110157 = new VF.StaveTie({ first_note: smo103963, last_note: smo103964, 
          firstNote: smo103963, lastNote: smo103964, first_indices: [0], last_indices: [0]});
smo110157.setContext(context).draw();
// modifier from 0-0-1-3 to 0-0-1-4
const smo110158 = new VF.StaveTie({ first_note: smo103970, last_note: smo103971, 
          firstNote: smo103970, lastNote: smo103971, first_indices: [0], last_indices: [0]});
smo110158.setContext(context).draw();
// modifier from 0-1-0-3 to 0-1-0-4
const smo110159 = new VF.StaveTie({ first_note: smo103991, last_note: smo103992, 
          firstNote: smo103991, lastNote: smo103992, first_indices: [0], last_indices: [0]});
smo110159.setContext(context).draw();
// modifier from 0-2-0-3 to 0-2-0-4
const smo110160 = new VF.StaveTie({ first_note: smo104012, last_note: smo104013, 
          firstNote: smo104012, lastNote: smo104013, first_indices: [0], last_indices: [0]});
smo110160.setContext(context).draw();
// modifier from 0-4-0-5 to 0-5-0-0
const smo110161 = new VF.StaveTie({ first_note: smo104055, last_note: smo104070, 
          firstNote: smo104055, lastNote: smo104070, first_indices: [0], last_indices: [0]});
smo110161.setContext(context).draw();
// modifier from 0-5-0-0 to 0-5-0-1
const smo110162 = new VF.StaveTie({ first_note: smo104070, last_note: smo104071, 
          firstNote: smo104070, lastNote: smo104071, first_indices: [0], last_indices: [0]});
smo110162.setContext(context).draw();
// modifier from 0-6-0-3 to 0-6-0-4
const smo110163 = new VF.StaveTie({ first_note: smo104093, last_note: smo104094, 
          firstNote: smo104093, lastNote: smo104094, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110163.setContext(context).draw();
// modifier from 0-7-0-0 to 0-7-0-1
const smo110164 = new VF.StaveTie({ first_note: smo104111, last_note: smo104112, 
          firstNote: smo104111, lastNote: smo104112, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110164.setContext(context).draw();
// modifier from 0-8-0-5 to 0-9-0-0
const smo110165 = new VF.StaveTie({ first_note: smo104135, last_note: smo104150, 
          firstNote: smo104135, lastNote: smo104150, first_indices: [0], last_indices: [0]});
smo110165.setContext(context).draw();
// modifier from 0-9-0-0 to 0-9-0-1
const smo110166 = new VF.StaveTie({ first_note: smo104150, last_note: smo104151, 
          firstNote: smo104150, lastNote: smo104151, first_indices: [0], last_indices: [0]});
smo110166.setContext(context).draw();
// modifier from 0-10-0-3 to 0-10-0-4
const smo110167 = new VF.StaveTie({ first_note: smo104172, last_note: smo104173, 
          firstNote: smo104172, lastNote: smo104173, first_indices: [0,1], last_indices: [0,1]});
smo110167.setContext(context).draw();
// modifier from 0-11-0-0 to 0-11-0-1
const smo110168 = new VF.StaveTie({ first_note: smo104191, last_note: smo104192, 
          firstNote: smo104191, lastNote: smo104192, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110168.setContext(context).draw();
// modifier from 0-12-0-5 to 0-13-0-0
const smo110169 = new VF.StaveTie({ first_note: smo104215, last_note: smo104230, 
          firstNote: smo104215, lastNote: smo104230, first_indices: [0], last_indices: [0]});
smo110169.setContext(context).draw();
// modifier from 0-13-0-0 to 0-13-0-1
const smo110170 = new VF.StaveTie({ first_note: smo104230, last_note: smo104231, 
          firstNote: smo104230, lastNote: smo104231, first_indices: [0], last_indices: [0]});
smo110170.setContext(context).draw();
// modifier from 0-14-0-3 to 0-14-0-4
const smo110171 = new VF.StaveTie({ first_note: smo104253, last_note: smo104254, 
          firstNote: smo104253, lastNote: smo104254, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110171.setContext(context).draw();
// modifier from 0-15-0-0 to 0-15-0-1
const smo110172 = new VF.StaveTie({ first_note: smo104271, last_note: smo104272, 
          firstNote: smo104271, lastNote: smo104272, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110172.setContext(context).draw();
// modifier from 0-16-0-3 to 0-16-0-4
const smo110173 = new VF.StaveTie({ first_note: smo104292, last_note: smo104293, 
          firstNote: smo104292, lastNote: smo104293, first_indices: [0,1], last_indices: [0,1]});
smo110173.setContext(context).draw();
// modifier from 0-17-0-3 to 0-17-0-4
const smo110174 = new VF.StaveTie({ first_note: smo104314, last_note: smo104315, 
          firstNote: smo104314, lastNote: smo104315, first_indices: [0,1], last_indices: [0,1]});
smo110174.setContext(context).draw();
// modifier from 0-18-0-3 to 0-18-0-4
const smo110175 = new VF.StaveTie({ first_note: smo104336, last_note: smo104337, 
          firstNote: smo104336, lastNote: smo104337, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110175.setContext(context).draw();
// modifier from 0-19-0-0 to 0-19-0-1
const smo110176 = new VF.StaveTie({ first_note: smo104354, last_note: smo104355, 
          firstNote: smo104354, lastNote: smo104355, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110176.setContext(context).draw();
// modifier from 0-20-0-0 to 0-20-0-1
const smo110177 = new VF.StaveTie({ first_note: smo104373, last_note: smo104374, 
          firstNote: smo104373, lastNote: smo104374, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110177.setContext(context).draw();
// modifier from 0-21-0-2 to 0-21-0-3
const smo110178 = new VF.StaveTie({ first_note: smo104395, last_note: smo104396, 
          firstNote: smo104395, lastNote: smo104396, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110178.setContext(context).draw();
// modifier from 0-22-0-2 to 0-22-0-3
const smo110179 = new VF.StaveTie({ first_note: smo104416, last_note: smo104417, 
          firstNote: smo104416, lastNote: smo104417, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110179.setContext(context).draw();
// modifier from 0-25-0-2 to 0-25-0-3
const smo110180 = new VF.StaveTie({ first_note: smo104481, last_note: smo104482, 
          firstNote: smo104481, lastNote: smo104482, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110180.setContext(context).draw();
// modifier from 0-26-0-2 to 0-26-0-3
const smo110181 = new VF.StaveTie({ first_note: smo104502, last_note: smo104503, 
          firstNote: smo104502, lastNote: smo104503, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110181.setContext(context).draw();
// modifier from 0-27-0-2 to 0-27-0-3
const smo110182 = new VF.StaveTie({ first_note: smo104523, last_note: smo104524, 
          firstNote: smo104523, lastNote: smo104524, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110182.setContext(context).draw();
// modifier from 0-28-0-0 to 0-28-0-1
const smo110183 = new VF.StaveTie({ first_note: smo104542, last_note: smo104543, 
          firstNote: smo104542, lastNote: smo104543, first_indices: [0,1], last_indices: [0,1]});
smo110183.setContext(context).draw();
// modifier from 0-29-0-2 to 0-29-0-3
const smo110184 = new VF.StaveTie({ first_note: smo104564, last_note: smo104565, 
          firstNote: smo104564, lastNote: smo104565, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110184.setContext(context).draw();
// modifier from 1-1-0-3 to 1-1-0-4
const smo110185 = new VF.StaveTie({ first_note: smo106868, last_note: smo106869, 
          firstNote: smo106868, lastNote: smo106869, first_indices: [0], last_indices: [0]});
smo110185.setContext(context).draw();
// modifier from 1-2-0-3 to 1-2-0-4
const smo110186 = new VF.StaveTie({ first_note: smo106889, last_note: smo106890, 
          firstNote: smo106889, lastNote: smo106890, first_indices: [0], last_indices: [0]});
smo110186.setContext(context).draw();
const smo104359smo104372 = new VF.Volta(5, '1', 368, 20);
smo104359smo104372.setContext(context).draw(stavesmo104372, -1 * 0);
const smo104378smo104392 = new VF.Volta(5, '2', 663, 20);
smo104378smo104392.setContext(context).draw(stavesmo104392, -1 * 0);
}
// @@ Well-Tempered Clavier p 3/6  by Bach
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
const fmtsmo5801046 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo58010v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58010v0ar = [];
const smo57971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo57971.setAttribute('id', 'smo57971');
smo58010v0ar.push(smo57971);
const smo57972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo57972.setAttribute('id', 'smo57972');
smo58010v0ar.push(smo57972);
const smo57973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57973.setAttribute('id', 'smo57973');
smo58010v0ar.push(smo57973);
const smo57974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57974.setAttribute('id', 'smo57974');
smo58010v0ar.push(smo57974);
const smo57975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo57975.setAttribute('id', 'smo57975');
smo58010v0ar.push(smo57975);
const smo57976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57976.setAttribute('id', 'smo57976');
smo58010v0ar.push(smo57976);
const smo57977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57977.setAttribute('id', 'smo57977');
smo58010v0ar.push(smo57977);
const smo57978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo57978.setAttribute('id', 'smo57978');
smo58010v0ar.push(smo57978);
const smo57979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo57979.setAttribute('id', 'smo57979');
const smo579790acc = new VF.Accidental('#');
smo57979.addModifier(smo579790acc, 0);
smo58010v0ar.push(smo57979);
const smo57980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo57980.setAttribute('id', 'smo57980');
smo58010v0ar.push(smo57980);
const smo57981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57981.setAttribute('id', 'smo57981');
smo58010v0ar.push(smo57981);
const smo57982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57982.setAttribute('id', 'smo57982');
smo58010v0ar.push(smo57982);
const smo57983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57983.setAttribute('id', 'smo57983');
smo58010v0ar.push(smo57983);
const smo57984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57984.setAttribute('id', 'smo57984');
smo58010v0ar.push(smo57984);
smo58010v0.addTickables(smo58010v0ar)
fmtsmo5801046.joinVoices([smo58010v0]);
const smo58010v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58010v1ar = [];
const smo57985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57985.setAttribute('id', 'smo57985');
smo57985.setStyle({ fillStyle: "#115511" });
smo58010v1ar.push(smo57985);
const smo57986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57986.setAttribute('id', 'smo57986');
smo57986.setStyle({ fillStyle: "#115511" });
smo58010v1ar.push(smo57986);
const smo57987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57987.setAttribute('id', 'smo57987');
smo57987.setStyle({ fillStyle: "#115511" });
smo58010v1ar.push(smo57987);
const smo57988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo57988.setAttribute('id', 'smo57988');
smo57988.setStyle({ fillStyle: "#115511" });
const smo579880acc = new VF.Accidental('#');
smo57988.addModifier(smo579880acc, 0);
smo58010v1ar.push(smo57988);
const smo57989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo57989.setAttribute('id', 'smo57989');
smo57989.setStyle({ fillStyle: "#115511" });
const smo579890acc = new VF.Accidental('#');
smo57989.addModifier(smo579890acc, 0);
smo58010v1ar.push(smo57989);
const smo57990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57990.setAttribute('id', 'smo57990');
smo57990.setStyle({ fillStyle: "#115511" });
const smo579900acc = new VF.Accidental('n');
smo57990.addModifier(smo579900acc, 0);
smo58010v1ar.push(smo57990);
const smo57991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57991.setAttribute('id', 'smo57991');
smo57991.setStyle({ fillStyle: "#115511" });
smo58010v1ar.push(smo57991);
const smo57992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57992.setAttribute('id', 'smo57992');
smo57992.setStyle({ fillStyle: "#115511" });
smo58010v1ar.push(smo57992);
const smo57993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57993.setAttribute('id', 'smo57993');
smo57993.setStyle({ fillStyle: "#115511" });
smo58010v1ar.push(smo57993);
const smo57994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57994.setAttribute('id', 'smo57994');
smo57994.setStyle({ fillStyle: "#115511" });
smo58010v1ar.push(smo57994);
const smo57995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo57995.setAttribute('id', 'smo57995');
smo57995.setStyle({ fillStyle: "#115511" });
smo58010v1ar.push(smo57995);
const smo57996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo57996.setAttribute('id', 'smo57996');
smo57996.setStyle({ fillStyle: "#115511" });
smo58010v1ar.push(smo57996);
smo58010v1.addTickables(smo58010v1ar)
fmtsmo5801046.joinVoices([smo58010v1]);
const fmtsmo6306346 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo63063v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63063v0ar = [];
const smo63035 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo63035.setAttribute('id', 'smo63035');
smo63063v0ar.push(smo63035);
const smo63036 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63036.setAttribute('id', 'smo63036');
smo63063v0ar.push(smo63036);
const smo63037 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo63037.setAttribute('id', 'smo63037');
const smo630370acc = new VF.Accidental('#');
smo63037.addModifier(smo630370acc, 0);
smo63063v0ar.push(smo63037);
const smo63038 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo63038.setAttribute('id', 'smo63038');
const smo630380acc = new VF.Accidental('#');
smo63038.addModifier(smo630380acc, 0);
smo63063v0ar.push(smo63038);
const smo63039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63039.setAttribute('id', 'smo63039');
smo63039.addModifier(new VF.Dot(), 0);
smo63063v0ar.push(smo63039);
const smo63040 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo63040.setAttribute('id', 'smo63040');
smo63063v0ar.push(smo63040);
const smo63041 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63041.setAttribute('id', 'smo63041');
smo63063v0ar.push(smo63041);
const smo63042 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo63042.setAttribute('id', 'smo63042');
smo63063v0ar.push(smo63042);
const smo63043 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63043.setAttribute('id', 'smo63043');
smo63063v0ar.push(smo63043);
smo63063v0.addTickables(smo63063v0ar)
fmtsmo6306346.joinVoices([smo63063v0]);
const smo63063v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63063v1ar = [];
const smo63044 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo63044.setAttribute('id', 'smo63044');
smo63044.setStyle({ fillStyle: "#115511" });
smo63063v1ar.push(smo63044);
const smo63045 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63045.setAttribute('id', 'smo63045');
smo63045.setStyle({ fillStyle: "#115511" });
smo63063v1ar.push(smo63045);
const smo63046 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63046.setAttribute('id', 'smo63046');
smo63046.setStyle({ fillStyle: "#115511" });
smo63063v1ar.push(smo63046);
const smo63047 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63047.setAttribute('id', 'smo63047');
smo63047.setStyle({ fillStyle: "#115511" });
smo63063v1ar.push(smo63047);
const smo63048 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63048.setAttribute('id', 'smo63048');
smo63048.setStyle({ fillStyle: "#115511" });
const smo630480acc = new VF.Accidental('n');
smo63048.addModifier(smo630480acc, 0);
smo63063v1ar.push(smo63048);
const smo63049 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63049.setAttribute('id', 'smo63049');
smo63049.setStyle({ fillStyle: "#115511" });
smo63063v1ar.push(smo63049);
smo63063v1.addTickables(smo63063v1ar)
fmtsmo6306346.joinVoices([smo63063v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66457 = smo57971.getStemDirection();
smo57971.setStemDirection(dirsmo66457);
smo57972.setStemDirection(dirsmo66457);
smo57973.setStemDirection(dirsmo66457);
const smo66457 = new VF.Beam([smo57971,smo57972,smo57973]);
const dirsmo66458 = smo57974.getStemDirection();
smo57974.setStemDirection(dirsmo66458);
smo57975.setStemDirection(dirsmo66458);
smo57976.setStemDirection(dirsmo66458);
smo57977.setStemDirection(dirsmo66458);
const smo66458 = new VF.Beam([smo57974,smo57975,smo57976,smo57977]);
const dirsmo66459 = smo57978.getStemDirection();
smo57978.setStemDirection(dirsmo66459);
smo57979.setStemDirection(dirsmo66459);
smo57980.setStemDirection(dirsmo66459);
smo57981.setStemDirection(dirsmo66459);
const smo66459 = new VF.Beam([smo57978,smo57979,smo57980,smo57981]);
const dirsmo66460 = smo57982.getStemDirection();
smo57982.setStemDirection(dirsmo66460);
smo57983.setStemDirection(dirsmo66460);
smo57984.setStemDirection(dirsmo66460);
const smo66460 = new VF.Beam([smo57982,smo57983,smo57984]);
const dirsmo66461 = smo57985.getStemDirection();
smo57985.setStemDirection(dirsmo66461);
smo57986.setStemDirection(dirsmo66461);
smo57987.setStemDirection(dirsmo66461);
smo57988.setStemDirection(dirsmo66461);
const smo66461 = new VF.Beam([smo57985,smo57986,smo57987,smo57988]);
const dirsmo66462 = smo57989.getStemDirection();
smo57989.setStemDirection(dirsmo66462);
smo57990.setStemDirection(dirsmo66462);
const smo66462 = new VF.Beam([smo57989,smo57990]);
const dirsmo66463 = smo57991.getStemDirection();
smo57991.setStemDirection(dirsmo66463);
smo57992.setStemDirection(dirsmo66463);
const smo66463 = new VF.Beam([smo57991,smo57992]);
const dirsmo66464 = smo57993.getStemDirection();
smo57993.setStemDirection(dirsmo66464);
smo57994.setStemDirection(dirsmo66464);
smo57995.setStemDirection(dirsmo66464);
smo57996.setStemDirection(dirsmo66464);
const smo66464 = new VF.Beam([smo57993,smo57994,smo57995,smo57996]);
const dirsmo66467 = smo63036.getStemDirection();
smo63036.setStemDirection(dirsmo66467);
smo63037.setStemDirection(dirsmo66467);
smo63038.setStemDirection(dirsmo66467);
const smo66467 = new VF.Beam([smo63036,smo63037,smo63038]);
const dirsmo66468 = smo63039.getStemDirection();
smo63039.setStemDirection(dirsmo66468);
smo63040.setStemDirection(dirsmo66468);
smo63041.setStemDirection(dirsmo66468);
const smo66468 = new VF.Beam([smo63039,smo63040,smo63041]);
const dirsmo66469 = smo63042.getStemDirection();
smo63042.setStemDirection(dirsmo66469);
smo63043.setStemDirection(dirsmo66469);
const smo66469 = new VF.Beam([smo63042,smo63043]);
const dirsmo66470 = smo63046.getStemDirection();
smo63046.setStemDirection(dirsmo66470);
smo63047.setStemDirection(dirsmo66470);
const smo66470 = new VF.Beam([smo63046,smo63047]);
 
// formatting measures in staff group smo55345
fmtsmo5801046.format([smo58010v0,smo58010v1,smo63063v0,smo63063v1], 518);
const stavesmo58010 = new VF.Stave(90, 304, 576);
stavesmo58010.setAttribute('id', 'stavesmo58010');
stavesmo58010.setBegBarType(1);
stavesmo58010.addClef('treble');
stavesmo58010.setContext(context);
stavesmo58010.draw();
smo58010v0.draw(context, stavesmo58010);
smo58010v1.draw(context, stavesmo58010);
smo66457.setContext(context);
smo66457.draw();
smo66458.setContext(context);
smo66458.draw();
smo66459.setContext(context);
smo66459.draw();
smo66460.setContext(context);
smo66460.draw();
smo66461.setContext(context);
smo66461.draw();
smo66462.setContext(context);
smo66462.draw();
smo66463.setContext(context);
smo66463.draw();
smo66464.setContext(context);
smo66464.draw();
const stavesmo63063 = new VF.Stave(90, 438, 576);
stavesmo63063.setAttribute('id', 'stavesmo63063');
stavesmo63063.setBegBarType(1);
stavesmo63063.addClef('bass');
stavesmo63063.setContext(context);
stavesmo63063.draw();
smo63063v0.draw(context, stavesmo63063);
smo63063v1.draw(context, stavesmo63063);
smo66467.setContext(context);
smo66467.draw();
smo66468.setContext(context);
smo66468.draw();
smo66469.setContext(context);
smo66469.draw();
smo66470.setContext(context);
smo66470.draw();
const leftsmo55345stavesmo580101 = new VF.StaveConnector(stavesmo58010, stavesmo63063).setType(3);
leftsmo55345stavesmo580101.setContext(context).draw();
const fmtsmo5804547 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo58045v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58045v0ar = [];
const smo58011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58011.setAttribute('id', 'smo58011');
smo58045v0ar.push(smo58011);
const smo58012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo58012.setAttribute('id', 'smo58012');
smo58045v0ar.push(smo58012);
const smo58013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo58013.setAttribute('id', 'smo58013');
smo58045v0ar.push(smo58013);
const smo58014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58014.setAttribute('id', 'smo58014');
smo58045v0ar.push(smo58014);
const smo58015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58015.setAttribute('id', 'smo58015');
smo58045v0ar.push(smo58015);
const smo58016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58016.setAttribute('id', 'smo58016');
smo58045v0ar.push(smo58016);
const smo58017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58017.setAttribute('id', 'smo58017');
smo58045v0ar.push(smo58017);
const smo58018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58018.setAttribute('id', 'smo58018');
smo58018.addModifier(new VF.Dot(), 0);
const smo58019 = new VF.Ornament('mordent_inverted');
smo58018.addModifier(smo58019, 0);
smo58045v0ar.push(smo58018);
const smo58020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58020.setAttribute('id', 'smo58020');
smo58045v0ar.push(smo58020);
smo58045v0.addTickables(smo58045v0ar)
fmtsmo5804547.joinVoices([smo58045v0]);
const smo58045v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58045v1ar = [];
const smo58021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58021.setAttribute('id', 'smo58021');
smo58021.setStyle({ fillStyle: "#115511" });
smo58045v1ar.push(smo58021);
const smo58022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo58022.setAttribute('id', 'smo58022');
smo58022.setStyle({ fillStyle: "#115511" });
const smo580220acc = new VF.Accidental('#');
smo58022.addModifier(smo580220acc, 0);
smo58045v1ar.push(smo58022);
const smo58023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58023.setAttribute('id', 'smo58023');
smo58023.setStyle({ fillStyle: "#115511" });
smo58045v1ar.push(smo58023);
const smo58024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58024.setAttribute('id', 'smo58024');
smo58024.setStyle({ fillStyle: "#115511" });
smo58045v1ar.push(smo58024);
const smo58025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo58025.setAttribute('id', 'smo58025');
smo58025.setStyle({ fillStyle: "#115511" });
smo58045v1ar.push(smo58025);
const smo58026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo58026.setAttribute('id', 'smo58026');
smo58026.setStyle({ fillStyle: "#115511" });
const smo580260acc = new VF.Accidental('#');
smo58026.addModifier(smo580260acc, 0);
smo58045v1ar.push(smo58026);
const smo58027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo58027.setAttribute('id', 'smo58027');
smo58027.setStyle({ fillStyle: "#115511" });
smo58045v1ar.push(smo58027);
const smo58028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58028.setAttribute('id', 'smo58028');
smo58028.setStyle({ fillStyle: "#115511" });
smo58045v1ar.push(smo58028);
const smo58029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58029.setAttribute('id', 'smo58029');
smo58029.setStyle({ fillStyle: "#115511" });
smo58045v1ar.push(smo58029);
const smo58030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
smo58030.setAttribute('id', 'smo58030');
smo58030.setStyle({ fillStyle: "#115511" });
smo58045v1ar.push(smo58030);
const smo58031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
smo58031.setAttribute('id', 'smo58031');
smo58031.setStyle({ fillStyle: "#115511" });
smo58045v1ar.push(smo58031);
smo58045v1.addTickables(smo58045v1ar)
fmtsmo5804547.joinVoices([smo58045v1]);
const fmtsmo6309347 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo63093v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63093v0ar = [];
const smo63064 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo63064.setAttribute('id', 'smo63064');
const smo630640acc = new VF.Accidental('#');
smo63064.addModifier(smo630640acc, 0);
smo63093v0ar.push(smo63064);
const smo63065 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo63065.setAttribute('id', 'smo63065');
smo63093v0ar.push(smo63065);
const smo63066 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo63066.setAttribute('id', 'smo63066');
smo63093v0ar.push(smo63066);
const smo63067 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63067.setAttribute('id', 'smo63067');
smo63093v0ar.push(smo63067);
const smo63068 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo63068.setAttribute('id', 'smo63068');
smo63093v0ar.push(smo63068);
const smo63069 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63069.setAttribute('id', 'smo63069');
smo63093v0ar.push(smo63069);
const smo63070 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo63070.setAttribute('id', 'smo63070');
const smo630700acc = new VF.Accidental('#');
smo63070.addModifier(smo630700acc, 0);
smo63093v0ar.push(smo63070);
const smo63071 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63071.setAttribute('id', 'smo63071');
smo63093v0ar.push(smo63071);
const smo63072 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo63072.setAttribute('id', 'smo63072');
smo63093v0ar.push(smo63072);
smo63093v0.addTickables(smo63093v0ar)
fmtsmo6309347.joinVoices([smo63093v0]);
const smo63093v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63093v1ar = [];
const smo63073 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63073.setAttribute('id', 'smo63073');
smo63073.setStyle({ fillStyle: "#115511" });
smo63093v1ar.push(smo63073);
const smo63074 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63074.setAttribute('id', 'smo63074');
smo63074.setStyle({ fillStyle: "#115511" });
smo63093v1ar.push(smo63074);
const smo63075 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63075.setAttribute('id', 'smo63075');
smo63075.setStyle({ fillStyle: "#115511" });
smo63093v1ar.push(smo63075);
const smo63076 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63076.setAttribute('id', 'smo63076');
smo63076.setStyle({ fillStyle: "#115511" });
const smo630760acc = new VF.Accidental('n');
smo63076.addModifier(smo630760acc, 0);
smo63093v1ar.push(smo63076);
const smo63077 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63077.setAttribute('id', 'smo63077');
smo63077.setStyle({ fillStyle: "#115511" });
smo63093v1ar.push(smo63077);
const smo63078 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63078.setAttribute('id', 'smo63078');
smo63078.setStyle({ fillStyle: "#115511" });
smo63093v1ar.push(smo63078);
const smo63079 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63079.setAttribute('id', 'smo63079');
smo63079.setStyle({ fillStyle: "#115511" });
smo63093v1ar.push(smo63079);
smo63093v1.addTickables(smo63093v1ar)
fmtsmo6309347.joinVoices([smo63093v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66473 = smo58011.getStemDirection();
smo58011.setStemDirection(dirsmo66473);
smo58012.setStemDirection(dirsmo66473);
smo58013.setStemDirection(dirsmo66473);
smo58014.setStemDirection(dirsmo66473);
const smo66473 = new VF.Beam([smo58011,smo58012,smo58013,smo58014]);
const dirsmo66474 = smo58015.getStemDirection();
smo58015.setStemDirection(dirsmo66474);
smo58016.setStemDirection(dirsmo66474);
smo58017.setStemDirection(dirsmo66474);
const smo66474 = new VF.Beam([smo58015,smo58016,smo58017]);
const dirsmo66475 = smo58018.getStemDirection();
smo58018.setStemDirection(dirsmo66475);
smo58020.setStemDirection(dirsmo66475);
const smo66475 = new VF.Beam([smo58018,smo58020]);
const dirsmo66476 = smo58021.getStemDirection();
smo58021.setStemDirection(dirsmo66476);
smo58022.setStemDirection(dirsmo66476);
smo58023.setStemDirection(dirsmo66476);
smo58024.setStemDirection(dirsmo66476);
const smo66476 = new VF.Beam([smo58021,smo58022,smo58023,smo58024]);
const dirsmo66477 = smo58025.getStemDirection();
smo58025.setStemDirection(dirsmo66477);
smo58026.setStemDirection(dirsmo66477);
smo58027.setStemDirection(dirsmo66477);
smo58028.setStemDirection(dirsmo66477);
const smo66477 = new VF.Beam([smo58025,smo58026,smo58027,smo58028]);
const dirsmo66480 = smo63064.getStemDirection();
smo63064.setStemDirection(dirsmo66480);
smo63065.setStemDirection(dirsmo66480);
const smo66480 = new VF.Beam([smo63064,smo63065]);
const dirsmo66481 = smo63066.getStemDirection();
smo63066.setStemDirection(dirsmo66481);
smo63067.setStemDirection(dirsmo66481);
smo63068.setStemDirection(dirsmo66481);
smo63069.setStemDirection(dirsmo66481);
const smo66481 = new VF.Beam([smo63066,smo63067,smo63068,smo63069]);
const dirsmo66482 = smo63075.getStemDirection();
smo63075.setStemDirection(dirsmo66482);
smo63076.setStemDirection(dirsmo66482);
const smo66482 = new VF.Beam([smo63075,smo63076]);
const dirsmo66483 = smo63077.getStemDirection();
smo63077.setStemDirection(dirsmo66483);
smo63078.setStemDirection(dirsmo66483);
const smo66483 = new VF.Beam([smo63077,smo63078]);
 
// formatting measures in staff group smo55345
fmtsmo5804547.format([smo58045v0,smo58045v1,smo63093v0,smo63093v1], 419);
const stavesmo58045 = new VF.Stave(666, 304, 433);
stavesmo58045.setAttribute('id', 'stavesmo58045');
stavesmo58045.setBegBarType(VF.Barline.type.NONE);
stavesmo58045.setContext(context);
stavesmo58045.draw();
smo58045v0.draw(context, stavesmo58045);
smo58045v1.draw(context, stavesmo58045);
smo66473.setContext(context);
smo66473.draw();
smo66474.setContext(context);
smo66474.draw();
smo66475.setContext(context);
smo66475.draw();
smo66476.setContext(context);
smo66476.draw();
smo66477.setContext(context);
smo66477.draw();
const stavesmo63093 = new VF.Stave(666, 438, 433);
stavesmo63093.setAttribute('id', 'stavesmo63093');
stavesmo63093.setBegBarType(VF.Barline.type.NONE);
stavesmo63093.setContext(context);
stavesmo63093.draw();
smo63093v0.draw(context, stavesmo63093);
smo63093v1.draw(context, stavesmo63093);
smo66480.setContext(context);
smo66480.draw();
smo66481.setContext(context);
smo66481.draw();
smo66482.setContext(context);
smo66482.draw();
smo66483.setContext(context);
smo66483.draw();
const fmtsmo5807548 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo58075v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58075v0ar = [];
const smo58046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58046.setAttribute('id', 'smo58046');
smo58075v0ar.push(smo58046);
const smo58047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo58047.setAttribute('id', 'smo58047');
smo58075v0ar.push(smo58047);
const smo58048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo58048.setAttribute('id', 'smo58048');
smo58075v0ar.push(smo58048);
smo58075v0.addTickables(smo58075v0ar)
fmtsmo5807548.joinVoices([smo58075v0]);
const smo58075v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58075v1ar = [];
const smo58049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
smo58049.setAttribute('id', 'smo58049');
smo58049.setStyle({ fillStyle: "#115511" });
smo58075v1ar.push(smo58049);
const smo58050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo58050.setAttribute('id', 'smo58050');
smo58050.setStyle({ fillStyle: "#115511" });
smo58075v1ar.push(smo58050);
const smo58051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58051.setAttribute('id', 'smo58051');
smo58051.setStyle({ fillStyle: "#115511" });
smo58075v1ar.push(smo58051);
const smo58052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58052.setAttribute('id', 'smo58052');
smo58052.setStyle({ fillStyle: "#115511" });
smo58075v1ar.push(smo58052);
const smo58053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58053.setAttribute('id', 'smo58053');
smo58053.setStyle({ fillStyle: "#115511" });
smo58053.addModifier(new VF.Dot(), 0);
smo58075v1ar.push(smo58053);
const smo58054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58054.setAttribute('id', 'smo58054');
smo58054.setStyle({ fillStyle: "#115511" });
smo58075v1ar.push(smo58054);
const smo58055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58055.setAttribute('id', 'smo58055');
smo58055.setStyle({ fillStyle: "#115511" });
smo58075v1ar.push(smo58055);
const smo58056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58056.setAttribute('id', 'smo58056');
smo58056.setStyle({ fillStyle: "#115511" });
smo58075v1ar.push(smo58056);
const smo58057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58057.setAttribute('id', 'smo58057');
smo58057.setStyle({ fillStyle: "#115511" });
smo58075v1ar.push(smo58057);
smo58075v1.addTickables(smo58075v1ar)
fmtsmo5807548.joinVoices([smo58075v1]);
const smo58075v2 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58075v2ar = [];
const smo58058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo58058.setAttribute('id', 'smo58058');
smo58058.setStyle({ fillStyle: '#aaaaaa7f' });
smo58058.addModifier(new VF.Dot(), 0);
smo58075v2ar.push(smo58058);
const smo58059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo58059.setAttribute('id', 'smo58059');
smo58059.setStyle({ fillStyle: "#115511" });
smo58059.addModifier(new VF.Dot(), 0);
smo58075v2ar.push(smo58059);
const smo58060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58060.setAttribute('id', 'smo58060');
smo58060.setStyle({ fillStyle: "#115511" });
smo58075v2ar.push(smo58060);
const smo58061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo58061.setAttribute('id', 'smo58061');
smo58061.setStyle({ fillStyle: "#115511" });
smo58075v2ar.push(smo58061);
smo58075v2.addTickables(smo58075v2ar)
fmtsmo5807548.joinVoices([smo58075v2]);
const fmtsmo6311648 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo63116v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63116v0ar = [];
const smo63094 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63094.setAttribute('id', 'smo63094');
smo63116v0ar.push(smo63094);
const smo63095 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo63095.setAttribute('id', 'smo63095');
smo63116v0ar.push(smo63095);
const smo63096 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63096.setAttribute('id', 'smo63096');
smo63116v0ar.push(smo63096);
const smo63097 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63097.setAttribute('id', 'smo63097');
smo63116v0ar.push(smo63097);
const smo63098 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo63098.setAttribute('id', 'smo63098');
smo63116v0ar.push(smo63098);
const smo63099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo63099.setAttribute('id', 'smo63099');
smo63099.setStyle({ fillStyle: '#aaaaaa7f' });
smo63116v0ar.push(smo63099);
smo63116v0.addTickables(smo63116v0ar)
fmtsmo6311648.joinVoices([smo63116v0]);
const smo63116v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63116v1ar = [];
const smo63100 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo63100.setAttribute('id', 'smo63100');
smo63100.setStyle({ fillStyle: "#115511" });
smo63116v1ar.push(smo63100);
const smo63101 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo63101.setAttribute('id', 'smo63101');
smo63101.setStyle({ fillStyle: "#115511" });
smo63116v1ar.push(smo63101);
const smo63102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo63102.setAttribute('id', 'smo63102');
smo63102.setStyle({ fillStyle: "#115511" });
smo63116v1ar.push(smo63102);
smo63116v1.addTickables(smo63116v1ar)
fmtsmo6311648.joinVoices([smo63116v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66486 = smo58050.getStemDirection();
smo58050.setStemDirection(dirsmo66486);
smo58051.setStemDirection(dirsmo66486);
smo58052.setStemDirection(dirsmo66486);
const smo66486 = new VF.Beam([smo58050,smo58051,smo58052]);
const dirsmo66487 = smo58053.getStemDirection();
smo58053.setStemDirection(dirsmo66487);
smo58054.setStemDirection(dirsmo66487);
smo58055.setStemDirection(dirsmo66487);
const smo66487 = new VF.Beam([smo58053,smo58054,smo58055]);
const dirsmo66488 = smo58056.getStemDirection();
smo58056.setStemDirection(dirsmo66488);
smo58057.setStemDirection(dirsmo66488);
const smo66488 = new VF.Beam([smo58056,smo58057]);
const dirsmo66489 = smo58059.getStemDirection();
smo58059.setStemDirection(dirsmo66489);
smo58060.setStemDirection(dirsmo66489);
smo58061.setStemDirection(dirsmo66489);
const smo66489 = new VF.Beam([smo58059,smo58060,smo58061]);
const dirsmo66492 = smo63096.getStemDirection();
smo63096.setStemDirection(dirsmo66492);
smo63097.setStemDirection(dirsmo66492);
const smo66492 = new VF.Beam([smo63096,smo63097]);
 
// formatting measures in staff group smo55345
fmtsmo5807548.format([smo58075v0,smo58075v1,smo58075v2,smo63116v0,smo63116v1], 332);
const stavesmo58075 = new VF.Stave(1099, 304, 346);
stavesmo58075.setAttribute('id', 'stavesmo58075');
stavesmo58075.setBegBarType(VF.Barline.type.NONE);
stavesmo58075.setContext(context);
stavesmo58075.draw();
smo58075v0.draw(context, stavesmo58075);
smo58075v1.draw(context, stavesmo58075);
smo58075v2.draw(context, stavesmo58075);
smo66486.setContext(context);
smo66486.draw();
smo66487.setContext(context);
smo66487.draw();
smo66488.setContext(context);
smo66488.draw();
smo66489.setContext(context);
smo66489.draw();
const stavesmo63116 = new VF.Stave(1099, 438, 346);
stavesmo63116.setAttribute('id', 'stavesmo63116');
stavesmo63116.setBegBarType(VF.Barline.type.NONE);
stavesmo63116.setContext(context);
stavesmo63116.draw();
smo63116v0.draw(context, stavesmo63116);
smo63116v1.draw(context, stavesmo63116);
smo66492.setContext(context);
smo66492.draw();
const fmtsmo5810449 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo58104v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58104v0ar = [];
const smo58076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo58076.setAttribute('id', 'smo58076');
smo58104v0ar.push(smo58076);
const smo58077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo58077.setAttribute('id', 'smo58077');
smo58104v0ar.push(smo58077);
const smo58078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58078.setAttribute('id', 'smo58078');
smo58104v0ar.push(smo58078);
const smo58079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58079.setAttribute('id', 'smo58079');
smo58104v0ar.push(smo58079);
const smo58080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58080.setAttribute('id', 'smo58080');
smo58104v0ar.push(smo58080);
smo58104v0.addTickables(smo58104v0ar)
fmtsmo5810449.joinVoices([smo58104v0]);
const smo58104v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58104v1ar = [];
const smo58081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58081.setAttribute('id', 'smo58081');
smo58081.setStyle({ fillStyle: "#115511" });
smo58104v1ar.push(smo58081);
const smo58082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58082.setAttribute('id', 'smo58082');
smo58082.setStyle({ fillStyle: "#115511" });
smo58104v1ar.push(smo58082);
const smo58083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58083.setAttribute('id', 'smo58083');
smo58083.setStyle({ fillStyle: "#115511" });
smo58104v1ar.push(smo58083);
const smo58084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58084.setAttribute('id', 'smo58084');
smo58084.setStyle({ fillStyle: "#115511" });
smo58104v1ar.push(smo58084);
const smo58085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58085.setAttribute('id', 'smo58085');
smo58085.setStyle({ fillStyle: "#115511" });
smo58104v1ar.push(smo58085);
const smo58086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58086.setAttribute('id', 'smo58086');
smo58086.setStyle({ fillStyle: "#115511" });
smo58104v1ar.push(smo58086);
const smo58087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58087.setAttribute('id', 'smo58087');
smo58087.setStyle({ fillStyle: "#115511" });
smo58104v1ar.push(smo58087);
const smo58088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58088.setAttribute('id', 'smo58088');
smo58088.setStyle({ fillStyle: "#115511" });
smo58104v1ar.push(smo58088);
const smo58089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo58089.setAttribute('id', 'smo58089');
smo58089.setStyle({ fillStyle: "#115511" });
const smo580890acc = new VF.Accidental('#');
smo58089.addModifier(smo580890acc, 0);
smo58104v1ar.push(smo58089);
const smo58090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58090.setAttribute('id', 'smo58090');
smo58090.setStyle({ fillStyle: "#115511" });
smo58104v1ar.push(smo58090);
smo58104v1.addTickables(smo58104v1ar)
fmtsmo5810449.joinVoices([smo58104v1]);
const fmtsmo6314649 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo63146v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63146v0ar = [];
const smo63117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo63117.setAttribute('id', 'smo63117');
smo63146v0ar.push(smo63117);
const smo63118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo63118.setAttribute('id', 'smo63118');
smo63146v0ar.push(smo63118);
const smo63119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo63119.setAttribute('id', 'smo63119');
smo63146v0ar.push(smo63119);
const smo63120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo63120.setAttribute('id', 'smo63120');
smo63146v0ar.push(smo63120);
const smo63121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo63121.setAttribute('id', 'smo63121');
smo63146v0ar.push(smo63121);
const smo63122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63122.setAttribute('id', 'smo63122');
smo63146v0ar.push(smo63122);
const smo63123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo63123.setAttribute('id', 'smo63123');
smo63146v0ar.push(smo63123);
smo63146v0.addTickables(smo63146v0ar)
fmtsmo6314649.joinVoices([smo63146v0]);
const smo63146v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63146v1ar = [];
const smo63124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo63124.setAttribute('id', 'smo63124');
smo63124.setStyle({ fillStyle: "#115511" });
smo63146v1ar.push(smo63124);
const smo63125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo63125.setAttribute('id', 'smo63125');
smo63125.setStyle({ fillStyle: "#115511" });
smo63146v1ar.push(smo63125);
const smo63126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo63126.setAttribute('id', 'smo63126');
smo63126.setStyle({ fillStyle: "#115511" });
smo63146v1ar.push(smo63126);
const smo63127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo63127.setAttribute('id', 'smo63127');
smo63127.setStyle({ fillStyle: "#115511" });
smo63146v1ar.push(smo63127);
const smo63128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63128.setAttribute('id', 'smo63128');
smo63128.setStyle({ fillStyle: "#115511" });
smo63128.addModifier(new VF.Dot(), 0);
smo63146v1ar.push(smo63128);
const smo63129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63129.setAttribute('id', 'smo63129');
smo63129.setStyle({ fillStyle: "#115511" });
smo63146v1ar.push(smo63129);
const smo63130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63130.setAttribute('id', 'smo63130');
smo63130.setStyle({ fillStyle: "#115511" });
smo63146v1ar.push(smo63130);
const smo63131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo63131.setAttribute('id', 'smo63131');
smo63131.setStyle({ fillStyle: "#115511" });
smo63146v1ar.push(smo63131);
const smo63132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63132.setAttribute('id', 'smo63132');
smo63132.setStyle({ fillStyle: "#115511" });
smo63146v1ar.push(smo63132);
smo63146v1.addTickables(smo63146v1ar)
fmtsmo6314649.joinVoices([smo63146v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66495 = smo58078.getStemDirection();
smo58078.setStemDirection(dirsmo66495);
smo58079.setStemDirection(dirsmo66495);
smo58080.setStemDirection(dirsmo66495);
const smo66495 = new VF.Beam([smo58078,smo58079,smo58080]);
const dirsmo66496 = smo58081.getStemDirection();
smo58081.setStemDirection(dirsmo66496);
smo58082.setStemDirection(dirsmo66496);
const smo66496 = new VF.Beam([smo58081,smo58082]);
const dirsmo66497 = smo58083.getStemDirection();
smo58083.setStemDirection(dirsmo66497);
smo58084.setStemDirection(dirsmo66497);
smo58085.setStemDirection(dirsmo66497);
smo58086.setStemDirection(dirsmo66497);
const smo66497 = new VF.Beam([smo58083,smo58084,smo58085,smo58086]);
const dirsmo66498 = smo58087.getStemDirection();
smo58087.setStemDirection(dirsmo66498);
smo58088.setStemDirection(dirsmo66498);
smo58089.setStemDirection(dirsmo66498);
smo58090.setStemDirection(dirsmo66498);
const smo66498 = new VF.Beam([smo58087,smo58088,smo58089,smo58090]);
const dirsmo66501 = smo63117.getStemDirection();
smo63117.setStemDirection(dirsmo66501);
smo63118.setStemDirection(dirsmo66501);
const smo66501 = new VF.Beam([smo63117,smo63118]);
const dirsmo66502 = smo63119.getStemDirection();
smo63119.setStemDirection(dirsmo66502);
smo63120.setStemDirection(dirsmo66502);
const smo66502 = new VF.Beam([smo63119,smo63120]);
const dirsmo66503 = smo63121.getStemDirection();
smo63121.setStemDirection(dirsmo66503);
smo63122.setStemDirection(dirsmo66503);
const smo66503 = new VF.Beam([smo63121,smo63122]);
const dirsmo66504 = smo63125.getStemDirection();
smo63125.setStemDirection(dirsmo66504);
smo63126.setStemDirection(dirsmo66504);
smo63127.setStemDirection(dirsmo66504);
const smo66504 = new VF.Beam([smo63125,smo63126,smo63127]);
const dirsmo66505 = smo63128.getStemDirection();
smo63128.setStemDirection(dirsmo66505);
smo63129.setStemDirection(dirsmo66505);
smo63130.setStemDirection(dirsmo66505);
const smo66505 = new VF.Beam([smo63128,smo63129,smo63130]);
const dirsmo66506 = smo63131.getStemDirection();
smo63131.setStemDirection(dirsmo66506);
smo63132.setStemDirection(dirsmo66506);
const smo66506 = new VF.Beam([smo63131,smo63132]);
 
// formatting measures in staff group smo55345
fmtsmo5810449.format([smo58104v0,smo58104v1,smo63146v0,smo63146v1], 315);
const stavesmo58104 = new VF.Stave(1445, 304, 363);
stavesmo58104.setAttribute('id', 'stavesmo58104');
stavesmo58104.setBegBarType(VF.Barline.type.NONE);
stavesmo58104.setContext(context);
stavesmo58104.draw();
smo58104v0.draw(context, stavesmo58104);
smo58104v1.draw(context, stavesmo58104);
smo66495.setContext(context);
smo66495.draw();
smo66496.setContext(context);
smo66496.draw();
smo66497.setContext(context);
smo66497.draw();
smo66498.setContext(context);
smo66498.draw();
const stavesmo63146 = new VF.Stave(1445, 438, 363);
stavesmo63146.setAttribute('id', 'stavesmo63146');
stavesmo63146.setBegBarType(VF.Barline.type.NONE);
stavesmo63146.addClef('treble');
stavesmo63146.setContext(context);
stavesmo63146.draw();
smo63146v0.draw(context, stavesmo63146);
smo63146v1.draw(context, stavesmo63146);
smo66501.setContext(context);
smo66501.draw();
smo66502.setContext(context);
smo66502.draw();
smo66503.setContext(context);
smo66503.draw();
smo66504.setContext(context);
smo66504.draw();
smo66505.setContext(context);
smo66505.draw();
smo66506.setContext(context);
smo66506.draw();
const rightsmo55345stavesmo581041 = new VF.StaveConnector(stavesmo58104, stavesmo63146).setType(0);
rightsmo55345stavesmo581041.setContext(context).draw();
const fmtsmo5813650 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo58136v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58136v0ar = [];
const smo58105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58105.setAttribute('id', 'smo58105');
smo58105.addModifier(new VF.Dot(), 0);
smo58136v0ar.push(smo58105);
const smo58106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58106.setAttribute('id', 'smo58106');
smo58136v0ar.push(smo58106);
const smo58107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58107.setAttribute('id', 'smo58107');
smo58136v0ar.push(smo58107);
const smo58108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58108.setAttribute('id', 'smo58108');
smo58136v0ar.push(smo58108);
const smo58109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58109.setAttribute('id', 'smo58109');
smo58136v0ar.push(smo58109);
const smo58110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58110.setAttribute('id', 'smo58110');
smo58136v0ar.push(smo58110);
const smo58111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo58111.setAttribute('id', 'smo58111');
smo58136v0ar.push(smo58111);
const smo58112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo58112.setAttribute('id', 'smo58112');
smo58112.addModifier(new VF.Dot(), 0);
smo58136v0ar.push(smo58112);
const smo58113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo58113.setAttribute('id', 'smo58113');
smo58136v0ar.push(smo58113);
const smo58114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo58114.setAttribute('id', 'smo58114');
smo58136v0ar.push(smo58114);
smo58136v0.addTickables(smo58136v0ar)
fmtsmo5813650.joinVoices([smo58136v0]);
const smo58136v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58136v1ar = [];
const smo58115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58115.setAttribute('id', 'smo58115');
smo58115.setStyle({ fillStyle: "#115511" });
smo58136v1ar.push(smo58115);
const smo58116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo58116.setAttribute('id', 'smo58116');
smo58116.setStyle({ fillStyle: "#115511" });
const smo581160acc = new VF.Accidental('#');
smo58116.addModifier(smo581160acc, 0);
smo58136v1ar.push(smo58116);
const smo58117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo58117.setAttribute('id', 'smo58117');
smo58117.setStyle({ fillStyle: "#115511" });
const smo581170acc = new VF.Accidental('#');
smo58117.addModifier(smo581170acc, 0);
smo58136v1ar.push(smo58117);
const smo58118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58118.setAttribute('id', 'smo58118');
smo58118.setStyle({ fillStyle: "#115511" });
smo58136v1ar.push(smo58118);
const smo58119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58119.setAttribute('id', 'smo58119');
smo58119.setStyle({ fillStyle: "#115511" });
smo58136v1ar.push(smo58119);
const smo58120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58120.setAttribute('id', 'smo58120');
smo58120.setStyle({ fillStyle: "#115511" });
const smo581200acc = new VF.Accidental('n');
smo58120.addModifier(smo581200acc, 0);
smo58136v1ar.push(smo58120);
const smo58121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58121.setAttribute('id', 'smo58121');
smo58121.setStyle({ fillStyle: "#115511" });
smo58136v1ar.push(smo58121);
const smo58122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58122.setAttribute('id', 'smo58122');
smo58122.setStyle({ fillStyle: "#115511" });
smo58136v1ar.push(smo58122);
smo58136v1.addTickables(smo58136v1ar)
fmtsmo5813650.joinVoices([smo58136v1]);
const fmtsmo6317650 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo63176v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63176v0ar = [];
const smo63147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo63147.setAttribute('id', 'smo63147');
smo63176v0ar.push(smo63147);
const smo63148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63148.setAttribute('id', 'smo63148');
smo63176v0ar.push(smo63148);
const smo63149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo63149.setAttribute('id', 'smo63149');
smo63176v0ar.push(smo63149);
const smo63150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo63150.setAttribute('id', 'smo63150');
smo63176v0ar.push(smo63150);
const smo63151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo63151.setAttribute('id', 'smo63151');
smo63176v0ar.push(smo63151);
const smo63152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo63152.setAttribute('id', 'smo63152');
smo63176v0ar.push(smo63152);
smo63176v0.addTickables(smo63176v0ar)
fmtsmo6317650.joinVoices([smo63176v0]);
const smo63176v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63176v1ar = [];
const smo63153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo63153.setAttribute('id', 'smo63153');
smo63153.setStyle({ fillStyle: "#115511" });
smo63176v1ar.push(smo63153);
const smo63154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63154.setAttribute('id', 'smo63154');
smo63154.setStyle({ fillStyle: "#115511" });
smo63176v1ar.push(smo63154);
const smo63155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63155.setAttribute('id', 'smo63155');
smo63155.setStyle({ fillStyle: "#115511" });
smo63176v1ar.push(smo63155);
const smo63156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63156.setAttribute('id', 'smo63156');
smo63156.setStyle({ fillStyle: "#115511" });
smo63176v1ar.push(smo63156);
const smo63157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63157.setAttribute('id', 'smo63157');
smo63157.setStyle({ fillStyle: "#115511" });
smo63176v1ar.push(smo63157);
const smo63158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63158.setAttribute('id', 'smo63158');
smo63158.setStyle({ fillStyle: "#115511" });
smo63176v1ar.push(smo63158);
const smo63159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo63159.setAttribute('id', 'smo63159');
smo63159.setStyle({ fillStyle: "#115511" });
smo63176v1ar.push(smo63159);
const smo63160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/2/n"]}'))
smo63160.setAttribute('id', 'smo63160');
smo63160.setStyle({ fillStyle: "#115511" });
const smo631600acc = new VF.Accidental('#');
smo63160.addModifier(smo631600acc, 0);
smo63176v1ar.push(smo63160);
const smo63161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo63161.setAttribute('id', 'smo63161');
smo63161.setStyle({ fillStyle: "#115511" });
const smo631610acc = new VF.Accidental('n');
smo63161.addModifier(smo631610acc, 0);
smo63176v1ar.push(smo63161);
const smo63162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo63162.setAttribute('id', 'smo63162');
smo63162.setStyle({ fillStyle: "#115511" });
smo63176v1ar.push(smo63162);
smo63176v1.addTickables(smo63176v1ar)
fmtsmo6317650.joinVoices([smo63176v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66525 = smo58105.getStemDirection();
smo58105.setStemDirection(dirsmo66525);
smo58106.setStemDirection(dirsmo66525);
smo58107.setStemDirection(dirsmo66525);
const smo66525 = new VF.Beam([smo58105,smo58106,smo58107]);
const dirsmo66526 = smo58108.getStemDirection();
smo58108.setStemDirection(dirsmo66526);
smo58109.setStemDirection(dirsmo66526);
const smo66526 = new VF.Beam([smo58108,smo58109]);
const dirsmo66527 = smo58110.getStemDirection();
smo58110.setStemDirection(dirsmo66527);
smo58111.setStemDirection(dirsmo66527);
const smo66527 = new VF.Beam([smo58110,smo58111]);
const dirsmo66528 = smo58112.getStemDirection();
smo58112.setStemDirection(dirsmo66528);
smo58113.setStemDirection(dirsmo66528);
smo58114.setStemDirection(dirsmo66528);
const smo66528 = new VF.Beam([smo58112,smo58113,smo58114]);
const dirsmo66529 = smo58115.getStemDirection();
smo58115.setStemDirection(dirsmo66529);
smo58116.setStemDirection(dirsmo66529);
const smo66529 = new VF.Beam([smo58115,smo58116]);
const dirsmo66530 = smo58117.getStemDirection();
smo58117.setStemDirection(dirsmo66530);
smo58118.setStemDirection(dirsmo66530);
const smo66530 = new VF.Beam([smo58117,smo58118]);
const dirsmo66531 = smo58119.getStemDirection();
smo58119.setStemDirection(dirsmo66531);
smo58120.setStemDirection(dirsmo66531);
smo58121.setStemDirection(dirsmo66531);
smo58122.setStemDirection(dirsmo66531);
const smo66531 = new VF.Beam([smo58119,smo58120,smo58121,smo58122]);
const dirsmo66534 = smo63147.getStemDirection();
smo63147.setStemDirection(dirsmo66534);
smo63148.setStemDirection(dirsmo66534);
const smo66534 = new VF.Beam([smo63147,smo63148]);
const dirsmo66535 = smo63153.getStemDirection();
smo63153.setStemDirection(dirsmo66535);
smo63154.setStemDirection(dirsmo66535);
const smo66535 = new VF.Beam([smo63153,smo63154]);
const dirsmo66536 = smo63155.getStemDirection();
smo63155.setStemDirection(dirsmo66536);
smo63156.setStemDirection(dirsmo66536);
smo63157.setStemDirection(dirsmo66536);
smo63158.setStemDirection(dirsmo66536);
const smo66536 = new VF.Beam([smo63155,smo63156,smo63157,smo63158]);
const dirsmo66537 = smo63159.getStemDirection();
smo63159.setStemDirection(dirsmo66537);
smo63160.setStemDirection(dirsmo66537);
smo63161.setStemDirection(dirsmo66537);
smo63162.setStemDirection(dirsmo66537);
const smo66537 = new VF.Beam([smo63159,smo63160,smo63161,smo63162]);
 
// formatting measures in staff group smo55345
fmtsmo5813650.format([smo58136v0,smo58136v1,smo63176v0,smo63176v1], 498);
const stavesmo58136 = new VF.Stave(90, 662, 556);
stavesmo58136.setAttribute('id', 'stavesmo58136');
stavesmo58136.setBegBarType(1);
stavesmo58136.addClef('treble');
stavesmo58136.setContext(context);
stavesmo58136.draw();
smo58136v0.draw(context, stavesmo58136);
smo58136v1.draw(context, stavesmo58136);
smo66525.setContext(context);
smo66525.draw();
smo66526.setContext(context);
smo66526.draw();
smo66527.setContext(context);
smo66527.draw();
smo66528.setContext(context);
smo66528.draw();
smo66529.setContext(context);
smo66529.draw();
smo66530.setContext(context);
smo66530.draw();
smo66531.setContext(context);
smo66531.draw();
const stavesmo63176 = new VF.Stave(90, 801, 556);
stavesmo63176.setAttribute('id', 'stavesmo63176');
stavesmo63176.setBegBarType(1);
stavesmo63176.addClef('treble');
stavesmo63176.setContext(context);
stavesmo63176.draw();
smo63176v0.draw(context, stavesmo63176);
smo63176v1.draw(context, stavesmo63176);
smo66534.setContext(context);
smo66534.draw();
smo66535.setContext(context);
smo66535.draw();
smo66536.setContext(context);
smo66536.draw();
smo66537.setContext(context);
smo66537.draw();
const leftsmo55345stavesmo581361 = new VF.StaveConnector(stavesmo58136, stavesmo63176).setType(3);
leftsmo55345stavesmo581361.setContext(context).draw();
const fmtsmo5817151 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo58171v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58171v0ar = [];
const smo58137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo58137.setAttribute('id', 'smo58137');
smo58171v0ar.push(smo58137);
const smo58138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo58138.setAttribute('id', 'smo58138');
smo58171v0ar.push(smo58138);
const smo58139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58139.setAttribute('id', 'smo58139');
smo58171v0ar.push(smo58139);
const smo58140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo58140.setAttribute('id', 'smo58140');
smo58171v0ar.push(smo58140);
const smo58141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo58141.setAttribute('id', 'smo58141');
smo58171v0ar.push(smo58141);
const smo58142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo58142.setAttribute('id', 'smo58142');
smo58171v0ar.push(smo58142);
const smo58143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo58143.setAttribute('id', 'smo58143');
smo58171v0ar.push(smo58143);
const smo58144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo58144.setAttribute('id', 'smo58144');
smo58171v0ar.push(smo58144);
const smo58145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo58145.setAttribute('id', 'smo58145');
smo58171v0ar.push(smo58145);
const smo58146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo58146.setAttribute('id', 'smo58146');
smo58171v0ar.push(smo58146);
smo58171v0.addTickables(smo58171v0ar)
fmtsmo5817151.joinVoices([smo58171v0]);
const smo58171v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58171v1ar = [];
const smo58147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58147.setAttribute('id', 'smo58147');
smo58147.setStyle({ fillStyle: "#115511" });
smo58147.addModifier(new VF.Dot(), 0);
smo58171v1ar.push(smo58147);
const smo58148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58148.setAttribute('id', 'smo58148');
smo58148.setStyle({ fillStyle: "#115511" });
smo58171v1ar.push(smo58148);
const smo58149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58149.setAttribute('id', 'smo58149');
smo58149.setStyle({ fillStyle: "#115511" });
smo58171v1ar.push(smo58149);
const smo58150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58150.setAttribute('id', 'smo58150');
smo58150.setStyle({ fillStyle: "#115511" });
smo58171v1ar.push(smo58150);
const smo58151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo58151.setAttribute('id', 'smo58151');
smo58151.setStyle({ fillStyle: "#115511" });
smo58171v1ar.push(smo58151);
const smo58152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58152.setAttribute('id', 'smo58152');
smo58152.setStyle({ fillStyle: "#115511" });
smo58171v1ar.push(smo58152);
const smo58153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58153.setAttribute('id', 'smo58153');
smo58153.setStyle({ fillStyle: "#115511" });
smo58171v1ar.push(smo58153);
const smo58154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58154.setAttribute('id', 'smo58154');
smo58154.setStyle({ fillStyle: "#115511" });
smo58171v1ar.push(smo58154);
const smo58155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo58155.setAttribute('id', 'smo58155');
smo58155.setStyle({ fillStyle: "#115511" });
smo58171v1ar.push(smo58155);
const smo58156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58156.setAttribute('id', 'smo58156');
smo58156.setStyle({ fillStyle: "#115511" });
smo58171v1ar.push(smo58156);
const smo58157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58157.setAttribute('id', 'smo58157');
smo58157.setStyle({ fillStyle: "#115511" });
smo58171v1ar.push(smo58157);
smo58171v1.addTickables(smo58171v1ar)
fmtsmo5817151.joinVoices([smo58171v1]);
const fmtsmo6320651 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo63206v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63206v0ar = [];
const smo63177 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
smo63177.setAttribute('id', 'smo63177');
smo63206v0ar.push(smo63177);
const smo63178 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63178.setAttribute('id', 'smo63178');
smo63206v0ar.push(smo63178);
const smo63179 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo63179.setAttribute('id', 'smo63179');
smo63206v0ar.push(smo63179);
const smo63180 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo63180.setAttribute('id', 'smo63180');
const smo631800acc = new VF.Accidental('#');
smo63180.addModifier(smo631800acc, 0);
smo63206v0ar.push(smo63180);
const smo63181 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo63181.setAttribute('id', 'smo63181');
smo63181.addModifier(new VF.Dot(), 0);
smo63206v0ar.push(smo63181);
const smo63182 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63182.setAttribute('id', 'smo63182');
smo63206v0ar.push(smo63182);
const smo63183 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo63183.setAttribute('id', 'smo63183');
smo63206v0ar.push(smo63183);
const smo63184 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63184.setAttribute('id', 'smo63184');
const smo631840acc = new VF.Accidental('n');
smo63184.addModifier(smo631840acc, 0);
smo63206v0ar.push(smo63184);
const smo63185 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo63185.setAttribute('id', 'smo63185');
smo63206v0ar.push(smo63185);
smo63206v0.addTickables(smo63206v0ar)
fmtsmo6320651.joinVoices([smo63206v0]);
const smo63206v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63206v1ar = [];
const smo63186 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo63186.setAttribute('id', 'smo63186');
smo63186.setStyle({ fillStyle: "#115511" });
smo63206v1ar.push(smo63186);
const smo63187 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo63187.setAttribute('id', 'smo63187');
smo63187.setStyle({ fillStyle: "#115511" });
const smo631870acc = new VF.Accidental('#');
smo63187.addModifier(smo631870acc, 0);
smo63206v1ar.push(smo63187);
const smo63188 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63188.setAttribute('id', 'smo63188');
smo63188.setStyle({ fillStyle: "#115511" });
smo63206v1ar.push(smo63188);
const smo63189 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63189.setAttribute('id', 'smo63189');
smo63189.setStyle({ fillStyle: "#115511" });
smo63206v1ar.push(smo63189);
const smo63190 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63190.setAttribute('id', 'smo63190');
smo63190.setStyle({ fillStyle: "#115511" });
smo63206v1ar.push(smo63190);
const smo63191 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63191.setAttribute('id', 'smo63191');
smo63191.setStyle({ fillStyle: "#115511" });
smo63206v1ar.push(smo63191);
const smo63192 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63192.setAttribute('id', 'smo63192');
smo63192.setStyle({ fillStyle: "#115511" });
const smo631920acc = new VF.Accidental('n');
smo63192.addModifier(smo631920acc, 0);
smo63206v1ar.push(smo63192);
smo63206v1.addTickables(smo63206v1ar)
fmtsmo6320651.joinVoices([smo63206v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66540 = smo58137.getStemDirection();
smo58137.setStemDirection(dirsmo66540);
smo58138.setStemDirection(dirsmo66540);
smo58139.setStemDirection(dirsmo66540);
smo58140.setStemDirection(dirsmo66540);
const smo66540 = new VF.Beam([smo58137,smo58138,smo58139,smo58140]);
const dirsmo66541 = smo58141.getStemDirection();
smo58141.setStemDirection(dirsmo66541);
smo58142.setStemDirection(dirsmo66541);
smo58143.setStemDirection(dirsmo66541);
smo58144.setStemDirection(dirsmo66541);
const smo66541 = new VF.Beam([smo58141,smo58142,smo58143,smo58144]);
const dirsmo66542 = smo58145.getStemDirection();
smo58145.setStemDirection(dirsmo66542);
smo58146.setStemDirection(dirsmo66542);
const smo66542 = new VF.Beam([smo58145,smo58146]);
const dirsmo66543 = smo58147.getStemDirection();
smo58147.setStemDirection(dirsmo66543);
smo58148.setStemDirection(dirsmo66543);
smo58149.setStemDirection(dirsmo66543);
smo58150.setStemDirection(dirsmo66543);
smo58151.setStemDirection(dirsmo66543);
const smo66543 = new VF.Beam([smo58147,smo58148,smo58149,smo58150,smo58151]);
const dirsmo66544 = smo58152.getStemDirection();
smo58152.setStemDirection(dirsmo66544);
smo58153.setStemDirection(dirsmo66544);
const smo66544 = new VF.Beam([smo58152,smo58153]);
const dirsmo66545 = smo58154.getStemDirection();
smo58154.setStemDirection(dirsmo66545);
smo58155.setStemDirection(dirsmo66545);
smo58156.setStemDirection(dirsmo66545);
smo58157.setStemDirection(dirsmo66545);
const smo66545 = new VF.Beam([smo58154,smo58155,smo58156,smo58157]);
const dirsmo66548 = smo63178.getStemDirection();
smo63178.setStemDirection(dirsmo66548);
smo63179.setStemDirection(dirsmo66548);
smo63180.setStemDirection(dirsmo66548);
const smo66548 = new VF.Beam([smo63178,smo63179,smo63180]);
const dirsmo66549 = smo63181.getStemDirection();
smo63181.setStemDirection(dirsmo66549);
smo63182.setStemDirection(dirsmo66549);
smo63183.setStemDirection(dirsmo66549);
const smo66549 = new VF.Beam([smo63181,smo63182,smo63183]);
const dirsmo66550 = smo63184.getStemDirection();
smo63184.setStemDirection(dirsmo66550);
smo63185.setStemDirection(dirsmo66550);
const smo66550 = new VF.Beam([smo63184,smo63185]);
const dirsmo66551 = smo63186.getStemDirection();
smo63186.setStemDirection(dirsmo66551);
smo63187.setStemDirection(dirsmo66551);
smo63188.setStemDirection(dirsmo66551);
smo63189.setStemDirection(dirsmo66551);
const smo66551 = new VF.Beam([smo63186,smo63187,smo63188,smo63189]);
const dirsmo66552 = smo63191.getStemDirection();
smo63191.setStemDirection(dirsmo66552);
smo63192.setStemDirection(dirsmo66552);
const smo66552 = new VF.Beam([smo63191,smo63192]);
 
// formatting measures in staff group smo55345
fmtsmo5817151.format([smo58171v0,smo58171v1,smo63206v0,smo63206v1], 515);
const stavesmo58171 = new VF.Stave(646, 662, 563);
stavesmo58171.setAttribute('id', 'stavesmo58171');
stavesmo58171.setBegBarType(VF.Barline.type.NONE);
stavesmo58171.setContext(context);
stavesmo58171.draw();
smo58171v0.draw(context, stavesmo58171);
smo58171v1.draw(context, stavesmo58171);
smo66540.setContext(context);
smo66540.draw();
smo66541.setContext(context);
smo66541.draw();
smo66542.setContext(context);
smo66542.draw();
smo66543.setContext(context);
smo66543.draw();
smo66544.setContext(context);
smo66544.draw();
smo66545.setContext(context);
smo66545.draw();
const stavesmo63206 = new VF.Stave(646, 801, 563);
stavesmo63206.setAttribute('id', 'stavesmo63206');
stavesmo63206.setBegBarType(VF.Barline.type.NONE);
stavesmo63206.addClef('bass');
stavesmo63206.setContext(context);
stavesmo63206.draw();
smo63206v0.draw(context, stavesmo63206);
smo63206v1.draw(context, stavesmo63206);
smo66548.setContext(context);
smo66548.draw();
smo66549.setContext(context);
smo66549.draw();
smo66550.setContext(context);
smo66550.draw();
smo66551.setContext(context);
smo66551.draw();
smo66552.setContext(context);
smo66552.draw();
const fmtsmo5820852 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo58208v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58208v0ar = [];
const smo58172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58172.setAttribute('id', 'smo58172');
smo58208v0ar.push(smo58172);
const smo58173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/5/n"]}'))
smo58173.setAttribute('id', 'smo58173');
const smo581730acc = new VF.Accidental('b');
smo58173.addModifier(smo581730acc, 0);
smo58208v0ar.push(smo58173);
const smo58174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo58174.setAttribute('id', 'smo58174');
smo58208v0ar.push(smo58174);
const smo58175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo58175.setAttribute('id', 'smo58175');
smo58208v0ar.push(smo58175);
const smo58176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo58176.setAttribute('id', 'smo58176');
smo58208v0ar.push(smo58176);
const smo58177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo58177.setAttribute('id', 'smo58177');
smo58208v0ar.push(smo58177);
const smo58178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo58178.setAttribute('id', 'smo58178');
smo58208v0ar.push(smo58178);
const smo58179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo58179.setAttribute('id', 'smo58179');
smo58208v0ar.push(smo58179);
const smo58180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo58180.setAttribute('id', 'smo58180');
smo58208v0ar.push(smo58180);
const smo58181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo58181.setAttribute('id', 'smo58181');
smo58208v0ar.push(smo58181);
const smo58182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo58182.setAttribute('id', 'smo58182');
smo58208v0ar.push(smo58182);
const smo58183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo58183.setAttribute('id', 'smo58183');
const smo58184 = new VF.Ornament('mordent_inverted');
smo58183.addModifier(smo58184, 0);
smo58208v0ar.push(smo58183);
const smo58185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo58185.setAttribute('id', 'smo58185');
smo58208v0ar.push(smo58185);
const smo58186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo58186.setAttribute('id', 'smo58186');
smo58208v0ar.push(smo58186);
smo58208v0.addTickables(smo58208v0ar)
fmtsmo5820852.joinVoices([smo58208v0]);
const smo58208v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58208v1ar = [];
const smo58187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58187.setAttribute('id', 'smo58187');
smo58187.setStyle({ fillStyle: "#115511" });
smo58208v1ar.push(smo58187);
const smo58188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo58188.setAttribute('id', 'smo58188');
smo58188.setStyle({ fillStyle: "#115511" });
smo58208v1ar.push(smo58188);
const smo58189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo58189.setAttribute('id', 'smo58189');
smo58189.setStyle({ fillStyle: "#115511" });
const smo581890acc = new VF.Accidental('#');
smo58189.addModifier(smo581890acc, 0);
smo58208v1ar.push(smo58189);
const smo58190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58190.setAttribute('id', 'smo58190');
smo58190.setStyle({ fillStyle: "#115511" });
smo58208v1ar.push(smo58190);
const smo58191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo58191.setAttribute('id', 'smo58191');
smo58191.setStyle({ fillStyle: "#115511" });
smo58208v1ar.push(smo58191);
const smo58192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo58192.setAttribute('id', 'smo58192');
smo58192.setStyle({ fillStyle: "#115511" });
smo58208v1ar.push(smo58192);
const smo58193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58193.setAttribute('id', 'smo58193');
smo58193.setStyle({ fillStyle: "#115511" });
smo58208v1ar.push(smo58193);
const smo58194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo58194.setAttribute('id', 'smo58194');
smo58194.setStyle({ fillStyle: "#115511" });
smo58208v1ar.push(smo58194);
smo58208v1.addTickables(smo58208v1ar)
fmtsmo5820852.joinVoices([smo58208v1]);
const fmtsmo6324052 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo63240v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63240v0ar = [];
const smo63207 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo63207.setAttribute('id', 'smo63207');
smo63240v0ar.push(smo63207);
const smo63208 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63208.setAttribute('id', 'smo63208');
smo63240v0ar.push(smo63208);
const smo63209 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63209.setAttribute('id', 'smo63209');
smo63240v0ar.push(smo63209);
const smo63210 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo63210.setAttribute('id', 'smo63210');
smo63240v0ar.push(smo63210);
const smo63211 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63211.setAttribute('id', 'smo63211');
smo63240v0ar.push(smo63211);
const smo63212 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo63212.setAttribute('id', 'smo63212');
smo63240v0ar.push(smo63212);
const smo63213 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo63213.setAttribute('id', 'smo63213');
const smo632130acc = new VF.Accidental('#');
smo63213.addModifier(smo632130acc, 0);
smo63240v0ar.push(smo63213);
const smo63214 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
smo63214.setAttribute('id', 'smo63214');
smo63240v0ar.push(smo63214);
const smo63215 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
smo63215.setAttribute('id', 'smo63215');
smo63240v0ar.push(smo63215);
smo63240v0.addTickables(smo63240v0ar)
fmtsmo6324052.joinVoices([smo63240v0]);
const smo63240v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63240v1ar = [];
const smo63216 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63216.setAttribute('id', 'smo63216');
smo63216.setStyle({ fillStyle: "#115511" });
smo63216.addModifier(new VF.Dot(), 0);
smo63240v1ar.push(smo63216);
const smo63217 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63217.setAttribute('id', 'smo63217');
smo63217.setStyle({ fillStyle: "#115511" });
smo63240v1ar.push(smo63217);
const smo63218 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63218.setAttribute('id', 'smo63218');
smo63218.setStyle({ fillStyle: "#115511" });
smo63240v1ar.push(smo63218);
const smo63219 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63219.setAttribute('id', 'smo63219');
smo63219.setStyle({ fillStyle: "#115511" });
smo63240v1ar.push(smo63219);
const smo63220 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo63220.setAttribute('id', 'smo63220');
smo63220.setStyle({ fillStyle: "#115511" });
const smo632200acc = new VF.Accidental('b');
smo63220.addModifier(smo632200acc, 0);
smo63240v1ar.push(smo63220);
const smo63221 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63221.setAttribute('id', 'smo63221');
smo63221.setStyle({ fillStyle: "#115511" });
smo63240v1ar.push(smo63221);
const smo63222 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63222.setAttribute('id', 'smo63222');
smo63222.setStyle({ fillStyle: "#115511" });
smo63240v1ar.push(smo63222);
const smo63223 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63223.setAttribute('id', 'smo63223');
smo63223.setStyle({ fillStyle: "#115511" });
smo63240v1ar.push(smo63223);
const smo63224 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo63224.setAttribute('id', 'smo63224');
smo63224.setStyle({ fillStyle: "#115511" });
smo63240v1ar.push(smo63224);
const smo63225 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63225.setAttribute('id', 'smo63225');
smo63225.setStyle({ fillStyle: "#115511" });
smo63240v1ar.push(smo63225);
const smo63226 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63226.setAttribute('id', 'smo63226');
smo63226.setStyle({ fillStyle: "#115511" });
smo63240v1ar.push(smo63226);
smo63240v1.addTickables(smo63240v1ar)
fmtsmo6324052.joinVoices([smo63240v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66555 = smo58172.getStemDirection();
smo58172.setStemDirection(dirsmo66555);
smo58173.setStemDirection(dirsmo66555);
const smo66555 = new VF.Beam([smo58172,smo58173]);
const dirsmo66556 = smo58174.getStemDirection();
smo58174.setStemDirection(dirsmo66556);
smo58175.setStemDirection(dirsmo66556);
smo58176.setStemDirection(dirsmo66556);
const smo66556 = new VF.Beam([smo58174,smo58175,smo58176]);
const dirsmo66557 = smo58177.getStemDirection();
smo58177.setStemDirection(dirsmo66557);
smo58178.setStemDirection(dirsmo66557);
smo58179.setStemDirection(dirsmo66557);
smo58180.setStemDirection(dirsmo66557);
const smo66557 = new VF.Beam([smo58177,smo58178,smo58179,smo58180]);
const dirsmo66558 = smo58181.getStemDirection();
smo58181.setStemDirection(dirsmo66558);
smo58182.setStemDirection(dirsmo66558);
smo58183.setStemDirection(dirsmo66558);
smo58185.setStemDirection(dirsmo66558);
smo58186.setStemDirection(dirsmo66558);
const smo66558 = new VF.Beam([smo58181,smo58182,smo58183,smo58185,smo58186]);
const dirsmo66559 = smo58187.getStemDirection();
smo58187.setStemDirection(dirsmo66559);
smo58188.setStemDirection(dirsmo66559);
smo58189.setStemDirection(dirsmo66559);
smo58190.setStemDirection(dirsmo66559);
const smo66559 = new VF.Beam([smo58187,smo58188,smo58189,smo58190]);
const dirsmo66560 = smo58191.getStemDirection();
smo58191.setStemDirection(dirsmo66560);
smo58192.setStemDirection(dirsmo66560);
smo58193.setStemDirection(dirsmo66560);
smo58194.setStemDirection(dirsmo66560);
const smo66560 = new VF.Beam([smo58191,smo58192,smo58193,smo58194]);
const dirsmo66563 = smo63207.getStemDirection();
smo63207.setStemDirection(dirsmo66563);
smo63208.setStemDirection(dirsmo66563);
const smo66563 = new VF.Beam([smo63207,smo63208]);
const dirsmo66564 = smo63209.getStemDirection();
smo63209.setStemDirection(dirsmo66564);
smo63210.setStemDirection(dirsmo66564);
smo63211.setStemDirection(dirsmo66564);
smo63212.setStemDirection(dirsmo66564);
const smo66564 = new VF.Beam([smo63209,smo63210,smo63211,smo63212]);
const dirsmo66565 = smo63216.getStemDirection();
smo63216.setStemDirection(dirsmo66565);
smo63217.setStemDirection(dirsmo66565);
smo63218.setStemDirection(dirsmo66565);
smo63219.setStemDirection(dirsmo66565);
smo63220.setStemDirection(dirsmo66565);
const smo66565 = new VF.Beam([smo63216,smo63217,smo63218,smo63219,smo63220]);
const dirsmo66566 = smo63221.getStemDirection();
smo63221.setStemDirection(dirsmo66566);
smo63222.setStemDirection(dirsmo66566);
const smo66566 = new VF.Beam([smo63221,smo63222]);
const dirsmo66567 = smo63223.getStemDirection();
smo63223.setStemDirection(dirsmo66567);
smo63224.setStemDirection(dirsmo66567);
smo63225.setStemDirection(dirsmo66567);
smo63226.setStemDirection(dirsmo66567);
const smo66567 = new VF.Beam([smo63223,smo63224,smo63225,smo63226]);
 
// formatting measures in staff group smo55345
fmtsmo5820852.format([smo58208v0,smo58208v1,smo63240v0,smo63240v1], 585);
const stavesmo58208 = new VF.Stave(1209, 662, 599);
stavesmo58208.setAttribute('id', 'stavesmo58208');
stavesmo58208.setBegBarType(VF.Barline.type.NONE);
stavesmo58208.setContext(context);
stavesmo58208.draw();
smo58208v0.draw(context, stavesmo58208);
smo58208v1.draw(context, stavesmo58208);
smo66555.setContext(context);
smo66555.draw();
smo66556.setContext(context);
smo66556.draw();
smo66557.setContext(context);
smo66557.draw();
smo66558.setContext(context);
smo66558.draw();
smo66559.setContext(context);
smo66559.draw();
smo66560.setContext(context);
smo66560.draw();
const stavesmo63240 = new VF.Stave(1209, 801, 599);
stavesmo63240.setAttribute('id', 'stavesmo63240');
stavesmo63240.setBegBarType(VF.Barline.type.NONE);
stavesmo63240.setContext(context);
stavesmo63240.draw();
smo63240v0.draw(context, stavesmo63240);
smo63240v1.draw(context, stavesmo63240);
smo66563.setContext(context);
smo66563.draw();
smo66564.setContext(context);
smo66564.draw();
smo66565.setContext(context);
smo66565.draw();
smo66566.setContext(context);
smo66566.draw();
smo66567.setContext(context);
smo66567.draw();
const rightsmo55345stavesmo582081 = new VF.StaveConnector(stavesmo58208, stavesmo63240).setType(0);
rightsmo55345stavesmo582081.setContext(context).draw();
const fmtsmo5824053 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo58240v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58240v0ar = [];
const smo58209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo58209.setAttribute('id', 'smo58209');
smo58240v0ar.push(smo58209);
const smo58210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo58210.setAttribute('id', 'smo58210');
const smo582100acc = new VF.Accidental('#');
smo58210.addModifier(smo582100acc, 0);
smo58240v0ar.push(smo58210);
const smo58211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58211.setAttribute('id', 'smo58211');
smo58240v0ar.push(smo58211);
const smo58212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo58212.setAttribute('id', 'smo58212');
smo58240v0ar.push(smo58212);
const smo58213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo58213.setAttribute('id', 'smo58213');
smo58213.addModifier(new VF.Dot(), 0);
smo58240v0ar.push(smo58213);
const smo58214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58214.setAttribute('id', 'smo58214');
smo58240v0ar.push(smo58214);
const smo58215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58215.setAttribute('id', 'smo58215');
smo58240v0ar.push(smo58215);
const smo58216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
smo58216.setAttribute('id', 'smo58216');
smo58240v0ar.push(smo58216);
const smo58217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
smo58217.setAttribute('id', 'smo58217');
smo58240v0ar.push(smo58217);
smo58240v0.addTickables(smo58240v0ar)
fmtsmo5824053.joinVoices([smo58240v0]);
const smo58240v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58240v1ar = [];
const smo58218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58218.setAttribute('id', 'smo58218');
smo58218.setStyle({ fillStyle: "#115511" });
smo58240v1ar.push(smo58218);
const smo58219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
smo58219.setAttribute('id', 'smo58219');
smo58219.setStyle({ fillStyle: "#115511" });
smo58240v1ar.push(smo58219);
const smo58220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
smo58220.setAttribute('id', 'smo58220');
smo58220.setStyle({ fillStyle: "#115511" });
smo58240v1ar.push(smo58220);
const smo58221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58221.setAttribute('id', 'smo58221');
smo58221.setStyle({ fillStyle: "#115511" });
smo58240v1ar.push(smo58221);
const smo58222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo58222.setAttribute('id', 'smo58222');
smo58222.setStyle({ fillStyle: "#115511" });
const smo582220acc = new VF.Accidental('#');
smo58222.addModifier(smo582220acc, 0);
smo58240v1ar.push(smo58222);
const smo58223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58223.setAttribute('id', 'smo58223');
smo58223.setStyle({ fillStyle: "#115511" });
smo58240v1ar.push(smo58223);
const smo58224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58224.setAttribute('id', 'smo58224');
smo58224.setStyle({ fillStyle: "#115511" });
smo58224.addModifier(new VF.Dot(), 0);
smo58240v1ar.push(smo58224);
const smo58225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58225.setAttribute('id', 'smo58225');
smo58225.setStyle({ fillStyle: "#115511" });
smo58240v1ar.push(smo58225);
const smo58226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58226.setAttribute('id', 'smo58226');
smo58226.setStyle({ fillStyle: "#115511" });
smo58240v1ar.push(smo58226);
smo58240v1.addTickables(smo58240v1ar)
fmtsmo5824053.joinVoices([smo58240v1]);
const fmtsmo6327053 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo63270v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63270v0ar = [];
const smo63241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo63241.setAttribute('id', 'smo63241');
smo63270v0ar.push(smo63241);
const smo63242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63242.setAttribute('id', 'smo63242');
smo63270v0ar.push(smo63242);
const smo63243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo63243.setAttribute('id', 'smo63243');
smo63270v0ar.push(smo63243);
const smo63244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo63244.setAttribute('id', 'smo63244');
const smo632440acc = new VF.Accidental('#');
smo63244.addModifier(smo632440acc, 0);
smo63270v0ar.push(smo63244);
const smo63245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo63245.setAttribute('id', 'smo63245');
smo63245.addModifier(new VF.Dot(), 0);
smo63270v0ar.push(smo63245);
const smo63246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo63246.setAttribute('id', 'smo63246');
smo63270v0ar.push(smo63246);
const smo63247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo63247.setAttribute('id', 'smo63247');
smo63270v0ar.push(smo63247);
const smo63248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo63248.setAttribute('id', 'smo63248');
const smo632480acc = new VF.Accidental('n');
smo63248.addModifier(smo632480acc, 0);
smo63270v0ar.push(smo63248);
const smo63249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo63249.setAttribute('id', 'smo63249');
const smo632490acc = new VF.Accidental('#');
smo63249.addModifier(smo632490acc, 0);
smo63270v0ar.push(smo63249);
smo63270v0.addTickables(smo63270v0ar)
fmtsmo6327053.joinVoices([smo63270v0]);
const smo63270v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63270v1ar = [];
const smo63250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63250.setAttribute('id', 'smo63250');
smo63250.setStyle({ fillStyle: "#115511" });
smo63270v1ar.push(smo63250);
const smo63251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63251.setAttribute('id', 'smo63251');
smo63251.setStyle({ fillStyle: "#115511" });
smo63270v1ar.push(smo63251);
const smo63252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63252.setAttribute('id', 'smo63252');
smo63252.setStyle({ fillStyle: "#115511" });
smo63270v1ar.push(smo63252);
const smo63253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63253.setAttribute('id', 'smo63253');
smo63253.setStyle({ fillStyle: "#115511" });
smo63270v1ar.push(smo63253);
const smo63254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63254.setAttribute('id', 'smo63254');
smo63254.setStyle({ fillStyle: "#115511" });
smo63270v1ar.push(smo63254);
const smo63255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63255.setAttribute('id', 'smo63255');
smo63255.setStyle({ fillStyle: "#115511" });
smo63270v1ar.push(smo63255);
const smo63256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63256.setAttribute('id', 'smo63256');
smo63256.setStyle({ fillStyle: "#115511" });
smo63270v1ar.push(smo63256);
smo63270v1.addTickables(smo63270v1ar)
fmtsmo6327053.joinVoices([smo63270v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66582 = smo58209.getStemDirection();
smo58209.setStemDirection(dirsmo66582);
smo58210.setStemDirection(dirsmo66582);
smo58211.setStemDirection(dirsmo66582);
smo58212.setStemDirection(dirsmo66582);
const smo66582 = new VF.Beam([smo58209,smo58210,smo58211,smo58212]);
const dirsmo66583 = smo58213.getStemDirection();
smo58213.setStemDirection(dirsmo66583);
smo58214.setStemDirection(dirsmo66583);
const smo66583 = new VF.Beam([smo58213,smo58214]);
const dirsmo66584 = smo58222.getStemDirection();
smo58222.setStemDirection(dirsmo66584);
smo58223.setStemDirection(dirsmo66584);
const smo66584 = new VF.Beam([smo58222,smo58223]);
const dirsmo66585 = smo58224.getStemDirection();
smo58224.setStemDirection(dirsmo66585);
smo58225.setStemDirection(dirsmo66585);
smo58226.setStemDirection(dirsmo66585);
const smo66585 = new VF.Beam([smo58224,smo58225,smo58226]);
const dirsmo66588 = smo63242.getStemDirection();
smo63242.setStemDirection(dirsmo66588);
smo63243.setStemDirection(dirsmo66588);
smo63244.setStemDirection(dirsmo66588);
const smo66588 = new VF.Beam([smo63242,smo63243,smo63244]);
const dirsmo66589 = smo63245.getStemDirection();
smo63245.setStemDirection(dirsmo66589);
smo63246.setStemDirection(dirsmo66589);
smo63247.setStemDirection(dirsmo66589);
const smo66589 = new VF.Beam([smo63245,smo63246,smo63247]);
const dirsmo66590 = smo63248.getStemDirection();
smo63248.setStemDirection(dirsmo66590);
smo63249.setStemDirection(dirsmo66590);
const smo66590 = new VF.Beam([smo63248,smo63249]);
const dirsmo66591 = smo63250.getStemDirection();
smo63250.setStemDirection(dirsmo66591);
smo63251.setStemDirection(dirsmo66591);
smo63252.setStemDirection(dirsmo66591);
smo63253.setStemDirection(dirsmo66591);
smo63254.setStemDirection(dirsmo66591);
smo63255.setStemDirection(dirsmo66591);
const smo66591 = new VF.Beam([smo63250,smo63251,smo63252,smo63253,smo63254,smo63255]);
 
// formatting measures in staff group smo55345
fmtsmo5824053.format([smo58240v0,smo58240v1,smo63270v0,smo63270v1], 496);
const stavesmo58240 = new VF.Stave(90, 1010, 554);
stavesmo58240.setAttribute('id', 'stavesmo58240');
stavesmo58240.setBegBarType(1);
stavesmo58240.addClef('treble');
stavesmo58240.setContext(context);
stavesmo58240.draw();
smo58240v0.draw(context, stavesmo58240);
smo58240v1.draw(context, stavesmo58240);
smo66582.setContext(context);
smo66582.draw();
smo66583.setContext(context);
smo66583.draw();
smo66584.setContext(context);
smo66584.draw();
smo66585.setContext(context);
smo66585.draw();
const stavesmo63270 = new VF.Stave(90, 1107, 554);
stavesmo63270.setAttribute('id', 'stavesmo63270');
stavesmo63270.setBegBarType(1);
stavesmo63270.addClef('treble');
stavesmo63270.setContext(context);
stavesmo63270.draw();
smo63270v0.draw(context, stavesmo63270);
smo63270v1.draw(context, stavesmo63270);
smo66588.setContext(context);
smo66588.draw();
smo66589.setContext(context);
smo66589.draw();
smo66590.setContext(context);
smo66590.draw();
smo66591.setContext(context);
smo66591.draw();
const leftsmo55345stavesmo582401 = new VF.StaveConnector(stavesmo58240, stavesmo63270).setType(3);
leftsmo55345stavesmo582401.setContext(context).draw();
const fmtsmo5826754 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo58267v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58267v0ar = [];
const smo58241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo58241.setAttribute('id', 'smo58241');
smo58241.setStyle({ fillStyle: '#aaaaaa7f' });
smo58267v0ar.push(smo58241);
smo58267v0.addTickables(smo58267v0ar)
fmtsmo5826754.joinVoices([smo58267v0]);
const smo58267v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58267v1ar = [];
const smo58242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58242.setAttribute('id', 'smo58242');
smo58242.setStyle({ fillStyle: "#115511" });
smo58267v1ar.push(smo58242);
const smo58243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58243.setAttribute('id', 'smo58243');
smo58243.setStyle({ fillStyle: "#115511" });
smo58267v1ar.push(smo58243);
const smo58244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo58244.setAttribute('id', 'smo58244');
smo58244.setStyle({ fillStyle: "#115511" });
const smo582440acc = new VF.Accidental('#');
smo58244.addModifier(smo582440acc, 0);
smo58267v1ar.push(smo58244);
const smo58245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58245.setAttribute('id', 'smo58245');
smo58245.setStyle({ fillStyle: "#115511" });
smo58267v1ar.push(smo58245);
const smo58246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58246.setAttribute('id', 'smo58246');
smo58246.setStyle({ fillStyle: "#115511" });
smo58267v1ar.push(smo58246);
const smo58247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58247.setAttribute('id', 'smo58247');
smo58247.setStyle({ fillStyle: "#115511" });
smo58267v1ar.push(smo58247);
const smo58248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58248.setAttribute('id', 'smo58248');
smo58248.setStyle({ fillStyle: "#115511" });
smo58267v1ar.push(smo58248);
const smo58249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58249.setAttribute('id', 'smo58249');
smo58249.setStyle({ fillStyle: "#115511" });
smo58267v1ar.push(smo58249);
const smo58250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58250.setAttribute('id', 'smo58250');
smo58250.setStyle({ fillStyle: "#115511" });
smo58267v1ar.push(smo58250);
const smo58251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo58251.setAttribute('id', 'smo58251');
smo58251.setStyle({ fillStyle: "#115511" });
smo58267v1ar.push(smo58251);
const smo58252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58252.setAttribute('id', 'smo58252');
smo58252.setStyle({ fillStyle: "#115511" });
smo58267v1ar.push(smo58252);
const smo58253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58253.setAttribute('id', 'smo58253');
smo58253.setStyle({ fillStyle: "#115511" });
smo58267v1ar.push(smo58253);
smo58267v1.addTickables(smo58267v1ar)
fmtsmo5826754.joinVoices([smo58267v1]);
const fmtsmo6330354 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo63303v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63303v0ar = [];
const smo63271 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63271.setAttribute('id', 'smo63271');
smo63303v0ar.push(smo63271);
const smo63272 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63272.setAttribute('id', 'smo63272');
smo63303v0ar.push(smo63272);
const smo63273 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63273.setAttribute('id', 'smo63273');
smo63303v0ar.push(smo63273);
const smo63274 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63274.setAttribute('id', 'smo63274');
smo63303v0ar.push(smo63274);
const smo63275 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo63275.setAttribute('id', 'smo63275');
smo63303v0ar.push(smo63275);
const smo63276 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo63276.setAttribute('id', 'smo63276');
smo63303v0ar.push(smo63276);
const smo63277 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo63277.setAttribute('id', 'smo63277');
smo63303v0ar.push(smo63277);
const smo63278 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/2/n"]}'))
smo63278.setAttribute('id', 'smo63278');
const smo632780acc = new VF.Accidental('#');
smo63278.addModifier(smo632780acc, 0);
smo63303v0ar.push(smo63278);
const smo63279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/2/n"]}'))
smo63279.setAttribute('id', 'smo63279');
smo63303v0ar.push(smo63279);
const smo63280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63280.setAttribute('id', 'smo63280');
smo63303v0ar.push(smo63280);
const smo63281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo63281.setAttribute('id', 'smo63281');
const smo632810acc = new VF.Accidental('#');
smo63281.addModifier(smo632810acc, 0);
smo63303v0ar.push(smo63281);
const smo63282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63282.setAttribute('id', 'smo63282');
smo63303v0ar.push(smo63282);
smo63303v0.addTickables(smo63303v0ar)
fmtsmo6330354.joinVoices([smo63303v0]);
const smo63303v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63303v1ar = [];
const smo63283 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo63283.setAttribute('id', 'smo63283');
smo63283.setStyle({ fillStyle: "#115511" });
smo63303v1ar.push(smo63283);
const smo63284 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63284.setAttribute('id', 'smo63284');
smo63284.setStyle({ fillStyle: "#115511" });
smo63303v1ar.push(smo63284);
const smo63285 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63285.setAttribute('id', 'smo63285');
smo63285.setStyle({ fillStyle: "#115511" });
smo63303v1ar.push(smo63285);
const smo63286 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo63286.setAttribute('id', 'smo63286');
smo63286.setStyle({ fillStyle: "#115511" });
const smo632860acc = new VF.Accidental('#');
smo63286.addModifier(smo632860acc, 0);
smo63303v1ar.push(smo63286);
const smo63287 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63287.setAttribute('id', 'smo63287');
smo63287.setStyle({ fillStyle: "#115511" });
smo63303v1ar.push(smo63287);
const smo63288 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo63288.setAttribute('id', 'smo63288');
smo63288.setStyle({ fillStyle: "#115511" });
smo63303v1ar.push(smo63288);
const smo63289 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63289.setAttribute('id', 'smo63289');
smo63289.setStyle({ fillStyle: "#115511" });
smo63303v1ar.push(smo63289);
smo63303v1.addTickables(smo63303v1ar)
fmtsmo6330354.joinVoices([smo63303v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66594 = smo58242.getStemDirection();
smo58242.setStemDirection(dirsmo66594);
smo58243.setStemDirection(dirsmo66594);
smo58244.setStemDirection(dirsmo66594);
smo58245.setStemDirection(dirsmo66594);
const smo66594 = new VF.Beam([smo58242,smo58243,smo58244,smo58245]);
const dirsmo66595 = smo58246.getStemDirection();
smo58246.setStemDirection(dirsmo66595);
smo58247.setStemDirection(dirsmo66595);
smo58248.setStemDirection(dirsmo66595);
smo58249.setStemDirection(dirsmo66595);
const smo66595 = new VF.Beam([smo58246,smo58247,smo58248,smo58249]);
const dirsmo66596 = smo58250.getStemDirection();
smo58250.setStemDirection(dirsmo66596);
smo58251.setStemDirection(dirsmo66596);
smo58252.setStemDirection(dirsmo66596);
smo58253.setStemDirection(dirsmo66596);
const smo66596 = new VF.Beam([smo58250,smo58251,smo58252,smo58253]);
const dirsmo66599 = smo63271.getStemDirection();
smo63271.setStemDirection(dirsmo66599);
smo63272.setStemDirection(dirsmo66599);
smo63273.setStemDirection(dirsmo66599);
smo63274.setStemDirection(dirsmo66599);
const smo66599 = new VF.Beam([smo63271,smo63272,smo63273,smo63274]);
const dirsmo66600 = smo63275.getStemDirection();
smo63275.setStemDirection(dirsmo66600);
smo63276.setStemDirection(dirsmo66600);
smo63277.setStemDirection(dirsmo66600);
smo63278.setStemDirection(dirsmo66600);
const smo66600 = new VF.Beam([smo63275,smo63276,smo63277,smo63278]);
const dirsmo66601 = smo63279.getStemDirection();
smo63279.setStemDirection(dirsmo66601);
smo63280.setStemDirection(dirsmo66601);
smo63281.setStemDirection(dirsmo66601);
smo63282.setStemDirection(dirsmo66601);
const smo66601 = new VF.Beam([smo63279,smo63280,smo63281,smo63282]);
const dirsmo66602 = smo63283.getStemDirection();
smo63283.setStemDirection(dirsmo66602);
smo63284.setStemDirection(dirsmo66602);
const smo66602 = new VF.Beam([smo63283,smo63284]);
const dirsmo66603 = smo63285.getStemDirection();
smo63285.setStemDirection(dirsmo66603);
smo63286.setStemDirection(dirsmo66603);
smo63287.setStemDirection(dirsmo66603);
smo63288.setStemDirection(dirsmo66603);
const smo66603 = new VF.Beam([smo63285,smo63286,smo63287,smo63288]);
 
// formatting measures in staff group smo55345
fmtsmo5826754.format([smo58267v0,smo58267v1,smo63303v0,smo63303v1], 564);
const stavesmo58267 = new VF.Stave(644, 1010, 612);
stavesmo58267.setAttribute('id', 'stavesmo58267');
stavesmo58267.setBegBarType(VF.Barline.type.NONE);
stavesmo58267.setContext(context);
stavesmo58267.draw();
smo58267v0.draw(context, stavesmo58267);
smo58267v1.draw(context, stavesmo58267);
smo66594.setContext(context);
smo66594.draw();
smo66595.setContext(context);
smo66595.draw();
smo66596.setContext(context);
smo66596.draw();
const stavesmo63303 = new VF.Stave(644, 1107, 612);
stavesmo63303.setAttribute('id', 'stavesmo63303');
stavesmo63303.setBegBarType(VF.Barline.type.NONE);
stavesmo63303.addClef('bass');
stavesmo63303.setContext(context);
stavesmo63303.draw();
smo63303v0.draw(context, stavesmo63303);
smo63303v1.draw(context, stavesmo63303);
smo66599.setContext(context);
smo66599.draw();
smo66600.setContext(context);
smo66600.draw();
smo66601.setContext(context);
smo66601.draw();
smo66602.setContext(context);
smo66602.draw();
smo66603.setContext(context);
smo66603.draw();
const fmtsmo5830055 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo58300v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58300v0ar = [];
const smo58268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58268.setAttribute('id', 'smo58268');
smo58300v0ar.push(smo58268);
const smo58269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58269.setAttribute('id', 'smo58269');
smo58300v0ar.push(smo58269);
const smo58270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58270.setAttribute('id', 'smo58270');
smo58270.addModifier(new VF.Dot(), 0);
smo58300v0ar.push(smo58270);
const smo58271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58271.setAttribute('id', 'smo58271');
smo58300v0ar.push(smo58271);
const smo58272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58272.setAttribute('id', 'smo58272');
smo58300v0ar.push(smo58272);
const smo58273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58273.setAttribute('id', 'smo58273');
smo58300v0ar.push(smo58273);
const smo58274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo58274.setAttribute('id', 'smo58274');
smo58300v0ar.push(smo58274);
const smo58275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58275.setAttribute('id', 'smo58275');
smo58300v0ar.push(smo58275);
const smo58276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58276.setAttribute('id', 'smo58276');
smo58300v0ar.push(smo58276);
smo58300v0.addTickables(smo58300v0ar)
fmtsmo5830055.joinVoices([smo58300v0]);
const smo58300v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58300v1ar = [];
const smo58277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58277.setAttribute('id', 'smo58277');
smo58277.setStyle({ fillStyle: "#115511" });
smo58300v1ar.push(smo58277);
const smo58278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58278.setAttribute('id', 'smo58278');
smo58278.setStyle({ fillStyle: "#115511" });
smo58300v1ar.push(smo58278);
const smo58279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58279.setAttribute('id', 'smo58279');
smo58279.setStyle({ fillStyle: "#115511" });
smo58300v1ar.push(smo58279);
const smo58280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58280.setAttribute('id', 'smo58280');
smo58280.setStyle({ fillStyle: "#115511" });
smo58300v1ar.push(smo58280);
const smo58281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58281.setAttribute('id', 'smo58281');
smo58281.setStyle({ fillStyle: "#115511" });
smo58300v1ar.push(smo58281);
const smo58282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58282.setAttribute('id', 'smo58282');
smo58282.setStyle({ fillStyle: "#115511" });
smo58300v1ar.push(smo58282);
const smo58283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58283.setAttribute('id', 'smo58283');
smo58283.setStyle({ fillStyle: "#115511" });
smo58300v1ar.push(smo58283);
const smo58284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58284.setAttribute('id', 'smo58284');
smo58284.setStyle({ fillStyle: "#115511" });
smo58300v1ar.push(smo58284);
const smo58285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58285.setAttribute('id', 'smo58285');
smo58285.setStyle({ fillStyle: "#115511" });
smo58300v1ar.push(smo58285);
const smo58286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58286.setAttribute('id', 'smo58286');
smo58286.setStyle({ fillStyle: "#115511" });
smo58300v1ar.push(smo58286);
smo58300v1.addTickables(smo58300v1ar)
fmtsmo5830055.joinVoices([smo58300v1]);
const fmtsmo6333555 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo63335v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63335v0ar = [];
const smo63304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo63304.setAttribute('id', 'smo63304');
smo63335v0ar.push(smo63304);
const smo63305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo63305.setAttribute('id', 'smo63305');
smo63335v0ar.push(smo63305);
const smo63306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63306.setAttribute('id', 'smo63306');
smo63335v0ar.push(smo63306);
const smo63307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo63307.setAttribute('id', 'smo63307');
smo63335v0ar.push(smo63307);
const smo63308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63308.setAttribute('id', 'smo63308');
smo63335v0ar.push(smo63308);
const smo63309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63309.setAttribute('id', 'smo63309');
smo63335v0ar.push(smo63309);
const smo63310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63310.setAttribute('id', 'smo63310');
smo63335v0ar.push(smo63310);
const smo63311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo63311.setAttribute('id', 'smo63311');
smo63335v0ar.push(smo63311);
const smo63312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63312.setAttribute('id', 'smo63312');
smo63335v0ar.push(smo63312);
const smo63313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo63313.setAttribute('id', 'smo63313');
smo63335v0ar.push(smo63313);
const smo63314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63314.setAttribute('id', 'smo63314');
smo63335v0ar.push(smo63314);
const smo63315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo63315.setAttribute('id', 'smo63315');
smo63335v0ar.push(smo63315);
smo63335v0.addTickables(smo63335v0ar)
fmtsmo6333555.joinVoices([smo63335v0]);
const smo63335v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63335v1ar = [];
const smo63316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63316.setAttribute('id', 'smo63316');
smo63316.setStyle({ fillStyle: "#115511" });
smo63335v1ar.push(smo63316);
const smo63317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63317.setAttribute('id', 'smo63317');
smo63317.setStyle({ fillStyle: "#115511" });
smo63335v1ar.push(smo63317);
const smo63318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63318.setAttribute('id', 'smo63318');
smo63318.setStyle({ fillStyle: "#115511" });
smo63335v1ar.push(smo63318);
const smo63319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo63319.setAttribute('id', 'smo63319');
smo63319.setStyle({ fillStyle: "#115511" });
const smo633190acc = new VF.Accidental('#');
smo63319.addModifier(smo633190acc, 0);
smo63335v1ar.push(smo63319);
const smo63320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63320.setAttribute('id', 'smo63320');
smo63320.setStyle({ fillStyle: "#115511" });
smo63335v1ar.push(smo63320);
const smo63321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63321.setAttribute('id', 'smo63321');
smo63321.setStyle({ fillStyle: "#115511" });
smo63335v1ar.push(smo63321);
smo63335v1.addTickables(smo63335v1ar)
fmtsmo6333555.joinVoices([smo63335v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66606 = smo58268.getStemDirection();
smo58268.setStemDirection(dirsmo66606);
smo58269.setStemDirection(dirsmo66606);
const smo66606 = new VF.Beam([smo58268,smo58269]);
const dirsmo66607 = smo58270.getStemDirection();
smo58270.setStemDirection(dirsmo66607);
smo58271.setStemDirection(dirsmo66607);
smo58272.setStemDirection(dirsmo66607);
const smo66607 = new VF.Beam([smo58270,smo58271,smo58272]);
const dirsmo66608 = smo58273.getStemDirection();
smo58273.setStemDirection(dirsmo66608);
smo58274.setStemDirection(dirsmo66608);
smo58275.setStemDirection(dirsmo66608);
smo58276.setStemDirection(dirsmo66608);
const smo66608 = new VF.Beam([smo58273,smo58274,smo58275,smo58276]);
const dirsmo66609 = smo58279.getStemDirection();
smo58279.setStemDirection(dirsmo66609);
smo58280.setStemDirection(dirsmo66609);
smo58281.setStemDirection(dirsmo66609);
smo58282.setStemDirection(dirsmo66609);
const smo66609 = new VF.Beam([smo58279,smo58280,smo58281,smo58282]);
const dirsmo66610 = smo58283.getStemDirection();
smo58283.setStemDirection(dirsmo66610);
smo58284.setStemDirection(dirsmo66610);
smo58285.setStemDirection(dirsmo66610);
smo58286.setStemDirection(dirsmo66610);
const smo66610 = new VF.Beam([smo58283,smo58284,smo58285,smo58286]);
const dirsmo66613 = smo63304.getStemDirection();
smo63304.setStemDirection(dirsmo66613);
smo63305.setStemDirection(dirsmo66613);
smo63306.setStemDirection(dirsmo66613);
smo63307.setStemDirection(dirsmo66613);
const smo66613 = new VF.Beam([smo63304,smo63305,smo63306,smo63307]);
const dirsmo66614 = smo63308.getStemDirection();
smo63308.setStemDirection(dirsmo66614);
smo63309.setStemDirection(dirsmo66614);
smo63310.setStemDirection(dirsmo66614);
smo63311.setStemDirection(dirsmo66614);
const smo66614 = new VF.Beam([smo63308,smo63309,smo63310,smo63311]);
const dirsmo66615 = smo63312.getStemDirection();
smo63312.setStemDirection(dirsmo66615);
smo63313.setStemDirection(dirsmo66615);
smo63314.setStemDirection(dirsmo66615);
smo63315.setStemDirection(dirsmo66615);
const smo66615 = new VF.Beam([smo63312,smo63313,smo63314,smo63315]);
const dirsmo66616 = smo63316.getStemDirection();
smo63316.setStemDirection(dirsmo66616);
smo63317.setStemDirection(dirsmo66616);
smo63318.setStemDirection(dirsmo66616);
const smo66616 = new VF.Beam([smo63316,smo63317,smo63318]);
const dirsmo66617 = smo63319.getStemDirection();
smo63319.setStemDirection(dirsmo66617);
smo63320.setStemDirection(dirsmo66617);
const smo66617 = new VF.Beam([smo63319,smo63320]);
 
// formatting measures in staff group smo55345
fmtsmo5830055.format([smo58300v0,smo58300v1,smo63335v0,smo63335v1], 504);
const stavesmo58300 = new VF.Stave(1256, 1010, 552);
stavesmo58300.setAttribute('id', 'stavesmo58300');
stavesmo58300.setBegBarType(VF.Barline.type.NONE);
stavesmo58300.setContext(context);
stavesmo58300.draw();
smo58300v0.draw(context, stavesmo58300);
smo58300v1.draw(context, stavesmo58300);
smo66606.setContext(context);
smo66606.draw();
smo66607.setContext(context);
smo66607.draw();
smo66608.setContext(context);
smo66608.draw();
smo66609.setContext(context);
smo66609.draw();
smo66610.setContext(context);
smo66610.draw();
const stavesmo63335 = new VF.Stave(1256, 1107, 552);
stavesmo63335.setAttribute('id', 'stavesmo63335');
stavesmo63335.setBegBarType(VF.Barline.type.NONE);
stavesmo63335.addClef('treble');
stavesmo63335.setContext(context);
stavesmo63335.draw();
smo63335v0.draw(context, stavesmo63335);
smo63335v1.draw(context, stavesmo63335);
smo66613.setContext(context);
smo66613.draw();
smo66614.setContext(context);
smo66614.draw();
smo66615.setContext(context);
smo66615.draw();
smo66616.setContext(context);
smo66616.draw();
smo66617.setContext(context);
smo66617.draw();
const rightsmo55345stavesmo583001 = new VF.StaveConnector(stavesmo58300, stavesmo63335).setType(0);
rightsmo55345stavesmo583001.setContext(context).draw();
const fmtsmo5833756 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo58337v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58337v0ar = [];
const smo58301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58301.setAttribute('id', 'smo58301');
smo58337v0ar.push(smo58301);
const smo58302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo58302.setAttribute('id', 'smo58302');
smo58337v0ar.push(smo58302);
const smo58303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58303.setAttribute('id', 'smo58303');
smo58337v0ar.push(smo58303);
const smo58304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58304.setAttribute('id', 'smo58304');
smo58337v0ar.push(smo58304);
const smo58305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58305.setAttribute('id', 'smo58305');
smo58337v0ar.push(smo58305);
const smo58306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58306.setAttribute('id', 'smo58306');
smo58337v0ar.push(smo58306);
const smo58307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58307.setAttribute('id', 'smo58307');
smo58337v0ar.push(smo58307);
const smo58308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo58308.setAttribute('id', 'smo58308');
smo58337v0ar.push(smo58308);
const smo58309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo58309.setAttribute('id', 'smo58309');
smo58337v0ar.push(smo58309);
const smo58310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo58310.setAttribute('id', 'smo58310');
smo58337v0ar.push(smo58310);
const smo58311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo58311.setAttribute('id', 'smo58311');
smo58337v0ar.push(smo58311);
const smo58312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo58312.setAttribute('id', 'smo58312');
smo58337v0ar.push(smo58312);
const smo58313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo58313.setAttribute('id', 'smo58313');
smo58337v0ar.push(smo58313);
const smo58314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo58314.setAttribute('id', 'smo58314');
smo58337v0ar.push(smo58314);
const smo58315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58315.setAttribute('id', 'smo58315');
smo58337v0ar.push(smo58315);
const smo58316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58316.setAttribute('id', 'smo58316');
smo58337v0ar.push(smo58316);
smo58337v0.addTickables(smo58337v0ar)
fmtsmo5833756.joinVoices([smo58337v0]);
const smo58337v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58337v1ar = [];
const smo58317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58317.setAttribute('id', 'smo58317');
smo58317.setStyle({ fillStyle: "#115511" });
smo58337v1ar.push(smo58317);
const smo58318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58318.setAttribute('id', 'smo58318');
smo58318.setStyle({ fillStyle: "#115511" });
smo58337v1ar.push(smo58318);
const smo58319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58319.setAttribute('id', 'smo58319');
smo58319.setStyle({ fillStyle: "#115511" });
smo58337v1ar.push(smo58319);
const smo58320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo58320.setAttribute('id', 'smo58320');
smo58320.setStyle({ fillStyle: "#115511" });
const smo583200acc = new VF.Accidental('b');
smo58320.addModifier(smo583200acc, 0);
smo58337v1ar.push(smo58320);
const smo58321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58321.setAttribute('id', 'smo58321');
smo58321.setStyle({ fillStyle: "#115511" });
smo58337v1ar.push(smo58321);
const smo58322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58322.setAttribute('id', 'smo58322');
smo58322.setStyle({ fillStyle: "#115511" });
smo58337v1ar.push(smo58322);
const smo58323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58323.setAttribute('id', 'smo58323');
smo58323.setStyle({ fillStyle: "#115511" });
smo58337v1ar.push(smo58323);
smo58337v1.addTickables(smo58337v1ar)
fmtsmo5833756.joinVoices([smo58337v1]);
const fmtsmo6336456 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo63364v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63364v0ar = [];
const smo63336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63336.setAttribute('id', 'smo63336');
smo63336.addModifier(new VF.Dot(), 0);
smo63364v0ar.push(smo63336);
const smo63337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo63337.setAttribute('id', 'smo63337');
smo63364v0ar.push(smo63337);
const smo63338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63338.setAttribute('id', 'smo63338');
smo63364v0ar.push(smo63338);
const smo63339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo63339.setAttribute('id', 'smo63339');
smo63364v0ar.push(smo63339);
const smo63340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63340.setAttribute('id', 'smo63340');
smo63364v0ar.push(smo63340);
const smo63341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63341.setAttribute('id', 'smo63341');
smo63364v0ar.push(smo63341);
const smo63342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo63342.setAttribute('id', 'smo63342');
smo63364v0ar.push(smo63342);
const smo63343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo63343.setAttribute('id', 'smo63343');
smo63364v0ar.push(smo63343);
const smo63344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63344.setAttribute('id', 'smo63344');
smo63364v0ar.push(smo63344);
const smo63345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo63345.setAttribute('id', 'smo63345');
smo63364v0ar.push(smo63345);
const smo63346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo63346.setAttribute('id', 'smo63346');
smo63364v0ar.push(smo63346);
smo63364v0.addTickables(smo63364v0ar)
fmtsmo6336456.joinVoices([smo63364v0]);
const smo63364v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63364v1ar = [];
const smo63347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63347.setAttribute('id', 'smo63347');
smo63347.setStyle({ fillStyle: "#115511" });
smo63364v1ar.push(smo63347);
const smo63348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63348.setAttribute('id', 'smo63348');
smo63348.setStyle({ fillStyle: "#115511" });
smo63364v1ar.push(smo63348);
const smo63349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo63349.setAttribute('id', 'smo63349');
smo63349.setStyle({ fillStyle: "#115511" });
smo63364v1ar.push(smo63349);
const smo63350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63350.setAttribute('id', 'smo63350');
smo63350.setStyle({ fillStyle: "#115511" });
smo63364v1ar.push(smo63350);
smo63364v1.addTickables(smo63364v1ar)
fmtsmo6336456.joinVoices([smo63364v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66635 = smo58301.getStemDirection();
smo58301.setStemDirection(dirsmo66635);
smo58302.setStemDirection(dirsmo66635);
smo58303.setStemDirection(dirsmo66635);
smo58304.setStemDirection(dirsmo66635);
const smo66635 = new VF.Beam([smo58301,smo58302,smo58303,smo58304]);
const dirsmo66636 = smo58305.getStemDirection();
smo58305.setStemDirection(dirsmo66636);
smo58306.setStemDirection(dirsmo66636);
smo58307.setStemDirection(dirsmo66636);
smo58308.setStemDirection(dirsmo66636);
const smo66636 = new VF.Beam([smo58305,smo58306,smo58307,smo58308]);
const dirsmo66637 = smo58309.getStemDirection();
smo58309.setStemDirection(dirsmo66637);
smo58310.setStemDirection(dirsmo66637);
smo58311.setStemDirection(dirsmo66637);
smo58312.setStemDirection(dirsmo66637);
const smo66637 = new VF.Beam([smo58309,smo58310,smo58311,smo58312]);
const dirsmo66638 = smo58313.getStemDirection();
smo58313.setStemDirection(dirsmo66638);
smo58314.setStemDirection(dirsmo66638);
smo58315.setStemDirection(dirsmo66638);
smo58316.setStemDirection(dirsmo66638);
const smo66638 = new VF.Beam([smo58313,smo58314,smo58315,smo58316]);
const dirsmo66639 = smo58318.getStemDirection();
smo58318.setStemDirection(dirsmo66639);
smo58319.setStemDirection(dirsmo66639);
smo58320.setStemDirection(dirsmo66639);
const smo66639 = new VF.Beam([smo58318,smo58319,smo58320]);
const dirsmo66640 = smo58322.getStemDirection();
smo58322.setStemDirection(dirsmo66640);
smo58323.setStemDirection(dirsmo66640);
const smo66640 = new VF.Beam([smo58322,smo58323]);
const dirsmo66643 = smo63336.getStemDirection();
smo63336.setStemDirection(dirsmo66643);
smo63337.setStemDirection(dirsmo66643);
smo63338.setStemDirection(dirsmo66643);
const smo66643 = new VF.Beam([smo63336,smo63337,smo63338]);
const dirsmo66644 = smo63339.getStemDirection();
smo63339.setStemDirection(dirsmo66644);
smo63340.setStemDirection(dirsmo66644);
const smo66644 = new VF.Beam([smo63339,smo63340]);
const dirsmo66645 = smo63341.getStemDirection();
smo63341.setStemDirection(dirsmo66645);
smo63342.setStemDirection(dirsmo66645);
const smo66645 = new VF.Beam([smo63341,smo63342]);
const dirsmo66646 = smo63343.getStemDirection();
smo63343.setStemDirection(dirsmo66646);
smo63344.setStemDirection(dirsmo66646);
smo63345.setStemDirection(dirsmo66646);
smo63346.setStemDirection(dirsmo66646);
const smo66646 = new VF.Beam([smo63343,smo63344,smo63345,smo63346]);
const dirsmo66647 = smo63349.getStemDirection();
smo63349.setStemDirection(dirsmo66647);
smo63350.setStemDirection(dirsmo66647);
const smo66647 = new VF.Beam([smo63349,smo63350]);
 
// formatting measures in staff group smo55345
fmtsmo5833756.format([smo58337v0,smo58337v1,smo63364v0,smo63364v1], 435);
const stavesmo58337 = new VF.Stave(90, 1331, 493);
stavesmo58337.setAttribute('id', 'stavesmo58337');
stavesmo58337.setBegBarType(1);
stavesmo58337.addClef('treble');
stavesmo58337.setContext(context);
stavesmo58337.draw();
smo58337v0.draw(context, stavesmo58337);
smo58337v1.draw(context, stavesmo58337);
smo66635.setContext(context);
smo66635.draw();
smo66636.setContext(context);
smo66636.draw();
smo66637.setContext(context);
smo66637.draw();
smo66638.setContext(context);
smo66638.draw();
smo66639.setContext(context);
smo66639.draw();
smo66640.setContext(context);
smo66640.draw();
const stavesmo63364 = new VF.Stave(90, 1450, 493);
stavesmo63364.setAttribute('id', 'stavesmo63364');
stavesmo63364.setBegBarType(1);
stavesmo63364.addClef('treble');
stavesmo63364.setContext(context);
stavesmo63364.draw();
smo63364v0.draw(context, stavesmo63364);
smo63364v1.draw(context, stavesmo63364);
smo66643.setContext(context);
smo66643.draw();
smo66644.setContext(context);
smo66644.draw();
smo66645.setContext(context);
smo66645.draw();
smo66646.setContext(context);
smo66646.draw();
smo66647.setContext(context);
smo66647.draw();
const leftsmo55345stavesmo583371 = new VF.StaveConnector(stavesmo58337, stavesmo63364).setType(3);
leftsmo55345stavesmo583371.setContext(context).draw();
const fmtsmo5836257 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo58362v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58362v0ar = [];
const smo58338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58338.setAttribute('id', 'smo58338');
smo58362v0ar.push(smo58338);
const smo58339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58339.setAttribute('id', 'smo58339');
smo58362v0ar.push(smo58339);
const smo58340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58340.setAttribute('id', 'smo58340');
smo58362v0ar.push(smo58340);
const smo58341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58341.setAttribute('id', 'smo58341');
smo58362v0ar.push(smo58341);
const smo58342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58342.setAttribute('id', 'smo58342');
smo58362v0ar.push(smo58342);
const smo58343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58343.setAttribute('id', 'smo58343');
smo58362v0ar.push(smo58343);
smo58362v0.addTickables(smo58362v0ar)
fmtsmo5836257.joinVoices([smo58362v0]);
const smo58362v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58362v1ar = [];
const smo58344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58344.setAttribute('id', 'smo58344');
smo58344.setStyle({ fillStyle: "#115511" });
smo58344.addModifier(new VF.Dot(), 0);
smo58362v1ar.push(smo58344);
const smo58345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58345.setAttribute('id', 'smo58345');
smo58345.setStyle({ fillStyle: "#115511" });
smo58362v1ar.push(smo58345);
const smo58346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo58346.setAttribute('id', 'smo58346');
smo58346.setStyle({ fillStyle: "#115511" });
smo58362v1ar.push(smo58346);
const smo58347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58347.setAttribute('id', 'smo58347');
smo58347.setStyle({ fillStyle: "#115511" });
smo58362v1ar.push(smo58347);
const smo58348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58348.setAttribute('id', 'smo58348');
smo58348.setStyle({ fillStyle: "#115511" });
smo58362v1ar.push(smo58348);
smo58362v1.addTickables(smo58362v1ar)
fmtsmo5836257.joinVoices([smo58362v1]);
const fmtsmo6339857 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo63398v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63398v0ar = [];
const smo63365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo63365.setAttribute('id', 'smo63365');
smo63398v0ar.push(smo63365);
const smo63366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo63366.setAttribute('id', 'smo63366');
smo63398v0ar.push(smo63366);
const smo63367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo63367.setAttribute('id', 'smo63367');
smo63398v0ar.push(smo63367);
const smo63368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo63368.setAttribute('id', 'smo63368');
smo63398v0ar.push(smo63368);
const smo63369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63369.setAttribute('id', 'smo63369');
smo63398v0ar.push(smo63369);
const smo63370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63370.setAttribute('id', 'smo63370');
smo63398v0ar.push(smo63370);
smo63398v0.addTickables(smo63398v0ar)
fmtsmo6339857.joinVoices([smo63398v0]);
const smo63398v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63398v1ar = [];
const smo63371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63371.setAttribute('id', 'smo63371');
smo63371.setStyle({ fillStyle: "#115511" });
smo63398v1ar.push(smo63371);
const smo63372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63372.setAttribute('id', 'smo63372');
smo63372.setStyle({ fillStyle: "#115511" });
smo63398v1ar.push(smo63372);
const smo63373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63373.setAttribute('id', 'smo63373');
smo63373.setStyle({ fillStyle: "#115511" });
smo63398v1ar.push(smo63373);
const smo63374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63374.setAttribute('id', 'smo63374');
smo63374.setStyle({ fillStyle: "#115511" });
smo63398v1ar.push(smo63374);
const smo63375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63375.setAttribute('id', 'smo63375');
smo63375.setStyle({ fillStyle: "#115511" });
smo63398v1ar.push(smo63375);
const smo63376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63376.setAttribute('id', 'smo63376');
smo63376.setStyle({ fillStyle: "#115511" });
smo63398v1ar.push(smo63376);
const smo63377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63377.setAttribute('id', 'smo63377');
smo63377.setStyle({ fillStyle: "#115511" });
smo63398v1ar.push(smo63377);
const smo63378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo63378.setAttribute('id', 'smo63378');
smo63378.setStyle({ fillStyle: "#115511" });
smo63398v1ar.push(smo63378);
const smo63379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63379.setAttribute('id', 'smo63379');
smo63379.setStyle({ fillStyle: "#115511" });
smo63398v1ar.push(smo63379);
const smo63380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63380.setAttribute('id', 'smo63380');
smo63380.setStyle({ fillStyle: "#115511" });
smo63398v1ar.push(smo63380);
const smo63381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63381.setAttribute('id', 'smo63381');
smo63381.setStyle({ fillStyle: "#115511" });
smo63398v1ar.push(smo63381);
const smo63382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63382.setAttribute('id', 'smo63382');
smo63382.setStyle({ fillStyle: "#115511" });
smo63398v1ar.push(smo63382);
const smo63383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63383.setAttribute('id', 'smo63383');
smo63383.setStyle({ fillStyle: "#115511" });
smo63398v1ar.push(smo63383);
const smo63384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo63384.setAttribute('id', 'smo63384');
smo63384.setStyle({ fillStyle: "#115511" });
smo63398v1ar.push(smo63384);
smo63398v1.addTickables(smo63398v1ar)
fmtsmo6339857.joinVoices([smo63398v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66650 = smo58339.getStemDirection();
smo58339.setStemDirection(dirsmo66650);
smo58340.setStemDirection(dirsmo66650);
const smo66650 = new VF.Beam([smo58339,smo58340]);
const dirsmo66651 = smo58346.getStemDirection();
smo58346.setStemDirection(dirsmo66651);
smo58347.setStemDirection(dirsmo66651);
const smo66651 = new VF.Beam([smo58346,smo58347]);
const dirsmo66654 = smo63366.getStemDirection();
smo63366.setStemDirection(dirsmo66654);
smo63367.setStemDirection(dirsmo66654);
const smo66654 = new VF.Beam([smo63366,smo63367]);
const dirsmo66655 = smo63368.getStemDirection();
smo63368.setStemDirection(dirsmo66655);
smo63369.setStemDirection(dirsmo66655);
const smo66655 = new VF.Beam([smo63368,smo63369]);
const dirsmo66656 = smo63371.getStemDirection();
smo63371.setStemDirection(dirsmo66656);
smo63372.setStemDirection(dirsmo66656);
smo63373.setStemDirection(dirsmo66656);
smo63374.setStemDirection(dirsmo66656);
const smo66656 = new VF.Beam([smo63371,smo63372,smo63373,smo63374]);
const dirsmo66657 = smo63375.getStemDirection();
smo63375.setStemDirection(dirsmo66657);
smo63376.setStemDirection(dirsmo66657);
smo63377.setStemDirection(dirsmo66657);
smo63378.setStemDirection(dirsmo66657);
const smo66657 = new VF.Beam([smo63375,smo63376,smo63377,smo63378]);
const dirsmo66658 = smo63379.getStemDirection();
smo63379.setStemDirection(dirsmo66658);
smo63380.setStemDirection(dirsmo66658);
smo63381.setStemDirection(dirsmo66658);
smo63382.setStemDirection(dirsmo66658);
const smo66658 = new VF.Beam([smo63379,smo63380,smo63381,smo63382]);
const dirsmo66659 = smo63383.getStemDirection();
smo63383.setStemDirection(dirsmo66659);
smo63384.setStemDirection(dirsmo66659);
const smo66659 = new VF.Beam([smo63383,smo63384]);
 
// formatting measures in staff group smo55345
fmtsmo5836257.format([smo58362v0,smo58362v1,smo63398v0,smo63398v1], 346);
const stavesmo58362 = new VF.Stave(583, 1331, 360);
stavesmo58362.setAttribute('id', 'stavesmo58362');
stavesmo58362.setBegBarType(VF.Barline.type.NONE);
stavesmo58362.setContext(context);
stavesmo58362.draw();
smo58362v0.draw(context, stavesmo58362);
smo58362v1.draw(context, stavesmo58362);
smo66650.setContext(context);
smo66650.draw();
smo66651.setContext(context);
smo66651.draw();
const stavesmo63398 = new VF.Stave(583, 1450, 360);
stavesmo63398.setAttribute('id', 'stavesmo63398');
stavesmo63398.setBegBarType(VF.Barline.type.NONE);
stavesmo63398.setContext(context);
stavesmo63398.draw();
smo63398v0.draw(context, stavesmo63398);
smo63398v1.draw(context, stavesmo63398);
smo66654.setContext(context);
smo66654.draw();
smo66655.setContext(context);
smo66655.draw();
smo66656.setContext(context);
smo66656.draw();
smo66657.setContext(context);
smo66657.draw();
smo66658.setContext(context);
smo66658.draw();
smo66659.setContext(context);
smo66659.draw();
const fmtsmo5838958 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo58389v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58389v0ar = [];
const smo58363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58363.setAttribute('id', 'smo58363');
smo58389v0ar.push(smo58363);
const smo58364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58364.setAttribute('id', 'smo58364');
smo58389v0ar.push(smo58364);
const smo58365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo58365.setAttribute('id', 'smo58365');
const smo583650acc = new VF.Accidental('b');
smo58365.addModifier(smo583650acc, 0);
smo58389v0ar.push(smo58365);
const smo58366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58366.setAttribute('id', 'smo58366');
smo58389v0ar.push(smo58366);
const smo58367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58367.setAttribute('id', 'smo58367');
smo58389v0ar.push(smo58367);
const smo58368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58368.setAttribute('id', 'smo58368');
smo58389v0ar.push(smo58368);
smo58389v0.addTickables(smo58389v0ar)
fmtsmo5838958.joinVoices([smo58389v0]);
const smo58389v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58389v1ar = [];
const smo58369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58369.setAttribute('id', 'smo58369');
smo58369.setStyle({ fillStyle: "#115511" });
smo58389v1ar.push(smo58369);
const smo58370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58370.setAttribute('id', 'smo58370');
smo58370.setStyle({ fillStyle: "#115511" });
smo58389v1ar.push(smo58370);
const smo58371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58371.setAttribute('id', 'smo58371');
smo58371.setStyle({ fillStyle: "#115511" });
smo58389v1ar.push(smo58371);
const smo58372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58372.setAttribute('id', 'smo58372');
smo58372.setStyle({ fillStyle: "#115511" });
smo58389v1ar.push(smo58372);
const smo58373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58373.setAttribute('id', 'smo58373');
smo58373.setStyle({ fillStyle: "#115511" });
smo58389v1ar.push(smo58373);
const smo58374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58374.setAttribute('id', 'smo58374');
smo58374.setStyle({ fillStyle: "#115511" });
smo58389v1ar.push(smo58374);
const smo58375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58375.setAttribute('id', 'smo58375');
smo58375.setStyle({ fillStyle: "#115511" });
smo58389v1ar.push(smo58375);
smo58389v1.addTickables(smo58389v1ar)
fmtsmo5838958.joinVoices([smo58389v1]);
const fmtsmo6342258 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo63422v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63422v0ar = [];
const smo63399 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63399.setAttribute('id', 'smo63399');
smo63422v0ar.push(smo63399);
const smo63400 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63400.setAttribute('id', 'smo63400');
smo63422v0ar.push(smo63400);
const smo63401 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63401.setAttribute('id', 'smo63401');
smo63422v0ar.push(smo63401);
const smo63402 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63402.setAttribute('id', 'smo63402');
smo63422v0ar.push(smo63402);
const smo63403 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63403.setAttribute('id', 'smo63403');
smo63403.addModifier(new VF.Dot(), 0);
smo63422v0ar.push(smo63403);
const smo63404 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63404.setAttribute('id', 'smo63404');
smo63422v0ar.push(smo63404);
const smo63405 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63405.setAttribute('id', 'smo63405');
smo63422v0ar.push(smo63405);
const smo63406 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63406.setAttribute('id', 'smo63406');
smo63422v0ar.push(smo63406);
const smo63407 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63407.setAttribute('id', 'smo63407');
smo63422v0ar.push(smo63407);
smo63422v0.addTickables(smo63422v0ar)
fmtsmo6342258.joinVoices([smo63422v0]);
const smo63422v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63422v1ar = [];
const smo63408 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo63408.setAttribute('id', 'smo63408');
smo63408.setStyle({ fillStyle: "#115511" });
smo63422v1ar.push(smo63408);
smo63422v1.addTickables(smo63422v1ar)
fmtsmo6342258.joinVoices([smo63422v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66662 = smo58364.getStemDirection();
smo58364.setStemDirection(dirsmo66662);
smo58365.setStemDirection(dirsmo66662);
const smo66662 = new VF.Beam([smo58364,smo58365]);
const dirsmo66663 = smo58372.getStemDirection();
smo58372.setStemDirection(dirsmo66663);
smo58373.setStemDirection(dirsmo66663);
const smo66663 = new VF.Beam([smo58372,smo58373]);
const dirsmo66664 = smo58374.getStemDirection();
smo58374.setStemDirection(dirsmo66664);
smo58375.setStemDirection(dirsmo66664);
const smo66664 = new VF.Beam([smo58374,smo58375]);
const dirsmo66667 = smo63399.getStemDirection();
smo63399.setStemDirection(dirsmo66667);
smo63400.setStemDirection(dirsmo66667);
smo63401.setStemDirection(dirsmo66667);
smo63402.setStemDirection(dirsmo66667);
const smo66667 = new VF.Beam([smo63399,smo63400,smo63401,smo63402]);
const dirsmo66668 = smo63403.getStemDirection();
smo63403.setStemDirection(dirsmo66668);
smo63404.setStemDirection(dirsmo66668);
smo63405.setStemDirection(dirsmo66668);
const smo66668 = new VF.Beam([smo63403,smo63404,smo63405]);
const dirsmo66669 = smo63406.getStemDirection();
smo63406.setStemDirection(dirsmo66669);
smo63407.setStemDirection(dirsmo66669);
const smo66669 = new VF.Beam([smo63406,smo63407]);
 
// formatting measures in staff group smo55345
fmtsmo5838958.format([smo58389v0,smo58389v1,smo63422v0,smo63422v1], 309);
const stavesmo58389 = new VF.Stave(943, 1331, 357);
stavesmo58389.setAttribute('id', 'stavesmo58389');
stavesmo58389.setBegBarType(VF.Barline.type.NONE);
stavesmo58389.setContext(context);
stavesmo58389.draw();
smo58389v0.draw(context, stavesmo58389);
smo58389v1.draw(context, stavesmo58389);
smo66662.setContext(context);
smo66662.draw();
smo66663.setContext(context);
smo66663.draw();
smo66664.setContext(context);
smo66664.draw();
const stavesmo63422 = new VF.Stave(943, 1450, 357);
stavesmo63422.setAttribute('id', 'stavesmo63422');
stavesmo63422.setBegBarType(VF.Barline.type.NONE);
stavesmo63422.addClef('bass');
stavesmo63422.setContext(context);
stavesmo63422.draw();
smo63422v0.draw(context, stavesmo63422);
smo63422v1.draw(context, stavesmo63422);
smo66667.setContext(context);
smo66667.draw();
smo66668.setContext(context);
smo66668.draw();
smo66669.setContext(context);
smo66669.draw();
const fmtsmo5842559 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo58425v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58425v0ar = [];
const smo58390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58390.setAttribute('id', 'smo58390');
smo58425v0ar.push(smo58390);
const smo58391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo58391.setAttribute('id', 'smo58391');
smo58425v0ar.push(smo58391);
const smo58392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo58392.setAttribute('id', 'smo58392');
smo58425v0ar.push(smo58392);
const smo58393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo58393.setAttribute('id', 'smo58393');
smo58425v0ar.push(smo58393);
const smo58394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo58394.setAttribute('id', 'smo58394');
smo58425v0ar.push(smo58394);
const smo58395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo58395.setAttribute('id', 'smo58395');
smo58425v0ar.push(smo58395);
const smo58396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo58396.setAttribute('id', 'smo58396');
smo58425v0ar.push(smo58396);
const smo58397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo58397.setAttribute('id', 'smo58397');
smo58425v0ar.push(smo58397);
const smo58398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo58398.setAttribute('id', 'smo58398');
smo58425v0ar.push(smo58398);
const smo58399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo58399.setAttribute('id', 'smo58399');
smo58425v0ar.push(smo58399);
const smo58400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58400.setAttribute('id', 'smo58400');
smo58425v0ar.push(smo58400);
smo58425v0.addTickables(smo58425v0ar)
fmtsmo5842559.joinVoices([smo58425v0]);
const smo58425v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58425v1ar = [];
const smo58401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo58401.setAttribute('id', 'smo58401');
smo58401.setStyle({ fillStyle: "#115511" });
const smo584010acc = new VF.Accidental('b');
smo58401.addModifier(smo584010acc, 0);
smo58401.addModifier(new VF.Dot(), 0);
smo58425v1ar.push(smo58401);
const smo58402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58402.setAttribute('id', 'smo58402');
smo58402.setStyle({ fillStyle: "#115511" });
smo58425v1ar.push(smo58402);
const smo58403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo58403.setAttribute('id', 'smo58403');
smo58403.setStyle({ fillStyle: "#115511" });
smo58425v1ar.push(smo58403);
const smo58404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58404.setAttribute('id', 'smo58404');
smo58404.setStyle({ fillStyle: "#115511" });
smo58425v1ar.push(smo58404);
const smo58405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58405.setAttribute('id', 'smo58405');
smo58405.setStyle({ fillStyle: "#115511" });
smo58425v1ar.push(smo58405);
const smo58406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58406.setAttribute('id', 'smo58406');
smo58406.setStyle({ fillStyle: "#115511" });
smo58425v1ar.push(smo58406);
const smo58407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58407.setAttribute('id', 'smo58407');
smo58407.setStyle({ fillStyle: "#115511" });
smo58425v1ar.push(smo58407);
const smo58408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58408.setAttribute('id', 'smo58408');
smo58408.setStyle({ fillStyle: "#115511" });
smo58425v1ar.push(smo58408);
const smo58409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58409.setAttribute('id', 'smo58409');
smo58409.setStyle({ fillStyle: "#115511" });
smo58425v1ar.push(smo58409);
const smo58410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58410.setAttribute('id', 'smo58410');
smo58410.setStyle({ fillStyle: "#115511" });
smo58425v1ar.push(smo58410);
const smo58411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo58411.setAttribute('id', 'smo58411');
smo58411.setStyle({ fillStyle: "#115511" });
smo58425v1ar.push(smo58411);
smo58425v1.addTickables(smo58425v1ar)
fmtsmo5842559.joinVoices([smo58425v1]);
const fmtsmo6345159 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo63451v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63451v0ar = [];
const smo63423 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63423.setAttribute('id', 'smo63423');
smo63451v0ar.push(smo63423);
const smo63424 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63424.setAttribute('id', 'smo63424');
smo63451v0ar.push(smo63424);
const smo63425 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63425.setAttribute('id', 'smo63425');
smo63451v0ar.push(smo63425);
const smo63426 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63426.setAttribute('id', 'smo63426');
smo63451v0ar.push(smo63426);
const smo63427 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63427.setAttribute('id', 'smo63427');
smo63451v0ar.push(smo63427);
const smo63428 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63428.setAttribute('id', 'smo63428');
smo63451v0ar.push(smo63428);
const smo63429 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63429.setAttribute('id', 'smo63429');
smo63451v0ar.push(smo63429);
const smo63430 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63430.setAttribute('id', 'smo63430');
smo63451v0ar.push(smo63430);
const smo63431 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63431.setAttribute('id', 'smo63431');
smo63451v0ar.push(smo63431);
const smo63432 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63432.setAttribute('id', 'smo63432');
smo63451v0ar.push(smo63432);
const smo63433 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63433.setAttribute('id', 'smo63433');
smo63451v0ar.push(smo63433);
const smo63434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63434.setAttribute('id', 'smo63434');
smo63451v0ar.push(smo63434);
const smo63435 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo63435.setAttribute('id', 'smo63435');
const smo634350acc = new VF.Accidental('b');
smo63435.addModifier(smo634350acc, 0);
smo63451v0ar.push(smo63435);
const smo63436 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63436.setAttribute('id', 'smo63436');
smo63451v0ar.push(smo63436);
smo63451v0.addTickables(smo63451v0ar)
fmtsmo6345159.joinVoices([smo63451v0]);
const smo63451v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63451v1ar = [];
const smo63437 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo63437.setAttribute('id', 'smo63437');
smo63437.setStyle({ fillStyle: "#115511" });
smo63451v1ar.push(smo63437);
smo63451v1.addTickables(smo63451v1ar)
fmtsmo6345159.joinVoices([smo63451v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66672 = smo58390.getStemDirection();
smo58390.setStemDirection(dirsmo66672);
smo58391.setStemDirection(dirsmo66672);
const smo66672 = new VF.Beam([smo58390,smo58391]);
const dirsmo66673 = smo58393.getStemDirection();
smo58393.setStemDirection(dirsmo66673);
smo58394.setStemDirection(dirsmo66673);
smo58395.setStemDirection(dirsmo66673);
smo58396.setStemDirection(dirsmo66673);
const smo66673 = new VF.Beam([smo58393,smo58394,smo58395,smo58396]);
const dirsmo66674 = smo58397.getStemDirection();
smo58397.setStemDirection(dirsmo66674);
smo58398.setStemDirection(dirsmo66674);
smo58399.setStemDirection(dirsmo66674);
smo58400.setStemDirection(dirsmo66674);
const smo66674 = new VF.Beam([smo58397,smo58398,smo58399,smo58400]);
const dirsmo66675 = smo58401.getStemDirection();
smo58401.setStemDirection(dirsmo66675);
smo58402.setStemDirection(dirsmo66675);
smo58403.setStemDirection(dirsmo66675);
const smo66675 = new VF.Beam([smo58401,smo58402,smo58403]);
const dirsmo66676 = smo58404.getStemDirection();
smo58404.setStemDirection(dirsmo66676);
smo58405.setStemDirection(dirsmo66676);
const smo66676 = new VF.Beam([smo58404,smo58405]);
const dirsmo66677 = smo58406.getStemDirection();
smo58406.setStemDirection(dirsmo66677);
smo58407.setStemDirection(dirsmo66677);
const smo66677 = new VF.Beam([smo58406,smo58407]);
const dirsmo66678 = smo58408.getStemDirection();
smo58408.setStemDirection(dirsmo66678);
smo58409.setStemDirection(dirsmo66678);
smo58410.setStemDirection(dirsmo66678);
smo58411.setStemDirection(dirsmo66678);
const smo66678 = new VF.Beam([smo58408,smo58409,smo58410,smo58411]);
const dirsmo66681 = smo63423.getStemDirection();
smo63423.setStemDirection(dirsmo66681);
smo63424.setStemDirection(dirsmo66681);
const smo66681 = new VF.Beam([smo63423,smo63424]);
const dirsmo66682 = smo63425.getStemDirection();
smo63425.setStemDirection(dirsmo66682);
smo63426.setStemDirection(dirsmo66682);
smo63427.setStemDirection(dirsmo66682);
smo63428.setStemDirection(dirsmo66682);
const smo66682 = new VF.Beam([smo63425,smo63426,smo63427,smo63428]);
const dirsmo66683 = smo63429.getStemDirection();
smo63429.setStemDirection(dirsmo66683);
smo63430.setStemDirection(dirsmo66683);
smo63431.setStemDirection(dirsmo66683);
smo63432.setStemDirection(dirsmo66683);
const smo66683 = new VF.Beam([smo63429,smo63430,smo63431,smo63432]);
const dirsmo66684 = smo63433.getStemDirection();
smo63433.setStemDirection(dirsmo66684);
smo63434.setStemDirection(dirsmo66684);
smo63435.setStemDirection(dirsmo66684);
smo63436.setStemDirection(dirsmo66684);
const smo66684 = new VF.Beam([smo63433,smo63434,smo63435,smo63436]);
 
// formatting measures in staff group smo55345
fmtsmo5842559.format([smo58425v0,smo58425v1,smo63451v0,smo63451v1], 495);
const stavesmo58425 = new VF.Stave(1300, 1331, 509);
stavesmo58425.setAttribute('id', 'stavesmo58425');
stavesmo58425.setBegBarType(VF.Barline.type.NONE);
stavesmo58425.setContext(context);
stavesmo58425.draw();
smo58425v0.draw(context, stavesmo58425);
smo58425v1.draw(context, stavesmo58425);
smo66672.setContext(context);
smo66672.draw();
smo66673.setContext(context);
smo66673.draw();
smo66674.setContext(context);
smo66674.draw();
smo66675.setContext(context);
smo66675.draw();
smo66676.setContext(context);
smo66676.draw();
smo66677.setContext(context);
smo66677.draw();
smo66678.setContext(context);
smo66678.draw();
const stavesmo63451 = new VF.Stave(1300, 1450, 509);
stavesmo63451.setAttribute('id', 'stavesmo63451');
stavesmo63451.setBegBarType(VF.Barline.type.NONE);
stavesmo63451.setContext(context);
stavesmo63451.draw();
smo63451v0.draw(context, stavesmo63451);
smo63451v1.draw(context, stavesmo63451);
smo66681.setContext(context);
smo66681.draw();
smo66682.setContext(context);
smo66682.draw();
smo66683.setContext(context);
smo66683.draw();
smo66684.setContext(context);
smo66684.draw();
const rightsmo55345stavesmo584251 = new VF.StaveConnector(stavesmo58425, stavesmo63451).setType(0);
rightsmo55345stavesmo584251.setContext(context).draw();
const fmtsmo5845960 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo58459v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58459v0ar = [];
const smo58426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58426.setAttribute('id', 'smo58426');
smo58459v0ar.push(smo58426);
const smo58427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo58427.setAttribute('id', 'smo58427');
smo58459v0ar.push(smo58427);
const smo58428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58428.setAttribute('id', 'smo58428');
smo58459v0ar.push(smo58428);
const smo58429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58429.setAttribute('id', 'smo58429');
smo58459v0ar.push(smo58429);
const smo58430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58430.setAttribute('id', 'smo58430');
const smo584300acc = new VF.Accidental('n');
smo58430.addModifier(smo584300acc, 0);
smo58459v0ar.push(smo58430);
const smo58431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58431.setAttribute('id', 'smo58431');
smo58459v0ar.push(smo58431);
const smo58432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58432.setAttribute('id', 'smo58432');
smo58459v0ar.push(smo58432);
const smo58433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo58433.setAttribute('id', 'smo58433');
smo58459v0ar.push(smo58433);
const smo58434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo58434.setAttribute('id', 'smo58434');
smo58459v0ar.push(smo58434);
smo58459v0.addTickables(smo58459v0ar)
fmtsmo5845960.joinVoices([smo58459v0]);
const smo58459v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58459v1ar = [];
const smo58435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58435.setAttribute('id', 'smo58435');
smo58435.setStyle({ fillStyle: "#115511" });
smo58459v1ar.push(smo58435);
const smo58436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo58436.setAttribute('id', 'smo58436');
smo58436.setStyle({ fillStyle: "#115511" });
const smo584360acc = new VF.Accidental('b');
smo58436.addModifier(smo584360acc, 0);
smo58459v1ar.push(smo58436);
const smo58437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58437.setAttribute('id', 'smo58437');
smo58437.setStyle({ fillStyle: "#115511" });
smo58459v1ar.push(smo58437);
const smo58438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58438.setAttribute('id', 'smo58438');
smo58438.setStyle({ fillStyle: "#115511" });
smo58459v1ar.push(smo58438);
const smo58439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58439.setAttribute('id', 'smo58439');
smo58439.setStyle({ fillStyle: "#115511" });
smo58459v1ar.push(smo58439);
const smo58440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58440.setAttribute('id', 'smo58440');
smo58440.setStyle({ fillStyle: "#115511" });
smo58459v1ar.push(smo58440);
const smo58441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58441.setAttribute('id', 'smo58441');
smo58441.setStyle({ fillStyle: "#115511" });
smo58459v1ar.push(smo58441);
const smo58442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58442.setAttribute('id', 'smo58442');
smo58442.setStyle({ fillStyle: "#115511" });
smo58459v1ar.push(smo58442);
const smo58443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58443.setAttribute('id', 'smo58443');
smo58443.setStyle({ fillStyle: "#115511" });
smo58459v1ar.push(smo58443);
const smo58444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58444.setAttribute('id', 'smo58444');
smo58444.setStyle({ fillStyle: "#115511" });
smo58444.addModifier(new VF.Dot(), 0);
smo58459v1ar.push(smo58444);
const smo58445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58445.setAttribute('id', 'smo58445');
smo58445.setStyle({ fillStyle: "#115511" });
smo58459v1ar.push(smo58445);
smo58459v1.addTickables(smo58459v1ar)
fmtsmo5845960.joinVoices([smo58459v1]);
const fmtsmo6347560 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo63475v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63475v0ar = [];
const smo63452 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63452.setAttribute('id', 'smo63452');
smo63475v0ar.push(smo63452);
const smo63453 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63453.setAttribute('id', 'smo63453');
smo63475v0ar.push(smo63453);
const smo63454 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63454.setAttribute('id', 'smo63454');
smo63475v0ar.push(smo63454);
const smo63455 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63455.setAttribute('id', 'smo63455');
smo63475v0ar.push(smo63455);
const smo63456 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63456.setAttribute('id', 'smo63456');
smo63475v0ar.push(smo63456);
const smo63457 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo63457.setAttribute('id', 'smo63457');
smo63475v0ar.push(smo63457);
const smo63458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63458.setAttribute('id', 'smo63458');
smo63475v0ar.push(smo63458);
const smo63459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63459.setAttribute('id', 'smo63459');
smo63475v0ar.push(smo63459);
const smo63460 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo63460.setAttribute('id', 'smo63460');
smo63475v0ar.push(smo63460);
smo63475v0.addTickables(smo63475v0ar)
fmtsmo6347560.joinVoices([smo63475v0]);
const smo63475v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63475v1ar = [];
const smo63461 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo63461.setAttribute('id', 'smo63461');
smo63461.setStyle({ fillStyle: "#115511" });
smo63475v1ar.push(smo63461);
smo63475v1.addTickables(smo63475v1ar)
fmtsmo6347560.joinVoices([smo63475v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66698 = smo58428.getStemDirection();
smo58428.setStemDirection(dirsmo66698);
smo58429.setStemDirection(dirsmo66698);
smo58430.setStemDirection(dirsmo66698);
smo58431.setStemDirection(dirsmo66698);
const smo66698 = new VF.Beam([smo58428,smo58429,smo58430,smo58431]);
const dirsmo66699 = smo58432.getStemDirection();
smo58432.setStemDirection(dirsmo66699);
smo58433.setStemDirection(dirsmo66699);
smo58434.setStemDirection(dirsmo66699);
const smo66699 = new VF.Beam([smo58432,smo58433,smo58434]);
const dirsmo66700 = smo58435.getStemDirection();
smo58435.setStemDirection(dirsmo66700);
smo58436.setStemDirection(dirsmo66700);
smo58437.setStemDirection(dirsmo66700);
smo58438.setStemDirection(dirsmo66700);
const smo66700 = new VF.Beam([smo58435,smo58436,smo58437,smo58438]);
const dirsmo66701 = smo58439.getStemDirection();
smo58439.setStemDirection(dirsmo66701);
smo58440.setStemDirection(dirsmo66701);
smo58441.setStemDirection(dirsmo66701);
smo58442.setStemDirection(dirsmo66701);
const smo66701 = new VF.Beam([smo58439,smo58440,smo58441,smo58442]);
const dirsmo66702 = smo58444.getStemDirection();
smo58444.setStemDirection(dirsmo66702);
smo58445.setStemDirection(dirsmo66702);
const smo66702 = new VF.Beam([smo58444,smo58445]);
const dirsmo66705 = smo63452.getStemDirection();
smo63452.setStemDirection(dirsmo66705);
smo63453.setStemDirection(dirsmo66705);
smo63454.setStemDirection(dirsmo66705);
smo63455.setStemDirection(dirsmo66705);
const smo66705 = new VF.Beam([smo63452,smo63453,smo63454,smo63455]);
const dirsmo66706 = smo63456.getStemDirection();
smo63456.setStemDirection(dirsmo66706);
smo63457.setStemDirection(dirsmo66706);
smo63458.setStemDirection(dirsmo66706);
smo63459.setStemDirection(dirsmo66706);
const smo66706 = new VF.Beam([smo63456,smo63457,smo63458,smo63459]);
 
// formatting measures in staff group smo55345
fmtsmo5845960.format([smo58459v0,smo58459v1,smo63475v0,smo63475v1], 521);
const stavesmo58459 = new VF.Stave(90, 1679, 579);
stavesmo58459.setAttribute('id', 'stavesmo58459');
stavesmo58459.setBegBarType(1);
stavesmo58459.addClef('treble');
stavesmo58459.setContext(context);
stavesmo58459.draw();
smo58459v0.draw(context, stavesmo58459);
smo58459v1.draw(context, stavesmo58459);
smo66698.setContext(context);
smo66698.draw();
smo66699.setContext(context);
smo66699.draw();
smo66700.setContext(context);
smo66700.draw();
smo66701.setContext(context);
smo66701.draw();
smo66702.setContext(context);
smo66702.draw();
const stavesmo63475 = new VF.Stave(90, 1808, 579);
stavesmo63475.setAttribute('id', 'stavesmo63475');
stavesmo63475.setBegBarType(1);
stavesmo63475.addClef('bass');
stavesmo63475.setContext(context);
stavesmo63475.draw();
smo63475v0.draw(context, stavesmo63475);
smo63475v1.draw(context, stavesmo63475);
smo66705.setContext(context);
smo66705.draw();
smo66706.setContext(context);
smo66706.draw();
const leftsmo55345stavesmo584591 = new VF.StaveConnector(stavesmo58459, stavesmo63475).setType(3);
leftsmo55345stavesmo584591.setContext(context).draw();
const fmtsmo5848861 = new VF.Formatter();
//
// voices and notes for stave 0 61
const smo58488v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58488v0ar = [];
const smo58460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo58460.setAttribute('id', 'smo58460');
smo58488v0ar.push(smo58460);
const smo58461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58461.setAttribute('id', 'smo58461');
smo58488v0ar.push(smo58461);
const smo58462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58462.setAttribute('id', 'smo58462');
smo58488v0ar.push(smo58462);
const smo58463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo58463.setAttribute('id', 'smo58463');
smo58488v0ar.push(smo58463);
const smo58464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo58464.setAttribute('id', 'smo58464');
smo58488v0ar.push(smo58464);
const smo58465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo58465.setAttribute('id', 'smo58465');
smo58488v0ar.push(smo58465);
const smo58466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo58466.setAttribute('id', 'smo58466');
smo58466.addModifier(new VF.Dot(), 0);
smo58488v0ar.push(smo58466);
const smo58467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/5/n"]}'))
smo58467.setAttribute('id', 'smo58467');
smo58488v0ar.push(smo58467);
const smo58468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/6/n"]}'))
smo58468.setAttribute('id', 'smo58468');
const  smo68598 = new VF.Articulation('a@a').setPosition(3);
smo58468.addModifier(smo68598, 0);
smo58488v0ar.push(smo58468);
smo58488v0.addTickables(smo58488v0ar)
fmtsmo5848861.joinVoices([smo58488v0]);
const smo58488v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58488v1ar = [];
const smo58470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo58470.setAttribute('id', 'smo58470');
smo58470.setStyle({ fillStyle: "#115511" });
smo58488v1ar.push(smo58470);
const smo58471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo58471.setAttribute('id', 'smo58471');
smo58471.setStyle({ fillStyle: "#115511" });
smo58488v1ar.push(smo58471);
const smo58472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo58472.setAttribute('id', 'smo58472');
smo58472.setStyle({ fillStyle: "#115511" });
smo58488v1ar.push(smo58472);
const smo58473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58473.setAttribute('id', 'smo58473');
smo58473.setStyle({ fillStyle: "#115511" });
smo58488v1ar.push(smo58473);
const smo58474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n","gn/5/n"]}'))
smo58474.setAttribute('id', 'smo58474');
smo58474.setStyle({ fillStyle: "#115511" });
smo58488v1ar.push(smo58474);
smo58488v1.addTickables(smo58488v1ar)
fmtsmo5848861.joinVoices([smo58488v1]);
const fmtsmo6349161 = new VF.Formatter();
//
// voices and notes for stave 1 61
const smo63491v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63491v0ar = [];
const smo63476 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo63476.setAttribute('id', 'smo63476');
smo63491v0ar.push(smo63476);
smo63491v0.addTickables(smo63491v0ar)
fmtsmo6349161.joinVoices([smo63491v0]);
const smo63491v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63491v1ar = [];
const smo63477 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo63477.setAttribute('id', 'smo63477');
smo63477.setStyle({ fillStyle: "#115511" });
smo63491v1ar.push(smo63477);
smo63491v1.addTickables(smo63491v1ar)
fmtsmo6349161.joinVoices([smo63491v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66709 = smo58460.getStemDirection();
smo58460.setStemDirection(dirsmo66709);
smo58461.setStemDirection(dirsmo66709);
smo58462.setStemDirection(dirsmo66709);
smo58463.setStemDirection(dirsmo66709);
smo58464.setStemDirection(dirsmo66709);
smo58465.setStemDirection(dirsmo66709);
const smo66709 = new VF.Beam([smo58460,smo58461,smo58462,smo58463,smo58464,smo58465]);
const dirsmo66710 = smo58466.getStemDirection();
smo58466.setStemDirection(dirsmo66710);
smo58467.setStemDirection(dirsmo66710);
const smo66710 = new VF.Beam([smo58466,smo58467]);
const dirsmo66711 = smo58472.getStemDirection();
smo58472.setStemDirection(dirsmo66711);
smo58473.setStemDirection(dirsmo66711);
const smo66711 = new VF.Beam([smo58472,smo58473]);
 
// formatting measures in staff group smo55345
fmtsmo5848861.format([smo58488v0,smo58488v1,smo63491v0,smo63491v1], 329);
const stavesmo58488 = new VF.Stave(669, 1679, 351);
stavesmo58488.setAttribute('id', 'stavesmo58488');
stavesmo58488.setBegBarType(VF.Barline.type.NONE);
stavesmo58488.setEndBarType(3);
stavesmo58488.setContext(context);
stavesmo58488.draw();
smo58488v0.draw(context, stavesmo58488);
smo58488v1.draw(context, stavesmo58488);
smo66709.setContext(context);
smo66709.draw();
smo66710.setContext(context);
smo66710.draw();
smo66711.setContext(context);
smo66711.draw();
const stavesmo63491 = new VF.Stave(669, 1808, 351);
stavesmo63491.setAttribute('id', 'stavesmo63491');
stavesmo63491.setBegBarType(VF.Barline.type.NONE);
stavesmo63491.setEndBarType(3);
stavesmo63491.setContext(context);
stavesmo63491.draw();
smo63491v0.draw(context, stavesmo63491);
smo63491v1.draw(context, stavesmo63491);
const fmtsmo5851862 = new VF.Formatter();
//
// voices and notes for stave 0 62
const smo58518v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58518v0ar = [];
const smo58489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58489.setAttribute('id', 'smo58489');
smo58518v0ar.push(smo58489);
const smo58490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58490.setAttribute('id', 'smo58490');
smo58518v0ar.push(smo58490);
const smo58491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58491.setAttribute('id', 'smo58491');
smo58518v0ar.push(smo58491);
const smo58492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58492.setAttribute('id', 'smo58492');
smo58518v0ar.push(smo58492);
const smo58493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo58493.setAttribute('id', 'smo58493');
smo58518v0ar.push(smo58493);
const smo58494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58494.setAttribute('id', 'smo58494');
smo58518v0ar.push(smo58494);
const smo58495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58495.setAttribute('id', 'smo58495');
smo58518v0ar.push(smo58495);
const smo58496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58496.setAttribute('id', 'smo58496');
smo58518v0ar.push(smo58496);
const smo58497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58497.setAttribute('id', 'smo58497');
smo58518v0ar.push(smo58497);
const smo58498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58498.setAttribute('id', 'smo58498');
smo58518v0ar.push(smo58498);
const smo58499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58499.setAttribute('id', 'smo58499');
smo58518v0ar.push(smo58499);
const smo58500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58500.setAttribute('id', 'smo58500');
smo58518v0ar.push(smo58500);
const smo58501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo58501.setAttribute('id', 'smo58501');
smo58518v0ar.push(smo58501);
const smo58502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58502.setAttribute('id', 'smo58502');
smo58518v0ar.push(smo58502);
const smo58503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58503.setAttribute('id', 'smo58503');
smo58518v0ar.push(smo58503);
const smo58504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58504.setAttribute('id', 'smo58504');
smo58518v0ar.push(smo58504);
smo58518v0.addTickables(smo58518v0ar)
fmtsmo5851862.joinVoices([smo58518v0]);
const fmtsmo6352162 = new VF.Formatter();
//
// voices and notes for stave 1 62
const smo63521v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63521v0ar = [];
const smo63492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63492.setAttribute('id', 'smo63492');
smo63521v0ar.push(smo63492);
const smo63493 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63493.setAttribute('id', 'smo63493');
smo63521v0ar.push(smo63493);
const smo63494 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63494.setAttribute('id', 'smo63494');
smo63521v0ar.push(smo63494);
const smo63495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63495.setAttribute('id', 'smo63495');
smo63521v0ar.push(smo63495);
const smo63496 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo63496.setAttribute('id', 'smo63496');
smo63521v0ar.push(smo63496);
const smo63497 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63497.setAttribute('id', 'smo63497');
smo63521v0ar.push(smo63497);
const smo63498 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63498.setAttribute('id', 'smo63498');
smo63521v0ar.push(smo63498);
const smo63499 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63499.setAttribute('id', 'smo63499');
smo63521v0ar.push(smo63499);
const smo63500 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63500.setAttribute('id', 'smo63500');
smo63521v0ar.push(smo63500);
const smo63501 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63501.setAttribute('id', 'smo63501');
smo63521v0ar.push(smo63501);
const smo63502 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63502.setAttribute('id', 'smo63502');
smo63521v0ar.push(smo63502);
const smo63503 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63503.setAttribute('id', 'smo63503');
smo63521v0ar.push(smo63503);
const smo63504 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo63504.setAttribute('id', 'smo63504');
smo63521v0ar.push(smo63504);
const smo63505 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63505.setAttribute('id', 'smo63505');
smo63521v0ar.push(smo63505);
const smo63506 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63506.setAttribute('id', 'smo63506');
smo63521v0ar.push(smo63506);
const smo63507 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63507.setAttribute('id', 'smo63507');
smo63521v0ar.push(smo63507);
smo63521v0.addTickables(smo63521v0ar)
fmtsmo6352162.joinVoices([smo63521v0]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66714 = smo58489.getStemDirection();
smo58489.setStemDirection(dirsmo66714);
smo58490.setStemDirection(dirsmo66714);
smo58491.setStemDirection(dirsmo66714);
smo58492.setStemDirection(dirsmo66714);
const smo66714 = new VF.Beam([smo58489,smo58490,smo58491,smo58492]);
const dirsmo66715 = smo58493.getStemDirection();
smo58493.setStemDirection(dirsmo66715);
smo58494.setStemDirection(dirsmo66715);
smo58495.setStemDirection(dirsmo66715);
smo58496.setStemDirection(dirsmo66715);
const smo66715 = new VF.Beam([smo58493,smo58494,smo58495,smo58496]);
const dirsmo66716 = smo58497.getStemDirection();
smo58497.setStemDirection(dirsmo66716);
smo58498.setStemDirection(dirsmo66716);
smo58499.setStemDirection(dirsmo66716);
smo58500.setStemDirection(dirsmo66716);
const smo66716 = new VF.Beam([smo58497,smo58498,smo58499,smo58500]);
const dirsmo66717 = smo58501.getStemDirection();
smo58501.setStemDirection(dirsmo66717);
smo58502.setStemDirection(dirsmo66717);
smo58503.setStemDirection(dirsmo66717);
smo58504.setStemDirection(dirsmo66717);
const smo66717 = new VF.Beam([smo58501,smo58502,smo58503,smo58504]);
const dirsmo66720 = smo63492.getStemDirection();
smo63492.setStemDirection(dirsmo66720);
smo63493.setStemDirection(dirsmo66720);
smo63494.setStemDirection(dirsmo66720);
smo63495.setStemDirection(dirsmo66720);
const smo66720 = new VF.Beam([smo63492,smo63493,smo63494,smo63495]);
const dirsmo66721 = smo63496.getStemDirection();
smo63496.setStemDirection(dirsmo66721);
smo63497.setStemDirection(dirsmo66721);
smo63498.setStemDirection(dirsmo66721);
smo63499.setStemDirection(dirsmo66721);
const smo66721 = new VF.Beam([smo63496,smo63497,smo63498,smo63499]);
const dirsmo66722 = smo63500.getStemDirection();
smo63500.setStemDirection(dirsmo66722);
smo63501.setStemDirection(dirsmo66722);
smo63502.setStemDirection(dirsmo66722);
smo63503.setStemDirection(dirsmo66722);
const smo66722 = new VF.Beam([smo63500,smo63501,smo63502,smo63503]);
const dirsmo66723 = smo63504.getStemDirection();
smo63504.setStemDirection(dirsmo66723);
smo63505.setStemDirection(dirsmo66723);
smo63506.setStemDirection(dirsmo66723);
smo63507.setStemDirection(dirsmo66723);
const smo66723 = new VF.Beam([smo63504,smo63505,smo63506,smo63507]);
 
// formatting measures in staff group smo55345
fmtsmo5851862.format([smo58518v0,smo63521v0], 335);
const stavesmo58518 = new VF.Stave(1020, 1679, 394);
stavesmo58518.setAttribute('id', 'stavesmo58518');
stavesmo58518.setBegBarType(VF.Barline.type.NONE);
stavesmo58518.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":144,"name":"Allegro Vivace"}'), -1 * 6);
const keysmo58518 = new VF.KeySignature('Eb');
keysmo58518.cancelKey('C');
keysmo58518.addToStave(stavesmo58518);
stavesmo58518.setContext(context);
stavesmo58518.draw();
smo58518v0.draw(context, stavesmo58518);
smo66714.setContext(context);
smo66714.draw();
smo66715.setContext(context);
smo66715.draw();
smo66716.setContext(context);
smo66716.draw();
smo66717.setContext(context);
smo66717.draw();
const stavesmo63521 = new VF.Stave(1020, 1808, 394);
stavesmo63521.setAttribute('id', 'stavesmo63521');
stavesmo63521.setBegBarType(VF.Barline.type.NONE);
const keysmo63521 = new VF.KeySignature('Eb');
keysmo63521.cancelKey('C');
keysmo63521.addToStave(stavesmo63521);
stavesmo63521.setContext(context);
stavesmo63521.draw();
smo63521v0.draw(context, stavesmo63521);
smo66720.setContext(context);
smo66720.draw();
smo66721.setContext(context);
smo66721.draw();
smo66722.setContext(context);
smo66722.draw();
smo66723.setContext(context);
smo66723.draw();
const fmtsmo5854863 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo58548v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58548v0ar = [];
const smo58519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo58519.setAttribute('id', 'smo58519');
smo58548v0ar.push(smo58519);
const smo58520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58520.setAttribute('id', 'smo58520');
smo58548v0ar.push(smo58520);
const smo58521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58521.setAttribute('id', 'smo58521');
const smo585210acc = new VF.Accidental('n');
smo58521.addModifier(smo585210acc, 0);
smo58548v0ar.push(smo58521);
const smo58522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58522.setAttribute('id', 'smo58522');
smo58548v0ar.push(smo58522);
const smo58523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo58523.setAttribute('id', 'smo58523');
smo58548v0ar.push(smo58523);
const smo58524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58524.setAttribute('id', 'smo58524');
smo58548v0ar.push(smo58524);
const smo58525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58525.setAttribute('id', 'smo58525');
smo58548v0ar.push(smo58525);
const smo58526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58526.setAttribute('id', 'smo58526');
smo58548v0ar.push(smo58526);
const smo58527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo58527.setAttribute('id', 'smo58527');
smo58548v0ar.push(smo58527);
const smo58528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58528.setAttribute('id', 'smo58528');
smo58548v0ar.push(smo58528);
const smo58529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58529.setAttribute('id', 'smo58529');
smo58548v0ar.push(smo58529);
const smo58530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58530.setAttribute('id', 'smo58530');
smo58548v0ar.push(smo58530);
const smo58531 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo58531.setAttribute('id', 'smo58531');
smo58548v0ar.push(smo58531);
const smo58532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58532.setAttribute('id', 'smo58532');
smo58548v0ar.push(smo58532);
const smo58533 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58533.setAttribute('id', 'smo58533');
smo58548v0ar.push(smo58533);
const smo58534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58534.setAttribute('id', 'smo58534');
smo58548v0ar.push(smo58534);
smo58548v0.addTickables(smo58548v0ar)
fmtsmo5854863.joinVoices([smo58548v0]);
const fmtsmo6355163 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo63551v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63551v0ar = [];
const smo63522 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63522.setAttribute('id', 'smo63522');
smo63551v0ar.push(smo63522);
const smo63523 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63523.setAttribute('id', 'smo63523');
smo63551v0ar.push(smo63523);
const smo63524 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63524.setAttribute('id', 'smo63524');
smo63551v0ar.push(smo63524);
const smo63525 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63525.setAttribute('id', 'smo63525');
smo63551v0ar.push(smo63525);
const smo63526 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63526.setAttribute('id', 'smo63526');
smo63551v0ar.push(smo63526);
const smo63527 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63527.setAttribute('id', 'smo63527');
smo63551v0ar.push(smo63527);
const smo63528 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63528.setAttribute('id', 'smo63528');
smo63551v0ar.push(smo63528);
const smo63529 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63529.setAttribute('id', 'smo63529');
smo63551v0ar.push(smo63529);
const smo63530 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63530.setAttribute('id', 'smo63530');
smo63551v0ar.push(smo63530);
const smo63531 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63531.setAttribute('id', 'smo63531');
smo63551v0ar.push(smo63531);
const smo63532 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63532.setAttribute('id', 'smo63532');
smo63551v0ar.push(smo63532);
const smo63533 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63533.setAttribute('id', 'smo63533');
smo63551v0ar.push(smo63533);
const smo63534 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63534.setAttribute('id', 'smo63534');
smo63551v0ar.push(smo63534);
const smo63535 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63535.setAttribute('id', 'smo63535');
smo63551v0ar.push(smo63535);
const smo63536 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63536.setAttribute('id', 'smo63536');
smo63551v0ar.push(smo63536);
const smo63537 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63537.setAttribute('id', 'smo63537');
smo63551v0ar.push(smo63537);
smo63551v0.addTickables(smo63551v0ar)
fmtsmo6355163.joinVoices([smo63551v0]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66726 = smo58519.getStemDirection();
smo58519.setStemDirection(dirsmo66726);
smo58520.setStemDirection(dirsmo66726);
smo58521.setStemDirection(dirsmo66726);
smo58522.setStemDirection(dirsmo66726);
const smo66726 = new VF.Beam([smo58519,smo58520,smo58521,smo58522]);
const dirsmo66727 = smo58523.getStemDirection();
smo58523.setStemDirection(dirsmo66727);
smo58524.setStemDirection(dirsmo66727);
smo58525.setStemDirection(dirsmo66727);
smo58526.setStemDirection(dirsmo66727);
const smo66727 = new VF.Beam([smo58523,smo58524,smo58525,smo58526]);
const dirsmo66728 = smo58527.getStemDirection();
smo58527.setStemDirection(dirsmo66728);
smo58528.setStemDirection(dirsmo66728);
smo58529.setStemDirection(dirsmo66728);
smo58530.setStemDirection(dirsmo66728);
const smo66728 = new VF.Beam([smo58527,smo58528,smo58529,smo58530]);
const dirsmo66729 = smo58531.getStemDirection();
smo58531.setStemDirection(dirsmo66729);
smo58532.setStemDirection(dirsmo66729);
smo58533.setStemDirection(dirsmo66729);
smo58534.setStemDirection(dirsmo66729);
const smo66729 = new VF.Beam([smo58531,smo58532,smo58533,smo58534]);
const dirsmo66732 = smo63522.getStemDirection();
smo63522.setStemDirection(dirsmo66732);
smo63523.setStemDirection(dirsmo66732);
smo63524.setStemDirection(dirsmo66732);
smo63525.setStemDirection(dirsmo66732);
const smo66732 = new VF.Beam([smo63522,smo63523,smo63524,smo63525]);
const dirsmo66733 = smo63526.getStemDirection();
smo63526.setStemDirection(dirsmo66733);
smo63527.setStemDirection(dirsmo66733);
smo63528.setStemDirection(dirsmo66733);
smo63529.setStemDirection(dirsmo66733);
const smo66733 = new VF.Beam([smo63526,smo63527,smo63528,smo63529]);
const dirsmo66734 = smo63530.getStemDirection();
smo63530.setStemDirection(dirsmo66734);
smo63531.setStemDirection(dirsmo66734);
smo63532.setStemDirection(dirsmo66734);
smo63533.setStemDirection(dirsmo66734);
const smo66734 = new VF.Beam([smo63530,smo63531,smo63532,smo63533]);
const dirsmo66735 = smo63534.getStemDirection();
smo63534.setStemDirection(dirsmo66735);
smo63535.setStemDirection(dirsmo66735);
smo63536.setStemDirection(dirsmo66735);
smo63537.setStemDirection(dirsmo66735);
const smo66735 = new VF.Beam([smo63534,smo63535,smo63536,smo63537]);
 
// formatting measures in staff group smo55345
fmtsmo5854863.format([smo58548v0,smo63551v0], 379);
const stavesmo58548 = new VF.Stave(1414, 1679, 393);
stavesmo58548.setAttribute('id', 'stavesmo58548');
stavesmo58548.setBegBarType(VF.Barline.type.NONE);
stavesmo58548.setContext(context);
stavesmo58548.draw();
smo58548v0.draw(context, stavesmo58548);
smo66726.setContext(context);
smo66726.draw();
smo66727.setContext(context);
smo66727.draw();
smo66728.setContext(context);
smo66728.draw();
smo66729.setContext(context);
smo66729.draw();
const stavesmo63551 = new VF.Stave(1414, 1808, 393);
stavesmo63551.setAttribute('id', 'stavesmo63551');
stavesmo63551.setBegBarType(VF.Barline.type.NONE);
stavesmo63551.setContext(context);
stavesmo63551.draw();
smo63551v0.draw(context, stavesmo63551);
smo66732.setContext(context);
smo66732.draw();
smo66733.setContext(context);
smo66733.draw();
smo66734.setContext(context);
smo66734.draw();
smo66735.setContext(context);
smo66735.draw();
const rightsmo55345stavesmo585481 = new VF.StaveConnector(stavesmo58548, stavesmo63551).setType(0);
rightsmo55345stavesmo585481.setContext(context).draw();
const fmtsmo5857864 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo58578v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58578v0ar = [];
const smo58549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58549.setAttribute('id', 'smo58549');
const smo585490acc = new VF.Accidental('n');
smo58549.addModifier(smo585490acc, 0);
smo58578v0ar.push(smo58549);
const smo58550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58550.setAttribute('id', 'smo58550');
smo58578v0ar.push(smo58550);
const smo58551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58551.setAttribute('id', 'smo58551');
smo58578v0ar.push(smo58551);
const smo58552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58552.setAttribute('id', 'smo58552');
smo58578v0ar.push(smo58552);
const smo58553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58553.setAttribute('id', 'smo58553');
smo58578v0ar.push(smo58553);
const smo58554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58554.setAttribute('id', 'smo58554');
smo58578v0ar.push(smo58554);
const smo58555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58555.setAttribute('id', 'smo58555');
smo58578v0ar.push(smo58555);
const smo58556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58556.setAttribute('id', 'smo58556');
smo58578v0ar.push(smo58556);
const smo58557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo58557.setAttribute('id', 'smo58557');
smo58578v0ar.push(smo58557);
const smo58558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58558.setAttribute('id', 'smo58558');
smo58578v0ar.push(smo58558);
const smo58559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58559.setAttribute('id', 'smo58559');
smo58578v0ar.push(smo58559);
const smo58560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58560.setAttribute('id', 'smo58560');
smo58578v0ar.push(smo58560);
const smo58561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58561.setAttribute('id', 'smo58561');
smo58578v0ar.push(smo58561);
const smo58562 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58562.setAttribute('id', 'smo58562');
smo58578v0ar.push(smo58562);
const smo58563 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58563.setAttribute('id', 'smo58563');
smo58578v0ar.push(smo58563);
const smo58564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58564.setAttribute('id', 'smo58564');
smo58578v0ar.push(smo58564);
smo58578v0.addTickables(smo58578v0ar)
fmtsmo5857864.joinVoices([smo58578v0]);
const fmtsmo6358164 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo63581v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63581v0ar = [];
const smo63552 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63552.setAttribute('id', 'smo63552');
smo63581v0ar.push(smo63552);
const smo63553 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63553.setAttribute('id', 'smo63553');
smo63581v0ar.push(smo63553);
const smo63554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63554.setAttribute('id', 'smo63554');
smo63581v0ar.push(smo63554);
const smo63555 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63555.setAttribute('id', 'smo63555');
smo63581v0ar.push(smo63555);
const smo63556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63556.setAttribute('id', 'smo63556');
smo63581v0ar.push(smo63556);
const smo63557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63557.setAttribute('id', 'smo63557');
smo63581v0ar.push(smo63557);
const smo63558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63558.setAttribute('id', 'smo63558');
smo63581v0ar.push(smo63558);
const smo63559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63559.setAttribute('id', 'smo63559');
smo63581v0ar.push(smo63559);
const smo63560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63560.setAttribute('id', 'smo63560');
smo63581v0ar.push(smo63560);
const smo63561 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63561.setAttribute('id', 'smo63561');
smo63581v0ar.push(smo63561);
const smo63562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63562.setAttribute('id', 'smo63562');
smo63581v0ar.push(smo63562);
const smo63563 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63563.setAttribute('id', 'smo63563');
smo63581v0ar.push(smo63563);
const smo63564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63564.setAttribute('id', 'smo63564');
smo63581v0ar.push(smo63564);
const smo63565 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63565.setAttribute('id', 'smo63565');
smo63581v0ar.push(smo63565);
const smo63566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63566.setAttribute('id', 'smo63566');
smo63581v0ar.push(smo63566);
const smo63567 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63567.setAttribute('id', 'smo63567');
smo63581v0ar.push(smo63567);
smo63581v0.addTickables(smo63581v0ar)
fmtsmo6358164.joinVoices([smo63581v0]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66750 = smo58549.getStemDirection();
smo58549.setStemDirection(dirsmo66750);
smo58550.setStemDirection(dirsmo66750);
smo58551.setStemDirection(dirsmo66750);
smo58552.setStemDirection(dirsmo66750);
const smo66750 = new VF.Beam([smo58549,smo58550,smo58551,smo58552]);
const dirsmo66751 = smo58553.getStemDirection();
smo58553.setStemDirection(dirsmo66751);
smo58554.setStemDirection(dirsmo66751);
smo58555.setStemDirection(dirsmo66751);
smo58556.setStemDirection(dirsmo66751);
const smo66751 = new VF.Beam([smo58553,smo58554,smo58555,smo58556]);
const dirsmo66752 = smo58557.getStemDirection();
smo58557.setStemDirection(dirsmo66752);
smo58558.setStemDirection(dirsmo66752);
smo58559.setStemDirection(dirsmo66752);
smo58560.setStemDirection(dirsmo66752);
const smo66752 = new VF.Beam([smo58557,smo58558,smo58559,smo58560]);
const dirsmo66753 = smo58561.getStemDirection();
smo58561.setStemDirection(dirsmo66753);
smo58562.setStemDirection(dirsmo66753);
smo58563.setStemDirection(dirsmo66753);
smo58564.setStemDirection(dirsmo66753);
const smo66753 = new VF.Beam([smo58561,smo58562,smo58563,smo58564]);
const dirsmo66756 = smo63552.getStemDirection();
smo63552.setStemDirection(dirsmo66756);
smo63553.setStemDirection(dirsmo66756);
smo63554.setStemDirection(dirsmo66756);
smo63555.setStemDirection(dirsmo66756);
const smo66756 = new VF.Beam([smo63552,smo63553,smo63554,smo63555]);
const dirsmo66757 = smo63556.getStemDirection();
smo63556.setStemDirection(dirsmo66757);
smo63557.setStemDirection(dirsmo66757);
smo63558.setStemDirection(dirsmo66757);
smo63559.setStemDirection(dirsmo66757);
const smo66757 = new VF.Beam([smo63556,smo63557,smo63558,smo63559]);
const dirsmo66758 = smo63560.getStemDirection();
smo63560.setStemDirection(dirsmo66758);
smo63561.setStemDirection(dirsmo66758);
smo63562.setStemDirection(dirsmo66758);
smo63563.setStemDirection(dirsmo66758);
const smo66758 = new VF.Beam([smo63560,smo63561,smo63562,smo63563]);
const dirsmo66759 = smo63564.getStemDirection();
smo63564.setStemDirection(dirsmo66759);
smo63565.setStemDirection(dirsmo66759);
smo63566.setStemDirection(dirsmo66759);
smo63567.setStemDirection(dirsmo66759);
const smo66759 = new VF.Beam([smo63564,smo63565,smo63566,smo63567]);
 
// formatting measures in staff group smo55345
fmtsmo5857864.format([smo58578v0,smo63581v0], 370);
const stavesmo58578 = new VF.Stave(90, 1962, 467);
stavesmo58578.setAttribute('id', 'stavesmo58578');
stavesmo58578.setBegBarType(1);
stavesmo58578.addClef('treble');
const keysmo58578 = new VF.KeySignature('Eb');
keysmo58578.addToStave(stavesmo58578);
stavesmo58578.setContext(context);
stavesmo58578.draw();
smo58578v0.draw(context, stavesmo58578);
smo66750.setContext(context);
smo66750.draw();
smo66751.setContext(context);
smo66751.draw();
smo66752.setContext(context);
smo66752.draw();
smo66753.setContext(context);
smo66753.draw();
const stavesmo63581 = new VF.Stave(90, 2051, 467);
stavesmo63581.setAttribute('id', 'stavesmo63581');
stavesmo63581.setBegBarType(1);
stavesmo63581.addClef('bass');
const keysmo63581 = new VF.KeySignature('Eb');
keysmo63581.addToStave(stavesmo63581);
stavesmo63581.setContext(context);
stavesmo63581.draw();
smo63581v0.draw(context, stavesmo63581);
smo66756.setContext(context);
smo66756.draw();
smo66757.setContext(context);
smo66757.draw();
smo66758.setContext(context);
smo66758.draw();
smo66759.setContext(context);
smo66759.draw();
const leftsmo55345stavesmo585781 = new VF.StaveConnector(stavesmo58578, stavesmo63581).setType(3);
leftsmo55345stavesmo585781.setContext(context).draw();
const fmtsmo5860865 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo58608v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58608v0ar = [];
const smo58579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58579.setAttribute('id', 'smo58579');
smo58608v0ar.push(smo58579);
const smo58580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58580.setAttribute('id', 'smo58580');
smo58608v0ar.push(smo58580);
const smo58581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58581.setAttribute('id', 'smo58581');
smo58608v0ar.push(smo58581);
const smo58582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58582.setAttribute('id', 'smo58582');
smo58608v0ar.push(smo58582);
const smo58583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58583.setAttribute('id', 'smo58583');
smo58608v0ar.push(smo58583);
const smo58584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58584.setAttribute('id', 'smo58584');
smo58608v0ar.push(smo58584);
const smo58585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58585.setAttribute('id', 'smo58585');
smo58608v0ar.push(smo58585);
const smo58586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58586.setAttribute('id', 'smo58586');
smo58608v0ar.push(smo58586);
const smo58587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58587.setAttribute('id', 'smo58587');
smo58608v0ar.push(smo58587);
const smo58588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58588.setAttribute('id', 'smo58588');
smo58608v0ar.push(smo58588);
const smo58589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58589.setAttribute('id', 'smo58589');
smo58608v0ar.push(smo58589);
const smo58590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58590.setAttribute('id', 'smo58590');
smo58608v0ar.push(smo58590);
const smo58591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58591.setAttribute('id', 'smo58591');
smo58608v0ar.push(smo58591);
const smo58592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58592.setAttribute('id', 'smo58592');
smo58608v0ar.push(smo58592);
const smo58593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58593.setAttribute('id', 'smo58593');
smo58608v0ar.push(smo58593);
const smo58594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58594.setAttribute('id', 'smo58594');
smo58608v0ar.push(smo58594);
smo58608v0.addTickables(smo58608v0ar)
fmtsmo5860865.joinVoices([smo58608v0]);
const fmtsmo6361165 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo63611v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63611v0ar = [];
const smo63582 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63582.setAttribute('id', 'smo63582');
smo63611v0ar.push(smo63582);
const smo63583 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo63583.setAttribute('id', 'smo63583');
smo63611v0ar.push(smo63583);
const smo63584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63584.setAttribute('id', 'smo63584');
smo63611v0ar.push(smo63584);
const smo63585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo63585.setAttribute('id', 'smo63585');
smo63611v0ar.push(smo63585);
const smo63586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63586.setAttribute('id', 'smo63586');
smo63611v0ar.push(smo63586);
const smo63587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo63587.setAttribute('id', 'smo63587');
smo63611v0ar.push(smo63587);
const smo63588 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63588.setAttribute('id', 'smo63588');
smo63611v0ar.push(smo63588);
const smo63589 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo63589.setAttribute('id', 'smo63589');
smo63611v0ar.push(smo63589);
const smo63590 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63590.setAttribute('id', 'smo63590');
smo63611v0ar.push(smo63590);
const smo63591 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo63591.setAttribute('id', 'smo63591');
smo63611v0ar.push(smo63591);
const smo63592 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63592.setAttribute('id', 'smo63592');
smo63611v0ar.push(smo63592);
const smo63593 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo63593.setAttribute('id', 'smo63593');
smo63611v0ar.push(smo63593);
const smo63594 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63594.setAttribute('id', 'smo63594');
smo63611v0ar.push(smo63594);
const smo63595 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo63595.setAttribute('id', 'smo63595');
smo63611v0ar.push(smo63595);
const smo63596 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63596.setAttribute('id', 'smo63596');
smo63611v0ar.push(smo63596);
const smo63597 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo63597.setAttribute('id', 'smo63597');
smo63611v0ar.push(smo63597);
smo63611v0.addTickables(smo63611v0ar)
fmtsmo6361165.joinVoices([smo63611v0]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66762 = smo58579.getStemDirection();
smo58579.setStemDirection(dirsmo66762);
smo58580.setStemDirection(dirsmo66762);
smo58581.setStemDirection(dirsmo66762);
smo58582.setStemDirection(dirsmo66762);
const smo66762 = new VF.Beam([smo58579,smo58580,smo58581,smo58582]);
const dirsmo66763 = smo58583.getStemDirection();
smo58583.setStemDirection(dirsmo66763);
smo58584.setStemDirection(dirsmo66763);
smo58585.setStemDirection(dirsmo66763);
smo58586.setStemDirection(dirsmo66763);
const smo66763 = new VF.Beam([smo58583,smo58584,smo58585,smo58586]);
const dirsmo66764 = smo58587.getStemDirection();
smo58587.setStemDirection(dirsmo66764);
smo58588.setStemDirection(dirsmo66764);
smo58589.setStemDirection(dirsmo66764);
smo58590.setStemDirection(dirsmo66764);
const smo66764 = new VF.Beam([smo58587,smo58588,smo58589,smo58590]);
const dirsmo66765 = smo58591.getStemDirection();
smo58591.setStemDirection(dirsmo66765);
smo58592.setStemDirection(dirsmo66765);
smo58593.setStemDirection(dirsmo66765);
smo58594.setStemDirection(dirsmo66765);
const smo66765 = new VF.Beam([smo58591,smo58592,smo58593,smo58594]);
const dirsmo66768 = smo63582.getStemDirection();
smo63582.setStemDirection(dirsmo66768);
smo63583.setStemDirection(dirsmo66768);
smo63584.setStemDirection(dirsmo66768);
smo63585.setStemDirection(dirsmo66768);
const smo66768 = new VF.Beam([smo63582,smo63583,smo63584,smo63585]);
const dirsmo66769 = smo63586.getStemDirection();
smo63586.setStemDirection(dirsmo66769);
smo63587.setStemDirection(dirsmo66769);
smo63588.setStemDirection(dirsmo66769);
smo63589.setStemDirection(dirsmo66769);
const smo66769 = new VF.Beam([smo63586,smo63587,smo63588,smo63589]);
const dirsmo66770 = smo63590.getStemDirection();
smo63590.setStemDirection(dirsmo66770);
smo63591.setStemDirection(dirsmo66770);
smo63592.setStemDirection(dirsmo66770);
smo63593.setStemDirection(dirsmo66770);
const smo66770 = new VF.Beam([smo63590,smo63591,smo63592,smo63593]);
const dirsmo66771 = smo63594.getStemDirection();
smo63594.setStemDirection(dirsmo66771);
smo63595.setStemDirection(dirsmo66771);
smo63596.setStemDirection(dirsmo66771);
smo63597.setStemDirection(dirsmo66771);
const smo66771 = new VF.Beam([smo63594,smo63595,smo63596,smo63597]);
 
// formatting measures in staff group smo55345
fmtsmo5860865.format([smo58608v0,smo63611v0], 345);
const stavesmo58608 = new VF.Stave(557, 1962, 359);
stavesmo58608.setAttribute('id', 'stavesmo58608');
stavesmo58608.setBegBarType(VF.Barline.type.NONE);
stavesmo58608.setContext(context);
stavesmo58608.draw();
smo58608v0.draw(context, stavesmo58608);
smo66762.setContext(context);
smo66762.draw();
smo66763.setContext(context);
smo66763.draw();
smo66764.setContext(context);
smo66764.draw();
smo66765.setContext(context);
smo66765.draw();
const stavesmo63611 = new VF.Stave(557, 2051, 359);
stavesmo63611.setAttribute('id', 'stavesmo63611');
stavesmo63611.setBegBarType(VF.Barline.type.NONE);
stavesmo63611.setContext(context);
stavesmo63611.draw();
smo63611v0.draw(context, stavesmo63611);
smo66768.setContext(context);
smo66768.draw();
smo66769.setContext(context);
smo66769.draw();
smo66770.setContext(context);
smo66770.draw();
smo66771.setContext(context);
smo66771.draw();
const fmtsmo5863866 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo58638v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58638v0ar = [];
const smo58609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/5/n"]}'))
smo58609.setAttribute('id', 'smo58609');
smo58638v0ar.push(smo58609);
const smo58610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo58610.setAttribute('id', 'smo58610');
smo58638v0ar.push(smo58610);
const smo58611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58611.setAttribute('id', 'smo58611');
smo58638v0ar.push(smo58611);
const smo58612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo58612.setAttribute('id', 'smo58612');
smo58638v0ar.push(smo58612);
const smo58613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58613.setAttribute('id', 'smo58613');
smo58638v0ar.push(smo58613);
const smo58614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo58614.setAttribute('id', 'smo58614');
smo58638v0ar.push(smo58614);
const smo58615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58615.setAttribute('id', 'smo58615');
smo58638v0ar.push(smo58615);
const smo58616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo58616.setAttribute('id', 'smo58616');
smo58638v0ar.push(smo58616);
const smo58617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/5/n"]}'))
smo58617.setAttribute('id', 'smo58617');
smo58638v0ar.push(smo58617);
const smo58618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo58618.setAttribute('id', 'smo58618');
smo58638v0ar.push(smo58618);
const smo58619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58619.setAttribute('id', 'smo58619');
smo58638v0ar.push(smo58619);
const smo58620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo58620.setAttribute('id', 'smo58620');
smo58638v0ar.push(smo58620);
const smo58621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58621.setAttribute('id', 'smo58621');
smo58638v0ar.push(smo58621);
const smo58622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo58622.setAttribute('id', 'smo58622');
smo58638v0ar.push(smo58622);
const smo58623 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58623.setAttribute('id', 'smo58623');
smo58638v0ar.push(smo58623);
const smo58624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo58624.setAttribute('id', 'smo58624');
smo58638v0ar.push(smo58624);
smo58638v0.addTickables(smo58638v0ar)
fmtsmo5863866.joinVoices([smo58638v0]);
const fmtsmo6364166 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo63641v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63641v0ar = [];
const smo63612 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63612.setAttribute('id', 'smo63612');
smo63641v0ar.push(smo63612);
const smo63613 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63613.setAttribute('id', 'smo63613');
smo63641v0ar.push(smo63613);
const smo63614 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo63614.setAttribute('id', 'smo63614');
smo63641v0ar.push(smo63614);
const smo63615 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63615.setAttribute('id', 'smo63615');
smo63641v0ar.push(smo63615);
const smo63616 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63616.setAttribute('id', 'smo63616');
smo63641v0ar.push(smo63616);
const smo63617 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63617.setAttribute('id', 'smo63617');
smo63641v0ar.push(smo63617);
const smo63618 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo63618.setAttribute('id', 'smo63618');
smo63641v0ar.push(smo63618);
const smo63619 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63619.setAttribute('id', 'smo63619');
smo63641v0ar.push(smo63619);
const smo63620 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63620.setAttribute('id', 'smo63620');
smo63641v0ar.push(smo63620);
const smo63621 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63621.setAttribute('id', 'smo63621');
smo63641v0ar.push(smo63621);
const smo63622 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo63622.setAttribute('id', 'smo63622');
smo63641v0ar.push(smo63622);
const smo63623 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63623.setAttribute('id', 'smo63623');
smo63641v0ar.push(smo63623);
const smo63624 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63624.setAttribute('id', 'smo63624');
smo63641v0ar.push(smo63624);
const smo63625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63625.setAttribute('id', 'smo63625');
smo63641v0ar.push(smo63625);
const smo63626 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo63626.setAttribute('id', 'smo63626');
smo63641v0ar.push(smo63626);
const smo63627 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63627.setAttribute('id', 'smo63627');
smo63641v0ar.push(smo63627);
smo63641v0.addTickables(smo63641v0ar)
fmtsmo6364166.joinVoices([smo63641v0]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66774 = smo58609.getStemDirection();
smo58609.setStemDirection(dirsmo66774);
smo58610.setStemDirection(dirsmo66774);
smo58611.setStemDirection(dirsmo66774);
smo58612.setStemDirection(dirsmo66774);
const smo66774 = new VF.Beam([smo58609,smo58610,smo58611,smo58612]);
const dirsmo66775 = smo58613.getStemDirection();
smo58613.setStemDirection(dirsmo66775);
smo58614.setStemDirection(dirsmo66775);
smo58615.setStemDirection(dirsmo66775);
smo58616.setStemDirection(dirsmo66775);
const smo66775 = new VF.Beam([smo58613,smo58614,smo58615,smo58616]);
const dirsmo66776 = smo58617.getStemDirection();
smo58617.setStemDirection(dirsmo66776);
smo58618.setStemDirection(dirsmo66776);
smo58619.setStemDirection(dirsmo66776);
smo58620.setStemDirection(dirsmo66776);
const smo66776 = new VF.Beam([smo58617,smo58618,smo58619,smo58620]);
const dirsmo66777 = smo58621.getStemDirection();
smo58621.setStemDirection(dirsmo66777);
smo58622.setStemDirection(dirsmo66777);
smo58623.setStemDirection(dirsmo66777);
smo58624.setStemDirection(dirsmo66777);
const smo66777 = new VF.Beam([smo58621,smo58622,smo58623,smo58624]);
const dirsmo66780 = smo63612.getStemDirection();
smo63612.setStemDirection(dirsmo66780);
smo63613.setStemDirection(dirsmo66780);
smo63614.setStemDirection(dirsmo66780);
smo63615.setStemDirection(dirsmo66780);
const smo66780 = new VF.Beam([smo63612,smo63613,smo63614,smo63615]);
const dirsmo66781 = smo63616.getStemDirection();
smo63616.setStemDirection(dirsmo66781);
smo63617.setStemDirection(dirsmo66781);
smo63618.setStemDirection(dirsmo66781);
smo63619.setStemDirection(dirsmo66781);
const smo66781 = new VF.Beam([smo63616,smo63617,smo63618,smo63619]);
const dirsmo66782 = smo63620.getStemDirection();
smo63620.setStemDirection(dirsmo66782);
smo63621.setStemDirection(dirsmo66782);
smo63622.setStemDirection(dirsmo66782);
smo63623.setStemDirection(dirsmo66782);
const smo66782 = new VF.Beam([smo63620,smo63621,smo63622,smo63623]);
const dirsmo66783 = smo63624.getStemDirection();
smo63624.setStemDirection(dirsmo66783);
smo63625.setStemDirection(dirsmo66783);
smo63626.setStemDirection(dirsmo66783);
smo63627.setStemDirection(dirsmo66783);
const smo66783 = new VF.Beam([smo63624,smo63625,smo63626,smo63627]);
 
// formatting measures in staff group smo55345
fmtsmo5863866.format([smo58638v0,smo63641v0], 345);
const stavesmo58638 = new VF.Stave(916, 1962, 359);
stavesmo58638.setAttribute('id', 'stavesmo58638');
stavesmo58638.setBegBarType(VF.Barline.type.NONE);
stavesmo58638.setContext(context);
stavesmo58638.draw();
smo58638v0.draw(context, stavesmo58638);
smo66774.setContext(context);
smo66774.draw();
smo66775.setContext(context);
smo66775.draw();
smo66776.setContext(context);
smo66776.draw();
smo66777.setContext(context);
smo66777.draw();
const stavesmo63641 = new VF.Stave(916, 2051, 359);
stavesmo63641.setAttribute('id', 'stavesmo63641');
stavesmo63641.setBegBarType(VF.Barline.type.NONE);
stavesmo63641.setContext(context);
stavesmo63641.draw();
smo63641v0.draw(context, stavesmo63641);
smo66780.setContext(context);
smo66780.draw();
smo66781.setContext(context);
smo66781.draw();
smo66782.setContext(context);
smo66782.draw();
smo66783.setContext(context);
smo66783.draw();
const fmtsmo5866867 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo58668v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58668v0ar = [];
const smo58639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58639.setAttribute('id', 'smo58639');
smo58668v0ar.push(smo58639);
const smo58640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo58640.setAttribute('id', 'smo58640');
const smo586400acc = new VF.Accidental('#');
smo58640.addModifier(smo586400acc, 0);
smo58668v0ar.push(smo58640);
const smo58641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58641.setAttribute('id', 'smo58641');
const smo586410acc = new VF.Accidental('n');
smo58641.addModifier(smo586410acc, 0);
smo58668v0ar.push(smo58641);
const smo58642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo58642.setAttribute('id', 'smo58642');
smo58668v0ar.push(smo58642);
const smo58643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58643.setAttribute('id', 'smo58643');
smo58668v0ar.push(smo58643);
const smo58644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo58644.setAttribute('id', 'smo58644');
smo58668v0ar.push(smo58644);
const smo58645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58645.setAttribute('id', 'smo58645');
smo58668v0ar.push(smo58645);
const smo58646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo58646.setAttribute('id', 'smo58646');
smo58668v0ar.push(smo58646);
const smo58647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58647.setAttribute('id', 'smo58647');
smo58668v0ar.push(smo58647);
const smo58648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo58648.setAttribute('id', 'smo58648');
smo58668v0ar.push(smo58648);
const smo58649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58649.setAttribute('id', 'smo58649');
smo58668v0ar.push(smo58649);
const smo58650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo58650.setAttribute('id', 'smo58650');
smo58668v0ar.push(smo58650);
const smo58651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58651.setAttribute('id', 'smo58651');
smo58668v0ar.push(smo58651);
const smo58652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo58652.setAttribute('id', 'smo58652');
smo58668v0ar.push(smo58652);
const smo58653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58653.setAttribute('id', 'smo58653');
smo58668v0ar.push(smo58653);
const smo58654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo58654.setAttribute('id', 'smo58654');
smo58668v0ar.push(smo58654);
smo58668v0.addTickables(smo58668v0ar)
fmtsmo5866867.joinVoices([smo58668v0]);
const fmtsmo6367167 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo63671v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63671v0ar = [];
const smo63642 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63642.setAttribute('id', 'smo63642');
smo63671v0ar.push(smo63642);
const smo63643 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63643.setAttribute('id', 'smo63643');
const smo636430acc = new VF.Accidental('n');
smo63643.addModifier(smo636430acc, 0);
smo63671v0ar.push(smo63643);
const smo63644 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63644.setAttribute('id', 'smo63644');
smo63671v0ar.push(smo63644);
const smo63645 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63645.setAttribute('id', 'smo63645');
smo63671v0ar.push(smo63645);
const smo63646 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo63646.setAttribute('id', 'smo63646');
const smo636460acc = new VF.Accidental('#');
smo63646.addModifier(smo636460acc, 0);
smo63671v0ar.push(smo63646);
const smo63647 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63647.setAttribute('id', 'smo63647');
smo63671v0ar.push(smo63647);
const smo63648 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63648.setAttribute('id', 'smo63648');
smo63671v0ar.push(smo63648);
const smo63649 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63649.setAttribute('id', 'smo63649');
smo63671v0ar.push(smo63649);
const smo63650 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63650.setAttribute('id', 'smo63650');
smo63671v0ar.push(smo63650);
const smo63651 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63651.setAttribute('id', 'smo63651');
smo63671v0ar.push(smo63651);
const smo63652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63652.setAttribute('id', 'smo63652');
smo63671v0ar.push(smo63652);
const smo63653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63653.setAttribute('id', 'smo63653');
smo63671v0ar.push(smo63653);
const smo63654 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo63654.setAttribute('id', 'smo63654');
smo63671v0ar.push(smo63654);
const smo63655 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63655.setAttribute('id', 'smo63655');
smo63671v0ar.push(smo63655);
const smo63656 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63656.setAttribute('id', 'smo63656');
smo63671v0ar.push(smo63656);
const smo63657 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63657.setAttribute('id', 'smo63657');
smo63671v0ar.push(smo63657);
smo63671v0.addTickables(smo63671v0ar)
fmtsmo6367167.joinVoices([smo63671v0]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66786 = smo58639.getStemDirection();
smo58639.setStemDirection(dirsmo66786);
smo58640.setStemDirection(dirsmo66786);
smo58641.setStemDirection(dirsmo66786);
smo58642.setStemDirection(dirsmo66786);
const smo66786 = new VF.Beam([smo58639,smo58640,smo58641,smo58642]);
const dirsmo66787 = smo58643.getStemDirection();
smo58643.setStemDirection(dirsmo66787);
smo58644.setStemDirection(dirsmo66787);
smo58645.setStemDirection(dirsmo66787);
smo58646.setStemDirection(dirsmo66787);
const smo66787 = new VF.Beam([smo58643,smo58644,smo58645,smo58646]);
const dirsmo66788 = smo58647.getStemDirection();
smo58647.setStemDirection(dirsmo66788);
smo58648.setStemDirection(dirsmo66788);
smo58649.setStemDirection(dirsmo66788);
smo58650.setStemDirection(dirsmo66788);
const smo66788 = new VF.Beam([smo58647,smo58648,smo58649,smo58650]);
const dirsmo66789 = smo58651.getStemDirection();
smo58651.setStemDirection(dirsmo66789);
smo58652.setStemDirection(dirsmo66789);
smo58653.setStemDirection(dirsmo66789);
smo58654.setStemDirection(dirsmo66789);
const smo66789 = new VF.Beam([smo58651,smo58652,smo58653,smo58654]);
const dirsmo66792 = smo63642.getStemDirection();
smo63642.setStemDirection(dirsmo66792);
smo63643.setStemDirection(dirsmo66792);
smo63644.setStemDirection(dirsmo66792);
smo63645.setStemDirection(dirsmo66792);
const smo66792 = new VF.Beam([smo63642,smo63643,smo63644,smo63645]);
const dirsmo66793 = smo63646.getStemDirection();
smo63646.setStemDirection(dirsmo66793);
smo63647.setStemDirection(dirsmo66793);
smo63648.setStemDirection(dirsmo66793);
smo63649.setStemDirection(dirsmo66793);
const smo66793 = new VF.Beam([smo63646,smo63647,smo63648,smo63649]);
const dirsmo66794 = smo63650.getStemDirection();
smo63650.setStemDirection(dirsmo66794);
smo63651.setStemDirection(dirsmo66794);
smo63652.setStemDirection(dirsmo66794);
smo63653.setStemDirection(dirsmo66794);
const smo66794 = new VF.Beam([smo63650,smo63651,smo63652,smo63653]);
const dirsmo66795 = smo63654.getStemDirection();
smo63654.setStemDirection(dirsmo66795);
smo63655.setStemDirection(dirsmo66795);
smo63656.setStemDirection(dirsmo66795);
smo63657.setStemDirection(dirsmo66795);
const smo66795 = new VF.Beam([smo63654,smo63655,smo63656,smo63657]);
 
// formatting measures in staff group smo55345
fmtsmo5866867.format([smo58668v0,smo63671v0], 519);
const stavesmo58668 = new VF.Stave(1275, 1962, 533);
stavesmo58668.setAttribute('id', 'stavesmo58668');
stavesmo58668.setBegBarType(VF.Barline.type.NONE);
stavesmo58668.setContext(context);
stavesmo58668.draw();
smo58668v0.draw(context, stavesmo58668);
smo66786.setContext(context);
smo66786.draw();
smo66787.setContext(context);
smo66787.draw();
smo66788.setContext(context);
smo66788.draw();
smo66789.setContext(context);
smo66789.draw();
const stavesmo63671 = new VF.Stave(1275, 2051, 533);
stavesmo63671.setAttribute('id', 'stavesmo63671');
stavesmo63671.setBegBarType(VF.Barline.type.NONE);
stavesmo63671.setContext(context);
stavesmo63671.draw();
smo63671v0.draw(context, stavesmo63671);
smo66792.setContext(context);
smo66792.draw();
smo66793.setContext(context);
smo66793.draw();
smo66794.setContext(context);
smo66794.draw();
smo66795.setContext(context);
smo66795.draw();
const rightsmo55345stavesmo586681 = new VF.StaveConnector(stavesmo58668, stavesmo63671).setType(0);
rightsmo55345stavesmo586681.setContext(context).draw();
const fmtsmo5869868 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo58698v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58698v0ar = [];
const smo58669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58669.setAttribute('id', 'smo58669');
smo58698v0ar.push(smo58669);
const smo58670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58670.setAttribute('id', 'smo58670');
smo58698v0ar.push(smo58670);
const smo58671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo58671.setAttribute('id', 'smo58671');
const smo586710acc = new VF.Accidental('#');
smo58671.addModifier(smo586710acc, 0);
smo58698v0ar.push(smo58671);
const smo58672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58672.setAttribute('id', 'smo58672');
smo58698v0ar.push(smo58672);
const smo58673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58673.setAttribute('id', 'smo58673');
smo58698v0ar.push(smo58673);
const smo58674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58674.setAttribute('id', 'smo58674');
smo58698v0ar.push(smo58674);
const smo58675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo58675.setAttribute('id', 'smo58675');
smo58698v0ar.push(smo58675);
const smo58676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58676.setAttribute('id', 'smo58676');
smo58698v0ar.push(smo58676);
const smo58677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo58677.setAttribute('id', 'smo58677');
smo58698v0ar.push(smo58677);
const smo58678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58678.setAttribute('id', 'smo58678');
smo58698v0ar.push(smo58678);
const smo58679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo58679.setAttribute('id', 'smo58679');
smo58698v0ar.push(smo58679);
const smo58680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58680.setAttribute('id', 'smo58680');
smo58698v0ar.push(smo58680);
const smo58681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58681.setAttribute('id', 'smo58681');
smo58698v0ar.push(smo58681);
const smo58682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58682.setAttribute('id', 'smo58682');
smo58698v0ar.push(smo58682);
const smo58683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo58683.setAttribute('id', 'smo58683');
smo58698v0ar.push(smo58683);
const smo58684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo58684.setAttribute('id', 'smo58684');
smo58698v0ar.push(smo58684);
smo58698v0.addTickables(smo58698v0ar)
fmtsmo5869868.joinVoices([smo58698v0]);
const fmtsmo6370168 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo63701v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63701v0ar = [];
const smo63672 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
smo63672.setAttribute('id', 'smo63672');
smo63701v0ar.push(smo63672);
const smo63673 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo63673.setAttribute('id', 'smo63673');
smo63701v0ar.push(smo63673);
const smo63674 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63674.setAttribute('id', 'smo63674');
const smo636740acc = new VF.Accidental('n');
smo63674.addModifier(smo636740acc, 0);
smo63701v0ar.push(smo63674);
const smo63675 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo63675.setAttribute('id', 'smo63675');
smo63701v0ar.push(smo63675);
const smo63676 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63676.setAttribute('id', 'smo63676');
smo63701v0ar.push(smo63676);
const smo63677 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo63677.setAttribute('id', 'smo63677');
smo63701v0ar.push(smo63677);
const smo63678 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63678.setAttribute('id', 'smo63678');
smo63701v0ar.push(smo63678);
const smo63679 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo63679.setAttribute('id', 'smo63679');
smo63701v0ar.push(smo63679);
const smo63680 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
smo63680.setAttribute('id', 'smo63680');
smo63701v0ar.push(smo63680);
const smo63681 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo63681.setAttribute('id', 'smo63681');
smo63701v0ar.push(smo63681);
const smo63682 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63682.setAttribute('id', 'smo63682');
smo63701v0ar.push(smo63682);
const smo63683 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo63683.setAttribute('id', 'smo63683');
smo63701v0ar.push(smo63683);
const smo63684 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63684.setAttribute('id', 'smo63684');
smo63701v0ar.push(smo63684);
const smo63685 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo63685.setAttribute('id', 'smo63685');
smo63701v0ar.push(smo63685);
const smo63686 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo63686.setAttribute('id', 'smo63686');
smo63701v0ar.push(smo63686);
const smo63687 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo63687.setAttribute('id', 'smo63687');
smo63701v0ar.push(smo63687);
smo63701v0.addTickables(smo63701v0ar)
fmtsmo6370168.joinVoices([smo63701v0]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66810 = smo58669.getStemDirection();
smo58669.setStemDirection(dirsmo66810);
smo58670.setStemDirection(dirsmo66810);
smo58671.setStemDirection(dirsmo66810);
smo58672.setStemDirection(dirsmo66810);
const smo66810 = new VF.Beam([smo58669,smo58670,smo58671,smo58672]);
const dirsmo66811 = smo58673.getStemDirection();
smo58673.setStemDirection(dirsmo66811);
smo58674.setStemDirection(dirsmo66811);
smo58675.setStemDirection(dirsmo66811);
smo58676.setStemDirection(dirsmo66811);
const smo66811 = new VF.Beam([smo58673,smo58674,smo58675,smo58676]);
const dirsmo66812 = smo58677.getStemDirection();
smo58677.setStemDirection(dirsmo66812);
smo58678.setStemDirection(dirsmo66812);
smo58679.setStemDirection(dirsmo66812);
smo58680.setStemDirection(dirsmo66812);
const smo66812 = new VF.Beam([smo58677,smo58678,smo58679,smo58680]);
const dirsmo66813 = smo58681.getStemDirection();
smo58681.setStemDirection(dirsmo66813);
smo58682.setStemDirection(dirsmo66813);
smo58683.setStemDirection(dirsmo66813);
smo58684.setStemDirection(dirsmo66813);
const smo66813 = new VF.Beam([smo58681,smo58682,smo58683,smo58684]);
const dirsmo66816 = smo63672.getStemDirection();
smo63672.setStemDirection(dirsmo66816);
smo63673.setStemDirection(dirsmo66816);
smo63674.setStemDirection(dirsmo66816);
smo63675.setStemDirection(dirsmo66816);
const smo66816 = new VF.Beam([smo63672,smo63673,smo63674,smo63675]);
const dirsmo66817 = smo63676.getStemDirection();
smo63676.setStemDirection(dirsmo66817);
smo63677.setStemDirection(dirsmo66817);
smo63678.setStemDirection(dirsmo66817);
smo63679.setStemDirection(dirsmo66817);
const smo66817 = new VF.Beam([smo63676,smo63677,smo63678,smo63679]);
const dirsmo66818 = smo63680.getStemDirection();
smo63680.setStemDirection(dirsmo66818);
smo63681.setStemDirection(dirsmo66818);
smo63682.setStemDirection(dirsmo66818);
smo63683.setStemDirection(dirsmo66818);
const smo66818 = new VF.Beam([smo63680,smo63681,smo63682,smo63683]);
const dirsmo66819 = smo63684.getStemDirection();
smo63684.setStemDirection(dirsmo66819);
smo63685.setStemDirection(dirsmo66819);
smo63686.setStemDirection(dirsmo66819);
smo63687.setStemDirection(dirsmo66819);
const smo66819 = new VF.Beam([smo63684,smo63685,smo63686,smo63687]);
 
// formatting measures in staff group smo55345
fmtsmo5869868.format([smo58698v0,smo63701v0], 409);
const stavesmo58698 = new VF.Stave(90, 2180, 506);
stavesmo58698.setAttribute('id', 'stavesmo58698');
stavesmo58698.setBegBarType(1);
stavesmo58698.addClef('treble');
const keysmo58698 = new VF.KeySignature('Eb');
keysmo58698.addToStave(stavesmo58698);
stavesmo58698.setContext(context);
stavesmo58698.draw();
smo58698v0.draw(context, stavesmo58698);
smo66810.setContext(context);
smo66810.draw();
smo66811.setContext(context);
smo66811.draw();
smo66812.setContext(context);
smo66812.draw();
smo66813.setContext(context);
smo66813.draw();
const stavesmo63701 = new VF.Stave(90, 2270, 506);
stavesmo63701.setAttribute('id', 'stavesmo63701');
stavesmo63701.setBegBarType(1);
stavesmo63701.addClef('bass');
const keysmo63701 = new VF.KeySignature('Eb');
keysmo63701.addToStave(stavesmo63701);
stavesmo63701.setContext(context);
stavesmo63701.draw();
smo63701v0.draw(context, stavesmo63701);
smo66816.setContext(context);
smo66816.draw();
smo66817.setContext(context);
smo66817.draw();
smo66818.setContext(context);
smo66818.draw();
smo66819.setContext(context);
smo66819.draw();
const leftsmo55345stavesmo586981 = new VF.StaveConnector(stavesmo58698, stavesmo63701).setType(3);
leftsmo55345stavesmo586981.setContext(context).draw();
const fmtsmo5872869 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo58728v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58728v0ar = [];
const smo58699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58699.setAttribute('id', 'smo58699');
smo58728v0ar.push(smo58699);
const smo58700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58700.setAttribute('id', 'smo58700');
const smo587000acc = new VF.Accidental('n');
smo58700.addModifier(smo587000acc, 0);
smo58728v0ar.push(smo58700);
const smo58701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58701.setAttribute('id', 'smo58701');
smo58728v0ar.push(smo58701);
const smo58702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58702.setAttribute('id', 'smo58702');
smo58728v0ar.push(smo58702);
const smo58703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo58703.setAttribute('id', 'smo58703');
smo58728v0ar.push(smo58703);
const smo58704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58704.setAttribute('id', 'smo58704');
smo58728v0ar.push(smo58704);
const smo58705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58705.setAttribute('id', 'smo58705');
smo58728v0ar.push(smo58705);
const smo58706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58706.setAttribute('id', 'smo58706');
smo58728v0ar.push(smo58706);
const smo58707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58707.setAttribute('id', 'smo58707');
smo58728v0ar.push(smo58707);
const smo58708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58708.setAttribute('id', 'smo58708');
smo58728v0ar.push(smo58708);
const smo58709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58709.setAttribute('id', 'smo58709');
smo58728v0ar.push(smo58709);
const smo58710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58710.setAttribute('id', 'smo58710');
smo58728v0ar.push(smo58710);
const smo58711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo58711.setAttribute('id', 'smo58711');
smo58728v0ar.push(smo58711);
const smo58712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58712.setAttribute('id', 'smo58712');
smo58728v0ar.push(smo58712);
const smo58713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58713.setAttribute('id', 'smo58713');
smo58728v0ar.push(smo58713);
const smo58714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58714.setAttribute('id', 'smo58714');
smo58728v0ar.push(smo58714);
smo58728v0.addTickables(smo58728v0ar)
fmtsmo5872869.joinVoices([smo58728v0]);
const fmtsmo6373169 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo63731v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63731v0ar = [];
const smo63702 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
smo63702.setAttribute('id', 'smo63702');
smo63731v0ar.push(smo63702);
const smo63703 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63703.setAttribute('id', 'smo63703');
smo63731v0ar.push(smo63703);
const smo63704 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63704.setAttribute('id', 'smo63704');
smo63731v0ar.push(smo63704);
const smo63705 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63705.setAttribute('id', 'smo63705');
smo63731v0ar.push(smo63705);
const smo63706 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63706.setAttribute('id', 'smo63706');
const smo637060acc = new VF.Accidental('n');
smo63706.addModifier(smo637060acc, 0);
smo63731v0ar.push(smo63706);
const smo63707 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63707.setAttribute('id', 'smo63707');
smo63731v0ar.push(smo63707);
const smo63708 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63708.setAttribute('id', 'smo63708');
smo63731v0ar.push(smo63708);
const smo63709 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63709.setAttribute('id', 'smo63709');
smo63731v0ar.push(smo63709);
const smo63710 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
smo63710.setAttribute('id', 'smo63710');
smo63731v0ar.push(smo63710);
const smo63711 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63711.setAttribute('id', 'smo63711');
smo63731v0ar.push(smo63711);
const smo63712 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63712.setAttribute('id', 'smo63712');
smo63731v0ar.push(smo63712);
const smo63713 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63713.setAttribute('id', 'smo63713');
smo63731v0ar.push(smo63713);
const smo63714 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63714.setAttribute('id', 'smo63714');
smo63731v0ar.push(smo63714);
const smo63715 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63715.setAttribute('id', 'smo63715');
smo63731v0ar.push(smo63715);
const smo63716 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63716.setAttribute('id', 'smo63716');
smo63731v0ar.push(smo63716);
const smo63717 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63717.setAttribute('id', 'smo63717');
smo63731v0ar.push(smo63717);
smo63731v0.addTickables(smo63731v0ar)
fmtsmo6373169.joinVoices([smo63731v0]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66822 = smo58699.getStemDirection();
smo58699.setStemDirection(dirsmo66822);
smo58700.setStemDirection(dirsmo66822);
smo58701.setStemDirection(dirsmo66822);
smo58702.setStemDirection(dirsmo66822);
const smo66822 = new VF.Beam([smo58699,smo58700,smo58701,smo58702]);
const dirsmo66823 = smo58703.getStemDirection();
smo58703.setStemDirection(dirsmo66823);
smo58704.setStemDirection(dirsmo66823);
smo58705.setStemDirection(dirsmo66823);
smo58706.setStemDirection(dirsmo66823);
const smo66823 = new VF.Beam([smo58703,smo58704,smo58705,smo58706]);
const dirsmo66824 = smo58707.getStemDirection();
smo58707.setStemDirection(dirsmo66824);
smo58708.setStemDirection(dirsmo66824);
smo58709.setStemDirection(dirsmo66824);
smo58710.setStemDirection(dirsmo66824);
const smo66824 = new VF.Beam([smo58707,smo58708,smo58709,smo58710]);
const dirsmo66825 = smo58711.getStemDirection();
smo58711.setStemDirection(dirsmo66825);
smo58712.setStemDirection(dirsmo66825);
smo58713.setStemDirection(dirsmo66825);
smo58714.setStemDirection(dirsmo66825);
const smo66825 = new VF.Beam([smo58711,smo58712,smo58713,smo58714]);
const dirsmo66828 = smo63702.getStemDirection();
smo63702.setStemDirection(dirsmo66828);
smo63703.setStemDirection(dirsmo66828);
smo63704.setStemDirection(dirsmo66828);
smo63705.setStemDirection(dirsmo66828);
const smo66828 = new VF.Beam([smo63702,smo63703,smo63704,smo63705]);
const dirsmo66829 = smo63706.getStemDirection();
smo63706.setStemDirection(dirsmo66829);
smo63707.setStemDirection(dirsmo66829);
smo63708.setStemDirection(dirsmo66829);
smo63709.setStemDirection(dirsmo66829);
const smo66829 = new VF.Beam([smo63706,smo63707,smo63708,smo63709]);
const dirsmo66830 = smo63710.getStemDirection();
smo63710.setStemDirection(dirsmo66830);
smo63711.setStemDirection(dirsmo66830);
smo63712.setStemDirection(dirsmo66830);
smo63713.setStemDirection(dirsmo66830);
const smo66830 = new VF.Beam([smo63710,smo63711,smo63712,smo63713]);
const dirsmo66831 = smo63714.getStemDirection();
smo63714.setStemDirection(dirsmo66831);
smo63715.setStemDirection(dirsmo66831);
smo63716.setStemDirection(dirsmo66831);
smo63717.setStemDirection(dirsmo66831);
const smo66831 = new VF.Beam([smo63714,smo63715,smo63716,smo63717]);
 
// formatting measures in staff group smo55345
fmtsmo5872869.format([smo58728v0,smo63731v0], 440);
const stavesmo58728 = new VF.Stave(596, 2180, 454);
stavesmo58728.setAttribute('id', 'stavesmo58728');
stavesmo58728.setBegBarType(VF.Barline.type.NONE);
stavesmo58728.setContext(context);
stavesmo58728.draw();
smo58728v0.draw(context, stavesmo58728);
smo66822.setContext(context);
smo66822.draw();
smo66823.setContext(context);
smo66823.draw();
smo66824.setContext(context);
smo66824.draw();
smo66825.setContext(context);
smo66825.draw();
const stavesmo63731 = new VF.Stave(596, 2270, 454);
stavesmo63731.setAttribute('id', 'stavesmo63731');
stavesmo63731.setBegBarType(VF.Barline.type.NONE);
stavesmo63731.setContext(context);
stavesmo63731.draw();
smo63731v0.draw(context, stavesmo63731);
smo66828.setContext(context);
smo66828.draw();
smo66829.setContext(context);
smo66829.draw();
smo66830.setContext(context);
smo66830.draw();
smo66831.setContext(context);
smo66831.draw();
const fmtsmo5875870 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo58758v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58758v0ar = [];
const smo58729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58729.setAttribute('id', 'smo58729');
smo58758v0ar.push(smo58729);
const smo58730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58730.setAttribute('id', 'smo58730');
smo58758v0ar.push(smo58730);
const smo58731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58731.setAttribute('id', 'smo58731');
const smo587310acc = new VF.Accidental('n');
smo58731.addModifier(smo587310acc, 0);
smo58758v0ar.push(smo58731);
const smo58732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58732.setAttribute('id', 'smo58732');
smo58758v0ar.push(smo58732);
const smo58733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo58733.setAttribute('id', 'smo58733');
smo58758v0ar.push(smo58733);
const smo58734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58734.setAttribute('id', 'smo58734');
smo58758v0ar.push(smo58734);
const smo58735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58735.setAttribute('id', 'smo58735');
smo58758v0ar.push(smo58735);
const smo58736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58736.setAttribute('id', 'smo58736');
smo58758v0ar.push(smo58736);
const smo58737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo58737.setAttribute('id', 'smo58737');
smo58758v0ar.push(smo58737);
const smo58738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58738.setAttribute('id', 'smo58738');
smo58758v0ar.push(smo58738);
const smo58739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58739.setAttribute('id', 'smo58739');
smo58758v0ar.push(smo58739);
const smo58740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58740.setAttribute('id', 'smo58740');
smo58758v0ar.push(smo58740);
const smo58741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo58741.setAttribute('id', 'smo58741');
smo58758v0ar.push(smo58741);
const smo58742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58742.setAttribute('id', 'smo58742');
smo58758v0ar.push(smo58742);
const smo58743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo58743.setAttribute('id', 'smo58743');
smo58758v0ar.push(smo58743);
const smo58744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58744.setAttribute('id', 'smo58744');
smo58758v0ar.push(smo58744);
smo58758v0.addTickables(smo58758v0ar)
fmtsmo5875870.joinVoices([smo58758v0]);
const fmtsmo6376170 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo63761v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63761v0ar = [];
const smo63732 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/2/n"]}'))
smo63732.setAttribute('id', 'smo63732');
smo63761v0ar.push(smo63732);
const smo63733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63733.setAttribute('id', 'smo63733');
smo63761v0ar.push(smo63733);
const smo63734 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63734.setAttribute('id', 'smo63734');
smo63761v0ar.push(smo63734);
const smo63735 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63735.setAttribute('id', 'smo63735');
smo63761v0ar.push(smo63735);
const smo63736 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63736.setAttribute('id', 'smo63736');
smo63761v0ar.push(smo63736);
const smo63737 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63737.setAttribute('id', 'smo63737');
smo63761v0ar.push(smo63737);
const smo63738 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63738.setAttribute('id', 'smo63738');
smo63761v0ar.push(smo63738);
const smo63739 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63739.setAttribute('id', 'smo63739');
smo63761v0ar.push(smo63739);
const smo63740 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/2/n"]}'))
smo63740.setAttribute('id', 'smo63740');
smo63761v0ar.push(smo63740);
const smo63741 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63741.setAttribute('id', 'smo63741');
smo63761v0ar.push(smo63741);
const smo63742 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63742.setAttribute('id', 'smo63742');
smo63761v0ar.push(smo63742);
const smo63743 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63743.setAttribute('id', 'smo63743');
smo63761v0ar.push(smo63743);
const smo63744 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63744.setAttribute('id', 'smo63744');
smo63761v0ar.push(smo63744);
const smo63745 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63745.setAttribute('id', 'smo63745');
smo63761v0ar.push(smo63745);
const smo63746 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo63746.setAttribute('id', 'smo63746');
smo63761v0ar.push(smo63746);
const smo63747 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo63747.setAttribute('id', 'smo63747');
smo63761v0ar.push(smo63747);
smo63761v0.addTickables(smo63761v0ar)
fmtsmo6376170.joinVoices([smo63761v0]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66834 = smo58729.getStemDirection();
smo58729.setStemDirection(dirsmo66834);
smo58730.setStemDirection(dirsmo66834);
smo58731.setStemDirection(dirsmo66834);
smo58732.setStemDirection(dirsmo66834);
const smo66834 = new VF.Beam([smo58729,smo58730,smo58731,smo58732]);
const dirsmo66835 = smo58733.getStemDirection();
smo58733.setStemDirection(dirsmo66835);
smo58734.setStemDirection(dirsmo66835);
smo58735.setStemDirection(dirsmo66835);
smo58736.setStemDirection(dirsmo66835);
const smo66835 = new VF.Beam([smo58733,smo58734,smo58735,smo58736]);
const dirsmo66836 = smo58737.getStemDirection();
smo58737.setStemDirection(dirsmo66836);
smo58738.setStemDirection(dirsmo66836);
smo58739.setStemDirection(dirsmo66836);
smo58740.setStemDirection(dirsmo66836);
const smo66836 = new VF.Beam([smo58737,smo58738,smo58739,smo58740]);
const dirsmo66837 = smo58741.getStemDirection();
smo58741.setStemDirection(dirsmo66837);
smo58742.setStemDirection(dirsmo66837);
smo58743.setStemDirection(dirsmo66837);
smo58744.setStemDirection(dirsmo66837);
const smo66837 = new VF.Beam([smo58741,smo58742,smo58743,smo58744]);
const dirsmo66840 = smo63732.getStemDirection();
smo63732.setStemDirection(dirsmo66840);
smo63733.setStemDirection(dirsmo66840);
smo63734.setStemDirection(dirsmo66840);
smo63735.setStemDirection(dirsmo66840);
const smo66840 = new VF.Beam([smo63732,smo63733,smo63734,smo63735]);
const dirsmo66841 = smo63736.getStemDirection();
smo63736.setStemDirection(dirsmo66841);
smo63737.setStemDirection(dirsmo66841);
smo63738.setStemDirection(dirsmo66841);
smo63739.setStemDirection(dirsmo66841);
const smo66841 = new VF.Beam([smo63736,smo63737,smo63738,smo63739]);
const dirsmo66842 = smo63740.getStemDirection();
smo63740.setStemDirection(dirsmo66842);
smo63741.setStemDirection(dirsmo66842);
smo63742.setStemDirection(dirsmo66842);
smo63743.setStemDirection(dirsmo66842);
const smo66842 = new VF.Beam([smo63740,smo63741,smo63742,smo63743]);
const dirsmo66843 = smo63744.getStemDirection();
smo63744.setStemDirection(dirsmo66843);
smo63745.setStemDirection(dirsmo66843);
smo63746.setStemDirection(dirsmo66843);
smo63747.setStemDirection(dirsmo66843);
const smo66843 = new VF.Beam([smo63744,smo63745,smo63746,smo63747]);
 
// formatting measures in staff group smo55345
fmtsmo5875870.format([smo58758v0,smo63761v0], 386);
const stavesmo58758 = new VF.Stave(1050, 2180, 400);
stavesmo58758.setAttribute('id', 'stavesmo58758');
stavesmo58758.setBegBarType(VF.Barline.type.NONE);
stavesmo58758.setContext(context);
stavesmo58758.draw();
smo58758v0.draw(context, stavesmo58758);
smo66834.setContext(context);
smo66834.draw();
smo66835.setContext(context);
smo66835.draw();
smo66836.setContext(context);
smo66836.draw();
smo66837.setContext(context);
smo66837.draw();
const stavesmo63761 = new VF.Stave(1050, 2270, 400);
stavesmo63761.setAttribute('id', 'stavesmo63761');
stavesmo63761.setBegBarType(VF.Barline.type.NONE);
stavesmo63761.setContext(context);
stavesmo63761.draw();
smo63761v0.draw(context, stavesmo63761);
smo66840.setContext(context);
smo66840.draw();
smo66841.setContext(context);
smo66841.draw();
smo66842.setContext(context);
smo66842.draw();
smo66843.setContext(context);
smo66843.draw();
const fmtsmo5878871 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo58788v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58788v0ar = [];
const smo58759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo58759.setAttribute('id', 'smo58759');
smo58788v0ar.push(smo58759);
const smo58760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58760.setAttribute('id', 'smo58760');
smo58788v0ar.push(smo58760);
const smo58761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58761.setAttribute('id', 'smo58761');
smo58788v0ar.push(smo58761);
const smo58762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58762.setAttribute('id', 'smo58762');
smo58788v0ar.push(smo58762);
const smo58763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58763.setAttribute('id', 'smo58763');
smo58788v0ar.push(smo58763);
const smo58764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58764.setAttribute('id', 'smo58764');
smo58788v0ar.push(smo58764);
const smo58765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58765.setAttribute('id', 'smo58765');
smo58788v0ar.push(smo58765);
const smo58766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58766.setAttribute('id', 'smo58766');
smo58788v0ar.push(smo58766);
const smo58767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo58767.setAttribute('id', 'smo58767');
smo58788v0ar.push(smo58767);
const smo58768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58768.setAttribute('id', 'smo58768');
smo58788v0ar.push(smo58768);
const smo58769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58769.setAttribute('id', 'smo58769');
smo58788v0ar.push(smo58769);
const smo58770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58770.setAttribute('id', 'smo58770');
smo58788v0ar.push(smo58770);
const smo58771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo58771.setAttribute('id', 'smo58771');
smo58788v0ar.push(smo58771);
const smo58772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58772.setAttribute('id', 'smo58772');
smo58788v0ar.push(smo58772);
const smo58773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo58773.setAttribute('id', 'smo58773');
smo58788v0ar.push(smo58773);
const smo58774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo58774.setAttribute('id', 'smo58774');
smo58788v0ar.push(smo58774);
smo58788v0.addTickables(smo58788v0ar)
fmtsmo5878871.joinVoices([smo58788v0]);
const fmtsmo6379171 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo63791v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63791v0ar = [];
const smo63762 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/2/n"]}'))
smo63762.setAttribute('id', 'smo63762');
smo63791v0ar.push(smo63762);
const smo63763 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63763.setAttribute('id', 'smo63763');
smo63791v0ar.push(smo63763);
const smo63764 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63764.setAttribute('id', 'smo63764');
smo63791v0ar.push(smo63764);
const smo63765 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63765.setAttribute('id', 'smo63765');
smo63791v0ar.push(smo63765);
const smo63766 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63766.setAttribute('id', 'smo63766');
smo63791v0ar.push(smo63766);
const smo63767 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63767.setAttribute('id', 'smo63767');
smo63791v0ar.push(smo63767);
const smo63768 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63768.setAttribute('id', 'smo63768');
smo63791v0ar.push(smo63768);
const smo63769 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63769.setAttribute('id', 'smo63769');
smo63791v0ar.push(smo63769);
const smo63770 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/2/n"]}'))
smo63770.setAttribute('id', 'smo63770');
smo63791v0ar.push(smo63770);
const smo63771 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63771.setAttribute('id', 'smo63771');
smo63791v0ar.push(smo63771);
const smo63772 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63772.setAttribute('id', 'smo63772');
smo63791v0ar.push(smo63772);
const smo63773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63773.setAttribute('id', 'smo63773');
smo63791v0ar.push(smo63773);
const smo63774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo63774.setAttribute('id', 'smo63774');
smo63791v0ar.push(smo63774);
const smo63775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63775.setAttribute('id', 'smo63775');
smo63791v0ar.push(smo63775);
const smo63776 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63776.setAttribute('id', 'smo63776');
smo63791v0ar.push(smo63776);
const smo63777 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63777.setAttribute('id', 'smo63777');
smo63791v0ar.push(smo63777);
smo63791v0.addTickables(smo63791v0ar)
fmtsmo6379171.joinVoices([smo63791v0]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66846 = smo58759.getStemDirection();
smo58759.setStemDirection(dirsmo66846);
smo58760.setStemDirection(dirsmo66846);
smo58761.setStemDirection(dirsmo66846);
smo58762.setStemDirection(dirsmo66846);
const smo66846 = new VF.Beam([smo58759,smo58760,smo58761,smo58762]);
const dirsmo66847 = smo58763.getStemDirection();
smo58763.setStemDirection(dirsmo66847);
smo58764.setStemDirection(dirsmo66847);
smo58765.setStemDirection(dirsmo66847);
smo58766.setStemDirection(dirsmo66847);
const smo66847 = new VF.Beam([smo58763,smo58764,smo58765,smo58766]);
const dirsmo66848 = smo58767.getStemDirection();
smo58767.setStemDirection(dirsmo66848);
smo58768.setStemDirection(dirsmo66848);
smo58769.setStemDirection(dirsmo66848);
smo58770.setStemDirection(dirsmo66848);
const smo66848 = new VF.Beam([smo58767,smo58768,smo58769,smo58770]);
const dirsmo66849 = smo58771.getStemDirection();
smo58771.setStemDirection(dirsmo66849);
smo58772.setStemDirection(dirsmo66849);
smo58773.setStemDirection(dirsmo66849);
smo58774.setStemDirection(dirsmo66849);
const smo66849 = new VF.Beam([smo58771,smo58772,smo58773,smo58774]);
const dirsmo66852 = smo63762.getStemDirection();
smo63762.setStemDirection(dirsmo66852);
smo63763.setStemDirection(dirsmo66852);
smo63764.setStemDirection(dirsmo66852);
smo63765.setStemDirection(dirsmo66852);
const smo66852 = new VF.Beam([smo63762,smo63763,smo63764,smo63765]);
const dirsmo66853 = smo63766.getStemDirection();
smo63766.setStemDirection(dirsmo66853);
smo63767.setStemDirection(dirsmo66853);
smo63768.setStemDirection(dirsmo66853);
smo63769.setStemDirection(dirsmo66853);
const smo66853 = new VF.Beam([smo63766,smo63767,smo63768,smo63769]);
const dirsmo66854 = smo63770.getStemDirection();
smo63770.setStemDirection(dirsmo66854);
smo63771.setStemDirection(dirsmo66854);
smo63772.setStemDirection(dirsmo66854);
smo63773.setStemDirection(dirsmo66854);
const smo66854 = new VF.Beam([smo63770,smo63771,smo63772,smo63773]);
const dirsmo66855 = smo63774.getStemDirection();
smo63774.setStemDirection(dirsmo66855);
smo63775.setStemDirection(dirsmo66855);
smo63776.setStemDirection(dirsmo66855);
smo63777.setStemDirection(dirsmo66855);
const smo66855 = new VF.Beam([smo63774,smo63775,smo63776,smo63777]);
 
// formatting measures in staff group smo55345
fmtsmo5878871.format([smo58788v0,smo63791v0], 342);
const stavesmo58788 = new VF.Stave(1450, 2180, 356);
stavesmo58788.setAttribute('id', 'stavesmo58788');
stavesmo58788.setBegBarType(VF.Barline.type.NONE);
stavesmo58788.setContext(context);
stavesmo58788.draw();
smo58788v0.draw(context, stavesmo58788);
smo66846.setContext(context);
smo66846.draw();
smo66847.setContext(context);
smo66847.draw();
smo66848.setContext(context);
smo66848.draw();
smo66849.setContext(context);
smo66849.draw();
const stavesmo63791 = new VF.Stave(1450, 2270, 356);
stavesmo63791.setAttribute('id', 'stavesmo63791');
stavesmo63791.setBegBarType(VF.Barline.type.NONE);
stavesmo63791.setContext(context);
stavesmo63791.draw();
smo63791v0.draw(context, stavesmo63791);
smo66852.setContext(context);
smo66852.draw();
smo66853.setContext(context);
smo66853.draw();
smo66854.setContext(context);
smo66854.draw();
smo66855.setContext(context);
smo66855.draw();
const rightsmo55345stavesmo587881 = new VF.StaveConnector(stavesmo58788, stavesmo63791).setType(0);
rightsmo55345stavesmo587881.setContext(context).draw();
// modifier from 0-46-1-7 to 0-46-1-8
const smo68641 = new VF.StaveTie({ first_note: smo57992, last_note: smo57993, 
          firstNote: smo57992, lastNote: smo57993, first_indices: [0], last_indices: [0]});
smo68641.setContext(context).draw();
// modifier from 0-47-0-3 to 0-47-0-4
const smo68642 = new VF.StaveTie({ first_note: smo58014, last_note: smo58015, 
          firstNote: smo58014, lastNote: smo58015, first_indices: [0], last_indices: [0]});
smo68642.setContext(context).draw();
// modifier from 0-49-1-1 to 0-49-1-2
const smo68643 = new VF.StaveTie({ first_note: smo58082, last_note: smo58083, 
          firstNote: smo58082, lastNote: smo58083, first_indices: [0], last_indices: [0]});
smo68643.setContext(context).draw();
// modifier from 0-49-1-9 to 0-50-1-0
const smo68644 = new VF.StaveTie({ first_note: smo58090, last_note: null, 
          firstNote: smo58090, lastNote: null, first_indices: [0], last_indices: [0]});
smo68644.setContext(context).draw();
// modifier from 0-49-1-9 to 0-50-1-0
const smo68645 = new VF.StaveTie({ first_note: null, last_note: smo58115, 
          firstNote: null, lastNote: smo58115, first_indices: [0], last_indices: [0]});
smo68645.setContext(context).draw();
// modifier from 0-50-1-3 to 0-50-1-4
const smo68646 = new VF.StaveTie({ first_note: smo58118, last_note: smo58119, 
          firstNote: smo58118, lastNote: smo58119, first_indices: [0], last_indices: [0]});
smo68646.setContext(context).draw();
// modifier from 0-51-0-3 to 0-51-0-4
const smo68647 = new VF.StaveTie({ first_note: smo58140, last_note: smo58141, 
          firstNote: smo58140, lastNote: smo58141, first_indices: [0], last_indices: [0]});
smo68647.setContext(context).draw();
// modifier from 0-51-1-6 to 0-51-1-7
const smo68648 = new VF.StaveTie({ first_note: smo58153, last_note: smo58154, 
          firstNote: smo58153, lastNote: smo58154, first_indices: [0], last_indices: [0]});
smo68648.setContext(context).draw();
// modifier from 0-54-1-3 to 0-54-1-4
const smo68649 = new VF.StaveTie({ first_note: smo58245, last_note: smo58246, 
          firstNote: smo58245, lastNote: smo58246, first_indices: [0], last_indices: [0]});
smo68649.setContext(context).draw();
// modifier from 0-55-0-8 to 0-56-0-0
const smo68650 = new VF.StaveTie({ first_note: smo58276, last_note: null, 
          firstNote: smo58276, lastNote: null, first_indices: [0], last_indices: [0]});
smo68650.setContext(context).draw();
// modifier from 0-55-0-8 to 0-56-0-0
const smo68651 = new VF.StaveTie({ first_note: null, last_note: smo58301, 
          firstNote: null, lastNote: smo58301, first_indices: [0], last_indices: [0]});
smo68651.setContext(context).draw();
// modifier from 0-55-1-1 to 0-55-1-2
const smo68652 = new VF.StaveTie({ first_note: smo58278, last_note: smo58279, 
          firstNote: smo58278, lastNote: smo58279, first_indices: [0], last_indices: [0]});
smo68652.setContext(context).draw();
// modifier from 0-56-1-0 to 0-56-1-1
const smo68653 = new VF.StaveTie({ first_note: smo58317, last_note: smo58318, 
          firstNote: smo58317, lastNote: smo58318, first_indices: [0], last_indices: [0]});
smo68653.setContext(context).draw();
// modifier from 0-57-1-1 to 0-57-1-2
const smo68654 = new VF.StaveTie({ first_note: smo58345, last_note: smo58346, 
          firstNote: smo58345, lastNote: smo58346, first_indices: [0], last_indices: [0]});
smo68654.setContext(context).draw();
// modifier from 0-59-0-2 to 0-59-0-3
const smo68655 = new VF.StaveTie({ first_note: smo58392, last_note: smo58393, 
          firstNote: smo58392, lastNote: smo58393, first_indices: [0], last_indices: [0]});
smo68655.setContext(context).draw();
// modifier from 0-60-0-8 to 0-61-0-0
const smo68656 = new VF.StaveTie({ first_note: smo58434, last_note: smo58460, 
          firstNote: smo58434, lastNote: smo58460, first_indices: [0], last_indices: [0]});
smo68656.setContext(context).draw();
// modifier from 0-60-1-8 to 0-60-1-9
const smo68657 = new VF.StaveTie({ first_note: smo58443, last_note: smo58444, 
          firstNote: smo58443, lastNote: smo58444, first_indices: [0], last_indices: [0]});
smo68657.setContext(context).draw();
// modifier from 0-58-1-2 to 0-58-1-3
const smo68658 = new VF.StaveTie({ first_note: smo58371, last_note: smo58372, 
          firstNote: smo58371, lastNote: smo58372, first_indices: [0], last_indices: [0]});
smo68658.setContext(context).draw();
// modifier from 1-49-0-3 to 1-49-0-4
const smo68659 = new VF.StaveTie({ first_note: smo63120, last_note: smo63121, 
          firstNote: smo63120, lastNote: smo63121, first_indices: [0], last_indices: [0]});
smo68659.setContext(context).draw();
// modifier from 1-57-0-2 to 1-57-0-3
const smo68660 = new VF.StaveTie({ first_note: smo63367, last_note: smo63368, 
          firstNote: smo63367, lastNote: smo63368, first_indices: [0], last_indices: [0]});
smo68660.setContext(context).draw();
// modifier from 1-57-0-5 to 1-58-0-0
const smo68661 = new VF.StaveTie({ first_note: smo63370, last_note: smo63399, 
          firstNote: smo63370, lastNote: smo63399, first_indices: [0], last_indices: [0]});
smo68661.setContext(context).draw();
}
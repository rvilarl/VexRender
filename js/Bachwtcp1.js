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
svg.setAttributeNS('', 'viewBox', '0 0 1989 2574');
VF.setMusicFont("Bravura","Gonville","Custom");
const noteHash = {};
const voiceHash = {}
const fmtsmo602840 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo60284v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60284v0ar = [];
const smo60256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60256'] = smo60256;
smo60256.setAttribute('id', 'smo60256');
smo60284v0ar.push(smo60256);
const smo60258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60258'] = smo60258;
smo60258.setAttribute('id', 'smo60258');
smo60284v0ar.push(smo60258);
const smo60259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60259'] = smo60259;
smo60259.setAttribute('id', 'smo60259');
smo60284v0ar.push(smo60259);
const smo60260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60260'] = smo60260;
smo60260.setAttribute('id', 'smo60260');
smo60284v0ar.push(smo60260);
const smo60261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60261'] = smo60261;
smo60261.setAttribute('id', 'smo60261');
smo60284v0ar.push(smo60261);
const smo60262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60262'] = smo60262;
smo60262.setAttribute('id', 'smo60262');
smo60284v0ar.push(smo60262);
const smo60263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60263'] = smo60263;
smo60263.setAttribute('id', 'smo60263');
smo60284v0ar.push(smo60263);
const smo60264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60264'] = smo60264;
smo60264.setAttribute('id', 'smo60264');
smo60284v0ar.push(smo60264);
const smo60265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60265'] = smo60265;
smo60265.setAttribute('id', 'smo60265');
smo60284v0ar.push(smo60265);
const smo60266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60266'] = smo60266;
smo60266.setAttribute('id', 'smo60266');
smo60284v0ar.push(smo60266);
const smo60267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60267'] = smo60267;
smo60267.setAttribute('id', 'smo60267');
smo60284v0ar.push(smo60267);
const smo60268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60268'] = smo60268;
smo60268.setAttribute('id', 'smo60268');
smo60284v0ar.push(smo60268);
const smo60269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60269'] = smo60269;
smo60269.setAttribute('id', 'smo60269');
smo60284v0ar.push(smo60269);
const smo60270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60270'] = smo60270;
smo60270.setAttribute('id', 'smo60270');
smo60284v0ar.push(smo60270);
smo60284v0.addTickables(smo60284v0ar)
fmtsmo602840.joinVoices([smo60284v0]);
const fmtsmo657250 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo65725v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65725v0ar = [];
const smo65704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo65704'] = smo65704;
smo65704.setAttribute('id', 'smo65704');
smo65725v0ar.push(smo65704);
const smo65705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65705'] = smo65705;
smo65705.setAttribute('id', 'smo65705');
smo65705.addModifier(new VF.Dot(), 0);
smo65725v0ar.push(smo65705);
const smo65706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65706'] = smo65706;
smo65706.setAttribute('id', 'smo65706');
smo65725v0ar.push(smo65706);
const smo65707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo65707'] = smo65707;
smo65707.setAttribute('id', 'smo65707');
smo65725v0ar.push(smo65707);
const smo65708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65708'] = smo65708;
smo65708.setAttribute('id', 'smo65708');
smo65708.addModifier(new VF.Dot(), 0);
smo65725v0ar.push(smo65708);
const smo65709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65709'] = smo65709;
smo65709.setAttribute('id', 'smo65709');
smo65725v0ar.push(smo65709);
smo65725v0.addTickables(smo65725v0ar)
fmtsmo657250.joinVoices([smo65725v0]);
const smo65725v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65725v1ar = [];
const smo65710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65710'] = smo65710;
smo65710.setAttribute('id', 'smo65710');
smo65710.setStyle({ fillStyle: "#115511" });
smo65725v1ar.push(smo65710);
const smo65711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65711'] = smo65711;
smo65711.setAttribute('id', 'smo65711');
smo65711.setStyle({ fillStyle: "#115511" });
smo65725v1ar.push(smo65711);
smo65725v1.addTickables(smo65725v1ar)
fmtsmo657250.joinVoices([smo65725v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69641 = smo60258.getStemDirection();
smo60258.setStemDirection(dirsmo69641);
smo60259.setStemDirection(dirsmo69641);
const smo69641 = new VF.Beam([smo60258,smo60259]);
const dirsmo69642 = smo60260.getStemDirection();
smo60260.setStemDirection(dirsmo69642);
smo60261.setStemDirection(dirsmo69642);
smo60262.setStemDirection(dirsmo69642);
smo60263.setStemDirection(dirsmo69642);
const smo69642 = new VF.Beam([smo60260,smo60261,smo60262,smo60263]);
const dirsmo69643 = smo60265.getStemDirection();
smo60265.setStemDirection(dirsmo69643);
smo60266.setStemDirection(dirsmo69643);
const smo69643 = new VF.Beam([smo60265,smo60266]);
const dirsmo69644 = smo60267.getStemDirection();
smo60267.setStemDirection(dirsmo69644);
smo60268.setStemDirection(dirsmo69644);
smo60269.setStemDirection(dirsmo69644);
smo60270.setStemDirection(dirsmo69644);
const smo69644 = new VF.Beam([smo60267,smo60268,smo60269,smo60270]);
 
// formatting measures in staff group smo59060
fmtsmo602840.format([smo60284v0,smo65725v0,smo65725v1], 507);
const stavesmo60284 = new VF.Stave(90, 294, 589);
stavesmo60284.setAttribute('id', 'stavesmo60284');
stavesmo60284.setBegBarType(1);
stavesmo60284.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":112,"name":"Moderato"}'), -1 * 18);
stavesmo60284.addClef('treble');
stavesmo60284.addTimeSignature('4/4');
stavesmo60284.setContext(context);
stavesmo60284.draw();
smo60284v0.draw(context, stavesmo60284);
smo69641.setContext(context);
smo69641.draw();
smo69642.setContext(context);
smo69642.draw();
smo69643.setContext(context);
smo69643.draw();
smo69644.setContext(context);
smo69644.draw();
const stavesmo65725 = new VF.Stave(90, 498, 589);
stavesmo65725.setAttribute('id', 'stavesmo65725');
stavesmo65725.setBegBarType(1);
stavesmo65725.addClef('treble');
stavesmo65725.addTimeSignature('4/4');
stavesmo65725.setContext(context);
stavesmo65725.draw();
smo65725v0.draw(context, stavesmo65725);
smo65725v1.draw(context, stavesmo65725);
const leftsmo59060stavesmo602841 = new VF.StaveConnector(stavesmo60284, stavesmo65725).setType(3);
leftsmo59060stavesmo602841.setContext(context).draw();
const fmtsmo603121 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo60312v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60312v0ar = [];
const smo60285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60285'] = smo60285;
smo60285.setAttribute('id', 'smo60285');
smo60312v0ar.push(smo60285);
const smo60286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60286'] = smo60286;
smo60286.setAttribute('id', 'smo60286');
smo60312v0ar.push(smo60286);
const smo60287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60287'] = smo60287;
smo60287.setAttribute('id', 'smo60287');
smo60312v0ar.push(smo60287);
const smo60288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60288'] = smo60288;
smo60288.setAttribute('id', 'smo60288');
smo60312v0ar.push(smo60288);
const smo60289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60289'] = smo60289;
smo60289.setAttribute('id', 'smo60289');
smo60312v0ar.push(smo60289);
const smo60290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60290'] = smo60290;
smo60290.setAttribute('id', 'smo60290');
smo60312v0ar.push(smo60290);
const smo60291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60291'] = smo60291;
smo60291.setAttribute('id', 'smo60291');
smo60312v0ar.push(smo60291);
const smo60292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60292'] = smo60292;
smo60292.setAttribute('id', 'smo60292');
smo60312v0ar.push(smo60292);
const smo60293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60293'] = smo60293;
smo60293.setAttribute('id', 'smo60293');
smo60312v0ar.push(smo60293);
const smo60294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60294'] = smo60294;
smo60294.setAttribute('id', 'smo60294');
smo60312v0ar.push(smo60294);
const smo60295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60295'] = smo60295;
smo60295.setAttribute('id', 'smo60295');
smo60312v0ar.push(smo60295);
const smo60296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60296'] = smo60296;
smo60296.setAttribute('id', 'smo60296');
smo60312v0ar.push(smo60296);
const smo60297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60297'] = smo60297;
smo60297.setAttribute('id', 'smo60297');
smo60312v0ar.push(smo60297);
const smo60298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60298'] = smo60298;
smo60298.setAttribute('id', 'smo60298');
smo60312v0ar.push(smo60298);
smo60312v0.addTickables(smo60312v0ar)
fmtsmo603121.joinVoices([smo60312v0]);
const fmtsmo657471 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo65747v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65747v0ar = [];
const smo65726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["cn/7/r"]}'))
noteHash['smo65726'] = smo65726;
smo65726.setAttribute('id', 'smo65726');
smo65747v0ar.push(smo65726);
const smo65727 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo65727'] = smo65727;
smo65727.setAttribute('id', 'smo65727');
smo65727.addModifier(new VF.Dot(), 0);
smo65747v0ar.push(smo65727);
const smo65728 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo65728'] = smo65728;
smo65728.setAttribute('id', 'smo65728');
smo65747v0ar.push(smo65728);
const smo65729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["cn/7/r"]}'))
noteHash['smo65729'] = smo65729;
smo65729.setAttribute('id', 'smo65729');
smo65747v0ar.push(smo65729);
const smo65730 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo65730'] = smo65730;
smo65730.setAttribute('id', 'smo65730');
smo65730.addModifier(new VF.Dot(), 0);
smo65747v0ar.push(smo65730);
const smo65731 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo65731'] = smo65731;
smo65731.setAttribute('id', 'smo65731');
smo65747v0ar.push(smo65731);
smo65747v0.addTickables(smo65747v0ar)
fmtsmo657471.joinVoices([smo65747v0]);
const smo65747v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65747v1ar = [];
const smo65732 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65732'] = smo65732;
smo65732.setAttribute('id', 'smo65732');
smo65732.setStyle({ fillStyle: "#115511" });
smo65747v1ar.push(smo65732);
const smo65733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65733'] = smo65733;
smo65733.setAttribute('id', 'smo65733');
smo65733.setStyle({ fillStyle: "#115511" });
smo65747v1ar.push(smo65733);
smo65747v1.addTickables(smo65747v1ar)
fmtsmo657471.joinVoices([smo65747v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69649 = smo60286.getStemDirection();
smo60286.setStemDirection(dirsmo69649);
smo60287.setStemDirection(dirsmo69649);
const smo69649 = new VF.Beam([smo60286,smo60287]);
const dirsmo69650 = smo60288.getStemDirection();
smo60288.setStemDirection(dirsmo69650);
smo60289.setStemDirection(dirsmo69650);
smo60290.setStemDirection(dirsmo69650);
smo60291.setStemDirection(dirsmo69650);
const smo69650 = new VF.Beam([smo60288,smo60289,smo60290,smo60291]);
const dirsmo69651 = smo60293.getStemDirection();
smo60293.setStemDirection(dirsmo69651);
smo60294.setStemDirection(dirsmo69651);
const smo69651 = new VF.Beam([smo60293,smo60294]);
const dirsmo69652 = smo60295.getStemDirection();
smo60295.setStemDirection(dirsmo69652);
smo60296.setStemDirection(dirsmo69652);
smo60297.setStemDirection(dirsmo69652);
smo60298.setStemDirection(dirsmo69652);
const smo69652 = new VF.Beam([smo60295,smo60296,smo60297,smo60298]);
 
// formatting measures in staff group smo59060
fmtsmo603121.format([smo60312v0,smo65747v0,smo65747v1], 518);
const stavesmo60312 = new VF.Stave(679, 294, 566);
stavesmo60312.setAttribute('id', 'stavesmo60312');
stavesmo60312.setBegBarType(VF.Barline.type.NONE);
stavesmo60312.setContext(context);
stavesmo60312.draw();
smo60312v0.draw(context, stavesmo60312);
smo69649.setContext(context);
smo69649.draw();
smo69650.setContext(context);
smo69650.draw();
smo69651.setContext(context);
smo69651.draw();
smo69652.setContext(context);
smo69652.draw();
const stavesmo65747 = new VF.Stave(679, 498, 566);
stavesmo65747.setAttribute('id', 'stavesmo65747');
stavesmo65747.setBegBarType(VF.Barline.type.NONE);
stavesmo65747.addClef('bass');
stavesmo65747.setContext(context);
stavesmo65747.draw();
smo65747v0.draw(context, stavesmo65747);
smo65747v1.draw(context, stavesmo65747);
const fmtsmo603442 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo60344v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60344v0ar = [];
const smo60313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60313'] = smo60313;
smo60313.setAttribute('id', 'smo60313');
smo60344v0ar.push(smo60313);
const smo60314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60314'] = smo60314;
smo60314.setAttribute('id', 'smo60314');
smo60344v0ar.push(smo60314);
const smo60315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60315'] = smo60315;
smo60315.setAttribute('id', 'smo60315');
smo60344v0ar.push(smo60315);
const smo60316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60316'] = smo60316;
smo60316.setAttribute('id', 'smo60316');
smo60344v0ar.push(smo60316);
const smo60317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60317'] = smo60317;
smo60317.setAttribute('id', 'smo60317');
smo60344v0ar.push(smo60317);
const smo60318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60318'] = smo60318;
smo60318.setAttribute('id', 'smo60318');
smo60344v0ar.push(smo60318);
const smo60319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60319'] = smo60319;
smo60319.setAttribute('id', 'smo60319');
smo60344v0ar.push(smo60319);
const smo60320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60320'] = smo60320;
smo60320.setAttribute('id', 'smo60320');
smo60344v0ar.push(smo60320);
const smo60321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60321'] = smo60321;
smo60321.setAttribute('id', 'smo60321');
smo60344v0ar.push(smo60321);
const smo60322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60322'] = smo60322;
smo60322.setAttribute('id', 'smo60322');
smo60344v0ar.push(smo60322);
const smo60323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60323'] = smo60323;
smo60323.setAttribute('id', 'smo60323');
smo60344v0ar.push(smo60323);
const smo60324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60324'] = smo60324;
smo60324.setAttribute('id', 'smo60324');
smo60344v0ar.push(smo60324);
const smo60325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60325'] = smo60325;
smo60325.setAttribute('id', 'smo60325');
smo60344v0ar.push(smo60325);
const smo60326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60326'] = smo60326;
smo60326.setAttribute('id', 'smo60326');
smo60344v0ar.push(smo60326);
smo60344v0.addTickables(smo60344v0ar)
fmtsmo603442.joinVoices([smo60344v0]);
const smo60344v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60344v1ar = [];
const smo60327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60327'] = smo60327;
smo60327.setAttribute('id', 'smo60327');
smo60327.setStyle({ fillStyle: '#aaaaaa7f' });
smo60344v1ar.push(smo60327);
const smo60328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60328'] = smo60328;
smo60328.setAttribute('id', 'smo60328');
smo60328.setStyle({ fillStyle: '#aaaaaa7f' });
smo60328.addModifier(new VF.Dot(), 0);
smo60328.addModifier(new VF.Dot(), 0);
smo60344v1ar.push(smo60328);
const smo60329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60329'] = smo60329;
smo60329.setAttribute('id', 'smo60329');
smo60329.setStyle({ fillStyle: '#aaaaaa7f' });
smo60344v1ar.push(smo60329);
const smo60330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60330'] = smo60330;
smo60330.setAttribute('id', 'smo60330');
smo60330.setStyle({ fillStyle: '#aaaaaa7f' });
smo60330.addModifier(new VF.Dot(), 0);
smo60330.addModifier(new VF.Dot(), 0);
smo60344v1ar.push(smo60330);
smo60344v1.addTickables(smo60344v1ar)
fmtsmo603442.joinVoices([smo60344v1]);
const fmtsmo657692 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo65769v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65769v0ar = [];
const smo65748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bb/6/r"]}'))
noteHash['smo65748'] = smo65748;
smo65748.setAttribute('id', 'smo65748');
smo65769v0ar.push(smo65748);
const smo65749 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65749'] = smo65749;
smo65749.setAttribute('id', 'smo65749');
smo65749.addModifier(new VF.Dot(), 0);
smo65769v0ar.push(smo65749);
const smo65750 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65750'] = smo65750;
smo65750.setAttribute('id', 'smo65750');
smo65769v0ar.push(smo65750);
const smo65751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["cn/7/r"]}'))
noteHash['smo65751'] = smo65751;
smo65751.setAttribute('id', 'smo65751');
smo65769v0ar.push(smo65751);
const smo65752 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65752'] = smo65752;
smo65752.setAttribute('id', 'smo65752');
smo65752.addModifier(new VF.Dot(), 0);
smo65769v0ar.push(smo65752);
const smo65753 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65753'] = smo65753;
smo65753.setAttribute('id', 'smo65753');
smo65769v0ar.push(smo65753);
smo65769v0.addTickables(smo65769v0ar)
fmtsmo657692.joinVoices([smo65769v0]);
const smo65769v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65769v1ar = [];
const smo65754 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65754'] = smo65754;
smo65754.setAttribute('id', 'smo65754');
smo65754.setStyle({ fillStyle: "#115511" });
smo65769v1ar.push(smo65754);
const smo65755 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65755'] = smo65755;
smo65755.setAttribute('id', 'smo65755');
smo65755.setStyle({ fillStyle: "#115511" });
smo65769v1ar.push(smo65755);
smo65769v1.addTickables(smo65769v1ar)
fmtsmo657692.joinVoices([smo65769v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69657 = smo60314.getStemDirection();
smo60314.setStemDirection(dirsmo69657);
smo60315.setStemDirection(dirsmo69657);
const smo69657 = new VF.Beam([smo60314,smo60315]);
const dirsmo69658 = smo60316.getStemDirection();
smo60316.setStemDirection(dirsmo69658);
smo60317.setStemDirection(dirsmo69658);
smo60318.setStemDirection(dirsmo69658);
smo60319.setStemDirection(dirsmo69658);
const smo69658 = new VF.Beam([smo60316,smo60317,smo60318,smo60319]);
const dirsmo69659 = smo60321.getStemDirection();
smo60321.setStemDirection(dirsmo69659);
smo60322.setStemDirection(dirsmo69659);
const smo69659 = new VF.Beam([smo60321,smo60322]);
const dirsmo69660 = smo60323.getStemDirection();
smo60323.setStemDirection(dirsmo69660);
smo60324.setStemDirection(dirsmo69660);
smo60325.setStemDirection(dirsmo69660);
smo60326.setStemDirection(dirsmo69660);
const smo69660 = new VF.Beam([smo60323,smo60324,smo60325,smo60326]);
 
// formatting measures in staff group smo59060
fmtsmo603442.format([smo60344v0,smo60344v1,smo65769v0,smo65769v1], 548);
const stavesmo60344 = new VF.Stave(1245, 294, 562);
stavesmo60344.setAttribute('id', 'stavesmo60344');
stavesmo60344.setBegBarType(VF.Barline.type.NONE);
stavesmo60344.setContext(context);
stavesmo60344.draw();
smo60344v0.draw(context, stavesmo60344);
smo60344v1.draw(context, stavesmo60344);
smo69657.setContext(context);
smo69657.draw();
smo69658.setContext(context);
smo69658.draw();
smo69659.setContext(context);
smo69659.draw();
smo69660.setContext(context);
smo69660.draw();
const stavesmo65769 = new VF.Stave(1245, 498, 562);
stavesmo65769.setAttribute('id', 'stavesmo65769');
stavesmo65769.setBegBarType(VF.Barline.type.NONE);
stavesmo65769.setContext(context);
stavesmo65769.draw();
smo65769v0.draw(context, stavesmo65769);
smo65769v1.draw(context, stavesmo65769);
const rightsmo59060stavesmo603441 = new VF.StaveConnector(stavesmo60344, stavesmo65769).setType(0);
rightsmo59060stavesmo603441.setContext(context).draw();
const fmtsmo603763 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo60376v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60376v0ar = [];
const smo60345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60345'] = smo60345;
smo60345.setAttribute('id', 'smo60345');
smo60376v0ar.push(smo60345);
const smo60346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60346'] = smo60346;
smo60346.setAttribute('id', 'smo60346');
smo60376v0ar.push(smo60346);
const smo60347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60347'] = smo60347;
smo60347.setAttribute('id', 'smo60347');
smo60376v0ar.push(smo60347);
const smo60348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60348'] = smo60348;
smo60348.setAttribute('id', 'smo60348');
smo60376v0ar.push(smo60348);
const smo60349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60349'] = smo60349;
smo60349.setAttribute('id', 'smo60349');
smo60376v0ar.push(smo60349);
const smo60350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60350'] = smo60350;
smo60350.setAttribute('id', 'smo60350');
smo60376v0ar.push(smo60350);
const smo60351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60351'] = smo60351;
smo60351.setAttribute('id', 'smo60351');
smo60376v0ar.push(smo60351);
const smo60352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60352'] = smo60352;
smo60352.setAttribute('id', 'smo60352');
smo60376v0ar.push(smo60352);
const smo60353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60353'] = smo60353;
smo60353.setAttribute('id', 'smo60353');
smo60376v0ar.push(smo60353);
const smo60354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60354'] = smo60354;
smo60354.setAttribute('id', 'smo60354');
smo60376v0ar.push(smo60354);
const smo60355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60355'] = smo60355;
smo60355.setAttribute('id', 'smo60355');
smo60376v0ar.push(smo60355);
const smo60356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60356'] = smo60356;
smo60356.setAttribute('id', 'smo60356');
smo60376v0ar.push(smo60356);
const smo60357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60357'] = smo60357;
smo60357.setAttribute('id', 'smo60357');
smo60376v0ar.push(smo60357);
const smo60358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60358'] = smo60358;
smo60358.setAttribute('id', 'smo60358');
smo60376v0ar.push(smo60358);
smo60376v0.addTickables(smo60376v0ar)
fmtsmo603763.joinVoices([smo60376v0]);
const smo60376v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60376v1ar = [];
const smo60359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60359'] = smo60359;
smo60359.setAttribute('id', 'smo60359');
smo60359.setStyle({ fillStyle: '#aaaaaa7f' });
smo60376v1ar.push(smo60359);
const smo60360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60360'] = smo60360;
smo60360.setAttribute('id', 'smo60360');
smo60360.setStyle({ fillStyle: '#aaaaaa7f' });
smo60360.addModifier(new VF.Dot(), 0);
smo60360.addModifier(new VF.Dot(), 0);
smo60376v1ar.push(smo60360);
const smo60361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60361'] = smo60361;
smo60361.setAttribute('id', 'smo60361');
smo60361.setStyle({ fillStyle: '#aaaaaa7f' });
smo60376v1ar.push(smo60361);
const smo60362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60362'] = smo60362;
smo60362.setAttribute('id', 'smo60362');
smo60362.setStyle({ fillStyle: '#aaaaaa7f' });
smo60362.addModifier(new VF.Dot(), 0);
smo60362.addModifier(new VF.Dot(), 0);
smo60376v1ar.push(smo60362);
smo60376v1.addTickables(smo60376v1ar)
fmtsmo603763.joinVoices([smo60376v1]);
const fmtsmo657913 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo65791v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65791v0ar = [];
const smo65770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo65770'] = smo65770;
smo65770.setAttribute('id', 'smo65770');
smo65791v0ar.push(smo65770);
const smo65771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65771'] = smo65771;
smo65771.setAttribute('id', 'smo65771');
smo65771.addModifier(new VF.Dot(), 0);
smo65791v0ar.push(smo65771);
const smo65772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65772'] = smo65772;
smo65772.setAttribute('id', 'smo65772');
smo65791v0ar.push(smo65772);
const smo65773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo65773'] = smo65773;
smo65773.setAttribute('id', 'smo65773');
smo65791v0ar.push(smo65773);
const smo65774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65774'] = smo65774;
smo65774.setAttribute('id', 'smo65774');
smo65774.addModifier(new VF.Dot(), 0);
smo65791v0ar.push(smo65774);
const smo65775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65775'] = smo65775;
smo65775.setAttribute('id', 'smo65775');
smo65791v0ar.push(smo65775);
smo65791v0.addTickables(smo65791v0ar)
fmtsmo657913.joinVoices([smo65791v0]);
const smo65791v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65791v1ar = [];
const smo65776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65776'] = smo65776;
smo65776.setAttribute('id', 'smo65776');
smo65776.setStyle({ fillStyle: "#115511" });
smo65791v1ar.push(smo65776);
const smo65777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65777'] = smo65777;
smo65777.setAttribute('id', 'smo65777');
smo65777.setStyle({ fillStyle: "#115511" });
smo65791v1ar.push(smo65777);
smo65791v1.addTickables(smo65791v1ar)
fmtsmo657913.joinVoices([smo65791v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69673 = smo60346.getStemDirection();
smo60346.setStemDirection(dirsmo69673);
smo60347.setStemDirection(dirsmo69673);
const smo69673 = new VF.Beam([smo60346,smo60347]);
const dirsmo69674 = smo60348.getStemDirection();
smo60348.setStemDirection(dirsmo69674);
smo60349.setStemDirection(dirsmo69674);
smo60350.setStemDirection(dirsmo69674);
smo60351.setStemDirection(dirsmo69674);
const smo69674 = new VF.Beam([smo60348,smo60349,smo60350,smo60351]);
const dirsmo69675 = smo60353.getStemDirection();
smo60353.setStemDirection(dirsmo69675);
smo60354.setStemDirection(dirsmo69675);
const smo69675 = new VF.Beam([smo60353,smo60354]);
const dirsmo69676 = smo60355.getStemDirection();
smo60355.setStemDirection(dirsmo69676);
smo60356.setStemDirection(dirsmo69676);
smo60357.setStemDirection(dirsmo69676);
smo60358.setStemDirection(dirsmo69676);
const smo69676 = new VF.Beam([smo60355,smo60356,smo60357,smo60358]);
 
// formatting measures in staff group smo59060
fmtsmo603763.format([smo60376v0,smo60376v1,smo65791v0,smo65791v1], 527);
const stavesmo60376 = new VF.Stave(90, 692, 585);
stavesmo60376.setAttribute('id', 'stavesmo60376');
stavesmo60376.setBegBarType(1);
stavesmo60376.addClef('treble');
stavesmo60376.setContext(context);
stavesmo60376.draw();
smo60376v0.draw(context, stavesmo60376);
smo60376v1.draw(context, stavesmo60376);
smo69673.setContext(context);
smo69673.draw();
smo69674.setContext(context);
smo69674.draw();
smo69675.setContext(context);
smo69675.draw();
smo69676.setContext(context);
smo69676.draw();
const stavesmo65791 = new VF.Stave(90, 766, 585);
stavesmo65791.setAttribute('id', 'stavesmo65791');
stavesmo65791.setBegBarType(1);
stavesmo65791.addClef('treble');
stavesmo65791.setContext(context);
stavesmo65791.draw();
smo65791v0.draw(context, stavesmo65791);
smo65791v1.draw(context, stavesmo65791);
const leftsmo59060stavesmo603761 = new VF.StaveConnector(stavesmo60376, stavesmo65791).setType(3);
leftsmo59060stavesmo603761.setContext(context).draw();
const fmtsmo604084 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo60408v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60408v0ar = [];
const smo60377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60377'] = smo60377;
smo60377.setAttribute('id', 'smo60377');
smo60408v0ar.push(smo60377);
const smo60378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60378'] = smo60378;
smo60378.setAttribute('id', 'smo60378');
smo60408v0ar.push(smo60378);
const smo60379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60379'] = smo60379;
smo60379.setAttribute('id', 'smo60379');
smo60408v0ar.push(smo60379);
const smo60380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo60380'] = smo60380;
smo60380.setAttribute('id', 'smo60380');
smo60408v0ar.push(smo60380);
const smo60381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60381'] = smo60381;
smo60381.setAttribute('id', 'smo60381');
smo60408v0ar.push(smo60381);
const smo60382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60382'] = smo60382;
smo60382.setAttribute('id', 'smo60382');
smo60408v0ar.push(smo60382);
const smo60383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo60383'] = smo60383;
smo60383.setAttribute('id', 'smo60383');
smo60408v0ar.push(smo60383);
const smo60384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60384'] = smo60384;
smo60384.setAttribute('id', 'smo60384');
smo60408v0ar.push(smo60384);
const smo60385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60385'] = smo60385;
smo60385.setAttribute('id', 'smo60385');
smo60408v0ar.push(smo60385);
const smo60386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60386'] = smo60386;
smo60386.setAttribute('id', 'smo60386');
smo60408v0ar.push(smo60386);
const smo60387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo60387'] = smo60387;
smo60387.setAttribute('id', 'smo60387');
smo60408v0ar.push(smo60387);
const smo60388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60388'] = smo60388;
smo60388.setAttribute('id', 'smo60388');
smo60408v0ar.push(smo60388);
const smo60389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60389'] = smo60389;
smo60389.setAttribute('id', 'smo60389');
smo60408v0ar.push(smo60389);
const smo60390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo60390'] = smo60390;
smo60390.setAttribute('id', 'smo60390');
smo60408v0ar.push(smo60390);
smo60408v0.addTickables(smo60408v0ar)
fmtsmo604084.joinVoices([smo60408v0]);
const smo60408v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60408v1ar = [];
const smo60391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60391'] = smo60391;
smo60391.setAttribute('id', 'smo60391');
smo60391.setStyle({ fillStyle: '#aaaaaa7f' });
smo60408v1ar.push(smo60391);
const smo60392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60392'] = smo60392;
smo60392.setAttribute('id', 'smo60392');
smo60392.setStyle({ fillStyle: '#aaaaaa7f' });
smo60392.addModifier(new VF.Dot(), 0);
smo60392.addModifier(new VF.Dot(), 0);
smo60408v1ar.push(smo60392);
const smo60393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60393'] = smo60393;
smo60393.setAttribute('id', 'smo60393');
smo60393.setStyle({ fillStyle: '#aaaaaa7f' });
smo60408v1ar.push(smo60393);
const smo60394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60394'] = smo60394;
smo60394.setAttribute('id', 'smo60394');
smo60394.setStyle({ fillStyle: '#aaaaaa7f' });
smo60394.addModifier(new VF.Dot(), 0);
smo60394.addModifier(new VF.Dot(), 0);
smo60408v1ar.push(smo60394);
smo60408v1.addTickables(smo60408v1ar)
fmtsmo604084.joinVoices([smo60408v1]);
const fmtsmo658134 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo65813v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65813v0ar = [];
const smo65792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo65792'] = smo65792;
smo65792.setAttribute('id', 'smo65792');
smo65813v0ar.push(smo65792);
const smo65793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65793'] = smo65793;
smo65793.setAttribute('id', 'smo65793');
smo65793.addModifier(new VF.Dot(), 0);
smo65813v0ar.push(smo65793);
const smo65794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65794'] = smo65794;
smo65794.setAttribute('id', 'smo65794');
smo65813v0ar.push(smo65794);
const smo65795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo65795'] = smo65795;
smo65795.setAttribute('id', 'smo65795');
smo65813v0ar.push(smo65795);
const smo65796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65796'] = smo65796;
smo65796.setAttribute('id', 'smo65796');
smo65796.addModifier(new VF.Dot(), 0);
smo65813v0ar.push(smo65796);
const smo65797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65797'] = smo65797;
smo65797.setAttribute('id', 'smo65797');
smo65813v0ar.push(smo65797);
smo65813v0.addTickables(smo65813v0ar)
fmtsmo658134.joinVoices([smo65813v0]);
const smo65813v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65813v1ar = [];
const smo65798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65798'] = smo65798;
smo65798.setAttribute('id', 'smo65798');
smo65798.setStyle({ fillStyle: "#115511" });
smo65813v1ar.push(smo65798);
const smo65799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65799'] = smo65799;
smo65799.setAttribute('id', 'smo65799');
smo65799.setStyle({ fillStyle: "#115511" });
smo65813v1ar.push(smo65799);
smo65813v1.addTickables(smo65813v1ar)
fmtsmo658134.joinVoices([smo65813v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69681 = smo60378.getStemDirection();
smo60378.setStemDirection(dirsmo69681);
smo60379.setStemDirection(dirsmo69681);
const smo69681 = new VF.Beam([smo60378,smo60379]);
const dirsmo69682 = smo60380.getStemDirection();
smo60380.setStemDirection(dirsmo69682);
smo60381.setStemDirection(dirsmo69682);
smo60382.setStemDirection(dirsmo69682);
smo60383.setStemDirection(dirsmo69682);
const smo69682 = new VF.Beam([smo60380,smo60381,smo60382,smo60383]);
const dirsmo69683 = smo60385.getStemDirection();
smo60385.setStemDirection(dirsmo69683);
smo60386.setStemDirection(dirsmo69683);
const smo69683 = new VF.Beam([smo60385,smo60386]);
const dirsmo69684 = smo60387.getStemDirection();
smo60387.setStemDirection(dirsmo69684);
smo60388.setStemDirection(dirsmo69684);
smo60389.setStemDirection(dirsmo69684);
smo60390.setStemDirection(dirsmo69684);
const smo69684 = new VF.Beam([smo60387,smo60388,smo60389,smo60390]);
 
// formatting measures in staff group smo59060
fmtsmo604084.format([smo60408v0,smo60408v1,smo65813v0,smo65813v1], 527);
const stavesmo60408 = new VF.Stave(675, 692, 541);
stavesmo60408.setAttribute('id', 'stavesmo60408');
stavesmo60408.setBegBarType(VF.Barline.type.NONE);
stavesmo60408.setContext(context);
stavesmo60408.draw();
smo60408v0.draw(context, stavesmo60408);
smo60408v1.draw(context, stavesmo60408);
smo69681.setContext(context);
smo69681.draw();
smo69682.setContext(context);
smo69682.draw();
smo69683.setContext(context);
smo69683.draw();
smo69684.setContext(context);
smo69684.draw();
const stavesmo65813 = new VF.Stave(675, 766, 541);
stavesmo65813.setAttribute('id', 'stavesmo65813');
stavesmo65813.setBegBarType(VF.Barline.type.NONE);
stavesmo65813.setContext(context);
stavesmo65813.draw();
smo65813v0.draw(context, stavesmo65813);
smo65813v1.draw(context, stavesmo65813);
const fmtsmo604405 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo60440v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60440v0ar = [];
const smo60409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60409'] = smo60409;
smo60409.setAttribute('id', 'smo60409');
smo60440v0ar.push(smo60409);
const smo60410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60410'] = smo60410;
smo60410.setAttribute('id', 'smo60410');
const smo604100acc = new VF.Accidental('#');
smo60410.addModifier(smo604100acc, 0);
smo60440v0ar.push(smo60410);
const smo60411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60411'] = smo60411;
smo60411.setAttribute('id', 'smo60411');
smo60440v0ar.push(smo60411);
const smo60412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60412'] = smo60412;
smo60412.setAttribute('id', 'smo60412');
smo60440v0ar.push(smo60412);
const smo60413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60413'] = smo60413;
smo60413.setAttribute('id', 'smo60413');
smo60440v0ar.push(smo60413);
const smo60414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60414'] = smo60414;
smo60414.setAttribute('id', 'smo60414');
smo60440v0ar.push(smo60414);
const smo60415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60415'] = smo60415;
smo60415.setAttribute('id', 'smo60415');
smo60440v0ar.push(smo60415);
const smo60416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60416'] = smo60416;
smo60416.setAttribute('id', 'smo60416');
smo60440v0ar.push(smo60416);
const smo60417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60417'] = smo60417;
smo60417.setAttribute('id', 'smo60417');
smo60440v0ar.push(smo60417);
const smo60418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60418'] = smo60418;
smo60418.setAttribute('id', 'smo60418');
smo60440v0ar.push(smo60418);
const smo60419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60419'] = smo60419;
smo60419.setAttribute('id', 'smo60419');
smo60440v0ar.push(smo60419);
const smo60420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60420'] = smo60420;
smo60420.setAttribute('id', 'smo60420');
smo60440v0ar.push(smo60420);
const smo60421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60421'] = smo60421;
smo60421.setAttribute('id', 'smo60421');
smo60440v0ar.push(smo60421);
const smo60422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60422'] = smo60422;
smo60422.setAttribute('id', 'smo60422');
smo60440v0ar.push(smo60422);
smo60440v0.addTickables(smo60440v0ar)
fmtsmo604405.joinVoices([smo60440v0]);
const smo60440v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60440v1ar = [];
const smo60423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60423'] = smo60423;
smo60423.setAttribute('id', 'smo60423');
smo60423.setStyle({ fillStyle: '#aaaaaa7f' });
smo60440v1ar.push(smo60423);
const smo60424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60424'] = smo60424;
smo60424.setAttribute('id', 'smo60424');
smo60424.setStyle({ fillStyle: '#aaaaaa7f' });
smo60424.addModifier(new VF.Dot(), 0);
smo60424.addModifier(new VF.Dot(), 0);
smo60440v1ar.push(smo60424);
const smo60425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60425'] = smo60425;
smo60425.setAttribute('id', 'smo60425');
smo60425.setStyle({ fillStyle: '#aaaaaa7f' });
smo60440v1ar.push(smo60425);
const smo60426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60426'] = smo60426;
smo60426.setAttribute('id', 'smo60426');
smo60426.setStyle({ fillStyle: '#aaaaaa7f' });
smo60426.addModifier(new VF.Dot(), 0);
smo60426.addModifier(new VF.Dot(), 0);
smo60440v1ar.push(smo60426);
smo60440v1.addTickables(smo60440v1ar)
fmtsmo604405.joinVoices([smo60440v1]);
const fmtsmo658355 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo65835v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65835v0ar = [];
const smo65814 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo65814'] = smo65814;
smo65814.setAttribute('id', 'smo65814');
smo65835v0ar.push(smo65814);
const smo65815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65815'] = smo65815;
smo65815.setAttribute('id', 'smo65815');
smo65815.addModifier(new VF.Dot(), 0);
smo65835v0ar.push(smo65815);
const smo65816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65816'] = smo65816;
smo65816.setAttribute('id', 'smo65816');
smo65835v0ar.push(smo65816);
const smo65817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo65817'] = smo65817;
smo65817.setAttribute('id', 'smo65817');
smo65835v0ar.push(smo65817);
const smo65818 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65818'] = smo65818;
smo65818.setAttribute('id', 'smo65818');
smo65818.addModifier(new VF.Dot(), 0);
smo65835v0ar.push(smo65818);
const smo65819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65819'] = smo65819;
smo65819.setAttribute('id', 'smo65819');
smo65835v0ar.push(smo65819);
smo65835v0.addTickables(smo65835v0ar)
fmtsmo658355.joinVoices([smo65835v0]);
const smo65835v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65835v1ar = [];
const smo65820 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65820'] = smo65820;
smo65820.setAttribute('id', 'smo65820');
smo65820.setStyle({ fillStyle: "#115511" });
smo65835v1ar.push(smo65820);
const smo65821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65821'] = smo65821;
smo65821.setAttribute('id', 'smo65821');
smo65821.setStyle({ fillStyle: "#115511" });
smo65835v1ar.push(smo65821);
smo65835v1.addTickables(smo65835v1ar)
fmtsmo658355.joinVoices([smo65835v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69689 = smo60410.getStemDirection();
smo60410.setStemDirection(dirsmo69689);
smo60411.setStemDirection(dirsmo69689);
const smo69689 = new VF.Beam([smo60410,smo60411]);
const dirsmo69690 = smo60412.getStemDirection();
smo60412.setStemDirection(dirsmo69690);
smo60413.setStemDirection(dirsmo69690);
smo60414.setStemDirection(dirsmo69690);
smo60415.setStemDirection(dirsmo69690);
const smo69690 = new VF.Beam([smo60412,smo60413,smo60414,smo60415]);
const dirsmo69691 = smo60417.getStemDirection();
smo60417.setStemDirection(dirsmo69691);
smo60418.setStemDirection(dirsmo69691);
const smo69691 = new VF.Beam([smo60417,smo60418]);
const dirsmo69692 = smo60419.getStemDirection();
smo60419.setStemDirection(dirsmo69692);
smo60420.setStemDirection(dirsmo69692);
smo60421.setStemDirection(dirsmo69692);
smo60422.setStemDirection(dirsmo69692);
const smo69692 = new VF.Beam([smo60419,smo60420,smo60421,smo60422]);
 
// formatting measures in staff group smo59060
fmtsmo604405.format([smo60440v0,smo60440v1,smo65835v0,smo65835v1], 577);
const stavesmo60440 = new VF.Stave(1216, 692, 591);
stavesmo60440.setAttribute('id', 'stavesmo60440');
stavesmo60440.setBegBarType(VF.Barline.type.NONE);
stavesmo60440.setContext(context);
stavesmo60440.draw();
smo60440v0.draw(context, stavesmo60440);
smo60440v1.draw(context, stavesmo60440);
smo69689.setContext(context);
smo69689.draw();
smo69690.setContext(context);
smo69690.draw();
smo69691.setContext(context);
smo69691.draw();
smo69692.setContext(context);
smo69692.draw();
const stavesmo65835 = new VF.Stave(1216, 766, 591);
stavesmo65835.setAttribute('id', 'stavesmo65835');
stavesmo65835.setBegBarType(VF.Barline.type.NONE);
stavesmo65835.setContext(context);
stavesmo65835.draw();
smo65835v0.draw(context, stavesmo65835);
smo65835v1.draw(context, stavesmo65835);
const rightsmo59060stavesmo604401 = new VF.StaveConnector(stavesmo60440, stavesmo65835).setType(0);
rightsmo59060stavesmo604401.setContext(context).draw();
const fmtsmo604726 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo60472v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60472v0ar = [];
const smo60441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60441'] = smo60441;
smo60441.setAttribute('id', 'smo60441');
smo60472v0ar.push(smo60441);
const smo60442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60442'] = smo60442;
smo60442.setAttribute('id', 'smo60442');
smo60472v0ar.push(smo60442);
const smo60443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60443'] = smo60443;
smo60443.setAttribute('id', 'smo60443');
smo60472v0ar.push(smo60443);
const smo60444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60444'] = smo60444;
smo60444.setAttribute('id', 'smo60444');
smo60472v0ar.push(smo60444);
const smo60445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60445'] = smo60445;
smo60445.setAttribute('id', 'smo60445');
smo60472v0ar.push(smo60445);
const smo60446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60446'] = smo60446;
smo60446.setAttribute('id', 'smo60446');
smo60472v0ar.push(smo60446);
const smo60447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60447'] = smo60447;
smo60447.setAttribute('id', 'smo60447');
smo60472v0ar.push(smo60447);
const smo60448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60448'] = smo60448;
smo60448.setAttribute('id', 'smo60448');
smo60472v0ar.push(smo60448);
const smo60449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60449'] = smo60449;
smo60449.setAttribute('id', 'smo60449');
smo60472v0ar.push(smo60449);
const smo60450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60450'] = smo60450;
smo60450.setAttribute('id', 'smo60450');
smo60472v0ar.push(smo60450);
const smo60451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60451'] = smo60451;
smo60451.setAttribute('id', 'smo60451');
smo60472v0ar.push(smo60451);
const smo60452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60452'] = smo60452;
smo60452.setAttribute('id', 'smo60452');
smo60472v0ar.push(smo60452);
const smo60453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60453'] = smo60453;
smo60453.setAttribute('id', 'smo60453');
smo60472v0ar.push(smo60453);
const smo60454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60454'] = smo60454;
smo60454.setAttribute('id', 'smo60454');
smo60472v0ar.push(smo60454);
smo60472v0.addTickables(smo60472v0ar)
fmtsmo604726.joinVoices([smo60472v0]);
const smo60472v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60472v1ar = [];
const smo60455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60455'] = smo60455;
smo60455.setAttribute('id', 'smo60455');
smo60455.setStyle({ fillStyle: '#aaaaaa7f' });
smo60472v1ar.push(smo60455);
const smo60456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60456'] = smo60456;
smo60456.setAttribute('id', 'smo60456');
smo60456.setStyle({ fillStyle: '#aaaaaa7f' });
smo60456.addModifier(new VF.Dot(), 0);
smo60456.addModifier(new VF.Dot(), 0);
smo60472v1ar.push(smo60456);
const smo60457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60457'] = smo60457;
smo60457.setAttribute('id', 'smo60457');
smo60457.setStyle({ fillStyle: '#aaaaaa7f' });
smo60472v1ar.push(smo60457);
const smo60458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60458'] = smo60458;
smo60458.setAttribute('id', 'smo60458');
smo60458.setStyle({ fillStyle: '#aaaaaa7f' });
smo60458.addModifier(new VF.Dot(), 0);
smo60458.addModifier(new VF.Dot(), 0);
smo60472v1ar.push(smo60458);
smo60472v1.addTickables(smo60472v1ar)
fmtsmo604726.joinVoices([smo60472v1]);
const fmtsmo658576 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo65857v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65857v0ar = [];
const smo65836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo65836'] = smo65836;
smo65836.setAttribute('id', 'smo65836');
smo65857v0ar.push(smo65836);
const smo65837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65837'] = smo65837;
smo65837.setAttribute('id', 'smo65837');
smo65837.addModifier(new VF.Dot(), 0);
smo65857v0ar.push(smo65837);
const smo65838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65838'] = smo65838;
smo65838.setAttribute('id', 'smo65838');
smo65857v0ar.push(smo65838);
const smo65839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo65839'] = smo65839;
smo65839.setAttribute('id', 'smo65839');
smo65857v0ar.push(smo65839);
const smo65840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65840'] = smo65840;
smo65840.setAttribute('id', 'smo65840');
smo65840.addModifier(new VF.Dot(), 0);
smo65857v0ar.push(smo65840);
const smo65841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65841'] = smo65841;
smo65841.setAttribute('id', 'smo65841');
smo65857v0ar.push(smo65841);
smo65857v0.addTickables(smo65857v0ar)
fmtsmo658576.joinVoices([smo65857v0]);
const smo65857v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65857v1ar = [];
const smo65842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65842'] = smo65842;
smo65842.setAttribute('id', 'smo65842');
smo65842.setStyle({ fillStyle: "#115511" });
smo65857v1ar.push(smo65842);
const smo65843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65843'] = smo65843;
smo65843.setAttribute('id', 'smo65843');
smo65843.setStyle({ fillStyle: "#115511" });
smo65857v1ar.push(smo65843);
smo65857v1.addTickables(smo65857v1ar)
fmtsmo658576.joinVoices([smo65857v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69705 = smo60442.getStemDirection();
smo60442.setStemDirection(dirsmo69705);
smo60443.setStemDirection(dirsmo69705);
const smo69705 = new VF.Beam([smo60442,smo60443]);
const dirsmo69706 = smo60444.getStemDirection();
smo60444.setStemDirection(dirsmo69706);
smo60445.setStemDirection(dirsmo69706);
smo60446.setStemDirection(dirsmo69706);
smo60447.setStemDirection(dirsmo69706);
const smo69706 = new VF.Beam([smo60444,smo60445,smo60446,smo60447]);
const dirsmo69707 = smo60449.getStemDirection();
smo60449.setStemDirection(dirsmo69707);
smo60450.setStemDirection(dirsmo69707);
const smo69707 = new VF.Beam([smo60449,smo60450]);
const dirsmo69708 = smo60451.getStemDirection();
smo60451.setStemDirection(dirsmo69708);
smo60452.setStemDirection(dirsmo69708);
smo60453.setStemDirection(dirsmo69708);
smo60454.setStemDirection(dirsmo69708);
const smo69708 = new VF.Beam([smo60451,smo60452,smo60453,smo60454]);
 
// formatting measures in staff group smo59060
fmtsmo604726.format([smo60472v0,smo60472v1,smo65857v0,smo65857v1], 544);
const stavesmo60472 = new VF.Stave(90, 955, 602);
stavesmo60472.setAttribute('id', 'stavesmo60472');
stavesmo60472.setBegBarType(1);
stavesmo60472.addClef('treble');
stavesmo60472.setContext(context);
stavesmo60472.draw();
smo60472v0.draw(context, stavesmo60472);
smo60472v1.draw(context, stavesmo60472);
smo69705.setContext(context);
smo69705.draw();
smo69706.setContext(context);
smo69706.draw();
smo69707.setContext(context);
smo69707.draw();
smo69708.setContext(context);
smo69708.draw();
const stavesmo65857 = new VF.Stave(90, 1032, 602);
stavesmo65857.setAttribute('id', 'stavesmo65857');
stavesmo65857.setBegBarType(1);
stavesmo65857.addClef('treble');
stavesmo65857.setContext(context);
stavesmo65857.draw();
smo65857v0.draw(context, stavesmo65857);
smo65857v1.draw(context, stavesmo65857);
const leftsmo59060stavesmo604721 = new VF.StaveConnector(stavesmo60472, stavesmo65857).setType(3);
leftsmo59060stavesmo604721.setContext(context).draw();
const fmtsmo605047 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo60504v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60504v0ar = [];
const smo60473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60473'] = smo60473;
smo60473.setAttribute('id', 'smo60473');
smo60504v0ar.push(smo60473);
const smo60474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60474'] = smo60474;
smo60474.setAttribute('id', 'smo60474');
smo60504v0ar.push(smo60474);
const smo60475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60475'] = smo60475;
smo60475.setAttribute('id', 'smo60475');
smo60504v0ar.push(smo60475);
const smo60476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60476'] = smo60476;
smo60476.setAttribute('id', 'smo60476');
smo60504v0ar.push(smo60476);
const smo60477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60477'] = smo60477;
smo60477.setAttribute('id', 'smo60477');
smo60504v0ar.push(smo60477);
const smo60478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60478'] = smo60478;
smo60478.setAttribute('id', 'smo60478');
smo60504v0ar.push(smo60478);
const smo60479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60479'] = smo60479;
smo60479.setAttribute('id', 'smo60479');
smo60504v0ar.push(smo60479);
const smo60480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60480'] = smo60480;
smo60480.setAttribute('id', 'smo60480');
smo60504v0ar.push(smo60480);
const smo60481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60481'] = smo60481;
smo60481.setAttribute('id', 'smo60481');
smo60504v0ar.push(smo60481);
const smo60482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60482'] = smo60482;
smo60482.setAttribute('id', 'smo60482');
smo60504v0ar.push(smo60482);
const smo60483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60483'] = smo60483;
smo60483.setAttribute('id', 'smo60483');
smo60504v0ar.push(smo60483);
const smo60484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60484'] = smo60484;
smo60484.setAttribute('id', 'smo60484');
smo60504v0ar.push(smo60484);
const smo60485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60485'] = smo60485;
smo60485.setAttribute('id', 'smo60485');
smo60504v0ar.push(smo60485);
const smo60486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60486'] = smo60486;
smo60486.setAttribute('id', 'smo60486');
smo60504v0ar.push(smo60486);
smo60504v0.addTickables(smo60504v0ar)
fmtsmo605047.joinVoices([smo60504v0]);
const smo60504v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60504v1ar = [];
const smo60487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60487'] = smo60487;
smo60487.setAttribute('id', 'smo60487');
smo60487.setStyle({ fillStyle: '#aaaaaa7f' });
smo60504v1ar.push(smo60487);
const smo60488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60488'] = smo60488;
smo60488.setAttribute('id', 'smo60488');
smo60488.setStyle({ fillStyle: '#aaaaaa7f' });
smo60488.addModifier(new VF.Dot(), 0);
smo60488.addModifier(new VF.Dot(), 0);
smo60504v1ar.push(smo60488);
const smo60489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60489'] = smo60489;
smo60489.setAttribute('id', 'smo60489');
smo60489.setStyle({ fillStyle: '#aaaaaa7f' });
smo60504v1ar.push(smo60489);
const smo60490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60490'] = smo60490;
smo60490.setAttribute('id', 'smo60490');
smo60490.setStyle({ fillStyle: '#aaaaaa7f' });
smo60490.addModifier(new VF.Dot(), 0);
smo60490.addModifier(new VF.Dot(), 0);
smo60504v1ar.push(smo60490);
smo60504v1.addTickables(smo60504v1ar)
fmtsmo605047.joinVoices([smo60504v1]);
const fmtsmo658797 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo65879v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65879v0ar = [];
const smo65858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo65858'] = smo65858;
smo65858.setAttribute('id', 'smo65858');
smo65879v0ar.push(smo65858);
const smo65859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65859'] = smo65859;
smo65859.setAttribute('id', 'smo65859');
smo65859.addModifier(new VF.Dot(), 0);
smo65879v0ar.push(smo65859);
const smo65860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65860'] = smo65860;
smo65860.setAttribute('id', 'smo65860');
smo65879v0ar.push(smo65860);
const smo65861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo65861'] = smo65861;
smo65861.setAttribute('id', 'smo65861');
smo65879v0ar.push(smo65861);
const smo65862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65862'] = smo65862;
smo65862.setAttribute('id', 'smo65862');
smo65862.addModifier(new VF.Dot(), 0);
smo65879v0ar.push(smo65862);
const smo65863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65863'] = smo65863;
smo65863.setAttribute('id', 'smo65863');
smo65879v0ar.push(smo65863);
smo65879v0.addTickables(smo65879v0ar)
fmtsmo658797.joinVoices([smo65879v0]);
const smo65879v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65879v1ar = [];
const smo65864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65864'] = smo65864;
smo65864.setAttribute('id', 'smo65864');
smo65864.setStyle({ fillStyle: "#115511" });
smo65879v1ar.push(smo65864);
const smo65865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65865'] = smo65865;
smo65865.setAttribute('id', 'smo65865');
smo65865.setStyle({ fillStyle: "#115511" });
smo65879v1ar.push(smo65865);
smo65879v1.addTickables(smo65879v1ar)
fmtsmo658797.joinVoices([smo65879v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69713 = smo60474.getStemDirection();
smo60474.setStemDirection(dirsmo69713);
smo60475.setStemDirection(dirsmo69713);
const smo69713 = new VF.Beam([smo60474,smo60475]);
const dirsmo69714 = smo60476.getStemDirection();
smo60476.setStemDirection(dirsmo69714);
smo60477.setStemDirection(dirsmo69714);
smo60478.setStemDirection(dirsmo69714);
smo60479.setStemDirection(dirsmo69714);
const smo69714 = new VF.Beam([smo60476,smo60477,smo60478,smo60479]);
const dirsmo69715 = smo60481.getStemDirection();
smo60481.setStemDirection(dirsmo69715);
smo60482.setStemDirection(dirsmo69715);
const smo69715 = new VF.Beam([smo60481,smo60482]);
const dirsmo69716 = smo60483.getStemDirection();
smo60483.setStemDirection(dirsmo69716);
smo60484.setStemDirection(dirsmo69716);
smo60485.setStemDirection(dirsmo69716);
smo60486.setStemDirection(dirsmo69716);
const smo69716 = new VF.Beam([smo60483,smo60484,smo60485,smo60486]);
 
// formatting measures in staff group smo59060
fmtsmo605047.format([smo60504v0,smo60504v1,smo65879v0,smo65879v1], 544);
const stavesmo60504 = new VF.Stave(692, 955, 558);
stavesmo60504.setAttribute('id', 'stavesmo60504');
stavesmo60504.setBegBarType(VF.Barline.type.NONE);
stavesmo60504.setContext(context);
stavesmo60504.draw();
smo60504v0.draw(context, stavesmo60504);
smo60504v1.draw(context, stavesmo60504);
smo69713.setContext(context);
smo69713.draw();
smo69714.setContext(context);
smo69714.draw();
smo69715.setContext(context);
smo69715.draw();
smo69716.setContext(context);
smo69716.draw();
const stavesmo65879 = new VF.Stave(692, 1032, 558);
stavesmo65879.setAttribute('id', 'stavesmo65879');
stavesmo65879.setBegBarType(VF.Barline.type.NONE);
stavesmo65879.setContext(context);
stavesmo65879.draw();
smo65879v0.draw(context, stavesmo65879);
smo65879v1.draw(context, stavesmo65879);
const fmtsmo605368 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo60536v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60536v0ar = [];
const smo60505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60505'] = smo60505;
smo60505.setAttribute('id', 'smo60505');
smo60536v0ar.push(smo60505);
const smo60506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60506'] = smo60506;
smo60506.setAttribute('id', 'smo60506');
smo60536v0ar.push(smo60506);
const smo60507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60507'] = smo60507;
smo60507.setAttribute('id', 'smo60507');
smo60536v0ar.push(smo60507);
const smo60508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60508'] = smo60508;
smo60508.setAttribute('id', 'smo60508');
smo60536v0ar.push(smo60508);
const smo60509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60509'] = smo60509;
smo60509.setAttribute('id', 'smo60509');
smo60536v0ar.push(smo60509);
const smo60510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60510'] = smo60510;
smo60510.setAttribute('id', 'smo60510');
smo60536v0ar.push(smo60510);
const smo60511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60511'] = smo60511;
smo60511.setAttribute('id', 'smo60511');
smo60536v0ar.push(smo60511);
const smo60512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60512'] = smo60512;
smo60512.setAttribute('id', 'smo60512');
smo60536v0ar.push(smo60512);
const smo60513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60513'] = smo60513;
smo60513.setAttribute('id', 'smo60513');
smo60536v0ar.push(smo60513);
const smo60514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60514'] = smo60514;
smo60514.setAttribute('id', 'smo60514');
smo60536v0ar.push(smo60514);
const smo60515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60515'] = smo60515;
smo60515.setAttribute('id', 'smo60515');
smo60536v0ar.push(smo60515);
const smo60516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60516'] = smo60516;
smo60516.setAttribute('id', 'smo60516');
smo60536v0ar.push(smo60516);
const smo60517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60517'] = smo60517;
smo60517.setAttribute('id', 'smo60517');
smo60536v0ar.push(smo60517);
const smo60518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60518'] = smo60518;
smo60518.setAttribute('id', 'smo60518');
smo60536v0ar.push(smo60518);
smo60536v0.addTickables(smo60536v0ar)
fmtsmo605368.joinVoices([smo60536v0]);
const smo60536v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60536v1ar = [];
const smo60519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60519'] = smo60519;
smo60519.setAttribute('id', 'smo60519');
smo60519.setStyle({ fillStyle: '#aaaaaa7f' });
smo60536v1ar.push(smo60519);
const smo60520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60520'] = smo60520;
smo60520.setAttribute('id', 'smo60520');
smo60520.setStyle({ fillStyle: '#aaaaaa7f' });
smo60520.addModifier(new VF.Dot(), 0);
smo60520.addModifier(new VF.Dot(), 0);
smo60536v1ar.push(smo60520);
const smo60521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60521'] = smo60521;
smo60521.setAttribute('id', 'smo60521');
smo60521.setStyle({ fillStyle: '#aaaaaa7f' });
smo60536v1ar.push(smo60521);
const smo60522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60522'] = smo60522;
smo60522.setAttribute('id', 'smo60522');
smo60522.setStyle({ fillStyle: '#aaaaaa7f' });
smo60522.addModifier(new VF.Dot(), 0);
smo60522.addModifier(new VF.Dot(), 0);
smo60536v1ar.push(smo60522);
smo60536v1.addTickables(smo60536v1ar)
fmtsmo605368.joinVoices([smo60536v1]);
const fmtsmo659018 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo65901v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65901v0ar = [];
const smo65880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo65880'] = smo65880;
smo65880.setAttribute('id', 'smo65880');
smo65901v0ar.push(smo65880);
const smo65881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65881'] = smo65881;
smo65881.setAttribute('id', 'smo65881');
smo65881.addModifier(new VF.Dot(), 0);
smo65901v0ar.push(smo65881);
const smo65882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65882'] = smo65882;
smo65882.setAttribute('id', 'smo65882');
smo65901v0ar.push(smo65882);
const smo65883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo65883'] = smo65883;
smo65883.setAttribute('id', 'smo65883');
smo65901v0ar.push(smo65883);
const smo65884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65884'] = smo65884;
smo65884.setAttribute('id', 'smo65884');
smo65884.addModifier(new VF.Dot(), 0);
smo65901v0ar.push(smo65884);
const smo65885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65885'] = smo65885;
smo65885.setAttribute('id', 'smo65885');
smo65901v0ar.push(smo65885);
smo65901v0.addTickables(smo65901v0ar)
fmtsmo659018.joinVoices([smo65901v0]);
const smo65901v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65901v1ar = [];
const smo65886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65886'] = smo65886;
smo65886.setAttribute('id', 'smo65886');
smo65886.setStyle({ fillStyle: "#115511" });
smo65901v1ar.push(smo65886);
const smo65887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65887'] = smo65887;
smo65887.setAttribute('id', 'smo65887');
smo65887.setStyle({ fillStyle: "#115511" });
smo65901v1ar.push(smo65887);
smo65901v1.addTickables(smo65901v1ar)
fmtsmo659018.joinVoices([smo65901v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69721 = smo60506.getStemDirection();
smo60506.setStemDirection(dirsmo69721);
smo60507.setStemDirection(dirsmo69721);
const smo69721 = new VF.Beam([smo60506,smo60507]);
const dirsmo69722 = smo60508.getStemDirection();
smo60508.setStemDirection(dirsmo69722);
smo60509.setStemDirection(dirsmo69722);
smo60510.setStemDirection(dirsmo69722);
smo60511.setStemDirection(dirsmo69722);
const smo69722 = new VF.Beam([smo60508,smo60509,smo60510,smo60511]);
const dirsmo69723 = smo60513.getStemDirection();
smo60513.setStemDirection(dirsmo69723);
smo60514.setStemDirection(dirsmo69723);
const smo69723 = new VF.Beam([smo60513,smo60514]);
const dirsmo69724 = smo60515.getStemDirection();
smo60515.setStemDirection(dirsmo69724);
smo60516.setStemDirection(dirsmo69724);
smo60517.setStemDirection(dirsmo69724);
smo60518.setStemDirection(dirsmo69724);
const smo69724 = new VF.Beam([smo60515,smo60516,smo60517,smo60518]);
 
// formatting measures in staff group smo59060
fmtsmo605368.format([smo60536v0,smo60536v1,smo65901v0,smo65901v1], 544);
const stavesmo60536 = new VF.Stave(1250, 955, 558);
stavesmo60536.setAttribute('id', 'stavesmo60536');
stavesmo60536.setBegBarType(VF.Barline.type.NONE);
stavesmo60536.setContext(context);
stavesmo60536.draw();
smo60536v0.draw(context, stavesmo60536);
smo60536v1.draw(context, stavesmo60536);
smo69721.setContext(context);
smo69721.draw();
smo69722.setContext(context);
smo69722.draw();
smo69723.setContext(context);
smo69723.draw();
smo69724.setContext(context);
smo69724.draw();
const stavesmo65901 = new VF.Stave(1250, 1032, 558);
stavesmo65901.setAttribute('id', 'stavesmo65901');
stavesmo65901.setBegBarType(VF.Barline.type.NONE);
stavesmo65901.setContext(context);
stavesmo65901.draw();
smo65901v0.draw(context, stavesmo65901);
smo65901v1.draw(context, stavesmo65901);
const rightsmo59060stavesmo605361 = new VF.StaveConnector(stavesmo60536, stavesmo65901).setType(0);
rightsmo59060stavesmo605361.setContext(context).draw();
const fmtsmo605689 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo60568v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60568v0ar = [];
const smo60537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60537'] = smo60537;
smo60537.setAttribute('id', 'smo60537');
smo60568v0ar.push(smo60537);
const smo60538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60538'] = smo60538;
smo60538.setAttribute('id', 'smo60538');
smo60568v0ar.push(smo60538);
const smo60539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60539'] = smo60539;
smo60539.setAttribute('id', 'smo60539');
const smo605390acc = new VF.Accidental('#');
smo60539.addModifier(smo605390acc, 0);
smo60568v0ar.push(smo60539);
const smo60540 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60540'] = smo60540;
smo60540.setAttribute('id', 'smo60540');
smo60568v0ar.push(smo60540);
const smo60541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60541'] = smo60541;
smo60541.setAttribute('id', 'smo60541');
smo60568v0ar.push(smo60541);
const smo60542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60542'] = smo60542;
smo60542.setAttribute('id', 'smo60542');
smo60568v0ar.push(smo60542);
const smo60543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60543'] = smo60543;
smo60543.setAttribute('id', 'smo60543');
smo60568v0ar.push(smo60543);
const smo60544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60544'] = smo60544;
smo60544.setAttribute('id', 'smo60544');
smo60568v0ar.push(smo60544);
const smo60545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60545'] = smo60545;
smo60545.setAttribute('id', 'smo60545');
smo60568v0ar.push(smo60545);
const smo60546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60546'] = smo60546;
smo60546.setAttribute('id', 'smo60546');
smo60568v0ar.push(smo60546);
const smo60547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60547'] = smo60547;
smo60547.setAttribute('id', 'smo60547');
smo60568v0ar.push(smo60547);
const smo60548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60548'] = smo60548;
smo60548.setAttribute('id', 'smo60548');
smo60568v0ar.push(smo60548);
const smo60549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60549'] = smo60549;
smo60549.setAttribute('id', 'smo60549');
smo60568v0ar.push(smo60549);
const smo60550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60550'] = smo60550;
smo60550.setAttribute('id', 'smo60550');
smo60568v0ar.push(smo60550);
smo60568v0.addTickables(smo60568v0ar)
fmtsmo605689.joinVoices([smo60568v0]);
const smo60568v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60568v1ar = [];
const smo60551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60551'] = smo60551;
smo60551.setAttribute('id', 'smo60551');
smo60551.setStyle({ fillStyle: '#aaaaaa7f' });
smo60568v1ar.push(smo60551);
const smo60552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60552'] = smo60552;
smo60552.setAttribute('id', 'smo60552');
smo60552.setStyle({ fillStyle: '#aaaaaa7f' });
smo60552.addModifier(new VF.Dot(), 0);
smo60552.addModifier(new VF.Dot(), 0);
smo60568v1ar.push(smo60552);
const smo60553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60553'] = smo60553;
smo60553.setAttribute('id', 'smo60553');
smo60553.setStyle({ fillStyle: '#aaaaaa7f' });
smo60568v1ar.push(smo60553);
const smo60554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60554'] = smo60554;
smo60554.setAttribute('id', 'smo60554');
smo60554.setStyle({ fillStyle: '#aaaaaa7f' });
smo60554.addModifier(new VF.Dot(), 0);
smo60554.addModifier(new VF.Dot(), 0);
smo60568v1ar.push(smo60554);
smo60568v1.addTickables(smo60568v1ar)
fmtsmo605689.joinVoices([smo60568v1]);
const fmtsmo659239 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo65923v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65923v0ar = [];
const smo65902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["en/6/r"]}'))
noteHash['smo65902'] = smo65902;
smo65902.setAttribute('id', 'smo65902');
smo65923v0ar.push(smo65902);
const smo65903 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65903'] = smo65903;
smo65903.setAttribute('id', 'smo65903');
smo65903.addModifier(new VF.Dot(), 0);
smo65923v0ar.push(smo65903);
const smo65904 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65904'] = smo65904;
smo65904.setAttribute('id', 'smo65904');
smo65923v0ar.push(smo65904);
const smo65905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo65905'] = smo65905;
smo65905.setAttribute('id', 'smo65905');
smo65923v0ar.push(smo65905);
const smo65906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65906'] = smo65906;
smo65906.setAttribute('id', 'smo65906');
smo65906.addModifier(new VF.Dot(), 0);
smo65923v0ar.push(smo65906);
const smo65907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65907'] = smo65907;
smo65907.setAttribute('id', 'smo65907');
smo65923v0ar.push(smo65907);
smo65923v0.addTickables(smo65923v0ar)
fmtsmo659239.joinVoices([smo65923v0]);
const smo65923v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65923v1ar = [];
const smo65908 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65908'] = smo65908;
smo65908.setAttribute('id', 'smo65908');
smo65908.setStyle({ fillStyle: "#115511" });
smo65923v1ar.push(smo65908);
const smo65909 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65909'] = smo65909;
smo65909.setAttribute('id', 'smo65909');
smo65909.setStyle({ fillStyle: "#115511" });
smo65923v1ar.push(smo65909);
smo65923v1.addTickables(smo65923v1ar)
fmtsmo659239.joinVoices([smo65923v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69737 = smo60538.getStemDirection();
smo60538.setStemDirection(dirsmo69737);
smo60539.setStemDirection(dirsmo69737);
const smo69737 = new VF.Beam([smo60538,smo60539]);
const dirsmo69738 = smo60540.getStemDirection();
smo60540.setStemDirection(dirsmo69738);
smo60541.setStemDirection(dirsmo69738);
smo60542.setStemDirection(dirsmo69738);
smo60543.setStemDirection(dirsmo69738);
const smo69738 = new VF.Beam([smo60540,smo60541,smo60542,smo60543]);
const dirsmo69739 = smo60545.getStemDirection();
smo60545.setStemDirection(dirsmo69739);
smo60546.setStemDirection(dirsmo69739);
const smo69739 = new VF.Beam([smo60545,smo60546]);
const dirsmo69740 = smo60547.getStemDirection();
smo60547.setStemDirection(dirsmo69740);
smo60548.setStemDirection(dirsmo69740);
smo60549.setStemDirection(dirsmo69740);
smo60550.setStemDirection(dirsmo69740);
const smo69740 = new VF.Beam([smo60547,smo60548,smo60549,smo60550]);
 
// formatting measures in staff group smo59060
fmtsmo605689.format([smo60568v0,smo60568v1,smo65923v0,smo65923v1], 561);
const stavesmo60568 = new VF.Stave(90, 1191, 619);
stavesmo60568.setAttribute('id', 'stavesmo60568');
stavesmo60568.setBegBarType(1);
stavesmo60568.addClef('treble');
stavesmo60568.setContext(context);
stavesmo60568.draw();
smo60568v0.draw(context, stavesmo60568);
smo60568v1.draw(context, stavesmo60568);
smo69737.setContext(context);
smo69737.draw();
smo69738.setContext(context);
smo69738.draw();
smo69739.setContext(context);
smo69739.draw();
smo69740.setContext(context);
smo69740.draw();
const stavesmo65923 = new VF.Stave(90, 1370, 619);
stavesmo65923.setAttribute('id', 'stavesmo65923');
stavesmo65923.setBegBarType(1);
stavesmo65923.addClef('bass');
stavesmo65923.setContext(context);
stavesmo65923.draw();
smo65923v0.draw(context, stavesmo65923);
smo65923v1.draw(context, stavesmo65923);
const leftsmo59060stavesmo605681 = new VF.StaveConnector(stavesmo60568, stavesmo65923).setType(3);
leftsmo59060stavesmo605681.setContext(context).draw();
const fmtsmo6060010 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo60600v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60600v0ar = [];
const smo60569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60569'] = smo60569;
smo60569.setAttribute('id', 'smo60569');
smo60600v0ar.push(smo60569);
const smo60570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60570'] = smo60570;
smo60570.setAttribute('id', 'smo60570');
smo60600v0ar.push(smo60570);
const smo60571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60571'] = smo60571;
smo60571.setAttribute('id', 'smo60571');
smo60600v0ar.push(smo60571);
const smo60572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60572'] = smo60572;
smo60572.setAttribute('id', 'smo60572');
smo60600v0ar.push(smo60572);
const smo60573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60573'] = smo60573;
smo60573.setAttribute('id', 'smo60573');
smo60600v0ar.push(smo60573);
const smo60574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60574'] = smo60574;
smo60574.setAttribute('id', 'smo60574');
smo60600v0ar.push(smo60574);
const smo60575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60575'] = smo60575;
smo60575.setAttribute('id', 'smo60575');
smo60600v0ar.push(smo60575);
const smo60576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60576'] = smo60576;
smo60576.setAttribute('id', 'smo60576');
smo60600v0ar.push(smo60576);
const smo60577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60577'] = smo60577;
smo60577.setAttribute('id', 'smo60577');
smo60600v0ar.push(smo60577);
const smo60578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60578'] = smo60578;
smo60578.setAttribute('id', 'smo60578');
smo60600v0ar.push(smo60578);
const smo60579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60579'] = smo60579;
smo60579.setAttribute('id', 'smo60579');
smo60600v0ar.push(smo60579);
const smo60580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60580'] = smo60580;
smo60580.setAttribute('id', 'smo60580');
smo60600v0ar.push(smo60580);
const smo60581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60581'] = smo60581;
smo60581.setAttribute('id', 'smo60581');
smo60600v0ar.push(smo60581);
const smo60582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60582'] = smo60582;
smo60582.setAttribute('id', 'smo60582');
smo60600v0ar.push(smo60582);
smo60600v0.addTickables(smo60600v0ar)
fmtsmo6060010.joinVoices([smo60600v0]);
const smo60600v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60600v1ar = [];
const smo60583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60583'] = smo60583;
smo60583.setAttribute('id', 'smo60583');
smo60583.setStyle({ fillStyle: '#aaaaaa7f' });
smo60600v1ar.push(smo60583);
const smo60584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
noteHash['smo60584'] = smo60584;
smo60584.setAttribute('id', 'smo60584');
smo60584.setStyle({ fillStyle: '#aaaaaa7f' });
smo60584.addModifier(new VF.Dot(), 0);
smo60584.addModifier(new VF.Dot(), 0);
smo60600v1ar.push(smo60584);
const smo60585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60585'] = smo60585;
smo60585.setAttribute('id', 'smo60585');
smo60585.setStyle({ fillStyle: '#aaaaaa7f' });
smo60600v1ar.push(smo60585);
const smo60586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60586'] = smo60586;
smo60586.setAttribute('id', 'smo60586');
smo60586.setStyle({ fillStyle: '#aaaaaa7f' });
smo60586.addModifier(new VF.Dot(), 0);
smo60586.addModifier(new VF.Dot(), 0);
smo60600v1ar.push(smo60586);
smo60600v1.addTickables(smo60600v1ar)
fmtsmo6060010.joinVoices([smo60600v1]);
const fmtsmo6594510 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo65945v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65945v0ar = [];
const smo65924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo65924'] = smo65924;
smo65924.setAttribute('id', 'smo65924');
smo65945v0ar.push(smo65924);
const smo65925 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65925'] = smo65925;
smo65925.setAttribute('id', 'smo65925');
smo65925.addModifier(new VF.Dot(), 0);
smo65945v0ar.push(smo65925);
const smo65926 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65926'] = smo65926;
smo65926.setAttribute('id', 'smo65926');
smo65945v0ar.push(smo65926);
const smo65927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo65927'] = smo65927;
smo65927.setAttribute('id', 'smo65927');
smo65945v0ar.push(smo65927);
const smo65928 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65928'] = smo65928;
smo65928.setAttribute('id', 'smo65928');
smo65928.addModifier(new VF.Dot(), 0);
smo65945v0ar.push(smo65928);
const smo65929 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65929'] = smo65929;
smo65929.setAttribute('id', 'smo65929');
smo65945v0ar.push(smo65929);
smo65945v0.addTickables(smo65945v0ar)
fmtsmo6594510.joinVoices([smo65945v0]);
const smo65945v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65945v1ar = [];
const smo65930 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65930'] = smo65930;
smo65930.setAttribute('id', 'smo65930');
smo65930.setStyle({ fillStyle: "#115511" });
smo65945v1ar.push(smo65930);
const smo65931 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65931'] = smo65931;
smo65931.setAttribute('id', 'smo65931');
smo65931.setStyle({ fillStyle: "#115511" });
smo65945v1ar.push(smo65931);
smo65945v1.addTickables(smo65945v1ar)
fmtsmo6594510.joinVoices([smo65945v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69745 = smo60570.getStemDirection();
smo60570.setStemDirection(dirsmo69745);
smo60571.setStemDirection(dirsmo69745);
const smo69745 = new VF.Beam([smo60570,smo60571]);
const dirsmo69746 = smo60572.getStemDirection();
smo60572.setStemDirection(dirsmo69746);
smo60573.setStemDirection(dirsmo69746);
smo60574.setStemDirection(dirsmo69746);
smo60575.setStemDirection(dirsmo69746);
const smo69746 = new VF.Beam([smo60572,smo60573,smo60574,smo60575]);
const dirsmo69747 = smo60577.getStemDirection();
smo60577.setStemDirection(dirsmo69747);
smo60578.setStemDirection(dirsmo69747);
const smo69747 = new VF.Beam([smo60577,smo60578]);
const dirsmo69748 = smo60579.getStemDirection();
smo60579.setStemDirection(dirsmo69748);
smo60580.setStemDirection(dirsmo69748);
smo60581.setStemDirection(dirsmo69748);
smo60582.setStemDirection(dirsmo69748);
const smo69748 = new VF.Beam([smo60579,smo60580,smo60581,smo60582]);
 
// formatting measures in staff group smo59060
fmtsmo6060010.format([smo60600v0,smo60600v1,smo65945v0,smo65945v1], 510);
const stavesmo60600 = new VF.Stave(709, 1191, 524);
stavesmo60600.setAttribute('id', 'stavesmo60600');
stavesmo60600.setBegBarType(VF.Barline.type.NONE);
stavesmo60600.setContext(context);
stavesmo60600.draw();
smo60600v0.draw(context, stavesmo60600);
smo60600v1.draw(context, stavesmo60600);
smo69745.setContext(context);
smo69745.draw();
smo69746.setContext(context);
smo69746.draw();
smo69747.setContext(context);
smo69747.draw();
smo69748.setContext(context);
smo69748.draw();
const stavesmo65945 = new VF.Stave(709, 1370, 524);
stavesmo65945.setAttribute('id', 'stavesmo65945');
stavesmo65945.setBegBarType(VF.Barline.type.NONE);
stavesmo65945.setContext(context);
stavesmo65945.draw();
smo65945v0.draw(context, stavesmo65945);
smo65945v1.draw(context, stavesmo65945);
const fmtsmo6063211 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo60632v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60632v0ar = [];
const smo60601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60601'] = smo60601;
smo60601.setAttribute('id', 'smo60601');
smo60632v0ar.push(smo60601);
const smo60602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60602'] = smo60602;
smo60602.setAttribute('id', 'smo60602');
smo60632v0ar.push(smo60602);
const smo60603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60603'] = smo60603;
smo60603.setAttribute('id', 'smo60603');
smo60632v0ar.push(smo60603);
const smo60604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo60604'] = smo60604;
smo60604.setAttribute('id', 'smo60604');
const smo606040acc = new VF.Accidental('#');
smo60604.addModifier(smo606040acc, 0);
smo60632v0ar.push(smo60604);
const smo60605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60605'] = smo60605;
smo60605.setAttribute('id', 'smo60605');
smo60632v0ar.push(smo60605);
const smo60606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60606'] = smo60606;
smo60606.setAttribute('id', 'smo60606');
smo60632v0ar.push(smo60606);
const smo60607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo60607'] = smo60607;
smo60607.setAttribute('id', 'smo60607');
smo60632v0ar.push(smo60607);
const smo60608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60608'] = smo60608;
smo60608.setAttribute('id', 'smo60608');
smo60632v0ar.push(smo60608);
const smo60609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60609'] = smo60609;
smo60609.setAttribute('id', 'smo60609');
smo60632v0ar.push(smo60609);
const smo60610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60610'] = smo60610;
smo60610.setAttribute('id', 'smo60610');
smo60632v0ar.push(smo60610);
const smo60611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo60611'] = smo60611;
smo60611.setAttribute('id', 'smo60611');
smo60632v0ar.push(smo60611);
const smo60612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60612'] = smo60612;
smo60612.setAttribute('id', 'smo60612');
smo60632v0ar.push(smo60612);
const smo60613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60613'] = smo60613;
smo60613.setAttribute('id', 'smo60613');
smo60632v0ar.push(smo60613);
const smo60614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo60614'] = smo60614;
smo60614.setAttribute('id', 'smo60614');
smo60632v0ar.push(smo60614);
smo60632v0.addTickables(smo60632v0ar)
fmtsmo6063211.joinVoices([smo60632v0]);
const smo60632v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60632v1ar = [];
const smo60615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60615'] = smo60615;
smo60615.setAttribute('id', 'smo60615');
smo60615.setStyle({ fillStyle: '#aaaaaa7f' });
smo60632v1ar.push(smo60615);
const smo60616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60616'] = smo60616;
smo60616.setAttribute('id', 'smo60616');
smo60616.setStyle({ fillStyle: '#aaaaaa7f' });
smo60616.addModifier(new VF.Dot(), 0);
smo60616.addModifier(new VF.Dot(), 0);
smo60632v1ar.push(smo60616);
const smo60617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60617'] = smo60617;
smo60617.setAttribute('id', 'smo60617');
smo60617.setStyle({ fillStyle: '#aaaaaa7f' });
smo60632v1ar.push(smo60617);
const smo60618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60618'] = smo60618;
smo60618.setAttribute('id', 'smo60618');
smo60618.setStyle({ fillStyle: '#aaaaaa7f' });
smo60618.addModifier(new VF.Dot(), 0);
smo60618.addModifier(new VF.Dot(), 0);
smo60632v1ar.push(smo60618);
smo60632v1.addTickables(smo60632v1ar)
fmtsmo6063211.joinVoices([smo60632v1]);
const fmtsmo6596711 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo65967v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65967v0ar = [];
const smo65946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo65946'] = smo65946;
smo65946.setAttribute('id', 'smo65946');
smo65967v0ar.push(smo65946);
const smo65947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
noteHash['smo65947'] = smo65947;
smo65947.setAttribute('id', 'smo65947');
const smo659470acc = new VF.Accidental('#');
smo65947.addModifier(smo659470acc, 0);
smo65947.addModifier(new VF.Dot(), 0);
smo65967v0ar.push(smo65947);
const smo65948 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
noteHash['smo65948'] = smo65948;
smo65948.setAttribute('id', 'smo65948');
smo65967v0ar.push(smo65948);
const smo65949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo65949'] = smo65949;
smo65949.setAttribute('id', 'smo65949');
smo65967v0ar.push(smo65949);
const smo65950 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
noteHash['smo65950'] = smo65950;
smo65950.setAttribute('id', 'smo65950');
smo65950.addModifier(new VF.Dot(), 0);
smo65967v0ar.push(smo65950);
const smo65951 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
noteHash['smo65951'] = smo65951;
smo65951.setAttribute('id', 'smo65951');
smo65967v0ar.push(smo65951);
smo65967v0.addTickables(smo65967v0ar)
fmtsmo6596711.joinVoices([smo65967v0]);
const smo65967v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65967v1ar = [];
const smo65952 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65952'] = smo65952;
smo65952.setAttribute('id', 'smo65952');
smo65952.setStyle({ fillStyle: "#115511" });
smo65967v1ar.push(smo65952);
const smo65953 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65953'] = smo65953;
smo65953.setAttribute('id', 'smo65953');
smo65953.setStyle({ fillStyle: "#115511" });
smo65967v1ar.push(smo65953);
smo65967v1.addTickables(smo65967v1ar)
fmtsmo6596711.joinVoices([smo65967v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69753 = smo60602.getStemDirection();
smo60602.setStemDirection(dirsmo69753);
smo60603.setStemDirection(dirsmo69753);
const smo69753 = new VF.Beam([smo60602,smo60603]);
const dirsmo69754 = smo60604.getStemDirection();
smo60604.setStemDirection(dirsmo69754);
smo60605.setStemDirection(dirsmo69754);
smo60606.setStemDirection(dirsmo69754);
smo60607.setStemDirection(dirsmo69754);
const smo69754 = new VF.Beam([smo60604,smo60605,smo60606,smo60607]);
const dirsmo69755 = smo60609.getStemDirection();
smo60609.setStemDirection(dirsmo69755);
smo60610.setStemDirection(dirsmo69755);
const smo69755 = new VF.Beam([smo60609,smo60610]);
const dirsmo69756 = smo60611.getStemDirection();
smo60611.setStemDirection(dirsmo69756);
smo60612.setStemDirection(dirsmo69756);
smo60613.setStemDirection(dirsmo69756);
smo60614.setStemDirection(dirsmo69756);
const smo69756 = new VF.Beam([smo60611,smo60612,smo60613,smo60614]);
 
// formatting measures in staff group smo59060
fmtsmo6063211.format([smo60632v0,smo60632v1,smo65967v0,smo65967v1], 560);
const stavesmo60632 = new VF.Stave(1233, 1191, 574);
stavesmo60632.setAttribute('id', 'stavesmo60632');
stavesmo60632.setBegBarType(VF.Barline.type.NONE);
stavesmo60632.setContext(context);
stavesmo60632.draw();
smo60632v0.draw(context, stavesmo60632);
smo60632v1.draw(context, stavesmo60632);
smo69753.setContext(context);
smo69753.draw();
smo69754.setContext(context);
smo69754.draw();
smo69755.setContext(context);
smo69755.draw();
smo69756.setContext(context);
smo69756.draw();
const stavesmo65967 = new VF.Stave(1233, 1370, 574);
stavesmo65967.setAttribute('id', 'stavesmo65967');
stavesmo65967.setBegBarType(VF.Barline.type.NONE);
stavesmo65967.setContext(context);
stavesmo65967.draw();
smo65967v0.draw(context, stavesmo65967);
smo65967v1.draw(context, stavesmo65967);
const rightsmo59060stavesmo606321 = new VF.StaveConnector(stavesmo60632, stavesmo65967).setType(0);
rightsmo59060stavesmo606321.setContext(context).draw();
const fmtsmo6066412 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo60664v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60664v0ar = [];
const smo60633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60633'] = smo60633;
smo60633.setAttribute('id', 'smo60633');
smo60664v0ar.push(smo60633);
const smo60634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60634'] = smo60634;
smo60634.setAttribute('id', 'smo60634');
smo60664v0ar.push(smo60634);
const smo60635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60635'] = smo60635;
smo60635.setAttribute('id', 'smo60635');
smo60664v0ar.push(smo60635);
const smo60636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60636'] = smo60636;
smo60636.setAttribute('id', 'smo60636');
smo60664v0ar.push(smo60636);
const smo60637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60637'] = smo60637;
smo60637.setAttribute('id', 'smo60637');
smo60664v0ar.push(smo60637);
const smo60638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60638'] = smo60638;
smo60638.setAttribute('id', 'smo60638');
smo60664v0ar.push(smo60638);
const smo60639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60639'] = smo60639;
smo60639.setAttribute('id', 'smo60639');
smo60664v0ar.push(smo60639);
const smo60640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60640'] = smo60640;
smo60640.setAttribute('id', 'smo60640');
smo60664v0ar.push(smo60640);
const smo60641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60641'] = smo60641;
smo60641.setAttribute('id', 'smo60641');
smo60664v0ar.push(smo60641);
const smo60642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60642'] = smo60642;
smo60642.setAttribute('id', 'smo60642');
smo60664v0ar.push(smo60642);
const smo60643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60643'] = smo60643;
smo60643.setAttribute('id', 'smo60643');
smo60664v0ar.push(smo60643);
const smo60644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60644'] = smo60644;
smo60644.setAttribute('id', 'smo60644');
smo60664v0ar.push(smo60644);
const smo60645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60645'] = smo60645;
smo60645.setAttribute('id', 'smo60645');
smo60664v0ar.push(smo60645);
const smo60646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60646'] = smo60646;
smo60646.setAttribute('id', 'smo60646');
smo60664v0ar.push(smo60646);
smo60664v0.addTickables(smo60664v0ar)
fmtsmo6066412.joinVoices([smo60664v0]);
const smo60664v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60664v1ar = [];
const smo60647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60647'] = smo60647;
smo60647.setAttribute('id', 'smo60647');
smo60647.setStyle({ fillStyle: '#aaaaaa7f' });
smo60664v1ar.push(smo60647);
const smo60648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60648'] = smo60648;
smo60648.setAttribute('id', 'smo60648');
smo60648.setStyle({ fillStyle: '#aaaaaa7f' });
smo60648.addModifier(new VF.Dot(), 0);
smo60648.addModifier(new VF.Dot(), 0);
smo60664v1ar.push(smo60648);
const smo60649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60649'] = smo60649;
smo60649.setAttribute('id', 'smo60649');
smo60649.setStyle({ fillStyle: '#aaaaaa7f' });
smo60664v1ar.push(smo60649);
const smo60650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60650'] = smo60650;
smo60650.setAttribute('id', 'smo60650');
smo60650.setStyle({ fillStyle: '#aaaaaa7f' });
smo60650.addModifier(new VF.Dot(), 0);
smo60650.addModifier(new VF.Dot(), 0);
smo60664v1ar.push(smo60650);
smo60664v1.addTickables(smo60664v1ar)
fmtsmo6066412.joinVoices([smo60664v1]);
const fmtsmo6598912 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo65989v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65989v0ar = [];
const smo65968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo65968'] = smo65968;
smo65968.setAttribute('id', 'smo65968');
smo65989v0ar.push(smo65968);
const smo65969 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65969'] = smo65969;
smo65969.setAttribute('id', 'smo65969');
smo65969.addModifier(new VF.Dot(), 0);
smo65989v0ar.push(smo65969);
const smo65970 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65970'] = smo65970;
smo65970.setAttribute('id', 'smo65970');
smo65989v0ar.push(smo65970);
const smo65971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo65971'] = smo65971;
smo65971.setAttribute('id', 'smo65971');
smo65989v0ar.push(smo65971);
const smo65972 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65972'] = smo65972;
smo65972.setAttribute('id', 'smo65972');
smo65972.addModifier(new VF.Dot(), 0);
smo65989v0ar.push(smo65972);
const smo65973 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65973'] = smo65973;
smo65973.setAttribute('id', 'smo65973');
smo65989v0ar.push(smo65973);
smo65989v0.addTickables(smo65989v0ar)
fmtsmo6598912.joinVoices([smo65989v0]);
const smo65989v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65989v1ar = [];
const smo65974 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65974'] = smo65974;
smo65974.setAttribute('id', 'smo65974');
smo65974.setStyle({ fillStyle: "#115511" });
smo65989v1ar.push(smo65974);
const smo65975 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65975'] = smo65975;
smo65975.setAttribute('id', 'smo65975');
smo65975.setStyle({ fillStyle: "#115511" });
smo65989v1ar.push(smo65975);
smo65989v1.addTickables(smo65989v1ar)
fmtsmo6598912.joinVoices([smo65989v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69769 = smo60634.getStemDirection();
smo60634.setStemDirection(dirsmo69769);
smo60635.setStemDirection(dirsmo69769);
const smo69769 = new VF.Beam([smo60634,smo60635]);
const dirsmo69770 = smo60636.getStemDirection();
smo60636.setStemDirection(dirsmo69770);
smo60637.setStemDirection(dirsmo69770);
smo60638.setStemDirection(dirsmo69770);
smo60639.setStemDirection(dirsmo69770);
const smo69770 = new VF.Beam([smo60636,smo60637,smo60638,smo60639]);
const dirsmo69771 = smo60641.getStemDirection();
smo60641.setStemDirection(dirsmo69771);
smo60642.setStemDirection(dirsmo69771);
const smo69771 = new VF.Beam([smo60641,smo60642]);
const dirsmo69772 = smo60643.getStemDirection();
smo60643.setStemDirection(dirsmo69772);
smo60644.setStemDirection(dirsmo69772);
smo60645.setStemDirection(dirsmo69772);
smo60646.setStemDirection(dirsmo69772);
const smo69772 = new VF.Beam([smo60643,smo60644,smo60645,smo60646]);
 
// formatting measures in staff group smo59060
fmtsmo6066412.format([smo60664v0,smo60664v1,smo65989v0,smo65989v1], 536);
const stavesmo60664 = new VF.Stave(90, 1494, 594);
stavesmo60664.setAttribute('id', 'stavesmo60664');
stavesmo60664.setBegBarType(1);
stavesmo60664.addClef('treble');
stavesmo60664.setContext(context);
stavesmo60664.draw();
smo60664v0.draw(context, stavesmo60664);
smo60664v1.draw(context, stavesmo60664);
smo69769.setContext(context);
smo69769.draw();
smo69770.setContext(context);
smo69770.draw();
smo69771.setContext(context);
smo69771.draw();
smo69772.setContext(context);
smo69772.draw();
const stavesmo65989 = new VF.Stave(90, 1668, 594);
stavesmo65989.setAttribute('id', 'stavesmo65989');
stavesmo65989.setBegBarType(1);
stavesmo65989.addClef('bass');
stavesmo65989.setContext(context);
stavesmo65989.draw();
smo65989v0.draw(context, stavesmo65989);
smo65989v1.draw(context, stavesmo65989);
const leftsmo59060stavesmo606641 = new VF.StaveConnector(stavesmo60664, stavesmo65989).setType(3);
leftsmo59060stavesmo606641.setContext(context).draw();
const fmtsmo6069613 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo60696v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60696v0ar = [];
const smo60665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60665'] = smo60665;
smo60665.setAttribute('id', 'smo60665');
smo60696v0ar.push(smo60665);
const smo60666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60666'] = smo60666;
smo60666.setAttribute('id', 'smo60666');
smo60696v0ar.push(smo60666);
const smo60667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60667'] = smo60667;
smo60667.setAttribute('id', 'smo60667');
smo60696v0ar.push(smo60667);
const smo60668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60668'] = smo60668;
smo60668.setAttribute('id', 'smo60668');
smo60696v0ar.push(smo60668);
const smo60669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60669'] = smo60669;
smo60669.setAttribute('id', 'smo60669');
smo60696v0ar.push(smo60669);
const smo60670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60670'] = smo60670;
smo60670.setAttribute('id', 'smo60670');
smo60696v0ar.push(smo60670);
const smo60671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60671'] = smo60671;
smo60671.setAttribute('id', 'smo60671');
smo60696v0ar.push(smo60671);
const smo60672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60672'] = smo60672;
smo60672.setAttribute('id', 'smo60672');
smo60696v0ar.push(smo60672);
const smo60673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60673'] = smo60673;
smo60673.setAttribute('id', 'smo60673');
smo60696v0ar.push(smo60673);
const smo60674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60674'] = smo60674;
smo60674.setAttribute('id', 'smo60674');
smo60696v0ar.push(smo60674);
const smo60675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60675'] = smo60675;
smo60675.setAttribute('id', 'smo60675');
smo60696v0ar.push(smo60675);
const smo60676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60676'] = smo60676;
smo60676.setAttribute('id', 'smo60676');
smo60696v0ar.push(smo60676);
const smo60677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60677'] = smo60677;
smo60677.setAttribute('id', 'smo60677');
smo60696v0ar.push(smo60677);
const smo60678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60678'] = smo60678;
smo60678.setAttribute('id', 'smo60678');
smo60696v0ar.push(smo60678);
smo60696v0.addTickables(smo60696v0ar)
fmtsmo6069613.joinVoices([smo60696v0]);
const smo60696v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60696v1ar = [];
const smo60679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60679'] = smo60679;
smo60679.setAttribute('id', 'smo60679');
smo60679.setStyle({ fillStyle: '#aaaaaa7f' });
smo60696v1ar.push(smo60679);
const smo60680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60680'] = smo60680;
smo60680.setAttribute('id', 'smo60680');
smo60680.setStyle({ fillStyle: '#aaaaaa7f' });
smo60680.addModifier(new VF.Dot(), 0);
smo60680.addModifier(new VF.Dot(), 0);
smo60696v1ar.push(smo60680);
const smo60681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60681'] = smo60681;
smo60681.setAttribute('id', 'smo60681');
smo60681.setStyle({ fillStyle: '#aaaaaa7f' });
smo60696v1ar.push(smo60681);
const smo60682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60682'] = smo60682;
smo60682.setAttribute('id', 'smo60682');
smo60682.setStyle({ fillStyle: '#aaaaaa7f' });
smo60682.addModifier(new VF.Dot(), 0);
smo60682.addModifier(new VF.Dot(), 0);
smo60696v1ar.push(smo60682);
smo60696v1.addTickables(smo60696v1ar)
fmtsmo6069613.joinVoices([smo60696v1]);
const fmtsmo6601113 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo66011v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66011v0ar = [];
const smo65990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo65990'] = smo65990;
smo65990.setAttribute('id', 'smo65990');
smo66011v0ar.push(smo65990);
const smo65991 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
noteHash['smo65991'] = smo65991;
smo65991.setAttribute('id', 'smo65991');
const smo659910acc = new VF.Accidental('#');
smo65991.addModifier(smo659910acc, 0);
smo65991.addModifier(new VF.Dot(), 0);
smo66011v0ar.push(smo65991);
const smo65992 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
noteHash['smo65992'] = smo65992;
smo65992.setAttribute('id', 'smo65992');
smo66011v0ar.push(smo65992);
const smo65993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo65993'] = smo65993;
smo65993.setAttribute('id', 'smo65993');
smo66011v0ar.push(smo65993);
const smo65994 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
noteHash['smo65994'] = smo65994;
smo65994.setAttribute('id', 'smo65994');
smo65994.addModifier(new VF.Dot(), 0);
smo66011v0ar.push(smo65994);
const smo65995 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
noteHash['smo65995'] = smo65995;
smo65995.setAttribute('id', 'smo65995');
smo66011v0ar.push(smo65995);
smo66011v0.addTickables(smo66011v0ar)
fmtsmo6601113.joinVoices([smo66011v0]);
const smo66011v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66011v1ar = [];
const smo65996 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65996'] = smo65996;
smo65996.setAttribute('id', 'smo65996');
smo65996.setStyle({ fillStyle: "#115511" });
smo66011v1ar.push(smo65996);
const smo65997 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65997'] = smo65997;
smo65997.setAttribute('id', 'smo65997');
smo65997.setStyle({ fillStyle: "#115511" });
smo66011v1ar.push(smo65997);
smo66011v1.addTickables(smo66011v1ar)
fmtsmo6601113.joinVoices([smo66011v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69777 = smo60666.getStemDirection();
smo60666.setStemDirection(dirsmo69777);
smo60667.setStemDirection(dirsmo69777);
const smo69777 = new VF.Beam([smo60666,smo60667]);
const dirsmo69778 = smo60668.getStemDirection();
smo60668.setStemDirection(dirsmo69778);
smo60669.setStemDirection(dirsmo69778);
smo60670.setStemDirection(dirsmo69778);
smo60671.setStemDirection(dirsmo69778);
const smo69778 = new VF.Beam([smo60668,smo60669,smo60670,smo60671]);
const dirsmo69779 = smo60673.getStemDirection();
smo60673.setStemDirection(dirsmo69779);
smo60674.setStemDirection(dirsmo69779);
const smo69779 = new VF.Beam([smo60673,smo60674]);
const dirsmo69780 = smo60675.getStemDirection();
smo60675.setStemDirection(dirsmo69780);
smo60676.setStemDirection(dirsmo69780);
smo60677.setStemDirection(dirsmo69780);
smo60678.setStemDirection(dirsmo69780);
const smo69780 = new VF.Beam([smo60675,smo60676,smo60677,smo60678]);
 
// formatting measures in staff group smo59060
fmtsmo6069613.format([smo60696v0,smo60696v1,smo66011v0,smo66011v1], 560);
const stavesmo60696 = new VF.Stave(684, 1494, 574);
stavesmo60696.setAttribute('id', 'stavesmo60696');
stavesmo60696.setBegBarType(VF.Barline.type.NONE);
stavesmo60696.setContext(context);
stavesmo60696.draw();
smo60696v0.draw(context, stavesmo60696);
smo60696v1.draw(context, stavesmo60696);
smo69777.setContext(context);
smo69777.draw();
smo69778.setContext(context);
smo69778.draw();
smo69779.setContext(context);
smo69779.draw();
smo69780.setContext(context);
smo69780.draw();
const stavesmo66011 = new VF.Stave(684, 1668, 574);
stavesmo66011.setAttribute('id', 'stavesmo66011');
stavesmo66011.setBegBarType(VF.Barline.type.NONE);
stavesmo66011.setContext(context);
stavesmo66011.draw();
smo66011v0.draw(context, stavesmo66011);
smo66011v1.draw(context, stavesmo66011);
const fmtsmo6072814 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo60728v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60728v0ar = [];
const smo60697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60697'] = smo60697;
smo60697.setAttribute('id', 'smo60697');
smo60728v0ar.push(smo60697);
const smo60698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60698'] = smo60698;
smo60698.setAttribute('id', 'smo60698');
smo60728v0ar.push(smo60698);
const smo60699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60699'] = smo60699;
smo60699.setAttribute('id', 'smo60699');
smo60728v0ar.push(smo60699);
const smo60700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60700'] = smo60700;
smo60700.setAttribute('id', 'smo60700');
smo60728v0ar.push(smo60700);
const smo60701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60701'] = smo60701;
smo60701.setAttribute('id', 'smo60701');
smo60728v0ar.push(smo60701);
const smo60702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60702'] = smo60702;
smo60702.setAttribute('id', 'smo60702');
smo60728v0ar.push(smo60702);
const smo60703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60703'] = smo60703;
smo60703.setAttribute('id', 'smo60703');
smo60728v0ar.push(smo60703);
const smo60704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60704'] = smo60704;
smo60704.setAttribute('id', 'smo60704');
smo60728v0ar.push(smo60704);
const smo60705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60705'] = smo60705;
smo60705.setAttribute('id', 'smo60705');
smo60728v0ar.push(smo60705);
const smo60706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60706'] = smo60706;
smo60706.setAttribute('id', 'smo60706');
smo60728v0ar.push(smo60706);
const smo60707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60707'] = smo60707;
smo60707.setAttribute('id', 'smo60707');
smo60728v0ar.push(smo60707);
const smo60708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60708'] = smo60708;
smo60708.setAttribute('id', 'smo60708');
smo60728v0ar.push(smo60708);
const smo60709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60709'] = smo60709;
smo60709.setAttribute('id', 'smo60709');
smo60728v0ar.push(smo60709);
const smo60710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60710'] = smo60710;
smo60710.setAttribute('id', 'smo60710');
smo60728v0ar.push(smo60710);
smo60728v0.addTickables(smo60728v0ar)
fmtsmo6072814.joinVoices([smo60728v0]);
const smo60728v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60728v1ar = [];
const smo60711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60711'] = smo60711;
smo60711.setAttribute('id', 'smo60711');
smo60711.setStyle({ fillStyle: '#aaaaaa7f' });
smo60728v1ar.push(smo60711);
const smo60712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60712'] = smo60712;
smo60712.setAttribute('id', 'smo60712');
smo60712.setStyle({ fillStyle: '#aaaaaa7f' });
smo60712.addModifier(new VF.Dot(), 0);
smo60712.addModifier(new VF.Dot(), 0);
smo60728v1ar.push(smo60712);
const smo60713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60713'] = smo60713;
smo60713.setAttribute('id', 'smo60713');
smo60713.setStyle({ fillStyle: '#aaaaaa7f' });
smo60728v1ar.push(smo60713);
const smo60714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60714'] = smo60714;
smo60714.setAttribute('id', 'smo60714');
smo60714.setStyle({ fillStyle: '#aaaaaa7f' });
smo60714.addModifier(new VF.Dot(), 0);
smo60714.addModifier(new VF.Dot(), 0);
smo60728v1ar.push(smo60714);
smo60728v1.addTickables(smo60728v1ar)
fmtsmo6072814.joinVoices([smo60728v1]);
const fmtsmo6603314 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo66033v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66033v0ar = [];
const smo66012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo66012'] = smo66012;
smo66012.setAttribute('id', 'smo66012');
smo66033v0ar.push(smo66012);
const smo66013 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66013'] = smo66013;
smo66013.setAttribute('id', 'smo66013');
smo66013.addModifier(new VF.Dot(), 0);
smo66033v0ar.push(smo66013);
const smo66014 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66014'] = smo66014;
smo66014.setAttribute('id', 'smo66014');
smo66033v0ar.push(smo66014);
const smo66015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo66015'] = smo66015;
smo66015.setAttribute('id', 'smo66015');
smo66033v0ar.push(smo66015);
const smo66016 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66016'] = smo66016;
smo66016.setAttribute('id', 'smo66016');
smo66016.addModifier(new VF.Dot(), 0);
smo66033v0ar.push(smo66016);
const smo66017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66017'] = smo66017;
smo66017.setAttribute('id', 'smo66017');
smo66033v0ar.push(smo66017);
smo66033v0.addTickables(smo66033v0ar)
fmtsmo6603314.joinVoices([smo66033v0]);
const smo66033v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66033v1ar = [];
const smo66018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66018'] = smo66018;
smo66018.setAttribute('id', 'smo66018');
smo66018.setStyle({ fillStyle: "#115511" });
smo66033v1ar.push(smo66018);
const smo66019 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66019'] = smo66019;
smo66019.setAttribute('id', 'smo66019');
smo66019.setStyle({ fillStyle: "#115511" });
smo66033v1ar.push(smo66019);
smo66033v1.addTickables(smo66033v1ar)
fmtsmo6603314.joinVoices([smo66033v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69785 = smo60698.getStemDirection();
smo60698.setStemDirection(dirsmo69785);
smo60699.setStemDirection(dirsmo69785);
const smo69785 = new VF.Beam([smo60698,smo60699]);
const dirsmo69786 = smo60700.getStemDirection();
smo60700.setStemDirection(dirsmo69786);
smo60701.setStemDirection(dirsmo69786);
smo60702.setStemDirection(dirsmo69786);
smo60703.setStemDirection(dirsmo69786);
const smo69786 = new VF.Beam([smo60700,smo60701,smo60702,smo60703]);
const dirsmo69787 = smo60705.getStemDirection();
smo60705.setStemDirection(dirsmo69787);
smo60706.setStemDirection(dirsmo69787);
const smo69787 = new VF.Beam([smo60705,smo60706]);
const dirsmo69788 = smo60707.getStemDirection();
smo60707.setStemDirection(dirsmo69788);
smo60708.setStemDirection(dirsmo69788);
smo60709.setStemDirection(dirsmo69788);
smo60710.setStemDirection(dirsmo69788);
const smo69788 = new VF.Beam([smo60707,smo60708,smo60709,smo60710]);
 
// formatting measures in staff group smo59060
fmtsmo6072814.format([smo60728v0,smo60728v1,smo66033v0,smo66033v1], 535);
const stavesmo60728 = new VF.Stave(1258, 1494, 549);
stavesmo60728.setAttribute('id', 'stavesmo60728');
stavesmo60728.setBegBarType(VF.Barline.type.NONE);
stavesmo60728.setContext(context);
stavesmo60728.draw();
smo60728v0.draw(context, stavesmo60728);
smo60728v1.draw(context, stavesmo60728);
smo69785.setContext(context);
smo69785.draw();
smo69786.setContext(context);
smo69786.draw();
smo69787.setContext(context);
smo69787.draw();
smo69788.setContext(context);
smo69788.draw();
const stavesmo66033 = new VF.Stave(1258, 1668, 549);
stavesmo66033.setAttribute('id', 'stavesmo66033');
stavesmo66033.setBegBarType(VF.Barline.type.NONE);
stavesmo66033.setContext(context);
stavesmo66033.draw();
smo66033v0.draw(context, stavesmo66033);
smo66033v1.draw(context, stavesmo66033);
const rightsmo59060stavesmo607281 = new VF.StaveConnector(stavesmo60728, stavesmo66033).setType(0);
rightsmo59060stavesmo607281.setContext(context).draw();
const fmtsmo6076015 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo60760v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60760v0ar = [];
const smo60729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60729'] = smo60729;
smo60729.setAttribute('id', 'smo60729');
smo60760v0ar.push(smo60729);
const smo60730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo60730'] = smo60730;
smo60730.setAttribute('id', 'smo60730');
smo60760v0ar.push(smo60730);
const smo60731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60731'] = smo60731;
smo60731.setAttribute('id', 'smo60731');
smo60760v0ar.push(smo60731);
const smo60732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60732'] = smo60732;
smo60732.setAttribute('id', 'smo60732');
smo60760v0ar.push(smo60732);
const smo60733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo60733'] = smo60733;
smo60733.setAttribute('id', 'smo60733');
smo60760v0ar.push(smo60733);
const smo60734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60734'] = smo60734;
smo60734.setAttribute('id', 'smo60734');
smo60760v0ar.push(smo60734);
const smo60735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60735'] = smo60735;
smo60735.setAttribute('id', 'smo60735');
smo60760v0ar.push(smo60735);
const smo60736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60736'] = smo60736;
smo60736.setAttribute('id', 'smo60736');
smo60760v0ar.push(smo60736);
const smo60737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo60737'] = smo60737;
smo60737.setAttribute('id', 'smo60737');
smo60760v0ar.push(smo60737);
const smo60738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60738'] = smo60738;
smo60738.setAttribute('id', 'smo60738');
smo60760v0ar.push(smo60738);
const smo60739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60739'] = smo60739;
smo60739.setAttribute('id', 'smo60739');
smo60760v0ar.push(smo60739);
const smo60740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo60740'] = smo60740;
smo60740.setAttribute('id', 'smo60740');
smo60760v0ar.push(smo60740);
const smo60741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60741'] = smo60741;
smo60741.setAttribute('id', 'smo60741');
smo60760v0ar.push(smo60741);
const smo60742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60742'] = smo60742;
smo60742.setAttribute('id', 'smo60742');
smo60760v0ar.push(smo60742);
smo60760v0.addTickables(smo60760v0ar)
fmtsmo6076015.joinVoices([smo60760v0]);
const smo60760v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60760v1ar = [];
const smo60743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60743'] = smo60743;
smo60743.setAttribute('id', 'smo60743');
smo60743.setStyle({ fillStyle: '#aaaaaa7f' });
smo60760v1ar.push(smo60743);
const smo60744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60744'] = smo60744;
smo60744.setAttribute('id', 'smo60744');
smo60744.setStyle({ fillStyle: '#aaaaaa7f' });
smo60744.addModifier(new VF.Dot(), 0);
smo60744.addModifier(new VF.Dot(), 0);
smo60760v1ar.push(smo60744);
const smo60745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60745'] = smo60745;
smo60745.setAttribute('id', 'smo60745');
smo60745.setStyle({ fillStyle: '#aaaaaa7f' });
smo60760v1ar.push(smo60745);
const smo60746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60746'] = smo60746;
smo60746.setAttribute('id', 'smo60746');
smo60746.setStyle({ fillStyle: '#aaaaaa7f' });
smo60746.addModifier(new VF.Dot(), 0);
smo60746.addModifier(new VF.Dot(), 0);
smo60760v1ar.push(smo60746);
smo60760v1.addTickables(smo60760v1ar)
fmtsmo6076015.joinVoices([smo60760v1]);
const fmtsmo6605515 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo66055v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66055v0ar = [];
const smo66034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo66034'] = smo66034;
smo66034.setAttribute('id', 'smo66034');
smo66055v0ar.push(smo66034);
const smo66035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66035'] = smo66035;
smo66035.setAttribute('id', 'smo66035');
smo66035.addModifier(new VF.Dot(), 0);
smo66055v0ar.push(smo66035);
const smo66036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66036'] = smo66036;
smo66036.setAttribute('id', 'smo66036');
smo66055v0ar.push(smo66036);
const smo66037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo66037'] = smo66037;
smo66037.setAttribute('id', 'smo66037');
smo66055v0ar.push(smo66037);
const smo66038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66038'] = smo66038;
smo66038.setAttribute('id', 'smo66038');
smo66038.addModifier(new VF.Dot(), 0);
smo66055v0ar.push(smo66038);
const smo66039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66039'] = smo66039;
smo66039.setAttribute('id', 'smo66039');
smo66055v0ar.push(smo66039);
smo66055v0.addTickables(smo66055v0ar)
fmtsmo6605515.joinVoices([smo66055v0]);
const smo66055v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66055v1ar = [];
const smo66040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66040'] = smo66040;
smo66040.setAttribute('id', 'smo66040');
smo66040.setStyle({ fillStyle: "#115511" });
smo66055v1ar.push(smo66040);
const smo66041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66041'] = smo66041;
smo66041.setAttribute('id', 'smo66041');
smo66041.setStyle({ fillStyle: "#115511" });
smo66055v1ar.push(smo66041);
smo66055v1.addTickables(smo66055v1ar)
fmtsmo6605515.joinVoices([smo66055v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69801 = smo60730.getStemDirection();
smo60730.setStemDirection(dirsmo69801);
smo60731.setStemDirection(dirsmo69801);
const smo69801 = new VF.Beam([smo60730,smo60731]);
const dirsmo69802 = smo60732.getStemDirection();
smo60732.setStemDirection(dirsmo69802);
smo60733.setStemDirection(dirsmo69802);
smo60734.setStemDirection(dirsmo69802);
smo60735.setStemDirection(dirsmo69802);
const smo69802 = new VF.Beam([smo60732,smo60733,smo60734,smo60735]);
const dirsmo69803 = smo60737.getStemDirection();
smo60737.setStemDirection(dirsmo69803);
smo60738.setStemDirection(dirsmo69803);
const smo69803 = new VF.Beam([smo60737,smo60738]);
const dirsmo69804 = smo60739.getStemDirection();
smo60739.setStemDirection(dirsmo69804);
smo60740.setStemDirection(dirsmo69804);
smo60741.setStemDirection(dirsmo69804);
smo60742.setStemDirection(dirsmo69804);
const smo69804 = new VF.Beam([smo60739,smo60740,smo60741,smo60742]);
 
// formatting measures in staff group smo59060
fmtsmo6076015.format([smo60760v0,smo60760v1,smo66055v0,smo66055v1], 544);
const stavesmo60760 = new VF.Stave(90, 1778, 602);
stavesmo60760.setAttribute('id', 'stavesmo60760');
stavesmo60760.setBegBarType(1);
stavesmo60760.addClef('treble');
stavesmo60760.setContext(context);
stavesmo60760.draw();
smo60760v0.draw(context, stavesmo60760);
smo60760v1.draw(context, stavesmo60760);
smo69801.setContext(context);
smo69801.draw();
smo69802.setContext(context);
smo69802.draw();
smo69803.setContext(context);
smo69803.draw();
smo69804.setContext(context);
smo69804.draw();
const stavesmo66055 = new VF.Stave(90, 1862, 602);
stavesmo66055.setAttribute('id', 'stavesmo66055');
stavesmo66055.setBegBarType(1);
stavesmo66055.addClef('treble');
stavesmo66055.setContext(context);
stavesmo66055.draw();
smo66055v0.draw(context, stavesmo66055);
smo66055v1.draw(context, stavesmo66055);
const leftsmo59060stavesmo607601 = new VF.StaveConnector(stavesmo60760, stavesmo66055).setType(3);
leftsmo59060stavesmo607601.setContext(context).draw();
const fmtsmo6079216 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo60792v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60792v0ar = [];
const smo60761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60761'] = smo60761;
smo60761.setAttribute('id', 'smo60761');
smo60792v0ar.push(smo60761);
const smo60762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo60762'] = smo60762;
smo60762.setAttribute('id', 'smo60762');
smo60792v0ar.push(smo60762);
const smo60763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60763'] = smo60763;
smo60763.setAttribute('id', 'smo60763');
smo60792v0ar.push(smo60763);
const smo60764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60764'] = smo60764;
smo60764.setAttribute('id', 'smo60764');
smo60792v0ar.push(smo60764);
const smo60765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo60765'] = smo60765;
smo60765.setAttribute('id', 'smo60765');
smo60792v0ar.push(smo60765);
const smo60766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60766'] = smo60766;
smo60766.setAttribute('id', 'smo60766');
smo60792v0ar.push(smo60766);
const smo60767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60767'] = smo60767;
smo60767.setAttribute('id', 'smo60767');
smo60792v0ar.push(smo60767);
const smo60768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60768'] = smo60768;
smo60768.setAttribute('id', 'smo60768');
smo60792v0ar.push(smo60768);
const smo60769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo60769'] = smo60769;
smo60769.setAttribute('id', 'smo60769');
smo60792v0ar.push(smo60769);
const smo60770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60770'] = smo60770;
smo60770.setAttribute('id', 'smo60770');
smo60792v0ar.push(smo60770);
const smo60771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60771'] = smo60771;
smo60771.setAttribute('id', 'smo60771');
smo60792v0ar.push(smo60771);
const smo60772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo60772'] = smo60772;
smo60772.setAttribute('id', 'smo60772');
smo60792v0ar.push(smo60772);
const smo60773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60773'] = smo60773;
smo60773.setAttribute('id', 'smo60773');
smo60792v0ar.push(smo60773);
const smo60774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60774'] = smo60774;
smo60774.setAttribute('id', 'smo60774');
smo60792v0ar.push(smo60774);
smo60792v0.addTickables(smo60792v0ar)
fmtsmo6079216.joinVoices([smo60792v0]);
const smo60792v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60792v1ar = [];
const smo60775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60775'] = smo60775;
smo60775.setAttribute('id', 'smo60775');
smo60775.setStyle({ fillStyle: '#aaaaaa7f' });
smo60792v1ar.push(smo60775);
const smo60776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60776'] = smo60776;
smo60776.setAttribute('id', 'smo60776');
smo60776.setStyle({ fillStyle: '#aaaaaa7f' });
smo60776.addModifier(new VF.Dot(), 0);
smo60776.addModifier(new VF.Dot(), 0);
smo60792v1ar.push(smo60776);
const smo60777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60777'] = smo60777;
smo60777.setAttribute('id', 'smo60777');
smo60777.setStyle({ fillStyle: '#aaaaaa7f' });
smo60792v1ar.push(smo60777);
const smo60778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60778'] = smo60778;
smo60778.setAttribute('id', 'smo60778');
smo60778.setStyle({ fillStyle: '#aaaaaa7f' });
smo60778.addModifier(new VF.Dot(), 0);
smo60778.addModifier(new VF.Dot(), 0);
smo60792v1ar.push(smo60778);
smo60792v1.addTickables(smo60792v1ar)
fmtsmo6079216.joinVoices([smo60792v1]);
const fmtsmo6607716 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo66077v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66077v0ar = [];
const smo66056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo66056'] = smo66056;
smo66056.setAttribute('id', 'smo66056');
smo66077v0ar.push(smo66056);
const smo66057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66057'] = smo66057;
smo66057.setAttribute('id', 'smo66057');
smo66057.addModifier(new VF.Dot(), 0);
smo66077v0ar.push(smo66057);
const smo66058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66058'] = smo66058;
smo66058.setAttribute('id', 'smo66058');
smo66077v0ar.push(smo66058);
const smo66059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo66059'] = smo66059;
smo66059.setAttribute('id', 'smo66059');
smo66077v0ar.push(smo66059);
const smo66060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66060'] = smo66060;
smo66060.setAttribute('id', 'smo66060');
smo66060.addModifier(new VF.Dot(), 0);
smo66077v0ar.push(smo66060);
const smo66061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66061'] = smo66061;
smo66061.setAttribute('id', 'smo66061');
smo66077v0ar.push(smo66061);
smo66077v0.addTickables(smo66077v0ar)
fmtsmo6607716.joinVoices([smo66077v0]);
const smo66077v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66077v1ar = [];
const smo66062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66062'] = smo66062;
smo66062.setAttribute('id', 'smo66062');
smo66062.setStyle({ fillStyle: "#115511" });
smo66077v1ar.push(smo66062);
const smo66063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66063'] = smo66063;
smo66063.setAttribute('id', 'smo66063');
smo66063.setStyle({ fillStyle: "#115511" });
smo66077v1ar.push(smo66063);
smo66077v1.addTickables(smo66077v1ar)
fmtsmo6607716.joinVoices([smo66077v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69809 = smo60762.getStemDirection();
smo60762.setStemDirection(dirsmo69809);
smo60763.setStemDirection(dirsmo69809);
const smo69809 = new VF.Beam([smo60762,smo60763]);
const dirsmo69810 = smo60764.getStemDirection();
smo60764.setStemDirection(dirsmo69810);
smo60765.setStemDirection(dirsmo69810);
smo60766.setStemDirection(dirsmo69810);
smo60767.setStemDirection(dirsmo69810);
const smo69810 = new VF.Beam([smo60764,smo60765,smo60766,smo60767]);
const dirsmo69811 = smo60769.getStemDirection();
smo60769.setStemDirection(dirsmo69811);
smo60770.setStemDirection(dirsmo69811);
const smo69811 = new VF.Beam([smo60769,smo60770]);
const dirsmo69812 = smo60771.getStemDirection();
smo60771.setStemDirection(dirsmo69812);
smo60772.setStemDirection(dirsmo69812);
smo60773.setStemDirection(dirsmo69812);
smo60774.setStemDirection(dirsmo69812);
const smo69812 = new VF.Beam([smo60771,smo60772,smo60773,smo60774]);
 
// formatting measures in staff group smo59060
fmtsmo6079216.format([smo60792v0,smo60792v1,smo66077v0,smo66077v1], 544);
const stavesmo60792 = new VF.Stave(692, 1778, 558);
stavesmo60792.setAttribute('id', 'stavesmo60792');
stavesmo60792.setBegBarType(VF.Barline.type.NONE);
stavesmo60792.setContext(context);
stavesmo60792.draw();
smo60792v0.draw(context, stavesmo60792);
smo60792v1.draw(context, stavesmo60792);
smo69809.setContext(context);
smo69809.draw();
smo69810.setContext(context);
smo69810.draw();
smo69811.setContext(context);
smo69811.draw();
smo69812.setContext(context);
smo69812.draw();
const stavesmo66077 = new VF.Stave(692, 1862, 558);
stavesmo66077.setAttribute('id', 'stavesmo66077');
stavesmo66077.setBegBarType(VF.Barline.type.NONE);
stavesmo66077.setContext(context);
stavesmo66077.draw();
smo66077v0.draw(context, stavesmo66077);
smo66077v1.draw(context, stavesmo66077);
const fmtsmo6082417 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo60824v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60824v0ar = [];
const smo60793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60793'] = smo60793;
smo60793.setAttribute('id', 'smo60793');
smo60824v0ar.push(smo60793);
const smo60794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo60794'] = smo60794;
smo60794.setAttribute('id', 'smo60794');
smo60824v0ar.push(smo60794);
const smo60795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","stem_direction":1,"auto_stem":false,"keys":["bn/4/r"]}'))
noteHash['smo60795'] = smo60795;
smo60795.setAttribute('id', 'smo60795');
smo60824v0ar.push(smo60795);
const smo60796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60796'] = smo60796;
smo60796.setAttribute('id', 'smo60796');
smo60824v0ar.push(smo60796);
const smo60797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo60797'] = smo60797;
smo60797.setAttribute('id', 'smo60797');
smo60824v0ar.push(smo60797);
const smo60798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo60798'] = smo60798;
smo60798.setAttribute('id', 'smo60798');
smo60824v0ar.push(smo60798);
const smo60799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60799'] = smo60799;
smo60799.setAttribute('id', 'smo60799');
smo60824v0ar.push(smo60799);
const smo60800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60800'] = smo60800;
smo60800.setAttribute('id', 'smo60800');
smo60824v0ar.push(smo60800);
const smo60801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo60801'] = smo60801;
smo60801.setAttribute('id', 'smo60801');
smo60824v0ar.push(smo60801);
const smo60802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo60802'] = smo60802;
smo60802.setAttribute('id', 'smo60802');
smo60824v0ar.push(smo60802);
const smo60803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60803'] = smo60803;
smo60803.setAttribute('id', 'smo60803');
smo60824v0ar.push(smo60803);
const smo60804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo60804'] = smo60804;
smo60804.setAttribute('id', 'smo60804');
smo60824v0ar.push(smo60804);
const smo60805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo60805'] = smo60805;
smo60805.setAttribute('id', 'smo60805');
smo60824v0ar.push(smo60805);
const smo60806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60806'] = smo60806;
smo60806.setAttribute('id', 'smo60806');
smo60824v0ar.push(smo60806);
smo60824v0.addTickables(smo60824v0ar)
fmtsmo6082417.joinVoices([smo60824v0]);
const smo60824v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60824v1ar = [];
const smo60807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60807'] = smo60807;
smo60807.setAttribute('id', 'smo60807');
smo60807.setStyle({ fillStyle: '#aaaaaa7f' });
smo60824v1ar.push(smo60807);
const smo60808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60808'] = smo60808;
smo60808.setAttribute('id', 'smo60808');
smo60808.setStyle({ fillStyle: '#aaaaaa7f' });
smo60808.addModifier(new VF.Dot(), 0);
smo60808.addModifier(new VF.Dot(), 0);
smo60824v1ar.push(smo60808);
const smo60809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60809'] = smo60809;
smo60809.setAttribute('id', 'smo60809');
smo60809.setStyle({ fillStyle: '#aaaaaa7f' });
smo60824v1ar.push(smo60809);
const smo60810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60810'] = smo60810;
smo60810.setAttribute('id', 'smo60810');
smo60810.setStyle({ fillStyle: '#aaaaaa7f' });
smo60810.addModifier(new VF.Dot(), 0);
smo60810.addModifier(new VF.Dot(), 0);
smo60824v1ar.push(smo60810);
smo60824v1.addTickables(smo60824v1ar)
fmtsmo6082417.joinVoices([smo60824v1]);
const fmtsmo6609917 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo66099v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66099v0ar = [];
const smo66078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo66078'] = smo66078;
smo66078.setAttribute('id', 'smo66078');
smo66099v0ar.push(smo66078);
const smo66079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66079'] = smo66079;
smo66079.setAttribute('id', 'smo66079');
smo66079.addModifier(new VF.Dot(), 0);
smo66099v0ar.push(smo66079);
const smo66080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66080'] = smo66080;
smo66080.setAttribute('id', 'smo66080');
smo66099v0ar.push(smo66080);
const smo66081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo66081'] = smo66081;
smo66081.setAttribute('id', 'smo66081');
smo66099v0ar.push(smo66081);
const smo66082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66082'] = smo66082;
smo66082.setAttribute('id', 'smo66082');
smo66082.addModifier(new VF.Dot(), 0);
smo66099v0ar.push(smo66082);
const smo66083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66083'] = smo66083;
smo66083.setAttribute('id', 'smo66083');
smo66099v0ar.push(smo66083);
smo66099v0.addTickables(smo66099v0ar)
fmtsmo6609917.joinVoices([smo66099v0]);
const smo66099v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66099v1ar = [];
const smo66084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo66084'] = smo66084;
smo66084.setAttribute('id', 'smo66084');
smo66084.setStyle({ fillStyle: "#115511" });
smo66099v1ar.push(smo66084);
const smo66085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo66085'] = smo66085;
smo66085.setAttribute('id', 'smo66085');
smo66085.setStyle({ fillStyle: "#115511" });
smo66099v1ar.push(smo66085);
smo66099v1.addTickables(smo66099v1ar)
fmtsmo6609917.joinVoices([smo66099v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69817 = smo60796.getStemDirection();
smo60796.setStemDirection(dirsmo69817);
smo60797.setStemDirection(dirsmo69817);
smo60798.setStemDirection(dirsmo69817);
smo60799.setStemDirection(dirsmo69817);
const smo69817 = new VF.Beam([smo60796,smo60797,smo60798,smo60799]);
const dirsmo69818 = smo60801.getStemDirection();
smo60801.setStemDirection(dirsmo69818);
smo60802.setStemDirection(dirsmo69818);
const smo69818 = new VF.Beam([smo60801,smo60802]);
const dirsmo69819 = smo60803.getStemDirection();
smo60803.setStemDirection(dirsmo69819);
smo60804.setStemDirection(dirsmo69819);
smo60805.setStemDirection(dirsmo69819);
smo60806.setStemDirection(dirsmo69819);
const smo69819 = new VF.Beam([smo60803,smo60804,smo60805,smo60806]);
 
// formatting measures in staff group smo59060
fmtsmo6082417.format([smo60824v0,smo60824v1,smo66099v0,smo66099v1], 544);
const stavesmo60824 = new VF.Stave(1250, 1778, 558);
stavesmo60824.setAttribute('id', 'stavesmo60824');
stavesmo60824.setBegBarType(VF.Barline.type.NONE);
stavesmo60824.setContext(context);
stavesmo60824.draw();
smo60824v0.draw(context, stavesmo60824);
smo60824v1.draw(context, stavesmo60824);
smo69817.setContext(context);
smo69817.draw();
smo69818.setContext(context);
smo69818.draw();
smo69819.setContext(context);
smo69819.draw();
const stavesmo66099 = new VF.Stave(1250, 1862, 558);
stavesmo66099.setAttribute('id', 'stavesmo66099');
stavesmo66099.setBegBarType(VF.Barline.type.NONE);
stavesmo66099.setContext(context);
stavesmo66099.draw();
smo66099v0.draw(context, stavesmo66099);
smo66099v1.draw(context, stavesmo66099);
const rightsmo59060stavesmo608241 = new VF.StaveConnector(stavesmo60824, stavesmo66099).setType(0);
rightsmo59060stavesmo608241.setContext(context).draw();
const fmtsmo6085618 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo60856v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60856v0ar = [];
const smo60825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60825'] = smo60825;
smo60825.setAttribute('id', 'smo60825');
smo60856v0ar.push(smo60825);
const smo60826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo60826'] = smo60826;
smo60826.setAttribute('id', 'smo60826');
smo60856v0ar.push(smo60826);
const smo60827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60827'] = smo60827;
smo60827.setAttribute('id', 'smo60827');
smo60856v0ar.push(smo60827);
const smo60828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60828'] = smo60828;
smo60828.setAttribute('id', 'smo60828');
smo60856v0ar.push(smo60828);
const smo60829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo60829'] = smo60829;
smo60829.setAttribute('id', 'smo60829');
smo60856v0ar.push(smo60829);
const smo60830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60830'] = smo60830;
smo60830.setAttribute('id', 'smo60830');
smo60856v0ar.push(smo60830);
const smo60831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60831'] = smo60831;
smo60831.setAttribute('id', 'smo60831');
smo60856v0ar.push(smo60831);
const smo60832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60832'] = smo60832;
smo60832.setAttribute('id', 'smo60832');
smo60856v0ar.push(smo60832);
const smo60833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo60833'] = smo60833;
smo60833.setAttribute('id', 'smo60833');
smo60856v0ar.push(smo60833);
const smo60834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60834'] = smo60834;
smo60834.setAttribute('id', 'smo60834');
smo60856v0ar.push(smo60834);
const smo60835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60835'] = smo60835;
smo60835.setAttribute('id', 'smo60835');
smo60856v0ar.push(smo60835);
const smo60836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo60836'] = smo60836;
smo60836.setAttribute('id', 'smo60836');
smo60856v0ar.push(smo60836);
const smo60837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60837'] = smo60837;
smo60837.setAttribute('id', 'smo60837');
smo60856v0ar.push(smo60837);
const smo60838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60838'] = smo60838;
smo60838.setAttribute('id', 'smo60838');
smo60856v0ar.push(smo60838);
smo60856v0.addTickables(smo60856v0ar)
fmtsmo6085618.joinVoices([smo60856v0]);
const smo60856v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60856v1ar = [];
const smo60839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60839'] = smo60839;
smo60839.setAttribute('id', 'smo60839');
smo60839.setStyle({ fillStyle: '#aaaaaa7f' });
smo60856v1ar.push(smo60839);
const smo60840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60840'] = smo60840;
smo60840.setAttribute('id', 'smo60840');
smo60840.setStyle({ fillStyle: '#aaaaaa7f' });
smo60840.addModifier(new VF.Dot(), 0);
smo60840.addModifier(new VF.Dot(), 0);
smo60856v1ar.push(smo60840);
const smo60841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60841'] = smo60841;
smo60841.setAttribute('id', 'smo60841');
smo60841.setStyle({ fillStyle: '#aaaaaa7f' });
smo60856v1ar.push(smo60841);
const smo60842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60842'] = smo60842;
smo60842.setAttribute('id', 'smo60842');
smo60842.setStyle({ fillStyle: '#aaaaaa7f' });
smo60842.addModifier(new VF.Dot(), 0);
smo60842.addModifier(new VF.Dot(), 0);
smo60856v1ar.push(smo60842);
smo60856v1.addTickables(smo60856v1ar)
fmtsmo6085618.joinVoices([smo60856v1]);
const fmtsmo6612118 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo66121v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66121v0ar = [];
const smo66100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo66100'] = smo66100;
smo66100.setAttribute('id', 'smo66100');
smo66121v0ar.push(smo66100);
const smo66101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66101'] = smo66101;
smo66101.setAttribute('id', 'smo66101');
smo66101.addModifier(new VF.Dot(), 0);
smo66121v0ar.push(smo66101);
const smo66102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66102'] = smo66102;
smo66102.setAttribute('id', 'smo66102');
smo66121v0ar.push(smo66102);
const smo66103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo66103'] = smo66103;
smo66103.setAttribute('id', 'smo66103');
smo66121v0ar.push(smo66103);
const smo66104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66104'] = smo66104;
smo66104.setAttribute('id', 'smo66104');
smo66104.addModifier(new VF.Dot(), 0);
smo66121v0ar.push(smo66104);
const smo66105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66105'] = smo66105;
smo66105.setAttribute('id', 'smo66105');
smo66121v0ar.push(smo66105);
smo66121v0.addTickables(smo66121v0ar)
fmtsmo6612118.joinVoices([smo66121v0]);
const smo66121v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66121v1ar = [];
const smo66106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo66106'] = smo66106;
smo66106.setAttribute('id', 'smo66106');
smo66106.setStyle({ fillStyle: "#115511" });
smo66121v1ar.push(smo66106);
const smo66107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo66107'] = smo66107;
smo66107.setAttribute('id', 'smo66107');
smo66107.setStyle({ fillStyle: "#115511" });
smo66121v1ar.push(smo66107);
smo66121v1.addTickables(smo66121v1ar)
fmtsmo6612118.joinVoices([smo66121v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69832 = smo60826.getStemDirection();
smo60826.setStemDirection(dirsmo69832);
smo60827.setStemDirection(dirsmo69832);
const smo69832 = new VF.Beam([smo60826,smo60827]);
const dirsmo69833 = smo60828.getStemDirection();
smo60828.setStemDirection(dirsmo69833);
smo60829.setStemDirection(dirsmo69833);
smo60830.setStemDirection(dirsmo69833);
smo60831.setStemDirection(dirsmo69833);
const smo69833 = new VF.Beam([smo60828,smo60829,smo60830,smo60831]);
const dirsmo69834 = smo60833.getStemDirection();
smo60833.setStemDirection(dirsmo69834);
smo60834.setStemDirection(dirsmo69834);
const smo69834 = new VF.Beam([smo60833,smo60834]);
const dirsmo69835 = smo60835.getStemDirection();
smo60835.setStemDirection(dirsmo69835);
smo60836.setStemDirection(dirsmo69835);
smo60837.setStemDirection(dirsmo69835);
smo60838.setStemDirection(dirsmo69835);
const smo69835 = new VF.Beam([smo60835,smo60836,smo60837,smo60838]);
 
// formatting measures in staff group smo59060
fmtsmo6085618.format([smo60856v0,smo60856v1,smo66121v0,smo66121v1], 529);
const stavesmo60856 = new VF.Stave(90, 2049, 587);
stavesmo60856.setAttribute('id', 'stavesmo60856');
stavesmo60856.setBegBarType(1);
stavesmo60856.addClef('treble');
stavesmo60856.setContext(context);
stavesmo60856.draw();
smo60856v0.draw(context, stavesmo60856);
smo60856v1.draw(context, stavesmo60856);
smo69832.setContext(context);
smo69832.draw();
smo69833.setContext(context);
smo69833.draw();
smo69834.setContext(context);
smo69834.draw();
smo69835.setContext(context);
smo69835.draw();
const stavesmo66121 = new VF.Stave(90, 2136, 587);
stavesmo66121.setAttribute('id', 'stavesmo66121');
stavesmo66121.setBegBarType(1);
stavesmo66121.addClef('treble');
stavesmo66121.setContext(context);
stavesmo66121.draw();
smo66121v0.draw(context, stavesmo66121);
smo66121v1.draw(context, stavesmo66121);
const leftsmo59060stavesmo608561 = new VF.StaveConnector(stavesmo60856, stavesmo66121).setType(3);
leftsmo59060stavesmo608561.setContext(context).draw();
const fmtsmo6088819 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo60888v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60888v0ar = [];
const smo60857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60857'] = smo60857;
smo60857.setAttribute('id', 'smo60857');
smo60888v0ar.push(smo60857);
const smo60858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo60858'] = smo60858;
smo60858.setAttribute('id', 'smo60858');
const smo608580acc = new VF.Accidental('b');
smo60858.addModifier(smo608580acc, 0);
smo60888v0ar.push(smo60858);
const smo60859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60859'] = smo60859;
smo60859.setAttribute('id', 'smo60859');
smo60888v0ar.push(smo60859);
const smo60860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60860'] = smo60860;
smo60860.setAttribute('id', 'smo60860');
smo60888v0ar.push(smo60860);
const smo60861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo60861'] = smo60861;
smo60861.setAttribute('id', 'smo60861');
smo60888v0ar.push(smo60861);
const smo60862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60862'] = smo60862;
smo60862.setAttribute('id', 'smo60862');
smo60888v0ar.push(smo60862);
const smo60863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60863'] = smo60863;
smo60863.setAttribute('id', 'smo60863');
smo60888v0ar.push(smo60863);
const smo60864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60864'] = smo60864;
smo60864.setAttribute('id', 'smo60864');
smo60888v0ar.push(smo60864);
const smo60865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo60865'] = smo60865;
smo60865.setAttribute('id', 'smo60865');
smo60888v0ar.push(smo60865);
const smo60866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60866'] = smo60866;
smo60866.setAttribute('id', 'smo60866');
smo60888v0ar.push(smo60866);
const smo60867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60867'] = smo60867;
smo60867.setAttribute('id', 'smo60867');
smo60888v0ar.push(smo60867);
const smo60868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo60868'] = smo60868;
smo60868.setAttribute('id', 'smo60868');
smo60888v0ar.push(smo60868);
const smo60869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60869'] = smo60869;
smo60869.setAttribute('id', 'smo60869');
smo60888v0ar.push(smo60869);
const smo60870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60870'] = smo60870;
smo60870.setAttribute('id', 'smo60870');
smo60888v0ar.push(smo60870);
smo60888v0.addTickables(smo60888v0ar)
fmtsmo6088819.joinVoices([smo60888v0]);
const smo60888v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60888v1ar = [];
const smo60871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60871'] = smo60871;
smo60871.setAttribute('id', 'smo60871');
smo60871.setStyle({ fillStyle: '#aaaaaa7f' });
smo60888v1ar.push(smo60871);
const smo60872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60872'] = smo60872;
smo60872.setAttribute('id', 'smo60872');
smo60872.setStyle({ fillStyle: '#aaaaaa7f' });
smo60872.addModifier(new VF.Dot(), 0);
smo60872.addModifier(new VF.Dot(), 0);
smo60888v1ar.push(smo60872);
const smo60873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60873'] = smo60873;
smo60873.setAttribute('id', 'smo60873');
smo60873.setStyle({ fillStyle: '#aaaaaa7f' });
smo60888v1ar.push(smo60873);
const smo60874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60874'] = smo60874;
smo60874.setAttribute('id', 'smo60874');
smo60874.setStyle({ fillStyle: '#aaaaaa7f' });
smo60874.addModifier(new VF.Dot(), 0);
smo60874.addModifier(new VF.Dot(), 0);
smo60888v1ar.push(smo60874);
smo60888v1.addTickables(smo60888v1ar)
fmtsmo6088819.joinVoices([smo60888v1]);
const fmtsmo6614319 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo66143v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66143v0ar = [];
const smo66122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo66122'] = smo66122;
smo66122.setAttribute('id', 'smo66122');
smo66143v0ar.push(smo66122);
const smo66123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66123'] = smo66123;
smo66123.setAttribute('id', 'smo66123');
smo66123.addModifier(new VF.Dot(), 0);
smo66143v0ar.push(smo66123);
const smo66124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66124'] = smo66124;
smo66124.setAttribute('id', 'smo66124');
smo66143v0ar.push(smo66124);
const smo66125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo66125'] = smo66125;
smo66125.setAttribute('id', 'smo66125');
smo66143v0ar.push(smo66125);
const smo66126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66126'] = smo66126;
smo66126.setAttribute('id', 'smo66126');
smo66126.addModifier(new VF.Dot(), 0);
smo66143v0ar.push(smo66126);
const smo66127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66127'] = smo66127;
smo66127.setAttribute('id', 'smo66127');
smo66143v0ar.push(smo66127);
smo66143v0.addTickables(smo66143v0ar)
fmtsmo6614319.joinVoices([smo66143v0]);
const smo66143v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66143v1ar = [];
const smo66128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo66128'] = smo66128;
smo66128.setAttribute('id', 'smo66128');
smo66128.setStyle({ fillStyle: "#115511" });
smo66143v1ar.push(smo66128);
const smo66129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo66129'] = smo66129;
smo66129.setAttribute('id', 'smo66129');
smo66129.setStyle({ fillStyle: "#115511" });
smo66143v1ar.push(smo66129);
smo66143v1.addTickables(smo66143v1ar)
fmtsmo6614319.joinVoices([smo66143v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69840 = smo60858.getStemDirection();
smo60858.setStemDirection(dirsmo69840);
smo60859.setStemDirection(dirsmo69840);
const smo69840 = new VF.Beam([smo60858,smo60859]);
const dirsmo69841 = smo60860.getStemDirection();
smo60860.setStemDirection(dirsmo69841);
smo60861.setStemDirection(dirsmo69841);
smo60862.setStemDirection(dirsmo69841);
smo60863.setStemDirection(dirsmo69841);
const smo69841 = new VF.Beam([smo60860,smo60861,smo60862,smo60863]);
const dirsmo69842 = smo60865.getStemDirection();
smo60865.setStemDirection(dirsmo69842);
smo60866.setStemDirection(dirsmo69842);
const smo69842 = new VF.Beam([smo60865,smo60866]);
const dirsmo69843 = smo60867.getStemDirection();
smo60867.setStemDirection(dirsmo69843);
smo60868.setStemDirection(dirsmo69843);
smo60869.setStemDirection(dirsmo69843);
smo60870.setStemDirection(dirsmo69843);
const smo69843 = new VF.Beam([smo60867,smo60868,smo60869,smo60870]);
 
// formatting measures in staff group smo59060
fmtsmo6088819.format([smo60888v0,smo60888v1,smo66143v0,smo66143v1], 575);
const stavesmo60888 = new VF.Stave(677, 2049, 589);
stavesmo60888.setAttribute('id', 'stavesmo60888');
stavesmo60888.setBegBarType(VF.Barline.type.NONE);
stavesmo60888.setContext(context);
stavesmo60888.draw();
smo60888v0.draw(context, stavesmo60888);
smo60888v1.draw(context, stavesmo60888);
smo69840.setContext(context);
smo69840.draw();
smo69841.setContext(context);
smo69841.draw();
smo69842.setContext(context);
smo69842.draw();
smo69843.setContext(context);
smo69843.draw();
const stavesmo66143 = new VF.Stave(677, 2136, 589);
stavesmo66143.setAttribute('id', 'stavesmo66143');
stavesmo66143.setBegBarType(VF.Barline.type.NONE);
stavesmo66143.setContext(context);
stavesmo66143.draw();
smo66143v0.draw(context, stavesmo66143);
smo66143v1.draw(context, stavesmo66143);
const fmtsmo6092020 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo60920v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60920v0ar = [];
const smo60889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60889'] = smo60889;
smo60889.setAttribute('id', 'smo60889');
smo60920v0ar.push(smo60889);
const smo60890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo60890'] = smo60890;
smo60890.setAttribute('id', 'smo60890');
smo60920v0ar.push(smo60890);
const smo60891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60891'] = smo60891;
smo60891.setAttribute('id', 'smo60891');
smo60920v0ar.push(smo60891);
const smo60892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60892'] = smo60892;
smo60892.setAttribute('id', 'smo60892');
smo60920v0ar.push(smo60892);
const smo60893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo60893'] = smo60893;
smo60893.setAttribute('id', 'smo60893');
smo60920v0ar.push(smo60893);
const smo60894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60894'] = smo60894;
smo60894.setAttribute('id', 'smo60894');
smo60920v0ar.push(smo60894);
const smo60895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60895'] = smo60895;
smo60895.setAttribute('id', 'smo60895');
smo60920v0ar.push(smo60895);
const smo60896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60896'] = smo60896;
smo60896.setAttribute('id', 'smo60896');
smo60920v0ar.push(smo60896);
const smo60897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo60897'] = smo60897;
smo60897.setAttribute('id', 'smo60897');
smo60920v0ar.push(smo60897);
const smo60898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60898'] = smo60898;
smo60898.setAttribute('id', 'smo60898');
smo60920v0ar.push(smo60898);
const smo60899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60899'] = smo60899;
smo60899.setAttribute('id', 'smo60899');
smo60920v0ar.push(smo60899);
const smo60900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo60900'] = smo60900;
smo60900.setAttribute('id', 'smo60900');
smo60920v0ar.push(smo60900);
const smo60901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60901'] = smo60901;
smo60901.setAttribute('id', 'smo60901');
smo60920v0ar.push(smo60901);
const smo60902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60902'] = smo60902;
smo60902.setAttribute('id', 'smo60902');
smo60920v0ar.push(smo60902);
smo60920v0.addTickables(smo60920v0ar)
fmtsmo6092020.joinVoices([smo60920v0]);
const smo60920v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60920v1ar = [];
const smo60903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60903'] = smo60903;
smo60903.setAttribute('id', 'smo60903');
smo60903.setStyle({ fillStyle: '#aaaaaa7f' });
smo60920v1ar.push(smo60903);
const smo60904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60904'] = smo60904;
smo60904.setAttribute('id', 'smo60904');
smo60904.setStyle({ fillStyle: '#aaaaaa7f' });
smo60904.addModifier(new VF.Dot(), 0);
smo60904.addModifier(new VF.Dot(), 0);
smo60920v1ar.push(smo60904);
const smo60905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60905'] = smo60905;
smo60905.setAttribute('id', 'smo60905');
smo60905.setStyle({ fillStyle: '#aaaaaa7f' });
smo60920v1ar.push(smo60905);
const smo60906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60906'] = smo60906;
smo60906.setAttribute('id', 'smo60906');
smo60906.setStyle({ fillStyle: '#aaaaaa7f' });
smo60906.addModifier(new VF.Dot(), 0);
smo60906.addModifier(new VF.Dot(), 0);
smo60920v1ar.push(smo60906);
smo60920v1.addTickables(smo60920v1ar)
fmtsmo6092020.joinVoices([smo60920v1]);
const fmtsmo6616520 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo66165v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66165v0ar = [];
const smo66144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo66144'] = smo66144;
smo66144.setAttribute('id', 'smo66144');
smo66165v0ar.push(smo66144);
const smo66145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66145'] = smo66145;
smo66145.setAttribute('id', 'smo66145');
smo66145.addModifier(new VF.Dot(), 0);
smo66165v0ar.push(smo66145);
const smo66146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66146'] = smo66146;
smo66146.setAttribute('id', 'smo66146');
smo66165v0ar.push(smo66146);
const smo66147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo66147'] = smo66147;
smo66147.setAttribute('id', 'smo66147');
smo66165v0ar.push(smo66147);
const smo66148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66148'] = smo66148;
smo66148.setAttribute('id', 'smo66148');
smo66148.addModifier(new VF.Dot(), 0);
smo66165v0ar.push(smo66148);
const smo66149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66149'] = smo66149;
smo66149.setAttribute('id', 'smo66149');
smo66165v0ar.push(smo66149);
smo66165v0.addTickables(smo66165v0ar)
fmtsmo6616520.joinVoices([smo66165v0]);
const smo66165v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66165v1ar = [];
const smo66150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n"]}'))
noteHash['smo66150'] = smo66150;
smo66150.setAttribute('id', 'smo66150');
smo66150.setStyle({ fillStyle: "#115511" });
smo66165v1ar.push(smo66150);
const smo66151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n"]}'))
noteHash['smo66151'] = smo66151;
smo66151.setAttribute('id', 'smo66151');
smo66151.setStyle({ fillStyle: "#115511" });
smo66165v1ar.push(smo66151);
smo66165v1.addTickables(smo66165v1ar)
fmtsmo6616520.joinVoices([smo66165v1]);
// create beam groups and tuplets for format grp smo59060 before formatting
const dirsmo69848 = smo60890.getStemDirection();
smo60890.setStemDirection(dirsmo69848);
smo60891.setStemDirection(dirsmo69848);
const smo69848 = new VF.Beam([smo60890,smo60891]);
const dirsmo69849 = smo60892.getStemDirection();
smo60892.setStemDirection(dirsmo69849);
smo60893.setStemDirection(dirsmo69849);
smo60894.setStemDirection(dirsmo69849);
smo60895.setStemDirection(dirsmo69849);
const smo69849 = new VF.Beam([smo60892,smo60893,smo60894,smo60895]);
const dirsmo69850 = smo60897.getStemDirection();
smo60897.setStemDirection(dirsmo69850);
smo60898.setStemDirection(dirsmo69850);
const smo69850 = new VF.Beam([smo60897,smo60898]);
const dirsmo69851 = smo60899.getStemDirection();
smo60899.setStemDirection(dirsmo69851);
smo60900.setStemDirection(dirsmo69851);
smo60901.setStemDirection(dirsmo69851);
smo60902.setStemDirection(dirsmo69851);
const smo69851 = new VF.Beam([smo60899,smo60900,smo60901,smo60902]);
 
// formatting measures in staff group smo59060
fmtsmo6092020.format([smo60920v0,smo60920v1,smo66165v0,smo66165v1], 529);
const stavesmo60920 = new VF.Stave(1266, 2049, 543);
stavesmo60920.setAttribute('id', 'stavesmo60920');
stavesmo60920.setBegBarType(VF.Barline.type.NONE);
stavesmo60920.setContext(context);
stavesmo60920.draw();
smo60920v0.draw(context, stavesmo60920);
smo60920v1.draw(context, stavesmo60920);
smo69848.setContext(context);
smo69848.draw();
smo69849.setContext(context);
smo69849.draw();
smo69850.setContext(context);
smo69850.draw();
smo69851.setContext(context);
smo69851.draw();
const stavesmo66165 = new VF.Stave(1266, 2136, 543);
stavesmo66165.setAttribute('id', 'stavesmo66165');
stavesmo66165.setBegBarType(VF.Barline.type.NONE);
stavesmo66165.setContext(context);
stavesmo66165.draw();
smo66165v0.draw(context, stavesmo66165);
smo66165v1.draw(context, stavesmo66165);
const rightsmo59060stavesmo609201 = new VF.StaveConnector(stavesmo60920, stavesmo66165).setType(0);
rightsmo59060stavesmo609201.setContext(context).draw();
const smo72077 = new VF.StaveTie({ first_note: smo65727, last_note: smo65728, 
          firstNote: smo65727, lastNote: smo65728, first_indices: [0], last_indices: [0]});
smo72077.setContext(context).draw();
const smo72078 = new VF.StaveTie({ first_note: smo65730, last_note: smo65731, 
          firstNote: smo65730, lastNote: smo65731, first_indices: [0], last_indices: [0]});
smo72078.setContext(context).draw();
const smo72079 = new VF.StaveTie({ first_note: smo65749, last_note: smo65750, 
          firstNote: smo65749, lastNote: smo65750, first_indices: [0], last_indices: [0]});
smo72079.setContext(context).draw();
const smo72080 = new VF.StaveTie({ first_note: smo65752, last_note: smo65753, 
          firstNote: smo65752, lastNote: smo65753, first_indices: [0], last_indices: [0]});
smo72080.setContext(context).draw();
const smo72081 = new VF.StaveTie({ first_note: smo65771, last_note: smo65772, 
          firstNote: smo65771, lastNote: smo65772, first_indices: [0], last_indices: [0]});
smo72081.setContext(context).draw();
const smo72082 = new VF.StaveTie({ first_note: smo65774, last_note: smo65775, 
          firstNote: smo65774, lastNote: smo65775, first_indices: [0], last_indices: [0]});
smo72082.setContext(context).draw();
const smo72083 = new VF.StaveTie({ first_note: smo65793, last_note: smo65794, 
          firstNote: smo65793, lastNote: smo65794, first_indices: [0], last_indices: [0]});
smo72083.setContext(context).draw();
const smo72084 = new VF.StaveTie({ first_note: smo65796, last_note: smo65797, 
          firstNote: smo65796, lastNote: smo65797, first_indices: [0], last_indices: [0]});
smo72084.setContext(context).draw();
const smo72085 = new VF.StaveTie({ first_note: smo65815, last_note: smo65816, 
          firstNote: smo65815, lastNote: smo65816, first_indices: [0], last_indices: [0]});
smo72085.setContext(context).draw();
const smo72086 = new VF.StaveTie({ first_note: smo65818, last_note: smo65819, 
          firstNote: smo65818, lastNote: smo65819, first_indices: [0], last_indices: [0]});
smo72086.setContext(context).draw();
const smo72087 = new VF.StaveTie({ first_note: smo65837, last_note: smo65838, 
          firstNote: smo65837, lastNote: smo65838, first_indices: [0], last_indices: [0]});
smo72087.setContext(context).draw();
const smo72088 = new VF.StaveTie({ first_note: smo65840, last_note: smo65841, 
          firstNote: smo65840, lastNote: smo65841, first_indices: [0], last_indices: [0]});
smo72088.setContext(context).draw();
const smo72089 = new VF.StaveTie({ first_note: smo65859, last_note: smo65860, 
          firstNote: smo65859, lastNote: smo65860, first_indices: [0], last_indices: [0]});
smo72089.setContext(context).draw();
const smo72090 = new VF.StaveTie({ first_note: smo65862, last_note: smo65863, 
          firstNote: smo65862, lastNote: smo65863, first_indices: [0], last_indices: [0]});
smo72090.setContext(context).draw();
const smo72091 = new VF.StaveTie({ first_note: smo65881, last_note: smo65882, 
          firstNote: smo65881, lastNote: smo65882, first_indices: [0], last_indices: [0]});
smo72091.setContext(context).draw();
const smo72092 = new VF.StaveTie({ first_note: smo65884, last_note: smo65885, 
          firstNote: smo65884, lastNote: smo65885, first_indices: [0], last_indices: [0]});
smo72092.setContext(context).draw();
const smo72093 = new VF.StaveTie({ first_note: smo65903, last_note: smo65904, 
          firstNote: smo65903, lastNote: smo65904, first_indices: [0], last_indices: [0]});
smo72093.setContext(context).draw();
const smo72094 = new VF.StaveTie({ first_note: smo65906, last_note: smo65907, 
          firstNote: smo65906, lastNote: smo65907, first_indices: [0], last_indices: [0]});
smo72094.setContext(context).draw();
const smo72095 = new VF.StaveTie({ first_note: smo65925, last_note: smo65926, 
          firstNote: smo65925, lastNote: smo65926, first_indices: [0], last_indices: [0]});
smo72095.setContext(context).draw();
const smo72096 = new VF.StaveTie({ first_note: smo65928, last_note: smo65929, 
          firstNote: smo65928, lastNote: smo65929, first_indices: [0], last_indices: [0]});
smo72096.setContext(context).draw();
const smo72097 = new VF.StaveTie({ first_note: smo65947, last_note: smo65948, 
          firstNote: smo65947, lastNote: smo65948, first_indices: [0], last_indices: [0]});
smo72097.setContext(context).draw();
const smo72098 = new VF.StaveTie({ first_note: smo65950, last_note: smo65951, 
          firstNote: smo65950, lastNote: smo65951, first_indices: [0], last_indices: [0]});
smo72098.setContext(context).draw();
const smo72099 = new VF.StaveTie({ first_note: smo65969, last_note: smo65970, 
          firstNote: smo65969, lastNote: smo65970, first_indices: [0], last_indices: [0]});
smo72099.setContext(context).draw();
const smo72100 = new VF.StaveTie({ first_note: smo65972, last_note: smo65973, 
          firstNote: smo65972, lastNote: smo65973, first_indices: [0], last_indices: [0]});
smo72100.setContext(context).draw();
const smo72101 = new VF.StaveTie({ first_note: smo65991, last_note: smo65992, 
          firstNote: smo65991, lastNote: smo65992, first_indices: [0], last_indices: [0]});
smo72101.setContext(context).draw();
const smo72102 = new VF.StaveTie({ first_note: smo65994, last_note: smo65995, 
          firstNote: smo65994, lastNote: smo65995, first_indices: [0], last_indices: [0]});
smo72102.setContext(context).draw();
const smo72103 = new VF.StaveTie({ first_note: smo66013, last_note: smo66014, 
          firstNote: smo66013, lastNote: smo66014, first_indices: [0], last_indices: [0]});
smo72103.setContext(context).draw();
const smo72104 = new VF.StaveTie({ first_note: smo66016, last_note: smo66017, 
          firstNote: smo66016, lastNote: smo66017, first_indices: [0], last_indices: [0]});
smo72104.setContext(context).draw();
const smo72105 = new VF.StaveTie({ first_note: smo66035, last_note: smo66036, 
          firstNote: smo66035, lastNote: smo66036, first_indices: [0], last_indices: [0]});
smo72105.setContext(context).draw();
const smo72106 = new VF.StaveTie({ first_note: smo66038, last_note: smo66039, 
          firstNote: smo66038, lastNote: smo66039, first_indices: [0], last_indices: [0]});
smo72106.setContext(context).draw();
const smo72107 = new VF.StaveTie({ first_note: smo66057, last_note: smo66058, 
          firstNote: smo66057, lastNote: smo66058, first_indices: [0], last_indices: [0]});
smo72107.setContext(context).draw();
const smo72108 = new VF.StaveTie({ first_note: smo66060, last_note: smo66061, 
          firstNote: smo66060, lastNote: smo66061, first_indices: [0], last_indices: [0]});
smo72108.setContext(context).draw();
const smo72109 = new VF.StaveTie({ first_note: smo66079, last_note: smo66080, 
          firstNote: smo66079, lastNote: smo66080, first_indices: [0], last_indices: [0]});
smo72109.setContext(context).draw();
const smo72110 = new VF.StaveTie({ first_note: smo66082, last_note: smo66083, 
          firstNote: smo66082, lastNote: smo66083, first_indices: [0], last_indices: [0]});
smo72110.setContext(context).draw();
const smo72111 = new VF.StaveTie({ first_note: smo66101, last_note: smo66102, 
          firstNote: smo66101, lastNote: smo66102, first_indices: [0], last_indices: [0]});
smo72111.setContext(context).draw();
const smo72112 = new VF.StaveTie({ first_note: smo66104, last_note: smo66105, 
          firstNote: smo66104, lastNote: smo66105, first_indices: [0], last_indices: [0]});
smo72112.setContext(context).draw();
const smo72113 = new VF.StaveTie({ first_note: smo66123, last_note: smo66124, 
          firstNote: smo66123, lastNote: smo66124, first_indices: [0], last_indices: [0]});
smo72113.setContext(context).draw();
const smo72114 = new VF.StaveTie({ first_note: smo66126, last_note: smo66127, 
          firstNote: smo66126, lastNote: smo66127, first_indices: [0], last_indices: [0]});
smo72114.setContext(context).draw();
const smo72115 = new VF.StaveTie({ first_note: smo66145, last_note: smo66146, 
          firstNote: smo66145, lastNote: smo66146, first_indices: [0], last_indices: [0]});
smo72115.setContext(context).draw();
const smo72116 = new VF.StaveTie({ first_note: smo66148, last_note: smo66149, 
          firstNote: smo66148, lastNote: smo66149, first_indices: [0], last_indices: [0]});
smo72116.setContext(context).draw();
}
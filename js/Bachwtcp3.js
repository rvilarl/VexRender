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
const fmtsmo6034246 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo60342v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60342v0ar = [];
const smo60303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60303'] = smo60303;
smo60303.setAttribute('id', 'smo60303');
smo60342v0ar.push(smo60303);
const smo60304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60304'] = smo60304;
smo60304.setAttribute('id', 'smo60304');
smo60342v0ar.push(smo60304);
const smo60305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60305'] = smo60305;
smo60305.setAttribute('id', 'smo60305');
smo60342v0ar.push(smo60305);
const smo60306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60306'] = smo60306;
smo60306.setAttribute('id', 'smo60306');
smo60342v0ar.push(smo60306);
const smo60307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo60307'] = smo60307;
smo60307.setAttribute('id', 'smo60307');
smo60342v0ar.push(smo60307);
const smo60308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60308'] = smo60308;
smo60308.setAttribute('id', 'smo60308');
smo60342v0ar.push(smo60308);
const smo60309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60309'] = smo60309;
smo60309.setAttribute('id', 'smo60309');
smo60342v0ar.push(smo60309);
const smo60310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60310'] = smo60310;
smo60310.setAttribute('id', 'smo60310');
smo60342v0ar.push(smo60310);
const smo60311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60311'] = smo60311;
smo60311.setAttribute('id', 'smo60311');
const smo603110acc = new VF.Accidental('#');
smo60311.addModifier(smo603110acc, 0);
smo60342v0ar.push(smo60311);
const smo60312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo60312'] = smo60312;
smo60312.setAttribute('id', 'smo60312');
smo60342v0ar.push(smo60312);
const smo60313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60313'] = smo60313;
smo60313.setAttribute('id', 'smo60313');
smo60342v0ar.push(smo60313);
const smo60314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60314'] = smo60314;
smo60314.setAttribute('id', 'smo60314');
smo60342v0ar.push(smo60314);
const smo60315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60315'] = smo60315;
smo60315.setAttribute('id', 'smo60315');
smo60342v0ar.push(smo60315);
const smo60316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60316'] = smo60316;
smo60316.setAttribute('id', 'smo60316');
smo60342v0ar.push(smo60316);
smo60342v0.addTickables(smo60342v0ar)
fmtsmo6034246.joinVoices([smo60342v0]);
const smo60342v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60342v1ar = [];
const smo60317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60317'] = smo60317;
smo60317.setAttribute('id', 'smo60317');
smo60317.setStyle({ fillStyle: "#115511" });
smo60342v1ar.push(smo60317);
const smo60318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60318'] = smo60318;
smo60318.setAttribute('id', 'smo60318');
smo60318.setStyle({ fillStyle: "#115511" });
smo60342v1ar.push(smo60318);
const smo60319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60319'] = smo60319;
smo60319.setAttribute('id', 'smo60319');
smo60319.setStyle({ fillStyle: "#115511" });
smo60342v1ar.push(smo60319);
const smo60320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo60320'] = smo60320;
smo60320.setAttribute('id', 'smo60320');
smo60320.setStyle({ fillStyle: "#115511" });
const smo603200acc = new VF.Accidental('#');
smo60320.addModifier(smo603200acc, 0);
smo60342v1ar.push(smo60320);
const smo60321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60321'] = smo60321;
smo60321.setAttribute('id', 'smo60321');
smo60321.setStyle({ fillStyle: "#115511" });
const smo603210acc = new VF.Accidental('#');
smo60321.addModifier(smo603210acc, 0);
smo60342v1ar.push(smo60321);
const smo60322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60322'] = smo60322;
smo60322.setAttribute('id', 'smo60322');
smo60322.setStyle({ fillStyle: "#115511" });
const smo603220acc = new VF.Accidental('n');
smo60322.addModifier(smo603220acc, 0);
smo60342v1ar.push(smo60322);
const smo60323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60323'] = smo60323;
smo60323.setAttribute('id', 'smo60323');
smo60323.setStyle({ fillStyle: "#115511" });
smo60342v1ar.push(smo60323);
const smo60324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60324'] = smo60324;
smo60324.setAttribute('id', 'smo60324');
smo60324.setStyle({ fillStyle: "#115511" });
smo60342v1ar.push(smo60324);
const smo60325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60325'] = smo60325;
smo60325.setAttribute('id', 'smo60325');
smo60325.setStyle({ fillStyle: "#115511" });
smo60342v1ar.push(smo60325);
const smo60326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60326'] = smo60326;
smo60326.setAttribute('id', 'smo60326');
smo60326.setStyle({ fillStyle: "#115511" });
smo60342v1ar.push(smo60326);
const smo60327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60327'] = smo60327;
smo60327.setAttribute('id', 'smo60327');
smo60327.setStyle({ fillStyle: "#115511" });
smo60342v1ar.push(smo60327);
const smo60328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo60328'] = smo60328;
smo60328.setAttribute('id', 'smo60328');
smo60328.setStyle({ fillStyle: "#115511" });
smo60342v1ar.push(smo60328);
smo60342v1.addTickables(smo60342v1ar)
fmtsmo6034246.joinVoices([smo60342v1]);
const fmtsmo6539546 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo65395v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65395v0ar = [];
const smo65367 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo65367'] = smo65367;
smo65367.setAttribute('id', 'smo65367');
smo65395v0ar.push(smo65367);
const smo65368 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65368'] = smo65368;
smo65368.setAttribute('id', 'smo65368');
smo65395v0ar.push(smo65368);
const smo65369 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo65369'] = smo65369;
smo65369.setAttribute('id', 'smo65369');
const smo653690acc = new VF.Accidental('#');
smo65369.addModifier(smo653690acc, 0);
smo65395v0ar.push(smo65369);
const smo65370 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
noteHash['smo65370'] = smo65370;
smo65370.setAttribute('id', 'smo65370');
const smo653700acc = new VF.Accidental('#');
smo65370.addModifier(smo653700acc, 0);
smo65395v0ar.push(smo65370);
const smo65371 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65371'] = smo65371;
smo65371.setAttribute('id', 'smo65371');
smo65371.addModifier(new VF.Dot(), 0);
smo65395v0ar.push(smo65371);
const smo65372 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65372'] = smo65372;
smo65372.setAttribute('id', 'smo65372');
smo65395v0ar.push(smo65372);
const smo65373 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65373'] = smo65373;
smo65373.setAttribute('id', 'smo65373');
smo65395v0ar.push(smo65373);
const smo65374 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
noteHash['smo65374'] = smo65374;
smo65374.setAttribute('id', 'smo65374');
smo65395v0ar.push(smo65374);
const smo65375 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65375'] = smo65375;
smo65375.setAttribute('id', 'smo65375');
smo65395v0ar.push(smo65375);
smo65395v0.addTickables(smo65395v0ar)
fmtsmo6539546.joinVoices([smo65395v0]);
const smo65395v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65395v1ar = [];
const smo65376 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
noteHash['smo65376'] = smo65376;
smo65376.setAttribute('id', 'smo65376');
smo65376.setStyle({ fillStyle: "#115511" });
smo65395v1ar.push(smo65376);
const smo65377 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65377'] = smo65377;
smo65377.setAttribute('id', 'smo65377');
smo65377.setStyle({ fillStyle: "#115511" });
smo65395v1ar.push(smo65377);
const smo65378 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65378'] = smo65378;
smo65378.setAttribute('id', 'smo65378');
smo65378.setStyle({ fillStyle: "#115511" });
smo65395v1ar.push(smo65378);
const smo65379 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65379'] = smo65379;
smo65379.setAttribute('id', 'smo65379');
smo65379.setStyle({ fillStyle: "#115511" });
smo65395v1ar.push(smo65379);
const smo65380 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65380'] = smo65380;
smo65380.setAttribute('id', 'smo65380');
smo65380.setStyle({ fillStyle: "#115511" });
const smo653800acc = new VF.Accidental('n');
smo65380.addModifier(smo653800acc, 0);
smo65395v1ar.push(smo65380);
const smo65381 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65381'] = smo65381;
smo65381.setAttribute('id', 'smo65381');
smo65381.setStyle({ fillStyle: "#115511" });
smo65395v1ar.push(smo65381);
smo65395v1.addTickables(smo65395v1ar)
fmtsmo6539546.joinVoices([smo65395v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68789 = smo60303.getStemDirection();
smo60303.setStemDirection(dirsmo68789);
smo60304.setStemDirection(dirsmo68789);
smo60305.setStemDirection(dirsmo68789);
const smo68789 = new VF.Beam([smo60303,smo60304,smo60305]);
const dirsmo68790 = smo60306.getStemDirection();
smo60306.setStemDirection(dirsmo68790);
smo60307.setStemDirection(dirsmo68790);
smo60308.setStemDirection(dirsmo68790);
smo60309.setStemDirection(dirsmo68790);
const smo68790 = new VF.Beam([smo60306,smo60307,smo60308,smo60309]);
const dirsmo68791 = smo60310.getStemDirection();
smo60310.setStemDirection(dirsmo68791);
smo60311.setStemDirection(dirsmo68791);
smo60312.setStemDirection(dirsmo68791);
smo60313.setStemDirection(dirsmo68791);
const smo68791 = new VF.Beam([smo60310,smo60311,smo60312,smo60313]);
const dirsmo68792 = smo60314.getStemDirection();
smo60314.setStemDirection(dirsmo68792);
smo60315.setStemDirection(dirsmo68792);
smo60316.setStemDirection(dirsmo68792);
const smo68792 = new VF.Beam([smo60314,smo60315,smo60316]);
const dirsmo68793 = smo60317.getStemDirection();
smo60317.setStemDirection(dirsmo68793);
smo60318.setStemDirection(dirsmo68793);
smo60319.setStemDirection(dirsmo68793);
smo60320.setStemDirection(dirsmo68793);
const smo68793 = new VF.Beam([smo60317,smo60318,smo60319,smo60320]);
const dirsmo68794 = smo60321.getStemDirection();
smo60321.setStemDirection(dirsmo68794);
smo60322.setStemDirection(dirsmo68794);
const smo68794 = new VF.Beam([smo60321,smo60322]);
const dirsmo68795 = smo60323.getStemDirection();
smo60323.setStemDirection(dirsmo68795);
smo60324.setStemDirection(dirsmo68795);
const smo68795 = new VF.Beam([smo60323,smo60324]);
const dirsmo68796 = smo60325.getStemDirection();
smo60325.setStemDirection(dirsmo68796);
smo60326.setStemDirection(dirsmo68796);
smo60327.setStemDirection(dirsmo68796);
smo60328.setStemDirection(dirsmo68796);
const smo68796 = new VF.Beam([smo60325,smo60326,smo60327,smo60328]);
const dirsmo68799 = smo65368.getStemDirection();
smo65368.setStemDirection(dirsmo68799);
smo65369.setStemDirection(dirsmo68799);
smo65370.setStemDirection(dirsmo68799);
const smo68799 = new VF.Beam([smo65368,smo65369,smo65370]);
const dirsmo68800 = smo65371.getStemDirection();
smo65371.setStemDirection(dirsmo68800);
smo65372.setStemDirection(dirsmo68800);
smo65373.setStemDirection(dirsmo68800);
const smo68800 = new VF.Beam([smo65371,smo65372,smo65373]);
const dirsmo68801 = smo65374.getStemDirection();
smo65374.setStemDirection(dirsmo68801);
smo65375.setStemDirection(dirsmo68801);
const smo68801 = new VF.Beam([smo65374,smo65375]);
const dirsmo68802 = smo65378.getStemDirection();
smo65378.setStemDirection(dirsmo68802);
smo65379.setStemDirection(dirsmo68802);
const smo68802 = new VF.Beam([smo65378,smo65379]);
 
// formatting measures in staff group smo57677
fmtsmo6034246.format([smo60342v0,smo60342v1,smo65395v0,smo65395v1], 518);
const stavesmo60342 = new VF.Stave(90, 304, 576);
stavesmo60342.setAttribute('id', 'stavesmo60342');
stavesmo60342.setBegBarType(1);
stavesmo60342.addClef('treble');
stavesmo60342.setContext(context);
stavesmo60342.draw();
smo60342v0.draw(context, stavesmo60342);
smo60342v1.draw(context, stavesmo60342);
smo68789.setContext(context);
smo68789.draw();
smo68790.setContext(context);
smo68790.draw();
smo68791.setContext(context);
smo68791.draw();
smo68792.setContext(context);
smo68792.draw();
smo68793.setContext(context);
smo68793.draw();
smo68794.setContext(context);
smo68794.draw();
smo68795.setContext(context);
smo68795.draw();
smo68796.setContext(context);
smo68796.draw();
const stavesmo65395 = new VF.Stave(90, 438, 576);
stavesmo65395.setAttribute('id', 'stavesmo65395');
stavesmo65395.setBegBarType(1);
stavesmo65395.addClef('bass');
stavesmo65395.setContext(context);
stavesmo65395.draw();
smo65395v0.draw(context, stavesmo65395);
smo65395v1.draw(context, stavesmo65395);
smo68799.setContext(context);
smo68799.draw();
smo68800.setContext(context);
smo68800.draw();
smo68801.setContext(context);
smo68801.draw();
smo68802.setContext(context);
smo68802.draw();
const leftsmo57677stavesmo603421 = new VF.StaveConnector(stavesmo60342, stavesmo65395).setType(3);
leftsmo57677stavesmo603421.setContext(context).draw();
const fmtsmo6037747 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo60377v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60377v0ar = [];
const smo60343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60343'] = smo60343;
smo60343.setAttribute('id', 'smo60343');
smo60377v0ar.push(smo60343);
const smo60344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60344'] = smo60344;
smo60344.setAttribute('id', 'smo60344');
smo60377v0ar.push(smo60344);
const smo60345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60345'] = smo60345;
smo60345.setAttribute('id', 'smo60345');
smo60377v0ar.push(smo60345);
const smo60346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60346'] = smo60346;
smo60346.setAttribute('id', 'smo60346');
smo60377v0ar.push(smo60346);
const smo60347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60347'] = smo60347;
smo60347.setAttribute('id', 'smo60347');
smo60377v0ar.push(smo60347);
const smo60348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60348'] = smo60348;
smo60348.setAttribute('id', 'smo60348');
smo60377v0ar.push(smo60348);
const smo60349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60349'] = smo60349;
smo60349.setAttribute('id', 'smo60349');
smo60377v0ar.push(smo60349);
const smo60350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60350'] = smo60350;
smo60350.setAttribute('id', 'smo60350');
smo60350.addModifier(new VF.Dot(), 0);
const smo60351 = new VF.Ornament('mordent_inverted');
smo60350.addModifier(smo60351, 0);
smo60377v0ar.push(smo60350);
const smo60352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60352'] = smo60352;
smo60352.setAttribute('id', 'smo60352');
smo60377v0ar.push(smo60352);
smo60377v0.addTickables(smo60377v0ar)
fmtsmo6037747.joinVoices([smo60377v0]);
const smo60377v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60377v1ar = [];
const smo60353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60353'] = smo60353;
smo60353.setAttribute('id', 'smo60353');
smo60353.setStyle({ fillStyle: "#115511" });
smo60377v1ar.push(smo60353);
const smo60354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo60354'] = smo60354;
smo60354.setAttribute('id', 'smo60354');
smo60354.setStyle({ fillStyle: "#115511" });
const smo603540acc = new VF.Accidental('#');
smo60354.addModifier(smo603540acc, 0);
smo60377v1ar.push(smo60354);
const smo60355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60355'] = smo60355;
smo60355.setAttribute('id', 'smo60355');
smo60355.setStyle({ fillStyle: "#115511" });
smo60377v1ar.push(smo60355);
const smo60356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60356'] = smo60356;
smo60356.setAttribute('id', 'smo60356');
smo60356.setStyle({ fillStyle: "#115511" });
smo60377v1ar.push(smo60356);
const smo60357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo60357'] = smo60357;
smo60357.setAttribute('id', 'smo60357');
smo60357.setStyle({ fillStyle: "#115511" });
smo60377v1ar.push(smo60357);
const smo60358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60358'] = smo60358;
smo60358.setAttribute('id', 'smo60358');
smo60358.setStyle({ fillStyle: "#115511" });
const smo603580acc = new VF.Accidental('#');
smo60358.addModifier(smo603580acc, 0);
smo60377v1ar.push(smo60358);
const smo60359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo60359'] = smo60359;
smo60359.setAttribute('id', 'smo60359');
smo60359.setStyle({ fillStyle: "#115511" });
smo60377v1ar.push(smo60359);
const smo60360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60360'] = smo60360;
smo60360.setAttribute('id', 'smo60360');
smo60360.setStyle({ fillStyle: "#115511" });
smo60377v1ar.push(smo60360);
const smo60361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60361'] = smo60361;
smo60361.setAttribute('id', 'smo60361');
smo60361.setStyle({ fillStyle: "#115511" });
smo60377v1ar.push(smo60361);
const smo60362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
noteHash['smo60362'] = smo60362;
smo60362.setAttribute('id', 'smo60362');
smo60362.setStyle({ fillStyle: "#115511" });
smo60377v1ar.push(smo60362);
const smo60363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
noteHash['smo60363'] = smo60363;
smo60363.setAttribute('id', 'smo60363');
smo60363.setStyle({ fillStyle: "#115511" });
smo60377v1ar.push(smo60363);
smo60377v1.addTickables(smo60377v1ar)
fmtsmo6037747.joinVoices([smo60377v1]);
const fmtsmo6542547 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo65425v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65425v0ar = [];
const smo65396 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo65396'] = smo65396;
smo65396.setAttribute('id', 'smo65396');
const smo653960acc = new VF.Accidental('#');
smo65396.addModifier(smo653960acc, 0);
smo65425v0ar.push(smo65396);
const smo65397 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65397'] = smo65397;
smo65397.setAttribute('id', 'smo65397');
smo65425v0ar.push(smo65397);
const smo65398 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65398'] = smo65398;
smo65398.setAttribute('id', 'smo65398');
smo65425v0ar.push(smo65398);
const smo65399 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65399'] = smo65399;
smo65399.setAttribute('id', 'smo65399');
smo65425v0ar.push(smo65399);
const smo65400 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65400'] = smo65400;
smo65400.setAttribute('id', 'smo65400');
smo65425v0ar.push(smo65400);
const smo65401 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65401'] = smo65401;
smo65401.setAttribute('id', 'smo65401');
smo65425v0ar.push(smo65401);
const smo65402 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
noteHash['smo65402'] = smo65402;
smo65402.setAttribute('id', 'smo65402');
const smo654020acc = new VF.Accidental('#');
smo65402.addModifier(smo654020acc, 0);
smo65425v0ar.push(smo65402);
const smo65403 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65403'] = smo65403;
smo65403.setAttribute('id', 'smo65403');
smo65425v0ar.push(smo65403);
const smo65404 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
noteHash['smo65404'] = smo65404;
smo65404.setAttribute('id', 'smo65404');
smo65425v0ar.push(smo65404);
smo65425v0.addTickables(smo65425v0ar)
fmtsmo6542547.joinVoices([smo65425v0]);
const smo65425v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65425v1ar = [];
const smo65405 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65405'] = smo65405;
smo65405.setAttribute('id', 'smo65405');
smo65405.setStyle({ fillStyle: "#115511" });
smo65425v1ar.push(smo65405);
const smo65406 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65406'] = smo65406;
smo65406.setAttribute('id', 'smo65406');
smo65406.setStyle({ fillStyle: "#115511" });
smo65425v1ar.push(smo65406);
const smo65407 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65407'] = smo65407;
smo65407.setAttribute('id', 'smo65407');
smo65407.setStyle({ fillStyle: "#115511" });
smo65425v1ar.push(smo65407);
const smo65408 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65408'] = smo65408;
smo65408.setAttribute('id', 'smo65408');
smo65408.setStyle({ fillStyle: "#115511" });
const smo654080acc = new VF.Accidental('n');
smo65408.addModifier(smo654080acc, 0);
smo65425v1ar.push(smo65408);
const smo65409 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65409'] = smo65409;
smo65409.setAttribute('id', 'smo65409');
smo65409.setStyle({ fillStyle: "#115511" });
smo65425v1ar.push(smo65409);
const smo65410 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65410'] = smo65410;
smo65410.setAttribute('id', 'smo65410');
smo65410.setStyle({ fillStyle: "#115511" });
smo65425v1ar.push(smo65410);
const smo65411 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65411'] = smo65411;
smo65411.setAttribute('id', 'smo65411');
smo65411.setStyle({ fillStyle: "#115511" });
smo65425v1ar.push(smo65411);
smo65425v1.addTickables(smo65425v1ar)
fmtsmo6542547.joinVoices([smo65425v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68805 = smo60343.getStemDirection();
smo60343.setStemDirection(dirsmo68805);
smo60344.setStemDirection(dirsmo68805);
smo60345.setStemDirection(dirsmo68805);
smo60346.setStemDirection(dirsmo68805);
const smo68805 = new VF.Beam([smo60343,smo60344,smo60345,smo60346]);
const dirsmo68806 = smo60347.getStemDirection();
smo60347.setStemDirection(dirsmo68806);
smo60348.setStemDirection(dirsmo68806);
smo60349.setStemDirection(dirsmo68806);
const smo68806 = new VF.Beam([smo60347,smo60348,smo60349]);
const dirsmo68807 = smo60350.getStemDirection();
smo60350.setStemDirection(dirsmo68807);
smo60352.setStemDirection(dirsmo68807);
const smo68807 = new VF.Beam([smo60350,smo60352]);
const dirsmo68808 = smo60353.getStemDirection();
smo60353.setStemDirection(dirsmo68808);
smo60354.setStemDirection(dirsmo68808);
smo60355.setStemDirection(dirsmo68808);
smo60356.setStemDirection(dirsmo68808);
const smo68808 = new VF.Beam([smo60353,smo60354,smo60355,smo60356]);
const dirsmo68809 = smo60357.getStemDirection();
smo60357.setStemDirection(dirsmo68809);
smo60358.setStemDirection(dirsmo68809);
smo60359.setStemDirection(dirsmo68809);
smo60360.setStemDirection(dirsmo68809);
const smo68809 = new VF.Beam([smo60357,smo60358,smo60359,smo60360]);
const dirsmo68812 = smo65396.getStemDirection();
smo65396.setStemDirection(dirsmo68812);
smo65397.setStemDirection(dirsmo68812);
const smo68812 = new VF.Beam([smo65396,smo65397]);
const dirsmo68813 = smo65398.getStemDirection();
smo65398.setStemDirection(dirsmo68813);
smo65399.setStemDirection(dirsmo68813);
smo65400.setStemDirection(dirsmo68813);
smo65401.setStemDirection(dirsmo68813);
const smo68813 = new VF.Beam([smo65398,smo65399,smo65400,smo65401]);
const dirsmo68814 = smo65407.getStemDirection();
smo65407.setStemDirection(dirsmo68814);
smo65408.setStemDirection(dirsmo68814);
const smo68814 = new VF.Beam([smo65407,smo65408]);
const dirsmo68815 = smo65409.getStemDirection();
smo65409.setStemDirection(dirsmo68815);
smo65410.setStemDirection(dirsmo68815);
const smo68815 = new VF.Beam([smo65409,smo65410]);
 
// formatting measures in staff group smo57677
fmtsmo6037747.format([smo60377v0,smo60377v1,smo65425v0,smo65425v1], 419);
const stavesmo60377 = new VF.Stave(666, 304, 433);
stavesmo60377.setAttribute('id', 'stavesmo60377');
stavesmo60377.setBegBarType(VF.Barline.type.NONE);
stavesmo60377.setContext(context);
stavesmo60377.draw();
smo60377v0.draw(context, stavesmo60377);
smo60377v1.draw(context, stavesmo60377);
smo68805.setContext(context);
smo68805.draw();
smo68806.setContext(context);
smo68806.draw();
smo68807.setContext(context);
smo68807.draw();
smo68808.setContext(context);
smo68808.draw();
smo68809.setContext(context);
smo68809.draw();
const stavesmo65425 = new VF.Stave(666, 438, 433);
stavesmo65425.setAttribute('id', 'stavesmo65425');
stavesmo65425.setBegBarType(VF.Barline.type.NONE);
stavesmo65425.setContext(context);
stavesmo65425.draw();
smo65425v0.draw(context, stavesmo65425);
smo65425v1.draw(context, stavesmo65425);
smo68812.setContext(context);
smo68812.draw();
smo68813.setContext(context);
smo68813.draw();
smo68814.setContext(context);
smo68814.draw();
smo68815.setContext(context);
smo68815.draw();
const fmtsmo6040748 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo60407v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60407v0ar = [];
const smo60378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60378'] = smo60378;
smo60378.setAttribute('id', 'smo60378');
smo60407v0ar.push(smo60378);
const smo60379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60379'] = smo60379;
smo60379.setAttribute('id', 'smo60379');
smo60407v0ar.push(smo60379);
const smo60380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60380'] = smo60380;
smo60380.setAttribute('id', 'smo60380');
smo60407v0ar.push(smo60380);
smo60407v0.addTickables(smo60407v0ar)
fmtsmo6040748.joinVoices([smo60407v0]);
const smo60407v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60407v1ar = [];
const smo60381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
noteHash['smo60381'] = smo60381;
smo60381.setAttribute('id', 'smo60381');
smo60381.setStyle({ fillStyle: "#115511" });
smo60407v1ar.push(smo60381);
const smo60382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60382'] = smo60382;
smo60382.setAttribute('id', 'smo60382');
smo60382.setStyle({ fillStyle: "#115511" });
smo60407v1ar.push(smo60382);
const smo60383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60383'] = smo60383;
smo60383.setAttribute('id', 'smo60383');
smo60383.setStyle({ fillStyle: "#115511" });
smo60407v1ar.push(smo60383);
const smo60384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60384'] = smo60384;
smo60384.setAttribute('id', 'smo60384');
smo60384.setStyle({ fillStyle: "#115511" });
smo60407v1ar.push(smo60384);
const smo60385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60385'] = smo60385;
smo60385.setAttribute('id', 'smo60385');
smo60385.setStyle({ fillStyle: "#115511" });
smo60385.addModifier(new VF.Dot(), 0);
smo60407v1ar.push(smo60385);
const smo60386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60386'] = smo60386;
smo60386.setAttribute('id', 'smo60386');
smo60386.setStyle({ fillStyle: "#115511" });
smo60407v1ar.push(smo60386);
const smo60387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60387'] = smo60387;
smo60387.setAttribute('id', 'smo60387');
smo60387.setStyle({ fillStyle: "#115511" });
smo60407v1ar.push(smo60387);
const smo60388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60388'] = smo60388;
smo60388.setAttribute('id', 'smo60388');
smo60388.setStyle({ fillStyle: "#115511" });
smo60407v1ar.push(smo60388);
const smo60389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60389'] = smo60389;
smo60389.setAttribute('id', 'smo60389');
smo60389.setStyle({ fillStyle: "#115511" });
smo60407v1ar.push(smo60389);
smo60407v1.addTickables(smo60407v1ar)
fmtsmo6040748.joinVoices([smo60407v1]);
const smo60407v2 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60407v2ar = [];
const smo60390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60390'] = smo60390;
smo60390.setAttribute('id', 'smo60390');
smo60390.setStyle({ fillStyle: '#aaaaaa7f' });
smo60390.addModifier(new VF.Dot(), 0);
smo60407v2ar.push(smo60390);
const smo60391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60391'] = smo60391;
smo60391.setAttribute('id', 'smo60391');
smo60391.setStyle({ fillStyle: "#115511" });
smo60391.addModifier(new VF.Dot(), 0);
smo60407v2ar.push(smo60391);
const smo60392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60392'] = smo60392;
smo60392.setAttribute('id', 'smo60392');
smo60392.setStyle({ fillStyle: "#115511" });
smo60407v2ar.push(smo60392);
const smo60393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60393'] = smo60393;
smo60393.setAttribute('id', 'smo60393');
smo60393.setStyle({ fillStyle: "#115511" });
smo60407v2ar.push(smo60393);
smo60407v2.addTickables(smo60407v2ar)
fmtsmo6040748.joinVoices([smo60407v2]);
const fmtsmo6544848 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo65448v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65448v0ar = [];
const smo65426 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65426'] = smo65426;
smo65426.setAttribute('id', 'smo65426');
smo65448v0ar.push(smo65426);
const smo65427 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo65427'] = smo65427;
smo65427.setAttribute('id', 'smo65427');
smo65448v0ar.push(smo65427);
const smo65428 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65428'] = smo65428;
smo65428.setAttribute('id', 'smo65428');
smo65448v0ar.push(smo65428);
const smo65429 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65429'] = smo65429;
smo65429.setAttribute('id', 'smo65429');
smo65448v0ar.push(smo65429);
const smo65430 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65430'] = smo65430;
smo65430.setAttribute('id', 'smo65430');
smo65448v0ar.push(smo65430);
const smo65431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo65431'] = smo65431;
smo65431.setAttribute('id', 'smo65431');
smo65431.setStyle({ fillStyle: '#aaaaaa7f' });
smo65448v0ar.push(smo65431);
smo65448v0.addTickables(smo65448v0ar)
fmtsmo6544848.joinVoices([smo65448v0]);
const smo65448v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65448v1ar = [];
const smo65432 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo65432'] = smo65432;
smo65432.setAttribute('id', 'smo65432');
smo65432.setStyle({ fillStyle: "#115511" });
smo65448v1ar.push(smo65432);
const smo65433 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo65433'] = smo65433;
smo65433.setAttribute('id', 'smo65433');
smo65433.setStyle({ fillStyle: "#115511" });
smo65448v1ar.push(smo65433);
const smo65434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo65434'] = smo65434;
smo65434.setAttribute('id', 'smo65434');
smo65434.setStyle({ fillStyle: "#115511" });
smo65448v1ar.push(smo65434);
smo65448v1.addTickables(smo65448v1ar)
fmtsmo6544848.joinVoices([smo65448v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68818 = smo60382.getStemDirection();
smo60382.setStemDirection(dirsmo68818);
smo60383.setStemDirection(dirsmo68818);
smo60384.setStemDirection(dirsmo68818);
const smo68818 = new VF.Beam([smo60382,smo60383,smo60384]);
const dirsmo68819 = smo60385.getStemDirection();
smo60385.setStemDirection(dirsmo68819);
smo60386.setStemDirection(dirsmo68819);
smo60387.setStemDirection(dirsmo68819);
const smo68819 = new VF.Beam([smo60385,smo60386,smo60387]);
const dirsmo68820 = smo60388.getStemDirection();
smo60388.setStemDirection(dirsmo68820);
smo60389.setStemDirection(dirsmo68820);
const smo68820 = new VF.Beam([smo60388,smo60389]);
const dirsmo68821 = smo60391.getStemDirection();
smo60391.setStemDirection(dirsmo68821);
smo60392.setStemDirection(dirsmo68821);
smo60393.setStemDirection(dirsmo68821);
const smo68821 = new VF.Beam([smo60391,smo60392,smo60393]);
const dirsmo68824 = smo65428.getStemDirection();
smo65428.setStemDirection(dirsmo68824);
smo65429.setStemDirection(dirsmo68824);
const smo68824 = new VF.Beam([smo65428,smo65429]);
 
// formatting measures in staff group smo57677
fmtsmo6040748.format([smo60407v0,smo60407v1,smo60407v2,smo65448v0,smo65448v1], 332);
const stavesmo60407 = new VF.Stave(1099, 304, 346);
stavesmo60407.setAttribute('id', 'stavesmo60407');
stavesmo60407.setBegBarType(VF.Barline.type.NONE);
stavesmo60407.setContext(context);
stavesmo60407.draw();
smo60407v0.draw(context, stavesmo60407);
smo60407v1.draw(context, stavesmo60407);
smo60407v2.draw(context, stavesmo60407);
smo68818.setContext(context);
smo68818.draw();
smo68819.setContext(context);
smo68819.draw();
smo68820.setContext(context);
smo68820.draw();
smo68821.setContext(context);
smo68821.draw();
const stavesmo65448 = new VF.Stave(1099, 438, 346);
stavesmo65448.setAttribute('id', 'stavesmo65448');
stavesmo65448.setBegBarType(VF.Barline.type.NONE);
stavesmo65448.setContext(context);
stavesmo65448.draw();
smo65448v0.draw(context, stavesmo65448);
smo65448v1.draw(context, stavesmo65448);
smo68824.setContext(context);
smo68824.draw();
const fmtsmo6043649 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo60436v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60436v0ar = [];
const smo60408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60408'] = smo60408;
smo60408.setAttribute('id', 'smo60408');
smo60436v0ar.push(smo60408);
const smo60409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60409'] = smo60409;
smo60409.setAttribute('id', 'smo60409');
smo60436v0ar.push(smo60409);
const smo60410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60410'] = smo60410;
smo60410.setAttribute('id', 'smo60410');
smo60436v0ar.push(smo60410);
const smo60411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60411'] = smo60411;
smo60411.setAttribute('id', 'smo60411');
smo60436v0ar.push(smo60411);
const smo60412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60412'] = smo60412;
smo60412.setAttribute('id', 'smo60412');
smo60436v0ar.push(smo60412);
smo60436v0.addTickables(smo60436v0ar)
fmtsmo6043649.joinVoices([smo60436v0]);
const smo60436v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60436v1ar = [];
const smo60413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60413'] = smo60413;
smo60413.setAttribute('id', 'smo60413');
smo60413.setStyle({ fillStyle: "#115511" });
smo60436v1ar.push(smo60413);
const smo60414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60414'] = smo60414;
smo60414.setAttribute('id', 'smo60414');
smo60414.setStyle({ fillStyle: "#115511" });
smo60436v1ar.push(smo60414);
const smo60415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60415'] = smo60415;
smo60415.setAttribute('id', 'smo60415');
smo60415.setStyle({ fillStyle: "#115511" });
smo60436v1ar.push(smo60415);
const smo60416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60416'] = smo60416;
smo60416.setAttribute('id', 'smo60416');
smo60416.setStyle({ fillStyle: "#115511" });
smo60436v1ar.push(smo60416);
const smo60417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60417'] = smo60417;
smo60417.setAttribute('id', 'smo60417');
smo60417.setStyle({ fillStyle: "#115511" });
smo60436v1ar.push(smo60417);
const smo60418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60418'] = smo60418;
smo60418.setAttribute('id', 'smo60418');
smo60418.setStyle({ fillStyle: "#115511" });
smo60436v1ar.push(smo60418);
const smo60419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60419'] = smo60419;
smo60419.setAttribute('id', 'smo60419');
smo60419.setStyle({ fillStyle: "#115511" });
smo60436v1ar.push(smo60419);
const smo60420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60420'] = smo60420;
smo60420.setAttribute('id', 'smo60420');
smo60420.setStyle({ fillStyle: "#115511" });
smo60436v1ar.push(smo60420);
const smo60421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60421'] = smo60421;
smo60421.setAttribute('id', 'smo60421');
smo60421.setStyle({ fillStyle: "#115511" });
const smo604210acc = new VF.Accidental('#');
smo60421.addModifier(smo604210acc, 0);
smo60436v1ar.push(smo60421);
const smo60422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60422'] = smo60422;
smo60422.setAttribute('id', 'smo60422');
smo60422.setStyle({ fillStyle: "#115511" });
smo60436v1ar.push(smo60422);
smo60436v1.addTickables(smo60436v1ar)
fmtsmo6043649.joinVoices([smo60436v1]);
const fmtsmo6547849 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo65478v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65478v0ar = [];
const smo65449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo65449'] = smo65449;
smo65449.setAttribute('id', 'smo65449');
smo65478v0ar.push(smo65449);
const smo65450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo65450'] = smo65450;
smo65450.setAttribute('id', 'smo65450');
smo65478v0ar.push(smo65450);
const smo65451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo65451'] = smo65451;
smo65451.setAttribute('id', 'smo65451');
smo65478v0ar.push(smo65451);
const smo65452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo65452'] = smo65452;
smo65452.setAttribute('id', 'smo65452');
smo65478v0ar.push(smo65452);
const smo65453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo65453'] = smo65453;
smo65453.setAttribute('id', 'smo65453');
smo65478v0ar.push(smo65453);
const smo65454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65454'] = smo65454;
smo65454.setAttribute('id', 'smo65454');
smo65478v0ar.push(smo65454);
const smo65455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo65455'] = smo65455;
smo65455.setAttribute('id', 'smo65455');
smo65478v0ar.push(smo65455);
smo65478v0.addTickables(smo65478v0ar)
fmtsmo6547849.joinVoices([smo65478v0]);
const smo65478v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65478v1ar = [];
const smo65456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo65456'] = smo65456;
smo65456.setAttribute('id', 'smo65456');
smo65456.setStyle({ fillStyle: "#115511" });
smo65478v1ar.push(smo65456);
const smo65457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo65457'] = smo65457;
smo65457.setAttribute('id', 'smo65457');
smo65457.setStyle({ fillStyle: "#115511" });
smo65478v1ar.push(smo65457);
const smo65458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo65458'] = smo65458;
smo65458.setAttribute('id', 'smo65458');
smo65458.setStyle({ fillStyle: "#115511" });
smo65478v1ar.push(smo65458);
const smo65459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
noteHash['smo65459'] = smo65459;
smo65459.setAttribute('id', 'smo65459');
smo65459.setStyle({ fillStyle: "#115511" });
smo65478v1ar.push(smo65459);
const smo65460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65460'] = smo65460;
smo65460.setAttribute('id', 'smo65460');
smo65460.setStyle({ fillStyle: "#115511" });
smo65460.addModifier(new VF.Dot(), 0);
smo65478v1ar.push(smo65460);
const smo65461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65461'] = smo65461;
smo65461.setAttribute('id', 'smo65461');
smo65461.setStyle({ fillStyle: "#115511" });
smo65478v1ar.push(smo65461);
const smo65462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65462'] = smo65462;
smo65462.setAttribute('id', 'smo65462');
smo65462.setStyle({ fillStyle: "#115511" });
smo65478v1ar.push(smo65462);
const smo65463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
noteHash['smo65463'] = smo65463;
smo65463.setAttribute('id', 'smo65463');
smo65463.setStyle({ fillStyle: "#115511" });
smo65478v1ar.push(smo65463);
const smo65464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65464'] = smo65464;
smo65464.setAttribute('id', 'smo65464');
smo65464.setStyle({ fillStyle: "#115511" });
smo65478v1ar.push(smo65464);
smo65478v1.addTickables(smo65478v1ar)
fmtsmo6547849.joinVoices([smo65478v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68827 = smo60410.getStemDirection();
smo60410.setStemDirection(dirsmo68827);
smo60411.setStemDirection(dirsmo68827);
smo60412.setStemDirection(dirsmo68827);
const smo68827 = new VF.Beam([smo60410,smo60411,smo60412]);
const dirsmo68828 = smo60413.getStemDirection();
smo60413.setStemDirection(dirsmo68828);
smo60414.setStemDirection(dirsmo68828);
const smo68828 = new VF.Beam([smo60413,smo60414]);
const dirsmo68829 = smo60415.getStemDirection();
smo60415.setStemDirection(dirsmo68829);
smo60416.setStemDirection(dirsmo68829);
smo60417.setStemDirection(dirsmo68829);
smo60418.setStemDirection(dirsmo68829);
const smo68829 = new VF.Beam([smo60415,smo60416,smo60417,smo60418]);
const dirsmo68830 = smo60419.getStemDirection();
smo60419.setStemDirection(dirsmo68830);
smo60420.setStemDirection(dirsmo68830);
smo60421.setStemDirection(dirsmo68830);
smo60422.setStemDirection(dirsmo68830);
const smo68830 = new VF.Beam([smo60419,smo60420,smo60421,smo60422]);
const dirsmo68833 = smo65449.getStemDirection();
smo65449.setStemDirection(dirsmo68833);
smo65450.setStemDirection(dirsmo68833);
const smo68833 = new VF.Beam([smo65449,smo65450]);
const dirsmo68834 = smo65451.getStemDirection();
smo65451.setStemDirection(dirsmo68834);
smo65452.setStemDirection(dirsmo68834);
const smo68834 = new VF.Beam([smo65451,smo65452]);
const dirsmo68835 = smo65453.getStemDirection();
smo65453.setStemDirection(dirsmo68835);
smo65454.setStemDirection(dirsmo68835);
const smo68835 = new VF.Beam([smo65453,smo65454]);
const dirsmo68836 = smo65457.getStemDirection();
smo65457.setStemDirection(dirsmo68836);
smo65458.setStemDirection(dirsmo68836);
smo65459.setStemDirection(dirsmo68836);
const smo68836 = new VF.Beam([smo65457,smo65458,smo65459]);
const dirsmo68837 = smo65460.getStemDirection();
smo65460.setStemDirection(dirsmo68837);
smo65461.setStemDirection(dirsmo68837);
smo65462.setStemDirection(dirsmo68837);
const smo68837 = new VF.Beam([smo65460,smo65461,smo65462]);
const dirsmo68838 = smo65463.getStemDirection();
smo65463.setStemDirection(dirsmo68838);
smo65464.setStemDirection(dirsmo68838);
const smo68838 = new VF.Beam([smo65463,smo65464]);
 
// formatting measures in staff group smo57677
fmtsmo6043649.format([smo60436v0,smo60436v1,smo65478v0,smo65478v1], 315);
const stavesmo60436 = new VF.Stave(1445, 304, 363);
stavesmo60436.setAttribute('id', 'stavesmo60436');
stavesmo60436.setBegBarType(VF.Barline.type.NONE);
stavesmo60436.setContext(context);
stavesmo60436.draw();
smo60436v0.draw(context, stavesmo60436);
smo60436v1.draw(context, stavesmo60436);
smo68827.setContext(context);
smo68827.draw();
smo68828.setContext(context);
smo68828.draw();
smo68829.setContext(context);
smo68829.draw();
smo68830.setContext(context);
smo68830.draw();
const stavesmo65478 = new VF.Stave(1445, 438, 363);
stavesmo65478.setAttribute('id', 'stavesmo65478');
stavesmo65478.setBegBarType(VF.Barline.type.NONE);
stavesmo65478.addClef('treble');
stavesmo65478.setContext(context);
stavesmo65478.draw();
smo65478v0.draw(context, stavesmo65478);
smo65478v1.draw(context, stavesmo65478);
smo68833.setContext(context);
smo68833.draw();
smo68834.setContext(context);
smo68834.draw();
smo68835.setContext(context);
smo68835.draw();
smo68836.setContext(context);
smo68836.draw();
smo68837.setContext(context);
smo68837.draw();
smo68838.setContext(context);
smo68838.draw();
const rightsmo57677stavesmo604361 = new VF.StaveConnector(stavesmo60436, stavesmo65478).setType(0);
rightsmo57677stavesmo604361.setContext(context).draw();
const fmtsmo6046850 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo60468v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60468v0ar = [];
const smo60437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60437'] = smo60437;
smo60437.setAttribute('id', 'smo60437');
smo60437.addModifier(new VF.Dot(), 0);
smo60468v0ar.push(smo60437);
const smo60438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60438'] = smo60438;
smo60438.setAttribute('id', 'smo60438');
smo60468v0ar.push(smo60438);
const smo60439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60439'] = smo60439;
smo60439.setAttribute('id', 'smo60439');
smo60468v0ar.push(smo60439);
const smo60440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60440'] = smo60440;
smo60440.setAttribute('id', 'smo60440');
smo60468v0ar.push(smo60440);
const smo60441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60441'] = smo60441;
smo60441.setAttribute('id', 'smo60441');
smo60468v0ar.push(smo60441);
const smo60442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60442'] = smo60442;
smo60442.setAttribute('id', 'smo60442');
smo60468v0ar.push(smo60442);
const smo60443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60443'] = smo60443;
smo60443.setAttribute('id', 'smo60443');
smo60468v0ar.push(smo60443);
const smo60444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60444'] = smo60444;
smo60444.setAttribute('id', 'smo60444');
smo60444.addModifier(new VF.Dot(), 0);
smo60468v0ar.push(smo60444);
const smo60445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60445'] = smo60445;
smo60445.setAttribute('id', 'smo60445');
smo60468v0ar.push(smo60445);
const smo60446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60446'] = smo60446;
smo60446.setAttribute('id', 'smo60446');
smo60468v0ar.push(smo60446);
smo60468v0.addTickables(smo60468v0ar)
fmtsmo6046850.joinVoices([smo60468v0]);
const smo60468v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60468v1ar = [];
const smo60447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60447'] = smo60447;
smo60447.setAttribute('id', 'smo60447');
smo60447.setStyle({ fillStyle: "#115511" });
smo60468v1ar.push(smo60447);
const smo60448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60448'] = smo60448;
smo60448.setAttribute('id', 'smo60448');
smo60448.setStyle({ fillStyle: "#115511" });
const smo604480acc = new VF.Accidental('#');
smo60448.addModifier(smo604480acc, 0);
smo60468v1ar.push(smo60448);
const smo60449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo60449'] = smo60449;
smo60449.setAttribute('id', 'smo60449');
smo60449.setStyle({ fillStyle: "#115511" });
const smo604490acc = new VF.Accidental('#');
smo60449.addModifier(smo604490acc, 0);
smo60468v1ar.push(smo60449);
const smo60450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60450'] = smo60450;
smo60450.setAttribute('id', 'smo60450');
smo60450.setStyle({ fillStyle: "#115511" });
smo60468v1ar.push(smo60450);
const smo60451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60451'] = smo60451;
smo60451.setAttribute('id', 'smo60451');
smo60451.setStyle({ fillStyle: "#115511" });
smo60468v1ar.push(smo60451);
const smo60452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60452'] = smo60452;
smo60452.setAttribute('id', 'smo60452');
smo60452.setStyle({ fillStyle: "#115511" });
const smo604520acc = new VF.Accidental('n');
smo60452.addModifier(smo604520acc, 0);
smo60468v1ar.push(smo60452);
const smo60453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60453'] = smo60453;
smo60453.setAttribute('id', 'smo60453');
smo60453.setStyle({ fillStyle: "#115511" });
smo60468v1ar.push(smo60453);
const smo60454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60454'] = smo60454;
smo60454.setAttribute('id', 'smo60454');
smo60454.setStyle({ fillStyle: "#115511" });
smo60468v1ar.push(smo60454);
smo60468v1.addTickables(smo60468v1ar)
fmtsmo6046850.joinVoices([smo60468v1]);
const fmtsmo6550850 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo65508v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65508v0ar = [];
const smo65479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo65479'] = smo65479;
smo65479.setAttribute('id', 'smo65479');
smo65508v0ar.push(smo65479);
const smo65480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65480'] = smo65480;
smo65480.setAttribute('id', 'smo65480');
smo65508v0ar.push(smo65480);
const smo65481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo65481'] = smo65481;
smo65481.setAttribute('id', 'smo65481');
smo65508v0ar.push(smo65481);
const smo65482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo65482'] = smo65482;
smo65482.setAttribute('id', 'smo65482');
smo65508v0ar.push(smo65482);
const smo65483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo65483'] = smo65483;
smo65483.setAttribute('id', 'smo65483');
smo65508v0ar.push(smo65483);
const smo65484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo65484'] = smo65484;
smo65484.setAttribute('id', 'smo65484');
smo65508v0ar.push(smo65484);
smo65508v0.addTickables(smo65508v0ar)
fmtsmo6550850.joinVoices([smo65508v0]);
const smo65508v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65508v1ar = [];
const smo65485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo65485'] = smo65485;
smo65485.setAttribute('id', 'smo65485');
smo65485.setStyle({ fillStyle: "#115511" });
smo65508v1ar.push(smo65485);
const smo65486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65486'] = smo65486;
smo65486.setAttribute('id', 'smo65486');
smo65486.setStyle({ fillStyle: "#115511" });
smo65508v1ar.push(smo65486);
const smo65487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65487'] = smo65487;
smo65487.setAttribute('id', 'smo65487');
smo65487.setStyle({ fillStyle: "#115511" });
smo65508v1ar.push(smo65487);
const smo65488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65488'] = smo65488;
smo65488.setAttribute('id', 'smo65488');
smo65488.setStyle({ fillStyle: "#115511" });
smo65508v1ar.push(smo65488);
const smo65489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65489'] = smo65489;
smo65489.setAttribute('id', 'smo65489');
smo65489.setStyle({ fillStyle: "#115511" });
smo65508v1ar.push(smo65489);
const smo65490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65490'] = smo65490;
smo65490.setAttribute('id', 'smo65490');
smo65490.setStyle({ fillStyle: "#115511" });
smo65508v1ar.push(smo65490);
const smo65491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
noteHash['smo65491'] = smo65491;
smo65491.setAttribute('id', 'smo65491');
smo65491.setStyle({ fillStyle: "#115511" });
smo65508v1ar.push(smo65491);
const smo65492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/2/n"]}'))
noteHash['smo65492'] = smo65492;
smo65492.setAttribute('id', 'smo65492');
smo65492.setStyle({ fillStyle: "#115511" });
const smo654920acc = new VF.Accidental('#');
smo65492.addModifier(smo654920acc, 0);
smo65508v1ar.push(smo65492);
const smo65493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo65493'] = smo65493;
smo65493.setAttribute('id', 'smo65493');
smo65493.setStyle({ fillStyle: "#115511" });
const smo654930acc = new VF.Accidental('n');
smo65493.addModifier(smo654930acc, 0);
smo65508v1ar.push(smo65493);
const smo65494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo65494'] = smo65494;
smo65494.setAttribute('id', 'smo65494');
smo65494.setStyle({ fillStyle: "#115511" });
smo65508v1ar.push(smo65494);
smo65508v1.addTickables(smo65508v1ar)
fmtsmo6550850.joinVoices([smo65508v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68857 = smo60437.getStemDirection();
smo60437.setStemDirection(dirsmo68857);
smo60438.setStemDirection(dirsmo68857);
smo60439.setStemDirection(dirsmo68857);
const smo68857 = new VF.Beam([smo60437,smo60438,smo60439]);
const dirsmo68858 = smo60440.getStemDirection();
smo60440.setStemDirection(dirsmo68858);
smo60441.setStemDirection(dirsmo68858);
const smo68858 = new VF.Beam([smo60440,smo60441]);
const dirsmo68859 = smo60442.getStemDirection();
smo60442.setStemDirection(dirsmo68859);
smo60443.setStemDirection(dirsmo68859);
const smo68859 = new VF.Beam([smo60442,smo60443]);
const dirsmo68860 = smo60444.getStemDirection();
smo60444.setStemDirection(dirsmo68860);
smo60445.setStemDirection(dirsmo68860);
smo60446.setStemDirection(dirsmo68860);
const smo68860 = new VF.Beam([smo60444,smo60445,smo60446]);
const dirsmo68861 = smo60447.getStemDirection();
smo60447.setStemDirection(dirsmo68861);
smo60448.setStemDirection(dirsmo68861);
const smo68861 = new VF.Beam([smo60447,smo60448]);
const dirsmo68862 = smo60449.getStemDirection();
smo60449.setStemDirection(dirsmo68862);
smo60450.setStemDirection(dirsmo68862);
const smo68862 = new VF.Beam([smo60449,smo60450]);
const dirsmo68863 = smo60451.getStemDirection();
smo60451.setStemDirection(dirsmo68863);
smo60452.setStemDirection(dirsmo68863);
smo60453.setStemDirection(dirsmo68863);
smo60454.setStemDirection(dirsmo68863);
const smo68863 = new VF.Beam([smo60451,smo60452,smo60453,smo60454]);
const dirsmo68866 = smo65479.getStemDirection();
smo65479.setStemDirection(dirsmo68866);
smo65480.setStemDirection(dirsmo68866);
const smo68866 = new VF.Beam([smo65479,smo65480]);
const dirsmo68867 = smo65485.getStemDirection();
smo65485.setStemDirection(dirsmo68867);
smo65486.setStemDirection(dirsmo68867);
const smo68867 = new VF.Beam([smo65485,smo65486]);
const dirsmo68868 = smo65487.getStemDirection();
smo65487.setStemDirection(dirsmo68868);
smo65488.setStemDirection(dirsmo68868);
smo65489.setStemDirection(dirsmo68868);
smo65490.setStemDirection(dirsmo68868);
const smo68868 = new VF.Beam([smo65487,smo65488,smo65489,smo65490]);
const dirsmo68869 = smo65491.getStemDirection();
smo65491.setStemDirection(dirsmo68869);
smo65492.setStemDirection(dirsmo68869);
smo65493.setStemDirection(dirsmo68869);
smo65494.setStemDirection(dirsmo68869);
const smo68869 = new VF.Beam([smo65491,smo65492,smo65493,smo65494]);
 
// formatting measures in staff group smo57677
fmtsmo6046850.format([smo60468v0,smo60468v1,smo65508v0,smo65508v1], 498);
const stavesmo60468 = new VF.Stave(90, 662, 556);
stavesmo60468.setAttribute('id', 'stavesmo60468');
stavesmo60468.setBegBarType(1);
stavesmo60468.addClef('treble');
stavesmo60468.setContext(context);
stavesmo60468.draw();
smo60468v0.draw(context, stavesmo60468);
smo60468v1.draw(context, stavesmo60468);
smo68857.setContext(context);
smo68857.draw();
smo68858.setContext(context);
smo68858.draw();
smo68859.setContext(context);
smo68859.draw();
smo68860.setContext(context);
smo68860.draw();
smo68861.setContext(context);
smo68861.draw();
smo68862.setContext(context);
smo68862.draw();
smo68863.setContext(context);
smo68863.draw();
const stavesmo65508 = new VF.Stave(90, 801, 556);
stavesmo65508.setAttribute('id', 'stavesmo65508');
stavesmo65508.setBegBarType(1);
stavesmo65508.addClef('treble');
stavesmo65508.setContext(context);
stavesmo65508.draw();
smo65508v0.draw(context, stavesmo65508);
smo65508v1.draw(context, stavesmo65508);
smo68866.setContext(context);
smo68866.draw();
smo68867.setContext(context);
smo68867.draw();
smo68868.setContext(context);
smo68868.draw();
smo68869.setContext(context);
smo68869.draw();
const leftsmo57677stavesmo604681 = new VF.StaveConnector(stavesmo60468, stavesmo65508).setType(3);
leftsmo57677stavesmo604681.setContext(context).draw();
const fmtsmo6050351 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo60503v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60503v0ar = [];
const smo60469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60469'] = smo60469;
smo60469.setAttribute('id', 'smo60469');
smo60503v0ar.push(smo60469);
const smo60470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo60470'] = smo60470;
smo60470.setAttribute('id', 'smo60470');
smo60503v0ar.push(smo60470);
const smo60471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60471'] = smo60471;
smo60471.setAttribute('id', 'smo60471');
smo60503v0ar.push(smo60471);
const smo60472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60472'] = smo60472;
smo60472.setAttribute('id', 'smo60472');
smo60503v0ar.push(smo60472);
const smo60473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60473'] = smo60473;
smo60473.setAttribute('id', 'smo60473');
smo60503v0ar.push(smo60473);
const smo60474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo60474'] = smo60474;
smo60474.setAttribute('id', 'smo60474');
smo60503v0ar.push(smo60474);
const smo60475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60475'] = smo60475;
smo60475.setAttribute('id', 'smo60475');
smo60503v0ar.push(smo60475);
const smo60476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60476'] = smo60476;
smo60476.setAttribute('id', 'smo60476');
smo60503v0ar.push(smo60476);
const smo60477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60477'] = smo60477;
smo60477.setAttribute('id', 'smo60477');
smo60503v0ar.push(smo60477);
const smo60478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo60478'] = smo60478;
smo60478.setAttribute('id', 'smo60478');
smo60503v0ar.push(smo60478);
smo60503v0.addTickables(smo60503v0ar)
fmtsmo6050351.joinVoices([smo60503v0]);
const smo60503v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60503v1ar = [];
const smo60479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60479'] = smo60479;
smo60479.setAttribute('id', 'smo60479');
smo60479.setStyle({ fillStyle: "#115511" });
smo60479.addModifier(new VF.Dot(), 0);
smo60503v1ar.push(smo60479);
const smo60480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60480'] = smo60480;
smo60480.setAttribute('id', 'smo60480');
smo60480.setStyle({ fillStyle: "#115511" });
smo60503v1ar.push(smo60480);
const smo60481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60481'] = smo60481;
smo60481.setAttribute('id', 'smo60481');
smo60481.setStyle({ fillStyle: "#115511" });
smo60503v1ar.push(smo60481);
const smo60482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60482'] = smo60482;
smo60482.setAttribute('id', 'smo60482');
smo60482.setStyle({ fillStyle: "#115511" });
smo60503v1ar.push(smo60482);
const smo60483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60483'] = smo60483;
smo60483.setAttribute('id', 'smo60483');
smo60483.setStyle({ fillStyle: "#115511" });
smo60503v1ar.push(smo60483);
const smo60484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60484'] = smo60484;
smo60484.setAttribute('id', 'smo60484');
smo60484.setStyle({ fillStyle: "#115511" });
smo60503v1ar.push(smo60484);
const smo60485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60485'] = smo60485;
smo60485.setAttribute('id', 'smo60485');
smo60485.setStyle({ fillStyle: "#115511" });
smo60503v1ar.push(smo60485);
const smo60486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60486'] = smo60486;
smo60486.setAttribute('id', 'smo60486');
smo60486.setStyle({ fillStyle: "#115511" });
smo60503v1ar.push(smo60486);
const smo60487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60487'] = smo60487;
smo60487.setAttribute('id', 'smo60487');
smo60487.setStyle({ fillStyle: "#115511" });
smo60503v1ar.push(smo60487);
const smo60488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60488'] = smo60488;
smo60488.setAttribute('id', 'smo60488');
smo60488.setStyle({ fillStyle: "#115511" });
smo60503v1ar.push(smo60488);
const smo60489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60489'] = smo60489;
smo60489.setAttribute('id', 'smo60489');
smo60489.setStyle({ fillStyle: "#115511" });
smo60503v1ar.push(smo60489);
smo60503v1.addTickables(smo60503v1ar)
fmtsmo6050351.joinVoices([smo60503v1]);
const fmtsmo6553851 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo65538v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65538v0ar = [];
const smo65509 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
noteHash['smo65509'] = smo65509;
smo65509.setAttribute('id', 'smo65509');
smo65538v0ar.push(smo65509);
const smo65510 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65510'] = smo65510;
smo65510.setAttribute('id', 'smo65510');
smo65538v0ar.push(smo65510);
const smo65511 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65511'] = smo65511;
smo65511.setAttribute('id', 'smo65511');
smo65538v0ar.push(smo65511);
const smo65512 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo65512'] = smo65512;
smo65512.setAttribute('id', 'smo65512');
const smo655120acc = new VF.Accidental('#');
smo65512.addModifier(smo655120acc, 0);
smo65538v0ar.push(smo65512);
const smo65513 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65513'] = smo65513;
smo65513.setAttribute('id', 'smo65513');
smo65513.addModifier(new VF.Dot(), 0);
smo65538v0ar.push(smo65513);
const smo65514 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65514'] = smo65514;
smo65514.setAttribute('id', 'smo65514');
smo65538v0ar.push(smo65514);
const smo65515 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65515'] = smo65515;
smo65515.setAttribute('id', 'smo65515');
smo65538v0ar.push(smo65515);
const smo65516 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65516'] = smo65516;
smo65516.setAttribute('id', 'smo65516');
const smo655160acc = new VF.Accidental('n');
smo65516.addModifier(smo655160acc, 0);
smo65538v0ar.push(smo65516);
const smo65517 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo65517'] = smo65517;
smo65517.setAttribute('id', 'smo65517');
smo65538v0ar.push(smo65517);
smo65538v0.addTickables(smo65538v0ar)
fmtsmo6553851.joinVoices([smo65538v0]);
const smo65538v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65538v1ar = [];
const smo65518 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo65518'] = smo65518;
smo65518.setAttribute('id', 'smo65518');
smo65518.setStyle({ fillStyle: "#115511" });
smo65538v1ar.push(smo65518);
const smo65519 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo65519'] = smo65519;
smo65519.setAttribute('id', 'smo65519');
smo65519.setStyle({ fillStyle: "#115511" });
const smo655190acc = new VF.Accidental('#');
smo65519.addModifier(smo655190acc, 0);
smo65538v1ar.push(smo65519);
const smo65520 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65520'] = smo65520;
smo65520.setAttribute('id', 'smo65520');
smo65520.setStyle({ fillStyle: "#115511" });
smo65538v1ar.push(smo65520);
const smo65521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65521'] = smo65521;
smo65521.setAttribute('id', 'smo65521');
smo65521.setStyle({ fillStyle: "#115511" });
smo65538v1ar.push(smo65521);
const smo65522 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65522'] = smo65522;
smo65522.setAttribute('id', 'smo65522');
smo65522.setStyle({ fillStyle: "#115511" });
smo65538v1ar.push(smo65522);
const smo65523 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65523'] = smo65523;
smo65523.setAttribute('id', 'smo65523');
smo65523.setStyle({ fillStyle: "#115511" });
smo65538v1ar.push(smo65523);
const smo65524 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65524'] = smo65524;
smo65524.setAttribute('id', 'smo65524');
smo65524.setStyle({ fillStyle: "#115511" });
const smo655240acc = new VF.Accidental('n');
smo65524.addModifier(smo655240acc, 0);
smo65538v1ar.push(smo65524);
smo65538v1.addTickables(smo65538v1ar)
fmtsmo6553851.joinVoices([smo65538v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68872 = smo60469.getStemDirection();
smo60469.setStemDirection(dirsmo68872);
smo60470.setStemDirection(dirsmo68872);
smo60471.setStemDirection(dirsmo68872);
smo60472.setStemDirection(dirsmo68872);
const smo68872 = new VF.Beam([smo60469,smo60470,smo60471,smo60472]);
const dirsmo68873 = smo60473.getStemDirection();
smo60473.setStemDirection(dirsmo68873);
smo60474.setStemDirection(dirsmo68873);
smo60475.setStemDirection(dirsmo68873);
smo60476.setStemDirection(dirsmo68873);
const smo68873 = new VF.Beam([smo60473,smo60474,smo60475,smo60476]);
const dirsmo68874 = smo60477.getStemDirection();
smo60477.setStemDirection(dirsmo68874);
smo60478.setStemDirection(dirsmo68874);
const smo68874 = new VF.Beam([smo60477,smo60478]);
const dirsmo68875 = smo60479.getStemDirection();
smo60479.setStemDirection(dirsmo68875);
smo60480.setStemDirection(dirsmo68875);
smo60481.setStemDirection(dirsmo68875);
smo60482.setStemDirection(dirsmo68875);
smo60483.setStemDirection(dirsmo68875);
const smo68875 = new VF.Beam([smo60479,smo60480,smo60481,smo60482,smo60483]);
const dirsmo68876 = smo60484.getStemDirection();
smo60484.setStemDirection(dirsmo68876);
smo60485.setStemDirection(dirsmo68876);
const smo68876 = new VF.Beam([smo60484,smo60485]);
const dirsmo68877 = smo60486.getStemDirection();
smo60486.setStemDirection(dirsmo68877);
smo60487.setStemDirection(dirsmo68877);
smo60488.setStemDirection(dirsmo68877);
smo60489.setStemDirection(dirsmo68877);
const smo68877 = new VF.Beam([smo60486,smo60487,smo60488,smo60489]);
const dirsmo68880 = smo65510.getStemDirection();
smo65510.setStemDirection(dirsmo68880);
smo65511.setStemDirection(dirsmo68880);
smo65512.setStemDirection(dirsmo68880);
const smo68880 = new VF.Beam([smo65510,smo65511,smo65512]);
const dirsmo68881 = smo65513.getStemDirection();
smo65513.setStemDirection(dirsmo68881);
smo65514.setStemDirection(dirsmo68881);
smo65515.setStemDirection(dirsmo68881);
const smo68881 = new VF.Beam([smo65513,smo65514,smo65515]);
const dirsmo68882 = smo65516.getStemDirection();
smo65516.setStemDirection(dirsmo68882);
smo65517.setStemDirection(dirsmo68882);
const smo68882 = new VF.Beam([smo65516,smo65517]);
const dirsmo68883 = smo65518.getStemDirection();
smo65518.setStemDirection(dirsmo68883);
smo65519.setStemDirection(dirsmo68883);
smo65520.setStemDirection(dirsmo68883);
smo65521.setStemDirection(dirsmo68883);
const smo68883 = new VF.Beam([smo65518,smo65519,smo65520,smo65521]);
const dirsmo68884 = smo65523.getStemDirection();
smo65523.setStemDirection(dirsmo68884);
smo65524.setStemDirection(dirsmo68884);
const smo68884 = new VF.Beam([smo65523,smo65524]);
 
// formatting measures in staff group smo57677
fmtsmo6050351.format([smo60503v0,smo60503v1,smo65538v0,smo65538v1], 515);
const stavesmo60503 = new VF.Stave(646, 662, 563);
stavesmo60503.setAttribute('id', 'stavesmo60503');
stavesmo60503.setBegBarType(VF.Barline.type.NONE);
stavesmo60503.setContext(context);
stavesmo60503.draw();
smo60503v0.draw(context, stavesmo60503);
smo60503v1.draw(context, stavesmo60503);
smo68872.setContext(context);
smo68872.draw();
smo68873.setContext(context);
smo68873.draw();
smo68874.setContext(context);
smo68874.draw();
smo68875.setContext(context);
smo68875.draw();
smo68876.setContext(context);
smo68876.draw();
smo68877.setContext(context);
smo68877.draw();
const stavesmo65538 = new VF.Stave(646, 801, 563);
stavesmo65538.setAttribute('id', 'stavesmo65538');
stavesmo65538.setBegBarType(VF.Barline.type.NONE);
stavesmo65538.addClef('bass');
stavesmo65538.setContext(context);
stavesmo65538.draw();
smo65538v0.draw(context, stavesmo65538);
smo65538v1.draw(context, stavesmo65538);
smo68880.setContext(context);
smo68880.draw();
smo68881.setContext(context);
smo68881.draw();
smo68882.setContext(context);
smo68882.draw();
smo68883.setContext(context);
smo68883.draw();
smo68884.setContext(context);
smo68884.draw();
const fmtsmo6054052 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo60540v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60540v0ar = [];
const smo60504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60504'] = smo60504;
smo60504.setAttribute('id', 'smo60504');
smo60540v0ar.push(smo60504);
const smo60505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/5/n"]}'))
noteHash['smo60505'] = smo60505;
smo60505.setAttribute('id', 'smo60505');
const smo605050acc = new VF.Accidental('b');
smo60505.addModifier(smo605050acc, 0);
smo60540v0ar.push(smo60505);
const smo60506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo60506'] = smo60506;
smo60506.setAttribute('id', 'smo60506');
smo60540v0ar.push(smo60506);
const smo60507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60507'] = smo60507;
smo60507.setAttribute('id', 'smo60507');
smo60540v0ar.push(smo60507);
const smo60508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60508'] = smo60508;
smo60508.setAttribute('id', 'smo60508');
smo60540v0ar.push(smo60508);
const smo60509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60509'] = smo60509;
smo60509.setAttribute('id', 'smo60509');
smo60540v0ar.push(smo60509);
const smo60510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60510'] = smo60510;
smo60510.setAttribute('id', 'smo60510');
smo60540v0ar.push(smo60510);
const smo60511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60511'] = smo60511;
smo60511.setAttribute('id', 'smo60511');
smo60540v0ar.push(smo60511);
const smo60512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60512'] = smo60512;
smo60512.setAttribute('id', 'smo60512');
smo60540v0ar.push(smo60512);
const smo60513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60513'] = smo60513;
smo60513.setAttribute('id', 'smo60513');
smo60540v0ar.push(smo60513);
const smo60514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60514'] = smo60514;
smo60514.setAttribute('id', 'smo60514');
smo60540v0ar.push(smo60514);
const smo60515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60515'] = smo60515;
smo60515.setAttribute('id', 'smo60515');
const smo60516 = new VF.Ornament('mordent_inverted');
smo60515.addModifier(smo60516, 0);
smo60540v0ar.push(smo60515);
const smo60517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60517'] = smo60517;
smo60517.setAttribute('id', 'smo60517');
smo60540v0ar.push(smo60517);
const smo60518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60518'] = smo60518;
smo60518.setAttribute('id', 'smo60518');
smo60540v0ar.push(smo60518);
smo60540v0.addTickables(smo60540v0ar)
fmtsmo6054052.joinVoices([smo60540v0]);
const smo60540v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60540v1ar = [];
const smo60519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60519'] = smo60519;
smo60519.setAttribute('id', 'smo60519');
smo60519.setStyle({ fillStyle: "#115511" });
smo60540v1ar.push(smo60519);
const smo60520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60520'] = smo60520;
smo60520.setAttribute('id', 'smo60520');
smo60520.setStyle({ fillStyle: "#115511" });
smo60540v1ar.push(smo60520);
const smo60521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo60521'] = smo60521;
smo60521.setAttribute('id', 'smo60521');
smo60521.setStyle({ fillStyle: "#115511" });
const smo605210acc = new VF.Accidental('#');
smo60521.addModifier(smo605210acc, 0);
smo60540v1ar.push(smo60521);
const smo60522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60522'] = smo60522;
smo60522.setAttribute('id', 'smo60522');
smo60522.setStyle({ fillStyle: "#115511" });
smo60540v1ar.push(smo60522);
const smo60523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60523'] = smo60523;
smo60523.setAttribute('id', 'smo60523');
smo60523.setStyle({ fillStyle: "#115511" });
smo60540v1ar.push(smo60523);
const smo60524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo60524'] = smo60524;
smo60524.setAttribute('id', 'smo60524');
smo60524.setStyle({ fillStyle: "#115511" });
smo60540v1ar.push(smo60524);
const smo60525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60525'] = smo60525;
smo60525.setAttribute('id', 'smo60525');
smo60525.setStyle({ fillStyle: "#115511" });
smo60540v1ar.push(smo60525);
const smo60526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60526'] = smo60526;
smo60526.setAttribute('id', 'smo60526');
smo60526.setStyle({ fillStyle: "#115511" });
smo60540v1ar.push(smo60526);
smo60540v1.addTickables(smo60540v1ar)
fmtsmo6054052.joinVoices([smo60540v1]);
const fmtsmo6557252 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo65572v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65572v0ar = [];
const smo65539 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65539'] = smo65539;
smo65539.setAttribute('id', 'smo65539');
smo65572v0ar.push(smo65539);
const smo65540 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65540'] = smo65540;
smo65540.setAttribute('id', 'smo65540');
smo65572v0ar.push(smo65540);
const smo65541 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65541'] = smo65541;
smo65541.setAttribute('id', 'smo65541');
smo65572v0ar.push(smo65541);
const smo65542 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo65542'] = smo65542;
smo65542.setAttribute('id', 'smo65542');
smo65572v0ar.push(smo65542);
const smo65543 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65543'] = smo65543;
smo65543.setAttribute('id', 'smo65543');
smo65572v0ar.push(smo65543);
const smo65544 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65544'] = smo65544;
smo65544.setAttribute('id', 'smo65544');
smo65572v0ar.push(smo65544);
const smo65545 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo65545'] = smo65545;
smo65545.setAttribute('id', 'smo65545');
const smo655450acc = new VF.Accidental('#');
smo65545.addModifier(smo655450acc, 0);
smo65572v0ar.push(smo65545);
const smo65546 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
noteHash['smo65546'] = smo65546;
smo65546.setAttribute('id', 'smo65546');
smo65572v0ar.push(smo65546);
const smo65547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
noteHash['smo65547'] = smo65547;
smo65547.setAttribute('id', 'smo65547');
smo65572v0ar.push(smo65547);
smo65572v0.addTickables(smo65572v0ar)
fmtsmo6557252.joinVoices([smo65572v0]);
const smo65572v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65572v1ar = [];
const smo65548 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65548'] = smo65548;
smo65548.setAttribute('id', 'smo65548');
smo65548.setStyle({ fillStyle: "#115511" });
smo65548.addModifier(new VF.Dot(), 0);
smo65572v1ar.push(smo65548);
const smo65549 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65549'] = smo65549;
smo65549.setAttribute('id', 'smo65549');
smo65549.setStyle({ fillStyle: "#115511" });
smo65572v1ar.push(smo65549);
const smo65550 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65550'] = smo65550;
smo65550.setAttribute('id', 'smo65550');
smo65550.setStyle({ fillStyle: "#115511" });
smo65572v1ar.push(smo65550);
const smo65551 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65551'] = smo65551;
smo65551.setAttribute('id', 'smo65551');
smo65551.setStyle({ fillStyle: "#115511" });
smo65572v1ar.push(smo65551);
const smo65552 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo65552'] = smo65552;
smo65552.setAttribute('id', 'smo65552');
smo65552.setStyle({ fillStyle: "#115511" });
const smo655520acc = new VF.Accidental('b');
smo65552.addModifier(smo655520acc, 0);
smo65572v1ar.push(smo65552);
const smo65553 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65553'] = smo65553;
smo65553.setAttribute('id', 'smo65553');
smo65553.setStyle({ fillStyle: "#115511" });
smo65572v1ar.push(smo65553);
const smo65554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65554'] = smo65554;
smo65554.setAttribute('id', 'smo65554');
smo65554.setStyle({ fillStyle: "#115511" });
smo65572v1ar.push(smo65554);
const smo65555 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65555'] = smo65555;
smo65555.setAttribute('id', 'smo65555');
smo65555.setStyle({ fillStyle: "#115511" });
smo65572v1ar.push(smo65555);
const smo65556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo65556'] = smo65556;
smo65556.setAttribute('id', 'smo65556');
smo65556.setStyle({ fillStyle: "#115511" });
smo65572v1ar.push(smo65556);
const smo65557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65557'] = smo65557;
smo65557.setAttribute('id', 'smo65557');
smo65557.setStyle({ fillStyle: "#115511" });
smo65572v1ar.push(smo65557);
const smo65558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65558'] = smo65558;
smo65558.setAttribute('id', 'smo65558');
smo65558.setStyle({ fillStyle: "#115511" });
smo65572v1ar.push(smo65558);
smo65572v1.addTickables(smo65572v1ar)
fmtsmo6557252.joinVoices([smo65572v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68887 = smo60504.getStemDirection();
smo60504.setStemDirection(dirsmo68887);
smo60505.setStemDirection(dirsmo68887);
const smo68887 = new VF.Beam([smo60504,smo60505]);
const dirsmo68888 = smo60506.getStemDirection();
smo60506.setStemDirection(dirsmo68888);
smo60507.setStemDirection(dirsmo68888);
smo60508.setStemDirection(dirsmo68888);
const smo68888 = new VF.Beam([smo60506,smo60507,smo60508]);
const dirsmo68889 = smo60509.getStemDirection();
smo60509.setStemDirection(dirsmo68889);
smo60510.setStemDirection(dirsmo68889);
smo60511.setStemDirection(dirsmo68889);
smo60512.setStemDirection(dirsmo68889);
const smo68889 = new VF.Beam([smo60509,smo60510,smo60511,smo60512]);
const dirsmo68890 = smo60513.getStemDirection();
smo60513.setStemDirection(dirsmo68890);
smo60514.setStemDirection(dirsmo68890);
smo60515.setStemDirection(dirsmo68890);
smo60517.setStemDirection(dirsmo68890);
smo60518.setStemDirection(dirsmo68890);
const smo68890 = new VF.Beam([smo60513,smo60514,smo60515,smo60517,smo60518]);
const dirsmo68891 = smo60519.getStemDirection();
smo60519.setStemDirection(dirsmo68891);
smo60520.setStemDirection(dirsmo68891);
smo60521.setStemDirection(dirsmo68891);
smo60522.setStemDirection(dirsmo68891);
const smo68891 = new VF.Beam([smo60519,smo60520,smo60521,smo60522]);
const dirsmo68892 = smo60523.getStemDirection();
smo60523.setStemDirection(dirsmo68892);
smo60524.setStemDirection(dirsmo68892);
smo60525.setStemDirection(dirsmo68892);
smo60526.setStemDirection(dirsmo68892);
const smo68892 = new VF.Beam([smo60523,smo60524,smo60525,smo60526]);
const dirsmo68895 = smo65539.getStemDirection();
smo65539.setStemDirection(dirsmo68895);
smo65540.setStemDirection(dirsmo68895);
const smo68895 = new VF.Beam([smo65539,smo65540]);
const dirsmo68896 = smo65541.getStemDirection();
smo65541.setStemDirection(dirsmo68896);
smo65542.setStemDirection(dirsmo68896);
smo65543.setStemDirection(dirsmo68896);
smo65544.setStemDirection(dirsmo68896);
const smo68896 = new VF.Beam([smo65541,smo65542,smo65543,smo65544]);
const dirsmo68897 = smo65548.getStemDirection();
smo65548.setStemDirection(dirsmo68897);
smo65549.setStemDirection(dirsmo68897);
smo65550.setStemDirection(dirsmo68897);
smo65551.setStemDirection(dirsmo68897);
smo65552.setStemDirection(dirsmo68897);
const smo68897 = new VF.Beam([smo65548,smo65549,smo65550,smo65551,smo65552]);
const dirsmo68898 = smo65553.getStemDirection();
smo65553.setStemDirection(dirsmo68898);
smo65554.setStemDirection(dirsmo68898);
const smo68898 = new VF.Beam([smo65553,smo65554]);
const dirsmo68899 = smo65555.getStemDirection();
smo65555.setStemDirection(dirsmo68899);
smo65556.setStemDirection(dirsmo68899);
smo65557.setStemDirection(dirsmo68899);
smo65558.setStemDirection(dirsmo68899);
const smo68899 = new VF.Beam([smo65555,smo65556,smo65557,smo65558]);
 
// formatting measures in staff group smo57677
fmtsmo6054052.format([smo60540v0,smo60540v1,smo65572v0,smo65572v1], 585);
const stavesmo60540 = new VF.Stave(1209, 662, 599);
stavesmo60540.setAttribute('id', 'stavesmo60540');
stavesmo60540.setBegBarType(VF.Barline.type.NONE);
stavesmo60540.setContext(context);
stavesmo60540.draw();
smo60540v0.draw(context, stavesmo60540);
smo60540v1.draw(context, stavesmo60540);
smo68887.setContext(context);
smo68887.draw();
smo68888.setContext(context);
smo68888.draw();
smo68889.setContext(context);
smo68889.draw();
smo68890.setContext(context);
smo68890.draw();
smo68891.setContext(context);
smo68891.draw();
smo68892.setContext(context);
smo68892.draw();
const stavesmo65572 = new VF.Stave(1209, 801, 599);
stavesmo65572.setAttribute('id', 'stavesmo65572');
stavesmo65572.setBegBarType(VF.Barline.type.NONE);
stavesmo65572.setContext(context);
stavesmo65572.draw();
smo65572v0.draw(context, stavesmo65572);
smo65572v1.draw(context, stavesmo65572);
smo68895.setContext(context);
smo68895.draw();
smo68896.setContext(context);
smo68896.draw();
smo68897.setContext(context);
smo68897.draw();
smo68898.setContext(context);
smo68898.draw();
smo68899.setContext(context);
smo68899.draw();
const rightsmo57677stavesmo605401 = new VF.StaveConnector(stavesmo60540, stavesmo65572).setType(0);
rightsmo57677stavesmo605401.setContext(context).draw();
const fmtsmo6057253 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo60572v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60572v0ar = [];
const smo60541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo60541'] = smo60541;
smo60541.setAttribute('id', 'smo60541');
smo60572v0ar.push(smo60541);
const smo60542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo60542'] = smo60542;
smo60542.setAttribute('id', 'smo60542');
const smo605420acc = new VF.Accidental('#');
smo60542.addModifier(smo605420acc, 0);
smo60572v0ar.push(smo60542);
const smo60543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60543'] = smo60543;
smo60543.setAttribute('id', 'smo60543');
smo60572v0ar.push(smo60543);
const smo60544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60544'] = smo60544;
smo60544.setAttribute('id', 'smo60544');
smo60572v0ar.push(smo60544);
const smo60545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60545'] = smo60545;
smo60545.setAttribute('id', 'smo60545');
smo60545.addModifier(new VF.Dot(), 0);
smo60572v0ar.push(smo60545);
const smo60546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60546'] = smo60546;
smo60546.setAttribute('id', 'smo60546');
smo60572v0ar.push(smo60546);
const smo60547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60547'] = smo60547;
smo60547.setAttribute('id', 'smo60547');
smo60572v0ar.push(smo60547);
const smo60548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
noteHash['smo60548'] = smo60548;
smo60548.setAttribute('id', 'smo60548');
smo60572v0ar.push(smo60548);
const smo60549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
noteHash['smo60549'] = smo60549;
smo60549.setAttribute('id', 'smo60549');
smo60572v0ar.push(smo60549);
smo60572v0.addTickables(smo60572v0ar)
fmtsmo6057253.joinVoices([smo60572v0]);
const smo60572v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60572v1ar = [];
const smo60550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60550'] = smo60550;
smo60550.setAttribute('id', 'smo60550');
smo60550.setStyle({ fillStyle: "#115511" });
smo60572v1ar.push(smo60550);
const smo60551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
noteHash['smo60551'] = smo60551;
smo60551.setAttribute('id', 'smo60551');
smo60551.setStyle({ fillStyle: "#115511" });
smo60572v1ar.push(smo60551);
const smo60552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
noteHash['smo60552'] = smo60552;
smo60552.setAttribute('id', 'smo60552');
smo60552.setStyle({ fillStyle: "#115511" });
smo60572v1ar.push(smo60552);
const smo60553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60553'] = smo60553;
smo60553.setAttribute('id', 'smo60553');
smo60553.setStyle({ fillStyle: "#115511" });
smo60572v1ar.push(smo60553);
const smo60554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60554'] = smo60554;
smo60554.setAttribute('id', 'smo60554');
smo60554.setStyle({ fillStyle: "#115511" });
const smo605540acc = new VF.Accidental('#');
smo60554.addModifier(smo605540acc, 0);
smo60572v1ar.push(smo60554);
const smo60555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60555'] = smo60555;
smo60555.setAttribute('id', 'smo60555');
smo60555.setStyle({ fillStyle: "#115511" });
smo60572v1ar.push(smo60555);
const smo60556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60556'] = smo60556;
smo60556.setAttribute('id', 'smo60556');
smo60556.setStyle({ fillStyle: "#115511" });
smo60556.addModifier(new VF.Dot(), 0);
smo60572v1ar.push(smo60556);
const smo60557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60557'] = smo60557;
smo60557.setAttribute('id', 'smo60557');
smo60557.setStyle({ fillStyle: "#115511" });
smo60572v1ar.push(smo60557);
const smo60558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60558'] = smo60558;
smo60558.setAttribute('id', 'smo60558');
smo60558.setStyle({ fillStyle: "#115511" });
smo60572v1ar.push(smo60558);
smo60572v1.addTickables(smo60572v1ar)
fmtsmo6057253.joinVoices([smo60572v1]);
const fmtsmo6560253 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo65602v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65602v0ar = [];
const smo65573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo65573'] = smo65573;
smo65573.setAttribute('id', 'smo65573');
smo65602v0ar.push(smo65573);
const smo65574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65574'] = smo65574;
smo65574.setAttribute('id', 'smo65574');
smo65602v0ar.push(smo65574);
const smo65575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65575'] = smo65575;
smo65575.setAttribute('id', 'smo65575');
smo65602v0ar.push(smo65575);
const smo65576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo65576'] = smo65576;
smo65576.setAttribute('id', 'smo65576');
const smo655760acc = new VF.Accidental('#');
smo65576.addModifier(smo655760acc, 0);
smo65602v0ar.push(smo65576);
const smo65577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65577'] = smo65577;
smo65577.setAttribute('id', 'smo65577');
smo65577.addModifier(new VF.Dot(), 0);
smo65602v0ar.push(smo65577);
const smo65578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo65578'] = smo65578;
smo65578.setAttribute('id', 'smo65578');
smo65602v0ar.push(smo65578);
const smo65579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo65579'] = smo65579;
smo65579.setAttribute('id', 'smo65579');
smo65602v0ar.push(smo65579);
const smo65580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo65580'] = smo65580;
smo65580.setAttribute('id', 'smo65580');
const smo655800acc = new VF.Accidental('n');
smo65580.addModifier(smo655800acc, 0);
smo65602v0ar.push(smo65580);
const smo65581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo65581'] = smo65581;
smo65581.setAttribute('id', 'smo65581');
const smo655810acc = new VF.Accidental('#');
smo65581.addModifier(smo655810acc, 0);
smo65602v0ar.push(smo65581);
smo65602v0.addTickables(smo65602v0ar)
fmtsmo6560253.joinVoices([smo65602v0]);
const smo65602v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65602v1ar = [];
const smo65582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65582'] = smo65582;
smo65582.setAttribute('id', 'smo65582');
smo65582.setStyle({ fillStyle: "#115511" });
smo65602v1ar.push(smo65582);
const smo65583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65583'] = smo65583;
smo65583.setAttribute('id', 'smo65583');
smo65583.setStyle({ fillStyle: "#115511" });
smo65602v1ar.push(smo65583);
const smo65584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65584'] = smo65584;
smo65584.setAttribute('id', 'smo65584');
smo65584.setStyle({ fillStyle: "#115511" });
smo65602v1ar.push(smo65584);
const smo65585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65585'] = smo65585;
smo65585.setAttribute('id', 'smo65585');
smo65585.setStyle({ fillStyle: "#115511" });
smo65602v1ar.push(smo65585);
const smo65586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65586'] = smo65586;
smo65586.setAttribute('id', 'smo65586');
smo65586.setStyle({ fillStyle: "#115511" });
smo65602v1ar.push(smo65586);
const smo65587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65587'] = smo65587;
smo65587.setAttribute('id', 'smo65587');
smo65587.setStyle({ fillStyle: "#115511" });
smo65602v1ar.push(smo65587);
const smo65588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65588'] = smo65588;
smo65588.setAttribute('id', 'smo65588');
smo65588.setStyle({ fillStyle: "#115511" });
smo65602v1ar.push(smo65588);
smo65602v1.addTickables(smo65602v1ar)
fmtsmo6560253.joinVoices([smo65602v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68914 = smo60541.getStemDirection();
smo60541.setStemDirection(dirsmo68914);
smo60542.setStemDirection(dirsmo68914);
smo60543.setStemDirection(dirsmo68914);
smo60544.setStemDirection(dirsmo68914);
const smo68914 = new VF.Beam([smo60541,smo60542,smo60543,smo60544]);
const dirsmo68915 = smo60545.getStemDirection();
smo60545.setStemDirection(dirsmo68915);
smo60546.setStemDirection(dirsmo68915);
const smo68915 = new VF.Beam([smo60545,smo60546]);
const dirsmo68916 = smo60554.getStemDirection();
smo60554.setStemDirection(dirsmo68916);
smo60555.setStemDirection(dirsmo68916);
const smo68916 = new VF.Beam([smo60554,smo60555]);
const dirsmo68917 = smo60556.getStemDirection();
smo60556.setStemDirection(dirsmo68917);
smo60557.setStemDirection(dirsmo68917);
smo60558.setStemDirection(dirsmo68917);
const smo68917 = new VF.Beam([smo60556,smo60557,smo60558]);
const dirsmo68920 = smo65574.getStemDirection();
smo65574.setStemDirection(dirsmo68920);
smo65575.setStemDirection(dirsmo68920);
smo65576.setStemDirection(dirsmo68920);
const smo68920 = new VF.Beam([smo65574,smo65575,smo65576]);
const dirsmo68921 = smo65577.getStemDirection();
smo65577.setStemDirection(dirsmo68921);
smo65578.setStemDirection(dirsmo68921);
smo65579.setStemDirection(dirsmo68921);
const smo68921 = new VF.Beam([smo65577,smo65578,smo65579]);
const dirsmo68922 = smo65580.getStemDirection();
smo65580.setStemDirection(dirsmo68922);
smo65581.setStemDirection(dirsmo68922);
const smo68922 = new VF.Beam([smo65580,smo65581]);
const dirsmo68923 = smo65582.getStemDirection();
smo65582.setStemDirection(dirsmo68923);
smo65583.setStemDirection(dirsmo68923);
smo65584.setStemDirection(dirsmo68923);
smo65585.setStemDirection(dirsmo68923);
smo65586.setStemDirection(dirsmo68923);
smo65587.setStemDirection(dirsmo68923);
const smo68923 = new VF.Beam([smo65582,smo65583,smo65584,smo65585,smo65586,smo65587]);
 
// formatting measures in staff group smo57677
fmtsmo6057253.format([smo60572v0,smo60572v1,smo65602v0,smo65602v1], 496);
const stavesmo60572 = new VF.Stave(90, 1010, 554);
stavesmo60572.setAttribute('id', 'stavesmo60572');
stavesmo60572.setBegBarType(1);
stavesmo60572.addClef('treble');
stavesmo60572.setContext(context);
stavesmo60572.draw();
smo60572v0.draw(context, stavesmo60572);
smo60572v1.draw(context, stavesmo60572);
smo68914.setContext(context);
smo68914.draw();
smo68915.setContext(context);
smo68915.draw();
smo68916.setContext(context);
smo68916.draw();
smo68917.setContext(context);
smo68917.draw();
const stavesmo65602 = new VF.Stave(90, 1107, 554);
stavesmo65602.setAttribute('id', 'stavesmo65602');
stavesmo65602.setBegBarType(1);
stavesmo65602.addClef('treble');
stavesmo65602.setContext(context);
stavesmo65602.draw();
smo65602v0.draw(context, stavesmo65602);
smo65602v1.draw(context, stavesmo65602);
smo68920.setContext(context);
smo68920.draw();
smo68921.setContext(context);
smo68921.draw();
smo68922.setContext(context);
smo68922.draw();
smo68923.setContext(context);
smo68923.draw();
const leftsmo57677stavesmo605721 = new VF.StaveConnector(stavesmo60572, stavesmo65602).setType(3);
leftsmo57677stavesmo605721.setContext(context).draw();
const fmtsmo6059954 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo60599v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60599v0ar = [];
const smo60573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60573'] = smo60573;
smo60573.setAttribute('id', 'smo60573');
smo60573.setStyle({ fillStyle: '#aaaaaa7f' });
smo60599v0ar.push(smo60573);
smo60599v0.addTickables(smo60599v0ar)
fmtsmo6059954.joinVoices([smo60599v0]);
const smo60599v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60599v1ar = [];
const smo60574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60574'] = smo60574;
smo60574.setAttribute('id', 'smo60574');
smo60574.setStyle({ fillStyle: "#115511" });
smo60599v1ar.push(smo60574);
const smo60575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60575'] = smo60575;
smo60575.setAttribute('id', 'smo60575');
smo60575.setStyle({ fillStyle: "#115511" });
smo60599v1ar.push(smo60575);
const smo60576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60576'] = smo60576;
smo60576.setAttribute('id', 'smo60576');
smo60576.setStyle({ fillStyle: "#115511" });
const smo605760acc = new VF.Accidental('#');
smo60576.addModifier(smo605760acc, 0);
smo60599v1ar.push(smo60576);
const smo60577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60577'] = smo60577;
smo60577.setAttribute('id', 'smo60577');
smo60577.setStyle({ fillStyle: "#115511" });
smo60599v1ar.push(smo60577);
const smo60578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60578'] = smo60578;
smo60578.setAttribute('id', 'smo60578');
smo60578.setStyle({ fillStyle: "#115511" });
smo60599v1ar.push(smo60578);
const smo60579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60579'] = smo60579;
smo60579.setAttribute('id', 'smo60579');
smo60579.setStyle({ fillStyle: "#115511" });
smo60599v1ar.push(smo60579);
const smo60580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60580'] = smo60580;
smo60580.setAttribute('id', 'smo60580');
smo60580.setStyle({ fillStyle: "#115511" });
smo60599v1ar.push(smo60580);
const smo60581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60581'] = smo60581;
smo60581.setAttribute('id', 'smo60581');
smo60581.setStyle({ fillStyle: "#115511" });
smo60599v1ar.push(smo60581);
const smo60582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60582'] = smo60582;
smo60582.setAttribute('id', 'smo60582');
smo60582.setStyle({ fillStyle: "#115511" });
smo60599v1ar.push(smo60582);
const smo60583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60583'] = smo60583;
smo60583.setAttribute('id', 'smo60583');
smo60583.setStyle({ fillStyle: "#115511" });
smo60599v1ar.push(smo60583);
const smo60584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60584'] = smo60584;
smo60584.setAttribute('id', 'smo60584');
smo60584.setStyle({ fillStyle: "#115511" });
smo60599v1ar.push(smo60584);
const smo60585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60585'] = smo60585;
smo60585.setAttribute('id', 'smo60585');
smo60585.setStyle({ fillStyle: "#115511" });
smo60599v1ar.push(smo60585);
smo60599v1.addTickables(smo60599v1ar)
fmtsmo6059954.joinVoices([smo60599v1]);
const fmtsmo6563554 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo65635v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65635v0ar = [];
const smo65603 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65603'] = smo65603;
smo65603.setAttribute('id', 'smo65603');
smo65635v0ar.push(smo65603);
const smo65604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65604'] = smo65604;
smo65604.setAttribute('id', 'smo65604');
smo65635v0ar.push(smo65604);
const smo65605 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65605'] = smo65605;
smo65605.setAttribute('id', 'smo65605');
smo65635v0ar.push(smo65605);
const smo65606 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65606'] = smo65606;
smo65606.setAttribute('id', 'smo65606');
smo65635v0ar.push(smo65606);
const smo65607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
noteHash['smo65607'] = smo65607;
smo65607.setAttribute('id', 'smo65607');
smo65635v0ar.push(smo65607);
const smo65608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo65608'] = smo65608;
smo65608.setAttribute('id', 'smo65608');
smo65635v0ar.push(smo65608);
const smo65609 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo65609'] = smo65609;
smo65609.setAttribute('id', 'smo65609');
smo65635v0ar.push(smo65609);
const smo65610 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/2/n"]}'))
noteHash['smo65610'] = smo65610;
smo65610.setAttribute('id', 'smo65610');
const smo656100acc = new VF.Accidental('#');
smo65610.addModifier(smo656100acc, 0);
smo65635v0ar.push(smo65610);
const smo65611 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/2/n"]}'))
noteHash['smo65611'] = smo65611;
smo65611.setAttribute('id', 'smo65611');
smo65635v0ar.push(smo65611);
const smo65612 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65612'] = smo65612;
smo65612.setAttribute('id', 'smo65612');
smo65635v0ar.push(smo65612);
const smo65613 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo65613'] = smo65613;
smo65613.setAttribute('id', 'smo65613');
const smo656130acc = new VF.Accidental('#');
smo65613.addModifier(smo656130acc, 0);
smo65635v0ar.push(smo65613);
const smo65614 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65614'] = smo65614;
smo65614.setAttribute('id', 'smo65614');
smo65635v0ar.push(smo65614);
smo65635v0.addTickables(smo65635v0ar)
fmtsmo6563554.joinVoices([smo65635v0]);
const smo65635v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65635v1ar = [];
const smo65615 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65615'] = smo65615;
smo65615.setAttribute('id', 'smo65615');
smo65615.setStyle({ fillStyle: "#115511" });
smo65635v1ar.push(smo65615);
const smo65616 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65616'] = smo65616;
smo65616.setAttribute('id', 'smo65616');
smo65616.setStyle({ fillStyle: "#115511" });
smo65635v1ar.push(smo65616);
const smo65617 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65617'] = smo65617;
smo65617.setAttribute('id', 'smo65617');
smo65617.setStyle({ fillStyle: "#115511" });
smo65635v1ar.push(smo65617);
const smo65618 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo65618'] = smo65618;
smo65618.setAttribute('id', 'smo65618');
smo65618.setStyle({ fillStyle: "#115511" });
const smo656180acc = new VF.Accidental('#');
smo65618.addModifier(smo656180acc, 0);
smo65635v1ar.push(smo65618);
const smo65619 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65619'] = smo65619;
smo65619.setAttribute('id', 'smo65619');
smo65619.setStyle({ fillStyle: "#115511" });
smo65635v1ar.push(smo65619);
const smo65620 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65620'] = smo65620;
smo65620.setAttribute('id', 'smo65620');
smo65620.setStyle({ fillStyle: "#115511" });
smo65635v1ar.push(smo65620);
const smo65621 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65621'] = smo65621;
smo65621.setAttribute('id', 'smo65621');
smo65621.setStyle({ fillStyle: "#115511" });
smo65635v1ar.push(smo65621);
smo65635v1.addTickables(smo65635v1ar)
fmtsmo6563554.joinVoices([smo65635v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68926 = smo60574.getStemDirection();
smo60574.setStemDirection(dirsmo68926);
smo60575.setStemDirection(dirsmo68926);
smo60576.setStemDirection(dirsmo68926);
smo60577.setStemDirection(dirsmo68926);
const smo68926 = new VF.Beam([smo60574,smo60575,smo60576,smo60577]);
const dirsmo68927 = smo60578.getStemDirection();
smo60578.setStemDirection(dirsmo68927);
smo60579.setStemDirection(dirsmo68927);
smo60580.setStemDirection(dirsmo68927);
smo60581.setStemDirection(dirsmo68927);
const smo68927 = new VF.Beam([smo60578,smo60579,smo60580,smo60581]);
const dirsmo68928 = smo60582.getStemDirection();
smo60582.setStemDirection(dirsmo68928);
smo60583.setStemDirection(dirsmo68928);
smo60584.setStemDirection(dirsmo68928);
smo60585.setStemDirection(dirsmo68928);
const smo68928 = new VF.Beam([smo60582,smo60583,smo60584,smo60585]);
const dirsmo68931 = smo65603.getStemDirection();
smo65603.setStemDirection(dirsmo68931);
smo65604.setStemDirection(dirsmo68931);
smo65605.setStemDirection(dirsmo68931);
smo65606.setStemDirection(dirsmo68931);
const smo68931 = new VF.Beam([smo65603,smo65604,smo65605,smo65606]);
const dirsmo68932 = smo65607.getStemDirection();
smo65607.setStemDirection(dirsmo68932);
smo65608.setStemDirection(dirsmo68932);
smo65609.setStemDirection(dirsmo68932);
smo65610.setStemDirection(dirsmo68932);
const smo68932 = new VF.Beam([smo65607,smo65608,smo65609,smo65610]);
const dirsmo68933 = smo65611.getStemDirection();
smo65611.setStemDirection(dirsmo68933);
smo65612.setStemDirection(dirsmo68933);
smo65613.setStemDirection(dirsmo68933);
smo65614.setStemDirection(dirsmo68933);
const smo68933 = new VF.Beam([smo65611,smo65612,smo65613,smo65614]);
const dirsmo68934 = smo65615.getStemDirection();
smo65615.setStemDirection(dirsmo68934);
smo65616.setStemDirection(dirsmo68934);
const smo68934 = new VF.Beam([smo65615,smo65616]);
const dirsmo68935 = smo65617.getStemDirection();
smo65617.setStemDirection(dirsmo68935);
smo65618.setStemDirection(dirsmo68935);
smo65619.setStemDirection(dirsmo68935);
smo65620.setStemDirection(dirsmo68935);
const smo68935 = new VF.Beam([smo65617,smo65618,smo65619,smo65620]);
 
// formatting measures in staff group smo57677
fmtsmo6059954.format([smo60599v0,smo60599v1,smo65635v0,smo65635v1], 564);
const stavesmo60599 = new VF.Stave(644, 1010, 612);
stavesmo60599.setAttribute('id', 'stavesmo60599');
stavesmo60599.setBegBarType(VF.Barline.type.NONE);
stavesmo60599.setContext(context);
stavesmo60599.draw();
smo60599v0.draw(context, stavesmo60599);
smo60599v1.draw(context, stavesmo60599);
smo68926.setContext(context);
smo68926.draw();
smo68927.setContext(context);
smo68927.draw();
smo68928.setContext(context);
smo68928.draw();
const stavesmo65635 = new VF.Stave(644, 1107, 612);
stavesmo65635.setAttribute('id', 'stavesmo65635');
stavesmo65635.setBegBarType(VF.Barline.type.NONE);
stavesmo65635.addClef('bass');
stavesmo65635.setContext(context);
stavesmo65635.draw();
smo65635v0.draw(context, stavesmo65635);
smo65635v1.draw(context, stavesmo65635);
smo68931.setContext(context);
smo68931.draw();
smo68932.setContext(context);
smo68932.draw();
smo68933.setContext(context);
smo68933.draw();
smo68934.setContext(context);
smo68934.draw();
smo68935.setContext(context);
smo68935.draw();
const fmtsmo6063255 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo60632v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60632v0ar = [];
const smo60600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60600'] = smo60600;
smo60600.setAttribute('id', 'smo60600');
smo60632v0ar.push(smo60600);
const smo60601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60601'] = smo60601;
smo60601.setAttribute('id', 'smo60601');
smo60632v0ar.push(smo60601);
const smo60602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60602'] = smo60602;
smo60602.setAttribute('id', 'smo60602');
smo60602.addModifier(new VF.Dot(), 0);
smo60632v0ar.push(smo60602);
const smo60603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60603'] = smo60603;
smo60603.setAttribute('id', 'smo60603');
smo60632v0ar.push(smo60603);
const smo60604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60604'] = smo60604;
smo60604.setAttribute('id', 'smo60604');
smo60632v0ar.push(smo60604);
const smo60605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60605'] = smo60605;
smo60605.setAttribute('id', 'smo60605');
smo60632v0ar.push(smo60605);
const smo60606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60606'] = smo60606;
smo60606.setAttribute('id', 'smo60606');
smo60632v0ar.push(smo60606);
const smo60607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60607'] = smo60607;
smo60607.setAttribute('id', 'smo60607');
smo60632v0ar.push(smo60607);
const smo60608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60608'] = smo60608;
smo60608.setAttribute('id', 'smo60608');
smo60632v0ar.push(smo60608);
smo60632v0.addTickables(smo60632v0ar)
fmtsmo6063255.joinVoices([smo60632v0]);
const smo60632v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60632v1ar = [];
const smo60609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60609'] = smo60609;
smo60609.setAttribute('id', 'smo60609');
smo60609.setStyle({ fillStyle: "#115511" });
smo60632v1ar.push(smo60609);
const smo60610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60610'] = smo60610;
smo60610.setAttribute('id', 'smo60610');
smo60610.setStyle({ fillStyle: "#115511" });
smo60632v1ar.push(smo60610);
const smo60611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60611'] = smo60611;
smo60611.setAttribute('id', 'smo60611');
smo60611.setStyle({ fillStyle: "#115511" });
smo60632v1ar.push(smo60611);
const smo60612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60612'] = smo60612;
smo60612.setAttribute('id', 'smo60612');
smo60612.setStyle({ fillStyle: "#115511" });
smo60632v1ar.push(smo60612);
const smo60613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60613'] = smo60613;
smo60613.setAttribute('id', 'smo60613');
smo60613.setStyle({ fillStyle: "#115511" });
smo60632v1ar.push(smo60613);
const smo60614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60614'] = smo60614;
smo60614.setAttribute('id', 'smo60614');
smo60614.setStyle({ fillStyle: "#115511" });
smo60632v1ar.push(smo60614);
const smo60615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60615'] = smo60615;
smo60615.setAttribute('id', 'smo60615');
smo60615.setStyle({ fillStyle: "#115511" });
smo60632v1ar.push(smo60615);
const smo60616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60616'] = smo60616;
smo60616.setAttribute('id', 'smo60616');
smo60616.setStyle({ fillStyle: "#115511" });
smo60632v1ar.push(smo60616);
const smo60617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60617'] = smo60617;
smo60617.setAttribute('id', 'smo60617');
smo60617.setStyle({ fillStyle: "#115511" });
smo60632v1ar.push(smo60617);
const smo60618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60618'] = smo60618;
smo60618.setAttribute('id', 'smo60618');
smo60618.setStyle({ fillStyle: "#115511" });
smo60632v1ar.push(smo60618);
smo60632v1.addTickables(smo60632v1ar)
fmtsmo6063255.joinVoices([smo60632v1]);
const fmtsmo6566755 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo65667v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65667v0ar = [];
const smo65636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo65636'] = smo65636;
smo65636.setAttribute('id', 'smo65636');
smo65667v0ar.push(smo65636);
const smo65637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65637'] = smo65637;
smo65637.setAttribute('id', 'smo65637');
smo65667v0ar.push(smo65637);
const smo65638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65638'] = smo65638;
smo65638.setAttribute('id', 'smo65638');
smo65667v0ar.push(smo65638);
const smo65639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65639'] = smo65639;
smo65639.setAttribute('id', 'smo65639');
smo65667v0ar.push(smo65639);
const smo65640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65640'] = smo65640;
smo65640.setAttribute('id', 'smo65640');
smo65667v0ar.push(smo65640);
const smo65641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65641'] = smo65641;
smo65641.setAttribute('id', 'smo65641');
smo65667v0ar.push(smo65641);
const smo65642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65642'] = smo65642;
smo65642.setAttribute('id', 'smo65642');
smo65667v0ar.push(smo65642);
const smo65643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo65643'] = smo65643;
smo65643.setAttribute('id', 'smo65643');
smo65667v0ar.push(smo65643);
const smo65644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65644'] = smo65644;
smo65644.setAttribute('id', 'smo65644');
smo65667v0ar.push(smo65644);
const smo65645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65645'] = smo65645;
smo65645.setAttribute('id', 'smo65645');
smo65667v0ar.push(smo65645);
const smo65646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65646'] = smo65646;
smo65646.setAttribute('id', 'smo65646');
smo65667v0ar.push(smo65646);
const smo65647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65647'] = smo65647;
smo65647.setAttribute('id', 'smo65647');
smo65667v0ar.push(smo65647);
smo65667v0.addTickables(smo65667v0ar)
fmtsmo6566755.joinVoices([smo65667v0]);
const smo65667v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65667v1ar = [];
const smo65648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65648'] = smo65648;
smo65648.setAttribute('id', 'smo65648');
smo65648.setStyle({ fillStyle: "#115511" });
smo65667v1ar.push(smo65648);
const smo65649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65649'] = smo65649;
smo65649.setAttribute('id', 'smo65649');
smo65649.setStyle({ fillStyle: "#115511" });
smo65667v1ar.push(smo65649);
const smo65650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65650'] = smo65650;
smo65650.setAttribute('id', 'smo65650');
smo65650.setStyle({ fillStyle: "#115511" });
smo65667v1ar.push(smo65650);
const smo65651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo65651'] = smo65651;
smo65651.setAttribute('id', 'smo65651');
smo65651.setStyle({ fillStyle: "#115511" });
const smo656510acc = new VF.Accidental('#');
smo65651.addModifier(smo656510acc, 0);
smo65667v1ar.push(smo65651);
const smo65652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65652'] = smo65652;
smo65652.setAttribute('id', 'smo65652');
smo65652.setStyle({ fillStyle: "#115511" });
smo65667v1ar.push(smo65652);
const smo65653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65653'] = smo65653;
smo65653.setAttribute('id', 'smo65653');
smo65653.setStyle({ fillStyle: "#115511" });
smo65667v1ar.push(smo65653);
smo65667v1.addTickables(smo65667v1ar)
fmtsmo6566755.joinVoices([smo65667v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68938 = smo60600.getStemDirection();
smo60600.setStemDirection(dirsmo68938);
smo60601.setStemDirection(dirsmo68938);
const smo68938 = new VF.Beam([smo60600,smo60601]);
const dirsmo68939 = smo60602.getStemDirection();
smo60602.setStemDirection(dirsmo68939);
smo60603.setStemDirection(dirsmo68939);
smo60604.setStemDirection(dirsmo68939);
const smo68939 = new VF.Beam([smo60602,smo60603,smo60604]);
const dirsmo68940 = smo60605.getStemDirection();
smo60605.setStemDirection(dirsmo68940);
smo60606.setStemDirection(dirsmo68940);
smo60607.setStemDirection(dirsmo68940);
smo60608.setStemDirection(dirsmo68940);
const smo68940 = new VF.Beam([smo60605,smo60606,smo60607,smo60608]);
const dirsmo68941 = smo60611.getStemDirection();
smo60611.setStemDirection(dirsmo68941);
smo60612.setStemDirection(dirsmo68941);
smo60613.setStemDirection(dirsmo68941);
smo60614.setStemDirection(dirsmo68941);
const smo68941 = new VF.Beam([smo60611,smo60612,smo60613,smo60614]);
const dirsmo68942 = smo60615.getStemDirection();
smo60615.setStemDirection(dirsmo68942);
smo60616.setStemDirection(dirsmo68942);
smo60617.setStemDirection(dirsmo68942);
smo60618.setStemDirection(dirsmo68942);
const smo68942 = new VF.Beam([smo60615,smo60616,smo60617,smo60618]);
const dirsmo68945 = smo65636.getStemDirection();
smo65636.setStemDirection(dirsmo68945);
smo65637.setStemDirection(dirsmo68945);
smo65638.setStemDirection(dirsmo68945);
smo65639.setStemDirection(dirsmo68945);
const smo68945 = new VF.Beam([smo65636,smo65637,smo65638,smo65639]);
const dirsmo68946 = smo65640.getStemDirection();
smo65640.setStemDirection(dirsmo68946);
smo65641.setStemDirection(dirsmo68946);
smo65642.setStemDirection(dirsmo68946);
smo65643.setStemDirection(dirsmo68946);
const smo68946 = new VF.Beam([smo65640,smo65641,smo65642,smo65643]);
const dirsmo68947 = smo65644.getStemDirection();
smo65644.setStemDirection(dirsmo68947);
smo65645.setStemDirection(dirsmo68947);
smo65646.setStemDirection(dirsmo68947);
smo65647.setStemDirection(dirsmo68947);
const smo68947 = new VF.Beam([smo65644,smo65645,smo65646,smo65647]);
const dirsmo68948 = smo65648.getStemDirection();
smo65648.setStemDirection(dirsmo68948);
smo65649.setStemDirection(dirsmo68948);
smo65650.setStemDirection(dirsmo68948);
const smo68948 = new VF.Beam([smo65648,smo65649,smo65650]);
const dirsmo68949 = smo65651.getStemDirection();
smo65651.setStemDirection(dirsmo68949);
smo65652.setStemDirection(dirsmo68949);
const smo68949 = new VF.Beam([smo65651,smo65652]);
 
// formatting measures in staff group smo57677
fmtsmo6063255.format([smo60632v0,smo60632v1,smo65667v0,smo65667v1], 504);
const stavesmo60632 = new VF.Stave(1256, 1010, 552);
stavesmo60632.setAttribute('id', 'stavesmo60632');
stavesmo60632.setBegBarType(VF.Barline.type.NONE);
stavesmo60632.setContext(context);
stavesmo60632.draw();
smo60632v0.draw(context, stavesmo60632);
smo60632v1.draw(context, stavesmo60632);
smo68938.setContext(context);
smo68938.draw();
smo68939.setContext(context);
smo68939.draw();
smo68940.setContext(context);
smo68940.draw();
smo68941.setContext(context);
smo68941.draw();
smo68942.setContext(context);
smo68942.draw();
const stavesmo65667 = new VF.Stave(1256, 1107, 552);
stavesmo65667.setAttribute('id', 'stavesmo65667');
stavesmo65667.setBegBarType(VF.Barline.type.NONE);
stavesmo65667.addClef('treble');
stavesmo65667.setContext(context);
stavesmo65667.draw();
smo65667v0.draw(context, stavesmo65667);
smo65667v1.draw(context, stavesmo65667);
smo68945.setContext(context);
smo68945.draw();
smo68946.setContext(context);
smo68946.draw();
smo68947.setContext(context);
smo68947.draw();
smo68948.setContext(context);
smo68948.draw();
smo68949.setContext(context);
smo68949.draw();
const rightsmo57677stavesmo606321 = new VF.StaveConnector(stavesmo60632, stavesmo65667).setType(0);
rightsmo57677stavesmo606321.setContext(context).draw();
const fmtsmo6066956 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo60669v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60669v0ar = [];
const smo60633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60633'] = smo60633;
smo60633.setAttribute('id', 'smo60633');
smo60669v0ar.push(smo60633);
const smo60634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60634'] = smo60634;
smo60634.setAttribute('id', 'smo60634');
smo60669v0ar.push(smo60634);
const smo60635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60635'] = smo60635;
smo60635.setAttribute('id', 'smo60635');
smo60669v0ar.push(smo60635);
const smo60636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60636'] = smo60636;
smo60636.setAttribute('id', 'smo60636');
smo60669v0ar.push(smo60636);
const smo60637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60637'] = smo60637;
smo60637.setAttribute('id', 'smo60637');
smo60669v0ar.push(smo60637);
const smo60638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60638'] = smo60638;
smo60638.setAttribute('id', 'smo60638');
smo60669v0ar.push(smo60638);
const smo60639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60639'] = smo60639;
smo60639.setAttribute('id', 'smo60639');
smo60669v0ar.push(smo60639);
const smo60640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60640'] = smo60640;
smo60640.setAttribute('id', 'smo60640');
smo60669v0ar.push(smo60640);
const smo60641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60641'] = smo60641;
smo60641.setAttribute('id', 'smo60641');
smo60669v0ar.push(smo60641);
const smo60642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60642'] = smo60642;
smo60642.setAttribute('id', 'smo60642');
smo60669v0ar.push(smo60642);
const smo60643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo60643'] = smo60643;
smo60643.setAttribute('id', 'smo60643');
smo60669v0ar.push(smo60643);
const smo60644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60644'] = smo60644;
smo60644.setAttribute('id', 'smo60644');
smo60669v0ar.push(smo60644);
const smo60645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60645'] = smo60645;
smo60645.setAttribute('id', 'smo60645');
smo60669v0ar.push(smo60645);
const smo60646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60646'] = smo60646;
smo60646.setAttribute('id', 'smo60646');
smo60669v0ar.push(smo60646);
const smo60647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60647'] = smo60647;
smo60647.setAttribute('id', 'smo60647');
smo60669v0ar.push(smo60647);
const smo60648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60648'] = smo60648;
smo60648.setAttribute('id', 'smo60648');
smo60669v0ar.push(smo60648);
smo60669v0.addTickables(smo60669v0ar)
fmtsmo6066956.joinVoices([smo60669v0]);
const smo60669v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60669v1ar = [];
const smo60649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60649'] = smo60649;
smo60649.setAttribute('id', 'smo60649');
smo60649.setStyle({ fillStyle: "#115511" });
smo60669v1ar.push(smo60649);
const smo60650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60650'] = smo60650;
smo60650.setAttribute('id', 'smo60650');
smo60650.setStyle({ fillStyle: "#115511" });
smo60669v1ar.push(smo60650);
const smo60651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60651'] = smo60651;
smo60651.setAttribute('id', 'smo60651');
smo60651.setStyle({ fillStyle: "#115511" });
smo60669v1ar.push(smo60651);
const smo60652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
noteHash['smo60652'] = smo60652;
smo60652.setAttribute('id', 'smo60652');
smo60652.setStyle({ fillStyle: "#115511" });
const smo606520acc = new VF.Accidental('b');
smo60652.addModifier(smo606520acc, 0);
smo60669v1ar.push(smo60652);
const smo60653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60653'] = smo60653;
smo60653.setAttribute('id', 'smo60653');
smo60653.setStyle({ fillStyle: "#115511" });
smo60669v1ar.push(smo60653);
const smo60654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60654'] = smo60654;
smo60654.setAttribute('id', 'smo60654');
smo60654.setStyle({ fillStyle: "#115511" });
smo60669v1ar.push(smo60654);
const smo60655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60655'] = smo60655;
smo60655.setAttribute('id', 'smo60655');
smo60655.setStyle({ fillStyle: "#115511" });
smo60669v1ar.push(smo60655);
smo60669v1.addTickables(smo60669v1ar)
fmtsmo6066956.joinVoices([smo60669v1]);
const fmtsmo6569656 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo65696v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65696v0ar = [];
const smo65668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65668'] = smo65668;
smo65668.setAttribute('id', 'smo65668');
smo65668.addModifier(new VF.Dot(), 0);
smo65696v0ar.push(smo65668);
const smo65669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo65669'] = smo65669;
smo65669.setAttribute('id', 'smo65669');
smo65696v0ar.push(smo65669);
const smo65670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo65670'] = smo65670;
smo65670.setAttribute('id', 'smo65670');
smo65696v0ar.push(smo65670);
const smo65671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo65671'] = smo65671;
smo65671.setAttribute('id', 'smo65671');
smo65696v0ar.push(smo65671);
const smo65672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo65672'] = smo65672;
smo65672.setAttribute('id', 'smo65672');
smo65696v0ar.push(smo65672);
const smo65673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65673'] = smo65673;
smo65673.setAttribute('id', 'smo65673');
smo65696v0ar.push(smo65673);
const smo65674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo65674'] = smo65674;
smo65674.setAttribute('id', 'smo65674');
smo65696v0ar.push(smo65674);
const smo65675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo65675'] = smo65675;
smo65675.setAttribute('id', 'smo65675');
smo65696v0ar.push(smo65675);
const smo65676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo65676'] = smo65676;
smo65676.setAttribute('id', 'smo65676');
smo65696v0ar.push(smo65676);
const smo65677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo65677'] = smo65677;
smo65677.setAttribute('id', 'smo65677');
smo65696v0ar.push(smo65677);
const smo65678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo65678'] = smo65678;
smo65678.setAttribute('id', 'smo65678');
smo65696v0ar.push(smo65678);
smo65696v0.addTickables(smo65696v0ar)
fmtsmo6569656.joinVoices([smo65696v0]);
const smo65696v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65696v1ar = [];
const smo65679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65679'] = smo65679;
smo65679.setAttribute('id', 'smo65679');
smo65679.setStyle({ fillStyle: "#115511" });
smo65696v1ar.push(smo65679);
const smo65680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65680'] = smo65680;
smo65680.setAttribute('id', 'smo65680');
smo65680.setStyle({ fillStyle: "#115511" });
smo65696v1ar.push(smo65680);
const smo65681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65681'] = smo65681;
smo65681.setAttribute('id', 'smo65681');
smo65681.setStyle({ fillStyle: "#115511" });
smo65696v1ar.push(smo65681);
const smo65682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65682'] = smo65682;
smo65682.setAttribute('id', 'smo65682');
smo65682.setStyle({ fillStyle: "#115511" });
smo65696v1ar.push(smo65682);
smo65696v1.addTickables(smo65696v1ar)
fmtsmo6569656.joinVoices([smo65696v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68967 = smo60633.getStemDirection();
smo60633.setStemDirection(dirsmo68967);
smo60634.setStemDirection(dirsmo68967);
smo60635.setStemDirection(dirsmo68967);
smo60636.setStemDirection(dirsmo68967);
const smo68967 = new VF.Beam([smo60633,smo60634,smo60635,smo60636]);
const dirsmo68968 = smo60637.getStemDirection();
smo60637.setStemDirection(dirsmo68968);
smo60638.setStemDirection(dirsmo68968);
smo60639.setStemDirection(dirsmo68968);
smo60640.setStemDirection(dirsmo68968);
const smo68968 = new VF.Beam([smo60637,smo60638,smo60639,smo60640]);
const dirsmo68969 = smo60641.getStemDirection();
smo60641.setStemDirection(dirsmo68969);
smo60642.setStemDirection(dirsmo68969);
smo60643.setStemDirection(dirsmo68969);
smo60644.setStemDirection(dirsmo68969);
const smo68969 = new VF.Beam([smo60641,smo60642,smo60643,smo60644]);
const dirsmo68970 = smo60645.getStemDirection();
smo60645.setStemDirection(dirsmo68970);
smo60646.setStemDirection(dirsmo68970);
smo60647.setStemDirection(dirsmo68970);
smo60648.setStemDirection(dirsmo68970);
const smo68970 = new VF.Beam([smo60645,smo60646,smo60647,smo60648]);
const dirsmo68971 = smo60650.getStemDirection();
smo60650.setStemDirection(dirsmo68971);
smo60651.setStemDirection(dirsmo68971);
smo60652.setStemDirection(dirsmo68971);
const smo68971 = new VF.Beam([smo60650,smo60651,smo60652]);
const dirsmo68972 = smo60654.getStemDirection();
smo60654.setStemDirection(dirsmo68972);
smo60655.setStemDirection(dirsmo68972);
const smo68972 = new VF.Beam([smo60654,smo60655]);
const dirsmo68975 = smo65668.getStemDirection();
smo65668.setStemDirection(dirsmo68975);
smo65669.setStemDirection(dirsmo68975);
smo65670.setStemDirection(dirsmo68975);
const smo68975 = new VF.Beam([smo65668,smo65669,smo65670]);
const dirsmo68976 = smo65671.getStemDirection();
smo65671.setStemDirection(dirsmo68976);
smo65672.setStemDirection(dirsmo68976);
const smo68976 = new VF.Beam([smo65671,smo65672]);
const dirsmo68977 = smo65673.getStemDirection();
smo65673.setStemDirection(dirsmo68977);
smo65674.setStemDirection(dirsmo68977);
const smo68977 = new VF.Beam([smo65673,smo65674]);
const dirsmo68978 = smo65675.getStemDirection();
smo65675.setStemDirection(dirsmo68978);
smo65676.setStemDirection(dirsmo68978);
smo65677.setStemDirection(dirsmo68978);
smo65678.setStemDirection(dirsmo68978);
const smo68978 = new VF.Beam([smo65675,smo65676,smo65677,smo65678]);
const dirsmo68979 = smo65681.getStemDirection();
smo65681.setStemDirection(dirsmo68979);
smo65682.setStemDirection(dirsmo68979);
const smo68979 = new VF.Beam([smo65681,smo65682]);
 
// formatting measures in staff group smo57677
fmtsmo6066956.format([smo60669v0,smo60669v1,smo65696v0,smo65696v1], 435);
const stavesmo60669 = new VF.Stave(90, 1331, 493);
stavesmo60669.setAttribute('id', 'stavesmo60669');
stavesmo60669.setBegBarType(1);
stavesmo60669.addClef('treble');
stavesmo60669.setContext(context);
stavesmo60669.draw();
smo60669v0.draw(context, stavesmo60669);
smo60669v1.draw(context, stavesmo60669);
smo68967.setContext(context);
smo68967.draw();
smo68968.setContext(context);
smo68968.draw();
smo68969.setContext(context);
smo68969.draw();
smo68970.setContext(context);
smo68970.draw();
smo68971.setContext(context);
smo68971.draw();
smo68972.setContext(context);
smo68972.draw();
const stavesmo65696 = new VF.Stave(90, 1450, 493);
stavesmo65696.setAttribute('id', 'stavesmo65696');
stavesmo65696.setBegBarType(1);
stavesmo65696.addClef('treble');
stavesmo65696.setContext(context);
stavesmo65696.draw();
smo65696v0.draw(context, stavesmo65696);
smo65696v1.draw(context, stavesmo65696);
smo68975.setContext(context);
smo68975.draw();
smo68976.setContext(context);
smo68976.draw();
smo68977.setContext(context);
smo68977.draw();
smo68978.setContext(context);
smo68978.draw();
smo68979.setContext(context);
smo68979.draw();
const leftsmo57677stavesmo606691 = new VF.StaveConnector(stavesmo60669, stavesmo65696).setType(3);
leftsmo57677stavesmo606691.setContext(context).draw();
const fmtsmo6069457 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo60694v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60694v0ar = [];
const smo60670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60670'] = smo60670;
smo60670.setAttribute('id', 'smo60670');
smo60694v0ar.push(smo60670);
const smo60671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60671'] = smo60671;
smo60671.setAttribute('id', 'smo60671');
smo60694v0ar.push(smo60671);
const smo60672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60672'] = smo60672;
smo60672.setAttribute('id', 'smo60672');
smo60694v0ar.push(smo60672);
const smo60673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60673'] = smo60673;
smo60673.setAttribute('id', 'smo60673');
smo60694v0ar.push(smo60673);
const smo60674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60674'] = smo60674;
smo60674.setAttribute('id', 'smo60674');
smo60694v0ar.push(smo60674);
const smo60675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60675'] = smo60675;
smo60675.setAttribute('id', 'smo60675');
smo60694v0ar.push(smo60675);
smo60694v0.addTickables(smo60694v0ar)
fmtsmo6069457.joinVoices([smo60694v0]);
const smo60694v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60694v1ar = [];
const smo60676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60676'] = smo60676;
smo60676.setAttribute('id', 'smo60676');
smo60676.setStyle({ fillStyle: "#115511" });
smo60676.addModifier(new VF.Dot(), 0);
smo60694v1ar.push(smo60676);
const smo60677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60677'] = smo60677;
smo60677.setAttribute('id', 'smo60677');
smo60677.setStyle({ fillStyle: "#115511" });
smo60694v1ar.push(smo60677);
const smo60678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo60678'] = smo60678;
smo60678.setAttribute('id', 'smo60678');
smo60678.setStyle({ fillStyle: "#115511" });
smo60694v1ar.push(smo60678);
const smo60679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60679'] = smo60679;
smo60679.setAttribute('id', 'smo60679');
smo60679.setStyle({ fillStyle: "#115511" });
smo60694v1ar.push(smo60679);
const smo60680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60680'] = smo60680;
smo60680.setAttribute('id', 'smo60680');
smo60680.setStyle({ fillStyle: "#115511" });
smo60694v1ar.push(smo60680);
smo60694v1.addTickables(smo60694v1ar)
fmtsmo6069457.joinVoices([smo60694v1]);
const fmtsmo6573057 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo65730v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65730v0ar = [];
const smo65697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo65697'] = smo65697;
smo65697.setAttribute('id', 'smo65697');
smo65730v0ar.push(smo65697);
const smo65698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo65698'] = smo65698;
smo65698.setAttribute('id', 'smo65698');
smo65730v0ar.push(smo65698);
const smo65699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo65699'] = smo65699;
smo65699.setAttribute('id', 'smo65699');
smo65730v0ar.push(smo65699);
const smo65700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo65700'] = smo65700;
smo65700.setAttribute('id', 'smo65700');
smo65730v0ar.push(smo65700);
const smo65701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65701'] = smo65701;
smo65701.setAttribute('id', 'smo65701');
smo65730v0ar.push(smo65701);
const smo65702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65702'] = smo65702;
smo65702.setAttribute('id', 'smo65702');
smo65730v0ar.push(smo65702);
smo65730v0.addTickables(smo65730v0ar)
fmtsmo6573057.joinVoices([smo65730v0]);
const smo65730v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65730v1ar = [];
const smo65703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65703'] = smo65703;
smo65703.setAttribute('id', 'smo65703');
smo65703.setStyle({ fillStyle: "#115511" });
smo65730v1ar.push(smo65703);
const smo65704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65704'] = smo65704;
smo65704.setAttribute('id', 'smo65704');
smo65704.setStyle({ fillStyle: "#115511" });
smo65730v1ar.push(smo65704);
const smo65705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65705'] = smo65705;
smo65705.setAttribute('id', 'smo65705');
smo65705.setStyle({ fillStyle: "#115511" });
smo65730v1ar.push(smo65705);
const smo65706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65706'] = smo65706;
smo65706.setAttribute('id', 'smo65706');
smo65706.setStyle({ fillStyle: "#115511" });
smo65730v1ar.push(smo65706);
const smo65707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65707'] = smo65707;
smo65707.setAttribute('id', 'smo65707');
smo65707.setStyle({ fillStyle: "#115511" });
smo65730v1ar.push(smo65707);
const smo65708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65708'] = smo65708;
smo65708.setAttribute('id', 'smo65708');
smo65708.setStyle({ fillStyle: "#115511" });
smo65730v1ar.push(smo65708);
const smo65709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65709'] = smo65709;
smo65709.setAttribute('id', 'smo65709');
smo65709.setStyle({ fillStyle: "#115511" });
smo65730v1ar.push(smo65709);
const smo65710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
noteHash['smo65710'] = smo65710;
smo65710.setAttribute('id', 'smo65710');
smo65710.setStyle({ fillStyle: "#115511" });
smo65730v1ar.push(smo65710);
const smo65711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65711'] = smo65711;
smo65711.setAttribute('id', 'smo65711');
smo65711.setStyle({ fillStyle: "#115511" });
smo65730v1ar.push(smo65711);
const smo65712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65712'] = smo65712;
smo65712.setAttribute('id', 'smo65712');
smo65712.setStyle({ fillStyle: "#115511" });
smo65730v1ar.push(smo65712);
const smo65713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65713'] = smo65713;
smo65713.setAttribute('id', 'smo65713');
smo65713.setStyle({ fillStyle: "#115511" });
smo65730v1ar.push(smo65713);
const smo65714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65714'] = smo65714;
smo65714.setAttribute('id', 'smo65714');
smo65714.setStyle({ fillStyle: "#115511" });
smo65730v1ar.push(smo65714);
const smo65715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65715'] = smo65715;
smo65715.setAttribute('id', 'smo65715');
smo65715.setStyle({ fillStyle: "#115511" });
smo65730v1ar.push(smo65715);
const smo65716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo65716'] = smo65716;
smo65716.setAttribute('id', 'smo65716');
smo65716.setStyle({ fillStyle: "#115511" });
smo65730v1ar.push(smo65716);
smo65730v1.addTickables(smo65730v1ar)
fmtsmo6573057.joinVoices([smo65730v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68982 = smo60671.getStemDirection();
smo60671.setStemDirection(dirsmo68982);
smo60672.setStemDirection(dirsmo68982);
const smo68982 = new VF.Beam([smo60671,smo60672]);
const dirsmo68983 = smo60678.getStemDirection();
smo60678.setStemDirection(dirsmo68983);
smo60679.setStemDirection(dirsmo68983);
const smo68983 = new VF.Beam([smo60678,smo60679]);
const dirsmo68986 = smo65698.getStemDirection();
smo65698.setStemDirection(dirsmo68986);
smo65699.setStemDirection(dirsmo68986);
const smo68986 = new VF.Beam([smo65698,smo65699]);
const dirsmo68987 = smo65700.getStemDirection();
smo65700.setStemDirection(dirsmo68987);
smo65701.setStemDirection(dirsmo68987);
const smo68987 = new VF.Beam([smo65700,smo65701]);
const dirsmo68988 = smo65703.getStemDirection();
smo65703.setStemDirection(dirsmo68988);
smo65704.setStemDirection(dirsmo68988);
smo65705.setStemDirection(dirsmo68988);
smo65706.setStemDirection(dirsmo68988);
const smo68988 = new VF.Beam([smo65703,smo65704,smo65705,smo65706]);
const dirsmo68989 = smo65707.getStemDirection();
smo65707.setStemDirection(dirsmo68989);
smo65708.setStemDirection(dirsmo68989);
smo65709.setStemDirection(dirsmo68989);
smo65710.setStemDirection(dirsmo68989);
const smo68989 = new VF.Beam([smo65707,smo65708,smo65709,smo65710]);
const dirsmo68990 = smo65711.getStemDirection();
smo65711.setStemDirection(dirsmo68990);
smo65712.setStemDirection(dirsmo68990);
smo65713.setStemDirection(dirsmo68990);
smo65714.setStemDirection(dirsmo68990);
const smo68990 = new VF.Beam([smo65711,smo65712,smo65713,smo65714]);
const dirsmo68991 = smo65715.getStemDirection();
smo65715.setStemDirection(dirsmo68991);
smo65716.setStemDirection(dirsmo68991);
const smo68991 = new VF.Beam([smo65715,smo65716]);
 
// formatting measures in staff group smo57677
fmtsmo6069457.format([smo60694v0,smo60694v1,smo65730v0,smo65730v1], 346);
const stavesmo60694 = new VF.Stave(583, 1331, 360);
stavesmo60694.setAttribute('id', 'stavesmo60694');
stavesmo60694.setBegBarType(VF.Barline.type.NONE);
stavesmo60694.setContext(context);
stavesmo60694.draw();
smo60694v0.draw(context, stavesmo60694);
smo60694v1.draw(context, stavesmo60694);
smo68982.setContext(context);
smo68982.draw();
smo68983.setContext(context);
smo68983.draw();
const stavesmo65730 = new VF.Stave(583, 1450, 360);
stavesmo65730.setAttribute('id', 'stavesmo65730');
stavesmo65730.setBegBarType(VF.Barline.type.NONE);
stavesmo65730.setContext(context);
stavesmo65730.draw();
smo65730v0.draw(context, stavesmo65730);
smo65730v1.draw(context, stavesmo65730);
smo68986.setContext(context);
smo68986.draw();
smo68987.setContext(context);
smo68987.draw();
smo68988.setContext(context);
smo68988.draw();
smo68989.setContext(context);
smo68989.draw();
smo68990.setContext(context);
smo68990.draw();
smo68991.setContext(context);
smo68991.draw();
const fmtsmo6072158 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo60721v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60721v0ar = [];
const smo60695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60695'] = smo60695;
smo60695.setAttribute('id', 'smo60695');
smo60721v0ar.push(smo60695);
const smo60696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60696'] = smo60696;
smo60696.setAttribute('id', 'smo60696');
smo60721v0ar.push(smo60696);
const smo60697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/4/n"]}'))
noteHash['smo60697'] = smo60697;
smo60697.setAttribute('id', 'smo60697');
const smo606970acc = new VF.Accidental('b');
smo60697.addModifier(smo606970acc, 0);
smo60721v0ar.push(smo60697);
const smo60698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60698'] = smo60698;
smo60698.setAttribute('id', 'smo60698');
smo60721v0ar.push(smo60698);
const smo60699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60699'] = smo60699;
smo60699.setAttribute('id', 'smo60699');
smo60721v0ar.push(smo60699);
const smo60700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60700'] = smo60700;
smo60700.setAttribute('id', 'smo60700');
smo60721v0ar.push(smo60700);
smo60721v0.addTickables(smo60721v0ar)
fmtsmo6072158.joinVoices([smo60721v0]);
const smo60721v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60721v1ar = [];
const smo60701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60701'] = smo60701;
smo60701.setAttribute('id', 'smo60701');
smo60701.setStyle({ fillStyle: "#115511" });
smo60721v1ar.push(smo60701);
const smo60702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60702'] = smo60702;
smo60702.setAttribute('id', 'smo60702');
smo60702.setStyle({ fillStyle: "#115511" });
smo60721v1ar.push(smo60702);
const smo60703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60703'] = smo60703;
smo60703.setAttribute('id', 'smo60703');
smo60703.setStyle({ fillStyle: "#115511" });
smo60721v1ar.push(smo60703);
const smo60704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60704'] = smo60704;
smo60704.setAttribute('id', 'smo60704');
smo60704.setStyle({ fillStyle: "#115511" });
smo60721v1ar.push(smo60704);
const smo60705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60705'] = smo60705;
smo60705.setAttribute('id', 'smo60705');
smo60705.setStyle({ fillStyle: "#115511" });
smo60721v1ar.push(smo60705);
const smo60706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60706'] = smo60706;
smo60706.setAttribute('id', 'smo60706');
smo60706.setStyle({ fillStyle: "#115511" });
smo60721v1ar.push(smo60706);
const smo60707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60707'] = smo60707;
smo60707.setAttribute('id', 'smo60707');
smo60707.setStyle({ fillStyle: "#115511" });
smo60721v1ar.push(smo60707);
smo60721v1.addTickables(smo60721v1ar)
fmtsmo6072158.joinVoices([smo60721v1]);
const fmtsmo6575458 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo65754v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65754v0ar = [];
const smo65731 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65731'] = smo65731;
smo65731.setAttribute('id', 'smo65731');
smo65754v0ar.push(smo65731);
const smo65732 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65732'] = smo65732;
smo65732.setAttribute('id', 'smo65732');
smo65754v0ar.push(smo65732);
const smo65733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65733'] = smo65733;
smo65733.setAttribute('id', 'smo65733');
smo65754v0ar.push(smo65733);
const smo65734 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65734'] = smo65734;
smo65734.setAttribute('id', 'smo65734');
smo65754v0ar.push(smo65734);
const smo65735 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65735'] = smo65735;
smo65735.setAttribute('id', 'smo65735');
smo65735.addModifier(new VF.Dot(), 0);
smo65754v0ar.push(smo65735);
const smo65736 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65736'] = smo65736;
smo65736.setAttribute('id', 'smo65736');
smo65754v0ar.push(smo65736);
const smo65737 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65737'] = smo65737;
smo65737.setAttribute('id', 'smo65737');
smo65754v0ar.push(smo65737);
const smo65738 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65738'] = smo65738;
smo65738.setAttribute('id', 'smo65738');
smo65754v0ar.push(smo65738);
const smo65739 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65739'] = smo65739;
smo65739.setAttribute('id', 'smo65739');
smo65754v0ar.push(smo65739);
smo65754v0.addTickables(smo65754v0ar)
fmtsmo6575458.joinVoices([smo65754v0]);
const smo65754v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65754v1ar = [];
const smo65740 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo65740'] = smo65740;
smo65740.setAttribute('id', 'smo65740');
smo65740.setStyle({ fillStyle: "#115511" });
smo65754v1ar.push(smo65740);
smo65754v1.addTickables(smo65754v1ar)
fmtsmo6575458.joinVoices([smo65754v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68994 = smo60696.getStemDirection();
smo60696.setStemDirection(dirsmo68994);
smo60697.setStemDirection(dirsmo68994);
const smo68994 = new VF.Beam([smo60696,smo60697]);
const dirsmo68995 = smo60704.getStemDirection();
smo60704.setStemDirection(dirsmo68995);
smo60705.setStemDirection(dirsmo68995);
const smo68995 = new VF.Beam([smo60704,smo60705]);
const dirsmo68996 = smo60706.getStemDirection();
smo60706.setStemDirection(dirsmo68996);
smo60707.setStemDirection(dirsmo68996);
const smo68996 = new VF.Beam([smo60706,smo60707]);
const dirsmo68999 = smo65731.getStemDirection();
smo65731.setStemDirection(dirsmo68999);
smo65732.setStemDirection(dirsmo68999);
smo65733.setStemDirection(dirsmo68999);
smo65734.setStemDirection(dirsmo68999);
const smo68999 = new VF.Beam([smo65731,smo65732,smo65733,smo65734]);
const dirsmo69000 = smo65735.getStemDirection();
smo65735.setStemDirection(dirsmo69000);
smo65736.setStemDirection(dirsmo69000);
smo65737.setStemDirection(dirsmo69000);
const smo69000 = new VF.Beam([smo65735,smo65736,smo65737]);
const dirsmo69001 = smo65738.getStemDirection();
smo65738.setStemDirection(dirsmo69001);
smo65739.setStemDirection(dirsmo69001);
const smo69001 = new VF.Beam([smo65738,smo65739]);
 
// formatting measures in staff group smo57677
fmtsmo6072158.format([smo60721v0,smo60721v1,smo65754v0,smo65754v1], 309);
const stavesmo60721 = new VF.Stave(943, 1331, 357);
stavesmo60721.setAttribute('id', 'stavesmo60721');
stavesmo60721.setBegBarType(VF.Barline.type.NONE);
stavesmo60721.setContext(context);
stavesmo60721.draw();
smo60721v0.draw(context, stavesmo60721);
smo60721v1.draw(context, stavesmo60721);
smo68994.setContext(context);
smo68994.draw();
smo68995.setContext(context);
smo68995.draw();
smo68996.setContext(context);
smo68996.draw();
const stavesmo65754 = new VF.Stave(943, 1450, 357);
stavesmo65754.setAttribute('id', 'stavesmo65754');
stavesmo65754.setBegBarType(VF.Barline.type.NONE);
stavesmo65754.addClef('bass');
stavesmo65754.setContext(context);
stavesmo65754.draw();
smo65754v0.draw(context, stavesmo65754);
smo65754v1.draw(context, stavesmo65754);
smo68999.setContext(context);
smo68999.draw();
smo69000.setContext(context);
smo69000.draw();
smo69001.setContext(context);
smo69001.draw();
const fmtsmo6075759 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo60757v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60757v0ar = [];
const smo60722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60722'] = smo60722;
smo60722.setAttribute('id', 'smo60722');
smo60757v0ar.push(smo60722);
const smo60723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60723'] = smo60723;
smo60723.setAttribute('id', 'smo60723');
smo60757v0ar.push(smo60723);
const smo60724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60724'] = smo60724;
smo60724.setAttribute('id', 'smo60724');
smo60757v0ar.push(smo60724);
const smo60725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60725'] = smo60725;
smo60725.setAttribute('id', 'smo60725');
smo60757v0ar.push(smo60725);
const smo60726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo60726'] = smo60726;
smo60726.setAttribute('id', 'smo60726');
smo60757v0ar.push(smo60726);
const smo60727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60727'] = smo60727;
smo60727.setAttribute('id', 'smo60727');
smo60757v0ar.push(smo60727);
const smo60728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60728'] = smo60728;
smo60728.setAttribute('id', 'smo60728');
smo60757v0ar.push(smo60728);
const smo60729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60729'] = smo60729;
smo60729.setAttribute('id', 'smo60729');
smo60757v0ar.push(smo60729);
const smo60730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60730'] = smo60730;
smo60730.setAttribute('id', 'smo60730');
smo60757v0ar.push(smo60730);
const smo60731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60731'] = smo60731;
smo60731.setAttribute('id', 'smo60731');
smo60757v0ar.push(smo60731);
const smo60732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60732'] = smo60732;
smo60732.setAttribute('id', 'smo60732');
smo60757v0ar.push(smo60732);
smo60757v0.addTickables(smo60757v0ar)
fmtsmo6075759.joinVoices([smo60757v0]);
const smo60757v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60757v1ar = [];
const smo60733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
noteHash['smo60733'] = smo60733;
smo60733.setAttribute('id', 'smo60733');
smo60733.setStyle({ fillStyle: "#115511" });
const smo607330acc = new VF.Accidental('b');
smo60733.addModifier(smo607330acc, 0);
smo60733.addModifier(new VF.Dot(), 0);
smo60757v1ar.push(smo60733);
const smo60734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60734'] = smo60734;
smo60734.setAttribute('id', 'smo60734');
smo60734.setStyle({ fillStyle: "#115511" });
smo60757v1ar.push(smo60734);
const smo60735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
noteHash['smo60735'] = smo60735;
smo60735.setAttribute('id', 'smo60735');
smo60735.setStyle({ fillStyle: "#115511" });
smo60757v1ar.push(smo60735);
const smo60736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60736'] = smo60736;
smo60736.setAttribute('id', 'smo60736');
smo60736.setStyle({ fillStyle: "#115511" });
smo60757v1ar.push(smo60736);
const smo60737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60737'] = smo60737;
smo60737.setAttribute('id', 'smo60737');
smo60737.setStyle({ fillStyle: "#115511" });
smo60757v1ar.push(smo60737);
const smo60738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60738'] = smo60738;
smo60738.setAttribute('id', 'smo60738');
smo60738.setStyle({ fillStyle: "#115511" });
smo60757v1ar.push(smo60738);
const smo60739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60739'] = smo60739;
smo60739.setAttribute('id', 'smo60739');
smo60739.setStyle({ fillStyle: "#115511" });
smo60757v1ar.push(smo60739);
const smo60740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60740'] = smo60740;
smo60740.setAttribute('id', 'smo60740');
smo60740.setStyle({ fillStyle: "#115511" });
smo60757v1ar.push(smo60740);
const smo60741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60741'] = smo60741;
smo60741.setAttribute('id', 'smo60741');
smo60741.setStyle({ fillStyle: "#115511" });
smo60757v1ar.push(smo60741);
const smo60742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60742'] = smo60742;
smo60742.setAttribute('id', 'smo60742');
smo60742.setStyle({ fillStyle: "#115511" });
smo60757v1ar.push(smo60742);
const smo60743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
noteHash['smo60743'] = smo60743;
smo60743.setAttribute('id', 'smo60743');
smo60743.setStyle({ fillStyle: "#115511" });
smo60757v1ar.push(smo60743);
smo60757v1.addTickables(smo60757v1ar)
fmtsmo6075759.joinVoices([smo60757v1]);
const fmtsmo6578359 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo65783v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65783v0ar = [];
const smo65755 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65755'] = smo65755;
smo65755.setAttribute('id', 'smo65755');
smo65783v0ar.push(smo65755);
const smo65756 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65756'] = smo65756;
smo65756.setAttribute('id', 'smo65756');
smo65783v0ar.push(smo65756);
const smo65757 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65757'] = smo65757;
smo65757.setAttribute('id', 'smo65757');
smo65783v0ar.push(smo65757);
const smo65758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65758'] = smo65758;
smo65758.setAttribute('id', 'smo65758');
smo65783v0ar.push(smo65758);
const smo65759 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65759'] = smo65759;
smo65759.setAttribute('id', 'smo65759');
smo65783v0ar.push(smo65759);
const smo65760 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65760'] = smo65760;
smo65760.setAttribute('id', 'smo65760');
smo65783v0ar.push(smo65760);
const smo65761 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65761'] = smo65761;
smo65761.setAttribute('id', 'smo65761');
smo65783v0ar.push(smo65761);
const smo65762 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65762'] = smo65762;
smo65762.setAttribute('id', 'smo65762');
smo65783v0ar.push(smo65762);
const smo65763 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65763'] = smo65763;
smo65763.setAttribute('id', 'smo65763');
smo65783v0ar.push(smo65763);
const smo65764 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65764'] = smo65764;
smo65764.setAttribute('id', 'smo65764');
smo65783v0ar.push(smo65764);
const smo65765 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65765'] = smo65765;
smo65765.setAttribute('id', 'smo65765');
smo65783v0ar.push(smo65765);
const smo65766 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65766'] = smo65766;
smo65766.setAttribute('id', 'smo65766');
smo65783v0ar.push(smo65766);
const smo65767 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo65767'] = smo65767;
smo65767.setAttribute('id', 'smo65767');
const smo657670acc = new VF.Accidental('b');
smo65767.addModifier(smo657670acc, 0);
smo65783v0ar.push(smo65767);
const smo65768 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65768'] = smo65768;
smo65768.setAttribute('id', 'smo65768');
smo65783v0ar.push(smo65768);
smo65783v0.addTickables(smo65783v0ar)
fmtsmo6578359.joinVoices([smo65783v0]);
const smo65783v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65783v1ar = [];
const smo65769 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo65769'] = smo65769;
smo65769.setAttribute('id', 'smo65769');
smo65769.setStyle({ fillStyle: "#115511" });
smo65783v1ar.push(smo65769);
smo65783v1.addTickables(smo65783v1ar)
fmtsmo6578359.joinVoices([smo65783v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo69004 = smo60722.getStemDirection();
smo60722.setStemDirection(dirsmo69004);
smo60723.setStemDirection(dirsmo69004);
const smo69004 = new VF.Beam([smo60722,smo60723]);
const dirsmo69005 = smo60725.getStemDirection();
smo60725.setStemDirection(dirsmo69005);
smo60726.setStemDirection(dirsmo69005);
smo60727.setStemDirection(dirsmo69005);
smo60728.setStemDirection(dirsmo69005);
const smo69005 = new VF.Beam([smo60725,smo60726,smo60727,smo60728]);
const dirsmo69006 = smo60729.getStemDirection();
smo60729.setStemDirection(dirsmo69006);
smo60730.setStemDirection(dirsmo69006);
smo60731.setStemDirection(dirsmo69006);
smo60732.setStemDirection(dirsmo69006);
const smo69006 = new VF.Beam([smo60729,smo60730,smo60731,smo60732]);
const dirsmo69007 = smo60733.getStemDirection();
smo60733.setStemDirection(dirsmo69007);
smo60734.setStemDirection(dirsmo69007);
smo60735.setStemDirection(dirsmo69007);
const smo69007 = new VF.Beam([smo60733,smo60734,smo60735]);
const dirsmo69008 = smo60736.getStemDirection();
smo60736.setStemDirection(dirsmo69008);
smo60737.setStemDirection(dirsmo69008);
const smo69008 = new VF.Beam([smo60736,smo60737]);
const dirsmo69009 = smo60738.getStemDirection();
smo60738.setStemDirection(dirsmo69009);
smo60739.setStemDirection(dirsmo69009);
const smo69009 = new VF.Beam([smo60738,smo60739]);
const dirsmo69010 = smo60740.getStemDirection();
smo60740.setStemDirection(dirsmo69010);
smo60741.setStemDirection(dirsmo69010);
smo60742.setStemDirection(dirsmo69010);
smo60743.setStemDirection(dirsmo69010);
const smo69010 = new VF.Beam([smo60740,smo60741,smo60742,smo60743]);
const dirsmo69013 = smo65755.getStemDirection();
smo65755.setStemDirection(dirsmo69013);
smo65756.setStemDirection(dirsmo69013);
const smo69013 = new VF.Beam([smo65755,smo65756]);
const dirsmo69014 = smo65757.getStemDirection();
smo65757.setStemDirection(dirsmo69014);
smo65758.setStemDirection(dirsmo69014);
smo65759.setStemDirection(dirsmo69014);
smo65760.setStemDirection(dirsmo69014);
const smo69014 = new VF.Beam([smo65757,smo65758,smo65759,smo65760]);
const dirsmo69015 = smo65761.getStemDirection();
smo65761.setStemDirection(dirsmo69015);
smo65762.setStemDirection(dirsmo69015);
smo65763.setStemDirection(dirsmo69015);
smo65764.setStemDirection(dirsmo69015);
const smo69015 = new VF.Beam([smo65761,smo65762,smo65763,smo65764]);
const dirsmo69016 = smo65765.getStemDirection();
smo65765.setStemDirection(dirsmo69016);
smo65766.setStemDirection(dirsmo69016);
smo65767.setStemDirection(dirsmo69016);
smo65768.setStemDirection(dirsmo69016);
const smo69016 = new VF.Beam([smo65765,smo65766,smo65767,smo65768]);
 
// formatting measures in staff group smo57677
fmtsmo6075759.format([smo60757v0,smo60757v1,smo65783v0,smo65783v1], 495);
const stavesmo60757 = new VF.Stave(1300, 1331, 509);
stavesmo60757.setAttribute('id', 'stavesmo60757');
stavesmo60757.setBegBarType(VF.Barline.type.NONE);
stavesmo60757.setContext(context);
stavesmo60757.draw();
smo60757v0.draw(context, stavesmo60757);
smo60757v1.draw(context, stavesmo60757);
smo69004.setContext(context);
smo69004.draw();
smo69005.setContext(context);
smo69005.draw();
smo69006.setContext(context);
smo69006.draw();
smo69007.setContext(context);
smo69007.draw();
smo69008.setContext(context);
smo69008.draw();
smo69009.setContext(context);
smo69009.draw();
smo69010.setContext(context);
smo69010.draw();
const stavesmo65783 = new VF.Stave(1300, 1450, 509);
stavesmo65783.setAttribute('id', 'stavesmo65783');
stavesmo65783.setBegBarType(VF.Barline.type.NONE);
stavesmo65783.setContext(context);
stavesmo65783.draw();
smo65783v0.draw(context, stavesmo65783);
smo65783v1.draw(context, stavesmo65783);
smo69013.setContext(context);
smo69013.draw();
smo69014.setContext(context);
smo69014.draw();
smo69015.setContext(context);
smo69015.draw();
smo69016.setContext(context);
smo69016.draw();
const rightsmo57677stavesmo607571 = new VF.StaveConnector(stavesmo60757, stavesmo65783).setType(0);
rightsmo57677stavesmo607571.setContext(context).draw();
const fmtsmo6079160 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo60791v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60791v0ar = [];
const smo60758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60758'] = smo60758;
smo60758.setAttribute('id', 'smo60758');
smo60791v0ar.push(smo60758);
const smo60759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60759'] = smo60759;
smo60759.setAttribute('id', 'smo60759');
smo60791v0ar.push(smo60759);
const smo60760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60760'] = smo60760;
smo60760.setAttribute('id', 'smo60760');
smo60791v0ar.push(smo60760);
const smo60761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60761'] = smo60761;
smo60761.setAttribute('id', 'smo60761');
smo60791v0ar.push(smo60761);
const smo60762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60762'] = smo60762;
smo60762.setAttribute('id', 'smo60762');
const smo607620acc = new VF.Accidental('n');
smo60762.addModifier(smo607620acc, 0);
smo60791v0ar.push(smo60762);
const smo60763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60763'] = smo60763;
smo60763.setAttribute('id', 'smo60763');
smo60791v0ar.push(smo60763);
const smo60764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60764'] = smo60764;
smo60764.setAttribute('id', 'smo60764');
smo60791v0ar.push(smo60764);
const smo60765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60765'] = smo60765;
smo60765.setAttribute('id', 'smo60765');
smo60791v0ar.push(smo60765);
const smo60766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60766'] = smo60766;
smo60766.setAttribute('id', 'smo60766');
smo60791v0ar.push(smo60766);
smo60791v0.addTickables(smo60791v0ar)
fmtsmo6079160.joinVoices([smo60791v0]);
const smo60791v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60791v1ar = [];
const smo60767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60767'] = smo60767;
smo60767.setAttribute('id', 'smo60767');
smo60767.setStyle({ fillStyle: "#115511" });
smo60791v1ar.push(smo60767);
const smo60768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
noteHash['smo60768'] = smo60768;
smo60768.setAttribute('id', 'smo60768');
smo60768.setStyle({ fillStyle: "#115511" });
const smo607680acc = new VF.Accidental('b');
smo60768.addModifier(smo607680acc, 0);
smo60791v1ar.push(smo60768);
const smo60769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60769'] = smo60769;
smo60769.setAttribute('id', 'smo60769');
smo60769.setStyle({ fillStyle: "#115511" });
smo60791v1ar.push(smo60769);
const smo60770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60770'] = smo60770;
smo60770.setAttribute('id', 'smo60770');
smo60770.setStyle({ fillStyle: "#115511" });
smo60791v1ar.push(smo60770);
const smo60771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60771'] = smo60771;
smo60771.setAttribute('id', 'smo60771');
smo60771.setStyle({ fillStyle: "#115511" });
smo60791v1ar.push(smo60771);
const smo60772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60772'] = smo60772;
smo60772.setAttribute('id', 'smo60772');
smo60772.setStyle({ fillStyle: "#115511" });
smo60791v1ar.push(smo60772);
const smo60773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60773'] = smo60773;
smo60773.setAttribute('id', 'smo60773');
smo60773.setStyle({ fillStyle: "#115511" });
smo60791v1ar.push(smo60773);
const smo60774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60774'] = smo60774;
smo60774.setAttribute('id', 'smo60774');
smo60774.setStyle({ fillStyle: "#115511" });
smo60791v1ar.push(smo60774);
const smo60775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60775'] = smo60775;
smo60775.setAttribute('id', 'smo60775');
smo60775.setStyle({ fillStyle: "#115511" });
smo60791v1ar.push(smo60775);
const smo60776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60776'] = smo60776;
smo60776.setAttribute('id', 'smo60776');
smo60776.setStyle({ fillStyle: "#115511" });
smo60776.addModifier(new VF.Dot(), 0);
smo60791v1ar.push(smo60776);
const smo60777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60777'] = smo60777;
smo60777.setAttribute('id', 'smo60777');
smo60777.setStyle({ fillStyle: "#115511" });
smo60791v1ar.push(smo60777);
smo60791v1.addTickables(smo60791v1ar)
fmtsmo6079160.joinVoices([smo60791v1]);
const fmtsmo6580760 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo65807v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65807v0ar = [];
const smo65784 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65784'] = smo65784;
smo65784.setAttribute('id', 'smo65784');
smo65807v0ar.push(smo65784);
const smo65785 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo65785'] = smo65785;
smo65785.setAttribute('id', 'smo65785');
smo65807v0ar.push(smo65785);
const smo65786 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65786'] = smo65786;
smo65786.setAttribute('id', 'smo65786');
smo65807v0ar.push(smo65786);
const smo65787 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65787'] = smo65787;
smo65787.setAttribute('id', 'smo65787');
smo65807v0ar.push(smo65787);
const smo65788 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65788'] = smo65788;
smo65788.setAttribute('id', 'smo65788');
smo65807v0ar.push(smo65788);
const smo65789 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65789'] = smo65789;
smo65789.setAttribute('id', 'smo65789');
smo65807v0ar.push(smo65789);
const smo65790 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65790'] = smo65790;
smo65790.setAttribute('id', 'smo65790');
smo65807v0ar.push(smo65790);
const smo65791 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65791'] = smo65791;
smo65791.setAttribute('id', 'smo65791');
smo65807v0ar.push(smo65791);
const smo65792 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo65792'] = smo65792;
smo65792.setAttribute('id', 'smo65792');
smo65807v0ar.push(smo65792);
smo65807v0.addTickables(smo65807v0ar)
fmtsmo6580760.joinVoices([smo65807v0]);
const smo65807v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65807v1ar = [];
const smo65793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo65793'] = smo65793;
smo65793.setAttribute('id', 'smo65793');
smo65793.setStyle({ fillStyle: "#115511" });
smo65807v1ar.push(smo65793);
smo65807v1.addTickables(smo65807v1ar)
fmtsmo6580760.joinVoices([smo65807v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo69030 = smo60760.getStemDirection();
smo60760.setStemDirection(dirsmo69030);
smo60761.setStemDirection(dirsmo69030);
smo60762.setStemDirection(dirsmo69030);
smo60763.setStemDirection(dirsmo69030);
const smo69030 = new VF.Beam([smo60760,smo60761,smo60762,smo60763]);
const dirsmo69031 = smo60764.getStemDirection();
smo60764.setStemDirection(dirsmo69031);
smo60765.setStemDirection(dirsmo69031);
smo60766.setStemDirection(dirsmo69031);
const smo69031 = new VF.Beam([smo60764,smo60765,smo60766]);
const dirsmo69032 = smo60767.getStemDirection();
smo60767.setStemDirection(dirsmo69032);
smo60768.setStemDirection(dirsmo69032);
smo60769.setStemDirection(dirsmo69032);
smo60770.setStemDirection(dirsmo69032);
const smo69032 = new VF.Beam([smo60767,smo60768,smo60769,smo60770]);
const dirsmo69033 = smo60771.getStemDirection();
smo60771.setStemDirection(dirsmo69033);
smo60772.setStemDirection(dirsmo69033);
smo60773.setStemDirection(dirsmo69033);
smo60774.setStemDirection(dirsmo69033);
const smo69033 = new VF.Beam([smo60771,smo60772,smo60773,smo60774]);
const dirsmo69034 = smo60776.getStemDirection();
smo60776.setStemDirection(dirsmo69034);
smo60777.setStemDirection(dirsmo69034);
const smo69034 = new VF.Beam([smo60776,smo60777]);
const dirsmo69037 = smo65784.getStemDirection();
smo65784.setStemDirection(dirsmo69037);
smo65785.setStemDirection(dirsmo69037);
smo65786.setStemDirection(dirsmo69037);
smo65787.setStemDirection(dirsmo69037);
const smo69037 = new VF.Beam([smo65784,smo65785,smo65786,smo65787]);
const dirsmo69038 = smo65788.getStemDirection();
smo65788.setStemDirection(dirsmo69038);
smo65789.setStemDirection(dirsmo69038);
smo65790.setStemDirection(dirsmo69038);
smo65791.setStemDirection(dirsmo69038);
const smo69038 = new VF.Beam([smo65788,smo65789,smo65790,smo65791]);
 
// formatting measures in staff group smo57677
fmtsmo6079160.format([smo60791v0,smo60791v1,smo65807v0,smo65807v1], 521);
const stavesmo60791 = new VF.Stave(90, 1679, 579);
stavesmo60791.setAttribute('id', 'stavesmo60791');
stavesmo60791.setBegBarType(1);
stavesmo60791.addClef('treble');
stavesmo60791.setContext(context);
stavesmo60791.draw();
smo60791v0.draw(context, stavesmo60791);
smo60791v1.draw(context, stavesmo60791);
smo69030.setContext(context);
smo69030.draw();
smo69031.setContext(context);
smo69031.draw();
smo69032.setContext(context);
smo69032.draw();
smo69033.setContext(context);
smo69033.draw();
smo69034.setContext(context);
smo69034.draw();
const stavesmo65807 = new VF.Stave(90, 1808, 579);
stavesmo65807.setAttribute('id', 'stavesmo65807');
stavesmo65807.setBegBarType(1);
stavesmo65807.addClef('bass');
stavesmo65807.setContext(context);
stavesmo65807.draw();
smo65807v0.draw(context, stavesmo65807);
smo65807v1.draw(context, stavesmo65807);
smo69037.setContext(context);
smo69037.draw();
smo69038.setContext(context);
smo69038.draw();
const leftsmo57677stavesmo607911 = new VF.StaveConnector(stavesmo60791, stavesmo65807).setType(3);
leftsmo57677stavesmo607911.setContext(context).draw();
const fmtsmo6082061 = new VF.Formatter();
//
// voices and notes for stave 0 61
const smo60820v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60820v0ar = [];
const smo60792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60792'] = smo60792;
smo60792.setAttribute('id', 'smo60792');
smo60820v0ar.push(smo60792);
const smo60793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60793'] = smo60793;
smo60793.setAttribute('id', 'smo60793');
smo60820v0ar.push(smo60793);
const smo60794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60794'] = smo60794;
smo60794.setAttribute('id', 'smo60794');
smo60820v0ar.push(smo60794);
const smo60795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo60795'] = smo60795;
smo60795.setAttribute('id', 'smo60795');
smo60820v0ar.push(smo60795);
const smo60796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60796'] = smo60796;
smo60796.setAttribute('id', 'smo60796');
smo60820v0ar.push(smo60796);
const smo60797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo60797'] = smo60797;
smo60797.setAttribute('id', 'smo60797');
smo60820v0ar.push(smo60797);
const smo60798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo60798'] = smo60798;
smo60798.setAttribute('id', 'smo60798');
smo60798.addModifier(new VF.Dot(), 0);
smo60820v0ar.push(smo60798);
const smo60799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/5/n"]}'))
noteHash['smo60799'] = smo60799;
smo60799.setAttribute('id', 'smo60799');
smo60820v0ar.push(smo60799);
const smo60800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/6/n"]}'))
noteHash['smo60800'] = smo60800;
smo60800.setAttribute('id', 'smo60800');
const  smo70794 = new VF.Articulation('a@a').setPosition(3);
smo60800.addModifier(smo70794, 0);
smo60820v0ar.push(smo60800);
smo60820v0.addTickables(smo60820v0ar)
fmtsmo6082061.joinVoices([smo60820v0]);
const smo60820v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60820v1ar = [];
const smo60802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60802'] = smo60802;
smo60802.setAttribute('id', 'smo60802');
smo60802.setStyle({ fillStyle: "#115511" });
smo60820v1ar.push(smo60802);
const smo60803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60803'] = smo60803;
smo60803.setAttribute('id', 'smo60803');
smo60803.setStyle({ fillStyle: "#115511" });
smo60820v1ar.push(smo60803);
const smo60804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo60804'] = smo60804;
smo60804.setAttribute('id', 'smo60804');
smo60804.setStyle({ fillStyle: "#115511" });
smo60820v1ar.push(smo60804);
const smo60805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60805'] = smo60805;
smo60805.setAttribute('id', 'smo60805');
smo60805.setStyle({ fillStyle: "#115511" });
smo60820v1ar.push(smo60805);
const smo60806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n","gn/5/n"]}'))
noteHash['smo60806'] = smo60806;
smo60806.setAttribute('id', 'smo60806');
smo60806.setStyle({ fillStyle: "#115511" });
smo60820v1ar.push(smo60806);
smo60820v1.addTickables(smo60820v1ar)
fmtsmo6082061.joinVoices([smo60820v1]);
const fmtsmo6582361 = new VF.Formatter();
//
// voices and notes for stave 1 61
const smo65823v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65823v0ar = [];
const smo65808 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo65808'] = smo65808;
smo65808.setAttribute('id', 'smo65808');
smo65823v0ar.push(smo65808);
smo65823v0.addTickables(smo65823v0ar)
fmtsmo6582361.joinVoices([smo65823v0]);
const smo65823v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65823v1ar = [];
const smo65809 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo65809'] = smo65809;
smo65809.setAttribute('id', 'smo65809');
smo65809.setStyle({ fillStyle: "#115511" });
smo65823v1ar.push(smo65809);
smo65823v1.addTickables(smo65823v1ar)
fmtsmo6582361.joinVoices([smo65823v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo69041 = smo60792.getStemDirection();
smo60792.setStemDirection(dirsmo69041);
smo60793.setStemDirection(dirsmo69041);
smo60794.setStemDirection(dirsmo69041);
smo60795.setStemDirection(dirsmo69041);
smo60796.setStemDirection(dirsmo69041);
smo60797.setStemDirection(dirsmo69041);
const smo69041 = new VF.Beam([smo60792,smo60793,smo60794,smo60795,smo60796,smo60797]);
const dirsmo69042 = smo60798.getStemDirection();
smo60798.setStemDirection(dirsmo69042);
smo60799.setStemDirection(dirsmo69042);
const smo69042 = new VF.Beam([smo60798,smo60799]);
const dirsmo69043 = smo60804.getStemDirection();
smo60804.setStemDirection(dirsmo69043);
smo60805.setStemDirection(dirsmo69043);
const smo69043 = new VF.Beam([smo60804,smo60805]);
 
// formatting measures in staff group smo57677
fmtsmo6082061.format([smo60820v0,smo60820v1,smo65823v0,smo65823v1], 329);
const stavesmo60820 = new VF.Stave(669, 1679, 351);
stavesmo60820.setAttribute('id', 'stavesmo60820');
stavesmo60820.setBegBarType(VF.Barline.type.NONE);
stavesmo60820.setEndBarType(3);
stavesmo60820.setContext(context);
stavesmo60820.draw();
smo60820v0.draw(context, stavesmo60820);
smo60820v1.draw(context, stavesmo60820);
smo69041.setContext(context);
smo69041.draw();
smo69042.setContext(context);
smo69042.draw();
smo69043.setContext(context);
smo69043.draw();
const stavesmo65823 = new VF.Stave(669, 1808, 351);
stavesmo65823.setAttribute('id', 'stavesmo65823');
stavesmo65823.setBegBarType(VF.Barline.type.NONE);
stavesmo65823.setEndBarType(3);
stavesmo65823.setContext(context);
stavesmo65823.draw();
smo65823v0.draw(context, stavesmo65823);
smo65823v1.draw(context, stavesmo65823);
const fmtsmo6085062 = new VF.Formatter();
//
// voices and notes for stave 0 62
const smo60850v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60850v0ar = [];
const smo60821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60821'] = smo60821;
smo60821.setAttribute('id', 'smo60821');
smo60850v0ar.push(smo60821);
const smo60822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo60822'] = smo60822;
smo60822.setAttribute('id', 'smo60822');
smo60850v0ar.push(smo60822);
const smo60823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60823'] = smo60823;
smo60823.setAttribute('id', 'smo60823');
smo60850v0ar.push(smo60823);
const smo60824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo60824'] = smo60824;
smo60824.setAttribute('id', 'smo60824');
smo60850v0ar.push(smo60824);
const smo60825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60825'] = smo60825;
smo60825.setAttribute('id', 'smo60825');
smo60850v0ar.push(smo60825);
const smo60826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo60826'] = smo60826;
smo60826.setAttribute('id', 'smo60826');
smo60850v0ar.push(smo60826);
const smo60827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60827'] = smo60827;
smo60827.setAttribute('id', 'smo60827');
smo60850v0ar.push(smo60827);
const smo60828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo60828'] = smo60828;
smo60828.setAttribute('id', 'smo60828');
smo60850v0ar.push(smo60828);
const smo60829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60829'] = smo60829;
smo60829.setAttribute('id', 'smo60829');
smo60850v0ar.push(smo60829);
const smo60830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo60830'] = smo60830;
smo60830.setAttribute('id', 'smo60830');
smo60850v0ar.push(smo60830);
const smo60831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60831'] = smo60831;
smo60831.setAttribute('id', 'smo60831');
smo60850v0ar.push(smo60831);
const smo60832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo60832'] = smo60832;
smo60832.setAttribute('id', 'smo60832');
smo60850v0ar.push(smo60832);
const smo60833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60833'] = smo60833;
smo60833.setAttribute('id', 'smo60833');
smo60850v0ar.push(smo60833);
const smo60834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo60834'] = smo60834;
smo60834.setAttribute('id', 'smo60834');
smo60850v0ar.push(smo60834);
const smo60835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60835'] = smo60835;
smo60835.setAttribute('id', 'smo60835');
smo60850v0ar.push(smo60835);
const smo60836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo60836'] = smo60836;
smo60836.setAttribute('id', 'smo60836');
smo60850v0ar.push(smo60836);
smo60850v0.addTickables(smo60850v0ar)
fmtsmo6085062.joinVoices([smo60850v0]);
const fmtsmo6585362 = new VF.Formatter();
//
// voices and notes for stave 1 62
const smo65853v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65853v0ar = [];
const smo65824 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65824'] = smo65824;
smo65824.setAttribute('id', 'smo65824');
smo65853v0ar.push(smo65824);
const smo65825 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65825'] = smo65825;
smo65825.setAttribute('id', 'smo65825');
smo65853v0ar.push(smo65825);
const smo65826 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65826'] = smo65826;
smo65826.setAttribute('id', 'smo65826');
smo65853v0ar.push(smo65826);
const smo65827 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65827'] = smo65827;
smo65827.setAttribute('id', 'smo65827');
smo65853v0ar.push(smo65827);
const smo65828 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo65828'] = smo65828;
smo65828.setAttribute('id', 'smo65828');
smo65853v0ar.push(smo65828);
const smo65829 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65829'] = smo65829;
smo65829.setAttribute('id', 'smo65829');
smo65853v0ar.push(smo65829);
const smo65830 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65830'] = smo65830;
smo65830.setAttribute('id', 'smo65830');
smo65853v0ar.push(smo65830);
const smo65831 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65831'] = smo65831;
smo65831.setAttribute('id', 'smo65831');
smo65853v0ar.push(smo65831);
const smo65832 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65832'] = smo65832;
smo65832.setAttribute('id', 'smo65832');
smo65853v0ar.push(smo65832);
const smo65833 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65833'] = smo65833;
smo65833.setAttribute('id', 'smo65833');
smo65853v0ar.push(smo65833);
const smo65834 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65834'] = smo65834;
smo65834.setAttribute('id', 'smo65834');
smo65853v0ar.push(smo65834);
const smo65835 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65835'] = smo65835;
smo65835.setAttribute('id', 'smo65835');
smo65853v0ar.push(smo65835);
const smo65836 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo65836'] = smo65836;
smo65836.setAttribute('id', 'smo65836');
smo65853v0ar.push(smo65836);
const smo65837 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65837'] = smo65837;
smo65837.setAttribute('id', 'smo65837');
smo65853v0ar.push(smo65837);
const smo65838 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65838'] = smo65838;
smo65838.setAttribute('id', 'smo65838');
smo65853v0ar.push(smo65838);
const smo65839 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65839'] = smo65839;
smo65839.setAttribute('id', 'smo65839');
smo65853v0ar.push(smo65839);
smo65853v0.addTickables(smo65853v0ar)
fmtsmo6585362.joinVoices([smo65853v0]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo69046 = smo60821.getStemDirection();
smo60821.setStemDirection(dirsmo69046);
smo60822.setStemDirection(dirsmo69046);
smo60823.setStemDirection(dirsmo69046);
smo60824.setStemDirection(dirsmo69046);
const smo69046 = new VF.Beam([smo60821,smo60822,smo60823,smo60824]);
const dirsmo69047 = smo60825.getStemDirection();
smo60825.setStemDirection(dirsmo69047);
smo60826.setStemDirection(dirsmo69047);
smo60827.setStemDirection(dirsmo69047);
smo60828.setStemDirection(dirsmo69047);
const smo69047 = new VF.Beam([smo60825,smo60826,smo60827,smo60828]);
const dirsmo69048 = smo60829.getStemDirection();
smo60829.setStemDirection(dirsmo69048);
smo60830.setStemDirection(dirsmo69048);
smo60831.setStemDirection(dirsmo69048);
smo60832.setStemDirection(dirsmo69048);
const smo69048 = new VF.Beam([smo60829,smo60830,smo60831,smo60832]);
const dirsmo69049 = smo60833.getStemDirection();
smo60833.setStemDirection(dirsmo69049);
smo60834.setStemDirection(dirsmo69049);
smo60835.setStemDirection(dirsmo69049);
smo60836.setStemDirection(dirsmo69049);
const smo69049 = new VF.Beam([smo60833,smo60834,smo60835,smo60836]);
const dirsmo69052 = smo65824.getStemDirection();
smo65824.setStemDirection(dirsmo69052);
smo65825.setStemDirection(dirsmo69052);
smo65826.setStemDirection(dirsmo69052);
smo65827.setStemDirection(dirsmo69052);
const smo69052 = new VF.Beam([smo65824,smo65825,smo65826,smo65827]);
const dirsmo69053 = smo65828.getStemDirection();
smo65828.setStemDirection(dirsmo69053);
smo65829.setStemDirection(dirsmo69053);
smo65830.setStemDirection(dirsmo69053);
smo65831.setStemDirection(dirsmo69053);
const smo69053 = new VF.Beam([smo65828,smo65829,smo65830,smo65831]);
const dirsmo69054 = smo65832.getStemDirection();
smo65832.setStemDirection(dirsmo69054);
smo65833.setStemDirection(dirsmo69054);
smo65834.setStemDirection(dirsmo69054);
smo65835.setStemDirection(dirsmo69054);
const smo69054 = new VF.Beam([smo65832,smo65833,smo65834,smo65835]);
const dirsmo69055 = smo65836.getStemDirection();
smo65836.setStemDirection(dirsmo69055);
smo65837.setStemDirection(dirsmo69055);
smo65838.setStemDirection(dirsmo69055);
smo65839.setStemDirection(dirsmo69055);
const smo69055 = new VF.Beam([smo65836,smo65837,smo65838,smo65839]);
 
// formatting measures in staff group smo57677
fmtsmo6085062.format([smo60850v0,smo65853v0], 335);
const stavesmo60850 = new VF.Stave(1020, 1679, 394);
stavesmo60850.setAttribute('id', 'stavesmo60850');
stavesmo60850.setBegBarType(VF.Barline.type.NONE);
stavesmo60850.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":144,"name":"Allegro Vivace"}'), -1 * 6);
const keysmo60850 = new VF.KeySignature('Eb');
keysmo60850.cancelKey('C');
keysmo60850.addToStave(stavesmo60850);
stavesmo60850.setContext(context);
stavesmo60850.draw();
smo60850v0.draw(context, stavesmo60850);
smo69046.setContext(context);
smo69046.draw();
smo69047.setContext(context);
smo69047.draw();
smo69048.setContext(context);
smo69048.draw();
smo69049.setContext(context);
smo69049.draw();
const stavesmo65853 = new VF.Stave(1020, 1808, 394);
stavesmo65853.setAttribute('id', 'stavesmo65853');
stavesmo65853.setBegBarType(VF.Barline.type.NONE);
const keysmo65853 = new VF.KeySignature('Eb');
keysmo65853.cancelKey('C');
keysmo65853.addToStave(stavesmo65853);
stavesmo65853.setContext(context);
stavesmo65853.draw();
smo65853v0.draw(context, stavesmo65853);
smo69052.setContext(context);
smo69052.draw();
smo69053.setContext(context);
smo69053.draw();
smo69054.setContext(context);
smo69054.draw();
smo69055.setContext(context);
smo69055.draw();
const fmtsmo6088063 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo60880v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60880v0ar = [];
const smo60851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo60851'] = smo60851;
smo60851.setAttribute('id', 'smo60851');
smo60880v0ar.push(smo60851);
const smo60852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60852'] = smo60852;
smo60852.setAttribute('id', 'smo60852');
smo60880v0ar.push(smo60852);
const smo60853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60853'] = smo60853;
smo60853.setAttribute('id', 'smo60853');
const smo608530acc = new VF.Accidental('n');
smo60853.addModifier(smo608530acc, 0);
smo60880v0ar.push(smo60853);
const smo60854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60854'] = smo60854;
smo60854.setAttribute('id', 'smo60854');
smo60880v0ar.push(smo60854);
const smo60855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60855'] = smo60855;
smo60855.setAttribute('id', 'smo60855');
smo60880v0ar.push(smo60855);
const smo60856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60856'] = smo60856;
smo60856.setAttribute('id', 'smo60856');
smo60880v0ar.push(smo60856);
const smo60857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60857'] = smo60857;
smo60857.setAttribute('id', 'smo60857');
smo60880v0ar.push(smo60857);
const smo60858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60858'] = smo60858;
smo60858.setAttribute('id', 'smo60858');
smo60880v0ar.push(smo60858);
const smo60859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo60859'] = smo60859;
smo60859.setAttribute('id', 'smo60859');
smo60880v0ar.push(smo60859);
const smo60860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60860'] = smo60860;
smo60860.setAttribute('id', 'smo60860');
smo60880v0ar.push(smo60860);
const smo60861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60861'] = smo60861;
smo60861.setAttribute('id', 'smo60861');
smo60880v0ar.push(smo60861);
const smo60862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60862'] = smo60862;
smo60862.setAttribute('id', 'smo60862');
smo60880v0ar.push(smo60862);
const smo60863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo60863'] = smo60863;
smo60863.setAttribute('id', 'smo60863');
smo60880v0ar.push(smo60863);
const smo60864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60864'] = smo60864;
smo60864.setAttribute('id', 'smo60864');
smo60880v0ar.push(smo60864);
const smo60865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60865'] = smo60865;
smo60865.setAttribute('id', 'smo60865');
smo60880v0ar.push(smo60865);
const smo60866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60866'] = smo60866;
smo60866.setAttribute('id', 'smo60866');
smo60880v0ar.push(smo60866);
smo60880v0.addTickables(smo60880v0ar)
fmtsmo6088063.joinVoices([smo60880v0]);
const fmtsmo6588363 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo65883v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65883v0ar = [];
const smo65854 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65854'] = smo65854;
smo65854.setAttribute('id', 'smo65854');
smo65883v0ar.push(smo65854);
const smo65855 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo65855'] = smo65855;
smo65855.setAttribute('id', 'smo65855');
smo65883v0ar.push(smo65855);
const smo65856 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65856'] = smo65856;
smo65856.setAttribute('id', 'smo65856');
smo65883v0ar.push(smo65856);
const smo65857 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo65857'] = smo65857;
smo65857.setAttribute('id', 'smo65857');
smo65883v0ar.push(smo65857);
const smo65858 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65858'] = smo65858;
smo65858.setAttribute('id', 'smo65858');
smo65883v0ar.push(smo65858);
const smo65859 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo65859'] = smo65859;
smo65859.setAttribute('id', 'smo65859');
smo65883v0ar.push(smo65859);
const smo65860 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65860'] = smo65860;
smo65860.setAttribute('id', 'smo65860');
smo65883v0ar.push(smo65860);
const smo65861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo65861'] = smo65861;
smo65861.setAttribute('id', 'smo65861');
smo65883v0ar.push(smo65861);
const smo65862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65862'] = smo65862;
smo65862.setAttribute('id', 'smo65862');
smo65883v0ar.push(smo65862);
const smo65863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo65863'] = smo65863;
smo65863.setAttribute('id', 'smo65863');
smo65883v0ar.push(smo65863);
const smo65864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65864'] = smo65864;
smo65864.setAttribute('id', 'smo65864');
smo65883v0ar.push(smo65864);
const smo65865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo65865'] = smo65865;
smo65865.setAttribute('id', 'smo65865');
smo65883v0ar.push(smo65865);
const smo65866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65866'] = smo65866;
smo65866.setAttribute('id', 'smo65866');
smo65883v0ar.push(smo65866);
const smo65867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo65867'] = smo65867;
smo65867.setAttribute('id', 'smo65867');
smo65883v0ar.push(smo65867);
const smo65868 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65868'] = smo65868;
smo65868.setAttribute('id', 'smo65868');
smo65883v0ar.push(smo65868);
const smo65869 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo65869'] = smo65869;
smo65869.setAttribute('id', 'smo65869');
smo65883v0ar.push(smo65869);
smo65883v0.addTickables(smo65883v0ar)
fmtsmo6588363.joinVoices([smo65883v0]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo69058 = smo60851.getStemDirection();
smo60851.setStemDirection(dirsmo69058);
smo60852.setStemDirection(dirsmo69058);
smo60853.setStemDirection(dirsmo69058);
smo60854.setStemDirection(dirsmo69058);
const smo69058 = new VF.Beam([smo60851,smo60852,smo60853,smo60854]);
const dirsmo69059 = smo60855.getStemDirection();
smo60855.setStemDirection(dirsmo69059);
smo60856.setStemDirection(dirsmo69059);
smo60857.setStemDirection(dirsmo69059);
smo60858.setStemDirection(dirsmo69059);
const smo69059 = new VF.Beam([smo60855,smo60856,smo60857,smo60858]);
const dirsmo69060 = smo60859.getStemDirection();
smo60859.setStemDirection(dirsmo69060);
smo60860.setStemDirection(dirsmo69060);
smo60861.setStemDirection(dirsmo69060);
smo60862.setStemDirection(dirsmo69060);
const smo69060 = new VF.Beam([smo60859,smo60860,smo60861,smo60862]);
const dirsmo69061 = smo60863.getStemDirection();
smo60863.setStemDirection(dirsmo69061);
smo60864.setStemDirection(dirsmo69061);
smo60865.setStemDirection(dirsmo69061);
smo60866.setStemDirection(dirsmo69061);
const smo69061 = new VF.Beam([smo60863,smo60864,smo60865,smo60866]);
const dirsmo69064 = smo65854.getStemDirection();
smo65854.setStemDirection(dirsmo69064);
smo65855.setStemDirection(dirsmo69064);
smo65856.setStemDirection(dirsmo69064);
smo65857.setStemDirection(dirsmo69064);
const smo69064 = new VF.Beam([smo65854,smo65855,smo65856,smo65857]);
const dirsmo69065 = smo65858.getStemDirection();
smo65858.setStemDirection(dirsmo69065);
smo65859.setStemDirection(dirsmo69065);
smo65860.setStemDirection(dirsmo69065);
smo65861.setStemDirection(dirsmo69065);
const smo69065 = new VF.Beam([smo65858,smo65859,smo65860,smo65861]);
const dirsmo69066 = smo65862.getStemDirection();
smo65862.setStemDirection(dirsmo69066);
smo65863.setStemDirection(dirsmo69066);
smo65864.setStemDirection(dirsmo69066);
smo65865.setStemDirection(dirsmo69066);
const smo69066 = new VF.Beam([smo65862,smo65863,smo65864,smo65865]);
const dirsmo69067 = smo65866.getStemDirection();
smo65866.setStemDirection(dirsmo69067);
smo65867.setStemDirection(dirsmo69067);
smo65868.setStemDirection(dirsmo69067);
smo65869.setStemDirection(dirsmo69067);
const smo69067 = new VF.Beam([smo65866,smo65867,smo65868,smo65869]);
 
// formatting measures in staff group smo57677
fmtsmo6088063.format([smo60880v0,smo65883v0], 379);
const stavesmo60880 = new VF.Stave(1414, 1679, 393);
stavesmo60880.setAttribute('id', 'stavesmo60880');
stavesmo60880.setBegBarType(VF.Barline.type.NONE);
stavesmo60880.setContext(context);
stavesmo60880.draw();
smo60880v0.draw(context, stavesmo60880);
smo69058.setContext(context);
smo69058.draw();
smo69059.setContext(context);
smo69059.draw();
smo69060.setContext(context);
smo69060.draw();
smo69061.setContext(context);
smo69061.draw();
const stavesmo65883 = new VF.Stave(1414, 1808, 393);
stavesmo65883.setAttribute('id', 'stavesmo65883');
stavesmo65883.setBegBarType(VF.Barline.type.NONE);
stavesmo65883.setContext(context);
stavesmo65883.draw();
smo65883v0.draw(context, stavesmo65883);
smo69064.setContext(context);
smo69064.draw();
smo69065.setContext(context);
smo69065.draw();
smo69066.setContext(context);
smo69066.draw();
smo69067.setContext(context);
smo69067.draw();
const rightsmo57677stavesmo608801 = new VF.StaveConnector(stavesmo60880, stavesmo65883).setType(0);
rightsmo57677stavesmo608801.setContext(context).draw();
const fmtsmo6091064 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo60910v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60910v0ar = [];
const smo60881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60881'] = smo60881;
smo60881.setAttribute('id', 'smo60881');
const smo608810acc = new VF.Accidental('n');
smo60881.addModifier(smo608810acc, 0);
smo60910v0ar.push(smo60881);
const smo60882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60882'] = smo60882;
smo60882.setAttribute('id', 'smo60882');
smo60910v0ar.push(smo60882);
const smo60883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo60883'] = smo60883;
smo60883.setAttribute('id', 'smo60883');
smo60910v0ar.push(smo60883);
const smo60884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60884'] = smo60884;
smo60884.setAttribute('id', 'smo60884');
smo60910v0ar.push(smo60884);
const smo60885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60885'] = smo60885;
smo60885.setAttribute('id', 'smo60885');
smo60910v0ar.push(smo60885);
const smo60886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60886'] = smo60886;
smo60886.setAttribute('id', 'smo60886');
smo60910v0ar.push(smo60886);
const smo60887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo60887'] = smo60887;
smo60887.setAttribute('id', 'smo60887');
smo60910v0ar.push(smo60887);
const smo60888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60888'] = smo60888;
smo60888.setAttribute('id', 'smo60888');
smo60910v0ar.push(smo60888);
const smo60889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo60889'] = smo60889;
smo60889.setAttribute('id', 'smo60889');
smo60910v0ar.push(smo60889);
const smo60890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60890'] = smo60890;
smo60890.setAttribute('id', 'smo60890');
smo60910v0ar.push(smo60890);
const smo60891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo60891'] = smo60891;
smo60891.setAttribute('id', 'smo60891');
smo60910v0ar.push(smo60891);
const smo60892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60892'] = smo60892;
smo60892.setAttribute('id', 'smo60892');
smo60910v0ar.push(smo60892);
const smo60893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60893'] = smo60893;
smo60893.setAttribute('id', 'smo60893');
smo60910v0ar.push(smo60893);
const smo60894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60894'] = smo60894;
smo60894.setAttribute('id', 'smo60894');
smo60910v0ar.push(smo60894);
const smo60895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo60895'] = smo60895;
smo60895.setAttribute('id', 'smo60895');
smo60910v0ar.push(smo60895);
const smo60896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60896'] = smo60896;
smo60896.setAttribute('id', 'smo60896');
smo60910v0ar.push(smo60896);
smo60910v0.addTickables(smo60910v0ar)
fmtsmo6091064.joinVoices([smo60910v0]);
const fmtsmo6591364 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo65913v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65913v0ar = [];
const smo65884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65884'] = smo65884;
smo65884.setAttribute('id', 'smo65884');
smo65913v0ar.push(smo65884);
const smo65885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo65885'] = smo65885;
smo65885.setAttribute('id', 'smo65885');
smo65913v0ar.push(smo65885);
const smo65886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65886'] = smo65886;
smo65886.setAttribute('id', 'smo65886');
smo65913v0ar.push(smo65886);
const smo65887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo65887'] = smo65887;
smo65887.setAttribute('id', 'smo65887');
smo65913v0ar.push(smo65887);
const smo65888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65888'] = smo65888;
smo65888.setAttribute('id', 'smo65888');
smo65913v0ar.push(smo65888);
const smo65889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo65889'] = smo65889;
smo65889.setAttribute('id', 'smo65889');
smo65913v0ar.push(smo65889);
const smo65890 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65890'] = smo65890;
smo65890.setAttribute('id', 'smo65890');
smo65913v0ar.push(smo65890);
const smo65891 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo65891'] = smo65891;
smo65891.setAttribute('id', 'smo65891');
smo65913v0ar.push(smo65891);
const smo65892 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65892'] = smo65892;
smo65892.setAttribute('id', 'smo65892');
smo65913v0ar.push(smo65892);
const smo65893 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo65893'] = smo65893;
smo65893.setAttribute('id', 'smo65893');
smo65913v0ar.push(smo65893);
const smo65894 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65894'] = smo65894;
smo65894.setAttribute('id', 'smo65894');
smo65913v0ar.push(smo65894);
const smo65895 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo65895'] = smo65895;
smo65895.setAttribute('id', 'smo65895');
smo65913v0ar.push(smo65895);
const smo65896 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo65896'] = smo65896;
smo65896.setAttribute('id', 'smo65896');
smo65913v0ar.push(smo65896);
const smo65897 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo65897'] = smo65897;
smo65897.setAttribute('id', 'smo65897');
smo65913v0ar.push(smo65897);
const smo65898 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65898'] = smo65898;
smo65898.setAttribute('id', 'smo65898');
smo65913v0ar.push(smo65898);
const smo65899 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo65899'] = smo65899;
smo65899.setAttribute('id', 'smo65899');
smo65913v0ar.push(smo65899);
smo65913v0.addTickables(smo65913v0ar)
fmtsmo6591364.joinVoices([smo65913v0]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo69082 = smo60881.getStemDirection();
smo60881.setStemDirection(dirsmo69082);
smo60882.setStemDirection(dirsmo69082);
smo60883.setStemDirection(dirsmo69082);
smo60884.setStemDirection(dirsmo69082);
const smo69082 = new VF.Beam([smo60881,smo60882,smo60883,smo60884]);
const dirsmo69083 = smo60885.getStemDirection();
smo60885.setStemDirection(dirsmo69083);
smo60886.setStemDirection(dirsmo69083);
smo60887.setStemDirection(dirsmo69083);
smo60888.setStemDirection(dirsmo69083);
const smo69083 = new VF.Beam([smo60885,smo60886,smo60887,smo60888]);
const dirsmo69084 = smo60889.getStemDirection();
smo60889.setStemDirection(dirsmo69084);
smo60890.setStemDirection(dirsmo69084);
smo60891.setStemDirection(dirsmo69084);
smo60892.setStemDirection(dirsmo69084);
const smo69084 = new VF.Beam([smo60889,smo60890,smo60891,smo60892]);
const dirsmo69085 = smo60893.getStemDirection();
smo60893.setStemDirection(dirsmo69085);
smo60894.setStemDirection(dirsmo69085);
smo60895.setStemDirection(dirsmo69085);
smo60896.setStemDirection(dirsmo69085);
const smo69085 = new VF.Beam([smo60893,smo60894,smo60895,smo60896]);
const dirsmo69088 = smo65884.getStemDirection();
smo65884.setStemDirection(dirsmo69088);
smo65885.setStemDirection(dirsmo69088);
smo65886.setStemDirection(dirsmo69088);
smo65887.setStemDirection(dirsmo69088);
const smo69088 = new VF.Beam([smo65884,smo65885,smo65886,smo65887]);
const dirsmo69089 = smo65888.getStemDirection();
smo65888.setStemDirection(dirsmo69089);
smo65889.setStemDirection(dirsmo69089);
smo65890.setStemDirection(dirsmo69089);
smo65891.setStemDirection(dirsmo69089);
const smo69089 = new VF.Beam([smo65888,smo65889,smo65890,smo65891]);
const dirsmo69090 = smo65892.getStemDirection();
smo65892.setStemDirection(dirsmo69090);
smo65893.setStemDirection(dirsmo69090);
smo65894.setStemDirection(dirsmo69090);
smo65895.setStemDirection(dirsmo69090);
const smo69090 = new VF.Beam([smo65892,smo65893,smo65894,smo65895]);
const dirsmo69091 = smo65896.getStemDirection();
smo65896.setStemDirection(dirsmo69091);
smo65897.setStemDirection(dirsmo69091);
smo65898.setStemDirection(dirsmo69091);
smo65899.setStemDirection(dirsmo69091);
const smo69091 = new VF.Beam([smo65896,smo65897,smo65898,smo65899]);
 
// formatting measures in staff group smo57677
fmtsmo6091064.format([smo60910v0,smo65913v0], 370);
const stavesmo60910 = new VF.Stave(90, 1962, 467);
stavesmo60910.setAttribute('id', 'stavesmo60910');
stavesmo60910.setBegBarType(1);
stavesmo60910.addClef('treble');
const keysmo60910 = new VF.KeySignature('Eb');
keysmo60910.addToStave(stavesmo60910);
stavesmo60910.setContext(context);
stavesmo60910.draw();
smo60910v0.draw(context, stavesmo60910);
smo69082.setContext(context);
smo69082.draw();
smo69083.setContext(context);
smo69083.draw();
smo69084.setContext(context);
smo69084.draw();
smo69085.setContext(context);
smo69085.draw();
const stavesmo65913 = new VF.Stave(90, 2051, 467);
stavesmo65913.setAttribute('id', 'stavesmo65913');
stavesmo65913.setBegBarType(1);
stavesmo65913.addClef('bass');
const keysmo65913 = new VF.KeySignature('Eb');
keysmo65913.addToStave(stavesmo65913);
stavesmo65913.setContext(context);
stavesmo65913.draw();
smo65913v0.draw(context, stavesmo65913);
smo69088.setContext(context);
smo69088.draw();
smo69089.setContext(context);
smo69089.draw();
smo69090.setContext(context);
smo69090.draw();
smo69091.setContext(context);
smo69091.draw();
const leftsmo57677stavesmo609101 = new VF.StaveConnector(stavesmo60910, stavesmo65913).setType(3);
leftsmo57677stavesmo609101.setContext(context).draw();
const fmtsmo6094065 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo60940v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60940v0ar = [];
const smo60911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60911'] = smo60911;
smo60911.setAttribute('id', 'smo60911');
smo60940v0ar.push(smo60911);
const smo60912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60912'] = smo60912;
smo60912.setAttribute('id', 'smo60912');
smo60940v0ar.push(smo60912);
const smo60913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60913'] = smo60913;
smo60913.setAttribute('id', 'smo60913');
smo60940v0ar.push(smo60913);
const smo60914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60914'] = smo60914;
smo60914.setAttribute('id', 'smo60914');
smo60940v0ar.push(smo60914);
const smo60915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo60915'] = smo60915;
smo60915.setAttribute('id', 'smo60915');
smo60940v0ar.push(smo60915);
const smo60916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60916'] = smo60916;
smo60916.setAttribute('id', 'smo60916');
smo60940v0ar.push(smo60916);
const smo60917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60917'] = smo60917;
smo60917.setAttribute('id', 'smo60917');
smo60940v0ar.push(smo60917);
const smo60918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60918'] = smo60918;
smo60918.setAttribute('id', 'smo60918');
smo60940v0ar.push(smo60918);
const smo60919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo60919'] = smo60919;
smo60919.setAttribute('id', 'smo60919');
smo60940v0ar.push(smo60919);
const smo60920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60920'] = smo60920;
smo60920.setAttribute('id', 'smo60920');
smo60940v0ar.push(smo60920);
const smo60921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60921'] = smo60921;
smo60921.setAttribute('id', 'smo60921');
smo60940v0ar.push(smo60921);
const smo60922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60922'] = smo60922;
smo60922.setAttribute('id', 'smo60922');
smo60940v0ar.push(smo60922);
const smo60923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo60923'] = smo60923;
smo60923.setAttribute('id', 'smo60923');
smo60940v0ar.push(smo60923);
const smo60924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60924'] = smo60924;
smo60924.setAttribute('id', 'smo60924');
smo60940v0ar.push(smo60924);
const smo60925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo60925'] = smo60925;
smo60925.setAttribute('id', 'smo60925');
smo60940v0ar.push(smo60925);
const smo60926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60926'] = smo60926;
smo60926.setAttribute('id', 'smo60926');
smo60940v0ar.push(smo60926);
smo60940v0.addTickables(smo60940v0ar)
fmtsmo6094065.joinVoices([smo60940v0]);
const fmtsmo6594365 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo65943v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65943v0ar = [];
const smo65914 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65914'] = smo65914;
smo65914.setAttribute('id', 'smo65914');
smo65943v0ar.push(smo65914);
const smo65915 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo65915'] = smo65915;
smo65915.setAttribute('id', 'smo65915');
smo65943v0ar.push(smo65915);
const smo65916 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65916'] = smo65916;
smo65916.setAttribute('id', 'smo65916');
smo65943v0ar.push(smo65916);
const smo65917 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo65917'] = smo65917;
smo65917.setAttribute('id', 'smo65917');
smo65943v0ar.push(smo65917);
const smo65918 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65918'] = smo65918;
smo65918.setAttribute('id', 'smo65918');
smo65943v0ar.push(smo65918);
const smo65919 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo65919'] = smo65919;
smo65919.setAttribute('id', 'smo65919');
smo65943v0ar.push(smo65919);
const smo65920 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65920'] = smo65920;
smo65920.setAttribute('id', 'smo65920');
smo65943v0ar.push(smo65920);
const smo65921 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo65921'] = smo65921;
smo65921.setAttribute('id', 'smo65921');
smo65943v0ar.push(smo65921);
const smo65922 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65922'] = smo65922;
smo65922.setAttribute('id', 'smo65922');
smo65943v0ar.push(smo65922);
const smo65923 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo65923'] = smo65923;
smo65923.setAttribute('id', 'smo65923');
smo65943v0ar.push(smo65923);
const smo65924 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65924'] = smo65924;
smo65924.setAttribute('id', 'smo65924');
smo65943v0ar.push(smo65924);
const smo65925 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo65925'] = smo65925;
smo65925.setAttribute('id', 'smo65925');
smo65943v0ar.push(smo65925);
const smo65926 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65926'] = smo65926;
smo65926.setAttribute('id', 'smo65926');
smo65943v0ar.push(smo65926);
const smo65927 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo65927'] = smo65927;
smo65927.setAttribute('id', 'smo65927');
smo65943v0ar.push(smo65927);
const smo65928 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo65928'] = smo65928;
smo65928.setAttribute('id', 'smo65928');
smo65943v0ar.push(smo65928);
const smo65929 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
noteHash['smo65929'] = smo65929;
smo65929.setAttribute('id', 'smo65929');
smo65943v0ar.push(smo65929);
smo65943v0.addTickables(smo65943v0ar)
fmtsmo6594365.joinVoices([smo65943v0]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo69094 = smo60911.getStemDirection();
smo60911.setStemDirection(dirsmo69094);
smo60912.setStemDirection(dirsmo69094);
smo60913.setStemDirection(dirsmo69094);
smo60914.setStemDirection(dirsmo69094);
const smo69094 = new VF.Beam([smo60911,smo60912,smo60913,smo60914]);
const dirsmo69095 = smo60915.getStemDirection();
smo60915.setStemDirection(dirsmo69095);
smo60916.setStemDirection(dirsmo69095);
smo60917.setStemDirection(dirsmo69095);
smo60918.setStemDirection(dirsmo69095);
const smo69095 = new VF.Beam([smo60915,smo60916,smo60917,smo60918]);
const dirsmo69096 = smo60919.getStemDirection();
smo60919.setStemDirection(dirsmo69096);
smo60920.setStemDirection(dirsmo69096);
smo60921.setStemDirection(dirsmo69096);
smo60922.setStemDirection(dirsmo69096);
const smo69096 = new VF.Beam([smo60919,smo60920,smo60921,smo60922]);
const dirsmo69097 = smo60923.getStemDirection();
smo60923.setStemDirection(dirsmo69097);
smo60924.setStemDirection(dirsmo69097);
smo60925.setStemDirection(dirsmo69097);
smo60926.setStemDirection(dirsmo69097);
const smo69097 = new VF.Beam([smo60923,smo60924,smo60925,smo60926]);
const dirsmo69100 = smo65914.getStemDirection();
smo65914.setStemDirection(dirsmo69100);
smo65915.setStemDirection(dirsmo69100);
smo65916.setStemDirection(dirsmo69100);
smo65917.setStemDirection(dirsmo69100);
const smo69100 = new VF.Beam([smo65914,smo65915,smo65916,smo65917]);
const dirsmo69101 = smo65918.getStemDirection();
smo65918.setStemDirection(dirsmo69101);
smo65919.setStemDirection(dirsmo69101);
smo65920.setStemDirection(dirsmo69101);
smo65921.setStemDirection(dirsmo69101);
const smo69101 = new VF.Beam([smo65918,smo65919,smo65920,smo65921]);
const dirsmo69102 = smo65922.getStemDirection();
smo65922.setStemDirection(dirsmo69102);
smo65923.setStemDirection(dirsmo69102);
smo65924.setStemDirection(dirsmo69102);
smo65925.setStemDirection(dirsmo69102);
const smo69102 = new VF.Beam([smo65922,smo65923,smo65924,smo65925]);
const dirsmo69103 = smo65926.getStemDirection();
smo65926.setStemDirection(dirsmo69103);
smo65927.setStemDirection(dirsmo69103);
smo65928.setStemDirection(dirsmo69103);
smo65929.setStemDirection(dirsmo69103);
const smo69103 = new VF.Beam([smo65926,smo65927,smo65928,smo65929]);
 
// formatting measures in staff group smo57677
fmtsmo6094065.format([smo60940v0,smo65943v0], 345);
const stavesmo60940 = new VF.Stave(557, 1962, 359);
stavesmo60940.setAttribute('id', 'stavesmo60940');
stavesmo60940.setBegBarType(VF.Barline.type.NONE);
stavesmo60940.setContext(context);
stavesmo60940.draw();
smo60940v0.draw(context, stavesmo60940);
smo69094.setContext(context);
smo69094.draw();
smo69095.setContext(context);
smo69095.draw();
smo69096.setContext(context);
smo69096.draw();
smo69097.setContext(context);
smo69097.draw();
const stavesmo65943 = new VF.Stave(557, 2051, 359);
stavesmo65943.setAttribute('id', 'stavesmo65943');
stavesmo65943.setBegBarType(VF.Barline.type.NONE);
stavesmo65943.setContext(context);
stavesmo65943.draw();
smo65943v0.draw(context, stavesmo65943);
smo69100.setContext(context);
smo69100.draw();
smo69101.setContext(context);
smo69101.draw();
smo69102.setContext(context);
smo69102.draw();
smo69103.setContext(context);
smo69103.draw();
const fmtsmo6097066 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo60970v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60970v0ar = [];
const smo60941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/5/n"]}'))
noteHash['smo60941'] = smo60941;
smo60941.setAttribute('id', 'smo60941');
smo60970v0ar.push(smo60941);
const smo60942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo60942'] = smo60942;
smo60942.setAttribute('id', 'smo60942');
smo60970v0ar.push(smo60942);
const smo60943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60943'] = smo60943;
smo60943.setAttribute('id', 'smo60943');
smo60970v0ar.push(smo60943);
const smo60944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo60944'] = smo60944;
smo60944.setAttribute('id', 'smo60944');
smo60970v0ar.push(smo60944);
const smo60945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo60945'] = smo60945;
smo60945.setAttribute('id', 'smo60945');
smo60970v0ar.push(smo60945);
const smo60946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo60946'] = smo60946;
smo60946.setAttribute('id', 'smo60946');
smo60970v0ar.push(smo60946);
const smo60947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60947'] = smo60947;
smo60947.setAttribute('id', 'smo60947');
smo60970v0ar.push(smo60947);
const smo60948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo60948'] = smo60948;
smo60948.setAttribute('id', 'smo60948');
smo60970v0ar.push(smo60948);
const smo60949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/5/n"]}'))
noteHash['smo60949'] = smo60949;
smo60949.setAttribute('id', 'smo60949');
smo60970v0ar.push(smo60949);
const smo60950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo60950'] = smo60950;
smo60950.setAttribute('id', 'smo60950');
smo60970v0ar.push(smo60950);
const smo60951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60951'] = smo60951;
smo60951.setAttribute('id', 'smo60951');
smo60970v0ar.push(smo60951);
const smo60952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo60952'] = smo60952;
smo60952.setAttribute('id', 'smo60952');
smo60970v0ar.push(smo60952);
const smo60953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo60953'] = smo60953;
smo60953.setAttribute('id', 'smo60953');
smo60970v0ar.push(smo60953);
const smo60954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo60954'] = smo60954;
smo60954.setAttribute('id', 'smo60954');
smo60970v0ar.push(smo60954);
const smo60955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo60955'] = smo60955;
smo60955.setAttribute('id', 'smo60955');
smo60970v0ar.push(smo60955);
const smo60956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo60956'] = smo60956;
smo60956.setAttribute('id', 'smo60956');
smo60970v0ar.push(smo60956);
smo60970v0.addTickables(smo60970v0ar)
fmtsmo6097066.joinVoices([smo60970v0]);
const fmtsmo6597366 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo65973v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65973v0ar = [];
const smo65944 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65944'] = smo65944;
smo65944.setAttribute('id', 'smo65944');
smo65973v0ar.push(smo65944);
const smo65945 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65945'] = smo65945;
smo65945.setAttribute('id', 'smo65945');
smo65973v0ar.push(smo65945);
const smo65946 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo65946'] = smo65946;
smo65946.setAttribute('id', 'smo65946');
smo65973v0ar.push(smo65946);
const smo65947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65947'] = smo65947;
smo65947.setAttribute('id', 'smo65947');
smo65973v0ar.push(smo65947);
const smo65948 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo65948'] = smo65948;
smo65948.setAttribute('id', 'smo65948');
smo65973v0ar.push(smo65948);
const smo65949 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65949'] = smo65949;
smo65949.setAttribute('id', 'smo65949');
smo65973v0ar.push(smo65949);
const smo65950 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo65950'] = smo65950;
smo65950.setAttribute('id', 'smo65950');
smo65973v0ar.push(smo65950);
const smo65951 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65951'] = smo65951;
smo65951.setAttribute('id', 'smo65951');
smo65973v0ar.push(smo65951);
const smo65952 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65952'] = smo65952;
smo65952.setAttribute('id', 'smo65952');
smo65973v0ar.push(smo65952);
const smo65953 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65953'] = smo65953;
smo65953.setAttribute('id', 'smo65953');
smo65973v0ar.push(smo65953);
const smo65954 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo65954'] = smo65954;
smo65954.setAttribute('id', 'smo65954');
smo65973v0ar.push(smo65954);
const smo65955 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65955'] = smo65955;
smo65955.setAttribute('id', 'smo65955');
smo65973v0ar.push(smo65955);
const smo65956 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo65956'] = smo65956;
smo65956.setAttribute('id', 'smo65956');
smo65973v0ar.push(smo65956);
const smo65957 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65957'] = smo65957;
smo65957.setAttribute('id', 'smo65957');
smo65973v0ar.push(smo65957);
const smo65958 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo65958'] = smo65958;
smo65958.setAttribute('id', 'smo65958');
smo65973v0ar.push(smo65958);
const smo65959 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo65959'] = smo65959;
smo65959.setAttribute('id', 'smo65959');
smo65973v0ar.push(smo65959);
smo65973v0.addTickables(smo65973v0ar)
fmtsmo6597366.joinVoices([smo65973v0]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo69106 = smo60941.getStemDirection();
smo60941.setStemDirection(dirsmo69106);
smo60942.setStemDirection(dirsmo69106);
smo60943.setStemDirection(dirsmo69106);
smo60944.setStemDirection(dirsmo69106);
const smo69106 = new VF.Beam([smo60941,smo60942,smo60943,smo60944]);
const dirsmo69107 = smo60945.getStemDirection();
smo60945.setStemDirection(dirsmo69107);
smo60946.setStemDirection(dirsmo69107);
smo60947.setStemDirection(dirsmo69107);
smo60948.setStemDirection(dirsmo69107);
const smo69107 = new VF.Beam([smo60945,smo60946,smo60947,smo60948]);
const dirsmo69108 = smo60949.getStemDirection();
smo60949.setStemDirection(dirsmo69108);
smo60950.setStemDirection(dirsmo69108);
smo60951.setStemDirection(dirsmo69108);
smo60952.setStemDirection(dirsmo69108);
const smo69108 = new VF.Beam([smo60949,smo60950,smo60951,smo60952]);
const dirsmo69109 = smo60953.getStemDirection();
smo60953.setStemDirection(dirsmo69109);
smo60954.setStemDirection(dirsmo69109);
smo60955.setStemDirection(dirsmo69109);
smo60956.setStemDirection(dirsmo69109);
const smo69109 = new VF.Beam([smo60953,smo60954,smo60955,smo60956]);
const dirsmo69112 = smo65944.getStemDirection();
smo65944.setStemDirection(dirsmo69112);
smo65945.setStemDirection(dirsmo69112);
smo65946.setStemDirection(dirsmo69112);
smo65947.setStemDirection(dirsmo69112);
const smo69112 = new VF.Beam([smo65944,smo65945,smo65946,smo65947]);
const dirsmo69113 = smo65948.getStemDirection();
smo65948.setStemDirection(dirsmo69113);
smo65949.setStemDirection(dirsmo69113);
smo65950.setStemDirection(dirsmo69113);
smo65951.setStemDirection(dirsmo69113);
const smo69113 = new VF.Beam([smo65948,smo65949,smo65950,smo65951]);
const dirsmo69114 = smo65952.getStemDirection();
smo65952.setStemDirection(dirsmo69114);
smo65953.setStemDirection(dirsmo69114);
smo65954.setStemDirection(dirsmo69114);
smo65955.setStemDirection(dirsmo69114);
const smo69114 = new VF.Beam([smo65952,smo65953,smo65954,smo65955]);
const dirsmo69115 = smo65956.getStemDirection();
smo65956.setStemDirection(dirsmo69115);
smo65957.setStemDirection(dirsmo69115);
smo65958.setStemDirection(dirsmo69115);
smo65959.setStemDirection(dirsmo69115);
const smo69115 = new VF.Beam([smo65956,smo65957,smo65958,smo65959]);
 
// formatting measures in staff group smo57677
fmtsmo6097066.format([smo60970v0,smo65973v0], 345);
const stavesmo60970 = new VF.Stave(916, 1962, 359);
stavesmo60970.setAttribute('id', 'stavesmo60970');
stavesmo60970.setBegBarType(VF.Barline.type.NONE);
stavesmo60970.setContext(context);
stavesmo60970.draw();
smo60970v0.draw(context, stavesmo60970);
smo69106.setContext(context);
smo69106.draw();
smo69107.setContext(context);
smo69107.draw();
smo69108.setContext(context);
smo69108.draw();
smo69109.setContext(context);
smo69109.draw();
const stavesmo65973 = new VF.Stave(916, 2051, 359);
stavesmo65973.setAttribute('id', 'stavesmo65973');
stavesmo65973.setBegBarType(VF.Barline.type.NONE);
stavesmo65973.setContext(context);
stavesmo65973.draw();
smo65973v0.draw(context, stavesmo65973);
smo69112.setContext(context);
smo69112.draw();
smo69113.setContext(context);
smo69113.draw();
smo69114.setContext(context);
smo69114.draw();
smo69115.setContext(context);
smo69115.draw();
const fmtsmo6100067 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo61000v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61000v0ar = [];
const smo60971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60971'] = smo60971;
smo60971.setAttribute('id', 'smo60971');
smo61000v0ar.push(smo60971);
const smo60972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60972'] = smo60972;
smo60972.setAttribute('id', 'smo60972');
const smo609720acc = new VF.Accidental('#');
smo60972.addModifier(smo609720acc, 0);
smo61000v0ar.push(smo60972);
const smo60973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60973'] = smo60973;
smo60973.setAttribute('id', 'smo60973');
const smo609730acc = new VF.Accidental('n');
smo60973.addModifier(smo609730acc, 0);
smo61000v0ar.push(smo60973);
const smo60974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60974'] = smo60974;
smo60974.setAttribute('id', 'smo60974');
smo61000v0ar.push(smo60974);
const smo60975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60975'] = smo60975;
smo60975.setAttribute('id', 'smo60975');
smo61000v0ar.push(smo60975);
const smo60976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60976'] = smo60976;
smo60976.setAttribute('id', 'smo60976');
smo61000v0ar.push(smo60976);
const smo60977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60977'] = smo60977;
smo60977.setAttribute('id', 'smo60977');
smo61000v0ar.push(smo60977);
const smo60978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60978'] = smo60978;
smo60978.setAttribute('id', 'smo60978');
smo61000v0ar.push(smo60978);
const smo60979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo60979'] = smo60979;
smo60979.setAttribute('id', 'smo60979');
smo61000v0ar.push(smo60979);
const smo60980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60980'] = smo60980;
smo60980.setAttribute('id', 'smo60980');
smo61000v0ar.push(smo60980);
const smo60981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60981'] = smo60981;
smo60981.setAttribute('id', 'smo60981');
smo61000v0ar.push(smo60981);
const smo60982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60982'] = smo60982;
smo60982.setAttribute('id', 'smo60982');
smo61000v0ar.push(smo60982);
const smo60983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo60983'] = smo60983;
smo60983.setAttribute('id', 'smo60983');
smo61000v0ar.push(smo60983);
const smo60984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60984'] = smo60984;
smo60984.setAttribute('id', 'smo60984');
smo61000v0ar.push(smo60984);
const smo60985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo60985'] = smo60985;
smo60985.setAttribute('id', 'smo60985');
smo61000v0ar.push(smo60985);
const smo60986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo60986'] = smo60986;
smo60986.setAttribute('id', 'smo60986');
smo61000v0ar.push(smo60986);
smo61000v0.addTickables(smo61000v0ar)
fmtsmo6100067.joinVoices([smo61000v0]);
const fmtsmo6600367 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo66003v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66003v0ar = [];
const smo65974 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65974'] = smo65974;
smo65974.setAttribute('id', 'smo65974');
smo66003v0ar.push(smo65974);
const smo65975 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65975'] = smo65975;
smo65975.setAttribute('id', 'smo65975');
const smo659750acc = new VF.Accidental('n');
smo65975.addModifier(smo659750acc, 0);
smo66003v0ar.push(smo65975);
const smo65976 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65976'] = smo65976;
smo65976.setAttribute('id', 'smo65976');
smo66003v0ar.push(smo65976);
const smo65977 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65977'] = smo65977;
smo65977.setAttribute('id', 'smo65977');
smo66003v0ar.push(smo65977);
const smo65978 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo65978'] = smo65978;
smo65978.setAttribute('id', 'smo65978');
const smo659780acc = new VF.Accidental('#');
smo65978.addModifier(smo659780acc, 0);
smo66003v0ar.push(smo65978);
const smo65979 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65979'] = smo65979;
smo65979.setAttribute('id', 'smo65979');
smo66003v0ar.push(smo65979);
const smo65980 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65980'] = smo65980;
smo65980.setAttribute('id', 'smo65980');
smo66003v0ar.push(smo65980);
const smo65981 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65981'] = smo65981;
smo65981.setAttribute('id', 'smo65981');
smo66003v0ar.push(smo65981);
const smo65982 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo65982'] = smo65982;
smo65982.setAttribute('id', 'smo65982');
smo66003v0ar.push(smo65982);
const smo65983 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65983'] = smo65983;
smo65983.setAttribute('id', 'smo65983');
smo66003v0ar.push(smo65983);
const smo65984 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65984'] = smo65984;
smo65984.setAttribute('id', 'smo65984');
smo66003v0ar.push(smo65984);
const smo65985 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65985'] = smo65985;
smo65985.setAttribute('id', 'smo65985');
smo66003v0ar.push(smo65985);
const smo65986 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo65986'] = smo65986;
smo65986.setAttribute('id', 'smo65986');
smo66003v0ar.push(smo65986);
const smo65987 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65987'] = smo65987;
smo65987.setAttribute('id', 'smo65987');
smo66003v0ar.push(smo65987);
const smo65988 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo65988'] = smo65988;
smo65988.setAttribute('id', 'smo65988');
smo66003v0ar.push(smo65988);
const smo65989 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo65989'] = smo65989;
smo65989.setAttribute('id', 'smo65989');
smo66003v0ar.push(smo65989);
smo66003v0.addTickables(smo66003v0ar)
fmtsmo6600367.joinVoices([smo66003v0]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo69118 = smo60971.getStemDirection();
smo60971.setStemDirection(dirsmo69118);
smo60972.setStemDirection(dirsmo69118);
smo60973.setStemDirection(dirsmo69118);
smo60974.setStemDirection(dirsmo69118);
const smo69118 = new VF.Beam([smo60971,smo60972,smo60973,smo60974]);
const dirsmo69119 = smo60975.getStemDirection();
smo60975.setStemDirection(dirsmo69119);
smo60976.setStemDirection(dirsmo69119);
smo60977.setStemDirection(dirsmo69119);
smo60978.setStemDirection(dirsmo69119);
const smo69119 = new VF.Beam([smo60975,smo60976,smo60977,smo60978]);
const dirsmo69120 = smo60979.getStemDirection();
smo60979.setStemDirection(dirsmo69120);
smo60980.setStemDirection(dirsmo69120);
smo60981.setStemDirection(dirsmo69120);
smo60982.setStemDirection(dirsmo69120);
const smo69120 = new VF.Beam([smo60979,smo60980,smo60981,smo60982]);
const dirsmo69121 = smo60983.getStemDirection();
smo60983.setStemDirection(dirsmo69121);
smo60984.setStemDirection(dirsmo69121);
smo60985.setStemDirection(dirsmo69121);
smo60986.setStemDirection(dirsmo69121);
const smo69121 = new VF.Beam([smo60983,smo60984,smo60985,smo60986]);
const dirsmo69124 = smo65974.getStemDirection();
smo65974.setStemDirection(dirsmo69124);
smo65975.setStemDirection(dirsmo69124);
smo65976.setStemDirection(dirsmo69124);
smo65977.setStemDirection(dirsmo69124);
const smo69124 = new VF.Beam([smo65974,smo65975,smo65976,smo65977]);
const dirsmo69125 = smo65978.getStemDirection();
smo65978.setStemDirection(dirsmo69125);
smo65979.setStemDirection(dirsmo69125);
smo65980.setStemDirection(dirsmo69125);
smo65981.setStemDirection(dirsmo69125);
const smo69125 = new VF.Beam([smo65978,smo65979,smo65980,smo65981]);
const dirsmo69126 = smo65982.getStemDirection();
smo65982.setStemDirection(dirsmo69126);
smo65983.setStemDirection(dirsmo69126);
smo65984.setStemDirection(dirsmo69126);
smo65985.setStemDirection(dirsmo69126);
const smo69126 = new VF.Beam([smo65982,smo65983,smo65984,smo65985]);
const dirsmo69127 = smo65986.getStemDirection();
smo65986.setStemDirection(dirsmo69127);
smo65987.setStemDirection(dirsmo69127);
smo65988.setStemDirection(dirsmo69127);
smo65989.setStemDirection(dirsmo69127);
const smo69127 = new VF.Beam([smo65986,smo65987,smo65988,smo65989]);
 
// formatting measures in staff group smo57677
fmtsmo6100067.format([smo61000v0,smo66003v0], 519);
const stavesmo61000 = new VF.Stave(1275, 1962, 533);
stavesmo61000.setAttribute('id', 'stavesmo61000');
stavesmo61000.setBegBarType(VF.Barline.type.NONE);
stavesmo61000.setContext(context);
stavesmo61000.draw();
smo61000v0.draw(context, stavesmo61000);
smo69118.setContext(context);
smo69118.draw();
smo69119.setContext(context);
smo69119.draw();
smo69120.setContext(context);
smo69120.draw();
smo69121.setContext(context);
smo69121.draw();
const stavesmo66003 = new VF.Stave(1275, 2051, 533);
stavesmo66003.setAttribute('id', 'stavesmo66003');
stavesmo66003.setBegBarType(VF.Barline.type.NONE);
stavesmo66003.setContext(context);
stavesmo66003.draw();
smo66003v0.draw(context, stavesmo66003);
smo69124.setContext(context);
smo69124.draw();
smo69125.setContext(context);
smo69125.draw();
smo69126.setContext(context);
smo69126.draw();
smo69127.setContext(context);
smo69127.draw();
const rightsmo57677stavesmo610001 = new VF.StaveConnector(stavesmo61000, stavesmo66003).setType(0);
rightsmo57677stavesmo610001.setContext(context).draw();
const fmtsmo6103068 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo61030v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61030v0ar = [];
const smo61001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61001'] = smo61001;
smo61001.setAttribute('id', 'smo61001');
smo61030v0ar.push(smo61001);
const smo61002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61002'] = smo61002;
smo61002.setAttribute('id', 'smo61002');
smo61030v0ar.push(smo61002);
const smo61003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo61003'] = smo61003;
smo61003.setAttribute('id', 'smo61003');
const smo610030acc = new VF.Accidental('#');
smo61003.addModifier(smo610030acc, 0);
smo61030v0ar.push(smo61003);
const smo61004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61004'] = smo61004;
smo61004.setAttribute('id', 'smo61004');
smo61030v0ar.push(smo61004);
const smo61005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo61005'] = smo61005;
smo61005.setAttribute('id', 'smo61005');
smo61030v0ar.push(smo61005);
const smo61006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61006'] = smo61006;
smo61006.setAttribute('id', 'smo61006');
smo61030v0ar.push(smo61006);
const smo61007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo61007'] = smo61007;
smo61007.setAttribute('id', 'smo61007');
smo61030v0ar.push(smo61007);
const smo61008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61008'] = smo61008;
smo61008.setAttribute('id', 'smo61008');
smo61030v0ar.push(smo61008);
const smo61009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo61009'] = smo61009;
smo61009.setAttribute('id', 'smo61009');
smo61030v0ar.push(smo61009);
const smo61010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61010'] = smo61010;
smo61010.setAttribute('id', 'smo61010');
smo61030v0ar.push(smo61010);
const smo61011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo61011'] = smo61011;
smo61011.setAttribute('id', 'smo61011');
smo61030v0ar.push(smo61011);
const smo61012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61012'] = smo61012;
smo61012.setAttribute('id', 'smo61012');
smo61030v0ar.push(smo61012);
const smo61013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo61013'] = smo61013;
smo61013.setAttribute('id', 'smo61013');
smo61030v0ar.push(smo61013);
const smo61014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61014'] = smo61014;
smo61014.setAttribute('id', 'smo61014');
smo61030v0ar.push(smo61014);
const smo61015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo61015'] = smo61015;
smo61015.setAttribute('id', 'smo61015');
smo61030v0ar.push(smo61015);
const smo61016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo61016'] = smo61016;
smo61016.setAttribute('id', 'smo61016');
smo61030v0ar.push(smo61016);
smo61030v0.addTickables(smo61030v0ar)
fmtsmo6103068.joinVoices([smo61030v0]);
const fmtsmo6603368 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo66033v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66033v0ar = [];
const smo66004 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
noteHash['smo66004'] = smo66004;
smo66004.setAttribute('id', 'smo66004');
smo66033v0ar.push(smo66004);
const smo66005 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo66005'] = smo66005;
smo66005.setAttribute('id', 'smo66005');
smo66033v0ar.push(smo66005);
const smo66006 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo66006'] = smo66006;
smo66006.setAttribute('id', 'smo66006');
const smo660060acc = new VF.Accidental('n');
smo66006.addModifier(smo660060acc, 0);
smo66033v0ar.push(smo66006);
const smo66007 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo66007'] = smo66007;
smo66007.setAttribute('id', 'smo66007');
smo66033v0ar.push(smo66007);
const smo66008 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66008'] = smo66008;
smo66008.setAttribute('id', 'smo66008');
smo66033v0ar.push(smo66008);
const smo66009 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo66009'] = smo66009;
smo66009.setAttribute('id', 'smo66009');
smo66033v0ar.push(smo66009);
const smo66010 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo66010'] = smo66010;
smo66010.setAttribute('id', 'smo66010');
smo66033v0ar.push(smo66010);
const smo66011 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo66011'] = smo66011;
smo66011.setAttribute('id', 'smo66011');
smo66033v0ar.push(smo66011);
const smo66012 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
noteHash['smo66012'] = smo66012;
smo66012.setAttribute('id', 'smo66012');
smo66033v0ar.push(smo66012);
const smo66013 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo66013'] = smo66013;
smo66013.setAttribute('id', 'smo66013');
smo66033v0ar.push(smo66013);
const smo66014 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo66014'] = smo66014;
smo66014.setAttribute('id', 'smo66014');
smo66033v0ar.push(smo66014);
const smo66015 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo66015'] = smo66015;
smo66015.setAttribute('id', 'smo66015');
smo66033v0ar.push(smo66015);
const smo66016 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66016'] = smo66016;
smo66016.setAttribute('id', 'smo66016');
smo66033v0ar.push(smo66016);
const smo66017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo66017'] = smo66017;
smo66017.setAttribute('id', 'smo66017');
smo66033v0ar.push(smo66017);
const smo66018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo66018'] = smo66018;
smo66018.setAttribute('id', 'smo66018');
smo66033v0ar.push(smo66018);
const smo66019 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo66019'] = smo66019;
smo66019.setAttribute('id', 'smo66019');
smo66033v0ar.push(smo66019);
smo66033v0.addTickables(smo66033v0ar)
fmtsmo6603368.joinVoices([smo66033v0]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo69142 = smo61001.getStemDirection();
smo61001.setStemDirection(dirsmo69142);
smo61002.setStemDirection(dirsmo69142);
smo61003.setStemDirection(dirsmo69142);
smo61004.setStemDirection(dirsmo69142);
const smo69142 = new VF.Beam([smo61001,smo61002,smo61003,smo61004]);
const dirsmo69143 = smo61005.getStemDirection();
smo61005.setStemDirection(dirsmo69143);
smo61006.setStemDirection(dirsmo69143);
smo61007.setStemDirection(dirsmo69143);
smo61008.setStemDirection(dirsmo69143);
const smo69143 = new VF.Beam([smo61005,smo61006,smo61007,smo61008]);
const dirsmo69144 = smo61009.getStemDirection();
smo61009.setStemDirection(dirsmo69144);
smo61010.setStemDirection(dirsmo69144);
smo61011.setStemDirection(dirsmo69144);
smo61012.setStemDirection(dirsmo69144);
const smo69144 = new VF.Beam([smo61009,smo61010,smo61011,smo61012]);
const dirsmo69145 = smo61013.getStemDirection();
smo61013.setStemDirection(dirsmo69145);
smo61014.setStemDirection(dirsmo69145);
smo61015.setStemDirection(dirsmo69145);
smo61016.setStemDirection(dirsmo69145);
const smo69145 = new VF.Beam([smo61013,smo61014,smo61015,smo61016]);
const dirsmo69148 = smo66004.getStemDirection();
smo66004.setStemDirection(dirsmo69148);
smo66005.setStemDirection(dirsmo69148);
smo66006.setStemDirection(dirsmo69148);
smo66007.setStemDirection(dirsmo69148);
const smo69148 = new VF.Beam([smo66004,smo66005,smo66006,smo66007]);
const dirsmo69149 = smo66008.getStemDirection();
smo66008.setStemDirection(dirsmo69149);
smo66009.setStemDirection(dirsmo69149);
smo66010.setStemDirection(dirsmo69149);
smo66011.setStemDirection(dirsmo69149);
const smo69149 = new VF.Beam([smo66008,smo66009,smo66010,smo66011]);
const dirsmo69150 = smo66012.getStemDirection();
smo66012.setStemDirection(dirsmo69150);
smo66013.setStemDirection(dirsmo69150);
smo66014.setStemDirection(dirsmo69150);
smo66015.setStemDirection(dirsmo69150);
const smo69150 = new VF.Beam([smo66012,smo66013,smo66014,smo66015]);
const dirsmo69151 = smo66016.getStemDirection();
smo66016.setStemDirection(dirsmo69151);
smo66017.setStemDirection(dirsmo69151);
smo66018.setStemDirection(dirsmo69151);
smo66019.setStemDirection(dirsmo69151);
const smo69151 = new VF.Beam([smo66016,smo66017,smo66018,smo66019]);
 
// formatting measures in staff group smo57677
fmtsmo6103068.format([smo61030v0,smo66033v0], 409);
const stavesmo61030 = new VF.Stave(90, 2180, 506);
stavesmo61030.setAttribute('id', 'stavesmo61030');
stavesmo61030.setBegBarType(1);
stavesmo61030.addClef('treble');
const keysmo61030 = new VF.KeySignature('Eb');
keysmo61030.addToStave(stavesmo61030);
stavesmo61030.setContext(context);
stavesmo61030.draw();
smo61030v0.draw(context, stavesmo61030);
smo69142.setContext(context);
smo69142.draw();
smo69143.setContext(context);
smo69143.draw();
smo69144.setContext(context);
smo69144.draw();
smo69145.setContext(context);
smo69145.draw();
const stavesmo66033 = new VF.Stave(90, 2270, 506);
stavesmo66033.setAttribute('id', 'stavesmo66033');
stavesmo66033.setBegBarType(1);
stavesmo66033.addClef('bass');
const keysmo66033 = new VF.KeySignature('Eb');
keysmo66033.addToStave(stavesmo66033);
stavesmo66033.setContext(context);
stavesmo66033.draw();
smo66033v0.draw(context, stavesmo66033);
smo69148.setContext(context);
smo69148.draw();
smo69149.setContext(context);
smo69149.draw();
smo69150.setContext(context);
smo69150.draw();
smo69151.setContext(context);
smo69151.draw();
const leftsmo57677stavesmo610301 = new VF.StaveConnector(stavesmo61030, stavesmo66033).setType(3);
leftsmo57677stavesmo610301.setContext(context).draw();
const fmtsmo6106069 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo61060v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61060v0ar = [];
const smo61031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo61031'] = smo61031;
smo61031.setAttribute('id', 'smo61031');
smo61060v0ar.push(smo61031);
const smo61032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61032'] = smo61032;
smo61032.setAttribute('id', 'smo61032');
const smo610320acc = new VF.Accidental('n');
smo61032.addModifier(smo610320acc, 0);
smo61060v0ar.push(smo61032);
const smo61033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo61033'] = smo61033;
smo61033.setAttribute('id', 'smo61033');
smo61060v0ar.push(smo61033);
const smo61034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61034'] = smo61034;
smo61034.setAttribute('id', 'smo61034');
smo61060v0ar.push(smo61034);
const smo61035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo61035'] = smo61035;
smo61035.setAttribute('id', 'smo61035');
smo61060v0ar.push(smo61035);
const smo61036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61036'] = smo61036;
smo61036.setAttribute('id', 'smo61036');
smo61060v0ar.push(smo61036);
const smo61037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo61037'] = smo61037;
smo61037.setAttribute('id', 'smo61037');
smo61060v0ar.push(smo61037);
const smo61038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61038'] = smo61038;
smo61038.setAttribute('id', 'smo61038');
smo61060v0ar.push(smo61038);
const smo61039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo61039'] = smo61039;
smo61039.setAttribute('id', 'smo61039');
smo61060v0ar.push(smo61039);
const smo61040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61040'] = smo61040;
smo61040.setAttribute('id', 'smo61040');
smo61060v0ar.push(smo61040);
const smo61041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo61041'] = smo61041;
smo61041.setAttribute('id', 'smo61041');
smo61060v0ar.push(smo61041);
const smo61042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61042'] = smo61042;
smo61042.setAttribute('id', 'smo61042');
smo61060v0ar.push(smo61042);
const smo61043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo61043'] = smo61043;
smo61043.setAttribute('id', 'smo61043');
smo61060v0ar.push(smo61043);
const smo61044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61044'] = smo61044;
smo61044.setAttribute('id', 'smo61044');
smo61060v0ar.push(smo61044);
const smo61045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo61045'] = smo61045;
smo61045.setAttribute('id', 'smo61045');
smo61060v0ar.push(smo61045);
const smo61046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61046'] = smo61046;
smo61046.setAttribute('id', 'smo61046');
smo61060v0ar.push(smo61046);
smo61060v0.addTickables(smo61060v0ar)
fmtsmo6106069.joinVoices([smo61060v0]);
const fmtsmo6606369 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo66063v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66063v0ar = [];
const smo66034 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
noteHash['smo66034'] = smo66034;
smo66034.setAttribute('id', 'smo66034');
smo66063v0ar.push(smo66034);
const smo66035 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66035'] = smo66035;
smo66035.setAttribute('id', 'smo66035');
smo66063v0ar.push(smo66035);
const smo66036 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66036'] = smo66036;
smo66036.setAttribute('id', 'smo66036');
smo66063v0ar.push(smo66036);
const smo66037 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66037'] = smo66037;
smo66037.setAttribute('id', 'smo66037');
smo66063v0ar.push(smo66037);
const smo66038 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66038'] = smo66038;
smo66038.setAttribute('id', 'smo66038');
const smo660380acc = new VF.Accidental('n');
smo66038.addModifier(smo660380acc, 0);
smo66063v0ar.push(smo66038);
const smo66039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66039'] = smo66039;
smo66039.setAttribute('id', 'smo66039');
smo66063v0ar.push(smo66039);
const smo66040 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66040'] = smo66040;
smo66040.setAttribute('id', 'smo66040');
smo66063v0ar.push(smo66040);
const smo66041 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66041'] = smo66041;
smo66041.setAttribute('id', 'smo66041');
smo66063v0ar.push(smo66041);
const smo66042 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
noteHash['smo66042'] = smo66042;
smo66042.setAttribute('id', 'smo66042');
smo66063v0ar.push(smo66042);
const smo66043 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66043'] = smo66043;
smo66043.setAttribute('id', 'smo66043');
smo66063v0ar.push(smo66043);
const smo66044 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66044'] = smo66044;
smo66044.setAttribute('id', 'smo66044');
smo66063v0ar.push(smo66044);
const smo66045 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66045'] = smo66045;
smo66045.setAttribute('id', 'smo66045');
smo66063v0ar.push(smo66045);
const smo66046 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo66046'] = smo66046;
smo66046.setAttribute('id', 'smo66046');
smo66063v0ar.push(smo66046);
const smo66047 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66047'] = smo66047;
smo66047.setAttribute('id', 'smo66047');
smo66063v0ar.push(smo66047);
const smo66048 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66048'] = smo66048;
smo66048.setAttribute('id', 'smo66048');
smo66063v0ar.push(smo66048);
const smo66049 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66049'] = smo66049;
smo66049.setAttribute('id', 'smo66049');
smo66063v0ar.push(smo66049);
smo66063v0.addTickables(smo66063v0ar)
fmtsmo6606369.joinVoices([smo66063v0]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo69154 = smo61031.getStemDirection();
smo61031.setStemDirection(dirsmo69154);
smo61032.setStemDirection(dirsmo69154);
smo61033.setStemDirection(dirsmo69154);
smo61034.setStemDirection(dirsmo69154);
const smo69154 = new VF.Beam([smo61031,smo61032,smo61033,smo61034]);
const dirsmo69155 = smo61035.getStemDirection();
smo61035.setStemDirection(dirsmo69155);
smo61036.setStemDirection(dirsmo69155);
smo61037.setStemDirection(dirsmo69155);
smo61038.setStemDirection(dirsmo69155);
const smo69155 = new VF.Beam([smo61035,smo61036,smo61037,smo61038]);
const dirsmo69156 = smo61039.getStemDirection();
smo61039.setStemDirection(dirsmo69156);
smo61040.setStemDirection(dirsmo69156);
smo61041.setStemDirection(dirsmo69156);
smo61042.setStemDirection(dirsmo69156);
const smo69156 = new VF.Beam([smo61039,smo61040,smo61041,smo61042]);
const dirsmo69157 = smo61043.getStemDirection();
smo61043.setStemDirection(dirsmo69157);
smo61044.setStemDirection(dirsmo69157);
smo61045.setStemDirection(dirsmo69157);
smo61046.setStemDirection(dirsmo69157);
const smo69157 = new VF.Beam([smo61043,smo61044,smo61045,smo61046]);
const dirsmo69160 = smo66034.getStemDirection();
smo66034.setStemDirection(dirsmo69160);
smo66035.setStemDirection(dirsmo69160);
smo66036.setStemDirection(dirsmo69160);
smo66037.setStemDirection(dirsmo69160);
const smo69160 = new VF.Beam([smo66034,smo66035,smo66036,smo66037]);
const dirsmo69161 = smo66038.getStemDirection();
smo66038.setStemDirection(dirsmo69161);
smo66039.setStemDirection(dirsmo69161);
smo66040.setStemDirection(dirsmo69161);
smo66041.setStemDirection(dirsmo69161);
const smo69161 = new VF.Beam([smo66038,smo66039,smo66040,smo66041]);
const dirsmo69162 = smo66042.getStemDirection();
smo66042.setStemDirection(dirsmo69162);
smo66043.setStemDirection(dirsmo69162);
smo66044.setStemDirection(dirsmo69162);
smo66045.setStemDirection(dirsmo69162);
const smo69162 = new VF.Beam([smo66042,smo66043,smo66044,smo66045]);
const dirsmo69163 = smo66046.getStemDirection();
smo66046.setStemDirection(dirsmo69163);
smo66047.setStemDirection(dirsmo69163);
smo66048.setStemDirection(dirsmo69163);
smo66049.setStemDirection(dirsmo69163);
const smo69163 = new VF.Beam([smo66046,smo66047,smo66048,smo66049]);
 
// formatting measures in staff group smo57677
fmtsmo6106069.format([smo61060v0,smo66063v0], 440);
const stavesmo61060 = new VF.Stave(596, 2180, 454);
stavesmo61060.setAttribute('id', 'stavesmo61060');
stavesmo61060.setBegBarType(VF.Barline.type.NONE);
stavesmo61060.setContext(context);
stavesmo61060.draw();
smo61060v0.draw(context, stavesmo61060);
smo69154.setContext(context);
smo69154.draw();
smo69155.setContext(context);
smo69155.draw();
smo69156.setContext(context);
smo69156.draw();
smo69157.setContext(context);
smo69157.draw();
const stavesmo66063 = new VF.Stave(596, 2270, 454);
stavesmo66063.setAttribute('id', 'stavesmo66063');
stavesmo66063.setBegBarType(VF.Barline.type.NONE);
stavesmo66063.setContext(context);
stavesmo66063.draw();
smo66063v0.draw(context, stavesmo66063);
smo69160.setContext(context);
smo69160.draw();
smo69161.setContext(context);
smo69161.draw();
smo69162.setContext(context);
smo69162.draw();
smo69163.setContext(context);
smo69163.draw();
const fmtsmo6109070 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo61090v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61090v0ar = [];
const smo61061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo61061'] = smo61061;
smo61061.setAttribute('id', 'smo61061');
smo61090v0ar.push(smo61061);
const smo61062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61062'] = smo61062;
smo61062.setAttribute('id', 'smo61062');
smo61090v0ar.push(smo61062);
const smo61063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61063'] = smo61063;
smo61063.setAttribute('id', 'smo61063');
const smo610630acc = new VF.Accidental('n');
smo61063.addModifier(smo610630acc, 0);
smo61090v0ar.push(smo61063);
const smo61064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61064'] = smo61064;
smo61064.setAttribute('id', 'smo61064');
smo61090v0ar.push(smo61064);
const smo61065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo61065'] = smo61065;
smo61065.setAttribute('id', 'smo61065');
smo61090v0ar.push(smo61065);
const smo61066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61066'] = smo61066;
smo61066.setAttribute('id', 'smo61066');
smo61090v0ar.push(smo61066);
const smo61067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61067'] = smo61067;
smo61067.setAttribute('id', 'smo61067');
smo61090v0ar.push(smo61067);
const smo61068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61068'] = smo61068;
smo61068.setAttribute('id', 'smo61068');
smo61090v0ar.push(smo61068);
const smo61069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo61069'] = smo61069;
smo61069.setAttribute('id', 'smo61069');
smo61090v0ar.push(smo61069);
const smo61070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61070'] = smo61070;
smo61070.setAttribute('id', 'smo61070');
smo61090v0ar.push(smo61070);
const smo61071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61071'] = smo61071;
smo61071.setAttribute('id', 'smo61071');
smo61090v0ar.push(smo61071);
const smo61072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61072'] = smo61072;
smo61072.setAttribute('id', 'smo61072');
smo61090v0ar.push(smo61072);
const smo61073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo61073'] = smo61073;
smo61073.setAttribute('id', 'smo61073');
smo61090v0ar.push(smo61073);
const smo61074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61074'] = smo61074;
smo61074.setAttribute('id', 'smo61074');
smo61090v0ar.push(smo61074);
const smo61075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo61075'] = smo61075;
smo61075.setAttribute('id', 'smo61075');
smo61090v0ar.push(smo61075);
const smo61076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61076'] = smo61076;
smo61076.setAttribute('id', 'smo61076');
smo61090v0ar.push(smo61076);
smo61090v0.addTickables(smo61090v0ar)
fmtsmo6109070.joinVoices([smo61090v0]);
const fmtsmo6609370 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo66093v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66093v0ar = [];
const smo66064 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/2/n"]}'))
noteHash['smo66064'] = smo66064;
smo66064.setAttribute('id', 'smo66064');
smo66093v0ar.push(smo66064);
const smo66065 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo66065'] = smo66065;
smo66065.setAttribute('id', 'smo66065');
smo66093v0ar.push(smo66065);
const smo66066 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66066'] = smo66066;
smo66066.setAttribute('id', 'smo66066');
smo66093v0ar.push(smo66066);
const smo66067 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo66067'] = smo66067;
smo66067.setAttribute('id', 'smo66067');
smo66093v0ar.push(smo66067);
const smo66068 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66068'] = smo66068;
smo66068.setAttribute('id', 'smo66068');
smo66093v0ar.push(smo66068);
const smo66069 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo66069'] = smo66069;
smo66069.setAttribute('id', 'smo66069');
smo66093v0ar.push(smo66069);
const smo66070 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66070'] = smo66070;
smo66070.setAttribute('id', 'smo66070');
smo66093v0ar.push(smo66070);
const smo66071 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo66071'] = smo66071;
smo66071.setAttribute('id', 'smo66071');
smo66093v0ar.push(smo66071);
const smo66072 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/2/n"]}'))
noteHash['smo66072'] = smo66072;
smo66072.setAttribute('id', 'smo66072');
smo66093v0ar.push(smo66072);
const smo66073 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo66073'] = smo66073;
smo66073.setAttribute('id', 'smo66073');
smo66093v0ar.push(smo66073);
const smo66074 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66074'] = smo66074;
smo66074.setAttribute('id', 'smo66074');
smo66093v0ar.push(smo66074);
const smo66075 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo66075'] = smo66075;
smo66075.setAttribute('id', 'smo66075');
smo66093v0ar.push(smo66075);
const smo66076 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66076'] = smo66076;
smo66076.setAttribute('id', 'smo66076');
smo66093v0ar.push(smo66076);
const smo66077 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo66077'] = smo66077;
smo66077.setAttribute('id', 'smo66077');
smo66093v0ar.push(smo66077);
const smo66078 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo66078'] = smo66078;
smo66078.setAttribute('id', 'smo66078');
smo66093v0ar.push(smo66078);
const smo66079 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
noteHash['smo66079'] = smo66079;
smo66079.setAttribute('id', 'smo66079');
smo66093v0ar.push(smo66079);
smo66093v0.addTickables(smo66093v0ar)
fmtsmo6609370.joinVoices([smo66093v0]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo69166 = smo61061.getStemDirection();
smo61061.setStemDirection(dirsmo69166);
smo61062.setStemDirection(dirsmo69166);
smo61063.setStemDirection(dirsmo69166);
smo61064.setStemDirection(dirsmo69166);
const smo69166 = new VF.Beam([smo61061,smo61062,smo61063,smo61064]);
const dirsmo69167 = smo61065.getStemDirection();
smo61065.setStemDirection(dirsmo69167);
smo61066.setStemDirection(dirsmo69167);
smo61067.setStemDirection(dirsmo69167);
smo61068.setStemDirection(dirsmo69167);
const smo69167 = new VF.Beam([smo61065,smo61066,smo61067,smo61068]);
const dirsmo69168 = smo61069.getStemDirection();
smo61069.setStemDirection(dirsmo69168);
smo61070.setStemDirection(dirsmo69168);
smo61071.setStemDirection(dirsmo69168);
smo61072.setStemDirection(dirsmo69168);
const smo69168 = new VF.Beam([smo61069,smo61070,smo61071,smo61072]);
const dirsmo69169 = smo61073.getStemDirection();
smo61073.setStemDirection(dirsmo69169);
smo61074.setStemDirection(dirsmo69169);
smo61075.setStemDirection(dirsmo69169);
smo61076.setStemDirection(dirsmo69169);
const smo69169 = new VF.Beam([smo61073,smo61074,smo61075,smo61076]);
const dirsmo69172 = smo66064.getStemDirection();
smo66064.setStemDirection(dirsmo69172);
smo66065.setStemDirection(dirsmo69172);
smo66066.setStemDirection(dirsmo69172);
smo66067.setStemDirection(dirsmo69172);
const smo69172 = new VF.Beam([smo66064,smo66065,smo66066,smo66067]);
const dirsmo69173 = smo66068.getStemDirection();
smo66068.setStemDirection(dirsmo69173);
smo66069.setStemDirection(dirsmo69173);
smo66070.setStemDirection(dirsmo69173);
smo66071.setStemDirection(dirsmo69173);
const smo69173 = new VF.Beam([smo66068,smo66069,smo66070,smo66071]);
const dirsmo69174 = smo66072.getStemDirection();
smo66072.setStemDirection(dirsmo69174);
smo66073.setStemDirection(dirsmo69174);
smo66074.setStemDirection(dirsmo69174);
smo66075.setStemDirection(dirsmo69174);
const smo69174 = new VF.Beam([smo66072,smo66073,smo66074,smo66075]);
const dirsmo69175 = smo66076.getStemDirection();
smo66076.setStemDirection(dirsmo69175);
smo66077.setStemDirection(dirsmo69175);
smo66078.setStemDirection(dirsmo69175);
smo66079.setStemDirection(dirsmo69175);
const smo69175 = new VF.Beam([smo66076,smo66077,smo66078,smo66079]);
 
// formatting measures in staff group smo57677
fmtsmo6109070.format([smo61090v0,smo66093v0], 386);
const stavesmo61090 = new VF.Stave(1050, 2180, 400);
stavesmo61090.setAttribute('id', 'stavesmo61090');
stavesmo61090.setBegBarType(VF.Barline.type.NONE);
stavesmo61090.setContext(context);
stavesmo61090.draw();
smo61090v0.draw(context, stavesmo61090);
smo69166.setContext(context);
smo69166.draw();
smo69167.setContext(context);
smo69167.draw();
smo69168.setContext(context);
smo69168.draw();
smo69169.setContext(context);
smo69169.draw();
const stavesmo66093 = new VF.Stave(1050, 2270, 400);
stavesmo66093.setAttribute('id', 'stavesmo66093');
stavesmo66093.setBegBarType(VF.Barline.type.NONE);
stavesmo66093.setContext(context);
stavesmo66093.draw();
smo66093v0.draw(context, stavesmo66093);
smo69172.setContext(context);
smo69172.draw();
smo69173.setContext(context);
smo69173.draw();
smo69174.setContext(context);
smo69174.draw();
smo69175.setContext(context);
smo69175.draw();
const fmtsmo6112071 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo61120v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61120v0ar = [];
const smo61091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/4/n"]}'))
noteHash['smo61091'] = smo61091;
smo61091.setAttribute('id', 'smo61091');
smo61120v0ar.push(smo61091);
const smo61092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61092'] = smo61092;
smo61092.setAttribute('id', 'smo61092');
smo61120v0ar.push(smo61092);
const smo61093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo61093'] = smo61093;
smo61093.setAttribute('id', 'smo61093');
smo61120v0ar.push(smo61093);
const smo61094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61094'] = smo61094;
smo61094.setAttribute('id', 'smo61094');
smo61120v0ar.push(smo61094);
const smo61095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo61095'] = smo61095;
smo61095.setAttribute('id', 'smo61095');
smo61120v0ar.push(smo61095);
const smo61096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61096'] = smo61096;
smo61096.setAttribute('id', 'smo61096');
smo61120v0ar.push(smo61096);
const smo61097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo61097'] = smo61097;
smo61097.setAttribute('id', 'smo61097');
smo61120v0ar.push(smo61097);
const smo61098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61098'] = smo61098;
smo61098.setAttribute('id', 'smo61098');
smo61120v0ar.push(smo61098);
const smo61099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/4/n"]}'))
noteHash['smo61099'] = smo61099;
smo61099.setAttribute('id', 'smo61099');
smo61120v0ar.push(smo61099);
const smo61100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61100'] = smo61100;
smo61100.setAttribute('id', 'smo61100');
smo61120v0ar.push(smo61100);
const smo61101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo61101'] = smo61101;
smo61101.setAttribute('id', 'smo61101');
smo61120v0ar.push(smo61101);
const smo61102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61102'] = smo61102;
smo61102.setAttribute('id', 'smo61102');
smo61120v0ar.push(smo61102);
const smo61103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo61103'] = smo61103;
smo61103.setAttribute('id', 'smo61103');
smo61120v0ar.push(smo61103);
const smo61104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61104'] = smo61104;
smo61104.setAttribute('id', 'smo61104');
smo61120v0ar.push(smo61104);
const smo61105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
noteHash['smo61105'] = smo61105;
smo61105.setAttribute('id', 'smo61105');
smo61120v0ar.push(smo61105);
const smo61106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo61106'] = smo61106;
smo61106.setAttribute('id', 'smo61106');
smo61120v0ar.push(smo61106);
smo61120v0.addTickables(smo61120v0ar)
fmtsmo6112071.joinVoices([smo61120v0]);
const fmtsmo6612371 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo66123v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo66123v0ar = [];
const smo66094 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/2/n"]}'))
noteHash['smo66094'] = smo66094;
smo66094.setAttribute('id', 'smo66094');
smo66123v0ar.push(smo66094);
const smo66095 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66095'] = smo66095;
smo66095.setAttribute('id', 'smo66095');
smo66123v0ar.push(smo66095);
const smo66096 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo66096'] = smo66096;
smo66096.setAttribute('id', 'smo66096');
smo66123v0ar.push(smo66096);
const smo66097 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66097'] = smo66097;
smo66097.setAttribute('id', 'smo66097');
smo66123v0ar.push(smo66097);
const smo66098 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66098'] = smo66098;
smo66098.setAttribute('id', 'smo66098');
smo66123v0ar.push(smo66098);
const smo66099 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66099'] = smo66099;
smo66099.setAttribute('id', 'smo66099');
smo66123v0ar.push(smo66099);
const smo66100 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo66100'] = smo66100;
smo66100.setAttribute('id', 'smo66100');
smo66123v0ar.push(smo66100);
const smo66101 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66101'] = smo66101;
smo66101.setAttribute('id', 'smo66101');
smo66123v0ar.push(smo66101);
const smo66102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/2/n"]}'))
noteHash['smo66102'] = smo66102;
smo66102.setAttribute('id', 'smo66102');
smo66123v0ar.push(smo66102);
const smo66103 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66103'] = smo66103;
smo66103.setAttribute('id', 'smo66103');
smo66123v0ar.push(smo66103);
const smo66104 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo66104'] = smo66104;
smo66104.setAttribute('id', 'smo66104');
smo66123v0ar.push(smo66104);
const smo66105 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66105'] = smo66105;
smo66105.setAttribute('id', 'smo66105');
smo66123v0ar.push(smo66105);
const smo66106 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo66106'] = smo66106;
smo66106.setAttribute('id', 'smo66106');
smo66123v0ar.push(smo66106);
const smo66107 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66107'] = smo66107;
smo66107.setAttribute('id', 'smo66107');
smo66123v0ar.push(smo66107);
const smo66108 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo66108'] = smo66108;
smo66108.setAttribute('id', 'smo66108');
smo66123v0ar.push(smo66108);
const smo66109 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo66109'] = smo66109;
smo66109.setAttribute('id', 'smo66109');
smo66123v0ar.push(smo66109);
smo66123v0.addTickables(smo66123v0ar)
fmtsmo6612371.joinVoices([smo66123v0]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo69178 = smo61091.getStemDirection();
smo61091.setStemDirection(dirsmo69178);
smo61092.setStemDirection(dirsmo69178);
smo61093.setStemDirection(dirsmo69178);
smo61094.setStemDirection(dirsmo69178);
const smo69178 = new VF.Beam([smo61091,smo61092,smo61093,smo61094]);
const dirsmo69179 = smo61095.getStemDirection();
smo61095.setStemDirection(dirsmo69179);
smo61096.setStemDirection(dirsmo69179);
smo61097.setStemDirection(dirsmo69179);
smo61098.setStemDirection(dirsmo69179);
const smo69179 = new VF.Beam([smo61095,smo61096,smo61097,smo61098]);
const dirsmo69180 = smo61099.getStemDirection();
smo61099.setStemDirection(dirsmo69180);
smo61100.setStemDirection(dirsmo69180);
smo61101.setStemDirection(dirsmo69180);
smo61102.setStemDirection(dirsmo69180);
const smo69180 = new VF.Beam([smo61099,smo61100,smo61101,smo61102]);
const dirsmo69181 = smo61103.getStemDirection();
smo61103.setStemDirection(dirsmo69181);
smo61104.setStemDirection(dirsmo69181);
smo61105.setStemDirection(dirsmo69181);
smo61106.setStemDirection(dirsmo69181);
const smo69181 = new VF.Beam([smo61103,smo61104,smo61105,smo61106]);
const dirsmo69184 = smo66094.getStemDirection();
smo66094.setStemDirection(dirsmo69184);
smo66095.setStemDirection(dirsmo69184);
smo66096.setStemDirection(dirsmo69184);
smo66097.setStemDirection(dirsmo69184);
const smo69184 = new VF.Beam([smo66094,smo66095,smo66096,smo66097]);
const dirsmo69185 = smo66098.getStemDirection();
smo66098.setStemDirection(dirsmo69185);
smo66099.setStemDirection(dirsmo69185);
smo66100.setStemDirection(dirsmo69185);
smo66101.setStemDirection(dirsmo69185);
const smo69185 = new VF.Beam([smo66098,smo66099,smo66100,smo66101]);
const dirsmo69186 = smo66102.getStemDirection();
smo66102.setStemDirection(dirsmo69186);
smo66103.setStemDirection(dirsmo69186);
smo66104.setStemDirection(dirsmo69186);
smo66105.setStemDirection(dirsmo69186);
const smo69186 = new VF.Beam([smo66102,smo66103,smo66104,smo66105]);
const dirsmo69187 = smo66106.getStemDirection();
smo66106.setStemDirection(dirsmo69187);
smo66107.setStemDirection(dirsmo69187);
smo66108.setStemDirection(dirsmo69187);
smo66109.setStemDirection(dirsmo69187);
const smo69187 = new VF.Beam([smo66106,smo66107,smo66108,smo66109]);
 
// formatting measures in staff group smo57677
fmtsmo6112071.format([smo61120v0,smo66123v0], 342);
const stavesmo61120 = new VF.Stave(1450, 2180, 356);
stavesmo61120.setAttribute('id', 'stavesmo61120');
stavesmo61120.setBegBarType(VF.Barline.type.NONE);
stavesmo61120.setContext(context);
stavesmo61120.draw();
smo61120v0.draw(context, stavesmo61120);
smo69178.setContext(context);
smo69178.draw();
smo69179.setContext(context);
smo69179.draw();
smo69180.setContext(context);
smo69180.draw();
smo69181.setContext(context);
smo69181.draw();
const stavesmo66123 = new VF.Stave(1450, 2270, 356);
stavesmo66123.setAttribute('id', 'stavesmo66123');
stavesmo66123.setBegBarType(VF.Barline.type.NONE);
stavesmo66123.setContext(context);
stavesmo66123.draw();
smo66123v0.draw(context, stavesmo66123);
smo69184.setContext(context);
smo69184.draw();
smo69185.setContext(context);
smo69185.draw();
smo69186.setContext(context);
smo69186.draw();
smo69187.setContext(context);
smo69187.draw();
const rightsmo57677stavesmo611201 = new VF.StaveConnector(stavesmo61120, stavesmo66123).setType(0);
rightsmo57677stavesmo611201.setContext(context).draw();
const smo70837 = new VF.StaveTie({ first_note: smo60324, last_note: smo60325, first_indices: [0], last_indices: [0]});
smo70837.setContext(context).draw();
const smo70838 = new VF.StaveTie({ first_note: smo60346, last_note: smo60347, first_indices: [0], last_indices: [0]});
smo70838.setContext(context).draw();
const smo70839 = new VF.StaveTie({ first_note: smo60414, last_note: smo60415, first_indices: [0], last_indices: [0]});
smo70839.setContext(context).draw();
const smo70840 = new VF.StaveTie({ first_note: smo60422, last_note: null, first_indices: [0], last_indices: [0]});
smo70840.setContext(context).draw();
const smo70841 = new VF.StaveTie({ first_note: null, last_note: smo60447, first_indices: [0], last_indices: [0]});
smo70841.setContext(context).draw();
const smo70842 = new VF.StaveTie({ first_note: smo60450, last_note: smo60451, first_indices: [0], last_indices: [0]});
smo70842.setContext(context).draw();
const smo70843 = new VF.StaveTie({ first_note: smo60472, last_note: smo60473, first_indices: [0], last_indices: [0]});
smo70843.setContext(context).draw();
const smo70844 = new VF.StaveTie({ first_note: smo60485, last_note: smo60486, first_indices: [0], last_indices: [0]});
smo70844.setContext(context).draw();
const smo70845 = new VF.StaveTie({ first_note: smo60577, last_note: smo60578, first_indices: [0], last_indices: [0]});
smo70845.setContext(context).draw();
const smo70846 = new VF.StaveTie({ first_note: smo60608, last_note: null, first_indices: [0], last_indices: [0]});
smo70846.setContext(context).draw();
const smo70847 = new VF.StaveTie({ first_note: null, last_note: smo60633, first_indices: [0], last_indices: [0]});
smo70847.setContext(context).draw();
const smo70848 = new VF.StaveTie({ first_note: smo60610, last_note: smo60611, first_indices: [0], last_indices: [0]});
smo70848.setContext(context).draw();
const smo70849 = new VF.StaveTie({ first_note: smo60649, last_note: smo60650, first_indices: [0], last_indices: [0]});
smo70849.setContext(context).draw();
const smo70850 = new VF.StaveTie({ first_note: smo60677, last_note: smo60678, first_indices: [0], last_indices: [0]});
smo70850.setContext(context).draw();
const smo70851 = new VF.StaveTie({ first_note: smo60724, last_note: smo60725, first_indices: [0], last_indices: [0]});
smo70851.setContext(context).draw();
const smo70852 = new VF.StaveTie({ first_note: smo60766, last_note: smo60792, first_indices: [0], last_indices: [0]});
smo70852.setContext(context).draw();
const smo70853 = new VF.StaveTie({ first_note: smo60775, last_note: smo60776, first_indices: [0], last_indices: [0]});
smo70853.setContext(context).draw();
const smo70854 = new VF.StaveTie({ first_note: smo60703, last_note: smo60704, first_indices: [0], last_indices: [0]});
smo70854.setContext(context).draw();
const smo70855 = new VF.StaveTie({ first_note: smo65452, last_note: smo65453, first_indices: [0], last_indices: [0]});
smo70855.setContext(context).draw();
const smo70856 = new VF.StaveTie({ first_note: smo65699, last_note: smo65700, first_indices: [0], last_indices: [0]});
smo70856.setContext(context).draw();
const smo70857 = new VF.StaveTie({ first_note: smo65702, last_note: smo65731, first_indices: [0], last_indices: [0]});
smo70857.setContext(context).draw();
}
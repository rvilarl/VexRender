// @@ Postillionlied p 1/3  by Franz Grothe
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1421.487603305785');
svg.setAttributeNS('', 'height', '1839.5721925133685');
svg.setAttributeNS('', 'viewBox', '0 0 1343 1738');
//
// create the musical objects
VF.setMusicFont("Leland","Bravura","Gonville","Custom");
const fmtsmo2248600 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo224860v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo224860v0ar = [];
const smo224844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo224844.setAttribute('id', 'smo224844');
smo224844.addModifier(new VF.Dot(), 0);
smo224860v0ar.push(smo224844);
smo224860v0.addTickables(smo224860v0ar)
fmtsmo2248600.joinVoices([smo224860v0]);
const fmtsmo2262600 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo226260v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226260v0ar = [];
const smo226242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo226242.setAttribute('id', 'smo226242');
smo226242.addModifier(new VF.Dot(), 0);
smo226260v0ar.push(smo226242);
const smo226243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo226243.setAttribute('id', 'smo226243');
smo226260v0ar.push(smo226243);
const smo226244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo226244.setAttribute('id', 'smo226244');
smo226260v0ar.push(smo226244);
smo226260v0.addTickables(smo226260v0ar)
fmtsmo2262600.joinVoices([smo226260v0]);
const fmtsmo2273810 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo227381v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227381v0ar = [];
const smo227363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo227363.setAttribute('id', 'smo227363');
smo227363.addModifier(new VF.Dot(), 0);
smo227381v0ar.push(smo227363);
const smo227364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo227364.setAttribute('id', 'smo227364');
smo227381v0ar.push(smo227364);
const smo227365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo227365.setAttribute('id', 'smo227365');
smo227381v0ar.push(smo227365);
smo227381v0.addTickables(smo227381v0ar)
fmtsmo2273810.joinVoices([smo227381v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo2248600.format([smo224860v0,smo226260v0,smo227381v0], 105);
const stavesmo224860 = new VF.Stave(66, 119, 202);
stavesmo224860.setAttribute('id', 'stavesmo224860');
stavesmo224860.setBegBarType(1);
stavesmo224860.setTempo(JSON.parse('{"duration":"4","dots":1,"bpm":120}'), -1 * 0);
stavesmo224860.addClef('treble');
stavesmo224860.addTimeSignature('6/8');
const keysmo224860 = new VF.KeySignature('G');
keysmo224860.addToStave(stavesmo224860);
stavesmo224860.setContext(context);
stavesmo224860.draw();
smo224860v0.draw(context, stavesmo224860);
const stavesmo226260 = new VF.Stave(66, 226, 202);
stavesmo226260.setAttribute('id', 'stavesmo226260');
stavesmo226260.setBegBarType(1);
stavesmo226260.addClef('treble');
stavesmo226260.addTimeSignature('6/8');
const keysmo226260 = new VF.KeySignature('G');
keysmo226260.addToStave(stavesmo226260);
stavesmo226260.setContext(context);
stavesmo226260.draw();
smo226260v0.draw(context, stavesmo226260);
const stavesmo227381 = new VF.Stave(66, 301, 202);
stavesmo227381.setAttribute('id', 'stavesmo227381');
stavesmo227381.setBegBarType(1);
stavesmo227381.addClef('treble');
stavesmo227381.addTimeSignature('6/8');
const keysmo227381 = new VF.KeySignature('G');
keysmo227381.addToStave(stavesmo227381);
stavesmo227381.setContext(context);
stavesmo227381.draw();
smo227381v0.draw(context, stavesmo227381);
const leftsmo228595stavesmo2248602 = new VF.StaveConnector(stavesmo224860, stavesmo227381).setType(1);
leftsmo228595stavesmo2248602.setContext(context).draw();
const fmtsmo2248771 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo224877v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo224877v0ar = [];
const smo224861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo224861.setAttribute('id', 'smo224861');
smo224861.addModifier(new VF.Dot(), 0);
smo224877v0ar.push(smo224861);
smo224877v0.addTickables(smo224877v0ar)
fmtsmo2248771.joinVoices([smo224877v0]);
const fmtsmo2262781 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo226278v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226278v0ar = [];
const smo226261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
smo226261.setAttribute('id', 'smo226261');
smo226261.addModifier(new VF.Dot(), 0);
smo226278v0ar.push(smo226261);
const smo226262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo226262.setAttribute('id', 'smo226262');
smo226262.addModifier(new VF.Dot(), 0);
smo226278v0ar.push(smo226262);
smo226278v0.addTickables(smo226278v0ar)
fmtsmo2262781.joinVoices([smo226278v0]);
const fmtsmo2273991 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo227399v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227399v0ar = [];
const smo227382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo227382.setAttribute('id', 'smo227382');
smo227382.addModifier(new VF.Dot(), 0);
smo227399v0ar.push(smo227382);
const smo227383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo227383.setAttribute('id', 'smo227383');
smo227383.addModifier(new VF.Dot(), 0);
smo227399v0ar.push(smo227383);
smo227399v0.addTickables(smo227399v0ar)
fmtsmo2273991.joinVoices([smo227399v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo2248771.format([smo224877v0,smo226278v0,smo227399v0], 75);
const stavesmo224877 = new VF.Stave(268, 119, 89);
stavesmo224877.setAttribute('id', 'stavesmo224877');
stavesmo224877.setBegBarType(VF.Barline.type.NONE);
stavesmo224877.setContext(context);
stavesmo224877.draw();
smo224877v0.draw(context, stavesmo224877);
const stavesmo226278 = new VF.Stave(268, 226, 89);
stavesmo226278.setAttribute('id', 'stavesmo226278');
stavesmo226278.setBegBarType(VF.Barline.type.NONE);
stavesmo226278.setContext(context);
stavesmo226278.draw();
smo226278v0.draw(context, stavesmo226278);
const stavesmo227399 = new VF.Stave(268, 301, 89);
stavesmo227399.setAttribute('id', 'stavesmo227399');
stavesmo227399.setBegBarType(VF.Barline.type.NONE);
stavesmo227399.setContext(context);
stavesmo227399.draw();
smo227399v0.draw(context, stavesmo227399);
const fmtsmo2248942 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo224894v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo224894v0ar = [];
const smo224878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo224878.setAttribute('id', 'smo224878');
smo224878.addModifier(new VF.Dot(), 0);
smo224894v0ar.push(smo224878);
smo224894v0.addTickables(smo224894v0ar)
fmtsmo2248942.joinVoices([smo224894v0]);
const fmtsmo2262992 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo226299v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226299v0ar = [];
const smo226279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo226279.setAttribute('id', 'smo226279');
smo226299v0ar.push(smo226279);
const smo226280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo226280.setAttribute('id', 'smo226280');
smo226299v0ar.push(smo226280);
const smo226281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo226281.setAttribute('id', 'smo226281');
smo226299v0ar.push(smo226281);
const smo226282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo226282.setAttribute('id', 'smo226282');
smo226299v0ar.push(smo226282);
const smo226283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo226283.setAttribute('id', 'smo226283');
smo226299v0ar.push(smo226283);
smo226299v0.addTickables(smo226299v0ar)
fmtsmo2262992.joinVoices([smo226299v0]);
const fmtsmo2274202 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo227420v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227420v0ar = [];
const smo227400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo227400.setAttribute('id', 'smo227400');
smo227420v0ar.push(smo227400);
const smo227401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo227401.setAttribute('id', 'smo227401');
smo227420v0ar.push(smo227401);
const smo227402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo227402.setAttribute('id', 'smo227402');
smo227420v0ar.push(smo227402);
const smo227403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo227403.setAttribute('id', 'smo227403');
smo227420v0ar.push(smo227403);
const smo227404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo227404.setAttribute('id', 'smo227404');
smo227420v0ar.push(smo227404);
smo227420v0.addTickables(smo227420v0ar)
fmtsmo2274202.joinVoices([smo227420v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234561 = smo226279.getStemDirection();
smo226279.setStemDirection(dirsmo234561);
smo226280.setStemDirection(dirsmo234561);
smo226281.setStemDirection(dirsmo234561);
const smo234561 = new VF.Beam([smo226279,smo226280,smo226281]);
const dirsmo234564 = smo227400.getStemDirection();
smo227400.setStemDirection(dirsmo234564);
smo227401.setStemDirection(dirsmo234564);
smo227402.setStemDirection(dirsmo234564);
const smo234564 = new VF.Beam([smo227400,smo227401,smo227402]);
 
// formatting measures in staff group smo228595
fmtsmo2248942.format([smo224894v0,smo226299v0,smo227420v0], 146);
const stavesmo224894 = new VF.Stave(357, 119, 160);
stavesmo224894.setAttribute('id', 'stavesmo224894');
stavesmo224894.setBegBarType(VF.Barline.type.NONE);
stavesmo224894.setContext(context);
stavesmo224894.draw();
smo224894v0.draw(context, stavesmo224894);
const stavesmo226299 = new VF.Stave(357, 226, 160);
stavesmo226299.setAttribute('id', 'stavesmo226299');
stavesmo226299.setBegBarType(VF.Barline.type.NONE);
stavesmo226299.setContext(context);
stavesmo226299.draw();
smo226299v0.draw(context, stavesmo226299);
smo234561.setContext(context);
smo234561.draw();
const stavesmo227420 = new VF.Stave(357, 301, 160);
stavesmo227420.setAttribute('id', 'stavesmo227420');
stavesmo227420.setBegBarType(VF.Barline.type.NONE);
stavesmo227420.setContext(context);
stavesmo227420.draw();
smo227420v0.draw(context, stavesmo227420);
smo234564.setContext(context);
smo234564.draw();
const fmtsmo2249113 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo224911v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo224911v0ar = [];
const smo224895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo224895.setAttribute('id', 'smo224895');
smo224895.addModifier(new VF.Dot(), 0);
smo224911v0ar.push(smo224895);
smo224911v0.addTickables(smo224911v0ar)
fmtsmo2249113.joinVoices([smo224911v0]);
const fmtsmo2263203 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo226320v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226320v0ar = [];
const smo226300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo226300.setAttribute('id', 'smo226300');
smo226320v0ar.push(smo226300);
const smo226301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo226301.setAttribute('id', 'smo226301');
smo226320v0ar.push(smo226301);
const smo226302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo226302.setAttribute('id', 'smo226302');
smo226320v0ar.push(smo226302);
const smo226303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo226303.setAttribute('id', 'smo226303');
smo226320v0ar.push(smo226303);
const smo226304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo226304.setAttribute('id', 'smo226304');
smo226320v0ar.push(smo226304);
smo226320v0.addTickables(smo226320v0ar)
fmtsmo2263203.joinVoices([smo226320v0]);
const fmtsmo2274403 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo227440v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227440v0ar = [];
const smo227421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo227421.setAttribute('id', 'smo227421');
smo227440v0ar.push(smo227421);
const smo227422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo227422.setAttribute('id', 'smo227422');
smo227440v0ar.push(smo227422);
const smo227423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo227423.setAttribute('id', 'smo227423');
smo227440v0ar.push(smo227423);
const smo227424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n","f#/3/n"]}'))
smo227424.setAttribute('id', 'smo227424');
smo227424.addModifier(new VF.Dot(), 0);
smo227424.addModifier(new VF.Dot(), 1);
smo227440v0ar.push(smo227424);
smo227440v0.addTickables(smo227440v0ar)
fmtsmo2274403.joinVoices([smo227440v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234569 = smo226300.getStemDirection();
smo226300.setStemDirection(dirsmo234569);
smo226301.setStemDirection(dirsmo234569);
smo226302.setStemDirection(dirsmo234569);
const smo234569 = new VF.Beam([smo226300,smo226301,smo226302]);
const dirsmo234572 = smo227421.getStemDirection();
smo227421.setStemDirection(dirsmo234572);
smo227422.setStemDirection(dirsmo234572);
smo227423.setStemDirection(dirsmo234572);
const smo234572 = new VF.Beam([smo227421,smo227422,smo227423]);
 
// formatting measures in staff group smo228595
fmtsmo2249113.format([smo224911v0,smo226320v0,smo227440v0], 160);
const stavesmo224911 = new VF.Stave(517, 119, 174);
stavesmo224911.setAttribute('id', 'stavesmo224911');
stavesmo224911.setBegBarType(VF.Barline.type.NONE);
stavesmo224911.setContext(context);
stavesmo224911.draw();
smo224911v0.draw(context, stavesmo224911);
const stavesmo226320 = new VF.Stave(517, 226, 174);
stavesmo226320.setAttribute('id', 'stavesmo226320');
stavesmo226320.setBegBarType(VF.Barline.type.NONE);
stavesmo226320.setContext(context);
stavesmo226320.draw();
smo226320v0.draw(context, stavesmo226320);
smo234569.setContext(context);
smo234569.draw();
const stavesmo227440 = new VF.Stave(517, 301, 174);
stavesmo227440.setAttribute('id', 'stavesmo227440');
stavesmo227440.setBegBarType(VF.Barline.type.NONE);
stavesmo227440.setContext(context);
stavesmo227440.draw();
smo227440v0.draw(context, stavesmo227440);
smo234572.setContext(context);
smo234572.draw();
const fmtsmo2249284 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo224928v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo224928v0ar = [];
const smo224912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo224912.setAttribute('id', 'smo224912');
smo224912.addModifier(new VF.Dot(), 0);
smo224928v0ar.push(smo224912);
smo224928v0.addTickables(smo224928v0ar)
fmtsmo2249284.joinVoices([smo224928v0]);
const fmtsmo2263374 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo226337v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226337v0ar = [];
const smo226321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo226321.setAttribute('id', 'smo226321');
smo226321.addModifier(new VF.Dot(), 0);
smo226337v0ar.push(smo226321);
smo226337v0.addTickables(smo226337v0ar)
fmtsmo2263374.joinVoices([smo226337v0]);
const fmtsmo2274604 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo227460v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227460v0ar = [];
const smo227441 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227441.setAttribute('id', 'smo227441');
smo227460v0ar.push(smo227441);
const smo227442 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227442.setAttribute('id', 'smo227442');
smo227460v0ar.push(smo227442);
const smo227443 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227443.setAttribute('id', 'smo227443');
smo227460v0ar.push(smo227443);
const smo227444 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227444.setAttribute('id', 'smo227444');
smo227460v0ar.push(smo227444);
smo227460v0.addTickables(smo227460v0ar)
fmtsmo2274604.joinVoices([smo227460v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo2249284.format([smo224928v0,smo226337v0,smo227460v0], 127);
const stavesmo224928 = new VF.Stave(691, 119, 183);
stavesmo224928.setAttribute('id', 'stavesmo224928');
stavesmo224928.setBegBarType(4);
stavesmo224928.setContext(context);
stavesmo224928.draw();
smo224928v0.draw(context, stavesmo224928);
const stavesmo226337 = new VF.Stave(691, 226, 183);
stavesmo226337.setAttribute('id', 'stavesmo226337');
stavesmo226337.setBegBarType(4);
stavesmo226337.setContext(context);
stavesmo226337.draw();
smo226337v0.draw(context, stavesmo226337);
const stavesmo227460 = new VF.Stave(691, 301, 183);
stavesmo227460.setAttribute('id', 'stavesmo227460');
stavesmo227460.setBegBarType(4);
stavesmo227460.addClef('bass');
stavesmo227460.setContext(context);
stavesmo227460.draw();
smo227460v0.draw(context, stavesmo227460);
const fmtsmo2249475 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo224947v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo224947v0ar = [];
const smo224929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo224929.setAttribute('id', 'smo224929');
smo224929.addModifier(new VF.Dot(), 0);
smo224947v0ar.push(smo224929);
const smo224930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo224930.setAttribute('id', 'smo224930');
smo224930.addModifier(new VF.Dot(), 0);
const smo224931 = new VF.Annotation('Mein');
smo224931.setAttribute('id', 'smo224931');
smo224931.setFont('Merriweather', 12, 'normal');
smo224931.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo224930.addModifier(smo224931);
smo224931.addClass('lyric lyric-0');
smo224947v0ar.push(smo224930);
smo224947v0.addTickables(smo224947v0ar)
fmtsmo2249475.joinVoices([smo224947v0]);
const fmtsmo2263555 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo226355v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226355v0ar = [];
const smo226338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo226338.setAttribute('id', 'smo226338');
smo226338.addModifier(new VF.Dot(), 0);
smo226355v0ar.push(smo226338);
const smo226339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo226339.setAttribute('id', 'smo226339');
smo226339.addModifier(new VF.Dot(), 0);
smo226355v0ar.push(smo226339);
smo226355v0.addTickables(smo226355v0ar)
fmtsmo2263555.joinVoices([smo226355v0]);
const fmtsmo2274805 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo227480v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227480v0ar = [];
const smo227461 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227461.setAttribute('id', 'smo227461');
smo227480v0ar.push(smo227461);
const smo227462 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227462.setAttribute('id', 'smo227462');
smo227480v0ar.push(smo227462);
const smo227463 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227463.setAttribute('id', 'smo227463');
smo227480v0ar.push(smo227463);
const smo227464 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227464.setAttribute('id', 'smo227464');
smo227480v0ar.push(smo227464);
smo227480v0.addTickables(smo227480v0ar)
fmtsmo2274805.joinVoices([smo227480v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo2249475.format([smo224947v0,smo226355v0,smo227480v0], 155);
const stavesmo224947 = new VF.Stave(874, 119, 169);
stavesmo224947.setAttribute('id', 'stavesmo224947');
stavesmo224947.setBegBarType(VF.Barline.type.NONE);
stavesmo224947.setContext(context);
stavesmo224947.draw();
smo224947v0.draw(context, stavesmo224947);
const stavesmo226355 = new VF.Stave(874, 226, 169);
stavesmo226355.setAttribute('id', 'stavesmo226355');
stavesmo226355.setBegBarType(VF.Barline.type.NONE);
stavesmo226355.setContext(context);
stavesmo226355.draw();
smo226355v0.draw(context, stavesmo226355);
const stavesmo227480 = new VF.Stave(874, 301, 169);
stavesmo227480.setAttribute('id', 'stavesmo227480');
stavesmo227480.setBegBarType(VF.Barline.type.NONE);
stavesmo227480.setContext(context);
stavesmo227480.draw();
smo227480v0.draw(context, stavesmo227480);
const fmtsmo2249656 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo224965v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo224965v0ar = [];
const smo224948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo224948.setAttribute('id', 'smo224948');
smo224948.addModifier(new VF.Dot(), 0);
const smo224949 = new VF.Annotation('Shatz,');
smo224949.setAttribute('id', 'smo224949');
smo224949.setFont('Merriweather', 12, 'normal');
smo224949.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo224948.addModifier(smo224949);
smo224949.addClass('lyric lyric-0');
smo224965v0ar.push(smo224948);
smo224965v0.addTickables(smo224965v0ar)
fmtsmo2249656.joinVoices([smo224965v0]);
const fmtsmo2263726 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo226372v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226372v0ar = [];
const smo226356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","f#/4/n"]}'))
smo226356.setAttribute('id', 'smo226356');
smo226356.addModifier(new VF.Dot(), 0);
smo226356.addModifier(new VF.Dot(), 1);
smo226372v0ar.push(smo226356);
smo226372v0.addTickables(smo226372v0ar)
fmtsmo2263726.joinVoices([smo226372v0]);
const fmtsmo2275006 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo227500v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227500v0ar = [];
const smo227481 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227481.setAttribute('id', 'smo227481');
smo227500v0ar.push(smo227481);
const smo227482 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227482.setAttribute('id', 'smo227482');
smo227500v0ar.push(smo227482);
const smo227483 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227483.setAttribute('id', 'smo227483');
smo227500v0ar.push(smo227483);
const smo227484 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227484.setAttribute('id', 'smo227484');
smo227500v0ar.push(smo227484);
smo227500v0.addTickables(smo227500v0ar)
fmtsmo2275006.joinVoices([smo227500v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo2249656.format([smo224965v0,smo226372v0,smo227500v0], 154);
const stavesmo224965 = new VF.Stave(1043, 119, 168);
stavesmo224965.setAttribute('id', 'stavesmo224965');
stavesmo224965.setBegBarType(VF.Barline.type.NONE);
stavesmo224965.setContext(context);
stavesmo224965.draw();
smo224965v0.draw(context, stavesmo224965);
const stavesmo226372 = new VF.Stave(1043, 226, 168);
stavesmo226372.setAttribute('id', 'stavesmo226372');
stavesmo226372.setBegBarType(VF.Barline.type.NONE);
stavesmo226372.setContext(context);
stavesmo226372.draw();
smo226372v0.draw(context, stavesmo226372);
const stavesmo227500 = new VF.Stave(1043, 301, 168);
stavesmo227500.setAttribute('id', 'stavesmo227500');
stavesmo227500.setBegBarType(VF.Barline.type.NONE);
stavesmo227500.setContext(context);
stavesmo227500.draw();
smo227500v0.draw(context, stavesmo227500);
const rightsmo228595stavesmo2249652 = new VF.StaveConnector(stavesmo224965, stavesmo227500).setType(0);
rightsmo228595stavesmo2249652.setContext(context).draw();
const fmtsmo2249957 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo224995v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo224995v0ar = [];
const smo224966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo224966.setAttribute('id', 'smo224966');
smo224995v0ar.push(smo224966);
const smo224968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo224968.setAttribute('id', 'smo224968');
const smo224969 = new VF.Annotation('der');
smo224969.setAttribute('id', 'smo224969');
smo224969.setFont('Merriweather', 12, 'normal');
smo224969.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo224968.addModifier(smo224969);
smo224969.addClass('lyric lyric-0');
const smo224970 = new VF.Annotation('hat');
smo224970.setAttribute('id', 'smo224970');
smo224970.setFont('Merriweather', 12, 'normal');
smo224970.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo224968.addModifier(smo224970);
smo224970.addClass('lyric lyric-1');
smo224995v0ar.push(smo224968);
const smo224971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo224971.setAttribute('id', 'smo224971');
const smo224972 = new VF.Annotation('is');
smo224972.setAttribute('id', 'smo224972');
smo224972.setFont('Merriweather', 12, 'normal');
smo224972.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo224971.addModifier(smo224972);
smo224972.addClass('lyric lyric-0');
const smo224973 = new VF.Annotation('vie');
smo224973.setAttribute('id', 'smo224973');
smo224973.setFont('Merriweather', 12, 'normal');
smo224973.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo224971.addModifier(smo224973);
smo224973.addClass('lyric lyric-1 lyric-hyphen');
smo224995v0ar.push(smo224971);
const smo224974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo224974.setAttribute('id', 'smo224974');
const smo224975 = new VF.Annotation('Po');
smo224975.setAttribute('id', 'smo224975');
smo224975.setFont('Merriweather', 12, 'normal');
smo224975.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo224974.addModifier(smo224975);
smo224975.addClass('lyric lyric-0 lyric-hyphen');
const smo224976 = new VF.Annotation('les');
smo224976.setAttribute('id', 'smo224976');
smo224976.setFont('Merriweather', 12, 'normal');
smo224976.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo224974.addModifier(smo224976);
smo224976.addClass('lyric lyric-1');
smo224995v0ar.push(smo224974);
const smo224977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo224977.setAttribute('id', 'smo224977');
const smo224978 = new VF.Annotation('stil');
smo224978.setAttribute('id', 'smo224978');
smo224978.setFont('Merriweather', 12, 'normal');
smo224978.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo224977.addModifier(smo224978);
smo224978.addClass('lyric lyric-0 lyric-hyphen');
const smo224979 = new VF.Annotation('ge');
smo224979.setAttribute('id', 'smo224979');
smo224979.setFont('Merriweather', 12, 'normal');
smo224979.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo224977.addModifier(smo224979);
smo224979.addClass('lyric lyric-1 lyric-hyphen');
smo224995v0ar.push(smo224977);
smo224995v0.addTickables(smo224995v0ar)
fmtsmo2249957.joinVoices([smo224995v0]);
const fmtsmo2263897 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo226389v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226389v0ar = [];
const smo226373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","f#/4/n"]}'))
smo226373.setAttribute('id', 'smo226373');
smo226373.addModifier(new VF.Dot(), 0);
smo226373.addModifier(new VF.Dot(), 1);
smo226389v0ar.push(smo226373);
smo226389v0.addTickables(smo226389v0ar)
fmtsmo2263897.joinVoices([smo226389v0]);
const fmtsmo2275207 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo227520v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227520v0ar = [];
const smo227501 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227501.setAttribute('id', 'smo227501');
smo227520v0ar.push(smo227501);
const smo227502 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227502.setAttribute('id', 'smo227502');
smo227520v0ar.push(smo227502);
const smo227503 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227503.setAttribute('id', 'smo227503');
smo227520v0ar.push(smo227503);
const smo227504 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227504.setAttribute('id', 'smo227504');
smo227520v0ar.push(smo227504);
smo227520v0.addTickables(smo227520v0ar)
fmtsmo2275207.joinVoices([smo227520v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234597 = smo224971.getStemDirection();
smo224971.setStemDirection(dirsmo234597);
smo224974.setStemDirection(dirsmo234597);
smo224977.setStemDirection(dirsmo234597);
const smo234597 = new VF.Beam([smo224971,smo224974,smo224977]);
 
// formatting measures in staff group smo228595
fmtsmo2249957.format([smo224995v0,smo226389v0,smo227520v0], 232);
const stavesmo224995 = new VF.Stave(66, 451, 306);
stavesmo224995.setAttribute('id', 'stavesmo224995');
stavesmo224995.setBegBarType(1);
stavesmo224995.addClef('treble');
const keysmo224995 = new VF.KeySignature('G');
keysmo224995.addToStave(stavesmo224995);
stavesmo224995.setContext(context);
stavesmo224995.draw();
smo224995v0.draw(context, stavesmo224995);
smo234597.setContext(context);
smo234597.draw();
const stavesmo226389 = new VF.Stave(66, 566, 306);
stavesmo226389.setAttribute('id', 'stavesmo226389');
stavesmo226389.setBegBarType(1);
stavesmo226389.addClef('treble');
const keysmo226389 = new VF.KeySignature('G');
keysmo226389.addToStave(stavesmo226389);
stavesmo226389.setContext(context);
stavesmo226389.draw();
smo226389v0.draw(context, stavesmo226389);
const stavesmo227520 = new VF.Stave(66, 699, 306);
stavesmo227520.setAttribute('id', 'stavesmo227520');
stavesmo227520.setBegBarType(1);
stavesmo227520.addClef('bass');
const keysmo227520 = new VF.KeySignature('G');
keysmo227520.addToStave(stavesmo227520);
stavesmo227520.setContext(context);
stavesmo227520.draw();
smo227520v0.draw(context, stavesmo227520);
const leftsmo228595stavesmo2249952 = new VF.StaveConnector(stavesmo224995, stavesmo227520).setType(1);
leftsmo228595stavesmo2249952.setContext(context).draw();
const fmtsmo2250148 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo225014v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225014v0ar = [];
const smo224996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo224996.setAttribute('id', 'smo224996');
smo224996.addModifier(new VF.Dot(), 0);
const smo224997 = new VF.Annotation('lion,');
smo224997.setAttribute('id', 'smo224997');
smo224997.setFont('Merriweather', 12, 'normal');
smo224997.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo224996.addModifier(smo224997);
smo224997.addClass('lyric lyric-0');
const smo224998 = new VF.Annotation('sehn');
smo224998.setAttribute('id', 'smo224998');
smo224998.setFont('Merriweather', 12, 'normal');
smo224998.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo224996.addModifier(smo224998);
smo224998.addClass('lyric lyric-1');
smo225014v0ar.push(smo224996);
smo225014v0.addTickables(smo225014v0ar)
fmtsmo2250148.joinVoices([smo225014v0]);
const fmtsmo2264068 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo226406v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226406v0ar = [];
const smo226390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo226390.setAttribute('id', 'smo226390');
smo226390.addModifier(new VF.Dot(), 0);
smo226390.addModifier(new VF.Dot(), 1);
smo226406v0ar.push(smo226390);
smo226406v0.addTickables(smo226406v0ar)
fmtsmo2264068.joinVoices([smo226406v0]);
const fmtsmo2275458 = new VF.Formatter();
//
// voices and notes for stave 2 8
const smo227545v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227545v0ar = [];
const smo227521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo227521.setAttribute('id', 'smo227521');
smo227545v0ar.push(smo227521);
const smo227522 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo227522.setAttribute('id', 'smo227522');
smo227545v0ar.push(smo227522);
const smo227523 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo227523.setAttribute('id', 'smo227523');
smo227545v0ar.push(smo227523);
const smo227524 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo227524.setAttribute('id', 'smo227524');
smo227545v0ar.push(smo227524);
smo227545v0.addTickables(smo227545v0ar)
fmtsmo2275458.joinVoices([smo227545v0]);
const smo227545v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227545v1ar = [];
const smo227525 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
smo227525.setAttribute('id', 'smo227525');
smo227525.setStyle({ fillStyle: "#115511" });
smo227545v1ar.push(smo227525);
const smo227526 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo227526.setAttribute('id', 'smo227526');
smo227526.setStyle({ fillStyle: "#115511" });
smo227545v1ar.push(smo227526);
const smo227527 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo227527.setAttribute('id', 'smo227527');
smo227527.setStyle({ fillStyle: "#115511" });
smo227545v1ar.push(smo227527);
const smo227528 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo227528.setAttribute('id', 'smo227528');
smo227528.setStyle({ fillStyle: "#115511" });
smo227545v1ar.push(smo227528);
const smo227529 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo227529.setAttribute('id', 'smo227529');
smo227529.setStyle({ fillStyle: "#115511" });
smo227545v1ar.push(smo227529);
smo227545v1.addTickables(smo227545v1ar)
fmtsmo2275458.joinVoices([smo227545v1]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234608 = smo227527.getStemDirection();
smo227527.setStemDirection(dirsmo234608);
smo227528.setStemDirection(dirsmo234608);
smo227529.setStemDirection(dirsmo234608);
const smo234608 = new VF.Beam([smo227527,smo227528,smo227529]);
 
// formatting measures in staff group smo228595
fmtsmo2250148.format([smo225014v0,smo226406v0,smo227545v0,smo227545v1], 161);
const stavesmo225014 = new VF.Stave(372, 451, 175);
stavesmo225014.setAttribute('id', 'stavesmo225014');
stavesmo225014.setBegBarType(VF.Barline.type.NONE);
stavesmo225014.setContext(context);
stavesmo225014.draw();
smo225014v0.draw(context, stavesmo225014);
const stavesmo226406 = new VF.Stave(372, 566, 175);
stavesmo226406.setAttribute('id', 'stavesmo226406');
stavesmo226406.setBegBarType(VF.Barline.type.NONE);
stavesmo226406.setContext(context);
stavesmo226406.draw();
smo226406v0.draw(context, stavesmo226406);
const stavesmo227545 = new VF.Stave(372, 699, 175);
stavesmo227545.setAttribute('id', 'stavesmo227545');
stavesmo227545.setBegBarType(VF.Barline.type.NONE);
stavesmo227545.setContext(context);
stavesmo227545.draw();
smo227545v0.draw(context, stavesmo227545);
smo227545v1.draw(context, stavesmo227545);
smo234608.setContext(context);
smo234608.draw();
const fmtsmo2250449 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo225044v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225044v0ar = [];
const smo225015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo225015.setAttribute('id', 'smo225015');
smo225044v0ar.push(smo225015);
const smo225017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo225017.setAttribute('id', 'smo225017');
const smo225018 = new VF.Annotation('er');
smo225018.setAttribute('id', 'smo225018');
smo225018.setFont('Merriweather', 12, 'normal');
smo225018.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225017.addModifier(smo225018);
smo225018.addClass('lyric lyric-0');
const smo225019 = new VF.Annotation('er');
smo225019.setAttribute('id', 'smo225019');
smo225019.setFont('Merriweather', 12, 'normal');
smo225019.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225017.addModifier(smo225019);
smo225019.addClass('lyric lyric-1');
smo225044v0ar.push(smo225017);
const smo225020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo225020.setAttribute('id', 'smo225020');
const smo225021 = new VF.Annotation('fährt');
smo225021.setAttribute('id', 'smo225021');
smo225021.setFont('Merriweather', 12, 'normal');
smo225021.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225020.addModifier(smo225021);
smo225021.addClass('lyric lyric-0');
const smo225022 = new VF.Annotation('traf');
smo225022.setAttribute('id', 'smo225022');
smo225022.setFont('Merriweather', 12, 'normal');
smo225022.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225020.addModifier(smo225022);
smo225022.addClass('lyric lyric-1');
smo225044v0ar.push(smo225020);
const smo225023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225023.setAttribute('id', 'smo225023');
const smo225024 = new VF.Annotation('durch');
smo225024.setAttribute('id', 'smo225024');
smo225024.setFont('Merriweather', 12, 'normal');
smo225024.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225023.addModifier(smo225024);
smo225024.addClass('lyric lyric-0');
const smo225025 = new VF.Annotation('la');
smo225025.setAttribute('id', 'smo225025');
smo225025.setFont('Merriweather', 12, 'normal');
smo225025.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225023.addModifier(smo225025);
smo225025.addClass('lyric lyric-1');
smo225044v0ar.push(smo225023);
const smo225026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225026.setAttribute('id', 'smo225026');
const smo225027 = new VF.Annotation('de');
smo225027.setAttribute('id', 'smo225027');
smo225027.setFont('Merriweather', 12, 'normal');
smo225027.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225026.addModifier(smo225027);
smo225027.addClass('lyric lyric-0');
const smo225028 = new VF.Annotation('den');
smo225028.setAttribute('id', 'smo225028');
smo225028.setFont('Merriweather', 12, 'normal');
smo225028.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225026.addModifier(smo225028);
smo225028.addClass('lyric lyric-1');
smo225044v0ar.push(smo225026);
smo225044v0.addTickables(smo225044v0ar)
fmtsmo2250449.joinVoices([smo225044v0]);
const fmtsmo2264239 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo226423v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226423v0ar = [];
const smo226407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo226407.setAttribute('id', 'smo226407');
smo226407.addModifier(new VF.Dot(), 0);
smo226407.addModifier(new VF.Dot(), 1);
smo226423v0ar.push(smo226407);
smo226423v0.addTickables(smo226423v0ar)
fmtsmo2264239.joinVoices([smo226423v0]);
const fmtsmo2275679 = new VF.Formatter();
//
// voices and notes for stave 2 9
const smo227567v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227567v0ar = [];
const smo227546 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227546.setAttribute('id', 'smo227546');
smo227567v0ar.push(smo227546);
const smo227547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227547.setAttribute('id', 'smo227547');
smo227567v0ar.push(smo227547);
const smo227548 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227548.setAttribute('id', 'smo227548');
smo227567v0ar.push(smo227548);
const smo227549 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227549.setAttribute('id', 'smo227549');
smo227567v0ar.push(smo227549);
smo227567v0.addTickables(smo227567v0ar)
fmtsmo2275679.joinVoices([smo227567v0]);
const smo227567v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227567v1ar = [];
const smo227550 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo227550.setAttribute('id', 'smo227550');
smo227550.setStyle({ fillStyle: "#115511" });
smo227550.addModifier(new VF.Dot(), 0);
smo227567v1ar.push(smo227550);
const smo227551 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo227551.setAttribute('id', 'smo227551');
smo227551.setStyle({ fillStyle: '#aaaaaa7f' });
smo227551.addModifier(new VF.Dot(), 0);
smo227567v1ar.push(smo227551);
smo227567v1.addTickables(smo227567v1ar)
fmtsmo2275679.joinVoices([smo227567v1]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234611 = smo225020.getStemDirection();
smo225020.setStemDirection(dirsmo234611);
smo225023.setStemDirection(dirsmo234611);
smo225026.setStemDirection(dirsmo234611);
const smo234611 = new VF.Beam([smo225020,smo225023,smo225026]);
 
// formatting measures in staff group smo228595
fmtsmo2250449.format([smo225044v0,smo226423v0,smo227567v0,smo227567v1], 282);
const stavesmo225044 = new VF.Stave(547, 451, 296);
stavesmo225044.setAttribute('id', 'stavesmo225044');
stavesmo225044.setBegBarType(VF.Barline.type.NONE);
stavesmo225044.setContext(context);
stavesmo225044.draw();
smo225044v0.draw(context, stavesmo225044);
smo234611.setContext(context);
smo234611.draw();
const stavesmo226423 = new VF.Stave(547, 566, 296);
stavesmo226423.setAttribute('id', 'stavesmo226423');
stavesmo226423.setBegBarType(VF.Barline.type.NONE);
stavesmo226423.setContext(context);
stavesmo226423.draw();
smo226423v0.draw(context, stavesmo226423);
const stavesmo227567 = new VF.Stave(547, 699, 296);
stavesmo227567.setAttribute('id', 'stavesmo227567');
stavesmo227567.setBegBarType(VF.Barline.type.NONE);
stavesmo227567.setContext(context);
stavesmo227567.draw();
smo227567v0.draw(context, stavesmo227567);
smo227567v1.draw(context, stavesmo227567);
const fmtsmo22506610 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo225066v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225066v0ar = [];
const smo225045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225045.setAttribute('id', 'smo225045');
smo225045.addModifier(new VF.Dot(), 0);
const smo225046 = new VF.Annotation('Fel');
smo225046.setAttribute('id', 'smo225046');
smo225046.setFont('Merriweather', 12, 'normal');
smo225046.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225045.addModifier(smo225046);
smo225046.addClass('lyric lyric-0 lyric-hyphen');
const smo225047 = new VF.Annotation('Städt');
smo225047.setAttribute('id', 'smo225047');
smo225047.setFont('Merriweather', 12, 'normal');
smo225047.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225045.addModifier(smo225047);
smo225047.addClass('lyric lyric-1 lyric-hyphen');
smo225066v0ar.push(smo225045);
const smo225048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo225048.setAttribute('id', 'smo225048');
smo225048.addModifier(new VF.Dot(), 0);
const smo225049 = new VF.Annotation('der');
smo225049.setAttribute('id', 'smo225049');
smo225049.setFont('Merriweather', 12, 'normal');
smo225049.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225048.addModifier(smo225049);
smo225049.addClass('lyric lyric-0');
const smo225050 = new VF.Annotation('chen');
smo225050.setAttribute('id', 'smo225050');
smo225050.setFont('Merriweather', 12, 'normal');
smo225050.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225048.addModifier(smo225050);
smo225050.addClass('lyric lyric-1');
smo225066v0ar.push(smo225048);
smo225066v0.addTickables(smo225066v0ar)
fmtsmo22506610.joinVoices([smo225066v0]);
const fmtsmo22644010 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo226440v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226440v0ar = [];
const smo226424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
smo226424.setAttribute('id', 'smo226424');
smo226424.addModifier(new VF.Dot(), 0);
smo226424.addModifier(new VF.Dot(), 1);
smo226440v0ar.push(smo226424);
smo226440v0.addTickables(smo226440v0ar)
fmtsmo22644010.joinVoices([smo226440v0]);
const fmtsmo22758710 = new VF.Formatter();
//
// voices and notes for stave 2 10
const smo227587v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227587v0ar = [];
const smo227568 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227568.setAttribute('id', 'smo227568');
smo227587v0ar.push(smo227568);
const smo227569 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227569.setAttribute('id', 'smo227569');
smo227587v0ar.push(smo227569);
const smo227570 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227570.setAttribute('id', 'smo227570');
smo227587v0ar.push(smo227570);
const smo227571 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227571.setAttribute('id', 'smo227571');
smo227587v0ar.push(smo227571);
smo227587v0.addTickables(smo227587v0ar)
fmtsmo22758710.joinVoices([smo227587v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22506610.format([smo225066v0,smo226440v0,smo227587v0], 174);
const stavesmo225066 = new VF.Stave(843, 451, 188);
stavesmo225066.setAttribute('id', 'stavesmo225066');
stavesmo225066.setBegBarType(VF.Barline.type.NONE);
stavesmo225066.setContext(context);
stavesmo225066.draw();
smo225066v0.draw(context, stavesmo225066);
const stavesmo226440 = new VF.Stave(843, 566, 188);
stavesmo226440.setAttribute('id', 'stavesmo226440');
stavesmo226440.setBegBarType(VF.Barline.type.NONE);
stavesmo226440.setContext(context);
stavesmo226440.draw();
smo226440v0.draw(context, stavesmo226440);
const stavesmo227587 = new VF.Stave(843, 699, 188);
stavesmo227587.setAttribute('id', 'stavesmo227587');
stavesmo227587.setBegBarType(VF.Barline.type.NONE);
stavesmo227587.setContext(context);
stavesmo227587.draw();
smo227587v0.draw(context, stavesmo227587);
const fmtsmo22508811 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo225088v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225088v0ar = [];
const smo225067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225067.setAttribute('id', 'smo225067');
smo225067.addModifier(new VF.Dot(), 0);
const smo225068 = new VF.Annotation('Wäl');
smo225068.setAttribute('id', 'smo225068');
smo225068.setFont('Merriweather', 12, 'normal');
smo225068.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225067.addModifier(smo225068);
smo225068.addClass('lyric lyric-0 lyric-hyphen');
const smo225069 = new VF.Annotation('Mäd');
smo225069.setAttribute('id', 'smo225069');
smo225069.setFont('Merriweather', 12, 'normal');
smo225069.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225067.addModifier(smo225069);
smo225069.addClass('lyric lyric-1 lyric-hyphen');
smo225088v0ar.push(smo225067);
const smo225070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo225070.setAttribute('id', 'smo225070');
smo225070.addModifier(new VF.Dot(), 0);
const smo225071 = new VF.Annotation('der');
smo225071.setAttribute('id', 'smo225071');
smo225071.setFont('Merriweather', 12, 'normal');
smo225071.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225070.addModifier(smo225071);
smo225071.addClass('lyric lyric-0');
const smo225072 = new VF.Annotation('chen');
smo225072.setAttribute('id', 'smo225072');
smo225072.setFont('Merriweather', 12, 'normal');
smo225072.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225070.addModifier(smo225072);
smo225072.addClass('lyric lyric-1');
smo225088v0ar.push(smo225070);
smo225088v0.addTickables(smo225088v0ar)
fmtsmo22508811.joinVoices([smo225088v0]);
const fmtsmo22645711 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo226457v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226457v0ar = [];
const smo226441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
smo226441.setAttribute('id', 'smo226441');
smo226441.addModifier(new VF.Dot(), 0);
smo226441.addModifier(new VF.Dot(), 1);
smo226457v0ar.push(smo226441);
smo226457v0.addTickables(smo226457v0ar)
fmtsmo22645711.joinVoices([smo226457v0]);
const fmtsmo22760711 = new VF.Formatter();
//
// voices and notes for stave 2 11
const smo227607v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227607v0ar = [];
const smo227588 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227588.setAttribute('id', 'smo227588');
smo227607v0ar.push(smo227588);
const smo227589 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227589.setAttribute('id', 'smo227589');
smo227607v0ar.push(smo227589);
const smo227590 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227590.setAttribute('id', 'smo227590');
smo227607v0ar.push(smo227590);
const smo227591 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227591.setAttribute('id', 'smo227591');
smo227607v0ar.push(smo227591);
smo227607v0.addTickables(smo227607v0ar)
fmtsmo22760711.joinVoices([smo227607v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22508811.format([smo225088v0,smo226457v0,smo227607v0], 168);
const stavesmo225088 = new VF.Stave(1031, 451, 182);
stavesmo225088.setAttribute('id', 'stavesmo225088');
stavesmo225088.setBegBarType(VF.Barline.type.NONE);
stavesmo225088.setContext(context);
stavesmo225088.draw();
smo225088v0.draw(context, stavesmo225088);
const stavesmo226457 = new VF.Stave(1031, 566, 182);
stavesmo226457.setAttribute('id', 'stavesmo226457');
stavesmo226457.setBegBarType(VF.Barline.type.NONE);
stavesmo226457.setContext(context);
stavesmo226457.draw();
smo226457v0.draw(context, stavesmo226457);
const stavesmo227607 = new VF.Stave(1031, 699, 182);
stavesmo227607.setAttribute('id', 'stavesmo227607');
stavesmo227607.setBegBarType(VF.Barline.type.NONE);
stavesmo227607.setContext(context);
stavesmo227607.draw();
smo227607v0.draw(context, stavesmo227607);
const rightsmo228595stavesmo2250882 = new VF.StaveConnector(stavesmo225088, stavesmo227607).setType(0);
rightsmo228595stavesmo2250882.setContext(context).draw();
const fmtsmo22511612 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo225116v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225116v0ar = [];
const smo225089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225089.setAttribute('id', 'smo225089');
const smo225090 = new VF.Annotation('ü');
smo225090.setAttribute('id', 'smo225090');
smo225090.setFont('Merriweather', 12, 'normal');
smo225090.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225089.addModifier(smo225090);
smo225090.addClass('lyric lyric-0 lyric-hyphen');
const smo225091 = new VF.Annotation('schö');
smo225091.setAttribute('id', 'smo225091');
smo225091.setFont('Merriweather', 12, 'normal');
smo225091.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225089.addModifier(smo225091);
smo225091.addClass('lyric lyric-1 lyric-hyphen');
smo225116v0ar.push(smo225089);
const smo225092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225092.setAttribute('id', 'smo225092');
const smo225093 = new VF.Annotation('ber');
smo225093.setAttribute('id', 'smo225093');
smo225093.setFont('Merriweather', 12, 'normal');
smo225093.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225092.addModifier(smo225093);
smo225093.addClass('lyric lyric-0 lyric-hyphen');
const smo225094 = new VF.Annotation('new');
smo225094.setAttribute('id', 'smo225094');
smo225094.setFont('Merriweather', 12, 'normal');
smo225094.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225092.addModifier(smo225094);
smo225094.addClass('lyric lyric-1');
smo225116v0ar.push(smo225092);
const smo225095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo225095.setAttribute('id', 'smo225095');
const smo225096 = new VF.Annotation('das');
smo225096.setAttribute('id', 'smo225096');
smo225096.setFont('Merriweather', 12, 'normal');
smo225096.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225095.addModifier(smo225096);
smo225096.addClass('lyric lyric-0');
const smo225097 = new VF.Annotation('als');
smo225097.setAttribute('id', 'smo225097');
smo225097.setFont('Merriweather', 12, 'normal');
smo225097.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225095.addModifier(smo225097);
smo225097.addClass('lyric lyric-1');
smo225116v0ar.push(smo225095);
const smo225098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225098.setAttribute('id', 'smo225098');
smo225098.addModifier(new VF.Dot(), 0);
const smo225099 = new VF.Annotation('Land;');
smo225099.setAttribute('id', 'smo225099');
smo225099.setFont('Merriweather', 12, 'normal');
smo225099.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225098.addModifier(smo225099);
smo225099.addClass('lyric lyric-0 lyric-hyphen');
const smo225100 = new VF.Annotation('ich');
smo225100.setAttribute('id', 'smo225100');
smo225100.setFont('Merriweather', 12, 'normal');
smo225100.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225098.addModifier(smo225100);
smo225100.addClass('lyric lyric-1');
smo225116v0ar.push(smo225098);
smo225116v0.addTickables(smo225116v0ar)
fmtsmo22511612.joinVoices([smo225116v0]);
const fmtsmo22647712 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo226477v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226477v0ar = [];
const smo226458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo226458.setAttribute('id', 'smo226458');
smo226458.addModifier(new VF.Dot(), 0);
smo226458.addModifier(new VF.Dot(), 1);
smo226477v0ar.push(smo226458);
const smo226459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n"]}'))
smo226459.setAttribute('id', 'smo226459');
smo226477v0ar.push(smo226459);
const smo226460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bn/4/n"]}'))
smo226460.setAttribute('id', 'smo226460');
smo226477v0ar.push(smo226460);
const smo226461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n"]}'))
smo226461.setAttribute('id', 'smo226461');
smo226477v0ar.push(smo226461);
smo226477v0.addTickables(smo226477v0ar)
fmtsmo22647712.joinVoices([smo226477v0]);
const fmtsmo22762712 = new VF.Formatter();
//
// voices and notes for stave 2 12
const smo227627v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227627v0ar = [];
const smo227608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227608.setAttribute('id', 'smo227608');
smo227627v0ar.push(smo227608);
const smo227609 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227609.setAttribute('id', 'smo227609');
smo227627v0ar.push(smo227609);
const smo227610 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227610.setAttribute('id', 'smo227610');
smo227627v0ar.push(smo227610);
const smo227611 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227611.setAttribute('id', 'smo227611');
smo227627v0ar.push(smo227611);
smo227627v0.addTickables(smo227627v0ar)
fmtsmo22762712.joinVoices([smo227627v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234638 = smo225089.getStemDirection();
smo225089.setStemDirection(dirsmo234638);
smo225092.setStemDirection(dirsmo234638);
smo225095.setStemDirection(dirsmo234638);
const smo234638 = new VF.Beam([smo225089,smo225092,smo225095]);
const dirsmo234641 = smo226459.getStemDirection();
smo226459.setStemDirection(dirsmo234641);
smo226460.setStemDirection(dirsmo234641);
smo226461.setStemDirection(dirsmo234641);
const smo234641 = new VF.Beam([smo226459,smo226460,smo226461]);
 
// formatting measures in staff group smo228595
fmtsmo22511612.format([smo225116v0,smo226477v0,smo227627v0], 289);
const stavesmo225116 = new VF.Stave(66, 844, 363);
stavesmo225116.setAttribute('id', 'stavesmo225116');
stavesmo225116.setBegBarType(1);
stavesmo225116.addClef('treble');
const keysmo225116 = new VF.KeySignature('G');
keysmo225116.addToStave(stavesmo225116);
stavesmo225116.setContext(context);
stavesmo225116.draw();
smo225116v0.draw(context, stavesmo225116);
smo234638.setContext(context);
smo234638.draw();
const stavesmo226477 = new VF.Stave(66, 967, 363);
stavesmo226477.setAttribute('id', 'stavesmo226477');
stavesmo226477.setBegBarType(1);
stavesmo226477.addClef('treble');
const keysmo226477 = new VF.KeySignature('G');
keysmo226477.addToStave(stavesmo226477);
stavesmo226477.setContext(context);
stavesmo226477.draw();
smo226477v0.draw(context, stavesmo226477);
smo234641.setContext(context);
smo234641.draw();
const stavesmo227627 = new VF.Stave(66, 1057, 363);
stavesmo227627.setAttribute('id', 'stavesmo227627');
stavesmo227627.setBegBarType(1);
stavesmo227627.addClef('bass');
const keysmo227627 = new VF.KeySignature('G');
keysmo227627.addToStave(stavesmo227627);
stavesmo227627.setContext(context);
stavesmo227627.draw();
smo227627v0.draw(context, stavesmo227627);
const leftsmo228595stavesmo2251162 = new VF.StaveConnector(stavesmo225116, stavesmo227627).setType(1);
leftsmo228595stavesmo2251162.setContext(context).draw();
const fmtsmo22513913 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo225139v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225139v0ar = [];
const smo225117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225117.setAttribute('id', 'smo225117');
const smo225119 = new VF.Annotation('-');
smo225119.setAttribute('id', 'smo225119');
smo225119.setFont('Merriweather', 12, 'normal');
smo225119.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225117.addModifier(smo225119);
smo225119.addClass('lyric lyric-1 lyric-hyphen');
smo225139v0ar.push(smo225117);
const smo225120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo225120.setAttribute('id', 'smo225120');
smo225139v0ar.push(smo225120);
const smo225121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo225121.setAttribute('id', 'smo225121');
smo225121.addModifier(new VF.Dot(), 0);
const smo225122 = new VF.Annotation('von');
smo225122.setAttribute('id', 'smo225122');
smo225122.setFont('Merriweather', 12, 'normal');
smo225122.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225121.addModifier(smo225122);
smo225122.addClass('lyric lyric-0');
const smo225123 = new VF.Annotation('Trotz');
smo225123.setAttribute('id', 'smo225123');
smo225123.setFont('Merriweather', 12, 'normal');
smo225123.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225121.addModifier(smo225123);
smo225123.addClass('lyric lyric-1 lyric-hyphen');
smo225139v0ar.push(smo225121);
smo225139v0.addTickables(smo225139v0ar)
fmtsmo22513913.joinVoices([smo225139v0]);
const fmtsmo22649413 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo226494v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226494v0ar = [];
const smo226478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo226478.setAttribute('id', 'smo226478');
smo226478.addModifier(new VF.Dot(), 0);
smo226478.addModifier(new VF.Dot(), 1);
smo226494v0ar.push(smo226478);
smo226494v0.addTickables(smo226494v0ar)
fmtsmo22649413.joinVoices([smo226494v0]);
const fmtsmo22764713 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo227647v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227647v0ar = [];
const smo227628 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227628.setAttribute('id', 'smo227628');
smo227647v0ar.push(smo227628);
const smo227629 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227629.setAttribute('id', 'smo227629');
smo227647v0ar.push(smo227629);
const smo227630 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227630.setAttribute('id', 'smo227630');
smo227647v0ar.push(smo227630);
const smo227631 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo227631.setAttribute('id', 'smo227631');
smo227647v0ar.push(smo227631);
smo227647v0.addTickables(smo227647v0ar)
fmtsmo22764713.joinVoices([smo227647v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22513913.format([smo225139v0,smo226494v0,smo227647v0], 147);
const stavesmo225139 = new VF.Stave(429, 844, 161);
stavesmo225139.setAttribute('id', 'stavesmo225139');
stavesmo225139.setBegBarType(VF.Barline.type.NONE);
stavesmo225139.setContext(context);
stavesmo225139.draw();
smo225139v0.draw(context, stavesmo225139);
const stavesmo226494 = new VF.Stave(429, 967, 161);
stavesmo226494.setAttribute('id', 'stavesmo226494');
stavesmo226494.setBegBarType(VF.Barline.type.NONE);
stavesmo226494.setContext(context);
stavesmo226494.draw();
smo226494v0.draw(context, stavesmo226494);
const stavesmo227647 = new VF.Stave(429, 1057, 161);
stavesmo227647.setAttribute('id', 'stavesmo227647');
stavesmo227647.setBegBarType(VF.Barline.type.NONE);
stavesmo227647.setContext(context);
stavesmo227647.draw();
smo227647v0.draw(context, stavesmo227647);
const fmtsmo22515814 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo225158v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225158v0ar = [];
const smo225140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225140.setAttribute('id', 'smo225140');
smo225140.addModifier(new VF.Dot(), 0);
const smo225141 = new VF.Annotation('fern');
smo225141.setAttribute('id', 'smo225141');
smo225141.setFont('Merriweather', 12, 'normal');
smo225141.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225140.addModifier(smo225141);
smo225141.addClass('lyric lyric-0');
const smo225142 = new VF.Annotation('dem');
smo225142.setAttribute('id', 'smo225142');
smo225142.setFont('Merriweather', 12, 'normal');
smo225142.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225140.addModifier(smo225142);
smo225142.addClass('lyric lyric-1');
smo225158v0ar.push(smo225140);
smo225158v0.addTickables(smo225158v0ar)
fmtsmo22515814.joinVoices([smo225158v0]);
const fmtsmo22651114 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo226511v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226511v0ar = [];
const smo226495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
smo226495.setAttribute('id', 'smo226495');
smo226495.addModifier(new VF.Dot(), 0);
smo226495.addModifier(new VF.Dot(), 1);
smo226511v0ar.push(smo226495);
smo226511v0.addTickables(smo226511v0ar)
fmtsmo22651114.joinVoices([smo226511v0]);
const fmtsmo22766914 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo227669v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227669v0ar = [];
const smo227648 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo227648.setAttribute('id', 'smo227648');
smo227669v0ar.push(smo227648);
const smo227649 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo227649.setAttribute('id', 'smo227649');
smo227669v0ar.push(smo227649);
const smo227650 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo227650.setAttribute('id', 'smo227650');
smo227669v0ar.push(smo227650);
const smo227651 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo227651.setAttribute('id', 'smo227651');
smo227669v0ar.push(smo227651);
smo227669v0.addTickables(smo227669v0ar)
fmtsmo22766914.joinVoices([smo227669v0]);
const smo227669v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227669v1ar = [];
const smo227652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
smo227652.setAttribute('id', 'smo227652');
smo227652.setStyle({ fillStyle: "#115511" });
smo227652.addModifier(new VF.Dot(), 0);
smo227669v1ar.push(smo227652);
const smo227653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo227653.setAttribute('id', 'smo227653');
smo227653.setStyle({ fillStyle: "#115511" });
smo227653.addModifier(new VF.Dot(), 0);
smo227669v1ar.push(smo227653);
smo227669v1.addTickables(smo227669v1ar)
fmtsmo22766914.joinVoices([smo227669v1]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22515814.format([smo225158v0,smo226511v0,smo227669v0,smo227669v1], 144);
const stavesmo225158 = new VF.Stave(590, 844, 158);
stavesmo225158.setAttribute('id', 'stavesmo225158');
stavesmo225158.setBegBarType(VF.Barline.type.NONE);
stavesmo225158.setContext(context);
stavesmo225158.draw();
smo225158v0.draw(context, stavesmo225158);
const stavesmo226511 = new VF.Stave(590, 967, 158);
stavesmo226511.setAttribute('id', 'stavesmo226511');
stavesmo226511.setBegBarType(VF.Barline.type.NONE);
stavesmo226511.setContext(context);
stavesmo226511.draw();
smo226511v0.draw(context, stavesmo226511);
const stavesmo227669 = new VF.Stave(590, 1057, 158);
stavesmo227669.setAttribute('id', 'stavesmo227669');
stavesmo227669.setBegBarType(VF.Barline.type.NONE);
stavesmo227669.setContext(context);
stavesmo227669.draw();
smo227669v0.draw(context, stavesmo227669);
smo227669v1.draw(context, stavesmo227669);
const fmtsmo22518815 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo225188v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225188v0ar = [];
const smo225159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225159.setAttribute('id', 'smo225159');
const smo225160 = new VF.Annotation('-');
smo225160.setAttribute('id', 'smo225160');
smo225160.setFont('Merriweather', 12, 'normal');
smo225160.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225159.addModifier(smo225160);
smo225160.addClass('lyric lyric-0 lyric-hyphen');
smo225188v0ar.push(smo225159);
const smo225161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225161.setAttribute('id', 'smo225161');
const smo225162 = new VF.Annotation('er');
smo225162.setAttribute('id', 'smo225162');
smo225162.setFont('Merriweather', 12, 'normal');
smo225162.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225161.addModifier(smo225162);
smo225162.addClass('lyric lyric-0 lyric-hyphen');
const smo225163 = new VF.Annotation('tat');
smo225163.setAttribute('id', 'smo225163');
smo225163.setFont('Merriweather', 12, 'normal');
smo225163.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225161.addModifier(smo225163);
smo225163.addClass('lyric lyric-1');
smo225188v0ar.push(smo225161);
const smo225164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225164.setAttribute('id', 'smo225164');
const smo225165 = new VF.Annotation('kenn');
smo225165.setAttribute('id', 'smo225165');
smo225165.setFont('Merriweather', 12, 'normal');
smo225165.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225164.addModifier(smo225165);
smo225165.addClass('lyric lyric-0');
const smo225166 = new VF.Annotation('er');
smo225166.setAttribute('id', 'smo225166');
smo225166.setFont('Merriweather', 12, 'normal');
smo225166.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225164.addModifier(smo225166);
smo225166.addClass('lyric lyric-1');
smo225188v0ar.push(smo225164);
const smo225167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225167.setAttribute('id', 'smo225167');
const smo225168 = new VF.Annotation('ich');
smo225168.setAttribute('id', 'smo225168');
smo225168.setFont('Merriweather', 12, 'normal');
smo225168.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225167.addModifier(smo225168);
smo225168.addClass('lyric lyric-0');
const smo225169 = new VF.Annotation('mir');
smo225169.setAttribute('id', 'smo225169');
smo225169.setFont('Merriweather', 12, 'normal');
smo225169.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225167.addModifier(smo225169);
smo225169.addClass('lyric lyric-1');
smo225188v0ar.push(smo225167);
const smo225170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo225170.setAttribute('id', 'smo225170');
const smo225171 = new VF.Annotation('ihn');
smo225171.setAttribute('id', 'smo225171');
smo225171.setFont('Merriweather', 12, 'normal');
smo225171.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225170.addModifier(smo225171);
smo225171.addClass('lyric lyric-0');
const smo225172 = new VF.Annotation('ge');
smo225172.setAttribute('id', 'smo225172');
smo225172.setFont('Merriweather', 12, 'normal');
smo225172.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225170.addModifier(smo225172);
smo225172.addClass('lyric lyric-1 lyric-hyphen');
smo225188v0ar.push(smo225170);
smo225188v0.addTickables(smo225188v0ar)
fmtsmo22518815.joinVoices([smo225188v0]);
const fmtsmo22652815 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo226528v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226528v0ar = [];
const smo226512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
smo226512.setAttribute('id', 'smo226512');
smo226512.addModifier(new VF.Dot(), 0);
smo226512.addModifier(new VF.Dot(), 1);
smo226528v0ar.push(smo226512);
smo226528v0.addTickables(smo226528v0ar)
fmtsmo22652815.joinVoices([smo226528v0]);
const fmtsmo22769115 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo227691v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227691v0ar = [];
const smo227670 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo227670.setAttribute('id', 'smo227670');
smo227691v0ar.push(smo227670);
const smo227671 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo227671.setAttribute('id', 'smo227671');
smo227691v0ar.push(smo227671);
const smo227672 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo227672.setAttribute('id', 'smo227672');
smo227691v0ar.push(smo227672);
const smo227673 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo227673.setAttribute('id', 'smo227673');
smo227691v0ar.push(smo227673);
smo227691v0.addTickables(smo227691v0ar)
fmtsmo22769115.joinVoices([smo227691v0]);
const smo227691v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227691v1ar = [];
const smo227674 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo227674.setAttribute('id', 'smo227674');
smo227674.setStyle({ fillStyle: "#115511" });
smo227674.addModifier(new VF.Dot(), 0);
smo227691v1ar.push(smo227674);
const smo227675 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo227675.setAttribute('id', 'smo227675');
smo227675.setStyle({ fillStyle: "#115511" });
smo227675.addModifier(new VF.Dot(), 0);
smo227691v1ar.push(smo227675);
smo227691v1.addTickables(smo227691v1ar)
fmtsmo22769115.joinVoices([smo227691v1]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234658 = smo225164.getStemDirection();
smo225164.setStemDirection(dirsmo234658);
smo225167.setStemDirection(dirsmo234658);
smo225170.setStemDirection(dirsmo234658);
const smo234658 = new VF.Beam([smo225164,smo225167,smo225170]);
 
// formatting measures in staff group smo228595
fmtsmo22518815.format([smo225188v0,smo226528v0,smo227691v0,smo227691v1], 265);
const stavesmo225188 = new VF.Stave(748, 844, 279);
stavesmo225188.setAttribute('id', 'stavesmo225188');
stavesmo225188.setBegBarType(VF.Barline.type.NONE);
stavesmo225188.setContext(context);
stavesmo225188.draw();
smo225188v0.draw(context, stavesmo225188);
smo234658.setContext(context);
smo234658.draw();
const stavesmo226528 = new VF.Stave(748, 967, 279);
stavesmo226528.setAttribute('id', 'stavesmo226528');
stavesmo226528.setBegBarType(VF.Barline.type.NONE);
stavesmo226528.setContext(context);
stavesmo226528.draw();
smo226528v0.draw(context, stavesmo226528);
const stavesmo227691 = new VF.Stave(748, 1057, 279);
stavesmo227691.setAttribute('id', 'stavesmo227691');
stavesmo227691.setBegBarType(VF.Barline.type.NONE);
stavesmo227691.setContext(context);
stavesmo227691.draw();
smo227691v0.draw(context, stavesmo227691);
smo227691v1.draw(context, stavesmo227691);
const fmtsmo22520716 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo225207v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225207v0ar = [];
const smo225189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225189.setAttribute('id', 'smo225189');
smo225189.addModifier(new VF.Dot(), 0);
const smo225190 = new VF.Annotation('schen');
smo225190.setAttribute('id', 'smo225190');
smo225190.setFont('Merriweather', 12, 'normal');
smo225190.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225189.addModifier(smo225190);
smo225190.addClass('lyric lyric-0');
const smo225191 = new VF.Annotation('stehn');
smo225191.setAttribute('id', 'smo225191');
smo225191.setFont('Merriweather', 12, 'normal');
smo225191.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225189.addModifier(smo225191);
smo225191.addClass('lyric lyric-1');
smo225207v0ar.push(smo225189);
smo225207v0.addTickables(smo225207v0ar)
fmtsmo22520716.joinVoices([smo225207v0]);
const fmtsmo22654516 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo226545v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226545v0ar = [];
const smo226529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo226529.setAttribute('id', 'smo226529');
smo226529.addModifier(new VF.Dot(), 0);
smo226529.addModifier(new VF.Dot(), 1);
smo226545v0ar.push(smo226529);
smo226545v0.addTickables(smo226545v0ar)
fmtsmo22654516.joinVoices([smo226545v0]);
const fmtsmo22771616 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo227716v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227716v0ar = [];
const smo227692 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo227692.setAttribute('id', 'smo227692');
smo227716v0ar.push(smo227692);
const smo227693 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo227693.setAttribute('id', 'smo227693');
smo227716v0ar.push(smo227693);
const smo227694 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo227694.setAttribute('id', 'smo227694');
smo227716v0ar.push(smo227694);
const smo227695 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo227695.setAttribute('id', 'smo227695');
smo227716v0ar.push(smo227695);
smo227716v0.addTickables(smo227716v0ar)
fmtsmo22771616.joinVoices([smo227716v0]);
const smo227716v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227716v1ar = [];
const smo227696 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["eb/4/r"]}'))
smo227696.setAttribute('id', 'smo227696');
smo227696.setStyle({ fillStyle: "#115511" });
smo227716v1ar.push(smo227696);
const smo227697 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo227697.setAttribute('id', 'smo227697');
smo227697.setStyle({ fillStyle: "#115511" });
smo227716v1ar.push(smo227697);
const smo227698 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo227698.setAttribute('id', 'smo227698');
smo227698.setStyle({ fillStyle: "#115511" });
smo227716v1ar.push(smo227698);
const smo227699 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo227699.setAttribute('id', 'smo227699');
smo227699.setStyle({ fillStyle: "#115511" });
smo227716v1ar.push(smo227699);
const smo227700 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo227700.setAttribute('id', 'smo227700');
smo227700.setStyle({ fillStyle: "#115511" });
smo227716v1ar.push(smo227700);
smo227716v1.addTickables(smo227716v1ar)
fmtsmo22771616.joinVoices([smo227716v1]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234669 = smo227698.getStemDirection();
smo227698.setStemDirection(dirsmo234669);
smo227699.setStemDirection(dirsmo234669);
smo227700.setStemDirection(dirsmo234669);
const smo234669 = new VF.Beam([smo227698,smo227699,smo227700]);
 
// formatting measures in staff group smo228595
fmtsmo22520716.format([smo225207v0,smo226545v0,smo227716v0,smo227716v1], 170);
const stavesmo225207 = new VF.Stave(1027, 844, 184);
stavesmo225207.setAttribute('id', 'stavesmo225207');
stavesmo225207.setBegBarType(VF.Barline.type.NONE);
stavesmo225207.setContext(context);
stavesmo225207.draw();
smo225207v0.draw(context, stavesmo225207);
const stavesmo226545 = new VF.Stave(1027, 967, 184);
stavesmo226545.setAttribute('id', 'stavesmo226545');
stavesmo226545.setBegBarType(VF.Barline.type.NONE);
stavesmo226545.setContext(context);
stavesmo226545.draw();
smo226545v0.draw(context, stavesmo226545);
const stavesmo227716 = new VF.Stave(1027, 1057, 184);
stavesmo227716.setAttribute('id', 'stavesmo227716');
stavesmo227716.setBegBarType(VF.Barline.type.NONE);
stavesmo227716.setContext(context);
stavesmo227716.draw();
smo227716v0.draw(context, stavesmo227716);
smo227716v1.draw(context, stavesmo227716);
smo234669.setContext(context);
smo234669.draw();
const rightsmo228595stavesmo2252072 = new VF.StaveConnector(stavesmo225207, stavesmo227716).setType(0);
rightsmo228595stavesmo2252072.setContext(context).draw();
const fmtsmo22523717 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo225237v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225237v0ar = [];
const smo225208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225208.setAttribute('id', 'smo225208');
const smo225209 = new VF.Annotation('-');
smo225209.setAttribute('id', 'smo225209');
smo225209.setFont('Merriweather', 12, 'normal');
smo225209.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225208.addModifier(smo225209);
smo225209.addClass('lyric lyric-0 lyric-hyphen');
smo225237v0ar.push(smo225208);
const smo225210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo225210.setAttribute('id', 'smo225210');
const smo225211 = new VF.Annotation('den');
smo225211.setAttribute('id', 'smo225211');
smo225211.setFont('Merriweather', 12, 'normal');
smo225211.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225210.addModifier(smo225211);
smo225211.addClass('lyric lyric-0');
const smo225212 = new VF.Annotation('er');
smo225212.setAttribute('id', 'smo225212');
smo225212.setFont('Merriweather', 12, 'normal');
smo225212.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225210.addModifier(smo225212);
smo225212.addClass('lyric lyric-1');
smo225237v0ar.push(smo225210);
const smo225213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo225213.setAttribute('id', 'smo225213');
const smo225214 = new VF.Annotation('all\'');
smo225214.setAttribute('id', 'smo225214');
smo225214.setFont('Merriweather', 12, 'normal');
smo225214.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225213.addModifier(smo225214);
smo225214.addClass('lyric lyric-0');
const smo225215 = new VF.Annotation('splet');
smo225215.setAttribute('id', 'smo225215');
smo225215.setFont('Merriweather', 12, 'normal');
smo225215.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225213.addModifier(smo225215);
smo225215.addClass('lyric lyric-1');
smo225237v0ar.push(smo225213);
const smo225216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225216.setAttribute('id', 'smo225216');
const smo225217 = new VF.Annotation('sei');
smo225217.setAttribute('id', 'smo225217');
smo225217.setFont('Merriweather', 12, 'normal');
smo225217.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225216.addModifier(smo225217);
smo225217.addClass('lyric lyric-0 lyric-hyphen');
const smo225218 = new VF.Annotation('sei');
smo225218.setAttribute('id', 'smo225218');
smo225218.setFont('Merriweather', 12, 'normal');
smo225218.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225216.addModifier(smo225218);
smo225218.addClass('lyric lyric-1 lyric-hyphen');
smo225237v0ar.push(smo225216);
const smo225219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225219.setAttribute('id', 'smo225219');
const smo225220 = new VF.Annotation('ne');
smo225220.setAttribute('id', 'smo225220');
smo225220.setFont('Merriweather', 12, 'normal');
smo225220.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225219.addModifier(smo225220);
smo225220.addClass('lyric lyric-0');
const smo225221 = new VF.Annotation('ne');
smo225221.setAttribute('id', 'smo225221');
smo225221.setFont('Merriweather', 12, 'normal');
smo225221.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225219.addModifier(smo225221);
smo225221.addClass('lyric lyric-1');
smo225237v0ar.push(smo225219);
smo225237v0.addTickables(smo225237v0ar)
fmtsmo22523717.joinVoices([smo225237v0]);
const fmtsmo22656417 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo226564v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226564v0ar = [];
const smo226546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo226546.setAttribute('id', 'smo226546');
smo226546.addModifier(new VF.Dot(), 0);
smo226564v0ar.push(smo226546);
const smo226547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo226547.setAttribute('id', 'smo226547');
smo226564v0ar.push(smo226547);
const smo226548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo226548.setAttribute('id', 'smo226548');
smo226564v0ar.push(smo226548);
smo226564v0.addTickables(smo226564v0ar)
fmtsmo22656417.joinVoices([smo226564v0]);
const fmtsmo22773717 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo227737v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227737v0ar = [];
const smo227717 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo227717.setAttribute('id', 'smo227717');
smo227737v0ar.push(smo227717);
const smo227718 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo227718.setAttribute('id', 'smo227718');
smo227737v0ar.push(smo227718);
const smo227719 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo227719.setAttribute('id', 'smo227719');
smo227737v0ar.push(smo227719);
const smo227720 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo227720.setAttribute('id', 'smo227720');
smo227737v0ar.push(smo227720);
smo227737v0.addTickables(smo227737v0ar)
fmtsmo22773717.joinVoices([smo227737v0]);
const smo227737v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227737v1ar = [];
const smo227721 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo227721.setAttribute('id', 'smo227721');
smo227721.setStyle({ fillStyle: "#115511" });
smo227721.addModifier(new VF.Dot(), 0);
smo227737v1ar.push(smo227721);
smo227737v1.addTickables(smo227737v1ar)
fmtsmo22773717.joinVoices([smo227737v1]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234679 = smo225213.getStemDirection();
smo225213.setStemDirection(dirsmo234679);
smo225216.setStemDirection(dirsmo234679);
smo225219.setStemDirection(dirsmo234679);
const smo234679 = new VF.Beam([smo225213,smo225216,smo225219]);
 
// formatting measures in staff group smo228595
fmtsmo22523717.format([smo225237v0,smo226564v0,smo227737v0,smo227737v1], 245);
const stavesmo225237 = new VF.Stave(66, 1197, 319);
stavesmo225237.setAttribute('id', 'stavesmo225237');
stavesmo225237.setBegBarType(1);
stavesmo225237.addClef('treble');
const keysmo225237 = new VF.KeySignature('G');
keysmo225237.addToStave(stavesmo225237);
stavesmo225237.setContext(context);
stavesmo225237.draw();
smo225237v0.draw(context, stavesmo225237);
smo234679.setContext(context);
smo234679.draw();
const stavesmo226564 = new VF.Stave(66, 1309, 319);
stavesmo226564.setAttribute('id', 'stavesmo226564');
stavesmo226564.setBegBarType(1);
stavesmo226564.addClef('treble');
const keysmo226564 = new VF.KeySignature('G');
keysmo226564.addToStave(stavesmo226564);
stavesmo226564.setContext(context);
stavesmo226564.draw();
smo226564v0.draw(context, stavesmo226564);
const stavesmo227737 = new VF.Stave(66, 1449, 319);
stavesmo227737.setAttribute('id', 'stavesmo227737');
stavesmo227737.setBegBarType(1);
stavesmo227737.addClef('bass');
const keysmo227737 = new VF.KeySignature('G');
keysmo227737.addToStave(stavesmo227737);
stavesmo227737.setContext(context);
stavesmo227737.draw();
smo227737v0.draw(context, stavesmo227737);
smo227737v1.draw(context, stavesmo227737);
const leftsmo228595stavesmo2252372 = new VF.StaveConnector(stavesmo225237, stavesmo227737).setType(1);
leftsmo228595stavesmo2252372.setContext(context).draw();
const fmtsmo22525918 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo225259v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225259v0ar = [];
const smo225238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225238.setAttribute('id', 'smo225238');
smo225238.addModifier(new VF.Dot(), 0);
const smo225239 = new VF.Annotation('Lie');
smo225239.setAttribute('id', 'smo225239');
smo225239.setFont('Merriweather', 12, 'normal');
smo225239.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225238.addModifier(smo225239);
smo225239.addClass('lyric lyric-0 lyric-hyphen');
const smo225240 = new VF.Annotation('Lie');
smo225240.setAttribute('id', 'smo225240');
smo225240.setFont('Merriweather', 12, 'normal');
smo225240.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225238.addModifier(smo225240);
smo225240.addClass('lyric lyric-1 lyric-hyphen');
smo225259v0ar.push(smo225238);
const smo225241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo225241.setAttribute('id', 'smo225241');
smo225241.addModifier(new VF.Dot(), 0);
const smo225242 = new VF.Annotation('der');
smo225242.setAttribute('id', 'smo225242');
smo225242.setFont('Merriweather', 12, 'normal');
smo225242.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225241.addModifier(smo225242);
smo225242.addClass('lyric lyric-0');
const smo225243 = new VF.Annotation('der');
smo225243.setAttribute('id', 'smo225243');
smo225243.setFont('Merriweather', 12, 'normal');
smo225243.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225241.addModifier(smo225243);
smo225243.addClass('lyric lyric-1');
smo225259v0ar.push(smo225241);
smo225259v0.addTickables(smo225259v0ar)
fmtsmo22525918.joinVoices([smo225259v0]);
const fmtsmo22658218 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo226582v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226582v0ar = [];
const smo226565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo226565.setAttribute('id', 'smo226565');
smo226565.addModifier(new VF.Dot(), 0);
smo226582v0ar.push(smo226565);
const smo226566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","f#/4/n"]}'))
smo226566.setAttribute('id', 'smo226566');
smo226566.addModifier(new VF.Dot(), 0);
smo226566.addModifier(new VF.Dot(), 1);
smo226582v0ar.push(smo226566);
smo226582v0.addTickables(smo226582v0ar)
fmtsmo22658218.joinVoices([smo226582v0]);
const fmtsmo22775718 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo227757v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227757v0ar = [];
const smo227738 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo227738.setAttribute('id', 'smo227738');
smo227757v0ar.push(smo227738);
const smo227739 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo227739.setAttribute('id', 'smo227739');
smo227757v0ar.push(smo227739);
const smo227740 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo227740.setAttribute('id', 'smo227740');
smo227757v0ar.push(smo227740);
const smo227741 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo227741.setAttribute('id', 'smo227741');
smo227757v0ar.push(smo227741);
smo227757v0.addTickables(smo227757v0ar)
fmtsmo22775718.joinVoices([smo227757v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22525918.format([smo225259v0,smo226582v0,smo227757v0], 130);
const stavesmo225259 = new VF.Stave(385, 1197, 144);
stavesmo225259.setAttribute('id', 'stavesmo225259');
stavesmo225259.setBegBarType(VF.Barline.type.NONE);
stavesmo225259.setContext(context);
stavesmo225259.draw();
smo225259v0.draw(context, stavesmo225259);
const stavesmo226582 = new VF.Stave(385, 1309, 144);
stavesmo226582.setAttribute('id', 'stavesmo226582');
stavesmo226582.setBegBarType(VF.Barline.type.NONE);
stavesmo226582.setContext(context);
stavesmo226582.draw();
smo226582v0.draw(context, stavesmo226582);
const stavesmo227757 = new VF.Stave(385, 1449, 144);
stavesmo227757.setAttribute('id', 'stavesmo227757');
stavesmo227757.setBegBarType(VF.Barline.type.NONE);
stavesmo227757.setContext(context);
stavesmo227757.draw();
smo227757v0.draw(context, stavesmo227757);
const fmtsmo22528919 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo225289v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225289v0ar = [];
const smo225260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo225260.setAttribute('id', 'smo225260');
const smo225261 = new VF.Annotation('-');
smo225261.setAttribute('id', 'smo225261');
smo225261.setFont('Merriweather', 12, 'normal');
smo225261.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225260.addModifier(smo225261);
smo225261.addClass('lyric lyric-0 lyric-hyphen');
smo225289v0ar.push(smo225260);
const smo225262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo225262.setAttribute('id', 'smo225262');
const smo225263 = new VF.Annotation('sie');
smo225263.setAttribute('id', 'smo225263');
smo225263.setFont('Merriweather', 12, 'normal');
smo225263.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225262.addModifier(smo225263);
smo225263.addClass('lyric lyric-0');
const smo225264 = new VF.Annotation('doch');
smo225264.setAttribute('id', 'smo225264');
smo225264.setFont('Merriweather', 12, 'normal');
smo225264.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225262.addModifier(smo225264);
smo225264.addClass('lyric lyric-1');
smo225289v0ar.push(smo225262);
const smo225265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo225265.setAttribute('id', 'smo225265');
const smo225266 = new VF.Annotation('sind');
smo225266.setAttribute('id', 'smo225266');
smo225266.setFont('Merriweather', 12, 'normal');
smo225266.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225265.addModifier(smo225266);
smo225266.addClass('lyric lyric-0');
const smo225267 = new VF.Annotation('im');
smo225267.setAttribute('id', 'smo225267');
smo225267.setFont('Merriweather', 12, 'normal');
smo225267.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225265.addModifier(smo225267);
smo225267.addClass('lyric lyric-1 lyric-hyphen');
smo225289v0ar.push(smo225265);
const smo225268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo225268.setAttribute('id', 'smo225268');
const smo225269 = new VF.Annotation('ir');
smo225269.setAttribute('id', 'smo225269');
smo225269.setFont('Merriweather', 12, 'normal');
smo225269.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225268.addModifier(smo225269);
smo225269.addClass('lyric lyric-0');
const smo225270 = new VF.Annotation('mer');
smo225270.setAttribute('id', 'smo225270');
smo225270.setFont('Merriweather', 12, 'normal');
smo225270.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225268.addModifier(smo225270);
smo225270.addClass('lyric lyric-1');
smo225289v0ar.push(smo225268);
const smo225271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225271.setAttribute('id', 'smo225271');
const smo225272 = new VF.Annotation('e');
smo225272.setAttribute('id', 'smo225272');
smo225272.setFont('Merriweather', 12, 'normal');
smo225272.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225271.addModifier(smo225272);
smo225272.addClass('lyric lyric-0 lyric-hyphen');
const smo225273 = new VF.Annotation('für');
smo225273.setAttribute('id', 'smo225273');
smo225273.setFont('Merriweather', 12, 'normal');
smo225273.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225271.addModifier(smo225273);
smo225273.addClass('lyric lyric-1');
smo225289v0ar.push(smo225271);
smo225289v0.addTickables(smo225289v0ar)
fmtsmo22528919.joinVoices([smo225289v0]);
const fmtsmo22660019 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo226600v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226600v0ar = [];
const smo226583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo226583.setAttribute('id', 'smo226583');
smo226583.addModifier(new VF.Dot(), 0);
smo226600v0ar.push(smo226583);
const smo226584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","f#/4/n"]}'))
smo226584.setAttribute('id', 'smo226584');
smo226584.addModifier(new VF.Dot(), 0);
smo226584.addModifier(new VF.Dot(), 1);
smo226600v0ar.push(smo226584);
smo226600v0.addTickables(smo226600v0ar)
fmtsmo22660019.joinVoices([smo226600v0]);
const fmtsmo22777619 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo227776v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227776v0ar = [];
const smo227758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo227758.setAttribute('id', 'smo227758');
smo227776v0ar.push(smo227758);
const smo227759 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo227759.setAttribute('id', 'smo227759');
smo227759.addModifier(new VF.Dot(), 0);
smo227776v0ar.push(smo227759);
const smo227760 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo227760.setAttribute('id', 'smo227760');
smo227776v0ar.push(smo227760);
smo227776v0.addTickables(smo227776v0ar)
fmtsmo22777619.joinVoices([smo227776v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234692 = smo225265.getStemDirection();
smo225265.setStemDirection(dirsmo234692);
smo225268.setStemDirection(dirsmo234692);
smo225271.setStemDirection(dirsmo234692);
const smo234692 = new VF.Beam([smo225265,smo225268,smo225271]);
 
// formatting measures in staff group smo228595
fmtsmo22528919.format([smo225289v0,smo226600v0,smo227776v0], 272);
const stavesmo225289 = new VF.Stave(529, 1197, 286);
stavesmo225289.setAttribute('id', 'stavesmo225289');
stavesmo225289.setBegBarType(VF.Barline.type.NONE);
stavesmo225289.setContext(context);
stavesmo225289.draw();
smo225289v0.draw(context, stavesmo225289);
smo234692.setContext(context);
smo234692.draw();
const stavesmo226600 = new VF.Stave(529, 1309, 286);
stavesmo226600.setAttribute('id', 'stavesmo226600');
stavesmo226600.setBegBarType(VF.Barline.type.NONE);
stavesmo226600.setContext(context);
stavesmo226600.draw();
smo226600v0.draw(context, stavesmo226600);
const stavesmo227776 = new VF.Stave(529, 1449, 286);
stavesmo227776.setAttribute('id', 'stavesmo227776');
stavesmo227776.setBegBarType(VF.Barline.type.NONE);
stavesmo227776.setContext(context);
stavesmo227776.draw();
smo227776v0.draw(context, stavesmo227776);
const fmtsmo22530820 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo225308v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225308v0ar = [];
const smo225290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo225290.setAttribute('id', 'smo225290');
smo225290.addModifier(new VF.Dot(), 0);
const smo225291 = new VF.Annotation('kannt');
smo225291.setAttribute('id', 'smo225291');
smo225291.setFont('Merriweather', 12, 'normal');
smo225291.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225290.addModifier(smo225291);
smo225291.addClass('lyric lyric-0');
const smo225292 = new VF.Annotation('mich');
smo225292.setAttribute('id', 'smo225292');
smo225292.setFont('Merriweather', 12, 'normal');
smo225292.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225290.addModifier(smo225292);
smo225292.addClass('lyric lyric-1');
smo225308v0ar.push(smo225290);
smo225308v0.addTickables(smo225308v0ar)
fmtsmo22530820.joinVoices([smo225308v0]);
const fmtsmo22662120 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo226621v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226621v0ar = [];
const smo226601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo226601.setAttribute('id', 'smo226601');
smo226621v0ar.push(smo226601);
const smo226602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo226602.setAttribute('id', 'smo226602');
smo226621v0ar.push(smo226602);
const smo226603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo226603.setAttribute('id', 'smo226603');
smo226621v0ar.push(smo226603);
const smo226604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo226604.setAttribute('id', 'smo226604');
smo226621v0ar.push(smo226604);
const smo226605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo226605.setAttribute('id', 'smo226605');
smo226621v0ar.push(smo226605);
smo226621v0.addTickables(smo226621v0ar)
fmtsmo22662120.joinVoices([smo226621v0]);
const fmtsmo22779620 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo227796v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227796v0ar = [];
const smo227777 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo227777.setAttribute('id', 'smo227777');
smo227796v0ar.push(smo227777);
const smo227778 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo227778.setAttribute('id', 'smo227778');
smo227796v0ar.push(smo227778);
const smo227779 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo227779.setAttribute('id', 'smo227779');
smo227796v0ar.push(smo227779);
const smo227780 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo227780.setAttribute('id', 'smo227780');
smo227780.addModifier(new VF.Dot(), 0);
smo227796v0ar.push(smo227780);
smo227796v0.addTickables(smo227796v0ar)
fmtsmo22779620.joinVoices([smo227796v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234701 = smo226603.getStemDirection();
smo226603.setStemDirection(dirsmo234701);
smo226604.setStemDirection(dirsmo234701);
smo226605.setStemDirection(dirsmo234701);
const smo234701 = new VF.Beam([smo226603,smo226604,smo226605]);
const dirsmo234704 = smo227777.getStemDirection();
smo227777.setStemDirection(dirsmo234704);
smo227778.setStemDirection(dirsmo234704);
smo227779.setStemDirection(dirsmo234704);
const smo234704 = new VF.Beam([smo227777,smo227778,smo227779]);
 
// formatting measures in staff group smo228595
fmtsmo22530820.format([smo225308v0,smo226621v0,smo227796v0], 205);
const stavesmo225308 = new VF.Stave(815, 1197, 219);
stavesmo225308.setAttribute('id', 'stavesmo225308');
stavesmo225308.setBegBarType(VF.Barline.type.NONE);
stavesmo225308.setContext(context);
stavesmo225308.draw();
smo225308v0.draw(context, stavesmo225308);
const stavesmo226621 = new VF.Stave(815, 1309, 219);
stavesmo226621.setAttribute('id', 'stavesmo226621');
stavesmo226621.setBegBarType(VF.Barline.type.NONE);
stavesmo226621.setContext(context);
stavesmo226621.draw();
smo226621v0.draw(context, stavesmo226621);
smo234701.setContext(context);
smo234701.draw();
const stavesmo227796 = new VF.Stave(815, 1449, 219);
stavesmo227796.setAttribute('id', 'stavesmo227796');
stavesmo227796.setBegBarType(VF.Barline.type.NONE);
stavesmo227796.setContext(context);
stavesmo227796.draw();
smo227796v0.draw(context, stavesmo227796);
smo234704.setContext(context);
smo234704.draw();
const fmtsmo22532921 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo225329v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225329v0ar = [];
const smo225309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo225309.setAttribute('id', 'smo225309');
smo225309.addModifier(new VF.Dot(), 0);
const smo225310 = new VF.Annotation('-');
smo225310.setAttribute('id', 'smo225310');
smo225310.setFont('Merriweather', 12, 'normal');
smo225310.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225309.addModifier(smo225310);
smo225310.addClass('lyric lyric-0 lyric-hyphen');
smo225329v0ar.push(smo225309);
const smo225311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo225311.setAttribute('id', 'smo225311');
smo225311.addModifier(new VF.Dot(), 0);
const smo225312 = new VF.Annotation('Er');
smo225312.setAttribute('id', 'smo225312');
smo225312.setFont('Merriweather', 12, 'normal');
smo225312.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225311.addModifier(smo225312);
smo225312.addClass('lyric lyric-0');
const smo225313 = new VF.Annotation('Mein');
smo225313.setAttribute('id', 'smo225313');
smo225313.setFont('Merriweather', 12, 'normal');
smo225313.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225311.addModifier(smo225313);
smo225313.addClass('lyric lyric-1');
smo225329v0ar.push(smo225311);
smo225329v0.addTickables(smo225329v0ar)
fmtsmo22532921.joinVoices([smo225329v0]);
const fmtsmo22664021 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo226640v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226640v0ar = [];
const smo226622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo226622.setAttribute('id', 'smo226622');
smo226640v0ar.push(smo226622);
const smo226623 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo226623.setAttribute('id', 'smo226623');
smo226640v0ar.push(smo226623);
const smo226624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo226624.setAttribute('id', 'smo226624');
smo226624.addModifier(new VF.Dot(), 0);
smo226640v0ar.push(smo226624);
smo226640v0.addTickables(smo226640v0ar)
fmtsmo22664021.joinVoices([smo226640v0]);
const fmtsmo22781721 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo227817v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227817v0ar = [];
const smo227797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo227797.setAttribute('id', 'smo227797');
smo227817v0ar.push(smo227797);
const smo227798 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo227798.setAttribute('id', 'smo227798');
smo227817v0ar.push(smo227798);
const smo227799 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo227799.setAttribute('id', 'smo227799');
smo227817v0ar.push(smo227799);
const smo227800 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo227800.setAttribute('id', 'smo227800');
smo227817v0ar.push(smo227800);
const smo227801 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo227801.setAttribute('id', 'smo227801');
smo227817v0ar.push(smo227801);
smo227817v0.addTickables(smo227817v0ar)
fmtsmo22781721.joinVoices([smo227817v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234711 = smo227797.getStemDirection();
smo227797.setStemDirection(dirsmo234711);
smo227798.setStemDirection(dirsmo234711);
smo227799.setStemDirection(dirsmo234711);
const smo234711 = new VF.Beam([smo227797,smo227798,smo227799]);
 
// formatting measures in staff group smo228595
fmtsmo22532921.format([smo225329v0,smo226640v0,smo227817v0], 166);
const stavesmo225329 = new VF.Stave(1034, 1197, 180);
stavesmo225329.setAttribute('id', 'stavesmo225329');
stavesmo225329.setBegBarType(VF.Barline.type.NONE);
stavesmo225329.setContext(context);
stavesmo225329.draw();
smo225329v0.draw(context, stavesmo225329);
const stavesmo226640 = new VF.Stave(1034, 1309, 180);
stavesmo226640.setAttribute('id', 'stavesmo226640');
stavesmo226640.setBegBarType(VF.Barline.type.NONE);
stavesmo226640.setContext(context);
stavesmo226640.draw();
smo226640v0.draw(context, stavesmo226640);
const stavesmo227817 = new VF.Stave(1034, 1449, 180);
stavesmo227817.setAttribute('id', 'stavesmo227817');
stavesmo227817.setBegBarType(VF.Barline.type.NONE);
stavesmo227817.setContext(context);
stavesmo227817.draw();
smo227817v0.draw(context, stavesmo227817);
smo234711.setContext(context);
smo234711.draw();
const rightsmo228595stavesmo2253292 = new VF.StaveConnector(stavesmo225329, stavesmo227817).setType(0);
rightsmo228595stavesmo2253292.setContext(context).draw();
// modifier from 0-12-0-3 to 0-13-0-0
const smo235512 = new VF.StaveTie({ first_note: smo225098, last_note: smo225117, 
          firstNote: smo225098, lastNote: smo225117, first_indices: [0], last_indices: [0]});
smo235512.setContext(context).draw();
// modifier from 0-14-0-0 to 0-15-0-0
const smo235513 = new VF.StaveTie({ first_note: smo225140, last_note: smo225159, 
          firstNote: smo225140, lastNote: smo225159, first_indices: [0], last_indices: [0]});
smo235513.setContext(context).draw();
// modifier from 0-16-0-0 to 0-16-0-0
const smo235514 = new VF.StaveTie({ first_note: smo225189, last_note: smo225189, 
          firstNote: smo225189, lastNote: smo225189, first_indices: [0], last_indices: [0]});
smo235514.setContext(context).draw();
// modifier from 0-18-0-1 to 0-19-0-0
const smo235515 = new VF.StaveTie({ first_note: smo225241, last_note: smo225260, 
          firstNote: smo225241, lastNote: smo225260, first_indices: [0], last_indices: [0]});
smo235515.setContext(context).draw();
// modifier from 0-20-0-0 to 0-21-0-0
const smo235516 = new VF.StaveTie({ first_note: smo225290, last_note: smo225309, 
          firstNote: smo225290, lastNote: smo225309, first_indices: [0], last_indices: [0]});
smo235516.setContext(context).draw();
// modifier from 1-8-0-0 to 1-9-0-0
const smo235517 = new VF.StaveTie({ first_note: smo226390, last_note: smo226407, 
          firstNote: smo226390, lastNote: smo226407, first_indices: [0,1], last_indices: [0,1]});
smo235517.setContext(context).draw();
// modifier from 1-10-0-0 to 1-11-0-0
const smo235518 = new VF.StaveTie({ first_note: smo226424, last_note: smo226441, 
          firstNote: smo226424, lastNote: smo226441, first_indices: [0,1], last_indices: [0,1]});
smo235518.setContext(context).draw();
// modifier from 1-6-0-0 to 1-7-0-0
const smo235519 = new VF.StaveTie({ first_note: smo226356, last_note: null, 
          firstNote: smo226356, lastNote: null, first_indices: [0,1], last_indices: [0,1]});
smo235519.setContext(context).draw();
// modifier from 1-6-0-0 to 1-7-0-0
const smo235520 = new VF.StaveTie({ first_note: null, last_note: smo226373, 
          firstNote: null, lastNote: smo226373, first_indices: [0,1], last_indices: [0,1]});
smo235520.setContext(context).draw();
// modifier from 1-4-0-0 to 1-5-0-0
const smo235521 = new VF.StaveTie({ first_note: smo226321, last_note: smo226338, 
          firstNote: smo226321, lastNote: smo226338, first_indices: [0], last_indices: [0]});
smo235521.setContext(context).draw();
// modifier from 2-15-1-0 to 2-15-1-1
const smo235522 = new VF.Curve(smo227674, smo227675, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo235522.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo224949').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo224969').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo224970').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo224972').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo224973').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo224975').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo224976').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo224978').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo224979').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo224997').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo224998').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo225018').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo225019').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo225021').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225022').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo225024').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225025').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo225027').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225028').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo225046').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225047').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo225050').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo225068').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225069').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo225072').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo225090').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225091').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo225093').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo225094').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo225096').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo225097').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo225099').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225100').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo225119').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo225123').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo225141').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo225142').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo225160').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo225162').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225163').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo225165').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo225166').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo225168').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo225169').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo225171').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo225172').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo225190').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo225191').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo225209').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo225211').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225212').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo225214').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225215').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo225217').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225218').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo225220').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo225221').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo225239').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225240').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo225243').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo225261').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo225263').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225264').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo225266').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225267').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo225269').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo225270').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo225272').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo225273').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo225291').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225292').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo225310').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo225312').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo225313').setAttributeNS('', 'transform', 'translate(0 18)');
}
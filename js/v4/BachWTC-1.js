// @@ Well-Tempered Clavier p 2/6  by Bach
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
const fmtsmo5723721 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo57237v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57237v0ar = [];
const smo57206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57206.setAttribute('id', 'smo57206');
smo57237v0ar.push(smo57206);
const smo57207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57207.setAttribute('id', 'smo57207');
smo57237v0ar.push(smo57207);
const smo57208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57208.setAttribute('id', 'smo57208');
smo57237v0ar.push(smo57208);
const smo57209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo57209.setAttribute('id', 'smo57209');
const smo572090acc = new VF.Accidental('b');
smo57209.addModifier(smo572090acc, 0);
smo57237v0ar.push(smo57209);
const smo57210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57210.setAttribute('id', 'smo57210');
smo57237v0ar.push(smo57210);
const smo57211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57211.setAttribute('id', 'smo57211');
smo57237v0ar.push(smo57211);
const smo57212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo57212.setAttribute('id', 'smo57212');
smo57237v0ar.push(smo57212);
const smo57213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57213.setAttribute('id', 'smo57213');
smo57237v0ar.push(smo57213);
const smo57214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57214.setAttribute('id', 'smo57214');
smo57237v0ar.push(smo57214);
const smo57215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57215.setAttribute('id', 'smo57215');
smo57237v0ar.push(smo57215);
const smo57216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo57216.setAttribute('id', 'smo57216');
smo57237v0ar.push(smo57216);
const smo57217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57217.setAttribute('id', 'smo57217');
smo57237v0ar.push(smo57217);
const smo57218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57218.setAttribute('id', 'smo57218');
smo57237v0ar.push(smo57218);
const smo57219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo57219.setAttribute('id', 'smo57219');
smo57237v0ar.push(smo57219);
smo57237v0.addTickables(smo57237v0ar)
fmtsmo5723721.joinVoices([smo57237v0]);
const smo57237v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57237v1ar = [];
const smo57220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57220.setAttribute('id', 'smo57220');
smo57220.setStyle({ fillStyle: '#aaaaaa7f' });
smo57237v1ar.push(smo57220);
const smo57221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57221.setAttribute('id', 'smo57221');
smo57221.setStyle({ fillStyle: '#aaaaaa7f' });
smo57221.addModifier(new VF.Dot(), 0);
smo57221.addModifier(new VF.Dot(), 0);
smo57237v1ar.push(smo57221);
const smo57222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57222.setAttribute('id', 'smo57222');
smo57222.setStyle({ fillStyle: '#aaaaaa7f' });
smo57237v1ar.push(smo57222);
const smo57223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57223.setAttribute('id', 'smo57223');
smo57223.setStyle({ fillStyle: '#aaaaaa7f' });
smo57223.addModifier(new VF.Dot(), 0);
smo57223.addModifier(new VF.Dot(), 0);
smo57237v1ar.push(smo57223);
smo57237v1.addTickables(smo57237v1ar)
fmtsmo5723721.joinVoices([smo57237v1]);
const fmtsmo6247221 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo62472v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62472v0ar = [];
const smo62451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62451.setAttribute('id', 'smo62451');
smo62472v0ar.push(smo62451);
const smo62452 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo62452.setAttribute('id', 'smo62452');
smo62452.addModifier(new VF.Dot(), 0);
smo62472v0ar.push(smo62452);
const smo62453 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo62453.setAttribute('id', 'smo62453');
smo62472v0ar.push(smo62453);
const smo62454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62454.setAttribute('id', 'smo62454');
smo62472v0ar.push(smo62454);
const smo62455 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"r","stem_direction":1,"auto_stem":false,"keys":["dn/3/r"]}'))
smo62455.setAttribute('id', 'smo62455');
smo62455.addModifier(new VF.Dot(), 0);
smo62472v0ar.push(smo62455);
const smo62456 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo62456.setAttribute('id', 'smo62456');
smo62472v0ar.push(smo62456);
smo62472v0.addTickables(smo62472v0ar)
fmtsmo6247221.joinVoices([smo62472v0]);
const smo62472v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62472v1ar = [];
const smo62457 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/2/n"]}'))
smo62457.setAttribute('id', 'smo62457');
smo62457.setStyle({ fillStyle: "#115511" });
const smo624570acc = new VF.Accidental('#');
smo62457.addModifier(smo624570acc, 0);
smo62472v1ar.push(smo62457);
const smo62458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/2/n"]}'))
smo62458.setAttribute('id', 'smo62458');
smo62458.setStyle({ fillStyle: "#115511" });
smo62472v1ar.push(smo62458);
smo62472v1.addTickables(smo62472v1ar)
fmtsmo6247221.joinVoices([smo62472v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66149 = smo57207.getStemDirection();
smo57207.setStemDirection(dirsmo66149);
smo57208.setStemDirection(dirsmo66149);
const smo66149 = new VF.Beam([smo57207,smo57208]);
const dirsmo66150 = smo57209.getStemDirection();
smo57209.setStemDirection(dirsmo66150);
smo57210.setStemDirection(dirsmo66150);
smo57211.setStemDirection(dirsmo66150);
smo57212.setStemDirection(dirsmo66150);
const smo66150 = new VF.Beam([smo57209,smo57210,smo57211,smo57212]);
const dirsmo66151 = smo57214.getStemDirection();
smo57214.setStemDirection(dirsmo66151);
smo57215.setStemDirection(dirsmo66151);
const smo66151 = new VF.Beam([smo57214,smo57215]);
const dirsmo66152 = smo57216.getStemDirection();
smo57216.setStemDirection(dirsmo66152);
smo57217.setStemDirection(dirsmo66152);
smo57218.setStemDirection(dirsmo66152);
smo57219.setStemDirection(dirsmo66152);
const smo66152 = new VF.Beam([smo57216,smo57217,smo57218,smo57219]);
 
// formatting measures in staff group smo55345
fmtsmo5723721.format([smo57237v0,smo57237v1,smo62472v0,smo62472v1], 584);
const stavesmo57237 = new VF.Stave(90, 247, 642);
stavesmo57237.setAttribute('id', 'stavesmo57237');
stavesmo57237.setBegBarType(1);
stavesmo57237.addClef('treble');
stavesmo57237.setContext(context);
stavesmo57237.draw();
smo57237v0.draw(context, stavesmo57237);
smo57237v1.draw(context, stavesmo57237);
smo66149.setContext(context);
smo66149.draw();
smo66150.setContext(context);
smo66150.draw();
smo66151.setContext(context);
smo66151.draw();
smo66152.setContext(context);
smo66152.draw();
const stavesmo62472 = new VF.Stave(90, 393, 642);
stavesmo62472.setAttribute('id', 'stavesmo62472');
stavesmo62472.setBegBarType(1);
stavesmo62472.addClef('bass');
stavesmo62472.setContext(context);
stavesmo62472.draw();
smo62472v0.draw(context, stavesmo62472);
smo62472v1.draw(context, stavesmo62472);
const leftsmo55345stavesmo572371 = new VF.StaveConnector(stavesmo57237, stavesmo62472).setType(3);
leftsmo55345stavesmo572371.setContext(context).draw();
const fmtsmo5726922 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo57269v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57269v0ar = [];
const smo57238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57238.setAttribute('id', 'smo57238');
smo57269v0ar.push(smo57238);
const smo57239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57239.setAttribute('id', 'smo57239');
smo57269v0ar.push(smo57239);
const smo57240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57240.setAttribute('id', 'smo57240');
smo57269v0ar.push(smo57240);
const smo57241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57241.setAttribute('id', 'smo57241');
smo57269v0ar.push(smo57241);
const smo57242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57242.setAttribute('id', 'smo57242');
smo57269v0ar.push(smo57242);
const smo57243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57243.setAttribute('id', 'smo57243');
smo57269v0ar.push(smo57243);
const smo57244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57244.setAttribute('id', 'smo57244');
smo57269v0ar.push(smo57244);
const smo57245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57245.setAttribute('id', 'smo57245');
smo57269v0ar.push(smo57245);
const smo57246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57246.setAttribute('id', 'smo57246');
smo57269v0ar.push(smo57246);
const smo57247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57247.setAttribute('id', 'smo57247');
smo57269v0ar.push(smo57247);
const smo57248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57248.setAttribute('id', 'smo57248');
smo57269v0ar.push(smo57248);
const smo57249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57249.setAttribute('id', 'smo57249');
smo57269v0ar.push(smo57249);
const smo57250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57250.setAttribute('id', 'smo57250');
smo57269v0ar.push(smo57250);
const smo57251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57251.setAttribute('id', 'smo57251');
smo57269v0ar.push(smo57251);
smo57269v0.addTickables(smo57269v0ar)
fmtsmo5726922.joinVoices([smo57269v0]);
const smo57269v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57269v1ar = [];
const smo57252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57252.setAttribute('id', 'smo57252');
smo57252.setStyle({ fillStyle: '#aaaaaa7f' });
smo57269v1ar.push(smo57252);
const smo57253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57253.setAttribute('id', 'smo57253');
smo57253.setStyle({ fillStyle: '#aaaaaa7f' });
smo57253.addModifier(new VF.Dot(), 0);
smo57253.addModifier(new VF.Dot(), 0);
smo57269v1ar.push(smo57253);
const smo57254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57254.setAttribute('id', 'smo57254');
smo57254.setStyle({ fillStyle: '#aaaaaa7f' });
smo57269v1ar.push(smo57254);
const smo57255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57255.setAttribute('id', 'smo57255');
smo57255.setStyle({ fillStyle: '#aaaaaa7f' });
smo57255.addModifier(new VF.Dot(), 0);
smo57255.addModifier(new VF.Dot(), 0);
smo57269v1ar.push(smo57255);
smo57269v1.addTickables(smo57269v1ar)
fmtsmo5726922.joinVoices([smo57269v1]);
const fmtsmo6249422 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo62494v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62494v0ar = [];
const smo62473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62473.setAttribute('id', 'smo62473');
smo62494v0ar.push(smo62473);
const smo62474 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62474.setAttribute('id', 'smo62474');
smo62474.addModifier(new VF.Dot(), 0);
smo62494v0ar.push(smo62474);
const smo62475 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62475.setAttribute('id', 'smo62475');
smo62494v0ar.push(smo62475);
const smo62476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62476.setAttribute('id', 'smo62476');
smo62494v0ar.push(smo62476);
const smo62477 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62477.setAttribute('id', 'smo62477');
smo62477.addModifier(new VF.Dot(), 0);
smo62494v0ar.push(smo62477);
const smo62478 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62478.setAttribute('id', 'smo62478');
smo62494v0ar.push(smo62478);
smo62494v0.addTickables(smo62494v0ar)
fmtsmo6249422.joinVoices([smo62494v0]);
const smo62494v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62494v1ar = [];
const smo62479 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/2/n"]}'))
smo62479.setAttribute('id', 'smo62479');
smo62479.setStyle({ fillStyle: "#115511" });
const smo624790acc = new VF.Accidental('b');
smo62479.addModifier(smo624790acc, 0);
smo62494v1ar.push(smo62479);
const smo62480 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/2/n"]}'))
smo62480.setAttribute('id', 'smo62480');
smo62480.setStyle({ fillStyle: "#115511" });
smo62494v1ar.push(smo62480);
smo62494v1.addTickables(smo62494v1ar)
fmtsmo6249422.joinVoices([smo62494v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66157 = smo57239.getStemDirection();
smo57239.setStemDirection(dirsmo66157);
smo57240.setStemDirection(dirsmo66157);
const smo66157 = new VF.Beam([smo57239,smo57240]);
const dirsmo66158 = smo57241.getStemDirection();
smo57241.setStemDirection(dirsmo66158);
smo57242.setStemDirection(dirsmo66158);
smo57243.setStemDirection(dirsmo66158);
smo57244.setStemDirection(dirsmo66158);
const smo66158 = new VF.Beam([smo57241,smo57242,smo57243,smo57244]);
const dirsmo66159 = smo57246.getStemDirection();
smo57246.setStemDirection(dirsmo66159);
smo57247.setStemDirection(dirsmo66159);
const smo66159 = new VF.Beam([smo57246,smo57247]);
const dirsmo66160 = smo57248.getStemDirection();
smo57248.setStemDirection(dirsmo66160);
smo57249.setStemDirection(dirsmo66160);
smo57250.setStemDirection(dirsmo66160);
smo57251.setStemDirection(dirsmo66160);
const smo66160 = new VF.Beam([smo57248,smo57249,smo57250,smo57251]);
 
// formatting measures in staff group smo55345
fmtsmo5726922.format([smo57269v0,smo57269v1,smo62494v0,smo62494v1], 535);
const stavesmo57269 = new VF.Stave(732, 247, 549);
stavesmo57269.setAttribute('id', 'stavesmo57269');
stavesmo57269.setBegBarType(VF.Barline.type.NONE);
stavesmo57269.setContext(context);
stavesmo57269.draw();
smo57269v0.draw(context, stavesmo57269);
smo57269v1.draw(context, stavesmo57269);
smo66157.setContext(context);
smo66157.draw();
smo66158.setContext(context);
smo66158.draw();
smo66159.setContext(context);
smo66159.draw();
smo66160.setContext(context);
smo66160.draw();
const stavesmo62494 = new VF.Stave(732, 393, 549);
stavesmo62494.setAttribute('id', 'stavesmo62494');
stavesmo62494.setBegBarType(VF.Barline.type.NONE);
stavesmo62494.setContext(context);
stavesmo62494.draw();
smo62494v0.draw(context, stavesmo62494);
smo62494v1.draw(context, stavesmo62494);
const fmtsmo5730123 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo57301v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57301v0ar = [];
const smo57270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57270.setAttribute('id', 'smo57270');
smo57301v0ar.push(smo57270);
const smo57271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57271.setAttribute('id', 'smo57271');
smo57301v0ar.push(smo57271);
const smo57272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57272.setAttribute('id', 'smo57272');
smo57301v0ar.push(smo57272);
const smo57273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57273.setAttribute('id', 'smo57273');
smo57301v0ar.push(smo57273);
const smo57274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57274.setAttribute('id', 'smo57274');
smo57301v0ar.push(smo57274);
const smo57275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57275.setAttribute('id', 'smo57275');
smo57301v0ar.push(smo57275);
const smo57276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57276.setAttribute('id', 'smo57276');
smo57301v0ar.push(smo57276);
const smo57277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57277.setAttribute('id', 'smo57277');
smo57301v0ar.push(smo57277);
const smo57278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57278.setAttribute('id', 'smo57278');
smo57301v0ar.push(smo57278);
const smo57279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57279.setAttribute('id', 'smo57279');
smo57301v0ar.push(smo57279);
const smo57280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57280.setAttribute('id', 'smo57280');
smo57301v0ar.push(smo57280);
const smo57281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57281.setAttribute('id', 'smo57281');
smo57301v0ar.push(smo57281);
const smo57282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57282.setAttribute('id', 'smo57282');
smo57301v0ar.push(smo57282);
const smo57283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57283.setAttribute('id', 'smo57283');
smo57301v0ar.push(smo57283);
smo57301v0.addTickables(smo57301v0ar)
fmtsmo5730123.joinVoices([smo57301v0]);
const smo57301v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57301v1ar = [];
const smo57284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57284.setAttribute('id', 'smo57284');
smo57284.setStyle({ fillStyle: '#aaaaaa7f' });
smo57301v1ar.push(smo57284);
const smo57285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57285.setAttribute('id', 'smo57285');
smo57285.setStyle({ fillStyle: '#aaaaaa7f' });
smo57285.addModifier(new VF.Dot(), 0);
smo57285.addModifier(new VF.Dot(), 0);
smo57301v1ar.push(smo57285);
const smo57286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57286.setAttribute('id', 'smo57286');
smo57286.setStyle({ fillStyle: '#aaaaaa7f' });
smo57301v1ar.push(smo57286);
const smo57287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57287.setAttribute('id', 'smo57287');
smo57287.setStyle({ fillStyle: '#aaaaaa7f' });
smo57287.addModifier(new VF.Dot(), 0);
smo57287.addModifier(new VF.Dot(), 0);
smo57301v1ar.push(smo57287);
smo57301v1.addTickables(smo57301v1ar)
fmtsmo5730123.joinVoices([smo57301v1]);
const fmtsmo6251623 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo62516v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62516v0ar = [];
const smo62495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62495.setAttribute('id', 'smo62495');
smo62516v0ar.push(smo62495);
const smo62496 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62496.setAttribute('id', 'smo62496');
smo62496.addModifier(new VF.Dot(), 0);
smo62516v0ar.push(smo62496);
const smo62497 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62497.setAttribute('id', 'smo62497');
smo62516v0ar.push(smo62497);
const smo62498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62498.setAttribute('id', 'smo62498');
smo62516v0ar.push(smo62498);
const smo62499 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62499.setAttribute('id', 'smo62499');
smo62499.addModifier(new VF.Dot(), 0);
smo62516v0ar.push(smo62499);
const smo62500 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62500.setAttribute('id', 'smo62500');
smo62516v0ar.push(smo62500);
smo62516v0.addTickables(smo62516v0ar)
fmtsmo6251623.joinVoices([smo62516v0]);
const smo62516v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62516v1ar = [];
const smo62501 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo62501.setAttribute('id', 'smo62501');
smo62501.setStyle({ fillStyle: "#115511" });
smo62516v1ar.push(smo62501);
const smo62502 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo62502.setAttribute('id', 'smo62502');
smo62502.setStyle({ fillStyle: "#115511" });
smo62516v1ar.push(smo62502);
smo62516v1.addTickables(smo62516v1ar)
fmtsmo6251623.joinVoices([smo62516v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66165 = smo57271.getStemDirection();
smo57271.setStemDirection(dirsmo66165);
smo57272.setStemDirection(dirsmo66165);
const smo66165 = new VF.Beam([smo57271,smo57272]);
const dirsmo66166 = smo57273.getStemDirection();
smo57273.setStemDirection(dirsmo66166);
smo57274.setStemDirection(dirsmo66166);
smo57275.setStemDirection(dirsmo66166);
smo57276.setStemDirection(dirsmo66166);
const smo66166 = new VF.Beam([smo57273,smo57274,smo57275,smo57276]);
const dirsmo66167 = smo57278.getStemDirection();
smo57278.setStemDirection(dirsmo66167);
smo57279.setStemDirection(dirsmo66167);
const smo66167 = new VF.Beam([smo57278,smo57279]);
const dirsmo66168 = smo57280.getStemDirection();
smo57280.setStemDirection(dirsmo66168);
smo57281.setStemDirection(dirsmo66168);
smo57282.setStemDirection(dirsmo66168);
smo57283.setStemDirection(dirsmo66168);
const smo66168 = new VF.Beam([smo57280,smo57281,smo57282,smo57283]);
 
// formatting measures in staff group smo55345
fmtsmo5730123.format([smo57301v0,smo57301v1,smo62516v0,smo62516v1], 512);
const stavesmo57301 = new VF.Stave(1281, 247, 526);
stavesmo57301.setAttribute('id', 'stavesmo57301');
stavesmo57301.setBegBarType(VF.Barline.type.NONE);
stavesmo57301.setContext(context);
stavesmo57301.draw();
smo57301v0.draw(context, stavesmo57301);
smo57301v1.draw(context, stavesmo57301);
smo66165.setContext(context);
smo66165.draw();
smo66166.setContext(context);
smo66166.draw();
smo66167.setContext(context);
smo66167.draw();
smo66168.setContext(context);
smo66168.draw();
const stavesmo62516 = new VF.Stave(1281, 393, 526);
stavesmo62516.setAttribute('id', 'stavesmo62516');
stavesmo62516.setBegBarType(VF.Barline.type.NONE);
stavesmo62516.setContext(context);
stavesmo62516.draw();
smo62516v0.draw(context, stavesmo62516);
smo62516v1.draw(context, stavesmo62516);
const rightsmo55345stavesmo573011 = new VF.StaveConnector(stavesmo57301, stavesmo62516).setType(0);
rightsmo55345stavesmo573011.setContext(context).draw();
const fmtsmo5733324 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo57333v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57333v0ar = [];
const smo57302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57302.setAttribute('id', 'smo57302');
smo57333v0ar.push(smo57302);
const smo57303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57303.setAttribute('id', 'smo57303');
smo57333v0ar.push(smo57303);
const smo57304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57304.setAttribute('id', 'smo57304');
smo57333v0ar.push(smo57304);
const smo57305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57305.setAttribute('id', 'smo57305');
smo57333v0ar.push(smo57305);
const smo57306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57306.setAttribute('id', 'smo57306');
smo57333v0ar.push(smo57306);
const smo57307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57307.setAttribute('id', 'smo57307');
smo57333v0ar.push(smo57307);
const smo57308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57308.setAttribute('id', 'smo57308');
smo57333v0ar.push(smo57308);
const smo57309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57309.setAttribute('id', 'smo57309');
smo57333v0ar.push(smo57309);
const smo57310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57310.setAttribute('id', 'smo57310');
smo57333v0ar.push(smo57310);
const smo57311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57311.setAttribute('id', 'smo57311');
smo57333v0ar.push(smo57311);
const smo57312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57312.setAttribute('id', 'smo57312');
smo57333v0ar.push(smo57312);
const smo57313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57313.setAttribute('id', 'smo57313');
smo57333v0ar.push(smo57313);
const smo57314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57314.setAttribute('id', 'smo57314');
smo57333v0ar.push(smo57314);
const smo57315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57315.setAttribute('id', 'smo57315');
smo57333v0ar.push(smo57315);
smo57333v0.addTickables(smo57333v0ar)
fmtsmo5733324.joinVoices([smo57333v0]);
const smo57333v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57333v1ar = [];
const smo57316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57316.setAttribute('id', 'smo57316');
smo57316.setStyle({ fillStyle: '#aaaaaa7f' });
smo57333v1ar.push(smo57316);
const smo57317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57317.setAttribute('id', 'smo57317');
smo57317.setStyle({ fillStyle: '#aaaaaa7f' });
smo57317.addModifier(new VF.Dot(), 0);
smo57317.addModifier(new VF.Dot(), 0);
smo57333v1ar.push(smo57317);
const smo57318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57318.setAttribute('id', 'smo57318');
smo57318.setStyle({ fillStyle: '#aaaaaa7f' });
smo57333v1ar.push(smo57318);
const smo57319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57319.setAttribute('id', 'smo57319');
smo57319.setStyle({ fillStyle: '#aaaaaa7f' });
smo57319.addModifier(new VF.Dot(), 0);
smo57319.addModifier(new VF.Dot(), 0);
smo57333v1ar.push(smo57319);
smo57333v1.addTickables(smo57333v1ar)
fmtsmo5733324.joinVoices([smo57333v1]);
const fmtsmo6253824 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo62538v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62538v0ar = [];
const smo62517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62517.setAttribute('id', 'smo62517');
smo62538v0ar.push(smo62517);
const smo62518 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62518.setAttribute('id', 'smo62518');
smo62518.addModifier(new VF.Dot(), 0);
smo62538v0ar.push(smo62518);
const smo62519 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62519.setAttribute('id', 'smo62519');
smo62538v0ar.push(smo62519);
const smo62520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62520.setAttribute('id', 'smo62520');
smo62538v0ar.push(smo62520);
const smo62521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62521.setAttribute('id', 'smo62521');
smo62521.addModifier(new VF.Dot(), 0);
smo62538v0ar.push(smo62521);
const smo62522 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62522.setAttribute('id', 'smo62522');
smo62538v0ar.push(smo62522);
smo62538v0.addTickables(smo62538v0ar)
fmtsmo6253824.joinVoices([smo62538v0]);
const smo62538v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62538v1ar = [];
const smo62523 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo62523.setAttribute('id', 'smo62523');
smo62523.setStyle({ fillStyle: "#115511" });
smo62538v1ar.push(smo62523);
const smo62524 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo62524.setAttribute('id', 'smo62524');
smo62524.setStyle({ fillStyle: "#115511" });
smo62538v1ar.push(smo62524);
smo62538v1.addTickables(smo62538v1ar)
fmtsmo6253824.joinVoices([smo62538v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66182 = smo57303.getStemDirection();
smo57303.setStemDirection(dirsmo66182);
smo57304.setStemDirection(dirsmo66182);
const smo66182 = new VF.Beam([smo57303,smo57304]);
const dirsmo66183 = smo57305.getStemDirection();
smo57305.setStemDirection(dirsmo66183);
smo57306.setStemDirection(dirsmo66183);
smo57307.setStemDirection(dirsmo66183);
smo57308.setStemDirection(dirsmo66183);
const smo66183 = new VF.Beam([smo57305,smo57306,smo57307,smo57308]);
const dirsmo66184 = smo57310.getStemDirection();
smo57310.setStemDirection(dirsmo66184);
smo57311.setStemDirection(dirsmo66184);
const smo66184 = new VF.Beam([smo57310,smo57311]);
const dirsmo66185 = smo57312.getStemDirection();
smo57312.setStemDirection(dirsmo66185);
smo57313.setStemDirection(dirsmo66185);
smo57314.setStemDirection(dirsmo66185);
smo57315.setStemDirection(dirsmo66185);
const smo66185 = new VF.Beam([smo57312,smo57313,smo57314,smo57315]);
 
// formatting measures in staff group smo55345
fmtsmo5733324.format([smo57333v0,smo57333v1,smo62538v0,smo62538v1], 545);
const stavesmo57333 = new VF.Stave(90, 525, 603);
stavesmo57333.setAttribute('id', 'stavesmo57333');
stavesmo57333.setBegBarType(1);
stavesmo57333.addClef('treble');
stavesmo57333.setContext(context);
stavesmo57333.draw();
smo57333v0.draw(context, stavesmo57333);
smo57333v1.draw(context, stavesmo57333);
smo66182.setContext(context);
smo66182.draw();
smo66183.setContext(context);
smo66183.draw();
smo66184.setContext(context);
smo66184.draw();
smo66185.setContext(context);
smo66185.draw();
const stavesmo62538 = new VF.Stave(90, 674, 603);
stavesmo62538.setAttribute('id', 'stavesmo62538');
stavesmo62538.setBegBarType(1);
stavesmo62538.addClef('bass');
stavesmo62538.setContext(context);
stavesmo62538.draw();
smo62538v0.draw(context, stavesmo62538);
smo62538v1.draw(context, stavesmo62538);
const leftsmo55345stavesmo573331 = new VF.StaveConnector(stavesmo57333, stavesmo62538).setType(3);
leftsmo55345stavesmo573331.setContext(context).draw();
const fmtsmo5736525 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo57365v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57365v0ar = [];
const smo57334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57334.setAttribute('id', 'smo57334');
smo57365v0ar.push(smo57334);
const smo57335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57335.setAttribute('id', 'smo57335');
smo57365v0ar.push(smo57335);
const smo57336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57336.setAttribute('id', 'smo57336');
smo57365v0ar.push(smo57336);
const smo57337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57337.setAttribute('id', 'smo57337');
smo57365v0ar.push(smo57337);
const smo57338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57338.setAttribute('id', 'smo57338');
smo57365v0ar.push(smo57338);
const smo57339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57339.setAttribute('id', 'smo57339');
smo57365v0ar.push(smo57339);
const smo57340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57340.setAttribute('id', 'smo57340');
smo57365v0ar.push(smo57340);
const smo57341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57341.setAttribute('id', 'smo57341');
smo57365v0ar.push(smo57341);
const smo57342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57342.setAttribute('id', 'smo57342');
smo57365v0ar.push(smo57342);
const smo57343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57343.setAttribute('id', 'smo57343');
smo57365v0ar.push(smo57343);
const smo57344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57344.setAttribute('id', 'smo57344');
smo57365v0ar.push(smo57344);
const smo57345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57345.setAttribute('id', 'smo57345');
smo57365v0ar.push(smo57345);
const smo57346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57346.setAttribute('id', 'smo57346');
smo57365v0ar.push(smo57346);
const smo57347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57347.setAttribute('id', 'smo57347');
smo57365v0ar.push(smo57347);
smo57365v0.addTickables(smo57365v0ar)
fmtsmo5736525.joinVoices([smo57365v0]);
const smo57365v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57365v1ar = [];
const smo57348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57348.setAttribute('id', 'smo57348');
smo57348.setStyle({ fillStyle: '#aaaaaa7f' });
smo57365v1ar.push(smo57348);
const smo57349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57349.setAttribute('id', 'smo57349');
smo57349.setStyle({ fillStyle: '#aaaaaa7f' });
smo57349.addModifier(new VF.Dot(), 0);
smo57349.addModifier(new VF.Dot(), 0);
smo57365v1ar.push(smo57349);
const smo57350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57350.setAttribute('id', 'smo57350');
smo57350.setStyle({ fillStyle: '#aaaaaa7f' });
smo57365v1ar.push(smo57350);
const smo57351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57351.setAttribute('id', 'smo57351');
smo57351.setStyle({ fillStyle: '#aaaaaa7f' });
smo57351.addModifier(new VF.Dot(), 0);
smo57351.addModifier(new VF.Dot(), 0);
smo57365v1ar.push(smo57351);
smo57365v1.addTickables(smo57365v1ar)
fmtsmo5736525.joinVoices([smo57365v1]);
const fmtsmo6256025 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo62560v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62560v0ar = [];
const smo62539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62539.setAttribute('id', 'smo62539');
smo62560v0ar.push(smo62539);
const smo62540 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62540.setAttribute('id', 'smo62540');
smo62540.addModifier(new VF.Dot(), 0);
smo62560v0ar.push(smo62540);
const smo62541 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62541.setAttribute('id', 'smo62541');
smo62560v0ar.push(smo62541);
const smo62542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62542.setAttribute('id', 'smo62542');
smo62560v0ar.push(smo62542);
const smo62543 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62543.setAttribute('id', 'smo62543');
smo62543.addModifier(new VF.Dot(), 0);
smo62560v0ar.push(smo62543);
const smo62544 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62544.setAttribute('id', 'smo62544');
smo62560v0ar.push(smo62544);
smo62560v0.addTickables(smo62560v0ar)
fmtsmo6256025.joinVoices([smo62560v0]);
const smo62560v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62560v1ar = [];
const smo62545 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo62545.setAttribute('id', 'smo62545');
smo62545.setStyle({ fillStyle: "#115511" });
smo62560v1ar.push(smo62545);
const smo62546 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo62546.setAttribute('id', 'smo62546');
smo62546.setStyle({ fillStyle: "#115511" });
smo62560v1ar.push(smo62546);
smo62560v1.addTickables(smo62560v1ar)
fmtsmo6256025.joinVoices([smo62560v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66190 = smo57335.getStemDirection();
smo57335.setStemDirection(dirsmo66190);
smo57336.setStemDirection(dirsmo66190);
const smo66190 = new VF.Beam([smo57335,smo57336]);
const dirsmo66191 = smo57337.getStemDirection();
smo57337.setStemDirection(dirsmo66191);
smo57338.setStemDirection(dirsmo66191);
smo57339.setStemDirection(dirsmo66191);
smo57340.setStemDirection(dirsmo66191);
const smo66191 = new VF.Beam([smo57337,smo57338,smo57339,smo57340]);
const dirsmo66192 = smo57342.getStemDirection();
smo57342.setStemDirection(dirsmo66192);
smo57343.setStemDirection(dirsmo66192);
const smo66192 = new VF.Beam([smo57342,smo57343]);
const dirsmo66193 = smo57344.getStemDirection();
smo57344.setStemDirection(dirsmo66193);
smo57345.setStemDirection(dirsmo66193);
smo57346.setStemDirection(dirsmo66193);
smo57347.setStemDirection(dirsmo66193);
const smo66193 = new VF.Beam([smo57344,smo57345,smo57346,smo57347]);
 
// formatting measures in staff group smo55345
fmtsmo5736525.format([smo57365v0,smo57365v1,smo62560v0,smo62560v1], 544);
const stavesmo57365 = new VF.Stave(693, 525, 558);
stavesmo57365.setAttribute('id', 'stavesmo57365');
stavesmo57365.setBegBarType(VF.Barline.type.NONE);
stavesmo57365.setContext(context);
stavesmo57365.draw();
smo57365v0.draw(context, stavesmo57365);
smo57365v1.draw(context, stavesmo57365);
smo66190.setContext(context);
smo66190.draw();
smo66191.setContext(context);
smo66191.draw();
smo66192.setContext(context);
smo66192.draw();
smo66193.setContext(context);
smo66193.draw();
const stavesmo62560 = new VF.Stave(693, 674, 558);
stavesmo62560.setAttribute('id', 'stavesmo62560');
stavesmo62560.setBegBarType(VF.Barline.type.NONE);
stavesmo62560.setContext(context);
stavesmo62560.draw();
smo62560v0.draw(context, stavesmo62560);
smo62560v1.draw(context, stavesmo62560);
const fmtsmo5739726 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo57397v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57397v0ar = [];
const smo57366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57366.setAttribute('id', 'smo57366');
smo57397v0ar.push(smo57366);
const smo57367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57367.setAttribute('id', 'smo57367');
smo57397v0ar.push(smo57367);
const smo57368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57368.setAttribute('id', 'smo57368');
smo57397v0ar.push(smo57368);
const smo57369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57369.setAttribute('id', 'smo57369');
smo57397v0ar.push(smo57369);
const smo57370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57370.setAttribute('id', 'smo57370');
smo57397v0ar.push(smo57370);
const smo57371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57371.setAttribute('id', 'smo57371');
smo57397v0ar.push(smo57371);
const smo57372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57372.setAttribute('id', 'smo57372');
smo57397v0ar.push(smo57372);
const smo57373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57373.setAttribute('id', 'smo57373');
smo57397v0ar.push(smo57373);
const smo57374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57374.setAttribute('id', 'smo57374');
smo57397v0ar.push(smo57374);
const smo57375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57375.setAttribute('id', 'smo57375');
smo57397v0ar.push(smo57375);
const smo57376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57376.setAttribute('id', 'smo57376');
smo57397v0ar.push(smo57376);
const smo57377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57377.setAttribute('id', 'smo57377');
smo57397v0ar.push(smo57377);
const smo57378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57378.setAttribute('id', 'smo57378');
smo57397v0ar.push(smo57378);
const smo57379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57379.setAttribute('id', 'smo57379');
smo57397v0ar.push(smo57379);
smo57397v0.addTickables(smo57397v0ar)
fmtsmo5739726.joinVoices([smo57397v0]);
const smo57397v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57397v1ar = [];
const smo57380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57380.setAttribute('id', 'smo57380');
smo57380.setStyle({ fillStyle: '#aaaaaa7f' });
smo57397v1ar.push(smo57380);
const smo57381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57381.setAttribute('id', 'smo57381');
smo57381.setStyle({ fillStyle: '#aaaaaa7f' });
smo57381.addModifier(new VF.Dot(), 0);
smo57381.addModifier(new VF.Dot(), 0);
smo57397v1ar.push(smo57381);
const smo57382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57382.setAttribute('id', 'smo57382');
smo57382.setStyle({ fillStyle: '#aaaaaa7f' });
smo57397v1ar.push(smo57382);
const smo57383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57383.setAttribute('id', 'smo57383');
smo57383.setStyle({ fillStyle: '#aaaaaa7f' });
smo57383.addModifier(new VF.Dot(), 0);
smo57383.addModifier(new VF.Dot(), 0);
smo57397v1ar.push(smo57383);
smo57397v1.addTickables(smo57397v1ar)
fmtsmo5739726.joinVoices([smo57397v1]);
const fmtsmo6258226 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo62582v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62582v0ar = [];
const smo62561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62561.setAttribute('id', 'smo62561');
smo62582v0ar.push(smo62561);
const smo62562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62562.setAttribute('id', 'smo62562');
smo62562.addModifier(new VF.Dot(), 0);
smo62582v0ar.push(smo62562);
const smo62563 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62563.setAttribute('id', 'smo62563');
smo62582v0ar.push(smo62563);
const smo62564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62564.setAttribute('id', 'smo62564');
smo62582v0ar.push(smo62564);
const smo62565 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62565.setAttribute('id', 'smo62565');
smo62565.addModifier(new VF.Dot(), 0);
smo62582v0ar.push(smo62565);
const smo62566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62566.setAttribute('id', 'smo62566');
smo62582v0ar.push(smo62566);
smo62582v0.addTickables(smo62582v0ar)
fmtsmo6258226.joinVoices([smo62582v0]);
const smo62582v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62582v1ar = [];
const smo62567 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo62567.setAttribute('id', 'smo62567');
smo62567.setStyle({ fillStyle: "#115511" });
smo62582v1ar.push(smo62567);
const smo62568 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo62568.setAttribute('id', 'smo62568');
smo62568.setStyle({ fillStyle: "#115511" });
smo62582v1ar.push(smo62568);
smo62582v1.addTickables(smo62582v1ar)
fmtsmo6258226.joinVoices([smo62582v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66198 = smo57367.getStemDirection();
smo57367.setStemDirection(dirsmo66198);
smo57368.setStemDirection(dirsmo66198);
const smo66198 = new VF.Beam([smo57367,smo57368]);
const dirsmo66199 = smo57369.getStemDirection();
smo57369.setStemDirection(dirsmo66199);
smo57370.setStemDirection(dirsmo66199);
smo57371.setStemDirection(dirsmo66199);
smo57372.setStemDirection(dirsmo66199);
const smo66199 = new VF.Beam([smo57369,smo57370,smo57371,smo57372]);
const dirsmo66200 = smo57374.getStemDirection();
smo57374.setStemDirection(dirsmo66200);
smo57375.setStemDirection(dirsmo66200);
const smo66200 = new VF.Beam([smo57374,smo57375]);
const dirsmo66201 = smo57376.getStemDirection();
smo57376.setStemDirection(dirsmo66201);
smo57377.setStemDirection(dirsmo66201);
smo57378.setStemDirection(dirsmo66201);
smo57379.setStemDirection(dirsmo66201);
const smo66201 = new VF.Beam([smo57376,smo57377,smo57378,smo57379]);
 
// formatting measures in staff group smo55345
fmtsmo5739726.format([smo57397v0,smo57397v1,smo62582v0,smo62582v1], 544);
const stavesmo57397 = new VF.Stave(1251, 525, 558);
stavesmo57397.setAttribute('id', 'stavesmo57397');
stavesmo57397.setBegBarType(VF.Barline.type.NONE);
stavesmo57397.setContext(context);
stavesmo57397.draw();
smo57397v0.draw(context, stavesmo57397);
smo57397v1.draw(context, stavesmo57397);
smo66198.setContext(context);
smo66198.draw();
smo66199.setContext(context);
smo66199.draw();
smo66200.setContext(context);
smo66200.draw();
smo66201.setContext(context);
smo66201.draw();
const stavesmo62582 = new VF.Stave(1251, 674, 558);
stavesmo62582.setAttribute('id', 'stavesmo62582');
stavesmo62582.setBegBarType(VF.Barline.type.NONE);
stavesmo62582.setContext(context);
stavesmo62582.draw();
smo62582v0.draw(context, stavesmo62582);
smo62582v1.draw(context, stavesmo62582);
const rightsmo55345stavesmo573971 = new VF.StaveConnector(stavesmo57397, stavesmo62582).setType(0);
rightsmo55345stavesmo573971.setContext(context).draw();
const fmtsmo5742927 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo57429v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57429v0ar = [];
const smo57398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57398.setAttribute('id', 'smo57398');
smo57429v0ar.push(smo57398);
const smo57399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57399.setAttribute('id', 'smo57399');
smo57429v0ar.push(smo57399);
const smo57400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57400.setAttribute('id', 'smo57400');
smo57429v0ar.push(smo57400);
const smo57401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo57401.setAttribute('id', 'smo57401');
const smo574010acc = new VF.Accidental('#');
smo57401.addModifier(smo574010acc, 0);
smo57429v0ar.push(smo57401);
const smo57402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57402.setAttribute('id', 'smo57402');
smo57429v0ar.push(smo57402);
const smo57403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57403.setAttribute('id', 'smo57403');
smo57429v0ar.push(smo57403);
const smo57404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo57404.setAttribute('id', 'smo57404');
smo57429v0ar.push(smo57404);
const smo57405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57405.setAttribute('id', 'smo57405');
smo57429v0ar.push(smo57405);
const smo57406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57406.setAttribute('id', 'smo57406');
smo57429v0ar.push(smo57406);
const smo57407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57407.setAttribute('id', 'smo57407');
smo57429v0ar.push(smo57407);
const smo57408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo57408.setAttribute('id', 'smo57408');
smo57429v0ar.push(smo57408);
const smo57409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57409.setAttribute('id', 'smo57409');
smo57429v0ar.push(smo57409);
const smo57410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57410.setAttribute('id', 'smo57410');
smo57429v0ar.push(smo57410);
const smo57411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo57411.setAttribute('id', 'smo57411');
smo57429v0ar.push(smo57411);
smo57429v0.addTickables(smo57429v0ar)
fmtsmo5742927.joinVoices([smo57429v0]);
const smo57429v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57429v1ar = [];
const smo57412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57412.setAttribute('id', 'smo57412');
smo57412.setStyle({ fillStyle: '#aaaaaa7f' });
smo57429v1ar.push(smo57412);
const smo57413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57413.setAttribute('id', 'smo57413');
smo57413.setStyle({ fillStyle: '#aaaaaa7f' });
smo57413.addModifier(new VF.Dot(), 0);
smo57413.addModifier(new VF.Dot(), 0);
smo57429v1ar.push(smo57413);
const smo57414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
smo57414.setAttribute('id', 'smo57414');
smo57414.setStyle({ fillStyle: "#115511" });
smo57429v1ar.push(smo57414);
const smo57415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57415.setAttribute('id', 'smo57415');
smo57415.setStyle({ fillStyle: '#aaaaaa7f' });
smo57415.addModifier(new VF.Dot(), 0);
smo57415.addModifier(new VF.Dot(), 0);
smo57429v1ar.push(smo57415);
smo57429v1.addTickables(smo57429v1ar)
fmtsmo5742927.joinVoices([smo57429v1]);
const fmtsmo6260427 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo62604v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62604v0ar = [];
const smo62583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62583.setAttribute('id', 'smo62583');
smo62604v0ar.push(smo62583);
const smo62584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/3/n"]}'))
smo62584.setAttribute('id', 'smo62584');
const smo625840acc = new VF.Accidental('#');
smo62584.addModifier(smo625840acc, 0);
smo62584.addModifier(new VF.Dot(), 0);
smo62604v0ar.push(smo62584);
const smo62585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/3/n"]}'))
smo62585.setAttribute('id', 'smo62585');
smo62604v0ar.push(smo62585);
const smo62586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62586.setAttribute('id', 'smo62586');
smo62604v0ar.push(smo62586);
const smo62587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/3/n"]}'))
smo62587.setAttribute('id', 'smo62587');
smo62587.addModifier(new VF.Dot(), 0);
smo62604v0ar.push(smo62587);
const smo62588 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/3/n"]}'))
smo62588.setAttribute('id', 'smo62588');
smo62604v0ar.push(smo62588);
smo62604v0.addTickables(smo62604v0ar)
fmtsmo6260427.joinVoices([smo62604v0]);
const smo62604v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62604v1ar = [];
const smo62589 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo62589.setAttribute('id', 'smo62589');
smo62589.setStyle({ fillStyle: "#115511" });
smo62604v1ar.push(smo62589);
const smo62590 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo62590.setAttribute('id', 'smo62590');
smo62590.setStyle({ fillStyle: "#115511" });
smo62604v1ar.push(smo62590);
smo62604v1.addTickables(smo62604v1ar)
fmtsmo6260427.joinVoices([smo62604v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66214 = smo57399.getStemDirection();
smo57399.setStemDirection(dirsmo66214);
smo57400.setStemDirection(dirsmo66214);
const smo66214 = new VF.Beam([smo57399,smo57400]);
const dirsmo66215 = smo57401.getStemDirection();
smo57401.setStemDirection(dirsmo66215);
smo57402.setStemDirection(dirsmo66215);
smo57403.setStemDirection(dirsmo66215);
smo57404.setStemDirection(dirsmo66215);
const smo66215 = new VF.Beam([smo57401,smo57402,smo57403,smo57404]);
const dirsmo66216 = smo57406.getStemDirection();
smo57406.setStemDirection(dirsmo66216);
smo57407.setStemDirection(dirsmo66216);
const smo66216 = new VF.Beam([smo57406,smo57407]);
const dirsmo66217 = smo57408.getStemDirection();
smo57408.setStemDirection(dirsmo66217);
smo57409.setStemDirection(dirsmo66217);
smo57410.setStemDirection(dirsmo66217);
smo57411.setStemDirection(dirsmo66217);
const smo66217 = new VF.Beam([smo57408,smo57409,smo57410,smo57411]);
 
// formatting measures in staff group smo55345
fmtsmo5742927.format([smo57429v0,smo57429v1,smo62604v0,smo62604v1], 578);
const stavesmo57429 = new VF.Stave(90, 801, 636);
stavesmo57429.setAttribute('id', 'stavesmo57429');
stavesmo57429.setBegBarType(1);
stavesmo57429.addClef('treble');
stavesmo57429.setContext(context);
stavesmo57429.draw();
smo57429v0.draw(context, stavesmo57429);
smo57429v1.draw(context, stavesmo57429);
smo66214.setContext(context);
smo66214.draw();
smo66215.setContext(context);
smo66215.draw();
smo66216.setContext(context);
smo66216.draw();
smo66217.setContext(context);
smo66217.draw();
const stavesmo62604 = new VF.Stave(90, 947, 636);
stavesmo62604.setAttribute('id', 'stavesmo62604');
stavesmo62604.setBegBarType(1);
stavesmo62604.addClef('bass');
stavesmo62604.setContext(context);
stavesmo62604.draw();
smo62604v0.draw(context, stavesmo62604);
smo62604v1.draw(context, stavesmo62604);
const leftsmo55345stavesmo574291 = new VF.StaveConnector(stavesmo57429, stavesmo62604).setType(3);
leftsmo55345stavesmo574291.setContext(context).draw();
const fmtsmo5746128 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo57461v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57461v0ar = [];
const smo57430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57430.setAttribute('id', 'smo57430');
smo57461v0ar.push(smo57430);
const smo57431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57431.setAttribute('id', 'smo57431');
smo57461v0ar.push(smo57431);
const smo57432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57432.setAttribute('id', 'smo57432');
smo57461v0ar.push(smo57432);
const smo57433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57433.setAttribute('id', 'smo57433');
smo57461v0ar.push(smo57433);
const smo57434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57434.setAttribute('id', 'smo57434');
smo57461v0ar.push(smo57434);
const smo57435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57435.setAttribute('id', 'smo57435');
smo57461v0ar.push(smo57435);
const smo57436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57436.setAttribute('id', 'smo57436');
smo57461v0ar.push(smo57436);
const smo57437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57437.setAttribute('id', 'smo57437');
smo57461v0ar.push(smo57437);
const smo57438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57438.setAttribute('id', 'smo57438');
smo57461v0ar.push(smo57438);
const smo57439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57439.setAttribute('id', 'smo57439');
smo57461v0ar.push(smo57439);
const smo57440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57440.setAttribute('id', 'smo57440');
smo57461v0ar.push(smo57440);
const smo57441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57441.setAttribute('id', 'smo57441');
smo57461v0ar.push(smo57441);
const smo57442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57442.setAttribute('id', 'smo57442');
smo57461v0ar.push(smo57442);
const smo57443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57443.setAttribute('id', 'smo57443');
smo57461v0ar.push(smo57443);
smo57461v0.addTickables(smo57461v0ar)
fmtsmo5746128.joinVoices([smo57461v0]);
const smo57461v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57461v1ar = [];
const smo57444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57444.setAttribute('id', 'smo57444');
smo57444.setStyle({ fillStyle: '#aaaaaa7f' });
smo57461v1ar.push(smo57444);
const smo57445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57445.setAttribute('id', 'smo57445');
smo57445.setStyle({ fillStyle: '#aaaaaa7f' });
smo57445.addModifier(new VF.Dot(), 0);
smo57445.addModifier(new VF.Dot(), 0);
smo57461v1ar.push(smo57445);
const smo57446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57446.setAttribute('id', 'smo57446');
smo57446.setStyle({ fillStyle: '#aaaaaa7f' });
smo57461v1ar.push(smo57446);
const smo57447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57447.setAttribute('id', 'smo57447');
smo57447.setStyle({ fillStyle: '#aaaaaa7f' });
smo57447.addModifier(new VF.Dot(), 0);
smo57447.addModifier(new VF.Dot(), 0);
smo57461v1ar.push(smo57447);
smo57461v1.addTickables(smo57461v1ar)
fmtsmo5746128.joinVoices([smo57461v1]);
const fmtsmo6262628 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo62626v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62626v0ar = [];
const smo62605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62605.setAttribute('id', 'smo62605');
smo62626v0ar.push(smo62605);
const smo62606 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62606.setAttribute('id', 'smo62606');
smo62606.addModifier(new VF.Dot(), 0);
smo62626v0ar.push(smo62606);
const smo62607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62607.setAttribute('id', 'smo62607');
smo62626v0ar.push(smo62607);
const smo62608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62608.setAttribute('id', 'smo62608');
smo62626v0ar.push(smo62608);
const smo62609 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62609.setAttribute('id', 'smo62609');
smo62609.addModifier(new VF.Dot(), 0);
smo62626v0ar.push(smo62609);
const smo62610 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62610.setAttribute('id', 'smo62610');
smo62626v0ar.push(smo62610);
smo62626v0.addTickables(smo62626v0ar)
fmtsmo6262628.joinVoices([smo62626v0]);
const smo62626v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62626v1ar = [];
const smo62611 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo62611.setAttribute('id', 'smo62611');
smo62611.setStyle({ fillStyle: "#115511" });
smo62626v1ar.push(smo62611);
const smo62612 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo62612.setAttribute('id', 'smo62612');
smo62612.setStyle({ fillStyle: "#115511" });
smo62626v1ar.push(smo62612);
smo62626v1.addTickables(smo62626v1ar)
fmtsmo6262628.joinVoices([smo62626v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66222 = smo57431.getStemDirection();
smo57431.setStemDirection(dirsmo66222);
smo57432.setStemDirection(dirsmo66222);
const smo66222 = new VF.Beam([smo57431,smo57432]);
const dirsmo66223 = smo57433.getStemDirection();
smo57433.setStemDirection(dirsmo66223);
smo57434.setStemDirection(dirsmo66223);
smo57435.setStemDirection(dirsmo66223);
smo57436.setStemDirection(dirsmo66223);
const smo66223 = new VF.Beam([smo57433,smo57434,smo57435,smo57436]);
const dirsmo66224 = smo57438.getStemDirection();
smo57438.setStemDirection(dirsmo66224);
smo57439.setStemDirection(dirsmo66224);
const smo66224 = new VF.Beam([smo57438,smo57439]);
const dirsmo66225 = smo57440.getStemDirection();
smo57440.setStemDirection(dirsmo66225);
smo57441.setStemDirection(dirsmo66225);
smo57442.setStemDirection(dirsmo66225);
smo57443.setStemDirection(dirsmo66225);
const smo66225 = new VF.Beam([smo57440,smo57441,smo57442,smo57443]);
 
// formatting measures in staff group smo55345
fmtsmo5746128.format([smo57461v0,smo57461v1,smo62626v0,smo62626v1], 527);
const stavesmo57461 = new VF.Stave(726, 801, 541);
stavesmo57461.setAttribute('id', 'stavesmo57461');
stavesmo57461.setBegBarType(VF.Barline.type.NONE);
stavesmo57461.setContext(context);
stavesmo57461.draw();
smo57461v0.draw(context, stavesmo57461);
smo57461v1.draw(context, stavesmo57461);
smo66222.setContext(context);
smo66222.draw();
smo66223.setContext(context);
smo66223.draw();
smo66224.setContext(context);
smo66224.draw();
smo66225.setContext(context);
smo66225.draw();
const stavesmo62626 = new VF.Stave(726, 947, 541);
stavesmo62626.setAttribute('id', 'stavesmo62626');
stavesmo62626.setBegBarType(VF.Barline.type.NONE);
stavesmo62626.setContext(context);
stavesmo62626.draw();
smo62626v0.draw(context, stavesmo62626);
smo62626v1.draw(context, stavesmo62626);
const fmtsmo5749329 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo57493v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57493v0ar = [];
const smo57462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57462.setAttribute('id', 'smo57462');
smo57493v0ar.push(smo57462);
const smo57463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57463.setAttribute('id', 'smo57463');
smo57493v0ar.push(smo57463);
const smo57464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57464.setAttribute('id', 'smo57464');
smo57493v0ar.push(smo57464);
const smo57465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57465.setAttribute('id', 'smo57465');
smo57493v0ar.push(smo57465);
const smo57466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57466.setAttribute('id', 'smo57466');
smo57493v0ar.push(smo57466);
const smo57467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57467.setAttribute('id', 'smo57467');
smo57493v0ar.push(smo57467);
const smo57468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57468.setAttribute('id', 'smo57468');
smo57493v0ar.push(smo57468);
const smo57469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57469.setAttribute('id', 'smo57469');
smo57493v0ar.push(smo57469);
const smo57470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57470.setAttribute('id', 'smo57470');
smo57493v0ar.push(smo57470);
const smo57471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57471.setAttribute('id', 'smo57471');
smo57493v0ar.push(smo57471);
const smo57472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57472.setAttribute('id', 'smo57472');
smo57493v0ar.push(smo57472);
const smo57473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57473.setAttribute('id', 'smo57473');
smo57493v0ar.push(smo57473);
const smo57474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57474.setAttribute('id', 'smo57474');
smo57493v0ar.push(smo57474);
const smo57475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57475.setAttribute('id', 'smo57475');
smo57493v0ar.push(smo57475);
smo57493v0.addTickables(smo57493v0ar)
fmtsmo5749329.joinVoices([smo57493v0]);
const smo57493v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57493v1ar = [];
const smo57476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57476.setAttribute('id', 'smo57476');
smo57476.setStyle({ fillStyle: '#aaaaaa7f' });
smo57493v1ar.push(smo57476);
const smo57477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57477.setAttribute('id', 'smo57477');
smo57477.setStyle({ fillStyle: '#aaaaaa7f' });
smo57477.addModifier(new VF.Dot(), 0);
smo57477.addModifier(new VF.Dot(), 0);
smo57493v1ar.push(smo57477);
const smo57478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57478.setAttribute('id', 'smo57478');
smo57478.setStyle({ fillStyle: '#aaaaaa7f' });
smo57493v1ar.push(smo57478);
const smo57479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57479.setAttribute('id', 'smo57479');
smo57479.setStyle({ fillStyle: '#aaaaaa7f' });
smo57479.addModifier(new VF.Dot(), 0);
smo57479.addModifier(new VF.Dot(), 0);
smo57493v1ar.push(smo57479);
smo57493v1.addTickables(smo57493v1ar)
fmtsmo5749329.joinVoices([smo57493v1]);
const fmtsmo6264829 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo62648v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62648v0ar = [];
const smo62627 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62627.setAttribute('id', 'smo62627');
smo62648v0ar.push(smo62627);
const smo62628 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62628.setAttribute('id', 'smo62628');
smo62628.addModifier(new VF.Dot(), 0);
smo62648v0ar.push(smo62628);
const smo62629 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62629.setAttribute('id', 'smo62629');
smo62648v0ar.push(smo62629);
const smo62630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62630.setAttribute('id', 'smo62630');
smo62648v0ar.push(smo62630);
const smo62631 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62631.setAttribute('id', 'smo62631');
smo62631.addModifier(new VF.Dot(), 0);
smo62648v0ar.push(smo62631);
const smo62632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62632.setAttribute('id', 'smo62632');
smo62648v0ar.push(smo62632);
smo62648v0.addTickables(smo62648v0ar)
fmtsmo6264829.joinVoices([smo62648v0]);
const smo62648v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62648v1ar = [];
const smo62633 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo62633.setAttribute('id', 'smo62633');
smo62633.setStyle({ fillStyle: "#115511" });
smo62648v1ar.push(smo62633);
const smo62634 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo62634.setAttribute('id', 'smo62634');
smo62634.setStyle({ fillStyle: "#115511" });
smo62648v1ar.push(smo62634);
smo62648v1.addTickables(smo62648v1ar)
fmtsmo6264829.joinVoices([smo62648v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66230 = smo57463.getStemDirection();
smo57463.setStemDirection(dirsmo66230);
smo57464.setStemDirection(dirsmo66230);
const smo66230 = new VF.Beam([smo57463,smo57464]);
const dirsmo66231 = smo57465.getStemDirection();
smo57465.setStemDirection(dirsmo66231);
smo57466.setStemDirection(dirsmo66231);
smo57467.setStemDirection(dirsmo66231);
smo57468.setStemDirection(dirsmo66231);
const smo66231 = new VF.Beam([smo57465,smo57466,smo57467,smo57468]);
const dirsmo66232 = smo57470.getStemDirection();
smo57470.setStemDirection(dirsmo66232);
smo57471.setStemDirection(dirsmo66232);
const smo66232 = new VF.Beam([smo57470,smo57471]);
const dirsmo66233 = smo57472.getStemDirection();
smo57472.setStemDirection(dirsmo66233);
smo57473.setStemDirection(dirsmo66233);
smo57474.setStemDirection(dirsmo66233);
smo57475.setStemDirection(dirsmo66233);
const smo66233 = new VF.Beam([smo57472,smo57473,smo57474,smo57475]);
 
// formatting measures in staff group smo55345
fmtsmo5749329.format([smo57493v0,smo57493v1,smo62648v0,smo62648v1], 527);
const stavesmo57493 = new VF.Stave(1267, 801, 541);
stavesmo57493.setAttribute('id', 'stavesmo57493');
stavesmo57493.setBegBarType(VF.Barline.type.NONE);
stavesmo57493.setContext(context);
stavesmo57493.draw();
smo57493v0.draw(context, stavesmo57493);
smo57493v1.draw(context, stavesmo57493);
smo66230.setContext(context);
smo66230.draw();
smo66231.setContext(context);
smo66231.draw();
smo66232.setContext(context);
smo66232.draw();
smo66233.setContext(context);
smo66233.draw();
const stavesmo62648 = new VF.Stave(1267, 947, 541);
stavesmo62648.setAttribute('id', 'stavesmo62648');
stavesmo62648.setBegBarType(VF.Barline.type.NONE);
stavesmo62648.setContext(context);
stavesmo62648.draw();
smo62648v0.draw(context, stavesmo62648);
smo62648v1.draw(context, stavesmo62648);
const rightsmo55345stavesmo574931 = new VF.StaveConnector(stavesmo57493, stavesmo62648).setType(0);
rightsmo55345stavesmo574931.setContext(context).draw();
const fmtsmo5752530 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo57525v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57525v0ar = [];
const smo57494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57494.setAttribute('id', 'smo57494');
smo57525v0ar.push(smo57494);
const smo57495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57495.setAttribute('id', 'smo57495');
smo57525v0ar.push(smo57495);
const smo57496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57496.setAttribute('id', 'smo57496');
smo57525v0ar.push(smo57496);
const smo57497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57497.setAttribute('id', 'smo57497');
smo57525v0ar.push(smo57497);
const smo57498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57498.setAttribute('id', 'smo57498');
smo57525v0ar.push(smo57498);
const smo57499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57499.setAttribute('id', 'smo57499');
smo57525v0ar.push(smo57499);
const smo57500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57500.setAttribute('id', 'smo57500');
smo57525v0ar.push(smo57500);
const smo57501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57501.setAttribute('id', 'smo57501');
smo57525v0ar.push(smo57501);
const smo57502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57502.setAttribute('id', 'smo57502');
smo57525v0ar.push(smo57502);
const smo57503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57503.setAttribute('id', 'smo57503');
smo57525v0ar.push(smo57503);
const smo57504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57504.setAttribute('id', 'smo57504');
smo57525v0ar.push(smo57504);
const smo57505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57505.setAttribute('id', 'smo57505');
smo57525v0ar.push(smo57505);
const smo57506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57506.setAttribute('id', 'smo57506');
smo57525v0ar.push(smo57506);
const smo57507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57507.setAttribute('id', 'smo57507');
smo57525v0ar.push(smo57507);
smo57525v0.addTickables(smo57525v0ar)
fmtsmo5752530.joinVoices([smo57525v0]);
const smo57525v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57525v1ar = [];
const smo57508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57508.setAttribute('id', 'smo57508');
smo57508.setStyle({ fillStyle: '#aaaaaa7f' });
smo57525v1ar.push(smo57508);
const smo57509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57509.setAttribute('id', 'smo57509');
smo57509.setStyle({ fillStyle: '#aaaaaa7f' });
smo57509.addModifier(new VF.Dot(), 0);
smo57509.addModifier(new VF.Dot(), 0);
smo57525v1ar.push(smo57509);
const smo57510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57510.setAttribute('id', 'smo57510');
smo57510.setStyle({ fillStyle: '#aaaaaa7f' });
smo57525v1ar.push(smo57510);
const smo57511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57511.setAttribute('id', 'smo57511');
smo57511.setStyle({ fillStyle: '#aaaaaa7f' });
smo57511.addModifier(new VF.Dot(), 0);
smo57511.addModifier(new VF.Dot(), 0);
smo57525v1ar.push(smo57511);
smo57525v1.addTickables(smo57525v1ar)
fmtsmo5752530.joinVoices([smo57525v1]);
const fmtsmo6267030 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo62670v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62670v0ar = [];
const smo62649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62649.setAttribute('id', 'smo62649');
smo62670v0ar.push(smo62649);
const smo62650 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62650.setAttribute('id', 'smo62650');
smo62650.addModifier(new VF.Dot(), 0);
smo62670v0ar.push(smo62650);
const smo62651 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62651.setAttribute('id', 'smo62651');
smo62670v0ar.push(smo62651);
const smo62652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62652.setAttribute('id', 'smo62652');
smo62670v0ar.push(smo62652);
const smo62653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62653.setAttribute('id', 'smo62653');
smo62653.addModifier(new VF.Dot(), 0);
smo62670v0ar.push(smo62653);
const smo62654 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62654.setAttribute('id', 'smo62654');
smo62670v0ar.push(smo62654);
smo62670v0.addTickables(smo62670v0ar)
fmtsmo6267030.joinVoices([smo62670v0]);
const smo62670v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62670v1ar = [];
const smo62655 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo62655.setAttribute('id', 'smo62655');
smo62655.setStyle({ fillStyle: "#115511" });
smo62670v1ar.push(smo62655);
const smo62656 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo62656.setAttribute('id', 'smo62656');
smo62656.setStyle({ fillStyle: "#115511" });
smo62670v1ar.push(smo62656);
smo62670v1.addTickables(smo62670v1ar)
fmtsmo6267030.joinVoices([smo62670v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66246 = smo57495.getStemDirection();
smo57495.setStemDirection(dirsmo66246);
smo57496.setStemDirection(dirsmo66246);
const smo66246 = new VF.Beam([smo57495,smo57496]);
const dirsmo66247 = smo57497.getStemDirection();
smo57497.setStemDirection(dirsmo66247);
smo57498.setStemDirection(dirsmo66247);
smo57499.setStemDirection(dirsmo66247);
smo57500.setStemDirection(dirsmo66247);
const smo66247 = new VF.Beam([smo57497,smo57498,smo57499,smo57500]);
const dirsmo66248 = smo57502.getStemDirection();
smo57502.setStemDirection(dirsmo66248);
smo57503.setStemDirection(dirsmo66248);
const smo66248 = new VF.Beam([smo57502,smo57503]);
const dirsmo66249 = smo57504.getStemDirection();
smo57504.setStemDirection(dirsmo66249);
smo57505.setStemDirection(dirsmo66249);
smo57506.setStemDirection(dirsmo66249);
smo57507.setStemDirection(dirsmo66249);
const smo66249 = new VF.Beam([smo57504,smo57505,smo57506,smo57507]);
 
// formatting measures in staff group smo55345
fmtsmo5752530.format([smo57525v0,smo57525v1,smo62670v0,smo62670v1], 526);
const stavesmo57525 = new VF.Stave(90, 1074, 584);
stavesmo57525.setAttribute('id', 'stavesmo57525');
stavesmo57525.setBegBarType(1);
stavesmo57525.addClef('treble');
stavesmo57525.setContext(context);
stavesmo57525.draw();
smo57525v0.draw(context, stavesmo57525);
smo57525v1.draw(context, stavesmo57525);
smo66246.setContext(context);
smo66246.draw();
smo66247.setContext(context);
smo66247.draw();
smo66248.setContext(context);
smo66248.draw();
smo66249.setContext(context);
smo66249.draw();
const stavesmo62670 = new VF.Stave(90, 1223, 584);
stavesmo62670.setAttribute('id', 'stavesmo62670');
stavesmo62670.setBegBarType(1);
stavesmo62670.addClef('bass');
stavesmo62670.setContext(context);
stavesmo62670.draw();
smo62670v0.draw(context, stavesmo62670);
smo62670v1.draw(context, stavesmo62670);
const leftsmo55345stavesmo575251 = new VF.StaveConnector(stavesmo57525, stavesmo62670).setType(3);
leftsmo55345stavesmo575251.setContext(context).draw();
const fmtsmo5755731 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo57557v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57557v0ar = [];
const smo57526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57526.setAttribute('id', 'smo57526');
smo57557v0ar.push(smo57526);
const smo57527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57527.setAttribute('id', 'smo57527');
smo57557v0ar.push(smo57527);
const smo57528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo57528.setAttribute('id', 'smo57528');
const smo575280acc = new VF.Accidental('b');
smo57528.addModifier(smo575280acc, 0);
smo57557v0ar.push(smo57528);
const smo57529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57529.setAttribute('id', 'smo57529');
smo57557v0ar.push(smo57529);
const smo57530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57530.setAttribute('id', 'smo57530');
smo57557v0ar.push(smo57530);
const smo57531 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo57531.setAttribute('id', 'smo57531');
smo57557v0ar.push(smo57531);
const smo57532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57532.setAttribute('id', 'smo57532');
smo57557v0ar.push(smo57532);
const smo57533 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57533.setAttribute('id', 'smo57533');
smo57557v0ar.push(smo57533);
const smo57534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57534.setAttribute('id', 'smo57534');
smo57557v0ar.push(smo57534);
const smo57535 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo57535.setAttribute('id', 'smo57535');
smo57557v0ar.push(smo57535);
const smo57536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57536.setAttribute('id', 'smo57536');
smo57557v0ar.push(smo57536);
const smo57537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57537.setAttribute('id', 'smo57537');
smo57557v0ar.push(smo57537);
const smo57538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo57538.setAttribute('id', 'smo57538');
smo57557v0ar.push(smo57538);
const smo57539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57539.setAttribute('id', 'smo57539');
smo57557v0ar.push(smo57539);
smo57557v0.addTickables(smo57557v0ar)
fmtsmo5755731.joinVoices([smo57557v0]);
const smo57557v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57557v1ar = [];
const smo57540 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57540.setAttribute('id', 'smo57540');
smo57540.setStyle({ fillStyle: '#aaaaaa7f' });
smo57557v1ar.push(smo57540);
const smo57541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57541.setAttribute('id', 'smo57541');
smo57541.setStyle({ fillStyle: '#aaaaaa7f' });
smo57541.addModifier(new VF.Dot(), 0);
smo57541.addModifier(new VF.Dot(), 0);
smo57557v1ar.push(smo57541);
const smo57542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57542.setAttribute('id', 'smo57542');
smo57542.setStyle({ fillStyle: '#aaaaaa7f' });
smo57557v1ar.push(smo57542);
const smo57543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57543.setAttribute('id', 'smo57543');
smo57543.setStyle({ fillStyle: '#aaaaaa7f' });
smo57543.addModifier(new VF.Dot(), 0);
smo57543.addModifier(new VF.Dot(), 0);
smo57557v1ar.push(smo57543);
smo57557v1.addTickables(smo57557v1ar)
fmtsmo5755731.joinVoices([smo57557v1]);
const fmtsmo6269231 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo62692v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62692v0ar = [];
const smo62671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62671.setAttribute('id', 'smo62671');
smo62692v0ar.push(smo62671);
const smo62672 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo62672.setAttribute('id', 'smo62672');
smo62672.addModifier(new VF.Dot(), 0);
smo62692v0ar.push(smo62672);
const smo62673 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo62673.setAttribute('id', 'smo62673');
smo62692v0ar.push(smo62673);
const smo62674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo62674.setAttribute('id', 'smo62674');
smo62692v0ar.push(smo62674);
const smo62675 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo62675.setAttribute('id', 'smo62675');
smo62675.addModifier(new VF.Dot(), 0);
smo62692v0ar.push(smo62675);
const smo62676 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo62676.setAttribute('id', 'smo62676');
smo62692v0ar.push(smo62676);
smo62692v0.addTickables(smo62692v0ar)
fmtsmo6269231.joinVoices([smo62692v0]);
const smo62692v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62692v1ar = [];
const smo62677 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/2/n"]}'))
smo62677.setAttribute('id', 'smo62677');
smo62677.setStyle({ fillStyle: "#115511" });
smo62692v1ar.push(smo62677);
const smo62678 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/2/n"]}'))
smo62678.setAttribute('id', 'smo62678');
smo62678.setStyle({ fillStyle: "#115511" });
smo62692v1ar.push(smo62678);
smo62692v1.addTickables(smo62692v1ar)
fmtsmo6269231.joinVoices([smo62692v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66254 = smo57527.getStemDirection();
smo57527.setStemDirection(dirsmo66254);
smo57528.setStemDirection(dirsmo66254);
const smo66254 = new VF.Beam([smo57527,smo57528]);
const dirsmo66255 = smo57529.getStemDirection();
smo57529.setStemDirection(dirsmo66255);
smo57530.setStemDirection(dirsmo66255);
smo57531.setStemDirection(dirsmo66255);
smo57532.setStemDirection(dirsmo66255);
const smo66255 = new VF.Beam([smo57529,smo57530,smo57531,smo57532]);
const dirsmo66256 = smo57534.getStemDirection();
smo57534.setStemDirection(dirsmo66256);
smo57535.setStemDirection(dirsmo66256);
const smo66256 = new VF.Beam([smo57534,smo57535]);
const dirsmo66257 = smo57536.getStemDirection();
smo57536.setStemDirection(dirsmo66257);
smo57537.setStemDirection(dirsmo66257);
smo57538.setStemDirection(dirsmo66257);
smo57539.setStemDirection(dirsmo66257);
const smo66257 = new VF.Beam([smo57536,smo57537,smo57538,smo57539]);
 
// formatting measures in staff group smo55345
fmtsmo5755731.format([smo57557v0,smo57557v1,smo62692v0,smo62692v1], 571);
const stavesmo57557 = new VF.Stave(674, 1074, 585);
stavesmo57557.setAttribute('id', 'stavesmo57557');
stavesmo57557.setBegBarType(VF.Barline.type.NONE);
stavesmo57557.setContext(context);
stavesmo57557.draw();
smo57557v0.draw(context, stavesmo57557);
smo57557v1.draw(context, stavesmo57557);
smo66254.setContext(context);
smo66254.draw();
smo66255.setContext(context);
smo66255.draw();
smo66256.setContext(context);
smo66256.draw();
smo66257.setContext(context);
smo66257.draw();
const stavesmo62692 = new VF.Stave(674, 1223, 585);
stavesmo62692.setAttribute('id', 'stavesmo62692');
stavesmo62692.setBegBarType(VF.Barline.type.NONE);
stavesmo62692.setContext(context);
stavesmo62692.draw();
smo62692v0.draw(context, stavesmo62692);
smo62692v1.draw(context, stavesmo62692);
const fmtsmo5758832 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo57588v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57588v0ar = [];
const smo57558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57558.setAttribute('id', 'smo57558');
smo57588v0ar.push(smo57558);
const smo57559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo57559.setAttribute('id', 'smo57559');
smo57588v0ar.push(smo57559);
const smo57560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57560.setAttribute('id', 'smo57560');
smo57588v0ar.push(smo57560);
const smo57561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57561.setAttribute('id', 'smo57561');
smo57588v0ar.push(smo57561);
const smo57562 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57562.setAttribute('id', 'smo57562');
smo57588v0ar.push(smo57562);
const smo57563 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57563.setAttribute('id', 'smo57563');
smo57588v0ar.push(smo57563);
const smo57564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57564.setAttribute('id', 'smo57564');
smo57588v0ar.push(smo57564);
const smo57565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57565.setAttribute('id', 'smo57565');
smo57588v0ar.push(smo57565);
const smo57566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo57566.setAttribute('id', 'smo57566');
smo57588v0ar.push(smo57566);
const smo57567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo57567.setAttribute('id', 'smo57567');
smo57588v0ar.push(smo57567);
const smo57568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo57568.setAttribute('id', 'smo57568');
smo57588v0ar.push(smo57568);
const smo57569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo57569.setAttribute('id', 'smo57569');
smo57588v0ar.push(smo57569);
const smo57570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo57570.setAttribute('id', 'smo57570');
smo57588v0ar.push(smo57570);
const smo57571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo57571.setAttribute('id', 'smo57571');
smo57588v0ar.push(smo57571);
const smo57572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo57572.setAttribute('id', 'smo57572');
smo57588v0ar.push(smo57572);
smo57588v0.addTickables(smo57588v0ar)
fmtsmo5758832.joinVoices([smo57588v0]);
const smo57588v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57588v1ar = [];
const smo57573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57573.setAttribute('id', 'smo57573');
smo57573.setStyle({ fillStyle: '#aaaaaa7f' });
smo57588v1ar.push(smo57573);
const smo57574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2ddd","dots":3,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57574.setAttribute('id', 'smo57574');
smo57574.setStyle({ fillStyle: '#aaaaaa7f' });
smo57574.addModifier(new VF.Dot(), 0);
smo57574.addModifier(new VF.Dot(), 0);
smo57574.addModifier(new VF.Dot(), 0);
smo57588v1ar.push(smo57574);
smo57588v1.addTickables(smo57588v1ar)
fmtsmo5758832.joinVoices([smo57588v1]);
const fmtsmo6271232 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo62712v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62712v0ar = [];
const smo62693 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["fn/3/r"]}'))
smo62693.setAttribute('id', 'smo62693');
smo62712v0ar.push(smo62693);
const smo62694 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo62694.setAttribute('id', 'smo62694');
smo62694.addModifier(new VF.Dot(), 0);
smo62712v0ar.push(smo62694);
const smo62695 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo62695.setAttribute('id', 'smo62695');
smo62712v0ar.push(smo62695);
const smo62696 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo62696.setAttribute('id', 'smo62696');
smo62712v0ar.push(smo62696);
smo62712v0.addTickables(smo62712v0ar)
fmtsmo6271232.joinVoices([smo62712v0]);
const smo62712v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62712v1ar = [];
const smo62697 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n"]}'))
smo62697.setAttribute('id', 'smo62697');
smo62697.setStyle({ fillStyle: "#115511" });
smo62712v1ar.push(smo62697);
const smo62698 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n"]}'))
smo62698.setAttribute('id', 'smo62698');
smo62698.setStyle({ fillStyle: "#115511" });
smo62712v1ar.push(smo62698);
smo62712v1.addTickables(smo62712v1ar)
fmtsmo6271232.joinVoices([smo62712v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66262 = smo57559.getStemDirection();
smo57559.setStemDirection(dirsmo66262);
smo57560.setStemDirection(dirsmo66262);
const smo66262 = new VF.Beam([smo57559,smo57560]);
const dirsmo66263 = smo57561.getStemDirection();
smo57561.setStemDirection(dirsmo66263);
smo57562.setStemDirection(dirsmo66263);
smo57563.setStemDirection(dirsmo66263);
smo57564.setStemDirection(dirsmo66263);
const smo66263 = new VF.Beam([smo57561,smo57562,smo57563,smo57564]);
const dirsmo66264 = smo57565.getStemDirection();
smo57565.setStemDirection(dirsmo66264);
smo57566.setStemDirection(dirsmo66264);
smo57567.setStemDirection(dirsmo66264);
smo57568.setStemDirection(dirsmo66264);
const smo66264 = new VF.Beam([smo57565,smo57566,smo57567,smo57568]);
const dirsmo66265 = smo57569.getStemDirection();
smo57569.setStemDirection(dirsmo66265);
smo57570.setStemDirection(dirsmo66265);
smo57571.setStemDirection(dirsmo66265);
smo57572.setStemDirection(dirsmo66265);
const smo66265 = new VF.Beam([smo57569,smo57570,smo57571,smo57572]);
 
// formatting measures in staff group smo55345
fmtsmo5758832.format([smo57588v0,smo57588v1,smo62712v0,smo62712v1], 535);
const stavesmo57588 = new VF.Stave(1259, 1074, 549);
stavesmo57588.setAttribute('id', 'stavesmo57588');
stavesmo57588.setBegBarType(VF.Barline.type.NONE);
stavesmo57588.setContext(context);
stavesmo57588.draw();
smo57588v0.draw(context, stavesmo57588);
smo57588v1.draw(context, stavesmo57588);
smo66262.setContext(context);
smo66262.draw();
smo66263.setContext(context);
smo66263.draw();
smo66264.setContext(context);
smo66264.draw();
smo66265.setContext(context);
smo66265.draw();
const stavesmo62712 = new VF.Stave(1259, 1223, 549);
stavesmo62712.setAttribute('id', 'stavesmo62712');
stavesmo62712.setBegBarType(VF.Barline.type.NONE);
stavesmo62712.setContext(context);
stavesmo62712.draw();
smo62712v0.draw(context, stavesmo62712);
smo62712v1.draw(context, stavesmo62712);
const rightsmo55345stavesmo575881 = new VF.StaveConnector(stavesmo57588, stavesmo62712).setType(0);
rightsmo55345stavesmo575881.setContext(context).draw();
const fmtsmo5761933 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo57619v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57619v0ar = [];
const smo57589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57589.setAttribute('id', 'smo57589');
smo57619v0ar.push(smo57589);
const smo57590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57590.setAttribute('id', 'smo57590');
smo57619v0ar.push(smo57590);
const smo57591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57591.setAttribute('id', 'smo57591');
smo57619v0ar.push(smo57591);
const smo57592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo57592.setAttribute('id', 'smo57592');
smo57619v0ar.push(smo57592);
const smo57593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo57593.setAttribute('id', 'smo57593');
smo57619v0ar.push(smo57593);
const smo57594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo57594.setAttribute('id', 'smo57594');
smo57619v0ar.push(smo57594);
const smo57595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57595.setAttribute('id', 'smo57595');
smo57619v0ar.push(smo57595);
const smo57596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo57596.setAttribute('id', 'smo57596');
smo57619v0ar.push(smo57596);
const smo57597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57597.setAttribute('id', 'smo57597');
smo57619v0ar.push(smo57597);
const smo57598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57598.setAttribute('id', 'smo57598');
smo57619v0ar.push(smo57598);
const smo57599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57599.setAttribute('id', 'smo57599');
smo57619v0ar.push(smo57599);
const smo57600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57600.setAttribute('id', 'smo57600');
smo57619v0ar.push(smo57600);
const smo57601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57601.setAttribute('id', 'smo57601');
smo57619v0ar.push(smo57601);
const smo57602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57602.setAttribute('id', 'smo57602');
smo57619v0ar.push(smo57602);
const smo57603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57603.setAttribute('id', 'smo57603');
smo57619v0ar.push(smo57603);
smo57619v0.addTickables(smo57619v0ar)
fmtsmo5761933.joinVoices([smo57619v0]);
const smo57619v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57619v1ar = [];
const smo57604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
smo57604.setAttribute('id', 'smo57604');
smo57604.setStyle({ fillStyle: "#115511" });
smo57619v1ar.push(smo57604);
const smo57605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2ddd","dots":3,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57605.setAttribute('id', 'smo57605');
smo57605.setStyle({ fillStyle: '#aaaaaa7f' });
smo57605.addModifier(new VF.Dot(), 0);
smo57605.addModifier(new VF.Dot(), 0);
smo57605.addModifier(new VF.Dot(), 0);
smo57619v1ar.push(smo57605);
smo57619v1.addTickables(smo57619v1ar)
fmtsmo5761933.joinVoices([smo57619v1]);
const fmtsmo6273233 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo62732v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62732v0ar = [];
const smo62713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo62713.setAttribute('id', 'smo62713');
smo62713.setStyle({ fillStyle: '#aaaaaa7f' });
smo62732v0ar.push(smo62713);
const smo62714 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo62714.setAttribute('id', 'smo62714');
smo62714.addModifier(new VF.Dot(), 0);
smo62732v0ar.push(smo62714);
const smo62715 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo62715.setAttribute('id', 'smo62715');
smo62732v0ar.push(smo62715);
const smo62716 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo62716.setAttribute('id', 'smo62716');
smo62732v0ar.push(smo62716);
smo62732v0.addTickables(smo62732v0ar)
fmtsmo6273233.joinVoices([smo62732v0]);
const smo62732v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62732v1ar = [];
const smo62717 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/2/n"]}'))
smo62717.setAttribute('id', 'smo62717');
smo62717.setStyle({ fillStyle: "#115511" });
smo62732v1ar.push(smo62717);
const smo62718 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/2/n"]}'))
smo62718.setAttribute('id', 'smo62718');
smo62718.setStyle({ fillStyle: "#115511" });
smo62732v1ar.push(smo62718);
smo62732v1.addTickables(smo62732v1ar)
fmtsmo6273233.joinVoices([smo62732v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66278 = smo57590.getStemDirection();
smo57590.setStemDirection(dirsmo66278);
smo57591.setStemDirection(dirsmo66278);
const smo66278 = new VF.Beam([smo57590,smo57591]);
const dirsmo66279 = smo57592.getStemDirection();
smo57592.setStemDirection(dirsmo66279);
smo57593.setStemDirection(dirsmo66279);
smo57594.setStemDirection(dirsmo66279);
smo57595.setStemDirection(dirsmo66279);
const smo66279 = new VF.Beam([smo57592,smo57593,smo57594,smo57595]);
const dirsmo66280 = smo57596.getStemDirection();
smo57596.setStemDirection(dirsmo66280);
smo57597.setStemDirection(dirsmo66280);
smo57598.setStemDirection(dirsmo66280);
smo57599.setStemDirection(dirsmo66280);
const smo66280 = new VF.Beam([smo57596,smo57597,smo57598,smo57599]);
const dirsmo66281 = smo57600.getStemDirection();
smo57600.setStemDirection(dirsmo66281);
smo57601.setStemDirection(dirsmo66281);
smo57602.setStemDirection(dirsmo66281);
smo57603.setStemDirection(dirsmo66281);
const smo66281 = new VF.Beam([smo57600,smo57601,smo57602,smo57603]);
 
// formatting measures in staff group smo55345
fmtsmo5761933.format([smo57619v0,smo57619v1,smo62732v0,smo62732v1], 475);
const stavesmo57619 = new VF.Stave(90, 1422, 533);
stavesmo57619.setAttribute('id', 'stavesmo57619');
stavesmo57619.setBegBarType(1);
stavesmo57619.addClef('treble');
stavesmo57619.setContext(context);
stavesmo57619.draw();
smo57619v0.draw(context, stavesmo57619);
smo57619v1.draw(context, stavesmo57619);
smo66278.setContext(context);
smo66278.draw();
smo66279.setContext(context);
smo66279.draw();
smo66280.setContext(context);
smo66280.draw();
smo66281.setContext(context);
smo66281.draw();
const stavesmo62732 = new VF.Stave(90, 1508, 533);
stavesmo62732.setAttribute('id', 'stavesmo62732');
stavesmo62732.setBegBarType(1);
stavesmo62732.addClef('bass');
stavesmo62732.setContext(context);
stavesmo62732.draw();
smo62732v0.draw(context, stavesmo62732);
smo62732v1.draw(context, stavesmo62732);
const leftsmo55345stavesmo576191 = new VF.StaveConnector(stavesmo57619, stavesmo62732).setType(3);
leftsmo55345stavesmo576191.setContext(context).draw();
const fmtsmo5763434 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo57634v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57634v0ar = [];
const smo57620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo57620.setAttribute('id', 'smo57620');
smo57634v0ar.push(smo57620);
smo57634v0.addTickables(smo57634v0ar)
fmtsmo5763434.joinVoices([smo57634v0]);
const fmtsmo6274734 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo62747v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62747v0ar = [];
const smo62733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo62733.setAttribute('id', 'smo62733');
smo62747v0ar.push(smo62733);
smo62747v0.addTickables(smo62747v0ar)
fmtsmo6274734.joinVoices([smo62747v0]);
// create beam groups and tuplets for format grp smo55345 before formatting
 
// formatting measures in staff group smo55345
fmtsmo5763434.format([smo57634v0,smo62747v0], 54);
const stavesmo57634 = new VF.Stave(623, 1422, 77);
stavesmo57634.setAttribute('id', 'stavesmo57634');
stavesmo57634.setBegBarType(VF.Barline.type.NONE);
stavesmo57634.setEndBarType(3);
stavesmo57634.setContext(context);
stavesmo57634.draw();
smo57634v0.draw(context, stavesmo57634);
const stavesmo62747 = new VF.Stave(623, 1508, 77);
stavesmo62747.setAttribute('id', 'stavesmo62747');
stavesmo62747.setBegBarType(VF.Barline.type.NONE);
stavesmo62747.setEndBarType(3);
stavesmo62747.setContext(context);
stavesmo62747.draw();
smo62747v0.draw(context, stavesmo62747);
const fmtsmo5765835 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo57658v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57658v0ar = [];
const smo57635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57635.setAttribute('id', 'smo57635');
smo57658v0ar.push(smo57635);
smo57658v0.addTickables(smo57658v0ar)
fmtsmo5765835.joinVoices([smo57658v0]);
const smo57658v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57658v1ar = [];
const smo57636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
smo57636.setAttribute('id', 'smo57636');
smo57636.setStyle({ fillStyle: "#115511" });
smo57658v1ar.push(smo57636);
const smo57637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57637.setAttribute('id', 'smo57637');
smo57637.setStyle({ fillStyle: "#115511" });
smo57658v1ar.push(smo57637);
const smo57638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57638.setAttribute('id', 'smo57638');
smo57638.setStyle({ fillStyle: "#115511" });
smo57658v1ar.push(smo57638);
const smo57639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57639.setAttribute('id', 'smo57639');
smo57639.setStyle({ fillStyle: "#115511" });
smo57658v1ar.push(smo57639);
const smo57640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57640.setAttribute('id', 'smo57640');
smo57640.setStyle({ fillStyle: "#115511" });
smo57640.addModifier(new VF.Dot(), 0);
smo57658v1ar.push(smo57640);
const smo57641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57641.setAttribute('id', 'smo57641');
smo57641.setStyle({ fillStyle: "#115511" });
smo57658v1ar.push(smo57641);
const smo57642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57642.setAttribute('id', 'smo57642');
smo57642.setStyle({ fillStyle: "#115511" });
smo57658v1ar.push(smo57642);
const smo57643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57643.setAttribute('id', 'smo57643');
smo57643.setStyle({ fillStyle: "#115511" });
smo57658v1ar.push(smo57643);
const smo57644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57644.setAttribute('id', 'smo57644');
smo57644.setStyle({ fillStyle: "#115511" });
smo57658v1ar.push(smo57644);
smo57658v1.addTickables(smo57658v1ar)
fmtsmo5765835.joinVoices([smo57658v1]);
const fmtsmo6276235 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo62762v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62762v0ar = [];
const smo62748 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo62748.setAttribute('id', 'smo62748');
smo62762v0ar.push(smo62748);
smo62762v0.addTickables(smo62762v0ar)
fmtsmo6276235.joinVoices([smo62762v0]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66288 = smo57637.getStemDirection();
smo57637.setStemDirection(dirsmo66288);
smo57638.setStemDirection(dirsmo66288);
smo57639.setStemDirection(dirsmo66288);
const smo66288 = new VF.Beam([smo57637,smo57638,smo57639]);
const dirsmo66289 = smo57640.getStemDirection();
smo57640.setStemDirection(dirsmo66289);
smo57641.setStemDirection(dirsmo66289);
smo57642.setStemDirection(dirsmo66289);
const smo66289 = new VF.Beam([smo57640,smo57641,smo57642]);
const dirsmo66290 = smo57643.getStemDirection();
smo57643.setStemDirection(dirsmo66290);
smo57644.setStemDirection(dirsmo66290);
const smo66290 = new VF.Beam([smo57643,smo57644]);
 
// formatting measures in staff group smo55345
fmtsmo5765835.format([smo57658v0,smo57658v1,smo62762v0], 264);
const stavesmo57658 = new VF.Stave(700, 1422, 278);
stavesmo57658.setAttribute('id', 'stavesmo57658');
stavesmo57658.setBegBarType(VF.Barline.type.NONE);
stavesmo57658.setTempo(JSON.parse('{"duration":"8","dots":0,"bpm":116,"name":"Moderato e maestoso"}'), -1 * 0);
stavesmo57658.setContext(context);
stavesmo57658.draw();
smo57658v0.draw(context, stavesmo57658);
smo57658v1.draw(context, stavesmo57658);
smo66288.setContext(context);
smo66288.draw();
smo66289.setContext(context);
smo66289.draw();
smo66290.setContext(context);
smo66290.draw();
const stavesmo62762 = new VF.Stave(700, 1508, 278);
stavesmo62762.setAttribute('id', 'stavesmo62762');
stavesmo62762.setBegBarType(VF.Barline.type.NONE);
stavesmo62762.setContext(context);
stavesmo62762.draw();
smo62762v0.draw(context, stavesmo62762);
const fmtsmo5769136 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo57691v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57691v0ar = [];
const smo57659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57659.setAttribute('id', 'smo57659');
smo57691v0ar.push(smo57659);
const smo57660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57660.setAttribute('id', 'smo57660');
smo57691v0ar.push(smo57660);
const smo57661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57661.setAttribute('id', 'smo57661');
smo57691v0ar.push(smo57661);
const smo57662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57662.setAttribute('id', 'smo57662');
smo57691v0ar.push(smo57662);
const smo57663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57663.setAttribute('id', 'smo57663');
smo57691v0ar.push(smo57663);
smo57691v0.addTickables(smo57691v0ar)
fmtsmo5769136.joinVoices([smo57691v0]);
const smo57691v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57691v1ar = [];
const smo57664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57664.setAttribute('id', 'smo57664');
smo57664.setStyle({ fillStyle: "#115511" });
smo57691v1ar.push(smo57664);
const smo57665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57665.setAttribute('id', 'smo57665');
smo57665.setStyle({ fillStyle: "#115511" });
smo57691v1ar.push(smo57665);
const smo57666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57666.setAttribute('id', 'smo57666');
smo57666.setStyle({ fillStyle: "#115511" });
smo57691v1ar.push(smo57666);
const smo57667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57667.setAttribute('id', 'smo57667');
smo57667.setStyle({ fillStyle: "#115511" });
smo57691v1ar.push(smo57667);
const smo57668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57668.setAttribute('id', 'smo57668');
smo57668.setStyle({ fillStyle: "#115511" });
smo57691v1ar.push(smo57668);
const smo57669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57669.setAttribute('id', 'smo57669');
smo57669.setStyle({ fillStyle: "#115511" });
smo57691v1ar.push(smo57669);
const smo57670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57670.setAttribute('id', 'smo57670');
smo57670.setStyle({ fillStyle: "#115511" });
smo57691v1ar.push(smo57670);
const smo57671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57671.setAttribute('id', 'smo57671');
smo57671.setStyle({ fillStyle: "#115511" });
smo57691v1ar.push(smo57671);
const smo57672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57672.setAttribute('id', 'smo57672');
smo57672.setStyle({ fillStyle: "#115511" });
smo57691v1ar.push(smo57672);
const smo57673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57673.setAttribute('id', 'smo57673');
smo57673.setStyle({ fillStyle: "#115511" });
smo57691v1ar.push(smo57673);
const smo57674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57674.setAttribute('id', 'smo57674');
smo57674.setStyle({ fillStyle: "#115511" });
smo57691v1ar.push(smo57674);
const smo57675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57675.setAttribute('id', 'smo57675');
smo57675.setStyle({ fillStyle: "#115511" });
smo57691v1ar.push(smo57675);
const smo57676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57676.setAttribute('id', 'smo57676');
smo57676.setStyle({ fillStyle: "#115511" });
smo57691v1ar.push(smo57676);
const smo57677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57677.setAttribute('id', 'smo57677');
smo57677.setStyle({ fillStyle: "#115511" });
smo57691v1ar.push(smo57677);
smo57691v1.addTickables(smo57691v1ar)
fmtsmo5769136.joinVoices([smo57691v1]);
const fmtsmo6277736 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo62777v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62777v0ar = [];
const smo62763 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo62763.setAttribute('id', 'smo62763');
smo62777v0ar.push(smo62763);
smo62777v0.addTickables(smo62777v0ar)
fmtsmo6277736.joinVoices([smo62777v0]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66295 = smo57661.getStemDirection();
smo57661.setStemDirection(dirsmo66295);
smo57662.setStemDirection(dirsmo66295);
smo57663.setStemDirection(dirsmo66295);
const smo66295 = new VF.Beam([smo57661,smo57662,smo57663]);
const dirsmo66296 = smo57664.getStemDirection();
smo57664.setStemDirection(dirsmo66296);
smo57665.setStemDirection(dirsmo66296);
const smo66296 = new VF.Beam([smo57664,smo57665]);
const dirsmo66297 = smo57666.getStemDirection();
smo57666.setStemDirection(dirsmo66297);
smo57667.setStemDirection(dirsmo66297);
smo57668.setStemDirection(dirsmo66297);
smo57669.setStemDirection(dirsmo66297);
const smo66297 = new VF.Beam([smo57666,smo57667,smo57668,smo57669]);
const dirsmo66298 = smo57670.getStemDirection();
smo57670.setStemDirection(dirsmo66298);
smo57671.setStemDirection(dirsmo66298);
smo57672.setStemDirection(dirsmo66298);
smo57673.setStemDirection(dirsmo66298);
const smo66298 = new VF.Beam([smo57670,smo57671,smo57672,smo57673]);
const dirsmo66299 = smo57674.getStemDirection();
smo57674.setStemDirection(dirsmo66299);
smo57675.setStemDirection(dirsmo66299);
smo57676.setStemDirection(dirsmo66299);
smo57677.setStemDirection(dirsmo66299);
const smo66299 = new VF.Beam([smo57674,smo57675,smo57676,smo57677]);
 
// formatting measures in staff group smo55345
fmtsmo5769136.format([smo57691v0,smo57691v1,smo62777v0], 390);
const stavesmo57691 = new VF.Stave(978, 1422, 404);
stavesmo57691.setAttribute('id', 'stavesmo57691');
stavesmo57691.setBegBarType(VF.Barline.type.NONE);
stavesmo57691.setContext(context);
stavesmo57691.draw();
smo57691v0.draw(context, stavesmo57691);
smo57691v1.draw(context, stavesmo57691);
smo66295.setContext(context);
smo66295.draw();
smo66296.setContext(context);
smo66296.draw();
smo66297.setContext(context);
smo66297.draw();
smo66298.setContext(context);
smo66298.draw();
smo66299.setContext(context);
smo66299.draw();
const stavesmo62777 = new VF.Stave(978, 1508, 404);
stavesmo62777.setAttribute('id', 'stavesmo62777');
stavesmo62777.setBegBarType(VF.Barline.type.NONE);
stavesmo62777.setContext(context);
stavesmo62777.draw();
smo62777v0.draw(context, stavesmo62777);
const fmtsmo5772437 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo57724v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57724v0ar = [];
const smo57692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo57692.setAttribute('id', 'smo57692');
smo57692.addModifier(new VF.Dot(), 0);
smo57724v0ar.push(smo57692);
const smo57693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo57693.setAttribute('id', 'smo57693');
smo57724v0ar.push(smo57693);
const smo57694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo57694.setAttribute('id', 'smo57694');
smo57724v0ar.push(smo57694);
const smo57695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57695.setAttribute('id', 'smo57695');
smo57724v0ar.push(smo57695);
const smo57696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo57696.setAttribute('id', 'smo57696');
smo57724v0ar.push(smo57696);
const smo57697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57697.setAttribute('id', 'smo57697');
smo57724v0ar.push(smo57697);
const smo57698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo57698.setAttribute('id', 'smo57698');
smo57724v0ar.push(smo57698);
const smo57699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo57699.setAttribute('id', 'smo57699');
smo57724v0ar.push(smo57699);
const smo57700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo57700.setAttribute('id', 'smo57700');
smo57724v0ar.push(smo57700);
const smo57701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo57701.setAttribute('id', 'smo57701');
smo57724v0ar.push(smo57701);
const smo57702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo57702.setAttribute('id', 'smo57702');
smo57724v0ar.push(smo57702);
smo57724v0.addTickables(smo57724v0ar)
fmtsmo5772437.joinVoices([smo57724v0]);
const smo57724v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57724v1ar = [];
const smo57703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57703.setAttribute('id', 'smo57703');
smo57703.setStyle({ fillStyle: "#115511" });
smo57724v1ar.push(smo57703);
const smo57704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo57704.setAttribute('id', 'smo57704');
smo57704.setStyle({ fillStyle: "#115511" });
const smo577040acc = new VF.Accidental('#');
smo57704.addModifier(smo577040acc, 0);
smo57724v1ar.push(smo57704);
const smo57705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57705.setAttribute('id', 'smo57705');
smo57705.setStyle({ fillStyle: "#115511" });
smo57724v1ar.push(smo57705);
const smo57706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57706.setAttribute('id', 'smo57706');
smo57706.setStyle({ fillStyle: "#115511" });
smo57724v1ar.push(smo57706);
const smo57707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo57707.setAttribute('id', 'smo57707');
smo57707.setStyle({ fillStyle: "#115511" });
smo57724v1ar.push(smo57707);
const smo57708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57708.setAttribute('id', 'smo57708');
smo57708.setStyle({ fillStyle: "#115511" });
smo57724v1ar.push(smo57708);
const smo57709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo57709.setAttribute('id', 'smo57709');
smo57709.setStyle({ fillStyle: "#115511" });
smo57724v1ar.push(smo57709);
const smo57710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57710.setAttribute('id', 'smo57710');
smo57710.setStyle({ fillStyle: "#115511" });
smo57724v1ar.push(smo57710);
smo57724v1.addTickables(smo57724v1ar)
fmtsmo5772437.joinVoices([smo57724v1]);
const fmtsmo6279237 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo62792v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62792v0ar = [];
const smo62778 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo62778.setAttribute('id', 'smo62778');
smo62792v0ar.push(smo62778);
smo62792v0.addTickables(smo62792v0ar)
fmtsmo6279237.joinVoices([smo62792v0]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66304 = smo57692.getStemDirection();
smo57692.setStemDirection(dirsmo66304);
smo57693.setStemDirection(dirsmo66304);
smo57694.setStemDirection(dirsmo66304);
const smo66304 = new VF.Beam([smo57692,smo57693,smo57694]);
const dirsmo66305 = smo57695.getStemDirection();
smo57695.setStemDirection(dirsmo66305);
smo57696.setStemDirection(dirsmo66305);
const smo66305 = new VF.Beam([smo57695,smo57696]);
const dirsmo66306 = smo57697.getStemDirection();
smo57697.setStemDirection(dirsmo66306);
smo57698.setStemDirection(dirsmo66306);
const smo66306 = new VF.Beam([smo57697,smo57698]);
const dirsmo66307 = smo57699.getStemDirection();
smo57699.setStemDirection(dirsmo66307);
smo57700.setStemDirection(dirsmo66307);
smo57701.setStemDirection(dirsmo66307);
smo57702.setStemDirection(dirsmo66307);
const smo66307 = new VF.Beam([smo57699,smo57700,smo57701,smo57702]);
const dirsmo66308 = smo57703.getStemDirection();
smo57703.setStemDirection(dirsmo66308);
smo57704.setStemDirection(dirsmo66308);
const smo66308 = new VF.Beam([smo57703,smo57704]);
const dirsmo66309 = smo57706.getStemDirection();
smo57706.setStemDirection(dirsmo66309);
smo57707.setStemDirection(dirsmo66309);
smo57708.setStemDirection(dirsmo66309);
const smo66309 = new VF.Beam([smo57706,smo57707,smo57708]);
const dirsmo66310 = smo57709.getStemDirection();
smo57709.setStemDirection(dirsmo66310);
smo57710.setStemDirection(dirsmo66310);
const smo66310 = new VF.Beam([smo57709,smo57710]);
 
// formatting measures in staff group smo55345
fmtsmo5772437.format([smo57724v0,smo57724v1,smo62792v0], 410);
const stavesmo57724 = new VF.Stave(1382, 1422, 424);
stavesmo57724.setAttribute('id', 'stavesmo57724');
stavesmo57724.setBegBarType(VF.Barline.type.NONE);
stavesmo57724.setContext(context);
stavesmo57724.draw();
smo57724v0.draw(context, stavesmo57724);
smo57724v1.draw(context, stavesmo57724);
smo66304.setContext(context);
smo66304.draw();
smo66305.setContext(context);
smo66305.draw();
smo66306.setContext(context);
smo66306.draw();
smo66307.setContext(context);
smo66307.draw();
smo66308.setContext(context);
smo66308.draw();
smo66309.setContext(context);
smo66309.draw();
smo66310.setContext(context);
smo66310.draw();
const stavesmo62792 = new VF.Stave(1382, 1508, 424);
stavesmo62792.setAttribute('id', 'stavesmo62792');
stavesmo62792.setBegBarType(VF.Barline.type.NONE);
stavesmo62792.setContext(context);
stavesmo62792.draw();
smo62792v0.draw(context, stavesmo62792);
const rightsmo55345stavesmo577241 = new VF.StaveConnector(stavesmo57724, stavesmo62792).setType(0);
rightsmo55345stavesmo577241.setContext(context).draw();
const fmtsmo5776038 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo57760v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57760v0ar = [];
const smo57725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57725.setAttribute('id', 'smo57725');
smo57760v0ar.push(smo57725);
const smo57726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57726.setAttribute('id', 'smo57726');
smo57760v0ar.push(smo57726);
const smo57727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57727.setAttribute('id', 'smo57727');
smo57760v0ar.push(smo57727);
const smo57728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57728.setAttribute('id', 'smo57728');
smo57760v0ar.push(smo57728);
const smo57729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo57729.setAttribute('id', 'smo57729');
smo57760v0ar.push(smo57729);
const smo57730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57730.setAttribute('id', 'smo57730');
smo57760v0ar.push(smo57730);
const smo57731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo57731.setAttribute('id', 'smo57731');
smo57760v0ar.push(smo57731);
const smo57732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo57732.setAttribute('id', 'smo57732');
smo57760v0ar.push(smo57732);
const smo57733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo57733.setAttribute('id', 'smo57733');
smo57760v0ar.push(smo57733);
const smo57734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo57734.setAttribute('id', 'smo57734');
smo57760v0ar.push(smo57734);
const smo57735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo57735.setAttribute('id', 'smo57735');
smo57760v0ar.push(smo57735);
const smo57736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo57736.setAttribute('id', 'smo57736');
const smo577360acc = new VF.Accidental('#');
smo57736.addModifier(smo577360acc, 0);
smo57760v0ar.push(smo57736);
const smo57737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo57737.setAttribute('id', 'smo57737');
smo57760v0ar.push(smo57737);
const smo57738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57738.setAttribute('id', 'smo57738');
smo57760v0ar.push(smo57738);
smo57760v0.addTickables(smo57760v0ar)
fmtsmo5776038.joinVoices([smo57760v0]);
const smo57760v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57760v1ar = [];
const smo57739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57739.setAttribute('id', 'smo57739');
smo57739.setStyle({ fillStyle: "#115511" });
smo57760v1ar.push(smo57739);
const smo57740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57740.setAttribute('id', 'smo57740');
smo57740.setStyle({ fillStyle: "#115511" });
smo57760v1ar.push(smo57740);
const smo57741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57741.setAttribute('id', 'smo57741');
smo57741.setStyle({ fillStyle: "#115511" });
smo57760v1ar.push(smo57741);
const smo57742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57742.setAttribute('id', 'smo57742');
smo57742.setStyle({ fillStyle: "#115511" });
smo57760v1ar.push(smo57742);
const smo57743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57743.setAttribute('id', 'smo57743');
smo57743.setStyle({ fillStyle: "#115511" });
smo57760v1ar.push(smo57743);
const smo57744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
smo57744.setAttribute('id', 'smo57744');
smo57744.setStyle({ fillStyle: "#115511" });
smo57760v1ar.push(smo57744);
const smo57745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
smo57745.setAttribute('id', 'smo57745');
smo57745.setStyle({ fillStyle: "#115511" });
smo57760v1ar.push(smo57745);
const smo57746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57746.setAttribute('id', 'smo57746');
smo57746.setStyle({ fillStyle: "#115511" });
smo57760v1ar.push(smo57746);
smo57760v1.addTickables(smo57760v1ar)
fmtsmo5776038.joinVoices([smo57760v1]);
const fmtsmo6281538 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo62815v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62815v0ar = [];
const smo62793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo62793.setAttribute('id', 'smo62793');
smo62815v0ar.push(smo62793);
const smo62794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62794.setAttribute('id', 'smo62794');
smo62815v0ar.push(smo62794);
const smo62795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62795.setAttribute('id', 'smo62795');
smo62815v0ar.push(smo62795);
const smo62796 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62796.setAttribute('id', 'smo62796');
smo62815v0ar.push(smo62796);
const smo62797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62797.setAttribute('id', 'smo62797');
smo62797.addModifier(new VF.Dot(), 0);
smo62815v0ar.push(smo62797);
const smo62798 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62798.setAttribute('id', 'smo62798');
smo62815v0ar.push(smo62798);
const smo62799 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62799.setAttribute('id', 'smo62799');
smo62815v0ar.push(smo62799);
const smo62800 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62800.setAttribute('id', 'smo62800');
smo62815v0ar.push(smo62800);
const smo62801 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62801.setAttribute('id', 'smo62801');
smo62815v0ar.push(smo62801);
smo62815v0.addTickables(smo62815v0ar)
fmtsmo6281538.joinVoices([smo62815v0]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66326 = smo57725.getStemDirection();
smo57725.setStemDirection(dirsmo66326);
smo57726.setStemDirection(dirsmo66326);
smo57727.setStemDirection(dirsmo66326);
smo57728.setStemDirection(dirsmo66326);
const smo66326 = new VF.Beam([smo57725,smo57726,smo57727,smo57728]);
const dirsmo66327 = smo57729.getStemDirection();
smo57729.setStemDirection(dirsmo66327);
smo57730.setStemDirection(dirsmo66327);
smo57731.setStemDirection(dirsmo66327);
smo57732.setStemDirection(dirsmo66327);
const smo66327 = new VF.Beam([smo57729,smo57730,smo57731,smo57732]);
const dirsmo66328 = smo57733.getStemDirection();
smo57733.setStemDirection(dirsmo66328);
smo57734.setStemDirection(dirsmo66328);
smo57735.setStemDirection(dirsmo66328);
smo57736.setStemDirection(dirsmo66328);
const smo66328 = new VF.Beam([smo57733,smo57734,smo57735,smo57736]);
const dirsmo66329 = smo57737.getStemDirection();
smo57737.setStemDirection(dirsmo66329);
smo57738.setStemDirection(dirsmo66329);
const smo66329 = new VF.Beam([smo57737,smo57738]);
const dirsmo66330 = smo57739.getStemDirection();
smo57739.setStemDirection(dirsmo66330);
smo57740.setStemDirection(dirsmo66330);
smo57741.setStemDirection(dirsmo66330);
smo57742.setStemDirection(dirsmo66330);
const smo66330 = new VF.Beam([smo57739,smo57740,smo57741,smo57742]);
const dirsmo66333 = smo62794.getStemDirection();
smo62794.setStemDirection(dirsmo66333);
smo62795.setStemDirection(dirsmo66333);
smo62796.setStemDirection(dirsmo66333);
const smo66333 = new VF.Beam([smo62794,smo62795,smo62796]);
const dirsmo66334 = smo62797.getStemDirection();
smo62797.setStemDirection(dirsmo66334);
smo62798.setStemDirection(dirsmo66334);
smo62799.setStemDirection(dirsmo66334);
smo62800.setStemDirection(dirsmo66334);
smo62801.setStemDirection(dirsmo66334);
const smo66334 = new VF.Beam([smo62797,smo62798,smo62799,smo62800,smo62801]);
 
// formatting measures in staff group smo55345
fmtsmo5776038.format([smo57760v0,smo57760v1,smo62815v0], 372);
const stavesmo57760 = new VF.Stave(90, 1712, 430);
stavesmo57760.setAttribute('id', 'stavesmo57760');
stavesmo57760.setBegBarType(1);
stavesmo57760.addClef('treble');
stavesmo57760.setContext(context);
stavesmo57760.draw();
smo57760v0.draw(context, stavesmo57760);
smo57760v1.draw(context, stavesmo57760);
smo66326.setContext(context);
smo66326.draw();
smo66327.setContext(context);
smo66327.draw();
smo66328.setContext(context);
smo66328.draw();
smo66329.setContext(context);
smo66329.draw();
smo66330.setContext(context);
smo66330.draw();
const stavesmo62815 = new VF.Stave(90, 1861, 430);
stavesmo62815.setAttribute('id', 'stavesmo62815');
stavesmo62815.setBegBarType(1);
stavesmo62815.addClef('bass');
stavesmo62815.setContext(context);
stavesmo62815.draw();
smo62815v0.draw(context, stavesmo62815);
smo66333.setContext(context);
smo66333.draw();
smo66334.setContext(context);
smo66334.draw();
const leftsmo55345stavesmo577601 = new VF.StaveConnector(stavesmo57760, stavesmo62815).setType(3);
leftsmo55345stavesmo577601.setContext(context).draw();
const fmtsmo5779439 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo57794v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57794v0ar = [];
const smo57761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo57761.setAttribute('id', 'smo57761');
smo57794v0ar.push(smo57761);
const smo57762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57762.setAttribute('id', 'smo57762');
smo57794v0ar.push(smo57762);
const smo57763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo57763.setAttribute('id', 'smo57763');
smo57794v0ar.push(smo57763);
const smo57764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo57764.setAttribute('id', 'smo57764');
smo57794v0ar.push(smo57764);
const smo57765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57765.setAttribute('id', 'smo57765');
smo57794v0ar.push(smo57765);
const smo57766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57766.setAttribute('id', 'smo57766');
smo57794v0ar.push(smo57766);
const smo57767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57767.setAttribute('id', 'smo57767');
smo57767.addModifier(new VF.Dot(), 0);
smo57794v0ar.push(smo57767);
const smo57768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57768.setAttribute('id', 'smo57768');
smo57794v0ar.push(smo57768);
const smo57769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57769.setAttribute('id', 'smo57769');
smo57794v0ar.push(smo57769);
const smo57770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57770.setAttribute('id', 'smo57770');
smo57794v0ar.push(smo57770);
const smo57771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57771.setAttribute('id', 'smo57771');
smo57794v0ar.push(smo57771);
const smo57772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57772.setAttribute('id', 'smo57772');
smo57794v0ar.push(smo57772);
smo57794v0.addTickables(smo57794v0ar)
fmtsmo5779439.joinVoices([smo57794v0]);
const smo57794v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57794v1ar = [];
const smo57773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57773.setAttribute('id', 'smo57773');
smo57773.setStyle({ fillStyle: "#115511" });
smo57794v1ar.push(smo57773);
const smo57774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57774.setAttribute('id', 'smo57774');
smo57774.setStyle({ fillStyle: "#115511" });
smo57794v1ar.push(smo57774);
const smo57775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57775.setAttribute('id', 'smo57775');
smo57775.setStyle({ fillStyle: "#115511" });
smo57794v1ar.push(smo57775);
const smo57776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57776.setAttribute('id', 'smo57776');
smo57776.setStyle({ fillStyle: "#115511" });
smo57794v1ar.push(smo57776);
const smo57777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57777.setAttribute('id', 'smo57777');
smo57777.setStyle({ fillStyle: "#115511" });
smo57794v1ar.push(smo57777);
const smo57778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57778.setAttribute('id', 'smo57778');
smo57778.setStyle({ fillStyle: "#115511" });
smo57794v1ar.push(smo57778);
const smo57779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57779.setAttribute('id', 'smo57779');
smo57779.setStyle({ fillStyle: "#115511" });
smo57794v1ar.push(smo57779);
const smo57780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57780.setAttribute('id', 'smo57780');
smo57780.setStyle({ fillStyle: "#115511" });
smo57794v1ar.push(smo57780);
smo57794v1.addTickables(smo57794v1ar)
fmtsmo5779439.joinVoices([smo57794v1]);
const fmtsmo6284439 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo62844v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62844v0ar = [];
const smo62816 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62816.setAttribute('id', 'smo62816');
smo62844v0ar.push(smo62816);
const smo62817 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62817.setAttribute('id', 'smo62817');
smo62844v0ar.push(smo62817);
const smo62818 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62818.setAttribute('id', 'smo62818');
smo62844v0ar.push(smo62818);
const smo62819 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62819.setAttribute('id', 'smo62819');
smo62844v0ar.push(smo62819);
const smo62820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62820.setAttribute('id', 'smo62820');
smo62844v0ar.push(smo62820);
const smo62821 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62821.setAttribute('id', 'smo62821');
smo62844v0ar.push(smo62821);
const smo62822 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62822.setAttribute('id', 'smo62822');
smo62844v0ar.push(smo62822);
const smo62823 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62823.setAttribute('id', 'smo62823');
smo62844v0ar.push(smo62823);
const smo62824 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62824.setAttribute('id', 'smo62824');
smo62844v0ar.push(smo62824);
const smo62825 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo62825.setAttribute('id', 'smo62825');
const smo628250acc = new VF.Accidental('b');
smo62825.addModifier(smo628250acc, 0);
smo62844v0ar.push(smo62825);
smo62844v0.addTickables(smo62844v0ar)
fmtsmo6284439.joinVoices([smo62844v0]);
const smo62844v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62844v1ar = [];
const smo62826 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo62826.setAttribute('id', 'smo62826');
smo62826.setStyle({ fillStyle: "#115511" });
smo62844v1ar.push(smo62826);
const smo62827 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo62827.setAttribute('id', 'smo62827');
smo62827.setStyle({ fillStyle: "#115511" });
smo62844v1ar.push(smo62827);
const smo62828 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo62828.setAttribute('id', 'smo62828');
smo62828.setStyle({ fillStyle: "#115511" });
smo62844v1ar.push(smo62828);
const smo62829 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62829.setAttribute('id', 'smo62829');
smo62829.setStyle({ fillStyle: "#115511" });
smo62844v1ar.push(smo62829);
const smo62830 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62830.setAttribute('id', 'smo62830');
smo62830.setStyle({ fillStyle: "#115511" });
smo62844v1ar.push(smo62830);
smo62844v1.addTickables(smo62844v1ar)
fmtsmo6284439.joinVoices([smo62844v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66337 = smo57761.getStemDirection();
smo57761.setStemDirection(dirsmo66337);
smo57762.setStemDirection(dirsmo66337);
const smo66337 = new VF.Beam([smo57761,smo57762]);
const dirsmo66338 = smo57763.getStemDirection();
smo57763.setStemDirection(dirsmo66338);
smo57764.setStemDirection(dirsmo66338);
smo57765.setStemDirection(dirsmo66338);
smo57766.setStemDirection(dirsmo66338);
const smo66338 = new VF.Beam([smo57763,smo57764,smo57765,smo57766]);
const dirsmo66339 = smo57767.getStemDirection();
smo57767.setStemDirection(dirsmo66339);
smo57768.setStemDirection(dirsmo66339);
const smo66339 = new VF.Beam([smo57767,smo57768]);
const dirsmo66340 = smo57769.getStemDirection();
smo57769.setStemDirection(dirsmo66340);
smo57770.setStemDirection(dirsmo66340);
smo57771.setStemDirection(dirsmo66340);
smo57772.setStemDirection(dirsmo66340);
const smo66340 = new VF.Beam([smo57769,smo57770,smo57771,smo57772]);
const dirsmo66341 = smo57773.getStemDirection();
smo57773.setStemDirection(dirsmo66341);
smo57774.setStemDirection(dirsmo66341);
smo57775.setStemDirection(dirsmo66341);
const smo66341 = new VF.Beam([smo57773,smo57774,smo57775]);
const dirsmo66342 = smo57777.getStemDirection();
smo57777.setStemDirection(dirsmo66342);
smo57778.setStemDirection(dirsmo66342);
smo57779.setStemDirection(dirsmo66342);
const smo66342 = new VF.Beam([smo57777,smo57778,smo57779]);
const dirsmo66345 = smo62816.getStemDirection();
smo62816.setStemDirection(dirsmo66345);
smo62817.setStemDirection(dirsmo66345);
const smo66345 = new VF.Beam([smo62816,smo62817]);
const dirsmo66346 = smo62818.getStemDirection();
smo62818.setStemDirection(dirsmo66346);
smo62819.setStemDirection(dirsmo66346);
smo62820.setStemDirection(dirsmo66346);
smo62821.setStemDirection(dirsmo66346);
const smo66346 = new VF.Beam([smo62818,smo62819,smo62820,smo62821]);
const dirsmo66347 = smo62822.getStemDirection();
smo62822.setStemDirection(dirsmo66347);
smo62823.setStemDirection(dirsmo66347);
const smo66347 = new VF.Beam([smo62822,smo62823]);
const dirsmo66348 = smo62824.getStemDirection();
smo62824.setStemDirection(dirsmo66348);
smo62825.setStemDirection(dirsmo66348);
const smo66348 = new VF.Beam([smo62824,smo62825]);
const dirsmo66349 = smo62828.getStemDirection();
smo62828.setStemDirection(dirsmo66349);
smo62829.setStemDirection(dirsmo66349);
smo62830.setStemDirection(dirsmo66349);
const smo66349 = new VF.Beam([smo62828,smo62829,smo62830]);
 
// formatting measures in staff group smo55345
fmtsmo5779439.format([smo57794v0,smo57794v1,smo62844v0,smo62844v1], 390);
const stavesmo57794 = new VF.Stave(520, 1712, 404);
stavesmo57794.setAttribute('id', 'stavesmo57794');
stavesmo57794.setBegBarType(VF.Barline.type.NONE);
stavesmo57794.setContext(context);
stavesmo57794.draw();
smo57794v0.draw(context, stavesmo57794);
smo57794v1.draw(context, stavesmo57794);
smo66337.setContext(context);
smo66337.draw();
smo66338.setContext(context);
smo66338.draw();
smo66339.setContext(context);
smo66339.draw();
smo66340.setContext(context);
smo66340.draw();
smo66341.setContext(context);
smo66341.draw();
smo66342.setContext(context);
smo66342.draw();
const stavesmo62844 = new VF.Stave(520, 1861, 404);
stavesmo62844.setAttribute('id', 'stavesmo62844');
stavesmo62844.setBegBarType(VF.Barline.type.NONE);
stavesmo62844.setContext(context);
stavesmo62844.draw();
smo62844v0.draw(context, stavesmo62844);
smo62844v1.draw(context, stavesmo62844);
smo66345.setContext(context);
smo66345.draw();
smo66346.setContext(context);
smo66346.draw();
smo66347.setContext(context);
smo66347.draw();
smo66348.setContext(context);
smo66348.draw();
smo66349.setContext(context);
smo66349.draw();
const fmtsmo5782340 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo57823v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57823v0ar = [];
const smo57795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57795.setAttribute('id', 'smo57795');
smo57823v0ar.push(smo57795);
const smo57796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57796.setAttribute('id', 'smo57796');
smo57823v0ar.push(smo57796);
const smo57797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57797.setAttribute('id', 'smo57797');
smo57823v0ar.push(smo57797);
const smo57798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57798.setAttribute('id', 'smo57798');
smo57823v0ar.push(smo57798);
const smo57799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo57799.setAttribute('id', 'smo57799');
smo57823v0ar.push(smo57799);
const smo57800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57800.setAttribute('id', 'smo57800');
smo57823v0ar.push(smo57800);
smo57823v0.addTickables(smo57823v0ar)
fmtsmo5782340.joinVoices([smo57823v0]);
const smo57823v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57823v1ar = [];
const smo57801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57801.setAttribute('id', 'smo57801');
smo57801.setStyle({ fillStyle: "#115511" });
smo57823v1ar.push(smo57801);
const smo57802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57802.setAttribute('id', 'smo57802');
smo57802.setStyle({ fillStyle: "#115511" });
smo57823v1ar.push(smo57802);
const smo57803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57803.setAttribute('id', 'smo57803');
smo57803.setStyle({ fillStyle: "#115511" });
smo57823v1ar.push(smo57803);
const smo57804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57804.setAttribute('id', 'smo57804');
smo57804.setStyle({ fillStyle: "#115511" });
smo57823v1ar.push(smo57804);
const smo57805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57805.setAttribute('id', 'smo57805');
smo57805.setStyle({ fillStyle: "#115511" });
smo57823v1ar.push(smo57805);
const smo57806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57806.setAttribute('id', 'smo57806');
smo57806.setStyle({ fillStyle: "#115511" });
smo57823v1ar.push(smo57806);
const smo57807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57807.setAttribute('id', 'smo57807');
smo57807.setStyle({ fillStyle: "#115511" });
smo57823v1ar.push(smo57807);
const smo57808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57808.setAttribute('id', 'smo57808');
smo57808.setStyle({ fillStyle: "#115511" });
smo57823v1ar.push(smo57808);
const smo57809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57809.setAttribute('id', 'smo57809');
smo57809.setStyle({ fillStyle: "#115511" });
smo57823v1ar.push(smo57809);
smo57823v1.addTickables(smo57823v1ar)
fmtsmo5782340.joinVoices([smo57823v1]);
const fmtsmo6287840 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo62878v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62878v0ar = [];
const smo62845 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62845.setAttribute('id', 'smo62845');
smo62878v0ar.push(smo62845);
const smo62846 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62846.setAttribute('id', 'smo62846');
smo62878v0ar.push(smo62846);
const smo62847 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62847.setAttribute('id', 'smo62847');
smo62878v0ar.push(smo62847);
const smo62848 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62848.setAttribute('id', 'smo62848');
smo62878v0ar.push(smo62848);
const smo62849 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo62849.setAttribute('id', 'smo62849');
smo62878v0ar.push(smo62849);
const smo62850 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62850.setAttribute('id', 'smo62850');
smo62878v0ar.push(smo62850);
const smo62851 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62851.setAttribute('id', 'smo62851');
smo62878v0ar.push(smo62851);
const smo62852 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62852.setAttribute('id', 'smo62852');
smo62878v0ar.push(smo62852);
const smo62853 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62853.setAttribute('id', 'smo62853');
smo62878v0ar.push(smo62853);
smo62878v0.addTickables(smo62878v0ar)
fmtsmo6287840.joinVoices([smo62878v0]);
const smo62878v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62878v1ar = [];
const smo62854 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62854.setAttribute('id', 'smo62854');
smo62854.setStyle({ fillStyle: "#115511" });
smo62854.addModifier(new VF.Dot(), 0);
smo62878v1ar.push(smo62854);
const smo62855 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62855.setAttribute('id', 'smo62855');
smo62855.setStyle({ fillStyle: "#115511" });
smo62878v1ar.push(smo62855);
const smo62856 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62856.setAttribute('id', 'smo62856');
smo62856.setStyle({ fillStyle: "#115511" });
smo62878v1ar.push(smo62856);
const smo62857 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62857.setAttribute('id', 'smo62857');
smo62857.setStyle({ fillStyle: "#115511" });
smo62878v1ar.push(smo62857);
const smo62858 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62858.setAttribute('id', 'smo62858');
smo62858.setStyle({ fillStyle: "#115511" });
smo62878v1ar.push(smo62858);
const smo62859 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62859.setAttribute('id', 'smo62859');
smo62859.setStyle({ fillStyle: "#115511" });
smo62878v1ar.push(smo62859);
const smo62860 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62860.setAttribute('id', 'smo62860');
smo62860.setStyle({ fillStyle: "#115511" });
smo62878v1ar.push(smo62860);
const smo62861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62861.setAttribute('id', 'smo62861');
smo62861.setStyle({ fillStyle: "#115511" });
smo62878v1ar.push(smo62861);
const smo62862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62862.setAttribute('id', 'smo62862');
smo62862.setStyle({ fillStyle: "#115511" });
smo62878v1ar.push(smo62862);
const smo62863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62863.setAttribute('id', 'smo62863');
smo62863.setStyle({ fillStyle: "#115511" });
smo62878v1ar.push(smo62863);
const smo62864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62864.setAttribute('id', 'smo62864');
smo62864.setStyle({ fillStyle: "#115511" });
smo62878v1ar.push(smo62864);
smo62878v1.addTickables(smo62878v1ar)
fmtsmo6287840.joinVoices([smo62878v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66352 = smo57795.getStemDirection();
smo57795.setStemDirection(dirsmo66352);
smo57796.setStemDirection(dirsmo66352);
smo57797.setStemDirection(dirsmo66352);
smo57798.setStemDirection(dirsmo66352);
const smo66352 = new VF.Beam([smo57795,smo57796,smo57797,smo57798]);
const dirsmo66353 = smo57801.getStemDirection();
smo57801.setStemDirection(dirsmo66353);
smo57802.setStemDirection(dirsmo66353);
const smo66353 = new VF.Beam([smo57801,smo57802]);
const dirsmo66354 = smo57804.getStemDirection();
smo57804.setStemDirection(dirsmo66354);
smo57805.setStemDirection(dirsmo66354);
smo57806.setStemDirection(dirsmo66354);
const smo66354 = new VF.Beam([smo57804,smo57805,smo57806]);
const dirsmo66355 = smo57807.getStemDirection();
smo57807.setStemDirection(dirsmo66355);
smo57808.setStemDirection(dirsmo66355);
const smo66355 = new VF.Beam([smo57807,smo57808]);
const dirsmo66358 = smo62845.getStemDirection();
smo62845.setStemDirection(dirsmo66358);
smo62846.setStemDirection(dirsmo66358);
smo62847.setStemDirection(dirsmo66358);
smo62848.setStemDirection(dirsmo66358);
const smo66358 = new VF.Beam([smo62845,smo62846,smo62847,smo62848]);
const dirsmo66359 = smo62850.getStemDirection();
smo62850.setStemDirection(dirsmo66359);
smo62851.setStemDirection(dirsmo66359);
smo62852.setStemDirection(dirsmo66359);
const smo66359 = new VF.Beam([smo62850,smo62851,smo62852]);
const dirsmo66360 = smo62854.getStemDirection();
smo62854.setStemDirection(dirsmo66360);
smo62855.setStemDirection(dirsmo66360);
smo62856.setStemDirection(dirsmo66360);
const smo66360 = new VF.Beam([smo62854,smo62855,smo62856]);
const dirsmo66361 = smo62857.getStemDirection();
smo62857.setStemDirection(dirsmo66361);
smo62858.setStemDirection(dirsmo66361);
const smo66361 = new VF.Beam([smo62857,smo62858]);
const dirsmo66362 = smo62859.getStemDirection();
smo62859.setStemDirection(dirsmo66362);
smo62860.setStemDirection(dirsmo66362);
const smo66362 = new VF.Beam([smo62859,smo62860]);
const dirsmo66363 = smo62861.getStemDirection();
smo62861.setStemDirection(dirsmo66363);
smo62862.setStemDirection(dirsmo66363);
smo62863.setStemDirection(dirsmo66363);
smo62864.setStemDirection(dirsmo66363);
const smo66363 = new VF.Beam([smo62861,smo62862,smo62863,smo62864]);
 
// formatting measures in staff group smo55345
fmtsmo5782340.format([smo57823v0,smo57823v1,smo62878v0,smo62878v1], 427);
const stavesmo57823 = new VF.Stave(924, 1712, 441);
stavesmo57823.setAttribute('id', 'stavesmo57823');
stavesmo57823.setBegBarType(VF.Barline.type.NONE);
stavesmo57823.setContext(context);
stavesmo57823.draw();
smo57823v0.draw(context, stavesmo57823);
smo57823v1.draw(context, stavesmo57823);
smo66352.setContext(context);
smo66352.draw();
smo66353.setContext(context);
smo66353.draw();
smo66354.setContext(context);
smo66354.draw();
smo66355.setContext(context);
smo66355.draw();
const stavesmo62878 = new VF.Stave(924, 1861, 441);
stavesmo62878.setAttribute('id', 'stavesmo62878');
stavesmo62878.setBegBarType(VF.Barline.type.NONE);
stavesmo62878.setContext(context);
stavesmo62878.draw();
smo62878v0.draw(context, stavesmo62878);
smo62878v1.draw(context, stavesmo62878);
smo66358.setContext(context);
smo66358.draw();
smo66359.setContext(context);
smo66359.draw();
smo66360.setContext(context);
smo66360.draw();
smo66361.setContext(context);
smo66361.draw();
smo66362.setContext(context);
smo66362.draw();
smo66363.setContext(context);
smo66363.draw();
const fmtsmo5784941 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo57849v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57849v0ar = [];
const smo57824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57824.setAttribute('id', 'smo57824');
smo57849v0ar.push(smo57824);
const smo57825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo57825.setAttribute('id', 'smo57825');
smo57849v0ar.push(smo57825);
const smo57826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo57826.setAttribute('id', 'smo57826');
smo57849v0ar.push(smo57826);
const smo57827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo57827.setAttribute('id', 'smo57827');
smo57849v0ar.push(smo57827);
const smo57828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo57828.setAttribute('id', 'smo57828');
smo57828.addModifier(new VF.Dot(), 0);
smo57849v0ar.push(smo57828);
const smo57829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo57829.setAttribute('id', 'smo57829');
smo57849v0ar.push(smo57829);
const smo57830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo57830.setAttribute('id', 'smo57830');
smo57849v0ar.push(smo57830);
const smo57831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo57831.setAttribute('id', 'smo57831');
smo57849v0ar.push(smo57831);
const smo57832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo57832.setAttribute('id', 'smo57832');
smo57849v0ar.push(smo57832);
smo57849v0.addTickables(smo57849v0ar)
fmtsmo5784941.joinVoices([smo57849v0]);
const smo57849v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57849v1ar = [];
const smo57833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57833.setAttribute('id', 'smo57833');
smo57833.setStyle({ fillStyle: "#115511" });
smo57849v1ar.push(smo57833);
const smo57834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57834.setAttribute('id', 'smo57834');
smo57834.setStyle({ fillStyle: '#aaaaaa7f' });
smo57849v1ar.push(smo57834);
const smo57835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57835.setAttribute('id', 'smo57835');
smo57835.setStyle({ fillStyle: '#aaaaaa7f' });
smo57849v1ar.push(smo57835);
smo57849v1.addTickables(smo57849v1ar)
fmtsmo5784941.joinVoices([smo57849v1]);
const fmtsmo6291241 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo62912v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62912v0ar = [];
const smo62879 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62879.setAttribute('id', 'smo62879');
smo62912v0ar.push(smo62879);
const smo62880 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo62880.setAttribute('id', 'smo62880');
smo62912v0ar.push(smo62880);
const smo62881 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62881.setAttribute('id', 'smo62881');
smo62912v0ar.push(smo62881);
const smo62882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62882.setAttribute('id', 'smo62882');
smo62912v0ar.push(smo62882);
const smo62883 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62883.setAttribute('id', 'smo62883');
smo62912v0ar.push(smo62883);
const smo62884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62884.setAttribute('id', 'smo62884');
smo62884.addModifier(new VF.Dot(), 0);
smo62912v0ar.push(smo62884);
const smo62885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62885.setAttribute('id', 'smo62885');
smo62912v0ar.push(smo62885);
const smo62886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62886.setAttribute('id', 'smo62886');
smo62912v0ar.push(smo62886);
smo62912v0.addTickables(smo62912v0ar)
fmtsmo6291241.joinVoices([smo62912v0]);
const smo62912v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62912v1ar = [];
const smo62887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62887.setAttribute('id', 'smo62887');
smo62887.setStyle({ fillStyle: "#115511" });
smo62912v1ar.push(smo62887);
const smo62888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62888.setAttribute('id', 'smo62888');
smo62888.setStyle({ fillStyle: "#115511" });
smo62912v1ar.push(smo62888);
const smo62889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62889.setAttribute('id', 'smo62889');
smo62889.setStyle({ fillStyle: "#115511" });
smo62912v1ar.push(smo62889);
const smo62890 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62890.setAttribute('id', 'smo62890');
smo62890.setStyle({ fillStyle: "#115511" });
smo62912v1ar.push(smo62890);
const smo62891 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo62891.setAttribute('id', 'smo62891');
smo62891.setStyle({ fillStyle: "#115511" });
smo62912v1ar.push(smo62891);
const smo62892 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62892.setAttribute('id', 'smo62892');
smo62892.setStyle({ fillStyle: "#115511" });
smo62912v1ar.push(smo62892);
const smo62893 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo62893.setAttribute('id', 'smo62893');
smo62893.setStyle({ fillStyle: "#115511" });
smo62912v1ar.push(smo62893);
const smo62894 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo62894.setAttribute('id', 'smo62894');
smo62894.setStyle({ fillStyle: "#115511" });
smo62912v1ar.push(smo62894);
const smo62895 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo62895.setAttribute('id', 'smo62895');
smo62895.setStyle({ fillStyle: "#115511" });
smo62912v1ar.push(smo62895);
const smo62896 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62896.setAttribute('id', 'smo62896');
smo62896.setStyle({ fillStyle: "#115511" });
smo62912v1ar.push(smo62896);
const smo62897 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62897.setAttribute('id', 'smo62897');
smo62897.setStyle({ fillStyle: "#115511" });
smo62912v1ar.push(smo62897);
const smo62898 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo62898.setAttribute('id', 'smo62898');
smo62898.setStyle({ fillStyle: "#115511" });
const smo628980acc = new VF.Accidental('#');
smo62898.addModifier(smo628980acc, 0);
smo62912v1ar.push(smo62898);
smo62912v1.addTickables(smo62912v1ar)
fmtsmo6291241.joinVoices([smo62912v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66366 = smo57825.getStemDirection();
smo57825.setStemDirection(dirsmo66366);
smo57826.setStemDirection(dirsmo66366);
smo57827.setStemDirection(dirsmo66366);
const smo66366 = new VF.Beam([smo57825,smo57826,smo57827]);
const dirsmo66367 = smo57828.getStemDirection();
smo57828.setStemDirection(dirsmo66367);
smo57829.setStemDirection(dirsmo66367);
smo57830.setStemDirection(dirsmo66367);
const smo66367 = new VF.Beam([smo57828,smo57829,smo57830]);
const dirsmo66368 = smo57831.getStemDirection();
smo57831.setStemDirection(dirsmo66368);
smo57832.setStemDirection(dirsmo66368);
const smo66368 = new VF.Beam([smo57831,smo57832]);
const dirsmo66371 = smo62881.getStemDirection();
smo62881.setStemDirection(dirsmo66371);
smo62882.setStemDirection(dirsmo66371);
const smo66371 = new VF.Beam([smo62881,smo62882]);
const dirsmo66372 = smo62884.getStemDirection();
smo62884.setStemDirection(dirsmo66372);
smo62885.setStemDirection(dirsmo66372);
smo62886.setStemDirection(dirsmo66372);
const smo66372 = new VF.Beam([smo62884,smo62885,smo62886]);
const dirsmo66373 = smo62887.getStemDirection();
smo62887.setStemDirection(dirsmo66373);
smo62888.setStemDirection(dirsmo66373);
smo62889.setStemDirection(dirsmo66373);
smo62890.setStemDirection(dirsmo66373);
const smo66373 = new VF.Beam([smo62887,smo62888,smo62889,smo62890]);
const dirsmo66374 = smo62891.getStemDirection();
smo62891.setStemDirection(dirsmo66374);
smo62892.setStemDirection(dirsmo66374);
smo62893.setStemDirection(dirsmo66374);
smo62894.setStemDirection(dirsmo66374);
const smo66374 = new VF.Beam([smo62891,smo62892,smo62893,smo62894]);
const dirsmo66375 = smo62895.getStemDirection();
smo62895.setStemDirection(dirsmo66375);
smo62896.setStemDirection(dirsmo66375);
smo62897.setStemDirection(dirsmo66375);
smo62898.setStemDirection(dirsmo66375);
const smo66375 = new VF.Beam([smo62895,smo62896,smo62897,smo62898]);
 
// formatting measures in staff group smo55345
fmtsmo5784941.format([smo57849v0,smo57849v1,smo62912v0,smo62912v1], 430);
const stavesmo57849 = new VF.Stave(1365, 1712, 444);
stavesmo57849.setAttribute('id', 'stavesmo57849');
stavesmo57849.setBegBarType(VF.Barline.type.NONE);
stavesmo57849.setContext(context);
stavesmo57849.draw();
smo57849v0.draw(context, stavesmo57849);
smo57849v1.draw(context, stavesmo57849);
smo66366.setContext(context);
smo66366.draw();
smo66367.setContext(context);
smo66367.draw();
smo66368.setContext(context);
smo66368.draw();
const stavesmo62912 = new VF.Stave(1365, 1861, 444);
stavesmo62912.setAttribute('id', 'stavesmo62912');
stavesmo62912.setBegBarType(VF.Barline.type.NONE);
stavesmo62912.setContext(context);
stavesmo62912.draw();
smo62912v0.draw(context, stavesmo62912);
smo62912v1.draw(context, stavesmo62912);
smo66371.setContext(context);
smo66371.draw();
smo66372.setContext(context);
smo66372.draw();
smo66373.setContext(context);
smo66373.draw();
smo66374.setContext(context);
smo66374.draw();
smo66375.setContext(context);
smo66375.draw();
const rightsmo55345stavesmo578491 = new VF.StaveConnector(stavesmo57849, stavesmo62912).setType(0);
rightsmo55345stavesmo578491.setContext(context).draw();
const fmtsmo5787542 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo57875v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57875v0ar = [];
const smo57850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo57850.setAttribute('id', 'smo57850');
smo57875v0ar.push(smo57850);
const smo57851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo57851.setAttribute('id', 'smo57851');
smo57875v0ar.push(smo57851);
const smo57852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo57852.setAttribute('id', 'smo57852');
smo57875v0ar.push(smo57852);
const smo57853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/5/n"]}'))
smo57853.setAttribute('id', 'smo57853');
smo57875v0ar.push(smo57853);
const smo57854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo57854.setAttribute('id', 'smo57854');
smo57875v0ar.push(smo57854);
const smo57855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo57855.setAttribute('id', 'smo57855');
smo57875v0ar.push(smo57855);
const smo57856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo57856.setAttribute('id', 'smo57856');
smo57875v0ar.push(smo57856);
const smo57857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/5/n"]}'))
smo57857.setAttribute('id', 'smo57857');
smo57875v0ar.push(smo57857);
const smo57858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/5/n"]}'))
smo57858.setAttribute('id', 'smo57858');
smo57875v0ar.push(smo57858);
const smo57859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/5/n"]}'))
smo57859.setAttribute('id', 'smo57859');
smo57875v0ar.push(smo57859);
const smo57860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/5/n"]}'))
smo57860.setAttribute('id', 'smo57860');
smo57875v0ar.push(smo57860);
const smo57861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo57861.setAttribute('id', 'smo57861');
smo57875v0ar.push(smo57861);
smo57875v0.addTickables(smo57875v0ar)
fmtsmo5787542.joinVoices([smo57875v0]);
const fmtsmo6294442 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo62944v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62944v0ar = [];
const smo62913 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62913.setAttribute('id', 'smo62913');
smo62944v0ar.push(smo62913);
const smo62914 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62914.setAttribute('id', 'smo62914');
smo62944v0ar.push(smo62914);
const smo62915 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62915.setAttribute('id', 'smo62915');
smo62944v0ar.push(smo62915);
const smo62916 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62916.setAttribute('id', 'smo62916');
smo62944v0ar.push(smo62916);
const smo62917 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62917.setAttribute('id', 'smo62917');
smo62944v0ar.push(smo62917);
const smo62918 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62918.setAttribute('id', 'smo62918');
smo62944v0ar.push(smo62918);
const smo62919 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62919.setAttribute('id', 'smo62919');
smo62944v0ar.push(smo62919);
const smo62920 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62920.setAttribute('id', 'smo62920');
smo62944v0ar.push(smo62920);
const smo62921 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62921.setAttribute('id', 'smo62921');
const smo629210acc = new VF.Accidental('n');
smo62921.addModifier(smo629210acc, 0);
smo62944v0ar.push(smo62921);
const smo62922 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62922.setAttribute('id', 'smo62922');
smo62944v0ar.push(smo62922);
smo62944v0.addTickables(smo62944v0ar)
fmtsmo6294442.joinVoices([smo62944v0]);
const smo62944v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62944v1ar = [];
const smo62923 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62923.setAttribute('id', 'smo62923');
smo62923.setStyle({ fillStyle: "#115511" });
smo62944v1ar.push(smo62923);
const smo62924 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62924.setAttribute('id', 'smo62924');
smo62924.setStyle({ fillStyle: "#115511" });
smo62944v1ar.push(smo62924);
const smo62925 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo62925.setAttribute('id', 'smo62925');
smo62925.setStyle({ fillStyle: "#115511" });
const smo629250acc = new VF.Accidental('b');
smo62925.addModifier(smo629250acc, 0);
smo62944v1ar.push(smo62925);
const smo62926 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62926.setAttribute('id', 'smo62926');
smo62926.setStyle({ fillStyle: "#115511" });
smo62944v1ar.push(smo62926);
const smo62927 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/3/n"]}'))
smo62927.setAttribute('id', 'smo62927');
smo62927.setStyle({ fillStyle: "#115511" });
const smo629270acc = new VF.Accidental('#');
smo62927.addModifier(smo629270acc, 0);
smo62944v1ar.push(smo62927);
const smo62928 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62928.setAttribute('id', 'smo62928');
smo62928.setStyle({ fillStyle: "#115511" });
smo62944v1ar.push(smo62928);
const smo62929 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62929.setAttribute('id', 'smo62929');
smo62929.setStyle({ fillStyle: "#115511" });
smo62944v1ar.push(smo62929);
const smo62930 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62930.setAttribute('id', 'smo62930');
smo62930.setStyle({ fillStyle: "#115511" });
smo62944v1ar.push(smo62930);
smo62944v1.addTickables(smo62944v1ar)
fmtsmo6294442.joinVoices([smo62944v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66391 = smo57850.getStemDirection();
smo57850.setStemDirection(dirsmo66391);
smo57851.setStemDirection(dirsmo66391);
const smo66391 = new VF.Beam([smo57850,smo57851]);
const dirsmo66392 = smo57852.getStemDirection();
smo57852.setStemDirection(dirsmo66392);
smo57853.setStemDirection(dirsmo66392);
smo57854.setStemDirection(dirsmo66392);
smo57855.setStemDirection(dirsmo66392);
const smo66392 = new VF.Beam([smo57852,smo57853,smo57854,smo57855]);
const dirsmo66393 = smo57856.getStemDirection();
smo57856.setStemDirection(dirsmo66393);
smo57857.setStemDirection(dirsmo66393);
const smo66393 = new VF.Beam([smo57856,smo57857]);
const dirsmo66394 = smo57858.getStemDirection();
smo57858.setStemDirection(dirsmo66394);
smo57859.setStemDirection(dirsmo66394);
smo57860.setStemDirection(dirsmo66394);
smo57861.setStemDirection(dirsmo66394);
const smo66394 = new VF.Beam([smo57858,smo57859,smo57860,smo57861]);
const dirsmo66397 = smo62913.getStemDirection();
smo62913.setStemDirection(dirsmo66397);
smo62914.setStemDirection(dirsmo66397);
smo62915.setStemDirection(dirsmo66397);
smo62916.setStemDirection(dirsmo66397);
const smo66397 = new VF.Beam([smo62913,smo62914,smo62915,smo62916]);
const dirsmo66398 = smo62917.getStemDirection();
smo62917.setStemDirection(dirsmo66398);
smo62918.setStemDirection(dirsmo66398);
smo62919.setStemDirection(dirsmo66398);
smo62920.setStemDirection(dirsmo66398);
const smo66398 = new VF.Beam([smo62917,smo62918,smo62919,smo62920]);
const dirsmo66399 = smo62921.getStemDirection();
smo62921.setStemDirection(dirsmo66399);
smo62922.setStemDirection(dirsmo66399);
const smo66399 = new VF.Beam([smo62921,smo62922]);
const dirsmo66400 = smo62923.getStemDirection();
smo62923.setStemDirection(dirsmo66400);
smo62924.setStemDirection(dirsmo66400);
smo62925.setStemDirection(dirsmo66400);
smo62926.setStemDirection(dirsmo66400);
const smo66400 = new VF.Beam([smo62923,smo62924,smo62925,smo62926]);
const dirsmo66401 = smo62927.getStemDirection();
smo62927.setStemDirection(dirsmo66401);
smo62928.setStemDirection(dirsmo66401);
const smo66401 = new VF.Beam([smo62927,smo62928]);
 
// formatting measures in staff group smo55345
fmtsmo5787542.format([smo57875v0,smo62944v0,smo62944v1], 362);
const stavesmo57875 = new VF.Stave(90, 2020, 420);
stavesmo57875.setAttribute('id', 'stavesmo57875');
stavesmo57875.setBegBarType(1);
stavesmo57875.addClef('treble');
stavesmo57875.setContext(context);
stavesmo57875.draw();
smo57875v0.draw(context, stavesmo57875);
smo66391.setContext(context);
smo66391.draw();
smo66392.setContext(context);
smo66392.draw();
smo66393.setContext(context);
smo66393.draw();
smo66394.setContext(context);
smo66394.draw();
const stavesmo62944 = new VF.Stave(90, 2184, 420);
stavesmo62944.setAttribute('id', 'stavesmo62944');
stavesmo62944.setBegBarType(1);
stavesmo62944.addClef('bass');
stavesmo62944.setContext(context);
stavesmo62944.draw();
smo62944v0.draw(context, stavesmo62944);
smo62944v1.draw(context, stavesmo62944);
smo66397.setContext(context);
smo66397.draw();
smo66398.setContext(context);
smo66398.draw();
smo66399.setContext(context);
smo66399.draw();
smo66400.setContext(context);
smo66400.draw();
smo66401.setContext(context);
smo66401.draw();
const leftsmo55345stavesmo578751 = new VF.StaveConnector(stavesmo57875, stavesmo62944).setType(3);
leftsmo55345stavesmo578751.setContext(context).draw();
const fmtsmo5790243 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo57902v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57902v0ar = [];
const smo57876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo57876.setAttribute('id', 'smo57876');
smo57902v0ar.push(smo57876);
const smo57877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo57877.setAttribute('id', 'smo57877');
smo57902v0ar.push(smo57877);
const smo57878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo57878.setAttribute('id', 'smo57878');
const smo578780acc = new VF.Accidental('#');
smo57878.addModifier(smo578780acc, 0);
smo57902v0ar.push(smo57878);
const smo57879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo57879.setAttribute('id', 'smo57879');
smo57902v0ar.push(smo57879);
smo57902v0.addTickables(smo57902v0ar)
fmtsmo5790243.joinVoices([smo57902v0]);
const smo57902v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57902v1ar = [];
const smo57880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57880.setAttribute('id', 'smo57880');
smo57880.setStyle({ fillStyle: "#115511" });
smo57902v1ar.push(smo57880);
const smo57881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57881.setAttribute('id', 'smo57881');
smo57881.setStyle({ fillStyle: "#115511" });
smo57902v1ar.push(smo57881);
const smo57882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57882.setAttribute('id', 'smo57882');
smo57882.setStyle({ fillStyle: "#115511" });
smo57902v1ar.push(smo57882);
const smo57883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57883.setAttribute('id', 'smo57883');
smo57883.setStyle({ fillStyle: "#115511" });
smo57902v1ar.push(smo57883);
const smo57884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo57884.setAttribute('id', 'smo57884');
smo57884.setStyle({ fillStyle: "#115511" });
smo57884.addModifier(new VF.Dot(), 0);
smo57902v1ar.push(smo57884);
const smo57885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo57885.setAttribute('id', 'smo57885');
smo57885.setStyle({ fillStyle: "#115511" });
smo57902v1ar.push(smo57885);
const smo57886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo57886.setAttribute('id', 'smo57886');
smo57886.setStyle({ fillStyle: "#115511" });
smo57902v1ar.push(smo57886);
const smo57887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57887.setAttribute('id', 'smo57887');
smo57887.setStyle({ fillStyle: "#115511" });
smo57902v1ar.push(smo57887);
const smo57888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo57888.setAttribute('id', 'smo57888');
smo57888.setStyle({ fillStyle: "#115511" });
smo57902v1ar.push(smo57888);
smo57902v1.addTickables(smo57902v1ar)
fmtsmo5790243.joinVoices([smo57902v1]);
const fmtsmo6297943 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo62979v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62979v0ar = [];
const smo62945 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62945.setAttribute('id', 'smo62945');
smo62979v0ar.push(smo62945);
const smo62946 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62946.setAttribute('id', 'smo62946');
smo62979v0ar.push(smo62946);
const smo62947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62947.setAttribute('id', 'smo62947');
smo62979v0ar.push(smo62947);
const smo62948 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62948.setAttribute('id', 'smo62948');
smo62979v0ar.push(smo62948);
const smo62949 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62949.setAttribute('id', 'smo62949');
smo62979v0ar.push(smo62949);
const smo62950 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62950.setAttribute('id', 'smo62950');
smo62979v0ar.push(smo62950);
const smo62951 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62951.setAttribute('id', 'smo62951');
smo62979v0ar.push(smo62951);
const smo62952 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62952.setAttribute('id', 'smo62952');
smo62979v0ar.push(smo62952);
const smo62953 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62953.setAttribute('id', 'smo62953');
smo62979v0ar.push(smo62953);
const smo62954 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62954.setAttribute('id', 'smo62954');
smo62979v0ar.push(smo62954);
smo62979v0.addTickables(smo62979v0ar)
fmtsmo6297943.joinVoices([smo62979v0]);
const smo62979v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62979v1ar = [];
const smo62955 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62955.setAttribute('id', 'smo62955');
smo62955.setStyle({ fillStyle: "#115511" });
smo62979v1ar.push(smo62955);
const smo62956 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62956.setAttribute('id', 'smo62956');
smo62956.setStyle({ fillStyle: "#115511" });
smo62979v1ar.push(smo62956);
const smo62957 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62957.setAttribute('id', 'smo62957');
smo62957.setStyle({ fillStyle: "#115511" });
smo62979v1ar.push(smo62957);
const smo62958 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62958.setAttribute('id', 'smo62958');
smo62958.setStyle({ fillStyle: "#115511" });
smo62979v1ar.push(smo62958);
const smo62959 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62959.setAttribute('id', 'smo62959');
smo62959.setStyle({ fillStyle: "#115511" });
smo62979v1ar.push(smo62959);
const smo62960 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62960.setAttribute('id', 'smo62960');
smo62960.setStyle({ fillStyle: "#115511" });
smo62979v1ar.push(smo62960);
const smo62961 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62961.setAttribute('id', 'smo62961');
smo62961.setStyle({ fillStyle: "#115511" });
smo62979v1ar.push(smo62961);
const smo62962 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62962.setAttribute('id', 'smo62962');
smo62962.setStyle({ fillStyle: "#115511" });
smo62979v1ar.push(smo62962);
const smo62963 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62963.setAttribute('id', 'smo62963');
smo62963.setStyle({ fillStyle: "#115511" });
smo62979v1ar.push(smo62963);
const smo62964 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo62964.setAttribute('id', 'smo62964');
smo62964.setStyle({ fillStyle: "#115511" });
smo62979v1ar.push(smo62964);
const smo62965 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo62965.setAttribute('id', 'smo62965');
smo62965.setStyle({ fillStyle: "#115511" });
smo62979v1ar.push(smo62965);
smo62979v1.addTickables(smo62979v1ar)
fmtsmo6297943.joinVoices([smo62979v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66404 = smo57877.getStemDirection();
smo57877.setStemDirection(dirsmo66404);
smo57878.setStemDirection(dirsmo66404);
const smo66404 = new VF.Beam([smo57877,smo57878]);
const dirsmo66405 = smo57881.getStemDirection();
smo57881.setStemDirection(dirsmo66405);
smo57882.setStemDirection(dirsmo66405);
smo57883.setStemDirection(dirsmo66405);
const smo66405 = new VF.Beam([smo57881,smo57882,smo57883]);
const dirsmo66406 = smo57884.getStemDirection();
smo57884.setStemDirection(dirsmo66406);
smo57885.setStemDirection(dirsmo66406);
smo57886.setStemDirection(dirsmo66406);
const smo66406 = new VF.Beam([smo57884,smo57885,smo57886]);
const dirsmo66407 = smo57887.getStemDirection();
smo57887.setStemDirection(dirsmo66407);
smo57888.setStemDirection(dirsmo66407);
const smo66407 = new VF.Beam([smo57887,smo57888]);
const dirsmo66410 = smo62947.getStemDirection();
smo62947.setStemDirection(dirsmo66410);
smo62948.setStemDirection(dirsmo66410);
smo62949.setStemDirection(dirsmo66410);
smo62950.setStemDirection(dirsmo66410);
const smo66410 = new VF.Beam([smo62947,smo62948,smo62949,smo62950]);
const dirsmo66411 = smo62951.getStemDirection();
smo62951.setStemDirection(dirsmo66411);
smo62952.setStemDirection(dirsmo66411);
smo62953.setStemDirection(dirsmo66411);
smo62954.setStemDirection(dirsmo66411);
const smo66411 = new VF.Beam([smo62951,smo62952,smo62953,smo62954]);
const dirsmo66412 = smo62955.getStemDirection();
smo62955.setStemDirection(dirsmo66412);
smo62956.setStemDirection(dirsmo66412);
smo62957.setStemDirection(dirsmo66412);
smo62958.setStemDirection(dirsmo66412);
const smo66412 = new VF.Beam([smo62955,smo62956,smo62957,smo62958]);
const dirsmo66413 = smo62959.getStemDirection();
smo62959.setStemDirection(dirsmo66413);
smo62960.setStemDirection(dirsmo66413);
smo62961.setStemDirection(dirsmo66413);
smo62962.setStemDirection(dirsmo66413);
const smo66413 = new VF.Beam([smo62959,smo62960,smo62961,smo62962]);
 
// formatting measures in staff group smo55345
fmtsmo5790243.format([smo57902v0,smo57902v1,smo62979v0,smo62979v1], 404);
const stavesmo57902 = new VF.Stave(510, 2020, 418);
stavesmo57902.setAttribute('id', 'stavesmo57902');
stavesmo57902.setBegBarType(VF.Barline.type.NONE);
stavesmo57902.setContext(context);
stavesmo57902.draw();
smo57902v0.draw(context, stavesmo57902);
smo57902v1.draw(context, stavesmo57902);
smo66404.setContext(context);
smo66404.draw();
smo66405.setContext(context);
smo66405.draw();
smo66406.setContext(context);
smo66406.draw();
smo66407.setContext(context);
smo66407.draw();
const stavesmo62979 = new VF.Stave(510, 2184, 418);
stavesmo62979.setAttribute('id', 'stavesmo62979');
stavesmo62979.setBegBarType(VF.Barline.type.NONE);
stavesmo62979.setContext(context);
stavesmo62979.draw();
smo62979v0.draw(context, stavesmo62979);
smo62979v1.draw(context, stavesmo62979);
smo66410.setContext(context);
smo66410.draw();
smo66411.setContext(context);
smo66411.draw();
smo66412.setContext(context);
smo66412.draw();
smo66413.setContext(context);
smo66413.draw();
const fmtsmo5793644 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo57936v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57936v0ar = [];
const smo57903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo57903.setAttribute('id', 'smo57903');
smo57936v0ar.push(smo57903);
const smo57904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo57904.setAttribute('id', 'smo57904');
const smo579040acc = new VF.Accidental('#');
smo57904.addModifier(smo579040acc, 0);
smo57936v0ar.push(smo57904);
const smo57905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo57905.setAttribute('id', 'smo57905');
smo57936v0ar.push(smo57905);
const smo57906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo57906.setAttribute('id', 'smo57906');
const smo579060acc = new VF.Accidental('n');
smo57906.addModifier(smo579060acc, 0);
smo57936v0ar.push(smo57906);
const smo57907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo57907.setAttribute('id', 'smo57907');
smo57936v0ar.push(smo57907);
const smo57908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo57908.setAttribute('id', 'smo57908');
smo57936v0ar.push(smo57908);
const smo57909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo57909.setAttribute('id', 'smo57909');
smo57936v0ar.push(smo57909);
const smo57910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo57910.setAttribute('id', 'smo57910');
smo57936v0ar.push(smo57910);
const smo57911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo57911.setAttribute('id', 'smo57911');
smo57936v0ar.push(smo57911);
const smo57912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57912.setAttribute('id', 'smo57912');
smo57936v0ar.push(smo57912);
smo57936v0.addTickables(smo57936v0ar)
fmtsmo5793644.joinVoices([smo57936v0]);
const smo57936v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57936v1ar = [];
const smo57913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57913.setAttribute('id', 'smo57913');
smo57913.setStyle({ fillStyle: "#115511" });
smo57936v1ar.push(smo57913);
const smo57914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo57914.setAttribute('id', 'smo57914');
smo57914.setStyle({ fillStyle: "#115511" });
smo57936v1ar.push(smo57914);
const smo57915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo57915.setAttribute('id', 'smo57915');
smo57915.setStyle({ fillStyle: "#115511" });
smo57936v1ar.push(smo57915);
const smo57916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo57916.setAttribute('id', 'smo57916');
smo57916.setStyle({ fillStyle: "#115511" });
smo57936v1ar.push(smo57916);
const smo57917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo57917.setAttribute('id', 'smo57917');
smo57917.setStyle({ fillStyle: "#115511" });
smo57936v1ar.push(smo57917);
const smo57918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo57918.setAttribute('id', 'smo57918');
smo57918.setStyle({ fillStyle: "#115511" });
smo57936v1ar.push(smo57918);
const smo57919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57919.setAttribute('id', 'smo57919');
smo57919.setStyle({ fillStyle: "#115511" });
smo57936v1ar.push(smo57919);
const smo57920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57920.setAttribute('id', 'smo57920');
smo57920.setStyle({ fillStyle: "#115511" });
smo57936v1ar.push(smo57920);
const smo57921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57921.setAttribute('id', 'smo57921');
smo57921.setStyle({ fillStyle: "#115511" });
smo57936v1ar.push(smo57921);
const smo57922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo57922.setAttribute('id', 'smo57922');
smo57922.setStyle({ fillStyle: "#115511" });
smo57936v1ar.push(smo57922);
smo57936v1.addTickables(smo57936v1ar)
fmtsmo5793644.joinVoices([smo57936v1]);
const fmtsmo6300844 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo63008v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63008v0ar = [];
const smo62980 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62980.setAttribute('id', 'smo62980');
smo63008v0ar.push(smo62980);
const smo62981 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62981.setAttribute('id', 'smo62981');
smo63008v0ar.push(smo62981);
const smo62982 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62982.setAttribute('id', 'smo62982');
smo63008v0ar.push(smo62982);
const smo62983 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62983.setAttribute('id', 'smo62983');
smo63008v0ar.push(smo62983);
const smo62984 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62984.setAttribute('id', 'smo62984');
smo63008v0ar.push(smo62984);
const smo62985 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62985.setAttribute('id', 'smo62985');
smo63008v0ar.push(smo62985);
const smo62986 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62986.setAttribute('id', 'smo62986');
smo63008v0ar.push(smo62986);
const smo62987 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62987.setAttribute('id', 'smo62987');
smo63008v0ar.push(smo62987);
const smo62988 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62988.setAttribute('id', 'smo62988');
smo63008v0ar.push(smo62988);
const smo62989 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["gn/3/r"]}'))
smo62989.setAttribute('id', 'smo62989');
smo63008v0ar.push(smo62989);
smo63008v0.addTickables(smo63008v0ar)
fmtsmo6300844.joinVoices([smo63008v0]);
const smo63008v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63008v1ar = [];
const smo62990 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo62990.setAttribute('id', 'smo62990');
smo62990.setStyle({ fillStyle: "#115511" });
smo63008v1ar.push(smo62990);
const smo62991 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo62991.setAttribute('id', 'smo62991');
smo62991.setStyle({ fillStyle: "#115511" });
smo63008v1ar.push(smo62991);
const smo62992 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo62992.setAttribute('id', 'smo62992');
smo62992.setStyle({ fillStyle: "#115511" });
smo63008v1ar.push(smo62992);
const smo62993 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo62993.setAttribute('id', 'smo62993');
smo62993.setStyle({ fillStyle: "#115511" });
smo63008v1ar.push(smo62993);
const smo62994 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo62994.setAttribute('id', 'smo62994');
smo62994.setStyle({ fillStyle: "#115511" });
smo63008v1ar.push(smo62994);
smo63008v1.addTickables(smo63008v1ar)
fmtsmo6300844.joinVoices([smo63008v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66416 = smo57905.getStemDirection();
smo57905.setStemDirection(dirsmo66416);
smo57906.setStemDirection(dirsmo66416);
smo57907.setStemDirection(dirsmo66416);
smo57908.setStemDirection(dirsmo66416);
const smo66416 = new VF.Beam([smo57905,smo57906,smo57907,smo57908]);
const dirsmo66417 = smo57909.getStemDirection();
smo57909.setStemDirection(dirsmo66417);
smo57910.setStemDirection(dirsmo66417);
smo57911.setStemDirection(dirsmo66417);
smo57912.setStemDirection(dirsmo66417);
const smo66417 = new VF.Beam([smo57909,smo57910,smo57911,smo57912]);
const dirsmo66418 = smo57913.getStemDirection();
smo57913.setStemDirection(dirsmo66418);
smo57914.setStemDirection(dirsmo66418);
const smo66418 = new VF.Beam([smo57913,smo57914]);
const dirsmo66419 = smo57915.getStemDirection();
smo57915.setStemDirection(dirsmo66419);
smo57916.setStemDirection(dirsmo66419);
smo57917.setStemDirection(dirsmo66419);
smo57918.setStemDirection(dirsmo66419);
const smo66419 = new VF.Beam([smo57915,smo57916,smo57917,smo57918]);
const dirsmo66422 = smo62980.getStemDirection();
smo62980.setStemDirection(dirsmo66422);
smo62981.setStemDirection(dirsmo66422);
smo62982.setStemDirection(dirsmo66422);
smo62983.setStemDirection(dirsmo66422);
const smo66422 = new VF.Beam([smo62980,smo62981,smo62982,smo62983]);
const dirsmo66423 = smo62984.getStemDirection();
smo62984.setStemDirection(dirsmo66423);
smo62985.setStemDirection(dirsmo66423);
smo62986.setStemDirection(dirsmo66423);
smo62987.setStemDirection(dirsmo66423);
const smo66423 = new VF.Beam([smo62984,smo62985,smo62986,smo62987]);
const dirsmo66424 = smo62992.getStemDirection();
smo62992.setStemDirection(dirsmo66424);
smo62993.setStemDirection(dirsmo66424);
smo62994.setStemDirection(dirsmo66424);
const smo66424 = new VF.Beam([smo62992,smo62993,smo62994]);
 
// formatting measures in staff group smo55345
fmtsmo5793644.format([smo57936v0,smo57936v1,smo63008v0,smo63008v1], 365);
const stavesmo57936 = new VF.Stave(928, 2020, 379);
stavesmo57936.setAttribute('id', 'stavesmo57936');
stavesmo57936.setBegBarType(VF.Barline.type.NONE);
stavesmo57936.setContext(context);
stavesmo57936.draw();
smo57936v0.draw(context, stavesmo57936);
smo57936v1.draw(context, stavesmo57936);
smo66416.setContext(context);
smo66416.draw();
smo66417.setContext(context);
smo66417.draw();
smo66418.setContext(context);
smo66418.draw();
smo66419.setContext(context);
smo66419.draw();
const stavesmo63008 = new VF.Stave(928, 2184, 379);
stavesmo63008.setAttribute('id', 'stavesmo63008');
stavesmo63008.setBegBarType(VF.Barline.type.NONE);
stavesmo63008.setContext(context);
stavesmo63008.draw();
smo63008v0.draw(context, stavesmo63008);
smo63008v1.draw(context, stavesmo63008);
smo66422.setContext(context);
smo66422.draw();
smo66423.setContext(context);
smo66423.draw();
smo66424.setContext(context);
smo66424.draw();
const fmtsmo5797045 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo57970v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57970v0ar = [];
const smo57937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57937.setAttribute('id', 'smo57937');
smo57970v0ar.push(smo57937);
const smo57938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo57938.setAttribute('id', 'smo57938');
smo57970v0ar.push(smo57938);
const smo57939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57939.setAttribute('id', 'smo57939');
smo57970v0ar.push(smo57939);
const smo57940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57940.setAttribute('id', 'smo57940');
smo57970v0ar.push(smo57940);
const smo57941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57941.setAttribute('id', 'smo57941');
smo57941.addModifier(new VF.Dot(), 0);
smo57970v0ar.push(smo57941);
const smo57942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/5/r"]}'))
smo57942.setAttribute('id', 'smo57942');
smo57970v0ar.push(smo57942);
const smo57943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo57943.setAttribute('id', 'smo57943');
smo57970v0ar.push(smo57943);
const smo57944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57944.setAttribute('id', 'smo57944');
smo57970v0ar.push(smo57944);
const smo57945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57945.setAttribute('id', 'smo57945');
smo57970v0ar.push(smo57945);
const smo57946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo57946.setAttribute('id', 'smo57946');
const smo579460acc = new VF.Accidental('#');
smo57946.addModifier(smo579460acc, 0);
smo57970v0ar.push(smo57946);
const smo57947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo57947.setAttribute('id', 'smo57947');
smo57970v0ar.push(smo57947);
smo57970v0.addTickables(smo57970v0ar)
fmtsmo5797045.joinVoices([smo57970v0]);
const smo57970v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57970v1ar = [];
const smo57948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57948.setAttribute('id', 'smo57948');
smo57948.setStyle({ fillStyle: "#115511" });
smo57970v1ar.push(smo57948);
const smo57949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo57949.setAttribute('id', 'smo57949');
smo57949.setStyle({ fillStyle: "#115511" });
const smo579490acc = new VF.Accidental('#');
smo57949.addModifier(smo579490acc, 0);
smo57970v1ar.push(smo57949);
const smo57950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57950.setAttribute('id', 'smo57950');
smo57950.setStyle({ fillStyle: "#115511" });
smo57950.addModifier(new VF.Dot(), 0);
smo57970v1ar.push(smo57950);
const smo57951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57951.setAttribute('id', 'smo57951');
smo57951.setStyle({ fillStyle: "#115511" });
smo57970v1ar.push(smo57951);
const smo57952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo57952.setAttribute('id', 'smo57952');
smo57952.setStyle({ fillStyle: "#115511" });
smo57970v1ar.push(smo57952);
const smo57953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo57953.setAttribute('id', 'smo57953');
smo57953.setStyle({ fillStyle: "#115511" });
smo57970v1ar.push(smo57953);
const smo57954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo57954.setAttribute('id', 'smo57954');
smo57954.setStyle({ fillStyle: "#115511" });
smo57970v1ar.push(smo57954);
const smo57955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57955.setAttribute('id', 'smo57955');
smo57955.setStyle({ fillStyle: "#115511" });
smo57970v1ar.push(smo57955);
const smo57956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo57956.setAttribute('id', 'smo57956');
smo57956.setStyle({ fillStyle: "#115511" });
smo57970v1ar.push(smo57956);
smo57970v1.addTickables(smo57970v1ar)
fmtsmo5797045.joinVoices([smo57970v1]);
const fmtsmo6303445 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo63034v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63034v0ar = [];
const smo63009 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo63009.setAttribute('id', 'smo63009');
smo63009.setStyle({ fillStyle: '#aaaaaa7f' });
smo63034v0ar.push(smo63009);
smo63034v0.addTickables(smo63034v0ar)
fmtsmo6303445.joinVoices([smo63034v0]);
const smo63034v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63034v1ar = [];
const smo63010 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63010.setAttribute('id', 'smo63010');
smo63010.setStyle({ fillStyle: "#115511" });
smo63010.addModifier(new VF.Dot(), 0);
smo63034v1ar.push(smo63010);
const smo63011 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63011.setAttribute('id', 'smo63011');
smo63011.setStyle({ fillStyle: "#115511" });
smo63034v1ar.push(smo63011);
const smo63012 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63012.setAttribute('id', 'smo63012');
smo63012.setStyle({ fillStyle: "#115511" });
smo63034v1ar.push(smo63012);
const smo63013 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo63013.setAttribute('id', 'smo63013');
smo63013.setStyle({ fillStyle: "#115511" });
smo63034v1ar.push(smo63013);
const smo63014 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63014.setAttribute('id', 'smo63014');
smo63014.setStyle({ fillStyle: "#115511" });
smo63034v1ar.push(smo63014);
const smo63015 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo63015.setAttribute('id', 'smo63015');
smo63015.setStyle({ fillStyle: "#115511" });
smo63034v1ar.push(smo63015);
const smo63016 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63016.setAttribute('id', 'smo63016');
smo63016.setStyle({ fillStyle: "#115511" });
smo63034v1ar.push(smo63016);
const smo63017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63017.setAttribute('id', 'smo63017');
smo63017.setStyle({ fillStyle: "#115511" });
smo63034v1ar.push(smo63017);
const smo63018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo63018.setAttribute('id', 'smo63018');
smo63018.setStyle({ fillStyle: "#115511" });
smo63034v1ar.push(smo63018);
const smo63019 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo63019.setAttribute('id', 'smo63019');
smo63019.setStyle({ fillStyle: "#115511" });
smo63034v1ar.push(smo63019);
const smo63020 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo63020.setAttribute('id', 'smo63020');
smo63020.setStyle({ fillStyle: "#115511" });
smo63034v1ar.push(smo63020);
smo63034v1.addTickables(smo63034v1ar)
fmtsmo6303445.joinVoices([smo63034v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66427 = smo57937.getStemDirection();
smo57937.setStemDirection(dirsmo66427);
smo57938.setStemDirection(dirsmo66427);
smo57939.setStemDirection(dirsmo66427);
smo57940.setStemDirection(dirsmo66427);
const smo66427 = new VF.Beam([smo57937,smo57938,smo57939,smo57940]);
const dirsmo66428 = smo57943.getStemDirection();
smo57943.setStemDirection(dirsmo66428);
smo57944.setStemDirection(dirsmo66428);
smo57945.setStemDirection(dirsmo66428);
const smo66428 = new VF.Beam([smo57943,smo57944,smo57945]);
const dirsmo66429 = smo57946.getStemDirection();
smo57946.setStemDirection(dirsmo66429);
smo57947.setStemDirection(dirsmo66429);
const smo66429 = new VF.Beam([smo57946,smo57947]);
const dirsmo66430 = smo57948.getStemDirection();
smo57948.setStemDirection(dirsmo66430);
smo57949.setStemDirection(dirsmo66430);
const smo66430 = new VF.Beam([smo57948,smo57949]);
const dirsmo66431 = smo57950.getStemDirection();
smo57950.setStemDirection(dirsmo66431);
smo57951.setStemDirection(dirsmo66431);
smo57952.setStemDirection(dirsmo66431);
const smo66431 = new VF.Beam([smo57950,smo57951,smo57952]);
const dirsmo66432 = smo57953.getStemDirection();
smo57953.setStemDirection(dirsmo66432);
smo57954.setStemDirection(dirsmo66432);
smo57955.setStemDirection(dirsmo66432);
smo57956.setStemDirection(dirsmo66432);
const smo66432 = new VF.Beam([smo57953,smo57954,smo57955,smo57956]);
const dirsmo66435 = smo63010.getStemDirection();
smo63010.setStemDirection(dirsmo66435);
smo63011.setStemDirection(dirsmo66435);
smo63012.setStemDirection(dirsmo66435);
const smo66435 = new VF.Beam([smo63010,smo63011,smo63012]);
const dirsmo66436 = smo63013.getStemDirection();
smo63013.setStemDirection(dirsmo66436);
smo63014.setStemDirection(dirsmo66436);
const smo66436 = new VF.Beam([smo63013,smo63014]);
const dirsmo66437 = smo63015.getStemDirection();
smo63015.setStemDirection(dirsmo66437);
smo63016.setStemDirection(dirsmo66437);
const smo66437 = new VF.Beam([smo63015,smo63016]);
const dirsmo66438 = smo63017.getStemDirection();
smo63017.setStemDirection(dirsmo66438);
smo63018.setStemDirection(dirsmo66438);
smo63019.setStemDirection(dirsmo66438);
smo63020.setStemDirection(dirsmo66438);
const smo66438 = new VF.Beam([smo63017,smo63018,smo63019,smo63020]);
 
// formatting measures in staff group smo55345
fmtsmo5797045.format([smo57970v0,smo57970v1,smo63034v0,smo63034v1], 486);
const stavesmo57970 = new VF.Stave(1307, 2020, 500);
stavesmo57970.setAttribute('id', 'stavesmo57970');
stavesmo57970.setBegBarType(VF.Barline.type.NONE);
stavesmo57970.setContext(context);
stavesmo57970.draw();
smo57970v0.draw(context, stavesmo57970);
smo57970v1.draw(context, stavesmo57970);
smo66427.setContext(context);
smo66427.draw();
smo66428.setContext(context);
smo66428.draw();
smo66429.setContext(context);
smo66429.draw();
smo66430.setContext(context);
smo66430.draw();
smo66431.setContext(context);
smo66431.draw();
smo66432.setContext(context);
smo66432.draw();
const stavesmo63034 = new VF.Stave(1307, 2184, 500);
stavesmo63034.setAttribute('id', 'stavesmo63034');
stavesmo63034.setBegBarType(VF.Barline.type.NONE);
stavesmo63034.setContext(context);
stavesmo63034.draw();
smo63034v0.draw(context, stavesmo63034);
smo63034v1.draw(context, stavesmo63034);
smo66435.setContext(context);
smo66435.draw();
smo66436.setContext(context);
smo66436.draw();
smo66437.setContext(context);
smo66437.draw();
smo66438.setContext(context);
smo66438.draw();
const rightsmo55345stavesmo579701 = new VF.StaveConnector(stavesmo57970, stavesmo63034).setType(0);
rightsmo55345stavesmo579701.setContext(context).draw();
// modifier from 0-36-1-1 to 0-36-1-2
const smo68502 = new VF.StaveTie({ first_note: smo57665, last_note: smo57666, 
          firstNote: smo57665, lastNote: smo57666, first_indices: [0], last_indices: [0]});
smo68502.setContext(context).draw();
// modifier from 0-37-0-6 to 0-37-0-7
const smo68503 = new VF.StaveTie({ first_note: smo57698, last_note: smo57699, 
          firstNote: smo57698, lastNote: smo57699, first_indices: [0], last_indices: [0]});
smo68503.setContext(context).draw();
// modifier from 0-37-1-2 to 0-37-1-3
const smo68504 = new VF.StaveTie({ first_note: smo57705, last_note: smo57706, 
          firstNote: smo57705, lastNote: smo57706, first_indices: [0], last_indices: [0]});
smo68504.setContext(context).draw();
// modifier from 0-40-1-8 to 0-41-1-0
const smo68505 = new VF.StaveTie({ first_note: smo57809, last_note: smo57833, 
          firstNote: smo57809, lastNote: smo57833, first_indices: [0], last_indices: [0]});
smo68505.setContext(context).draw();
// modifier from 0-42-0-1 to 0-42-0-2
const smo68506 = new VF.StaveTie({ first_note: smo57851, last_note: smo57852, 
          firstNote: smo57851, lastNote: smo57852, first_indices: [0], last_indices: [0]});
smo68506.setContext(context).draw();
// modifier from 0-42-0-7 to 0-42-0-8
const smo68507 = new VF.StaveTie({ first_note: smo57857, last_note: smo57858, 
          firstNote: smo57857, lastNote: smo57858, first_indices: [0], last_indices: [0]});
smo68507.setContext(context).draw();
// modifier from 0-43-0-3 to 0-44-0-0
const smo68508 = new VF.StaveTie({ first_note: smo57879, last_note: smo57903, 
          firstNote: smo57879, lastNote: smo57903, first_indices: [0], last_indices: [0]});
smo68508.setContext(context).draw();
// modifier from 0-44-1-1 to 0-44-1-2
const smo68509 = new VF.StaveTie({ first_note: smo57914, last_note: smo57915, 
          firstNote: smo57914, lastNote: smo57915, first_indices: [0], last_indices: [0]});
smo68509.setContext(context).draw();
// modifier from 0-38-1-7 to 0-39-1-0
const smo68510 = new VF.StaveTie({ first_note: smo57746, last_note: smo57773, 
          firstNote: smo57746, lastNote: smo57773, first_indices: [0], last_indices: [0]});
smo68510.setContext(context).draw();
// modifier from 0-39-1-3 to 0-39-1-4
const smo68511 = new VF.StaveTie({ first_note: smo57776, last_note: smo57777, 
          firstNote: smo57776, lastNote: smo57777, first_indices: [0], last_indices: [0]});
smo68511.setContext(context).draw();
// modifier from 1-21-0-1 to 1-21-0-2
const smo68512 = new VF.StaveTie({ first_note: smo62452, last_note: smo62453, 
          firstNote: smo62452, lastNote: smo62453, first_indices: [0], last_indices: [0]});
smo68512.setContext(context).draw();
// modifier from 1-21-0-4 to 1-21-0-5
const smo68513 = new VF.StaveTie({ first_note: smo62455, last_note: smo62456, 
          firstNote: smo62455, lastNote: smo62456, first_indices: [0], last_indices: [0]});
smo68513.setContext(context).draw();
// modifier from 1-22-0-1 to 1-22-0-2
const smo68514 = new VF.StaveTie({ first_note: smo62474, last_note: smo62475, 
          firstNote: smo62474, lastNote: smo62475, first_indices: [0], last_indices: [0]});
smo68514.setContext(context).draw();
// modifier from 1-22-0-4 to 1-22-0-5
const smo68515 = new VF.StaveTie({ first_note: smo62477, last_note: smo62478, 
          firstNote: smo62477, lastNote: smo62478, first_indices: [0], last_indices: [0]});
smo68515.setContext(context).draw();
// modifier from 1-23-0-1 to 1-23-0-2
const smo68516 = new VF.StaveTie({ first_note: smo62496, last_note: smo62497, 
          firstNote: smo62496, lastNote: smo62497, first_indices: [0], last_indices: [0]});
smo68516.setContext(context).draw();
// modifier from 1-23-0-4 to 1-23-0-5
const smo68517 = new VF.StaveTie({ first_note: smo62499, last_note: smo62500, 
          firstNote: smo62499, lastNote: smo62500, first_indices: [0], last_indices: [0]});
smo68517.setContext(context).draw();
// modifier from 1-24-0-1 to 1-24-0-2
const smo68518 = new VF.StaveTie({ first_note: smo62518, last_note: smo62519, 
          firstNote: smo62518, lastNote: smo62519, first_indices: [0], last_indices: [0]});
smo68518.setContext(context).draw();
// modifier from 1-24-0-4 to 1-24-0-5
const smo68519 = new VF.StaveTie({ first_note: smo62521, last_note: smo62522, 
          firstNote: smo62521, lastNote: smo62522, first_indices: [0], last_indices: [0]});
smo68519.setContext(context).draw();
// modifier from 1-25-0-1 to 1-25-0-2
const smo68520 = new VF.StaveTie({ first_note: smo62540, last_note: smo62541, 
          firstNote: smo62540, lastNote: smo62541, first_indices: [0], last_indices: [0]});
smo68520.setContext(context).draw();
// modifier from 1-25-0-4 to 1-25-0-5
const smo68521 = new VF.StaveTie({ first_note: smo62543, last_note: smo62544, 
          firstNote: smo62543, lastNote: smo62544, first_indices: [0], last_indices: [0]});
smo68521.setContext(context).draw();
// modifier from 1-26-0-1 to 1-26-0-2
const smo68522 = new VF.StaveTie({ first_note: smo62562, last_note: smo62563, 
          firstNote: smo62562, lastNote: smo62563, first_indices: [0], last_indices: [0]});
smo68522.setContext(context).draw();
// modifier from 1-26-0-4 to 1-26-0-5
const smo68523 = new VF.StaveTie({ first_note: smo62565, last_note: smo62566, 
          firstNote: smo62565, lastNote: smo62566, first_indices: [0], last_indices: [0]});
smo68523.setContext(context).draw();
// modifier from 1-27-0-1 to 1-27-0-2
const smo68524 = new VF.StaveTie({ first_note: smo62584, last_note: smo62585, 
          firstNote: smo62584, lastNote: smo62585, first_indices: [0], last_indices: [0]});
smo68524.setContext(context).draw();
// modifier from 1-27-0-4 to 1-27-0-5
const smo68525 = new VF.StaveTie({ first_note: smo62587, last_note: smo62588, 
          firstNote: smo62587, lastNote: smo62588, first_indices: [0], last_indices: [0]});
smo68525.setContext(context).draw();
// modifier from 1-28-0-1 to 1-28-0-2
const smo68526 = new VF.StaveTie({ first_note: smo62606, last_note: smo62607, 
          firstNote: smo62606, lastNote: smo62607, first_indices: [0], last_indices: [0]});
smo68526.setContext(context).draw();
// modifier from 1-28-0-4 to 1-28-0-5
const smo68527 = new VF.StaveTie({ first_note: smo62609, last_note: smo62610, 
          firstNote: smo62609, lastNote: smo62610, first_indices: [0], last_indices: [0]});
smo68527.setContext(context).draw();
// modifier from 1-29-0-1 to 1-29-0-2
const smo68528 = new VF.StaveTie({ first_note: smo62628, last_note: smo62629, 
          firstNote: smo62628, lastNote: smo62629, first_indices: [0], last_indices: [0]});
smo68528.setContext(context).draw();
// modifier from 1-29-0-4 to 1-29-0-5
const smo68529 = new VF.StaveTie({ first_note: smo62631, last_note: smo62632, 
          firstNote: smo62631, lastNote: smo62632, first_indices: [0], last_indices: [0]});
smo68529.setContext(context).draw();
// modifier from 1-30-0-1 to 1-30-0-2
const smo68530 = new VF.StaveTie({ first_note: smo62650, last_note: smo62651, 
          firstNote: smo62650, lastNote: smo62651, first_indices: [0], last_indices: [0]});
smo68530.setContext(context).draw();
// modifier from 1-30-0-4 to 1-30-0-5
const smo68531 = new VF.StaveTie({ first_note: smo62653, last_note: smo62654, 
          firstNote: smo62653, lastNote: smo62654, first_indices: [0], last_indices: [0]});
smo68531.setContext(context).draw();
// modifier from 1-31-0-1 to 1-31-0-2
const smo68532 = new VF.StaveTie({ first_note: smo62672, last_note: smo62673, 
          firstNote: smo62672, lastNote: smo62673, first_indices: [0], last_indices: [0]});
smo68532.setContext(context).draw();
// modifier from 1-31-0-4 to 1-31-0-5
const smo68533 = new VF.StaveTie({ first_note: smo62675, last_note: smo62676, 
          firstNote: smo62675, lastNote: smo62676, first_indices: [0], last_indices: [0]});
smo68533.setContext(context).draw();
// modifier from 1-33-0-1 to 1-33-0-2
const smo68534 = new VF.StaveTie({ first_note: smo62714, last_note: smo62715, 
          firstNote: smo62714, lastNote: smo62715, first_indices: [0], last_indices: [0]});
smo68534.setContext(context).draw();
// modifier from 1-33-0-2 to 1-33-0-3
const smo68535 = new VF.StaveTie({ first_note: smo62715, last_note: smo62716, 
          firstNote: smo62715, lastNote: smo62716, first_indices: [0], last_indices: [0]});
smo68535.setContext(context).draw();
// modifier from 1-33-1-0 to 1-33-1-1
const smo68536 = new VF.StaveTie({ first_note: smo62717, last_note: smo62718, 
          firstNote: smo62717, lastNote: smo62718, first_indices: [0], last_indices: [0]});
smo68536.setContext(context).draw();
// modifier from 1-32-0-1 to 1-32-0-2
const smo68537 = new VF.StaveTie({ first_note: smo62694, last_note: smo62695, 
          firstNote: smo62694, lastNote: smo62695, first_indices: [0], last_indices: [0]});
smo68537.setContext(context).draw();
}
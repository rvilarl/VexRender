// @@ Solovey p 1/2 ((Op. 1)) by Folks
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1483.6363636363635');
svg.setAttributeNS('', 'height', '1920');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
//
// create the musical objects
VF.setMusicFont("Bravura","Gonville","Custom");
const fmtsmo2362160 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo236216v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236216v0ar = [];
const smo236200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236200.setAttribute('id', 'smo236200');
smo236216v0ar.push(smo236200);
smo236216v0.addTickables(smo236216v0ar)
fmtsmo2362160.joinVoices([smo236216v0]);
const fmtsmo2372380 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo237238v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237238v0ar = [];
const smo237221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo237221.setAttribute('id', 'smo237221');
smo237238v0ar.push(smo237221);
const smo237222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237222.setAttribute('id', 'smo237222');
smo237238v0ar.push(smo237222);
smo237238v0.addTickables(smo237238v0ar)
fmtsmo2372380.joinVoices([smo237238v0]);
const fmtsmo2382360 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo238236v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238236v0ar = [];
const smo238219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238219.setAttribute('id', 'smo238219');
smo238236v0ar.push(smo238219);
const smo238220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo238220.setAttribute('id', 'smo238220');
smo238236v0ar.push(smo238220);
smo238236v0.addTickables(smo238236v0ar)
fmtsmo2382360.joinVoices([smo238236v0]);
const fmtsmo2391900 = new VF.Formatter();
//
// voices and notes for stave 3 0
const smo239190v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239190v0ar = [];
const smo239171 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239171.setAttribute('id', 'smo239171');
smo239190v0ar.push(smo239171);
const smo239172 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239172.setAttribute('id', 'smo239172');
smo239190v0ar.push(smo239172);
const smo239173 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239173.setAttribute('id', 'smo239173');
smo239190v0ar.push(smo239173);
const smo239174 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo239174.setAttribute('id', 'smo239174');
smo239190v0ar.push(smo239174);
smo239190v0.addTickables(smo239190v0ar)
fmtsmo2391900.joinVoices([smo239190v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo2362160.format([smo236216v0,smo237238v0,smo238236v0,smo239190v0], 85);
const stavesmo236216 = new VF.Stave(55, 219, 303);
stavesmo236216.setAttribute('id', 'stavesmo236216');
stavesmo236216.setBegBarType(1);
stavesmo236216.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":72}'), -1 * 0);
stavesmo236216.addClef('treble');
stavesmo236216.addTimeSignature('4/4');
const keysmo236216 = new VF.KeySignature('F');
keysmo236216.addToStave(stavesmo236216);
stavesmo236216.setContext(context);
stavesmo236216.draw();
smo236216v0.draw(context, stavesmo236216);
const stavesmo237238 = new VF.Stave(55, 312, 303);
stavesmo237238.setAttribute('id', 'stavesmo237238');
stavesmo237238.setBegBarType(1);
stavesmo237238.addClef('treble');
stavesmo237238.addTimeSignature('4/4');
const keysmo237238 = new VF.KeySignature('F');
keysmo237238.addToStave(stavesmo237238);
stavesmo237238.setContext(context);
stavesmo237238.draw();
smo237238v0.draw(context, stavesmo237238);
const stavesmo238236 = new VF.Stave(55, 391, 303);
stavesmo238236.setAttribute('id', 'stavesmo238236');
stavesmo238236.setBegBarType(1);
stavesmo238236.addClef('treble');
stavesmo238236.addTimeSignature('4/4');
const keysmo238236 = new VF.KeySignature('F');
keysmo238236.addToStave(stavesmo238236);
stavesmo238236.setContext(context);
stavesmo238236.draw();
smo238236v0.draw(context, stavesmo238236);
const stavesmo239190 = new VF.Stave(55, 468, 303);
stavesmo239190.setAttribute('id', 'stavesmo239190');
stavesmo239190.setBegBarType(1);
stavesmo239190.addClef('bass');
stavesmo239190.addTimeSignature('4/4');
const keysmo239190 = new VF.KeySignature('F');
keysmo239190.addToStave(stavesmo239190);
stavesmo239190.setContext(context);
stavesmo239190.draw();
smo239190v0.draw(context, stavesmo239190);
const leftsmo240133stavesmo2362163 = new VF.StaveConnector(stavesmo236216, stavesmo239190).setType(1);
leftsmo240133stavesmo2362163.setContext(context).draw();
const fmtsmo2362331 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo236233v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236233v0ar = [];
const smo236217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236217.setAttribute('id', 'smo236217');
smo236233v0ar.push(smo236217);
smo236233v0.addTickables(smo236233v0ar)
fmtsmo2362331.joinVoices([smo236233v0]);
const fmtsmo2372571 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo237257v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237257v0ar = [];
const smo237239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237239.setAttribute('id', 'smo237239');
smo237257v0ar.push(smo237239);
const smo237240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo237240.setAttribute('id', 'smo237240');
smo237257v0ar.push(smo237240);
const smo237241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237241.setAttribute('id', 'smo237241');
smo237257v0ar.push(smo237241);
smo237257v0.addTickables(smo237257v0ar)
fmtsmo2372571.joinVoices([smo237257v0]);
const fmtsmo2382541 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo238254v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238254v0ar = [];
const smo238237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238237.setAttribute('id', 'smo238237');
smo238254v0ar.push(smo238237);
const smo238238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo238238.setAttribute('id', 'smo238238');
smo238254v0ar.push(smo238238);
smo238254v0.addTickables(smo238254v0ar)
fmtsmo2382541.joinVoices([smo238254v0]);
const fmtsmo2392101 = new VF.Formatter();
//
// voices and notes for stave 3 1
const smo239210v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239210v0ar = [];
const smo239191 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239191.setAttribute('id', 'smo239191');
smo239210v0ar.push(smo239191);
const smo239192 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo239192.setAttribute('id', 'smo239192');
smo239210v0ar.push(smo239192);
const smo239193 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239193.setAttribute('id', 'smo239193');
smo239210v0ar.push(smo239193);
const smo239194 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239194.setAttribute('id', 'smo239194');
smo239210v0ar.push(smo239194);
smo239210v0.addTickables(smo239210v0ar)
fmtsmo2392101.joinVoices([smo239210v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo2362331.format([smo236233v0,smo237257v0,smo238254v0,smo239210v0], 106);
const stavesmo236233 = new VF.Stave(358, 219, 120);
stavesmo236233.setAttribute('id', 'stavesmo236233');
stavesmo236233.setBegBarType(VF.Barline.type.NONE);
stavesmo236233.setContext(context);
stavesmo236233.draw();
smo236233v0.draw(context, stavesmo236233);
const stavesmo237257 = new VF.Stave(358, 312, 120);
stavesmo237257.setAttribute('id', 'stavesmo237257');
stavesmo237257.setBegBarType(VF.Barline.type.NONE);
stavesmo237257.setContext(context);
stavesmo237257.draw();
smo237257v0.draw(context, stavesmo237257);
const stavesmo238254 = new VF.Stave(358, 391, 120);
stavesmo238254.setAttribute('id', 'stavesmo238254');
stavesmo238254.setBegBarType(VF.Barline.type.NONE);
stavesmo238254.setContext(context);
stavesmo238254.draw();
smo238254v0.draw(context, stavesmo238254);
const stavesmo239210 = new VF.Stave(358, 468, 120);
stavesmo239210.setAttribute('id', 'stavesmo239210');
stavesmo239210.setBegBarType(VF.Barline.type.NONE);
stavesmo239210.setContext(context);
stavesmo239210.draw();
smo239210v0.draw(context, stavesmo239210);
const fmtsmo2362502 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo236250v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236250v0ar = [];
const smo236234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236234.setAttribute('id', 'smo236234');
smo236250v0ar.push(smo236234);
smo236250v0.addTickables(smo236250v0ar)
fmtsmo2362502.joinVoices([smo236250v0]);
const fmtsmo2372762 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo237276v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237276v0ar = [];
const smo237258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237258.setAttribute('id', 'smo237258');
smo237276v0ar.push(smo237258);
const smo237259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237259.setAttribute('id', 'smo237259');
const smo2372590acc = new VF.Accidental('n');
smo237259.addModifier(smo2372590acc, 0);
smo237276v0ar.push(smo237259);
const smo237260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo237260.setAttribute('id', 'smo237260');
const smo2372600acc = new VF.Accidental('#');
smo237260.addModifier(smo2372600acc, 0);
smo237276v0ar.push(smo237260);
smo237276v0.addTickables(smo237276v0ar)
fmtsmo2372762.joinVoices([smo237276v0]);
const fmtsmo2382722 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo238272v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238272v0ar = [];
const smo238255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238255.setAttribute('id', 'smo238255');
smo238272v0ar.push(smo238255);
const smo238256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo238256.setAttribute('id', 'smo238256');
smo238272v0ar.push(smo238256);
smo238272v0.addTickables(smo238272v0ar)
fmtsmo2382722.joinVoices([smo238272v0]);
const fmtsmo2392302 = new VF.Formatter();
//
// voices and notes for stave 3 2
const smo239230v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239230v0ar = [];
const smo239211 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239211.setAttribute('id', 'smo239211');
smo239230v0ar.push(smo239211);
const smo239212 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239212.setAttribute('id', 'smo239212');
smo239230v0ar.push(smo239212);
const smo239213 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239213.setAttribute('id', 'smo239213');
smo239230v0ar.push(smo239213);
const smo239214 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239214.setAttribute('id', 'smo239214');
smo239230v0ar.push(smo239214);
smo239230v0.addTickables(smo239230v0ar)
fmtsmo2392302.joinVoices([smo239230v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo2362502.format([smo236250v0,smo237276v0,smo238272v0,smo239230v0], 127);
const stavesmo236250 = new VF.Stave(478, 219, 141);
stavesmo236250.setAttribute('id', 'stavesmo236250');
stavesmo236250.setBegBarType(VF.Barline.type.NONE);
stavesmo236250.setContext(context);
stavesmo236250.draw();
smo236250v0.draw(context, stavesmo236250);
const stavesmo237276 = new VF.Stave(478, 312, 141);
stavesmo237276.setAttribute('id', 'stavesmo237276');
stavesmo237276.setBegBarType(VF.Barline.type.NONE);
stavesmo237276.setContext(context);
stavesmo237276.draw();
smo237276v0.draw(context, stavesmo237276);
const stavesmo238272 = new VF.Stave(478, 391, 141);
stavesmo238272.setAttribute('id', 'stavesmo238272');
stavesmo238272.setBegBarType(VF.Barline.type.NONE);
stavesmo238272.setContext(context);
stavesmo238272.draw();
smo238272v0.draw(context, stavesmo238272);
const stavesmo239230 = new VF.Stave(478, 468, 141);
stavesmo239230.setAttribute('id', 'stavesmo239230');
stavesmo239230.setBegBarType(VF.Barline.type.NONE);
stavesmo239230.setContext(context);
stavesmo239230.draw();
smo239230v0.draw(context, stavesmo239230);
const fmtsmo2362673 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo236267v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236267v0ar = [];
const smo236251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236251.setAttribute('id', 'smo236251');
smo236267v0ar.push(smo236251);
smo236267v0.addTickables(smo236267v0ar)
fmtsmo2362673.joinVoices([smo236267v0]);
const fmtsmo2372943 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo237294v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237294v0ar = [];
const smo237277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237277.setAttribute('id', 'smo237277');
smo237294v0ar.push(smo237277);
const smo237278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237278.setAttribute('id', 'smo237278');
smo237294v0ar.push(smo237278);
smo237294v0.addTickables(smo237294v0ar)
fmtsmo2372943.joinVoices([smo237294v0]);
const fmtsmo2382903 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo238290v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238290v0ar = [];
const smo238273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238273.setAttribute('id', 'smo238273');
smo238273.addModifier(new VF.Dot(), 0);
smo238290v0ar.push(smo238273);
const smo238274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238274.setAttribute('id', 'smo238274');
smo238290v0ar.push(smo238274);
smo238290v0.addTickables(smo238290v0ar)
fmtsmo2382903.joinVoices([smo238290v0]);
const fmtsmo2392503 = new VF.Formatter();
//
// voices and notes for stave 3 3
const smo239250v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239250v0ar = [];
const smo239231 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239231.setAttribute('id', 'smo239231');
smo239250v0ar.push(smo239231);
const smo239232 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239232.setAttribute('id', 'smo239232');
smo239250v0ar.push(smo239232);
const smo239233 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239233.setAttribute('id', 'smo239233');
smo239250v0ar.push(smo239233);
const smo239234 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo239234.setAttribute('id', 'smo239234');
smo239250v0ar.push(smo239234);
smo239250v0.addTickables(smo239250v0ar)
fmtsmo2392503.joinVoices([smo239250v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo2362673.format([smo236267v0,smo237294v0,smo238290v0,smo239250v0], 121);
const stavesmo236267 = new VF.Stave(619, 219, 135);
stavesmo236267.setAttribute('id', 'stavesmo236267');
stavesmo236267.setBegBarType(VF.Barline.type.NONE);
stavesmo236267.setContext(context);
stavesmo236267.draw();
smo236267v0.draw(context, stavesmo236267);
const stavesmo237294 = new VF.Stave(619, 312, 135);
stavesmo237294.setAttribute('id', 'stavesmo237294');
stavesmo237294.setBegBarType(VF.Barline.type.NONE);
stavesmo237294.setContext(context);
stavesmo237294.draw();
smo237294v0.draw(context, stavesmo237294);
const stavesmo238290 = new VF.Stave(619, 391, 135);
stavesmo238290.setAttribute('id', 'stavesmo238290');
stavesmo238290.setBegBarType(VF.Barline.type.NONE);
stavesmo238290.setContext(context);
stavesmo238290.draw();
smo238290v0.draw(context, stavesmo238290);
const stavesmo239250 = new VF.Stave(619, 468, 135);
stavesmo239250.setAttribute('id', 'stavesmo239250');
stavesmo239250.setBegBarType(VF.Barline.type.NONE);
stavesmo239250.setContext(context);
stavesmo239250.draw();
smo239250v0.draw(context, stavesmo239250);
const fmtsmo2362844 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo236284v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236284v0ar = [];
const smo236268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236268.setAttribute('id', 'smo236268');
smo236284v0ar.push(smo236268);
smo236284v0.addTickables(smo236284v0ar)
fmtsmo2362844.joinVoices([smo236284v0]);
const fmtsmo2373124 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo237312v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237312v0ar = [];
const smo237295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo237295.setAttribute('id', 'smo237295');
smo237312v0ar.push(smo237295);
const smo237296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo237296.setAttribute('id', 'smo237296');
smo237312v0ar.push(smo237296);
smo237312v0.addTickables(smo237312v0ar)
fmtsmo2373124.joinVoices([smo237312v0]);
const fmtsmo2383084 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo238308v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238308v0ar = [];
const smo238291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo238291.setAttribute('id', 'smo238291');
smo238308v0ar.push(smo238291);
const smo238292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo238292.setAttribute('id', 'smo238292');
smo238308v0ar.push(smo238292);
smo238308v0.addTickables(smo238308v0ar)
fmtsmo2383084.joinVoices([smo238308v0]);
const fmtsmo2392704 = new VF.Formatter();
//
// voices and notes for stave 3 4
const smo239270v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239270v0ar = [];
const smo239251 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239251.setAttribute('id', 'smo239251');
smo239270v0ar.push(smo239251);
const smo239252 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239252.setAttribute('id', 'smo239252');
smo239270v0ar.push(smo239252);
const smo239253 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239253.setAttribute('id', 'smo239253');
smo239270v0ar.push(smo239253);
const smo239254 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/3/n"]}'))
smo239254.setAttribute('id', 'smo239254');
const smo2392540acc = new VF.Accidental('#');
smo239254.addModifier(smo2392540acc, 0);
smo239270v0ar.push(smo239254);
smo239270v0.addTickables(smo239270v0ar)
fmtsmo2392704.joinVoices([smo239270v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo2362844.format([smo236284v0,smo237312v0,smo238308v0,smo239270v0], 118);
const stavesmo236284 = new VF.Stave(754, 219, 132);
stavesmo236284.setAttribute('id', 'stavesmo236284');
stavesmo236284.setBegBarType(VF.Barline.type.NONE);
stavesmo236284.setContext(context);
stavesmo236284.draw();
smo236284v0.draw(context, stavesmo236284);
const stavesmo237312 = new VF.Stave(754, 312, 132);
stavesmo237312.setAttribute('id', 'stavesmo237312');
stavesmo237312.setBegBarType(VF.Barline.type.NONE);
stavesmo237312.setContext(context);
stavesmo237312.draw();
smo237312v0.draw(context, stavesmo237312);
const stavesmo238308 = new VF.Stave(754, 391, 132);
stavesmo238308.setAttribute('id', 'stavesmo238308');
stavesmo238308.setBegBarType(VF.Barline.type.NONE);
stavesmo238308.setContext(context);
stavesmo238308.draw();
smo238308v0.draw(context, stavesmo238308);
const stavesmo239270 = new VF.Stave(754, 468, 132);
stavesmo239270.setAttribute('id', 'stavesmo239270');
stavesmo239270.setBegBarType(VF.Barline.type.NONE);
stavesmo239270.setContext(context);
stavesmo239270.draw();
smo239270v0.draw(context, stavesmo239270);
const fmtsmo2363015 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo236301v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236301v0ar = [];
const smo236285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236285.setAttribute('id', 'smo236285');
smo236301v0ar.push(smo236285);
smo236301v0.addTickables(smo236301v0ar)
fmtsmo2363015.joinVoices([smo236301v0]);
const fmtsmo2373315 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo237331v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237331v0ar = [];
const smo237313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo237313.setAttribute('id', 'smo237313');
smo237331v0ar.push(smo237313);
const smo237314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237314.setAttribute('id', 'smo237314');
smo237331v0ar.push(smo237314);
const smo237315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo237315.setAttribute('id', 'smo237315');
smo237331v0ar.push(smo237315);
smo237331v0.addTickables(smo237331v0ar)
fmtsmo2373315.joinVoices([smo237331v0]);
const fmtsmo2383275 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo238327v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238327v0ar = [];
const smo238309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo238309.setAttribute('id', 'smo238309');
smo238327v0ar.push(smo238309);
const smo238310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo238310.setAttribute('id', 'smo238310');
smo238327v0ar.push(smo238310);
const smo238311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo238311.setAttribute('id', 'smo238311');
smo238327v0ar.push(smo238311);
smo238327v0.addTickables(smo238327v0ar)
fmtsmo2383275.joinVoices([smo238327v0]);
const fmtsmo2392905 = new VF.Formatter();
//
// voices and notes for stave 3 5
const smo239290v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239290v0ar = [];
const smo239271 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239271.setAttribute('id', 'smo239271');
smo239290v0ar.push(smo239271);
const smo239272 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239272.setAttribute('id', 'smo239272');
smo239290v0ar.push(smo239272);
const smo239273 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239273.setAttribute('id', 'smo239273');
smo239290v0ar.push(smo239273);
const smo239274 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239274.setAttribute('id', 'smo239274');
smo239290v0ar.push(smo239274);
smo239290v0.addTickables(smo239290v0ar)
fmtsmo2392905.joinVoices([smo239290v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo2363015.format([smo236301v0,smo237331v0,smo238327v0,smo239290v0], 106);
const stavesmo236301 = new VF.Stave(886, 219, 120);
stavesmo236301.setAttribute('id', 'stavesmo236301');
stavesmo236301.setBegBarType(VF.Barline.type.NONE);
stavesmo236301.setContext(context);
stavesmo236301.draw();
smo236301v0.draw(context, stavesmo236301);
const stavesmo237331 = new VF.Stave(886, 312, 120);
stavesmo237331.setAttribute('id', 'stavesmo237331');
stavesmo237331.setBegBarType(VF.Barline.type.NONE);
stavesmo237331.setContext(context);
stavesmo237331.draw();
smo237331v0.draw(context, stavesmo237331);
const stavesmo238327 = new VF.Stave(886, 391, 120);
stavesmo238327.setAttribute('id', 'stavesmo238327');
stavesmo238327.setBegBarType(VF.Barline.type.NONE);
stavesmo238327.setContext(context);
stavesmo238327.draw();
smo238327v0.draw(context, stavesmo238327);
const stavesmo239290 = new VF.Stave(886, 468, 120);
stavesmo239290.setAttribute('id', 'stavesmo239290');
stavesmo239290.setBegBarType(VF.Barline.type.NONE);
stavesmo239290.setContext(context);
stavesmo239290.draw();
smo239290v0.draw(context, stavesmo239290);
const fmtsmo2363186 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo236318v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236318v0ar = [];
const smo236302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236302.setAttribute('id', 'smo236302');
smo236318v0ar.push(smo236302);
smo236318v0.addTickables(smo236318v0ar)
fmtsmo2363186.joinVoices([smo236318v0]);
const fmtsmo2373546 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo237354v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237354v0ar = [];
const smo237332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo237332.setAttribute('id', 'smo237332');
smo237354v0ar.push(smo237332);
const smo237333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo237333.setAttribute('id', 'smo237333');
smo237354v0ar.push(smo237333);
const smo237334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo237334.setAttribute('id', 'smo237334');
smo237354v0ar.push(smo237334);
const smo237335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n"]}'))
smo237335.setAttribute('id', 'smo237335');
const smo2373350acc = new VF.Accidental('#');
smo237335.addModifier(smo2373350acc, 0);
smo237354v0ar.push(smo237335);
const smo237336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo237336.setAttribute('id', 'smo237336');
smo237354v0ar.push(smo237336);
const smo237337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo237337.setAttribute('id', 'smo237337');
smo237354v0ar.push(smo237337);
const smo237338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo237338.setAttribute('id', 'smo237338');
smo237354v0ar.push(smo237338);
smo237354v0.addTickables(smo237354v0ar)
fmtsmo2373546.joinVoices([smo237354v0]);
const fmtsmo2383476 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo238347v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238347v0ar = [];
const smo238328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo238328.setAttribute('id', 'smo238328');
smo238347v0ar.push(smo238328);
const smo238329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo238329.setAttribute('id', 'smo238329');
smo238347v0ar.push(smo238329);
const smo238330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo238330.setAttribute('id', 'smo238330');
smo238347v0ar.push(smo238330);
const smo238331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo238331.setAttribute('id', 'smo238331');
smo238347v0ar.push(smo238331);
smo238347v0.addTickables(smo238347v0ar)
fmtsmo2383476.joinVoices([smo238347v0]);
const fmtsmo2393106 = new VF.Formatter();
//
// voices and notes for stave 3 6
const smo239310v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239310v0ar = [];
const smo239291 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239291.setAttribute('id', 'smo239291');
smo239310v0ar.push(smo239291);
const smo239292 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239292.setAttribute('id', 'smo239292');
smo239310v0ar.push(smo239292);
const smo239293 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239293.setAttribute('id', 'smo239293');
smo239310v0ar.push(smo239293);
const smo239294 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239294.setAttribute('id', 'smo239294');
smo239310v0ar.push(smo239294);
smo239310v0.addTickables(smo239310v0ar)
fmtsmo2393106.joinVoices([smo239310v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
const dirsmo246452 = smo237333.getStemDirection();
smo237333.setStemDirection(dirsmo246452);
smo237334.setStemDirection(dirsmo246452);
smo237335.setStemDirection(dirsmo246452);
smo237336.setStemDirection(dirsmo246452);
const smo246452 = new VF.Beam([smo237333,smo237334,smo237335,smo237336]);
 
// formatting measures in staff group smo240133
fmtsmo2363186.format([smo236318v0,smo237354v0,smo238347v0,smo239310v0], 196);
const stavesmo236318 = new VF.Stave(1006, 219, 210);
stavesmo236318.setAttribute('id', 'stavesmo236318');
stavesmo236318.setBegBarType(VF.Barline.type.NONE);
stavesmo236318.setContext(context);
stavesmo236318.draw();
smo236318v0.draw(context, stavesmo236318);
const stavesmo237354 = new VF.Stave(1006, 312, 210);
stavesmo237354.setAttribute('id', 'stavesmo237354');
stavesmo237354.setBegBarType(VF.Barline.type.NONE);
stavesmo237354.setContext(context);
stavesmo237354.draw();
smo237354v0.draw(context, stavesmo237354);
smo246452.setContext(context);
smo246452.draw();
const stavesmo238347 = new VF.Stave(1006, 391, 210);
stavesmo238347.setAttribute('id', 'stavesmo238347');
stavesmo238347.setBegBarType(VF.Barline.type.NONE);
stavesmo238347.setContext(context);
stavesmo238347.draw();
smo238347v0.draw(context, stavesmo238347);
const stavesmo239310 = new VF.Stave(1006, 468, 210);
stavesmo239310.setAttribute('id', 'stavesmo239310');
stavesmo239310.setBegBarType(VF.Barline.type.NONE);
stavesmo239310.setContext(context);
stavesmo239310.draw();
smo239310v0.draw(context, stavesmo239310);
const fmtsmo2363357 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo236335v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236335v0ar = [];
const smo236319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236319.setAttribute('id', 'smo236319');
smo236335v0ar.push(smo236319);
smo236335v0.addTickables(smo236335v0ar)
fmtsmo2363357.joinVoices([smo236335v0]);
const fmtsmo2373757 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo237375v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237375v0ar = [];
const smo237355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo237355.setAttribute('id', 'smo237355');
smo237355.addModifier(new VF.Dot(), 0);
smo237375v0ar.push(smo237355);
const smo237356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo237356.setAttribute('id', 'smo237356');
smo237375v0ar.push(smo237356);
const smo237357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo237357.setAttribute('id', 'smo237357');
smo237375v0ar.push(smo237357);
const smo237358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo237358.setAttribute('id', 'smo237358');
smo237375v0ar.push(smo237358);
const smo237359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237359.setAttribute('id', 'smo237359');
smo237375v0ar.push(smo237359);
smo237375v0.addTickables(smo237375v0ar)
fmtsmo2373757.joinVoices([smo237375v0]);
const fmtsmo2383667 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo238366v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238366v0ar = [];
const smo238348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo238348.setAttribute('id', 'smo238348');
smo238366v0ar.push(smo238348);
const smo238349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo238349.setAttribute('id', 'smo238349');
smo238366v0ar.push(smo238349);
const smo238350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238350.setAttribute('id', 'smo238350');
smo238366v0ar.push(smo238350);
smo238366v0.addTickables(smo238366v0ar)
fmtsmo2383667.joinVoices([smo238366v0]);
const fmtsmo2393287 = new VF.Formatter();
//
// voices and notes for stave 3 7
const smo239328v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239328v0ar = [];
const smo239311 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239311.setAttribute('id', 'smo239311');
smo239328v0ar.push(smo239311);
const smo239312 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo239312.setAttribute('id', 'smo239312');
smo239328v0ar.push(smo239312);
smo239328v0.addTickables(smo239328v0ar)
fmtsmo2393287.joinVoices([smo239328v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
const dirsmo246461 = smo237356.getStemDirection();
smo237356.setStemDirection(dirsmo246461);
smo237357.setStemDirection(dirsmo246461);
const smo246461 = new VF.Beam([smo237356,smo237357]);
 
// formatting measures in staff group smo240133
fmtsmo2363357.format([smo236335v0,smo237375v0,smo238366v0,smo239328v0], 147);
const stavesmo236335 = new VF.Stave(1216, 219, 161);
stavesmo236335.setAttribute('id', 'stavesmo236335');
stavesmo236335.setBegBarType(VF.Barline.type.NONE);
stavesmo236335.setContext(context);
stavesmo236335.draw();
smo236335v0.draw(context, stavesmo236335);
const stavesmo237375 = new VF.Stave(1216, 312, 161);
stavesmo237375.setAttribute('id', 'stavesmo237375');
stavesmo237375.setBegBarType(VF.Barline.type.NONE);
stavesmo237375.setContext(context);
stavesmo237375.draw();
smo237375v0.draw(context, stavesmo237375);
smo246461.setContext(context);
smo246461.draw();
const stavesmo238366 = new VF.Stave(1216, 391, 161);
stavesmo238366.setAttribute('id', 'stavesmo238366');
stavesmo238366.setBegBarType(VF.Barline.type.NONE);
stavesmo238366.setContext(context);
stavesmo238366.draw();
smo238366v0.draw(context, stavesmo238366);
const stavesmo239328 = new VF.Stave(1216, 468, 161);
stavesmo239328.setAttribute('id', 'stavesmo239328');
stavesmo239328.setBegBarType(VF.Barline.type.NONE);
stavesmo239328.setContext(context);
stavesmo239328.draw();
smo239328v0.draw(context, stavesmo239328);
const rightsmo240133stavesmo2363353 = new VF.StaveConnector(stavesmo236335, stavesmo239328).setType(0);
rightsmo240133stavesmo2363353.setContext(context).draw();
const fmtsmo2363558 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo236355v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236355v0ar = [];
const smo236336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo236336.setAttribute('id', 'smo236336');
const smo236337 = new VF.Annotation('Со');
smo236337.setAttribute('id', 'smo236337');
smo236337.setFont('Merriweather', 12.1, 'normal');
smo236337.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236336.addModifier(smo236337);
smo236337.addClass('lyric lyric-0 lyric-hyphen');
smo236355v0ar.push(smo236336);
const smo236338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236338.setAttribute('id', 'smo236338');
const smo236339 = new VF.Annotation('ло');
smo236339.setAttribute('id', 'smo236339');
smo236339.setFont('Merriweather', 12.1, 'normal');
smo236339.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236338.addModifier(smo236339);
smo236339.addClass('lyric lyric-0');
smo236355v0ar.push(smo236338);
smo236355v0.addTickables(smo236355v0ar)
fmtsmo2363558.joinVoices([smo236355v0]);
const fmtsmo2373958 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo237395v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237395v0ar = [];
const smo237376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237376.setAttribute('id', 'smo237376');
smo237395v0ar.push(smo237376);
const smo237377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo237377.setAttribute('id', 'smo237377');
smo237395v0ar.push(smo237377);
const smo237378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237378.setAttribute('id', 'smo237378');
smo237395v0ar.push(smo237378);
const smo237379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237379.setAttribute('id', 'smo237379');
smo237395v0ar.push(smo237379);
smo237395v0.addTickables(smo237395v0ar)
fmtsmo2373958.joinVoices([smo237395v0]);
const fmtsmo2383868 = new VF.Formatter();
//
// voices and notes for stave 2 8
const smo238386v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238386v0ar = [];
const smo238367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238367.setAttribute('id', 'smo238367');
smo238386v0ar.push(smo238367);
const smo238368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238368.setAttribute('id', 'smo238368');
smo238386v0ar.push(smo238368);
const smo238369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo238369.setAttribute('id', 'smo238369');
smo238386v0ar.push(smo238369);
const smo238370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238370.setAttribute('id', 'smo238370');
smo238386v0ar.push(smo238370);
smo238386v0.addTickables(smo238386v0ar)
fmtsmo2383868.joinVoices([smo238386v0]);
const fmtsmo2393488 = new VF.Formatter();
//
// voices and notes for stave 3 8
const smo239348v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239348v0ar = [];
const smo239329 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239329.setAttribute('id', 'smo239329');
smo239348v0ar.push(smo239329);
const smo239330 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239330.setAttribute('id', 'smo239330');
smo239348v0ar.push(smo239330);
const smo239331 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo239331.setAttribute('id', 'smo239331');
smo239348v0ar.push(smo239331);
const smo239332 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239332.setAttribute('id', 'smo239332');
smo239348v0ar.push(smo239332);
smo239348v0.addTickables(smo239348v0ar)
fmtsmo2393488.joinVoices([smo239348v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo2363558.format([smo236355v0,smo237395v0,smo238386v0,smo239348v0], 161);
const stavesmo236355 = new VF.Stave(55, 598, 244);
stavesmo236355.setAttribute('id', 'stavesmo236355');
stavesmo236355.setBegBarType(4);
stavesmo236355.addClef('treble');
const keysmo236355 = new VF.KeySignature('F');
keysmo236355.addToStave(stavesmo236355);
stavesmo236355.setContext(context);
stavesmo236355.draw();
smo236355v0.draw(context, stavesmo236355);
const stavesmo237395 = new VF.Stave(55, 711, 244);
stavesmo237395.setAttribute('id', 'stavesmo237395');
stavesmo237395.setBegBarType(4);
stavesmo237395.addClef('treble');
const keysmo237395 = new VF.KeySignature('F');
keysmo237395.addToStave(stavesmo237395);
stavesmo237395.setContext(context);
stavesmo237395.draw();
smo237395v0.draw(context, stavesmo237395);
const stavesmo238386 = new VF.Stave(55, 794, 244);
stavesmo238386.setAttribute('id', 'stavesmo238386');
stavesmo238386.setBegBarType(4);
stavesmo238386.addClef('treble');
const keysmo238386 = new VF.KeySignature('F');
keysmo238386.addToStave(stavesmo238386);
stavesmo238386.setContext(context);
stavesmo238386.draw();
smo238386v0.draw(context, stavesmo238386);
const stavesmo239348 = new VF.Stave(55, 875, 244);
stavesmo239348.setAttribute('id', 'stavesmo239348');
stavesmo239348.setBegBarType(4);
stavesmo239348.addClef('bass');
const keysmo239348 = new VF.KeySignature('F');
keysmo239348.addToStave(stavesmo239348);
stavesmo239348.setContext(context);
stavesmo239348.draw();
smo239348v0.draw(context, stavesmo239348);
const leftsmo240133stavesmo2363553 = new VF.StaveConnector(stavesmo236355, stavesmo239348).setType(1);
leftsmo240133stavesmo2363553.setContext(context).draw();
const fmtsmo2363779 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo236377v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236377v0ar = [];
const smo236356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236356.setAttribute('id', 'smo236356');
const smo236357 = new VF.Annotation('вей,');
smo236357.setAttribute('id', 'smo236357');
smo236357.setFont('Merriweather', 12.1, 'normal');
smo236357.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236356.addModifier(smo236357);
smo236357.addClass('lyric lyric-0');
smo236377v0ar.push(smo236356);
const smo236358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo236358.setAttribute('id', 'smo236358');
const smo236359 = new VF.Annotation('мой');
smo236359.setAttribute('id', 'smo236359');
smo236359.setFont('Merriweather', 12.1, 'normal');
smo236359.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236358.addModifier(smo236359);
smo236359.addClass('lyric lyric-0');
smo236377v0ar.push(smo236358);
const smo236360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236360.setAttribute('id', 'smo236360');
const smo236361 = new VF.Annotation('-');
smo236361.setAttribute('id', 'smo236361');
smo236361.setFont('Merriweather', 12.1, 'normal');
smo236361.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236360.addModifier(smo236361);
smo236361.addClass('lyric lyric-0 lyric-hyphen');
smo236377v0ar.push(smo236360);
smo236377v0.addTickables(smo236377v0ar)
fmtsmo2363779.joinVoices([smo236377v0]);
const fmtsmo2374169 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo237416v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237416v0ar = [];
const smo237396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237396.setAttribute('id', 'smo237396');
smo237416v0ar.push(smo237396);
const smo237397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237397.setAttribute('id', 'smo237397');
smo237416v0ar.push(smo237397);
const smo237399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237399.setAttribute('id', 'smo237399');
smo237416v0ar.push(smo237399);
const smo237400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237400.setAttribute('id', 'smo237400');
smo237416v0ar.push(smo237400);
smo237416v0.addTickables(smo237416v0ar)
fmtsmo2374169.joinVoices([smo237416v0]);
const fmtsmo2384069 = new VF.Formatter();
//
// voices and notes for stave 2 9
const smo238406v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238406v0ar = [];
const smo238387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238387.setAttribute('id', 'smo238387');
smo238406v0ar.push(smo238387);
const smo238388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo238388.setAttribute('id', 'smo238388');
smo238406v0ar.push(smo238388);
const smo238389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238389.setAttribute('id', 'smo238389');
smo238406v0ar.push(smo238389);
const smo238390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo238390.setAttribute('id', 'smo238390');
smo238406v0ar.push(smo238390);
smo238406v0.addTickables(smo238406v0ar)
fmtsmo2384069.joinVoices([smo238406v0]);
const fmtsmo2393689 = new VF.Formatter();
//
// voices and notes for stave 3 9
const smo239368v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239368v0ar = [];
const smo239349 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo239349.setAttribute('id', 'smo239349');
smo239368v0ar.push(smo239349);
const smo239350 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239350.setAttribute('id', 'smo239350');
smo239368v0ar.push(smo239350);
const smo239351 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239351.setAttribute('id', 'smo239351');
smo239368v0ar.push(smo239351);
const smo239352 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239352.setAttribute('id', 'smo239352');
smo239368v0ar.push(smo239352);
smo239368v0.addTickables(smo239368v0ar)
fmtsmo2393689.joinVoices([smo239368v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo2363779.format([smo236377v0,smo237416v0,smo238406v0,smo239368v0], 191);
const stavesmo236377 = new VF.Stave(299, 598, 205);
stavesmo236377.setAttribute('id', 'stavesmo236377');
stavesmo236377.setBegBarType(VF.Barline.type.NONE);
stavesmo236377.setContext(context);
stavesmo236377.draw();
smo236377v0.draw(context, stavesmo236377);
const stavesmo237416 = new VF.Stave(299, 711, 205);
stavesmo237416.setAttribute('id', 'stavesmo237416');
stavesmo237416.setBegBarType(VF.Barline.type.NONE);
stavesmo237416.setContext(context);
stavesmo237416.draw();
smo237416v0.draw(context, stavesmo237416);
const stavesmo238406 = new VF.Stave(299, 794, 205);
stavesmo238406.setAttribute('id', 'stavesmo238406');
stavesmo238406.setBegBarType(VF.Barline.type.NONE);
stavesmo238406.setContext(context);
stavesmo238406.draw();
smo238406v0.draw(context, stavesmo238406);
const stavesmo239368 = new VF.Stave(299, 875, 205);
stavesmo239368.setAttribute('id', 'stavesmo239368');
stavesmo239368.setBegBarType(VF.Barline.type.NONE);
stavesmo239368.setContext(context);
stavesmo239368.draw();
smo239368v0.draw(context, stavesmo239368);
const fmtsmo23639910 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo236399v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236399v0ar = [];
const smo236378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236378.setAttribute('id', 'smo236378');
const smo236379 = new VF.Annotation('Со');
smo236379.setAttribute('id', 'smo236379');
smo236379.setFont('Merriweather', 12.1, 'normal');
smo236379.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236378.addModifier(smo236379);
smo236379.addClass('lyric lyric-0 lyric-hyphen');
smo236399v0ar.push(smo236378);
const smo236380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo236380.setAttribute('id', 'smo236380');
const smo2363800acc = new VF.Accidental('n');
smo236380.addModifier(smo2363800acc, 0);
const smo236381 = new VF.Annotation('ло');
smo236381.setAttribute('id', 'smo236381');
smo236381.setFont('Merriweather', 12.1, 'normal');
smo236381.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236380.addModifier(smo236381);
smo236381.addClass('lyric lyric-0 lyric-hyphen');
smo236399v0ar.push(smo236380);
const smo236382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo236382.setAttribute('id', 'smo236382');
const smo2363820acc = new VF.Accidental('#');
smo236382.addModifier(smo2363820acc, 0);
smo236399v0ar.push(smo236382);
smo236399v0.addTickables(smo236399v0ar)
fmtsmo23639910.joinVoices([smo236399v0]);
const fmtsmo23743610 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo237436v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237436v0ar = [];
const smo237417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237417.setAttribute('id', 'smo237417');
smo237436v0ar.push(smo237417);
const smo237418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237418.setAttribute('id', 'smo237418');
smo237436v0ar.push(smo237418);
const smo237419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237419.setAttribute('id', 'smo237419');
smo237436v0ar.push(smo237419);
const smo237420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo237420.setAttribute('id', 'smo237420');
smo237436v0ar.push(smo237420);
smo237436v0.addTickables(smo237436v0ar)
fmtsmo23743610.joinVoices([smo237436v0]);
const fmtsmo23842610 = new VF.Formatter();
//
// voices and notes for stave 2 10
const smo238426v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238426v0ar = [];
const smo238407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238407.setAttribute('id', 'smo238407');
smo238426v0ar.push(smo238407);
const smo238408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo238408.setAttribute('id', 'smo238408');
smo238426v0ar.push(smo238408);
const smo238409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238409.setAttribute('id', 'smo238409');
smo238426v0ar.push(smo238409);
const smo238410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo238410.setAttribute('id', 'smo238410');
smo238426v0ar.push(smo238410);
smo238426v0.addTickables(smo238426v0ar)
fmtsmo23842610.joinVoices([smo238426v0]);
const fmtsmo23938810 = new VF.Formatter();
//
// voices and notes for stave 3 10
const smo239388v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239388v0ar = [];
const smo239369 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239369.setAttribute('id', 'smo239369');
smo239388v0ar.push(smo239369);
const smo239370 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239370.setAttribute('id', 'smo239370');
smo239388v0ar.push(smo239370);
const smo239371 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239371.setAttribute('id', 'smo239371');
smo239388v0ar.push(smo239371);
const smo239372 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239372.setAttribute('id', 'smo239372');
smo239388v0ar.push(smo239372);
smo239388v0.addTickables(smo239388v0ar)
fmtsmo23938810.joinVoices([smo239388v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23639910.format([smo236399v0,smo237436v0,smo238426v0,smo239388v0], 154);
const stavesmo236399 = new VF.Stave(504, 598, 168);
stavesmo236399.setAttribute('id', 'stavesmo236399');
stavesmo236399.setBegBarType(VF.Barline.type.NONE);
stavesmo236399.setContext(context);
stavesmo236399.draw();
smo236399v0.draw(context, stavesmo236399);
const stavesmo237436 = new VF.Stave(504, 711, 168);
stavesmo237436.setAttribute('id', 'stavesmo237436');
stavesmo237436.setBegBarType(VF.Barline.type.NONE);
stavesmo237436.setContext(context);
stavesmo237436.draw();
smo237436v0.draw(context, stavesmo237436);
const stavesmo238426 = new VF.Stave(504, 794, 168);
stavesmo238426.setAttribute('id', 'stavesmo238426');
stavesmo238426.setBegBarType(VF.Barline.type.NONE);
stavesmo238426.setContext(context);
stavesmo238426.draw();
smo238426v0.draw(context, stavesmo238426);
const stavesmo239388 = new VF.Stave(504, 875, 168);
stavesmo239388.setAttribute('id', 'stavesmo239388');
stavesmo239388.setBegBarType(VF.Barline.type.NONE);
stavesmo239388.setContext(context);
stavesmo239388.draw();
smo239388v0.draw(context, stavesmo239388);
const fmtsmo23641811 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo236418v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236418v0ar = [];
const smo236400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236400.setAttribute('id', 'smo236400');
const smo236401 = new VF.Annotation('вей');
smo236401.setAttribute('id', 'smo236401');
smo236401.setFont('Merriweather', 12.1, 'normal');
smo236401.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236400.addModifier(smo236401);
smo236401.addClass('lyric lyric-0');
smo236418v0ar.push(smo236400);
const smo236402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236402.setAttribute('id', 'smo236402');
smo236418v0ar.push(smo236402);
smo236418v0.addTickables(smo236418v0ar)
fmtsmo23641811.joinVoices([smo236418v0]);
const fmtsmo23745611 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo237456v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237456v0ar = [];
const smo237437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237437.setAttribute('id', 'smo237437');
smo237456v0ar.push(smo237437);
const smo237438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237438.setAttribute('id', 'smo237438');
smo237456v0ar.push(smo237438);
const smo237439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo237439.setAttribute('id', 'smo237439');
smo237456v0ar.push(smo237439);
const smo237440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo237440.setAttribute('id', 'smo237440');
smo237456v0ar.push(smo237440);
smo237456v0.addTickables(smo237456v0ar)
fmtsmo23745611.joinVoices([smo237456v0]);
const fmtsmo23844611 = new VF.Formatter();
//
// voices and notes for stave 2 11
const smo238446v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238446v0ar = [];
const smo238427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238427.setAttribute('id', 'smo238427');
smo238446v0ar.push(smo238427);
const smo238428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo238428.setAttribute('id', 'smo238428');
smo238446v0ar.push(smo238428);
const smo238429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo238429.setAttribute('id', 'smo238429');
smo238446v0ar.push(smo238429);
const smo238430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo238430.setAttribute('id', 'smo238430');
smo238446v0ar.push(smo238430);
smo238446v0.addTickables(smo238446v0ar)
fmtsmo23844611.joinVoices([smo238446v0]);
const fmtsmo23940611 = new VF.Formatter();
//
// voices and notes for stave 3 11
const smo239406v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239406v0ar = [];
const smo239389 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo239389.setAttribute('id', 'smo239389');
smo239406v0ar.push(smo239389);
const smo239390 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239390.setAttribute('id', 'smo239390');
smo239406v0ar.push(smo239390);
smo239406v0.addTickables(smo239406v0ar)
fmtsmo23940611.joinVoices([smo239406v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23641811.format([smo236418v0,smo237456v0,smo238446v0,smo239406v0], 147);
const stavesmo236418 = new VF.Stave(672, 598, 161);
stavesmo236418.setAttribute('id', 'stavesmo236418');
stavesmo236418.setBegBarType(VF.Barline.type.NONE);
stavesmo236418.setContext(context);
stavesmo236418.draw();
smo236418v0.draw(context, stavesmo236418);
const stavesmo237456 = new VF.Stave(672, 711, 161);
stavesmo237456.setAttribute('id', 'stavesmo237456');
stavesmo237456.setBegBarType(VF.Barline.type.NONE);
stavesmo237456.setContext(context);
stavesmo237456.draw();
smo237456v0.draw(context, stavesmo237456);
const stavesmo238446 = new VF.Stave(672, 794, 161);
stavesmo238446.setAttribute('id', 'stavesmo238446');
stavesmo238446.setBegBarType(VF.Barline.type.NONE);
stavesmo238446.setContext(context);
stavesmo238446.draw();
smo238446v0.draw(context, stavesmo238446);
const stavesmo239406 = new VF.Stave(672, 875, 161);
stavesmo239406.setAttribute('id', 'stavesmo239406');
stavesmo239406.setBegBarType(VF.Barline.type.NONE);
stavesmo239406.setContext(context);
stavesmo239406.draw();
smo239406v0.draw(context, stavesmo239406);
const fmtsmo23644012 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo236440v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236440v0ar = [];
const smo236419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo236419.setAttribute('id', 'smo236419');
const smo236420 = new VF.Annotation('го');
smo236420.setAttribute('id', 'smo236420');
smo236420.setFont('Merriweather', 12.1, 'normal');
smo236420.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236419.addModifier(smo236420);
smo236420.addClass('lyric lyric-0 lyric-hyphen');
smo236440v0ar.push(smo236419);
const smo236421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236421.setAttribute('id', 'smo236421');
const smo236422 = new VF.Annotation('пo');
smo236422.setAttribute('id', 'smo236422');
smo236422.setFont('Merriweather', 12.1, 'normal');
smo236422.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236421.addModifier(smo236422);
smo236422.addClass('lyric lyric-0');
smo236440v0ar.push(smo236421);
const smo236423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo236423.setAttribute('id', 'smo236423');
const smo236424 = new VF.Annotation('-');
smo236424.setAttribute('id', 'smo236424');
smo236424.setFont('Merriweather', 12.1, 'normal');
smo236424.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236423.addModifier(smo236424);
smo236424.addClass('lyric lyric-0 lyric-hyphen');
smo236440v0ar.push(smo236423);
smo236440v0.addTickables(smo236440v0ar)
fmtsmo23644012.joinVoices([smo236440v0]);
const fmtsmo23747612 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo237476v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237476v0ar = [];
const smo237457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237457.setAttribute('id', 'smo237457');
smo237476v0ar.push(smo237457);
const smo237458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo237458.setAttribute('id', 'smo237458');
smo237476v0ar.push(smo237458);
const smo237459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237459.setAttribute('id', 'smo237459');
smo237476v0ar.push(smo237459);
const smo237460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo237460.setAttribute('id', 'smo237460');
smo237476v0ar.push(smo237460);
smo237476v0.addTickables(smo237476v0ar)
fmtsmo23747612.joinVoices([smo237476v0]);
const fmtsmo23846612 = new VF.Formatter();
//
// voices and notes for stave 2 12
const smo238466v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238466v0ar = [];
const smo238447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238447.setAttribute('id', 'smo238447');
smo238466v0ar.push(smo238447);
const smo238448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo238448.setAttribute('id', 'smo238448');
smo238466v0ar.push(smo238448);
const smo238449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238449.setAttribute('id', 'smo238449');
smo238466v0ar.push(smo238449);
const smo238450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo238450.setAttribute('id', 'smo238450');
smo238466v0ar.push(smo238450);
smo238466v0.addTickables(smo238466v0ar)
fmtsmo23846612.joinVoices([smo238466v0]);
const fmtsmo23942612 = new VF.Formatter();
//
// voices and notes for stave 3 12
const smo239426v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239426v0ar = [];
const smo239407 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo239407.setAttribute('id', 'smo239407');
smo239426v0ar.push(smo239407);
const smo239408 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239408.setAttribute('id', 'smo239408');
smo239426v0ar.push(smo239408);
const smo239409 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo239409.setAttribute('id', 'smo239409');
smo239426v0ar.push(smo239409);
const smo239410 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239410.setAttribute('id', 'smo239410');
smo239426v0ar.push(smo239410);
smo239426v0.addTickables(smo239426v0ar)
fmtsmo23942612.joinVoices([smo239426v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23644012.format([smo236440v0,smo237476v0,smo238466v0,smo239426v0], 144);
const stavesmo236440 = new VF.Stave(833, 598, 158);
stavesmo236440.setAttribute('id', 'stavesmo236440');
stavesmo236440.setBegBarType(VF.Barline.type.NONE);
stavesmo236440.setContext(context);
stavesmo236440.draw();
smo236440v0.draw(context, stavesmo236440);
const stavesmo237476 = new VF.Stave(833, 711, 158);
stavesmo237476.setAttribute('id', 'stavesmo237476');
stavesmo237476.setBegBarType(VF.Barline.type.NONE);
stavesmo237476.setContext(context);
stavesmo237476.draw();
smo237476v0.draw(context, stavesmo237476);
const stavesmo238466 = new VF.Stave(833, 794, 158);
stavesmo238466.setAttribute('id', 'stavesmo238466');
stavesmo238466.setBegBarType(VF.Barline.type.NONE);
stavesmo238466.setContext(context);
stavesmo238466.draw();
smo238466v0.draw(context, stavesmo238466);
const stavesmo239426 = new VF.Stave(833, 875, 158);
stavesmo239426.setAttribute('id', 'stavesmo239426');
stavesmo239426.setBegBarType(VF.Barline.type.NONE);
stavesmo239426.setContext(context);
stavesmo239426.draw();
smo239426v0.draw(context, stavesmo239426);
const fmtsmo23646213 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo236462v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236462v0ar = [];
const smo236441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236441.setAttribute('id', 'smo236441');
const smo236442 = new VF.Annotation('си');
smo236442.setAttribute('id', 'smo236442');
smo236442.setFont('Merriweather', 12.1, 'normal');
smo236442.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236441.addModifier(smo236442);
smo236442.addClass('lyric lyric-0');
smo236462v0ar.push(smo236441);
const smo236443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236443.setAttribute('id', 'smo236443');
const smo236444 = new VF.Annotation('ст');
smo236444.setAttribute('id', 'smo236444');
smo236444.setFont('Merriweather', 12.1, 'normal');
smo236444.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236443.addModifier(smo236444);
smo236444.addClass('lyric lyric-0 lyric-hyphen');
smo236462v0ar.push(smo236443);
const smo236445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo236445.setAttribute('id', 'smo236445');
const smo236446 = new VF.Annotation('ый');
smo236446.setAttribute('id', 'smo236446');
smo236446.setFont('Merriweather', 12.1, 'normal');
smo236446.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236445.addModifier(smo236446);
smo236446.addClass('lyric lyric-0');
smo236462v0ar.push(smo236445);
smo236462v0.addTickables(smo236462v0ar)
fmtsmo23646213.joinVoices([smo236462v0]);
const fmtsmo23749613 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo237496v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237496v0ar = [];
const smo237477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237477.setAttribute('id', 'smo237477');
smo237496v0ar.push(smo237477);
const smo237478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237478.setAttribute('id', 'smo237478');
smo237496v0ar.push(smo237478);
const smo237479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237479.setAttribute('id', 'smo237479');
smo237496v0ar.push(smo237479);
const smo237480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo237480.setAttribute('id', 'smo237480');
smo237496v0ar.push(smo237480);
smo237496v0.addTickables(smo237496v0ar)
fmtsmo23749613.joinVoices([smo237496v0]);
const fmtsmo23848613 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo238486v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238486v0ar = [];
const smo238467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238467.setAttribute('id', 'smo238467');
smo238486v0ar.push(smo238467);
const smo238468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo238468.setAttribute('id', 'smo238468');
smo238486v0ar.push(smo238468);
const smo238469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238469.setAttribute('id', 'smo238469');
smo238486v0ar.push(smo238469);
const smo238470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo238470.setAttribute('id', 'smo238470');
smo238486v0ar.push(smo238470);
smo238486v0.addTickables(smo238486v0ar)
fmtsmo23848613.joinVoices([smo238486v0]);
const fmtsmo23944413 = new VF.Formatter();
//
// voices and notes for stave 3 13
const smo239444v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239444v0ar = [];
const smo239427 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo239427.setAttribute('id', 'smo239427');
smo239444v0ar.push(smo239427);
const smo239428 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo239428.setAttribute('id', 'smo239428');
smo239444v0ar.push(smo239428);
smo239444v0.addTickables(smo239444v0ar)
fmtsmo23944413.joinVoices([smo239444v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23646213.format([smo236462v0,smo237496v0,smo238486v0,smo239444v0], 184);
const stavesmo236462 = new VF.Stave(991, 598, 198);
stavesmo236462.setAttribute('id', 'stavesmo236462');
stavesmo236462.setBegBarType(VF.Barline.type.NONE);
stavesmo236462.setContext(context);
stavesmo236462.draw();
smo236462v0.draw(context, stavesmo236462);
const stavesmo237496 = new VF.Stave(991, 711, 198);
stavesmo237496.setAttribute('id', 'stavesmo237496');
stavesmo237496.setBegBarType(VF.Barline.type.NONE);
stavesmo237496.setContext(context);
stavesmo237496.draw();
smo237496v0.draw(context, stavesmo237496);
const stavesmo238486 = new VF.Stave(991, 794, 198);
stavesmo238486.setAttribute('id', 'stavesmo238486');
stavesmo238486.setBegBarType(VF.Barline.type.NONE);
stavesmo238486.setContext(context);
stavesmo238486.draw();
smo238486v0.draw(context, stavesmo238486);
const stavesmo239444 = new VF.Stave(991, 875, 198);
stavesmo239444.setAttribute('id', 'stavesmo239444');
stavesmo239444.setBegBarType(VF.Barline.type.NONE);
stavesmo239444.setContext(context);
stavesmo239444.draw();
smo239444v0.draw(context, stavesmo239444);
const fmtsmo23648814 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo236488v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236488v0ar = [];
const smo236463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo236463.setAttribute('id', 'smo236463');
const smo236464 = new VF.Annotation('co');
smo236464.setAttribute('id', 'smo236464');
smo236464.setFont('Merriweather', 12.1, 'normal');
smo236464.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236463.addModifier(smo236464);
smo236464.addClass('lyric lyric-0');
smo236488v0ar.push(smo236463);
const smo236465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236465.setAttribute('id', 'smo236465');
const smo236466 = new VF.Annotation('-');
smo236466.setAttribute('id', 'smo236466');
smo236466.setFont('Merriweather', 12.1, 'normal');
smo236466.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236465.addModifier(smo236466);
smo236466.addClass('lyric lyric-0 lyric-hyphen');
smo236488v0ar.push(smo236465);
const smo236467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo236467.setAttribute('id', 'smo236467');
const smo236468 = new VF.Annotation('-');
smo236468.setAttribute('id', 'smo236468');
smo236468.setFont('Merriweather', 12.1, 'normal');
smo236468.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236467.addModifier(smo236468);
smo236468.addClass('lyric lyric-0 lyric-hyphen');
smo236488v0ar.push(smo236467);
const smo236469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236469.setAttribute('id', 'smo236469');
const smo236470 = new VF.Annotation('по');
smo236470.setAttribute('id', 'smo236470');
smo236470.setFont('Merriweather', 12.1, 'normal');
smo236470.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236469.addModifier(smo236470);
smo236470.addClass('lyric lyric-0');
smo236488v0ar.push(smo236469);
const smo236471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo236471.setAttribute('id', 'smo236471');
const smo236472 = new VF.Annotation('-');
smo236472.setAttribute('id', 'smo236472');
smo236472.setFont('Merriweather', 12.1, 'normal');
smo236472.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236471.addModifier(smo236472);
smo236472.addClass('lyric lyric-0 lyric-hyphen');
smo236488v0ar.push(smo236471);
smo236488v0.addTickables(smo236488v0ar)
fmtsmo23648814.joinVoices([smo236488v0]);
const fmtsmo23751614 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo237516v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237516v0ar = [];
const smo237497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237497.setAttribute('id', 'smo237497');
smo237516v0ar.push(smo237497);
const smo237498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo237498.setAttribute('id', 'smo237498');
smo237516v0ar.push(smo237498);
const smo237499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237499.setAttribute('id', 'smo237499');
smo237516v0ar.push(smo237499);
const smo237500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo237500.setAttribute('id', 'smo237500');
smo237516v0ar.push(smo237500);
smo237516v0.addTickables(smo237516v0ar)
fmtsmo23751614.joinVoices([smo237516v0]);
const fmtsmo23850614 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo238506v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238506v0ar = [];
const smo238487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238487.setAttribute('id', 'smo238487');
smo238506v0ar.push(smo238487);
const smo238488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo238488.setAttribute('id', 'smo238488');
smo238506v0ar.push(smo238488);
const smo238489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238489.setAttribute('id', 'smo238489');
smo238506v0ar.push(smo238489);
const smo238490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo238490.setAttribute('id', 'smo238490');
smo238506v0ar.push(smo238490);
smo238506v0.addTickables(smo238506v0ar)
fmtsmo23850614.joinVoices([smo238506v0]);
const fmtsmo23946414 = new VF.Formatter();
//
// voices and notes for stave 3 14
const smo239464v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239464v0ar = [];
const smo239445 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo239445.setAttribute('id', 'smo239445');
smo239464v0ar.push(smo239445);
const smo239446 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239446.setAttribute('id', 'smo239446');
smo239464v0ar.push(smo239446);
const smo239447 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo239447.setAttribute('id', 'smo239447');
smo239464v0ar.push(smo239447);
const smo239448 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239448.setAttribute('id', 'smo239448');
smo239464v0ar.push(smo239448);
smo239464v0.addTickables(smo239464v0ar)
fmtsmo23946414.joinVoices([smo239464v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
const dirsmo246516 = smo236465.getStemDirection();
smo236465.setStemDirection(dirsmo246516);
smo236467.setStemDirection(dirsmo246516);
const smo246516 = new VF.Beam([smo236465,smo236467]);
 
// formatting measures in staff group smo240133
fmtsmo23648814.format([smo236488v0,smo237516v0,smo238506v0,smo239464v0], 169);
const stavesmo236488 = new VF.Stave(1189, 598, 183);
stavesmo236488.setAttribute('id', 'stavesmo236488');
stavesmo236488.setBegBarType(VF.Barline.type.NONE);
stavesmo236488.setContext(context);
stavesmo236488.draw();
smo236488v0.draw(context, stavesmo236488);
smo246516.setContext(context);
smo246516.draw();
const stavesmo237516 = new VF.Stave(1189, 711, 183);
stavesmo237516.setAttribute('id', 'stavesmo237516');
stavesmo237516.setBegBarType(VF.Barline.type.NONE);
stavesmo237516.setContext(context);
stavesmo237516.draw();
smo237516v0.draw(context, stavesmo237516);
const stavesmo238506 = new VF.Stave(1189, 794, 183);
stavesmo238506.setAttribute('id', 'stavesmo238506');
stavesmo238506.setBegBarType(VF.Barline.type.NONE);
stavesmo238506.setContext(context);
stavesmo238506.draw();
smo238506v0.draw(context, stavesmo238506);
const stavesmo239464 = new VF.Stave(1189, 875, 183);
stavesmo239464.setAttribute('id', 'stavesmo239464');
stavesmo239464.setBegBarType(VF.Barline.type.NONE);
stavesmo239464.setContext(context);
stavesmo239464.draw();
smo239464v0.draw(context, stavesmo239464);
const rightsmo240133stavesmo2364883 = new VF.StaveConnector(stavesmo236488, stavesmo239464).setType(0);
rightsmo240133stavesmo2364883.setContext(context).draw();
const fmtsmo23650715 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo236507v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236507v0ar = [];
const smo236489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo236489.setAttribute('id', 'smo236489');
smo236489.addModifier(new VF.Dot(), 0);
const smo236490 = new VF.Annotation('вей');
smo236490.setAttribute('id', 'smo236490');
smo236490.setFont('Merriweather', 12.1, 'normal');
smo236490.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236489.addModifier(smo236490);
smo236490.addClass('lyric lyric-0');
smo236507v0ar.push(smo236489);
const smo236491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236491.setAttribute('id', 'smo236491');
smo236507v0ar.push(smo236491);
smo236507v0.addTickables(smo236507v0ar)
fmtsmo23650715.joinVoices([smo236507v0]);
const fmtsmo23753615 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo237536v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237536v0ar = [];
const smo237517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237517.setAttribute('id', 'smo237517');
smo237536v0ar.push(smo237517);
const smo237518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo237518.setAttribute('id', 'smo237518');
smo237536v0ar.push(smo237518);
const smo237519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo237519.setAttribute('id', 'smo237519');
smo237536v0ar.push(smo237519);
const smo237520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo237520.setAttribute('id', 'smo237520');
smo237536v0ar.push(smo237520);
smo237536v0.addTickables(smo237536v0ar)
fmtsmo23753615.joinVoices([smo237536v0]);
const fmtsmo23852615 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo238526v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238526v0ar = [];
const smo238507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238507.setAttribute('id', 'smo238507');
smo238526v0ar.push(smo238507);
const smo238508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238508.setAttribute('id', 'smo238508');
smo238526v0ar.push(smo238508);
const smo238509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238509.setAttribute('id', 'smo238509');
smo238526v0ar.push(smo238509);
const smo238510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238510.setAttribute('id', 'smo238510');
smo238526v0ar.push(smo238510);
smo238526v0.addTickables(smo238526v0ar)
fmtsmo23852615.joinVoices([smo238526v0]);
const fmtsmo23948215 = new VF.Formatter();
//
// voices and notes for stave 3 15
const smo239482v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239482v0ar = [];
const smo239465 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo239465.setAttribute('id', 'smo239465');
smo239465.addModifier(new VF.Dot(), 0);
smo239482v0ar.push(smo239465);
const smo239466 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239466.setAttribute('id', 'smo239466');
smo239482v0ar.push(smo239466);
smo239482v0.addTickables(smo239482v0ar)
fmtsmo23948215.joinVoices([smo239482v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23650715.format([smo236507v0,smo237536v0,smo238526v0,smo239482v0], 226);
const stavesmo236507 = new VF.Stave(55, 1005, 300);
stavesmo236507.setAttribute('id', 'stavesmo236507');
stavesmo236507.setBegBarType(1);
stavesmo236507.addClef('treble');
const keysmo236507 = new VF.KeySignature('F');
keysmo236507.addToStave(stavesmo236507);
stavesmo236507.setContext(context);
stavesmo236507.draw();
smo236507v0.draw(context, stavesmo236507);
const stavesmo237536 = new VF.Stave(55, 1120, 300);
stavesmo237536.setAttribute('id', 'stavesmo237536');
stavesmo237536.setBegBarType(1);
stavesmo237536.addClef('treble');
const keysmo237536 = new VF.KeySignature('F');
keysmo237536.addToStave(stavesmo237536);
stavesmo237536.setContext(context);
stavesmo237536.draw();
smo237536v0.draw(context, stavesmo237536);
const stavesmo238526 = new VF.Stave(55, 1215, 300);
stavesmo238526.setAttribute('id', 'stavesmo238526');
stavesmo238526.setBegBarType(1);
stavesmo238526.addClef('treble');
const keysmo238526 = new VF.KeySignature('F');
keysmo238526.addToStave(stavesmo238526);
stavesmo238526.setContext(context);
stavesmo238526.draw();
smo238526v0.draw(context, stavesmo238526);
const stavesmo239482 = new VF.Stave(55, 1293, 300);
stavesmo239482.setAttribute('id', 'stavesmo239482');
stavesmo239482.setBegBarType(1);
stavesmo239482.addClef('bass');
const keysmo239482 = new VF.KeySignature('F');
keysmo239482.addToStave(stavesmo239482);
stavesmo239482.setContext(context);
stavesmo239482.draw();
smo239482v0.draw(context, stavesmo239482);
const leftsmo240133stavesmo2365073 = new VF.StaveConnector(stavesmo236507, stavesmo239482).setType(1);
leftsmo240133stavesmo2365073.setContext(context).draw();
const fmtsmo23652916 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo236529v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236529v0ar = [];
const smo236508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236508.setAttribute('id', 'smo236508');
const smo236509 = new VF.Annotation('Tы');
smo236509.setAttribute('id', 'smo236509');
smo236509.setFont('Merriweather', 12.1, 'normal');
smo236509.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236508.addModifier(smo236509);
smo236509.addClass('lyric lyric-0');
smo236529v0ar.push(smo236508);
const smo236510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo236510.setAttribute('id', 'smo236510');
const smo2365100acc = new VF.Accidental('n');
smo236510.addModifier(smo2365100acc, 0);
const smo236511 = new VF.Annotation('ку');
smo236511.setAttribute('id', 'smo236511');
smo236511.setFont('Merriweather', 12.1, 'normal');
smo236511.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236510.addModifier(smo236511);
smo236511.addClass('lyric lyric-0');
smo236529v0ar.push(smo236510);
const smo236512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo236512.setAttribute('id', 'smo236512');
const smo2365120acc = new VF.Accidental('#');
smo236512.addModifier(smo2365120acc, 0);
const smo236513 = new VF.Annotation('-');
smo236513.setAttribute('id', 'smo236513');
smo236513.setFont('Merriweather', 12.1, 'normal');
smo236513.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236512.addModifier(smo236513);
smo236513.addClass('lyric lyric-0 lyric-hyphen');
smo236529v0ar.push(smo236512);
smo236529v0.addTickables(smo236529v0ar)
fmtsmo23652916.joinVoices([smo236529v0]);
const fmtsmo23755616 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo237556v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237556v0ar = [];
const smo237537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237537.setAttribute('id', 'smo237537');
smo237556v0ar.push(smo237537);
const smo237538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237538.setAttribute('id', 'smo237538');
smo237556v0ar.push(smo237538);
const smo237539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237539.setAttribute('id', 'smo237539');
smo237556v0ar.push(smo237539);
const smo237540 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237540.setAttribute('id', 'smo237540');
smo237556v0ar.push(smo237540);
smo237556v0.addTickables(smo237556v0ar)
fmtsmo23755616.joinVoices([smo237556v0]);
const fmtsmo23854616 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo238546v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238546v0ar = [];
const smo238527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238527.setAttribute('id', 'smo238527');
smo238546v0ar.push(smo238527);
const smo238528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo238528.setAttribute('id', 'smo238528');
const smo2385280acc = new VF.Accidental('#');
smo238528.addModifier(smo2385280acc, 0);
smo238546v0ar.push(smo238528);
const smo238529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238529.setAttribute('id', 'smo238529');
smo238546v0ar.push(smo238529);
const smo238530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238530.setAttribute('id', 'smo238530');
smo238546v0ar.push(smo238530);
smo238546v0.addTickables(smo238546v0ar)
fmtsmo23854616.joinVoices([smo238546v0]);
const fmtsmo23950016 = new VF.Formatter();
//
// voices and notes for stave 3 16
const smo239500v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239500v0ar = [];
const smo239483 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239483.setAttribute('id', 'smo239483');
smo239500v0ar.push(smo239483);
const smo239484 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239484.setAttribute('id', 'smo239484');
smo239500v0ar.push(smo239484);
smo239500v0.addTickables(smo239500v0ar)
fmtsmo23950016.joinVoices([smo239500v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23652916.format([smo236529v0,smo237556v0,smo238546v0,smo239500v0], 258);
const stavesmo236529 = new VF.Stave(355, 1005, 272);
stavesmo236529.setAttribute('id', 'stavesmo236529');
stavesmo236529.setBegBarType(VF.Barline.type.NONE);
stavesmo236529.setContext(context);
stavesmo236529.draw();
smo236529v0.draw(context, stavesmo236529);
const stavesmo237556 = new VF.Stave(355, 1120, 272);
stavesmo237556.setAttribute('id', 'stavesmo237556');
stavesmo237556.setBegBarType(VF.Barline.type.NONE);
stavesmo237556.setContext(context);
stavesmo237556.draw();
smo237556v0.draw(context, stavesmo237556);
const stavesmo238546 = new VF.Stave(355, 1215, 272);
stavesmo238546.setAttribute('id', 'stavesmo238546');
stavesmo238546.setBegBarType(VF.Barline.type.NONE);
stavesmo238546.setContext(context);
stavesmo238546.draw();
smo238546v0.draw(context, stavesmo238546);
const stavesmo239500 = new VF.Stave(355, 1293, 272);
stavesmo239500.setAttribute('id', 'stavesmo239500');
stavesmo239500.setBegBarType(VF.Barline.type.NONE);
stavesmo239500.setContext(context);
stavesmo239500.draw();
smo239500v0.draw(context, stavesmo239500);
const fmtsmo23655117 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo236551v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236551v0ar = [];
const smo236530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236530.setAttribute('id', 'smo236530');
const smo236531 = new VF.Annotation('дa,');
smo236531.setAttribute('id', 'smo236531');
smo236531.setFont('Merriweather', 12.1, 'normal');
smo236531.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236530.addModifier(smo236531);
smo236531.addClass('lyric lyric-0');
smo236551v0ar.push(smo236530);
const smo236532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236532.setAttribute('id', 'smo236532');
const smo236533 = new VF.Annotation('ку');
smo236533.setAttribute('id', 'smo236533');
smo236533.setFont('Merriweather', 12.1, 'normal');
smo236533.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236532.addModifier(smo236533);
smo236533.addClass('lyric lyric-0');
smo236551v0ar.push(smo236532);
const smo236534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo236534.setAttribute('id', 'smo236534');
const smo236535 = new VF.Annotation('-');
smo236535.setAttribute('id', 'smo236535');
smo236535.setFont('Merriweather', 12.1, 'normal');
smo236535.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236534.addModifier(smo236535);
smo236535.addClass('lyric lyric-0 lyric-hyphen');
smo236551v0ar.push(smo236534);
smo236551v0.addTickables(smo236551v0ar)
fmtsmo23655117.joinVoices([smo236551v0]);
const fmtsmo23757617 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo237576v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237576v0ar = [];
const smo237557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237557.setAttribute('id', 'smo237557');
smo237576v0ar.push(smo237557);
const smo237558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237558.setAttribute('id', 'smo237558');
smo237576v0ar.push(smo237558);
const smo237559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237559.setAttribute('id', 'smo237559');
smo237576v0ar.push(smo237559);
const smo237560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo237560.setAttribute('id', 'smo237560');
smo237576v0ar.push(smo237560);
smo237576v0.addTickables(smo237576v0ar)
fmtsmo23757617.joinVoices([smo237576v0]);
const fmtsmo23856617 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo238566v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238566v0ar = [];
const smo238547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238547.setAttribute('id', 'smo238547');
smo238566v0ar.push(smo238547);
const smo238548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo238548.setAttribute('id', 'smo238548');
smo238566v0ar.push(smo238548);
const smo238549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo238549.setAttribute('id', 'smo238549');
smo238566v0ar.push(smo238549);
const smo238550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo238550.setAttribute('id', 'smo238550');
smo238566v0ar.push(smo238550);
smo238566v0.addTickables(smo238566v0ar)
fmtsmo23856617.joinVoices([smo238566v0]);
const fmtsmo23951917 = new VF.Formatter();
//
// voices and notes for stave 3 17
const smo239519v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239519v0ar = [];
const smo239501 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo239501.setAttribute('id', 'smo239501');
smo239519v0ar.push(smo239501);
const smo239502 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo239502.setAttribute('id', 'smo239502');
smo239519v0ar.push(smo239502);
const smo239503 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239503.setAttribute('id', 'smo239503');
smo239519v0ar.push(smo239503);
smo239519v0.addTickables(smo239519v0ar)
fmtsmo23951917.joinVoices([smo239519v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23655117.format([smo236551v0,smo237576v0,smo238566v0,smo239519v0], 234);
const stavesmo236551 = new VF.Stave(627, 1005, 248);
stavesmo236551.setAttribute('id', 'stavesmo236551');
stavesmo236551.setBegBarType(VF.Barline.type.NONE);
stavesmo236551.setContext(context);
stavesmo236551.draw();
smo236551v0.draw(context, stavesmo236551);
const stavesmo237576 = new VF.Stave(627, 1120, 248);
stavesmo237576.setAttribute('id', 'stavesmo237576');
stavesmo237576.setBegBarType(VF.Barline.type.NONE);
stavesmo237576.setContext(context);
stavesmo237576.draw();
smo237576v0.draw(context, stavesmo237576);
const stavesmo238566 = new VF.Stave(627, 1215, 248);
stavesmo238566.setAttribute('id', 'stavesmo238566');
stavesmo238566.setBegBarType(VF.Barline.type.NONE);
stavesmo238566.setContext(context);
stavesmo238566.draw();
smo238566v0.draw(context, stavesmo238566);
const stavesmo239519 = new VF.Stave(627, 1293, 248);
stavesmo239519.setAttribute('id', 'stavesmo239519');
stavesmo239519.setBegBarType(VF.Barline.type.NONE);
stavesmo239519.setContext(context);
stavesmo239519.draw();
smo239519v0.draw(context, stavesmo239519);
const fmtsmo23657318 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo236573v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236573v0ar = [];
const smo236552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo236552.setAttribute('id', 'smo236552');
const smo236553 = new VF.Annotation('да');
smo236553.setAttribute('id', 'smo236553');
smo236553.setFont('Merriweather', 12.1, 'normal');
smo236553.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236552.addModifier(smo236553);
smo236553.addClass('lyric lyric-0');
smo236573v0ar.push(smo236552);
const smo236554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo236554.setAttribute('id', 'smo236554');
smo236573v0ar.push(smo236554);
const smo236555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236555.setAttribute('id', 'smo236555');
const smo236556 = new VF.Annotation('ле');
smo236556.setAttribute('id', 'smo236556');
smo236556.setFont('Merriweather', 12.1, 'normal');
smo236556.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236555.addModifier(smo236556);
smo236556.addClass('lyric lyric-0 lyric-hyphen');
smo236573v0ar.push(smo236555);
const smo236557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236557.setAttribute('id', 'smo236557');
smo236573v0ar.push(smo236557);
smo236573v0.addTickables(smo236573v0ar)
fmtsmo23657318.joinVoices([smo236573v0]);
const fmtsmo23759618 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo237596v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237596v0ar = [];
const smo237577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237577.setAttribute('id', 'smo237577');
smo237596v0ar.push(smo237577);
const smo237578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237578.setAttribute('id', 'smo237578');
smo237596v0ar.push(smo237578);
const smo237579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237579.setAttribute('id', 'smo237579');
smo237596v0ar.push(smo237579);
const smo237580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237580.setAttribute('id', 'smo237580');
smo237596v0ar.push(smo237580);
smo237596v0.addTickables(smo237596v0ar)
fmtsmo23759618.joinVoices([smo237596v0]);
const fmtsmo23858618 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo238586v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238586v0ar = [];
const smo238567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238567.setAttribute('id', 'smo238567');
smo238586v0ar.push(smo238567);
const smo238568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo238568.setAttribute('id', 'smo238568');
smo238586v0ar.push(smo238568);
const smo238569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238569.setAttribute('id', 'smo238569');
smo238586v0ar.push(smo238569);
const smo238570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo238570.setAttribute('id', 'smo238570');
smo238586v0ar.push(smo238570);
smo238586v0.addTickables(smo238586v0ar)
fmtsmo23858618.joinVoices([smo238586v0]);
const fmtsmo23953718 = new VF.Formatter();
//
// voices and notes for stave 3 18
const smo239537v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239537v0ar = [];
const smo239520 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239520.setAttribute('id', 'smo239520');
smo239537v0ar.push(smo239520);
const smo239521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo239521.setAttribute('id', 'smo239521');
smo239537v0ar.push(smo239521);
smo239537v0.addTickables(smo239537v0ar)
fmtsmo23953718.joinVoices([smo239537v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23657318.format([smo236573v0,smo237596v0,smo238586v0,smo239537v0], 228);
const stavesmo236573 = new VF.Stave(875, 1005, 242);
stavesmo236573.setAttribute('id', 'stavesmo236573');
stavesmo236573.setBegBarType(VF.Barline.type.NONE);
stavesmo236573.setContext(context);
stavesmo236573.draw();
smo236573v0.draw(context, stavesmo236573);
const stavesmo237596 = new VF.Stave(875, 1120, 242);
stavesmo237596.setAttribute('id', 'stavesmo237596');
stavesmo237596.setBegBarType(VF.Barline.type.NONE);
stavesmo237596.setContext(context);
stavesmo237596.draw();
smo237596v0.draw(context, stavesmo237596);
const stavesmo238586 = new VF.Stave(875, 1215, 242);
stavesmo238586.setAttribute('id', 'stavesmo238586');
stavesmo238586.setBegBarType(VF.Barline.type.NONE);
stavesmo238586.setContext(context);
stavesmo238586.draw();
smo238586v0.draw(context, stavesmo238586);
const stavesmo239537 = new VF.Stave(875, 1293, 242);
stavesmo239537.setAttribute('id', 'stavesmo239537');
stavesmo239537.setBegBarType(VF.Barline.type.NONE);
stavesmo239537.setContext(context);
stavesmo239537.draw();
smo239537v0.draw(context, stavesmo239537);
const fmtsmo23659419 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo236594v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236594v0ar = [];
const smo236574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236574.setAttribute('id', 'smo236574');
const smo236575 = new VF.Annotation('тишь,');
smo236575.setAttribute('id', 'smo236575');
smo236575.setFont('Merriweather', 12.1, 'normal');
smo236575.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236574.addModifier(smo236575);
smo236575.addClass('lyric lyric-0');
smo236594v0ar.push(smo236574);
const smo236576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo236576.setAttribute('id', 'smo236576');
const smo236577 = new VF.Annotation('-');
smo236577.setAttribute('id', 'smo236577');
smo236577.setFont('Merriweather', 12.1, 'normal');
smo236577.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236576.addModifier(smo236577);
smo236577.addClass('lyric lyric-0 lyric-hyphen');
smo236594v0ar.push(smo236576);
const smo236578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236578.setAttribute('id', 'smo236578');
smo236594v0ar.push(smo236578);
smo236594v0.addTickables(smo236594v0ar)
fmtsmo23659419.joinVoices([smo236594v0]);
const fmtsmo23761619 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo237616v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237616v0ar = [];
const smo237597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237597.setAttribute('id', 'smo237597');
smo237616v0ar.push(smo237597);
const smo237598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo237598.setAttribute('id', 'smo237598');
smo237616v0ar.push(smo237598);
const smo237599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237599.setAttribute('id', 'smo237599');
smo237616v0ar.push(smo237599);
const smo237600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo237600.setAttribute('id', 'smo237600');
smo237616v0ar.push(smo237600);
smo237616v0.addTickables(smo237616v0ar)
fmtsmo23761619.joinVoices([smo237616v0]);
const fmtsmo23860619 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo238606v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238606v0ar = [];
const smo238587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238587.setAttribute('id', 'smo238587');
smo238606v0ar.push(smo238587);
const smo238588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo238588.setAttribute('id', 'smo238588');
smo238606v0ar.push(smo238588);
const smo238589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo238589.setAttribute('id', 'smo238589');
smo238606v0ar.push(smo238589);
const smo238590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo238590.setAttribute('id', 'smo238590');
smo238606v0ar.push(smo238590);
smo238606v0.addTickables(smo238606v0ar)
fmtsmo23860619.joinVoices([smo238606v0]);
const fmtsmo23955619 = new VF.Formatter();
//
// voices and notes for stave 3 19
const smo239556v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239556v0ar = [];
const smo239538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo239538.setAttribute('id', 'smo239538');
smo239556v0ar.push(smo239538);
const smo239539 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239539.setAttribute('id', 'smo239539');
smo239556v0ar.push(smo239539);
const smo239540 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo239540.setAttribute('id', 'smo239540');
smo239556v0ar.push(smo239540);
smo239556v0.addTickables(smo239556v0ar)
fmtsmo23955619.joinVoices([smo239556v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23659419.format([smo236594v0,smo237616v0,smo238606v0,smo239556v0], 245);
const stavesmo236594 = new VF.Stave(1117, 1005, 259);
stavesmo236594.setAttribute('id', 'stavesmo236594');
stavesmo236594.setBegBarType(VF.Barline.type.NONE);
stavesmo236594.setContext(context);
stavesmo236594.draw();
smo236594v0.draw(context, stavesmo236594);
const stavesmo237616 = new VF.Stave(1117, 1120, 259);
stavesmo237616.setAttribute('id', 'stavesmo237616');
stavesmo237616.setBegBarType(VF.Barline.type.NONE);
stavesmo237616.setContext(context);
stavesmo237616.draw();
smo237616v0.draw(context, stavesmo237616);
const stavesmo238606 = new VF.Stave(1117, 1215, 259);
stavesmo238606.setAttribute('id', 'stavesmo238606');
stavesmo238606.setBegBarType(VF.Barline.type.NONE);
stavesmo238606.setContext(context);
stavesmo238606.draw();
smo238606v0.draw(context, stavesmo238606);
const stavesmo239556 = new VF.Stave(1117, 1293, 259);
stavesmo239556.setAttribute('id', 'stavesmo239556');
stavesmo239556.setBegBarType(VF.Barline.type.NONE);
stavesmo239556.setContext(context);
stavesmo239556.draw();
smo239556v0.draw(context, stavesmo239556);
const rightsmo240133stavesmo2365943 = new VF.StaveConnector(stavesmo236594, stavesmo239556).setType(0);
rightsmo240133stavesmo2365943.setContext(context).draw();
const fmtsmo23661920 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo236619v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236619v0ar = [];
const smo236595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo236595.setAttribute('id', 'smo236595');
const smo2365950acc = new VF.Accidental('n');
smo236595.addModifier(smo2365950acc, 0);
smo236595.addModifier(new VF.Dot(), 0);
const smo236596 = new VF.Annotation('где');
smo236596.setAttribute('id', 'smo236596');
smo236596.setFont('Merriweather', 12.1, 'normal');
smo236596.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236595.addModifier(smo236596);
smo236596.addClass('lyric lyric-0');
smo236619v0ar.push(smo236595);
const smo236597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo236597.setAttribute('id', 'smo236597');
const smo236598 = new VF.Annotation('-');
smo236598.setAttribute('id', 'smo236598');
smo236598.setFont('Merriweather', 12.1, 'normal');
smo236598.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236597.addModifier(smo236598);
smo236598.addClass('lyric lyric-0 lyric-hyphen');
smo236619v0ar.push(smo236597);
const smo236599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236599.setAttribute('id', 'smo236599');
smo236619v0ar.push(smo236599);
const smo236600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo236600.setAttribute('id', 'smo236600');
const smo236601 = new VF.Annotation('вс');
smo236601.setAttribute('id', 'smo236601');
smo236601.setFont('Merriweather', 12.1, 'normal');
smo236601.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236600.addModifier(smo236601);
smo236601.addClass('lyric lyric-0 lyric-hyphen');
smo236619v0ar.push(smo236600);
const smo236602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo236602.setAttribute('id', 'smo236602');
const smo236603 = new VF.Annotation('ю');
smo236603.setAttribute('id', 'smo236603');
smo236603.setFont('Merriweather', 12.1, 'normal');
smo236603.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236602.addModifier(smo236603);
smo236603.addClass('lyric lyric-0');
smo236619v0ar.push(smo236602);
smo236619v0.addTickables(smo236619v0ar)
fmtsmo23661920.joinVoices([smo236619v0]);
const fmtsmo23763620 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo237636v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237636v0ar = [];
const smo237617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237617.setAttribute('id', 'smo237617');
smo237636v0ar.push(smo237617);
const smo237618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo237618.setAttribute('id', 'smo237618');
smo237636v0ar.push(smo237618);
const smo237619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237619.setAttribute('id', 'smo237619');
smo237636v0ar.push(smo237619);
const smo237620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo237620.setAttribute('id', 'smo237620');
const smo2376200acc = new VF.Accidental('#');
smo237620.addModifier(smo2376200acc, 0);
smo237636v0ar.push(smo237620);
smo237636v0.addTickables(smo237636v0ar)
fmtsmo23763620.joinVoices([smo237636v0]);
const fmtsmo23862620 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo238626v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238626v0ar = [];
const smo238607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238607.setAttribute('id', 'smo238607');
smo238626v0ar.push(smo238607);
const smo238608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo238608.setAttribute('id', 'smo238608');
smo238626v0ar.push(smo238608);
const smo238609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238609.setAttribute('id', 'smo238609');
smo238626v0ar.push(smo238609);
const smo238610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo238610.setAttribute('id', 'smo238610');
smo238626v0ar.push(smo238610);
smo238626v0.addTickables(smo238626v0ar)
fmtsmo23862620.joinVoices([smo238626v0]);
const fmtsmo23957620 = new VF.Formatter();
//
// voices and notes for stave 3 20
const smo239576v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239576v0ar = [];
const smo239557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo239557.setAttribute('id', 'smo239557');
smo239576v0ar.push(smo239557);
const smo239558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239558.setAttribute('id', 'smo239558');
smo239576v0ar.push(smo239558);
const smo239559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo239559.setAttribute('id', 'smo239559');
smo239576v0ar.push(smo239559);
const smo239560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239560.setAttribute('id', 'smo239560');
smo239576v0ar.push(smo239560);
smo239576v0.addTickables(smo239576v0ar)
fmtsmo23957620.joinVoices([smo239576v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
const dirsmo246582 = smo236597.getStemDirection();
smo236597.setStemDirection(dirsmo246582);
smo236599.setStemDirection(dirsmo246582);
const smo246582 = new VF.Beam([smo236597,smo236599]);
 
// formatting measures in staff group smo240133
fmtsmo23661920.format([smo236619v0,smo237636v0,smo238626v0,smo239576v0], 219);
const stavesmo236619 = new VF.Stave(55, 1423, 294);
stavesmo236619.setAttribute('id', 'stavesmo236619');
stavesmo236619.setBegBarType(1);
stavesmo236619.addClef('treble');
const keysmo236619 = new VF.KeySignature('F');
keysmo236619.addToStave(stavesmo236619);
stavesmo236619.setContext(context);
stavesmo236619.draw();
smo236619v0.draw(context, stavesmo236619);
smo246582.setContext(context);
smo246582.draw();
const stavesmo237636 = new VF.Stave(55, 1534, 294);
stavesmo237636.setAttribute('id', 'stavesmo237636');
stavesmo237636.setBegBarType(1);
stavesmo237636.addClef('treble');
const keysmo237636 = new VF.KeySignature('F');
keysmo237636.addToStave(stavesmo237636);
stavesmo237636.setContext(context);
stavesmo237636.draw();
smo237636v0.draw(context, stavesmo237636);
const stavesmo238626 = new VF.Stave(55, 1617, 294);
stavesmo238626.setAttribute('id', 'stavesmo238626');
stavesmo238626.setBegBarType(1);
stavesmo238626.addClef('treble');
const keysmo238626 = new VF.KeySignature('F');
keysmo238626.addToStave(stavesmo238626);
stavesmo238626.setContext(context);
stavesmo238626.draw();
smo238626v0.draw(context, stavesmo238626);
const stavesmo239576 = new VF.Stave(55, 1711, 294);
stavesmo239576.setAttribute('id', 'stavesmo239576');
stavesmo239576.setBegBarType(1);
stavesmo239576.addClef('bass');
const keysmo239576 = new VF.KeySignature('F');
keysmo239576.addToStave(stavesmo239576);
stavesmo239576.setContext(context);
stavesmo239576.draw();
smo239576v0.draw(context, stavesmo239576);
const leftsmo240133stavesmo2366193 = new VF.StaveConnector(stavesmo236619, stavesmo239576).setType(1);
leftsmo240133stavesmo2366193.setContext(context).draw();
const fmtsmo23664121 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo236641v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236641v0ar = [];
const smo236620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236620.setAttribute('id', 'smo236620');
const smo236621 = new VF.Annotation('ноч');
smo236621.setAttribute('id', 'smo236621');
smo236621.setFont('Merriweather', 12.1, 'normal');
smo236621.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236620.addModifier(smo236621);
smo236621.addClass('lyric lyric-0 lyric-hyphen');
smo236641v0ar.push(smo236620);
const smo236622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236622.setAttribute('id', 'smo236622');
const smo236623 = new VF.Annotation('ку');
smo236623.setAttribute('id', 'smo236623');
smo236623.setFont('Merriweather', 12.1, 'normal');
smo236623.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236622.addModifier(smo236623);
smo236623.addClass('lyric lyric-0');
smo236641v0ar.push(smo236622);
const smo236624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236624.setAttribute('id', 'smo236624');
const smo236625 = new VF.Annotation('про');
smo236625.setAttribute('id', 'smo236625');
smo236625.setFont('Merriweather', 12.1, 'normal');
smo236625.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236624.addModifier(smo236625);
smo236625.addClass('lyric lyric-0');
smo236641v0ar.push(smo236624);
smo236641v0.addTickables(smo236641v0ar)
fmtsmo23664121.joinVoices([smo236641v0]);
const fmtsmo23765621 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo237656v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237656v0ar = [];
const smo237637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237637.setAttribute('id', 'smo237637');
smo237656v0ar.push(smo237637);
const smo237638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237638.setAttribute('id', 'smo237638');
smo237656v0ar.push(smo237638);
const smo237639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237639.setAttribute('id', 'smo237639');
smo237656v0ar.push(smo237639);
const smo237640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237640.setAttribute('id', 'smo237640');
smo237656v0ar.push(smo237640);
smo237656v0.addTickables(smo237656v0ar)
fmtsmo23765621.joinVoices([smo237656v0]);
const fmtsmo23864621 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo238646v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238646v0ar = [];
const smo238627 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238627.setAttribute('id', 'smo238627');
smo238646v0ar.push(smo238627);
const smo238628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo238628.setAttribute('id', 'smo238628');
smo238646v0ar.push(smo238628);
const smo238629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238629.setAttribute('id', 'smo238629');
smo238646v0ar.push(smo238629);
const smo238630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo238630.setAttribute('id', 'smo238630');
smo238646v0ar.push(smo238630);
smo238646v0.addTickables(smo238646v0ar)
fmtsmo23864621.joinVoices([smo238646v0]);
const fmtsmo23959621 = new VF.Formatter();
//
// voices and notes for stave 3 21
const smo239596v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239596v0ar = [];
const smo239577 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239577.setAttribute('id', 'smo239577');
smo239596v0ar.push(smo239577);
const smo239578 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239578.setAttribute('id', 'smo239578');
smo239596v0ar.push(smo239578);
const smo239579 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo239579.setAttribute('id', 'smo239579');
smo239596v0ar.push(smo239579);
const smo239580 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239580.setAttribute('id', 'smo239580');
smo239596v0ar.push(smo239580);
smo239596v0.addTickables(smo239596v0ar)
fmtsmo23959621.joinVoices([smo239596v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23664121.format([smo236641v0,smo237656v0,smo238646v0,smo239596v0], 198);
const stavesmo236641 = new VF.Stave(349, 1423, 212);
stavesmo236641.setAttribute('id', 'stavesmo236641');
stavesmo236641.setBegBarType(VF.Barline.type.NONE);
stavesmo236641.setContext(context);
stavesmo236641.draw();
smo236641v0.draw(context, stavesmo236641);
const stavesmo237656 = new VF.Stave(349, 1534, 212);
stavesmo237656.setAttribute('id', 'stavesmo237656');
stavesmo237656.setBegBarType(VF.Barline.type.NONE);
stavesmo237656.setContext(context);
stavesmo237656.draw();
smo237656v0.draw(context, stavesmo237656);
const stavesmo238646 = new VF.Stave(349, 1617, 212);
stavesmo238646.setAttribute('id', 'stavesmo238646');
stavesmo238646.setBegBarType(VF.Barline.type.NONE);
stavesmo238646.setContext(context);
stavesmo238646.draw();
smo238646v0.draw(context, stavesmo238646);
const stavesmo239596 = new VF.Stave(349, 1711, 212);
stavesmo239596.setAttribute('id', 'stavesmo239596');
stavesmo239596.setBegBarType(VF.Barline.type.NONE);
stavesmo239596.setContext(context);
stavesmo239596.draw();
smo239596v0.draw(context, stavesmo239596);
const fmtsmo23667122 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo236671v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236671v0ar = [];
const smo236642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236642.setAttribute('id', 'smo236642');
const smo236643 = new VF.Annotation('-');
smo236643.setAttribute('id', 'smo236643');
smo236643.setFont('Merriweather', 12.1, 'normal');
smo236643.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236642.addModifier(smo236643);
smo236643.addClass('lyric lyric-0 lyric-hyphen');
smo236671v0ar.push(smo236642);
const smo236644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo236644.setAttribute('id', 'smo236644');
const smo236645 = new VF.Annotation('-');
smo236645.setAttribute('id', 'smo236645');
smo236645.setFont('Merriweather', 12.1, 'normal');
smo236645.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236644.addModifier(smo236645);
smo236645.addClass('lyric lyric-0 lyric-hyphen');
smo236671v0ar.push(smo236644);
const smo236646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236646.setAttribute('id', 'smo236646');
const smo236647 = new VF.Annotation('-');
smo236647.setAttribute('id', 'smo236647');
smo236647.setFont('Merriweather', 12.1, 'normal');
smo236647.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236646.addModifier(smo236647);
smo236647.addClass('lyric lyric-0 lyric-hyphen');
smo236671v0ar.push(smo236646);
const smo236648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo236648.setAttribute('id', 'smo236648');
const smo2366480acc = new VF.Accidental('#');
smo236648.addModifier(smo2366480acc, 0);
const smo236649 = new VF.Annotation('-');
smo236649.setAttribute('id', 'smo236649');
smo236649.setFont('Merriweather', 12.1, 'normal');
smo236649.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236648.addModifier(smo236649);
smo236649.addClass('lyric lyric-0 lyric-hyphen');
smo236671v0ar.push(smo236648);
const smo236650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236650.setAttribute('id', 'smo236650');
const smo236651 = new VF.Annotation('-');
smo236651.setAttribute('id', 'smo236651');
smo236651.setFont('Merriweather', 12.1, 'normal');
smo236651.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236650.addModifier(smo236651);
smo236651.addClass('lyric lyric-0 lyric-hyphen');
smo236671v0ar.push(smo236650);
const smo236652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo236652.setAttribute('id', 'smo236652');
const smo2366520acc = new VF.Accidental('n');
smo236652.addModifier(smo2366520acc, 0);
const smo236653 = new VF.Annotation('-');
smo236653.setAttribute('id', 'smo236653');
smo236653.setFont('Merriweather', 12.1, 'normal');
smo236653.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236652.addModifier(smo236653);
smo236653.addClass('lyric lyric-0 lyric-hyphen');
smo236671v0ar.push(smo236652);
const smo236654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo236654.setAttribute('id', 'smo236654');
const smo2366540acc = new VF.Accidental('#');
smo236654.addModifier(smo2366540acc, 0);
const smo236655 = new VF.Annotation('по');
smo236655.setAttribute('id', 'smo236655');
smo236655.setFont('Merriweather', 12.1, 'normal');
smo236655.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236654.addModifier(smo236655);
smo236655.addClass('lyric lyric-0 lyric-hyphen');
smo236671v0ar.push(smo236654);
smo236671v0.addTickables(smo236671v0ar)
fmtsmo23667122.joinVoices([smo236671v0]);
const fmtsmo23767422 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo237674v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237674v0ar = [];
const smo237657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237657.setAttribute('id', 'smo237657');
smo237674v0ar.push(smo237657);
const smo237658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo237658.setAttribute('id', 'smo237658');
const smo2376580acc = new VF.Accidental('#');
smo237658.addModifier(smo2376580acc, 0);
smo237658.addModifier(new VF.Dot(), 0);
smo237674v0ar.push(smo237658);
smo237674v0.addTickables(smo237674v0ar)
fmtsmo23767422.joinVoices([smo237674v0]);
const fmtsmo23866422 = new VF.Formatter();
//
// voices and notes for stave 2 22
const smo238664v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238664v0ar = [];
const smo238647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238647.setAttribute('id', 'smo238647');
smo238664v0ar.push(smo238647);
const smo238648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238648.setAttribute('id', 'smo238648');
smo238648.addModifier(new VF.Dot(), 0);
smo238664v0ar.push(smo238648);
smo238664v0.addTickables(smo238664v0ar)
fmtsmo23866422.joinVoices([smo238664v0]);
const fmtsmo23961322 = new VF.Formatter();
//
// voices and notes for stave 3 22
const smo239613v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239613v0ar = [];
const smo239597 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239597.setAttribute('id', 'smo239597');
smo239613v0ar.push(smo239597);
smo239613v0.addTickables(smo239613v0ar)
fmtsmo23961322.joinVoices([smo239613v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
const dirsmo246599 = smo236644.getStemDirection();
smo236644.setStemDirection(dirsmo246599);
smo236646.setStemDirection(dirsmo246599);
smo236648.setStemDirection(dirsmo246599);
smo236650.setStemDirection(dirsmo246599);
const smo246599 = new VF.Beam([smo236644,smo236646,smo236648,smo236650]);
 
// formatting measures in staff group smo240133
fmtsmo23667122.format([smo236671v0,smo237674v0,smo238664v0,smo239613v0], 255);
const stavesmo236671 = new VF.Stave(561, 1423, 269);
stavesmo236671.setAttribute('id', 'stavesmo236671');
stavesmo236671.setBegBarType(VF.Barline.type.NONE);
stavesmo236671.setContext(context);
stavesmo236671.draw();
smo236671v0.draw(context, stavesmo236671);
smo246599.setContext(context);
smo246599.draw();
const stavesmo237674 = new VF.Stave(561, 1534, 269);
stavesmo237674.setAttribute('id', 'stavesmo237674');
stavesmo237674.setBegBarType(VF.Barline.type.NONE);
stavesmo237674.setContext(context);
stavesmo237674.draw();
smo237674v0.draw(context, stavesmo237674);
const stavesmo238664 = new VF.Stave(561, 1617, 269);
stavesmo238664.setAttribute('id', 'stavesmo238664');
stavesmo238664.setBegBarType(VF.Barline.type.NONE);
stavesmo238664.setContext(context);
stavesmo238664.draw();
smo238664v0.draw(context, stavesmo238664);
const stavesmo239613 = new VF.Stave(561, 1711, 269);
stavesmo239613.setAttribute('id', 'stavesmo239613');
stavesmo239613.setBegBarType(VF.Barline.type.NONE);
stavesmo239613.setContext(context);
stavesmo239613.draw();
smo239613v0.draw(context, stavesmo239613);
const fmtsmo23669023 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo236690v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236690v0ar = [];
const smo236672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236672.setAttribute('id', 'smo236672');
smo236672.addModifier(new VF.Dot(), 0);
const smo236673 = new VF.Annotation('ешь');
smo236673.setAttribute('id', 'smo236673');
smo236673.setFont('Merriweather', 12.1, 'normal');
smo236673.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236672.addModifier(smo236673);
smo236673.addClass('lyric lyric-0');
smo236690v0ar.push(smo236672);
const smo236674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236674.setAttribute('id', 'smo236674');
smo236690v0ar.push(smo236674);
smo236690v0.addTickables(smo236690v0ar)
fmtsmo23669023.joinVoices([smo236690v0]);
const fmtsmo23769223 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo237692v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237692v0ar = [];
const smo237675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237675.setAttribute('id', 'smo237675');
smo237675.addModifier(new VF.Dot(), 0);
smo237692v0ar.push(smo237675);
const smo237676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237676.setAttribute('id', 'smo237676');
smo237692v0ar.push(smo237676);
smo237692v0.addTickables(smo237692v0ar)
fmtsmo23769223.joinVoices([smo237692v0]);
const fmtsmo23868223 = new VF.Formatter();
//
// voices and notes for stave 2 23
const smo238682v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238682v0ar = [];
const smo238665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo238665.setAttribute('id', 'smo238665');
smo238665.addModifier(new VF.Dot(), 0);
smo238682v0ar.push(smo238665);
const smo238666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238666.setAttribute('id', 'smo238666');
smo238682v0ar.push(smo238666);
smo238682v0.addTickables(smo238682v0ar)
fmtsmo23868223.joinVoices([smo238682v0]);
const fmtsmo23963123 = new VF.Formatter();
//
// voices and notes for stave 3 23
const smo239631v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239631v0ar = [];
const smo239614 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239614.setAttribute('id', 'smo239614');
smo239614.addModifier(new VF.Dot(), 0);
smo239631v0ar.push(smo239614);
const smo239615 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239615.setAttribute('id', 'smo239615');
smo239631v0ar.push(smo239615);
smo239631v0.addTickables(smo239631v0ar)
fmtsmo23963123.joinVoices([smo239631v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23669023.format([smo236690v0,smo237692v0,smo238682v0,smo239631v0], 88);
const stavesmo236690 = new VF.Stave(830, 1423, 102);
stavesmo236690.setAttribute('id', 'stavesmo236690');
stavesmo236690.setBegBarType(VF.Barline.type.NONE);
stavesmo236690.setContext(context);
stavesmo236690.draw();
smo236690v0.draw(context, stavesmo236690);
const stavesmo237692 = new VF.Stave(830, 1534, 102);
stavesmo237692.setAttribute('id', 'stavesmo237692');
stavesmo237692.setBegBarType(VF.Barline.type.NONE);
stavesmo237692.setContext(context);
stavesmo237692.draw();
smo237692v0.draw(context, stavesmo237692);
const stavesmo238682 = new VF.Stave(830, 1617, 102);
stavesmo238682.setAttribute('id', 'stavesmo238682');
stavesmo238682.setBegBarType(VF.Barline.type.NONE);
stavesmo238682.setContext(context);
stavesmo238682.draw();
smo238682v0.draw(context, stavesmo238682);
const stavesmo239631 = new VF.Stave(830, 1711, 102);
stavesmo239631.setAttribute('id', 'stavesmo239631');
stavesmo239631.setBegBarType(VF.Barline.type.NONE);
stavesmo239631.setContext(context);
stavesmo239631.draw();
smo239631v0.draw(context, stavesmo239631);
const fmtsmo23672024 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo236720v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236720v0ar = [];
const smo236691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236691.setAttribute('id', 'smo236691');
const smo236692 = new VF.Annotation('Со');
smo236692.setAttribute('id', 'smo236692');
smo236692.setFont('Merriweather', 12.1, 'normal');
smo236692.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236691.addModifier(smo236692);
smo236692.addClass('lyric lyric-0');
smo236720v0ar.push(smo236691);
const smo236693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo236693.setAttribute('id', 'smo236693');
const smo236694 = new VF.Annotation('-');
smo236694.setAttribute('id', 'smo236694');
smo236694.setFont('Merriweather', 12.1, 'normal');
smo236694.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236693.addModifier(smo236694);
smo236694.addClass('lyric lyric-0 lyric-hyphen');
smo236720v0ar.push(smo236693);
const smo236695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236695.setAttribute('id', 'smo236695');
const smo236696 = new VF.Annotation('-');
smo236696.setAttribute('id', 'smo236696');
smo236696.setFont('Merriweather', 12.1, 'normal');
smo236696.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236695.addModifier(smo236696);
smo236696.addClass('lyric lyric-0 lyric-hyphen');
smo236720v0ar.push(smo236695);
const smo236697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["d#/5/n"]}'))
smo236697.setAttribute('id', 'smo236697');
const smo2366970acc = new VF.Accidental('#');
smo236697.addModifier(smo2366970acc, 0);
const smo236698 = new VF.Annotation('-');
smo236698.setAttribute('id', 'smo236698');
smo236698.setFont('Merriweather', 12.1, 'normal');
smo236698.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236697.addModifier(smo236698);
smo236698.addClass('lyric lyric-0 lyric-hyphen');
smo236720v0ar.push(smo236697);
const smo236699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236699.setAttribute('id', 'smo236699');
const smo236700 = new VF.Annotation('-');
smo236700.setAttribute('id', 'smo236700');
smo236700.setFont('Merriweather', 12.1, 'normal');
smo236700.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236699.addModifier(smo236700);
smo236700.addClass('lyric lyric-0 lyric-hyphen');
smo236720v0ar.push(smo236699);
const smo236701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo236701.setAttribute('id', 'smo236701');
const smo236702 = new VF.Annotation('лo');
smo236702.setAttribute('id', 'smo236702');
smo236702.setFont('Merriweather', 12.1, 'normal');
smo236702.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236701.addModifier(smo236702);
smo236702.addClass('lyric lyric-0');
smo236720v0ar.push(smo236701);
const smo236703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236703.setAttribute('id', 'smo236703');
const smo236704 = new VF.Annotation('-');
smo236704.setAttribute('id', 'smo236704');
smo236704.setFont('Merriweather', 12.1, 'normal');
smo236704.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236703.addModifier(smo236704);
smo236704.addClass('lyric lyric-0 lyric-hyphen');
smo236720v0ar.push(smo236703);
smo236720v0.addTickables(smo236720v0ar)
fmtsmo23672024.joinVoices([smo236720v0]);
const fmtsmo23771324 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo237713v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237713v0ar = [];
const smo237693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237693.setAttribute('id', 'smo237693');
smo237713v0ar.push(smo237693);
const smo237694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237694.setAttribute('id', 'smo237694');
const smo237695 = new VF.Ornament('mordent_inverted');
smo237694.addModifier(smo237695, 0);
smo237713v0ar.push(smo237694);
const smo237696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo237696.setAttribute('id', 'smo237696');
const smo2376960acc = new VF.Accidental('#');
smo237696.addModifier(smo2376960acc, 0);
smo237713v0ar.push(smo237696);
const smo237697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237697.setAttribute('id', 'smo237697');
smo237713v0ar.push(smo237697);
smo237713v0.addTickables(smo237713v0ar)
fmtsmo23771324.joinVoices([smo237713v0]);
const fmtsmo23869924 = new VF.Formatter();
//
// voices and notes for stave 2 24
const smo238699v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238699v0ar = [];
const smo238683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238683.setAttribute('id', 'smo238683');
smo238699v0ar.push(smo238683);
smo238699v0.addTickables(smo238699v0ar)
fmtsmo23869924.joinVoices([smo238699v0]);
const fmtsmo23965124 = new VF.Formatter();
//
// voices and notes for stave 3 24
const smo239651v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239651v0ar = [];
const smo239632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239632.setAttribute('id', 'smo239632');
smo239651v0ar.push(smo239632);
const smo239633 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239633.setAttribute('id', 'smo239633');
smo239651v0ar.push(smo239633);
const smo239634 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239634.setAttribute('id', 'smo239634');
smo239651v0ar.push(smo239634);
const smo239635 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239635.setAttribute('id', 'smo239635');
smo239651v0ar.push(smo239635);
smo239651v0.addTickables(smo239651v0ar)
fmtsmo23965124.joinVoices([smo239651v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
const dirsmo246616 = smo236693.getStemDirection();
smo236693.setStemDirection(dirsmo246616);
smo236695.setStemDirection(dirsmo246616);
smo236697.setStemDirection(dirsmo246616);
smo236699.setStemDirection(dirsmo246616);
const smo246616 = new VF.Beam([smo236693,smo236695,smo236697,smo236699]);
 
// formatting measures in staff group smo240133
fmtsmo23672024.format([smo236720v0,smo237713v0,smo238699v0,smo239651v0], 237);
const stavesmo236720 = new VF.Stave(932, 1423, 251);
stavesmo236720.setAttribute('id', 'stavesmo236720');
stavesmo236720.setBegBarType(VF.Barline.type.NONE);
stavesmo236720.setContext(context);
stavesmo236720.draw();
smo236720v0.draw(context, stavesmo236720);
smo246616.setContext(context);
smo246616.draw();
const stavesmo237713 = new VF.Stave(932, 1534, 251);
stavesmo237713.setAttribute('id', 'stavesmo237713');
stavesmo237713.setBegBarType(VF.Barline.type.NONE);
stavesmo237713.setContext(context);
stavesmo237713.draw();
smo237713v0.draw(context, stavesmo237713);
const stavesmo238699 = new VF.Stave(932, 1617, 251);
stavesmo238699.setAttribute('id', 'stavesmo238699');
stavesmo238699.setBegBarType(VF.Barline.type.NONE);
stavesmo238699.setContext(context);
stavesmo238699.draw();
smo238699v0.draw(context, stavesmo238699);
const stavesmo239651 = new VF.Stave(932, 1711, 251);
stavesmo239651.setAttribute('id', 'stavesmo239651');
stavesmo239651.setBegBarType(VF.Barline.type.NONE);
stavesmo239651.setContext(context);
stavesmo239651.draw();
smo239651v0.draw(context, stavesmo239651);
const fmtsmo23674025 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo236740v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236740v0ar = [];
const smo236721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236721.setAttribute('id', 'smo236721');
const smo236722 = new VF.Annotation('вей');
smo236722.setAttribute('id', 'smo236722');
smo236722.setFont('Merriweather', 12.1, 'normal');
smo236722.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236721.addModifier(smo236722);
smo236722.addClass('lyric lyric-0');
smo236740v0ar.push(smo236721);
const smo236723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236723.setAttribute('id', 'smo236723');
const smo236724 = new VF.Annotation('мой');
smo236724.setAttribute('id', 'smo236724');
smo236724.setFont('Merriweather', 12.1, 'normal');
smo236724.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236723.addModifier(smo236724);
smo236724.addClass('lyric lyric-0');
smo236740v0ar.push(smo236723);
smo236740v0.addTickables(smo236740v0ar)
fmtsmo23674025.joinVoices([smo236740v0]);
const fmtsmo23773425 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo237734v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237734v0ar = [];
const smo237714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237714.setAttribute('id', 'smo237714');
smo237734v0ar.push(smo237714);
const smo237715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237715.setAttribute('id', 'smo237715');
const smo237716 = new VF.Ornament('mordent_inverted');
smo237715.addModifier(smo237716, 0);
smo237734v0ar.push(smo237715);
const smo237717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237717.setAttribute('id', 'smo237717');
smo237734v0ar.push(smo237717);
const smo237718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237718.setAttribute('id', 'smo237718');
smo237734v0ar.push(smo237718);
smo237734v0.addTickables(smo237734v0ar)
fmtsmo23773425.joinVoices([smo237734v0]);
const fmtsmo23871625 = new VF.Formatter();
//
// voices and notes for stave 2 25
const smo238716v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238716v0ar = [];
const smo238700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238700.setAttribute('id', 'smo238700');
smo238716v0ar.push(smo238700);
smo238716v0.addTickables(smo238716v0ar)
fmtsmo23871625.joinVoices([smo238716v0]);
const fmtsmo23966925 = new VF.Formatter();
//
// voices and notes for stave 3 25
const smo239669v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239669v0ar = [];
const smo239652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239652.setAttribute('id', 'smo239652');
smo239669v0ar.push(smo239652);
const smo239653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239653.setAttribute('id', 'smo239653');
smo239669v0ar.push(smo239653);
smo239669v0.addTickables(smo239669v0ar)
fmtsmo23966925.joinVoices([smo239669v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23674025.format([smo236740v0,smo237734v0,smo238716v0,smo239669v0], 177);
const stavesmo236740 = new VF.Stave(1183, 1423, 191);
stavesmo236740.setAttribute('id', 'stavesmo236740');
stavesmo236740.setBegBarType(VF.Barline.type.NONE);
stavesmo236740.setContext(context);
stavesmo236740.draw();
smo236740v0.draw(context, stavesmo236740);
const stavesmo237734 = new VF.Stave(1183, 1534, 191);
stavesmo237734.setAttribute('id', 'stavesmo237734');
stavesmo237734.setBegBarType(VF.Barline.type.NONE);
stavesmo237734.setContext(context);
stavesmo237734.draw();
smo237734v0.draw(context, stavesmo237734);
const stavesmo238716 = new VF.Stave(1183, 1617, 191);
stavesmo238716.setAttribute('id', 'stavesmo238716');
stavesmo238716.setBegBarType(VF.Barline.type.NONE);
stavesmo238716.setContext(context);
stavesmo238716.draw();
smo238716v0.draw(context, stavesmo238716);
const stavesmo239669 = new VF.Stave(1183, 1711, 191);
stavesmo239669.setAttribute('id', 'stavesmo239669');
stavesmo239669.setBegBarType(VF.Barline.type.NONE);
stavesmo239669.setContext(context);
stavesmo239669.draw();
smo239669v0.draw(context, stavesmo239669);
const rightsmo240133stavesmo2367403 = new VF.StaveConnector(stavesmo236740, stavesmo239669).setType(0);
rightsmo240133stavesmo2367403.setContext(context).draw();
// modifier from 0-18-0-0 to 0-18-0-1
const smo247469 = new VF.Curve(smo236552, smo236554, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":45},{"x":0,"y":45}],"invert":false,"position":2,"position_end":1}'));
smo247469.setContext(context).draw();
// modifier from 0-22-0-0 to 0-23-0-0
const smo247470 = new VF.TextBracket({ start: smo236642, stop: smo236672, text: 'ritard', position: 1 });
smo247470.setLine(1).setContext(context).draw();
// modifier from 2-24-0-0 to 2-25-0-0
const smo247471 = new VF.StaveTie({ first_note: smo238683, last_note: smo238700, 
          firstNote: smo238683, lastNote: smo238700, first_indices: [0], last_indices: [0]});
smo247471.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo236337').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236339').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236357').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo236359').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236361').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236379').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236401').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo236420').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236422').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo236424').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236442').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236444').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo236446').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236464').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236466').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236468').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236470').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236472').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236490').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236509').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236513').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236531').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo236533').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236535').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236553').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236556').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236575').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo236577').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236596').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo236598').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236601').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236603').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo236621').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236623').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236625').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236643').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236645').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo236647').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236651').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236653').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo236655').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236673').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo236692').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo236694').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo236696').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo236698').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo236700').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo236702').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo236704').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo236722').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo236724').setAttributeNS('', 'transform', 'translate(0 15)');
}
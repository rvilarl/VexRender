// @@ Postillionlied p 1/2  by Franz Grothe
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
const fmtsmo2367050 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo236705v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo236705v0ar = [];
const smo236689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236689.setAttribute('id', 'smo236689');
smo236689.addModifier(new VF.Dot(), 0);
smo236705v0ar.push(smo236689);
smo236705v0.addTickables(smo236705v0ar)
fmtsmo2367050.joinVoices([smo236705v0]);
const fmtsmo2381050 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo238105v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238105v0ar = [];
const smo238087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo238087.setAttribute('id', 'smo238087');
smo238087.addModifier(new VF.Dot(), 0);
smo238105v0ar.push(smo238087);
const smo238088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo238088.setAttribute('id', 'smo238088');
smo238105v0ar.push(smo238088);
const smo238089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo238089.setAttribute('id', 'smo238089');
smo238105v0ar.push(smo238089);
smo238105v0.addTickables(smo238105v0ar)
fmtsmo2381050.joinVoices([smo238105v0]);
const fmtsmo2392260 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo239226v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239226v0ar = [];
const smo239208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo239208.setAttribute('id', 'smo239208');
smo239208.addModifier(new VF.Dot(), 0);
smo239226v0ar.push(smo239208);
const smo239209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo239209.setAttribute('id', 'smo239209');
smo239226v0ar.push(smo239209);
const smo239210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo239210.setAttribute('id', 'smo239210');
smo239226v0ar.push(smo239210);
smo239226v0.addTickables(smo239226v0ar)
fmtsmo2392260.joinVoices([smo239226v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo2367050.format([smo236705v0,smo238105v0,smo239226v0], 105);
const stavesmo236705 = new VF.Stave(66, 119, 202);
stavesmo236705.setAttribute('id', 'stavesmo236705');
stavesmo236705.setBegBarType(1);
stavesmo236705.setTempo(JSON.parse('{"duration":"4","dots":1,"bpm":120}'), -1 * 0);
stavesmo236705.addClef('treble');
stavesmo236705.addTimeSignature('6/8');
const keysmo236705 = new VF.KeySignature('G');
keysmo236705.addToStave(stavesmo236705);
stavesmo236705.setContext(context);
stavesmo236705.draw();
smo236705v0.draw(context, stavesmo236705);
const stavesmo238105 = new VF.Stave(66, 226, 202);
stavesmo238105.setAttribute('id', 'stavesmo238105');
stavesmo238105.setBegBarType(1);
stavesmo238105.addClef('treble');
stavesmo238105.addTimeSignature('6/8');
const keysmo238105 = new VF.KeySignature('G');
keysmo238105.addToStave(stavesmo238105);
stavesmo238105.setContext(context);
stavesmo238105.draw();
smo238105v0.draw(context, stavesmo238105);
const stavesmo239226 = new VF.Stave(66, 301, 202);
stavesmo239226.setAttribute('id', 'stavesmo239226');
stavesmo239226.setBegBarType(1);
stavesmo239226.addClef('treble');
stavesmo239226.addTimeSignature('6/8');
const keysmo239226 = new VF.KeySignature('G');
keysmo239226.addToStave(stavesmo239226);
stavesmo239226.setContext(context);
stavesmo239226.draw();
smo239226v0.draw(context, stavesmo239226);
const leftsmo240440stavesmo2367052 = new VF.StaveConnector(stavesmo236705, stavesmo239226).setType(1);
leftsmo240440stavesmo2367052.setContext(context).draw();
const fmtsmo2367221 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo236722v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo236722v0ar = [];
const smo236706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236706.setAttribute('id', 'smo236706');
smo236706.addModifier(new VF.Dot(), 0);
smo236722v0ar.push(smo236706);
smo236722v0.addTickables(smo236722v0ar)
fmtsmo2367221.joinVoices([smo236722v0]);
const fmtsmo2381231 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo238123v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238123v0ar = [];
const smo238106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
smo238106.setAttribute('id', 'smo238106');
smo238106.addModifier(new VF.Dot(), 0);
smo238123v0ar.push(smo238106);
const smo238107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo238107.setAttribute('id', 'smo238107');
smo238107.addModifier(new VF.Dot(), 0);
smo238123v0ar.push(smo238107);
smo238123v0.addTickables(smo238123v0ar)
fmtsmo2381231.joinVoices([smo238123v0]);
const fmtsmo2392441 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo239244v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239244v0ar = [];
const smo239227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo239227.setAttribute('id', 'smo239227');
smo239227.addModifier(new VF.Dot(), 0);
smo239244v0ar.push(smo239227);
const smo239228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo239228.setAttribute('id', 'smo239228');
smo239228.addModifier(new VF.Dot(), 0);
smo239244v0ar.push(smo239228);
smo239244v0.addTickables(smo239244v0ar)
fmtsmo2392441.joinVoices([smo239244v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo2367221.format([smo236722v0,smo238123v0,smo239244v0], 75);
const stavesmo236722 = new VF.Stave(268, 119, 89);
stavesmo236722.setAttribute('id', 'stavesmo236722');
stavesmo236722.setBegBarType(VF.Barline.type.NONE);
stavesmo236722.setContext(context);
stavesmo236722.draw();
smo236722v0.draw(context, stavesmo236722);
const stavesmo238123 = new VF.Stave(268, 226, 89);
stavesmo238123.setAttribute('id', 'stavesmo238123');
stavesmo238123.setBegBarType(VF.Barline.type.NONE);
stavesmo238123.setContext(context);
stavesmo238123.draw();
smo238123v0.draw(context, stavesmo238123);
const stavesmo239244 = new VF.Stave(268, 301, 89);
stavesmo239244.setAttribute('id', 'stavesmo239244');
stavesmo239244.setBegBarType(VF.Barline.type.NONE);
stavesmo239244.setContext(context);
stavesmo239244.draw();
smo239244v0.draw(context, stavesmo239244);
const fmtsmo2367392 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo236739v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo236739v0ar = [];
const smo236723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236723.setAttribute('id', 'smo236723');
smo236723.addModifier(new VF.Dot(), 0);
smo236739v0ar.push(smo236723);
smo236739v0.addTickables(smo236739v0ar)
fmtsmo2367392.joinVoices([smo236739v0]);
const fmtsmo2381442 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo238144v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238144v0ar = [];
const smo238124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo238124.setAttribute('id', 'smo238124');
smo238144v0ar.push(smo238124);
const smo238125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo238125.setAttribute('id', 'smo238125');
smo238144v0ar.push(smo238125);
const smo238126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo238126.setAttribute('id', 'smo238126');
smo238144v0ar.push(smo238126);
const smo238127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo238127.setAttribute('id', 'smo238127');
smo238144v0ar.push(smo238127);
const smo238128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo238128.setAttribute('id', 'smo238128');
smo238144v0ar.push(smo238128);
smo238144v0.addTickables(smo238144v0ar)
fmtsmo2381442.joinVoices([smo238144v0]);
const fmtsmo2392652 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo239265v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239265v0ar = [];
const smo239245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo239245.setAttribute('id', 'smo239245');
smo239265v0ar.push(smo239245);
const smo239246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo239246.setAttribute('id', 'smo239246');
smo239265v0ar.push(smo239246);
const smo239247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo239247.setAttribute('id', 'smo239247');
smo239265v0ar.push(smo239247);
const smo239248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo239248.setAttribute('id', 'smo239248');
smo239265v0ar.push(smo239248);
const smo239249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo239249.setAttribute('id', 'smo239249');
smo239265v0ar.push(smo239249);
smo239265v0.addTickables(smo239265v0ar)
fmtsmo2392652.joinVoices([smo239265v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246406 = smo238124.getStemDirection();
smo238124.setStemDirection(dirsmo246406);
smo238125.setStemDirection(dirsmo246406);
smo238126.setStemDirection(dirsmo246406);
const smo246406 = new VF.Beam([smo238124,smo238125,smo238126]);
const dirsmo246409 = smo239245.getStemDirection();
smo239245.setStemDirection(dirsmo246409);
smo239246.setStemDirection(dirsmo246409);
smo239247.setStemDirection(dirsmo246409);
const smo246409 = new VF.Beam([smo239245,smo239246,smo239247]);
 
// formatting measures in staff group smo240440
fmtsmo2367392.format([smo236739v0,smo238144v0,smo239265v0], 146);
const stavesmo236739 = new VF.Stave(357, 119, 160);
stavesmo236739.setAttribute('id', 'stavesmo236739');
stavesmo236739.setBegBarType(VF.Barline.type.NONE);
stavesmo236739.setContext(context);
stavesmo236739.draw();
smo236739v0.draw(context, stavesmo236739);
const stavesmo238144 = new VF.Stave(357, 226, 160);
stavesmo238144.setAttribute('id', 'stavesmo238144');
stavesmo238144.setBegBarType(VF.Barline.type.NONE);
stavesmo238144.setContext(context);
stavesmo238144.draw();
smo238144v0.draw(context, stavesmo238144);
smo246406.setContext(context);
smo246406.draw();
const stavesmo239265 = new VF.Stave(357, 301, 160);
stavesmo239265.setAttribute('id', 'stavesmo239265');
stavesmo239265.setBegBarType(VF.Barline.type.NONE);
stavesmo239265.setContext(context);
stavesmo239265.draw();
smo239265v0.draw(context, stavesmo239265);
smo246409.setContext(context);
smo246409.draw();
const fmtsmo2367563 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo236756v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo236756v0ar = [];
const smo236740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236740.setAttribute('id', 'smo236740');
smo236740.addModifier(new VF.Dot(), 0);
smo236756v0ar.push(smo236740);
smo236756v0.addTickables(smo236756v0ar)
fmtsmo2367563.joinVoices([smo236756v0]);
const fmtsmo2381653 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo238165v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238165v0ar = [];
const smo238145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo238145.setAttribute('id', 'smo238145');
smo238165v0ar.push(smo238145);
const smo238146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo238146.setAttribute('id', 'smo238146');
smo238165v0ar.push(smo238146);
const smo238147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo238147.setAttribute('id', 'smo238147');
smo238165v0ar.push(smo238147);
const smo238148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo238148.setAttribute('id', 'smo238148');
smo238165v0ar.push(smo238148);
const smo238149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238149.setAttribute('id', 'smo238149');
smo238165v0ar.push(smo238149);
smo238165v0.addTickables(smo238165v0ar)
fmtsmo2381653.joinVoices([smo238165v0]);
const fmtsmo2392853 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo239285v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239285v0ar = [];
const smo239266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo239266.setAttribute('id', 'smo239266');
smo239285v0ar.push(smo239266);
const smo239267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo239267.setAttribute('id', 'smo239267');
smo239285v0ar.push(smo239267);
const smo239268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo239268.setAttribute('id', 'smo239268');
smo239285v0ar.push(smo239268);
const smo239269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n","f#/3/n"]}'))
smo239269.setAttribute('id', 'smo239269');
smo239269.addModifier(new VF.Dot(), 0);
smo239269.addModifier(new VF.Dot(), 1);
smo239285v0ar.push(smo239269);
smo239285v0.addTickables(smo239285v0ar)
fmtsmo2392853.joinVoices([smo239285v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246414 = smo238145.getStemDirection();
smo238145.setStemDirection(dirsmo246414);
smo238146.setStemDirection(dirsmo246414);
smo238147.setStemDirection(dirsmo246414);
const smo246414 = new VF.Beam([smo238145,smo238146,smo238147]);
const dirsmo246417 = smo239266.getStemDirection();
smo239266.setStemDirection(dirsmo246417);
smo239267.setStemDirection(dirsmo246417);
smo239268.setStemDirection(dirsmo246417);
const smo246417 = new VF.Beam([smo239266,smo239267,smo239268]);
 
// formatting measures in staff group smo240440
fmtsmo2367563.format([smo236756v0,smo238165v0,smo239285v0], 160);
const stavesmo236756 = new VF.Stave(517, 119, 174);
stavesmo236756.setAttribute('id', 'stavesmo236756');
stavesmo236756.setBegBarType(VF.Barline.type.NONE);
stavesmo236756.setContext(context);
stavesmo236756.draw();
smo236756v0.draw(context, stavesmo236756);
const stavesmo238165 = new VF.Stave(517, 226, 174);
stavesmo238165.setAttribute('id', 'stavesmo238165');
stavesmo238165.setBegBarType(VF.Barline.type.NONE);
stavesmo238165.setContext(context);
stavesmo238165.draw();
smo238165v0.draw(context, stavesmo238165);
smo246414.setContext(context);
smo246414.draw();
const stavesmo239285 = new VF.Stave(517, 301, 174);
stavesmo239285.setAttribute('id', 'stavesmo239285');
stavesmo239285.setBegBarType(VF.Barline.type.NONE);
stavesmo239285.setContext(context);
stavesmo239285.draw();
smo239285v0.draw(context, stavesmo239285);
smo246417.setContext(context);
smo246417.draw();
const fmtsmo2367734 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo236773v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo236773v0ar = [];
const smo236757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236757.setAttribute('id', 'smo236757');
smo236757.addModifier(new VF.Dot(), 0);
smo236773v0ar.push(smo236757);
smo236773v0.addTickables(smo236773v0ar)
fmtsmo2367734.joinVoices([smo236773v0]);
const fmtsmo2381824 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo238182v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238182v0ar = [];
const smo238166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo238166.setAttribute('id', 'smo238166');
smo238166.addModifier(new VF.Dot(), 0);
smo238182v0ar.push(smo238166);
smo238182v0.addTickables(smo238182v0ar)
fmtsmo2381824.joinVoices([smo238182v0]);
const fmtsmo2393054 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo239305v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239305v0ar = [];
const smo239286 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239286.setAttribute('id', 'smo239286');
smo239305v0ar.push(smo239286);
const smo239287 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239287.setAttribute('id', 'smo239287');
smo239305v0ar.push(smo239287);
const smo239288 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239288.setAttribute('id', 'smo239288');
smo239305v0ar.push(smo239288);
const smo239289 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239289.setAttribute('id', 'smo239289');
smo239305v0ar.push(smo239289);
smo239305v0.addTickables(smo239305v0ar)
fmtsmo2393054.joinVoices([smo239305v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo2367734.format([smo236773v0,smo238182v0,smo239305v0], 127);
const stavesmo236773 = new VF.Stave(691, 119, 183);
stavesmo236773.setAttribute('id', 'stavesmo236773');
stavesmo236773.setBegBarType(4);
stavesmo236773.setContext(context);
stavesmo236773.draw();
smo236773v0.draw(context, stavesmo236773);
const stavesmo238182 = new VF.Stave(691, 226, 183);
stavesmo238182.setAttribute('id', 'stavesmo238182');
stavesmo238182.setBegBarType(4);
stavesmo238182.setContext(context);
stavesmo238182.draw();
smo238182v0.draw(context, stavesmo238182);
const stavesmo239305 = new VF.Stave(691, 301, 183);
stavesmo239305.setAttribute('id', 'stavesmo239305');
stavesmo239305.setBegBarType(4);
stavesmo239305.addClef('bass');
stavesmo239305.setContext(context);
stavesmo239305.draw();
smo239305v0.draw(context, stavesmo239305);
const fmtsmo2367925 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo236792v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo236792v0ar = [];
const smo236774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236774.setAttribute('id', 'smo236774');
smo236774.addModifier(new VF.Dot(), 0);
smo236792v0ar.push(smo236774);
const smo236775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo236775.setAttribute('id', 'smo236775');
smo236775.addModifier(new VF.Dot(), 0);
const smo236776 = new VF.Annotation('Mein');
smo236776.setAttribute('id', 'smo236776');
smo236776.setFont('Merriweather', 12, 'normal');
smo236776.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236775.addModifier(smo236776);
smo236776.addClass('lyric lyric-0');
smo236792v0ar.push(smo236775);
smo236792v0.addTickables(smo236792v0ar)
fmtsmo2367925.joinVoices([smo236792v0]);
const fmtsmo2382005 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo238200v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238200v0ar = [];
const smo238183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo238183.setAttribute('id', 'smo238183');
smo238183.addModifier(new VF.Dot(), 0);
smo238200v0ar.push(smo238183);
const smo238184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238184.setAttribute('id', 'smo238184');
smo238184.addModifier(new VF.Dot(), 0);
smo238200v0ar.push(smo238184);
smo238200v0.addTickables(smo238200v0ar)
fmtsmo2382005.joinVoices([smo238200v0]);
const fmtsmo2393255 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo239325v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239325v0ar = [];
const smo239306 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239306.setAttribute('id', 'smo239306');
smo239325v0ar.push(smo239306);
const smo239307 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239307.setAttribute('id', 'smo239307');
smo239325v0ar.push(smo239307);
const smo239308 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239308.setAttribute('id', 'smo239308');
smo239325v0ar.push(smo239308);
const smo239309 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239309.setAttribute('id', 'smo239309');
smo239325v0ar.push(smo239309);
smo239325v0.addTickables(smo239325v0ar)
fmtsmo2393255.joinVoices([smo239325v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo2367925.format([smo236792v0,smo238200v0,smo239325v0], 155);
const stavesmo236792 = new VF.Stave(874, 119, 169);
stavesmo236792.setAttribute('id', 'stavesmo236792');
stavesmo236792.setBegBarType(VF.Barline.type.NONE);
stavesmo236792.setContext(context);
stavesmo236792.draw();
smo236792v0.draw(context, stavesmo236792);
const stavesmo238200 = new VF.Stave(874, 226, 169);
stavesmo238200.setAttribute('id', 'stavesmo238200');
stavesmo238200.setBegBarType(VF.Barline.type.NONE);
stavesmo238200.setContext(context);
stavesmo238200.draw();
smo238200v0.draw(context, stavesmo238200);
const stavesmo239325 = new VF.Stave(874, 301, 169);
stavesmo239325.setAttribute('id', 'stavesmo239325');
stavesmo239325.setBegBarType(VF.Barline.type.NONE);
stavesmo239325.setContext(context);
stavesmo239325.draw();
smo239325v0.draw(context, stavesmo239325);
const fmtsmo2368106 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo236810v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo236810v0ar = [];
const smo236793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236793.setAttribute('id', 'smo236793');
smo236793.addModifier(new VF.Dot(), 0);
const smo236794 = new VF.Annotation('Shatz,');
smo236794.setAttribute('id', 'smo236794');
smo236794.setFont('Merriweather', 12, 'normal');
smo236794.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236793.addModifier(smo236794);
smo236794.addClass('lyric lyric-0');
smo236810v0ar.push(smo236793);
smo236810v0.addTickables(smo236810v0ar)
fmtsmo2368106.joinVoices([smo236810v0]);
const fmtsmo2382176 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo238217v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238217v0ar = [];
const smo238201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","f#/4/n"]}'))
smo238201.setAttribute('id', 'smo238201');
smo238201.addModifier(new VF.Dot(), 0);
smo238201.addModifier(new VF.Dot(), 1);
smo238217v0ar.push(smo238201);
smo238217v0.addTickables(smo238217v0ar)
fmtsmo2382176.joinVoices([smo238217v0]);
const fmtsmo2393456 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo239345v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239345v0ar = [];
const smo239326 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239326.setAttribute('id', 'smo239326');
smo239345v0ar.push(smo239326);
const smo239327 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239327.setAttribute('id', 'smo239327');
smo239345v0ar.push(smo239327);
const smo239328 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239328.setAttribute('id', 'smo239328');
smo239345v0ar.push(smo239328);
const smo239329 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239329.setAttribute('id', 'smo239329');
smo239345v0ar.push(smo239329);
smo239345v0.addTickables(smo239345v0ar)
fmtsmo2393456.joinVoices([smo239345v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo2368106.format([smo236810v0,smo238217v0,smo239345v0], 154);
const stavesmo236810 = new VF.Stave(1043, 119, 168);
stavesmo236810.setAttribute('id', 'stavesmo236810');
stavesmo236810.setBegBarType(VF.Barline.type.NONE);
stavesmo236810.setContext(context);
stavesmo236810.draw();
smo236810v0.draw(context, stavesmo236810);
const stavesmo238217 = new VF.Stave(1043, 226, 168);
stavesmo238217.setAttribute('id', 'stavesmo238217');
stavesmo238217.setBegBarType(VF.Barline.type.NONE);
stavesmo238217.setContext(context);
stavesmo238217.draw();
smo238217v0.draw(context, stavesmo238217);
const stavesmo239345 = new VF.Stave(1043, 301, 168);
stavesmo239345.setAttribute('id', 'stavesmo239345');
stavesmo239345.setBegBarType(VF.Barline.type.NONE);
stavesmo239345.setContext(context);
stavesmo239345.draw();
smo239345v0.draw(context, stavesmo239345);
const rightsmo240440stavesmo2368102 = new VF.StaveConnector(stavesmo236810, stavesmo239345).setType(0);
rightsmo240440stavesmo2368102.setContext(context).draw();
const fmtsmo2368407 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo236840v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo236840v0ar = [];
const smo236811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236811.setAttribute('id', 'smo236811');
smo236840v0ar.push(smo236811);
const smo236813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236813.setAttribute('id', 'smo236813');
const smo236814 = new VF.Annotation('der');
smo236814.setAttribute('id', 'smo236814');
smo236814.setFont('Merriweather', 12, 'normal');
smo236814.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236813.addModifier(smo236814);
smo236814.addClass('lyric lyric-0');
const smo236815 = new VF.Annotation('hat');
smo236815.setAttribute('id', 'smo236815');
smo236815.setFont('Merriweather', 12, 'normal');
smo236815.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236813.addModifier(smo236815);
smo236815.addClass('lyric lyric-1');
smo236840v0ar.push(smo236813);
const smo236816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236816.setAttribute('id', 'smo236816');
const smo236817 = new VF.Annotation('is');
smo236817.setAttribute('id', 'smo236817');
smo236817.setFont('Merriweather', 12, 'normal');
smo236817.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236816.addModifier(smo236817);
smo236817.addClass('lyric lyric-0');
const smo236818 = new VF.Annotation('vie');
smo236818.setAttribute('id', 'smo236818');
smo236818.setFont('Merriweather', 12, 'normal');
smo236818.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236816.addModifier(smo236818);
smo236818.addClass('lyric lyric-1 lyric-hyphen');
smo236840v0ar.push(smo236816);
const smo236819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo236819.setAttribute('id', 'smo236819');
const smo236820 = new VF.Annotation('Po');
smo236820.setAttribute('id', 'smo236820');
smo236820.setFont('Merriweather', 12, 'normal');
smo236820.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236819.addModifier(smo236820);
smo236820.addClass('lyric lyric-0 lyric-hyphen');
const smo236821 = new VF.Annotation('les');
smo236821.setAttribute('id', 'smo236821');
smo236821.setFont('Merriweather', 12, 'normal');
smo236821.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236819.addModifier(smo236821);
smo236821.addClass('lyric lyric-1');
smo236840v0ar.push(smo236819);
const smo236822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo236822.setAttribute('id', 'smo236822');
const smo236823 = new VF.Annotation('stil');
smo236823.setAttribute('id', 'smo236823');
smo236823.setFont('Merriweather', 12, 'normal');
smo236823.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236822.addModifier(smo236823);
smo236823.addClass('lyric lyric-0 lyric-hyphen');
const smo236824 = new VF.Annotation('ge');
smo236824.setAttribute('id', 'smo236824');
smo236824.setFont('Merriweather', 12, 'normal');
smo236824.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236822.addModifier(smo236824);
smo236824.addClass('lyric lyric-1 lyric-hyphen');
smo236840v0ar.push(smo236822);
smo236840v0.addTickables(smo236840v0ar)
fmtsmo2368407.joinVoices([smo236840v0]);
const fmtsmo2382347 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo238234v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238234v0ar = [];
const smo238218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","f#/4/n"]}'))
smo238218.setAttribute('id', 'smo238218');
smo238218.addModifier(new VF.Dot(), 0);
smo238218.addModifier(new VF.Dot(), 1);
smo238234v0ar.push(smo238218);
smo238234v0.addTickables(smo238234v0ar)
fmtsmo2382347.joinVoices([smo238234v0]);
const fmtsmo2393657 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo239365v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239365v0ar = [];
const smo239346 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239346.setAttribute('id', 'smo239346');
smo239365v0ar.push(smo239346);
const smo239347 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239347.setAttribute('id', 'smo239347');
smo239365v0ar.push(smo239347);
const smo239348 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239348.setAttribute('id', 'smo239348');
smo239365v0ar.push(smo239348);
const smo239349 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239349.setAttribute('id', 'smo239349');
smo239365v0ar.push(smo239349);
smo239365v0.addTickables(smo239365v0ar)
fmtsmo2393657.joinVoices([smo239365v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246442 = smo236816.getStemDirection();
smo236816.setStemDirection(dirsmo246442);
smo236819.setStemDirection(dirsmo246442);
smo236822.setStemDirection(dirsmo246442);
const smo246442 = new VF.Beam([smo236816,smo236819,smo236822]);
 
// formatting measures in staff group smo240440
fmtsmo2368407.format([smo236840v0,smo238234v0,smo239365v0], 232);
const stavesmo236840 = new VF.Stave(66, 451, 306);
stavesmo236840.setAttribute('id', 'stavesmo236840');
stavesmo236840.setBegBarType(1);
stavesmo236840.addClef('treble');
const keysmo236840 = new VF.KeySignature('G');
keysmo236840.addToStave(stavesmo236840);
stavesmo236840.setContext(context);
stavesmo236840.draw();
smo236840v0.draw(context, stavesmo236840);
smo246442.setContext(context);
smo246442.draw();
const stavesmo238234 = new VF.Stave(66, 566, 306);
stavesmo238234.setAttribute('id', 'stavesmo238234');
stavesmo238234.setBegBarType(1);
stavesmo238234.addClef('treble');
const keysmo238234 = new VF.KeySignature('G');
keysmo238234.addToStave(stavesmo238234);
stavesmo238234.setContext(context);
stavesmo238234.draw();
smo238234v0.draw(context, stavesmo238234);
const stavesmo239365 = new VF.Stave(66, 699, 306);
stavesmo239365.setAttribute('id', 'stavesmo239365');
stavesmo239365.setBegBarType(1);
stavesmo239365.addClef('bass');
const keysmo239365 = new VF.KeySignature('G');
keysmo239365.addToStave(stavesmo239365);
stavesmo239365.setContext(context);
stavesmo239365.draw();
smo239365v0.draw(context, stavesmo239365);
const leftsmo240440stavesmo2368402 = new VF.StaveConnector(stavesmo236840, stavesmo239365).setType(1);
leftsmo240440stavesmo2368402.setContext(context).draw();
const fmtsmo2368598 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo236859v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo236859v0ar = [];
const smo236841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236841.setAttribute('id', 'smo236841');
smo236841.addModifier(new VF.Dot(), 0);
const smo236842 = new VF.Annotation('lion,');
smo236842.setAttribute('id', 'smo236842');
smo236842.setFont('Merriweather', 12, 'normal');
smo236842.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236841.addModifier(smo236842);
smo236842.addClass('lyric lyric-0');
const smo236843 = new VF.Annotation('sehn');
smo236843.setAttribute('id', 'smo236843');
smo236843.setFont('Merriweather', 12, 'normal');
smo236843.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236841.addModifier(smo236843);
smo236843.addClass('lyric lyric-1');
smo236859v0ar.push(smo236841);
smo236859v0.addTickables(smo236859v0ar)
fmtsmo2368598.joinVoices([smo236859v0]);
const fmtsmo2382518 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo238251v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238251v0ar = [];
const smo238235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo238235.setAttribute('id', 'smo238235');
smo238235.addModifier(new VF.Dot(), 0);
smo238235.addModifier(new VF.Dot(), 1);
smo238251v0ar.push(smo238235);
smo238251v0.addTickables(smo238251v0ar)
fmtsmo2382518.joinVoices([smo238251v0]);
const fmtsmo2393908 = new VF.Formatter();
//
// voices and notes for stave 2 8
const smo239390v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239390v0ar = [];
const smo239366 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo239366.setAttribute('id', 'smo239366');
smo239390v0ar.push(smo239366);
const smo239367 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo239367.setAttribute('id', 'smo239367');
smo239390v0ar.push(smo239367);
const smo239368 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo239368.setAttribute('id', 'smo239368');
smo239390v0ar.push(smo239368);
const smo239369 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo239369.setAttribute('id', 'smo239369');
smo239390v0ar.push(smo239369);
smo239390v0.addTickables(smo239390v0ar)
fmtsmo2393908.joinVoices([smo239390v0]);
const smo239390v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239390v1ar = [];
const smo239370 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
smo239370.setAttribute('id', 'smo239370');
smo239370.setStyle({ fillStyle: "#115511" });
smo239390v1ar.push(smo239370);
const smo239371 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo239371.setAttribute('id', 'smo239371');
smo239371.setStyle({ fillStyle: "#115511" });
smo239390v1ar.push(smo239371);
const smo239372 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo239372.setAttribute('id', 'smo239372');
smo239372.setStyle({ fillStyle: "#115511" });
smo239390v1ar.push(smo239372);
const smo239373 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo239373.setAttribute('id', 'smo239373');
smo239373.setStyle({ fillStyle: "#115511" });
smo239390v1ar.push(smo239373);
const smo239374 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo239374.setAttribute('id', 'smo239374');
smo239374.setStyle({ fillStyle: "#115511" });
smo239390v1ar.push(smo239374);
smo239390v1.addTickables(smo239390v1ar)
fmtsmo2393908.joinVoices([smo239390v1]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246453 = smo239372.getStemDirection();
smo239372.setStemDirection(dirsmo246453);
smo239373.setStemDirection(dirsmo246453);
smo239374.setStemDirection(dirsmo246453);
const smo246453 = new VF.Beam([smo239372,smo239373,smo239374]);
 
// formatting measures in staff group smo240440
fmtsmo2368598.format([smo236859v0,smo238251v0,smo239390v0,smo239390v1], 161);
const stavesmo236859 = new VF.Stave(372, 451, 175);
stavesmo236859.setAttribute('id', 'stavesmo236859');
stavesmo236859.setBegBarType(VF.Barline.type.NONE);
stavesmo236859.setContext(context);
stavesmo236859.draw();
smo236859v0.draw(context, stavesmo236859);
const stavesmo238251 = new VF.Stave(372, 566, 175);
stavesmo238251.setAttribute('id', 'stavesmo238251');
stavesmo238251.setBegBarType(VF.Barline.type.NONE);
stavesmo238251.setContext(context);
stavesmo238251.draw();
smo238251v0.draw(context, stavesmo238251);
const stavesmo239390 = new VF.Stave(372, 699, 175);
stavesmo239390.setAttribute('id', 'stavesmo239390');
stavesmo239390.setBegBarType(VF.Barline.type.NONE);
stavesmo239390.setContext(context);
stavesmo239390.draw();
smo239390v0.draw(context, stavesmo239390);
smo239390v1.draw(context, stavesmo239390);
smo246453.setContext(context);
smo246453.draw();
const fmtsmo2368899 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo236889v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo236889v0ar = [];
const smo236860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236860.setAttribute('id', 'smo236860');
smo236889v0ar.push(smo236860);
const smo236862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo236862.setAttribute('id', 'smo236862');
const smo236863 = new VF.Annotation('er');
smo236863.setAttribute('id', 'smo236863');
smo236863.setFont('Merriweather', 12, 'normal');
smo236863.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236862.addModifier(smo236863);
smo236863.addClass('lyric lyric-0');
const smo236864 = new VF.Annotation('er');
smo236864.setAttribute('id', 'smo236864');
smo236864.setFont('Merriweather', 12, 'normal');
smo236864.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236862.addModifier(smo236864);
smo236864.addClass('lyric lyric-1');
smo236889v0ar.push(smo236862);
const smo236865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo236865.setAttribute('id', 'smo236865');
const smo236866 = new VF.Annotation('fährt');
smo236866.setAttribute('id', 'smo236866');
smo236866.setFont('Merriweather', 12, 'normal');
smo236866.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236865.addModifier(smo236866);
smo236866.addClass('lyric lyric-0');
const smo236867 = new VF.Annotation('traf');
smo236867.setAttribute('id', 'smo236867');
smo236867.setFont('Merriweather', 12, 'normal');
smo236867.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236865.addModifier(smo236867);
smo236867.addClass('lyric lyric-1');
smo236889v0ar.push(smo236865);
const smo236868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236868.setAttribute('id', 'smo236868');
const smo236869 = new VF.Annotation('durch');
smo236869.setAttribute('id', 'smo236869');
smo236869.setFont('Merriweather', 12, 'normal');
smo236869.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236868.addModifier(smo236869);
smo236869.addClass('lyric lyric-0');
const smo236870 = new VF.Annotation('la');
smo236870.setAttribute('id', 'smo236870');
smo236870.setFont('Merriweather', 12, 'normal');
smo236870.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236868.addModifier(smo236870);
smo236870.addClass('lyric lyric-1');
smo236889v0ar.push(smo236868);
const smo236871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo236871.setAttribute('id', 'smo236871');
const smo236872 = new VF.Annotation('de');
smo236872.setAttribute('id', 'smo236872');
smo236872.setFont('Merriweather', 12, 'normal');
smo236872.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236871.addModifier(smo236872);
smo236872.addClass('lyric lyric-0');
const smo236873 = new VF.Annotation('den');
smo236873.setAttribute('id', 'smo236873');
smo236873.setFont('Merriweather', 12, 'normal');
smo236873.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236871.addModifier(smo236873);
smo236873.addClass('lyric lyric-1');
smo236889v0ar.push(smo236871);
smo236889v0.addTickables(smo236889v0ar)
fmtsmo2368899.joinVoices([smo236889v0]);
const fmtsmo2382689 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo238268v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238268v0ar = [];
const smo238252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo238252.setAttribute('id', 'smo238252');
smo238252.addModifier(new VF.Dot(), 0);
smo238252.addModifier(new VF.Dot(), 1);
smo238268v0ar.push(smo238252);
smo238268v0.addTickables(smo238268v0ar)
fmtsmo2382689.joinVoices([smo238268v0]);
const fmtsmo2394129 = new VF.Formatter();
//
// voices and notes for stave 2 9
const smo239412v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239412v0ar = [];
const smo239391 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239391.setAttribute('id', 'smo239391');
smo239412v0ar.push(smo239391);
const smo239392 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239392.setAttribute('id', 'smo239392');
smo239412v0ar.push(smo239392);
const smo239393 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239393.setAttribute('id', 'smo239393');
smo239412v0ar.push(smo239393);
const smo239394 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239394.setAttribute('id', 'smo239394');
smo239412v0ar.push(smo239394);
smo239412v0.addTickables(smo239412v0ar)
fmtsmo2394129.joinVoices([smo239412v0]);
const smo239412v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239412v1ar = [];
const smo239395 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo239395.setAttribute('id', 'smo239395');
smo239395.setStyle({ fillStyle: "#115511" });
smo239395.addModifier(new VF.Dot(), 0);
smo239412v1ar.push(smo239395);
const smo239396 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239396.setAttribute('id', 'smo239396');
smo239396.setStyle({ fillStyle: '#aaaaaa7f' });
smo239396.addModifier(new VF.Dot(), 0);
smo239412v1ar.push(smo239396);
smo239412v1.addTickables(smo239412v1ar)
fmtsmo2394129.joinVoices([smo239412v1]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246456 = smo236865.getStemDirection();
smo236865.setStemDirection(dirsmo246456);
smo236868.setStemDirection(dirsmo246456);
smo236871.setStemDirection(dirsmo246456);
const smo246456 = new VF.Beam([smo236865,smo236868,smo236871]);
 
// formatting measures in staff group smo240440
fmtsmo2368899.format([smo236889v0,smo238268v0,smo239412v0,smo239412v1], 282);
const stavesmo236889 = new VF.Stave(547, 451, 296);
stavesmo236889.setAttribute('id', 'stavesmo236889');
stavesmo236889.setBegBarType(VF.Barline.type.NONE);
stavesmo236889.setContext(context);
stavesmo236889.draw();
smo236889v0.draw(context, stavesmo236889);
smo246456.setContext(context);
smo246456.draw();
const stavesmo238268 = new VF.Stave(547, 566, 296);
stavesmo238268.setAttribute('id', 'stavesmo238268');
stavesmo238268.setBegBarType(VF.Barline.type.NONE);
stavesmo238268.setContext(context);
stavesmo238268.draw();
smo238268v0.draw(context, stavesmo238268);
const stavesmo239412 = new VF.Stave(547, 699, 296);
stavesmo239412.setAttribute('id', 'stavesmo239412');
stavesmo239412.setBegBarType(VF.Barline.type.NONE);
stavesmo239412.setContext(context);
stavesmo239412.draw();
smo239412v0.draw(context, stavesmo239412);
smo239412v1.draw(context, stavesmo239412);
const fmtsmo23691110 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo236911v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo236911v0ar = [];
const smo236890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236890.setAttribute('id', 'smo236890');
smo236890.addModifier(new VF.Dot(), 0);
const smo236891 = new VF.Annotation('Fel');
smo236891.setAttribute('id', 'smo236891');
smo236891.setFont('Merriweather', 12, 'normal');
smo236891.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236890.addModifier(smo236891);
smo236891.addClass('lyric lyric-0 lyric-hyphen');
const smo236892 = new VF.Annotation('Städt');
smo236892.setAttribute('id', 'smo236892');
smo236892.setFont('Merriweather', 12, 'normal');
smo236892.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236890.addModifier(smo236892);
smo236892.addClass('lyric lyric-1 lyric-hyphen');
smo236911v0ar.push(smo236890);
const smo236893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo236893.setAttribute('id', 'smo236893');
smo236893.addModifier(new VF.Dot(), 0);
const smo236894 = new VF.Annotation('der');
smo236894.setAttribute('id', 'smo236894');
smo236894.setFont('Merriweather', 12, 'normal');
smo236894.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236893.addModifier(smo236894);
smo236894.addClass('lyric lyric-0');
const smo236895 = new VF.Annotation('chen');
smo236895.setAttribute('id', 'smo236895');
smo236895.setFont('Merriweather', 12, 'normal');
smo236895.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236893.addModifier(smo236895);
smo236895.addClass('lyric lyric-1');
smo236911v0ar.push(smo236893);
smo236911v0.addTickables(smo236911v0ar)
fmtsmo23691110.joinVoices([smo236911v0]);
const fmtsmo23828510 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo238285v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238285v0ar = [];
const smo238269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
smo238269.setAttribute('id', 'smo238269');
smo238269.addModifier(new VF.Dot(), 0);
smo238269.addModifier(new VF.Dot(), 1);
smo238285v0ar.push(smo238269);
smo238285v0.addTickables(smo238285v0ar)
fmtsmo23828510.joinVoices([smo238285v0]);
const fmtsmo23943210 = new VF.Formatter();
//
// voices and notes for stave 2 10
const smo239432v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239432v0ar = [];
const smo239413 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239413.setAttribute('id', 'smo239413');
smo239432v0ar.push(smo239413);
const smo239414 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239414.setAttribute('id', 'smo239414');
smo239432v0ar.push(smo239414);
const smo239415 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239415.setAttribute('id', 'smo239415');
smo239432v0ar.push(smo239415);
const smo239416 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239416.setAttribute('id', 'smo239416');
smo239432v0ar.push(smo239416);
smo239432v0.addTickables(smo239432v0ar)
fmtsmo23943210.joinVoices([smo239432v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23691110.format([smo236911v0,smo238285v0,smo239432v0], 174);
const stavesmo236911 = new VF.Stave(843, 451, 188);
stavesmo236911.setAttribute('id', 'stavesmo236911');
stavesmo236911.setBegBarType(VF.Barline.type.NONE);
stavesmo236911.setContext(context);
stavesmo236911.draw();
smo236911v0.draw(context, stavesmo236911);
const stavesmo238285 = new VF.Stave(843, 566, 188);
stavesmo238285.setAttribute('id', 'stavesmo238285');
stavesmo238285.setBegBarType(VF.Barline.type.NONE);
stavesmo238285.setContext(context);
stavesmo238285.draw();
smo238285v0.draw(context, stavesmo238285);
const stavesmo239432 = new VF.Stave(843, 699, 188);
stavesmo239432.setAttribute('id', 'stavesmo239432');
stavesmo239432.setBegBarType(VF.Barline.type.NONE);
stavesmo239432.setContext(context);
stavesmo239432.draw();
smo239432v0.draw(context, stavesmo239432);
const fmtsmo23693311 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo236933v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo236933v0ar = [];
const smo236912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236912.setAttribute('id', 'smo236912');
smo236912.addModifier(new VF.Dot(), 0);
const smo236913 = new VF.Annotation('Wäl');
smo236913.setAttribute('id', 'smo236913');
smo236913.setFont('Merriweather', 12, 'normal');
smo236913.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236912.addModifier(smo236913);
smo236913.addClass('lyric lyric-0 lyric-hyphen');
const smo236914 = new VF.Annotation('Mäd');
smo236914.setAttribute('id', 'smo236914');
smo236914.setFont('Merriweather', 12, 'normal');
smo236914.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236912.addModifier(smo236914);
smo236914.addClass('lyric lyric-1 lyric-hyphen');
smo236933v0ar.push(smo236912);
const smo236915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo236915.setAttribute('id', 'smo236915');
smo236915.addModifier(new VF.Dot(), 0);
const smo236916 = new VF.Annotation('der');
smo236916.setAttribute('id', 'smo236916');
smo236916.setFont('Merriweather', 12, 'normal');
smo236916.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236915.addModifier(smo236916);
smo236916.addClass('lyric lyric-0');
const smo236917 = new VF.Annotation('chen');
smo236917.setAttribute('id', 'smo236917');
smo236917.setFont('Merriweather', 12, 'normal');
smo236917.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236915.addModifier(smo236917);
smo236917.addClass('lyric lyric-1');
smo236933v0ar.push(smo236915);
smo236933v0.addTickables(smo236933v0ar)
fmtsmo23693311.joinVoices([smo236933v0]);
const fmtsmo23830211 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo238302v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238302v0ar = [];
const smo238286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
smo238286.setAttribute('id', 'smo238286');
smo238286.addModifier(new VF.Dot(), 0);
smo238286.addModifier(new VF.Dot(), 1);
smo238302v0ar.push(smo238286);
smo238302v0.addTickables(smo238302v0ar)
fmtsmo23830211.joinVoices([smo238302v0]);
const fmtsmo23945211 = new VF.Formatter();
//
// voices and notes for stave 2 11
const smo239452v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239452v0ar = [];
const smo239433 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239433.setAttribute('id', 'smo239433');
smo239452v0ar.push(smo239433);
const smo239434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239434.setAttribute('id', 'smo239434');
smo239452v0ar.push(smo239434);
const smo239435 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239435.setAttribute('id', 'smo239435');
smo239452v0ar.push(smo239435);
const smo239436 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239436.setAttribute('id', 'smo239436');
smo239452v0ar.push(smo239436);
smo239452v0.addTickables(smo239452v0ar)
fmtsmo23945211.joinVoices([smo239452v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23693311.format([smo236933v0,smo238302v0,smo239452v0], 168);
const stavesmo236933 = new VF.Stave(1031, 451, 182);
stavesmo236933.setAttribute('id', 'stavesmo236933');
stavesmo236933.setBegBarType(VF.Barline.type.NONE);
stavesmo236933.setContext(context);
stavesmo236933.draw();
smo236933v0.draw(context, stavesmo236933);
const stavesmo238302 = new VF.Stave(1031, 566, 182);
stavesmo238302.setAttribute('id', 'stavesmo238302');
stavesmo238302.setBegBarType(VF.Barline.type.NONE);
stavesmo238302.setContext(context);
stavesmo238302.draw();
smo238302v0.draw(context, stavesmo238302);
const stavesmo239452 = new VF.Stave(1031, 699, 182);
stavesmo239452.setAttribute('id', 'stavesmo239452');
stavesmo239452.setBegBarType(VF.Barline.type.NONE);
stavesmo239452.setContext(context);
stavesmo239452.draw();
smo239452v0.draw(context, stavesmo239452);
const rightsmo240440stavesmo2369332 = new VF.StaveConnector(stavesmo236933, stavesmo239452).setType(0);
rightsmo240440stavesmo2369332.setContext(context).draw();
const fmtsmo23696112 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo236961v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo236961v0ar = [];
const smo236934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236934.setAttribute('id', 'smo236934');
const smo236935 = new VF.Annotation('ü');
smo236935.setAttribute('id', 'smo236935');
smo236935.setFont('Merriweather', 12, 'normal');
smo236935.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236934.addModifier(smo236935);
smo236935.addClass('lyric lyric-0 lyric-hyphen');
const smo236936 = new VF.Annotation('schö');
smo236936.setAttribute('id', 'smo236936');
smo236936.setFont('Merriweather', 12, 'normal');
smo236936.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236934.addModifier(smo236936);
smo236936.addClass('lyric lyric-1 lyric-hyphen');
smo236961v0ar.push(smo236934);
const smo236937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo236937.setAttribute('id', 'smo236937');
const smo236938 = new VF.Annotation('ber');
smo236938.setAttribute('id', 'smo236938');
smo236938.setFont('Merriweather', 12, 'normal');
smo236938.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236937.addModifier(smo236938);
smo236938.addClass('lyric lyric-0 lyric-hyphen');
const smo236939 = new VF.Annotation('new');
smo236939.setAttribute('id', 'smo236939');
smo236939.setFont('Merriweather', 12, 'normal');
smo236939.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236937.addModifier(smo236939);
smo236939.addClass('lyric lyric-1');
smo236961v0ar.push(smo236937);
const smo236940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo236940.setAttribute('id', 'smo236940');
const smo236941 = new VF.Annotation('das');
smo236941.setAttribute('id', 'smo236941');
smo236941.setFont('Merriweather', 12, 'normal');
smo236941.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236940.addModifier(smo236941);
smo236941.addClass('lyric lyric-0');
const smo236942 = new VF.Annotation('als');
smo236942.setAttribute('id', 'smo236942');
smo236942.setFont('Merriweather', 12, 'normal');
smo236942.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236940.addModifier(smo236942);
smo236942.addClass('lyric lyric-1');
smo236961v0ar.push(smo236940);
const smo236943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236943.setAttribute('id', 'smo236943');
smo236943.addModifier(new VF.Dot(), 0);
const smo236944 = new VF.Annotation('Land;');
smo236944.setAttribute('id', 'smo236944');
smo236944.setFont('Merriweather', 12, 'normal');
smo236944.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236943.addModifier(smo236944);
smo236944.addClass('lyric lyric-0 lyric-hyphen');
const smo236945 = new VF.Annotation('ich');
smo236945.setAttribute('id', 'smo236945');
smo236945.setFont('Merriweather', 12, 'normal');
smo236945.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236943.addModifier(smo236945);
smo236945.addClass('lyric lyric-1');
smo236961v0ar.push(smo236943);
smo236961v0.addTickables(smo236961v0ar)
fmtsmo23696112.joinVoices([smo236961v0]);
const fmtsmo23832212 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo238322v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238322v0ar = [];
const smo238303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo238303.setAttribute('id', 'smo238303');
smo238303.addModifier(new VF.Dot(), 0);
smo238303.addModifier(new VF.Dot(), 1);
smo238322v0ar.push(smo238303);
const smo238304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n"]}'))
smo238304.setAttribute('id', 'smo238304');
smo238322v0ar.push(smo238304);
const smo238305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bn/4/n"]}'))
smo238305.setAttribute('id', 'smo238305');
smo238322v0ar.push(smo238305);
const smo238306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n"]}'))
smo238306.setAttribute('id', 'smo238306');
smo238322v0ar.push(smo238306);
smo238322v0.addTickables(smo238322v0ar)
fmtsmo23832212.joinVoices([smo238322v0]);
const fmtsmo23947212 = new VF.Formatter();
//
// voices and notes for stave 2 12
const smo239472v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239472v0ar = [];
const smo239453 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239453.setAttribute('id', 'smo239453');
smo239472v0ar.push(smo239453);
const smo239454 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239454.setAttribute('id', 'smo239454');
smo239472v0ar.push(smo239454);
const smo239455 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239455.setAttribute('id', 'smo239455');
smo239472v0ar.push(smo239455);
const smo239456 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239456.setAttribute('id', 'smo239456');
smo239472v0ar.push(smo239456);
smo239472v0.addTickables(smo239472v0ar)
fmtsmo23947212.joinVoices([smo239472v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246483 = smo236934.getStemDirection();
smo236934.setStemDirection(dirsmo246483);
smo236937.setStemDirection(dirsmo246483);
smo236940.setStemDirection(dirsmo246483);
const smo246483 = new VF.Beam([smo236934,smo236937,smo236940]);
const dirsmo246486 = smo238304.getStemDirection();
smo238304.setStemDirection(dirsmo246486);
smo238305.setStemDirection(dirsmo246486);
smo238306.setStemDirection(dirsmo246486);
const smo246486 = new VF.Beam([smo238304,smo238305,smo238306]);
 
// formatting measures in staff group smo240440
fmtsmo23696112.format([smo236961v0,smo238322v0,smo239472v0], 289);
const stavesmo236961 = new VF.Stave(66, 844, 363);
stavesmo236961.setAttribute('id', 'stavesmo236961');
stavesmo236961.setBegBarType(1);
stavesmo236961.addClef('treble');
const keysmo236961 = new VF.KeySignature('G');
keysmo236961.addToStave(stavesmo236961);
stavesmo236961.setContext(context);
stavesmo236961.draw();
smo236961v0.draw(context, stavesmo236961);
smo246483.setContext(context);
smo246483.draw();
const stavesmo238322 = new VF.Stave(66, 967, 363);
stavesmo238322.setAttribute('id', 'stavesmo238322');
stavesmo238322.setBegBarType(1);
stavesmo238322.addClef('treble');
const keysmo238322 = new VF.KeySignature('G');
keysmo238322.addToStave(stavesmo238322);
stavesmo238322.setContext(context);
stavesmo238322.draw();
smo238322v0.draw(context, stavesmo238322);
smo246486.setContext(context);
smo246486.draw();
const stavesmo239472 = new VF.Stave(66, 1057, 363);
stavesmo239472.setAttribute('id', 'stavesmo239472');
stavesmo239472.setBegBarType(1);
stavesmo239472.addClef('bass');
const keysmo239472 = new VF.KeySignature('G');
keysmo239472.addToStave(stavesmo239472);
stavesmo239472.setContext(context);
stavesmo239472.draw();
smo239472v0.draw(context, stavesmo239472);
const leftsmo240440stavesmo2369612 = new VF.StaveConnector(stavesmo236961, stavesmo239472).setType(1);
leftsmo240440stavesmo2369612.setContext(context).draw();
const fmtsmo23698413 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo236984v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo236984v0ar = [];
const smo236962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236962.setAttribute('id', 'smo236962');
const smo236964 = new VF.Annotation('-');
smo236964.setAttribute('id', 'smo236964');
smo236964.setFont('Merriweather', 12, 'normal');
smo236964.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236962.addModifier(smo236964);
smo236964.addClass('lyric lyric-1 lyric-hyphen');
smo236984v0ar.push(smo236962);
const smo236965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236965.setAttribute('id', 'smo236965');
smo236984v0ar.push(smo236965);
const smo236966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo236966.setAttribute('id', 'smo236966');
smo236966.addModifier(new VF.Dot(), 0);
const smo236967 = new VF.Annotation('von');
smo236967.setAttribute('id', 'smo236967');
smo236967.setFont('Merriweather', 12, 'normal');
smo236967.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236966.addModifier(smo236967);
smo236967.addClass('lyric lyric-0');
const smo236968 = new VF.Annotation('Trotz');
smo236968.setAttribute('id', 'smo236968');
smo236968.setFont('Merriweather', 12, 'normal');
smo236968.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236966.addModifier(smo236968);
smo236968.addClass('lyric lyric-1 lyric-hyphen');
smo236984v0ar.push(smo236966);
smo236984v0.addTickables(smo236984v0ar)
fmtsmo23698413.joinVoices([smo236984v0]);
const fmtsmo23833913 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo238339v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238339v0ar = [];
const smo238323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo238323.setAttribute('id', 'smo238323');
smo238323.addModifier(new VF.Dot(), 0);
smo238323.addModifier(new VF.Dot(), 1);
smo238339v0ar.push(smo238323);
smo238339v0.addTickables(smo238339v0ar)
fmtsmo23833913.joinVoices([smo238339v0]);
const fmtsmo23949213 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo239492v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239492v0ar = [];
const smo239473 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239473.setAttribute('id', 'smo239473');
smo239492v0ar.push(smo239473);
const smo239474 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239474.setAttribute('id', 'smo239474');
smo239492v0ar.push(smo239474);
const smo239475 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239475.setAttribute('id', 'smo239475');
smo239492v0ar.push(smo239475);
const smo239476 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo239476.setAttribute('id', 'smo239476');
smo239492v0ar.push(smo239476);
smo239492v0.addTickables(smo239492v0ar)
fmtsmo23949213.joinVoices([smo239492v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23698413.format([smo236984v0,smo238339v0,smo239492v0], 147);
const stavesmo236984 = new VF.Stave(429, 844, 161);
stavesmo236984.setAttribute('id', 'stavesmo236984');
stavesmo236984.setBegBarType(VF.Barline.type.NONE);
stavesmo236984.setContext(context);
stavesmo236984.draw();
smo236984v0.draw(context, stavesmo236984);
const stavesmo238339 = new VF.Stave(429, 967, 161);
stavesmo238339.setAttribute('id', 'stavesmo238339');
stavesmo238339.setBegBarType(VF.Barline.type.NONE);
stavesmo238339.setContext(context);
stavesmo238339.draw();
smo238339v0.draw(context, stavesmo238339);
const stavesmo239492 = new VF.Stave(429, 1057, 161);
stavesmo239492.setAttribute('id', 'stavesmo239492');
stavesmo239492.setBegBarType(VF.Barline.type.NONE);
stavesmo239492.setContext(context);
stavesmo239492.draw();
smo239492v0.draw(context, stavesmo239492);
const fmtsmo23700314 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo237003v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237003v0ar = [];
const smo236985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236985.setAttribute('id', 'smo236985');
smo236985.addModifier(new VF.Dot(), 0);
const smo236986 = new VF.Annotation('fern');
smo236986.setAttribute('id', 'smo236986');
smo236986.setFont('Merriweather', 12, 'normal');
smo236986.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236985.addModifier(smo236986);
smo236986.addClass('lyric lyric-0');
const smo236987 = new VF.Annotation('dem');
smo236987.setAttribute('id', 'smo236987');
smo236987.setFont('Merriweather', 12, 'normal');
smo236987.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236985.addModifier(smo236987);
smo236987.addClass('lyric lyric-1');
smo237003v0ar.push(smo236985);
smo237003v0.addTickables(smo237003v0ar)
fmtsmo23700314.joinVoices([smo237003v0]);
const fmtsmo23835614 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo238356v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238356v0ar = [];
const smo238340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
smo238340.setAttribute('id', 'smo238340');
smo238340.addModifier(new VF.Dot(), 0);
smo238340.addModifier(new VF.Dot(), 1);
smo238356v0ar.push(smo238340);
smo238356v0.addTickables(smo238356v0ar)
fmtsmo23835614.joinVoices([smo238356v0]);
const fmtsmo23951414 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo239514v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239514v0ar = [];
const smo239493 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo239493.setAttribute('id', 'smo239493');
smo239514v0ar.push(smo239493);
const smo239494 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo239494.setAttribute('id', 'smo239494');
smo239514v0ar.push(smo239494);
const smo239495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo239495.setAttribute('id', 'smo239495');
smo239514v0ar.push(smo239495);
const smo239496 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo239496.setAttribute('id', 'smo239496');
smo239514v0ar.push(smo239496);
smo239514v0.addTickables(smo239514v0ar)
fmtsmo23951414.joinVoices([smo239514v0]);
const smo239514v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239514v1ar = [];
const smo239497 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
smo239497.setAttribute('id', 'smo239497');
smo239497.setStyle({ fillStyle: "#115511" });
smo239497.addModifier(new VF.Dot(), 0);
smo239514v1ar.push(smo239497);
const smo239498 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo239498.setAttribute('id', 'smo239498');
smo239498.setStyle({ fillStyle: "#115511" });
smo239498.addModifier(new VF.Dot(), 0);
smo239514v1ar.push(smo239498);
smo239514v1.addTickables(smo239514v1ar)
fmtsmo23951414.joinVoices([smo239514v1]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23700314.format([smo237003v0,smo238356v0,smo239514v0,smo239514v1], 144);
const stavesmo237003 = new VF.Stave(590, 844, 158);
stavesmo237003.setAttribute('id', 'stavesmo237003');
stavesmo237003.setBegBarType(VF.Barline.type.NONE);
stavesmo237003.setContext(context);
stavesmo237003.draw();
smo237003v0.draw(context, stavesmo237003);
const stavesmo238356 = new VF.Stave(590, 967, 158);
stavesmo238356.setAttribute('id', 'stavesmo238356');
stavesmo238356.setBegBarType(VF.Barline.type.NONE);
stavesmo238356.setContext(context);
stavesmo238356.draw();
smo238356v0.draw(context, stavesmo238356);
const stavesmo239514 = new VF.Stave(590, 1057, 158);
stavesmo239514.setAttribute('id', 'stavesmo239514');
stavesmo239514.setBegBarType(VF.Barline.type.NONE);
stavesmo239514.setContext(context);
stavesmo239514.draw();
smo239514v0.draw(context, stavesmo239514);
smo239514v1.draw(context, stavesmo239514);
const fmtsmo23703315 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo237033v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237033v0ar = [];
const smo237004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237004.setAttribute('id', 'smo237004');
const smo237005 = new VF.Annotation('-');
smo237005.setAttribute('id', 'smo237005');
smo237005.setFont('Merriweather', 12, 'normal');
smo237005.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237004.addModifier(smo237005);
smo237005.addClass('lyric lyric-0 lyric-hyphen');
smo237033v0ar.push(smo237004);
const smo237006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237006.setAttribute('id', 'smo237006');
const smo237007 = new VF.Annotation('er');
smo237007.setAttribute('id', 'smo237007');
smo237007.setFont('Merriweather', 12, 'normal');
smo237007.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237006.addModifier(smo237007);
smo237007.addClass('lyric lyric-0 lyric-hyphen');
const smo237008 = new VF.Annotation('tat');
smo237008.setAttribute('id', 'smo237008');
smo237008.setFont('Merriweather', 12, 'normal');
smo237008.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237006.addModifier(smo237008);
smo237008.addClass('lyric lyric-1');
smo237033v0ar.push(smo237006);
const smo237009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237009.setAttribute('id', 'smo237009');
const smo237010 = new VF.Annotation('kenn');
smo237010.setAttribute('id', 'smo237010');
smo237010.setFont('Merriweather', 12, 'normal');
smo237010.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237009.addModifier(smo237010);
smo237010.addClass('lyric lyric-0');
const smo237011 = new VF.Annotation('er');
smo237011.setAttribute('id', 'smo237011');
smo237011.setFont('Merriweather', 12, 'normal');
smo237011.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237009.addModifier(smo237011);
smo237011.addClass('lyric lyric-1');
smo237033v0ar.push(smo237009);
const smo237012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237012.setAttribute('id', 'smo237012');
const smo237013 = new VF.Annotation('ich');
smo237013.setAttribute('id', 'smo237013');
smo237013.setFont('Merriweather', 12, 'normal');
smo237013.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237012.addModifier(smo237013);
smo237013.addClass('lyric lyric-0');
const smo237014 = new VF.Annotation('mir');
smo237014.setAttribute('id', 'smo237014');
smo237014.setFont('Merriweather', 12, 'normal');
smo237014.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237012.addModifier(smo237014);
smo237014.addClass('lyric lyric-1');
smo237033v0ar.push(smo237012);
const smo237015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo237015.setAttribute('id', 'smo237015');
const smo237016 = new VF.Annotation('ihn');
smo237016.setAttribute('id', 'smo237016');
smo237016.setFont('Merriweather', 12, 'normal');
smo237016.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237015.addModifier(smo237016);
smo237016.addClass('lyric lyric-0');
const smo237017 = new VF.Annotation('ge');
smo237017.setAttribute('id', 'smo237017');
smo237017.setFont('Merriweather', 12, 'normal');
smo237017.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237015.addModifier(smo237017);
smo237017.addClass('lyric lyric-1 lyric-hyphen');
smo237033v0ar.push(smo237015);
smo237033v0.addTickables(smo237033v0ar)
fmtsmo23703315.joinVoices([smo237033v0]);
const fmtsmo23837315 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo238373v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238373v0ar = [];
const smo238357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
smo238357.setAttribute('id', 'smo238357');
smo238357.addModifier(new VF.Dot(), 0);
smo238357.addModifier(new VF.Dot(), 1);
smo238373v0ar.push(smo238357);
smo238373v0.addTickables(smo238373v0ar)
fmtsmo23837315.joinVoices([smo238373v0]);
const fmtsmo23953615 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo239536v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239536v0ar = [];
const smo239515 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo239515.setAttribute('id', 'smo239515');
smo239536v0ar.push(smo239515);
const smo239516 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo239516.setAttribute('id', 'smo239516');
smo239536v0ar.push(smo239516);
const smo239517 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo239517.setAttribute('id', 'smo239517');
smo239536v0ar.push(smo239517);
const smo239518 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo239518.setAttribute('id', 'smo239518');
smo239536v0ar.push(smo239518);
smo239536v0.addTickables(smo239536v0ar)
fmtsmo23953615.joinVoices([smo239536v0]);
const smo239536v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239536v1ar = [];
const smo239519 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo239519.setAttribute('id', 'smo239519');
smo239519.setStyle({ fillStyle: "#115511" });
smo239519.addModifier(new VF.Dot(), 0);
smo239536v1ar.push(smo239519);
const smo239520 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo239520.setAttribute('id', 'smo239520');
smo239520.setStyle({ fillStyle: "#115511" });
smo239520.addModifier(new VF.Dot(), 0);
smo239536v1ar.push(smo239520);
smo239536v1.addTickables(smo239536v1ar)
fmtsmo23953615.joinVoices([smo239536v1]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246503 = smo237009.getStemDirection();
smo237009.setStemDirection(dirsmo246503);
smo237012.setStemDirection(dirsmo246503);
smo237015.setStemDirection(dirsmo246503);
const smo246503 = new VF.Beam([smo237009,smo237012,smo237015]);
 
// formatting measures in staff group smo240440
fmtsmo23703315.format([smo237033v0,smo238373v0,smo239536v0,smo239536v1], 265);
const stavesmo237033 = new VF.Stave(748, 844, 279);
stavesmo237033.setAttribute('id', 'stavesmo237033');
stavesmo237033.setBegBarType(VF.Barline.type.NONE);
stavesmo237033.setContext(context);
stavesmo237033.draw();
smo237033v0.draw(context, stavesmo237033);
smo246503.setContext(context);
smo246503.draw();
const stavesmo238373 = new VF.Stave(748, 967, 279);
stavesmo238373.setAttribute('id', 'stavesmo238373');
stavesmo238373.setBegBarType(VF.Barline.type.NONE);
stavesmo238373.setContext(context);
stavesmo238373.draw();
smo238373v0.draw(context, stavesmo238373);
const stavesmo239536 = new VF.Stave(748, 1057, 279);
stavesmo239536.setAttribute('id', 'stavesmo239536');
stavesmo239536.setBegBarType(VF.Barline.type.NONE);
stavesmo239536.setContext(context);
stavesmo239536.draw();
smo239536v0.draw(context, stavesmo239536);
smo239536v1.draw(context, stavesmo239536);
const fmtsmo23705216 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo237052v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237052v0ar = [];
const smo237034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237034.setAttribute('id', 'smo237034');
smo237034.addModifier(new VF.Dot(), 0);
const smo237035 = new VF.Annotation('schen');
smo237035.setAttribute('id', 'smo237035');
smo237035.setFont('Merriweather', 12, 'normal');
smo237035.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237034.addModifier(smo237035);
smo237035.addClass('lyric lyric-0');
const smo237036 = new VF.Annotation('stehn');
smo237036.setAttribute('id', 'smo237036');
smo237036.setFont('Merriweather', 12, 'normal');
smo237036.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237034.addModifier(smo237036);
smo237036.addClass('lyric lyric-1');
smo237052v0ar.push(smo237034);
smo237052v0.addTickables(smo237052v0ar)
fmtsmo23705216.joinVoices([smo237052v0]);
const fmtsmo23839016 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo238390v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238390v0ar = [];
const smo238374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo238374.setAttribute('id', 'smo238374');
smo238374.addModifier(new VF.Dot(), 0);
smo238374.addModifier(new VF.Dot(), 1);
smo238390v0ar.push(smo238374);
smo238390v0.addTickables(smo238390v0ar)
fmtsmo23839016.joinVoices([smo238390v0]);
const fmtsmo23956116 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo239561v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239561v0ar = [];
const smo239537 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo239537.setAttribute('id', 'smo239537');
smo239561v0ar.push(smo239537);
const smo239538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo239538.setAttribute('id', 'smo239538');
smo239561v0ar.push(smo239538);
const smo239539 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo239539.setAttribute('id', 'smo239539');
smo239561v0ar.push(smo239539);
const smo239540 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo239540.setAttribute('id', 'smo239540');
smo239561v0ar.push(smo239540);
smo239561v0.addTickables(smo239561v0ar)
fmtsmo23956116.joinVoices([smo239561v0]);
const smo239561v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239561v1ar = [];
const smo239541 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["eb/4/r"]}'))
smo239541.setAttribute('id', 'smo239541');
smo239541.setStyle({ fillStyle: "#115511" });
smo239561v1ar.push(smo239541);
const smo239542 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo239542.setAttribute('id', 'smo239542');
smo239542.setStyle({ fillStyle: "#115511" });
smo239561v1ar.push(smo239542);
const smo239543 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo239543.setAttribute('id', 'smo239543');
smo239543.setStyle({ fillStyle: "#115511" });
smo239561v1ar.push(smo239543);
const smo239544 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo239544.setAttribute('id', 'smo239544');
smo239544.setStyle({ fillStyle: "#115511" });
smo239561v1ar.push(smo239544);
const smo239545 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo239545.setAttribute('id', 'smo239545');
smo239545.setStyle({ fillStyle: "#115511" });
smo239561v1ar.push(smo239545);
smo239561v1.addTickables(smo239561v1ar)
fmtsmo23956116.joinVoices([smo239561v1]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246514 = smo239543.getStemDirection();
smo239543.setStemDirection(dirsmo246514);
smo239544.setStemDirection(dirsmo246514);
smo239545.setStemDirection(dirsmo246514);
const smo246514 = new VF.Beam([smo239543,smo239544,smo239545]);
 
// formatting measures in staff group smo240440
fmtsmo23705216.format([smo237052v0,smo238390v0,smo239561v0,smo239561v1], 170);
const stavesmo237052 = new VF.Stave(1027, 844, 184);
stavesmo237052.setAttribute('id', 'stavesmo237052');
stavesmo237052.setBegBarType(VF.Barline.type.NONE);
stavesmo237052.setContext(context);
stavesmo237052.draw();
smo237052v0.draw(context, stavesmo237052);
const stavesmo238390 = new VF.Stave(1027, 967, 184);
stavesmo238390.setAttribute('id', 'stavesmo238390');
stavesmo238390.setBegBarType(VF.Barline.type.NONE);
stavesmo238390.setContext(context);
stavesmo238390.draw();
smo238390v0.draw(context, stavesmo238390);
const stavesmo239561 = new VF.Stave(1027, 1057, 184);
stavesmo239561.setAttribute('id', 'stavesmo239561');
stavesmo239561.setBegBarType(VF.Barline.type.NONE);
stavesmo239561.setContext(context);
stavesmo239561.draw();
smo239561v0.draw(context, stavesmo239561);
smo239561v1.draw(context, stavesmo239561);
smo246514.setContext(context);
smo246514.draw();
const rightsmo240440stavesmo2370522 = new VF.StaveConnector(stavesmo237052, stavesmo239561).setType(0);
rightsmo240440stavesmo2370522.setContext(context).draw();
const fmtsmo23708217 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo237082v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237082v0ar = [];
const smo237053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237053.setAttribute('id', 'smo237053');
const smo237054 = new VF.Annotation('-');
smo237054.setAttribute('id', 'smo237054');
smo237054.setFont('Merriweather', 12, 'normal');
smo237054.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237053.addModifier(smo237054);
smo237054.addClass('lyric lyric-0 lyric-hyphen');
smo237082v0ar.push(smo237053);
const smo237055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo237055.setAttribute('id', 'smo237055');
const smo237056 = new VF.Annotation('den');
smo237056.setAttribute('id', 'smo237056');
smo237056.setFont('Merriweather', 12, 'normal');
smo237056.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237055.addModifier(smo237056);
smo237056.addClass('lyric lyric-0');
const smo237057 = new VF.Annotation('er');
smo237057.setAttribute('id', 'smo237057');
smo237057.setFont('Merriweather', 12, 'normal');
smo237057.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237055.addModifier(smo237057);
smo237057.addClass('lyric lyric-1');
smo237082v0ar.push(smo237055);
const smo237058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo237058.setAttribute('id', 'smo237058');
const smo237059 = new VF.Annotation('all\'');
smo237059.setAttribute('id', 'smo237059');
smo237059.setFont('Merriweather', 12, 'normal');
smo237059.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237058.addModifier(smo237059);
smo237059.addClass('lyric lyric-0');
const smo237060 = new VF.Annotation('splet');
smo237060.setAttribute('id', 'smo237060');
smo237060.setFont('Merriweather', 12, 'normal');
smo237060.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237058.addModifier(smo237060);
smo237060.addClass('lyric lyric-1');
smo237082v0ar.push(smo237058);
const smo237061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237061.setAttribute('id', 'smo237061');
const smo237062 = new VF.Annotation('sei');
smo237062.setAttribute('id', 'smo237062');
smo237062.setFont('Merriweather', 12, 'normal');
smo237062.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237061.addModifier(smo237062);
smo237062.addClass('lyric lyric-0 lyric-hyphen');
const smo237063 = new VF.Annotation('sei');
smo237063.setAttribute('id', 'smo237063');
smo237063.setFont('Merriweather', 12, 'normal');
smo237063.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237061.addModifier(smo237063);
smo237063.addClass('lyric lyric-1 lyric-hyphen');
smo237082v0ar.push(smo237061);
const smo237064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237064.setAttribute('id', 'smo237064');
const smo237065 = new VF.Annotation('ne');
smo237065.setAttribute('id', 'smo237065');
smo237065.setFont('Merriweather', 12, 'normal');
smo237065.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237064.addModifier(smo237065);
smo237065.addClass('lyric lyric-0');
const smo237066 = new VF.Annotation('ne');
smo237066.setAttribute('id', 'smo237066');
smo237066.setFont('Merriweather', 12, 'normal');
smo237066.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237064.addModifier(smo237066);
smo237066.addClass('lyric lyric-1');
smo237082v0ar.push(smo237064);
smo237082v0.addTickables(smo237082v0ar)
fmtsmo23708217.joinVoices([smo237082v0]);
const fmtsmo23840917 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo238409v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238409v0ar = [];
const smo238391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238391.setAttribute('id', 'smo238391');
smo238391.addModifier(new VF.Dot(), 0);
smo238409v0ar.push(smo238391);
const smo238392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238392.setAttribute('id', 'smo238392');
smo238409v0ar.push(smo238392);
const smo238393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238393.setAttribute('id', 'smo238393');
smo238409v0ar.push(smo238393);
smo238409v0.addTickables(smo238409v0ar)
fmtsmo23840917.joinVoices([smo238409v0]);
const fmtsmo23958217 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo239582v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239582v0ar = [];
const smo239562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo239562.setAttribute('id', 'smo239562');
smo239582v0ar.push(smo239562);
const smo239563 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo239563.setAttribute('id', 'smo239563');
smo239582v0ar.push(smo239563);
const smo239564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo239564.setAttribute('id', 'smo239564');
smo239582v0ar.push(smo239564);
const smo239565 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo239565.setAttribute('id', 'smo239565');
smo239582v0ar.push(smo239565);
smo239582v0.addTickables(smo239582v0ar)
fmtsmo23958217.joinVoices([smo239582v0]);
const smo239582v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239582v1ar = [];
const smo239566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo239566.setAttribute('id', 'smo239566');
smo239566.setStyle({ fillStyle: "#115511" });
smo239566.addModifier(new VF.Dot(), 0);
smo239582v1ar.push(smo239566);
smo239582v1.addTickables(smo239582v1ar)
fmtsmo23958217.joinVoices([smo239582v1]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246524 = smo237058.getStemDirection();
smo237058.setStemDirection(dirsmo246524);
smo237061.setStemDirection(dirsmo246524);
smo237064.setStemDirection(dirsmo246524);
const smo246524 = new VF.Beam([smo237058,smo237061,smo237064]);
 
// formatting measures in staff group smo240440
fmtsmo23708217.format([smo237082v0,smo238409v0,smo239582v0,smo239582v1], 245);
const stavesmo237082 = new VF.Stave(66, 1197, 319);
stavesmo237082.setAttribute('id', 'stavesmo237082');
stavesmo237082.setBegBarType(1);
stavesmo237082.addClef('treble');
const keysmo237082 = new VF.KeySignature('G');
keysmo237082.addToStave(stavesmo237082);
stavesmo237082.setContext(context);
stavesmo237082.draw();
smo237082v0.draw(context, stavesmo237082);
smo246524.setContext(context);
smo246524.draw();
const stavesmo238409 = new VF.Stave(66, 1309, 319);
stavesmo238409.setAttribute('id', 'stavesmo238409');
stavesmo238409.setBegBarType(1);
stavesmo238409.addClef('treble');
const keysmo238409 = new VF.KeySignature('G');
keysmo238409.addToStave(stavesmo238409);
stavesmo238409.setContext(context);
stavesmo238409.draw();
smo238409v0.draw(context, stavesmo238409);
const stavesmo239582 = new VF.Stave(66, 1449, 319);
stavesmo239582.setAttribute('id', 'stavesmo239582');
stavesmo239582.setBegBarType(1);
stavesmo239582.addClef('bass');
const keysmo239582 = new VF.KeySignature('G');
keysmo239582.addToStave(stavesmo239582);
stavesmo239582.setContext(context);
stavesmo239582.draw();
smo239582v0.draw(context, stavesmo239582);
smo239582v1.draw(context, stavesmo239582);
const leftsmo240440stavesmo2370822 = new VF.StaveConnector(stavesmo237082, stavesmo239582).setType(1);
leftsmo240440stavesmo2370822.setContext(context).draw();
const fmtsmo23710418 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo237104v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237104v0ar = [];
const smo237083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237083.setAttribute('id', 'smo237083');
smo237083.addModifier(new VF.Dot(), 0);
const smo237084 = new VF.Annotation('Lie');
smo237084.setAttribute('id', 'smo237084');
smo237084.setFont('Merriweather', 12, 'normal');
smo237084.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237083.addModifier(smo237084);
smo237084.addClass('lyric lyric-0 lyric-hyphen');
const smo237085 = new VF.Annotation('Lie');
smo237085.setAttribute('id', 'smo237085');
smo237085.setFont('Merriweather', 12, 'normal');
smo237085.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237083.addModifier(smo237085);
smo237085.addClass('lyric lyric-1 lyric-hyphen');
smo237104v0ar.push(smo237083);
const smo237086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo237086.setAttribute('id', 'smo237086');
smo237086.addModifier(new VF.Dot(), 0);
const smo237087 = new VF.Annotation('der');
smo237087.setAttribute('id', 'smo237087');
smo237087.setFont('Merriweather', 12, 'normal');
smo237087.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237086.addModifier(smo237087);
smo237087.addClass('lyric lyric-0');
const smo237088 = new VF.Annotation('der');
smo237088.setAttribute('id', 'smo237088');
smo237088.setFont('Merriweather', 12, 'normal');
smo237088.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237086.addModifier(smo237088);
smo237088.addClass('lyric lyric-1');
smo237104v0ar.push(smo237086);
smo237104v0.addTickables(smo237104v0ar)
fmtsmo23710418.joinVoices([smo237104v0]);
const fmtsmo23842718 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo238427v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238427v0ar = [];
const smo238410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238410.setAttribute('id', 'smo238410');
smo238410.addModifier(new VF.Dot(), 0);
smo238427v0ar.push(smo238410);
const smo238411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","f#/4/n"]}'))
smo238411.setAttribute('id', 'smo238411');
smo238411.addModifier(new VF.Dot(), 0);
smo238411.addModifier(new VF.Dot(), 1);
smo238427v0ar.push(smo238411);
smo238427v0.addTickables(smo238427v0ar)
fmtsmo23842718.joinVoices([smo238427v0]);
const fmtsmo23960218 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo239602v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239602v0ar = [];
const smo239583 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo239583.setAttribute('id', 'smo239583');
smo239602v0ar.push(smo239583);
const smo239584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo239584.setAttribute('id', 'smo239584');
smo239602v0ar.push(smo239584);
const smo239585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo239585.setAttribute('id', 'smo239585');
smo239602v0ar.push(smo239585);
const smo239586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo239586.setAttribute('id', 'smo239586');
smo239602v0ar.push(smo239586);
smo239602v0.addTickables(smo239602v0ar)
fmtsmo23960218.joinVoices([smo239602v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23710418.format([smo237104v0,smo238427v0,smo239602v0], 130);
const stavesmo237104 = new VF.Stave(385, 1197, 144);
stavesmo237104.setAttribute('id', 'stavesmo237104');
stavesmo237104.setBegBarType(VF.Barline.type.NONE);
stavesmo237104.setContext(context);
stavesmo237104.draw();
smo237104v0.draw(context, stavesmo237104);
const stavesmo238427 = new VF.Stave(385, 1309, 144);
stavesmo238427.setAttribute('id', 'stavesmo238427');
stavesmo238427.setBegBarType(VF.Barline.type.NONE);
stavesmo238427.setContext(context);
stavesmo238427.draw();
smo238427v0.draw(context, stavesmo238427);
const stavesmo239602 = new VF.Stave(385, 1449, 144);
stavesmo239602.setAttribute('id', 'stavesmo239602');
stavesmo239602.setBegBarType(VF.Barline.type.NONE);
stavesmo239602.setContext(context);
stavesmo239602.draw();
smo239602v0.draw(context, stavesmo239602);
const fmtsmo23713419 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo237134v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237134v0ar = [];
const smo237105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo237105.setAttribute('id', 'smo237105');
const smo237106 = new VF.Annotation('-');
smo237106.setAttribute('id', 'smo237106');
smo237106.setFont('Merriweather', 12, 'normal');
smo237106.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237105.addModifier(smo237106);
smo237106.addClass('lyric lyric-0 lyric-hyphen');
smo237134v0ar.push(smo237105);
const smo237107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo237107.setAttribute('id', 'smo237107');
const smo237108 = new VF.Annotation('sie');
smo237108.setAttribute('id', 'smo237108');
smo237108.setFont('Merriweather', 12, 'normal');
smo237108.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237107.addModifier(smo237108);
smo237108.addClass('lyric lyric-0');
const smo237109 = new VF.Annotation('doch');
smo237109.setAttribute('id', 'smo237109');
smo237109.setFont('Merriweather', 12, 'normal');
smo237109.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237107.addModifier(smo237109);
smo237109.addClass('lyric lyric-1');
smo237134v0ar.push(smo237107);
const smo237110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo237110.setAttribute('id', 'smo237110');
const smo237111 = new VF.Annotation('sind');
smo237111.setAttribute('id', 'smo237111');
smo237111.setFont('Merriweather', 12, 'normal');
smo237111.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237110.addModifier(smo237111);
smo237111.addClass('lyric lyric-0');
const smo237112 = new VF.Annotation('im');
smo237112.setAttribute('id', 'smo237112');
smo237112.setFont('Merriweather', 12, 'normal');
smo237112.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237110.addModifier(smo237112);
smo237112.addClass('lyric lyric-1 lyric-hyphen');
smo237134v0ar.push(smo237110);
const smo237113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo237113.setAttribute('id', 'smo237113');
const smo237114 = new VF.Annotation('ir');
smo237114.setAttribute('id', 'smo237114');
smo237114.setFont('Merriweather', 12, 'normal');
smo237114.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237113.addModifier(smo237114);
smo237114.addClass('lyric lyric-0');
const smo237115 = new VF.Annotation('mer');
smo237115.setAttribute('id', 'smo237115');
smo237115.setFont('Merriweather', 12, 'normal');
smo237115.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237113.addModifier(smo237115);
smo237115.addClass('lyric lyric-1');
smo237134v0ar.push(smo237113);
const smo237116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237116.setAttribute('id', 'smo237116');
const smo237117 = new VF.Annotation('e');
smo237117.setAttribute('id', 'smo237117');
smo237117.setFont('Merriweather', 12, 'normal');
smo237117.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237116.addModifier(smo237117);
smo237117.addClass('lyric lyric-0 lyric-hyphen');
const smo237118 = new VF.Annotation('für');
smo237118.setAttribute('id', 'smo237118');
smo237118.setFont('Merriweather', 12, 'normal');
smo237118.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237116.addModifier(smo237118);
smo237118.addClass('lyric lyric-1');
smo237134v0ar.push(smo237116);
smo237134v0.addTickables(smo237134v0ar)
fmtsmo23713419.joinVoices([smo237134v0]);
const fmtsmo23844519 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo238445v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238445v0ar = [];
const smo238428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238428.setAttribute('id', 'smo238428');
smo238428.addModifier(new VF.Dot(), 0);
smo238445v0ar.push(smo238428);
const smo238429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","f#/4/n"]}'))
smo238429.setAttribute('id', 'smo238429');
smo238429.addModifier(new VF.Dot(), 0);
smo238429.addModifier(new VF.Dot(), 1);
smo238445v0ar.push(smo238429);
smo238445v0.addTickables(smo238445v0ar)
fmtsmo23844519.joinVoices([smo238445v0]);
const fmtsmo23962119 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo239621v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239621v0ar = [];
const smo239603 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo239603.setAttribute('id', 'smo239603');
smo239621v0ar.push(smo239603);
const smo239604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo239604.setAttribute('id', 'smo239604');
smo239604.addModifier(new VF.Dot(), 0);
smo239621v0ar.push(smo239604);
const smo239605 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo239605.setAttribute('id', 'smo239605');
smo239621v0ar.push(smo239605);
smo239621v0.addTickables(smo239621v0ar)
fmtsmo23962119.joinVoices([smo239621v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246537 = smo237110.getStemDirection();
smo237110.setStemDirection(dirsmo246537);
smo237113.setStemDirection(dirsmo246537);
smo237116.setStemDirection(dirsmo246537);
const smo246537 = new VF.Beam([smo237110,smo237113,smo237116]);
 
// formatting measures in staff group smo240440
fmtsmo23713419.format([smo237134v0,smo238445v0,smo239621v0], 272);
const stavesmo237134 = new VF.Stave(529, 1197, 286);
stavesmo237134.setAttribute('id', 'stavesmo237134');
stavesmo237134.setBegBarType(VF.Barline.type.NONE);
stavesmo237134.setContext(context);
stavesmo237134.draw();
smo237134v0.draw(context, stavesmo237134);
smo246537.setContext(context);
smo246537.draw();
const stavesmo238445 = new VF.Stave(529, 1309, 286);
stavesmo238445.setAttribute('id', 'stavesmo238445');
stavesmo238445.setBegBarType(VF.Barline.type.NONE);
stavesmo238445.setContext(context);
stavesmo238445.draw();
smo238445v0.draw(context, stavesmo238445);
const stavesmo239621 = new VF.Stave(529, 1449, 286);
stavesmo239621.setAttribute('id', 'stavesmo239621');
stavesmo239621.setBegBarType(VF.Barline.type.NONE);
stavesmo239621.setContext(context);
stavesmo239621.draw();
smo239621v0.draw(context, stavesmo239621);
const fmtsmo23715320 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo237153v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237153v0ar = [];
const smo237135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo237135.setAttribute('id', 'smo237135');
smo237135.addModifier(new VF.Dot(), 0);
const smo237136 = new VF.Annotation('kannt');
smo237136.setAttribute('id', 'smo237136');
smo237136.setFont('Merriweather', 12, 'normal');
smo237136.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237135.addModifier(smo237136);
smo237136.addClass('lyric lyric-0');
const smo237137 = new VF.Annotation('mich');
smo237137.setAttribute('id', 'smo237137');
smo237137.setFont('Merriweather', 12, 'normal');
smo237137.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237135.addModifier(smo237137);
smo237137.addClass('lyric lyric-1');
smo237153v0ar.push(smo237135);
smo237153v0.addTickables(smo237153v0ar)
fmtsmo23715320.joinVoices([smo237153v0]);
const fmtsmo23846620 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo238466v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238466v0ar = [];
const smo238446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo238446.setAttribute('id', 'smo238446');
smo238466v0ar.push(smo238446);
const smo238447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238447.setAttribute('id', 'smo238447');
smo238466v0ar.push(smo238447);
const smo238448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo238448.setAttribute('id', 'smo238448');
smo238466v0ar.push(smo238448);
const smo238449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo238449.setAttribute('id', 'smo238449');
smo238466v0ar.push(smo238449);
const smo238450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo238450.setAttribute('id', 'smo238450');
smo238466v0ar.push(smo238450);
smo238466v0.addTickables(smo238466v0ar)
fmtsmo23846620.joinVoices([smo238466v0]);
const fmtsmo23964120 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo239641v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239641v0ar = [];
const smo239622 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo239622.setAttribute('id', 'smo239622');
smo239641v0ar.push(smo239622);
const smo239623 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo239623.setAttribute('id', 'smo239623');
smo239641v0ar.push(smo239623);
const smo239624 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239624.setAttribute('id', 'smo239624');
smo239641v0ar.push(smo239624);
const smo239625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239625.setAttribute('id', 'smo239625');
smo239625.addModifier(new VF.Dot(), 0);
smo239641v0ar.push(smo239625);
smo239641v0.addTickables(smo239641v0ar)
fmtsmo23964120.joinVoices([smo239641v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246546 = smo238448.getStemDirection();
smo238448.setStemDirection(dirsmo246546);
smo238449.setStemDirection(dirsmo246546);
smo238450.setStemDirection(dirsmo246546);
const smo246546 = new VF.Beam([smo238448,smo238449,smo238450]);
const dirsmo246549 = smo239622.getStemDirection();
smo239622.setStemDirection(dirsmo246549);
smo239623.setStemDirection(dirsmo246549);
smo239624.setStemDirection(dirsmo246549);
const smo246549 = new VF.Beam([smo239622,smo239623,smo239624]);
 
// formatting measures in staff group smo240440
fmtsmo23715320.format([smo237153v0,smo238466v0,smo239641v0], 205);
const stavesmo237153 = new VF.Stave(815, 1197, 219);
stavesmo237153.setAttribute('id', 'stavesmo237153');
stavesmo237153.setBegBarType(VF.Barline.type.NONE);
stavesmo237153.setContext(context);
stavesmo237153.draw();
smo237153v0.draw(context, stavesmo237153);
const stavesmo238466 = new VF.Stave(815, 1309, 219);
stavesmo238466.setAttribute('id', 'stavesmo238466');
stavesmo238466.setBegBarType(VF.Barline.type.NONE);
stavesmo238466.setContext(context);
stavesmo238466.draw();
smo238466v0.draw(context, stavesmo238466);
smo246546.setContext(context);
smo246546.draw();
const stavesmo239641 = new VF.Stave(815, 1449, 219);
stavesmo239641.setAttribute('id', 'stavesmo239641');
stavesmo239641.setBegBarType(VF.Barline.type.NONE);
stavesmo239641.setContext(context);
stavesmo239641.draw();
smo239641v0.draw(context, stavesmo239641);
smo246549.setContext(context);
smo246549.draw();
const fmtsmo23717421 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo237174v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237174v0ar = [];
const smo237154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo237154.setAttribute('id', 'smo237154');
smo237154.addModifier(new VF.Dot(), 0);
const smo237155 = new VF.Annotation('-');
smo237155.setAttribute('id', 'smo237155');
smo237155.setFont('Merriweather', 12, 'normal');
smo237155.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237154.addModifier(smo237155);
smo237155.addClass('lyric lyric-0 lyric-hyphen');
smo237174v0ar.push(smo237154);
const smo237156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo237156.setAttribute('id', 'smo237156');
smo237156.addModifier(new VF.Dot(), 0);
const smo237157 = new VF.Annotation('Er');
smo237157.setAttribute('id', 'smo237157');
smo237157.setFont('Merriweather', 12, 'normal');
smo237157.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237156.addModifier(smo237157);
smo237157.addClass('lyric lyric-0');
const smo237158 = new VF.Annotation('Mein');
smo237158.setAttribute('id', 'smo237158');
smo237158.setFont('Merriweather', 12, 'normal');
smo237158.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237156.addModifier(smo237158);
smo237158.addClass('lyric lyric-1');
smo237174v0ar.push(smo237156);
smo237174v0.addTickables(smo237174v0ar)
fmtsmo23717421.joinVoices([smo237174v0]);
const fmtsmo23848521 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo238485v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238485v0ar = [];
const smo238467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo238467.setAttribute('id', 'smo238467');
smo238485v0ar.push(smo238467);
const smo238468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238468.setAttribute('id', 'smo238468');
smo238485v0ar.push(smo238468);
const smo238469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238469.setAttribute('id', 'smo238469');
smo238469.addModifier(new VF.Dot(), 0);
smo238485v0ar.push(smo238469);
smo238485v0.addTickables(smo238485v0ar)
fmtsmo23848521.joinVoices([smo238485v0]);
const fmtsmo23966221 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo239662v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239662v0ar = [];
const smo239642 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo239642.setAttribute('id', 'smo239642');
smo239662v0ar.push(smo239642);
const smo239643 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo239643.setAttribute('id', 'smo239643');
smo239662v0ar.push(smo239643);
const smo239644 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239644.setAttribute('id', 'smo239644');
smo239662v0ar.push(smo239644);
const smo239645 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239645.setAttribute('id', 'smo239645');
smo239662v0ar.push(smo239645);
const smo239646 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239646.setAttribute('id', 'smo239646');
smo239662v0ar.push(smo239646);
smo239662v0.addTickables(smo239662v0ar)
fmtsmo23966221.joinVoices([smo239662v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246556 = smo239642.getStemDirection();
smo239642.setStemDirection(dirsmo246556);
smo239643.setStemDirection(dirsmo246556);
smo239644.setStemDirection(dirsmo246556);
const smo246556 = new VF.Beam([smo239642,smo239643,smo239644]);
 
// formatting measures in staff group smo240440
fmtsmo23717421.format([smo237174v0,smo238485v0,smo239662v0], 166);
const stavesmo237174 = new VF.Stave(1034, 1197, 180);
stavesmo237174.setAttribute('id', 'stavesmo237174');
stavesmo237174.setBegBarType(VF.Barline.type.NONE);
stavesmo237174.setContext(context);
stavesmo237174.draw();
smo237174v0.draw(context, stavesmo237174);
const stavesmo238485 = new VF.Stave(1034, 1309, 180);
stavesmo238485.setAttribute('id', 'stavesmo238485');
stavesmo238485.setBegBarType(VF.Barline.type.NONE);
stavesmo238485.setContext(context);
stavesmo238485.draw();
smo238485v0.draw(context, stavesmo238485);
const stavesmo239662 = new VF.Stave(1034, 1449, 180);
stavesmo239662.setAttribute('id', 'stavesmo239662');
stavesmo239662.setBegBarType(VF.Barline.type.NONE);
stavesmo239662.setContext(context);
stavesmo239662.draw();
smo239662v0.draw(context, stavesmo239662);
smo246556.setContext(context);
smo246556.draw();
const rightsmo240440stavesmo2371742 = new VF.StaveConnector(stavesmo237174, stavesmo239662).setType(0);
rightsmo240440stavesmo2371742.setContext(context).draw();
// modifier from 0-12-0-3 to 0-13-0-0
const smo247357 = new VF.StaveTie({ first_note: smo236943, last_note: smo236962, 
          firstNote: smo236943, lastNote: smo236962, first_indices: [0], last_indices: [0]});
smo247357.setContext(context).draw();
// modifier from 0-14-0-0 to 0-15-0-0
const smo247358 = new VF.StaveTie({ first_note: smo236985, last_note: smo237004, 
          firstNote: smo236985, lastNote: smo237004, first_indices: [0], last_indices: [0]});
smo247358.setContext(context).draw();
// modifier from 0-16-0-0 to 0-16-0-0
const smo247359 = new VF.StaveTie({ first_note: smo237034, last_note: smo237034, 
          firstNote: smo237034, lastNote: smo237034, first_indices: [0], last_indices: [0]});
smo247359.setContext(context).draw();
// modifier from 0-18-0-1 to 0-19-0-0
const smo247360 = new VF.StaveTie({ first_note: smo237086, last_note: smo237105, 
          firstNote: smo237086, lastNote: smo237105, first_indices: [0], last_indices: [0]});
smo247360.setContext(context).draw();
// modifier from 0-20-0-0 to 0-21-0-0
const smo247361 = new VF.StaveTie({ first_note: smo237135, last_note: smo237154, 
          firstNote: smo237135, lastNote: smo237154, first_indices: [0], last_indices: [0]});
smo247361.setContext(context).draw();
// modifier from 1-8-0-0 to 1-9-0-0
const smo247362 = new VF.StaveTie({ first_note: smo238235, last_note: smo238252, 
          firstNote: smo238235, lastNote: smo238252, first_indices: [0,1], last_indices: [0,1]});
smo247362.setContext(context).draw();
// modifier from 1-10-0-0 to 1-11-0-0
const smo247363 = new VF.StaveTie({ first_note: smo238269, last_note: smo238286, 
          firstNote: smo238269, lastNote: smo238286, first_indices: [0,1], last_indices: [0,1]});
smo247363.setContext(context).draw();
// modifier from 1-6-0-0 to 1-7-0-0
const smo247364 = new VF.StaveTie({ first_note: smo238201, last_note: null, 
          firstNote: smo238201, lastNote: null, first_indices: [0,1], last_indices: [0,1]});
smo247364.setContext(context).draw();
// modifier from 1-6-0-0 to 1-7-0-0
const smo247365 = new VF.StaveTie({ first_note: null, last_note: smo238218, 
          firstNote: null, lastNote: smo238218, first_indices: [0,1], last_indices: [0,1]});
smo247365.setContext(context).draw();
// modifier from 1-4-0-0 to 1-5-0-0
const smo247366 = new VF.StaveTie({ first_note: smo238166, last_note: smo238183, 
          firstNote: smo238166, lastNote: smo238183, first_indices: [0], last_indices: [0]});
smo247366.setContext(context).draw();
// modifier from 2-15-1-0 to 2-15-1-1
const smo247367 = new VF.Curve(smo239519, smo239520, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo247367.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo236794').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo236814').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236815').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo236817').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236818').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo236820').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo236821').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo236823').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236824').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo236842').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo236843').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo236863').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo236864').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo236866').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236867').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo236869').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236870').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo236872').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236873').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo236891').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236892').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo236895').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo236913').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236914').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo236917').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo236935').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236936').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo236938').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo236939').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo236941').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo236942').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo236944').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236945').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236964').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo236968').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo236986').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo236987').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo237005').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo237007').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237008').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo237010').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo237011').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo237013').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo237014').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo237016').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo237017').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo237035').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo237036').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo237054').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo237056').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237057').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo237059').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237060').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo237062').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237063').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo237065').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo237066').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo237084').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237085').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo237088').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo237106').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo237108').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237109').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo237111').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237112').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo237114').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo237115').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo237117').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo237118').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo237136').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237137').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo237155').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo237157').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo237158').setAttributeNS('', 'transform', 'translate(0 18)');
}
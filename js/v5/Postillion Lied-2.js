// @@ Postillionlied p 3/3  by Franz Grothe
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = VexFlow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1421.487603305785');
svg.setAttributeNS('', 'height', '1839.5721925133685');
svg.setAttributeNS('', 'viewBox', '0 0 1343 1738');
//
// create the musical objects
VF.setFonts("Leland","Bravura","Academico");
const fmtsmo22911544 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo229115v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229115v0ar = [];
const smo229088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo229088.setAttribute('id', 'smo229088');
const smo229089 = new VF.Annotation('ü');
smo229089.setAttribute('id', 'smo229089');
smo229089.setFont('Merriweather', 12, 'normal');
smo229089.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229088.addModifier(smo229089);
smo229089.addClass('lyric lyric-0 lyric-hyphen');
const smo229090 = new VF.Annotation('Ich');
smo229090.setAttribute('id', 'smo229090');
smo229090.setFont('Merriweather', 12, 'normal');
smo229090.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229088.addModifier(smo229090);
smo229090.addClass('lyric lyric-1');
smo229115v0ar.push(smo229088);
const smo229091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229091.setAttribute('id', 'smo229091');
const smo229092 = new VF.Annotation('ber');
smo229092.setAttribute('id', 'smo229092');
smo229092.setFont('Merriweather', 12, 'normal');
smo229092.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229091.addModifier(smo229092);
smo229092.addClass('lyric lyric-0');
const smo229093 = new VF.Annotation('bin');
smo229093.setAttribute('id', 'smo229093');
smo229093.setFont('Merriweather', 12, 'normal');
smo229093.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229091.addModifier(smo229093);
smo229093.addClass('lyric lyric-1');
smo229115v0ar.push(smo229091);
const smo229094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo229094.setAttribute('id', 'smo229094');
const smo229095 = new VF.Annotation('das');
smo229095.setAttribute('id', 'smo229095');
smo229095.setFont('Merriweather', 12, 'normal');
smo229095.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229094.addModifier(smo229095);
smo229095.addClass('lyric lyric-0');
const smo229096 = new VF.Annotation('ganz');
smo229096.setAttribute('id', 'smo229096');
smo229096.setFont('Merriweather', 12, 'normal');
smo229096.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229094.addModifier(smo229096);
smo229096.addClass('lyric lyric-1');
smo229115v0ar.push(smo229094);
const smo229097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo229097.setAttribute('id', 'smo229097');
smo229097.addModifier(new VF.Dot(), 0);
const smo229098 = new VF.Annotation('Land;');
smo229098.setAttribute('id', 'smo229098');
smo229098.setFont('Merriweather', 12, 'normal');
smo229098.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229097.addModifier(smo229098);
smo229098.addClass('lyric lyric-0');
const smo229099 = new VF.Annotation('nah!');
smo229099.setAttribute('id', 'smo229099');
smo229099.setFont('Merriweather', 12, 'normal');
smo229099.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229097.addModifier(smo229099);
smo229099.addClass('lyric lyric-1');
smo229115v0ar.push(smo229097);
smo229115v0.addTickables(smo229115v0ar)
fmtsmo22911544.joinVoices([smo229115v0]);
const fmtsmo23027544 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo230275v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230275v0ar = [];
const smo230259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo230259.setAttribute('id', 'smo230259');
smo230259.addModifier(new VF.Dot(), 0);
smo230259.addModifier(new VF.Dot(), 1);
smo230275v0ar.push(smo230259);
smo230275v0.addTickables(smo230275v0ar)
fmtsmo23027544.joinVoices([smo230275v0]);
const fmtsmo23150344 = new VF.Formatter();
//
// voices and notes for stave 2 44
const smo231503v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231503v0ar = [];
const smo231484 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo231484.setAttribute('id', 'smo231484');
smo231503v0ar.push(smo231484);
const smo231485 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo231485.setAttribute('id', 'smo231485');
smo231503v0ar.push(smo231485);
const smo231486 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo231486.setAttribute('id', 'smo231486');
smo231503v0ar.push(smo231486);
const smo231487 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo231487.setAttribute('id', 'smo231487');
smo231503v0ar.push(smo231487);
smo231503v0.addTickables(smo231503v0ar)
fmtsmo23150344.joinVoices([smo231503v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo238117 = smo229088.getStemDirection();
smo229088.setStemDirection(dirsmo238117);
smo229091.setStemDirection(dirsmo238117);
smo229094.setStemDirection(dirsmo238117);
const smo238117 = new VF.Beam([smo229088,smo229091,smo229094]);
 
// formatting measures in staff group smo231827
fmtsmo22911544.format([smo229115v0,smo230275v0,smo231503v0], 290);
const stavesmo229115 = new VF.Stave(66, 98.0266026666668, 354);
stavesmo229115.setAttribute('id', 'stavesmo229115');
stavesmo229115.setBegBarType(1);
stavesmo229115.addClef('treble');
const keysmo229115 = new VF.KeySignature('G');
keysmo229115.addToStave(stavesmo229115);
stavesmo229115.setContext(context);
stavesmo229115.draw();
smo229115v0.draw(context, stavesmo229115);
smo238117.setContext(context);
smo238117.draw();
const stavesmo230275 = new VF.Stave(66, 280.0266026666668, 354);
stavesmo230275.setAttribute('id', 'stavesmo230275');
stavesmo230275.setBegBarType(1);
stavesmo230275.addClef('treble');
const keysmo230275 = new VF.KeySignature('G');
keysmo230275.addToStave(stavesmo230275);
stavesmo230275.setContext(context);
stavesmo230275.draw();
smo230275v0.draw(context, stavesmo230275);
const stavesmo231503 = new VF.Stave(66, 386.0266026666668, 354);
stavesmo231503.setAttribute('id', 'stavesmo231503');
stavesmo231503.setBegBarType(1);
stavesmo231503.addClef('bass');
const keysmo231503 = new VF.KeySignature('G');
keysmo231503.addToStave(stavesmo231503);
stavesmo231503.setContext(context);
stavesmo231503.draw();
smo231503v0.draw(context, stavesmo231503);
const leftsmo231827stavesmo2291152 = new VF.StaveConnector(stavesmo229115, stavesmo231503).setType(1);
leftsmo231827stavesmo2291152.setContext(context).draw();
const fmtsmo22913545 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo229135v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229135v0ar = [];
const smo229116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo229116.setAttribute('id', 'smo229116');
smo229116.addModifier(new VF.Dot(), 0);
smo229135v0ar.push(smo229116);
const smo229117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo229117.setAttribute('id', 'smo229117');
smo229117.addModifier(new VF.Dot(), 0);
const smo229118 = new VF.Annotation('von');
smo229118.setAttribute('id', 'smo229118');
smo229118.setFont('Merriweather', 12, 'normal');
smo229118.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229117.addModifier(smo229118);
smo229118.addClass('lyric lyric-0');
const smo229119 = new VF.Annotation('Tra');
smo229119.setAttribute('id', 'smo229119');
smo229119.setFont('Merriweather', 12, 'normal');
smo229119.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229117.addModifier(smo229119);
smo229119.addClass('lyric lyric-1 lyric-hyphen');
smo229135v0ar.push(smo229117);
smo229135v0.addTickables(smo229135v0ar)
fmtsmo22913545.joinVoices([smo229135v0]);
const fmtsmo23029245 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo230292v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230292v0ar = [];
const smo230276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo230276.setAttribute('id', 'smo230276');
smo230276.addModifier(new VF.Dot(), 0);
smo230276.addModifier(new VF.Dot(), 1);
smo230292v0ar.push(smo230276);
smo230292v0.addTickables(smo230292v0ar)
fmtsmo23029245.joinVoices([smo230292v0]);
const fmtsmo23152345 = new VF.Formatter();
//
// voices and notes for stave 2 45
const smo231523v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231523v0ar = [];
const smo231504 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo231504.setAttribute('id', 'smo231504');
smo231523v0ar.push(smo231504);
const smo231505 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo231505.setAttribute('id', 'smo231505');
smo231523v0ar.push(smo231505);
const smo231506 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo231506.setAttribute('id', 'smo231506');
smo231523v0ar.push(smo231506);
const smo231507 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo231507.setAttribute('id', 'smo231507');
smo231523v0ar.push(smo231507);
smo231523v0.addTickables(smo231523v0ar)
fmtsmo23152345.joinVoices([smo231523v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22913545.format([smo229135v0,smo230292v0,smo231523v0], 152);
const stavesmo229135 = new VF.Stave(420, 98.0266026666668, 166);
stavesmo229135.setAttribute('id', 'stavesmo229135');
stavesmo229135.setBegBarType(VF.Barline.type.NONE);
stavesmo229135.setContext(context);
stavesmo229135.draw();
smo229135v0.draw(context, stavesmo229135);
const stavesmo230292 = new VF.Stave(420, 280.0266026666668, 166);
stavesmo230292.setAttribute('id', 'stavesmo230292');
stavesmo230292.setBegBarType(VF.Barline.type.NONE);
stavesmo230292.setContext(context);
stavesmo230292.draw();
smo230292v0.draw(context, stavesmo230292);
const stavesmo231523 = new VF.Stave(420, 386.0266026666668, 166);
stavesmo231523.setAttribute('id', 'stavesmo231523');
stavesmo231523.setBegBarType(VF.Barline.type.NONE);
stavesmo231523.setContext(context);
stavesmo231523.draw();
smo231523v0.draw(context, stavesmo231523);
const fmtsmo22915446 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo229154v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229154v0ar = [];
const smo229136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo229136.setAttribute('id', 'smo229136');
smo229136.addModifier(new VF.Dot(), 0);
const smo229137 = new VF.Annotation('fern');
smo229137.setAttribute('id', 'smo229137');
smo229137.setFont('Merriweather', 12, 'normal');
smo229137.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229136.addModifier(smo229137);
smo229137.addClass('lyric lyric-0');
const smo229138 = new VF.Annotation('ra!');
smo229138.setAttribute('id', 'smo229138');
smo229138.setFont('Merriweather', 12, 'normal');
smo229138.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229136.addModifier(smo229138);
smo229138.addClass('lyric lyric-1');
smo229154v0ar.push(smo229136);
smo229154v0.addTickables(smo229154v0ar)
fmtsmo22915446.joinVoices([smo229154v0]);
const fmtsmo23031246 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo230312v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230312v0ar = [];
const smo230293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo230293.setAttribute('id', 'smo230293');
smo230293.addModifier(new VF.Dot(), 0);
smo230312v0ar.push(smo230293);
smo230312v0.addTickables(smo230312v0ar)
fmtsmo23031246.joinVoices([smo230312v0]);
const smo230312v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230312v1ar = [];
const smo230294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/5/r"]}'))
smo230294.setAttribute('id', 'smo230294');
smo230294.setStyle({ fillStyle: "#115511" });
smo230294.addModifier(new VF.Dot(), 0);
smo230312v1ar.push(smo230294);
const smo230295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/5/n"]}'))
smo230295.setAttribute('id', 'smo230295');
smo230295.setStyle({ fillStyle: "#115511" });
smo230312v1ar.push(smo230295);
const smo230296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo230296.setAttribute('id', 'smo230296');
smo230296.setStyle({ fillStyle: "#115511" });
smo230312v1ar.push(smo230296);
smo230312v1.addTickables(smo230312v1ar)
fmtsmo23031246.joinVoices([smo230312v1]);
const fmtsmo23154346 = new VF.Formatter();
//
// voices and notes for stave 2 46
const smo231543v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231543v0ar = [];
const smo231524 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo231524.setAttribute('id', 'smo231524');
smo231543v0ar.push(smo231524);
const smo231525 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo231525.setAttribute('id', 'smo231525');
smo231543v0ar.push(smo231525);
const smo231526 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo231526.setAttribute('id', 'smo231526');
smo231543v0ar.push(smo231526);
const smo231527 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo231527.setAttribute('id', 'smo231527');
smo231543v0ar.push(smo231527);
smo231543v0.addTickables(smo231543v0ar)
fmtsmo23154346.joinVoices([smo231543v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22915446.format([smo229154v0,smo230312v0,smo230312v1,smo231543v0], 142);
const stavesmo229154 = new VF.Stave(586, 98.0266026666668, 156);
stavesmo229154.setAttribute('id', 'stavesmo229154');
stavesmo229154.setBegBarType(VF.Barline.type.NONE);
stavesmo229154.setContext(context);
stavesmo229154.draw();
smo229154v0.draw(context, stavesmo229154);
const stavesmo230312 = new VF.Stave(586, 280.0266026666668, 156);
stavesmo230312.setAttribute('id', 'stavesmo230312');
stavesmo230312.setBegBarType(VF.Barline.type.NONE);
stavesmo230312.setContext(context);
stavesmo230312.draw();
smo230312v0.draw(context, stavesmo230312);
smo230312v1.draw(context, stavesmo230312);
const stavesmo231543 = new VF.Stave(586, 386.0266026666668, 156);
stavesmo231543.setAttribute('id', 'stavesmo231543');
stavesmo231543.setBegBarType(VF.Barline.type.NONE);
stavesmo231543.setContext(context);
stavesmo231543.draw();
smo231543v0.draw(context, stavesmo231543);
const fmtsmo22918447 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo229184v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229184v0ar = [];
const smo229155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo229155.setAttribute('id', 'smo229155');
smo229184v0ar.push(smo229155);
const smo229157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229157.setAttribute('id', 'smo229157');
const smo229158 = new VF.Annotation('er');
smo229158.setAttribute('id', 'smo229158');
smo229158.setFont('Merriweather', 12, 'normal');
smo229158.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229157.addModifier(smo229158);
smo229158.addClass('lyric lyric-0');
const smo229159 = new VF.Annotation('Ich');
smo229159.setAttribute('id', 'smo229159');
smo229159.setFont('Merriweather', 12, 'normal');
smo229159.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229157.addModifier(smo229159);
smo229159.addClass('lyric lyric-1');
smo229184v0ar.push(smo229157);
const smo229160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo229160.setAttribute('id', 'smo229160');
const smo229161 = new VF.Annotation('kem');
smo229161.setAttribute('id', 'smo229161');
smo229161.setFont('Merriweather', 12, 'normal');
smo229161.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229160.addModifier(smo229161);
smo229161.addClass('lyric lyric-0');
const smo229162 = new VF.Annotation('hö');
smo229162.setAttribute('id', 'smo229162');
smo229162.setFont('Merriweather', 12, 'normal');
smo229162.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229160.addModifier(smo229162);
smo229162.addClass('lyric lyric-1 lyric-hyphen');
smo229184v0ar.push(smo229160);
const smo229163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo229163.setAttribute('id', 'smo229163');
const smo229164 = new VF.Annotation('ich');
smo229164.setAttribute('id', 'smo229164');
smo229164.setFont('Merriweather', 12, 'normal');
smo229164.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229163.addModifier(smo229164);
smo229164.addClass('lyric lyric-0');
const smo229165 = new VF.Annotation('re');
smo229165.setAttribute('id', 'smo229165');
smo229165.setFont('Merriweather', 12, 'normal');
smo229165.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229163.addModifier(smo229165);
smo229165.addClass('lyric lyric-1');
smo229184v0ar.push(smo229163);
const smo229166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229166.setAttribute('id', 'smo229166');
const smo229167 = new VF.Annotation('ihn');
smo229167.setAttribute('id', 'smo229167');
smo229167.setFont('Merriweather', 12, 'normal');
smo229167.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229166.addModifier(smo229167);
smo229167.addClass('lyric lyric-0');
const smo229168 = new VF.Annotation('sein');
smo229168.setAttribute('id', 'smo229168');
smo229168.setFont('Merriweather', 12, 'normal');
smo229168.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229166.addModifier(smo229168);
smo229168.addClass('lyric lyric-1');
smo229184v0ar.push(smo229166);
smo229184v0.addTickables(smo229184v0ar)
fmtsmo22918447.joinVoices([smo229184v0]);
const fmtsmo23033147 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo230331v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230331v0ar = [];
const smo230313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo230313.setAttribute('id', 'smo230313');
smo230313.addModifier(new VF.Dot(), 0);
smo230331v0ar.push(smo230313);
smo230331v0.addTickables(smo230331v0ar)
fmtsmo23033147.joinVoices([smo230331v0]);
const smo230331v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230331v1ar = [];
const smo230314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/6/n"]}'))
smo230314.setAttribute('id', 'smo230314');
smo230314.setStyle({ fillStyle: "#115511" });
smo230314.addModifier(new VF.Dot(), 0);
smo230331v1ar.push(smo230314);
const smo230315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/5/r"]}'))
smo230315.setAttribute('id', 'smo230315');
smo230315.setStyle({ fillStyle: "#115511" });
smo230315.addModifier(new VF.Dot(), 0);
smo230331v1ar.push(smo230315);
smo230331v1.addTickables(smo230331v1ar)
fmtsmo23033147.joinVoices([smo230331v1]);
const fmtsmo23156347 = new VF.Formatter();
//
// voices and notes for stave 2 47
const smo231563v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231563v0ar = [];
const smo231544 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo231544.setAttribute('id', 'smo231544');
smo231563v0ar.push(smo231544);
const smo231545 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo231545.setAttribute('id', 'smo231545');
smo231563v0ar.push(smo231545);
const smo231546 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo231546.setAttribute('id', 'smo231546');
smo231563v0ar.push(smo231546);
const smo231547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo231547.setAttribute('id', 'smo231547');
smo231563v0ar.push(smo231547);
smo231563v0.addTickables(smo231563v0ar)
fmtsmo23156347.joinVoices([smo231563v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo238136 = smo229160.getStemDirection();
smo229160.setStemDirection(dirsmo238136);
smo229163.setStemDirection(dirsmo238136);
smo229166.setStemDirection(dirsmo238136);
const smo238136 = new VF.Beam([smo229160,smo229163,smo229166]);
 
// formatting measures in staff group smo231827
fmtsmo22918447.format([smo229184v0,smo230331v0,smo230331v1,smo231563v0], 285);
const stavesmo229184 = new VF.Stave(742, 98.0266026666668, 299);
stavesmo229184.setAttribute('id', 'stavesmo229184');
stavesmo229184.setBegBarType(VF.Barline.type.NONE);
stavesmo229184.setContext(context);
stavesmo229184.draw();
smo229184v0.draw(context, stavesmo229184);
smo238136.setContext(context);
smo238136.draw();
const stavesmo230331 = new VF.Stave(742, 280.0266026666668, 299);
stavesmo230331.setAttribute('id', 'stavesmo230331');
stavesmo230331.setBegBarType(VF.Barline.type.NONE);
stavesmo230331.setContext(context);
stavesmo230331.draw();
smo230331v0.draw(context, stavesmo230331);
smo230331v1.draw(context, stavesmo230331);
const stavesmo231563 = new VF.Stave(742, 386.0266026666668, 299);
stavesmo231563.setAttribute('id', 'stavesmo231563');
stavesmo231563.setBegBarType(VF.Barline.type.NONE);
stavesmo231563.setContext(context);
stavesmo231563.draw();
smo231563v0.draw(context, stavesmo231563);
const fmtsmo22920348 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo229203v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229203v0ar = [];
const smo229185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo229185.setAttribute('id', 'smo229185');
smo229185.addModifier(new VF.Dot(), 0);
const smo229186 = new VF.Annotation('schon');
smo229186.setAttribute('id', 'smo229186');
smo229186.setFont('Merriweather', 12, 'normal');
smo229186.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229185.addModifier(smo229186);
smo229186.addClass('lyric lyric-0');
const smo229187 = new VF.Annotation('Lied!');
smo229187.setAttribute('id', 'smo229187');
smo229187.setFont('Merriweather', 12, 'normal');
smo229187.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229185.addModifier(smo229187);
smo229187.addClass('lyric lyric-1');
smo229203v0ar.push(smo229185);
smo229203v0.addTickables(smo229203v0ar)
fmtsmo22920348.joinVoices([smo229203v0]);
const fmtsmo23035348 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo230353v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230353v0ar = [];
const smo230332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo230332.setAttribute('id', 'smo230332');
smo230332.addModifier(new VF.Dot(), 0);
smo230353v0ar.push(smo230332);
const smo230333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo230333.setAttribute('id', 'smo230333');
smo230353v0ar.push(smo230333);
const smo230334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo230334.setAttribute('id', 'smo230334');
smo230353v0ar.push(smo230334);
smo230353v0.addTickables(smo230353v0ar)
fmtsmo23035348.joinVoices([smo230353v0]);
const smo230353v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230353v1ar = [];
const smo230335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/5/r"]}'))
smo230335.setAttribute('id', 'smo230335');
smo230335.setStyle({ fillStyle: "#115511" });
smo230335.addModifier(new VF.Dot(), 0);
smo230353v1ar.push(smo230335);
const smo230336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo230336.setAttribute('id', 'smo230336');
smo230336.setStyle({ fillStyle: "#115511" });
smo230353v1ar.push(smo230336);
const smo230337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo230337.setAttribute('id', 'smo230337');
smo230337.setStyle({ fillStyle: "#115511" });
smo230353v1ar.push(smo230337);
smo230353v1.addTickables(smo230353v1ar)
fmtsmo23035348.joinVoices([smo230353v1]);
const fmtsmo23158348 = new VF.Formatter();
//
// voices and notes for stave 2 48
const smo231583v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231583v0ar = [];
const smo231564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo231564.setAttribute('id', 'smo231564');
smo231583v0ar.push(smo231564);
const smo231565 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo231565.setAttribute('id', 'smo231565');
smo231583v0ar.push(smo231565);
const smo231566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo231566.setAttribute('id', 'smo231566');
smo231583v0ar.push(smo231566);
const smo231567 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo231567.setAttribute('id', 'smo231567');
smo231583v0ar.push(smo231567);
smo231583v0.addTickables(smo231583v0ar)
fmtsmo23158348.joinVoices([smo231583v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22920348.format([smo229203v0,smo230353v0,smo230353v1,smo231583v0], 156);
const stavesmo229203 = new VF.Stave(1041, 98.0266026666668, 170);
stavesmo229203.setAttribute('id', 'stavesmo229203');
stavesmo229203.setBegBarType(VF.Barline.type.NONE);
stavesmo229203.setContext(context);
stavesmo229203.draw();
smo229203v0.draw(context, stavesmo229203);
const stavesmo230353 = new VF.Stave(1041, 280.0266026666668, 170);
stavesmo230353.setAttribute('id', 'stavesmo230353');
stavesmo230353.setBegBarType(VF.Barline.type.NONE);
stavesmo230353.setContext(context);
stavesmo230353.draw();
smo230353v0.draw(context, stavesmo230353);
smo230353v1.draw(context, stavesmo230353);
const stavesmo231583 = new VF.Stave(1041, 386.0266026666668, 170);
stavesmo231583.setAttribute('id', 'stavesmo231583');
stavesmo231583.setBegBarType(VF.Barline.type.NONE);
stavesmo231583.setContext(context);
stavesmo231583.draw();
smo231583v0.draw(context, stavesmo231583);
const rightsmo231827stavesmo2292032 = new VF.StaveConnector(stavesmo229203, stavesmo231583).setType(0);
rightsmo231827stavesmo2292032.setContext(context).draw();
const fmtsmo22923349 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo229233v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229233v0ar = [];
const smo229204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo229204.setAttribute('id', 'smo229204');
const smo229205 = new VF.Annotation('-');
smo229205.setAttribute('id', 'smo229205');
smo229205.setFont('Merriweather', 12, 'normal');
smo229205.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229204.addModifier(smo229205);
smo229205.addClass('lyric lyric-0 lyric-hyphen');
smo229233v0ar.push(smo229204);
const smo229206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229206.setAttribute('id', 'smo229206');
const smo229207 = new VF.Annotation('denn');
smo229207.setAttribute('id', 'smo229207');
smo229207.setFont('Merriweather', 12, 'normal');
smo229207.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229206.addModifier(smo229207);
smo229207.addClass('lyric lyric-0');
const smo229208 = new VF.Annotation('Es');
smo229208.setAttribute('id', 'smo229208');
smo229208.setFont('Merriweather', 12, 'normal');
smo229208.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229206.addModifier(smo229208);
smo229208.addClass('lyric lyric-1');
smo229233v0ar.push(smo229206);
const smo229209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo229209.setAttribute('id', 'smo229209');
const smo229210 = new VF.Annotation('all');
smo229210.setAttribute('id', 'smo229210');
smo229210.setFont('Merriweather', 12, 'normal');
smo229210.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229209.addModifier(smo229210);
smo229210.addClass('lyric lyric-0');
const smo229211 = new VF.Annotation('soli');
smo229211.setAttribute('id', 'smo229211');
smo229211.setFont('Merriweather', 12, 'normal');
smo229211.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229209.addModifier(smo229211);
smo229211.addClass('lyric lyric-1');
smo229233v0ar.push(smo229209);
const smo229212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo229212.setAttribute('id', 'smo229212');
const smo229213 = new VF.Annotation('sei');
smo229213.setAttribute('id', 'smo229213');
smo229213.setFont('Merriweather', 12, 'normal');
smo229213.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229212.addModifier(smo229213);
smo229213.addClass('lyric lyric-0 lyric-hyphen');
const smo229214 = new VF.Annotation('zu');
smo229214.setAttribute('id', 'smo229214');
smo229214.setFont('Merriweather', 12, 'normal');
smo229214.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229212.addModifier(smo229214);
smo229214.addClass('lyric lyric-1 lyric-hyphen');
smo229233v0ar.push(smo229212);
const smo229215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229215.setAttribute('id', 'smo229215');
const smo229216 = new VF.Annotation('ne');
smo229216.setAttribute('id', 'smo229216');
smo229216.setFont('Merriweather', 12, 'normal');
smo229216.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229215.addModifier(smo229216);
smo229216.addClass('lyric lyric-0');
const smo229217 = new VF.Annotation('mir');
smo229217.setAttribute('id', 'smo229217');
smo229217.setFont('Merriweather', 12, 'normal');
smo229217.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229215.addModifier(smo229217);
smo229217.addClass('lyric lyric-1');
smo229233v0ar.push(smo229215);
smo229233v0.addTickables(smo229233v0ar)
fmtsmo22923349.joinVoices([smo229233v0]);
const fmtsmo23037149 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo230371v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230371v0ar = [];
const smo230354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo230354.setAttribute('id', 'smo230354');
smo230354.addModifier(new VF.Dot(), 0);
smo230371v0ar.push(smo230354);
smo230371v0.addTickables(smo230371v0ar)
fmtsmo23037149.joinVoices([smo230371v0]);
const smo230371v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230371v1ar = [];
const smo230355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/6/n"]}'))
smo230355.setAttribute('id', 'smo230355');
smo230355.setStyle({ fillStyle: "#115511" });
smo230355.addModifier(new VF.Dot(), 0);
smo230371v1ar.push(smo230355);
smo230371v1.addTickables(smo230371v1ar)
fmtsmo23037149.joinVoices([smo230371v1]);
const fmtsmo23160349 = new VF.Formatter();
//
// voices and notes for stave 2 49
const smo231603v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231603v0ar = [];
const smo231584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo231584.setAttribute('id', 'smo231584');
smo231603v0ar.push(smo231584);
const smo231585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo231585.setAttribute('id', 'smo231585');
smo231603v0ar.push(smo231585);
const smo231586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo231586.setAttribute('id', 'smo231586');
smo231603v0ar.push(smo231586);
const smo231587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo231587.setAttribute('id', 'smo231587');
smo231603v0ar.push(smo231587);
smo231603v0.addTickables(smo231603v0ar)
fmtsmo23160349.joinVoices([smo231603v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo238157 = smo229209.getStemDirection();
smo229209.setStemDirection(dirsmo238157);
smo229212.setStemDirection(dirsmo238157);
smo229215.setStemDirection(dirsmo238157);
const smo238157 = new VF.Beam([smo229209,smo229212,smo229215]);
 
// formatting measures in staff group smo231827
fmtsmo22923349.format([smo229233v0,smo230371v0,smo230371v1,smo231603v0], 263);
const stavesmo229233 = new VF.Stave(66, 516.0266026666668, 328);
stavesmo229233.setAttribute('id', 'stavesmo229233');
stavesmo229233.setBegBarType(1);
stavesmo229233.addClef('treble');
const keysmo229233 = new VF.KeySignature('G');
keysmo229233.addToStave(stavesmo229233);
stavesmo229233.setContext(context);
stavesmo229233.draw();
smo229233v0.draw(context, stavesmo229233);
smo238157.setContext(context);
smo238157.draw();
const stavesmo230371 = new VF.Stave(66, 688.0266026666668, 328);
stavesmo230371.setAttribute('id', 'stavesmo230371');
stavesmo230371.setBegBarType(1);
stavesmo230371.addClef('treble');
const keysmo230371 = new VF.KeySignature('G');
keysmo230371.addToStave(stavesmo230371);
stavesmo230371.setContext(context);
stavesmo230371.draw();
smo230371v0.draw(context, stavesmo230371);
smo230371v1.draw(context, stavesmo230371);
const stavesmo231603 = new VF.Stave(66, 786.0266026666668, 328);
stavesmo231603.setAttribute('id', 'stavesmo231603');
stavesmo231603.setBegBarType(1);
stavesmo231603.addClef('bass');
const keysmo231603 = new VF.KeySignature('G');
keysmo231603.addToStave(stavesmo231603);
stavesmo231603.setContext(context);
stavesmo231603.draw();
smo231603v0.draw(context, stavesmo231603);
const leftsmo231827stavesmo2292332 = new VF.StaveConnector(stavesmo229233, stavesmo231603).setType(1);
leftsmo231827stavesmo2292332.setContext(context).draw();
const fmtsmo22925550 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo229255v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229255v0ar = [];
const smo229234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo229234.setAttribute('id', 'smo229234');
smo229234.addModifier(new VF.Dot(), 0);
const smo229235 = new VF.Annotation('Lie');
smo229235.setAttribute('id', 'smo229235');
smo229235.setFont('Merriweather', 12, 'normal');
smo229235.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229234.addModifier(smo229235);
smo229235.addClass('lyric lyric-0 lyric-hyphen');
const smo229236 = new VF.Annotation('so');
smo229236.setAttribute('id', 'smo229236');
smo229236.setFont('Merriweather', 12, 'normal');
smo229236.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229234.addModifier(smo229236);
smo229236.addClass('lyric lyric-1 lyric-hyphen');
smo229255v0ar.push(smo229234);
const smo229237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo229237.setAttribute('id', 'smo229237');
smo229237.addModifier(new VF.Dot(), 0);
const smo229238 = new VF.Annotation('der');
smo229238.setAttribute('id', 'smo229238');
smo229238.setFont('Merriweather', 12, 'normal');
smo229238.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229237.addModifier(smo229238);
smo229238.addClass('lyric lyric-0');
const smo229239 = new VF.Annotation('gen');
smo229239.setAttribute('id', 'smo229239');
smo229239.setFont('Merriweather', 12, 'normal');
smo229239.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229237.addModifier(smo229239);
smo229239.addClass('lyric lyric-1');
smo229255v0ar.push(smo229237);
smo229255v0.addTickables(smo229255v0ar)
fmtsmo22925550.joinVoices([smo229255v0]);
const fmtsmo23038950 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo230389v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230389v0ar = [];
const smo230372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo230372.setAttribute('id', 'smo230372');
smo230372.addModifier(new VF.Dot(), 0);
smo230389v0ar.push(smo230372);
const smo230373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["f#/4/n","dn/5/n"]}'))
smo230373.setAttribute('id', 'smo230373');
smo230373.addModifier(new VF.Dot(), 0);
smo230373.addModifier(new VF.Dot(), 1);
smo230389v0ar.push(smo230373);
smo230389v0.addTickables(smo230389v0ar)
fmtsmo23038950.joinVoices([smo230389v0]);
const fmtsmo23162350 = new VF.Formatter();
//
// voices and notes for stave 2 50
const smo231623v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231623v0ar = [];
const smo231604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo231604.setAttribute('id', 'smo231604');
smo231623v0ar.push(smo231604);
const smo231605 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo231605.setAttribute('id', 'smo231605');
smo231623v0ar.push(smo231605);
const smo231606 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo231606.setAttribute('id', 'smo231606');
smo231623v0ar.push(smo231606);
const smo231607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo231607.setAttribute('id', 'smo231607');
smo231623v0ar.push(smo231607);
smo231623v0.addTickables(smo231623v0ar)
fmtsmo23162350.joinVoices([smo231623v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22925550.format([smo229255v0,smo230389v0,smo231623v0], 138);
const stavesmo229255 = new VF.Stave(394, 516.0266026666668, 152);
stavesmo229255.setAttribute('id', 'stavesmo229255');
stavesmo229255.setBegBarType(VF.Barline.type.NONE);
stavesmo229255.setContext(context);
stavesmo229255.draw();
smo229255v0.draw(context, stavesmo229255);
const stavesmo230389 = new VF.Stave(394, 688.0266026666668, 152);
stavesmo230389.setAttribute('id', 'stavesmo230389');
stavesmo230389.setBegBarType(VF.Barline.type.NONE);
stavesmo230389.setContext(context);
stavesmo230389.draw();
smo230389v0.draw(context, stavesmo230389);
const stavesmo231623 = new VF.Stave(394, 786.0266026666668, 152);
stavesmo231623.setAttribute('id', 'stavesmo231623');
stavesmo231623.setBegBarType(VF.Barline.type.NONE);
stavesmo231623.setContext(context);
stavesmo231623.draw();
smo231623v0.draw(context, stavesmo231623);
const fmtsmo22927751 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo229277v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229277v0ar = [];
const smo229256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo229256.setAttribute('id', 'smo229256');
smo229256.addModifier(new VF.Dot(), 0);
const smo229257 = new VF.Annotation('-');
smo229257.setAttribute('id', 'smo229257');
smo229257.setFont('Merriweather', 12, 'normal');
smo229257.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229256.addModifier(smo229257);
smo229257.addClass('lyric lyric-0 lyric-hyphen');
smo229277v0ar.push(smo229256);
const smo229258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo229258.setAttribute('id', 'smo229258');
smo229277v0ar.push(smo229258);
const smo229259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo229259.setAttribute('id', 'smo229259');
const smo229260 = new VF.Annotation('sie');
smo229260.setAttribute('id', 'smo229260');
smo229260.setFont('Merriweather', 12, 'normal');
smo229260.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229259.addModifier(smo229260);
smo229260.addClass('lyric lyric-0');
const smo229261 = new VF.Annotation('Ich');
smo229261.setAttribute('id', 'smo229261');
smo229261.setFont('Merriweather', 12, 'normal');
smo229261.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229259.addModifier(smo229261);
smo229261.addClass('lyric lyric-1');
smo229277v0ar.push(smo229259);
smo229277v0.addTickables(smo229277v0ar)
fmtsmo22927751.joinVoices([smo229277v0]);
const fmtsmo23040651 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo230406v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230406v0ar = [];
const smo230390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["f#/4/n","dn/5/n"]}'))
smo230390.setAttribute('id', 'smo230390');
smo230390.addModifier(new VF.Dot(), 0);
smo230390.addModifier(new VF.Dot(), 1);
smo230406v0ar.push(smo230390);
smo230406v0.addTickables(smo230406v0ar)
fmtsmo23040651.joinVoices([smo230406v0]);
const fmtsmo23164051 = new VF.Formatter();
//
// voices and notes for stave 2 51
const smo231640v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231640v0ar = [];
const smo231624 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo231624.setAttribute('id', 'smo231624');
smo231624.addModifier(new VF.Dot(), 0);
smo231624.addModifier(new VF.Dot(), 1);
smo231640v0ar.push(smo231624);
smo231640v0.addTickables(smo231640v0ar)
fmtsmo23164051.joinVoices([smo231640v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22927751.format([smo229277v0,smo230406v0,smo231640v0], 104);
const stavesmo229277 = new VF.Stave(546, 516.0266026666668, 118);
stavesmo229277.setAttribute('id', 'stavesmo229277');
stavesmo229277.setBegBarType(VF.Barline.type.NONE);
stavesmo229277.setContext(context);
stavesmo229277.draw();
smo229277v0.draw(context, stavesmo229277);
const stavesmo230406 = new VF.Stave(546, 688.0266026666668, 118);
stavesmo230406.setAttribute('id', 'stavesmo230406');
stavesmo230406.setBegBarType(VF.Barline.type.NONE);
stavesmo230406.setContext(context);
stavesmo230406.draw();
smo230406v0.draw(context, stavesmo230406);
const stavesmo231640 = new VF.Stave(546, 786.0266026666668, 118);
stavesmo231640.setAttribute('id', 'stavesmo231640');
stavesmo231640.setBegBarType(VF.Barline.type.NONE);
stavesmo231640.setContext(context);
stavesmo231640.draw();
smo231640v0.draw(context, stavesmo231640);
const fmtsmo22930552 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo229305v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229305v0ar = [];
const smo229278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo229278.setAttribute('id', 'smo229278');
const smo229279 = new VF.Annotation('sind');
smo229279.setAttribute('id', 'smo229279');
smo229279.setFont('Merriweather', 12, 'normal');
smo229279.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229278.addModifier(smo229279);
smo229279.addClass('lyric lyric-0');
const smo229280 = new VF.Annotation('bin');
smo229280.setAttribute('id', 'smo229280');
smo229280.setFont('Merriweather', 12, 'normal');
smo229280.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229278.addModifier(smo229280);
smo229280.addClass('lyric lyric-1');
smo229305v0ar.push(smo229278);
const smo229281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo229281.setAttribute('id', 'smo229281');
const smo229282 = new VF.Annotation('mir');
smo229282.setAttribute('id', 'smo229282');
smo229282.setFont('Merriweather', 12, 'normal');
smo229282.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229281.addModifier(smo229282);
smo229282.addClass('lyric lyric-0');
const smo229283 = new VF.Annotation('wie');
smo229283.setAttribute('id', 'smo229283');
smo229283.setFont('Merriweather', 12, 'normal');
smo229283.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229281.addModifier(smo229283);
smo229283.addClass('lyric lyric-1 lyric-hyphen');
smo229305v0ar.push(smo229281);
const smo229284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo229284.setAttribute('id', 'smo229284');
const smo229285 = new VF.Annotation('be');
smo229285.setAttribute('id', 'smo229285');
smo229285.setFont('Merriweather', 12, 'normal');
smo229285.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229284.addModifier(smo229285);
smo229285.addClass('lyric lyric-0 lyric-hyphen');
const smo229286 = new VF.Annotation('der');
smo229286.setAttribute('id', 'smo229286');
smo229286.setFont('Merriweather', 12, 'normal');
smo229286.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229284.addModifier(smo229286);
smo229286.addClass('lyric lyric-1');
smo229305v0ar.push(smo229284);
const smo229287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo229287.setAttribute('id', 'smo229287');
smo229287.addModifier(new VF.Dot(), 0);
const smo229288 = new VF.Annotation('kannt!');
smo229288.setAttribute('id', 'smo229288');
smo229288.setFont('Merriweather', 12, 'normal');
smo229288.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229287.addModifier(smo229288);
smo229288.addClass('lyric lyric-0');
const smo229289 = new VF.Annotation('da!');
smo229289.setAttribute('id', 'smo229289');
smo229289.setFont('Merriweather', 12, 'normal');
smo229289.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229287.addModifier(smo229289);
smo229289.addClass('lyric lyric-1');
smo229305v0ar.push(smo229287);
smo229305v0.addTickables(smo229305v0ar)
fmtsmo22930552.joinVoices([smo229305v0]);
const fmtsmo23042352 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo230423v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230423v0ar = [];
const smo230407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n","cn/5/n"]}'))
smo230407.setAttribute('id', 'smo230407');
smo230407.addModifier(new VF.Dot(), 0);
smo230407.addModifier(new VF.Dot(), 1);
smo230423v0ar.push(smo230407);
smo230423v0.addTickables(smo230423v0ar)
fmtsmo23042352.joinVoices([smo230423v0]);
const fmtsmo23165752 = new VF.Formatter();
//
// voices and notes for stave 2 52
const smo231657v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231657v0ar = [];
const smo231641 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo231641.setAttribute('id', 'smo231641');
smo231641.addModifier(new VF.Dot(), 0);
smo231657v0ar.push(smo231641);
smo231657v0.addTickables(smo231657v0ar)
fmtsmo23165752.joinVoices([smo231657v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo238176 = smo229278.getStemDirection();
smo229278.setStemDirection(dirsmo238176);
smo229281.setStemDirection(dirsmo238176);
smo229284.setStemDirection(dirsmo238176);
const smo238176 = new VF.Beam([smo229278,smo229281,smo229284]);
 
// formatting measures in staff group smo231827
fmtsmo22930552.format([smo229305v0,smo230423v0,smo231657v0], 250);
const stavesmo229305 = new VF.Stave(664, 516.0266026666668, 264);
stavesmo229305.setAttribute('id', 'stavesmo229305');
stavesmo229305.setBegBarType(VF.Barline.type.NONE);
stavesmo229305.setContext(context);
stavesmo229305.draw();
smo229305v0.draw(context, stavesmo229305);
smo238176.setContext(context);
smo238176.draw();
const stavesmo230423 = new VF.Stave(664, 688.0266026666668, 264);
stavesmo230423.setAttribute('id', 'stavesmo230423');
stavesmo230423.setBegBarType(VF.Barline.type.NONE);
stavesmo230423.setContext(context);
stavesmo230423.draw();
smo230423v0.draw(context, stavesmo230423);
const stavesmo231657 = new VF.Stave(664, 786.0266026666668, 264);
stavesmo231657.setAttribute('id', 'stavesmo231657');
stavesmo231657.setBegBarType(VF.Barline.type.NONE);
stavesmo231657.setContext(context);
stavesmo231657.draw();
smo231657v0.draw(context, stavesmo231657);
const fmtsmo22932353 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo229323v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229323v0ar = [];
const smo229306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo229306.setAttribute('id', 'smo229306');
smo229306.addModifier(new VF.Dot(), 0);
const smo229307 = new VF.Annotation('-');
smo229307.setAttribute('id', 'smo229307');
smo229307.setFont('Merriweather', 12, 'normal');
smo229307.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229306.addModifier(smo229307);
smo229307.addClass('lyric lyric-0 lyric-hyphen');
smo229323v0ar.push(smo229306);
smo229323v0.addTickables(smo229323v0ar)
fmtsmo22932353.joinVoices([smo229323v0]);
const fmtsmo23044053 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo230440v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230440v0ar = [];
const smo230424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n","cn/5/n"]}'))
smo230424.setAttribute('id', 'smo230424');
smo230424.addModifier(new VF.Dot(), 0);
smo230424.addModifier(new VF.Dot(), 1);
smo230440v0ar.push(smo230424);
smo230440v0.addTickables(smo230440v0ar)
fmtsmo23044053.joinVoices([smo230440v0]);
const fmtsmo23167453 = new VF.Formatter();
//
// voices and notes for stave 2 53
const smo231674v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231674v0ar = [];
const smo231658 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo231658.setAttribute('id', 'smo231658');
smo231658.addModifier(new VF.Dot(), 0);
smo231674v0ar.push(smo231658);
smo231674v0.addTickables(smo231674v0ar)
fmtsmo23167453.joinVoices([smo231674v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22932353.format([smo229323v0,smo230440v0,smo231674v0], 50);
const stavesmo229323 = new VF.Stave(928, 516.0266026666668, 64);
stavesmo229323.setAttribute('id', 'stavesmo229323');
stavesmo229323.setBegBarType(VF.Barline.type.NONE);
stavesmo229323.setContext(context);
stavesmo229323.draw();
smo229323v0.draw(context, stavesmo229323);
const stavesmo230440 = new VF.Stave(928, 688.0266026666668, 64);
stavesmo230440.setAttribute('id', 'stavesmo230440');
stavesmo230440.setBegBarType(VF.Barline.type.NONE);
stavesmo230440.setContext(context);
stavesmo230440.draw();
smo230440v0.draw(context, stavesmo230440);
const stavesmo231674 = new VF.Stave(928, 786.0266026666668, 64);
stavesmo231674.setAttribute('id', 'stavesmo231674');
stavesmo231674.setBegBarType(VF.Barline.type.NONE);
stavesmo231674.setContext(context);
stavesmo231674.draw();
smo231674v0.draw(context, stavesmo231674);
const fmtsmo22934254 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo229342v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229342v0ar = [];
const smo229324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo229324.setAttribute('id', 'smo229324');
smo229324.addModifier(new VF.Dot(), 0);
const smo229325 = new VF.Annotation('-');
smo229325.setAttribute('id', 'smo229325');
smo229325.setFont('Merriweather', 12, 'normal');
smo229325.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229324.addModifier(smo229325);
smo229325.addClass('lyric lyric-0 lyric-hyphen');
smo229342v0ar.push(smo229324);
smo229342v0.addTickables(smo229342v0ar)
fmtsmo22934254.joinVoices([smo229342v0]);
const fmtsmo23046154 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo230461v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230461v0ar = [];
const smo230441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo230441.setAttribute('id', 'smo230441');
smo230461v0ar.push(smo230441);
const smo230442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo230442.setAttribute('id', 'smo230442');
smo230461v0ar.push(smo230442);
const smo230443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo230443.setAttribute('id', 'smo230443');
smo230461v0ar.push(smo230443);
const smo230444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo230444.setAttribute('id', 'smo230444');
smo230461v0ar.push(smo230444);
smo230461v0.addTickables(smo230461v0ar)
fmtsmo23046154.joinVoices([smo230461v0]);
const fmtsmo23169554 = new VF.Formatter();
//
// voices and notes for stave 2 54
const smo231695v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231695v0ar = [];
const smo231675 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo231675.setAttribute('id', 'smo231675');
smo231695v0ar.push(smo231675);
const smo231676 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo231676.setAttribute('id', 'smo231676');
smo231695v0ar.push(smo231676);
const smo231677 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo231677.setAttribute('id', 'smo231677');
smo231695v0ar.push(smo231677);
const smo231678 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo231678.setAttribute('id', 'smo231678');
smo231695v0ar.push(smo231678);
smo231695v0.addTickables(smo231695v0ar)
fmtsmo23169554.joinVoices([smo231695v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22934254.format([smo229342v0,smo230461v0,smo231695v0], 96);
const stavesmo229342 = new VF.Stave(992, 516.0266026666668, 110);
stavesmo229342.setAttribute('id', 'stavesmo229342');
stavesmo229342.setBegBarType(VF.Barline.type.NONE);
stavesmo229342.setContext(context);
stavesmo229342.draw();
smo229342v0.draw(context, stavesmo229342);
const stavesmo230461 = new VF.Stave(992, 688.0266026666668, 110);
stavesmo230461.setAttribute('id', 'stavesmo230461');
stavesmo230461.setBegBarType(VF.Barline.type.NONE);
stavesmo230461.setContext(context);
stavesmo230461.draw();
smo230461v0.draw(context, stavesmo230461);
const stavesmo231695 = new VF.Stave(992, 786.0266026666668, 110);
stavesmo231695.setAttribute('id', 'stavesmo231695');
stavesmo231695.setBegBarType(VF.Barline.type.NONE);
stavesmo231695.setContext(context);
stavesmo231695.draw();
smo231695v0.draw(context, stavesmo231695);
const fmtsmo22935955 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo229359v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229359v0ar = [];
const smo229343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo229343.setAttribute('id', 'smo229343');
smo229343.addModifier(new VF.Dot(), 0);
smo229359v0ar.push(smo229343);
smo229359v0.addTickables(smo229359v0ar)
fmtsmo22935955.joinVoices([smo229359v0]);
const fmtsmo23048155 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo230481v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230481v0ar = [];
const smo230462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo230462.setAttribute('id', 'smo230462');
smo230481v0ar.push(smo230462);
const smo230463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo230463.setAttribute('id', 'smo230463');
smo230481v0ar.push(smo230463);
const smo230464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo230464.setAttribute('id', 'smo230464');
smo230481v0ar.push(smo230464);
const smo230465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo230465.setAttribute('id', 'smo230465');
smo230481v0ar.push(smo230465);
smo230481v0.addTickables(smo230481v0ar)
fmtsmo23048155.joinVoices([smo230481v0]);
const fmtsmo23171555 = new VF.Formatter();
//
// voices and notes for stave 2 55
const smo231715v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231715v0ar = [];
const smo231696 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo231696.setAttribute('id', 'smo231696');
smo231715v0ar.push(smo231696);
const smo231697 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo231697.setAttribute('id', 'smo231697');
smo231715v0ar.push(smo231697);
const smo231698 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo231698.setAttribute('id', 'smo231698');
smo231715v0ar.push(smo231698);
const smo231699 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo231699.setAttribute('id', 'smo231699');
smo231715v0ar.push(smo231699);
smo231715v0.addTickables(smo231715v0ar)
fmtsmo23171555.joinVoices([smo231715v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22935955.format([smo229359v0,smo230481v0,smo231715v0], 92);
const stavesmo229359 = new VF.Stave(1102, 516.0266026666668, 110);
stavesmo229359.setAttribute('id', 'stavesmo229359');
stavesmo229359.setBegBarType(VF.Barline.type.NONE);
stavesmo229359.setEndBarType(5);
stavesmo229359.setContext(context);
stavesmo229359.draw();
smo229359v0.draw(context, stavesmo229359);
const stavesmo230481 = new VF.Stave(1102, 688.0266026666668, 110);
stavesmo230481.setAttribute('id', 'stavesmo230481');
stavesmo230481.setBegBarType(VF.Barline.type.NONE);
stavesmo230481.setEndBarType(5);
stavesmo230481.setContext(context);
stavesmo230481.draw();
smo230481v0.draw(context, stavesmo230481);
const stavesmo231715 = new VF.Stave(1102, 786.0266026666668, 110);
stavesmo231715.setAttribute('id', 'stavesmo231715');
stavesmo231715.setBegBarType(VF.Barline.type.NONE);
stavesmo231715.setEndBarType(5);
stavesmo231715.setContext(context);
stavesmo231715.draw();
smo231715v0.draw(context, stavesmo231715);
const rightsmo231827stavesmo2293592 = new VF.StaveConnector(stavesmo229359, stavesmo231715).setType(0);
rightsmo231827stavesmo2293592.setContext(context).draw();
const fmtsmo22937856 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo229378v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229378v0ar = [];
const smo229360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo229360.setAttribute('id', 'smo229360');
smo229360.addModifier(new VF.Dot(), 0);
const smo229361 = new VF.Annotation('-');
smo229361.setAttribute('id', 'smo229361');
smo229361.setFont('Merriweather', 12, 'normal');
smo229361.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229360.addModifier(smo229361);
smo229361.addClass('lyric lyric-0 lyric-hyphen');
smo229378v0ar.push(smo229360);
smo229378v0.addTickables(smo229378v0ar)
fmtsmo22937856.joinVoices([smo229378v0]);
const fmtsmo23050056 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo230500v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230500v0ar = [];
const smo230482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo230482.setAttribute('id', 'smo230482');
smo230482.addModifier(new VF.Dot(), 0);
smo230500v0ar.push(smo230482);
const smo230483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo230483.setAttribute('id', 'smo230483');
smo230483.addModifier(new VF.Dot(), 0);
smo230500v0ar.push(smo230483);
smo230500v0.addTickables(smo230500v0ar)
fmtsmo23050056.joinVoices([smo230500v0]);
const fmtsmo23173656 = new VF.Formatter();
//
// voices and notes for stave 2 56
const smo231736v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231736v0ar = [];
const smo231716 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo231716.setAttribute('id', 'smo231716');
smo231736v0ar.push(smo231716);
const smo231717 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo231717.setAttribute('id', 'smo231717');
smo231736v0ar.push(smo231717);
const smo231718 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo231718.setAttribute('id', 'smo231718');
smo231736v0ar.push(smo231718);
const smo231719 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo231719.setAttribute('id', 'smo231719');
smo231736v0ar.push(smo231719);
smo231736v0.addTickables(smo231736v0ar)
fmtsmo23173656.joinVoices([smo231736v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22937856.format([smo229378v0,smo230500v0,smo231736v0], 110);
const stavesmo229378 = new VF.Stave(66, 915.0266026666668, 174);
stavesmo229378.setAttribute('id', 'stavesmo229378');
stavesmo229378.setBegBarType(1);
stavesmo229378.addClef('treble');
const keysmo229378 = new VF.KeySignature('G');
keysmo229378.addToStave(stavesmo229378);
stavesmo229378.setContext(context);
stavesmo229378.draw();
smo229378v0.draw(context, stavesmo229378);
const stavesmo230500 = new VF.Stave(66, 1036.0266026666668, 174);
stavesmo230500.setAttribute('id', 'stavesmo230500');
stavesmo230500.setBegBarType(1);
stavesmo230500.addClef('treble');
const keysmo230500 = new VF.KeySignature('G');
keysmo230500.addToStave(stavesmo230500);
stavesmo230500.setContext(context);
stavesmo230500.draw();
smo230500v0.draw(context, stavesmo230500);
const stavesmo231736 = new VF.Stave(66, 1114.0266026666668, 174);
stavesmo231736.setAttribute('id', 'stavesmo231736');
stavesmo231736.setBegBarType(1);
stavesmo231736.addClef('bass');
const keysmo231736 = new VF.KeySignature('G');
keysmo231736.addToStave(stavesmo231736);
stavesmo231736.setContext(context);
stavesmo231736.draw();
smo231736v0.draw(context, stavesmo231736);
const leftsmo231827stavesmo2293782 = new VF.StaveConnector(stavesmo229378, stavesmo231736).setType(1);
leftsmo231827stavesmo2293782.setContext(context).draw();
const fmtsmo22939657 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo229396v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229396v0ar = [];
const smo229379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo229379.setAttribute('id', 'smo229379');
smo229379.addModifier(new VF.Dot(), 0);
const smo229380 = new VF.Annotation('-');
smo229380.setAttribute('id', 'smo229380');
smo229380.setFont('Merriweather', 12, 'normal');
smo229380.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229379.addModifier(smo229380);
smo229380.addClass('lyric lyric-0 lyric-hyphen');
smo229396v0ar.push(smo229379);
smo229396v0.addTickables(smo229396v0ar)
fmtsmo22939657.joinVoices([smo229396v0]);
const fmtsmo23051957 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo230519v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230519v0ar = [];
const smo230501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo230501.setAttribute('id', 'smo230501');
smo230501.addModifier(new VF.Dot(), 0);
smo230519v0ar.push(smo230501);
const smo230502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo230502.setAttribute('id', 'smo230502');
smo230519v0ar.push(smo230502);
const smo230503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo230503.setAttribute('id', 'smo230503');
smo230519v0ar.push(smo230503);
smo230519v0.addTickables(smo230519v0ar)
fmtsmo23051957.joinVoices([smo230519v0]);
const fmtsmo23175657 = new VF.Formatter();
//
// voices and notes for stave 2 57
const smo231756v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231756v0ar = [];
const smo231737 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo231737.setAttribute('id', 'smo231737');
smo231756v0ar.push(smo231737);
const smo231738 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo231738.setAttribute('id', 'smo231738');
smo231756v0ar.push(smo231738);
const smo231739 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo231739.setAttribute('id', 'smo231739');
smo231756v0ar.push(smo231739);
const smo231740 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo231740.setAttribute('id', 'smo231740');
smo231756v0ar.push(smo231740);
smo231756v0.addTickables(smo231756v0ar)
fmtsmo23175657.joinVoices([smo231756v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22939657.format([smo229396v0,smo230519v0,smo231756v0], 95);
const stavesmo229396 = new VF.Stave(240, 915.0266026666668, 109);
stavesmo229396.setAttribute('id', 'stavesmo229396');
stavesmo229396.setBegBarType(VF.Barline.type.NONE);
stavesmo229396.setContext(context);
stavesmo229396.draw();
smo229396v0.draw(context, stavesmo229396);
const stavesmo230519 = new VF.Stave(240, 1036.0266026666668, 109);
stavesmo230519.setAttribute('id', 'stavesmo230519');
stavesmo230519.setBegBarType(VF.Barline.type.NONE);
stavesmo230519.setContext(context);
stavesmo230519.draw();
smo230519v0.draw(context, stavesmo230519);
const stavesmo231756 = new VF.Stave(240, 1114.0266026666668, 109);
stavesmo231756.setAttribute('id', 'stavesmo231756');
stavesmo231756.setBegBarType(VF.Barline.type.NONE);
stavesmo231756.setContext(context);
stavesmo231756.draw();
smo231756v0.draw(context, stavesmo231756);
const fmtsmo22941458 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo229414v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229414v0ar = [];
const smo229397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo229397.setAttribute('id', 'smo229397');
smo229397.addModifier(new VF.Dot(), 0);
const smo229398 = new VF.Annotation('-');
smo229398.setAttribute('id', 'smo229398');
smo229398.setFont('Merriweather', 12, 'normal');
smo229398.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229397.addModifier(smo229398);
smo229398.addClass('lyric lyric-0 lyric-hyphen');
smo229414v0ar.push(smo229397);
smo229414v0.addTickables(smo229414v0ar)
fmtsmo22941458.joinVoices([smo229414v0]);
const fmtsmo23054058 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo230540v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230540v0ar = [];
const smo230520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo230520.setAttribute('id', 'smo230520');
smo230540v0ar.push(smo230520);
const smo230521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo230521.setAttribute('id', 'smo230521');
smo230540v0ar.push(smo230521);
const smo230522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo230522.setAttribute('id', 'smo230522');
smo230540v0ar.push(smo230522);
const smo230523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo230523.setAttribute('id', 'smo230523');
smo230540v0ar.push(smo230523);
const smo230524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo230524.setAttribute('id', 'smo230524');
smo230540v0ar.push(smo230524);
smo230540v0.addTickables(smo230540v0ar)
fmtsmo23054058.joinVoices([smo230540v0]);
const fmtsmo23177758 = new VF.Formatter();
//
// voices and notes for stave 2 58
const smo231777v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231777v0ar = [];
const smo231757 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n","an/3/n"]}'))
smo231757.setAttribute('id', 'smo231757');
smo231777v0ar.push(smo231757);
const smo231758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo231758.setAttribute('id', 'smo231758');
smo231777v0ar.push(smo231758);
const smo231759 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n","an/3/n"]}'))
smo231759.setAttribute('id', 'smo231759');
smo231777v0ar.push(smo231759);
const smo231760 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo231760.setAttribute('id', 'smo231760');
smo231777v0ar.push(smo231760);
const smo231761 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo231761.setAttribute('id', 'smo231761');
smo231777v0ar.push(smo231761);
smo231777v0.addTickables(smo231777v0ar)
fmtsmo23177758.joinVoices([smo231777v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo238217 = smo230520.getStemDirection();
smo230520.setStemDirection(dirsmo238217);
smo230521.setStemDirection(dirsmo238217);
smo230522.setStemDirection(dirsmo238217);
const smo238217 = new VF.Beam([smo230520,smo230521,smo230522]);
const dirsmo238219 = smo231757.getStemDirection();
smo231757.setStemDirection(dirsmo238219);
smo231758.setStemDirection(dirsmo238219);
smo231759.setStemDirection(dirsmo238219);
const smo238219 = new VF.Beam([smo231757,smo231758,smo231759]);
 
// formatting measures in staff group smo231827
fmtsmo22941458.format([smo229414v0,smo230540v0,smo231777v0], 121);
const stavesmo229414 = new VF.Stave(349, 915.0266026666668, 135);
stavesmo229414.setAttribute('id', 'stavesmo229414');
stavesmo229414.setBegBarType(VF.Barline.type.NONE);
stavesmo229414.setContext(context);
stavesmo229414.draw();
smo229414v0.draw(context, stavesmo229414);
const stavesmo230540 = new VF.Stave(349, 1036.0266026666668, 135);
stavesmo230540.setAttribute('id', 'stavesmo230540');
stavesmo230540.setBegBarType(VF.Barline.type.NONE);
stavesmo230540.setContext(context);
stavesmo230540.draw();
smo230540v0.draw(context, stavesmo230540);
smo238217.setContext(context);
smo238217.draw();
const stavesmo231777 = new VF.Stave(349, 1114.0266026666668, 135);
stavesmo231777.setAttribute('id', 'stavesmo231777');
stavesmo231777.setBegBarType(VF.Barline.type.NONE);
stavesmo231777.setContext(context);
stavesmo231777.draw();
smo231777v0.draw(context, stavesmo231777);
smo238219.setContext(context);
smo238219.draw();
const fmtsmo22943259 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo229432v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229432v0ar = [];
const smo229415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo229415.setAttribute('id', 'smo229415');
smo229415.addModifier(new VF.Dot(), 0);
const smo229416 = new VF.Annotation('-');
smo229416.setAttribute('id', 'smo229416');
smo229416.setFont('Merriweather', 12, 'normal');
smo229416.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229415.addModifier(smo229416);
smo229416.addClass('lyric lyric-0 lyric-hyphen');
smo229432v0ar.push(smo229415);
smo229432v0.addTickables(smo229432v0ar)
fmtsmo22943259.joinVoices([smo229432v0]);
const fmtsmo23055759 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo230557v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230557v0ar = [];
const smo230541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo230541.setAttribute('id', 'smo230541');
smo230541.addModifier(new VF.Dot(), 0);
smo230557v0ar.push(smo230541);
smo230557v0.addTickables(smo230557v0ar)
fmtsmo23055759.joinVoices([smo230557v0]);
const fmtsmo23179459 = new VF.Formatter();
//
// voices and notes for stave 2 59
const smo231794v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231794v0ar = [];
const smo231778 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n","gn/3/n","bn/3/n"]}'))
smo231778.setAttribute('id', 'smo231778');
smo231778.addModifier(new VF.Dot(), 0);
smo231778.addModifier(new VF.Dot(), 1);
smo231778.addModifier(new VF.Dot(), 2);
smo231794v0ar.push(smo231778);
smo231794v0.addTickables(smo231794v0ar)
fmtsmo23179459.joinVoices([smo231794v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22943259.format([smo229432v0,smo230557v0,smo231794v0], 24);
const stavesmo229432 = new VF.Stave(484, 915.0266026666668, 38);
stavesmo229432.setAttribute('id', 'stavesmo229432');
stavesmo229432.setBegBarType(VF.Barline.type.NONE);
stavesmo229432.setContext(context);
stavesmo229432.draw();
smo229432v0.draw(context, stavesmo229432);
const stavesmo230557 = new VF.Stave(484, 1036.0266026666668, 38);
stavesmo230557.setAttribute('id', 'stavesmo230557');
stavesmo230557.setBegBarType(VF.Barline.type.NONE);
stavesmo230557.setContext(context);
stavesmo230557.draw();
smo230557v0.draw(context, stavesmo230557);
const stavesmo231794 = new VF.Stave(484, 1114.0266026666668, 38);
stavesmo231794.setAttribute('id', 'stavesmo231794');
stavesmo231794.setBegBarType(VF.Barline.type.NONE);
stavesmo231794.setContext(context);
stavesmo231794.draw();
smo231794v0.draw(context, stavesmo231794);
const fmtsmo22944960 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo229449v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229449v0ar = [];
const smo229433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo229433.setAttribute('id', 'smo229433');
smo229433.addModifier(new VF.Dot(), 0);
smo229449v0ar.push(smo229433);
smo229449v0.addTickables(smo229449v0ar)
fmtsmo22944960.joinVoices([smo229449v0]);
const fmtsmo23057660 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo230576v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230576v0ar = [];
const smo230558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo230558.setAttribute('id', 'smo230558');
smo230576v0ar.push(smo230558);
const smo230559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["gn/4/r"]}'))
smo230559.setAttribute('id', 'smo230559');
smo230576v0ar.push(smo230559);
const smo230560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["gn/4/r"]}'))
smo230560.setAttribute('id', 'smo230560');
smo230560.addModifier(new VF.Dot(), 0);
smo230576v0ar.push(smo230560);
smo230576v0.addTickables(smo230576v0ar)
fmtsmo23057660.joinVoices([smo230576v0]);
const fmtsmo23181360 = new VF.Formatter();
//
// voices and notes for stave 2 60
const smo231813v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231813v0ar = [];
const smo231795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","bn/2/n","dn/3/n","gn/3/n"]}'))
smo231795.setAttribute('id', 'smo231795');
smo231813v0ar.push(smo231795);
const smo231796 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo231796.setAttribute('id', 'smo231796');
smo231813v0ar.push(smo231796);
const smo231797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo231797.setAttribute('id', 'smo231797');
smo231797.addModifier(new VF.Dot(), 0);
smo231813v0ar.push(smo231797);
smo231813v0.addTickables(smo231813v0ar)
fmtsmo23181360.joinVoices([smo231813v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22944960.format([smo229449v0,smo230576v0,smo231813v0], 76);
const stavesmo229449 = new VF.Stave(522, 915.0266026666668, 99);
stavesmo229449.setAttribute('id', 'stavesmo229449');
stavesmo229449.setBegBarType(VF.Barline.type.NONE);
stavesmo229449.setEndBarType(3);
stavesmo229449.setContext(context);
stavesmo229449.draw();
smo229449v0.draw(context, stavesmo229449);
const stavesmo230576 = new VF.Stave(522, 1036.0266026666668, 99);
stavesmo230576.setAttribute('id', 'stavesmo230576');
stavesmo230576.setBegBarType(VF.Barline.type.NONE);
stavesmo230576.setEndBarType(3);
stavesmo230576.setContext(context);
stavesmo230576.draw();
smo230576v0.draw(context, stavesmo230576);
const stavesmo231813 = new VF.Stave(522, 1114.0266026666668, 99);
stavesmo231813.setAttribute('id', 'stavesmo231813');
stavesmo231813.setBegBarType(VF.Barline.type.NONE);
stavesmo231813.setEndBarType(3);
stavesmo231813.setContext(context);
stavesmo231813.draw();
smo231813v0.draw(context, stavesmo231813);
// modifier from 0-54-0-0 to 0-55-0-0
const smo238998 = new VF.StaveTie({ first_note: smo229324, last_note: smo229343, 
          firstNote: smo229324, lastNote: smo229343, first_indices: [0], last_indices: [0]});
smo238998.setContext(context).draw();
// modifier from 0-52-0-3 to 0-53-0-0
const smo238999 = new VF.StaveTie({ first_note: smo229287, last_note: smo229306, 
          firstNote: smo229287, lastNote: smo229306, first_indices: [0], last_indices: [0]});
smo238999.setContext(context).draw();
// modifier from 0-56-0-0 to 0-57-0-0
const smo239000 = new VF.StaveTie({ first_note: smo229360, last_note: smo229379, 
          firstNote: smo229360, lastNote: smo229379, first_indices: [0], last_indices: [0]});
smo239000.setContext(context).draw();
// modifier from 0-58-0-0 to 0-59-0-0
const smo239001 = new VF.StaveTie({ first_note: smo229397, last_note: smo229415, 
          firstNote: smo229397, lastNote: smo229415, first_indices: [0], last_indices: [0]});
smo239001.setContext(context).draw();
// modifier from 0-48-0-0 to 0-49-0-0
const smo239002 = new VF.StaveTie({ first_note: smo229185, last_note: null, 
          firstNote: smo229185, lastNote: null, first_indices: [0], last_indices: [0]});
smo239002.setContext(context).draw();
// modifier from 0-48-0-0 to 0-49-0-0
const smo239003 = new VF.StaveTie({ first_note: null, last_note: smo229204, 
          firstNote: null, lastNote: smo229204, first_indices: [0], last_indices: [0]});
smo239003.setContext(context).draw();
// modifier from 0-50-0-1 to 0-51-0-0
const smo239004 = new VF.StaveTie({ first_note: smo229237, last_note: smo229256, 
          firstNote: smo229237, lastNote: smo229256, first_indices: [0], last_indices: [0]});
smo239004.setContext(context).draw();
// modifier from 0-46-0-0 to 0-47-0-0
const smo239005 = new VF.StaveTie({ first_note: smo229136, last_note: smo229155, 
          firstNote: smo229136, lastNote: smo229155, first_indices: [0], last_indices: [0]});
smo239005.setContext(context).draw();
// modifier from 1-44-0-0 to 1-45-0-0
const smo239006 = new VF.StaveTie({ first_note: smo230259, last_note: smo230276, 
          firstNote: smo230259, lastNote: smo230276, first_indices: [0,1], last_indices: [0,1]});
smo239006.setContext(context).draw();
// modifier from 1-52-0-0 to 1-53-0-0
const smo239007 = new VF.StaveTie({ first_note: smo230407, last_note: smo230424, 
          firstNote: smo230407, lastNote: smo230424, first_indices: [0,1], last_indices: [0,1]});
smo239007.setContext(context).draw();
// modifier from 2-52-0-0 to 2-53-0-0
const smo239008 = new VF.StaveTie({ first_note: smo231641, last_note: smo231658, 
          firstNote: smo231641, lastNote: smo231658, first_indices: [0], last_indices: [0]});
smo239008.setContext(context).draw();
const smo229326smo229342 = new VF.Volta(2, '1', 992, 20);
smo229326smo229342.setContext(context).draw(stavesmo229342, -1 * 0);
const smo229326smo229359 = new VF.Volta(4, '1', 1102, 20);
smo229326smo229359.setContext(context).draw(stavesmo229359, -1 * 0);
const smo229362smo229378 = new VF.Volta(2, '2', 66, 20);
smo229362smo229378.setContext(context).draw(stavesmo229378, -1 * 0);
const smo229362smo229396 = new VF.Volta(4, '2', 240, 20);
smo229362smo229396.setContext(context).draw(stavesmo229396, -1 * 0);
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo229089').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo229090').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo229092').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo229093').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo229095').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo229096').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo229098').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo229099').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo229119').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo229137').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo229138').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo229159').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo229161').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo229162').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo229164').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo229165').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo229167').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo229168').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo229186').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo229187').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo229205').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo229208').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo229210').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo229211').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo229213').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo229214').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo229216').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo229217').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo229235').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo229236').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo229238').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo229239').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo229257').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo229260').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo229261').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo229279').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo229280').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo229282').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo229283').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo229285').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo229286').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo229288').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo229289').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo229307').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo229325').setAttributeNS('', 'transform', 'translate(0 15)');
}
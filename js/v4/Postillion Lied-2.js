// @@ Postillionlied p 3/3  by Franz Grothe
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
const fmtsmo23146243 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo231462v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231462v0ar = [];
const smo231441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo231441.setAttribute('id', 'smo231441');
smo231441.addModifier(new VF.Dot(), 0);
const smo231442 = new VF.Annotation('Wäl');
smo231442.setAttribute('id', 'smo231442');
smo231442.setFont('Merriweather', 12, 'normal');
smo231442.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231441.addModifier(smo231442);
smo231442.addClass('lyric lyric-0 lyric-hyphen');
const smo231443 = new VF.Annotation('klin');
smo231443.setAttribute('id', 'smo231443');
smo231443.setFont('Merriweather', 12, 'normal');
smo231443.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231441.addModifier(smo231443);
smo231443.addClass('lyric lyric-1 lyric-hyphen');
smo231462v0ar.push(smo231441);
const smo231444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo231444.setAttribute('id', 'smo231444');
smo231444.addModifier(new VF.Dot(), 0);
const smo231445 = new VF.Annotation('der');
smo231445.setAttribute('id', 'smo231445');
smo231445.setFont('Merriweather', 12, 'normal');
smo231445.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231444.addModifier(smo231445);
smo231445.addClass('lyric lyric-0');
const smo231446 = new VF.Annotation('gen:');
smo231446.setAttribute('id', 'smo231446');
smo231446.setFont('Merriweather', 12, 'normal');
smo231446.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231444.addModifier(smo231446);
smo231446.addClass('lyric lyric-1');
smo231462v0ar.push(smo231444);
smo231462v0.addTickables(smo231462v0ar)
fmtsmo23146243.joinVoices([smo231462v0]);
const fmtsmo23263343 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo232633v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232633v0ar = [];
const smo232617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","f#/5/n","dn/6/n"]}'))
smo232617.setAttribute('id', 'smo232617');
smo232617.addModifier(new VF.Dot(), 0);
smo232617.addModifier(new VF.Dot(), 1);
smo232617.addModifier(new VF.Dot(), 2);
smo232633v0ar.push(smo232617);
smo232633v0.addTickables(smo232633v0ar)
fmtsmo23263343.joinVoices([smo232633v0]);
const fmtsmo23385843 = new VF.Formatter();
//
// voices and notes for stave 2 43
const smo233858v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233858v0ar = [];
const smo233837 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo233837.setAttribute('id', 'smo233837');
smo233858v0ar.push(smo233837);
const smo233838 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo233838.setAttribute('id', 'smo233838');
smo233858v0ar.push(smo233838);
const smo233839 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo233839.setAttribute('id', 'smo233839');
smo233858v0ar.push(smo233839);
const smo233840 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo233840.setAttribute('id', 'smo233840');
smo233858v0ar.push(smo233840);
smo233858v0.addTickables(smo233858v0ar)
fmtsmo23385843.joinVoices([smo233858v0]);
const smo233858v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233858v1ar = [];
const smo233841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo233841.setAttribute('id', 'smo233841');
smo233841.setStyle({ fillStyle: "#115511" });
smo233841.addModifier(new VF.Dot(), 0);
smo233858v1ar.push(smo233841);
const smo233842 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
smo233842.setAttribute('id', 'smo233842');
smo233842.setStyle({ fillStyle: "#115511" });
smo233842.addModifier(new VF.Dot(), 0);
smo233858v1ar.push(smo233842);
smo233858v1.addTickables(smo233858v1ar)
fmtsmo23385843.joinVoices([smo233858v1]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23146243.format([smo231462v0,smo232633v0,smo233858v0,smo233858v1], 173);
const stavesmo231462 = new VF.Stave(66, 98.0266026666668, 247);
stavesmo231462.setAttribute('id', 'stavesmo231462');
stavesmo231462.setBegBarType(1);
stavesmo231462.addClef('treble');
const keysmo231462 = new VF.KeySignature('G');
keysmo231462.addToStave(stavesmo231462);
stavesmo231462.setContext(context);
stavesmo231462.draw();
smo231462v0.draw(context, stavesmo231462);
const stavesmo232633 = new VF.Stave(66, 280.0266026666668, 247);
stavesmo232633.setAttribute('id', 'stavesmo232633');
stavesmo232633.setBegBarType(1);
stavesmo232633.addClef('treble');
const keysmo232633 = new VF.KeySignature('G');
keysmo232633.addToStave(stavesmo232633);
stavesmo232633.setContext(context);
stavesmo232633.draw();
smo232633v0.draw(context, stavesmo232633);
const stavesmo233858 = new VF.Stave(66, 386.0266026666668, 247);
stavesmo233858.setAttribute('id', 'stavesmo233858');
stavesmo233858.setBegBarType(1);
stavesmo233858.addClef('bass');
const keysmo233858 = new VF.KeySignature('G');
keysmo233858.addToStave(stavesmo233858);
stavesmo233858.setContext(context);
stavesmo233858.draw();
smo233858v0.draw(context, stavesmo233858);
smo233858v1.draw(context, stavesmo233858);
const leftsmo234202stavesmo2314622 = new VF.StaveConnector(stavesmo231462, stavesmo233858).setType(1);
leftsmo234202stavesmo2314622.setContext(context).draw();
const fmtsmo23149044 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo231490v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231490v0ar = [];
const smo231463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo231463.setAttribute('id', 'smo231463');
const smo231464 = new VF.Annotation('ü');
smo231464.setAttribute('id', 'smo231464');
smo231464.setFont('Merriweather', 12, 'normal');
smo231464.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231463.addModifier(smo231464);
smo231464.addClass('lyric lyric-0 lyric-hyphen');
const smo231465 = new VF.Annotation('Ich');
smo231465.setAttribute('id', 'smo231465');
smo231465.setFont('Merriweather', 12, 'normal');
smo231465.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231463.addModifier(smo231465);
smo231465.addClass('lyric lyric-1');
smo231490v0ar.push(smo231463);
const smo231466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo231466.setAttribute('id', 'smo231466');
const smo231467 = new VF.Annotation('ber');
smo231467.setAttribute('id', 'smo231467');
smo231467.setFont('Merriweather', 12, 'normal');
smo231467.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231466.addModifier(smo231467);
smo231467.addClass('lyric lyric-0');
const smo231468 = new VF.Annotation('bin');
smo231468.setAttribute('id', 'smo231468');
smo231468.setFont('Merriweather', 12, 'normal');
smo231468.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231466.addModifier(smo231468);
smo231468.addClass('lyric lyric-1');
smo231490v0ar.push(smo231466);
const smo231469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo231469.setAttribute('id', 'smo231469');
const smo231470 = new VF.Annotation('das');
smo231470.setAttribute('id', 'smo231470');
smo231470.setFont('Merriweather', 12, 'normal');
smo231470.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231469.addModifier(smo231470);
smo231470.addClass('lyric lyric-0');
const smo231471 = new VF.Annotation('ganz');
smo231471.setAttribute('id', 'smo231471');
smo231471.setFont('Merriweather', 12, 'normal');
smo231471.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231469.addModifier(smo231471);
smo231471.addClass('lyric lyric-1');
smo231490v0ar.push(smo231469);
const smo231472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231472.setAttribute('id', 'smo231472');
smo231472.addModifier(new VF.Dot(), 0);
const smo231473 = new VF.Annotation('Land;');
smo231473.setAttribute('id', 'smo231473');
smo231473.setFont('Merriweather', 12, 'normal');
smo231473.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231472.addModifier(smo231473);
smo231473.addClass('lyric lyric-0');
const smo231474 = new VF.Annotation('nah!');
smo231474.setAttribute('id', 'smo231474');
smo231474.setFont('Merriweather', 12, 'normal');
smo231474.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231472.addModifier(smo231474);
smo231474.addClass('lyric lyric-1');
smo231490v0ar.push(smo231472);
smo231490v0.addTickables(smo231490v0ar)
fmtsmo23149044.joinVoices([smo231490v0]);
const fmtsmo23265044 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo232650v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232650v0ar = [];
const smo232634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo232634.setAttribute('id', 'smo232634');
smo232634.addModifier(new VF.Dot(), 0);
smo232634.addModifier(new VF.Dot(), 1);
smo232650v0ar.push(smo232634);
smo232650v0.addTickables(smo232650v0ar)
fmtsmo23265044.joinVoices([smo232650v0]);
const fmtsmo23387844 = new VF.Formatter();
//
// voices and notes for stave 2 44
const smo233878v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233878v0ar = [];
const smo233859 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo233859.setAttribute('id', 'smo233859');
smo233878v0ar.push(smo233859);
const smo233860 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo233860.setAttribute('id', 'smo233860');
smo233878v0ar.push(smo233860);
const smo233861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo233861.setAttribute('id', 'smo233861');
smo233878v0ar.push(smo233861);
const smo233862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo233862.setAttribute('id', 'smo233862');
smo233878v0ar.push(smo233862);
smo233878v0.addTickables(smo233878v0ar)
fmtsmo23387844.joinVoices([smo233878v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240488 = smo231463.getStemDirection();
smo231463.setStemDirection(dirsmo240488);
smo231466.setStemDirection(dirsmo240488);
smo231469.setStemDirection(dirsmo240488);
const smo240488 = new VF.Beam([smo231463,smo231466,smo231469]);
 
// formatting measures in staff group smo234202
fmtsmo23149044.format([smo231490v0,smo232650v0,smo233878v0], 278);
const stavesmo231490 = new VF.Stave(313, 98.0266026666668, 292);
stavesmo231490.setAttribute('id', 'stavesmo231490');
stavesmo231490.setBegBarType(VF.Barline.type.NONE);
stavesmo231490.setContext(context);
stavesmo231490.draw();
smo231490v0.draw(context, stavesmo231490);
smo240488.setContext(context);
smo240488.draw();
const stavesmo232650 = new VF.Stave(313, 280.0266026666668, 292);
stavesmo232650.setAttribute('id', 'stavesmo232650');
stavesmo232650.setBegBarType(VF.Barline.type.NONE);
stavesmo232650.setContext(context);
stavesmo232650.draw();
smo232650v0.draw(context, stavesmo232650);
const stavesmo233878 = new VF.Stave(313, 386.0266026666668, 292);
stavesmo233878.setAttribute('id', 'stavesmo233878');
stavesmo233878.setBegBarType(VF.Barline.type.NONE);
stavesmo233878.setContext(context);
stavesmo233878.draw();
smo233878v0.draw(context, stavesmo233878);
const fmtsmo23151045 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo231510v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231510v0ar = [];
const smo231491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo231491.setAttribute('id', 'smo231491');
smo231491.addModifier(new VF.Dot(), 0);
smo231510v0ar.push(smo231491);
const smo231492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo231492.setAttribute('id', 'smo231492');
smo231492.addModifier(new VF.Dot(), 0);
const smo231493 = new VF.Annotation('von');
smo231493.setAttribute('id', 'smo231493');
smo231493.setFont('Merriweather', 12, 'normal');
smo231493.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231492.addModifier(smo231493);
smo231493.addClass('lyric lyric-0');
const smo231494 = new VF.Annotation('Tra');
smo231494.setAttribute('id', 'smo231494');
smo231494.setFont('Merriweather', 12, 'normal');
smo231494.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231492.addModifier(smo231494);
smo231494.addClass('lyric lyric-1 lyric-hyphen');
smo231510v0ar.push(smo231492);
smo231510v0.addTickables(smo231510v0ar)
fmtsmo23151045.joinVoices([smo231510v0]);
const fmtsmo23266745 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo232667v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232667v0ar = [];
const smo232651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo232651.setAttribute('id', 'smo232651');
smo232651.addModifier(new VF.Dot(), 0);
smo232651.addModifier(new VF.Dot(), 1);
smo232667v0ar.push(smo232651);
smo232667v0.addTickables(smo232667v0ar)
fmtsmo23266745.joinVoices([smo232667v0]);
const fmtsmo23389845 = new VF.Formatter();
//
// voices and notes for stave 2 45
const smo233898v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233898v0ar = [];
const smo233879 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo233879.setAttribute('id', 'smo233879');
smo233898v0ar.push(smo233879);
const smo233880 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo233880.setAttribute('id', 'smo233880');
smo233898v0ar.push(smo233880);
const smo233881 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo233881.setAttribute('id', 'smo233881');
smo233898v0ar.push(smo233881);
const smo233882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo233882.setAttribute('id', 'smo233882');
smo233898v0ar.push(smo233882);
smo233898v0.addTickables(smo233898v0ar)
fmtsmo23389845.joinVoices([smo233898v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23151045.format([smo231510v0,smo232667v0,smo233898v0], 150);
const stavesmo231510 = new VF.Stave(605, 98.0266026666668, 164);
stavesmo231510.setAttribute('id', 'stavesmo231510');
stavesmo231510.setBegBarType(VF.Barline.type.NONE);
stavesmo231510.setContext(context);
stavesmo231510.draw();
smo231510v0.draw(context, stavesmo231510);
const stavesmo232667 = new VF.Stave(605, 280.0266026666668, 164);
stavesmo232667.setAttribute('id', 'stavesmo232667');
stavesmo232667.setBegBarType(VF.Barline.type.NONE);
stavesmo232667.setContext(context);
stavesmo232667.draw();
smo232667v0.draw(context, stavesmo232667);
const stavesmo233898 = new VF.Stave(605, 386.0266026666668, 164);
stavesmo233898.setAttribute('id', 'stavesmo233898');
stavesmo233898.setBegBarType(VF.Barline.type.NONE);
stavesmo233898.setContext(context);
stavesmo233898.draw();
smo233898v0.draw(context, stavesmo233898);
const fmtsmo23152946 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo231529v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231529v0ar = [];
const smo231511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231511.setAttribute('id', 'smo231511');
smo231511.addModifier(new VF.Dot(), 0);
const smo231512 = new VF.Annotation('fern');
smo231512.setAttribute('id', 'smo231512');
smo231512.setFont('Merriweather', 12, 'normal');
smo231512.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231511.addModifier(smo231512);
smo231512.addClass('lyric lyric-0');
const smo231513 = new VF.Annotation('ra!');
smo231513.setAttribute('id', 'smo231513');
smo231513.setFont('Merriweather', 12, 'normal');
smo231513.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231511.addModifier(smo231513);
smo231513.addClass('lyric lyric-1');
smo231529v0ar.push(smo231511);
smo231529v0.addTickables(smo231529v0ar)
fmtsmo23152946.joinVoices([smo231529v0]);
const fmtsmo23268746 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo232687v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232687v0ar = [];
const smo232668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo232668.setAttribute('id', 'smo232668');
smo232668.addModifier(new VF.Dot(), 0);
smo232687v0ar.push(smo232668);
smo232687v0.addTickables(smo232687v0ar)
fmtsmo23268746.joinVoices([smo232687v0]);
const smo232687v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232687v1ar = [];
const smo232669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
smo232669.setAttribute('id', 'smo232669');
smo232669.setStyle({ fillStyle: "#115511" });
smo232669.addModifier(new VF.Dot(), 0);
smo232687v1ar.push(smo232669);
const smo232670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/5/n"]}'))
smo232670.setAttribute('id', 'smo232670');
smo232670.setStyle({ fillStyle: "#115511" });
smo232687v1ar.push(smo232670);
const smo232671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo232671.setAttribute('id', 'smo232671');
smo232671.setStyle({ fillStyle: "#115511" });
smo232687v1ar.push(smo232671);
smo232687v1.addTickables(smo232687v1ar)
fmtsmo23268746.joinVoices([smo232687v1]);
const fmtsmo23391846 = new VF.Formatter();
//
// voices and notes for stave 2 46
const smo233918v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233918v0ar = [];
const smo233899 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo233899.setAttribute('id', 'smo233899');
smo233918v0ar.push(smo233899);
const smo233900 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo233900.setAttribute('id', 'smo233900');
smo233918v0ar.push(smo233900);
const smo233901 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo233901.setAttribute('id', 'smo233901');
smo233918v0ar.push(smo233901);
const smo233902 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo233902.setAttribute('id', 'smo233902');
smo233918v0ar.push(smo233902);
smo233918v0.addTickables(smo233918v0ar)
fmtsmo23391846.joinVoices([smo233918v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23152946.format([smo231529v0,smo232687v0,smo232687v1,smo233918v0], 138);
const stavesmo231529 = new VF.Stave(769, 98.0266026666668, 152);
stavesmo231529.setAttribute('id', 'stavesmo231529');
stavesmo231529.setBegBarType(VF.Barline.type.NONE);
stavesmo231529.setContext(context);
stavesmo231529.draw();
smo231529v0.draw(context, stavesmo231529);
const stavesmo232687 = new VF.Stave(769, 280.0266026666668, 152);
stavesmo232687.setAttribute('id', 'stavesmo232687');
stavesmo232687.setBegBarType(VF.Barline.type.NONE);
stavesmo232687.setContext(context);
stavesmo232687.draw();
smo232687v0.draw(context, stavesmo232687);
smo232687v1.draw(context, stavesmo232687);
const stavesmo233918 = new VF.Stave(769, 386.0266026666668, 152);
stavesmo233918.setAttribute('id', 'stavesmo233918');
stavesmo233918.setBegBarType(VF.Barline.type.NONE);
stavesmo233918.setContext(context);
stavesmo233918.draw();
smo233918v0.draw(context, stavesmo233918);
const fmtsmo23155947 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo231559v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231559v0ar = [];
const smo231530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231530.setAttribute('id', 'smo231530');
smo231559v0ar.push(smo231530);
const smo231532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo231532.setAttribute('id', 'smo231532');
const smo231533 = new VF.Annotation('er');
smo231533.setAttribute('id', 'smo231533');
smo231533.setFont('Merriweather', 12, 'normal');
smo231533.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231532.addModifier(smo231533);
smo231533.addClass('lyric lyric-0');
const smo231534 = new VF.Annotation('Ich');
smo231534.setAttribute('id', 'smo231534');
smo231534.setFont('Merriweather', 12, 'normal');
smo231534.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231532.addModifier(smo231534);
smo231534.addClass('lyric lyric-1');
smo231559v0ar.push(smo231532);
const smo231535 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo231535.setAttribute('id', 'smo231535');
const smo231536 = new VF.Annotation('kem');
smo231536.setAttribute('id', 'smo231536');
smo231536.setFont('Merriweather', 12, 'normal');
smo231536.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231535.addModifier(smo231536);
smo231536.addClass('lyric lyric-0');
const smo231537 = new VF.Annotation('hö');
smo231537.setAttribute('id', 'smo231537');
smo231537.setFont('Merriweather', 12, 'normal');
smo231537.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231535.addModifier(smo231537);
smo231537.addClass('lyric lyric-1 lyric-hyphen');
smo231559v0ar.push(smo231535);
const smo231538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo231538.setAttribute('id', 'smo231538');
const smo231539 = new VF.Annotation('ich');
smo231539.setAttribute('id', 'smo231539');
smo231539.setFont('Merriweather', 12, 'normal');
smo231539.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231538.addModifier(smo231539);
smo231539.addClass('lyric lyric-0');
const smo231540 = new VF.Annotation('re');
smo231540.setAttribute('id', 'smo231540');
smo231540.setFont('Merriweather', 12, 'normal');
smo231540.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231538.addModifier(smo231540);
smo231540.addClass('lyric lyric-1');
smo231559v0ar.push(smo231538);
const smo231541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo231541.setAttribute('id', 'smo231541');
const smo231542 = new VF.Annotation('ihn');
smo231542.setAttribute('id', 'smo231542');
smo231542.setFont('Merriweather', 12, 'normal');
smo231542.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231541.addModifier(smo231542);
smo231542.addClass('lyric lyric-0');
const smo231543 = new VF.Annotation('sein');
smo231543.setAttribute('id', 'smo231543');
smo231543.setFont('Merriweather', 12, 'normal');
smo231543.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231541.addModifier(smo231543);
smo231543.addClass('lyric lyric-1');
smo231559v0ar.push(smo231541);
smo231559v0.addTickables(smo231559v0ar)
fmtsmo23155947.joinVoices([smo231559v0]);
const fmtsmo23270647 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo232706v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232706v0ar = [];
const smo232688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo232688.setAttribute('id', 'smo232688');
smo232688.addModifier(new VF.Dot(), 0);
smo232706v0ar.push(smo232688);
smo232706v0.addTickables(smo232706v0ar)
fmtsmo23270647.joinVoices([smo232706v0]);
const smo232706v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232706v1ar = [];
const smo232689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/6/n"]}'))
smo232689.setAttribute('id', 'smo232689');
smo232689.setStyle({ fillStyle: "#115511" });
smo232689.addModifier(new VF.Dot(), 0);
smo232706v1ar.push(smo232689);
const smo232690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
smo232690.setAttribute('id', 'smo232690');
smo232690.setStyle({ fillStyle: "#115511" });
smo232690.addModifier(new VF.Dot(), 0);
smo232706v1ar.push(smo232690);
smo232706v1.addTickables(smo232706v1ar)
fmtsmo23270647.joinVoices([smo232706v1]);
const fmtsmo23393847 = new VF.Formatter();
//
// voices and notes for stave 2 47
const smo233938v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233938v0ar = [];
const smo233919 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo233919.setAttribute('id', 'smo233919');
smo233938v0ar.push(smo233919);
const smo233920 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo233920.setAttribute('id', 'smo233920');
smo233938v0ar.push(smo233920);
const smo233921 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo233921.setAttribute('id', 'smo233921');
smo233938v0ar.push(smo233921);
const smo233922 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo233922.setAttribute('id', 'smo233922');
smo233938v0ar.push(smo233922);
smo233938v0.addTickables(smo233938v0ar)
fmtsmo23393847.joinVoices([smo233938v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240507 = smo231535.getStemDirection();
smo231535.setStemDirection(dirsmo240507);
smo231538.setStemDirection(dirsmo240507);
smo231541.setStemDirection(dirsmo240507);
const smo240507 = new VF.Beam([smo231535,smo231538,smo231541]);
 
// formatting measures in staff group smo234202
fmtsmo23155947.format([smo231559v0,smo232706v0,smo232706v1,smo233938v0], 275);
const stavesmo231559 = new VF.Stave(921, 98.0266026666668, 289);
stavesmo231559.setAttribute('id', 'stavesmo231559');
stavesmo231559.setBegBarType(VF.Barline.type.NONE);
stavesmo231559.setContext(context);
stavesmo231559.draw();
smo231559v0.draw(context, stavesmo231559);
smo240507.setContext(context);
smo240507.draw();
const stavesmo232706 = new VF.Stave(921, 280.0266026666668, 289);
stavesmo232706.setAttribute('id', 'stavesmo232706');
stavesmo232706.setBegBarType(VF.Barline.type.NONE);
stavesmo232706.setContext(context);
stavesmo232706.draw();
smo232706v0.draw(context, stavesmo232706);
smo232706v1.draw(context, stavesmo232706);
const stavesmo233938 = new VF.Stave(921, 386.0266026666668, 289);
stavesmo233938.setAttribute('id', 'stavesmo233938');
stavesmo233938.setBegBarType(VF.Barline.type.NONE);
stavesmo233938.setContext(context);
stavesmo233938.draw();
smo233938v0.draw(context, stavesmo233938);
const rightsmo234202stavesmo2315592 = new VF.StaveConnector(stavesmo231559, stavesmo233938).setType(0);
rightsmo234202stavesmo2315592.setContext(context).draw();
const fmtsmo23157848 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo231578v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231578v0ar = [];
const smo231560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231560.setAttribute('id', 'smo231560');
smo231560.addModifier(new VF.Dot(), 0);
const smo231561 = new VF.Annotation('schon');
smo231561.setAttribute('id', 'smo231561');
smo231561.setFont('Merriweather', 12, 'normal');
smo231561.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231560.addModifier(smo231561);
smo231561.addClass('lyric lyric-0');
const smo231562 = new VF.Annotation('Lied!');
smo231562.setAttribute('id', 'smo231562');
smo231562.setFont('Merriweather', 12, 'normal');
smo231562.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231560.addModifier(smo231562);
smo231562.addClass('lyric lyric-1');
smo231578v0ar.push(smo231560);
smo231578v0.addTickables(smo231578v0ar)
fmtsmo23157848.joinVoices([smo231578v0]);
const fmtsmo23272848 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo232728v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232728v0ar = [];
const smo232707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo232707.setAttribute('id', 'smo232707');
smo232707.addModifier(new VF.Dot(), 0);
smo232728v0ar.push(smo232707);
const smo232708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo232708.setAttribute('id', 'smo232708');
smo232728v0ar.push(smo232708);
const smo232709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo232709.setAttribute('id', 'smo232709');
smo232728v0ar.push(smo232709);
smo232728v0.addTickables(smo232728v0ar)
fmtsmo23272848.joinVoices([smo232728v0]);
const smo232728v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232728v1ar = [];
const smo232710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
smo232710.setAttribute('id', 'smo232710');
smo232710.setStyle({ fillStyle: "#115511" });
smo232710.addModifier(new VF.Dot(), 0);
smo232728v1ar.push(smo232710);
const smo232711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo232711.setAttribute('id', 'smo232711');
smo232711.setStyle({ fillStyle: "#115511" });
smo232728v1ar.push(smo232711);
const smo232712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo232712.setAttribute('id', 'smo232712');
smo232712.setStyle({ fillStyle: "#115511" });
smo232728v1ar.push(smo232712);
smo232728v1.addTickables(smo232728v1ar)
fmtsmo23272848.joinVoices([smo232728v1]);
const fmtsmo23395848 = new VF.Formatter();
//
// voices and notes for stave 2 48
const smo233958v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233958v0ar = [];
const smo233939 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo233939.setAttribute('id', 'smo233939');
smo233958v0ar.push(smo233939);
const smo233940 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo233940.setAttribute('id', 'smo233940');
smo233958v0ar.push(smo233940);
const smo233941 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo233941.setAttribute('id', 'smo233941');
smo233958v0ar.push(smo233941);
const smo233942 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo233942.setAttribute('id', 'smo233942');
smo233958v0ar.push(smo233942);
smo233958v0.addTickables(smo233958v0ar)
fmtsmo23395848.joinVoices([smo233958v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23157848.format([smo231578v0,smo232728v0,smo232728v1,smo233958v0], 152);
const stavesmo231578 = new VF.Stave(66, 516.0266026666668, 226);
stavesmo231578.setAttribute('id', 'stavesmo231578');
stavesmo231578.setBegBarType(1);
stavesmo231578.addClef('treble');
const keysmo231578 = new VF.KeySignature('G');
keysmo231578.addToStave(stavesmo231578);
stavesmo231578.setContext(context);
stavesmo231578.draw();
smo231578v0.draw(context, stavesmo231578);
const stavesmo232728 = new VF.Stave(66, 688.0266026666668, 226);
stavesmo232728.setAttribute('id', 'stavesmo232728');
stavesmo232728.setBegBarType(1);
stavesmo232728.addClef('treble');
const keysmo232728 = new VF.KeySignature('G');
keysmo232728.addToStave(stavesmo232728);
stavesmo232728.setContext(context);
stavesmo232728.draw();
smo232728v0.draw(context, stavesmo232728);
smo232728v1.draw(context, stavesmo232728);
const stavesmo233958 = new VF.Stave(66, 780.0266026666668, 226);
stavesmo233958.setAttribute('id', 'stavesmo233958');
stavesmo233958.setBegBarType(1);
stavesmo233958.addClef('bass');
const keysmo233958 = new VF.KeySignature('G');
keysmo233958.addToStave(stavesmo233958);
stavesmo233958.setContext(context);
stavesmo233958.draw();
smo233958v0.draw(context, stavesmo233958);
const leftsmo234202stavesmo2315782 = new VF.StaveConnector(stavesmo231578, stavesmo233958).setType(1);
leftsmo234202stavesmo2315782.setContext(context).draw();
const fmtsmo23160849 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo231608v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231608v0ar = [];
const smo231579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231579.setAttribute('id', 'smo231579');
const smo231580 = new VF.Annotation('-');
smo231580.setAttribute('id', 'smo231580');
smo231580.setFont('Merriweather', 12, 'normal');
smo231580.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231579.addModifier(smo231580);
smo231580.addClass('lyric lyric-0 lyric-hyphen');
smo231608v0ar.push(smo231579);
const smo231581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo231581.setAttribute('id', 'smo231581');
const smo231582 = new VF.Annotation('denn');
smo231582.setAttribute('id', 'smo231582');
smo231582.setFont('Merriweather', 12, 'normal');
smo231582.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231581.addModifier(smo231582);
smo231582.addClass('lyric lyric-0');
const smo231583 = new VF.Annotation('Es');
smo231583.setAttribute('id', 'smo231583');
smo231583.setFont('Merriweather', 12, 'normal');
smo231583.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231581.addModifier(smo231583);
smo231583.addClass('lyric lyric-1');
smo231608v0ar.push(smo231581);
const smo231584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo231584.setAttribute('id', 'smo231584');
const smo231585 = new VF.Annotation('all');
smo231585.setAttribute('id', 'smo231585');
smo231585.setFont('Merriweather', 12, 'normal');
smo231585.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231584.addModifier(smo231585);
smo231585.addClass('lyric lyric-0');
const smo231586 = new VF.Annotation('soli');
smo231586.setAttribute('id', 'smo231586');
smo231586.setFont('Merriweather', 12, 'normal');
smo231586.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231584.addModifier(smo231586);
smo231586.addClass('lyric lyric-1');
smo231608v0ar.push(smo231584);
const smo231587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo231587.setAttribute('id', 'smo231587');
const smo231588 = new VF.Annotation('sei');
smo231588.setAttribute('id', 'smo231588');
smo231588.setFont('Merriweather', 12, 'normal');
smo231588.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231587.addModifier(smo231588);
smo231588.addClass('lyric lyric-0 lyric-hyphen');
const smo231589 = new VF.Annotation('zu');
smo231589.setAttribute('id', 'smo231589');
smo231589.setFont('Merriweather', 12, 'normal');
smo231589.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231587.addModifier(smo231589);
smo231589.addClass('lyric lyric-1 lyric-hyphen');
smo231608v0ar.push(smo231587);
const smo231590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo231590.setAttribute('id', 'smo231590');
const smo231591 = new VF.Annotation('ne');
smo231591.setAttribute('id', 'smo231591');
smo231591.setFont('Merriweather', 12, 'normal');
smo231591.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231590.addModifier(smo231591);
smo231591.addClass('lyric lyric-0');
const smo231592 = new VF.Annotation('mir');
smo231592.setAttribute('id', 'smo231592');
smo231592.setFont('Merriweather', 12, 'normal');
smo231592.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231590.addModifier(smo231592);
smo231592.addClass('lyric lyric-1');
smo231608v0ar.push(smo231590);
smo231608v0.addTickables(smo231608v0ar)
fmtsmo23160849.joinVoices([smo231608v0]);
const fmtsmo23274649 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo232746v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232746v0ar = [];
const smo232729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo232729.setAttribute('id', 'smo232729');
smo232729.addModifier(new VF.Dot(), 0);
smo232746v0ar.push(smo232729);
smo232746v0.addTickables(smo232746v0ar)
fmtsmo23274649.joinVoices([smo232746v0]);
const smo232746v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232746v1ar = [];
const smo232730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/6/n"]}'))
smo232730.setAttribute('id', 'smo232730');
smo232730.setStyle({ fillStyle: "#115511" });
smo232730.addModifier(new VF.Dot(), 0);
smo232746v1ar.push(smo232730);
smo232746v1.addTickables(smo232746v1ar)
fmtsmo23274649.joinVoices([smo232746v1]);
const fmtsmo23397849 = new VF.Formatter();
//
// voices and notes for stave 2 49
const smo233978v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233978v0ar = [];
const smo233959 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo233959.setAttribute('id', 'smo233959');
smo233978v0ar.push(smo233959);
const smo233960 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo233960.setAttribute('id', 'smo233960');
smo233978v0ar.push(smo233960);
const smo233961 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo233961.setAttribute('id', 'smo233961');
smo233978v0ar.push(smo233961);
const smo233962 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo233962.setAttribute('id', 'smo233962');
smo233978v0ar.push(smo233962);
smo233978v0.addTickables(smo233978v0ar)
fmtsmo23397849.joinVoices([smo233978v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240527 = smo231584.getStemDirection();
smo231584.setStemDirection(dirsmo240527);
smo231587.setStemDirection(dirsmo240527);
smo231590.setStemDirection(dirsmo240527);
const smo240527 = new VF.Beam([smo231584,smo231587,smo231590]);
 
// formatting measures in staff group smo234202
fmtsmo23160849.format([smo231608v0,smo232746v0,smo232746v1,smo233978v0], 271);
const stavesmo231608 = new VF.Stave(292, 516.0266026666668, 285);
stavesmo231608.setAttribute('id', 'stavesmo231608');
stavesmo231608.setBegBarType(VF.Barline.type.NONE);
stavesmo231608.setContext(context);
stavesmo231608.draw();
smo231608v0.draw(context, stavesmo231608);
smo240527.setContext(context);
smo240527.draw();
const stavesmo232746 = new VF.Stave(292, 688.0266026666668, 285);
stavesmo232746.setAttribute('id', 'stavesmo232746');
stavesmo232746.setBegBarType(VF.Barline.type.NONE);
stavesmo232746.setContext(context);
stavesmo232746.draw();
smo232746v0.draw(context, stavesmo232746);
smo232746v1.draw(context, stavesmo232746);
const stavesmo233978 = new VF.Stave(292, 780.0266026666668, 285);
stavesmo233978.setAttribute('id', 'stavesmo233978');
stavesmo233978.setBegBarType(VF.Barline.type.NONE);
stavesmo233978.setContext(context);
stavesmo233978.draw();
smo233978v0.draw(context, stavesmo233978);
const fmtsmo23163050 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo231630v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231630v0ar = [];
const smo231609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo231609.setAttribute('id', 'smo231609');
smo231609.addModifier(new VF.Dot(), 0);
const smo231610 = new VF.Annotation('Lie');
smo231610.setAttribute('id', 'smo231610');
smo231610.setFont('Merriweather', 12, 'normal');
smo231610.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231609.addModifier(smo231610);
smo231610.addClass('lyric lyric-0 lyric-hyphen');
const smo231611 = new VF.Annotation('so');
smo231611.setAttribute('id', 'smo231611');
smo231611.setFont('Merriweather', 12, 'normal');
smo231611.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231609.addModifier(smo231611);
smo231611.addClass('lyric lyric-1 lyric-hyphen');
smo231630v0ar.push(smo231609);
const smo231612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231612.setAttribute('id', 'smo231612');
smo231612.addModifier(new VF.Dot(), 0);
const smo231613 = new VF.Annotation('der');
smo231613.setAttribute('id', 'smo231613');
smo231613.setFont('Merriweather', 12, 'normal');
smo231613.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231612.addModifier(smo231613);
smo231613.addClass('lyric lyric-0');
const smo231614 = new VF.Annotation('gen');
smo231614.setAttribute('id', 'smo231614');
smo231614.setFont('Merriweather', 12, 'normal');
smo231614.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231612.addModifier(smo231614);
smo231614.addClass('lyric lyric-1');
smo231630v0ar.push(smo231612);
smo231630v0.addTickables(smo231630v0ar)
fmtsmo23163050.joinVoices([smo231630v0]);
const fmtsmo23276450 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo232764v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232764v0ar = [];
const smo232747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo232747.setAttribute('id', 'smo232747');
smo232747.addModifier(new VF.Dot(), 0);
smo232764v0ar.push(smo232747);
const smo232748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","dn/5/n"]}'))
smo232748.setAttribute('id', 'smo232748');
smo232748.addModifier(new VF.Dot(), 0);
smo232748.addModifier(new VF.Dot(), 1);
smo232764v0ar.push(smo232748);
smo232764v0.addTickables(smo232764v0ar)
fmtsmo23276450.joinVoices([smo232764v0]);
const fmtsmo23399850 = new VF.Formatter();
//
// voices and notes for stave 2 50
const smo233998v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233998v0ar = [];
const smo233979 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo233979.setAttribute('id', 'smo233979');
smo233998v0ar.push(smo233979);
const smo233980 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo233980.setAttribute('id', 'smo233980');
smo233998v0ar.push(smo233980);
const smo233981 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo233981.setAttribute('id', 'smo233981');
smo233998v0ar.push(smo233981);
const smo233982 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo233982.setAttribute('id', 'smo233982');
smo233998v0ar.push(smo233982);
smo233998v0.addTickables(smo233998v0ar)
fmtsmo23399850.joinVoices([smo233998v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23163050.format([smo231630v0,smo232764v0,smo233998v0], 149);
const stavesmo231630 = new VF.Stave(577, 516.0266026666668, 163);
stavesmo231630.setAttribute('id', 'stavesmo231630');
stavesmo231630.setBegBarType(VF.Barline.type.NONE);
stavesmo231630.setContext(context);
stavesmo231630.draw();
smo231630v0.draw(context, stavesmo231630);
const stavesmo232764 = new VF.Stave(577, 688.0266026666668, 163);
stavesmo232764.setAttribute('id', 'stavesmo232764');
stavesmo232764.setBegBarType(VF.Barline.type.NONE);
stavesmo232764.setContext(context);
stavesmo232764.draw();
smo232764v0.draw(context, stavesmo232764);
const stavesmo233998 = new VF.Stave(577, 780.0266026666668, 163);
stavesmo233998.setAttribute('id', 'stavesmo233998');
stavesmo233998.setBegBarType(VF.Barline.type.NONE);
stavesmo233998.setContext(context);
stavesmo233998.draw();
smo233998v0.draw(context, stavesmo233998);
const fmtsmo23165251 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo231652v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231652v0ar = [];
const smo231631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231631.setAttribute('id', 'smo231631');
smo231631.addModifier(new VF.Dot(), 0);
const smo231632 = new VF.Annotation('-');
smo231632.setAttribute('id', 'smo231632');
smo231632.setFont('Merriweather', 12, 'normal');
smo231632.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231631.addModifier(smo231632);
smo231632.addClass('lyric lyric-0 lyric-hyphen');
smo231652v0ar.push(smo231631);
const smo231633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo231633.setAttribute('id', 'smo231633');
smo231652v0ar.push(smo231633);
const smo231634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo231634.setAttribute('id', 'smo231634');
const smo231635 = new VF.Annotation('sie');
smo231635.setAttribute('id', 'smo231635');
smo231635.setFont('Merriweather', 12, 'normal');
smo231635.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231634.addModifier(smo231635);
smo231635.addClass('lyric lyric-0');
const smo231636 = new VF.Annotation('Ich');
smo231636.setAttribute('id', 'smo231636');
smo231636.setFont('Merriweather', 12, 'normal');
smo231636.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231634.addModifier(smo231636);
smo231636.addClass('lyric lyric-1');
smo231652v0ar.push(smo231634);
smo231652v0.addTickables(smo231652v0ar)
fmtsmo23165251.joinVoices([smo231652v0]);
const fmtsmo23278151 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo232781v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232781v0ar = [];
const smo232765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","dn/5/n"]}'))
smo232765.setAttribute('id', 'smo232765');
smo232765.addModifier(new VF.Dot(), 0);
smo232765.addModifier(new VF.Dot(), 1);
smo232781v0ar.push(smo232765);
smo232781v0.addTickables(smo232781v0ar)
fmtsmo23278151.joinVoices([smo232781v0]);
const fmtsmo23401551 = new VF.Formatter();
//
// voices and notes for stave 2 51
const smo234015v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo234015v0ar = [];
const smo233999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo233999.setAttribute('id', 'smo233999');
smo233999.addModifier(new VF.Dot(), 0);
smo233999.addModifier(new VF.Dot(), 1);
smo234015v0ar.push(smo233999);
smo234015v0.addTickables(smo234015v0ar)
fmtsmo23401551.joinVoices([smo234015v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23165251.format([smo231652v0,smo232781v0,smo234015v0], 116);
const stavesmo231652 = new VF.Stave(740, 516.0266026666668, 130);
stavesmo231652.setAttribute('id', 'stavesmo231652');
stavesmo231652.setBegBarType(VF.Barline.type.NONE);
stavesmo231652.setContext(context);
stavesmo231652.draw();
smo231652v0.draw(context, stavesmo231652);
const stavesmo232781 = new VF.Stave(740, 688.0266026666668, 130);
stavesmo232781.setAttribute('id', 'stavesmo232781');
stavesmo232781.setBegBarType(VF.Barline.type.NONE);
stavesmo232781.setContext(context);
stavesmo232781.draw();
smo232781v0.draw(context, stavesmo232781);
const stavesmo234015 = new VF.Stave(740, 780.0266026666668, 130);
stavesmo234015.setAttribute('id', 'stavesmo234015');
stavesmo234015.setBegBarType(VF.Barline.type.NONE);
stavesmo234015.setContext(context);
stavesmo234015.draw();
smo234015v0.draw(context, stavesmo234015);
const fmtsmo23168052 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo231680v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231680v0ar = [];
const smo231653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo231653.setAttribute('id', 'smo231653');
const smo231654 = new VF.Annotation('sind');
smo231654.setAttribute('id', 'smo231654');
smo231654.setFont('Merriweather', 12, 'normal');
smo231654.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231653.addModifier(smo231654);
smo231654.addClass('lyric lyric-0');
const smo231655 = new VF.Annotation('bin');
smo231655.setAttribute('id', 'smo231655');
smo231655.setFont('Merriweather', 12, 'normal');
smo231655.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231653.addModifier(smo231655);
smo231655.addClass('lyric lyric-1');
smo231680v0ar.push(smo231653);
const smo231656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo231656.setAttribute('id', 'smo231656');
const smo231657 = new VF.Annotation('mir');
smo231657.setAttribute('id', 'smo231657');
smo231657.setFont('Merriweather', 12, 'normal');
smo231657.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231656.addModifier(smo231657);
smo231657.addClass('lyric lyric-0');
const smo231658 = new VF.Annotation('wie');
smo231658.setAttribute('id', 'smo231658');
smo231658.setFont('Merriweather', 12, 'normal');
smo231658.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231656.addModifier(smo231658);
smo231658.addClass('lyric lyric-1 lyric-hyphen');
smo231680v0ar.push(smo231656);
const smo231659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo231659.setAttribute('id', 'smo231659');
const smo231660 = new VF.Annotation('be');
smo231660.setAttribute('id', 'smo231660');
smo231660.setFont('Merriweather', 12, 'normal');
smo231660.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231659.addModifier(smo231660);
smo231660.addClass('lyric lyric-0 lyric-hyphen');
const smo231661 = new VF.Annotation('der');
smo231661.setAttribute('id', 'smo231661');
smo231661.setFont('Merriweather', 12, 'normal');
smo231661.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231659.addModifier(smo231661);
smo231661.addClass('lyric lyric-1');
smo231680v0ar.push(smo231659);
const smo231662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo231662.setAttribute('id', 'smo231662');
smo231662.addModifier(new VF.Dot(), 0);
const smo231663 = new VF.Annotation('kannt!');
smo231663.setAttribute('id', 'smo231663');
smo231663.setFont('Merriweather', 12, 'normal');
smo231663.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231662.addModifier(smo231663);
smo231663.addClass('lyric lyric-0');
const smo231664 = new VF.Annotation('da!');
smo231664.setAttribute('id', 'smo231664');
smo231664.setFont('Merriweather', 12, 'normal');
smo231664.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231662.addModifier(smo231664);
smo231664.addClass('lyric lyric-1');
smo231680v0ar.push(smo231662);
smo231680v0.addTickables(smo231680v0ar)
fmtsmo23168052.joinVoices([smo231680v0]);
const fmtsmo23279852 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo232798v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232798v0ar = [];
const smo232782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n"]}'))
smo232782.setAttribute('id', 'smo232782');
smo232782.addModifier(new VF.Dot(), 0);
smo232782.addModifier(new VF.Dot(), 1);
smo232798v0ar.push(smo232782);
smo232798v0.addTickables(smo232798v0ar)
fmtsmo23279852.joinVoices([smo232798v0]);
const fmtsmo23403252 = new VF.Formatter();
//
// voices and notes for stave 2 52
const smo234032v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo234032v0ar = [];
const smo234016 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo234016.setAttribute('id', 'smo234016');
smo234016.addModifier(new VF.Dot(), 0);
smo234032v0ar.push(smo234016);
smo234032v0.addTickables(smo234032v0ar)
fmtsmo23403252.joinVoices([smo234032v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240546 = smo231653.getStemDirection();
smo231653.setStemDirection(dirsmo240546);
smo231656.setStemDirection(dirsmo240546);
smo231659.setStemDirection(dirsmo240546);
const smo240546 = new VF.Beam([smo231653,smo231656,smo231659]);
 
// formatting measures in staff group smo234202
fmtsmo23168052.format([smo231680v0,smo232798v0,smo234032v0], 254);
const stavesmo231680 = new VF.Stave(870, 516.0266026666668, 268);
stavesmo231680.setAttribute('id', 'stavesmo231680');
stavesmo231680.setBegBarType(VF.Barline.type.NONE);
stavesmo231680.setContext(context);
stavesmo231680.draw();
smo231680v0.draw(context, stavesmo231680);
smo240546.setContext(context);
smo240546.draw();
const stavesmo232798 = new VF.Stave(870, 688.0266026666668, 268);
stavesmo232798.setAttribute('id', 'stavesmo232798');
stavesmo232798.setBegBarType(VF.Barline.type.NONE);
stavesmo232798.setContext(context);
stavesmo232798.draw();
smo232798v0.draw(context, stavesmo232798);
const stavesmo234032 = new VF.Stave(870, 780.0266026666668, 268);
stavesmo234032.setAttribute('id', 'stavesmo234032');
stavesmo234032.setBegBarType(VF.Barline.type.NONE);
stavesmo234032.setContext(context);
stavesmo234032.draw();
smo234032v0.draw(context, stavesmo234032);
const fmtsmo23169853 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo231698v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231698v0ar = [];
const smo231681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo231681.setAttribute('id', 'smo231681');
smo231681.addModifier(new VF.Dot(), 0);
const smo231682 = new VF.Annotation('-');
smo231682.setAttribute('id', 'smo231682');
smo231682.setFont('Merriweather', 12, 'normal');
smo231682.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231681.addModifier(smo231682);
smo231682.addClass('lyric lyric-0 lyric-hyphen');
smo231698v0ar.push(smo231681);
smo231698v0.addTickables(smo231698v0ar)
fmtsmo23169853.joinVoices([smo231698v0]);
const fmtsmo23281553 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo232815v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232815v0ar = [];
const smo232799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n"]}'))
smo232799.setAttribute('id', 'smo232799');
smo232799.addModifier(new VF.Dot(), 0);
smo232799.addModifier(new VF.Dot(), 1);
smo232815v0ar.push(smo232799);
smo232815v0.addTickables(smo232815v0ar)
fmtsmo23281553.joinVoices([smo232815v0]);
const fmtsmo23404953 = new VF.Formatter();
//
// voices and notes for stave 2 53
const smo234049v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo234049v0ar = [];
const smo234033 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo234033.setAttribute('id', 'smo234033');
smo234033.addModifier(new VF.Dot(), 0);
smo234049v0ar.push(smo234033);
smo234049v0.addTickables(smo234049v0ar)
fmtsmo23404953.joinVoices([smo234049v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23169853.format([smo231698v0,smo232815v0,smo234049v0], 58);
const stavesmo231698 = new VF.Stave(1138, 516.0266026666668, 72);
stavesmo231698.setAttribute('id', 'stavesmo231698');
stavesmo231698.setBegBarType(VF.Barline.type.NONE);
stavesmo231698.setContext(context);
stavesmo231698.draw();
smo231698v0.draw(context, stavesmo231698);
const stavesmo232815 = new VF.Stave(1138, 688.0266026666668, 72);
stavesmo232815.setAttribute('id', 'stavesmo232815');
stavesmo232815.setBegBarType(VF.Barline.type.NONE);
stavesmo232815.setContext(context);
stavesmo232815.draw();
smo232815v0.draw(context, stavesmo232815);
const stavesmo234049 = new VF.Stave(1138, 780.0266026666668, 72);
stavesmo234049.setAttribute('id', 'stavesmo234049');
stavesmo234049.setBegBarType(VF.Barline.type.NONE);
stavesmo234049.setContext(context);
stavesmo234049.draw();
smo234049v0.draw(context, stavesmo234049);
const rightsmo234202stavesmo2316982 = new VF.StaveConnector(stavesmo231698, stavesmo234049).setType(0);
rightsmo234202stavesmo2316982.setContext(context).draw();
const fmtsmo23171754 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo231717v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231717v0ar = [];
const smo231699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo231699.setAttribute('id', 'smo231699');
smo231699.addModifier(new VF.Dot(), 0);
const smo231700 = new VF.Annotation('-');
smo231700.setAttribute('id', 'smo231700');
smo231700.setFont('Merriweather', 12, 'normal');
smo231700.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231699.addModifier(smo231700);
smo231700.addClass('lyric lyric-0 lyric-hyphen');
smo231717v0ar.push(smo231699);
smo231717v0.addTickables(smo231717v0ar)
fmtsmo23171754.joinVoices([smo231717v0]);
const fmtsmo23283654 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo232836v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232836v0ar = [];
const smo232816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo232816.setAttribute('id', 'smo232816');
smo232836v0ar.push(smo232816);
const smo232817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo232817.setAttribute('id', 'smo232817');
smo232836v0ar.push(smo232817);
const smo232818 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo232818.setAttribute('id', 'smo232818');
smo232836v0ar.push(smo232818);
const smo232819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo232819.setAttribute('id', 'smo232819');
smo232836v0ar.push(smo232819);
smo232836v0.addTickables(smo232836v0ar)
fmtsmo23283654.joinVoices([smo232836v0]);
const fmtsmo23407054 = new VF.Formatter();
//
// voices and notes for stave 2 54
const smo234070v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo234070v0ar = [];
const smo234050 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo234050.setAttribute('id', 'smo234050');
smo234070v0ar.push(smo234050);
const smo234051 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo234051.setAttribute('id', 'smo234051');
smo234070v0ar.push(smo234051);
const smo234052 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo234052.setAttribute('id', 'smo234052');
smo234070v0ar.push(smo234052);
const smo234053 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo234053.setAttribute('id', 'smo234053');
smo234070v0ar.push(smo234053);
smo234070v0.addTickables(smo234070v0ar)
fmtsmo23407054.joinVoices([smo234070v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23171754.format([smo231717v0,smo232836v0,smo234070v0], 111);
const stavesmo231717 = new VF.Stave(66, 909.0266026666668, 185);
stavesmo231717.setAttribute('id', 'stavesmo231717');
stavesmo231717.setBegBarType(1);
stavesmo231717.addClef('treble');
const keysmo231717 = new VF.KeySignature('G');
keysmo231717.addToStave(stavesmo231717);
stavesmo231717.setContext(context);
stavesmo231717.draw();
smo231717v0.draw(context, stavesmo231717);
const stavesmo232836 = new VF.Stave(66, 1030.0266026666668, 185);
stavesmo232836.setAttribute('id', 'stavesmo232836');
stavesmo232836.setBegBarType(1);
stavesmo232836.addClef('treble');
const keysmo232836 = new VF.KeySignature('G');
keysmo232836.addToStave(stavesmo232836);
stavesmo232836.setContext(context);
stavesmo232836.draw();
smo232836v0.draw(context, stavesmo232836);
const stavesmo234070 = new VF.Stave(66, 1106.0266026666668, 185);
stavesmo234070.setAttribute('id', 'stavesmo234070');
stavesmo234070.setBegBarType(1);
stavesmo234070.addClef('bass');
const keysmo234070 = new VF.KeySignature('G');
keysmo234070.addToStave(stavesmo234070);
stavesmo234070.setContext(context);
stavesmo234070.draw();
smo234070v0.draw(context, stavesmo234070);
const leftsmo234202stavesmo2317172 = new VF.StaveConnector(stavesmo231717, stavesmo234070).setType(1);
leftsmo234202stavesmo2317172.setContext(context).draw();
const fmtsmo23173455 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo231734v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231734v0ar = [];
const smo231718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo231718.setAttribute('id', 'smo231718');
smo231718.addModifier(new VF.Dot(), 0);
smo231734v0ar.push(smo231718);
smo231734v0.addTickables(smo231734v0ar)
fmtsmo23173455.joinVoices([smo231734v0]);
const fmtsmo23285655 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo232856v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232856v0ar = [];
const smo232837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo232837.setAttribute('id', 'smo232837');
smo232856v0ar.push(smo232837);
const smo232838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo232838.setAttribute('id', 'smo232838');
smo232856v0ar.push(smo232838);
const smo232839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo232839.setAttribute('id', 'smo232839');
smo232856v0ar.push(smo232839);
const smo232840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo232840.setAttribute('id', 'smo232840');
smo232856v0ar.push(smo232840);
smo232856v0.addTickables(smo232856v0ar)
fmtsmo23285655.joinVoices([smo232856v0]);
const fmtsmo23409055 = new VF.Formatter();
//
// voices and notes for stave 2 55
const smo234090v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo234090v0ar = [];
const smo234071 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo234071.setAttribute('id', 'smo234071');
smo234090v0ar.push(smo234071);
const smo234072 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo234072.setAttribute('id', 'smo234072');
smo234090v0ar.push(smo234072);
const smo234073 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo234073.setAttribute('id', 'smo234073');
smo234090v0ar.push(smo234073);
const smo234074 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo234074.setAttribute('id', 'smo234074');
smo234090v0ar.push(smo234074);
smo234090v0.addTickables(smo234090v0ar)
fmtsmo23409055.joinVoices([smo234090v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23173455.format([smo231734v0,smo232856v0,smo234090v0], 106);
const stavesmo231734 = new VF.Stave(251, 909.0266026666668, 124);
stavesmo231734.setAttribute('id', 'stavesmo231734');
stavesmo231734.setBegBarType(VF.Barline.type.NONE);
stavesmo231734.setEndBarType(5);
stavesmo231734.setContext(context);
stavesmo231734.draw();
smo231734v0.draw(context, stavesmo231734);
const stavesmo232856 = new VF.Stave(251, 1030.0266026666668, 124);
stavesmo232856.setAttribute('id', 'stavesmo232856');
stavesmo232856.setBegBarType(VF.Barline.type.NONE);
stavesmo232856.setEndBarType(5);
stavesmo232856.setContext(context);
stavesmo232856.draw();
smo232856v0.draw(context, stavesmo232856);
const stavesmo234090 = new VF.Stave(251, 1106.0266026666668, 124);
stavesmo234090.setAttribute('id', 'stavesmo234090');
stavesmo234090.setBegBarType(VF.Barline.type.NONE);
stavesmo234090.setEndBarType(5);
stavesmo234090.setContext(context);
stavesmo234090.draw();
smo234090v0.draw(context, stavesmo234090);
const fmtsmo23175356 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo231753v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231753v0ar = [];
const smo231735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo231735.setAttribute('id', 'smo231735');
smo231735.addModifier(new VF.Dot(), 0);
const smo231736 = new VF.Annotation('-');
smo231736.setAttribute('id', 'smo231736');
smo231736.setFont('Merriweather', 12, 'normal');
smo231736.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231735.addModifier(smo231736);
smo231736.addClass('lyric lyric-0 lyric-hyphen');
smo231753v0ar.push(smo231735);
smo231753v0.addTickables(smo231753v0ar)
fmtsmo23175356.joinVoices([smo231753v0]);
const fmtsmo23287556 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo232875v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232875v0ar = [];
const smo232857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo232857.setAttribute('id', 'smo232857');
smo232857.addModifier(new VF.Dot(), 0);
smo232875v0ar.push(smo232857);
const smo232858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo232858.setAttribute('id', 'smo232858');
smo232858.addModifier(new VF.Dot(), 0);
smo232875v0ar.push(smo232858);
smo232875v0.addTickables(smo232875v0ar)
fmtsmo23287556.joinVoices([smo232875v0]);
const fmtsmo23411156 = new VF.Formatter();
//
// voices and notes for stave 2 56
const smo234111v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo234111v0ar = [];
const smo234091 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo234091.setAttribute('id', 'smo234091');
smo234111v0ar.push(smo234091);
const smo234092 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo234092.setAttribute('id', 'smo234092');
smo234111v0ar.push(smo234092);
const smo234093 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo234093.setAttribute('id', 'smo234093');
smo234111v0ar.push(smo234093);
const smo234094 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo234094.setAttribute('id', 'smo234094');
smo234111v0ar.push(smo234094);
smo234111v0.addTickables(smo234111v0ar)
fmtsmo23411156.joinVoices([smo234111v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23175356.format([smo231753v0,smo232875v0,smo234111v0], 125);
const stavesmo231753 = new VF.Stave(375, 909.0266026666668, 139);
stavesmo231753.setAttribute('id', 'stavesmo231753');
stavesmo231753.setBegBarType(VF.Barline.type.NONE);
stavesmo231753.setContext(context);
stavesmo231753.draw();
smo231753v0.draw(context, stavesmo231753);
const stavesmo232875 = new VF.Stave(375, 1030.0266026666668, 139);
stavesmo232875.setAttribute('id', 'stavesmo232875');
stavesmo232875.setBegBarType(VF.Barline.type.NONE);
stavesmo232875.setContext(context);
stavesmo232875.draw();
smo232875v0.draw(context, stavesmo232875);
const stavesmo234111 = new VF.Stave(375, 1106.0266026666668, 139);
stavesmo234111.setAttribute('id', 'stavesmo234111');
stavesmo234111.setBegBarType(VF.Barline.type.NONE);
stavesmo234111.setContext(context);
stavesmo234111.draw();
smo234111v0.draw(context, stavesmo234111);
const fmtsmo23177157 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo231771v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231771v0ar = [];
const smo231754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo231754.setAttribute('id', 'smo231754');
smo231754.addModifier(new VF.Dot(), 0);
const smo231755 = new VF.Annotation('-');
smo231755.setAttribute('id', 'smo231755');
smo231755.setFont('Merriweather', 12, 'normal');
smo231755.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231754.addModifier(smo231755);
smo231755.addClass('lyric lyric-0 lyric-hyphen');
smo231771v0ar.push(smo231754);
smo231771v0.addTickables(smo231771v0ar)
fmtsmo23177157.joinVoices([smo231771v0]);
const fmtsmo23289457 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo232894v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232894v0ar = [];
const smo232876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo232876.setAttribute('id', 'smo232876');
smo232876.addModifier(new VF.Dot(), 0);
smo232894v0ar.push(smo232876);
const smo232877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo232877.setAttribute('id', 'smo232877');
smo232894v0ar.push(smo232877);
const smo232878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo232878.setAttribute('id', 'smo232878');
smo232894v0ar.push(smo232878);
smo232894v0.addTickables(smo232894v0ar)
fmtsmo23289457.joinVoices([smo232894v0]);
const fmtsmo23413157 = new VF.Formatter();
//
// voices and notes for stave 2 57
const smo234131v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo234131v0ar = [];
const smo234112 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo234112.setAttribute('id', 'smo234112');
smo234131v0ar.push(smo234112);
const smo234113 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo234113.setAttribute('id', 'smo234113');
smo234131v0ar.push(smo234113);
const smo234114 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo234114.setAttribute('id', 'smo234114');
smo234131v0ar.push(smo234114);
const smo234115 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo234115.setAttribute('id', 'smo234115');
smo234131v0ar.push(smo234115);
smo234131v0.addTickables(smo234131v0ar)
fmtsmo23413157.joinVoices([smo234131v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23177157.format([smo231771v0,smo232894v0,smo234131v0], 110);
const stavesmo231771 = new VF.Stave(514, 909.0266026666668, 124);
stavesmo231771.setAttribute('id', 'stavesmo231771');
stavesmo231771.setBegBarType(VF.Barline.type.NONE);
stavesmo231771.setContext(context);
stavesmo231771.draw();
smo231771v0.draw(context, stavesmo231771);
const stavesmo232894 = new VF.Stave(514, 1030.0266026666668, 124);
stavesmo232894.setAttribute('id', 'stavesmo232894');
stavesmo232894.setBegBarType(VF.Barline.type.NONE);
stavesmo232894.setContext(context);
stavesmo232894.draw();
smo232894v0.draw(context, stavesmo232894);
const stavesmo234131 = new VF.Stave(514, 1106.0266026666668, 124);
stavesmo234131.setAttribute('id', 'stavesmo234131');
stavesmo234131.setBegBarType(VF.Barline.type.NONE);
stavesmo234131.setContext(context);
stavesmo234131.draw();
smo234131v0.draw(context, stavesmo234131);
const fmtsmo23178958 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo231789v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231789v0ar = [];
const smo231772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo231772.setAttribute('id', 'smo231772');
smo231772.addModifier(new VF.Dot(), 0);
const smo231773 = new VF.Annotation('-');
smo231773.setAttribute('id', 'smo231773');
smo231773.setFont('Merriweather', 12, 'normal');
smo231773.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231772.addModifier(smo231773);
smo231773.addClass('lyric lyric-0 lyric-hyphen');
smo231789v0ar.push(smo231772);
smo231789v0.addTickables(smo231789v0ar)
fmtsmo23178958.joinVoices([smo231789v0]);
const fmtsmo23291558 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo232915v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232915v0ar = [];
const smo232895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo232895.setAttribute('id', 'smo232895');
smo232915v0ar.push(smo232895);
const smo232896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo232896.setAttribute('id', 'smo232896');
smo232915v0ar.push(smo232896);
const smo232897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo232897.setAttribute('id', 'smo232897');
smo232915v0ar.push(smo232897);
const smo232898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo232898.setAttribute('id', 'smo232898');
smo232915v0ar.push(smo232898);
const smo232899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo232899.setAttribute('id', 'smo232899');
smo232915v0ar.push(smo232899);
smo232915v0.addTickables(smo232915v0ar)
fmtsmo23291558.joinVoices([smo232915v0]);
const fmtsmo23415258 = new VF.Formatter();
//
// voices and notes for stave 2 58
const smo234152v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo234152v0ar = [];
const smo234132 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n","an/3/n"]}'))
smo234132.setAttribute('id', 'smo234132');
smo234152v0ar.push(smo234132);
const smo234133 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo234133.setAttribute('id', 'smo234133');
smo234152v0ar.push(smo234133);
const smo234134 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n","an/3/n"]}'))
smo234134.setAttribute('id', 'smo234134');
smo234152v0ar.push(smo234134);
const smo234135 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo234135.setAttribute('id', 'smo234135');
smo234152v0ar.push(smo234135);
const smo234136 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo234136.setAttribute('id', 'smo234136');
smo234152v0ar.push(smo234136);
smo234152v0.addTickables(smo234152v0ar)
fmtsmo23415258.joinVoices([smo234152v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240588 = smo232895.getStemDirection();
smo232895.setStemDirection(dirsmo240588);
smo232896.setStemDirection(dirsmo240588);
smo232897.setStemDirection(dirsmo240588);
const smo240588 = new VF.Beam([smo232895,smo232896,smo232897]);
const dirsmo240591 = smo234132.getStemDirection();
smo234132.setStemDirection(dirsmo240591);
smo234133.setStemDirection(dirsmo240591);
smo234134.setStemDirection(dirsmo240591);
const smo240591 = new VF.Beam([smo234132,smo234133,smo234134]);
 
// formatting measures in staff group smo234202
fmtsmo23178958.format([smo231789v0,smo232915v0,smo234152v0], 140);
const stavesmo231789 = new VF.Stave(638, 909.0266026666668, 154);
stavesmo231789.setAttribute('id', 'stavesmo231789');
stavesmo231789.setBegBarType(VF.Barline.type.NONE);
stavesmo231789.setContext(context);
stavesmo231789.draw();
smo231789v0.draw(context, stavesmo231789);
const stavesmo232915 = new VF.Stave(638, 1030.0266026666668, 154);
stavesmo232915.setAttribute('id', 'stavesmo232915');
stavesmo232915.setBegBarType(VF.Barline.type.NONE);
stavesmo232915.setContext(context);
stavesmo232915.draw();
smo232915v0.draw(context, stavesmo232915);
smo240588.setContext(context);
smo240588.draw();
const stavesmo234152 = new VF.Stave(638, 1106.0266026666668, 154);
stavesmo234152.setAttribute('id', 'stavesmo234152');
stavesmo234152.setBegBarType(VF.Barline.type.NONE);
stavesmo234152.setContext(context);
stavesmo234152.draw();
smo234152v0.draw(context, stavesmo234152);
smo240591.setContext(context);
smo240591.draw();
const fmtsmo23180759 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo231807v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231807v0ar = [];
const smo231790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo231790.setAttribute('id', 'smo231790');
smo231790.addModifier(new VF.Dot(), 0);
const smo231791 = new VF.Annotation('-');
smo231791.setAttribute('id', 'smo231791');
smo231791.setFont('Merriweather', 12, 'normal');
smo231791.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231790.addModifier(smo231791);
smo231791.addClass('lyric lyric-0 lyric-hyphen');
smo231807v0ar.push(smo231790);
smo231807v0.addTickables(smo231807v0ar)
fmtsmo23180759.joinVoices([smo231807v0]);
const fmtsmo23293259 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo232932v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232932v0ar = [];
const smo232916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo232916.setAttribute('id', 'smo232916');
smo232916.addModifier(new VF.Dot(), 0);
smo232932v0ar.push(smo232916);
smo232932v0.addTickables(smo232932v0ar)
fmtsmo23293259.joinVoices([smo232932v0]);
const fmtsmo23416959 = new VF.Formatter();
//
// voices and notes for stave 2 59
const smo234169v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo234169v0ar = [];
const smo234153 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n","gn/3/n","bn/3/n"]}'))
smo234153.setAttribute('id', 'smo234153');
smo234153.addModifier(new VF.Dot(), 0);
smo234153.addModifier(new VF.Dot(), 1);
smo234153.addModifier(new VF.Dot(), 2);
smo234169v0ar.push(smo234153);
smo234169v0.addTickables(smo234169v0ar)
fmtsmo23416959.joinVoices([smo234169v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23180759.format([smo231807v0,smo232932v0,smo234169v0], 28);
const stavesmo231807 = new VF.Stave(792, 909.0266026666668, 42);
stavesmo231807.setAttribute('id', 'stavesmo231807');
stavesmo231807.setBegBarType(VF.Barline.type.NONE);
stavesmo231807.setContext(context);
stavesmo231807.draw();
smo231807v0.draw(context, stavesmo231807);
const stavesmo232932 = new VF.Stave(792, 1030.0266026666668, 42);
stavesmo232932.setAttribute('id', 'stavesmo232932');
stavesmo232932.setBegBarType(VF.Barline.type.NONE);
stavesmo232932.setContext(context);
stavesmo232932.draw();
smo232932v0.draw(context, stavesmo232932);
const stavesmo234169 = new VF.Stave(792, 1106.0266026666668, 42);
stavesmo234169.setAttribute('id', 'stavesmo234169');
stavesmo234169.setBegBarType(VF.Barline.type.NONE);
stavesmo234169.setContext(context);
stavesmo234169.draw();
smo234169v0.draw(context, stavesmo234169);
const fmtsmo23182460 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo231824v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231824v0ar = [];
const smo231808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo231808.setAttribute('id', 'smo231808');
smo231808.addModifier(new VF.Dot(), 0);
smo231824v0ar.push(smo231808);
smo231824v0.addTickables(smo231824v0ar)
fmtsmo23182460.joinVoices([smo231824v0]);
const fmtsmo23295160 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo232951v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232951v0ar = [];
const smo232933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo232933.setAttribute('id', 'smo232933');
smo232951v0ar.push(smo232933);
const smo232934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
smo232934.setAttribute('id', 'smo232934');
smo232951v0ar.push(smo232934);
const smo232935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
smo232935.setAttribute('id', 'smo232935');
smo232935.addModifier(new VF.Dot(), 0);
smo232951v0ar.push(smo232935);
smo232951v0.addTickables(smo232951v0ar)
fmtsmo23295160.joinVoices([smo232951v0]);
const fmtsmo23418860 = new VF.Formatter();
//
// voices and notes for stave 2 60
const smo234188v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo234188v0ar = [];
const smo234170 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","bn/2/n","dn/3/n","gn/3/n"]}'))
smo234170.setAttribute('id', 'smo234170');
smo234188v0ar.push(smo234170);
const smo234171 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo234171.setAttribute('id', 'smo234171');
smo234188v0ar.push(smo234171);
const smo234172 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo234172.setAttribute('id', 'smo234172');
smo234172.addModifier(new VF.Dot(), 0);
smo234188v0ar.push(smo234172);
smo234188v0.addTickables(smo234188v0ar)
fmtsmo23418860.joinVoices([smo234188v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23182460.format([smo231824v0,smo232951v0,smo234188v0], 89);
const stavesmo231824 = new VF.Stave(834, 909.0266026666668, 111);
stavesmo231824.setAttribute('id', 'stavesmo231824');
stavesmo231824.setBegBarType(VF.Barline.type.NONE);
stavesmo231824.setEndBarType(3);
stavesmo231824.setContext(context);
stavesmo231824.draw();
smo231824v0.draw(context, stavesmo231824);
const stavesmo232951 = new VF.Stave(834, 1030.0266026666668, 111);
stavesmo232951.setAttribute('id', 'stavesmo232951');
stavesmo232951.setBegBarType(VF.Barline.type.NONE);
stavesmo232951.setEndBarType(3);
stavesmo232951.setContext(context);
stavesmo232951.draw();
smo232951v0.draw(context, stavesmo232951);
const stavesmo234188 = new VF.Stave(834, 1106.0266026666668, 111);
stavesmo234188.setAttribute('id', 'stavesmo234188');
stavesmo234188.setBegBarType(VF.Barline.type.NONE);
stavesmo234188.setEndBarType(3);
stavesmo234188.setContext(context);
stavesmo234188.draw();
smo234188v0.draw(context, stavesmo234188);
// modifier from 0-54-0-0 to 0-55-0-0
const smo241371 = new VF.StaveTie({ first_note: smo231699, last_note: smo231718, 
          firstNote: smo231699, lastNote: smo231718, first_indices: [0], last_indices: [0]});
smo241371.setContext(context).draw();
// modifier from 0-52-0-3 to 0-53-0-0
const smo241372 = new VF.StaveTie({ first_note: smo231662, last_note: smo231681, 
          firstNote: smo231662, lastNote: smo231681, first_indices: [0], last_indices: [0]});
smo241372.setContext(context).draw();
// modifier from 0-56-0-0 to 0-57-0-0
const smo241373 = new VF.StaveTie({ first_note: smo231735, last_note: smo231754, 
          firstNote: smo231735, lastNote: smo231754, first_indices: [0], last_indices: [0]});
smo241373.setContext(context).draw();
// modifier from 0-58-0-0 to 0-59-0-0
const smo241374 = new VF.StaveTie({ first_note: smo231772, last_note: smo231790, 
          firstNote: smo231772, lastNote: smo231790, first_indices: [0], last_indices: [0]});
smo241374.setContext(context).draw();
// modifier from 0-48-0-0 to 0-49-0-0
const smo241375 = new VF.StaveTie({ first_note: smo231560, last_note: smo231579, 
          firstNote: smo231560, lastNote: smo231579, first_indices: [0], last_indices: [0]});
smo241375.setContext(context).draw();
// modifier from 0-50-0-1 to 0-51-0-0
const smo241376 = new VF.StaveTie({ first_note: smo231612, last_note: smo231631, 
          firstNote: smo231612, lastNote: smo231631, first_indices: [0], last_indices: [0]});
smo241376.setContext(context).draw();
// modifier from 0-46-0-0 to 0-47-0-0
const smo241377 = new VF.StaveTie({ first_note: smo231511, last_note: smo231530, 
          firstNote: smo231511, lastNote: smo231530, first_indices: [0], last_indices: [0]});
smo241377.setContext(context).draw();
// modifier from 1-44-0-0 to 1-45-0-0
const smo241378 = new VF.StaveTie({ first_note: smo232634, last_note: smo232651, 
          firstNote: smo232634, lastNote: smo232651, first_indices: [0,1], last_indices: [0,1]});
smo241378.setContext(context).draw();
// modifier from 1-52-0-0 to 1-53-0-0
const smo241379 = new VF.StaveTie({ first_note: smo232782, last_note: smo232799, 
          firstNote: smo232782, lastNote: smo232799, first_indices: [0,1], last_indices: [0,1]});
smo241379.setContext(context).draw();
// modifier from 2-52-0-0 to 2-53-0-0
const smo241380 = new VF.StaveTie({ first_note: smo234016, last_note: smo234033, 
          firstNote: smo234016, lastNote: smo234033, first_indices: [0], last_indices: [0]});
smo241380.setContext(context).draw();
const smo231701smo231717 = new VF.Volta(2, '1', 66, 20);
smo231701smo231717.setContext(context).draw(stavesmo231717, -1 * 0);
const smo231701smo231734 = new VF.Volta(4, '1', 251, 20);
smo231701smo231734.setContext(context).draw(stavesmo231734, -1 * 0);
const smo231737smo231753 = new VF.Volta(2, '2', 375, 20);
smo231737smo231753.setContext(context).draw(stavesmo231753, -1 * 0);
const smo231737smo231771 = new VF.Volta(4, '2', 514, 20);
smo231737smo231771.setContext(context).draw(stavesmo231771, -1 * 0);
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo231442').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo231443').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo231446').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo231464').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo231465').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo231467').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo231468').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo231470').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo231471').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo231473').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo231474').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo231493').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo231494').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo231512').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo231513').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo231533').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo231534').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo231536').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo231537').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo231539').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo231540').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo231542').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo231543').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo231561').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo231562').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo231580').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo231583').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo231585').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo231586').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo231588').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo231589').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo231591').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo231592').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo231610').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo231611').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo231613').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo231614').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo231632').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo231635').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo231636').setAttributeNS('', 'transform', 'translate(0 31)');
context.svg.getElementById('vf-smo231654').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo231655').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo231657').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo231658').setAttributeNS('', 'transform', 'translate(0 31)');
context.svg.getElementById('vf-smo231660').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo231661').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo231663').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo231664').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo231682').setAttributeNS('', 'transform', 'translate(0 16)');
}
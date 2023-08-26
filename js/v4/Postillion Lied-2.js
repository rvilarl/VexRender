// @@ Postillionlied p 3/2  by Franz Grothe
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
const fmtsmo23770043 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo237700v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237700v0ar = [];
const smo237679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237679.setAttribute('id', 'smo237679');
smo237679.addModifier(new VF.Dot(), 0);
const smo237680 = new VF.Annotation('Wäl');
smo237680.setAttribute('id', 'smo237680');
smo237680.setFont('Merriweather', 12, 'normal');
smo237680.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237679.addModifier(smo237680);
smo237680.addClass('lyric lyric-0 lyric-hyphen');
const smo237681 = new VF.Annotation('klin');
smo237681.setAttribute('id', 'smo237681');
smo237681.setFont('Merriweather', 12, 'normal');
smo237681.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237679.addModifier(smo237681);
smo237681.addClass('lyric lyric-1 lyric-hyphen');
smo237700v0ar.push(smo237679);
const smo237682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo237682.setAttribute('id', 'smo237682');
smo237682.addModifier(new VF.Dot(), 0);
const smo237683 = new VF.Annotation('der');
smo237683.setAttribute('id', 'smo237683');
smo237683.setFont('Merriweather', 12, 'normal');
smo237683.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237682.addModifier(smo237683);
smo237683.addClass('lyric lyric-0');
const smo237684 = new VF.Annotation('gen:');
smo237684.setAttribute('id', 'smo237684');
smo237684.setFont('Merriweather', 12, 'normal');
smo237684.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237682.addModifier(smo237684);
smo237684.addClass('lyric lyric-1');
smo237700v0ar.push(smo237682);
smo237700v0.addTickables(smo237700v0ar)
fmtsmo23770043.joinVoices([smo237700v0]);
const fmtsmo23887143 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo238871v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238871v0ar = [];
const smo238855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","f#/5/n","dn/6/n"]}'))
smo238855.setAttribute('id', 'smo238855');
smo238855.addModifier(new VF.Dot(), 0);
smo238855.addModifier(new VF.Dot(), 1);
smo238855.addModifier(new VF.Dot(), 2);
smo238871v0ar.push(smo238855);
smo238871v0.addTickables(smo238871v0ar)
fmtsmo23887143.joinVoices([smo238871v0]);
const fmtsmo24009643 = new VF.Formatter();
//
// voices and notes for stave 2 43
const smo240096v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240096v0ar = [];
const smo240075 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo240075.setAttribute('id', 'smo240075');
smo240096v0ar.push(smo240075);
const smo240076 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo240076.setAttribute('id', 'smo240076');
smo240096v0ar.push(smo240076);
const smo240077 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo240077.setAttribute('id', 'smo240077');
smo240096v0ar.push(smo240077);
const smo240078 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo240078.setAttribute('id', 'smo240078');
smo240096v0ar.push(smo240078);
smo240096v0.addTickables(smo240096v0ar)
fmtsmo24009643.joinVoices([smo240096v0]);
const smo240096v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240096v1ar = [];
const smo240079 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo240079.setAttribute('id', 'smo240079');
smo240079.setStyle({ fillStyle: "#115511" });
smo240079.addModifier(new VF.Dot(), 0);
smo240096v1ar.push(smo240079);
const smo240080 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
smo240080.setAttribute('id', 'smo240080');
smo240080.setStyle({ fillStyle: "#115511" });
smo240080.addModifier(new VF.Dot(), 0);
smo240096v1ar.push(smo240080);
smo240096v1.addTickables(smo240096v1ar)
fmtsmo24009643.joinVoices([smo240096v1]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23770043.format([smo237700v0,smo238871v0,smo240096v0,smo240096v1], 173);
const stavesmo237700 = new VF.Stave(66, 98.0266026666668, 247);
stavesmo237700.setAttribute('id', 'stavesmo237700');
stavesmo237700.setBegBarType(1);
stavesmo237700.addClef('treble');
const keysmo237700 = new VF.KeySignature('G');
keysmo237700.addToStave(stavesmo237700);
stavesmo237700.setContext(context);
stavesmo237700.draw();
smo237700v0.draw(context, stavesmo237700);
const stavesmo238871 = new VF.Stave(66, 280.0266026666668, 247);
stavesmo238871.setAttribute('id', 'stavesmo238871');
stavesmo238871.setBegBarType(1);
stavesmo238871.addClef('treble');
const keysmo238871 = new VF.KeySignature('G');
keysmo238871.addToStave(stavesmo238871);
stavesmo238871.setContext(context);
stavesmo238871.draw();
smo238871v0.draw(context, stavesmo238871);
const stavesmo240096 = new VF.Stave(66, 386.0266026666668, 247);
stavesmo240096.setAttribute('id', 'stavesmo240096');
stavesmo240096.setBegBarType(1);
stavesmo240096.addClef('bass');
const keysmo240096 = new VF.KeySignature('G');
keysmo240096.addToStave(stavesmo240096);
stavesmo240096.setContext(context);
stavesmo240096.draw();
smo240096v0.draw(context, stavesmo240096);
smo240096v1.draw(context, stavesmo240096);
const leftsmo240440stavesmo2377002 = new VF.StaveConnector(stavesmo237700, stavesmo240096).setType(1);
leftsmo240440stavesmo2377002.setContext(context).draw();
const fmtsmo23772844 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo237728v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237728v0ar = [];
const smo237701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237701.setAttribute('id', 'smo237701');
const smo237702 = new VF.Annotation('ü');
smo237702.setAttribute('id', 'smo237702');
smo237702.setFont('Merriweather', 12, 'normal');
smo237702.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237701.addModifier(smo237702);
smo237702.addClass('lyric lyric-0 lyric-hyphen');
const smo237703 = new VF.Annotation('Ich');
smo237703.setAttribute('id', 'smo237703');
smo237703.setFont('Merriweather', 12, 'normal');
smo237703.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237701.addModifier(smo237703);
smo237703.addClass('lyric lyric-1');
smo237728v0ar.push(smo237701);
const smo237704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237704.setAttribute('id', 'smo237704');
const smo237705 = new VF.Annotation('ber');
smo237705.setAttribute('id', 'smo237705');
smo237705.setFont('Merriweather', 12, 'normal');
smo237705.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237704.addModifier(smo237705);
smo237705.addClass('lyric lyric-0');
const smo237706 = new VF.Annotation('bin');
smo237706.setAttribute('id', 'smo237706');
smo237706.setFont('Merriweather', 12, 'normal');
smo237706.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237704.addModifier(smo237706);
smo237706.addClass('lyric lyric-1');
smo237728v0ar.push(smo237704);
const smo237707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo237707.setAttribute('id', 'smo237707');
const smo237708 = new VF.Annotation('das');
smo237708.setAttribute('id', 'smo237708');
smo237708.setFont('Merriweather', 12, 'normal');
smo237708.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237707.addModifier(smo237708);
smo237708.addClass('lyric lyric-0');
const smo237709 = new VF.Annotation('ganz');
smo237709.setAttribute('id', 'smo237709');
smo237709.setFont('Merriweather', 12, 'normal');
smo237709.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237707.addModifier(smo237709);
smo237709.addClass('lyric lyric-1');
smo237728v0ar.push(smo237707);
const smo237710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237710.setAttribute('id', 'smo237710');
smo237710.addModifier(new VF.Dot(), 0);
const smo237711 = new VF.Annotation('Land;');
smo237711.setAttribute('id', 'smo237711');
smo237711.setFont('Merriweather', 12, 'normal');
smo237711.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237710.addModifier(smo237711);
smo237711.addClass('lyric lyric-0');
const smo237712 = new VF.Annotation('nah!');
smo237712.setAttribute('id', 'smo237712');
smo237712.setFont('Merriweather', 12, 'normal');
smo237712.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237710.addModifier(smo237712);
smo237712.addClass('lyric lyric-1');
smo237728v0ar.push(smo237710);
smo237728v0.addTickables(smo237728v0ar)
fmtsmo23772844.joinVoices([smo237728v0]);
const fmtsmo23888844 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo238888v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238888v0ar = [];
const smo238872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo238872.setAttribute('id', 'smo238872');
smo238872.addModifier(new VF.Dot(), 0);
smo238872.addModifier(new VF.Dot(), 1);
smo238888v0ar.push(smo238872);
smo238888v0.addTickables(smo238888v0ar)
fmtsmo23888844.joinVoices([smo238888v0]);
const fmtsmo24011644 = new VF.Formatter();
//
// voices and notes for stave 2 44
const smo240116v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240116v0ar = [];
const smo240097 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo240097.setAttribute('id', 'smo240097');
smo240116v0ar.push(smo240097);
const smo240098 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo240098.setAttribute('id', 'smo240098');
smo240116v0ar.push(smo240098);
const smo240099 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo240099.setAttribute('id', 'smo240099');
smo240116v0ar.push(smo240099);
const smo240100 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo240100.setAttribute('id', 'smo240100');
smo240116v0ar.push(smo240100);
smo240116v0.addTickables(smo240116v0ar)
fmtsmo24011644.joinVoices([smo240116v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246726 = smo237701.getStemDirection();
smo237701.setStemDirection(dirsmo246726);
smo237704.setStemDirection(dirsmo246726);
smo237707.setStemDirection(dirsmo246726);
const smo246726 = new VF.Beam([smo237701,smo237704,smo237707]);
 
// formatting measures in staff group smo240440
fmtsmo23772844.format([smo237728v0,smo238888v0,smo240116v0], 278);
const stavesmo237728 = new VF.Stave(313, 98.0266026666668, 292);
stavesmo237728.setAttribute('id', 'stavesmo237728');
stavesmo237728.setBegBarType(VF.Barline.type.NONE);
stavesmo237728.setContext(context);
stavesmo237728.draw();
smo237728v0.draw(context, stavesmo237728);
smo246726.setContext(context);
smo246726.draw();
const stavesmo238888 = new VF.Stave(313, 280.0266026666668, 292);
stavesmo238888.setAttribute('id', 'stavesmo238888');
stavesmo238888.setBegBarType(VF.Barline.type.NONE);
stavesmo238888.setContext(context);
stavesmo238888.draw();
smo238888v0.draw(context, stavesmo238888);
const stavesmo240116 = new VF.Stave(313, 386.0266026666668, 292);
stavesmo240116.setAttribute('id', 'stavesmo240116');
stavesmo240116.setBegBarType(VF.Barline.type.NONE);
stavesmo240116.setContext(context);
stavesmo240116.draw();
smo240116v0.draw(context, stavesmo240116);
const fmtsmo23774845 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo237748v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237748v0ar = [];
const smo237729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237729.setAttribute('id', 'smo237729');
smo237729.addModifier(new VF.Dot(), 0);
smo237748v0ar.push(smo237729);
const smo237730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo237730.setAttribute('id', 'smo237730');
smo237730.addModifier(new VF.Dot(), 0);
const smo237731 = new VF.Annotation('von');
smo237731.setAttribute('id', 'smo237731');
smo237731.setFont('Merriweather', 12, 'normal');
smo237731.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237730.addModifier(smo237731);
smo237731.addClass('lyric lyric-0');
const smo237732 = new VF.Annotation('Tra');
smo237732.setAttribute('id', 'smo237732');
smo237732.setFont('Merriweather', 12, 'normal');
smo237732.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237730.addModifier(smo237732);
smo237732.addClass('lyric lyric-1 lyric-hyphen');
smo237748v0ar.push(smo237730);
smo237748v0.addTickables(smo237748v0ar)
fmtsmo23774845.joinVoices([smo237748v0]);
const fmtsmo23890545 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo238905v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238905v0ar = [];
const smo238889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo238889.setAttribute('id', 'smo238889');
smo238889.addModifier(new VF.Dot(), 0);
smo238889.addModifier(new VF.Dot(), 1);
smo238905v0ar.push(smo238889);
smo238905v0.addTickables(smo238905v0ar)
fmtsmo23890545.joinVoices([smo238905v0]);
const fmtsmo24013645 = new VF.Formatter();
//
// voices and notes for stave 2 45
const smo240136v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240136v0ar = [];
const smo240117 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo240117.setAttribute('id', 'smo240117');
smo240136v0ar.push(smo240117);
const smo240118 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo240118.setAttribute('id', 'smo240118');
smo240136v0ar.push(smo240118);
const smo240119 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo240119.setAttribute('id', 'smo240119');
smo240136v0ar.push(smo240119);
const smo240120 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo240120.setAttribute('id', 'smo240120');
smo240136v0ar.push(smo240120);
smo240136v0.addTickables(smo240136v0ar)
fmtsmo24013645.joinVoices([smo240136v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23774845.format([smo237748v0,smo238905v0,smo240136v0], 150);
const stavesmo237748 = new VF.Stave(605, 98.0266026666668, 164);
stavesmo237748.setAttribute('id', 'stavesmo237748');
stavesmo237748.setBegBarType(VF.Barline.type.NONE);
stavesmo237748.setContext(context);
stavesmo237748.draw();
smo237748v0.draw(context, stavesmo237748);
const stavesmo238905 = new VF.Stave(605, 280.0266026666668, 164);
stavesmo238905.setAttribute('id', 'stavesmo238905');
stavesmo238905.setBegBarType(VF.Barline.type.NONE);
stavesmo238905.setContext(context);
stavesmo238905.draw();
smo238905v0.draw(context, stavesmo238905);
const stavesmo240136 = new VF.Stave(605, 386.0266026666668, 164);
stavesmo240136.setAttribute('id', 'stavesmo240136');
stavesmo240136.setBegBarType(VF.Barline.type.NONE);
stavesmo240136.setContext(context);
stavesmo240136.draw();
smo240136v0.draw(context, stavesmo240136);
const fmtsmo23776746 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo237767v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237767v0ar = [];
const smo237749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237749.setAttribute('id', 'smo237749');
smo237749.addModifier(new VF.Dot(), 0);
const smo237750 = new VF.Annotation('fern');
smo237750.setAttribute('id', 'smo237750');
smo237750.setFont('Merriweather', 12, 'normal');
smo237750.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237749.addModifier(smo237750);
smo237750.addClass('lyric lyric-0');
const smo237751 = new VF.Annotation('ra!');
smo237751.setAttribute('id', 'smo237751');
smo237751.setFont('Merriweather', 12, 'normal');
smo237751.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237749.addModifier(smo237751);
smo237751.addClass('lyric lyric-1');
smo237767v0ar.push(smo237749);
smo237767v0.addTickables(smo237767v0ar)
fmtsmo23776746.joinVoices([smo237767v0]);
const fmtsmo23892546 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo238925v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238925v0ar = [];
const smo238906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo238906.setAttribute('id', 'smo238906');
smo238906.addModifier(new VF.Dot(), 0);
smo238925v0ar.push(smo238906);
smo238925v0.addTickables(smo238925v0ar)
fmtsmo23892546.joinVoices([smo238925v0]);
const smo238925v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238925v1ar = [];
const smo238907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
smo238907.setAttribute('id', 'smo238907');
smo238907.setStyle({ fillStyle: "#115511" });
smo238907.addModifier(new VF.Dot(), 0);
smo238925v1ar.push(smo238907);
const smo238908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/5/n"]}'))
smo238908.setAttribute('id', 'smo238908');
smo238908.setStyle({ fillStyle: "#115511" });
smo238925v1ar.push(smo238908);
const smo238909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo238909.setAttribute('id', 'smo238909');
smo238909.setStyle({ fillStyle: "#115511" });
smo238925v1ar.push(smo238909);
smo238925v1.addTickables(smo238925v1ar)
fmtsmo23892546.joinVoices([smo238925v1]);
const fmtsmo24015646 = new VF.Formatter();
//
// voices and notes for stave 2 46
const smo240156v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240156v0ar = [];
const smo240137 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo240137.setAttribute('id', 'smo240137');
smo240156v0ar.push(smo240137);
const smo240138 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo240138.setAttribute('id', 'smo240138');
smo240156v0ar.push(smo240138);
const smo240139 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo240139.setAttribute('id', 'smo240139');
smo240156v0ar.push(smo240139);
const smo240140 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo240140.setAttribute('id', 'smo240140');
smo240156v0ar.push(smo240140);
smo240156v0.addTickables(smo240156v0ar)
fmtsmo24015646.joinVoices([smo240156v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23776746.format([smo237767v0,smo238925v0,smo238925v1,smo240156v0], 138);
const stavesmo237767 = new VF.Stave(769, 98.0266026666668, 152);
stavesmo237767.setAttribute('id', 'stavesmo237767');
stavesmo237767.setBegBarType(VF.Barline.type.NONE);
stavesmo237767.setContext(context);
stavesmo237767.draw();
smo237767v0.draw(context, stavesmo237767);
const stavesmo238925 = new VF.Stave(769, 280.0266026666668, 152);
stavesmo238925.setAttribute('id', 'stavesmo238925');
stavesmo238925.setBegBarType(VF.Barline.type.NONE);
stavesmo238925.setContext(context);
stavesmo238925.draw();
smo238925v0.draw(context, stavesmo238925);
smo238925v1.draw(context, stavesmo238925);
const stavesmo240156 = new VF.Stave(769, 386.0266026666668, 152);
stavesmo240156.setAttribute('id', 'stavesmo240156');
stavesmo240156.setBegBarType(VF.Barline.type.NONE);
stavesmo240156.setContext(context);
stavesmo240156.draw();
smo240156v0.draw(context, stavesmo240156);
const fmtsmo23779747 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo237797v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237797v0ar = [];
const smo237768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237768.setAttribute('id', 'smo237768');
smo237797v0ar.push(smo237768);
const smo237770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237770.setAttribute('id', 'smo237770');
const smo237771 = new VF.Annotation('er');
smo237771.setAttribute('id', 'smo237771');
smo237771.setFont('Merriweather', 12, 'normal');
smo237771.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237770.addModifier(smo237771);
smo237771.addClass('lyric lyric-0');
const smo237772 = new VF.Annotation('Ich');
smo237772.setAttribute('id', 'smo237772');
smo237772.setFont('Merriweather', 12, 'normal');
smo237772.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237770.addModifier(smo237772);
smo237772.addClass('lyric lyric-1');
smo237797v0ar.push(smo237770);
const smo237773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237773.setAttribute('id', 'smo237773');
const smo237774 = new VF.Annotation('kem');
smo237774.setAttribute('id', 'smo237774');
smo237774.setFont('Merriweather', 12, 'normal');
smo237774.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237773.addModifier(smo237774);
smo237774.addClass('lyric lyric-0');
const smo237775 = new VF.Annotation('hö');
smo237775.setAttribute('id', 'smo237775');
smo237775.setFont('Merriweather', 12, 'normal');
smo237775.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237773.addModifier(smo237775);
smo237775.addClass('lyric lyric-1 lyric-hyphen');
smo237797v0ar.push(smo237773);
const smo237776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237776.setAttribute('id', 'smo237776');
const smo237777 = new VF.Annotation('ich');
smo237777.setAttribute('id', 'smo237777');
smo237777.setFont('Merriweather', 12, 'normal');
smo237777.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237776.addModifier(smo237777);
smo237777.addClass('lyric lyric-0');
const smo237778 = new VF.Annotation('re');
smo237778.setAttribute('id', 'smo237778');
smo237778.setFont('Merriweather', 12, 'normal');
smo237778.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237776.addModifier(smo237778);
smo237778.addClass('lyric lyric-1');
smo237797v0ar.push(smo237776);
const smo237779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237779.setAttribute('id', 'smo237779');
const smo237780 = new VF.Annotation('ihn');
smo237780.setAttribute('id', 'smo237780');
smo237780.setFont('Merriweather', 12, 'normal');
smo237780.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237779.addModifier(smo237780);
smo237780.addClass('lyric lyric-0');
const smo237781 = new VF.Annotation('sein');
smo237781.setAttribute('id', 'smo237781');
smo237781.setFont('Merriweather', 12, 'normal');
smo237781.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237779.addModifier(smo237781);
smo237781.addClass('lyric lyric-1');
smo237797v0ar.push(smo237779);
smo237797v0.addTickables(smo237797v0ar)
fmtsmo23779747.joinVoices([smo237797v0]);
const fmtsmo23894447 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo238944v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238944v0ar = [];
const smo238926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo238926.setAttribute('id', 'smo238926');
smo238926.addModifier(new VF.Dot(), 0);
smo238944v0ar.push(smo238926);
smo238944v0.addTickables(smo238944v0ar)
fmtsmo23894447.joinVoices([smo238944v0]);
const smo238944v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238944v1ar = [];
const smo238927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/6/n"]}'))
smo238927.setAttribute('id', 'smo238927');
smo238927.setStyle({ fillStyle: "#115511" });
smo238927.addModifier(new VF.Dot(), 0);
smo238944v1ar.push(smo238927);
const smo238928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
smo238928.setAttribute('id', 'smo238928');
smo238928.setStyle({ fillStyle: "#115511" });
smo238928.addModifier(new VF.Dot(), 0);
smo238944v1ar.push(smo238928);
smo238944v1.addTickables(smo238944v1ar)
fmtsmo23894447.joinVoices([smo238944v1]);
const fmtsmo24017647 = new VF.Formatter();
//
// voices and notes for stave 2 47
const smo240176v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240176v0ar = [];
const smo240157 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo240157.setAttribute('id', 'smo240157');
smo240176v0ar.push(smo240157);
const smo240158 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo240158.setAttribute('id', 'smo240158');
smo240176v0ar.push(smo240158);
const smo240159 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo240159.setAttribute('id', 'smo240159');
smo240176v0ar.push(smo240159);
const smo240160 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo240160.setAttribute('id', 'smo240160');
smo240176v0ar.push(smo240160);
smo240176v0.addTickables(smo240176v0ar)
fmtsmo24017647.joinVoices([smo240176v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246745 = smo237773.getStemDirection();
smo237773.setStemDirection(dirsmo246745);
smo237776.setStemDirection(dirsmo246745);
smo237779.setStemDirection(dirsmo246745);
const smo246745 = new VF.Beam([smo237773,smo237776,smo237779]);
 
// formatting measures in staff group smo240440
fmtsmo23779747.format([smo237797v0,smo238944v0,smo238944v1,smo240176v0], 275);
const stavesmo237797 = new VF.Stave(921, 98.0266026666668, 289);
stavesmo237797.setAttribute('id', 'stavesmo237797');
stavesmo237797.setBegBarType(VF.Barline.type.NONE);
stavesmo237797.setContext(context);
stavesmo237797.draw();
smo237797v0.draw(context, stavesmo237797);
smo246745.setContext(context);
smo246745.draw();
const stavesmo238944 = new VF.Stave(921, 280.0266026666668, 289);
stavesmo238944.setAttribute('id', 'stavesmo238944');
stavesmo238944.setBegBarType(VF.Barline.type.NONE);
stavesmo238944.setContext(context);
stavesmo238944.draw();
smo238944v0.draw(context, stavesmo238944);
smo238944v1.draw(context, stavesmo238944);
const stavesmo240176 = new VF.Stave(921, 386.0266026666668, 289);
stavesmo240176.setAttribute('id', 'stavesmo240176');
stavesmo240176.setBegBarType(VF.Barline.type.NONE);
stavesmo240176.setContext(context);
stavesmo240176.draw();
smo240176v0.draw(context, stavesmo240176);
const rightsmo240440stavesmo2377972 = new VF.StaveConnector(stavesmo237797, stavesmo240176).setType(0);
rightsmo240440stavesmo2377972.setContext(context).draw();
const fmtsmo23781648 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo237816v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237816v0ar = [];
const smo237798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237798.setAttribute('id', 'smo237798');
smo237798.addModifier(new VF.Dot(), 0);
const smo237799 = new VF.Annotation('schon');
smo237799.setAttribute('id', 'smo237799');
smo237799.setFont('Merriweather', 12, 'normal');
smo237799.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237798.addModifier(smo237799);
smo237799.addClass('lyric lyric-0');
const smo237800 = new VF.Annotation('Lied!');
smo237800.setAttribute('id', 'smo237800');
smo237800.setFont('Merriweather', 12, 'normal');
smo237800.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237798.addModifier(smo237800);
smo237800.addClass('lyric lyric-1');
smo237816v0ar.push(smo237798);
smo237816v0.addTickables(smo237816v0ar)
fmtsmo23781648.joinVoices([smo237816v0]);
const fmtsmo23896648 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo238966v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238966v0ar = [];
const smo238945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo238945.setAttribute('id', 'smo238945');
smo238945.addModifier(new VF.Dot(), 0);
smo238966v0ar.push(smo238945);
const smo238946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo238946.setAttribute('id', 'smo238946');
smo238966v0ar.push(smo238946);
const smo238947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo238947.setAttribute('id', 'smo238947');
smo238966v0ar.push(smo238947);
smo238966v0.addTickables(smo238966v0ar)
fmtsmo23896648.joinVoices([smo238966v0]);
const smo238966v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238966v1ar = [];
const smo238948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
smo238948.setAttribute('id', 'smo238948');
smo238948.setStyle({ fillStyle: "#115511" });
smo238948.addModifier(new VF.Dot(), 0);
smo238966v1ar.push(smo238948);
const smo238949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo238949.setAttribute('id', 'smo238949');
smo238949.setStyle({ fillStyle: "#115511" });
smo238966v1ar.push(smo238949);
const smo238950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo238950.setAttribute('id', 'smo238950');
smo238950.setStyle({ fillStyle: "#115511" });
smo238966v1ar.push(smo238950);
smo238966v1.addTickables(smo238966v1ar)
fmtsmo23896648.joinVoices([smo238966v1]);
const fmtsmo24019648 = new VF.Formatter();
//
// voices and notes for stave 2 48
const smo240196v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240196v0ar = [];
const smo240177 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo240177.setAttribute('id', 'smo240177');
smo240196v0ar.push(smo240177);
const smo240178 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo240178.setAttribute('id', 'smo240178');
smo240196v0ar.push(smo240178);
const smo240179 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo240179.setAttribute('id', 'smo240179');
smo240196v0ar.push(smo240179);
const smo240180 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo240180.setAttribute('id', 'smo240180');
smo240196v0ar.push(smo240180);
smo240196v0.addTickables(smo240196v0ar)
fmtsmo24019648.joinVoices([smo240196v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23781648.format([smo237816v0,smo238966v0,smo238966v1,smo240196v0], 152);
const stavesmo237816 = new VF.Stave(66, 516.0266026666668, 226);
stavesmo237816.setAttribute('id', 'stavesmo237816');
stavesmo237816.setBegBarType(1);
stavesmo237816.addClef('treble');
const keysmo237816 = new VF.KeySignature('G');
keysmo237816.addToStave(stavesmo237816);
stavesmo237816.setContext(context);
stavesmo237816.draw();
smo237816v0.draw(context, stavesmo237816);
const stavesmo238966 = new VF.Stave(66, 688.0266026666668, 226);
stavesmo238966.setAttribute('id', 'stavesmo238966');
stavesmo238966.setBegBarType(1);
stavesmo238966.addClef('treble');
const keysmo238966 = new VF.KeySignature('G');
keysmo238966.addToStave(stavesmo238966);
stavesmo238966.setContext(context);
stavesmo238966.draw();
smo238966v0.draw(context, stavesmo238966);
smo238966v1.draw(context, stavesmo238966);
const stavesmo240196 = new VF.Stave(66, 780.0266026666668, 226);
stavesmo240196.setAttribute('id', 'stavesmo240196');
stavesmo240196.setBegBarType(1);
stavesmo240196.addClef('bass');
const keysmo240196 = new VF.KeySignature('G');
keysmo240196.addToStave(stavesmo240196);
stavesmo240196.setContext(context);
stavesmo240196.draw();
smo240196v0.draw(context, stavesmo240196);
const leftsmo240440stavesmo2378162 = new VF.StaveConnector(stavesmo237816, stavesmo240196).setType(1);
leftsmo240440stavesmo2378162.setContext(context).draw();
const fmtsmo23784649 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo237846v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237846v0ar = [];
const smo237817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237817.setAttribute('id', 'smo237817');
const smo237818 = new VF.Annotation('-');
smo237818.setAttribute('id', 'smo237818');
smo237818.setFont('Merriweather', 12, 'normal');
smo237818.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237817.addModifier(smo237818);
smo237818.addClass('lyric lyric-0 lyric-hyphen');
smo237846v0ar.push(smo237817);
const smo237819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237819.setAttribute('id', 'smo237819');
const smo237820 = new VF.Annotation('denn');
smo237820.setAttribute('id', 'smo237820');
smo237820.setFont('Merriweather', 12, 'normal');
smo237820.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237819.addModifier(smo237820);
smo237820.addClass('lyric lyric-0');
const smo237821 = new VF.Annotation('Es');
smo237821.setAttribute('id', 'smo237821');
smo237821.setFont('Merriweather', 12, 'normal');
smo237821.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237819.addModifier(smo237821);
smo237821.addClass('lyric lyric-1');
smo237846v0ar.push(smo237819);
const smo237822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237822.setAttribute('id', 'smo237822');
const smo237823 = new VF.Annotation('all');
smo237823.setAttribute('id', 'smo237823');
smo237823.setFont('Merriweather', 12, 'normal');
smo237823.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237822.addModifier(smo237823);
smo237823.addClass('lyric lyric-0');
const smo237824 = new VF.Annotation('soli');
smo237824.setAttribute('id', 'smo237824');
smo237824.setFont('Merriweather', 12, 'normal');
smo237824.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237822.addModifier(smo237824);
smo237824.addClass('lyric lyric-1');
smo237846v0ar.push(smo237822);
const smo237825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237825.setAttribute('id', 'smo237825');
const smo237826 = new VF.Annotation('sei');
smo237826.setAttribute('id', 'smo237826');
smo237826.setFont('Merriweather', 12, 'normal');
smo237826.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237825.addModifier(smo237826);
smo237826.addClass('lyric lyric-0 lyric-hyphen');
const smo237827 = new VF.Annotation('zu');
smo237827.setAttribute('id', 'smo237827');
smo237827.setFont('Merriweather', 12, 'normal');
smo237827.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237825.addModifier(smo237827);
smo237827.addClass('lyric lyric-1 lyric-hyphen');
smo237846v0ar.push(smo237825);
const smo237828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237828.setAttribute('id', 'smo237828');
const smo237829 = new VF.Annotation('ne');
smo237829.setAttribute('id', 'smo237829');
smo237829.setFont('Merriweather', 12, 'normal');
smo237829.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237828.addModifier(smo237829);
smo237829.addClass('lyric lyric-0');
const smo237830 = new VF.Annotation('mir');
smo237830.setAttribute('id', 'smo237830');
smo237830.setFont('Merriweather', 12, 'normal');
smo237830.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237828.addModifier(smo237830);
smo237830.addClass('lyric lyric-1');
smo237846v0ar.push(smo237828);
smo237846v0.addTickables(smo237846v0ar)
fmtsmo23784649.joinVoices([smo237846v0]);
const fmtsmo23898449 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo238984v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238984v0ar = [];
const smo238967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo238967.setAttribute('id', 'smo238967');
smo238967.addModifier(new VF.Dot(), 0);
smo238984v0ar.push(smo238967);
smo238984v0.addTickables(smo238984v0ar)
fmtsmo23898449.joinVoices([smo238984v0]);
const smo238984v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238984v1ar = [];
const smo238968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/6/n"]}'))
smo238968.setAttribute('id', 'smo238968');
smo238968.setStyle({ fillStyle: "#115511" });
smo238968.addModifier(new VF.Dot(), 0);
smo238984v1ar.push(smo238968);
smo238984v1.addTickables(smo238984v1ar)
fmtsmo23898449.joinVoices([smo238984v1]);
const fmtsmo24021649 = new VF.Formatter();
//
// voices and notes for stave 2 49
const smo240216v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240216v0ar = [];
const smo240197 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo240197.setAttribute('id', 'smo240197');
smo240216v0ar.push(smo240197);
const smo240198 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo240198.setAttribute('id', 'smo240198');
smo240216v0ar.push(smo240198);
const smo240199 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo240199.setAttribute('id', 'smo240199');
smo240216v0ar.push(smo240199);
const smo240200 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo240200.setAttribute('id', 'smo240200');
smo240216v0ar.push(smo240200);
smo240216v0.addTickables(smo240216v0ar)
fmtsmo24021649.joinVoices([smo240216v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246765 = smo237822.getStemDirection();
smo237822.setStemDirection(dirsmo246765);
smo237825.setStemDirection(dirsmo246765);
smo237828.setStemDirection(dirsmo246765);
const smo246765 = new VF.Beam([smo237822,smo237825,smo237828]);
 
// formatting measures in staff group smo240440
fmtsmo23784649.format([smo237846v0,smo238984v0,smo238984v1,smo240216v0], 271);
const stavesmo237846 = new VF.Stave(292, 516.0266026666668, 285);
stavesmo237846.setAttribute('id', 'stavesmo237846');
stavesmo237846.setBegBarType(VF.Barline.type.NONE);
stavesmo237846.setContext(context);
stavesmo237846.draw();
smo237846v0.draw(context, stavesmo237846);
smo246765.setContext(context);
smo246765.draw();
const stavesmo238984 = new VF.Stave(292, 688.0266026666668, 285);
stavesmo238984.setAttribute('id', 'stavesmo238984');
stavesmo238984.setBegBarType(VF.Barline.type.NONE);
stavesmo238984.setContext(context);
stavesmo238984.draw();
smo238984v0.draw(context, stavesmo238984);
smo238984v1.draw(context, stavesmo238984);
const stavesmo240216 = new VF.Stave(292, 780.0266026666668, 285);
stavesmo240216.setAttribute('id', 'stavesmo240216');
stavesmo240216.setBegBarType(VF.Barline.type.NONE);
stavesmo240216.setContext(context);
stavesmo240216.draw();
smo240216v0.draw(context, stavesmo240216);
const fmtsmo23786850 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo237868v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237868v0ar = [];
const smo237847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237847.setAttribute('id', 'smo237847');
smo237847.addModifier(new VF.Dot(), 0);
const smo237848 = new VF.Annotation('Lie');
smo237848.setAttribute('id', 'smo237848');
smo237848.setFont('Merriweather', 12, 'normal');
smo237848.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237847.addModifier(smo237848);
smo237848.addClass('lyric lyric-0 lyric-hyphen');
const smo237849 = new VF.Annotation('so');
smo237849.setAttribute('id', 'smo237849');
smo237849.setFont('Merriweather', 12, 'normal');
smo237849.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237847.addModifier(smo237849);
smo237849.addClass('lyric lyric-1 lyric-hyphen');
smo237868v0ar.push(smo237847);
const smo237850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237850.setAttribute('id', 'smo237850');
smo237850.addModifier(new VF.Dot(), 0);
const smo237851 = new VF.Annotation('der');
smo237851.setAttribute('id', 'smo237851');
smo237851.setFont('Merriweather', 12, 'normal');
smo237851.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237850.addModifier(smo237851);
smo237851.addClass('lyric lyric-0');
const smo237852 = new VF.Annotation('gen');
smo237852.setAttribute('id', 'smo237852');
smo237852.setFont('Merriweather', 12, 'normal');
smo237852.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237850.addModifier(smo237852);
smo237852.addClass('lyric lyric-1');
smo237868v0ar.push(smo237850);
smo237868v0.addTickables(smo237868v0ar)
fmtsmo23786850.joinVoices([smo237868v0]);
const fmtsmo23900250 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo239002v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239002v0ar = [];
const smo238985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238985.setAttribute('id', 'smo238985');
smo238985.addModifier(new VF.Dot(), 0);
smo239002v0ar.push(smo238985);
const smo238986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","dn/5/n"]}'))
smo238986.setAttribute('id', 'smo238986');
smo238986.addModifier(new VF.Dot(), 0);
smo238986.addModifier(new VF.Dot(), 1);
smo239002v0ar.push(smo238986);
smo239002v0.addTickables(smo239002v0ar)
fmtsmo23900250.joinVoices([smo239002v0]);
const fmtsmo24023650 = new VF.Formatter();
//
// voices and notes for stave 2 50
const smo240236v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240236v0ar = [];
const smo240217 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo240217.setAttribute('id', 'smo240217');
smo240236v0ar.push(smo240217);
const smo240218 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo240218.setAttribute('id', 'smo240218');
smo240236v0ar.push(smo240218);
const smo240219 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo240219.setAttribute('id', 'smo240219');
smo240236v0ar.push(smo240219);
const smo240220 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo240220.setAttribute('id', 'smo240220');
smo240236v0ar.push(smo240220);
smo240236v0.addTickables(smo240236v0ar)
fmtsmo24023650.joinVoices([smo240236v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23786850.format([smo237868v0,smo239002v0,smo240236v0], 149);
const stavesmo237868 = new VF.Stave(577, 516.0266026666668, 163);
stavesmo237868.setAttribute('id', 'stavesmo237868');
stavesmo237868.setBegBarType(VF.Barline.type.NONE);
stavesmo237868.setContext(context);
stavesmo237868.draw();
smo237868v0.draw(context, stavesmo237868);
const stavesmo239002 = new VF.Stave(577, 688.0266026666668, 163);
stavesmo239002.setAttribute('id', 'stavesmo239002');
stavesmo239002.setBegBarType(VF.Barline.type.NONE);
stavesmo239002.setContext(context);
stavesmo239002.draw();
smo239002v0.draw(context, stavesmo239002);
const stavesmo240236 = new VF.Stave(577, 780.0266026666668, 163);
stavesmo240236.setAttribute('id', 'stavesmo240236');
stavesmo240236.setBegBarType(VF.Barline.type.NONE);
stavesmo240236.setContext(context);
stavesmo240236.draw();
smo240236v0.draw(context, stavesmo240236);
const fmtsmo23789051 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo237890v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237890v0ar = [];
const smo237869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237869.setAttribute('id', 'smo237869');
smo237869.addModifier(new VF.Dot(), 0);
const smo237870 = new VF.Annotation('-');
smo237870.setAttribute('id', 'smo237870');
smo237870.setFont('Merriweather', 12, 'normal');
smo237870.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237869.addModifier(smo237870);
smo237870.addClass('lyric lyric-0 lyric-hyphen');
smo237890v0ar.push(smo237869);
const smo237871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237871.setAttribute('id', 'smo237871');
smo237890v0ar.push(smo237871);
const smo237872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237872.setAttribute('id', 'smo237872');
const smo237873 = new VF.Annotation('sie');
smo237873.setAttribute('id', 'smo237873');
smo237873.setFont('Merriweather', 12, 'normal');
smo237873.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237872.addModifier(smo237873);
smo237873.addClass('lyric lyric-0');
const smo237874 = new VF.Annotation('Ich');
smo237874.setAttribute('id', 'smo237874');
smo237874.setFont('Merriweather', 12, 'normal');
smo237874.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237872.addModifier(smo237874);
smo237874.addClass('lyric lyric-1');
smo237890v0ar.push(smo237872);
smo237890v0.addTickables(smo237890v0ar)
fmtsmo23789051.joinVoices([smo237890v0]);
const fmtsmo23901951 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo239019v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239019v0ar = [];
const smo239003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","dn/5/n"]}'))
smo239003.setAttribute('id', 'smo239003');
smo239003.addModifier(new VF.Dot(), 0);
smo239003.addModifier(new VF.Dot(), 1);
smo239019v0ar.push(smo239003);
smo239019v0.addTickables(smo239019v0ar)
fmtsmo23901951.joinVoices([smo239019v0]);
const fmtsmo24025351 = new VF.Formatter();
//
// voices and notes for stave 2 51
const smo240253v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240253v0ar = [];
const smo240237 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo240237.setAttribute('id', 'smo240237');
smo240237.addModifier(new VF.Dot(), 0);
smo240237.addModifier(new VF.Dot(), 1);
smo240253v0ar.push(smo240237);
smo240253v0.addTickables(smo240253v0ar)
fmtsmo24025351.joinVoices([smo240253v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23789051.format([smo237890v0,smo239019v0,smo240253v0], 116);
const stavesmo237890 = new VF.Stave(740, 516.0266026666668, 130);
stavesmo237890.setAttribute('id', 'stavesmo237890');
stavesmo237890.setBegBarType(VF.Barline.type.NONE);
stavesmo237890.setContext(context);
stavesmo237890.draw();
smo237890v0.draw(context, stavesmo237890);
const stavesmo239019 = new VF.Stave(740, 688.0266026666668, 130);
stavesmo239019.setAttribute('id', 'stavesmo239019');
stavesmo239019.setBegBarType(VF.Barline.type.NONE);
stavesmo239019.setContext(context);
stavesmo239019.draw();
smo239019v0.draw(context, stavesmo239019);
const stavesmo240253 = new VF.Stave(740, 780.0266026666668, 130);
stavesmo240253.setAttribute('id', 'stavesmo240253');
stavesmo240253.setBegBarType(VF.Barline.type.NONE);
stavesmo240253.setContext(context);
stavesmo240253.draw();
smo240253v0.draw(context, stavesmo240253);
const fmtsmo23791852 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo237918v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237918v0ar = [];
const smo237891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237891.setAttribute('id', 'smo237891');
const smo237892 = new VF.Annotation('sind');
smo237892.setAttribute('id', 'smo237892');
smo237892.setFont('Merriweather', 12, 'normal');
smo237892.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237891.addModifier(smo237892);
smo237892.addClass('lyric lyric-0');
const smo237893 = new VF.Annotation('bin');
smo237893.setAttribute('id', 'smo237893');
smo237893.setFont('Merriweather', 12, 'normal');
smo237893.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237891.addModifier(smo237893);
smo237893.addClass('lyric lyric-1');
smo237918v0ar.push(smo237891);
const smo237894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo237894.setAttribute('id', 'smo237894');
const smo237895 = new VF.Annotation('mir');
smo237895.setAttribute('id', 'smo237895');
smo237895.setFont('Merriweather', 12, 'normal');
smo237895.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237894.addModifier(smo237895);
smo237895.addClass('lyric lyric-0');
const smo237896 = new VF.Annotation('wie');
smo237896.setAttribute('id', 'smo237896');
smo237896.setFont('Merriweather', 12, 'normal');
smo237896.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237894.addModifier(smo237896);
smo237896.addClass('lyric lyric-1 lyric-hyphen');
smo237918v0ar.push(smo237894);
const smo237897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo237897.setAttribute('id', 'smo237897');
const smo237898 = new VF.Annotation('be');
smo237898.setAttribute('id', 'smo237898');
smo237898.setFont('Merriweather', 12, 'normal');
smo237898.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237897.addModifier(smo237898);
smo237898.addClass('lyric lyric-0 lyric-hyphen');
const smo237899 = new VF.Annotation('der');
smo237899.setAttribute('id', 'smo237899');
smo237899.setFont('Merriweather', 12, 'normal');
smo237899.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237897.addModifier(smo237899);
smo237899.addClass('lyric lyric-1');
smo237918v0ar.push(smo237897);
const smo237900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo237900.setAttribute('id', 'smo237900');
smo237900.addModifier(new VF.Dot(), 0);
const smo237901 = new VF.Annotation('kannt!');
smo237901.setAttribute('id', 'smo237901');
smo237901.setFont('Merriweather', 12, 'normal');
smo237901.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237900.addModifier(smo237901);
smo237901.addClass('lyric lyric-0');
const smo237902 = new VF.Annotation('da!');
smo237902.setAttribute('id', 'smo237902');
smo237902.setFont('Merriweather', 12, 'normal');
smo237902.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237900.addModifier(smo237902);
smo237902.addClass('lyric lyric-1');
smo237918v0ar.push(smo237900);
smo237918v0.addTickables(smo237918v0ar)
fmtsmo23791852.joinVoices([smo237918v0]);
const fmtsmo23903652 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo239036v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239036v0ar = [];
const smo239020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n"]}'))
smo239020.setAttribute('id', 'smo239020');
smo239020.addModifier(new VF.Dot(), 0);
smo239020.addModifier(new VF.Dot(), 1);
smo239036v0ar.push(smo239020);
smo239036v0.addTickables(smo239036v0ar)
fmtsmo23903652.joinVoices([smo239036v0]);
const fmtsmo24027052 = new VF.Formatter();
//
// voices and notes for stave 2 52
const smo240270v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240270v0ar = [];
const smo240254 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo240254.setAttribute('id', 'smo240254');
smo240254.addModifier(new VF.Dot(), 0);
smo240270v0ar.push(smo240254);
smo240270v0.addTickables(smo240270v0ar)
fmtsmo24027052.joinVoices([smo240270v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246784 = smo237891.getStemDirection();
smo237891.setStemDirection(dirsmo246784);
smo237894.setStemDirection(dirsmo246784);
smo237897.setStemDirection(dirsmo246784);
const smo246784 = new VF.Beam([smo237891,smo237894,smo237897]);
 
// formatting measures in staff group smo240440
fmtsmo23791852.format([smo237918v0,smo239036v0,smo240270v0], 254);
const stavesmo237918 = new VF.Stave(870, 516.0266026666668, 268);
stavesmo237918.setAttribute('id', 'stavesmo237918');
stavesmo237918.setBegBarType(VF.Barline.type.NONE);
stavesmo237918.setContext(context);
stavesmo237918.draw();
smo237918v0.draw(context, stavesmo237918);
smo246784.setContext(context);
smo246784.draw();
const stavesmo239036 = new VF.Stave(870, 688.0266026666668, 268);
stavesmo239036.setAttribute('id', 'stavesmo239036');
stavesmo239036.setBegBarType(VF.Barline.type.NONE);
stavesmo239036.setContext(context);
stavesmo239036.draw();
smo239036v0.draw(context, stavesmo239036);
const stavesmo240270 = new VF.Stave(870, 780.0266026666668, 268);
stavesmo240270.setAttribute('id', 'stavesmo240270');
stavesmo240270.setBegBarType(VF.Barline.type.NONE);
stavesmo240270.setContext(context);
stavesmo240270.draw();
smo240270v0.draw(context, stavesmo240270);
const fmtsmo23793653 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo237936v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237936v0ar = [];
const smo237919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo237919.setAttribute('id', 'smo237919');
smo237919.addModifier(new VF.Dot(), 0);
const smo237920 = new VF.Annotation('-');
smo237920.setAttribute('id', 'smo237920');
smo237920.setFont('Merriweather', 12, 'normal');
smo237920.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237919.addModifier(smo237920);
smo237920.addClass('lyric lyric-0 lyric-hyphen');
smo237936v0ar.push(smo237919);
smo237936v0.addTickables(smo237936v0ar)
fmtsmo23793653.joinVoices([smo237936v0]);
const fmtsmo23905353 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo239053v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239053v0ar = [];
const smo239037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n"]}'))
smo239037.setAttribute('id', 'smo239037');
smo239037.addModifier(new VF.Dot(), 0);
smo239037.addModifier(new VF.Dot(), 1);
smo239053v0ar.push(smo239037);
smo239053v0.addTickables(smo239053v0ar)
fmtsmo23905353.joinVoices([smo239053v0]);
const fmtsmo24028753 = new VF.Formatter();
//
// voices and notes for stave 2 53
const smo240287v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240287v0ar = [];
const smo240271 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo240271.setAttribute('id', 'smo240271');
smo240271.addModifier(new VF.Dot(), 0);
smo240287v0ar.push(smo240271);
smo240287v0.addTickables(smo240287v0ar)
fmtsmo24028753.joinVoices([smo240287v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23793653.format([smo237936v0,smo239053v0,smo240287v0], 58);
const stavesmo237936 = new VF.Stave(1138, 516.0266026666668, 72);
stavesmo237936.setAttribute('id', 'stavesmo237936');
stavesmo237936.setBegBarType(VF.Barline.type.NONE);
stavesmo237936.setContext(context);
stavesmo237936.draw();
smo237936v0.draw(context, stavesmo237936);
const stavesmo239053 = new VF.Stave(1138, 688.0266026666668, 72);
stavesmo239053.setAttribute('id', 'stavesmo239053');
stavesmo239053.setBegBarType(VF.Barline.type.NONE);
stavesmo239053.setContext(context);
stavesmo239053.draw();
smo239053v0.draw(context, stavesmo239053);
const stavesmo240287 = new VF.Stave(1138, 780.0266026666668, 72);
stavesmo240287.setAttribute('id', 'stavesmo240287');
stavesmo240287.setBegBarType(VF.Barline.type.NONE);
stavesmo240287.setContext(context);
stavesmo240287.draw();
smo240287v0.draw(context, stavesmo240287);
const rightsmo240440stavesmo2379362 = new VF.StaveConnector(stavesmo237936, stavesmo240287).setType(0);
rightsmo240440stavesmo2379362.setContext(context).draw();
const fmtsmo23795554 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo237955v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237955v0ar = [];
const smo237937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo237937.setAttribute('id', 'smo237937');
smo237937.addModifier(new VF.Dot(), 0);
const smo237938 = new VF.Annotation('-');
smo237938.setAttribute('id', 'smo237938');
smo237938.setFont('Merriweather', 12, 'normal');
smo237938.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237937.addModifier(smo237938);
smo237938.addClass('lyric lyric-0 lyric-hyphen');
smo237955v0ar.push(smo237937);
smo237955v0.addTickables(smo237955v0ar)
fmtsmo23795554.joinVoices([smo237955v0]);
const fmtsmo23907454 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo239074v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239074v0ar = [];
const smo239054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo239054.setAttribute('id', 'smo239054');
smo239074v0ar.push(smo239054);
const smo239055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo239055.setAttribute('id', 'smo239055');
smo239074v0ar.push(smo239055);
const smo239056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo239056.setAttribute('id', 'smo239056');
smo239074v0ar.push(smo239056);
const smo239057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo239057.setAttribute('id', 'smo239057');
smo239074v0ar.push(smo239057);
smo239074v0.addTickables(smo239074v0ar)
fmtsmo23907454.joinVoices([smo239074v0]);
const fmtsmo24030854 = new VF.Formatter();
//
// voices and notes for stave 2 54
const smo240308v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240308v0ar = [];
const smo240288 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo240288.setAttribute('id', 'smo240288');
smo240308v0ar.push(smo240288);
const smo240289 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo240289.setAttribute('id', 'smo240289');
smo240308v0ar.push(smo240289);
const smo240290 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo240290.setAttribute('id', 'smo240290');
smo240308v0ar.push(smo240290);
const smo240291 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo240291.setAttribute('id', 'smo240291');
smo240308v0ar.push(smo240291);
smo240308v0.addTickables(smo240308v0ar)
fmtsmo24030854.joinVoices([smo240308v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23795554.format([smo237955v0,smo239074v0,smo240308v0], 111);
const stavesmo237955 = new VF.Stave(66, 909.0266026666668, 185);
stavesmo237955.setAttribute('id', 'stavesmo237955');
stavesmo237955.setBegBarType(1);
stavesmo237955.addClef('treble');
const keysmo237955 = new VF.KeySignature('G');
keysmo237955.addToStave(stavesmo237955);
stavesmo237955.setContext(context);
stavesmo237955.draw();
smo237955v0.draw(context, stavesmo237955);
const stavesmo239074 = new VF.Stave(66, 1030.0266026666668, 185);
stavesmo239074.setAttribute('id', 'stavesmo239074');
stavesmo239074.setBegBarType(1);
stavesmo239074.addClef('treble');
const keysmo239074 = new VF.KeySignature('G');
keysmo239074.addToStave(stavesmo239074);
stavesmo239074.setContext(context);
stavesmo239074.draw();
smo239074v0.draw(context, stavesmo239074);
const stavesmo240308 = new VF.Stave(66, 1106.0266026666668, 185);
stavesmo240308.setAttribute('id', 'stavesmo240308');
stavesmo240308.setBegBarType(1);
stavesmo240308.addClef('bass');
const keysmo240308 = new VF.KeySignature('G');
keysmo240308.addToStave(stavesmo240308);
stavesmo240308.setContext(context);
stavesmo240308.draw();
smo240308v0.draw(context, stavesmo240308);
const leftsmo240440stavesmo2379552 = new VF.StaveConnector(stavesmo237955, stavesmo240308).setType(1);
leftsmo240440stavesmo2379552.setContext(context).draw();
const fmtsmo23797255 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo237972v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237972v0ar = [];
const smo237956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo237956.setAttribute('id', 'smo237956');
smo237956.addModifier(new VF.Dot(), 0);
smo237972v0ar.push(smo237956);
smo237972v0.addTickables(smo237972v0ar)
fmtsmo23797255.joinVoices([smo237972v0]);
const fmtsmo23909455 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo239094v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239094v0ar = [];
const smo239075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo239075.setAttribute('id', 'smo239075');
smo239094v0ar.push(smo239075);
const smo239076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo239076.setAttribute('id', 'smo239076');
smo239094v0ar.push(smo239076);
const smo239077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo239077.setAttribute('id', 'smo239077');
smo239094v0ar.push(smo239077);
const smo239078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo239078.setAttribute('id', 'smo239078');
smo239094v0ar.push(smo239078);
smo239094v0.addTickables(smo239094v0ar)
fmtsmo23909455.joinVoices([smo239094v0]);
const fmtsmo24032855 = new VF.Formatter();
//
// voices and notes for stave 2 55
const smo240328v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240328v0ar = [];
const smo240309 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo240309.setAttribute('id', 'smo240309');
smo240328v0ar.push(smo240309);
const smo240310 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo240310.setAttribute('id', 'smo240310');
smo240328v0ar.push(smo240310);
const smo240311 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo240311.setAttribute('id', 'smo240311');
smo240328v0ar.push(smo240311);
const smo240312 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo240312.setAttribute('id', 'smo240312');
smo240328v0ar.push(smo240312);
smo240328v0.addTickables(smo240328v0ar)
fmtsmo24032855.joinVoices([smo240328v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23797255.format([smo237972v0,smo239094v0,smo240328v0], 106);
const stavesmo237972 = new VF.Stave(251, 909.0266026666668, 124);
stavesmo237972.setAttribute('id', 'stavesmo237972');
stavesmo237972.setBegBarType(VF.Barline.type.NONE);
stavesmo237972.setEndBarType(5);
stavesmo237972.setContext(context);
stavesmo237972.draw();
smo237972v0.draw(context, stavesmo237972);
const stavesmo239094 = new VF.Stave(251, 1030.0266026666668, 124);
stavesmo239094.setAttribute('id', 'stavesmo239094');
stavesmo239094.setBegBarType(VF.Barline.type.NONE);
stavesmo239094.setEndBarType(5);
stavesmo239094.setContext(context);
stavesmo239094.draw();
smo239094v0.draw(context, stavesmo239094);
const stavesmo240328 = new VF.Stave(251, 1106.0266026666668, 124);
stavesmo240328.setAttribute('id', 'stavesmo240328');
stavesmo240328.setBegBarType(VF.Barline.type.NONE);
stavesmo240328.setEndBarType(5);
stavesmo240328.setContext(context);
stavesmo240328.draw();
smo240328v0.draw(context, stavesmo240328);
const fmtsmo23799156 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo237991v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237991v0ar = [];
const smo237973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo237973.setAttribute('id', 'smo237973');
smo237973.addModifier(new VF.Dot(), 0);
const smo237974 = new VF.Annotation('-');
smo237974.setAttribute('id', 'smo237974');
smo237974.setFont('Merriweather', 12, 'normal');
smo237974.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237973.addModifier(smo237974);
smo237974.addClass('lyric lyric-0 lyric-hyphen');
smo237991v0ar.push(smo237973);
smo237991v0.addTickables(smo237991v0ar)
fmtsmo23799156.joinVoices([smo237991v0]);
const fmtsmo23911356 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo239113v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239113v0ar = [];
const smo239095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo239095.setAttribute('id', 'smo239095');
smo239095.addModifier(new VF.Dot(), 0);
smo239113v0ar.push(smo239095);
const smo239096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo239096.setAttribute('id', 'smo239096');
smo239096.addModifier(new VF.Dot(), 0);
smo239113v0ar.push(smo239096);
smo239113v0.addTickables(smo239113v0ar)
fmtsmo23911356.joinVoices([smo239113v0]);
const fmtsmo24034956 = new VF.Formatter();
//
// voices and notes for stave 2 56
const smo240349v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240349v0ar = [];
const smo240329 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo240329.setAttribute('id', 'smo240329');
smo240349v0ar.push(smo240329);
const smo240330 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo240330.setAttribute('id', 'smo240330');
smo240349v0ar.push(smo240330);
const smo240331 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo240331.setAttribute('id', 'smo240331');
smo240349v0ar.push(smo240331);
const smo240332 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo240332.setAttribute('id', 'smo240332');
smo240349v0ar.push(smo240332);
smo240349v0.addTickables(smo240349v0ar)
fmtsmo24034956.joinVoices([smo240349v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23799156.format([smo237991v0,smo239113v0,smo240349v0], 125);
const stavesmo237991 = new VF.Stave(375, 909.0266026666668, 139);
stavesmo237991.setAttribute('id', 'stavesmo237991');
stavesmo237991.setBegBarType(VF.Barline.type.NONE);
stavesmo237991.setContext(context);
stavesmo237991.draw();
smo237991v0.draw(context, stavesmo237991);
const stavesmo239113 = new VF.Stave(375, 1030.0266026666668, 139);
stavesmo239113.setAttribute('id', 'stavesmo239113');
stavesmo239113.setBegBarType(VF.Barline.type.NONE);
stavesmo239113.setContext(context);
stavesmo239113.draw();
smo239113v0.draw(context, stavesmo239113);
const stavesmo240349 = new VF.Stave(375, 1106.0266026666668, 139);
stavesmo240349.setAttribute('id', 'stavesmo240349');
stavesmo240349.setBegBarType(VF.Barline.type.NONE);
stavesmo240349.setContext(context);
stavesmo240349.draw();
smo240349v0.draw(context, stavesmo240349);
const fmtsmo23800957 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo238009v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238009v0ar = [];
const smo237992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo237992.setAttribute('id', 'smo237992');
smo237992.addModifier(new VF.Dot(), 0);
const smo237993 = new VF.Annotation('-');
smo237993.setAttribute('id', 'smo237993');
smo237993.setFont('Merriweather', 12, 'normal');
smo237993.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237992.addModifier(smo237993);
smo237993.addClass('lyric lyric-0 lyric-hyphen');
smo238009v0ar.push(smo237992);
smo238009v0.addTickables(smo238009v0ar)
fmtsmo23800957.joinVoices([smo238009v0]);
const fmtsmo23913257 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo239132v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239132v0ar = [];
const smo239114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo239114.setAttribute('id', 'smo239114');
smo239114.addModifier(new VF.Dot(), 0);
smo239132v0ar.push(smo239114);
const smo239115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo239115.setAttribute('id', 'smo239115');
smo239132v0ar.push(smo239115);
const smo239116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo239116.setAttribute('id', 'smo239116');
smo239132v0ar.push(smo239116);
smo239132v0.addTickables(smo239132v0ar)
fmtsmo23913257.joinVoices([smo239132v0]);
const fmtsmo24036957 = new VF.Formatter();
//
// voices and notes for stave 2 57
const smo240369v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240369v0ar = [];
const smo240350 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo240350.setAttribute('id', 'smo240350');
smo240369v0ar.push(smo240350);
const smo240351 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo240351.setAttribute('id', 'smo240351');
smo240369v0ar.push(smo240351);
const smo240352 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo240352.setAttribute('id', 'smo240352');
smo240369v0ar.push(smo240352);
const smo240353 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo240353.setAttribute('id', 'smo240353');
smo240369v0ar.push(smo240353);
smo240369v0.addTickables(smo240369v0ar)
fmtsmo24036957.joinVoices([smo240369v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23800957.format([smo238009v0,smo239132v0,smo240369v0], 110);
const stavesmo238009 = new VF.Stave(514, 909.0266026666668, 124);
stavesmo238009.setAttribute('id', 'stavesmo238009');
stavesmo238009.setBegBarType(VF.Barline.type.NONE);
stavesmo238009.setContext(context);
stavesmo238009.draw();
smo238009v0.draw(context, stavesmo238009);
const stavesmo239132 = new VF.Stave(514, 1030.0266026666668, 124);
stavesmo239132.setAttribute('id', 'stavesmo239132');
stavesmo239132.setBegBarType(VF.Barline.type.NONE);
stavesmo239132.setContext(context);
stavesmo239132.draw();
smo239132v0.draw(context, stavesmo239132);
const stavesmo240369 = new VF.Stave(514, 1106.0266026666668, 124);
stavesmo240369.setAttribute('id', 'stavesmo240369');
stavesmo240369.setBegBarType(VF.Barline.type.NONE);
stavesmo240369.setContext(context);
stavesmo240369.draw();
smo240369v0.draw(context, stavesmo240369);
const fmtsmo23802758 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo238027v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238027v0ar = [];
const smo238010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo238010.setAttribute('id', 'smo238010');
smo238010.addModifier(new VF.Dot(), 0);
const smo238011 = new VF.Annotation('-');
smo238011.setAttribute('id', 'smo238011');
smo238011.setFont('Merriweather', 12, 'normal');
smo238011.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238010.addModifier(smo238011);
smo238011.addClass('lyric lyric-0 lyric-hyphen');
smo238027v0ar.push(smo238010);
smo238027v0.addTickables(smo238027v0ar)
fmtsmo23802758.joinVoices([smo238027v0]);
const fmtsmo23915358 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo239153v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239153v0ar = [];
const smo239133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo239133.setAttribute('id', 'smo239133');
smo239153v0ar.push(smo239133);
const smo239134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo239134.setAttribute('id', 'smo239134');
smo239153v0ar.push(smo239134);
const smo239135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo239135.setAttribute('id', 'smo239135');
smo239153v0ar.push(smo239135);
const smo239136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo239136.setAttribute('id', 'smo239136');
smo239153v0ar.push(smo239136);
const smo239137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo239137.setAttribute('id', 'smo239137');
smo239153v0ar.push(smo239137);
smo239153v0.addTickables(smo239153v0ar)
fmtsmo23915358.joinVoices([smo239153v0]);
const fmtsmo24039058 = new VF.Formatter();
//
// voices and notes for stave 2 58
const smo240390v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240390v0ar = [];
const smo240370 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n","an/3/n"]}'))
smo240370.setAttribute('id', 'smo240370');
smo240390v0ar.push(smo240370);
const smo240371 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo240371.setAttribute('id', 'smo240371');
smo240390v0ar.push(smo240371);
const smo240372 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n","an/3/n"]}'))
smo240372.setAttribute('id', 'smo240372');
smo240390v0ar.push(smo240372);
const smo240373 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo240373.setAttribute('id', 'smo240373');
smo240390v0ar.push(smo240373);
const smo240374 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo240374.setAttribute('id', 'smo240374');
smo240390v0ar.push(smo240374);
smo240390v0.addTickables(smo240390v0ar)
fmtsmo24039058.joinVoices([smo240390v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246826 = smo239133.getStemDirection();
smo239133.setStemDirection(dirsmo246826);
smo239134.setStemDirection(dirsmo246826);
smo239135.setStemDirection(dirsmo246826);
const smo246826 = new VF.Beam([smo239133,smo239134,smo239135]);
const dirsmo246829 = smo240370.getStemDirection();
smo240370.setStemDirection(dirsmo246829);
smo240371.setStemDirection(dirsmo246829);
smo240372.setStemDirection(dirsmo246829);
const smo246829 = new VF.Beam([smo240370,smo240371,smo240372]);
 
// formatting measures in staff group smo240440
fmtsmo23802758.format([smo238027v0,smo239153v0,smo240390v0], 140);
const stavesmo238027 = new VF.Stave(638, 909.0266026666668, 154);
stavesmo238027.setAttribute('id', 'stavesmo238027');
stavesmo238027.setBegBarType(VF.Barline.type.NONE);
stavesmo238027.setContext(context);
stavesmo238027.draw();
smo238027v0.draw(context, stavesmo238027);
const stavesmo239153 = new VF.Stave(638, 1030.0266026666668, 154);
stavesmo239153.setAttribute('id', 'stavesmo239153');
stavesmo239153.setBegBarType(VF.Barline.type.NONE);
stavesmo239153.setContext(context);
stavesmo239153.draw();
smo239153v0.draw(context, stavesmo239153);
smo246826.setContext(context);
smo246826.draw();
const stavesmo240390 = new VF.Stave(638, 1106.0266026666668, 154);
stavesmo240390.setAttribute('id', 'stavesmo240390');
stavesmo240390.setBegBarType(VF.Barline.type.NONE);
stavesmo240390.setContext(context);
stavesmo240390.draw();
smo240390v0.draw(context, stavesmo240390);
smo246829.setContext(context);
smo246829.draw();
const fmtsmo23804559 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo238045v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238045v0ar = [];
const smo238028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo238028.setAttribute('id', 'smo238028');
smo238028.addModifier(new VF.Dot(), 0);
const smo238029 = new VF.Annotation('-');
smo238029.setAttribute('id', 'smo238029');
smo238029.setFont('Merriweather', 12, 'normal');
smo238029.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238028.addModifier(smo238029);
smo238029.addClass('lyric lyric-0 lyric-hyphen');
smo238045v0ar.push(smo238028);
smo238045v0.addTickables(smo238045v0ar)
fmtsmo23804559.joinVoices([smo238045v0]);
const fmtsmo23917059 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo239170v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239170v0ar = [];
const smo239154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo239154.setAttribute('id', 'smo239154');
smo239154.addModifier(new VF.Dot(), 0);
smo239170v0ar.push(smo239154);
smo239170v0.addTickables(smo239170v0ar)
fmtsmo23917059.joinVoices([smo239170v0]);
const fmtsmo24040759 = new VF.Formatter();
//
// voices and notes for stave 2 59
const smo240407v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240407v0ar = [];
const smo240391 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n","gn/3/n","bn/3/n"]}'))
smo240391.setAttribute('id', 'smo240391');
smo240391.addModifier(new VF.Dot(), 0);
smo240391.addModifier(new VF.Dot(), 1);
smo240391.addModifier(new VF.Dot(), 2);
smo240407v0ar.push(smo240391);
smo240407v0.addTickables(smo240407v0ar)
fmtsmo24040759.joinVoices([smo240407v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23804559.format([smo238045v0,smo239170v0,smo240407v0], 28);
const stavesmo238045 = new VF.Stave(792, 909.0266026666668, 42);
stavesmo238045.setAttribute('id', 'stavesmo238045');
stavesmo238045.setBegBarType(VF.Barline.type.NONE);
stavesmo238045.setContext(context);
stavesmo238045.draw();
smo238045v0.draw(context, stavesmo238045);
const stavesmo239170 = new VF.Stave(792, 1030.0266026666668, 42);
stavesmo239170.setAttribute('id', 'stavesmo239170');
stavesmo239170.setBegBarType(VF.Barline.type.NONE);
stavesmo239170.setContext(context);
stavesmo239170.draw();
smo239170v0.draw(context, stavesmo239170);
const stavesmo240407 = new VF.Stave(792, 1106.0266026666668, 42);
stavesmo240407.setAttribute('id', 'stavesmo240407');
stavesmo240407.setBegBarType(VF.Barline.type.NONE);
stavesmo240407.setContext(context);
stavesmo240407.draw();
smo240407v0.draw(context, stavesmo240407);
const fmtsmo23806260 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo238062v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238062v0ar = [];
const smo238046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238046.setAttribute('id', 'smo238046');
smo238046.addModifier(new VF.Dot(), 0);
smo238062v0ar.push(smo238046);
smo238062v0.addTickables(smo238062v0ar)
fmtsmo23806260.joinVoices([smo238062v0]);
const fmtsmo23918960 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo239189v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239189v0ar = [];
const smo239171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo239171.setAttribute('id', 'smo239171');
smo239189v0ar.push(smo239171);
const smo239172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
smo239172.setAttribute('id', 'smo239172');
smo239189v0ar.push(smo239172);
const smo239173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
smo239173.setAttribute('id', 'smo239173');
smo239173.addModifier(new VF.Dot(), 0);
smo239189v0ar.push(smo239173);
smo239189v0.addTickables(smo239189v0ar)
fmtsmo23918960.joinVoices([smo239189v0]);
const fmtsmo24042660 = new VF.Formatter();
//
// voices and notes for stave 2 60
const smo240426v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240426v0ar = [];
const smo240408 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","bn/2/n","dn/3/n","gn/3/n"]}'))
smo240408.setAttribute('id', 'smo240408');
smo240426v0ar.push(smo240408);
const smo240409 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo240409.setAttribute('id', 'smo240409');
smo240426v0ar.push(smo240409);
const smo240410 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo240410.setAttribute('id', 'smo240410');
smo240410.addModifier(new VF.Dot(), 0);
smo240426v0ar.push(smo240410);
smo240426v0.addTickables(smo240426v0ar)
fmtsmo24042660.joinVoices([smo240426v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23806260.format([smo238062v0,smo239189v0,smo240426v0], 89);
const stavesmo238062 = new VF.Stave(834, 909.0266026666668, 111);
stavesmo238062.setAttribute('id', 'stavesmo238062');
stavesmo238062.setBegBarType(VF.Barline.type.NONE);
stavesmo238062.setEndBarType(3);
stavesmo238062.setContext(context);
stavesmo238062.draw();
smo238062v0.draw(context, stavesmo238062);
const stavesmo239189 = new VF.Stave(834, 1030.0266026666668, 111);
stavesmo239189.setAttribute('id', 'stavesmo239189');
stavesmo239189.setBegBarType(VF.Barline.type.NONE);
stavesmo239189.setEndBarType(3);
stavesmo239189.setContext(context);
stavesmo239189.draw();
smo239189v0.draw(context, stavesmo239189);
const stavesmo240426 = new VF.Stave(834, 1106.0266026666668, 111);
stavesmo240426.setAttribute('id', 'stavesmo240426');
stavesmo240426.setBegBarType(VF.Barline.type.NONE);
stavesmo240426.setEndBarType(3);
stavesmo240426.setContext(context);
stavesmo240426.draw();
smo240426v0.draw(context, stavesmo240426);
// modifier from 0-54-0-0 to 0-55-0-0
const smo247609 = new VF.StaveTie({ first_note: smo237937, last_note: smo237956, 
          firstNote: smo237937, lastNote: smo237956, first_indices: [0], last_indices: [0]});
smo247609.setContext(context).draw();
// modifier from 0-52-0-3 to 0-53-0-0
const smo247610 = new VF.StaveTie({ first_note: smo237900, last_note: smo237919, 
          firstNote: smo237900, lastNote: smo237919, first_indices: [0], last_indices: [0]});
smo247610.setContext(context).draw();
// modifier from 0-56-0-0 to 0-57-0-0
const smo247611 = new VF.StaveTie({ first_note: smo237973, last_note: smo237992, 
          firstNote: smo237973, lastNote: smo237992, first_indices: [0], last_indices: [0]});
smo247611.setContext(context).draw();
// modifier from 0-58-0-0 to 0-59-0-0
const smo247612 = new VF.StaveTie({ first_note: smo238010, last_note: smo238028, 
          firstNote: smo238010, lastNote: smo238028, first_indices: [0], last_indices: [0]});
smo247612.setContext(context).draw();
// modifier from 0-48-0-0 to 0-49-0-0
const smo247613 = new VF.StaveTie({ first_note: smo237798, last_note: smo237817, 
          firstNote: smo237798, lastNote: smo237817, first_indices: [0], last_indices: [0]});
smo247613.setContext(context).draw();
// modifier from 0-50-0-1 to 0-51-0-0
const smo247614 = new VF.StaveTie({ first_note: smo237850, last_note: smo237869, 
          firstNote: smo237850, lastNote: smo237869, first_indices: [0], last_indices: [0]});
smo247614.setContext(context).draw();
// modifier from 0-46-0-0 to 0-47-0-0
const smo247615 = new VF.StaveTie({ first_note: smo237749, last_note: smo237768, 
          firstNote: smo237749, lastNote: smo237768, first_indices: [0], last_indices: [0]});
smo247615.setContext(context).draw();
// modifier from 1-44-0-0 to 1-45-0-0
const smo247616 = new VF.StaveTie({ first_note: smo238872, last_note: smo238889, 
          firstNote: smo238872, lastNote: smo238889, first_indices: [0,1], last_indices: [0,1]});
smo247616.setContext(context).draw();
// modifier from 1-52-0-0 to 1-53-0-0
const smo247617 = new VF.StaveTie({ first_note: smo239020, last_note: smo239037, 
          firstNote: smo239020, lastNote: smo239037, first_indices: [0,1], last_indices: [0,1]});
smo247617.setContext(context).draw();
// modifier from 2-52-0-0 to 2-53-0-0
const smo247618 = new VF.StaveTie({ first_note: smo240254, last_note: smo240271, 
          firstNote: smo240254, lastNote: smo240271, first_indices: [0], last_indices: [0]});
smo247618.setContext(context).draw();
const smo237939smo237955 = new VF.Volta(2, '1', 66, 20);
smo237939smo237955.setContext(context).draw(stavesmo237955, -1 * 0);
const smo237939smo237972 = new VF.Volta(4, '1', 251, 20);
smo237939smo237972.setContext(context).draw(stavesmo237972, -1 * 0);
const smo237975smo237991 = new VF.Volta(2, '2', 375, 20);
smo237975smo237991.setContext(context).draw(stavesmo237991, -1 * 0);
const smo237975smo238009 = new VF.Volta(4, '2', 514, 20);
smo237975smo238009.setContext(context).draw(stavesmo238009, -1 * 0);
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo237680').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237681').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo237684').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo237702').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo237703').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo237705').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237706').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo237708').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237709').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo237711').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo237712').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo237731').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo237732').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo237750').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo237751').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo237771').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo237772').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo237774').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237775').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo237777').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237778').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo237780').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237781').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo237799').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo237800').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo237818').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo237821').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo237823').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237824').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo237826').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237827').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo237829').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo237830').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo237848').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237849').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo237851').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo237852').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo237870').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo237873').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo237874').setAttributeNS('', 'transform', 'translate(0 31)');
context.svg.getElementById('vf-smo237892').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo237893').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo237895').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo237896').setAttributeNS('', 'transform', 'translate(0 31)');
context.svg.getElementById('vf-smo237898').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo237899').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo237901').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo237902').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo237920').setAttributeNS('', 'transform', 'translate(0 16)');
}
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
const fmtsmo22585543 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo225855v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225855v0ar = [];
const smo225834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225834.setAttribute('id', 'smo225834');
smo225834.addModifier(new VF.Dot(), 0);
const smo225835 = new VF.Annotation('Wäl');
smo225835.setAttribute('id', 'smo225835');
smo225835.setFont('Merriweather', 12, 'normal');
smo225835.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225834.addModifier(smo225835);
smo225835.addClass('lyric lyric-0 lyric-hyphen');
const smo225836 = new VF.Annotation('klin');
smo225836.setAttribute('id', 'smo225836');
smo225836.setFont('Merriweather', 12, 'normal');
smo225836.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225834.addModifier(smo225836);
smo225836.addClass('lyric lyric-1 lyric-hyphen');
smo225855v0ar.push(smo225834);
const smo225837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo225837.setAttribute('id', 'smo225837');
smo225837.addModifier(new VF.Dot(), 0);
const smo225838 = new VF.Annotation('der');
smo225838.setAttribute('id', 'smo225838');
smo225838.setFont('Merriweather', 12, 'normal');
smo225838.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225837.addModifier(smo225838);
smo225838.addClass('lyric lyric-0');
const smo225839 = new VF.Annotation('gen:');
smo225839.setAttribute('id', 'smo225839');
smo225839.setFont('Merriweather', 12, 'normal');
smo225839.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225837.addModifier(smo225839);
smo225839.addClass('lyric lyric-1');
smo225855v0ar.push(smo225837);
smo225855v0.addTickables(smo225855v0ar)
fmtsmo22585543.joinVoices([smo225855v0]);
const fmtsmo22702643 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo227026v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227026v0ar = [];
const smo227010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","f#/5/n","dn/6/n"]}'))
smo227010.setAttribute('id', 'smo227010');
smo227010.addModifier(new VF.Dot(), 0);
smo227010.addModifier(new VF.Dot(), 1);
smo227010.addModifier(new VF.Dot(), 2);
smo227026v0ar.push(smo227010);
smo227026v0.addTickables(smo227026v0ar)
fmtsmo22702643.joinVoices([smo227026v0]);
const fmtsmo22825143 = new VF.Formatter();
//
// voices and notes for stave 2 43
const smo228251v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228251v0ar = [];
const smo228230 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo228230.setAttribute('id', 'smo228230');
smo228251v0ar.push(smo228230);
const smo228231 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo228231.setAttribute('id', 'smo228231');
smo228251v0ar.push(smo228231);
const smo228232 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo228232.setAttribute('id', 'smo228232');
smo228251v0ar.push(smo228232);
const smo228233 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo228233.setAttribute('id', 'smo228233');
smo228251v0ar.push(smo228233);
smo228251v0.addTickables(smo228251v0ar)
fmtsmo22825143.joinVoices([smo228251v0]);
const smo228251v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228251v1ar = [];
const smo228234 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo228234.setAttribute('id', 'smo228234');
smo228234.setStyle({ fillStyle: "#115511" });
smo228234.addModifier(new VF.Dot(), 0);
smo228251v1ar.push(smo228234);
const smo228235 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
smo228235.setAttribute('id', 'smo228235');
smo228235.setStyle({ fillStyle: "#115511" });
smo228235.addModifier(new VF.Dot(), 0);
smo228251v1ar.push(smo228235);
smo228251v1.addTickables(smo228251v1ar)
fmtsmo22825143.joinVoices([smo228251v1]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22585543.format([smo225855v0,smo227026v0,smo228251v0,smo228251v1], 173);
const stavesmo225855 = new VF.Stave(66, 98.0266026666668, 247);
stavesmo225855.setAttribute('id', 'stavesmo225855');
stavesmo225855.setBegBarType(1);
stavesmo225855.addClef('treble');
const keysmo225855 = new VF.KeySignature('G');
keysmo225855.addToStave(stavesmo225855);
stavesmo225855.setContext(context);
stavesmo225855.draw();
smo225855v0.draw(context, stavesmo225855);
const stavesmo227026 = new VF.Stave(66, 280.0266026666668, 247);
stavesmo227026.setAttribute('id', 'stavesmo227026');
stavesmo227026.setBegBarType(1);
stavesmo227026.addClef('treble');
const keysmo227026 = new VF.KeySignature('G');
keysmo227026.addToStave(stavesmo227026);
stavesmo227026.setContext(context);
stavesmo227026.draw();
smo227026v0.draw(context, stavesmo227026);
const stavesmo228251 = new VF.Stave(66, 386.0266026666668, 247);
stavesmo228251.setAttribute('id', 'stavesmo228251');
stavesmo228251.setBegBarType(1);
stavesmo228251.addClef('bass');
const keysmo228251 = new VF.KeySignature('G');
keysmo228251.addToStave(stavesmo228251);
stavesmo228251.setContext(context);
stavesmo228251.draw();
smo228251v0.draw(context, stavesmo228251);
smo228251v1.draw(context, stavesmo228251);
const leftsmo228595stavesmo2258552 = new VF.StaveConnector(stavesmo225855, stavesmo228251).setType(1);
leftsmo228595stavesmo2258552.setContext(context).draw();
const fmtsmo22588344 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo225883v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225883v0ar = [];
const smo225856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225856.setAttribute('id', 'smo225856');
const smo225857 = new VF.Annotation('ü');
smo225857.setAttribute('id', 'smo225857');
smo225857.setFont('Merriweather', 12, 'normal');
smo225857.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225856.addModifier(smo225857);
smo225857.addClass('lyric lyric-0 lyric-hyphen');
const smo225858 = new VF.Annotation('Ich');
smo225858.setAttribute('id', 'smo225858');
smo225858.setFont('Merriweather', 12, 'normal');
smo225858.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225856.addModifier(smo225858);
smo225858.addClass('lyric lyric-1');
smo225883v0ar.push(smo225856);
const smo225859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225859.setAttribute('id', 'smo225859');
const smo225860 = new VF.Annotation('ber');
smo225860.setAttribute('id', 'smo225860');
smo225860.setFont('Merriweather', 12, 'normal');
smo225860.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225859.addModifier(smo225860);
smo225860.addClass('lyric lyric-0');
const smo225861 = new VF.Annotation('bin');
smo225861.setAttribute('id', 'smo225861');
smo225861.setFont('Merriweather', 12, 'normal');
smo225861.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225859.addModifier(smo225861);
smo225861.addClass('lyric lyric-1');
smo225883v0ar.push(smo225859);
const smo225862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo225862.setAttribute('id', 'smo225862');
const smo225863 = new VF.Annotation('das');
smo225863.setAttribute('id', 'smo225863');
smo225863.setFont('Merriweather', 12, 'normal');
smo225863.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225862.addModifier(smo225863);
smo225863.addClass('lyric lyric-0');
const smo225864 = new VF.Annotation('ganz');
smo225864.setAttribute('id', 'smo225864');
smo225864.setFont('Merriweather', 12, 'normal');
smo225864.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225862.addModifier(smo225864);
smo225864.addClass('lyric lyric-1');
smo225883v0ar.push(smo225862);
const smo225865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225865.setAttribute('id', 'smo225865');
smo225865.addModifier(new VF.Dot(), 0);
const smo225866 = new VF.Annotation('Land;');
smo225866.setAttribute('id', 'smo225866');
smo225866.setFont('Merriweather', 12, 'normal');
smo225866.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225865.addModifier(smo225866);
smo225866.addClass('lyric lyric-0');
const smo225867 = new VF.Annotation('nah!');
smo225867.setAttribute('id', 'smo225867');
smo225867.setFont('Merriweather', 12, 'normal');
smo225867.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225865.addModifier(smo225867);
smo225867.addClass('lyric lyric-1');
smo225883v0ar.push(smo225865);
smo225883v0.addTickables(smo225883v0ar)
fmtsmo22588344.joinVoices([smo225883v0]);
const fmtsmo22704344 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo227043v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227043v0ar = [];
const smo227027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo227027.setAttribute('id', 'smo227027');
smo227027.addModifier(new VF.Dot(), 0);
smo227027.addModifier(new VF.Dot(), 1);
smo227043v0ar.push(smo227027);
smo227043v0.addTickables(smo227043v0ar)
fmtsmo22704344.joinVoices([smo227043v0]);
const fmtsmo22827144 = new VF.Formatter();
//
// voices and notes for stave 2 44
const smo228271v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228271v0ar = [];
const smo228252 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo228252.setAttribute('id', 'smo228252');
smo228271v0ar.push(smo228252);
const smo228253 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo228253.setAttribute('id', 'smo228253');
smo228271v0ar.push(smo228253);
const smo228254 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo228254.setAttribute('id', 'smo228254');
smo228271v0ar.push(smo228254);
const smo228255 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo228255.setAttribute('id', 'smo228255');
smo228271v0ar.push(smo228255);
smo228271v0.addTickables(smo228271v0ar)
fmtsmo22827144.joinVoices([smo228271v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234881 = smo225856.getStemDirection();
smo225856.setStemDirection(dirsmo234881);
smo225859.setStemDirection(dirsmo234881);
smo225862.setStemDirection(dirsmo234881);
const smo234881 = new VF.Beam([smo225856,smo225859,smo225862]);
 
// formatting measures in staff group smo228595
fmtsmo22588344.format([smo225883v0,smo227043v0,smo228271v0], 278);
const stavesmo225883 = new VF.Stave(313, 98.0266026666668, 292);
stavesmo225883.setAttribute('id', 'stavesmo225883');
stavesmo225883.setBegBarType(VF.Barline.type.NONE);
stavesmo225883.setContext(context);
stavesmo225883.draw();
smo225883v0.draw(context, stavesmo225883);
smo234881.setContext(context);
smo234881.draw();
const stavesmo227043 = new VF.Stave(313, 280.0266026666668, 292);
stavesmo227043.setAttribute('id', 'stavesmo227043');
stavesmo227043.setBegBarType(VF.Barline.type.NONE);
stavesmo227043.setContext(context);
stavesmo227043.draw();
smo227043v0.draw(context, stavesmo227043);
const stavesmo228271 = new VF.Stave(313, 386.0266026666668, 292);
stavesmo228271.setAttribute('id', 'stavesmo228271');
stavesmo228271.setBegBarType(VF.Barline.type.NONE);
stavesmo228271.setContext(context);
stavesmo228271.draw();
smo228271v0.draw(context, stavesmo228271);
const fmtsmo22590345 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo225903v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225903v0ar = [];
const smo225884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo225884.setAttribute('id', 'smo225884');
smo225884.addModifier(new VF.Dot(), 0);
smo225903v0ar.push(smo225884);
const smo225885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo225885.setAttribute('id', 'smo225885');
smo225885.addModifier(new VF.Dot(), 0);
const smo225886 = new VF.Annotation('von');
smo225886.setAttribute('id', 'smo225886');
smo225886.setFont('Merriweather', 12, 'normal');
smo225886.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225885.addModifier(smo225886);
smo225886.addClass('lyric lyric-0');
const smo225887 = new VF.Annotation('Tra');
smo225887.setAttribute('id', 'smo225887');
smo225887.setFont('Merriweather', 12, 'normal');
smo225887.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225885.addModifier(smo225887);
smo225887.addClass('lyric lyric-1 lyric-hyphen');
smo225903v0ar.push(smo225885);
smo225903v0.addTickables(smo225903v0ar)
fmtsmo22590345.joinVoices([smo225903v0]);
const fmtsmo22706045 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo227060v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227060v0ar = [];
const smo227044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo227044.setAttribute('id', 'smo227044');
smo227044.addModifier(new VF.Dot(), 0);
smo227044.addModifier(new VF.Dot(), 1);
smo227060v0ar.push(smo227044);
smo227060v0.addTickables(smo227060v0ar)
fmtsmo22706045.joinVoices([smo227060v0]);
const fmtsmo22829145 = new VF.Formatter();
//
// voices and notes for stave 2 45
const smo228291v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228291v0ar = [];
const smo228272 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo228272.setAttribute('id', 'smo228272');
smo228291v0ar.push(smo228272);
const smo228273 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo228273.setAttribute('id', 'smo228273');
smo228291v0ar.push(smo228273);
const smo228274 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo228274.setAttribute('id', 'smo228274');
smo228291v0ar.push(smo228274);
const smo228275 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo228275.setAttribute('id', 'smo228275');
smo228291v0ar.push(smo228275);
smo228291v0.addTickables(smo228291v0ar)
fmtsmo22829145.joinVoices([smo228291v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22590345.format([smo225903v0,smo227060v0,smo228291v0], 150);
const stavesmo225903 = new VF.Stave(605, 98.0266026666668, 164);
stavesmo225903.setAttribute('id', 'stavesmo225903');
stavesmo225903.setBegBarType(VF.Barline.type.NONE);
stavesmo225903.setContext(context);
stavesmo225903.draw();
smo225903v0.draw(context, stavesmo225903);
const stavesmo227060 = new VF.Stave(605, 280.0266026666668, 164);
stavesmo227060.setAttribute('id', 'stavesmo227060');
stavesmo227060.setBegBarType(VF.Barline.type.NONE);
stavesmo227060.setContext(context);
stavesmo227060.draw();
smo227060v0.draw(context, stavesmo227060);
const stavesmo228291 = new VF.Stave(605, 386.0266026666668, 164);
stavesmo228291.setAttribute('id', 'stavesmo228291');
stavesmo228291.setBegBarType(VF.Barline.type.NONE);
stavesmo228291.setContext(context);
stavesmo228291.draw();
smo228291v0.draw(context, stavesmo228291);
const fmtsmo22592246 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo225922v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225922v0ar = [];
const smo225904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225904.setAttribute('id', 'smo225904');
smo225904.addModifier(new VF.Dot(), 0);
const smo225905 = new VF.Annotation('fern');
smo225905.setAttribute('id', 'smo225905');
smo225905.setFont('Merriweather', 12, 'normal');
smo225905.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225904.addModifier(smo225905);
smo225905.addClass('lyric lyric-0');
const smo225906 = new VF.Annotation('ra!');
smo225906.setAttribute('id', 'smo225906');
smo225906.setFont('Merriweather', 12, 'normal');
smo225906.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225904.addModifier(smo225906);
smo225906.addClass('lyric lyric-1');
smo225922v0ar.push(smo225904);
smo225922v0.addTickables(smo225922v0ar)
fmtsmo22592246.joinVoices([smo225922v0]);
const fmtsmo22708046 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo227080v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227080v0ar = [];
const smo227061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo227061.setAttribute('id', 'smo227061');
smo227061.addModifier(new VF.Dot(), 0);
smo227080v0ar.push(smo227061);
smo227080v0.addTickables(smo227080v0ar)
fmtsmo22708046.joinVoices([smo227080v0]);
const smo227080v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227080v1ar = [];
const smo227062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
smo227062.setAttribute('id', 'smo227062');
smo227062.setStyle({ fillStyle: "#115511" });
smo227062.addModifier(new VF.Dot(), 0);
smo227080v1ar.push(smo227062);
const smo227063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/5/n"]}'))
smo227063.setAttribute('id', 'smo227063');
smo227063.setStyle({ fillStyle: "#115511" });
smo227080v1ar.push(smo227063);
const smo227064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo227064.setAttribute('id', 'smo227064');
smo227064.setStyle({ fillStyle: "#115511" });
smo227080v1ar.push(smo227064);
smo227080v1.addTickables(smo227080v1ar)
fmtsmo22708046.joinVoices([smo227080v1]);
const fmtsmo22831146 = new VF.Formatter();
//
// voices and notes for stave 2 46
const smo228311v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228311v0ar = [];
const smo228292 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo228292.setAttribute('id', 'smo228292');
smo228311v0ar.push(smo228292);
const smo228293 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo228293.setAttribute('id', 'smo228293');
smo228311v0ar.push(smo228293);
const smo228294 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo228294.setAttribute('id', 'smo228294');
smo228311v0ar.push(smo228294);
const smo228295 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo228295.setAttribute('id', 'smo228295');
smo228311v0ar.push(smo228295);
smo228311v0.addTickables(smo228311v0ar)
fmtsmo22831146.joinVoices([smo228311v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22592246.format([smo225922v0,smo227080v0,smo227080v1,smo228311v0], 138);
const stavesmo225922 = new VF.Stave(769, 98.0266026666668, 152);
stavesmo225922.setAttribute('id', 'stavesmo225922');
stavesmo225922.setBegBarType(VF.Barline.type.NONE);
stavesmo225922.setContext(context);
stavesmo225922.draw();
smo225922v0.draw(context, stavesmo225922);
const stavesmo227080 = new VF.Stave(769, 280.0266026666668, 152);
stavesmo227080.setAttribute('id', 'stavesmo227080');
stavesmo227080.setBegBarType(VF.Barline.type.NONE);
stavesmo227080.setContext(context);
stavesmo227080.draw();
smo227080v0.draw(context, stavesmo227080);
smo227080v1.draw(context, stavesmo227080);
const stavesmo228311 = new VF.Stave(769, 386.0266026666668, 152);
stavesmo228311.setAttribute('id', 'stavesmo228311');
stavesmo228311.setBegBarType(VF.Barline.type.NONE);
stavesmo228311.setContext(context);
stavesmo228311.draw();
smo228311v0.draw(context, stavesmo228311);
const fmtsmo22595247 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo225952v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225952v0ar = [];
const smo225923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225923.setAttribute('id', 'smo225923');
smo225952v0ar.push(smo225923);
const smo225925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225925.setAttribute('id', 'smo225925');
const smo225926 = new VF.Annotation('er');
smo225926.setAttribute('id', 'smo225926');
smo225926.setFont('Merriweather', 12, 'normal');
smo225926.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225925.addModifier(smo225926);
smo225926.addClass('lyric lyric-0');
const smo225927 = new VF.Annotation('Ich');
smo225927.setAttribute('id', 'smo225927');
smo225927.setFont('Merriweather', 12, 'normal');
smo225927.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225925.addModifier(smo225927);
smo225927.addClass('lyric lyric-1');
smo225952v0ar.push(smo225925);
const smo225928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225928.setAttribute('id', 'smo225928');
const smo225929 = new VF.Annotation('kem');
smo225929.setAttribute('id', 'smo225929');
smo225929.setFont('Merriweather', 12, 'normal');
smo225929.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225928.addModifier(smo225929);
smo225929.addClass('lyric lyric-0');
const smo225930 = new VF.Annotation('hö');
smo225930.setAttribute('id', 'smo225930');
smo225930.setFont('Merriweather', 12, 'normal');
smo225930.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225928.addModifier(smo225930);
smo225930.addClass('lyric lyric-1 lyric-hyphen');
smo225952v0ar.push(smo225928);
const smo225931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225931.setAttribute('id', 'smo225931');
const smo225932 = new VF.Annotation('ich');
smo225932.setAttribute('id', 'smo225932');
smo225932.setFont('Merriweather', 12, 'normal');
smo225932.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225931.addModifier(smo225932);
smo225932.addClass('lyric lyric-0');
const smo225933 = new VF.Annotation('re');
smo225933.setAttribute('id', 'smo225933');
smo225933.setFont('Merriweather', 12, 'normal');
smo225933.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225931.addModifier(smo225933);
smo225933.addClass('lyric lyric-1');
smo225952v0ar.push(smo225931);
const smo225934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225934.setAttribute('id', 'smo225934');
const smo225935 = new VF.Annotation('ihn');
smo225935.setAttribute('id', 'smo225935');
smo225935.setFont('Merriweather', 12, 'normal');
smo225935.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225934.addModifier(smo225935);
smo225935.addClass('lyric lyric-0');
const smo225936 = new VF.Annotation('sein');
smo225936.setAttribute('id', 'smo225936');
smo225936.setFont('Merriweather', 12, 'normal');
smo225936.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225934.addModifier(smo225936);
smo225936.addClass('lyric lyric-1');
smo225952v0ar.push(smo225934);
smo225952v0.addTickables(smo225952v0ar)
fmtsmo22595247.joinVoices([smo225952v0]);
const fmtsmo22709947 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo227099v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227099v0ar = [];
const smo227081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo227081.setAttribute('id', 'smo227081');
smo227081.addModifier(new VF.Dot(), 0);
smo227099v0ar.push(smo227081);
smo227099v0.addTickables(smo227099v0ar)
fmtsmo22709947.joinVoices([smo227099v0]);
const smo227099v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227099v1ar = [];
const smo227082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/6/n"]}'))
smo227082.setAttribute('id', 'smo227082');
smo227082.setStyle({ fillStyle: "#115511" });
smo227082.addModifier(new VF.Dot(), 0);
smo227099v1ar.push(smo227082);
const smo227083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
smo227083.setAttribute('id', 'smo227083');
smo227083.setStyle({ fillStyle: "#115511" });
smo227083.addModifier(new VF.Dot(), 0);
smo227099v1ar.push(smo227083);
smo227099v1.addTickables(smo227099v1ar)
fmtsmo22709947.joinVoices([smo227099v1]);
const fmtsmo22833147 = new VF.Formatter();
//
// voices and notes for stave 2 47
const smo228331v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228331v0ar = [];
const smo228312 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo228312.setAttribute('id', 'smo228312');
smo228331v0ar.push(smo228312);
const smo228313 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo228313.setAttribute('id', 'smo228313');
smo228331v0ar.push(smo228313);
const smo228314 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo228314.setAttribute('id', 'smo228314');
smo228331v0ar.push(smo228314);
const smo228315 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo228315.setAttribute('id', 'smo228315');
smo228331v0ar.push(smo228315);
smo228331v0.addTickables(smo228331v0ar)
fmtsmo22833147.joinVoices([smo228331v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234900 = smo225928.getStemDirection();
smo225928.setStemDirection(dirsmo234900);
smo225931.setStemDirection(dirsmo234900);
smo225934.setStemDirection(dirsmo234900);
const smo234900 = new VF.Beam([smo225928,smo225931,smo225934]);
 
// formatting measures in staff group smo228595
fmtsmo22595247.format([smo225952v0,smo227099v0,smo227099v1,smo228331v0], 275);
const stavesmo225952 = new VF.Stave(921, 98.0266026666668, 289);
stavesmo225952.setAttribute('id', 'stavesmo225952');
stavesmo225952.setBegBarType(VF.Barline.type.NONE);
stavesmo225952.setContext(context);
stavesmo225952.draw();
smo225952v0.draw(context, stavesmo225952);
smo234900.setContext(context);
smo234900.draw();
const stavesmo227099 = new VF.Stave(921, 280.0266026666668, 289);
stavesmo227099.setAttribute('id', 'stavesmo227099');
stavesmo227099.setBegBarType(VF.Barline.type.NONE);
stavesmo227099.setContext(context);
stavesmo227099.draw();
smo227099v0.draw(context, stavesmo227099);
smo227099v1.draw(context, stavesmo227099);
const stavesmo228331 = new VF.Stave(921, 386.0266026666668, 289);
stavesmo228331.setAttribute('id', 'stavesmo228331');
stavesmo228331.setBegBarType(VF.Barline.type.NONE);
stavesmo228331.setContext(context);
stavesmo228331.draw();
smo228331v0.draw(context, stavesmo228331);
const rightsmo228595stavesmo2259522 = new VF.StaveConnector(stavesmo225952, stavesmo228331).setType(0);
rightsmo228595stavesmo2259522.setContext(context).draw();
const fmtsmo22597148 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo225971v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225971v0ar = [];
const smo225953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225953.setAttribute('id', 'smo225953');
smo225953.addModifier(new VF.Dot(), 0);
const smo225954 = new VF.Annotation('schon');
smo225954.setAttribute('id', 'smo225954');
smo225954.setFont('Merriweather', 12, 'normal');
smo225954.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225953.addModifier(smo225954);
smo225954.addClass('lyric lyric-0');
const smo225955 = new VF.Annotation('Lied!');
smo225955.setAttribute('id', 'smo225955');
smo225955.setFont('Merriweather', 12, 'normal');
smo225955.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225953.addModifier(smo225955);
smo225955.addClass('lyric lyric-1');
smo225971v0ar.push(smo225953);
smo225971v0.addTickables(smo225971v0ar)
fmtsmo22597148.joinVoices([smo225971v0]);
const fmtsmo22712148 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo227121v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227121v0ar = [];
const smo227100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo227100.setAttribute('id', 'smo227100');
smo227100.addModifier(new VF.Dot(), 0);
smo227121v0ar.push(smo227100);
const smo227101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo227101.setAttribute('id', 'smo227101');
smo227121v0ar.push(smo227101);
const smo227102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo227102.setAttribute('id', 'smo227102');
smo227121v0ar.push(smo227102);
smo227121v0.addTickables(smo227121v0ar)
fmtsmo22712148.joinVoices([smo227121v0]);
const smo227121v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227121v1ar = [];
const smo227103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
smo227103.setAttribute('id', 'smo227103');
smo227103.setStyle({ fillStyle: "#115511" });
smo227103.addModifier(new VF.Dot(), 0);
smo227121v1ar.push(smo227103);
const smo227104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo227104.setAttribute('id', 'smo227104');
smo227104.setStyle({ fillStyle: "#115511" });
smo227121v1ar.push(smo227104);
const smo227105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo227105.setAttribute('id', 'smo227105');
smo227105.setStyle({ fillStyle: "#115511" });
smo227121v1ar.push(smo227105);
smo227121v1.addTickables(smo227121v1ar)
fmtsmo22712148.joinVoices([smo227121v1]);
const fmtsmo22835148 = new VF.Formatter();
//
// voices and notes for stave 2 48
const smo228351v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228351v0ar = [];
const smo228332 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo228332.setAttribute('id', 'smo228332');
smo228351v0ar.push(smo228332);
const smo228333 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo228333.setAttribute('id', 'smo228333');
smo228351v0ar.push(smo228333);
const smo228334 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo228334.setAttribute('id', 'smo228334');
smo228351v0ar.push(smo228334);
const smo228335 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo228335.setAttribute('id', 'smo228335');
smo228351v0ar.push(smo228335);
smo228351v0.addTickables(smo228351v0ar)
fmtsmo22835148.joinVoices([smo228351v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22597148.format([smo225971v0,smo227121v0,smo227121v1,smo228351v0], 152);
const stavesmo225971 = new VF.Stave(66, 516.0266026666668, 226);
stavesmo225971.setAttribute('id', 'stavesmo225971');
stavesmo225971.setBegBarType(1);
stavesmo225971.addClef('treble');
const keysmo225971 = new VF.KeySignature('G');
keysmo225971.addToStave(stavesmo225971);
stavesmo225971.setContext(context);
stavesmo225971.draw();
smo225971v0.draw(context, stavesmo225971);
const stavesmo227121 = new VF.Stave(66, 688.0266026666668, 226);
stavesmo227121.setAttribute('id', 'stavesmo227121');
stavesmo227121.setBegBarType(1);
stavesmo227121.addClef('treble');
const keysmo227121 = new VF.KeySignature('G');
keysmo227121.addToStave(stavesmo227121);
stavesmo227121.setContext(context);
stavesmo227121.draw();
smo227121v0.draw(context, stavesmo227121);
smo227121v1.draw(context, stavesmo227121);
const stavesmo228351 = new VF.Stave(66, 780.0266026666668, 226);
stavesmo228351.setAttribute('id', 'stavesmo228351');
stavesmo228351.setBegBarType(1);
stavesmo228351.addClef('bass');
const keysmo228351 = new VF.KeySignature('G');
keysmo228351.addToStave(stavesmo228351);
stavesmo228351.setContext(context);
stavesmo228351.draw();
smo228351v0.draw(context, stavesmo228351);
const leftsmo228595stavesmo2259712 = new VF.StaveConnector(stavesmo225971, stavesmo228351).setType(1);
leftsmo228595stavesmo2259712.setContext(context).draw();
const fmtsmo22600149 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo226001v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226001v0ar = [];
const smo225972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225972.setAttribute('id', 'smo225972');
const smo225973 = new VF.Annotation('-');
smo225973.setAttribute('id', 'smo225973');
smo225973.setFont('Merriweather', 12, 'normal');
smo225973.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225972.addModifier(smo225973);
smo225973.addClass('lyric lyric-0 lyric-hyphen');
smo226001v0ar.push(smo225972);
const smo225974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225974.setAttribute('id', 'smo225974');
const smo225975 = new VF.Annotation('denn');
smo225975.setAttribute('id', 'smo225975');
smo225975.setFont('Merriweather', 12, 'normal');
smo225975.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225974.addModifier(smo225975);
smo225975.addClass('lyric lyric-0');
const smo225976 = new VF.Annotation('Es');
smo225976.setAttribute('id', 'smo225976');
smo225976.setFont('Merriweather', 12, 'normal');
smo225976.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225974.addModifier(smo225976);
smo225976.addClass('lyric lyric-1');
smo226001v0ar.push(smo225974);
const smo225977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225977.setAttribute('id', 'smo225977');
const smo225978 = new VF.Annotation('all');
smo225978.setAttribute('id', 'smo225978');
smo225978.setFont('Merriweather', 12, 'normal');
smo225978.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225977.addModifier(smo225978);
smo225978.addClass('lyric lyric-0');
const smo225979 = new VF.Annotation('soli');
smo225979.setAttribute('id', 'smo225979');
smo225979.setFont('Merriweather', 12, 'normal');
smo225979.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225977.addModifier(smo225979);
smo225979.addClass('lyric lyric-1');
smo226001v0ar.push(smo225977);
const smo225980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225980.setAttribute('id', 'smo225980');
const smo225981 = new VF.Annotation('sei');
smo225981.setAttribute('id', 'smo225981');
smo225981.setFont('Merriweather', 12, 'normal');
smo225981.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225980.addModifier(smo225981);
smo225981.addClass('lyric lyric-0 lyric-hyphen');
const smo225982 = new VF.Annotation('zu');
smo225982.setAttribute('id', 'smo225982');
smo225982.setFont('Merriweather', 12, 'normal');
smo225982.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225980.addModifier(smo225982);
smo225982.addClass('lyric lyric-1 lyric-hyphen');
smo226001v0ar.push(smo225980);
const smo225983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225983.setAttribute('id', 'smo225983');
const smo225984 = new VF.Annotation('ne');
smo225984.setAttribute('id', 'smo225984');
smo225984.setFont('Merriweather', 12, 'normal');
smo225984.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225983.addModifier(smo225984);
smo225984.addClass('lyric lyric-0');
const smo225985 = new VF.Annotation('mir');
smo225985.setAttribute('id', 'smo225985');
smo225985.setFont('Merriweather', 12, 'normal');
smo225985.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225983.addModifier(smo225985);
smo225985.addClass('lyric lyric-1');
smo226001v0ar.push(smo225983);
smo226001v0.addTickables(smo226001v0ar)
fmtsmo22600149.joinVoices([smo226001v0]);
const fmtsmo22713949 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo227139v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227139v0ar = [];
const smo227122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo227122.setAttribute('id', 'smo227122');
smo227122.addModifier(new VF.Dot(), 0);
smo227139v0ar.push(smo227122);
smo227139v0.addTickables(smo227139v0ar)
fmtsmo22713949.joinVoices([smo227139v0]);
const smo227139v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227139v1ar = [];
const smo227123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/6/n"]}'))
smo227123.setAttribute('id', 'smo227123');
smo227123.setStyle({ fillStyle: "#115511" });
smo227123.addModifier(new VF.Dot(), 0);
smo227139v1ar.push(smo227123);
smo227139v1.addTickables(smo227139v1ar)
fmtsmo22713949.joinVoices([smo227139v1]);
const fmtsmo22837149 = new VF.Formatter();
//
// voices and notes for stave 2 49
const smo228371v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228371v0ar = [];
const smo228352 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo228352.setAttribute('id', 'smo228352');
smo228371v0ar.push(smo228352);
const smo228353 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo228353.setAttribute('id', 'smo228353');
smo228371v0ar.push(smo228353);
const smo228354 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo228354.setAttribute('id', 'smo228354');
smo228371v0ar.push(smo228354);
const smo228355 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo228355.setAttribute('id', 'smo228355');
smo228371v0ar.push(smo228355);
smo228371v0.addTickables(smo228371v0ar)
fmtsmo22837149.joinVoices([smo228371v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234920 = smo225977.getStemDirection();
smo225977.setStemDirection(dirsmo234920);
smo225980.setStemDirection(dirsmo234920);
smo225983.setStemDirection(dirsmo234920);
const smo234920 = new VF.Beam([smo225977,smo225980,smo225983]);
 
// formatting measures in staff group smo228595
fmtsmo22600149.format([smo226001v0,smo227139v0,smo227139v1,smo228371v0], 271);
const stavesmo226001 = new VF.Stave(292, 516.0266026666668, 285);
stavesmo226001.setAttribute('id', 'stavesmo226001');
stavesmo226001.setBegBarType(VF.Barline.type.NONE);
stavesmo226001.setContext(context);
stavesmo226001.draw();
smo226001v0.draw(context, stavesmo226001);
smo234920.setContext(context);
smo234920.draw();
const stavesmo227139 = new VF.Stave(292, 688.0266026666668, 285);
stavesmo227139.setAttribute('id', 'stavesmo227139');
stavesmo227139.setBegBarType(VF.Barline.type.NONE);
stavesmo227139.setContext(context);
stavesmo227139.draw();
smo227139v0.draw(context, stavesmo227139);
smo227139v1.draw(context, stavesmo227139);
const stavesmo228371 = new VF.Stave(292, 780.0266026666668, 285);
stavesmo228371.setAttribute('id', 'stavesmo228371');
stavesmo228371.setBegBarType(VF.Barline.type.NONE);
stavesmo228371.setContext(context);
stavesmo228371.draw();
smo228371v0.draw(context, stavesmo228371);
const fmtsmo22602350 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo226023v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226023v0ar = [];
const smo226002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo226002.setAttribute('id', 'smo226002');
smo226002.addModifier(new VF.Dot(), 0);
const smo226003 = new VF.Annotation('Lie');
smo226003.setAttribute('id', 'smo226003');
smo226003.setFont('Merriweather', 12, 'normal');
smo226003.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226002.addModifier(smo226003);
smo226003.addClass('lyric lyric-0 lyric-hyphen');
const smo226004 = new VF.Annotation('so');
smo226004.setAttribute('id', 'smo226004');
smo226004.setFont('Merriweather', 12, 'normal');
smo226004.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226002.addModifier(smo226004);
smo226004.addClass('lyric lyric-1 lyric-hyphen');
smo226023v0ar.push(smo226002);
const smo226005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo226005.setAttribute('id', 'smo226005');
smo226005.addModifier(new VF.Dot(), 0);
const smo226006 = new VF.Annotation('der');
smo226006.setAttribute('id', 'smo226006');
smo226006.setFont('Merriweather', 12, 'normal');
smo226006.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226005.addModifier(smo226006);
smo226006.addClass('lyric lyric-0');
const smo226007 = new VF.Annotation('gen');
smo226007.setAttribute('id', 'smo226007');
smo226007.setFont('Merriweather', 12, 'normal');
smo226007.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226005.addModifier(smo226007);
smo226007.addClass('lyric lyric-1');
smo226023v0ar.push(smo226005);
smo226023v0.addTickables(smo226023v0ar)
fmtsmo22602350.joinVoices([smo226023v0]);
const fmtsmo22715750 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo227157v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227157v0ar = [];
const smo227140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo227140.setAttribute('id', 'smo227140');
smo227140.addModifier(new VF.Dot(), 0);
smo227157v0ar.push(smo227140);
const smo227141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","dn/5/n"]}'))
smo227141.setAttribute('id', 'smo227141');
smo227141.addModifier(new VF.Dot(), 0);
smo227141.addModifier(new VF.Dot(), 1);
smo227157v0ar.push(smo227141);
smo227157v0.addTickables(smo227157v0ar)
fmtsmo22715750.joinVoices([smo227157v0]);
const fmtsmo22839150 = new VF.Formatter();
//
// voices and notes for stave 2 50
const smo228391v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228391v0ar = [];
const smo228372 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo228372.setAttribute('id', 'smo228372');
smo228391v0ar.push(smo228372);
const smo228373 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo228373.setAttribute('id', 'smo228373');
smo228391v0ar.push(smo228373);
const smo228374 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo228374.setAttribute('id', 'smo228374');
smo228391v0ar.push(smo228374);
const smo228375 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo228375.setAttribute('id', 'smo228375');
smo228391v0ar.push(smo228375);
smo228391v0.addTickables(smo228391v0ar)
fmtsmo22839150.joinVoices([smo228391v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22602350.format([smo226023v0,smo227157v0,smo228391v0], 149);
const stavesmo226023 = new VF.Stave(577, 516.0266026666668, 163);
stavesmo226023.setAttribute('id', 'stavesmo226023');
stavesmo226023.setBegBarType(VF.Barline.type.NONE);
stavesmo226023.setContext(context);
stavesmo226023.draw();
smo226023v0.draw(context, stavesmo226023);
const stavesmo227157 = new VF.Stave(577, 688.0266026666668, 163);
stavesmo227157.setAttribute('id', 'stavesmo227157');
stavesmo227157.setBegBarType(VF.Barline.type.NONE);
stavesmo227157.setContext(context);
stavesmo227157.draw();
smo227157v0.draw(context, stavesmo227157);
const stavesmo228391 = new VF.Stave(577, 780.0266026666668, 163);
stavesmo228391.setAttribute('id', 'stavesmo228391');
stavesmo228391.setBegBarType(VF.Barline.type.NONE);
stavesmo228391.setContext(context);
stavesmo228391.draw();
smo228391v0.draw(context, stavesmo228391);
const fmtsmo22604551 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo226045v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226045v0ar = [];
const smo226024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo226024.setAttribute('id', 'smo226024');
smo226024.addModifier(new VF.Dot(), 0);
const smo226025 = new VF.Annotation('-');
smo226025.setAttribute('id', 'smo226025');
smo226025.setFont('Merriweather', 12, 'normal');
smo226025.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226024.addModifier(smo226025);
smo226025.addClass('lyric lyric-0 lyric-hyphen');
smo226045v0ar.push(smo226024);
const smo226026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo226026.setAttribute('id', 'smo226026');
smo226045v0ar.push(smo226026);
const smo226027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo226027.setAttribute('id', 'smo226027');
const smo226028 = new VF.Annotation('sie');
smo226028.setAttribute('id', 'smo226028');
smo226028.setFont('Merriweather', 12, 'normal');
smo226028.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226027.addModifier(smo226028);
smo226028.addClass('lyric lyric-0');
const smo226029 = new VF.Annotation('Ich');
smo226029.setAttribute('id', 'smo226029');
smo226029.setFont('Merriweather', 12, 'normal');
smo226029.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226027.addModifier(smo226029);
smo226029.addClass('lyric lyric-1');
smo226045v0ar.push(smo226027);
smo226045v0.addTickables(smo226045v0ar)
fmtsmo22604551.joinVoices([smo226045v0]);
const fmtsmo22717451 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo227174v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227174v0ar = [];
const smo227158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","dn/5/n"]}'))
smo227158.setAttribute('id', 'smo227158');
smo227158.addModifier(new VF.Dot(), 0);
smo227158.addModifier(new VF.Dot(), 1);
smo227174v0ar.push(smo227158);
smo227174v0.addTickables(smo227174v0ar)
fmtsmo22717451.joinVoices([smo227174v0]);
const fmtsmo22840851 = new VF.Formatter();
//
// voices and notes for stave 2 51
const smo228408v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228408v0ar = [];
const smo228392 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo228392.setAttribute('id', 'smo228392');
smo228392.addModifier(new VF.Dot(), 0);
smo228392.addModifier(new VF.Dot(), 1);
smo228408v0ar.push(smo228392);
smo228408v0.addTickables(smo228408v0ar)
fmtsmo22840851.joinVoices([smo228408v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22604551.format([smo226045v0,smo227174v0,smo228408v0], 116);
const stavesmo226045 = new VF.Stave(740, 516.0266026666668, 130);
stavesmo226045.setAttribute('id', 'stavesmo226045');
stavesmo226045.setBegBarType(VF.Barline.type.NONE);
stavesmo226045.setContext(context);
stavesmo226045.draw();
smo226045v0.draw(context, stavesmo226045);
const stavesmo227174 = new VF.Stave(740, 688.0266026666668, 130);
stavesmo227174.setAttribute('id', 'stavesmo227174');
stavesmo227174.setBegBarType(VF.Barline.type.NONE);
stavesmo227174.setContext(context);
stavesmo227174.draw();
smo227174v0.draw(context, stavesmo227174);
const stavesmo228408 = new VF.Stave(740, 780.0266026666668, 130);
stavesmo228408.setAttribute('id', 'stavesmo228408');
stavesmo228408.setBegBarType(VF.Barline.type.NONE);
stavesmo228408.setContext(context);
stavesmo228408.draw();
smo228408v0.draw(context, stavesmo228408);
const fmtsmo22607352 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo226073v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226073v0ar = [];
const smo226046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo226046.setAttribute('id', 'smo226046');
const smo226047 = new VF.Annotation('sind');
smo226047.setAttribute('id', 'smo226047');
smo226047.setFont('Merriweather', 12, 'normal');
smo226047.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226046.addModifier(smo226047);
smo226047.addClass('lyric lyric-0');
const smo226048 = new VF.Annotation('bin');
smo226048.setAttribute('id', 'smo226048');
smo226048.setFont('Merriweather', 12, 'normal');
smo226048.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226046.addModifier(smo226048);
smo226048.addClass('lyric lyric-1');
smo226073v0ar.push(smo226046);
const smo226049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo226049.setAttribute('id', 'smo226049');
const smo226050 = new VF.Annotation('mir');
smo226050.setAttribute('id', 'smo226050');
smo226050.setFont('Merriweather', 12, 'normal');
smo226050.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226049.addModifier(smo226050);
smo226050.addClass('lyric lyric-0');
const smo226051 = new VF.Annotation('wie');
smo226051.setAttribute('id', 'smo226051');
smo226051.setFont('Merriweather', 12, 'normal');
smo226051.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226049.addModifier(smo226051);
smo226051.addClass('lyric lyric-1 lyric-hyphen');
smo226073v0ar.push(smo226049);
const smo226052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo226052.setAttribute('id', 'smo226052');
const smo226053 = new VF.Annotation('be');
smo226053.setAttribute('id', 'smo226053');
smo226053.setFont('Merriweather', 12, 'normal');
smo226053.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226052.addModifier(smo226053);
smo226053.addClass('lyric lyric-0 lyric-hyphen');
const smo226054 = new VF.Annotation('der');
smo226054.setAttribute('id', 'smo226054');
smo226054.setFont('Merriweather', 12, 'normal');
smo226054.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226052.addModifier(smo226054);
smo226054.addClass('lyric lyric-1');
smo226073v0ar.push(smo226052);
const smo226055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo226055.setAttribute('id', 'smo226055');
smo226055.addModifier(new VF.Dot(), 0);
const smo226056 = new VF.Annotation('kannt!');
smo226056.setAttribute('id', 'smo226056');
smo226056.setFont('Merriweather', 12, 'normal');
smo226056.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226055.addModifier(smo226056);
smo226056.addClass('lyric lyric-0');
const smo226057 = new VF.Annotation('da!');
smo226057.setAttribute('id', 'smo226057');
smo226057.setFont('Merriweather', 12, 'normal');
smo226057.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226055.addModifier(smo226057);
smo226057.addClass('lyric lyric-1');
smo226073v0ar.push(smo226055);
smo226073v0.addTickables(smo226073v0ar)
fmtsmo22607352.joinVoices([smo226073v0]);
const fmtsmo22719152 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo227191v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227191v0ar = [];
const smo227175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n"]}'))
smo227175.setAttribute('id', 'smo227175');
smo227175.addModifier(new VF.Dot(), 0);
smo227175.addModifier(new VF.Dot(), 1);
smo227191v0ar.push(smo227175);
smo227191v0.addTickables(smo227191v0ar)
fmtsmo22719152.joinVoices([smo227191v0]);
const fmtsmo22842552 = new VF.Formatter();
//
// voices and notes for stave 2 52
const smo228425v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228425v0ar = [];
const smo228409 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo228409.setAttribute('id', 'smo228409');
smo228409.addModifier(new VF.Dot(), 0);
smo228425v0ar.push(smo228409);
smo228425v0.addTickables(smo228425v0ar)
fmtsmo22842552.joinVoices([smo228425v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234939 = smo226046.getStemDirection();
smo226046.setStemDirection(dirsmo234939);
smo226049.setStemDirection(dirsmo234939);
smo226052.setStemDirection(dirsmo234939);
const smo234939 = new VF.Beam([smo226046,smo226049,smo226052]);
 
// formatting measures in staff group smo228595
fmtsmo22607352.format([smo226073v0,smo227191v0,smo228425v0], 254);
const stavesmo226073 = new VF.Stave(870, 516.0266026666668, 268);
stavesmo226073.setAttribute('id', 'stavesmo226073');
stavesmo226073.setBegBarType(VF.Barline.type.NONE);
stavesmo226073.setContext(context);
stavesmo226073.draw();
smo226073v0.draw(context, stavesmo226073);
smo234939.setContext(context);
smo234939.draw();
const stavesmo227191 = new VF.Stave(870, 688.0266026666668, 268);
stavesmo227191.setAttribute('id', 'stavesmo227191');
stavesmo227191.setBegBarType(VF.Barline.type.NONE);
stavesmo227191.setContext(context);
stavesmo227191.draw();
smo227191v0.draw(context, stavesmo227191);
const stavesmo228425 = new VF.Stave(870, 780.0266026666668, 268);
stavesmo228425.setAttribute('id', 'stavesmo228425');
stavesmo228425.setBegBarType(VF.Barline.type.NONE);
stavesmo228425.setContext(context);
stavesmo228425.draw();
smo228425v0.draw(context, stavesmo228425);
const fmtsmo22609153 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo226091v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226091v0ar = [];
const smo226074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo226074.setAttribute('id', 'smo226074');
smo226074.addModifier(new VF.Dot(), 0);
const smo226075 = new VF.Annotation('-');
smo226075.setAttribute('id', 'smo226075');
smo226075.setFont('Merriweather', 12, 'normal');
smo226075.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226074.addModifier(smo226075);
smo226075.addClass('lyric lyric-0 lyric-hyphen');
smo226091v0ar.push(smo226074);
smo226091v0.addTickables(smo226091v0ar)
fmtsmo22609153.joinVoices([smo226091v0]);
const fmtsmo22720853 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo227208v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227208v0ar = [];
const smo227192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n"]}'))
smo227192.setAttribute('id', 'smo227192');
smo227192.addModifier(new VF.Dot(), 0);
smo227192.addModifier(new VF.Dot(), 1);
smo227208v0ar.push(smo227192);
smo227208v0.addTickables(smo227208v0ar)
fmtsmo22720853.joinVoices([smo227208v0]);
const fmtsmo22844253 = new VF.Formatter();
//
// voices and notes for stave 2 53
const smo228442v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228442v0ar = [];
const smo228426 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo228426.setAttribute('id', 'smo228426');
smo228426.addModifier(new VF.Dot(), 0);
smo228442v0ar.push(smo228426);
smo228442v0.addTickables(smo228442v0ar)
fmtsmo22844253.joinVoices([smo228442v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22609153.format([smo226091v0,smo227208v0,smo228442v0], 58);
const stavesmo226091 = new VF.Stave(1138, 516.0266026666668, 72);
stavesmo226091.setAttribute('id', 'stavesmo226091');
stavesmo226091.setBegBarType(VF.Barline.type.NONE);
stavesmo226091.setContext(context);
stavesmo226091.draw();
smo226091v0.draw(context, stavesmo226091);
const stavesmo227208 = new VF.Stave(1138, 688.0266026666668, 72);
stavesmo227208.setAttribute('id', 'stavesmo227208');
stavesmo227208.setBegBarType(VF.Barline.type.NONE);
stavesmo227208.setContext(context);
stavesmo227208.draw();
smo227208v0.draw(context, stavesmo227208);
const stavesmo228442 = new VF.Stave(1138, 780.0266026666668, 72);
stavesmo228442.setAttribute('id', 'stavesmo228442');
stavesmo228442.setBegBarType(VF.Barline.type.NONE);
stavesmo228442.setContext(context);
stavesmo228442.draw();
smo228442v0.draw(context, stavesmo228442);
const rightsmo228595stavesmo2260912 = new VF.StaveConnector(stavesmo226091, stavesmo228442).setType(0);
rightsmo228595stavesmo2260912.setContext(context).draw();
const fmtsmo22611054 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo226110v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226110v0ar = [];
const smo226092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo226092.setAttribute('id', 'smo226092');
smo226092.addModifier(new VF.Dot(), 0);
const smo226093 = new VF.Annotation('-');
smo226093.setAttribute('id', 'smo226093');
smo226093.setFont('Merriweather', 12, 'normal');
smo226093.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226092.addModifier(smo226093);
smo226093.addClass('lyric lyric-0 lyric-hyphen');
smo226110v0ar.push(smo226092);
smo226110v0.addTickables(smo226110v0ar)
fmtsmo22611054.joinVoices([smo226110v0]);
const fmtsmo22722954 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo227229v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227229v0ar = [];
const smo227209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo227209.setAttribute('id', 'smo227209');
smo227229v0ar.push(smo227209);
const smo227210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo227210.setAttribute('id', 'smo227210');
smo227229v0ar.push(smo227210);
const smo227211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo227211.setAttribute('id', 'smo227211');
smo227229v0ar.push(smo227211);
const smo227212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo227212.setAttribute('id', 'smo227212');
smo227229v0ar.push(smo227212);
smo227229v0.addTickables(smo227229v0ar)
fmtsmo22722954.joinVoices([smo227229v0]);
const fmtsmo22846354 = new VF.Formatter();
//
// voices and notes for stave 2 54
const smo228463v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228463v0ar = [];
const smo228443 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo228443.setAttribute('id', 'smo228443');
smo228463v0ar.push(smo228443);
const smo228444 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo228444.setAttribute('id', 'smo228444');
smo228463v0ar.push(smo228444);
const smo228445 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo228445.setAttribute('id', 'smo228445');
smo228463v0ar.push(smo228445);
const smo228446 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo228446.setAttribute('id', 'smo228446');
smo228463v0ar.push(smo228446);
smo228463v0.addTickables(smo228463v0ar)
fmtsmo22846354.joinVoices([smo228463v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22611054.format([smo226110v0,smo227229v0,smo228463v0], 111);
const stavesmo226110 = new VF.Stave(66, 909.0266026666668, 185);
stavesmo226110.setAttribute('id', 'stavesmo226110');
stavesmo226110.setBegBarType(1);
stavesmo226110.addClef('treble');
const keysmo226110 = new VF.KeySignature('G');
keysmo226110.addToStave(stavesmo226110);
stavesmo226110.setContext(context);
stavesmo226110.draw();
smo226110v0.draw(context, stavesmo226110);
const stavesmo227229 = new VF.Stave(66, 1030.0266026666668, 185);
stavesmo227229.setAttribute('id', 'stavesmo227229');
stavesmo227229.setBegBarType(1);
stavesmo227229.addClef('treble');
const keysmo227229 = new VF.KeySignature('G');
keysmo227229.addToStave(stavesmo227229);
stavesmo227229.setContext(context);
stavesmo227229.draw();
smo227229v0.draw(context, stavesmo227229);
const stavesmo228463 = new VF.Stave(66, 1106.0266026666668, 185);
stavesmo228463.setAttribute('id', 'stavesmo228463');
stavesmo228463.setBegBarType(1);
stavesmo228463.addClef('bass');
const keysmo228463 = new VF.KeySignature('G');
keysmo228463.addToStave(stavesmo228463);
stavesmo228463.setContext(context);
stavesmo228463.draw();
smo228463v0.draw(context, stavesmo228463);
const leftsmo228595stavesmo2261102 = new VF.StaveConnector(stavesmo226110, stavesmo228463).setType(1);
leftsmo228595stavesmo2261102.setContext(context).draw();
const fmtsmo22612755 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo226127v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226127v0ar = [];
const smo226111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo226111.setAttribute('id', 'smo226111');
smo226111.addModifier(new VF.Dot(), 0);
smo226127v0ar.push(smo226111);
smo226127v0.addTickables(smo226127v0ar)
fmtsmo22612755.joinVoices([smo226127v0]);
const fmtsmo22724955 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo227249v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227249v0ar = [];
const smo227230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo227230.setAttribute('id', 'smo227230');
smo227249v0ar.push(smo227230);
const smo227231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo227231.setAttribute('id', 'smo227231');
smo227249v0ar.push(smo227231);
const smo227232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo227232.setAttribute('id', 'smo227232');
smo227249v0ar.push(smo227232);
const smo227233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo227233.setAttribute('id', 'smo227233');
smo227249v0ar.push(smo227233);
smo227249v0.addTickables(smo227249v0ar)
fmtsmo22724955.joinVoices([smo227249v0]);
const fmtsmo22848355 = new VF.Formatter();
//
// voices and notes for stave 2 55
const smo228483v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228483v0ar = [];
const smo228464 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo228464.setAttribute('id', 'smo228464');
smo228483v0ar.push(smo228464);
const smo228465 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo228465.setAttribute('id', 'smo228465');
smo228483v0ar.push(smo228465);
const smo228466 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo228466.setAttribute('id', 'smo228466');
smo228483v0ar.push(smo228466);
const smo228467 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo228467.setAttribute('id', 'smo228467');
smo228483v0ar.push(smo228467);
smo228483v0.addTickables(smo228483v0ar)
fmtsmo22848355.joinVoices([smo228483v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22612755.format([smo226127v0,smo227249v0,smo228483v0], 106);
const stavesmo226127 = new VF.Stave(251, 909.0266026666668, 124);
stavesmo226127.setAttribute('id', 'stavesmo226127');
stavesmo226127.setBegBarType(VF.Barline.type.NONE);
stavesmo226127.setEndBarType(5);
stavesmo226127.setContext(context);
stavesmo226127.draw();
smo226127v0.draw(context, stavesmo226127);
const stavesmo227249 = new VF.Stave(251, 1030.0266026666668, 124);
stavesmo227249.setAttribute('id', 'stavesmo227249');
stavesmo227249.setBegBarType(VF.Barline.type.NONE);
stavesmo227249.setEndBarType(5);
stavesmo227249.setContext(context);
stavesmo227249.draw();
smo227249v0.draw(context, stavesmo227249);
const stavesmo228483 = new VF.Stave(251, 1106.0266026666668, 124);
stavesmo228483.setAttribute('id', 'stavesmo228483');
stavesmo228483.setBegBarType(VF.Barline.type.NONE);
stavesmo228483.setEndBarType(5);
stavesmo228483.setContext(context);
stavesmo228483.draw();
smo228483v0.draw(context, stavesmo228483);
const fmtsmo22614656 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo226146v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226146v0ar = [];
const smo226128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo226128.setAttribute('id', 'smo226128');
smo226128.addModifier(new VF.Dot(), 0);
const smo226129 = new VF.Annotation('-');
smo226129.setAttribute('id', 'smo226129');
smo226129.setFont('Merriweather', 12, 'normal');
smo226129.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226128.addModifier(smo226129);
smo226129.addClass('lyric lyric-0 lyric-hyphen');
smo226146v0ar.push(smo226128);
smo226146v0.addTickables(smo226146v0ar)
fmtsmo22614656.joinVoices([smo226146v0]);
const fmtsmo22726856 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo227268v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227268v0ar = [];
const smo227250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo227250.setAttribute('id', 'smo227250');
smo227250.addModifier(new VF.Dot(), 0);
smo227268v0ar.push(smo227250);
const smo227251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo227251.setAttribute('id', 'smo227251');
smo227251.addModifier(new VF.Dot(), 0);
smo227268v0ar.push(smo227251);
smo227268v0.addTickables(smo227268v0ar)
fmtsmo22726856.joinVoices([smo227268v0]);
const fmtsmo22850456 = new VF.Formatter();
//
// voices and notes for stave 2 56
const smo228504v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228504v0ar = [];
const smo228484 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo228484.setAttribute('id', 'smo228484');
smo228504v0ar.push(smo228484);
const smo228485 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo228485.setAttribute('id', 'smo228485');
smo228504v0ar.push(smo228485);
const smo228486 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo228486.setAttribute('id', 'smo228486');
smo228504v0ar.push(smo228486);
const smo228487 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo228487.setAttribute('id', 'smo228487');
smo228504v0ar.push(smo228487);
smo228504v0.addTickables(smo228504v0ar)
fmtsmo22850456.joinVoices([smo228504v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22614656.format([smo226146v0,smo227268v0,smo228504v0], 125);
const stavesmo226146 = new VF.Stave(375, 909.0266026666668, 139);
stavesmo226146.setAttribute('id', 'stavesmo226146');
stavesmo226146.setBegBarType(VF.Barline.type.NONE);
stavesmo226146.setContext(context);
stavesmo226146.draw();
smo226146v0.draw(context, stavesmo226146);
const stavesmo227268 = new VF.Stave(375, 1030.0266026666668, 139);
stavesmo227268.setAttribute('id', 'stavesmo227268');
stavesmo227268.setBegBarType(VF.Barline.type.NONE);
stavesmo227268.setContext(context);
stavesmo227268.draw();
smo227268v0.draw(context, stavesmo227268);
const stavesmo228504 = new VF.Stave(375, 1106.0266026666668, 139);
stavesmo228504.setAttribute('id', 'stavesmo228504');
stavesmo228504.setBegBarType(VF.Barline.type.NONE);
stavesmo228504.setContext(context);
stavesmo228504.draw();
smo228504v0.draw(context, stavesmo228504);
const fmtsmo22616457 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo226164v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226164v0ar = [];
const smo226147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo226147.setAttribute('id', 'smo226147');
smo226147.addModifier(new VF.Dot(), 0);
const smo226148 = new VF.Annotation('-');
smo226148.setAttribute('id', 'smo226148');
smo226148.setFont('Merriweather', 12, 'normal');
smo226148.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226147.addModifier(smo226148);
smo226148.addClass('lyric lyric-0 lyric-hyphen');
smo226164v0ar.push(smo226147);
smo226164v0.addTickables(smo226164v0ar)
fmtsmo22616457.joinVoices([smo226164v0]);
const fmtsmo22728757 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo227287v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227287v0ar = [];
const smo227269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo227269.setAttribute('id', 'smo227269');
smo227269.addModifier(new VF.Dot(), 0);
smo227287v0ar.push(smo227269);
const smo227270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo227270.setAttribute('id', 'smo227270');
smo227287v0ar.push(smo227270);
const smo227271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo227271.setAttribute('id', 'smo227271');
smo227287v0ar.push(smo227271);
smo227287v0.addTickables(smo227287v0ar)
fmtsmo22728757.joinVoices([smo227287v0]);
const fmtsmo22852457 = new VF.Formatter();
//
// voices and notes for stave 2 57
const smo228524v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228524v0ar = [];
const smo228505 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo228505.setAttribute('id', 'smo228505');
smo228524v0ar.push(smo228505);
const smo228506 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo228506.setAttribute('id', 'smo228506');
smo228524v0ar.push(smo228506);
const smo228507 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo228507.setAttribute('id', 'smo228507');
smo228524v0ar.push(smo228507);
const smo228508 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo228508.setAttribute('id', 'smo228508');
smo228524v0ar.push(smo228508);
smo228524v0.addTickables(smo228524v0ar)
fmtsmo22852457.joinVoices([smo228524v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22616457.format([smo226164v0,smo227287v0,smo228524v0], 110);
const stavesmo226164 = new VF.Stave(514, 909.0266026666668, 124);
stavesmo226164.setAttribute('id', 'stavesmo226164');
stavesmo226164.setBegBarType(VF.Barline.type.NONE);
stavesmo226164.setContext(context);
stavesmo226164.draw();
smo226164v0.draw(context, stavesmo226164);
const stavesmo227287 = new VF.Stave(514, 1030.0266026666668, 124);
stavesmo227287.setAttribute('id', 'stavesmo227287');
stavesmo227287.setBegBarType(VF.Barline.type.NONE);
stavesmo227287.setContext(context);
stavesmo227287.draw();
smo227287v0.draw(context, stavesmo227287);
const stavesmo228524 = new VF.Stave(514, 1106.0266026666668, 124);
stavesmo228524.setAttribute('id', 'stavesmo228524');
stavesmo228524.setBegBarType(VF.Barline.type.NONE);
stavesmo228524.setContext(context);
stavesmo228524.draw();
smo228524v0.draw(context, stavesmo228524);
const fmtsmo22618258 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo226182v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226182v0ar = [];
const smo226165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo226165.setAttribute('id', 'smo226165');
smo226165.addModifier(new VF.Dot(), 0);
const smo226166 = new VF.Annotation('-');
smo226166.setAttribute('id', 'smo226166');
smo226166.setFont('Merriweather', 12, 'normal');
smo226166.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226165.addModifier(smo226166);
smo226166.addClass('lyric lyric-0 lyric-hyphen');
smo226182v0ar.push(smo226165);
smo226182v0.addTickables(smo226182v0ar)
fmtsmo22618258.joinVoices([smo226182v0]);
const fmtsmo22730858 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo227308v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227308v0ar = [];
const smo227288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo227288.setAttribute('id', 'smo227288');
smo227308v0ar.push(smo227288);
const smo227289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo227289.setAttribute('id', 'smo227289');
smo227308v0ar.push(smo227289);
const smo227290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo227290.setAttribute('id', 'smo227290');
smo227308v0ar.push(smo227290);
const smo227291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo227291.setAttribute('id', 'smo227291');
smo227308v0ar.push(smo227291);
const smo227292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo227292.setAttribute('id', 'smo227292');
smo227308v0ar.push(smo227292);
smo227308v0.addTickables(smo227308v0ar)
fmtsmo22730858.joinVoices([smo227308v0]);
const fmtsmo22854558 = new VF.Formatter();
//
// voices and notes for stave 2 58
const smo228545v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228545v0ar = [];
const smo228525 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n","an/3/n"]}'))
smo228525.setAttribute('id', 'smo228525');
smo228545v0ar.push(smo228525);
const smo228526 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo228526.setAttribute('id', 'smo228526');
smo228545v0ar.push(smo228526);
const smo228527 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n","an/3/n"]}'))
smo228527.setAttribute('id', 'smo228527');
smo228545v0ar.push(smo228527);
const smo228528 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo228528.setAttribute('id', 'smo228528');
smo228545v0ar.push(smo228528);
const smo228529 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo228529.setAttribute('id', 'smo228529');
smo228545v0ar.push(smo228529);
smo228545v0.addTickables(smo228545v0ar)
fmtsmo22854558.joinVoices([smo228545v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234981 = smo227288.getStemDirection();
smo227288.setStemDirection(dirsmo234981);
smo227289.setStemDirection(dirsmo234981);
smo227290.setStemDirection(dirsmo234981);
const smo234981 = new VF.Beam([smo227288,smo227289,smo227290]);
const dirsmo234984 = smo228525.getStemDirection();
smo228525.setStemDirection(dirsmo234984);
smo228526.setStemDirection(dirsmo234984);
smo228527.setStemDirection(dirsmo234984);
const smo234984 = new VF.Beam([smo228525,smo228526,smo228527]);
 
// formatting measures in staff group smo228595
fmtsmo22618258.format([smo226182v0,smo227308v0,smo228545v0], 140);
const stavesmo226182 = new VF.Stave(638, 909.0266026666668, 154);
stavesmo226182.setAttribute('id', 'stavesmo226182');
stavesmo226182.setBegBarType(VF.Barline.type.NONE);
stavesmo226182.setContext(context);
stavesmo226182.draw();
smo226182v0.draw(context, stavesmo226182);
const stavesmo227308 = new VF.Stave(638, 1030.0266026666668, 154);
stavesmo227308.setAttribute('id', 'stavesmo227308');
stavesmo227308.setBegBarType(VF.Barline.type.NONE);
stavesmo227308.setContext(context);
stavesmo227308.draw();
smo227308v0.draw(context, stavesmo227308);
smo234981.setContext(context);
smo234981.draw();
const stavesmo228545 = new VF.Stave(638, 1106.0266026666668, 154);
stavesmo228545.setAttribute('id', 'stavesmo228545');
stavesmo228545.setBegBarType(VF.Barline.type.NONE);
stavesmo228545.setContext(context);
stavesmo228545.draw();
smo228545v0.draw(context, stavesmo228545);
smo234984.setContext(context);
smo234984.draw();
const fmtsmo22620059 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo226200v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226200v0ar = [];
const smo226183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo226183.setAttribute('id', 'smo226183');
smo226183.addModifier(new VF.Dot(), 0);
const smo226184 = new VF.Annotation('-');
smo226184.setAttribute('id', 'smo226184');
smo226184.setFont('Merriweather', 12, 'normal');
smo226184.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo226183.addModifier(smo226184);
smo226184.addClass('lyric lyric-0 lyric-hyphen');
smo226200v0ar.push(smo226183);
smo226200v0.addTickables(smo226200v0ar)
fmtsmo22620059.joinVoices([smo226200v0]);
const fmtsmo22732559 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo227325v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227325v0ar = [];
const smo227309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo227309.setAttribute('id', 'smo227309');
smo227309.addModifier(new VF.Dot(), 0);
smo227325v0ar.push(smo227309);
smo227325v0.addTickables(smo227325v0ar)
fmtsmo22732559.joinVoices([smo227325v0]);
const fmtsmo22856259 = new VF.Formatter();
//
// voices and notes for stave 2 59
const smo228562v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228562v0ar = [];
const smo228546 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n","gn/3/n","bn/3/n"]}'))
smo228546.setAttribute('id', 'smo228546');
smo228546.addModifier(new VF.Dot(), 0);
smo228546.addModifier(new VF.Dot(), 1);
smo228546.addModifier(new VF.Dot(), 2);
smo228562v0ar.push(smo228546);
smo228562v0.addTickables(smo228562v0ar)
fmtsmo22856259.joinVoices([smo228562v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22620059.format([smo226200v0,smo227325v0,smo228562v0], 28);
const stavesmo226200 = new VF.Stave(792, 909.0266026666668, 42);
stavesmo226200.setAttribute('id', 'stavesmo226200');
stavesmo226200.setBegBarType(VF.Barline.type.NONE);
stavesmo226200.setContext(context);
stavesmo226200.draw();
smo226200v0.draw(context, stavesmo226200);
const stavesmo227325 = new VF.Stave(792, 1030.0266026666668, 42);
stavesmo227325.setAttribute('id', 'stavesmo227325');
stavesmo227325.setBegBarType(VF.Barline.type.NONE);
stavesmo227325.setContext(context);
stavesmo227325.draw();
smo227325v0.draw(context, stavesmo227325);
const stavesmo228562 = new VF.Stave(792, 1106.0266026666668, 42);
stavesmo228562.setAttribute('id', 'stavesmo228562');
stavesmo228562.setBegBarType(VF.Barline.type.NONE);
stavesmo228562.setContext(context);
stavesmo228562.draw();
smo228562v0.draw(context, stavesmo228562);
const fmtsmo22621760 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo226217v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226217v0ar = [];
const smo226201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo226201.setAttribute('id', 'smo226201');
smo226201.addModifier(new VF.Dot(), 0);
smo226217v0ar.push(smo226201);
smo226217v0.addTickables(smo226217v0ar)
fmtsmo22621760.joinVoices([smo226217v0]);
const fmtsmo22734460 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo227344v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227344v0ar = [];
const smo227326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo227326.setAttribute('id', 'smo227326');
smo227344v0ar.push(smo227326);
const smo227327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
smo227327.setAttribute('id', 'smo227327');
smo227344v0ar.push(smo227327);
const smo227328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
smo227328.setAttribute('id', 'smo227328');
smo227328.addModifier(new VF.Dot(), 0);
smo227344v0ar.push(smo227328);
smo227344v0.addTickables(smo227344v0ar)
fmtsmo22734460.joinVoices([smo227344v0]);
const fmtsmo22858160 = new VF.Formatter();
//
// voices and notes for stave 2 60
const smo228581v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228581v0ar = [];
const smo228563 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","bn/2/n","dn/3/n","gn/3/n"]}'))
smo228563.setAttribute('id', 'smo228563');
smo228581v0ar.push(smo228563);
const smo228564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo228564.setAttribute('id', 'smo228564');
smo228581v0ar.push(smo228564);
const smo228565 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo228565.setAttribute('id', 'smo228565');
smo228565.addModifier(new VF.Dot(), 0);
smo228581v0ar.push(smo228565);
smo228581v0.addTickables(smo228581v0ar)
fmtsmo22858160.joinVoices([smo228581v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22621760.format([smo226217v0,smo227344v0,smo228581v0], 89);
const stavesmo226217 = new VF.Stave(834, 909.0266026666668, 111);
stavesmo226217.setAttribute('id', 'stavesmo226217');
stavesmo226217.setBegBarType(VF.Barline.type.NONE);
stavesmo226217.setEndBarType(3);
stavesmo226217.setContext(context);
stavesmo226217.draw();
smo226217v0.draw(context, stavesmo226217);
const stavesmo227344 = new VF.Stave(834, 1030.0266026666668, 111);
stavesmo227344.setAttribute('id', 'stavesmo227344');
stavesmo227344.setBegBarType(VF.Barline.type.NONE);
stavesmo227344.setEndBarType(3);
stavesmo227344.setContext(context);
stavesmo227344.draw();
smo227344v0.draw(context, stavesmo227344);
const stavesmo228581 = new VF.Stave(834, 1106.0266026666668, 111);
stavesmo228581.setAttribute('id', 'stavesmo228581');
stavesmo228581.setBegBarType(VF.Barline.type.NONE);
stavesmo228581.setEndBarType(3);
stavesmo228581.setContext(context);
stavesmo228581.draw();
smo228581v0.draw(context, stavesmo228581);
// modifier from 0-54-0-0 to 0-55-0-0
const smo235764 = new VF.StaveTie({ first_note: smo226092, last_note: smo226111, 
          firstNote: smo226092, lastNote: smo226111, first_indices: [0], last_indices: [0]});
smo235764.setContext(context).draw();
// modifier from 0-52-0-3 to 0-53-0-0
const smo235765 = new VF.StaveTie({ first_note: smo226055, last_note: smo226074, 
          firstNote: smo226055, lastNote: smo226074, first_indices: [0], last_indices: [0]});
smo235765.setContext(context).draw();
// modifier from 0-56-0-0 to 0-57-0-0
const smo235766 = new VF.StaveTie({ first_note: smo226128, last_note: smo226147, 
          firstNote: smo226128, lastNote: smo226147, first_indices: [0], last_indices: [0]});
smo235766.setContext(context).draw();
// modifier from 0-58-0-0 to 0-59-0-0
const smo235767 = new VF.StaveTie({ first_note: smo226165, last_note: smo226183, 
          firstNote: smo226165, lastNote: smo226183, first_indices: [0], last_indices: [0]});
smo235767.setContext(context).draw();
// modifier from 0-48-0-0 to 0-49-0-0
const smo235768 = new VF.StaveTie({ first_note: smo225953, last_note: smo225972, 
          firstNote: smo225953, lastNote: smo225972, first_indices: [0], last_indices: [0]});
smo235768.setContext(context).draw();
// modifier from 0-50-0-1 to 0-51-0-0
const smo235769 = new VF.StaveTie({ first_note: smo226005, last_note: smo226024, 
          firstNote: smo226005, lastNote: smo226024, first_indices: [0], last_indices: [0]});
smo235769.setContext(context).draw();
// modifier from 0-46-0-0 to 0-47-0-0
const smo235770 = new VF.StaveTie({ first_note: smo225904, last_note: smo225923, 
          firstNote: smo225904, lastNote: smo225923, first_indices: [0], last_indices: [0]});
smo235770.setContext(context).draw();
// modifier from 1-44-0-0 to 1-45-0-0
const smo235771 = new VF.StaveTie({ first_note: smo227027, last_note: smo227044, 
          firstNote: smo227027, lastNote: smo227044, first_indices: [0,1], last_indices: [0,1]});
smo235771.setContext(context).draw();
// modifier from 1-52-0-0 to 1-53-0-0
const smo235772 = new VF.StaveTie({ first_note: smo227175, last_note: smo227192, 
          firstNote: smo227175, lastNote: smo227192, first_indices: [0,1], last_indices: [0,1]});
smo235772.setContext(context).draw();
// modifier from 2-52-0-0 to 2-53-0-0
const smo235773 = new VF.StaveTie({ first_note: smo228409, last_note: smo228426, 
          firstNote: smo228409, lastNote: smo228426, first_indices: [0], last_indices: [0]});
smo235773.setContext(context).draw();
const smo226094smo226110 = new VF.Volta(2, '1', 66, 20);
smo226094smo226110.setContext(context).draw(stavesmo226110, -1 * 0);
const smo226094smo226127 = new VF.Volta(4, '1', 251, 20);
smo226094smo226127.setContext(context).draw(stavesmo226127, -1 * 0);
const smo226130smo226146 = new VF.Volta(2, '2', 375, 20);
smo226130smo226146.setContext(context).draw(stavesmo226146, -1 * 0);
const smo226130smo226164 = new VF.Volta(4, '2', 514, 20);
smo226130smo226164.setContext(context).draw(stavesmo226164, -1 * 0);
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo225835').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225836').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo225839').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo225857').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo225858').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo225860').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225861').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo225863').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225864').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo225866').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo225867').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo225886').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo225887').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo225905').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo225906').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo225926').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo225927').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo225929').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225930').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo225932').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225933').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo225935').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225936').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo225954').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo225955').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo225973').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo225976').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo225978').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225979').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo225981').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225982').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo225984').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo225985').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo226003').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo226004').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo226006').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo226007').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo226025').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo226028').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo226029').setAttributeNS('', 'transform', 'translate(0 31)');
context.svg.getElementById('vf-smo226047').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo226048').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo226050').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo226051').setAttributeNS('', 'transform', 'translate(0 31)');
context.svg.getElementById('vf-smo226053').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo226054').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo226056').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo226057').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo226075').setAttributeNS('', 'transform', 'translate(0 16)');
}
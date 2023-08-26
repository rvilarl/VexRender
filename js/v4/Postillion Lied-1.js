// @@ Postillionlied p 2/2  by Franz Grothe
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
const fmtsmo23719322 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo237193v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237193v0ar = [];
const smo237175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237175.setAttribute('id', 'smo237175');
smo237175.addModifier(new VF.Dot(), 0);
const smo237176 = new VF.Annotation('bläst');
smo237176.setAttribute('id', 'smo237176');
smo237176.setFont('Merriweather', 12, 'normal');
smo237176.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237175.addModifier(smo237176);
smo237176.addClass('lyric lyric-0 lyric-hyphen');
const smo237177 = new VF.Annotation('Herz');
smo237177.setAttribute('id', 'smo237177');
smo237177.setFont('Merriweather', 12, 'normal');
smo237177.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237175.addModifier(smo237177);
smo237177.addClass('lyric lyric-1');
smo237193v0ar.push(smo237175);
smo237193v0.addTickables(smo237193v0ar)
fmtsmo23719322.joinVoices([smo237193v0]);
const fmtsmo23850222 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo238502v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238502v0ar = [];
const smo238486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo238486.setAttribute('id', 'smo238486');
smo238486.addModifier(new VF.Dot(), 0);
smo238502v0ar.push(smo238486);
smo238502v0.addTickables(smo238502v0ar)
fmtsmo23850222.joinVoices([smo238502v0]);
const fmtsmo23967922 = new VF.Formatter();
//
// voices and notes for stave 2 22
const smo239679v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239679v0ar = [];
const smo239663 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo239663.setAttribute('id', 'smo239663');
smo239663.addModifier(new VF.Dot(), 0);
smo239679v0ar.push(smo239663);
smo239679v0.addTickables(smo239679v0ar)
fmtsmo23967922.joinVoices([smo239679v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23719322.format([smo237193v0,smo238502v0,smo239679v0], 60);
const stavesmo237193 = new VF.Stave(66, 107.5133013333334, 134);
stavesmo237193.setAttribute('id', 'stavesmo237193');
stavesmo237193.setBegBarType(1);
stavesmo237193.addClef('treble');
const keysmo237193 = new VF.KeySignature('G');
keysmo237193.addToStave(stavesmo237193);
stavesmo237193.setContext(context);
stavesmo237193.draw();
smo237193v0.draw(context, stavesmo237193);
const stavesmo238502 = new VF.Stave(66, 214.5133013333334, 134);
stavesmo238502.setAttribute('id', 'stavesmo238502');
stavesmo238502.setBegBarType(1);
stavesmo238502.addClef('treble');
const keysmo238502 = new VF.KeySignature('G');
keysmo238502.addToStave(stavesmo238502);
stavesmo238502.setContext(context);
stavesmo238502.draw();
smo238502v0.draw(context, stavesmo238502);
const stavesmo239679 = new VF.Stave(66, 285.5133013333334, 134);
stavesmo239679.setAttribute('id', 'stavesmo239679');
stavesmo239679.setBegBarType(1);
stavesmo239679.addClef('bass');
const keysmo239679 = new VF.KeySignature('G');
keysmo239679.addToStave(stavesmo239679);
stavesmo239679.setContext(context);
stavesmo239679.draw();
smo239679v0.draw(context, stavesmo239679);
const leftsmo240440stavesmo2371932 = new VF.StaveConnector(stavesmo237193, stavesmo239679).setType(1);
leftsmo240440stavesmo2371932.setContext(context).draw();
const fmtsmo23722023 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo237220v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237220v0ar = [];
const smo237194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237194.setAttribute('id', 'smo237194');
smo237220v0ar.push(smo237194);
const smo237196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237196.setAttribute('id', 'smo237196');
const smo237197 = new VF.Annotation('sein');
smo237197.setAttribute('id', 'smo237197');
smo237197.setFont('Merriweather', 12, 'normal');
smo237197.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237196.addModifier(smo237197);
smo237197.addClass('lyric lyric-0');
const smo237198 = new VF.Annotation('be');
smo237198.setAttribute('id', 'smo237198');
smo237198.setFont('Merriweather', 12, 'normal');
smo237198.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237196.addModifier(smo237198);
smo237198.addClass('lyric lyric-1 lyric-hyphen');
smo237220v0ar.push(smo237196);
const smo237199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237199.setAttribute('id', 'smo237199');
const smo237200 = new VF.Annotation('Horn');
smo237200.setAttribute('id', 'smo237200');
smo237200.setFont('Merriweather', 12, 'normal');
smo237200.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237199.addModifier(smo237200);
smo237200.addClass('lyric lyric-0');
const smo237201 = new VF.Annotation('glei');
smo237201.setAttribute('id', 'smo237201');
smo237201.setFont('Merriweather', 12, 'normal');
smo237201.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237199.addModifier(smo237201);
smo237201.addClass('lyric lyric-1 lyric-hyphen');
smo237220v0ar.push(smo237199);
const smo237202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237202.setAttribute('id', 'smo237202');
const smo237203 = new VF.Annotation('mit');
smo237203.setAttribute('id', 'smo237203');
smo237203.setFont('Merriweather', 12, 'normal');
smo237203.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237202.addModifier(smo237203);
smo237203.addClass('lyric lyric-0');
const smo237204 = new VF.Annotation('tet');
smo237204.setAttribute('id', 'smo237204');
smo237204.setFont('Merriweather', 12, 'normal');
smo237204.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237202.addModifier(smo237204);
smo237204.addClass('lyric lyric-1');
smo237220v0ar.push(smo237202);
smo237220v0.addTickables(smo237220v0ar)
fmtsmo23722023.joinVoices([smo237220v0]);
const fmtsmo23851923 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo238519v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238519v0ar = [];
const smo238503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n","bn/4/n"]}'))
smo238503.setAttribute('id', 'smo238503');
smo238503.addModifier(new VF.Dot(), 0);
smo238503.addModifier(new VF.Dot(), 1);
smo238519v0ar.push(smo238503);
smo238519v0.addTickables(smo238519v0ar)
fmtsmo23851923.joinVoices([smo238519v0]);
const fmtsmo23969623 = new VF.Formatter();
//
// voices and notes for stave 2 23
const smo239696v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239696v0ar = [];
const smo239680 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo239680.setAttribute('id', 'smo239680');
const smo2396800acc = new VF.Accidental('#');
smo239680.addModifier(smo2396800acc, 0);
smo239680.addModifier(new VF.Dot(), 0);
smo239696v0ar.push(smo239680);
smo239696v0.addTickables(smo239696v0ar)
fmtsmo23969623.joinVoices([smo239696v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23722023.format([smo237220v0,smo238519v0,smo239696v0], 239);
const stavesmo237220 = new VF.Stave(200, 107.5133013333334, 253);
stavesmo237220.setAttribute('id', 'stavesmo237220');
stavesmo237220.setBegBarType(VF.Barline.type.NONE);
stavesmo237220.setContext(context);
stavesmo237220.draw();
smo237220v0.draw(context, stavesmo237220);
const stavesmo238519 = new VF.Stave(200, 214.5133013333334, 253);
stavesmo238519.setAttribute('id', 'stavesmo238519');
stavesmo238519.setBegBarType(VF.Barline.type.NONE);
stavesmo238519.setContext(context);
stavesmo238519.draw();
smo238519v0.draw(context, stavesmo238519);
const stavesmo239696 = new VF.Stave(200, 285.5133013333334, 253);
stavesmo239696.setAttribute('id', 'stavesmo239696');
stavesmo239696.setBegBarType(VF.Barline.type.NONE);
stavesmo239696.setContext(context);
stavesmo239696.draw();
smo239696v0.draw(context, stavesmo239696);
const fmtsmo23724224 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo237242v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237242v0ar = [];
const smo237221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237221.setAttribute('id', 'smo237221');
smo237221.addModifier(new VF.Dot(), 0);
const smo237222 = new VF.Annotation('hel');
smo237222.setAttribute('id', 'smo237222');
smo237222.setFont('Merriweather', 12, 'normal');
smo237222.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237221.addModifier(smo237222);
smo237222.addClass('lyric lyric-0 lyric-hyphen');
const smo237223 = new VF.Annotation('ihn');
smo237223.setAttribute('id', 'smo237223');
smo237223.setFont('Merriweather', 12, 'normal');
smo237223.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237221.addModifier(smo237223);
smo237223.addClass('lyric lyric-1');
smo237242v0ar.push(smo237221);
const smo237224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo237224.setAttribute('id', 'smo237224');
smo237224.addModifier(new VF.Dot(), 0);
const smo237225 = new VF.Annotation('lem');
smo237225.setAttribute('id', 'smo237225');
smo237225.setFont('Merriweather', 12, 'normal');
smo237225.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237224.addModifier(smo237225);
smo237225.addClass('lyric lyric-0');
const smo237226 = new VF.Annotation('hin');
smo237226.setAttribute('id', 'smo237226');
smo237226.setFont('Merriweather', 12, 'normal');
smo237226.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237224.addModifier(smo237226);
smo237226.addClass('lyric lyric-1 lyric-hyphen');
smo237242v0ar.push(smo237224);
smo237242v0.addTickables(smo237242v0ar)
fmtsmo23724224.joinVoices([smo237242v0]);
const fmtsmo23853624 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo238536v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238536v0ar = [];
const smo238520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","an/4/n"]}'))
smo238520.setAttribute('id', 'smo238520');
smo238520.addModifier(new VF.Dot(), 0);
smo238520.addModifier(new VF.Dot(), 1);
smo238536v0ar.push(smo238520);
smo238536v0.addTickables(smo238536v0ar)
fmtsmo23853624.joinVoices([smo238536v0]);
const fmtsmo23971424 = new VF.Formatter();
//
// voices and notes for stave 2 24
const smo239714v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239714v0ar = [];
const smo239697 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo239697.setAttribute('id', 'smo239697');
smo239697.addModifier(new VF.Dot(), 0);
smo239714v0ar.push(smo239697);
const smo239698 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo239698.setAttribute('id', 'smo239698');
smo239698.addModifier(new VF.Dot(), 0);
smo239714v0ar.push(smo239698);
smo239714v0.addTickables(smo239714v0ar)
fmtsmo23971424.joinVoices([smo239714v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23724224.format([smo237242v0,smo238536v0,smo239714v0], 107);
const stavesmo237242 = new VF.Stave(453, 107.5133013333334, 121);
stavesmo237242.setAttribute('id', 'stavesmo237242');
stavesmo237242.setBegBarType(VF.Barline.type.NONE);
stavesmo237242.setContext(context);
stavesmo237242.draw();
smo237242v0.draw(context, stavesmo237242);
const stavesmo238536 = new VF.Stave(453, 214.5133013333334, 121);
stavesmo238536.setAttribute('id', 'stavesmo238536');
stavesmo238536.setBegBarType(VF.Barline.type.NONE);
stavesmo238536.setContext(context);
stavesmo238536.draw();
smo238536v0.draw(context, stavesmo238536);
const stavesmo239714 = new VF.Stave(453, 285.5133013333334, 121);
stavesmo239714.setAttribute('id', 'stavesmo239714');
stavesmo239714.setBegBarType(VF.Barline.type.NONE);
stavesmo239714.setContext(context);
stavesmo239714.draw();
smo239714v0.draw(context, stavesmo239714);
const fmtsmo23726625 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo237266v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237266v0ar = [];
const smo237243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237243.setAttribute('id', 'smo237243');
smo237243.addModifier(new VF.Dot(), 0);
const smo237245 = new VF.Annotation('Ton,');
smo237245.setAttribute('id', 'smo237245');
smo237245.setFont('Merriweather', 12, 'normal');
smo237245.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237243.addModifier(smo237245);
smo237245.addClass('lyric lyric-0');
const smo237244 = new VF.Annotation('aus');
smo237244.setAttribute('id', 'smo237244');
smo237244.setFont('Merriweather', 12, 'normal');
smo237244.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237243.addModifier(smo237244);
smo237244.addClass('lyric lyric-1');
smo237266v0ar.push(smo237243);
const smo237246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237246.setAttribute('id', 'smo237246');
const smo237247 = new VF.Annotation('-');
smo237247.setAttribute('id', 'smo237247');
smo237247.setFont('Merriweather', 12, 'normal');
smo237247.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237246.addModifier(smo237247);
smo237247.addClass('lyric lyric-0 lyric-hyphen');
smo237266v0ar.push(smo237246);
const smo237248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/5/n"]}'))
smo237248.setAttribute('id', 'smo237248');
const smo2372480acc = new VF.Accidental('#');
smo237248.addModifier(smo2372480acc, 0);
const smo237249 = new VF.Annotation('so');
smo237249.setAttribute('id', 'smo237249');
smo237249.setFont('Merriweather', 12, 'normal');
smo237249.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237248.addModifier(smo237249);
smo237249.addClass('lyric lyric-0');
const smo237250 = new VF.Annotation('und');
smo237250.setAttribute('id', 'smo237250');
smo237250.setFont('Merriweather', 12, 'normal');
smo237250.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237248.addModifier(smo237250);
smo237250.addClass('lyric lyric-1');
smo237266v0ar.push(smo237248);
smo237266v0.addTickables(smo237266v0ar)
fmtsmo23726625.joinVoices([smo237266v0]);
const fmtsmo23855425 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo238554v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238554v0ar = [];
const smo238537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","an/4/n"]}'))
smo238537.setAttribute('id', 'smo238537');
smo238537.addModifier(new VF.Dot(), 0);
smo238537.addModifier(new VF.Dot(), 1);
smo238554v0ar.push(smo238537);
const smo238538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo238538.setAttribute('id', 'smo238538');
smo238538.addModifier(new VF.Dot(), 0);
smo238554v0ar.push(smo238538);
smo238554v0.addTickables(smo238554v0ar)
fmtsmo23855425.joinVoices([smo238554v0]);
const fmtsmo23973225 = new VF.Formatter();
//
// voices and notes for stave 2 25
const smo239732v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239732v0ar = [];
const smo239715 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo239715.setAttribute('id', 'smo239715');
smo239715.addModifier(new VF.Dot(), 0);
smo239732v0ar.push(smo239715);
const smo239716 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["d#/3/n"]}'))
smo239716.setAttribute('id', 'smo239716');
const smo2397160acc = new VF.Accidental('#');
smo239716.addModifier(smo2397160acc, 0);
smo239716.addModifier(new VF.Dot(), 0);
smo239732v0ar.push(smo239716);
smo239732v0.addTickables(smo239732v0ar)
fmtsmo23973225.joinVoices([smo239732v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23726625.format([smo237266v0,smo238554v0,smo239732v0], 169);
const stavesmo237266 = new VF.Stave(574, 107.5133013333334, 183);
stavesmo237266.setAttribute('id', 'stavesmo237266');
stavesmo237266.setBegBarType(VF.Barline.type.NONE);
stavesmo237266.setContext(context);
stavesmo237266.draw();
smo237266v0.draw(context, stavesmo237266);
const stavesmo238554 = new VF.Stave(574, 214.5133013333334, 183);
stavesmo238554.setAttribute('id', 'stavesmo238554');
stavesmo238554.setBegBarType(VF.Barline.type.NONE);
stavesmo238554.setContext(context);
stavesmo238554.draw();
smo238554v0.draw(context, stavesmo238554);
const stavesmo239732 = new VF.Stave(574, 285.5133013333334, 183);
stavesmo239732.setAttribute('id', 'stavesmo239732');
stavesmo239732.setBegBarType(VF.Barline.type.NONE);
stavesmo239732.setContext(context);
stavesmo239732.draw();
smo239732v0.draw(context, stavesmo239732);
const fmtsmo23728526 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo237285v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237285v0ar = [];
const smo237267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237267.setAttribute('id', 'smo237267');
smo237267.addModifier(new VF.Dot(), 0);
const smo237268 = new VF.Annotation('schön');
smo237268.setAttribute('id', 'smo237268');
smo237268.setFont('Merriweather', 12, 'normal');
smo237268.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237267.addModifier(smo237268);
smo237268.addClass('lyric lyric-0');
const smo237269 = new VF.Annotation('führt');
smo237269.setAttribute('id', 'smo237269');
smo237269.setFont('Merriweather', 12, 'normal');
smo237269.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237267.addModifier(smo237269);
smo237269.addClass('lyric lyric-1');
smo237285v0ar.push(smo237267);
smo237285v0.addTickables(smo237285v0ar)
fmtsmo23728526.joinVoices([smo237285v0]);
const fmtsmo23857126 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo238571v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238571v0ar = [];
const smo238555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo238555.setAttribute('id', 'smo238555');
smo238555.addModifier(new VF.Dot(), 0);
smo238571v0ar.push(smo238555);
smo238571v0.addTickables(smo238571v0ar)
fmtsmo23857126.joinVoices([smo238571v0]);
const fmtsmo23974926 = new VF.Formatter();
//
// voices and notes for stave 2 26
const smo239749v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239749v0ar = [];
const smo239733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239733.setAttribute('id', 'smo239733');
smo239733.addModifier(new VF.Dot(), 0);
smo239749v0ar.push(smo239733);
smo239749v0.addTickables(smo239749v0ar)
fmtsmo23974926.joinVoices([smo239749v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23728526.format([smo237285v0,smo238571v0,smo239749v0], 72);
const stavesmo237285 = new VF.Stave(757, 107.5133013333334, 86);
stavesmo237285.setAttribute('id', 'stavesmo237285');
stavesmo237285.setBegBarType(VF.Barline.type.NONE);
stavesmo237285.setContext(context);
stavesmo237285.draw();
smo237285v0.draw(context, stavesmo237285);
const stavesmo238571 = new VF.Stave(757, 214.5133013333334, 86);
stavesmo238571.setAttribute('id', 'stavesmo238571');
stavesmo238571.setBegBarType(VF.Barline.type.NONE);
stavesmo238571.setContext(context);
stavesmo238571.draw();
smo238571v0.draw(context, stavesmo238571);
const stavesmo239749 = new VF.Stave(757, 285.5133013333334, 86);
stavesmo239749.setAttribute('id', 'stavesmo239749');
stavesmo239749.setBegBarType(VF.Barline.type.NONE);
stavesmo239749.setContext(context);
stavesmo239749.draw();
smo239749v0.draw(context, stavesmo239749);
const fmtsmo23731227 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo237312v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237312v0ar = [];
const smo237286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237286.setAttribute('id', 'smo237286');
const smo237287 = new VF.Annotation('-');
smo237287.setAttribute('id', 'smo237287');
smo237287.setFont('Merriweather', 12, 'normal');
smo237287.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237286.addModifier(smo237287);
smo237287.addClass('lyric lyric-0 lyric-hyphen');
smo237312v0ar.push(smo237286);
const smo237288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237288.setAttribute('id', 'smo237288');
const smo237289 = new VF.Annotation('wie');
smo237289.setAttribute('id', 'smo237289');
smo237289.setFont('Merriweather', 12, 'normal');
smo237289.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237288.addModifier(smo237289);
smo237289.addClass('lyric lyric-0');
const smo237290 = new VF.Annotation('ihn');
smo237290.setAttribute('id', 'smo237290');
smo237290.setFont('Merriweather', 12, 'normal');
smo237290.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237288.addModifier(smo237290);
smo237290.addClass('lyric lyric-1');
smo237312v0ar.push(smo237288);
const smo237291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237291.setAttribute('id', 'smo237291');
const smo237292 = new VF.Annotation('sonst');
smo237292.setAttribute('id', 'smo237292');
smo237292.setFont('Merriweather', 12, 'normal');
smo237292.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237291.addModifier(smo237292);
smo237292.addClass('lyric lyric-0');
const smo237293 = new VF.Annotation('mir');
smo237293.setAttribute('id', 'smo237293');
smo237293.setFont('Merriweather', 12, 'normal');
smo237293.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237291.addModifier(smo237293);
smo237293.addClass('lyric lyric-1');
smo237312v0ar.push(smo237291);
const smo237294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237294.setAttribute('id', 'smo237294');
const smo237295 = new VF.Annotation('kein');
smo237295.setAttribute('id', 'smo237295');
smo237295.setFont('Merriweather', 12, 'normal');
smo237295.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237294.addModifier(smo237295);
smo237295.addClass('lyric lyric-0');
const smo237296 = new VF.Annotation('zu');
smo237296.setAttribute('id', 'smo237296');
smo237296.setFont('Merriweather', 12, 'normal');
smo237296.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237294.addModifier(smo237296);
smo237296.addClass('lyric lyric-1 lyric-hyphen');
smo237312v0ar.push(smo237294);
smo237312v0.addTickables(smo237312v0ar)
fmtsmo23731227.joinVoices([smo237312v0]);
const fmtsmo23858827 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo238588v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238588v0ar = [];
const smo238572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo238572.setAttribute('id', 'smo238572');
smo238572.addModifier(new VF.Dot(), 0);
smo238588v0ar.push(smo238572);
smo238588v0.addTickables(smo238588v0ar)
fmtsmo23858827.joinVoices([smo238588v0]);
const fmtsmo23976627 = new VF.Formatter();
//
// voices and notes for stave 2 27
const smo239766v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239766v0ar = [];
const smo239750 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239750.setAttribute('id', 'smo239750');
smo239750.addModifier(new VF.Dot(), 0);
smo239766v0ar.push(smo239750);
smo239766v0.addTickables(smo239766v0ar)
fmtsmo23976627.joinVoices([smo239766v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23731227.format([smo237312v0,smo238588v0,smo239766v0], 230);
const stavesmo237312 = new VF.Stave(843, 107.5133013333334, 244);
stavesmo237312.setAttribute('id', 'stavesmo237312');
stavesmo237312.setBegBarType(VF.Barline.type.NONE);
stavesmo237312.setContext(context);
stavesmo237312.draw();
smo237312v0.draw(context, stavesmo237312);
const stavesmo238588 = new VF.Stave(843, 214.5133013333334, 244);
stavesmo238588.setAttribute('id', 'stavesmo238588');
stavesmo238588.setBegBarType(VF.Barline.type.NONE);
stavesmo238588.setContext(context);
stavesmo238588.draw();
smo238588v0.draw(context, stavesmo238588);
const stavesmo239766 = new VF.Stave(843, 285.5133013333334, 244);
stavesmo239766.setAttribute('id', 'stavesmo239766');
stavesmo239766.setBegBarType(VF.Barline.type.NONE);
stavesmo239766.setContext(context);
stavesmo239766.draw();
smo239766v0.draw(context, stavesmo239766);
const fmtsmo23733428 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo237334v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237334v0ar = [];
const smo237313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237313.setAttribute('id', 'smo237313');
smo237313.addModifier(new VF.Dot(), 0);
const smo237314 = new VF.Annotation('Po');
smo237314.setAttribute('id', 'smo237314');
smo237314.setFont('Merriweather', 12, 'normal');
smo237314.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237313.addModifier(smo237314);
smo237314.addClass('lyric lyric-0 lyric-hyphen');
const smo237315 = new VF.Annotation('rück');
smo237315.setAttribute('id', 'smo237315');
smo237315.setFont('Merriweather', 12, 'normal');
smo237315.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237313.addModifier(smo237315);
smo237315.addClass('lyric lyric-1');
smo237334v0ar.push(smo237313);
const smo237316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo237316.setAttribute('id', 'smo237316');
smo237316.addModifier(new VF.Dot(), 0);
const smo237317 = new VF.Annotation('stil');
smo237317.setAttribute('id', 'smo237317');
smo237317.setFont('Merriweather', 12, 'normal');
smo237317.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237316.addModifier(smo237317);
smo237317.addClass('lyric lyric-0 lyric-hyphen');
const smo237318 = new VF.Annotation('ins');
smo237318.setAttribute('id', 'smo237318');
smo237318.setFont('Merriweather', 12, 'normal');
smo237318.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237316.addModifier(smo237318);
smo237318.addClass('lyric lyric-1');
smo237334v0ar.push(smo237316);
smo237334v0.addTickables(smo237334v0ar)
fmtsmo23733428.joinVoices([smo237334v0]);
const fmtsmo23860528 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo238605v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238605v0ar = [];
const smo238589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","bn/4/n"]}'))
smo238589.setAttribute('id', 'smo238589');
smo238589.addModifier(new VF.Dot(), 0);
smo238589.addModifier(new VF.Dot(), 1);
smo238605v0ar.push(smo238589);
smo238605v0.addTickables(smo238605v0ar)
fmtsmo23860528.joinVoices([smo238605v0]);
const fmtsmo23978328 = new VF.Formatter();
//
// voices and notes for stave 2 28
const smo239783v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239783v0ar = [];
const smo239767 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo239767.setAttribute('id', 'smo239767');
smo239767.addModifier(new VF.Dot(), 0);
smo239783v0ar.push(smo239767);
smo239783v0.addTickables(smo239783v0ar)
fmtsmo23978328.joinVoices([smo239783v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23733428.format([smo237334v0,smo238605v0,smo239783v0], 113);
const stavesmo237334 = new VF.Stave(1087, 107.5133013333334, 127);
stavesmo237334.setAttribute('id', 'stavesmo237334');
stavesmo237334.setBegBarType(VF.Barline.type.NONE);
stavesmo237334.setContext(context);
stavesmo237334.draw();
smo237334v0.draw(context, stavesmo237334);
const stavesmo238605 = new VF.Stave(1087, 214.5133013333334, 127);
stavesmo238605.setAttribute('id', 'stavesmo238605');
stavesmo238605.setBegBarType(VF.Barline.type.NONE);
stavesmo238605.setContext(context);
stavesmo238605.draw();
smo238605v0.draw(context, stavesmo238605);
const stavesmo239783 = new VF.Stave(1087, 285.5133013333334, 127);
stavesmo239783.setAttribute('id', 'stavesmo239783');
stavesmo239783.setBegBarType(VF.Barline.type.NONE);
stavesmo239783.setContext(context);
stavesmo239783.draw();
smo239783v0.draw(context, stavesmo239783);
const rightsmo240440stavesmo2373342 = new VF.StaveConnector(stavesmo237334, stavesmo239783).setType(0);
rightsmo240440stavesmo2373342.setContext(context).draw();
const fmtsmo23735829 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo237358v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237358v0ar = [];
const smo237335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237335.setAttribute('id', 'smo237335');
smo237335.addModifier(new VF.Dot(), 0);
const smo237336 = new VF.Annotation('lion');
smo237336.setAttribute('id', 'smo237336');
smo237336.setFont('Merriweather', 12, 'normal');
smo237336.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237335.addModifier(smo237336);
smo237336.addClass('lyric lyric-0');
const smo237337 = new VF.Annotation('Häus,');
smo237337.setAttribute('id', 'smo237337');
smo237337.setFont('Merriweather', 12, 'normal');
smo237337.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237335.addModifier(smo237337);
smo237337.addClass('lyric lyric-1');
smo237358v0ar.push(smo237335);
const smo237338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237338.setAttribute('id', 'smo237338');
const smo237339 = new VF.Annotation('Häus');
smo237339.setAttribute('id', 'smo237339');
smo237339.setFont('Merriweather', 12, 'normal');
smo237339.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237338.addModifier(smo237339);
smo237339.addClass('lyric lyric-1');
smo237358v0ar.push(smo237338);
const smo237340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo237340.setAttribute('id', 'smo237340');
const smo237341 = new VF.Annotation('Es');
smo237341.setAttribute('id', 'smo237341');
smo237341.setFont('Merriweather', 12, 'normal');
smo237341.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237340.addModifier(smo237341);
smo237341.addClass('lyric lyric-0');
const smo237342 = new VF.Annotation('es');
smo237342.setAttribute('id', 'smo237342');
smo237342.setFont('Merriweather', 12, 'normal');
smo237342.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237340.addModifier(smo237342);
smo237342.addClass('lyric lyric-1');
smo237358v0ar.push(smo237340);
smo237358v0.addTickables(smo237358v0ar)
fmtsmo23735829.joinVoices([smo237358v0]);
const fmtsmo23862429 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo238624v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238624v0ar = [];
const smo238606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","bn/4/n"]}'))
smo238606.setAttribute('id', 'smo238606');
smo238606.addModifier(new VF.Dot(), 0);
smo238606.addModifier(new VF.Dot(), 1);
smo238624v0ar.push(smo238606);
const smo238607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238607.setAttribute('id', 'smo238607');
smo238624v0ar.push(smo238607);
const smo238608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238608.setAttribute('id', 'smo238608');
smo238624v0ar.push(smo238608);
smo238624v0.addTickables(smo238624v0ar)
fmtsmo23862429.joinVoices([smo238624v0]);
const fmtsmo23980229 = new VF.Formatter();
//
// voices and notes for stave 2 29
const smo239802v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239802v0ar = [];
const smo239784 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo239784.setAttribute('id', 'smo239784');
smo239784.addModifier(new VF.Dot(), 0);
smo239802v0ar.push(smo239784);
const smo239785 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239785.setAttribute('id', 'smo239785');
smo239802v0ar.push(smo239785);
const smo239786 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239786.setAttribute('id', 'smo239786');
smo239802v0ar.push(smo239786);
smo239802v0.addTickables(smo239802v0ar)
fmtsmo23980229.joinVoices([smo239802v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23735829.format([smo237358v0,smo238624v0,smo239802v0], 218);
const stavesmo237358 = new VF.Stave(66, 398.5133013333334, 291);
stavesmo237358.setAttribute('id', 'stavesmo237358');
stavesmo237358.setBegBarType(1);
stavesmo237358.addClef('treble');
const keysmo237358 = new VF.KeySignature('G');
keysmo237358.addToStave(stavesmo237358);
stavesmo237358.setContext(context);
stavesmo237358.draw();
smo237358v0.draw(context, stavesmo237358);
const stavesmo238624 = new VF.Stave(66, 520.5133013333334, 291);
stavesmo238624.setAttribute('id', 'stavesmo238624');
stavesmo238624.setBegBarType(1);
stavesmo238624.addClef('treble');
const keysmo238624 = new VF.KeySignature('G');
keysmo238624.addToStave(stavesmo238624);
stavesmo238624.setContext(context);
stavesmo238624.draw();
smo238624v0.draw(context, stavesmo238624);
const stavesmo239802 = new VF.Stave(66, 643.5133013333334, 291);
stavesmo239802.setAttribute('id', 'stavesmo239802');
stavesmo239802.setBegBarType(1);
stavesmo239802.addClef('bass');
const keysmo239802 = new VF.KeySignature('G');
keysmo239802.addToStave(stavesmo239802);
stavesmo239802.setContext(context);
stavesmo239802.draw();
smo239802v0.draw(context, stavesmo239802);
const leftsmo240440stavesmo2373582 = new VF.StaveConnector(stavesmo237358, stavesmo239802).setType(1);
leftsmo240440stavesmo2373582.setContext(context).draw();
const fmtsmo23737730 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo237377v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237377v0ar = [];
const smo237359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237359.setAttribute('id', 'smo237359');
smo237359.addModifier(new VF.Dot(), 0);
const smo237361 = new VF.Annotation('klingt');
smo237361.setAttribute('id', 'smo237361');
smo237361.setFont('Merriweather', 12, 'normal');
smo237361.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237359.addModifier(smo237361);
smo237361.addClass('lyric lyric-0');
const smo237360 = new VF.Annotation('sagt');
smo237360.setAttribute('id', 'smo237360');
smo237360.setFont('Merriweather', 12, 'normal');
smo237360.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237359.addModifier(smo237360);
smo237360.addClass('lyric lyric-1');
smo237377v0ar.push(smo237359);
smo237377v0.addTickables(smo237377v0ar)
fmtsmo23737730.joinVoices([smo237377v0]);
const fmtsmo23864130 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo238641v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238641v0ar = [];
const smo238625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo238625.setAttribute('id', 'smo238625');
smo238625.addModifier(new VF.Dot(), 0);
smo238641v0ar.push(smo238625);
smo238641v0.addTickables(smo238641v0ar)
fmtsmo23864130.joinVoices([smo238641v0]);
const fmtsmo23982330 = new VF.Formatter();
//
// voices and notes for stave 2 30
const smo239823v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239823v0ar = [];
const smo239803 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo239803.setAttribute('id', 'smo239803');
smo239803.addModifier(new VF.Dot(), 0);
smo239823v0ar.push(smo239803);
smo239823v0.addTickables(smo239823v0ar)
fmtsmo23982330.joinVoices([smo239823v0]);
const smo239823v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239823v1ar = [];
const smo239804 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo239804.setAttribute('id', 'smo239804');
smo239804.setStyle({ fillStyle: "#115511" });
smo239823v1ar.push(smo239804);
const smo239805 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo239805.setAttribute('id', 'smo239805');
smo239805.setStyle({ fillStyle: "#115511" });
smo239823v1ar.push(smo239805);
const smo239806 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo239806.setAttribute('id', 'smo239806');
smo239806.setStyle({ fillStyle: "#115511" });
smo239823v1ar.push(smo239806);
const smo239807 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo239807.setAttribute('id', 'smo239807');
smo239807.setStyle({ fillStyle: "#115511" });
smo239823v1ar.push(smo239807);
smo239823v1.addTickables(smo239823v1ar)
fmtsmo23982330.joinVoices([smo239823v1]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23737730.format([smo237377v0,smo238641v0,smo239823v0,smo239823v1], 197);
const stavesmo237377 = new VF.Stave(357, 398.5133013333334, 211);
stavesmo237377.setAttribute('id', 'stavesmo237377');
stavesmo237377.setBegBarType(VF.Barline.type.NONE);
stavesmo237377.setContext(context);
stavesmo237377.draw();
smo237377v0.draw(context, stavesmo237377);
const stavesmo238641 = new VF.Stave(357, 520.5133013333334, 211);
stavesmo238641.setAttribute('id', 'stavesmo238641');
stavesmo238641.setBegBarType(VF.Barline.type.NONE);
stavesmo238641.setContext(context);
stavesmo238641.draw();
smo238641v0.draw(context, stavesmo238641);
const stavesmo239823 = new VF.Stave(357, 643.5133013333334, 211);
stavesmo239823.setAttribute('id', 'stavesmo239823');
stavesmo239823.setBegBarType(VF.Barline.type.NONE);
stavesmo239823.setContext(context);
stavesmo239823.draw();
smo239823v0.draw(context, stavesmo239823);
smo239823v1.draw(context, stavesmo239823);
const fmtsmo23740531 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo237405v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237405v0ar = [];
const smo237378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237378.setAttribute('id', 'smo237378');
const smo237379 = new VF.Annotation('-');
smo237379.setAttribute('id', 'smo237379');
smo237379.setFont('Merriweather', 12, 'normal');
smo237379.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237378.addModifier(smo237379);
smo237379.addClass('lyric lyric-0 lyric-hyphen');
const smo237380 = new VF.Annotation('-');
smo237380.setAttribute('id', 'smo237380');
smo237380.setFont('Merriweather', 12, 'normal');
smo237380.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237378.addModifier(smo237380);
smo237380.addClass('lyric lyric-1 lyric-hyphen');
smo237405v0ar.push(smo237378);
const smo237381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237381.setAttribute('id', 'smo237381');
const smo237382 = new VF.Annotation('wenn');
smo237382.setAttribute('id', 'smo237382');
smo237382.setFont('Merriweather', 12, 'normal');
smo237382.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237381.addModifier(smo237382);
smo237382.addClass('lyric lyric-0');
const smo237383 = new VF.Annotation('zu');
smo237383.setAttribute('id', 'smo237383');
smo237383.setFont('Merriweather', 12, 'normal');
smo237383.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237381.addModifier(smo237383);
smo237383.addClass('lyric lyric-1');
smo237405v0ar.push(smo237381);
const smo237384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237384.setAttribute('id', 'smo237384');
const smo237385 = new VF.Annotation('es');
smo237385.setAttribute('id', 'smo237385');
smo237385.setFont('Merriweather', 12, 'normal');
smo237385.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237384.addModifier(smo237385);
smo237385.addClass('lyric lyric-0');
const smo237386 = new VF.Annotation('ihm');
smo237386.setAttribute('id', 'smo237386');
smo237386.setFont('Merriweather', 12, 'normal');
smo237386.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237384.addModifier(smo237386);
smo237386.addClass('lyric lyric-1');
smo237405v0ar.push(smo237384);
const smo237387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237387.setAttribute('id', 'smo237387');
const smo237388 = new VF.Annotation('von');
smo237388.setAttribute('id', 'smo237388');
smo237388.setFont('Merriweather', 12, 'normal');
smo237388.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237387.addModifier(smo237388);
smo237388.addClass('lyric lyric-0');
const smo237389 = new VF.Annotation('Denk\'');
smo237389.setAttribute('id', 'smo237389');
smo237389.setFont('Merriweather', 12, 'normal');
smo237389.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237387.addModifier(smo237389);
smo237389.addClass('lyric lyric-1');
smo237405v0ar.push(smo237387);
smo237405v0.addTickables(smo237405v0ar)
fmtsmo23740531.joinVoices([smo237405v0]);
const fmtsmo23865931 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo238659v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238659v0ar = [];
const smo238642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo238642.setAttribute('id', 'smo238642');
smo238642.addModifier(new VF.Dot(), 0);
smo238659v0ar.push(smo238642);
const smo238643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
smo238643.setAttribute('id', 'smo238643');
smo238643.addModifier(new VF.Dot(), 0);
smo238659v0ar.push(smo238643);
smo238659v0.addTickables(smo238659v0ar)
fmtsmo23865931.joinVoices([smo238659v0]);
const fmtsmo23984431 = new VF.Formatter();
//
// voices and notes for stave 2 31
const smo239844v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239844v0ar = [];
const smo239824 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo239824.setAttribute('id', 'smo239824');
smo239824.addModifier(new VF.Dot(), 0);
smo239844v0ar.push(smo239824);
smo239844v0.addTickables(smo239844v0ar)
fmtsmo23984431.joinVoices([smo239844v0]);
const smo239844v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239844v1ar = [];
const smo239825 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo239825.setAttribute('id', 'smo239825');
smo239825.setStyle({ fillStyle: "#115511" });
smo239844v1ar.push(smo239825);
const smo239826 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo239826.setAttribute('id', 'smo239826');
smo239826.setStyle({ fillStyle: "#115511" });
smo239844v1ar.push(smo239826);
const smo239827 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo239827.setAttribute('id', 'smo239827');
smo239827.setStyle({ fillStyle: "#115511" });
smo239844v1ar.push(smo239827);
const smo239828 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo239828.setAttribute('id', 'smo239828');
smo239828.setStyle({ fillStyle: "#115511" });
smo239844v1ar.push(smo239828);
smo239844v1.addTickables(smo239844v1ar)
fmtsmo23984431.joinVoices([smo239844v1]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23740531.format([smo237405v0,smo238659v0,smo239844v0,smo239844v1], 293);
const stavesmo237405 = new VF.Stave(568, 398.5133013333334, 307);
stavesmo237405.setAttribute('id', 'stavesmo237405');
stavesmo237405.setBegBarType(VF.Barline.type.NONE);
stavesmo237405.setContext(context);
stavesmo237405.draw();
smo237405v0.draw(context, stavesmo237405);
const stavesmo238659 = new VF.Stave(568, 520.5133013333334, 307);
stavesmo238659.setAttribute('id', 'stavesmo238659');
stavesmo238659.setBegBarType(VF.Barline.type.NONE);
stavesmo238659.setContext(context);
stavesmo238659.draw();
smo238659v0.draw(context, stavesmo238659);
const stavesmo239844 = new VF.Stave(568, 643.5133013333334, 307);
stavesmo239844.setAttribute('id', 'stavesmo239844');
stavesmo239844.setBegBarType(VF.Barline.type.NONE);
stavesmo239844.setContext(context);
stavesmo239844.draw();
smo239844v0.draw(context, stavesmo239844);
smo239844v1.draw(context, stavesmo239844);
const fmtsmo23743332 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo237433v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237433v0ar = [];
const smo237406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237406.setAttribute('id', 'smo237406');
const smo237407 = new VF.Annotation('fer');
smo237407.setAttribute('id', 'smo237407');
smo237407.setFont('Merriweather', 12, 'normal');
smo237407.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237406.addModifier(smo237407);
smo237407.addClass('lyric lyric-0 lyric-hyphen');
const smo237408 = new VF.Annotation('im');
smo237408.setAttribute('id', 'smo237408');
smo237408.setFont('Merriweather', 12, 'normal');
smo237408.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237406.addModifier(smo237408);
smo237408.addClass('lyric lyric-1 lyric-hyphen');
smo237433v0ar.push(smo237406);
const smo237409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237409.setAttribute('id', 'smo237409');
const smo237410 = new VF.Annotation('ne');
smo237410.setAttribute('id', 'smo237410');
smo237410.setFont('Merriweather', 12, 'normal');
smo237410.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237409.addModifier(smo237410);
smo237410.addClass('lyric lyric-0');
const smo237411 = new VF.Annotation('mer');
smo237411.setAttribute('id', 'smo237411');
smo237411.setFont('Merriweather', 12, 'normal');
smo237411.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237409.addModifier(smo237411);
smo237411.addClass('lyric lyric-1');
smo237433v0ar.push(smo237409);
const smo237412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo237412.setAttribute('id', 'smo237412');
const smo237413 = new VF.Annotation('er');
smo237413.setAttribute('id', 'smo237413');
smo237413.setFont('Merriweather', 12, 'normal');
smo237413.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237412.addModifier(smo237413);
smo237413.addClass('lyric lyric-0 lyric-hyphen');
const smo237414 = new VF.Annotation('an');
smo237414.setAttribute('id', 'smo237414');
smo237414.setFont('Merriweather', 12, 'normal');
smo237414.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237412.addModifier(smo237414);
smo237414.addClass('lyric lyric-1');
smo237433v0ar.push(smo237412);
const smo237415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237415.setAttribute('id', 'smo237415');
smo237415.addModifier(new VF.Dot(), 0);
const smo237417 = new VF.Annotation('schalit');
smo237417.setAttribute('id', 'smo237417');
smo237417.setFont('Merriweather', 12, 'normal');
smo237417.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237415.addModifier(smo237417);
smo237417.addClass('lyric lyric-0');
const smo237416 = new VF.Annotation('mich');
smo237416.setAttribute('id', 'smo237416');
smo237416.setFont('Merriweather', 12, 'normal');
smo237416.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237415.addModifier(smo237416);
smo237416.addClass('lyric lyric-1');
smo237433v0ar.push(smo237415);
smo237433v0.addTickables(smo237433v0ar)
fmtsmo23743332.joinVoices([smo237433v0]);
const fmtsmo23867632 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo238676v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238676v0ar = [];
const smo238660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo238660.setAttribute('id', 'smo238660');
smo238660.addModifier(new VF.Dot(), 0);
smo238676v0ar.push(smo238660);
smo238676v0.addTickables(smo238676v0ar)
fmtsmo23867632.joinVoices([smo238676v0]);
const fmtsmo23986532 = new VF.Formatter();
//
// voices and notes for stave 2 32
const smo239865v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239865v0ar = [];
const smo239845 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo239845.setAttribute('id', 'smo239845');
smo239845.addModifier(new VF.Dot(), 0);
smo239865v0ar.push(smo239845);
smo239865v0.addTickables(smo239865v0ar)
fmtsmo23986532.joinVoices([smo239865v0]);
const smo239865v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239865v1ar = [];
const smo239846 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo239846.setAttribute('id', 'smo239846');
smo239846.setStyle({ fillStyle: "#115511" });
const smo2398460acc = new VF.Accidental('#');
smo239846.addModifier(smo2398460acc, 0);
smo239865v1ar.push(smo239846);
const smo239847 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo239847.setAttribute('id', 'smo239847');
smo239847.setStyle({ fillStyle: "#115511" });
smo239865v1ar.push(smo239847);
const smo239848 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo239848.setAttribute('id', 'smo239848');
smo239848.setStyle({ fillStyle: "#115511" });
smo239865v1ar.push(smo239848);
const smo239849 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo239849.setAttribute('id', 'smo239849');
smo239849.setStyle({ fillStyle: "#115511" });
smo239865v1ar.push(smo239849);
smo239865v1.addTickables(smo239865v1ar)
fmtsmo23986532.joinVoices([smo239865v1]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246631 = smo237406.getStemDirection();
smo237406.setStemDirection(dirsmo246631);
smo237409.setStemDirection(dirsmo246631);
smo237412.setStemDirection(dirsmo246631);
const smo246631 = new VF.Beam([smo237406,smo237409,smo237412]);
 
// formatting measures in staff group smo240440
fmtsmo23743332.format([smo237433v0,smo238676v0,smo239865v0,smo239865v1], 321);
const stavesmo237433 = new VF.Stave(875, 398.5133013333334, 335);
stavesmo237433.setAttribute('id', 'stavesmo237433');
stavesmo237433.setBegBarType(VF.Barline.type.NONE);
stavesmo237433.setContext(context);
stavesmo237433.draw();
smo237433v0.draw(context, stavesmo237433);
smo246631.setContext(context);
smo246631.draw();
const stavesmo238676 = new VF.Stave(875, 520.5133013333334, 335);
stavesmo238676.setAttribute('id', 'stavesmo238676');
stavesmo238676.setBegBarType(VF.Barline.type.NONE);
stavesmo238676.setContext(context);
stavesmo238676.draw();
smo238676v0.draw(context, stavesmo238676);
const stavesmo239865 = new VF.Stave(875, 643.5133013333334, 335);
stavesmo239865.setAttribute('id', 'stavesmo239865');
stavesmo239865.setBegBarType(VF.Barline.type.NONE);
stavesmo239865.setContext(context);
stavesmo239865.draw();
smo239865v0.draw(context, stavesmo239865);
smo239865v1.draw(context, stavesmo239865);
const rightsmo240440stavesmo2374332 = new VF.StaveConnector(stavesmo237433, stavesmo239865).setType(0);
rightsmo240440stavesmo2374332.setContext(context).draw();
const fmtsmo23746333 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo237463v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237463v0ar = [];
const smo237434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237434.setAttribute('id', 'smo237434');
const smo237435 = new VF.Annotation('-');
smo237435.setAttribute('id', 'smo237435');
smo237435.setFont('Merriweather', 12, 'normal');
smo237435.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237434.addModifier(smo237435);
smo237435.addClass('lyric lyric-0 lyric-hyphen');
smo237463v0ar.push(smo237434);
const smo237436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo237436.setAttribute('id', 'smo237436');
const smo237437 = new VF.Annotation('ais');
smo237437.setAttribute('id', 'smo237437');
smo237437.setFont('Merriweather', 12, 'normal');
smo237437.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237436.addModifier(smo237437);
smo237437.addClass('lyric lyric-0');
const smo237438 = new VF.Annotation('du');
smo237438.setAttribute('id', 'smo237438');
smo237438.setFont('Merriweather', 12, 'normal');
smo237438.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237436.addModifier(smo237438);
smo237438.addClass('lyric lyric-1');
smo237463v0ar.push(smo237436);
const smo237439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo237439.setAttribute('id', 'smo237439');
const smo237440 = new VF.Annotation('ruit');
smo237440.setAttribute('id', 'smo237440');
smo237440.setFont('Merriweather', 12, 'normal');
smo237440.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237439.addModifier(smo237440);
smo237440.addClass('lyric lyric-0');
const smo237441 = new VF.Annotation('weißt');
smo237441.setAttribute('id', 'smo237441');
smo237441.setFont('Merriweather', 12, 'normal');
smo237441.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237439.addModifier(smo237441);
smo237441.addClass('lyric lyric-1');
smo237463v0ar.push(smo237439);
const smo237442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237442.setAttribute('id', 'smo237442');
const smo237443 = new VF.Annotation('er');
smo237443.setAttribute('id', 'smo237443');
smo237443.setFont('Merriweather', 12, 'normal');
smo237443.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237442.addModifier(smo237443);
smo237443.addClass('lyric lyric-0');
const smo237444 = new VF.Annotation('doch,');
smo237444.setAttribute('id', 'smo237444');
smo237444.setFont('Merriweather', 12, 'normal');
smo237444.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237442.addModifier(smo237444);
smo237444.addClass('lyric lyric-1');
smo237463v0ar.push(smo237442);
const smo237445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237445.setAttribute('id', 'smo237445');
const smo237446 = new VF.Annotation('Ich');
smo237446.setAttribute('id', 'smo237446');
smo237446.setFont('Merriweather', 12, 'normal');
smo237446.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237445.addModifier(smo237446);
smo237446.addClass('lyric lyric-0');
const smo237447 = new VF.Annotation('ich');
smo237447.setAttribute('id', 'smo237447');
smo237447.setFont('Merriweather', 12, 'normal');
smo237447.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237445.addModifier(smo237447);
smo237447.addClass('lyric lyric-1');
smo237463v0ar.push(smo237445);
smo237463v0.addTickables(smo237463v0ar)
fmtsmo23746333.joinVoices([smo237463v0]);
const fmtsmo23869633 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo238696v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238696v0ar = [];
const smo238677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo238677.setAttribute('id', 'smo238677');
smo238696v0ar.push(smo238677);
const smo238678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo238678.setAttribute('id', 'smo238678');
smo238696v0ar.push(smo238678);
const smo238679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo238679.setAttribute('id', 'smo238679');
smo238696v0ar.push(smo238679);
const smo238680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo238680.setAttribute('id', 'smo238680');
smo238696v0ar.push(smo238680);
smo238696v0.addTickables(smo238696v0ar)
fmtsmo23869633.joinVoices([smo238696v0]);
const fmtsmo23988633 = new VF.Formatter();
//
// voices and notes for stave 2 33
const smo239886v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239886v0ar = [];
const smo239866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo239866.setAttribute('id', 'smo239866');
smo239866.addModifier(new VF.Dot(), 0);
smo239886v0ar.push(smo239866);
smo239886v0.addTickables(smo239886v0ar)
fmtsmo23988633.joinVoices([smo239886v0]);
const smo239886v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239886v1ar = [];
const smo239867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo239867.setAttribute('id', 'smo239867');
smo239867.setStyle({ fillStyle: "#115511" });
const smo2398670acc = new VF.Accidental('#');
smo239867.addModifier(smo2398670acc, 0);
smo239886v1ar.push(smo239867);
const smo239868 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo239868.setAttribute('id', 'smo239868');
smo239868.setStyle({ fillStyle: "#115511" });
smo239886v1ar.push(smo239868);
const smo239869 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo239869.setAttribute('id', 'smo239869');
smo239869.setStyle({ fillStyle: "#115511" });
smo239886v1ar.push(smo239869);
const smo239870 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo239870.setAttribute('id', 'smo239870');
smo239870.setStyle({ fillStyle: "#115511" });
smo239886v1ar.push(smo239870);
smo239886v1.addTickables(smo239886v1ar)
fmtsmo23988633.joinVoices([smo239886v1]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246645 = smo237439.getStemDirection();
smo237439.setStemDirection(dirsmo246645);
smo237442.setStemDirection(dirsmo246645);
smo237445.setStemDirection(dirsmo246645);
const smo246645 = new VF.Beam([smo237439,smo237442,smo237445]);
 
// formatting measures in staff group smo240440
fmtsmo23746333.format([smo237463v0,smo238696v0,smo239886v0,smo239886v1], 293);
const stavesmo237463 = new VF.Stave(66, 778.5133013333334, 367);
stavesmo237463.setAttribute('id', 'stavesmo237463');
stavesmo237463.setBegBarType(1);
stavesmo237463.addClef('treble');
const keysmo237463 = new VF.KeySignature('G');
keysmo237463.addToStave(stavesmo237463);
stavesmo237463.setContext(context);
stavesmo237463.draw();
smo237463v0.draw(context, stavesmo237463);
smo246645.setContext(context);
smo246645.draw();
const stavesmo238696 = new VF.Stave(66, 893.5133013333334, 367);
stavesmo238696.setAttribute('id', 'stavesmo238696');
stavesmo238696.setBegBarType(1);
stavesmo238696.addClef('treble');
const keysmo238696 = new VF.KeySignature('G');
keysmo238696.addToStave(stavesmo238696);
stavesmo238696.setContext(context);
stavesmo238696.draw();
smo238696v0.draw(context, stavesmo238696);
const stavesmo239886 = new VF.Stave(66, 1026.5133013333334, 367);
stavesmo239886.setAttribute('id', 'stavesmo239886');
stavesmo239886.setBegBarType(1);
stavesmo239886.addClef('bass');
const keysmo239886 = new VF.KeySignature('G');
keysmo239886.addToStave(stavesmo239886);
stavesmo239886.setContext(context);
stavesmo239886.draw();
smo239886v0.draw(context, stavesmo239886);
smo239886v1.draw(context, stavesmo239886);
const leftsmo240440stavesmo2374632 = new VF.StaveConnector(stavesmo237463, stavesmo239886).setType(1);
leftsmo240440stavesmo2374632.setContext(context).draw();
const fmtsmo23748834 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo237488v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237488v0ar = [];
const smo237464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237464.setAttribute('id', 'smo237464');
const smo237465 = new VF.Annotation('kom');
smo237465.setAttribute('id', 'smo237465');
smo237465.setFont('Merriweather', 12, 'normal');
smo237465.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237464.addModifier(smo237465);
smo237465.addClass('lyric lyric-0 lyric-hyphen');
const smo237466 = new VF.Annotation('lie');
smo237466.setAttribute('id', 'smo237466');
smo237466.setFont('Merriweather', 12, 'normal');
smo237466.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237464.addModifier(smo237466);
smo237466.addClass('lyric lyric-1 lyric-hyphen');
smo237488v0ar.push(smo237464);
const smo237467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237467.setAttribute('id', 'smo237467');
const smo237468 = new VF.Annotation('me');
smo237468.setAttribute('id', 'smo237468');
smo237468.setFont('Merriweather', 12, 'normal');
smo237468.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237467.addModifier(smo237468);
smo237468.addClass('lyric lyric-0');
const smo237469 = new VF.Annotation('be');
smo237469.setAttribute('id', 'smo237469');
smo237469.setFont('Merriweather', 12, 'normal');
smo237469.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237467.addModifier(smo237469);
smo237469.addClass('lyric lyric-1 lyric-hyphen');
smo237488v0ar.push(smo237467);
const smo237470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237470.setAttribute('id', 'smo237470');
smo237470.addModifier(new VF.Dot(), 0);
const smo237472 = new VF.Annotation('bald!');
smo237472.setAttribute('id', 'smo237472');
smo237472.setFont('Merriweather', 12, 'normal');
smo237472.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237470.addModifier(smo237472);
smo237472.addClass('lyric lyric-0');
const smo237471 = new VF.Annotation('dich!');
smo237471.setAttribute('id', 'smo237471');
smo237471.setFont('Merriweather', 12, 'normal');
smo237471.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237470.addModifier(smo237471);
smo237471.addClass('lyric lyric-1');
smo237488v0ar.push(smo237470);
smo237488v0.addTickables(smo237488v0ar)
fmtsmo23748834.joinVoices([smo237488v0]);
const fmtsmo23871534 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo238715v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238715v0ar = [];
const smo238697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo238697.setAttribute('id', 'smo238697');
smo238697.addModifier(new VF.Dot(), 0);
smo238715v0ar.push(smo238697);
const smo238698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238698.setAttribute('id', 'smo238698');
smo238715v0ar.push(smo238698);
const smo238699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238699.setAttribute('id', 'smo238699');
smo238715v0ar.push(smo238699);
smo238715v0.addTickables(smo238715v0ar)
fmtsmo23871534.joinVoices([smo238715v0]);
const fmtsmo23990434 = new VF.Formatter();
//
// voices and notes for stave 2 34
const smo239904v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239904v0ar = [];
const smo239887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo239887.setAttribute('id', 'smo239887');
smo239887.addModifier(new VF.Dot(), 0);
smo239904v0ar.push(smo239887);
smo239904v0.addTickables(smo239904v0ar)
fmtsmo23990434.joinVoices([smo239904v0]);
const smo239904v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239904v1ar = [];
const smo239888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo239888.setAttribute('id', 'smo239888');
smo239888.setStyle({ fillStyle: "#115511" });
smo239888.addModifier(new VF.Dot(), 0);
smo239904v1ar.push(smo239888);
smo239904v1.addTickables(smo239904v1ar)
fmtsmo23990434.joinVoices([smo239904v1]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23748834.format([smo237488v0,smo238715v0,smo239904v0,smo239904v1], 200);
const stavesmo237488 = new VF.Stave(433, 778.5133013333334, 214);
stavesmo237488.setAttribute('id', 'stavesmo237488');
stavesmo237488.setBegBarType(VF.Barline.type.NONE);
stavesmo237488.setContext(context);
stavesmo237488.draw();
smo237488v0.draw(context, stavesmo237488);
const stavesmo238715 = new VF.Stave(433, 893.5133013333334, 214);
stavesmo238715.setAttribute('id', 'stavesmo238715');
stavesmo238715.setBegBarType(VF.Barline.type.NONE);
stavesmo238715.setContext(context);
stavesmo238715.draw();
smo238715v0.draw(context, stavesmo238715);
const stavesmo239904 = new VF.Stave(433, 1026.5133013333334, 214);
stavesmo239904.setAttribute('id', 'stavesmo239904');
stavesmo239904.setBegBarType(VF.Barline.type.NONE);
stavesmo239904.setContext(context);
stavesmo239904.draw();
smo239904v0.draw(context, stavesmo239904);
smo239904v1.draw(context, stavesmo239904);
const fmtsmo23751035 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo237510v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237510v0ar = [];
const smo237489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237489.setAttribute('id', 'smo237489');
smo237489.addModifier(new VF.Dot(), 0);
const smo237490 = new VF.Annotation('-');
smo237490.setAttribute('id', 'smo237490');
smo237490.setFont('Merriweather', 12, 'normal');
smo237490.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237489.addModifier(smo237490);
smo237490.addClass('lyric lyric-0 lyric-hyphen');
smo237510v0ar.push(smo237489);
const smo237491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237491.setAttribute('id', 'smo237491');
smo237510v0ar.push(smo237491);
const smo237492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237492.setAttribute('id', 'smo237492');
const smo237493 = new VF.Annotation('Ich');
smo237493.setAttribute('id', 'smo237493');
smo237493.setFont('Merriweather', 12, 'normal');
smo237493.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237492.addModifier(smo237493);
smo237493.addClass('lyric lyric-0');
const smo237494 = new VF.Annotation('ich');
smo237494.setAttribute('id', 'smo237494');
smo237494.setFont('Merriweather', 12, 'normal');
smo237494.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237492.addModifier(smo237494);
smo237494.addClass('lyric lyric-1');
smo237510v0ar.push(smo237492);
smo237510v0.addTickables(smo237510v0ar)
fmtsmo23751035.joinVoices([smo237510v0]);
const fmtsmo23873235 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo238732v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238732v0ar = [];
const smo238716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo238716.setAttribute('id', 'smo238716');
smo238716.addModifier(new VF.Dot(), 0);
smo238732v0ar.push(smo238716);
smo238732v0.addTickables(smo238732v0ar)
fmtsmo23873235.joinVoices([smo238732v0]);
const fmtsmo23992435 = new VF.Formatter();
//
// voices and notes for stave 2 35
const smo239924v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239924v0ar = [];
const smo239905 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo239905.setAttribute('id', 'smo239905');
smo239905.addModifier(new VF.Dot(), 0);
smo239924v0ar.push(smo239905);
smo239924v0.addTickables(smo239924v0ar)
fmtsmo23992435.joinVoices([smo239924v0]);
const smo239924v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239924v1ar = [];
const smo239906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo239906.setAttribute('id', 'smo239906');
smo239906.setStyle({ fillStyle: "#115511" });
smo239924v1ar.push(smo239906);
const smo239907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo239907.setAttribute('id', 'smo239907');
smo239907.setStyle({ fillStyle: "#115511" });
smo239924v1ar.push(smo239907);
const smo239908 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo239908.setAttribute('id', 'smo239908');
smo239908.setStyle({ fillStyle: "#115511" });
smo239908.addModifier(new VF.Dot(), 0);
smo239924v1ar.push(smo239908);
smo239924v1.addTickables(smo239924v1ar)
fmtsmo23992435.joinVoices([smo239924v1]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23751035.format([smo237510v0,smo238732v0,smo239924v0,smo239924v1], 155);
const stavesmo237510 = new VF.Stave(647, 778.5133013333334, 169);
stavesmo237510.setAttribute('id', 'stavesmo237510');
stavesmo237510.setBegBarType(VF.Barline.type.NONE);
stavesmo237510.setContext(context);
stavesmo237510.draw();
smo237510v0.draw(context, stavesmo237510);
const stavesmo238732 = new VF.Stave(647, 893.5133013333334, 169);
stavesmo238732.setAttribute('id', 'stavesmo238732');
stavesmo238732.setBegBarType(VF.Barline.type.NONE);
stavesmo238732.setContext(context);
stavesmo238732.draw();
smo238732v0.draw(context, stavesmo238732);
const stavesmo239924 = new VF.Stave(647, 1026.5133013333334, 169);
stavesmo239924.setAttribute('id', 'stavesmo239924');
stavesmo239924.setBegBarType(VF.Barline.type.NONE);
stavesmo239924.setContext(context);
stavesmo239924.draw();
smo239924v0.draw(context, stavesmo239924);
smo239924v1.draw(context, stavesmo239924);
const fmtsmo23753536 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo237535v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237535v0ar = [];
const smo237511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237511.setAttribute('id', 'smo237511');
const smo237512 = new VF.Annotation('kom');
smo237512.setAttribute('id', 'smo237512');
smo237512.setFont('Merriweather', 12, 'normal');
smo237512.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237511.addModifier(smo237512);
smo237512.addClass('lyric lyric-0 lyric-hyphen');
const smo237513 = new VF.Annotation('lie');
smo237513.setAttribute('id', 'smo237513');
smo237513.setFont('Merriweather', 12, 'normal');
smo237513.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237511.addModifier(smo237513);
smo237513.addClass('lyric lyric-1 lyric-hyphen');
smo237535v0ar.push(smo237511);
const smo237514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237514.setAttribute('id', 'smo237514');
const smo237515 = new VF.Annotation('me');
smo237515.setAttribute('id', 'smo237515');
smo237515.setFont('Merriweather', 12, 'normal');
smo237515.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237514.addModifier(smo237515);
smo237515.addClass('lyric lyric-0');
const smo237516 = new VF.Annotation('be');
smo237516.setAttribute('id', 'smo237516');
smo237516.setFont('Merriweather', 12, 'normal');
smo237516.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237514.addModifier(smo237516);
smo237516.addClass('lyric lyric-1');
smo237535v0ar.push(smo237514);
const smo237517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237517.setAttribute('id', 'smo237517');
smo237517.addModifier(new VF.Dot(), 0);
const smo237518 = new VF.Annotation('bald');
smo237518.setAttribute('id', 'smo237518');
smo237518.setFont('Merriweather', 12, 'normal');
smo237518.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237517.addModifier(smo237518);
smo237518.addClass('lyric lyric-0');
const smo237519 = new VF.Annotation('dich!');
smo237519.setAttribute('id', 'smo237519');
smo237519.setFont('Merriweather', 12, 'normal');
smo237519.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237517.addModifier(smo237519);
smo237519.addClass('lyric lyric-1');
smo237535v0ar.push(smo237517);
smo237535v0.addTickables(smo237535v0ar)
fmtsmo23753536.joinVoices([smo237535v0]);
const fmtsmo23874936 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo238749v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238749v0ar = [];
const smo238733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo238733.setAttribute('id', 'smo238733');
smo238733.addModifier(new VF.Dot(), 0);
smo238749v0ar.push(smo238733);
smo238749v0.addTickables(smo238749v0ar)
fmtsmo23874936.joinVoices([smo238749v0]);
const fmtsmo23994436 = new VF.Formatter();
//
// voices and notes for stave 2 36
const smo239944v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239944v0ar = [];
const smo239925 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo239925.setAttribute('id', 'smo239925');
smo239925.addModifier(new VF.Dot(), 0);
smo239944v0ar.push(smo239925);
smo239944v0.addTickables(smo239944v0ar)
fmtsmo23994436.joinVoices([smo239944v0]);
const smo239944v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239944v1ar = [];
const smo239926 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
smo239926.setAttribute('id', 'smo239926');
smo239926.setStyle({ fillStyle: '#aaaaaa7f' });
smo239926.addModifier(new VF.Dot(), 0);
smo239944v1ar.push(smo239926);
const smo239927 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
smo239927.setAttribute('id', 'smo239927');
smo239927.setStyle({ fillStyle: '#aaaaaa7f' });
smo239944v1ar.push(smo239927);
const smo239928 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo239928.setAttribute('id', 'smo239928');
smo239928.setStyle({ fillStyle: "#115511" });
smo239944v1ar.push(smo239928);
smo239944v1.addTickables(smo239944v1ar)
fmtsmo23994436.joinVoices([smo239944v1]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23753536.format([smo237535v0,smo238749v0,smo239944v0,smo239944v1], 200);
const stavesmo237535 = new VF.Stave(816, 778.5133013333334, 214);
stavesmo237535.setAttribute('id', 'stavesmo237535');
stavesmo237535.setBegBarType(VF.Barline.type.NONE);
stavesmo237535.setContext(context);
stavesmo237535.draw();
smo237535v0.draw(context, stavesmo237535);
const stavesmo238749 = new VF.Stave(816, 893.5133013333334, 214);
stavesmo238749.setAttribute('id', 'stavesmo238749');
stavesmo238749.setBegBarType(VF.Barline.type.NONE);
stavesmo238749.setContext(context);
stavesmo238749.draw();
smo238749v0.draw(context, stavesmo238749);
const stavesmo239944 = new VF.Stave(816, 1026.5133013333334, 214);
stavesmo239944.setAttribute('id', 'stavesmo239944');
stavesmo239944.setBegBarType(VF.Barline.type.NONE);
stavesmo239944.setContext(context);
stavesmo239944.draw();
smo239944v0.draw(context, stavesmo239944);
smo239944v1.draw(context, stavesmo239944);
const fmtsmo23755737 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo237557v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237557v0ar = [];
const smo237536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237536.setAttribute('id', 'smo237536');
smo237557v0ar.push(smo237536);
const smo237537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237537.setAttribute('id', 'smo237537');
smo237557v0ar.push(smo237537);
const smo237538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237538.setAttribute('id', 'smo237538');
smo237557v0ar.push(smo237538);
const smo237539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo237539.setAttribute('id', 'smo237539');
const smo237540 = new VF.Annotation('Mein');
smo237540.setAttribute('id', 'smo237540');
smo237540.setFont('Merriweather', 12, 'normal');
smo237540.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237539.addModifier(smo237540);
smo237540.addClass('lyric lyric-0');
const smo237541 = new VF.Annotation('Tra');
smo237541.setAttribute('id', 'smo237541');
smo237541.setFont('Merriweather', 12, 'normal');
smo237541.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237539.addModifier(smo237541);
smo237541.addClass('lyric lyric-1 lyric-hyphen');
smo237557v0ar.push(smo237539);
smo237557v0.addTickables(smo237557v0ar)
fmtsmo23755737.joinVoices([smo237557v0]);
const fmtsmo23876637 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo238766v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238766v0ar = [];
const smo238750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo238750.setAttribute('id', 'smo238750');
smo238750.addModifier(new VF.Dot(), 0);
smo238766v0ar.push(smo238750);
smo238766v0.addTickables(smo238766v0ar)
fmtsmo23876637.joinVoices([smo238766v0]);
const fmtsmo23996437 = new VF.Formatter();
//
// voices and notes for stave 2 37
const smo239964v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239964v0ar = [];
const smo239945 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo239945.setAttribute('id', 'smo239945');
smo239945.addModifier(new VF.Dot(), 0);
smo239964v0ar.push(smo239945);
smo239964v0.addTickables(smo239964v0ar)
fmtsmo23996437.joinVoices([smo239964v0]);
const smo239964v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239964v1ar = [];
const smo239946 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo239946.setAttribute('id', 'smo239946');
smo239946.setStyle({ fillStyle: "#115511" });
smo239964v1ar.push(smo239946);
const smo239947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo239947.setAttribute('id', 'smo239947');
smo239947.setStyle({ fillStyle: "#115511" });
smo239964v1ar.push(smo239947);
const smo239948 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo239948.setAttribute('id', 'smo239948');
smo239948.setStyle({ fillStyle: "#115511" });
smo239948.addModifier(new VF.Dot(), 0);
smo239964v1ar.push(smo239948);
smo239964v1.addTickables(smo239964v1ar)
fmtsmo23996437.joinVoices([smo239964v1]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23755737.format([smo237557v0,smo238766v0,smo239964v0,smo239964v1], 170);
const stavesmo237557 = new VF.Stave(1030, 778.5133013333334, 184);
stavesmo237557.setAttribute('id', 'stavesmo237557');
stavesmo237557.setBegBarType(VF.Barline.type.NONE);
stavesmo237557.setContext(context);
stavesmo237557.draw();
smo237557v0.draw(context, stavesmo237557);
const stavesmo238766 = new VF.Stave(1030, 893.5133013333334, 184);
stavesmo238766.setAttribute('id', 'stavesmo238766');
stavesmo238766.setBegBarType(VF.Barline.type.NONE);
stavesmo238766.setContext(context);
stavesmo238766.draw();
smo238766v0.draw(context, stavesmo238766);
const stavesmo239964 = new VF.Stave(1030, 1026.5133013333334, 184);
stavesmo239964.setAttribute('id', 'stavesmo239964');
stavesmo239964.setBegBarType(VF.Barline.type.NONE);
stavesmo239964.setContext(context);
stavesmo239964.draw();
smo239964v0.draw(context, stavesmo239964);
smo239964v1.draw(context, stavesmo239964);
const rightsmo240440stavesmo2375572 = new VF.StaveConnector(stavesmo237557, stavesmo239964).setType(0);
rightsmo240440stavesmo2375572.setContext(context).draw();
const fmtsmo23757638 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo237576v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237576v0ar = [];
const smo237558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237558.setAttribute('id', 'smo237558');
smo237558.addModifier(new VF.Dot(), 0);
const smo237559 = new VF.Annotation('Shatz');
smo237559.setAttribute('id', 'smo237559');
smo237559.setFont('Merriweather', 12, 'normal');
smo237559.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237558.addModifier(smo237559);
smo237559.addClass('lyric lyric-0');
const smo237560 = new VF.Annotation('ra!');
smo237560.setAttribute('id', 'smo237560');
smo237560.setFont('Merriweather', 12, 'normal');
smo237560.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237558.addModifier(smo237560);
smo237560.addClass('lyric lyric-1');
smo237576v0ar.push(smo237558);
smo237576v0.addTickables(smo237576v0ar)
fmtsmo23757638.joinVoices([smo237576v0]);
const fmtsmo23878338 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo238783v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238783v0ar = [];
const smo238767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n","bn/4/n"]}'))
smo238767.setAttribute('id', 'smo238767');
smo238767.addModifier(new VF.Dot(), 0);
smo238767.addModifier(new VF.Dot(), 1);
smo238783v0ar.push(smo238767);
smo238783v0.addTickables(smo238783v0ar)
fmtsmo23878338.joinVoices([smo238783v0]);
const fmtsmo23998438 = new VF.Formatter();
//
// voices and notes for stave 2 38
const smo239984v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo239984v0ar = [];
const smo239965 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239965.setAttribute('id', 'smo239965');
smo239984v0ar.push(smo239965);
const smo239966 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239966.setAttribute('id', 'smo239966');
smo239984v0ar.push(smo239966);
const smo239967 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239967.setAttribute('id', 'smo239967');
smo239984v0ar.push(smo239967);
const smo239968 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239968.setAttribute('id', 'smo239968');
smo239984v0ar.push(smo239968);
smo239984v0.addTickables(smo239984v0ar)
fmtsmo23998438.joinVoices([smo239984v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23757638.format([smo237576v0,smo238783v0,smo239984v0], 150);
const stavesmo237576 = new VF.Stave(66, 1166.5133013333334, 224);
stavesmo237576.setAttribute('id', 'stavesmo237576');
stavesmo237576.setBegBarType(1);
stavesmo237576.addClef('treble');
const keysmo237576 = new VF.KeySignature('G');
keysmo237576.addToStave(stavesmo237576);
stavesmo237576.setContext(context);
stavesmo237576.draw();
smo237576v0.draw(context, stavesmo237576);
const stavesmo238783 = new VF.Stave(66, 1298.5133013333334, 224);
stavesmo238783.setAttribute('id', 'stavesmo238783');
stavesmo238783.setBegBarType(1);
stavesmo238783.addClef('treble');
const keysmo238783 = new VF.KeySignature('G');
keysmo238783.addToStave(stavesmo238783);
stavesmo238783.setContext(context);
stavesmo238783.draw();
smo238783v0.draw(context, stavesmo238783);
const stavesmo239984 = new VF.Stave(66, 1424.5133013333334, 224);
stavesmo239984.setAttribute('id', 'stavesmo239984');
stavesmo239984.setBegBarType(1);
stavesmo239984.addClef('bass');
const keysmo239984 = new VF.KeySignature('G');
keysmo239984.addToStave(stavesmo239984);
stavesmo239984.setContext(context);
stavesmo239984.draw();
smo239984v0.draw(context, stavesmo239984);
const leftsmo240440stavesmo2375762 = new VF.StaveConnector(stavesmo237576, stavesmo239984).setType(1);
leftsmo240440stavesmo2375762.setContext(context).draw();
const fmtsmo23760739 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo237607v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237607v0ar = [];
const smo237577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237577.setAttribute('id', 'smo237577');
const smo237578 = new VF.Annotation('-');
smo237578.setAttribute('id', 'smo237578');
smo237578.setFont('Merriweather', 12, 'normal');
smo237578.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237577.addModifier(smo237578);
smo237578.addClass('lyric lyric-0 lyric-hyphen');
smo237607v0ar.push(smo237577);
const smo237579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237579.setAttribute('id', 'smo237579');
smo237607v0ar.push(smo237579);
const smo237580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237580.setAttribute('id', 'smo237580');
const smo237581 = new VF.Annotation('der');
smo237581.setAttribute('id', 'smo237581');
smo237581.setFont('Merriweather', 12, 'normal');
smo237581.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237580.addModifier(smo237581);
smo237581.addClass('lyric lyric-0');
const smo237582 = new VF.Annotation('ich');
smo237582.setAttribute('id', 'smo237582');
smo237582.setFont('Merriweather', 12, 'normal');
smo237582.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237580.addModifier(smo237582);
smo237582.addClass('lyric lyric-1');
smo237607v0ar.push(smo237580);
const smo237583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237583.setAttribute('id', 'smo237583');
const smo237584 = new VF.Annotation('ist');
smo237584.setAttribute('id', 'smo237584');
smo237584.setFont('Merriweather', 12, 'normal');
smo237584.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237583.addModifier(smo237584);
smo237584.addClass('lyric lyric-0');
const smo237585 = new VF.Annotation('hö');
smo237585.setAttribute('id', 'smo237585');
smo237585.setFont('Merriweather', 12, 'normal');
smo237585.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237583.addModifier(smo237585);
smo237585.addClass('lyric lyric-1 lyric-hyphen');
smo237607v0ar.push(smo237583);
const smo237586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237586.setAttribute('id', 'smo237586');
const smo237587 = new VF.Annotation('Po');
smo237587.setAttribute('id', 'smo237587');
smo237587.setFont('Merriweather', 12, 'normal');
smo237587.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237586.addModifier(smo237587);
smo237587.addClass('lyric lyric-0 lyric-hyphen');
const smo237588 = new VF.Annotation('re');
smo237588.setAttribute('id', 'smo237588');
smo237588.setFont('Merriweather', 12, 'normal');
smo237588.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237586.addModifier(smo237588);
smo237588.addClass('lyric lyric-1');
smo237607v0ar.push(smo237586);
const smo237589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo237589.setAttribute('id', 'smo237589');
const smo237590 = new VF.Annotation('stil');
smo237590.setAttribute('id', 'smo237590');
smo237590.setFont('Merriweather', 12, 'normal');
smo237590.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237589.addModifier(smo237590);
smo237590.addClass('lyric lyric-0 lyric-hyphen');
const smo237591 = new VF.Annotation('sein');
smo237591.setAttribute('id', 'smo237591');
smo237591.setFont('Merriweather', 12, 'normal');
smo237591.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237589.addModifier(smo237591);
smo237591.addClass('lyric lyric-1');
smo237607v0ar.push(smo237589);
smo237607v0.addTickables(smo237607v0ar)
fmtsmo23760739.joinVoices([smo237607v0]);
const fmtsmo23880239 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo238802v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238802v0ar = [];
const smo238784 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n","bn/4/n"]}'))
smo238784.setAttribute('id', 'smo238784');
smo238784.addModifier(new VF.Dot(), 0);
smo238784.addModifier(new VF.Dot(), 1);
smo238802v0ar.push(smo238784);
const smo238785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238785.setAttribute('id', 'smo238785');
smo238802v0ar.push(smo238785);
const smo238786 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238786.setAttribute('id', 'smo238786');
smo238802v0ar.push(smo238786);
smo238802v0.addTickables(smo238802v0ar)
fmtsmo23880239.joinVoices([smo238802v0]);
const fmtsmo24000439 = new VF.Formatter();
//
// voices and notes for stave 2 39
const smo240004v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240004v0ar = [];
const smo239985 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239985.setAttribute('id', 'smo239985');
smo240004v0ar.push(smo239985);
const smo239986 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239986.setAttribute('id', 'smo239986');
smo240004v0ar.push(smo239986);
const smo239987 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239987.setAttribute('id', 'smo239987');
smo240004v0ar.push(smo239987);
const smo239988 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239988.setAttribute('id', 'smo239988');
smo240004v0ar.push(smo239988);
smo240004v0.addTickables(smo240004v0ar)
fmtsmo24000439.joinVoices([smo240004v0]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246688 = smo237583.getStemDirection();
smo237583.setStemDirection(dirsmo246688);
smo237586.setStemDirection(dirsmo246688);
smo237589.setStemDirection(dirsmo246688);
const smo246688 = new VF.Beam([smo237583,smo237586,smo237589]);
 
// formatting measures in staff group smo240440
fmtsmo23760739.format([smo237607v0,smo238802v0,smo240004v0], 271);
const stavesmo237607 = new VF.Stave(290, 1166.5133013333334, 285);
stavesmo237607.setAttribute('id', 'stavesmo237607');
stavesmo237607.setBegBarType(VF.Barline.type.NONE);
stavesmo237607.setContext(context);
stavesmo237607.draw();
smo237607v0.draw(context, stavesmo237607);
smo246688.setContext(context);
smo246688.draw();
const stavesmo238802 = new VF.Stave(290, 1298.5133013333334, 285);
stavesmo238802.setAttribute('id', 'stavesmo238802');
stavesmo238802.setBegBarType(VF.Barline.type.NONE);
stavesmo238802.setContext(context);
stavesmo238802.draw();
smo238802v0.draw(context, stavesmo238802);
const stavesmo240004 = new VF.Stave(290, 1424.5133013333334, 285);
stavesmo240004.setAttribute('id', 'stavesmo240004');
stavesmo240004.setBegBarType(VF.Barline.type.NONE);
stavesmo240004.setContext(context);
stavesmo240004.draw();
smo240004v0.draw(context, stavesmo240004);
const fmtsmo23762640 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo237626v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237626v0ar = [];
const smo237608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237608.setAttribute('id', 'smo237608');
smo237608.addModifier(new VF.Dot(), 0);
const smo237609 = new VF.Annotation('lion');
smo237609.setAttribute('id', 'smo237609');
smo237609.setFont('Merriweather', 12, 'normal');
smo237609.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237608.addModifier(smo237609);
smo237609.addClass('lyric lyric-0');
const smo237610 = new VF.Annotation('Lied!');
smo237610.setAttribute('id', 'smo237610');
smo237610.setFont('Merriweather', 12, 'normal');
smo237610.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237608.addModifier(smo237610);
smo237610.addClass('lyric lyric-1');
smo237626v0ar.push(smo237608);
smo237626v0.addTickables(smo237626v0ar)
fmtsmo23762640.joinVoices([smo237626v0]);
const fmtsmo23881940 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo238819v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238819v0ar = [];
const smo238803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo238803.setAttribute('id', 'smo238803');
smo238803.addModifier(new VF.Dot(), 0);
smo238803.addModifier(new VF.Dot(), 1);
smo238819v0ar.push(smo238803);
smo238819v0.addTickables(smo238819v0ar)
fmtsmo23881940.joinVoices([smo238819v0]);
const fmtsmo24002840 = new VF.Formatter();
//
// voices and notes for stave 2 40
const smo240028v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240028v0ar = [];
const smo240005 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo240005.setAttribute('id', 'smo240005');
smo240028v0ar.push(smo240005);
const smo240006 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo240006.setAttribute('id', 'smo240006');
smo240028v0ar.push(smo240006);
const smo240007 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo240007.setAttribute('id', 'smo240007');
smo240028v0ar.push(smo240007);
const smo240008 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo240008.setAttribute('id', 'smo240008');
smo240028v0ar.push(smo240008);
smo240028v0.addTickables(smo240028v0ar)
fmtsmo24002840.joinVoices([smo240028v0]);
const smo240028v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240028v1ar = [];
const smo240009 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo240009.setAttribute('id', 'smo240009');
smo240009.setStyle({ fillStyle: "#115511" });
smo240028v1ar.push(smo240009);
const smo240010 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo240010.setAttribute('id', 'smo240010');
smo240010.setStyle({ fillStyle: "#115511" });
smo240028v1ar.push(smo240010);
const smo240011 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo240011.setAttribute('id', 'smo240011');
smo240011.setStyle({ fillStyle: "#115511" });
smo240028v1ar.push(smo240011);
const smo240012 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo240012.setAttribute('id', 'smo240012');
smo240012.setStyle({ fillStyle: "#115511" });
smo240028v1ar.push(smo240012);
smo240028v1.addTickables(smo240028v1ar)
fmtsmo24002840.joinVoices([smo240028v1]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23762640.format([smo237626v0,smo238819v0,smo240028v0,smo240028v1], 145);
const stavesmo237626 = new VF.Stave(575, 1166.5133013333334, 159);
stavesmo237626.setAttribute('id', 'stavesmo237626');
stavesmo237626.setBegBarType(VF.Barline.type.NONE);
stavesmo237626.setContext(context);
stavesmo237626.draw();
smo237626v0.draw(context, stavesmo237626);
const stavesmo238819 = new VF.Stave(575, 1298.5133013333334, 159);
stavesmo238819.setAttribute('id', 'stavesmo238819');
stavesmo238819.setBegBarType(VF.Barline.type.NONE);
stavesmo238819.setContext(context);
stavesmo238819.draw();
smo238819v0.draw(context, stavesmo238819);
const stavesmo240028 = new VF.Stave(575, 1424.5133013333334, 159);
stavesmo240028.setAttribute('id', 'stavesmo240028');
stavesmo240028.setBegBarType(VF.Barline.type.NONE);
stavesmo240028.setContext(context);
stavesmo240028.draw();
smo240028v0.draw(context, stavesmo240028);
smo240028v1.draw(context, stavesmo240028);
const fmtsmo23765641 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo237656v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237656v0ar = [];
const smo237627 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237627.setAttribute('id', 'smo237627');
const smo237628 = new VF.Annotation('-');
smo237628.setAttribute('id', 'smo237628');
smo237628.setFont('Merriweather', 12, 'normal');
smo237628.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237627.addModifier(smo237628);
smo237628.addClass('lyric lyric-0 lyric-hyphen');
smo237656v0ar.push(smo237627);
const smo237629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237629.setAttribute('id', 'smo237629');
const smo237630 = new VF.Annotation('er');
smo237630.setAttribute('id', 'smo237630');
smo237630.setFont('Merriweather', 12, 'normal');
smo237630.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237629.addModifier(smo237630);
smo237630.addClass('lyric lyric-0');
const smo237631 = new VF.Annotation('ich');
smo237631.setAttribute('id', 'smo237631');
smo237631.setFont('Merriweather', 12, 'normal');
smo237631.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237629.addModifier(smo237631);
smo237631.addClass('lyric lyric-1');
smo237656v0ar.push(smo237629);
const smo237632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237632.setAttribute('id', 'smo237632');
const smo237633 = new VF.Annotation('fährt');
smo237633.setAttribute('id', 'smo237633');
smo237633.setFont('Merriweather', 12, 'normal');
smo237633.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237632.addModifier(smo237633);
smo237633.addClass('lyric lyric-0');
const smo237634 = new VF.Annotation('hö');
smo237634.setAttribute('id', 'smo237634');
smo237634.setFont('Merriweather', 12, 'normal');
smo237634.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237632.addModifier(smo237634);
smo237634.addClass('lyric lyric-1 lyric-hyphen');
smo237656v0ar.push(smo237632);
const smo237635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237635.setAttribute('id', 'smo237635');
const smo237636 = new VF.Annotation('durch');
smo237636.setAttribute('id', 'smo237636');
smo237636.setFont('Merriweather', 12, 'normal');
smo237636.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237635.addModifier(smo237636);
smo237636.addClass('lyric lyric-0');
const smo237637 = new VF.Annotation('re');
smo237637.setAttribute('id', 'smo237637');
smo237637.setFont('Merriweather', 12, 'normal');
smo237637.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237635.addModifier(smo237637);
smo237637.addClass('lyric lyric-1');
smo237656v0ar.push(smo237635);
const smo237638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo237638.setAttribute('id', 'smo237638');
const smo237639 = new VF.Annotation('die');
smo237639.setAttribute('id', 'smo237639');
smo237639.setFont('Merriweather', 12, 'normal');
smo237639.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237638.addModifier(smo237639);
smo237639.addClass('lyric lyric-0');
const smo237640 = new VF.Annotation('es');
smo237640.setAttribute('id', 'smo237640');
smo237640.setFont('Merriweather', 12, 'normal');
smo237640.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237638.addModifier(smo237640);
smo237640.addClass('lyric lyric-1');
smo237656v0ar.push(smo237638);
smo237656v0.addTickables(smo237656v0ar)
fmtsmo23765641.joinVoices([smo237656v0]);
const fmtsmo23883741 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo238837v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238837v0ar = [];
const smo238820 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo238820.setAttribute('id', 'smo238820');
smo238820.addModifier(new VF.Dot(), 0);
smo238820.addModifier(new VF.Dot(), 1);
smo238837v0ar.push(smo238820);
const smo238821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238821.setAttribute('id', 'smo238821');
smo238821.addModifier(new VF.Dot(), 0);
smo238837v0ar.push(smo238821);
smo238837v0.addTickables(smo238837v0ar)
fmtsmo23883741.joinVoices([smo238837v0]);
const fmtsmo24005241 = new VF.Formatter();
//
// voices and notes for stave 2 41
const smo240052v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240052v0ar = [];
const smo240029 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo240029.setAttribute('id', 'smo240029');
smo240052v0ar.push(smo240029);
const smo240030 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo240030.setAttribute('id', 'smo240030');
smo240052v0ar.push(smo240030);
const smo240031 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo240031.setAttribute('id', 'smo240031');
smo240052v0ar.push(smo240031);
const smo240032 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo240032.setAttribute('id', 'smo240032');
smo240052v0ar.push(smo240032);
smo240052v0.addTickables(smo240052v0ar)
fmtsmo24005241.joinVoices([smo240052v0]);
const smo240052v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240052v1ar = [];
const smo240033 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo240033.setAttribute('id', 'smo240033');
smo240033.setStyle({ fillStyle: "#115511" });
smo240052v1ar.push(smo240033);
const smo240034 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo240034.setAttribute('id', 'smo240034');
smo240034.setStyle({ fillStyle: "#115511" });
smo240052v1ar.push(smo240034);
const smo240035 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo240035.setAttribute('id', 'smo240035');
smo240035.setStyle({ fillStyle: "#115511" });
smo240052v1ar.push(smo240035);
const smo240036 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo240036.setAttribute('id', 'smo240036');
smo240036.setStyle({ fillStyle: "#115511" });
smo240052v1ar.push(smo240036);
smo240052v1.addTickables(smo240052v1ar)
fmtsmo24005241.joinVoices([smo240052v1]);
// create beam groups and tuplets for format grp smo240440 before formatting
const dirsmo246701 = smo237632.getStemDirection();
smo237632.setStemDirection(dirsmo246701);
smo237635.setStemDirection(dirsmo246701);
smo237638.setStemDirection(dirsmo246701);
const smo246701 = new VF.Beam([smo237632,smo237635,smo237638]);
 
// formatting measures in staff group smo240440
fmtsmo23765641.format([smo237656v0,smo238837v0,smo240052v0,smo240052v1], 291);
const stavesmo237656 = new VF.Stave(734, 1166.5133013333334, 305);
stavesmo237656.setAttribute('id', 'stavesmo237656');
stavesmo237656.setBegBarType(VF.Barline.type.NONE);
stavesmo237656.setContext(context);
stavesmo237656.draw();
smo237656v0.draw(context, stavesmo237656);
smo246701.setContext(context);
smo246701.draw();
const stavesmo238837 = new VF.Stave(734, 1298.5133013333334, 305);
stavesmo238837.setAttribute('id', 'stavesmo238837');
stavesmo238837.setBegBarType(VF.Barline.type.NONE);
stavesmo238837.setContext(context);
stavesmo238837.draw();
smo238837v0.draw(context, stavesmo238837);
const stavesmo240052 = new VF.Stave(734, 1424.5133013333334, 305);
stavesmo240052.setAttribute('id', 'stavesmo240052');
stavesmo240052.setBegBarType(VF.Barline.type.NONE);
stavesmo240052.setContext(context);
stavesmo240052.draw();
smo240052v0.draw(context, stavesmo240052);
smo240052v1.draw(context, stavesmo240052);
const fmtsmo23767842 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo237678v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo237678v0ar = [];
const smo237657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237657.setAttribute('id', 'smo237657');
smo237657.addModifier(new VF.Dot(), 0);
const smo237658 = new VF.Annotation('Fel');
smo237658.setAttribute('id', 'smo237658');
smo237658.setFont('Merriweather', 12, 'normal');
smo237658.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237657.addModifier(smo237658);
smo237658.addClass('lyric lyric-0 lyric-hyphen');
const smo237659 = new VF.Annotation('sin');
smo237659.setAttribute('id', 'smo237659');
smo237659.setFont('Merriweather', 12, 'normal');
smo237659.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237657.addModifier(smo237659);
smo237659.addClass('lyric lyric-1 lyric-hyphen');
smo237678v0ar.push(smo237657);
const smo237660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo237660.setAttribute('id', 'smo237660');
smo237660.addModifier(new VF.Dot(), 0);
const smo237661 = new VF.Annotation('er');
smo237661.setAttribute('id', 'smo237661');
smo237661.setFont('Merriweather', 12, 'normal');
smo237661.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237660.addModifier(smo237661);
smo237661.addClass('lyric lyric-0');
const smo237662 = new VF.Annotation('gen,');
smo237662.setAttribute('id', 'smo237662');
smo237662.setFont('Merriweather', 12, 'normal');
smo237662.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237660.addModifier(smo237662);
smo237662.addClass('lyric lyric-1');
smo237678v0ar.push(smo237660);
smo237678v0.addTickables(smo237678v0ar)
fmtsmo23767842.joinVoices([smo237678v0]);
const fmtsmo23885442 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo238854v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo238854v0ar = [];
const smo238838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","f#/5/n","dn/6/n"]}'))
smo238838.setAttribute('id', 'smo238838');
smo238838.addModifier(new VF.Dot(), 0);
smo238838.addModifier(new VF.Dot(), 1);
smo238838.addModifier(new VF.Dot(), 2);
smo238854v0ar.push(smo238838);
smo238854v0.addTickables(smo238854v0ar)
fmtsmo23885442.joinVoices([smo238854v0]);
const fmtsmo24007442 = new VF.Formatter();
//
// voices and notes for stave 2 42
const smo240074v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240074v0ar = [];
const smo240053 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo240053.setAttribute('id', 'smo240053');
smo240074v0ar.push(smo240053);
const smo240054 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo240054.setAttribute('id', 'smo240054');
smo240074v0ar.push(smo240054);
const smo240055 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo240055.setAttribute('id', 'smo240055');
smo240074v0ar.push(smo240055);
const smo240056 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo240056.setAttribute('id', 'smo240056');
smo240074v0ar.push(smo240056);
smo240074v0.addTickables(smo240074v0ar)
fmtsmo24007442.joinVoices([smo240074v0]);
const smo240074v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo240074v1ar = [];
const smo240057 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo240057.setAttribute('id', 'smo240057');
smo240057.setStyle({ fillStyle: "#115511" });
smo240057.addModifier(new VF.Dot(), 0);
smo240074v1ar.push(smo240057);
const smo240058 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
smo240058.setAttribute('id', 'smo240058');
smo240058.setStyle({ fillStyle: "#115511" });
smo240058.addModifier(new VF.Dot(), 0);
smo240074v1ar.push(smo240058);
smo240074v1.addTickables(smo240074v1ar)
fmtsmo24007442.joinVoices([smo240074v1]);
// create beam groups and tuplets for format grp smo240440 before formatting
 
// formatting measures in staff group smo240440
fmtsmo23767842.format([smo237678v0,smo238854v0,smo240074v0,smo240074v1], 160);
const stavesmo237678 = new VF.Stave(1039, 1166.5133013333334, 174);
stavesmo237678.setAttribute('id', 'stavesmo237678');
stavesmo237678.setBegBarType(VF.Barline.type.NONE);
stavesmo237678.setContext(context);
stavesmo237678.draw();
smo237678v0.draw(context, stavesmo237678);
const stavesmo238854 = new VF.Stave(1039, 1298.5133013333334, 174);
stavesmo238854.setAttribute('id', 'stavesmo238854');
stavesmo238854.setBegBarType(VF.Barline.type.NONE);
stavesmo238854.setContext(context);
stavesmo238854.draw();
smo238854v0.draw(context, stavesmo238854);
const stavesmo240074 = new VF.Stave(1039, 1424.5133013333334, 174);
stavesmo240074.setAttribute('id', 'stavesmo240074');
stavesmo240074.setBegBarType(VF.Barline.type.NONE);
stavesmo240074.setContext(context);
stavesmo240074.draw();
smo240074v0.draw(context, stavesmo240074);
smo240074v1.draw(context, stavesmo240074);
const rightsmo240440stavesmo2376782 = new VF.StaveConnector(stavesmo237678, stavesmo240074).setType(0);
rightsmo240440stavesmo2376782.setContext(context).draw();
// modifier from 0-26-0-0 to 0-27-0-0
const smo247494 = new VF.Curve(smo237267, smo237286, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo247494.setContext(context).draw();
// modifier from 0-22-0-0 to 0-23-0-0
const smo247495 = new VF.StaveTie({ first_note: smo237175, last_note: smo237194, 
          firstNote: smo237175, lastNote: smo237194, first_indices: [0], last_indices: [0]});
smo247495.setContext(context).draw();
// modifier from 0-25-0-0 to 0-25-0-1
const smo247496 = new VF.StaveTie({ first_note: smo237243, last_note: smo237246, 
          firstNote: smo237243, lastNote: smo237246, first_indices: [0], last_indices: [0]});
smo247496.setContext(context).draw();
// modifier from 0-30-0-0 to 0-31-0-0
const smo247497 = new VF.StaveTie({ first_note: smo237359, last_note: smo237378, 
          firstNote: smo237359, lastNote: smo237378, first_indices: [0], last_indices: [0]});
smo247497.setContext(context).draw();
// modifier from 0-32-0-3 to 0-33-0-0
const smo247498 = new VF.StaveTie({ first_note: smo237415, last_note: null, 
          firstNote: smo237415, lastNote: null, first_indices: [0], last_indices: [0]});
smo247498.setContext(context).draw();
// modifier from 0-32-0-3 to 0-33-0-0
const smo247499 = new VF.StaveTie({ first_note: null, last_note: smo237434, 
          firstNote: null, lastNote: smo237434, first_indices: [0], last_indices: [0]});
smo247499.setContext(context).draw();
// modifier from 0-34-0-2 to 0-35-0-0
const smo247500 = new VF.StaveTie({ first_note: smo237470, last_note: smo237489, 
          firstNote: smo237470, lastNote: smo237489, first_indices: [0], last_indices: [0]});
smo247500.setContext(context).draw();
// modifier from 1-30-0-0 to 1-31-0-0
const smo247501 = new VF.Curve(smo238625, smo238642, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo247501.setContext(context).draw();
// modifier from 1-40-0-0 to 1-41-0-0
const smo247502 = new VF.StaveTie({ first_note: smo238803, last_note: smo238820, 
          firstNote: smo238803, lastNote: smo238820, first_indices: [0,1], last_indices: [0,1]});
smo247502.setContext(context).draw();
// modifier from 1-38-0-0 to 1-39-0-0
const smo247503 = new VF.StaveTie({ first_note: smo238767, last_note: smo238784, 
          firstNote: smo238767, lastNote: smo238784, first_indices: [0,1], last_indices: [0,1]});
smo247503.setContext(context).draw();
// modifier from 2-30-0-0 to 2-31-0-0
const smo247504 = new VF.Curve(smo239803, smo239824, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo247504.setContext(context).draw();
// modifier from 2-32-0-0 to 2-33-0-0
const smo247505 = new VF.StaveTie({ first_note: smo239845, last_note: null, 
          firstNote: smo239845, lastNote: null, first_indices: [0], last_indices: [0]});
smo247505.setContext(context).draw();
// modifier from 2-32-0-0 to 2-33-0-0
const smo247506 = new VF.StaveTie({ first_note: null, last_note: smo239866, 
          firstNote: null, lastNote: smo239866, first_indices: [0], last_indices: [0]});
smo247506.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo237176').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237177').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo237197').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237198').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo237200').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo237201').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo237203').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237204').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo237222').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237223').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo237225').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237226').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo237245').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo237244').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo237247').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo237249').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo237250').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo237269').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo237287').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo237289').setAttributeNS('', 'transform', 'translate(0 0)');
context.svg.getElementById('vf-smo237290').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo237292').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo237293').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo237296').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo237314').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo237315').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo237317').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237318').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo237336').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo237337').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo237339').setAttributeNS('', 'transform', 'translate(0 48)');
context.svg.getElementById('vf-smo237341').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo237342').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo237361').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237360').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo237379').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo237380').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo237382').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo237383').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo237385').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo237386').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo237388').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo237389').setAttributeNS('', 'transform', 'translate(0 27)');
context.svg.getElementById('vf-smo237407').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo237408').setAttributeNS('', 'transform', 'translate(0 27)');
context.svg.getElementById('vf-smo237410').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237411').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo237414').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo237417').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo237416').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo237435').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo237437').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237438').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo237440').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237441').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo237443').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo237444').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo237446').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237447').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo237465').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo237466').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo237468').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo237469').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo237472').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo237471').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo237490').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo237494').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo237512').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo237513').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo237515').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo237516').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo237518').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo237519').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo237540').setAttributeNS('', 'transform', 'translate(0 0)');
context.svg.getElementById('vf-smo237541').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo237559').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo237560').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo237578').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237581').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo237582').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo237584').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo237585').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo237587').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237588').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo237590').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo237591').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo237609').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo237610').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo237628').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo237631').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo237633').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo237634').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo237636').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo237637').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo237639').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo237640').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo237658').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo237659').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo237662').setAttributeNS('', 'transform', 'translate(0 9)');
}
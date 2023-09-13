// @@ Postillionlied p 2/3  by Franz Grothe
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
const fmtsmo23095522 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo230955v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230955v0ar = [];
const smo230937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo230937.setAttribute('id', 'smo230937');
smo230937.addModifier(new VF.Dot(), 0);
const smo230938 = new VF.Annotation('bläst');
smo230938.setAttribute('id', 'smo230938');
smo230938.setFont('Merriweather', 12, 'normal');
smo230938.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230937.addModifier(smo230938);
smo230938.addClass('lyric lyric-0 lyric-hyphen');
const smo230939 = new VF.Annotation('Herz');
smo230939.setAttribute('id', 'smo230939');
smo230939.setFont('Merriweather', 12, 'normal');
smo230939.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230937.addModifier(smo230939);
smo230939.addClass('lyric lyric-1');
smo230955v0ar.push(smo230937);
smo230955v0.addTickables(smo230955v0ar)
fmtsmo23095522.joinVoices([smo230955v0]);
const fmtsmo23226422 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo232264v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232264v0ar = [];
const smo232248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo232248.setAttribute('id', 'smo232248');
smo232248.addModifier(new VF.Dot(), 0);
smo232264v0ar.push(smo232248);
smo232264v0.addTickables(smo232264v0ar)
fmtsmo23226422.joinVoices([smo232264v0]);
const fmtsmo23344122 = new VF.Formatter();
//
// voices and notes for stave 2 22
const smo233441v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233441v0ar = [];
const smo233425 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo233425.setAttribute('id', 'smo233425');
smo233425.addModifier(new VF.Dot(), 0);
smo233441v0ar.push(smo233425);
smo233441v0.addTickables(smo233441v0ar)
fmtsmo23344122.joinVoices([smo233441v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23095522.format([smo230955v0,smo232264v0,smo233441v0], 60);
const stavesmo230955 = new VF.Stave(66, 107.5133013333334, 134);
stavesmo230955.setAttribute('id', 'stavesmo230955');
stavesmo230955.setBegBarType(1);
stavesmo230955.addClef('treble');
const keysmo230955 = new VF.KeySignature('G');
keysmo230955.addToStave(stavesmo230955);
stavesmo230955.setContext(context);
stavesmo230955.draw();
smo230955v0.draw(context, stavesmo230955);
const stavesmo232264 = new VF.Stave(66, 214.5133013333334, 134);
stavesmo232264.setAttribute('id', 'stavesmo232264');
stavesmo232264.setBegBarType(1);
stavesmo232264.addClef('treble');
const keysmo232264 = new VF.KeySignature('G');
keysmo232264.addToStave(stavesmo232264);
stavesmo232264.setContext(context);
stavesmo232264.draw();
smo232264v0.draw(context, stavesmo232264);
const stavesmo233441 = new VF.Stave(66, 285.5133013333334, 134);
stavesmo233441.setAttribute('id', 'stavesmo233441');
stavesmo233441.setBegBarType(1);
stavesmo233441.addClef('bass');
const keysmo233441 = new VF.KeySignature('G');
keysmo233441.addToStave(stavesmo233441);
stavesmo233441.setContext(context);
stavesmo233441.draw();
smo233441v0.draw(context, stavesmo233441);
const leftsmo234202stavesmo2309552 = new VF.StaveConnector(stavesmo230955, stavesmo233441).setType(1);
leftsmo234202stavesmo2309552.setContext(context).draw();
const fmtsmo23098223 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo230982v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230982v0ar = [];
const smo230956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo230956.setAttribute('id', 'smo230956');
smo230982v0ar.push(smo230956);
const smo230958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo230958.setAttribute('id', 'smo230958');
const smo230959 = new VF.Annotation('sein');
smo230959.setAttribute('id', 'smo230959');
smo230959.setFont('Merriweather', 12, 'normal');
smo230959.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230958.addModifier(smo230959);
smo230959.addClass('lyric lyric-0');
const smo230960 = new VF.Annotation('be');
smo230960.setAttribute('id', 'smo230960');
smo230960.setFont('Merriweather', 12, 'normal');
smo230960.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230958.addModifier(smo230960);
smo230960.addClass('lyric lyric-1 lyric-hyphen');
smo230982v0ar.push(smo230958);
const smo230961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo230961.setAttribute('id', 'smo230961');
const smo230962 = new VF.Annotation('Horn');
smo230962.setAttribute('id', 'smo230962');
smo230962.setFont('Merriweather', 12, 'normal');
smo230962.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230961.addModifier(smo230962);
smo230962.addClass('lyric lyric-0');
const smo230963 = new VF.Annotation('glei');
smo230963.setAttribute('id', 'smo230963');
smo230963.setFont('Merriweather', 12, 'normal');
smo230963.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230961.addModifier(smo230963);
smo230963.addClass('lyric lyric-1 lyric-hyphen');
smo230982v0ar.push(smo230961);
const smo230964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo230964.setAttribute('id', 'smo230964');
const smo230965 = new VF.Annotation('mit');
smo230965.setAttribute('id', 'smo230965');
smo230965.setFont('Merriweather', 12, 'normal');
smo230965.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230964.addModifier(smo230965);
smo230965.addClass('lyric lyric-0');
const smo230966 = new VF.Annotation('tet');
smo230966.setAttribute('id', 'smo230966');
smo230966.setFont('Merriweather', 12, 'normal');
smo230966.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230964.addModifier(smo230966);
smo230966.addClass('lyric lyric-1');
smo230982v0ar.push(smo230964);
smo230982v0.addTickables(smo230982v0ar)
fmtsmo23098223.joinVoices([smo230982v0]);
const fmtsmo23228123 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo232281v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232281v0ar = [];
const smo232265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n","bn/4/n"]}'))
smo232265.setAttribute('id', 'smo232265');
smo232265.addModifier(new VF.Dot(), 0);
smo232265.addModifier(new VF.Dot(), 1);
smo232281v0ar.push(smo232265);
smo232281v0.addTickables(smo232281v0ar)
fmtsmo23228123.joinVoices([smo232281v0]);
const fmtsmo23345823 = new VF.Formatter();
//
// voices and notes for stave 2 23
const smo233458v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233458v0ar = [];
const smo233442 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo233442.setAttribute('id', 'smo233442');
const smo2334420acc = new VF.Accidental('#');
smo233442.addModifier(smo2334420acc, 0);
smo233442.addModifier(new VF.Dot(), 0);
smo233458v0ar.push(smo233442);
smo233458v0.addTickables(smo233458v0ar)
fmtsmo23345823.joinVoices([smo233458v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23098223.format([smo230982v0,smo232281v0,smo233458v0], 239);
const stavesmo230982 = new VF.Stave(200, 107.5133013333334, 253);
stavesmo230982.setAttribute('id', 'stavesmo230982');
stavesmo230982.setBegBarType(VF.Barline.type.NONE);
stavesmo230982.setContext(context);
stavesmo230982.draw();
smo230982v0.draw(context, stavesmo230982);
const stavesmo232281 = new VF.Stave(200, 214.5133013333334, 253);
stavesmo232281.setAttribute('id', 'stavesmo232281');
stavesmo232281.setBegBarType(VF.Barline.type.NONE);
stavesmo232281.setContext(context);
stavesmo232281.draw();
smo232281v0.draw(context, stavesmo232281);
const stavesmo233458 = new VF.Stave(200, 285.5133013333334, 253);
stavesmo233458.setAttribute('id', 'stavesmo233458');
stavesmo233458.setBegBarType(VF.Barline.type.NONE);
stavesmo233458.setContext(context);
stavesmo233458.draw();
smo233458v0.draw(context, stavesmo233458);
const fmtsmo23100424 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo231004v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231004v0ar = [];
const smo230983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo230983.setAttribute('id', 'smo230983');
smo230983.addModifier(new VF.Dot(), 0);
const smo230984 = new VF.Annotation('hel');
smo230984.setAttribute('id', 'smo230984');
smo230984.setFont('Merriweather', 12, 'normal');
smo230984.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230983.addModifier(smo230984);
smo230984.addClass('lyric lyric-0 lyric-hyphen');
const smo230985 = new VF.Annotation('ihn');
smo230985.setAttribute('id', 'smo230985');
smo230985.setFont('Merriweather', 12, 'normal');
smo230985.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230983.addModifier(smo230985);
smo230985.addClass('lyric lyric-1');
smo231004v0ar.push(smo230983);
const smo230986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo230986.setAttribute('id', 'smo230986');
smo230986.addModifier(new VF.Dot(), 0);
const smo230987 = new VF.Annotation('lem');
smo230987.setAttribute('id', 'smo230987');
smo230987.setFont('Merriweather', 12, 'normal');
smo230987.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230986.addModifier(smo230987);
smo230987.addClass('lyric lyric-0');
const smo230988 = new VF.Annotation('hin');
smo230988.setAttribute('id', 'smo230988');
smo230988.setFont('Merriweather', 12, 'normal');
smo230988.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230986.addModifier(smo230988);
smo230988.addClass('lyric lyric-1 lyric-hyphen');
smo231004v0ar.push(smo230986);
smo231004v0.addTickables(smo231004v0ar)
fmtsmo23100424.joinVoices([smo231004v0]);
const fmtsmo23229824 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo232298v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232298v0ar = [];
const smo232282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","an/4/n"]}'))
smo232282.setAttribute('id', 'smo232282');
smo232282.addModifier(new VF.Dot(), 0);
smo232282.addModifier(new VF.Dot(), 1);
smo232298v0ar.push(smo232282);
smo232298v0.addTickables(smo232298v0ar)
fmtsmo23229824.joinVoices([smo232298v0]);
const fmtsmo23347624 = new VF.Formatter();
//
// voices and notes for stave 2 24
const smo233476v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233476v0ar = [];
const smo233459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo233459.setAttribute('id', 'smo233459');
smo233459.addModifier(new VF.Dot(), 0);
smo233476v0ar.push(smo233459);
const smo233460 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo233460.setAttribute('id', 'smo233460');
smo233460.addModifier(new VF.Dot(), 0);
smo233476v0ar.push(smo233460);
smo233476v0.addTickables(smo233476v0ar)
fmtsmo23347624.joinVoices([smo233476v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23100424.format([smo231004v0,smo232298v0,smo233476v0], 107);
const stavesmo231004 = new VF.Stave(453, 107.5133013333334, 121);
stavesmo231004.setAttribute('id', 'stavesmo231004');
stavesmo231004.setBegBarType(VF.Barline.type.NONE);
stavesmo231004.setContext(context);
stavesmo231004.draw();
smo231004v0.draw(context, stavesmo231004);
const stavesmo232298 = new VF.Stave(453, 214.5133013333334, 121);
stavesmo232298.setAttribute('id', 'stavesmo232298');
stavesmo232298.setBegBarType(VF.Barline.type.NONE);
stavesmo232298.setContext(context);
stavesmo232298.draw();
smo232298v0.draw(context, stavesmo232298);
const stavesmo233476 = new VF.Stave(453, 285.5133013333334, 121);
stavesmo233476.setAttribute('id', 'stavesmo233476');
stavesmo233476.setBegBarType(VF.Barline.type.NONE);
stavesmo233476.setContext(context);
stavesmo233476.draw();
smo233476v0.draw(context, stavesmo233476);
const fmtsmo23102825 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo231028v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231028v0ar = [];
const smo231005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo231005.setAttribute('id', 'smo231005');
smo231005.addModifier(new VF.Dot(), 0);
const smo231007 = new VF.Annotation('Ton,');
smo231007.setAttribute('id', 'smo231007');
smo231007.setFont('Merriweather', 12, 'normal');
smo231007.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231005.addModifier(smo231007);
smo231007.addClass('lyric lyric-0');
const smo231006 = new VF.Annotation('aus');
smo231006.setAttribute('id', 'smo231006');
smo231006.setFont('Merriweather', 12, 'normal');
smo231006.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231005.addModifier(smo231006);
smo231006.addClass('lyric lyric-1');
smo231028v0ar.push(smo231005);
const smo231008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo231008.setAttribute('id', 'smo231008');
const smo231009 = new VF.Annotation('-');
smo231009.setAttribute('id', 'smo231009');
smo231009.setFont('Merriweather', 12, 'normal');
smo231009.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231008.addModifier(smo231009);
smo231009.addClass('lyric lyric-0 lyric-hyphen');
smo231028v0ar.push(smo231008);
const smo231010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/5/n"]}'))
smo231010.setAttribute('id', 'smo231010');
const smo2310100acc = new VF.Accidental('#');
smo231010.addModifier(smo2310100acc, 0);
const smo231011 = new VF.Annotation('so');
smo231011.setAttribute('id', 'smo231011');
smo231011.setFont('Merriweather', 12, 'normal');
smo231011.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231010.addModifier(smo231011);
smo231011.addClass('lyric lyric-0');
const smo231012 = new VF.Annotation('und');
smo231012.setAttribute('id', 'smo231012');
smo231012.setFont('Merriweather', 12, 'normal');
smo231012.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231010.addModifier(smo231012);
smo231012.addClass('lyric lyric-1');
smo231028v0ar.push(smo231010);
smo231028v0.addTickables(smo231028v0ar)
fmtsmo23102825.joinVoices([smo231028v0]);
const fmtsmo23231625 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo232316v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232316v0ar = [];
const smo232299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","an/4/n"]}'))
smo232299.setAttribute('id', 'smo232299');
smo232299.addModifier(new VF.Dot(), 0);
smo232299.addModifier(new VF.Dot(), 1);
smo232316v0ar.push(smo232299);
const smo232300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo232300.setAttribute('id', 'smo232300');
smo232300.addModifier(new VF.Dot(), 0);
smo232316v0ar.push(smo232300);
smo232316v0.addTickables(smo232316v0ar)
fmtsmo23231625.joinVoices([smo232316v0]);
const fmtsmo23349425 = new VF.Formatter();
//
// voices and notes for stave 2 25
const smo233494v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233494v0ar = [];
const smo233477 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo233477.setAttribute('id', 'smo233477');
smo233477.addModifier(new VF.Dot(), 0);
smo233494v0ar.push(smo233477);
const smo233478 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["d#/3/n"]}'))
smo233478.setAttribute('id', 'smo233478');
const smo2334780acc = new VF.Accidental('#');
smo233478.addModifier(smo2334780acc, 0);
smo233478.addModifier(new VF.Dot(), 0);
smo233494v0ar.push(smo233478);
smo233494v0.addTickables(smo233494v0ar)
fmtsmo23349425.joinVoices([smo233494v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23102825.format([smo231028v0,smo232316v0,smo233494v0], 169);
const stavesmo231028 = new VF.Stave(574, 107.5133013333334, 183);
stavesmo231028.setAttribute('id', 'stavesmo231028');
stavesmo231028.setBegBarType(VF.Barline.type.NONE);
stavesmo231028.setContext(context);
stavesmo231028.draw();
smo231028v0.draw(context, stavesmo231028);
const stavesmo232316 = new VF.Stave(574, 214.5133013333334, 183);
stavesmo232316.setAttribute('id', 'stavesmo232316');
stavesmo232316.setBegBarType(VF.Barline.type.NONE);
stavesmo232316.setContext(context);
stavesmo232316.draw();
smo232316v0.draw(context, stavesmo232316);
const stavesmo233494 = new VF.Stave(574, 285.5133013333334, 183);
stavesmo233494.setAttribute('id', 'stavesmo233494');
stavesmo233494.setBegBarType(VF.Barline.type.NONE);
stavesmo233494.setContext(context);
stavesmo233494.draw();
smo233494v0.draw(context, stavesmo233494);
const fmtsmo23104726 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo231047v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231047v0ar = [];
const smo231029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231029.setAttribute('id', 'smo231029');
smo231029.addModifier(new VF.Dot(), 0);
const smo231030 = new VF.Annotation('schön');
smo231030.setAttribute('id', 'smo231030');
smo231030.setFont('Merriweather', 12, 'normal');
smo231030.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231029.addModifier(smo231030);
smo231030.addClass('lyric lyric-0');
const smo231031 = new VF.Annotation('führt');
smo231031.setAttribute('id', 'smo231031');
smo231031.setFont('Merriweather', 12, 'normal');
smo231031.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231029.addModifier(smo231031);
smo231031.addClass('lyric lyric-1');
smo231047v0ar.push(smo231029);
smo231047v0.addTickables(smo231047v0ar)
fmtsmo23104726.joinVoices([smo231047v0]);
const fmtsmo23233326 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo232333v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232333v0ar = [];
const smo232317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo232317.setAttribute('id', 'smo232317');
smo232317.addModifier(new VF.Dot(), 0);
smo232333v0ar.push(smo232317);
smo232333v0.addTickables(smo232333v0ar)
fmtsmo23233326.joinVoices([smo232333v0]);
const fmtsmo23351126 = new VF.Formatter();
//
// voices and notes for stave 2 26
const smo233511v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233511v0ar = [];
const smo233495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo233495.setAttribute('id', 'smo233495');
smo233495.addModifier(new VF.Dot(), 0);
smo233511v0ar.push(smo233495);
smo233511v0.addTickables(smo233511v0ar)
fmtsmo23351126.joinVoices([smo233511v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23104726.format([smo231047v0,smo232333v0,smo233511v0], 72);
const stavesmo231047 = new VF.Stave(757, 107.5133013333334, 86);
stavesmo231047.setAttribute('id', 'stavesmo231047');
stavesmo231047.setBegBarType(VF.Barline.type.NONE);
stavesmo231047.setContext(context);
stavesmo231047.draw();
smo231047v0.draw(context, stavesmo231047);
const stavesmo232333 = new VF.Stave(757, 214.5133013333334, 86);
stavesmo232333.setAttribute('id', 'stavesmo232333');
stavesmo232333.setBegBarType(VF.Barline.type.NONE);
stavesmo232333.setContext(context);
stavesmo232333.draw();
smo232333v0.draw(context, stavesmo232333);
const stavesmo233511 = new VF.Stave(757, 285.5133013333334, 86);
stavesmo233511.setAttribute('id', 'stavesmo233511');
stavesmo233511.setBegBarType(VF.Barline.type.NONE);
stavesmo233511.setContext(context);
stavesmo233511.draw();
smo233511v0.draw(context, stavesmo233511);
const fmtsmo23107427 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo231074v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231074v0ar = [];
const smo231048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231048.setAttribute('id', 'smo231048');
const smo231049 = new VF.Annotation('-');
smo231049.setAttribute('id', 'smo231049');
smo231049.setFont('Merriweather', 12, 'normal');
smo231049.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231048.addModifier(smo231049);
smo231049.addClass('lyric lyric-0 lyric-hyphen');
smo231074v0ar.push(smo231048);
const smo231050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231050.setAttribute('id', 'smo231050');
const smo231051 = new VF.Annotation('wie');
smo231051.setAttribute('id', 'smo231051');
smo231051.setFont('Merriweather', 12, 'normal');
smo231051.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231050.addModifier(smo231051);
smo231051.addClass('lyric lyric-0');
const smo231052 = new VF.Annotation('ihn');
smo231052.setAttribute('id', 'smo231052');
smo231052.setFont('Merriweather', 12, 'normal');
smo231052.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231050.addModifier(smo231052);
smo231052.addClass('lyric lyric-1');
smo231074v0ar.push(smo231050);
const smo231053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231053.setAttribute('id', 'smo231053');
const smo231054 = new VF.Annotation('sonst');
smo231054.setAttribute('id', 'smo231054');
smo231054.setFont('Merriweather', 12, 'normal');
smo231054.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231053.addModifier(smo231054);
smo231054.addClass('lyric lyric-0');
const smo231055 = new VF.Annotation('mir');
smo231055.setAttribute('id', 'smo231055');
smo231055.setFont('Merriweather', 12, 'normal');
smo231055.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231053.addModifier(smo231055);
smo231055.addClass('lyric lyric-1');
smo231074v0ar.push(smo231053);
const smo231056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231056.setAttribute('id', 'smo231056');
const smo231057 = new VF.Annotation('kein');
smo231057.setAttribute('id', 'smo231057');
smo231057.setFont('Merriweather', 12, 'normal');
smo231057.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231056.addModifier(smo231057);
smo231057.addClass('lyric lyric-0');
const smo231058 = new VF.Annotation('zu');
smo231058.setAttribute('id', 'smo231058');
smo231058.setFont('Merriweather', 12, 'normal');
smo231058.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231056.addModifier(smo231058);
smo231058.addClass('lyric lyric-1 lyric-hyphen');
smo231074v0ar.push(smo231056);
smo231074v0.addTickables(smo231074v0ar)
fmtsmo23107427.joinVoices([smo231074v0]);
const fmtsmo23235027 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo232350v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232350v0ar = [];
const smo232334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo232334.setAttribute('id', 'smo232334');
smo232334.addModifier(new VF.Dot(), 0);
smo232350v0ar.push(smo232334);
smo232350v0.addTickables(smo232350v0ar)
fmtsmo23235027.joinVoices([smo232350v0]);
const fmtsmo23352827 = new VF.Formatter();
//
// voices and notes for stave 2 27
const smo233528v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233528v0ar = [];
const smo233512 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo233512.setAttribute('id', 'smo233512');
smo233512.addModifier(new VF.Dot(), 0);
smo233528v0ar.push(smo233512);
smo233528v0.addTickables(smo233528v0ar)
fmtsmo23352827.joinVoices([smo233528v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23107427.format([smo231074v0,smo232350v0,smo233528v0], 230);
const stavesmo231074 = new VF.Stave(843, 107.5133013333334, 244);
stavesmo231074.setAttribute('id', 'stavesmo231074');
stavesmo231074.setBegBarType(VF.Barline.type.NONE);
stavesmo231074.setContext(context);
stavesmo231074.draw();
smo231074v0.draw(context, stavesmo231074);
const stavesmo232350 = new VF.Stave(843, 214.5133013333334, 244);
stavesmo232350.setAttribute('id', 'stavesmo232350');
stavesmo232350.setBegBarType(VF.Barline.type.NONE);
stavesmo232350.setContext(context);
stavesmo232350.draw();
smo232350v0.draw(context, stavesmo232350);
const stavesmo233528 = new VF.Stave(843, 285.5133013333334, 244);
stavesmo233528.setAttribute('id', 'stavesmo233528');
stavesmo233528.setBegBarType(VF.Barline.type.NONE);
stavesmo233528.setContext(context);
stavesmo233528.draw();
smo233528v0.draw(context, stavesmo233528);
const fmtsmo23109628 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo231096v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231096v0ar = [];
const smo231075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231075.setAttribute('id', 'smo231075');
smo231075.addModifier(new VF.Dot(), 0);
const smo231076 = new VF.Annotation('Po');
smo231076.setAttribute('id', 'smo231076');
smo231076.setFont('Merriweather', 12, 'normal');
smo231076.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231075.addModifier(smo231076);
smo231076.addClass('lyric lyric-0 lyric-hyphen');
const smo231077 = new VF.Annotation('rück');
smo231077.setAttribute('id', 'smo231077');
smo231077.setFont('Merriweather', 12, 'normal');
smo231077.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231075.addModifier(smo231077);
smo231077.addClass('lyric lyric-1');
smo231096v0ar.push(smo231075);
const smo231078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo231078.setAttribute('id', 'smo231078');
smo231078.addModifier(new VF.Dot(), 0);
const smo231079 = new VF.Annotation('stil');
smo231079.setAttribute('id', 'smo231079');
smo231079.setFont('Merriweather', 12, 'normal');
smo231079.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231078.addModifier(smo231079);
smo231079.addClass('lyric lyric-0 lyric-hyphen');
const smo231080 = new VF.Annotation('ins');
smo231080.setAttribute('id', 'smo231080');
smo231080.setFont('Merriweather', 12, 'normal');
smo231080.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231078.addModifier(smo231080);
smo231080.addClass('lyric lyric-1');
smo231096v0ar.push(smo231078);
smo231096v0.addTickables(smo231096v0ar)
fmtsmo23109628.joinVoices([smo231096v0]);
const fmtsmo23236728 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo232367v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232367v0ar = [];
const smo232351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","bn/4/n"]}'))
smo232351.setAttribute('id', 'smo232351');
smo232351.addModifier(new VF.Dot(), 0);
smo232351.addModifier(new VF.Dot(), 1);
smo232367v0ar.push(smo232351);
smo232367v0.addTickables(smo232367v0ar)
fmtsmo23236728.joinVoices([smo232367v0]);
const fmtsmo23354528 = new VF.Formatter();
//
// voices and notes for stave 2 28
const smo233545v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233545v0ar = [];
const smo233529 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo233529.setAttribute('id', 'smo233529');
smo233529.addModifier(new VF.Dot(), 0);
smo233545v0ar.push(smo233529);
smo233545v0.addTickables(smo233545v0ar)
fmtsmo23354528.joinVoices([smo233545v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23109628.format([smo231096v0,smo232367v0,smo233545v0], 113);
const stavesmo231096 = new VF.Stave(1087, 107.5133013333334, 127);
stavesmo231096.setAttribute('id', 'stavesmo231096');
stavesmo231096.setBegBarType(VF.Barline.type.NONE);
stavesmo231096.setContext(context);
stavesmo231096.draw();
smo231096v0.draw(context, stavesmo231096);
const stavesmo232367 = new VF.Stave(1087, 214.5133013333334, 127);
stavesmo232367.setAttribute('id', 'stavesmo232367');
stavesmo232367.setBegBarType(VF.Barline.type.NONE);
stavesmo232367.setContext(context);
stavesmo232367.draw();
smo232367v0.draw(context, stavesmo232367);
const stavesmo233545 = new VF.Stave(1087, 285.5133013333334, 127);
stavesmo233545.setAttribute('id', 'stavesmo233545');
stavesmo233545.setBegBarType(VF.Barline.type.NONE);
stavesmo233545.setContext(context);
stavesmo233545.draw();
smo233545v0.draw(context, stavesmo233545);
const rightsmo234202stavesmo2310962 = new VF.StaveConnector(stavesmo231096, stavesmo233545).setType(0);
rightsmo234202stavesmo2310962.setContext(context).draw();
const fmtsmo23112029 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo231120v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231120v0ar = [];
const smo231097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231097.setAttribute('id', 'smo231097');
smo231097.addModifier(new VF.Dot(), 0);
const smo231098 = new VF.Annotation('lion');
smo231098.setAttribute('id', 'smo231098');
smo231098.setFont('Merriweather', 12, 'normal');
smo231098.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231097.addModifier(smo231098);
smo231098.addClass('lyric lyric-0');
const smo231099 = new VF.Annotation('Häus,');
smo231099.setAttribute('id', 'smo231099');
smo231099.setFont('Merriweather', 12, 'normal');
smo231099.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231097.addModifier(smo231099);
smo231099.addClass('lyric lyric-1');
smo231120v0ar.push(smo231097);
const smo231100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo231100.setAttribute('id', 'smo231100');
const smo231101 = new VF.Annotation('Häus');
smo231101.setAttribute('id', 'smo231101');
smo231101.setFont('Merriweather', 12, 'normal');
smo231101.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231100.addModifier(smo231101);
smo231101.addClass('lyric lyric-1');
smo231120v0ar.push(smo231100);
const smo231102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo231102.setAttribute('id', 'smo231102');
const smo231103 = new VF.Annotation('Es');
smo231103.setAttribute('id', 'smo231103');
smo231103.setFont('Merriweather', 12, 'normal');
smo231103.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231102.addModifier(smo231103);
smo231103.addClass('lyric lyric-0');
const smo231104 = new VF.Annotation('es');
smo231104.setAttribute('id', 'smo231104');
smo231104.setFont('Merriweather', 12, 'normal');
smo231104.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231102.addModifier(smo231104);
smo231104.addClass('lyric lyric-1');
smo231120v0ar.push(smo231102);
smo231120v0.addTickables(smo231120v0ar)
fmtsmo23112029.joinVoices([smo231120v0]);
const fmtsmo23238629 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo232386v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232386v0ar = [];
const smo232368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","bn/4/n"]}'))
smo232368.setAttribute('id', 'smo232368');
smo232368.addModifier(new VF.Dot(), 0);
smo232368.addModifier(new VF.Dot(), 1);
smo232386v0ar.push(smo232368);
const smo232369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo232369.setAttribute('id', 'smo232369');
smo232386v0ar.push(smo232369);
const smo232370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo232370.setAttribute('id', 'smo232370');
smo232386v0ar.push(smo232370);
smo232386v0.addTickables(smo232386v0ar)
fmtsmo23238629.joinVoices([smo232386v0]);
const fmtsmo23356429 = new VF.Formatter();
//
// voices and notes for stave 2 29
const smo233564v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233564v0ar = [];
const smo233546 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo233546.setAttribute('id', 'smo233546');
smo233546.addModifier(new VF.Dot(), 0);
smo233564v0ar.push(smo233546);
const smo233547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo233547.setAttribute('id', 'smo233547');
smo233564v0ar.push(smo233547);
const smo233548 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo233548.setAttribute('id', 'smo233548');
smo233564v0ar.push(smo233548);
smo233564v0.addTickables(smo233564v0ar)
fmtsmo23356429.joinVoices([smo233564v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23112029.format([smo231120v0,smo232386v0,smo233564v0], 218);
const stavesmo231120 = new VF.Stave(66, 398.5133013333334, 291);
stavesmo231120.setAttribute('id', 'stavesmo231120');
stavesmo231120.setBegBarType(1);
stavesmo231120.addClef('treble');
const keysmo231120 = new VF.KeySignature('G');
keysmo231120.addToStave(stavesmo231120);
stavesmo231120.setContext(context);
stavesmo231120.draw();
smo231120v0.draw(context, stavesmo231120);
const stavesmo232386 = new VF.Stave(66, 520.5133013333334, 291);
stavesmo232386.setAttribute('id', 'stavesmo232386');
stavesmo232386.setBegBarType(1);
stavesmo232386.addClef('treble');
const keysmo232386 = new VF.KeySignature('G');
keysmo232386.addToStave(stavesmo232386);
stavesmo232386.setContext(context);
stavesmo232386.draw();
smo232386v0.draw(context, stavesmo232386);
const stavesmo233564 = new VF.Stave(66, 643.5133013333334, 291);
stavesmo233564.setAttribute('id', 'stavesmo233564');
stavesmo233564.setBegBarType(1);
stavesmo233564.addClef('bass');
const keysmo233564 = new VF.KeySignature('G');
keysmo233564.addToStave(stavesmo233564);
stavesmo233564.setContext(context);
stavesmo233564.draw();
smo233564v0.draw(context, stavesmo233564);
const leftsmo234202stavesmo2311202 = new VF.StaveConnector(stavesmo231120, stavesmo233564).setType(1);
leftsmo234202stavesmo2311202.setContext(context).draw();
const fmtsmo23113930 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo231139v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231139v0ar = [];
const smo231121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo231121.setAttribute('id', 'smo231121');
smo231121.addModifier(new VF.Dot(), 0);
const smo231123 = new VF.Annotation('klingt');
smo231123.setAttribute('id', 'smo231123');
smo231123.setFont('Merriweather', 12, 'normal');
smo231123.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231121.addModifier(smo231123);
smo231123.addClass('lyric lyric-0');
const smo231122 = new VF.Annotation('sagt');
smo231122.setAttribute('id', 'smo231122');
smo231122.setFont('Merriweather', 12, 'normal');
smo231122.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231121.addModifier(smo231122);
smo231122.addClass('lyric lyric-1');
smo231139v0ar.push(smo231121);
smo231139v0.addTickables(smo231139v0ar)
fmtsmo23113930.joinVoices([smo231139v0]);
const fmtsmo23240330 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo232403v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232403v0ar = [];
const smo232387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo232387.setAttribute('id', 'smo232387');
smo232387.addModifier(new VF.Dot(), 0);
smo232403v0ar.push(smo232387);
smo232403v0.addTickables(smo232403v0ar)
fmtsmo23240330.joinVoices([smo232403v0]);
const fmtsmo23358530 = new VF.Formatter();
//
// voices and notes for stave 2 30
const smo233585v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233585v0ar = [];
const smo233565 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo233565.setAttribute('id', 'smo233565');
smo233565.addModifier(new VF.Dot(), 0);
smo233585v0ar.push(smo233565);
smo233585v0.addTickables(smo233585v0ar)
fmtsmo23358530.joinVoices([smo233585v0]);
const smo233585v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233585v1ar = [];
const smo233566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo233566.setAttribute('id', 'smo233566');
smo233566.setStyle({ fillStyle: "#115511" });
smo233585v1ar.push(smo233566);
const smo233567 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo233567.setAttribute('id', 'smo233567');
smo233567.setStyle({ fillStyle: "#115511" });
smo233585v1ar.push(smo233567);
const smo233568 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo233568.setAttribute('id', 'smo233568');
smo233568.setStyle({ fillStyle: "#115511" });
smo233585v1ar.push(smo233568);
const smo233569 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo233569.setAttribute('id', 'smo233569');
smo233569.setStyle({ fillStyle: "#115511" });
smo233585v1ar.push(smo233569);
smo233585v1.addTickables(smo233585v1ar)
fmtsmo23358530.joinVoices([smo233585v1]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23113930.format([smo231139v0,smo232403v0,smo233585v0,smo233585v1], 197);
const stavesmo231139 = new VF.Stave(357, 398.5133013333334, 211);
stavesmo231139.setAttribute('id', 'stavesmo231139');
stavesmo231139.setBegBarType(VF.Barline.type.NONE);
stavesmo231139.setContext(context);
stavesmo231139.draw();
smo231139v0.draw(context, stavesmo231139);
const stavesmo232403 = new VF.Stave(357, 520.5133013333334, 211);
stavesmo232403.setAttribute('id', 'stavesmo232403');
stavesmo232403.setBegBarType(VF.Barline.type.NONE);
stavesmo232403.setContext(context);
stavesmo232403.draw();
smo232403v0.draw(context, stavesmo232403);
const stavesmo233585 = new VF.Stave(357, 643.5133013333334, 211);
stavesmo233585.setAttribute('id', 'stavesmo233585');
stavesmo233585.setBegBarType(VF.Barline.type.NONE);
stavesmo233585.setContext(context);
stavesmo233585.draw();
smo233585v0.draw(context, stavesmo233585);
smo233585v1.draw(context, stavesmo233585);
const fmtsmo23116731 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo231167v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231167v0ar = [];
const smo231140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo231140.setAttribute('id', 'smo231140');
const smo231141 = new VF.Annotation('-');
smo231141.setAttribute('id', 'smo231141');
smo231141.setFont('Merriweather', 12, 'normal');
smo231141.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231140.addModifier(smo231141);
smo231141.addClass('lyric lyric-0 lyric-hyphen');
const smo231142 = new VF.Annotation('-');
smo231142.setAttribute('id', 'smo231142');
smo231142.setFont('Merriweather', 12, 'normal');
smo231142.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231140.addModifier(smo231142);
smo231142.addClass('lyric lyric-1 lyric-hyphen');
smo231167v0ar.push(smo231140);
const smo231143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo231143.setAttribute('id', 'smo231143');
const smo231144 = new VF.Annotation('wenn');
smo231144.setAttribute('id', 'smo231144');
smo231144.setFont('Merriweather', 12, 'normal');
smo231144.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231143.addModifier(smo231144);
smo231144.addClass('lyric lyric-0');
const smo231145 = new VF.Annotation('zu');
smo231145.setAttribute('id', 'smo231145');
smo231145.setFont('Merriweather', 12, 'normal');
smo231145.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231143.addModifier(smo231145);
smo231145.addClass('lyric lyric-1');
smo231167v0ar.push(smo231143);
const smo231146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo231146.setAttribute('id', 'smo231146');
const smo231147 = new VF.Annotation('es');
smo231147.setAttribute('id', 'smo231147');
smo231147.setFont('Merriweather', 12, 'normal');
smo231147.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231146.addModifier(smo231147);
smo231147.addClass('lyric lyric-0');
const smo231148 = new VF.Annotation('ihm');
smo231148.setAttribute('id', 'smo231148');
smo231148.setFont('Merriweather', 12, 'normal');
smo231148.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231146.addModifier(smo231148);
smo231148.addClass('lyric lyric-1');
smo231167v0ar.push(smo231146);
const smo231149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo231149.setAttribute('id', 'smo231149');
const smo231150 = new VF.Annotation('von');
smo231150.setAttribute('id', 'smo231150');
smo231150.setFont('Merriweather', 12, 'normal');
smo231150.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231149.addModifier(smo231150);
smo231150.addClass('lyric lyric-0');
const smo231151 = new VF.Annotation('Denk\'');
smo231151.setAttribute('id', 'smo231151');
smo231151.setFont('Merriweather', 12, 'normal');
smo231151.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231149.addModifier(smo231151);
smo231151.addClass('lyric lyric-1');
smo231167v0ar.push(smo231149);
smo231167v0.addTickables(smo231167v0ar)
fmtsmo23116731.joinVoices([smo231167v0]);
const fmtsmo23242131 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo232421v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232421v0ar = [];
const smo232404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo232404.setAttribute('id', 'smo232404');
smo232404.addModifier(new VF.Dot(), 0);
smo232421v0ar.push(smo232404);
const smo232405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
smo232405.setAttribute('id', 'smo232405');
smo232405.addModifier(new VF.Dot(), 0);
smo232421v0ar.push(smo232405);
smo232421v0.addTickables(smo232421v0ar)
fmtsmo23242131.joinVoices([smo232421v0]);
const fmtsmo23360631 = new VF.Formatter();
//
// voices and notes for stave 2 31
const smo233606v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233606v0ar = [];
const smo233586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo233586.setAttribute('id', 'smo233586');
smo233586.addModifier(new VF.Dot(), 0);
smo233606v0ar.push(smo233586);
smo233606v0.addTickables(smo233606v0ar)
fmtsmo23360631.joinVoices([smo233606v0]);
const smo233606v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233606v1ar = [];
const smo233587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo233587.setAttribute('id', 'smo233587');
smo233587.setStyle({ fillStyle: "#115511" });
smo233606v1ar.push(smo233587);
const smo233588 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo233588.setAttribute('id', 'smo233588');
smo233588.setStyle({ fillStyle: "#115511" });
smo233606v1ar.push(smo233588);
const smo233589 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo233589.setAttribute('id', 'smo233589');
smo233589.setStyle({ fillStyle: "#115511" });
smo233606v1ar.push(smo233589);
const smo233590 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo233590.setAttribute('id', 'smo233590');
smo233590.setStyle({ fillStyle: "#115511" });
smo233606v1ar.push(smo233590);
smo233606v1.addTickables(smo233606v1ar)
fmtsmo23360631.joinVoices([smo233606v1]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23116731.format([smo231167v0,smo232421v0,smo233606v0,smo233606v1], 293);
const stavesmo231167 = new VF.Stave(568, 398.5133013333334, 307);
stavesmo231167.setAttribute('id', 'stavesmo231167');
stavesmo231167.setBegBarType(VF.Barline.type.NONE);
stavesmo231167.setContext(context);
stavesmo231167.draw();
smo231167v0.draw(context, stavesmo231167);
const stavesmo232421 = new VF.Stave(568, 520.5133013333334, 307);
stavesmo232421.setAttribute('id', 'stavesmo232421');
stavesmo232421.setBegBarType(VF.Barline.type.NONE);
stavesmo232421.setContext(context);
stavesmo232421.draw();
smo232421v0.draw(context, stavesmo232421);
const stavesmo233606 = new VF.Stave(568, 643.5133013333334, 307);
stavesmo233606.setAttribute('id', 'stavesmo233606');
stavesmo233606.setBegBarType(VF.Barline.type.NONE);
stavesmo233606.setContext(context);
stavesmo233606.draw();
smo233606v0.draw(context, stavesmo233606);
smo233606v1.draw(context, stavesmo233606);
const fmtsmo23119532 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo231195v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231195v0ar = [];
const smo231168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo231168.setAttribute('id', 'smo231168');
const smo231169 = new VF.Annotation('fer');
smo231169.setAttribute('id', 'smo231169');
smo231169.setFont('Merriweather', 12, 'normal');
smo231169.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231168.addModifier(smo231169);
smo231169.addClass('lyric lyric-0 lyric-hyphen');
const smo231170 = new VF.Annotation('im');
smo231170.setAttribute('id', 'smo231170');
smo231170.setFont('Merriweather', 12, 'normal');
smo231170.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231168.addModifier(smo231170);
smo231170.addClass('lyric lyric-1 lyric-hyphen');
smo231195v0ar.push(smo231168);
const smo231171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo231171.setAttribute('id', 'smo231171');
const smo231172 = new VF.Annotation('ne');
smo231172.setAttribute('id', 'smo231172');
smo231172.setFont('Merriweather', 12, 'normal');
smo231172.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231171.addModifier(smo231172);
smo231172.addClass('lyric lyric-0');
const smo231173 = new VF.Annotation('mer');
smo231173.setAttribute('id', 'smo231173');
smo231173.setFont('Merriweather', 12, 'normal');
smo231173.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231171.addModifier(smo231173);
smo231173.addClass('lyric lyric-1');
smo231195v0ar.push(smo231171);
const smo231174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo231174.setAttribute('id', 'smo231174');
const smo231175 = new VF.Annotation('er');
smo231175.setAttribute('id', 'smo231175');
smo231175.setFont('Merriweather', 12, 'normal');
smo231175.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231174.addModifier(smo231175);
smo231175.addClass('lyric lyric-0 lyric-hyphen');
const smo231176 = new VF.Annotation('an');
smo231176.setAttribute('id', 'smo231176');
smo231176.setFont('Merriweather', 12, 'normal');
smo231176.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231174.addModifier(smo231176);
smo231176.addClass('lyric lyric-1');
smo231195v0ar.push(smo231174);
const smo231177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo231177.setAttribute('id', 'smo231177');
smo231177.addModifier(new VF.Dot(), 0);
const smo231179 = new VF.Annotation('schalit');
smo231179.setAttribute('id', 'smo231179');
smo231179.setFont('Merriweather', 12, 'normal');
smo231179.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231177.addModifier(smo231179);
smo231179.addClass('lyric lyric-0');
const smo231178 = new VF.Annotation('mich');
smo231178.setAttribute('id', 'smo231178');
smo231178.setFont('Merriweather', 12, 'normal');
smo231178.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231177.addModifier(smo231178);
smo231178.addClass('lyric lyric-1');
smo231195v0ar.push(smo231177);
smo231195v0.addTickables(smo231195v0ar)
fmtsmo23119532.joinVoices([smo231195v0]);
const fmtsmo23243832 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo232438v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232438v0ar = [];
const smo232422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo232422.setAttribute('id', 'smo232422');
smo232422.addModifier(new VF.Dot(), 0);
smo232438v0ar.push(smo232422);
smo232438v0.addTickables(smo232438v0ar)
fmtsmo23243832.joinVoices([smo232438v0]);
const fmtsmo23362732 = new VF.Formatter();
//
// voices and notes for stave 2 32
const smo233627v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233627v0ar = [];
const smo233607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo233607.setAttribute('id', 'smo233607');
smo233607.addModifier(new VF.Dot(), 0);
smo233627v0ar.push(smo233607);
smo233627v0.addTickables(smo233627v0ar)
fmtsmo23362732.joinVoices([smo233627v0]);
const smo233627v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233627v1ar = [];
const smo233608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo233608.setAttribute('id', 'smo233608');
smo233608.setStyle({ fillStyle: "#115511" });
const smo2336080acc = new VF.Accidental('#');
smo233608.addModifier(smo2336080acc, 0);
smo233627v1ar.push(smo233608);
const smo233609 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo233609.setAttribute('id', 'smo233609');
smo233609.setStyle({ fillStyle: "#115511" });
smo233627v1ar.push(smo233609);
const smo233610 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo233610.setAttribute('id', 'smo233610');
smo233610.setStyle({ fillStyle: "#115511" });
smo233627v1ar.push(smo233610);
const smo233611 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo233611.setAttribute('id', 'smo233611');
smo233611.setStyle({ fillStyle: "#115511" });
smo233627v1ar.push(smo233611);
smo233627v1.addTickables(smo233627v1ar)
fmtsmo23362732.joinVoices([smo233627v1]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240393 = smo231168.getStemDirection();
smo231168.setStemDirection(dirsmo240393);
smo231171.setStemDirection(dirsmo240393);
smo231174.setStemDirection(dirsmo240393);
const smo240393 = new VF.Beam([smo231168,smo231171,smo231174]);
 
// formatting measures in staff group smo234202
fmtsmo23119532.format([smo231195v0,smo232438v0,smo233627v0,smo233627v1], 321);
const stavesmo231195 = new VF.Stave(875, 398.5133013333334, 335);
stavesmo231195.setAttribute('id', 'stavesmo231195');
stavesmo231195.setBegBarType(VF.Barline.type.NONE);
stavesmo231195.setContext(context);
stavesmo231195.draw();
smo231195v0.draw(context, stavesmo231195);
smo240393.setContext(context);
smo240393.draw();
const stavesmo232438 = new VF.Stave(875, 520.5133013333334, 335);
stavesmo232438.setAttribute('id', 'stavesmo232438');
stavesmo232438.setBegBarType(VF.Barline.type.NONE);
stavesmo232438.setContext(context);
stavesmo232438.draw();
smo232438v0.draw(context, stavesmo232438);
const stavesmo233627 = new VF.Stave(875, 643.5133013333334, 335);
stavesmo233627.setAttribute('id', 'stavesmo233627');
stavesmo233627.setBegBarType(VF.Barline.type.NONE);
stavesmo233627.setContext(context);
stavesmo233627.draw();
smo233627v0.draw(context, stavesmo233627);
smo233627v1.draw(context, stavesmo233627);
const rightsmo234202stavesmo2311952 = new VF.StaveConnector(stavesmo231195, stavesmo233627).setType(0);
rightsmo234202stavesmo2311952.setContext(context).draw();
const fmtsmo23122533 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo231225v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231225v0ar = [];
const smo231196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo231196.setAttribute('id', 'smo231196');
const smo231197 = new VF.Annotation('-');
smo231197.setAttribute('id', 'smo231197');
smo231197.setFont('Merriweather', 12, 'normal');
smo231197.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231196.addModifier(smo231197);
smo231197.addClass('lyric lyric-0 lyric-hyphen');
smo231225v0ar.push(smo231196);
const smo231198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo231198.setAttribute('id', 'smo231198');
const smo231199 = new VF.Annotation('ais');
smo231199.setAttribute('id', 'smo231199');
smo231199.setFont('Merriweather', 12, 'normal');
smo231199.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231198.addModifier(smo231199);
smo231199.addClass('lyric lyric-0');
const smo231200 = new VF.Annotation('du');
smo231200.setAttribute('id', 'smo231200');
smo231200.setFont('Merriweather', 12, 'normal');
smo231200.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231198.addModifier(smo231200);
smo231200.addClass('lyric lyric-1');
smo231225v0ar.push(smo231198);
const smo231201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo231201.setAttribute('id', 'smo231201');
const smo231202 = new VF.Annotation('ruit');
smo231202.setAttribute('id', 'smo231202');
smo231202.setFont('Merriweather', 12, 'normal');
smo231202.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231201.addModifier(smo231202);
smo231202.addClass('lyric lyric-0');
const smo231203 = new VF.Annotation('weißt');
smo231203.setAttribute('id', 'smo231203');
smo231203.setFont('Merriweather', 12, 'normal');
smo231203.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231201.addModifier(smo231203);
smo231203.addClass('lyric lyric-1');
smo231225v0ar.push(smo231201);
const smo231204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo231204.setAttribute('id', 'smo231204');
const smo231205 = new VF.Annotation('er');
smo231205.setAttribute('id', 'smo231205');
smo231205.setFont('Merriweather', 12, 'normal');
smo231205.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231204.addModifier(smo231205);
smo231205.addClass('lyric lyric-0');
const smo231206 = new VF.Annotation('doch,');
smo231206.setAttribute('id', 'smo231206');
smo231206.setFont('Merriweather', 12, 'normal');
smo231206.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231204.addModifier(smo231206);
smo231206.addClass('lyric lyric-1');
smo231225v0ar.push(smo231204);
const smo231207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo231207.setAttribute('id', 'smo231207');
const smo231208 = new VF.Annotation('Ich');
smo231208.setAttribute('id', 'smo231208');
smo231208.setFont('Merriweather', 12, 'normal');
smo231208.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231207.addModifier(smo231208);
smo231208.addClass('lyric lyric-0');
const smo231209 = new VF.Annotation('ich');
smo231209.setAttribute('id', 'smo231209');
smo231209.setFont('Merriweather', 12, 'normal');
smo231209.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231207.addModifier(smo231209);
smo231209.addClass('lyric lyric-1');
smo231225v0ar.push(smo231207);
smo231225v0.addTickables(smo231225v0ar)
fmtsmo23122533.joinVoices([smo231225v0]);
const fmtsmo23245833 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo232458v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232458v0ar = [];
const smo232439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo232439.setAttribute('id', 'smo232439');
smo232458v0ar.push(smo232439);
const smo232440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo232440.setAttribute('id', 'smo232440');
smo232458v0ar.push(smo232440);
const smo232441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo232441.setAttribute('id', 'smo232441');
smo232458v0ar.push(smo232441);
const smo232442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo232442.setAttribute('id', 'smo232442');
smo232458v0ar.push(smo232442);
smo232458v0.addTickables(smo232458v0ar)
fmtsmo23245833.joinVoices([smo232458v0]);
const fmtsmo23364833 = new VF.Formatter();
//
// voices and notes for stave 2 33
const smo233648v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233648v0ar = [];
const smo233628 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo233628.setAttribute('id', 'smo233628');
smo233628.addModifier(new VF.Dot(), 0);
smo233648v0ar.push(smo233628);
smo233648v0.addTickables(smo233648v0ar)
fmtsmo23364833.joinVoices([smo233648v0]);
const smo233648v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233648v1ar = [];
const smo233629 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo233629.setAttribute('id', 'smo233629');
smo233629.setStyle({ fillStyle: "#115511" });
const smo2336290acc = new VF.Accidental('#');
smo233629.addModifier(smo2336290acc, 0);
smo233648v1ar.push(smo233629);
const smo233630 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo233630.setAttribute('id', 'smo233630');
smo233630.setStyle({ fillStyle: "#115511" });
smo233648v1ar.push(smo233630);
const smo233631 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo233631.setAttribute('id', 'smo233631');
smo233631.setStyle({ fillStyle: "#115511" });
smo233648v1ar.push(smo233631);
const smo233632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo233632.setAttribute('id', 'smo233632');
smo233632.setStyle({ fillStyle: "#115511" });
smo233648v1ar.push(smo233632);
smo233648v1.addTickables(smo233648v1ar)
fmtsmo23364833.joinVoices([smo233648v1]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240407 = smo231201.getStemDirection();
smo231201.setStemDirection(dirsmo240407);
smo231204.setStemDirection(dirsmo240407);
smo231207.setStemDirection(dirsmo240407);
const smo240407 = new VF.Beam([smo231201,smo231204,smo231207]);
 
// formatting measures in staff group smo234202
fmtsmo23122533.format([smo231225v0,smo232458v0,smo233648v0,smo233648v1], 293);
const stavesmo231225 = new VF.Stave(66, 778.5133013333334, 367);
stavesmo231225.setAttribute('id', 'stavesmo231225');
stavesmo231225.setBegBarType(1);
stavesmo231225.addClef('treble');
const keysmo231225 = new VF.KeySignature('G');
keysmo231225.addToStave(stavesmo231225);
stavesmo231225.setContext(context);
stavesmo231225.draw();
smo231225v0.draw(context, stavesmo231225);
smo240407.setContext(context);
smo240407.draw();
const stavesmo232458 = new VF.Stave(66, 893.5133013333334, 367);
stavesmo232458.setAttribute('id', 'stavesmo232458');
stavesmo232458.setBegBarType(1);
stavesmo232458.addClef('treble');
const keysmo232458 = new VF.KeySignature('G');
keysmo232458.addToStave(stavesmo232458);
stavesmo232458.setContext(context);
stavesmo232458.draw();
smo232458v0.draw(context, stavesmo232458);
const stavesmo233648 = new VF.Stave(66, 1026.5133013333334, 367);
stavesmo233648.setAttribute('id', 'stavesmo233648');
stavesmo233648.setBegBarType(1);
stavesmo233648.addClef('bass');
const keysmo233648 = new VF.KeySignature('G');
keysmo233648.addToStave(stavesmo233648);
stavesmo233648.setContext(context);
stavesmo233648.draw();
smo233648v0.draw(context, stavesmo233648);
smo233648v1.draw(context, stavesmo233648);
const leftsmo234202stavesmo2312252 = new VF.StaveConnector(stavesmo231225, stavesmo233648).setType(1);
leftsmo234202stavesmo2312252.setContext(context).draw();
const fmtsmo23125034 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo231250v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231250v0ar = [];
const smo231226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231226.setAttribute('id', 'smo231226');
const smo231227 = new VF.Annotation('kom');
smo231227.setAttribute('id', 'smo231227');
smo231227.setFont('Merriweather', 12, 'normal');
smo231227.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231226.addModifier(smo231227);
smo231227.addClass('lyric lyric-0 lyric-hyphen');
const smo231228 = new VF.Annotation('lie');
smo231228.setAttribute('id', 'smo231228');
smo231228.setFont('Merriweather', 12, 'normal');
smo231228.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231226.addModifier(smo231228);
smo231228.addClass('lyric lyric-1 lyric-hyphen');
smo231250v0ar.push(smo231226);
const smo231229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo231229.setAttribute('id', 'smo231229');
const smo231230 = new VF.Annotation('me');
smo231230.setAttribute('id', 'smo231230');
smo231230.setFont('Merriweather', 12, 'normal');
smo231230.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231229.addModifier(smo231230);
smo231230.addClass('lyric lyric-0');
const smo231231 = new VF.Annotation('be');
smo231231.setAttribute('id', 'smo231231');
smo231231.setFont('Merriweather', 12, 'normal');
smo231231.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231229.addModifier(smo231231);
smo231231.addClass('lyric lyric-1 lyric-hyphen');
smo231250v0ar.push(smo231229);
const smo231232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231232.setAttribute('id', 'smo231232');
smo231232.addModifier(new VF.Dot(), 0);
const smo231234 = new VF.Annotation('bald!');
smo231234.setAttribute('id', 'smo231234');
smo231234.setFont('Merriweather', 12, 'normal');
smo231234.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231232.addModifier(smo231234);
smo231234.addClass('lyric lyric-0');
const smo231233 = new VF.Annotation('dich!');
smo231233.setAttribute('id', 'smo231233');
smo231233.setFont('Merriweather', 12, 'normal');
smo231233.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231232.addModifier(smo231233);
smo231233.addClass('lyric lyric-1');
smo231250v0ar.push(smo231232);
smo231250v0.addTickables(smo231250v0ar)
fmtsmo23125034.joinVoices([smo231250v0]);
const fmtsmo23247734 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo232477v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232477v0ar = [];
const smo232459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo232459.setAttribute('id', 'smo232459');
smo232459.addModifier(new VF.Dot(), 0);
smo232477v0ar.push(smo232459);
const smo232460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo232460.setAttribute('id', 'smo232460');
smo232477v0ar.push(smo232460);
const smo232461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo232461.setAttribute('id', 'smo232461');
smo232477v0ar.push(smo232461);
smo232477v0.addTickables(smo232477v0ar)
fmtsmo23247734.joinVoices([smo232477v0]);
const fmtsmo23366634 = new VF.Formatter();
//
// voices and notes for stave 2 34
const smo233666v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233666v0ar = [];
const smo233649 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo233649.setAttribute('id', 'smo233649');
smo233649.addModifier(new VF.Dot(), 0);
smo233666v0ar.push(smo233649);
smo233666v0.addTickables(smo233666v0ar)
fmtsmo23366634.joinVoices([smo233666v0]);
const smo233666v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233666v1ar = [];
const smo233650 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo233650.setAttribute('id', 'smo233650');
smo233650.setStyle({ fillStyle: "#115511" });
smo233650.addModifier(new VF.Dot(), 0);
smo233666v1ar.push(smo233650);
smo233666v1.addTickables(smo233666v1ar)
fmtsmo23366634.joinVoices([smo233666v1]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23125034.format([smo231250v0,smo232477v0,smo233666v0,smo233666v1], 200);
const stavesmo231250 = new VF.Stave(433, 778.5133013333334, 214);
stavesmo231250.setAttribute('id', 'stavesmo231250');
stavesmo231250.setBegBarType(VF.Barline.type.NONE);
stavesmo231250.setContext(context);
stavesmo231250.draw();
smo231250v0.draw(context, stavesmo231250);
const stavesmo232477 = new VF.Stave(433, 893.5133013333334, 214);
stavesmo232477.setAttribute('id', 'stavesmo232477');
stavesmo232477.setBegBarType(VF.Barline.type.NONE);
stavesmo232477.setContext(context);
stavesmo232477.draw();
smo232477v0.draw(context, stavesmo232477);
const stavesmo233666 = new VF.Stave(433, 1026.5133013333334, 214);
stavesmo233666.setAttribute('id', 'stavesmo233666');
stavesmo233666.setBegBarType(VF.Barline.type.NONE);
stavesmo233666.setContext(context);
stavesmo233666.draw();
smo233666v0.draw(context, stavesmo233666);
smo233666v1.draw(context, stavesmo233666);
const fmtsmo23127235 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo231272v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231272v0ar = [];
const smo231251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231251.setAttribute('id', 'smo231251');
smo231251.addModifier(new VF.Dot(), 0);
const smo231252 = new VF.Annotation('-');
smo231252.setAttribute('id', 'smo231252');
smo231252.setFont('Merriweather', 12, 'normal');
smo231252.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231251.addModifier(smo231252);
smo231252.addClass('lyric lyric-0 lyric-hyphen');
smo231272v0ar.push(smo231251);
const smo231253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo231253.setAttribute('id', 'smo231253');
smo231272v0ar.push(smo231253);
const smo231254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo231254.setAttribute('id', 'smo231254');
const smo231255 = new VF.Annotation('Ich');
smo231255.setAttribute('id', 'smo231255');
smo231255.setFont('Merriweather', 12, 'normal');
smo231255.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231254.addModifier(smo231255);
smo231255.addClass('lyric lyric-0');
const smo231256 = new VF.Annotation('ich');
smo231256.setAttribute('id', 'smo231256');
smo231256.setFont('Merriweather', 12, 'normal');
smo231256.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231254.addModifier(smo231256);
smo231256.addClass('lyric lyric-1');
smo231272v0ar.push(smo231254);
smo231272v0.addTickables(smo231272v0ar)
fmtsmo23127235.joinVoices([smo231272v0]);
const fmtsmo23249435 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo232494v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232494v0ar = [];
const smo232478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo232478.setAttribute('id', 'smo232478');
smo232478.addModifier(new VF.Dot(), 0);
smo232494v0ar.push(smo232478);
smo232494v0.addTickables(smo232494v0ar)
fmtsmo23249435.joinVoices([smo232494v0]);
const fmtsmo23368635 = new VF.Formatter();
//
// voices and notes for stave 2 35
const smo233686v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233686v0ar = [];
const smo233667 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo233667.setAttribute('id', 'smo233667');
smo233667.addModifier(new VF.Dot(), 0);
smo233686v0ar.push(smo233667);
smo233686v0.addTickables(smo233686v0ar)
fmtsmo23368635.joinVoices([smo233686v0]);
const smo233686v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233686v1ar = [];
const smo233668 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo233668.setAttribute('id', 'smo233668');
smo233668.setStyle({ fillStyle: "#115511" });
smo233686v1ar.push(smo233668);
const smo233669 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo233669.setAttribute('id', 'smo233669');
smo233669.setStyle({ fillStyle: "#115511" });
smo233686v1ar.push(smo233669);
const smo233670 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo233670.setAttribute('id', 'smo233670');
smo233670.setStyle({ fillStyle: "#115511" });
smo233670.addModifier(new VF.Dot(), 0);
smo233686v1ar.push(smo233670);
smo233686v1.addTickables(smo233686v1ar)
fmtsmo23368635.joinVoices([smo233686v1]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23127235.format([smo231272v0,smo232494v0,smo233686v0,smo233686v1], 155);
const stavesmo231272 = new VF.Stave(647, 778.5133013333334, 169);
stavesmo231272.setAttribute('id', 'stavesmo231272');
stavesmo231272.setBegBarType(VF.Barline.type.NONE);
stavesmo231272.setContext(context);
stavesmo231272.draw();
smo231272v0.draw(context, stavesmo231272);
const stavesmo232494 = new VF.Stave(647, 893.5133013333334, 169);
stavesmo232494.setAttribute('id', 'stavesmo232494');
stavesmo232494.setBegBarType(VF.Barline.type.NONE);
stavesmo232494.setContext(context);
stavesmo232494.draw();
smo232494v0.draw(context, stavesmo232494);
const stavesmo233686 = new VF.Stave(647, 1026.5133013333334, 169);
stavesmo233686.setAttribute('id', 'stavesmo233686');
stavesmo233686.setBegBarType(VF.Barline.type.NONE);
stavesmo233686.setContext(context);
stavesmo233686.draw();
smo233686v0.draw(context, stavesmo233686);
smo233686v1.draw(context, stavesmo233686);
const fmtsmo23129736 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo231297v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231297v0ar = [];
const smo231273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231273.setAttribute('id', 'smo231273');
const smo231274 = new VF.Annotation('kom');
smo231274.setAttribute('id', 'smo231274');
smo231274.setFont('Merriweather', 12, 'normal');
smo231274.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231273.addModifier(smo231274);
smo231274.addClass('lyric lyric-0 lyric-hyphen');
const smo231275 = new VF.Annotation('lie');
smo231275.setAttribute('id', 'smo231275');
smo231275.setFont('Merriweather', 12, 'normal');
smo231275.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231273.addModifier(smo231275);
smo231275.addClass('lyric lyric-1 lyric-hyphen');
smo231297v0ar.push(smo231273);
const smo231276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo231276.setAttribute('id', 'smo231276');
const smo231277 = new VF.Annotation('me');
smo231277.setAttribute('id', 'smo231277');
smo231277.setFont('Merriweather', 12, 'normal');
smo231277.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231276.addModifier(smo231277);
smo231277.addClass('lyric lyric-0');
const smo231278 = new VF.Annotation('be');
smo231278.setAttribute('id', 'smo231278');
smo231278.setFont('Merriweather', 12, 'normal');
smo231278.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231276.addModifier(smo231278);
smo231278.addClass('lyric lyric-1');
smo231297v0ar.push(smo231276);
const smo231279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231279.setAttribute('id', 'smo231279');
smo231279.addModifier(new VF.Dot(), 0);
const smo231280 = new VF.Annotation('bald');
smo231280.setAttribute('id', 'smo231280');
smo231280.setFont('Merriweather', 12, 'normal');
smo231280.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231279.addModifier(smo231280);
smo231280.addClass('lyric lyric-0');
const smo231281 = new VF.Annotation('dich!');
smo231281.setAttribute('id', 'smo231281');
smo231281.setFont('Merriweather', 12, 'normal');
smo231281.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231279.addModifier(smo231281);
smo231281.addClass('lyric lyric-1');
smo231297v0ar.push(smo231279);
smo231297v0.addTickables(smo231297v0ar)
fmtsmo23129736.joinVoices([smo231297v0]);
const fmtsmo23251136 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo232511v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232511v0ar = [];
const smo232495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo232495.setAttribute('id', 'smo232495');
smo232495.addModifier(new VF.Dot(), 0);
smo232511v0ar.push(smo232495);
smo232511v0.addTickables(smo232511v0ar)
fmtsmo23251136.joinVoices([smo232511v0]);
const fmtsmo23370636 = new VF.Formatter();
//
// voices and notes for stave 2 36
const smo233706v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233706v0ar = [];
const smo233687 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo233687.setAttribute('id', 'smo233687');
smo233687.addModifier(new VF.Dot(), 0);
smo233706v0ar.push(smo233687);
smo233706v0.addTickables(smo233706v0ar)
fmtsmo23370636.joinVoices([smo233706v0]);
const smo233706v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233706v1ar = [];
const smo233688 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
smo233688.setAttribute('id', 'smo233688');
smo233688.setStyle({ fillStyle: '#aaaaaa7f' });
smo233688.addModifier(new VF.Dot(), 0);
smo233706v1ar.push(smo233688);
const smo233689 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
smo233689.setAttribute('id', 'smo233689');
smo233689.setStyle({ fillStyle: '#aaaaaa7f' });
smo233706v1ar.push(smo233689);
const smo233690 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo233690.setAttribute('id', 'smo233690');
smo233690.setStyle({ fillStyle: "#115511" });
smo233706v1ar.push(smo233690);
smo233706v1.addTickables(smo233706v1ar)
fmtsmo23370636.joinVoices([smo233706v1]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23129736.format([smo231297v0,smo232511v0,smo233706v0,smo233706v1], 200);
const stavesmo231297 = new VF.Stave(816, 778.5133013333334, 214);
stavesmo231297.setAttribute('id', 'stavesmo231297');
stavesmo231297.setBegBarType(VF.Barline.type.NONE);
stavesmo231297.setContext(context);
stavesmo231297.draw();
smo231297v0.draw(context, stavesmo231297);
const stavesmo232511 = new VF.Stave(816, 893.5133013333334, 214);
stavesmo232511.setAttribute('id', 'stavesmo232511');
stavesmo232511.setBegBarType(VF.Barline.type.NONE);
stavesmo232511.setContext(context);
stavesmo232511.draw();
smo232511v0.draw(context, stavesmo232511);
const stavesmo233706 = new VF.Stave(816, 1026.5133013333334, 214);
stavesmo233706.setAttribute('id', 'stavesmo233706');
stavesmo233706.setBegBarType(VF.Barline.type.NONE);
stavesmo233706.setContext(context);
stavesmo233706.draw();
smo233706v0.draw(context, stavesmo233706);
smo233706v1.draw(context, stavesmo233706);
const fmtsmo23131937 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo231319v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231319v0ar = [];
const smo231298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo231298.setAttribute('id', 'smo231298');
smo231319v0ar.push(smo231298);
const smo231299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo231299.setAttribute('id', 'smo231299');
smo231319v0ar.push(smo231299);
const smo231300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo231300.setAttribute('id', 'smo231300');
smo231319v0ar.push(smo231300);
const smo231301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo231301.setAttribute('id', 'smo231301');
const smo231302 = new VF.Annotation('Mein');
smo231302.setAttribute('id', 'smo231302');
smo231302.setFont('Merriweather', 12, 'normal');
smo231302.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231301.addModifier(smo231302);
smo231302.addClass('lyric lyric-0');
const smo231303 = new VF.Annotation('Tra');
smo231303.setAttribute('id', 'smo231303');
smo231303.setFont('Merriweather', 12, 'normal');
smo231303.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231301.addModifier(smo231303);
smo231303.addClass('lyric lyric-1 lyric-hyphen');
smo231319v0ar.push(smo231301);
smo231319v0.addTickables(smo231319v0ar)
fmtsmo23131937.joinVoices([smo231319v0]);
const fmtsmo23252837 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo232528v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232528v0ar = [];
const smo232512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo232512.setAttribute('id', 'smo232512');
smo232512.addModifier(new VF.Dot(), 0);
smo232528v0ar.push(smo232512);
smo232528v0.addTickables(smo232528v0ar)
fmtsmo23252837.joinVoices([smo232528v0]);
const fmtsmo23372637 = new VF.Formatter();
//
// voices and notes for stave 2 37
const smo233726v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233726v0ar = [];
const smo233707 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo233707.setAttribute('id', 'smo233707');
smo233707.addModifier(new VF.Dot(), 0);
smo233726v0ar.push(smo233707);
smo233726v0.addTickables(smo233726v0ar)
fmtsmo23372637.joinVoices([smo233726v0]);
const smo233726v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233726v1ar = [];
const smo233708 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo233708.setAttribute('id', 'smo233708');
smo233708.setStyle({ fillStyle: "#115511" });
smo233726v1ar.push(smo233708);
const smo233709 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo233709.setAttribute('id', 'smo233709');
smo233709.setStyle({ fillStyle: "#115511" });
smo233726v1ar.push(smo233709);
const smo233710 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo233710.setAttribute('id', 'smo233710');
smo233710.setStyle({ fillStyle: "#115511" });
smo233710.addModifier(new VF.Dot(), 0);
smo233726v1ar.push(smo233710);
smo233726v1.addTickables(smo233726v1ar)
fmtsmo23372637.joinVoices([smo233726v1]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23131937.format([smo231319v0,smo232528v0,smo233726v0,smo233726v1], 170);
const stavesmo231319 = new VF.Stave(1030, 778.5133013333334, 184);
stavesmo231319.setAttribute('id', 'stavesmo231319');
stavesmo231319.setBegBarType(VF.Barline.type.NONE);
stavesmo231319.setContext(context);
stavesmo231319.draw();
smo231319v0.draw(context, stavesmo231319);
const stavesmo232528 = new VF.Stave(1030, 893.5133013333334, 184);
stavesmo232528.setAttribute('id', 'stavesmo232528');
stavesmo232528.setBegBarType(VF.Barline.type.NONE);
stavesmo232528.setContext(context);
stavesmo232528.draw();
smo232528v0.draw(context, stavesmo232528);
const stavesmo233726 = new VF.Stave(1030, 1026.5133013333334, 184);
stavesmo233726.setAttribute('id', 'stavesmo233726');
stavesmo233726.setBegBarType(VF.Barline.type.NONE);
stavesmo233726.setContext(context);
stavesmo233726.draw();
smo233726v0.draw(context, stavesmo233726);
smo233726v1.draw(context, stavesmo233726);
const rightsmo234202stavesmo2313192 = new VF.StaveConnector(stavesmo231319, stavesmo233726).setType(0);
rightsmo234202stavesmo2313192.setContext(context).draw();
const fmtsmo23133838 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo231338v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231338v0ar = [];
const smo231320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231320.setAttribute('id', 'smo231320');
smo231320.addModifier(new VF.Dot(), 0);
const smo231321 = new VF.Annotation('Shatz');
smo231321.setAttribute('id', 'smo231321');
smo231321.setFont('Merriweather', 12, 'normal');
smo231321.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231320.addModifier(smo231321);
smo231321.addClass('lyric lyric-0');
const smo231322 = new VF.Annotation('ra!');
smo231322.setAttribute('id', 'smo231322');
smo231322.setFont('Merriweather', 12, 'normal');
smo231322.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231320.addModifier(smo231322);
smo231322.addClass('lyric lyric-1');
smo231338v0ar.push(smo231320);
smo231338v0.addTickables(smo231338v0ar)
fmtsmo23133838.joinVoices([smo231338v0]);
const fmtsmo23254538 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo232545v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232545v0ar = [];
const smo232529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n","bn/4/n"]}'))
smo232529.setAttribute('id', 'smo232529');
smo232529.addModifier(new VF.Dot(), 0);
smo232529.addModifier(new VF.Dot(), 1);
smo232545v0ar.push(smo232529);
smo232545v0.addTickables(smo232545v0ar)
fmtsmo23254538.joinVoices([smo232545v0]);
const fmtsmo23374638 = new VF.Formatter();
//
// voices and notes for stave 2 38
const smo233746v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233746v0ar = [];
const smo233727 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo233727.setAttribute('id', 'smo233727');
smo233746v0ar.push(smo233727);
const smo233728 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo233728.setAttribute('id', 'smo233728');
smo233746v0ar.push(smo233728);
const smo233729 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo233729.setAttribute('id', 'smo233729');
smo233746v0ar.push(smo233729);
const smo233730 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo233730.setAttribute('id', 'smo233730');
smo233746v0ar.push(smo233730);
smo233746v0.addTickables(smo233746v0ar)
fmtsmo23374638.joinVoices([smo233746v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23133838.format([smo231338v0,smo232545v0,smo233746v0], 150);
const stavesmo231338 = new VF.Stave(66, 1166.5133013333334, 224);
stavesmo231338.setAttribute('id', 'stavesmo231338');
stavesmo231338.setBegBarType(1);
stavesmo231338.addClef('treble');
const keysmo231338 = new VF.KeySignature('G');
keysmo231338.addToStave(stavesmo231338);
stavesmo231338.setContext(context);
stavesmo231338.draw();
smo231338v0.draw(context, stavesmo231338);
const stavesmo232545 = new VF.Stave(66, 1298.5133013333334, 224);
stavesmo232545.setAttribute('id', 'stavesmo232545');
stavesmo232545.setBegBarType(1);
stavesmo232545.addClef('treble');
const keysmo232545 = new VF.KeySignature('G');
keysmo232545.addToStave(stavesmo232545);
stavesmo232545.setContext(context);
stavesmo232545.draw();
smo232545v0.draw(context, stavesmo232545);
const stavesmo233746 = new VF.Stave(66, 1424.5133013333334, 224);
stavesmo233746.setAttribute('id', 'stavesmo233746');
stavesmo233746.setBegBarType(1);
stavesmo233746.addClef('bass');
const keysmo233746 = new VF.KeySignature('G');
keysmo233746.addToStave(stavesmo233746);
stavesmo233746.setContext(context);
stavesmo233746.draw();
smo233746v0.draw(context, stavesmo233746);
const leftsmo234202stavesmo2313382 = new VF.StaveConnector(stavesmo231338, stavesmo233746).setType(1);
leftsmo234202stavesmo2313382.setContext(context).draw();
const fmtsmo23136939 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo231369v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231369v0ar = [];
const smo231339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo231339.setAttribute('id', 'smo231339');
const smo231340 = new VF.Annotation('-');
smo231340.setAttribute('id', 'smo231340');
smo231340.setFont('Merriweather', 12, 'normal');
smo231340.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231339.addModifier(smo231340);
smo231340.addClass('lyric lyric-0 lyric-hyphen');
smo231369v0ar.push(smo231339);
const smo231341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo231341.setAttribute('id', 'smo231341');
smo231369v0ar.push(smo231341);
const smo231342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo231342.setAttribute('id', 'smo231342');
const smo231343 = new VF.Annotation('der');
smo231343.setAttribute('id', 'smo231343');
smo231343.setFont('Merriweather', 12, 'normal');
smo231343.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231342.addModifier(smo231343);
smo231343.addClass('lyric lyric-0');
const smo231344 = new VF.Annotation('ich');
smo231344.setAttribute('id', 'smo231344');
smo231344.setFont('Merriweather', 12, 'normal');
smo231344.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231342.addModifier(smo231344);
smo231344.addClass('lyric lyric-1');
smo231369v0ar.push(smo231342);
const smo231345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo231345.setAttribute('id', 'smo231345');
const smo231346 = new VF.Annotation('ist');
smo231346.setAttribute('id', 'smo231346');
smo231346.setFont('Merriweather', 12, 'normal');
smo231346.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231345.addModifier(smo231346);
smo231346.addClass('lyric lyric-0');
const smo231347 = new VF.Annotation('hö');
smo231347.setAttribute('id', 'smo231347');
smo231347.setFont('Merriweather', 12, 'normal');
smo231347.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231345.addModifier(smo231347);
smo231347.addClass('lyric lyric-1 lyric-hyphen');
smo231369v0ar.push(smo231345);
const smo231348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo231348.setAttribute('id', 'smo231348');
const smo231349 = new VF.Annotation('Po');
smo231349.setAttribute('id', 'smo231349');
smo231349.setFont('Merriweather', 12, 'normal');
smo231349.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231348.addModifier(smo231349);
smo231349.addClass('lyric lyric-0 lyric-hyphen');
const smo231350 = new VF.Annotation('re');
smo231350.setAttribute('id', 'smo231350');
smo231350.setFont('Merriweather', 12, 'normal');
smo231350.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231348.addModifier(smo231350);
smo231350.addClass('lyric lyric-1');
smo231369v0ar.push(smo231348);
const smo231351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo231351.setAttribute('id', 'smo231351');
const smo231352 = new VF.Annotation('stil');
smo231352.setAttribute('id', 'smo231352');
smo231352.setFont('Merriweather', 12, 'normal');
smo231352.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231351.addModifier(smo231352);
smo231352.addClass('lyric lyric-0 lyric-hyphen');
const smo231353 = new VF.Annotation('sein');
smo231353.setAttribute('id', 'smo231353');
smo231353.setFont('Merriweather', 12, 'normal');
smo231353.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231351.addModifier(smo231353);
smo231353.addClass('lyric lyric-1');
smo231369v0ar.push(smo231351);
smo231369v0.addTickables(smo231369v0ar)
fmtsmo23136939.joinVoices([smo231369v0]);
const fmtsmo23256439 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo232564v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232564v0ar = [];
const smo232546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n","bn/4/n"]}'))
smo232546.setAttribute('id', 'smo232546');
smo232546.addModifier(new VF.Dot(), 0);
smo232546.addModifier(new VF.Dot(), 1);
smo232564v0ar.push(smo232546);
const smo232547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo232547.setAttribute('id', 'smo232547');
smo232564v0ar.push(smo232547);
const smo232548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo232548.setAttribute('id', 'smo232548');
smo232564v0ar.push(smo232548);
smo232564v0.addTickables(smo232564v0ar)
fmtsmo23256439.joinVoices([smo232564v0]);
const fmtsmo23376639 = new VF.Formatter();
//
// voices and notes for stave 2 39
const smo233766v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233766v0ar = [];
const smo233747 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo233747.setAttribute('id', 'smo233747');
smo233766v0ar.push(smo233747);
const smo233748 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo233748.setAttribute('id', 'smo233748');
smo233766v0ar.push(smo233748);
const smo233749 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo233749.setAttribute('id', 'smo233749');
smo233766v0ar.push(smo233749);
const smo233750 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo233750.setAttribute('id', 'smo233750');
smo233766v0ar.push(smo233750);
smo233766v0.addTickables(smo233766v0ar)
fmtsmo23376639.joinVoices([smo233766v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240450 = smo231345.getStemDirection();
smo231345.setStemDirection(dirsmo240450);
smo231348.setStemDirection(dirsmo240450);
smo231351.setStemDirection(dirsmo240450);
const smo240450 = new VF.Beam([smo231345,smo231348,smo231351]);
 
// formatting measures in staff group smo234202
fmtsmo23136939.format([smo231369v0,smo232564v0,smo233766v0], 271);
const stavesmo231369 = new VF.Stave(290, 1166.5133013333334, 285);
stavesmo231369.setAttribute('id', 'stavesmo231369');
stavesmo231369.setBegBarType(VF.Barline.type.NONE);
stavesmo231369.setContext(context);
stavesmo231369.draw();
smo231369v0.draw(context, stavesmo231369);
smo240450.setContext(context);
smo240450.draw();
const stavesmo232564 = new VF.Stave(290, 1298.5133013333334, 285);
stavesmo232564.setAttribute('id', 'stavesmo232564');
stavesmo232564.setBegBarType(VF.Barline.type.NONE);
stavesmo232564.setContext(context);
stavesmo232564.draw();
smo232564v0.draw(context, stavesmo232564);
const stavesmo233766 = new VF.Stave(290, 1424.5133013333334, 285);
stavesmo233766.setAttribute('id', 'stavesmo233766');
stavesmo233766.setBegBarType(VF.Barline.type.NONE);
stavesmo233766.setContext(context);
stavesmo233766.draw();
smo233766v0.draw(context, stavesmo233766);
const fmtsmo23138840 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo231388v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231388v0ar = [];
const smo231370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo231370.setAttribute('id', 'smo231370');
smo231370.addModifier(new VF.Dot(), 0);
const smo231371 = new VF.Annotation('lion');
smo231371.setAttribute('id', 'smo231371');
smo231371.setFont('Merriweather', 12, 'normal');
smo231371.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231370.addModifier(smo231371);
smo231371.addClass('lyric lyric-0');
const smo231372 = new VF.Annotation('Lied!');
smo231372.setAttribute('id', 'smo231372');
smo231372.setFont('Merriweather', 12, 'normal');
smo231372.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231370.addModifier(smo231372);
smo231372.addClass('lyric lyric-1');
smo231388v0ar.push(smo231370);
smo231388v0.addTickables(smo231388v0ar)
fmtsmo23138840.joinVoices([smo231388v0]);
const fmtsmo23258140 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo232581v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232581v0ar = [];
const smo232565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo232565.setAttribute('id', 'smo232565');
smo232565.addModifier(new VF.Dot(), 0);
smo232565.addModifier(new VF.Dot(), 1);
smo232581v0ar.push(smo232565);
smo232581v0.addTickables(smo232581v0ar)
fmtsmo23258140.joinVoices([smo232581v0]);
const fmtsmo23379040 = new VF.Formatter();
//
// voices and notes for stave 2 40
const smo233790v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233790v0ar = [];
const smo233767 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo233767.setAttribute('id', 'smo233767');
smo233790v0ar.push(smo233767);
const smo233768 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo233768.setAttribute('id', 'smo233768');
smo233790v0ar.push(smo233768);
const smo233769 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo233769.setAttribute('id', 'smo233769');
smo233790v0ar.push(smo233769);
const smo233770 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo233770.setAttribute('id', 'smo233770');
smo233790v0ar.push(smo233770);
smo233790v0.addTickables(smo233790v0ar)
fmtsmo23379040.joinVoices([smo233790v0]);
const smo233790v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233790v1ar = [];
const smo233771 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo233771.setAttribute('id', 'smo233771');
smo233771.setStyle({ fillStyle: "#115511" });
smo233790v1ar.push(smo233771);
const smo233772 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo233772.setAttribute('id', 'smo233772');
smo233772.setStyle({ fillStyle: "#115511" });
smo233790v1ar.push(smo233772);
const smo233773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo233773.setAttribute('id', 'smo233773');
smo233773.setStyle({ fillStyle: "#115511" });
smo233790v1ar.push(smo233773);
const smo233774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo233774.setAttribute('id', 'smo233774');
smo233774.setStyle({ fillStyle: "#115511" });
smo233790v1ar.push(smo233774);
smo233790v1.addTickables(smo233790v1ar)
fmtsmo23379040.joinVoices([smo233790v1]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23138840.format([smo231388v0,smo232581v0,smo233790v0,smo233790v1], 145);
const stavesmo231388 = new VF.Stave(575, 1166.5133013333334, 159);
stavesmo231388.setAttribute('id', 'stavesmo231388');
stavesmo231388.setBegBarType(VF.Barline.type.NONE);
stavesmo231388.setContext(context);
stavesmo231388.draw();
smo231388v0.draw(context, stavesmo231388);
const stavesmo232581 = new VF.Stave(575, 1298.5133013333334, 159);
stavesmo232581.setAttribute('id', 'stavesmo232581');
stavesmo232581.setBegBarType(VF.Barline.type.NONE);
stavesmo232581.setContext(context);
stavesmo232581.draw();
smo232581v0.draw(context, stavesmo232581);
const stavesmo233790 = new VF.Stave(575, 1424.5133013333334, 159);
stavesmo233790.setAttribute('id', 'stavesmo233790');
stavesmo233790.setBegBarType(VF.Barline.type.NONE);
stavesmo233790.setContext(context);
stavesmo233790.draw();
smo233790v0.draw(context, stavesmo233790);
smo233790v1.draw(context, stavesmo233790);
const fmtsmo23141841 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo231418v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231418v0ar = [];
const smo231389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo231389.setAttribute('id', 'smo231389');
const smo231390 = new VF.Annotation('-');
smo231390.setAttribute('id', 'smo231390');
smo231390.setFont('Merriweather', 12, 'normal');
smo231390.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231389.addModifier(smo231390);
smo231390.addClass('lyric lyric-0 lyric-hyphen');
smo231418v0ar.push(smo231389);
const smo231391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo231391.setAttribute('id', 'smo231391');
const smo231392 = new VF.Annotation('er');
smo231392.setAttribute('id', 'smo231392');
smo231392.setFont('Merriweather', 12, 'normal');
smo231392.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231391.addModifier(smo231392);
smo231392.addClass('lyric lyric-0');
const smo231393 = new VF.Annotation('ich');
smo231393.setAttribute('id', 'smo231393');
smo231393.setFont('Merriweather', 12, 'normal');
smo231393.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231391.addModifier(smo231393);
smo231393.addClass('lyric lyric-1');
smo231418v0ar.push(smo231391);
const smo231394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo231394.setAttribute('id', 'smo231394');
const smo231395 = new VF.Annotation('fährt');
smo231395.setAttribute('id', 'smo231395');
smo231395.setFont('Merriweather', 12, 'normal');
smo231395.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231394.addModifier(smo231395);
smo231395.addClass('lyric lyric-0');
const smo231396 = new VF.Annotation('hö');
smo231396.setAttribute('id', 'smo231396');
smo231396.setFont('Merriweather', 12, 'normal');
smo231396.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231394.addModifier(smo231396);
smo231396.addClass('lyric lyric-1 lyric-hyphen');
smo231418v0ar.push(smo231394);
const smo231397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo231397.setAttribute('id', 'smo231397');
const smo231398 = new VF.Annotation('durch');
smo231398.setAttribute('id', 'smo231398');
smo231398.setFont('Merriweather', 12, 'normal');
smo231398.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231397.addModifier(smo231398);
smo231398.addClass('lyric lyric-0');
const smo231399 = new VF.Annotation('re');
smo231399.setAttribute('id', 'smo231399');
smo231399.setFont('Merriweather', 12, 'normal');
smo231399.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231397.addModifier(smo231399);
smo231399.addClass('lyric lyric-1');
smo231418v0ar.push(smo231397);
const smo231400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo231400.setAttribute('id', 'smo231400');
const smo231401 = new VF.Annotation('die');
smo231401.setAttribute('id', 'smo231401');
smo231401.setFont('Merriweather', 12, 'normal');
smo231401.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231400.addModifier(smo231401);
smo231401.addClass('lyric lyric-0');
const smo231402 = new VF.Annotation('es');
smo231402.setAttribute('id', 'smo231402');
smo231402.setFont('Merriweather', 12, 'normal');
smo231402.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231400.addModifier(smo231402);
smo231402.addClass('lyric lyric-1');
smo231418v0ar.push(smo231400);
smo231418v0.addTickables(smo231418v0ar)
fmtsmo23141841.joinVoices([smo231418v0]);
const fmtsmo23259941 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo232599v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232599v0ar = [];
const smo232582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo232582.setAttribute('id', 'smo232582');
smo232582.addModifier(new VF.Dot(), 0);
smo232582.addModifier(new VF.Dot(), 1);
smo232599v0ar.push(smo232582);
const smo232583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo232583.setAttribute('id', 'smo232583');
smo232583.addModifier(new VF.Dot(), 0);
smo232599v0ar.push(smo232583);
smo232599v0.addTickables(smo232599v0ar)
fmtsmo23259941.joinVoices([smo232599v0]);
const fmtsmo23381441 = new VF.Formatter();
//
// voices and notes for stave 2 41
const smo233814v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233814v0ar = [];
const smo233791 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo233791.setAttribute('id', 'smo233791');
smo233814v0ar.push(smo233791);
const smo233792 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo233792.setAttribute('id', 'smo233792');
smo233814v0ar.push(smo233792);
const smo233793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo233793.setAttribute('id', 'smo233793');
smo233814v0ar.push(smo233793);
const smo233794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo233794.setAttribute('id', 'smo233794');
smo233814v0ar.push(smo233794);
smo233814v0.addTickables(smo233814v0ar)
fmtsmo23381441.joinVoices([smo233814v0]);
const smo233814v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233814v1ar = [];
const smo233795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo233795.setAttribute('id', 'smo233795');
smo233795.setStyle({ fillStyle: "#115511" });
smo233814v1ar.push(smo233795);
const smo233796 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo233796.setAttribute('id', 'smo233796');
smo233796.setStyle({ fillStyle: "#115511" });
smo233814v1ar.push(smo233796);
const smo233797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo233797.setAttribute('id', 'smo233797');
smo233797.setStyle({ fillStyle: "#115511" });
smo233814v1ar.push(smo233797);
const smo233798 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo233798.setAttribute('id', 'smo233798');
smo233798.setStyle({ fillStyle: "#115511" });
smo233814v1ar.push(smo233798);
smo233814v1.addTickables(smo233814v1ar)
fmtsmo23381441.joinVoices([smo233814v1]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240463 = smo231394.getStemDirection();
smo231394.setStemDirection(dirsmo240463);
smo231397.setStemDirection(dirsmo240463);
smo231400.setStemDirection(dirsmo240463);
const smo240463 = new VF.Beam([smo231394,smo231397,smo231400]);
 
// formatting measures in staff group smo234202
fmtsmo23141841.format([smo231418v0,smo232599v0,smo233814v0,smo233814v1], 291);
const stavesmo231418 = new VF.Stave(734, 1166.5133013333334, 305);
stavesmo231418.setAttribute('id', 'stavesmo231418');
stavesmo231418.setBegBarType(VF.Barline.type.NONE);
stavesmo231418.setContext(context);
stavesmo231418.draw();
smo231418v0.draw(context, stavesmo231418);
smo240463.setContext(context);
smo240463.draw();
const stavesmo232599 = new VF.Stave(734, 1298.5133013333334, 305);
stavesmo232599.setAttribute('id', 'stavesmo232599');
stavesmo232599.setBegBarType(VF.Barline.type.NONE);
stavesmo232599.setContext(context);
stavesmo232599.draw();
smo232599v0.draw(context, stavesmo232599);
const stavesmo233814 = new VF.Stave(734, 1424.5133013333334, 305);
stavesmo233814.setAttribute('id', 'stavesmo233814');
stavesmo233814.setBegBarType(VF.Barline.type.NONE);
stavesmo233814.setContext(context);
stavesmo233814.draw();
smo233814v0.draw(context, stavesmo233814);
smo233814v1.draw(context, stavesmo233814);
const fmtsmo23144042 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo231440v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231440v0ar = [];
const smo231419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo231419.setAttribute('id', 'smo231419');
smo231419.addModifier(new VF.Dot(), 0);
const smo231420 = new VF.Annotation('Fel');
smo231420.setAttribute('id', 'smo231420');
smo231420.setFont('Merriweather', 12, 'normal');
smo231420.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231419.addModifier(smo231420);
smo231420.addClass('lyric lyric-0 lyric-hyphen');
const smo231421 = new VF.Annotation('sin');
smo231421.setAttribute('id', 'smo231421');
smo231421.setFont('Merriweather', 12, 'normal');
smo231421.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231419.addModifier(smo231421);
smo231421.addClass('lyric lyric-1 lyric-hyphen');
smo231440v0ar.push(smo231419);
const smo231422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo231422.setAttribute('id', 'smo231422');
smo231422.addModifier(new VF.Dot(), 0);
const smo231423 = new VF.Annotation('er');
smo231423.setAttribute('id', 'smo231423');
smo231423.setFont('Merriweather', 12, 'normal');
smo231423.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231422.addModifier(smo231423);
smo231423.addClass('lyric lyric-0');
const smo231424 = new VF.Annotation('gen,');
smo231424.setAttribute('id', 'smo231424');
smo231424.setFont('Merriweather', 12, 'normal');
smo231424.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo231422.addModifier(smo231424);
smo231424.addClass('lyric lyric-1');
smo231440v0ar.push(smo231422);
smo231440v0.addTickables(smo231440v0ar)
fmtsmo23144042.joinVoices([smo231440v0]);
const fmtsmo23261642 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo232616v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232616v0ar = [];
const smo232600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","f#/5/n","dn/6/n"]}'))
smo232600.setAttribute('id', 'smo232600');
smo232600.addModifier(new VF.Dot(), 0);
smo232600.addModifier(new VF.Dot(), 1);
smo232600.addModifier(new VF.Dot(), 2);
smo232616v0ar.push(smo232600);
smo232616v0.addTickables(smo232616v0ar)
fmtsmo23261642.joinVoices([smo232616v0]);
const fmtsmo23383642 = new VF.Formatter();
//
// voices and notes for stave 2 42
const smo233836v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233836v0ar = [];
const smo233815 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo233815.setAttribute('id', 'smo233815');
smo233836v0ar.push(smo233815);
const smo233816 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo233816.setAttribute('id', 'smo233816');
smo233836v0ar.push(smo233816);
const smo233817 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo233817.setAttribute('id', 'smo233817');
smo233836v0ar.push(smo233817);
const smo233818 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo233818.setAttribute('id', 'smo233818');
smo233836v0ar.push(smo233818);
smo233836v0.addTickables(smo233836v0ar)
fmtsmo23383642.joinVoices([smo233836v0]);
const smo233836v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233836v1ar = [];
const smo233819 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo233819.setAttribute('id', 'smo233819');
smo233819.setStyle({ fillStyle: "#115511" });
smo233819.addModifier(new VF.Dot(), 0);
smo233836v1ar.push(smo233819);
const smo233820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
smo233820.setAttribute('id', 'smo233820');
smo233820.setStyle({ fillStyle: "#115511" });
smo233820.addModifier(new VF.Dot(), 0);
smo233836v1ar.push(smo233820);
smo233836v1.addTickables(smo233836v1ar)
fmtsmo23383642.joinVoices([smo233836v1]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23144042.format([smo231440v0,smo232616v0,smo233836v0,smo233836v1], 160);
const stavesmo231440 = new VF.Stave(1039, 1166.5133013333334, 174);
stavesmo231440.setAttribute('id', 'stavesmo231440');
stavesmo231440.setBegBarType(VF.Barline.type.NONE);
stavesmo231440.setContext(context);
stavesmo231440.draw();
smo231440v0.draw(context, stavesmo231440);
const stavesmo232616 = new VF.Stave(1039, 1298.5133013333334, 174);
stavesmo232616.setAttribute('id', 'stavesmo232616');
stavesmo232616.setBegBarType(VF.Barline.type.NONE);
stavesmo232616.setContext(context);
stavesmo232616.draw();
smo232616v0.draw(context, stavesmo232616);
const stavesmo233836 = new VF.Stave(1039, 1424.5133013333334, 174);
stavesmo233836.setAttribute('id', 'stavesmo233836');
stavesmo233836.setBegBarType(VF.Barline.type.NONE);
stavesmo233836.setContext(context);
stavesmo233836.draw();
smo233836v0.draw(context, stavesmo233836);
smo233836v1.draw(context, stavesmo233836);
const rightsmo234202stavesmo2314402 = new VF.StaveConnector(stavesmo231440, stavesmo233836).setType(0);
rightsmo234202stavesmo2314402.setContext(context).draw();
// modifier from 0-26-0-0 to 0-27-0-0
const smo241256 = new VF.Curve(smo231029, smo231048, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo241256.setContext(context).draw();
// modifier from 0-22-0-0 to 0-23-0-0
const smo241257 = new VF.StaveTie({ first_note: smo230937, last_note: smo230956, 
          firstNote: smo230937, lastNote: smo230956, first_indices: [0], last_indices: [0]});
smo241257.setContext(context).draw();
// modifier from 0-25-0-0 to 0-25-0-1
const smo241258 = new VF.StaveTie({ first_note: smo231005, last_note: smo231008, 
          firstNote: smo231005, lastNote: smo231008, first_indices: [0], last_indices: [0]});
smo241258.setContext(context).draw();
// modifier from 0-30-0-0 to 0-31-0-0
const smo241259 = new VF.StaveTie({ first_note: smo231121, last_note: smo231140, 
          firstNote: smo231121, lastNote: smo231140, first_indices: [0], last_indices: [0]});
smo241259.setContext(context).draw();
// modifier from 0-32-0-3 to 0-33-0-0
const smo241260 = new VF.StaveTie({ first_note: smo231177, last_note: null, 
          firstNote: smo231177, lastNote: null, first_indices: [0], last_indices: [0]});
smo241260.setContext(context).draw();
// modifier from 0-32-0-3 to 0-33-0-0
const smo241261 = new VF.StaveTie({ first_note: null, last_note: smo231196, 
          firstNote: null, lastNote: smo231196, first_indices: [0], last_indices: [0]});
smo241261.setContext(context).draw();
// modifier from 0-34-0-2 to 0-35-0-0
const smo241262 = new VF.StaveTie({ first_note: smo231232, last_note: smo231251, 
          firstNote: smo231232, lastNote: smo231251, first_indices: [0], last_indices: [0]});
smo241262.setContext(context).draw();
// modifier from 1-30-0-0 to 1-31-0-0
const smo241263 = new VF.Curve(smo232387, smo232404, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo241263.setContext(context).draw();
// modifier from 1-40-0-0 to 1-41-0-0
const smo241264 = new VF.StaveTie({ first_note: smo232565, last_note: smo232582, 
          firstNote: smo232565, lastNote: smo232582, first_indices: [0,1], last_indices: [0,1]});
smo241264.setContext(context).draw();
// modifier from 1-38-0-0 to 1-39-0-0
const smo241265 = new VF.StaveTie({ first_note: smo232529, last_note: smo232546, 
          firstNote: smo232529, lastNote: smo232546, first_indices: [0,1], last_indices: [0,1]});
smo241265.setContext(context).draw();
// modifier from 2-30-0-0 to 2-31-0-0
const smo241266 = new VF.Curve(smo233565, smo233586, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo241266.setContext(context).draw();
// modifier from 2-32-0-0 to 2-33-0-0
const smo241267 = new VF.StaveTie({ first_note: smo233607, last_note: null, 
          firstNote: smo233607, lastNote: null, first_indices: [0], last_indices: [0]});
smo241267.setContext(context).draw();
// modifier from 2-32-0-0 to 2-33-0-0
const smo241268 = new VF.StaveTie({ first_note: null, last_note: smo233628, 
          firstNote: null, lastNote: smo233628, first_indices: [0], last_indices: [0]});
smo241268.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo230938').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230939').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo230959').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230960').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo230962').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo230963').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo230965').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230966').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo230984').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230985').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo230987').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230988').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo231007').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo231006').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo231009').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo231011').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo231012').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo231031').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo231049').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo231051').setAttributeNS('', 'transform', 'translate(0 0)');
context.svg.getElementById('vf-smo231052').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo231054').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo231055').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo231058').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo231076').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo231077').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo231079').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo231080').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo231098').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo231099').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo231101').setAttributeNS('', 'transform', 'translate(0 48)');
context.svg.getElementById('vf-smo231103').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo231104').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo231123').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo231122').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo231141').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo231142').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo231144').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo231145').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo231147').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo231148').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo231150').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo231151').setAttributeNS('', 'transform', 'translate(0 27)');
context.svg.getElementById('vf-smo231169').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo231170').setAttributeNS('', 'transform', 'translate(0 27)');
context.svg.getElementById('vf-smo231172').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo231173').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo231176').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo231179').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo231178').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo231197').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo231199').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo231200').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo231202').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo231203').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo231205').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo231206').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo231208').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo231209').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo231227').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo231228').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo231230').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo231231').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo231234').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo231233').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo231252').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo231256').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo231274').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo231275').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo231277').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo231278').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo231280').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo231281').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo231302').setAttributeNS('', 'transform', 'translate(0 0)');
context.svg.getElementById('vf-smo231303').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo231321').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo231322').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo231340').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo231343').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo231344').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo231346').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo231347').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo231349').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo231350').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo231352').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo231353').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo231371').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo231372').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo231390').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo231393').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo231395').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo231396').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo231398').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo231399').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo231401').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo231402').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo231420').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo231421').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo231424').setAttributeNS('', 'transform', 'translate(0 9)');
}
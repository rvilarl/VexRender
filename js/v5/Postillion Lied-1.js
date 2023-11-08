// @@ Postillionlied p 2/3  by Franz Grothe
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
VF.setFonts("Leland","Bravura","Gonville","Custom");
const fmtsmo22858022 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo228580v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228580v0ar = [];
const smo228562 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo228562.setAttribute('id', 'smo228562');
smo228562.addModifier(new VF.Dot(), 0);
const smo228563 = new VF.Annotation('bläst');
smo228563.setAttribute('id', 'smo228563');
smo228563.setFont('Merriweather', 12, 'normal');
smo228563.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228562.addModifier(smo228563);
smo228563.addClass('lyric lyric-0 lyric-hyphen');
const smo228564 = new VF.Annotation('Herz');
smo228564.setAttribute('id', 'smo228564');
smo228564.setFont('Merriweather', 12, 'normal');
smo228564.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228562.addModifier(smo228564);
smo228564.addClass('lyric lyric-1');
smo228580v0ar.push(smo228562);
smo228580v0.addTickables(smo228580v0ar)
fmtsmo22858022.joinVoices([smo228580v0]);
const fmtsmo22988922 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo229889v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229889v0ar = [];
const smo229873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229873.setAttribute('id', 'smo229873');
smo229873.addModifier(new VF.Dot(), 0);
smo229889v0ar.push(smo229873);
smo229889v0.addTickables(smo229889v0ar)
fmtsmo22988922.joinVoices([smo229889v0]);
const fmtsmo23106622 = new VF.Formatter();
//
// voices and notes for stave 2 22
const smo231066v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231066v0ar = [];
const smo231050 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo231050.setAttribute('id', 'smo231050');
smo231050.addModifier(new VF.Dot(), 0);
smo231066v0ar.push(smo231050);
smo231066v0.addTickables(smo231066v0ar)
fmtsmo23106622.joinVoices([smo231066v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22858022.format([smo228580v0,smo229889v0,smo231066v0], 63);
const stavesmo228580 = new VF.Stave(66, 107.5133013333334, 128);
stavesmo228580.setAttribute('id', 'stavesmo228580');
stavesmo228580.setBegBarType(1);
stavesmo228580.addClef('treble');
const keysmo228580 = new VF.KeySignature('G');
keysmo228580.addToStave(stavesmo228580);
stavesmo228580.setContext(context);
stavesmo228580.draw();
smo228580v0.draw(context, stavesmo228580);
const stavesmo229889 = new VF.Stave(66, 214.5133013333334, 128);
stavesmo229889.setAttribute('id', 'stavesmo229889');
stavesmo229889.setBegBarType(1);
stavesmo229889.addClef('treble');
const keysmo229889 = new VF.KeySignature('G');
keysmo229889.addToStave(stavesmo229889);
stavesmo229889.setContext(context);
stavesmo229889.draw();
smo229889v0.draw(context, stavesmo229889);
const stavesmo231066 = new VF.Stave(66, 285.5133013333334, 128);
stavesmo231066.setAttribute('id', 'stavesmo231066');
stavesmo231066.setBegBarType(1);
stavesmo231066.addClef('bass');
const keysmo231066 = new VF.KeySignature('G');
keysmo231066.addToStave(stavesmo231066);
stavesmo231066.setContext(context);
stavesmo231066.draw();
smo231066v0.draw(context, stavesmo231066);
const leftsmo231827stavesmo2285802 = new VF.StaveConnector(stavesmo228580, stavesmo231066).setType(1);
leftsmo231827stavesmo2285802.setContext(context).draw();
const fmtsmo22860723 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo228607v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228607v0ar = [];
const smo228581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo228581.setAttribute('id', 'smo228581');
smo228607v0ar.push(smo228581);
const smo228583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo228583.setAttribute('id', 'smo228583');
const smo228584 = new VF.Annotation('sein');
smo228584.setAttribute('id', 'smo228584');
smo228584.setFont('Merriweather', 12, 'normal');
smo228584.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228583.addModifier(smo228584);
smo228584.addClass('lyric lyric-0');
const smo228585 = new VF.Annotation('be');
smo228585.setAttribute('id', 'smo228585');
smo228585.setFont('Merriweather', 12, 'normal');
smo228585.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228583.addModifier(smo228585);
smo228585.addClass('lyric lyric-1 lyric-hyphen');
smo228607v0ar.push(smo228583);
const smo228586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo228586.setAttribute('id', 'smo228586');
const smo228587 = new VF.Annotation('Horn');
smo228587.setAttribute('id', 'smo228587');
smo228587.setFont('Merriweather', 12, 'normal');
smo228587.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228586.addModifier(smo228587);
smo228587.addClass('lyric lyric-0');
const smo228588 = new VF.Annotation('glei');
smo228588.setAttribute('id', 'smo228588');
smo228588.setFont('Merriweather', 12, 'normal');
smo228588.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228586.addModifier(smo228588);
smo228588.addClass('lyric lyric-1 lyric-hyphen');
smo228607v0ar.push(smo228586);
const smo228589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo228589.setAttribute('id', 'smo228589');
const smo228590 = new VF.Annotation('mit');
smo228590.setAttribute('id', 'smo228590');
smo228590.setFont('Merriweather', 12, 'normal');
smo228590.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228589.addModifier(smo228590);
smo228590.addClass('lyric lyric-0');
const smo228591 = new VF.Annotation('tet');
smo228591.setAttribute('id', 'smo228591');
smo228591.setFont('Merriweather', 12, 'normal');
smo228591.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228589.addModifier(smo228591);
smo228591.addClass('lyric lyric-1');
smo228607v0ar.push(smo228589);
smo228607v0.addTickables(smo228607v0ar)
fmtsmo22860723.joinVoices([smo228607v0]);
const fmtsmo22990623 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo229906v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229906v0ar = [];
const smo229890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["en/4/n","bn/4/n"]}'))
smo229890.setAttribute('id', 'smo229890');
smo229890.addModifier(new VF.Dot(), 0);
smo229890.addModifier(new VF.Dot(), 1);
smo229906v0ar.push(smo229890);
smo229906v0.addTickables(smo229906v0ar)
fmtsmo22990623.joinVoices([smo229906v0]);
const fmtsmo23108323 = new VF.Formatter();
//
// voices and notes for stave 2 23
const smo231083v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231083v0ar = [];
const smo231067 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["g#/2/n"]}'))
smo231067.setAttribute('id', 'smo231067');
const smo2310670acc = new VF.Accidental('#');
smo231067.addModifier(smo2310670acc, 0);
smo231067.addModifier(new VF.Dot(), 0);
smo231083v0ar.push(smo231067);
smo231083v0.addTickables(smo231083v0ar)
fmtsmo23108323.joinVoices([smo231083v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22860723.format([smo228607v0,smo229906v0,smo231083v0], 235);
const stavesmo228607 = new VF.Stave(194, 107.5133013333334, 249);
stavesmo228607.setAttribute('id', 'stavesmo228607');
stavesmo228607.setBegBarType(VF.Barline.type.NONE);
stavesmo228607.setContext(context);
stavesmo228607.draw();
smo228607v0.draw(context, stavesmo228607);
const stavesmo229906 = new VF.Stave(194, 214.5133013333334, 249);
stavesmo229906.setAttribute('id', 'stavesmo229906');
stavesmo229906.setBegBarType(VF.Barline.type.NONE);
stavesmo229906.setContext(context);
stavesmo229906.draw();
smo229906v0.draw(context, stavesmo229906);
const stavesmo231083 = new VF.Stave(194, 285.5133013333334, 249);
stavesmo231083.setAttribute('id', 'stavesmo231083');
stavesmo231083.setBegBarType(VF.Barline.type.NONE);
stavesmo231083.setContext(context);
stavesmo231083.draw();
smo231083v0.draw(context, stavesmo231083);
const fmtsmo22862924 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo228629v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228629v0ar = [];
const smo228608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo228608.setAttribute('id', 'smo228608');
smo228608.addModifier(new VF.Dot(), 0);
const smo228609 = new VF.Annotation('hel');
smo228609.setAttribute('id', 'smo228609');
smo228609.setFont('Merriweather', 12, 'normal');
smo228609.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228608.addModifier(smo228609);
smo228609.addClass('lyric lyric-0 lyric-hyphen');
const smo228610 = new VF.Annotation('ihn');
smo228610.setAttribute('id', 'smo228610');
smo228610.setFont('Merriweather', 12, 'normal');
smo228610.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228608.addModifier(smo228610);
smo228610.addClass('lyric lyric-1');
smo228629v0ar.push(smo228608);
const smo228611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo228611.setAttribute('id', 'smo228611');
smo228611.addModifier(new VF.Dot(), 0);
const smo228612 = new VF.Annotation('lem');
smo228612.setAttribute('id', 'smo228612');
smo228612.setFont('Merriweather', 12, 'normal');
smo228612.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228611.addModifier(smo228612);
smo228612.addClass('lyric lyric-0');
const smo228613 = new VF.Annotation('hin');
smo228613.setAttribute('id', 'smo228613');
smo228613.setFont('Merriweather', 12, 'normal');
smo228613.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228611.addModifier(smo228613);
smo228613.addClass('lyric lyric-1 lyric-hyphen');
smo228629v0ar.push(smo228611);
smo228629v0.addTickables(smo228629v0ar)
fmtsmo22862924.joinVoices([smo228629v0]);
const fmtsmo22992324 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo229923v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229923v0ar = [];
const smo229907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["cn/4/n","an/4/n"]}'))
smo229907.setAttribute('id', 'smo229907');
smo229907.addModifier(new VF.Dot(), 0);
smo229907.addModifier(new VF.Dot(), 1);
smo229923v0ar.push(smo229907);
smo229923v0.addTickables(smo229923v0ar)
fmtsmo22992324.joinVoices([smo229923v0]);
const fmtsmo23110124 = new VF.Formatter();
//
// voices and notes for stave 2 24
const smo231101v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231101v0ar = [];
const smo231084 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo231084.setAttribute('id', 'smo231084');
smo231084.addModifier(new VF.Dot(), 0);
smo231101v0ar.push(smo231084);
const smo231085 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo231085.setAttribute('id', 'smo231085');
smo231085.addModifier(new VF.Dot(), 0);
smo231101v0ar.push(smo231085);
smo231101v0.addTickables(smo231101v0ar)
fmtsmo23110124.joinVoices([smo231101v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22862924.format([smo228629v0,smo229923v0,smo231101v0], 110);
const stavesmo228629 = new VF.Stave(443, 107.5133013333334, 124);
stavesmo228629.setAttribute('id', 'stavesmo228629');
stavesmo228629.setBegBarType(VF.Barline.type.NONE);
stavesmo228629.setContext(context);
stavesmo228629.draw();
smo228629v0.draw(context, stavesmo228629);
const stavesmo229923 = new VF.Stave(443, 214.5133013333334, 124);
stavesmo229923.setAttribute('id', 'stavesmo229923');
stavesmo229923.setBegBarType(VF.Barline.type.NONE);
stavesmo229923.setContext(context);
stavesmo229923.draw();
smo229923v0.draw(context, stavesmo229923);
const stavesmo231101 = new VF.Stave(443, 285.5133013333334, 124);
stavesmo231101.setAttribute('id', 'stavesmo231101');
stavesmo231101.setBegBarType(VF.Barline.type.NONE);
stavesmo231101.setContext(context);
stavesmo231101.draw();
smo231101v0.draw(context, stavesmo231101);
const fmtsmo22865325 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo228653v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228653v0ar = [];
const smo228630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo228630.setAttribute('id', 'smo228630');
smo228630.addModifier(new VF.Dot(), 0);
const smo228632 = new VF.Annotation('Ton,');
smo228632.setAttribute('id', 'smo228632');
smo228632.setFont('Merriweather', 12, 'normal');
smo228632.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228630.addModifier(smo228632);
smo228632.addClass('lyric lyric-0');
const smo228631 = new VF.Annotation('aus');
smo228631.setAttribute('id', 'smo228631');
smo228631.setFont('Merriweather', 12, 'normal');
smo228631.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228630.addModifier(smo228631);
smo228631.addClass('lyric lyric-1');
smo228653v0ar.push(smo228630);
const smo228633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo228633.setAttribute('id', 'smo228633');
const smo228634 = new VF.Annotation('-');
smo228634.setAttribute('id', 'smo228634');
smo228634.setFont('Merriweather', 12, 'normal');
smo228634.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228633.addModifier(smo228634);
smo228634.addClass('lyric lyric-0 lyric-hyphen');
smo228653v0ar.push(smo228633);
const smo228635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/5/n"]}'))
smo228635.setAttribute('id', 'smo228635');
const smo2286350acc = new VF.Accidental('#');
smo228635.addModifier(smo2286350acc, 0);
const smo228636 = new VF.Annotation('so');
smo228636.setAttribute('id', 'smo228636');
smo228636.setFont('Merriweather', 12, 'normal');
smo228636.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228635.addModifier(smo228636);
smo228636.addClass('lyric lyric-0');
const smo228637 = new VF.Annotation('und');
smo228637.setAttribute('id', 'smo228637');
smo228637.setFont('Merriweather', 12, 'normal');
smo228637.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228635.addModifier(smo228637);
smo228637.addClass('lyric lyric-1');
smo228653v0ar.push(smo228635);
smo228653v0.addTickables(smo228653v0ar)
fmtsmo22865325.joinVoices([smo228653v0]);
const fmtsmo22994125 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo229941v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229941v0ar = [];
const smo229924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["cn/4/n","an/4/n"]}'))
smo229924.setAttribute('id', 'smo229924');
smo229924.addModifier(new VF.Dot(), 0);
smo229924.addModifier(new VF.Dot(), 1);
smo229941v0ar.push(smo229924);
const smo229925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo229925.setAttribute('id', 'smo229925');
smo229925.addModifier(new VF.Dot(), 0);
smo229941v0ar.push(smo229925);
smo229941v0.addTickables(smo229941v0ar)
fmtsmo22994125.joinVoices([smo229941v0]);
const fmtsmo23111925 = new VF.Formatter();
//
// voices and notes for stave 2 25
const smo231119v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231119v0ar = [];
const smo231102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo231102.setAttribute('id', 'smo231102');
smo231102.addModifier(new VF.Dot(), 0);
smo231119v0ar.push(smo231102);
const smo231103 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["d#/3/n"]}'))
smo231103.setAttribute('id', 'smo231103');
const smo2311030acc = new VF.Accidental('#');
smo231103.addModifier(smo2311030acc, 0);
smo231103.addModifier(new VF.Dot(), 0);
smo231119v0ar.push(smo231103);
smo231119v0.addTickables(smo231119v0ar)
fmtsmo23111925.joinVoices([smo231119v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22865325.format([smo228653v0,smo229941v0,smo231119v0], 165);
const stavesmo228653 = new VF.Stave(567, 107.5133013333334, 179);
stavesmo228653.setAttribute('id', 'stavesmo228653');
stavesmo228653.setBegBarType(VF.Barline.type.NONE);
stavesmo228653.setContext(context);
stavesmo228653.draw();
smo228653v0.draw(context, stavesmo228653);
const stavesmo229941 = new VF.Stave(567, 214.5133013333334, 179);
stavesmo229941.setAttribute('id', 'stavesmo229941');
stavesmo229941.setBegBarType(VF.Barline.type.NONE);
stavesmo229941.setContext(context);
stavesmo229941.draw();
smo229941v0.draw(context, stavesmo229941);
const stavesmo231119 = new VF.Stave(567, 285.5133013333334, 179);
stavesmo231119.setAttribute('id', 'stavesmo231119');
stavesmo231119.setBegBarType(VF.Barline.type.NONE);
stavesmo231119.setContext(context);
stavesmo231119.draw();
smo231119v0.draw(context, stavesmo231119);
const fmtsmo22867226 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo228672v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228672v0ar = [];
const smo228654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228654.setAttribute('id', 'smo228654');
smo228654.addModifier(new VF.Dot(), 0);
const smo228655 = new VF.Annotation('schön');
smo228655.setAttribute('id', 'smo228655');
smo228655.setFont('Merriweather', 12, 'normal');
smo228655.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228654.addModifier(smo228655);
smo228655.addClass('lyric lyric-0');
const smo228656 = new VF.Annotation('führt');
smo228656.setAttribute('id', 'smo228656');
smo228656.setFont('Merriweather', 12, 'normal');
smo228656.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228654.addModifier(smo228656);
smo228656.addClass('lyric lyric-1');
smo228672v0ar.push(smo228654);
smo228672v0.addTickables(smo228672v0ar)
fmtsmo22867226.joinVoices([smo228672v0]);
const fmtsmo22995826 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo229958v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229958v0ar = [];
const smo229942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229942.setAttribute('id', 'smo229942');
smo229942.addModifier(new VF.Dot(), 0);
smo229958v0ar.push(smo229942);
smo229958v0.addTickables(smo229958v0ar)
fmtsmo22995826.joinVoices([smo229958v0]);
const fmtsmo23113626 = new VF.Formatter();
//
// voices and notes for stave 2 26
const smo231136v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231136v0ar = [];
const smo231120 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo231120.setAttribute('id', 'smo231120');
smo231120.addModifier(new VF.Dot(), 0);
smo231136v0ar.push(smo231120);
smo231136v0.addTickables(smo231136v0ar)
fmtsmo23113626.joinVoices([smo231136v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22867226.format([smo228672v0,smo229958v0,smo231136v0], 75);
const stavesmo228672 = new VF.Stave(746, 107.5133013333334, 89);
stavesmo228672.setAttribute('id', 'stavesmo228672');
stavesmo228672.setBegBarType(VF.Barline.type.NONE);
stavesmo228672.setContext(context);
stavesmo228672.draw();
smo228672v0.draw(context, stavesmo228672);
const stavesmo229958 = new VF.Stave(746, 214.5133013333334, 89);
stavesmo229958.setAttribute('id', 'stavesmo229958');
stavesmo229958.setBegBarType(VF.Barline.type.NONE);
stavesmo229958.setContext(context);
stavesmo229958.draw();
smo229958v0.draw(context, stavesmo229958);
const stavesmo231136 = new VF.Stave(746, 285.5133013333334, 89);
stavesmo231136.setAttribute('id', 'stavesmo231136');
stavesmo231136.setBegBarType(VF.Barline.type.NONE);
stavesmo231136.setContext(context);
stavesmo231136.draw();
smo231136v0.draw(context, stavesmo231136);
const fmtsmo22869927 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo228699v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228699v0ar = [];
const smo228673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228673.setAttribute('id', 'smo228673');
const smo228674 = new VF.Annotation('-');
smo228674.setAttribute('id', 'smo228674');
smo228674.setFont('Merriweather', 12, 'normal');
smo228674.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228673.addModifier(smo228674);
smo228674.addClass('lyric lyric-0 lyric-hyphen');
smo228699v0ar.push(smo228673);
const smo228675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228675.setAttribute('id', 'smo228675');
const smo228676 = new VF.Annotation('wie');
smo228676.setAttribute('id', 'smo228676');
smo228676.setFont('Merriweather', 12, 'normal');
smo228676.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228675.addModifier(smo228676);
smo228676.addClass('lyric lyric-0');
const smo228677 = new VF.Annotation('ihn');
smo228677.setAttribute('id', 'smo228677');
smo228677.setFont('Merriweather', 12, 'normal');
smo228677.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228675.addModifier(smo228677);
smo228677.addClass('lyric lyric-1');
smo228699v0ar.push(smo228675);
const smo228678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228678.setAttribute('id', 'smo228678');
const smo228679 = new VF.Annotation('sonst');
smo228679.setAttribute('id', 'smo228679');
smo228679.setFont('Merriweather', 12, 'normal');
smo228679.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228678.addModifier(smo228679);
smo228679.addClass('lyric lyric-0');
const smo228680 = new VF.Annotation('mir');
smo228680.setAttribute('id', 'smo228680');
smo228680.setFont('Merriweather', 12, 'normal');
smo228680.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228678.addModifier(smo228680);
smo228680.addClass('lyric lyric-1');
smo228699v0ar.push(smo228678);
const smo228681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228681.setAttribute('id', 'smo228681');
const smo228682 = new VF.Annotation('kein');
smo228682.setAttribute('id', 'smo228682');
smo228682.setFont('Merriweather', 12, 'normal');
smo228682.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228681.addModifier(smo228682);
smo228682.addClass('lyric lyric-0');
const smo228683 = new VF.Annotation('zu');
smo228683.setAttribute('id', 'smo228683');
smo228683.setFont('Merriweather', 12, 'normal');
smo228683.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228681.addModifier(smo228683);
smo228683.addClass('lyric lyric-1 lyric-hyphen');
smo228699v0ar.push(smo228681);
smo228699v0.addTickables(smo228699v0ar)
fmtsmo22869927.joinVoices([smo228699v0]);
const fmtsmo22997527 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo229975v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229975v0ar = [];
const smo229959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229959.setAttribute('id', 'smo229959');
smo229959.addModifier(new VF.Dot(), 0);
smo229975v0ar.push(smo229959);
smo229975v0.addTickables(smo229975v0ar)
fmtsmo22997527.joinVoices([smo229975v0]);
const fmtsmo23115327 = new VF.Formatter();
//
// voices and notes for stave 2 27
const smo231153v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231153v0ar = [];
const smo231137 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo231137.setAttribute('id', 'smo231137');
smo231137.addModifier(new VF.Dot(), 0);
smo231153v0ar.push(smo231137);
smo231153v0.addTickables(smo231153v0ar)
fmtsmo23115327.joinVoices([smo231153v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22869927.format([smo228699v0,smo229975v0,smo231153v0], 229);
const stavesmo228699 = new VF.Stave(835, 107.5133013333334, 243);
stavesmo228699.setAttribute('id', 'stavesmo228699');
stavesmo228699.setBegBarType(VF.Barline.type.NONE);
stavesmo228699.setContext(context);
stavesmo228699.draw();
smo228699v0.draw(context, stavesmo228699);
const stavesmo229975 = new VF.Stave(835, 214.5133013333334, 243);
stavesmo229975.setAttribute('id', 'stavesmo229975');
stavesmo229975.setBegBarType(VF.Barline.type.NONE);
stavesmo229975.setContext(context);
stavesmo229975.draw();
smo229975v0.draw(context, stavesmo229975);
const stavesmo231153 = new VF.Stave(835, 285.5133013333334, 243);
stavesmo231153.setAttribute('id', 'stavesmo231153');
stavesmo231153.setBegBarType(VF.Barline.type.NONE);
stavesmo231153.setContext(context);
stavesmo231153.draw();
smo231153v0.draw(context, stavesmo231153);
const fmtsmo22872128 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo228721v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228721v0ar = [];
const smo228700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228700.setAttribute('id', 'smo228700');
smo228700.addModifier(new VF.Dot(), 0);
const smo228701 = new VF.Annotation('Po');
smo228701.setAttribute('id', 'smo228701');
smo228701.setFont('Merriweather', 12, 'normal');
smo228701.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228700.addModifier(smo228701);
smo228701.addClass('lyric lyric-0 lyric-hyphen');
const smo228702 = new VF.Annotation('rück');
smo228702.setAttribute('id', 'smo228702');
smo228702.setFont('Merriweather', 12, 'normal');
smo228702.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228700.addModifier(smo228702);
smo228702.addClass('lyric lyric-1');
smo228721v0ar.push(smo228700);
const smo228703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo228703.setAttribute('id', 'smo228703');
smo228703.addModifier(new VF.Dot(), 0);
const smo228704 = new VF.Annotation('stil');
smo228704.setAttribute('id', 'smo228704');
smo228704.setFont('Merriweather', 12, 'normal');
smo228704.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228703.addModifier(smo228704);
smo228704.addClass('lyric lyric-0 lyric-hyphen');
const smo228705 = new VF.Annotation('ins');
smo228705.setAttribute('id', 'smo228705');
smo228705.setFont('Merriweather', 12, 'normal');
smo228705.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228703.addModifier(smo228705);
smo228705.addClass('lyric lyric-1');
smo228721v0ar.push(smo228703);
smo228721v0.addTickables(smo228721v0ar)
fmtsmo22872128.joinVoices([smo228721v0]);
const fmtsmo22999228 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo229992v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229992v0ar = [];
const smo229976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n","bn/4/n"]}'))
smo229976.setAttribute('id', 'smo229976');
smo229976.addModifier(new VF.Dot(), 0);
smo229976.addModifier(new VF.Dot(), 1);
smo229992v0ar.push(smo229976);
smo229992v0.addTickables(smo229992v0ar)
fmtsmo22999228.joinVoices([smo229992v0]);
const fmtsmo23117028 = new VF.Formatter();
//
// voices and notes for stave 2 28
const smo231170v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231170v0ar = [];
const smo231154 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo231154.setAttribute('id', 'smo231154');
smo231154.addModifier(new VF.Dot(), 0);
smo231170v0ar.push(smo231154);
smo231170v0.addTickables(smo231170v0ar)
fmtsmo23117028.joinVoices([smo231170v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22872128.format([smo228721v0,smo229992v0,smo231170v0], 116);
const stavesmo228721 = new VF.Stave(1078, 107.5133013333334, 130);
stavesmo228721.setAttribute('id', 'stavesmo228721');
stavesmo228721.setBegBarType(VF.Barline.type.NONE);
stavesmo228721.setContext(context);
stavesmo228721.draw();
smo228721v0.draw(context, stavesmo228721);
const stavesmo229992 = new VF.Stave(1078, 214.5133013333334, 130);
stavesmo229992.setAttribute('id', 'stavesmo229992');
stavesmo229992.setBegBarType(VF.Barline.type.NONE);
stavesmo229992.setContext(context);
stavesmo229992.draw();
smo229992v0.draw(context, stavesmo229992);
const stavesmo231170 = new VF.Stave(1078, 285.5133013333334, 130);
stavesmo231170.setAttribute('id', 'stavesmo231170');
stavesmo231170.setBegBarType(VF.Barline.type.NONE);
stavesmo231170.setContext(context);
stavesmo231170.draw();
smo231170v0.draw(context, stavesmo231170);
const rightsmo231827stavesmo2287212 = new VF.StaveConnector(stavesmo228721, stavesmo231170).setType(0);
rightsmo231827stavesmo2287212.setContext(context).draw();
const fmtsmo22874529 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo228745v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228745v0ar = [];
const smo228722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228722.setAttribute('id', 'smo228722');
smo228722.addModifier(new VF.Dot(), 0);
const smo228723 = new VF.Annotation('lion');
smo228723.setAttribute('id', 'smo228723');
smo228723.setFont('Merriweather', 12, 'normal');
smo228723.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228722.addModifier(smo228723);
smo228723.addClass('lyric lyric-0');
const smo228724 = new VF.Annotation('Häus,');
smo228724.setAttribute('id', 'smo228724');
smo228724.setFont('Merriweather', 12, 'normal');
smo228724.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228722.addModifier(smo228724);
smo228724.addClass('lyric lyric-1');
smo228745v0ar.push(smo228722);
const smo228725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228725.setAttribute('id', 'smo228725');
const smo228726 = new VF.Annotation('Häus');
smo228726.setAttribute('id', 'smo228726');
smo228726.setFont('Merriweather', 12, 'normal');
smo228726.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228725.addModifier(smo228726);
smo228726.addClass('lyric lyric-1');
smo228745v0ar.push(smo228725);
const smo228727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228727.setAttribute('id', 'smo228727');
const smo228728 = new VF.Annotation('Es');
smo228728.setAttribute('id', 'smo228728');
smo228728.setFont('Merriweather', 12, 'normal');
smo228728.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228727.addModifier(smo228728);
smo228728.addClass('lyric lyric-0');
const smo228729 = new VF.Annotation('es');
smo228729.setAttribute('id', 'smo228729');
smo228729.setFont('Merriweather', 12, 'normal');
smo228729.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228727.addModifier(smo228729);
smo228729.addClass('lyric lyric-1');
smo228745v0ar.push(smo228727);
smo228745v0.addTickables(smo228745v0ar)
fmtsmo22874529.joinVoices([smo228745v0]);
const fmtsmo23001129 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo230011v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230011v0ar = [];
const smo229993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n","bn/4/n"]}'))
smo229993.setAttribute('id', 'smo229993');
smo229993.addModifier(new VF.Dot(), 0);
smo229993.addModifier(new VF.Dot(), 1);
smo230011v0ar.push(smo229993);
const smo229994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo229994.setAttribute('id', 'smo229994');
smo230011v0ar.push(smo229994);
const smo229995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo229995.setAttribute('id', 'smo229995');
smo230011v0ar.push(smo229995);
smo230011v0.addTickables(smo230011v0ar)
fmtsmo23001129.joinVoices([smo230011v0]);
const fmtsmo23118929 = new VF.Formatter();
//
// voices and notes for stave 2 29
const smo231189v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231189v0ar = [];
const smo231171 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo231171.setAttribute('id', 'smo231171');
smo231171.addModifier(new VF.Dot(), 0);
smo231189v0ar.push(smo231171);
const smo231172 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo231172.setAttribute('id', 'smo231172');
smo231189v0ar.push(smo231172);
const smo231173 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo231173.setAttribute('id', 'smo231173');
smo231189v0ar.push(smo231173);
smo231189v0.addTickables(smo231189v0ar)
fmtsmo23118929.joinVoices([smo231189v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22874529.format([smo228745v0,smo230011v0,smo231189v0], 149);
const stavesmo228745 = new VF.Stave(66, 405.5133013333334, 213);
stavesmo228745.setAttribute('id', 'stavesmo228745');
stavesmo228745.setBegBarType(1);
stavesmo228745.addClef('treble');
const keysmo228745 = new VF.KeySignature('G');
keysmo228745.addToStave(stavesmo228745);
stavesmo228745.setContext(context);
stavesmo228745.draw();
smo228745v0.draw(context, stavesmo228745);
const stavesmo230011 = new VF.Stave(66, 520.5133013333334, 213);
stavesmo230011.setAttribute('id', 'stavesmo230011');
stavesmo230011.setBegBarType(1);
stavesmo230011.addClef('treble');
const keysmo230011 = new VF.KeySignature('G');
keysmo230011.addToStave(stavesmo230011);
stavesmo230011.setContext(context);
stavesmo230011.draw();
smo230011v0.draw(context, stavesmo230011);
const stavesmo231189 = new VF.Stave(66, 643.5133013333334, 213);
stavesmo231189.setAttribute('id', 'stavesmo231189');
stavesmo231189.setBegBarType(1);
stavesmo231189.addClef('bass');
const keysmo231189 = new VF.KeySignature('G');
keysmo231189.addToStave(stavesmo231189);
stavesmo231189.setContext(context);
stavesmo231189.draw();
smo231189v0.draw(context, stavesmo231189);
const leftsmo231827stavesmo2287452 = new VF.StaveConnector(stavesmo228745, stavesmo231189).setType(1);
leftsmo231827stavesmo2287452.setContext(context).draw();
const fmtsmo22876430 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo228764v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228764v0ar = [];
const smo228746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228746.setAttribute('id', 'smo228746');
smo228746.addModifier(new VF.Dot(), 0);
const smo228748 = new VF.Annotation('klingt');
smo228748.setAttribute('id', 'smo228748');
smo228748.setFont('Merriweather', 12, 'normal');
smo228748.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228746.addModifier(smo228748);
smo228748.addClass('lyric lyric-0');
const smo228747 = new VF.Annotation('sagt');
smo228747.setAttribute('id', 'smo228747');
smo228747.setFont('Merriweather', 12, 'normal');
smo228747.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228746.addModifier(smo228747);
smo228747.addClass('lyric lyric-1');
smo228764v0ar.push(smo228746);
smo228764v0.addTickables(smo228764v0ar)
fmtsmo22876430.joinVoices([smo228764v0]);
const fmtsmo23002830 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo230028v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230028v0ar = [];
const smo230012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo230012.setAttribute('id', 'smo230012');
smo230012.addModifier(new VF.Dot(), 0);
smo230028v0ar.push(smo230012);
smo230028v0.addTickables(smo230028v0ar)
fmtsmo23002830.joinVoices([smo230028v0]);
const fmtsmo23121030 = new VF.Formatter();
//
// voices and notes for stave 2 30
const smo231210v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231210v0ar = [];
const smo231190 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo231190.setAttribute('id', 'smo231190');
smo231190.addModifier(new VF.Dot(), 0);
smo231210v0ar.push(smo231190);
smo231210v0.addTickables(smo231210v0ar)
fmtsmo23121030.joinVoices([smo231210v0]);
const smo231210v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231210v1ar = [];
const smo231191 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo231191.setAttribute('id', 'smo231191');
smo231191.setStyle({ fillStyle: "#115511" });
smo231210v1ar.push(smo231191);
const smo231192 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo231192.setAttribute('id', 'smo231192');
smo231192.setStyle({ fillStyle: "#115511" });
smo231210v1ar.push(smo231192);
const smo231193 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo231193.setAttribute('id', 'smo231193');
smo231193.setStyle({ fillStyle: "#115511" });
smo231210v1ar.push(smo231193);
const smo231194 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo231194.setAttribute('id', 'smo231194');
smo231194.setStyle({ fillStyle: "#115511" });
smo231210v1ar.push(smo231194);
smo231210v1.addTickables(smo231210v1ar)
fmtsmo23121030.joinVoices([smo231210v1]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22876430.format([smo228764v0,smo230028v0,smo231210v0,smo231210v1], 123);
const stavesmo228764 = new VF.Stave(279, 405.5133013333334, 137);
stavesmo228764.setAttribute('id', 'stavesmo228764');
stavesmo228764.setBegBarType(VF.Barline.type.NONE);
stavesmo228764.setContext(context);
stavesmo228764.draw();
smo228764v0.draw(context, stavesmo228764);
const stavesmo230028 = new VF.Stave(279, 520.5133013333334, 137);
stavesmo230028.setAttribute('id', 'stavesmo230028');
stavesmo230028.setBegBarType(VF.Barline.type.NONE);
stavesmo230028.setContext(context);
stavesmo230028.draw();
smo230028v0.draw(context, stavesmo230028);
const stavesmo231210 = new VF.Stave(279, 643.5133013333334, 137);
stavesmo231210.setAttribute('id', 'stavesmo231210');
stavesmo231210.setBegBarType(VF.Barline.type.NONE);
stavesmo231210.setContext(context);
stavesmo231210.draw();
smo231210v0.draw(context, stavesmo231210);
smo231210v1.draw(context, stavesmo231210);
const fmtsmo22879231 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo228792v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228792v0ar = [];
const smo228765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228765.setAttribute('id', 'smo228765');
const smo228766 = new VF.Annotation('-');
smo228766.setAttribute('id', 'smo228766');
smo228766.setFont('Merriweather', 12, 'normal');
smo228766.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228765.addModifier(smo228766);
smo228766.addClass('lyric lyric-0 lyric-hyphen');
const smo228767 = new VF.Annotation('-');
smo228767.setAttribute('id', 'smo228767');
smo228767.setFont('Merriweather', 12, 'normal');
smo228767.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228765.addModifier(smo228767);
smo228767.addClass('lyric lyric-1 lyric-hyphen');
smo228792v0ar.push(smo228765);
const smo228768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228768.setAttribute('id', 'smo228768');
const smo228769 = new VF.Annotation('wenn');
smo228769.setAttribute('id', 'smo228769');
smo228769.setFont('Merriweather', 12, 'normal');
smo228769.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228768.addModifier(smo228769);
smo228769.addClass('lyric lyric-0');
const smo228770 = new VF.Annotation('zu');
smo228770.setAttribute('id', 'smo228770');
smo228770.setFont('Merriweather', 12, 'normal');
smo228770.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228768.addModifier(smo228770);
smo228770.addClass('lyric lyric-1');
smo228792v0ar.push(smo228768);
const smo228771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228771.setAttribute('id', 'smo228771');
const smo228772 = new VF.Annotation('es');
smo228772.setAttribute('id', 'smo228772');
smo228772.setFont('Merriweather', 12, 'normal');
smo228772.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228771.addModifier(smo228772);
smo228772.addClass('lyric lyric-0');
const smo228773 = new VF.Annotation('ihm');
smo228773.setAttribute('id', 'smo228773');
smo228773.setFont('Merriweather', 12, 'normal');
smo228773.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228771.addModifier(smo228773);
smo228773.addClass('lyric lyric-1');
smo228792v0ar.push(smo228771);
const smo228774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228774.setAttribute('id', 'smo228774');
const smo228775 = new VF.Annotation('von');
smo228775.setAttribute('id', 'smo228775');
smo228775.setFont('Merriweather', 12, 'normal');
smo228775.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228774.addModifier(smo228775);
smo228775.addClass('lyric lyric-0');
const smo228776 = new VF.Annotation('Denk\'');
smo228776.setAttribute('id', 'smo228776');
smo228776.setFont('Merriweather', 12, 'normal');
smo228776.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228774.addModifier(smo228776);
smo228776.addClass('lyric lyric-1');
smo228792v0ar.push(smo228774);
smo228792v0.addTickables(smo228792v0ar)
fmtsmo22879231.joinVoices([smo228792v0]);
const fmtsmo23004631 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo230046v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230046v0ar = [];
const smo230029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo230029.setAttribute('id', 'smo230029');
smo230029.addModifier(new VF.Dot(), 0);
smo230046v0ar.push(smo230029);
const smo230030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["gn/4/r"]}'))
smo230030.setAttribute('id', 'smo230030');
smo230030.addModifier(new VF.Dot(), 0);
smo230046v0ar.push(smo230030);
smo230046v0.addTickables(smo230046v0ar)
fmtsmo23004631.joinVoices([smo230046v0]);
const fmtsmo23123131 = new VF.Formatter();
//
// voices and notes for stave 2 31
const smo231231v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231231v0ar = [];
const smo231211 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo231211.setAttribute('id', 'smo231211');
smo231211.addModifier(new VF.Dot(), 0);
smo231231v0ar.push(smo231211);
smo231231v0.addTickables(smo231231v0ar)
fmtsmo23123131.joinVoices([smo231231v0]);
const smo231231v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231231v1ar = [];
const smo231212 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo231212.setAttribute('id', 'smo231212');
smo231212.setStyle({ fillStyle: "#115511" });
smo231231v1ar.push(smo231212);
const smo231213 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo231213.setAttribute('id', 'smo231213');
smo231213.setStyle({ fillStyle: "#115511" });
smo231231v1ar.push(smo231213);
const smo231214 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo231214.setAttribute('id', 'smo231214');
smo231214.setStyle({ fillStyle: "#115511" });
smo231231v1ar.push(smo231214);
const smo231215 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo231215.setAttribute('id', 'smo231215');
smo231215.setStyle({ fillStyle: "#115511" });
smo231231v1ar.push(smo231215);
smo231231v1.addTickables(smo231231v1ar)
fmtsmo23123131.joinVoices([smo231231v1]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22879231.format([smo228792v0,smo230046v0,smo231231v0,smo231231v1], 226);
const stavesmo228792 = new VF.Stave(416, 405.5133013333334, 240);
stavesmo228792.setAttribute('id', 'stavesmo228792');
stavesmo228792.setBegBarType(VF.Barline.type.NONE);
stavesmo228792.setContext(context);
stavesmo228792.draw();
smo228792v0.draw(context, stavesmo228792);
const stavesmo230046 = new VF.Stave(416, 520.5133013333334, 240);
stavesmo230046.setAttribute('id', 'stavesmo230046');
stavesmo230046.setBegBarType(VF.Barline.type.NONE);
stavesmo230046.setContext(context);
stavesmo230046.draw();
smo230046v0.draw(context, stavesmo230046);
const stavesmo231231 = new VF.Stave(416, 643.5133013333334, 240);
stavesmo231231.setAttribute('id', 'stavesmo231231');
stavesmo231231.setBegBarType(VF.Barline.type.NONE);
stavesmo231231.setContext(context);
stavesmo231231.draw();
smo231231v0.draw(context, stavesmo231231);
smo231231v1.draw(context, stavesmo231231);
const fmtsmo22882032 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo228820v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228820v0ar = [];
const smo228793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228793.setAttribute('id', 'smo228793');
const smo228794 = new VF.Annotation('fer');
smo228794.setAttribute('id', 'smo228794');
smo228794.setFont('Merriweather', 12, 'normal');
smo228794.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228793.addModifier(smo228794);
smo228794.addClass('lyric lyric-0 lyric-hyphen');
const smo228795 = new VF.Annotation('im');
smo228795.setAttribute('id', 'smo228795');
smo228795.setFont('Merriweather', 12, 'normal');
smo228795.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228793.addModifier(smo228795);
smo228795.addClass('lyric lyric-1 lyric-hyphen');
smo228820v0ar.push(smo228793);
const smo228796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228796.setAttribute('id', 'smo228796');
const smo228797 = new VF.Annotation('ne');
smo228797.setAttribute('id', 'smo228797');
smo228797.setFont('Merriweather', 12, 'normal');
smo228797.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228796.addModifier(smo228797);
smo228797.addClass('lyric lyric-0');
const smo228798 = new VF.Annotation('mer');
smo228798.setAttribute('id', 'smo228798');
smo228798.setFont('Merriweather', 12, 'normal');
smo228798.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228796.addModifier(smo228798);
smo228798.addClass('lyric lyric-1');
smo228820v0ar.push(smo228796);
const smo228799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228799.setAttribute('id', 'smo228799');
const smo228800 = new VF.Annotation('er');
smo228800.setAttribute('id', 'smo228800');
smo228800.setFont('Merriweather', 12, 'normal');
smo228800.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228799.addModifier(smo228800);
smo228800.addClass('lyric lyric-0 lyric-hyphen');
const smo228801 = new VF.Annotation('an');
smo228801.setAttribute('id', 'smo228801');
smo228801.setFont('Merriweather', 12, 'normal');
smo228801.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228799.addModifier(smo228801);
smo228801.addClass('lyric lyric-1');
smo228820v0ar.push(smo228799);
const smo228802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228802.setAttribute('id', 'smo228802');
smo228802.addModifier(new VF.Dot(), 0);
const smo228804 = new VF.Annotation('schalit');
smo228804.setAttribute('id', 'smo228804');
smo228804.setFont('Merriweather', 12, 'normal');
smo228804.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228802.addModifier(smo228804);
smo228804.addClass('lyric lyric-0');
const smo228803 = new VF.Annotation('mich');
smo228803.setAttribute('id', 'smo228803');
smo228803.setFont('Merriweather', 12, 'normal');
smo228803.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228802.addModifier(smo228803);
smo228803.addClass('lyric lyric-1');
smo228820v0ar.push(smo228802);
smo228820v0.addTickables(smo228820v0ar)
fmtsmo22882032.joinVoices([smo228820v0]);
const fmtsmo23006332 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo230063v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230063v0ar = [];
const smo230047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo230047.setAttribute('id', 'smo230047');
smo230047.addModifier(new VF.Dot(), 0);
smo230063v0ar.push(smo230047);
smo230063v0.addTickables(smo230063v0ar)
fmtsmo23006332.joinVoices([smo230063v0]);
const fmtsmo23125232 = new VF.Formatter();
//
// voices and notes for stave 2 32
const smo231252v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231252v0ar = [];
const smo231232 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo231232.setAttribute('id', 'smo231232');
smo231232.addModifier(new VF.Dot(), 0);
smo231252v0ar.push(smo231232);
smo231252v0.addTickables(smo231252v0ar)
fmtsmo23125232.joinVoices([smo231252v0]);
const smo231252v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231252v1ar = [];
const smo231233 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo231233.setAttribute('id', 'smo231233');
smo231233.setStyle({ fillStyle: "#115511" });
const smo2312330acc = new VF.Accidental('#');
smo231233.addModifier(smo2312330acc, 0);
smo231252v1ar.push(smo231233);
const smo231234 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo231234.setAttribute('id', 'smo231234');
smo231234.setStyle({ fillStyle: "#115511" });
smo231252v1ar.push(smo231234);
const smo231235 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo231235.setAttribute('id', 'smo231235');
smo231235.setStyle({ fillStyle: "#115511" });
smo231252v1ar.push(smo231235);
const smo231236 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo231236.setAttribute('id', 'smo231236');
smo231236.setStyle({ fillStyle: "#115511" });
smo231252v1ar.push(smo231236);
smo231252v1.addTickables(smo231252v1ar)
fmtsmo23125232.joinVoices([smo231252v1]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo238021 = smo228793.getStemDirection();
smo228793.setStemDirection(dirsmo238021);
smo228796.setStemDirection(dirsmo238021);
smo228799.setStemDirection(dirsmo238021);
const smo238021 = new VF.Beam([smo228793,smo228796,smo228799]);
 
// formatting measures in staff group smo231827
fmtsmo22882032.format([smo228820v0,smo230063v0,smo231252v0,smo231252v1], 252);
const stavesmo228820 = new VF.Stave(656, 405.5133013333334, 266);
stavesmo228820.setAttribute('id', 'stavesmo228820');
stavesmo228820.setBegBarType(VF.Barline.type.NONE);
stavesmo228820.setContext(context);
stavesmo228820.draw();
smo228820v0.draw(context, stavesmo228820);
smo238021.setContext(context);
smo238021.draw();
const stavesmo230063 = new VF.Stave(656, 520.5133013333334, 266);
stavesmo230063.setAttribute('id', 'stavesmo230063');
stavesmo230063.setBegBarType(VF.Barline.type.NONE);
stavesmo230063.setContext(context);
stavesmo230063.draw();
smo230063v0.draw(context, stavesmo230063);
const stavesmo231252 = new VF.Stave(656, 643.5133013333334, 266);
stavesmo231252.setAttribute('id', 'stavesmo231252');
stavesmo231252.setBegBarType(VF.Barline.type.NONE);
stavesmo231252.setContext(context);
stavesmo231252.draw();
smo231252v0.draw(context, stavesmo231252);
smo231252v1.draw(context, stavesmo231252);
const fmtsmo22885033 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo228850v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228850v0ar = [];
const smo228821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228821.setAttribute('id', 'smo228821');
const smo228822 = new VF.Annotation('-');
smo228822.setAttribute('id', 'smo228822');
smo228822.setFont('Merriweather', 12, 'normal');
smo228822.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228821.addModifier(smo228822);
smo228822.addClass('lyric lyric-0 lyric-hyphen');
smo228850v0ar.push(smo228821);
const smo228823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228823.setAttribute('id', 'smo228823');
const smo228824 = new VF.Annotation('ais');
smo228824.setAttribute('id', 'smo228824');
smo228824.setFont('Merriweather', 12, 'normal');
smo228824.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228823.addModifier(smo228824);
smo228824.addClass('lyric lyric-0');
const smo228825 = new VF.Annotation('du');
smo228825.setAttribute('id', 'smo228825');
smo228825.setFont('Merriweather', 12, 'normal');
smo228825.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228823.addModifier(smo228825);
smo228825.addClass('lyric lyric-1');
smo228850v0ar.push(smo228823);
const smo228826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228826.setAttribute('id', 'smo228826');
const smo228827 = new VF.Annotation('ruit');
smo228827.setAttribute('id', 'smo228827');
smo228827.setFont('Merriweather', 12, 'normal');
smo228827.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228826.addModifier(smo228827);
smo228827.addClass('lyric lyric-0');
const smo228828 = new VF.Annotation('weißt');
smo228828.setAttribute('id', 'smo228828');
smo228828.setFont('Merriweather', 12, 'normal');
smo228828.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228826.addModifier(smo228828);
smo228828.addClass('lyric lyric-1');
smo228850v0ar.push(smo228826);
const smo228829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228829.setAttribute('id', 'smo228829');
const smo228830 = new VF.Annotation('er');
smo228830.setAttribute('id', 'smo228830');
smo228830.setFont('Merriweather', 12, 'normal');
smo228830.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228829.addModifier(smo228830);
smo228830.addClass('lyric lyric-0');
const smo228831 = new VF.Annotation('doch,');
smo228831.setAttribute('id', 'smo228831');
smo228831.setFont('Merriweather', 12, 'normal');
smo228831.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228829.addModifier(smo228831);
smo228831.addClass('lyric lyric-1');
smo228850v0ar.push(smo228829);
const smo228832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228832.setAttribute('id', 'smo228832');
const smo228833 = new VF.Annotation('Ich');
smo228833.setAttribute('id', 'smo228833');
smo228833.setFont('Merriweather', 12, 'normal');
smo228833.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228832.addModifier(smo228833);
smo228833.addClass('lyric lyric-0');
const smo228834 = new VF.Annotation('ich');
smo228834.setAttribute('id', 'smo228834');
smo228834.setFont('Merriweather', 12, 'normal');
smo228834.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228832.addModifier(smo228834);
smo228834.addClass('lyric lyric-1');
smo228850v0ar.push(smo228832);
smo228850v0.addTickables(smo228850v0ar)
fmtsmo22885033.joinVoices([smo228850v0]);
const fmtsmo23008333 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo230083v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230083v0ar = [];
const smo230064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo230064.setAttribute('id', 'smo230064');
smo230083v0ar.push(smo230064);
const smo230065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo230065.setAttribute('id', 'smo230065');
smo230083v0ar.push(smo230065);
const smo230066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo230066.setAttribute('id', 'smo230066');
smo230083v0ar.push(smo230066);
const smo230067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo230067.setAttribute('id', 'smo230067');
smo230083v0ar.push(smo230067);
smo230083v0.addTickables(smo230083v0ar)
fmtsmo23008333.joinVoices([smo230083v0]);
const fmtsmo23127333 = new VF.Formatter();
//
// voices and notes for stave 2 33
const smo231273v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231273v0ar = [];
const smo231253 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo231253.setAttribute('id', 'smo231253');
smo231253.addModifier(new VF.Dot(), 0);
smo231273v0ar.push(smo231253);
smo231273v0.addTickables(smo231273v0ar)
fmtsmo23127333.joinVoices([smo231273v0]);
const smo231273v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231273v1ar = [];
const smo231254 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo231254.setAttribute('id', 'smo231254');
smo231254.setStyle({ fillStyle: "#115511" });
const smo2312540acc = new VF.Accidental('#');
smo231254.addModifier(smo2312540acc, 0);
smo231273v1ar.push(smo231254);
const smo231255 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo231255.setAttribute('id', 'smo231255');
smo231255.setStyle({ fillStyle: "#115511" });
smo231273v1ar.push(smo231255);
const smo231256 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo231256.setAttribute('id', 'smo231256');
smo231256.setStyle({ fillStyle: "#115511" });
smo231273v1ar.push(smo231256);
const smo231257 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo231257.setAttribute('id', 'smo231257');
smo231257.setStyle({ fillStyle: "#115511" });
smo231273v1ar.push(smo231257);
smo231273v1.addTickables(smo231273v1ar)
fmtsmo23127333.joinVoices([smo231273v1]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo238028 = smo228826.getStemDirection();
smo228826.setStemDirection(dirsmo238028);
smo228829.setStemDirection(dirsmo238028);
smo228832.setStemDirection(dirsmo238028);
const smo238028 = new VF.Beam([smo228826,smo228829,smo228832]);
 
// formatting measures in staff group smo231827
fmtsmo22885033.format([smo228850v0,smo230083v0,smo231273v0,smo231273v1], 274);
const stavesmo228850 = new VF.Stave(922, 405.5133013333334, 288);
stavesmo228850.setAttribute('id', 'stavesmo228850');
stavesmo228850.setBegBarType(VF.Barline.type.NONE);
stavesmo228850.setContext(context);
stavesmo228850.draw();
smo228850v0.draw(context, stavesmo228850);
smo238028.setContext(context);
smo238028.draw();
const stavesmo230083 = new VF.Stave(922, 520.5133013333334, 288);
stavesmo230083.setAttribute('id', 'stavesmo230083');
stavesmo230083.setBegBarType(VF.Barline.type.NONE);
stavesmo230083.setContext(context);
stavesmo230083.draw();
smo230083v0.draw(context, stavesmo230083);
const stavesmo231273 = new VF.Stave(922, 643.5133013333334, 288);
stavesmo231273.setAttribute('id', 'stavesmo231273');
stavesmo231273.setBegBarType(VF.Barline.type.NONE);
stavesmo231273.setContext(context);
stavesmo231273.draw();
smo231273v0.draw(context, stavesmo231273);
smo231273v1.draw(context, stavesmo231273);
const rightsmo231827stavesmo2288502 = new VF.StaveConnector(stavesmo228850, stavesmo231273).setType(0);
rightsmo231827stavesmo2288502.setContext(context).draw();
const fmtsmo22887534 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo228875v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228875v0ar = [];
const smo228851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228851.setAttribute('id', 'smo228851');
const smo228852 = new VF.Annotation('kom');
smo228852.setAttribute('id', 'smo228852');
smo228852.setFont('Merriweather', 12, 'normal');
smo228852.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228851.addModifier(smo228852);
smo228852.addClass('lyric lyric-0 lyric-hyphen');
const smo228853 = new VF.Annotation('lie');
smo228853.setAttribute('id', 'smo228853');
smo228853.setFont('Merriweather', 12, 'normal');
smo228853.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228851.addModifier(smo228853);
smo228853.addClass('lyric lyric-1 lyric-hyphen');
smo228875v0ar.push(smo228851);
const smo228854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo228854.setAttribute('id', 'smo228854');
const smo228855 = new VF.Annotation('me');
smo228855.setAttribute('id', 'smo228855');
smo228855.setFont('Merriweather', 12, 'normal');
smo228855.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228854.addModifier(smo228855);
smo228855.addClass('lyric lyric-0');
const smo228856 = new VF.Annotation('be');
smo228856.setAttribute('id', 'smo228856');
smo228856.setFont('Merriweather', 12, 'normal');
smo228856.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228854.addModifier(smo228856);
smo228856.addClass('lyric lyric-1 lyric-hyphen');
smo228875v0ar.push(smo228854);
const smo228857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228857.setAttribute('id', 'smo228857');
smo228857.addModifier(new VF.Dot(), 0);
const smo228859 = new VF.Annotation('bald!');
smo228859.setAttribute('id', 'smo228859');
smo228859.setFont('Merriweather', 12, 'normal');
smo228859.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228857.addModifier(smo228859);
smo228859.addClass('lyric lyric-0');
const smo228858 = new VF.Annotation('dich!');
smo228858.setAttribute('id', 'smo228858');
smo228858.setFont('Merriweather', 12, 'normal');
smo228858.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228857.addModifier(smo228858);
smo228858.addClass('lyric lyric-1');
smo228875v0ar.push(smo228857);
smo228875v0.addTickables(smo228875v0ar)
fmtsmo22887534.joinVoices([smo228875v0]);
const fmtsmo23010234 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo230102v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230102v0ar = [];
const smo230084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo230084.setAttribute('id', 'smo230084');
smo230084.addModifier(new VF.Dot(), 0);
smo230102v0ar.push(smo230084);
const smo230085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo230085.setAttribute('id', 'smo230085');
smo230102v0ar.push(smo230085);
const smo230086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo230086.setAttribute('id', 'smo230086');
smo230102v0ar.push(smo230086);
smo230102v0.addTickables(smo230102v0ar)
fmtsmo23010234.joinVoices([smo230102v0]);
const fmtsmo23129134 = new VF.Formatter();
//
// voices and notes for stave 2 34
const smo231291v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231291v0ar = [];
const smo231274 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo231274.setAttribute('id', 'smo231274');
smo231274.addModifier(new VF.Dot(), 0);
smo231291v0ar.push(smo231274);
smo231291v0.addTickables(smo231291v0ar)
fmtsmo23129134.joinVoices([smo231291v0]);
const smo231291v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231291v1ar = [];
const smo231275 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo231275.setAttribute('id', 'smo231275');
smo231275.setStyle({ fillStyle: "#115511" });
smo231275.addModifier(new VF.Dot(), 0);
smo231291v1ar.push(smo231275);
smo231291v1.addTickables(smo231291v1ar)
fmtsmo23129134.joinVoices([smo231291v1]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22887534.format([smo228875v0,smo230102v0,smo231291v0,smo231291v1], 237);
const stavesmo228875 = new VF.Stave(66, 778.5133013333334, 301);
stavesmo228875.setAttribute('id', 'stavesmo228875');
stavesmo228875.setBegBarType(1);
stavesmo228875.addClef('treble');
const keysmo228875 = new VF.KeySignature('G');
keysmo228875.addToStave(stavesmo228875);
stavesmo228875.setContext(context);
stavesmo228875.draw();
smo228875v0.draw(context, stavesmo228875);
const stavesmo230102 = new VF.Stave(66, 890.5133013333334, 301);
stavesmo230102.setAttribute('id', 'stavesmo230102');
stavesmo230102.setBegBarType(1);
stavesmo230102.addClef('treble');
const keysmo230102 = new VF.KeySignature('G');
keysmo230102.addToStave(stavesmo230102);
stavesmo230102.setContext(context);
stavesmo230102.draw();
smo230102v0.draw(context, stavesmo230102);
const stavesmo231291 = new VF.Stave(66, 1026.5133013333334, 301);
stavesmo231291.setAttribute('id', 'stavesmo231291');
stavesmo231291.setBegBarType(1);
stavesmo231291.addClef('bass');
const keysmo231291 = new VF.KeySignature('G');
keysmo231291.addToStave(stavesmo231291);
stavesmo231291.setContext(context);
stavesmo231291.draw();
smo231291v0.draw(context, stavesmo231291);
smo231291v1.draw(context, stavesmo231291);
const leftsmo231827stavesmo2288752 = new VF.StaveConnector(stavesmo228875, stavesmo231291).setType(1);
leftsmo231827stavesmo2288752.setContext(context).draw();
const fmtsmo22889735 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo228897v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228897v0ar = [];
const smo228876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228876.setAttribute('id', 'smo228876');
smo228876.addModifier(new VF.Dot(), 0);
const smo228877 = new VF.Annotation('-');
smo228877.setAttribute('id', 'smo228877');
smo228877.setFont('Merriweather', 12, 'normal');
smo228877.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228876.addModifier(smo228877);
smo228877.addClass('lyric lyric-0 lyric-hyphen');
smo228897v0ar.push(smo228876);
const smo228878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228878.setAttribute('id', 'smo228878');
smo228897v0ar.push(smo228878);
const smo228879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228879.setAttribute('id', 'smo228879');
const smo228880 = new VF.Annotation('Ich');
smo228880.setAttribute('id', 'smo228880');
smo228880.setFont('Merriweather', 12, 'normal');
smo228880.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228879.addModifier(smo228880);
smo228880.addClass('lyric lyric-0');
const smo228881 = new VF.Annotation('ich');
smo228881.setAttribute('id', 'smo228881');
smo228881.setFont('Merriweather', 12, 'normal');
smo228881.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228879.addModifier(smo228881);
smo228881.addClass('lyric lyric-1');
smo228897v0ar.push(smo228879);
smo228897v0.addTickables(smo228897v0ar)
fmtsmo22889735.joinVoices([smo228897v0]);
const fmtsmo23011935 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo230119v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230119v0ar = [];
const smo230103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo230103.setAttribute('id', 'smo230103');
smo230103.addModifier(new VF.Dot(), 0);
smo230119v0ar.push(smo230103);
smo230119v0.addTickables(smo230119v0ar)
fmtsmo23011935.joinVoices([smo230119v0]);
const fmtsmo23131135 = new VF.Formatter();
//
// voices and notes for stave 2 35
const smo231311v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231311v0ar = [];
const smo231292 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo231292.setAttribute('id', 'smo231292');
smo231292.addModifier(new VF.Dot(), 0);
smo231311v0ar.push(smo231292);
smo231311v0.addTickables(smo231311v0ar)
fmtsmo23131135.joinVoices([smo231311v0]);
const smo231311v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231311v1ar = [];
const smo231293 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo231293.setAttribute('id', 'smo231293');
smo231293.setStyle({ fillStyle: "#115511" });
smo231311v1ar.push(smo231293);
const smo231294 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo231294.setAttribute('id', 'smo231294');
smo231294.setStyle({ fillStyle: "#115511" });
smo231311v1ar.push(smo231294);
const smo231295 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo231295.setAttribute('id', 'smo231295');
smo231295.setStyle({ fillStyle: "#115511" });
smo231295.addModifier(new VF.Dot(), 0);
smo231311v1ar.push(smo231295);
smo231311v1.addTickables(smo231311v1ar)
fmtsmo23131135.joinVoices([smo231311v1]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22889735.format([smo228897v0,smo230119v0,smo231311v0,smo231311v1], 182);
const stavesmo228897 = new VF.Stave(367, 778.5133013333334, 196);
stavesmo228897.setAttribute('id', 'stavesmo228897');
stavesmo228897.setBegBarType(VF.Barline.type.NONE);
stavesmo228897.setContext(context);
stavesmo228897.draw();
smo228897v0.draw(context, stavesmo228897);
const stavesmo230119 = new VF.Stave(367, 890.5133013333334, 196);
stavesmo230119.setAttribute('id', 'stavesmo230119');
stavesmo230119.setBegBarType(VF.Barline.type.NONE);
stavesmo230119.setContext(context);
stavesmo230119.draw();
smo230119v0.draw(context, stavesmo230119);
const stavesmo231311 = new VF.Stave(367, 1026.5133013333334, 196);
stavesmo231311.setAttribute('id', 'stavesmo231311');
stavesmo231311.setBegBarType(VF.Barline.type.NONE);
stavesmo231311.setContext(context);
stavesmo231311.draw();
smo231311v0.draw(context, stavesmo231311);
smo231311v1.draw(context, stavesmo231311);
const fmtsmo22892236 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo228922v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228922v0ar = [];
const smo228898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228898.setAttribute('id', 'smo228898');
const smo228899 = new VF.Annotation('kom');
smo228899.setAttribute('id', 'smo228899');
smo228899.setFont('Merriweather', 12, 'normal');
smo228899.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228898.addModifier(smo228899);
smo228899.addClass('lyric lyric-0 lyric-hyphen');
const smo228900 = new VF.Annotation('lie');
smo228900.setAttribute('id', 'smo228900');
smo228900.setFont('Merriweather', 12, 'normal');
smo228900.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228898.addModifier(smo228900);
smo228900.addClass('lyric lyric-1 lyric-hyphen');
smo228922v0ar.push(smo228898);
const smo228901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo228901.setAttribute('id', 'smo228901');
const smo228902 = new VF.Annotation('me');
smo228902.setAttribute('id', 'smo228902');
smo228902.setFont('Merriweather', 12, 'normal');
smo228902.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228901.addModifier(smo228902);
smo228902.addClass('lyric lyric-0');
const smo228903 = new VF.Annotation('be');
smo228903.setAttribute('id', 'smo228903');
smo228903.setFont('Merriweather', 12, 'normal');
smo228903.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228901.addModifier(smo228903);
smo228903.addClass('lyric lyric-1');
smo228922v0ar.push(smo228901);
const smo228904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228904.setAttribute('id', 'smo228904');
smo228904.addModifier(new VF.Dot(), 0);
const smo228905 = new VF.Annotation('bald');
smo228905.setAttribute('id', 'smo228905');
smo228905.setFont('Merriweather', 12, 'normal');
smo228905.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228904.addModifier(smo228905);
smo228905.addClass('lyric lyric-0');
const smo228906 = new VF.Annotation('dich!');
smo228906.setAttribute('id', 'smo228906');
smo228906.setFont('Merriweather', 12, 'normal');
smo228906.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228904.addModifier(smo228906);
smo228906.addClass('lyric lyric-1');
smo228922v0ar.push(smo228904);
smo228922v0.addTickables(smo228922v0ar)
fmtsmo22892236.joinVoices([smo228922v0]);
const fmtsmo23013636 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo230136v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230136v0ar = [];
const smo230120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo230120.setAttribute('id', 'smo230120');
smo230120.addModifier(new VF.Dot(), 0);
smo230136v0ar.push(smo230120);
smo230136v0.addTickables(smo230136v0ar)
fmtsmo23013636.joinVoices([smo230136v0]);
const fmtsmo23133136 = new VF.Formatter();
//
// voices and notes for stave 2 36
const smo231331v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231331v0ar = [];
const smo231312 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo231312.setAttribute('id', 'smo231312');
smo231312.addModifier(new VF.Dot(), 0);
smo231331v0ar.push(smo231312);
smo231331v0.addTickables(smo231331v0ar)
fmtsmo23133136.joinVoices([smo231331v0]);
const smo231331v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231331v1ar = [];
const smo231313 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["dn/4/r"]}'))
smo231313.setAttribute('id', 'smo231313');
smo231313.setStyle({ fillStyle: '#aaaaaa7f' });
smo231313.addModifier(new VF.Dot(), 0);
smo231331v1ar.push(smo231313);
const smo231314 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/4/r"]}'))
smo231314.setAttribute('id', 'smo231314');
smo231314.setStyle({ fillStyle: '#aaaaaa7f' });
smo231331v1ar.push(smo231314);
const smo231315 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo231315.setAttribute('id', 'smo231315');
smo231315.setStyle({ fillStyle: "#115511" });
smo231331v1ar.push(smo231315);
smo231331v1.addTickables(smo231331v1ar)
fmtsmo23133136.joinVoices([smo231331v1]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22892236.format([smo228922v0,smo230136v0,smo231331v0,smo231331v1], 236);
const stavesmo228922 = new VF.Stave(563, 778.5133013333334, 250);
stavesmo228922.setAttribute('id', 'stavesmo228922');
stavesmo228922.setBegBarType(VF.Barline.type.NONE);
stavesmo228922.setContext(context);
stavesmo228922.draw();
smo228922v0.draw(context, stavesmo228922);
const stavesmo230136 = new VF.Stave(563, 890.5133013333334, 250);
stavesmo230136.setAttribute('id', 'stavesmo230136');
stavesmo230136.setBegBarType(VF.Barline.type.NONE);
stavesmo230136.setContext(context);
stavesmo230136.draw();
smo230136v0.draw(context, stavesmo230136);
const stavesmo231331 = new VF.Stave(563, 1026.5133013333334, 250);
stavesmo231331.setAttribute('id', 'stavesmo231331');
stavesmo231331.setBegBarType(VF.Barline.type.NONE);
stavesmo231331.setContext(context);
stavesmo231331.draw();
smo231331v0.draw(context, stavesmo231331);
smo231331v1.draw(context, stavesmo231331);
const fmtsmo22894437 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo228944v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228944v0ar = [];
const smo228923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228923.setAttribute('id', 'smo228923');
smo228944v0ar.push(smo228923);
const smo228924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228924.setAttribute('id', 'smo228924');
smo228944v0ar.push(smo228924);
const smo228925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228925.setAttribute('id', 'smo228925');
smo228944v0ar.push(smo228925);
const smo228926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo228926.setAttribute('id', 'smo228926');
const smo228927 = new VF.Annotation('Mein');
smo228927.setAttribute('id', 'smo228927');
smo228927.setFont('Merriweather', 12, 'normal');
smo228927.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228926.addModifier(smo228927);
smo228927.addClass('lyric lyric-0');
const smo228928 = new VF.Annotation('Tra');
smo228928.setAttribute('id', 'smo228928');
smo228928.setFont('Merriweather', 12, 'normal');
smo228928.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228926.addModifier(smo228928);
smo228928.addClass('lyric lyric-1 lyric-hyphen');
smo228944v0ar.push(smo228926);
smo228944v0.addTickables(smo228944v0ar)
fmtsmo22894437.joinVoices([smo228944v0]);
const fmtsmo23015337 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo230153v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230153v0ar = [];
const smo230137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo230137.setAttribute('id', 'smo230137');
smo230137.addModifier(new VF.Dot(), 0);
smo230153v0ar.push(smo230137);
smo230153v0.addTickables(smo230153v0ar)
fmtsmo23015337.joinVoices([smo230153v0]);
const fmtsmo23135137 = new VF.Formatter();
//
// voices and notes for stave 2 37
const smo231351v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231351v0ar = [];
const smo231332 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo231332.setAttribute('id', 'smo231332');
smo231332.addModifier(new VF.Dot(), 0);
smo231351v0ar.push(smo231332);
smo231351v0.addTickables(smo231351v0ar)
fmtsmo23135137.joinVoices([smo231351v0]);
const smo231351v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231351v1ar = [];
const smo231333 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo231333.setAttribute('id', 'smo231333');
smo231333.setStyle({ fillStyle: "#115511" });
smo231351v1ar.push(smo231333);
const smo231334 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo231334.setAttribute('id', 'smo231334');
smo231334.setStyle({ fillStyle: "#115511" });
smo231351v1ar.push(smo231334);
const smo231335 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo231335.setAttribute('id', 'smo231335');
smo231335.setStyle({ fillStyle: "#115511" });
smo231335.addModifier(new VF.Dot(), 0);
smo231351v1ar.push(smo231335);
smo231351v1.addTickables(smo231351v1ar)
fmtsmo23135137.joinVoices([smo231351v1]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22894437.format([smo228944v0,smo230153v0,smo231351v0,smo231351v1], 198);
const stavesmo228944 = new VF.Stave(813, 778.5133013333334, 212);
stavesmo228944.setAttribute('id', 'stavesmo228944');
stavesmo228944.setBegBarType(VF.Barline.type.NONE);
stavesmo228944.setContext(context);
stavesmo228944.draw();
smo228944v0.draw(context, stavesmo228944);
const stavesmo230153 = new VF.Stave(813, 890.5133013333334, 212);
stavesmo230153.setAttribute('id', 'stavesmo230153');
stavesmo230153.setBegBarType(VF.Barline.type.NONE);
stavesmo230153.setContext(context);
stavesmo230153.draw();
smo230153v0.draw(context, stavesmo230153);
const stavesmo231351 = new VF.Stave(813, 1026.5133013333334, 212);
stavesmo231351.setAttribute('id', 'stavesmo231351');
stavesmo231351.setBegBarType(VF.Barline.type.NONE);
stavesmo231351.setContext(context);
stavesmo231351.draw();
smo231351v0.draw(context, stavesmo231351);
smo231351v1.draw(context, stavesmo231351);
const fmtsmo22896338 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo228963v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228963v0ar = [];
const smo228945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228945.setAttribute('id', 'smo228945');
smo228945.addModifier(new VF.Dot(), 0);
const smo228946 = new VF.Annotation('Shatz');
smo228946.setAttribute('id', 'smo228946');
smo228946.setFont('Merriweather', 12, 'normal');
smo228946.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228945.addModifier(smo228946);
smo228946.addClass('lyric lyric-0');
const smo228947 = new VF.Annotation('ra!');
smo228947.setAttribute('id', 'smo228947');
smo228947.setFont('Merriweather', 12, 'normal');
smo228947.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228945.addModifier(smo228947);
smo228947.addClass('lyric lyric-1');
smo228963v0ar.push(smo228945);
smo228963v0.addTickables(smo228963v0ar)
fmtsmo22896338.joinVoices([smo228963v0]);
const fmtsmo23017038 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo230170v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230170v0ar = [];
const smo230154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n","bn/4/n"]}'))
smo230154.setAttribute('id', 'smo230154');
smo230154.addModifier(new VF.Dot(), 0);
smo230154.addModifier(new VF.Dot(), 1);
smo230170v0ar.push(smo230154);
smo230170v0.addTickables(smo230170v0ar)
fmtsmo23017038.joinVoices([smo230170v0]);
const fmtsmo23137138 = new VF.Formatter();
//
// voices and notes for stave 2 38
const smo231371v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231371v0ar = [];
const smo231352 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo231352.setAttribute('id', 'smo231352');
smo231371v0ar.push(smo231352);
const smo231353 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo231353.setAttribute('id', 'smo231353');
smo231371v0ar.push(smo231353);
const smo231354 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo231354.setAttribute('id', 'smo231354');
smo231371v0ar.push(smo231354);
const smo231355 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo231355.setAttribute('id', 'smo231355');
smo231371v0ar.push(smo231355);
smo231371v0.addTickables(smo231371v0ar)
fmtsmo23137138.joinVoices([smo231371v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22896338.format([smo228963v0,smo230170v0,smo231371v0], 173);
const stavesmo228963 = new VF.Stave(1025, 778.5133013333334, 187);
stavesmo228963.setAttribute('id', 'stavesmo228963');
stavesmo228963.setBegBarType(VF.Barline.type.NONE);
stavesmo228963.setContext(context);
stavesmo228963.draw();
smo228963v0.draw(context, stavesmo228963);
const stavesmo230170 = new VF.Stave(1025, 890.5133013333334, 187);
stavesmo230170.setAttribute('id', 'stavesmo230170');
stavesmo230170.setBegBarType(VF.Barline.type.NONE);
stavesmo230170.setContext(context);
stavesmo230170.draw();
smo230170v0.draw(context, stavesmo230170);
const stavesmo231371 = new VF.Stave(1025, 1026.5133013333334, 187);
stavesmo231371.setAttribute('id', 'stavesmo231371');
stavesmo231371.setBegBarType(VF.Barline.type.NONE);
stavesmo231371.setContext(context);
stavesmo231371.draw();
smo231371v0.draw(context, stavesmo231371);
const rightsmo231827stavesmo2289632 = new VF.StaveConnector(stavesmo228963, stavesmo231371).setType(0);
rightsmo231827stavesmo2289632.setContext(context).draw();
const fmtsmo22899439 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo228994v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228994v0ar = [];
const smo228964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228964.setAttribute('id', 'smo228964');
const smo228965 = new VF.Annotation('-');
smo228965.setAttribute('id', 'smo228965');
smo228965.setFont('Merriweather', 12, 'normal');
smo228965.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228964.addModifier(smo228965);
smo228965.addClass('lyric lyric-0 lyric-hyphen');
smo228994v0ar.push(smo228964);
const smo228966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228966.setAttribute('id', 'smo228966');
smo228994v0ar.push(smo228966);
const smo228967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228967.setAttribute('id', 'smo228967');
const smo228968 = new VF.Annotation('der');
smo228968.setAttribute('id', 'smo228968');
smo228968.setFont('Merriweather', 12, 'normal');
smo228968.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228967.addModifier(smo228968);
smo228968.addClass('lyric lyric-0');
const smo228969 = new VF.Annotation('ich');
smo228969.setAttribute('id', 'smo228969');
smo228969.setFont('Merriweather', 12, 'normal');
smo228969.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228967.addModifier(smo228969);
smo228969.addClass('lyric lyric-1');
smo228994v0ar.push(smo228967);
const smo228970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228970.setAttribute('id', 'smo228970');
const smo228971 = new VF.Annotation('ist');
smo228971.setAttribute('id', 'smo228971');
smo228971.setFont('Merriweather', 12, 'normal');
smo228971.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228970.addModifier(smo228971);
smo228971.addClass('lyric lyric-0');
const smo228972 = new VF.Annotation('hö');
smo228972.setAttribute('id', 'smo228972');
smo228972.setFont('Merriweather', 12, 'normal');
smo228972.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228970.addModifier(smo228972);
smo228972.addClass('lyric lyric-1 lyric-hyphen');
smo228994v0ar.push(smo228970);
const smo228973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228973.setAttribute('id', 'smo228973');
const smo228974 = new VF.Annotation('Po');
smo228974.setAttribute('id', 'smo228974');
smo228974.setFont('Merriweather', 12, 'normal');
smo228974.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228973.addModifier(smo228974);
smo228974.addClass('lyric lyric-0 lyric-hyphen');
const smo228975 = new VF.Annotation('re');
smo228975.setAttribute('id', 'smo228975');
smo228975.setFont('Merriweather', 12, 'normal');
smo228975.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228973.addModifier(smo228975);
smo228975.addClass('lyric lyric-1');
smo228994v0ar.push(smo228973);
const smo228976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo228976.setAttribute('id', 'smo228976');
const smo228977 = new VF.Annotation('stil');
smo228977.setAttribute('id', 'smo228977');
smo228977.setFont('Merriweather', 12, 'normal');
smo228977.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228976.addModifier(smo228977);
smo228977.addClass('lyric lyric-0 lyric-hyphen');
const smo228978 = new VF.Annotation('sein');
smo228978.setAttribute('id', 'smo228978');
smo228978.setFont('Merriweather', 12, 'normal');
smo228978.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228976.addModifier(smo228978);
smo228978.addClass('lyric lyric-1');
smo228994v0ar.push(smo228976);
smo228994v0.addTickables(smo228994v0ar)
fmtsmo22899439.joinVoices([smo228994v0]);
const fmtsmo23018939 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo230189v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230189v0ar = [];
const smo230171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n","bn/4/n"]}'))
smo230171.setAttribute('id', 'smo230171');
smo230171.addModifier(new VF.Dot(), 0);
smo230171.addModifier(new VF.Dot(), 1);
smo230189v0ar.push(smo230171);
const smo230172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo230172.setAttribute('id', 'smo230172');
smo230189v0ar.push(smo230172);
const smo230173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo230173.setAttribute('id', 'smo230173');
smo230189v0ar.push(smo230173);
smo230189v0.addTickables(smo230189v0ar)
fmtsmo23018939.joinVoices([smo230189v0]);
const fmtsmo23139139 = new VF.Formatter();
//
// voices and notes for stave 2 39
const smo231391v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231391v0ar = [];
const smo231372 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo231372.setAttribute('id', 'smo231372');
smo231391v0ar.push(smo231372);
const smo231373 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo231373.setAttribute('id', 'smo231373');
smo231391v0ar.push(smo231373);
const smo231374 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo231374.setAttribute('id', 'smo231374');
smo231391v0ar.push(smo231374);
const smo231375 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo231375.setAttribute('id', 'smo231375');
smo231391v0ar.push(smo231375);
smo231391v0.addTickables(smo231391v0ar)
fmtsmo23139139.joinVoices([smo231391v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo238078 = smo228970.getStemDirection();
smo228970.setStemDirection(dirsmo238078);
smo228973.setStemDirection(dirsmo238078);
smo228976.setStemDirection(dirsmo238078);
const smo238078 = new VF.Beam([smo228970,smo228973,smo228976]);
 
// formatting measures in staff group smo231827
fmtsmo22899439.format([smo228994v0,smo230189v0,smo231391v0], 269);
const stavesmo228994 = new VF.Stave(66, 1166.5133013333334, 333);
stavesmo228994.setAttribute('id', 'stavesmo228994');
stavesmo228994.setBegBarType(1);
stavesmo228994.addClef('treble');
const keysmo228994 = new VF.KeySignature('G');
keysmo228994.addToStave(stavesmo228994);
stavesmo228994.setContext(context);
stavesmo228994.draw();
smo228994v0.draw(context, stavesmo228994);
smo238078.setContext(context);
smo238078.draw();
const stavesmo230189 = new VF.Stave(66, 1298.5133013333334, 333);
stavesmo230189.setAttribute('id', 'stavesmo230189');
stavesmo230189.setBegBarType(1);
stavesmo230189.addClef('treble');
const keysmo230189 = new VF.KeySignature('G');
keysmo230189.addToStave(stavesmo230189);
stavesmo230189.setContext(context);
stavesmo230189.draw();
smo230189v0.draw(context, stavesmo230189);
const stavesmo231391 = new VF.Stave(66, 1424.5133013333334, 333);
stavesmo231391.setAttribute('id', 'stavesmo231391');
stavesmo231391.setBegBarType(1);
stavesmo231391.addClef('bass');
const keysmo231391 = new VF.KeySignature('G');
keysmo231391.addToStave(stavesmo231391);
stavesmo231391.setContext(context);
stavesmo231391.draw();
smo231391v0.draw(context, stavesmo231391);
const leftsmo231827stavesmo2289942 = new VF.StaveConnector(stavesmo228994, stavesmo231391).setType(1);
leftsmo231827stavesmo2289942.setContext(context).draw();
const fmtsmo22901340 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo229013v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229013v0ar = [];
const smo228995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228995.setAttribute('id', 'smo228995');
smo228995.addModifier(new VF.Dot(), 0);
const smo228996 = new VF.Annotation('lion');
smo228996.setAttribute('id', 'smo228996');
smo228996.setFont('Merriweather', 12, 'normal');
smo228996.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228995.addModifier(smo228996);
smo228996.addClass('lyric lyric-0');
const smo228997 = new VF.Annotation('Lied!');
smo228997.setAttribute('id', 'smo228997');
smo228997.setFont('Merriweather', 12, 'normal');
smo228997.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228995.addModifier(smo228997);
smo228997.addClass('lyric lyric-1');
smo229013v0ar.push(smo228995);
smo229013v0.addTickables(smo229013v0ar)
fmtsmo22901340.joinVoices([smo229013v0]);
const fmtsmo23020640 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo230206v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230206v0ar = [];
const smo230190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo230190.setAttribute('id', 'smo230190');
smo230190.addModifier(new VF.Dot(), 0);
smo230190.addModifier(new VF.Dot(), 1);
smo230206v0ar.push(smo230190);
smo230206v0.addTickables(smo230206v0ar)
fmtsmo23020640.joinVoices([smo230206v0]);
const fmtsmo23141540 = new VF.Formatter();
//
// voices and notes for stave 2 40
const smo231415v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231415v0ar = [];
const smo231392 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo231392.setAttribute('id', 'smo231392');
smo231415v0ar.push(smo231392);
const smo231393 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo231393.setAttribute('id', 'smo231393');
smo231415v0ar.push(smo231393);
const smo231394 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo231394.setAttribute('id', 'smo231394');
smo231415v0ar.push(smo231394);
const smo231395 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo231395.setAttribute('id', 'smo231395');
smo231415v0ar.push(smo231395);
smo231415v0.addTickables(smo231415v0ar)
fmtsmo23141540.joinVoices([smo231415v0]);
const smo231415v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231415v1ar = [];
const smo231396 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo231396.setAttribute('id', 'smo231396');
smo231396.setStyle({ fillStyle: "#115511" });
smo231415v1ar.push(smo231396);
const smo231397 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo231397.setAttribute('id', 'smo231397');
smo231397.setStyle({ fillStyle: "#115511" });
smo231415v1ar.push(smo231397);
const smo231398 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo231398.setAttribute('id', 'smo231398');
smo231398.setStyle({ fillStyle: "#115511" });
smo231415v1ar.push(smo231398);
const smo231399 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo231399.setAttribute('id', 'smo231399');
smo231399.setStyle({ fillStyle: "#115511" });
smo231415v1ar.push(smo231399);
smo231415v1.addTickables(smo231415v1ar)
fmtsmo23141540.joinVoices([smo231415v1]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22901340.format([smo229013v0,smo230206v0,smo231415v0,smo231415v1], 139);
const stavesmo229013 = new VF.Stave(399, 1166.5133013333334, 153);
stavesmo229013.setAttribute('id', 'stavesmo229013');
stavesmo229013.setBegBarType(VF.Barline.type.NONE);
stavesmo229013.setContext(context);
stavesmo229013.draw();
smo229013v0.draw(context, stavesmo229013);
const stavesmo230206 = new VF.Stave(399, 1298.5133013333334, 153);
stavesmo230206.setAttribute('id', 'stavesmo230206');
stavesmo230206.setBegBarType(VF.Barline.type.NONE);
stavesmo230206.setContext(context);
stavesmo230206.draw();
smo230206v0.draw(context, stavesmo230206);
const stavesmo231415 = new VF.Stave(399, 1424.5133013333334, 153);
stavesmo231415.setAttribute('id', 'stavesmo231415');
stavesmo231415.setBegBarType(VF.Barline.type.NONE);
stavesmo231415.setContext(context);
stavesmo231415.draw();
smo231415v0.draw(context, stavesmo231415);
smo231415v1.draw(context, stavesmo231415);
const fmtsmo22904341 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo229043v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229043v0ar = [];
const smo229014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo229014.setAttribute('id', 'smo229014');
const smo229015 = new VF.Annotation('-');
smo229015.setAttribute('id', 'smo229015');
smo229015.setFont('Merriweather', 12, 'normal');
smo229015.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229014.addModifier(smo229015);
smo229015.addClass('lyric lyric-0 lyric-hyphen');
smo229043v0ar.push(smo229014);
const smo229016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229016.setAttribute('id', 'smo229016');
const smo229017 = new VF.Annotation('er');
smo229017.setAttribute('id', 'smo229017');
smo229017.setFont('Merriweather', 12, 'normal');
smo229017.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229016.addModifier(smo229017);
smo229017.addClass('lyric lyric-0');
const smo229018 = new VF.Annotation('ich');
smo229018.setAttribute('id', 'smo229018');
smo229018.setFont('Merriweather', 12, 'normal');
smo229018.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229016.addModifier(smo229018);
smo229018.addClass('lyric lyric-1');
smo229043v0ar.push(smo229016);
const smo229019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo229019.setAttribute('id', 'smo229019');
const smo229020 = new VF.Annotation('fährt');
smo229020.setAttribute('id', 'smo229020');
smo229020.setFont('Merriweather', 12, 'normal');
smo229020.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229019.addModifier(smo229020);
smo229020.addClass('lyric lyric-0');
const smo229021 = new VF.Annotation('hö');
smo229021.setAttribute('id', 'smo229021');
smo229021.setFont('Merriweather', 12, 'normal');
smo229021.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229019.addModifier(smo229021);
smo229021.addClass('lyric lyric-1 lyric-hyphen');
smo229043v0ar.push(smo229019);
const smo229022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo229022.setAttribute('id', 'smo229022');
const smo229023 = new VF.Annotation('durch');
smo229023.setAttribute('id', 'smo229023');
smo229023.setFont('Merriweather', 12, 'normal');
smo229023.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229022.addModifier(smo229023);
smo229023.addClass('lyric lyric-0');
const smo229024 = new VF.Annotation('re');
smo229024.setAttribute('id', 'smo229024');
smo229024.setFont('Merriweather', 12, 'normal');
smo229024.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229022.addModifier(smo229024);
smo229024.addClass('lyric lyric-1');
smo229043v0ar.push(smo229022);
const smo229025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229025.setAttribute('id', 'smo229025');
const smo229026 = new VF.Annotation('die');
smo229026.setAttribute('id', 'smo229026');
smo229026.setFont('Merriweather', 12, 'normal');
smo229026.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229025.addModifier(smo229026);
smo229026.addClass('lyric lyric-0');
const smo229027 = new VF.Annotation('es');
smo229027.setAttribute('id', 'smo229027');
smo229027.setFont('Merriweather', 12, 'normal');
smo229027.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229025.addModifier(smo229027);
smo229027.addClass('lyric lyric-1');
smo229043v0ar.push(smo229025);
smo229043v0.addTickables(smo229043v0ar)
fmtsmo22904341.joinVoices([smo229043v0]);
const fmtsmo23022441 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo230224v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230224v0ar = [];
const smo230207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo230207.setAttribute('id', 'smo230207');
smo230207.addModifier(new VF.Dot(), 0);
smo230207.addModifier(new VF.Dot(), 1);
smo230224v0ar.push(smo230207);
const smo230208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo230208.setAttribute('id', 'smo230208');
smo230208.addModifier(new VF.Dot(), 0);
smo230224v0ar.push(smo230208);
smo230224v0.addTickables(smo230224v0ar)
fmtsmo23022441.joinVoices([smo230224v0]);
const fmtsmo23143941 = new VF.Formatter();
//
// voices and notes for stave 2 41
const smo231439v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231439v0ar = [];
const smo231416 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo231416.setAttribute('id', 'smo231416');
smo231439v0ar.push(smo231416);
const smo231417 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo231417.setAttribute('id', 'smo231417');
smo231439v0ar.push(smo231417);
const smo231418 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo231418.setAttribute('id', 'smo231418');
smo231439v0ar.push(smo231418);
const smo231419 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo231419.setAttribute('id', 'smo231419');
smo231439v0ar.push(smo231419);
smo231439v0.addTickables(smo231439v0ar)
fmtsmo23143941.joinVoices([smo231439v0]);
const smo231439v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231439v1ar = [];
const smo231420 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo231420.setAttribute('id', 'smo231420');
smo231420.setStyle({ fillStyle: "#115511" });
smo231439v1ar.push(smo231420);
const smo231421 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo231421.setAttribute('id', 'smo231421');
smo231421.setStyle({ fillStyle: "#115511" });
smo231439v1ar.push(smo231421);
const smo231422 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo231422.setAttribute('id', 'smo231422');
smo231422.setStyle({ fillStyle: "#115511" });
smo231439v1ar.push(smo231422);
const smo231423 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo231423.setAttribute('id', 'smo231423');
smo231423.setStyle({ fillStyle: "#115511" });
smo231439v1ar.push(smo231423);
smo231439v1.addTickables(smo231439v1ar)
fmtsmo23143941.joinVoices([smo231439v1]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo238091 = smo229019.getStemDirection();
smo229019.setStemDirection(dirsmo238091);
smo229022.setStemDirection(dirsmo238091);
smo229025.setStemDirection(dirsmo238091);
const smo238091 = new VF.Beam([smo229019,smo229022,smo229025]);
 
// formatting measures in staff group smo231827
fmtsmo22904341.format([smo229043v0,smo230224v0,smo231439v0,smo231439v1], 292);
const stavesmo229043 = new VF.Stave(552, 1166.5133013333334, 306);
stavesmo229043.setAttribute('id', 'stavesmo229043');
stavesmo229043.setBegBarType(VF.Barline.type.NONE);
stavesmo229043.setContext(context);
stavesmo229043.draw();
smo229043v0.draw(context, stavesmo229043);
smo238091.setContext(context);
smo238091.draw();
const stavesmo230224 = new VF.Stave(552, 1298.5133013333334, 306);
stavesmo230224.setAttribute('id', 'stavesmo230224');
stavesmo230224.setBegBarType(VF.Barline.type.NONE);
stavesmo230224.setContext(context);
stavesmo230224.draw();
smo230224v0.draw(context, stavesmo230224);
const stavesmo231439 = new VF.Stave(552, 1424.5133013333334, 306);
stavesmo231439.setAttribute('id', 'stavesmo231439');
stavesmo231439.setBegBarType(VF.Barline.type.NONE);
stavesmo231439.setContext(context);
stavesmo231439.draw();
smo231439v0.draw(context, stavesmo231439);
smo231439v1.draw(context, stavesmo231439);
const fmtsmo22906542 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo229065v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229065v0ar = [];
const smo229044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo229044.setAttribute('id', 'smo229044');
smo229044.addModifier(new VF.Dot(), 0);
const smo229045 = new VF.Annotation('Fel');
smo229045.setAttribute('id', 'smo229045');
smo229045.setFont('Merriweather', 12, 'normal');
smo229045.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229044.addModifier(smo229045);
smo229045.addClass('lyric lyric-0 lyric-hyphen');
const smo229046 = new VF.Annotation('sin');
smo229046.setAttribute('id', 'smo229046');
smo229046.setFont('Merriweather', 12, 'normal');
smo229046.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229044.addModifier(smo229046);
smo229046.addClass('lyric lyric-1 lyric-hyphen');
smo229065v0ar.push(smo229044);
const smo229047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo229047.setAttribute('id', 'smo229047');
smo229047.addModifier(new VF.Dot(), 0);
const smo229048 = new VF.Annotation('er');
smo229048.setAttribute('id', 'smo229048');
smo229048.setFont('Merriweather', 12, 'normal');
smo229048.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229047.addModifier(smo229048);
smo229048.addClass('lyric lyric-0');
const smo229049 = new VF.Annotation('gen,');
smo229049.setAttribute('id', 'smo229049');
smo229049.setFont('Merriweather', 12, 'normal');
smo229049.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229047.addModifier(smo229049);
smo229049.addClass('lyric lyric-1');
smo229065v0ar.push(smo229047);
smo229065v0.addTickables(smo229065v0ar)
fmtsmo22906542.joinVoices([smo229065v0]);
const fmtsmo23024142 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo230241v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230241v0ar = [];
const smo230225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n","f#/5/n","dn/6/n"]}'))
smo230225.setAttribute('id', 'smo230225');
smo230225.addModifier(new VF.Dot(), 0);
smo230225.addModifier(new VF.Dot(), 1);
smo230225.addModifier(new VF.Dot(), 2);
smo230241v0ar.push(smo230225);
smo230241v0.addTickables(smo230241v0ar)
fmtsmo23024142.joinVoices([smo230241v0]);
const fmtsmo23146142 = new VF.Formatter();
//
// voices and notes for stave 2 42
const smo231461v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231461v0ar = [];
const smo231440 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo231440.setAttribute('id', 'smo231440');
smo231461v0ar.push(smo231440);
const smo231441 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo231441.setAttribute('id', 'smo231441');
smo231461v0ar.push(smo231441);
const smo231442 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo231442.setAttribute('id', 'smo231442');
smo231461v0ar.push(smo231442);
const smo231443 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo231443.setAttribute('id', 'smo231443');
smo231461v0ar.push(smo231443);
smo231461v0.addTickables(smo231461v0ar)
fmtsmo23146142.joinVoices([smo231461v0]);
const smo231461v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231461v1ar = [];
const smo231444 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo231444.setAttribute('id', 'smo231444');
smo231444.setStyle({ fillStyle: "#115511" });
smo231444.addModifier(new VF.Dot(), 0);
smo231461v1ar.push(smo231444);
const smo231445 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["cn/4/r"]}'))
smo231445.setAttribute('id', 'smo231445');
smo231445.setStyle({ fillStyle: "#115511" });
smo231445.addModifier(new VF.Dot(), 0);
smo231461v1ar.push(smo231445);
smo231461v1.addTickables(smo231461v1ar)
fmtsmo23146142.joinVoices([smo231461v1]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22906542.format([smo229065v0,smo230241v0,smo231461v0,smo231461v1], 158);
const stavesmo229065 = new VF.Stave(858, 1166.5133013333334, 172);
stavesmo229065.setAttribute('id', 'stavesmo229065');
stavesmo229065.setBegBarType(VF.Barline.type.NONE);
stavesmo229065.setContext(context);
stavesmo229065.draw();
smo229065v0.draw(context, stavesmo229065);
const stavesmo230241 = new VF.Stave(858, 1298.5133013333334, 172);
stavesmo230241.setAttribute('id', 'stavesmo230241');
stavesmo230241.setBegBarType(VF.Barline.type.NONE);
stavesmo230241.setContext(context);
stavesmo230241.draw();
smo230241v0.draw(context, stavesmo230241);
const stavesmo231461 = new VF.Stave(858, 1424.5133013333334, 172);
stavesmo231461.setAttribute('id', 'stavesmo231461');
stavesmo231461.setBegBarType(VF.Barline.type.NONE);
stavesmo231461.setContext(context);
stavesmo231461.draw();
smo231461v0.draw(context, stavesmo231461);
smo231461v1.draw(context, stavesmo231461);
const fmtsmo22908743 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo229087v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229087v0ar = [];
const smo229066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo229066.setAttribute('id', 'smo229066');
smo229066.addModifier(new VF.Dot(), 0);
const smo229067 = new VF.Annotation('Wäl');
smo229067.setAttribute('id', 'smo229067');
smo229067.setFont('Merriweather', 12, 'normal');
smo229067.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229066.addModifier(smo229067);
smo229067.addClass('lyric lyric-0 lyric-hyphen');
const smo229068 = new VF.Annotation('klin');
smo229068.setAttribute('id', 'smo229068');
smo229068.setFont('Merriweather', 12, 'normal');
smo229068.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229066.addModifier(smo229068);
smo229068.addClass('lyric lyric-1 lyric-hyphen');
smo229087v0ar.push(smo229066);
const smo229069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo229069.setAttribute('id', 'smo229069');
smo229069.addModifier(new VF.Dot(), 0);
const smo229070 = new VF.Annotation('der');
smo229070.setAttribute('id', 'smo229070');
smo229070.setFont('Merriweather', 12, 'normal');
smo229070.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229069.addModifier(smo229070);
smo229070.addClass('lyric lyric-0');
const smo229071 = new VF.Annotation('gen:');
smo229071.setAttribute('id', 'smo229071');
smo229071.setFont('Merriweather', 12, 'normal');
smo229071.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo229069.addModifier(smo229071);
smo229071.addClass('lyric lyric-1');
smo229087v0ar.push(smo229069);
smo229087v0.addTickables(smo229087v0ar)
fmtsmo22908743.joinVoices([smo229087v0]);
const fmtsmo23025843 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo230258v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230258v0ar = [];
const smo230242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n","f#/5/n","dn/6/n"]}'))
smo230242.setAttribute('id', 'smo230242');
smo230242.addModifier(new VF.Dot(), 0);
smo230242.addModifier(new VF.Dot(), 1);
smo230242.addModifier(new VF.Dot(), 2);
smo230258v0ar.push(smo230242);
smo230258v0.addTickables(smo230258v0ar)
fmtsmo23025843.joinVoices([smo230258v0]);
const fmtsmo23148343 = new VF.Formatter();
//
// voices and notes for stave 2 43
const smo231483v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231483v0ar = [];
const smo231462 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo231462.setAttribute('id', 'smo231462');
smo231483v0ar.push(smo231462);
const smo231463 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo231463.setAttribute('id', 'smo231463');
smo231483v0ar.push(smo231463);
const smo231464 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo231464.setAttribute('id', 'smo231464');
smo231483v0ar.push(smo231464);
const smo231465 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo231465.setAttribute('id', 'smo231465');
smo231483v0ar.push(smo231465);
smo231483v0.addTickables(smo231483v0ar)
fmtsmo23148343.joinVoices([smo231483v0]);
const smo231483v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231483v1ar = [];
const smo231466 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo231466.setAttribute('id', 'smo231466');
smo231466.setStyle({ fillStyle: "#115511" });
smo231466.addModifier(new VF.Dot(), 0);
smo231483v1ar.push(smo231466);
const smo231467 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["cn/4/r"]}'))
smo231467.setAttribute('id', 'smo231467');
smo231467.setStyle({ fillStyle: "#115511" });
smo231467.addModifier(new VF.Dot(), 0);
smo231483v1ar.push(smo231467);
smo231483v1.addTickables(smo231483v1ar)
fmtsmo23148343.joinVoices([smo231483v1]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22908743.format([smo229087v0,smo230258v0,smo231483v0,smo231483v1], 169);
const stavesmo229087 = new VF.Stave(1030, 1166.5133013333334, 183);
stavesmo229087.setAttribute('id', 'stavesmo229087');
stavesmo229087.setBegBarType(VF.Barline.type.NONE);
stavesmo229087.setContext(context);
stavesmo229087.draw();
smo229087v0.draw(context, stavesmo229087);
const stavesmo230258 = new VF.Stave(1030, 1298.5133013333334, 183);
stavesmo230258.setAttribute('id', 'stavesmo230258');
stavesmo230258.setBegBarType(VF.Barline.type.NONE);
stavesmo230258.setContext(context);
stavesmo230258.draw();
smo230258v0.draw(context, stavesmo230258);
const stavesmo231483 = new VF.Stave(1030, 1424.5133013333334, 183);
stavesmo231483.setAttribute('id', 'stavesmo231483');
stavesmo231483.setBegBarType(VF.Barline.type.NONE);
stavesmo231483.setContext(context);
stavesmo231483.draw();
smo231483v0.draw(context, stavesmo231483);
smo231483v1.draw(context, stavesmo231483);
const rightsmo231827stavesmo2290872 = new VF.StaveConnector(stavesmo229087, stavesmo231483).setType(0);
rightsmo231827stavesmo2290872.setContext(context).draw();
// modifier from 0-26-0-0 to 0-27-0-0
const smo238889 = new VF.Curve(smo228654, smo228673, JSON.parse('{"thickness":2,"xShift":0,"yShift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo238889.setContext(context).draw();
// modifier from 0-22-0-0 to 0-23-0-0
const smo238890 = new VF.StaveTie({ first_note: smo228562, last_note: smo228581, 
          firstNote: smo228562, lastNote: smo228581, first_indices: [0], last_indices: [0]});
smo238890.setContext(context).draw();
// modifier from 0-25-0-0 to 0-25-0-1
const smo238891 = new VF.StaveTie({ first_note: smo228630, last_note: smo228633, 
          firstNote: smo228630, lastNote: smo228633, first_indices: [0], last_indices: [0]});
smo238891.setContext(context).draw();
// modifier from 0-30-0-0 to 0-31-0-0
const smo238892 = new VF.StaveTie({ first_note: smo228746, last_note: smo228765, 
          firstNote: smo228746, lastNote: smo228765, first_indices: [0], last_indices: [0]});
smo238892.setContext(context).draw();
// modifier from 0-32-0-3 to 0-33-0-0
const smo238893 = new VF.StaveTie({ first_note: smo228802, last_note: smo228821, 
          firstNote: smo228802, lastNote: smo228821, first_indices: [0], last_indices: [0]});
smo238893.setContext(context).draw();
// modifier from 0-34-0-2 to 0-35-0-0
const smo238894 = new VF.StaveTie({ first_note: smo228857, last_note: smo228876, 
          firstNote: smo228857, lastNote: smo228876, first_indices: [0], last_indices: [0]});
smo238894.setContext(context).draw();
// modifier from 1-30-0-0 to 1-31-0-0
const smo238895 = new VF.Curve(smo230012, smo230029, JSON.parse('{"thickness":2,"xShift":0,"yShift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo238895.setContext(context).draw();
// modifier from 1-40-0-0 to 1-41-0-0
const smo238896 = new VF.StaveTie({ first_note: smo230190, last_note: smo230207, 
          firstNote: smo230190, lastNote: smo230207, first_indices: [0,1], last_indices: [0,1]});
smo238896.setContext(context).draw();
// modifier from 1-42-0-0 to 1-43-0-0
const smo238897 = new VF.StaveTie({ first_note: smo230225, last_note: smo230242, 
          firstNote: smo230225, lastNote: smo230242, first_indices: [0,1,2], last_indices: [0,1,2]});
smo238897.setContext(context).draw();
// modifier from 1-38-0-0 to 1-39-0-0
const smo238898 = new VF.StaveTie({ first_note: smo230154, last_note: null, 
          firstNote: smo230154, lastNote: null, first_indices: [0,1], last_indices: [0,1]});
smo238898.setContext(context).draw();
// modifier from 1-38-0-0 to 1-39-0-0
const smo238899 = new VF.StaveTie({ first_note: null, last_note: smo230171, 
          firstNote: null, lastNote: smo230171, first_indices: [0,1], last_indices: [0,1]});
smo238899.setContext(context).draw();
// modifier from 2-30-0-0 to 2-31-0-0
const smo238900 = new VF.Curve(smo231190, smo231211, JSON.parse('{"thickness":2,"xShift":0,"yShift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"positionEnd":2}'));
smo238900.setContext(context).draw();
// modifier from 2-32-0-0 to 2-33-0-0
const smo238901 = new VF.StaveTie({ first_note: smo231232, last_note: smo231253, 
          firstNote: smo231232, lastNote: smo231253, first_indices: [0], last_indices: [0]});
smo238901.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo228563').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228564').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228584').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228585').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228587').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228588').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228590').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228591').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228609').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228610').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228612').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228613').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228632').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228631').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228634').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228637').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228656').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228677').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228680').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228683').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228702').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228704').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228705').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228723').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo228724').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo228726').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo228728').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228729').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo228748').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228747').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo228766').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228767').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo228769').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228770').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo228772').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228773').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo228775').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228776').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo228794').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228795').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo228797').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228798').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo228801').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo228804').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228803').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo228822').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228824').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228825').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo228827').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228828').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo228830').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228831').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo228833').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228834').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo228852').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228853').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo228855').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228856').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo228859').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228858').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo228877').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228881').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228899').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228900').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo228902').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228903').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo228905').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228906').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo228928').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228946').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228947').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo228968').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo228969').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo228971').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo228972').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo228974').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo228975').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo228977').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo228978').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo228996').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo228997').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo229017').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo229018').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo229020').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo229021').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo229023').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo229024').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo229026').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo229027').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo229045').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo229046').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo229048').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo229049').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo229067').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo229068').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo229070').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo229071').setAttributeNS('', 'transform', 'translate(0 30)');
}
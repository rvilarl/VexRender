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
const fmtsmo22795743 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo227957v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227957v0ar = [];
const smo227936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227936.setAttribute('id', 'smo227936');
smo227936.addModifier(new VF.Dot(), 0);
const smo227937 = new VF.Annotation('Wäl');
smo227937.setAttribute('id', 'smo227937');
smo227937.setFont('Merriweather', 12, 'normal');
smo227937.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227936.addModifier(smo227937);
smo227937.addClass('lyric lyric-0 lyric-hyphen');
const smo227938 = new VF.Annotation('klin');
smo227938.setAttribute('id', 'smo227938');
smo227938.setFont('Merriweather', 12, 'normal');
smo227938.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227936.addModifier(smo227938);
smo227938.addClass('lyric lyric-1 lyric-hyphen');
smo227957v0ar.push(smo227936);
const smo227939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo227939.setAttribute('id', 'smo227939');
smo227939.addModifier(new VF.Dot(), 0);
const smo227940 = new VF.Annotation('der');
smo227940.setAttribute('id', 'smo227940');
smo227940.setFont('Merriweather', 12, 'normal');
smo227940.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227939.addModifier(smo227940);
smo227940.addClass('lyric lyric-0');
const smo227941 = new VF.Annotation('gen:');
smo227941.setAttribute('id', 'smo227941');
smo227941.setFont('Merriweather', 12, 'normal');
smo227941.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227939.addModifier(smo227941);
smo227941.addClass('lyric lyric-1');
smo227957v0ar.push(smo227939);
smo227957v0.addTickables(smo227957v0ar)
fmtsmo22795743.joinVoices([smo227957v0]);
const fmtsmo22912843 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo229128v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229128v0ar = [];
const smo229112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n","f#/5/n","dn/6/n"]}'))
smo229112.setAttribute('id', 'smo229112');
smo229112.addModifier(new VF.Dot(), 0);
smo229112.addModifier(new VF.Dot(), 1);
smo229112.addModifier(new VF.Dot(), 2);
smo229128v0ar.push(smo229112);
smo229128v0.addTickables(smo229128v0ar)
fmtsmo22912843.joinVoices([smo229128v0]);
const fmtsmo23035343 = new VF.Formatter();
//
// voices and notes for stave 2 43
const smo230353v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230353v0ar = [];
const smo230332 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo230332.setAttribute('id', 'smo230332');
smo230353v0ar.push(smo230332);
const smo230333 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo230333.setAttribute('id', 'smo230333');
smo230353v0ar.push(smo230333);
const smo230334 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo230334.setAttribute('id', 'smo230334');
smo230353v0ar.push(smo230334);
const smo230335 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo230335.setAttribute('id', 'smo230335');
smo230353v0ar.push(smo230335);
smo230353v0.addTickables(smo230353v0ar)
fmtsmo23035343.joinVoices([smo230353v0]);
const smo230353v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230353v1ar = [];
const smo230336 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo230336.setAttribute('id', 'smo230336');
smo230336.setStyle({ fillStyle: "#115511" });
smo230336.addModifier(new VF.Dot(), 0);
smo230353v1ar.push(smo230336);
const smo230337 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["cn/4/r"]}'))
smo230337.setAttribute('id', 'smo230337');
smo230337.setStyle({ fillStyle: "#115511" });
smo230337.addModifier(new VF.Dot(), 0);
smo230353v1ar.push(smo230337);
smo230353v1.addTickables(smo230353v1ar)
fmtsmo23035343.joinVoices([smo230353v1]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22795743.format([smo227957v0,smo229128v0,smo230353v0,smo230353v1], 173);
const stavesmo227957 = new VF.Stave(66, 98.0266026666668, 247);
stavesmo227957.setAttribute('id', 'stavesmo227957');
stavesmo227957.setBegBarType(1);
stavesmo227957.addClef('treble');
const keysmo227957 = new VF.KeySignature('G');
keysmo227957.addToStave(stavesmo227957);
stavesmo227957.setContext(context);
stavesmo227957.draw();
smo227957v0.draw(context, stavesmo227957);
const stavesmo229128 = new VF.Stave(66, 280.0266026666668, 247);
stavesmo229128.setAttribute('id', 'stavesmo229128');
stavesmo229128.setBegBarType(1);
stavesmo229128.addClef('treble');
const keysmo229128 = new VF.KeySignature('G');
keysmo229128.addToStave(stavesmo229128);
stavesmo229128.setContext(context);
stavesmo229128.draw();
smo229128v0.draw(context, stavesmo229128);
const stavesmo230353 = new VF.Stave(66, 386.0266026666668, 247);
stavesmo230353.setAttribute('id', 'stavesmo230353');
stavesmo230353.setBegBarType(1);
stavesmo230353.addClef('bass');
const keysmo230353 = new VF.KeySignature('G');
keysmo230353.addToStave(stavesmo230353);
stavesmo230353.setContext(context);
stavesmo230353.draw();
smo230353v0.draw(context, stavesmo230353);
smo230353v1.draw(context, stavesmo230353);
const leftsmo230697stavesmo2279572 = new VF.StaveConnector(stavesmo227957, stavesmo230353).setType(1);
leftsmo230697stavesmo2279572.setContext(context).draw();
const fmtsmo22798544 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo227985v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227985v0ar = [];
const smo227958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227958.setAttribute('id', 'smo227958');
const smo227959 = new VF.Annotation('ü');
smo227959.setAttribute('id', 'smo227959');
smo227959.setFont('Merriweather', 12, 'normal');
smo227959.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227958.addModifier(smo227959);
smo227959.addClass('lyric lyric-0 lyric-hyphen');
const smo227960 = new VF.Annotation('Ich');
smo227960.setAttribute('id', 'smo227960');
smo227960.setFont('Merriweather', 12, 'normal');
smo227960.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227958.addModifier(smo227960);
smo227960.addClass('lyric lyric-1');
smo227985v0ar.push(smo227958);
const smo227961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo227961.setAttribute('id', 'smo227961');
const smo227962 = new VF.Annotation('ber');
smo227962.setAttribute('id', 'smo227962');
smo227962.setFont('Merriweather', 12, 'normal');
smo227962.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227961.addModifier(smo227962);
smo227962.addClass('lyric lyric-0');
const smo227963 = new VF.Annotation('bin');
smo227963.setAttribute('id', 'smo227963');
smo227963.setFont('Merriweather', 12, 'normal');
smo227963.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227961.addModifier(smo227963);
smo227963.addClass('lyric lyric-1');
smo227985v0ar.push(smo227961);
const smo227964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo227964.setAttribute('id', 'smo227964');
const smo227965 = new VF.Annotation('das');
smo227965.setAttribute('id', 'smo227965');
smo227965.setFont('Merriweather', 12, 'normal');
smo227965.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227964.addModifier(smo227965);
smo227965.addClass('lyric lyric-0');
const smo227966 = new VF.Annotation('ganz');
smo227966.setAttribute('id', 'smo227966');
smo227966.setFont('Merriweather', 12, 'normal');
smo227966.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227964.addModifier(smo227966);
smo227966.addClass('lyric lyric-1');
smo227985v0ar.push(smo227964);
const smo227967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227967.setAttribute('id', 'smo227967');
smo227967.addModifier(new VF.Dot(), 0);
const smo227968 = new VF.Annotation('Land;');
smo227968.setAttribute('id', 'smo227968');
smo227968.setFont('Merriweather', 12, 'normal');
smo227968.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227967.addModifier(smo227968);
smo227968.addClass('lyric lyric-0');
const smo227969 = new VF.Annotation('nah!');
smo227969.setAttribute('id', 'smo227969');
smo227969.setFont('Merriweather', 12, 'normal');
smo227969.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227967.addModifier(smo227969);
smo227969.addClass('lyric lyric-1');
smo227985v0ar.push(smo227967);
smo227985v0.addTickables(smo227985v0ar)
fmtsmo22798544.joinVoices([smo227985v0]);
const fmtsmo22914544 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo229145v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229145v0ar = [];
const smo229129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo229129.setAttribute('id', 'smo229129');
smo229129.addModifier(new VF.Dot(), 0);
smo229129.addModifier(new VF.Dot(), 1);
smo229145v0ar.push(smo229129);
smo229145v0.addTickables(smo229145v0ar)
fmtsmo22914544.joinVoices([smo229145v0]);
const fmtsmo23037344 = new VF.Formatter();
//
// voices and notes for stave 2 44
const smo230373v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230373v0ar = [];
const smo230354 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo230354.setAttribute('id', 'smo230354');
smo230373v0ar.push(smo230354);
const smo230355 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo230355.setAttribute('id', 'smo230355');
smo230373v0ar.push(smo230355);
const smo230356 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo230356.setAttribute('id', 'smo230356');
smo230373v0ar.push(smo230356);
const smo230357 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo230357.setAttribute('id', 'smo230357');
smo230373v0ar.push(smo230357);
smo230373v0.addTickables(smo230373v0ar)
fmtsmo23037344.joinVoices([smo230373v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo236983 = smo227958.getStemDirection();
smo227958.setStemDirection(dirsmo236983);
smo227961.setStemDirection(dirsmo236983);
smo227964.setStemDirection(dirsmo236983);
const smo236983 = new VF.Beam([smo227958,smo227961,smo227964]);
 
// formatting measures in staff group smo230697
fmtsmo22798544.format([smo227985v0,smo229145v0,smo230373v0], 278);
const stavesmo227985 = new VF.Stave(313, 98.0266026666668, 292);
stavesmo227985.setAttribute('id', 'stavesmo227985');
stavesmo227985.setBegBarType(VF.Barline.type.NONE);
stavesmo227985.setContext(context);
stavesmo227985.draw();
smo227985v0.draw(context, stavesmo227985);
smo236983.setContext(context);
smo236983.draw();
const stavesmo229145 = new VF.Stave(313, 280.0266026666668, 292);
stavesmo229145.setAttribute('id', 'stavesmo229145');
stavesmo229145.setBegBarType(VF.Barline.type.NONE);
stavesmo229145.setContext(context);
stavesmo229145.draw();
smo229145v0.draw(context, stavesmo229145);
const stavesmo230373 = new VF.Stave(313, 386.0266026666668, 292);
stavesmo230373.setAttribute('id', 'stavesmo230373');
stavesmo230373.setBegBarType(VF.Barline.type.NONE);
stavesmo230373.setContext(context);
stavesmo230373.draw();
smo230373v0.draw(context, stavesmo230373);
const fmtsmo22800545 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo228005v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228005v0ar = [];
const smo227986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo227986.setAttribute('id', 'smo227986');
smo227986.addModifier(new VF.Dot(), 0);
smo228005v0ar.push(smo227986);
const smo227987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo227987.setAttribute('id', 'smo227987');
smo227987.addModifier(new VF.Dot(), 0);
const smo227988 = new VF.Annotation('von');
smo227988.setAttribute('id', 'smo227988');
smo227988.setFont('Merriweather', 12, 'normal');
smo227988.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227987.addModifier(smo227988);
smo227988.addClass('lyric lyric-0');
const smo227989 = new VF.Annotation('Tra');
smo227989.setAttribute('id', 'smo227989');
smo227989.setFont('Merriweather', 12, 'normal');
smo227989.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227987.addModifier(smo227989);
smo227989.addClass('lyric lyric-1 lyric-hyphen');
smo228005v0ar.push(smo227987);
smo228005v0.addTickables(smo228005v0ar)
fmtsmo22800545.joinVoices([smo228005v0]);
const fmtsmo22916245 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo229162v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229162v0ar = [];
const smo229146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo229146.setAttribute('id', 'smo229146');
smo229146.addModifier(new VF.Dot(), 0);
smo229146.addModifier(new VF.Dot(), 1);
smo229162v0ar.push(smo229146);
smo229162v0.addTickables(smo229162v0ar)
fmtsmo22916245.joinVoices([smo229162v0]);
const fmtsmo23039345 = new VF.Formatter();
//
// voices and notes for stave 2 45
const smo230393v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230393v0ar = [];
const smo230374 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo230374.setAttribute('id', 'smo230374');
smo230393v0ar.push(smo230374);
const smo230375 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo230375.setAttribute('id', 'smo230375');
smo230393v0ar.push(smo230375);
const smo230376 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo230376.setAttribute('id', 'smo230376');
smo230393v0ar.push(smo230376);
const smo230377 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo230377.setAttribute('id', 'smo230377');
smo230393v0ar.push(smo230377);
smo230393v0.addTickables(smo230393v0ar)
fmtsmo23039345.joinVoices([smo230393v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22800545.format([smo228005v0,smo229162v0,smo230393v0], 150);
const stavesmo228005 = new VF.Stave(605, 98.0266026666668, 164);
stavesmo228005.setAttribute('id', 'stavesmo228005');
stavesmo228005.setBegBarType(VF.Barline.type.NONE);
stavesmo228005.setContext(context);
stavesmo228005.draw();
smo228005v0.draw(context, stavesmo228005);
const stavesmo229162 = new VF.Stave(605, 280.0266026666668, 164);
stavesmo229162.setAttribute('id', 'stavesmo229162');
stavesmo229162.setBegBarType(VF.Barline.type.NONE);
stavesmo229162.setContext(context);
stavesmo229162.draw();
smo229162v0.draw(context, stavesmo229162);
const stavesmo230393 = new VF.Stave(605, 386.0266026666668, 164);
stavesmo230393.setAttribute('id', 'stavesmo230393');
stavesmo230393.setBegBarType(VF.Barline.type.NONE);
stavesmo230393.setContext(context);
stavesmo230393.draw();
smo230393v0.draw(context, stavesmo230393);
const fmtsmo22802446 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo228024v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228024v0ar = [];
const smo228006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228006.setAttribute('id', 'smo228006');
smo228006.addModifier(new VF.Dot(), 0);
const smo228007 = new VF.Annotation('fern');
smo228007.setAttribute('id', 'smo228007');
smo228007.setFont('Merriweather', 12, 'normal');
smo228007.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228006.addModifier(smo228007);
smo228007.addClass('lyric lyric-0');
const smo228008 = new VF.Annotation('ra!');
smo228008.setAttribute('id', 'smo228008');
smo228008.setFont('Merriweather', 12, 'normal');
smo228008.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228006.addModifier(smo228008);
smo228008.addClass('lyric lyric-1');
smo228024v0ar.push(smo228006);
smo228024v0.addTickables(smo228024v0ar)
fmtsmo22802446.joinVoices([smo228024v0]);
const fmtsmo22918246 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo229182v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229182v0ar = [];
const smo229163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo229163.setAttribute('id', 'smo229163');
smo229163.addModifier(new VF.Dot(), 0);
smo229182v0ar.push(smo229163);
smo229182v0.addTickables(smo229182v0ar)
fmtsmo22918246.joinVoices([smo229182v0]);
const smo229182v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229182v1ar = [];
const smo229164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/5/r"]}'))
smo229164.setAttribute('id', 'smo229164');
smo229164.setStyle({ fillStyle: "#115511" });
smo229164.addModifier(new VF.Dot(), 0);
smo229182v1ar.push(smo229164);
const smo229165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/5/n"]}'))
smo229165.setAttribute('id', 'smo229165');
smo229165.setStyle({ fillStyle: "#115511" });
smo229182v1ar.push(smo229165);
const smo229166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo229166.setAttribute('id', 'smo229166');
smo229166.setStyle({ fillStyle: "#115511" });
smo229182v1ar.push(smo229166);
smo229182v1.addTickables(smo229182v1ar)
fmtsmo22918246.joinVoices([smo229182v1]);
const fmtsmo23041346 = new VF.Formatter();
//
// voices and notes for stave 2 46
const smo230413v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230413v0ar = [];
const smo230394 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo230394.setAttribute('id', 'smo230394');
smo230413v0ar.push(smo230394);
const smo230395 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo230395.setAttribute('id', 'smo230395');
smo230413v0ar.push(smo230395);
const smo230396 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo230396.setAttribute('id', 'smo230396');
smo230413v0ar.push(smo230396);
const smo230397 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo230397.setAttribute('id', 'smo230397');
smo230413v0ar.push(smo230397);
smo230413v0.addTickables(smo230413v0ar)
fmtsmo23041346.joinVoices([smo230413v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22802446.format([smo228024v0,smo229182v0,smo229182v1,smo230413v0], 138);
const stavesmo228024 = new VF.Stave(769, 98.0266026666668, 152);
stavesmo228024.setAttribute('id', 'stavesmo228024');
stavesmo228024.setBegBarType(VF.Barline.type.NONE);
stavesmo228024.setContext(context);
stavesmo228024.draw();
smo228024v0.draw(context, stavesmo228024);
const stavesmo229182 = new VF.Stave(769, 280.0266026666668, 152);
stavesmo229182.setAttribute('id', 'stavesmo229182');
stavesmo229182.setBegBarType(VF.Barline.type.NONE);
stavesmo229182.setContext(context);
stavesmo229182.draw();
smo229182v0.draw(context, stavesmo229182);
smo229182v1.draw(context, stavesmo229182);
const stavesmo230413 = new VF.Stave(769, 386.0266026666668, 152);
stavesmo230413.setAttribute('id', 'stavesmo230413');
stavesmo230413.setBegBarType(VF.Barline.type.NONE);
stavesmo230413.setContext(context);
stavesmo230413.draw();
smo230413v0.draw(context, stavesmo230413);
const fmtsmo22805447 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo228054v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228054v0ar = [];
const smo228025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228025.setAttribute('id', 'smo228025');
smo228054v0ar.push(smo228025);
const smo228027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228027.setAttribute('id', 'smo228027');
const smo228028 = new VF.Annotation('er');
smo228028.setAttribute('id', 'smo228028');
smo228028.setFont('Merriweather', 12, 'normal');
smo228028.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228027.addModifier(smo228028);
smo228028.addClass('lyric lyric-0');
const smo228029 = new VF.Annotation('Ich');
smo228029.setAttribute('id', 'smo228029');
smo228029.setFont('Merriweather', 12, 'normal');
smo228029.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228027.addModifier(smo228029);
smo228029.addClass('lyric lyric-1');
smo228054v0ar.push(smo228027);
const smo228030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228030.setAttribute('id', 'smo228030');
const smo228031 = new VF.Annotation('kem');
smo228031.setAttribute('id', 'smo228031');
smo228031.setFont('Merriweather', 12, 'normal');
smo228031.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228030.addModifier(smo228031);
smo228031.addClass('lyric lyric-0');
const smo228032 = new VF.Annotation('hö');
smo228032.setAttribute('id', 'smo228032');
smo228032.setFont('Merriweather', 12, 'normal');
smo228032.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228030.addModifier(smo228032);
smo228032.addClass('lyric lyric-1 lyric-hyphen');
smo228054v0ar.push(smo228030);
const smo228033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228033.setAttribute('id', 'smo228033');
const smo228034 = new VF.Annotation('ich');
smo228034.setAttribute('id', 'smo228034');
smo228034.setFont('Merriweather', 12, 'normal');
smo228034.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228033.addModifier(smo228034);
smo228034.addClass('lyric lyric-0');
const smo228035 = new VF.Annotation('re');
smo228035.setAttribute('id', 'smo228035');
smo228035.setFont('Merriweather', 12, 'normal');
smo228035.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228033.addModifier(smo228035);
smo228035.addClass('lyric lyric-1');
smo228054v0ar.push(smo228033);
const smo228036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228036.setAttribute('id', 'smo228036');
const smo228037 = new VF.Annotation('ihn');
smo228037.setAttribute('id', 'smo228037');
smo228037.setFont('Merriweather', 12, 'normal');
smo228037.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228036.addModifier(smo228037);
smo228037.addClass('lyric lyric-0');
const smo228038 = new VF.Annotation('sein');
smo228038.setAttribute('id', 'smo228038');
smo228038.setFont('Merriweather', 12, 'normal');
smo228038.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228036.addModifier(smo228038);
smo228038.addClass('lyric lyric-1');
smo228054v0ar.push(smo228036);
smo228054v0.addTickables(smo228054v0ar)
fmtsmo22805447.joinVoices([smo228054v0]);
const fmtsmo22920147 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo229201v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229201v0ar = [];
const smo229183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo229183.setAttribute('id', 'smo229183');
smo229183.addModifier(new VF.Dot(), 0);
smo229201v0ar.push(smo229183);
smo229201v0.addTickables(smo229201v0ar)
fmtsmo22920147.joinVoices([smo229201v0]);
const smo229201v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229201v1ar = [];
const smo229184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/6/n"]}'))
smo229184.setAttribute('id', 'smo229184');
smo229184.setStyle({ fillStyle: "#115511" });
smo229184.addModifier(new VF.Dot(), 0);
smo229201v1ar.push(smo229184);
const smo229185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/5/r"]}'))
smo229185.setAttribute('id', 'smo229185');
smo229185.setStyle({ fillStyle: "#115511" });
smo229185.addModifier(new VF.Dot(), 0);
smo229201v1ar.push(smo229185);
smo229201v1.addTickables(smo229201v1ar)
fmtsmo22920147.joinVoices([smo229201v1]);
const fmtsmo23043347 = new VF.Formatter();
//
// voices and notes for stave 2 47
const smo230433v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230433v0ar = [];
const smo230414 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo230414.setAttribute('id', 'smo230414');
smo230433v0ar.push(smo230414);
const smo230415 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo230415.setAttribute('id', 'smo230415');
smo230433v0ar.push(smo230415);
const smo230416 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo230416.setAttribute('id', 'smo230416');
smo230433v0ar.push(smo230416);
const smo230417 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo230417.setAttribute('id', 'smo230417');
smo230433v0ar.push(smo230417);
smo230433v0.addTickables(smo230433v0ar)
fmtsmo23043347.joinVoices([smo230433v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo237002 = smo228030.getStemDirection();
smo228030.setStemDirection(dirsmo237002);
smo228033.setStemDirection(dirsmo237002);
smo228036.setStemDirection(dirsmo237002);
const smo237002 = new VF.Beam([smo228030,smo228033,smo228036]);
 
// formatting measures in staff group smo230697
fmtsmo22805447.format([smo228054v0,smo229201v0,smo229201v1,smo230433v0], 275);
const stavesmo228054 = new VF.Stave(921, 98.0266026666668, 289);
stavesmo228054.setAttribute('id', 'stavesmo228054');
stavesmo228054.setBegBarType(VF.Barline.type.NONE);
stavesmo228054.setContext(context);
stavesmo228054.draw();
smo228054v0.draw(context, stavesmo228054);
smo237002.setContext(context);
smo237002.draw();
const stavesmo229201 = new VF.Stave(921, 280.0266026666668, 289);
stavesmo229201.setAttribute('id', 'stavesmo229201');
stavesmo229201.setBegBarType(VF.Barline.type.NONE);
stavesmo229201.setContext(context);
stavesmo229201.draw();
smo229201v0.draw(context, stavesmo229201);
smo229201v1.draw(context, stavesmo229201);
const stavesmo230433 = new VF.Stave(921, 386.0266026666668, 289);
stavesmo230433.setAttribute('id', 'stavesmo230433');
stavesmo230433.setBegBarType(VF.Barline.type.NONE);
stavesmo230433.setContext(context);
stavesmo230433.draw();
smo230433v0.draw(context, stavesmo230433);
const rightsmo230697stavesmo2280542 = new VF.StaveConnector(stavesmo228054, stavesmo230433).setType(0);
rightsmo230697stavesmo2280542.setContext(context).draw();
const fmtsmo22807348 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo228073v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228073v0ar = [];
const smo228055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228055.setAttribute('id', 'smo228055');
smo228055.addModifier(new VF.Dot(), 0);
const smo228056 = new VF.Annotation('schon');
smo228056.setAttribute('id', 'smo228056');
smo228056.setFont('Merriweather', 12, 'normal');
smo228056.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228055.addModifier(smo228056);
smo228056.addClass('lyric lyric-0');
const smo228057 = new VF.Annotation('Lied!');
smo228057.setAttribute('id', 'smo228057');
smo228057.setFont('Merriweather', 12, 'normal');
smo228057.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228055.addModifier(smo228057);
smo228057.addClass('lyric lyric-1');
smo228073v0ar.push(smo228055);
smo228073v0.addTickables(smo228073v0ar)
fmtsmo22807348.joinVoices([smo228073v0]);
const fmtsmo22922348 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo229223v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229223v0ar = [];
const smo229202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo229202.setAttribute('id', 'smo229202');
smo229202.addModifier(new VF.Dot(), 0);
smo229223v0ar.push(smo229202);
const smo229203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo229203.setAttribute('id', 'smo229203');
smo229223v0ar.push(smo229203);
const smo229204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo229204.setAttribute('id', 'smo229204');
smo229223v0ar.push(smo229204);
smo229223v0.addTickables(smo229223v0ar)
fmtsmo22922348.joinVoices([smo229223v0]);
const smo229223v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229223v1ar = [];
const smo229205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/5/r"]}'))
smo229205.setAttribute('id', 'smo229205');
smo229205.setStyle({ fillStyle: "#115511" });
smo229205.addModifier(new VF.Dot(), 0);
smo229223v1ar.push(smo229205);
const smo229206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo229206.setAttribute('id', 'smo229206');
smo229206.setStyle({ fillStyle: "#115511" });
smo229223v1ar.push(smo229206);
const smo229207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo229207.setAttribute('id', 'smo229207');
smo229207.setStyle({ fillStyle: "#115511" });
smo229223v1ar.push(smo229207);
smo229223v1.addTickables(smo229223v1ar)
fmtsmo22922348.joinVoices([smo229223v1]);
const fmtsmo23045348 = new VF.Formatter();
//
// voices and notes for stave 2 48
const smo230453v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230453v0ar = [];
const smo230434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo230434.setAttribute('id', 'smo230434');
smo230453v0ar.push(smo230434);
const smo230435 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo230435.setAttribute('id', 'smo230435');
smo230453v0ar.push(smo230435);
const smo230436 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo230436.setAttribute('id', 'smo230436');
smo230453v0ar.push(smo230436);
const smo230437 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo230437.setAttribute('id', 'smo230437');
smo230453v0ar.push(smo230437);
smo230453v0.addTickables(smo230453v0ar)
fmtsmo23045348.joinVoices([smo230453v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22807348.format([smo228073v0,smo229223v0,smo229223v1,smo230453v0], 152);
const stavesmo228073 = new VF.Stave(66, 516.0266026666668, 226);
stavesmo228073.setAttribute('id', 'stavesmo228073');
stavesmo228073.setBegBarType(1);
stavesmo228073.addClef('treble');
const keysmo228073 = new VF.KeySignature('G');
keysmo228073.addToStave(stavesmo228073);
stavesmo228073.setContext(context);
stavesmo228073.draw();
smo228073v0.draw(context, stavesmo228073);
const stavesmo229223 = new VF.Stave(66, 688.0266026666668, 226);
stavesmo229223.setAttribute('id', 'stavesmo229223');
stavesmo229223.setBegBarType(1);
stavesmo229223.addClef('treble');
const keysmo229223 = new VF.KeySignature('G');
keysmo229223.addToStave(stavesmo229223);
stavesmo229223.setContext(context);
stavesmo229223.draw();
smo229223v0.draw(context, stavesmo229223);
smo229223v1.draw(context, stavesmo229223);
const stavesmo230453 = new VF.Stave(66, 780.0266026666668, 226);
stavesmo230453.setAttribute('id', 'stavesmo230453');
stavesmo230453.setBegBarType(1);
stavesmo230453.addClef('bass');
const keysmo230453 = new VF.KeySignature('G');
keysmo230453.addToStave(stavesmo230453);
stavesmo230453.setContext(context);
stavesmo230453.draw();
smo230453v0.draw(context, stavesmo230453);
const leftsmo230697stavesmo2280732 = new VF.StaveConnector(stavesmo228073, stavesmo230453).setType(1);
leftsmo230697stavesmo2280732.setContext(context).draw();
const fmtsmo22810349 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo228103v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228103v0ar = [];
const smo228074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228074.setAttribute('id', 'smo228074');
const smo228075 = new VF.Annotation('-');
smo228075.setAttribute('id', 'smo228075');
smo228075.setFont('Merriweather', 12, 'normal');
smo228075.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228074.addModifier(smo228075);
smo228075.addClass('lyric lyric-0 lyric-hyphen');
smo228103v0ar.push(smo228074);
const smo228076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228076.setAttribute('id', 'smo228076');
const smo228077 = new VF.Annotation('denn');
smo228077.setAttribute('id', 'smo228077');
smo228077.setFont('Merriweather', 12, 'normal');
smo228077.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228076.addModifier(smo228077);
smo228077.addClass('lyric lyric-0');
const smo228078 = new VF.Annotation('Es');
smo228078.setAttribute('id', 'smo228078');
smo228078.setFont('Merriweather', 12, 'normal');
smo228078.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228076.addModifier(smo228078);
smo228078.addClass('lyric lyric-1');
smo228103v0ar.push(smo228076);
const smo228079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228079.setAttribute('id', 'smo228079');
const smo228080 = new VF.Annotation('all');
smo228080.setAttribute('id', 'smo228080');
smo228080.setFont('Merriweather', 12, 'normal');
smo228080.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228079.addModifier(smo228080);
smo228080.addClass('lyric lyric-0');
const smo228081 = new VF.Annotation('soli');
smo228081.setAttribute('id', 'smo228081');
smo228081.setFont('Merriweather', 12, 'normal');
smo228081.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228079.addModifier(smo228081);
smo228081.addClass('lyric lyric-1');
smo228103v0ar.push(smo228079);
const smo228082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228082.setAttribute('id', 'smo228082');
const smo228083 = new VF.Annotation('sei');
smo228083.setAttribute('id', 'smo228083');
smo228083.setFont('Merriweather', 12, 'normal');
smo228083.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228082.addModifier(smo228083);
smo228083.addClass('lyric lyric-0 lyric-hyphen');
const smo228084 = new VF.Annotation('zu');
smo228084.setAttribute('id', 'smo228084');
smo228084.setFont('Merriweather', 12, 'normal');
smo228084.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228082.addModifier(smo228084);
smo228084.addClass('lyric lyric-1 lyric-hyphen');
smo228103v0ar.push(smo228082);
const smo228085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228085.setAttribute('id', 'smo228085');
const smo228086 = new VF.Annotation('ne');
smo228086.setAttribute('id', 'smo228086');
smo228086.setFont('Merriweather', 12, 'normal');
smo228086.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228085.addModifier(smo228086);
smo228086.addClass('lyric lyric-0');
const smo228087 = new VF.Annotation('mir');
smo228087.setAttribute('id', 'smo228087');
smo228087.setFont('Merriweather', 12, 'normal');
smo228087.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228085.addModifier(smo228087);
smo228087.addClass('lyric lyric-1');
smo228103v0ar.push(smo228085);
smo228103v0.addTickables(smo228103v0ar)
fmtsmo22810349.joinVoices([smo228103v0]);
const fmtsmo22924149 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo229241v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229241v0ar = [];
const smo229224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo229224.setAttribute('id', 'smo229224');
smo229224.addModifier(new VF.Dot(), 0);
smo229241v0ar.push(smo229224);
smo229241v0.addTickables(smo229241v0ar)
fmtsmo22924149.joinVoices([smo229241v0]);
const smo229241v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229241v1ar = [];
const smo229225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/6/n"]}'))
smo229225.setAttribute('id', 'smo229225');
smo229225.setStyle({ fillStyle: "#115511" });
smo229225.addModifier(new VF.Dot(), 0);
smo229241v1ar.push(smo229225);
smo229241v1.addTickables(smo229241v1ar)
fmtsmo22924149.joinVoices([smo229241v1]);
const fmtsmo23047349 = new VF.Formatter();
//
// voices and notes for stave 2 49
const smo230473v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230473v0ar = [];
const smo230454 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo230454.setAttribute('id', 'smo230454');
smo230473v0ar.push(smo230454);
const smo230455 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo230455.setAttribute('id', 'smo230455');
smo230473v0ar.push(smo230455);
const smo230456 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo230456.setAttribute('id', 'smo230456');
smo230473v0ar.push(smo230456);
const smo230457 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo230457.setAttribute('id', 'smo230457');
smo230473v0ar.push(smo230457);
smo230473v0.addTickables(smo230473v0ar)
fmtsmo23047349.joinVoices([smo230473v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo237022 = smo228079.getStemDirection();
smo228079.setStemDirection(dirsmo237022);
smo228082.setStemDirection(dirsmo237022);
smo228085.setStemDirection(dirsmo237022);
const smo237022 = new VF.Beam([smo228079,smo228082,smo228085]);
 
// formatting measures in staff group smo230697
fmtsmo22810349.format([smo228103v0,smo229241v0,smo229241v1,smo230473v0], 271);
const stavesmo228103 = new VF.Stave(292, 516.0266026666668, 285);
stavesmo228103.setAttribute('id', 'stavesmo228103');
stavesmo228103.setBegBarType(VF.Barline.type.NONE);
stavesmo228103.setContext(context);
stavesmo228103.draw();
smo228103v0.draw(context, stavesmo228103);
smo237022.setContext(context);
smo237022.draw();
const stavesmo229241 = new VF.Stave(292, 688.0266026666668, 285);
stavesmo229241.setAttribute('id', 'stavesmo229241');
stavesmo229241.setBegBarType(VF.Barline.type.NONE);
stavesmo229241.setContext(context);
stavesmo229241.draw();
smo229241v0.draw(context, stavesmo229241);
smo229241v1.draw(context, stavesmo229241);
const stavesmo230473 = new VF.Stave(292, 780.0266026666668, 285);
stavesmo230473.setAttribute('id', 'stavesmo230473');
stavesmo230473.setBegBarType(VF.Barline.type.NONE);
stavesmo230473.setContext(context);
stavesmo230473.draw();
smo230473v0.draw(context, stavesmo230473);
const fmtsmo22812550 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo228125v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228125v0ar = [];
const smo228104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228104.setAttribute('id', 'smo228104');
smo228104.addModifier(new VF.Dot(), 0);
const smo228105 = new VF.Annotation('Lie');
smo228105.setAttribute('id', 'smo228105');
smo228105.setFont('Merriweather', 12, 'normal');
smo228105.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228104.addModifier(smo228105);
smo228105.addClass('lyric lyric-0 lyric-hyphen');
const smo228106 = new VF.Annotation('so');
smo228106.setAttribute('id', 'smo228106');
smo228106.setFont('Merriweather', 12, 'normal');
smo228106.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228104.addModifier(smo228106);
smo228106.addClass('lyric lyric-1 lyric-hyphen');
smo228125v0ar.push(smo228104);
const smo228107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228107.setAttribute('id', 'smo228107');
smo228107.addModifier(new VF.Dot(), 0);
const smo228108 = new VF.Annotation('der');
smo228108.setAttribute('id', 'smo228108');
smo228108.setFont('Merriweather', 12, 'normal');
smo228108.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228107.addModifier(smo228108);
smo228108.addClass('lyric lyric-0');
const smo228109 = new VF.Annotation('gen');
smo228109.setAttribute('id', 'smo228109');
smo228109.setFont('Merriweather', 12, 'normal');
smo228109.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228107.addModifier(smo228109);
smo228109.addClass('lyric lyric-1');
smo228125v0ar.push(smo228107);
smo228125v0.addTickables(smo228125v0ar)
fmtsmo22812550.joinVoices([smo228125v0]);
const fmtsmo22925950 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo229259v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229259v0ar = [];
const smo229242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo229242.setAttribute('id', 'smo229242');
smo229242.addModifier(new VF.Dot(), 0);
smo229259v0ar.push(smo229242);
const smo229243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["f#/4/n","dn/5/n"]}'))
smo229243.setAttribute('id', 'smo229243');
smo229243.addModifier(new VF.Dot(), 0);
smo229243.addModifier(new VF.Dot(), 1);
smo229259v0ar.push(smo229243);
smo229259v0.addTickables(smo229259v0ar)
fmtsmo22925950.joinVoices([smo229259v0]);
const fmtsmo23049350 = new VF.Formatter();
//
// voices and notes for stave 2 50
const smo230493v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230493v0ar = [];
const smo230474 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo230474.setAttribute('id', 'smo230474');
smo230493v0ar.push(smo230474);
const smo230475 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo230475.setAttribute('id', 'smo230475');
smo230493v0ar.push(smo230475);
const smo230476 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo230476.setAttribute('id', 'smo230476');
smo230493v0ar.push(smo230476);
const smo230477 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo230477.setAttribute('id', 'smo230477');
smo230493v0ar.push(smo230477);
smo230493v0.addTickables(smo230493v0ar)
fmtsmo23049350.joinVoices([smo230493v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22812550.format([smo228125v0,smo229259v0,smo230493v0], 149);
const stavesmo228125 = new VF.Stave(577, 516.0266026666668, 163);
stavesmo228125.setAttribute('id', 'stavesmo228125');
stavesmo228125.setBegBarType(VF.Barline.type.NONE);
stavesmo228125.setContext(context);
stavesmo228125.draw();
smo228125v0.draw(context, stavesmo228125);
const stavesmo229259 = new VF.Stave(577, 688.0266026666668, 163);
stavesmo229259.setAttribute('id', 'stavesmo229259');
stavesmo229259.setBegBarType(VF.Barline.type.NONE);
stavesmo229259.setContext(context);
stavesmo229259.draw();
smo229259v0.draw(context, stavesmo229259);
const stavesmo230493 = new VF.Stave(577, 780.0266026666668, 163);
stavesmo230493.setAttribute('id', 'stavesmo230493');
stavesmo230493.setBegBarType(VF.Barline.type.NONE);
stavesmo230493.setContext(context);
stavesmo230493.draw();
smo230493v0.draw(context, stavesmo230493);
const fmtsmo22814751 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo228147v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228147v0ar = [];
const smo228126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228126.setAttribute('id', 'smo228126');
smo228126.addModifier(new VF.Dot(), 0);
const smo228127 = new VF.Annotation('-');
smo228127.setAttribute('id', 'smo228127');
smo228127.setFont('Merriweather', 12, 'normal');
smo228127.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228126.addModifier(smo228127);
smo228127.addClass('lyric lyric-0 lyric-hyphen');
smo228147v0ar.push(smo228126);
const smo228128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228128.setAttribute('id', 'smo228128');
smo228147v0ar.push(smo228128);
const smo228129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo228129.setAttribute('id', 'smo228129');
const smo228130 = new VF.Annotation('sie');
smo228130.setAttribute('id', 'smo228130');
smo228130.setFont('Merriweather', 12, 'normal');
smo228130.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228129.addModifier(smo228130);
smo228130.addClass('lyric lyric-0');
const smo228131 = new VF.Annotation('Ich');
smo228131.setAttribute('id', 'smo228131');
smo228131.setFont('Merriweather', 12, 'normal');
smo228131.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228129.addModifier(smo228131);
smo228131.addClass('lyric lyric-1');
smo228147v0ar.push(smo228129);
smo228147v0.addTickables(smo228147v0ar)
fmtsmo22814751.joinVoices([smo228147v0]);
const fmtsmo22927651 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo229276v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229276v0ar = [];
const smo229260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["f#/4/n","dn/5/n"]}'))
smo229260.setAttribute('id', 'smo229260');
smo229260.addModifier(new VF.Dot(), 0);
smo229260.addModifier(new VF.Dot(), 1);
smo229276v0ar.push(smo229260);
smo229276v0.addTickables(smo229276v0ar)
fmtsmo22927651.joinVoices([smo229276v0]);
const fmtsmo23051051 = new VF.Formatter();
//
// voices and notes for stave 2 51
const smo230510v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230510v0ar = [];
const smo230494 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo230494.setAttribute('id', 'smo230494');
smo230494.addModifier(new VF.Dot(), 0);
smo230494.addModifier(new VF.Dot(), 1);
smo230510v0ar.push(smo230494);
smo230510v0.addTickables(smo230510v0ar)
fmtsmo23051051.joinVoices([smo230510v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22814751.format([smo228147v0,smo229276v0,smo230510v0], 116);
const stavesmo228147 = new VF.Stave(740, 516.0266026666668, 130);
stavesmo228147.setAttribute('id', 'stavesmo228147');
stavesmo228147.setBegBarType(VF.Barline.type.NONE);
stavesmo228147.setContext(context);
stavesmo228147.draw();
smo228147v0.draw(context, stavesmo228147);
const stavesmo229276 = new VF.Stave(740, 688.0266026666668, 130);
stavesmo229276.setAttribute('id', 'stavesmo229276');
stavesmo229276.setBegBarType(VF.Barline.type.NONE);
stavesmo229276.setContext(context);
stavesmo229276.draw();
smo229276v0.draw(context, stavesmo229276);
const stavesmo230510 = new VF.Stave(740, 780.0266026666668, 130);
stavesmo230510.setAttribute('id', 'stavesmo230510');
stavesmo230510.setBegBarType(VF.Barline.type.NONE);
stavesmo230510.setContext(context);
stavesmo230510.draw();
smo230510v0.draw(context, stavesmo230510);
const fmtsmo22817552 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo228175v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228175v0ar = [];
const smo228148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo228148.setAttribute('id', 'smo228148');
const smo228149 = new VF.Annotation('sind');
smo228149.setAttribute('id', 'smo228149');
smo228149.setFont('Merriweather', 12, 'normal');
smo228149.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228148.addModifier(smo228149);
smo228149.addClass('lyric lyric-0');
const smo228150 = new VF.Annotation('bin');
smo228150.setAttribute('id', 'smo228150');
smo228150.setFont('Merriweather', 12, 'normal');
smo228150.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228148.addModifier(smo228150);
smo228150.addClass('lyric lyric-1');
smo228175v0ar.push(smo228148);
const smo228151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo228151.setAttribute('id', 'smo228151');
const smo228152 = new VF.Annotation('mir');
smo228152.setAttribute('id', 'smo228152');
smo228152.setFont('Merriweather', 12, 'normal');
smo228152.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228151.addModifier(smo228152);
smo228152.addClass('lyric lyric-0');
const smo228153 = new VF.Annotation('wie');
smo228153.setAttribute('id', 'smo228153');
smo228153.setFont('Merriweather', 12, 'normal');
smo228153.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228151.addModifier(smo228153);
smo228153.addClass('lyric lyric-1 lyric-hyphen');
smo228175v0ar.push(smo228151);
const smo228154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo228154.setAttribute('id', 'smo228154');
const smo228155 = new VF.Annotation('be');
smo228155.setAttribute('id', 'smo228155');
smo228155.setFont('Merriweather', 12, 'normal');
smo228155.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228154.addModifier(smo228155);
smo228155.addClass('lyric lyric-0 lyric-hyphen');
const smo228156 = new VF.Annotation('der');
smo228156.setAttribute('id', 'smo228156');
smo228156.setFont('Merriweather', 12, 'normal');
smo228156.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228154.addModifier(smo228156);
smo228156.addClass('lyric lyric-1');
smo228175v0ar.push(smo228154);
const smo228157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo228157.setAttribute('id', 'smo228157');
smo228157.addModifier(new VF.Dot(), 0);
const smo228158 = new VF.Annotation('kannt!');
smo228158.setAttribute('id', 'smo228158');
smo228158.setFont('Merriweather', 12, 'normal');
smo228158.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228157.addModifier(smo228158);
smo228158.addClass('lyric lyric-0');
const smo228159 = new VF.Annotation('da!');
smo228159.setAttribute('id', 'smo228159');
smo228159.setFont('Merriweather', 12, 'normal');
smo228159.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228157.addModifier(smo228159);
smo228159.addClass('lyric lyric-1');
smo228175v0ar.push(smo228157);
smo228175v0.addTickables(smo228175v0ar)
fmtsmo22817552.joinVoices([smo228175v0]);
const fmtsmo22929352 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo229293v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229293v0ar = [];
const smo229277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n","cn/5/n"]}'))
smo229277.setAttribute('id', 'smo229277');
smo229277.addModifier(new VF.Dot(), 0);
smo229277.addModifier(new VF.Dot(), 1);
smo229293v0ar.push(smo229277);
smo229293v0.addTickables(smo229293v0ar)
fmtsmo22929352.joinVoices([smo229293v0]);
const fmtsmo23052752 = new VF.Formatter();
//
// voices and notes for stave 2 52
const smo230527v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230527v0ar = [];
const smo230511 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo230511.setAttribute('id', 'smo230511');
smo230511.addModifier(new VF.Dot(), 0);
smo230527v0ar.push(smo230511);
smo230527v0.addTickables(smo230527v0ar)
fmtsmo23052752.joinVoices([smo230527v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo237041 = smo228148.getStemDirection();
smo228148.setStemDirection(dirsmo237041);
smo228151.setStemDirection(dirsmo237041);
smo228154.setStemDirection(dirsmo237041);
const smo237041 = new VF.Beam([smo228148,smo228151,smo228154]);
 
// formatting measures in staff group smo230697
fmtsmo22817552.format([smo228175v0,smo229293v0,smo230527v0], 254);
const stavesmo228175 = new VF.Stave(870, 516.0266026666668, 268);
stavesmo228175.setAttribute('id', 'stavesmo228175');
stavesmo228175.setBegBarType(VF.Barline.type.NONE);
stavesmo228175.setContext(context);
stavesmo228175.draw();
smo228175v0.draw(context, stavesmo228175);
smo237041.setContext(context);
smo237041.draw();
const stavesmo229293 = new VF.Stave(870, 688.0266026666668, 268);
stavesmo229293.setAttribute('id', 'stavesmo229293');
stavesmo229293.setBegBarType(VF.Barline.type.NONE);
stavesmo229293.setContext(context);
stavesmo229293.draw();
smo229293v0.draw(context, stavesmo229293);
const stavesmo230527 = new VF.Stave(870, 780.0266026666668, 268);
stavesmo230527.setAttribute('id', 'stavesmo230527');
stavesmo230527.setBegBarType(VF.Barline.type.NONE);
stavesmo230527.setContext(context);
stavesmo230527.draw();
smo230527v0.draw(context, stavesmo230527);
const fmtsmo22819353 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo228193v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228193v0ar = [];
const smo228176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo228176.setAttribute('id', 'smo228176');
smo228176.addModifier(new VF.Dot(), 0);
const smo228177 = new VF.Annotation('-');
smo228177.setAttribute('id', 'smo228177');
smo228177.setFont('Merriweather', 12, 'normal');
smo228177.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228176.addModifier(smo228177);
smo228177.addClass('lyric lyric-0 lyric-hyphen');
smo228193v0ar.push(smo228176);
smo228193v0.addTickables(smo228193v0ar)
fmtsmo22819353.joinVoices([smo228193v0]);
const fmtsmo22931053 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo229310v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229310v0ar = [];
const smo229294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n","cn/5/n"]}'))
smo229294.setAttribute('id', 'smo229294');
smo229294.addModifier(new VF.Dot(), 0);
smo229294.addModifier(new VF.Dot(), 1);
smo229310v0ar.push(smo229294);
smo229310v0.addTickables(smo229310v0ar)
fmtsmo22931053.joinVoices([smo229310v0]);
const fmtsmo23054453 = new VF.Formatter();
//
// voices and notes for stave 2 53
const smo230544v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230544v0ar = [];
const smo230528 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo230528.setAttribute('id', 'smo230528');
smo230528.addModifier(new VF.Dot(), 0);
smo230544v0ar.push(smo230528);
smo230544v0.addTickables(smo230544v0ar)
fmtsmo23054453.joinVoices([smo230544v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22819353.format([smo228193v0,smo229310v0,smo230544v0], 58);
const stavesmo228193 = new VF.Stave(1138, 516.0266026666668, 72);
stavesmo228193.setAttribute('id', 'stavesmo228193');
stavesmo228193.setBegBarType(VF.Barline.type.NONE);
stavesmo228193.setContext(context);
stavesmo228193.draw();
smo228193v0.draw(context, stavesmo228193);
const stavesmo229310 = new VF.Stave(1138, 688.0266026666668, 72);
stavesmo229310.setAttribute('id', 'stavesmo229310');
stavesmo229310.setBegBarType(VF.Barline.type.NONE);
stavesmo229310.setContext(context);
stavesmo229310.draw();
smo229310v0.draw(context, stavesmo229310);
const stavesmo230544 = new VF.Stave(1138, 780.0266026666668, 72);
stavesmo230544.setAttribute('id', 'stavesmo230544');
stavesmo230544.setBegBarType(VF.Barline.type.NONE);
stavesmo230544.setContext(context);
stavesmo230544.draw();
smo230544v0.draw(context, stavesmo230544);
const rightsmo230697stavesmo2281932 = new VF.StaveConnector(stavesmo228193, stavesmo230544).setType(0);
rightsmo230697stavesmo2281932.setContext(context).draw();
const fmtsmo22821254 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo228212v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228212v0ar = [];
const smo228194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo228194.setAttribute('id', 'smo228194');
smo228194.addModifier(new VF.Dot(), 0);
const smo228195 = new VF.Annotation('-');
smo228195.setAttribute('id', 'smo228195');
smo228195.setFont('Merriweather', 12, 'normal');
smo228195.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228194.addModifier(smo228195);
smo228195.addClass('lyric lyric-0 lyric-hyphen');
smo228212v0ar.push(smo228194);
smo228212v0.addTickables(smo228212v0ar)
fmtsmo22821254.joinVoices([smo228212v0]);
const fmtsmo22933154 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo229331v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229331v0ar = [];
const smo229311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229311.setAttribute('id', 'smo229311');
smo229331v0ar.push(smo229311);
const smo229312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229312.setAttribute('id', 'smo229312');
smo229331v0ar.push(smo229312);
const smo229313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229313.setAttribute('id', 'smo229313');
smo229331v0ar.push(smo229313);
const smo229314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229314.setAttribute('id', 'smo229314');
smo229331v0ar.push(smo229314);
smo229331v0.addTickables(smo229331v0ar)
fmtsmo22933154.joinVoices([smo229331v0]);
const fmtsmo23056554 = new VF.Formatter();
//
// voices and notes for stave 2 54
const smo230565v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230565v0ar = [];
const smo230545 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230545.setAttribute('id', 'smo230545');
smo230565v0ar.push(smo230545);
const smo230546 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230546.setAttribute('id', 'smo230546');
smo230565v0ar.push(smo230546);
const smo230547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230547.setAttribute('id', 'smo230547');
smo230565v0ar.push(smo230547);
const smo230548 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230548.setAttribute('id', 'smo230548');
smo230565v0ar.push(smo230548);
smo230565v0.addTickables(smo230565v0ar)
fmtsmo23056554.joinVoices([smo230565v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22821254.format([smo228212v0,smo229331v0,smo230565v0], 111);
const stavesmo228212 = new VF.Stave(66, 909.0266026666668, 185);
stavesmo228212.setAttribute('id', 'stavesmo228212');
stavesmo228212.setBegBarType(1);
stavesmo228212.addClef('treble');
const keysmo228212 = new VF.KeySignature('G');
keysmo228212.addToStave(stavesmo228212);
stavesmo228212.setContext(context);
stavesmo228212.draw();
smo228212v0.draw(context, stavesmo228212);
const stavesmo229331 = new VF.Stave(66, 1030.0266026666668, 185);
stavesmo229331.setAttribute('id', 'stavesmo229331');
stavesmo229331.setBegBarType(1);
stavesmo229331.addClef('treble');
const keysmo229331 = new VF.KeySignature('G');
keysmo229331.addToStave(stavesmo229331);
stavesmo229331.setContext(context);
stavesmo229331.draw();
smo229331v0.draw(context, stavesmo229331);
const stavesmo230565 = new VF.Stave(66, 1106.0266026666668, 185);
stavesmo230565.setAttribute('id', 'stavesmo230565');
stavesmo230565.setBegBarType(1);
stavesmo230565.addClef('bass');
const keysmo230565 = new VF.KeySignature('G');
keysmo230565.addToStave(stavesmo230565);
stavesmo230565.setContext(context);
stavesmo230565.draw();
smo230565v0.draw(context, stavesmo230565);
const leftsmo230697stavesmo2282122 = new VF.StaveConnector(stavesmo228212, stavesmo230565).setType(1);
leftsmo230697stavesmo2282122.setContext(context).draw();
const fmtsmo22822955 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo228229v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228229v0ar = [];
const smo228213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo228213.setAttribute('id', 'smo228213');
smo228213.addModifier(new VF.Dot(), 0);
smo228229v0ar.push(smo228213);
smo228229v0.addTickables(smo228229v0ar)
fmtsmo22822955.joinVoices([smo228229v0]);
const fmtsmo22935155 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo229351v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229351v0ar = [];
const smo229332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229332.setAttribute('id', 'smo229332');
smo229351v0ar.push(smo229332);
const smo229333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229333.setAttribute('id', 'smo229333');
smo229351v0ar.push(smo229333);
const smo229334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229334.setAttribute('id', 'smo229334');
smo229351v0ar.push(smo229334);
const smo229335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229335.setAttribute('id', 'smo229335');
smo229351v0ar.push(smo229335);
smo229351v0.addTickables(smo229351v0ar)
fmtsmo22935155.joinVoices([smo229351v0]);
const fmtsmo23058555 = new VF.Formatter();
//
// voices and notes for stave 2 55
const smo230585v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230585v0ar = [];
const smo230566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230566.setAttribute('id', 'smo230566');
smo230585v0ar.push(smo230566);
const smo230567 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230567.setAttribute('id', 'smo230567');
smo230585v0ar.push(smo230567);
const smo230568 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230568.setAttribute('id', 'smo230568');
smo230585v0ar.push(smo230568);
const smo230569 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230569.setAttribute('id', 'smo230569');
smo230585v0ar.push(smo230569);
smo230585v0.addTickables(smo230585v0ar)
fmtsmo23058555.joinVoices([smo230585v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22822955.format([smo228229v0,smo229351v0,smo230585v0], 106);
const stavesmo228229 = new VF.Stave(251, 909.0266026666668, 124);
stavesmo228229.setAttribute('id', 'stavesmo228229');
stavesmo228229.setBegBarType(VF.Barline.type.NONE);
stavesmo228229.setEndBarType(5);
stavesmo228229.setContext(context);
stavesmo228229.draw();
smo228229v0.draw(context, stavesmo228229);
const stavesmo229351 = new VF.Stave(251, 1030.0266026666668, 124);
stavesmo229351.setAttribute('id', 'stavesmo229351');
stavesmo229351.setBegBarType(VF.Barline.type.NONE);
stavesmo229351.setEndBarType(5);
stavesmo229351.setContext(context);
stavesmo229351.draw();
smo229351v0.draw(context, stavesmo229351);
const stavesmo230585 = new VF.Stave(251, 1106.0266026666668, 124);
stavesmo230585.setAttribute('id', 'stavesmo230585');
stavesmo230585.setBegBarType(VF.Barline.type.NONE);
stavesmo230585.setEndBarType(5);
stavesmo230585.setContext(context);
stavesmo230585.draw();
smo230585v0.draw(context, stavesmo230585);
const fmtsmo22824856 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo228248v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228248v0ar = [];
const smo228230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo228230.setAttribute('id', 'smo228230');
smo228230.addModifier(new VF.Dot(), 0);
const smo228231 = new VF.Annotation('-');
smo228231.setAttribute('id', 'smo228231');
smo228231.setFont('Merriweather', 12, 'normal');
smo228231.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228230.addModifier(smo228231);
smo228231.addClass('lyric lyric-0 lyric-hyphen');
smo228248v0ar.push(smo228230);
smo228248v0.addTickables(smo228248v0ar)
fmtsmo22824856.joinVoices([smo228248v0]);
const fmtsmo22937056 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo229370v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229370v0ar = [];
const smo229352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo229352.setAttribute('id', 'smo229352');
smo229352.addModifier(new VF.Dot(), 0);
smo229370v0ar.push(smo229352);
const smo229353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo229353.setAttribute('id', 'smo229353');
smo229353.addModifier(new VF.Dot(), 0);
smo229370v0ar.push(smo229353);
smo229370v0.addTickables(smo229370v0ar)
fmtsmo22937056.joinVoices([smo229370v0]);
const fmtsmo23060656 = new VF.Formatter();
//
// voices and notes for stave 2 56
const smo230606v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230606v0ar = [];
const smo230586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230586.setAttribute('id', 'smo230586');
smo230606v0ar.push(smo230586);
const smo230587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230587.setAttribute('id', 'smo230587');
smo230606v0ar.push(smo230587);
const smo230588 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230588.setAttribute('id', 'smo230588');
smo230606v0ar.push(smo230588);
const smo230589 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230589.setAttribute('id', 'smo230589');
smo230606v0ar.push(smo230589);
smo230606v0.addTickables(smo230606v0ar)
fmtsmo23060656.joinVoices([smo230606v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22824856.format([smo228248v0,smo229370v0,smo230606v0], 125);
const stavesmo228248 = new VF.Stave(375, 909.0266026666668, 139);
stavesmo228248.setAttribute('id', 'stavesmo228248');
stavesmo228248.setBegBarType(VF.Barline.type.NONE);
stavesmo228248.setContext(context);
stavesmo228248.draw();
smo228248v0.draw(context, stavesmo228248);
const stavesmo229370 = new VF.Stave(375, 1030.0266026666668, 139);
stavesmo229370.setAttribute('id', 'stavesmo229370');
stavesmo229370.setBegBarType(VF.Barline.type.NONE);
stavesmo229370.setContext(context);
stavesmo229370.draw();
smo229370v0.draw(context, stavesmo229370);
const stavesmo230606 = new VF.Stave(375, 1106.0266026666668, 139);
stavesmo230606.setAttribute('id', 'stavesmo230606');
stavesmo230606.setBegBarType(VF.Barline.type.NONE);
stavesmo230606.setContext(context);
stavesmo230606.draw();
smo230606v0.draw(context, stavesmo230606);
const fmtsmo22826657 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo228266v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228266v0ar = [];
const smo228249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo228249.setAttribute('id', 'smo228249');
smo228249.addModifier(new VF.Dot(), 0);
const smo228250 = new VF.Annotation('-');
smo228250.setAttribute('id', 'smo228250');
smo228250.setFont('Merriweather', 12, 'normal');
smo228250.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228249.addModifier(smo228250);
smo228250.addClass('lyric lyric-0 lyric-hyphen');
smo228266v0ar.push(smo228249);
smo228266v0.addTickables(smo228266v0ar)
fmtsmo22826657.joinVoices([smo228266v0]);
const fmtsmo22938957 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo229389v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229389v0ar = [];
const smo229371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo229371.setAttribute('id', 'smo229371');
smo229371.addModifier(new VF.Dot(), 0);
smo229389v0ar.push(smo229371);
const smo229372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo229372.setAttribute('id', 'smo229372');
smo229389v0ar.push(smo229372);
const smo229373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo229373.setAttribute('id', 'smo229373');
smo229389v0ar.push(smo229373);
smo229389v0.addTickables(smo229389v0ar)
fmtsmo22938957.joinVoices([smo229389v0]);
const fmtsmo23062657 = new VF.Formatter();
//
// voices and notes for stave 2 57
const smo230626v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230626v0ar = [];
const smo230607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230607.setAttribute('id', 'smo230607');
smo230626v0ar.push(smo230607);
const smo230608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230608.setAttribute('id', 'smo230608');
smo230626v0ar.push(smo230608);
const smo230609 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230609.setAttribute('id', 'smo230609');
smo230626v0ar.push(smo230609);
const smo230610 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230610.setAttribute('id', 'smo230610');
smo230626v0ar.push(smo230610);
smo230626v0.addTickables(smo230626v0ar)
fmtsmo23062657.joinVoices([smo230626v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22826657.format([smo228266v0,smo229389v0,smo230626v0], 110);
const stavesmo228266 = new VF.Stave(514, 909.0266026666668, 124);
stavesmo228266.setAttribute('id', 'stavesmo228266');
stavesmo228266.setBegBarType(VF.Barline.type.NONE);
stavesmo228266.setContext(context);
stavesmo228266.draw();
smo228266v0.draw(context, stavesmo228266);
const stavesmo229389 = new VF.Stave(514, 1030.0266026666668, 124);
stavesmo229389.setAttribute('id', 'stavesmo229389');
stavesmo229389.setBegBarType(VF.Barline.type.NONE);
stavesmo229389.setContext(context);
stavesmo229389.draw();
smo229389v0.draw(context, stavesmo229389);
const stavesmo230626 = new VF.Stave(514, 1106.0266026666668, 124);
stavesmo230626.setAttribute('id', 'stavesmo230626');
stavesmo230626.setBegBarType(VF.Barline.type.NONE);
stavesmo230626.setContext(context);
stavesmo230626.draw();
smo230626v0.draw(context, stavesmo230626);
const fmtsmo22828458 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo228284v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228284v0ar = [];
const smo228267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo228267.setAttribute('id', 'smo228267');
smo228267.addModifier(new VF.Dot(), 0);
const smo228268 = new VF.Annotation('-');
smo228268.setAttribute('id', 'smo228268');
smo228268.setFont('Merriweather', 12, 'normal');
smo228268.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228267.addModifier(smo228268);
smo228268.addClass('lyric lyric-0 lyric-hyphen');
smo228284v0ar.push(smo228267);
smo228284v0.addTickables(smo228284v0ar)
fmtsmo22828458.joinVoices([smo228284v0]);
const fmtsmo22941058 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo229410v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229410v0ar = [];
const smo229390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo229390.setAttribute('id', 'smo229390');
smo229410v0ar.push(smo229390);
const smo229391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo229391.setAttribute('id', 'smo229391');
smo229410v0ar.push(smo229391);
const smo229392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo229392.setAttribute('id', 'smo229392');
smo229410v0ar.push(smo229392);
const smo229393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo229393.setAttribute('id', 'smo229393');
smo229410v0ar.push(smo229393);
const smo229394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229394.setAttribute('id', 'smo229394');
smo229410v0ar.push(smo229394);
smo229410v0.addTickables(smo229410v0ar)
fmtsmo22941058.joinVoices([smo229410v0]);
const fmtsmo23064758 = new VF.Formatter();
//
// voices and notes for stave 2 58
const smo230647v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230647v0ar = [];
const smo230627 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n","an/3/n"]}'))
smo230627.setAttribute('id', 'smo230627');
smo230647v0ar.push(smo230627);
const smo230628 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo230628.setAttribute('id', 'smo230628');
smo230647v0ar.push(smo230628);
const smo230629 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n","an/3/n"]}'))
smo230629.setAttribute('id', 'smo230629');
smo230647v0ar.push(smo230629);
const smo230630 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo230630.setAttribute('id', 'smo230630');
smo230647v0ar.push(smo230630);
const smo230631 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo230631.setAttribute('id', 'smo230631');
smo230647v0ar.push(smo230631);
smo230647v0.addTickables(smo230647v0ar)
fmtsmo23064758.joinVoices([smo230647v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo237083 = smo229390.getStemDirection();
smo229390.setStemDirection(dirsmo237083);
smo229391.setStemDirection(dirsmo237083);
smo229392.setStemDirection(dirsmo237083);
const smo237083 = new VF.Beam([smo229390,smo229391,smo229392]);
const dirsmo237086 = smo230627.getStemDirection();
smo230627.setStemDirection(dirsmo237086);
smo230628.setStemDirection(dirsmo237086);
smo230629.setStemDirection(dirsmo237086);
const smo237086 = new VF.Beam([smo230627,smo230628,smo230629]);
 
// formatting measures in staff group smo230697
fmtsmo22828458.format([smo228284v0,smo229410v0,smo230647v0], 140);
const stavesmo228284 = new VF.Stave(638, 909.0266026666668, 154);
stavesmo228284.setAttribute('id', 'stavesmo228284');
stavesmo228284.setBegBarType(VF.Barline.type.NONE);
stavesmo228284.setContext(context);
stavesmo228284.draw();
smo228284v0.draw(context, stavesmo228284);
const stavesmo229410 = new VF.Stave(638, 1030.0266026666668, 154);
stavesmo229410.setAttribute('id', 'stavesmo229410');
stavesmo229410.setBegBarType(VF.Barline.type.NONE);
stavesmo229410.setContext(context);
stavesmo229410.draw();
smo229410v0.draw(context, stavesmo229410);
smo237083.setContext(context);
smo237083.draw();
const stavesmo230647 = new VF.Stave(638, 1106.0266026666668, 154);
stavesmo230647.setAttribute('id', 'stavesmo230647');
stavesmo230647.setBegBarType(VF.Barline.type.NONE);
stavesmo230647.setContext(context);
stavesmo230647.draw();
smo230647v0.draw(context, stavesmo230647);
smo237086.setContext(context);
smo237086.draw();
const fmtsmo22830259 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo228302v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228302v0ar = [];
const smo228285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo228285.setAttribute('id', 'smo228285');
smo228285.addModifier(new VF.Dot(), 0);
const smo228286 = new VF.Annotation('-');
smo228286.setAttribute('id', 'smo228286');
smo228286.setFont('Merriweather', 12, 'normal');
smo228286.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228285.addModifier(smo228286);
smo228286.addClass('lyric lyric-0 lyric-hyphen');
smo228302v0ar.push(smo228285);
smo228302v0.addTickables(smo228302v0ar)
fmtsmo22830259.joinVoices([smo228302v0]);
const fmtsmo22942759 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo229427v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229427v0ar = [];
const smo229411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo229411.setAttribute('id', 'smo229411');
smo229411.addModifier(new VF.Dot(), 0);
smo229427v0ar.push(smo229411);
smo229427v0.addTickables(smo229427v0ar)
fmtsmo22942759.joinVoices([smo229427v0]);
const fmtsmo23066459 = new VF.Formatter();
//
// voices and notes for stave 2 59
const smo230664v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230664v0ar = [];
const smo230648 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n","gn/3/n","bn/3/n"]}'))
smo230648.setAttribute('id', 'smo230648');
smo230648.addModifier(new VF.Dot(), 0);
smo230648.addModifier(new VF.Dot(), 1);
smo230648.addModifier(new VF.Dot(), 2);
smo230664v0ar.push(smo230648);
smo230664v0.addTickables(smo230664v0ar)
fmtsmo23066459.joinVoices([smo230664v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22830259.format([smo228302v0,smo229427v0,smo230664v0], 28);
const stavesmo228302 = new VF.Stave(792, 909.0266026666668, 42);
stavesmo228302.setAttribute('id', 'stavesmo228302');
stavesmo228302.setBegBarType(VF.Barline.type.NONE);
stavesmo228302.setContext(context);
stavesmo228302.draw();
smo228302v0.draw(context, stavesmo228302);
const stavesmo229427 = new VF.Stave(792, 1030.0266026666668, 42);
stavesmo229427.setAttribute('id', 'stavesmo229427');
stavesmo229427.setBegBarType(VF.Barline.type.NONE);
stavesmo229427.setContext(context);
stavesmo229427.draw();
smo229427v0.draw(context, stavesmo229427);
const stavesmo230664 = new VF.Stave(792, 1106.0266026666668, 42);
stavesmo230664.setAttribute('id', 'stavesmo230664');
stavesmo230664.setBegBarType(VF.Barline.type.NONE);
stavesmo230664.setContext(context);
stavesmo230664.draw();
smo230664v0.draw(context, stavesmo230664);
const fmtsmo22831960 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo228319v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228319v0ar = [];
const smo228303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228303.setAttribute('id', 'smo228303');
smo228303.addModifier(new VF.Dot(), 0);
smo228319v0ar.push(smo228303);
smo228319v0.addTickables(smo228319v0ar)
fmtsmo22831960.joinVoices([smo228319v0]);
const fmtsmo22944660 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo229446v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229446v0ar = [];
const smo229428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo229428.setAttribute('id', 'smo229428');
smo229446v0ar.push(smo229428);
const smo229429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["gn/4/r"]}'))
smo229429.setAttribute('id', 'smo229429');
smo229446v0ar.push(smo229429);
const smo229430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["gn/4/r"]}'))
smo229430.setAttribute('id', 'smo229430');
smo229430.addModifier(new VF.Dot(), 0);
smo229446v0ar.push(smo229430);
smo229446v0.addTickables(smo229446v0ar)
fmtsmo22944660.joinVoices([smo229446v0]);
const fmtsmo23068360 = new VF.Formatter();
//
// voices and notes for stave 2 60
const smo230683v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230683v0ar = [];
const smo230665 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","bn/2/n","dn/3/n","gn/3/n"]}'))
smo230665.setAttribute('id', 'smo230665');
smo230683v0ar.push(smo230665);
const smo230666 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo230666.setAttribute('id', 'smo230666');
smo230683v0ar.push(smo230666);
const smo230667 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo230667.setAttribute('id', 'smo230667');
smo230667.addModifier(new VF.Dot(), 0);
smo230683v0ar.push(smo230667);
smo230683v0.addTickables(smo230683v0ar)
fmtsmo23068360.joinVoices([smo230683v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22831960.format([smo228319v0,smo229446v0,smo230683v0], 89);
const stavesmo228319 = new VF.Stave(834, 909.0266026666668, 111);
stavesmo228319.setAttribute('id', 'stavesmo228319');
stavesmo228319.setBegBarType(VF.Barline.type.NONE);
stavesmo228319.setEndBarType(3);
stavesmo228319.setContext(context);
stavesmo228319.draw();
smo228319v0.draw(context, stavesmo228319);
const stavesmo229446 = new VF.Stave(834, 1030.0266026666668, 111);
stavesmo229446.setAttribute('id', 'stavesmo229446');
stavesmo229446.setBegBarType(VF.Barline.type.NONE);
stavesmo229446.setEndBarType(3);
stavesmo229446.setContext(context);
stavesmo229446.draw();
smo229446v0.draw(context, stavesmo229446);
const stavesmo230683 = new VF.Stave(834, 1106.0266026666668, 111);
stavesmo230683.setAttribute('id', 'stavesmo230683');
stavesmo230683.setBegBarType(VF.Barline.type.NONE);
stavesmo230683.setEndBarType(3);
stavesmo230683.setContext(context);
stavesmo230683.draw();
smo230683v0.draw(context, stavesmo230683);
// modifier from 0-54-0-0 to 0-55-0-0
const smo237866 = new VF.StaveTie({ first_note: smo228194, last_note: smo228213, 
          firstNote: smo228194, lastNote: smo228213, first_indices: [0], last_indices: [0]});
smo237866.setContext(context).draw();
// modifier from 0-52-0-3 to 0-53-0-0
const smo237867 = new VF.StaveTie({ first_note: smo228157, last_note: smo228176, 
          firstNote: smo228157, lastNote: smo228176, first_indices: [0], last_indices: [0]});
smo237867.setContext(context).draw();
// modifier from 0-56-0-0 to 0-57-0-0
const smo237868 = new VF.StaveTie({ first_note: smo228230, last_note: smo228249, 
          firstNote: smo228230, lastNote: smo228249, first_indices: [0], last_indices: [0]});
smo237868.setContext(context).draw();
// modifier from 0-58-0-0 to 0-59-0-0
const smo237869 = new VF.StaveTie({ first_note: smo228267, last_note: smo228285, 
          firstNote: smo228267, lastNote: smo228285, first_indices: [0], last_indices: [0]});
smo237869.setContext(context).draw();
// modifier from 0-48-0-0 to 0-49-0-0
const smo237870 = new VF.StaveTie({ first_note: smo228055, last_note: smo228074, 
          firstNote: smo228055, lastNote: smo228074, first_indices: [0], last_indices: [0]});
smo237870.setContext(context).draw();
// modifier from 0-50-0-1 to 0-51-0-0
const smo237871 = new VF.StaveTie({ first_note: smo228107, last_note: smo228126, 
          firstNote: smo228107, lastNote: smo228126, first_indices: [0], last_indices: [0]});
smo237871.setContext(context).draw();
// modifier from 0-46-0-0 to 0-47-0-0
const smo237872 = new VF.StaveTie({ first_note: smo228006, last_note: smo228025, 
          firstNote: smo228006, lastNote: smo228025, first_indices: [0], last_indices: [0]});
smo237872.setContext(context).draw();
// modifier from 1-44-0-0 to 1-45-0-0
const smo237873 = new VF.StaveTie({ first_note: smo229129, last_note: smo229146, 
          firstNote: smo229129, lastNote: smo229146, first_indices: [0,1], last_indices: [0,1]});
smo237873.setContext(context).draw();
// modifier from 1-52-0-0 to 1-53-0-0
const smo237874 = new VF.StaveTie({ first_note: smo229277, last_note: smo229294, 
          firstNote: smo229277, lastNote: smo229294, first_indices: [0,1], last_indices: [0,1]});
smo237874.setContext(context).draw();
// modifier from 2-52-0-0 to 2-53-0-0
const smo237875 = new VF.StaveTie({ first_note: smo230511, last_note: smo230528, 
          firstNote: smo230511, lastNote: smo230528, first_indices: [0], last_indices: [0]});
smo237875.setContext(context).draw();
const smo228196smo228212 = new VF.Volta(2, '1', 66, 20);
smo228196smo228212.setContext(context).draw(stavesmo228212, -1 * 0);
const smo228196smo228229 = new VF.Volta(4, '1', 251, 20);
smo228196smo228229.setContext(context).draw(stavesmo228229, -1 * 0);
const smo228232smo228248 = new VF.Volta(2, '2', 375, 20);
smo228232smo228248.setContext(context).draw(stavesmo228248, -1 * 0);
const smo228232smo228266 = new VF.Volta(4, '2', 514, 20);
smo228232smo228266.setContext(context).draw(stavesmo228266, -1 * 0);
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo227937').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227938').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo227941').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo227959').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo227960').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo227962').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227963').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo227965').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227966').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo227968').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo227969').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo227988').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo227989').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228007').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228008').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo228028').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo228029').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo228031').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228032').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo228034').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228035').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo228037').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228038').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo228056').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228057').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo228075').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo228078').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo228080').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228081').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo228083').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228084').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo228086').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo228087').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo228105').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228106').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo228108').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228109').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo228127').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo228130').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228131').setAttributeNS('', 'transform', 'translate(0 31)');
context.svg.getElementById('vf-smo228149').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228150').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo228152').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo228153').setAttributeNS('', 'transform', 'translate(0 31)');
context.svg.getElementById('vf-smo228155').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228156').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo228158').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo228159').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo228177').setAttributeNS('', 'transform', 'translate(0 16)');
}
// @@ Solovey p 2/2 ((Op. 1)) by Folks
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = VexFlow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1483.6363636363635');
svg.setAttributeNS('', 'height', '1920');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
//
// create the musical objects
VF.setFonts("Bravura","Academico");
const fmtsmo24000426 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo240004v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240004v0ar = [];
const smo239976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239976.setAttribute('id', 'smo239976');
const smo239977 = new VF.Annotation('Со');
smo239977.setAttribute('id', 'smo239977');
smo239977.setFont('Merriweather', 12.1, 'normal');
smo239977.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239976.addModifier(smo239977);
smo239977.addClass('lyric lyric-0');
smo240004v0ar.push(smo239976);
const smo239978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo239978.setAttribute('id', 'smo239978');
const smo239979 = new VF.Annotation('-');
smo239979.setAttribute('id', 'smo239979');
smo239979.setFont('Merriweather', 12.1, 'normal');
smo239979.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239978.addModifier(smo239979);
smo239979.addClass('lyric lyric-0 lyric-hyphen');
smo240004v0ar.push(smo239978);
const smo239980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239980.setAttribute('id', 'smo239980');
const smo239981 = new VF.Annotation('-');
smo239981.setAttribute('id', 'smo239981');
smo239981.setFont('Merriweather', 12.1, 'normal');
smo239981.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239980.addModifier(smo239981);
smo239981.addClass('lyric lyric-0 lyric-hyphen');
smo240004v0ar.push(smo239980);
const smo239982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["d#/5/n"]}'))
smo239982.setAttribute('id', 'smo239982');
const smo2399820acc = new VF.Accidental('#');
smo239982.addModifier(smo2399820acc, 0);
const smo239983 = new VF.Annotation('-');
smo239983.setAttribute('id', 'smo239983');
smo239983.setFont('Merriweather', 12.1, 'normal');
smo239983.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239982.addModifier(smo239983);
smo239983.addClass('lyric lyric-0 lyric-hyphen');
smo240004v0ar.push(smo239982);
const smo239984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239984.setAttribute('id', 'smo239984');
smo240004v0ar.push(smo239984);
const smo239985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo239985.setAttribute('id', 'smo239985');
const smo239986 = new VF.Annotation('ло');
smo239986.setAttribute('id', 'smo239986');
smo239986.setFont('Merriweather', 12.1, 'normal');
smo239986.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239985.addModifier(smo239986);
smo239986.addClass('lyric lyric-0');
smo240004v0ar.push(smo239985);
const smo239987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239987.setAttribute('id', 'smo239987');
const smo239988 = new VF.Annotation('-');
smo239988.setAttribute('id', 'smo239988');
smo239988.setFont('Merriweather', 12.1, 'normal');
smo239988.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239987.addModifier(smo239988);
smo239988.addClass('lyric lyric-0 lyric-hyphen');
smo240004v0ar.push(smo239987);
smo240004v0.addTickables(smo240004v0ar)
fmtsmo24000426.joinVoices([smo240004v0]);
const fmtsmo24098926 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo240989v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240989v0ar = [];
const smo240970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240970.setAttribute('id', 'smo240970');
smo240989v0ar.push(smo240970);
const smo240971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240971.setAttribute('id', 'smo240971');
smo240989v0ar.push(smo240971);
const smo240972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo240972.setAttribute('id', 'smo240972');
const smo2409720acc = new VF.Accidental('#');
smo240972.addModifier(smo2409720acc, 0);
smo240989v0ar.push(smo240972);
const smo240973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240973.setAttribute('id', 'smo240973');
smo240989v0ar.push(smo240973);
smo240989v0.addTickables(smo240989v0ar)
fmtsmo24098926.joinVoices([smo240989v0]);
const fmtsmo24196826 = new VF.Formatter();
//
// voices and notes for stave 2 26
const smo241968v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241968v0ar = [];
const smo241952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241952.setAttribute('id', 'smo241952');
smo241968v0ar.push(smo241952);
smo241968v0.addTickables(smo241968v0ar)
fmtsmo24196826.joinVoices([smo241968v0]);
const fmtsmo24292226 = new VF.Formatter();
//
// voices and notes for stave 3 26
const smo242922v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242922v0ar = [];
const smo242905 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242905.setAttribute('id', 'smo242905');
smo242922v0ar.push(smo242905);
const smo242906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242906.setAttribute('id', 'smo242906');
smo242922v0ar.push(smo242906);
smo242922v0.addTickables(smo242922v0ar)
fmtsmo24292226.joinVoices([smo242922v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
const dirsmo249885 = smo239978.getStemDirection();
smo239978.setStemDirection(dirsmo249885);
smo239980.setStemDirection(dirsmo249885);
smo239982.setStemDirection(dirsmo249885);
smo239984.setStemDirection(dirsmo249885);
const smo249885 = new VF.Beam([smo239978,smo239980,smo239982,smo239984]);
 
// formatting measures in staff group smo243368
fmtsmo24000426.format([smo240004v0,smo240989v0,smo241968v0,smo242922v0], 249);
const stavesmo240004 = new VF.Stave(55, 219, 313);
stavesmo240004.setAttribute('id', 'stavesmo240004');
stavesmo240004.setBegBarType(1);
stavesmo240004.addClef('treble');
const keysmo240004 = new VF.KeySignature('F');
keysmo240004.addToStave(stavesmo240004);
stavesmo240004.setContext(context);
stavesmo240004.draw();
smo240004v0.draw(context, stavesmo240004);
smo249885.setContext(context);
smo249885.draw();
const stavesmo240989 = new VF.Stave(55, 348, 313);
stavesmo240989.setAttribute('id', 'stavesmo240989');
stavesmo240989.setBegBarType(1);
stavesmo240989.addClef('treble');
const keysmo240989 = new VF.KeySignature('F');
keysmo240989.addToStave(stavesmo240989);
stavesmo240989.setContext(context);
stavesmo240989.draw();
smo240989v0.draw(context, stavesmo240989);
const stavesmo241968 = new VF.Stave(55, 463, 313);
stavesmo241968.setAttribute('id', 'stavesmo241968');
stavesmo241968.setBegBarType(1);
stavesmo241968.addClef('treble');
const keysmo241968 = new VF.KeySignature('F');
keysmo241968.addToStave(stavesmo241968);
stavesmo241968.setContext(context);
stavesmo241968.draw();
smo241968v0.draw(context, stavesmo241968);
const stavesmo242922 = new VF.Stave(55, 569, 313);
stavesmo242922.setAttribute('id', 'stavesmo242922');
stavesmo242922.setBegBarType(1);
stavesmo242922.addClef('bass');
const keysmo242922 = new VF.KeySignature('F');
keysmo242922.addToStave(stavesmo242922);
stavesmo242922.setContext(context);
stavesmo242922.draw();
smo242922v0.draw(context, stavesmo242922);
const leftsmo243368stavesmo2400043 = new VF.StaveConnector(stavesmo240004, stavesmo242922).setType(1);
leftsmo243368stavesmo2400043.setContext(context).draw();
const fmtsmo24002327 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo240023v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240023v0ar = [];
const smo240005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240005.setAttribute('id', 'smo240005');
const smo240006 = new VF.Annotation('вей');
smo240006.setAttribute('id', 'smo240006');
smo240006.setFont('Merriweather', 12.1, 'normal');
smo240006.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240005.addModifier(smo240006);
smo240006.addClass('lyric lyric-0');
smo240023v0ar.push(smo240005);
const smo240007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240007.setAttribute('id', 'smo240007');
smo240023v0ar.push(smo240007);
smo240023v0.addTickables(smo240023v0ar)
fmtsmo24002327.joinVoices([smo240023v0]);
const fmtsmo24100927 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo241009v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241009v0ar = [];
const smo240990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240990.setAttribute('id', 'smo240990');
smo241009v0ar.push(smo240990);
const smo240991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240991.setAttribute('id', 'smo240991');
smo241009v0ar.push(smo240991);
const smo240992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240992.setAttribute('id', 'smo240992');
smo241009v0ar.push(smo240992);
const smo240993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240993.setAttribute('id', 'smo240993');
smo241009v0ar.push(smo240993);
smo241009v0.addTickables(smo241009v0ar)
fmtsmo24100927.joinVoices([smo241009v0]);
const fmtsmo24198527 = new VF.Formatter();
//
// voices and notes for stave 2 27
const smo241985v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241985v0ar = [];
const smo241969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241969.setAttribute('id', 'smo241969');
smo241985v0ar.push(smo241969);
smo241985v0.addTickables(smo241985v0ar)
fmtsmo24198527.joinVoices([smo241985v0]);
const fmtsmo24294027 = new VF.Formatter();
//
// voices and notes for stave 3 27
const smo242940v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242940v0ar = [];
const smo242923 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242923.setAttribute('id', 'smo242923');
smo242940v0ar.push(smo242923);
const smo242924 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242924.setAttribute('id', 'smo242924');
smo242940v0ar.push(smo242924);
smo242940v0.addTickables(smo242940v0ar)
fmtsmo24294027.joinVoices([smo242940v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo24002327.format([smo240023v0,smo241009v0,smo241985v0,smo242940v0], 147);
const stavesmo240023 = new VF.Stave(368, 219, 161);
stavesmo240023.setAttribute('id', 'stavesmo240023');
stavesmo240023.setBegBarType(VF.Barline.type.NONE);
stavesmo240023.setContext(context);
stavesmo240023.draw();
smo240023v0.draw(context, stavesmo240023);
const stavesmo241009 = new VF.Stave(368, 348, 161);
stavesmo241009.setAttribute('id', 'stavesmo241009');
stavesmo241009.setBegBarType(VF.Barline.type.NONE);
stavesmo241009.setContext(context);
stavesmo241009.draw();
smo241009v0.draw(context, stavesmo241009);
const stavesmo241985 = new VF.Stave(368, 463, 161);
stavesmo241985.setAttribute('id', 'stavesmo241985');
stavesmo241985.setBegBarType(VF.Barline.type.NONE);
stavesmo241985.setContext(context);
stavesmo241985.draw();
smo241985v0.draw(context, stavesmo241985);
const stavesmo242940 = new VF.Stave(368, 569, 161);
stavesmo242940.setAttribute('id', 'stavesmo242940');
stavesmo242940.setBegBarType(VF.Barline.type.NONE);
stavesmo242940.setContext(context);
stavesmo242940.draw();
smo242940v0.draw(context, stavesmo242940);
const fmtsmo24004528 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo240045v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240045v0ar = [];
const smo240024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240024.setAttribute('id', 'smo240024');
const smo240025 = new VF.Annotation('цо');
smo240025.setAttribute('id', 'smo240025');
smo240025.setFont('Merriweather', 12.1, 'normal');
smo240025.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240024.addModifier(smo240025);
smo240025.addClass('lyric lyric-0 lyric-hyphen');
smo240045v0ar.push(smo240024);
const smo240026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo240026.setAttribute('id', 'smo240026');
const smo240027 = new VF.Annotation('ло');
smo240027.setAttribute('id', 'smo240027');
smo240027.setFont('Merriweather', 12.1, 'normal');
smo240027.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240026.addModifier(smo240027);
smo240027.addClass('lyric lyric-0');
smo240045v0ar.push(smo240026);
const smo240028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo240028.setAttribute('id', 'smo240028');
const smo240029 = new VF.Annotation('-');
smo240029.setAttribute('id', 'smo240029');
smo240029.setFont('Merriweather', 12.1, 'normal');
smo240029.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240028.addModifier(smo240029);
smo240029.addClass('lyric lyric-0 lyric-hyphen');
smo240045v0ar.push(smo240028);
smo240045v0.addTickables(smo240045v0ar)
fmtsmo24004528.joinVoices([smo240045v0]);
const fmtsmo24102928 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo241029v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241029v0ar = [];
const smo241010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241010.setAttribute('id', 'smo241010');
smo241029v0ar.push(smo241010);
const smo241011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241011.setAttribute('id', 'smo241011');
smo241029v0ar.push(smo241011);
const smo241012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241012.setAttribute('id', 'smo241012');
smo241029v0ar.push(smo241012);
const smo241013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241013.setAttribute('id', 'smo241013');
smo241029v0ar.push(smo241013);
smo241029v0.addTickables(smo241029v0ar)
fmtsmo24102928.joinVoices([smo241029v0]);
const fmtsmo24200328 = new VF.Formatter();
//
// voices and notes for stave 2 28
const smo242003v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242003v0ar = [];
const smo241986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo241986.setAttribute('id', 'smo241986');
smo242003v0ar.push(smo241986);
const smo241987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo241987.setAttribute('id', 'smo241987');
smo242003v0ar.push(smo241987);
smo242003v0.addTickables(smo242003v0ar)
fmtsmo24200328.joinVoices([smo242003v0]);
const fmtsmo24295828 = new VF.Formatter();
//
// voices and notes for stave 3 28
const smo242958v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242958v0ar = [];
const smo242941 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242941.setAttribute('id', 'smo242941');
smo242958v0ar.push(smo242941);
const smo242942 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo242942.setAttribute('id', 'smo242942');
smo242958v0ar.push(smo242942);
smo242958v0.addTickables(smo242958v0ar)
fmtsmo24295828.joinVoices([smo242958v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo24004528.format([smo240045v0,smo241029v0,smo242003v0,smo242958v0], 153);
const stavesmo240045 = new VF.Stave(529, 219, 167);
stavesmo240045.setAttribute('id', 'stavesmo240045');
stavesmo240045.setBegBarType(VF.Barline.type.NONE);
stavesmo240045.setContext(context);
stavesmo240045.draw();
smo240045v0.draw(context, stavesmo240045);
const stavesmo241029 = new VF.Stave(529, 348, 167);
stavesmo241029.setAttribute('id', 'stavesmo241029');
stavesmo241029.setBegBarType(VF.Barline.type.NONE);
stavesmo241029.setContext(context);
stavesmo241029.draw();
smo241029v0.draw(context, stavesmo241029);
const stavesmo242003 = new VF.Stave(529, 463, 167);
stavesmo242003.setAttribute('id', 'stavesmo242003');
stavesmo242003.setBegBarType(VF.Barline.type.NONE);
stavesmo242003.setContext(context);
stavesmo242003.draw();
smo242003v0.draw(context, stavesmo242003);
const stavesmo242958 = new VF.Stave(529, 569, 167);
stavesmo242958.setAttribute('id', 'stavesmo242958');
stavesmo242958.setBegBarType(VF.Barline.type.NONE);
stavesmo242958.setContext(context);
stavesmo242958.draw();
smo242958v0.draw(context, stavesmo242958);
const fmtsmo24006729 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo240067v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240067v0ar = [];
const smo240046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240046.setAttribute('id', 'smo240046');
const smo240047 = new VF.Annotation('си');
smo240047.setAttribute('id', 'smo240047');
smo240047.setFont('Merriweather', 12.1, 'normal');
smo240047.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240046.addModifier(smo240047);
smo240047.addClass('lyric lyric-0 lyric-hyphen');
smo240067v0ar.push(smo240046);
const smo240048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo240048.setAttribute('id', 'smo240048');
const smo240049 = new VF.Annotation('стый');
smo240049.setAttribute('id', 'smo240049');
smo240049.setFont('Merriweather', 12.1, 'normal');
smo240049.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240048.addModifier(smo240049);
smo240049.addClass('lyric lyric-0');
smo240067v0ar.push(smo240048);
const smo240050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo240050.setAttribute('id', 'smo240050');
const smo240051 = new VF.Annotation('-');
smo240051.setAttribute('id', 'smo240051');
smo240051.setFont('Merriweather', 12.1, 'normal');
smo240051.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240050.addModifier(smo240051);
smo240051.addClass('lyric lyric-0 lyric-hyphen');
smo240067v0ar.push(smo240050);
smo240067v0.addTickables(smo240067v0ar)
fmtsmo24006729.joinVoices([smo240067v0]);
const fmtsmo24104929 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo241049v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241049v0ar = [];
const smo241030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241030.setAttribute('id', 'smo241030');
smo241049v0ar.push(smo241030);
const smo241031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241031.setAttribute('id', 'smo241031');
smo241049v0ar.push(smo241031);
const smo241032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241032.setAttribute('id', 'smo241032');
smo241049v0ar.push(smo241032);
const smo241033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo241033.setAttribute('id', 'smo241033');
smo241049v0ar.push(smo241033);
smo241049v0.addTickables(smo241049v0ar)
fmtsmo24104929.joinVoices([smo241049v0]);
const fmtsmo24202129 = new VF.Formatter();
//
// voices and notes for stave 2 29
const smo242021v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242021v0ar = [];
const smo242004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo242004.setAttribute('id', 'smo242004');
smo242021v0ar.push(smo242004);
const smo242005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo242005.setAttribute('id', 'smo242005');
smo242021v0ar.push(smo242005);
smo242021v0.addTickables(smo242021v0ar)
fmtsmo24202129.joinVoices([smo242021v0]);
const fmtsmo24297629 = new VF.Formatter();
//
// voices and notes for stave 3 29
const smo242976v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242976v0ar = [];
const smo242959 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo242959.setAttribute('id', 'smo242959');
smo242976v0ar.push(smo242959);
const smo242960 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo242960.setAttribute('id', 'smo242960');
smo242976v0ar.push(smo242960);
smo242976v0.addTickables(smo242976v0ar)
fmtsmo24297629.joinVoices([smo242976v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo24006729.format([smo240067v0,smo241049v0,smo242021v0,smo242976v0], 184);
const stavesmo240067 = new VF.Stave(696, 219, 198);
stavesmo240067.setAttribute('id', 'stavesmo240067');
stavesmo240067.setBegBarType(VF.Barline.type.NONE);
stavesmo240067.setContext(context);
stavesmo240067.draw();
smo240067v0.draw(context, stavesmo240067);
const stavesmo241049 = new VF.Stave(696, 348, 198);
stavesmo241049.setAttribute('id', 'stavesmo241049');
stavesmo241049.setBegBarType(VF.Barline.type.NONE);
stavesmo241049.setContext(context);
stavesmo241049.draw();
smo241049v0.draw(context, stavesmo241049);
const stavesmo242021 = new VF.Stave(696, 463, 198);
stavesmo242021.setAttribute('id', 'stavesmo242021');
stavesmo242021.setBegBarType(VF.Barline.type.NONE);
stavesmo242021.setContext(context);
stavesmo242021.draw();
smo242021v0.draw(context, stavesmo242021);
const stavesmo242976 = new VF.Stave(696, 569, 198);
stavesmo242976.setAttribute('id', 'stavesmo242976');
stavesmo242976.setBegBarType(VF.Barline.type.NONE);
stavesmo242976.setContext(context);
stavesmo242976.draw();
smo242976v0.draw(context, stavesmo242976);
const fmtsmo24009630 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo240096v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240096v0ar = [];
const smo240068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240068.setAttribute('id', 'smo240068');
const smo240069 = new VF.Annotation('со');
smo240069.setAttribute('id', 'smo240069');
smo240069.setFont('Merriweather', 12.1, 'normal');
smo240069.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240068.addModifier(smo240069);
smo240069.addClass('lyric lyric-0');
smo240096v0ar.push(smo240068);
const smo240070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/4/n"]}'))
smo240070.setAttribute('id', 'smo240070');
const smo240071 = new VF.Annotation('-');
smo240071.setAttribute('id', 'smo240071');
smo240071.setFont('Merriweather', 12.1, 'normal');
smo240071.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240070.addModifier(smo240071);
smo240071.addClass('lyric lyric-0 lyric-hyphen');
smo240096v0ar.push(smo240070);
const smo240072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo240072.setAttribute('id', 'smo240072');
const smo240073 = new VF.Annotation('-');
smo240073.setAttribute('id', 'smo240073');
smo240073.setFont('Merriweather', 12.1, 'normal');
smo240073.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240072.addModifier(smo240073);
smo240073.addClass('lyric lyric-0 lyric-hyphen');
smo240096v0ar.push(smo240072);
const smo240074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/4/n"]}'))
smo240074.setAttribute('id', 'smo240074');
const smo2400740acc = new VF.Accidental('#');
smo240074.addModifier(smo2400740acc, 0);
const smo240075 = new VF.Annotation('-');
smo240075.setAttribute('id', 'smo240075');
smo240075.setFont('Merriweather', 12.1, 'normal');
smo240075.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240074.addModifier(smo240075);
smo240075.addClass('lyric lyric-0 lyric-hyphen');
smo240096v0ar.push(smo240074);
const smo240076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo240076.setAttribute('id', 'smo240076');
const smo240077 = new VF.Annotation('ло');
smo240077.setAttribute('id', 'smo240077');
smo240077.setFont('Merriweather', 12.1, 'normal');
smo240077.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240076.addModifier(smo240077);
smo240077.addClass('lyric lyric-0');
smo240096v0ar.push(smo240076);
const smo240078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240078.setAttribute('id', 'smo240078');
const smo240079 = new VF.Annotation('-');
smo240079.setAttribute('id', 'smo240079');
smo240079.setFont('Merriweather', 12.1, 'normal');
smo240079.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240078.addModifier(smo240079);
smo240079.addClass('lyric lyric-0 lyric-hyphen');
smo240096v0ar.push(smo240078);
smo240096v0.addTickables(smo240096v0ar)
fmtsmo24009630.joinVoices([smo240096v0]);
const fmtsmo24106930 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo241069v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241069v0ar = [];
const smo241050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241050.setAttribute('id', 'smo241050');
smo241069v0ar.push(smo241050);
const smo241051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo241051.setAttribute('id', 'smo241051');
smo241069v0ar.push(smo241051);
const smo241052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241052.setAttribute('id', 'smo241052');
smo241069v0ar.push(smo241052);
const smo241053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo241053.setAttribute('id', 'smo241053');
smo241069v0ar.push(smo241053);
smo241069v0.addTickables(smo241069v0ar)
fmtsmo24106930.joinVoices([smo241069v0]);
const fmtsmo24203930 = new VF.Formatter();
//
// voices and notes for stave 2 30
const smo242039v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242039v0ar = [];
const smo242022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo242022.setAttribute('id', 'smo242022');
smo242039v0ar.push(smo242022);
const smo242023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo242023.setAttribute('id', 'smo242023');
smo242039v0ar.push(smo242023);
smo242039v0.addTickables(smo242039v0ar)
fmtsmo24203930.joinVoices([smo242039v0]);
const fmtsmo24299430 = new VF.Formatter();
//
// voices and notes for stave 3 30
const smo242994v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242994v0ar = [];
const smo242977 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242977.setAttribute('id', 'smo242977');
smo242994v0ar.push(smo242977);
const smo242978 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242978.setAttribute('id', 'smo242978');
smo242994v0ar.push(smo242978);
smo242994v0.addTickables(smo242994v0ar)
fmtsmo24299430.joinVoices([smo242994v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
const dirsmo249918 = smo240070.getStemDirection();
smo240070.setStemDirection(dirsmo249918);
smo240072.setStemDirection(dirsmo249918);
smo240074.setStemDirection(dirsmo249918);
const smo249918 = new VF.Beam([smo240070,smo240072,smo240074]);
const smo240080 = new VF.Tuplet([smo240070,smo240072,smo240074], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo243368
fmtsmo24009630.format([smo240096v0,smo241069v0,smo242039v0,smo242994v0], 220);
const stavesmo240096 = new VF.Stave(894, 219, 234);
stavesmo240096.setAttribute('id', 'stavesmo240096');
stavesmo240096.setBegBarType(VF.Barline.type.NONE);
stavesmo240096.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":96}'), -1 * 0);
stavesmo240096.setContext(context);
stavesmo240096.draw();
smo240096v0.draw(context, stavesmo240096);
smo249918.setContext(context);
smo249918.draw();
smo240080.setContext(context).draw();
const stavesmo241069 = new VF.Stave(894, 348, 234);
stavesmo241069.setAttribute('id', 'stavesmo241069');
stavesmo241069.setBegBarType(VF.Barline.type.NONE);
stavesmo241069.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":96}'), -1 * 0);
stavesmo241069.setContext(context);
stavesmo241069.draw();
smo241069v0.draw(context, stavesmo241069);
const stavesmo242039 = new VF.Stave(894, 463, 234);
stavesmo242039.setAttribute('id', 'stavesmo242039');
stavesmo242039.setBegBarType(VF.Barline.type.NONE);
stavesmo242039.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":96}'), -1 * 0);
stavesmo242039.setContext(context);
stavesmo242039.draw();
smo242039v0.draw(context, stavesmo242039);
const stavesmo242994 = new VF.Stave(894, 569, 234);
stavesmo242994.setAttribute('id', 'stavesmo242994');
stavesmo242994.setBegBarType(VF.Barline.type.NONE);
stavesmo242994.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":96}'), -1 * 0);
stavesmo242994.setContext(context);
stavesmo242994.draw();
smo242994v0.draw(context, stavesmo242994);
const fmtsmo24011531 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo240115v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240115v0ar = [];
const smo240097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240097.setAttribute('id', 'smo240097');
const smo240098 = new VF.Annotation('вей');
smo240098.setAttribute('id', 'smo240098');
smo240098.setFont('Merriweather', 12.1, 'normal');
smo240098.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240097.addModifier(smo240098);
smo240098.addClass('lyric lyric-0');
smo240115v0ar.push(smo240097);
const smo240099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240099.setAttribute('id', 'smo240099');
smo240115v0ar.push(smo240099);
smo240115v0.addTickables(smo240115v0ar)
fmtsmo24011531.joinVoices([smo240115v0]);
const fmtsmo24109031 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo241090v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241090v0ar = [];
const smo241070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo241070.setAttribute('id', 'smo241070');
smo241090v0ar.push(smo241070);
const smo241071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo241071.setAttribute('id', 'smo241071');
smo241090v0ar.push(smo241071);
const smo241072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo241072.setAttribute('id', 'smo241072');
smo241090v0ar.push(smo241072);
const smo241073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo241073.setAttribute('id', 'smo241073');
smo241090v0ar.push(smo241073);
const smo241074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo241074.setAttribute('id', 'smo241074');
smo241090v0ar.push(smo241074);
smo241090v0.addTickables(smo241090v0ar)
fmtsmo24109031.joinVoices([smo241090v0]);
const fmtsmo24205731 = new VF.Formatter();
//
// voices and notes for stave 2 31
const smo242057v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242057v0ar = [];
const smo242040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo242040.setAttribute('id', 'smo242040');
smo242057v0ar.push(smo242040);
const smo242041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo242041.setAttribute('id', 'smo242041');
smo242057v0ar.push(smo242041);
smo242057v0.addTickables(smo242057v0ar)
fmtsmo24205731.joinVoices([smo242057v0]);
const fmtsmo24301631 = new VF.Formatter();
//
// voices and notes for stave 3 31
const smo243016v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243016v0ar = [];
const smo242995 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242995.setAttribute('id', 'smo242995');
smo243016v0ar.push(smo242995);
const smo242996 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo242996.setAttribute('id', 'smo242996');
smo243016v0ar.push(smo242996);
const smo242997 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo242997.setAttribute('id', 'smo242997');
smo243016v0ar.push(smo242997);
const smo242998 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242998.setAttribute('id', 'smo242998');
smo243016v0ar.push(smo242998);
const smo242999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242999.setAttribute('id', 'smo242999');
smo243016v0ar.push(smo242999);
const smo243000 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo243000.setAttribute('id', 'smo243000');
smo243016v0ar.push(smo243000);
smo243016v0.addTickables(smo243016v0ar)
fmtsmo24301631.joinVoices([smo243016v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
const dirsmo249928 = smo241071.getStemDirection();
smo241071.setStemDirection(dirsmo249928);
smo241072.setStemDirection(dirsmo249928);
const smo249928 = new VF.Beam([smo241071,smo241072]);
const dirsmo249929 = smo241073.getStemDirection();
smo241073.setStemDirection(dirsmo249929);
smo241074.setStemDirection(dirsmo249929);
const smo249929 = new VF.Beam([smo241073,smo241074]);
const dirsmo249932 = smo242995.getStemDirection();
smo242995.setStemDirection(dirsmo249932);
smo242996.setStemDirection(dirsmo249932);
const smo249932 = new VF.Beam([smo242995,smo242996]);
const dirsmo249933 = smo242997.getStemDirection();
smo242997.setStemDirection(dirsmo249933);
smo242998.setStemDirection(dirsmo249933);
const smo249933 = new VF.Beam([smo242997,smo242998]);
 
// formatting measures in staff group smo243368
fmtsmo24011531.format([smo240115v0,smo241090v0,smo242057v0,smo243016v0], 232);
const stavesmo240115 = new VF.Stave(1128, 219, 246);
stavesmo240115.setAttribute('id', 'stavesmo240115');
stavesmo240115.setBegBarType(VF.Barline.type.NONE);
stavesmo240115.setContext(context);
stavesmo240115.draw();
smo240115v0.draw(context, stavesmo240115);
const stavesmo241090 = new VF.Stave(1128, 348, 246);
stavesmo241090.setAttribute('id', 'stavesmo241090');
stavesmo241090.setBegBarType(VF.Barline.type.NONE);
stavesmo241090.setContext(context);
stavesmo241090.draw();
smo241090v0.draw(context, stavesmo241090);
smo249928.setContext(context);
smo249928.draw();
smo249929.setContext(context);
smo249929.draw();
const stavesmo242057 = new VF.Stave(1128, 463, 246);
stavesmo242057.setAttribute('id', 'stavesmo242057');
stavesmo242057.setBegBarType(VF.Barline.type.NONE);
stavesmo242057.setContext(context);
stavesmo242057.draw();
smo242057v0.draw(context, stavesmo242057);
const stavesmo243016 = new VF.Stave(1128, 569, 246);
stavesmo243016.setAttribute('id', 'stavesmo243016');
stavesmo243016.setBegBarType(VF.Barline.type.NONE);
stavesmo243016.setContext(context);
stavesmo243016.draw();
smo243016v0.draw(context, stavesmo243016);
smo249932.setContext(context);
smo249932.draw();
smo249933.setContext(context);
smo249933.draw();
const rightsmo243368stavesmo2401153 = new VF.StaveConnector(stavesmo240115, stavesmo243016).setType(0);
rightsmo243368stavesmo2401153.setContext(context).draw();
const fmtsmo24014232 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo240142v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240142v0ar = [];
const smo240116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240116.setAttribute('id', 'smo240116');
const smo240118 = new VF.Ornament('');
smo240116.addModifier(smo240118, 0);
const smo240117 = new VF.Annotation('Со');
smo240117.setAttribute('id', 'smo240117');
smo240117.setFont('Merriweather', 12.1, 'normal');
smo240117.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240116.addModifier(smo240117);
smo240117.addClass('lyric lyric-0');
smo240142v0ar.push(smo240116);
const smo240119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240119.setAttribute('id', 'smo240119');
const smo240120 = new VF.Annotation('-');
smo240120.setAttribute('id', 'smo240120');
smo240120.setFont('Merriweather', 12.1, 'normal');
smo240120.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240119.addModifier(smo240120);
smo240120.addClass('lyric lyric-0 lyric-hyphen');
smo240142v0ar.push(smo240119);
const smo240121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240121.setAttribute('id', 'smo240121');
const smo240122 = new VF.Annotation('-');
smo240122.setAttribute('id', 'smo240122');
smo240122.setFont('Merriweather', 12.1, 'normal');
smo240122.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240121.addModifier(smo240122);
smo240122.addClass('lyric lyric-0 lyric-hyphen');
smo240142v0ar.push(smo240121);
const smo240123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo240123.setAttribute('id', 'smo240123');
const smo240124 = new VF.Annotation('ло');
smo240124.setAttribute('id', 'smo240124');
smo240124.setFont('Merriweather', 12.1, 'normal');
smo240124.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240123.addModifier(smo240124);
smo240124.addClass('lyric lyric-0');
smo240142v0ar.push(smo240123);
const smo240125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240125.setAttribute('id', 'smo240125');
const smo240126 = new VF.Annotation('-');
smo240126.setAttribute('id', 'smo240126');
smo240126.setFont('Merriweather', 12.1, 'normal');
smo240126.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240125.addModifier(smo240126);
smo240126.addClass('lyric lyric-0 lyric-hyphen');
smo240142v0ar.push(smo240125);
smo240142v0.addTickables(smo240142v0ar)
fmtsmo24014232.joinVoices([smo240142v0]);
const fmtsmo24111232 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo241112v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241112v0ar = [];
const smo241091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241091.setAttribute('id', 'smo241091');
smo241112v0ar.push(smo241091);
const smo241092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241092.setAttribute('id', 'smo241092');
const  smo250759 = new VF.Articulation('ao').setPosition(3);
smo241092.addModifier(smo250759, 0);
smo241112v0ar.push(smo241092);
const smo241094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241094.setAttribute('id', 'smo241094');
smo241112v0ar.push(smo241094);
const smo241095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241095.setAttribute('id', 'smo241095');
const  smo250760 = new VF.Articulation('ao').setPosition(3);
smo241095.addModifier(smo250760, 0);
smo241112v0ar.push(smo241095);
smo241112v0.addTickables(smo241112v0ar)
fmtsmo24111232.joinVoices([smo241112v0]);
const fmtsmo24207432 = new VF.Formatter();
//
// voices and notes for stave 2 32
const smo242074v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242074v0ar = [];
const smo242058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo242058.setAttribute('id', 'smo242058');
smo242074v0ar.push(smo242058);
smo242074v0.addTickables(smo242074v0ar)
fmtsmo24207432.joinVoices([smo242074v0]);
const fmtsmo24303832 = new VF.Formatter();
//
// voices and notes for stave 3 32
const smo243038v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243038v0ar = [];
const smo243017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo243017.setAttribute('id', 'smo243017');
const  smo250761 = new VF.Articulation('ao').setPosition(3);
smo243017.addModifier(smo250761, 0);
smo243038v0ar.push(smo243017);
const smo243019 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo243019.setAttribute('id', 'smo243019');
smo243038v0ar.push(smo243019);
const smo243020 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo243020.setAttribute('id', 'smo243020');
const  smo250762 = new VF.Articulation('ao').setPosition(3);
smo243020.addModifier(smo250762, 0);
smo243038v0ar.push(smo243020);
const smo243022 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo243022.setAttribute('id', 'smo243022');
smo243038v0ar.push(smo243022);
smo243038v0.addTickables(smo243038v0ar)
fmtsmo24303832.joinVoices([smo243038v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
const dirsmo249949 = smo240119.getStemDirection();
smo240119.setStemDirection(dirsmo249949);
smo240121.setStemDirection(dirsmo249949);
const smo249949 = new VF.Beam([smo240119,smo240121]);
 
// formatting measures in staff group smo243368
fmtsmo24014232.format([smo240142v0,smo241112v0,smo242074v0,smo243038v0], 178);
const stavesmo240142 = new VF.Stave(55, 723, 243);
stavesmo240142.setAttribute('id', 'stavesmo240142');
stavesmo240142.setBegBarType(1);
stavesmo240142.addClef('treble');
const keysmo240142 = new VF.KeySignature('F');
keysmo240142.addToStave(stavesmo240142);
stavesmo240142.setContext(context);
stavesmo240142.draw();
smo240142v0.draw(context, stavesmo240142);
smo249949.setContext(context);
smo249949.draw();
const stavesmo241112 = new VF.Stave(55, 849, 243);
stavesmo241112.setAttribute('id', 'stavesmo241112');
stavesmo241112.setBegBarType(1);
stavesmo241112.addClef('treble');
const keysmo241112 = new VF.KeySignature('F');
keysmo241112.addToStave(stavesmo241112);
stavesmo241112.setContext(context);
stavesmo241112.draw();
smo241112v0.draw(context, stavesmo241112);
const stavesmo242074 = new VF.Stave(55, 964, 243);
stavesmo242074.setAttribute('id', 'stavesmo242074');
stavesmo242074.setBegBarType(1);
stavesmo242074.addClef('treble');
const keysmo242074 = new VF.KeySignature('F');
keysmo242074.addToStave(stavesmo242074);
stavesmo242074.setContext(context);
stavesmo242074.draw();
smo242074v0.draw(context, stavesmo242074);
const stavesmo243038 = new VF.Stave(55, 1079, 243);
stavesmo243038.setAttribute('id', 'stavesmo243038');
stavesmo243038.setBegBarType(1);
stavesmo243038.addClef('bass');
const keysmo243038 = new VF.KeySignature('F');
keysmo243038.addToStave(stavesmo243038);
stavesmo243038.setContext(context);
stavesmo243038.draw();
smo243038v0.draw(context, stavesmo243038);
const leftsmo243368stavesmo2401423 = new VF.StaveConnector(stavesmo240142, stavesmo243038).setType(1);
leftsmo243368stavesmo2401423.setContext(context).draw();
const fmtsmo24016533 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo240165v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240165v0ar = [];
const smo240143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240143.setAttribute('id', 'smo240143');
const smo240144 = new VF.Annotation('вей');
smo240144.setAttribute('id', 'smo240144');
smo240144.setFont('Merriweather', 12.1, 'normal');
smo240144.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240143.addModifier(smo240144);
smo240144.addClass('lyric lyric-0');
smo240165v0ar.push(smo240143);
const smo240145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo240145.setAttribute('id', 'smo240145');
const smo240146 = new VF.Annotation('-');
smo240146.setAttribute('id', 'smo240146');
smo240146.setFont('Merriweather', 12.1, 'normal');
smo240146.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240145.addModifier(smo240146);
smo240146.addClass('lyric lyric-0 lyric-hyphen');
smo240165v0ar.push(smo240145);
const smo240147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo240147.setAttribute('id', 'smo240147');
const smo240148 = new VF.Annotation('-');
smo240148.setAttribute('id', 'smo240148');
smo240148.setFont('Merriweather', 12.1, 'normal');
smo240148.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240147.addModifier(smo240148);
smo240148.addClass('lyric lyric-0 lyric-hyphen');
smo240165v0ar.push(smo240147);
const smo240149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240149.setAttribute('id', 'smo240149');
smo240165v0ar.push(smo240149);
smo240165v0.addTickables(smo240165v0ar)
fmtsmo24016533.joinVoices([smo240165v0]);
const fmtsmo24113233 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo241132v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241132v0ar = [];
const smo241113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241113.setAttribute('id', 'smo241113');
smo241132v0ar.push(smo241113);
const smo241114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo241114.setAttribute('id', 'smo241114');
smo241132v0ar.push(smo241114);
const smo241115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241115.setAttribute('id', 'smo241115');
smo241132v0ar.push(smo241115);
const smo241116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo241116.setAttribute('id', 'smo241116');
smo241132v0ar.push(smo241116);
smo241132v0.addTickables(smo241132v0ar)
fmtsmo24113233.joinVoices([smo241132v0]);
const fmtsmo24209133 = new VF.Formatter();
//
// voices and notes for stave 2 33
const smo242091v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242091v0ar = [];
const smo242075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo242075.setAttribute('id', 'smo242075');
smo242091v0ar.push(smo242075);
smo242091v0.addTickables(smo242091v0ar)
fmtsmo24209133.joinVoices([smo242091v0]);
const fmtsmo24305833 = new VF.Formatter();
//
// voices and notes for stave 3 33
const smo243058v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243058v0ar = [];
const smo243039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243039.setAttribute('id', 'smo243039');
smo243058v0ar.push(smo243039);
const smo243040 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo243040.setAttribute('id', 'smo243040');
smo243058v0ar.push(smo243040);
const smo243041 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243041.setAttribute('id', 'smo243041');
smo243058v0ar.push(smo243041);
const smo243042 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo243042.setAttribute('id', 'smo243042');
smo243058v0ar.push(smo243042);
smo243058v0.addTickables(smo243058v0ar)
fmtsmo24305833.joinVoices([smo243058v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo24016533.format([smo240165v0,smo241132v0,smo242091v0,smo243058v0], 141);
const stavesmo240165 = new VF.Stave(298, 723, 155);
stavesmo240165.setAttribute('id', 'stavesmo240165');
stavesmo240165.setBegBarType(VF.Barline.type.NONE);
stavesmo240165.setContext(context);
stavesmo240165.draw();
smo240165v0.draw(context, stavesmo240165);
const stavesmo241132 = new VF.Stave(298, 849, 155);
stavesmo241132.setAttribute('id', 'stavesmo241132');
stavesmo241132.setBegBarType(VF.Barline.type.NONE);
stavesmo241132.setContext(context);
stavesmo241132.draw();
smo241132v0.draw(context, stavesmo241132);
const stavesmo242091 = new VF.Stave(298, 964, 155);
stavesmo242091.setAttribute('id', 'stavesmo242091');
stavesmo242091.setBegBarType(VF.Barline.type.NONE);
stavesmo242091.setContext(context);
stavesmo242091.draw();
smo242091v0.draw(context, stavesmo242091);
const stavesmo243058 = new VF.Stave(298, 1079, 155);
stavesmo243058.setAttribute('id', 'stavesmo243058');
stavesmo243058.setBegBarType(VF.Barline.type.NONE);
stavesmo243058.setContext(context);
stavesmo243058.draw();
smo243058v0.draw(context, stavesmo243058);
const fmtsmo24019234 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo240192v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240192v0ar = [];
const smo240166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240166.setAttribute('id', 'smo240166');
const smo240168 = new VF.Ornament('');
smo240166.addModifier(smo240168, 0);
const smo240167 = new VF.Annotation('Со');
smo240167.setAttribute('id', 'smo240167');
smo240167.setFont('Merriweather', 12.1, 'normal');
smo240167.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240166.addModifier(smo240167);
smo240167.addClass('lyric lyric-0');
smo240192v0ar.push(smo240166);
const smo240169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240169.setAttribute('id', 'smo240169');
const smo240170 = new VF.Annotation('-');
smo240170.setAttribute('id', 'smo240170');
smo240170.setFont('Merriweather', 12.1, 'normal');
smo240170.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240169.addModifier(smo240170);
smo240170.addClass('lyric lyric-0 lyric-hyphen');
smo240192v0ar.push(smo240169);
const smo240171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240171.setAttribute('id', 'smo240171');
const smo240172 = new VF.Annotation('-');
smo240172.setAttribute('id', 'smo240172');
smo240172.setFont('Merriweather', 12.1, 'normal');
smo240172.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240171.addModifier(smo240172);
smo240172.addClass('lyric lyric-0 lyric-hyphen');
smo240192v0ar.push(smo240171);
const smo240173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo240173.setAttribute('id', 'smo240173');
const smo240174 = new VF.Annotation('ло');
smo240174.setAttribute('id', 'smo240174');
smo240174.setFont('Merriweather', 12.1, 'normal');
smo240174.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240173.addModifier(smo240174);
smo240174.addClass('lyric lyric-0');
smo240192v0ar.push(smo240173);
const smo240175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240175.setAttribute('id', 'smo240175');
const smo240176 = new VF.Annotation('-');
smo240176.setAttribute('id', 'smo240176');
smo240176.setFont('Merriweather', 12.1, 'normal');
smo240176.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240175.addModifier(smo240176);
smo240176.addClass('lyric lyric-0 lyric-hyphen');
smo240192v0ar.push(smo240175);
smo240192v0.addTickables(smo240192v0ar)
fmtsmo24019234.joinVoices([smo240192v0]);
const fmtsmo24115234 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo241152v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241152v0ar = [];
const smo241133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241133.setAttribute('id', 'smo241133');
smo241152v0ar.push(smo241133);
const smo241134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241134.setAttribute('id', 'smo241134');
smo241152v0ar.push(smo241134);
const smo241135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241135.setAttribute('id', 'smo241135');
smo241152v0ar.push(smo241135);
const smo241136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241136.setAttribute('id', 'smo241136');
smo241152v0ar.push(smo241136);
smo241152v0.addTickables(smo241152v0ar)
fmtsmo24115234.joinVoices([smo241152v0]);
const fmtsmo24210834 = new VF.Formatter();
//
// voices and notes for stave 2 34
const smo242108v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242108v0ar = [];
const smo242092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo242092.setAttribute('id', 'smo242092');
smo242108v0ar.push(smo242092);
smo242108v0.addTickables(smo242108v0ar)
fmtsmo24210834.joinVoices([smo242108v0]);
const fmtsmo24307834 = new VF.Formatter();
//
// voices and notes for stave 3 34
const smo243078v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243078v0ar = [];
const smo243059 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo243059.setAttribute('id', 'smo243059');
smo243078v0ar.push(smo243059);
const smo243060 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo243060.setAttribute('id', 'smo243060');
smo243078v0ar.push(smo243060);
const smo243061 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo243061.setAttribute('id', 'smo243061');
smo243078v0ar.push(smo243061);
const smo243062 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo243062.setAttribute('id', 'smo243062');
smo243078v0ar.push(smo243062);
smo243078v0.addTickables(smo243078v0ar)
fmtsmo24307834.joinVoices([smo243078v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
const dirsmo249966 = smo240169.getStemDirection();
smo240169.setStemDirection(dirsmo249966);
smo240171.setStemDirection(dirsmo249966);
const smo249966 = new VF.Beam([smo240169,smo240171]);
 
// formatting measures in staff group smo243368
fmtsmo24019234.format([smo240192v0,smo241152v0,smo242108v0,smo243078v0], 178);
const stavesmo240192 = new VF.Stave(453, 723, 192);
stavesmo240192.setAttribute('id', 'stavesmo240192');
stavesmo240192.setBegBarType(VF.Barline.type.NONE);
stavesmo240192.setContext(context);
stavesmo240192.draw();
smo240192v0.draw(context, stavesmo240192);
smo249966.setContext(context);
smo249966.draw();
const stavesmo241152 = new VF.Stave(453, 849, 192);
stavesmo241152.setAttribute('id', 'stavesmo241152');
stavesmo241152.setBegBarType(VF.Barline.type.NONE);
stavesmo241152.setContext(context);
stavesmo241152.draw();
smo241152v0.draw(context, stavesmo241152);
const stavesmo242108 = new VF.Stave(453, 964, 192);
stavesmo242108.setAttribute('id', 'stavesmo242108');
stavesmo242108.setBegBarType(VF.Barline.type.NONE);
stavesmo242108.setContext(context);
stavesmo242108.draw();
smo242108v0.draw(context, stavesmo242108);
const stavesmo243078 = new VF.Stave(453, 1079, 192);
stavesmo243078.setAttribute('id', 'stavesmo243078');
stavesmo243078.setBegBarType(VF.Barline.type.NONE);
stavesmo243078.setContext(context);
stavesmo243078.draw();
smo243078v0.draw(context, stavesmo243078);
const fmtsmo24021435 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo240214v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240214v0ar = [];
const smo240193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240193.setAttribute('id', 'smo240193');
const smo240194 = new VF.Annotation('вей');
smo240194.setAttribute('id', 'smo240194');
smo240194.setFont('Merriweather', 12.1, 'normal');
smo240194.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240193.addModifier(smo240194);
smo240194.addClass('lyric lyric-0');
smo240214v0ar.push(smo240193);
const smo240195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo240195.setAttribute('id', 'smo240195');
const smo240196 = new VF.Annotation('-');
smo240196.setAttribute('id', 'smo240196');
smo240196.setFont('Merriweather', 12.1, 'normal');
smo240196.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240195.addModifier(smo240196);
smo240196.addClass('lyric lyric-0 lyric-hyphen');
smo240214v0ar.push(smo240195);
const smo240197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo240197.setAttribute('id', 'smo240197');
const smo240198 = new VF.Annotation('-');
smo240198.setAttribute('id', 'smo240198');
smo240198.setFont('Merriweather', 12.1, 'normal');
smo240198.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240197.addModifier(smo240198);
smo240198.addClass('lyric lyric-0 lyric-hyphen');
smo240214v0ar.push(smo240197);
smo240214v0.addTickables(smo240214v0ar)
fmtsmo24021435.joinVoices([smo240214v0]);
const fmtsmo24117235 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo241172v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241172v0ar = [];
const smo241153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241153.setAttribute('id', 'smo241153');
smo241172v0ar.push(smo241153);
const smo241154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo241154.setAttribute('id', 'smo241154');
smo241172v0ar.push(smo241154);
const smo241155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241155.setAttribute('id', 'smo241155');
smo241172v0ar.push(smo241155);
const smo241156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo241156.setAttribute('id', 'smo241156');
smo241172v0ar.push(smo241156);
smo241172v0.addTickables(smo241172v0ar)
fmtsmo24117235.joinVoices([smo241172v0]);
const fmtsmo24212535 = new VF.Formatter();
//
// voices and notes for stave 2 35
const smo242125v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242125v0ar = [];
const smo242109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo242109.setAttribute('id', 'smo242109');
smo242125v0ar.push(smo242109);
smo242125v0.addTickables(smo242125v0ar)
fmtsmo24212535.joinVoices([smo242125v0]);
const fmtsmo24309835 = new VF.Formatter();
//
// voices and notes for stave 3 35
const smo243098v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243098v0ar = [];
const smo243079 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243079.setAttribute('id', 'smo243079');
smo243098v0ar.push(smo243079);
const smo243080 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo243080.setAttribute('id', 'smo243080');
smo243098v0ar.push(smo243080);
const smo243081 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243081.setAttribute('id', 'smo243081');
smo243098v0ar.push(smo243081);
const smo243082 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo243082.setAttribute('id', 'smo243082');
smo243098v0ar.push(smo243082);
smo243098v0.addTickables(smo243098v0ar)
fmtsmo24309835.joinVoices([smo243098v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo24021435.format([smo240214v0,smo241172v0,smo242125v0,smo243098v0], 134);
const stavesmo240214 = new VF.Stave(645, 723, 148);
stavesmo240214.setAttribute('id', 'stavesmo240214');
stavesmo240214.setBegBarType(VF.Barline.type.NONE);
stavesmo240214.setContext(context);
stavesmo240214.draw();
smo240214v0.draw(context, stavesmo240214);
const stavesmo241172 = new VF.Stave(645, 849, 148);
stavesmo241172.setAttribute('id', 'stavesmo241172');
stavesmo241172.setBegBarType(VF.Barline.type.NONE);
stavesmo241172.setContext(context);
stavesmo241172.draw();
smo241172v0.draw(context, stavesmo241172);
const stavesmo242125 = new VF.Stave(645, 964, 148);
stavesmo242125.setAttribute('id', 'stavesmo242125');
stavesmo242125.setBegBarType(VF.Barline.type.NONE);
stavesmo242125.setContext(context);
stavesmo242125.draw();
smo242125v0.draw(context, stavesmo242125);
const stavesmo243098 = new VF.Stave(645, 1079, 148);
stavesmo243098.setAttribute('id', 'stavesmo243098');
stavesmo243098.setBegBarType(VF.Barline.type.NONE);
stavesmo243098.setContext(context);
stavesmo243098.draw();
smo243098v0.draw(context, stavesmo243098);
const fmtsmo24024036 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo240240v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240240v0ar = [];
const smo240215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240215.setAttribute('id', 'smo240215');
const smo240216 = new VF.Annotation('го');
smo240216.setAttribute('id', 'smo240216');
smo240216.setFont('Merriweather', 12.1, 'normal');
smo240216.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240215.addModifier(smo240216);
smo240216.addClass('lyric lyric-0');
smo240240v0ar.push(smo240215);
const smo240217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240217.setAttribute('id', 'smo240217');
const smo240218 = new VF.Annotation('-');
smo240218.setAttribute('id', 'smo240218');
smo240218.setFont('Merriweather', 12.1, 'normal');
smo240218.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240217.addModifier(smo240218);
smo240218.addClass('lyric lyric-0 lyric-hyphen');
smo240240v0ar.push(smo240217);
const smo240219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240219.setAttribute('id', 'smo240219');
const smo240220 = new VF.Annotation('-');
smo240220.setAttribute('id', 'smo240220');
smo240220.setFont('Merriweather', 12.1, 'normal');
smo240220.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240219.addModifier(smo240220);
smo240220.addClass('lyric lyric-0 lyric-hyphen');
smo240240v0ar.push(smo240219);
const smo240221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo240221.setAttribute('id', 'smo240221');
const smo2402210acc = new VF.Accidental('#');
smo240221.addModifier(smo2402210acc, 0);
const smo240222 = new VF.Annotation('-');
smo240222.setAttribute('id', 'smo240222');
smo240222.setFont('Merriweather', 12.1, 'normal');
smo240222.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240221.addModifier(smo240222);
smo240222.addClass('lyric lyric-0 lyric-hyphen');
smo240240v0ar.push(smo240221);
const smo240223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240223.setAttribute('id', 'smo240223');
const smo240224 = new VF.Annotation('ло');
smo240224.setAttribute('id', 'smo240224');
smo240224.setFont('Merriweather', 12.1, 'normal');
smo240224.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240223.addModifier(smo240224);
smo240224.addClass('lyric lyric-0 lyric-hyphen');
smo240240v0ar.push(smo240223);
smo240240v0.addTickables(smo240240v0ar)
fmtsmo24024036.joinVoices([smo240240v0]);
const fmtsmo24119236 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo241192v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241192v0ar = [];
const smo241173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241173.setAttribute('id', 'smo241173');
smo241192v0ar.push(smo241173);
const smo241174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo241174.setAttribute('id', 'smo241174');
smo241192v0ar.push(smo241174);
const smo241175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241175.setAttribute('id', 'smo241175');
smo241192v0ar.push(smo241175);
const smo241176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo241176.setAttribute('id', 'smo241176');
smo241192v0ar.push(smo241176);
smo241192v0.addTickables(smo241192v0ar)
fmtsmo24119236.joinVoices([smo241192v0]);
const fmtsmo24214336 = new VF.Formatter();
//
// voices and notes for stave 2 36
const smo242143v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242143v0ar = [];
const smo242126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo242126.setAttribute('id', 'smo242126');
smo242143v0ar.push(smo242126);
const smo242127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo242127.setAttribute('id', 'smo242127');
smo242143v0ar.push(smo242127);
smo242143v0.addTickables(smo242143v0ar)
fmtsmo24214336.joinVoices([smo242143v0]);
const fmtsmo24311836 = new VF.Formatter();
//
// voices and notes for stave 3 36
const smo243118v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243118v0ar = [];
const smo243099 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo243099.setAttribute('id', 'smo243099');
smo243118v0ar.push(smo243099);
const smo243100 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo243100.setAttribute('id', 'smo243100');
smo243118v0ar.push(smo243100);
const smo243101 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243101.setAttribute('id', 'smo243101');
smo243118v0ar.push(smo243101);
const smo243102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo243102.setAttribute('id', 'smo243102');
smo243118v0ar.push(smo243102);
smo243118v0.addTickables(smo243118v0ar)
fmtsmo24311836.joinVoices([smo243118v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
const dirsmo249983 = smo240217.getStemDirection();
smo240217.setStemDirection(dirsmo249983);
smo240219.setStemDirection(dirsmo249983);
const smo249983 = new VF.Beam([smo240217,smo240219]);
 
// formatting measures in staff group smo243368
fmtsmo24024036.format([smo240240v0,smo241192v0,smo242143v0,smo243118v0], 174);
const stavesmo240240 = new VF.Stave(793, 723, 188);
stavesmo240240.setAttribute('id', 'stavesmo240240');
stavesmo240240.setBegBarType(VF.Barline.type.NONE);
stavesmo240240.setContext(context);
stavesmo240240.draw();
smo240240v0.draw(context, stavesmo240240);
smo249983.setContext(context);
smo249983.draw();
const stavesmo241192 = new VF.Stave(793, 849, 188);
stavesmo241192.setAttribute('id', 'stavesmo241192');
stavesmo241192.setBegBarType(VF.Barline.type.NONE);
stavesmo241192.setContext(context);
stavesmo241192.draw();
smo241192v0.draw(context, stavesmo241192);
const stavesmo242143 = new VF.Stave(793, 964, 188);
stavesmo242143.setAttribute('id', 'stavesmo242143');
stavesmo242143.setBegBarType(VF.Barline.type.NONE);
stavesmo242143.setContext(context);
stavesmo242143.draw();
smo242143v0.draw(context, stavesmo242143);
const stavesmo243118 = new VF.Stave(793, 1079, 188);
stavesmo243118.setAttribute('id', 'stavesmo243118');
stavesmo243118.setBegBarType(VF.Barline.type.NONE);
stavesmo243118.setContext(context);
stavesmo243118.draw();
smo243118v0.draw(context, stavesmo243118);
const fmtsmo24026237 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo240262v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240262v0ar = [];
const smo240241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo240241.setAttribute('id', 'smo240241');
const smo240242 = new VF.Annotation('си');
smo240242.setAttribute('id', 'smo240242');
smo240242.setFont('Merriweather', 12.1, 'normal');
smo240242.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240241.addModifier(smo240242);
smo240242.addClass('lyric lyric-0 lyric-hyphen');
smo240262v0ar.push(smo240241);
const smo240243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240243.setAttribute('id', 'smo240243');
const smo240244 = new VF.Annotation('ст');
smo240244.setAttribute('id', 'smo240244');
smo240244.setFont('Merriweather', 12.1, 'normal');
smo240244.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240243.addModifier(smo240244);
smo240244.addClass('lyric lyric-0');
smo240262v0ar.push(smo240243);
const smo240245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240245.setAttribute('id', 'smo240245');
const smo240246 = new VF.Annotation('ый');
smo240246.setAttribute('id', 'smo240246');
smo240246.setFont('Merriweather', 12.1, 'normal');
smo240246.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240245.addModifier(smo240246);
smo240246.addClass('lyric lyric-0');
smo240262v0ar.push(smo240245);
smo240262v0.addTickables(smo240262v0ar)
fmtsmo24026237.joinVoices([smo240262v0]);
const fmtsmo24121037 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo241210v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241210v0ar = [];
const smo241193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo241193.setAttribute('id', 'smo241193');
smo241210v0ar.push(smo241193);
const smo241194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo241194.setAttribute('id', 'smo241194');
smo241210v0ar.push(smo241194);
smo241210v0.addTickables(smo241210v0ar)
fmtsmo24121037.joinVoices([smo241210v0]);
const fmtsmo24216137 = new VF.Formatter();
//
// voices and notes for stave 2 37
const smo242161v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242161v0ar = [];
const smo242144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo242144.setAttribute('id', 'smo242144');
smo242161v0ar.push(smo242144);
const smo242145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo242145.setAttribute('id', 'smo242145');
smo242161v0ar.push(smo242145);
smo242161v0.addTickables(smo242161v0ar)
fmtsmo24216137.joinVoices([smo242161v0]);
const fmtsmo24313637 = new VF.Formatter();
//
// voices and notes for stave 3 37
const smo243136v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243136v0ar = [];
const smo243119 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo243119.setAttribute('id', 'smo243119');
smo243136v0ar.push(smo243119);
const smo243120 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo243120.setAttribute('id', 'smo243120');
smo243136v0ar.push(smo243120);
smo243136v0.addTickables(smo243136v0ar)
fmtsmo24313637.joinVoices([smo243136v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo24026237.format([smo240262v0,smo241210v0,smo242161v0,smo243136v0], 152);
const stavesmo240262 = new VF.Stave(981, 723, 166);
stavesmo240262.setAttribute('id', 'stavesmo240262');
stavesmo240262.setBegBarType(VF.Barline.type.NONE);
stavesmo240262.setContext(context);
stavesmo240262.draw();
smo240262v0.draw(context, stavesmo240262);
const stavesmo241210 = new VF.Stave(981, 849, 166);
stavesmo241210.setAttribute('id', 'stavesmo241210');
stavesmo241210.setBegBarType(VF.Barline.type.NONE);
stavesmo241210.setContext(context);
stavesmo241210.draw();
smo241210v0.draw(context, stavesmo241210);
const stavesmo242161 = new VF.Stave(981, 964, 166);
stavesmo242161.setAttribute('id', 'stavesmo242161');
stavesmo242161.setBegBarType(VF.Barline.type.NONE);
stavesmo242161.setContext(context);
stavesmo242161.draw();
smo242161v0.draw(context, stavesmo242161);
const stavesmo243136 = new VF.Stave(981, 1079, 166);
stavesmo243136.setAttribute('id', 'stavesmo243136');
stavesmo243136.setBegBarType(VF.Barline.type.NONE);
stavesmo243136.setContext(context);
stavesmo243136.draw();
smo243136v0.draw(context, stavesmo243136);
const fmtsmo24028538 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo240285v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240285v0ar = [];
const smo240263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240263.setAttribute('id', 'smo240263');
smo240263.addModifier(new VF.Dot(), 0);
const  smo250811 = new VF.Articulation('a@a').setPosition(3);
smo240263.addModifier(smo250811, 0);
const smo240264 = new VF.Annotation('со');
smo240264.setAttribute('id', 'smo240264');
smo240264.setFont('Merriweather', 12.1, 'normal');
smo240264.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240263.addModifier(smo240264);
smo240264.addClass('lyric lyric-0');
smo240285v0ar.push(smo240263);
const smo240266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo240266.setAttribute('id', 'smo240266');
const smo2402660acc = new VF.Accidental('#');
smo240266.addModifier(smo2402660acc, 0);
const smo240267 = new VF.Annotation('-');
smo240267.setAttribute('id', 'smo240267');
smo240267.setFont('Merriweather', 12.1, 'normal');
smo240267.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240266.addModifier(smo240267);
smo240267.addClass('lyric lyric-0 lyric-hyphen');
smo240285v0ar.push(smo240266);
const smo240268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240268.setAttribute('id', 'smo240268');
smo240285v0ar.push(smo240268);
smo240285v0.addTickables(smo240285v0ar)
fmtsmo24028538.joinVoices([smo240285v0]);
const fmtsmo24122838 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo241228v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241228v0ar = [];
const smo241211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241211.setAttribute('id', 'smo241211');
smo241211.addModifier(new VF.Dot(), 0);
smo241228v0ar.push(smo241211);
const smo241212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241212.setAttribute('id', 'smo241212');
smo241228v0ar.push(smo241212);
smo241228v0.addTickables(smo241228v0ar)
fmtsmo24122838.joinVoices([smo241228v0]);
const fmtsmo24217938 = new VF.Formatter();
//
// voices and notes for stave 2 38
const smo242179v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242179v0ar = [];
const smo242162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo242162.setAttribute('id', 'smo242162');
smo242162.addModifier(new VF.Dot(), 0);
smo242179v0ar.push(smo242162);
const smo242163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo242163.setAttribute('id', 'smo242163');
smo242179v0ar.push(smo242163);
smo242179v0.addTickables(smo242179v0ar)
fmtsmo24217938.joinVoices([smo242179v0]);
const fmtsmo24315438 = new VF.Formatter();
//
// voices and notes for stave 3 38
const smo243154v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243154v0ar = [];
const smo243137 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243137.setAttribute('id', 'smo243137');
smo243137.addModifier(new VF.Dot(), 0);
smo243154v0ar.push(smo243137);
const smo243138 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo243138.setAttribute('id', 'smo243138');
smo243154v0ar.push(smo243138);
smo243154v0.addTickables(smo243154v0ar)
fmtsmo24315438.joinVoices([smo243154v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
const dirsmo250000 = smo240266.getStemDirection();
smo240266.setStemDirection(dirsmo250000);
smo240268.setStemDirection(dirsmo250000);
const smo250000 = new VF.Beam([smo240266,smo240268]);
 
// formatting measures in staff group smo243368
fmtsmo24028538.format([smo240285v0,smo241228v0,smo242179v0,smo243154v0], 98);
const stavesmo240285 = new VF.Stave(1147, 723, 112);
stavesmo240285.setAttribute('id', 'stavesmo240285');
stavesmo240285.setBegBarType(VF.Barline.type.NONE);
stavesmo240285.setContext(context);
stavesmo240285.draw();
smo240285v0.draw(context, stavesmo240285);
smo250000.setContext(context);
smo250000.draw();
const stavesmo241228 = new VF.Stave(1147, 849, 112);
stavesmo241228.setAttribute('id', 'stavesmo241228');
stavesmo241228.setBegBarType(VF.Barline.type.NONE);
stavesmo241228.setContext(context);
stavesmo241228.draw();
smo241228v0.draw(context, stavesmo241228);
const stavesmo242179 = new VF.Stave(1147, 964, 112);
stavesmo242179.setAttribute('id', 'stavesmo242179');
stavesmo242179.setBegBarType(VF.Barline.type.NONE);
stavesmo242179.setContext(context);
stavesmo242179.draw();
smo242179v0.draw(context, stavesmo242179);
const stavesmo243154 = new VF.Stave(1147, 1079, 112);
stavesmo243154.setAttribute('id', 'stavesmo243154');
stavesmo243154.setBegBarType(VF.Barline.type.NONE);
stavesmo243154.setContext(context);
stavesmo243154.draw();
smo243154v0.draw(context, stavesmo243154);
const fmtsmo24030539 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo240305v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240305v0ar = [];
const smo240286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo240286.setAttribute('id', 'smo240286');
smo240286.addModifier(new VF.Dot(), 0);
const smo240287 = new VF.Annotation('ло');
smo240287.setAttribute('id', 'smo240287');
smo240287.setFont('Merriweather', 12.1, 'normal');
smo240287.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240286.addModifier(smo240287);
smo240287.addClass('lyric lyric-0');
smo240305v0ar.push(smo240286);
const smo240288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240288.setAttribute('id', 'smo240288');
const smo240289 = new VF.Annotation('-');
smo240289.setAttribute('id', 'smo240289');
smo240289.setFont('Merriweather', 12.1, 'normal');
smo240289.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240288.addModifier(smo240289);
smo240289.addClass('lyric lyric-0 lyric-hyphen');
smo240305v0ar.push(smo240288);
smo240305v0.addTickables(smo240305v0ar)
fmtsmo24030539.joinVoices([smo240305v0]);
const fmtsmo24124739 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo241247v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241247v0ar = [];
const smo241229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241229.setAttribute('id', 'smo241229');
smo241247v0ar.push(smo241229);
const smo241230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241230.setAttribute('id', 'smo241230');
smo241247v0ar.push(smo241230);
const smo241231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241231.setAttribute('id', 'smo241231');
smo241247v0ar.push(smo241231);
smo241247v0.addTickables(smo241247v0ar)
fmtsmo24124739.joinVoices([smo241247v0]);
const fmtsmo24219839 = new VF.Formatter();
//
// voices and notes for stave 2 39
const smo242198v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242198v0ar = [];
const smo242180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo242180.setAttribute('id', 'smo242180');
smo242198v0ar.push(smo242180);
const smo242181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo242181.setAttribute('id', 'smo242181');
smo242198v0ar.push(smo242181);
const smo242182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/4/n"]}'))
smo242182.setAttribute('id', 'smo242182');
const smo2421820acc = new VF.Accidental('#');
smo242182.addModifier(smo2421820acc, 0);
smo242198v0ar.push(smo242182);
smo242198v0.addTickables(smo242198v0ar)
fmtsmo24219839.joinVoices([smo242198v0]);
const fmtsmo24317339 = new VF.Formatter();
//
// voices and notes for stave 3 39
const smo243173v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243173v0ar = [];
const smo243155 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo243155.setAttribute('id', 'smo243155');
smo243173v0ar.push(smo243155);
const smo243156 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo243156.setAttribute('id', 'smo243156');
smo243173v0ar.push(smo243156);
const smo243157 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo243157.setAttribute('id', 'smo243157');
smo243173v0ar.push(smo243157);
smo243173v0.addTickables(smo243173v0ar)
fmtsmo24317339.joinVoices([smo243173v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo24030539.format([smo240305v0,smo241247v0,smo242198v0,smo243173v0], 102);
const stavesmo240305 = new VF.Stave(1259, 723, 116);
stavesmo240305.setAttribute('id', 'stavesmo240305');
stavesmo240305.setBegBarType(VF.Barline.type.NONE);
stavesmo240305.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":144}'), -1 * 0);
stavesmo240305.setContext(context);
stavesmo240305.draw();
smo240305v0.draw(context, stavesmo240305);
const stavesmo241247 = new VF.Stave(1259, 849, 116);
stavesmo241247.setAttribute('id', 'stavesmo241247');
stavesmo241247.setBegBarType(VF.Barline.type.NONE);
stavesmo241247.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":144}'), -1 * 0);
stavesmo241247.setContext(context);
stavesmo241247.draw();
smo241247v0.draw(context, stavesmo241247);
const stavesmo242198 = new VF.Stave(1259, 964, 116);
stavesmo242198.setAttribute('id', 'stavesmo242198');
stavesmo242198.setBegBarType(VF.Barline.type.NONE);
stavesmo242198.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":144}'), -1 * 0);
stavesmo242198.setContext(context);
stavesmo242198.draw();
smo242198v0.draw(context, stavesmo242198);
const stavesmo243173 = new VF.Stave(1259, 1079, 116);
stavesmo243173.setAttribute('id', 'stavesmo243173');
stavesmo243173.setBegBarType(VF.Barline.type.NONE);
stavesmo243173.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":144}'), -1 * 0);
stavesmo243173.setContext(context);
stavesmo243173.draw();
smo243173v0.draw(context, stavesmo243173);
const rightsmo243368stavesmo2403053 = new VF.StaveConnector(stavesmo240305, stavesmo243173).setType(0);
rightsmo243368stavesmo2403053.setContext(context).draw();
const fmtsmo24032540 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo240325v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240325v0ar = [];
const smo240306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240306.setAttribute('id', 'smo240306');
const smo240307 = new VF.Annotation('вей');
smo240307.setAttribute('id', 'smo240307');
smo240307.setFont('Merriweather', 12.1, 'normal');
smo240307.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo240306.addModifier(smo240307);
smo240307.addClass('lyric lyric-0');
smo240325v0ar.push(smo240306);
const smo240308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240308.setAttribute('id', 'smo240308');
smo240325v0ar.push(smo240308);
const smo240309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240309.setAttribute('id', 'smo240309');
smo240325v0ar.push(smo240309);
smo240325v0.addTickables(smo240325v0ar)
fmtsmo24032540.joinVoices([smo240325v0]);
const fmtsmo24126940 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo241269v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241269v0ar = [];
const smo241248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
const smo241249 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["an/4"],"slash":false}'))
smo241249.setAttribute('id', 'smo241249');
const ggrpsmo241248 = new VF.GraceNoteGroup([smo241249]);
ggrpsmo241248.beamNotes();
smo241248.addModifier(ggrpsmo241248, 0);
smo241248.setAttribute('id', 'smo241248');
smo241269v0ar.push(smo241248);
const smo241250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241250.setAttribute('id', 'smo241250');
smo241269v0ar.push(smo241250);
const smo241251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
const smo241252 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["dn/5"],"slash":false}'))
smo241252.setAttribute('id', 'smo241252');
const ggrpsmo241251 = new VF.GraceNoteGroup([smo241252]);
ggrpsmo241251.beamNotes();
smo241251.addModifier(ggrpsmo241251, 0);
smo241251.setAttribute('id', 'smo241251');
smo241269v0ar.push(smo241251);
const smo241253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241253.setAttribute('id', 'smo241253');
smo241269v0ar.push(smo241253);
smo241269v0.addTickables(smo241269v0ar)
fmtsmo24126940.joinVoices([smo241269v0]);
const fmtsmo24221840 = new VF.Formatter();
//
// voices and notes for stave 2 40
const smo242218v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242218v0ar = [];
const smo242199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242199.setAttribute('id', 'smo242199');
smo242218v0ar.push(smo242199);
const smo242200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242200.setAttribute('id', 'smo242200');
smo242218v0ar.push(smo242200);
const smo242201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242201.setAttribute('id', 'smo242201');
smo242218v0ar.push(smo242201);
const smo242202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242202.setAttribute('id', 'smo242202');
smo242218v0ar.push(smo242202);
smo242218v0.addTickables(smo242218v0ar)
fmtsmo24221840.joinVoices([smo242218v0]);
const fmtsmo24319340 = new VF.Formatter();
//
// voices and notes for stave 3 40
const smo243193v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243193v0ar = [];
const smo243174 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243174.setAttribute('id', 'smo243174');
smo243193v0ar.push(smo243174);
const smo243175 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243175.setAttribute('id', 'smo243175');
smo243193v0ar.push(smo243175);
const smo243176 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243176.setAttribute('id', 'smo243176');
smo243193v0ar.push(smo243176);
const smo243177 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243177.setAttribute('id', 'smo243177');
smo243193v0ar.push(smo243177);
smo243193v0.addTickables(smo243193v0ar)
fmtsmo24319340.joinVoices([smo243193v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo24032540.format([smo240325v0,smo241269v0,smo242218v0,smo243193v0], 155);
const stavesmo240325 = new VF.Stave(55, 1197, 219);
stavesmo240325.setAttribute('id', 'stavesmo240325');
stavesmo240325.setBegBarType(1);
stavesmo240325.addClef('treble');
const keysmo240325 = new VF.KeySignature('F');
keysmo240325.addToStave(stavesmo240325);
stavesmo240325.setContext(context);
stavesmo240325.draw();
smo240325v0.draw(context, stavesmo240325);
const stavesmo241269 = new VF.Stave(55, 1322, 219);
stavesmo241269.setAttribute('id', 'stavesmo241269');
stavesmo241269.setBegBarType(1);
stavesmo241269.addClef('treble');
const keysmo241269 = new VF.KeySignature('F');
keysmo241269.addToStave(stavesmo241269);
stavesmo241269.setContext(context);
stavesmo241269.draw();
smo241269v0.draw(context, stavesmo241269);
const stavesmo242218 = new VF.Stave(55, 1410, 219);
stavesmo242218.setAttribute('id', 'stavesmo242218');
stavesmo242218.setBegBarType(1);
stavesmo242218.addClef('treble');
const keysmo242218 = new VF.KeySignature('F');
keysmo242218.addToStave(stavesmo242218);
stavesmo242218.setContext(context);
stavesmo242218.draw();
smo242218v0.draw(context, stavesmo242218);
const stavesmo243193 = new VF.Stave(55, 1523, 219);
stavesmo243193.setAttribute('id', 'stavesmo243193');
stavesmo243193.setBegBarType(1);
stavesmo243193.addClef('bass');
const keysmo243193 = new VF.KeySignature('F');
keysmo243193.addToStave(stavesmo243193);
stavesmo243193.setContext(context);
stavesmo243193.draw();
smo243193v0.draw(context, stavesmo243193);
const leftsmo243368stavesmo2403253 = new VF.StaveConnector(stavesmo240325, stavesmo243193).setType(1);
leftsmo243368stavesmo2403253.setContext(context).draw();
const fmtsmo24034241 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo240342v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240342v0ar = [];
const smo240326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240326.setAttribute('id', 'smo240326');
smo240342v0ar.push(smo240326);
smo240342v0.addTickables(smo240342v0ar)
fmtsmo24034241.joinVoices([smo240342v0]);
const fmtsmo24128941 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo241289v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241289v0ar = [];
const smo241270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
const smo241271 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["fn/5"],"slash":false}'))
smo241271.setAttribute('id', 'smo241271');
const ggrpsmo241270 = new VF.GraceNoteGroup([smo241271]);
ggrpsmo241270.beamNotes();
smo241270.addModifier(ggrpsmo241270, 0);
smo241270.setAttribute('id', 'smo241270');
smo241270.addModifier(new VF.Dot(), 0);
smo241289v0ar.push(smo241270);
const smo241272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo241272.setAttribute('id', 'smo241272');
smo241289v0ar.push(smo241272);
const smo241273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo241273.setAttribute('id', 'smo241273');
smo241289v0ar.push(smo241273);
smo241289v0.addTickables(smo241289v0ar)
fmtsmo24128941.joinVoices([smo241289v0]);
const fmtsmo24223841 = new VF.Formatter();
//
// voices and notes for stave 2 41
const smo242238v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242238v0ar = [];
const smo242219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242219.setAttribute('id', 'smo242219');
smo242238v0ar.push(smo242219);
const smo242220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242220.setAttribute('id', 'smo242220');
smo242238v0ar.push(smo242220);
const smo242221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242221.setAttribute('id', 'smo242221');
smo242238v0ar.push(smo242221);
const smo242222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242222.setAttribute('id', 'smo242222');
smo242238v0ar.push(smo242222);
smo242238v0.addTickables(smo242238v0ar)
fmtsmo24223841.joinVoices([smo242238v0]);
const fmtsmo24321341 = new VF.Formatter();
//
// voices and notes for stave 3 41
const smo243213v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243213v0ar = [];
const smo243194 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243194.setAttribute('id', 'smo243194');
smo243213v0ar.push(smo243194);
const smo243195 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243195.setAttribute('id', 'smo243195');
smo243213v0ar.push(smo243195);
const smo243196 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243196.setAttribute('id', 'smo243196');
smo243213v0ar.push(smo243196);
const smo243197 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243197.setAttribute('id', 'smo243197');
smo243213v0ar.push(smo243197);
smo243213v0.addTickables(smo243213v0ar)
fmtsmo24321341.joinVoices([smo243213v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
const dirsmo250034 = smo241272.getStemDirection();
smo241272.setStemDirection(dirsmo250034);
smo241273.setStemDirection(dirsmo250034);
const smo250034 = new VF.Beam([smo241272,smo241273]);
 
// formatting measures in staff group smo243368
fmtsmo24034241.format([smo240342v0,smo241289v0,smo242238v0,smo243213v0], 133);
const stavesmo240342 = new VF.Stave(274, 1197, 147);
stavesmo240342.setAttribute('id', 'stavesmo240342');
stavesmo240342.setBegBarType(VF.Barline.type.NONE);
stavesmo240342.setContext(context);
stavesmo240342.draw();
smo240342v0.draw(context, stavesmo240342);
const stavesmo241289 = new VF.Stave(274, 1322, 147);
stavesmo241289.setAttribute('id', 'stavesmo241289');
stavesmo241289.setBegBarType(VF.Barline.type.NONE);
stavesmo241289.setContext(context);
stavesmo241289.draw();
smo241289v0.draw(context, stavesmo241289);
smo250034.setContext(context);
smo250034.draw();
const stavesmo242238 = new VF.Stave(274, 1410, 147);
stavesmo242238.setAttribute('id', 'stavesmo242238');
stavesmo242238.setBegBarType(VF.Barline.type.NONE);
stavesmo242238.setContext(context);
stavesmo242238.draw();
smo242238v0.draw(context, stavesmo242238);
const stavesmo243213 = new VF.Stave(274, 1523, 147);
stavesmo243213.setAttribute('id', 'stavesmo243213');
stavesmo243213.setBegBarType(VF.Barline.type.NONE);
stavesmo243213.setContext(context);
stavesmo243213.draw();
smo243213v0.draw(context, stavesmo243213);
const fmtsmo24035942 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo240359v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240359v0ar = [];
const smo240343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240343.setAttribute('id', 'smo240343');
smo240359v0ar.push(smo240343);
smo240359v0.addTickables(smo240359v0ar)
fmtsmo24035942.joinVoices([smo240359v0]);
const fmtsmo24131142 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo241311v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241311v0ar = [];
const smo241290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo241290.setAttribute('id', 'smo241290');
smo241311v0ar.push(smo241290);
const smo241291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo241291.setAttribute('id', 'smo241291');
smo241311v0ar.push(smo241291);
const smo241292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo241292.setAttribute('id', 'smo241292');
smo241311v0ar.push(smo241292);
const smo241293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo241293.setAttribute('id', 'smo241293');
smo241311v0ar.push(smo241293);
const smo241294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo241294.setAttribute('id', 'smo241294');
smo241311v0ar.push(smo241294);
const smo241295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo241295.setAttribute('id', 'smo241295');
smo241311v0ar.push(smo241295);
smo241311v0.addTickables(smo241311v0ar)
fmtsmo24131142.joinVoices([smo241311v0]);
const fmtsmo24225842 = new VF.Formatter();
//
// voices and notes for stave 2 42
const smo242258v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242258v0ar = [];
const smo242239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242239.setAttribute('id', 'smo242239');
smo242258v0ar.push(smo242239);
const smo242240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242240.setAttribute('id', 'smo242240');
smo242258v0ar.push(smo242240);
const smo242241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242241.setAttribute('id', 'smo242241');
smo242258v0ar.push(smo242241);
const smo242242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242242.setAttribute('id', 'smo242242');
smo242258v0ar.push(smo242242);
smo242258v0.addTickables(smo242258v0ar)
fmtsmo24225842.joinVoices([smo242258v0]);
const fmtsmo24323342 = new VF.Formatter();
//
// voices and notes for stave 3 42
const smo243233v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243233v0ar = [];
const smo243214 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243214.setAttribute('id', 'smo243214');
smo243233v0ar.push(smo243214);
const smo243215 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243215.setAttribute('id', 'smo243215');
smo243233v0ar.push(smo243215);
const smo243216 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243216.setAttribute('id', 'smo243216');
smo243233v0ar.push(smo243216);
const smo243217 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243217.setAttribute('id', 'smo243217');
smo243233v0ar.push(smo243217);
smo243233v0.addTickables(smo243233v0ar)
fmtsmo24323342.joinVoices([smo243233v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
const dirsmo250043 = smo241291.getStemDirection();
smo241291.setStemDirection(dirsmo250043);
smo241292.setStemDirection(dirsmo250043);
const smo250043 = new VF.Beam([smo241291,smo241292]);
const dirsmo250044 = smo241294.getStemDirection();
smo241294.setStemDirection(dirsmo250044);
smo241295.setStemDirection(dirsmo250044);
const smo250044 = new VF.Beam([smo241294,smo241295]);
 
// formatting measures in staff group smo243368
fmtsmo24035942.format([smo240359v0,smo241311v0,smo242258v0,smo243233v0], 126);
const stavesmo240359 = new VF.Stave(421, 1197, 140);
stavesmo240359.setAttribute('id', 'stavesmo240359');
stavesmo240359.setBegBarType(VF.Barline.type.NONE);
stavesmo240359.setContext(context);
stavesmo240359.draw();
smo240359v0.draw(context, stavesmo240359);
const stavesmo241311 = new VF.Stave(421, 1322, 140);
stavesmo241311.setAttribute('id', 'stavesmo241311');
stavesmo241311.setBegBarType(VF.Barline.type.NONE);
stavesmo241311.setContext(context);
stavesmo241311.draw();
smo241311v0.draw(context, stavesmo241311);
smo250043.setContext(context);
smo250043.draw();
smo250044.setContext(context);
smo250044.draw();
const stavesmo242258 = new VF.Stave(421, 1410, 140);
stavesmo242258.setAttribute('id', 'stavesmo242258');
stavesmo242258.setBegBarType(VF.Barline.type.NONE);
stavesmo242258.setContext(context);
stavesmo242258.draw();
smo242258v0.draw(context, stavesmo242258);
const stavesmo243233 = new VF.Stave(421, 1523, 140);
stavesmo243233.setAttribute('id', 'stavesmo243233');
stavesmo243233.setBegBarType(VF.Barline.type.NONE);
stavesmo243233.setContext(context);
stavesmo243233.draw();
smo243233v0.draw(context, stavesmo243233);
const fmtsmo24037643 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo240376v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240376v0ar = [];
const smo240360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240360.setAttribute('id', 'smo240360');
smo240376v0ar.push(smo240360);
smo240376v0.addTickables(smo240376v0ar)
fmtsmo24037643.joinVoices([smo240376v0]);
const fmtsmo24133043 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo241330v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241330v0ar = [];
const smo241312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo241312.setAttribute('id', 'smo241312');
smo241330v0ar.push(smo241312);
const smo241313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo241313.setAttribute('id', 'smo241313');
smo241330v0ar.push(smo241313);
const smo241314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo241314.setAttribute('id', 'smo241314');
smo241330v0ar.push(smo241314);
smo241330v0.addTickables(smo241330v0ar)
fmtsmo24133043.joinVoices([smo241330v0]);
const fmtsmo24227843 = new VF.Formatter();
//
// voices and notes for stave 2 43
const smo242278v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242278v0ar = [];
const smo242259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242259.setAttribute('id', 'smo242259');
smo242278v0ar.push(smo242259);
const smo242260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242260.setAttribute('id', 'smo242260');
smo242278v0ar.push(smo242260);
const smo242261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242261.setAttribute('id', 'smo242261');
smo242278v0ar.push(smo242261);
const smo242262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242262.setAttribute('id', 'smo242262');
smo242278v0ar.push(smo242262);
smo242278v0.addTickables(smo242278v0ar)
fmtsmo24227843.joinVoices([smo242278v0]);
const fmtsmo24325343 = new VF.Formatter();
//
// voices and notes for stave 3 43
const smo243253v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243253v0ar = [];
const smo243234 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243234.setAttribute('id', 'smo243234');
smo243253v0ar.push(smo243234);
const smo243235 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243235.setAttribute('id', 'smo243235');
smo243253v0ar.push(smo243235);
const smo243236 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243236.setAttribute('id', 'smo243236');
smo243253v0ar.push(smo243236);
const smo243237 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243237.setAttribute('id', 'smo243237');
smo243253v0ar.push(smo243237);
smo243253v0.addTickables(smo243253v0ar)
fmtsmo24325343.joinVoices([smo243253v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo24037643.format([smo240376v0,smo241330v0,smo242278v0,smo243253v0], 80);
const stavesmo240376 = new VF.Stave(561, 1197, 94);
stavesmo240376.setAttribute('id', 'stavesmo240376');
stavesmo240376.setBegBarType(VF.Barline.type.NONE);
stavesmo240376.setContext(context);
stavesmo240376.draw();
smo240376v0.draw(context, stavesmo240376);
const stavesmo241330 = new VF.Stave(561, 1322, 94);
stavesmo241330.setAttribute('id', 'stavesmo241330');
stavesmo241330.setBegBarType(VF.Barline.type.NONE);
stavesmo241330.setContext(context);
stavesmo241330.draw();
smo241330v0.draw(context, stavesmo241330);
const stavesmo242278 = new VF.Stave(561, 1410, 94);
stavesmo242278.setAttribute('id', 'stavesmo242278');
stavesmo242278.setBegBarType(VF.Barline.type.NONE);
stavesmo242278.setContext(context);
stavesmo242278.draw();
smo242278v0.draw(context, stavesmo242278);
const stavesmo243253 = new VF.Stave(561, 1523, 94);
stavesmo243253.setAttribute('id', 'stavesmo243253');
stavesmo243253.setBegBarType(VF.Barline.type.NONE);
stavesmo243253.setContext(context);
stavesmo243253.draw();
smo243253v0.draw(context, stavesmo243253);
const fmtsmo24039344 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo240393v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240393v0ar = [];
const smo240377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240377.setAttribute('id', 'smo240377');
smo240393v0ar.push(smo240377);
smo240393v0.addTickables(smo240393v0ar)
fmtsmo24039344.joinVoices([smo240393v0]);
const fmtsmo24135044 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo241350v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241350v0ar = [];
const smo241331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo241331.setAttribute('id', 'smo241331');
smo241350v0ar.push(smo241331);
const smo241332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo241332.setAttribute('id', 'smo241332');
smo241350v0ar.push(smo241332);
const smo241333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo241333.setAttribute('id', 'smo241333');
smo241350v0ar.push(smo241333);
const smo241334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo241334.setAttribute('id', 'smo241334');
smo241350v0ar.push(smo241334);
smo241350v0.addTickables(smo241350v0ar)
fmtsmo24135044.joinVoices([smo241350v0]);
const fmtsmo24229844 = new VF.Formatter();
//
// voices and notes for stave 2 44
const smo242298v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242298v0ar = [];
const smo242279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo242279.setAttribute('id', 'smo242279');
smo242298v0ar.push(smo242279);
const smo242280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo242280.setAttribute('id', 'smo242280');
smo242298v0ar.push(smo242280);
const smo242281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo242281.setAttribute('id', 'smo242281');
smo242298v0ar.push(smo242281);
const smo242282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo242282.setAttribute('id', 'smo242282');
smo242298v0ar.push(smo242282);
smo242298v0.addTickables(smo242298v0ar)
fmtsmo24229844.joinVoices([smo242298v0]);
const fmtsmo24327344 = new VF.Formatter();
//
// voices and notes for stave 3 44
const smo243273v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243273v0ar = [];
const smo243254 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo243254.setAttribute('id', 'smo243254');
smo243273v0ar.push(smo243254);
const smo243255 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo243255.setAttribute('id', 'smo243255');
smo243273v0ar.push(smo243255);
const smo243256 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo243256.setAttribute('id', 'smo243256');
smo243273v0ar.push(smo243256);
const smo243257 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo243257.setAttribute('id', 'smo243257');
smo243273v0ar.push(smo243257);
smo243273v0.addTickables(smo243273v0ar)
fmtsmo24327344.joinVoices([smo243273v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
const dirsmo250061 = smo241331.getStemDirection();
smo241331.setStemDirection(dirsmo250061);
smo241332.setStemDirection(dirsmo250061);
const smo250061 = new VF.Beam([smo241331,smo241332]);
 
// formatting measures in staff group smo243368
fmtsmo24039344.format([smo240393v0,smo241350v0,smo242298v0,smo243273v0], 103);
const stavesmo240393 = new VF.Stave(655, 1197, 117);
stavesmo240393.setAttribute('id', 'stavesmo240393');
stavesmo240393.setBegBarType(VF.Barline.type.NONE);
stavesmo240393.setContext(context);
stavesmo240393.draw();
smo240393v0.draw(context, stavesmo240393);
const stavesmo241350 = new VF.Stave(655, 1322, 117);
stavesmo241350.setAttribute('id', 'stavesmo241350');
stavesmo241350.setBegBarType(VF.Barline.type.NONE);
stavesmo241350.setContext(context);
stavesmo241350.draw();
smo241350v0.draw(context, stavesmo241350);
smo250061.setContext(context);
smo250061.draw();
const stavesmo242298 = new VF.Stave(655, 1410, 117);
stavesmo242298.setAttribute('id', 'stavesmo242298');
stavesmo242298.setBegBarType(VF.Barline.type.NONE);
stavesmo242298.setContext(context);
stavesmo242298.draw();
smo242298v0.draw(context, stavesmo242298);
const stavesmo243273 = new VF.Stave(655, 1523, 117);
stavesmo243273.setAttribute('id', 'stavesmo243273');
stavesmo243273.setBegBarType(VF.Barline.type.NONE);
stavesmo243273.setContext(context);
stavesmo243273.draw();
smo243273v0.draw(context, stavesmo243273);
const fmtsmo24041045 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo240410v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240410v0ar = [];
const smo240394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240394.setAttribute('id', 'smo240394');
smo240410v0ar.push(smo240394);
smo240410v0.addTickables(smo240410v0ar)
fmtsmo24041045.joinVoices([smo240410v0]);
const fmtsmo24137045 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo241370v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241370v0ar = [];
const smo241351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo241351.setAttribute('id', 'smo241351');
smo241370v0ar.push(smo241351);
const smo241352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo241352.setAttribute('id', 'smo241352');
smo241370v0ar.push(smo241352);
const smo241353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo241353.setAttribute('id', 'smo241353');
smo241370v0ar.push(smo241353);
const smo241354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo241354.setAttribute('id', 'smo241354');
smo241370v0ar.push(smo241354);
smo241370v0.addTickables(smo241370v0ar)
fmtsmo24137045.joinVoices([smo241370v0]);
const fmtsmo24231845 = new VF.Formatter();
//
// voices and notes for stave 2 45
const smo242318v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242318v0ar = [];
const smo242299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242299.setAttribute('id', 'smo242299');
smo242318v0ar.push(smo242299);
const smo242300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242300.setAttribute('id', 'smo242300');
smo242318v0ar.push(smo242300);
const smo242301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242301.setAttribute('id', 'smo242301');
smo242318v0ar.push(smo242301);
const smo242302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242302.setAttribute('id', 'smo242302');
smo242318v0ar.push(smo242302);
smo242318v0.addTickables(smo242318v0ar)
fmtsmo24231845.joinVoices([smo242318v0]);
const fmtsmo24329345 = new VF.Formatter();
//
// voices and notes for stave 3 45
const smo243293v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243293v0ar = [];
const smo243274 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243274.setAttribute('id', 'smo243274');
smo243293v0ar.push(smo243274);
const smo243275 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243275.setAttribute('id', 'smo243275');
smo243293v0ar.push(smo243275);
const smo243276 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243276.setAttribute('id', 'smo243276');
smo243293v0ar.push(smo243276);
const smo243277 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243277.setAttribute('id', 'smo243277');
smo243293v0ar.push(smo243277);
smo243293v0.addTickables(smo243293v0ar)
fmtsmo24329345.joinVoices([smo243293v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
const dirsmo250070 = smo241351.getStemDirection();
smo241351.setStemDirection(dirsmo250070);
smo241352.setStemDirection(dirsmo250070);
const smo250070 = new VF.Beam([smo241351,smo241352]);
 
// formatting measures in staff group smo243368
fmtsmo24041045.format([smo240410v0,smo241370v0,smo242318v0,smo243293v0], 103);
const stavesmo240410 = new VF.Stave(772, 1197, 117);
stavesmo240410.setAttribute('id', 'stavesmo240410');
stavesmo240410.setBegBarType(VF.Barline.type.NONE);
stavesmo240410.setContext(context);
stavesmo240410.draw();
smo240410v0.draw(context, stavesmo240410);
const stavesmo241370 = new VF.Stave(772, 1322, 117);
stavesmo241370.setAttribute('id', 'stavesmo241370');
stavesmo241370.setBegBarType(VF.Barline.type.NONE);
stavesmo241370.setContext(context);
stavesmo241370.draw();
smo241370v0.draw(context, stavesmo241370);
smo250070.setContext(context);
smo250070.draw();
const stavesmo242318 = new VF.Stave(772, 1410, 117);
stavesmo242318.setAttribute('id', 'stavesmo242318');
stavesmo242318.setBegBarType(VF.Barline.type.NONE);
stavesmo242318.setContext(context);
stavesmo242318.draw();
smo242318v0.draw(context, stavesmo242318);
const stavesmo243293 = new VF.Stave(772, 1523, 117);
stavesmo243293.setAttribute('id', 'stavesmo243293');
stavesmo243293.setBegBarType(VF.Barline.type.NONE);
stavesmo243293.setContext(context);
stavesmo243293.draw();
smo243293v0.draw(context, stavesmo243293);
const fmtsmo24042746 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo240427v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240427v0ar = [];
const smo240411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240411.setAttribute('id', 'smo240411');
smo240427v0ar.push(smo240411);
smo240427v0.addTickables(smo240427v0ar)
fmtsmo24042746.joinVoices([smo240427v0]);
const fmtsmo24139246 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo241392v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241392v0ar = [];
const smo241371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo241371.setAttribute('id', 'smo241371');
smo241392v0ar.push(smo241371);
const smo241372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo241372.setAttribute('id', 'smo241372');
smo241392v0ar.push(smo241372);
const smo241373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo241373.setAttribute('id', 'smo241373');
smo241392v0ar.push(smo241373);
const smo241374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo241374.setAttribute('id', 'smo241374');
smo241392v0ar.push(smo241374);
const smo241375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo241375.setAttribute('id', 'smo241375');
smo241392v0ar.push(smo241375);
const smo241376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo241376.setAttribute('id', 'smo241376');
smo241392v0ar.push(smo241376);
smo241392v0.addTickables(smo241392v0ar)
fmtsmo24139246.joinVoices([smo241392v0]);
const fmtsmo24233846 = new VF.Formatter();
//
// voices and notes for stave 2 46
const smo242338v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242338v0ar = [];
const smo242319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242319.setAttribute('id', 'smo242319');
smo242338v0ar.push(smo242319);
const smo242320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242320.setAttribute('id', 'smo242320');
smo242338v0ar.push(smo242320);
const smo242321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo242321.setAttribute('id', 'smo242321');
smo242338v0ar.push(smo242321);
const smo242322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo242322.setAttribute('id', 'smo242322');
smo242338v0ar.push(smo242322);
smo242338v0.addTickables(smo242338v0ar)
fmtsmo24233846.joinVoices([smo242338v0]);
const fmtsmo24331346 = new VF.Formatter();
//
// voices and notes for stave 3 46
const smo243313v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243313v0ar = [];
const smo243294 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo243294.setAttribute('id', 'smo243294');
smo243313v0ar.push(smo243294);
const smo243295 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo243295.setAttribute('id', 'smo243295');
smo243313v0ar.push(smo243295);
const smo243296 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo243296.setAttribute('id', 'smo243296');
smo243313v0ar.push(smo243296);
const smo243297 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo243297.setAttribute('id', 'smo243297');
smo243313v0ar.push(smo243297);
smo243313v0.addTickables(smo243313v0ar)
fmtsmo24331346.joinVoices([smo243313v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
const dirsmo250079 = smo241371.getStemDirection();
smo241371.setStemDirection(dirsmo250079);
smo241372.setStemDirection(dirsmo250079);
const smo250079 = new VF.Beam([smo241371,smo241372]);
const dirsmo250080 = smo241374.getStemDirection();
smo241374.setStemDirection(dirsmo250080);
smo241375.setStemDirection(dirsmo250080);
const smo250080 = new VF.Beam([smo241374,smo241375]);
 
// formatting measures in staff group smo243368
fmtsmo24042746.format([smo240427v0,smo241392v0,smo242338v0,smo243313v0], 126);
const stavesmo240427 = new VF.Stave(889, 1197, 140);
stavesmo240427.setAttribute('id', 'stavesmo240427');
stavesmo240427.setBegBarType(VF.Barline.type.NONE);
stavesmo240427.setContext(context);
stavesmo240427.draw();
smo240427v0.draw(context, stavesmo240427);
const stavesmo241392 = new VF.Stave(889, 1322, 140);
stavesmo241392.setAttribute('id', 'stavesmo241392');
stavesmo241392.setBegBarType(VF.Barline.type.NONE);
stavesmo241392.setContext(context);
stavesmo241392.draw();
smo241392v0.draw(context, stavesmo241392);
smo250079.setContext(context);
smo250079.draw();
smo250080.setContext(context);
smo250080.draw();
const stavesmo242338 = new VF.Stave(889, 1410, 140);
stavesmo242338.setAttribute('id', 'stavesmo242338');
stavesmo242338.setBegBarType(VF.Barline.type.NONE);
stavesmo242338.setContext(context);
stavesmo242338.draw();
smo242338v0.draw(context, stavesmo242338);
const stavesmo243313 = new VF.Stave(889, 1523, 140);
stavesmo243313.setAttribute('id', 'stavesmo243313');
stavesmo243313.setBegBarType(VF.Barline.type.NONE);
stavesmo243313.setContext(context);
stavesmo243313.draw();
smo243313v0.draw(context, stavesmo243313);
const fmtsmo24044447 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo240444v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240444v0ar = [];
const smo240428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240428.setAttribute('id', 'smo240428');
smo240444v0ar.push(smo240428);
smo240444v0.addTickables(smo240444v0ar)
fmtsmo24044447.joinVoices([smo240444v0]);
const fmtsmo24141247 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo241412v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241412v0ar = [];
const smo241393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo241393.setAttribute('id', 'smo241393');
smo241412v0ar.push(smo241393);
const smo241394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo241394.setAttribute('id', 'smo241394');
const smo241395 = new VF.Ornament('');
smo241394.addModifier(smo241395, 0);
smo241412v0ar.push(smo241394);
const smo241396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241396.setAttribute('id', 'smo241396');
smo241412v0ar.push(smo241396);
smo241412v0.addTickables(smo241412v0ar)
fmtsmo24141247.joinVoices([smo241412v0]);
const fmtsmo24235847 = new VF.Formatter();
//
// voices and notes for stave 2 47
const smo242358v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242358v0ar = [];
const smo242339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242339.setAttribute('id', 'smo242339');
smo242358v0ar.push(smo242339);
const smo242340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo242340.setAttribute('id', 'smo242340');
const smo242341 = new VF.Ornament('');
smo242340.addModifier(smo242341, 0);
smo242358v0ar.push(smo242340);
const smo242342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo242342.setAttribute('id', 'smo242342');
smo242358v0ar.push(smo242342);
smo242358v0.addTickables(smo242358v0ar)
fmtsmo24235847.joinVoices([smo242358v0]);
const fmtsmo24333247 = new VF.Formatter();
//
// voices and notes for stave 3 47
const smo243332v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243332v0ar = [];
const smo243314 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo243314.setAttribute('id', 'smo243314');
smo243332v0ar.push(smo243314);
const smo243315 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo243315.setAttribute('id', 'smo243315');
smo243332v0ar.push(smo243315);
const smo243316 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo243316.setAttribute('id', 'smo243316');
smo243332v0ar.push(smo243316);
smo243332v0.addTickables(smo243332v0ar)
fmtsmo24333247.joinVoices([smo243332v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo24044447.format([smo240444v0,smo241412v0,smo242358v0,smo243332v0], 61);
const stavesmo240444 = new VF.Stave(1029, 1197, 79);
stavesmo240444.setAttribute('id', 'stavesmo240444');
stavesmo240444.setBegBarType(VF.Barline.type.NONE);
stavesmo240444.setEndBarType(5);
stavesmo240444.setContext(context);
stavesmo240444.draw();
smo240444v0.draw(context, stavesmo240444);
const stavesmo241412 = new VF.Stave(1029, 1322, 79);
stavesmo241412.setAttribute('id', 'stavesmo241412');
stavesmo241412.setBegBarType(VF.Barline.type.NONE);
stavesmo241412.setEndBarType(5);
stavesmo241412.setContext(context);
stavesmo241412.draw();
smo241412v0.draw(context, stavesmo241412);
const stavesmo242358 = new VF.Stave(1029, 1410, 79);
stavesmo242358.setAttribute('id', 'stavesmo242358');
stavesmo242358.setBegBarType(VF.Barline.type.NONE);
stavesmo242358.setEndBarType(5);
stavesmo242358.setContext(context);
stavesmo242358.draw();
smo242358v0.draw(context, stavesmo242358);
const stavesmo243332 = new VF.Stave(1029, 1523, 79);
stavesmo243332.setAttribute('id', 'stavesmo243332');
stavesmo243332.setBegBarType(VF.Barline.type.NONE);
stavesmo243332.setEndBarType(5);
stavesmo243332.setContext(context);
stavesmo243332.draw();
smo243332v0.draw(context, stavesmo243332);
// modifier from 0-28-0-0 to 0-29-0-2
const smo250888 = new VF.TextBracket({ start: smo240024, stop: smo240050, text: 'accelerando', position: 1 });
smo250888.setLine(1).setContext(context).draw();
// modifier from 2-26-0-0 to 2-27-0-0
const smo250889 = new VF.StaveTie({ first_note: smo241952, last_note: smo241969, 
          firstNote: smo241952, lastNote: smo241969, first_indices: [0], last_indices: [0]});
smo250889.setContext(context).draw();
// modifier from 2-32-0-0 to 2-33-0-0
const smo250890 = new VF.StaveTie({ first_note: smo242058, last_note: smo242075, 
          firstNote: smo242058, lastNote: smo242075, first_indices: [0], last_indices: [0]});
smo250890.setContext(context).draw();
// modifier from 2-33-0-0 to 2-34-0-0
const smo250891 = new VF.StaveTie({ first_note: smo242075, last_note: smo242092, 
          firstNote: smo242075, lastNote: smo242092, first_indices: [0], last_indices: [0]});
smo250891.setContext(context).draw();
// modifier from 2-35-0-0 to 2-36-0-0
const smo250892 = new VF.StaveTie({ first_note: smo242109, last_note: smo242126, 
          firstNote: smo242109, lastNote: smo242126, first_indices: [0], last_indices: [0]});
smo250892.setContext(context).draw();
// modifier from 3-31-0-3 to 3-31-0-4
const smo250893 = new VF.StaveTie({ first_note: smo242998, last_note: smo242999, 
          firstNote: smo242998, lastNote: smo242999, first_indices: [0], last_indices: [0]});
smo250893.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo239977').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239979').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239981').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239983').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo239986').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239988').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo240006').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo240025').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo240027').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo240047').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo240049').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo240069').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo240071').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo240073').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo240075').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo240077').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo240079').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo240098').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo240117').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo240120').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo240122').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo240124').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo240126').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo240144').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo240146').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo240148').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo240167').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo240170').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo240172').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo240174').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo240176').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo240194').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo240196').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo240198').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo240216').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo240218').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo240220').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo240224').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo240242').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo240244').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo240246').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo240287').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo240289').setAttributeNS('', 'transform', 'translate(0 10)');
}
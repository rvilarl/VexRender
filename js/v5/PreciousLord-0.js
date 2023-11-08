// @@ Precious Lord p 1/1  by Thomas Dorsey
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = VexFlow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1421.487603305785');
svg.setAttributeNS('', 'height', '1839.5721925133687');
svg.setAttributeNS('', 'viewBox', '0 0 1166 1509');
//
// create the musical objects
VF.setFonts("Bravura","Gonville","Custom");
const fmtsmo363600 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo36360v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36360v0ar = [];
const smo36341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo36341.setAttribute('id', 'smo36341');
const smo36342 = new VF.Annotation('Pre');
smo36342.setAttribute('id', 'smo36342');
smo36342.setFont('Merriweather', 11, 'normal');
smo36342.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36341.addModifier(smo36342);
smo36342.addClass('lyric lyric-0 lyric-hyphen');
smo36360v0ar.push(smo36341);
const smo36343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bb/3/n"]}'))
smo36343.setAttribute('id', 'smo36343');
const smo36344 = new VF.Annotation('cious');
smo36344.setAttribute('id', 'smo36344');
smo36344.setFont('Merriweather', 11, 'normal');
smo36344.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36343.addModifier(smo36344);
smo36344.addClass('lyric lyric-0');
smo36360v0ar.push(smo36343);
smo36360v0.addTickables(smo36360v0ar)
fmtsmo363600.joinVoices([smo36360v0]);
const fmtsmo368020 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo36802v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36802v0ar = [];
const smo36785 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo36785.setAttribute('id', 'smo36785');
smo36802v0ar.push(smo36785);
const smo36786 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo36786.setAttribute('id', 'smo36786');
smo36802v0ar.push(smo36786);
smo36802v0.addTickables(smo36802v0ar)
fmtsmo368020.joinVoices([smo36802v0]);
// create beam groups and tuplets for format grp smo37121 before formatting
const dirsmo38322 = smo36341.getStemDirection();
smo36341.setStemDirection(dirsmo38322);
smo36343.setStemDirection(dirsmo38322);
const smo38322 = new VF.Beam([smo36341,smo36343]);
const dirsmo38324 = smo36785.getStemDirection();
smo36785.setStemDirection(dirsmo38324);
smo36786.setStemDirection(dirsmo38324);
const smo38324 = new VF.Beam([smo36785,smo36786]);
 
// formatting measures in staff group smo37121
fmtsmo363600.format([smo36360v0,smo36802v0], 91);
const stavesmo36360 = new VF.Stave(43, 178, 177);
stavesmo36360.setAttribute('id', 'stavesmo36360');
stavesmo36360.setBegBarType(1);
stavesmo36360.addClef('treble');
stavesmo36360.addTimeSignature('3/4');
const keysmo36360 = new VF.KeySignature('F');
keysmo36360.addToStave(stavesmo36360);
stavesmo36360.setContext(context);
stavesmo36360.draw();
smo36360v0.draw(context, stavesmo36360);
smo38322.setContext(context);
smo38322.draw();
const stavesmo36802 = new VF.Stave(43, 333, 177);
stavesmo36802.setAttribute('id', 'stavesmo36802');
stavesmo36802.setBegBarType(1);
stavesmo36802.addClef('bass');
stavesmo36802.addTimeSignature('3/4');
const keysmo36802 = new VF.KeySignature('F');
keysmo36802.addToStave(stavesmo36802);
stavesmo36802.setContext(context);
stavesmo36802.draw();
smo36802v0.draw(context, stavesmo36802);
smo38324.setContext(context);
smo38324.draw();
const leftsmo37121stavesmo363601 = new VF.StaveConnector(stavesmo36360, stavesmo36802).setType(3);
leftsmo37121stavesmo363601.setContext(context).draw();
const fmtsmo363871 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo36387v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36387v0ar = [];
const smo36361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n"]}'))
smo36361.setAttribute('id', 'smo36361');
const smo36362 = new VF.Annotation('Lord,');
smo36362.setAttribute('id', 'smo36362');
smo36362.setFont('Merriweather', 11, 'normal');
smo36362.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36361.addModifier(smo36362);
smo36362.addClass('lyric lyric-0');
const smo36363 = new VF.Annotation('dark');
smo36363.setAttribute('id', 'smo36363');
smo36363.setFont('Merriweather', 11, 'normal');
smo36363.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36361.addModifier(smo36363);
smo36363.addClass('lyric lyric-1 lyric-hyphen');
const smo36364 = new VF.ChordSymbol();
smo36364.setAttribute('id', 'smo36364');
smo36364.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo36364.setFont('Roboto Slab', 14).setReportWidth(false);
smo36361.addModifier(smo36364, 0);
smo36387v0ar.push(smo36361);
const smo36365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo36365.setAttribute('id', 'smo36365');
const smo36368 = new VF.Annotation('take');
smo36368.setAttribute('id', 'smo36368');
smo36368.setFont('Merriweather', 11, 'normal');
smo36368.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36365.addModifier(smo36368);
smo36368.addClass('lyric lyric-0');
const smo36366 = new VF.Annotation('ness');
smo36366.setAttribute('id', 'smo36366');
smo36366.setFont('Merriweather', 11, 'normal');
smo36366.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36365.addModifier(smo36366);
smo36366.addClass('lyric lyric-1');
const smo36367 = new VF.ChordSymbol();
smo36367.setAttribute('id', 'smo36367');
smo36367.addGlyphOrText('Gm', JSON.parse('{"text":"Gm","symbolModifier":1}'));
smo36367.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo36367.setFont('Roboto Slab', 14).setReportWidth(false);
smo36365.addModifier(smo36367, 0);
smo36387v0ar.push(smo36365);
const smo36369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo36369.setAttribute('id', 'smo36369');
const smo36370 = new VF.Annotation('my');
smo36370.setAttribute('id', 'smo36370');
smo36370.setFont('Merriweather', 11, 'normal');
smo36370.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36369.addModifier(smo36370);
smo36370.addClass('lyric lyric-0');
const smo36371 = new VF.Annotation('a');
smo36371.setAttribute('id', 'smo36371');
smo36371.setFont('Merriweather', 11, 'normal');
smo36371.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36369.addModifier(smo36371);
smo36371.addClass('lyric lyric-1 lyric-hyphen');
smo36387v0ar.push(smo36369);
smo36387v0.addTickables(smo36387v0ar)
fmtsmo363871.joinVoices([smo36387v0]);
const fmtsmo368221 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo36822v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36822v0ar = [];
const smo36803 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo36803.setAttribute('id', 'smo36803');
smo36822v0ar.push(smo36803);
const smo36804 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","fn/3/n"]}'))
smo36804.setAttribute('id', 'smo36804');
smo36822v0ar.push(smo36804);
const smo36805 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","en/3/n"]}'))
smo36805.setAttribute('id', 'smo36805');
smo36822v0ar.push(smo36805);
smo36822v0.addTickables(smo36822v0ar)
fmtsmo368221.joinVoices([smo36822v0]);
// create beam groups and tuplets for format grp smo37121 before formatting
const dirsmo38326 = smo36365.getStemDirection();
smo36365.setStemDirection(dirsmo38326);
smo36369.setStemDirection(dirsmo38326);
const smo38326 = new VF.Beam([smo36365,smo36369]);
const dirsmo38328 = smo36804.getStemDirection();
smo36804.setStemDirection(dirsmo38328);
smo36805.setStemDirection(dirsmo38328);
const smo38328 = new VF.Beam([smo36804,smo36805]);
 
// formatting measures in staff group smo37121
fmtsmo363871.format([smo36387v0,smo36822v0], 159);
const stavesmo36387 = new VF.Stave(220, 178, 182);
stavesmo36387.setAttribute('id', 'stavesmo36387');
stavesmo36387.setBegBarType(4);
stavesmo36387.setContext(context);
stavesmo36387.draw();
smo36387v0.draw(context, stavesmo36387);
smo38326.setContext(context);
smo38326.draw();
const stavesmo36822 = new VF.Stave(220, 333, 182);
stavesmo36822.setAttribute('id', 'stavesmo36822');
stavesmo36822.setBegBarType(4);
stavesmo36822.setContext(context);
stavesmo36822.draw();
smo36822v0.draw(context, stavesmo36822);
smo38328.setContext(context);
smo38328.draw();
const fmtsmo364142 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo36414v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36414v0ar = [];
const smo36388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo36388.setAttribute('id', 'smo36388');
const smo36389 = new VF.Annotation('hand,');
smo36389.setAttribute('id', 'smo36389');
smo36389.setFont('Merriweather', 11, 'normal');
smo36389.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36388.addModifier(smo36389);
smo36389.addClass('lyric lyric-0');
const smo36390 = new VF.Annotation('pears');
smo36390.setAttribute('id', 'smo36390');
smo36390.setFont('Merriweather', 11, 'normal');
smo36390.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36388.addModifier(smo36390);
smo36390.addClass('lyric lyric-1');
const smo36391 = new VF.ChordSymbol();
smo36391.setAttribute('id', 'smo36391');
smo36391.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo36391.setFont('Roboto Slab', 14).setReportWidth(false);
smo36388.addModifier(smo36391, 0);
smo36414v0ar.push(smo36388);
const smo36392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n","an/4/n"]}'))
smo36392.setAttribute('id', 'smo36392');
const smo36394 = new VF.Annotation('lead');
smo36394.setAttribute('id', 'smo36394');
smo36394.setFont('Merriweather', 11, 'normal');
smo36394.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36392.addModifier(smo36394);
smo36394.addClass('lyric lyric-0');
const smo36393 = new VF.Annotation('and');
smo36393.setAttribute('id', 'smo36393');
smo36393.setFont('Merriweather', 11, 'normal');
smo36393.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36392.addModifier(smo36393);
smo36393.addClass('lyric lyric-1');
smo36414v0ar.push(smo36392);
const smo36395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["c#/4/n","an/4/n"]}'))
smo36395.setAttribute('id', 'smo36395');
const smo363950acc = new VF.Accidental('#');
smo36395.addModifier(smo363950acc, 0);
const smo36396 = new VF.Annotation('me');
smo36396.setAttribute('id', 'smo36396');
smo36396.setFont('Merriweather', 11, 'normal');
smo36396.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36395.addModifier(smo36396);
smo36396.addClass('lyric lyric-0');
const smo36397 = new VF.Annotation('the');
smo36397.setAttribute('id', 'smo36397');
smo36397.setFont('Merriweather', 11, 'normal');
smo36397.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36395.addModifier(smo36397);
smo36397.addClass('lyric lyric-1');
const smo36398 = new VF.ChordSymbol();
smo36398.setAttribute('id', 'smo36398');
smo36398.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo36398.addGlyphOrText('', JSON.parse('{"glyph":"","symbolModifier":3}'));
smo36398.addGlyphOrText('5', JSON.parse('{"text":"5","symbolModifier":3}'));
smo36398.setFont('Roboto Slab', 14).setReportWidth(false);
smo36395.addModifier(smo36398, 0);
smo36414v0ar.push(smo36395);
smo36414v0.addTickables(smo36414v0ar)
fmtsmo364142.joinVoices([smo36414v0]);
const fmtsmo368422 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo36842v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36842v0ar = [];
const smo36823 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n","fn/3/n"]}'))
smo36823.setAttribute('id', 'smo36823');
smo36842v0ar.push(smo36823);
const smo36825 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo36825.setAttribute('id', 'smo36825');
smo36842v0ar.push(smo36825);
const smo36826 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo36826.setAttribute('id', 'smo36826');
smo36842v0ar.push(smo36826);
smo36842v0.addTickables(smo36842v0ar)
fmtsmo368422.joinVoices([smo36842v0]);
// create beam groups and tuplets for format grp smo37121 before formatting
const dirsmo38332 = smo36392.getStemDirection();
smo36392.setStemDirection(dirsmo38332);
smo36395.setStemDirection(dirsmo38332);
const smo38332 = new VF.Beam([smo36392,smo36395]);
const dirsmo38334 = smo36825.getStemDirection();
smo36825.setStemDirection(dirsmo38334);
smo36826.setStemDirection(dirsmo38334);
const smo38334 = new VF.Beam([smo36825,smo36826]);
 
// formatting measures in staff group smo37121
fmtsmo364142.format([smo36414v0,smo36842v0], 160);
const stavesmo36414 = new VF.Stave(402, 178, 174);
stavesmo36414.setAttribute('id', 'stavesmo36414');
stavesmo36414.setBegBarType(VF.Barline.type.NONE);
stavesmo36414.setContext(context);
stavesmo36414.draw();
smo36414v0.draw(context, stavesmo36414);
smo38332.setContext(context);
smo38332.draw();
const stavesmo36842 = new VF.Stave(402, 333, 174);
stavesmo36842.setAttribute('id', 'stavesmo36842');
stavesmo36842.setBegBarType(VF.Barline.type.NONE);
stavesmo36842.setContext(context);
stavesmo36842.draw();
smo36842v0.draw(context, stavesmo36842);
smo38334.setContext(context);
smo38334.draw();
const fmtsmo364413 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo36441v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36441v0ar = [];
const smo36415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","gn/4/n"]}'))
smo36415.setAttribute('id', 'smo36415');
const smo36416 = new VF.Annotation('on,');
smo36416.setAttribute('id', 'smo36416');
smo36416.setFont('Merriweather', 11, 'normal');
smo36416.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36415.addModifier(smo36416);
smo36416.addClass('lyric lyric-0');
const smo36417 = new VF.Annotation('night');
smo36417.setAttribute('id', 'smo36417');
smo36417.setFont('Merriweather', 11, 'normal');
smo36417.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36415.addModifier(smo36417);
smo36417.addClass('lyric lyric-1');
const smo36418 = new VF.ChordSymbol();
smo36418.setAttribute('id', 'smo36418');
smo36418.addGlyphOrText('Gm', JSON.parse('{"text":"Gm","symbolModifier":1}'));
smo36418.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo36418.setFont('Roboto Slab', 14).setReportWidth(false);
smo36415.addModifier(smo36418, 0);
smo36441v0ar.push(smo36415);
const smo36419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","fn/4/n"]}'))
smo36419.setAttribute('id', 'smo36419');
const smo36420 = new VF.Annotation('let');
smo36420.setAttribute('id', 'smo36420');
smo36420.setFont('Merriweather', 11, 'normal');
smo36420.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36419.addModifier(smo36420);
smo36420.addClass('lyric lyric-0');
const smo36421 = new VF.Annotation('dra');
smo36421.setAttribute('id', 'smo36421');
smo36421.setFont('Merriweather', 11, 'normal');
smo36421.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36419.addModifier(smo36421);
smo36421.addClass('lyric lyric-1 lyric-hyphen');
const smo36422 = new VF.ChordSymbol();
smo36422.setAttribute('id', 'smo36422');
smo36422.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1}'));
smo36422.addGlyphOrText('', JSON.parse('{"glyph":"","symbolModifier":1}'));
smo36422.setFont('Roboto Slab', 14).setReportWidth(false);
smo36419.addModifier(smo36422, 0);
smo36441v0ar.push(smo36419);
const smo36423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","fn/4/n"]}'))
smo36423.setAttribute('id', 'smo36423');
const smo36424 = new VF.Annotation('me');
smo36424.setAttribute('id', 'smo36424');
smo36424.setFont('Merriweather', 11, 'normal');
smo36424.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36423.addModifier(smo36424);
smo36424.addClass('lyric lyric-0');
const smo36425 = new VF.Annotation('ws');
smo36425.setAttribute('id', 'smo36425');
smo36425.setFont('Merriweather', 11, 'normal');
smo36425.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36423.addModifier(smo36425);
smo36425.addClass('lyric lyric-1');
smo36441v0ar.push(smo36423);
smo36441v0.addTickables(smo36441v0ar)
fmtsmo364413.joinVoices([smo36441v0]);
const fmtsmo368613 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo36861v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36861v0ar = [];
const smo36843 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","fn/3/n"]}'))
smo36843.setAttribute('id', 'smo36843');
smo36861v0ar.push(smo36843);
const smo36844 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","fn/3/n"]}'))
smo36844.setAttribute('id', 'smo36844');
smo36861v0ar.push(smo36844);
const smo36845 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","fn/3/n"]}'))
smo36845.setAttribute('id', 'smo36845');
smo36861v0ar.push(smo36845);
smo36861v0.addTickables(smo36861v0ar)
fmtsmo368613.joinVoices([smo36861v0]);
// create beam groups and tuplets for format grp smo37121 before formatting
const dirsmo38338 = smo36419.getStemDirection();
smo36419.setStemDirection(dirsmo38338);
smo36423.setStemDirection(dirsmo38338);
const smo38338 = new VF.Beam([smo36419,smo36423]);
const dirsmo38340 = smo36844.getStemDirection();
smo36844.setStemDirection(dirsmo38340);
smo36845.setStemDirection(dirsmo38340);
const smo38340 = new VF.Beam([smo36844,smo36845]);
 
// formatting measures in staff group smo37121
fmtsmo364413.format([smo36441v0,smo36861v0], 145);
const stavesmo36441 = new VF.Stave(576, 178, 159);
stavesmo36441.setAttribute('id', 'stavesmo36441');
stavesmo36441.setBegBarType(VF.Barline.type.NONE);
stavesmo36441.setContext(context);
stavesmo36441.draw();
smo36441v0.draw(context, stavesmo36441);
smo38338.setContext(context);
smo38338.draw();
const stavesmo36861 = new VF.Stave(576, 333, 159);
stavesmo36861.setAttribute('id', 'stavesmo36861');
stavesmo36861.setBegBarType(VF.Barline.type.NONE);
stavesmo36861.setContext(context);
stavesmo36861.draw();
smo36861v0.draw(context, stavesmo36861);
smo38340.setContext(context);
smo38340.draw();
const fmtsmo364704 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo36470v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36470v0ar = [];
const smo36442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo36442.setAttribute('id', 'smo36442');
const smo36443 = new VF.Annotation('sta');
smo36443.setAttribute('id', 'smo36443');
smo36443.setFont('Merriweather', 11, 'normal');
smo36443.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36442.addModifier(smo36443);
smo36443.addClass('lyric lyric-0 lyric-hyphen');
const smo36444 = new VF.Annotation('ne');
smo36444.setAttribute('id', 'smo36444');
smo36444.setFont('Merriweather', 11, 'normal');
smo36444.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36442.addModifier(smo36444);
smo36444.addClass('lyric lyric-1 lyric-hyphen');
smo36470v0ar.push(smo36442);
const smo36445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo36445.setAttribute('id', 'smo36445');
smo36445.addModifier(new VF.Dot(), 0);
smo36445.addModifier(new VF.Dot(), 1);
const smo36446 = new VF.Annotation('nd');
smo36446.setAttribute('id', 'smo36446');
smo36446.setFont('Merriweather', 11, 'normal');
smo36446.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36445.addModifier(smo36446);
smo36446.addClass('lyric lyric-0');
const smo36447 = new VF.Annotation('ar');
smo36447.setAttribute('id', 'smo36447');
smo36447.setFont('Merriweather', 11, 'normal');
smo36447.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36445.addModifier(smo36447);
smo36447.addClass('lyric lyric-1');
smo36470v0ar.push(smo36445);
const smo36448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/3/n","dn/4/n"]}'))
smo36448.setAttribute('id', 'smo36448');
const smo364480acc = new VF.Accidental('b');
smo36448.addModifier(smo364480acc, 0);
const smo36449 = new VF.Annotation('I');
smo36449.setAttribute('id', 'smo36449');
smo36449.setFont('Merriweather', 11, 'normal');
smo36449.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36448.addModifier(smo36449);
smo36449.addClass('lyric lyric-0');
const smo36450 = new VF.Annotation('when');
smo36450.setAttribute('id', 'smo36450');
smo36450.setFont('Merriweather', 11, 'normal');
smo36450.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36448.addModifier(smo36450);
smo36450.addClass('lyric lyric-1');
const smo36451 = new VF.ChordSymbol();
smo36451.setAttribute('id', 'smo36451');
smo36451.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1}'));
smo36451.addGlyphOrText('', JSON.parse('{"glyph":"","symbolModifier":3}'));
smo36451.setFont('Roboto Slab', 14).setReportWidth(false);
smo36448.addModifier(smo36451, 0);
smo36470v0ar.push(smo36448);
const smo36452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/3/n","dn/4/n"]}'))
smo36452.setAttribute('id', 'smo36452');
const smo36453 = new VF.Annotation('am');
smo36453.setAttribute('id', 'smo36453');
smo36453.setFont('Merriweather', 11, 'normal');
smo36453.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36452.addModifier(smo36453);
smo36453.addClass('lyric lyric-0');
const smo36454 = new VF.Annotation('my');
smo36454.setAttribute('id', 'smo36454');
smo36454.setFont('Merriweather', 11, 'normal');
smo36454.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36452.addModifier(smo36454);
smo36454.addClass('lyric lyric-1');
smo36470v0ar.push(smo36452);
smo36470v0.addTickables(smo36470v0ar)
fmtsmo364704.joinVoices([smo36470v0]);
const fmtsmo368834 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo36883v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36883v0ar = [];
const smo36862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","fn/3/n"]}'))
smo36862.setAttribute('id', 'smo36862');
smo36883v0ar.push(smo36862);
const smo36864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bb/2/n","dn/3/n"]}'))
smo36864.setAttribute('id', 'smo36864');
smo36864.addModifier(new VF.Dot(), 0);
smo36864.addModifier(new VF.Dot(), 1);
smo36883v0ar.push(smo36864);
const smo36866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo36866.setAttribute('id', 'smo36866');
smo36883v0ar.push(smo36866);
const smo36867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo36867.setAttribute('id', 'smo36867');
smo36883v0ar.push(smo36867);
smo36883v0.addTickables(smo36883v0ar)
fmtsmo368834.joinVoices([smo36883v0]);
// create beam groups and tuplets for format grp smo37121 before formatting
const dirsmo38344 = smo36448.getStemDirection();
smo36448.setStemDirection(dirsmo38344);
smo36452.setStemDirection(dirsmo38344);
const smo38344 = new VF.Beam([smo36448,smo36452]);
const dirsmo38346 = smo36866.getStemDirection();
smo36866.setStemDirection(dirsmo38346);
smo36867.setStemDirection(dirsmo38346);
const smo38346 = new VF.Beam([smo36866,smo36867]);
 
// formatting measures in staff group smo37121
fmtsmo364704.format([smo36470v0,smo36883v0], 187);
const stavesmo36470 = new VF.Stave(735, 178, 201);
stavesmo36470.setAttribute('id', 'stavesmo36470');
stavesmo36470.setBegBarType(VF.Barline.type.NONE);
stavesmo36470.setContext(context);
stavesmo36470.draw();
smo36470v0.draw(context, stavesmo36470);
smo38344.setContext(context);
smo38344.draw();
const stavesmo36883 = new VF.Stave(735, 333, 201);
stavesmo36883.setAttribute('id', 'stavesmo36883');
stavesmo36883.setBegBarType(VF.Barline.type.NONE);
stavesmo36883.setContext(context);
stavesmo36883.draw();
smo36883v0.draw(context, stavesmo36883);
smo38346.setContext(context);
smo38346.draw();
const fmtsmo364975 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo36497v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36497v0ar = [];
const smo36471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n"]}'))
smo36471.setAttribute('id', 'smo36471');
const smo36472 = new VF.Annotation('tired');
smo36472.setAttribute('id', 'smo36472');
smo36472.setFont('Merriweather', 11, 'normal');
smo36472.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36471.addModifier(smo36472);
smo36472.addClass('lyric lyric-0');
const smo36473 = new VF.Annotation('life');
smo36473.setAttribute('id', 'smo36473');
smo36473.setFont('Merriweather', 11, 'normal');
smo36473.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36471.addModifier(smo36473);
smo36473.addClass('lyric lyric-1');
const smo36474 = new VF.ChordSymbol();
smo36474.setAttribute('id', 'smo36474');
smo36474.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo36474.setFont('Roboto Slab', 14).setReportWidth(false);
smo36471.addModifier(smo36474, 0);
smo36497v0ar.push(smo36471);
const smo36475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo36475.setAttribute('id', 'smo36475');
const smo36476 = new VF.Annotation('I');
smo36476.setAttribute('id', 'smo36476');
smo36476.setFont('Merriweather', 11, 'normal');
smo36476.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36475.addModifier(smo36476);
smo36476.addClass('lyric lyric-0');
const smo36478 = new VF.ChordSymbol();
smo36478.setAttribute('id', 'smo36478');
smo36478.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo36478.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo36478.setFont('Roboto Slab', 14).setReportWidth(false);
smo36475.addModifier(smo36478, 0);
smo36497v0ar.push(smo36475);
const smo36479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo36479.setAttribute('id', 'smo36479');
const smo36480 = new VF.Annotation('am');
smo36480.setAttribute('id', 'smo36480');
smo36480.setFont('Merriweather', 11, 'normal');
smo36480.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36479.addModifier(smo36480);
smo36480.addClass('lyric lyric-0');
const smo36481 = new VF.Annotation('is');
smo36481.setAttribute('id', 'smo36481');
smo36481.setFont('Merriweather', 11, 'normal');
smo36481.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36479.addModifier(smo36481);
smo36481.addClass('lyric lyric-1 lyric-hyphen');
smo36497v0ar.push(smo36479);
smo36497v0.addTickables(smo36497v0ar)
fmtsmo364975.joinVoices([smo36497v0]);
const fmtsmo369045 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo36904v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36904v0ar = [];
const smo36884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","fn/3/n"]}'))
smo36884.setAttribute('id', 'smo36884');
smo36904v0ar.push(smo36884);
const smo36886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","en/3/n"]}'))
smo36886.setAttribute('id', 'smo36886');
smo36904v0ar.push(smo36886);
const smo36888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","en/3/n"]}'))
smo36888.setAttribute('id', 'smo36888');
smo36904v0ar.push(smo36888);
smo36904v0.addTickables(smo36904v0ar)
fmtsmo369045.joinVoices([smo36904v0]);
// create beam groups and tuplets for format grp smo37121 before formatting
const dirsmo38350 = smo36475.getStemDirection();
smo36475.setStemDirection(dirsmo38350);
smo36479.setStemDirection(dirsmo38350);
const smo38350 = new VF.Beam([smo36475,smo36479]);
const dirsmo38352 = smo36886.getStemDirection();
smo36886.setStemDirection(dirsmo38352);
smo36888.setStemDirection(dirsmo38352);
const smo38352 = new VF.Beam([smo36886,smo36888]);
 
// formatting measures in staff group smo37121
fmtsmo364975.format([smo36497v0,smo36904v0], 128);
const stavesmo36497 = new VF.Stave(936, 178, 142);
stavesmo36497.setAttribute('id', 'stavesmo36497');
stavesmo36497.setBegBarType(VF.Barline.type.NONE);
stavesmo36497.setContext(context);
stavesmo36497.draw();
smo36497v0.draw(context, stavesmo36497);
smo38350.setContext(context);
smo38350.draw();
const stavesmo36904 = new VF.Stave(936, 333, 142);
stavesmo36904.setAttribute('id', 'stavesmo36904');
stavesmo36904.setBegBarType(VF.Barline.type.NONE);
stavesmo36904.setContext(context);
stavesmo36904.draw();
smo36904v0.draw(context, stavesmo36904);
smo38352.setContext(context);
smo38352.draw();
const rightsmo37121stavesmo364971 = new VF.StaveConnector(stavesmo36497, stavesmo36904).setType(0);
rightsmo37121stavesmo364971.setContext(context).draw();
const fmtsmo365246 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo36524v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36524v0ar = [];
const smo36498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","fn/4/n"]}'))
smo36498.setAttribute('id', 'smo36498');
const smo36499 = new VF.Annotation('weak');
smo36499.setAttribute('id', 'smo36499');
smo36499.setFont('Merriweather', 11, 'normal');
smo36499.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36498.addModifier(smo36499);
smo36499.addClass('lyric lyric-0');
const smo36500 = new VF.Annotation('al');
smo36500.setAttribute('id', 'smo36500');
smo36500.setFont('Merriweather', 11, 'normal');
smo36500.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36498.addModifier(smo36500);
smo36500.addClass('lyric lyric-1 lyric-hyphen');
const smo36501 = new VF.ChordSymbol();
smo36501.setAttribute('id', 'smo36501');
smo36501.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo36501.setFont('Roboto Slab', 14).setReportWidth(false);
smo36498.addModifier(smo36501, 0);
smo36524v0ar.push(smo36498);
const smo36502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n","an/4/n"]}'))
smo36502.setAttribute('id', 'smo36502');
const smo365020acc = new VF.Accidental('n');
smo36502.addModifier(smo365020acc, 0);
const smo36503 = new VF.Annotation('I');
smo36503.setAttribute('id', 'smo36503');
smo36503.setFont('Merriweather', 11, 'normal');
smo36503.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36502.addModifier(smo36503);
smo36503.addClass('lyric lyric-0');
const smo36504 = new VF.Annotation('most');
smo36504.setAttribute('id', 'smo36504');
smo36504.setFont('Merriweather', 11, 'normal');
smo36504.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36502.addModifier(smo36504);
smo36504.addClass('lyric lyric-1');
const smo36505 = new VF.ChordSymbol();
smo36505.setAttribute('id', 'smo36505');
smo36505.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo36505.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo36505.setFont('Roboto Slab', 14).setReportWidth(false);
smo36502.addModifier(smo36505, 0);
smo36524v0ar.push(smo36502);
const smo36506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n","an/4/n"]}'))
smo36506.setAttribute('id', 'smo36506');
const smo36507 = new VF.Annotation('am');
smo36507.setAttribute('id', 'smo36507');
smo36507.setFont('Merriweather', 11, 'normal');
smo36507.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36506.addModifier(smo36507);
smo36507.addClass('lyric lyric-0');
smo36524v0ar.push(smo36506);
smo36524v0.addTickables(smo36524v0ar)
fmtsmo365246.joinVoices([smo36524v0]);
const fmtsmo369236 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo36923v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36923v0ar = [];
const smo36905 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo36905.setAttribute('id', 'smo36905');
smo36923v0ar.push(smo36905);
const smo36906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","fn/3/n"]}'))
smo36906.setAttribute('id', 'smo36906');
smo36923v0ar.push(smo36906);
const smo36907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","fn/3/n"]}'))
smo36907.setAttribute('id', 'smo36907');
smo36923v0ar.push(smo36907);
smo36923v0.addTickables(smo36923v0ar)
fmtsmo369236.joinVoices([smo36923v0]);
// create beam groups and tuplets for format grp smo37121 before formatting
const dirsmo38362 = smo36502.getStemDirection();
smo36502.setStemDirection(dirsmo38362);
smo36506.setStemDirection(dirsmo38362);
const smo38362 = new VF.Beam([smo36502,smo36506]);
const dirsmo38364 = smo36906.getStemDirection();
smo36906.setStemDirection(dirsmo38364);
smo36907.setStemDirection(dirsmo38364);
const smo38364 = new VF.Beam([smo36906,smo36907]);
 
// formatting measures in staff group smo37121
fmtsmo365246.format([smo36524v0,smo36923v0], 194);
const stavesmo36524 = new VF.Stave(43, 519, 259);
stavesmo36524.setAttribute('id', 'stavesmo36524');
stavesmo36524.setBegBarType(1);
stavesmo36524.addClef('treble');
const keysmo36524 = new VF.KeySignature('F');
keysmo36524.addToStave(stavesmo36524);
stavesmo36524.setContext(context);
stavesmo36524.draw();
smo36524v0.draw(context, stavesmo36524);
smo38362.setContext(context);
smo38362.draw();
const stavesmo36923 = new VF.Stave(43, 705, 259);
stavesmo36923.setAttribute('id', 'stavesmo36923');
stavesmo36923.setBegBarType(1);
stavesmo36923.addClef('bass');
const keysmo36923 = new VF.KeySignature('F');
keysmo36923.addToStave(stavesmo36923);
stavesmo36923.setContext(context);
stavesmo36923.draw();
smo36923v0.draw(context, stavesmo36923);
smo38364.setContext(context);
smo38364.draw();
const leftsmo37121stavesmo365241 = new VF.StaveConnector(stavesmo36524, stavesmo36923).setType(3);
leftsmo37121stavesmo365241.setContext(context).draw();
const fmtsmo365487 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo36548v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36548v0ar = [];
const smo36525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n","gn/4/n"]}'))
smo36525.setAttribute('id', 'smo36525');
const smo36526 = new VF.Annotation('worn');
smo36526.setAttribute('id', 'smo36526');
smo36526.setFont('Merriweather', 11, 'normal');
smo36526.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36525.addModifier(smo36526);
smo36526.addClass('lyric lyric-0');
const smo36527 = new VF.Annotation('gone');
smo36527.setAttribute('id', 'smo36527');
smo36527.setFont('Merriweather', 11, 'normal');
smo36527.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36525.addModifier(smo36527);
smo36527.addClass('lyric lyric-1');
const smo36528 = new VF.ChordSymbol();
smo36528.setAttribute('id', 'smo36528');
smo36528.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo36528.setFont('Roboto Slab', 14).setReportWidth(false);
smo36525.addModifier(smo36528, 0);
smo36548v0ar.push(smo36525);
const smo36529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo36529.setAttribute('id', 'smo36529');
const smo365290acc = new VF.Accidental('n');
smo36529.addModifier(smo365290acc, 0);
const smo36530 = new VF.Annotation('-');
smo36530.setAttribute('id', 'smo36530');
smo36530.setFont('Merriweather', 11, 'normal');
smo36530.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36529.addModifier(smo36530);
smo36530.addClass('lyric lyric-0 lyric-hyphen');
const smo36531 = new VF.Annotation('-');
smo36531.setAttribute('id', 'smo36531');
smo36531.setFont('Merriweather', 11, 'normal');
smo36531.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36529.addModifier(smo36531);
smo36531.addClass('lyric lyric-1 lyric-hyphen');
const smo36532 = new VF.ChordSymbol();
smo36532.setAttribute('id', 'smo36532');
smo36532.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo36532.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo36532.setFont('Roboto Slab', 14).setReportWidth(false);
smo36529.addModifier(smo36532, 0);
smo36548v0ar.push(smo36529);
smo36548v0.addTickables(smo36548v0ar)
fmtsmo365487.joinVoices([smo36548v0]);
const fmtsmo369417 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo36941v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36941v0ar = [];
const smo36924 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","en/3/n"]}'))
smo36924.setAttribute('id', 'smo36924');
smo36941v0ar.push(smo36924);
const smo36925 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","fn/3/n"]}'))
smo36925.setAttribute('id', 'smo36925');
smo36941v0ar.push(smo36925);
smo36941v0.addTickables(smo36941v0ar)
fmtsmo369417.joinVoices([smo36941v0]);
// create beam groups and tuplets for format grp smo37121 before formatting
 
// formatting measures in staff group smo37121
fmtsmo365487.format([smo36548v0,smo36941v0], 107);
const stavesmo36548 = new VF.Stave(302, 519, 121);
stavesmo36548.setAttribute('id', 'stavesmo36548');
stavesmo36548.setBegBarType(VF.Barline.type.NONE);
stavesmo36548.setContext(context);
stavesmo36548.draw();
smo36548v0.draw(context, stavesmo36548);
const stavesmo36941 = new VF.Stave(302, 705, 121);
stavesmo36941.setAttribute('id', 'stavesmo36941');
stavesmo36941.setBegBarType(VF.Barline.type.NONE);
stavesmo36941.setContext(context);
stavesmo36941.draw();
smo36941v0.draw(context, stavesmo36941);
const fmtsmo365758 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo36575v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36575v0ar = [];
const smo36549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n","gn/4/n"]}'))
smo36549.setAttribute('id', 'smo36549');
const smo36550 = new VF.Annotation('-');
smo36550.setAttribute('id', 'smo36550');
smo36550.setFont('Merriweather', 11, 'normal');
smo36550.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36549.addModifier(smo36550);
smo36550.addClass('lyric lyric-0 lyric-hyphen');
const smo36551 = new VF.Annotation('-');
smo36551.setAttribute('id', 'smo36551');
smo36551.setFont('Merriweather', 11, 'normal');
smo36551.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36549.addModifier(smo36551);
smo36551.addClass('lyric lyric-1 lyric-hyphen');
const smo36552 = new VF.ChordSymbol();
smo36552.setAttribute('id', 'smo36552');
smo36552.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo36552.setFont('Roboto Slab', 14).setReportWidth(false);
smo36549.addModifier(smo36552, 0);
smo36575v0ar.push(smo36549);
const smo36553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","an/4/n"]}'))
smo36553.setAttribute('id', 'smo36553');
const smo36554 = new VF.Annotation('Through');
smo36554.setAttribute('id', 'smo36554');
smo36554.setFont('Merriweather', 11, 'normal');
smo36554.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36553.addModifier(smo36554);
smo36554.addClass('lyric lyric-0');
const smo36555 = new VF.Annotation('at');
smo36555.setAttribute('id', 'smo36555');
smo36555.setFont('Merriweather', 11, 'normal');
smo36555.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36553.addModifier(smo36555);
smo36555.addClass('lyric lyric-1');
const smo36556 = new VF.ChordSymbol();
smo36556.setAttribute('id', 'smo36556');
smo36556.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo36556.setFont('Roboto Slab', 14).setReportWidth(false);
smo36553.addModifier(smo36556, 0);
smo36575v0ar.push(smo36553);
const smo36557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n"]}'))
smo36557.setAttribute('id', 'smo36557');
const smo36558 = new VF.Annotation('the');
smo36558.setAttribute('id', 'smo36558');
smo36558.setFont('Merriweather', 11, 'normal');
smo36558.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36557.addModifier(smo36558);
smo36558.addClass('lyric lyric-0');
const smo36559 = new VF.Annotation('the');
smo36559.setAttribute('id', 'smo36559');
smo36559.setFont('Merriweather', 11, 'normal');
smo36559.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36557.addModifier(smo36559);
smo36559.addClass('lyric lyric-1');
smo36575v0ar.push(smo36557);
smo36575v0.addTickables(smo36575v0ar)
fmtsmo365758.joinVoices([smo36575v0]);
const fmtsmo369608 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo36960v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36960v0ar = [];
const smo36942 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n"]}'))
smo36942.setAttribute('id', 'smo36942');
smo36960v0ar.push(smo36942);
const smo36943 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo36943.setAttribute('id', 'smo36943');
smo36960v0ar.push(smo36943);
const smo36944 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo36944.setAttribute('id', 'smo36944');
smo36960v0ar.push(smo36944);
smo36960v0.addTickables(smo36960v0ar)
fmtsmo369608.joinVoices([smo36960v0]);
// create beam groups and tuplets for format grp smo37121 before formatting
const dirsmo38372 = smo36553.getStemDirection();
smo36553.setStemDirection(dirsmo38372);
smo36557.setStemDirection(dirsmo38372);
const smo38372 = new VF.Beam([smo36553,smo36557]);
const dirsmo38374 = smo36943.getStemDirection();
smo36943.setStemDirection(dirsmo38374);
smo36944.setStemDirection(dirsmo38374);
const smo38374 = new VF.Beam([smo36943,smo36944]);
 
// formatting measures in staff group smo37121
fmtsmo365758.format([smo36575v0,smo36960v0], 182);
const stavesmo36575 = new VF.Stave(423, 519, 196);
stavesmo36575.setAttribute('id', 'stavesmo36575');
stavesmo36575.setBegBarType(VF.Barline.type.NONE);
stavesmo36575.setContext(context);
stavesmo36575.draw();
smo36575v0.draw(context, stavesmo36575);
smo38372.setContext(context);
smo38372.draw();
const stavesmo36960 = new VF.Stave(423, 705, 196);
stavesmo36960.setAttribute('id', 'stavesmo36960');
stavesmo36960.setBegBarType(VF.Barline.type.NONE);
stavesmo36960.setContext(context);
stavesmo36960.draw();
smo36960v0.draw(context, stavesmo36960);
smo38374.setContext(context);
smo38374.draw();
const fmtsmo366029 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo36602v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36602v0ar = [];
const smo36576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","cn/5/n"]}'))
smo36576.setAttribute('id', 'smo36576');
const smo36577 = new VF.Annotation('storm,');
smo36577.setAttribute('id', 'smo36577');
smo36577.setFont('Merriweather', 11, 'normal');
smo36577.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36576.addModifier(smo36577);
smo36577.addClass('lyric lyric-0');
const smo36578 = new VF.Annotation('riv');
smo36578.setAttribute('id', 'smo36578');
smo36578.setFont('Merriweather', 11, 'normal');
smo36578.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36576.addModifier(smo36578);
smo36578.addClass('lyric lyric-1 lyric-hyphen');
const smo36579 = new VF.ChordSymbol();
smo36579.setAttribute('id', 'smo36579');
smo36579.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo36579.setFont('Roboto Slab', 14).setReportWidth(false);
smo36576.addModifier(smo36579, 0);
smo36602v0ar.push(smo36576);
const smo36580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n"]}'))
smo36580.setAttribute('id', 'smo36580');
const smo36581 = new VF.Annotation('through');
smo36581.setAttribute('id', 'smo36581');
smo36581.setFont('Merriweather', 11, 'normal');
smo36581.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36580.addModifier(smo36581);
smo36581.addClass('lyric lyric-0');
const smo36582 = new VF.Annotation('er');
smo36582.setAttribute('id', 'smo36582');
smo36582.setFont('Merriweather', 11, 'normal');
smo36582.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36580.addModifier(smo36582);
smo36582.addClass('lyric lyric-1');
const smo36583 = new VF.ChordSymbol();
smo36583.setAttribute('id', 'smo36583');
smo36583.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo36583.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo36583.setFont('Roboto Slab', 14).setReportWidth(false);
smo36580.addModifier(smo36583, 0);
smo36602v0ar.push(smo36580);
const smo36584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n"]}'))
smo36584.setAttribute('id', 'smo36584');
const smo36585 = new VF.Annotation('the');
smo36585.setAttribute('id', 'smo36585');
smo36585.setFont('Merriweather', 11, 'normal');
smo36585.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36584.addModifier(smo36585);
smo36585.addClass('lyric lyric-0');
const smo36586 = new VF.Annotation('I');
smo36586.setAttribute('id', 'smo36586');
smo36586.setFont('Merriweather', 11, 'normal');
smo36586.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36584.addModifier(smo36586);
smo36586.addClass('lyric lyric-1');
smo36602v0ar.push(smo36584);
smo36602v0.addTickables(smo36602v0ar)
fmtsmo366029.joinVoices([smo36602v0]);
const fmtsmo369799 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo36979v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36979v0ar = [];
const smo36961 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo36961.setAttribute('id', 'smo36961');
smo36979v0ar.push(smo36961);
const smo36962 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bb/3/n"]}'))
smo36962.setAttribute('id', 'smo36962');
smo36979v0ar.push(smo36962);
const smo36963 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bb/3/n"]}'))
smo36963.setAttribute('id', 'smo36963');
smo36979v0ar.push(smo36963);
smo36979v0.addTickables(smo36979v0ar)
fmtsmo369799.joinVoices([smo36979v0]);
// create beam groups and tuplets for format grp smo37121 before formatting
const dirsmo38378 = smo36580.getStemDirection();
smo36580.setStemDirection(dirsmo38378);
smo36584.setStemDirection(dirsmo38378);
const smo38378 = new VF.Beam([smo36580,smo36584]);
const dirsmo38380 = smo36962.getStemDirection();
smo36962.setStemDirection(dirsmo38380);
smo36963.setStemDirection(dirsmo38380);
const smo38380 = new VF.Beam([smo36962,smo36963]);
 
// formatting measures in staff group smo37121
fmtsmo366029.format([smo36602v0,smo36979v0], 228);
const stavesmo36602 = new VF.Stave(619, 519, 242);
stavesmo36602.setAttribute('id', 'stavesmo36602');
stavesmo36602.setBegBarType(VF.Barline.type.NONE);
stavesmo36602.setContext(context);
stavesmo36602.draw();
smo36602v0.draw(context, stavesmo36602);
smo38378.setContext(context);
smo38378.draw();
const stavesmo36979 = new VF.Stave(619, 705, 242);
stavesmo36979.setAttribute('id', 'stavesmo36979');
stavesmo36979.setBegBarType(VF.Barline.type.NONE);
stavesmo36979.setContext(context);
stavesmo36979.draw();
smo36979v0.draw(context, stavesmo36979);
smo38380.setContext(context);
smo38380.draw();
const fmtsmo3662910 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo36629v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36629v0ar = [];
const smo36603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","an/4/n"]}'))
smo36603.setAttribute('id', 'smo36603');
const smo36604 = new VF.Annotation('night');
smo36604.setAttribute('id', 'smo36604');
smo36604.setFont('Merriweather', 11, 'normal');
smo36604.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36603.addModifier(smo36604);
smo36604.addClass('lyric lyric-0');
const smo36605 = new VF.Annotation('stand,');
smo36605.setAttribute('id', 'smo36605');
smo36605.setFont('Merriweather', 11, 'normal');
smo36605.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36603.addModifier(smo36605);
smo36605.addClass('lyric lyric-1');
const smo36606 = new VF.ChordSymbol();
smo36606.setAttribute('id', 'smo36606');
smo36606.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo36606.setFont('Roboto Slab', 14).setReportWidth(false);
smo36603.addModifier(smo36606, 0);
smo36629v0ar.push(smo36603);
const smo36607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n","an/4/n"]}'))
smo36607.setAttribute('id', 'smo36607');
const smo366070acc = new VF.Accidental('b');
smo36607.addModifier(smo366070acc, 0);
const smo36608 = new VF.Annotation('lead');
smo36608.setAttribute('id', 'smo36608');
smo36608.setFont('Merriweather', 11, 'normal');
smo36608.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36607.addModifier(smo36608);
smo36608.addClass('lyric lyric-0');
const smo36609 = new VF.Annotation('guide');
smo36609.setAttribute('id', 'smo36609');
smo36609.setFont('Merriweather', 11, 'normal');
smo36609.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36607.addModifier(smo36609);
smo36609.addClass('lyric lyric-1');
const smo36610 = new VF.ChordSymbol();
smo36610.setAttribute('id', 'smo36610');
smo36610.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo36610.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo36610.setFont('Roboto Slab', 14).setReportWidth(false);
smo36607.addModifier(smo36610, 0);
smo36629v0ar.push(smo36607);
const smo36611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n","an/4/n"]}'))
smo36611.setAttribute('id', 'smo36611');
const smo36612 = new VF.Annotation('me');
smo36612.setAttribute('id', 'smo36612');
smo36612.setFont('Merriweather', 11, 'normal');
smo36612.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36611.addModifier(smo36612);
smo36612.addClass('lyric lyric-0');
const smo36613 = new VF.Annotation('me');
smo36613.setAttribute('id', 'smo36613');
smo36613.setFont('Merriweather', 11, 'normal');
smo36613.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36611.addModifier(smo36613);
smo36613.addClass('lyric lyric-1');
smo36629v0ar.push(smo36611);
smo36629v0.addTickables(smo36629v0ar)
fmtsmo3662910.joinVoices([smo36629v0]);
const fmtsmo3699810 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo36998v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36998v0ar = [];
const smo36980 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","cn/4/n"]}'))
smo36980.setAttribute('id', 'smo36980');
smo36998v0ar.push(smo36980);
const smo36981 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","cn/4/n"]}'))
smo36981.setAttribute('id', 'smo36981');
smo36998v0ar.push(smo36981);
const smo36982 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","cn/4/n"]}'))
smo36982.setAttribute('id', 'smo36982');
smo36998v0ar.push(smo36982);
smo36998v0.addTickables(smo36998v0ar)
fmtsmo3699810.joinVoices([smo36998v0]);
// create beam groups and tuplets for format grp smo37121 before formatting
const dirsmo38384 = smo36607.getStemDirection();
smo36607.setStemDirection(dirsmo38384);
smo36611.setStemDirection(dirsmo38384);
const smo38384 = new VF.Beam([smo36607,smo36611]);
const dirsmo38386 = smo36981.getStemDirection();
smo36981.setStemDirection(dirsmo38386);
smo36982.setStemDirection(dirsmo38386);
const smo38386 = new VF.Beam([smo36981,smo36982]);
 
// formatting measures in staff group smo37121
fmtsmo3662910.format([smo36629v0,smo36998v0], 205);
const stavesmo36629 = new VF.Stave(861, 519, 219);
stavesmo36629.setAttribute('id', 'stavesmo36629');
stavesmo36629.setBegBarType(VF.Barline.type.NONE);
stavesmo36629.setContext(context);
stavesmo36629.draw();
smo36629v0.draw(context, stavesmo36629);
smo38384.setContext(context);
smo38384.draw();
const stavesmo36998 = new VF.Stave(861, 705, 219);
stavesmo36998.setAttribute('id', 'stavesmo36998');
stavesmo36998.setBegBarType(VF.Barline.type.NONE);
stavesmo36998.setContext(context);
stavesmo36998.draw();
smo36998v0.draw(context, stavesmo36998);
smo38386.setContext(context);
smo38386.draw();
const rightsmo37121stavesmo366291 = new VF.StaveConnector(stavesmo36629, stavesmo36998).setType(0);
rightsmo37121stavesmo366291.setContext(context).draw();
const fmtsmo3665611 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo36656v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36656v0ar = [];
const smo36630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","gn/4/n"]}'))
smo36630.setAttribute('id', 'smo36630');
const smo36631 = new VF.Annotation('on');
smo36631.setAttribute('id', 'smo36631');
smo36631.setFont('Merriweather', 11, 'normal');
smo36631.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36630.addModifier(smo36631);
smo36631.addClass('lyric lyric-0');
const smo36632 = new VF.Annotation('feet,');
smo36632.setAttribute('id', 'smo36632');
smo36632.setFont('Merriweather', 11, 'normal');
smo36632.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36630.addModifier(smo36632);
smo36632.addClass('lyric lyric-1');
const smo36633 = new VF.ChordSymbol();
smo36633.setAttribute('id', 'smo36633');
smo36633.addGlyphOrText('Gm', JSON.parse('{"text":"Gm","symbolModifier":1}'));
smo36633.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo36633.setFont('Roboto Slab', 14).setReportWidth(false);
smo36630.addModifier(smo36633, 0);
smo36656v0ar.push(smo36630);
const smo36634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo36634.setAttribute('id', 'smo36634');
const smo36635 = new VF.Annotation('to');
smo36635.setAttribute('id', 'smo36635');
smo36635.setFont('Merriweather', 11, 'normal');
smo36635.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36634.addModifier(smo36635);
smo36635.addClass('lyric lyric-0');
const smo36636 = new VF.Annotation('hold');
smo36636.setAttribute('id', 'smo36636');
smo36636.setFont('Merriweather', 11, 'normal');
smo36636.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36634.addModifier(smo36636);
smo36636.addClass('lyric lyric-1');
const smo36637 = new VF.ChordSymbol();
smo36637.setAttribute('id', 'smo36637');
smo36637.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1}'));
smo36637.addGlyphOrText('', JSON.parse('{"glyph":"","symbolModifier":1}'));
smo36637.setFont('Roboto Slab', 14).setReportWidth(false);
smo36634.addModifier(smo36637, 0);
smo36656v0ar.push(smo36634);
const smo36638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo36638.setAttribute('id', 'smo36638');
const smo36639 = new VF.Annotation('the');
smo36639.setAttribute('id', 'smo36639');
smo36639.setFont('Merriweather', 11, 'normal');
smo36639.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36638.addModifier(smo36639);
smo36639.addClass('lyric lyric-0');
const smo36640 = new VF.Annotation('my');
smo36640.setAttribute('id', 'smo36640');
smo36640.setFont('Merriweather', 11, 'normal');
smo36640.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36638.addModifier(smo36640);
smo36640.addClass('lyric lyric-1');
smo36656v0ar.push(smo36638);
smo36656v0.addTickables(smo36656v0ar)
fmtsmo3665611.joinVoices([smo36656v0]);
const fmtsmo3701711 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo37017v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo37017v0ar = [];
const smo36999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo36999.setAttribute('id', 'smo36999');
smo37017v0ar.push(smo36999);
const smo37000 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo37000.setAttribute('id', 'smo37000');
smo37017v0ar.push(smo37000);
const smo37001 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo37001.setAttribute('id', 'smo37001');
smo37017v0ar.push(smo37001);
smo37017v0.addTickables(smo37017v0ar)
fmtsmo3701711.joinVoices([smo37017v0]);
// create beam groups and tuplets for format grp smo37121 before formatting
const dirsmo38396 = smo36634.getStemDirection();
smo36634.setStemDirection(dirsmo38396);
smo36638.setStemDirection(dirsmo38396);
const smo38396 = new VF.Beam([smo36634,smo36638]);
const dirsmo38398 = smo37000.getStemDirection();
smo37000.setStemDirection(dirsmo38398);
smo37001.setStemDirection(dirsmo38398);
const smo38398 = new VF.Beam([smo37000,smo37001]);
 
// formatting measures in staff group smo37121
fmtsmo3665611.format([smo36656v0,smo37017v0], 161);
const stavesmo36656 = new VF.Stave(43, 854, 226);
stavesmo36656.setAttribute('id', 'stavesmo36656');
stavesmo36656.setBegBarType(1);
stavesmo36656.addClef('treble');
const keysmo36656 = new VF.KeySignature('F');
keysmo36656.addToStave(stavesmo36656);
stavesmo36656.setContext(context);
stavesmo36656.draw();
smo36656v0.draw(context, stavesmo36656);
smo38396.setContext(context);
smo38396.draw();
const stavesmo37017 = new VF.Stave(43, 1040, 226);
stavesmo37017.setAttribute('id', 'stavesmo37017');
stavesmo37017.setBegBarType(1);
stavesmo37017.addClef('bass');
const keysmo37017 = new VF.KeySignature('F');
keysmo37017.addToStave(stavesmo37017);
stavesmo37017.setContext(context);
stavesmo37017.draw();
smo37017v0.draw(context, stavesmo37017);
smo38398.setContext(context);
smo38398.draw();
const leftsmo37121stavesmo366561 = new VF.StaveConnector(stavesmo36656, stavesmo37017).setType(3);
leftsmo37121stavesmo366561.setContext(context).draw();
const fmtsmo3668412 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo36684v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36684v0ar = [];
const smo36657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo36657.setAttribute('id', 'smo36657');
const smo36658 = new VF.Annotation('li');
smo36658.setAttribute('id', 'smo36658');
smo36658.setFont('Merriweather', 11, 'normal');
smo36658.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36657.addModifier(smo36658);
smo36658.addClass('lyric lyric-0 lyric-hyphen');
const smo36659 = new VF.Annotation('ha');
smo36659.setAttribute('id', 'smo36659');
smo36659.setFont('Merriweather', 11, 'normal');
smo36659.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36657.addModifier(smo36659);
smo36659.addClass('lyric lyric-1 lyric-hyphen');
smo36684v0ar.push(smo36657);
const smo36660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo36660.setAttribute('id', 'smo36660');
smo36660.addModifier(new VF.Dot(), 0);
smo36660.addModifier(new VF.Dot(), 1);
const smo36661 = new VF.Annotation('ght');
smo36661.setAttribute('id', 'smo36661');
smo36661.setFont('Merriweather', 11, 'normal');
smo36661.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36660.addModifier(smo36661);
smo36661.addClass('lyric lyric-0');
const smo36662 = new VF.Annotation('nd');
smo36662.setAttribute('id', 'smo36662');
smo36662.setFont('Merriweather', 11, 'normal');
smo36662.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36660.addModifier(smo36662);
smo36662.addClass('lyric lyric-1');
smo36684v0ar.push(smo36660);
const smo36663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo36663.setAttribute('id', 'smo36663');
const smo36664 = new VF.Annotation('Take');
smo36664.setAttribute('id', 'smo36664');
smo36664.setFont('Merriweather', 11, 'normal');
smo36664.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36663.addModifier(smo36664);
smo36664.addClass('lyric lyric-0');
const smo36666 = new VF.ChordSymbol();
smo36666.setAttribute('id', 'smo36666');
smo36666.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1}'));
smo36666.addGlyphOrText('', JSON.parse('{"glyph":"","symbolModifier":3}'));
smo36666.setFont('Roboto Slab', 14).setReportWidth(false);
smo36663.addModifier(smo36666, 0);
smo36684v0ar.push(smo36663);
const smo36667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo36667.setAttribute('id', 'smo36667');
const smo36668 = new VF.Annotation('my');
smo36668.setAttribute('id', 'smo36668');
smo36668.setFont('Merriweather', 11, 'normal');
smo36668.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36667.addModifier(smo36668);
smo36668.addClass('lyric lyric-0');
smo36684v0ar.push(smo36667);
smo36684v0.addTickables(smo36684v0ar)
fmtsmo3668412.joinVoices([smo36684v0]);
const fmtsmo3703712 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo37037v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo37037v0ar = [];
const smo37018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","fn/3/n"]}'))
smo37018.setAttribute('id', 'smo37018');
smo37037v0ar.push(smo37018);
const smo37019 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo37019.setAttribute('id', 'smo37019');
smo37019.addModifier(new VF.Dot(), 0);
smo37019.addModifier(new VF.Dot(), 1);
smo37037v0ar.push(smo37019);
const smo37020 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n","ab/3/n"]}'))
smo37020.setAttribute('id', 'smo37020');
const smo370200acc = new VF.Accidental('n');
smo37020.addModifier(smo370200acc, 0);
const smo370201acc = new VF.Accidental('b');
smo37020.addModifier(smo370201acc, 1);
smo37037v0ar.push(smo37020);
const smo37021 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n","gn/3/n"]}'))
smo37021.setAttribute('id', 'smo37021');
smo37037v0ar.push(smo37021);
smo37037v0.addTickables(smo37037v0ar)
fmtsmo3703712.joinVoices([smo37037v0]);
// create beam groups and tuplets for format grp smo37121 before formatting
const dirsmo38402 = smo36663.getStemDirection();
smo36663.setStemDirection(dirsmo38402);
smo36667.setStemDirection(dirsmo38402);
const smo38402 = new VF.Beam([smo36663,smo36667]);
const dirsmo38404 = smo37020.getStemDirection();
smo37020.setStemDirection(dirsmo38404);
smo37021.setStemDirection(dirsmo38404);
const smo38404 = new VF.Beam([smo37020,smo37021]);
 
// formatting measures in staff group smo37121
fmtsmo3668412.format([smo36684v0,smo37037v0], 191);
const stavesmo36684 = new VF.Stave(269, 854, 205);
stavesmo36684.setAttribute('id', 'stavesmo36684');
stavesmo36684.setBegBarType(VF.Barline.type.NONE);
stavesmo36684.setContext(context);
stavesmo36684.draw();
smo36684v0.draw(context, stavesmo36684);
smo38402.setContext(context);
smo38402.draw();
const stavesmo37037 = new VF.Stave(269, 1040, 205);
stavesmo37037.setAttribute('id', 'stavesmo37037');
stavesmo37037.setBegBarType(VF.Barline.type.NONE);
stavesmo37037.setContext(context);
stavesmo37037.draw();
smo37037v0.draw(context, stavesmo37037);
smo38404.setContext(context);
smo38404.draw();
const fmtsmo3671113 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo36711v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36711v0ar = [];
const smo36685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo36685.setAttribute('id', 'smo36685');
const smo36686 = new VF.Annotation('ha');
smo36686.setAttribute('id', 'smo36686');
smo36686.setFont('Merriweather', 11, 'normal');
smo36686.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36685.addModifier(smo36686);
smo36686.addClass('lyric lyric-0 lyric-hyphen');
const smo36687 = new VF.ChordSymbol();
smo36687.setAttribute('id', 'smo36687');
smo36687.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo36687.setFont('Roboto Slab', 14).setReportWidth(false);
smo36685.addModifier(smo36687, 0);
smo36711v0ar.push(smo36685);
const smo36688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo36688.setAttribute('id', 'smo36688');
smo36688.addModifier(new VF.Dot(), 0);
const smo36689 = new VF.Annotation('nd');
smo36689.setAttribute('id', 'smo36689');
smo36689.setFont('Merriweather', 11, 'normal');
smo36689.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36688.addModifier(smo36689);
smo36689.addClass('lyric lyric-0');
smo36711v0ar.push(smo36688);
const smo36690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo36690.setAttribute('id', 'smo36690');
const smo36691 = new VF.Annotation('pre');
smo36691.setAttribute('id', 'smo36691');
smo36691.setFont('Merriweather', 11, 'normal');
smo36691.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36690.addModifier(smo36691);
smo36691.addClass('lyric lyric-0 lyric-hyphen');
const smo36692 = new VF.ChordSymbol();
smo36692.setAttribute('id', 'smo36692');
smo36692.addGlyphOrText('Dm', JSON.parse('{"text":"Dm","symbolModifier":1}'));
smo36692.setFont('Roboto Slab', 14).setReportWidth(false);
smo36690.addModifier(smo36692, 0);
smo36711v0ar.push(smo36690);
const smo36693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","gn/4/n"]}'))
smo36693.setAttribute('id', 'smo36693');
const smo36694 = new VF.Annotation('cious');
smo36694.setAttribute('id', 'smo36694');
smo36694.setFont('Merriweather', 11, 'normal');
smo36694.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36693.addModifier(smo36694);
smo36694.addClass('lyric lyric-0');
const smo36695 = new VF.ChordSymbol();
smo36695.setAttribute('id', 'smo36695');
smo36695.addGlyphOrText('A', JSON.parse('{"text":"A","symbolModifier":1}'));
smo36695.addGlyphOrText('', JSON.parse('{"glyph":"","symbolModifier":3}'));
smo36695.addGlyphOrText('5', JSON.parse('{"text":"5","symbolModifier":3}'));
smo36695.setFont('Roboto Slab', 14).setReportWidth(false);
smo36693.addModifier(smo36695, 0);
smo36711v0ar.push(smo36693);
smo36711v0.addTickables(smo36711v0ar)
fmtsmo3671113.joinVoices([smo36711v0]);
const fmtsmo3705613 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo37056v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo37056v0ar = [];
const smo37038 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","an/3/n"]}'))
smo37038.setAttribute('id', 'smo37038');
smo37056v0ar.push(smo37038);
const smo37039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","an/3/n"]}'))
smo37039.setAttribute('id', 'smo37039');
smo37056v0ar.push(smo37039);
const smo37040 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["db/3/n","bn/3/n"]}'))
smo37040.setAttribute('id', 'smo37040');
const smo370400acc = new VF.Accidental('b');
smo37040.addModifier(smo370400acc, 0);
const smo370401acc = new VF.Accidental('n');
smo37040.addModifier(smo370401acc, 1);
smo37056v0ar.push(smo37040);
smo37056v0.addTickables(smo37056v0ar)
fmtsmo3705613.joinVoices([smo37056v0]);
// create beam groups and tuplets for format grp smo37121 before formatting
const dirsmo38408 = smo36690.getStemDirection();
smo36690.setStemDirection(dirsmo38408);
smo36693.setStemDirection(dirsmo38408);
const smo38408 = new VF.Beam([smo36690,smo36693]);
const dirsmo38410 = smo37039.getStemDirection();
smo37039.setStemDirection(dirsmo38410);
smo37040.setStemDirection(dirsmo38410);
const smo38410 = new VF.Beam([smo37039,smo37040]);
 
// formatting measures in staff group smo37121
fmtsmo3671113.format([smo36711v0,smo37056v0], 186);
const stavesmo36711 = new VF.Stave(474, 854, 200);
stavesmo36711.setAttribute('id', 'stavesmo36711');
stavesmo36711.setBegBarType(VF.Barline.type.NONE);
stavesmo36711.setContext(context);
stavesmo36711.draw();
smo36711v0.draw(context, stavesmo36711);
smo38408.setContext(context);
smo38408.draw();
const stavesmo37056 = new VF.Stave(474, 1040, 200);
stavesmo37056.setAttribute('id', 'stavesmo37056');
stavesmo37056.setBegBarType(VF.Barline.type.NONE);
stavesmo37056.setContext(context);
stavesmo37056.draw();
smo37056v0.draw(context, stavesmo37056);
smo38410.setContext(context);
smo38410.draw();
const fmtsmo3673514 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo36735v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36735v0ar = [];
const smo36712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","an/4/n"]}'))
smo36712.setAttribute('id', 'smo36712');
const smo36713 = new VF.Annotation('Lord,');
smo36713.setAttribute('id', 'smo36713');
smo36713.setFont('Merriweather', 11, 'normal');
smo36713.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36712.addModifier(smo36713);
smo36713.addClass('lyric lyric-0');
const smo36714 = new VF.ChordSymbol();
smo36714.setAttribute('id', 'smo36714');
smo36714.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo36714.setFont('Roboto Slab', 14).setReportWidth(false);
smo36712.addModifier(smo36714, 0);
smo36735v0ar.push(smo36712);
const smo36715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["cn/4/n","gn/4/n"]}'))
smo36715.setAttribute('id', 'smo36715');
smo36715.addModifier(new VF.Dot(), 0);
smo36715.addModifier(new VF.Dot(), 1);
const smo36716 = new VF.Annotation('lead');
smo36716.setAttribute('id', 'smo36716');
smo36716.setFont('Merriweather', 11, 'normal');
smo36716.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36715.addModifier(smo36716);
smo36716.addClass('lyric lyric-0');
const smo36717 = new VF.ChordSymbol();
smo36717.setAttribute('id', 'smo36717');
smo36717.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo36717.addGlyphOrText('sus4', JSON.parse('{"text":"sus4","symbolModifier":3}'));
smo36717.addGlyphOrText(')', JSON.parse('{"glyph":")","symbolModifier":3}'));
smo36717.setFont('Roboto Slab', 14).setReportWidth(false);
smo36715.addModifier(smo36717, 0);
smo36735v0ar.push(smo36715);
const smo36718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo36718.setAttribute('id', 'smo36718');
const smo36719 = new VF.Annotation('me');
smo36719.setAttribute('id', 'smo36719');
smo36719.setFont('Merriweather', 11, 'normal');
smo36719.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36718.addModifier(smo36719);
smo36719.addClass('lyric lyric-0');
smo36735v0ar.push(smo36718);
smo36735v0.addTickables(smo36735v0ar)
fmtsmo3673514.joinVoices([smo36735v0]);
const fmtsmo3707514 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo37075v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo37075v0ar = [];
const smo37057 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo37057.setAttribute('id', 'smo37057');
smo37075v0ar.push(smo37057);
const smo37058 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["cn/3/n","bb/3/n"]}'))
smo37058.setAttribute('id', 'smo37058');
smo37058.addModifier(new VF.Dot(), 0);
smo37058.addModifier(new VF.Dot(), 1);
smo37075v0ar.push(smo37058);
const smo37059 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","bb/3/n"]}'))
smo37059.setAttribute('id', 'smo37059');
smo37075v0ar.push(smo37059);
smo37075v0.addTickables(smo37075v0ar)
fmtsmo3707514.joinVoices([smo37075v0]);
// create beam groups and tuplets for format grp smo37121 before formatting
const dirsmo38414 = smo36715.getStemDirection();
smo36715.setStemDirection(dirsmo38414);
smo36718.setStemDirection(dirsmo38414);
const smo38414 = new VF.Beam([smo36715,smo36718]);
const dirsmo38416 = smo37058.getStemDirection();
smo37058.setStemDirection(dirsmo38416);
smo37059.setStemDirection(dirsmo38416);
const smo38416 = new VF.Beam([smo37058,smo37059]);
 
// formatting measures in staff group smo37121
fmtsmo3673514.format([smo36735v0,smo37075v0], 164);
const stavesmo36735 = new VF.Stave(674, 854, 178);
stavesmo36735.setAttribute('id', 'stavesmo36735');
stavesmo36735.setBegBarType(VF.Barline.type.NONE);
stavesmo36735.setContext(context);
stavesmo36735.draw();
smo36735v0.draw(context, stavesmo36735);
smo38414.setContext(context);
smo38414.draw();
const stavesmo37075 = new VF.Stave(674, 1040, 178);
stavesmo37075.setAttribute('id', 'stavesmo37075');
stavesmo37075.setBegBarType(VF.Barline.type.NONE);
stavesmo37075.setContext(context);
stavesmo37075.draw();
smo37075v0.draw(context, stavesmo37075);
smo38416.setContext(context);
smo38416.draw();
const fmtsmo3675415 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo36754v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36754v0ar = [];
const smo36736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo36736.setAttribute('id', 'smo36736');
smo36736.addModifier(new VF.Dot(), 0);
smo36736.addModifier(new VF.Dot(), 1);
const smo36737 = new VF.Annotation('home');
smo36737.setAttribute('id', 'smo36737');
smo36737.setFont('Merriweather', 11, 'normal');
smo36737.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36736.addModifier(smo36737);
smo36737.addClass('lyric lyric-0 lyric-hyphen');
const smo36738 = new VF.ChordSymbol();
smo36738.setAttribute('id', 'smo36738');
smo36738.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo36738.setFont('Roboto Slab', 14).setReportWidth(false);
smo36736.addModifier(smo36738, 0);
smo36754v0ar.push(smo36736);
smo36754v0.addTickables(smo36754v0ar)
fmtsmo3675415.joinVoices([smo36754v0]);
const fmtsmo3709215 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo37092v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo37092v0ar = [];
const smo37076 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo37076.setAttribute('id', 'smo37076');
smo37076.addModifier(new VF.Dot(), 0);
smo37076.addModifier(new VF.Dot(), 1);
smo37092v0ar.push(smo37076);
smo37092v0.addTickables(smo37092v0ar)
fmtsmo3709215.joinVoices([smo37092v0]);
// create beam groups and tuplets for format grp smo37121 before formatting
 
// formatting measures in staff group smo37121
fmtsmo3675415.format([smo36754v0,smo37092v0], 50);
const stavesmo36754 = new VF.Stave(852, 854, 65);
stavesmo36754.setAttribute('id', 'stavesmo36754');
stavesmo36754.setBegBarType(VF.Barline.type.NONE);
stavesmo36754.setEndBarType(2);
stavesmo36754.setContext(context);
stavesmo36754.draw();
smo36754v0.draw(context, stavesmo36754);
const stavesmo37092 = new VF.Stave(852, 1040, 65);
stavesmo37092.setAttribute('id', 'stavesmo37092');
stavesmo37092.setBegBarType(VF.Barline.type.NONE);
stavesmo37092.setEndBarType(2);
stavesmo37092.setContext(context);
stavesmo37092.draw();
smo37092v0.draw(context, stavesmo37092);
const fmtsmo3677716 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo36777v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36777v0ar = [];
const smo36755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo36755.setAttribute('id', 'smo36755');
smo36777v0ar.push(smo36755);
const smo36757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo36757.setAttribute('id', 'smo36757');
const smo36758 = new VF.Annotation('When');
smo36758.setAttribute('id', 'smo36758');
smo36758.setFont('Merriweather', 11, 'normal');
smo36758.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36757.addModifier(smo36758);
smo36758.addClass('lyric lyric-0');
smo36777v0ar.push(smo36757);
const smo36759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo36759.setAttribute('id', 'smo36759');
const smo36760 = new VF.Annotation('the');
smo36760.setAttribute('id', 'smo36760');
smo36760.setFont('Merriweather', 11, 'normal');
smo36760.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo36759.addModifier(smo36760);
smo36760.addClass('lyric lyric-0');
smo36777v0ar.push(smo36759);
smo36777v0.addTickables(smo36777v0ar)
fmtsmo3677716.joinVoices([smo36777v0]);
const fmtsmo3711216 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo37112v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo37112v0ar = [];
const smo37093 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo37093.setAttribute('id', 'smo37093');
smo37112v0ar.push(smo37093);
const smo37094 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo37094.setAttribute('id', 'smo37094');
smo37112v0ar.push(smo37094);
const smo37095 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo37095.setAttribute('id', 'smo37095');
smo37112v0ar.push(smo37095);
smo37112v0.addTickables(smo37112v0ar)
fmtsmo3711216.joinVoices([smo37112v0]);
// create beam groups and tuplets for format grp smo37121 before formatting
const dirsmo38422 = smo36757.getStemDirection();
smo36757.setStemDirection(dirsmo38422);
smo36759.setStemDirection(dirsmo38422);
const smo38422 = new VF.Beam([smo36757,smo36759]);
const dirsmo38423 = smo37094.getStemDirection();
smo37094.setStemDirection(dirsmo38423);
smo37095.setStemDirection(dirsmo38423);
const smo38423 = new VF.Beam([smo37094,smo37095]);
 
// formatting measures in staff group smo37121
fmtsmo3677716.format([smo36777v0,smo37112v0], 133);
const stavesmo36777 = new VF.Stave(917, 854, 151);
stavesmo36777.setAttribute('id', 'stavesmo36777');
stavesmo36777.setBegBarType(VF.Barline.type.NONE);
stavesmo36777.setEndBarType(5);
stavesmo36777.setContext(context);
stavesmo36777.draw();
smo36777v0.draw(context, stavesmo36777);
smo38422.setContext(context);
smo38422.draw();
const stavesmo37112 = new VF.Stave(917, 1040, 151);
stavesmo37112.setAttribute('id', 'stavesmo37112');
stavesmo37112.setBegBarType(VF.Barline.type.NONE);
stavesmo37112.setEndBarType(5);
stavesmo37112.setContext(context);
stavesmo37112.draw();
smo37112v0.draw(context, stavesmo37112);
smo38423.setContext(context);
smo38423.draw();
// modifier from 0-15-0-0 to 0-16-0-0
const smo38554 = new VF.StaveTie({ first_note: smo36736, last_note: smo36755, 
          firstNote: smo36736, lastNote: smo36755, first_indices: [0,1], last_indices: [0,1]});
smo38554.setContext(context).draw();
// modifier from 1-15-0-0 to 1-16-0-0
const smo38555 = new VF.StaveTie({ first_note: smo37076, last_note: smo37093, 
          firstNote: smo37076, lastNote: smo37093, first_indices: [0,1], last_indices: [0,1]});
smo38555.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo36344').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo36362').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo36363').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo36368').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo36366').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo36370').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo36371').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo36389').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo36390').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo36394').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo36393').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo36396').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo36397').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo36416').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo36417').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo36420').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo36421').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo36424').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo36425').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo36443').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo36444').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo36446').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo36447').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo36449').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo36450').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo36453').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo36454').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo36472').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo36473').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo36476').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo36480').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo36481').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo36500').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo36503').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo36504').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo36507').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo36526').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo36527').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo36530').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo36531').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo36550').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo36551').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo36554').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo36555').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo36558').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo36559').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo36577').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo36578').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo36581').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo36582').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo36585').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo36586').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo36604').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo36605').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo36608').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo36609').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo36612').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo36613').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo36631').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo36632').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo36635').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo36636').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo36639').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo36640').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo36658').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo36659').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo36661').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo36662').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo36664').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo36668').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo36686').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo36689').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo36691').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo36694').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo36713').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo36716').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo36719').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo36737').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo36760').setAttributeNS('', 'transform', 'translate(0 5)');
}
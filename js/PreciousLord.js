function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
//
// create the musical objects
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1421.487603305785');
svg.setAttributeNS('', 'height', '1839.5721925133687');
svg.setAttributeNS('', 'viewBox', '0 0 1166 1509');
VF.setMusicFont("Bravura","Gonville","Custom");
const noteHash = {};
const voiceHash = {}
const fmtsmo353250 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo35325v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35325v0ar = [];
const smo35306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo35306'] = smo35306;
smo35306.setAttribute('id', 'smo35306');
const smo35307 = new VF.Annotation('Pre');
smo35307.setAttribute('id', 'smo35307');
smo35307.setFont('Merriweather', 11, 'normal');
smo35307.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35306.addModifier(smo35307);
smo35307.addClass('lyric lyric-0 lyric-hyphen');
smo35325v0ar.push(smo35306);
const smo35308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n"]}'))
noteHash['smo35308'] = smo35308;
smo35308.setAttribute('id', 'smo35308');
const smo35309 = new VF.Annotation('cious');
smo35309.setAttribute('id', 'smo35309');
smo35309.setFont('Merriweather', 11, 'normal');
smo35309.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35308.addModifier(smo35309);
smo35309.addClass('lyric lyric-0');
smo35325v0ar.push(smo35308);
smo35325v0.addTickables(smo35325v0ar)
fmtsmo353250.joinVoices([smo35325v0]);
const fmtsmo357670 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo35767v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35767v0ar = [];
const smo35750 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo35750'] = smo35750;
smo35750.setAttribute('id', 'smo35750');
smo35767v0ar.push(smo35750);
const smo35751 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo35751'] = smo35751;
smo35751.setAttribute('id', 'smo35751');
smo35767v0ar.push(smo35751);
smo35767v0.addTickables(smo35767v0ar)
fmtsmo357670.joinVoices([smo35767v0]);
// create beam groups and tuplets for format grp smo36086 before formatting
const dirsmo37285 = smo35306.getStemDirection();
smo35306.setStemDirection(dirsmo37285);
smo35308.setStemDirection(dirsmo37285);
const smo37285 = new VF.Beam([smo35306,smo35308]);
const dirsmo37288 = smo35750.getStemDirection();
smo35750.setStemDirection(dirsmo37288);
smo35751.setStemDirection(dirsmo37288);
const smo37288 = new VF.Beam([smo35750,smo35751]);
 
// formatting measures in staff group smo36086
fmtsmo353250.format([smo35325v0,smo35767v0], 117);
const stavesmo35325 = new VF.Stave(43, 178, 215);
stavesmo35325.setAttribute('id', 'stavesmo35325');
stavesmo35325.setBegBarType(1);
stavesmo35325.addClef('treble');
stavesmo35325.addTimeSignature('3/4');
const keysmo35325 = new VF.KeySignature('F');
keysmo35325.addToStave(stavesmo35325);
stavesmo35325.setContext(context);
stavesmo35325.draw();
smo35325v0.draw(context, stavesmo35325);
smo37285.setContext(context);
smo37285.draw();
const stavesmo35767 = new VF.Stave(43, 333, 215);
stavesmo35767.setAttribute('id', 'stavesmo35767');
stavesmo35767.setBegBarType(1);
stavesmo35767.addClef('bass');
stavesmo35767.addTimeSignature('3/4');
const keysmo35767 = new VF.KeySignature('F');
keysmo35767.addToStave(stavesmo35767);
stavesmo35767.setContext(context);
stavesmo35767.draw();
smo35767v0.draw(context, stavesmo35767);
smo37288.setContext(context);
smo37288.draw();
const leftsmo36086stavesmo353251 = new VF.StaveConnector(stavesmo35325, stavesmo35767).setType(3);
leftsmo36086stavesmo353251.setContext(context).draw();
const fmtsmo353521 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo35352v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35352v0ar = [];
const smo35326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
noteHash['smo35326'] = smo35326;
smo35326.setAttribute('id', 'smo35326');
const smo35327 = new VF.Annotation('Lord,');
smo35327.setAttribute('id', 'smo35327');
smo35327.setFont('Merriweather', 11, 'normal');
smo35327.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35326.addModifier(smo35327);
smo35327.addClass('lyric lyric-0');
const smo35328 = new VF.Annotation('dark');
smo35328.setAttribute('id', 'smo35328');
smo35328.setFont('Merriweather', 11, 'normal');
smo35328.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35326.addModifier(smo35328);
smo35328.addClass('lyric lyric-1 lyric-hyphen');
const smo35329 = new VF.ChordSymbol();
smo35329.setAttribute('id', 'smo35329');
smo35329.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo35329.setFont('Roboto Slab', 14).setReportWidth(false);
smo35326.addModifier(smo35329, 0);
smo35352v0ar.push(smo35326);
const smo35330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n"]}'))
noteHash['smo35330'] = smo35330;
smo35330.setAttribute('id', 'smo35330');
const smo35333 = new VF.Annotation('take');
smo35333.setAttribute('id', 'smo35333');
smo35333.setFont('Merriweather', 11, 'normal');
smo35333.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35330.addModifier(smo35333);
smo35333.addClass('lyric lyric-0');
const smo35331 = new VF.Annotation('ness');
smo35331.setAttribute('id', 'smo35331');
smo35331.setFont('Merriweather', 11, 'normal');
smo35331.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35330.addModifier(smo35331);
smo35331.addClass('lyric lyric-1');
const smo35332 = new VF.ChordSymbol();
smo35332.setAttribute('id', 'smo35332');
smo35332.addGlyphOrText('Gm', JSON.parse('{"text":"Gm","symbolModifier":1,"symbolType":2}'));
smo35332.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo35332.setFont('Roboto Slab', 14).setReportWidth(false);
smo35330.addModifier(smo35332, 0);
smo35352v0ar.push(smo35330);
const smo35334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n"]}'))
noteHash['smo35334'] = smo35334;
smo35334.setAttribute('id', 'smo35334');
const smo35335 = new VF.Annotation('my');
smo35335.setAttribute('id', 'smo35335');
smo35335.setFont('Merriweather', 11, 'normal');
smo35335.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35334.addModifier(smo35335);
smo35335.addClass('lyric lyric-0');
const smo35336 = new VF.Annotation('a');
smo35336.setAttribute('id', 'smo35336');
smo35336.setFont('Merriweather', 11, 'normal');
smo35336.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35334.addModifier(smo35336);
smo35336.addClass('lyric lyric-1 lyric-hyphen');
smo35352v0ar.push(smo35334);
smo35352v0.addTickables(smo35352v0ar)
fmtsmo353521.joinVoices([smo35352v0]);
const fmtsmo357871 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo35787v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35787v0ar = [];
const smo35768 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo35768'] = smo35768;
smo35768.setAttribute('id', 'smo35768');
smo35787v0ar.push(smo35768);
const smo35769 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","fn/3/n"]}'))
noteHash['smo35769'] = smo35769;
smo35769.setAttribute('id', 'smo35769');
smo35787v0ar.push(smo35769);
const smo35770 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","en/3/n"]}'))
noteHash['smo35770'] = smo35770;
smo35770.setAttribute('id', 'smo35770');
smo35787v0ar.push(smo35770);
smo35787v0.addTickables(smo35787v0ar)
fmtsmo357871.joinVoices([smo35787v0]);
// create beam groups and tuplets for format grp smo36086 before formatting
const dirsmo37291 = smo35330.getStemDirection();
smo35330.setStemDirection(dirsmo37291);
smo35334.setStemDirection(dirsmo37291);
const smo37291 = new VF.Beam([smo35330,smo35334]);
const dirsmo37293 = smo35769.getStemDirection();
smo35769.setStemDirection(dirsmo37293);
smo35770.setStemDirection(dirsmo37293);
const smo37293 = new VF.Beam([smo35769,smo35770]);
 
// formatting measures in staff group smo36086
fmtsmo353521.format([smo35352v0,smo35787v0], 185);
const stavesmo35352 = new VF.Stave(258, 178, 208);
stavesmo35352.setAttribute('id', 'stavesmo35352');
stavesmo35352.setBegBarType(4);
stavesmo35352.setContext(context);
stavesmo35352.draw();
smo35352v0.draw(context, stavesmo35352);
smo37291.setContext(context);
smo37291.draw();
const stavesmo35787 = new VF.Stave(258, 333, 208);
stavesmo35787.setAttribute('id', 'stavesmo35787');
stavesmo35787.setBegBarType(4);
stavesmo35787.setContext(context);
stavesmo35787.draw();
smo35787v0.draw(context, stavesmo35787);
smo37293.setContext(context);
smo37293.draw();
const fmtsmo353792 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo35379v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35379v0ar = [];
const smo35353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","fn/4/n"]}'))
noteHash['smo35353'] = smo35353;
smo35353.setAttribute('id', 'smo35353');
const smo35354 = new VF.Annotation('hand,');
smo35354.setAttribute('id', 'smo35354');
smo35354.setFont('Merriweather', 11, 'normal');
smo35354.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35353.addModifier(smo35354);
smo35354.addClass('lyric lyric-0');
const smo35355 = new VF.Annotation('pears');
smo35355.setAttribute('id', 'smo35355');
smo35355.setFont('Merriweather', 11, 'normal');
smo35355.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35353.addModifier(smo35355);
smo35355.addClass('lyric lyric-1');
const smo35356 = new VF.ChordSymbol();
smo35356.setAttribute('id', 'smo35356');
smo35356.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo35356.setFont('Roboto Slab', 14).setReportWidth(false);
smo35353.addModifier(smo35356, 0);
smo35379v0ar.push(smo35353);
const smo35357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","an/4/n"]}'))
noteHash['smo35357'] = smo35357;
smo35357.setAttribute('id', 'smo35357');
const smo35359 = new VF.Annotation('lead');
smo35359.setAttribute('id', 'smo35359');
smo35359.setFont('Merriweather', 11, 'normal');
smo35359.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35357.addModifier(smo35359);
smo35359.addClass('lyric lyric-0');
const smo35358 = new VF.Annotation('and');
smo35358.setAttribute('id', 'smo35358');
smo35358.setFont('Merriweather', 11, 'normal');
smo35358.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35357.addModifier(smo35358);
smo35358.addClass('lyric lyric-1');
smo35379v0ar.push(smo35357);
const smo35360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n","an/4/n"]}'))
noteHash['smo35360'] = smo35360;
smo35360.setAttribute('id', 'smo35360');
const smo353600acc = new VF.Accidental('#');
smo35360.addModifier(smo353600acc, 0);
const smo35361 = new VF.Annotation('me');
smo35361.setAttribute('id', 'smo35361');
smo35361.setFont('Merriweather', 11, 'normal');
smo35361.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35360.addModifier(smo35361);
smo35361.addClass('lyric lyric-0');
const smo35362 = new VF.Annotation('the');
smo35362.setAttribute('id', 'smo35362');
smo35362.setFont('Merriweather', 11, 'normal');
smo35362.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35360.addModifier(smo35362);
smo35362.addClass('lyric lyric-1');
const smo35363 = new VF.ChordSymbol();
smo35363.setAttribute('id', 'smo35363');
smo35363.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo35363.addGlyph('+', JSON.parse('{"glyph":"+","symbolModifier":3,"symbolType":1}'));
smo35363.addGlyphOrText('5', JSON.parse('{"text":"5","symbolModifier":3,"symbolType":2}'));
smo35363.setFont('Roboto Slab', 14).setReportWidth(false);
smo35360.addModifier(smo35363, 0);
smo35379v0ar.push(smo35360);
smo35379v0.addTickables(smo35379v0ar)
fmtsmo353792.joinVoices([smo35379v0]);
const fmtsmo358072 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo35807v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35807v0ar = [];
const smo35788 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n","fn/3/n"]}'))
noteHash['smo35788'] = smo35788;
smo35788.setAttribute('id', 'smo35788');
smo35807v0ar.push(smo35788);
const smo35790 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo35790'] = smo35790;
smo35790.setAttribute('id', 'smo35790');
smo35807v0ar.push(smo35790);
const smo35791 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo35791'] = smo35791;
smo35791.setAttribute('id', 'smo35791');
smo35807v0ar.push(smo35791);
smo35807v0.addTickables(smo35807v0ar)
fmtsmo358072.joinVoices([smo35807v0]);
// create beam groups and tuplets for format grp smo36086 before formatting
const dirsmo37295 = smo35357.getStemDirection();
smo35357.setStemDirection(dirsmo37295);
smo35360.setStemDirection(dirsmo37295);
const smo37295 = new VF.Beam([smo35357,smo35360]);
const dirsmo37298 = smo35790.getStemDirection();
smo35790.setStemDirection(dirsmo37298);
smo35791.setStemDirection(dirsmo37298);
const smo37298 = new VF.Beam([smo35790,smo35791]);
 
// formatting measures in staff group smo36086
fmtsmo353792.format([smo35379v0,smo35807v0], 186);
const stavesmo35379 = new VF.Stave(466, 178, 200);
stavesmo35379.setAttribute('id', 'stavesmo35379');
stavesmo35379.setBegBarType(VF.Barline.type.NONE);
stavesmo35379.setContext(context);
stavesmo35379.draw();
smo35379v0.draw(context, stavesmo35379);
smo37295.setContext(context);
smo37295.draw();
const stavesmo35807 = new VF.Stave(466, 333, 200);
stavesmo35807.setAttribute('id', 'stavesmo35807');
stavesmo35807.setBegBarType(VF.Barline.type.NONE);
stavesmo35807.setContext(context);
stavesmo35807.draw();
smo35807v0.draw(context, stavesmo35807);
smo37298.setContext(context);
smo37298.draw();
const fmtsmo354063 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo35406v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35406v0ar = [];
const smo35380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","gn/4/n"]}'))
noteHash['smo35380'] = smo35380;
smo35380.setAttribute('id', 'smo35380');
const smo35381 = new VF.Annotation('on,');
smo35381.setAttribute('id', 'smo35381');
smo35381.setFont('Merriweather', 11, 'normal');
smo35381.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35380.addModifier(smo35381);
smo35381.addClass('lyric lyric-0');
const smo35382 = new VF.Annotation('night');
smo35382.setAttribute('id', 'smo35382');
smo35382.setFont('Merriweather', 11, 'normal');
smo35382.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35380.addModifier(smo35382);
smo35382.addClass('lyric lyric-1');
const smo35383 = new VF.ChordSymbol();
smo35383.setAttribute('id', 'smo35383');
smo35383.addGlyphOrText('Gm', JSON.parse('{"text":"Gm","symbolModifier":1,"symbolType":2}'));
smo35383.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo35383.setFont('Roboto Slab', 14).setReportWidth(false);
smo35380.addModifier(smo35383, 0);
smo35406v0ar.push(smo35380);
const smo35384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","fn/4/n"]}'))
noteHash['smo35384'] = smo35384;
smo35384.setAttribute('id', 'smo35384');
const smo35385 = new VF.Annotation('let');
smo35385.setAttribute('id', 'smo35385');
smo35385.setFont('Merriweather', 11, 'normal');
smo35385.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35384.addModifier(smo35385);
smo35385.addClass('lyric lyric-0');
const smo35386 = new VF.Annotation('dra');
smo35386.setAttribute('id', 'smo35386');
smo35386.setFont('Merriweather', 11, 'normal');
smo35386.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35384.addModifier(smo35386);
smo35386.addClass('lyric lyric-1 lyric-hyphen');
const smo35387 = new VF.ChordSymbol();
smo35387.setAttribute('id', 'smo35387');
smo35387.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1,"symbolType":2}'));
smo35387.addGlyph('b', JSON.parse('{"glyph":"b","symbolModifier":1,"symbolType":1}'));
smo35387.setFont('Roboto Slab', 14).setReportWidth(false);
smo35384.addModifier(smo35387, 0);
smo35406v0ar.push(smo35384);
const smo35388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","fn/4/n"]}'))
noteHash['smo35388'] = smo35388;
smo35388.setAttribute('id', 'smo35388');
const smo35389 = new VF.Annotation('me');
smo35389.setAttribute('id', 'smo35389');
smo35389.setFont('Merriweather', 11, 'normal');
smo35389.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35388.addModifier(smo35389);
smo35389.addClass('lyric lyric-0');
const smo35390 = new VF.Annotation('ws');
smo35390.setAttribute('id', 'smo35390');
smo35390.setFont('Merriweather', 11, 'normal');
smo35390.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35388.addModifier(smo35390);
smo35390.addClass('lyric lyric-1');
smo35406v0ar.push(smo35388);
smo35406v0.addTickables(smo35406v0ar)
fmtsmo354063.joinVoices([smo35406v0]);
const fmtsmo358263 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo35826v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35826v0ar = [];
const smo35808 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","fn/3/n"]}'))
noteHash['smo35808'] = smo35808;
smo35808.setAttribute('id', 'smo35808');
smo35826v0ar.push(smo35808);
const smo35809 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","fn/3/n"]}'))
noteHash['smo35809'] = smo35809;
smo35809.setAttribute('id', 'smo35809');
smo35826v0ar.push(smo35809);
const smo35810 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","fn/3/n"]}'))
noteHash['smo35810'] = smo35810;
smo35810.setAttribute('id', 'smo35810');
smo35826v0ar.push(smo35810);
smo35826v0.addTickables(smo35826v0ar)
fmtsmo358263.joinVoices([smo35826v0]);
// create beam groups and tuplets for format grp smo36086 before formatting
const dirsmo37301 = smo35384.getStemDirection();
smo35384.setStemDirection(dirsmo37301);
smo35388.setStemDirection(dirsmo37301);
const smo37301 = new VF.Beam([smo35384,smo35388]);
const dirsmo37304 = smo35809.getStemDirection();
smo35809.setStemDirection(dirsmo37304);
smo35810.setStemDirection(dirsmo37304);
const smo37304 = new VF.Beam([smo35809,smo35810]);
 
// formatting measures in staff group smo36086
fmtsmo354063.format([smo35406v0,smo35826v0], 171);
const stavesmo35406 = new VF.Stave(666, 178, 185);
stavesmo35406.setAttribute('id', 'stavesmo35406');
stavesmo35406.setBegBarType(VF.Barline.type.NONE);
stavesmo35406.setContext(context);
stavesmo35406.draw();
smo35406v0.draw(context, stavesmo35406);
smo37301.setContext(context);
smo37301.draw();
const stavesmo35826 = new VF.Stave(666, 333, 185);
stavesmo35826.setAttribute('id', 'stavesmo35826');
stavesmo35826.setBegBarType(VF.Barline.type.NONE);
stavesmo35826.setContext(context);
stavesmo35826.draw();
smo35826v0.draw(context, stavesmo35826);
smo37304.setContext(context);
smo37304.draw();
const fmtsmo354354 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo35435v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35435v0ar = [];
const smo35407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
noteHash['smo35407'] = smo35407;
smo35407.setAttribute('id', 'smo35407');
const smo35408 = new VF.Annotation('sta');
smo35408.setAttribute('id', 'smo35408');
smo35408.setFont('Merriweather', 11, 'normal');
smo35408.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35407.addModifier(smo35408);
smo35408.addClass('lyric lyric-0 lyric-hyphen');
const smo35409 = new VF.Annotation('ne');
smo35409.setAttribute('id', 'smo35409');
smo35409.setFont('Merriweather', 11, 'normal');
smo35409.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35407.addModifier(smo35409);
smo35409.addClass('lyric lyric-1 lyric-hyphen');
smo35435v0ar.push(smo35407);
const smo35410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo35410'] = smo35410;
smo35410.setAttribute('id', 'smo35410');
smo35410.addModifier(new VF.Dot(), 0);
smo35410.addModifier(new VF.Dot(), 1);
const smo35411 = new VF.Annotation('nd');
smo35411.setAttribute('id', 'smo35411');
smo35411.setFont('Merriweather', 11, 'normal');
smo35411.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35410.addModifier(smo35411);
smo35411.addClass('lyric lyric-0');
const smo35412 = new VF.Annotation('ar');
smo35412.setAttribute('id', 'smo35412');
smo35412.setFont('Merriweather', 11, 'normal');
smo35412.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35410.addModifier(smo35412);
smo35412.addClass('lyric lyric-1');
smo35435v0ar.push(smo35410);
const smo35413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","dn/4/n"]}'))
noteHash['smo35413'] = smo35413;
smo35413.setAttribute('id', 'smo35413');
const smo354130acc = new VF.Accidental('b');
smo35413.addModifier(smo354130acc, 0);
const smo35414 = new VF.Annotation('I');
smo35414.setAttribute('id', 'smo35414');
smo35414.setFont('Merriweather', 11, 'normal');
smo35414.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35413.addModifier(smo35414);
smo35414.addClass('lyric lyric-0');
const smo35415 = new VF.Annotation('when');
smo35415.setAttribute('id', 'smo35415');
smo35415.setFont('Merriweather', 11, 'normal');
smo35415.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35413.addModifier(smo35415);
smo35415.addClass('lyric lyric-1');
const smo35416 = new VF.ChordSymbol();
smo35416.setAttribute('id', 'smo35416');
smo35416.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1,"symbolType":2}'));
smo35416.addGlyph('diminished', JSON.parse('{"glyph":"diminished","symbolModifier":3,"symbolType":1}'));
smo35416.setFont('Roboto Slab', 14).setReportWidth(false);
smo35413.addModifier(smo35416, 0);
smo35435v0ar.push(smo35413);
const smo35417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","dn/4/n"]}'))
noteHash['smo35417'] = smo35417;
smo35417.setAttribute('id', 'smo35417');
const smo35418 = new VF.Annotation('am');
smo35418.setAttribute('id', 'smo35418');
smo35418.setFont('Merriweather', 11, 'normal');
smo35418.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35417.addModifier(smo35418);
smo35418.addClass('lyric lyric-0');
const smo35419 = new VF.Annotation('my');
smo35419.setAttribute('id', 'smo35419');
smo35419.setFont('Merriweather', 11, 'normal');
smo35419.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35417.addModifier(smo35419);
smo35419.addClass('lyric lyric-1');
smo35435v0ar.push(smo35417);
smo35435v0.addTickables(smo35435v0ar)
fmtsmo354354.joinVoices([smo35435v0]);
const fmtsmo358484 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo35848v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35848v0ar = [];
const smo35827 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","fn/3/n"]}'))
noteHash['smo35827'] = smo35827;
smo35827.setAttribute('id', 'smo35827');
smo35848v0ar.push(smo35827);
const smo35829 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bb/2/n","dn/3/n"]}'))
noteHash['smo35829'] = smo35829;
smo35829.setAttribute('id', 'smo35829');
smo35829.addModifier(new VF.Dot(), 0);
smo35829.addModifier(new VF.Dot(), 1);
smo35848v0ar.push(smo35829);
const smo35831 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo35831'] = smo35831;
smo35831.setAttribute('id', 'smo35831');
smo35848v0ar.push(smo35831);
const smo35832 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo35832'] = smo35832;
smo35832.setAttribute('id', 'smo35832');
smo35848v0ar.push(smo35832);
smo35848v0.addTickables(smo35848v0ar)
fmtsmo358484.joinVoices([smo35848v0]);
// create beam groups and tuplets for format grp smo36086 before formatting
const dirsmo37307 = smo35413.getStemDirection();
smo35413.setStemDirection(dirsmo37307);
smo35417.setStemDirection(dirsmo37307);
const smo37307 = new VF.Beam([smo35413,smo35417]);
const dirsmo37310 = smo35831.getStemDirection();
smo35831.setStemDirection(dirsmo37310);
smo35832.setStemDirection(dirsmo37310);
const smo37310 = new VF.Beam([smo35831,smo35832]);
 
// formatting measures in staff group smo36086
fmtsmo354354.format([smo35435v0,smo35848v0], 213);
const stavesmo35435 = new VF.Stave(851, 178, 227);
stavesmo35435.setAttribute('id', 'stavesmo35435');
stavesmo35435.setBegBarType(VF.Barline.type.NONE);
stavesmo35435.setContext(context);
stavesmo35435.draw();
smo35435v0.draw(context, stavesmo35435);
smo37307.setContext(context);
smo37307.draw();
const stavesmo35848 = new VF.Stave(851, 333, 227);
stavesmo35848.setAttribute('id', 'stavesmo35848');
stavesmo35848.setBegBarType(VF.Barline.type.NONE);
stavesmo35848.setContext(context);
stavesmo35848.draw();
smo35848v0.draw(context, stavesmo35848);
smo37310.setContext(context);
smo37310.draw();
const rightsmo36086stavesmo354351 = new VF.StaveConnector(stavesmo35435, stavesmo35848).setType(0);
rightsmo36086stavesmo354351.setContext(context).draw();
const fmtsmo354625 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo35462v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35462v0ar = [];
const smo35436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
noteHash['smo35436'] = smo35436;
smo35436.setAttribute('id', 'smo35436');
const smo35437 = new VF.Annotation('tired');
smo35437.setAttribute('id', 'smo35437');
smo35437.setFont('Merriweather', 11, 'normal');
smo35437.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35436.addModifier(smo35437);
smo35437.addClass('lyric lyric-0');
const smo35438 = new VF.Annotation('life');
smo35438.setAttribute('id', 'smo35438');
smo35438.setFont('Merriweather', 11, 'normal');
smo35438.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35436.addModifier(smo35438);
smo35438.addClass('lyric lyric-1');
const smo35439 = new VF.ChordSymbol();
smo35439.setAttribute('id', 'smo35439');
smo35439.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo35439.setFont('Roboto Slab', 14).setReportWidth(false);
smo35436.addModifier(smo35439, 0);
smo35462v0ar.push(smo35436);
const smo35440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n"]}'))
noteHash['smo35440'] = smo35440;
smo35440.setAttribute('id', 'smo35440');
const smo35441 = new VF.Annotation('I');
smo35441.setAttribute('id', 'smo35441');
smo35441.setFont('Merriweather', 11, 'normal');
smo35441.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35440.addModifier(smo35441);
smo35441.addClass('lyric lyric-0');
const smo35443 = new VF.ChordSymbol();
smo35443.setAttribute('id', 'smo35443');
smo35443.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo35443.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo35443.setFont('Roboto Slab', 14).setReportWidth(false);
smo35440.addModifier(smo35443, 0);
smo35462v0ar.push(smo35440);
const smo35444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n"]}'))
noteHash['smo35444'] = smo35444;
smo35444.setAttribute('id', 'smo35444');
const smo35445 = new VF.Annotation('am');
smo35445.setAttribute('id', 'smo35445');
smo35445.setFont('Merriweather', 11, 'normal');
smo35445.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35444.addModifier(smo35445);
smo35445.addClass('lyric lyric-0');
const smo35446 = new VF.Annotation('is');
smo35446.setAttribute('id', 'smo35446');
smo35446.setFont('Merriweather', 11, 'normal');
smo35446.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35444.addModifier(smo35446);
smo35446.addClass('lyric lyric-1 lyric-hyphen');
smo35462v0ar.push(smo35444);
smo35462v0.addTickables(smo35462v0ar)
fmtsmo354625.joinVoices([smo35462v0]);
const fmtsmo358695 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo35869v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35869v0ar = [];
const smo35849 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","fn/3/n"]}'))
noteHash['smo35849'] = smo35849;
smo35849.setAttribute('id', 'smo35849');
smo35869v0ar.push(smo35849);
const smo35851 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","en/3/n"]}'))
noteHash['smo35851'] = smo35851;
smo35851.setAttribute('id', 'smo35851');
smo35869v0ar.push(smo35851);
const smo35853 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","en/3/n"]}'))
noteHash['smo35853'] = smo35853;
smo35853.setAttribute('id', 'smo35853');
smo35869v0ar.push(smo35853);
smo35869v0.addTickables(smo35869v0ar)
fmtsmo358695.joinVoices([smo35869v0]);
// create beam groups and tuplets for format grp smo36086 before formatting
const dirsmo37319 = smo35440.getStemDirection();
smo35440.setStemDirection(dirsmo37319);
smo35444.setStemDirection(dirsmo37319);
const smo37319 = new VF.Beam([smo35440,smo35444]);
const dirsmo37322 = smo35851.getStemDirection();
smo35851.setStemDirection(dirsmo37322);
smo35853.setStemDirection(dirsmo37322);
const smo37322 = new VF.Beam([smo35851,smo35853]);
 
// formatting measures in staff group smo36086
fmtsmo354625.format([smo35462v0,smo35869v0], 129);
const stavesmo35462 = new VF.Stave(43, 519, 203);
stavesmo35462.setAttribute('id', 'stavesmo35462');
stavesmo35462.setBegBarType(1);
stavesmo35462.addClef('treble');
const keysmo35462 = new VF.KeySignature('F');
keysmo35462.addToStave(stavesmo35462);
stavesmo35462.setContext(context);
stavesmo35462.draw();
smo35462v0.draw(context, stavesmo35462);
smo37319.setContext(context);
smo37319.draw();
const stavesmo35869 = new VF.Stave(43, 705, 203);
stavesmo35869.setAttribute('id', 'stavesmo35869');
stavesmo35869.setBegBarType(1);
stavesmo35869.addClef('bass');
const keysmo35869 = new VF.KeySignature('F');
keysmo35869.addToStave(stavesmo35869);
stavesmo35869.setContext(context);
stavesmo35869.draw();
smo35869v0.draw(context, stavesmo35869);
smo37322.setContext(context);
smo37322.draw();
const leftsmo36086stavesmo354621 = new VF.StaveConnector(stavesmo35462, stavesmo35869).setType(3);
leftsmo36086stavesmo354621.setContext(context).draw();
const fmtsmo354896 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo35489v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35489v0ar = [];
const smo35463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","fn/4/n"]}'))
noteHash['smo35463'] = smo35463;
smo35463.setAttribute('id', 'smo35463');
const smo35464 = new VF.Annotation('weak');
smo35464.setAttribute('id', 'smo35464');
smo35464.setFont('Merriweather', 11, 'normal');
smo35464.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35463.addModifier(smo35464);
smo35464.addClass('lyric lyric-0');
const smo35465 = new VF.Annotation('al');
smo35465.setAttribute('id', 'smo35465');
smo35465.setFont('Merriweather', 11, 'normal');
smo35465.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35463.addModifier(smo35465);
smo35465.addClass('lyric lyric-1 lyric-hyphen');
const smo35466 = new VF.ChordSymbol();
smo35466.setAttribute('id', 'smo35466');
smo35466.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo35466.setFont('Roboto Slab', 14).setReportWidth(false);
smo35463.addModifier(smo35466, 0);
smo35489v0ar.push(smo35463);
const smo35467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","an/4/n"]}'))
noteHash['smo35467'] = smo35467;
smo35467.setAttribute('id', 'smo35467');
const smo354670acc = new VF.Accidental('n');
smo35467.addModifier(smo354670acc, 0);
const smo35468 = new VF.Annotation('I');
smo35468.setAttribute('id', 'smo35468');
smo35468.setFont('Merriweather', 11, 'normal');
smo35468.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35467.addModifier(smo35468);
smo35468.addClass('lyric lyric-0');
const smo35469 = new VF.Annotation('most');
smo35469.setAttribute('id', 'smo35469');
smo35469.setFont('Merriweather', 11, 'normal');
smo35469.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35467.addModifier(smo35469);
smo35469.addClass('lyric lyric-1');
const smo35470 = new VF.ChordSymbol();
smo35470.setAttribute('id', 'smo35470');
smo35470.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo35470.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo35470.setFont('Roboto Slab', 14).setReportWidth(false);
smo35467.addModifier(smo35470, 0);
smo35489v0ar.push(smo35467);
const smo35471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","an/4/n"]}'))
noteHash['smo35471'] = smo35471;
smo35471.setAttribute('id', 'smo35471');
const smo35472 = new VF.Annotation('am');
smo35472.setAttribute('id', 'smo35472');
smo35472.setFont('Merriweather', 11, 'normal');
smo35472.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35471.addModifier(smo35472);
smo35472.addClass('lyric lyric-0');
smo35489v0ar.push(smo35471);
smo35489v0.addTickables(smo35489v0ar)
fmtsmo354896.joinVoices([smo35489v0]);
const fmtsmo358886 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo35888v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35888v0ar = [];
const smo35870 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo35870'] = smo35870;
smo35870.setAttribute('id', 'smo35870');
smo35888v0ar.push(smo35870);
const smo35871 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","fn/3/n"]}'))
noteHash['smo35871'] = smo35871;
smo35871.setAttribute('id', 'smo35871');
smo35888v0ar.push(smo35871);
const smo35872 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","fn/3/n"]}'))
noteHash['smo35872'] = smo35872;
smo35872.setAttribute('id', 'smo35872');
smo35888v0ar.push(smo35872);
smo35888v0.addTickables(smo35888v0ar)
fmtsmo358886.joinVoices([smo35888v0]);
// create beam groups and tuplets for format grp smo36086 before formatting
const dirsmo37325 = smo35467.getStemDirection();
smo35467.setStemDirection(dirsmo37325);
smo35471.setStemDirection(dirsmo37325);
const smo37325 = new VF.Beam([smo35467,smo35471]);
const dirsmo37328 = smo35871.getStemDirection();
smo35871.setStemDirection(dirsmo37328);
smo35872.setStemDirection(dirsmo37328);
const smo37328 = new VF.Beam([smo35871,smo35872]);
 
// formatting measures in staff group smo36086
fmtsmo354896.format([smo35489v0,smo35888v0], 161);
const stavesmo35489 = new VF.Stave(246, 519, 175);
stavesmo35489.setAttribute('id', 'stavesmo35489');
stavesmo35489.setBegBarType(VF.Barline.type.NONE);
stavesmo35489.setContext(context);
stavesmo35489.draw();
smo35489v0.draw(context, stavesmo35489);
smo37325.setContext(context);
smo37325.draw();
const stavesmo35888 = new VF.Stave(246, 705, 175);
stavesmo35888.setAttribute('id', 'stavesmo35888');
stavesmo35888.setBegBarType(VF.Barline.type.NONE);
stavesmo35888.setContext(context);
stavesmo35888.draw();
smo35888v0.draw(context, stavesmo35888);
smo37328.setContext(context);
smo37328.draw();
const fmtsmo355137 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo35513v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35513v0ar = [];
const smo35490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","gn/4/n"]}'))
noteHash['smo35490'] = smo35490;
smo35490.setAttribute('id', 'smo35490');
const smo35491 = new VF.Annotation('worn');
smo35491.setAttribute('id', 'smo35491');
smo35491.setFont('Merriweather', 11, 'normal');
smo35491.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35490.addModifier(smo35491);
smo35491.addClass('lyric lyric-0');
const smo35492 = new VF.Annotation('gone');
smo35492.setAttribute('id', 'smo35492');
smo35492.setFont('Merriweather', 11, 'normal');
smo35492.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35490.addModifier(smo35492);
smo35492.addClass('lyric lyric-1');
const smo35493 = new VF.ChordSymbol();
smo35493.setAttribute('id', 'smo35493');
smo35493.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo35493.setFont('Roboto Slab', 14).setReportWidth(false);
smo35490.addModifier(smo35493, 0);
smo35513v0ar.push(smo35490);
const smo35494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
noteHash['smo35494'] = smo35494;
smo35494.setAttribute('id', 'smo35494');
const smo354940acc = new VF.Accidental('n');
smo35494.addModifier(smo354940acc, 0);
const smo35495 = new VF.Annotation('-');
smo35495.setAttribute('id', 'smo35495');
smo35495.setFont('Merriweather', 11, 'normal');
smo35495.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35494.addModifier(smo35495);
smo35495.addClass('lyric lyric-0 lyric-hyphen');
const smo35496 = new VF.Annotation('-');
smo35496.setAttribute('id', 'smo35496');
smo35496.setFont('Merriweather', 11, 'normal');
smo35496.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35494.addModifier(smo35496);
smo35496.addClass('lyric lyric-1 lyric-hyphen');
const smo35497 = new VF.ChordSymbol();
smo35497.setAttribute('id', 'smo35497');
smo35497.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo35497.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo35497.setFont('Roboto Slab', 14).setReportWidth(false);
smo35494.addModifier(smo35497, 0);
smo35513v0ar.push(smo35494);
smo35513v0.addTickables(smo35513v0ar)
fmtsmo355137.joinVoices([smo35513v0]);
const fmtsmo359067 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo35906v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35906v0ar = [];
const smo35889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","en/3/n"]}'))
noteHash['smo35889'] = smo35889;
smo35889.setAttribute('id', 'smo35889');
smo35906v0ar.push(smo35889);
const smo35890 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","fn/3/n"]}'))
noteHash['smo35890'] = smo35890;
smo35890.setAttribute('id', 'smo35890');
smo35906v0ar.push(smo35890);
smo35906v0.addTickables(smo35906v0ar)
fmtsmo359067.joinVoices([smo35906v0]);
// create beam groups and tuplets for format grp smo36086 before formatting
 
// formatting measures in staff group smo36086
fmtsmo355137.format([smo35513v0,smo35906v0], 79);
const stavesmo35513 = new VF.Stave(421, 519, 93);
stavesmo35513.setAttribute('id', 'stavesmo35513');
stavesmo35513.setBegBarType(VF.Barline.type.NONE);
stavesmo35513.setContext(context);
stavesmo35513.draw();
smo35513v0.draw(context, stavesmo35513);
const stavesmo35906 = new VF.Stave(421, 705, 93);
stavesmo35906.setAttribute('id', 'stavesmo35906');
stavesmo35906.setBegBarType(VF.Barline.type.NONE);
stavesmo35906.setContext(context);
stavesmo35906.draw();
smo35906v0.draw(context, stavesmo35906);
const fmtsmo355408 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo35540v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35540v0ar = [];
const smo35514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","gn/4/n"]}'))
noteHash['smo35514'] = smo35514;
smo35514.setAttribute('id', 'smo35514');
const smo35515 = new VF.Annotation('-');
smo35515.setAttribute('id', 'smo35515');
smo35515.setFont('Merriweather', 11, 'normal');
smo35515.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35514.addModifier(smo35515);
smo35515.addClass('lyric lyric-0 lyric-hyphen');
const smo35516 = new VF.Annotation('-');
smo35516.setAttribute('id', 'smo35516');
smo35516.setFont('Merriweather', 11, 'normal');
smo35516.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35514.addModifier(smo35516);
smo35516.addClass('lyric lyric-1 lyric-hyphen');
const smo35517 = new VF.ChordSymbol();
smo35517.setAttribute('id', 'smo35517');
smo35517.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo35517.setFont('Roboto Slab', 14).setReportWidth(false);
smo35514.addModifier(smo35517, 0);
smo35540v0ar.push(smo35514);
const smo35518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","an/4/n"]}'))
noteHash['smo35518'] = smo35518;
smo35518.setAttribute('id', 'smo35518');
const smo35519 = new VF.Annotation('Through');
smo35519.setAttribute('id', 'smo35519');
smo35519.setFont('Merriweather', 11, 'normal');
smo35519.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35518.addModifier(smo35519);
smo35519.addClass('lyric lyric-0');
const smo35520 = new VF.Annotation('at');
smo35520.setAttribute('id', 'smo35520');
smo35520.setFont('Merriweather', 11, 'normal');
smo35520.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35518.addModifier(smo35520);
smo35520.addClass('lyric lyric-1');
const smo35521 = new VF.ChordSymbol();
smo35521.setAttribute('id', 'smo35521');
smo35521.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo35521.setFont('Roboto Slab', 14).setReportWidth(false);
smo35518.addModifier(smo35521, 0);
smo35540v0ar.push(smo35518);
const smo35522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n"]}'))
noteHash['smo35522'] = smo35522;
smo35522.setAttribute('id', 'smo35522');
const smo35523 = new VF.Annotation('the');
smo35523.setAttribute('id', 'smo35523');
smo35523.setFont('Merriweather', 11, 'normal');
smo35523.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35522.addModifier(smo35523);
smo35523.addClass('lyric lyric-0');
const smo35524 = new VF.Annotation('the');
smo35524.setAttribute('id', 'smo35524');
smo35524.setFont('Merriweather', 11, 'normal');
smo35524.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35522.addModifier(smo35524);
smo35524.addClass('lyric lyric-1');
smo35540v0ar.push(smo35522);
smo35540v0.addTickables(smo35540v0ar)
fmtsmo355408.joinVoices([smo35540v0]);
const fmtsmo359258 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo35925v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35925v0ar = [];
const smo35907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n"]}'))
noteHash['smo35907'] = smo35907;
smo35907.setAttribute('id', 'smo35907');
smo35925v0ar.push(smo35907);
const smo35908 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
noteHash['smo35908'] = smo35908;
smo35908.setAttribute('id', 'smo35908');
smo35925v0ar.push(smo35908);
const smo35909 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
noteHash['smo35909'] = smo35909;
smo35909.setAttribute('id', 'smo35909');
smo35925v0ar.push(smo35909);
smo35925v0.addTickables(smo35925v0ar)
fmtsmo359258.joinVoices([smo35925v0]);
// create beam groups and tuplets for format grp smo36086 before formatting
const dirsmo37335 = smo35518.getStemDirection();
smo35518.setStemDirection(dirsmo37335);
smo35522.setStemDirection(dirsmo37335);
const smo37335 = new VF.Beam([smo35518,smo35522]);
const dirsmo37338 = smo35908.getStemDirection();
smo35908.setStemDirection(dirsmo37338);
smo35909.setStemDirection(dirsmo37338);
const smo37338 = new VF.Beam([smo35908,smo35909]);
 
// formatting measures in staff group smo36086
fmtsmo355408.format([smo35540v0,smo35925v0], 153);
const stavesmo35540 = new VF.Stave(514, 519, 167);
stavesmo35540.setAttribute('id', 'stavesmo35540');
stavesmo35540.setBegBarType(VF.Barline.type.NONE);
stavesmo35540.setContext(context);
stavesmo35540.draw();
smo35540v0.draw(context, stavesmo35540);
smo37335.setContext(context);
smo37335.draw();
const stavesmo35925 = new VF.Stave(514, 705, 167);
stavesmo35925.setAttribute('id', 'stavesmo35925');
stavesmo35925.setBegBarType(VF.Barline.type.NONE);
stavesmo35925.setContext(context);
stavesmo35925.draw();
smo35925v0.draw(context, stavesmo35925);
smo37338.setContext(context);
smo37338.draw();
const fmtsmo355679 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo35567v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35567v0ar = [];
const smo35541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","cn/5/n"]}'))
noteHash['smo35541'] = smo35541;
smo35541.setAttribute('id', 'smo35541');
const smo35542 = new VF.Annotation('storm,');
smo35542.setAttribute('id', 'smo35542');
smo35542.setFont('Merriweather', 11, 'normal');
smo35542.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35541.addModifier(smo35542);
smo35542.addClass('lyric lyric-0');
const smo35543 = new VF.Annotation('riv');
smo35543.setAttribute('id', 'smo35543');
smo35543.setFont('Merriweather', 11, 'normal');
smo35543.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35541.addModifier(smo35543);
smo35543.addClass('lyric lyric-1 lyric-hyphen');
const smo35544 = new VF.ChordSymbol();
smo35544.setAttribute('id', 'smo35544');
smo35544.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo35544.setFont('Roboto Slab', 14).setReportWidth(false);
smo35541.addModifier(smo35544, 0);
smo35567v0ar.push(smo35541);
const smo35545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
noteHash['smo35545'] = smo35545;
smo35545.setAttribute('id', 'smo35545');
const smo35546 = new VF.Annotation('through');
smo35546.setAttribute('id', 'smo35546');
smo35546.setFont('Merriweather', 11, 'normal');
smo35546.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35545.addModifier(smo35546);
smo35546.addClass('lyric lyric-0');
const smo35547 = new VF.Annotation('er');
smo35547.setAttribute('id', 'smo35547');
smo35547.setFont('Merriweather', 11, 'normal');
smo35547.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35545.addModifier(smo35547);
smo35547.addClass('lyric lyric-1');
const smo35548 = new VF.ChordSymbol();
smo35548.setAttribute('id', 'smo35548');
smo35548.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo35548.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo35548.setFont('Roboto Slab', 14).setReportWidth(false);
smo35545.addModifier(smo35548, 0);
smo35567v0ar.push(smo35545);
const smo35549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
noteHash['smo35549'] = smo35549;
smo35549.setAttribute('id', 'smo35549');
const smo35550 = new VF.Annotation('the');
smo35550.setAttribute('id', 'smo35550');
smo35550.setFont('Merriweather', 11, 'normal');
smo35550.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35549.addModifier(smo35550);
smo35550.addClass('lyric lyric-0');
const smo35551 = new VF.Annotation('I');
smo35551.setAttribute('id', 'smo35551');
smo35551.setFont('Merriweather', 11, 'normal');
smo35551.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35549.addModifier(smo35551);
smo35551.addClass('lyric lyric-1');
smo35567v0ar.push(smo35549);
smo35567v0.addTickables(smo35567v0ar)
fmtsmo355679.joinVoices([smo35567v0]);
const fmtsmo359449 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo35944v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35944v0ar = [];
const smo35926 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo35926'] = smo35926;
smo35926.setAttribute('id', 'smo35926');
smo35944v0ar.push(smo35926);
const smo35927 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n"]}'))
noteHash['smo35927'] = smo35927;
smo35927.setAttribute('id', 'smo35927');
smo35944v0ar.push(smo35927);
const smo35928 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n"]}'))
noteHash['smo35928'] = smo35928;
smo35928.setAttribute('id', 'smo35928');
smo35944v0ar.push(smo35928);
smo35944v0.addTickables(smo35944v0ar)
fmtsmo359449.joinVoices([smo35944v0]);
// create beam groups and tuplets for format grp smo36086 before formatting
const dirsmo37341 = smo35545.getStemDirection();
smo35545.setStemDirection(dirsmo37341);
smo35549.setStemDirection(dirsmo37341);
const smo37341 = new VF.Beam([smo35545,smo35549]);
const dirsmo37344 = smo35927.getStemDirection();
smo35927.setStemDirection(dirsmo37344);
smo35928.setStemDirection(dirsmo37344);
const smo37344 = new VF.Beam([smo35927,smo35928]);
 
// formatting measures in staff group smo36086
fmtsmo355679.format([smo35567v0,smo35944v0], 196);
const stavesmo35567 = new VF.Stave(681, 519, 210);
stavesmo35567.setAttribute('id', 'stavesmo35567');
stavesmo35567.setBegBarType(VF.Barline.type.NONE);
stavesmo35567.setContext(context);
stavesmo35567.draw();
smo35567v0.draw(context, stavesmo35567);
smo37341.setContext(context);
smo37341.draw();
const stavesmo35944 = new VF.Stave(681, 705, 210);
stavesmo35944.setAttribute('id', 'stavesmo35944');
stavesmo35944.setBegBarType(VF.Barline.type.NONE);
stavesmo35944.setContext(context);
stavesmo35944.draw();
smo35944v0.draw(context, stavesmo35944);
smo37344.setContext(context);
smo37344.draw();
const fmtsmo3559410 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo35594v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35594v0ar = [];
const smo35568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","an/4/n"]}'))
noteHash['smo35568'] = smo35568;
smo35568.setAttribute('id', 'smo35568');
const smo35569 = new VF.Annotation('night');
smo35569.setAttribute('id', 'smo35569');
smo35569.setFont('Merriweather', 11, 'normal');
smo35569.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35568.addModifier(smo35569);
smo35569.addClass('lyric lyric-0');
const smo35570 = new VF.Annotation('stand,');
smo35570.setAttribute('id', 'smo35570');
smo35570.setFont('Merriweather', 11, 'normal');
smo35570.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35568.addModifier(smo35570);
smo35570.addClass('lyric lyric-1');
const smo35571 = new VF.ChordSymbol();
smo35571.setAttribute('id', 'smo35571');
smo35571.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo35571.setFont('Roboto Slab', 14).setReportWidth(false);
smo35568.addModifier(smo35571, 0);
smo35594v0ar.push(smo35568);
const smo35572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","an/4/n"]}'))
noteHash['smo35572'] = smo35572;
smo35572.setAttribute('id', 'smo35572');
const smo355720acc = new VF.Accidental('b');
smo35572.addModifier(smo355720acc, 0);
const smo35573 = new VF.Annotation('lead');
smo35573.setAttribute('id', 'smo35573');
smo35573.setFont('Merriweather', 11, 'normal');
smo35573.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35572.addModifier(smo35573);
smo35573.addClass('lyric lyric-0');
const smo35574 = new VF.Annotation('guide');
smo35574.setAttribute('id', 'smo35574');
smo35574.setFont('Merriweather', 11, 'normal');
smo35574.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35572.addModifier(smo35574);
smo35574.addClass('lyric lyric-1');
const smo35575 = new VF.ChordSymbol();
smo35575.setAttribute('id', 'smo35575');
smo35575.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo35575.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo35575.setFont('Roboto Slab', 14).setReportWidth(false);
smo35572.addModifier(smo35575, 0);
smo35594v0ar.push(smo35572);
const smo35576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","an/4/n"]}'))
noteHash['smo35576'] = smo35576;
smo35576.setAttribute('id', 'smo35576');
const smo35577 = new VF.Annotation('me');
smo35577.setAttribute('id', 'smo35577');
smo35577.setFont('Merriweather', 11, 'normal');
smo35577.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35576.addModifier(smo35577);
smo35577.addClass('lyric lyric-0');
const smo35578 = new VF.Annotation('me');
smo35578.setAttribute('id', 'smo35578');
smo35578.setFont('Merriweather', 11, 'normal');
smo35578.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35576.addModifier(smo35578);
smo35578.addClass('lyric lyric-1');
smo35594v0ar.push(smo35576);
smo35594v0.addTickables(smo35594v0ar)
fmtsmo3559410.joinVoices([smo35594v0]);
const fmtsmo3596310 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo35963v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35963v0ar = [];
const smo35945 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","cn/4/n"]}'))
noteHash['smo35945'] = smo35945;
smo35945.setAttribute('id', 'smo35945');
smo35963v0ar.push(smo35945);
const smo35946 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","cn/4/n"]}'))
noteHash['smo35946'] = smo35946;
smo35946.setAttribute('id', 'smo35946');
smo35963v0ar.push(smo35946);
const smo35947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","cn/4/n"]}'))
noteHash['smo35947'] = smo35947;
smo35947.setAttribute('id', 'smo35947');
smo35963v0ar.push(smo35947);
smo35963v0.addTickables(smo35963v0ar)
fmtsmo3596310.joinVoices([smo35963v0]);
// create beam groups and tuplets for format grp smo36086 before formatting
const dirsmo37347 = smo35572.getStemDirection();
smo35572.setStemDirection(dirsmo37347);
smo35576.setStemDirection(dirsmo37347);
const smo37347 = new VF.Beam([smo35572,smo35576]);
const dirsmo37350 = smo35946.getStemDirection();
smo35946.setStemDirection(dirsmo37350);
smo35947.setStemDirection(dirsmo37350);
const smo37350 = new VF.Beam([smo35946,smo35947]);
 
// formatting measures in staff group smo36086
fmtsmo3559410.format([smo35594v0,smo35963v0], 173);
const stavesmo35594 = new VF.Stave(891, 519, 187);
stavesmo35594.setAttribute('id', 'stavesmo35594');
stavesmo35594.setBegBarType(VF.Barline.type.NONE);
stavesmo35594.setContext(context);
stavesmo35594.draw();
smo35594v0.draw(context, stavesmo35594);
smo37347.setContext(context);
smo37347.draw();
const stavesmo35963 = new VF.Stave(891, 705, 187);
stavesmo35963.setAttribute('id', 'stavesmo35963');
stavesmo35963.setBegBarType(VF.Barline.type.NONE);
stavesmo35963.setContext(context);
stavesmo35963.draw();
smo35963v0.draw(context, stavesmo35963);
smo37350.setContext(context);
smo37350.draw();
const rightsmo36086stavesmo355941 = new VF.StaveConnector(stavesmo35594, stavesmo35963).setType(0);
rightsmo36086stavesmo355941.setContext(context).draw();
const fmtsmo3562111 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo35621v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35621v0ar = [];
const smo35595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","gn/4/n"]}'))
noteHash['smo35595'] = smo35595;
smo35595.setAttribute('id', 'smo35595');
const smo35596 = new VF.Annotation('on');
smo35596.setAttribute('id', 'smo35596');
smo35596.setFont('Merriweather', 11, 'normal');
smo35596.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35595.addModifier(smo35596);
smo35596.addClass('lyric lyric-0');
const smo35597 = new VF.Annotation('feet,');
smo35597.setAttribute('id', 'smo35597');
smo35597.setFont('Merriweather', 11, 'normal');
smo35597.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35595.addModifier(smo35597);
smo35597.addClass('lyric lyric-1');
const smo35598 = new VF.ChordSymbol();
smo35598.setAttribute('id', 'smo35598');
smo35598.addGlyphOrText('Gm', JSON.parse('{"text":"Gm","symbolModifier":1,"symbolType":2}'));
smo35598.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo35598.setFont('Roboto Slab', 14).setReportWidth(false);
smo35595.addModifier(smo35598, 0);
smo35621v0ar.push(smo35595);
const smo35599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo35599'] = smo35599;
smo35599.setAttribute('id', 'smo35599');
const smo35600 = new VF.Annotation('to');
smo35600.setAttribute('id', 'smo35600');
smo35600.setFont('Merriweather', 11, 'normal');
smo35600.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35599.addModifier(smo35600);
smo35600.addClass('lyric lyric-0');
const smo35601 = new VF.Annotation('hold');
smo35601.setAttribute('id', 'smo35601');
smo35601.setFont('Merriweather', 11, 'normal');
smo35601.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35599.addModifier(smo35601);
smo35601.addClass('lyric lyric-1');
const smo35602 = new VF.ChordSymbol();
smo35602.setAttribute('id', 'smo35602');
smo35602.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1,"symbolType":2}'));
smo35602.addGlyph('b', JSON.parse('{"glyph":"b","symbolModifier":1,"symbolType":1}'));
smo35602.setFont('Roboto Slab', 14).setReportWidth(false);
smo35599.addModifier(smo35602, 0);
smo35621v0ar.push(smo35599);
const smo35603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo35603'] = smo35603;
smo35603.setAttribute('id', 'smo35603');
const smo35604 = new VF.Annotation('the');
smo35604.setAttribute('id', 'smo35604');
smo35604.setFont('Merriweather', 11, 'normal');
smo35604.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35603.addModifier(smo35604);
smo35604.addClass('lyric lyric-0');
const smo35605 = new VF.Annotation('my');
smo35605.setAttribute('id', 'smo35605');
smo35605.setFont('Merriweather', 11, 'normal');
smo35605.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35603.addModifier(smo35605);
smo35605.addClass('lyric lyric-1');
smo35621v0ar.push(smo35603);
smo35621v0.addTickables(smo35621v0ar)
fmtsmo3562111.joinVoices([smo35621v0]);
const fmtsmo3598211 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo35982v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35982v0ar = [];
const smo35964 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
noteHash['smo35964'] = smo35964;
smo35964.setAttribute('id', 'smo35964');
smo35982v0ar.push(smo35964);
const smo35965 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
noteHash['smo35965'] = smo35965;
smo35965.setAttribute('id', 'smo35965');
smo35982v0ar.push(smo35965);
const smo35966 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
noteHash['smo35966'] = smo35966;
smo35966.setAttribute('id', 'smo35966');
smo35982v0ar.push(smo35966);
smo35982v0.addTickables(smo35982v0ar)
fmtsmo3598211.joinVoices([smo35982v0]);
// create beam groups and tuplets for format grp smo36086 before formatting
const dirsmo37359 = smo35599.getStemDirection();
smo35599.setStemDirection(dirsmo37359);
smo35603.setStemDirection(dirsmo37359);
const smo37359 = new VF.Beam([smo35599,smo35603]);
const dirsmo37362 = smo35965.getStemDirection();
smo35965.setStemDirection(dirsmo37362);
smo35966.setStemDirection(dirsmo37362);
const smo37362 = new VF.Beam([smo35965,smo35966]);
 
// formatting measures in staff group smo36086
fmtsmo3562111.format([smo35621v0,smo35982v0], 161);
const stavesmo35621 = new VF.Stave(43, 854, 236);
stavesmo35621.setAttribute('id', 'stavesmo35621');
stavesmo35621.setBegBarType(1);
stavesmo35621.addClef('treble');
const keysmo35621 = new VF.KeySignature('F');
keysmo35621.addToStave(stavesmo35621);
stavesmo35621.setContext(context);
stavesmo35621.draw();
smo35621v0.draw(context, stavesmo35621);
smo37359.setContext(context);
smo37359.draw();
const stavesmo35982 = new VF.Stave(43, 1040, 236);
stavesmo35982.setAttribute('id', 'stavesmo35982');
stavesmo35982.setBegBarType(1);
stavesmo35982.addClef('bass');
const keysmo35982 = new VF.KeySignature('F');
keysmo35982.addToStave(stavesmo35982);
stavesmo35982.setContext(context);
stavesmo35982.draw();
smo35982v0.draw(context, stavesmo35982);
smo37362.setContext(context);
smo37362.draw();
const leftsmo36086stavesmo356211 = new VF.StaveConnector(stavesmo35621, stavesmo35982).setType(3);
leftsmo36086stavesmo356211.setContext(context).draw();
const fmtsmo3564912 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo35649v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35649v0ar = [];
const smo35622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
noteHash['smo35622'] = smo35622;
smo35622.setAttribute('id', 'smo35622');
const smo35623 = new VF.Annotation('li');
smo35623.setAttribute('id', 'smo35623');
smo35623.setFont('Merriweather', 11, 'normal');
smo35623.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35622.addModifier(smo35623);
smo35623.addClass('lyric lyric-0 lyric-hyphen');
const smo35624 = new VF.Annotation('ha');
smo35624.setAttribute('id', 'smo35624');
smo35624.setFont('Merriweather', 11, 'normal');
smo35624.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35622.addModifier(smo35624);
smo35624.addClass('lyric lyric-1 lyric-hyphen');
smo35649v0ar.push(smo35622);
const smo35625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo35625'] = smo35625;
smo35625.setAttribute('id', 'smo35625');
smo35625.addModifier(new VF.Dot(), 0);
smo35625.addModifier(new VF.Dot(), 1);
const smo35626 = new VF.Annotation('ght');
smo35626.setAttribute('id', 'smo35626');
smo35626.setFont('Merriweather', 11, 'normal');
smo35626.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35625.addModifier(smo35626);
smo35626.addClass('lyric lyric-0');
const smo35627 = new VF.Annotation('nd');
smo35627.setAttribute('id', 'smo35627');
smo35627.setFont('Merriweather', 11, 'normal');
smo35627.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35625.addModifier(smo35627);
smo35627.addClass('lyric lyric-1');
smo35649v0ar.push(smo35625);
const smo35628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo35628'] = smo35628;
smo35628.setAttribute('id', 'smo35628');
const smo35629 = new VF.Annotation('Take');
smo35629.setAttribute('id', 'smo35629');
smo35629.setFont('Merriweather', 11, 'normal');
smo35629.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35628.addModifier(smo35629);
smo35629.addClass('lyric lyric-0');
const smo35631 = new VF.ChordSymbol();
smo35631.setAttribute('id', 'smo35631');
smo35631.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1,"symbolType":2}'));
smo35631.addGlyph('diminished', JSON.parse('{"glyph":"diminished","symbolModifier":3,"symbolType":1}'));
smo35631.setFont('Roboto Slab', 14).setReportWidth(false);
smo35628.addModifier(smo35631, 0);
smo35649v0ar.push(smo35628);
const smo35632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo35632'] = smo35632;
smo35632.setAttribute('id', 'smo35632');
const smo35633 = new VF.Annotation('my');
smo35633.setAttribute('id', 'smo35633');
smo35633.setFont('Merriweather', 11, 'normal');
smo35633.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35632.addModifier(smo35633);
smo35633.addClass('lyric lyric-0');
smo35649v0ar.push(smo35632);
smo35649v0.addTickables(smo35649v0ar)
fmtsmo3564912.joinVoices([smo35649v0]);
const fmtsmo3600212 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo36002v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36002v0ar = [];
const smo35983 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","fn/3/n"]}'))
noteHash['smo35983'] = smo35983;
smo35983.setAttribute('id', 'smo35983');
smo36002v0ar.push(smo35983);
const smo35984 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
noteHash['smo35984'] = smo35984;
smo35984.setAttribute('id', 'smo35984');
smo35984.addModifier(new VF.Dot(), 0);
smo35984.addModifier(new VF.Dot(), 1);
smo36002v0ar.push(smo35984);
const smo35985 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","ab/3/n"]}'))
noteHash['smo35985'] = smo35985;
smo35985.setAttribute('id', 'smo35985');
const smo359850acc = new VF.Accidental('n');
smo35985.addModifier(smo359850acc, 0);
const smo359851acc = new VF.Accidental('b');
smo35985.addModifier(smo359851acc, 1);
smo36002v0ar.push(smo35985);
const smo35986 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","gn/3/n"]}'))
noteHash['smo35986'] = smo35986;
smo35986.setAttribute('id', 'smo35986');
smo36002v0ar.push(smo35986);
smo36002v0.addTickables(smo36002v0ar)
fmtsmo3600212.joinVoices([smo36002v0]);
// create beam groups and tuplets for format grp smo36086 before formatting
const dirsmo37365 = smo35628.getStemDirection();
smo35628.setStemDirection(dirsmo37365);
smo35632.setStemDirection(dirsmo37365);
const smo37365 = new VF.Beam([smo35628,smo35632]);
const dirsmo37368 = smo35985.getStemDirection();
smo35985.setStemDirection(dirsmo37368);
smo35986.setStemDirection(dirsmo37368);
const smo37368 = new VF.Beam([smo35985,smo35986]);
 
// formatting measures in staff group smo36086
fmtsmo3564912.format([smo35649v0,smo36002v0], 191);
const stavesmo35649 = new VF.Stave(279, 854, 205);
stavesmo35649.setAttribute('id', 'stavesmo35649');
stavesmo35649.setBegBarType(VF.Barline.type.NONE);
stavesmo35649.setContext(context);
stavesmo35649.draw();
smo35649v0.draw(context, stavesmo35649);
smo37365.setContext(context);
smo37365.draw();
const stavesmo36002 = new VF.Stave(279, 1040, 205);
stavesmo36002.setAttribute('id', 'stavesmo36002');
stavesmo36002.setBegBarType(VF.Barline.type.NONE);
stavesmo36002.setContext(context);
stavesmo36002.draw();
smo36002v0.draw(context, stavesmo36002);
smo37368.setContext(context);
smo37368.draw();
const fmtsmo3567613 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo35676v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35676v0ar = [];
const smo35650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo35650'] = smo35650;
smo35650.setAttribute('id', 'smo35650');
const smo35651 = new VF.Annotation('ha');
smo35651.setAttribute('id', 'smo35651');
smo35651.setFont('Merriweather', 11, 'normal');
smo35651.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35650.addModifier(smo35651);
smo35651.addClass('lyric lyric-0 lyric-hyphen');
const smo35652 = new VF.ChordSymbol();
smo35652.setAttribute('id', 'smo35652');
smo35652.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo35652.setFont('Roboto Slab', 14).setReportWidth(false);
smo35650.addModifier(smo35652, 0);
smo35676v0ar.push(smo35650);
const smo35653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo35653'] = smo35653;
smo35653.setAttribute('id', 'smo35653');
smo35653.addModifier(new VF.Dot(), 0);
const smo35654 = new VF.Annotation('nd');
smo35654.setAttribute('id', 'smo35654');
smo35654.setFont('Merriweather', 11, 'normal');
smo35654.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35653.addModifier(smo35654);
smo35654.addClass('lyric lyric-0');
smo35676v0ar.push(smo35653);
const smo35655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo35655'] = smo35655;
smo35655.setAttribute('id', 'smo35655');
const smo35656 = new VF.Annotation('pre');
smo35656.setAttribute('id', 'smo35656');
smo35656.setFont('Merriweather', 11, 'normal');
smo35656.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35655.addModifier(smo35656);
smo35656.addClass('lyric lyric-0 lyric-hyphen');
const smo35657 = new VF.ChordSymbol();
smo35657.setAttribute('id', 'smo35657');
smo35657.addGlyphOrText('Dm', JSON.parse('{"text":"Dm","symbolModifier":1,"symbolType":2}'));
smo35657.setFont('Roboto Slab', 14).setReportWidth(false);
smo35655.addModifier(smo35657, 0);
smo35676v0ar.push(smo35655);
const smo35658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","gn/4/n"]}'))
noteHash['smo35658'] = smo35658;
smo35658.setAttribute('id', 'smo35658');
const smo35659 = new VF.Annotation('cious');
smo35659.setAttribute('id', 'smo35659');
smo35659.setFont('Merriweather', 11, 'normal');
smo35659.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35658.addModifier(smo35659);
smo35659.addClass('lyric lyric-0');
const smo35660 = new VF.ChordSymbol();
smo35660.setAttribute('id', 'smo35660');
smo35660.addGlyphOrText('A', JSON.parse('{"text":"A","symbolModifier":1,"symbolType":2}'));
smo35660.addGlyph('+', JSON.parse('{"glyph":"+","symbolModifier":3,"symbolType":1}'));
smo35660.addGlyphOrText('5', JSON.parse('{"text":"5","symbolModifier":3,"symbolType":2}'));
smo35660.setFont('Roboto Slab', 14).setReportWidth(false);
smo35658.addModifier(smo35660, 0);
smo35676v0ar.push(smo35658);
smo35676v0.addTickables(smo35676v0ar)
fmtsmo3567613.joinVoices([smo35676v0]);
const fmtsmo3602113 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo36021v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36021v0ar = [];
const smo36003 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","an/3/n"]}'))
noteHash['smo36003'] = smo36003;
smo36003.setAttribute('id', 'smo36003');
smo36021v0ar.push(smo36003);
const smo36004 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","an/3/n"]}'))
noteHash['smo36004'] = smo36004;
smo36004.setAttribute('id', 'smo36004');
smo36021v0ar.push(smo36004);
const smo36005 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["db/3/n","bn/3/n"]}'))
noteHash['smo36005'] = smo36005;
smo36005.setAttribute('id', 'smo36005');
const smo360050acc = new VF.Accidental('b');
smo36005.addModifier(smo360050acc, 0);
const smo360051acc = new VF.Accidental('n');
smo36005.addModifier(smo360051acc, 1);
smo36021v0ar.push(smo36005);
smo36021v0.addTickables(smo36021v0ar)
fmtsmo3602113.joinVoices([smo36021v0]);
// create beam groups and tuplets for format grp smo36086 before formatting
const dirsmo37371 = smo35655.getStemDirection();
smo35655.setStemDirection(dirsmo37371);
smo35658.setStemDirection(dirsmo37371);
const smo37371 = new VF.Beam([smo35655,smo35658]);
const dirsmo37374 = smo36004.getStemDirection();
smo36004.setStemDirection(dirsmo37374);
smo36005.setStemDirection(dirsmo37374);
const smo37374 = new VF.Beam([smo36004,smo36005]);
 
// formatting measures in staff group smo36086
fmtsmo3567613.format([smo35676v0,smo36021v0], 186);
const stavesmo35676 = new VF.Stave(484, 854, 200);
stavesmo35676.setAttribute('id', 'stavesmo35676');
stavesmo35676.setBegBarType(VF.Barline.type.NONE);
stavesmo35676.setContext(context);
stavesmo35676.draw();
smo35676v0.draw(context, stavesmo35676);
smo37371.setContext(context);
smo37371.draw();
const stavesmo36021 = new VF.Stave(484, 1040, 200);
stavesmo36021.setAttribute('id', 'stavesmo36021');
stavesmo36021.setBegBarType(VF.Barline.type.NONE);
stavesmo36021.setContext(context);
stavesmo36021.draw();
smo36021v0.draw(context, stavesmo36021);
smo37374.setContext(context);
smo37374.draw();
const fmtsmo3570014 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo35700v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35700v0ar = [];
const smo35677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","an/4/n"]}'))
noteHash['smo35677'] = smo35677;
smo35677.setAttribute('id', 'smo35677');
const smo35678 = new VF.Annotation('Lord,');
smo35678.setAttribute('id', 'smo35678');
smo35678.setFont('Merriweather', 11, 'normal');
smo35678.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35677.addModifier(smo35678);
smo35678.addClass('lyric lyric-0');
const smo35679 = new VF.ChordSymbol();
smo35679.setAttribute('id', 'smo35679');
smo35679.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo35679.setFont('Roboto Slab', 14).setReportWidth(false);
smo35677.addModifier(smo35679, 0);
smo35700v0ar.push(smo35677);
const smo35680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","gn/4/n"]}'))
noteHash['smo35680'] = smo35680;
smo35680.setAttribute('id', 'smo35680');
smo35680.addModifier(new VF.Dot(), 0);
smo35680.addModifier(new VF.Dot(), 1);
const smo35681 = new VF.Annotation('lead');
smo35681.setAttribute('id', 'smo35681');
smo35681.setFont('Merriweather', 11, 'normal');
smo35681.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35680.addModifier(smo35681);
smo35681.addClass('lyric lyric-0');
const smo35682 = new VF.ChordSymbol();
smo35682.setAttribute('id', 'smo35682');
smo35682.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo35682.addGlyph('(', JSON.parse('{"glyph":"(","symbolModifier":3,"symbolType":1}'));
smo35682.addGlyphOrText('sus4', JSON.parse('{"text":"sus4","symbolModifier":3,"symbolType":2}'));
smo35682.addGlyph(')', JSON.parse('{"glyph":")","symbolModifier":3,"symbolType":1}'));
smo35682.setFont('Roboto Slab', 14).setReportWidth(false);
smo35680.addModifier(smo35682, 0);
smo35700v0ar.push(smo35680);
const smo35683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","fn/4/n"]}'))
noteHash['smo35683'] = smo35683;
smo35683.setAttribute('id', 'smo35683');
const smo35684 = new VF.Annotation('me');
smo35684.setAttribute('id', 'smo35684');
smo35684.setFont('Merriweather', 11, 'normal');
smo35684.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35683.addModifier(smo35684);
smo35684.addClass('lyric lyric-0');
smo35700v0ar.push(smo35683);
smo35700v0.addTickables(smo35700v0ar)
fmtsmo3570014.joinVoices([smo35700v0]);
const fmtsmo3604014 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo36040v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36040v0ar = [];
const smo36022 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
noteHash['smo36022'] = smo36022;
smo36022.setAttribute('id', 'smo36022');
smo36040v0ar.push(smo36022);
const smo36023 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/3/n","bb/3/n"]}'))
noteHash['smo36023'] = smo36023;
smo36023.setAttribute('id', 'smo36023');
smo36023.addModifier(new VF.Dot(), 0);
smo36023.addModifier(new VF.Dot(), 1);
smo36040v0ar.push(smo36023);
const smo36024 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","bb/3/n"]}'))
noteHash['smo36024'] = smo36024;
smo36024.setAttribute('id', 'smo36024');
smo36040v0ar.push(smo36024);
smo36040v0.addTickables(smo36040v0ar)
fmtsmo3604014.joinVoices([smo36040v0]);
// create beam groups and tuplets for format grp smo36086 before formatting
const dirsmo37377 = smo35680.getStemDirection();
smo35680.setStemDirection(dirsmo37377);
smo35683.setStemDirection(dirsmo37377);
const smo37377 = new VF.Beam([smo35680,smo35683]);
const dirsmo37380 = smo36023.getStemDirection();
smo36023.setStemDirection(dirsmo37380);
smo36024.setStemDirection(dirsmo37380);
const smo37380 = new VF.Beam([smo36023,smo36024]);
 
// formatting measures in staff group smo36086
fmtsmo3570014.format([smo35700v0,smo36040v0], 164);
const stavesmo35700 = new VF.Stave(684, 854, 178);
stavesmo35700.setAttribute('id', 'stavesmo35700');
stavesmo35700.setBegBarType(VF.Barline.type.NONE);
stavesmo35700.setContext(context);
stavesmo35700.draw();
smo35700v0.draw(context, stavesmo35700);
smo37377.setContext(context);
smo37377.draw();
const stavesmo36040 = new VF.Stave(684, 1040, 178);
stavesmo36040.setAttribute('id', 'stavesmo36040');
stavesmo36040.setBegBarType(VF.Barline.type.NONE);
stavesmo36040.setContext(context);
stavesmo36040.draw();
smo36040v0.draw(context, stavesmo36040);
smo37380.setContext(context);
smo37380.draw();
const fmtsmo3571915 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo35719v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35719v0ar = [];
const smo35701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","fn/4/n"]}'))
noteHash['smo35701'] = smo35701;
smo35701.setAttribute('id', 'smo35701');
smo35701.addModifier(new VF.Dot(), 0);
smo35701.addModifier(new VF.Dot(), 1);
const smo35702 = new VF.Annotation('home');
smo35702.setAttribute('id', 'smo35702');
smo35702.setFont('Merriweather', 11, 'normal');
smo35702.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35701.addModifier(smo35702);
smo35702.addClass('lyric lyric-0 lyric-hyphen');
const smo35703 = new VF.ChordSymbol();
smo35703.setAttribute('id', 'smo35703');
smo35703.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo35703.setFont('Roboto Slab', 14).setReportWidth(false);
smo35701.addModifier(smo35703, 0);
smo35719v0ar.push(smo35701);
smo35719v0.addTickables(smo35719v0ar)
fmtsmo3571915.joinVoices([smo35719v0]);
const fmtsmo3605715 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo36057v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36057v0ar = [];
const smo36041 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo36041'] = smo36041;
smo36041.setAttribute('id', 'smo36041');
smo36041.addModifier(new VF.Dot(), 0);
smo36041.addModifier(new VF.Dot(), 1);
smo36057v0ar.push(smo36041);
smo36057v0.addTickables(smo36057v0ar)
fmtsmo3605715.joinVoices([smo36057v0]);
// create beam groups and tuplets for format grp smo36086 before formatting
 
// formatting measures in staff group smo36086
fmtsmo3571915.format([smo35719v0,smo36057v0], 50);
const stavesmo35719 = new VF.Stave(862, 854, 65);
stavesmo35719.setAttribute('id', 'stavesmo35719');
stavesmo35719.setBegBarType(VF.Barline.type.NONE);
stavesmo35719.setEndBarType(2);
stavesmo35719.setContext(context);
stavesmo35719.draw();
smo35719v0.draw(context, stavesmo35719);
const stavesmo36057 = new VF.Stave(862, 1040, 65);
stavesmo36057.setAttribute('id', 'stavesmo36057');
stavesmo36057.setBegBarType(VF.Barline.type.NONE);
stavesmo36057.setEndBarType(2);
stavesmo36057.setContext(context);
stavesmo36057.draw();
smo36057v0.draw(context, stavesmo36057);
const fmtsmo3574216 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo35742v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35742v0ar = [];
const smo35720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","fn/4/n"]}'))
noteHash['smo35720'] = smo35720;
smo35720.setAttribute('id', 'smo35720');
smo35742v0ar.push(smo35720);
const smo35722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo35722'] = smo35722;
smo35722.setAttribute('id', 'smo35722');
const smo35723 = new VF.Annotation('When');
smo35723.setAttribute('id', 'smo35723');
smo35723.setFont('Merriweather', 11, 'normal');
smo35723.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35722.addModifier(smo35723);
smo35723.addClass('lyric lyric-0');
smo35742v0ar.push(smo35722);
const smo35724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo35724'] = smo35724;
smo35724.setAttribute('id', 'smo35724');
const smo35725 = new VF.Annotation('the');
smo35725.setAttribute('id', 'smo35725');
smo35725.setFont('Merriweather', 11, 'normal');
smo35725.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35724.addModifier(smo35725);
smo35725.addClass('lyric lyric-0');
smo35742v0ar.push(smo35724);
smo35742v0.addTickables(smo35742v0ar)
fmtsmo3574216.joinVoices([smo35742v0]);
const fmtsmo3607716 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo36077v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36077v0ar = [];
const smo36058 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo36058'] = smo36058;
smo36058.setAttribute('id', 'smo36058');
smo36077v0ar.push(smo36058);
const smo36059 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo36059'] = smo36059;
smo36059.setAttribute('id', 'smo36059');
smo36077v0ar.push(smo36059);
const smo36060 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo36060'] = smo36060;
smo36060.setAttribute('id', 'smo36060');
smo36077v0ar.push(smo36060);
smo36077v0.addTickables(smo36077v0ar)
fmtsmo3607716.joinVoices([smo36077v0]);
// create beam groups and tuplets for format grp smo36086 before formatting
const dirsmo37385 = smo35722.getStemDirection();
smo35722.setStemDirection(dirsmo37385);
smo35724.setStemDirection(dirsmo37385);
const smo37385 = new VF.Beam([smo35722,smo35724]);
const dirsmo37387 = smo36059.getStemDirection();
smo36059.setStemDirection(dirsmo37387);
smo36060.setStemDirection(dirsmo37387);
const smo37387 = new VF.Beam([smo36059,smo36060]);
 
// formatting measures in staff group smo36086
fmtsmo3574216.format([smo35742v0,smo36077v0], 133);
const stavesmo35742 = new VF.Stave(927, 854, 151);
stavesmo35742.setAttribute('id', 'stavesmo35742');
stavesmo35742.setBegBarType(VF.Barline.type.NONE);
stavesmo35742.setEndBarType(5);
stavesmo35742.setContext(context);
stavesmo35742.draw();
smo35742v0.draw(context, stavesmo35742);
smo37385.setContext(context);
smo37385.draw();
const stavesmo36077 = new VF.Stave(927, 1040, 151);
stavesmo36077.setAttribute('id', 'stavesmo36077');
stavesmo36077.setBegBarType(VF.Barline.type.NONE);
stavesmo36077.setEndBarType(5);
stavesmo36077.setContext(context);
stavesmo36077.draw();
smo36077v0.draw(context, stavesmo36077);
smo37387.setContext(context);
smo37387.draw();
const smo37519 = new VF.StaveTie({ first_note: smo35701, last_note: smo35720, 
          firstNote: smo35701, lastNote: smo35720, first_indices: [0,1], last_indices: [0,1]});
smo37519.setContext(context).draw();
const smo37520 = new VF.StaveTie({ first_note: smo36041, last_note: smo36058, 
          firstNote: smo36041, lastNote: smo36058, first_indices: [0,1], last_indices: [0,1]});
smo37520.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo35309').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo35327').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo35328').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo35333').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo35331').setAttributeNS('', 'transform', 'translate(0 33)');
context.svg.getElementById('vf-smo35335').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo35336').setAttributeNS('', 'transform', 'translate(0 31)');
context.svg.getElementById('vf-smo35354').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo35355').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo35359').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo35358').setAttributeNS('', 'transform', 'translate(0 37)');
context.svg.getElementById('vf-smo35361').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35362').setAttributeNS('', 'transform', 'translate(0 38)');
context.svg.getElementById('vf-smo35381').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo35382').setAttributeNS('', 'transform', 'translate(0 36)');
context.svg.getElementById('vf-smo35385').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo35386').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo35389').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo35390').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo35408').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo35409').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo35411').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo35412').setAttributeNS('', 'transform', 'translate(0 43)');
context.svg.getElementById('vf-smo35414').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo35415').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo35418').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo35419').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo35438').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo35441').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo35445').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo35446').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo35465').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo35468').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo35469').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo35472').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo35491').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo35492').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo35495').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo35496').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo35515').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo35516').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo35519').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo35520').setAttributeNS('', 'transform', 'translate(0 39)');
context.svg.getElementById('vf-smo35523').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35524').setAttributeNS('', 'transform', 'translate(0 41)');
context.svg.getElementById('vf-smo35542').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo35543').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo35546').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo35547').setAttributeNS('', 'transform', 'translate(0 39)');
context.svg.getElementById('vf-smo35550').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35551').setAttributeNS('', 'transform', 'translate(0 43)');
context.svg.getElementById('vf-smo35569').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo35570').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo35573').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35574').setAttributeNS('', 'transform', 'translate(0 37)');
context.svg.getElementById('vf-smo35577').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo35578').setAttributeNS('', 'transform', 'translate(0 43)');
context.svg.getElementById('vf-smo35596').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo35597').setAttributeNS('', 'transform', 'translate(0 38)');
context.svg.getElementById('vf-smo35600').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo35601').setAttributeNS('', 'transform', 'translate(0 41)');
context.svg.getElementById('vf-smo35604').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo35605').setAttributeNS('', 'transform', 'translate(0 38)');
context.svg.getElementById('vf-smo35623').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo35624').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo35626').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo35627').setAttributeNS('', 'transform', 'translate(0 36)');
context.svg.getElementById('vf-smo35629').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo35633').setAttributeNS('', 'transform', 'translate(0 23)');
context.svg.getElementById('vf-smo35651').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35654').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo35656').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo35659').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo35678').setAttributeNS('', 'transform', 'translate(0 27)');
context.svg.getElementById('vf-smo35681').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35684').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo35702').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35725').setAttributeNS('', 'transform', 'translate(0 5)');
}
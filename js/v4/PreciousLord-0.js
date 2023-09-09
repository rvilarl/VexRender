// @@ Precious Lord p 1/1  by Thomas Dorsey
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1421.487603305785');
svg.setAttributeNS('', 'height', '1839.5721925133687');
svg.setAttributeNS('', 'viewBox', '0 0 1166 1509');
//
// create the musical objects
VF.setMusicFont("Bravura","Gonville","Custom");
const fmtsmo329930 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo32993v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo32993v0ar = [];
const smo32974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo32974.setAttribute('id', 'smo32974');
const smo32975 = new VF.Annotation('Pre');
smo32975.setAttribute('id', 'smo32975');
smo32975.setFont('Merriweather', 11, 'normal');
smo32975.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo32974.addModifier(smo32975);
smo32975.addClass('lyric lyric-0 lyric-hyphen');
smo32993v0ar.push(smo32974);
const smo32976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n"]}'))
smo32976.setAttribute('id', 'smo32976');
const smo32977 = new VF.Annotation('cious');
smo32977.setAttribute('id', 'smo32977');
smo32977.setFont('Merriweather', 11, 'normal');
smo32977.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo32976.addModifier(smo32977);
smo32977.addClass('lyric lyric-0');
smo32993v0ar.push(smo32976);
smo32993v0.addTickables(smo32993v0ar)
fmtsmo329930.joinVoices([smo32993v0]);
const fmtsmo334350 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo33435v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33435v0ar = [];
const smo33418 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo33418.setAttribute('id', 'smo33418');
smo33435v0ar.push(smo33418);
const smo33419 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo33419.setAttribute('id', 'smo33419');
smo33435v0ar.push(smo33419);
smo33435v0.addTickables(smo33435v0ar)
fmtsmo334350.joinVoices([smo33435v0]);
// create beam groups and tuplets for format grp smo33754 before formatting
const dirsmo34953 = smo32974.getStemDirection();
smo32974.setStemDirection(dirsmo34953);
smo32976.setStemDirection(dirsmo34953);
const smo34953 = new VF.Beam([smo32974,smo32976]);
const dirsmo34956 = smo33418.getStemDirection();
smo33418.setStemDirection(dirsmo34956);
smo33419.setStemDirection(dirsmo34956);
const smo34956 = new VF.Beam([smo33418,smo33419]);
 
// formatting measures in staff group smo33754
fmtsmo329930.format([smo32993v0,smo33435v0], 117);
const stavesmo32993 = new VF.Stave(43, 178, 215);
stavesmo32993.setAttribute('id', 'stavesmo32993');
stavesmo32993.setBegBarType(1);
stavesmo32993.addClef('treble');
stavesmo32993.addTimeSignature('3/4');
const keysmo32993 = new VF.KeySignature('F');
keysmo32993.addToStave(stavesmo32993);
stavesmo32993.setContext(context);
stavesmo32993.draw();
smo32993v0.draw(context, stavesmo32993);
smo34953.setContext(context);
smo34953.draw();
const stavesmo33435 = new VF.Stave(43, 333, 215);
stavesmo33435.setAttribute('id', 'stavesmo33435');
stavesmo33435.setBegBarType(1);
stavesmo33435.addClef('bass');
stavesmo33435.addTimeSignature('3/4');
const keysmo33435 = new VF.KeySignature('F');
keysmo33435.addToStave(stavesmo33435);
stavesmo33435.setContext(context);
stavesmo33435.draw();
smo33435v0.draw(context, stavesmo33435);
smo34956.setContext(context);
smo34956.draw();
const leftsmo33754stavesmo329931 = new VF.StaveConnector(stavesmo32993, stavesmo33435).setType(3);
leftsmo33754stavesmo329931.setContext(context).draw();
const fmtsmo330201 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo33020v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33020v0ar = [];
const smo32994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo32994.setAttribute('id', 'smo32994');
const smo32995 = new VF.Annotation('Lord,');
smo32995.setAttribute('id', 'smo32995');
smo32995.setFont('Merriweather', 11, 'normal');
smo32995.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo32994.addModifier(smo32995);
smo32995.addClass('lyric lyric-0');
const smo32996 = new VF.Annotation('dark');
smo32996.setAttribute('id', 'smo32996');
smo32996.setFont('Merriweather', 11, 'normal');
smo32996.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo32994.addModifier(smo32996);
smo32996.addClass('lyric lyric-1 lyric-hyphen');
const smo32997 = new VF.ChordSymbol();
smo32997.setAttribute('id', 'smo32997');
smo32997.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo32997.setFont('Roboto Slab', 14).setReportWidth(false);
smo32994.addModifier(smo32997, 0);
smo33020v0ar.push(smo32994);
const smo32998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo32998.setAttribute('id', 'smo32998');
const smo33001 = new VF.Annotation('take');
smo33001.setAttribute('id', 'smo33001');
smo33001.setFont('Merriweather', 11, 'normal');
smo33001.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo32998.addModifier(smo33001);
smo33001.addClass('lyric lyric-0');
const smo32999 = new VF.Annotation('ness');
smo32999.setAttribute('id', 'smo32999');
smo32999.setFont('Merriweather', 11, 'normal');
smo32999.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo32998.addModifier(smo32999);
smo32999.addClass('lyric lyric-1');
const smo33000 = new VF.ChordSymbol();
smo33000.setAttribute('id', 'smo33000');
smo33000.addGlyphOrText('Gm', JSON.parse('{"text":"Gm","symbolModifier":1}'));
smo33000.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo33000.setFont('Roboto Slab', 14).setReportWidth(false);
smo32998.addModifier(smo33000, 0);
smo33020v0ar.push(smo32998);
const smo33002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo33002.setAttribute('id', 'smo33002');
const smo33003 = new VF.Annotation('my');
smo33003.setAttribute('id', 'smo33003');
smo33003.setFont('Merriweather', 11, 'normal');
smo33003.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33002.addModifier(smo33003);
smo33003.addClass('lyric lyric-0');
const smo33004 = new VF.Annotation('a');
smo33004.setAttribute('id', 'smo33004');
smo33004.setFont('Merriweather', 11, 'normal');
smo33004.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33002.addModifier(smo33004);
smo33004.addClass('lyric lyric-1 lyric-hyphen');
smo33020v0ar.push(smo33002);
smo33020v0.addTickables(smo33020v0ar)
fmtsmo330201.joinVoices([smo33020v0]);
const fmtsmo334551 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo33455v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33455v0ar = [];
const smo33436 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo33436.setAttribute('id', 'smo33436');
smo33455v0ar.push(smo33436);
const smo33437 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","fn/3/n"]}'))
smo33437.setAttribute('id', 'smo33437');
smo33455v0ar.push(smo33437);
const smo33438 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","en/3/n"]}'))
smo33438.setAttribute('id', 'smo33438');
smo33455v0ar.push(smo33438);
smo33455v0.addTickables(smo33455v0ar)
fmtsmo334551.joinVoices([smo33455v0]);
// create beam groups and tuplets for format grp smo33754 before formatting
const dirsmo34959 = smo32998.getStemDirection();
smo32998.setStemDirection(dirsmo34959);
smo33002.setStemDirection(dirsmo34959);
const smo34959 = new VF.Beam([smo32998,smo33002]);
const dirsmo34961 = smo33437.getStemDirection();
smo33437.setStemDirection(dirsmo34961);
smo33438.setStemDirection(dirsmo34961);
const smo34961 = new VF.Beam([smo33437,smo33438]);
 
// formatting measures in staff group smo33754
fmtsmo330201.format([smo33020v0,smo33455v0], 185);
const stavesmo33020 = new VF.Stave(258, 178, 208);
stavesmo33020.setAttribute('id', 'stavesmo33020');
stavesmo33020.setBegBarType(4);
stavesmo33020.setContext(context);
stavesmo33020.draw();
smo33020v0.draw(context, stavesmo33020);
smo34959.setContext(context);
smo34959.draw();
const stavesmo33455 = new VF.Stave(258, 333, 208);
stavesmo33455.setAttribute('id', 'stavesmo33455');
stavesmo33455.setBegBarType(4);
stavesmo33455.setContext(context);
stavesmo33455.draw();
smo33455v0.draw(context, stavesmo33455);
smo34961.setContext(context);
smo34961.draw();
const fmtsmo330472 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo33047v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33047v0ar = [];
const smo33021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo33021.setAttribute('id', 'smo33021');
const smo33022 = new VF.Annotation('hand,');
smo33022.setAttribute('id', 'smo33022');
smo33022.setFont('Merriweather', 11, 'normal');
smo33022.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33021.addModifier(smo33022);
smo33022.addClass('lyric lyric-0');
const smo33023 = new VF.Annotation('pears');
smo33023.setAttribute('id', 'smo33023');
smo33023.setFont('Merriweather', 11, 'normal');
smo33023.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33021.addModifier(smo33023);
smo33023.addClass('lyric lyric-1');
const smo33024 = new VF.ChordSymbol();
smo33024.setAttribute('id', 'smo33024');
smo33024.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo33024.setFont('Roboto Slab', 14).setReportWidth(false);
smo33021.addModifier(smo33024, 0);
smo33047v0ar.push(smo33021);
const smo33025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","an/4/n"]}'))
smo33025.setAttribute('id', 'smo33025');
const smo33027 = new VF.Annotation('lead');
smo33027.setAttribute('id', 'smo33027');
smo33027.setFont('Merriweather', 11, 'normal');
smo33027.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33025.addModifier(smo33027);
smo33027.addClass('lyric lyric-0');
const smo33026 = new VF.Annotation('and');
smo33026.setAttribute('id', 'smo33026');
smo33026.setFont('Merriweather', 11, 'normal');
smo33026.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33025.addModifier(smo33026);
smo33026.addClass('lyric lyric-1');
smo33047v0ar.push(smo33025);
const smo33028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n","an/4/n"]}'))
smo33028.setAttribute('id', 'smo33028');
const smo330280acc = new VF.Accidental('#');
smo33028.addModifier(smo330280acc, 0);
const smo33029 = new VF.Annotation('me');
smo33029.setAttribute('id', 'smo33029');
smo33029.setFont('Merriweather', 11, 'normal');
smo33029.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33028.addModifier(smo33029);
smo33029.addClass('lyric lyric-0');
const smo33030 = new VF.Annotation('the');
smo33030.setAttribute('id', 'smo33030');
smo33030.setFont('Merriweather', 11, 'normal');
smo33030.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33028.addModifier(smo33030);
smo33030.addClass('lyric lyric-1');
const smo33031 = new VF.ChordSymbol();
smo33031.setAttribute('id', 'smo33031');
smo33031.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo33031.addGlyph('csymAugmented', JSON.parse('{"glyph":"csymAugmented","symbolModifier":3}'));
smo33031.addGlyphOrText('5', JSON.parse('{"text":"5","symbolModifier":3}'));
smo33031.setFont('Roboto Slab', 14).setReportWidth(false);
smo33028.addModifier(smo33031, 0);
smo33047v0ar.push(smo33028);
smo33047v0.addTickables(smo33047v0ar)
fmtsmo330472.joinVoices([smo33047v0]);
const fmtsmo334752 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo33475v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33475v0ar = [];
const smo33456 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n","fn/3/n"]}'))
smo33456.setAttribute('id', 'smo33456');
smo33475v0ar.push(smo33456);
const smo33458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo33458.setAttribute('id', 'smo33458');
smo33475v0ar.push(smo33458);
const smo33459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo33459.setAttribute('id', 'smo33459');
smo33475v0ar.push(smo33459);
smo33475v0.addTickables(smo33475v0ar)
fmtsmo334752.joinVoices([smo33475v0]);
// create beam groups and tuplets for format grp smo33754 before formatting
const dirsmo34963 = smo33025.getStemDirection();
smo33025.setStemDirection(dirsmo34963);
smo33028.setStemDirection(dirsmo34963);
const smo34963 = new VF.Beam([smo33025,smo33028]);
const dirsmo34966 = smo33458.getStemDirection();
smo33458.setStemDirection(dirsmo34966);
smo33459.setStemDirection(dirsmo34966);
const smo34966 = new VF.Beam([smo33458,smo33459]);
 
// formatting measures in staff group smo33754
fmtsmo330472.format([smo33047v0,smo33475v0], 186);
const stavesmo33047 = new VF.Stave(466, 178, 200);
stavesmo33047.setAttribute('id', 'stavesmo33047');
stavesmo33047.setBegBarType(VF.Barline.type.NONE);
stavesmo33047.setContext(context);
stavesmo33047.draw();
smo33047v0.draw(context, stavesmo33047);
smo34963.setContext(context);
smo34963.draw();
const stavesmo33475 = new VF.Stave(466, 333, 200);
stavesmo33475.setAttribute('id', 'stavesmo33475');
stavesmo33475.setBegBarType(VF.Barline.type.NONE);
stavesmo33475.setContext(context);
stavesmo33475.draw();
smo33475v0.draw(context, stavesmo33475);
smo34966.setContext(context);
smo34966.draw();
const fmtsmo330743 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo33074v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33074v0ar = [];
const smo33048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","gn/4/n"]}'))
smo33048.setAttribute('id', 'smo33048');
const smo33049 = new VF.Annotation('on,');
smo33049.setAttribute('id', 'smo33049');
smo33049.setFont('Merriweather', 11, 'normal');
smo33049.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33048.addModifier(smo33049);
smo33049.addClass('lyric lyric-0');
const smo33050 = new VF.Annotation('night');
smo33050.setAttribute('id', 'smo33050');
smo33050.setFont('Merriweather', 11, 'normal');
smo33050.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33048.addModifier(smo33050);
smo33050.addClass('lyric lyric-1');
const smo33051 = new VF.ChordSymbol();
smo33051.setAttribute('id', 'smo33051');
smo33051.addGlyphOrText('Gm', JSON.parse('{"text":"Gm","symbolModifier":1}'));
smo33051.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo33051.setFont('Roboto Slab', 14).setReportWidth(false);
smo33048.addModifier(smo33051, 0);
smo33074v0ar.push(smo33048);
const smo33052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","fn/4/n"]}'))
smo33052.setAttribute('id', 'smo33052');
const smo33053 = new VF.Annotation('let');
smo33053.setAttribute('id', 'smo33053');
smo33053.setFont('Merriweather', 11, 'normal');
smo33053.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33052.addModifier(smo33053);
smo33053.addClass('lyric lyric-0');
const smo33054 = new VF.Annotation('dra');
smo33054.setAttribute('id', 'smo33054');
smo33054.setFont('Merriweather', 11, 'normal');
smo33054.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33052.addModifier(smo33054);
smo33054.addClass('lyric lyric-1 lyric-hyphen');
const smo33055 = new VF.ChordSymbol();
smo33055.setAttribute('id', 'smo33055');
smo33055.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1}'));
smo33055.addGlyph('accidentalFlat', JSON.parse('{"glyph":"accidentalFlat","symbolModifier":1}'));
smo33055.setFont('Roboto Slab', 14).setReportWidth(false);
smo33052.addModifier(smo33055, 0);
smo33074v0ar.push(smo33052);
const smo33056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","fn/4/n"]}'))
smo33056.setAttribute('id', 'smo33056');
const smo33057 = new VF.Annotation('me');
smo33057.setAttribute('id', 'smo33057');
smo33057.setFont('Merriweather', 11, 'normal');
smo33057.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33056.addModifier(smo33057);
smo33057.addClass('lyric lyric-0');
const smo33058 = new VF.Annotation('ws');
smo33058.setAttribute('id', 'smo33058');
smo33058.setFont('Merriweather', 11, 'normal');
smo33058.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33056.addModifier(smo33058);
smo33058.addClass('lyric lyric-1');
smo33074v0ar.push(smo33056);
smo33074v0.addTickables(smo33074v0ar)
fmtsmo330743.joinVoices([smo33074v0]);
const fmtsmo334943 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo33494v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33494v0ar = [];
const smo33476 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","fn/3/n"]}'))
smo33476.setAttribute('id', 'smo33476');
smo33494v0ar.push(smo33476);
const smo33477 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","fn/3/n"]}'))
smo33477.setAttribute('id', 'smo33477');
smo33494v0ar.push(smo33477);
const smo33478 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","fn/3/n"]}'))
smo33478.setAttribute('id', 'smo33478');
smo33494v0ar.push(smo33478);
smo33494v0.addTickables(smo33494v0ar)
fmtsmo334943.joinVoices([smo33494v0]);
// create beam groups and tuplets for format grp smo33754 before formatting
const dirsmo34969 = smo33052.getStemDirection();
smo33052.setStemDirection(dirsmo34969);
smo33056.setStemDirection(dirsmo34969);
const smo34969 = new VF.Beam([smo33052,smo33056]);
const dirsmo34972 = smo33477.getStemDirection();
smo33477.setStemDirection(dirsmo34972);
smo33478.setStemDirection(dirsmo34972);
const smo34972 = new VF.Beam([smo33477,smo33478]);
 
// formatting measures in staff group smo33754
fmtsmo330743.format([smo33074v0,smo33494v0], 171);
const stavesmo33074 = new VF.Stave(666, 178, 185);
stavesmo33074.setAttribute('id', 'stavesmo33074');
stavesmo33074.setBegBarType(VF.Barline.type.NONE);
stavesmo33074.setContext(context);
stavesmo33074.draw();
smo33074v0.draw(context, stavesmo33074);
smo34969.setContext(context);
smo34969.draw();
const stavesmo33494 = new VF.Stave(666, 333, 185);
stavesmo33494.setAttribute('id', 'stavesmo33494');
stavesmo33494.setBegBarType(VF.Barline.type.NONE);
stavesmo33494.setContext(context);
stavesmo33494.draw();
smo33494v0.draw(context, stavesmo33494);
smo34972.setContext(context);
smo34972.draw();
const fmtsmo331034 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo33103v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33103v0ar = [];
const smo33075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo33075.setAttribute('id', 'smo33075');
const smo33076 = new VF.Annotation('sta');
smo33076.setAttribute('id', 'smo33076');
smo33076.setFont('Merriweather', 11, 'normal');
smo33076.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33075.addModifier(smo33076);
smo33076.addClass('lyric lyric-0 lyric-hyphen');
const smo33077 = new VF.Annotation('ne');
smo33077.setAttribute('id', 'smo33077');
smo33077.setFont('Merriweather', 11, 'normal');
smo33077.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33075.addModifier(smo33077);
smo33077.addClass('lyric lyric-1 lyric-hyphen');
smo33103v0ar.push(smo33075);
const smo33078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo33078.setAttribute('id', 'smo33078');
smo33078.addModifier(new VF.Dot(), 0);
smo33078.addModifier(new VF.Dot(), 1);
const smo33079 = new VF.Annotation('nd');
smo33079.setAttribute('id', 'smo33079');
smo33079.setFont('Merriweather', 11, 'normal');
smo33079.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33078.addModifier(smo33079);
smo33079.addClass('lyric lyric-0');
const smo33080 = new VF.Annotation('ar');
smo33080.setAttribute('id', 'smo33080');
smo33080.setFont('Merriweather', 11, 'normal');
smo33080.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33078.addModifier(smo33080);
smo33080.addClass('lyric lyric-1');
smo33103v0ar.push(smo33078);
const smo33081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","dn/4/n"]}'))
smo33081.setAttribute('id', 'smo33081');
const smo330810acc = new VF.Accidental('b');
smo33081.addModifier(smo330810acc, 0);
const smo33082 = new VF.Annotation('I');
smo33082.setAttribute('id', 'smo33082');
smo33082.setFont('Merriweather', 11, 'normal');
smo33082.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33081.addModifier(smo33082);
smo33082.addClass('lyric lyric-0');
const smo33083 = new VF.Annotation('when');
smo33083.setAttribute('id', 'smo33083');
smo33083.setFont('Merriweather', 11, 'normal');
smo33083.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33081.addModifier(smo33083);
smo33083.addClass('lyric lyric-1');
const smo33084 = new VF.ChordSymbol();
smo33084.setAttribute('id', 'smo33084');
smo33084.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1}'));
smo33084.addGlyph('csymDiminished', JSON.parse('{"glyph":"csymDiminished","symbolModifier":3}'));
smo33084.setFont('Roboto Slab', 14).setReportWidth(false);
smo33081.addModifier(smo33084, 0);
smo33103v0ar.push(smo33081);
const smo33085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","dn/4/n"]}'))
smo33085.setAttribute('id', 'smo33085');
const smo33086 = new VF.Annotation('am');
smo33086.setAttribute('id', 'smo33086');
smo33086.setFont('Merriweather', 11, 'normal');
smo33086.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33085.addModifier(smo33086);
smo33086.addClass('lyric lyric-0');
const smo33087 = new VF.Annotation('my');
smo33087.setAttribute('id', 'smo33087');
smo33087.setFont('Merriweather', 11, 'normal');
smo33087.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33085.addModifier(smo33087);
smo33087.addClass('lyric lyric-1');
smo33103v0ar.push(smo33085);
smo33103v0.addTickables(smo33103v0ar)
fmtsmo331034.joinVoices([smo33103v0]);
const fmtsmo335164 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo33516v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33516v0ar = [];
const smo33495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","fn/3/n"]}'))
smo33495.setAttribute('id', 'smo33495');
smo33516v0ar.push(smo33495);
const smo33497 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bb/2/n","dn/3/n"]}'))
smo33497.setAttribute('id', 'smo33497');
smo33497.addModifier(new VF.Dot(), 0);
smo33497.addModifier(new VF.Dot(), 1);
smo33516v0ar.push(smo33497);
const smo33499 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo33499.setAttribute('id', 'smo33499');
smo33516v0ar.push(smo33499);
const smo33500 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo33500.setAttribute('id', 'smo33500');
smo33516v0ar.push(smo33500);
smo33516v0.addTickables(smo33516v0ar)
fmtsmo335164.joinVoices([smo33516v0]);
// create beam groups and tuplets for format grp smo33754 before formatting
const dirsmo34975 = smo33081.getStemDirection();
smo33081.setStemDirection(dirsmo34975);
smo33085.setStemDirection(dirsmo34975);
const smo34975 = new VF.Beam([smo33081,smo33085]);
const dirsmo34978 = smo33499.getStemDirection();
smo33499.setStemDirection(dirsmo34978);
smo33500.setStemDirection(dirsmo34978);
const smo34978 = new VF.Beam([smo33499,smo33500]);
 
// formatting measures in staff group smo33754
fmtsmo331034.format([smo33103v0,smo33516v0], 213);
const stavesmo33103 = new VF.Stave(851, 178, 227);
stavesmo33103.setAttribute('id', 'stavesmo33103');
stavesmo33103.setBegBarType(VF.Barline.type.NONE);
stavesmo33103.setContext(context);
stavesmo33103.draw();
smo33103v0.draw(context, stavesmo33103);
smo34975.setContext(context);
smo34975.draw();
const stavesmo33516 = new VF.Stave(851, 333, 227);
stavesmo33516.setAttribute('id', 'stavesmo33516');
stavesmo33516.setBegBarType(VF.Barline.type.NONE);
stavesmo33516.setContext(context);
stavesmo33516.draw();
smo33516v0.draw(context, stavesmo33516);
smo34978.setContext(context);
smo34978.draw();
const rightsmo33754stavesmo331031 = new VF.StaveConnector(stavesmo33103, stavesmo33516).setType(0);
rightsmo33754stavesmo331031.setContext(context).draw();
const fmtsmo331305 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo33130v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33130v0ar = [];
const smo33104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo33104.setAttribute('id', 'smo33104');
const smo33105 = new VF.Annotation('tired');
smo33105.setAttribute('id', 'smo33105');
smo33105.setFont('Merriweather', 11, 'normal');
smo33105.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33104.addModifier(smo33105);
smo33105.addClass('lyric lyric-0');
const smo33106 = new VF.Annotation('life');
smo33106.setAttribute('id', 'smo33106');
smo33106.setFont('Merriweather', 11, 'normal');
smo33106.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33104.addModifier(smo33106);
smo33106.addClass('lyric lyric-1');
const smo33107 = new VF.ChordSymbol();
smo33107.setAttribute('id', 'smo33107');
smo33107.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo33107.setFont('Roboto Slab', 14).setReportWidth(false);
smo33104.addModifier(smo33107, 0);
smo33130v0ar.push(smo33104);
const smo33108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo33108.setAttribute('id', 'smo33108');
const smo33109 = new VF.Annotation('I');
smo33109.setAttribute('id', 'smo33109');
smo33109.setFont('Merriweather', 11, 'normal');
smo33109.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33108.addModifier(smo33109);
smo33109.addClass('lyric lyric-0');
const smo33111 = new VF.ChordSymbol();
smo33111.setAttribute('id', 'smo33111');
smo33111.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo33111.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo33111.setFont('Roboto Slab', 14).setReportWidth(false);
smo33108.addModifier(smo33111, 0);
smo33130v0ar.push(smo33108);
const smo33112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo33112.setAttribute('id', 'smo33112');
const smo33113 = new VF.Annotation('am');
smo33113.setAttribute('id', 'smo33113');
smo33113.setFont('Merriweather', 11, 'normal');
smo33113.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33112.addModifier(smo33113);
smo33113.addClass('lyric lyric-0');
const smo33114 = new VF.Annotation('is');
smo33114.setAttribute('id', 'smo33114');
smo33114.setFont('Merriweather', 11, 'normal');
smo33114.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33112.addModifier(smo33114);
smo33114.addClass('lyric lyric-1 lyric-hyphen');
smo33130v0ar.push(smo33112);
smo33130v0.addTickables(smo33130v0ar)
fmtsmo331305.joinVoices([smo33130v0]);
const fmtsmo335375 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo33537v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33537v0ar = [];
const smo33517 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","fn/3/n"]}'))
smo33517.setAttribute('id', 'smo33517');
smo33537v0ar.push(smo33517);
const smo33519 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","en/3/n"]}'))
smo33519.setAttribute('id', 'smo33519');
smo33537v0ar.push(smo33519);
const smo33521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","en/3/n"]}'))
smo33521.setAttribute('id', 'smo33521');
smo33537v0ar.push(smo33521);
smo33537v0.addTickables(smo33537v0ar)
fmtsmo335375.joinVoices([smo33537v0]);
// create beam groups and tuplets for format grp smo33754 before formatting
const dirsmo34987 = smo33108.getStemDirection();
smo33108.setStemDirection(dirsmo34987);
smo33112.setStemDirection(dirsmo34987);
const smo34987 = new VF.Beam([smo33108,smo33112]);
const dirsmo34990 = smo33519.getStemDirection();
smo33519.setStemDirection(dirsmo34990);
smo33521.setStemDirection(dirsmo34990);
const smo34990 = new VF.Beam([smo33519,smo33521]);
 
// formatting measures in staff group smo33754
fmtsmo331305.format([smo33130v0,smo33537v0], 129);
const stavesmo33130 = new VF.Stave(43, 519, 203);
stavesmo33130.setAttribute('id', 'stavesmo33130');
stavesmo33130.setBegBarType(1);
stavesmo33130.addClef('treble');
const keysmo33130 = new VF.KeySignature('F');
keysmo33130.addToStave(stavesmo33130);
stavesmo33130.setContext(context);
stavesmo33130.draw();
smo33130v0.draw(context, stavesmo33130);
smo34987.setContext(context);
smo34987.draw();
const stavesmo33537 = new VF.Stave(43, 705, 203);
stavesmo33537.setAttribute('id', 'stavesmo33537');
stavesmo33537.setBegBarType(1);
stavesmo33537.addClef('bass');
const keysmo33537 = new VF.KeySignature('F');
keysmo33537.addToStave(stavesmo33537);
stavesmo33537.setContext(context);
stavesmo33537.draw();
smo33537v0.draw(context, stavesmo33537);
smo34990.setContext(context);
smo34990.draw();
const leftsmo33754stavesmo331301 = new VF.StaveConnector(stavesmo33130, stavesmo33537).setType(3);
leftsmo33754stavesmo331301.setContext(context).draw();
const fmtsmo331576 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo33157v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33157v0ar = [];
const smo33131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","fn/4/n"]}'))
smo33131.setAttribute('id', 'smo33131');
const smo33132 = new VF.Annotation('weak');
smo33132.setAttribute('id', 'smo33132');
smo33132.setFont('Merriweather', 11, 'normal');
smo33132.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33131.addModifier(smo33132);
smo33132.addClass('lyric lyric-0');
const smo33133 = new VF.Annotation('al');
smo33133.setAttribute('id', 'smo33133');
smo33133.setFont('Merriweather', 11, 'normal');
smo33133.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33131.addModifier(smo33133);
smo33133.addClass('lyric lyric-1 lyric-hyphen');
const smo33134 = new VF.ChordSymbol();
smo33134.setAttribute('id', 'smo33134');
smo33134.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo33134.setFont('Roboto Slab', 14).setReportWidth(false);
smo33131.addModifier(smo33134, 0);
smo33157v0ar.push(smo33131);
const smo33135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","an/4/n"]}'))
smo33135.setAttribute('id', 'smo33135');
const smo331350acc = new VF.Accidental('n');
smo33135.addModifier(smo331350acc, 0);
const smo33136 = new VF.Annotation('I');
smo33136.setAttribute('id', 'smo33136');
smo33136.setFont('Merriweather', 11, 'normal');
smo33136.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33135.addModifier(smo33136);
smo33136.addClass('lyric lyric-0');
const smo33137 = new VF.Annotation('most');
smo33137.setAttribute('id', 'smo33137');
smo33137.setFont('Merriweather', 11, 'normal');
smo33137.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33135.addModifier(smo33137);
smo33137.addClass('lyric lyric-1');
const smo33138 = new VF.ChordSymbol();
smo33138.setAttribute('id', 'smo33138');
smo33138.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo33138.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo33138.setFont('Roboto Slab', 14).setReportWidth(false);
smo33135.addModifier(smo33138, 0);
smo33157v0ar.push(smo33135);
const smo33139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","an/4/n"]}'))
smo33139.setAttribute('id', 'smo33139');
const smo33140 = new VF.Annotation('am');
smo33140.setAttribute('id', 'smo33140');
smo33140.setFont('Merriweather', 11, 'normal');
smo33140.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33139.addModifier(smo33140);
smo33140.addClass('lyric lyric-0');
smo33157v0ar.push(smo33139);
smo33157v0.addTickables(smo33157v0ar)
fmtsmo331576.joinVoices([smo33157v0]);
const fmtsmo335566 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo33556v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33556v0ar = [];
const smo33538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo33538.setAttribute('id', 'smo33538');
smo33556v0ar.push(smo33538);
const smo33539 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","fn/3/n"]}'))
smo33539.setAttribute('id', 'smo33539');
smo33556v0ar.push(smo33539);
const smo33540 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","fn/3/n"]}'))
smo33540.setAttribute('id', 'smo33540');
smo33556v0ar.push(smo33540);
smo33556v0.addTickables(smo33556v0ar)
fmtsmo335566.joinVoices([smo33556v0]);
// create beam groups and tuplets for format grp smo33754 before formatting
const dirsmo34993 = smo33135.getStemDirection();
smo33135.setStemDirection(dirsmo34993);
smo33139.setStemDirection(dirsmo34993);
const smo34993 = new VF.Beam([smo33135,smo33139]);
const dirsmo34996 = smo33539.getStemDirection();
smo33539.setStemDirection(dirsmo34996);
smo33540.setStemDirection(dirsmo34996);
const smo34996 = new VF.Beam([smo33539,smo33540]);
 
// formatting measures in staff group smo33754
fmtsmo331576.format([smo33157v0,smo33556v0], 161);
const stavesmo33157 = new VF.Stave(246, 519, 175);
stavesmo33157.setAttribute('id', 'stavesmo33157');
stavesmo33157.setBegBarType(VF.Barline.type.NONE);
stavesmo33157.setContext(context);
stavesmo33157.draw();
smo33157v0.draw(context, stavesmo33157);
smo34993.setContext(context);
smo34993.draw();
const stavesmo33556 = new VF.Stave(246, 705, 175);
stavesmo33556.setAttribute('id', 'stavesmo33556');
stavesmo33556.setBegBarType(VF.Barline.type.NONE);
stavesmo33556.setContext(context);
stavesmo33556.draw();
smo33556v0.draw(context, stavesmo33556);
smo34996.setContext(context);
smo34996.draw();
const fmtsmo331817 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo33181v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33181v0ar = [];
const smo33158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","gn/4/n"]}'))
smo33158.setAttribute('id', 'smo33158');
const smo33159 = new VF.Annotation('worn');
smo33159.setAttribute('id', 'smo33159');
smo33159.setFont('Merriweather', 11, 'normal');
smo33159.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33158.addModifier(smo33159);
smo33159.addClass('lyric lyric-0');
const smo33160 = new VF.Annotation('gone');
smo33160.setAttribute('id', 'smo33160');
smo33160.setFont('Merriweather', 11, 'normal');
smo33160.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33158.addModifier(smo33160);
smo33160.addClass('lyric lyric-1');
const smo33161 = new VF.ChordSymbol();
smo33161.setAttribute('id', 'smo33161');
smo33161.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo33161.setFont('Roboto Slab', 14).setReportWidth(false);
smo33158.addModifier(smo33161, 0);
smo33181v0ar.push(smo33158);
const smo33162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo33162.setAttribute('id', 'smo33162');
const smo331620acc = new VF.Accidental('n');
smo33162.addModifier(smo331620acc, 0);
const smo33163 = new VF.Annotation('-');
smo33163.setAttribute('id', 'smo33163');
smo33163.setFont('Merriweather', 11, 'normal');
smo33163.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33162.addModifier(smo33163);
smo33163.addClass('lyric lyric-0 lyric-hyphen');
const smo33164 = new VF.Annotation('-');
smo33164.setAttribute('id', 'smo33164');
smo33164.setFont('Merriweather', 11, 'normal');
smo33164.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33162.addModifier(smo33164);
smo33164.addClass('lyric lyric-1 lyric-hyphen');
const smo33165 = new VF.ChordSymbol();
smo33165.setAttribute('id', 'smo33165');
smo33165.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo33165.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo33165.setFont('Roboto Slab', 14).setReportWidth(false);
smo33162.addModifier(smo33165, 0);
smo33181v0ar.push(smo33162);
smo33181v0.addTickables(smo33181v0ar)
fmtsmo331817.joinVoices([smo33181v0]);
const fmtsmo335747 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo33574v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33574v0ar = [];
const smo33557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","en/3/n"]}'))
smo33557.setAttribute('id', 'smo33557');
smo33574v0ar.push(smo33557);
const smo33558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","fn/3/n"]}'))
smo33558.setAttribute('id', 'smo33558');
smo33574v0ar.push(smo33558);
smo33574v0.addTickables(smo33574v0ar)
fmtsmo335747.joinVoices([smo33574v0]);
// create beam groups and tuplets for format grp smo33754 before formatting
 
// formatting measures in staff group smo33754
fmtsmo331817.format([smo33181v0,smo33574v0], 79);
const stavesmo33181 = new VF.Stave(421, 519, 93);
stavesmo33181.setAttribute('id', 'stavesmo33181');
stavesmo33181.setBegBarType(VF.Barline.type.NONE);
stavesmo33181.setContext(context);
stavesmo33181.draw();
smo33181v0.draw(context, stavesmo33181);
const stavesmo33574 = new VF.Stave(421, 705, 93);
stavesmo33574.setAttribute('id', 'stavesmo33574');
stavesmo33574.setBegBarType(VF.Barline.type.NONE);
stavesmo33574.setContext(context);
stavesmo33574.draw();
smo33574v0.draw(context, stavesmo33574);
const fmtsmo332088 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo33208v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33208v0ar = [];
const smo33182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","gn/4/n"]}'))
smo33182.setAttribute('id', 'smo33182');
const smo33183 = new VF.Annotation('-');
smo33183.setAttribute('id', 'smo33183');
smo33183.setFont('Merriweather', 11, 'normal');
smo33183.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33182.addModifier(smo33183);
smo33183.addClass('lyric lyric-0 lyric-hyphen');
const smo33184 = new VF.Annotation('-');
smo33184.setAttribute('id', 'smo33184');
smo33184.setFont('Merriweather', 11, 'normal');
smo33184.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33182.addModifier(smo33184);
smo33184.addClass('lyric lyric-1 lyric-hyphen');
const smo33185 = new VF.ChordSymbol();
smo33185.setAttribute('id', 'smo33185');
smo33185.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo33185.setFont('Roboto Slab', 14).setReportWidth(false);
smo33182.addModifier(smo33185, 0);
smo33208v0ar.push(smo33182);
const smo33186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","an/4/n"]}'))
smo33186.setAttribute('id', 'smo33186');
const smo33187 = new VF.Annotation('Through');
smo33187.setAttribute('id', 'smo33187');
smo33187.setFont('Merriweather', 11, 'normal');
smo33187.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33186.addModifier(smo33187);
smo33187.addClass('lyric lyric-0');
const smo33188 = new VF.Annotation('at');
smo33188.setAttribute('id', 'smo33188');
smo33188.setFont('Merriweather', 11, 'normal');
smo33188.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33186.addModifier(smo33188);
smo33188.addClass('lyric lyric-1');
const smo33189 = new VF.ChordSymbol();
smo33189.setAttribute('id', 'smo33189');
smo33189.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo33189.setFont('Roboto Slab', 14).setReportWidth(false);
smo33186.addModifier(smo33189, 0);
smo33208v0ar.push(smo33186);
const smo33190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n"]}'))
smo33190.setAttribute('id', 'smo33190');
const smo33191 = new VF.Annotation('the');
smo33191.setAttribute('id', 'smo33191');
smo33191.setFont('Merriweather', 11, 'normal');
smo33191.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33190.addModifier(smo33191);
smo33191.addClass('lyric lyric-0');
const smo33192 = new VF.Annotation('the');
smo33192.setAttribute('id', 'smo33192');
smo33192.setFont('Merriweather', 11, 'normal');
smo33192.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33190.addModifier(smo33192);
smo33192.addClass('lyric lyric-1');
smo33208v0ar.push(smo33190);
smo33208v0.addTickables(smo33208v0ar)
fmtsmo332088.joinVoices([smo33208v0]);
const fmtsmo335938 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo33593v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33593v0ar = [];
const smo33575 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n"]}'))
smo33575.setAttribute('id', 'smo33575');
smo33593v0ar.push(smo33575);
const smo33576 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo33576.setAttribute('id', 'smo33576');
smo33593v0ar.push(smo33576);
const smo33577 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo33577.setAttribute('id', 'smo33577');
smo33593v0ar.push(smo33577);
smo33593v0.addTickables(smo33593v0ar)
fmtsmo335938.joinVoices([smo33593v0]);
// create beam groups and tuplets for format grp smo33754 before formatting
const dirsmo35003 = smo33186.getStemDirection();
smo33186.setStemDirection(dirsmo35003);
smo33190.setStemDirection(dirsmo35003);
const smo35003 = new VF.Beam([smo33186,smo33190]);
const dirsmo35006 = smo33576.getStemDirection();
smo33576.setStemDirection(dirsmo35006);
smo33577.setStemDirection(dirsmo35006);
const smo35006 = new VF.Beam([smo33576,smo33577]);
 
// formatting measures in staff group smo33754
fmtsmo332088.format([smo33208v0,smo33593v0], 153);
const stavesmo33208 = new VF.Stave(514, 519, 167);
stavesmo33208.setAttribute('id', 'stavesmo33208');
stavesmo33208.setBegBarType(VF.Barline.type.NONE);
stavesmo33208.setContext(context);
stavesmo33208.draw();
smo33208v0.draw(context, stavesmo33208);
smo35003.setContext(context);
smo35003.draw();
const stavesmo33593 = new VF.Stave(514, 705, 167);
stavesmo33593.setAttribute('id', 'stavesmo33593');
stavesmo33593.setBegBarType(VF.Barline.type.NONE);
stavesmo33593.setContext(context);
stavesmo33593.draw();
smo33593v0.draw(context, stavesmo33593);
smo35006.setContext(context);
smo35006.draw();
const fmtsmo332359 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo33235v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33235v0ar = [];
const smo33209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","cn/5/n"]}'))
smo33209.setAttribute('id', 'smo33209');
const smo33210 = new VF.Annotation('storm,');
smo33210.setAttribute('id', 'smo33210');
smo33210.setFont('Merriweather', 11, 'normal');
smo33210.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33209.addModifier(smo33210);
smo33210.addClass('lyric lyric-0');
const smo33211 = new VF.Annotation('riv');
smo33211.setAttribute('id', 'smo33211');
smo33211.setFont('Merriweather', 11, 'normal');
smo33211.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33209.addModifier(smo33211);
smo33211.addClass('lyric lyric-1 lyric-hyphen');
const smo33212 = new VF.ChordSymbol();
smo33212.setAttribute('id', 'smo33212');
smo33212.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo33212.setFont('Roboto Slab', 14).setReportWidth(false);
smo33209.addModifier(smo33212, 0);
smo33235v0ar.push(smo33209);
const smo33213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo33213.setAttribute('id', 'smo33213');
const smo33214 = new VF.Annotation('through');
smo33214.setAttribute('id', 'smo33214');
smo33214.setFont('Merriweather', 11, 'normal');
smo33214.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33213.addModifier(smo33214);
smo33214.addClass('lyric lyric-0');
const smo33215 = new VF.Annotation('er');
smo33215.setAttribute('id', 'smo33215');
smo33215.setFont('Merriweather', 11, 'normal');
smo33215.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33213.addModifier(smo33215);
smo33215.addClass('lyric lyric-1');
const smo33216 = new VF.ChordSymbol();
smo33216.setAttribute('id', 'smo33216');
smo33216.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo33216.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo33216.setFont('Roboto Slab', 14).setReportWidth(false);
smo33213.addModifier(smo33216, 0);
smo33235v0ar.push(smo33213);
const smo33217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo33217.setAttribute('id', 'smo33217');
const smo33218 = new VF.Annotation('the');
smo33218.setAttribute('id', 'smo33218');
smo33218.setFont('Merriweather', 11, 'normal');
smo33218.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33217.addModifier(smo33218);
smo33218.addClass('lyric lyric-0');
const smo33219 = new VF.Annotation('I');
smo33219.setAttribute('id', 'smo33219');
smo33219.setFont('Merriweather', 11, 'normal');
smo33219.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33217.addModifier(smo33219);
smo33219.addClass('lyric lyric-1');
smo33235v0ar.push(smo33217);
smo33235v0.addTickables(smo33235v0ar)
fmtsmo332359.joinVoices([smo33235v0]);
const fmtsmo336129 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo33612v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33612v0ar = [];
const smo33594 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo33594.setAttribute('id', 'smo33594');
smo33612v0ar.push(smo33594);
const smo33595 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n"]}'))
smo33595.setAttribute('id', 'smo33595');
smo33612v0ar.push(smo33595);
const smo33596 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n"]}'))
smo33596.setAttribute('id', 'smo33596');
smo33612v0ar.push(smo33596);
smo33612v0.addTickables(smo33612v0ar)
fmtsmo336129.joinVoices([smo33612v0]);
// create beam groups and tuplets for format grp smo33754 before formatting
const dirsmo35009 = smo33213.getStemDirection();
smo33213.setStemDirection(dirsmo35009);
smo33217.setStemDirection(dirsmo35009);
const smo35009 = new VF.Beam([smo33213,smo33217]);
const dirsmo35012 = smo33595.getStemDirection();
smo33595.setStemDirection(dirsmo35012);
smo33596.setStemDirection(dirsmo35012);
const smo35012 = new VF.Beam([smo33595,smo33596]);
 
// formatting measures in staff group smo33754
fmtsmo332359.format([smo33235v0,smo33612v0], 196);
const stavesmo33235 = new VF.Stave(681, 519, 210);
stavesmo33235.setAttribute('id', 'stavesmo33235');
stavesmo33235.setBegBarType(VF.Barline.type.NONE);
stavesmo33235.setContext(context);
stavesmo33235.draw();
smo33235v0.draw(context, stavesmo33235);
smo35009.setContext(context);
smo35009.draw();
const stavesmo33612 = new VF.Stave(681, 705, 210);
stavesmo33612.setAttribute('id', 'stavesmo33612');
stavesmo33612.setBegBarType(VF.Barline.type.NONE);
stavesmo33612.setContext(context);
stavesmo33612.draw();
smo33612v0.draw(context, stavesmo33612);
smo35012.setContext(context);
smo35012.draw();
const fmtsmo3326210 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo33262v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33262v0ar = [];
const smo33236 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","an/4/n"]}'))
smo33236.setAttribute('id', 'smo33236');
const smo33237 = new VF.Annotation('night');
smo33237.setAttribute('id', 'smo33237');
smo33237.setFont('Merriweather', 11, 'normal');
smo33237.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33236.addModifier(smo33237);
smo33237.addClass('lyric lyric-0');
const smo33238 = new VF.Annotation('stand,');
smo33238.setAttribute('id', 'smo33238');
smo33238.setFont('Merriweather', 11, 'normal');
smo33238.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33236.addModifier(smo33238);
smo33238.addClass('lyric lyric-1');
const smo33239 = new VF.ChordSymbol();
smo33239.setAttribute('id', 'smo33239');
smo33239.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo33239.setFont('Roboto Slab', 14).setReportWidth(false);
smo33236.addModifier(smo33239, 0);
smo33262v0ar.push(smo33236);
const smo33240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","an/4/n"]}'))
smo33240.setAttribute('id', 'smo33240');
const smo332400acc = new VF.Accidental('b');
smo33240.addModifier(smo332400acc, 0);
const smo33241 = new VF.Annotation('lead');
smo33241.setAttribute('id', 'smo33241');
smo33241.setFont('Merriweather', 11, 'normal');
smo33241.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33240.addModifier(smo33241);
smo33241.addClass('lyric lyric-0');
const smo33242 = new VF.Annotation('guide');
smo33242.setAttribute('id', 'smo33242');
smo33242.setFont('Merriweather', 11, 'normal');
smo33242.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33240.addModifier(smo33242);
smo33242.addClass('lyric lyric-1');
const smo33243 = new VF.ChordSymbol();
smo33243.setAttribute('id', 'smo33243');
smo33243.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo33243.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo33243.setFont('Roboto Slab', 14).setReportWidth(false);
smo33240.addModifier(smo33243, 0);
smo33262v0ar.push(smo33240);
const smo33244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","an/4/n"]}'))
smo33244.setAttribute('id', 'smo33244');
const smo33245 = new VF.Annotation('me');
smo33245.setAttribute('id', 'smo33245');
smo33245.setFont('Merriweather', 11, 'normal');
smo33245.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33244.addModifier(smo33245);
smo33245.addClass('lyric lyric-0');
const smo33246 = new VF.Annotation('me');
smo33246.setAttribute('id', 'smo33246');
smo33246.setFont('Merriweather', 11, 'normal');
smo33246.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33244.addModifier(smo33246);
smo33246.addClass('lyric lyric-1');
smo33262v0ar.push(smo33244);
smo33262v0.addTickables(smo33262v0ar)
fmtsmo3326210.joinVoices([smo33262v0]);
const fmtsmo3363110 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo33631v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33631v0ar = [];
const smo33613 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","cn/4/n"]}'))
smo33613.setAttribute('id', 'smo33613');
smo33631v0ar.push(smo33613);
const smo33614 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","cn/4/n"]}'))
smo33614.setAttribute('id', 'smo33614');
smo33631v0ar.push(smo33614);
const smo33615 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","cn/4/n"]}'))
smo33615.setAttribute('id', 'smo33615');
smo33631v0ar.push(smo33615);
smo33631v0.addTickables(smo33631v0ar)
fmtsmo3363110.joinVoices([smo33631v0]);
// create beam groups and tuplets for format grp smo33754 before formatting
const dirsmo35015 = smo33240.getStemDirection();
smo33240.setStemDirection(dirsmo35015);
smo33244.setStemDirection(dirsmo35015);
const smo35015 = new VF.Beam([smo33240,smo33244]);
const dirsmo35018 = smo33614.getStemDirection();
smo33614.setStemDirection(dirsmo35018);
smo33615.setStemDirection(dirsmo35018);
const smo35018 = new VF.Beam([smo33614,smo33615]);
 
// formatting measures in staff group smo33754
fmtsmo3326210.format([smo33262v0,smo33631v0], 173);
const stavesmo33262 = new VF.Stave(891, 519, 187);
stavesmo33262.setAttribute('id', 'stavesmo33262');
stavesmo33262.setBegBarType(VF.Barline.type.NONE);
stavesmo33262.setContext(context);
stavesmo33262.draw();
smo33262v0.draw(context, stavesmo33262);
smo35015.setContext(context);
smo35015.draw();
const stavesmo33631 = new VF.Stave(891, 705, 187);
stavesmo33631.setAttribute('id', 'stavesmo33631');
stavesmo33631.setBegBarType(VF.Barline.type.NONE);
stavesmo33631.setContext(context);
stavesmo33631.draw();
smo33631v0.draw(context, stavesmo33631);
smo35018.setContext(context);
smo35018.draw();
const rightsmo33754stavesmo332621 = new VF.StaveConnector(stavesmo33262, stavesmo33631).setType(0);
rightsmo33754stavesmo332621.setContext(context).draw();
const fmtsmo3328911 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo33289v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33289v0ar = [];
const smo33263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","gn/4/n"]}'))
smo33263.setAttribute('id', 'smo33263');
const smo33264 = new VF.Annotation('on');
smo33264.setAttribute('id', 'smo33264');
smo33264.setFont('Merriweather', 11, 'normal');
smo33264.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33263.addModifier(smo33264);
smo33264.addClass('lyric lyric-0');
const smo33265 = new VF.Annotation('feet,');
smo33265.setAttribute('id', 'smo33265');
smo33265.setFont('Merriweather', 11, 'normal');
smo33265.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33263.addModifier(smo33265);
smo33265.addClass('lyric lyric-1');
const smo33266 = new VF.ChordSymbol();
smo33266.setAttribute('id', 'smo33266');
smo33266.addGlyphOrText('Gm', JSON.parse('{"text":"Gm","symbolModifier":1}'));
smo33266.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo33266.setFont('Roboto Slab', 14).setReportWidth(false);
smo33263.addModifier(smo33266, 0);
smo33289v0ar.push(smo33263);
const smo33267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo33267.setAttribute('id', 'smo33267');
const smo33268 = new VF.Annotation('to');
smo33268.setAttribute('id', 'smo33268');
smo33268.setFont('Merriweather', 11, 'normal');
smo33268.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33267.addModifier(smo33268);
smo33268.addClass('lyric lyric-0');
const smo33269 = new VF.Annotation('hold');
smo33269.setAttribute('id', 'smo33269');
smo33269.setFont('Merriweather', 11, 'normal');
smo33269.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33267.addModifier(smo33269);
smo33269.addClass('lyric lyric-1');
const smo33270 = new VF.ChordSymbol();
smo33270.setAttribute('id', 'smo33270');
smo33270.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1}'));
smo33270.addGlyph('accidentalFlat', JSON.parse('{"glyph":"accidentalFlat","symbolModifier":1}'));
smo33270.setFont('Roboto Slab', 14).setReportWidth(false);
smo33267.addModifier(smo33270, 0);
smo33289v0ar.push(smo33267);
const smo33271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo33271.setAttribute('id', 'smo33271');
const smo33272 = new VF.Annotation('the');
smo33272.setAttribute('id', 'smo33272');
smo33272.setFont('Merriweather', 11, 'normal');
smo33272.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33271.addModifier(smo33272);
smo33272.addClass('lyric lyric-0');
const smo33273 = new VF.Annotation('my');
smo33273.setAttribute('id', 'smo33273');
smo33273.setFont('Merriweather', 11, 'normal');
smo33273.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33271.addModifier(smo33273);
smo33273.addClass('lyric lyric-1');
smo33289v0ar.push(smo33271);
smo33289v0.addTickables(smo33289v0ar)
fmtsmo3328911.joinVoices([smo33289v0]);
const fmtsmo3365011 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo33650v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33650v0ar = [];
const smo33632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo33632.setAttribute('id', 'smo33632');
smo33650v0ar.push(smo33632);
const smo33633 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo33633.setAttribute('id', 'smo33633');
smo33650v0ar.push(smo33633);
const smo33634 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo33634.setAttribute('id', 'smo33634');
smo33650v0ar.push(smo33634);
smo33650v0.addTickables(smo33650v0ar)
fmtsmo3365011.joinVoices([smo33650v0]);
// create beam groups and tuplets for format grp smo33754 before formatting
const dirsmo35027 = smo33267.getStemDirection();
smo33267.setStemDirection(dirsmo35027);
smo33271.setStemDirection(dirsmo35027);
const smo35027 = new VF.Beam([smo33267,smo33271]);
const dirsmo35030 = smo33633.getStemDirection();
smo33633.setStemDirection(dirsmo35030);
smo33634.setStemDirection(dirsmo35030);
const smo35030 = new VF.Beam([smo33633,smo33634]);
 
// formatting measures in staff group smo33754
fmtsmo3328911.format([smo33289v0,smo33650v0], 161);
const stavesmo33289 = new VF.Stave(43, 854, 236);
stavesmo33289.setAttribute('id', 'stavesmo33289');
stavesmo33289.setBegBarType(1);
stavesmo33289.addClef('treble');
const keysmo33289 = new VF.KeySignature('F');
keysmo33289.addToStave(stavesmo33289);
stavesmo33289.setContext(context);
stavesmo33289.draw();
smo33289v0.draw(context, stavesmo33289);
smo35027.setContext(context);
smo35027.draw();
const stavesmo33650 = new VF.Stave(43, 1040, 236);
stavesmo33650.setAttribute('id', 'stavesmo33650');
stavesmo33650.setBegBarType(1);
stavesmo33650.addClef('bass');
const keysmo33650 = new VF.KeySignature('F');
keysmo33650.addToStave(stavesmo33650);
stavesmo33650.setContext(context);
stavesmo33650.draw();
smo33650v0.draw(context, stavesmo33650);
smo35030.setContext(context);
smo35030.draw();
const leftsmo33754stavesmo332891 = new VF.StaveConnector(stavesmo33289, stavesmo33650).setType(3);
leftsmo33754stavesmo332891.setContext(context).draw();
const fmtsmo3331712 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo33317v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33317v0ar = [];
const smo33290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo33290.setAttribute('id', 'smo33290');
const smo33291 = new VF.Annotation('li');
smo33291.setAttribute('id', 'smo33291');
smo33291.setFont('Merriweather', 11, 'normal');
smo33291.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33290.addModifier(smo33291);
smo33291.addClass('lyric lyric-0 lyric-hyphen');
const smo33292 = new VF.Annotation('ha');
smo33292.setAttribute('id', 'smo33292');
smo33292.setFont('Merriweather', 11, 'normal');
smo33292.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33290.addModifier(smo33292);
smo33292.addClass('lyric lyric-1 lyric-hyphen');
smo33317v0ar.push(smo33290);
const smo33293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo33293.setAttribute('id', 'smo33293');
smo33293.addModifier(new VF.Dot(), 0);
smo33293.addModifier(new VF.Dot(), 1);
const smo33294 = new VF.Annotation('ght');
smo33294.setAttribute('id', 'smo33294');
smo33294.setFont('Merriweather', 11, 'normal');
smo33294.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33293.addModifier(smo33294);
smo33294.addClass('lyric lyric-0');
const smo33295 = new VF.Annotation('nd');
smo33295.setAttribute('id', 'smo33295');
smo33295.setFont('Merriweather', 11, 'normal');
smo33295.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33293.addModifier(smo33295);
smo33295.addClass('lyric lyric-1');
smo33317v0ar.push(smo33293);
const smo33296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo33296.setAttribute('id', 'smo33296');
const smo33297 = new VF.Annotation('Take');
smo33297.setAttribute('id', 'smo33297');
smo33297.setFont('Merriweather', 11, 'normal');
smo33297.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33296.addModifier(smo33297);
smo33297.addClass('lyric lyric-0');
const smo33299 = new VF.ChordSymbol();
smo33299.setAttribute('id', 'smo33299');
smo33299.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1}'));
smo33299.addGlyph('csymDiminished', JSON.parse('{"glyph":"csymDiminished","symbolModifier":3}'));
smo33299.setFont('Roboto Slab', 14).setReportWidth(false);
smo33296.addModifier(smo33299, 0);
smo33317v0ar.push(smo33296);
const smo33300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo33300.setAttribute('id', 'smo33300');
const smo33301 = new VF.Annotation('my');
smo33301.setAttribute('id', 'smo33301');
smo33301.setFont('Merriweather', 11, 'normal');
smo33301.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33300.addModifier(smo33301);
smo33301.addClass('lyric lyric-0');
smo33317v0ar.push(smo33300);
smo33317v0.addTickables(smo33317v0ar)
fmtsmo3331712.joinVoices([smo33317v0]);
const fmtsmo3367012 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo33670v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33670v0ar = [];
const smo33651 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","fn/3/n"]}'))
smo33651.setAttribute('id', 'smo33651');
smo33670v0ar.push(smo33651);
const smo33652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo33652.setAttribute('id', 'smo33652');
smo33652.addModifier(new VF.Dot(), 0);
smo33652.addModifier(new VF.Dot(), 1);
smo33670v0ar.push(smo33652);
const smo33653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","ab/3/n"]}'))
smo33653.setAttribute('id', 'smo33653');
const smo336530acc = new VF.Accidental('n');
smo33653.addModifier(smo336530acc, 0);
const smo336531acc = new VF.Accidental('b');
smo33653.addModifier(smo336531acc, 1);
smo33670v0ar.push(smo33653);
const smo33654 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","gn/3/n"]}'))
smo33654.setAttribute('id', 'smo33654');
smo33670v0ar.push(smo33654);
smo33670v0.addTickables(smo33670v0ar)
fmtsmo3367012.joinVoices([smo33670v0]);
// create beam groups and tuplets for format grp smo33754 before formatting
const dirsmo35033 = smo33296.getStemDirection();
smo33296.setStemDirection(dirsmo35033);
smo33300.setStemDirection(dirsmo35033);
const smo35033 = new VF.Beam([smo33296,smo33300]);
const dirsmo35036 = smo33653.getStemDirection();
smo33653.setStemDirection(dirsmo35036);
smo33654.setStemDirection(dirsmo35036);
const smo35036 = new VF.Beam([smo33653,smo33654]);
 
// formatting measures in staff group smo33754
fmtsmo3331712.format([smo33317v0,smo33670v0], 191);
const stavesmo33317 = new VF.Stave(279, 854, 205);
stavesmo33317.setAttribute('id', 'stavesmo33317');
stavesmo33317.setBegBarType(VF.Barline.type.NONE);
stavesmo33317.setContext(context);
stavesmo33317.draw();
smo33317v0.draw(context, stavesmo33317);
smo35033.setContext(context);
smo35033.draw();
const stavesmo33670 = new VF.Stave(279, 1040, 205);
stavesmo33670.setAttribute('id', 'stavesmo33670');
stavesmo33670.setBegBarType(VF.Barline.type.NONE);
stavesmo33670.setContext(context);
stavesmo33670.draw();
smo33670v0.draw(context, stavesmo33670);
smo35036.setContext(context);
smo35036.draw();
const fmtsmo3334413 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo33344v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33344v0ar = [];
const smo33318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo33318.setAttribute('id', 'smo33318');
const smo33319 = new VF.Annotation('ha');
smo33319.setAttribute('id', 'smo33319');
smo33319.setFont('Merriweather', 11, 'normal');
smo33319.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33318.addModifier(smo33319);
smo33319.addClass('lyric lyric-0 lyric-hyphen');
const smo33320 = new VF.ChordSymbol();
smo33320.setAttribute('id', 'smo33320');
smo33320.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo33320.setFont('Roboto Slab', 14).setReportWidth(false);
smo33318.addModifier(smo33320, 0);
smo33344v0ar.push(smo33318);
const smo33321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo33321.setAttribute('id', 'smo33321');
smo33321.addModifier(new VF.Dot(), 0);
const smo33322 = new VF.Annotation('nd');
smo33322.setAttribute('id', 'smo33322');
smo33322.setFont('Merriweather', 11, 'normal');
smo33322.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33321.addModifier(smo33322);
smo33322.addClass('lyric lyric-0');
smo33344v0ar.push(smo33321);
const smo33323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo33323.setAttribute('id', 'smo33323');
const smo33324 = new VF.Annotation('pre');
smo33324.setAttribute('id', 'smo33324');
smo33324.setFont('Merriweather', 11, 'normal');
smo33324.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33323.addModifier(smo33324);
smo33324.addClass('lyric lyric-0 lyric-hyphen');
const smo33325 = new VF.ChordSymbol();
smo33325.setAttribute('id', 'smo33325');
smo33325.addGlyphOrText('Dm', JSON.parse('{"text":"Dm","symbolModifier":1}'));
smo33325.setFont('Roboto Slab', 14).setReportWidth(false);
smo33323.addModifier(smo33325, 0);
smo33344v0ar.push(smo33323);
const smo33326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","gn/4/n"]}'))
smo33326.setAttribute('id', 'smo33326');
const smo33327 = new VF.Annotation('cious');
smo33327.setAttribute('id', 'smo33327');
smo33327.setFont('Merriweather', 11, 'normal');
smo33327.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33326.addModifier(smo33327);
smo33327.addClass('lyric lyric-0');
const smo33328 = new VF.ChordSymbol();
smo33328.setAttribute('id', 'smo33328');
smo33328.addGlyphOrText('A', JSON.parse('{"text":"A","symbolModifier":1}'));
smo33328.addGlyph('csymAugmented', JSON.parse('{"glyph":"csymAugmented","symbolModifier":3}'));
smo33328.addGlyphOrText('5', JSON.parse('{"text":"5","symbolModifier":3}'));
smo33328.setFont('Roboto Slab', 14).setReportWidth(false);
smo33326.addModifier(smo33328, 0);
smo33344v0ar.push(smo33326);
smo33344v0.addTickables(smo33344v0ar)
fmtsmo3334413.joinVoices([smo33344v0]);
const fmtsmo3368913 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo33689v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33689v0ar = [];
const smo33671 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","an/3/n"]}'))
smo33671.setAttribute('id', 'smo33671');
smo33689v0ar.push(smo33671);
const smo33672 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","an/3/n"]}'))
smo33672.setAttribute('id', 'smo33672');
smo33689v0ar.push(smo33672);
const smo33673 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["db/3/n","bn/3/n"]}'))
smo33673.setAttribute('id', 'smo33673');
const smo336730acc = new VF.Accidental('b');
smo33673.addModifier(smo336730acc, 0);
const smo336731acc = new VF.Accidental('n');
smo33673.addModifier(smo336731acc, 1);
smo33689v0ar.push(smo33673);
smo33689v0.addTickables(smo33689v0ar)
fmtsmo3368913.joinVoices([smo33689v0]);
// create beam groups and tuplets for format grp smo33754 before formatting
const dirsmo35039 = smo33323.getStemDirection();
smo33323.setStemDirection(dirsmo35039);
smo33326.setStemDirection(dirsmo35039);
const smo35039 = new VF.Beam([smo33323,smo33326]);
const dirsmo35042 = smo33672.getStemDirection();
smo33672.setStemDirection(dirsmo35042);
smo33673.setStemDirection(dirsmo35042);
const smo35042 = new VF.Beam([smo33672,smo33673]);
 
// formatting measures in staff group smo33754
fmtsmo3334413.format([smo33344v0,smo33689v0], 186);
const stavesmo33344 = new VF.Stave(484, 854, 200);
stavesmo33344.setAttribute('id', 'stavesmo33344');
stavesmo33344.setBegBarType(VF.Barline.type.NONE);
stavesmo33344.setContext(context);
stavesmo33344.draw();
smo33344v0.draw(context, stavesmo33344);
smo35039.setContext(context);
smo35039.draw();
const stavesmo33689 = new VF.Stave(484, 1040, 200);
stavesmo33689.setAttribute('id', 'stavesmo33689');
stavesmo33689.setBegBarType(VF.Barline.type.NONE);
stavesmo33689.setContext(context);
stavesmo33689.draw();
smo33689v0.draw(context, stavesmo33689);
smo35042.setContext(context);
smo35042.draw();
const fmtsmo3336814 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo33368v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33368v0ar = [];
const smo33345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","an/4/n"]}'))
smo33345.setAttribute('id', 'smo33345');
const smo33346 = new VF.Annotation('Lord,');
smo33346.setAttribute('id', 'smo33346');
smo33346.setFont('Merriweather', 11, 'normal');
smo33346.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33345.addModifier(smo33346);
smo33346.addClass('lyric lyric-0');
const smo33347 = new VF.ChordSymbol();
smo33347.setAttribute('id', 'smo33347');
smo33347.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo33347.setFont('Roboto Slab', 14).setReportWidth(false);
smo33345.addModifier(smo33347, 0);
smo33368v0ar.push(smo33345);
const smo33348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","gn/4/n"]}'))
smo33348.setAttribute('id', 'smo33348');
smo33348.addModifier(new VF.Dot(), 0);
smo33348.addModifier(new VF.Dot(), 1);
const smo33349 = new VF.Annotation('lead');
smo33349.setAttribute('id', 'smo33349');
smo33349.setFont('Merriweather', 11, 'normal');
smo33349.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33348.addModifier(smo33349);
smo33349.addClass('lyric lyric-0');
const smo33350 = new VF.ChordSymbol();
smo33350.setAttribute('id', 'smo33350');
smo33350.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo33350.addGlyph('csymParensLeftTall', JSON.parse('{"glyph":"csymParensLeftTall","symbolModifier":3}'));
smo33350.addGlyphOrText('sus4', JSON.parse('{"text":"sus4","symbolModifier":3}'));
smo33350.addGlyph('csymParensRightTall', JSON.parse('{"glyph":"csymParensRightTall","symbolModifier":3}'));
smo33350.setFont('Roboto Slab', 14).setReportWidth(false);
smo33348.addModifier(smo33350, 0);
smo33368v0ar.push(smo33348);
const smo33351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo33351.setAttribute('id', 'smo33351');
const smo33352 = new VF.Annotation('me');
smo33352.setAttribute('id', 'smo33352');
smo33352.setFont('Merriweather', 11, 'normal');
smo33352.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33351.addModifier(smo33352);
smo33352.addClass('lyric lyric-0');
smo33368v0ar.push(smo33351);
smo33368v0.addTickables(smo33368v0ar)
fmtsmo3336814.joinVoices([smo33368v0]);
const fmtsmo3370814 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo33708v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33708v0ar = [];
const smo33690 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo33690.setAttribute('id', 'smo33690');
smo33708v0ar.push(smo33690);
const smo33691 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/3/n","bb/3/n"]}'))
smo33691.setAttribute('id', 'smo33691');
smo33691.addModifier(new VF.Dot(), 0);
smo33691.addModifier(new VF.Dot(), 1);
smo33708v0ar.push(smo33691);
const smo33692 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","bb/3/n"]}'))
smo33692.setAttribute('id', 'smo33692');
smo33708v0ar.push(smo33692);
smo33708v0.addTickables(smo33708v0ar)
fmtsmo3370814.joinVoices([smo33708v0]);
// create beam groups and tuplets for format grp smo33754 before formatting
const dirsmo35045 = smo33348.getStemDirection();
smo33348.setStemDirection(dirsmo35045);
smo33351.setStemDirection(dirsmo35045);
const smo35045 = new VF.Beam([smo33348,smo33351]);
const dirsmo35048 = smo33691.getStemDirection();
smo33691.setStemDirection(dirsmo35048);
smo33692.setStemDirection(dirsmo35048);
const smo35048 = new VF.Beam([smo33691,smo33692]);
 
// formatting measures in staff group smo33754
fmtsmo3336814.format([smo33368v0,smo33708v0], 164);
const stavesmo33368 = new VF.Stave(684, 854, 178);
stavesmo33368.setAttribute('id', 'stavesmo33368');
stavesmo33368.setBegBarType(VF.Barline.type.NONE);
stavesmo33368.setContext(context);
stavesmo33368.draw();
smo33368v0.draw(context, stavesmo33368);
smo35045.setContext(context);
smo35045.draw();
const stavesmo33708 = new VF.Stave(684, 1040, 178);
stavesmo33708.setAttribute('id', 'stavesmo33708');
stavesmo33708.setBegBarType(VF.Barline.type.NONE);
stavesmo33708.setContext(context);
stavesmo33708.draw();
smo33708v0.draw(context, stavesmo33708);
smo35048.setContext(context);
smo35048.draw();
const fmtsmo3338715 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo33387v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33387v0ar = [];
const smo33369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo33369.setAttribute('id', 'smo33369');
smo33369.addModifier(new VF.Dot(), 0);
smo33369.addModifier(new VF.Dot(), 1);
const smo33370 = new VF.Annotation('home');
smo33370.setAttribute('id', 'smo33370');
smo33370.setFont('Merriweather', 11, 'normal');
smo33370.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33369.addModifier(smo33370);
smo33370.addClass('lyric lyric-0 lyric-hyphen');
const smo33371 = new VF.ChordSymbol();
smo33371.setAttribute('id', 'smo33371');
smo33371.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo33371.setFont('Roboto Slab', 14).setReportWidth(false);
smo33369.addModifier(smo33371, 0);
smo33387v0ar.push(smo33369);
smo33387v0.addTickables(smo33387v0ar)
fmtsmo3338715.joinVoices([smo33387v0]);
const fmtsmo3372515 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo33725v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33725v0ar = [];
const smo33709 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo33709.setAttribute('id', 'smo33709');
smo33709.addModifier(new VF.Dot(), 0);
smo33709.addModifier(new VF.Dot(), 1);
smo33725v0ar.push(smo33709);
smo33725v0.addTickables(smo33725v0ar)
fmtsmo3372515.joinVoices([smo33725v0]);
// create beam groups and tuplets for format grp smo33754 before formatting
 
// formatting measures in staff group smo33754
fmtsmo3338715.format([smo33387v0,smo33725v0], 50);
const stavesmo33387 = new VF.Stave(862, 854, 65);
stavesmo33387.setAttribute('id', 'stavesmo33387');
stavesmo33387.setBegBarType(VF.Barline.type.NONE);
stavesmo33387.setEndBarType(2);
stavesmo33387.setContext(context);
stavesmo33387.draw();
smo33387v0.draw(context, stavesmo33387);
const stavesmo33725 = new VF.Stave(862, 1040, 65);
stavesmo33725.setAttribute('id', 'stavesmo33725');
stavesmo33725.setBegBarType(VF.Barline.type.NONE);
stavesmo33725.setEndBarType(2);
stavesmo33725.setContext(context);
stavesmo33725.draw();
smo33725v0.draw(context, stavesmo33725);
const fmtsmo3341016 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo33410v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33410v0ar = [];
const smo33388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo33388.setAttribute('id', 'smo33388');
smo33410v0ar.push(smo33388);
const smo33390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo33390.setAttribute('id', 'smo33390');
const smo33391 = new VF.Annotation('When');
smo33391.setAttribute('id', 'smo33391');
smo33391.setFont('Merriweather', 11, 'normal');
smo33391.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33390.addModifier(smo33391);
smo33391.addClass('lyric lyric-0');
smo33410v0ar.push(smo33390);
const smo33392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo33392.setAttribute('id', 'smo33392');
const smo33393 = new VF.Annotation('the');
smo33393.setAttribute('id', 'smo33393');
smo33393.setFont('Merriweather', 11, 'normal');
smo33393.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33392.addModifier(smo33393);
smo33393.addClass('lyric lyric-0');
smo33410v0ar.push(smo33392);
smo33410v0.addTickables(smo33410v0ar)
fmtsmo3341016.joinVoices([smo33410v0]);
const fmtsmo3374516 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo33745v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33745v0ar = [];
const smo33726 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo33726.setAttribute('id', 'smo33726');
smo33745v0ar.push(smo33726);
const smo33727 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo33727.setAttribute('id', 'smo33727');
smo33745v0ar.push(smo33727);
const smo33728 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo33728.setAttribute('id', 'smo33728');
smo33745v0ar.push(smo33728);
smo33745v0.addTickables(smo33745v0ar)
fmtsmo3374516.joinVoices([smo33745v0]);
// create beam groups and tuplets for format grp smo33754 before formatting
const dirsmo35053 = smo33390.getStemDirection();
smo33390.setStemDirection(dirsmo35053);
smo33392.setStemDirection(dirsmo35053);
const smo35053 = new VF.Beam([smo33390,smo33392]);
const dirsmo35055 = smo33727.getStemDirection();
smo33727.setStemDirection(dirsmo35055);
smo33728.setStemDirection(dirsmo35055);
const smo35055 = new VF.Beam([smo33727,smo33728]);
 
// formatting measures in staff group smo33754
fmtsmo3341016.format([smo33410v0,smo33745v0], 133);
const stavesmo33410 = new VF.Stave(927, 854, 151);
stavesmo33410.setAttribute('id', 'stavesmo33410');
stavesmo33410.setBegBarType(VF.Barline.type.NONE);
stavesmo33410.setEndBarType(5);
stavesmo33410.setContext(context);
stavesmo33410.draw();
smo33410v0.draw(context, stavesmo33410);
smo35053.setContext(context);
smo35053.draw();
const stavesmo33745 = new VF.Stave(927, 1040, 151);
stavesmo33745.setAttribute('id', 'stavesmo33745');
stavesmo33745.setBegBarType(VF.Barline.type.NONE);
stavesmo33745.setEndBarType(5);
stavesmo33745.setContext(context);
stavesmo33745.draw();
smo33745v0.draw(context, stavesmo33745);
smo35055.setContext(context);
smo35055.draw();
// modifier from 0-15-0-0 to 0-16-0-0
const smo35187 = new VF.StaveTie({ first_note: smo33369, last_note: smo33388, 
          firstNote: smo33369, lastNote: smo33388, first_indices: [0,1], last_indices: [0,1]});
smo35187.setContext(context).draw();
// modifier from 1-15-0-0 to 1-16-0-0
const smo35188 = new VF.StaveTie({ first_note: smo33709, last_note: smo33726, 
          firstNote: smo33709, lastNote: smo33726, first_indices: [0,1], last_indices: [0,1]});
smo35188.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo32977').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo32995').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo32996').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo33001').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo32999').setAttributeNS('', 'transform', 'translate(0 33)');
context.svg.getElementById('vf-smo33003').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo33004').setAttributeNS('', 'transform', 'translate(0 31)');
context.svg.getElementById('vf-smo33022').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo33023').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo33027').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo33026').setAttributeNS('', 'transform', 'translate(0 37)');
context.svg.getElementById('vf-smo33029').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33030').setAttributeNS('', 'transform', 'translate(0 38)');
context.svg.getElementById('vf-smo33049').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo33050').setAttributeNS('', 'transform', 'translate(0 36)');
context.svg.getElementById('vf-smo33053').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo33054').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo33057').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33058').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo33076').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33077').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo33079').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo33080').setAttributeNS('', 'transform', 'translate(0 43)');
context.svg.getElementById('vf-smo33082').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33083').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo33086').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33087').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo33106').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo33109').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo33113').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo33114').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo33133').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo33136').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo33137').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo33140').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo33159').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo33160').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo33163').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo33164').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo33183').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo33184').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo33187').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo33188').setAttributeNS('', 'transform', 'translate(0 39)');
context.svg.getElementById('vf-smo33191').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33192').setAttributeNS('', 'transform', 'translate(0 41)');
context.svg.getElementById('vf-smo33210').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo33211').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo33214').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo33215').setAttributeNS('', 'transform', 'translate(0 39)');
context.svg.getElementById('vf-smo33218').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33219').setAttributeNS('', 'transform', 'translate(0 43)');
context.svg.getElementById('vf-smo33237').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo33238').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo33241').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33242').setAttributeNS('', 'transform', 'translate(0 37)');
context.svg.getElementById('vf-smo33245').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo33246').setAttributeNS('', 'transform', 'translate(0 43)');
context.svg.getElementById('vf-smo33264').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo33265').setAttributeNS('', 'transform', 'translate(0 38)');
context.svg.getElementById('vf-smo33268').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo33269').setAttributeNS('', 'transform', 'translate(0 41)');
context.svg.getElementById('vf-smo33272').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo33273').setAttributeNS('', 'transform', 'translate(0 38)');
context.svg.getElementById('vf-smo33291').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33292').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo33294').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo33295').setAttributeNS('', 'transform', 'translate(0 36)');
context.svg.getElementById('vf-smo33297').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo33301').setAttributeNS('', 'transform', 'translate(0 23)');
context.svg.getElementById('vf-smo33319').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33322').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo33324').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo33327').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo33346').setAttributeNS('', 'transform', 'translate(0 27)');
context.svg.getElementById('vf-smo33349').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33352').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo33370').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33393').setAttributeNS('', 'transform', 'translate(0 5)');
}
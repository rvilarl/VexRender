// @@ Precious Lord p 1/0  by Thomas Dorsey
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
const fmtsmo448380 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo44838v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo44838v0ar = [];
const smo44819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo44819.setAttribute('id', 'smo44819');
const smo44820 = new VF.Annotation('Pre');
smo44820.setAttribute('id', 'smo44820');
smo44820.setFont('Merriweather', 11, 'normal');
smo44820.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44819.addModifier(smo44820);
smo44820.addClass('lyric lyric-0 lyric-hyphen');
smo44838v0ar.push(smo44819);
const smo44821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n"]}'))
smo44821.setAttribute('id', 'smo44821');
const smo44822 = new VF.Annotation('cious');
smo44822.setAttribute('id', 'smo44822');
smo44822.setFont('Merriweather', 11, 'normal');
smo44822.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44821.addModifier(smo44822);
smo44822.addClass('lyric lyric-0');
smo44838v0ar.push(smo44821);
smo44838v0.addTickables(smo44838v0ar)
fmtsmo448380.joinVoices([smo44838v0]);
const fmtsmo452800 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo45280v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45280v0ar = [];
const smo45263 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo45263.setAttribute('id', 'smo45263');
smo45280v0ar.push(smo45263);
const smo45264 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo45264.setAttribute('id', 'smo45264');
smo45280v0ar.push(smo45264);
smo45280v0.addTickables(smo45280v0ar)
fmtsmo452800.joinVoices([smo45280v0]);
// create beam groups and tuplets for format grp smo45599 before formatting
const dirsmo46798 = smo44819.getStemDirection();
smo44819.setStemDirection(dirsmo46798);
smo44821.setStemDirection(dirsmo46798);
const smo46798 = new VF.Beam([smo44819,smo44821]);
const dirsmo46801 = smo45263.getStemDirection();
smo45263.setStemDirection(dirsmo46801);
smo45264.setStemDirection(dirsmo46801);
const smo46801 = new VF.Beam([smo45263,smo45264]);
 
// formatting measures in staff group smo45599
fmtsmo448380.format([smo44838v0,smo45280v0], 117);
const stavesmo44838 = new VF.Stave(43, 178, 215);
stavesmo44838.setAttribute('id', 'stavesmo44838');
stavesmo44838.setBegBarType(1);
stavesmo44838.addClef('treble');
stavesmo44838.addTimeSignature('3/4');
const keysmo44838 = new VF.KeySignature('F');
keysmo44838.addToStave(stavesmo44838);
stavesmo44838.setContext(context);
stavesmo44838.draw();
smo44838v0.draw(context, stavesmo44838);
smo46798.setContext(context);
smo46798.draw();
const stavesmo45280 = new VF.Stave(43, 333, 215);
stavesmo45280.setAttribute('id', 'stavesmo45280');
stavesmo45280.setBegBarType(1);
stavesmo45280.addClef('bass');
stavesmo45280.addTimeSignature('3/4');
const keysmo45280 = new VF.KeySignature('F');
keysmo45280.addToStave(stavesmo45280);
stavesmo45280.setContext(context);
stavesmo45280.draw();
smo45280v0.draw(context, stavesmo45280);
smo46801.setContext(context);
smo46801.draw();
const leftsmo45599stavesmo448381 = new VF.StaveConnector(stavesmo44838, stavesmo45280).setType(3);
leftsmo45599stavesmo448381.setContext(context).draw();
const fmtsmo448651 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo44865v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo44865v0ar = [];
const smo44839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo44839.setAttribute('id', 'smo44839');
const smo44840 = new VF.Annotation('Lord,');
smo44840.setAttribute('id', 'smo44840');
smo44840.setFont('Merriweather', 11, 'normal');
smo44840.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44839.addModifier(smo44840);
smo44840.addClass('lyric lyric-0');
const smo44841 = new VF.Annotation('dark');
smo44841.setAttribute('id', 'smo44841');
smo44841.setFont('Merriweather', 11, 'normal');
smo44841.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44839.addModifier(smo44841);
smo44841.addClass('lyric lyric-1 lyric-hyphen');
const smo44842 = new VF.ChordSymbol();
smo44842.setAttribute('id', 'smo44842');
smo44842.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo44842.setFont('Roboto Slab', 14).setReportWidth(false);
smo44839.addModifier(smo44842, 0);
smo44865v0ar.push(smo44839);
const smo44843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo44843.setAttribute('id', 'smo44843');
const smo44846 = new VF.Annotation('take');
smo44846.setAttribute('id', 'smo44846');
smo44846.setFont('Merriweather', 11, 'normal');
smo44846.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44843.addModifier(smo44846);
smo44846.addClass('lyric lyric-0');
const smo44844 = new VF.Annotation('ness');
smo44844.setAttribute('id', 'smo44844');
smo44844.setFont('Merriweather', 11, 'normal');
smo44844.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44843.addModifier(smo44844);
smo44844.addClass('lyric lyric-1');
const smo44845 = new VF.ChordSymbol();
smo44845.setAttribute('id', 'smo44845');
smo44845.addGlyphOrText('Gm', JSON.parse('{"text":"Gm","symbolModifier":1,"symbolType":2}'));
smo44845.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo44845.setFont('Roboto Slab', 14).setReportWidth(false);
smo44843.addModifier(smo44845, 0);
smo44865v0ar.push(smo44843);
const smo44847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo44847.setAttribute('id', 'smo44847');
const smo44848 = new VF.Annotation('my');
smo44848.setAttribute('id', 'smo44848');
smo44848.setFont('Merriweather', 11, 'normal');
smo44848.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44847.addModifier(smo44848);
smo44848.addClass('lyric lyric-0');
const smo44849 = new VF.Annotation('a');
smo44849.setAttribute('id', 'smo44849');
smo44849.setFont('Merriweather', 11, 'normal');
smo44849.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44847.addModifier(smo44849);
smo44849.addClass('lyric lyric-1 lyric-hyphen');
smo44865v0ar.push(smo44847);
smo44865v0.addTickables(smo44865v0ar)
fmtsmo448651.joinVoices([smo44865v0]);
const fmtsmo453001 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo45300v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45300v0ar = [];
const smo45281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo45281.setAttribute('id', 'smo45281');
smo45300v0ar.push(smo45281);
const smo45282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","fn/3/n"]}'))
smo45282.setAttribute('id', 'smo45282');
smo45300v0ar.push(smo45282);
const smo45283 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","en/3/n"]}'))
smo45283.setAttribute('id', 'smo45283');
smo45300v0ar.push(smo45283);
smo45300v0.addTickables(smo45300v0ar)
fmtsmo453001.joinVoices([smo45300v0]);
// create beam groups and tuplets for format grp smo45599 before formatting
const dirsmo46804 = smo44843.getStemDirection();
smo44843.setStemDirection(dirsmo46804);
smo44847.setStemDirection(dirsmo46804);
const smo46804 = new VF.Beam([smo44843,smo44847]);
const dirsmo46806 = smo45282.getStemDirection();
smo45282.setStemDirection(dirsmo46806);
smo45283.setStemDirection(dirsmo46806);
const smo46806 = new VF.Beam([smo45282,smo45283]);
 
// formatting measures in staff group smo45599
fmtsmo448651.format([smo44865v0,smo45300v0], 185);
const stavesmo44865 = new VF.Stave(258, 178, 208);
stavesmo44865.setAttribute('id', 'stavesmo44865');
stavesmo44865.setBegBarType(4);
stavesmo44865.setContext(context);
stavesmo44865.draw();
smo44865v0.draw(context, stavesmo44865);
smo46804.setContext(context);
smo46804.draw();
const stavesmo45300 = new VF.Stave(258, 333, 208);
stavesmo45300.setAttribute('id', 'stavesmo45300');
stavesmo45300.setBegBarType(4);
stavesmo45300.setContext(context);
stavesmo45300.draw();
smo45300v0.draw(context, stavesmo45300);
smo46806.setContext(context);
smo46806.draw();
const fmtsmo448922 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo44892v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo44892v0ar = [];
const smo44866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo44866.setAttribute('id', 'smo44866');
const smo44867 = new VF.Annotation('hand,');
smo44867.setAttribute('id', 'smo44867');
smo44867.setFont('Merriweather', 11, 'normal');
smo44867.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44866.addModifier(smo44867);
smo44867.addClass('lyric lyric-0');
const smo44868 = new VF.Annotation('pears');
smo44868.setAttribute('id', 'smo44868');
smo44868.setFont('Merriweather', 11, 'normal');
smo44868.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44866.addModifier(smo44868);
smo44868.addClass('lyric lyric-1');
const smo44869 = new VF.ChordSymbol();
smo44869.setAttribute('id', 'smo44869');
smo44869.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo44869.setFont('Roboto Slab', 14).setReportWidth(false);
smo44866.addModifier(smo44869, 0);
smo44892v0ar.push(smo44866);
const smo44870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","an/4/n"]}'))
smo44870.setAttribute('id', 'smo44870');
const smo44872 = new VF.Annotation('lead');
smo44872.setAttribute('id', 'smo44872');
smo44872.setFont('Merriweather', 11, 'normal');
smo44872.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44870.addModifier(smo44872);
smo44872.addClass('lyric lyric-0');
const smo44871 = new VF.Annotation('and');
smo44871.setAttribute('id', 'smo44871');
smo44871.setFont('Merriweather', 11, 'normal');
smo44871.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44870.addModifier(smo44871);
smo44871.addClass('lyric lyric-1');
smo44892v0ar.push(smo44870);
const smo44873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n","an/4/n"]}'))
smo44873.setAttribute('id', 'smo44873');
const smo448730acc = new VF.Accidental('#');
smo44873.addModifier(smo448730acc, 0);
const smo44874 = new VF.Annotation('me');
smo44874.setAttribute('id', 'smo44874');
smo44874.setFont('Merriweather', 11, 'normal');
smo44874.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44873.addModifier(smo44874);
smo44874.addClass('lyric lyric-0');
const smo44875 = new VF.Annotation('the');
smo44875.setAttribute('id', 'smo44875');
smo44875.setFont('Merriweather', 11, 'normal');
smo44875.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44873.addModifier(smo44875);
smo44875.addClass('lyric lyric-1');
const smo44876 = new VF.ChordSymbol();
smo44876.setAttribute('id', 'smo44876');
smo44876.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo44876.addGlyph('+', JSON.parse('{"glyph":"+","symbolModifier":3,"symbolType":1}'));
smo44876.addGlyphOrText('5', JSON.parse('{"text":"5","symbolModifier":3,"symbolType":2}'));
smo44876.setFont('Roboto Slab', 14).setReportWidth(false);
smo44873.addModifier(smo44876, 0);
smo44892v0ar.push(smo44873);
smo44892v0.addTickables(smo44892v0ar)
fmtsmo448922.joinVoices([smo44892v0]);
const fmtsmo453202 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo45320v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45320v0ar = [];
const smo45301 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n","fn/3/n"]}'))
smo45301.setAttribute('id', 'smo45301');
smo45320v0ar.push(smo45301);
const smo45303 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo45303.setAttribute('id', 'smo45303');
smo45320v0ar.push(smo45303);
const smo45304 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo45304.setAttribute('id', 'smo45304');
smo45320v0ar.push(smo45304);
smo45320v0.addTickables(smo45320v0ar)
fmtsmo453202.joinVoices([smo45320v0]);
// create beam groups and tuplets for format grp smo45599 before formatting
const dirsmo46808 = smo44870.getStemDirection();
smo44870.setStemDirection(dirsmo46808);
smo44873.setStemDirection(dirsmo46808);
const smo46808 = new VF.Beam([smo44870,smo44873]);
const dirsmo46811 = smo45303.getStemDirection();
smo45303.setStemDirection(dirsmo46811);
smo45304.setStemDirection(dirsmo46811);
const smo46811 = new VF.Beam([smo45303,smo45304]);
 
// formatting measures in staff group smo45599
fmtsmo448922.format([smo44892v0,smo45320v0], 186);
const stavesmo44892 = new VF.Stave(466, 178, 200);
stavesmo44892.setAttribute('id', 'stavesmo44892');
stavesmo44892.setBegBarType(VF.Barline.type.NONE);
stavesmo44892.setContext(context);
stavesmo44892.draw();
smo44892v0.draw(context, stavesmo44892);
smo46808.setContext(context);
smo46808.draw();
const stavesmo45320 = new VF.Stave(466, 333, 200);
stavesmo45320.setAttribute('id', 'stavesmo45320');
stavesmo45320.setBegBarType(VF.Barline.type.NONE);
stavesmo45320.setContext(context);
stavesmo45320.draw();
smo45320v0.draw(context, stavesmo45320);
smo46811.setContext(context);
smo46811.draw();
const fmtsmo449193 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo44919v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo44919v0ar = [];
const smo44893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","gn/4/n"]}'))
smo44893.setAttribute('id', 'smo44893');
const smo44894 = new VF.Annotation('on,');
smo44894.setAttribute('id', 'smo44894');
smo44894.setFont('Merriweather', 11, 'normal');
smo44894.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44893.addModifier(smo44894);
smo44894.addClass('lyric lyric-0');
const smo44895 = new VF.Annotation('night');
smo44895.setAttribute('id', 'smo44895');
smo44895.setFont('Merriweather', 11, 'normal');
smo44895.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44893.addModifier(smo44895);
smo44895.addClass('lyric lyric-1');
const smo44896 = new VF.ChordSymbol();
smo44896.setAttribute('id', 'smo44896');
smo44896.addGlyphOrText('Gm', JSON.parse('{"text":"Gm","symbolModifier":1,"symbolType":2}'));
smo44896.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo44896.setFont('Roboto Slab', 14).setReportWidth(false);
smo44893.addModifier(smo44896, 0);
smo44919v0ar.push(smo44893);
const smo44897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","fn/4/n"]}'))
smo44897.setAttribute('id', 'smo44897');
const smo44898 = new VF.Annotation('let');
smo44898.setAttribute('id', 'smo44898');
smo44898.setFont('Merriweather', 11, 'normal');
smo44898.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44897.addModifier(smo44898);
smo44898.addClass('lyric lyric-0');
const smo44899 = new VF.Annotation('dra');
smo44899.setAttribute('id', 'smo44899');
smo44899.setFont('Merriweather', 11, 'normal');
smo44899.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44897.addModifier(smo44899);
smo44899.addClass('lyric lyric-1 lyric-hyphen');
const smo44900 = new VF.ChordSymbol();
smo44900.setAttribute('id', 'smo44900');
smo44900.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1,"symbolType":2}'));
smo44900.addGlyph('b', JSON.parse('{"glyph":"b","symbolModifier":1,"symbolType":1}'));
smo44900.setFont('Roboto Slab', 14).setReportWidth(false);
smo44897.addModifier(smo44900, 0);
smo44919v0ar.push(smo44897);
const smo44901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","fn/4/n"]}'))
smo44901.setAttribute('id', 'smo44901');
const smo44902 = new VF.Annotation('me');
smo44902.setAttribute('id', 'smo44902');
smo44902.setFont('Merriweather', 11, 'normal');
smo44902.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44901.addModifier(smo44902);
smo44902.addClass('lyric lyric-0');
const smo44903 = new VF.Annotation('ws');
smo44903.setAttribute('id', 'smo44903');
smo44903.setFont('Merriweather', 11, 'normal');
smo44903.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44901.addModifier(smo44903);
smo44903.addClass('lyric lyric-1');
smo44919v0ar.push(smo44901);
smo44919v0.addTickables(smo44919v0ar)
fmtsmo449193.joinVoices([smo44919v0]);
const fmtsmo453393 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo45339v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45339v0ar = [];
const smo45321 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","fn/3/n"]}'))
smo45321.setAttribute('id', 'smo45321');
smo45339v0ar.push(smo45321);
const smo45322 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","fn/3/n"]}'))
smo45322.setAttribute('id', 'smo45322');
smo45339v0ar.push(smo45322);
const smo45323 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","fn/3/n"]}'))
smo45323.setAttribute('id', 'smo45323');
smo45339v0ar.push(smo45323);
smo45339v0.addTickables(smo45339v0ar)
fmtsmo453393.joinVoices([smo45339v0]);
// create beam groups and tuplets for format grp smo45599 before formatting
const dirsmo46814 = smo44897.getStemDirection();
smo44897.setStemDirection(dirsmo46814);
smo44901.setStemDirection(dirsmo46814);
const smo46814 = new VF.Beam([smo44897,smo44901]);
const dirsmo46817 = smo45322.getStemDirection();
smo45322.setStemDirection(dirsmo46817);
smo45323.setStemDirection(dirsmo46817);
const smo46817 = new VF.Beam([smo45322,smo45323]);
 
// formatting measures in staff group smo45599
fmtsmo449193.format([smo44919v0,smo45339v0], 171);
const stavesmo44919 = new VF.Stave(666, 178, 185);
stavesmo44919.setAttribute('id', 'stavesmo44919');
stavesmo44919.setBegBarType(VF.Barline.type.NONE);
stavesmo44919.setContext(context);
stavesmo44919.draw();
smo44919v0.draw(context, stavesmo44919);
smo46814.setContext(context);
smo46814.draw();
const stavesmo45339 = new VF.Stave(666, 333, 185);
stavesmo45339.setAttribute('id', 'stavesmo45339');
stavesmo45339.setBegBarType(VF.Barline.type.NONE);
stavesmo45339.setContext(context);
stavesmo45339.draw();
smo45339v0.draw(context, stavesmo45339);
smo46817.setContext(context);
smo46817.draw();
const fmtsmo449484 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo44948v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo44948v0ar = [];
const smo44920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo44920.setAttribute('id', 'smo44920');
const smo44921 = new VF.Annotation('sta');
smo44921.setAttribute('id', 'smo44921');
smo44921.setFont('Merriweather', 11, 'normal');
smo44921.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44920.addModifier(smo44921);
smo44921.addClass('lyric lyric-0 lyric-hyphen');
const smo44922 = new VF.Annotation('ne');
smo44922.setAttribute('id', 'smo44922');
smo44922.setFont('Merriweather', 11, 'normal');
smo44922.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44920.addModifier(smo44922);
smo44922.addClass('lyric lyric-1 lyric-hyphen');
smo44948v0ar.push(smo44920);
const smo44923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo44923.setAttribute('id', 'smo44923');
smo44923.addModifier(new VF.Dot(), 0);
smo44923.addModifier(new VF.Dot(), 1);
const smo44924 = new VF.Annotation('nd');
smo44924.setAttribute('id', 'smo44924');
smo44924.setFont('Merriweather', 11, 'normal');
smo44924.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44923.addModifier(smo44924);
smo44924.addClass('lyric lyric-0');
const smo44925 = new VF.Annotation('ar');
smo44925.setAttribute('id', 'smo44925');
smo44925.setFont('Merriweather', 11, 'normal');
smo44925.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44923.addModifier(smo44925);
smo44925.addClass('lyric lyric-1');
smo44948v0ar.push(smo44923);
const smo44926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","dn/4/n"]}'))
smo44926.setAttribute('id', 'smo44926');
const smo449260acc = new VF.Accidental('b');
smo44926.addModifier(smo449260acc, 0);
const smo44927 = new VF.Annotation('I');
smo44927.setAttribute('id', 'smo44927');
smo44927.setFont('Merriweather', 11, 'normal');
smo44927.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44926.addModifier(smo44927);
smo44927.addClass('lyric lyric-0');
const smo44928 = new VF.Annotation('when');
smo44928.setAttribute('id', 'smo44928');
smo44928.setFont('Merriweather', 11, 'normal');
smo44928.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44926.addModifier(smo44928);
smo44928.addClass('lyric lyric-1');
const smo44929 = new VF.ChordSymbol();
smo44929.setAttribute('id', 'smo44929');
smo44929.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1,"symbolType":2}'));
smo44929.addGlyph('diminished', JSON.parse('{"glyph":"diminished","symbolModifier":3,"symbolType":1}'));
smo44929.setFont('Roboto Slab', 14).setReportWidth(false);
smo44926.addModifier(smo44929, 0);
smo44948v0ar.push(smo44926);
const smo44930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","dn/4/n"]}'))
smo44930.setAttribute('id', 'smo44930');
const smo44931 = new VF.Annotation('am');
smo44931.setAttribute('id', 'smo44931');
smo44931.setFont('Merriweather', 11, 'normal');
smo44931.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44930.addModifier(smo44931);
smo44931.addClass('lyric lyric-0');
const smo44932 = new VF.Annotation('my');
smo44932.setAttribute('id', 'smo44932');
smo44932.setFont('Merriweather', 11, 'normal');
smo44932.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44930.addModifier(smo44932);
smo44932.addClass('lyric lyric-1');
smo44948v0ar.push(smo44930);
smo44948v0.addTickables(smo44948v0ar)
fmtsmo449484.joinVoices([smo44948v0]);
const fmtsmo453614 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo45361v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45361v0ar = [];
const smo45340 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","fn/3/n"]}'))
smo45340.setAttribute('id', 'smo45340');
smo45361v0ar.push(smo45340);
const smo45342 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bb/2/n","dn/3/n"]}'))
smo45342.setAttribute('id', 'smo45342');
smo45342.addModifier(new VF.Dot(), 0);
smo45342.addModifier(new VF.Dot(), 1);
smo45361v0ar.push(smo45342);
const smo45344 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo45344.setAttribute('id', 'smo45344');
smo45361v0ar.push(smo45344);
const smo45345 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo45345.setAttribute('id', 'smo45345');
smo45361v0ar.push(smo45345);
smo45361v0.addTickables(smo45361v0ar)
fmtsmo453614.joinVoices([smo45361v0]);
// create beam groups and tuplets for format grp smo45599 before formatting
const dirsmo46820 = smo44926.getStemDirection();
smo44926.setStemDirection(dirsmo46820);
smo44930.setStemDirection(dirsmo46820);
const smo46820 = new VF.Beam([smo44926,smo44930]);
const dirsmo46823 = smo45344.getStemDirection();
smo45344.setStemDirection(dirsmo46823);
smo45345.setStemDirection(dirsmo46823);
const smo46823 = new VF.Beam([smo45344,smo45345]);
 
// formatting measures in staff group smo45599
fmtsmo449484.format([smo44948v0,smo45361v0], 213);
const stavesmo44948 = new VF.Stave(851, 178, 227);
stavesmo44948.setAttribute('id', 'stavesmo44948');
stavesmo44948.setBegBarType(VF.Barline.type.NONE);
stavesmo44948.setContext(context);
stavesmo44948.draw();
smo44948v0.draw(context, stavesmo44948);
smo46820.setContext(context);
smo46820.draw();
const stavesmo45361 = new VF.Stave(851, 333, 227);
stavesmo45361.setAttribute('id', 'stavesmo45361');
stavesmo45361.setBegBarType(VF.Barline.type.NONE);
stavesmo45361.setContext(context);
stavesmo45361.draw();
smo45361v0.draw(context, stavesmo45361);
smo46823.setContext(context);
smo46823.draw();
const rightsmo45599stavesmo449481 = new VF.StaveConnector(stavesmo44948, stavesmo45361).setType(0);
rightsmo45599stavesmo449481.setContext(context).draw();
const fmtsmo449755 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo44975v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo44975v0ar = [];
const smo44949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo44949.setAttribute('id', 'smo44949');
const smo44950 = new VF.Annotation('tired');
smo44950.setAttribute('id', 'smo44950');
smo44950.setFont('Merriweather', 11, 'normal');
smo44950.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44949.addModifier(smo44950);
smo44950.addClass('lyric lyric-0');
const smo44951 = new VF.Annotation('life');
smo44951.setAttribute('id', 'smo44951');
smo44951.setFont('Merriweather', 11, 'normal');
smo44951.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44949.addModifier(smo44951);
smo44951.addClass('lyric lyric-1');
const smo44952 = new VF.ChordSymbol();
smo44952.setAttribute('id', 'smo44952');
smo44952.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo44952.setFont('Roboto Slab', 14).setReportWidth(false);
smo44949.addModifier(smo44952, 0);
smo44975v0ar.push(smo44949);
const smo44953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo44953.setAttribute('id', 'smo44953');
const smo44954 = new VF.Annotation('I');
smo44954.setAttribute('id', 'smo44954');
smo44954.setFont('Merriweather', 11, 'normal');
smo44954.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44953.addModifier(smo44954);
smo44954.addClass('lyric lyric-0');
const smo44956 = new VF.ChordSymbol();
smo44956.setAttribute('id', 'smo44956');
smo44956.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo44956.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo44956.setFont('Roboto Slab', 14).setReportWidth(false);
smo44953.addModifier(smo44956, 0);
smo44975v0ar.push(smo44953);
const smo44957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo44957.setAttribute('id', 'smo44957');
const smo44958 = new VF.Annotation('am');
smo44958.setAttribute('id', 'smo44958');
smo44958.setFont('Merriweather', 11, 'normal');
smo44958.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44957.addModifier(smo44958);
smo44958.addClass('lyric lyric-0');
const smo44959 = new VF.Annotation('is');
smo44959.setAttribute('id', 'smo44959');
smo44959.setFont('Merriweather', 11, 'normal');
smo44959.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44957.addModifier(smo44959);
smo44959.addClass('lyric lyric-1 lyric-hyphen');
smo44975v0ar.push(smo44957);
smo44975v0.addTickables(smo44975v0ar)
fmtsmo449755.joinVoices([smo44975v0]);
const fmtsmo453825 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo45382v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45382v0ar = [];
const smo45362 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","fn/3/n"]}'))
smo45362.setAttribute('id', 'smo45362');
smo45382v0ar.push(smo45362);
const smo45364 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","en/3/n"]}'))
smo45364.setAttribute('id', 'smo45364');
smo45382v0ar.push(smo45364);
const smo45366 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","en/3/n"]}'))
smo45366.setAttribute('id', 'smo45366');
smo45382v0ar.push(smo45366);
smo45382v0.addTickables(smo45382v0ar)
fmtsmo453825.joinVoices([smo45382v0]);
// create beam groups and tuplets for format grp smo45599 before formatting
const dirsmo46832 = smo44953.getStemDirection();
smo44953.setStemDirection(dirsmo46832);
smo44957.setStemDirection(dirsmo46832);
const smo46832 = new VF.Beam([smo44953,smo44957]);
const dirsmo46835 = smo45364.getStemDirection();
smo45364.setStemDirection(dirsmo46835);
smo45366.setStemDirection(dirsmo46835);
const smo46835 = new VF.Beam([smo45364,smo45366]);
 
// formatting measures in staff group smo45599
fmtsmo449755.format([smo44975v0,smo45382v0], 129);
const stavesmo44975 = new VF.Stave(43, 519, 203);
stavesmo44975.setAttribute('id', 'stavesmo44975');
stavesmo44975.setBegBarType(1);
stavesmo44975.addClef('treble');
const keysmo44975 = new VF.KeySignature('F');
keysmo44975.addToStave(stavesmo44975);
stavesmo44975.setContext(context);
stavesmo44975.draw();
smo44975v0.draw(context, stavesmo44975);
smo46832.setContext(context);
smo46832.draw();
const stavesmo45382 = new VF.Stave(43, 705, 203);
stavesmo45382.setAttribute('id', 'stavesmo45382');
stavesmo45382.setBegBarType(1);
stavesmo45382.addClef('bass');
const keysmo45382 = new VF.KeySignature('F');
keysmo45382.addToStave(stavesmo45382);
stavesmo45382.setContext(context);
stavesmo45382.draw();
smo45382v0.draw(context, stavesmo45382);
smo46835.setContext(context);
smo46835.draw();
const leftsmo45599stavesmo449751 = new VF.StaveConnector(stavesmo44975, stavesmo45382).setType(3);
leftsmo45599stavesmo449751.setContext(context).draw();
const fmtsmo450026 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo45002v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45002v0ar = [];
const smo44976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","fn/4/n"]}'))
smo44976.setAttribute('id', 'smo44976');
const smo44977 = new VF.Annotation('weak');
smo44977.setAttribute('id', 'smo44977');
smo44977.setFont('Merriweather', 11, 'normal');
smo44977.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44976.addModifier(smo44977);
smo44977.addClass('lyric lyric-0');
const smo44978 = new VF.Annotation('al');
smo44978.setAttribute('id', 'smo44978');
smo44978.setFont('Merriweather', 11, 'normal');
smo44978.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44976.addModifier(smo44978);
smo44978.addClass('lyric lyric-1 lyric-hyphen');
const smo44979 = new VF.ChordSymbol();
smo44979.setAttribute('id', 'smo44979');
smo44979.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo44979.setFont('Roboto Slab', 14).setReportWidth(false);
smo44976.addModifier(smo44979, 0);
smo45002v0ar.push(smo44976);
const smo44980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","an/4/n"]}'))
smo44980.setAttribute('id', 'smo44980');
const smo449800acc = new VF.Accidental('n');
smo44980.addModifier(smo449800acc, 0);
const smo44981 = new VF.Annotation('I');
smo44981.setAttribute('id', 'smo44981');
smo44981.setFont('Merriweather', 11, 'normal');
smo44981.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44980.addModifier(smo44981);
smo44981.addClass('lyric lyric-0');
const smo44982 = new VF.Annotation('most');
smo44982.setAttribute('id', 'smo44982');
smo44982.setFont('Merriweather', 11, 'normal');
smo44982.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44980.addModifier(smo44982);
smo44982.addClass('lyric lyric-1');
const smo44983 = new VF.ChordSymbol();
smo44983.setAttribute('id', 'smo44983');
smo44983.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo44983.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo44983.setFont('Roboto Slab', 14).setReportWidth(false);
smo44980.addModifier(smo44983, 0);
smo45002v0ar.push(smo44980);
const smo44984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","an/4/n"]}'))
smo44984.setAttribute('id', 'smo44984');
const smo44985 = new VF.Annotation('am');
smo44985.setAttribute('id', 'smo44985');
smo44985.setFont('Merriweather', 11, 'normal');
smo44985.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo44984.addModifier(smo44985);
smo44985.addClass('lyric lyric-0');
smo45002v0ar.push(smo44984);
smo45002v0.addTickables(smo45002v0ar)
fmtsmo450026.joinVoices([smo45002v0]);
const fmtsmo454016 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo45401v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45401v0ar = [];
const smo45383 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo45383.setAttribute('id', 'smo45383');
smo45401v0ar.push(smo45383);
const smo45384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","fn/3/n"]}'))
smo45384.setAttribute('id', 'smo45384');
smo45401v0ar.push(smo45384);
const smo45385 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","fn/3/n"]}'))
smo45385.setAttribute('id', 'smo45385');
smo45401v0ar.push(smo45385);
smo45401v0.addTickables(smo45401v0ar)
fmtsmo454016.joinVoices([smo45401v0]);
// create beam groups and tuplets for format grp smo45599 before formatting
const dirsmo46838 = smo44980.getStemDirection();
smo44980.setStemDirection(dirsmo46838);
smo44984.setStemDirection(dirsmo46838);
const smo46838 = new VF.Beam([smo44980,smo44984]);
const dirsmo46841 = smo45384.getStemDirection();
smo45384.setStemDirection(dirsmo46841);
smo45385.setStemDirection(dirsmo46841);
const smo46841 = new VF.Beam([smo45384,smo45385]);
 
// formatting measures in staff group smo45599
fmtsmo450026.format([smo45002v0,smo45401v0], 161);
const stavesmo45002 = new VF.Stave(246, 519, 175);
stavesmo45002.setAttribute('id', 'stavesmo45002');
stavesmo45002.setBegBarType(VF.Barline.type.NONE);
stavesmo45002.setContext(context);
stavesmo45002.draw();
smo45002v0.draw(context, stavesmo45002);
smo46838.setContext(context);
smo46838.draw();
const stavesmo45401 = new VF.Stave(246, 705, 175);
stavesmo45401.setAttribute('id', 'stavesmo45401');
stavesmo45401.setBegBarType(VF.Barline.type.NONE);
stavesmo45401.setContext(context);
stavesmo45401.draw();
smo45401v0.draw(context, stavesmo45401);
smo46841.setContext(context);
smo46841.draw();
const fmtsmo450267 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo45026v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45026v0ar = [];
const smo45003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","gn/4/n"]}'))
smo45003.setAttribute('id', 'smo45003');
const smo45004 = new VF.Annotation('worn');
smo45004.setAttribute('id', 'smo45004');
smo45004.setFont('Merriweather', 11, 'normal');
smo45004.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45003.addModifier(smo45004);
smo45004.addClass('lyric lyric-0');
const smo45005 = new VF.Annotation('gone');
smo45005.setAttribute('id', 'smo45005');
smo45005.setFont('Merriweather', 11, 'normal');
smo45005.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45003.addModifier(smo45005);
smo45005.addClass('lyric lyric-1');
const smo45006 = new VF.ChordSymbol();
smo45006.setAttribute('id', 'smo45006');
smo45006.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo45006.setFont('Roboto Slab', 14).setReportWidth(false);
smo45003.addModifier(smo45006, 0);
smo45026v0ar.push(smo45003);
const smo45007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo45007.setAttribute('id', 'smo45007');
const smo450070acc = new VF.Accidental('n');
smo45007.addModifier(smo450070acc, 0);
const smo45008 = new VF.Annotation('-');
smo45008.setAttribute('id', 'smo45008');
smo45008.setFont('Merriweather', 11, 'normal');
smo45008.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45007.addModifier(smo45008);
smo45008.addClass('lyric lyric-0 lyric-hyphen');
const smo45009 = new VF.Annotation('-');
smo45009.setAttribute('id', 'smo45009');
smo45009.setFont('Merriweather', 11, 'normal');
smo45009.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45007.addModifier(smo45009);
smo45009.addClass('lyric lyric-1 lyric-hyphen');
const smo45010 = new VF.ChordSymbol();
smo45010.setAttribute('id', 'smo45010');
smo45010.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo45010.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo45010.setFont('Roboto Slab', 14).setReportWidth(false);
smo45007.addModifier(smo45010, 0);
smo45026v0ar.push(smo45007);
smo45026v0.addTickables(smo45026v0ar)
fmtsmo450267.joinVoices([smo45026v0]);
const fmtsmo454197 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo45419v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45419v0ar = [];
const smo45402 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","en/3/n"]}'))
smo45402.setAttribute('id', 'smo45402');
smo45419v0ar.push(smo45402);
const smo45403 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","fn/3/n"]}'))
smo45403.setAttribute('id', 'smo45403');
smo45419v0ar.push(smo45403);
smo45419v0.addTickables(smo45419v0ar)
fmtsmo454197.joinVoices([smo45419v0]);
// create beam groups and tuplets for format grp smo45599 before formatting
 
// formatting measures in staff group smo45599
fmtsmo450267.format([smo45026v0,smo45419v0], 79);
const stavesmo45026 = new VF.Stave(421, 519, 93);
stavesmo45026.setAttribute('id', 'stavesmo45026');
stavesmo45026.setBegBarType(VF.Barline.type.NONE);
stavesmo45026.setContext(context);
stavesmo45026.draw();
smo45026v0.draw(context, stavesmo45026);
const stavesmo45419 = new VF.Stave(421, 705, 93);
stavesmo45419.setAttribute('id', 'stavesmo45419');
stavesmo45419.setBegBarType(VF.Barline.type.NONE);
stavesmo45419.setContext(context);
stavesmo45419.draw();
smo45419v0.draw(context, stavesmo45419);
const fmtsmo450538 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo45053v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45053v0ar = [];
const smo45027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","gn/4/n"]}'))
smo45027.setAttribute('id', 'smo45027');
const smo45028 = new VF.Annotation('-');
smo45028.setAttribute('id', 'smo45028');
smo45028.setFont('Merriweather', 11, 'normal');
smo45028.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45027.addModifier(smo45028);
smo45028.addClass('lyric lyric-0 lyric-hyphen');
const smo45029 = new VF.Annotation('-');
smo45029.setAttribute('id', 'smo45029');
smo45029.setFont('Merriweather', 11, 'normal');
smo45029.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45027.addModifier(smo45029);
smo45029.addClass('lyric lyric-1 lyric-hyphen');
const smo45030 = new VF.ChordSymbol();
smo45030.setAttribute('id', 'smo45030');
smo45030.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo45030.setFont('Roboto Slab', 14).setReportWidth(false);
smo45027.addModifier(smo45030, 0);
smo45053v0ar.push(smo45027);
const smo45031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","an/4/n"]}'))
smo45031.setAttribute('id', 'smo45031');
const smo45032 = new VF.Annotation('Through');
smo45032.setAttribute('id', 'smo45032');
smo45032.setFont('Merriweather', 11, 'normal');
smo45032.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45031.addModifier(smo45032);
smo45032.addClass('lyric lyric-0');
const smo45033 = new VF.Annotation('at');
smo45033.setAttribute('id', 'smo45033');
smo45033.setFont('Merriweather', 11, 'normal');
smo45033.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45031.addModifier(smo45033);
smo45033.addClass('lyric lyric-1');
const smo45034 = new VF.ChordSymbol();
smo45034.setAttribute('id', 'smo45034');
smo45034.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo45034.setFont('Roboto Slab', 14).setReportWidth(false);
smo45031.addModifier(smo45034, 0);
smo45053v0ar.push(smo45031);
const smo45035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n"]}'))
smo45035.setAttribute('id', 'smo45035');
const smo45036 = new VF.Annotation('the');
smo45036.setAttribute('id', 'smo45036');
smo45036.setFont('Merriweather', 11, 'normal');
smo45036.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45035.addModifier(smo45036);
smo45036.addClass('lyric lyric-0');
const smo45037 = new VF.Annotation('the');
smo45037.setAttribute('id', 'smo45037');
smo45037.setFont('Merriweather', 11, 'normal');
smo45037.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45035.addModifier(smo45037);
smo45037.addClass('lyric lyric-1');
smo45053v0ar.push(smo45035);
smo45053v0.addTickables(smo45053v0ar)
fmtsmo450538.joinVoices([smo45053v0]);
const fmtsmo454388 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo45438v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45438v0ar = [];
const smo45420 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n"]}'))
smo45420.setAttribute('id', 'smo45420');
smo45438v0ar.push(smo45420);
const smo45421 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo45421.setAttribute('id', 'smo45421');
smo45438v0ar.push(smo45421);
const smo45422 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo45422.setAttribute('id', 'smo45422');
smo45438v0ar.push(smo45422);
smo45438v0.addTickables(smo45438v0ar)
fmtsmo454388.joinVoices([smo45438v0]);
// create beam groups and tuplets for format grp smo45599 before formatting
const dirsmo46848 = smo45031.getStemDirection();
smo45031.setStemDirection(dirsmo46848);
smo45035.setStemDirection(dirsmo46848);
const smo46848 = new VF.Beam([smo45031,smo45035]);
const dirsmo46851 = smo45421.getStemDirection();
smo45421.setStemDirection(dirsmo46851);
smo45422.setStemDirection(dirsmo46851);
const smo46851 = new VF.Beam([smo45421,smo45422]);
 
// formatting measures in staff group smo45599
fmtsmo450538.format([smo45053v0,smo45438v0], 153);
const stavesmo45053 = new VF.Stave(514, 519, 167);
stavesmo45053.setAttribute('id', 'stavesmo45053');
stavesmo45053.setBegBarType(VF.Barline.type.NONE);
stavesmo45053.setContext(context);
stavesmo45053.draw();
smo45053v0.draw(context, stavesmo45053);
smo46848.setContext(context);
smo46848.draw();
const stavesmo45438 = new VF.Stave(514, 705, 167);
stavesmo45438.setAttribute('id', 'stavesmo45438');
stavesmo45438.setBegBarType(VF.Barline.type.NONE);
stavesmo45438.setContext(context);
stavesmo45438.draw();
smo45438v0.draw(context, stavesmo45438);
smo46851.setContext(context);
smo46851.draw();
const fmtsmo450809 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo45080v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45080v0ar = [];
const smo45054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","cn/5/n"]}'))
smo45054.setAttribute('id', 'smo45054');
const smo45055 = new VF.Annotation('storm,');
smo45055.setAttribute('id', 'smo45055');
smo45055.setFont('Merriweather', 11, 'normal');
smo45055.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45054.addModifier(smo45055);
smo45055.addClass('lyric lyric-0');
const smo45056 = new VF.Annotation('riv');
smo45056.setAttribute('id', 'smo45056');
smo45056.setFont('Merriweather', 11, 'normal');
smo45056.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45054.addModifier(smo45056);
smo45056.addClass('lyric lyric-1 lyric-hyphen');
const smo45057 = new VF.ChordSymbol();
smo45057.setAttribute('id', 'smo45057');
smo45057.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo45057.setFont('Roboto Slab', 14).setReportWidth(false);
smo45054.addModifier(smo45057, 0);
smo45080v0ar.push(smo45054);
const smo45058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo45058.setAttribute('id', 'smo45058');
const smo45059 = new VF.Annotation('through');
smo45059.setAttribute('id', 'smo45059');
smo45059.setFont('Merriweather', 11, 'normal');
smo45059.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45058.addModifier(smo45059);
smo45059.addClass('lyric lyric-0');
const smo45060 = new VF.Annotation('er');
smo45060.setAttribute('id', 'smo45060');
smo45060.setFont('Merriweather', 11, 'normal');
smo45060.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45058.addModifier(smo45060);
smo45060.addClass('lyric lyric-1');
const smo45061 = new VF.ChordSymbol();
smo45061.setAttribute('id', 'smo45061');
smo45061.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo45061.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo45061.setFont('Roboto Slab', 14).setReportWidth(false);
smo45058.addModifier(smo45061, 0);
smo45080v0ar.push(smo45058);
const smo45062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo45062.setAttribute('id', 'smo45062');
const smo45063 = new VF.Annotation('the');
smo45063.setAttribute('id', 'smo45063');
smo45063.setFont('Merriweather', 11, 'normal');
smo45063.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45062.addModifier(smo45063);
smo45063.addClass('lyric lyric-0');
const smo45064 = new VF.Annotation('I');
smo45064.setAttribute('id', 'smo45064');
smo45064.setFont('Merriweather', 11, 'normal');
smo45064.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45062.addModifier(smo45064);
smo45064.addClass('lyric lyric-1');
smo45080v0ar.push(smo45062);
smo45080v0.addTickables(smo45080v0ar)
fmtsmo450809.joinVoices([smo45080v0]);
const fmtsmo454579 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo45457v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45457v0ar = [];
const smo45439 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo45439.setAttribute('id', 'smo45439');
smo45457v0ar.push(smo45439);
const smo45440 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n"]}'))
smo45440.setAttribute('id', 'smo45440');
smo45457v0ar.push(smo45440);
const smo45441 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n"]}'))
smo45441.setAttribute('id', 'smo45441');
smo45457v0ar.push(smo45441);
smo45457v0.addTickables(smo45457v0ar)
fmtsmo454579.joinVoices([smo45457v0]);
// create beam groups and tuplets for format grp smo45599 before formatting
const dirsmo46854 = smo45058.getStemDirection();
smo45058.setStemDirection(dirsmo46854);
smo45062.setStemDirection(dirsmo46854);
const smo46854 = new VF.Beam([smo45058,smo45062]);
const dirsmo46857 = smo45440.getStemDirection();
smo45440.setStemDirection(dirsmo46857);
smo45441.setStemDirection(dirsmo46857);
const smo46857 = new VF.Beam([smo45440,smo45441]);
 
// formatting measures in staff group smo45599
fmtsmo450809.format([smo45080v0,smo45457v0], 196);
const stavesmo45080 = new VF.Stave(681, 519, 210);
stavesmo45080.setAttribute('id', 'stavesmo45080');
stavesmo45080.setBegBarType(VF.Barline.type.NONE);
stavesmo45080.setContext(context);
stavesmo45080.draw();
smo45080v0.draw(context, stavesmo45080);
smo46854.setContext(context);
smo46854.draw();
const stavesmo45457 = new VF.Stave(681, 705, 210);
stavesmo45457.setAttribute('id', 'stavesmo45457');
stavesmo45457.setBegBarType(VF.Barline.type.NONE);
stavesmo45457.setContext(context);
stavesmo45457.draw();
smo45457v0.draw(context, stavesmo45457);
smo46857.setContext(context);
smo46857.draw();
const fmtsmo4510710 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo45107v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45107v0ar = [];
const smo45081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","an/4/n"]}'))
smo45081.setAttribute('id', 'smo45081');
const smo45082 = new VF.Annotation('night');
smo45082.setAttribute('id', 'smo45082');
smo45082.setFont('Merriweather', 11, 'normal');
smo45082.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45081.addModifier(smo45082);
smo45082.addClass('lyric lyric-0');
const smo45083 = new VF.Annotation('stand,');
smo45083.setAttribute('id', 'smo45083');
smo45083.setFont('Merriweather', 11, 'normal');
smo45083.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45081.addModifier(smo45083);
smo45083.addClass('lyric lyric-1');
const smo45084 = new VF.ChordSymbol();
smo45084.setAttribute('id', 'smo45084');
smo45084.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo45084.setFont('Roboto Slab', 14).setReportWidth(false);
smo45081.addModifier(smo45084, 0);
smo45107v0ar.push(smo45081);
const smo45085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","an/4/n"]}'))
smo45085.setAttribute('id', 'smo45085');
const smo450850acc = new VF.Accidental('b');
smo45085.addModifier(smo450850acc, 0);
const smo45086 = new VF.Annotation('lead');
smo45086.setAttribute('id', 'smo45086');
smo45086.setFont('Merriweather', 11, 'normal');
smo45086.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45085.addModifier(smo45086);
smo45086.addClass('lyric lyric-0');
const smo45087 = new VF.Annotation('guide');
smo45087.setAttribute('id', 'smo45087');
smo45087.setFont('Merriweather', 11, 'normal');
smo45087.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45085.addModifier(smo45087);
smo45087.addClass('lyric lyric-1');
const smo45088 = new VF.ChordSymbol();
smo45088.setAttribute('id', 'smo45088');
smo45088.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo45088.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo45088.setFont('Roboto Slab', 14).setReportWidth(false);
smo45085.addModifier(smo45088, 0);
smo45107v0ar.push(smo45085);
const smo45089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","an/4/n"]}'))
smo45089.setAttribute('id', 'smo45089');
const smo45090 = new VF.Annotation('me');
smo45090.setAttribute('id', 'smo45090');
smo45090.setFont('Merriweather', 11, 'normal');
smo45090.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45089.addModifier(smo45090);
smo45090.addClass('lyric lyric-0');
const smo45091 = new VF.Annotation('me');
smo45091.setAttribute('id', 'smo45091');
smo45091.setFont('Merriweather', 11, 'normal');
smo45091.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45089.addModifier(smo45091);
smo45091.addClass('lyric lyric-1');
smo45107v0ar.push(smo45089);
smo45107v0.addTickables(smo45107v0ar)
fmtsmo4510710.joinVoices([smo45107v0]);
const fmtsmo4547610 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo45476v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45476v0ar = [];
const smo45458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","cn/4/n"]}'))
smo45458.setAttribute('id', 'smo45458');
smo45476v0ar.push(smo45458);
const smo45459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","cn/4/n"]}'))
smo45459.setAttribute('id', 'smo45459');
smo45476v0ar.push(smo45459);
const smo45460 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","cn/4/n"]}'))
smo45460.setAttribute('id', 'smo45460');
smo45476v0ar.push(smo45460);
smo45476v0.addTickables(smo45476v0ar)
fmtsmo4547610.joinVoices([smo45476v0]);
// create beam groups and tuplets for format grp smo45599 before formatting
const dirsmo46860 = smo45085.getStemDirection();
smo45085.setStemDirection(dirsmo46860);
smo45089.setStemDirection(dirsmo46860);
const smo46860 = new VF.Beam([smo45085,smo45089]);
const dirsmo46863 = smo45459.getStemDirection();
smo45459.setStemDirection(dirsmo46863);
smo45460.setStemDirection(dirsmo46863);
const smo46863 = new VF.Beam([smo45459,smo45460]);
 
// formatting measures in staff group smo45599
fmtsmo4510710.format([smo45107v0,smo45476v0], 173);
const stavesmo45107 = new VF.Stave(891, 519, 187);
stavesmo45107.setAttribute('id', 'stavesmo45107');
stavesmo45107.setBegBarType(VF.Barline.type.NONE);
stavesmo45107.setContext(context);
stavesmo45107.draw();
smo45107v0.draw(context, stavesmo45107);
smo46860.setContext(context);
smo46860.draw();
const stavesmo45476 = new VF.Stave(891, 705, 187);
stavesmo45476.setAttribute('id', 'stavesmo45476');
stavesmo45476.setBegBarType(VF.Barline.type.NONE);
stavesmo45476.setContext(context);
stavesmo45476.draw();
smo45476v0.draw(context, stavesmo45476);
smo46863.setContext(context);
smo46863.draw();
const rightsmo45599stavesmo451071 = new VF.StaveConnector(stavesmo45107, stavesmo45476).setType(0);
rightsmo45599stavesmo451071.setContext(context).draw();
const fmtsmo4513411 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo45134v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45134v0ar = [];
const smo45108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","gn/4/n"]}'))
smo45108.setAttribute('id', 'smo45108');
const smo45109 = new VF.Annotation('on');
smo45109.setAttribute('id', 'smo45109');
smo45109.setFont('Merriweather', 11, 'normal');
smo45109.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45108.addModifier(smo45109);
smo45109.addClass('lyric lyric-0');
const smo45110 = new VF.Annotation('feet,');
smo45110.setAttribute('id', 'smo45110');
smo45110.setFont('Merriweather', 11, 'normal');
smo45110.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45108.addModifier(smo45110);
smo45110.addClass('lyric lyric-1');
const smo45111 = new VF.ChordSymbol();
smo45111.setAttribute('id', 'smo45111');
smo45111.addGlyphOrText('Gm', JSON.parse('{"text":"Gm","symbolModifier":1,"symbolType":2}'));
smo45111.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo45111.setFont('Roboto Slab', 14).setReportWidth(false);
smo45108.addModifier(smo45111, 0);
smo45134v0ar.push(smo45108);
const smo45112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo45112.setAttribute('id', 'smo45112');
const smo45113 = new VF.Annotation('to');
smo45113.setAttribute('id', 'smo45113');
smo45113.setFont('Merriweather', 11, 'normal');
smo45113.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45112.addModifier(smo45113);
smo45113.addClass('lyric lyric-0');
const smo45114 = new VF.Annotation('hold');
smo45114.setAttribute('id', 'smo45114');
smo45114.setFont('Merriweather', 11, 'normal');
smo45114.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45112.addModifier(smo45114);
smo45114.addClass('lyric lyric-1');
const smo45115 = new VF.ChordSymbol();
smo45115.setAttribute('id', 'smo45115');
smo45115.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1,"symbolType":2}'));
smo45115.addGlyph('b', JSON.parse('{"glyph":"b","symbolModifier":1,"symbolType":1}'));
smo45115.setFont('Roboto Slab', 14).setReportWidth(false);
smo45112.addModifier(smo45115, 0);
smo45134v0ar.push(smo45112);
const smo45116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo45116.setAttribute('id', 'smo45116');
const smo45117 = new VF.Annotation('the');
smo45117.setAttribute('id', 'smo45117');
smo45117.setFont('Merriweather', 11, 'normal');
smo45117.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45116.addModifier(smo45117);
smo45117.addClass('lyric lyric-0');
const smo45118 = new VF.Annotation('my');
smo45118.setAttribute('id', 'smo45118');
smo45118.setFont('Merriweather', 11, 'normal');
smo45118.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45116.addModifier(smo45118);
smo45118.addClass('lyric lyric-1');
smo45134v0ar.push(smo45116);
smo45134v0.addTickables(smo45134v0ar)
fmtsmo4513411.joinVoices([smo45134v0]);
const fmtsmo4549511 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo45495v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45495v0ar = [];
const smo45477 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo45477.setAttribute('id', 'smo45477');
smo45495v0ar.push(smo45477);
const smo45478 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo45478.setAttribute('id', 'smo45478');
smo45495v0ar.push(smo45478);
const smo45479 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo45479.setAttribute('id', 'smo45479');
smo45495v0ar.push(smo45479);
smo45495v0.addTickables(smo45495v0ar)
fmtsmo4549511.joinVoices([smo45495v0]);
// create beam groups and tuplets for format grp smo45599 before formatting
const dirsmo46872 = smo45112.getStemDirection();
smo45112.setStemDirection(dirsmo46872);
smo45116.setStemDirection(dirsmo46872);
const smo46872 = new VF.Beam([smo45112,smo45116]);
const dirsmo46875 = smo45478.getStemDirection();
smo45478.setStemDirection(dirsmo46875);
smo45479.setStemDirection(dirsmo46875);
const smo46875 = new VF.Beam([smo45478,smo45479]);
 
// formatting measures in staff group smo45599
fmtsmo4513411.format([smo45134v0,smo45495v0], 161);
const stavesmo45134 = new VF.Stave(43, 854, 236);
stavesmo45134.setAttribute('id', 'stavesmo45134');
stavesmo45134.setBegBarType(1);
stavesmo45134.addClef('treble');
const keysmo45134 = new VF.KeySignature('F');
keysmo45134.addToStave(stavesmo45134);
stavesmo45134.setContext(context);
stavesmo45134.draw();
smo45134v0.draw(context, stavesmo45134);
smo46872.setContext(context);
smo46872.draw();
const stavesmo45495 = new VF.Stave(43, 1040, 236);
stavesmo45495.setAttribute('id', 'stavesmo45495');
stavesmo45495.setBegBarType(1);
stavesmo45495.addClef('bass');
const keysmo45495 = new VF.KeySignature('F');
keysmo45495.addToStave(stavesmo45495);
stavesmo45495.setContext(context);
stavesmo45495.draw();
smo45495v0.draw(context, stavesmo45495);
smo46875.setContext(context);
smo46875.draw();
const leftsmo45599stavesmo451341 = new VF.StaveConnector(stavesmo45134, stavesmo45495).setType(3);
leftsmo45599stavesmo451341.setContext(context).draw();
const fmtsmo4516212 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo45162v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45162v0ar = [];
const smo45135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo45135.setAttribute('id', 'smo45135');
const smo45136 = new VF.Annotation('li');
smo45136.setAttribute('id', 'smo45136');
smo45136.setFont('Merriweather', 11, 'normal');
smo45136.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45135.addModifier(smo45136);
smo45136.addClass('lyric lyric-0 lyric-hyphen');
const smo45137 = new VF.Annotation('ha');
smo45137.setAttribute('id', 'smo45137');
smo45137.setFont('Merriweather', 11, 'normal');
smo45137.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45135.addModifier(smo45137);
smo45137.addClass('lyric lyric-1 lyric-hyphen');
smo45162v0ar.push(smo45135);
const smo45138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo45138.setAttribute('id', 'smo45138');
smo45138.addModifier(new VF.Dot(), 0);
smo45138.addModifier(new VF.Dot(), 1);
const smo45139 = new VF.Annotation('ght');
smo45139.setAttribute('id', 'smo45139');
smo45139.setFont('Merriweather', 11, 'normal');
smo45139.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45138.addModifier(smo45139);
smo45139.addClass('lyric lyric-0');
const smo45140 = new VF.Annotation('nd');
smo45140.setAttribute('id', 'smo45140');
smo45140.setFont('Merriweather', 11, 'normal');
smo45140.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45138.addModifier(smo45140);
smo45140.addClass('lyric lyric-1');
smo45162v0ar.push(smo45138);
const smo45141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo45141.setAttribute('id', 'smo45141');
const smo45142 = new VF.Annotation('Take');
smo45142.setAttribute('id', 'smo45142');
smo45142.setFont('Merriweather', 11, 'normal');
smo45142.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45141.addModifier(smo45142);
smo45142.addClass('lyric lyric-0');
const smo45144 = new VF.ChordSymbol();
smo45144.setAttribute('id', 'smo45144');
smo45144.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1,"symbolType":2}'));
smo45144.addGlyph('diminished', JSON.parse('{"glyph":"diminished","symbolModifier":3,"symbolType":1}'));
smo45144.setFont('Roboto Slab', 14).setReportWidth(false);
smo45141.addModifier(smo45144, 0);
smo45162v0ar.push(smo45141);
const smo45145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo45145.setAttribute('id', 'smo45145');
const smo45146 = new VF.Annotation('my');
smo45146.setAttribute('id', 'smo45146');
smo45146.setFont('Merriweather', 11, 'normal');
smo45146.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45145.addModifier(smo45146);
smo45146.addClass('lyric lyric-0');
smo45162v0ar.push(smo45145);
smo45162v0.addTickables(smo45162v0ar)
fmtsmo4516212.joinVoices([smo45162v0]);
const fmtsmo4551512 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo45515v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45515v0ar = [];
const smo45496 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","fn/3/n"]}'))
smo45496.setAttribute('id', 'smo45496');
smo45515v0ar.push(smo45496);
const smo45497 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo45497.setAttribute('id', 'smo45497');
smo45497.addModifier(new VF.Dot(), 0);
smo45497.addModifier(new VF.Dot(), 1);
smo45515v0ar.push(smo45497);
const smo45498 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","ab/3/n"]}'))
smo45498.setAttribute('id', 'smo45498');
const smo454980acc = new VF.Accidental('n');
smo45498.addModifier(smo454980acc, 0);
const smo454981acc = new VF.Accidental('b');
smo45498.addModifier(smo454981acc, 1);
smo45515v0ar.push(smo45498);
const smo45499 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","gn/3/n"]}'))
smo45499.setAttribute('id', 'smo45499');
smo45515v0ar.push(smo45499);
smo45515v0.addTickables(smo45515v0ar)
fmtsmo4551512.joinVoices([smo45515v0]);
// create beam groups and tuplets for format grp smo45599 before formatting
const dirsmo46878 = smo45141.getStemDirection();
smo45141.setStemDirection(dirsmo46878);
smo45145.setStemDirection(dirsmo46878);
const smo46878 = new VF.Beam([smo45141,smo45145]);
const dirsmo46881 = smo45498.getStemDirection();
smo45498.setStemDirection(dirsmo46881);
smo45499.setStemDirection(dirsmo46881);
const smo46881 = new VF.Beam([smo45498,smo45499]);
 
// formatting measures in staff group smo45599
fmtsmo4516212.format([smo45162v0,smo45515v0], 191);
const stavesmo45162 = new VF.Stave(279, 854, 205);
stavesmo45162.setAttribute('id', 'stavesmo45162');
stavesmo45162.setBegBarType(VF.Barline.type.NONE);
stavesmo45162.setContext(context);
stavesmo45162.draw();
smo45162v0.draw(context, stavesmo45162);
smo46878.setContext(context);
smo46878.draw();
const stavesmo45515 = new VF.Stave(279, 1040, 205);
stavesmo45515.setAttribute('id', 'stavesmo45515');
stavesmo45515.setBegBarType(VF.Barline.type.NONE);
stavesmo45515.setContext(context);
stavesmo45515.draw();
smo45515v0.draw(context, stavesmo45515);
smo46881.setContext(context);
smo46881.draw();
const fmtsmo4518913 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo45189v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45189v0ar = [];
const smo45163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo45163.setAttribute('id', 'smo45163');
const smo45164 = new VF.Annotation('ha');
smo45164.setAttribute('id', 'smo45164');
smo45164.setFont('Merriweather', 11, 'normal');
smo45164.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45163.addModifier(smo45164);
smo45164.addClass('lyric lyric-0 lyric-hyphen');
const smo45165 = new VF.ChordSymbol();
smo45165.setAttribute('id', 'smo45165');
smo45165.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo45165.setFont('Roboto Slab', 14).setReportWidth(false);
smo45163.addModifier(smo45165, 0);
smo45189v0ar.push(smo45163);
const smo45166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo45166.setAttribute('id', 'smo45166');
smo45166.addModifier(new VF.Dot(), 0);
const smo45167 = new VF.Annotation('nd');
smo45167.setAttribute('id', 'smo45167');
smo45167.setFont('Merriweather', 11, 'normal');
smo45167.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45166.addModifier(smo45167);
smo45167.addClass('lyric lyric-0');
smo45189v0ar.push(smo45166);
const smo45168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo45168.setAttribute('id', 'smo45168');
const smo45169 = new VF.Annotation('pre');
smo45169.setAttribute('id', 'smo45169');
smo45169.setFont('Merriweather', 11, 'normal');
smo45169.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45168.addModifier(smo45169);
smo45169.addClass('lyric lyric-0 lyric-hyphen');
const smo45170 = new VF.ChordSymbol();
smo45170.setAttribute('id', 'smo45170');
smo45170.addGlyphOrText('Dm', JSON.parse('{"text":"Dm","symbolModifier":1,"symbolType":2}'));
smo45170.setFont('Roboto Slab', 14).setReportWidth(false);
smo45168.addModifier(smo45170, 0);
smo45189v0ar.push(smo45168);
const smo45171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","gn/4/n"]}'))
smo45171.setAttribute('id', 'smo45171');
const smo45172 = new VF.Annotation('cious');
smo45172.setAttribute('id', 'smo45172');
smo45172.setFont('Merriweather', 11, 'normal');
smo45172.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45171.addModifier(smo45172);
smo45172.addClass('lyric lyric-0');
const smo45173 = new VF.ChordSymbol();
smo45173.setAttribute('id', 'smo45173');
smo45173.addGlyphOrText('A', JSON.parse('{"text":"A","symbolModifier":1,"symbolType":2}'));
smo45173.addGlyph('+', JSON.parse('{"glyph":"+","symbolModifier":3,"symbolType":1}'));
smo45173.addGlyphOrText('5', JSON.parse('{"text":"5","symbolModifier":3,"symbolType":2}'));
smo45173.setFont('Roboto Slab', 14).setReportWidth(false);
smo45171.addModifier(smo45173, 0);
smo45189v0ar.push(smo45171);
smo45189v0.addTickables(smo45189v0ar)
fmtsmo4518913.joinVoices([smo45189v0]);
const fmtsmo4553413 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo45534v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45534v0ar = [];
const smo45516 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","an/3/n"]}'))
smo45516.setAttribute('id', 'smo45516');
smo45534v0ar.push(smo45516);
const smo45517 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","an/3/n"]}'))
smo45517.setAttribute('id', 'smo45517');
smo45534v0ar.push(smo45517);
const smo45518 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["db/3/n","bn/3/n"]}'))
smo45518.setAttribute('id', 'smo45518');
const smo455180acc = new VF.Accidental('b');
smo45518.addModifier(smo455180acc, 0);
const smo455181acc = new VF.Accidental('n');
smo45518.addModifier(smo455181acc, 1);
smo45534v0ar.push(smo45518);
smo45534v0.addTickables(smo45534v0ar)
fmtsmo4553413.joinVoices([smo45534v0]);
// create beam groups and tuplets for format grp smo45599 before formatting
const dirsmo46884 = smo45168.getStemDirection();
smo45168.setStemDirection(dirsmo46884);
smo45171.setStemDirection(dirsmo46884);
const smo46884 = new VF.Beam([smo45168,smo45171]);
const dirsmo46887 = smo45517.getStemDirection();
smo45517.setStemDirection(dirsmo46887);
smo45518.setStemDirection(dirsmo46887);
const smo46887 = new VF.Beam([smo45517,smo45518]);
 
// formatting measures in staff group smo45599
fmtsmo4518913.format([smo45189v0,smo45534v0], 186);
const stavesmo45189 = new VF.Stave(484, 854, 200);
stavesmo45189.setAttribute('id', 'stavesmo45189');
stavesmo45189.setBegBarType(VF.Barline.type.NONE);
stavesmo45189.setContext(context);
stavesmo45189.draw();
smo45189v0.draw(context, stavesmo45189);
smo46884.setContext(context);
smo46884.draw();
const stavesmo45534 = new VF.Stave(484, 1040, 200);
stavesmo45534.setAttribute('id', 'stavesmo45534');
stavesmo45534.setBegBarType(VF.Barline.type.NONE);
stavesmo45534.setContext(context);
stavesmo45534.draw();
smo45534v0.draw(context, stavesmo45534);
smo46887.setContext(context);
smo46887.draw();
const fmtsmo4521314 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo45213v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45213v0ar = [];
const smo45190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","an/4/n"]}'))
smo45190.setAttribute('id', 'smo45190');
const smo45191 = new VF.Annotation('Lord,');
smo45191.setAttribute('id', 'smo45191');
smo45191.setFont('Merriweather', 11, 'normal');
smo45191.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45190.addModifier(smo45191);
smo45191.addClass('lyric lyric-0');
const smo45192 = new VF.ChordSymbol();
smo45192.setAttribute('id', 'smo45192');
smo45192.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo45192.setFont('Roboto Slab', 14).setReportWidth(false);
smo45190.addModifier(smo45192, 0);
smo45213v0ar.push(smo45190);
const smo45193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","gn/4/n"]}'))
smo45193.setAttribute('id', 'smo45193');
smo45193.addModifier(new VF.Dot(), 0);
smo45193.addModifier(new VF.Dot(), 1);
const smo45194 = new VF.Annotation('lead');
smo45194.setAttribute('id', 'smo45194');
smo45194.setFont('Merriweather', 11, 'normal');
smo45194.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45193.addModifier(smo45194);
smo45194.addClass('lyric lyric-0');
const smo45195 = new VF.ChordSymbol();
smo45195.setAttribute('id', 'smo45195');
smo45195.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo45195.addGlyph('(', JSON.parse('{"glyph":"(","symbolModifier":3,"symbolType":1}'));
smo45195.addGlyphOrText('sus4', JSON.parse('{"text":"sus4","symbolModifier":3,"symbolType":2}'));
smo45195.addGlyph(')', JSON.parse('{"glyph":")","symbolModifier":3,"symbolType":1}'));
smo45195.setFont('Roboto Slab', 14).setReportWidth(false);
smo45193.addModifier(smo45195, 0);
smo45213v0ar.push(smo45193);
const smo45196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo45196.setAttribute('id', 'smo45196');
const smo45197 = new VF.Annotation('me');
smo45197.setAttribute('id', 'smo45197');
smo45197.setFont('Merriweather', 11, 'normal');
smo45197.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45196.addModifier(smo45197);
smo45197.addClass('lyric lyric-0');
smo45213v0ar.push(smo45196);
smo45213v0.addTickables(smo45213v0ar)
fmtsmo4521314.joinVoices([smo45213v0]);
const fmtsmo4555314 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo45553v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45553v0ar = [];
const smo45535 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo45535.setAttribute('id', 'smo45535');
smo45553v0ar.push(smo45535);
const smo45536 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/3/n","bb/3/n"]}'))
smo45536.setAttribute('id', 'smo45536');
smo45536.addModifier(new VF.Dot(), 0);
smo45536.addModifier(new VF.Dot(), 1);
smo45553v0ar.push(smo45536);
const smo45537 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","bb/3/n"]}'))
smo45537.setAttribute('id', 'smo45537');
smo45553v0ar.push(smo45537);
smo45553v0.addTickables(smo45553v0ar)
fmtsmo4555314.joinVoices([smo45553v0]);
// create beam groups and tuplets for format grp smo45599 before formatting
const dirsmo46890 = smo45193.getStemDirection();
smo45193.setStemDirection(dirsmo46890);
smo45196.setStemDirection(dirsmo46890);
const smo46890 = new VF.Beam([smo45193,smo45196]);
const dirsmo46893 = smo45536.getStemDirection();
smo45536.setStemDirection(dirsmo46893);
smo45537.setStemDirection(dirsmo46893);
const smo46893 = new VF.Beam([smo45536,smo45537]);
 
// formatting measures in staff group smo45599
fmtsmo4521314.format([smo45213v0,smo45553v0], 164);
const stavesmo45213 = new VF.Stave(684, 854, 178);
stavesmo45213.setAttribute('id', 'stavesmo45213');
stavesmo45213.setBegBarType(VF.Barline.type.NONE);
stavesmo45213.setContext(context);
stavesmo45213.draw();
smo45213v0.draw(context, stavesmo45213);
smo46890.setContext(context);
smo46890.draw();
const stavesmo45553 = new VF.Stave(684, 1040, 178);
stavesmo45553.setAttribute('id', 'stavesmo45553');
stavesmo45553.setBegBarType(VF.Barline.type.NONE);
stavesmo45553.setContext(context);
stavesmo45553.draw();
smo45553v0.draw(context, stavesmo45553);
smo46893.setContext(context);
smo46893.draw();
const fmtsmo4523215 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo45232v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45232v0ar = [];
const smo45214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo45214.setAttribute('id', 'smo45214');
smo45214.addModifier(new VF.Dot(), 0);
smo45214.addModifier(new VF.Dot(), 1);
const smo45215 = new VF.Annotation('home');
smo45215.setAttribute('id', 'smo45215');
smo45215.setFont('Merriweather', 11, 'normal');
smo45215.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45214.addModifier(smo45215);
smo45215.addClass('lyric lyric-0 lyric-hyphen');
const smo45216 = new VF.ChordSymbol();
smo45216.setAttribute('id', 'smo45216');
smo45216.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo45216.setFont('Roboto Slab', 14).setReportWidth(false);
smo45214.addModifier(smo45216, 0);
smo45232v0ar.push(smo45214);
smo45232v0.addTickables(smo45232v0ar)
fmtsmo4523215.joinVoices([smo45232v0]);
const fmtsmo4557015 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo45570v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45570v0ar = [];
const smo45554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo45554.setAttribute('id', 'smo45554');
smo45554.addModifier(new VF.Dot(), 0);
smo45554.addModifier(new VF.Dot(), 1);
smo45570v0ar.push(smo45554);
smo45570v0.addTickables(smo45570v0ar)
fmtsmo4557015.joinVoices([smo45570v0]);
// create beam groups and tuplets for format grp smo45599 before formatting
 
// formatting measures in staff group smo45599
fmtsmo4523215.format([smo45232v0,smo45570v0], 50);
const stavesmo45232 = new VF.Stave(862, 854, 65);
stavesmo45232.setAttribute('id', 'stavesmo45232');
stavesmo45232.setBegBarType(VF.Barline.type.NONE);
stavesmo45232.setEndBarType(2);
stavesmo45232.setContext(context);
stavesmo45232.draw();
smo45232v0.draw(context, stavesmo45232);
const stavesmo45570 = new VF.Stave(862, 1040, 65);
stavesmo45570.setAttribute('id', 'stavesmo45570');
stavesmo45570.setBegBarType(VF.Barline.type.NONE);
stavesmo45570.setEndBarType(2);
stavesmo45570.setContext(context);
stavesmo45570.draw();
smo45570v0.draw(context, stavesmo45570);
const fmtsmo4525516 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo45255v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45255v0ar = [];
const smo45233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo45233.setAttribute('id', 'smo45233');
smo45255v0ar.push(smo45233);
const smo45235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo45235.setAttribute('id', 'smo45235');
const smo45236 = new VF.Annotation('When');
smo45236.setAttribute('id', 'smo45236');
smo45236.setFont('Merriweather', 11, 'normal');
smo45236.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45235.addModifier(smo45236);
smo45236.addClass('lyric lyric-0');
smo45255v0ar.push(smo45235);
const smo45237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo45237.setAttribute('id', 'smo45237');
const smo45238 = new VF.Annotation('the');
smo45238.setAttribute('id', 'smo45238');
smo45238.setFont('Merriweather', 11, 'normal');
smo45238.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo45237.addModifier(smo45238);
smo45238.addClass('lyric lyric-0');
smo45255v0ar.push(smo45237);
smo45255v0.addTickables(smo45255v0ar)
fmtsmo4525516.joinVoices([smo45255v0]);
const fmtsmo4559016 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo45590v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo45590v0ar = [];
const smo45571 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo45571.setAttribute('id', 'smo45571');
smo45590v0ar.push(smo45571);
const smo45572 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo45572.setAttribute('id', 'smo45572');
smo45590v0ar.push(smo45572);
const smo45573 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo45573.setAttribute('id', 'smo45573');
smo45590v0ar.push(smo45573);
smo45590v0.addTickables(smo45590v0ar)
fmtsmo4559016.joinVoices([smo45590v0]);
// create beam groups and tuplets for format grp smo45599 before formatting
const dirsmo46898 = smo45235.getStemDirection();
smo45235.setStemDirection(dirsmo46898);
smo45237.setStemDirection(dirsmo46898);
const smo46898 = new VF.Beam([smo45235,smo45237]);
const dirsmo46900 = smo45572.getStemDirection();
smo45572.setStemDirection(dirsmo46900);
smo45573.setStemDirection(dirsmo46900);
const smo46900 = new VF.Beam([smo45572,smo45573]);
 
// formatting measures in staff group smo45599
fmtsmo4525516.format([smo45255v0,smo45590v0], 133);
const stavesmo45255 = new VF.Stave(927, 854, 151);
stavesmo45255.setAttribute('id', 'stavesmo45255');
stavesmo45255.setBegBarType(VF.Barline.type.NONE);
stavesmo45255.setEndBarType(5);
stavesmo45255.setContext(context);
stavesmo45255.draw();
smo45255v0.draw(context, stavesmo45255);
smo46898.setContext(context);
smo46898.draw();
const stavesmo45590 = new VF.Stave(927, 1040, 151);
stavesmo45590.setAttribute('id', 'stavesmo45590');
stavesmo45590.setBegBarType(VF.Barline.type.NONE);
stavesmo45590.setEndBarType(5);
stavesmo45590.setContext(context);
stavesmo45590.draw();
smo45590v0.draw(context, stavesmo45590);
smo46900.setContext(context);
smo46900.draw();
// modifier from 0-15-0-0 to 0-16-0-0
const smo47032 = new VF.StaveTie({ first_note: smo45214, last_note: smo45233, 
          firstNote: smo45214, lastNote: smo45233, first_indices: [0,1], last_indices: [0,1]});
smo47032.setContext(context).draw();
// modifier from 1-15-0-0 to 1-16-0-0
const smo47033 = new VF.StaveTie({ first_note: smo45554, last_note: smo45571, 
          firstNote: smo45554, lastNote: smo45571, first_indices: [0,1], last_indices: [0,1]});
smo47033.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo44822').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo44840').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo44841').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo44846').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo44844').setAttributeNS('', 'transform', 'translate(0 33)');
context.svg.getElementById('vf-smo44848').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo44849').setAttributeNS('', 'transform', 'translate(0 31)');
context.svg.getElementById('vf-smo44867').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo44868').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo44872').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo44871').setAttributeNS('', 'transform', 'translate(0 37)');
context.svg.getElementById('vf-smo44874').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo44875').setAttributeNS('', 'transform', 'translate(0 38)');
context.svg.getElementById('vf-smo44894').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo44895').setAttributeNS('', 'transform', 'translate(0 36)');
context.svg.getElementById('vf-smo44898').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo44899').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo44902').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo44903').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo44921').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo44922').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo44924').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo44925').setAttributeNS('', 'transform', 'translate(0 43)');
context.svg.getElementById('vf-smo44927').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo44928').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo44931').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo44932').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo44951').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo44954').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo44958').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo44959').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo44978').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo44981').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo44982').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo44985').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo45004').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo45005').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo45008').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo45009').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo45028').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo45029').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo45032').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo45033').setAttributeNS('', 'transform', 'translate(0 39)');
context.svg.getElementById('vf-smo45036').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo45037').setAttributeNS('', 'transform', 'translate(0 41)');
context.svg.getElementById('vf-smo45055').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo45056').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo45059').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo45060').setAttributeNS('', 'transform', 'translate(0 39)');
context.svg.getElementById('vf-smo45063').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo45064').setAttributeNS('', 'transform', 'translate(0 43)');
context.svg.getElementById('vf-smo45082').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo45083').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo45086').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo45087').setAttributeNS('', 'transform', 'translate(0 37)');
context.svg.getElementById('vf-smo45090').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo45091').setAttributeNS('', 'transform', 'translate(0 43)');
context.svg.getElementById('vf-smo45109').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo45110').setAttributeNS('', 'transform', 'translate(0 38)');
context.svg.getElementById('vf-smo45113').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo45114').setAttributeNS('', 'transform', 'translate(0 41)');
context.svg.getElementById('vf-smo45117').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo45118').setAttributeNS('', 'transform', 'translate(0 38)');
context.svg.getElementById('vf-smo45136').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo45137').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo45139').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo45140').setAttributeNS('', 'transform', 'translate(0 36)');
context.svg.getElementById('vf-smo45142').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo45146').setAttributeNS('', 'transform', 'translate(0 23)');
context.svg.getElementById('vf-smo45164').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo45167').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo45169').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo45172').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo45191').setAttributeNS('', 'transform', 'translate(0 27)');
context.svg.getElementById('vf-smo45194').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo45197').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo45215').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo45238').setAttributeNS('', 'transform', 'translate(0 5)');
}
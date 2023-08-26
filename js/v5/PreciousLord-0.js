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
const fmtsmo350950 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo35095v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35095v0ar = [];
const smo35076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo35076.setAttribute('id', 'smo35076');
const smo35077 = new VF.Annotation('Pre');
smo35077.setAttribute('id', 'smo35077');
smo35077.setFont('Merriweather', 11, 'normal');
smo35077.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35076.addModifier(smo35077);
smo35077.addClass('lyric lyric-0 lyric-hyphen');
smo35095v0ar.push(smo35076);
const smo35078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bb/3/n"]}'))
smo35078.setAttribute('id', 'smo35078');
const smo35079 = new VF.Annotation('cious');
smo35079.setAttribute('id', 'smo35079');
smo35079.setFont('Merriweather', 11, 'normal');
smo35079.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35078.addModifier(smo35079);
smo35079.addClass('lyric lyric-0');
smo35095v0ar.push(smo35078);
smo35095v0.addTickables(smo35095v0ar)
fmtsmo350950.joinVoices([smo35095v0]);
const fmtsmo355370 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo35537v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35537v0ar = [];
const smo35520 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo35520.setAttribute('id', 'smo35520');
smo35537v0ar.push(smo35520);
const smo35521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo35521.setAttribute('id', 'smo35521');
smo35537v0ar.push(smo35521);
smo35537v0.addTickables(smo35537v0ar)
fmtsmo355370.joinVoices([smo35537v0]);
// create beam groups and tuplets for format grp smo35856 before formatting
const dirsmo37055 = smo35076.getStemDirection();
smo35076.setStemDirection(dirsmo37055);
smo35078.setStemDirection(dirsmo37055);
const smo37055 = new VF.Beam([smo35076,smo35078]);
const dirsmo37058 = smo35520.getStemDirection();
smo35520.setStemDirection(dirsmo37058);
smo35521.setStemDirection(dirsmo37058);
const smo37058 = new VF.Beam([smo35520,smo35521]);
 
// formatting measures in staff group smo35856
fmtsmo350950.format([smo35095v0,smo35537v0], 117);
const stavesmo35095 = new VF.Stave(43, 178, 215);
stavesmo35095.setAttribute('id', 'stavesmo35095');
stavesmo35095.setBegBarType(1);
stavesmo35095.addClef('treble');
stavesmo35095.addTimeSignature('3/4');
const keysmo35095 = new VF.KeySignature('F');
keysmo35095.addToStave(stavesmo35095);
stavesmo35095.setContext(context);
stavesmo35095.draw();
smo35095v0.draw(context, stavesmo35095);
smo37055.setContext(context);
smo37055.draw();
const stavesmo35537 = new VF.Stave(43, 333, 215);
stavesmo35537.setAttribute('id', 'stavesmo35537');
stavesmo35537.setBegBarType(1);
stavesmo35537.addClef('bass');
stavesmo35537.addTimeSignature('3/4');
const keysmo35537 = new VF.KeySignature('F');
keysmo35537.addToStave(stavesmo35537);
stavesmo35537.setContext(context);
stavesmo35537.draw();
smo35537v0.draw(context, stavesmo35537);
smo37058.setContext(context);
smo37058.draw();
const leftsmo35856stavesmo350951 = new VF.StaveConnector(stavesmo35095, stavesmo35537).setType(3);
leftsmo35856stavesmo350951.setContext(context).draw();
const fmtsmo351221 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo35122v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35122v0ar = [];
const smo35096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n"]}'))
smo35096.setAttribute('id', 'smo35096');
const smo35097 = new VF.Annotation('Lord,');
smo35097.setAttribute('id', 'smo35097');
smo35097.setFont('Merriweather', 11, 'normal');
smo35097.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35096.addModifier(smo35097);
smo35097.addClass('lyric lyric-0');
const smo35098 = new VF.Annotation('dark');
smo35098.setAttribute('id', 'smo35098');
smo35098.setFont('Merriweather', 11, 'normal');
smo35098.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35096.addModifier(smo35098);
smo35098.addClass('lyric lyric-1 lyric-hyphen');
const smo35099 = new VF.ChordSymbol();
smo35099.setAttribute('id', 'smo35099');
smo35099.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo35099.setFont('Roboto Slab', 14).setReportWidth(false);
smo35096.addModifier(smo35099, 0);
smo35122v0ar.push(smo35096);
const smo35100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo35100.setAttribute('id', 'smo35100');
const smo35103 = new VF.Annotation('take');
smo35103.setAttribute('id', 'smo35103');
smo35103.setFont('Merriweather', 11, 'normal');
smo35103.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35100.addModifier(smo35103);
smo35103.addClass('lyric lyric-0');
const smo35101 = new VF.Annotation('ness');
smo35101.setAttribute('id', 'smo35101');
smo35101.setFont('Merriweather', 11, 'normal');
smo35101.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35100.addModifier(smo35101);
smo35101.addClass('lyric lyric-1');
const smo35102 = new VF.ChordSymbol();
smo35102.setAttribute('id', 'smo35102');
smo35102.addGlyphOrText('Gm', JSON.parse('{"text":"Gm","symbolModifier":1}'));
smo35102.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo35102.setFont('Roboto Slab', 14).setReportWidth(false);
smo35100.addModifier(smo35102, 0);
smo35122v0ar.push(smo35100);
const smo35104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo35104.setAttribute('id', 'smo35104');
const smo35105 = new VF.Annotation('my');
smo35105.setAttribute('id', 'smo35105');
smo35105.setFont('Merriweather', 11, 'normal');
smo35105.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35104.addModifier(smo35105);
smo35105.addClass('lyric lyric-0');
const smo35106 = new VF.Annotation('a');
smo35106.setAttribute('id', 'smo35106');
smo35106.setFont('Merriweather', 11, 'normal');
smo35106.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35104.addModifier(smo35106);
smo35106.addClass('lyric lyric-1 lyric-hyphen');
smo35122v0ar.push(smo35104);
smo35122v0.addTickables(smo35122v0ar)
fmtsmo351221.joinVoices([smo35122v0]);
const fmtsmo355571 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo35557v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35557v0ar = [];
const smo35538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo35538.setAttribute('id', 'smo35538');
smo35557v0ar.push(smo35538);
const smo35539 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","fn/3/n"]}'))
smo35539.setAttribute('id', 'smo35539');
smo35557v0ar.push(smo35539);
const smo35540 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","en/3/n"]}'))
smo35540.setAttribute('id', 'smo35540');
smo35557v0ar.push(smo35540);
smo35557v0.addTickables(smo35557v0ar)
fmtsmo355571.joinVoices([smo35557v0]);
// create beam groups and tuplets for format grp smo35856 before formatting
const dirsmo37061 = smo35100.getStemDirection();
smo35100.setStemDirection(dirsmo37061);
smo35104.setStemDirection(dirsmo37061);
const smo37061 = new VF.Beam([smo35100,smo35104]);
const dirsmo37063 = smo35539.getStemDirection();
smo35539.setStemDirection(dirsmo37063);
smo35540.setStemDirection(dirsmo37063);
const smo37063 = new VF.Beam([smo35539,smo35540]);
 
// formatting measures in staff group smo35856
fmtsmo351221.format([smo35122v0,smo35557v0], 185);
const stavesmo35122 = new VF.Stave(258, 178, 208);
stavesmo35122.setAttribute('id', 'stavesmo35122');
stavesmo35122.setBegBarType(4);
stavesmo35122.setContext(context);
stavesmo35122.draw();
smo35122v0.draw(context, stavesmo35122);
smo37061.setContext(context);
smo37061.draw();
const stavesmo35557 = new VF.Stave(258, 333, 208);
stavesmo35557.setAttribute('id', 'stavesmo35557');
stavesmo35557.setBegBarType(4);
stavesmo35557.setContext(context);
stavesmo35557.draw();
smo35557v0.draw(context, stavesmo35557);
smo37063.setContext(context);
smo37063.draw();
const fmtsmo351492 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo35149v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35149v0ar = [];
const smo35123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo35123.setAttribute('id', 'smo35123');
const smo35124 = new VF.Annotation('hand,');
smo35124.setAttribute('id', 'smo35124');
smo35124.setFont('Merriweather', 11, 'normal');
smo35124.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35123.addModifier(smo35124);
smo35124.addClass('lyric lyric-0');
const smo35125 = new VF.Annotation('pears');
smo35125.setAttribute('id', 'smo35125');
smo35125.setFont('Merriweather', 11, 'normal');
smo35125.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35123.addModifier(smo35125);
smo35125.addClass('lyric lyric-1');
const smo35126 = new VF.ChordSymbol();
smo35126.setAttribute('id', 'smo35126');
smo35126.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo35126.setFont('Roboto Slab', 14).setReportWidth(false);
smo35123.addModifier(smo35126, 0);
smo35149v0ar.push(smo35123);
const smo35127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n","an/4/n"]}'))
smo35127.setAttribute('id', 'smo35127');
const smo35129 = new VF.Annotation('lead');
smo35129.setAttribute('id', 'smo35129');
smo35129.setFont('Merriweather', 11, 'normal');
smo35129.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35127.addModifier(smo35129);
smo35129.addClass('lyric lyric-0');
const smo35128 = new VF.Annotation('and');
smo35128.setAttribute('id', 'smo35128');
smo35128.setFont('Merriweather', 11, 'normal');
smo35128.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35127.addModifier(smo35128);
smo35128.addClass('lyric lyric-1');
smo35149v0ar.push(smo35127);
const smo35130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["c#/4/n","an/4/n"]}'))
smo35130.setAttribute('id', 'smo35130');
const smo351300acc = new VF.Accidental('#');
smo35130.addModifier(smo351300acc, 0);
const smo35131 = new VF.Annotation('me');
smo35131.setAttribute('id', 'smo35131');
smo35131.setFont('Merriweather', 11, 'normal');
smo35131.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35130.addModifier(smo35131);
smo35131.addClass('lyric lyric-0');
const smo35132 = new VF.Annotation('the');
smo35132.setAttribute('id', 'smo35132');
smo35132.setFont('Merriweather', 11, 'normal');
smo35132.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35130.addModifier(smo35132);
smo35132.addClass('lyric lyric-1');
const smo35133 = new VF.ChordSymbol();
smo35133.setAttribute('id', 'smo35133');
smo35133.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo35133.addGlyphOrText('5', JSON.parse('{"text":"5","symbolModifier":3}'));
smo35133.setFont('Roboto Slab', 14).setReportWidth(false);
smo35130.addModifier(smo35133, 0);
smo35149v0ar.push(smo35130);
smo35149v0.addTickables(smo35149v0ar)
fmtsmo351492.joinVoices([smo35149v0]);
const fmtsmo355772 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo35577v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35577v0ar = [];
const smo35558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n","fn/3/n"]}'))
smo35558.setAttribute('id', 'smo35558');
smo35577v0ar.push(smo35558);
const smo35560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo35560.setAttribute('id', 'smo35560');
smo35577v0ar.push(smo35560);
const smo35561 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo35561.setAttribute('id', 'smo35561');
smo35577v0ar.push(smo35561);
smo35577v0.addTickables(smo35577v0ar)
fmtsmo355772.joinVoices([smo35577v0]);
// create beam groups and tuplets for format grp smo35856 before formatting
const dirsmo37065 = smo35127.getStemDirection();
smo35127.setStemDirection(dirsmo37065);
smo35130.setStemDirection(dirsmo37065);
const smo37065 = new VF.Beam([smo35127,smo35130]);
const dirsmo37068 = smo35560.getStemDirection();
smo35560.setStemDirection(dirsmo37068);
smo35561.setStemDirection(dirsmo37068);
const smo37068 = new VF.Beam([smo35560,smo35561]);
 
// formatting measures in staff group smo35856
fmtsmo351492.format([smo35149v0,smo35577v0], 186);
const stavesmo35149 = new VF.Stave(466, 178, 200);
stavesmo35149.setAttribute('id', 'stavesmo35149');
stavesmo35149.setBegBarType(VF.Barline.type.NONE);
stavesmo35149.setContext(context);
stavesmo35149.draw();
smo35149v0.draw(context, stavesmo35149);
smo37065.setContext(context);
smo37065.draw();
const stavesmo35577 = new VF.Stave(466, 333, 200);
stavesmo35577.setAttribute('id', 'stavesmo35577');
stavesmo35577.setBegBarType(VF.Barline.type.NONE);
stavesmo35577.setContext(context);
stavesmo35577.draw();
smo35577v0.draw(context, stavesmo35577);
smo37068.setContext(context);
smo37068.draw();
const fmtsmo351763 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo35176v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35176v0ar = [];
const smo35150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","gn/4/n"]}'))
smo35150.setAttribute('id', 'smo35150');
const smo35151 = new VF.Annotation('on,');
smo35151.setAttribute('id', 'smo35151');
smo35151.setFont('Merriweather', 11, 'normal');
smo35151.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35150.addModifier(smo35151);
smo35151.addClass('lyric lyric-0');
const smo35152 = new VF.Annotation('night');
smo35152.setAttribute('id', 'smo35152');
smo35152.setFont('Merriweather', 11, 'normal');
smo35152.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35150.addModifier(smo35152);
smo35152.addClass('lyric lyric-1');
const smo35153 = new VF.ChordSymbol();
smo35153.setAttribute('id', 'smo35153');
smo35153.addGlyphOrText('Gm', JSON.parse('{"text":"Gm","symbolModifier":1}'));
smo35153.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo35153.setFont('Roboto Slab', 14).setReportWidth(false);
smo35150.addModifier(smo35153, 0);
smo35176v0ar.push(smo35150);
const smo35154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","fn/4/n"]}'))
smo35154.setAttribute('id', 'smo35154');
const smo35155 = new VF.Annotation('let');
smo35155.setAttribute('id', 'smo35155');
smo35155.setFont('Merriweather', 11, 'normal');
smo35155.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35154.addModifier(smo35155);
smo35155.addClass('lyric lyric-0');
const smo35156 = new VF.Annotation('dra');
smo35156.setAttribute('id', 'smo35156');
smo35156.setFont('Merriweather', 11, 'normal');
smo35156.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35154.addModifier(smo35156);
smo35156.addClass('lyric lyric-1 lyric-hyphen');
const smo35157 = new VF.ChordSymbol();
smo35157.setAttribute('id', 'smo35157');
smo35157.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1}'));
smo35157.setFont('Roboto Slab', 14).setReportWidth(false);
smo35154.addModifier(smo35157, 0);
smo35176v0ar.push(smo35154);
const smo35158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","fn/4/n"]}'))
smo35158.setAttribute('id', 'smo35158');
const smo35159 = new VF.Annotation('me');
smo35159.setAttribute('id', 'smo35159');
smo35159.setFont('Merriweather', 11, 'normal');
smo35159.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35158.addModifier(smo35159);
smo35159.addClass('lyric lyric-0');
const smo35160 = new VF.Annotation('ws');
smo35160.setAttribute('id', 'smo35160');
smo35160.setFont('Merriweather', 11, 'normal');
smo35160.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35158.addModifier(smo35160);
smo35160.addClass('lyric lyric-1');
smo35176v0ar.push(smo35158);
smo35176v0.addTickables(smo35176v0ar)
fmtsmo351763.joinVoices([smo35176v0]);
const fmtsmo355963 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo35596v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35596v0ar = [];
const smo35578 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","fn/3/n"]}'))
smo35578.setAttribute('id', 'smo35578');
smo35596v0ar.push(smo35578);
const smo35579 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","fn/3/n"]}'))
smo35579.setAttribute('id', 'smo35579');
smo35596v0ar.push(smo35579);
const smo35580 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","fn/3/n"]}'))
smo35580.setAttribute('id', 'smo35580');
smo35596v0ar.push(smo35580);
smo35596v0.addTickables(smo35596v0ar)
fmtsmo355963.joinVoices([smo35596v0]);
// create beam groups and tuplets for format grp smo35856 before formatting
const dirsmo37071 = smo35154.getStemDirection();
smo35154.setStemDirection(dirsmo37071);
smo35158.setStemDirection(dirsmo37071);
const smo37071 = new VF.Beam([smo35154,smo35158]);
const dirsmo37074 = smo35579.getStemDirection();
smo35579.setStemDirection(dirsmo37074);
smo35580.setStemDirection(dirsmo37074);
const smo37074 = new VF.Beam([smo35579,smo35580]);
 
// formatting measures in staff group smo35856
fmtsmo351763.format([smo35176v0,smo35596v0], 171);
const stavesmo35176 = new VF.Stave(666, 178, 185);
stavesmo35176.setAttribute('id', 'stavesmo35176');
stavesmo35176.setBegBarType(VF.Barline.type.NONE);
stavesmo35176.setContext(context);
stavesmo35176.draw();
smo35176v0.draw(context, stavesmo35176);
smo37071.setContext(context);
smo37071.draw();
const stavesmo35596 = new VF.Stave(666, 333, 185);
stavesmo35596.setAttribute('id', 'stavesmo35596');
stavesmo35596.setBegBarType(VF.Barline.type.NONE);
stavesmo35596.setContext(context);
stavesmo35596.draw();
smo35596v0.draw(context, stavesmo35596);
smo37074.setContext(context);
smo37074.draw();
const fmtsmo352054 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo35205v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35205v0ar = [];
const smo35177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo35177.setAttribute('id', 'smo35177');
const smo35178 = new VF.Annotation('sta');
smo35178.setAttribute('id', 'smo35178');
smo35178.setFont('Merriweather', 11, 'normal');
smo35178.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35177.addModifier(smo35178);
smo35178.addClass('lyric lyric-0 lyric-hyphen');
const smo35179 = new VF.Annotation('ne');
smo35179.setAttribute('id', 'smo35179');
smo35179.setFont('Merriweather', 11, 'normal');
smo35179.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35177.addModifier(smo35179);
smo35179.addClass('lyric lyric-1 lyric-hyphen');
smo35205v0ar.push(smo35177);
const smo35180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo35180.setAttribute('id', 'smo35180');
smo35180.addModifier(new VF.Dot(), 0);
smo35180.addModifier(new VF.Dot(), 1);
const smo35181 = new VF.Annotation('nd');
smo35181.setAttribute('id', 'smo35181');
smo35181.setFont('Merriweather', 11, 'normal');
smo35181.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35180.addModifier(smo35181);
smo35181.addClass('lyric lyric-0');
const smo35182 = new VF.Annotation('ar');
smo35182.setAttribute('id', 'smo35182');
smo35182.setFont('Merriweather', 11, 'normal');
smo35182.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35180.addModifier(smo35182);
smo35182.addClass('lyric lyric-1');
smo35205v0ar.push(smo35180);
const smo35183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/3/n","dn/4/n"]}'))
smo35183.setAttribute('id', 'smo35183');
const smo351830acc = new VF.Accidental('b');
smo35183.addModifier(smo351830acc, 0);
const smo35184 = new VF.Annotation('I');
smo35184.setAttribute('id', 'smo35184');
smo35184.setFont('Merriweather', 11, 'normal');
smo35184.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35183.addModifier(smo35184);
smo35184.addClass('lyric lyric-0');
const smo35185 = new VF.Annotation('when');
smo35185.setAttribute('id', 'smo35185');
smo35185.setFont('Merriweather', 11, 'normal');
smo35185.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35183.addModifier(smo35185);
smo35185.addClass('lyric lyric-1');
const smo35186 = new VF.ChordSymbol();
smo35186.setAttribute('id', 'smo35186');
smo35186.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1}'));
smo35186.setFont('Roboto Slab', 14).setReportWidth(false);
smo35183.addModifier(smo35186, 0);
smo35205v0ar.push(smo35183);
const smo35187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/3/n","dn/4/n"]}'))
smo35187.setAttribute('id', 'smo35187');
const smo35188 = new VF.Annotation('am');
smo35188.setAttribute('id', 'smo35188');
smo35188.setFont('Merriweather', 11, 'normal');
smo35188.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35187.addModifier(smo35188);
smo35188.addClass('lyric lyric-0');
const smo35189 = new VF.Annotation('my');
smo35189.setAttribute('id', 'smo35189');
smo35189.setFont('Merriweather', 11, 'normal');
smo35189.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35187.addModifier(smo35189);
smo35189.addClass('lyric lyric-1');
smo35205v0ar.push(smo35187);
smo35205v0.addTickables(smo35205v0ar)
fmtsmo352054.joinVoices([smo35205v0]);
const fmtsmo356184 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo35618v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35618v0ar = [];
const smo35597 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","fn/3/n"]}'))
smo35597.setAttribute('id', 'smo35597');
smo35618v0ar.push(smo35597);
const smo35599 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bb/2/n","dn/3/n"]}'))
smo35599.setAttribute('id', 'smo35599');
smo35599.addModifier(new VF.Dot(), 0);
smo35599.addModifier(new VF.Dot(), 1);
smo35618v0ar.push(smo35599);
const smo35601 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo35601.setAttribute('id', 'smo35601');
smo35618v0ar.push(smo35601);
const smo35602 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo35602.setAttribute('id', 'smo35602');
smo35618v0ar.push(smo35602);
smo35618v0.addTickables(smo35618v0ar)
fmtsmo356184.joinVoices([smo35618v0]);
// create beam groups and tuplets for format grp smo35856 before formatting
const dirsmo37077 = smo35183.getStemDirection();
smo35183.setStemDirection(dirsmo37077);
smo35187.setStemDirection(dirsmo37077);
const smo37077 = new VF.Beam([smo35183,smo35187]);
const dirsmo37080 = smo35601.getStemDirection();
smo35601.setStemDirection(dirsmo37080);
smo35602.setStemDirection(dirsmo37080);
const smo37080 = new VF.Beam([smo35601,smo35602]);
 
// formatting measures in staff group smo35856
fmtsmo352054.format([smo35205v0,smo35618v0], 213);
const stavesmo35205 = new VF.Stave(851, 178, 227);
stavesmo35205.setAttribute('id', 'stavesmo35205');
stavesmo35205.setBegBarType(VF.Barline.type.NONE);
stavesmo35205.setContext(context);
stavesmo35205.draw();
smo35205v0.draw(context, stavesmo35205);
smo37077.setContext(context);
smo37077.draw();
const stavesmo35618 = new VF.Stave(851, 333, 227);
stavesmo35618.setAttribute('id', 'stavesmo35618');
stavesmo35618.setBegBarType(VF.Barline.type.NONE);
stavesmo35618.setContext(context);
stavesmo35618.draw();
smo35618v0.draw(context, stavesmo35618);
smo37080.setContext(context);
smo37080.draw();
const rightsmo35856stavesmo352051 = new VF.StaveConnector(stavesmo35205, stavesmo35618).setType(0);
rightsmo35856stavesmo352051.setContext(context).draw();
const fmtsmo352325 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo35232v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35232v0ar = [];
const smo35206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n"]}'))
smo35206.setAttribute('id', 'smo35206');
const smo35207 = new VF.Annotation('tired');
smo35207.setAttribute('id', 'smo35207');
smo35207.setFont('Merriweather', 11, 'normal');
smo35207.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35206.addModifier(smo35207);
smo35207.addClass('lyric lyric-0');
const smo35208 = new VF.Annotation('life');
smo35208.setAttribute('id', 'smo35208');
smo35208.setFont('Merriweather', 11, 'normal');
smo35208.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35206.addModifier(smo35208);
smo35208.addClass('lyric lyric-1');
const smo35209 = new VF.ChordSymbol();
smo35209.setAttribute('id', 'smo35209');
smo35209.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo35209.setFont('Roboto Slab', 14).setReportWidth(false);
smo35206.addModifier(smo35209, 0);
smo35232v0ar.push(smo35206);
const smo35210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo35210.setAttribute('id', 'smo35210');
const smo35211 = new VF.Annotation('I');
smo35211.setAttribute('id', 'smo35211');
smo35211.setFont('Merriweather', 11, 'normal');
smo35211.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35210.addModifier(smo35211);
smo35211.addClass('lyric lyric-0');
const smo35213 = new VF.ChordSymbol();
smo35213.setAttribute('id', 'smo35213');
smo35213.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo35213.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo35213.setFont('Roboto Slab', 14).setReportWidth(false);
smo35210.addModifier(smo35213, 0);
smo35232v0ar.push(smo35210);
const smo35214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo35214.setAttribute('id', 'smo35214');
const smo35215 = new VF.Annotation('am');
smo35215.setAttribute('id', 'smo35215');
smo35215.setFont('Merriweather', 11, 'normal');
smo35215.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35214.addModifier(smo35215);
smo35215.addClass('lyric lyric-0');
const smo35216 = new VF.Annotation('is');
smo35216.setAttribute('id', 'smo35216');
smo35216.setFont('Merriweather', 11, 'normal');
smo35216.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35214.addModifier(smo35216);
smo35216.addClass('lyric lyric-1 lyric-hyphen');
smo35232v0ar.push(smo35214);
smo35232v0.addTickables(smo35232v0ar)
fmtsmo352325.joinVoices([smo35232v0]);
const fmtsmo356395 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo35639v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35639v0ar = [];
const smo35619 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","fn/3/n"]}'))
smo35619.setAttribute('id', 'smo35619');
smo35639v0ar.push(smo35619);
const smo35621 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","en/3/n"]}'))
smo35621.setAttribute('id', 'smo35621');
smo35639v0ar.push(smo35621);
const smo35623 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","en/3/n"]}'))
smo35623.setAttribute('id', 'smo35623');
smo35639v0ar.push(smo35623);
smo35639v0.addTickables(smo35639v0ar)
fmtsmo356395.joinVoices([smo35639v0]);
// create beam groups and tuplets for format grp smo35856 before formatting
const dirsmo37089 = smo35210.getStemDirection();
smo35210.setStemDirection(dirsmo37089);
smo35214.setStemDirection(dirsmo37089);
const smo37089 = new VF.Beam([smo35210,smo35214]);
const dirsmo37092 = smo35621.getStemDirection();
smo35621.setStemDirection(dirsmo37092);
smo35623.setStemDirection(dirsmo37092);
const smo37092 = new VF.Beam([smo35621,smo35623]);
 
// formatting measures in staff group smo35856
fmtsmo352325.format([smo35232v0,smo35639v0], 129);
const stavesmo35232 = new VF.Stave(43, 519, 203);
stavesmo35232.setAttribute('id', 'stavesmo35232');
stavesmo35232.setBegBarType(1);
stavesmo35232.addClef('treble');
const keysmo35232 = new VF.KeySignature('F');
keysmo35232.addToStave(stavesmo35232);
stavesmo35232.setContext(context);
stavesmo35232.draw();
smo35232v0.draw(context, stavesmo35232);
smo37089.setContext(context);
smo37089.draw();
const stavesmo35639 = new VF.Stave(43, 705, 203);
stavesmo35639.setAttribute('id', 'stavesmo35639');
stavesmo35639.setBegBarType(1);
stavesmo35639.addClef('bass');
const keysmo35639 = new VF.KeySignature('F');
keysmo35639.addToStave(stavesmo35639);
stavesmo35639.setContext(context);
stavesmo35639.draw();
smo35639v0.draw(context, stavesmo35639);
smo37092.setContext(context);
smo37092.draw();
const leftsmo35856stavesmo352321 = new VF.StaveConnector(stavesmo35232, stavesmo35639).setType(3);
leftsmo35856stavesmo352321.setContext(context).draw();
const fmtsmo352596 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo35259v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35259v0ar = [];
const smo35233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","fn/4/n"]}'))
smo35233.setAttribute('id', 'smo35233');
const smo35234 = new VF.Annotation('weak');
smo35234.setAttribute('id', 'smo35234');
smo35234.setFont('Merriweather', 11, 'normal');
smo35234.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35233.addModifier(smo35234);
smo35234.addClass('lyric lyric-0');
const smo35235 = new VF.Annotation('al');
smo35235.setAttribute('id', 'smo35235');
smo35235.setFont('Merriweather', 11, 'normal');
smo35235.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35233.addModifier(smo35235);
smo35235.addClass('lyric lyric-1 lyric-hyphen');
const smo35236 = new VF.ChordSymbol();
smo35236.setAttribute('id', 'smo35236');
smo35236.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo35236.setFont('Roboto Slab', 14).setReportWidth(false);
smo35233.addModifier(smo35236, 0);
smo35259v0ar.push(smo35233);
const smo35237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n","an/4/n"]}'))
smo35237.setAttribute('id', 'smo35237');
const smo352370acc = new VF.Accidental('n');
smo35237.addModifier(smo352370acc, 0);
const smo35238 = new VF.Annotation('I');
smo35238.setAttribute('id', 'smo35238');
smo35238.setFont('Merriweather', 11, 'normal');
smo35238.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35237.addModifier(smo35238);
smo35238.addClass('lyric lyric-0');
const smo35239 = new VF.Annotation('most');
smo35239.setAttribute('id', 'smo35239');
smo35239.setFont('Merriweather', 11, 'normal');
smo35239.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35237.addModifier(smo35239);
smo35239.addClass('lyric lyric-1');
const smo35240 = new VF.ChordSymbol();
smo35240.setAttribute('id', 'smo35240');
smo35240.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo35240.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo35240.setFont('Roboto Slab', 14).setReportWidth(false);
smo35237.addModifier(smo35240, 0);
smo35259v0ar.push(smo35237);
const smo35241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n","an/4/n"]}'))
smo35241.setAttribute('id', 'smo35241');
const smo35242 = new VF.Annotation('am');
smo35242.setAttribute('id', 'smo35242');
smo35242.setFont('Merriweather', 11, 'normal');
smo35242.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35241.addModifier(smo35242);
smo35242.addClass('lyric lyric-0');
smo35259v0ar.push(smo35241);
smo35259v0.addTickables(smo35259v0ar)
fmtsmo352596.joinVoices([smo35259v0]);
const fmtsmo356586 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo35658v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35658v0ar = [];
const smo35640 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo35640.setAttribute('id', 'smo35640');
smo35658v0ar.push(smo35640);
const smo35641 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","fn/3/n"]}'))
smo35641.setAttribute('id', 'smo35641');
smo35658v0ar.push(smo35641);
const smo35642 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","fn/3/n"]}'))
smo35642.setAttribute('id', 'smo35642');
smo35658v0ar.push(smo35642);
smo35658v0.addTickables(smo35658v0ar)
fmtsmo356586.joinVoices([smo35658v0]);
// create beam groups and tuplets for format grp smo35856 before formatting
const dirsmo37095 = smo35237.getStemDirection();
smo35237.setStemDirection(dirsmo37095);
smo35241.setStemDirection(dirsmo37095);
const smo37095 = new VF.Beam([smo35237,smo35241]);
const dirsmo37098 = smo35641.getStemDirection();
smo35641.setStemDirection(dirsmo37098);
smo35642.setStemDirection(dirsmo37098);
const smo37098 = new VF.Beam([smo35641,smo35642]);
 
// formatting measures in staff group smo35856
fmtsmo352596.format([smo35259v0,smo35658v0], 161);
const stavesmo35259 = new VF.Stave(246, 519, 175);
stavesmo35259.setAttribute('id', 'stavesmo35259');
stavesmo35259.setBegBarType(VF.Barline.type.NONE);
stavesmo35259.setContext(context);
stavesmo35259.draw();
smo35259v0.draw(context, stavesmo35259);
smo37095.setContext(context);
smo37095.draw();
const stavesmo35658 = new VF.Stave(246, 705, 175);
stavesmo35658.setAttribute('id', 'stavesmo35658');
stavesmo35658.setBegBarType(VF.Barline.type.NONE);
stavesmo35658.setContext(context);
stavesmo35658.draw();
smo35658v0.draw(context, stavesmo35658);
smo37098.setContext(context);
smo37098.draw();
const fmtsmo352837 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo35283v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35283v0ar = [];
const smo35260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n","gn/4/n"]}'))
smo35260.setAttribute('id', 'smo35260');
const smo35261 = new VF.Annotation('worn');
smo35261.setAttribute('id', 'smo35261');
smo35261.setFont('Merriweather', 11, 'normal');
smo35261.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35260.addModifier(smo35261);
smo35261.addClass('lyric lyric-0');
const smo35262 = new VF.Annotation('gone');
smo35262.setAttribute('id', 'smo35262');
smo35262.setFont('Merriweather', 11, 'normal');
smo35262.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35260.addModifier(smo35262);
smo35262.addClass('lyric lyric-1');
const smo35263 = new VF.ChordSymbol();
smo35263.setAttribute('id', 'smo35263');
smo35263.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo35263.setFont('Roboto Slab', 14).setReportWidth(false);
smo35260.addModifier(smo35263, 0);
smo35283v0ar.push(smo35260);
const smo35264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo35264.setAttribute('id', 'smo35264');
const smo352640acc = new VF.Accidental('n');
smo35264.addModifier(smo352640acc, 0);
const smo35265 = new VF.Annotation('-');
smo35265.setAttribute('id', 'smo35265');
smo35265.setFont('Merriweather', 11, 'normal');
smo35265.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35264.addModifier(smo35265);
smo35265.addClass('lyric lyric-0 lyric-hyphen');
const smo35266 = new VF.Annotation('-');
smo35266.setAttribute('id', 'smo35266');
smo35266.setFont('Merriweather', 11, 'normal');
smo35266.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35264.addModifier(smo35266);
smo35266.addClass('lyric lyric-1 lyric-hyphen');
const smo35267 = new VF.ChordSymbol();
smo35267.setAttribute('id', 'smo35267');
smo35267.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo35267.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo35267.setFont('Roboto Slab', 14).setReportWidth(false);
smo35264.addModifier(smo35267, 0);
smo35283v0ar.push(smo35264);
smo35283v0.addTickables(smo35283v0ar)
fmtsmo352837.joinVoices([smo35283v0]);
const fmtsmo356767 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo35676v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35676v0ar = [];
const smo35659 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","en/3/n"]}'))
smo35659.setAttribute('id', 'smo35659');
smo35676v0ar.push(smo35659);
const smo35660 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","fn/3/n"]}'))
smo35660.setAttribute('id', 'smo35660');
smo35676v0ar.push(smo35660);
smo35676v0.addTickables(smo35676v0ar)
fmtsmo356767.joinVoices([smo35676v0]);
// create beam groups and tuplets for format grp smo35856 before formatting
 
// formatting measures in staff group smo35856
fmtsmo352837.format([smo35283v0,smo35676v0], 79);
const stavesmo35283 = new VF.Stave(421, 519, 93);
stavesmo35283.setAttribute('id', 'stavesmo35283');
stavesmo35283.setBegBarType(VF.Barline.type.NONE);
stavesmo35283.setContext(context);
stavesmo35283.draw();
smo35283v0.draw(context, stavesmo35283);
const stavesmo35676 = new VF.Stave(421, 705, 93);
stavesmo35676.setAttribute('id', 'stavesmo35676');
stavesmo35676.setBegBarType(VF.Barline.type.NONE);
stavesmo35676.setContext(context);
stavesmo35676.draw();
smo35676v0.draw(context, stavesmo35676);
const fmtsmo353108 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo35310v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35310v0ar = [];
const smo35284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n","gn/4/n"]}'))
smo35284.setAttribute('id', 'smo35284');
const smo35285 = new VF.Annotation('-');
smo35285.setAttribute('id', 'smo35285');
smo35285.setFont('Merriweather', 11, 'normal');
smo35285.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35284.addModifier(smo35285);
smo35285.addClass('lyric lyric-0 lyric-hyphen');
const smo35286 = new VF.Annotation('-');
smo35286.setAttribute('id', 'smo35286');
smo35286.setFont('Merriweather', 11, 'normal');
smo35286.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35284.addModifier(smo35286);
smo35286.addClass('lyric lyric-1 lyric-hyphen');
const smo35287 = new VF.ChordSymbol();
smo35287.setAttribute('id', 'smo35287');
smo35287.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo35287.setFont('Roboto Slab', 14).setReportWidth(false);
smo35284.addModifier(smo35287, 0);
smo35310v0ar.push(smo35284);
const smo35288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","an/4/n"]}'))
smo35288.setAttribute('id', 'smo35288');
const smo35289 = new VF.Annotation('Through');
smo35289.setAttribute('id', 'smo35289');
smo35289.setFont('Merriweather', 11, 'normal');
smo35289.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35288.addModifier(smo35289);
smo35289.addClass('lyric lyric-0');
const smo35290 = new VF.Annotation('at');
smo35290.setAttribute('id', 'smo35290');
smo35290.setFont('Merriweather', 11, 'normal');
smo35290.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35288.addModifier(smo35290);
smo35290.addClass('lyric lyric-1');
const smo35291 = new VF.ChordSymbol();
smo35291.setAttribute('id', 'smo35291');
smo35291.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo35291.setFont('Roboto Slab', 14).setReportWidth(false);
smo35288.addModifier(smo35291, 0);
smo35310v0ar.push(smo35288);
const smo35292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n"]}'))
smo35292.setAttribute('id', 'smo35292');
const smo35293 = new VF.Annotation('the');
smo35293.setAttribute('id', 'smo35293');
smo35293.setFont('Merriweather', 11, 'normal');
smo35293.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35292.addModifier(smo35293);
smo35293.addClass('lyric lyric-0');
const smo35294 = new VF.Annotation('the');
smo35294.setAttribute('id', 'smo35294');
smo35294.setFont('Merriweather', 11, 'normal');
smo35294.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35292.addModifier(smo35294);
smo35294.addClass('lyric lyric-1');
smo35310v0ar.push(smo35292);
smo35310v0.addTickables(smo35310v0ar)
fmtsmo353108.joinVoices([smo35310v0]);
const fmtsmo356958 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo35695v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35695v0ar = [];
const smo35677 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n"]}'))
smo35677.setAttribute('id', 'smo35677');
smo35695v0ar.push(smo35677);
const smo35678 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo35678.setAttribute('id', 'smo35678');
smo35695v0ar.push(smo35678);
const smo35679 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo35679.setAttribute('id', 'smo35679');
smo35695v0ar.push(smo35679);
smo35695v0.addTickables(smo35695v0ar)
fmtsmo356958.joinVoices([smo35695v0]);
// create beam groups and tuplets for format grp smo35856 before formatting
const dirsmo37105 = smo35288.getStemDirection();
smo35288.setStemDirection(dirsmo37105);
smo35292.setStemDirection(dirsmo37105);
const smo37105 = new VF.Beam([smo35288,smo35292]);
const dirsmo37108 = smo35678.getStemDirection();
smo35678.setStemDirection(dirsmo37108);
smo35679.setStemDirection(dirsmo37108);
const smo37108 = new VF.Beam([smo35678,smo35679]);
 
// formatting measures in staff group smo35856
fmtsmo353108.format([smo35310v0,smo35695v0], 153);
const stavesmo35310 = new VF.Stave(514, 519, 167);
stavesmo35310.setAttribute('id', 'stavesmo35310');
stavesmo35310.setBegBarType(VF.Barline.type.NONE);
stavesmo35310.setContext(context);
stavesmo35310.draw();
smo35310v0.draw(context, stavesmo35310);
smo37105.setContext(context);
smo37105.draw();
const stavesmo35695 = new VF.Stave(514, 705, 167);
stavesmo35695.setAttribute('id', 'stavesmo35695');
stavesmo35695.setBegBarType(VF.Barline.type.NONE);
stavesmo35695.setContext(context);
stavesmo35695.draw();
smo35695v0.draw(context, stavesmo35695);
smo37108.setContext(context);
smo37108.draw();
const fmtsmo353379 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo35337v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35337v0ar = [];
const smo35311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","cn/5/n"]}'))
smo35311.setAttribute('id', 'smo35311');
const smo35312 = new VF.Annotation('storm,');
smo35312.setAttribute('id', 'smo35312');
smo35312.setFont('Merriweather', 11, 'normal');
smo35312.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35311.addModifier(smo35312);
smo35312.addClass('lyric lyric-0');
const smo35313 = new VF.Annotation('riv');
smo35313.setAttribute('id', 'smo35313');
smo35313.setFont('Merriweather', 11, 'normal');
smo35313.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35311.addModifier(smo35313);
smo35313.addClass('lyric lyric-1 lyric-hyphen');
const smo35314 = new VF.ChordSymbol();
smo35314.setAttribute('id', 'smo35314');
smo35314.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo35314.setFont('Roboto Slab', 14).setReportWidth(false);
smo35311.addModifier(smo35314, 0);
smo35337v0ar.push(smo35311);
const smo35315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n"]}'))
smo35315.setAttribute('id', 'smo35315');
const smo35316 = new VF.Annotation('through');
smo35316.setAttribute('id', 'smo35316');
smo35316.setFont('Merriweather', 11, 'normal');
smo35316.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35315.addModifier(smo35316);
smo35316.addClass('lyric lyric-0');
const smo35317 = new VF.Annotation('er');
smo35317.setAttribute('id', 'smo35317');
smo35317.setFont('Merriweather', 11, 'normal');
smo35317.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35315.addModifier(smo35317);
smo35317.addClass('lyric lyric-1');
const smo35318 = new VF.ChordSymbol();
smo35318.setAttribute('id', 'smo35318');
smo35318.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo35318.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo35318.setFont('Roboto Slab', 14).setReportWidth(false);
smo35315.addModifier(smo35318, 0);
smo35337v0ar.push(smo35315);
const smo35319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n"]}'))
smo35319.setAttribute('id', 'smo35319');
const smo35320 = new VF.Annotation('the');
smo35320.setAttribute('id', 'smo35320');
smo35320.setFont('Merriweather', 11, 'normal');
smo35320.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35319.addModifier(smo35320);
smo35320.addClass('lyric lyric-0');
const smo35321 = new VF.Annotation('I');
smo35321.setAttribute('id', 'smo35321');
smo35321.setFont('Merriweather', 11, 'normal');
smo35321.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35319.addModifier(smo35321);
smo35321.addClass('lyric lyric-1');
smo35337v0ar.push(smo35319);
smo35337v0.addTickables(smo35337v0ar)
fmtsmo353379.joinVoices([smo35337v0]);
const fmtsmo357149 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo35714v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35714v0ar = [];
const smo35696 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo35696.setAttribute('id', 'smo35696');
smo35714v0ar.push(smo35696);
const smo35697 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bb/3/n"]}'))
smo35697.setAttribute('id', 'smo35697');
smo35714v0ar.push(smo35697);
const smo35698 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bb/3/n"]}'))
smo35698.setAttribute('id', 'smo35698');
smo35714v0ar.push(smo35698);
smo35714v0.addTickables(smo35714v0ar)
fmtsmo357149.joinVoices([smo35714v0]);
// create beam groups and tuplets for format grp smo35856 before formatting
const dirsmo37111 = smo35315.getStemDirection();
smo35315.setStemDirection(dirsmo37111);
smo35319.setStemDirection(dirsmo37111);
const smo37111 = new VF.Beam([smo35315,smo35319]);
const dirsmo37114 = smo35697.getStemDirection();
smo35697.setStemDirection(dirsmo37114);
smo35698.setStemDirection(dirsmo37114);
const smo37114 = new VF.Beam([smo35697,smo35698]);
 
// formatting measures in staff group smo35856
fmtsmo353379.format([smo35337v0,smo35714v0], 196);
const stavesmo35337 = new VF.Stave(681, 519, 210);
stavesmo35337.setAttribute('id', 'stavesmo35337');
stavesmo35337.setBegBarType(VF.Barline.type.NONE);
stavesmo35337.setContext(context);
stavesmo35337.draw();
smo35337v0.draw(context, stavesmo35337);
smo37111.setContext(context);
smo37111.draw();
const stavesmo35714 = new VF.Stave(681, 705, 210);
stavesmo35714.setAttribute('id', 'stavesmo35714');
stavesmo35714.setBegBarType(VF.Barline.type.NONE);
stavesmo35714.setContext(context);
stavesmo35714.draw();
smo35714v0.draw(context, stavesmo35714);
smo37114.setContext(context);
smo37114.draw();
const fmtsmo3536410 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo35364v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35364v0ar = [];
const smo35338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","an/4/n"]}'))
smo35338.setAttribute('id', 'smo35338');
const smo35339 = new VF.Annotation('night');
smo35339.setAttribute('id', 'smo35339');
smo35339.setFont('Merriweather', 11, 'normal');
smo35339.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35338.addModifier(smo35339);
smo35339.addClass('lyric lyric-0');
const smo35340 = new VF.Annotation('stand,');
smo35340.setAttribute('id', 'smo35340');
smo35340.setFont('Merriweather', 11, 'normal');
smo35340.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35338.addModifier(smo35340);
smo35340.addClass('lyric lyric-1');
const smo35341 = new VF.ChordSymbol();
smo35341.setAttribute('id', 'smo35341');
smo35341.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo35341.setFont('Roboto Slab', 14).setReportWidth(false);
smo35338.addModifier(smo35341, 0);
smo35364v0ar.push(smo35338);
const smo35342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n","an/4/n"]}'))
smo35342.setAttribute('id', 'smo35342');
const smo353420acc = new VF.Accidental('b');
smo35342.addModifier(smo353420acc, 0);
const smo35343 = new VF.Annotation('lead');
smo35343.setAttribute('id', 'smo35343');
smo35343.setFont('Merriweather', 11, 'normal');
smo35343.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35342.addModifier(smo35343);
smo35343.addClass('lyric lyric-0');
const smo35344 = new VF.Annotation('guide');
smo35344.setAttribute('id', 'smo35344');
smo35344.setFont('Merriweather', 11, 'normal');
smo35344.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35342.addModifier(smo35344);
smo35344.addClass('lyric lyric-1');
const smo35345 = new VF.ChordSymbol();
smo35345.setAttribute('id', 'smo35345');
smo35345.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo35345.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo35345.setFont('Roboto Slab', 14).setReportWidth(false);
smo35342.addModifier(smo35345, 0);
smo35364v0ar.push(smo35342);
const smo35346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n","an/4/n"]}'))
smo35346.setAttribute('id', 'smo35346');
const smo35347 = new VF.Annotation('me');
smo35347.setAttribute('id', 'smo35347');
smo35347.setFont('Merriweather', 11, 'normal');
smo35347.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35346.addModifier(smo35347);
smo35347.addClass('lyric lyric-0');
const smo35348 = new VF.Annotation('me');
smo35348.setAttribute('id', 'smo35348');
smo35348.setFont('Merriweather', 11, 'normal');
smo35348.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35346.addModifier(smo35348);
smo35348.addClass('lyric lyric-1');
smo35364v0ar.push(smo35346);
smo35364v0.addTickables(smo35364v0ar)
fmtsmo3536410.joinVoices([smo35364v0]);
const fmtsmo3573310 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo35733v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35733v0ar = [];
const smo35715 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","cn/4/n"]}'))
smo35715.setAttribute('id', 'smo35715');
smo35733v0ar.push(smo35715);
const smo35716 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","cn/4/n"]}'))
smo35716.setAttribute('id', 'smo35716');
smo35733v0ar.push(smo35716);
const smo35717 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","cn/4/n"]}'))
smo35717.setAttribute('id', 'smo35717');
smo35733v0ar.push(smo35717);
smo35733v0.addTickables(smo35733v0ar)
fmtsmo3573310.joinVoices([smo35733v0]);
// create beam groups and tuplets for format grp smo35856 before formatting
const dirsmo37117 = smo35342.getStemDirection();
smo35342.setStemDirection(dirsmo37117);
smo35346.setStemDirection(dirsmo37117);
const smo37117 = new VF.Beam([smo35342,smo35346]);
const dirsmo37120 = smo35716.getStemDirection();
smo35716.setStemDirection(dirsmo37120);
smo35717.setStemDirection(dirsmo37120);
const smo37120 = new VF.Beam([smo35716,smo35717]);
 
// formatting measures in staff group smo35856
fmtsmo3536410.format([smo35364v0,smo35733v0], 173);
const stavesmo35364 = new VF.Stave(891, 519, 187);
stavesmo35364.setAttribute('id', 'stavesmo35364');
stavesmo35364.setBegBarType(VF.Barline.type.NONE);
stavesmo35364.setContext(context);
stavesmo35364.draw();
smo35364v0.draw(context, stavesmo35364);
smo37117.setContext(context);
smo37117.draw();
const stavesmo35733 = new VF.Stave(891, 705, 187);
stavesmo35733.setAttribute('id', 'stavesmo35733');
stavesmo35733.setBegBarType(VF.Barline.type.NONE);
stavesmo35733.setContext(context);
stavesmo35733.draw();
smo35733v0.draw(context, stavesmo35733);
smo37120.setContext(context);
smo37120.draw();
const rightsmo35856stavesmo353641 = new VF.StaveConnector(stavesmo35364, stavesmo35733).setType(0);
rightsmo35856stavesmo353641.setContext(context).draw();
const fmtsmo3539111 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo35391v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35391v0ar = [];
const smo35365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","gn/4/n"]}'))
smo35365.setAttribute('id', 'smo35365');
const smo35366 = new VF.Annotation('on');
smo35366.setAttribute('id', 'smo35366');
smo35366.setFont('Merriweather', 11, 'normal');
smo35366.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35365.addModifier(smo35366);
smo35366.addClass('lyric lyric-0');
const smo35367 = new VF.Annotation('feet,');
smo35367.setAttribute('id', 'smo35367');
smo35367.setFont('Merriweather', 11, 'normal');
smo35367.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35365.addModifier(smo35367);
smo35367.addClass('lyric lyric-1');
const smo35368 = new VF.ChordSymbol();
smo35368.setAttribute('id', 'smo35368');
smo35368.addGlyphOrText('Gm', JSON.parse('{"text":"Gm","symbolModifier":1}'));
smo35368.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo35368.setFont('Roboto Slab', 14).setReportWidth(false);
smo35365.addModifier(smo35368, 0);
smo35391v0ar.push(smo35365);
const smo35369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo35369.setAttribute('id', 'smo35369');
const smo35370 = new VF.Annotation('to');
smo35370.setAttribute('id', 'smo35370');
smo35370.setFont('Merriweather', 11, 'normal');
smo35370.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35369.addModifier(smo35370);
smo35370.addClass('lyric lyric-0');
const smo35371 = new VF.Annotation('hold');
smo35371.setAttribute('id', 'smo35371');
smo35371.setFont('Merriweather', 11, 'normal');
smo35371.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35369.addModifier(smo35371);
smo35371.addClass('lyric lyric-1');
const smo35372 = new VF.ChordSymbol();
smo35372.setAttribute('id', 'smo35372');
smo35372.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1}'));
smo35372.setFont('Roboto Slab', 14).setReportWidth(false);
smo35369.addModifier(smo35372, 0);
smo35391v0ar.push(smo35369);
const smo35373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo35373.setAttribute('id', 'smo35373');
const smo35374 = new VF.Annotation('the');
smo35374.setAttribute('id', 'smo35374');
smo35374.setFont('Merriweather', 11, 'normal');
smo35374.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35373.addModifier(smo35374);
smo35374.addClass('lyric lyric-0');
const smo35375 = new VF.Annotation('my');
smo35375.setAttribute('id', 'smo35375');
smo35375.setFont('Merriweather', 11, 'normal');
smo35375.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35373.addModifier(smo35375);
smo35375.addClass('lyric lyric-1');
smo35391v0ar.push(smo35373);
smo35391v0.addTickables(smo35391v0ar)
fmtsmo3539111.joinVoices([smo35391v0]);
const fmtsmo3575211 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo35752v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35752v0ar = [];
const smo35734 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo35734.setAttribute('id', 'smo35734');
smo35752v0ar.push(smo35734);
const smo35735 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo35735.setAttribute('id', 'smo35735');
smo35752v0ar.push(smo35735);
const smo35736 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo35736.setAttribute('id', 'smo35736');
smo35752v0ar.push(smo35736);
smo35752v0.addTickables(smo35752v0ar)
fmtsmo3575211.joinVoices([smo35752v0]);
// create beam groups and tuplets for format grp smo35856 before formatting
const dirsmo37129 = smo35369.getStemDirection();
smo35369.setStemDirection(dirsmo37129);
smo35373.setStemDirection(dirsmo37129);
const smo37129 = new VF.Beam([smo35369,smo35373]);
const dirsmo37132 = smo35735.getStemDirection();
smo35735.setStemDirection(dirsmo37132);
smo35736.setStemDirection(dirsmo37132);
const smo37132 = new VF.Beam([smo35735,smo35736]);
 
// formatting measures in staff group smo35856
fmtsmo3539111.format([smo35391v0,smo35752v0], 161);
const stavesmo35391 = new VF.Stave(43, 854, 236);
stavesmo35391.setAttribute('id', 'stavesmo35391');
stavesmo35391.setBegBarType(1);
stavesmo35391.addClef('treble');
const keysmo35391 = new VF.KeySignature('F');
keysmo35391.addToStave(stavesmo35391);
stavesmo35391.setContext(context);
stavesmo35391.draw();
smo35391v0.draw(context, stavesmo35391);
smo37129.setContext(context);
smo37129.draw();
const stavesmo35752 = new VF.Stave(43, 1040, 236);
stavesmo35752.setAttribute('id', 'stavesmo35752');
stavesmo35752.setBegBarType(1);
stavesmo35752.addClef('bass');
const keysmo35752 = new VF.KeySignature('F');
keysmo35752.addToStave(stavesmo35752);
stavesmo35752.setContext(context);
stavesmo35752.draw();
smo35752v0.draw(context, stavesmo35752);
smo37132.setContext(context);
smo37132.draw();
const leftsmo35856stavesmo353911 = new VF.StaveConnector(stavesmo35391, stavesmo35752).setType(3);
leftsmo35856stavesmo353911.setContext(context).draw();
const fmtsmo3541912 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo35419v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35419v0ar = [];
const smo35392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo35392.setAttribute('id', 'smo35392');
const smo35393 = new VF.Annotation('li');
smo35393.setAttribute('id', 'smo35393');
smo35393.setFont('Merriweather', 11, 'normal');
smo35393.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35392.addModifier(smo35393);
smo35393.addClass('lyric lyric-0 lyric-hyphen');
const smo35394 = new VF.Annotation('ha');
smo35394.setAttribute('id', 'smo35394');
smo35394.setFont('Merriweather', 11, 'normal');
smo35394.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35392.addModifier(smo35394);
smo35394.addClass('lyric lyric-1 lyric-hyphen');
smo35419v0ar.push(smo35392);
const smo35395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo35395.setAttribute('id', 'smo35395');
smo35395.addModifier(new VF.Dot(), 0);
smo35395.addModifier(new VF.Dot(), 1);
const smo35396 = new VF.Annotation('ght');
smo35396.setAttribute('id', 'smo35396');
smo35396.setFont('Merriweather', 11, 'normal');
smo35396.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35395.addModifier(smo35396);
smo35396.addClass('lyric lyric-0');
const smo35397 = new VF.Annotation('nd');
smo35397.setAttribute('id', 'smo35397');
smo35397.setFont('Merriweather', 11, 'normal');
smo35397.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35395.addModifier(smo35397);
smo35397.addClass('lyric lyric-1');
smo35419v0ar.push(smo35395);
const smo35398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo35398.setAttribute('id', 'smo35398');
const smo35399 = new VF.Annotation('Take');
smo35399.setAttribute('id', 'smo35399');
smo35399.setFont('Merriweather', 11, 'normal');
smo35399.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35398.addModifier(smo35399);
smo35399.addClass('lyric lyric-0');
const smo35401 = new VF.ChordSymbol();
smo35401.setAttribute('id', 'smo35401');
smo35401.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1}'));
smo35401.setFont('Roboto Slab', 14).setReportWidth(false);
smo35398.addModifier(smo35401, 0);
smo35419v0ar.push(smo35398);
const smo35402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo35402.setAttribute('id', 'smo35402');
const smo35403 = new VF.Annotation('my');
smo35403.setAttribute('id', 'smo35403');
smo35403.setFont('Merriweather', 11, 'normal');
smo35403.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35402.addModifier(smo35403);
smo35403.addClass('lyric lyric-0');
smo35419v0ar.push(smo35402);
smo35419v0.addTickables(smo35419v0ar)
fmtsmo3541912.joinVoices([smo35419v0]);
const fmtsmo3577212 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo35772v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35772v0ar = [];
const smo35753 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","fn/3/n"]}'))
smo35753.setAttribute('id', 'smo35753');
smo35772v0ar.push(smo35753);
const smo35754 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo35754.setAttribute('id', 'smo35754');
smo35754.addModifier(new VF.Dot(), 0);
smo35754.addModifier(new VF.Dot(), 1);
smo35772v0ar.push(smo35754);
const smo35755 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n","ab/3/n"]}'))
smo35755.setAttribute('id', 'smo35755');
const smo357550acc = new VF.Accidental('n');
smo35755.addModifier(smo357550acc, 0);
const smo357551acc = new VF.Accidental('b');
smo35755.addModifier(smo357551acc, 1);
smo35772v0ar.push(smo35755);
const smo35756 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n","gn/3/n"]}'))
smo35756.setAttribute('id', 'smo35756');
smo35772v0ar.push(smo35756);
smo35772v0.addTickables(smo35772v0ar)
fmtsmo3577212.joinVoices([smo35772v0]);
// create beam groups and tuplets for format grp smo35856 before formatting
const dirsmo37135 = smo35398.getStemDirection();
smo35398.setStemDirection(dirsmo37135);
smo35402.setStemDirection(dirsmo37135);
const smo37135 = new VF.Beam([smo35398,smo35402]);
const dirsmo37138 = smo35755.getStemDirection();
smo35755.setStemDirection(dirsmo37138);
smo35756.setStemDirection(dirsmo37138);
const smo37138 = new VF.Beam([smo35755,smo35756]);
 
// formatting measures in staff group smo35856
fmtsmo3541912.format([smo35419v0,smo35772v0], 191);
const stavesmo35419 = new VF.Stave(279, 854, 205);
stavesmo35419.setAttribute('id', 'stavesmo35419');
stavesmo35419.setBegBarType(VF.Barline.type.NONE);
stavesmo35419.setContext(context);
stavesmo35419.draw();
smo35419v0.draw(context, stavesmo35419);
smo37135.setContext(context);
smo37135.draw();
const stavesmo35772 = new VF.Stave(279, 1040, 205);
stavesmo35772.setAttribute('id', 'stavesmo35772');
stavesmo35772.setBegBarType(VF.Barline.type.NONE);
stavesmo35772.setContext(context);
stavesmo35772.draw();
smo35772v0.draw(context, stavesmo35772);
smo37138.setContext(context);
smo37138.draw();
const fmtsmo3544613 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo35446v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35446v0ar = [];
const smo35420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo35420.setAttribute('id', 'smo35420');
const smo35421 = new VF.Annotation('ha');
smo35421.setAttribute('id', 'smo35421');
smo35421.setFont('Merriweather', 11, 'normal');
smo35421.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35420.addModifier(smo35421);
smo35421.addClass('lyric lyric-0 lyric-hyphen');
const smo35422 = new VF.ChordSymbol();
smo35422.setAttribute('id', 'smo35422');
smo35422.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo35422.setFont('Roboto Slab', 14).setReportWidth(false);
smo35420.addModifier(smo35422, 0);
smo35446v0ar.push(smo35420);
const smo35423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo35423.setAttribute('id', 'smo35423');
smo35423.addModifier(new VF.Dot(), 0);
const smo35424 = new VF.Annotation('nd');
smo35424.setAttribute('id', 'smo35424');
smo35424.setFont('Merriweather', 11, 'normal');
smo35424.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35423.addModifier(smo35424);
smo35424.addClass('lyric lyric-0');
smo35446v0ar.push(smo35423);
const smo35425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo35425.setAttribute('id', 'smo35425');
const smo35426 = new VF.Annotation('pre');
smo35426.setAttribute('id', 'smo35426');
smo35426.setFont('Merriweather', 11, 'normal');
smo35426.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35425.addModifier(smo35426);
smo35426.addClass('lyric lyric-0 lyric-hyphen');
const smo35427 = new VF.ChordSymbol();
smo35427.setAttribute('id', 'smo35427');
smo35427.addGlyphOrText('Dm', JSON.parse('{"text":"Dm","symbolModifier":1}'));
smo35427.setFont('Roboto Slab', 14).setReportWidth(false);
smo35425.addModifier(smo35427, 0);
smo35446v0ar.push(smo35425);
const smo35428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","gn/4/n"]}'))
smo35428.setAttribute('id', 'smo35428');
const smo35429 = new VF.Annotation('cious');
smo35429.setAttribute('id', 'smo35429');
smo35429.setFont('Merriweather', 11, 'normal');
smo35429.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35428.addModifier(smo35429);
smo35429.addClass('lyric lyric-0');
const smo35430 = new VF.ChordSymbol();
smo35430.setAttribute('id', 'smo35430');
smo35430.addGlyphOrText('A', JSON.parse('{"text":"A","symbolModifier":1}'));
smo35430.addGlyphOrText('5', JSON.parse('{"text":"5","symbolModifier":3}'));
smo35430.setFont('Roboto Slab', 14).setReportWidth(false);
smo35428.addModifier(smo35430, 0);
smo35446v0ar.push(smo35428);
smo35446v0.addTickables(smo35446v0ar)
fmtsmo3544613.joinVoices([smo35446v0]);
const fmtsmo3579113 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo35791v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35791v0ar = [];
const smo35773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","an/3/n"]}'))
smo35773.setAttribute('id', 'smo35773');
smo35791v0ar.push(smo35773);
const smo35774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","an/3/n"]}'))
smo35774.setAttribute('id', 'smo35774');
smo35791v0ar.push(smo35774);
const smo35775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["db/3/n","bn/3/n"]}'))
smo35775.setAttribute('id', 'smo35775');
const smo357750acc = new VF.Accidental('b');
smo35775.addModifier(smo357750acc, 0);
const smo357751acc = new VF.Accidental('n');
smo35775.addModifier(smo357751acc, 1);
smo35791v0ar.push(smo35775);
smo35791v0.addTickables(smo35791v0ar)
fmtsmo3579113.joinVoices([smo35791v0]);
// create beam groups and tuplets for format grp smo35856 before formatting
const dirsmo37141 = smo35425.getStemDirection();
smo35425.setStemDirection(dirsmo37141);
smo35428.setStemDirection(dirsmo37141);
const smo37141 = new VF.Beam([smo35425,smo35428]);
const dirsmo37144 = smo35774.getStemDirection();
smo35774.setStemDirection(dirsmo37144);
smo35775.setStemDirection(dirsmo37144);
const smo37144 = new VF.Beam([smo35774,smo35775]);
 
// formatting measures in staff group smo35856
fmtsmo3544613.format([smo35446v0,smo35791v0], 186);
const stavesmo35446 = new VF.Stave(484, 854, 200);
stavesmo35446.setAttribute('id', 'stavesmo35446');
stavesmo35446.setBegBarType(VF.Barline.type.NONE);
stavesmo35446.setContext(context);
stavesmo35446.draw();
smo35446v0.draw(context, stavesmo35446);
smo37141.setContext(context);
smo37141.draw();
const stavesmo35791 = new VF.Stave(484, 1040, 200);
stavesmo35791.setAttribute('id', 'stavesmo35791');
stavesmo35791.setBegBarType(VF.Barline.type.NONE);
stavesmo35791.setContext(context);
stavesmo35791.draw();
smo35791v0.draw(context, stavesmo35791);
smo37144.setContext(context);
smo37144.draw();
const fmtsmo3547014 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo35470v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35470v0ar = [];
const smo35447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","an/4/n"]}'))
smo35447.setAttribute('id', 'smo35447');
const smo35448 = new VF.Annotation('Lord,');
smo35448.setAttribute('id', 'smo35448');
smo35448.setFont('Merriweather', 11, 'normal');
smo35448.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35447.addModifier(smo35448);
smo35448.addClass('lyric lyric-0');
const smo35449 = new VF.ChordSymbol();
smo35449.setAttribute('id', 'smo35449');
smo35449.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo35449.setFont('Roboto Slab', 14).setReportWidth(false);
smo35447.addModifier(smo35449, 0);
smo35470v0ar.push(smo35447);
const smo35450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["cn/4/n","gn/4/n"]}'))
smo35450.setAttribute('id', 'smo35450');
smo35450.addModifier(new VF.Dot(), 0);
smo35450.addModifier(new VF.Dot(), 1);
const smo35451 = new VF.Annotation('lead');
smo35451.setAttribute('id', 'smo35451');
smo35451.setFont('Merriweather', 11, 'normal');
smo35451.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35450.addModifier(smo35451);
smo35451.addClass('lyric lyric-0');
const smo35452 = new VF.ChordSymbol();
smo35452.setAttribute('id', 'smo35452');
smo35452.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo35452.addGlyphOrText('sus4', JSON.parse('{"text":"sus4","symbolModifier":3}'));
smo35452.setFont('Roboto Slab', 14).setReportWidth(false);
smo35450.addModifier(smo35452, 0);
smo35470v0ar.push(smo35450);
const smo35453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo35453.setAttribute('id', 'smo35453');
const smo35454 = new VF.Annotation('me');
smo35454.setAttribute('id', 'smo35454');
smo35454.setFont('Merriweather', 11, 'normal');
smo35454.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35453.addModifier(smo35454);
smo35454.addClass('lyric lyric-0');
smo35470v0ar.push(smo35453);
smo35470v0.addTickables(smo35470v0ar)
fmtsmo3547014.joinVoices([smo35470v0]);
const fmtsmo3581014 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo35810v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35810v0ar = [];
const smo35792 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo35792.setAttribute('id', 'smo35792');
smo35810v0ar.push(smo35792);
const smo35793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["cn/3/n","bb/3/n"]}'))
smo35793.setAttribute('id', 'smo35793');
smo35793.addModifier(new VF.Dot(), 0);
smo35793.addModifier(new VF.Dot(), 1);
smo35810v0ar.push(smo35793);
const smo35794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","bb/3/n"]}'))
smo35794.setAttribute('id', 'smo35794');
smo35810v0ar.push(smo35794);
smo35810v0.addTickables(smo35810v0ar)
fmtsmo3581014.joinVoices([smo35810v0]);
// create beam groups and tuplets for format grp smo35856 before formatting
const dirsmo37147 = smo35450.getStemDirection();
smo35450.setStemDirection(dirsmo37147);
smo35453.setStemDirection(dirsmo37147);
const smo37147 = new VF.Beam([smo35450,smo35453]);
const dirsmo37150 = smo35793.getStemDirection();
smo35793.setStemDirection(dirsmo37150);
smo35794.setStemDirection(dirsmo37150);
const smo37150 = new VF.Beam([smo35793,smo35794]);
 
// formatting measures in staff group smo35856
fmtsmo3547014.format([smo35470v0,smo35810v0], 164);
const stavesmo35470 = new VF.Stave(684, 854, 178);
stavesmo35470.setAttribute('id', 'stavesmo35470');
stavesmo35470.setBegBarType(VF.Barline.type.NONE);
stavesmo35470.setContext(context);
stavesmo35470.draw();
smo35470v0.draw(context, stavesmo35470);
smo37147.setContext(context);
smo37147.draw();
const stavesmo35810 = new VF.Stave(684, 1040, 178);
stavesmo35810.setAttribute('id', 'stavesmo35810');
stavesmo35810.setBegBarType(VF.Barline.type.NONE);
stavesmo35810.setContext(context);
stavesmo35810.draw();
smo35810v0.draw(context, stavesmo35810);
smo37150.setContext(context);
smo37150.draw();
const fmtsmo3548915 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo35489v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35489v0ar = [];
const smo35471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo35471.setAttribute('id', 'smo35471');
smo35471.addModifier(new VF.Dot(), 0);
smo35471.addModifier(new VF.Dot(), 1);
const smo35472 = new VF.Annotation('home');
smo35472.setAttribute('id', 'smo35472');
smo35472.setFont('Merriweather', 11, 'normal');
smo35472.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35471.addModifier(smo35472);
smo35472.addClass('lyric lyric-0 lyric-hyphen');
const smo35473 = new VF.ChordSymbol();
smo35473.setAttribute('id', 'smo35473');
smo35473.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo35473.setFont('Roboto Slab', 14).setReportWidth(false);
smo35471.addModifier(smo35473, 0);
smo35489v0ar.push(smo35471);
smo35489v0.addTickables(smo35489v0ar)
fmtsmo3548915.joinVoices([smo35489v0]);
const fmtsmo3582715 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo35827v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35827v0ar = [];
const smo35811 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo35811.setAttribute('id', 'smo35811');
smo35811.addModifier(new VF.Dot(), 0);
smo35811.addModifier(new VF.Dot(), 1);
smo35827v0ar.push(smo35811);
smo35827v0.addTickables(smo35827v0ar)
fmtsmo3582715.joinVoices([smo35827v0]);
// create beam groups and tuplets for format grp smo35856 before formatting
 
// formatting measures in staff group smo35856
fmtsmo3548915.format([smo35489v0,smo35827v0], 50);
const stavesmo35489 = new VF.Stave(862, 854, 65);
stavesmo35489.setAttribute('id', 'stavesmo35489');
stavesmo35489.setBegBarType(VF.Barline.type.NONE);
stavesmo35489.setEndBarType(2);
stavesmo35489.setContext(context);
stavesmo35489.draw();
smo35489v0.draw(context, stavesmo35489);
const stavesmo35827 = new VF.Stave(862, 1040, 65);
stavesmo35827.setAttribute('id', 'stavesmo35827');
stavesmo35827.setBegBarType(VF.Barline.type.NONE);
stavesmo35827.setEndBarType(2);
stavesmo35827.setContext(context);
stavesmo35827.draw();
smo35827v0.draw(context, stavesmo35827);
const fmtsmo3551216 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo35512v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35512v0ar = [];
const smo35490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo35490.setAttribute('id', 'smo35490');
smo35512v0ar.push(smo35490);
const smo35492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo35492.setAttribute('id', 'smo35492');
const smo35493 = new VF.Annotation('When');
smo35493.setAttribute('id', 'smo35493');
smo35493.setFont('Merriweather', 11, 'normal');
smo35493.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35492.addModifier(smo35493);
smo35493.addClass('lyric lyric-0');
smo35512v0ar.push(smo35492);
const smo35494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo35494.setAttribute('id', 'smo35494');
const smo35495 = new VF.Annotation('the');
smo35495.setAttribute('id', 'smo35495');
smo35495.setFont('Merriweather', 11, 'normal');
smo35495.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo35494.addModifier(smo35495);
smo35495.addClass('lyric lyric-0');
smo35512v0ar.push(smo35494);
smo35512v0.addTickables(smo35512v0ar)
fmtsmo3551216.joinVoices([smo35512v0]);
const fmtsmo3584716 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo35847v0 = new VF.Voice(JSON.parse('{"numBeats":3,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35847v0ar = [];
const smo35828 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo35828.setAttribute('id', 'smo35828');
smo35847v0ar.push(smo35828);
const smo35829 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo35829.setAttribute('id', 'smo35829');
smo35847v0ar.push(smo35829);
const smo35830 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo35830.setAttribute('id', 'smo35830');
smo35847v0ar.push(smo35830);
smo35847v0.addTickables(smo35847v0ar)
fmtsmo3584716.joinVoices([smo35847v0]);
// create beam groups and tuplets for format grp smo35856 before formatting
const dirsmo37155 = smo35492.getStemDirection();
smo35492.setStemDirection(dirsmo37155);
smo35494.setStemDirection(dirsmo37155);
const smo37155 = new VF.Beam([smo35492,smo35494]);
const dirsmo37157 = smo35829.getStemDirection();
smo35829.setStemDirection(dirsmo37157);
smo35830.setStemDirection(dirsmo37157);
const smo37157 = new VF.Beam([smo35829,smo35830]);
 
// formatting measures in staff group smo35856
fmtsmo3551216.format([smo35512v0,smo35847v0], 133);
const stavesmo35512 = new VF.Stave(927, 854, 151);
stavesmo35512.setAttribute('id', 'stavesmo35512');
stavesmo35512.setBegBarType(VF.Barline.type.NONE);
stavesmo35512.setEndBarType(5);
stavesmo35512.setContext(context);
stavesmo35512.draw();
smo35512v0.draw(context, stavesmo35512);
smo37155.setContext(context);
smo37155.draw();
const stavesmo35847 = new VF.Stave(927, 1040, 151);
stavesmo35847.setAttribute('id', 'stavesmo35847');
stavesmo35847.setBegBarType(VF.Barline.type.NONE);
stavesmo35847.setEndBarType(5);
stavesmo35847.setContext(context);
stavesmo35847.draw();
smo35847v0.draw(context, stavesmo35847);
smo37157.setContext(context);
smo37157.draw();
// modifier from 0-15-0-0 to 0-16-0-0
const smo37289 = new VF.StaveTie({ first_note: smo35471, last_note: smo35490, 
          firstNote: smo35471, lastNote: smo35490, first_indices: [0,1], last_indices: [0,1]});
smo37289.setContext(context).draw();
// modifier from 1-15-0-0 to 1-16-0-0
const smo37290 = new VF.StaveTie({ first_note: smo35811, last_note: smo35828, 
          firstNote: smo35811, lastNote: smo35828, first_indices: [0,1], last_indices: [0,1]});
smo37290.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo35079').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo35097').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo35098').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo35103').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo35101').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo35105').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo35106').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo35124').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35125').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo35129').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35128').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo35131').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35132').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo35151').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo35152').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo35155').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo35156').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo35159').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo35160').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo35178').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo35179').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo35181').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo35182').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo35184').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo35185').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo35188').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo35189').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo35208').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35211').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo35215').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo35216').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo35235').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35238').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo35239').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo35242').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo35261').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo35262').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo35265').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo35266').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo35285').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo35286').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo35289').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35290').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo35293').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35294').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo35312').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35313').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo35316').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35317').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo35320').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35321').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo35339').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35340').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo35343').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35344').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo35347').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35348').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo35366').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo35367').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo35370').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo35371').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo35374').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo35375').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo35393').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo35394').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo35396').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo35397').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo35399').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo35403').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo35421').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35424').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo35426').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo35429').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo35448').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo35451').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35454').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35472').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo35495').setAttributeNS('', 'transform', 'translate(0 5)');
}
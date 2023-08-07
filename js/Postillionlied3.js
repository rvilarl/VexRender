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
svg.setAttributeNS('', 'height', '1839.5721925133685');
svg.setAttributeNS('', 'viewBox', '0 0 1343 1738');
VF.setMusicFont("Leland","Bravura","Gonville","Custom");
const noteHash = {};
const voiceHash = {}
const fmtsmo3415943 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo34159v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34159v0ar = [];
const smo34138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34138'] = smo34138;
smo34138.setAttribute('id', 'smo34138');
smo34138.addModifier(new VF.Dot(), 0);
const smo34139 = new VF.Annotation('Wäl');
smo34139.setAttribute('id', 'smo34139');
smo34139.setFont('Merriweather', 12, 'normal');
smo34139.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34138.addModifier(smo34139);
smo34139.addClass('lyric lyric-0 lyric-hyphen');
const smo34140 = new VF.Annotation('klin');
smo34140.setAttribute('id', 'smo34140');
smo34140.setFont('Merriweather', 12, 'normal');
smo34140.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34138.addModifier(smo34140);
smo34140.addClass('lyric lyric-1 lyric-hyphen');
smo34159v0ar.push(smo34138);
const smo34141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo34141'] = smo34141;
smo34141.setAttribute('id', 'smo34141');
smo34141.addModifier(new VF.Dot(), 0);
const smo34142 = new VF.Annotation('der');
smo34142.setAttribute('id', 'smo34142');
smo34142.setFont('Merriweather', 12, 'normal');
smo34142.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34141.addModifier(smo34142);
smo34142.addClass('lyric lyric-0');
const smo34143 = new VF.Annotation('gen:');
smo34143.setAttribute('id', 'smo34143');
smo34143.setFont('Merriweather', 12, 'normal');
smo34143.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34141.addModifier(smo34143);
smo34143.addClass('lyric lyric-1');
smo34159v0ar.push(smo34141);
smo34159v0.addTickables(smo34159v0ar)
fmtsmo3415943.joinVoices([smo34159v0]);
const fmtsmo3533043 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo35330v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35330v0ar = [];
const smo35314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","f#/5/n","dn/6/n"]}'))
noteHash['smo35314'] = smo35314;
smo35314.setAttribute('id', 'smo35314');
smo35314.addModifier(new VF.Dot(), 0);
smo35314.addModifier(new VF.Dot(), 1);
smo35314.addModifier(new VF.Dot(), 2);
smo35330v0ar.push(smo35314);
smo35330v0.addTickables(smo35330v0ar)
fmtsmo3533043.joinVoices([smo35330v0]);
const fmtsmo3655543 = new VF.Formatter();
//
// voices and notes for stave 2 43
const smo36555v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36555v0ar = [];
const smo36534 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo36534'] = smo36534;
smo36534.setAttribute('id', 'smo36534');
smo36555v0ar.push(smo36534);
const smo36535 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo36535'] = smo36535;
smo36535.setAttribute('id', 'smo36535');
smo36555v0ar.push(smo36535);
const smo36536 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo36536'] = smo36536;
smo36536.setAttribute('id', 'smo36536');
smo36555v0ar.push(smo36536);
const smo36537 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo36537'] = smo36537;
smo36537.setAttribute('id', 'smo36537');
smo36555v0ar.push(smo36537);
smo36555v0.addTickables(smo36555v0ar)
fmtsmo3655543.joinVoices([smo36555v0]);
const smo36555v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36555v1ar = [];
const smo36538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo36538'] = smo36538;
smo36538.setAttribute('id', 'smo36538');
smo36538.addModifier(new VF.Dot(), 0);
smo36555v1ar.push(smo36538);
const smo36539 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
noteHash['smo36539'] = smo36539;
smo36539.setAttribute('id', 'smo36539');
smo36539.addModifier(new VF.Dot(), 0);
smo36555v1ar.push(smo36539);
smo36555v1.addTickables(smo36555v1ar)
fmtsmo3655543.joinVoices([smo36555v1]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3415943.format([smo34159v0,smo35330v0,smo36555v0,smo36555v1], 173);
const stavesmo34159 = new VF.Stave(66, 98.0266026666668, 247);
stavesmo34159.setAttribute('id', 'stavesmo34159');
stavesmo34159.setBegBarType(1);
stavesmo34159.addClef('treble');
const keysmo34159 = new VF.KeySignature('G');
keysmo34159.addToStave(stavesmo34159);
stavesmo34159.setContext(context);
stavesmo34159.draw();
smo34159v0.draw(context, stavesmo34159);
const stavesmo35330 = new VF.Stave(66, 280.0266026666668, 247);
stavesmo35330.setAttribute('id', 'stavesmo35330');
stavesmo35330.setBegBarType(1);
stavesmo35330.addClef('treble');
const keysmo35330 = new VF.KeySignature('G');
keysmo35330.addToStave(stavesmo35330);
stavesmo35330.setContext(context);
stavesmo35330.draw();
smo35330v0.draw(context, stavesmo35330);
const stavesmo36555 = new VF.Stave(66, 386.0266026666668, 247);
stavesmo36555.setAttribute('id', 'stavesmo36555');
stavesmo36555.setBegBarType(1);
stavesmo36555.addClef('bass');
const keysmo36555 = new VF.KeySignature('G');
keysmo36555.addToStave(stavesmo36555);
stavesmo36555.setContext(context);
stavesmo36555.draw();
smo36555v0.draw(context, stavesmo36555);
smo36555v1.draw(context, stavesmo36555);
const leftsmo36899stavesmo341592 = new VF.StaveConnector(stavesmo34159, stavesmo36555).setType(1);
leftsmo36899stavesmo341592.setContext(context).draw();
const fmtsmo3418744 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo34187v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34187v0ar = [];
const smo34160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34160'] = smo34160;
smo34160.setAttribute('id', 'smo34160');
const smo34161 = new VF.Annotation('ü');
smo34161.setAttribute('id', 'smo34161');
smo34161.setFont('Merriweather', 12, 'normal');
smo34161.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34160.addModifier(smo34161);
smo34161.addClass('lyric lyric-0 lyric-hyphen');
const smo34162 = new VF.Annotation('Ich');
smo34162.setAttribute('id', 'smo34162');
smo34162.setFont('Merriweather', 12, 'normal');
smo34162.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34160.addModifier(smo34162);
smo34162.addClass('lyric lyric-1');
smo34187v0ar.push(smo34160);
const smo34163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo34163'] = smo34163;
smo34163.setAttribute('id', 'smo34163');
const smo34164 = new VF.Annotation('ber');
smo34164.setAttribute('id', 'smo34164');
smo34164.setFont('Merriweather', 12, 'normal');
smo34164.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34163.addModifier(smo34164);
smo34164.addClass('lyric lyric-0');
const smo34165 = new VF.Annotation('bin');
smo34165.setAttribute('id', 'smo34165');
smo34165.setFont('Merriweather', 12, 'normal');
smo34165.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34163.addModifier(smo34165);
smo34165.addClass('lyric lyric-1');
smo34187v0ar.push(smo34163);
const smo34166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo34166'] = smo34166;
smo34166.setAttribute('id', 'smo34166');
const smo34167 = new VF.Annotation('das');
smo34167.setAttribute('id', 'smo34167');
smo34167.setFont('Merriweather', 12, 'normal');
smo34167.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34166.addModifier(smo34167);
smo34167.addClass('lyric lyric-0');
const smo34168 = new VF.Annotation('ganz');
smo34168.setAttribute('id', 'smo34168');
smo34168.setFont('Merriweather', 12, 'normal');
smo34168.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34166.addModifier(smo34168);
smo34168.addClass('lyric lyric-1');
smo34187v0ar.push(smo34166);
const smo34169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34169'] = smo34169;
smo34169.setAttribute('id', 'smo34169');
smo34169.addModifier(new VF.Dot(), 0);
const smo34170 = new VF.Annotation('Land;');
smo34170.setAttribute('id', 'smo34170');
smo34170.setFont('Merriweather', 12, 'normal');
smo34170.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34169.addModifier(smo34170);
smo34170.addClass('lyric lyric-0');
const smo34171 = new VF.Annotation('nah!');
smo34171.setAttribute('id', 'smo34171');
smo34171.setFont('Merriweather', 12, 'normal');
smo34171.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34169.addModifier(smo34171);
smo34171.addClass('lyric lyric-1');
smo34187v0ar.push(smo34169);
smo34187v0.addTickables(smo34187v0ar)
fmtsmo3418744.joinVoices([smo34187v0]);
const fmtsmo3534744 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo35347v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35347v0ar = [];
const smo35331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo35331'] = smo35331;
smo35331.setAttribute('id', 'smo35331');
smo35331.addModifier(new VF.Dot(), 0);
smo35331.addModifier(new VF.Dot(), 1);
smo35347v0ar.push(smo35331);
smo35347v0.addTickables(smo35347v0ar)
fmtsmo3534744.joinVoices([smo35347v0]);
const fmtsmo3657544 = new VF.Formatter();
//
// voices and notes for stave 2 44
const smo36575v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36575v0ar = [];
const smo36556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo36556'] = smo36556;
smo36556.setAttribute('id', 'smo36556');
smo36575v0ar.push(smo36556);
const smo36557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo36557'] = smo36557;
smo36557.setAttribute('id', 'smo36557');
smo36575v0ar.push(smo36557);
const smo36558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo36558'] = smo36558;
smo36558.setAttribute('id', 'smo36558');
smo36575v0ar.push(smo36558);
const smo36559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo36559'] = smo36559;
smo36559.setAttribute('id', 'smo36559');
smo36575v0ar.push(smo36559);
smo36575v0.addTickables(smo36575v0ar)
fmtsmo3657544.joinVoices([smo36575v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo43185 = smo34160.getStemDirection();
smo34160.setStemDirection(dirsmo43185);
smo34163.setStemDirection(dirsmo43185);
smo34166.setStemDirection(dirsmo43185);
const smo43185 = new VF.Beam([smo34160,smo34163,smo34166]);
 
// formatting measures in staff group smo36899
fmtsmo3418744.format([smo34187v0,smo35347v0,smo36575v0], 278);
const stavesmo34187 = new VF.Stave(313, 98.0266026666668, 292);
stavesmo34187.setAttribute('id', 'stavesmo34187');
stavesmo34187.setBegBarType(VF.Barline.type.NONE);
stavesmo34187.setContext(context);
stavesmo34187.draw();
smo34187v0.draw(context, stavesmo34187);
smo43185.setContext(context);
smo43185.draw();
const stavesmo35347 = new VF.Stave(313, 280.0266026666668, 292);
stavesmo35347.setAttribute('id', 'stavesmo35347');
stavesmo35347.setBegBarType(VF.Barline.type.NONE);
stavesmo35347.setContext(context);
stavesmo35347.draw();
smo35347v0.draw(context, stavesmo35347);
const stavesmo36575 = new VF.Stave(313, 386.0266026666668, 292);
stavesmo36575.setAttribute('id', 'stavesmo36575');
stavesmo36575.setBegBarType(VF.Barline.type.NONE);
stavesmo36575.setContext(context);
stavesmo36575.draw();
smo36575v0.draw(context, stavesmo36575);
const fmtsmo3420745 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo34207v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34207v0ar = [];
const smo34188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34188'] = smo34188;
smo34188.setAttribute('id', 'smo34188');
smo34188.addModifier(new VF.Dot(), 0);
smo34207v0ar.push(smo34188);
const smo34189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo34189'] = smo34189;
smo34189.setAttribute('id', 'smo34189');
smo34189.addModifier(new VF.Dot(), 0);
const smo34190 = new VF.Annotation('von');
smo34190.setAttribute('id', 'smo34190');
smo34190.setFont('Merriweather', 12, 'normal');
smo34190.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34189.addModifier(smo34190);
smo34190.addClass('lyric lyric-0');
const smo34191 = new VF.Annotation('Tra');
smo34191.setAttribute('id', 'smo34191');
smo34191.setFont('Merriweather', 12, 'normal');
smo34191.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34189.addModifier(smo34191);
smo34191.addClass('lyric lyric-1 lyric-hyphen');
smo34207v0ar.push(smo34189);
smo34207v0.addTickables(smo34207v0ar)
fmtsmo3420745.joinVoices([smo34207v0]);
const fmtsmo3536445 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo35364v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35364v0ar = [];
const smo35348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo35348'] = smo35348;
smo35348.setAttribute('id', 'smo35348');
smo35348.addModifier(new VF.Dot(), 0);
smo35348.addModifier(new VF.Dot(), 1);
smo35364v0ar.push(smo35348);
smo35364v0.addTickables(smo35364v0ar)
fmtsmo3536445.joinVoices([smo35364v0]);
const fmtsmo3659545 = new VF.Formatter();
//
// voices and notes for stave 2 45
const smo36595v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36595v0ar = [];
const smo36576 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo36576'] = smo36576;
smo36576.setAttribute('id', 'smo36576');
smo36595v0ar.push(smo36576);
const smo36577 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo36577'] = smo36577;
smo36577.setAttribute('id', 'smo36577');
smo36595v0ar.push(smo36577);
const smo36578 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo36578'] = smo36578;
smo36578.setAttribute('id', 'smo36578');
smo36595v0ar.push(smo36578);
const smo36579 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo36579'] = smo36579;
smo36579.setAttribute('id', 'smo36579');
smo36595v0ar.push(smo36579);
smo36595v0.addTickables(smo36595v0ar)
fmtsmo3659545.joinVoices([smo36595v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3420745.format([smo34207v0,smo35364v0,smo36595v0], 150);
const stavesmo34207 = new VF.Stave(605, 98.0266026666668, 164);
stavesmo34207.setAttribute('id', 'stavesmo34207');
stavesmo34207.setBegBarType(VF.Barline.type.NONE);
stavesmo34207.setContext(context);
stavesmo34207.draw();
smo34207v0.draw(context, stavesmo34207);
const stavesmo35364 = new VF.Stave(605, 280.0266026666668, 164);
stavesmo35364.setAttribute('id', 'stavesmo35364');
stavesmo35364.setBegBarType(VF.Barline.type.NONE);
stavesmo35364.setContext(context);
stavesmo35364.draw();
smo35364v0.draw(context, stavesmo35364);
const stavesmo36595 = new VF.Stave(605, 386.0266026666668, 164);
stavesmo36595.setAttribute('id', 'stavesmo36595');
stavesmo36595.setBegBarType(VF.Barline.type.NONE);
stavesmo36595.setContext(context);
stavesmo36595.draw();
smo36595v0.draw(context, stavesmo36595);
const fmtsmo3422646 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo34226v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34226v0ar = [];
const smo34208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34208'] = smo34208;
smo34208.setAttribute('id', 'smo34208');
smo34208.addModifier(new VF.Dot(), 0);
const smo34209 = new VF.Annotation('fern');
smo34209.setAttribute('id', 'smo34209');
smo34209.setFont('Merriweather', 12, 'normal');
smo34209.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34208.addModifier(smo34209);
smo34209.addClass('lyric lyric-0');
const smo34210 = new VF.Annotation('ra!');
smo34210.setAttribute('id', 'smo34210');
smo34210.setFont('Merriweather', 12, 'normal');
smo34210.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34208.addModifier(smo34210);
smo34210.addClass('lyric lyric-1');
smo34226v0ar.push(smo34208);
smo34226v0.addTickables(smo34226v0ar)
fmtsmo3422646.joinVoices([smo34226v0]);
const fmtsmo3538446 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo35384v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35384v0ar = [];
const smo35365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo35365'] = smo35365;
smo35365.setAttribute('id', 'smo35365');
smo35365.addModifier(new VF.Dot(), 0);
smo35384v0ar.push(smo35365);
smo35384v0.addTickables(smo35384v0ar)
fmtsmo3538446.joinVoices([smo35384v0]);
const smo35384v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35384v1ar = [];
const smo35366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
noteHash['smo35366'] = smo35366;
smo35366.setAttribute('id', 'smo35366');
smo35366.addModifier(new VF.Dot(), 0);
smo35384v1ar.push(smo35366);
const smo35367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/5/n"]}'))
noteHash['smo35367'] = smo35367;
smo35367.setAttribute('id', 'smo35367');
smo35384v1ar.push(smo35367);
const smo35368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo35368'] = smo35368;
smo35368.setAttribute('id', 'smo35368');
smo35384v1ar.push(smo35368);
smo35384v1.addTickables(smo35384v1ar)
fmtsmo3538446.joinVoices([smo35384v1]);
const fmtsmo3661546 = new VF.Formatter();
//
// voices and notes for stave 2 46
const smo36615v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36615v0ar = [];
const smo36596 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36596'] = smo36596;
smo36596.setAttribute('id', 'smo36596');
smo36615v0ar.push(smo36596);
const smo36597 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36597'] = smo36597;
smo36597.setAttribute('id', 'smo36597');
smo36615v0ar.push(smo36597);
const smo36598 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36598'] = smo36598;
smo36598.setAttribute('id', 'smo36598');
smo36615v0ar.push(smo36598);
const smo36599 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36599'] = smo36599;
smo36599.setAttribute('id', 'smo36599');
smo36615v0ar.push(smo36599);
smo36615v0.addTickables(smo36615v0ar)
fmtsmo3661546.joinVoices([smo36615v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3422646.format([smo34226v0,smo35384v0,smo35384v1,smo36615v0], 138);
const stavesmo34226 = new VF.Stave(769, 98.0266026666668, 152);
stavesmo34226.setAttribute('id', 'stavesmo34226');
stavesmo34226.setBegBarType(VF.Barline.type.NONE);
stavesmo34226.setContext(context);
stavesmo34226.draw();
smo34226v0.draw(context, stavesmo34226);
const stavesmo35384 = new VF.Stave(769, 280.0266026666668, 152);
stavesmo35384.setAttribute('id', 'stavesmo35384');
stavesmo35384.setBegBarType(VF.Barline.type.NONE);
stavesmo35384.setContext(context);
stavesmo35384.draw();
smo35384v0.draw(context, stavesmo35384);
smo35384v1.draw(context, stavesmo35384);
const stavesmo36615 = new VF.Stave(769, 386.0266026666668, 152);
stavesmo36615.setAttribute('id', 'stavesmo36615');
stavesmo36615.setBegBarType(VF.Barline.type.NONE);
stavesmo36615.setContext(context);
stavesmo36615.draw();
smo36615v0.draw(context, stavesmo36615);
const fmtsmo3425647 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo34256v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34256v0ar = [];
const smo34227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34227'] = smo34227;
smo34227.setAttribute('id', 'smo34227');
smo34256v0ar.push(smo34227);
const smo34229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo34229'] = smo34229;
smo34229.setAttribute('id', 'smo34229');
const smo34230 = new VF.Annotation('er');
smo34230.setAttribute('id', 'smo34230');
smo34230.setFont('Merriweather', 12, 'normal');
smo34230.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34229.addModifier(smo34230);
smo34230.addClass('lyric lyric-0');
const smo34231 = new VF.Annotation('Ich');
smo34231.setAttribute('id', 'smo34231');
smo34231.setFont('Merriweather', 12, 'normal');
smo34231.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34229.addModifier(smo34231);
smo34231.addClass('lyric lyric-1');
smo34256v0ar.push(smo34229);
const smo34232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34232'] = smo34232;
smo34232.setAttribute('id', 'smo34232');
const smo34233 = new VF.Annotation('kem');
smo34233.setAttribute('id', 'smo34233');
smo34233.setFont('Merriweather', 12, 'normal');
smo34233.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34232.addModifier(smo34233);
smo34233.addClass('lyric lyric-0');
const smo34234 = new VF.Annotation('hö');
smo34234.setAttribute('id', 'smo34234');
smo34234.setFont('Merriweather', 12, 'normal');
smo34234.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34232.addModifier(smo34234);
smo34234.addClass('lyric lyric-1 lyric-hyphen');
smo34256v0ar.push(smo34232);
const smo34235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34235'] = smo34235;
smo34235.setAttribute('id', 'smo34235');
const smo34236 = new VF.Annotation('ich');
smo34236.setAttribute('id', 'smo34236');
smo34236.setFont('Merriweather', 12, 'normal');
smo34236.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34235.addModifier(smo34236);
smo34236.addClass('lyric lyric-0');
const smo34237 = new VF.Annotation('re');
smo34237.setAttribute('id', 'smo34237');
smo34237.setFont('Merriweather', 12, 'normal');
smo34237.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34235.addModifier(smo34237);
smo34237.addClass('lyric lyric-1');
smo34256v0ar.push(smo34235);
const smo34238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo34238'] = smo34238;
smo34238.setAttribute('id', 'smo34238');
const smo34239 = new VF.Annotation('ihn');
smo34239.setAttribute('id', 'smo34239');
smo34239.setFont('Merriweather', 12, 'normal');
smo34239.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34238.addModifier(smo34239);
smo34239.addClass('lyric lyric-0');
const smo34240 = new VF.Annotation('sein');
smo34240.setAttribute('id', 'smo34240');
smo34240.setFont('Merriweather', 12, 'normal');
smo34240.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34238.addModifier(smo34240);
smo34240.addClass('lyric lyric-1');
smo34256v0ar.push(smo34238);
smo34256v0.addTickables(smo34256v0ar)
fmtsmo3425647.joinVoices([smo34256v0]);
const fmtsmo3540347 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo35403v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35403v0ar = [];
const smo35385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo35385'] = smo35385;
smo35385.setAttribute('id', 'smo35385');
smo35385.addModifier(new VF.Dot(), 0);
smo35403v0ar.push(smo35385);
smo35403v0.addTickables(smo35403v0ar)
fmtsmo3540347.joinVoices([smo35403v0]);
const smo35403v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35403v1ar = [];
const smo35386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/6/n"]}'))
noteHash['smo35386'] = smo35386;
smo35386.setAttribute('id', 'smo35386');
smo35386.addModifier(new VF.Dot(), 0);
smo35403v1ar.push(smo35386);
const smo35387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
noteHash['smo35387'] = smo35387;
smo35387.setAttribute('id', 'smo35387');
smo35387.addModifier(new VF.Dot(), 0);
smo35403v1ar.push(smo35387);
smo35403v1.addTickables(smo35403v1ar)
fmtsmo3540347.joinVoices([smo35403v1]);
const fmtsmo3663547 = new VF.Formatter();
//
// voices and notes for stave 2 47
const smo36635v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36635v0ar = [];
const smo36616 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36616'] = smo36616;
smo36616.setAttribute('id', 'smo36616');
smo36635v0ar.push(smo36616);
const smo36617 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36617'] = smo36617;
smo36617.setAttribute('id', 'smo36617');
smo36635v0ar.push(smo36617);
const smo36618 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36618'] = smo36618;
smo36618.setAttribute('id', 'smo36618');
smo36635v0ar.push(smo36618);
const smo36619 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36619'] = smo36619;
smo36619.setAttribute('id', 'smo36619');
smo36635v0ar.push(smo36619);
smo36635v0.addTickables(smo36635v0ar)
fmtsmo3663547.joinVoices([smo36635v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo43204 = smo34232.getStemDirection();
smo34232.setStemDirection(dirsmo43204);
smo34235.setStemDirection(dirsmo43204);
smo34238.setStemDirection(dirsmo43204);
const smo43204 = new VF.Beam([smo34232,smo34235,smo34238]);
 
// formatting measures in staff group smo36899
fmtsmo3425647.format([smo34256v0,smo35403v0,smo35403v1,smo36635v0], 275);
const stavesmo34256 = new VF.Stave(921, 98.0266026666668, 289);
stavesmo34256.setAttribute('id', 'stavesmo34256');
stavesmo34256.setBegBarType(VF.Barline.type.NONE);
stavesmo34256.setContext(context);
stavesmo34256.draw();
smo34256v0.draw(context, stavesmo34256);
smo43204.setContext(context);
smo43204.draw();
const stavesmo35403 = new VF.Stave(921, 280.0266026666668, 289);
stavesmo35403.setAttribute('id', 'stavesmo35403');
stavesmo35403.setBegBarType(VF.Barline.type.NONE);
stavesmo35403.setContext(context);
stavesmo35403.draw();
smo35403v0.draw(context, stavesmo35403);
smo35403v1.draw(context, stavesmo35403);
const stavesmo36635 = new VF.Stave(921, 386.0266026666668, 289);
stavesmo36635.setAttribute('id', 'stavesmo36635');
stavesmo36635.setBegBarType(VF.Barline.type.NONE);
stavesmo36635.setContext(context);
stavesmo36635.draw();
smo36635v0.draw(context, stavesmo36635);
const rightsmo36899stavesmo342562 = new VF.StaveConnector(stavesmo34256, stavesmo36635).setType(0);
rightsmo36899stavesmo342562.setContext(context).draw();
const fmtsmo3427548 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo34275v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34275v0ar = [];
const smo34257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34257'] = smo34257;
smo34257.setAttribute('id', 'smo34257');
smo34257.addModifier(new VF.Dot(), 0);
const smo34258 = new VF.Annotation('schon');
smo34258.setAttribute('id', 'smo34258');
smo34258.setFont('Merriweather', 12, 'normal');
smo34258.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34257.addModifier(smo34258);
smo34258.addClass('lyric lyric-0');
const smo34259 = new VF.Annotation('Lied!');
smo34259.setAttribute('id', 'smo34259');
smo34259.setFont('Merriweather', 12, 'normal');
smo34259.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34257.addModifier(smo34259);
smo34259.addClass('lyric lyric-1');
smo34275v0ar.push(smo34257);
smo34275v0.addTickables(smo34275v0ar)
fmtsmo3427548.joinVoices([smo34275v0]);
const fmtsmo3542548 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo35425v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35425v0ar = [];
const smo35404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo35404'] = smo35404;
smo35404.setAttribute('id', 'smo35404');
smo35404.addModifier(new VF.Dot(), 0);
smo35425v0ar.push(smo35404);
const smo35405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo35405'] = smo35405;
smo35405.setAttribute('id', 'smo35405');
smo35425v0ar.push(smo35405);
const smo35406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo35406'] = smo35406;
smo35406.setAttribute('id', 'smo35406');
smo35425v0ar.push(smo35406);
smo35425v0.addTickables(smo35425v0ar)
fmtsmo3542548.joinVoices([smo35425v0]);
const smo35425v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35425v1ar = [];
const smo35407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
noteHash['smo35407'] = smo35407;
smo35407.setAttribute('id', 'smo35407');
smo35407.addModifier(new VF.Dot(), 0);
smo35425v1ar.push(smo35407);
const smo35408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo35408'] = smo35408;
smo35408.setAttribute('id', 'smo35408');
smo35425v1ar.push(smo35408);
const smo35409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo35409'] = smo35409;
smo35409.setAttribute('id', 'smo35409');
smo35425v1ar.push(smo35409);
smo35425v1.addTickables(smo35425v1ar)
fmtsmo3542548.joinVoices([smo35425v1]);
const fmtsmo3665548 = new VF.Formatter();
//
// voices and notes for stave 2 48
const smo36655v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36655v0ar = [];
const smo36636 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36636'] = smo36636;
smo36636.setAttribute('id', 'smo36636');
smo36655v0ar.push(smo36636);
const smo36637 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36637'] = smo36637;
smo36637.setAttribute('id', 'smo36637');
smo36655v0ar.push(smo36637);
const smo36638 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36638'] = smo36638;
smo36638.setAttribute('id', 'smo36638');
smo36655v0ar.push(smo36638);
const smo36639 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36639'] = smo36639;
smo36639.setAttribute('id', 'smo36639');
smo36655v0ar.push(smo36639);
smo36655v0.addTickables(smo36655v0ar)
fmtsmo3665548.joinVoices([smo36655v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3427548.format([smo34275v0,smo35425v0,smo35425v1,smo36655v0], 152);
const stavesmo34275 = new VF.Stave(66, 516.0266026666668, 226);
stavesmo34275.setAttribute('id', 'stavesmo34275');
stavesmo34275.setBegBarType(1);
stavesmo34275.addClef('treble');
const keysmo34275 = new VF.KeySignature('G');
keysmo34275.addToStave(stavesmo34275);
stavesmo34275.setContext(context);
stavesmo34275.draw();
smo34275v0.draw(context, stavesmo34275);
const stavesmo35425 = new VF.Stave(66, 688.0266026666668, 226);
stavesmo35425.setAttribute('id', 'stavesmo35425');
stavesmo35425.setBegBarType(1);
stavesmo35425.addClef('treble');
const keysmo35425 = new VF.KeySignature('G');
keysmo35425.addToStave(stavesmo35425);
stavesmo35425.setContext(context);
stavesmo35425.draw();
smo35425v0.draw(context, stavesmo35425);
smo35425v1.draw(context, stavesmo35425);
const stavesmo36655 = new VF.Stave(66, 780.0266026666668, 226);
stavesmo36655.setAttribute('id', 'stavesmo36655');
stavesmo36655.setBegBarType(1);
stavesmo36655.addClef('bass');
const keysmo36655 = new VF.KeySignature('G');
keysmo36655.addToStave(stavesmo36655);
stavesmo36655.setContext(context);
stavesmo36655.draw();
smo36655v0.draw(context, stavesmo36655);
const leftsmo36899stavesmo342752 = new VF.StaveConnector(stavesmo34275, stavesmo36655).setType(1);
leftsmo36899stavesmo342752.setContext(context).draw();
const fmtsmo3430549 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo34305v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34305v0ar = [];
const smo34276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34276'] = smo34276;
smo34276.setAttribute('id', 'smo34276');
const smo34277 = new VF.Annotation('-');
smo34277.setAttribute('id', 'smo34277');
smo34277.setFont('Merriweather', 12, 'normal');
smo34277.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34276.addModifier(smo34277);
smo34277.addClass('lyric lyric-0 lyric-hyphen');
smo34305v0ar.push(smo34276);
const smo34278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo34278'] = smo34278;
smo34278.setAttribute('id', 'smo34278');
const smo34279 = new VF.Annotation('denn');
smo34279.setAttribute('id', 'smo34279');
smo34279.setFont('Merriweather', 12, 'normal');
smo34279.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34278.addModifier(smo34279);
smo34279.addClass('lyric lyric-0');
const smo34280 = new VF.Annotation('Es');
smo34280.setAttribute('id', 'smo34280');
smo34280.setFont('Merriweather', 12, 'normal');
smo34280.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34278.addModifier(smo34280);
smo34280.addClass('lyric lyric-1');
smo34305v0ar.push(smo34278);
const smo34281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34281'] = smo34281;
smo34281.setAttribute('id', 'smo34281');
const smo34282 = new VF.Annotation('all');
smo34282.setAttribute('id', 'smo34282');
smo34282.setFont('Merriweather', 12, 'normal');
smo34282.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34281.addModifier(smo34282);
smo34282.addClass('lyric lyric-0');
const smo34283 = new VF.Annotation('soli');
smo34283.setAttribute('id', 'smo34283');
smo34283.setFont('Merriweather', 12, 'normal');
smo34283.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34281.addModifier(smo34283);
smo34283.addClass('lyric lyric-1');
smo34305v0ar.push(smo34281);
const smo34284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34284'] = smo34284;
smo34284.setAttribute('id', 'smo34284');
const smo34285 = new VF.Annotation('sei');
smo34285.setAttribute('id', 'smo34285');
smo34285.setFont('Merriweather', 12, 'normal');
smo34285.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34284.addModifier(smo34285);
smo34285.addClass('lyric lyric-0 lyric-hyphen');
const smo34286 = new VF.Annotation('zu');
smo34286.setAttribute('id', 'smo34286');
smo34286.setFont('Merriweather', 12, 'normal');
smo34286.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34284.addModifier(smo34286);
smo34286.addClass('lyric lyric-1 lyric-hyphen');
smo34305v0ar.push(smo34284);
const smo34287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo34287'] = smo34287;
smo34287.setAttribute('id', 'smo34287');
const smo34288 = new VF.Annotation('ne');
smo34288.setAttribute('id', 'smo34288');
smo34288.setFont('Merriweather', 12, 'normal');
smo34288.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34287.addModifier(smo34288);
smo34288.addClass('lyric lyric-0');
const smo34289 = new VF.Annotation('mir');
smo34289.setAttribute('id', 'smo34289');
smo34289.setFont('Merriweather', 12, 'normal');
smo34289.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34287.addModifier(smo34289);
smo34289.addClass('lyric lyric-1');
smo34305v0ar.push(smo34287);
smo34305v0.addTickables(smo34305v0ar)
fmtsmo3430549.joinVoices([smo34305v0]);
const fmtsmo3544349 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo35443v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35443v0ar = [];
const smo35426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo35426'] = smo35426;
smo35426.setAttribute('id', 'smo35426');
smo35426.addModifier(new VF.Dot(), 0);
smo35443v0ar.push(smo35426);
smo35443v0.addTickables(smo35443v0ar)
fmtsmo3544349.joinVoices([smo35443v0]);
const smo35443v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35443v1ar = [];
const smo35427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/6/n"]}'))
noteHash['smo35427'] = smo35427;
smo35427.setAttribute('id', 'smo35427');
smo35427.addModifier(new VF.Dot(), 0);
smo35443v1ar.push(smo35427);
smo35443v1.addTickables(smo35443v1ar)
fmtsmo3544349.joinVoices([smo35443v1]);
const fmtsmo3667549 = new VF.Formatter();
//
// voices and notes for stave 2 49
const smo36675v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36675v0ar = [];
const smo36656 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36656'] = smo36656;
smo36656.setAttribute('id', 'smo36656');
smo36675v0ar.push(smo36656);
const smo36657 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36657'] = smo36657;
smo36657.setAttribute('id', 'smo36657');
smo36675v0ar.push(smo36657);
const smo36658 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36658'] = smo36658;
smo36658.setAttribute('id', 'smo36658');
smo36675v0ar.push(smo36658);
const smo36659 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36659'] = smo36659;
smo36659.setAttribute('id', 'smo36659');
smo36675v0ar.push(smo36659);
smo36675v0.addTickables(smo36675v0ar)
fmtsmo3667549.joinVoices([smo36675v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo43224 = smo34281.getStemDirection();
smo34281.setStemDirection(dirsmo43224);
smo34284.setStemDirection(dirsmo43224);
smo34287.setStemDirection(dirsmo43224);
const smo43224 = new VF.Beam([smo34281,smo34284,smo34287]);
 
// formatting measures in staff group smo36899
fmtsmo3430549.format([smo34305v0,smo35443v0,smo35443v1,smo36675v0], 271);
const stavesmo34305 = new VF.Stave(292, 516.0266026666668, 285);
stavesmo34305.setAttribute('id', 'stavesmo34305');
stavesmo34305.setBegBarType(VF.Barline.type.NONE);
stavesmo34305.setContext(context);
stavesmo34305.draw();
smo34305v0.draw(context, stavesmo34305);
smo43224.setContext(context);
smo43224.draw();
const stavesmo35443 = new VF.Stave(292, 688.0266026666668, 285);
stavesmo35443.setAttribute('id', 'stavesmo35443');
stavesmo35443.setBegBarType(VF.Barline.type.NONE);
stavesmo35443.setContext(context);
stavesmo35443.draw();
smo35443v0.draw(context, stavesmo35443);
smo35443v1.draw(context, stavesmo35443);
const stavesmo36675 = new VF.Stave(292, 780.0266026666668, 285);
stavesmo36675.setAttribute('id', 'stavesmo36675');
stavesmo36675.setBegBarType(VF.Barline.type.NONE);
stavesmo36675.setContext(context);
stavesmo36675.draw();
smo36675v0.draw(context, stavesmo36675);
const fmtsmo3432750 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo34327v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34327v0ar = [];
const smo34306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34306'] = smo34306;
smo34306.setAttribute('id', 'smo34306');
smo34306.addModifier(new VF.Dot(), 0);
const smo34307 = new VF.Annotation('Lie');
smo34307.setAttribute('id', 'smo34307');
smo34307.setFont('Merriweather', 12, 'normal');
smo34307.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34306.addModifier(smo34307);
smo34307.addClass('lyric lyric-0 lyric-hyphen');
const smo34308 = new VF.Annotation('so');
smo34308.setAttribute('id', 'smo34308');
smo34308.setFont('Merriweather', 12, 'normal');
smo34308.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34306.addModifier(smo34308);
smo34308.addClass('lyric lyric-1 lyric-hyphen');
smo34327v0ar.push(smo34306);
const smo34309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34309'] = smo34309;
smo34309.setAttribute('id', 'smo34309');
smo34309.addModifier(new VF.Dot(), 0);
const smo34310 = new VF.Annotation('der');
smo34310.setAttribute('id', 'smo34310');
smo34310.setFont('Merriweather', 12, 'normal');
smo34310.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34309.addModifier(smo34310);
smo34310.addClass('lyric lyric-0');
const smo34311 = new VF.Annotation('gen');
smo34311.setAttribute('id', 'smo34311');
smo34311.setFont('Merriweather', 12, 'normal');
smo34311.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34309.addModifier(smo34311);
smo34311.addClass('lyric lyric-1');
smo34327v0ar.push(smo34309);
smo34327v0.addTickables(smo34327v0ar)
fmtsmo3432750.joinVoices([smo34327v0]);
const fmtsmo3546150 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo35461v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35461v0ar = [];
const smo35444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35444'] = smo35444;
smo35444.setAttribute('id', 'smo35444');
smo35444.addModifier(new VF.Dot(), 0);
smo35461v0ar.push(smo35444);
const smo35445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","dn/5/n"]}'))
noteHash['smo35445'] = smo35445;
smo35445.setAttribute('id', 'smo35445');
smo35445.addModifier(new VF.Dot(), 0);
smo35445.addModifier(new VF.Dot(), 1);
smo35461v0ar.push(smo35445);
smo35461v0.addTickables(smo35461v0ar)
fmtsmo3546150.joinVoices([smo35461v0]);
const fmtsmo3669550 = new VF.Formatter();
//
// voices and notes for stave 2 50
const smo36695v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36695v0ar = [];
const smo36676 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo36676'] = smo36676;
smo36676.setAttribute('id', 'smo36676');
smo36695v0ar.push(smo36676);
const smo36677 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo36677'] = smo36677;
smo36677.setAttribute('id', 'smo36677');
smo36695v0ar.push(smo36677);
const smo36678 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
noteHash['smo36678'] = smo36678;
smo36678.setAttribute('id', 'smo36678');
smo36695v0ar.push(smo36678);
const smo36679 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
noteHash['smo36679'] = smo36679;
smo36679.setAttribute('id', 'smo36679');
smo36695v0ar.push(smo36679);
smo36695v0.addTickables(smo36695v0ar)
fmtsmo3669550.joinVoices([smo36695v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3432750.format([smo34327v0,smo35461v0,smo36695v0], 149);
const stavesmo34327 = new VF.Stave(577, 516.0266026666668, 163);
stavesmo34327.setAttribute('id', 'stavesmo34327');
stavesmo34327.setBegBarType(VF.Barline.type.NONE);
stavesmo34327.setContext(context);
stavesmo34327.draw();
smo34327v0.draw(context, stavesmo34327);
const stavesmo35461 = new VF.Stave(577, 688.0266026666668, 163);
stavesmo35461.setAttribute('id', 'stavesmo35461');
stavesmo35461.setBegBarType(VF.Barline.type.NONE);
stavesmo35461.setContext(context);
stavesmo35461.draw();
smo35461v0.draw(context, stavesmo35461);
const stavesmo36695 = new VF.Stave(577, 780.0266026666668, 163);
stavesmo36695.setAttribute('id', 'stavesmo36695');
stavesmo36695.setBegBarType(VF.Barline.type.NONE);
stavesmo36695.setContext(context);
stavesmo36695.draw();
smo36695v0.draw(context, stavesmo36695);
const fmtsmo3434951 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo34349v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34349v0ar = [];
const smo34328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34328'] = smo34328;
smo34328.setAttribute('id', 'smo34328');
smo34328.addModifier(new VF.Dot(), 0);
const smo34329 = new VF.Annotation('-');
smo34329.setAttribute('id', 'smo34329');
smo34329.setFont('Merriweather', 12, 'normal');
smo34329.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34328.addModifier(smo34329);
smo34329.addClass('lyric lyric-0 lyric-hyphen');
smo34349v0ar.push(smo34328);
const smo34330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34330'] = smo34330;
smo34330.setAttribute('id', 'smo34330');
smo34349v0ar.push(smo34330);
const smo34331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo34331'] = smo34331;
smo34331.setAttribute('id', 'smo34331');
const smo34332 = new VF.Annotation('sie');
smo34332.setAttribute('id', 'smo34332');
smo34332.setFont('Merriweather', 12, 'normal');
smo34332.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34331.addModifier(smo34332);
smo34332.addClass('lyric lyric-0');
const smo34333 = new VF.Annotation('Ich');
smo34333.setAttribute('id', 'smo34333');
smo34333.setFont('Merriweather', 12, 'normal');
smo34333.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34331.addModifier(smo34333);
smo34333.addClass('lyric lyric-1');
smo34349v0ar.push(smo34331);
smo34349v0.addTickables(smo34349v0ar)
fmtsmo3434951.joinVoices([smo34349v0]);
const fmtsmo3547851 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo35478v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35478v0ar = [];
const smo35462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","dn/5/n"]}'))
noteHash['smo35462'] = smo35462;
smo35462.setAttribute('id', 'smo35462');
smo35462.addModifier(new VF.Dot(), 0);
smo35462.addModifier(new VF.Dot(), 1);
smo35478v0ar.push(smo35462);
smo35478v0.addTickables(smo35478v0ar)
fmtsmo3547851.joinVoices([smo35478v0]);
const fmtsmo3671251 = new VF.Formatter();
//
// voices and notes for stave 2 51
const smo36712v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36712v0ar = [];
const smo36696 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
noteHash['smo36696'] = smo36696;
smo36696.setAttribute('id', 'smo36696');
smo36696.addModifier(new VF.Dot(), 0);
smo36696.addModifier(new VF.Dot(), 1);
smo36712v0ar.push(smo36696);
smo36712v0.addTickables(smo36712v0ar)
fmtsmo3671251.joinVoices([smo36712v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3434951.format([smo34349v0,smo35478v0,smo36712v0], 116);
const stavesmo34349 = new VF.Stave(740, 516.0266026666668, 130);
stavesmo34349.setAttribute('id', 'stavesmo34349');
stavesmo34349.setBegBarType(VF.Barline.type.NONE);
stavesmo34349.setContext(context);
stavesmo34349.draw();
smo34349v0.draw(context, stavesmo34349);
const stavesmo35478 = new VF.Stave(740, 688.0266026666668, 130);
stavesmo35478.setAttribute('id', 'stavesmo35478');
stavesmo35478.setBegBarType(VF.Barline.type.NONE);
stavesmo35478.setContext(context);
stavesmo35478.draw();
smo35478v0.draw(context, stavesmo35478);
const stavesmo36712 = new VF.Stave(740, 780.0266026666668, 130);
stavesmo36712.setAttribute('id', 'stavesmo36712');
stavesmo36712.setBegBarType(VF.Barline.type.NONE);
stavesmo36712.setContext(context);
stavesmo36712.draw();
smo36712v0.draw(context, stavesmo36712);
const fmtsmo3437752 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo34377v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34377v0ar = [];
const smo34350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo34350'] = smo34350;
smo34350.setAttribute('id', 'smo34350');
const smo34351 = new VF.Annotation('sind');
smo34351.setAttribute('id', 'smo34351');
smo34351.setFont('Merriweather', 12, 'normal');
smo34351.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34350.addModifier(smo34351);
smo34351.addClass('lyric lyric-0');
const smo34352 = new VF.Annotation('bin');
smo34352.setAttribute('id', 'smo34352');
smo34352.setFont('Merriweather', 12, 'normal');
smo34352.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34350.addModifier(smo34352);
smo34352.addClass('lyric lyric-1');
smo34377v0ar.push(smo34350);
const smo34353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo34353'] = smo34353;
smo34353.setAttribute('id', 'smo34353');
const smo34354 = new VF.Annotation('mir');
smo34354.setAttribute('id', 'smo34354');
smo34354.setFont('Merriweather', 12, 'normal');
smo34354.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34353.addModifier(smo34354);
smo34354.addClass('lyric lyric-0');
const smo34355 = new VF.Annotation('wie');
smo34355.setAttribute('id', 'smo34355');
smo34355.setFont('Merriweather', 12, 'normal');
smo34355.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34353.addModifier(smo34355);
smo34355.addClass('lyric lyric-1 lyric-hyphen');
smo34377v0ar.push(smo34353);
const smo34356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo34356'] = smo34356;
smo34356.setAttribute('id', 'smo34356');
const smo34357 = new VF.Annotation('be');
smo34357.setAttribute('id', 'smo34357');
smo34357.setFont('Merriweather', 12, 'normal');
smo34357.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34356.addModifier(smo34357);
smo34357.addClass('lyric lyric-0 lyric-hyphen');
const smo34358 = new VF.Annotation('der');
smo34358.setAttribute('id', 'smo34358');
smo34358.setFont('Merriweather', 12, 'normal');
smo34358.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34356.addModifier(smo34358);
smo34358.addClass('lyric lyric-1');
smo34377v0ar.push(smo34356);
const smo34359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo34359'] = smo34359;
smo34359.setAttribute('id', 'smo34359');
smo34359.addModifier(new VF.Dot(), 0);
const smo34360 = new VF.Annotation('kannt!');
smo34360.setAttribute('id', 'smo34360');
smo34360.setFont('Merriweather', 12, 'normal');
smo34360.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34359.addModifier(smo34360);
smo34360.addClass('lyric lyric-0');
const smo34361 = new VF.Annotation('da!');
smo34361.setAttribute('id', 'smo34361');
smo34361.setFont('Merriweather', 12, 'normal');
smo34361.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34359.addModifier(smo34361);
smo34361.addClass('lyric lyric-1');
smo34377v0ar.push(smo34359);
smo34377v0.addTickables(smo34377v0ar)
fmtsmo3437752.joinVoices([smo34377v0]);
const fmtsmo3549552 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo35495v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35495v0ar = [];
const smo35479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n"]}'))
noteHash['smo35479'] = smo35479;
smo35479.setAttribute('id', 'smo35479');
smo35479.addModifier(new VF.Dot(), 0);
smo35479.addModifier(new VF.Dot(), 1);
smo35495v0ar.push(smo35479);
smo35495v0.addTickables(smo35495v0ar)
fmtsmo3549552.joinVoices([smo35495v0]);
const fmtsmo3672952 = new VF.Formatter();
//
// voices and notes for stave 2 52
const smo36729v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36729v0ar = [];
const smo36713 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36713'] = smo36713;
smo36713.setAttribute('id', 'smo36713');
smo36713.addModifier(new VF.Dot(), 0);
smo36729v0ar.push(smo36713);
smo36729v0.addTickables(smo36729v0ar)
fmtsmo3672952.joinVoices([smo36729v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo43243 = smo34350.getStemDirection();
smo34350.setStemDirection(dirsmo43243);
smo34353.setStemDirection(dirsmo43243);
smo34356.setStemDirection(dirsmo43243);
const smo43243 = new VF.Beam([smo34350,smo34353,smo34356]);
 
// formatting measures in staff group smo36899
fmtsmo3437752.format([smo34377v0,smo35495v0,smo36729v0], 254);
const stavesmo34377 = new VF.Stave(870, 516.0266026666668, 268);
stavesmo34377.setAttribute('id', 'stavesmo34377');
stavesmo34377.setBegBarType(VF.Barline.type.NONE);
stavesmo34377.setContext(context);
stavesmo34377.draw();
smo34377v0.draw(context, stavesmo34377);
smo43243.setContext(context);
smo43243.draw();
const stavesmo35495 = new VF.Stave(870, 688.0266026666668, 268);
stavesmo35495.setAttribute('id', 'stavesmo35495');
stavesmo35495.setBegBarType(VF.Barline.type.NONE);
stavesmo35495.setContext(context);
stavesmo35495.draw();
smo35495v0.draw(context, stavesmo35495);
const stavesmo36729 = new VF.Stave(870, 780.0266026666668, 268);
stavesmo36729.setAttribute('id', 'stavesmo36729');
stavesmo36729.setBegBarType(VF.Barline.type.NONE);
stavesmo36729.setContext(context);
stavesmo36729.draw();
smo36729v0.draw(context, stavesmo36729);
const fmtsmo3439553 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo34395v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34395v0ar = [];
const smo34378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo34378'] = smo34378;
smo34378.setAttribute('id', 'smo34378');
smo34378.addModifier(new VF.Dot(), 0);
const smo34379 = new VF.Annotation('-');
smo34379.setAttribute('id', 'smo34379');
smo34379.setFont('Merriweather', 12, 'normal');
smo34379.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34378.addModifier(smo34379);
smo34379.addClass('lyric lyric-0 lyric-hyphen');
smo34395v0ar.push(smo34378);
smo34395v0.addTickables(smo34395v0ar)
fmtsmo3439553.joinVoices([smo34395v0]);
const fmtsmo3551253 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo35512v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35512v0ar = [];
const smo35496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n"]}'))
noteHash['smo35496'] = smo35496;
smo35496.setAttribute('id', 'smo35496');
smo35496.addModifier(new VF.Dot(), 0);
smo35496.addModifier(new VF.Dot(), 1);
smo35512v0ar.push(smo35496);
smo35512v0.addTickables(smo35512v0ar)
fmtsmo3551253.joinVoices([smo35512v0]);
const fmtsmo3674653 = new VF.Formatter();
//
// voices and notes for stave 2 53
const smo36746v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36746v0ar = [];
const smo36730 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36730'] = smo36730;
smo36730.setAttribute('id', 'smo36730');
smo36730.addModifier(new VF.Dot(), 0);
smo36746v0ar.push(smo36730);
smo36746v0.addTickables(smo36746v0ar)
fmtsmo3674653.joinVoices([smo36746v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3439553.format([smo34395v0,smo35512v0,smo36746v0], 58);
const stavesmo34395 = new VF.Stave(1138, 516.0266026666668, 72);
stavesmo34395.setAttribute('id', 'stavesmo34395');
stavesmo34395.setBegBarType(VF.Barline.type.NONE);
stavesmo34395.setContext(context);
stavesmo34395.draw();
smo34395v0.draw(context, stavesmo34395);
const stavesmo35512 = new VF.Stave(1138, 688.0266026666668, 72);
stavesmo35512.setAttribute('id', 'stavesmo35512');
stavesmo35512.setBegBarType(VF.Barline.type.NONE);
stavesmo35512.setContext(context);
stavesmo35512.draw();
smo35512v0.draw(context, stavesmo35512);
const stavesmo36746 = new VF.Stave(1138, 780.0266026666668, 72);
stavesmo36746.setAttribute('id', 'stavesmo36746');
stavesmo36746.setBegBarType(VF.Barline.type.NONE);
stavesmo36746.setContext(context);
stavesmo36746.draw();
smo36746v0.draw(context, stavesmo36746);
const rightsmo36899stavesmo343952 = new VF.StaveConnector(stavesmo34395, stavesmo36746).setType(0);
rightsmo36899stavesmo343952.setContext(context).draw();
const fmtsmo3441454 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo34414v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34414v0ar = [];
const smo34396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo34396'] = smo34396;
smo34396.setAttribute('id', 'smo34396');
smo34396.addModifier(new VF.Dot(), 0);
const smo34397 = new VF.Annotation('-');
smo34397.setAttribute('id', 'smo34397');
smo34397.setFont('Merriweather', 12, 'normal');
smo34397.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34396.addModifier(smo34397);
smo34397.addClass('lyric lyric-0 lyric-hyphen');
smo34414v0ar.push(smo34396);
smo34414v0.addTickables(smo34414v0ar)
fmtsmo3441454.joinVoices([smo34414v0]);
const fmtsmo3553354 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo35533v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35533v0ar = [];
const smo35513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo35513'] = smo35513;
smo35513.setAttribute('id', 'smo35513');
smo35533v0ar.push(smo35513);
const smo35514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo35514'] = smo35514;
smo35514.setAttribute('id', 'smo35514');
smo35533v0ar.push(smo35514);
const smo35515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo35515'] = smo35515;
smo35515.setAttribute('id', 'smo35515');
smo35533v0ar.push(smo35515);
const smo35516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo35516'] = smo35516;
smo35516.setAttribute('id', 'smo35516');
smo35533v0ar.push(smo35516);
smo35533v0.addTickables(smo35533v0ar)
fmtsmo3553354.joinVoices([smo35533v0]);
const fmtsmo3676754 = new VF.Formatter();
//
// voices and notes for stave 2 54
const smo36767v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36767v0ar = [];
const smo36747 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36747'] = smo36747;
smo36747.setAttribute('id', 'smo36747');
smo36767v0ar.push(smo36747);
const smo36748 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36748'] = smo36748;
smo36748.setAttribute('id', 'smo36748');
smo36767v0ar.push(smo36748);
const smo36749 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36749'] = smo36749;
smo36749.setAttribute('id', 'smo36749');
smo36767v0ar.push(smo36749);
const smo36750 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36750'] = smo36750;
smo36750.setAttribute('id', 'smo36750');
smo36767v0ar.push(smo36750);
smo36767v0.addTickables(smo36767v0ar)
fmtsmo3676754.joinVoices([smo36767v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3441454.format([smo34414v0,smo35533v0,smo36767v0], 111);
const stavesmo34414 = new VF.Stave(66, 909.0266026666668, 185);
stavesmo34414.setAttribute('id', 'stavesmo34414');
stavesmo34414.setBegBarType(1);
stavesmo34414.addClef('treble');
const keysmo34414 = new VF.KeySignature('G');
keysmo34414.addToStave(stavesmo34414);
stavesmo34414.setContext(context);
stavesmo34414.draw();
smo34414v0.draw(context, stavesmo34414);
const stavesmo35533 = new VF.Stave(66, 1030.0266026666668, 185);
stavesmo35533.setAttribute('id', 'stavesmo35533');
stavesmo35533.setBegBarType(1);
stavesmo35533.addClef('treble');
const keysmo35533 = new VF.KeySignature('G');
keysmo35533.addToStave(stavesmo35533);
stavesmo35533.setContext(context);
stavesmo35533.draw();
smo35533v0.draw(context, stavesmo35533);
const stavesmo36767 = new VF.Stave(66, 1106.0266026666668, 185);
stavesmo36767.setAttribute('id', 'stavesmo36767');
stavesmo36767.setBegBarType(1);
stavesmo36767.addClef('bass');
const keysmo36767 = new VF.KeySignature('G');
keysmo36767.addToStave(stavesmo36767);
stavesmo36767.setContext(context);
stavesmo36767.draw();
smo36767v0.draw(context, stavesmo36767);
const leftsmo36899stavesmo344142 = new VF.StaveConnector(stavesmo34414, stavesmo36767).setType(1);
leftsmo36899stavesmo344142.setContext(context).draw();
const fmtsmo3443155 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo34431v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34431v0ar = [];
const smo34415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo34415'] = smo34415;
smo34415.setAttribute('id', 'smo34415');
smo34415.addModifier(new VF.Dot(), 0);
smo34431v0ar.push(smo34415);
smo34431v0.addTickables(smo34431v0ar)
fmtsmo3443155.joinVoices([smo34431v0]);
const fmtsmo3555355 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo35553v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35553v0ar = [];
const smo35534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo35534'] = smo35534;
smo35534.setAttribute('id', 'smo35534');
smo35553v0ar.push(smo35534);
const smo35535 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo35535'] = smo35535;
smo35535.setAttribute('id', 'smo35535');
smo35553v0ar.push(smo35535);
const smo35536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo35536'] = smo35536;
smo35536.setAttribute('id', 'smo35536');
smo35553v0ar.push(smo35536);
const smo35537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo35537'] = smo35537;
smo35537.setAttribute('id', 'smo35537');
smo35553v0ar.push(smo35537);
smo35553v0.addTickables(smo35553v0ar)
fmtsmo3555355.joinVoices([smo35553v0]);
const fmtsmo3678755 = new VF.Formatter();
//
// voices and notes for stave 2 55
const smo36787v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36787v0ar = [];
const smo36768 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36768'] = smo36768;
smo36768.setAttribute('id', 'smo36768');
smo36787v0ar.push(smo36768);
const smo36769 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36769'] = smo36769;
smo36769.setAttribute('id', 'smo36769');
smo36787v0ar.push(smo36769);
const smo36770 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36770'] = smo36770;
smo36770.setAttribute('id', 'smo36770');
smo36787v0ar.push(smo36770);
const smo36771 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36771'] = smo36771;
smo36771.setAttribute('id', 'smo36771');
smo36787v0ar.push(smo36771);
smo36787v0.addTickables(smo36787v0ar)
fmtsmo3678755.joinVoices([smo36787v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3443155.format([smo34431v0,smo35553v0,smo36787v0], 106);
const stavesmo34431 = new VF.Stave(251, 909.0266026666668, 124);
stavesmo34431.setAttribute('id', 'stavesmo34431');
stavesmo34431.setBegBarType(VF.Barline.type.NONE);
stavesmo34431.setEndBarType(5);
stavesmo34431.setContext(context);
stavesmo34431.draw();
smo34431v0.draw(context, stavesmo34431);
const stavesmo35553 = new VF.Stave(251, 1030.0266026666668, 124);
stavesmo35553.setAttribute('id', 'stavesmo35553');
stavesmo35553.setBegBarType(VF.Barline.type.NONE);
stavesmo35553.setEndBarType(5);
stavesmo35553.setContext(context);
stavesmo35553.draw();
smo35553v0.draw(context, stavesmo35553);
const stavesmo36787 = new VF.Stave(251, 1106.0266026666668, 124);
stavesmo36787.setAttribute('id', 'stavesmo36787');
stavesmo36787.setBegBarType(VF.Barline.type.NONE);
stavesmo36787.setEndBarType(5);
stavesmo36787.setContext(context);
stavesmo36787.draw();
smo36787v0.draw(context, stavesmo36787);
const fmtsmo3445056 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo34450v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34450v0ar = [];
const smo34432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo34432'] = smo34432;
smo34432.setAttribute('id', 'smo34432');
smo34432.addModifier(new VF.Dot(), 0);
const smo34433 = new VF.Annotation('-');
smo34433.setAttribute('id', 'smo34433');
smo34433.setFont('Merriweather', 12, 'normal');
smo34433.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34432.addModifier(smo34433);
smo34433.addClass('lyric lyric-0 lyric-hyphen');
smo34450v0ar.push(smo34432);
smo34450v0.addTickables(smo34450v0ar)
fmtsmo3445056.joinVoices([smo34450v0]);
const fmtsmo3557256 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo35572v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35572v0ar = [];
const smo35554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo35554'] = smo35554;
smo35554.setAttribute('id', 'smo35554');
smo35554.addModifier(new VF.Dot(), 0);
smo35572v0ar.push(smo35554);
const smo35555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35555'] = smo35555;
smo35555.setAttribute('id', 'smo35555');
smo35555.addModifier(new VF.Dot(), 0);
smo35572v0ar.push(smo35555);
smo35572v0.addTickables(smo35572v0ar)
fmtsmo3557256.joinVoices([smo35572v0]);
const fmtsmo3680856 = new VF.Formatter();
//
// voices and notes for stave 2 56
const smo36808v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36808v0ar = [];
const smo36788 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36788'] = smo36788;
smo36788.setAttribute('id', 'smo36788');
smo36808v0ar.push(smo36788);
const smo36789 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36789'] = smo36789;
smo36789.setAttribute('id', 'smo36789');
smo36808v0ar.push(smo36789);
const smo36790 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36790'] = smo36790;
smo36790.setAttribute('id', 'smo36790');
smo36808v0ar.push(smo36790);
const smo36791 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36791'] = smo36791;
smo36791.setAttribute('id', 'smo36791');
smo36808v0ar.push(smo36791);
smo36808v0.addTickables(smo36808v0ar)
fmtsmo3680856.joinVoices([smo36808v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3445056.format([smo34450v0,smo35572v0,smo36808v0], 125);
const stavesmo34450 = new VF.Stave(375, 909.0266026666668, 139);
stavesmo34450.setAttribute('id', 'stavesmo34450');
stavesmo34450.setBegBarType(VF.Barline.type.NONE);
stavesmo34450.setContext(context);
stavesmo34450.draw();
smo34450v0.draw(context, stavesmo34450);
const stavesmo35572 = new VF.Stave(375, 1030.0266026666668, 139);
stavesmo35572.setAttribute('id', 'stavesmo35572');
stavesmo35572.setBegBarType(VF.Barline.type.NONE);
stavesmo35572.setContext(context);
stavesmo35572.draw();
smo35572v0.draw(context, stavesmo35572);
const stavesmo36808 = new VF.Stave(375, 1106.0266026666668, 139);
stavesmo36808.setAttribute('id', 'stavesmo36808');
stavesmo36808.setBegBarType(VF.Barline.type.NONE);
stavesmo36808.setContext(context);
stavesmo36808.draw();
smo36808v0.draw(context, stavesmo36808);
const fmtsmo3446857 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo34468v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34468v0ar = [];
const smo34451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo34451'] = smo34451;
smo34451.setAttribute('id', 'smo34451');
smo34451.addModifier(new VF.Dot(), 0);
const smo34452 = new VF.Annotation('-');
smo34452.setAttribute('id', 'smo34452');
smo34452.setFont('Merriweather', 12, 'normal');
smo34452.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34451.addModifier(smo34452);
smo34452.addClass('lyric lyric-0 lyric-hyphen');
smo34468v0ar.push(smo34451);
smo34468v0.addTickables(smo34468v0ar)
fmtsmo3446857.joinVoices([smo34468v0]);
const fmtsmo3559157 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo35591v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35591v0ar = [];
const smo35573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo35573'] = smo35573;
smo35573.setAttribute('id', 'smo35573');
smo35573.addModifier(new VF.Dot(), 0);
smo35591v0ar.push(smo35573);
const smo35574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo35574'] = smo35574;
smo35574.setAttribute('id', 'smo35574');
smo35591v0ar.push(smo35574);
const smo35575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35575'] = smo35575;
smo35575.setAttribute('id', 'smo35575');
smo35591v0ar.push(smo35575);
smo35591v0.addTickables(smo35591v0ar)
fmtsmo3559157.joinVoices([smo35591v0]);
const fmtsmo3682857 = new VF.Formatter();
//
// voices and notes for stave 2 57
const smo36828v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36828v0ar = [];
const smo36809 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36809'] = smo36809;
smo36809.setAttribute('id', 'smo36809');
smo36828v0ar.push(smo36809);
const smo36810 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36810'] = smo36810;
smo36810.setAttribute('id', 'smo36810');
smo36828v0ar.push(smo36810);
const smo36811 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36811'] = smo36811;
smo36811.setAttribute('id', 'smo36811');
smo36828v0ar.push(smo36811);
const smo36812 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36812'] = smo36812;
smo36812.setAttribute('id', 'smo36812');
smo36828v0ar.push(smo36812);
smo36828v0.addTickables(smo36828v0ar)
fmtsmo3682857.joinVoices([smo36828v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3446857.format([smo34468v0,smo35591v0,smo36828v0], 110);
const stavesmo34468 = new VF.Stave(514, 909.0266026666668, 124);
stavesmo34468.setAttribute('id', 'stavesmo34468');
stavesmo34468.setBegBarType(VF.Barline.type.NONE);
stavesmo34468.setContext(context);
stavesmo34468.draw();
smo34468v0.draw(context, stavesmo34468);
const stavesmo35591 = new VF.Stave(514, 1030.0266026666668, 124);
stavesmo35591.setAttribute('id', 'stavesmo35591');
stavesmo35591.setBegBarType(VF.Barline.type.NONE);
stavesmo35591.setContext(context);
stavesmo35591.draw();
smo35591v0.draw(context, stavesmo35591);
const stavesmo36828 = new VF.Stave(514, 1106.0266026666668, 124);
stavesmo36828.setAttribute('id', 'stavesmo36828');
stavesmo36828.setBegBarType(VF.Barline.type.NONE);
stavesmo36828.setContext(context);
stavesmo36828.draw();
smo36828v0.draw(context, stavesmo36828);
const fmtsmo3448658 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo34486v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34486v0ar = [];
const smo34469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo34469'] = smo34469;
smo34469.setAttribute('id', 'smo34469');
smo34469.addModifier(new VF.Dot(), 0);
const smo34470 = new VF.Annotation('-');
smo34470.setAttribute('id', 'smo34470');
smo34470.setFont('Merriweather', 12, 'normal');
smo34470.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34469.addModifier(smo34470);
smo34470.addClass('lyric lyric-0 lyric-hyphen');
smo34486v0ar.push(smo34469);
smo34486v0.addTickables(smo34486v0ar)
fmtsmo3448658.joinVoices([smo34486v0]);
const fmtsmo3561258 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo35612v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35612v0ar = [];
const smo35592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35592'] = smo35592;
smo35592.setAttribute('id', 'smo35592');
smo35612v0ar.push(smo35592);
const smo35593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35593'] = smo35593;
smo35593.setAttribute('id', 'smo35593');
smo35612v0ar.push(smo35593);
const smo35594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35594'] = smo35594;
smo35594.setAttribute('id', 'smo35594');
smo35612v0ar.push(smo35594);
const smo35595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35595'] = smo35595;
smo35595.setAttribute('id', 'smo35595');
smo35612v0ar.push(smo35595);
const smo35596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo35596'] = smo35596;
smo35596.setAttribute('id', 'smo35596');
smo35612v0ar.push(smo35596);
smo35612v0.addTickables(smo35612v0ar)
fmtsmo3561258.joinVoices([smo35612v0]);
const fmtsmo3684958 = new VF.Formatter();
//
// voices and notes for stave 2 58
const smo36849v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36849v0ar = [];
const smo36829 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n","an/3/n"]}'))
noteHash['smo36829'] = smo36829;
smo36829.setAttribute('id', 'smo36829');
smo36849v0ar.push(smo36829);
const smo36830 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo36830'] = smo36830;
smo36830.setAttribute('id', 'smo36830');
smo36849v0ar.push(smo36830);
const smo36831 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n","an/3/n"]}'))
noteHash['smo36831'] = smo36831;
smo36831.setAttribute('id', 'smo36831');
smo36849v0ar.push(smo36831);
const smo36832 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36832'] = smo36832;
smo36832.setAttribute('id', 'smo36832');
smo36849v0ar.push(smo36832);
const smo36833 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo36833'] = smo36833;
smo36833.setAttribute('id', 'smo36833');
smo36849v0ar.push(smo36833);
smo36849v0.addTickables(smo36849v0ar)
fmtsmo3684958.joinVoices([smo36849v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo43285 = smo35592.getStemDirection();
smo35592.setStemDirection(dirsmo43285);
smo35593.setStemDirection(dirsmo43285);
smo35594.setStemDirection(dirsmo43285);
const smo43285 = new VF.Beam([smo35592,smo35593,smo35594]);
const dirsmo43288 = smo36829.getStemDirection();
smo36829.setStemDirection(dirsmo43288);
smo36830.setStemDirection(dirsmo43288);
smo36831.setStemDirection(dirsmo43288);
const smo43288 = new VF.Beam([smo36829,smo36830,smo36831]);
 
// formatting measures in staff group smo36899
fmtsmo3448658.format([smo34486v0,smo35612v0,smo36849v0], 140);
const stavesmo34486 = new VF.Stave(638, 909.0266026666668, 154);
stavesmo34486.setAttribute('id', 'stavesmo34486');
stavesmo34486.setBegBarType(VF.Barline.type.NONE);
stavesmo34486.setContext(context);
stavesmo34486.draw();
smo34486v0.draw(context, stavesmo34486);
const stavesmo35612 = new VF.Stave(638, 1030.0266026666668, 154);
stavesmo35612.setAttribute('id', 'stavesmo35612');
stavesmo35612.setBegBarType(VF.Barline.type.NONE);
stavesmo35612.setContext(context);
stavesmo35612.draw();
smo35612v0.draw(context, stavesmo35612);
smo43285.setContext(context);
smo43285.draw();
const stavesmo36849 = new VF.Stave(638, 1106.0266026666668, 154);
stavesmo36849.setAttribute('id', 'stavesmo36849');
stavesmo36849.setBegBarType(VF.Barline.type.NONE);
stavesmo36849.setContext(context);
stavesmo36849.draw();
smo36849v0.draw(context, stavesmo36849);
smo43288.setContext(context);
smo43288.draw();
const fmtsmo3450459 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo34504v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34504v0ar = [];
const smo34487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo34487'] = smo34487;
smo34487.setAttribute('id', 'smo34487');
smo34487.addModifier(new VF.Dot(), 0);
const smo34488 = new VF.Annotation('-');
smo34488.setAttribute('id', 'smo34488');
smo34488.setFont('Merriweather', 12, 'normal');
smo34488.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34487.addModifier(smo34488);
smo34488.addClass('lyric lyric-0 lyric-hyphen');
smo34504v0ar.push(smo34487);
smo34504v0.addTickables(smo34504v0ar)
fmtsmo3450459.joinVoices([smo34504v0]);
const fmtsmo3562959 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo35629v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35629v0ar = [];
const smo35613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35613'] = smo35613;
smo35613.setAttribute('id', 'smo35613');
smo35613.addModifier(new VF.Dot(), 0);
smo35629v0ar.push(smo35613);
smo35629v0.addTickables(smo35629v0ar)
fmtsmo3562959.joinVoices([smo35629v0]);
const fmtsmo3686659 = new VF.Formatter();
//
// voices and notes for stave 2 59
const smo36866v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36866v0ar = [];
const smo36850 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n","gn/3/n","bn/3/n"]}'))
noteHash['smo36850'] = smo36850;
smo36850.setAttribute('id', 'smo36850');
smo36850.addModifier(new VF.Dot(), 0);
smo36850.addModifier(new VF.Dot(), 1);
smo36850.addModifier(new VF.Dot(), 2);
smo36866v0ar.push(smo36850);
smo36866v0.addTickables(smo36866v0ar)
fmtsmo3686659.joinVoices([smo36866v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3450459.format([smo34504v0,smo35629v0,smo36866v0], 28);
const stavesmo34504 = new VF.Stave(792, 909.0266026666668, 42);
stavesmo34504.setAttribute('id', 'stavesmo34504');
stavesmo34504.setBegBarType(VF.Barline.type.NONE);
stavesmo34504.setContext(context);
stavesmo34504.draw();
smo34504v0.draw(context, stavesmo34504);
const stavesmo35629 = new VF.Stave(792, 1030.0266026666668, 42);
stavesmo35629.setAttribute('id', 'stavesmo35629');
stavesmo35629.setBegBarType(VF.Barline.type.NONE);
stavesmo35629.setContext(context);
stavesmo35629.draw();
smo35629v0.draw(context, stavesmo35629);
const stavesmo36866 = new VF.Stave(792, 1106.0266026666668, 42);
stavesmo36866.setAttribute('id', 'stavesmo36866');
stavesmo36866.setBegBarType(VF.Barline.type.NONE);
stavesmo36866.setContext(context);
stavesmo36866.draw();
smo36866v0.draw(context, stavesmo36866);
const fmtsmo3452160 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo34521v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34521v0ar = [];
const smo34505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34505'] = smo34505;
smo34505.setAttribute('id', 'smo34505');
smo34505.addModifier(new VF.Dot(), 0);
smo34521v0ar.push(smo34505);
smo34521v0.addTickables(smo34521v0ar)
fmtsmo3452160.joinVoices([smo34521v0]);
const fmtsmo3564860 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo35648v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35648v0ar = [];
const smo35630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo35630'] = smo35630;
smo35630.setAttribute('id', 'smo35630');
smo35648v0ar.push(smo35630);
const smo35631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
noteHash['smo35631'] = smo35631;
smo35631.setAttribute('id', 'smo35631');
smo35648v0ar.push(smo35631);
const smo35632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
noteHash['smo35632'] = smo35632;
smo35632.setAttribute('id', 'smo35632');
smo35632.addModifier(new VF.Dot(), 0);
smo35648v0ar.push(smo35632);
smo35648v0.addTickables(smo35648v0ar)
fmtsmo3564860.joinVoices([smo35648v0]);
const fmtsmo3688560 = new VF.Formatter();
//
// voices and notes for stave 2 60
const smo36885v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36885v0ar = [];
const smo36867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","bn/2/n","dn/3/n","gn/3/n"]}'))
noteHash['smo36867'] = smo36867;
smo36867.setAttribute('id', 'smo36867');
smo36885v0ar.push(smo36867);
const smo36868 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36868'] = smo36868;
smo36868.setAttribute('id', 'smo36868');
smo36885v0ar.push(smo36868);
const smo36869 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36869'] = smo36869;
smo36869.setAttribute('id', 'smo36869');
smo36869.addModifier(new VF.Dot(), 0);
smo36885v0ar.push(smo36869);
smo36885v0.addTickables(smo36885v0ar)
fmtsmo3688560.joinVoices([smo36885v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3452160.format([smo34521v0,smo35648v0,smo36885v0], 89);
const stavesmo34521 = new VF.Stave(834, 909.0266026666668, 111);
stavesmo34521.setAttribute('id', 'stavesmo34521');
stavesmo34521.setBegBarType(VF.Barline.type.NONE);
stavesmo34521.setEndBarType(3);
stavesmo34521.setContext(context);
stavesmo34521.draw();
smo34521v0.draw(context, stavesmo34521);
const stavesmo35648 = new VF.Stave(834, 1030.0266026666668, 111);
stavesmo35648.setAttribute('id', 'stavesmo35648');
stavesmo35648.setBegBarType(VF.Barline.type.NONE);
stavesmo35648.setEndBarType(3);
stavesmo35648.setContext(context);
stavesmo35648.draw();
smo35648v0.draw(context, stavesmo35648);
const stavesmo36885 = new VF.Stave(834, 1106.0266026666668, 111);
stavesmo36885.setAttribute('id', 'stavesmo36885');
stavesmo36885.setBegBarType(VF.Barline.type.NONE);
stavesmo36885.setEndBarType(3);
stavesmo36885.setContext(context);
stavesmo36885.draw();
smo36885v0.draw(context, stavesmo36885);
const smo34523 = new VF.StaveTie({ first_note: smo34396, last_note: smo34415, first_indices: [0], last_indices: [0]});
smo34523.setContext(context).draw();
const smo34524 = new VF.StaveTie({ first_note: smo34359, last_note: smo34378, first_indices: [0], last_indices: [0]});
smo34524.setContext(context).draw();
const smo34525 = new VF.StaveTie({ first_note: smo34432, last_note: smo34451, first_indices: [0], last_indices: [0]});
smo34525.setContext(context).draw();
const smo34526 = new VF.StaveTie({ first_note: smo34469, last_note: smo34487, first_indices: [0], last_indices: [0]});
smo34526.setContext(context).draw();
const smo34527 = new VF.StaveTie({ first_note: smo34257, last_note: smo34276, first_indices: [0], last_indices: [0]});
smo34527.setContext(context).draw();
const smo34528 = new VF.StaveTie({ first_note: smo34309, last_note: smo34328, first_indices: [0], last_indices: [0]});
smo34528.setContext(context).draw();
const smo34529 = new VF.StaveTie({ first_note: smo34208, last_note: smo34227, first_indices: [0], last_indices: [0]});
smo34529.setContext(context).draw();
const smo35655 = new VF.StaveTie({ first_note: smo35331, last_note: smo35348, first_indices: [0,1], last_indices: [0,1]});
smo35655.setContext(context).draw();
const smo35657 = new VF.StaveTie({ first_note: smo35479, last_note: smo35496, first_indices: [0,1], last_indices: [0,1]});
smo35657.setContext(context).draw();
const smo36889 = new VF.StaveTie({ first_note: smo36713, last_note: smo36730, first_indices: [0], last_indices: [0]});
smo36889.setContext(context).draw();
const smo34398smo34414 = new VF.Volta(2, '1', 66, 20);
smo34398smo34414.setContext(context).draw(stavesmo34414, -1 * 0);
const smo34398smo34431 = new VF.Volta(4, '1', 251, 20);
smo34398smo34431.setContext(context).draw(stavesmo34431, -1 * 0);
const smo34434smo34450 = new VF.Volta(2, '2', 375, 20);
smo34434smo34450.setContext(context).draw(stavesmo34450, -1 * 0);
const smo34434smo34468 = new VF.Volta(4, '2', 514, 20);
smo34434smo34468.setContext(context).draw(stavesmo34468, -1 * 0);
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo34139').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo34140').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo34143').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo34161').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo34162').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo34164').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo34165').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo34167').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo34168').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo34170').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo34171').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo34190').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo34191').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo34209').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo34210').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo34230').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo34231').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo34233').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo34234').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo34236').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo34237').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo34239').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo34240').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo34258').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo34259').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo34277').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo34280').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo34282').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo34283').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo34285').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo34286').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo34288').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo34289').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo34307').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo34308').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo34310').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo34311').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo34329').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo34332').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo34333').setAttributeNS('', 'transform', 'translate(0 31)');
context.svg.getElementById('vf-smo34351').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo34352').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo34354').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo34355').setAttributeNS('', 'transform', 'translate(0 31)');
context.svg.getElementById('vf-smo34357').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo34358').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo34360').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo34361').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo34379').setAttributeNS('', 'transform', 'translate(0 16)');
}
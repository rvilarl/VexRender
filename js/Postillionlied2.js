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
const fmtsmo3938522 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo39385v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39385v0ar = [];
const smo39367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo39367'] = smo39367;
smo39367.setAttribute('id', 'smo39367');
smo39367.addModifier(new VF.Dot(), 0);
const smo39368 = new VF.Annotation('bläst');
smo39368.setAttribute('id', 'smo39368');
smo39368.setFont('Merriweather', 12, 'normal');
smo39368.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39367.addModifier(smo39368);
smo39368.addClass('lyric lyric-0 lyric-hyphen');
const smo39369 = new VF.Annotation('Herz');
smo39369.setAttribute('id', 'smo39369');
smo39369.setFont('Merriweather', 12, 'normal');
smo39369.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39367.addModifier(smo39369);
smo39369.addClass('lyric lyric-1');
smo39385v0ar.push(smo39367);
smo39385v0.addTickables(smo39385v0ar)
fmtsmo3938522.joinVoices([smo39385v0]);
const fmtsmo4069422 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo40694v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40694v0ar = [];
const smo40678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo40678'] = smo40678;
smo40678.setAttribute('id', 'smo40678');
smo40678.addModifier(new VF.Dot(), 0);
smo40694v0ar.push(smo40678);
smo40694v0.addTickables(smo40694v0ar)
fmtsmo4069422.joinVoices([smo40694v0]);
const fmtsmo4187122 = new VF.Formatter();
//
// voices and notes for stave 2 22
const smo41871v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41871v0ar = [];
const smo41855 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo41855'] = smo41855;
smo41855.setAttribute('id', 'smo41855');
smo41855.addModifier(new VF.Dot(), 0);
smo41871v0ar.push(smo41855);
smo41871v0.addTickables(smo41871v0ar)
fmtsmo4187122.joinVoices([smo41871v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3938522.format([smo39385v0,smo40694v0,smo41871v0], 60);
const stavesmo39385 = new VF.Stave(66, 107.5133013333334, 134);
stavesmo39385.setAttribute('id', 'stavesmo39385');
stavesmo39385.setBegBarType(1);
stavesmo39385.addClef('treble');
const keysmo39385 = new VF.KeySignature('G');
keysmo39385.addToStave(stavesmo39385);
stavesmo39385.setContext(context);
stavesmo39385.draw();
smo39385v0.draw(context, stavesmo39385);
const stavesmo40694 = new VF.Stave(66, 214.5133013333334, 134);
stavesmo40694.setAttribute('id', 'stavesmo40694');
stavesmo40694.setBegBarType(1);
stavesmo40694.addClef('treble');
const keysmo40694 = new VF.KeySignature('G');
keysmo40694.addToStave(stavesmo40694);
stavesmo40694.setContext(context);
stavesmo40694.draw();
smo40694v0.draw(context, stavesmo40694);
const stavesmo41871 = new VF.Stave(66, 285.5133013333334, 134);
stavesmo41871.setAttribute('id', 'stavesmo41871');
stavesmo41871.setBegBarType(1);
stavesmo41871.addClef('bass');
const keysmo41871 = new VF.KeySignature('G');
keysmo41871.addToStave(stavesmo41871);
stavesmo41871.setContext(context);
stavesmo41871.draw();
smo41871v0.draw(context, stavesmo41871);
const leftsmo42632stavesmo393852 = new VF.StaveConnector(stavesmo39385, stavesmo41871).setType(1);
leftsmo42632stavesmo393852.setContext(context).draw();
const fmtsmo3941223 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo39412v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39412v0ar = [];
const smo39386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo39386'] = smo39386;
smo39386.setAttribute('id', 'smo39386');
smo39412v0ar.push(smo39386);
const smo39388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo39388'] = smo39388;
smo39388.setAttribute('id', 'smo39388');
const smo39389 = new VF.Annotation('sein');
smo39389.setAttribute('id', 'smo39389');
smo39389.setFont('Merriweather', 12, 'normal');
smo39389.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39388.addModifier(smo39389);
smo39389.addClass('lyric lyric-0');
const smo39390 = new VF.Annotation('be');
smo39390.setAttribute('id', 'smo39390');
smo39390.setFont('Merriweather', 12, 'normal');
smo39390.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39388.addModifier(smo39390);
smo39390.addClass('lyric lyric-1 lyric-hyphen');
smo39412v0ar.push(smo39388);
const smo39391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo39391'] = smo39391;
smo39391.setAttribute('id', 'smo39391');
const smo39392 = new VF.Annotation('Horn');
smo39392.setAttribute('id', 'smo39392');
smo39392.setFont('Merriweather', 12, 'normal');
smo39392.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39391.addModifier(smo39392);
smo39392.addClass('lyric lyric-0');
const smo39393 = new VF.Annotation('glei');
smo39393.setAttribute('id', 'smo39393');
smo39393.setFont('Merriweather', 12, 'normal');
smo39393.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39391.addModifier(smo39393);
smo39393.addClass('lyric lyric-1 lyric-hyphen');
smo39412v0ar.push(smo39391);
const smo39394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo39394'] = smo39394;
smo39394.setAttribute('id', 'smo39394');
const smo39395 = new VF.Annotation('mit');
smo39395.setAttribute('id', 'smo39395');
smo39395.setFont('Merriweather', 12, 'normal');
smo39395.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39394.addModifier(smo39395);
smo39395.addClass('lyric lyric-0');
const smo39396 = new VF.Annotation('tet');
smo39396.setAttribute('id', 'smo39396');
smo39396.setFont('Merriweather', 12, 'normal');
smo39396.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39394.addModifier(smo39396);
smo39396.addClass('lyric lyric-1');
smo39412v0ar.push(smo39394);
smo39412v0.addTickables(smo39412v0ar)
fmtsmo3941223.joinVoices([smo39412v0]);
const fmtsmo4071123 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo40711v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40711v0ar = [];
const smo40695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n","bn/4/n"]}'))
noteHash['smo40695'] = smo40695;
smo40695.setAttribute('id', 'smo40695');
smo40695.addModifier(new VF.Dot(), 0);
smo40695.addModifier(new VF.Dot(), 1);
smo40711v0ar.push(smo40695);
smo40711v0.addTickables(smo40711v0ar)
fmtsmo4071123.joinVoices([smo40711v0]);
const fmtsmo4188823 = new VF.Formatter();
//
// voices and notes for stave 2 23
const smo41888v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41888v0ar = [];
const smo41872 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
noteHash['smo41872'] = smo41872;
smo41872.setAttribute('id', 'smo41872');
const smo418720acc = new VF.Accidental('#');
smo41872.addModifier(smo418720acc, 0);
smo41872.addModifier(new VF.Dot(), 0);
smo41888v0ar.push(smo41872);
smo41888v0.addTickables(smo41888v0ar)
fmtsmo4188823.joinVoices([smo41888v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3941223.format([smo39412v0,smo40711v0,smo41888v0], 239);
const stavesmo39412 = new VF.Stave(200, 107.5133013333334, 253);
stavesmo39412.setAttribute('id', 'stavesmo39412');
stavesmo39412.setBegBarType(VF.Barline.type.NONE);
stavesmo39412.setContext(context);
stavesmo39412.draw();
smo39412v0.draw(context, stavesmo39412);
const stavesmo40711 = new VF.Stave(200, 214.5133013333334, 253);
stavesmo40711.setAttribute('id', 'stavesmo40711');
stavesmo40711.setBegBarType(VF.Barline.type.NONE);
stavesmo40711.setContext(context);
stavesmo40711.draw();
smo40711v0.draw(context, stavesmo40711);
const stavesmo41888 = new VF.Stave(200, 285.5133013333334, 253);
stavesmo41888.setAttribute('id', 'stavesmo41888');
stavesmo41888.setBegBarType(VF.Barline.type.NONE);
stavesmo41888.setContext(context);
stavesmo41888.draw();
smo41888v0.draw(context, stavesmo41888);
const fmtsmo3943424 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo39434v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39434v0ar = [];
const smo39413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo39413'] = smo39413;
smo39413.setAttribute('id', 'smo39413');
smo39413.addModifier(new VF.Dot(), 0);
const smo39414 = new VF.Annotation('hel');
smo39414.setAttribute('id', 'smo39414');
smo39414.setFont('Merriweather', 12, 'normal');
smo39414.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39413.addModifier(smo39414);
smo39414.addClass('lyric lyric-0 lyric-hyphen');
const smo39415 = new VF.Annotation('ihn');
smo39415.setAttribute('id', 'smo39415');
smo39415.setFont('Merriweather', 12, 'normal');
smo39415.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39413.addModifier(smo39415);
smo39415.addClass('lyric lyric-1');
smo39434v0ar.push(smo39413);
const smo39416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo39416'] = smo39416;
smo39416.setAttribute('id', 'smo39416');
smo39416.addModifier(new VF.Dot(), 0);
const smo39417 = new VF.Annotation('lem');
smo39417.setAttribute('id', 'smo39417');
smo39417.setFont('Merriweather', 12, 'normal');
smo39417.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39416.addModifier(smo39417);
smo39417.addClass('lyric lyric-0');
const smo39418 = new VF.Annotation('hin');
smo39418.setAttribute('id', 'smo39418');
smo39418.setFont('Merriweather', 12, 'normal');
smo39418.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39416.addModifier(smo39418);
smo39418.addClass('lyric lyric-1 lyric-hyphen');
smo39434v0ar.push(smo39416);
smo39434v0.addTickables(smo39434v0ar)
fmtsmo3943424.joinVoices([smo39434v0]);
const fmtsmo4072824 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo40728v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40728v0ar = [];
const smo40712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","an/4/n"]}'))
noteHash['smo40712'] = smo40712;
smo40712.setAttribute('id', 'smo40712');
smo40712.addModifier(new VF.Dot(), 0);
smo40712.addModifier(new VF.Dot(), 1);
smo40728v0ar.push(smo40712);
smo40728v0.addTickables(smo40728v0ar)
fmtsmo4072824.joinVoices([smo40728v0]);
const fmtsmo4190624 = new VF.Formatter();
//
// voices and notes for stave 2 24
const smo41906v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41906v0ar = [];
const smo41889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo41889'] = smo41889;
smo41889.setAttribute('id', 'smo41889');
smo41889.addModifier(new VF.Dot(), 0);
smo41906v0ar.push(smo41889);
const smo41890 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
noteHash['smo41890'] = smo41890;
smo41890.setAttribute('id', 'smo41890');
smo41890.addModifier(new VF.Dot(), 0);
smo41906v0ar.push(smo41890);
smo41906v0.addTickables(smo41906v0ar)
fmtsmo4190624.joinVoices([smo41906v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3943424.format([smo39434v0,smo40728v0,smo41906v0], 107);
const stavesmo39434 = new VF.Stave(453, 107.5133013333334, 121);
stavesmo39434.setAttribute('id', 'stavesmo39434');
stavesmo39434.setBegBarType(VF.Barline.type.NONE);
stavesmo39434.setContext(context);
stavesmo39434.draw();
smo39434v0.draw(context, stavesmo39434);
const stavesmo40728 = new VF.Stave(453, 214.5133013333334, 121);
stavesmo40728.setAttribute('id', 'stavesmo40728');
stavesmo40728.setBegBarType(VF.Barline.type.NONE);
stavesmo40728.setContext(context);
stavesmo40728.draw();
smo40728v0.draw(context, stavesmo40728);
const stavesmo41906 = new VF.Stave(453, 285.5133013333334, 121);
stavesmo41906.setAttribute('id', 'stavesmo41906');
stavesmo41906.setBegBarType(VF.Barline.type.NONE);
stavesmo41906.setContext(context);
stavesmo41906.draw();
smo41906v0.draw(context, stavesmo41906);
const fmtsmo3945825 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo39458v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39458v0ar = [];
const smo39435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo39435'] = smo39435;
smo39435.setAttribute('id', 'smo39435');
smo39435.addModifier(new VF.Dot(), 0);
const smo39437 = new VF.Annotation('Ton,');
smo39437.setAttribute('id', 'smo39437');
smo39437.setFont('Merriweather', 12, 'normal');
smo39437.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39435.addModifier(smo39437);
smo39437.addClass('lyric lyric-0');
const smo39436 = new VF.Annotation('aus');
smo39436.setAttribute('id', 'smo39436');
smo39436.setFont('Merriweather', 12, 'normal');
smo39436.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39435.addModifier(smo39436);
smo39436.addClass('lyric lyric-1');
smo39458v0ar.push(smo39435);
const smo39438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo39438'] = smo39438;
smo39438.setAttribute('id', 'smo39438');
const smo39439 = new VF.Annotation('-');
smo39439.setAttribute('id', 'smo39439');
smo39439.setFont('Merriweather', 12, 'normal');
smo39439.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39438.addModifier(smo39439);
smo39439.addClass('lyric lyric-0 lyric-hyphen');
smo39458v0ar.push(smo39438);
const smo39440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/5/n"]}'))
noteHash['smo39440'] = smo39440;
smo39440.setAttribute('id', 'smo39440');
const smo394400acc = new VF.Accidental('#');
smo39440.addModifier(smo394400acc, 0);
const smo39441 = new VF.Annotation('so');
smo39441.setAttribute('id', 'smo39441');
smo39441.setFont('Merriweather', 12, 'normal');
smo39441.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39440.addModifier(smo39441);
smo39441.addClass('lyric lyric-0');
const smo39442 = new VF.Annotation('und');
smo39442.setAttribute('id', 'smo39442');
smo39442.setFont('Merriweather', 12, 'normal');
smo39442.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39440.addModifier(smo39442);
smo39442.addClass('lyric lyric-1');
smo39458v0ar.push(smo39440);
smo39458v0.addTickables(smo39458v0ar)
fmtsmo3945825.joinVoices([smo39458v0]);
const fmtsmo4074625 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo40746v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40746v0ar = [];
const smo40729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","an/4/n"]}'))
noteHash['smo40729'] = smo40729;
smo40729.setAttribute('id', 'smo40729');
smo40729.addModifier(new VF.Dot(), 0);
smo40729.addModifier(new VF.Dot(), 1);
smo40746v0ar.push(smo40729);
const smo40730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo40730'] = smo40730;
smo40730.setAttribute('id', 'smo40730');
smo40730.addModifier(new VF.Dot(), 0);
smo40746v0ar.push(smo40730);
smo40746v0.addTickables(smo40746v0ar)
fmtsmo4074625.joinVoices([smo40746v0]);
const fmtsmo4192425 = new VF.Formatter();
//
// voices and notes for stave 2 25
const smo41924v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41924v0ar = [];
const smo41907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo41907'] = smo41907;
smo41907.setAttribute('id', 'smo41907');
smo41907.addModifier(new VF.Dot(), 0);
smo41924v0ar.push(smo41907);
const smo41908 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["d#/3/n"]}'))
noteHash['smo41908'] = smo41908;
smo41908.setAttribute('id', 'smo41908');
const smo419080acc = new VF.Accidental('#');
smo41908.addModifier(smo419080acc, 0);
smo41908.addModifier(new VF.Dot(), 0);
smo41924v0ar.push(smo41908);
smo41924v0.addTickables(smo41924v0ar)
fmtsmo4192425.joinVoices([smo41924v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3945825.format([smo39458v0,smo40746v0,smo41924v0], 169);
const stavesmo39458 = new VF.Stave(574, 107.5133013333334, 183);
stavesmo39458.setAttribute('id', 'stavesmo39458');
stavesmo39458.setBegBarType(VF.Barline.type.NONE);
stavesmo39458.setContext(context);
stavesmo39458.draw();
smo39458v0.draw(context, stavesmo39458);
const stavesmo40746 = new VF.Stave(574, 214.5133013333334, 183);
stavesmo40746.setAttribute('id', 'stavesmo40746');
stavesmo40746.setBegBarType(VF.Barline.type.NONE);
stavesmo40746.setContext(context);
stavesmo40746.draw();
smo40746v0.draw(context, stavesmo40746);
const stavesmo41924 = new VF.Stave(574, 285.5133013333334, 183);
stavesmo41924.setAttribute('id', 'stavesmo41924');
stavesmo41924.setBegBarType(VF.Barline.type.NONE);
stavesmo41924.setContext(context);
stavesmo41924.draw();
smo41924v0.draw(context, stavesmo41924);
const fmtsmo3947726 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo39477v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39477v0ar = [];
const smo39459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39459'] = smo39459;
smo39459.setAttribute('id', 'smo39459');
smo39459.addModifier(new VF.Dot(), 0);
const smo39460 = new VF.Annotation('schön');
smo39460.setAttribute('id', 'smo39460');
smo39460.setFont('Merriweather', 12, 'normal');
smo39460.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39459.addModifier(smo39460);
smo39460.addClass('lyric lyric-0');
const smo39461 = new VF.Annotation('führt');
smo39461.setAttribute('id', 'smo39461');
smo39461.setFont('Merriweather', 12, 'normal');
smo39461.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39459.addModifier(smo39461);
smo39461.addClass('lyric lyric-1');
smo39477v0ar.push(smo39459);
smo39477v0.addTickables(smo39477v0ar)
fmtsmo3947726.joinVoices([smo39477v0]);
const fmtsmo4076326 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo40763v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40763v0ar = [];
const smo40747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo40747'] = smo40747;
smo40747.setAttribute('id', 'smo40747');
smo40747.addModifier(new VF.Dot(), 0);
smo40763v0ar.push(smo40747);
smo40763v0.addTickables(smo40763v0ar)
fmtsmo4076326.joinVoices([smo40763v0]);
const fmtsmo4194126 = new VF.Formatter();
//
// voices and notes for stave 2 26
const smo41941v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41941v0ar = [];
const smo41925 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo41925'] = smo41925;
smo41925.setAttribute('id', 'smo41925');
smo41925.addModifier(new VF.Dot(), 0);
smo41941v0ar.push(smo41925);
smo41941v0.addTickables(smo41941v0ar)
fmtsmo4194126.joinVoices([smo41941v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3947726.format([smo39477v0,smo40763v0,smo41941v0], 72);
const stavesmo39477 = new VF.Stave(757, 107.5133013333334, 86);
stavesmo39477.setAttribute('id', 'stavesmo39477');
stavesmo39477.setBegBarType(VF.Barline.type.NONE);
stavesmo39477.setContext(context);
stavesmo39477.draw();
smo39477v0.draw(context, stavesmo39477);
const stavesmo40763 = new VF.Stave(757, 214.5133013333334, 86);
stavesmo40763.setAttribute('id', 'stavesmo40763');
stavesmo40763.setBegBarType(VF.Barline.type.NONE);
stavesmo40763.setContext(context);
stavesmo40763.draw();
smo40763v0.draw(context, stavesmo40763);
const stavesmo41941 = new VF.Stave(757, 285.5133013333334, 86);
stavesmo41941.setAttribute('id', 'stavesmo41941');
stavesmo41941.setBegBarType(VF.Barline.type.NONE);
stavesmo41941.setContext(context);
stavesmo41941.draw();
smo41941v0.draw(context, stavesmo41941);
const fmtsmo3950427 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo39504v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39504v0ar = [];
const smo39478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39478'] = smo39478;
smo39478.setAttribute('id', 'smo39478');
const smo39479 = new VF.Annotation('-');
smo39479.setAttribute('id', 'smo39479');
smo39479.setFont('Merriweather', 12, 'normal');
smo39479.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39478.addModifier(smo39479);
smo39479.addClass('lyric lyric-0 lyric-hyphen');
smo39504v0ar.push(smo39478);
const smo39480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39480'] = smo39480;
smo39480.setAttribute('id', 'smo39480');
const smo39481 = new VF.Annotation('wie');
smo39481.setAttribute('id', 'smo39481');
smo39481.setFont('Merriweather', 12, 'normal');
smo39481.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39480.addModifier(smo39481);
smo39481.addClass('lyric lyric-0');
const smo39482 = new VF.Annotation('ihn');
smo39482.setAttribute('id', 'smo39482');
smo39482.setFont('Merriweather', 12, 'normal');
smo39482.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39480.addModifier(smo39482);
smo39482.addClass('lyric lyric-1');
smo39504v0ar.push(smo39480);
const smo39483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39483'] = smo39483;
smo39483.setAttribute('id', 'smo39483');
const smo39484 = new VF.Annotation('sonst');
smo39484.setAttribute('id', 'smo39484');
smo39484.setFont('Merriweather', 12, 'normal');
smo39484.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39483.addModifier(smo39484);
smo39484.addClass('lyric lyric-0');
const smo39485 = new VF.Annotation('mir');
smo39485.setAttribute('id', 'smo39485');
smo39485.setFont('Merriweather', 12, 'normal');
smo39485.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39483.addModifier(smo39485);
smo39485.addClass('lyric lyric-1');
smo39504v0ar.push(smo39483);
const smo39486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39486'] = smo39486;
smo39486.setAttribute('id', 'smo39486');
const smo39487 = new VF.Annotation('kein');
smo39487.setAttribute('id', 'smo39487');
smo39487.setFont('Merriweather', 12, 'normal');
smo39487.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39486.addModifier(smo39487);
smo39487.addClass('lyric lyric-0');
const smo39488 = new VF.Annotation('zu');
smo39488.setAttribute('id', 'smo39488');
smo39488.setFont('Merriweather', 12, 'normal');
smo39488.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39486.addModifier(smo39488);
smo39488.addClass('lyric lyric-1 lyric-hyphen');
smo39504v0ar.push(smo39486);
smo39504v0.addTickables(smo39504v0ar)
fmtsmo3950427.joinVoices([smo39504v0]);
const fmtsmo4078027 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo40780v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40780v0ar = [];
const smo40764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo40764'] = smo40764;
smo40764.setAttribute('id', 'smo40764');
smo40764.addModifier(new VF.Dot(), 0);
smo40780v0ar.push(smo40764);
smo40780v0.addTickables(smo40780v0ar)
fmtsmo4078027.joinVoices([smo40780v0]);
const fmtsmo4195827 = new VF.Formatter();
//
// voices and notes for stave 2 27
const smo41958v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41958v0ar = [];
const smo41942 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo41942'] = smo41942;
smo41942.setAttribute('id', 'smo41942');
smo41942.addModifier(new VF.Dot(), 0);
smo41958v0ar.push(smo41942);
smo41958v0.addTickables(smo41958v0ar)
fmtsmo4195827.joinVoices([smo41958v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3950427.format([smo39504v0,smo40780v0,smo41958v0], 230);
const stavesmo39504 = new VF.Stave(843, 107.5133013333334, 244);
stavesmo39504.setAttribute('id', 'stavesmo39504');
stavesmo39504.setBegBarType(VF.Barline.type.NONE);
stavesmo39504.setContext(context);
stavesmo39504.draw();
smo39504v0.draw(context, stavesmo39504);
const stavesmo40780 = new VF.Stave(843, 214.5133013333334, 244);
stavesmo40780.setAttribute('id', 'stavesmo40780');
stavesmo40780.setBegBarType(VF.Barline.type.NONE);
stavesmo40780.setContext(context);
stavesmo40780.draw();
smo40780v0.draw(context, stavesmo40780);
const stavesmo41958 = new VF.Stave(843, 285.5133013333334, 244);
stavesmo41958.setAttribute('id', 'stavesmo41958');
stavesmo41958.setBegBarType(VF.Barline.type.NONE);
stavesmo41958.setContext(context);
stavesmo41958.draw();
smo41958v0.draw(context, stavesmo41958);
const fmtsmo3952628 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo39526v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39526v0ar = [];
const smo39505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39505'] = smo39505;
smo39505.setAttribute('id', 'smo39505');
smo39505.addModifier(new VF.Dot(), 0);
const smo39506 = new VF.Annotation('Po');
smo39506.setAttribute('id', 'smo39506');
smo39506.setFont('Merriweather', 12, 'normal');
smo39506.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39505.addModifier(smo39506);
smo39506.addClass('lyric lyric-0 lyric-hyphen');
const smo39507 = new VF.Annotation('rück');
smo39507.setAttribute('id', 'smo39507');
smo39507.setFont('Merriweather', 12, 'normal');
smo39507.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39505.addModifier(smo39507);
smo39507.addClass('lyric lyric-1');
smo39526v0ar.push(smo39505);
const smo39508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo39508'] = smo39508;
smo39508.setAttribute('id', 'smo39508');
smo39508.addModifier(new VF.Dot(), 0);
const smo39509 = new VF.Annotation('stil');
smo39509.setAttribute('id', 'smo39509');
smo39509.setFont('Merriweather', 12, 'normal');
smo39509.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39508.addModifier(smo39509);
smo39509.addClass('lyric lyric-0 lyric-hyphen');
const smo39510 = new VF.Annotation('ins');
smo39510.setAttribute('id', 'smo39510');
smo39510.setFont('Merriweather', 12, 'normal');
smo39510.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39508.addModifier(smo39510);
smo39510.addClass('lyric lyric-1');
smo39526v0ar.push(smo39508);
smo39526v0.addTickables(smo39526v0ar)
fmtsmo3952628.joinVoices([smo39526v0]);
const fmtsmo4079728 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo40797v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40797v0ar = [];
const smo40781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","bn/4/n"]}'))
noteHash['smo40781'] = smo40781;
smo40781.setAttribute('id', 'smo40781');
smo40781.addModifier(new VF.Dot(), 0);
smo40781.addModifier(new VF.Dot(), 1);
smo40797v0ar.push(smo40781);
smo40797v0.addTickables(smo40797v0ar)
fmtsmo4079728.joinVoices([smo40797v0]);
const fmtsmo4197528 = new VF.Formatter();
//
// voices and notes for stave 2 28
const smo41975v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41975v0ar = [];
const smo41959 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
noteHash['smo41959'] = smo41959;
smo41959.setAttribute('id', 'smo41959');
smo41959.addModifier(new VF.Dot(), 0);
smo41975v0ar.push(smo41959);
smo41975v0.addTickables(smo41975v0ar)
fmtsmo4197528.joinVoices([smo41975v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3952628.format([smo39526v0,smo40797v0,smo41975v0], 113);
const stavesmo39526 = new VF.Stave(1087, 107.5133013333334, 127);
stavesmo39526.setAttribute('id', 'stavesmo39526');
stavesmo39526.setBegBarType(VF.Barline.type.NONE);
stavesmo39526.setContext(context);
stavesmo39526.draw();
smo39526v0.draw(context, stavesmo39526);
const stavesmo40797 = new VF.Stave(1087, 214.5133013333334, 127);
stavesmo40797.setAttribute('id', 'stavesmo40797');
stavesmo40797.setBegBarType(VF.Barline.type.NONE);
stavesmo40797.setContext(context);
stavesmo40797.draw();
smo40797v0.draw(context, stavesmo40797);
const stavesmo41975 = new VF.Stave(1087, 285.5133013333334, 127);
stavesmo41975.setAttribute('id', 'stavesmo41975');
stavesmo41975.setBegBarType(VF.Barline.type.NONE);
stavesmo41975.setContext(context);
stavesmo41975.draw();
smo41975v0.draw(context, stavesmo41975);
const rightsmo42632stavesmo395262 = new VF.StaveConnector(stavesmo39526, stavesmo41975).setType(0);
rightsmo42632stavesmo395262.setContext(context).draw();
const fmtsmo3955029 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo39550v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39550v0ar = [];
const smo39527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39527'] = smo39527;
smo39527.setAttribute('id', 'smo39527');
smo39527.addModifier(new VF.Dot(), 0);
const smo39528 = new VF.Annotation('lion');
smo39528.setAttribute('id', 'smo39528');
smo39528.setFont('Merriweather', 12, 'normal');
smo39528.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39527.addModifier(smo39528);
smo39528.addClass('lyric lyric-0');
const smo39529 = new VF.Annotation('Häus,');
smo39529.setAttribute('id', 'smo39529');
smo39529.setFont('Merriweather', 12, 'normal');
smo39529.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39527.addModifier(smo39529);
smo39529.addClass('lyric lyric-1');
smo39550v0ar.push(smo39527);
const smo39530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39530'] = smo39530;
smo39530.setAttribute('id', 'smo39530');
const smo39531 = new VF.Annotation('Häus');
smo39531.setAttribute('id', 'smo39531');
smo39531.setFont('Merriweather', 12, 'normal');
smo39531.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39530.addModifier(smo39531);
smo39531.addClass('lyric lyric-1');
smo39550v0ar.push(smo39530);
const smo39532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39532'] = smo39532;
smo39532.setAttribute('id', 'smo39532');
const smo39533 = new VF.Annotation('Es');
smo39533.setAttribute('id', 'smo39533');
smo39533.setFont('Merriweather', 12, 'normal');
smo39533.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39532.addModifier(smo39533);
smo39533.addClass('lyric lyric-0');
const smo39534 = new VF.Annotation('es');
smo39534.setAttribute('id', 'smo39534');
smo39534.setFont('Merriweather', 12, 'normal');
smo39534.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39532.addModifier(smo39534);
smo39534.addClass('lyric lyric-1');
smo39550v0ar.push(smo39532);
smo39550v0.addTickables(smo39550v0ar)
fmtsmo3955029.joinVoices([smo39550v0]);
const fmtsmo4081629 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo40816v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40816v0ar = [];
const smo40798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","bn/4/n"]}'))
noteHash['smo40798'] = smo40798;
smo40798.setAttribute('id', 'smo40798');
smo40798.addModifier(new VF.Dot(), 0);
smo40798.addModifier(new VF.Dot(), 1);
smo40816v0ar.push(smo40798);
const smo40799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo40799'] = smo40799;
smo40799.setAttribute('id', 'smo40799');
smo40816v0ar.push(smo40799);
const smo40800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo40800'] = smo40800;
smo40800.setAttribute('id', 'smo40800');
smo40816v0ar.push(smo40800);
smo40816v0.addTickables(smo40816v0ar)
fmtsmo4081629.joinVoices([smo40816v0]);
const fmtsmo4199429 = new VF.Formatter();
//
// voices and notes for stave 2 29
const smo41994v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41994v0ar = [];
const smo41976 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
noteHash['smo41976'] = smo41976;
smo41976.setAttribute('id', 'smo41976');
smo41976.addModifier(new VF.Dot(), 0);
smo41994v0ar.push(smo41976);
const smo41977 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo41977'] = smo41977;
smo41977.setAttribute('id', 'smo41977');
smo41994v0ar.push(smo41977);
const smo41978 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo41978'] = smo41978;
smo41978.setAttribute('id', 'smo41978');
smo41994v0ar.push(smo41978);
smo41994v0.addTickables(smo41994v0ar)
fmtsmo4199429.joinVoices([smo41994v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3955029.format([smo39550v0,smo40816v0,smo41994v0], 218);
const stavesmo39550 = new VF.Stave(66, 398.5133013333334, 291);
stavesmo39550.setAttribute('id', 'stavesmo39550');
stavesmo39550.setBegBarType(1);
stavesmo39550.addClef('treble');
const keysmo39550 = new VF.KeySignature('G');
keysmo39550.addToStave(stavesmo39550);
stavesmo39550.setContext(context);
stavesmo39550.draw();
smo39550v0.draw(context, stavesmo39550);
const stavesmo40816 = new VF.Stave(66, 520.5133013333334, 291);
stavesmo40816.setAttribute('id', 'stavesmo40816');
stavesmo40816.setBegBarType(1);
stavesmo40816.addClef('treble');
const keysmo40816 = new VF.KeySignature('G');
keysmo40816.addToStave(stavesmo40816);
stavesmo40816.setContext(context);
stavesmo40816.draw();
smo40816v0.draw(context, stavesmo40816);
const stavesmo41994 = new VF.Stave(66, 643.5133013333334, 291);
stavesmo41994.setAttribute('id', 'stavesmo41994');
stavesmo41994.setBegBarType(1);
stavesmo41994.addClef('bass');
const keysmo41994 = new VF.KeySignature('G');
keysmo41994.addToStave(stavesmo41994);
stavesmo41994.setContext(context);
stavesmo41994.draw();
smo41994v0.draw(context, stavesmo41994);
const leftsmo42632stavesmo395502 = new VF.StaveConnector(stavesmo39550, stavesmo41994).setType(1);
leftsmo42632stavesmo395502.setContext(context).draw();
const fmtsmo3956930 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo39569v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39569v0ar = [];
const smo39551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39551'] = smo39551;
smo39551.setAttribute('id', 'smo39551');
smo39551.addModifier(new VF.Dot(), 0);
const smo39553 = new VF.Annotation('klingt');
smo39553.setAttribute('id', 'smo39553');
smo39553.setFont('Merriweather', 12, 'normal');
smo39553.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39551.addModifier(smo39553);
smo39553.addClass('lyric lyric-0');
const smo39552 = new VF.Annotation('sagt');
smo39552.setAttribute('id', 'smo39552');
smo39552.setFont('Merriweather', 12, 'normal');
smo39552.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39551.addModifier(smo39552);
smo39552.addClass('lyric lyric-1');
smo39569v0ar.push(smo39551);
smo39569v0.addTickables(smo39569v0ar)
fmtsmo3956930.joinVoices([smo39569v0]);
const fmtsmo4083330 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo40833v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40833v0ar = [];
const smo40817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo40817'] = smo40817;
smo40817.setAttribute('id', 'smo40817');
smo40817.addModifier(new VF.Dot(), 0);
smo40833v0ar.push(smo40817);
smo40833v0.addTickables(smo40833v0ar)
fmtsmo4083330.joinVoices([smo40833v0]);
const fmtsmo4201530 = new VF.Formatter();
//
// voices and notes for stave 2 30
const smo42015v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42015v0ar = [];
const smo41995 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo41995'] = smo41995;
smo41995.setAttribute('id', 'smo41995');
smo41995.addModifier(new VF.Dot(), 0);
smo42015v0ar.push(smo41995);
smo42015v0.addTickables(smo42015v0ar)
fmtsmo4201530.joinVoices([smo42015v0]);
const smo42015v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42015v1ar = [];
const smo41996 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41996'] = smo41996;
smo41996.setAttribute('id', 'smo41996');
smo42015v1ar.push(smo41996);
const smo41997 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41997'] = smo41997;
smo41997.setAttribute('id', 'smo41997');
smo42015v1ar.push(smo41997);
const smo41998 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41998'] = smo41998;
smo41998.setAttribute('id', 'smo41998');
smo42015v1ar.push(smo41998);
const smo41999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41999'] = smo41999;
smo41999.setAttribute('id', 'smo41999');
smo42015v1ar.push(smo41999);
smo42015v1.addTickables(smo42015v1ar)
fmtsmo4201530.joinVoices([smo42015v1]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3956930.format([smo39569v0,smo40833v0,smo42015v0,smo42015v1], 197);
const stavesmo39569 = new VF.Stave(357, 398.5133013333334, 211);
stavesmo39569.setAttribute('id', 'stavesmo39569');
stavesmo39569.setBegBarType(VF.Barline.type.NONE);
stavesmo39569.setContext(context);
stavesmo39569.draw();
smo39569v0.draw(context, stavesmo39569);
const stavesmo40833 = new VF.Stave(357, 520.5133013333334, 211);
stavesmo40833.setAttribute('id', 'stavesmo40833');
stavesmo40833.setBegBarType(VF.Barline.type.NONE);
stavesmo40833.setContext(context);
stavesmo40833.draw();
smo40833v0.draw(context, stavesmo40833);
const stavesmo42015 = new VF.Stave(357, 643.5133013333334, 211);
stavesmo42015.setAttribute('id', 'stavesmo42015');
stavesmo42015.setBegBarType(VF.Barline.type.NONE);
stavesmo42015.setContext(context);
stavesmo42015.draw();
smo42015v0.draw(context, stavesmo42015);
smo42015v1.draw(context, stavesmo42015);
const fmtsmo3959731 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo39597v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39597v0ar = [];
const smo39570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39570'] = smo39570;
smo39570.setAttribute('id', 'smo39570');
const smo39571 = new VF.Annotation('-');
smo39571.setAttribute('id', 'smo39571');
smo39571.setFont('Merriweather', 12, 'normal');
smo39571.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39570.addModifier(smo39571);
smo39571.addClass('lyric lyric-0 lyric-hyphen');
const smo39572 = new VF.Annotation('-');
smo39572.setAttribute('id', 'smo39572');
smo39572.setFont('Merriweather', 12, 'normal');
smo39572.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39570.addModifier(smo39572);
smo39572.addClass('lyric lyric-1 lyric-hyphen');
smo39597v0ar.push(smo39570);
const smo39573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39573'] = smo39573;
smo39573.setAttribute('id', 'smo39573');
const smo39574 = new VF.Annotation('wenn');
smo39574.setAttribute('id', 'smo39574');
smo39574.setFont('Merriweather', 12, 'normal');
smo39574.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39573.addModifier(smo39574);
smo39574.addClass('lyric lyric-0');
const smo39575 = new VF.Annotation('zu');
smo39575.setAttribute('id', 'smo39575');
smo39575.setFont('Merriweather', 12, 'normal');
smo39575.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39573.addModifier(smo39575);
smo39575.addClass('lyric lyric-1');
smo39597v0ar.push(smo39573);
const smo39576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39576'] = smo39576;
smo39576.setAttribute('id', 'smo39576');
const smo39577 = new VF.Annotation('es');
smo39577.setAttribute('id', 'smo39577');
smo39577.setFont('Merriweather', 12, 'normal');
smo39577.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39576.addModifier(smo39577);
smo39577.addClass('lyric lyric-0');
const smo39578 = new VF.Annotation('ihm');
smo39578.setAttribute('id', 'smo39578');
smo39578.setFont('Merriweather', 12, 'normal');
smo39578.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39576.addModifier(smo39578);
smo39578.addClass('lyric lyric-1');
smo39597v0ar.push(smo39576);
const smo39579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39579'] = smo39579;
smo39579.setAttribute('id', 'smo39579');
const smo39580 = new VF.Annotation('von');
smo39580.setAttribute('id', 'smo39580');
smo39580.setFont('Merriweather', 12, 'normal');
smo39580.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39579.addModifier(smo39580);
smo39580.addClass('lyric lyric-0');
const smo39581 = new VF.Annotation('Denk\'');
smo39581.setAttribute('id', 'smo39581');
smo39581.setFont('Merriweather', 12, 'normal');
smo39581.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39579.addModifier(smo39581);
smo39581.addClass('lyric lyric-1');
smo39597v0ar.push(smo39579);
smo39597v0.addTickables(smo39597v0ar)
fmtsmo3959731.joinVoices([smo39597v0]);
const fmtsmo4085131 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo40851v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40851v0ar = [];
const smo40834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo40834'] = smo40834;
smo40834.setAttribute('id', 'smo40834');
smo40834.addModifier(new VF.Dot(), 0);
smo40851v0ar.push(smo40834);
const smo40835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
noteHash['smo40835'] = smo40835;
smo40835.setAttribute('id', 'smo40835');
smo40835.addModifier(new VF.Dot(), 0);
smo40851v0ar.push(smo40835);
smo40851v0.addTickables(smo40851v0ar)
fmtsmo4085131.joinVoices([smo40851v0]);
const fmtsmo4203631 = new VF.Formatter();
//
// voices and notes for stave 2 31
const smo42036v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42036v0ar = [];
const smo42016 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo42016'] = smo42016;
smo42016.setAttribute('id', 'smo42016');
smo42016.addModifier(new VF.Dot(), 0);
smo42036v0ar.push(smo42016);
smo42036v0.addTickables(smo42036v0ar)
fmtsmo4203631.joinVoices([smo42036v0]);
const smo42036v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42036v1ar = [];
const smo42017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo42017'] = smo42017;
smo42017.setAttribute('id', 'smo42017');
smo42036v1ar.push(smo42017);
const smo42018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo42018'] = smo42018;
smo42018.setAttribute('id', 'smo42018');
smo42036v1ar.push(smo42018);
const smo42019 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo42019'] = smo42019;
smo42019.setAttribute('id', 'smo42019');
smo42036v1ar.push(smo42019);
const smo42020 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo42020'] = smo42020;
smo42020.setAttribute('id', 'smo42020');
smo42036v1ar.push(smo42020);
smo42036v1.addTickables(smo42036v1ar)
fmtsmo4203631.joinVoices([smo42036v1]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3959731.format([smo39597v0,smo40851v0,smo42036v0,smo42036v1], 293);
const stavesmo39597 = new VF.Stave(568, 398.5133013333334, 307);
stavesmo39597.setAttribute('id', 'stavesmo39597');
stavesmo39597.setBegBarType(VF.Barline.type.NONE);
stavesmo39597.setContext(context);
stavesmo39597.draw();
smo39597v0.draw(context, stavesmo39597);
const stavesmo40851 = new VF.Stave(568, 520.5133013333334, 307);
stavesmo40851.setAttribute('id', 'stavesmo40851');
stavesmo40851.setBegBarType(VF.Barline.type.NONE);
stavesmo40851.setContext(context);
stavesmo40851.draw();
smo40851v0.draw(context, stavesmo40851);
const stavesmo42036 = new VF.Stave(568, 643.5133013333334, 307);
stavesmo42036.setAttribute('id', 'stavesmo42036');
stavesmo42036.setBegBarType(VF.Barline.type.NONE);
stavesmo42036.setContext(context);
stavesmo42036.draw();
smo42036v0.draw(context, stavesmo42036);
smo42036v1.draw(context, stavesmo42036);
const fmtsmo3962532 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo39625v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39625v0ar = [];
const smo39598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39598'] = smo39598;
smo39598.setAttribute('id', 'smo39598');
const smo39599 = new VF.Annotation('fer');
smo39599.setAttribute('id', 'smo39599');
smo39599.setFont('Merriweather', 12, 'normal');
smo39599.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39598.addModifier(smo39599);
smo39599.addClass('lyric lyric-0 lyric-hyphen');
const smo39600 = new VF.Annotation('im');
smo39600.setAttribute('id', 'smo39600');
smo39600.setFont('Merriweather', 12, 'normal');
smo39600.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39598.addModifier(smo39600);
smo39600.addClass('lyric lyric-1 lyric-hyphen');
smo39625v0ar.push(smo39598);
const smo39601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39601'] = smo39601;
smo39601.setAttribute('id', 'smo39601');
const smo39602 = new VF.Annotation('ne');
smo39602.setAttribute('id', 'smo39602');
smo39602.setFont('Merriweather', 12, 'normal');
smo39602.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39601.addModifier(smo39602);
smo39602.addClass('lyric lyric-0');
const smo39603 = new VF.Annotation('mer');
smo39603.setAttribute('id', 'smo39603');
smo39603.setFont('Merriweather', 12, 'normal');
smo39603.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39601.addModifier(smo39603);
smo39603.addClass('lyric lyric-1');
smo39625v0ar.push(smo39601);
const smo39604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39604'] = smo39604;
smo39604.setAttribute('id', 'smo39604');
const smo39605 = new VF.Annotation('er');
smo39605.setAttribute('id', 'smo39605');
smo39605.setFont('Merriweather', 12, 'normal');
smo39605.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39604.addModifier(smo39605);
smo39605.addClass('lyric lyric-0 lyric-hyphen');
const smo39606 = new VF.Annotation('an');
smo39606.setAttribute('id', 'smo39606');
smo39606.setFont('Merriweather', 12, 'normal');
smo39606.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39604.addModifier(smo39606);
smo39606.addClass('lyric lyric-1');
smo39625v0ar.push(smo39604);
const smo39607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39607'] = smo39607;
smo39607.setAttribute('id', 'smo39607');
smo39607.addModifier(new VF.Dot(), 0);
const smo39609 = new VF.Annotation('schalit');
smo39609.setAttribute('id', 'smo39609');
smo39609.setFont('Merriweather', 12, 'normal');
smo39609.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39607.addModifier(smo39609);
smo39609.addClass('lyric lyric-0');
const smo39608 = new VF.Annotation('mich');
smo39608.setAttribute('id', 'smo39608');
smo39608.setFont('Merriweather', 12, 'normal');
smo39608.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39607.addModifier(smo39608);
smo39608.addClass('lyric lyric-1');
smo39625v0ar.push(smo39607);
smo39625v0.addTickables(smo39625v0ar)
fmtsmo3962532.joinVoices([smo39625v0]);
const fmtsmo4086832 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo40868v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40868v0ar = [];
const smo40852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo40852'] = smo40852;
smo40852.setAttribute('id', 'smo40852');
smo40852.addModifier(new VF.Dot(), 0);
smo40868v0ar.push(smo40852);
smo40868v0.addTickables(smo40868v0ar)
fmtsmo4086832.joinVoices([smo40868v0]);
const fmtsmo4205732 = new VF.Formatter();
//
// voices and notes for stave 2 32
const smo42057v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42057v0ar = [];
const smo42037 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo42037'] = smo42037;
smo42037.setAttribute('id', 'smo42037');
smo42037.addModifier(new VF.Dot(), 0);
smo42057v0ar.push(smo42037);
smo42057v0.addTickables(smo42057v0ar)
fmtsmo4205732.joinVoices([smo42057v0]);
const smo42057v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42057v1ar = [];
const smo42038 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo42038'] = smo42038;
smo42038.setAttribute('id', 'smo42038');
const smo420380acc = new VF.Accidental('#');
smo42038.addModifier(smo420380acc, 0);
smo42057v1ar.push(smo42038);
const smo42039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo42039'] = smo42039;
smo42039.setAttribute('id', 'smo42039');
smo42057v1ar.push(smo42039);
const smo42040 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo42040'] = smo42040;
smo42040.setAttribute('id', 'smo42040');
smo42057v1ar.push(smo42040);
const smo42041 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo42041'] = smo42041;
smo42041.setAttribute('id', 'smo42041');
smo42057v1ar.push(smo42041);
smo42057v1.addTickables(smo42057v1ar)
fmtsmo4205732.joinVoices([smo42057v1]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48823 = smo39598.getStemDirection();
smo39598.setStemDirection(dirsmo48823);
smo39601.setStemDirection(dirsmo48823);
smo39604.setStemDirection(dirsmo48823);
const smo48823 = new VF.Beam([smo39598,smo39601,smo39604]);
 
// formatting measures in staff group smo42632
fmtsmo3962532.format([smo39625v0,smo40868v0,smo42057v0,smo42057v1], 321);
const stavesmo39625 = new VF.Stave(875, 398.5133013333334, 335);
stavesmo39625.setAttribute('id', 'stavesmo39625');
stavesmo39625.setBegBarType(VF.Barline.type.NONE);
stavesmo39625.setContext(context);
stavesmo39625.draw();
smo39625v0.draw(context, stavesmo39625);
smo48823.setContext(context);
smo48823.draw();
const stavesmo40868 = new VF.Stave(875, 520.5133013333334, 335);
stavesmo40868.setAttribute('id', 'stavesmo40868');
stavesmo40868.setBegBarType(VF.Barline.type.NONE);
stavesmo40868.setContext(context);
stavesmo40868.draw();
smo40868v0.draw(context, stavesmo40868);
const stavesmo42057 = new VF.Stave(875, 643.5133013333334, 335);
stavesmo42057.setAttribute('id', 'stavesmo42057');
stavesmo42057.setBegBarType(VF.Barline.type.NONE);
stavesmo42057.setContext(context);
stavesmo42057.draw();
smo42057v0.draw(context, stavesmo42057);
smo42057v1.draw(context, stavesmo42057);
const rightsmo42632stavesmo396252 = new VF.StaveConnector(stavesmo39625, stavesmo42057).setType(0);
rightsmo42632stavesmo396252.setContext(context).draw();
const fmtsmo3965533 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo39655v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39655v0ar = [];
const smo39626 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39626'] = smo39626;
smo39626.setAttribute('id', 'smo39626');
const smo39627 = new VF.Annotation('-');
smo39627.setAttribute('id', 'smo39627');
smo39627.setFont('Merriweather', 12, 'normal');
smo39627.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39626.addModifier(smo39627);
smo39627.addClass('lyric lyric-0 lyric-hyphen');
smo39655v0ar.push(smo39626);
const smo39628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39628'] = smo39628;
smo39628.setAttribute('id', 'smo39628');
const smo39629 = new VF.Annotation('ais');
smo39629.setAttribute('id', 'smo39629');
smo39629.setFont('Merriweather', 12, 'normal');
smo39629.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39628.addModifier(smo39629);
smo39629.addClass('lyric lyric-0');
const smo39630 = new VF.Annotation('du');
smo39630.setAttribute('id', 'smo39630');
smo39630.setFont('Merriweather', 12, 'normal');
smo39630.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39628.addModifier(smo39630);
smo39630.addClass('lyric lyric-1');
smo39655v0ar.push(smo39628);
const smo39631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39631'] = smo39631;
smo39631.setAttribute('id', 'smo39631');
const smo39632 = new VF.Annotation('ruit');
smo39632.setAttribute('id', 'smo39632');
smo39632.setFont('Merriweather', 12, 'normal');
smo39632.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39631.addModifier(smo39632);
smo39632.addClass('lyric lyric-0');
const smo39633 = new VF.Annotation('weißt');
smo39633.setAttribute('id', 'smo39633');
smo39633.setFont('Merriweather', 12, 'normal');
smo39633.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39631.addModifier(smo39633);
smo39633.addClass('lyric lyric-1');
smo39655v0ar.push(smo39631);
const smo39634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39634'] = smo39634;
smo39634.setAttribute('id', 'smo39634');
const smo39635 = new VF.Annotation('er');
smo39635.setAttribute('id', 'smo39635');
smo39635.setFont('Merriweather', 12, 'normal');
smo39635.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39634.addModifier(smo39635);
smo39635.addClass('lyric lyric-0');
const smo39636 = new VF.Annotation('doch,');
smo39636.setAttribute('id', 'smo39636');
smo39636.setFont('Merriweather', 12, 'normal');
smo39636.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39634.addModifier(smo39636);
smo39636.addClass('lyric lyric-1');
smo39655v0ar.push(smo39634);
const smo39637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39637'] = smo39637;
smo39637.setAttribute('id', 'smo39637');
const smo39638 = new VF.Annotation('Ich');
smo39638.setAttribute('id', 'smo39638');
smo39638.setFont('Merriweather', 12, 'normal');
smo39638.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39637.addModifier(smo39638);
smo39638.addClass('lyric lyric-0');
const smo39639 = new VF.Annotation('ich');
smo39639.setAttribute('id', 'smo39639');
smo39639.setFont('Merriweather', 12, 'normal');
smo39639.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39637.addModifier(smo39639);
smo39639.addClass('lyric lyric-1');
smo39655v0ar.push(smo39637);
smo39655v0.addTickables(smo39655v0ar)
fmtsmo3965533.joinVoices([smo39655v0]);
const fmtsmo4088833 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo40888v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40888v0ar = [];
const smo40869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo40869'] = smo40869;
smo40869.setAttribute('id', 'smo40869');
smo40888v0ar.push(smo40869);
const smo40870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo40870'] = smo40870;
smo40870.setAttribute('id', 'smo40870');
smo40888v0ar.push(smo40870);
const smo40871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo40871'] = smo40871;
smo40871.setAttribute('id', 'smo40871');
smo40888v0ar.push(smo40871);
const smo40872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo40872'] = smo40872;
smo40872.setAttribute('id', 'smo40872');
smo40888v0ar.push(smo40872);
smo40888v0.addTickables(smo40888v0ar)
fmtsmo4088833.joinVoices([smo40888v0]);
const fmtsmo4207833 = new VF.Formatter();
//
// voices and notes for stave 2 33
const smo42078v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42078v0ar = [];
const smo42058 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo42058'] = smo42058;
smo42058.setAttribute('id', 'smo42058');
smo42058.addModifier(new VF.Dot(), 0);
smo42078v0ar.push(smo42058);
smo42078v0.addTickables(smo42078v0ar)
fmtsmo4207833.joinVoices([smo42078v0]);
const smo42078v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42078v1ar = [];
const smo42059 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo42059'] = smo42059;
smo42059.setAttribute('id', 'smo42059');
const smo420590acc = new VF.Accidental('#');
smo42059.addModifier(smo420590acc, 0);
smo42078v1ar.push(smo42059);
const smo42060 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo42060'] = smo42060;
smo42060.setAttribute('id', 'smo42060');
smo42078v1ar.push(smo42060);
const smo42061 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo42061'] = smo42061;
smo42061.setAttribute('id', 'smo42061');
smo42078v1ar.push(smo42061);
const smo42062 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo42062'] = smo42062;
smo42062.setAttribute('id', 'smo42062');
smo42078v1ar.push(smo42062);
smo42078v1.addTickables(smo42078v1ar)
fmtsmo4207833.joinVoices([smo42078v1]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48837 = smo39631.getStemDirection();
smo39631.setStemDirection(dirsmo48837);
smo39634.setStemDirection(dirsmo48837);
smo39637.setStemDirection(dirsmo48837);
const smo48837 = new VF.Beam([smo39631,smo39634,smo39637]);
 
// formatting measures in staff group smo42632
fmtsmo3965533.format([smo39655v0,smo40888v0,smo42078v0,smo42078v1], 293);
const stavesmo39655 = new VF.Stave(66, 778.5133013333334, 367);
stavesmo39655.setAttribute('id', 'stavesmo39655');
stavesmo39655.setBegBarType(1);
stavesmo39655.addClef('treble');
const keysmo39655 = new VF.KeySignature('G');
keysmo39655.addToStave(stavesmo39655);
stavesmo39655.setContext(context);
stavesmo39655.draw();
smo39655v0.draw(context, stavesmo39655);
smo48837.setContext(context);
smo48837.draw();
const stavesmo40888 = new VF.Stave(66, 893.5133013333334, 367);
stavesmo40888.setAttribute('id', 'stavesmo40888');
stavesmo40888.setBegBarType(1);
stavesmo40888.addClef('treble');
const keysmo40888 = new VF.KeySignature('G');
keysmo40888.addToStave(stavesmo40888);
stavesmo40888.setContext(context);
stavesmo40888.draw();
smo40888v0.draw(context, stavesmo40888);
const stavesmo42078 = new VF.Stave(66, 1026.5133013333334, 367);
stavesmo42078.setAttribute('id', 'stavesmo42078');
stavesmo42078.setBegBarType(1);
stavesmo42078.addClef('bass');
const keysmo42078 = new VF.KeySignature('G');
keysmo42078.addToStave(stavesmo42078);
stavesmo42078.setContext(context);
stavesmo42078.draw();
smo42078v0.draw(context, stavesmo42078);
smo42078v1.draw(context, stavesmo42078);
const leftsmo42632stavesmo396552 = new VF.StaveConnector(stavesmo39655, stavesmo42078).setType(1);
leftsmo42632stavesmo396552.setContext(context).draw();
const fmtsmo3968034 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo39680v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39680v0ar = [];
const smo39656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39656'] = smo39656;
smo39656.setAttribute('id', 'smo39656');
const smo39657 = new VF.Annotation('kom');
smo39657.setAttribute('id', 'smo39657');
smo39657.setFont('Merriweather', 12, 'normal');
smo39657.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39656.addModifier(smo39657);
smo39657.addClass('lyric lyric-0 lyric-hyphen');
const smo39658 = new VF.Annotation('lie');
smo39658.setAttribute('id', 'smo39658');
smo39658.setFont('Merriweather', 12, 'normal');
smo39658.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39656.addModifier(smo39658);
smo39658.addClass('lyric lyric-1 lyric-hyphen');
smo39680v0ar.push(smo39656);
const smo39659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo39659'] = smo39659;
smo39659.setAttribute('id', 'smo39659');
const smo39660 = new VF.Annotation('me');
smo39660.setAttribute('id', 'smo39660');
smo39660.setFont('Merriweather', 12, 'normal');
smo39660.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39659.addModifier(smo39660);
smo39660.addClass('lyric lyric-0');
const smo39661 = new VF.Annotation('be');
smo39661.setAttribute('id', 'smo39661');
smo39661.setFont('Merriweather', 12, 'normal');
smo39661.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39659.addModifier(smo39661);
smo39661.addClass('lyric lyric-1 lyric-hyphen');
smo39680v0ar.push(smo39659);
const smo39662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39662'] = smo39662;
smo39662.setAttribute('id', 'smo39662');
smo39662.addModifier(new VF.Dot(), 0);
const smo39664 = new VF.Annotation('bald!');
smo39664.setAttribute('id', 'smo39664');
smo39664.setFont('Merriweather', 12, 'normal');
smo39664.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39662.addModifier(smo39664);
smo39664.addClass('lyric lyric-0');
const smo39663 = new VF.Annotation('dich!');
smo39663.setAttribute('id', 'smo39663');
smo39663.setFont('Merriweather', 12, 'normal');
smo39663.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39662.addModifier(smo39663);
smo39663.addClass('lyric lyric-1');
smo39680v0ar.push(smo39662);
smo39680v0.addTickables(smo39680v0ar)
fmtsmo3968034.joinVoices([smo39680v0]);
const fmtsmo4090734 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo40907v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40907v0ar = [];
const smo40889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo40889'] = smo40889;
smo40889.setAttribute('id', 'smo40889');
smo40889.addModifier(new VF.Dot(), 0);
smo40907v0ar.push(smo40889);
const smo40890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo40890'] = smo40890;
smo40890.setAttribute('id', 'smo40890');
smo40907v0ar.push(smo40890);
const smo40891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo40891'] = smo40891;
smo40891.setAttribute('id', 'smo40891');
smo40907v0ar.push(smo40891);
smo40907v0.addTickables(smo40907v0ar)
fmtsmo4090734.joinVoices([smo40907v0]);
const fmtsmo4209634 = new VF.Formatter();
//
// voices and notes for stave 2 34
const smo42096v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42096v0ar = [];
const smo42079 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo42079'] = smo42079;
smo42079.setAttribute('id', 'smo42079');
smo42079.addModifier(new VF.Dot(), 0);
smo42096v0ar.push(smo42079);
smo42096v0.addTickables(smo42096v0ar)
fmtsmo4209634.joinVoices([smo42096v0]);
const smo42096v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42096v1ar = [];
const smo42080 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo42080'] = smo42080;
smo42080.setAttribute('id', 'smo42080');
smo42080.addModifier(new VF.Dot(), 0);
smo42096v1ar.push(smo42080);
smo42096v1.addTickables(smo42096v1ar)
fmtsmo4209634.joinVoices([smo42096v1]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3968034.format([smo39680v0,smo40907v0,smo42096v0,smo42096v1], 200);
const stavesmo39680 = new VF.Stave(433, 778.5133013333334, 214);
stavesmo39680.setAttribute('id', 'stavesmo39680');
stavesmo39680.setBegBarType(VF.Barline.type.NONE);
stavesmo39680.setContext(context);
stavesmo39680.draw();
smo39680v0.draw(context, stavesmo39680);
const stavesmo40907 = new VF.Stave(433, 893.5133013333334, 214);
stavesmo40907.setAttribute('id', 'stavesmo40907');
stavesmo40907.setBegBarType(VF.Barline.type.NONE);
stavesmo40907.setContext(context);
stavesmo40907.draw();
smo40907v0.draw(context, stavesmo40907);
const stavesmo42096 = new VF.Stave(433, 1026.5133013333334, 214);
stavesmo42096.setAttribute('id', 'stavesmo42096');
stavesmo42096.setBegBarType(VF.Barline.type.NONE);
stavesmo42096.setContext(context);
stavesmo42096.draw();
smo42096v0.draw(context, stavesmo42096);
smo42096v1.draw(context, stavesmo42096);
const fmtsmo3970235 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo39702v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39702v0ar = [];
const smo39681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39681'] = smo39681;
smo39681.setAttribute('id', 'smo39681');
smo39681.addModifier(new VF.Dot(), 0);
const smo39682 = new VF.Annotation('-');
smo39682.setAttribute('id', 'smo39682');
smo39682.setFont('Merriweather', 12, 'normal');
smo39682.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39681.addModifier(smo39682);
smo39682.addClass('lyric lyric-0 lyric-hyphen');
smo39702v0ar.push(smo39681);
const smo39683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39683'] = smo39683;
smo39683.setAttribute('id', 'smo39683');
smo39702v0ar.push(smo39683);
const smo39684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39684'] = smo39684;
smo39684.setAttribute('id', 'smo39684');
const smo39685 = new VF.Annotation('Ich');
smo39685.setAttribute('id', 'smo39685');
smo39685.setFont('Merriweather', 12, 'normal');
smo39685.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39684.addModifier(smo39685);
smo39685.addClass('lyric lyric-0');
const smo39686 = new VF.Annotation('ich');
smo39686.setAttribute('id', 'smo39686');
smo39686.setFont('Merriweather', 12, 'normal');
smo39686.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39684.addModifier(smo39686);
smo39686.addClass('lyric lyric-1');
smo39702v0ar.push(smo39684);
smo39702v0.addTickables(smo39702v0ar)
fmtsmo3970235.joinVoices([smo39702v0]);
const fmtsmo4092435 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo40924v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40924v0ar = [];
const smo40908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo40908'] = smo40908;
smo40908.setAttribute('id', 'smo40908');
smo40908.addModifier(new VF.Dot(), 0);
smo40924v0ar.push(smo40908);
smo40924v0.addTickables(smo40924v0ar)
fmtsmo4092435.joinVoices([smo40924v0]);
const fmtsmo4211635 = new VF.Formatter();
//
// voices and notes for stave 2 35
const smo42116v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42116v0ar = [];
const smo42097 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo42097'] = smo42097;
smo42097.setAttribute('id', 'smo42097');
smo42097.addModifier(new VF.Dot(), 0);
smo42116v0ar.push(smo42097);
smo42116v0.addTickables(smo42116v0ar)
fmtsmo4211635.joinVoices([smo42116v0]);
const smo42116v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42116v1ar = [];
const smo42098 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo42098'] = smo42098;
smo42098.setAttribute('id', 'smo42098');
smo42116v1ar.push(smo42098);
const smo42099 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo42099'] = smo42099;
smo42099.setAttribute('id', 'smo42099');
smo42116v1ar.push(smo42099);
const smo42100 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo42100'] = smo42100;
smo42100.setAttribute('id', 'smo42100');
smo42100.addModifier(new VF.Dot(), 0);
smo42116v1ar.push(smo42100);
smo42116v1.addTickables(smo42116v1ar)
fmtsmo4211635.joinVoices([smo42116v1]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3970235.format([smo39702v0,smo40924v0,smo42116v0,smo42116v1], 155);
const stavesmo39702 = new VF.Stave(647, 778.5133013333334, 169);
stavesmo39702.setAttribute('id', 'stavesmo39702');
stavesmo39702.setBegBarType(VF.Barline.type.NONE);
stavesmo39702.setContext(context);
stavesmo39702.draw();
smo39702v0.draw(context, stavesmo39702);
const stavesmo40924 = new VF.Stave(647, 893.5133013333334, 169);
stavesmo40924.setAttribute('id', 'stavesmo40924');
stavesmo40924.setBegBarType(VF.Barline.type.NONE);
stavesmo40924.setContext(context);
stavesmo40924.draw();
smo40924v0.draw(context, stavesmo40924);
const stavesmo42116 = new VF.Stave(647, 1026.5133013333334, 169);
stavesmo42116.setAttribute('id', 'stavesmo42116');
stavesmo42116.setBegBarType(VF.Barline.type.NONE);
stavesmo42116.setContext(context);
stavesmo42116.draw();
smo42116v0.draw(context, stavesmo42116);
smo42116v1.draw(context, stavesmo42116);
const fmtsmo3972736 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo39727v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39727v0ar = [];
const smo39703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39703'] = smo39703;
smo39703.setAttribute('id', 'smo39703');
const smo39704 = new VF.Annotation('kom');
smo39704.setAttribute('id', 'smo39704');
smo39704.setFont('Merriweather', 12, 'normal');
smo39704.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39703.addModifier(smo39704);
smo39704.addClass('lyric lyric-0 lyric-hyphen');
const smo39705 = new VF.Annotation('lie');
smo39705.setAttribute('id', 'smo39705');
smo39705.setFont('Merriweather', 12, 'normal');
smo39705.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39703.addModifier(smo39705);
smo39705.addClass('lyric lyric-1 lyric-hyphen');
smo39727v0ar.push(smo39703);
const smo39706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo39706'] = smo39706;
smo39706.setAttribute('id', 'smo39706');
const smo39707 = new VF.Annotation('me');
smo39707.setAttribute('id', 'smo39707');
smo39707.setFont('Merriweather', 12, 'normal');
smo39707.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39706.addModifier(smo39707);
smo39707.addClass('lyric lyric-0');
const smo39708 = new VF.Annotation('be');
smo39708.setAttribute('id', 'smo39708');
smo39708.setFont('Merriweather', 12, 'normal');
smo39708.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39706.addModifier(smo39708);
smo39708.addClass('lyric lyric-1');
smo39727v0ar.push(smo39706);
const smo39709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39709'] = smo39709;
smo39709.setAttribute('id', 'smo39709');
smo39709.addModifier(new VF.Dot(), 0);
const smo39710 = new VF.Annotation('bald');
smo39710.setAttribute('id', 'smo39710');
smo39710.setFont('Merriweather', 12, 'normal');
smo39710.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39709.addModifier(smo39710);
smo39710.addClass('lyric lyric-0');
const smo39711 = new VF.Annotation('dich!');
smo39711.setAttribute('id', 'smo39711');
smo39711.setFont('Merriweather', 12, 'normal');
smo39711.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39709.addModifier(smo39711);
smo39711.addClass('lyric lyric-1');
smo39727v0ar.push(smo39709);
smo39727v0.addTickables(smo39727v0ar)
fmtsmo3972736.joinVoices([smo39727v0]);
const fmtsmo4094136 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo40941v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40941v0ar = [];
const smo40925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo40925'] = smo40925;
smo40925.setAttribute('id', 'smo40925');
smo40925.addModifier(new VF.Dot(), 0);
smo40941v0ar.push(smo40925);
smo40941v0.addTickables(smo40941v0ar)
fmtsmo4094136.joinVoices([smo40941v0]);
const fmtsmo4213636 = new VF.Formatter();
//
// voices and notes for stave 2 36
const smo42136v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42136v0ar = [];
const smo42117 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo42117'] = smo42117;
smo42117.setAttribute('id', 'smo42117');
smo42117.addModifier(new VF.Dot(), 0);
smo42136v0ar.push(smo42117);
smo42136v0.addTickables(smo42136v0ar)
fmtsmo4213636.joinVoices([smo42136v0]);
const smo42136v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42136v1ar = [];
const smo42118 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
noteHash['smo42118'] = smo42118;
smo42118.setAttribute('id', 'smo42118');
smo42118.addModifier(new VF.Dot(), 0);
smo42136v1ar.push(smo42118);
const smo42119 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
noteHash['smo42119'] = smo42119;
smo42119.setAttribute('id', 'smo42119');
smo42136v1ar.push(smo42119);
const smo42120 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo42120'] = smo42120;
smo42120.setAttribute('id', 'smo42120');
smo42136v1ar.push(smo42120);
smo42136v1.addTickables(smo42136v1ar)
fmtsmo4213636.joinVoices([smo42136v1]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3972736.format([smo39727v0,smo40941v0,smo42136v0,smo42136v1], 200);
const stavesmo39727 = new VF.Stave(816, 778.5133013333334, 214);
stavesmo39727.setAttribute('id', 'stavesmo39727');
stavesmo39727.setBegBarType(VF.Barline.type.NONE);
stavesmo39727.setContext(context);
stavesmo39727.draw();
smo39727v0.draw(context, stavesmo39727);
const stavesmo40941 = new VF.Stave(816, 893.5133013333334, 214);
stavesmo40941.setAttribute('id', 'stavesmo40941');
stavesmo40941.setBegBarType(VF.Barline.type.NONE);
stavesmo40941.setContext(context);
stavesmo40941.draw();
smo40941v0.draw(context, stavesmo40941);
const stavesmo42136 = new VF.Stave(816, 1026.5133013333334, 214);
stavesmo42136.setAttribute('id', 'stavesmo42136');
stavesmo42136.setBegBarType(VF.Barline.type.NONE);
stavesmo42136.setContext(context);
stavesmo42136.draw();
smo42136v0.draw(context, stavesmo42136);
smo42136v1.draw(context, stavesmo42136);
const fmtsmo3974937 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo39749v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39749v0ar = [];
const smo39728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39728'] = smo39728;
smo39728.setAttribute('id', 'smo39728');
smo39749v0ar.push(smo39728);
const smo39729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39729'] = smo39729;
smo39729.setAttribute('id', 'smo39729');
smo39749v0ar.push(smo39729);
const smo39730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39730'] = smo39730;
smo39730.setAttribute('id', 'smo39730');
smo39749v0ar.push(smo39730);
const smo39731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo39731'] = smo39731;
smo39731.setAttribute('id', 'smo39731');
const smo39732 = new VF.Annotation('Mein');
smo39732.setAttribute('id', 'smo39732');
smo39732.setFont('Merriweather', 12, 'normal');
smo39732.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39731.addModifier(smo39732);
smo39732.addClass('lyric lyric-0');
const smo39733 = new VF.Annotation('Tra');
smo39733.setAttribute('id', 'smo39733');
smo39733.setFont('Merriweather', 12, 'normal');
smo39733.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39731.addModifier(smo39733);
smo39733.addClass('lyric lyric-1 lyric-hyphen');
smo39749v0ar.push(smo39731);
smo39749v0.addTickables(smo39749v0ar)
fmtsmo3974937.joinVoices([smo39749v0]);
const fmtsmo4095837 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo40958v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40958v0ar = [];
const smo40942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo40942'] = smo40942;
smo40942.setAttribute('id', 'smo40942');
smo40942.addModifier(new VF.Dot(), 0);
smo40958v0ar.push(smo40942);
smo40958v0.addTickables(smo40958v0ar)
fmtsmo4095837.joinVoices([smo40958v0]);
const fmtsmo4215637 = new VF.Formatter();
//
// voices and notes for stave 2 37
const smo42156v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42156v0ar = [];
const smo42137 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo42137'] = smo42137;
smo42137.setAttribute('id', 'smo42137');
smo42137.addModifier(new VF.Dot(), 0);
smo42156v0ar.push(smo42137);
smo42156v0.addTickables(smo42156v0ar)
fmtsmo4215637.joinVoices([smo42156v0]);
const smo42156v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42156v1ar = [];
const smo42138 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo42138'] = smo42138;
smo42138.setAttribute('id', 'smo42138');
smo42156v1ar.push(smo42138);
const smo42139 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo42139'] = smo42139;
smo42139.setAttribute('id', 'smo42139');
smo42156v1ar.push(smo42139);
const smo42140 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo42140'] = smo42140;
smo42140.setAttribute('id', 'smo42140');
smo42140.addModifier(new VF.Dot(), 0);
smo42156v1ar.push(smo42140);
smo42156v1.addTickables(smo42156v1ar)
fmtsmo4215637.joinVoices([smo42156v1]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3974937.format([smo39749v0,smo40958v0,smo42156v0,smo42156v1], 170);
const stavesmo39749 = new VF.Stave(1030, 778.5133013333334, 184);
stavesmo39749.setAttribute('id', 'stavesmo39749');
stavesmo39749.setBegBarType(VF.Barline.type.NONE);
stavesmo39749.setContext(context);
stavesmo39749.draw();
smo39749v0.draw(context, stavesmo39749);
const stavesmo40958 = new VF.Stave(1030, 893.5133013333334, 184);
stavesmo40958.setAttribute('id', 'stavesmo40958');
stavesmo40958.setBegBarType(VF.Barline.type.NONE);
stavesmo40958.setContext(context);
stavesmo40958.draw();
smo40958v0.draw(context, stavesmo40958);
const stavesmo42156 = new VF.Stave(1030, 1026.5133013333334, 184);
stavesmo42156.setAttribute('id', 'stavesmo42156');
stavesmo42156.setBegBarType(VF.Barline.type.NONE);
stavesmo42156.setContext(context);
stavesmo42156.draw();
smo42156v0.draw(context, stavesmo42156);
smo42156v1.draw(context, stavesmo42156);
const rightsmo42632stavesmo397492 = new VF.StaveConnector(stavesmo39749, stavesmo42156).setType(0);
rightsmo42632stavesmo397492.setContext(context).draw();
const fmtsmo3976838 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo39768v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39768v0ar = [];
const smo39750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39750'] = smo39750;
smo39750.setAttribute('id', 'smo39750');
smo39750.addModifier(new VF.Dot(), 0);
const smo39751 = new VF.Annotation('Shatz');
smo39751.setAttribute('id', 'smo39751');
smo39751.setFont('Merriweather', 12, 'normal');
smo39751.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39750.addModifier(smo39751);
smo39751.addClass('lyric lyric-0');
const smo39752 = new VF.Annotation('ra!');
smo39752.setAttribute('id', 'smo39752');
smo39752.setFont('Merriweather', 12, 'normal');
smo39752.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39750.addModifier(smo39752);
smo39752.addClass('lyric lyric-1');
smo39768v0ar.push(smo39750);
smo39768v0.addTickables(smo39768v0ar)
fmtsmo3976838.joinVoices([smo39768v0]);
const fmtsmo4097538 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo40975v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40975v0ar = [];
const smo40959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n","bn/4/n"]}'))
noteHash['smo40959'] = smo40959;
smo40959.setAttribute('id', 'smo40959');
smo40959.addModifier(new VF.Dot(), 0);
smo40959.addModifier(new VF.Dot(), 1);
smo40975v0ar.push(smo40959);
smo40975v0.addTickables(smo40975v0ar)
fmtsmo4097538.joinVoices([smo40975v0]);
const fmtsmo4217638 = new VF.Formatter();
//
// voices and notes for stave 2 38
const smo42176v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42176v0ar = [];
const smo42157 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo42157'] = smo42157;
smo42157.setAttribute('id', 'smo42157');
smo42176v0ar.push(smo42157);
const smo42158 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo42158'] = smo42158;
smo42158.setAttribute('id', 'smo42158');
smo42176v0ar.push(smo42158);
const smo42159 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo42159'] = smo42159;
smo42159.setAttribute('id', 'smo42159');
smo42176v0ar.push(smo42159);
const smo42160 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo42160'] = smo42160;
smo42160.setAttribute('id', 'smo42160');
smo42176v0ar.push(smo42160);
smo42176v0.addTickables(smo42176v0ar)
fmtsmo4217638.joinVoices([smo42176v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3976838.format([smo39768v0,smo40975v0,smo42176v0], 150);
const stavesmo39768 = new VF.Stave(66, 1166.5133013333334, 224);
stavesmo39768.setAttribute('id', 'stavesmo39768');
stavesmo39768.setBegBarType(1);
stavesmo39768.addClef('treble');
const keysmo39768 = new VF.KeySignature('G');
keysmo39768.addToStave(stavesmo39768);
stavesmo39768.setContext(context);
stavesmo39768.draw();
smo39768v0.draw(context, stavesmo39768);
const stavesmo40975 = new VF.Stave(66, 1298.5133013333334, 224);
stavesmo40975.setAttribute('id', 'stavesmo40975');
stavesmo40975.setBegBarType(1);
stavesmo40975.addClef('treble');
const keysmo40975 = new VF.KeySignature('G');
keysmo40975.addToStave(stavesmo40975);
stavesmo40975.setContext(context);
stavesmo40975.draw();
smo40975v0.draw(context, stavesmo40975);
const stavesmo42176 = new VF.Stave(66, 1424.5133013333334, 224);
stavesmo42176.setAttribute('id', 'stavesmo42176');
stavesmo42176.setBegBarType(1);
stavesmo42176.addClef('bass');
const keysmo42176 = new VF.KeySignature('G');
keysmo42176.addToStave(stavesmo42176);
stavesmo42176.setContext(context);
stavesmo42176.draw();
smo42176v0.draw(context, stavesmo42176);
const leftsmo42632stavesmo397682 = new VF.StaveConnector(stavesmo39768, stavesmo42176).setType(1);
leftsmo42632stavesmo397682.setContext(context).draw();
const fmtsmo3979939 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo39799v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39799v0ar = [];
const smo39769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39769'] = smo39769;
smo39769.setAttribute('id', 'smo39769');
const smo39770 = new VF.Annotation('-');
smo39770.setAttribute('id', 'smo39770');
smo39770.setFont('Merriweather', 12, 'normal');
smo39770.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39769.addModifier(smo39770);
smo39770.addClass('lyric lyric-0 lyric-hyphen');
smo39799v0ar.push(smo39769);
const smo39771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39771'] = smo39771;
smo39771.setAttribute('id', 'smo39771');
smo39799v0ar.push(smo39771);
const smo39772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39772'] = smo39772;
smo39772.setAttribute('id', 'smo39772');
const smo39773 = new VF.Annotation('der');
smo39773.setAttribute('id', 'smo39773');
smo39773.setFont('Merriweather', 12, 'normal');
smo39773.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39772.addModifier(smo39773);
smo39773.addClass('lyric lyric-0');
const smo39774 = new VF.Annotation('ich');
smo39774.setAttribute('id', 'smo39774');
smo39774.setFont('Merriweather', 12, 'normal');
smo39774.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39772.addModifier(smo39774);
smo39774.addClass('lyric lyric-1');
smo39799v0ar.push(smo39772);
const smo39775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39775'] = smo39775;
smo39775.setAttribute('id', 'smo39775');
const smo39776 = new VF.Annotation('ist');
smo39776.setAttribute('id', 'smo39776');
smo39776.setFont('Merriweather', 12, 'normal');
smo39776.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39775.addModifier(smo39776);
smo39776.addClass('lyric lyric-0');
const smo39777 = new VF.Annotation('hö');
smo39777.setAttribute('id', 'smo39777');
smo39777.setFont('Merriweather', 12, 'normal');
smo39777.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39775.addModifier(smo39777);
smo39777.addClass('lyric lyric-1 lyric-hyphen');
smo39799v0ar.push(smo39775);
const smo39778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39778'] = smo39778;
smo39778.setAttribute('id', 'smo39778');
const smo39779 = new VF.Annotation('Po');
smo39779.setAttribute('id', 'smo39779');
smo39779.setFont('Merriweather', 12, 'normal');
smo39779.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39778.addModifier(smo39779);
smo39779.addClass('lyric lyric-0 lyric-hyphen');
const smo39780 = new VF.Annotation('re');
smo39780.setAttribute('id', 'smo39780');
smo39780.setFont('Merriweather', 12, 'normal');
smo39780.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39778.addModifier(smo39780);
smo39780.addClass('lyric lyric-1');
smo39799v0ar.push(smo39778);
const smo39781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo39781'] = smo39781;
smo39781.setAttribute('id', 'smo39781');
const smo39782 = new VF.Annotation('stil');
smo39782.setAttribute('id', 'smo39782');
smo39782.setFont('Merriweather', 12, 'normal');
smo39782.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39781.addModifier(smo39782);
smo39782.addClass('lyric lyric-0 lyric-hyphen');
const smo39783 = new VF.Annotation('sein');
smo39783.setAttribute('id', 'smo39783');
smo39783.setFont('Merriweather', 12, 'normal');
smo39783.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39781.addModifier(smo39783);
smo39783.addClass('lyric lyric-1');
smo39799v0ar.push(smo39781);
smo39799v0.addTickables(smo39799v0ar)
fmtsmo3979939.joinVoices([smo39799v0]);
const fmtsmo4099439 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo40994v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40994v0ar = [];
const smo40976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n","bn/4/n"]}'))
noteHash['smo40976'] = smo40976;
smo40976.setAttribute('id', 'smo40976');
smo40976.addModifier(new VF.Dot(), 0);
smo40976.addModifier(new VF.Dot(), 1);
smo40994v0ar.push(smo40976);
const smo40977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo40977'] = smo40977;
smo40977.setAttribute('id', 'smo40977');
smo40994v0ar.push(smo40977);
const smo40978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo40978'] = smo40978;
smo40978.setAttribute('id', 'smo40978');
smo40994v0ar.push(smo40978);
smo40994v0.addTickables(smo40994v0ar)
fmtsmo4099439.joinVoices([smo40994v0]);
const fmtsmo4219639 = new VF.Formatter();
//
// voices and notes for stave 2 39
const smo42196v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42196v0ar = [];
const smo42177 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo42177'] = smo42177;
smo42177.setAttribute('id', 'smo42177');
smo42196v0ar.push(smo42177);
const smo42178 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo42178'] = smo42178;
smo42178.setAttribute('id', 'smo42178');
smo42196v0ar.push(smo42178);
const smo42179 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo42179'] = smo42179;
smo42179.setAttribute('id', 'smo42179');
smo42196v0ar.push(smo42179);
const smo42180 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo42180'] = smo42180;
smo42180.setAttribute('id', 'smo42180');
smo42196v0ar.push(smo42180);
smo42196v0.addTickables(smo42196v0ar)
fmtsmo4219639.joinVoices([smo42196v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48880 = smo39775.getStemDirection();
smo39775.setStemDirection(dirsmo48880);
smo39778.setStemDirection(dirsmo48880);
smo39781.setStemDirection(dirsmo48880);
const smo48880 = new VF.Beam([smo39775,smo39778,smo39781]);
 
// formatting measures in staff group smo42632
fmtsmo3979939.format([smo39799v0,smo40994v0,smo42196v0], 271);
const stavesmo39799 = new VF.Stave(290, 1166.5133013333334, 285);
stavesmo39799.setAttribute('id', 'stavesmo39799');
stavesmo39799.setBegBarType(VF.Barline.type.NONE);
stavesmo39799.setContext(context);
stavesmo39799.draw();
smo39799v0.draw(context, stavesmo39799);
smo48880.setContext(context);
smo48880.draw();
const stavesmo40994 = new VF.Stave(290, 1298.5133013333334, 285);
stavesmo40994.setAttribute('id', 'stavesmo40994');
stavesmo40994.setBegBarType(VF.Barline.type.NONE);
stavesmo40994.setContext(context);
stavesmo40994.draw();
smo40994v0.draw(context, stavesmo40994);
const stavesmo42196 = new VF.Stave(290, 1424.5133013333334, 285);
stavesmo42196.setAttribute('id', 'stavesmo42196');
stavesmo42196.setBegBarType(VF.Barline.type.NONE);
stavesmo42196.setContext(context);
stavesmo42196.draw();
smo42196v0.draw(context, stavesmo42196);
const fmtsmo3981840 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo39818v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39818v0ar = [];
const smo39800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39800'] = smo39800;
smo39800.setAttribute('id', 'smo39800');
smo39800.addModifier(new VF.Dot(), 0);
const smo39801 = new VF.Annotation('lion');
smo39801.setAttribute('id', 'smo39801');
smo39801.setFont('Merriweather', 12, 'normal');
smo39801.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39800.addModifier(smo39801);
smo39801.addClass('lyric lyric-0');
const smo39802 = new VF.Annotation('Lied!');
smo39802.setAttribute('id', 'smo39802');
smo39802.setFont('Merriweather', 12, 'normal');
smo39802.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39800.addModifier(smo39802);
smo39802.addClass('lyric lyric-1');
smo39818v0ar.push(smo39800);
smo39818v0.addTickables(smo39818v0ar)
fmtsmo3981840.joinVoices([smo39818v0]);
const fmtsmo4101140 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo41011v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41011v0ar = [];
const smo40995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
noteHash['smo40995'] = smo40995;
smo40995.setAttribute('id', 'smo40995');
smo40995.addModifier(new VF.Dot(), 0);
smo40995.addModifier(new VF.Dot(), 1);
smo41011v0ar.push(smo40995);
smo41011v0.addTickables(smo41011v0ar)
fmtsmo4101140.joinVoices([smo41011v0]);
const fmtsmo4222040 = new VF.Formatter();
//
// voices and notes for stave 2 40
const smo42220v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42220v0ar = [];
const smo42197 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo42197'] = smo42197;
smo42197.setAttribute('id', 'smo42197');
smo42220v0ar.push(smo42197);
const smo42198 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo42198'] = smo42198;
smo42198.setAttribute('id', 'smo42198');
smo42220v0ar.push(smo42198);
const smo42199 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo42199'] = smo42199;
smo42199.setAttribute('id', 'smo42199');
smo42220v0ar.push(smo42199);
const smo42200 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo42200'] = smo42200;
smo42200.setAttribute('id', 'smo42200');
smo42220v0ar.push(smo42200);
smo42220v0.addTickables(smo42220v0ar)
fmtsmo4222040.joinVoices([smo42220v0]);
const smo42220v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42220v1ar = [];
const smo42201 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo42201'] = smo42201;
smo42201.setAttribute('id', 'smo42201');
smo42220v1ar.push(smo42201);
const smo42202 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo42202'] = smo42202;
smo42202.setAttribute('id', 'smo42202');
smo42220v1ar.push(smo42202);
const smo42203 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo42203'] = smo42203;
smo42203.setAttribute('id', 'smo42203');
smo42220v1ar.push(smo42203);
const smo42204 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo42204'] = smo42204;
smo42204.setAttribute('id', 'smo42204');
smo42220v1ar.push(smo42204);
smo42220v1.addTickables(smo42220v1ar)
fmtsmo4222040.joinVoices([smo42220v1]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3981840.format([smo39818v0,smo41011v0,smo42220v0,smo42220v1], 145);
const stavesmo39818 = new VF.Stave(575, 1166.5133013333334, 159);
stavesmo39818.setAttribute('id', 'stavesmo39818');
stavesmo39818.setBegBarType(VF.Barline.type.NONE);
stavesmo39818.setContext(context);
stavesmo39818.draw();
smo39818v0.draw(context, stavesmo39818);
const stavesmo41011 = new VF.Stave(575, 1298.5133013333334, 159);
stavesmo41011.setAttribute('id', 'stavesmo41011');
stavesmo41011.setBegBarType(VF.Barline.type.NONE);
stavesmo41011.setContext(context);
stavesmo41011.draw();
smo41011v0.draw(context, stavesmo41011);
const stavesmo42220 = new VF.Stave(575, 1424.5133013333334, 159);
stavesmo42220.setAttribute('id', 'stavesmo42220');
stavesmo42220.setBegBarType(VF.Barline.type.NONE);
stavesmo42220.setContext(context);
stavesmo42220.draw();
smo42220v0.draw(context, stavesmo42220);
smo42220v1.draw(context, stavesmo42220);
const fmtsmo3984841 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo39848v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39848v0ar = [];
const smo39819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39819'] = smo39819;
smo39819.setAttribute('id', 'smo39819');
const smo39820 = new VF.Annotation('-');
smo39820.setAttribute('id', 'smo39820');
smo39820.setFont('Merriweather', 12, 'normal');
smo39820.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39819.addModifier(smo39820);
smo39820.addClass('lyric lyric-0 lyric-hyphen');
smo39848v0ar.push(smo39819);
const smo39821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39821'] = smo39821;
smo39821.setAttribute('id', 'smo39821');
const smo39822 = new VF.Annotation('er');
smo39822.setAttribute('id', 'smo39822');
smo39822.setFont('Merriweather', 12, 'normal');
smo39822.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39821.addModifier(smo39822);
smo39822.addClass('lyric lyric-0');
const smo39823 = new VF.Annotation('ich');
smo39823.setAttribute('id', 'smo39823');
smo39823.setFont('Merriweather', 12, 'normal');
smo39823.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39821.addModifier(smo39823);
smo39823.addClass('lyric lyric-1');
smo39848v0ar.push(smo39821);
const smo39824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39824'] = smo39824;
smo39824.setAttribute('id', 'smo39824');
const smo39825 = new VF.Annotation('fährt');
smo39825.setAttribute('id', 'smo39825');
smo39825.setFont('Merriweather', 12, 'normal');
smo39825.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39824.addModifier(smo39825);
smo39825.addClass('lyric lyric-0');
const smo39826 = new VF.Annotation('hö');
smo39826.setAttribute('id', 'smo39826');
smo39826.setFont('Merriweather', 12, 'normal');
smo39826.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39824.addModifier(smo39826);
smo39826.addClass('lyric lyric-1 lyric-hyphen');
smo39848v0ar.push(smo39824);
const smo39827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39827'] = smo39827;
smo39827.setAttribute('id', 'smo39827');
const smo39828 = new VF.Annotation('durch');
smo39828.setAttribute('id', 'smo39828');
smo39828.setFont('Merriweather', 12, 'normal');
smo39828.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39827.addModifier(smo39828);
smo39828.addClass('lyric lyric-0');
const smo39829 = new VF.Annotation('re');
smo39829.setAttribute('id', 'smo39829');
smo39829.setFont('Merriweather', 12, 'normal');
smo39829.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39827.addModifier(smo39829);
smo39829.addClass('lyric lyric-1');
smo39848v0ar.push(smo39827);
const smo39830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39830'] = smo39830;
smo39830.setAttribute('id', 'smo39830');
const smo39831 = new VF.Annotation('die');
smo39831.setAttribute('id', 'smo39831');
smo39831.setFont('Merriweather', 12, 'normal');
smo39831.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39830.addModifier(smo39831);
smo39831.addClass('lyric lyric-0');
const smo39832 = new VF.Annotation('es');
smo39832.setAttribute('id', 'smo39832');
smo39832.setFont('Merriweather', 12, 'normal');
smo39832.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39830.addModifier(smo39832);
smo39832.addClass('lyric lyric-1');
smo39848v0ar.push(smo39830);
smo39848v0.addTickables(smo39848v0ar)
fmtsmo3984841.joinVoices([smo39848v0]);
const fmtsmo4102941 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo41029v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41029v0ar = [];
const smo41012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
noteHash['smo41012'] = smo41012;
smo41012.setAttribute('id', 'smo41012');
smo41012.addModifier(new VF.Dot(), 0);
smo41012.addModifier(new VF.Dot(), 1);
smo41029v0ar.push(smo41012);
const smo41013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo41013'] = smo41013;
smo41013.setAttribute('id', 'smo41013');
smo41013.addModifier(new VF.Dot(), 0);
smo41029v0ar.push(smo41013);
smo41029v0.addTickables(smo41029v0ar)
fmtsmo4102941.joinVoices([smo41029v0]);
const fmtsmo4224441 = new VF.Formatter();
//
// voices and notes for stave 2 41
const smo42244v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42244v0ar = [];
const smo42221 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo42221'] = smo42221;
smo42221.setAttribute('id', 'smo42221');
smo42244v0ar.push(smo42221);
const smo42222 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo42222'] = smo42222;
smo42222.setAttribute('id', 'smo42222');
smo42244v0ar.push(smo42222);
const smo42223 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo42223'] = smo42223;
smo42223.setAttribute('id', 'smo42223');
smo42244v0ar.push(smo42223);
const smo42224 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo42224'] = smo42224;
smo42224.setAttribute('id', 'smo42224');
smo42244v0ar.push(smo42224);
smo42244v0.addTickables(smo42244v0ar)
fmtsmo4224441.joinVoices([smo42244v0]);
const smo42244v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42244v1ar = [];
const smo42225 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo42225'] = smo42225;
smo42225.setAttribute('id', 'smo42225');
smo42244v1ar.push(smo42225);
const smo42226 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo42226'] = smo42226;
smo42226.setAttribute('id', 'smo42226');
smo42244v1ar.push(smo42226);
const smo42227 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo42227'] = smo42227;
smo42227.setAttribute('id', 'smo42227');
smo42244v1ar.push(smo42227);
const smo42228 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo42228'] = smo42228;
smo42228.setAttribute('id', 'smo42228');
smo42244v1ar.push(smo42228);
smo42244v1.addTickables(smo42244v1ar)
fmtsmo4224441.joinVoices([smo42244v1]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48893 = smo39824.getStemDirection();
smo39824.setStemDirection(dirsmo48893);
smo39827.setStemDirection(dirsmo48893);
smo39830.setStemDirection(dirsmo48893);
const smo48893 = new VF.Beam([smo39824,smo39827,smo39830]);
 
// formatting measures in staff group smo42632
fmtsmo3984841.format([smo39848v0,smo41029v0,smo42244v0,smo42244v1], 291);
const stavesmo39848 = new VF.Stave(734, 1166.5133013333334, 305);
stavesmo39848.setAttribute('id', 'stavesmo39848');
stavesmo39848.setBegBarType(VF.Barline.type.NONE);
stavesmo39848.setContext(context);
stavesmo39848.draw();
smo39848v0.draw(context, stavesmo39848);
smo48893.setContext(context);
smo48893.draw();
const stavesmo41029 = new VF.Stave(734, 1298.5133013333334, 305);
stavesmo41029.setAttribute('id', 'stavesmo41029');
stavesmo41029.setBegBarType(VF.Barline.type.NONE);
stavesmo41029.setContext(context);
stavesmo41029.draw();
smo41029v0.draw(context, stavesmo41029);
const stavesmo42244 = new VF.Stave(734, 1424.5133013333334, 305);
stavesmo42244.setAttribute('id', 'stavesmo42244');
stavesmo42244.setBegBarType(VF.Barline.type.NONE);
stavesmo42244.setContext(context);
stavesmo42244.draw();
smo42244v0.draw(context, stavesmo42244);
smo42244v1.draw(context, stavesmo42244);
const fmtsmo3987042 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo39870v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39870v0ar = [];
const smo39849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39849'] = smo39849;
smo39849.setAttribute('id', 'smo39849');
smo39849.addModifier(new VF.Dot(), 0);
const smo39850 = new VF.Annotation('Fel');
smo39850.setAttribute('id', 'smo39850');
smo39850.setFont('Merriweather', 12, 'normal');
smo39850.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39849.addModifier(smo39850);
smo39850.addClass('lyric lyric-0 lyric-hyphen');
const smo39851 = new VF.Annotation('sin');
smo39851.setAttribute('id', 'smo39851');
smo39851.setFont('Merriweather', 12, 'normal');
smo39851.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39849.addModifier(smo39851);
smo39851.addClass('lyric lyric-1 lyric-hyphen');
smo39870v0ar.push(smo39849);
const smo39852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo39852'] = smo39852;
smo39852.setAttribute('id', 'smo39852');
smo39852.addModifier(new VF.Dot(), 0);
const smo39853 = new VF.Annotation('er');
smo39853.setAttribute('id', 'smo39853');
smo39853.setFont('Merriweather', 12, 'normal');
smo39853.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39852.addModifier(smo39853);
smo39853.addClass('lyric lyric-0');
const smo39854 = new VF.Annotation('gen,');
smo39854.setAttribute('id', 'smo39854');
smo39854.setFont('Merriweather', 12, 'normal');
smo39854.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39852.addModifier(smo39854);
smo39854.addClass('lyric lyric-1');
smo39870v0ar.push(smo39852);
smo39870v0.addTickables(smo39870v0ar)
fmtsmo3987042.joinVoices([smo39870v0]);
const fmtsmo4104642 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo41046v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41046v0ar = [];
const smo41030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","f#/5/n","dn/6/n"]}'))
noteHash['smo41030'] = smo41030;
smo41030.setAttribute('id', 'smo41030');
smo41030.addModifier(new VF.Dot(), 0);
smo41030.addModifier(new VF.Dot(), 1);
smo41030.addModifier(new VF.Dot(), 2);
smo41046v0ar.push(smo41030);
smo41046v0.addTickables(smo41046v0ar)
fmtsmo4104642.joinVoices([smo41046v0]);
const fmtsmo4226642 = new VF.Formatter();
//
// voices and notes for stave 2 42
const smo42266v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42266v0ar = [];
const smo42245 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo42245'] = smo42245;
smo42245.setAttribute('id', 'smo42245');
smo42266v0ar.push(smo42245);
const smo42246 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo42246'] = smo42246;
smo42246.setAttribute('id', 'smo42246');
smo42266v0ar.push(smo42246);
const smo42247 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo42247'] = smo42247;
smo42247.setAttribute('id', 'smo42247');
smo42266v0ar.push(smo42247);
const smo42248 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo42248'] = smo42248;
smo42248.setAttribute('id', 'smo42248');
smo42266v0ar.push(smo42248);
smo42266v0.addTickables(smo42266v0ar)
fmtsmo4226642.joinVoices([smo42266v0]);
const smo42266v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42266v1ar = [];
const smo42249 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo42249'] = smo42249;
smo42249.setAttribute('id', 'smo42249');
smo42249.addModifier(new VF.Dot(), 0);
smo42266v1ar.push(smo42249);
const smo42250 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
noteHash['smo42250'] = smo42250;
smo42250.setAttribute('id', 'smo42250');
smo42250.addModifier(new VF.Dot(), 0);
smo42266v1ar.push(smo42250);
smo42266v1.addTickables(smo42266v1ar)
fmtsmo4226642.joinVoices([smo42266v1]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3987042.format([smo39870v0,smo41046v0,smo42266v0,smo42266v1], 160);
const stavesmo39870 = new VF.Stave(1039, 1166.5133013333334, 174);
stavesmo39870.setAttribute('id', 'stavesmo39870');
stavesmo39870.setBegBarType(VF.Barline.type.NONE);
stavesmo39870.setContext(context);
stavesmo39870.draw();
smo39870v0.draw(context, stavesmo39870);
const stavesmo41046 = new VF.Stave(1039, 1298.5133013333334, 174);
stavesmo41046.setAttribute('id', 'stavesmo41046');
stavesmo41046.setBegBarType(VF.Barline.type.NONE);
stavesmo41046.setContext(context);
stavesmo41046.draw();
smo41046v0.draw(context, stavesmo41046);
const stavesmo42266 = new VF.Stave(1039, 1424.5133013333334, 174);
stavesmo42266.setAttribute('id', 'stavesmo42266');
stavesmo42266.setBegBarType(VF.Barline.type.NONE);
stavesmo42266.setContext(context);
stavesmo42266.draw();
smo42266v0.draw(context, stavesmo42266);
smo42266v1.draw(context, stavesmo42266);
const rightsmo42632stavesmo398702 = new VF.StaveConnector(stavesmo39870, stavesmo42266).setType(0);
rightsmo42632stavesmo398702.setContext(context).draw();
const smo40255 = new VF.Curve(smo39459, smo39478, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo40255.setContext(context).draw();
const smo40268 = new VF.StaveTie({ first_note: smo39367, last_note: smo39386, first_indices: [0], last_indices: [0]});
smo40268.setContext(context).draw();
const smo40269 = new VF.StaveTie({ first_note: smo39435, last_note: smo39438, first_indices: [0], last_indices: [0]});
smo40269.setContext(context).draw();
const smo40270 = new VF.StaveTie({ first_note: smo39551, last_note: smo39570, first_indices: [0], last_indices: [0]});
smo40270.setContext(context).draw();
const smo40271 = new VF.StaveTie({ first_note: smo39607, last_note: smo39626, first_indices: [0], last_indices: [0]});
smo40271.setContext(context).draw();
const smo40272 = new VF.StaveTie({ first_note: smo39662, last_note: smo39681, first_indices: [0], last_indices: [0]});
smo40272.setContext(context).draw();
const smo41384 = new VF.Curve(smo40817, smo40834, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo41384.setContext(context).draw();
const smo41385 = new VF.StaveTie({ first_note: smo40995, last_note: smo41012, first_indices: [0,1], last_indices: [0,1]});
smo41385.setContext(context).draw();
const smo41392 = new VF.StaveTie({ first_note: smo40959, last_note: smo40976, first_indices: [0,1], last_indices: [0,1]});
smo41392.setContext(context).draw();
const smo42620 = new VF.Curve(smo41995, smo42016, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo42620.setContext(context).draw();
const smo42621 = new VF.StaveTie({ first_note: smo42037, last_note: smo42058, first_indices: [0], last_indices: [0]});
smo42621.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo39368').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39369').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo39389').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39390').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo39392').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo39393').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo39395').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39396').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo39414').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39415').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo39417').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39418').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo39437').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo39436').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo39439').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo39441').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo39442').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo39461').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo39479').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo39481').setAttributeNS('', 'transform', 'translate(0 0)');
context.svg.getElementById('vf-smo39482').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo39484').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo39485').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo39488').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo39506').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo39507').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo39509').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39510').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo39528').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo39529').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo39531').setAttributeNS('', 'transform', 'translate(0 48)');
context.svg.getElementById('vf-smo39533').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo39534').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo39553').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39552').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo39571').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo39572').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo39574').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo39575').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo39577').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo39578').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo39580').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo39581').setAttributeNS('', 'transform', 'translate(0 27)');
context.svg.getElementById('vf-smo39599').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo39600').setAttributeNS('', 'transform', 'translate(0 27)');
context.svg.getElementById('vf-smo39602').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39603').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo39606').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo39609').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo39608').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo39627').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo39629').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39630').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo39632').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39633').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo39635').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo39636').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo39638').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39639').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo39657').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo39658').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo39660').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo39661').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo39664').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo39663').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo39682').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo39686').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo39704').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo39705').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo39707').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo39708').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo39710').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo39711').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo39732').setAttributeNS('', 'transform', 'translate(0 0)');
context.svg.getElementById('vf-smo39733').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo39751').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo39752').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo39770').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39773').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo39774').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo39776').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo39777').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo39779').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39780').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo39782').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo39783').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo39801').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo39802').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo39820').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39823').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo39825').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo39826').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo39828').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo39829').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo39831').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo39832').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo39850').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo39851').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo39854').setAttributeNS('', 'transform', 'translate(0 9)');
}
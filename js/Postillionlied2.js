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
const fmtsmo3840222 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo38402v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38402v0ar = [];
const smo38384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo38384'] = smo38384;
smo38384.setAttribute('id', 'smo38384');
smo38384.addModifier(new VF.Dot(), 0);
const smo38385 = new VF.Annotation('bläst');
smo38385.setAttribute('id', 'smo38385');
smo38385.setFont('Merriweather', 12, 'normal');
smo38385.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38384.addModifier(smo38385);
smo38385.addClass('lyric lyric-0 lyric-hyphen');
const smo38386 = new VF.Annotation('Herz');
smo38386.setAttribute('id', 'smo38386');
smo38386.setFont('Merriweather', 12, 'normal');
smo38386.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38384.addModifier(smo38386);
smo38386.addClass('lyric lyric-1');
smo38402v0ar.push(smo38384);
smo38402v0.addTickables(smo38402v0ar)
fmtsmo3840222.joinVoices([smo38402v0]);
const fmtsmo3971122 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo39711v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39711v0ar = [];
const smo39695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39695'] = smo39695;
smo39695.setAttribute('id', 'smo39695');
smo39695.addModifier(new VF.Dot(), 0);
smo39711v0ar.push(smo39695);
smo39711v0.addTickables(smo39711v0ar)
fmtsmo3971122.joinVoices([smo39711v0]);
const fmtsmo4088822 = new VF.Formatter();
//
// voices and notes for stave 2 22
const smo40888v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40888v0ar = [];
const smo40872 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo40872'] = smo40872;
smo40872.setAttribute('id', 'smo40872');
smo40872.addModifier(new VF.Dot(), 0);
smo40888v0ar.push(smo40872);
smo40888v0.addTickables(smo40888v0ar)
fmtsmo4088822.joinVoices([smo40888v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3840222.format([smo38402v0,smo39711v0,smo40888v0], 60);
const stavesmo38402 = new VF.Stave(66, 107.5133013333334, 134);
stavesmo38402.setAttribute('id', 'stavesmo38402');
stavesmo38402.setBegBarType(1);
stavesmo38402.addClef('treble');
const keysmo38402 = new VF.KeySignature('G');
keysmo38402.addToStave(stavesmo38402);
stavesmo38402.setContext(context);
stavesmo38402.draw();
smo38402v0.draw(context, stavesmo38402);
const stavesmo39711 = new VF.Stave(66, 214.5133013333334, 134);
stavesmo39711.setAttribute('id', 'stavesmo39711');
stavesmo39711.setBegBarType(1);
stavesmo39711.addClef('treble');
const keysmo39711 = new VF.KeySignature('G');
keysmo39711.addToStave(stavesmo39711);
stavesmo39711.setContext(context);
stavesmo39711.draw();
smo39711v0.draw(context, stavesmo39711);
const stavesmo40888 = new VF.Stave(66, 285.5133013333334, 134);
stavesmo40888.setAttribute('id', 'stavesmo40888');
stavesmo40888.setBegBarType(1);
stavesmo40888.addClef('bass');
const keysmo40888 = new VF.KeySignature('G');
keysmo40888.addToStave(stavesmo40888);
stavesmo40888.setContext(context);
stavesmo40888.draw();
smo40888v0.draw(context, stavesmo40888);
const leftsmo41649stavesmo384022 = new VF.StaveConnector(stavesmo38402, stavesmo40888).setType(1);
leftsmo41649stavesmo384022.setContext(context).draw();
const fmtsmo3842923 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo38429v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38429v0ar = [];
const smo38403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo38403'] = smo38403;
smo38403.setAttribute('id', 'smo38403');
smo38429v0ar.push(smo38403);
const smo38405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo38405'] = smo38405;
smo38405.setAttribute('id', 'smo38405');
const smo38406 = new VF.Annotation('sein');
smo38406.setAttribute('id', 'smo38406');
smo38406.setFont('Merriweather', 12, 'normal');
smo38406.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38405.addModifier(smo38406);
smo38406.addClass('lyric lyric-0');
const smo38407 = new VF.Annotation('be');
smo38407.setAttribute('id', 'smo38407');
smo38407.setFont('Merriweather', 12, 'normal');
smo38407.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38405.addModifier(smo38407);
smo38407.addClass('lyric lyric-1 lyric-hyphen');
smo38429v0ar.push(smo38405);
const smo38408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo38408'] = smo38408;
smo38408.setAttribute('id', 'smo38408');
const smo38409 = new VF.Annotation('Horn');
smo38409.setAttribute('id', 'smo38409');
smo38409.setFont('Merriweather', 12, 'normal');
smo38409.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38408.addModifier(smo38409);
smo38409.addClass('lyric lyric-0');
const smo38410 = new VF.Annotation('glei');
smo38410.setAttribute('id', 'smo38410');
smo38410.setFont('Merriweather', 12, 'normal');
smo38410.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38408.addModifier(smo38410);
smo38410.addClass('lyric lyric-1 lyric-hyphen');
smo38429v0ar.push(smo38408);
const smo38411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo38411'] = smo38411;
smo38411.setAttribute('id', 'smo38411');
const smo38412 = new VF.Annotation('mit');
smo38412.setAttribute('id', 'smo38412');
smo38412.setFont('Merriweather', 12, 'normal');
smo38412.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38411.addModifier(smo38412);
smo38412.addClass('lyric lyric-0');
const smo38413 = new VF.Annotation('tet');
smo38413.setAttribute('id', 'smo38413');
smo38413.setFont('Merriweather', 12, 'normal');
smo38413.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38411.addModifier(smo38413);
smo38413.addClass('lyric lyric-1');
smo38429v0ar.push(smo38411);
smo38429v0.addTickables(smo38429v0ar)
fmtsmo3842923.joinVoices([smo38429v0]);
const fmtsmo3972823 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo39728v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39728v0ar = [];
const smo39712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n","bn/4/n"]}'))
noteHash['smo39712'] = smo39712;
smo39712.setAttribute('id', 'smo39712');
smo39712.addModifier(new VF.Dot(), 0);
smo39712.addModifier(new VF.Dot(), 1);
smo39728v0ar.push(smo39712);
smo39728v0.addTickables(smo39728v0ar)
fmtsmo3972823.joinVoices([smo39728v0]);
const fmtsmo4090523 = new VF.Formatter();
//
// voices and notes for stave 2 23
const smo40905v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40905v0ar = [];
const smo40889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
noteHash['smo40889'] = smo40889;
smo40889.setAttribute('id', 'smo40889');
const smo408890acc = new VF.Accidental('#');
smo40889.addModifier(smo408890acc, 0);
smo40889.addModifier(new VF.Dot(), 0);
smo40905v0ar.push(smo40889);
smo40905v0.addTickables(smo40905v0ar)
fmtsmo4090523.joinVoices([smo40905v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3842923.format([smo38429v0,smo39728v0,smo40905v0], 239);
const stavesmo38429 = new VF.Stave(200, 107.5133013333334, 253);
stavesmo38429.setAttribute('id', 'stavesmo38429');
stavesmo38429.setBegBarType(VF.Barline.type.NONE);
stavesmo38429.setContext(context);
stavesmo38429.draw();
smo38429v0.draw(context, stavesmo38429);
const stavesmo39728 = new VF.Stave(200, 214.5133013333334, 253);
stavesmo39728.setAttribute('id', 'stavesmo39728');
stavesmo39728.setBegBarType(VF.Barline.type.NONE);
stavesmo39728.setContext(context);
stavesmo39728.draw();
smo39728v0.draw(context, stavesmo39728);
const stavesmo40905 = new VF.Stave(200, 285.5133013333334, 253);
stavesmo40905.setAttribute('id', 'stavesmo40905');
stavesmo40905.setBegBarType(VF.Barline.type.NONE);
stavesmo40905.setContext(context);
stavesmo40905.draw();
smo40905v0.draw(context, stavesmo40905);
const fmtsmo3845124 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo38451v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38451v0ar = [];
const smo38430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo38430'] = smo38430;
smo38430.setAttribute('id', 'smo38430');
smo38430.addModifier(new VF.Dot(), 0);
const smo38431 = new VF.Annotation('hel');
smo38431.setAttribute('id', 'smo38431');
smo38431.setFont('Merriweather', 12, 'normal');
smo38431.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38430.addModifier(smo38431);
smo38431.addClass('lyric lyric-0 lyric-hyphen');
const smo38432 = new VF.Annotation('ihn');
smo38432.setAttribute('id', 'smo38432');
smo38432.setFont('Merriweather', 12, 'normal');
smo38432.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38430.addModifier(smo38432);
smo38432.addClass('lyric lyric-1');
smo38451v0ar.push(smo38430);
const smo38433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo38433'] = smo38433;
smo38433.setAttribute('id', 'smo38433');
smo38433.addModifier(new VF.Dot(), 0);
const smo38434 = new VF.Annotation('lem');
smo38434.setAttribute('id', 'smo38434');
smo38434.setFont('Merriweather', 12, 'normal');
smo38434.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38433.addModifier(smo38434);
smo38434.addClass('lyric lyric-0');
const smo38435 = new VF.Annotation('hin');
smo38435.setAttribute('id', 'smo38435');
smo38435.setFont('Merriweather', 12, 'normal');
smo38435.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38433.addModifier(smo38435);
smo38435.addClass('lyric lyric-1 lyric-hyphen');
smo38451v0ar.push(smo38433);
smo38451v0.addTickables(smo38451v0ar)
fmtsmo3845124.joinVoices([smo38451v0]);
const fmtsmo3974524 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo39745v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39745v0ar = [];
const smo39729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","an/4/n"]}'))
noteHash['smo39729'] = smo39729;
smo39729.setAttribute('id', 'smo39729');
smo39729.addModifier(new VF.Dot(), 0);
smo39729.addModifier(new VF.Dot(), 1);
smo39745v0ar.push(smo39729);
smo39745v0.addTickables(smo39745v0ar)
fmtsmo3974524.joinVoices([smo39745v0]);
const fmtsmo4092324 = new VF.Formatter();
//
// voices and notes for stave 2 24
const smo40923v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40923v0ar = [];
const smo40906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo40906'] = smo40906;
smo40906.setAttribute('id', 'smo40906');
smo40906.addModifier(new VF.Dot(), 0);
smo40923v0ar.push(smo40906);
const smo40907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
noteHash['smo40907'] = smo40907;
smo40907.setAttribute('id', 'smo40907');
smo40907.addModifier(new VF.Dot(), 0);
smo40923v0ar.push(smo40907);
smo40923v0.addTickables(smo40923v0ar)
fmtsmo4092324.joinVoices([smo40923v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3845124.format([smo38451v0,smo39745v0,smo40923v0], 107);
const stavesmo38451 = new VF.Stave(453, 107.5133013333334, 121);
stavesmo38451.setAttribute('id', 'stavesmo38451');
stavesmo38451.setBegBarType(VF.Barline.type.NONE);
stavesmo38451.setContext(context);
stavesmo38451.draw();
smo38451v0.draw(context, stavesmo38451);
const stavesmo39745 = new VF.Stave(453, 214.5133013333334, 121);
stavesmo39745.setAttribute('id', 'stavesmo39745');
stavesmo39745.setBegBarType(VF.Barline.type.NONE);
stavesmo39745.setContext(context);
stavesmo39745.draw();
smo39745v0.draw(context, stavesmo39745);
const stavesmo40923 = new VF.Stave(453, 285.5133013333334, 121);
stavesmo40923.setAttribute('id', 'stavesmo40923');
stavesmo40923.setBegBarType(VF.Barline.type.NONE);
stavesmo40923.setContext(context);
stavesmo40923.draw();
smo40923v0.draw(context, stavesmo40923);
const fmtsmo3847525 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo38475v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38475v0ar = [];
const smo38452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo38452'] = smo38452;
smo38452.setAttribute('id', 'smo38452');
smo38452.addModifier(new VF.Dot(), 0);
const smo38454 = new VF.Annotation('Ton,');
smo38454.setAttribute('id', 'smo38454');
smo38454.setFont('Merriweather', 12, 'normal');
smo38454.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38452.addModifier(smo38454);
smo38454.addClass('lyric lyric-0');
const smo38453 = new VF.Annotation('aus');
smo38453.setAttribute('id', 'smo38453');
smo38453.setFont('Merriweather', 12, 'normal');
smo38453.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38452.addModifier(smo38453);
smo38453.addClass('lyric lyric-1');
smo38475v0ar.push(smo38452);
const smo38455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo38455'] = smo38455;
smo38455.setAttribute('id', 'smo38455');
const smo38456 = new VF.Annotation('-');
smo38456.setAttribute('id', 'smo38456');
smo38456.setFont('Merriweather', 12, 'normal');
smo38456.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38455.addModifier(smo38456);
smo38456.addClass('lyric lyric-0 lyric-hyphen');
smo38475v0ar.push(smo38455);
const smo38457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/5/n"]}'))
noteHash['smo38457'] = smo38457;
smo38457.setAttribute('id', 'smo38457');
const smo384570acc = new VF.Accidental('#');
smo38457.addModifier(smo384570acc, 0);
const smo38458 = new VF.Annotation('so');
smo38458.setAttribute('id', 'smo38458');
smo38458.setFont('Merriweather', 12, 'normal');
smo38458.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38457.addModifier(smo38458);
smo38458.addClass('lyric lyric-0');
const smo38459 = new VF.Annotation('und');
smo38459.setAttribute('id', 'smo38459');
smo38459.setFont('Merriweather', 12, 'normal');
smo38459.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38457.addModifier(smo38459);
smo38459.addClass('lyric lyric-1');
smo38475v0ar.push(smo38457);
smo38475v0.addTickables(smo38475v0ar)
fmtsmo3847525.joinVoices([smo38475v0]);
const fmtsmo3976325 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo39763v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39763v0ar = [];
const smo39746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","an/4/n"]}'))
noteHash['smo39746'] = smo39746;
smo39746.setAttribute('id', 'smo39746');
smo39746.addModifier(new VF.Dot(), 0);
smo39746.addModifier(new VF.Dot(), 1);
smo39763v0ar.push(smo39746);
const smo39747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39747'] = smo39747;
smo39747.setAttribute('id', 'smo39747');
smo39747.addModifier(new VF.Dot(), 0);
smo39763v0ar.push(smo39747);
smo39763v0.addTickables(smo39763v0ar)
fmtsmo3976325.joinVoices([smo39763v0]);
const fmtsmo4094125 = new VF.Formatter();
//
// voices and notes for stave 2 25
const smo40941v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40941v0ar = [];
const smo40924 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo40924'] = smo40924;
smo40924.setAttribute('id', 'smo40924');
smo40924.addModifier(new VF.Dot(), 0);
smo40941v0ar.push(smo40924);
const smo40925 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["d#/3/n"]}'))
noteHash['smo40925'] = smo40925;
smo40925.setAttribute('id', 'smo40925');
const smo409250acc = new VF.Accidental('#');
smo40925.addModifier(smo409250acc, 0);
smo40925.addModifier(new VF.Dot(), 0);
smo40941v0ar.push(smo40925);
smo40941v0.addTickables(smo40941v0ar)
fmtsmo4094125.joinVoices([smo40941v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3847525.format([smo38475v0,smo39763v0,smo40941v0], 169);
const stavesmo38475 = new VF.Stave(574, 107.5133013333334, 183);
stavesmo38475.setAttribute('id', 'stavesmo38475');
stavesmo38475.setBegBarType(VF.Barline.type.NONE);
stavesmo38475.setContext(context);
stavesmo38475.draw();
smo38475v0.draw(context, stavesmo38475);
const stavesmo39763 = new VF.Stave(574, 214.5133013333334, 183);
stavesmo39763.setAttribute('id', 'stavesmo39763');
stavesmo39763.setBegBarType(VF.Barline.type.NONE);
stavesmo39763.setContext(context);
stavesmo39763.draw();
smo39763v0.draw(context, stavesmo39763);
const stavesmo40941 = new VF.Stave(574, 285.5133013333334, 183);
stavesmo40941.setAttribute('id', 'stavesmo40941');
stavesmo40941.setBegBarType(VF.Barline.type.NONE);
stavesmo40941.setContext(context);
stavesmo40941.draw();
smo40941v0.draw(context, stavesmo40941);
const fmtsmo3849426 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo38494v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38494v0ar = [];
const smo38476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38476'] = smo38476;
smo38476.setAttribute('id', 'smo38476');
smo38476.addModifier(new VF.Dot(), 0);
const smo38477 = new VF.Annotation('schön');
smo38477.setAttribute('id', 'smo38477');
smo38477.setFont('Merriweather', 12, 'normal');
smo38477.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38476.addModifier(smo38477);
smo38477.addClass('lyric lyric-0');
const smo38478 = new VF.Annotation('führt');
smo38478.setAttribute('id', 'smo38478');
smo38478.setFont('Merriweather', 12, 'normal');
smo38478.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38476.addModifier(smo38478);
smo38478.addClass('lyric lyric-1');
smo38494v0ar.push(smo38476);
smo38494v0.addTickables(smo38494v0ar)
fmtsmo3849426.joinVoices([smo38494v0]);
const fmtsmo3978026 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo39780v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39780v0ar = [];
const smo39764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39764'] = smo39764;
smo39764.setAttribute('id', 'smo39764');
smo39764.addModifier(new VF.Dot(), 0);
smo39780v0ar.push(smo39764);
smo39780v0.addTickables(smo39780v0ar)
fmtsmo3978026.joinVoices([smo39780v0]);
const fmtsmo4095826 = new VF.Formatter();
//
// voices and notes for stave 2 26
const smo40958v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40958v0ar = [];
const smo40942 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo40942'] = smo40942;
smo40942.setAttribute('id', 'smo40942');
smo40942.addModifier(new VF.Dot(), 0);
smo40958v0ar.push(smo40942);
smo40958v0.addTickables(smo40958v0ar)
fmtsmo4095826.joinVoices([smo40958v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3849426.format([smo38494v0,smo39780v0,smo40958v0], 72);
const stavesmo38494 = new VF.Stave(757, 107.5133013333334, 86);
stavesmo38494.setAttribute('id', 'stavesmo38494');
stavesmo38494.setBegBarType(VF.Barline.type.NONE);
stavesmo38494.setContext(context);
stavesmo38494.draw();
smo38494v0.draw(context, stavesmo38494);
const stavesmo39780 = new VF.Stave(757, 214.5133013333334, 86);
stavesmo39780.setAttribute('id', 'stavesmo39780');
stavesmo39780.setBegBarType(VF.Barline.type.NONE);
stavesmo39780.setContext(context);
stavesmo39780.draw();
smo39780v0.draw(context, stavesmo39780);
const stavesmo40958 = new VF.Stave(757, 285.5133013333334, 86);
stavesmo40958.setAttribute('id', 'stavesmo40958');
stavesmo40958.setBegBarType(VF.Barline.type.NONE);
stavesmo40958.setContext(context);
stavesmo40958.draw();
smo40958v0.draw(context, stavesmo40958);
const fmtsmo3852127 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo38521v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38521v0ar = [];
const smo38495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38495'] = smo38495;
smo38495.setAttribute('id', 'smo38495');
const smo38496 = new VF.Annotation('-');
smo38496.setAttribute('id', 'smo38496');
smo38496.setFont('Merriweather', 12, 'normal');
smo38496.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38495.addModifier(smo38496);
smo38496.addClass('lyric lyric-0 lyric-hyphen');
smo38521v0ar.push(smo38495);
const smo38497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38497'] = smo38497;
smo38497.setAttribute('id', 'smo38497');
const smo38498 = new VF.Annotation('wie');
smo38498.setAttribute('id', 'smo38498');
smo38498.setFont('Merriweather', 12, 'normal');
smo38498.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38497.addModifier(smo38498);
smo38498.addClass('lyric lyric-0');
const smo38499 = new VF.Annotation('ihn');
smo38499.setAttribute('id', 'smo38499');
smo38499.setFont('Merriweather', 12, 'normal');
smo38499.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38497.addModifier(smo38499);
smo38499.addClass('lyric lyric-1');
smo38521v0ar.push(smo38497);
const smo38500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38500'] = smo38500;
smo38500.setAttribute('id', 'smo38500');
const smo38501 = new VF.Annotation('sonst');
smo38501.setAttribute('id', 'smo38501');
smo38501.setFont('Merriweather', 12, 'normal');
smo38501.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38500.addModifier(smo38501);
smo38501.addClass('lyric lyric-0');
const smo38502 = new VF.Annotation('mir');
smo38502.setAttribute('id', 'smo38502');
smo38502.setFont('Merriweather', 12, 'normal');
smo38502.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38500.addModifier(smo38502);
smo38502.addClass('lyric lyric-1');
smo38521v0ar.push(smo38500);
const smo38503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38503'] = smo38503;
smo38503.setAttribute('id', 'smo38503');
const smo38504 = new VF.Annotation('kein');
smo38504.setAttribute('id', 'smo38504');
smo38504.setFont('Merriweather', 12, 'normal');
smo38504.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38503.addModifier(smo38504);
smo38504.addClass('lyric lyric-0');
const smo38505 = new VF.Annotation('zu');
smo38505.setAttribute('id', 'smo38505');
smo38505.setFont('Merriweather', 12, 'normal');
smo38505.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38503.addModifier(smo38505);
smo38505.addClass('lyric lyric-1 lyric-hyphen');
smo38521v0ar.push(smo38503);
smo38521v0.addTickables(smo38521v0ar)
fmtsmo3852127.joinVoices([smo38521v0]);
const fmtsmo3979727 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo39797v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39797v0ar = [];
const smo39781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39781'] = smo39781;
smo39781.setAttribute('id', 'smo39781');
smo39781.addModifier(new VF.Dot(), 0);
smo39797v0ar.push(smo39781);
smo39797v0.addTickables(smo39797v0ar)
fmtsmo3979727.joinVoices([smo39797v0]);
const fmtsmo4097527 = new VF.Formatter();
//
// voices and notes for stave 2 27
const smo40975v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40975v0ar = [];
const smo40959 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo40959'] = smo40959;
smo40959.setAttribute('id', 'smo40959');
smo40959.addModifier(new VF.Dot(), 0);
smo40975v0ar.push(smo40959);
smo40975v0.addTickables(smo40975v0ar)
fmtsmo4097527.joinVoices([smo40975v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3852127.format([smo38521v0,smo39797v0,smo40975v0], 230);
const stavesmo38521 = new VF.Stave(843, 107.5133013333334, 244);
stavesmo38521.setAttribute('id', 'stavesmo38521');
stavesmo38521.setBegBarType(VF.Barline.type.NONE);
stavesmo38521.setContext(context);
stavesmo38521.draw();
smo38521v0.draw(context, stavesmo38521);
const stavesmo39797 = new VF.Stave(843, 214.5133013333334, 244);
stavesmo39797.setAttribute('id', 'stavesmo39797');
stavesmo39797.setBegBarType(VF.Barline.type.NONE);
stavesmo39797.setContext(context);
stavesmo39797.draw();
smo39797v0.draw(context, stavesmo39797);
const stavesmo40975 = new VF.Stave(843, 285.5133013333334, 244);
stavesmo40975.setAttribute('id', 'stavesmo40975');
stavesmo40975.setBegBarType(VF.Barline.type.NONE);
stavesmo40975.setContext(context);
stavesmo40975.draw();
smo40975v0.draw(context, stavesmo40975);
const fmtsmo3854328 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo38543v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38543v0ar = [];
const smo38522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38522'] = smo38522;
smo38522.setAttribute('id', 'smo38522');
smo38522.addModifier(new VF.Dot(), 0);
const smo38523 = new VF.Annotation('Po');
smo38523.setAttribute('id', 'smo38523');
smo38523.setFont('Merriweather', 12, 'normal');
smo38523.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38522.addModifier(smo38523);
smo38523.addClass('lyric lyric-0 lyric-hyphen');
const smo38524 = new VF.Annotation('rück');
smo38524.setAttribute('id', 'smo38524');
smo38524.setFont('Merriweather', 12, 'normal');
smo38524.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38522.addModifier(smo38524);
smo38524.addClass('lyric lyric-1');
smo38543v0ar.push(smo38522);
const smo38525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo38525'] = smo38525;
smo38525.setAttribute('id', 'smo38525');
smo38525.addModifier(new VF.Dot(), 0);
const smo38526 = new VF.Annotation('stil');
smo38526.setAttribute('id', 'smo38526');
smo38526.setFont('Merriweather', 12, 'normal');
smo38526.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38525.addModifier(smo38526);
smo38526.addClass('lyric lyric-0 lyric-hyphen');
const smo38527 = new VF.Annotation('ins');
smo38527.setAttribute('id', 'smo38527');
smo38527.setFont('Merriweather', 12, 'normal');
smo38527.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38525.addModifier(smo38527);
smo38527.addClass('lyric lyric-1');
smo38543v0ar.push(smo38525);
smo38543v0.addTickables(smo38543v0ar)
fmtsmo3854328.joinVoices([smo38543v0]);
const fmtsmo3981428 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo39814v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39814v0ar = [];
const smo39798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","bn/4/n"]}'))
noteHash['smo39798'] = smo39798;
smo39798.setAttribute('id', 'smo39798');
smo39798.addModifier(new VF.Dot(), 0);
smo39798.addModifier(new VF.Dot(), 1);
smo39814v0ar.push(smo39798);
smo39814v0.addTickables(smo39814v0ar)
fmtsmo3981428.joinVoices([smo39814v0]);
const fmtsmo4099228 = new VF.Formatter();
//
// voices and notes for stave 2 28
const smo40992v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40992v0ar = [];
const smo40976 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
noteHash['smo40976'] = smo40976;
smo40976.setAttribute('id', 'smo40976');
smo40976.addModifier(new VF.Dot(), 0);
smo40992v0ar.push(smo40976);
smo40992v0.addTickables(smo40992v0ar)
fmtsmo4099228.joinVoices([smo40992v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3854328.format([smo38543v0,smo39814v0,smo40992v0], 113);
const stavesmo38543 = new VF.Stave(1087, 107.5133013333334, 127);
stavesmo38543.setAttribute('id', 'stavesmo38543');
stavesmo38543.setBegBarType(VF.Barline.type.NONE);
stavesmo38543.setContext(context);
stavesmo38543.draw();
smo38543v0.draw(context, stavesmo38543);
const stavesmo39814 = new VF.Stave(1087, 214.5133013333334, 127);
stavesmo39814.setAttribute('id', 'stavesmo39814');
stavesmo39814.setBegBarType(VF.Barline.type.NONE);
stavesmo39814.setContext(context);
stavesmo39814.draw();
smo39814v0.draw(context, stavesmo39814);
const stavesmo40992 = new VF.Stave(1087, 285.5133013333334, 127);
stavesmo40992.setAttribute('id', 'stavesmo40992');
stavesmo40992.setBegBarType(VF.Barline.type.NONE);
stavesmo40992.setContext(context);
stavesmo40992.draw();
smo40992v0.draw(context, stavesmo40992);
const rightsmo41649stavesmo385432 = new VF.StaveConnector(stavesmo38543, stavesmo40992).setType(0);
rightsmo41649stavesmo385432.setContext(context).draw();
const fmtsmo3856729 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo38567v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38567v0ar = [];
const smo38544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38544'] = smo38544;
smo38544.setAttribute('id', 'smo38544');
smo38544.addModifier(new VF.Dot(), 0);
const smo38545 = new VF.Annotation('lion');
smo38545.setAttribute('id', 'smo38545');
smo38545.setFont('Merriweather', 12, 'normal');
smo38545.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38544.addModifier(smo38545);
smo38545.addClass('lyric lyric-0');
const smo38546 = new VF.Annotation('Häus,');
smo38546.setAttribute('id', 'smo38546');
smo38546.setFont('Merriweather', 12, 'normal');
smo38546.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38544.addModifier(smo38546);
smo38546.addClass('lyric lyric-1');
smo38567v0ar.push(smo38544);
const smo38547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo38547'] = smo38547;
smo38547.setAttribute('id', 'smo38547');
const smo38548 = new VF.Annotation('Häus');
smo38548.setAttribute('id', 'smo38548');
smo38548.setFont('Merriweather', 12, 'normal');
smo38548.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38547.addModifier(smo38548);
smo38548.addClass('lyric lyric-1');
smo38567v0ar.push(smo38547);
const smo38549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo38549'] = smo38549;
smo38549.setAttribute('id', 'smo38549');
const smo38550 = new VF.Annotation('Es');
smo38550.setAttribute('id', 'smo38550');
smo38550.setFont('Merriweather', 12, 'normal');
smo38550.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38549.addModifier(smo38550);
smo38550.addClass('lyric lyric-0');
const smo38551 = new VF.Annotation('es');
smo38551.setAttribute('id', 'smo38551');
smo38551.setFont('Merriweather', 12, 'normal');
smo38551.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38549.addModifier(smo38551);
smo38551.addClass('lyric lyric-1');
smo38567v0ar.push(smo38549);
smo38567v0.addTickables(smo38567v0ar)
fmtsmo3856729.joinVoices([smo38567v0]);
const fmtsmo3983329 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo39833v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39833v0ar = [];
const smo39815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","bn/4/n"]}'))
noteHash['smo39815'] = smo39815;
smo39815.setAttribute('id', 'smo39815');
smo39815.addModifier(new VF.Dot(), 0);
smo39815.addModifier(new VF.Dot(), 1);
smo39833v0ar.push(smo39815);
const smo39816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39816'] = smo39816;
smo39816.setAttribute('id', 'smo39816');
smo39833v0ar.push(smo39816);
const smo39817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39817'] = smo39817;
smo39817.setAttribute('id', 'smo39817');
smo39833v0ar.push(smo39817);
smo39833v0.addTickables(smo39833v0ar)
fmtsmo3983329.joinVoices([smo39833v0]);
const fmtsmo4101129 = new VF.Formatter();
//
// voices and notes for stave 2 29
const smo41011v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41011v0ar = [];
const smo40993 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
noteHash['smo40993'] = smo40993;
smo40993.setAttribute('id', 'smo40993');
smo40993.addModifier(new VF.Dot(), 0);
smo41011v0ar.push(smo40993);
const smo40994 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo40994'] = smo40994;
smo40994.setAttribute('id', 'smo40994');
smo41011v0ar.push(smo40994);
const smo40995 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo40995'] = smo40995;
smo40995.setAttribute('id', 'smo40995');
smo41011v0ar.push(smo40995);
smo41011v0.addTickables(smo41011v0ar)
fmtsmo4101129.joinVoices([smo41011v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3856729.format([smo38567v0,smo39833v0,smo41011v0], 218);
const stavesmo38567 = new VF.Stave(66, 398.5133013333334, 291);
stavesmo38567.setAttribute('id', 'stavesmo38567');
stavesmo38567.setBegBarType(1);
stavesmo38567.addClef('treble');
const keysmo38567 = new VF.KeySignature('G');
keysmo38567.addToStave(stavesmo38567);
stavesmo38567.setContext(context);
stavesmo38567.draw();
smo38567v0.draw(context, stavesmo38567);
const stavesmo39833 = new VF.Stave(66, 520.5133013333334, 291);
stavesmo39833.setAttribute('id', 'stavesmo39833');
stavesmo39833.setBegBarType(1);
stavesmo39833.addClef('treble');
const keysmo39833 = new VF.KeySignature('G');
keysmo39833.addToStave(stavesmo39833);
stavesmo39833.setContext(context);
stavesmo39833.draw();
smo39833v0.draw(context, stavesmo39833);
const stavesmo41011 = new VF.Stave(66, 643.5133013333334, 291);
stavesmo41011.setAttribute('id', 'stavesmo41011');
stavesmo41011.setBegBarType(1);
stavesmo41011.addClef('bass');
const keysmo41011 = new VF.KeySignature('G');
keysmo41011.addToStave(stavesmo41011);
stavesmo41011.setContext(context);
stavesmo41011.draw();
smo41011v0.draw(context, stavesmo41011);
const leftsmo41649stavesmo385672 = new VF.StaveConnector(stavesmo38567, stavesmo41011).setType(1);
leftsmo41649stavesmo385672.setContext(context).draw();
const fmtsmo3858630 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo38586v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38586v0ar = [];
const smo38568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38568'] = smo38568;
smo38568.setAttribute('id', 'smo38568');
smo38568.addModifier(new VF.Dot(), 0);
const smo38570 = new VF.Annotation('klingt');
smo38570.setAttribute('id', 'smo38570');
smo38570.setFont('Merriweather', 12, 'normal');
smo38570.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38568.addModifier(smo38570);
smo38570.addClass('lyric lyric-0');
const smo38569 = new VF.Annotation('sagt');
smo38569.setAttribute('id', 'smo38569');
smo38569.setFont('Merriweather', 12, 'normal');
smo38569.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38568.addModifier(smo38569);
smo38569.addClass('lyric lyric-1');
smo38586v0ar.push(smo38568);
smo38586v0.addTickables(smo38586v0ar)
fmtsmo3858630.joinVoices([smo38586v0]);
const fmtsmo3985030 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo39850v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39850v0ar = [];
const smo39834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39834'] = smo39834;
smo39834.setAttribute('id', 'smo39834');
smo39834.addModifier(new VF.Dot(), 0);
smo39850v0ar.push(smo39834);
smo39850v0.addTickables(smo39850v0ar)
fmtsmo3985030.joinVoices([smo39850v0]);
const fmtsmo4103230 = new VF.Formatter();
//
// voices and notes for stave 2 30
const smo41032v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41032v0ar = [];
const smo41012 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo41012'] = smo41012;
smo41012.setAttribute('id', 'smo41012');
smo41012.addModifier(new VF.Dot(), 0);
smo41032v0ar.push(smo41012);
smo41032v0.addTickables(smo41032v0ar)
fmtsmo4103230.joinVoices([smo41032v0]);
const smo41032v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41032v1ar = [];
const smo41013 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41013'] = smo41013;
smo41013.setAttribute('id', 'smo41013');
smo41013.setStyle({ fillStyle: "#115511" });
smo41032v1ar.push(smo41013);
const smo41014 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41014'] = smo41014;
smo41014.setAttribute('id', 'smo41014');
smo41014.setStyle({ fillStyle: "#115511" });
smo41032v1ar.push(smo41014);
const smo41015 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41015'] = smo41015;
smo41015.setAttribute('id', 'smo41015');
smo41015.setStyle({ fillStyle: "#115511" });
smo41032v1ar.push(smo41015);
const smo41016 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41016'] = smo41016;
smo41016.setAttribute('id', 'smo41016');
smo41016.setStyle({ fillStyle: "#115511" });
smo41032v1ar.push(smo41016);
smo41032v1.addTickables(smo41032v1ar)
fmtsmo4103230.joinVoices([smo41032v1]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3858630.format([smo38586v0,smo39850v0,smo41032v0,smo41032v1], 197);
const stavesmo38586 = new VF.Stave(357, 398.5133013333334, 211);
stavesmo38586.setAttribute('id', 'stavesmo38586');
stavesmo38586.setBegBarType(VF.Barline.type.NONE);
stavesmo38586.setContext(context);
stavesmo38586.draw();
smo38586v0.draw(context, stavesmo38586);
const stavesmo39850 = new VF.Stave(357, 520.5133013333334, 211);
stavesmo39850.setAttribute('id', 'stavesmo39850');
stavesmo39850.setBegBarType(VF.Barline.type.NONE);
stavesmo39850.setContext(context);
stavesmo39850.draw();
smo39850v0.draw(context, stavesmo39850);
const stavesmo41032 = new VF.Stave(357, 643.5133013333334, 211);
stavesmo41032.setAttribute('id', 'stavesmo41032');
stavesmo41032.setBegBarType(VF.Barline.type.NONE);
stavesmo41032.setContext(context);
stavesmo41032.draw();
smo41032v0.draw(context, stavesmo41032);
smo41032v1.draw(context, stavesmo41032);
const fmtsmo3861431 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo38614v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38614v0ar = [];
const smo38587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38587'] = smo38587;
smo38587.setAttribute('id', 'smo38587');
const smo38588 = new VF.Annotation('-');
smo38588.setAttribute('id', 'smo38588');
smo38588.setFont('Merriweather', 12, 'normal');
smo38588.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38587.addModifier(smo38588);
smo38588.addClass('lyric lyric-0 lyric-hyphen');
const smo38589 = new VF.Annotation('-');
smo38589.setAttribute('id', 'smo38589');
smo38589.setFont('Merriweather', 12, 'normal');
smo38589.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38587.addModifier(smo38589);
smo38589.addClass('lyric lyric-1 lyric-hyphen');
smo38614v0ar.push(smo38587);
const smo38590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38590'] = smo38590;
smo38590.setAttribute('id', 'smo38590');
const smo38591 = new VF.Annotation('wenn');
smo38591.setAttribute('id', 'smo38591');
smo38591.setFont('Merriweather', 12, 'normal');
smo38591.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38590.addModifier(smo38591);
smo38591.addClass('lyric lyric-0');
const smo38592 = new VF.Annotation('zu');
smo38592.setAttribute('id', 'smo38592');
smo38592.setFont('Merriweather', 12, 'normal');
smo38592.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38590.addModifier(smo38592);
smo38592.addClass('lyric lyric-1');
smo38614v0ar.push(smo38590);
const smo38593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38593'] = smo38593;
smo38593.setAttribute('id', 'smo38593');
const smo38594 = new VF.Annotation('es');
smo38594.setAttribute('id', 'smo38594');
smo38594.setFont('Merriweather', 12, 'normal');
smo38594.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38593.addModifier(smo38594);
smo38594.addClass('lyric lyric-0');
const smo38595 = new VF.Annotation('ihm');
smo38595.setAttribute('id', 'smo38595');
smo38595.setFont('Merriweather', 12, 'normal');
smo38595.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38593.addModifier(smo38595);
smo38595.addClass('lyric lyric-1');
smo38614v0ar.push(smo38593);
const smo38596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38596'] = smo38596;
smo38596.setAttribute('id', 'smo38596');
const smo38597 = new VF.Annotation('von');
smo38597.setAttribute('id', 'smo38597');
smo38597.setFont('Merriweather', 12, 'normal');
smo38597.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38596.addModifier(smo38597);
smo38597.addClass('lyric lyric-0');
const smo38598 = new VF.Annotation('Denk\'');
smo38598.setAttribute('id', 'smo38598');
smo38598.setFont('Merriweather', 12, 'normal');
smo38598.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38596.addModifier(smo38598);
smo38598.addClass('lyric lyric-1');
smo38614v0ar.push(smo38596);
smo38614v0.addTickables(smo38614v0ar)
fmtsmo3861431.joinVoices([smo38614v0]);
const fmtsmo3986831 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo39868v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39868v0ar = [];
const smo39851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39851'] = smo39851;
smo39851.setAttribute('id', 'smo39851');
smo39851.addModifier(new VF.Dot(), 0);
smo39868v0ar.push(smo39851);
const smo39852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
noteHash['smo39852'] = smo39852;
smo39852.setAttribute('id', 'smo39852');
smo39852.addModifier(new VF.Dot(), 0);
smo39868v0ar.push(smo39852);
smo39868v0.addTickables(smo39868v0ar)
fmtsmo3986831.joinVoices([smo39868v0]);
const fmtsmo4105331 = new VF.Formatter();
//
// voices and notes for stave 2 31
const smo41053v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41053v0ar = [];
const smo41033 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo41033'] = smo41033;
smo41033.setAttribute('id', 'smo41033');
smo41033.addModifier(new VF.Dot(), 0);
smo41053v0ar.push(smo41033);
smo41053v0.addTickables(smo41053v0ar)
fmtsmo4105331.joinVoices([smo41053v0]);
const smo41053v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41053v1ar = [];
const smo41034 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41034'] = smo41034;
smo41034.setAttribute('id', 'smo41034');
smo41034.setStyle({ fillStyle: "#115511" });
smo41053v1ar.push(smo41034);
const smo41035 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41035'] = smo41035;
smo41035.setAttribute('id', 'smo41035');
smo41035.setStyle({ fillStyle: "#115511" });
smo41053v1ar.push(smo41035);
const smo41036 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41036'] = smo41036;
smo41036.setAttribute('id', 'smo41036');
smo41036.setStyle({ fillStyle: "#115511" });
smo41053v1ar.push(smo41036);
const smo41037 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41037'] = smo41037;
smo41037.setAttribute('id', 'smo41037');
smo41037.setStyle({ fillStyle: "#115511" });
smo41053v1ar.push(smo41037);
smo41053v1.addTickables(smo41053v1ar)
fmtsmo4105331.joinVoices([smo41053v1]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3861431.format([smo38614v0,smo39868v0,smo41053v0,smo41053v1], 293);
const stavesmo38614 = new VF.Stave(568, 398.5133013333334, 307);
stavesmo38614.setAttribute('id', 'stavesmo38614');
stavesmo38614.setBegBarType(VF.Barline.type.NONE);
stavesmo38614.setContext(context);
stavesmo38614.draw();
smo38614v0.draw(context, stavesmo38614);
const stavesmo39868 = new VF.Stave(568, 520.5133013333334, 307);
stavesmo39868.setAttribute('id', 'stavesmo39868');
stavesmo39868.setBegBarType(VF.Barline.type.NONE);
stavesmo39868.setContext(context);
stavesmo39868.draw();
smo39868v0.draw(context, stavesmo39868);
const stavesmo41053 = new VF.Stave(568, 643.5133013333334, 307);
stavesmo41053.setAttribute('id', 'stavesmo41053');
stavesmo41053.setBegBarType(VF.Barline.type.NONE);
stavesmo41053.setContext(context);
stavesmo41053.draw();
smo41053v0.draw(context, stavesmo41053);
smo41053v1.draw(context, stavesmo41053);
const fmtsmo3864232 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo38642v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38642v0ar = [];
const smo38615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38615'] = smo38615;
smo38615.setAttribute('id', 'smo38615');
const smo38616 = new VF.Annotation('fer');
smo38616.setAttribute('id', 'smo38616');
smo38616.setFont('Merriweather', 12, 'normal');
smo38616.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38615.addModifier(smo38616);
smo38616.addClass('lyric lyric-0 lyric-hyphen');
const smo38617 = new VF.Annotation('im');
smo38617.setAttribute('id', 'smo38617');
smo38617.setFont('Merriweather', 12, 'normal');
smo38617.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38615.addModifier(smo38617);
smo38617.addClass('lyric lyric-1 lyric-hyphen');
smo38642v0ar.push(smo38615);
const smo38618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38618'] = smo38618;
smo38618.setAttribute('id', 'smo38618');
const smo38619 = new VF.Annotation('ne');
smo38619.setAttribute('id', 'smo38619');
smo38619.setFont('Merriweather', 12, 'normal');
smo38619.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38618.addModifier(smo38619);
smo38619.addClass('lyric lyric-0');
const smo38620 = new VF.Annotation('mer');
smo38620.setAttribute('id', 'smo38620');
smo38620.setFont('Merriweather', 12, 'normal');
smo38620.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38618.addModifier(smo38620);
smo38620.addClass('lyric lyric-1');
smo38642v0ar.push(smo38618);
const smo38621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo38621'] = smo38621;
smo38621.setAttribute('id', 'smo38621');
const smo38622 = new VF.Annotation('er');
smo38622.setAttribute('id', 'smo38622');
smo38622.setFont('Merriweather', 12, 'normal');
smo38622.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38621.addModifier(smo38622);
smo38622.addClass('lyric lyric-0 lyric-hyphen');
const smo38623 = new VF.Annotation('an');
smo38623.setAttribute('id', 'smo38623');
smo38623.setFont('Merriweather', 12, 'normal');
smo38623.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38621.addModifier(smo38623);
smo38623.addClass('lyric lyric-1');
smo38642v0ar.push(smo38621);
const smo38624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38624'] = smo38624;
smo38624.setAttribute('id', 'smo38624');
smo38624.addModifier(new VF.Dot(), 0);
const smo38626 = new VF.Annotation('schalit');
smo38626.setAttribute('id', 'smo38626');
smo38626.setFont('Merriweather', 12, 'normal');
smo38626.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38624.addModifier(smo38626);
smo38626.addClass('lyric lyric-0');
const smo38625 = new VF.Annotation('mich');
smo38625.setAttribute('id', 'smo38625');
smo38625.setFont('Merriweather', 12, 'normal');
smo38625.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38624.addModifier(smo38625);
smo38625.addClass('lyric lyric-1');
smo38642v0ar.push(smo38624);
smo38642v0.addTickables(smo38642v0ar)
fmtsmo3864232.joinVoices([smo38642v0]);
const fmtsmo3988532 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo39885v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39885v0ar = [];
const smo39869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39869'] = smo39869;
smo39869.setAttribute('id', 'smo39869');
smo39869.addModifier(new VF.Dot(), 0);
smo39885v0ar.push(smo39869);
smo39885v0.addTickables(smo39885v0ar)
fmtsmo3988532.joinVoices([smo39885v0]);
const fmtsmo4107432 = new VF.Formatter();
//
// voices and notes for stave 2 32
const smo41074v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41074v0ar = [];
const smo41054 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo41054'] = smo41054;
smo41054.setAttribute('id', 'smo41054');
smo41054.addModifier(new VF.Dot(), 0);
smo41074v0ar.push(smo41054);
smo41074v0.addTickables(smo41074v0ar)
fmtsmo4107432.joinVoices([smo41074v0]);
const smo41074v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41074v1ar = [];
const smo41055 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo41055'] = smo41055;
smo41055.setAttribute('id', 'smo41055');
smo41055.setStyle({ fillStyle: "#115511" });
const smo410550acc = new VF.Accidental('#');
smo41055.addModifier(smo410550acc, 0);
smo41074v1ar.push(smo41055);
const smo41056 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo41056'] = smo41056;
smo41056.setAttribute('id', 'smo41056');
smo41056.setStyle({ fillStyle: "#115511" });
smo41074v1ar.push(smo41056);
const smo41057 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo41057'] = smo41057;
smo41057.setAttribute('id', 'smo41057');
smo41057.setStyle({ fillStyle: "#115511" });
smo41074v1ar.push(smo41057);
const smo41058 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo41058'] = smo41058;
smo41058.setAttribute('id', 'smo41058');
smo41058.setStyle({ fillStyle: "#115511" });
smo41074v1ar.push(smo41058);
smo41074v1.addTickables(smo41074v1ar)
fmtsmo4107432.joinVoices([smo41074v1]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47840 = smo38615.getStemDirection();
smo38615.setStemDirection(dirsmo47840);
smo38618.setStemDirection(dirsmo47840);
smo38621.setStemDirection(dirsmo47840);
const smo47840 = new VF.Beam([smo38615,smo38618,smo38621]);
 
// formatting measures in staff group smo41649
fmtsmo3864232.format([smo38642v0,smo39885v0,smo41074v0,smo41074v1], 321);
const stavesmo38642 = new VF.Stave(875, 398.5133013333334, 335);
stavesmo38642.setAttribute('id', 'stavesmo38642');
stavesmo38642.setBegBarType(VF.Barline.type.NONE);
stavesmo38642.setContext(context);
stavesmo38642.draw();
smo38642v0.draw(context, stavesmo38642);
smo47840.setContext(context);
smo47840.draw();
const stavesmo39885 = new VF.Stave(875, 520.5133013333334, 335);
stavesmo39885.setAttribute('id', 'stavesmo39885');
stavesmo39885.setBegBarType(VF.Barline.type.NONE);
stavesmo39885.setContext(context);
stavesmo39885.draw();
smo39885v0.draw(context, stavesmo39885);
const stavesmo41074 = new VF.Stave(875, 643.5133013333334, 335);
stavesmo41074.setAttribute('id', 'stavesmo41074');
stavesmo41074.setBegBarType(VF.Barline.type.NONE);
stavesmo41074.setContext(context);
stavesmo41074.draw();
smo41074v0.draw(context, stavesmo41074);
smo41074v1.draw(context, stavesmo41074);
const rightsmo41649stavesmo386422 = new VF.StaveConnector(stavesmo38642, stavesmo41074).setType(0);
rightsmo41649stavesmo386422.setContext(context).draw();
const fmtsmo3867233 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo38672v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38672v0ar = [];
const smo38643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38643'] = smo38643;
smo38643.setAttribute('id', 'smo38643');
const smo38644 = new VF.Annotation('-');
smo38644.setAttribute('id', 'smo38644');
smo38644.setFont('Merriweather', 12, 'normal');
smo38644.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38643.addModifier(smo38644);
smo38644.addClass('lyric lyric-0 lyric-hyphen');
smo38672v0ar.push(smo38643);
const smo38645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo38645'] = smo38645;
smo38645.setAttribute('id', 'smo38645');
const smo38646 = new VF.Annotation('ais');
smo38646.setAttribute('id', 'smo38646');
smo38646.setFont('Merriweather', 12, 'normal');
smo38646.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38645.addModifier(smo38646);
smo38646.addClass('lyric lyric-0');
const smo38647 = new VF.Annotation('du');
smo38647.setAttribute('id', 'smo38647');
smo38647.setFont('Merriweather', 12, 'normal');
smo38647.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38645.addModifier(smo38647);
smo38647.addClass('lyric lyric-1');
smo38672v0ar.push(smo38645);
const smo38648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo38648'] = smo38648;
smo38648.setAttribute('id', 'smo38648');
const smo38649 = new VF.Annotation('ruit');
smo38649.setAttribute('id', 'smo38649');
smo38649.setFont('Merriweather', 12, 'normal');
smo38649.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38648.addModifier(smo38649);
smo38649.addClass('lyric lyric-0');
const smo38650 = new VF.Annotation('weißt');
smo38650.setAttribute('id', 'smo38650');
smo38650.setFont('Merriweather', 12, 'normal');
smo38650.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38648.addModifier(smo38650);
smo38650.addClass('lyric lyric-1');
smo38672v0ar.push(smo38648);
const smo38651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38651'] = smo38651;
smo38651.setAttribute('id', 'smo38651');
const smo38652 = new VF.Annotation('er');
smo38652.setAttribute('id', 'smo38652');
smo38652.setFont('Merriweather', 12, 'normal');
smo38652.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38651.addModifier(smo38652);
smo38652.addClass('lyric lyric-0');
const smo38653 = new VF.Annotation('doch,');
smo38653.setAttribute('id', 'smo38653');
smo38653.setFont('Merriweather', 12, 'normal');
smo38653.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38651.addModifier(smo38653);
smo38653.addClass('lyric lyric-1');
smo38672v0ar.push(smo38651);
const smo38654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38654'] = smo38654;
smo38654.setAttribute('id', 'smo38654');
const smo38655 = new VF.Annotation('Ich');
smo38655.setAttribute('id', 'smo38655');
smo38655.setFont('Merriweather', 12, 'normal');
smo38655.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38654.addModifier(smo38655);
smo38655.addClass('lyric lyric-0');
const smo38656 = new VF.Annotation('ich');
smo38656.setAttribute('id', 'smo38656');
smo38656.setFont('Merriweather', 12, 'normal');
smo38656.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38654.addModifier(smo38656);
smo38656.addClass('lyric lyric-1');
smo38672v0ar.push(smo38654);
smo38672v0.addTickables(smo38672v0ar)
fmtsmo3867233.joinVoices([smo38672v0]);
const fmtsmo3990533 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo39905v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39905v0ar = [];
const smo39886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39886'] = smo39886;
smo39886.setAttribute('id', 'smo39886');
smo39905v0ar.push(smo39886);
const smo39887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39887'] = smo39887;
smo39887.setAttribute('id', 'smo39887');
smo39905v0ar.push(smo39887);
const smo39888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39888'] = smo39888;
smo39888.setAttribute('id', 'smo39888');
smo39905v0ar.push(smo39888);
const smo39889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39889'] = smo39889;
smo39889.setAttribute('id', 'smo39889');
smo39905v0ar.push(smo39889);
smo39905v0.addTickables(smo39905v0ar)
fmtsmo3990533.joinVoices([smo39905v0]);
const fmtsmo4109533 = new VF.Formatter();
//
// voices and notes for stave 2 33
const smo41095v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41095v0ar = [];
const smo41075 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo41075'] = smo41075;
smo41075.setAttribute('id', 'smo41075');
smo41075.addModifier(new VF.Dot(), 0);
smo41095v0ar.push(smo41075);
smo41095v0.addTickables(smo41095v0ar)
fmtsmo4109533.joinVoices([smo41095v0]);
const smo41095v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41095v1ar = [];
const smo41076 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo41076'] = smo41076;
smo41076.setAttribute('id', 'smo41076');
smo41076.setStyle({ fillStyle: "#115511" });
const smo410760acc = new VF.Accidental('#');
smo41076.addModifier(smo410760acc, 0);
smo41095v1ar.push(smo41076);
const smo41077 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo41077'] = smo41077;
smo41077.setAttribute('id', 'smo41077');
smo41077.setStyle({ fillStyle: "#115511" });
smo41095v1ar.push(smo41077);
const smo41078 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo41078'] = smo41078;
smo41078.setAttribute('id', 'smo41078');
smo41078.setStyle({ fillStyle: "#115511" });
smo41095v1ar.push(smo41078);
const smo41079 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo41079'] = smo41079;
smo41079.setAttribute('id', 'smo41079');
smo41079.setStyle({ fillStyle: "#115511" });
smo41095v1ar.push(smo41079);
smo41095v1.addTickables(smo41095v1ar)
fmtsmo4109533.joinVoices([smo41095v1]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47854 = smo38648.getStemDirection();
smo38648.setStemDirection(dirsmo47854);
smo38651.setStemDirection(dirsmo47854);
smo38654.setStemDirection(dirsmo47854);
const smo47854 = new VF.Beam([smo38648,smo38651,smo38654]);
 
// formatting measures in staff group smo41649
fmtsmo3867233.format([smo38672v0,smo39905v0,smo41095v0,smo41095v1], 293);
const stavesmo38672 = new VF.Stave(66, 778.5133013333334, 367);
stavesmo38672.setAttribute('id', 'stavesmo38672');
stavesmo38672.setBegBarType(1);
stavesmo38672.addClef('treble');
const keysmo38672 = new VF.KeySignature('G');
keysmo38672.addToStave(stavesmo38672);
stavesmo38672.setContext(context);
stavesmo38672.draw();
smo38672v0.draw(context, stavesmo38672);
smo47854.setContext(context);
smo47854.draw();
const stavesmo39905 = new VF.Stave(66, 893.5133013333334, 367);
stavesmo39905.setAttribute('id', 'stavesmo39905');
stavesmo39905.setBegBarType(1);
stavesmo39905.addClef('treble');
const keysmo39905 = new VF.KeySignature('G');
keysmo39905.addToStave(stavesmo39905);
stavesmo39905.setContext(context);
stavesmo39905.draw();
smo39905v0.draw(context, stavesmo39905);
const stavesmo41095 = new VF.Stave(66, 1026.5133013333334, 367);
stavesmo41095.setAttribute('id', 'stavesmo41095');
stavesmo41095.setBegBarType(1);
stavesmo41095.addClef('bass');
const keysmo41095 = new VF.KeySignature('G');
keysmo41095.addToStave(stavesmo41095);
stavesmo41095.setContext(context);
stavesmo41095.draw();
smo41095v0.draw(context, stavesmo41095);
smo41095v1.draw(context, stavesmo41095);
const leftsmo41649stavesmo386722 = new VF.StaveConnector(stavesmo38672, stavesmo41095).setType(1);
leftsmo41649stavesmo386722.setContext(context).draw();
const fmtsmo3869734 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo38697v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38697v0ar = [];
const smo38673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38673'] = smo38673;
smo38673.setAttribute('id', 'smo38673');
const smo38674 = new VF.Annotation('kom');
smo38674.setAttribute('id', 'smo38674');
smo38674.setFont('Merriweather', 12, 'normal');
smo38674.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38673.addModifier(smo38674);
smo38674.addClass('lyric lyric-0 lyric-hyphen');
const smo38675 = new VF.Annotation('lie');
smo38675.setAttribute('id', 'smo38675');
smo38675.setFont('Merriweather', 12, 'normal');
smo38675.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38673.addModifier(smo38675);
smo38675.addClass('lyric lyric-1 lyric-hyphen');
smo38697v0ar.push(smo38673);
const smo38676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo38676'] = smo38676;
smo38676.setAttribute('id', 'smo38676');
const smo38677 = new VF.Annotation('me');
smo38677.setAttribute('id', 'smo38677');
smo38677.setFont('Merriweather', 12, 'normal');
smo38677.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38676.addModifier(smo38677);
smo38677.addClass('lyric lyric-0');
const smo38678 = new VF.Annotation('be');
smo38678.setAttribute('id', 'smo38678');
smo38678.setFont('Merriweather', 12, 'normal');
smo38678.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38676.addModifier(smo38678);
smo38678.addClass('lyric lyric-1 lyric-hyphen');
smo38697v0ar.push(smo38676);
const smo38679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38679'] = smo38679;
smo38679.setAttribute('id', 'smo38679');
smo38679.addModifier(new VF.Dot(), 0);
const smo38681 = new VF.Annotation('bald!');
smo38681.setAttribute('id', 'smo38681');
smo38681.setFont('Merriweather', 12, 'normal');
smo38681.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38679.addModifier(smo38681);
smo38681.addClass('lyric lyric-0');
const smo38680 = new VF.Annotation('dich!');
smo38680.setAttribute('id', 'smo38680');
smo38680.setFont('Merriweather', 12, 'normal');
smo38680.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38679.addModifier(smo38680);
smo38680.addClass('lyric lyric-1');
smo38697v0ar.push(smo38679);
smo38697v0.addTickables(smo38697v0ar)
fmtsmo3869734.joinVoices([smo38697v0]);
const fmtsmo3992434 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo39924v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39924v0ar = [];
const smo39906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39906'] = smo39906;
smo39906.setAttribute('id', 'smo39906');
smo39906.addModifier(new VF.Dot(), 0);
smo39924v0ar.push(smo39906);
const smo39907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39907'] = smo39907;
smo39907.setAttribute('id', 'smo39907');
smo39924v0ar.push(smo39907);
const smo39908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39908'] = smo39908;
smo39908.setAttribute('id', 'smo39908');
smo39924v0ar.push(smo39908);
smo39924v0.addTickables(smo39924v0ar)
fmtsmo3992434.joinVoices([smo39924v0]);
const fmtsmo4111334 = new VF.Formatter();
//
// voices and notes for stave 2 34
const smo41113v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41113v0ar = [];
const smo41096 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo41096'] = smo41096;
smo41096.setAttribute('id', 'smo41096');
smo41096.addModifier(new VF.Dot(), 0);
smo41113v0ar.push(smo41096);
smo41113v0.addTickables(smo41113v0ar)
fmtsmo4111334.joinVoices([smo41113v0]);
const smo41113v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41113v1ar = [];
const smo41097 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo41097'] = smo41097;
smo41097.setAttribute('id', 'smo41097');
smo41097.setStyle({ fillStyle: "#115511" });
smo41097.addModifier(new VF.Dot(), 0);
smo41113v1ar.push(smo41097);
smo41113v1.addTickables(smo41113v1ar)
fmtsmo4111334.joinVoices([smo41113v1]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3869734.format([smo38697v0,smo39924v0,smo41113v0,smo41113v1], 200);
const stavesmo38697 = new VF.Stave(433, 778.5133013333334, 214);
stavesmo38697.setAttribute('id', 'stavesmo38697');
stavesmo38697.setBegBarType(VF.Barline.type.NONE);
stavesmo38697.setContext(context);
stavesmo38697.draw();
smo38697v0.draw(context, stavesmo38697);
const stavesmo39924 = new VF.Stave(433, 893.5133013333334, 214);
stavesmo39924.setAttribute('id', 'stavesmo39924');
stavesmo39924.setBegBarType(VF.Barline.type.NONE);
stavesmo39924.setContext(context);
stavesmo39924.draw();
smo39924v0.draw(context, stavesmo39924);
const stavesmo41113 = new VF.Stave(433, 1026.5133013333334, 214);
stavesmo41113.setAttribute('id', 'stavesmo41113');
stavesmo41113.setBegBarType(VF.Barline.type.NONE);
stavesmo41113.setContext(context);
stavesmo41113.draw();
smo41113v0.draw(context, stavesmo41113);
smo41113v1.draw(context, stavesmo41113);
const fmtsmo3871935 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo38719v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38719v0ar = [];
const smo38698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38698'] = smo38698;
smo38698.setAttribute('id', 'smo38698');
smo38698.addModifier(new VF.Dot(), 0);
const smo38699 = new VF.Annotation('-');
smo38699.setAttribute('id', 'smo38699');
smo38699.setFont('Merriweather', 12, 'normal');
smo38699.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38698.addModifier(smo38699);
smo38699.addClass('lyric lyric-0 lyric-hyphen');
smo38719v0ar.push(smo38698);
const smo38700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo38700'] = smo38700;
smo38700.setAttribute('id', 'smo38700');
smo38719v0ar.push(smo38700);
const smo38701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38701'] = smo38701;
smo38701.setAttribute('id', 'smo38701');
const smo38702 = new VF.Annotation('Ich');
smo38702.setAttribute('id', 'smo38702');
smo38702.setFont('Merriweather', 12, 'normal');
smo38702.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38701.addModifier(smo38702);
smo38702.addClass('lyric lyric-0');
const smo38703 = new VF.Annotation('ich');
smo38703.setAttribute('id', 'smo38703');
smo38703.setFont('Merriweather', 12, 'normal');
smo38703.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38701.addModifier(smo38703);
smo38703.addClass('lyric lyric-1');
smo38719v0ar.push(smo38701);
smo38719v0.addTickables(smo38719v0ar)
fmtsmo3871935.joinVoices([smo38719v0]);
const fmtsmo3994135 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo39941v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39941v0ar = [];
const smo39925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo39925'] = smo39925;
smo39925.setAttribute('id', 'smo39925');
smo39925.addModifier(new VF.Dot(), 0);
smo39941v0ar.push(smo39925);
smo39941v0.addTickables(smo39941v0ar)
fmtsmo3994135.joinVoices([smo39941v0]);
const fmtsmo4113335 = new VF.Formatter();
//
// voices and notes for stave 2 35
const smo41133v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41133v0ar = [];
const smo41114 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo41114'] = smo41114;
smo41114.setAttribute('id', 'smo41114');
smo41114.addModifier(new VF.Dot(), 0);
smo41133v0ar.push(smo41114);
smo41133v0.addTickables(smo41133v0ar)
fmtsmo4113335.joinVoices([smo41133v0]);
const smo41133v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41133v1ar = [];
const smo41115 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo41115'] = smo41115;
smo41115.setAttribute('id', 'smo41115');
smo41115.setStyle({ fillStyle: "#115511" });
smo41133v1ar.push(smo41115);
const smo41116 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo41116'] = smo41116;
smo41116.setAttribute('id', 'smo41116');
smo41116.setStyle({ fillStyle: "#115511" });
smo41133v1ar.push(smo41116);
const smo41117 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo41117'] = smo41117;
smo41117.setAttribute('id', 'smo41117');
smo41117.setStyle({ fillStyle: "#115511" });
smo41117.addModifier(new VF.Dot(), 0);
smo41133v1ar.push(smo41117);
smo41133v1.addTickables(smo41133v1ar)
fmtsmo4113335.joinVoices([smo41133v1]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3871935.format([smo38719v0,smo39941v0,smo41133v0,smo41133v1], 155);
const stavesmo38719 = new VF.Stave(647, 778.5133013333334, 169);
stavesmo38719.setAttribute('id', 'stavesmo38719');
stavesmo38719.setBegBarType(VF.Barline.type.NONE);
stavesmo38719.setContext(context);
stavesmo38719.draw();
smo38719v0.draw(context, stavesmo38719);
const stavesmo39941 = new VF.Stave(647, 893.5133013333334, 169);
stavesmo39941.setAttribute('id', 'stavesmo39941');
stavesmo39941.setBegBarType(VF.Barline.type.NONE);
stavesmo39941.setContext(context);
stavesmo39941.draw();
smo39941v0.draw(context, stavesmo39941);
const stavesmo41133 = new VF.Stave(647, 1026.5133013333334, 169);
stavesmo41133.setAttribute('id', 'stavesmo41133');
stavesmo41133.setBegBarType(VF.Barline.type.NONE);
stavesmo41133.setContext(context);
stavesmo41133.draw();
smo41133v0.draw(context, stavesmo41133);
smo41133v1.draw(context, stavesmo41133);
const fmtsmo3874436 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo38744v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38744v0ar = [];
const smo38720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38720'] = smo38720;
smo38720.setAttribute('id', 'smo38720');
const smo38721 = new VF.Annotation('kom');
smo38721.setAttribute('id', 'smo38721');
smo38721.setFont('Merriweather', 12, 'normal');
smo38721.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38720.addModifier(smo38721);
smo38721.addClass('lyric lyric-0 lyric-hyphen');
const smo38722 = new VF.Annotation('lie');
smo38722.setAttribute('id', 'smo38722');
smo38722.setFont('Merriweather', 12, 'normal');
smo38722.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38720.addModifier(smo38722);
smo38722.addClass('lyric lyric-1 lyric-hyphen');
smo38744v0ar.push(smo38720);
const smo38723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo38723'] = smo38723;
smo38723.setAttribute('id', 'smo38723');
const smo38724 = new VF.Annotation('me');
smo38724.setAttribute('id', 'smo38724');
smo38724.setFont('Merriweather', 12, 'normal');
smo38724.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38723.addModifier(smo38724);
smo38724.addClass('lyric lyric-0');
const smo38725 = new VF.Annotation('be');
smo38725.setAttribute('id', 'smo38725');
smo38725.setFont('Merriweather', 12, 'normal');
smo38725.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38723.addModifier(smo38725);
smo38725.addClass('lyric lyric-1');
smo38744v0ar.push(smo38723);
const smo38726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38726'] = smo38726;
smo38726.setAttribute('id', 'smo38726');
smo38726.addModifier(new VF.Dot(), 0);
const smo38727 = new VF.Annotation('bald');
smo38727.setAttribute('id', 'smo38727');
smo38727.setFont('Merriweather', 12, 'normal');
smo38727.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38726.addModifier(smo38727);
smo38727.addClass('lyric lyric-0');
const smo38728 = new VF.Annotation('dich!');
smo38728.setAttribute('id', 'smo38728');
smo38728.setFont('Merriweather', 12, 'normal');
smo38728.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38726.addModifier(smo38728);
smo38728.addClass('lyric lyric-1');
smo38744v0ar.push(smo38726);
smo38744v0.addTickables(smo38744v0ar)
fmtsmo3874436.joinVoices([smo38744v0]);
const fmtsmo3995836 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo39958v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39958v0ar = [];
const smo39942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39942'] = smo39942;
smo39942.setAttribute('id', 'smo39942');
smo39942.addModifier(new VF.Dot(), 0);
smo39958v0ar.push(smo39942);
smo39958v0.addTickables(smo39958v0ar)
fmtsmo3995836.joinVoices([smo39958v0]);
const fmtsmo4115336 = new VF.Formatter();
//
// voices and notes for stave 2 36
const smo41153v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41153v0ar = [];
const smo41134 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo41134'] = smo41134;
smo41134.setAttribute('id', 'smo41134');
smo41134.addModifier(new VF.Dot(), 0);
smo41153v0ar.push(smo41134);
smo41153v0.addTickables(smo41153v0ar)
fmtsmo4115336.joinVoices([smo41153v0]);
const smo41153v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41153v1ar = [];
const smo41135 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
noteHash['smo41135'] = smo41135;
smo41135.setAttribute('id', 'smo41135');
smo41135.setStyle({ fillStyle: '#aaaaaa7f' });
smo41135.addModifier(new VF.Dot(), 0);
smo41153v1ar.push(smo41135);
const smo41136 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
noteHash['smo41136'] = smo41136;
smo41136.setAttribute('id', 'smo41136');
smo41136.setStyle({ fillStyle: '#aaaaaa7f' });
smo41153v1ar.push(smo41136);
const smo41137 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo41137'] = smo41137;
smo41137.setAttribute('id', 'smo41137');
smo41137.setStyle({ fillStyle: "#115511" });
smo41153v1ar.push(smo41137);
smo41153v1.addTickables(smo41153v1ar)
fmtsmo4115336.joinVoices([smo41153v1]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3874436.format([smo38744v0,smo39958v0,smo41153v0,smo41153v1], 200);
const stavesmo38744 = new VF.Stave(816, 778.5133013333334, 214);
stavesmo38744.setAttribute('id', 'stavesmo38744');
stavesmo38744.setBegBarType(VF.Barline.type.NONE);
stavesmo38744.setContext(context);
stavesmo38744.draw();
smo38744v0.draw(context, stavesmo38744);
const stavesmo39958 = new VF.Stave(816, 893.5133013333334, 214);
stavesmo39958.setAttribute('id', 'stavesmo39958');
stavesmo39958.setBegBarType(VF.Barline.type.NONE);
stavesmo39958.setContext(context);
stavesmo39958.draw();
smo39958v0.draw(context, stavesmo39958);
const stavesmo41153 = new VF.Stave(816, 1026.5133013333334, 214);
stavesmo41153.setAttribute('id', 'stavesmo41153');
stavesmo41153.setBegBarType(VF.Barline.type.NONE);
stavesmo41153.setContext(context);
stavesmo41153.draw();
smo41153v0.draw(context, stavesmo41153);
smo41153v1.draw(context, stavesmo41153);
const fmtsmo3876637 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo38766v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38766v0ar = [];
const smo38745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo38745'] = smo38745;
smo38745.setAttribute('id', 'smo38745');
smo38766v0ar.push(smo38745);
const smo38746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo38746'] = smo38746;
smo38746.setAttribute('id', 'smo38746');
smo38766v0ar.push(smo38746);
const smo38747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo38747'] = smo38747;
smo38747.setAttribute('id', 'smo38747');
smo38766v0ar.push(smo38747);
const smo38748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo38748'] = smo38748;
smo38748.setAttribute('id', 'smo38748');
const smo38749 = new VF.Annotation('Mein');
smo38749.setAttribute('id', 'smo38749');
smo38749.setFont('Merriweather', 12, 'normal');
smo38749.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38748.addModifier(smo38749);
smo38749.addClass('lyric lyric-0');
const smo38750 = new VF.Annotation('Tra');
smo38750.setAttribute('id', 'smo38750');
smo38750.setFont('Merriweather', 12, 'normal');
smo38750.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38748.addModifier(smo38750);
smo38750.addClass('lyric lyric-1 lyric-hyphen');
smo38766v0ar.push(smo38748);
smo38766v0.addTickables(smo38766v0ar)
fmtsmo3876637.joinVoices([smo38766v0]);
const fmtsmo3997537 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo39975v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39975v0ar = [];
const smo39959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo39959'] = smo39959;
smo39959.setAttribute('id', 'smo39959');
smo39959.addModifier(new VF.Dot(), 0);
smo39975v0ar.push(smo39959);
smo39975v0.addTickables(smo39975v0ar)
fmtsmo3997537.joinVoices([smo39975v0]);
const fmtsmo4117337 = new VF.Formatter();
//
// voices and notes for stave 2 37
const smo41173v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41173v0ar = [];
const smo41154 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo41154'] = smo41154;
smo41154.setAttribute('id', 'smo41154');
smo41154.addModifier(new VF.Dot(), 0);
smo41173v0ar.push(smo41154);
smo41173v0.addTickables(smo41173v0ar)
fmtsmo4117337.joinVoices([smo41173v0]);
const smo41173v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41173v1ar = [];
const smo41155 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo41155'] = smo41155;
smo41155.setAttribute('id', 'smo41155');
smo41155.setStyle({ fillStyle: "#115511" });
smo41173v1ar.push(smo41155);
const smo41156 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo41156'] = smo41156;
smo41156.setAttribute('id', 'smo41156');
smo41156.setStyle({ fillStyle: "#115511" });
smo41173v1ar.push(smo41156);
const smo41157 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo41157'] = smo41157;
smo41157.setAttribute('id', 'smo41157');
smo41157.setStyle({ fillStyle: "#115511" });
smo41157.addModifier(new VF.Dot(), 0);
smo41173v1ar.push(smo41157);
smo41173v1.addTickables(smo41173v1ar)
fmtsmo4117337.joinVoices([smo41173v1]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3876637.format([smo38766v0,smo39975v0,smo41173v0,smo41173v1], 170);
const stavesmo38766 = new VF.Stave(1030, 778.5133013333334, 184);
stavesmo38766.setAttribute('id', 'stavesmo38766');
stavesmo38766.setBegBarType(VF.Barline.type.NONE);
stavesmo38766.setContext(context);
stavesmo38766.draw();
smo38766v0.draw(context, stavesmo38766);
const stavesmo39975 = new VF.Stave(1030, 893.5133013333334, 184);
stavesmo39975.setAttribute('id', 'stavesmo39975');
stavesmo39975.setBegBarType(VF.Barline.type.NONE);
stavesmo39975.setContext(context);
stavesmo39975.draw();
smo39975v0.draw(context, stavesmo39975);
const stavesmo41173 = new VF.Stave(1030, 1026.5133013333334, 184);
stavesmo41173.setAttribute('id', 'stavesmo41173');
stavesmo41173.setBegBarType(VF.Barline.type.NONE);
stavesmo41173.setContext(context);
stavesmo41173.draw();
smo41173v0.draw(context, stavesmo41173);
smo41173v1.draw(context, stavesmo41173);
const rightsmo41649stavesmo387662 = new VF.StaveConnector(stavesmo38766, stavesmo41173).setType(0);
rightsmo41649stavesmo387662.setContext(context).draw();
const fmtsmo3878538 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo38785v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38785v0ar = [];
const smo38767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38767'] = smo38767;
smo38767.setAttribute('id', 'smo38767');
smo38767.addModifier(new VF.Dot(), 0);
const smo38768 = new VF.Annotation('Shatz');
smo38768.setAttribute('id', 'smo38768');
smo38768.setFont('Merriweather', 12, 'normal');
smo38768.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38767.addModifier(smo38768);
smo38768.addClass('lyric lyric-0');
const smo38769 = new VF.Annotation('ra!');
smo38769.setAttribute('id', 'smo38769');
smo38769.setFont('Merriweather', 12, 'normal');
smo38769.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38767.addModifier(smo38769);
smo38769.addClass('lyric lyric-1');
smo38785v0ar.push(smo38767);
smo38785v0.addTickables(smo38785v0ar)
fmtsmo3878538.joinVoices([smo38785v0]);
const fmtsmo3999238 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo39992v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39992v0ar = [];
const smo39976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n","bn/4/n"]}'))
noteHash['smo39976'] = smo39976;
smo39976.setAttribute('id', 'smo39976');
smo39976.addModifier(new VF.Dot(), 0);
smo39976.addModifier(new VF.Dot(), 1);
smo39992v0ar.push(smo39976);
smo39992v0.addTickables(smo39992v0ar)
fmtsmo3999238.joinVoices([smo39992v0]);
const fmtsmo4119338 = new VF.Formatter();
//
// voices and notes for stave 2 38
const smo41193v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41193v0ar = [];
const smo41174 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo41174'] = smo41174;
smo41174.setAttribute('id', 'smo41174');
smo41193v0ar.push(smo41174);
const smo41175 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo41175'] = smo41175;
smo41175.setAttribute('id', 'smo41175');
smo41193v0ar.push(smo41175);
const smo41176 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo41176'] = smo41176;
smo41176.setAttribute('id', 'smo41176');
smo41193v0ar.push(smo41176);
const smo41177 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo41177'] = smo41177;
smo41177.setAttribute('id', 'smo41177');
smo41193v0ar.push(smo41177);
smo41193v0.addTickables(smo41193v0ar)
fmtsmo4119338.joinVoices([smo41193v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3878538.format([smo38785v0,smo39992v0,smo41193v0], 150);
const stavesmo38785 = new VF.Stave(66, 1166.5133013333334, 224);
stavesmo38785.setAttribute('id', 'stavesmo38785');
stavesmo38785.setBegBarType(1);
stavesmo38785.addClef('treble');
const keysmo38785 = new VF.KeySignature('G');
keysmo38785.addToStave(stavesmo38785);
stavesmo38785.setContext(context);
stavesmo38785.draw();
smo38785v0.draw(context, stavesmo38785);
const stavesmo39992 = new VF.Stave(66, 1298.5133013333334, 224);
stavesmo39992.setAttribute('id', 'stavesmo39992');
stavesmo39992.setBegBarType(1);
stavesmo39992.addClef('treble');
const keysmo39992 = new VF.KeySignature('G');
keysmo39992.addToStave(stavesmo39992);
stavesmo39992.setContext(context);
stavesmo39992.draw();
smo39992v0.draw(context, stavesmo39992);
const stavesmo41193 = new VF.Stave(66, 1424.5133013333334, 224);
stavesmo41193.setAttribute('id', 'stavesmo41193');
stavesmo41193.setBegBarType(1);
stavesmo41193.addClef('bass');
const keysmo41193 = new VF.KeySignature('G');
keysmo41193.addToStave(stavesmo41193);
stavesmo41193.setContext(context);
stavesmo41193.draw();
smo41193v0.draw(context, stavesmo41193);
const leftsmo41649stavesmo387852 = new VF.StaveConnector(stavesmo38785, stavesmo41193).setType(1);
leftsmo41649stavesmo387852.setContext(context).draw();
const fmtsmo3881639 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo38816v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38816v0ar = [];
const smo38786 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo38786'] = smo38786;
smo38786.setAttribute('id', 'smo38786');
const smo38787 = new VF.Annotation('-');
smo38787.setAttribute('id', 'smo38787');
smo38787.setFont('Merriweather', 12, 'normal');
smo38787.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38786.addModifier(smo38787);
smo38787.addClass('lyric lyric-0 lyric-hyphen');
smo38816v0ar.push(smo38786);
const smo38788 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo38788'] = smo38788;
smo38788.setAttribute('id', 'smo38788');
smo38816v0ar.push(smo38788);
const smo38789 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38789'] = smo38789;
smo38789.setAttribute('id', 'smo38789');
const smo38790 = new VF.Annotation('der');
smo38790.setAttribute('id', 'smo38790');
smo38790.setFont('Merriweather', 12, 'normal');
smo38790.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38789.addModifier(smo38790);
smo38790.addClass('lyric lyric-0');
const smo38791 = new VF.Annotation('ich');
smo38791.setAttribute('id', 'smo38791');
smo38791.setFont('Merriweather', 12, 'normal');
smo38791.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38789.addModifier(smo38791);
smo38791.addClass('lyric lyric-1');
smo38816v0ar.push(smo38789);
const smo38792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38792'] = smo38792;
smo38792.setAttribute('id', 'smo38792');
const smo38793 = new VF.Annotation('ist');
smo38793.setAttribute('id', 'smo38793');
smo38793.setFont('Merriweather', 12, 'normal');
smo38793.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38792.addModifier(smo38793);
smo38793.addClass('lyric lyric-0');
const smo38794 = new VF.Annotation('hö');
smo38794.setAttribute('id', 'smo38794');
smo38794.setFont('Merriweather', 12, 'normal');
smo38794.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38792.addModifier(smo38794);
smo38794.addClass('lyric lyric-1 lyric-hyphen');
smo38816v0ar.push(smo38792);
const smo38795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38795'] = smo38795;
smo38795.setAttribute('id', 'smo38795');
const smo38796 = new VF.Annotation('Po');
smo38796.setAttribute('id', 'smo38796');
smo38796.setFont('Merriweather', 12, 'normal');
smo38796.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38795.addModifier(smo38796);
smo38796.addClass('lyric lyric-0 lyric-hyphen');
const smo38797 = new VF.Annotation('re');
smo38797.setAttribute('id', 'smo38797');
smo38797.setFont('Merriweather', 12, 'normal');
smo38797.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38795.addModifier(smo38797);
smo38797.addClass('lyric lyric-1');
smo38816v0ar.push(smo38795);
const smo38798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo38798'] = smo38798;
smo38798.setAttribute('id', 'smo38798');
const smo38799 = new VF.Annotation('stil');
smo38799.setAttribute('id', 'smo38799');
smo38799.setFont('Merriweather', 12, 'normal');
smo38799.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38798.addModifier(smo38799);
smo38799.addClass('lyric lyric-0 lyric-hyphen');
const smo38800 = new VF.Annotation('sein');
smo38800.setAttribute('id', 'smo38800');
smo38800.setFont('Merriweather', 12, 'normal');
smo38800.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38798.addModifier(smo38800);
smo38800.addClass('lyric lyric-1');
smo38816v0ar.push(smo38798);
smo38816v0.addTickables(smo38816v0ar)
fmtsmo3881639.joinVoices([smo38816v0]);
const fmtsmo4001139 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo40011v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40011v0ar = [];
const smo39993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n","bn/4/n"]}'))
noteHash['smo39993'] = smo39993;
smo39993.setAttribute('id', 'smo39993');
smo39993.addModifier(new VF.Dot(), 0);
smo39993.addModifier(new VF.Dot(), 1);
smo40011v0ar.push(smo39993);
const smo39994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39994'] = smo39994;
smo39994.setAttribute('id', 'smo39994');
smo40011v0ar.push(smo39994);
const smo39995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39995'] = smo39995;
smo39995.setAttribute('id', 'smo39995');
smo40011v0ar.push(smo39995);
smo40011v0.addTickables(smo40011v0ar)
fmtsmo4001139.joinVoices([smo40011v0]);
const fmtsmo4121339 = new VF.Formatter();
//
// voices and notes for stave 2 39
const smo41213v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41213v0ar = [];
const smo41194 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo41194'] = smo41194;
smo41194.setAttribute('id', 'smo41194');
smo41213v0ar.push(smo41194);
const smo41195 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo41195'] = smo41195;
smo41195.setAttribute('id', 'smo41195');
smo41213v0ar.push(smo41195);
const smo41196 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo41196'] = smo41196;
smo41196.setAttribute('id', 'smo41196');
smo41213v0ar.push(smo41196);
const smo41197 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo41197'] = smo41197;
smo41197.setAttribute('id', 'smo41197');
smo41213v0ar.push(smo41197);
smo41213v0.addTickables(smo41213v0ar)
fmtsmo4121339.joinVoices([smo41213v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47897 = smo38792.getStemDirection();
smo38792.setStemDirection(dirsmo47897);
smo38795.setStemDirection(dirsmo47897);
smo38798.setStemDirection(dirsmo47897);
const smo47897 = new VF.Beam([smo38792,smo38795,smo38798]);
 
// formatting measures in staff group smo41649
fmtsmo3881639.format([smo38816v0,smo40011v0,smo41213v0], 271);
const stavesmo38816 = new VF.Stave(290, 1166.5133013333334, 285);
stavesmo38816.setAttribute('id', 'stavesmo38816');
stavesmo38816.setBegBarType(VF.Barline.type.NONE);
stavesmo38816.setContext(context);
stavesmo38816.draw();
smo38816v0.draw(context, stavesmo38816);
smo47897.setContext(context);
smo47897.draw();
const stavesmo40011 = new VF.Stave(290, 1298.5133013333334, 285);
stavesmo40011.setAttribute('id', 'stavesmo40011');
stavesmo40011.setBegBarType(VF.Barline.type.NONE);
stavesmo40011.setContext(context);
stavesmo40011.draw();
smo40011v0.draw(context, stavesmo40011);
const stavesmo41213 = new VF.Stave(290, 1424.5133013333334, 285);
stavesmo41213.setAttribute('id', 'stavesmo41213');
stavesmo41213.setBegBarType(VF.Barline.type.NONE);
stavesmo41213.setContext(context);
stavesmo41213.draw();
smo41213v0.draw(context, stavesmo41213);
const fmtsmo3883540 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo38835v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38835v0ar = [];
const smo38817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38817'] = smo38817;
smo38817.setAttribute('id', 'smo38817');
smo38817.addModifier(new VF.Dot(), 0);
const smo38818 = new VF.Annotation('lion');
smo38818.setAttribute('id', 'smo38818');
smo38818.setFont('Merriweather', 12, 'normal');
smo38818.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38817.addModifier(smo38818);
smo38818.addClass('lyric lyric-0');
const smo38819 = new VF.Annotation('Lied!');
smo38819.setAttribute('id', 'smo38819');
smo38819.setFont('Merriweather', 12, 'normal');
smo38819.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38817.addModifier(smo38819);
smo38819.addClass('lyric lyric-1');
smo38835v0ar.push(smo38817);
smo38835v0.addTickables(smo38835v0ar)
fmtsmo3883540.joinVoices([smo38835v0]);
const fmtsmo4002840 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo40028v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40028v0ar = [];
const smo40012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
noteHash['smo40012'] = smo40012;
smo40012.setAttribute('id', 'smo40012');
smo40012.addModifier(new VF.Dot(), 0);
smo40012.addModifier(new VF.Dot(), 1);
smo40028v0ar.push(smo40012);
smo40028v0.addTickables(smo40028v0ar)
fmtsmo4002840.joinVoices([smo40028v0]);
const fmtsmo4123740 = new VF.Formatter();
//
// voices and notes for stave 2 40
const smo41237v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41237v0ar = [];
const smo41214 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo41214'] = smo41214;
smo41214.setAttribute('id', 'smo41214');
smo41237v0ar.push(smo41214);
const smo41215 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo41215'] = smo41215;
smo41215.setAttribute('id', 'smo41215');
smo41237v0ar.push(smo41215);
const smo41216 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo41216'] = smo41216;
smo41216.setAttribute('id', 'smo41216');
smo41237v0ar.push(smo41216);
const smo41217 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo41217'] = smo41217;
smo41217.setAttribute('id', 'smo41217');
smo41237v0ar.push(smo41217);
smo41237v0.addTickables(smo41237v0ar)
fmtsmo4123740.joinVoices([smo41237v0]);
const smo41237v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41237v1ar = [];
const smo41218 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41218'] = smo41218;
smo41218.setAttribute('id', 'smo41218');
smo41218.setStyle({ fillStyle: "#115511" });
smo41237v1ar.push(smo41218);
const smo41219 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41219'] = smo41219;
smo41219.setAttribute('id', 'smo41219');
smo41219.setStyle({ fillStyle: "#115511" });
smo41237v1ar.push(smo41219);
const smo41220 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41220'] = smo41220;
smo41220.setAttribute('id', 'smo41220');
smo41220.setStyle({ fillStyle: "#115511" });
smo41237v1ar.push(smo41220);
const smo41221 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41221'] = smo41221;
smo41221.setAttribute('id', 'smo41221');
smo41221.setStyle({ fillStyle: "#115511" });
smo41237v1ar.push(smo41221);
smo41237v1.addTickables(smo41237v1ar)
fmtsmo4123740.joinVoices([smo41237v1]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3883540.format([smo38835v0,smo40028v0,smo41237v0,smo41237v1], 145);
const stavesmo38835 = new VF.Stave(575, 1166.5133013333334, 159);
stavesmo38835.setAttribute('id', 'stavesmo38835');
stavesmo38835.setBegBarType(VF.Barline.type.NONE);
stavesmo38835.setContext(context);
stavesmo38835.draw();
smo38835v0.draw(context, stavesmo38835);
const stavesmo40028 = new VF.Stave(575, 1298.5133013333334, 159);
stavesmo40028.setAttribute('id', 'stavesmo40028');
stavesmo40028.setBegBarType(VF.Barline.type.NONE);
stavesmo40028.setContext(context);
stavesmo40028.draw();
smo40028v0.draw(context, stavesmo40028);
const stavesmo41237 = new VF.Stave(575, 1424.5133013333334, 159);
stavesmo41237.setAttribute('id', 'stavesmo41237');
stavesmo41237.setBegBarType(VF.Barline.type.NONE);
stavesmo41237.setContext(context);
stavesmo41237.draw();
smo41237v0.draw(context, stavesmo41237);
smo41237v1.draw(context, stavesmo41237);
const fmtsmo3886541 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo38865v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38865v0ar = [];
const smo38836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo38836'] = smo38836;
smo38836.setAttribute('id', 'smo38836');
const smo38837 = new VF.Annotation('-');
smo38837.setAttribute('id', 'smo38837');
smo38837.setFont('Merriweather', 12, 'normal');
smo38837.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38836.addModifier(smo38837);
smo38837.addClass('lyric lyric-0 lyric-hyphen');
smo38865v0ar.push(smo38836);
const smo38838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38838'] = smo38838;
smo38838.setAttribute('id', 'smo38838');
const smo38839 = new VF.Annotation('er');
smo38839.setAttribute('id', 'smo38839');
smo38839.setFont('Merriweather', 12, 'normal');
smo38839.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38838.addModifier(smo38839);
smo38839.addClass('lyric lyric-0');
const smo38840 = new VF.Annotation('ich');
smo38840.setAttribute('id', 'smo38840');
smo38840.setFont('Merriweather', 12, 'normal');
smo38840.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38838.addModifier(smo38840);
smo38840.addClass('lyric lyric-1');
smo38865v0ar.push(smo38838);
const smo38841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38841'] = smo38841;
smo38841.setAttribute('id', 'smo38841');
const smo38842 = new VF.Annotation('fährt');
smo38842.setAttribute('id', 'smo38842');
smo38842.setFont('Merriweather', 12, 'normal');
smo38842.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38841.addModifier(smo38842);
smo38842.addClass('lyric lyric-0');
const smo38843 = new VF.Annotation('hö');
smo38843.setAttribute('id', 'smo38843');
smo38843.setFont('Merriweather', 12, 'normal');
smo38843.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38841.addModifier(smo38843);
smo38843.addClass('lyric lyric-1 lyric-hyphen');
smo38865v0ar.push(smo38841);
const smo38844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38844'] = smo38844;
smo38844.setAttribute('id', 'smo38844');
const smo38845 = new VF.Annotation('durch');
smo38845.setAttribute('id', 'smo38845');
smo38845.setFont('Merriweather', 12, 'normal');
smo38845.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38844.addModifier(smo38845);
smo38845.addClass('lyric lyric-0');
const smo38846 = new VF.Annotation('re');
smo38846.setAttribute('id', 'smo38846');
smo38846.setFont('Merriweather', 12, 'normal');
smo38846.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38844.addModifier(smo38846);
smo38846.addClass('lyric lyric-1');
smo38865v0ar.push(smo38844);
const smo38847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38847'] = smo38847;
smo38847.setAttribute('id', 'smo38847');
const smo38848 = new VF.Annotation('die');
smo38848.setAttribute('id', 'smo38848');
smo38848.setFont('Merriweather', 12, 'normal');
smo38848.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38847.addModifier(smo38848);
smo38848.addClass('lyric lyric-0');
const smo38849 = new VF.Annotation('es');
smo38849.setAttribute('id', 'smo38849');
smo38849.setFont('Merriweather', 12, 'normal');
smo38849.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38847.addModifier(smo38849);
smo38849.addClass('lyric lyric-1');
smo38865v0ar.push(smo38847);
smo38865v0.addTickables(smo38865v0ar)
fmtsmo3886541.joinVoices([smo38865v0]);
const fmtsmo4004641 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo40046v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40046v0ar = [];
const smo40029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
noteHash['smo40029'] = smo40029;
smo40029.setAttribute('id', 'smo40029');
smo40029.addModifier(new VF.Dot(), 0);
smo40029.addModifier(new VF.Dot(), 1);
smo40046v0ar.push(smo40029);
const smo40030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo40030'] = smo40030;
smo40030.setAttribute('id', 'smo40030');
smo40030.addModifier(new VF.Dot(), 0);
smo40046v0ar.push(smo40030);
smo40046v0.addTickables(smo40046v0ar)
fmtsmo4004641.joinVoices([smo40046v0]);
const fmtsmo4126141 = new VF.Formatter();
//
// voices and notes for stave 2 41
const smo41261v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41261v0ar = [];
const smo41238 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo41238'] = smo41238;
smo41238.setAttribute('id', 'smo41238');
smo41261v0ar.push(smo41238);
const smo41239 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo41239'] = smo41239;
smo41239.setAttribute('id', 'smo41239');
smo41261v0ar.push(smo41239);
const smo41240 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo41240'] = smo41240;
smo41240.setAttribute('id', 'smo41240');
smo41261v0ar.push(smo41240);
const smo41241 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo41241'] = smo41241;
smo41241.setAttribute('id', 'smo41241');
smo41261v0ar.push(smo41241);
smo41261v0.addTickables(smo41261v0ar)
fmtsmo4126141.joinVoices([smo41261v0]);
const smo41261v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41261v1ar = [];
const smo41242 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41242'] = smo41242;
smo41242.setAttribute('id', 'smo41242');
smo41242.setStyle({ fillStyle: "#115511" });
smo41261v1ar.push(smo41242);
const smo41243 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41243'] = smo41243;
smo41243.setAttribute('id', 'smo41243');
smo41243.setStyle({ fillStyle: "#115511" });
smo41261v1ar.push(smo41243);
const smo41244 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41244'] = smo41244;
smo41244.setAttribute('id', 'smo41244');
smo41244.setStyle({ fillStyle: "#115511" });
smo41261v1ar.push(smo41244);
const smo41245 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo41245'] = smo41245;
smo41245.setAttribute('id', 'smo41245');
smo41245.setStyle({ fillStyle: "#115511" });
smo41261v1ar.push(smo41245);
smo41261v1.addTickables(smo41261v1ar)
fmtsmo4126141.joinVoices([smo41261v1]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47910 = smo38841.getStemDirection();
smo38841.setStemDirection(dirsmo47910);
smo38844.setStemDirection(dirsmo47910);
smo38847.setStemDirection(dirsmo47910);
const smo47910 = new VF.Beam([smo38841,smo38844,smo38847]);
 
// formatting measures in staff group smo41649
fmtsmo3886541.format([smo38865v0,smo40046v0,smo41261v0,smo41261v1], 291);
const stavesmo38865 = new VF.Stave(734, 1166.5133013333334, 305);
stavesmo38865.setAttribute('id', 'stavesmo38865');
stavesmo38865.setBegBarType(VF.Barline.type.NONE);
stavesmo38865.setContext(context);
stavesmo38865.draw();
smo38865v0.draw(context, stavesmo38865);
smo47910.setContext(context);
smo47910.draw();
const stavesmo40046 = new VF.Stave(734, 1298.5133013333334, 305);
stavesmo40046.setAttribute('id', 'stavesmo40046');
stavesmo40046.setBegBarType(VF.Barline.type.NONE);
stavesmo40046.setContext(context);
stavesmo40046.draw();
smo40046v0.draw(context, stavesmo40046);
const stavesmo41261 = new VF.Stave(734, 1424.5133013333334, 305);
stavesmo41261.setAttribute('id', 'stavesmo41261');
stavesmo41261.setBegBarType(VF.Barline.type.NONE);
stavesmo41261.setContext(context);
stavesmo41261.draw();
smo41261v0.draw(context, stavesmo41261);
smo41261v1.draw(context, stavesmo41261);
const fmtsmo3888742 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo38887v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38887v0ar = [];
const smo38866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38866'] = smo38866;
smo38866.setAttribute('id', 'smo38866');
smo38866.addModifier(new VF.Dot(), 0);
const smo38867 = new VF.Annotation('Fel');
smo38867.setAttribute('id', 'smo38867');
smo38867.setFont('Merriweather', 12, 'normal');
smo38867.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38866.addModifier(smo38867);
smo38867.addClass('lyric lyric-0 lyric-hyphen');
const smo38868 = new VF.Annotation('sin');
smo38868.setAttribute('id', 'smo38868');
smo38868.setFont('Merriweather', 12, 'normal');
smo38868.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38866.addModifier(smo38868);
smo38868.addClass('lyric lyric-1 lyric-hyphen');
smo38887v0ar.push(smo38866);
const smo38869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo38869'] = smo38869;
smo38869.setAttribute('id', 'smo38869');
smo38869.addModifier(new VF.Dot(), 0);
const smo38870 = new VF.Annotation('er');
smo38870.setAttribute('id', 'smo38870');
smo38870.setFont('Merriweather', 12, 'normal');
smo38870.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38869.addModifier(smo38870);
smo38870.addClass('lyric lyric-0');
const smo38871 = new VF.Annotation('gen,');
smo38871.setAttribute('id', 'smo38871');
smo38871.setFont('Merriweather', 12, 'normal');
smo38871.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38869.addModifier(smo38871);
smo38871.addClass('lyric lyric-1');
smo38887v0ar.push(smo38869);
smo38887v0.addTickables(smo38887v0ar)
fmtsmo3888742.joinVoices([smo38887v0]);
const fmtsmo4006342 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo40063v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40063v0ar = [];
const smo40047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","f#/5/n","dn/6/n"]}'))
noteHash['smo40047'] = smo40047;
smo40047.setAttribute('id', 'smo40047');
smo40047.addModifier(new VF.Dot(), 0);
smo40047.addModifier(new VF.Dot(), 1);
smo40047.addModifier(new VF.Dot(), 2);
smo40063v0ar.push(smo40047);
smo40063v0.addTickables(smo40063v0ar)
fmtsmo4006342.joinVoices([smo40063v0]);
const fmtsmo4128342 = new VF.Formatter();
//
// voices and notes for stave 2 42
const smo41283v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41283v0ar = [];
const smo41262 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo41262'] = smo41262;
smo41262.setAttribute('id', 'smo41262');
smo41283v0ar.push(smo41262);
const smo41263 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo41263'] = smo41263;
smo41263.setAttribute('id', 'smo41263');
smo41283v0ar.push(smo41263);
const smo41264 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo41264'] = smo41264;
smo41264.setAttribute('id', 'smo41264');
smo41283v0ar.push(smo41264);
const smo41265 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo41265'] = smo41265;
smo41265.setAttribute('id', 'smo41265');
smo41283v0ar.push(smo41265);
smo41283v0.addTickables(smo41283v0ar)
fmtsmo4128342.joinVoices([smo41283v0]);
const smo41283v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41283v1ar = [];
const smo41266 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo41266'] = smo41266;
smo41266.setAttribute('id', 'smo41266');
smo41266.setStyle({ fillStyle: "#115511" });
smo41266.addModifier(new VF.Dot(), 0);
smo41283v1ar.push(smo41266);
const smo41267 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
noteHash['smo41267'] = smo41267;
smo41267.setAttribute('id', 'smo41267');
smo41267.setStyle({ fillStyle: "#115511" });
smo41267.addModifier(new VF.Dot(), 0);
smo41283v1ar.push(smo41267);
smo41283v1.addTickables(smo41283v1ar)
fmtsmo4128342.joinVoices([smo41283v1]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3888742.format([smo38887v0,smo40063v0,smo41283v0,smo41283v1], 160);
const stavesmo38887 = new VF.Stave(1039, 1166.5133013333334, 174);
stavesmo38887.setAttribute('id', 'stavesmo38887');
stavesmo38887.setBegBarType(VF.Barline.type.NONE);
stavesmo38887.setContext(context);
stavesmo38887.draw();
smo38887v0.draw(context, stavesmo38887);
const stavesmo40063 = new VF.Stave(1039, 1298.5133013333334, 174);
stavesmo40063.setAttribute('id', 'stavesmo40063');
stavesmo40063.setBegBarType(VF.Barline.type.NONE);
stavesmo40063.setContext(context);
stavesmo40063.draw();
smo40063v0.draw(context, stavesmo40063);
const stavesmo41283 = new VF.Stave(1039, 1424.5133013333334, 174);
stavesmo41283.setAttribute('id', 'stavesmo41283');
stavesmo41283.setBegBarType(VF.Barline.type.NONE);
stavesmo41283.setContext(context);
stavesmo41283.draw();
smo41283v0.draw(context, stavesmo41283);
smo41283v1.draw(context, stavesmo41283);
const rightsmo41649stavesmo388872 = new VF.StaveConnector(stavesmo38887, stavesmo41283).setType(0);
rightsmo41649stavesmo388872.setContext(context).draw();
const smo48703 = new VF.Curve(smo38476, smo38495, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo48703.setContext(context).draw();
const smo48704 = new VF.StaveTie({ first_note: smo38384, last_note: smo38403, 
          firstNote: smo38384, lastNote: smo38403, first_indices: [0], last_indices: [0]});
smo48704.setContext(context).draw();
const smo48705 = new VF.StaveTie({ first_note: smo38452, last_note: smo38455, 
          firstNote: smo38452, lastNote: smo38455, first_indices: [0], last_indices: [0]});
smo48705.setContext(context).draw();
const smo48706 = new VF.StaveTie({ first_note: smo38568, last_note: smo38587, 
          firstNote: smo38568, lastNote: smo38587, first_indices: [0], last_indices: [0]});
smo48706.setContext(context).draw();
const smo48707 = new VF.StaveTie({ first_note: smo38624, last_note: null, 
          firstNote: smo38624, lastNote: null, first_indices: [0], last_indices: [0]});
smo48707.setContext(context).draw();
const smo48708 = new VF.StaveTie({ first_note: null, last_note: smo38643, 
          firstNote: null, lastNote: smo38643, first_indices: [0], last_indices: [0]});
smo48708.setContext(context).draw();
const smo48709 = new VF.StaveTie({ first_note: smo38679, last_note: smo38698, 
          firstNote: smo38679, lastNote: smo38698, first_indices: [0], last_indices: [0]});
smo48709.setContext(context).draw();
const smo48710 = new VF.Curve(smo39834, smo39851, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo48710.setContext(context).draw();
const smo48711 = new VF.StaveTie({ first_note: smo40012, last_note: smo40029, 
          firstNote: smo40012, lastNote: smo40029, first_indices: [0,1], last_indices: [0,1]});
smo48711.setContext(context).draw();
const smo48712 = new VF.StaveTie({ first_note: smo39976, last_note: smo39993, 
          firstNote: smo39976, lastNote: smo39993, first_indices: [0,1], last_indices: [0,1]});
smo48712.setContext(context).draw();
const smo48713 = new VF.Curve(smo41012, smo41033, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo48713.setContext(context).draw();
const smo48714 = new VF.StaveTie({ first_note: smo41054, last_note: null, 
          firstNote: smo41054, lastNote: null, first_indices: [0], last_indices: [0]});
smo48714.setContext(context).draw();
const smo48715 = new VF.StaveTie({ first_note: null, last_note: smo41075, 
          firstNote: null, lastNote: smo41075, first_indices: [0], last_indices: [0]});
smo48715.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo38385').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38386').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo38406').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38407').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo38409').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo38410').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo38412').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38413').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo38431').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38432').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo38434').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38435').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo38454').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo38453').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo38456').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo38458').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo38459').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo38478').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo38496').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo38498').setAttributeNS('', 'transform', 'translate(0 0)');
context.svg.getElementById('vf-smo38499').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo38501').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo38502').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo38505').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo38523').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo38524').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo38526').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38527').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo38545').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo38546').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo38548').setAttributeNS('', 'transform', 'translate(0 48)');
context.svg.getElementById('vf-smo38550').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo38551').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo38570').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38569').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo38588').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo38589').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo38591').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo38592').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo38594').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo38595').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo38597').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo38598').setAttributeNS('', 'transform', 'translate(0 27)');
context.svg.getElementById('vf-smo38616').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo38617').setAttributeNS('', 'transform', 'translate(0 27)');
context.svg.getElementById('vf-smo38619').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38620').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo38623').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo38626').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo38625').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo38644').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo38646').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38647').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo38649').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38650').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo38652').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo38653').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo38655').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38656').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo38674').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo38675').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo38677').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo38678').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo38681').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo38680').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo38699').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo38703').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo38721').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo38722').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo38724').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo38725').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo38727').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo38728').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo38749').setAttributeNS('', 'transform', 'translate(0 0)');
context.svg.getElementById('vf-smo38750').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo38768').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo38769').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo38787').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38790').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo38791').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo38793').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo38794').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo38796').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38797').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo38799').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo38800').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo38818').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo38819').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo38837').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38840').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo38842').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo38843').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo38845').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo38846').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo38848').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo38849').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo38867').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo38868').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo38871').setAttributeNS('', 'transform', 'translate(0 9)');
}
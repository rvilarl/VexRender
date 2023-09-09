// @@ Postillionlied p 2/3  by Franz Grothe
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
const fmtsmo22534822 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo225348v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225348v0ar = [];
const smo225330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo225330.setAttribute('id', 'smo225330');
smo225330.addModifier(new VF.Dot(), 0);
const smo225331 = new VF.Annotation('bläst');
smo225331.setAttribute('id', 'smo225331');
smo225331.setFont('Merriweather', 12, 'normal');
smo225331.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225330.addModifier(smo225331);
smo225331.addClass('lyric lyric-0 lyric-hyphen');
const smo225332 = new VF.Annotation('Herz');
smo225332.setAttribute('id', 'smo225332');
smo225332.setFont('Merriweather', 12, 'normal');
smo225332.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225330.addModifier(smo225332);
smo225332.addClass('lyric lyric-1');
smo225348v0ar.push(smo225330);
smo225348v0.addTickables(smo225348v0ar)
fmtsmo22534822.joinVoices([smo225348v0]);
const fmtsmo22665722 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo226657v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226657v0ar = [];
const smo226641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo226641.setAttribute('id', 'smo226641');
smo226641.addModifier(new VF.Dot(), 0);
smo226657v0ar.push(smo226641);
smo226657v0.addTickables(smo226657v0ar)
fmtsmo22665722.joinVoices([smo226657v0]);
const fmtsmo22783422 = new VF.Formatter();
//
// voices and notes for stave 2 22
const smo227834v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227834v0ar = [];
const smo227818 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo227818.setAttribute('id', 'smo227818');
smo227818.addModifier(new VF.Dot(), 0);
smo227834v0ar.push(smo227818);
smo227834v0.addTickables(smo227834v0ar)
fmtsmo22783422.joinVoices([smo227834v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22534822.format([smo225348v0,smo226657v0,smo227834v0], 60);
const stavesmo225348 = new VF.Stave(66, 107.5133013333334, 134);
stavesmo225348.setAttribute('id', 'stavesmo225348');
stavesmo225348.setBegBarType(1);
stavesmo225348.addClef('treble');
const keysmo225348 = new VF.KeySignature('G');
keysmo225348.addToStave(stavesmo225348);
stavesmo225348.setContext(context);
stavesmo225348.draw();
smo225348v0.draw(context, stavesmo225348);
const stavesmo226657 = new VF.Stave(66, 214.5133013333334, 134);
stavesmo226657.setAttribute('id', 'stavesmo226657');
stavesmo226657.setBegBarType(1);
stavesmo226657.addClef('treble');
const keysmo226657 = new VF.KeySignature('G');
keysmo226657.addToStave(stavesmo226657);
stavesmo226657.setContext(context);
stavesmo226657.draw();
smo226657v0.draw(context, stavesmo226657);
const stavesmo227834 = new VF.Stave(66, 285.5133013333334, 134);
stavesmo227834.setAttribute('id', 'stavesmo227834');
stavesmo227834.setBegBarType(1);
stavesmo227834.addClef('bass');
const keysmo227834 = new VF.KeySignature('G');
keysmo227834.addToStave(stavesmo227834);
stavesmo227834.setContext(context);
stavesmo227834.draw();
smo227834v0.draw(context, stavesmo227834);
const leftsmo228595stavesmo2253482 = new VF.StaveConnector(stavesmo225348, stavesmo227834).setType(1);
leftsmo228595stavesmo2253482.setContext(context).draw();
const fmtsmo22537523 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo225375v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225375v0ar = [];
const smo225349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo225349.setAttribute('id', 'smo225349');
smo225375v0ar.push(smo225349);
const smo225351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo225351.setAttribute('id', 'smo225351');
const smo225352 = new VF.Annotation('sein');
smo225352.setAttribute('id', 'smo225352');
smo225352.setFont('Merriweather', 12, 'normal');
smo225352.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225351.addModifier(smo225352);
smo225352.addClass('lyric lyric-0');
const smo225353 = new VF.Annotation('be');
smo225353.setAttribute('id', 'smo225353');
smo225353.setFont('Merriweather', 12, 'normal');
smo225353.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225351.addModifier(smo225353);
smo225353.addClass('lyric lyric-1 lyric-hyphen');
smo225375v0ar.push(smo225351);
const smo225354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo225354.setAttribute('id', 'smo225354');
const smo225355 = new VF.Annotation('Horn');
smo225355.setAttribute('id', 'smo225355');
smo225355.setFont('Merriweather', 12, 'normal');
smo225355.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225354.addModifier(smo225355);
smo225355.addClass('lyric lyric-0');
const smo225356 = new VF.Annotation('glei');
smo225356.setAttribute('id', 'smo225356');
smo225356.setFont('Merriweather', 12, 'normal');
smo225356.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225354.addModifier(smo225356);
smo225356.addClass('lyric lyric-1 lyric-hyphen');
smo225375v0ar.push(smo225354);
const smo225357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo225357.setAttribute('id', 'smo225357');
const smo225358 = new VF.Annotation('mit');
smo225358.setAttribute('id', 'smo225358');
smo225358.setFont('Merriweather', 12, 'normal');
smo225358.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225357.addModifier(smo225358);
smo225358.addClass('lyric lyric-0');
const smo225359 = new VF.Annotation('tet');
smo225359.setAttribute('id', 'smo225359');
smo225359.setFont('Merriweather', 12, 'normal');
smo225359.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225357.addModifier(smo225359);
smo225359.addClass('lyric lyric-1');
smo225375v0ar.push(smo225357);
smo225375v0.addTickables(smo225375v0ar)
fmtsmo22537523.joinVoices([smo225375v0]);
const fmtsmo22667423 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo226674v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226674v0ar = [];
const smo226658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n","bn/4/n"]}'))
smo226658.setAttribute('id', 'smo226658');
smo226658.addModifier(new VF.Dot(), 0);
smo226658.addModifier(new VF.Dot(), 1);
smo226674v0ar.push(smo226658);
smo226674v0.addTickables(smo226674v0ar)
fmtsmo22667423.joinVoices([smo226674v0]);
const fmtsmo22785123 = new VF.Formatter();
//
// voices and notes for stave 2 23
const smo227851v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227851v0ar = [];
const smo227835 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo227835.setAttribute('id', 'smo227835');
const smo2278350acc = new VF.Accidental('#');
smo227835.addModifier(smo2278350acc, 0);
smo227835.addModifier(new VF.Dot(), 0);
smo227851v0ar.push(smo227835);
smo227851v0.addTickables(smo227851v0ar)
fmtsmo22785123.joinVoices([smo227851v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22537523.format([smo225375v0,smo226674v0,smo227851v0], 239);
const stavesmo225375 = new VF.Stave(200, 107.5133013333334, 253);
stavesmo225375.setAttribute('id', 'stavesmo225375');
stavesmo225375.setBegBarType(VF.Barline.type.NONE);
stavesmo225375.setContext(context);
stavesmo225375.draw();
smo225375v0.draw(context, stavesmo225375);
const stavesmo226674 = new VF.Stave(200, 214.5133013333334, 253);
stavesmo226674.setAttribute('id', 'stavesmo226674');
stavesmo226674.setBegBarType(VF.Barline.type.NONE);
stavesmo226674.setContext(context);
stavesmo226674.draw();
smo226674v0.draw(context, stavesmo226674);
const stavesmo227851 = new VF.Stave(200, 285.5133013333334, 253);
stavesmo227851.setAttribute('id', 'stavesmo227851');
stavesmo227851.setBegBarType(VF.Barline.type.NONE);
stavesmo227851.setContext(context);
stavesmo227851.draw();
smo227851v0.draw(context, stavesmo227851);
const fmtsmo22539724 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo225397v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225397v0ar = [];
const smo225376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo225376.setAttribute('id', 'smo225376');
smo225376.addModifier(new VF.Dot(), 0);
const smo225377 = new VF.Annotation('hel');
smo225377.setAttribute('id', 'smo225377');
smo225377.setFont('Merriweather', 12, 'normal');
smo225377.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225376.addModifier(smo225377);
smo225377.addClass('lyric lyric-0 lyric-hyphen');
const smo225378 = new VF.Annotation('ihn');
smo225378.setAttribute('id', 'smo225378');
smo225378.setFont('Merriweather', 12, 'normal');
smo225378.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225376.addModifier(smo225378);
smo225378.addClass('lyric lyric-1');
smo225397v0ar.push(smo225376);
const smo225379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo225379.setAttribute('id', 'smo225379');
smo225379.addModifier(new VF.Dot(), 0);
const smo225380 = new VF.Annotation('lem');
smo225380.setAttribute('id', 'smo225380');
smo225380.setFont('Merriweather', 12, 'normal');
smo225380.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225379.addModifier(smo225380);
smo225380.addClass('lyric lyric-0');
const smo225381 = new VF.Annotation('hin');
smo225381.setAttribute('id', 'smo225381');
smo225381.setFont('Merriweather', 12, 'normal');
smo225381.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225379.addModifier(smo225381);
smo225381.addClass('lyric lyric-1 lyric-hyphen');
smo225397v0ar.push(smo225379);
smo225397v0.addTickables(smo225397v0ar)
fmtsmo22539724.joinVoices([smo225397v0]);
const fmtsmo22669124 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo226691v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226691v0ar = [];
const smo226675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","an/4/n"]}'))
smo226675.setAttribute('id', 'smo226675');
smo226675.addModifier(new VF.Dot(), 0);
smo226675.addModifier(new VF.Dot(), 1);
smo226691v0ar.push(smo226675);
smo226691v0.addTickables(smo226691v0ar)
fmtsmo22669124.joinVoices([smo226691v0]);
const fmtsmo22786924 = new VF.Formatter();
//
// voices and notes for stave 2 24
const smo227869v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227869v0ar = [];
const smo227852 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo227852.setAttribute('id', 'smo227852');
smo227852.addModifier(new VF.Dot(), 0);
smo227869v0ar.push(smo227852);
const smo227853 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo227853.setAttribute('id', 'smo227853');
smo227853.addModifier(new VF.Dot(), 0);
smo227869v0ar.push(smo227853);
smo227869v0.addTickables(smo227869v0ar)
fmtsmo22786924.joinVoices([smo227869v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22539724.format([smo225397v0,smo226691v0,smo227869v0], 107);
const stavesmo225397 = new VF.Stave(453, 107.5133013333334, 121);
stavesmo225397.setAttribute('id', 'stavesmo225397');
stavesmo225397.setBegBarType(VF.Barline.type.NONE);
stavesmo225397.setContext(context);
stavesmo225397.draw();
smo225397v0.draw(context, stavesmo225397);
const stavesmo226691 = new VF.Stave(453, 214.5133013333334, 121);
stavesmo226691.setAttribute('id', 'stavesmo226691');
stavesmo226691.setBegBarType(VF.Barline.type.NONE);
stavesmo226691.setContext(context);
stavesmo226691.draw();
smo226691v0.draw(context, stavesmo226691);
const stavesmo227869 = new VF.Stave(453, 285.5133013333334, 121);
stavesmo227869.setAttribute('id', 'stavesmo227869');
stavesmo227869.setBegBarType(VF.Barline.type.NONE);
stavesmo227869.setContext(context);
stavesmo227869.draw();
smo227869v0.draw(context, stavesmo227869);
const fmtsmo22542125 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo225421v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225421v0ar = [];
const smo225398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo225398.setAttribute('id', 'smo225398');
smo225398.addModifier(new VF.Dot(), 0);
const smo225400 = new VF.Annotation('Ton,');
smo225400.setAttribute('id', 'smo225400');
smo225400.setFont('Merriweather', 12, 'normal');
smo225400.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225398.addModifier(smo225400);
smo225400.addClass('lyric lyric-0');
const smo225399 = new VF.Annotation('aus');
smo225399.setAttribute('id', 'smo225399');
smo225399.setFont('Merriweather', 12, 'normal');
smo225399.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225398.addModifier(smo225399);
smo225399.addClass('lyric lyric-1');
smo225421v0ar.push(smo225398);
const smo225401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo225401.setAttribute('id', 'smo225401');
const smo225402 = new VF.Annotation('-');
smo225402.setAttribute('id', 'smo225402');
smo225402.setFont('Merriweather', 12, 'normal');
smo225402.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225401.addModifier(smo225402);
smo225402.addClass('lyric lyric-0 lyric-hyphen');
smo225421v0ar.push(smo225401);
const smo225403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/5/n"]}'))
smo225403.setAttribute('id', 'smo225403');
const smo2254030acc = new VF.Accidental('#');
smo225403.addModifier(smo2254030acc, 0);
const smo225404 = new VF.Annotation('so');
smo225404.setAttribute('id', 'smo225404');
smo225404.setFont('Merriweather', 12, 'normal');
smo225404.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225403.addModifier(smo225404);
smo225404.addClass('lyric lyric-0');
const smo225405 = new VF.Annotation('und');
smo225405.setAttribute('id', 'smo225405');
smo225405.setFont('Merriweather', 12, 'normal');
smo225405.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225403.addModifier(smo225405);
smo225405.addClass('lyric lyric-1');
smo225421v0ar.push(smo225403);
smo225421v0.addTickables(smo225421v0ar)
fmtsmo22542125.joinVoices([smo225421v0]);
const fmtsmo22670925 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo226709v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226709v0ar = [];
const smo226692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","an/4/n"]}'))
smo226692.setAttribute('id', 'smo226692');
smo226692.addModifier(new VF.Dot(), 0);
smo226692.addModifier(new VF.Dot(), 1);
smo226709v0ar.push(smo226692);
const smo226693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo226693.setAttribute('id', 'smo226693');
smo226693.addModifier(new VF.Dot(), 0);
smo226709v0ar.push(smo226693);
smo226709v0.addTickables(smo226709v0ar)
fmtsmo22670925.joinVoices([smo226709v0]);
const fmtsmo22788725 = new VF.Formatter();
//
// voices and notes for stave 2 25
const smo227887v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227887v0ar = [];
const smo227870 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo227870.setAttribute('id', 'smo227870');
smo227870.addModifier(new VF.Dot(), 0);
smo227887v0ar.push(smo227870);
const smo227871 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["d#/3/n"]}'))
smo227871.setAttribute('id', 'smo227871');
const smo2278710acc = new VF.Accidental('#');
smo227871.addModifier(smo2278710acc, 0);
smo227871.addModifier(new VF.Dot(), 0);
smo227887v0ar.push(smo227871);
smo227887v0.addTickables(smo227887v0ar)
fmtsmo22788725.joinVoices([smo227887v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22542125.format([smo225421v0,smo226709v0,smo227887v0], 169);
const stavesmo225421 = new VF.Stave(574, 107.5133013333334, 183);
stavesmo225421.setAttribute('id', 'stavesmo225421');
stavesmo225421.setBegBarType(VF.Barline.type.NONE);
stavesmo225421.setContext(context);
stavesmo225421.draw();
smo225421v0.draw(context, stavesmo225421);
const stavesmo226709 = new VF.Stave(574, 214.5133013333334, 183);
stavesmo226709.setAttribute('id', 'stavesmo226709');
stavesmo226709.setBegBarType(VF.Barline.type.NONE);
stavesmo226709.setContext(context);
stavesmo226709.draw();
smo226709v0.draw(context, stavesmo226709);
const stavesmo227887 = new VF.Stave(574, 285.5133013333334, 183);
stavesmo227887.setAttribute('id', 'stavesmo227887');
stavesmo227887.setBegBarType(VF.Barline.type.NONE);
stavesmo227887.setContext(context);
stavesmo227887.draw();
smo227887v0.draw(context, stavesmo227887);
const fmtsmo22544026 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo225440v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225440v0ar = [];
const smo225422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225422.setAttribute('id', 'smo225422');
smo225422.addModifier(new VF.Dot(), 0);
const smo225423 = new VF.Annotation('schön');
smo225423.setAttribute('id', 'smo225423');
smo225423.setFont('Merriweather', 12, 'normal');
smo225423.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225422.addModifier(smo225423);
smo225423.addClass('lyric lyric-0');
const smo225424 = new VF.Annotation('führt');
smo225424.setAttribute('id', 'smo225424');
smo225424.setFont('Merriweather', 12, 'normal');
smo225424.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225422.addModifier(smo225424);
smo225424.addClass('lyric lyric-1');
smo225440v0ar.push(smo225422);
smo225440v0.addTickables(smo225440v0ar)
fmtsmo22544026.joinVoices([smo225440v0]);
const fmtsmo22672626 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo226726v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226726v0ar = [];
const smo226710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo226710.setAttribute('id', 'smo226710');
smo226710.addModifier(new VF.Dot(), 0);
smo226726v0ar.push(smo226710);
smo226726v0.addTickables(smo226726v0ar)
fmtsmo22672626.joinVoices([smo226726v0]);
const fmtsmo22790426 = new VF.Formatter();
//
// voices and notes for stave 2 26
const smo227904v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227904v0ar = [];
const smo227888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo227888.setAttribute('id', 'smo227888');
smo227888.addModifier(new VF.Dot(), 0);
smo227904v0ar.push(smo227888);
smo227904v0.addTickables(smo227904v0ar)
fmtsmo22790426.joinVoices([smo227904v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22544026.format([smo225440v0,smo226726v0,smo227904v0], 72);
const stavesmo225440 = new VF.Stave(757, 107.5133013333334, 86);
stavesmo225440.setAttribute('id', 'stavesmo225440');
stavesmo225440.setBegBarType(VF.Barline.type.NONE);
stavesmo225440.setContext(context);
stavesmo225440.draw();
smo225440v0.draw(context, stavesmo225440);
const stavesmo226726 = new VF.Stave(757, 214.5133013333334, 86);
stavesmo226726.setAttribute('id', 'stavesmo226726');
stavesmo226726.setBegBarType(VF.Barline.type.NONE);
stavesmo226726.setContext(context);
stavesmo226726.draw();
smo226726v0.draw(context, stavesmo226726);
const stavesmo227904 = new VF.Stave(757, 285.5133013333334, 86);
stavesmo227904.setAttribute('id', 'stavesmo227904');
stavesmo227904.setBegBarType(VF.Barline.type.NONE);
stavesmo227904.setContext(context);
stavesmo227904.draw();
smo227904v0.draw(context, stavesmo227904);
const fmtsmo22546727 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo225467v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225467v0ar = [];
const smo225441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225441.setAttribute('id', 'smo225441');
const smo225442 = new VF.Annotation('-');
smo225442.setAttribute('id', 'smo225442');
smo225442.setFont('Merriweather', 12, 'normal');
smo225442.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225441.addModifier(smo225442);
smo225442.addClass('lyric lyric-0 lyric-hyphen');
smo225467v0ar.push(smo225441);
const smo225443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225443.setAttribute('id', 'smo225443');
const smo225444 = new VF.Annotation('wie');
smo225444.setAttribute('id', 'smo225444');
smo225444.setFont('Merriweather', 12, 'normal');
smo225444.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225443.addModifier(smo225444);
smo225444.addClass('lyric lyric-0');
const smo225445 = new VF.Annotation('ihn');
smo225445.setAttribute('id', 'smo225445');
smo225445.setFont('Merriweather', 12, 'normal');
smo225445.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225443.addModifier(smo225445);
smo225445.addClass('lyric lyric-1');
smo225467v0ar.push(smo225443);
const smo225446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225446.setAttribute('id', 'smo225446');
const smo225447 = new VF.Annotation('sonst');
smo225447.setAttribute('id', 'smo225447');
smo225447.setFont('Merriweather', 12, 'normal');
smo225447.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225446.addModifier(smo225447);
smo225447.addClass('lyric lyric-0');
const smo225448 = new VF.Annotation('mir');
smo225448.setAttribute('id', 'smo225448');
smo225448.setFont('Merriweather', 12, 'normal');
smo225448.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225446.addModifier(smo225448);
smo225448.addClass('lyric lyric-1');
smo225467v0ar.push(smo225446);
const smo225449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225449.setAttribute('id', 'smo225449');
const smo225450 = new VF.Annotation('kein');
smo225450.setAttribute('id', 'smo225450');
smo225450.setFont('Merriweather', 12, 'normal');
smo225450.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225449.addModifier(smo225450);
smo225450.addClass('lyric lyric-0');
const smo225451 = new VF.Annotation('zu');
smo225451.setAttribute('id', 'smo225451');
smo225451.setFont('Merriweather', 12, 'normal');
smo225451.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225449.addModifier(smo225451);
smo225451.addClass('lyric lyric-1 lyric-hyphen');
smo225467v0ar.push(smo225449);
smo225467v0.addTickables(smo225467v0ar)
fmtsmo22546727.joinVoices([smo225467v0]);
const fmtsmo22674327 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo226743v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226743v0ar = [];
const smo226727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo226727.setAttribute('id', 'smo226727');
smo226727.addModifier(new VF.Dot(), 0);
smo226743v0ar.push(smo226727);
smo226743v0.addTickables(smo226743v0ar)
fmtsmo22674327.joinVoices([smo226743v0]);
const fmtsmo22792127 = new VF.Formatter();
//
// voices and notes for stave 2 27
const smo227921v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227921v0ar = [];
const smo227905 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo227905.setAttribute('id', 'smo227905');
smo227905.addModifier(new VF.Dot(), 0);
smo227921v0ar.push(smo227905);
smo227921v0.addTickables(smo227921v0ar)
fmtsmo22792127.joinVoices([smo227921v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22546727.format([smo225467v0,smo226743v0,smo227921v0], 230);
const stavesmo225467 = new VF.Stave(843, 107.5133013333334, 244);
stavesmo225467.setAttribute('id', 'stavesmo225467');
stavesmo225467.setBegBarType(VF.Barline.type.NONE);
stavesmo225467.setContext(context);
stavesmo225467.draw();
smo225467v0.draw(context, stavesmo225467);
const stavesmo226743 = new VF.Stave(843, 214.5133013333334, 244);
stavesmo226743.setAttribute('id', 'stavesmo226743');
stavesmo226743.setBegBarType(VF.Barline.type.NONE);
stavesmo226743.setContext(context);
stavesmo226743.draw();
smo226743v0.draw(context, stavesmo226743);
const stavesmo227921 = new VF.Stave(843, 285.5133013333334, 244);
stavesmo227921.setAttribute('id', 'stavesmo227921');
stavesmo227921.setBegBarType(VF.Barline.type.NONE);
stavesmo227921.setContext(context);
stavesmo227921.draw();
smo227921v0.draw(context, stavesmo227921);
const fmtsmo22548928 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo225489v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225489v0ar = [];
const smo225468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225468.setAttribute('id', 'smo225468');
smo225468.addModifier(new VF.Dot(), 0);
const smo225469 = new VF.Annotation('Po');
smo225469.setAttribute('id', 'smo225469');
smo225469.setFont('Merriweather', 12, 'normal');
smo225469.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225468.addModifier(smo225469);
smo225469.addClass('lyric lyric-0 lyric-hyphen');
const smo225470 = new VF.Annotation('rück');
smo225470.setAttribute('id', 'smo225470');
smo225470.setFont('Merriweather', 12, 'normal');
smo225470.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225468.addModifier(smo225470);
smo225470.addClass('lyric lyric-1');
smo225489v0ar.push(smo225468);
const smo225471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo225471.setAttribute('id', 'smo225471');
smo225471.addModifier(new VF.Dot(), 0);
const smo225472 = new VF.Annotation('stil');
smo225472.setAttribute('id', 'smo225472');
smo225472.setFont('Merriweather', 12, 'normal');
smo225472.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225471.addModifier(smo225472);
smo225472.addClass('lyric lyric-0 lyric-hyphen');
const smo225473 = new VF.Annotation('ins');
smo225473.setAttribute('id', 'smo225473');
smo225473.setFont('Merriweather', 12, 'normal');
smo225473.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225471.addModifier(smo225473);
smo225473.addClass('lyric lyric-1');
smo225489v0ar.push(smo225471);
smo225489v0.addTickables(smo225489v0ar)
fmtsmo22548928.joinVoices([smo225489v0]);
const fmtsmo22676028 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo226760v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226760v0ar = [];
const smo226744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","bn/4/n"]}'))
smo226744.setAttribute('id', 'smo226744');
smo226744.addModifier(new VF.Dot(), 0);
smo226744.addModifier(new VF.Dot(), 1);
smo226760v0ar.push(smo226744);
smo226760v0.addTickables(smo226760v0ar)
fmtsmo22676028.joinVoices([smo226760v0]);
const fmtsmo22793828 = new VF.Formatter();
//
// voices and notes for stave 2 28
const smo227938v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227938v0ar = [];
const smo227922 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo227922.setAttribute('id', 'smo227922');
smo227922.addModifier(new VF.Dot(), 0);
smo227938v0ar.push(smo227922);
smo227938v0.addTickables(smo227938v0ar)
fmtsmo22793828.joinVoices([smo227938v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22548928.format([smo225489v0,smo226760v0,smo227938v0], 113);
const stavesmo225489 = new VF.Stave(1087, 107.5133013333334, 127);
stavesmo225489.setAttribute('id', 'stavesmo225489');
stavesmo225489.setBegBarType(VF.Barline.type.NONE);
stavesmo225489.setContext(context);
stavesmo225489.draw();
smo225489v0.draw(context, stavesmo225489);
const stavesmo226760 = new VF.Stave(1087, 214.5133013333334, 127);
stavesmo226760.setAttribute('id', 'stavesmo226760');
stavesmo226760.setBegBarType(VF.Barline.type.NONE);
stavesmo226760.setContext(context);
stavesmo226760.draw();
smo226760v0.draw(context, stavesmo226760);
const stavesmo227938 = new VF.Stave(1087, 285.5133013333334, 127);
stavesmo227938.setAttribute('id', 'stavesmo227938');
stavesmo227938.setBegBarType(VF.Barline.type.NONE);
stavesmo227938.setContext(context);
stavesmo227938.draw();
smo227938v0.draw(context, stavesmo227938);
const rightsmo228595stavesmo2254892 = new VF.StaveConnector(stavesmo225489, stavesmo227938).setType(0);
rightsmo228595stavesmo2254892.setContext(context).draw();
const fmtsmo22551329 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo225513v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225513v0ar = [];
const smo225490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225490.setAttribute('id', 'smo225490');
smo225490.addModifier(new VF.Dot(), 0);
const smo225491 = new VF.Annotation('lion');
smo225491.setAttribute('id', 'smo225491');
smo225491.setFont('Merriweather', 12, 'normal');
smo225491.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225490.addModifier(smo225491);
smo225491.addClass('lyric lyric-0');
const smo225492 = new VF.Annotation('Häus,');
smo225492.setAttribute('id', 'smo225492');
smo225492.setFont('Merriweather', 12, 'normal');
smo225492.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225490.addModifier(smo225492);
smo225492.addClass('lyric lyric-1');
smo225513v0ar.push(smo225490);
const smo225493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo225493.setAttribute('id', 'smo225493');
const smo225494 = new VF.Annotation('Häus');
smo225494.setAttribute('id', 'smo225494');
smo225494.setFont('Merriweather', 12, 'normal');
smo225494.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225493.addModifier(smo225494);
smo225494.addClass('lyric lyric-1');
smo225513v0ar.push(smo225493);
const smo225495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo225495.setAttribute('id', 'smo225495');
const smo225496 = new VF.Annotation('Es');
smo225496.setAttribute('id', 'smo225496');
smo225496.setFont('Merriweather', 12, 'normal');
smo225496.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225495.addModifier(smo225496);
smo225496.addClass('lyric lyric-0');
const smo225497 = new VF.Annotation('es');
smo225497.setAttribute('id', 'smo225497');
smo225497.setFont('Merriweather', 12, 'normal');
smo225497.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225495.addModifier(smo225497);
smo225497.addClass('lyric lyric-1');
smo225513v0ar.push(smo225495);
smo225513v0.addTickables(smo225513v0ar)
fmtsmo22551329.joinVoices([smo225513v0]);
const fmtsmo22677929 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo226779v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226779v0ar = [];
const smo226761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","bn/4/n"]}'))
smo226761.setAttribute('id', 'smo226761');
smo226761.addModifier(new VF.Dot(), 0);
smo226761.addModifier(new VF.Dot(), 1);
smo226779v0ar.push(smo226761);
const smo226762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo226762.setAttribute('id', 'smo226762');
smo226779v0ar.push(smo226762);
const smo226763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo226763.setAttribute('id', 'smo226763');
smo226779v0ar.push(smo226763);
smo226779v0.addTickables(smo226779v0ar)
fmtsmo22677929.joinVoices([smo226779v0]);
const fmtsmo22795729 = new VF.Formatter();
//
// voices and notes for stave 2 29
const smo227957v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227957v0ar = [];
const smo227939 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo227939.setAttribute('id', 'smo227939');
smo227939.addModifier(new VF.Dot(), 0);
smo227957v0ar.push(smo227939);
const smo227940 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo227940.setAttribute('id', 'smo227940');
smo227957v0ar.push(smo227940);
const smo227941 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo227941.setAttribute('id', 'smo227941');
smo227957v0ar.push(smo227941);
smo227957v0.addTickables(smo227957v0ar)
fmtsmo22795729.joinVoices([smo227957v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22551329.format([smo225513v0,smo226779v0,smo227957v0], 218);
const stavesmo225513 = new VF.Stave(66, 398.5133013333334, 291);
stavesmo225513.setAttribute('id', 'stavesmo225513');
stavesmo225513.setBegBarType(1);
stavesmo225513.addClef('treble');
const keysmo225513 = new VF.KeySignature('G');
keysmo225513.addToStave(stavesmo225513);
stavesmo225513.setContext(context);
stavesmo225513.draw();
smo225513v0.draw(context, stavesmo225513);
const stavesmo226779 = new VF.Stave(66, 520.5133013333334, 291);
stavesmo226779.setAttribute('id', 'stavesmo226779');
stavesmo226779.setBegBarType(1);
stavesmo226779.addClef('treble');
const keysmo226779 = new VF.KeySignature('G');
keysmo226779.addToStave(stavesmo226779);
stavesmo226779.setContext(context);
stavesmo226779.draw();
smo226779v0.draw(context, stavesmo226779);
const stavesmo227957 = new VF.Stave(66, 643.5133013333334, 291);
stavesmo227957.setAttribute('id', 'stavesmo227957');
stavesmo227957.setBegBarType(1);
stavesmo227957.addClef('bass');
const keysmo227957 = new VF.KeySignature('G');
keysmo227957.addToStave(stavesmo227957);
stavesmo227957.setContext(context);
stavesmo227957.draw();
smo227957v0.draw(context, stavesmo227957);
const leftsmo228595stavesmo2255132 = new VF.StaveConnector(stavesmo225513, stavesmo227957).setType(1);
leftsmo228595stavesmo2255132.setContext(context).draw();
const fmtsmo22553230 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo225532v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225532v0ar = [];
const smo225514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225514.setAttribute('id', 'smo225514');
smo225514.addModifier(new VF.Dot(), 0);
const smo225516 = new VF.Annotation('klingt');
smo225516.setAttribute('id', 'smo225516');
smo225516.setFont('Merriweather', 12, 'normal');
smo225516.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225514.addModifier(smo225516);
smo225516.addClass('lyric lyric-0');
const smo225515 = new VF.Annotation('sagt');
smo225515.setAttribute('id', 'smo225515');
smo225515.setFont('Merriweather', 12, 'normal');
smo225515.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225514.addModifier(smo225515);
smo225515.addClass('lyric lyric-1');
smo225532v0ar.push(smo225514);
smo225532v0.addTickables(smo225532v0ar)
fmtsmo22553230.joinVoices([smo225532v0]);
const fmtsmo22679630 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo226796v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226796v0ar = [];
const smo226780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo226780.setAttribute('id', 'smo226780');
smo226780.addModifier(new VF.Dot(), 0);
smo226796v0ar.push(smo226780);
smo226796v0.addTickables(smo226796v0ar)
fmtsmo22679630.joinVoices([smo226796v0]);
const fmtsmo22797830 = new VF.Formatter();
//
// voices and notes for stave 2 30
const smo227978v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227978v0ar = [];
const smo227958 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo227958.setAttribute('id', 'smo227958');
smo227958.addModifier(new VF.Dot(), 0);
smo227978v0ar.push(smo227958);
smo227978v0.addTickables(smo227978v0ar)
fmtsmo22797830.joinVoices([smo227978v0]);
const smo227978v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227978v1ar = [];
const smo227959 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo227959.setAttribute('id', 'smo227959');
smo227959.setStyle({ fillStyle: "#115511" });
smo227978v1ar.push(smo227959);
const smo227960 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo227960.setAttribute('id', 'smo227960');
smo227960.setStyle({ fillStyle: "#115511" });
smo227978v1ar.push(smo227960);
const smo227961 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo227961.setAttribute('id', 'smo227961');
smo227961.setStyle({ fillStyle: "#115511" });
smo227978v1ar.push(smo227961);
const smo227962 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo227962.setAttribute('id', 'smo227962');
smo227962.setStyle({ fillStyle: "#115511" });
smo227978v1ar.push(smo227962);
smo227978v1.addTickables(smo227978v1ar)
fmtsmo22797830.joinVoices([smo227978v1]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22553230.format([smo225532v0,smo226796v0,smo227978v0,smo227978v1], 197);
const stavesmo225532 = new VF.Stave(357, 398.5133013333334, 211);
stavesmo225532.setAttribute('id', 'stavesmo225532');
stavesmo225532.setBegBarType(VF.Barline.type.NONE);
stavesmo225532.setContext(context);
stavesmo225532.draw();
smo225532v0.draw(context, stavesmo225532);
const stavesmo226796 = new VF.Stave(357, 520.5133013333334, 211);
stavesmo226796.setAttribute('id', 'stavesmo226796');
stavesmo226796.setBegBarType(VF.Barline.type.NONE);
stavesmo226796.setContext(context);
stavesmo226796.draw();
smo226796v0.draw(context, stavesmo226796);
const stavesmo227978 = new VF.Stave(357, 643.5133013333334, 211);
stavesmo227978.setAttribute('id', 'stavesmo227978');
stavesmo227978.setBegBarType(VF.Barline.type.NONE);
stavesmo227978.setContext(context);
stavesmo227978.draw();
smo227978v0.draw(context, stavesmo227978);
smo227978v1.draw(context, stavesmo227978);
const fmtsmo22556031 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo225560v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225560v0ar = [];
const smo225533 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225533.setAttribute('id', 'smo225533');
const smo225534 = new VF.Annotation('-');
smo225534.setAttribute('id', 'smo225534');
smo225534.setFont('Merriweather', 12, 'normal');
smo225534.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225533.addModifier(smo225534);
smo225534.addClass('lyric lyric-0 lyric-hyphen');
const smo225535 = new VF.Annotation('-');
smo225535.setAttribute('id', 'smo225535');
smo225535.setFont('Merriweather', 12, 'normal');
smo225535.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225533.addModifier(smo225535);
smo225535.addClass('lyric lyric-1 lyric-hyphen');
smo225560v0ar.push(smo225533);
const smo225536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225536.setAttribute('id', 'smo225536');
const smo225537 = new VF.Annotation('wenn');
smo225537.setAttribute('id', 'smo225537');
smo225537.setFont('Merriweather', 12, 'normal');
smo225537.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225536.addModifier(smo225537);
smo225537.addClass('lyric lyric-0');
const smo225538 = new VF.Annotation('zu');
smo225538.setAttribute('id', 'smo225538');
smo225538.setFont('Merriweather', 12, 'normal');
smo225538.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225536.addModifier(smo225538);
smo225538.addClass('lyric lyric-1');
smo225560v0ar.push(smo225536);
const smo225539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225539.setAttribute('id', 'smo225539');
const smo225540 = new VF.Annotation('es');
smo225540.setAttribute('id', 'smo225540');
smo225540.setFont('Merriweather', 12, 'normal');
smo225540.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225539.addModifier(smo225540);
smo225540.addClass('lyric lyric-0');
const smo225541 = new VF.Annotation('ihm');
smo225541.setAttribute('id', 'smo225541');
smo225541.setFont('Merriweather', 12, 'normal');
smo225541.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225539.addModifier(smo225541);
smo225541.addClass('lyric lyric-1');
smo225560v0ar.push(smo225539);
const smo225542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225542.setAttribute('id', 'smo225542');
const smo225543 = new VF.Annotation('von');
smo225543.setAttribute('id', 'smo225543');
smo225543.setFont('Merriweather', 12, 'normal');
smo225543.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225542.addModifier(smo225543);
smo225543.addClass('lyric lyric-0');
const smo225544 = new VF.Annotation('Denk\'');
smo225544.setAttribute('id', 'smo225544');
smo225544.setFont('Merriweather', 12, 'normal');
smo225544.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225542.addModifier(smo225544);
smo225544.addClass('lyric lyric-1');
smo225560v0ar.push(smo225542);
smo225560v0.addTickables(smo225560v0ar)
fmtsmo22556031.joinVoices([smo225560v0]);
const fmtsmo22681431 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo226814v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226814v0ar = [];
const smo226797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo226797.setAttribute('id', 'smo226797');
smo226797.addModifier(new VF.Dot(), 0);
smo226814v0ar.push(smo226797);
const smo226798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
smo226798.setAttribute('id', 'smo226798');
smo226798.addModifier(new VF.Dot(), 0);
smo226814v0ar.push(smo226798);
smo226814v0.addTickables(smo226814v0ar)
fmtsmo22681431.joinVoices([smo226814v0]);
const fmtsmo22799931 = new VF.Formatter();
//
// voices and notes for stave 2 31
const smo227999v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227999v0ar = [];
const smo227979 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo227979.setAttribute('id', 'smo227979');
smo227979.addModifier(new VF.Dot(), 0);
smo227999v0ar.push(smo227979);
smo227999v0.addTickables(smo227999v0ar)
fmtsmo22799931.joinVoices([smo227999v0]);
const smo227999v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227999v1ar = [];
const smo227980 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo227980.setAttribute('id', 'smo227980');
smo227980.setStyle({ fillStyle: "#115511" });
smo227999v1ar.push(smo227980);
const smo227981 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo227981.setAttribute('id', 'smo227981');
smo227981.setStyle({ fillStyle: "#115511" });
smo227999v1ar.push(smo227981);
const smo227982 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo227982.setAttribute('id', 'smo227982');
smo227982.setStyle({ fillStyle: "#115511" });
smo227999v1ar.push(smo227982);
const smo227983 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo227983.setAttribute('id', 'smo227983');
smo227983.setStyle({ fillStyle: "#115511" });
smo227999v1ar.push(smo227983);
smo227999v1.addTickables(smo227999v1ar)
fmtsmo22799931.joinVoices([smo227999v1]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22556031.format([smo225560v0,smo226814v0,smo227999v0,smo227999v1], 293);
const stavesmo225560 = new VF.Stave(568, 398.5133013333334, 307);
stavesmo225560.setAttribute('id', 'stavesmo225560');
stavesmo225560.setBegBarType(VF.Barline.type.NONE);
stavesmo225560.setContext(context);
stavesmo225560.draw();
smo225560v0.draw(context, stavesmo225560);
const stavesmo226814 = new VF.Stave(568, 520.5133013333334, 307);
stavesmo226814.setAttribute('id', 'stavesmo226814');
stavesmo226814.setBegBarType(VF.Barline.type.NONE);
stavesmo226814.setContext(context);
stavesmo226814.draw();
smo226814v0.draw(context, stavesmo226814);
const stavesmo227999 = new VF.Stave(568, 643.5133013333334, 307);
stavesmo227999.setAttribute('id', 'stavesmo227999');
stavesmo227999.setBegBarType(VF.Barline.type.NONE);
stavesmo227999.setContext(context);
stavesmo227999.draw();
smo227999v0.draw(context, stavesmo227999);
smo227999v1.draw(context, stavesmo227999);
const fmtsmo22558832 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo225588v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225588v0ar = [];
const smo225561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225561.setAttribute('id', 'smo225561');
const smo225562 = new VF.Annotation('fer');
smo225562.setAttribute('id', 'smo225562');
smo225562.setFont('Merriweather', 12, 'normal');
smo225562.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225561.addModifier(smo225562);
smo225562.addClass('lyric lyric-0 lyric-hyphen');
const smo225563 = new VF.Annotation('im');
smo225563.setAttribute('id', 'smo225563');
smo225563.setFont('Merriweather', 12, 'normal');
smo225563.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225561.addModifier(smo225563);
smo225563.addClass('lyric lyric-1 lyric-hyphen');
smo225588v0ar.push(smo225561);
const smo225564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225564.setAttribute('id', 'smo225564');
const smo225565 = new VF.Annotation('ne');
smo225565.setAttribute('id', 'smo225565');
smo225565.setFont('Merriweather', 12, 'normal');
smo225565.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225564.addModifier(smo225565);
smo225565.addClass('lyric lyric-0');
const smo225566 = new VF.Annotation('mer');
smo225566.setAttribute('id', 'smo225566');
smo225566.setFont('Merriweather', 12, 'normal');
smo225566.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225564.addModifier(smo225566);
smo225566.addClass('lyric lyric-1');
smo225588v0ar.push(smo225564);
const smo225567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo225567.setAttribute('id', 'smo225567');
const smo225568 = new VF.Annotation('er');
smo225568.setAttribute('id', 'smo225568');
smo225568.setFont('Merriweather', 12, 'normal');
smo225568.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225567.addModifier(smo225568);
smo225568.addClass('lyric lyric-0 lyric-hyphen');
const smo225569 = new VF.Annotation('an');
smo225569.setAttribute('id', 'smo225569');
smo225569.setFont('Merriweather', 12, 'normal');
smo225569.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225567.addModifier(smo225569);
smo225569.addClass('lyric lyric-1');
smo225588v0ar.push(smo225567);
const smo225570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225570.setAttribute('id', 'smo225570');
smo225570.addModifier(new VF.Dot(), 0);
const smo225572 = new VF.Annotation('schalit');
smo225572.setAttribute('id', 'smo225572');
smo225572.setFont('Merriweather', 12, 'normal');
smo225572.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225570.addModifier(smo225572);
smo225572.addClass('lyric lyric-0');
const smo225571 = new VF.Annotation('mich');
smo225571.setAttribute('id', 'smo225571');
smo225571.setFont('Merriweather', 12, 'normal');
smo225571.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225570.addModifier(smo225571);
smo225571.addClass('lyric lyric-1');
smo225588v0ar.push(smo225570);
smo225588v0.addTickables(smo225588v0ar)
fmtsmo22558832.joinVoices([smo225588v0]);
const fmtsmo22683132 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo226831v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226831v0ar = [];
const smo226815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo226815.setAttribute('id', 'smo226815');
smo226815.addModifier(new VF.Dot(), 0);
smo226831v0ar.push(smo226815);
smo226831v0.addTickables(smo226831v0ar)
fmtsmo22683132.joinVoices([smo226831v0]);
const fmtsmo22802032 = new VF.Formatter();
//
// voices and notes for stave 2 32
const smo228020v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228020v0ar = [];
const smo228000 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo228000.setAttribute('id', 'smo228000');
smo228000.addModifier(new VF.Dot(), 0);
smo228020v0ar.push(smo228000);
smo228020v0.addTickables(smo228020v0ar)
fmtsmo22802032.joinVoices([smo228020v0]);
const smo228020v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228020v1ar = [];
const smo228001 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo228001.setAttribute('id', 'smo228001');
smo228001.setStyle({ fillStyle: "#115511" });
const smo2280010acc = new VF.Accidental('#');
smo228001.addModifier(smo2280010acc, 0);
smo228020v1ar.push(smo228001);
const smo228002 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo228002.setAttribute('id', 'smo228002');
smo228002.setStyle({ fillStyle: "#115511" });
smo228020v1ar.push(smo228002);
const smo228003 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo228003.setAttribute('id', 'smo228003');
smo228003.setStyle({ fillStyle: "#115511" });
smo228020v1ar.push(smo228003);
const smo228004 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo228004.setAttribute('id', 'smo228004');
smo228004.setStyle({ fillStyle: "#115511" });
smo228020v1ar.push(smo228004);
smo228020v1.addTickables(smo228020v1ar)
fmtsmo22802032.joinVoices([smo228020v1]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234786 = smo225561.getStemDirection();
smo225561.setStemDirection(dirsmo234786);
smo225564.setStemDirection(dirsmo234786);
smo225567.setStemDirection(dirsmo234786);
const smo234786 = new VF.Beam([smo225561,smo225564,smo225567]);
 
// formatting measures in staff group smo228595
fmtsmo22558832.format([smo225588v0,smo226831v0,smo228020v0,smo228020v1], 321);
const stavesmo225588 = new VF.Stave(875, 398.5133013333334, 335);
stavesmo225588.setAttribute('id', 'stavesmo225588');
stavesmo225588.setBegBarType(VF.Barline.type.NONE);
stavesmo225588.setContext(context);
stavesmo225588.draw();
smo225588v0.draw(context, stavesmo225588);
smo234786.setContext(context);
smo234786.draw();
const stavesmo226831 = new VF.Stave(875, 520.5133013333334, 335);
stavesmo226831.setAttribute('id', 'stavesmo226831');
stavesmo226831.setBegBarType(VF.Barline.type.NONE);
stavesmo226831.setContext(context);
stavesmo226831.draw();
smo226831v0.draw(context, stavesmo226831);
const stavesmo228020 = new VF.Stave(875, 643.5133013333334, 335);
stavesmo228020.setAttribute('id', 'stavesmo228020');
stavesmo228020.setBegBarType(VF.Barline.type.NONE);
stavesmo228020.setContext(context);
stavesmo228020.draw();
smo228020v0.draw(context, stavesmo228020);
smo228020v1.draw(context, stavesmo228020);
const rightsmo228595stavesmo2255882 = new VF.StaveConnector(stavesmo225588, stavesmo228020).setType(0);
rightsmo228595stavesmo2255882.setContext(context).draw();
const fmtsmo22561833 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo225618v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225618v0ar = [];
const smo225589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225589.setAttribute('id', 'smo225589');
const smo225590 = new VF.Annotation('-');
smo225590.setAttribute('id', 'smo225590');
smo225590.setFont('Merriweather', 12, 'normal');
smo225590.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225589.addModifier(smo225590);
smo225590.addClass('lyric lyric-0 lyric-hyphen');
smo225618v0ar.push(smo225589);
const smo225591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo225591.setAttribute('id', 'smo225591');
const smo225592 = new VF.Annotation('ais');
smo225592.setAttribute('id', 'smo225592');
smo225592.setFont('Merriweather', 12, 'normal');
smo225592.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225591.addModifier(smo225592);
smo225592.addClass('lyric lyric-0');
const smo225593 = new VF.Annotation('du');
smo225593.setAttribute('id', 'smo225593');
smo225593.setFont('Merriweather', 12, 'normal');
smo225593.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225591.addModifier(smo225593);
smo225593.addClass('lyric lyric-1');
smo225618v0ar.push(smo225591);
const smo225594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo225594.setAttribute('id', 'smo225594');
const smo225595 = new VF.Annotation('ruit');
smo225595.setAttribute('id', 'smo225595');
smo225595.setFont('Merriweather', 12, 'normal');
smo225595.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225594.addModifier(smo225595);
smo225595.addClass('lyric lyric-0');
const smo225596 = new VF.Annotation('weißt');
smo225596.setAttribute('id', 'smo225596');
smo225596.setFont('Merriweather', 12, 'normal');
smo225596.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225594.addModifier(smo225596);
smo225596.addClass('lyric lyric-1');
smo225618v0ar.push(smo225594);
const smo225597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225597.setAttribute('id', 'smo225597');
const smo225598 = new VF.Annotation('er');
smo225598.setAttribute('id', 'smo225598');
smo225598.setFont('Merriweather', 12, 'normal');
smo225598.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225597.addModifier(smo225598);
smo225598.addClass('lyric lyric-0');
const smo225599 = new VF.Annotation('doch,');
smo225599.setAttribute('id', 'smo225599');
smo225599.setFont('Merriweather', 12, 'normal');
smo225599.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225597.addModifier(smo225599);
smo225599.addClass('lyric lyric-1');
smo225618v0ar.push(smo225597);
const smo225600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225600.setAttribute('id', 'smo225600');
const smo225601 = new VF.Annotation('Ich');
smo225601.setAttribute('id', 'smo225601');
smo225601.setFont('Merriweather', 12, 'normal');
smo225601.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225600.addModifier(smo225601);
smo225601.addClass('lyric lyric-0');
const smo225602 = new VF.Annotation('ich');
smo225602.setAttribute('id', 'smo225602');
smo225602.setFont('Merriweather', 12, 'normal');
smo225602.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225600.addModifier(smo225602);
smo225602.addClass('lyric lyric-1');
smo225618v0ar.push(smo225600);
smo225618v0.addTickables(smo225618v0ar)
fmtsmo22561833.joinVoices([smo225618v0]);
const fmtsmo22685133 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo226851v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226851v0ar = [];
const smo226832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo226832.setAttribute('id', 'smo226832');
smo226851v0ar.push(smo226832);
const smo226833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo226833.setAttribute('id', 'smo226833');
smo226851v0ar.push(smo226833);
const smo226834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo226834.setAttribute('id', 'smo226834');
smo226851v0ar.push(smo226834);
const smo226835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo226835.setAttribute('id', 'smo226835');
smo226851v0ar.push(smo226835);
smo226851v0.addTickables(smo226851v0ar)
fmtsmo22685133.joinVoices([smo226851v0]);
const fmtsmo22804133 = new VF.Formatter();
//
// voices and notes for stave 2 33
const smo228041v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228041v0ar = [];
const smo228021 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo228021.setAttribute('id', 'smo228021');
smo228021.addModifier(new VF.Dot(), 0);
smo228041v0ar.push(smo228021);
smo228041v0.addTickables(smo228041v0ar)
fmtsmo22804133.joinVoices([smo228041v0]);
const smo228041v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228041v1ar = [];
const smo228022 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo228022.setAttribute('id', 'smo228022');
smo228022.setStyle({ fillStyle: "#115511" });
const smo2280220acc = new VF.Accidental('#');
smo228022.addModifier(smo2280220acc, 0);
smo228041v1ar.push(smo228022);
const smo228023 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo228023.setAttribute('id', 'smo228023');
smo228023.setStyle({ fillStyle: "#115511" });
smo228041v1ar.push(smo228023);
const smo228024 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo228024.setAttribute('id', 'smo228024');
smo228024.setStyle({ fillStyle: "#115511" });
smo228041v1ar.push(smo228024);
const smo228025 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo228025.setAttribute('id', 'smo228025');
smo228025.setStyle({ fillStyle: "#115511" });
smo228041v1ar.push(smo228025);
smo228041v1.addTickables(smo228041v1ar)
fmtsmo22804133.joinVoices([smo228041v1]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234800 = smo225594.getStemDirection();
smo225594.setStemDirection(dirsmo234800);
smo225597.setStemDirection(dirsmo234800);
smo225600.setStemDirection(dirsmo234800);
const smo234800 = new VF.Beam([smo225594,smo225597,smo225600]);
 
// formatting measures in staff group smo228595
fmtsmo22561833.format([smo225618v0,smo226851v0,smo228041v0,smo228041v1], 293);
const stavesmo225618 = new VF.Stave(66, 778.5133013333334, 367);
stavesmo225618.setAttribute('id', 'stavesmo225618');
stavesmo225618.setBegBarType(1);
stavesmo225618.addClef('treble');
const keysmo225618 = new VF.KeySignature('G');
keysmo225618.addToStave(stavesmo225618);
stavesmo225618.setContext(context);
stavesmo225618.draw();
smo225618v0.draw(context, stavesmo225618);
smo234800.setContext(context);
smo234800.draw();
const stavesmo226851 = new VF.Stave(66, 893.5133013333334, 367);
stavesmo226851.setAttribute('id', 'stavesmo226851');
stavesmo226851.setBegBarType(1);
stavesmo226851.addClef('treble');
const keysmo226851 = new VF.KeySignature('G');
keysmo226851.addToStave(stavesmo226851);
stavesmo226851.setContext(context);
stavesmo226851.draw();
smo226851v0.draw(context, stavesmo226851);
const stavesmo228041 = new VF.Stave(66, 1026.5133013333334, 367);
stavesmo228041.setAttribute('id', 'stavesmo228041');
stavesmo228041.setBegBarType(1);
stavesmo228041.addClef('bass');
const keysmo228041 = new VF.KeySignature('G');
keysmo228041.addToStave(stavesmo228041);
stavesmo228041.setContext(context);
stavesmo228041.draw();
smo228041v0.draw(context, stavesmo228041);
smo228041v1.draw(context, stavesmo228041);
const leftsmo228595stavesmo2256182 = new VF.StaveConnector(stavesmo225618, stavesmo228041).setType(1);
leftsmo228595stavesmo2256182.setContext(context).draw();
const fmtsmo22564334 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo225643v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225643v0ar = [];
const smo225619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225619.setAttribute('id', 'smo225619');
const smo225620 = new VF.Annotation('kom');
smo225620.setAttribute('id', 'smo225620');
smo225620.setFont('Merriweather', 12, 'normal');
smo225620.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225619.addModifier(smo225620);
smo225620.addClass('lyric lyric-0 lyric-hyphen');
const smo225621 = new VF.Annotation('lie');
smo225621.setAttribute('id', 'smo225621');
smo225621.setFont('Merriweather', 12, 'normal');
smo225621.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225619.addModifier(smo225621);
smo225621.addClass('lyric lyric-1 lyric-hyphen');
smo225643v0ar.push(smo225619);
const smo225622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo225622.setAttribute('id', 'smo225622');
const smo225623 = new VF.Annotation('me');
smo225623.setAttribute('id', 'smo225623');
smo225623.setFont('Merriweather', 12, 'normal');
smo225623.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225622.addModifier(smo225623);
smo225623.addClass('lyric lyric-0');
const smo225624 = new VF.Annotation('be');
smo225624.setAttribute('id', 'smo225624');
smo225624.setFont('Merriweather', 12, 'normal');
smo225624.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225622.addModifier(smo225624);
smo225624.addClass('lyric lyric-1 lyric-hyphen');
smo225643v0ar.push(smo225622);
const smo225625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225625.setAttribute('id', 'smo225625');
smo225625.addModifier(new VF.Dot(), 0);
const smo225627 = new VF.Annotation('bald!');
smo225627.setAttribute('id', 'smo225627');
smo225627.setFont('Merriweather', 12, 'normal');
smo225627.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225625.addModifier(smo225627);
smo225627.addClass('lyric lyric-0');
const smo225626 = new VF.Annotation('dich!');
smo225626.setAttribute('id', 'smo225626');
smo225626.setFont('Merriweather', 12, 'normal');
smo225626.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225625.addModifier(smo225626);
smo225626.addClass('lyric lyric-1');
smo225643v0ar.push(smo225625);
smo225643v0.addTickables(smo225643v0ar)
fmtsmo22564334.joinVoices([smo225643v0]);
const fmtsmo22687034 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo226870v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226870v0ar = [];
const smo226852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo226852.setAttribute('id', 'smo226852');
smo226852.addModifier(new VF.Dot(), 0);
smo226870v0ar.push(smo226852);
const smo226853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo226853.setAttribute('id', 'smo226853');
smo226870v0ar.push(smo226853);
const smo226854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo226854.setAttribute('id', 'smo226854');
smo226870v0ar.push(smo226854);
smo226870v0.addTickables(smo226870v0ar)
fmtsmo22687034.joinVoices([smo226870v0]);
const fmtsmo22805934 = new VF.Formatter();
//
// voices and notes for stave 2 34
const smo228059v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228059v0ar = [];
const smo228042 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo228042.setAttribute('id', 'smo228042');
smo228042.addModifier(new VF.Dot(), 0);
smo228059v0ar.push(smo228042);
smo228059v0.addTickables(smo228059v0ar)
fmtsmo22805934.joinVoices([smo228059v0]);
const smo228059v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228059v1ar = [];
const smo228043 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo228043.setAttribute('id', 'smo228043');
smo228043.setStyle({ fillStyle: "#115511" });
smo228043.addModifier(new VF.Dot(), 0);
smo228059v1ar.push(smo228043);
smo228059v1.addTickables(smo228059v1ar)
fmtsmo22805934.joinVoices([smo228059v1]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22564334.format([smo225643v0,smo226870v0,smo228059v0,smo228059v1], 200);
const stavesmo225643 = new VF.Stave(433, 778.5133013333334, 214);
stavesmo225643.setAttribute('id', 'stavesmo225643');
stavesmo225643.setBegBarType(VF.Barline.type.NONE);
stavesmo225643.setContext(context);
stavesmo225643.draw();
smo225643v0.draw(context, stavesmo225643);
const stavesmo226870 = new VF.Stave(433, 893.5133013333334, 214);
stavesmo226870.setAttribute('id', 'stavesmo226870');
stavesmo226870.setBegBarType(VF.Barline.type.NONE);
stavesmo226870.setContext(context);
stavesmo226870.draw();
smo226870v0.draw(context, stavesmo226870);
const stavesmo228059 = new VF.Stave(433, 1026.5133013333334, 214);
stavesmo228059.setAttribute('id', 'stavesmo228059');
stavesmo228059.setBegBarType(VF.Barline.type.NONE);
stavesmo228059.setContext(context);
stavesmo228059.draw();
smo228059v0.draw(context, stavesmo228059);
smo228059v1.draw(context, stavesmo228059);
const fmtsmo22566535 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo225665v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225665v0ar = [];
const smo225644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225644.setAttribute('id', 'smo225644');
smo225644.addModifier(new VF.Dot(), 0);
const smo225645 = new VF.Annotation('-');
smo225645.setAttribute('id', 'smo225645');
smo225645.setFont('Merriweather', 12, 'normal');
smo225645.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225644.addModifier(smo225645);
smo225645.addClass('lyric lyric-0 lyric-hyphen');
smo225665v0ar.push(smo225644);
const smo225646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo225646.setAttribute('id', 'smo225646');
smo225665v0ar.push(smo225646);
const smo225647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225647.setAttribute('id', 'smo225647');
const smo225648 = new VF.Annotation('Ich');
smo225648.setAttribute('id', 'smo225648');
smo225648.setFont('Merriweather', 12, 'normal');
smo225648.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225647.addModifier(smo225648);
smo225648.addClass('lyric lyric-0');
const smo225649 = new VF.Annotation('ich');
smo225649.setAttribute('id', 'smo225649');
smo225649.setFont('Merriweather', 12, 'normal');
smo225649.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225647.addModifier(smo225649);
smo225649.addClass('lyric lyric-1');
smo225665v0ar.push(smo225647);
smo225665v0.addTickables(smo225665v0ar)
fmtsmo22566535.joinVoices([smo225665v0]);
const fmtsmo22688735 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo226887v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226887v0ar = [];
const smo226871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo226871.setAttribute('id', 'smo226871');
smo226871.addModifier(new VF.Dot(), 0);
smo226887v0ar.push(smo226871);
smo226887v0.addTickables(smo226887v0ar)
fmtsmo22688735.joinVoices([smo226887v0]);
const fmtsmo22807935 = new VF.Formatter();
//
// voices and notes for stave 2 35
const smo228079v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228079v0ar = [];
const smo228060 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo228060.setAttribute('id', 'smo228060');
smo228060.addModifier(new VF.Dot(), 0);
smo228079v0ar.push(smo228060);
smo228079v0.addTickables(smo228079v0ar)
fmtsmo22807935.joinVoices([smo228079v0]);
const smo228079v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228079v1ar = [];
const smo228061 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo228061.setAttribute('id', 'smo228061');
smo228061.setStyle({ fillStyle: "#115511" });
smo228079v1ar.push(smo228061);
const smo228062 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo228062.setAttribute('id', 'smo228062');
smo228062.setStyle({ fillStyle: "#115511" });
smo228079v1ar.push(smo228062);
const smo228063 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo228063.setAttribute('id', 'smo228063');
smo228063.setStyle({ fillStyle: "#115511" });
smo228063.addModifier(new VF.Dot(), 0);
smo228079v1ar.push(smo228063);
smo228079v1.addTickables(smo228079v1ar)
fmtsmo22807935.joinVoices([smo228079v1]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22566535.format([smo225665v0,smo226887v0,smo228079v0,smo228079v1], 155);
const stavesmo225665 = new VF.Stave(647, 778.5133013333334, 169);
stavesmo225665.setAttribute('id', 'stavesmo225665');
stavesmo225665.setBegBarType(VF.Barline.type.NONE);
stavesmo225665.setContext(context);
stavesmo225665.draw();
smo225665v0.draw(context, stavesmo225665);
const stavesmo226887 = new VF.Stave(647, 893.5133013333334, 169);
stavesmo226887.setAttribute('id', 'stavesmo226887');
stavesmo226887.setBegBarType(VF.Barline.type.NONE);
stavesmo226887.setContext(context);
stavesmo226887.draw();
smo226887v0.draw(context, stavesmo226887);
const stavesmo228079 = new VF.Stave(647, 1026.5133013333334, 169);
stavesmo228079.setAttribute('id', 'stavesmo228079');
stavesmo228079.setBegBarType(VF.Barline.type.NONE);
stavesmo228079.setContext(context);
stavesmo228079.draw();
smo228079v0.draw(context, stavesmo228079);
smo228079v1.draw(context, stavesmo228079);
const fmtsmo22569036 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo225690v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225690v0ar = [];
const smo225666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225666.setAttribute('id', 'smo225666');
const smo225667 = new VF.Annotation('kom');
smo225667.setAttribute('id', 'smo225667');
smo225667.setFont('Merriweather', 12, 'normal');
smo225667.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225666.addModifier(smo225667);
smo225667.addClass('lyric lyric-0 lyric-hyphen');
const smo225668 = new VF.Annotation('lie');
smo225668.setAttribute('id', 'smo225668');
smo225668.setFont('Merriweather', 12, 'normal');
smo225668.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225666.addModifier(smo225668);
smo225668.addClass('lyric lyric-1 lyric-hyphen');
smo225690v0ar.push(smo225666);
const smo225669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo225669.setAttribute('id', 'smo225669');
const smo225670 = new VF.Annotation('me');
smo225670.setAttribute('id', 'smo225670');
smo225670.setFont('Merriweather', 12, 'normal');
smo225670.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225669.addModifier(smo225670);
smo225670.addClass('lyric lyric-0');
const smo225671 = new VF.Annotation('be');
smo225671.setAttribute('id', 'smo225671');
smo225671.setFont('Merriweather', 12, 'normal');
smo225671.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225669.addModifier(smo225671);
smo225671.addClass('lyric lyric-1');
smo225690v0ar.push(smo225669);
const smo225672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225672.setAttribute('id', 'smo225672');
smo225672.addModifier(new VF.Dot(), 0);
const smo225673 = new VF.Annotation('bald');
smo225673.setAttribute('id', 'smo225673');
smo225673.setFont('Merriweather', 12, 'normal');
smo225673.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225672.addModifier(smo225673);
smo225673.addClass('lyric lyric-0');
const smo225674 = new VF.Annotation('dich!');
smo225674.setAttribute('id', 'smo225674');
smo225674.setFont('Merriweather', 12, 'normal');
smo225674.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225672.addModifier(smo225674);
smo225674.addClass('lyric lyric-1');
smo225690v0ar.push(smo225672);
smo225690v0.addTickables(smo225690v0ar)
fmtsmo22569036.joinVoices([smo225690v0]);
const fmtsmo22690436 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo226904v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226904v0ar = [];
const smo226888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo226888.setAttribute('id', 'smo226888');
smo226888.addModifier(new VF.Dot(), 0);
smo226904v0ar.push(smo226888);
smo226904v0.addTickables(smo226904v0ar)
fmtsmo22690436.joinVoices([smo226904v0]);
const fmtsmo22809936 = new VF.Formatter();
//
// voices and notes for stave 2 36
const smo228099v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228099v0ar = [];
const smo228080 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo228080.setAttribute('id', 'smo228080');
smo228080.addModifier(new VF.Dot(), 0);
smo228099v0ar.push(smo228080);
smo228099v0.addTickables(smo228099v0ar)
fmtsmo22809936.joinVoices([smo228099v0]);
const smo228099v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228099v1ar = [];
const smo228081 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
smo228081.setAttribute('id', 'smo228081');
smo228081.setStyle({ fillStyle: '#aaaaaa7f' });
smo228081.addModifier(new VF.Dot(), 0);
smo228099v1ar.push(smo228081);
const smo228082 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
smo228082.setAttribute('id', 'smo228082');
smo228082.setStyle({ fillStyle: '#aaaaaa7f' });
smo228099v1ar.push(smo228082);
const smo228083 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo228083.setAttribute('id', 'smo228083');
smo228083.setStyle({ fillStyle: "#115511" });
smo228099v1ar.push(smo228083);
smo228099v1.addTickables(smo228099v1ar)
fmtsmo22809936.joinVoices([smo228099v1]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22569036.format([smo225690v0,smo226904v0,smo228099v0,smo228099v1], 200);
const stavesmo225690 = new VF.Stave(816, 778.5133013333334, 214);
stavesmo225690.setAttribute('id', 'stavesmo225690');
stavesmo225690.setBegBarType(VF.Barline.type.NONE);
stavesmo225690.setContext(context);
stavesmo225690.draw();
smo225690v0.draw(context, stavesmo225690);
const stavesmo226904 = new VF.Stave(816, 893.5133013333334, 214);
stavesmo226904.setAttribute('id', 'stavesmo226904');
stavesmo226904.setBegBarType(VF.Barline.type.NONE);
stavesmo226904.setContext(context);
stavesmo226904.draw();
smo226904v0.draw(context, stavesmo226904);
const stavesmo228099 = new VF.Stave(816, 1026.5133013333334, 214);
stavesmo228099.setAttribute('id', 'stavesmo228099');
stavesmo228099.setBegBarType(VF.Barline.type.NONE);
stavesmo228099.setContext(context);
stavesmo228099.draw();
smo228099v0.draw(context, stavesmo228099);
smo228099v1.draw(context, stavesmo228099);
const fmtsmo22571237 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo225712v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225712v0ar = [];
const smo225691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo225691.setAttribute('id', 'smo225691');
smo225712v0ar.push(smo225691);
const smo225692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo225692.setAttribute('id', 'smo225692');
smo225712v0ar.push(smo225692);
const smo225693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo225693.setAttribute('id', 'smo225693');
smo225712v0ar.push(smo225693);
const smo225694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo225694.setAttribute('id', 'smo225694');
const smo225695 = new VF.Annotation('Mein');
smo225695.setAttribute('id', 'smo225695');
smo225695.setFont('Merriweather', 12, 'normal');
smo225695.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225694.addModifier(smo225695);
smo225695.addClass('lyric lyric-0');
const smo225696 = new VF.Annotation('Tra');
smo225696.setAttribute('id', 'smo225696');
smo225696.setFont('Merriweather', 12, 'normal');
smo225696.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225694.addModifier(smo225696);
smo225696.addClass('lyric lyric-1 lyric-hyphen');
smo225712v0ar.push(smo225694);
smo225712v0.addTickables(smo225712v0ar)
fmtsmo22571237.joinVoices([smo225712v0]);
const fmtsmo22692137 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo226921v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226921v0ar = [];
const smo226905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo226905.setAttribute('id', 'smo226905');
smo226905.addModifier(new VF.Dot(), 0);
smo226921v0ar.push(smo226905);
smo226921v0.addTickables(smo226921v0ar)
fmtsmo22692137.joinVoices([smo226921v0]);
const fmtsmo22811937 = new VF.Formatter();
//
// voices and notes for stave 2 37
const smo228119v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228119v0ar = [];
const smo228100 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo228100.setAttribute('id', 'smo228100');
smo228100.addModifier(new VF.Dot(), 0);
smo228119v0ar.push(smo228100);
smo228119v0.addTickables(smo228119v0ar)
fmtsmo22811937.joinVoices([smo228119v0]);
const smo228119v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228119v1ar = [];
const smo228101 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo228101.setAttribute('id', 'smo228101');
smo228101.setStyle({ fillStyle: "#115511" });
smo228119v1ar.push(smo228101);
const smo228102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo228102.setAttribute('id', 'smo228102');
smo228102.setStyle({ fillStyle: "#115511" });
smo228119v1ar.push(smo228102);
const smo228103 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo228103.setAttribute('id', 'smo228103');
smo228103.setStyle({ fillStyle: "#115511" });
smo228103.addModifier(new VF.Dot(), 0);
smo228119v1ar.push(smo228103);
smo228119v1.addTickables(smo228119v1ar)
fmtsmo22811937.joinVoices([smo228119v1]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22571237.format([smo225712v0,smo226921v0,smo228119v0,smo228119v1], 170);
const stavesmo225712 = new VF.Stave(1030, 778.5133013333334, 184);
stavesmo225712.setAttribute('id', 'stavesmo225712');
stavesmo225712.setBegBarType(VF.Barline.type.NONE);
stavesmo225712.setContext(context);
stavesmo225712.draw();
smo225712v0.draw(context, stavesmo225712);
const stavesmo226921 = new VF.Stave(1030, 893.5133013333334, 184);
stavesmo226921.setAttribute('id', 'stavesmo226921');
stavesmo226921.setBegBarType(VF.Barline.type.NONE);
stavesmo226921.setContext(context);
stavesmo226921.draw();
smo226921v0.draw(context, stavesmo226921);
const stavesmo228119 = new VF.Stave(1030, 1026.5133013333334, 184);
stavesmo228119.setAttribute('id', 'stavesmo228119');
stavesmo228119.setBegBarType(VF.Barline.type.NONE);
stavesmo228119.setContext(context);
stavesmo228119.draw();
smo228119v0.draw(context, stavesmo228119);
smo228119v1.draw(context, stavesmo228119);
const rightsmo228595stavesmo2257122 = new VF.StaveConnector(stavesmo225712, stavesmo228119).setType(0);
rightsmo228595stavesmo2257122.setContext(context).draw();
const fmtsmo22573138 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo225731v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225731v0ar = [];
const smo225713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225713.setAttribute('id', 'smo225713');
smo225713.addModifier(new VF.Dot(), 0);
const smo225714 = new VF.Annotation('Shatz');
smo225714.setAttribute('id', 'smo225714');
smo225714.setFont('Merriweather', 12, 'normal');
smo225714.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225713.addModifier(smo225714);
smo225714.addClass('lyric lyric-0');
const smo225715 = new VF.Annotation('ra!');
smo225715.setAttribute('id', 'smo225715');
smo225715.setFont('Merriweather', 12, 'normal');
smo225715.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225713.addModifier(smo225715);
smo225715.addClass('lyric lyric-1');
smo225731v0ar.push(smo225713);
smo225731v0.addTickables(smo225731v0ar)
fmtsmo22573138.joinVoices([smo225731v0]);
const fmtsmo22693838 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo226938v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226938v0ar = [];
const smo226922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n","bn/4/n"]}'))
smo226922.setAttribute('id', 'smo226922');
smo226922.addModifier(new VF.Dot(), 0);
smo226922.addModifier(new VF.Dot(), 1);
smo226938v0ar.push(smo226922);
smo226938v0.addTickables(smo226938v0ar)
fmtsmo22693838.joinVoices([smo226938v0]);
const fmtsmo22813938 = new VF.Formatter();
//
// voices and notes for stave 2 38
const smo228139v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228139v0ar = [];
const smo228120 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo228120.setAttribute('id', 'smo228120');
smo228139v0ar.push(smo228120);
const smo228121 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo228121.setAttribute('id', 'smo228121');
smo228139v0ar.push(smo228121);
const smo228122 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo228122.setAttribute('id', 'smo228122');
smo228139v0ar.push(smo228122);
const smo228123 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo228123.setAttribute('id', 'smo228123');
smo228139v0ar.push(smo228123);
smo228139v0.addTickables(smo228139v0ar)
fmtsmo22813938.joinVoices([smo228139v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22573138.format([smo225731v0,smo226938v0,smo228139v0], 150);
const stavesmo225731 = new VF.Stave(66, 1166.5133013333334, 224);
stavesmo225731.setAttribute('id', 'stavesmo225731');
stavesmo225731.setBegBarType(1);
stavesmo225731.addClef('treble');
const keysmo225731 = new VF.KeySignature('G');
keysmo225731.addToStave(stavesmo225731);
stavesmo225731.setContext(context);
stavesmo225731.draw();
smo225731v0.draw(context, stavesmo225731);
const stavesmo226938 = new VF.Stave(66, 1298.5133013333334, 224);
stavesmo226938.setAttribute('id', 'stavesmo226938');
stavesmo226938.setBegBarType(1);
stavesmo226938.addClef('treble');
const keysmo226938 = new VF.KeySignature('G');
keysmo226938.addToStave(stavesmo226938);
stavesmo226938.setContext(context);
stavesmo226938.draw();
smo226938v0.draw(context, stavesmo226938);
const stavesmo228139 = new VF.Stave(66, 1424.5133013333334, 224);
stavesmo228139.setAttribute('id', 'stavesmo228139');
stavesmo228139.setBegBarType(1);
stavesmo228139.addClef('bass');
const keysmo228139 = new VF.KeySignature('G');
keysmo228139.addToStave(stavesmo228139);
stavesmo228139.setContext(context);
stavesmo228139.draw();
smo228139v0.draw(context, stavesmo228139);
const leftsmo228595stavesmo2257312 = new VF.StaveConnector(stavesmo225731, stavesmo228139).setType(1);
leftsmo228595stavesmo2257312.setContext(context).draw();
const fmtsmo22576239 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo225762v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225762v0ar = [];
const smo225732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo225732.setAttribute('id', 'smo225732');
const smo225733 = new VF.Annotation('-');
smo225733.setAttribute('id', 'smo225733');
smo225733.setFont('Merriweather', 12, 'normal');
smo225733.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225732.addModifier(smo225733);
smo225733.addClass('lyric lyric-0 lyric-hyphen');
smo225762v0ar.push(smo225732);
const smo225734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo225734.setAttribute('id', 'smo225734');
smo225762v0ar.push(smo225734);
const smo225735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225735.setAttribute('id', 'smo225735');
const smo225736 = new VF.Annotation('der');
smo225736.setAttribute('id', 'smo225736');
smo225736.setFont('Merriweather', 12, 'normal');
smo225736.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225735.addModifier(smo225736);
smo225736.addClass('lyric lyric-0');
const smo225737 = new VF.Annotation('ich');
smo225737.setAttribute('id', 'smo225737');
smo225737.setFont('Merriweather', 12, 'normal');
smo225737.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225735.addModifier(smo225737);
smo225737.addClass('lyric lyric-1');
smo225762v0ar.push(smo225735);
const smo225738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225738.setAttribute('id', 'smo225738');
const smo225739 = new VF.Annotation('ist');
smo225739.setAttribute('id', 'smo225739');
smo225739.setFont('Merriweather', 12, 'normal');
smo225739.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225738.addModifier(smo225739);
smo225739.addClass('lyric lyric-0');
const smo225740 = new VF.Annotation('hö');
smo225740.setAttribute('id', 'smo225740');
smo225740.setFont('Merriweather', 12, 'normal');
smo225740.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225738.addModifier(smo225740);
smo225740.addClass('lyric lyric-1 lyric-hyphen');
smo225762v0ar.push(smo225738);
const smo225741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225741.setAttribute('id', 'smo225741');
const smo225742 = new VF.Annotation('Po');
smo225742.setAttribute('id', 'smo225742');
smo225742.setFont('Merriweather', 12, 'normal');
smo225742.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225741.addModifier(smo225742);
smo225742.addClass('lyric lyric-0 lyric-hyphen');
const smo225743 = new VF.Annotation('re');
smo225743.setAttribute('id', 'smo225743');
smo225743.setFont('Merriweather', 12, 'normal');
smo225743.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225741.addModifier(smo225743);
smo225743.addClass('lyric lyric-1');
smo225762v0ar.push(smo225741);
const smo225744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo225744.setAttribute('id', 'smo225744');
const smo225745 = new VF.Annotation('stil');
smo225745.setAttribute('id', 'smo225745');
smo225745.setFont('Merriweather', 12, 'normal');
smo225745.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225744.addModifier(smo225745);
smo225745.addClass('lyric lyric-0 lyric-hyphen');
const smo225746 = new VF.Annotation('sein');
smo225746.setAttribute('id', 'smo225746');
smo225746.setFont('Merriweather', 12, 'normal');
smo225746.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225744.addModifier(smo225746);
smo225746.addClass('lyric lyric-1');
smo225762v0ar.push(smo225744);
smo225762v0.addTickables(smo225762v0ar)
fmtsmo22576239.joinVoices([smo225762v0]);
const fmtsmo22695739 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo226957v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226957v0ar = [];
const smo226939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n","bn/4/n"]}'))
smo226939.setAttribute('id', 'smo226939');
smo226939.addModifier(new VF.Dot(), 0);
smo226939.addModifier(new VF.Dot(), 1);
smo226957v0ar.push(smo226939);
const smo226940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo226940.setAttribute('id', 'smo226940');
smo226957v0ar.push(smo226940);
const smo226941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo226941.setAttribute('id', 'smo226941');
smo226957v0ar.push(smo226941);
smo226957v0.addTickables(smo226957v0ar)
fmtsmo22695739.joinVoices([smo226957v0]);
const fmtsmo22815939 = new VF.Formatter();
//
// voices and notes for stave 2 39
const smo228159v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228159v0ar = [];
const smo228140 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo228140.setAttribute('id', 'smo228140');
smo228159v0ar.push(smo228140);
const smo228141 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo228141.setAttribute('id', 'smo228141');
smo228159v0ar.push(smo228141);
const smo228142 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo228142.setAttribute('id', 'smo228142');
smo228159v0ar.push(smo228142);
const smo228143 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo228143.setAttribute('id', 'smo228143');
smo228159v0ar.push(smo228143);
smo228159v0.addTickables(smo228159v0ar)
fmtsmo22815939.joinVoices([smo228159v0]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234843 = smo225738.getStemDirection();
smo225738.setStemDirection(dirsmo234843);
smo225741.setStemDirection(dirsmo234843);
smo225744.setStemDirection(dirsmo234843);
const smo234843 = new VF.Beam([smo225738,smo225741,smo225744]);
 
// formatting measures in staff group smo228595
fmtsmo22576239.format([smo225762v0,smo226957v0,smo228159v0], 271);
const stavesmo225762 = new VF.Stave(290, 1166.5133013333334, 285);
stavesmo225762.setAttribute('id', 'stavesmo225762');
stavesmo225762.setBegBarType(VF.Barline.type.NONE);
stavesmo225762.setContext(context);
stavesmo225762.draw();
smo225762v0.draw(context, stavesmo225762);
smo234843.setContext(context);
smo234843.draw();
const stavesmo226957 = new VF.Stave(290, 1298.5133013333334, 285);
stavesmo226957.setAttribute('id', 'stavesmo226957');
stavesmo226957.setBegBarType(VF.Barline.type.NONE);
stavesmo226957.setContext(context);
stavesmo226957.draw();
smo226957v0.draw(context, stavesmo226957);
const stavesmo228159 = new VF.Stave(290, 1424.5133013333334, 285);
stavesmo228159.setAttribute('id', 'stavesmo228159');
stavesmo228159.setBegBarType(VF.Barline.type.NONE);
stavesmo228159.setContext(context);
stavesmo228159.draw();
smo228159v0.draw(context, stavesmo228159);
const fmtsmo22578140 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo225781v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225781v0ar = [];
const smo225763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo225763.setAttribute('id', 'smo225763');
smo225763.addModifier(new VF.Dot(), 0);
const smo225764 = new VF.Annotation('lion');
smo225764.setAttribute('id', 'smo225764');
smo225764.setFont('Merriweather', 12, 'normal');
smo225764.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225763.addModifier(smo225764);
smo225764.addClass('lyric lyric-0');
const smo225765 = new VF.Annotation('Lied!');
smo225765.setAttribute('id', 'smo225765');
smo225765.setFont('Merriweather', 12, 'normal');
smo225765.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225763.addModifier(smo225765);
smo225765.addClass('lyric lyric-1');
smo225781v0ar.push(smo225763);
smo225781v0.addTickables(smo225781v0ar)
fmtsmo22578140.joinVoices([smo225781v0]);
const fmtsmo22697440 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo226974v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226974v0ar = [];
const smo226958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo226958.setAttribute('id', 'smo226958');
smo226958.addModifier(new VF.Dot(), 0);
smo226958.addModifier(new VF.Dot(), 1);
smo226974v0ar.push(smo226958);
smo226974v0.addTickables(smo226974v0ar)
fmtsmo22697440.joinVoices([smo226974v0]);
const fmtsmo22818340 = new VF.Formatter();
//
// voices and notes for stave 2 40
const smo228183v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228183v0ar = [];
const smo228160 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo228160.setAttribute('id', 'smo228160');
smo228183v0ar.push(smo228160);
const smo228161 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo228161.setAttribute('id', 'smo228161');
smo228183v0ar.push(smo228161);
const smo228162 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo228162.setAttribute('id', 'smo228162');
smo228183v0ar.push(smo228162);
const smo228163 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo228163.setAttribute('id', 'smo228163');
smo228183v0ar.push(smo228163);
smo228183v0.addTickables(smo228183v0ar)
fmtsmo22818340.joinVoices([smo228183v0]);
const smo228183v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228183v1ar = [];
const smo228164 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo228164.setAttribute('id', 'smo228164');
smo228164.setStyle({ fillStyle: "#115511" });
smo228183v1ar.push(smo228164);
const smo228165 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo228165.setAttribute('id', 'smo228165');
smo228165.setStyle({ fillStyle: "#115511" });
smo228183v1ar.push(smo228165);
const smo228166 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo228166.setAttribute('id', 'smo228166');
smo228166.setStyle({ fillStyle: "#115511" });
smo228183v1ar.push(smo228166);
const smo228167 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo228167.setAttribute('id', 'smo228167');
smo228167.setStyle({ fillStyle: "#115511" });
smo228183v1ar.push(smo228167);
smo228183v1.addTickables(smo228183v1ar)
fmtsmo22818340.joinVoices([smo228183v1]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22578140.format([smo225781v0,smo226974v0,smo228183v0,smo228183v1], 145);
const stavesmo225781 = new VF.Stave(575, 1166.5133013333334, 159);
stavesmo225781.setAttribute('id', 'stavesmo225781');
stavesmo225781.setBegBarType(VF.Barline.type.NONE);
stavesmo225781.setContext(context);
stavesmo225781.draw();
smo225781v0.draw(context, stavesmo225781);
const stavesmo226974 = new VF.Stave(575, 1298.5133013333334, 159);
stavesmo226974.setAttribute('id', 'stavesmo226974');
stavesmo226974.setBegBarType(VF.Barline.type.NONE);
stavesmo226974.setContext(context);
stavesmo226974.draw();
smo226974v0.draw(context, stavesmo226974);
const stavesmo228183 = new VF.Stave(575, 1424.5133013333334, 159);
stavesmo228183.setAttribute('id', 'stavesmo228183');
stavesmo228183.setBegBarType(VF.Barline.type.NONE);
stavesmo228183.setContext(context);
stavesmo228183.draw();
smo228183v0.draw(context, stavesmo228183);
smo228183v1.draw(context, stavesmo228183);
const fmtsmo22581141 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo225811v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225811v0ar = [];
const smo225782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo225782.setAttribute('id', 'smo225782');
const smo225783 = new VF.Annotation('-');
smo225783.setAttribute('id', 'smo225783');
smo225783.setFont('Merriweather', 12, 'normal');
smo225783.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225782.addModifier(smo225783);
smo225783.addClass('lyric lyric-0 lyric-hyphen');
smo225811v0ar.push(smo225782);
const smo225784 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225784.setAttribute('id', 'smo225784');
const smo225785 = new VF.Annotation('er');
smo225785.setAttribute('id', 'smo225785');
smo225785.setFont('Merriweather', 12, 'normal');
smo225785.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225784.addModifier(smo225785);
smo225785.addClass('lyric lyric-0');
const smo225786 = new VF.Annotation('ich');
smo225786.setAttribute('id', 'smo225786');
smo225786.setFont('Merriweather', 12, 'normal');
smo225786.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225784.addModifier(smo225786);
smo225786.addClass('lyric lyric-1');
smo225811v0ar.push(smo225784);
const smo225787 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225787.setAttribute('id', 'smo225787');
const smo225788 = new VF.Annotation('fährt');
smo225788.setAttribute('id', 'smo225788');
smo225788.setFont('Merriweather', 12, 'normal');
smo225788.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225787.addModifier(smo225788);
smo225788.addClass('lyric lyric-0');
const smo225789 = new VF.Annotation('hö');
smo225789.setAttribute('id', 'smo225789');
smo225789.setFont('Merriweather', 12, 'normal');
smo225789.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225787.addModifier(smo225789);
smo225789.addClass('lyric lyric-1 lyric-hyphen');
smo225811v0ar.push(smo225787);
const smo225790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225790.setAttribute('id', 'smo225790');
const smo225791 = new VF.Annotation('durch');
smo225791.setAttribute('id', 'smo225791');
smo225791.setFont('Merriweather', 12, 'normal');
smo225791.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225790.addModifier(smo225791);
smo225791.addClass('lyric lyric-0');
const smo225792 = new VF.Annotation('re');
smo225792.setAttribute('id', 'smo225792');
smo225792.setFont('Merriweather', 12, 'normal');
smo225792.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225790.addModifier(smo225792);
smo225792.addClass('lyric lyric-1');
smo225811v0ar.push(smo225790);
const smo225793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo225793.setAttribute('id', 'smo225793');
const smo225794 = new VF.Annotation('die');
smo225794.setAttribute('id', 'smo225794');
smo225794.setFont('Merriweather', 12, 'normal');
smo225794.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225793.addModifier(smo225794);
smo225794.addClass('lyric lyric-0');
const smo225795 = new VF.Annotation('es');
smo225795.setAttribute('id', 'smo225795');
smo225795.setFont('Merriweather', 12, 'normal');
smo225795.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225793.addModifier(smo225795);
smo225795.addClass('lyric lyric-1');
smo225811v0ar.push(smo225793);
smo225811v0.addTickables(smo225811v0ar)
fmtsmo22581141.joinVoices([smo225811v0]);
const fmtsmo22699241 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo226992v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226992v0ar = [];
const smo226975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo226975.setAttribute('id', 'smo226975');
smo226975.addModifier(new VF.Dot(), 0);
smo226975.addModifier(new VF.Dot(), 1);
smo226992v0ar.push(smo226975);
const smo226976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo226976.setAttribute('id', 'smo226976');
smo226976.addModifier(new VF.Dot(), 0);
smo226992v0ar.push(smo226976);
smo226992v0.addTickables(smo226992v0ar)
fmtsmo22699241.joinVoices([smo226992v0]);
const fmtsmo22820741 = new VF.Formatter();
//
// voices and notes for stave 2 41
const smo228207v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228207v0ar = [];
const smo228184 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo228184.setAttribute('id', 'smo228184');
smo228207v0ar.push(smo228184);
const smo228185 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo228185.setAttribute('id', 'smo228185');
smo228207v0ar.push(smo228185);
const smo228186 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo228186.setAttribute('id', 'smo228186');
smo228207v0ar.push(smo228186);
const smo228187 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo228187.setAttribute('id', 'smo228187');
smo228207v0ar.push(smo228187);
smo228207v0.addTickables(smo228207v0ar)
fmtsmo22820741.joinVoices([smo228207v0]);
const smo228207v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228207v1ar = [];
const smo228188 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo228188.setAttribute('id', 'smo228188');
smo228188.setStyle({ fillStyle: "#115511" });
smo228207v1ar.push(smo228188);
const smo228189 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo228189.setAttribute('id', 'smo228189');
smo228189.setStyle({ fillStyle: "#115511" });
smo228207v1ar.push(smo228189);
const smo228190 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo228190.setAttribute('id', 'smo228190');
smo228190.setStyle({ fillStyle: "#115511" });
smo228207v1ar.push(smo228190);
const smo228191 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo228191.setAttribute('id', 'smo228191');
smo228191.setStyle({ fillStyle: "#115511" });
smo228207v1ar.push(smo228191);
smo228207v1.addTickables(smo228207v1ar)
fmtsmo22820741.joinVoices([smo228207v1]);
// create beam groups and tuplets for format grp smo228595 before formatting
const dirsmo234856 = smo225787.getStemDirection();
smo225787.setStemDirection(dirsmo234856);
smo225790.setStemDirection(dirsmo234856);
smo225793.setStemDirection(dirsmo234856);
const smo234856 = new VF.Beam([smo225787,smo225790,smo225793]);
 
// formatting measures in staff group smo228595
fmtsmo22581141.format([smo225811v0,smo226992v0,smo228207v0,smo228207v1], 291);
const stavesmo225811 = new VF.Stave(734, 1166.5133013333334, 305);
stavesmo225811.setAttribute('id', 'stavesmo225811');
stavesmo225811.setBegBarType(VF.Barline.type.NONE);
stavesmo225811.setContext(context);
stavesmo225811.draw();
smo225811v0.draw(context, stavesmo225811);
smo234856.setContext(context);
smo234856.draw();
const stavesmo226992 = new VF.Stave(734, 1298.5133013333334, 305);
stavesmo226992.setAttribute('id', 'stavesmo226992');
stavesmo226992.setBegBarType(VF.Barline.type.NONE);
stavesmo226992.setContext(context);
stavesmo226992.draw();
smo226992v0.draw(context, stavesmo226992);
const stavesmo228207 = new VF.Stave(734, 1424.5133013333334, 305);
stavesmo228207.setAttribute('id', 'stavesmo228207');
stavesmo228207.setBegBarType(VF.Barline.type.NONE);
stavesmo228207.setContext(context);
stavesmo228207.draw();
smo228207v0.draw(context, stavesmo228207);
smo228207v1.draw(context, stavesmo228207);
const fmtsmo22583342 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo225833v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo225833v0ar = [];
const smo225812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo225812.setAttribute('id', 'smo225812');
smo225812.addModifier(new VF.Dot(), 0);
const smo225813 = new VF.Annotation('Fel');
smo225813.setAttribute('id', 'smo225813');
smo225813.setFont('Merriweather', 12, 'normal');
smo225813.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225812.addModifier(smo225813);
smo225813.addClass('lyric lyric-0 lyric-hyphen');
const smo225814 = new VF.Annotation('sin');
smo225814.setAttribute('id', 'smo225814');
smo225814.setFont('Merriweather', 12, 'normal');
smo225814.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225812.addModifier(smo225814);
smo225814.addClass('lyric lyric-1 lyric-hyphen');
smo225833v0ar.push(smo225812);
const smo225815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo225815.setAttribute('id', 'smo225815');
smo225815.addModifier(new VF.Dot(), 0);
const smo225816 = new VF.Annotation('er');
smo225816.setAttribute('id', 'smo225816');
smo225816.setFont('Merriweather', 12, 'normal');
smo225816.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225815.addModifier(smo225816);
smo225816.addClass('lyric lyric-0');
const smo225817 = new VF.Annotation('gen,');
smo225817.setAttribute('id', 'smo225817');
smo225817.setFont('Merriweather', 12, 'normal');
smo225817.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo225815.addModifier(smo225817);
smo225817.addClass('lyric lyric-1');
smo225833v0ar.push(smo225815);
smo225833v0.addTickables(smo225833v0ar)
fmtsmo22583342.joinVoices([smo225833v0]);
const fmtsmo22700942 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo227009v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227009v0ar = [];
const smo226993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","f#/5/n","dn/6/n"]}'))
smo226993.setAttribute('id', 'smo226993');
smo226993.addModifier(new VF.Dot(), 0);
smo226993.addModifier(new VF.Dot(), 1);
smo226993.addModifier(new VF.Dot(), 2);
smo227009v0ar.push(smo226993);
smo227009v0.addTickables(smo227009v0ar)
fmtsmo22700942.joinVoices([smo227009v0]);
const fmtsmo22822942 = new VF.Formatter();
//
// voices and notes for stave 2 42
const smo228229v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228229v0ar = [];
const smo228208 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo228208.setAttribute('id', 'smo228208');
smo228229v0ar.push(smo228208);
const smo228209 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo228209.setAttribute('id', 'smo228209');
smo228229v0ar.push(smo228209);
const smo228210 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo228210.setAttribute('id', 'smo228210');
smo228229v0ar.push(smo228210);
const smo228211 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo228211.setAttribute('id', 'smo228211');
smo228229v0ar.push(smo228211);
smo228229v0.addTickables(smo228229v0ar)
fmtsmo22822942.joinVoices([smo228229v0]);
const smo228229v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228229v1ar = [];
const smo228212 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo228212.setAttribute('id', 'smo228212');
smo228212.setStyle({ fillStyle: "#115511" });
smo228212.addModifier(new VF.Dot(), 0);
smo228229v1ar.push(smo228212);
const smo228213 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
smo228213.setAttribute('id', 'smo228213');
smo228213.setStyle({ fillStyle: "#115511" });
smo228213.addModifier(new VF.Dot(), 0);
smo228229v1ar.push(smo228213);
smo228229v1.addTickables(smo228229v1ar)
fmtsmo22822942.joinVoices([smo228229v1]);
// create beam groups and tuplets for format grp smo228595 before formatting
 
// formatting measures in staff group smo228595
fmtsmo22583342.format([smo225833v0,smo227009v0,smo228229v0,smo228229v1], 160);
const stavesmo225833 = new VF.Stave(1039, 1166.5133013333334, 174);
stavesmo225833.setAttribute('id', 'stavesmo225833');
stavesmo225833.setBegBarType(VF.Barline.type.NONE);
stavesmo225833.setContext(context);
stavesmo225833.draw();
smo225833v0.draw(context, stavesmo225833);
const stavesmo227009 = new VF.Stave(1039, 1298.5133013333334, 174);
stavesmo227009.setAttribute('id', 'stavesmo227009');
stavesmo227009.setBegBarType(VF.Barline.type.NONE);
stavesmo227009.setContext(context);
stavesmo227009.draw();
smo227009v0.draw(context, stavesmo227009);
const stavesmo228229 = new VF.Stave(1039, 1424.5133013333334, 174);
stavesmo228229.setAttribute('id', 'stavesmo228229');
stavesmo228229.setBegBarType(VF.Barline.type.NONE);
stavesmo228229.setContext(context);
stavesmo228229.draw();
smo228229v0.draw(context, stavesmo228229);
smo228229v1.draw(context, stavesmo228229);
const rightsmo228595stavesmo2258332 = new VF.StaveConnector(stavesmo225833, stavesmo228229).setType(0);
rightsmo228595stavesmo2258332.setContext(context).draw();
// modifier from 0-26-0-0 to 0-27-0-0
const smo235649 = new VF.Curve(smo225422, smo225441, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo235649.setContext(context).draw();
// modifier from 0-22-0-0 to 0-23-0-0
const smo235650 = new VF.StaveTie({ first_note: smo225330, last_note: smo225349, 
          firstNote: smo225330, lastNote: smo225349, first_indices: [0], last_indices: [0]});
smo235650.setContext(context).draw();
// modifier from 0-25-0-0 to 0-25-0-1
const smo235651 = new VF.StaveTie({ first_note: smo225398, last_note: smo225401, 
          firstNote: smo225398, lastNote: smo225401, first_indices: [0], last_indices: [0]});
smo235651.setContext(context).draw();
// modifier from 0-30-0-0 to 0-31-0-0
const smo235652 = new VF.StaveTie({ first_note: smo225514, last_note: smo225533, 
          firstNote: smo225514, lastNote: smo225533, first_indices: [0], last_indices: [0]});
smo235652.setContext(context).draw();
// modifier from 0-32-0-3 to 0-33-0-0
const smo235653 = new VF.StaveTie({ first_note: smo225570, last_note: null, 
          firstNote: smo225570, lastNote: null, first_indices: [0], last_indices: [0]});
smo235653.setContext(context).draw();
// modifier from 0-32-0-3 to 0-33-0-0
const smo235654 = new VF.StaveTie({ first_note: null, last_note: smo225589, 
          firstNote: null, lastNote: smo225589, first_indices: [0], last_indices: [0]});
smo235654.setContext(context).draw();
// modifier from 0-34-0-2 to 0-35-0-0
const smo235655 = new VF.StaveTie({ first_note: smo225625, last_note: smo225644, 
          firstNote: smo225625, lastNote: smo225644, first_indices: [0], last_indices: [0]});
smo235655.setContext(context).draw();
// modifier from 1-30-0-0 to 1-31-0-0
const smo235656 = new VF.Curve(smo226780, smo226797, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo235656.setContext(context).draw();
// modifier from 1-40-0-0 to 1-41-0-0
const smo235657 = new VF.StaveTie({ first_note: smo226958, last_note: smo226975, 
          firstNote: smo226958, lastNote: smo226975, first_indices: [0,1], last_indices: [0,1]});
smo235657.setContext(context).draw();
// modifier from 1-38-0-0 to 1-39-0-0
const smo235658 = new VF.StaveTie({ first_note: smo226922, last_note: smo226939, 
          firstNote: smo226922, lastNote: smo226939, first_indices: [0,1], last_indices: [0,1]});
smo235658.setContext(context).draw();
// modifier from 2-30-0-0 to 2-31-0-0
const smo235659 = new VF.Curve(smo227958, smo227979, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo235659.setContext(context).draw();
// modifier from 2-32-0-0 to 2-33-0-0
const smo235660 = new VF.StaveTie({ first_note: smo228000, last_note: null, 
          firstNote: smo228000, lastNote: null, first_indices: [0], last_indices: [0]});
smo235660.setContext(context).draw();
// modifier from 2-32-0-0 to 2-33-0-0
const smo235661 = new VF.StaveTie({ first_note: null, last_note: smo228021, 
          firstNote: null, lastNote: smo228021, first_indices: [0], last_indices: [0]});
smo235661.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo225331').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225332').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo225352').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225353').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo225355').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo225356').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo225358').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225359').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo225377').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225378').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo225380').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225381').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo225400').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo225399').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo225402').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo225404').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo225405').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo225424').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo225442').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo225444').setAttributeNS('', 'transform', 'translate(0 0)');
context.svg.getElementById('vf-smo225445').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo225447').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo225448').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo225451').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo225469').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo225470').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo225472').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225473').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo225491').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo225492').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo225494').setAttributeNS('', 'transform', 'translate(0 48)');
context.svg.getElementById('vf-smo225496').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo225497').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo225516').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225515').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo225534').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo225535').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo225537').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo225538').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo225540').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo225541').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo225543').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo225544').setAttributeNS('', 'transform', 'translate(0 27)');
context.svg.getElementById('vf-smo225562').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo225563').setAttributeNS('', 'transform', 'translate(0 27)');
context.svg.getElementById('vf-smo225565').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225566').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo225569').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo225572').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo225571').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo225590').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo225592').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225593').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo225595').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225596').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo225598').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo225599').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo225601').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225602').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo225620').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo225621').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo225623').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo225624').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo225627').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo225626').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo225645').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo225649').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo225667').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo225668').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo225670').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo225671').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo225673').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo225674').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo225695').setAttributeNS('', 'transform', 'translate(0 0)');
context.svg.getElementById('vf-smo225696').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo225714').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo225715').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo225733').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225736').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo225737').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo225739').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo225740').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo225742').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225743').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo225745').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo225746').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo225764').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo225765').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo225783').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo225786').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo225788').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo225789').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo225791').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo225792').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo225794').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo225795').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo225813').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo225814').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo225817').setAttributeNS('', 'transform', 'translate(0 9)');
}
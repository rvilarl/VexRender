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
const fmtsmo22745022 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo227450v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227450v0ar = [];
const smo227432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo227432.setAttribute('id', 'smo227432');
smo227432.addModifier(new VF.Dot(), 0);
const smo227433 = new VF.Annotation('bläst');
smo227433.setAttribute('id', 'smo227433');
smo227433.setFont('Merriweather', 12, 'normal');
smo227433.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227432.addModifier(smo227433);
smo227433.addClass('lyric lyric-0 lyric-hyphen');
const smo227434 = new VF.Annotation('Herz');
smo227434.setAttribute('id', 'smo227434');
smo227434.setFont('Merriweather', 12, 'normal');
smo227434.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227432.addModifier(smo227434);
smo227434.addClass('lyric lyric-1');
smo227450v0ar.push(smo227432);
smo227450v0.addTickables(smo227450v0ar)
fmtsmo22745022.joinVoices([smo227450v0]);
const fmtsmo22875922 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo228759v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228759v0ar = [];
const smo228743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228743.setAttribute('id', 'smo228743');
smo228743.addModifier(new VF.Dot(), 0);
smo228759v0ar.push(smo228743);
smo228759v0.addTickables(smo228759v0ar)
fmtsmo22875922.joinVoices([smo228759v0]);
const fmtsmo22993622 = new VF.Formatter();
//
// voices and notes for stave 2 22
const smo229936v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229936v0ar = [];
const smo229920 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo229920.setAttribute('id', 'smo229920');
smo229920.addModifier(new VF.Dot(), 0);
smo229936v0ar.push(smo229920);
smo229936v0.addTickables(smo229936v0ar)
fmtsmo22993622.joinVoices([smo229936v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22745022.format([smo227450v0,smo228759v0,smo229936v0], 60);
const stavesmo227450 = new VF.Stave(66, 107.5133013333334, 134);
stavesmo227450.setAttribute('id', 'stavesmo227450');
stavesmo227450.setBegBarType(1);
stavesmo227450.addClef('treble');
const keysmo227450 = new VF.KeySignature('G');
keysmo227450.addToStave(stavesmo227450);
stavesmo227450.setContext(context);
stavesmo227450.draw();
smo227450v0.draw(context, stavesmo227450);
const stavesmo228759 = new VF.Stave(66, 214.5133013333334, 134);
stavesmo228759.setAttribute('id', 'stavesmo228759');
stavesmo228759.setBegBarType(1);
stavesmo228759.addClef('treble');
const keysmo228759 = new VF.KeySignature('G');
keysmo228759.addToStave(stavesmo228759);
stavesmo228759.setContext(context);
stavesmo228759.draw();
smo228759v0.draw(context, stavesmo228759);
const stavesmo229936 = new VF.Stave(66, 285.5133013333334, 134);
stavesmo229936.setAttribute('id', 'stavesmo229936');
stavesmo229936.setBegBarType(1);
stavesmo229936.addClef('bass');
const keysmo229936 = new VF.KeySignature('G');
keysmo229936.addToStave(stavesmo229936);
stavesmo229936.setContext(context);
stavesmo229936.draw();
smo229936v0.draw(context, stavesmo229936);
const leftsmo230697stavesmo2274502 = new VF.StaveConnector(stavesmo227450, stavesmo229936).setType(1);
leftsmo230697stavesmo2274502.setContext(context).draw();
const fmtsmo22747723 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo227477v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227477v0ar = [];
const smo227451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo227451.setAttribute('id', 'smo227451');
smo227477v0ar.push(smo227451);
const smo227453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo227453.setAttribute('id', 'smo227453');
const smo227454 = new VF.Annotation('sein');
smo227454.setAttribute('id', 'smo227454');
smo227454.setFont('Merriweather', 12, 'normal');
smo227454.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227453.addModifier(smo227454);
smo227454.addClass('lyric lyric-0');
const smo227455 = new VF.Annotation('be');
smo227455.setAttribute('id', 'smo227455');
smo227455.setFont('Merriweather', 12, 'normal');
smo227455.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227453.addModifier(smo227455);
smo227455.addClass('lyric lyric-1 lyric-hyphen');
smo227477v0ar.push(smo227453);
const smo227456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo227456.setAttribute('id', 'smo227456');
const smo227457 = new VF.Annotation('Horn');
smo227457.setAttribute('id', 'smo227457');
smo227457.setFont('Merriweather', 12, 'normal');
smo227457.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227456.addModifier(smo227457);
smo227457.addClass('lyric lyric-0');
const smo227458 = new VF.Annotation('glei');
smo227458.setAttribute('id', 'smo227458');
smo227458.setFont('Merriweather', 12, 'normal');
smo227458.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227456.addModifier(smo227458);
smo227458.addClass('lyric lyric-1 lyric-hyphen');
smo227477v0ar.push(smo227456);
const smo227459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo227459.setAttribute('id', 'smo227459');
const smo227460 = new VF.Annotation('mit');
smo227460.setAttribute('id', 'smo227460');
smo227460.setFont('Merriweather', 12, 'normal');
smo227460.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227459.addModifier(smo227460);
smo227460.addClass('lyric lyric-0');
const smo227461 = new VF.Annotation('tet');
smo227461.setAttribute('id', 'smo227461');
smo227461.setFont('Merriweather', 12, 'normal');
smo227461.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227459.addModifier(smo227461);
smo227461.addClass('lyric lyric-1');
smo227477v0ar.push(smo227459);
smo227477v0.addTickables(smo227477v0ar)
fmtsmo22747723.joinVoices([smo227477v0]);
const fmtsmo22877623 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo228776v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228776v0ar = [];
const smo228760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["en/4/n","bn/4/n"]}'))
smo228760.setAttribute('id', 'smo228760');
smo228760.addModifier(new VF.Dot(), 0);
smo228760.addModifier(new VF.Dot(), 1);
smo228776v0ar.push(smo228760);
smo228776v0.addTickables(smo228776v0ar)
fmtsmo22877623.joinVoices([smo228776v0]);
const fmtsmo22995323 = new VF.Formatter();
//
// voices and notes for stave 2 23
const smo229953v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229953v0ar = [];
const smo229937 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["g#/2/n"]}'))
smo229937.setAttribute('id', 'smo229937');
const smo2299370acc = new VF.Accidental('#');
smo229937.addModifier(smo2299370acc, 0);
smo229937.addModifier(new VF.Dot(), 0);
smo229953v0ar.push(smo229937);
smo229953v0.addTickables(smo229953v0ar)
fmtsmo22995323.joinVoices([smo229953v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22747723.format([smo227477v0,smo228776v0,smo229953v0], 239);
const stavesmo227477 = new VF.Stave(200, 107.5133013333334, 253);
stavesmo227477.setAttribute('id', 'stavesmo227477');
stavesmo227477.setBegBarType(VF.Barline.type.NONE);
stavesmo227477.setContext(context);
stavesmo227477.draw();
smo227477v0.draw(context, stavesmo227477);
const stavesmo228776 = new VF.Stave(200, 214.5133013333334, 253);
stavesmo228776.setAttribute('id', 'stavesmo228776');
stavesmo228776.setBegBarType(VF.Barline.type.NONE);
stavesmo228776.setContext(context);
stavesmo228776.draw();
smo228776v0.draw(context, stavesmo228776);
const stavesmo229953 = new VF.Stave(200, 285.5133013333334, 253);
stavesmo229953.setAttribute('id', 'stavesmo229953');
stavesmo229953.setBegBarType(VF.Barline.type.NONE);
stavesmo229953.setContext(context);
stavesmo229953.draw();
smo229953v0.draw(context, stavesmo229953);
const fmtsmo22749924 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo227499v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227499v0ar = [];
const smo227478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo227478.setAttribute('id', 'smo227478');
smo227478.addModifier(new VF.Dot(), 0);
const smo227479 = new VF.Annotation('hel');
smo227479.setAttribute('id', 'smo227479');
smo227479.setFont('Merriweather', 12, 'normal');
smo227479.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227478.addModifier(smo227479);
smo227479.addClass('lyric lyric-0 lyric-hyphen');
const smo227480 = new VF.Annotation('ihn');
smo227480.setAttribute('id', 'smo227480');
smo227480.setFont('Merriweather', 12, 'normal');
smo227480.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227478.addModifier(smo227480);
smo227480.addClass('lyric lyric-1');
smo227499v0ar.push(smo227478);
const smo227481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo227481.setAttribute('id', 'smo227481');
smo227481.addModifier(new VF.Dot(), 0);
const smo227482 = new VF.Annotation('lem');
smo227482.setAttribute('id', 'smo227482');
smo227482.setFont('Merriweather', 12, 'normal');
smo227482.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227481.addModifier(smo227482);
smo227482.addClass('lyric lyric-0');
const smo227483 = new VF.Annotation('hin');
smo227483.setAttribute('id', 'smo227483');
smo227483.setFont('Merriweather', 12, 'normal');
smo227483.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227481.addModifier(smo227483);
smo227483.addClass('lyric lyric-1 lyric-hyphen');
smo227499v0ar.push(smo227481);
smo227499v0.addTickables(smo227499v0ar)
fmtsmo22749924.joinVoices([smo227499v0]);
const fmtsmo22879324 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo228793v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228793v0ar = [];
const smo228777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["cn/4/n","an/4/n"]}'))
smo228777.setAttribute('id', 'smo228777');
smo228777.addModifier(new VF.Dot(), 0);
smo228777.addModifier(new VF.Dot(), 1);
smo228793v0ar.push(smo228777);
smo228793v0.addTickables(smo228793v0ar)
fmtsmo22879324.joinVoices([smo228793v0]);
const fmtsmo22997124 = new VF.Formatter();
//
// voices and notes for stave 2 24
const smo229971v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229971v0ar = [];
const smo229954 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo229954.setAttribute('id', 'smo229954');
smo229954.addModifier(new VF.Dot(), 0);
smo229971v0ar.push(smo229954);
const smo229955 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo229955.setAttribute('id', 'smo229955');
smo229955.addModifier(new VF.Dot(), 0);
smo229971v0ar.push(smo229955);
smo229971v0.addTickables(smo229971v0ar)
fmtsmo22997124.joinVoices([smo229971v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22749924.format([smo227499v0,smo228793v0,smo229971v0], 107);
const stavesmo227499 = new VF.Stave(453, 107.5133013333334, 121);
stavesmo227499.setAttribute('id', 'stavesmo227499');
stavesmo227499.setBegBarType(VF.Barline.type.NONE);
stavesmo227499.setContext(context);
stavesmo227499.draw();
smo227499v0.draw(context, stavesmo227499);
const stavesmo228793 = new VF.Stave(453, 214.5133013333334, 121);
stavesmo228793.setAttribute('id', 'stavesmo228793');
stavesmo228793.setBegBarType(VF.Barline.type.NONE);
stavesmo228793.setContext(context);
stavesmo228793.draw();
smo228793v0.draw(context, stavesmo228793);
const stavesmo229971 = new VF.Stave(453, 285.5133013333334, 121);
stavesmo229971.setAttribute('id', 'stavesmo229971');
stavesmo229971.setBegBarType(VF.Barline.type.NONE);
stavesmo229971.setContext(context);
stavesmo229971.draw();
smo229971v0.draw(context, stavesmo229971);
const fmtsmo22752325 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo227523v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227523v0ar = [];
const smo227500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo227500.setAttribute('id', 'smo227500');
smo227500.addModifier(new VF.Dot(), 0);
const smo227502 = new VF.Annotation('Ton,');
smo227502.setAttribute('id', 'smo227502');
smo227502.setFont('Merriweather', 12, 'normal');
smo227502.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227500.addModifier(smo227502);
smo227502.addClass('lyric lyric-0');
const smo227501 = new VF.Annotation('aus');
smo227501.setAttribute('id', 'smo227501');
smo227501.setFont('Merriweather', 12, 'normal');
smo227501.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227500.addModifier(smo227501);
smo227501.addClass('lyric lyric-1');
smo227523v0ar.push(smo227500);
const smo227503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo227503.setAttribute('id', 'smo227503');
const smo227504 = new VF.Annotation('-');
smo227504.setAttribute('id', 'smo227504');
smo227504.setFont('Merriweather', 12, 'normal');
smo227504.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227503.addModifier(smo227504);
smo227504.addClass('lyric lyric-0 lyric-hyphen');
smo227523v0ar.push(smo227503);
const smo227505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/5/n"]}'))
smo227505.setAttribute('id', 'smo227505');
const smo2275050acc = new VF.Accidental('#');
smo227505.addModifier(smo2275050acc, 0);
const smo227506 = new VF.Annotation('so');
smo227506.setAttribute('id', 'smo227506');
smo227506.setFont('Merriweather', 12, 'normal');
smo227506.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227505.addModifier(smo227506);
smo227506.addClass('lyric lyric-0');
const smo227507 = new VF.Annotation('und');
smo227507.setAttribute('id', 'smo227507');
smo227507.setFont('Merriweather', 12, 'normal');
smo227507.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227505.addModifier(smo227507);
smo227507.addClass('lyric lyric-1');
smo227523v0ar.push(smo227505);
smo227523v0.addTickables(smo227523v0ar)
fmtsmo22752325.joinVoices([smo227523v0]);
const fmtsmo22881125 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo228811v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228811v0ar = [];
const smo228794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["cn/4/n","an/4/n"]}'))
smo228794.setAttribute('id', 'smo228794');
smo228794.addModifier(new VF.Dot(), 0);
smo228794.addModifier(new VF.Dot(), 1);
smo228811v0ar.push(smo228794);
const smo228795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228795.setAttribute('id', 'smo228795');
smo228795.addModifier(new VF.Dot(), 0);
smo228811v0ar.push(smo228795);
smo228811v0.addTickables(smo228811v0ar)
fmtsmo22881125.joinVoices([smo228811v0]);
const fmtsmo22998925 = new VF.Formatter();
//
// voices and notes for stave 2 25
const smo229989v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229989v0ar = [];
const smo229972 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo229972.setAttribute('id', 'smo229972');
smo229972.addModifier(new VF.Dot(), 0);
smo229989v0ar.push(smo229972);
const smo229973 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["d#/3/n"]}'))
smo229973.setAttribute('id', 'smo229973');
const smo2299730acc = new VF.Accidental('#');
smo229973.addModifier(smo2299730acc, 0);
smo229973.addModifier(new VF.Dot(), 0);
smo229989v0ar.push(smo229973);
smo229989v0.addTickables(smo229989v0ar)
fmtsmo22998925.joinVoices([smo229989v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22752325.format([smo227523v0,smo228811v0,smo229989v0], 169);
const stavesmo227523 = new VF.Stave(574, 107.5133013333334, 183);
stavesmo227523.setAttribute('id', 'stavesmo227523');
stavesmo227523.setBegBarType(VF.Barline.type.NONE);
stavesmo227523.setContext(context);
stavesmo227523.draw();
smo227523v0.draw(context, stavesmo227523);
const stavesmo228811 = new VF.Stave(574, 214.5133013333334, 183);
stavesmo228811.setAttribute('id', 'stavesmo228811');
stavesmo228811.setBegBarType(VF.Barline.type.NONE);
stavesmo228811.setContext(context);
stavesmo228811.draw();
smo228811v0.draw(context, stavesmo228811);
const stavesmo229989 = new VF.Stave(574, 285.5133013333334, 183);
stavesmo229989.setAttribute('id', 'stavesmo229989');
stavesmo229989.setBegBarType(VF.Barline.type.NONE);
stavesmo229989.setContext(context);
stavesmo229989.draw();
smo229989v0.draw(context, stavesmo229989);
const fmtsmo22754226 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo227542v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227542v0ar = [];
const smo227524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227524.setAttribute('id', 'smo227524');
smo227524.addModifier(new VF.Dot(), 0);
const smo227525 = new VF.Annotation('schön');
smo227525.setAttribute('id', 'smo227525');
smo227525.setFont('Merriweather', 12, 'normal');
smo227525.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227524.addModifier(smo227525);
smo227525.addClass('lyric lyric-0');
const smo227526 = new VF.Annotation('führt');
smo227526.setAttribute('id', 'smo227526');
smo227526.setFont('Merriweather', 12, 'normal');
smo227526.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227524.addModifier(smo227526);
smo227526.addClass('lyric lyric-1');
smo227542v0ar.push(smo227524);
smo227542v0.addTickables(smo227542v0ar)
fmtsmo22754226.joinVoices([smo227542v0]);
const fmtsmo22882826 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo228828v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228828v0ar = [];
const smo228812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228812.setAttribute('id', 'smo228812');
smo228812.addModifier(new VF.Dot(), 0);
smo228828v0ar.push(smo228812);
smo228828v0.addTickables(smo228828v0ar)
fmtsmo22882826.joinVoices([smo228828v0]);
const fmtsmo23000626 = new VF.Formatter();
//
// voices and notes for stave 2 26
const smo230006v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230006v0ar = [];
const smo229990 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo229990.setAttribute('id', 'smo229990');
smo229990.addModifier(new VF.Dot(), 0);
smo230006v0ar.push(smo229990);
smo230006v0.addTickables(smo230006v0ar)
fmtsmo23000626.joinVoices([smo230006v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22754226.format([smo227542v0,smo228828v0,smo230006v0], 72);
const stavesmo227542 = new VF.Stave(757, 107.5133013333334, 86);
stavesmo227542.setAttribute('id', 'stavesmo227542');
stavesmo227542.setBegBarType(VF.Barline.type.NONE);
stavesmo227542.setContext(context);
stavesmo227542.draw();
smo227542v0.draw(context, stavesmo227542);
const stavesmo228828 = new VF.Stave(757, 214.5133013333334, 86);
stavesmo228828.setAttribute('id', 'stavesmo228828');
stavesmo228828.setBegBarType(VF.Barline.type.NONE);
stavesmo228828.setContext(context);
stavesmo228828.draw();
smo228828v0.draw(context, stavesmo228828);
const stavesmo230006 = new VF.Stave(757, 285.5133013333334, 86);
stavesmo230006.setAttribute('id', 'stavesmo230006');
stavesmo230006.setBegBarType(VF.Barline.type.NONE);
stavesmo230006.setContext(context);
stavesmo230006.draw();
smo230006v0.draw(context, stavesmo230006);
const fmtsmo22756927 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo227569v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227569v0ar = [];
const smo227543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227543.setAttribute('id', 'smo227543');
const smo227544 = new VF.Annotation('-');
smo227544.setAttribute('id', 'smo227544');
smo227544.setFont('Merriweather', 12, 'normal');
smo227544.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227543.addModifier(smo227544);
smo227544.addClass('lyric lyric-0 lyric-hyphen');
smo227569v0ar.push(smo227543);
const smo227545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227545.setAttribute('id', 'smo227545');
const smo227546 = new VF.Annotation('wie');
smo227546.setAttribute('id', 'smo227546');
smo227546.setFont('Merriweather', 12, 'normal');
smo227546.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227545.addModifier(smo227546);
smo227546.addClass('lyric lyric-0');
const smo227547 = new VF.Annotation('ihn');
smo227547.setAttribute('id', 'smo227547');
smo227547.setFont('Merriweather', 12, 'normal');
smo227547.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227545.addModifier(smo227547);
smo227547.addClass('lyric lyric-1');
smo227569v0ar.push(smo227545);
const smo227548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227548.setAttribute('id', 'smo227548');
const smo227549 = new VF.Annotation('sonst');
smo227549.setAttribute('id', 'smo227549');
smo227549.setFont('Merriweather', 12, 'normal');
smo227549.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227548.addModifier(smo227549);
smo227549.addClass('lyric lyric-0');
const smo227550 = new VF.Annotation('mir');
smo227550.setAttribute('id', 'smo227550');
smo227550.setFont('Merriweather', 12, 'normal');
smo227550.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227548.addModifier(smo227550);
smo227550.addClass('lyric lyric-1');
smo227569v0ar.push(smo227548);
const smo227551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227551.setAttribute('id', 'smo227551');
const smo227552 = new VF.Annotation('kein');
smo227552.setAttribute('id', 'smo227552');
smo227552.setFont('Merriweather', 12, 'normal');
smo227552.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227551.addModifier(smo227552);
smo227552.addClass('lyric lyric-0');
const smo227553 = new VF.Annotation('zu');
smo227553.setAttribute('id', 'smo227553');
smo227553.setFont('Merriweather', 12, 'normal');
smo227553.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227551.addModifier(smo227553);
smo227553.addClass('lyric lyric-1 lyric-hyphen');
smo227569v0ar.push(smo227551);
smo227569v0.addTickables(smo227569v0ar)
fmtsmo22756927.joinVoices([smo227569v0]);
const fmtsmo22884527 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo228845v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228845v0ar = [];
const smo228829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228829.setAttribute('id', 'smo228829');
smo228829.addModifier(new VF.Dot(), 0);
smo228845v0ar.push(smo228829);
smo228845v0.addTickables(smo228845v0ar)
fmtsmo22884527.joinVoices([smo228845v0]);
const fmtsmo23002327 = new VF.Formatter();
//
// voices and notes for stave 2 27
const smo230023v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230023v0ar = [];
const smo230007 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo230007.setAttribute('id', 'smo230007');
smo230007.addModifier(new VF.Dot(), 0);
smo230023v0ar.push(smo230007);
smo230023v0.addTickables(smo230023v0ar)
fmtsmo23002327.joinVoices([smo230023v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22756927.format([smo227569v0,smo228845v0,smo230023v0], 230);
const stavesmo227569 = new VF.Stave(843, 107.5133013333334, 244);
stavesmo227569.setAttribute('id', 'stavesmo227569');
stavesmo227569.setBegBarType(VF.Barline.type.NONE);
stavesmo227569.setContext(context);
stavesmo227569.draw();
smo227569v0.draw(context, stavesmo227569);
const stavesmo228845 = new VF.Stave(843, 214.5133013333334, 244);
stavesmo228845.setAttribute('id', 'stavesmo228845');
stavesmo228845.setBegBarType(VF.Barline.type.NONE);
stavesmo228845.setContext(context);
stavesmo228845.draw();
smo228845v0.draw(context, stavesmo228845);
const stavesmo230023 = new VF.Stave(843, 285.5133013333334, 244);
stavesmo230023.setAttribute('id', 'stavesmo230023');
stavesmo230023.setBegBarType(VF.Barline.type.NONE);
stavesmo230023.setContext(context);
stavesmo230023.draw();
smo230023v0.draw(context, stavesmo230023);
const fmtsmo22759128 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo227591v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227591v0ar = [];
const smo227570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227570.setAttribute('id', 'smo227570');
smo227570.addModifier(new VF.Dot(), 0);
const smo227571 = new VF.Annotation('Po');
smo227571.setAttribute('id', 'smo227571');
smo227571.setFont('Merriweather', 12, 'normal');
smo227571.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227570.addModifier(smo227571);
smo227571.addClass('lyric lyric-0 lyric-hyphen');
const smo227572 = new VF.Annotation('rück');
smo227572.setAttribute('id', 'smo227572');
smo227572.setFont('Merriweather', 12, 'normal');
smo227572.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227570.addModifier(smo227572);
smo227572.addClass('lyric lyric-1');
smo227591v0ar.push(smo227570);
const smo227573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo227573.setAttribute('id', 'smo227573');
smo227573.addModifier(new VF.Dot(), 0);
const smo227574 = new VF.Annotation('stil');
smo227574.setAttribute('id', 'smo227574');
smo227574.setFont('Merriweather', 12, 'normal');
smo227574.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227573.addModifier(smo227574);
smo227574.addClass('lyric lyric-0 lyric-hyphen');
const smo227575 = new VF.Annotation('ins');
smo227575.setAttribute('id', 'smo227575');
smo227575.setFont('Merriweather', 12, 'normal');
smo227575.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227573.addModifier(smo227575);
smo227575.addClass('lyric lyric-1');
smo227591v0ar.push(smo227573);
smo227591v0.addTickables(smo227591v0ar)
fmtsmo22759128.joinVoices([smo227591v0]);
const fmtsmo22886228 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo228862v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228862v0ar = [];
const smo228846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n","bn/4/n"]}'))
smo228846.setAttribute('id', 'smo228846');
smo228846.addModifier(new VF.Dot(), 0);
smo228846.addModifier(new VF.Dot(), 1);
smo228862v0ar.push(smo228846);
smo228862v0.addTickables(smo228862v0ar)
fmtsmo22886228.joinVoices([smo228862v0]);
const fmtsmo23004028 = new VF.Formatter();
//
// voices and notes for stave 2 28
const smo230040v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230040v0ar = [];
const smo230024 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo230024.setAttribute('id', 'smo230024');
smo230024.addModifier(new VF.Dot(), 0);
smo230040v0ar.push(smo230024);
smo230040v0.addTickables(smo230040v0ar)
fmtsmo23004028.joinVoices([smo230040v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22759128.format([smo227591v0,smo228862v0,smo230040v0], 113);
const stavesmo227591 = new VF.Stave(1087, 107.5133013333334, 127);
stavesmo227591.setAttribute('id', 'stavesmo227591');
stavesmo227591.setBegBarType(VF.Barline.type.NONE);
stavesmo227591.setContext(context);
stavesmo227591.draw();
smo227591v0.draw(context, stavesmo227591);
const stavesmo228862 = new VF.Stave(1087, 214.5133013333334, 127);
stavesmo228862.setAttribute('id', 'stavesmo228862');
stavesmo228862.setBegBarType(VF.Barline.type.NONE);
stavesmo228862.setContext(context);
stavesmo228862.draw();
smo228862v0.draw(context, stavesmo228862);
const stavesmo230040 = new VF.Stave(1087, 285.5133013333334, 127);
stavesmo230040.setAttribute('id', 'stavesmo230040');
stavesmo230040.setBegBarType(VF.Barline.type.NONE);
stavesmo230040.setContext(context);
stavesmo230040.draw();
smo230040v0.draw(context, stavesmo230040);
const rightsmo230697stavesmo2275912 = new VF.StaveConnector(stavesmo227591, stavesmo230040).setType(0);
rightsmo230697stavesmo2275912.setContext(context).draw();
const fmtsmo22761529 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo227615v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227615v0ar = [];
const smo227592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227592.setAttribute('id', 'smo227592');
smo227592.addModifier(new VF.Dot(), 0);
const smo227593 = new VF.Annotation('lion');
smo227593.setAttribute('id', 'smo227593');
smo227593.setFont('Merriweather', 12, 'normal');
smo227593.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227592.addModifier(smo227593);
smo227593.addClass('lyric lyric-0');
const smo227594 = new VF.Annotation('Häus,');
smo227594.setAttribute('id', 'smo227594');
smo227594.setFont('Merriweather', 12, 'normal');
smo227594.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227592.addModifier(smo227594);
smo227594.addClass('lyric lyric-1');
smo227615v0ar.push(smo227592);
const smo227595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo227595.setAttribute('id', 'smo227595');
const smo227596 = new VF.Annotation('Häus');
smo227596.setAttribute('id', 'smo227596');
smo227596.setFont('Merriweather', 12, 'normal');
smo227596.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227595.addModifier(smo227596);
smo227596.addClass('lyric lyric-1');
smo227615v0ar.push(smo227595);
const smo227597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo227597.setAttribute('id', 'smo227597');
const smo227598 = new VF.Annotation('Es');
smo227598.setAttribute('id', 'smo227598');
smo227598.setFont('Merriweather', 12, 'normal');
smo227598.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227597.addModifier(smo227598);
smo227598.addClass('lyric lyric-0');
const smo227599 = new VF.Annotation('es');
smo227599.setAttribute('id', 'smo227599');
smo227599.setFont('Merriweather', 12, 'normal');
smo227599.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227597.addModifier(smo227599);
smo227599.addClass('lyric lyric-1');
smo227615v0ar.push(smo227597);
smo227615v0.addTickables(smo227615v0ar)
fmtsmo22761529.joinVoices([smo227615v0]);
const fmtsmo22888129 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo228881v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228881v0ar = [];
const smo228863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n","bn/4/n"]}'))
smo228863.setAttribute('id', 'smo228863');
smo228863.addModifier(new VF.Dot(), 0);
smo228863.addModifier(new VF.Dot(), 1);
smo228881v0ar.push(smo228863);
const smo228864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228864.setAttribute('id', 'smo228864');
smo228881v0ar.push(smo228864);
const smo228865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228865.setAttribute('id', 'smo228865');
smo228881v0ar.push(smo228865);
smo228881v0.addTickables(smo228881v0ar)
fmtsmo22888129.joinVoices([smo228881v0]);
const fmtsmo23005929 = new VF.Formatter();
//
// voices and notes for stave 2 29
const smo230059v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230059v0ar = [];
const smo230041 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo230041.setAttribute('id', 'smo230041');
smo230041.addModifier(new VF.Dot(), 0);
smo230059v0ar.push(smo230041);
const smo230042 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo230042.setAttribute('id', 'smo230042');
smo230059v0ar.push(smo230042);
const smo230043 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo230043.setAttribute('id', 'smo230043');
smo230059v0ar.push(smo230043);
smo230059v0.addTickables(smo230059v0ar)
fmtsmo23005929.joinVoices([smo230059v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22761529.format([smo227615v0,smo228881v0,smo230059v0], 218);
const stavesmo227615 = new VF.Stave(66, 398.5133013333334, 291);
stavesmo227615.setAttribute('id', 'stavesmo227615');
stavesmo227615.setBegBarType(1);
stavesmo227615.addClef('treble');
const keysmo227615 = new VF.KeySignature('G');
keysmo227615.addToStave(stavesmo227615);
stavesmo227615.setContext(context);
stavesmo227615.draw();
smo227615v0.draw(context, stavesmo227615);
const stavesmo228881 = new VF.Stave(66, 520.5133013333334, 291);
stavesmo228881.setAttribute('id', 'stavesmo228881');
stavesmo228881.setBegBarType(1);
stavesmo228881.addClef('treble');
const keysmo228881 = new VF.KeySignature('G');
keysmo228881.addToStave(stavesmo228881);
stavesmo228881.setContext(context);
stavesmo228881.draw();
smo228881v0.draw(context, stavesmo228881);
const stavesmo230059 = new VF.Stave(66, 643.5133013333334, 291);
stavesmo230059.setAttribute('id', 'stavesmo230059');
stavesmo230059.setBegBarType(1);
stavesmo230059.addClef('bass');
const keysmo230059 = new VF.KeySignature('G');
keysmo230059.addToStave(stavesmo230059);
stavesmo230059.setContext(context);
stavesmo230059.draw();
smo230059v0.draw(context, stavesmo230059);
const leftsmo230697stavesmo2276152 = new VF.StaveConnector(stavesmo227615, stavesmo230059).setType(1);
leftsmo230697stavesmo2276152.setContext(context).draw();
const fmtsmo22763430 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo227634v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227634v0ar = [];
const smo227616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo227616.setAttribute('id', 'smo227616');
smo227616.addModifier(new VF.Dot(), 0);
const smo227618 = new VF.Annotation('klingt');
smo227618.setAttribute('id', 'smo227618');
smo227618.setFont('Merriweather', 12, 'normal');
smo227618.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227616.addModifier(smo227618);
smo227618.addClass('lyric lyric-0');
const smo227617 = new VF.Annotation('sagt');
smo227617.setAttribute('id', 'smo227617');
smo227617.setFont('Merriweather', 12, 'normal');
smo227617.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227616.addModifier(smo227617);
smo227617.addClass('lyric lyric-1');
smo227634v0ar.push(smo227616);
smo227634v0.addTickables(smo227634v0ar)
fmtsmo22763430.joinVoices([smo227634v0]);
const fmtsmo22889830 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo228898v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228898v0ar = [];
const smo228882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228882.setAttribute('id', 'smo228882');
smo228882.addModifier(new VF.Dot(), 0);
smo228898v0ar.push(smo228882);
smo228898v0.addTickables(smo228898v0ar)
fmtsmo22889830.joinVoices([smo228898v0]);
const fmtsmo23008030 = new VF.Formatter();
//
// voices and notes for stave 2 30
const smo230080v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230080v0ar = [];
const smo230060 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo230060.setAttribute('id', 'smo230060');
smo230060.addModifier(new VF.Dot(), 0);
smo230080v0ar.push(smo230060);
smo230080v0.addTickables(smo230080v0ar)
fmtsmo23008030.joinVoices([smo230080v0]);
const smo230080v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230080v1ar = [];
const smo230061 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo230061.setAttribute('id', 'smo230061');
smo230061.setStyle({ fillStyle: "#115511" });
smo230080v1ar.push(smo230061);
const smo230062 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo230062.setAttribute('id', 'smo230062');
smo230062.setStyle({ fillStyle: "#115511" });
smo230080v1ar.push(smo230062);
const smo230063 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo230063.setAttribute('id', 'smo230063');
smo230063.setStyle({ fillStyle: "#115511" });
smo230080v1ar.push(smo230063);
const smo230064 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo230064.setAttribute('id', 'smo230064');
smo230064.setStyle({ fillStyle: "#115511" });
smo230080v1ar.push(smo230064);
smo230080v1.addTickables(smo230080v1ar)
fmtsmo23008030.joinVoices([smo230080v1]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22763430.format([smo227634v0,smo228898v0,smo230080v0,smo230080v1], 197);
const stavesmo227634 = new VF.Stave(357, 398.5133013333334, 211);
stavesmo227634.setAttribute('id', 'stavesmo227634');
stavesmo227634.setBegBarType(VF.Barline.type.NONE);
stavesmo227634.setContext(context);
stavesmo227634.draw();
smo227634v0.draw(context, stavesmo227634);
const stavesmo228898 = new VF.Stave(357, 520.5133013333334, 211);
stavesmo228898.setAttribute('id', 'stavesmo228898');
stavesmo228898.setBegBarType(VF.Barline.type.NONE);
stavesmo228898.setContext(context);
stavesmo228898.draw();
smo228898v0.draw(context, stavesmo228898);
const stavesmo230080 = new VF.Stave(357, 643.5133013333334, 211);
stavesmo230080.setAttribute('id', 'stavesmo230080');
stavesmo230080.setBegBarType(VF.Barline.type.NONE);
stavesmo230080.setContext(context);
stavesmo230080.draw();
smo230080v0.draw(context, stavesmo230080);
smo230080v1.draw(context, stavesmo230080);
const fmtsmo22766231 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo227662v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227662v0ar = [];
const smo227635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo227635.setAttribute('id', 'smo227635');
const smo227636 = new VF.Annotation('-');
smo227636.setAttribute('id', 'smo227636');
smo227636.setFont('Merriweather', 12, 'normal');
smo227636.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227635.addModifier(smo227636);
smo227636.addClass('lyric lyric-0 lyric-hyphen');
const smo227637 = new VF.Annotation('-');
smo227637.setAttribute('id', 'smo227637');
smo227637.setFont('Merriweather', 12, 'normal');
smo227637.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227635.addModifier(smo227637);
smo227637.addClass('lyric lyric-1 lyric-hyphen');
smo227662v0ar.push(smo227635);
const smo227638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo227638.setAttribute('id', 'smo227638');
const smo227639 = new VF.Annotation('wenn');
smo227639.setAttribute('id', 'smo227639');
smo227639.setFont('Merriweather', 12, 'normal');
smo227639.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227638.addModifier(smo227639);
smo227639.addClass('lyric lyric-0');
const smo227640 = new VF.Annotation('zu');
smo227640.setAttribute('id', 'smo227640');
smo227640.setFont('Merriweather', 12, 'normal');
smo227640.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227638.addModifier(smo227640);
smo227640.addClass('lyric lyric-1');
smo227662v0ar.push(smo227638);
const smo227641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo227641.setAttribute('id', 'smo227641');
const smo227642 = new VF.Annotation('es');
smo227642.setAttribute('id', 'smo227642');
smo227642.setFont('Merriweather', 12, 'normal');
smo227642.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227641.addModifier(smo227642);
smo227642.addClass('lyric lyric-0');
const smo227643 = new VF.Annotation('ihm');
smo227643.setAttribute('id', 'smo227643');
smo227643.setFont('Merriweather', 12, 'normal');
smo227643.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227641.addModifier(smo227643);
smo227643.addClass('lyric lyric-1');
smo227662v0ar.push(smo227641);
const smo227644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo227644.setAttribute('id', 'smo227644');
const smo227645 = new VF.Annotation('von');
smo227645.setAttribute('id', 'smo227645');
smo227645.setFont('Merriweather', 12, 'normal');
smo227645.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227644.addModifier(smo227645);
smo227645.addClass('lyric lyric-0');
const smo227646 = new VF.Annotation('Denk\'');
smo227646.setAttribute('id', 'smo227646');
smo227646.setFont('Merriweather', 12, 'normal');
smo227646.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227644.addModifier(smo227646);
smo227646.addClass('lyric lyric-1');
smo227662v0ar.push(smo227644);
smo227662v0.addTickables(smo227662v0ar)
fmtsmo22766231.joinVoices([smo227662v0]);
const fmtsmo22891631 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo228916v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228916v0ar = [];
const smo228899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228899.setAttribute('id', 'smo228899');
smo228899.addModifier(new VF.Dot(), 0);
smo228916v0ar.push(smo228899);
const smo228900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["gn/4/r"]}'))
smo228900.setAttribute('id', 'smo228900');
smo228900.addModifier(new VF.Dot(), 0);
smo228916v0ar.push(smo228900);
smo228916v0.addTickables(smo228916v0ar)
fmtsmo22891631.joinVoices([smo228916v0]);
const fmtsmo23010131 = new VF.Formatter();
//
// voices and notes for stave 2 31
const smo230101v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230101v0ar = [];
const smo230081 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo230081.setAttribute('id', 'smo230081');
smo230081.addModifier(new VF.Dot(), 0);
smo230101v0ar.push(smo230081);
smo230101v0.addTickables(smo230101v0ar)
fmtsmo23010131.joinVoices([smo230101v0]);
const smo230101v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230101v1ar = [];
const smo230082 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo230082.setAttribute('id', 'smo230082');
smo230082.setStyle({ fillStyle: "#115511" });
smo230101v1ar.push(smo230082);
const smo230083 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo230083.setAttribute('id', 'smo230083');
smo230083.setStyle({ fillStyle: "#115511" });
smo230101v1ar.push(smo230083);
const smo230084 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo230084.setAttribute('id', 'smo230084');
smo230084.setStyle({ fillStyle: "#115511" });
smo230101v1ar.push(smo230084);
const smo230085 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo230085.setAttribute('id', 'smo230085');
smo230085.setStyle({ fillStyle: "#115511" });
smo230101v1ar.push(smo230085);
smo230101v1.addTickables(smo230101v1ar)
fmtsmo23010131.joinVoices([smo230101v1]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22766231.format([smo227662v0,smo228916v0,smo230101v0,smo230101v1], 293);
const stavesmo227662 = new VF.Stave(568, 398.5133013333334, 307);
stavesmo227662.setAttribute('id', 'stavesmo227662');
stavesmo227662.setBegBarType(VF.Barline.type.NONE);
stavesmo227662.setContext(context);
stavesmo227662.draw();
smo227662v0.draw(context, stavesmo227662);
const stavesmo228916 = new VF.Stave(568, 520.5133013333334, 307);
stavesmo228916.setAttribute('id', 'stavesmo228916');
stavesmo228916.setBegBarType(VF.Barline.type.NONE);
stavesmo228916.setContext(context);
stavesmo228916.draw();
smo228916v0.draw(context, stavesmo228916);
const stavesmo230101 = new VF.Stave(568, 643.5133013333334, 307);
stavesmo230101.setAttribute('id', 'stavesmo230101');
stavesmo230101.setBegBarType(VF.Barline.type.NONE);
stavesmo230101.setContext(context);
stavesmo230101.draw();
smo230101v0.draw(context, stavesmo230101);
smo230101v1.draw(context, stavesmo230101);
const fmtsmo22769032 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo227690v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227690v0ar = [];
const smo227663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo227663.setAttribute('id', 'smo227663');
const smo227664 = new VF.Annotation('fer');
smo227664.setAttribute('id', 'smo227664');
smo227664.setFont('Merriweather', 12, 'normal');
smo227664.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227663.addModifier(smo227664);
smo227664.addClass('lyric lyric-0 lyric-hyphen');
const smo227665 = new VF.Annotation('im');
smo227665.setAttribute('id', 'smo227665');
smo227665.setFont('Merriweather', 12, 'normal');
smo227665.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227663.addModifier(smo227665);
smo227665.addClass('lyric lyric-1 lyric-hyphen');
smo227690v0ar.push(smo227663);
const smo227666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227666.setAttribute('id', 'smo227666');
const smo227667 = new VF.Annotation('ne');
smo227667.setAttribute('id', 'smo227667');
smo227667.setFont('Merriweather', 12, 'normal');
smo227667.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227666.addModifier(smo227667);
smo227667.addClass('lyric lyric-0');
const smo227668 = new VF.Annotation('mer');
smo227668.setAttribute('id', 'smo227668');
smo227668.setFont('Merriweather', 12, 'normal');
smo227668.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227666.addModifier(smo227668);
smo227668.addClass('lyric lyric-1');
smo227690v0ar.push(smo227666);
const smo227669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo227669.setAttribute('id', 'smo227669');
const smo227670 = new VF.Annotation('er');
smo227670.setAttribute('id', 'smo227670');
smo227670.setFont('Merriweather', 12, 'normal');
smo227670.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227669.addModifier(smo227670);
smo227670.addClass('lyric lyric-0 lyric-hyphen');
const smo227671 = new VF.Annotation('an');
smo227671.setAttribute('id', 'smo227671');
smo227671.setFont('Merriweather', 12, 'normal');
smo227671.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227669.addModifier(smo227671);
smo227671.addClass('lyric lyric-1');
smo227690v0ar.push(smo227669);
const smo227672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo227672.setAttribute('id', 'smo227672');
smo227672.addModifier(new VF.Dot(), 0);
const smo227674 = new VF.Annotation('schalit');
smo227674.setAttribute('id', 'smo227674');
smo227674.setFont('Merriweather', 12, 'normal');
smo227674.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227672.addModifier(smo227674);
smo227674.addClass('lyric lyric-0');
const smo227673 = new VF.Annotation('mich');
smo227673.setAttribute('id', 'smo227673');
smo227673.setFont('Merriweather', 12, 'normal');
smo227673.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227672.addModifier(smo227673);
smo227673.addClass('lyric lyric-1');
smo227690v0ar.push(smo227672);
smo227690v0.addTickables(smo227690v0ar)
fmtsmo22769032.joinVoices([smo227690v0]);
const fmtsmo22893332 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo228933v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228933v0ar = [];
const smo228917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228917.setAttribute('id', 'smo228917');
smo228917.addModifier(new VF.Dot(), 0);
smo228933v0ar.push(smo228917);
smo228933v0.addTickables(smo228933v0ar)
fmtsmo22893332.joinVoices([smo228933v0]);
const fmtsmo23012232 = new VF.Formatter();
//
// voices and notes for stave 2 32
const smo230122v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230122v0ar = [];
const smo230102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo230102.setAttribute('id', 'smo230102');
smo230102.addModifier(new VF.Dot(), 0);
smo230122v0ar.push(smo230102);
smo230122v0.addTickables(smo230122v0ar)
fmtsmo23012232.joinVoices([smo230122v0]);
const smo230122v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230122v1ar = [];
const smo230103 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo230103.setAttribute('id', 'smo230103');
smo230103.setStyle({ fillStyle: "#115511" });
const smo2301030acc = new VF.Accidental('#');
smo230103.addModifier(smo2301030acc, 0);
smo230122v1ar.push(smo230103);
const smo230104 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo230104.setAttribute('id', 'smo230104');
smo230104.setStyle({ fillStyle: "#115511" });
smo230122v1ar.push(smo230104);
const smo230105 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo230105.setAttribute('id', 'smo230105');
smo230105.setStyle({ fillStyle: "#115511" });
smo230122v1ar.push(smo230105);
const smo230106 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo230106.setAttribute('id', 'smo230106');
smo230106.setStyle({ fillStyle: "#115511" });
smo230122v1ar.push(smo230106);
smo230122v1.addTickables(smo230122v1ar)
fmtsmo23012232.joinVoices([smo230122v1]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo236888 = smo227663.getStemDirection();
smo227663.setStemDirection(dirsmo236888);
smo227666.setStemDirection(dirsmo236888);
smo227669.setStemDirection(dirsmo236888);
const smo236888 = new VF.Beam([smo227663,smo227666,smo227669]);
 
// formatting measures in staff group smo230697
fmtsmo22769032.format([smo227690v0,smo228933v0,smo230122v0,smo230122v1], 321);
const stavesmo227690 = new VF.Stave(875, 398.5133013333334, 335);
stavesmo227690.setAttribute('id', 'stavesmo227690');
stavesmo227690.setBegBarType(VF.Barline.type.NONE);
stavesmo227690.setContext(context);
stavesmo227690.draw();
smo227690v0.draw(context, stavesmo227690);
smo236888.setContext(context);
smo236888.draw();
const stavesmo228933 = new VF.Stave(875, 520.5133013333334, 335);
stavesmo228933.setAttribute('id', 'stavesmo228933');
stavesmo228933.setBegBarType(VF.Barline.type.NONE);
stavesmo228933.setContext(context);
stavesmo228933.draw();
smo228933v0.draw(context, stavesmo228933);
const stavesmo230122 = new VF.Stave(875, 643.5133013333334, 335);
stavesmo230122.setAttribute('id', 'stavesmo230122');
stavesmo230122.setBegBarType(VF.Barline.type.NONE);
stavesmo230122.setContext(context);
stavesmo230122.draw();
smo230122v0.draw(context, stavesmo230122);
smo230122v1.draw(context, stavesmo230122);
const rightsmo230697stavesmo2276902 = new VF.StaveConnector(stavesmo227690, stavesmo230122).setType(0);
rightsmo230697stavesmo2276902.setContext(context).draw();
const fmtsmo22772033 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo227720v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227720v0ar = [];
const smo227691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo227691.setAttribute('id', 'smo227691');
const smo227692 = new VF.Annotation('-');
smo227692.setAttribute('id', 'smo227692');
smo227692.setFont('Merriweather', 12, 'normal');
smo227692.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227691.addModifier(smo227692);
smo227692.addClass('lyric lyric-0 lyric-hyphen');
smo227720v0ar.push(smo227691);
const smo227693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo227693.setAttribute('id', 'smo227693');
const smo227694 = new VF.Annotation('ais');
smo227694.setAttribute('id', 'smo227694');
smo227694.setFont('Merriweather', 12, 'normal');
smo227694.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227693.addModifier(smo227694);
smo227694.addClass('lyric lyric-0');
const smo227695 = new VF.Annotation('du');
smo227695.setAttribute('id', 'smo227695');
smo227695.setFont('Merriweather', 12, 'normal');
smo227695.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227693.addModifier(smo227695);
smo227695.addClass('lyric lyric-1');
smo227720v0ar.push(smo227693);
const smo227696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo227696.setAttribute('id', 'smo227696');
const smo227697 = new VF.Annotation('ruit');
smo227697.setAttribute('id', 'smo227697');
smo227697.setFont('Merriweather', 12, 'normal');
smo227697.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227696.addModifier(smo227697);
smo227697.addClass('lyric lyric-0');
const smo227698 = new VF.Annotation('weißt');
smo227698.setAttribute('id', 'smo227698');
smo227698.setFont('Merriweather', 12, 'normal');
smo227698.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227696.addModifier(smo227698);
smo227698.addClass('lyric lyric-1');
smo227720v0ar.push(smo227696);
const smo227699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227699.setAttribute('id', 'smo227699');
const smo227700 = new VF.Annotation('er');
smo227700.setAttribute('id', 'smo227700');
smo227700.setFont('Merriweather', 12, 'normal');
smo227700.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227699.addModifier(smo227700);
smo227700.addClass('lyric lyric-0');
const smo227701 = new VF.Annotation('doch,');
smo227701.setAttribute('id', 'smo227701');
smo227701.setFont('Merriweather', 12, 'normal');
smo227701.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227699.addModifier(smo227701);
smo227701.addClass('lyric lyric-1');
smo227720v0ar.push(smo227699);
const smo227702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo227702.setAttribute('id', 'smo227702');
const smo227703 = new VF.Annotation('Ich');
smo227703.setAttribute('id', 'smo227703');
smo227703.setFont('Merriweather', 12, 'normal');
smo227703.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227702.addModifier(smo227703);
smo227703.addClass('lyric lyric-0');
const smo227704 = new VF.Annotation('ich');
smo227704.setAttribute('id', 'smo227704');
smo227704.setFont('Merriweather', 12, 'normal');
smo227704.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227702.addModifier(smo227704);
smo227704.addClass('lyric lyric-1');
smo227720v0ar.push(smo227702);
smo227720v0.addTickables(smo227720v0ar)
fmtsmo22772033.joinVoices([smo227720v0]);
const fmtsmo22895333 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo228953v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228953v0ar = [];
const smo228934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228934.setAttribute('id', 'smo228934');
smo228953v0ar.push(smo228934);
const smo228935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228935.setAttribute('id', 'smo228935');
smo228953v0ar.push(smo228935);
const smo228936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228936.setAttribute('id', 'smo228936');
smo228953v0ar.push(smo228936);
const smo228937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228937.setAttribute('id', 'smo228937');
smo228953v0ar.push(smo228937);
smo228953v0.addTickables(smo228953v0ar)
fmtsmo22895333.joinVoices([smo228953v0]);
const fmtsmo23014333 = new VF.Formatter();
//
// voices and notes for stave 2 33
const smo230143v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230143v0ar = [];
const smo230123 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo230123.setAttribute('id', 'smo230123');
smo230123.addModifier(new VF.Dot(), 0);
smo230143v0ar.push(smo230123);
smo230143v0.addTickables(smo230143v0ar)
fmtsmo23014333.joinVoices([smo230143v0]);
const smo230143v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230143v1ar = [];
const smo230124 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo230124.setAttribute('id', 'smo230124');
smo230124.setStyle({ fillStyle: "#115511" });
const smo2301240acc = new VF.Accidental('#');
smo230124.addModifier(smo2301240acc, 0);
smo230143v1ar.push(smo230124);
const smo230125 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo230125.setAttribute('id', 'smo230125');
smo230125.setStyle({ fillStyle: "#115511" });
smo230143v1ar.push(smo230125);
const smo230126 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo230126.setAttribute('id', 'smo230126');
smo230126.setStyle({ fillStyle: "#115511" });
smo230143v1ar.push(smo230126);
const smo230127 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo230127.setAttribute('id', 'smo230127');
smo230127.setStyle({ fillStyle: "#115511" });
smo230143v1ar.push(smo230127);
smo230143v1.addTickables(smo230143v1ar)
fmtsmo23014333.joinVoices([smo230143v1]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo236902 = smo227696.getStemDirection();
smo227696.setStemDirection(dirsmo236902);
smo227699.setStemDirection(dirsmo236902);
smo227702.setStemDirection(dirsmo236902);
const smo236902 = new VF.Beam([smo227696,smo227699,smo227702]);
 
// formatting measures in staff group smo230697
fmtsmo22772033.format([smo227720v0,smo228953v0,smo230143v0,smo230143v1], 293);
const stavesmo227720 = new VF.Stave(66, 778.5133013333334, 367);
stavesmo227720.setAttribute('id', 'stavesmo227720');
stavesmo227720.setBegBarType(1);
stavesmo227720.addClef('treble');
const keysmo227720 = new VF.KeySignature('G');
keysmo227720.addToStave(stavesmo227720);
stavesmo227720.setContext(context);
stavesmo227720.draw();
smo227720v0.draw(context, stavesmo227720);
smo236902.setContext(context);
smo236902.draw();
const stavesmo228953 = new VF.Stave(66, 893.5133013333334, 367);
stavesmo228953.setAttribute('id', 'stavesmo228953');
stavesmo228953.setBegBarType(1);
stavesmo228953.addClef('treble');
const keysmo228953 = new VF.KeySignature('G');
keysmo228953.addToStave(stavesmo228953);
stavesmo228953.setContext(context);
stavesmo228953.draw();
smo228953v0.draw(context, stavesmo228953);
const stavesmo230143 = new VF.Stave(66, 1026.5133013333334, 367);
stavesmo230143.setAttribute('id', 'stavesmo230143');
stavesmo230143.setBegBarType(1);
stavesmo230143.addClef('bass');
const keysmo230143 = new VF.KeySignature('G');
keysmo230143.addToStave(stavesmo230143);
stavesmo230143.setContext(context);
stavesmo230143.draw();
smo230143v0.draw(context, stavesmo230143);
smo230143v1.draw(context, stavesmo230143);
const leftsmo230697stavesmo2277202 = new VF.StaveConnector(stavesmo227720, stavesmo230143).setType(1);
leftsmo230697stavesmo2277202.setContext(context).draw();
const fmtsmo22774534 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo227745v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227745v0ar = [];
const smo227721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227721.setAttribute('id', 'smo227721');
const smo227722 = new VF.Annotation('kom');
smo227722.setAttribute('id', 'smo227722');
smo227722.setFont('Merriweather', 12, 'normal');
smo227722.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227721.addModifier(smo227722);
smo227722.addClass('lyric lyric-0 lyric-hyphen');
const smo227723 = new VF.Annotation('lie');
smo227723.setAttribute('id', 'smo227723');
smo227723.setFont('Merriweather', 12, 'normal');
smo227723.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227721.addModifier(smo227723);
smo227723.addClass('lyric lyric-1 lyric-hyphen');
smo227745v0ar.push(smo227721);
const smo227724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo227724.setAttribute('id', 'smo227724');
const smo227725 = new VF.Annotation('me');
smo227725.setAttribute('id', 'smo227725');
smo227725.setFont('Merriweather', 12, 'normal');
smo227725.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227724.addModifier(smo227725);
smo227725.addClass('lyric lyric-0');
const smo227726 = new VF.Annotation('be');
smo227726.setAttribute('id', 'smo227726');
smo227726.setFont('Merriweather', 12, 'normal');
smo227726.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227724.addModifier(smo227726);
smo227726.addClass('lyric lyric-1 lyric-hyphen');
smo227745v0ar.push(smo227724);
const smo227727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227727.setAttribute('id', 'smo227727');
smo227727.addModifier(new VF.Dot(), 0);
const smo227729 = new VF.Annotation('bald!');
smo227729.setAttribute('id', 'smo227729');
smo227729.setFont('Merriweather', 12, 'normal');
smo227729.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227727.addModifier(smo227729);
smo227729.addClass('lyric lyric-0');
const smo227728 = new VF.Annotation('dich!');
smo227728.setAttribute('id', 'smo227728');
smo227728.setFont('Merriweather', 12, 'normal');
smo227728.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227727.addModifier(smo227728);
smo227728.addClass('lyric lyric-1');
smo227745v0ar.push(smo227727);
smo227745v0.addTickables(smo227745v0ar)
fmtsmo22774534.joinVoices([smo227745v0]);
const fmtsmo22897234 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo228972v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228972v0ar = [];
const smo228954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228954.setAttribute('id', 'smo228954');
smo228954.addModifier(new VF.Dot(), 0);
smo228972v0ar.push(smo228954);
const smo228955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228955.setAttribute('id', 'smo228955');
smo228972v0ar.push(smo228955);
const smo228956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228956.setAttribute('id', 'smo228956');
smo228972v0ar.push(smo228956);
smo228972v0.addTickables(smo228972v0ar)
fmtsmo22897234.joinVoices([smo228972v0]);
const fmtsmo23016134 = new VF.Formatter();
//
// voices and notes for stave 2 34
const smo230161v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230161v0ar = [];
const smo230144 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo230144.setAttribute('id', 'smo230144');
smo230144.addModifier(new VF.Dot(), 0);
smo230161v0ar.push(smo230144);
smo230161v0.addTickables(smo230161v0ar)
fmtsmo23016134.joinVoices([smo230161v0]);
const smo230161v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230161v1ar = [];
const smo230145 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo230145.setAttribute('id', 'smo230145');
smo230145.setStyle({ fillStyle: "#115511" });
smo230145.addModifier(new VF.Dot(), 0);
smo230161v1ar.push(smo230145);
smo230161v1.addTickables(smo230161v1ar)
fmtsmo23016134.joinVoices([smo230161v1]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22774534.format([smo227745v0,smo228972v0,smo230161v0,smo230161v1], 200);
const stavesmo227745 = new VF.Stave(433, 778.5133013333334, 214);
stavesmo227745.setAttribute('id', 'stavesmo227745');
stavesmo227745.setBegBarType(VF.Barline.type.NONE);
stavesmo227745.setContext(context);
stavesmo227745.draw();
smo227745v0.draw(context, stavesmo227745);
const stavesmo228972 = new VF.Stave(433, 893.5133013333334, 214);
stavesmo228972.setAttribute('id', 'stavesmo228972');
stavesmo228972.setBegBarType(VF.Barline.type.NONE);
stavesmo228972.setContext(context);
stavesmo228972.draw();
smo228972v0.draw(context, stavesmo228972);
const stavesmo230161 = new VF.Stave(433, 1026.5133013333334, 214);
stavesmo230161.setAttribute('id', 'stavesmo230161');
stavesmo230161.setBegBarType(VF.Barline.type.NONE);
stavesmo230161.setContext(context);
stavesmo230161.draw();
smo230161v0.draw(context, stavesmo230161);
smo230161v1.draw(context, stavesmo230161);
const fmtsmo22776735 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo227767v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227767v0ar = [];
const smo227746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227746.setAttribute('id', 'smo227746');
smo227746.addModifier(new VF.Dot(), 0);
const smo227747 = new VF.Annotation('-');
smo227747.setAttribute('id', 'smo227747');
smo227747.setFont('Merriweather', 12, 'normal');
smo227747.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227746.addModifier(smo227747);
smo227747.addClass('lyric lyric-0 lyric-hyphen');
smo227767v0ar.push(smo227746);
const smo227748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo227748.setAttribute('id', 'smo227748');
smo227767v0ar.push(smo227748);
const smo227749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo227749.setAttribute('id', 'smo227749');
const smo227750 = new VF.Annotation('Ich');
smo227750.setAttribute('id', 'smo227750');
smo227750.setFont('Merriweather', 12, 'normal');
smo227750.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227749.addModifier(smo227750);
smo227750.addClass('lyric lyric-0');
const smo227751 = new VF.Annotation('ich');
smo227751.setAttribute('id', 'smo227751');
smo227751.setFont('Merriweather', 12, 'normal');
smo227751.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227749.addModifier(smo227751);
smo227751.addClass('lyric lyric-1');
smo227767v0ar.push(smo227749);
smo227767v0.addTickables(smo227767v0ar)
fmtsmo22776735.joinVoices([smo227767v0]);
const fmtsmo22898935 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo228989v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228989v0ar = [];
const smo228973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo228973.setAttribute('id', 'smo228973');
smo228973.addModifier(new VF.Dot(), 0);
smo228989v0ar.push(smo228973);
smo228989v0.addTickables(smo228989v0ar)
fmtsmo22898935.joinVoices([smo228989v0]);
const fmtsmo23018135 = new VF.Formatter();
//
// voices and notes for stave 2 35
const smo230181v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230181v0ar = [];
const smo230162 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo230162.setAttribute('id', 'smo230162');
smo230162.addModifier(new VF.Dot(), 0);
smo230181v0ar.push(smo230162);
smo230181v0.addTickables(smo230181v0ar)
fmtsmo23018135.joinVoices([smo230181v0]);
const smo230181v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230181v1ar = [];
const smo230163 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo230163.setAttribute('id', 'smo230163');
smo230163.setStyle({ fillStyle: "#115511" });
smo230181v1ar.push(smo230163);
const smo230164 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo230164.setAttribute('id', 'smo230164');
smo230164.setStyle({ fillStyle: "#115511" });
smo230181v1ar.push(smo230164);
const smo230165 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo230165.setAttribute('id', 'smo230165');
smo230165.setStyle({ fillStyle: "#115511" });
smo230165.addModifier(new VF.Dot(), 0);
smo230181v1ar.push(smo230165);
smo230181v1.addTickables(smo230181v1ar)
fmtsmo23018135.joinVoices([smo230181v1]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22776735.format([smo227767v0,smo228989v0,smo230181v0,smo230181v1], 155);
const stavesmo227767 = new VF.Stave(647, 778.5133013333334, 169);
stavesmo227767.setAttribute('id', 'stavesmo227767');
stavesmo227767.setBegBarType(VF.Barline.type.NONE);
stavesmo227767.setContext(context);
stavesmo227767.draw();
smo227767v0.draw(context, stavesmo227767);
const stavesmo228989 = new VF.Stave(647, 893.5133013333334, 169);
stavesmo228989.setAttribute('id', 'stavesmo228989');
stavesmo228989.setBegBarType(VF.Barline.type.NONE);
stavesmo228989.setContext(context);
stavesmo228989.draw();
smo228989v0.draw(context, stavesmo228989);
const stavesmo230181 = new VF.Stave(647, 1026.5133013333334, 169);
stavesmo230181.setAttribute('id', 'stavesmo230181');
stavesmo230181.setBegBarType(VF.Barline.type.NONE);
stavesmo230181.setContext(context);
stavesmo230181.draw();
smo230181v0.draw(context, stavesmo230181);
smo230181v1.draw(context, stavesmo230181);
const fmtsmo22779236 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo227792v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227792v0ar = [];
const smo227768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227768.setAttribute('id', 'smo227768');
const smo227769 = new VF.Annotation('kom');
smo227769.setAttribute('id', 'smo227769');
smo227769.setFont('Merriweather', 12, 'normal');
smo227769.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227768.addModifier(smo227769);
smo227769.addClass('lyric lyric-0 lyric-hyphen');
const smo227770 = new VF.Annotation('lie');
smo227770.setAttribute('id', 'smo227770');
smo227770.setFont('Merriweather', 12, 'normal');
smo227770.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227768.addModifier(smo227770);
smo227770.addClass('lyric lyric-1 lyric-hyphen');
smo227792v0ar.push(smo227768);
const smo227771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo227771.setAttribute('id', 'smo227771');
const smo227772 = new VF.Annotation('me');
smo227772.setAttribute('id', 'smo227772');
smo227772.setFont('Merriweather', 12, 'normal');
smo227772.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227771.addModifier(smo227772);
smo227772.addClass('lyric lyric-0');
const smo227773 = new VF.Annotation('be');
smo227773.setAttribute('id', 'smo227773');
smo227773.setFont('Merriweather', 12, 'normal');
smo227773.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227771.addModifier(smo227773);
smo227773.addClass('lyric lyric-1');
smo227792v0ar.push(smo227771);
const smo227774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227774.setAttribute('id', 'smo227774');
smo227774.addModifier(new VF.Dot(), 0);
const smo227775 = new VF.Annotation('bald');
smo227775.setAttribute('id', 'smo227775');
smo227775.setFont('Merriweather', 12, 'normal');
smo227775.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227774.addModifier(smo227775);
smo227775.addClass('lyric lyric-0');
const smo227776 = new VF.Annotation('dich!');
smo227776.setAttribute('id', 'smo227776');
smo227776.setFont('Merriweather', 12, 'normal');
smo227776.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227774.addModifier(smo227776);
smo227776.addClass('lyric lyric-1');
smo227792v0ar.push(smo227774);
smo227792v0.addTickables(smo227792v0ar)
fmtsmo22779236.joinVoices([smo227792v0]);
const fmtsmo22900636 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo229006v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229006v0ar = [];
const smo228990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228990.setAttribute('id', 'smo228990');
smo228990.addModifier(new VF.Dot(), 0);
smo229006v0ar.push(smo228990);
smo229006v0.addTickables(smo229006v0ar)
fmtsmo22900636.joinVoices([smo229006v0]);
const fmtsmo23020136 = new VF.Formatter();
//
// voices and notes for stave 2 36
const smo230201v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230201v0ar = [];
const smo230182 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo230182.setAttribute('id', 'smo230182');
smo230182.addModifier(new VF.Dot(), 0);
smo230201v0ar.push(smo230182);
smo230201v0.addTickables(smo230201v0ar)
fmtsmo23020136.joinVoices([smo230201v0]);
const smo230201v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230201v1ar = [];
const smo230183 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["dn/4/r"]}'))
smo230183.setAttribute('id', 'smo230183');
smo230183.setStyle({ fillStyle: '#aaaaaa7f' });
smo230183.addModifier(new VF.Dot(), 0);
smo230201v1ar.push(smo230183);
const smo230184 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/4/r"]}'))
smo230184.setAttribute('id', 'smo230184');
smo230184.setStyle({ fillStyle: '#aaaaaa7f' });
smo230201v1ar.push(smo230184);
const smo230185 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo230185.setAttribute('id', 'smo230185');
smo230185.setStyle({ fillStyle: "#115511" });
smo230201v1ar.push(smo230185);
smo230201v1.addTickables(smo230201v1ar)
fmtsmo23020136.joinVoices([smo230201v1]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22779236.format([smo227792v0,smo229006v0,smo230201v0,smo230201v1], 200);
const stavesmo227792 = new VF.Stave(816, 778.5133013333334, 214);
stavesmo227792.setAttribute('id', 'stavesmo227792');
stavesmo227792.setBegBarType(VF.Barline.type.NONE);
stavesmo227792.setContext(context);
stavesmo227792.draw();
smo227792v0.draw(context, stavesmo227792);
const stavesmo229006 = new VF.Stave(816, 893.5133013333334, 214);
stavesmo229006.setAttribute('id', 'stavesmo229006');
stavesmo229006.setBegBarType(VF.Barline.type.NONE);
stavesmo229006.setContext(context);
stavesmo229006.draw();
smo229006v0.draw(context, stavesmo229006);
const stavesmo230201 = new VF.Stave(816, 1026.5133013333334, 214);
stavesmo230201.setAttribute('id', 'stavesmo230201');
stavesmo230201.setBegBarType(VF.Barline.type.NONE);
stavesmo230201.setContext(context);
stavesmo230201.draw();
smo230201v0.draw(context, stavesmo230201);
smo230201v1.draw(context, stavesmo230201);
const fmtsmo22781437 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo227814v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227814v0ar = [];
const smo227793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo227793.setAttribute('id', 'smo227793');
smo227814v0ar.push(smo227793);
const smo227794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo227794.setAttribute('id', 'smo227794');
smo227814v0ar.push(smo227794);
const smo227795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo227795.setAttribute('id', 'smo227795');
smo227814v0ar.push(smo227795);
const smo227796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo227796.setAttribute('id', 'smo227796');
const smo227797 = new VF.Annotation('Mein');
smo227797.setAttribute('id', 'smo227797');
smo227797.setFont('Merriweather', 12, 'normal');
smo227797.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227796.addModifier(smo227797);
smo227797.addClass('lyric lyric-0');
const smo227798 = new VF.Annotation('Tra');
smo227798.setAttribute('id', 'smo227798');
smo227798.setFont('Merriweather', 12, 'normal');
smo227798.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227796.addModifier(smo227798);
smo227798.addClass('lyric lyric-1 lyric-hyphen');
smo227814v0ar.push(smo227796);
smo227814v0.addTickables(smo227814v0ar)
fmtsmo22781437.joinVoices([smo227814v0]);
const fmtsmo22902337 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo229023v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229023v0ar = [];
const smo229007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo229007.setAttribute('id', 'smo229007');
smo229007.addModifier(new VF.Dot(), 0);
smo229023v0ar.push(smo229007);
smo229023v0.addTickables(smo229023v0ar)
fmtsmo22902337.joinVoices([smo229023v0]);
const fmtsmo23022137 = new VF.Formatter();
//
// voices and notes for stave 2 37
const smo230221v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230221v0ar = [];
const smo230202 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo230202.setAttribute('id', 'smo230202');
smo230202.addModifier(new VF.Dot(), 0);
smo230221v0ar.push(smo230202);
smo230221v0.addTickables(smo230221v0ar)
fmtsmo23022137.joinVoices([smo230221v0]);
const smo230221v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230221v1ar = [];
const smo230203 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo230203.setAttribute('id', 'smo230203');
smo230203.setStyle({ fillStyle: "#115511" });
smo230221v1ar.push(smo230203);
const smo230204 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo230204.setAttribute('id', 'smo230204');
smo230204.setStyle({ fillStyle: "#115511" });
smo230221v1ar.push(smo230204);
const smo230205 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo230205.setAttribute('id', 'smo230205');
smo230205.setStyle({ fillStyle: "#115511" });
smo230205.addModifier(new VF.Dot(), 0);
smo230221v1ar.push(smo230205);
smo230221v1.addTickables(smo230221v1ar)
fmtsmo23022137.joinVoices([smo230221v1]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22781437.format([smo227814v0,smo229023v0,smo230221v0,smo230221v1], 170);
const stavesmo227814 = new VF.Stave(1030, 778.5133013333334, 184);
stavesmo227814.setAttribute('id', 'stavesmo227814');
stavesmo227814.setBegBarType(VF.Barline.type.NONE);
stavesmo227814.setContext(context);
stavesmo227814.draw();
smo227814v0.draw(context, stavesmo227814);
const stavesmo229023 = new VF.Stave(1030, 893.5133013333334, 184);
stavesmo229023.setAttribute('id', 'stavesmo229023');
stavesmo229023.setBegBarType(VF.Barline.type.NONE);
stavesmo229023.setContext(context);
stavesmo229023.draw();
smo229023v0.draw(context, stavesmo229023);
const stavesmo230221 = new VF.Stave(1030, 1026.5133013333334, 184);
stavesmo230221.setAttribute('id', 'stavesmo230221');
stavesmo230221.setBegBarType(VF.Barline.type.NONE);
stavesmo230221.setContext(context);
stavesmo230221.draw();
smo230221v0.draw(context, stavesmo230221);
smo230221v1.draw(context, stavesmo230221);
const rightsmo230697stavesmo2278142 = new VF.StaveConnector(stavesmo227814, stavesmo230221).setType(0);
rightsmo230697stavesmo2278142.setContext(context).draw();
const fmtsmo22783338 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo227833v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227833v0ar = [];
const smo227815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227815.setAttribute('id', 'smo227815');
smo227815.addModifier(new VF.Dot(), 0);
const smo227816 = new VF.Annotation('Shatz');
smo227816.setAttribute('id', 'smo227816');
smo227816.setFont('Merriweather', 12, 'normal');
smo227816.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227815.addModifier(smo227816);
smo227816.addClass('lyric lyric-0');
const smo227817 = new VF.Annotation('ra!');
smo227817.setAttribute('id', 'smo227817');
smo227817.setFont('Merriweather', 12, 'normal');
smo227817.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227815.addModifier(smo227817);
smo227817.addClass('lyric lyric-1');
smo227833v0ar.push(smo227815);
smo227833v0.addTickables(smo227833v0ar)
fmtsmo22783338.joinVoices([smo227833v0]);
const fmtsmo22904038 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo229040v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229040v0ar = [];
const smo229024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n","bn/4/n"]}'))
smo229024.setAttribute('id', 'smo229024');
smo229024.addModifier(new VF.Dot(), 0);
smo229024.addModifier(new VF.Dot(), 1);
smo229040v0ar.push(smo229024);
smo229040v0.addTickables(smo229040v0ar)
fmtsmo22904038.joinVoices([smo229040v0]);
const fmtsmo23024138 = new VF.Formatter();
//
// voices and notes for stave 2 38
const smo230241v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230241v0ar = [];
const smo230222 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo230222.setAttribute('id', 'smo230222');
smo230241v0ar.push(smo230222);
const smo230223 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo230223.setAttribute('id', 'smo230223');
smo230241v0ar.push(smo230223);
const smo230224 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo230224.setAttribute('id', 'smo230224');
smo230241v0ar.push(smo230224);
const smo230225 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo230225.setAttribute('id', 'smo230225');
smo230241v0ar.push(smo230225);
smo230241v0.addTickables(smo230241v0ar)
fmtsmo23024138.joinVoices([smo230241v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22783338.format([smo227833v0,smo229040v0,smo230241v0], 150);
const stavesmo227833 = new VF.Stave(66, 1166.5133013333334, 224);
stavesmo227833.setAttribute('id', 'stavesmo227833');
stavesmo227833.setBegBarType(1);
stavesmo227833.addClef('treble');
const keysmo227833 = new VF.KeySignature('G');
keysmo227833.addToStave(stavesmo227833);
stavesmo227833.setContext(context);
stavesmo227833.draw();
smo227833v0.draw(context, stavesmo227833);
const stavesmo229040 = new VF.Stave(66, 1298.5133013333334, 224);
stavesmo229040.setAttribute('id', 'stavesmo229040');
stavesmo229040.setBegBarType(1);
stavesmo229040.addClef('treble');
const keysmo229040 = new VF.KeySignature('G');
keysmo229040.addToStave(stavesmo229040);
stavesmo229040.setContext(context);
stavesmo229040.draw();
smo229040v0.draw(context, stavesmo229040);
const stavesmo230241 = new VF.Stave(66, 1424.5133013333334, 224);
stavesmo230241.setAttribute('id', 'stavesmo230241');
stavesmo230241.setBegBarType(1);
stavesmo230241.addClef('bass');
const keysmo230241 = new VF.KeySignature('G');
keysmo230241.addToStave(stavesmo230241);
stavesmo230241.setContext(context);
stavesmo230241.draw();
smo230241v0.draw(context, stavesmo230241);
const leftsmo230697stavesmo2278332 = new VF.StaveConnector(stavesmo227833, stavesmo230241).setType(1);
leftsmo230697stavesmo2278332.setContext(context).draw();
const fmtsmo22786439 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo227864v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227864v0ar = [];
const smo227834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo227834.setAttribute('id', 'smo227834');
const smo227835 = new VF.Annotation('-');
smo227835.setAttribute('id', 'smo227835');
smo227835.setFont('Merriweather', 12, 'normal');
smo227835.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227834.addModifier(smo227835);
smo227835.addClass('lyric lyric-0 lyric-hyphen');
smo227864v0ar.push(smo227834);
const smo227836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo227836.setAttribute('id', 'smo227836');
smo227864v0ar.push(smo227836);
const smo227837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227837.setAttribute('id', 'smo227837');
const smo227838 = new VF.Annotation('der');
smo227838.setAttribute('id', 'smo227838');
smo227838.setFont('Merriweather', 12, 'normal');
smo227838.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227837.addModifier(smo227838);
smo227838.addClass('lyric lyric-0');
const smo227839 = new VF.Annotation('ich');
smo227839.setAttribute('id', 'smo227839');
smo227839.setFont('Merriweather', 12, 'normal');
smo227839.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227837.addModifier(smo227839);
smo227839.addClass('lyric lyric-1');
smo227864v0ar.push(smo227837);
const smo227840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227840.setAttribute('id', 'smo227840');
const smo227841 = new VF.Annotation('ist');
smo227841.setAttribute('id', 'smo227841');
smo227841.setFont('Merriweather', 12, 'normal');
smo227841.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227840.addModifier(smo227841);
smo227841.addClass('lyric lyric-0');
const smo227842 = new VF.Annotation('hö');
smo227842.setAttribute('id', 'smo227842');
smo227842.setFont('Merriweather', 12, 'normal');
smo227842.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227840.addModifier(smo227842);
smo227842.addClass('lyric lyric-1 lyric-hyphen');
smo227864v0ar.push(smo227840);
const smo227843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo227843.setAttribute('id', 'smo227843');
const smo227844 = new VF.Annotation('Po');
smo227844.setAttribute('id', 'smo227844');
smo227844.setFont('Merriweather', 12, 'normal');
smo227844.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227843.addModifier(smo227844);
smo227844.addClass('lyric lyric-0 lyric-hyphen');
const smo227845 = new VF.Annotation('re');
smo227845.setAttribute('id', 'smo227845');
smo227845.setFont('Merriweather', 12, 'normal');
smo227845.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227843.addModifier(smo227845);
smo227845.addClass('lyric lyric-1');
smo227864v0ar.push(smo227843);
const smo227846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo227846.setAttribute('id', 'smo227846');
const smo227847 = new VF.Annotation('stil');
smo227847.setAttribute('id', 'smo227847');
smo227847.setFont('Merriweather', 12, 'normal');
smo227847.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227846.addModifier(smo227847);
smo227847.addClass('lyric lyric-0 lyric-hyphen');
const smo227848 = new VF.Annotation('sein');
smo227848.setAttribute('id', 'smo227848');
smo227848.setFont('Merriweather', 12, 'normal');
smo227848.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227846.addModifier(smo227848);
smo227848.addClass('lyric lyric-1');
smo227864v0ar.push(smo227846);
smo227864v0.addTickables(smo227864v0ar)
fmtsmo22786439.joinVoices([smo227864v0]);
const fmtsmo22905939 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo229059v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229059v0ar = [];
const smo229041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n","bn/4/n"]}'))
smo229041.setAttribute('id', 'smo229041');
smo229041.addModifier(new VF.Dot(), 0);
smo229041.addModifier(new VF.Dot(), 1);
smo229059v0ar.push(smo229041);
const smo229042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo229042.setAttribute('id', 'smo229042');
smo229059v0ar.push(smo229042);
const smo229043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo229043.setAttribute('id', 'smo229043');
smo229059v0ar.push(smo229043);
smo229059v0.addTickables(smo229059v0ar)
fmtsmo22905939.joinVoices([smo229059v0]);
const fmtsmo23026139 = new VF.Formatter();
//
// voices and notes for stave 2 39
const smo230261v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230261v0ar = [];
const smo230242 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo230242.setAttribute('id', 'smo230242');
smo230261v0ar.push(smo230242);
const smo230243 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo230243.setAttribute('id', 'smo230243');
smo230261v0ar.push(smo230243);
const smo230244 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo230244.setAttribute('id', 'smo230244');
smo230261v0ar.push(smo230244);
const smo230245 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo230245.setAttribute('id', 'smo230245');
smo230261v0ar.push(smo230245);
smo230261v0.addTickables(smo230261v0ar)
fmtsmo23026139.joinVoices([smo230261v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo236945 = smo227840.getStemDirection();
smo227840.setStemDirection(dirsmo236945);
smo227843.setStemDirection(dirsmo236945);
smo227846.setStemDirection(dirsmo236945);
const smo236945 = new VF.Beam([smo227840,smo227843,smo227846]);
 
// formatting measures in staff group smo230697
fmtsmo22786439.format([smo227864v0,smo229059v0,smo230261v0], 271);
const stavesmo227864 = new VF.Stave(290, 1166.5133013333334, 285);
stavesmo227864.setAttribute('id', 'stavesmo227864');
stavesmo227864.setBegBarType(VF.Barline.type.NONE);
stavesmo227864.setContext(context);
stavesmo227864.draw();
smo227864v0.draw(context, stavesmo227864);
smo236945.setContext(context);
smo236945.draw();
const stavesmo229059 = new VF.Stave(290, 1298.5133013333334, 285);
stavesmo229059.setAttribute('id', 'stavesmo229059');
stavesmo229059.setBegBarType(VF.Barline.type.NONE);
stavesmo229059.setContext(context);
stavesmo229059.draw();
smo229059v0.draw(context, stavesmo229059);
const stavesmo230261 = new VF.Stave(290, 1424.5133013333334, 285);
stavesmo230261.setAttribute('id', 'stavesmo230261');
stavesmo230261.setBegBarType(VF.Barline.type.NONE);
stavesmo230261.setContext(context);
stavesmo230261.draw();
smo230261v0.draw(context, stavesmo230261);
const fmtsmo22788340 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo227883v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227883v0ar = [];
const smo227865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227865.setAttribute('id', 'smo227865');
smo227865.addModifier(new VF.Dot(), 0);
const smo227866 = new VF.Annotation('lion');
smo227866.setAttribute('id', 'smo227866');
smo227866.setFont('Merriweather', 12, 'normal');
smo227866.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227865.addModifier(smo227866);
smo227866.addClass('lyric lyric-0');
const smo227867 = new VF.Annotation('Lied!');
smo227867.setAttribute('id', 'smo227867');
smo227867.setFont('Merriweather', 12, 'normal');
smo227867.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227865.addModifier(smo227867);
smo227867.addClass('lyric lyric-1');
smo227883v0ar.push(smo227865);
smo227883v0.addTickables(smo227883v0ar)
fmtsmo22788340.joinVoices([smo227883v0]);
const fmtsmo22907640 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo229076v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229076v0ar = [];
const smo229060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo229060.setAttribute('id', 'smo229060');
smo229060.addModifier(new VF.Dot(), 0);
smo229060.addModifier(new VF.Dot(), 1);
smo229076v0ar.push(smo229060);
smo229076v0.addTickables(smo229076v0ar)
fmtsmo22907640.joinVoices([smo229076v0]);
const fmtsmo23028540 = new VF.Formatter();
//
// voices and notes for stave 2 40
const smo230285v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230285v0ar = [];
const smo230262 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo230262.setAttribute('id', 'smo230262');
smo230285v0ar.push(smo230262);
const smo230263 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo230263.setAttribute('id', 'smo230263');
smo230285v0ar.push(smo230263);
const smo230264 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo230264.setAttribute('id', 'smo230264');
smo230285v0ar.push(smo230264);
const smo230265 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo230265.setAttribute('id', 'smo230265');
smo230285v0ar.push(smo230265);
smo230285v0.addTickables(smo230285v0ar)
fmtsmo23028540.joinVoices([smo230285v0]);
const smo230285v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230285v1ar = [];
const smo230266 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo230266.setAttribute('id', 'smo230266');
smo230266.setStyle({ fillStyle: "#115511" });
smo230285v1ar.push(smo230266);
const smo230267 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo230267.setAttribute('id', 'smo230267');
smo230267.setStyle({ fillStyle: "#115511" });
smo230285v1ar.push(smo230267);
const smo230268 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo230268.setAttribute('id', 'smo230268');
smo230268.setStyle({ fillStyle: "#115511" });
smo230285v1ar.push(smo230268);
const smo230269 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo230269.setAttribute('id', 'smo230269');
smo230269.setStyle({ fillStyle: "#115511" });
smo230285v1ar.push(smo230269);
smo230285v1.addTickables(smo230285v1ar)
fmtsmo23028540.joinVoices([smo230285v1]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22788340.format([smo227883v0,smo229076v0,smo230285v0,smo230285v1], 145);
const stavesmo227883 = new VF.Stave(575, 1166.5133013333334, 159);
stavesmo227883.setAttribute('id', 'stavesmo227883');
stavesmo227883.setBegBarType(VF.Barline.type.NONE);
stavesmo227883.setContext(context);
stavesmo227883.draw();
smo227883v0.draw(context, stavesmo227883);
const stavesmo229076 = new VF.Stave(575, 1298.5133013333334, 159);
stavesmo229076.setAttribute('id', 'stavesmo229076');
stavesmo229076.setBegBarType(VF.Barline.type.NONE);
stavesmo229076.setContext(context);
stavesmo229076.draw();
smo229076v0.draw(context, stavesmo229076);
const stavesmo230285 = new VF.Stave(575, 1424.5133013333334, 159);
stavesmo230285.setAttribute('id', 'stavesmo230285');
stavesmo230285.setBegBarType(VF.Barline.type.NONE);
stavesmo230285.setContext(context);
stavesmo230285.draw();
smo230285v0.draw(context, stavesmo230285);
smo230285v1.draw(context, stavesmo230285);
const fmtsmo22791341 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo227913v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227913v0ar = [];
const smo227884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo227884.setAttribute('id', 'smo227884');
const smo227885 = new VF.Annotation('-');
smo227885.setAttribute('id', 'smo227885');
smo227885.setFont('Merriweather', 12, 'normal');
smo227885.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227884.addModifier(smo227885);
smo227885.addClass('lyric lyric-0 lyric-hyphen');
smo227913v0ar.push(smo227884);
const smo227886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo227886.setAttribute('id', 'smo227886');
const smo227887 = new VF.Annotation('er');
smo227887.setAttribute('id', 'smo227887');
smo227887.setFont('Merriweather', 12, 'normal');
smo227887.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227886.addModifier(smo227887);
smo227887.addClass('lyric lyric-0');
const smo227888 = new VF.Annotation('ich');
smo227888.setAttribute('id', 'smo227888');
smo227888.setFont('Merriweather', 12, 'normal');
smo227888.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227886.addModifier(smo227888);
smo227888.addClass('lyric lyric-1');
smo227913v0ar.push(smo227886);
const smo227889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227889.setAttribute('id', 'smo227889');
const smo227890 = new VF.Annotation('fährt');
smo227890.setAttribute('id', 'smo227890');
smo227890.setFont('Merriweather', 12, 'normal');
smo227890.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227889.addModifier(smo227890);
smo227890.addClass('lyric lyric-0');
const smo227891 = new VF.Annotation('hö');
smo227891.setAttribute('id', 'smo227891');
smo227891.setFont('Merriweather', 12, 'normal');
smo227891.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227889.addModifier(smo227891);
smo227891.addClass('lyric lyric-1 lyric-hyphen');
smo227913v0ar.push(smo227889);
const smo227892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227892.setAttribute('id', 'smo227892');
const smo227893 = new VF.Annotation('durch');
smo227893.setAttribute('id', 'smo227893');
smo227893.setFont('Merriweather', 12, 'normal');
smo227893.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227892.addModifier(smo227893);
smo227893.addClass('lyric lyric-0');
const smo227894 = new VF.Annotation('re');
smo227894.setAttribute('id', 'smo227894');
smo227894.setFont('Merriweather', 12, 'normal');
smo227894.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227892.addModifier(smo227894);
smo227894.addClass('lyric lyric-1');
smo227913v0ar.push(smo227892);
const smo227895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo227895.setAttribute('id', 'smo227895');
const smo227896 = new VF.Annotation('die');
smo227896.setAttribute('id', 'smo227896');
smo227896.setFont('Merriweather', 12, 'normal');
smo227896.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227895.addModifier(smo227896);
smo227896.addClass('lyric lyric-0');
const smo227897 = new VF.Annotation('es');
smo227897.setAttribute('id', 'smo227897');
smo227897.setFont('Merriweather', 12, 'normal');
smo227897.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227895.addModifier(smo227897);
smo227897.addClass('lyric lyric-1');
smo227913v0ar.push(smo227895);
smo227913v0.addTickables(smo227913v0ar)
fmtsmo22791341.joinVoices([smo227913v0]);
const fmtsmo22909441 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo229094v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229094v0ar = [];
const smo229077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo229077.setAttribute('id', 'smo229077');
smo229077.addModifier(new VF.Dot(), 0);
smo229077.addModifier(new VF.Dot(), 1);
smo229094v0ar.push(smo229077);
const smo229078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo229078.setAttribute('id', 'smo229078');
smo229078.addModifier(new VF.Dot(), 0);
smo229094v0ar.push(smo229078);
smo229094v0.addTickables(smo229094v0ar)
fmtsmo22909441.joinVoices([smo229094v0]);
const fmtsmo23030941 = new VF.Formatter();
//
// voices and notes for stave 2 41
const smo230309v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230309v0ar = [];
const smo230286 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo230286.setAttribute('id', 'smo230286');
smo230309v0ar.push(smo230286);
const smo230287 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo230287.setAttribute('id', 'smo230287');
smo230309v0ar.push(smo230287);
const smo230288 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo230288.setAttribute('id', 'smo230288');
smo230309v0ar.push(smo230288);
const smo230289 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo230289.setAttribute('id', 'smo230289');
smo230309v0ar.push(smo230289);
smo230309v0.addTickables(smo230309v0ar)
fmtsmo23030941.joinVoices([smo230309v0]);
const smo230309v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230309v1ar = [];
const smo230290 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo230290.setAttribute('id', 'smo230290');
smo230290.setStyle({ fillStyle: "#115511" });
smo230309v1ar.push(smo230290);
const smo230291 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo230291.setAttribute('id', 'smo230291');
smo230291.setStyle({ fillStyle: "#115511" });
smo230309v1ar.push(smo230291);
const smo230292 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo230292.setAttribute('id', 'smo230292');
smo230292.setStyle({ fillStyle: "#115511" });
smo230309v1ar.push(smo230292);
const smo230293 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo230293.setAttribute('id', 'smo230293');
smo230293.setStyle({ fillStyle: "#115511" });
smo230309v1ar.push(smo230293);
smo230309v1.addTickables(smo230309v1ar)
fmtsmo23030941.joinVoices([smo230309v1]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo236958 = smo227889.getStemDirection();
smo227889.setStemDirection(dirsmo236958);
smo227892.setStemDirection(dirsmo236958);
smo227895.setStemDirection(dirsmo236958);
const smo236958 = new VF.Beam([smo227889,smo227892,smo227895]);
 
// formatting measures in staff group smo230697
fmtsmo22791341.format([smo227913v0,smo229094v0,smo230309v0,smo230309v1], 291);
const stavesmo227913 = new VF.Stave(734, 1166.5133013333334, 305);
stavesmo227913.setAttribute('id', 'stavesmo227913');
stavesmo227913.setBegBarType(VF.Barline.type.NONE);
stavesmo227913.setContext(context);
stavesmo227913.draw();
smo227913v0.draw(context, stavesmo227913);
smo236958.setContext(context);
smo236958.draw();
const stavesmo229094 = new VF.Stave(734, 1298.5133013333334, 305);
stavesmo229094.setAttribute('id', 'stavesmo229094');
stavesmo229094.setBegBarType(VF.Barline.type.NONE);
stavesmo229094.setContext(context);
stavesmo229094.draw();
smo229094v0.draw(context, stavesmo229094);
const stavesmo230309 = new VF.Stave(734, 1424.5133013333334, 305);
stavesmo230309.setAttribute('id', 'stavesmo230309');
stavesmo230309.setBegBarType(VF.Barline.type.NONE);
stavesmo230309.setContext(context);
stavesmo230309.draw();
smo230309v0.draw(context, stavesmo230309);
smo230309v1.draw(context, stavesmo230309);
const fmtsmo22793542 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo227935v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227935v0ar = [];
const smo227914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227914.setAttribute('id', 'smo227914');
smo227914.addModifier(new VF.Dot(), 0);
const smo227915 = new VF.Annotation('Fel');
smo227915.setAttribute('id', 'smo227915');
smo227915.setFont('Merriweather', 12, 'normal');
smo227915.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227914.addModifier(smo227915);
smo227915.addClass('lyric lyric-0 lyric-hyphen');
const smo227916 = new VF.Annotation('sin');
smo227916.setAttribute('id', 'smo227916');
smo227916.setFont('Merriweather', 12, 'normal');
smo227916.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227914.addModifier(smo227916);
smo227916.addClass('lyric lyric-1 lyric-hyphen');
smo227935v0ar.push(smo227914);
const smo227917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo227917.setAttribute('id', 'smo227917');
smo227917.addModifier(new VF.Dot(), 0);
const smo227918 = new VF.Annotation('er');
smo227918.setAttribute('id', 'smo227918');
smo227918.setFont('Merriweather', 12, 'normal');
smo227918.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227917.addModifier(smo227918);
smo227918.addClass('lyric lyric-0');
const smo227919 = new VF.Annotation('gen,');
smo227919.setAttribute('id', 'smo227919');
smo227919.setFont('Merriweather', 12, 'normal');
smo227919.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227917.addModifier(smo227919);
smo227919.addClass('lyric lyric-1');
smo227935v0ar.push(smo227917);
smo227935v0.addTickables(smo227935v0ar)
fmtsmo22793542.joinVoices([smo227935v0]);
const fmtsmo22911142 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo229111v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229111v0ar = [];
const smo229095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n","f#/5/n","dn/6/n"]}'))
smo229095.setAttribute('id', 'smo229095');
smo229095.addModifier(new VF.Dot(), 0);
smo229095.addModifier(new VF.Dot(), 1);
smo229095.addModifier(new VF.Dot(), 2);
smo229111v0ar.push(smo229095);
smo229111v0.addTickables(smo229111v0ar)
fmtsmo22911142.joinVoices([smo229111v0]);
const fmtsmo23033142 = new VF.Formatter();
//
// voices and notes for stave 2 42
const smo230331v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230331v0ar = [];
const smo230310 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo230310.setAttribute('id', 'smo230310');
smo230331v0ar.push(smo230310);
const smo230311 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo230311.setAttribute('id', 'smo230311');
smo230331v0ar.push(smo230311);
const smo230312 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo230312.setAttribute('id', 'smo230312');
smo230331v0ar.push(smo230312);
const smo230313 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo230313.setAttribute('id', 'smo230313');
smo230331v0ar.push(smo230313);
smo230331v0.addTickables(smo230331v0ar)
fmtsmo23033142.joinVoices([smo230331v0]);
const smo230331v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230331v1ar = [];
const smo230314 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo230314.setAttribute('id', 'smo230314');
smo230314.setStyle({ fillStyle: "#115511" });
smo230314.addModifier(new VF.Dot(), 0);
smo230331v1ar.push(smo230314);
const smo230315 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["cn/4/r"]}'))
smo230315.setAttribute('id', 'smo230315');
smo230315.setStyle({ fillStyle: "#115511" });
smo230315.addModifier(new VF.Dot(), 0);
smo230331v1ar.push(smo230315);
smo230331v1.addTickables(smo230331v1ar)
fmtsmo23033142.joinVoices([smo230331v1]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22793542.format([smo227935v0,smo229111v0,smo230331v0,smo230331v1], 160);
const stavesmo227935 = new VF.Stave(1039, 1166.5133013333334, 174);
stavesmo227935.setAttribute('id', 'stavesmo227935');
stavesmo227935.setBegBarType(VF.Barline.type.NONE);
stavesmo227935.setContext(context);
stavesmo227935.draw();
smo227935v0.draw(context, stavesmo227935);
const stavesmo229111 = new VF.Stave(1039, 1298.5133013333334, 174);
stavesmo229111.setAttribute('id', 'stavesmo229111');
stavesmo229111.setBegBarType(VF.Barline.type.NONE);
stavesmo229111.setContext(context);
stavesmo229111.draw();
smo229111v0.draw(context, stavesmo229111);
const stavesmo230331 = new VF.Stave(1039, 1424.5133013333334, 174);
stavesmo230331.setAttribute('id', 'stavesmo230331');
stavesmo230331.setBegBarType(VF.Barline.type.NONE);
stavesmo230331.setContext(context);
stavesmo230331.draw();
smo230331v0.draw(context, stavesmo230331);
smo230331v1.draw(context, stavesmo230331);
const rightsmo230697stavesmo2279352 = new VF.StaveConnector(stavesmo227935, stavesmo230331).setType(0);
rightsmo230697stavesmo2279352.setContext(context).draw();
// modifier from 0-26-0-0 to 0-27-0-0
const smo237751 = new VF.Curve(smo227524, smo227543, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo237751.setContext(context).draw();
// modifier from 0-22-0-0 to 0-23-0-0
const smo237752 = new VF.StaveTie({ first_note: smo227432, last_note: smo227451, 
          firstNote: smo227432, lastNote: smo227451, first_indices: [0], last_indices: [0]});
smo237752.setContext(context).draw();
// modifier from 0-25-0-0 to 0-25-0-1
const smo237753 = new VF.StaveTie({ first_note: smo227500, last_note: smo227503, 
          firstNote: smo227500, lastNote: smo227503, first_indices: [0], last_indices: [0]});
smo237753.setContext(context).draw();
// modifier from 0-30-0-0 to 0-31-0-0
const smo237754 = new VF.StaveTie({ first_note: smo227616, last_note: smo227635, 
          firstNote: smo227616, lastNote: smo227635, first_indices: [0], last_indices: [0]});
smo237754.setContext(context).draw();
// modifier from 0-32-0-3 to 0-33-0-0
const smo237755 = new VF.StaveTie({ first_note: smo227672, last_note: null, 
          firstNote: smo227672, lastNote: null, first_indices: [0], last_indices: [0]});
smo237755.setContext(context).draw();
// modifier from 0-32-0-3 to 0-33-0-0
const smo237756 = new VF.StaveTie({ first_note: null, last_note: smo227691, 
          firstNote: null, lastNote: smo227691, first_indices: [0], last_indices: [0]});
smo237756.setContext(context).draw();
// modifier from 0-34-0-2 to 0-35-0-0
const smo237757 = new VF.StaveTie({ first_note: smo227727, last_note: smo227746, 
          firstNote: smo227727, lastNote: smo227746, first_indices: [0], last_indices: [0]});
smo237757.setContext(context).draw();
// modifier from 1-30-0-0 to 1-31-0-0
const smo237758 = new VF.Curve(smo228882, smo228899, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo237758.setContext(context).draw();
// modifier from 1-40-0-0 to 1-41-0-0
const smo237759 = new VF.StaveTie({ first_note: smo229060, last_note: smo229077, 
          firstNote: smo229060, lastNote: smo229077, first_indices: [0,1], last_indices: [0,1]});
smo237759.setContext(context).draw();
// modifier from 1-38-0-0 to 1-39-0-0
const smo237760 = new VF.StaveTie({ first_note: smo229024, last_note: smo229041, 
          firstNote: smo229024, lastNote: smo229041, first_indices: [0,1], last_indices: [0,1]});
smo237760.setContext(context).draw();
// modifier from 2-30-0-0 to 2-31-0-0
const smo237761 = new VF.Curve(smo230060, smo230081, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo237761.setContext(context).draw();
// modifier from 2-32-0-0 to 2-33-0-0
const smo237762 = new VF.StaveTie({ first_note: smo230102, last_note: null, 
          firstNote: smo230102, lastNote: null, first_indices: [0], last_indices: [0]});
smo237762.setContext(context).draw();
// modifier from 2-32-0-0 to 2-33-0-0
const smo237763 = new VF.StaveTie({ first_note: null, last_note: smo230123, 
          firstNote: null, lastNote: smo230123, first_indices: [0], last_indices: [0]});
smo237763.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo227433').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227434').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo227454').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227455').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo227457').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo227458').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo227460').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227461').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo227479').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227480').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo227482').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227483').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo227502').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo227501').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo227504').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo227506').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo227507').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo227526').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo227544').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo227546').setAttributeNS('', 'transform', 'translate(0 0)');
context.svg.getElementById('vf-smo227547').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo227549').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo227550').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo227553').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo227571').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo227572').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo227574').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227575').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo227593').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo227594').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo227596').setAttributeNS('', 'transform', 'translate(0 48)');
context.svg.getElementById('vf-smo227598').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo227599').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo227618').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227617').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo227636').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo227637').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo227639').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo227640').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo227642').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo227643').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo227645').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo227646').setAttributeNS('', 'transform', 'translate(0 27)');
context.svg.getElementById('vf-smo227664').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo227665').setAttributeNS('', 'transform', 'translate(0 27)');
context.svg.getElementById('vf-smo227667').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227668').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo227671').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo227674').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo227673').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo227692').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo227694').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227695').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo227697').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227698').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo227700').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo227701').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo227703').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227704').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo227722').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo227723').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo227725').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo227726').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo227729').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo227728').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo227747').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo227751').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo227769').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo227770').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo227772').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo227773').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo227775').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo227776').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo227797').setAttributeNS('', 'transform', 'translate(0 0)');
context.svg.getElementById('vf-smo227798').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo227816').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo227817').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo227835').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227838').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo227839').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo227841').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo227842').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo227844').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227845').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo227847').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo227848').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo227866').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo227867').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo227885').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227888').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo227890').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo227891').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo227893').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo227894').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo227896').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo227897').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo227915').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo227916').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo227919').setAttributeNS('', 'transform', 'translate(0 9)');
}
// @@ Solovey p 2/1 ((Op. 1)) by Folks
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1483.6363636363635');
svg.setAttributeNS('', 'height', '1920');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
//
// create the musical objects
VF.setMusicFont("Bravura","Gonville","Custom");
const fmtsmo24861426 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo248614v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248614v0ar = [];
const smo248586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248586.setAttribute('id', 'smo248586');
const smo248587 = new VF.Annotation('Со');
smo248587.setAttribute('id', 'smo248587');
smo248587.setFont('Merriweather', 12.1, 'normal');
smo248587.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248586.addModifier(smo248587);
smo248587.addClass('lyric lyric-0');
smo248614v0ar.push(smo248586);
const smo248588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo248588.setAttribute('id', 'smo248588');
const smo248589 = new VF.Annotation('-');
smo248589.setAttribute('id', 'smo248589');
smo248589.setFont('Merriweather', 12.1, 'normal');
smo248589.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248588.addModifier(smo248589);
smo248589.addClass('lyric lyric-0 lyric-hyphen');
smo248614v0ar.push(smo248588);
const smo248590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248590.setAttribute('id', 'smo248590');
const smo248591 = new VF.Annotation('-');
smo248591.setAttribute('id', 'smo248591');
smo248591.setFont('Merriweather', 12.1, 'normal');
smo248591.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248590.addModifier(smo248591);
smo248591.addClass('lyric lyric-0 lyric-hyphen');
smo248614v0ar.push(smo248590);
const smo248592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["d#/5/n"]}'))
smo248592.setAttribute('id', 'smo248592');
const smo2485920acc = new VF.Accidental('#');
smo248592.addModifier(smo2485920acc, 0);
const smo248593 = new VF.Annotation('-');
smo248593.setAttribute('id', 'smo248593');
smo248593.setFont('Merriweather', 12.1, 'normal');
smo248593.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248592.addModifier(smo248593);
smo248593.addClass('lyric lyric-0 lyric-hyphen');
smo248614v0ar.push(smo248592);
const smo248594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248594.setAttribute('id', 'smo248594');
smo248614v0ar.push(smo248594);
const smo248595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo248595.setAttribute('id', 'smo248595');
const smo248596 = new VF.Annotation('ло');
smo248596.setAttribute('id', 'smo248596');
smo248596.setFont('Merriweather', 12.1, 'normal');
smo248596.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248595.addModifier(smo248596);
smo248596.addClass('lyric lyric-0');
smo248614v0ar.push(smo248595);
const smo248597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248597.setAttribute('id', 'smo248597');
const smo248598 = new VF.Annotation('-');
smo248598.setAttribute('id', 'smo248598');
smo248598.setFont('Merriweather', 12.1, 'normal');
smo248598.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248597.addModifier(smo248598);
smo248598.addClass('lyric lyric-0 lyric-hyphen');
smo248614v0ar.push(smo248597);
smo248614v0.addTickables(smo248614v0ar)
fmtsmo24861426.joinVoices([smo248614v0]);
const fmtsmo24959926 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo249599v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249599v0ar = [];
const smo249580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249580.setAttribute('id', 'smo249580');
smo249599v0ar.push(smo249580);
const smo249581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249581.setAttribute('id', 'smo249581');
smo249599v0ar.push(smo249581);
const smo249582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo249582.setAttribute('id', 'smo249582');
const smo2495820acc = new VF.Accidental('#');
smo249582.addModifier(smo2495820acc, 0);
smo249599v0ar.push(smo249582);
const smo249583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249583.setAttribute('id', 'smo249583');
smo249599v0ar.push(smo249583);
smo249599v0.addTickables(smo249599v0ar)
fmtsmo24959926.joinVoices([smo249599v0]);
const fmtsmo25057826 = new VF.Formatter();
//
// voices and notes for stave 2 26
const smo250578v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250578v0ar = [];
const smo250562 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo250562.setAttribute('id', 'smo250562');
smo250578v0ar.push(smo250562);
smo250578v0.addTickables(smo250578v0ar)
fmtsmo25057826.joinVoices([smo250578v0]);
const fmtsmo25153226 = new VF.Formatter();
//
// voices and notes for stave 3 26
const smo251532v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251532v0ar = [];
const smo251515 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo251515.setAttribute('id', 'smo251515');
smo251532v0ar.push(smo251515);
const smo251516 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251516.setAttribute('id', 'smo251516');
smo251532v0ar.push(smo251516);
smo251532v0.addTickables(smo251532v0ar)
fmtsmo25153226.joinVoices([smo251532v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
const dirsmo258487 = smo248588.getStemDirection();
smo248588.setStemDirection(dirsmo258487);
smo248590.setStemDirection(dirsmo258487);
smo248592.setStemDirection(dirsmo258487);
smo248594.setStemDirection(dirsmo258487);
const smo258487 = new VF.Beam([smo248588,smo248590,smo248592,smo248594]);
 
// formatting measures in staff group smo251978
fmtsmo24861426.format([smo248614v0,smo249599v0,smo250578v0,smo251532v0], 249);
const stavesmo248614 = new VF.Stave(55, 219, 323);
stavesmo248614.setAttribute('id', 'stavesmo248614');
stavesmo248614.setBegBarType(1);
stavesmo248614.addClef('treble');
const keysmo248614 = new VF.KeySignature('F');
keysmo248614.addToStave(stavesmo248614);
stavesmo248614.setContext(context);
stavesmo248614.draw();
smo248614v0.draw(context, stavesmo248614);
smo258487.setContext(context);
smo258487.draw();
const stavesmo249599 = new VF.Stave(55, 311, 323);
stavesmo249599.setAttribute('id', 'stavesmo249599');
stavesmo249599.setBegBarType(1);
stavesmo249599.addClef('treble');
const keysmo249599 = new VF.KeySignature('F');
keysmo249599.addToStave(stavesmo249599);
stavesmo249599.setContext(context);
stavesmo249599.draw();
smo249599v0.draw(context, stavesmo249599);
const stavesmo250578 = new VF.Stave(55, 389, 323);
stavesmo250578.setAttribute('id', 'stavesmo250578');
stavesmo250578.setBegBarType(1);
stavesmo250578.addClef('treble');
const keysmo250578 = new VF.KeySignature('F');
keysmo250578.addToStave(stavesmo250578);
stavesmo250578.setContext(context);
stavesmo250578.draw();
smo250578v0.draw(context, stavesmo250578);
const stavesmo251532 = new VF.Stave(55, 473, 323);
stavesmo251532.setAttribute('id', 'stavesmo251532');
stavesmo251532.setBegBarType(1);
stavesmo251532.addClef('bass');
const keysmo251532 = new VF.KeySignature('F');
keysmo251532.addToStave(stavesmo251532);
stavesmo251532.setContext(context);
stavesmo251532.draw();
smo251532v0.draw(context, stavesmo251532);
const leftsmo251978stavesmo2486143 = new VF.StaveConnector(stavesmo248614, stavesmo251532).setType(1);
leftsmo251978stavesmo2486143.setContext(context).draw();
const fmtsmo24863327 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo248633v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248633v0ar = [];
const smo248615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248615.setAttribute('id', 'smo248615');
const smo248616 = new VF.Annotation('вей');
smo248616.setAttribute('id', 'smo248616');
smo248616.setFont('Merriweather', 12.1, 'normal');
smo248616.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248615.addModifier(smo248616);
smo248616.addClass('lyric lyric-0');
smo248633v0ar.push(smo248615);
const smo248617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248617.setAttribute('id', 'smo248617');
smo248633v0ar.push(smo248617);
smo248633v0.addTickables(smo248633v0ar)
fmtsmo24863327.joinVoices([smo248633v0]);
const fmtsmo24961927 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo249619v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249619v0ar = [];
const smo249600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249600.setAttribute('id', 'smo249600');
smo249619v0ar.push(smo249600);
const smo249601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249601.setAttribute('id', 'smo249601');
smo249619v0ar.push(smo249601);
const smo249602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo249602.setAttribute('id', 'smo249602');
smo249619v0ar.push(smo249602);
const smo249603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249603.setAttribute('id', 'smo249603');
smo249619v0ar.push(smo249603);
smo249619v0.addTickables(smo249619v0ar)
fmtsmo24961927.joinVoices([smo249619v0]);
const fmtsmo25059527 = new VF.Formatter();
//
// voices and notes for stave 2 27
const smo250595v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250595v0ar = [];
const smo250579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo250579.setAttribute('id', 'smo250579');
smo250595v0ar.push(smo250579);
smo250595v0.addTickables(smo250595v0ar)
fmtsmo25059527.joinVoices([smo250595v0]);
const fmtsmo25155027 = new VF.Formatter();
//
// voices and notes for stave 3 27
const smo251550v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251550v0ar = [];
const smo251533 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251533.setAttribute('id', 'smo251533');
smo251550v0ar.push(smo251533);
const smo251534 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251534.setAttribute('id', 'smo251534');
smo251550v0ar.push(smo251534);
smo251550v0.addTickables(smo251550v0ar)
fmtsmo25155027.joinVoices([smo251550v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24863327.format([smo248633v0,smo249619v0,smo250595v0,smo251550v0], 147);
const stavesmo248633 = new VF.Stave(378, 219, 161);
stavesmo248633.setAttribute('id', 'stavesmo248633');
stavesmo248633.setBegBarType(VF.Barline.type.NONE);
stavesmo248633.setContext(context);
stavesmo248633.draw();
smo248633v0.draw(context, stavesmo248633);
const stavesmo249619 = new VF.Stave(378, 311, 161);
stavesmo249619.setAttribute('id', 'stavesmo249619');
stavesmo249619.setBegBarType(VF.Barline.type.NONE);
stavesmo249619.setContext(context);
stavesmo249619.draw();
smo249619v0.draw(context, stavesmo249619);
const stavesmo250595 = new VF.Stave(378, 389, 161);
stavesmo250595.setAttribute('id', 'stavesmo250595');
stavesmo250595.setBegBarType(VF.Barline.type.NONE);
stavesmo250595.setContext(context);
stavesmo250595.draw();
smo250595v0.draw(context, stavesmo250595);
const stavesmo251550 = new VF.Stave(378, 473, 161);
stavesmo251550.setAttribute('id', 'stavesmo251550');
stavesmo251550.setBegBarType(VF.Barline.type.NONE);
stavesmo251550.setContext(context);
stavesmo251550.draw();
smo251550v0.draw(context, stavesmo251550);
const fmtsmo24865528 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo248655v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248655v0ar = [];
const smo248634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248634.setAttribute('id', 'smo248634');
const smo248635 = new VF.Annotation('цо');
smo248635.setAttribute('id', 'smo248635');
smo248635.setFont('Merriweather', 12.1, 'normal');
smo248635.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248634.addModifier(smo248635);
smo248635.addClass('lyric lyric-0 lyric-hyphen');
smo248655v0ar.push(smo248634);
const smo248636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo248636.setAttribute('id', 'smo248636');
const smo248637 = new VF.Annotation('ло');
smo248637.setAttribute('id', 'smo248637');
smo248637.setFont('Merriweather', 12.1, 'normal');
smo248637.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248636.addModifier(smo248637);
smo248637.addClass('lyric lyric-0');
smo248655v0ar.push(smo248636);
const smo248638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo248638.setAttribute('id', 'smo248638');
const smo248639 = new VF.Annotation('-');
smo248639.setAttribute('id', 'smo248639');
smo248639.setFont('Merriweather', 12.1, 'normal');
smo248639.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248638.addModifier(smo248639);
smo248639.addClass('lyric lyric-0 lyric-hyphen');
smo248655v0ar.push(smo248638);
smo248655v0.addTickables(smo248655v0ar)
fmtsmo24865528.joinVoices([smo248655v0]);
const fmtsmo24963928 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo249639v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249639v0ar = [];
const smo249620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249620.setAttribute('id', 'smo249620');
smo249639v0ar.push(smo249620);
const smo249621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249621.setAttribute('id', 'smo249621');
smo249639v0ar.push(smo249621);
const smo249622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249622.setAttribute('id', 'smo249622');
smo249639v0ar.push(smo249622);
const smo249623 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249623.setAttribute('id', 'smo249623');
smo249639v0ar.push(smo249623);
smo249639v0.addTickables(smo249639v0ar)
fmtsmo24963928.joinVoices([smo249639v0]);
const fmtsmo25061328 = new VF.Formatter();
//
// voices and notes for stave 2 28
const smo250613v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250613v0ar = [];
const smo250596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo250596.setAttribute('id', 'smo250596');
smo250613v0ar.push(smo250596);
const smo250597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo250597.setAttribute('id', 'smo250597');
smo250613v0ar.push(smo250597);
smo250613v0.addTickables(smo250613v0ar)
fmtsmo25061328.joinVoices([smo250613v0]);
const fmtsmo25156828 = new VF.Formatter();
//
// voices and notes for stave 3 28
const smo251568v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251568v0ar = [];
const smo251551 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251551.setAttribute('id', 'smo251551');
smo251568v0ar.push(smo251551);
const smo251552 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo251552.setAttribute('id', 'smo251552');
smo251568v0ar.push(smo251552);
smo251568v0.addTickables(smo251568v0ar)
fmtsmo25156828.joinVoices([smo251568v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24865528.format([smo248655v0,smo249639v0,smo250613v0,smo251568v0], 146);
const stavesmo248655 = new VF.Stave(539, 219, 160);
stavesmo248655.setAttribute('id', 'stavesmo248655');
stavesmo248655.setBegBarType(VF.Barline.type.NONE);
stavesmo248655.setContext(context);
stavesmo248655.draw();
smo248655v0.draw(context, stavesmo248655);
const stavesmo249639 = new VF.Stave(539, 311, 160);
stavesmo249639.setAttribute('id', 'stavesmo249639');
stavesmo249639.setBegBarType(VF.Barline.type.NONE);
stavesmo249639.setContext(context);
stavesmo249639.draw();
smo249639v0.draw(context, stavesmo249639);
const stavesmo250613 = new VF.Stave(539, 389, 160);
stavesmo250613.setAttribute('id', 'stavesmo250613');
stavesmo250613.setBegBarType(VF.Barline.type.NONE);
stavesmo250613.setContext(context);
stavesmo250613.draw();
smo250613v0.draw(context, stavesmo250613);
const stavesmo251568 = new VF.Stave(539, 473, 160);
stavesmo251568.setAttribute('id', 'stavesmo251568');
stavesmo251568.setBegBarType(VF.Barline.type.NONE);
stavesmo251568.setContext(context);
stavesmo251568.draw();
smo251568v0.draw(context, stavesmo251568);
const fmtsmo24867729 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo248677v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248677v0ar = [];
const smo248656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo248656.setAttribute('id', 'smo248656');
const smo248657 = new VF.Annotation('си');
smo248657.setAttribute('id', 'smo248657');
smo248657.setFont('Merriweather', 12.1, 'normal');
smo248657.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248656.addModifier(smo248657);
smo248657.addClass('lyric lyric-0 lyric-hyphen');
smo248677v0ar.push(smo248656);
const smo248658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo248658.setAttribute('id', 'smo248658');
const smo248659 = new VF.Annotation('стый');
smo248659.setAttribute('id', 'smo248659');
smo248659.setFont('Merriweather', 12.1, 'normal');
smo248659.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248658.addModifier(smo248659);
smo248659.addClass('lyric lyric-0');
smo248677v0ar.push(smo248658);
const smo248660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo248660.setAttribute('id', 'smo248660');
const smo248661 = new VF.Annotation('-');
smo248661.setAttribute('id', 'smo248661');
smo248661.setFont('Merriweather', 12.1, 'normal');
smo248661.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248660.addModifier(smo248661);
smo248661.addClass('lyric lyric-0 lyric-hyphen');
smo248677v0ar.push(smo248660);
smo248677v0.addTickables(smo248677v0ar)
fmtsmo24867729.joinVoices([smo248677v0]);
const fmtsmo24965929 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo249659v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249659v0ar = [];
const smo249640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249640.setAttribute('id', 'smo249640');
smo249659v0ar.push(smo249640);
const smo249641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249641.setAttribute('id', 'smo249641');
smo249659v0ar.push(smo249641);
const smo249642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249642.setAttribute('id', 'smo249642');
smo249659v0ar.push(smo249642);
const smo249643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo249643.setAttribute('id', 'smo249643');
smo249659v0ar.push(smo249643);
smo249659v0.addTickables(smo249659v0ar)
fmtsmo24965929.joinVoices([smo249659v0]);
const fmtsmo25063129 = new VF.Formatter();
//
// voices and notes for stave 2 29
const smo250631v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250631v0ar = [];
const smo250614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo250614.setAttribute('id', 'smo250614');
smo250631v0ar.push(smo250614);
const smo250615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo250615.setAttribute('id', 'smo250615');
smo250631v0ar.push(smo250615);
smo250631v0.addTickables(smo250631v0ar)
fmtsmo25063129.joinVoices([smo250631v0]);
const fmtsmo25158629 = new VF.Formatter();
//
// voices and notes for stave 3 29
const smo251586v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251586v0ar = [];
const smo251569 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo251569.setAttribute('id', 'smo251569');
smo251586v0ar.push(smo251569);
const smo251570 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo251570.setAttribute('id', 'smo251570');
smo251586v0ar.push(smo251570);
smo251586v0.addTickables(smo251586v0ar)
fmtsmo25158629.joinVoices([smo251586v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24867729.format([smo248677v0,smo249659v0,smo250631v0,smo251586v0], 174);
const stavesmo248677 = new VF.Stave(699, 219, 188);
stavesmo248677.setAttribute('id', 'stavesmo248677');
stavesmo248677.setBegBarType(VF.Barline.type.NONE);
stavesmo248677.setContext(context);
stavesmo248677.draw();
smo248677v0.draw(context, stavesmo248677);
const stavesmo249659 = new VF.Stave(699, 311, 188);
stavesmo249659.setAttribute('id', 'stavesmo249659');
stavesmo249659.setBegBarType(VF.Barline.type.NONE);
stavesmo249659.setContext(context);
stavesmo249659.draw();
smo249659v0.draw(context, stavesmo249659);
const stavesmo250631 = new VF.Stave(699, 389, 188);
stavesmo250631.setAttribute('id', 'stavesmo250631');
stavesmo250631.setBegBarType(VF.Barline.type.NONE);
stavesmo250631.setContext(context);
stavesmo250631.draw();
smo250631v0.draw(context, stavesmo250631);
const stavesmo251586 = new VF.Stave(699, 473, 188);
stavesmo251586.setAttribute('id', 'stavesmo251586');
stavesmo251586.setBegBarType(VF.Barline.type.NONE);
stavesmo251586.setContext(context);
stavesmo251586.draw();
smo251586v0.draw(context, stavesmo251586);
const fmtsmo24870630 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo248706v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248706v0ar = [];
const smo248678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo248678.setAttribute('id', 'smo248678');
const smo248679 = new VF.Annotation('со');
smo248679.setAttribute('id', 'smo248679');
smo248679.setFont('Merriweather', 12.1, 'normal');
smo248679.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248678.addModifier(smo248679);
smo248679.addClass('lyric lyric-0');
smo248706v0ar.push(smo248678);
const smo248680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo248680.setAttribute('id', 'smo248680');
const smo248681 = new VF.Annotation('-');
smo248681.setAttribute('id', 'smo248681');
smo248681.setFont('Merriweather', 12.1, 'normal');
smo248681.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248680.addModifier(smo248681);
smo248681.addClass('lyric lyric-0 lyric-hyphen');
smo248706v0ar.push(smo248680);
const smo248682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo248682.setAttribute('id', 'smo248682');
const smo248683 = new VF.Annotation('-');
smo248683.setAttribute('id', 'smo248683');
smo248683.setFont('Merriweather', 12.1, 'normal');
smo248683.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248682.addModifier(smo248683);
smo248683.addClass('lyric lyric-0 lyric-hyphen');
smo248706v0ar.push(smo248682);
const smo248684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo248684.setAttribute('id', 'smo248684');
const smo2486840acc = new VF.Accidental('#');
smo248684.addModifier(smo2486840acc, 0);
const smo248685 = new VF.Annotation('-');
smo248685.setAttribute('id', 'smo248685');
smo248685.setFont('Merriweather', 12.1, 'normal');
smo248685.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248684.addModifier(smo248685);
smo248685.addClass('lyric lyric-0 lyric-hyphen');
smo248706v0ar.push(smo248684);
const smo248686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo248686.setAttribute('id', 'smo248686');
const smo248687 = new VF.Annotation('ло');
smo248687.setAttribute('id', 'smo248687');
smo248687.setFont('Merriweather', 12.1, 'normal');
smo248687.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248686.addModifier(smo248687);
smo248687.addClass('lyric lyric-0');
smo248706v0ar.push(smo248686);
const smo248688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248688.setAttribute('id', 'smo248688');
const smo248689 = new VF.Annotation('-');
smo248689.setAttribute('id', 'smo248689');
smo248689.setFont('Merriweather', 12.1, 'normal');
smo248689.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248688.addModifier(smo248689);
smo248689.addClass('lyric lyric-0 lyric-hyphen');
smo248706v0ar.push(smo248688);
smo248706v0.addTickables(smo248706v0ar)
fmtsmo24870630.joinVoices([smo248706v0]);
const fmtsmo24967930 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo249679v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249679v0ar = [];
const smo249660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249660.setAttribute('id', 'smo249660');
smo249679v0ar.push(smo249660);
const smo249661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo249661.setAttribute('id', 'smo249661');
smo249679v0ar.push(smo249661);
const smo249662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249662.setAttribute('id', 'smo249662');
smo249679v0ar.push(smo249662);
const smo249663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo249663.setAttribute('id', 'smo249663');
smo249679v0ar.push(smo249663);
smo249679v0.addTickables(smo249679v0ar)
fmtsmo24967930.joinVoices([smo249679v0]);
const fmtsmo25064930 = new VF.Formatter();
//
// voices and notes for stave 2 30
const smo250649v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250649v0ar = [];
const smo250632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo250632.setAttribute('id', 'smo250632');
smo250649v0ar.push(smo250632);
const smo250633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo250633.setAttribute('id', 'smo250633');
smo250649v0ar.push(smo250633);
smo250649v0.addTickables(smo250649v0ar)
fmtsmo25064930.joinVoices([smo250649v0]);
const fmtsmo25160430 = new VF.Formatter();
//
// voices and notes for stave 3 30
const smo251604v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251604v0ar = [];
const smo251587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo251587.setAttribute('id', 'smo251587');
smo251604v0ar.push(smo251587);
const smo251588 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo251588.setAttribute('id', 'smo251588');
smo251604v0ar.push(smo251588);
smo251604v0.addTickables(smo251604v0ar)
fmtsmo25160430.joinVoices([smo251604v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
const dirsmo258520 = smo248680.getStemDirection();
smo248680.setStemDirection(dirsmo258520);
smo248682.setStemDirection(dirsmo258520);
smo248684.setStemDirection(dirsmo258520);
const smo258520 = new VF.Beam([smo248680,smo248682,smo248684]);
const smo248690 = new VF.Tuplet([smo248680,smo248682,smo248684], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo251978
fmtsmo24870630.format([smo248706v0,smo249679v0,smo250649v0,smo251604v0], 217);
const stavesmo248706 = new VF.Stave(887, 219, 231);
stavesmo248706.setAttribute('id', 'stavesmo248706');
stavesmo248706.setBegBarType(VF.Barline.type.NONE);
stavesmo248706.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":96}'), -1 * 0);
stavesmo248706.setContext(context);
stavesmo248706.draw();
smo248706v0.draw(context, stavesmo248706);
smo258520.setContext(context);
smo258520.draw();
smo248690.setContext(context).draw();
const stavesmo249679 = new VF.Stave(887, 311, 231);
stavesmo249679.setAttribute('id', 'stavesmo249679');
stavesmo249679.setBegBarType(VF.Barline.type.NONE);
stavesmo249679.setContext(context);
stavesmo249679.draw();
smo249679v0.draw(context, stavesmo249679);
const stavesmo250649 = new VF.Stave(887, 389, 231);
stavesmo250649.setAttribute('id', 'stavesmo250649');
stavesmo250649.setBegBarType(VF.Barline.type.NONE);
stavesmo250649.setContext(context);
stavesmo250649.draw();
smo250649v0.draw(context, stavesmo250649);
const stavesmo251604 = new VF.Stave(887, 473, 231);
stavesmo251604.setAttribute('id', 'stavesmo251604');
stavesmo251604.setBegBarType(VF.Barline.type.NONE);
stavesmo251604.setContext(context);
stavesmo251604.draw();
smo251604v0.draw(context, stavesmo251604);
const fmtsmo24872531 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo248725v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248725v0ar = [];
const smo248707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248707.setAttribute('id', 'smo248707');
const smo248708 = new VF.Annotation('вей');
smo248708.setAttribute('id', 'smo248708');
smo248708.setFont('Merriweather', 12.1, 'normal');
smo248708.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248707.addModifier(smo248708);
smo248708.addClass('lyric lyric-0');
smo248725v0ar.push(smo248707);
const smo248709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248709.setAttribute('id', 'smo248709');
smo248725v0ar.push(smo248709);
smo248725v0.addTickables(smo248725v0ar)
fmtsmo24872531.joinVoices([smo248725v0]);
const fmtsmo24970031 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo249700v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249700v0ar = [];
const smo249680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo249680.setAttribute('id', 'smo249680');
smo249700v0ar.push(smo249680);
const smo249681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo249681.setAttribute('id', 'smo249681');
smo249700v0ar.push(smo249681);
const smo249682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo249682.setAttribute('id', 'smo249682');
smo249700v0ar.push(smo249682);
const smo249683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo249683.setAttribute('id', 'smo249683');
smo249700v0ar.push(smo249683);
const smo249684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo249684.setAttribute('id', 'smo249684');
smo249700v0ar.push(smo249684);
smo249700v0.addTickables(smo249700v0ar)
fmtsmo24970031.joinVoices([smo249700v0]);
const fmtsmo25066731 = new VF.Formatter();
//
// voices and notes for stave 2 31
const smo250667v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250667v0ar = [];
const smo250650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo250650.setAttribute('id', 'smo250650');
smo250667v0ar.push(smo250650);
const smo250651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250651.setAttribute('id', 'smo250651');
smo250667v0ar.push(smo250651);
smo250667v0.addTickables(smo250667v0ar)
fmtsmo25066731.joinVoices([smo250667v0]);
const fmtsmo25162631 = new VF.Formatter();
//
// voices and notes for stave 3 31
const smo251626v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251626v0ar = [];
const smo251605 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251605.setAttribute('id', 'smo251605');
smo251626v0ar.push(smo251605);
const smo251606 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo251606.setAttribute('id', 'smo251606');
smo251626v0ar.push(smo251606);
const smo251607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo251607.setAttribute('id', 'smo251607');
smo251626v0ar.push(smo251607);
const smo251608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo251608.setAttribute('id', 'smo251608');
smo251626v0ar.push(smo251608);
const smo251609 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo251609.setAttribute('id', 'smo251609');
smo251626v0ar.push(smo251609);
const smo251610 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251610.setAttribute('id', 'smo251610');
smo251626v0ar.push(smo251610);
smo251626v0.addTickables(smo251626v0ar)
fmtsmo25162631.joinVoices([smo251626v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
const dirsmo258531 = smo249681.getStemDirection();
smo249681.setStemDirection(dirsmo258531);
smo249682.setStemDirection(dirsmo258531);
const smo258531 = new VF.Beam([smo249681,smo249682]);
const dirsmo258532 = smo249683.getStemDirection();
smo249683.setStemDirection(dirsmo258532);
smo249684.setStemDirection(dirsmo258532);
const smo258532 = new VF.Beam([smo249683,smo249684]);
const dirsmo258537 = smo251605.getStemDirection();
smo251605.setStemDirection(dirsmo258537);
smo251606.setStemDirection(dirsmo258537);
const smo258537 = new VF.Beam([smo251605,smo251606]);
const dirsmo258538 = smo251607.getStemDirection();
smo251607.setStemDirection(dirsmo258538);
smo251608.setStemDirection(dirsmo258538);
const smo258538 = new VF.Beam([smo251607,smo251608]);
 
// formatting measures in staff group smo251978
fmtsmo24872531.format([smo248725v0,smo249700v0,smo250667v0,smo251626v0], 245);
const stavesmo248725 = new VF.Stave(1118, 219, 259);
stavesmo248725.setAttribute('id', 'stavesmo248725');
stavesmo248725.setBegBarType(VF.Barline.type.NONE);
stavesmo248725.setContext(context);
stavesmo248725.draw();
smo248725v0.draw(context, stavesmo248725);
const stavesmo249700 = new VF.Stave(1118, 311, 259);
stavesmo249700.setAttribute('id', 'stavesmo249700');
stavesmo249700.setBegBarType(VF.Barline.type.NONE);
stavesmo249700.setContext(context);
stavesmo249700.draw();
smo249700v0.draw(context, stavesmo249700);
smo258531.setContext(context);
smo258531.draw();
smo258532.setContext(context);
smo258532.draw();
const stavesmo250667 = new VF.Stave(1118, 389, 259);
stavesmo250667.setAttribute('id', 'stavesmo250667');
stavesmo250667.setBegBarType(VF.Barline.type.NONE);
stavesmo250667.setContext(context);
stavesmo250667.draw();
smo250667v0.draw(context, stavesmo250667);
const stavesmo251626 = new VF.Stave(1118, 473, 259);
stavesmo251626.setAttribute('id', 'stavesmo251626');
stavesmo251626.setBegBarType(VF.Barline.type.NONE);
stavesmo251626.setContext(context);
stavesmo251626.draw();
smo251626v0.draw(context, stavesmo251626);
smo258537.setContext(context);
smo258537.draw();
smo258538.setContext(context);
smo258538.draw();
const rightsmo251978stavesmo2487253 = new VF.StaveConnector(stavesmo248725, stavesmo251626).setType(0);
rightsmo251978stavesmo2487253.setContext(context).draw();
const fmtsmo24875232 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo248752v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248752v0ar = [];
const smo248726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248726.setAttribute('id', 'smo248726');
const smo248728 = new VF.Ornament('mordent');
smo248726.addModifier(smo248728, 0);
const smo248727 = new VF.Annotation('Со');
smo248727.setAttribute('id', 'smo248727');
smo248727.setFont('Merriweather', 12.1, 'normal');
smo248727.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248726.addModifier(smo248727);
smo248727.addClass('lyric lyric-0');
smo248752v0ar.push(smo248726);
const smo248729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248729.setAttribute('id', 'smo248729');
const smo248730 = new VF.Annotation('-');
smo248730.setAttribute('id', 'smo248730');
smo248730.setFont('Merriweather', 12.1, 'normal');
smo248730.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248729.addModifier(smo248730);
smo248730.addClass('lyric lyric-0 lyric-hyphen');
smo248752v0ar.push(smo248729);
const smo248731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248731.setAttribute('id', 'smo248731');
const smo248732 = new VF.Annotation('-');
smo248732.setAttribute('id', 'smo248732');
smo248732.setFont('Merriweather', 12.1, 'normal');
smo248732.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248731.addModifier(smo248732);
smo248732.addClass('lyric lyric-0 lyric-hyphen');
smo248752v0ar.push(smo248731);
const smo248733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo248733.setAttribute('id', 'smo248733');
const smo248734 = new VF.Annotation('ло');
smo248734.setAttribute('id', 'smo248734');
smo248734.setFont('Merriweather', 12.1, 'normal');
smo248734.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248733.addModifier(smo248734);
smo248734.addClass('lyric lyric-0');
smo248752v0ar.push(smo248733);
const smo248735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248735.setAttribute('id', 'smo248735');
const smo248736 = new VF.Annotation('-');
smo248736.setAttribute('id', 'smo248736');
smo248736.setFont('Merriweather', 12.1, 'normal');
smo248736.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248735.addModifier(smo248736);
smo248736.addClass('lyric lyric-0 lyric-hyphen');
smo248752v0ar.push(smo248735);
smo248752v0.addTickables(smo248752v0ar)
fmtsmo24875232.joinVoices([smo248752v0]);
const fmtsmo24972232 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo249722v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249722v0ar = [];
const smo249701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249701.setAttribute('id', 'smo249701');
smo249722v0ar.push(smo249701);
const smo249702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249702.setAttribute('id', 'smo249702');
const  smo259365 = new VF.Articulation('ao').setPosition(3);
smo249702.addModifier(smo259365, 0);
smo249722v0ar.push(smo249702);
const smo249704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249704.setAttribute('id', 'smo249704');
smo249722v0ar.push(smo249704);
const smo249705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249705.setAttribute('id', 'smo249705');
const  smo259366 = new VF.Articulation('ao').setPosition(3);
smo249705.addModifier(smo259366, 0);
smo249722v0ar.push(smo249705);
smo249722v0.addTickables(smo249722v0ar)
fmtsmo24972232.joinVoices([smo249722v0]);
const fmtsmo25068432 = new VF.Formatter();
//
// voices and notes for stave 2 32
const smo250684v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250684v0ar = [];
const smo250668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo250668.setAttribute('id', 'smo250668');
smo250684v0ar.push(smo250668);
smo250684v0.addTickables(smo250684v0ar)
fmtsmo25068432.joinVoices([smo250684v0]);
const fmtsmo25164832 = new VF.Formatter();
//
// voices and notes for stave 3 32
const smo251648v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251648v0ar = [];
const smo251627 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo251627.setAttribute('id', 'smo251627');
const  smo259367 = new VF.Articulation('ao').setPosition(3);
smo251627.addModifier(smo259367, 0);
smo251648v0ar.push(smo251627);
const smo251629 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251629.setAttribute('id', 'smo251629');
smo251648v0ar.push(smo251629);
const smo251630 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo251630.setAttribute('id', 'smo251630');
const  smo259368 = new VF.Articulation('ao').setPosition(3);
smo251630.addModifier(smo259368, 0);
smo251648v0ar.push(smo251630);
const smo251632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251632.setAttribute('id', 'smo251632');
smo251648v0ar.push(smo251632);
smo251648v0.addTickables(smo251648v0ar)
fmtsmo25164832.joinVoices([smo251648v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
const dirsmo258551 = smo248729.getStemDirection();
smo248729.setStemDirection(dirsmo258551);
smo248731.setStemDirection(dirsmo258551);
const smo258551 = new VF.Beam([smo248729,smo248731]);
 
// formatting measures in staff group smo251978
fmtsmo24875232.format([smo248752v0,smo249722v0,smo250684v0,smo251648v0], 173);
const stavesmo248752 = new VF.Stave(55, 627, 248);
stavesmo248752.setAttribute('id', 'stavesmo248752');
stavesmo248752.setBegBarType(1);
stavesmo248752.addClef('treble');
const keysmo248752 = new VF.KeySignature('F');
keysmo248752.addToStave(stavesmo248752);
stavesmo248752.setContext(context);
stavesmo248752.draw();
smo248752v0.draw(context, stavesmo248752);
smo258551.setContext(context);
smo258551.draw();
const stavesmo249722 = new VF.Stave(55, 730, 248);
stavesmo249722.setAttribute('id', 'stavesmo249722');
stavesmo249722.setBegBarType(1);
stavesmo249722.addClef('treble');
const keysmo249722 = new VF.KeySignature('F');
keysmo249722.addToStave(stavesmo249722);
stavesmo249722.setContext(context);
stavesmo249722.draw();
smo249722v0.draw(context, stavesmo249722);
const stavesmo250684 = new VF.Stave(55, 813, 248);
stavesmo250684.setAttribute('id', 'stavesmo250684');
stavesmo250684.setBegBarType(1);
stavesmo250684.addClef('treble');
const keysmo250684 = new VF.KeySignature('F');
keysmo250684.addToStave(stavesmo250684);
stavesmo250684.setContext(context);
stavesmo250684.draw();
smo250684v0.draw(context, stavesmo250684);
const stavesmo251648 = new VF.Stave(55, 922, 248);
stavesmo251648.setAttribute('id', 'stavesmo251648');
stavesmo251648.setBegBarType(1);
stavesmo251648.addClef('bass');
const keysmo251648 = new VF.KeySignature('F');
keysmo251648.addToStave(stavesmo251648);
stavesmo251648.setContext(context);
stavesmo251648.draw();
smo251648v0.draw(context, stavesmo251648);
const leftsmo251978stavesmo2487523 = new VF.StaveConnector(stavesmo248752, stavesmo251648).setType(1);
leftsmo251978stavesmo2487523.setContext(context).draw();
const fmtsmo24877533 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo248775v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248775v0ar = [];
const smo248753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248753.setAttribute('id', 'smo248753');
const smo248754 = new VF.Annotation('вей');
smo248754.setAttribute('id', 'smo248754');
smo248754.setFont('Merriweather', 12.1, 'normal');
smo248754.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248753.addModifier(smo248754);
smo248754.addClass('lyric lyric-0');
smo248775v0ar.push(smo248753);
const smo248755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo248755.setAttribute('id', 'smo248755');
const smo248756 = new VF.Annotation('-');
smo248756.setAttribute('id', 'smo248756');
smo248756.setFont('Merriweather', 12.1, 'normal');
smo248756.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248755.addModifier(smo248756);
smo248756.addClass('lyric lyric-0 lyric-hyphen');
smo248775v0ar.push(smo248755);
const smo248757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo248757.setAttribute('id', 'smo248757');
const smo248758 = new VF.Annotation('-');
smo248758.setAttribute('id', 'smo248758');
smo248758.setFont('Merriweather', 12.1, 'normal');
smo248758.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248757.addModifier(smo248758);
smo248758.addClass('lyric lyric-0 lyric-hyphen');
smo248775v0ar.push(smo248757);
const smo248759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248759.setAttribute('id', 'smo248759');
smo248775v0ar.push(smo248759);
smo248775v0.addTickables(smo248775v0ar)
fmtsmo24877533.joinVoices([smo248775v0]);
const fmtsmo24974233 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo249742v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249742v0ar = [];
const smo249723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249723.setAttribute('id', 'smo249723');
smo249742v0ar.push(smo249723);
const smo249724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo249724.setAttribute('id', 'smo249724');
smo249742v0ar.push(smo249724);
const smo249725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249725.setAttribute('id', 'smo249725');
smo249742v0ar.push(smo249725);
const smo249726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo249726.setAttribute('id', 'smo249726');
smo249742v0ar.push(smo249726);
smo249742v0.addTickables(smo249742v0ar)
fmtsmo24974233.joinVoices([smo249742v0]);
const fmtsmo25070133 = new VF.Formatter();
//
// voices and notes for stave 2 33
const smo250701v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250701v0ar = [];
const smo250685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo250685.setAttribute('id', 'smo250685');
smo250701v0ar.push(smo250685);
smo250701v0.addTickables(smo250701v0ar)
fmtsmo25070133.joinVoices([smo250701v0]);
const fmtsmo25166833 = new VF.Formatter();
//
// voices and notes for stave 3 33
const smo251668v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251668v0ar = [];
const smo251649 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251649.setAttribute('id', 'smo251649');
smo251668v0ar.push(smo251649);
const smo251650 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251650.setAttribute('id', 'smo251650');
smo251668v0ar.push(smo251650);
const smo251651 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251651.setAttribute('id', 'smo251651');
smo251668v0ar.push(smo251651);
const smo251652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251652.setAttribute('id', 'smo251652');
smo251668v0ar.push(smo251652);
smo251668v0.addTickables(smo251668v0ar)
fmtsmo25166833.joinVoices([smo251668v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24877533.format([smo248775v0,smo249742v0,smo250701v0,smo251668v0], 144);
const stavesmo248775 = new VF.Stave(303, 627, 158);
stavesmo248775.setAttribute('id', 'stavesmo248775');
stavesmo248775.setBegBarType(VF.Barline.type.NONE);
stavesmo248775.setContext(context);
stavesmo248775.draw();
smo248775v0.draw(context, stavesmo248775);
const stavesmo249742 = new VF.Stave(303, 730, 158);
stavesmo249742.setAttribute('id', 'stavesmo249742');
stavesmo249742.setBegBarType(VF.Barline.type.NONE);
stavesmo249742.setContext(context);
stavesmo249742.draw();
smo249742v0.draw(context, stavesmo249742);
const stavesmo250701 = new VF.Stave(303, 813, 158);
stavesmo250701.setAttribute('id', 'stavesmo250701');
stavesmo250701.setBegBarType(VF.Barline.type.NONE);
stavesmo250701.setContext(context);
stavesmo250701.draw();
smo250701v0.draw(context, stavesmo250701);
const stavesmo251668 = new VF.Stave(303, 922, 158);
stavesmo251668.setAttribute('id', 'stavesmo251668');
stavesmo251668.setBegBarType(VF.Barline.type.NONE);
stavesmo251668.setContext(context);
stavesmo251668.draw();
smo251668v0.draw(context, stavesmo251668);
const fmtsmo24880234 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo248802v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248802v0ar = [];
const smo248776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248776.setAttribute('id', 'smo248776');
const smo248778 = new VF.Ornament('mordent');
smo248776.addModifier(smo248778, 0);
const smo248777 = new VF.Annotation('Со');
smo248777.setAttribute('id', 'smo248777');
smo248777.setFont('Merriweather', 12.1, 'normal');
smo248777.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248776.addModifier(smo248777);
smo248777.addClass('lyric lyric-0');
smo248802v0ar.push(smo248776);
const smo248779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248779.setAttribute('id', 'smo248779');
const smo248780 = new VF.Annotation('-');
smo248780.setAttribute('id', 'smo248780');
smo248780.setFont('Merriweather', 12.1, 'normal');
smo248780.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248779.addModifier(smo248780);
smo248780.addClass('lyric lyric-0 lyric-hyphen');
smo248802v0ar.push(smo248779);
const smo248781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248781.setAttribute('id', 'smo248781');
const smo248782 = new VF.Annotation('-');
smo248782.setAttribute('id', 'smo248782');
smo248782.setFont('Merriweather', 12.1, 'normal');
smo248782.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248781.addModifier(smo248782);
smo248782.addClass('lyric lyric-0 lyric-hyphen');
smo248802v0ar.push(smo248781);
const smo248783 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo248783.setAttribute('id', 'smo248783');
const smo248784 = new VF.Annotation('ло');
smo248784.setAttribute('id', 'smo248784');
smo248784.setFont('Merriweather', 12.1, 'normal');
smo248784.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248783.addModifier(smo248784);
smo248784.addClass('lyric lyric-0');
smo248802v0ar.push(smo248783);
const smo248785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248785.setAttribute('id', 'smo248785');
const smo248786 = new VF.Annotation('-');
smo248786.setAttribute('id', 'smo248786');
smo248786.setFont('Merriweather', 12.1, 'normal');
smo248786.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248785.addModifier(smo248786);
smo248786.addClass('lyric lyric-0 lyric-hyphen');
smo248802v0ar.push(smo248785);
smo248802v0.addTickables(smo248802v0ar)
fmtsmo24880234.joinVoices([smo248802v0]);
const fmtsmo24976234 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo249762v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249762v0ar = [];
const smo249743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249743.setAttribute('id', 'smo249743');
smo249762v0ar.push(smo249743);
const smo249744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249744.setAttribute('id', 'smo249744');
smo249762v0ar.push(smo249744);
const smo249745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249745.setAttribute('id', 'smo249745');
smo249762v0ar.push(smo249745);
const smo249746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249746.setAttribute('id', 'smo249746');
smo249762v0ar.push(smo249746);
smo249762v0.addTickables(smo249762v0ar)
fmtsmo24976234.joinVoices([smo249762v0]);
const fmtsmo25071834 = new VF.Formatter();
//
// voices and notes for stave 2 34
const smo250718v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250718v0ar = [];
const smo250702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo250702.setAttribute('id', 'smo250702');
smo250718v0ar.push(smo250702);
smo250718v0.addTickables(smo250718v0ar)
fmtsmo25071834.joinVoices([smo250718v0]);
const fmtsmo25168834 = new VF.Formatter();
//
// voices and notes for stave 3 34
const smo251688v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251688v0ar = [];
const smo251669 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo251669.setAttribute('id', 'smo251669');
smo251688v0ar.push(smo251669);
const smo251670 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251670.setAttribute('id', 'smo251670');
smo251688v0ar.push(smo251670);
const smo251671 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo251671.setAttribute('id', 'smo251671');
smo251688v0ar.push(smo251671);
const smo251672 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251672.setAttribute('id', 'smo251672');
smo251688v0ar.push(smo251672);
smo251688v0.addTickables(smo251688v0ar)
fmtsmo25168834.joinVoices([smo251688v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
const dirsmo258568 = smo248779.getStemDirection();
smo248779.setStemDirection(dirsmo258568);
smo248781.setStemDirection(dirsmo258568);
const smo258568 = new VF.Beam([smo248779,smo248781]);
 
// formatting measures in staff group smo251978
fmtsmo24880234.format([smo248802v0,smo249762v0,smo250718v0,smo251688v0], 172);
const stavesmo248802 = new VF.Stave(461, 627, 186);
stavesmo248802.setAttribute('id', 'stavesmo248802');
stavesmo248802.setBegBarType(VF.Barline.type.NONE);
stavesmo248802.setContext(context);
stavesmo248802.draw();
smo248802v0.draw(context, stavesmo248802);
smo258568.setContext(context);
smo258568.draw();
const stavesmo249762 = new VF.Stave(461, 730, 186);
stavesmo249762.setAttribute('id', 'stavesmo249762');
stavesmo249762.setBegBarType(VF.Barline.type.NONE);
stavesmo249762.setContext(context);
stavesmo249762.draw();
smo249762v0.draw(context, stavesmo249762);
const stavesmo250718 = new VF.Stave(461, 813, 186);
stavesmo250718.setAttribute('id', 'stavesmo250718');
stavesmo250718.setBegBarType(VF.Barline.type.NONE);
stavesmo250718.setContext(context);
stavesmo250718.draw();
smo250718v0.draw(context, stavesmo250718);
const stavesmo251688 = new VF.Stave(461, 922, 186);
stavesmo251688.setAttribute('id', 'stavesmo251688');
stavesmo251688.setBegBarType(VF.Barline.type.NONE);
stavesmo251688.setContext(context);
stavesmo251688.draw();
smo251688v0.draw(context, stavesmo251688);
const fmtsmo24882435 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo248824v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248824v0ar = [];
const smo248803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248803.setAttribute('id', 'smo248803');
const smo248804 = new VF.Annotation('вей');
smo248804.setAttribute('id', 'smo248804');
smo248804.setFont('Merriweather', 12.1, 'normal');
smo248804.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248803.addModifier(smo248804);
smo248804.addClass('lyric lyric-0');
smo248824v0ar.push(smo248803);
const smo248805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
smo248805.setAttribute('id', 'smo248805');
const smo248806 = new VF.Annotation('-');
smo248806.setAttribute('id', 'smo248806');
smo248806.setFont('Merriweather', 12.1, 'normal');
smo248806.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248805.addModifier(smo248806);
smo248806.addClass('lyric lyric-0 lyric-hyphen');
smo248824v0ar.push(smo248805);
const smo248807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo248807.setAttribute('id', 'smo248807');
const smo248808 = new VF.Annotation('-');
smo248808.setAttribute('id', 'smo248808');
smo248808.setFont('Merriweather', 12.1, 'normal');
smo248808.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248807.addModifier(smo248808);
smo248808.addClass('lyric lyric-0 lyric-hyphen');
smo248824v0ar.push(smo248807);
smo248824v0.addTickables(smo248824v0ar)
fmtsmo24882435.joinVoices([smo248824v0]);
const fmtsmo24978235 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo249782v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249782v0ar = [];
const smo249763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249763.setAttribute('id', 'smo249763');
smo249782v0ar.push(smo249763);
const smo249764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo249764.setAttribute('id', 'smo249764');
smo249782v0ar.push(smo249764);
const smo249765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249765.setAttribute('id', 'smo249765');
smo249782v0ar.push(smo249765);
const smo249766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo249766.setAttribute('id', 'smo249766');
smo249782v0ar.push(smo249766);
smo249782v0.addTickables(smo249782v0ar)
fmtsmo24978235.joinVoices([smo249782v0]);
const fmtsmo25073535 = new VF.Formatter();
//
// voices and notes for stave 2 35
const smo250735v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250735v0ar = [];
const smo250719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo250719.setAttribute('id', 'smo250719');
smo250735v0ar.push(smo250719);
smo250735v0.addTickables(smo250735v0ar)
fmtsmo25073535.joinVoices([smo250735v0]);
const fmtsmo25170835 = new VF.Formatter();
//
// voices and notes for stave 3 35
const smo251708v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251708v0ar = [];
const smo251689 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251689.setAttribute('id', 'smo251689');
smo251708v0ar.push(smo251689);
const smo251690 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251690.setAttribute('id', 'smo251690');
smo251708v0ar.push(smo251690);
const smo251691 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251691.setAttribute('id', 'smo251691');
smo251708v0ar.push(smo251691);
const smo251692 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251692.setAttribute('id', 'smo251692');
smo251708v0ar.push(smo251692);
smo251708v0.addTickables(smo251708v0ar)
fmtsmo25170835.joinVoices([smo251708v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24882435.format([smo248824v0,smo249782v0,smo250735v0,smo251708v0], 136);
const stavesmo248824 = new VF.Stave(647, 627, 150);
stavesmo248824.setAttribute('id', 'stavesmo248824');
stavesmo248824.setBegBarType(VF.Barline.type.NONE);
stavesmo248824.setContext(context);
stavesmo248824.draw();
smo248824v0.draw(context, stavesmo248824);
const stavesmo249782 = new VF.Stave(647, 730, 150);
stavesmo249782.setAttribute('id', 'stavesmo249782');
stavesmo249782.setBegBarType(VF.Barline.type.NONE);
stavesmo249782.setContext(context);
stavesmo249782.draw();
smo249782v0.draw(context, stavesmo249782);
const stavesmo250735 = new VF.Stave(647, 813, 150);
stavesmo250735.setAttribute('id', 'stavesmo250735');
stavesmo250735.setBegBarType(VF.Barline.type.NONE);
stavesmo250735.setContext(context);
stavesmo250735.draw();
smo250735v0.draw(context, stavesmo250735);
const stavesmo251708 = new VF.Stave(647, 922, 150);
stavesmo251708.setAttribute('id', 'stavesmo251708');
stavesmo251708.setBegBarType(VF.Barline.type.NONE);
stavesmo251708.setContext(context);
stavesmo251708.draw();
smo251708v0.draw(context, stavesmo251708);
const fmtsmo24885036 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo248850v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248850v0ar = [];
const smo248825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248825.setAttribute('id', 'smo248825');
const smo248826 = new VF.Annotation('го');
smo248826.setAttribute('id', 'smo248826');
smo248826.setFont('Merriweather', 12.1, 'normal');
smo248826.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248825.addModifier(smo248826);
smo248826.addClass('lyric lyric-0');
smo248850v0ar.push(smo248825);
const smo248827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248827.setAttribute('id', 'smo248827');
const smo248828 = new VF.Annotation('-');
smo248828.setAttribute('id', 'smo248828');
smo248828.setFont('Merriweather', 12.1, 'normal');
smo248828.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248827.addModifier(smo248828);
smo248828.addClass('lyric lyric-0 lyric-hyphen');
smo248850v0ar.push(smo248827);
const smo248829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248829.setAttribute('id', 'smo248829');
const smo248830 = new VF.Annotation('-');
smo248830.setAttribute('id', 'smo248830');
smo248830.setFont('Merriweather', 12.1, 'normal');
smo248830.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248829.addModifier(smo248830);
smo248830.addClass('lyric lyric-0 lyric-hyphen');
smo248850v0ar.push(smo248829);
const smo248831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo248831.setAttribute('id', 'smo248831');
const smo2488310acc = new VF.Accidental('#');
smo248831.addModifier(smo2488310acc, 0);
const smo248832 = new VF.Annotation('-');
smo248832.setAttribute('id', 'smo248832');
smo248832.setFont('Merriweather', 12.1, 'normal');
smo248832.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248831.addModifier(smo248832);
smo248832.addClass('lyric lyric-0 lyric-hyphen');
smo248850v0ar.push(smo248831);
const smo248833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248833.setAttribute('id', 'smo248833');
const smo248834 = new VF.Annotation('ло');
smo248834.setAttribute('id', 'smo248834');
smo248834.setFont('Merriweather', 12.1, 'normal');
smo248834.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248833.addModifier(smo248834);
smo248834.addClass('lyric lyric-0 lyric-hyphen');
smo248850v0ar.push(smo248833);
smo248850v0.addTickables(smo248850v0ar)
fmtsmo24885036.joinVoices([smo248850v0]);
const fmtsmo24980236 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo249802v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249802v0ar = [];
const smo249783 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249783.setAttribute('id', 'smo249783');
smo249802v0ar.push(smo249783);
const smo249784 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo249784.setAttribute('id', 'smo249784');
smo249802v0ar.push(smo249784);
const smo249785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249785.setAttribute('id', 'smo249785');
smo249802v0ar.push(smo249785);
const smo249786 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo249786.setAttribute('id', 'smo249786');
smo249802v0ar.push(smo249786);
smo249802v0.addTickables(smo249802v0ar)
fmtsmo24980236.joinVoices([smo249802v0]);
const fmtsmo25075336 = new VF.Formatter();
//
// voices and notes for stave 2 36
const smo250753v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250753v0ar = [];
const smo250736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo250736.setAttribute('id', 'smo250736');
smo250753v0ar.push(smo250736);
const smo250737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250737.setAttribute('id', 'smo250737');
smo250753v0ar.push(smo250737);
smo250753v0.addTickables(smo250753v0ar)
fmtsmo25075336.joinVoices([smo250753v0]);
const fmtsmo25172836 = new VF.Formatter();
//
// voices and notes for stave 3 36
const smo251728v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251728v0ar = [];
const smo251709 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo251709.setAttribute('id', 'smo251709');
smo251728v0ar.push(smo251709);
const smo251710 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251710.setAttribute('id', 'smo251710');
smo251728v0ar.push(smo251710);
const smo251711 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251711.setAttribute('id', 'smo251711');
smo251728v0ar.push(smo251711);
const smo251712 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251712.setAttribute('id', 'smo251712');
smo251728v0ar.push(smo251712);
smo251728v0.addTickables(smo251728v0ar)
fmtsmo25172836.joinVoices([smo251728v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
const dirsmo258585 = smo248827.getStemDirection();
smo248827.setStemDirection(dirsmo258585);
smo248829.setStemDirection(dirsmo258585);
const smo258585 = new VF.Beam([smo248827,smo248829]);
 
// formatting measures in staff group smo251978
fmtsmo24885036.format([smo248850v0,smo249802v0,smo250753v0,smo251728v0], 174);
const stavesmo248850 = new VF.Stave(797, 627, 188);
stavesmo248850.setAttribute('id', 'stavesmo248850');
stavesmo248850.setBegBarType(VF.Barline.type.NONE);
stavesmo248850.setContext(context);
stavesmo248850.draw();
smo248850v0.draw(context, stavesmo248850);
smo258585.setContext(context);
smo258585.draw();
const stavesmo249802 = new VF.Stave(797, 730, 188);
stavesmo249802.setAttribute('id', 'stavesmo249802');
stavesmo249802.setBegBarType(VF.Barline.type.NONE);
stavesmo249802.setContext(context);
stavesmo249802.draw();
smo249802v0.draw(context, stavesmo249802);
const stavesmo250753 = new VF.Stave(797, 813, 188);
stavesmo250753.setAttribute('id', 'stavesmo250753');
stavesmo250753.setBegBarType(VF.Barline.type.NONE);
stavesmo250753.setContext(context);
stavesmo250753.draw();
smo250753v0.draw(context, stavesmo250753);
const stavesmo251728 = new VF.Stave(797, 922, 188);
stavesmo251728.setAttribute('id', 'stavesmo251728');
stavesmo251728.setBegBarType(VF.Barline.type.NONE);
stavesmo251728.setContext(context);
stavesmo251728.draw();
smo251728v0.draw(context, stavesmo251728);
const fmtsmo24887237 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo248872v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248872v0ar = [];
const smo248851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo248851.setAttribute('id', 'smo248851');
const smo248852 = new VF.Annotation('си');
smo248852.setAttribute('id', 'smo248852');
smo248852.setFont('Merriweather', 12.1, 'normal');
smo248852.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248851.addModifier(smo248852);
smo248852.addClass('lyric lyric-0 lyric-hyphen');
smo248872v0ar.push(smo248851);
const smo248853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248853.setAttribute('id', 'smo248853');
const smo248854 = new VF.Annotation('ст');
smo248854.setAttribute('id', 'smo248854');
smo248854.setFont('Merriweather', 12.1, 'normal');
smo248854.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248853.addModifier(smo248854);
smo248854.addClass('lyric lyric-0');
smo248872v0ar.push(smo248853);
const smo248855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248855.setAttribute('id', 'smo248855');
const smo248856 = new VF.Annotation('ый');
smo248856.setAttribute('id', 'smo248856');
smo248856.setFont('Merriweather', 12.1, 'normal');
smo248856.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248855.addModifier(smo248856);
smo248856.addClass('lyric lyric-0');
smo248872v0ar.push(smo248855);
smo248872v0.addTickables(smo248872v0ar)
fmtsmo24887237.joinVoices([smo248872v0]);
const fmtsmo24982037 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo249820v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249820v0ar = [];
const smo249803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo249803.setAttribute('id', 'smo249803');
smo249820v0ar.push(smo249803);
const smo249804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo249804.setAttribute('id', 'smo249804');
smo249820v0ar.push(smo249804);
smo249820v0.addTickables(smo249820v0ar)
fmtsmo24982037.joinVoices([smo249820v0]);
const fmtsmo25077137 = new VF.Formatter();
//
// voices and notes for stave 2 37
const smo250771v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250771v0ar = [];
const smo250754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo250754.setAttribute('id', 'smo250754');
smo250771v0ar.push(smo250754);
const smo250755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250755.setAttribute('id', 'smo250755');
smo250771v0ar.push(smo250755);
smo250771v0.addTickables(smo250771v0ar)
fmtsmo25077137.joinVoices([smo250771v0]);
const fmtsmo25174637 = new VF.Formatter();
//
// voices and notes for stave 3 37
const smo251746v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251746v0ar = [];
const smo251729 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo251729.setAttribute('id', 'smo251729');
smo251746v0ar.push(smo251729);
const smo251730 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo251730.setAttribute('id', 'smo251730');
smo251746v0ar.push(smo251730);
smo251746v0.addTickables(smo251746v0ar)
fmtsmo25174637.joinVoices([smo251746v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24887237.format([smo248872v0,smo249820v0,smo250771v0,smo251746v0], 143);
const stavesmo248872 = new VF.Stave(985, 627, 157);
stavesmo248872.setAttribute('id', 'stavesmo248872');
stavesmo248872.setBegBarType(VF.Barline.type.NONE);
stavesmo248872.setContext(context);
stavesmo248872.draw();
smo248872v0.draw(context, stavesmo248872);
const stavesmo249820 = new VF.Stave(985, 730, 157);
stavesmo249820.setAttribute('id', 'stavesmo249820');
stavesmo249820.setBegBarType(VF.Barline.type.NONE);
stavesmo249820.setContext(context);
stavesmo249820.draw();
smo249820v0.draw(context, stavesmo249820);
const stavesmo250771 = new VF.Stave(985, 813, 157);
stavesmo250771.setAttribute('id', 'stavesmo250771');
stavesmo250771.setBegBarType(VF.Barline.type.NONE);
stavesmo250771.setContext(context);
stavesmo250771.draw();
smo250771v0.draw(context, stavesmo250771);
const stavesmo251746 = new VF.Stave(985, 922, 157);
stavesmo251746.setAttribute('id', 'stavesmo251746');
stavesmo251746.setBegBarType(VF.Barline.type.NONE);
stavesmo251746.setContext(context);
stavesmo251746.draw();
smo251746v0.draw(context, stavesmo251746);
const fmtsmo24889538 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo248895v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248895v0ar = [];
const smo248873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo248873.setAttribute('id', 'smo248873');
smo248873.addModifier(new VF.Dot(), 0);
const  smo259417 = new VF.Articulation('a@a').setPosition(3);
smo248873.addModifier(smo259417, 0);
const smo248874 = new VF.Annotation('со');
smo248874.setAttribute('id', 'smo248874');
smo248874.setFont('Merriweather', 12.1, 'normal');
smo248874.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248873.addModifier(smo248874);
smo248874.addClass('lyric lyric-0');
smo248895v0ar.push(smo248873);
const smo248876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo248876.setAttribute('id', 'smo248876');
const smo2488760acc = new VF.Accidental('#');
smo248876.addModifier(smo2488760acc, 0);
const smo248877 = new VF.Annotation('-');
smo248877.setAttribute('id', 'smo248877');
smo248877.setFont('Merriweather', 12.1, 'normal');
smo248877.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248876.addModifier(smo248877);
smo248877.addClass('lyric lyric-0 lyric-hyphen');
smo248895v0ar.push(smo248876);
const smo248878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo248878.setAttribute('id', 'smo248878');
smo248895v0ar.push(smo248878);
smo248895v0.addTickables(smo248895v0ar)
fmtsmo24889538.joinVoices([smo248895v0]);
const fmtsmo24983838 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo249838v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249838v0ar = [];
const smo249821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249821.setAttribute('id', 'smo249821');
smo249821.addModifier(new VF.Dot(), 0);
smo249838v0ar.push(smo249821);
const smo249822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249822.setAttribute('id', 'smo249822');
smo249838v0ar.push(smo249822);
smo249838v0.addTickables(smo249838v0ar)
fmtsmo24983838.joinVoices([smo249838v0]);
const fmtsmo25078938 = new VF.Formatter();
//
// voices and notes for stave 2 38
const smo250789v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250789v0ar = [];
const smo250772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo250772.setAttribute('id', 'smo250772');
smo250772.addModifier(new VF.Dot(), 0);
smo250789v0ar.push(smo250772);
const smo250773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250773.setAttribute('id', 'smo250773');
smo250789v0ar.push(smo250773);
smo250789v0.addTickables(smo250789v0ar)
fmtsmo25078938.joinVoices([smo250789v0]);
const fmtsmo25176438 = new VF.Formatter();
//
// voices and notes for stave 3 38
const smo251764v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251764v0ar = [];
const smo251747 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251747.setAttribute('id', 'smo251747');
smo251747.addModifier(new VF.Dot(), 0);
smo251764v0ar.push(smo251747);
const smo251748 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251748.setAttribute('id', 'smo251748');
smo251764v0ar.push(smo251748);
smo251764v0.addTickables(smo251764v0ar)
fmtsmo25176438.joinVoices([smo251764v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
const dirsmo258602 = smo248876.getStemDirection();
smo248876.setStemDirection(dirsmo258602);
smo248878.setStemDirection(dirsmo258602);
const smo258602 = new VF.Beam([smo248876,smo248878]);
 
// formatting measures in staff group smo251978
fmtsmo24889538.format([smo248895v0,smo249838v0,smo250789v0,smo251764v0], 100);
const stavesmo248895 = new VF.Stave(1142, 627, 114);
stavesmo248895.setAttribute('id', 'stavesmo248895');
stavesmo248895.setBegBarType(VF.Barline.type.NONE);
stavesmo248895.setContext(context);
stavesmo248895.draw();
smo248895v0.draw(context, stavesmo248895);
smo258602.setContext(context);
smo258602.draw();
const stavesmo249838 = new VF.Stave(1142, 730, 114);
stavesmo249838.setAttribute('id', 'stavesmo249838');
stavesmo249838.setBegBarType(VF.Barline.type.NONE);
stavesmo249838.setContext(context);
stavesmo249838.draw();
smo249838v0.draw(context, stavesmo249838);
const stavesmo250789 = new VF.Stave(1142, 813, 114);
stavesmo250789.setAttribute('id', 'stavesmo250789');
stavesmo250789.setBegBarType(VF.Barline.type.NONE);
stavesmo250789.setContext(context);
stavesmo250789.draw();
smo250789v0.draw(context, stavesmo250789);
const stavesmo251764 = new VF.Stave(1142, 922, 114);
stavesmo251764.setAttribute('id', 'stavesmo251764');
stavesmo251764.setBegBarType(VF.Barline.type.NONE);
stavesmo251764.setContext(context);
stavesmo251764.draw();
smo251764v0.draw(context, stavesmo251764);
const fmtsmo24891539 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo248915v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248915v0ar = [];
const smo248896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo248896.setAttribute('id', 'smo248896');
smo248896.addModifier(new VF.Dot(), 0);
const smo248897 = new VF.Annotation('ло');
smo248897.setAttribute('id', 'smo248897');
smo248897.setFont('Merriweather', 12.1, 'normal');
smo248897.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248896.addModifier(smo248897);
smo248897.addClass('lyric lyric-0');
smo248915v0ar.push(smo248896);
const smo248898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248898.setAttribute('id', 'smo248898');
const smo248899 = new VF.Annotation('-');
smo248899.setAttribute('id', 'smo248899');
smo248899.setFont('Merriweather', 12.1, 'normal');
smo248899.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248898.addModifier(smo248899);
smo248899.addClass('lyric lyric-0 lyric-hyphen');
smo248915v0ar.push(smo248898);
smo248915v0.addTickables(smo248915v0ar)
fmtsmo24891539.joinVoices([smo248915v0]);
const fmtsmo24985739 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo249857v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249857v0ar = [];
const smo249839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249839.setAttribute('id', 'smo249839');
smo249857v0ar.push(smo249839);
const smo249840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249840.setAttribute('id', 'smo249840');
smo249857v0ar.push(smo249840);
const smo249841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249841.setAttribute('id', 'smo249841');
smo249857v0ar.push(smo249841);
smo249857v0.addTickables(smo249857v0ar)
fmtsmo24985739.joinVoices([smo249857v0]);
const fmtsmo25080839 = new VF.Formatter();
//
// voices and notes for stave 2 39
const smo250808v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250808v0ar = [];
const smo250790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250790.setAttribute('id', 'smo250790');
smo250808v0ar.push(smo250790);
const smo250791 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250791.setAttribute('id', 'smo250791');
smo250808v0ar.push(smo250791);
const smo250792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n"]}'))
smo250792.setAttribute('id', 'smo250792');
const smo2507920acc = new VF.Accidental('#');
smo250792.addModifier(smo2507920acc, 0);
smo250808v0ar.push(smo250792);
smo250808v0.addTickables(smo250808v0ar)
fmtsmo25080839.joinVoices([smo250808v0]);
const fmtsmo25178339 = new VF.Formatter();
//
// voices and notes for stave 3 39
const smo251783v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251783v0ar = [];
const smo251765 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251765.setAttribute('id', 'smo251765');
smo251783v0ar.push(smo251765);
const smo251766 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251766.setAttribute('id', 'smo251766');
smo251783v0ar.push(smo251766);
const smo251767 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo251767.setAttribute('id', 'smo251767');
smo251783v0ar.push(smo251767);
smo251783v0.addTickables(smo251783v0ar)
fmtsmo25178339.joinVoices([smo251783v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24891539.format([smo248915v0,smo249857v0,smo250808v0,smo251783v0], 106);
const stavesmo248915 = new VF.Stave(1256, 627, 120);
stavesmo248915.setAttribute('id', 'stavesmo248915');
stavesmo248915.setBegBarType(VF.Barline.type.NONE);
stavesmo248915.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":144}'), -1 * 0);
stavesmo248915.setContext(context);
stavesmo248915.draw();
smo248915v0.draw(context, stavesmo248915);
const stavesmo249857 = new VF.Stave(1256, 730, 120);
stavesmo249857.setAttribute('id', 'stavesmo249857');
stavesmo249857.setBegBarType(VF.Barline.type.NONE);
stavesmo249857.setContext(context);
stavesmo249857.draw();
smo249857v0.draw(context, stavesmo249857);
const stavesmo250808 = new VF.Stave(1256, 813, 120);
stavesmo250808.setAttribute('id', 'stavesmo250808');
stavesmo250808.setBegBarType(VF.Barline.type.NONE);
stavesmo250808.setContext(context);
stavesmo250808.draw();
smo250808v0.draw(context, stavesmo250808);
const stavesmo251783 = new VF.Stave(1256, 922, 120);
stavesmo251783.setAttribute('id', 'stavesmo251783');
stavesmo251783.setBegBarType(VF.Barline.type.NONE);
stavesmo251783.setContext(context);
stavesmo251783.draw();
smo251783v0.draw(context, stavesmo251783);
const rightsmo251978stavesmo2489153 = new VF.StaveConnector(stavesmo248915, stavesmo251783).setType(0);
rightsmo251978stavesmo2489153.setContext(context).draw();
const fmtsmo24893540 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo248935v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248935v0ar = [];
const smo248916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248916.setAttribute('id', 'smo248916');
const smo248917 = new VF.Annotation('вей');
smo248917.setAttribute('id', 'smo248917');
smo248917.setFont('Merriweather', 12.1, 'normal');
smo248917.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248916.addModifier(smo248917);
smo248917.addClass('lyric lyric-0');
smo248935v0ar.push(smo248916);
const smo248918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248918.setAttribute('id', 'smo248918');
smo248935v0ar.push(smo248918);
const smo248919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248919.setAttribute('id', 'smo248919');
smo248935v0ar.push(smo248919);
smo248935v0.addTickables(smo248935v0ar)
fmtsmo24893540.joinVoices([smo248935v0]);
const fmtsmo24987940 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo249879v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249879v0ar = [];
const smo249858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo249859 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["an/4"],"slash":false}'))
smo249859.setAttribute('id', 'smo249859');
const ggrpsmo249858 = new VF.GraceNoteGroup([smo249859]);
ggrpsmo249858.beamNotes();
smo249858.addModifier(ggrpsmo249858, 0);
smo249858.setAttribute('id', 'smo249858');
smo249879v0ar.push(smo249858);
const smo249860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249860.setAttribute('id', 'smo249860');
smo249879v0ar.push(smo249860);
const smo249861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
const smo249862 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["dn/5"],"slash":false}'))
smo249862.setAttribute('id', 'smo249862');
const ggrpsmo249861 = new VF.GraceNoteGroup([smo249862]);
ggrpsmo249861.beamNotes();
smo249861.addModifier(ggrpsmo249861, 0);
smo249861.setAttribute('id', 'smo249861');
smo249879v0ar.push(smo249861);
const smo249863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249863.setAttribute('id', 'smo249863');
smo249879v0ar.push(smo249863);
smo249879v0.addTickables(smo249879v0ar)
fmtsmo24987940.joinVoices([smo249879v0]);
const fmtsmo25082840 = new VF.Formatter();
//
// voices and notes for stave 2 40
const smo250828v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250828v0ar = [];
const smo250809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250809.setAttribute('id', 'smo250809');
smo250828v0ar.push(smo250809);
const smo250810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250810.setAttribute('id', 'smo250810');
smo250828v0ar.push(smo250810);
const smo250811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250811.setAttribute('id', 'smo250811');
smo250828v0ar.push(smo250811);
const smo250812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250812.setAttribute('id', 'smo250812');
smo250828v0ar.push(smo250812);
smo250828v0.addTickables(smo250828v0ar)
fmtsmo25082840.joinVoices([smo250828v0]);
const fmtsmo25180340 = new VF.Formatter();
//
// voices and notes for stave 3 40
const smo251803v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251803v0ar = [];
const smo251784 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251784.setAttribute('id', 'smo251784');
smo251803v0ar.push(smo251784);
const smo251785 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251785.setAttribute('id', 'smo251785');
smo251803v0ar.push(smo251785);
const smo251786 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251786.setAttribute('id', 'smo251786');
smo251803v0ar.push(smo251786);
const smo251787 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251787.setAttribute('id', 'smo251787');
smo251803v0ar.push(smo251787);
smo251803v0.addTickables(smo251803v0ar)
fmtsmo25180340.joinVoices([smo251803v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24893540.format([smo248935v0,smo249879v0,smo250828v0,smo251803v0], 170);
const stavesmo248935 = new VF.Stave(55, 1040, 244);
stavesmo248935.setAttribute('id', 'stavesmo248935');
stavesmo248935.setBegBarType(1);
stavesmo248935.addClef('treble');
const keysmo248935 = new VF.KeySignature('F');
keysmo248935.addToStave(stavesmo248935);
stavesmo248935.setContext(context);
stavesmo248935.draw();
smo248935v0.draw(context, stavesmo248935);
const stavesmo249879 = new VF.Stave(55, 1165, 244);
stavesmo249879.setAttribute('id', 'stavesmo249879');
stavesmo249879.setBegBarType(1);
stavesmo249879.addClef('treble');
const keysmo249879 = new VF.KeySignature('F');
keysmo249879.addToStave(stavesmo249879);
stavesmo249879.setContext(context);
stavesmo249879.draw();
smo249879v0.draw(context, stavesmo249879);
const stavesmo250828 = new VF.Stave(55, 1253, 244);
stavesmo250828.setAttribute('id', 'stavesmo250828');
stavesmo250828.setBegBarType(1);
stavesmo250828.addClef('treble');
const keysmo250828 = new VF.KeySignature('F');
keysmo250828.addToStave(stavesmo250828);
stavesmo250828.setContext(context);
stavesmo250828.draw();
smo250828v0.draw(context, stavesmo250828);
const stavesmo251803 = new VF.Stave(55, 1366, 244);
stavesmo251803.setAttribute('id', 'stavesmo251803');
stavesmo251803.setBegBarType(1);
stavesmo251803.addClef('bass');
const keysmo251803 = new VF.KeySignature('F');
keysmo251803.addToStave(stavesmo251803);
stavesmo251803.setContext(context);
stavesmo251803.draw();
smo251803v0.draw(context, stavesmo251803);
const leftsmo251978stavesmo2489353 = new VF.StaveConnector(stavesmo248935, stavesmo251803).setType(1);
leftsmo251978stavesmo2489353.setContext(context).draw();
const fmtsmo24895241 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo248952v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248952v0ar = [];
const smo248936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248936.setAttribute('id', 'smo248936');
smo248952v0ar.push(smo248936);
smo248952v0.addTickables(smo248952v0ar)
fmtsmo24895241.joinVoices([smo248952v0]);
const fmtsmo24989941 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo249899v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249899v0ar = [];
const smo249880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
const smo249881 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["fn/5"],"slash":false}'))
smo249881.setAttribute('id', 'smo249881');
const ggrpsmo249880 = new VF.GraceNoteGroup([smo249881]);
ggrpsmo249880.beamNotes();
smo249880.addModifier(ggrpsmo249880, 0);
smo249880.setAttribute('id', 'smo249880');
smo249880.addModifier(new VF.Dot(), 0);
smo249899v0ar.push(smo249880);
const smo249882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo249882.setAttribute('id', 'smo249882');
smo249899v0ar.push(smo249882);
const smo249883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo249883.setAttribute('id', 'smo249883');
smo249899v0ar.push(smo249883);
smo249899v0.addTickables(smo249899v0ar)
fmtsmo24989941.joinVoices([smo249899v0]);
const fmtsmo25084841 = new VF.Formatter();
//
// voices and notes for stave 2 41
const smo250848v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250848v0ar = [];
const smo250829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250829.setAttribute('id', 'smo250829');
smo250848v0ar.push(smo250829);
const smo250830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250830.setAttribute('id', 'smo250830');
smo250848v0ar.push(smo250830);
const smo250831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250831.setAttribute('id', 'smo250831');
smo250848v0ar.push(smo250831);
const smo250832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250832.setAttribute('id', 'smo250832');
smo250848v0ar.push(smo250832);
smo250848v0.addTickables(smo250848v0ar)
fmtsmo25084841.joinVoices([smo250848v0]);
const fmtsmo25182341 = new VF.Formatter();
//
// voices and notes for stave 3 41
const smo251823v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251823v0ar = [];
const smo251804 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251804.setAttribute('id', 'smo251804');
smo251823v0ar.push(smo251804);
const smo251805 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251805.setAttribute('id', 'smo251805');
smo251823v0ar.push(smo251805);
const smo251806 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251806.setAttribute('id', 'smo251806');
smo251823v0ar.push(smo251806);
const smo251807 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251807.setAttribute('id', 'smo251807');
smo251823v0ar.push(smo251807);
smo251823v0.addTickables(smo251823v0ar)
fmtsmo25182341.joinVoices([smo251823v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
const dirsmo258637 = smo249882.getStemDirection();
smo249882.setStemDirection(dirsmo258637);
smo249883.setStemDirection(dirsmo258637);
const smo258637 = new VF.Beam([smo249882,smo249883]);
 
// formatting measures in staff group smo251978
fmtsmo24895241.format([smo248952v0,smo249899v0,smo250848v0,smo251823v0], 153);
const stavesmo248952 = new VF.Stave(299, 1040, 167);
stavesmo248952.setAttribute('id', 'stavesmo248952');
stavesmo248952.setBegBarType(VF.Barline.type.NONE);
stavesmo248952.setContext(context);
stavesmo248952.draw();
smo248952v0.draw(context, stavesmo248952);
const stavesmo249899 = new VF.Stave(299, 1165, 167);
stavesmo249899.setAttribute('id', 'stavesmo249899');
stavesmo249899.setBegBarType(VF.Barline.type.NONE);
stavesmo249899.setContext(context);
stavesmo249899.draw();
smo249899v0.draw(context, stavesmo249899);
smo258637.setContext(context);
smo258637.draw();
const stavesmo250848 = new VF.Stave(299, 1253, 167);
stavesmo250848.setAttribute('id', 'stavesmo250848');
stavesmo250848.setBegBarType(VF.Barline.type.NONE);
stavesmo250848.setContext(context);
stavesmo250848.draw();
smo250848v0.draw(context, stavesmo250848);
const stavesmo251823 = new VF.Stave(299, 1366, 167);
stavesmo251823.setAttribute('id', 'stavesmo251823');
stavesmo251823.setBegBarType(VF.Barline.type.NONE);
stavesmo251823.setContext(context);
stavesmo251823.draw();
smo251823v0.draw(context, stavesmo251823);
const fmtsmo24896942 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo248969v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248969v0ar = [];
const smo248953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248953.setAttribute('id', 'smo248953');
smo248969v0ar.push(smo248953);
smo248969v0.addTickables(smo248969v0ar)
fmtsmo24896942.joinVoices([smo248969v0]);
const fmtsmo24992142 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo249921v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249921v0ar = [];
const smo249900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo249900.setAttribute('id', 'smo249900');
smo249921v0ar.push(smo249900);
const smo249901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo249901.setAttribute('id', 'smo249901');
smo249921v0ar.push(smo249901);
const smo249902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo249902.setAttribute('id', 'smo249902');
smo249921v0ar.push(smo249902);
const smo249903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo249903.setAttribute('id', 'smo249903');
smo249921v0ar.push(smo249903);
const smo249904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo249904.setAttribute('id', 'smo249904');
smo249921v0ar.push(smo249904);
const smo249905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo249905.setAttribute('id', 'smo249905');
smo249921v0ar.push(smo249905);
smo249921v0.addTickables(smo249921v0ar)
fmtsmo24992142.joinVoices([smo249921v0]);
const fmtsmo25086842 = new VF.Formatter();
//
// voices and notes for stave 2 42
const smo250868v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250868v0ar = [];
const smo250849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250849.setAttribute('id', 'smo250849');
smo250868v0ar.push(smo250849);
const smo250850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250850.setAttribute('id', 'smo250850');
smo250868v0ar.push(smo250850);
const smo250851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250851.setAttribute('id', 'smo250851');
smo250868v0ar.push(smo250851);
const smo250852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250852.setAttribute('id', 'smo250852');
smo250868v0ar.push(smo250852);
smo250868v0.addTickables(smo250868v0ar)
fmtsmo25086842.joinVoices([smo250868v0]);
const fmtsmo25184342 = new VF.Formatter();
//
// voices and notes for stave 3 42
const smo251843v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251843v0ar = [];
const smo251824 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251824.setAttribute('id', 'smo251824');
smo251843v0ar.push(smo251824);
const smo251825 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251825.setAttribute('id', 'smo251825');
smo251843v0ar.push(smo251825);
const smo251826 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251826.setAttribute('id', 'smo251826');
smo251843v0ar.push(smo251826);
const smo251827 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251827.setAttribute('id', 'smo251827');
smo251843v0ar.push(smo251827);
smo251843v0.addTickables(smo251843v0ar)
fmtsmo25184342.joinVoices([smo251843v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
const dirsmo258646 = smo249901.getStemDirection();
smo249901.setStemDirection(dirsmo258646);
smo249902.setStemDirection(dirsmo258646);
const smo258646 = new VF.Beam([smo249901,smo249902]);
const dirsmo258647 = smo249904.getStemDirection();
smo249904.setStemDirection(dirsmo258647);
smo249905.setStemDirection(dirsmo258647);
const smo258647 = new VF.Beam([smo249904,smo249905]);
 
// formatting measures in staff group smo251978
fmtsmo24896942.format([smo248969v0,smo249921v0,smo250868v0,smo251843v0], 147);
const stavesmo248969 = new VF.Stave(466, 1040, 161);
stavesmo248969.setAttribute('id', 'stavesmo248969');
stavesmo248969.setBegBarType(VF.Barline.type.NONE);
stavesmo248969.setContext(context);
stavesmo248969.draw();
smo248969v0.draw(context, stavesmo248969);
const stavesmo249921 = new VF.Stave(466, 1165, 161);
stavesmo249921.setAttribute('id', 'stavesmo249921');
stavesmo249921.setBegBarType(VF.Barline.type.NONE);
stavesmo249921.setContext(context);
stavesmo249921.draw();
smo249921v0.draw(context, stavesmo249921);
smo258646.setContext(context);
smo258646.draw();
smo258647.setContext(context);
smo258647.draw();
const stavesmo250868 = new VF.Stave(466, 1253, 161);
stavesmo250868.setAttribute('id', 'stavesmo250868');
stavesmo250868.setBegBarType(VF.Barline.type.NONE);
stavesmo250868.setContext(context);
stavesmo250868.draw();
smo250868v0.draw(context, stavesmo250868);
const stavesmo251843 = new VF.Stave(466, 1366, 161);
stavesmo251843.setAttribute('id', 'stavesmo251843');
stavesmo251843.setBegBarType(VF.Barline.type.NONE);
stavesmo251843.setContext(context);
stavesmo251843.draw();
smo251843v0.draw(context, stavesmo251843);
const fmtsmo24898643 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo248986v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248986v0ar = [];
const smo248970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248970.setAttribute('id', 'smo248970');
smo248986v0ar.push(smo248970);
smo248986v0.addTickables(smo248986v0ar)
fmtsmo24898643.joinVoices([smo248986v0]);
const fmtsmo24994043 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo249940v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249940v0ar = [];
const smo249922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo249922.setAttribute('id', 'smo249922');
smo249940v0ar.push(smo249922);
const smo249923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
smo249923.setAttribute('id', 'smo249923');
smo249940v0ar.push(smo249923);
const smo249924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo249924.setAttribute('id', 'smo249924');
smo249940v0ar.push(smo249924);
smo249940v0.addTickables(smo249940v0ar)
fmtsmo24994043.joinVoices([smo249940v0]);
const fmtsmo25088843 = new VF.Formatter();
//
// voices and notes for stave 2 43
const smo250888v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250888v0ar = [];
const smo250869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250869.setAttribute('id', 'smo250869');
smo250888v0ar.push(smo250869);
const smo250870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250870.setAttribute('id', 'smo250870');
smo250888v0ar.push(smo250870);
const smo250871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250871.setAttribute('id', 'smo250871');
smo250888v0ar.push(smo250871);
const smo250872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250872.setAttribute('id', 'smo250872');
smo250888v0ar.push(smo250872);
smo250888v0.addTickables(smo250888v0ar)
fmtsmo25088843.joinVoices([smo250888v0]);
const fmtsmo25186343 = new VF.Formatter();
//
// voices and notes for stave 3 43
const smo251863v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251863v0ar = [];
const smo251844 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251844.setAttribute('id', 'smo251844');
smo251863v0ar.push(smo251844);
const smo251845 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251845.setAttribute('id', 'smo251845');
smo251863v0ar.push(smo251845);
const smo251846 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251846.setAttribute('id', 'smo251846');
smo251863v0ar.push(smo251846);
const smo251847 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251847.setAttribute('id', 'smo251847');
smo251863v0ar.push(smo251847);
smo251863v0.addTickables(smo251863v0ar)
fmtsmo25186343.joinVoices([smo251863v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24898643.format([smo248986v0,smo249940v0,smo250888v0,smo251863v0], 95);
const stavesmo248986 = new VF.Stave(627, 1040, 109);
stavesmo248986.setAttribute('id', 'stavesmo248986');
stavesmo248986.setBegBarType(VF.Barline.type.NONE);
stavesmo248986.setContext(context);
stavesmo248986.draw();
smo248986v0.draw(context, stavesmo248986);
const stavesmo249940 = new VF.Stave(627, 1165, 109);
stavesmo249940.setAttribute('id', 'stavesmo249940');
stavesmo249940.setBegBarType(VF.Barline.type.NONE);
stavesmo249940.setContext(context);
stavesmo249940.draw();
smo249940v0.draw(context, stavesmo249940);
const stavesmo250888 = new VF.Stave(627, 1253, 109);
stavesmo250888.setAttribute('id', 'stavesmo250888');
stavesmo250888.setBegBarType(VF.Barline.type.NONE);
stavesmo250888.setContext(context);
stavesmo250888.draw();
smo250888v0.draw(context, stavesmo250888);
const stavesmo251863 = new VF.Stave(627, 1366, 109);
stavesmo251863.setAttribute('id', 'stavesmo251863');
stavesmo251863.setBegBarType(VF.Barline.type.NONE);
stavesmo251863.setContext(context);
stavesmo251863.draw();
smo251863v0.draw(context, stavesmo251863);
const fmtsmo24900344 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo249003v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249003v0ar = [];
const smo248987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248987.setAttribute('id', 'smo248987');
smo249003v0ar.push(smo248987);
smo249003v0.addTickables(smo249003v0ar)
fmtsmo24900344.joinVoices([smo249003v0]);
const fmtsmo24996044 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo249960v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249960v0ar = [];
const smo249941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo249941.setAttribute('id', 'smo249941');
smo249960v0ar.push(smo249941);
const smo249942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo249942.setAttribute('id', 'smo249942');
smo249960v0ar.push(smo249942);
const smo249943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo249943.setAttribute('id', 'smo249943');
smo249960v0ar.push(smo249943);
const smo249944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo249944.setAttribute('id', 'smo249944');
smo249960v0ar.push(smo249944);
smo249960v0.addTickables(smo249960v0ar)
fmtsmo24996044.joinVoices([smo249960v0]);
const fmtsmo25090844 = new VF.Formatter();
//
// voices and notes for stave 2 44
const smo250908v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250908v0ar = [];
const smo250889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo250889.setAttribute('id', 'smo250889');
smo250908v0ar.push(smo250889);
const smo250890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo250890.setAttribute('id', 'smo250890');
smo250908v0ar.push(smo250890);
const smo250891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo250891.setAttribute('id', 'smo250891');
smo250908v0ar.push(smo250891);
const smo250892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo250892.setAttribute('id', 'smo250892');
smo250908v0ar.push(smo250892);
smo250908v0.addTickables(smo250908v0ar)
fmtsmo25090844.joinVoices([smo250908v0]);
const fmtsmo25188344 = new VF.Formatter();
//
// voices and notes for stave 3 44
const smo251883v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251883v0ar = [];
const smo251864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo251864.setAttribute('id', 'smo251864');
smo251883v0ar.push(smo251864);
const smo251865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo251865.setAttribute('id', 'smo251865');
smo251883v0ar.push(smo251865);
const smo251866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo251866.setAttribute('id', 'smo251866');
smo251883v0ar.push(smo251866);
const smo251867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo251867.setAttribute('id', 'smo251867');
smo251883v0ar.push(smo251867);
smo251883v0.addTickables(smo251883v0ar)
fmtsmo25188344.joinVoices([smo251883v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
const dirsmo258664 = smo249941.getStemDirection();
smo249941.setStemDirection(dirsmo258664);
smo249942.setStemDirection(dirsmo258664);
const smo258664 = new VF.Beam([smo249941,smo249942]);
 
// formatting measures in staff group smo251978
fmtsmo24900344.format([smo249003v0,smo249960v0,smo250908v0,smo251883v0], 121);
const stavesmo249003 = new VF.Stave(736, 1040, 135);
stavesmo249003.setAttribute('id', 'stavesmo249003');
stavesmo249003.setBegBarType(VF.Barline.type.NONE);
stavesmo249003.setContext(context);
stavesmo249003.draw();
smo249003v0.draw(context, stavesmo249003);
const stavesmo249960 = new VF.Stave(736, 1165, 135);
stavesmo249960.setAttribute('id', 'stavesmo249960');
stavesmo249960.setBegBarType(VF.Barline.type.NONE);
stavesmo249960.setContext(context);
stavesmo249960.draw();
smo249960v0.draw(context, stavesmo249960);
smo258664.setContext(context);
smo258664.draw();
const stavesmo250908 = new VF.Stave(736, 1253, 135);
stavesmo250908.setAttribute('id', 'stavesmo250908');
stavesmo250908.setBegBarType(VF.Barline.type.NONE);
stavesmo250908.setContext(context);
stavesmo250908.draw();
smo250908v0.draw(context, stavesmo250908);
const stavesmo251883 = new VF.Stave(736, 1366, 135);
stavesmo251883.setAttribute('id', 'stavesmo251883');
stavesmo251883.setBegBarType(VF.Barline.type.NONE);
stavesmo251883.setContext(context);
stavesmo251883.draw();
smo251883v0.draw(context, stavesmo251883);
const fmtsmo24902045 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo249020v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249020v0ar = [];
const smo249004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249004.setAttribute('id', 'smo249004');
smo249020v0ar.push(smo249004);
smo249020v0.addTickables(smo249020v0ar)
fmtsmo24902045.joinVoices([smo249020v0]);
const fmtsmo24998045 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo249980v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249980v0ar = [];
const smo249961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo249961.setAttribute('id', 'smo249961');
smo249980v0ar.push(smo249961);
const smo249962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo249962.setAttribute('id', 'smo249962');
smo249980v0ar.push(smo249962);
const smo249963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo249963.setAttribute('id', 'smo249963');
smo249980v0ar.push(smo249963);
const smo249964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo249964.setAttribute('id', 'smo249964');
smo249980v0ar.push(smo249964);
smo249980v0.addTickables(smo249980v0ar)
fmtsmo24998045.joinVoices([smo249980v0]);
const fmtsmo25092845 = new VF.Formatter();
//
// voices and notes for stave 2 45
const smo250928v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250928v0ar = [];
const smo250909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250909.setAttribute('id', 'smo250909');
smo250928v0ar.push(smo250909);
const smo250910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250910.setAttribute('id', 'smo250910');
smo250928v0ar.push(smo250910);
const smo250911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250911.setAttribute('id', 'smo250911');
smo250928v0ar.push(smo250911);
const smo250912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250912.setAttribute('id', 'smo250912');
smo250928v0ar.push(smo250912);
smo250928v0.addTickables(smo250928v0ar)
fmtsmo25092845.joinVoices([smo250928v0]);
const fmtsmo25190345 = new VF.Formatter();
//
// voices and notes for stave 3 45
const smo251903v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251903v0ar = [];
const smo251884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251884.setAttribute('id', 'smo251884');
smo251903v0ar.push(smo251884);
const smo251885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251885.setAttribute('id', 'smo251885');
smo251903v0ar.push(smo251885);
const smo251886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251886.setAttribute('id', 'smo251886');
smo251903v0ar.push(smo251886);
const smo251887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251887.setAttribute('id', 'smo251887');
smo251903v0ar.push(smo251887);
smo251903v0.addTickables(smo251903v0ar)
fmtsmo25190345.joinVoices([smo251903v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
const dirsmo258673 = smo249961.getStemDirection();
smo249961.setStemDirection(dirsmo258673);
smo249962.setStemDirection(dirsmo258673);
const smo258673 = new VF.Beam([smo249961,smo249962]);
 
// formatting measures in staff group smo251978
fmtsmo24902045.format([smo249020v0,smo249980v0,smo250928v0,smo251903v0], 121);
const stavesmo249020 = new VF.Stave(871, 1040, 135);
stavesmo249020.setAttribute('id', 'stavesmo249020');
stavesmo249020.setBegBarType(VF.Barline.type.NONE);
stavesmo249020.setContext(context);
stavesmo249020.draw();
smo249020v0.draw(context, stavesmo249020);
const stavesmo249980 = new VF.Stave(871, 1165, 135);
stavesmo249980.setAttribute('id', 'stavesmo249980');
stavesmo249980.setBegBarType(VF.Barline.type.NONE);
stavesmo249980.setContext(context);
stavesmo249980.draw();
smo249980v0.draw(context, stavesmo249980);
smo258673.setContext(context);
smo258673.draw();
const stavesmo250928 = new VF.Stave(871, 1253, 135);
stavesmo250928.setAttribute('id', 'stavesmo250928');
stavesmo250928.setBegBarType(VF.Barline.type.NONE);
stavesmo250928.setContext(context);
stavesmo250928.draw();
smo250928v0.draw(context, stavesmo250928);
const stavesmo251903 = new VF.Stave(871, 1366, 135);
stavesmo251903.setAttribute('id', 'stavesmo251903');
stavesmo251903.setBegBarType(VF.Barline.type.NONE);
stavesmo251903.setContext(context);
stavesmo251903.draw();
smo251903v0.draw(context, stavesmo251903);
const fmtsmo24903746 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo249037v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249037v0ar = [];
const smo249021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249021.setAttribute('id', 'smo249021');
smo249037v0ar.push(smo249021);
smo249037v0.addTickables(smo249037v0ar)
fmtsmo24903746.joinVoices([smo249037v0]);
const fmtsmo25000246 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo250002v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250002v0ar = [];
const smo249981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo249981.setAttribute('id', 'smo249981');
smo250002v0ar.push(smo249981);
const smo249982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo249982.setAttribute('id', 'smo249982');
smo250002v0ar.push(smo249982);
const smo249983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo249983.setAttribute('id', 'smo249983');
smo250002v0ar.push(smo249983);
const smo249984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo249984.setAttribute('id', 'smo249984');
smo250002v0ar.push(smo249984);
const smo249985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo249985.setAttribute('id', 'smo249985');
smo250002v0ar.push(smo249985);
const smo249986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo249986.setAttribute('id', 'smo249986');
smo250002v0ar.push(smo249986);
smo250002v0.addTickables(smo250002v0ar)
fmtsmo25000246.joinVoices([smo250002v0]);
const fmtsmo25094846 = new VF.Formatter();
//
// voices and notes for stave 2 46
const smo250948v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250948v0ar = [];
const smo250929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250929.setAttribute('id', 'smo250929');
smo250948v0ar.push(smo250929);
const smo250930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo250930.setAttribute('id', 'smo250930');
smo250948v0ar.push(smo250930);
const smo250931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo250931.setAttribute('id', 'smo250931');
smo250948v0ar.push(smo250931);
const smo250932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo250932.setAttribute('id', 'smo250932');
smo250948v0ar.push(smo250932);
smo250948v0.addTickables(smo250948v0ar)
fmtsmo25094846.joinVoices([smo250948v0]);
const fmtsmo25192346 = new VF.Formatter();
//
// voices and notes for stave 3 46
const smo251923v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251923v0ar = [];
const smo251904 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo251904.setAttribute('id', 'smo251904');
smo251923v0ar.push(smo251904);
const smo251905 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo251905.setAttribute('id', 'smo251905');
smo251923v0ar.push(smo251905);
const smo251906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo251906.setAttribute('id', 'smo251906');
smo251923v0ar.push(smo251906);
const smo251907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo251907.setAttribute('id', 'smo251907');
smo251923v0ar.push(smo251907);
smo251923v0.addTickables(smo251923v0ar)
fmtsmo25192346.joinVoices([smo251923v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
const dirsmo258682 = smo249981.getStemDirection();
smo249981.setStemDirection(dirsmo258682);
smo249982.setStemDirection(dirsmo258682);
const smo258682 = new VF.Beam([smo249981,smo249982]);
const dirsmo258683 = smo249984.getStemDirection();
smo249984.setStemDirection(dirsmo258683);
smo249985.setStemDirection(dirsmo258683);
const smo258683 = new VF.Beam([smo249984,smo249985]);
 
// formatting measures in staff group smo251978
fmtsmo24903746.format([smo249037v0,smo250002v0,smo250948v0,smo251923v0], 147);
const stavesmo249037 = new VF.Stave(1006, 1040, 161);
stavesmo249037.setAttribute('id', 'stavesmo249037');
stavesmo249037.setBegBarType(VF.Barline.type.NONE);
stavesmo249037.setContext(context);
stavesmo249037.draw();
smo249037v0.draw(context, stavesmo249037);
const stavesmo250002 = new VF.Stave(1006, 1165, 161);
stavesmo250002.setAttribute('id', 'stavesmo250002');
stavesmo250002.setBegBarType(VF.Barline.type.NONE);
stavesmo250002.setContext(context);
stavesmo250002.draw();
smo250002v0.draw(context, stavesmo250002);
smo258682.setContext(context);
smo258682.draw();
smo258683.setContext(context);
smo258683.draw();
const stavesmo250948 = new VF.Stave(1006, 1253, 161);
stavesmo250948.setAttribute('id', 'stavesmo250948');
stavesmo250948.setBegBarType(VF.Barline.type.NONE);
stavesmo250948.setContext(context);
stavesmo250948.draw();
smo250948v0.draw(context, stavesmo250948);
const stavesmo251923 = new VF.Stave(1006, 1366, 161);
stavesmo251923.setAttribute('id', 'stavesmo251923');
stavesmo251923.setBegBarType(VF.Barline.type.NONE);
stavesmo251923.setContext(context);
stavesmo251923.draw();
smo251923v0.draw(context, stavesmo251923);
const fmtsmo24905447 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo249054v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249054v0ar = [];
const smo249038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249038.setAttribute('id', 'smo249038');
smo249054v0ar.push(smo249038);
smo249054v0.addTickables(smo249054v0ar)
fmtsmo24905447.joinVoices([smo249054v0]);
const fmtsmo25002247 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo250022v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250022v0ar = [];
const smo250003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo250003.setAttribute('id', 'smo250003');
smo250022v0ar.push(smo250003);
const smo250004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
smo250004.setAttribute('id', 'smo250004');
const smo250005 = new VF.Ornament('scoop');
smo250004.addModifier(smo250005, 0);
smo250022v0ar.push(smo250004);
const smo250006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250006.setAttribute('id', 'smo250006');
smo250022v0ar.push(smo250006);
smo250022v0.addTickables(smo250022v0ar)
fmtsmo25002247.joinVoices([smo250022v0]);
const fmtsmo25096847 = new VF.Formatter();
//
// voices and notes for stave 2 47
const smo250968v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250968v0ar = [];
const smo250949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo250949.setAttribute('id', 'smo250949');
smo250968v0ar.push(smo250949);
const smo250950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo250950.setAttribute('id', 'smo250950');
const smo250951 = new VF.Ornament('scoop');
smo250950.addModifier(smo250951, 0);
smo250968v0ar.push(smo250950);
const smo250952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250952.setAttribute('id', 'smo250952');
smo250968v0ar.push(smo250952);
smo250968v0.addTickables(smo250968v0ar)
fmtsmo25096847.joinVoices([smo250968v0]);
const fmtsmo25194247 = new VF.Formatter();
//
// voices and notes for stave 3 47
const smo251942v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251942v0ar = [];
const smo251924 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251924.setAttribute('id', 'smo251924');
smo251942v0ar.push(smo251924);
const smo251925 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo251925.setAttribute('id', 'smo251925');
smo251942v0ar.push(smo251925);
const smo251926 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251926.setAttribute('id', 'smo251926');
smo251942v0ar.push(smo251926);
smo251942v0.addTickables(smo251942v0ar)
fmtsmo25194247.joinVoices([smo251942v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24905447.format([smo249054v0,smo250022v0,smo250968v0,smo251942v0], 74);
const stavesmo249054 = new VF.Stave(1167, 1040, 92);
stavesmo249054.setAttribute('id', 'stavesmo249054');
stavesmo249054.setBegBarType(VF.Barline.type.NONE);
stavesmo249054.setEndBarType(5);
stavesmo249054.setContext(context);
stavesmo249054.draw();
smo249054v0.draw(context, stavesmo249054);
const stavesmo250022 = new VF.Stave(1167, 1165, 92);
stavesmo250022.setAttribute('id', 'stavesmo250022');
stavesmo250022.setBegBarType(VF.Barline.type.NONE);
stavesmo250022.setEndBarType(5);
stavesmo250022.setContext(context);
stavesmo250022.draw();
smo250022v0.draw(context, stavesmo250022);
const stavesmo250968 = new VF.Stave(1167, 1253, 92);
stavesmo250968.setAttribute('id', 'stavesmo250968');
stavesmo250968.setBegBarType(VF.Barline.type.NONE);
stavesmo250968.setEndBarType(5);
stavesmo250968.setContext(context);
stavesmo250968.draw();
smo250968v0.draw(context, stavesmo250968);
const stavesmo251942 = new VF.Stave(1167, 1366, 92);
stavesmo251942.setAttribute('id', 'stavesmo251942');
stavesmo251942.setBegBarType(VF.Barline.type.NONE);
stavesmo251942.setEndBarType(5);
stavesmo251942.setContext(context);
stavesmo251942.draw();
smo251942v0.draw(context, stavesmo251942);
// modifier from 0-28-0-0 to 0-29-0-2
const smo259494 = new VF.TextBracket({ start: smo248634, stop: smo248660, text: 'accelerando', position: 1 });
smo259494.setLine(1).setContext(context).draw();
// modifier from 2-26-0-0 to 2-27-0-0
const smo259495 = new VF.StaveTie({ first_note: smo250562, last_note: smo250579, 
          firstNote: smo250562, lastNote: smo250579, first_indices: [0], last_indices: [0]});
smo259495.setContext(context).draw();
// modifier from 2-32-0-0 to 2-33-0-0
const smo259496 = new VF.StaveTie({ first_note: smo250668, last_note: smo250685, 
          firstNote: smo250668, lastNote: smo250685, first_indices: [0], last_indices: [0]});
smo259496.setContext(context).draw();
// modifier from 2-33-0-0 to 2-34-0-0
const smo259497 = new VF.StaveTie({ first_note: smo250685, last_note: smo250702, 
          firstNote: smo250685, lastNote: smo250702, first_indices: [0], last_indices: [0]});
smo259497.setContext(context).draw();
// modifier from 2-35-0-0 to 2-36-0-0
const smo259498 = new VF.StaveTie({ first_note: smo250719, last_note: smo250736, 
          firstNote: smo250719, lastNote: smo250736, first_indices: [0], last_indices: [0]});
smo259498.setContext(context).draw();
// modifier from 3-31-0-3 to 3-31-0-4
const smo259499 = new VF.StaveTie({ first_note: smo251608, last_note: smo251609, 
          firstNote: smo251608, lastNote: smo251609, first_indices: [0], last_indices: [0]});
smo259499.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo248587').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248589').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248591').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248593').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo248596').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248598').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248616').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo248635').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo248637').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248657').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248659').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248679').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248681').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248683').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248685').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248687').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248689').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248708').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo248730').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248732').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo248734').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo248736').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo248754').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248756').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo248758').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo248780').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248782').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo248784').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo248786').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo248804').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248806').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo248808').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo248826').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248828').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo248830').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248832').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo248834').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248852').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo248854').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo248856').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248874').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo248877').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo248897').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo248899').setAttributeNS('', 'transform', 'translate(0 20)');
}
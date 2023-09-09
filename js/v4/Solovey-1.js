// @@ Solovey p 2/2 ((Op. 1)) by Folks
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
const fmtsmo23676926 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo236769v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236769v0ar = [];
const smo236741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236741.setAttribute('id', 'smo236741');
const smo236742 = new VF.Annotation('Со');
smo236742.setAttribute('id', 'smo236742');
smo236742.setFont('Merriweather', 12.1, 'normal');
smo236742.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236741.addModifier(smo236742);
smo236742.addClass('lyric lyric-0');
smo236769v0ar.push(smo236741);
const smo236743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo236743.setAttribute('id', 'smo236743');
const smo236744 = new VF.Annotation('-');
smo236744.setAttribute('id', 'smo236744');
smo236744.setFont('Merriweather', 12.1, 'normal');
smo236744.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236743.addModifier(smo236744);
smo236744.addClass('lyric lyric-0 lyric-hyphen');
smo236769v0ar.push(smo236743);
const smo236745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236745.setAttribute('id', 'smo236745');
const smo236746 = new VF.Annotation('-');
smo236746.setAttribute('id', 'smo236746');
smo236746.setFont('Merriweather', 12.1, 'normal');
smo236746.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236745.addModifier(smo236746);
smo236746.addClass('lyric lyric-0 lyric-hyphen');
smo236769v0ar.push(smo236745);
const smo236747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["d#/5/n"]}'))
smo236747.setAttribute('id', 'smo236747');
const smo2367470acc = new VF.Accidental('#');
smo236747.addModifier(smo2367470acc, 0);
const smo236748 = new VF.Annotation('-');
smo236748.setAttribute('id', 'smo236748');
smo236748.setFont('Merriweather', 12.1, 'normal');
smo236748.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236747.addModifier(smo236748);
smo236748.addClass('lyric lyric-0 lyric-hyphen');
smo236769v0ar.push(smo236747);
const smo236749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236749.setAttribute('id', 'smo236749');
smo236769v0ar.push(smo236749);
const smo236750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo236750.setAttribute('id', 'smo236750');
const smo236751 = new VF.Annotation('ло');
smo236751.setAttribute('id', 'smo236751');
smo236751.setFont('Merriweather', 12.1, 'normal');
smo236751.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236750.addModifier(smo236751);
smo236751.addClass('lyric lyric-0');
smo236769v0ar.push(smo236750);
const smo236752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236752.setAttribute('id', 'smo236752');
const smo236753 = new VF.Annotation('-');
smo236753.setAttribute('id', 'smo236753');
smo236753.setFont('Merriweather', 12.1, 'normal');
smo236753.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236752.addModifier(smo236753);
smo236753.addClass('lyric lyric-0 lyric-hyphen');
smo236769v0ar.push(smo236752);
smo236769v0.addTickables(smo236769v0ar)
fmtsmo23676926.joinVoices([smo236769v0]);
const fmtsmo23775426 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo237754v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237754v0ar = [];
const smo237735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237735.setAttribute('id', 'smo237735');
smo237754v0ar.push(smo237735);
const smo237736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237736.setAttribute('id', 'smo237736');
smo237754v0ar.push(smo237736);
const smo237737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo237737.setAttribute('id', 'smo237737');
const smo2377370acc = new VF.Accidental('#');
smo237737.addModifier(smo2377370acc, 0);
smo237754v0ar.push(smo237737);
const smo237738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237738.setAttribute('id', 'smo237738');
smo237754v0ar.push(smo237738);
smo237754v0.addTickables(smo237754v0ar)
fmtsmo23775426.joinVoices([smo237754v0]);
const fmtsmo23873326 = new VF.Formatter();
//
// voices and notes for stave 2 26
const smo238733v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238733v0ar = [];
const smo238717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238717.setAttribute('id', 'smo238717');
smo238733v0ar.push(smo238717);
smo238733v0.addTickables(smo238733v0ar)
fmtsmo23873326.joinVoices([smo238733v0]);
const fmtsmo23968726 = new VF.Formatter();
//
// voices and notes for stave 3 26
const smo239687v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239687v0ar = [];
const smo239670 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239670.setAttribute('id', 'smo239670');
smo239687v0ar.push(smo239670);
const smo239671 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239671.setAttribute('id', 'smo239671');
smo239687v0ar.push(smo239671);
smo239687v0.addTickables(smo239687v0ar)
fmtsmo23968726.joinVoices([smo239687v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
const dirsmo246642 = smo236743.getStemDirection();
smo236743.setStemDirection(dirsmo246642);
smo236745.setStemDirection(dirsmo246642);
smo236747.setStemDirection(dirsmo246642);
smo236749.setStemDirection(dirsmo246642);
const smo246642 = new VF.Beam([smo236743,smo236745,smo236747,smo236749]);
 
// formatting measures in staff group smo240133
fmtsmo23676926.format([smo236769v0,smo237754v0,smo238733v0,smo239687v0], 249);
const stavesmo236769 = new VF.Stave(55, 219, 323);
stavesmo236769.setAttribute('id', 'stavesmo236769');
stavesmo236769.setBegBarType(1);
stavesmo236769.addClef('treble');
const keysmo236769 = new VF.KeySignature('F');
keysmo236769.addToStave(stavesmo236769);
stavesmo236769.setContext(context);
stavesmo236769.draw();
smo236769v0.draw(context, stavesmo236769);
smo246642.setContext(context);
smo246642.draw();
const stavesmo237754 = new VF.Stave(55, 311, 323);
stavesmo237754.setAttribute('id', 'stavesmo237754');
stavesmo237754.setBegBarType(1);
stavesmo237754.addClef('treble');
const keysmo237754 = new VF.KeySignature('F');
keysmo237754.addToStave(stavesmo237754);
stavesmo237754.setContext(context);
stavesmo237754.draw();
smo237754v0.draw(context, stavesmo237754);
const stavesmo238733 = new VF.Stave(55, 389, 323);
stavesmo238733.setAttribute('id', 'stavesmo238733');
stavesmo238733.setBegBarType(1);
stavesmo238733.addClef('treble');
const keysmo238733 = new VF.KeySignature('F');
keysmo238733.addToStave(stavesmo238733);
stavesmo238733.setContext(context);
stavesmo238733.draw();
smo238733v0.draw(context, stavesmo238733);
const stavesmo239687 = new VF.Stave(55, 473, 323);
stavesmo239687.setAttribute('id', 'stavesmo239687');
stavesmo239687.setBegBarType(1);
stavesmo239687.addClef('bass');
const keysmo239687 = new VF.KeySignature('F');
keysmo239687.addToStave(stavesmo239687);
stavesmo239687.setContext(context);
stavesmo239687.draw();
smo239687v0.draw(context, stavesmo239687);
const leftsmo240133stavesmo2367693 = new VF.StaveConnector(stavesmo236769, stavesmo239687).setType(1);
leftsmo240133stavesmo2367693.setContext(context).draw();
const fmtsmo23678827 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo236788v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236788v0ar = [];
const smo236770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236770.setAttribute('id', 'smo236770');
const smo236771 = new VF.Annotation('вей');
smo236771.setAttribute('id', 'smo236771');
smo236771.setFont('Merriweather', 12.1, 'normal');
smo236771.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236770.addModifier(smo236771);
smo236771.addClass('lyric lyric-0');
smo236788v0ar.push(smo236770);
const smo236772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236772.setAttribute('id', 'smo236772');
smo236788v0ar.push(smo236772);
smo236788v0.addTickables(smo236788v0ar)
fmtsmo23678827.joinVoices([smo236788v0]);
const fmtsmo23777427 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo237774v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237774v0ar = [];
const smo237755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237755.setAttribute('id', 'smo237755');
smo237774v0ar.push(smo237755);
const smo237756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237756.setAttribute('id', 'smo237756');
smo237774v0ar.push(smo237756);
const smo237757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237757.setAttribute('id', 'smo237757');
smo237774v0ar.push(smo237757);
const smo237758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237758.setAttribute('id', 'smo237758');
smo237774v0ar.push(smo237758);
smo237774v0.addTickables(smo237774v0ar)
fmtsmo23777427.joinVoices([smo237774v0]);
const fmtsmo23875027 = new VF.Formatter();
//
// voices and notes for stave 2 27
const smo238750v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238750v0ar = [];
const smo238734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238734.setAttribute('id', 'smo238734');
smo238750v0ar.push(smo238734);
smo238750v0.addTickables(smo238750v0ar)
fmtsmo23875027.joinVoices([smo238750v0]);
const fmtsmo23970527 = new VF.Formatter();
//
// voices and notes for stave 3 27
const smo239705v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239705v0ar = [];
const smo239688 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239688.setAttribute('id', 'smo239688');
smo239705v0ar.push(smo239688);
const smo239689 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239689.setAttribute('id', 'smo239689');
smo239705v0ar.push(smo239689);
smo239705v0.addTickables(smo239705v0ar)
fmtsmo23970527.joinVoices([smo239705v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23678827.format([smo236788v0,smo237774v0,smo238750v0,smo239705v0], 147);
const stavesmo236788 = new VF.Stave(378, 219, 161);
stavesmo236788.setAttribute('id', 'stavesmo236788');
stavesmo236788.setBegBarType(VF.Barline.type.NONE);
stavesmo236788.setContext(context);
stavesmo236788.draw();
smo236788v0.draw(context, stavesmo236788);
const stavesmo237774 = new VF.Stave(378, 311, 161);
stavesmo237774.setAttribute('id', 'stavesmo237774');
stavesmo237774.setBegBarType(VF.Barline.type.NONE);
stavesmo237774.setContext(context);
stavesmo237774.draw();
smo237774v0.draw(context, stavesmo237774);
const stavesmo238750 = new VF.Stave(378, 389, 161);
stavesmo238750.setAttribute('id', 'stavesmo238750');
stavesmo238750.setBegBarType(VF.Barline.type.NONE);
stavesmo238750.setContext(context);
stavesmo238750.draw();
smo238750v0.draw(context, stavesmo238750);
const stavesmo239705 = new VF.Stave(378, 473, 161);
stavesmo239705.setAttribute('id', 'stavesmo239705');
stavesmo239705.setBegBarType(VF.Barline.type.NONE);
stavesmo239705.setContext(context);
stavesmo239705.draw();
smo239705v0.draw(context, stavesmo239705);
const fmtsmo23681028 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo236810v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236810v0ar = [];
const smo236789 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236789.setAttribute('id', 'smo236789');
const smo236790 = new VF.Annotation('цо');
smo236790.setAttribute('id', 'smo236790');
smo236790.setFont('Merriweather', 12.1, 'normal');
smo236790.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236789.addModifier(smo236790);
smo236790.addClass('lyric lyric-0 lyric-hyphen');
smo236810v0ar.push(smo236789);
const smo236791 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo236791.setAttribute('id', 'smo236791');
const smo236792 = new VF.Annotation('ло');
smo236792.setAttribute('id', 'smo236792');
smo236792.setFont('Merriweather', 12.1, 'normal');
smo236792.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236791.addModifier(smo236792);
smo236792.addClass('lyric lyric-0');
smo236810v0ar.push(smo236791);
const smo236793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo236793.setAttribute('id', 'smo236793');
const smo236794 = new VF.Annotation('-');
smo236794.setAttribute('id', 'smo236794');
smo236794.setFont('Merriweather', 12.1, 'normal');
smo236794.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236793.addModifier(smo236794);
smo236794.addClass('lyric lyric-0 lyric-hyphen');
smo236810v0ar.push(smo236793);
smo236810v0.addTickables(smo236810v0ar)
fmtsmo23681028.joinVoices([smo236810v0]);
const fmtsmo23779428 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo237794v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237794v0ar = [];
const smo237775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237775.setAttribute('id', 'smo237775');
smo237794v0ar.push(smo237775);
const smo237776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237776.setAttribute('id', 'smo237776');
smo237794v0ar.push(smo237776);
const smo237777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237777.setAttribute('id', 'smo237777');
smo237794v0ar.push(smo237777);
const smo237778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237778.setAttribute('id', 'smo237778');
smo237794v0ar.push(smo237778);
smo237794v0.addTickables(smo237794v0ar)
fmtsmo23779428.joinVoices([smo237794v0]);
const fmtsmo23876828 = new VF.Formatter();
//
// voices and notes for stave 2 28
const smo238768v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238768v0ar = [];
const smo238751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo238751.setAttribute('id', 'smo238751');
smo238768v0ar.push(smo238751);
const smo238752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo238752.setAttribute('id', 'smo238752');
smo238768v0ar.push(smo238752);
smo238768v0.addTickables(smo238768v0ar)
fmtsmo23876828.joinVoices([smo238768v0]);
const fmtsmo23972328 = new VF.Formatter();
//
// voices and notes for stave 3 28
const smo239723v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239723v0ar = [];
const smo239706 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239706.setAttribute('id', 'smo239706');
smo239723v0ar.push(smo239706);
const smo239707 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo239707.setAttribute('id', 'smo239707');
smo239723v0ar.push(smo239707);
smo239723v0.addTickables(smo239723v0ar)
fmtsmo23972328.joinVoices([smo239723v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23681028.format([smo236810v0,smo237794v0,smo238768v0,smo239723v0], 146);
const stavesmo236810 = new VF.Stave(539, 219, 160);
stavesmo236810.setAttribute('id', 'stavesmo236810');
stavesmo236810.setBegBarType(VF.Barline.type.NONE);
stavesmo236810.setContext(context);
stavesmo236810.draw();
smo236810v0.draw(context, stavesmo236810);
const stavesmo237794 = new VF.Stave(539, 311, 160);
stavesmo237794.setAttribute('id', 'stavesmo237794');
stavesmo237794.setBegBarType(VF.Barline.type.NONE);
stavesmo237794.setContext(context);
stavesmo237794.draw();
smo237794v0.draw(context, stavesmo237794);
const stavesmo238768 = new VF.Stave(539, 389, 160);
stavesmo238768.setAttribute('id', 'stavesmo238768');
stavesmo238768.setBegBarType(VF.Barline.type.NONE);
stavesmo238768.setContext(context);
stavesmo238768.draw();
smo238768v0.draw(context, stavesmo238768);
const stavesmo239723 = new VF.Stave(539, 473, 160);
stavesmo239723.setAttribute('id', 'stavesmo239723');
stavesmo239723.setBegBarType(VF.Barline.type.NONE);
stavesmo239723.setContext(context);
stavesmo239723.draw();
smo239723v0.draw(context, stavesmo239723);
const fmtsmo23683229 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo236832v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236832v0ar = [];
const smo236811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236811.setAttribute('id', 'smo236811');
const smo236812 = new VF.Annotation('си');
smo236812.setAttribute('id', 'smo236812');
smo236812.setFont('Merriweather', 12.1, 'normal');
smo236812.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236811.addModifier(smo236812);
smo236812.addClass('lyric lyric-0 lyric-hyphen');
smo236832v0ar.push(smo236811);
const smo236813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo236813.setAttribute('id', 'smo236813');
const smo236814 = new VF.Annotation('стый');
smo236814.setAttribute('id', 'smo236814');
smo236814.setFont('Merriweather', 12.1, 'normal');
smo236814.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236813.addModifier(smo236814);
smo236814.addClass('lyric lyric-0');
smo236832v0ar.push(smo236813);
const smo236815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo236815.setAttribute('id', 'smo236815');
const smo236816 = new VF.Annotation('-');
smo236816.setAttribute('id', 'smo236816');
smo236816.setFont('Merriweather', 12.1, 'normal');
smo236816.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236815.addModifier(smo236816);
smo236816.addClass('lyric lyric-0 lyric-hyphen');
smo236832v0ar.push(smo236815);
smo236832v0.addTickables(smo236832v0ar)
fmtsmo23683229.joinVoices([smo236832v0]);
const fmtsmo23781429 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo237814v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237814v0ar = [];
const smo237795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237795.setAttribute('id', 'smo237795');
smo237814v0ar.push(smo237795);
const smo237796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237796.setAttribute('id', 'smo237796');
smo237814v0ar.push(smo237796);
const smo237797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237797.setAttribute('id', 'smo237797');
smo237814v0ar.push(smo237797);
const smo237798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo237798.setAttribute('id', 'smo237798');
smo237814v0ar.push(smo237798);
smo237814v0.addTickables(smo237814v0ar)
fmtsmo23781429.joinVoices([smo237814v0]);
const fmtsmo23878629 = new VF.Formatter();
//
// voices and notes for stave 2 29
const smo238786v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238786v0ar = [];
const smo238769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238769.setAttribute('id', 'smo238769');
smo238786v0ar.push(smo238769);
const smo238770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo238770.setAttribute('id', 'smo238770');
smo238786v0ar.push(smo238770);
smo238786v0.addTickables(smo238786v0ar)
fmtsmo23878629.joinVoices([smo238786v0]);
const fmtsmo23974129 = new VF.Formatter();
//
// voices and notes for stave 3 29
const smo239741v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239741v0ar = [];
const smo239724 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo239724.setAttribute('id', 'smo239724');
smo239741v0ar.push(smo239724);
const smo239725 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239725.setAttribute('id', 'smo239725');
smo239741v0ar.push(smo239725);
smo239741v0.addTickables(smo239741v0ar)
fmtsmo23974129.joinVoices([smo239741v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23683229.format([smo236832v0,smo237814v0,smo238786v0,smo239741v0], 174);
const stavesmo236832 = new VF.Stave(699, 219, 188);
stavesmo236832.setAttribute('id', 'stavesmo236832');
stavesmo236832.setBegBarType(VF.Barline.type.NONE);
stavesmo236832.setContext(context);
stavesmo236832.draw();
smo236832v0.draw(context, stavesmo236832);
const stavesmo237814 = new VF.Stave(699, 311, 188);
stavesmo237814.setAttribute('id', 'stavesmo237814');
stavesmo237814.setBegBarType(VF.Barline.type.NONE);
stavesmo237814.setContext(context);
stavesmo237814.draw();
smo237814v0.draw(context, stavesmo237814);
const stavesmo238786 = new VF.Stave(699, 389, 188);
stavesmo238786.setAttribute('id', 'stavesmo238786');
stavesmo238786.setBegBarType(VF.Barline.type.NONE);
stavesmo238786.setContext(context);
stavesmo238786.draw();
smo238786v0.draw(context, stavesmo238786);
const stavesmo239741 = new VF.Stave(699, 473, 188);
stavesmo239741.setAttribute('id', 'stavesmo239741');
stavesmo239741.setBegBarType(VF.Barline.type.NONE);
stavesmo239741.setContext(context);
stavesmo239741.draw();
smo239741v0.draw(context, stavesmo239741);
const fmtsmo23686130 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo236861v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236861v0ar = [];
const smo236833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo236833.setAttribute('id', 'smo236833');
const smo236834 = new VF.Annotation('со');
smo236834.setAttribute('id', 'smo236834');
smo236834.setFont('Merriweather', 12.1, 'normal');
smo236834.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236833.addModifier(smo236834);
smo236834.addClass('lyric lyric-0');
smo236861v0ar.push(smo236833);
const smo236835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo236835.setAttribute('id', 'smo236835');
const smo236836 = new VF.Annotation('-');
smo236836.setAttribute('id', 'smo236836');
smo236836.setFont('Merriweather', 12.1, 'normal');
smo236836.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236835.addModifier(smo236836);
smo236836.addClass('lyric lyric-0 lyric-hyphen');
smo236861v0ar.push(smo236835);
const smo236837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo236837.setAttribute('id', 'smo236837');
const smo236838 = new VF.Annotation('-');
smo236838.setAttribute('id', 'smo236838');
smo236838.setFont('Merriweather', 12.1, 'normal');
smo236838.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236837.addModifier(smo236838);
smo236838.addClass('lyric lyric-0 lyric-hyphen');
smo236861v0ar.push(smo236837);
const smo236839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo236839.setAttribute('id', 'smo236839');
const smo2368390acc = new VF.Accidental('#');
smo236839.addModifier(smo2368390acc, 0);
const smo236840 = new VF.Annotation('-');
smo236840.setAttribute('id', 'smo236840');
smo236840.setFont('Merriweather', 12.1, 'normal');
smo236840.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236839.addModifier(smo236840);
smo236840.addClass('lyric lyric-0 lyric-hyphen');
smo236861v0ar.push(smo236839);
const smo236841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo236841.setAttribute('id', 'smo236841');
const smo236842 = new VF.Annotation('ло');
smo236842.setAttribute('id', 'smo236842');
smo236842.setFont('Merriweather', 12.1, 'normal');
smo236842.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236841.addModifier(smo236842);
smo236842.addClass('lyric lyric-0');
smo236861v0ar.push(smo236841);
const smo236843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236843.setAttribute('id', 'smo236843');
const smo236844 = new VF.Annotation('-');
smo236844.setAttribute('id', 'smo236844');
smo236844.setFont('Merriweather', 12.1, 'normal');
smo236844.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236843.addModifier(smo236844);
smo236844.addClass('lyric lyric-0 lyric-hyphen');
smo236861v0ar.push(smo236843);
smo236861v0.addTickables(smo236861v0ar)
fmtsmo23686130.joinVoices([smo236861v0]);
const fmtsmo23783430 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo237834v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237834v0ar = [];
const smo237815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237815.setAttribute('id', 'smo237815');
smo237834v0ar.push(smo237815);
const smo237816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo237816.setAttribute('id', 'smo237816');
smo237834v0ar.push(smo237816);
const smo237817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237817.setAttribute('id', 'smo237817');
smo237834v0ar.push(smo237817);
const smo237818 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo237818.setAttribute('id', 'smo237818');
smo237834v0ar.push(smo237818);
smo237834v0.addTickables(smo237834v0ar)
fmtsmo23783430.joinVoices([smo237834v0]);
const fmtsmo23880430 = new VF.Formatter();
//
// voices and notes for stave 2 30
const smo238804v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238804v0ar = [];
const smo238787 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo238787.setAttribute('id', 'smo238787');
smo238804v0ar.push(smo238787);
const smo238788 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo238788.setAttribute('id', 'smo238788');
smo238804v0ar.push(smo238788);
smo238804v0.addTickables(smo238804v0ar)
fmtsmo23880430.joinVoices([smo238804v0]);
const fmtsmo23975930 = new VF.Formatter();
//
// voices and notes for stave 3 30
const smo239759v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239759v0ar = [];
const smo239742 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239742.setAttribute('id', 'smo239742');
smo239759v0ar.push(smo239742);
const smo239743 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239743.setAttribute('id', 'smo239743');
smo239759v0ar.push(smo239743);
smo239759v0.addTickables(smo239759v0ar)
fmtsmo23975930.joinVoices([smo239759v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
const dirsmo246675 = smo236835.getStemDirection();
smo236835.setStemDirection(dirsmo246675);
smo236837.setStemDirection(dirsmo246675);
smo236839.setStemDirection(dirsmo246675);
const smo246675 = new VF.Beam([smo236835,smo236837,smo236839]);
const smo236845 = new VF.Tuplet([smo236835,smo236837,smo236839], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo240133
fmtsmo23686130.format([smo236861v0,smo237834v0,smo238804v0,smo239759v0], 217);
const stavesmo236861 = new VF.Stave(887, 219, 231);
stavesmo236861.setAttribute('id', 'stavesmo236861');
stavesmo236861.setBegBarType(VF.Barline.type.NONE);
stavesmo236861.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":96}'), -1 * 0);
stavesmo236861.setContext(context);
stavesmo236861.draw();
smo236861v0.draw(context, stavesmo236861);
smo246675.setContext(context);
smo246675.draw();
smo236845.setContext(context).draw();
const stavesmo237834 = new VF.Stave(887, 311, 231);
stavesmo237834.setAttribute('id', 'stavesmo237834');
stavesmo237834.setBegBarType(VF.Barline.type.NONE);
stavesmo237834.setContext(context);
stavesmo237834.draw();
smo237834v0.draw(context, stavesmo237834);
const stavesmo238804 = new VF.Stave(887, 389, 231);
stavesmo238804.setAttribute('id', 'stavesmo238804');
stavesmo238804.setBegBarType(VF.Barline.type.NONE);
stavesmo238804.setContext(context);
stavesmo238804.draw();
smo238804v0.draw(context, stavesmo238804);
const stavesmo239759 = new VF.Stave(887, 473, 231);
stavesmo239759.setAttribute('id', 'stavesmo239759');
stavesmo239759.setBegBarType(VF.Barline.type.NONE);
stavesmo239759.setContext(context);
stavesmo239759.draw();
smo239759v0.draw(context, stavesmo239759);
const fmtsmo23688031 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo236880v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236880v0ar = [];
const smo236862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236862.setAttribute('id', 'smo236862');
const smo236863 = new VF.Annotation('вей');
smo236863.setAttribute('id', 'smo236863');
smo236863.setFont('Merriweather', 12.1, 'normal');
smo236863.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236862.addModifier(smo236863);
smo236863.addClass('lyric lyric-0');
smo236880v0ar.push(smo236862);
const smo236864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236864.setAttribute('id', 'smo236864');
smo236880v0ar.push(smo236864);
smo236880v0.addTickables(smo236880v0ar)
fmtsmo23688031.joinVoices([smo236880v0]);
const fmtsmo23785531 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo237855v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237855v0ar = [];
const smo237835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo237835.setAttribute('id', 'smo237835');
smo237855v0ar.push(smo237835);
const smo237836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo237836.setAttribute('id', 'smo237836');
smo237855v0ar.push(smo237836);
const smo237837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo237837.setAttribute('id', 'smo237837');
smo237855v0ar.push(smo237837);
const smo237838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo237838.setAttribute('id', 'smo237838');
smo237855v0ar.push(smo237838);
const smo237839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237839.setAttribute('id', 'smo237839');
smo237855v0ar.push(smo237839);
smo237855v0.addTickables(smo237855v0ar)
fmtsmo23785531.joinVoices([smo237855v0]);
const fmtsmo23882231 = new VF.Formatter();
//
// voices and notes for stave 2 31
const smo238822v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238822v0ar = [];
const smo238805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo238805.setAttribute('id', 'smo238805');
smo238822v0ar.push(smo238805);
const smo238806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238806.setAttribute('id', 'smo238806');
smo238822v0ar.push(smo238806);
smo238822v0.addTickables(smo238822v0ar)
fmtsmo23882231.joinVoices([smo238822v0]);
const fmtsmo23978131 = new VF.Formatter();
//
// voices and notes for stave 3 31
const smo239781v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239781v0ar = [];
const smo239760 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239760.setAttribute('id', 'smo239760');
smo239781v0ar.push(smo239760);
const smo239761 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo239761.setAttribute('id', 'smo239761');
smo239781v0ar.push(smo239761);
const smo239762 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo239762.setAttribute('id', 'smo239762');
smo239781v0ar.push(smo239762);
const smo239763 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239763.setAttribute('id', 'smo239763');
smo239781v0ar.push(smo239763);
const smo239764 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239764.setAttribute('id', 'smo239764');
smo239781v0ar.push(smo239764);
const smo239765 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239765.setAttribute('id', 'smo239765');
smo239781v0ar.push(smo239765);
smo239781v0.addTickables(smo239781v0ar)
fmtsmo23978131.joinVoices([smo239781v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
const dirsmo246686 = smo237836.getStemDirection();
smo237836.setStemDirection(dirsmo246686);
smo237837.setStemDirection(dirsmo246686);
const smo246686 = new VF.Beam([smo237836,smo237837]);
const dirsmo246687 = smo237838.getStemDirection();
smo237838.setStemDirection(dirsmo246687);
smo237839.setStemDirection(dirsmo246687);
const smo246687 = new VF.Beam([smo237838,smo237839]);
const dirsmo246692 = smo239760.getStemDirection();
smo239760.setStemDirection(dirsmo246692);
smo239761.setStemDirection(dirsmo246692);
const smo246692 = new VF.Beam([smo239760,smo239761]);
const dirsmo246693 = smo239762.getStemDirection();
smo239762.setStemDirection(dirsmo246693);
smo239763.setStemDirection(dirsmo246693);
const smo246693 = new VF.Beam([smo239762,smo239763]);
 
// formatting measures in staff group smo240133
fmtsmo23688031.format([smo236880v0,smo237855v0,smo238822v0,smo239781v0], 245);
const stavesmo236880 = new VF.Stave(1118, 219, 259);
stavesmo236880.setAttribute('id', 'stavesmo236880');
stavesmo236880.setBegBarType(VF.Barline.type.NONE);
stavesmo236880.setContext(context);
stavesmo236880.draw();
smo236880v0.draw(context, stavesmo236880);
const stavesmo237855 = new VF.Stave(1118, 311, 259);
stavesmo237855.setAttribute('id', 'stavesmo237855');
stavesmo237855.setBegBarType(VF.Barline.type.NONE);
stavesmo237855.setContext(context);
stavesmo237855.draw();
smo237855v0.draw(context, stavesmo237855);
smo246686.setContext(context);
smo246686.draw();
smo246687.setContext(context);
smo246687.draw();
const stavesmo238822 = new VF.Stave(1118, 389, 259);
stavesmo238822.setAttribute('id', 'stavesmo238822');
stavesmo238822.setBegBarType(VF.Barline.type.NONE);
stavesmo238822.setContext(context);
stavesmo238822.draw();
smo238822v0.draw(context, stavesmo238822);
const stavesmo239781 = new VF.Stave(1118, 473, 259);
stavesmo239781.setAttribute('id', 'stavesmo239781');
stavesmo239781.setBegBarType(VF.Barline.type.NONE);
stavesmo239781.setContext(context);
stavesmo239781.draw();
smo239781v0.draw(context, stavesmo239781);
smo246692.setContext(context);
smo246692.draw();
smo246693.setContext(context);
smo246693.draw();
const rightsmo240133stavesmo2368803 = new VF.StaveConnector(stavesmo236880, stavesmo239781).setType(0);
rightsmo240133stavesmo2368803.setContext(context).draw();
const fmtsmo23690732 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo236907v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236907v0ar = [];
const smo236881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236881.setAttribute('id', 'smo236881');
const smo236883 = new VF.Ornament('mordent');
smo236881.addModifier(smo236883, 0);
const smo236882 = new VF.Annotation('Со');
smo236882.setAttribute('id', 'smo236882');
smo236882.setFont('Merriweather', 12.1, 'normal');
smo236882.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236881.addModifier(smo236882);
smo236882.addClass('lyric lyric-0');
smo236907v0ar.push(smo236881);
const smo236884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236884.setAttribute('id', 'smo236884');
const smo236885 = new VF.Annotation('-');
smo236885.setAttribute('id', 'smo236885');
smo236885.setFont('Merriweather', 12.1, 'normal');
smo236885.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236884.addModifier(smo236885);
smo236885.addClass('lyric lyric-0 lyric-hyphen');
smo236907v0ar.push(smo236884);
const smo236886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236886.setAttribute('id', 'smo236886');
const smo236887 = new VF.Annotation('-');
smo236887.setAttribute('id', 'smo236887');
smo236887.setFont('Merriweather', 12.1, 'normal');
smo236887.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236886.addModifier(smo236887);
smo236887.addClass('lyric lyric-0 lyric-hyphen');
smo236907v0ar.push(smo236886);
const smo236888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo236888.setAttribute('id', 'smo236888');
const smo236889 = new VF.Annotation('ло');
smo236889.setAttribute('id', 'smo236889');
smo236889.setFont('Merriweather', 12.1, 'normal');
smo236889.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236888.addModifier(smo236889);
smo236889.addClass('lyric lyric-0');
smo236907v0ar.push(smo236888);
const smo236890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236890.setAttribute('id', 'smo236890');
const smo236891 = new VF.Annotation('-');
smo236891.setAttribute('id', 'smo236891');
smo236891.setFont('Merriweather', 12.1, 'normal');
smo236891.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236890.addModifier(smo236891);
smo236891.addClass('lyric lyric-0 lyric-hyphen');
smo236907v0ar.push(smo236890);
smo236907v0.addTickables(smo236907v0ar)
fmtsmo23690732.joinVoices([smo236907v0]);
const fmtsmo23787732 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo237877v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237877v0ar = [];
const smo237856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237856.setAttribute('id', 'smo237856');
smo237877v0ar.push(smo237856);
const smo237857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237857.setAttribute('id', 'smo237857');
const  smo247520 = new VF.Articulation('ao').setPosition(3);
smo237857.addModifier(smo247520, 0);
smo237877v0ar.push(smo237857);
const smo237859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237859.setAttribute('id', 'smo237859');
smo237877v0ar.push(smo237859);
const smo237860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237860.setAttribute('id', 'smo237860');
const  smo247521 = new VF.Articulation('ao').setPosition(3);
smo237860.addModifier(smo247521, 0);
smo237877v0ar.push(smo237860);
smo237877v0.addTickables(smo237877v0ar)
fmtsmo23787732.joinVoices([smo237877v0]);
const fmtsmo23883932 = new VF.Formatter();
//
// voices and notes for stave 2 32
const smo238839v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238839v0ar = [];
const smo238823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238823.setAttribute('id', 'smo238823');
smo238839v0ar.push(smo238823);
smo238839v0.addTickables(smo238839v0ar)
fmtsmo23883932.joinVoices([smo238839v0]);
const fmtsmo23980332 = new VF.Formatter();
//
// voices and notes for stave 3 32
const smo239803v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239803v0ar = [];
const smo239782 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239782.setAttribute('id', 'smo239782');
const  smo247522 = new VF.Articulation('ao').setPosition(3);
smo239782.addModifier(smo247522, 0);
smo239803v0ar.push(smo239782);
const smo239784 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239784.setAttribute('id', 'smo239784');
smo239803v0ar.push(smo239784);
const smo239785 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo239785.setAttribute('id', 'smo239785');
const  smo247523 = new VF.Articulation('ao').setPosition(3);
smo239785.addModifier(smo247523, 0);
smo239803v0ar.push(smo239785);
const smo239787 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239787.setAttribute('id', 'smo239787');
smo239803v0ar.push(smo239787);
smo239803v0.addTickables(smo239803v0ar)
fmtsmo23980332.joinVoices([smo239803v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
const dirsmo246706 = smo236884.getStemDirection();
smo236884.setStemDirection(dirsmo246706);
smo236886.setStemDirection(dirsmo246706);
const smo246706 = new VF.Beam([smo236884,smo236886]);
 
// formatting measures in staff group smo240133
fmtsmo23690732.format([smo236907v0,smo237877v0,smo238839v0,smo239803v0], 173);
const stavesmo236907 = new VF.Stave(55, 627, 248);
stavesmo236907.setAttribute('id', 'stavesmo236907');
stavesmo236907.setBegBarType(1);
stavesmo236907.addClef('treble');
const keysmo236907 = new VF.KeySignature('F');
keysmo236907.addToStave(stavesmo236907);
stavesmo236907.setContext(context);
stavesmo236907.draw();
smo236907v0.draw(context, stavesmo236907);
smo246706.setContext(context);
smo246706.draw();
const stavesmo237877 = new VF.Stave(55, 730, 248);
stavesmo237877.setAttribute('id', 'stavesmo237877');
stavesmo237877.setBegBarType(1);
stavesmo237877.addClef('treble');
const keysmo237877 = new VF.KeySignature('F');
keysmo237877.addToStave(stavesmo237877);
stavesmo237877.setContext(context);
stavesmo237877.draw();
smo237877v0.draw(context, stavesmo237877);
const stavesmo238839 = new VF.Stave(55, 813, 248);
stavesmo238839.setAttribute('id', 'stavesmo238839');
stavesmo238839.setBegBarType(1);
stavesmo238839.addClef('treble');
const keysmo238839 = new VF.KeySignature('F');
keysmo238839.addToStave(stavesmo238839);
stavesmo238839.setContext(context);
stavesmo238839.draw();
smo238839v0.draw(context, stavesmo238839);
const stavesmo239803 = new VF.Stave(55, 922, 248);
stavesmo239803.setAttribute('id', 'stavesmo239803');
stavesmo239803.setBegBarType(1);
stavesmo239803.addClef('bass');
const keysmo239803 = new VF.KeySignature('F');
keysmo239803.addToStave(stavesmo239803);
stavesmo239803.setContext(context);
stavesmo239803.draw();
smo239803v0.draw(context, stavesmo239803);
const leftsmo240133stavesmo2369073 = new VF.StaveConnector(stavesmo236907, stavesmo239803).setType(1);
leftsmo240133stavesmo2369073.setContext(context).draw();
const fmtsmo23693033 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo236930v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236930v0ar = [];
const smo236908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236908.setAttribute('id', 'smo236908');
const smo236909 = new VF.Annotation('вей');
smo236909.setAttribute('id', 'smo236909');
smo236909.setFont('Merriweather', 12.1, 'normal');
smo236909.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236908.addModifier(smo236909);
smo236909.addClass('lyric lyric-0');
smo236930v0ar.push(smo236908);
const smo236910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo236910.setAttribute('id', 'smo236910');
const smo236911 = new VF.Annotation('-');
smo236911.setAttribute('id', 'smo236911');
smo236911.setFont('Merriweather', 12.1, 'normal');
smo236911.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236910.addModifier(smo236911);
smo236911.addClass('lyric lyric-0 lyric-hyphen');
smo236930v0ar.push(smo236910);
const smo236912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo236912.setAttribute('id', 'smo236912');
const smo236913 = new VF.Annotation('-');
smo236913.setAttribute('id', 'smo236913');
smo236913.setFont('Merriweather', 12.1, 'normal');
smo236913.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236912.addModifier(smo236913);
smo236913.addClass('lyric lyric-0 lyric-hyphen');
smo236930v0ar.push(smo236912);
const smo236914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo236914.setAttribute('id', 'smo236914');
smo236930v0ar.push(smo236914);
smo236930v0.addTickables(smo236930v0ar)
fmtsmo23693033.joinVoices([smo236930v0]);
const fmtsmo23789733 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo237897v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237897v0ar = [];
const smo237878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237878.setAttribute('id', 'smo237878');
smo237897v0ar.push(smo237878);
const smo237879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo237879.setAttribute('id', 'smo237879');
smo237897v0ar.push(smo237879);
const smo237880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237880.setAttribute('id', 'smo237880');
smo237897v0ar.push(smo237880);
const smo237881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo237881.setAttribute('id', 'smo237881');
smo237897v0ar.push(smo237881);
smo237897v0.addTickables(smo237897v0ar)
fmtsmo23789733.joinVoices([smo237897v0]);
const fmtsmo23885633 = new VF.Formatter();
//
// voices and notes for stave 2 33
const smo238856v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238856v0ar = [];
const smo238840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238840.setAttribute('id', 'smo238840');
smo238856v0ar.push(smo238840);
smo238856v0.addTickables(smo238856v0ar)
fmtsmo23885633.joinVoices([smo238856v0]);
const fmtsmo23982333 = new VF.Formatter();
//
// voices and notes for stave 3 33
const smo239823v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239823v0ar = [];
const smo239804 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239804.setAttribute('id', 'smo239804');
smo239823v0ar.push(smo239804);
const smo239805 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239805.setAttribute('id', 'smo239805');
smo239823v0ar.push(smo239805);
const smo239806 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239806.setAttribute('id', 'smo239806');
smo239823v0ar.push(smo239806);
const smo239807 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239807.setAttribute('id', 'smo239807');
smo239823v0ar.push(smo239807);
smo239823v0.addTickables(smo239823v0ar)
fmtsmo23982333.joinVoices([smo239823v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23693033.format([smo236930v0,smo237897v0,smo238856v0,smo239823v0], 144);
const stavesmo236930 = new VF.Stave(303, 627, 158);
stavesmo236930.setAttribute('id', 'stavesmo236930');
stavesmo236930.setBegBarType(VF.Barline.type.NONE);
stavesmo236930.setContext(context);
stavesmo236930.draw();
smo236930v0.draw(context, stavesmo236930);
const stavesmo237897 = new VF.Stave(303, 730, 158);
stavesmo237897.setAttribute('id', 'stavesmo237897');
stavesmo237897.setBegBarType(VF.Barline.type.NONE);
stavesmo237897.setContext(context);
stavesmo237897.draw();
smo237897v0.draw(context, stavesmo237897);
const stavesmo238856 = new VF.Stave(303, 813, 158);
stavesmo238856.setAttribute('id', 'stavesmo238856');
stavesmo238856.setBegBarType(VF.Barline.type.NONE);
stavesmo238856.setContext(context);
stavesmo238856.draw();
smo238856v0.draw(context, stavesmo238856);
const stavesmo239823 = new VF.Stave(303, 922, 158);
stavesmo239823.setAttribute('id', 'stavesmo239823');
stavesmo239823.setBegBarType(VF.Barline.type.NONE);
stavesmo239823.setContext(context);
stavesmo239823.draw();
smo239823v0.draw(context, stavesmo239823);
const fmtsmo23695734 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo236957v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236957v0ar = [];
const smo236931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236931.setAttribute('id', 'smo236931');
const smo236933 = new VF.Ornament('mordent');
smo236931.addModifier(smo236933, 0);
const smo236932 = new VF.Annotation('Со');
smo236932.setAttribute('id', 'smo236932');
smo236932.setFont('Merriweather', 12.1, 'normal');
smo236932.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236931.addModifier(smo236932);
smo236932.addClass('lyric lyric-0');
smo236957v0ar.push(smo236931);
const smo236934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236934.setAttribute('id', 'smo236934');
const smo236935 = new VF.Annotation('-');
smo236935.setAttribute('id', 'smo236935');
smo236935.setFont('Merriweather', 12.1, 'normal');
smo236935.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236934.addModifier(smo236935);
smo236935.addClass('lyric lyric-0 lyric-hyphen');
smo236957v0ar.push(smo236934);
const smo236936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236936.setAttribute('id', 'smo236936');
const smo236937 = new VF.Annotation('-');
smo236937.setAttribute('id', 'smo236937');
smo236937.setFont('Merriweather', 12.1, 'normal');
smo236937.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236936.addModifier(smo236937);
smo236937.addClass('lyric lyric-0 lyric-hyphen');
smo236957v0ar.push(smo236936);
const smo236938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo236938.setAttribute('id', 'smo236938');
const smo236939 = new VF.Annotation('ло');
smo236939.setAttribute('id', 'smo236939');
smo236939.setFont('Merriweather', 12.1, 'normal');
smo236939.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236938.addModifier(smo236939);
smo236939.addClass('lyric lyric-0');
smo236957v0ar.push(smo236938);
const smo236940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236940.setAttribute('id', 'smo236940');
const smo236941 = new VF.Annotation('-');
smo236941.setAttribute('id', 'smo236941');
smo236941.setFont('Merriweather', 12.1, 'normal');
smo236941.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236940.addModifier(smo236941);
smo236941.addClass('lyric lyric-0 lyric-hyphen');
smo236957v0ar.push(smo236940);
smo236957v0.addTickables(smo236957v0ar)
fmtsmo23695734.joinVoices([smo236957v0]);
const fmtsmo23791734 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo237917v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237917v0ar = [];
const smo237898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237898.setAttribute('id', 'smo237898');
smo237917v0ar.push(smo237898);
const smo237899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237899.setAttribute('id', 'smo237899');
smo237917v0ar.push(smo237899);
const smo237900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237900.setAttribute('id', 'smo237900');
smo237917v0ar.push(smo237900);
const smo237901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237901.setAttribute('id', 'smo237901');
smo237917v0ar.push(smo237901);
smo237917v0.addTickables(smo237917v0ar)
fmtsmo23791734.joinVoices([smo237917v0]);
const fmtsmo23887334 = new VF.Formatter();
//
// voices and notes for stave 2 34
const smo238873v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238873v0ar = [];
const smo238857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238857.setAttribute('id', 'smo238857');
smo238873v0ar.push(smo238857);
smo238873v0.addTickables(smo238873v0ar)
fmtsmo23887334.joinVoices([smo238873v0]);
const fmtsmo23984334 = new VF.Formatter();
//
// voices and notes for stave 3 34
const smo239843v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239843v0ar = [];
const smo239824 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239824.setAttribute('id', 'smo239824');
smo239843v0ar.push(smo239824);
const smo239825 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239825.setAttribute('id', 'smo239825');
smo239843v0ar.push(smo239825);
const smo239826 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo239826.setAttribute('id', 'smo239826');
smo239843v0ar.push(smo239826);
const smo239827 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239827.setAttribute('id', 'smo239827');
smo239843v0ar.push(smo239827);
smo239843v0.addTickables(smo239843v0ar)
fmtsmo23984334.joinVoices([smo239843v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
const dirsmo246723 = smo236934.getStemDirection();
smo236934.setStemDirection(dirsmo246723);
smo236936.setStemDirection(dirsmo246723);
const smo246723 = new VF.Beam([smo236934,smo236936]);
 
// formatting measures in staff group smo240133
fmtsmo23695734.format([smo236957v0,smo237917v0,smo238873v0,smo239843v0], 172);
const stavesmo236957 = new VF.Stave(461, 627, 186);
stavesmo236957.setAttribute('id', 'stavesmo236957');
stavesmo236957.setBegBarType(VF.Barline.type.NONE);
stavesmo236957.setContext(context);
stavesmo236957.draw();
smo236957v0.draw(context, stavesmo236957);
smo246723.setContext(context);
smo246723.draw();
const stavesmo237917 = new VF.Stave(461, 730, 186);
stavesmo237917.setAttribute('id', 'stavesmo237917');
stavesmo237917.setBegBarType(VF.Barline.type.NONE);
stavesmo237917.setContext(context);
stavesmo237917.draw();
smo237917v0.draw(context, stavesmo237917);
const stavesmo238873 = new VF.Stave(461, 813, 186);
stavesmo238873.setAttribute('id', 'stavesmo238873');
stavesmo238873.setBegBarType(VF.Barline.type.NONE);
stavesmo238873.setContext(context);
stavesmo238873.draw();
smo238873v0.draw(context, stavesmo238873);
const stavesmo239843 = new VF.Stave(461, 922, 186);
stavesmo239843.setAttribute('id', 'stavesmo239843');
stavesmo239843.setBegBarType(VF.Barline.type.NONE);
stavesmo239843.setContext(context);
stavesmo239843.draw();
smo239843v0.draw(context, stavesmo239843);
const fmtsmo23697935 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo236979v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo236979v0ar = [];
const smo236958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236958.setAttribute('id', 'smo236958');
const smo236959 = new VF.Annotation('вей');
smo236959.setAttribute('id', 'smo236959');
smo236959.setFont('Merriweather', 12.1, 'normal');
smo236959.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236958.addModifier(smo236959);
smo236959.addClass('lyric lyric-0');
smo236979v0ar.push(smo236958);
const smo236960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
smo236960.setAttribute('id', 'smo236960');
const smo236961 = new VF.Annotation('-');
smo236961.setAttribute('id', 'smo236961');
smo236961.setFont('Merriweather', 12.1, 'normal');
smo236961.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236960.addModifier(smo236961);
smo236961.addClass('lyric lyric-0 lyric-hyphen');
smo236979v0ar.push(smo236960);
const smo236962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo236962.setAttribute('id', 'smo236962');
const smo236963 = new VF.Annotation('-');
smo236963.setAttribute('id', 'smo236963');
smo236963.setFont('Merriweather', 12.1, 'normal');
smo236963.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236962.addModifier(smo236963);
smo236963.addClass('lyric lyric-0 lyric-hyphen');
smo236979v0ar.push(smo236962);
smo236979v0.addTickables(smo236979v0ar)
fmtsmo23697935.joinVoices([smo236979v0]);
const fmtsmo23793735 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo237937v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237937v0ar = [];
const smo237918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237918.setAttribute('id', 'smo237918');
smo237937v0ar.push(smo237918);
const smo237919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo237919.setAttribute('id', 'smo237919');
smo237937v0ar.push(smo237919);
const smo237920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237920.setAttribute('id', 'smo237920');
smo237937v0ar.push(smo237920);
const smo237921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo237921.setAttribute('id', 'smo237921');
smo237937v0ar.push(smo237921);
smo237937v0.addTickables(smo237937v0ar)
fmtsmo23793735.joinVoices([smo237937v0]);
const fmtsmo23889035 = new VF.Formatter();
//
// voices and notes for stave 2 35
const smo238890v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238890v0ar = [];
const smo238874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238874.setAttribute('id', 'smo238874');
smo238890v0ar.push(smo238874);
smo238890v0.addTickables(smo238890v0ar)
fmtsmo23889035.joinVoices([smo238890v0]);
const fmtsmo23986335 = new VF.Formatter();
//
// voices and notes for stave 3 35
const smo239863v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239863v0ar = [];
const smo239844 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239844.setAttribute('id', 'smo239844');
smo239863v0ar.push(smo239844);
const smo239845 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239845.setAttribute('id', 'smo239845');
smo239863v0ar.push(smo239845);
const smo239846 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239846.setAttribute('id', 'smo239846');
smo239863v0ar.push(smo239846);
const smo239847 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239847.setAttribute('id', 'smo239847');
smo239863v0ar.push(smo239847);
smo239863v0.addTickables(smo239863v0ar)
fmtsmo23986335.joinVoices([smo239863v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23697935.format([smo236979v0,smo237937v0,smo238890v0,smo239863v0], 136);
const stavesmo236979 = new VF.Stave(647, 627, 150);
stavesmo236979.setAttribute('id', 'stavesmo236979');
stavesmo236979.setBegBarType(VF.Barline.type.NONE);
stavesmo236979.setContext(context);
stavesmo236979.draw();
smo236979v0.draw(context, stavesmo236979);
const stavesmo237937 = new VF.Stave(647, 730, 150);
stavesmo237937.setAttribute('id', 'stavesmo237937');
stavesmo237937.setBegBarType(VF.Barline.type.NONE);
stavesmo237937.setContext(context);
stavesmo237937.draw();
smo237937v0.draw(context, stavesmo237937);
const stavesmo238890 = new VF.Stave(647, 813, 150);
stavesmo238890.setAttribute('id', 'stavesmo238890');
stavesmo238890.setBegBarType(VF.Barline.type.NONE);
stavesmo238890.setContext(context);
stavesmo238890.draw();
smo238890v0.draw(context, stavesmo238890);
const stavesmo239863 = new VF.Stave(647, 922, 150);
stavesmo239863.setAttribute('id', 'stavesmo239863');
stavesmo239863.setBegBarType(VF.Barline.type.NONE);
stavesmo239863.setContext(context);
stavesmo239863.draw();
smo239863v0.draw(context, stavesmo239863);
const fmtsmo23700536 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo237005v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237005v0ar = [];
const smo236980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236980.setAttribute('id', 'smo236980');
const smo236981 = new VF.Annotation('го');
smo236981.setAttribute('id', 'smo236981');
smo236981.setFont('Merriweather', 12.1, 'normal');
smo236981.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236980.addModifier(smo236981);
smo236981.addClass('lyric lyric-0');
smo237005v0ar.push(smo236980);
const smo236982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo236982.setAttribute('id', 'smo236982');
const smo236983 = new VF.Annotation('-');
smo236983.setAttribute('id', 'smo236983');
smo236983.setFont('Merriweather', 12.1, 'normal');
smo236983.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236982.addModifier(smo236983);
smo236983.addClass('lyric lyric-0 lyric-hyphen');
smo237005v0ar.push(smo236982);
const smo236984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236984.setAttribute('id', 'smo236984');
const smo236985 = new VF.Annotation('-');
smo236985.setAttribute('id', 'smo236985');
smo236985.setFont('Merriweather', 12.1, 'normal');
smo236985.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236984.addModifier(smo236985);
smo236985.addClass('lyric lyric-0 lyric-hyphen');
smo237005v0ar.push(smo236984);
const smo236986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo236986.setAttribute('id', 'smo236986');
const smo2369860acc = new VF.Accidental('#');
smo236986.addModifier(smo2369860acc, 0);
const smo236987 = new VF.Annotation('-');
smo236987.setAttribute('id', 'smo236987');
smo236987.setFont('Merriweather', 12.1, 'normal');
smo236987.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236986.addModifier(smo236987);
smo236987.addClass('lyric lyric-0 lyric-hyphen');
smo237005v0ar.push(smo236986);
const smo236988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo236988.setAttribute('id', 'smo236988');
const smo236989 = new VF.Annotation('ло');
smo236989.setAttribute('id', 'smo236989');
smo236989.setFont('Merriweather', 12.1, 'normal');
smo236989.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo236988.addModifier(smo236989);
smo236989.addClass('lyric lyric-0 lyric-hyphen');
smo237005v0ar.push(smo236988);
smo237005v0.addTickables(smo237005v0ar)
fmtsmo23700536.joinVoices([smo237005v0]);
const fmtsmo23795736 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo237957v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237957v0ar = [];
const smo237938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237938.setAttribute('id', 'smo237938');
smo237957v0ar.push(smo237938);
const smo237939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo237939.setAttribute('id', 'smo237939');
smo237957v0ar.push(smo237939);
const smo237940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237940.setAttribute('id', 'smo237940');
smo237957v0ar.push(smo237940);
const smo237941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo237941.setAttribute('id', 'smo237941');
smo237957v0ar.push(smo237941);
smo237957v0.addTickables(smo237957v0ar)
fmtsmo23795736.joinVoices([smo237957v0]);
const fmtsmo23890836 = new VF.Formatter();
//
// voices and notes for stave 2 36
const smo238908v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238908v0ar = [];
const smo238891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo238891.setAttribute('id', 'smo238891');
smo238908v0ar.push(smo238891);
const smo238892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238892.setAttribute('id', 'smo238892');
smo238908v0ar.push(smo238892);
smo238908v0.addTickables(smo238908v0ar)
fmtsmo23890836.joinVoices([smo238908v0]);
const fmtsmo23988336 = new VF.Formatter();
//
// voices and notes for stave 3 36
const smo239883v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239883v0ar = [];
const smo239864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo239864.setAttribute('id', 'smo239864');
smo239883v0ar.push(smo239864);
const smo239865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239865.setAttribute('id', 'smo239865');
smo239883v0ar.push(smo239865);
const smo239866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239866.setAttribute('id', 'smo239866');
smo239883v0ar.push(smo239866);
const smo239867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239867.setAttribute('id', 'smo239867');
smo239883v0ar.push(smo239867);
smo239883v0.addTickables(smo239883v0ar)
fmtsmo23988336.joinVoices([smo239883v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
const dirsmo246740 = smo236982.getStemDirection();
smo236982.setStemDirection(dirsmo246740);
smo236984.setStemDirection(dirsmo246740);
const smo246740 = new VF.Beam([smo236982,smo236984]);
 
// formatting measures in staff group smo240133
fmtsmo23700536.format([smo237005v0,smo237957v0,smo238908v0,smo239883v0], 174);
const stavesmo237005 = new VF.Stave(797, 627, 188);
stavesmo237005.setAttribute('id', 'stavesmo237005');
stavesmo237005.setBegBarType(VF.Barline.type.NONE);
stavesmo237005.setContext(context);
stavesmo237005.draw();
smo237005v0.draw(context, stavesmo237005);
smo246740.setContext(context);
smo246740.draw();
const stavesmo237957 = new VF.Stave(797, 730, 188);
stavesmo237957.setAttribute('id', 'stavesmo237957');
stavesmo237957.setBegBarType(VF.Barline.type.NONE);
stavesmo237957.setContext(context);
stavesmo237957.draw();
smo237957v0.draw(context, stavesmo237957);
const stavesmo238908 = new VF.Stave(797, 813, 188);
stavesmo238908.setAttribute('id', 'stavesmo238908');
stavesmo238908.setBegBarType(VF.Barline.type.NONE);
stavesmo238908.setContext(context);
stavesmo238908.draw();
smo238908v0.draw(context, stavesmo238908);
const stavesmo239883 = new VF.Stave(797, 922, 188);
stavesmo239883.setAttribute('id', 'stavesmo239883');
stavesmo239883.setBegBarType(VF.Barline.type.NONE);
stavesmo239883.setContext(context);
stavesmo239883.draw();
smo239883v0.draw(context, stavesmo239883);
const fmtsmo23702737 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo237027v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237027v0ar = [];
const smo237006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo237006.setAttribute('id', 'smo237006');
const smo237007 = new VF.Annotation('си');
smo237007.setAttribute('id', 'smo237007');
smo237007.setFont('Merriweather', 12.1, 'normal');
smo237007.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237006.addModifier(smo237007);
smo237007.addClass('lyric lyric-0 lyric-hyphen');
smo237027v0ar.push(smo237006);
const smo237008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237008.setAttribute('id', 'smo237008');
const smo237009 = new VF.Annotation('ст');
smo237009.setAttribute('id', 'smo237009');
smo237009.setFont('Merriweather', 12.1, 'normal');
smo237009.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237008.addModifier(smo237009);
smo237009.addClass('lyric lyric-0');
smo237027v0ar.push(smo237008);
const smo237010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237010.setAttribute('id', 'smo237010');
const smo237011 = new VF.Annotation('ый');
smo237011.setAttribute('id', 'smo237011');
smo237011.setFont('Merriweather', 12.1, 'normal');
smo237011.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237010.addModifier(smo237011);
smo237011.addClass('lyric lyric-0');
smo237027v0ar.push(smo237010);
smo237027v0.addTickables(smo237027v0ar)
fmtsmo23702737.joinVoices([smo237027v0]);
const fmtsmo23797537 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo237975v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237975v0ar = [];
const smo237958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo237958.setAttribute('id', 'smo237958');
smo237975v0ar.push(smo237958);
const smo237959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo237959.setAttribute('id', 'smo237959');
smo237975v0ar.push(smo237959);
smo237975v0.addTickables(smo237975v0ar)
fmtsmo23797537.joinVoices([smo237975v0]);
const fmtsmo23892637 = new VF.Formatter();
//
// voices and notes for stave 2 37
const smo238926v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238926v0ar = [];
const smo238909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo238909.setAttribute('id', 'smo238909');
smo238926v0ar.push(smo238909);
const smo238910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238910.setAttribute('id', 'smo238910');
smo238926v0ar.push(smo238910);
smo238926v0.addTickables(smo238926v0ar)
fmtsmo23892637.joinVoices([smo238926v0]);
const fmtsmo23990137 = new VF.Formatter();
//
// voices and notes for stave 3 37
const smo239901v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239901v0ar = [];
const smo239884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo239884.setAttribute('id', 'smo239884');
smo239901v0ar.push(smo239884);
const smo239885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239885.setAttribute('id', 'smo239885');
smo239901v0ar.push(smo239885);
smo239901v0.addTickables(smo239901v0ar)
fmtsmo23990137.joinVoices([smo239901v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23702737.format([smo237027v0,smo237975v0,smo238926v0,smo239901v0], 143);
const stavesmo237027 = new VF.Stave(985, 627, 157);
stavesmo237027.setAttribute('id', 'stavesmo237027');
stavesmo237027.setBegBarType(VF.Barline.type.NONE);
stavesmo237027.setContext(context);
stavesmo237027.draw();
smo237027v0.draw(context, stavesmo237027);
const stavesmo237975 = new VF.Stave(985, 730, 157);
stavesmo237975.setAttribute('id', 'stavesmo237975');
stavesmo237975.setBegBarType(VF.Barline.type.NONE);
stavesmo237975.setContext(context);
stavesmo237975.draw();
smo237975v0.draw(context, stavesmo237975);
const stavesmo238926 = new VF.Stave(985, 813, 157);
stavesmo238926.setAttribute('id', 'stavesmo238926');
stavesmo238926.setBegBarType(VF.Barline.type.NONE);
stavesmo238926.setContext(context);
stavesmo238926.draw();
smo238926v0.draw(context, stavesmo238926);
const stavesmo239901 = new VF.Stave(985, 922, 157);
stavesmo239901.setAttribute('id', 'stavesmo239901');
stavesmo239901.setBegBarType(VF.Barline.type.NONE);
stavesmo239901.setContext(context);
stavesmo239901.draw();
smo239901v0.draw(context, stavesmo239901);
const fmtsmo23705038 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo237050v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237050v0ar = [];
const smo237028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237028.setAttribute('id', 'smo237028');
smo237028.addModifier(new VF.Dot(), 0);
const  smo247572 = new VF.Articulation('a@a').setPosition(3);
smo237028.addModifier(smo247572, 0);
const smo237029 = new VF.Annotation('со');
smo237029.setAttribute('id', 'smo237029');
smo237029.setFont('Merriweather', 12.1, 'normal');
smo237029.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237028.addModifier(smo237029);
smo237029.addClass('lyric lyric-0');
smo237050v0ar.push(smo237028);
const smo237031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo237031.setAttribute('id', 'smo237031');
const smo2370310acc = new VF.Accidental('#');
smo237031.addModifier(smo2370310acc, 0);
const smo237032 = new VF.Annotation('-');
smo237032.setAttribute('id', 'smo237032');
smo237032.setFont('Merriweather', 12.1, 'normal');
smo237032.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237031.addModifier(smo237032);
smo237032.addClass('lyric lyric-0 lyric-hyphen');
smo237050v0ar.push(smo237031);
const smo237033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237033.setAttribute('id', 'smo237033');
smo237050v0ar.push(smo237033);
smo237050v0.addTickables(smo237050v0ar)
fmtsmo23705038.joinVoices([smo237050v0]);
const fmtsmo23799338 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo237993v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237993v0ar = [];
const smo237976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237976.setAttribute('id', 'smo237976');
smo237976.addModifier(new VF.Dot(), 0);
smo237993v0ar.push(smo237976);
const smo237977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237977.setAttribute('id', 'smo237977');
smo237993v0ar.push(smo237977);
smo237993v0.addTickables(smo237993v0ar)
fmtsmo23799338.joinVoices([smo237993v0]);
const fmtsmo23894438 = new VF.Formatter();
//
// voices and notes for stave 2 38
const smo238944v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238944v0ar = [];
const smo238927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo238927.setAttribute('id', 'smo238927');
smo238927.addModifier(new VF.Dot(), 0);
smo238944v0ar.push(smo238927);
const smo238928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238928.setAttribute('id', 'smo238928');
smo238944v0ar.push(smo238928);
smo238944v0.addTickables(smo238944v0ar)
fmtsmo23894438.joinVoices([smo238944v0]);
const fmtsmo23991938 = new VF.Formatter();
//
// voices and notes for stave 3 38
const smo239919v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239919v0ar = [];
const smo239902 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239902.setAttribute('id', 'smo239902');
smo239902.addModifier(new VF.Dot(), 0);
smo239919v0ar.push(smo239902);
const smo239903 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239903.setAttribute('id', 'smo239903');
smo239919v0ar.push(smo239903);
smo239919v0.addTickables(smo239919v0ar)
fmtsmo23991938.joinVoices([smo239919v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
const dirsmo246757 = smo237031.getStemDirection();
smo237031.setStemDirection(dirsmo246757);
smo237033.setStemDirection(dirsmo246757);
const smo246757 = new VF.Beam([smo237031,smo237033]);
 
// formatting measures in staff group smo240133
fmtsmo23705038.format([smo237050v0,smo237993v0,smo238944v0,smo239919v0], 100);
const stavesmo237050 = new VF.Stave(1142, 627, 114);
stavesmo237050.setAttribute('id', 'stavesmo237050');
stavesmo237050.setBegBarType(VF.Barline.type.NONE);
stavesmo237050.setContext(context);
stavesmo237050.draw();
smo237050v0.draw(context, stavesmo237050);
smo246757.setContext(context);
smo246757.draw();
const stavesmo237993 = new VF.Stave(1142, 730, 114);
stavesmo237993.setAttribute('id', 'stavesmo237993');
stavesmo237993.setBegBarType(VF.Barline.type.NONE);
stavesmo237993.setContext(context);
stavesmo237993.draw();
smo237993v0.draw(context, stavesmo237993);
const stavesmo238944 = new VF.Stave(1142, 813, 114);
stavesmo238944.setAttribute('id', 'stavesmo238944');
stavesmo238944.setBegBarType(VF.Barline.type.NONE);
stavesmo238944.setContext(context);
stavesmo238944.draw();
smo238944v0.draw(context, stavesmo238944);
const stavesmo239919 = new VF.Stave(1142, 922, 114);
stavesmo239919.setAttribute('id', 'stavesmo239919');
stavesmo239919.setBegBarType(VF.Barline.type.NONE);
stavesmo239919.setContext(context);
stavesmo239919.draw();
smo239919v0.draw(context, stavesmo239919);
const fmtsmo23707039 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo237070v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237070v0ar = [];
const smo237051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo237051.setAttribute('id', 'smo237051');
smo237051.addModifier(new VF.Dot(), 0);
const smo237052 = new VF.Annotation('ло');
smo237052.setAttribute('id', 'smo237052');
smo237052.setFont('Merriweather', 12.1, 'normal');
smo237052.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237051.addModifier(smo237052);
smo237052.addClass('lyric lyric-0');
smo237070v0ar.push(smo237051);
const smo237053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo237053.setAttribute('id', 'smo237053');
const smo237054 = new VF.Annotation('-');
smo237054.setAttribute('id', 'smo237054');
smo237054.setFont('Merriweather', 12.1, 'normal');
smo237054.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237053.addModifier(smo237054);
smo237054.addClass('lyric lyric-0 lyric-hyphen');
smo237070v0ar.push(smo237053);
smo237070v0.addTickables(smo237070v0ar)
fmtsmo23707039.joinVoices([smo237070v0]);
const fmtsmo23801239 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo238012v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238012v0ar = [];
const smo237994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237994.setAttribute('id', 'smo237994');
smo238012v0ar.push(smo237994);
const smo237995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237995.setAttribute('id', 'smo237995');
smo238012v0ar.push(smo237995);
const smo237996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo237996.setAttribute('id', 'smo237996');
smo238012v0ar.push(smo237996);
smo238012v0.addTickables(smo238012v0ar)
fmtsmo23801239.joinVoices([smo238012v0]);
const fmtsmo23896339 = new VF.Formatter();
//
// voices and notes for stave 2 39
const smo238963v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238963v0ar = [];
const smo238945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238945.setAttribute('id', 'smo238945');
smo238963v0ar.push(smo238945);
const smo238946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238946.setAttribute('id', 'smo238946');
smo238963v0ar.push(smo238946);
const smo238947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n"]}'))
smo238947.setAttribute('id', 'smo238947');
const smo2389470acc = new VF.Accidental('#');
smo238947.addModifier(smo2389470acc, 0);
smo238963v0ar.push(smo238947);
smo238963v0.addTickables(smo238963v0ar)
fmtsmo23896339.joinVoices([smo238963v0]);
const fmtsmo23993839 = new VF.Formatter();
//
// voices and notes for stave 3 39
const smo239938v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239938v0ar = [];
const smo239920 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239920.setAttribute('id', 'smo239920');
smo239938v0ar.push(smo239920);
const smo239921 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo239921.setAttribute('id', 'smo239921');
smo239938v0ar.push(smo239921);
const smo239922 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo239922.setAttribute('id', 'smo239922');
smo239938v0ar.push(smo239922);
smo239938v0.addTickables(smo239938v0ar)
fmtsmo23993839.joinVoices([smo239938v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23707039.format([smo237070v0,smo238012v0,smo238963v0,smo239938v0], 106);
const stavesmo237070 = new VF.Stave(1256, 627, 120);
stavesmo237070.setAttribute('id', 'stavesmo237070');
stavesmo237070.setBegBarType(VF.Barline.type.NONE);
stavesmo237070.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":144}'), -1 * 0);
stavesmo237070.setContext(context);
stavesmo237070.draw();
smo237070v0.draw(context, stavesmo237070);
const stavesmo238012 = new VF.Stave(1256, 730, 120);
stavesmo238012.setAttribute('id', 'stavesmo238012');
stavesmo238012.setBegBarType(VF.Barline.type.NONE);
stavesmo238012.setContext(context);
stavesmo238012.draw();
smo238012v0.draw(context, stavesmo238012);
const stavesmo238963 = new VF.Stave(1256, 813, 120);
stavesmo238963.setAttribute('id', 'stavesmo238963');
stavesmo238963.setBegBarType(VF.Barline.type.NONE);
stavesmo238963.setContext(context);
stavesmo238963.draw();
smo238963v0.draw(context, stavesmo238963);
const stavesmo239938 = new VF.Stave(1256, 922, 120);
stavesmo239938.setAttribute('id', 'stavesmo239938');
stavesmo239938.setBegBarType(VF.Barline.type.NONE);
stavesmo239938.setContext(context);
stavesmo239938.draw();
smo239938v0.draw(context, stavesmo239938);
const rightsmo240133stavesmo2370703 = new VF.StaveConnector(stavesmo237070, stavesmo239938).setType(0);
rightsmo240133stavesmo2370703.setContext(context).draw();
const fmtsmo23709040 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo237090v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237090v0ar = [];
const smo237071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo237071.setAttribute('id', 'smo237071');
const smo237072 = new VF.Annotation('вей');
smo237072.setAttribute('id', 'smo237072');
smo237072.setFont('Merriweather', 12.1, 'normal');
smo237072.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo237071.addModifier(smo237072);
smo237072.addClass('lyric lyric-0');
smo237090v0ar.push(smo237071);
const smo237073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237073.setAttribute('id', 'smo237073');
smo237090v0ar.push(smo237073);
const smo237074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237074.setAttribute('id', 'smo237074');
smo237090v0ar.push(smo237074);
smo237090v0.addTickables(smo237090v0ar)
fmtsmo23709040.joinVoices([smo237090v0]);
const fmtsmo23803440 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo238034v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238034v0ar = [];
const smo238013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo238014 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["an/4"],"slash":false}'))
smo238014.setAttribute('id', 'smo238014');
const ggrpsmo238013 = new VF.GraceNoteGroup([smo238014]);
ggrpsmo238013.beamNotes();
smo238013.addModifier(ggrpsmo238013, 0);
smo238013.setAttribute('id', 'smo238013');
smo238034v0ar.push(smo238013);
const smo238015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238015.setAttribute('id', 'smo238015');
smo238034v0ar.push(smo238015);
const smo238016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
const smo238017 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["dn/5"],"slash":false}'))
smo238017.setAttribute('id', 'smo238017');
const ggrpsmo238016 = new VF.GraceNoteGroup([smo238017]);
ggrpsmo238016.beamNotes();
smo238016.addModifier(ggrpsmo238016, 0);
smo238016.setAttribute('id', 'smo238016');
smo238034v0ar.push(smo238016);
const smo238018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238018.setAttribute('id', 'smo238018');
smo238034v0ar.push(smo238018);
smo238034v0.addTickables(smo238034v0ar)
fmtsmo23803440.joinVoices([smo238034v0]);
const fmtsmo23898340 = new VF.Formatter();
//
// voices and notes for stave 2 40
const smo238983v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238983v0ar = [];
const smo238964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo238964.setAttribute('id', 'smo238964');
smo238983v0ar.push(smo238964);
const smo238965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo238965.setAttribute('id', 'smo238965');
smo238983v0ar.push(smo238965);
const smo238966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo238966.setAttribute('id', 'smo238966');
smo238983v0ar.push(smo238966);
const smo238967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo238967.setAttribute('id', 'smo238967');
smo238983v0ar.push(smo238967);
smo238983v0.addTickables(smo238983v0ar)
fmtsmo23898340.joinVoices([smo238983v0]);
const fmtsmo23995840 = new VF.Formatter();
//
// voices and notes for stave 3 40
const smo239958v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239958v0ar = [];
const smo239939 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239939.setAttribute('id', 'smo239939');
smo239958v0ar.push(smo239939);
const smo239940 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239940.setAttribute('id', 'smo239940');
smo239958v0ar.push(smo239940);
const smo239941 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239941.setAttribute('id', 'smo239941');
smo239958v0ar.push(smo239941);
const smo239942 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239942.setAttribute('id', 'smo239942');
smo239958v0ar.push(smo239942);
smo239958v0.addTickables(smo239958v0ar)
fmtsmo23995840.joinVoices([smo239958v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23709040.format([smo237090v0,smo238034v0,smo238983v0,smo239958v0], 170);
const stavesmo237090 = new VF.Stave(55, 1040, 244);
stavesmo237090.setAttribute('id', 'stavesmo237090');
stavesmo237090.setBegBarType(1);
stavesmo237090.addClef('treble');
const keysmo237090 = new VF.KeySignature('F');
keysmo237090.addToStave(stavesmo237090);
stavesmo237090.setContext(context);
stavesmo237090.draw();
smo237090v0.draw(context, stavesmo237090);
const stavesmo238034 = new VF.Stave(55, 1165, 244);
stavesmo238034.setAttribute('id', 'stavesmo238034');
stavesmo238034.setBegBarType(1);
stavesmo238034.addClef('treble');
const keysmo238034 = new VF.KeySignature('F');
keysmo238034.addToStave(stavesmo238034);
stavesmo238034.setContext(context);
stavesmo238034.draw();
smo238034v0.draw(context, stavesmo238034);
const stavesmo238983 = new VF.Stave(55, 1253, 244);
stavesmo238983.setAttribute('id', 'stavesmo238983');
stavesmo238983.setBegBarType(1);
stavesmo238983.addClef('treble');
const keysmo238983 = new VF.KeySignature('F');
keysmo238983.addToStave(stavesmo238983);
stavesmo238983.setContext(context);
stavesmo238983.draw();
smo238983v0.draw(context, stavesmo238983);
const stavesmo239958 = new VF.Stave(55, 1366, 244);
stavesmo239958.setAttribute('id', 'stavesmo239958');
stavesmo239958.setBegBarType(1);
stavesmo239958.addClef('bass');
const keysmo239958 = new VF.KeySignature('F');
keysmo239958.addToStave(stavesmo239958);
stavesmo239958.setContext(context);
stavesmo239958.draw();
smo239958v0.draw(context, stavesmo239958);
const leftsmo240133stavesmo2370903 = new VF.StaveConnector(stavesmo237090, stavesmo239958).setType(1);
leftsmo240133stavesmo2370903.setContext(context).draw();
const fmtsmo23710741 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo237107v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237107v0ar = [];
const smo237091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237091.setAttribute('id', 'smo237091');
smo237107v0ar.push(smo237091);
smo237107v0.addTickables(smo237107v0ar)
fmtsmo23710741.joinVoices([smo237107v0]);
const fmtsmo23805441 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo238054v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238054v0ar = [];
const smo238035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
const smo238036 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["fn/5"],"slash":false}'))
smo238036.setAttribute('id', 'smo238036');
const ggrpsmo238035 = new VF.GraceNoteGroup([smo238036]);
ggrpsmo238035.beamNotes();
smo238035.addModifier(ggrpsmo238035, 0);
smo238035.setAttribute('id', 'smo238035');
smo238035.addModifier(new VF.Dot(), 0);
smo238054v0ar.push(smo238035);
const smo238037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo238037.setAttribute('id', 'smo238037');
smo238054v0ar.push(smo238037);
const smo238038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo238038.setAttribute('id', 'smo238038');
smo238054v0ar.push(smo238038);
smo238054v0.addTickables(smo238054v0ar)
fmtsmo23805441.joinVoices([smo238054v0]);
const fmtsmo23900341 = new VF.Formatter();
//
// voices and notes for stave 2 41
const smo239003v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239003v0ar = [];
const smo238984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo238984.setAttribute('id', 'smo238984');
smo239003v0ar.push(smo238984);
const smo238985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo238985.setAttribute('id', 'smo238985');
smo239003v0ar.push(smo238985);
const smo238986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo238986.setAttribute('id', 'smo238986');
smo239003v0ar.push(smo238986);
const smo238987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo238987.setAttribute('id', 'smo238987');
smo239003v0ar.push(smo238987);
smo239003v0.addTickables(smo239003v0ar)
fmtsmo23900341.joinVoices([smo239003v0]);
const fmtsmo23997841 = new VF.Formatter();
//
// voices and notes for stave 3 41
const smo239978v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239978v0ar = [];
const smo239959 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239959.setAttribute('id', 'smo239959');
smo239978v0ar.push(smo239959);
const smo239960 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239960.setAttribute('id', 'smo239960');
smo239978v0ar.push(smo239960);
const smo239961 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239961.setAttribute('id', 'smo239961');
smo239978v0ar.push(smo239961);
const smo239962 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239962.setAttribute('id', 'smo239962');
smo239978v0ar.push(smo239962);
smo239978v0.addTickables(smo239978v0ar)
fmtsmo23997841.joinVoices([smo239978v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
const dirsmo246792 = smo238037.getStemDirection();
smo238037.setStemDirection(dirsmo246792);
smo238038.setStemDirection(dirsmo246792);
const smo246792 = new VF.Beam([smo238037,smo238038]);
 
// formatting measures in staff group smo240133
fmtsmo23710741.format([smo237107v0,smo238054v0,smo239003v0,smo239978v0], 153);
const stavesmo237107 = new VF.Stave(299, 1040, 167);
stavesmo237107.setAttribute('id', 'stavesmo237107');
stavesmo237107.setBegBarType(VF.Barline.type.NONE);
stavesmo237107.setContext(context);
stavesmo237107.draw();
smo237107v0.draw(context, stavesmo237107);
const stavesmo238054 = new VF.Stave(299, 1165, 167);
stavesmo238054.setAttribute('id', 'stavesmo238054');
stavesmo238054.setBegBarType(VF.Barline.type.NONE);
stavesmo238054.setContext(context);
stavesmo238054.draw();
smo238054v0.draw(context, stavesmo238054);
smo246792.setContext(context);
smo246792.draw();
const stavesmo239003 = new VF.Stave(299, 1253, 167);
stavesmo239003.setAttribute('id', 'stavesmo239003');
stavesmo239003.setBegBarType(VF.Barline.type.NONE);
stavesmo239003.setContext(context);
stavesmo239003.draw();
smo239003v0.draw(context, stavesmo239003);
const stavesmo239978 = new VF.Stave(299, 1366, 167);
stavesmo239978.setAttribute('id', 'stavesmo239978');
stavesmo239978.setBegBarType(VF.Barline.type.NONE);
stavesmo239978.setContext(context);
stavesmo239978.draw();
smo239978v0.draw(context, stavesmo239978);
const fmtsmo23712442 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo237124v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237124v0ar = [];
const smo237108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237108.setAttribute('id', 'smo237108');
smo237124v0ar.push(smo237108);
smo237124v0.addTickables(smo237124v0ar)
fmtsmo23712442.joinVoices([smo237124v0]);
const fmtsmo23807642 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo238076v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238076v0ar = [];
const smo238055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo238055.setAttribute('id', 'smo238055');
smo238076v0ar.push(smo238055);
const smo238056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo238056.setAttribute('id', 'smo238056');
smo238076v0ar.push(smo238056);
const smo238057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo238057.setAttribute('id', 'smo238057');
smo238076v0ar.push(smo238057);
const smo238058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo238058.setAttribute('id', 'smo238058');
smo238076v0ar.push(smo238058);
const smo238059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo238059.setAttribute('id', 'smo238059');
smo238076v0ar.push(smo238059);
const smo238060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo238060.setAttribute('id', 'smo238060');
smo238076v0ar.push(smo238060);
smo238076v0.addTickables(smo238076v0ar)
fmtsmo23807642.joinVoices([smo238076v0]);
const fmtsmo23902342 = new VF.Formatter();
//
// voices and notes for stave 2 42
const smo239023v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239023v0ar = [];
const smo239004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239004.setAttribute('id', 'smo239004');
smo239023v0ar.push(smo239004);
const smo239005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239005.setAttribute('id', 'smo239005');
smo239023v0ar.push(smo239005);
const smo239006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239006.setAttribute('id', 'smo239006');
smo239023v0ar.push(smo239006);
const smo239007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239007.setAttribute('id', 'smo239007');
smo239023v0ar.push(smo239007);
smo239023v0.addTickables(smo239023v0ar)
fmtsmo23902342.joinVoices([smo239023v0]);
const fmtsmo23999842 = new VF.Formatter();
//
// voices and notes for stave 3 42
const smo239998v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239998v0ar = [];
const smo239979 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239979.setAttribute('id', 'smo239979');
smo239998v0ar.push(smo239979);
const smo239980 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239980.setAttribute('id', 'smo239980');
smo239998v0ar.push(smo239980);
const smo239981 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239981.setAttribute('id', 'smo239981');
smo239998v0ar.push(smo239981);
const smo239982 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239982.setAttribute('id', 'smo239982');
smo239998v0ar.push(smo239982);
smo239998v0.addTickables(smo239998v0ar)
fmtsmo23999842.joinVoices([smo239998v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
const dirsmo246801 = smo238056.getStemDirection();
smo238056.setStemDirection(dirsmo246801);
smo238057.setStemDirection(dirsmo246801);
const smo246801 = new VF.Beam([smo238056,smo238057]);
const dirsmo246802 = smo238059.getStemDirection();
smo238059.setStemDirection(dirsmo246802);
smo238060.setStemDirection(dirsmo246802);
const smo246802 = new VF.Beam([smo238059,smo238060]);
 
// formatting measures in staff group smo240133
fmtsmo23712442.format([smo237124v0,smo238076v0,smo239023v0,smo239998v0], 147);
const stavesmo237124 = new VF.Stave(466, 1040, 161);
stavesmo237124.setAttribute('id', 'stavesmo237124');
stavesmo237124.setBegBarType(VF.Barline.type.NONE);
stavesmo237124.setContext(context);
stavesmo237124.draw();
smo237124v0.draw(context, stavesmo237124);
const stavesmo238076 = new VF.Stave(466, 1165, 161);
stavesmo238076.setAttribute('id', 'stavesmo238076');
stavesmo238076.setBegBarType(VF.Barline.type.NONE);
stavesmo238076.setContext(context);
stavesmo238076.draw();
smo238076v0.draw(context, stavesmo238076);
smo246801.setContext(context);
smo246801.draw();
smo246802.setContext(context);
smo246802.draw();
const stavesmo239023 = new VF.Stave(466, 1253, 161);
stavesmo239023.setAttribute('id', 'stavesmo239023');
stavesmo239023.setBegBarType(VF.Barline.type.NONE);
stavesmo239023.setContext(context);
stavesmo239023.draw();
smo239023v0.draw(context, stavesmo239023);
const stavesmo239998 = new VF.Stave(466, 1366, 161);
stavesmo239998.setAttribute('id', 'stavesmo239998');
stavesmo239998.setBegBarType(VF.Barline.type.NONE);
stavesmo239998.setContext(context);
stavesmo239998.draw();
smo239998v0.draw(context, stavesmo239998);
const fmtsmo23714143 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo237141v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237141v0ar = [];
const smo237125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237125.setAttribute('id', 'smo237125');
smo237141v0ar.push(smo237125);
smo237141v0.addTickables(smo237141v0ar)
fmtsmo23714143.joinVoices([smo237141v0]);
const fmtsmo23809543 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo238095v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238095v0ar = [];
const smo238077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo238077.setAttribute('id', 'smo238077');
smo238095v0ar.push(smo238077);
const smo238078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
smo238078.setAttribute('id', 'smo238078');
smo238095v0ar.push(smo238078);
const smo238079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo238079.setAttribute('id', 'smo238079');
smo238095v0ar.push(smo238079);
smo238095v0.addTickables(smo238095v0ar)
fmtsmo23809543.joinVoices([smo238095v0]);
const fmtsmo23904343 = new VF.Formatter();
//
// voices and notes for stave 2 43
const smo239043v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239043v0ar = [];
const smo239024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239024.setAttribute('id', 'smo239024');
smo239043v0ar.push(smo239024);
const smo239025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239025.setAttribute('id', 'smo239025');
smo239043v0ar.push(smo239025);
const smo239026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239026.setAttribute('id', 'smo239026');
smo239043v0ar.push(smo239026);
const smo239027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239027.setAttribute('id', 'smo239027');
smo239043v0ar.push(smo239027);
smo239043v0.addTickables(smo239043v0ar)
fmtsmo23904343.joinVoices([smo239043v0]);
const fmtsmo24001843 = new VF.Formatter();
//
// voices and notes for stave 3 43
const smo240018v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240018v0ar = [];
const smo239999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239999.setAttribute('id', 'smo239999');
smo240018v0ar.push(smo239999);
const smo240000 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo240000.setAttribute('id', 'smo240000');
smo240018v0ar.push(smo240000);
const smo240001 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo240001.setAttribute('id', 'smo240001');
smo240018v0ar.push(smo240001);
const smo240002 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo240002.setAttribute('id', 'smo240002');
smo240018v0ar.push(smo240002);
smo240018v0.addTickables(smo240018v0ar)
fmtsmo24001843.joinVoices([smo240018v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23714143.format([smo237141v0,smo238095v0,smo239043v0,smo240018v0], 95);
const stavesmo237141 = new VF.Stave(627, 1040, 109);
stavesmo237141.setAttribute('id', 'stavesmo237141');
stavesmo237141.setBegBarType(VF.Barline.type.NONE);
stavesmo237141.setContext(context);
stavesmo237141.draw();
smo237141v0.draw(context, stavesmo237141);
const stavesmo238095 = new VF.Stave(627, 1165, 109);
stavesmo238095.setAttribute('id', 'stavesmo238095');
stavesmo238095.setBegBarType(VF.Barline.type.NONE);
stavesmo238095.setContext(context);
stavesmo238095.draw();
smo238095v0.draw(context, stavesmo238095);
const stavesmo239043 = new VF.Stave(627, 1253, 109);
stavesmo239043.setAttribute('id', 'stavesmo239043');
stavesmo239043.setBegBarType(VF.Barline.type.NONE);
stavesmo239043.setContext(context);
stavesmo239043.draw();
smo239043v0.draw(context, stavesmo239043);
const stavesmo240018 = new VF.Stave(627, 1366, 109);
stavesmo240018.setAttribute('id', 'stavesmo240018');
stavesmo240018.setBegBarType(VF.Barline.type.NONE);
stavesmo240018.setContext(context);
stavesmo240018.draw();
smo240018v0.draw(context, stavesmo240018);
const fmtsmo23715844 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo237158v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237158v0ar = [];
const smo237142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237142.setAttribute('id', 'smo237142');
smo237158v0ar.push(smo237142);
smo237158v0.addTickables(smo237158v0ar)
fmtsmo23715844.joinVoices([smo237158v0]);
const fmtsmo23811544 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo238115v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238115v0ar = [];
const smo238096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo238096.setAttribute('id', 'smo238096');
smo238115v0ar.push(smo238096);
const smo238097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo238097.setAttribute('id', 'smo238097');
smo238115v0ar.push(smo238097);
const smo238098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo238098.setAttribute('id', 'smo238098');
smo238115v0ar.push(smo238098);
const smo238099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo238099.setAttribute('id', 'smo238099');
smo238115v0ar.push(smo238099);
smo238115v0.addTickables(smo238115v0ar)
fmtsmo23811544.joinVoices([smo238115v0]);
const fmtsmo23906344 = new VF.Formatter();
//
// voices and notes for stave 2 44
const smo239063v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239063v0ar = [];
const smo239044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo239044.setAttribute('id', 'smo239044');
smo239063v0ar.push(smo239044);
const smo239045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo239045.setAttribute('id', 'smo239045');
smo239063v0ar.push(smo239045);
const smo239046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo239046.setAttribute('id', 'smo239046');
smo239063v0ar.push(smo239046);
const smo239047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo239047.setAttribute('id', 'smo239047');
smo239063v0ar.push(smo239047);
smo239063v0.addTickables(smo239063v0ar)
fmtsmo23906344.joinVoices([smo239063v0]);
const fmtsmo24003844 = new VF.Formatter();
//
// voices and notes for stave 3 44
const smo240038v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240038v0ar = [];
const smo240019 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo240019.setAttribute('id', 'smo240019');
smo240038v0ar.push(smo240019);
const smo240020 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo240020.setAttribute('id', 'smo240020');
smo240038v0ar.push(smo240020);
const smo240021 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo240021.setAttribute('id', 'smo240021');
smo240038v0ar.push(smo240021);
const smo240022 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo240022.setAttribute('id', 'smo240022');
smo240038v0ar.push(smo240022);
smo240038v0.addTickables(smo240038v0ar)
fmtsmo24003844.joinVoices([smo240038v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
const dirsmo246819 = smo238096.getStemDirection();
smo238096.setStemDirection(dirsmo246819);
smo238097.setStemDirection(dirsmo246819);
const smo246819 = new VF.Beam([smo238096,smo238097]);
 
// formatting measures in staff group smo240133
fmtsmo23715844.format([smo237158v0,smo238115v0,smo239063v0,smo240038v0], 121);
const stavesmo237158 = new VF.Stave(736, 1040, 135);
stavesmo237158.setAttribute('id', 'stavesmo237158');
stavesmo237158.setBegBarType(VF.Barline.type.NONE);
stavesmo237158.setContext(context);
stavesmo237158.draw();
smo237158v0.draw(context, stavesmo237158);
const stavesmo238115 = new VF.Stave(736, 1165, 135);
stavesmo238115.setAttribute('id', 'stavesmo238115');
stavesmo238115.setBegBarType(VF.Barline.type.NONE);
stavesmo238115.setContext(context);
stavesmo238115.draw();
smo238115v0.draw(context, stavesmo238115);
smo246819.setContext(context);
smo246819.draw();
const stavesmo239063 = new VF.Stave(736, 1253, 135);
stavesmo239063.setAttribute('id', 'stavesmo239063');
stavesmo239063.setBegBarType(VF.Barline.type.NONE);
stavesmo239063.setContext(context);
stavesmo239063.draw();
smo239063v0.draw(context, stavesmo239063);
const stavesmo240038 = new VF.Stave(736, 1366, 135);
stavesmo240038.setAttribute('id', 'stavesmo240038');
stavesmo240038.setBegBarType(VF.Barline.type.NONE);
stavesmo240038.setContext(context);
stavesmo240038.draw();
smo240038v0.draw(context, stavesmo240038);
const fmtsmo23717545 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo237175v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237175v0ar = [];
const smo237159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237159.setAttribute('id', 'smo237159');
smo237175v0ar.push(smo237159);
smo237175v0.addTickables(smo237175v0ar)
fmtsmo23717545.joinVoices([smo237175v0]);
const fmtsmo23813545 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo238135v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238135v0ar = [];
const smo238116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo238116.setAttribute('id', 'smo238116');
smo238135v0ar.push(smo238116);
const smo238117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo238117.setAttribute('id', 'smo238117');
smo238135v0ar.push(smo238117);
const smo238118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo238118.setAttribute('id', 'smo238118');
smo238135v0ar.push(smo238118);
const smo238119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo238119.setAttribute('id', 'smo238119');
smo238135v0ar.push(smo238119);
smo238135v0.addTickables(smo238135v0ar)
fmtsmo23813545.joinVoices([smo238135v0]);
const fmtsmo23908345 = new VF.Formatter();
//
// voices and notes for stave 2 45
const smo239083v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239083v0ar = [];
const smo239064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239064.setAttribute('id', 'smo239064');
smo239083v0ar.push(smo239064);
const smo239065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239065.setAttribute('id', 'smo239065');
smo239083v0ar.push(smo239065);
const smo239066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239066.setAttribute('id', 'smo239066');
smo239083v0ar.push(smo239066);
const smo239067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239067.setAttribute('id', 'smo239067');
smo239083v0ar.push(smo239067);
smo239083v0.addTickables(smo239083v0ar)
fmtsmo23908345.joinVoices([smo239083v0]);
const fmtsmo24005845 = new VF.Formatter();
//
// voices and notes for stave 3 45
const smo240058v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240058v0ar = [];
const smo240039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo240039.setAttribute('id', 'smo240039');
smo240058v0ar.push(smo240039);
const smo240040 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo240040.setAttribute('id', 'smo240040');
smo240058v0ar.push(smo240040);
const smo240041 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo240041.setAttribute('id', 'smo240041');
smo240058v0ar.push(smo240041);
const smo240042 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo240042.setAttribute('id', 'smo240042');
smo240058v0ar.push(smo240042);
smo240058v0.addTickables(smo240058v0ar)
fmtsmo24005845.joinVoices([smo240058v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
const dirsmo246828 = smo238116.getStemDirection();
smo238116.setStemDirection(dirsmo246828);
smo238117.setStemDirection(dirsmo246828);
const smo246828 = new VF.Beam([smo238116,smo238117]);
 
// formatting measures in staff group smo240133
fmtsmo23717545.format([smo237175v0,smo238135v0,smo239083v0,smo240058v0], 121);
const stavesmo237175 = new VF.Stave(871, 1040, 135);
stavesmo237175.setAttribute('id', 'stavesmo237175');
stavesmo237175.setBegBarType(VF.Barline.type.NONE);
stavesmo237175.setContext(context);
stavesmo237175.draw();
smo237175v0.draw(context, stavesmo237175);
const stavesmo238135 = new VF.Stave(871, 1165, 135);
stavesmo238135.setAttribute('id', 'stavesmo238135');
stavesmo238135.setBegBarType(VF.Barline.type.NONE);
stavesmo238135.setContext(context);
stavesmo238135.draw();
smo238135v0.draw(context, stavesmo238135);
smo246828.setContext(context);
smo246828.draw();
const stavesmo239083 = new VF.Stave(871, 1253, 135);
stavesmo239083.setAttribute('id', 'stavesmo239083');
stavesmo239083.setBegBarType(VF.Barline.type.NONE);
stavesmo239083.setContext(context);
stavesmo239083.draw();
smo239083v0.draw(context, stavesmo239083);
const stavesmo240058 = new VF.Stave(871, 1366, 135);
stavesmo240058.setAttribute('id', 'stavesmo240058');
stavesmo240058.setBegBarType(VF.Barline.type.NONE);
stavesmo240058.setContext(context);
stavesmo240058.draw();
smo240058v0.draw(context, stavesmo240058);
const fmtsmo23719246 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo237192v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237192v0ar = [];
const smo237176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237176.setAttribute('id', 'smo237176');
smo237192v0ar.push(smo237176);
smo237192v0.addTickables(smo237192v0ar)
fmtsmo23719246.joinVoices([smo237192v0]);
const fmtsmo23815746 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo238157v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238157v0ar = [];
const smo238136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo238136.setAttribute('id', 'smo238136');
smo238157v0ar.push(smo238136);
const smo238137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo238137.setAttribute('id', 'smo238137');
smo238157v0ar.push(smo238137);
const smo238138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo238138.setAttribute('id', 'smo238138');
smo238157v0ar.push(smo238138);
const smo238139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo238139.setAttribute('id', 'smo238139');
smo238157v0ar.push(smo238139);
const smo238140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo238140.setAttribute('id', 'smo238140');
smo238157v0ar.push(smo238140);
const smo238141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo238141.setAttribute('id', 'smo238141');
smo238157v0ar.push(smo238141);
smo238157v0.addTickables(smo238157v0ar)
fmtsmo23815746.joinVoices([smo238157v0]);
const fmtsmo23910346 = new VF.Formatter();
//
// voices and notes for stave 2 46
const smo239103v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239103v0ar = [];
const smo239084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239084.setAttribute('id', 'smo239084');
smo239103v0ar.push(smo239084);
const smo239085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo239085.setAttribute('id', 'smo239085');
smo239103v0ar.push(smo239085);
const smo239086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239086.setAttribute('id', 'smo239086');
smo239103v0ar.push(smo239086);
const smo239087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo239087.setAttribute('id', 'smo239087');
smo239103v0ar.push(smo239087);
smo239103v0.addTickables(smo239103v0ar)
fmtsmo23910346.joinVoices([smo239103v0]);
const fmtsmo24007846 = new VF.Formatter();
//
// voices and notes for stave 3 46
const smo240078v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240078v0ar = [];
const smo240059 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo240059.setAttribute('id', 'smo240059');
smo240078v0ar.push(smo240059);
const smo240060 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo240060.setAttribute('id', 'smo240060');
smo240078v0ar.push(smo240060);
const smo240061 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo240061.setAttribute('id', 'smo240061');
smo240078v0ar.push(smo240061);
const smo240062 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo240062.setAttribute('id', 'smo240062');
smo240078v0ar.push(smo240062);
smo240078v0.addTickables(smo240078v0ar)
fmtsmo24007846.joinVoices([smo240078v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
const dirsmo246837 = smo238136.getStemDirection();
smo238136.setStemDirection(dirsmo246837);
smo238137.setStemDirection(dirsmo246837);
const smo246837 = new VF.Beam([smo238136,smo238137]);
const dirsmo246838 = smo238139.getStemDirection();
smo238139.setStemDirection(dirsmo246838);
smo238140.setStemDirection(dirsmo246838);
const smo246838 = new VF.Beam([smo238139,smo238140]);
 
// formatting measures in staff group smo240133
fmtsmo23719246.format([smo237192v0,smo238157v0,smo239103v0,smo240078v0], 147);
const stavesmo237192 = new VF.Stave(1006, 1040, 161);
stavesmo237192.setAttribute('id', 'stavesmo237192');
stavesmo237192.setBegBarType(VF.Barline.type.NONE);
stavesmo237192.setContext(context);
stavesmo237192.draw();
smo237192v0.draw(context, stavesmo237192);
const stavesmo238157 = new VF.Stave(1006, 1165, 161);
stavesmo238157.setAttribute('id', 'stavesmo238157');
stavesmo238157.setBegBarType(VF.Barline.type.NONE);
stavesmo238157.setContext(context);
stavesmo238157.draw();
smo238157v0.draw(context, stavesmo238157);
smo246837.setContext(context);
smo246837.draw();
smo246838.setContext(context);
smo246838.draw();
const stavesmo239103 = new VF.Stave(1006, 1253, 161);
stavesmo239103.setAttribute('id', 'stavesmo239103');
stavesmo239103.setBegBarType(VF.Barline.type.NONE);
stavesmo239103.setContext(context);
stavesmo239103.draw();
smo239103v0.draw(context, stavesmo239103);
const stavesmo240078 = new VF.Stave(1006, 1366, 161);
stavesmo240078.setAttribute('id', 'stavesmo240078');
stavesmo240078.setBegBarType(VF.Barline.type.NONE);
stavesmo240078.setContext(context);
stavesmo240078.draw();
smo240078v0.draw(context, stavesmo240078);
const fmtsmo23720947 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo237209v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo237209v0ar = [];
const smo237193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo237193.setAttribute('id', 'smo237193');
smo237209v0ar.push(smo237193);
smo237209v0.addTickables(smo237209v0ar)
fmtsmo23720947.joinVoices([smo237209v0]);
const fmtsmo23817747 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo238177v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238177v0ar = [];
const smo238158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo238158.setAttribute('id', 'smo238158');
smo238177v0ar.push(smo238158);
const smo238159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
smo238159.setAttribute('id', 'smo238159');
const smo238160 = new VF.Ornament('scoop');
smo238159.addModifier(smo238160, 0);
smo238177v0ar.push(smo238159);
const smo238161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo238161.setAttribute('id', 'smo238161');
smo238177v0ar.push(smo238161);
smo238177v0.addTickables(smo238177v0ar)
fmtsmo23817747.joinVoices([smo238177v0]);
const fmtsmo23912347 = new VF.Formatter();
//
// voices and notes for stave 2 47
const smo239123v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239123v0ar = [];
const smo239104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo239104.setAttribute('id', 'smo239104');
smo239123v0ar.push(smo239104);
const smo239105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo239105.setAttribute('id', 'smo239105');
const smo239106 = new VF.Ornament('scoop');
smo239105.addModifier(smo239106, 0);
smo239123v0ar.push(smo239105);
const smo239107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo239107.setAttribute('id', 'smo239107');
smo239123v0ar.push(smo239107);
smo239123v0.addTickables(smo239123v0ar)
fmtsmo23912347.joinVoices([smo239123v0]);
const fmtsmo24009747 = new VF.Formatter();
//
// voices and notes for stave 3 47
const smo240097v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240097v0ar = [];
const smo240079 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo240079.setAttribute('id', 'smo240079');
smo240097v0ar.push(smo240079);
const smo240080 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo240080.setAttribute('id', 'smo240080');
smo240097v0ar.push(smo240080);
const smo240081 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo240081.setAttribute('id', 'smo240081');
smo240097v0ar.push(smo240081);
smo240097v0.addTickables(smo240097v0ar)
fmtsmo24009747.joinVoices([smo240097v0]);
// create beam groups and tuplets for format grp smo240133 before formatting
 
// formatting measures in staff group smo240133
fmtsmo23720947.format([smo237209v0,smo238177v0,smo239123v0,smo240097v0], 74);
const stavesmo237209 = new VF.Stave(1167, 1040, 92);
stavesmo237209.setAttribute('id', 'stavesmo237209');
stavesmo237209.setBegBarType(VF.Barline.type.NONE);
stavesmo237209.setEndBarType(5);
stavesmo237209.setContext(context);
stavesmo237209.draw();
smo237209v0.draw(context, stavesmo237209);
const stavesmo238177 = new VF.Stave(1167, 1165, 92);
stavesmo238177.setAttribute('id', 'stavesmo238177');
stavesmo238177.setBegBarType(VF.Barline.type.NONE);
stavesmo238177.setEndBarType(5);
stavesmo238177.setContext(context);
stavesmo238177.draw();
smo238177v0.draw(context, stavesmo238177);
const stavesmo239123 = new VF.Stave(1167, 1253, 92);
stavesmo239123.setAttribute('id', 'stavesmo239123');
stavesmo239123.setBegBarType(VF.Barline.type.NONE);
stavesmo239123.setEndBarType(5);
stavesmo239123.setContext(context);
stavesmo239123.draw();
smo239123v0.draw(context, stavesmo239123);
const stavesmo240097 = new VF.Stave(1167, 1366, 92);
stavesmo240097.setAttribute('id', 'stavesmo240097');
stavesmo240097.setBegBarType(VF.Barline.type.NONE);
stavesmo240097.setEndBarType(5);
stavesmo240097.setContext(context);
stavesmo240097.draw();
smo240097v0.draw(context, stavesmo240097);
// modifier from 0-28-0-0 to 0-29-0-2
const smo247649 = new VF.TextBracket({ start: smo236789, stop: smo236815, text: 'accelerando', position: 1 });
smo247649.setLine(1).setContext(context).draw();
// modifier from 2-26-0-0 to 2-27-0-0
const smo247650 = new VF.StaveTie({ first_note: smo238717, last_note: smo238734, 
          firstNote: smo238717, lastNote: smo238734, first_indices: [0], last_indices: [0]});
smo247650.setContext(context).draw();
// modifier from 2-32-0-0 to 2-33-0-0
const smo247651 = new VF.StaveTie({ first_note: smo238823, last_note: smo238840, 
          firstNote: smo238823, lastNote: smo238840, first_indices: [0], last_indices: [0]});
smo247651.setContext(context).draw();
// modifier from 2-33-0-0 to 2-34-0-0
const smo247652 = new VF.StaveTie({ first_note: smo238840, last_note: smo238857, 
          firstNote: smo238840, lastNote: smo238857, first_indices: [0], last_indices: [0]});
smo247652.setContext(context).draw();
// modifier from 2-35-0-0 to 2-36-0-0
const smo247653 = new VF.StaveTie({ first_note: smo238874, last_note: smo238891, 
          firstNote: smo238874, lastNote: smo238891, first_indices: [0], last_indices: [0]});
smo247653.setContext(context).draw();
// modifier from 3-31-0-3 to 3-31-0-4
const smo247654 = new VF.StaveTie({ first_note: smo239763, last_note: smo239764, 
          firstNote: smo239763, lastNote: smo239764, first_indices: [0], last_indices: [0]});
smo247654.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo236742').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236744').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236746').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236748').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo236751').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236753').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236771').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo236790').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo236792').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236812').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236814').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236834').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236836').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236838').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236840').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo236842').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236844').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236863').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo236885').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236887').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo236889').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo236891').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo236909').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236911').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo236913').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo236935').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236937').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo236939').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo236941').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo236959').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236961').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo236963').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo236981').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236983').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo236985').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo236987').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo236989').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo237007').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo237009').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo237011').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo237029').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo237032').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo237052').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo237054').setAttributeNS('', 'transform', 'translate(0 20)');
}
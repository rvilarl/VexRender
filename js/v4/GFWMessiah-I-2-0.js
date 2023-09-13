// @@ Comfort Ye, My People p 1/4 (Comfort Ye, my people (tenor)) by Handel
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1421.487603305785');
svg.setAttributeNS('', 'height', '1839.5721925133685');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
//
// create the musical objects
VF.setMusicFont("Gonville","Bravura","Custom");
const fmtsmo808190 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo80819v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80819v0ar = [];
const smo80791 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo80791.setAttribute('id', 'smo80791');
const  smo92377 = new VF.Articulation('a.').setPosition(4);
smo80791.addModifier(smo92377, 0);
smo80819v0ar.push(smo80791);
const smo80794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo80794.setAttribute('id', 'smo80794');
const  smo92378 = new VF.Articulation('a.').setPosition(4);
smo80794.addModifier(smo92378, 0);
smo80819v0ar.push(smo80794);
const smo80796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo80796.setAttribute('id', 'smo80796');
const  smo92379 = new VF.Articulation('a.').setPosition(4);
smo80796.addModifier(smo92379, 0);
smo80819v0ar.push(smo80796);
const smo80798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo80798.setAttribute('id', 'smo80798');
const  smo92380 = new VF.Articulation('a.').setPosition(4);
smo80798.addModifier(smo92380, 0);
smo80819v0ar.push(smo80798);
const smo80800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo80800.setAttribute('id', 'smo80800');
smo80819v0ar.push(smo80800);
const smo80801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo80801.setAttribute('id', 'smo80801');
smo80801.addModifier(new VF.Dot(), 0);
smo80819v0ar.push(smo80801);
const smo80802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo80802.setAttribute('id', 'smo80802');
smo80819v0ar.push(smo80802);
const smo80803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo80803.setAttribute('id', 'smo80803');
smo80819v0ar.push(smo80803);
smo80819v0.addTickables(smo80819v0ar)
fmtsmo808190.joinVoices([smo80819v0]);
const fmtsmo816380 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo81638v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81638v0ar = [];
const smo81611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81611.setAttribute('id', 'smo81611');
const  smo92381 = new VF.Articulation('a.').setPosition(4);
smo81611.addModifier(smo92381, 0);
smo81638v0ar.push(smo81611);
const smo81613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81613.setAttribute('id', 'smo81613');
const  smo92382 = new VF.Articulation('a.').setPosition(4);
smo81613.addModifier(smo92382, 0);
smo81638v0ar.push(smo81613);
const smo81615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81615.setAttribute('id', 'smo81615');
const  smo92383 = new VF.Articulation('a.').setPosition(4);
smo81615.addModifier(smo92383, 0);
smo81638v0ar.push(smo81615);
const smo81617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81617.setAttribute('id', 'smo81617');
const  smo92384 = new VF.Articulation('a.').setPosition(4);
smo81617.addModifier(smo92384, 0);
smo81638v0ar.push(smo81617);
const smo81619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81619.setAttribute('id', 'smo81619');
smo81638v0ar.push(smo81619);
const smo81620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81620.setAttribute('id', 'smo81620');
smo81638v0ar.push(smo81620);
const smo81621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81621.setAttribute('id', 'smo81621');
smo81638v0ar.push(smo81621);
const smo81622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81622.setAttribute('id', 'smo81622');
smo81638v0ar.push(smo81622);
smo81638v0.addTickables(smo81638v0ar)
fmtsmo816380.joinVoices([smo81638v0]);
const fmtsmo824490 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo82449v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo82449v0ar = [];
const smo82422 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82422.setAttribute('id', 'smo82422');
const  smo92385 = new VF.Articulation('a.').setPosition(4);
smo82422.addModifier(smo92385, 0);
smo82449v0ar.push(smo82422);
const smo82424 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82424.setAttribute('id', 'smo82424');
const  smo92386 = new VF.Articulation('a.').setPosition(4);
smo82424.addModifier(smo92386, 0);
smo82449v0ar.push(smo82424);
const smo82426 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82426.setAttribute('id', 'smo82426');
const  smo92387 = new VF.Articulation('a.').setPosition(4);
smo82426.addModifier(smo92387, 0);
smo82449v0ar.push(smo82426);
const smo82428 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82428.setAttribute('id', 'smo82428');
const  smo92388 = new VF.Articulation('a.').setPosition(4);
smo82428.addModifier(smo92388, 0);
smo82449v0ar.push(smo82428);
const smo82430 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82430.setAttribute('id', 'smo82430');
smo82449v0ar.push(smo82430);
const smo82431 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82431.setAttribute('id', 'smo82431');
smo82449v0ar.push(smo82431);
const smo82432 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82432.setAttribute('id', 'smo82432');
smo82449v0ar.push(smo82432);
const smo82433 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82433.setAttribute('id', 'smo82433');
smo82449v0ar.push(smo82433);
smo82449v0.addTickables(smo82449v0ar)
fmtsmo824490.joinVoices([smo82449v0]);
const fmtsmo832490 = new VF.Formatter();
//
// voices and notes for stave 3 0
const smo83249v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo83249v0ar = [];
const smo83233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo83233.setAttribute('id', 'smo83233');
smo83249v0ar.push(smo83233);
smo83249v0.addTickables(smo83249v0ar)
fmtsmo832490.joinVoices([smo83249v0]);
const fmtsmo841340 = new VF.Formatter();
//
// voices and notes for stave 4 0
const smo84134v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84134v0ar = [];
const smo84114 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo84114.setAttribute('id', 'smo84114');
smo84134v0ar.push(smo84114);
const smo84115 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo84115.setAttribute('id', 'smo84115');
smo84134v0ar.push(smo84115);
const smo84116 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo84116.setAttribute('id', 'smo84116');
smo84134v0ar.push(smo84116);
const smo84117 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo84117.setAttribute('id', 'smo84117');
smo84134v0ar.push(smo84117);
const smo84118 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo84118.setAttribute('id', 'smo84118');
smo84134v0ar.push(smo84118);
smo84134v0.addTickables(smo84134v0ar)
fmtsmo841340.joinVoices([smo84134v0]);
// create beam groups and tuplets for format grp smo84911 before formatting
const dirsmo91262 = smo80791.getStemDirection();
smo80791.setStemDirection(dirsmo91262);
smo80794.setStemDirection(dirsmo91262);
const smo91262 = new VF.Beam([smo80791,smo80794]);
const dirsmo91263 = smo80796.getStemDirection();
smo80796.setStemDirection(dirsmo91263);
smo80798.setStemDirection(dirsmo91263);
const smo91263 = new VF.Beam([smo80796,smo80798]);
const dirsmo91264 = smo80801.getStemDirection();
smo80801.setStemDirection(dirsmo91264);
smo80802.setStemDirection(dirsmo91264);
smo80803.setStemDirection(dirsmo91264);
const smo91264 = new VF.Beam([smo80801,smo80802,smo80803]);
const dirsmo91267 = smo81611.getStemDirection();
smo81611.setStemDirection(dirsmo91267);
smo81613.setStemDirection(dirsmo91267);
smo81615.setStemDirection(dirsmo91267);
smo81617.setStemDirection(dirsmo91267);
const smo91267 = new VF.Beam([smo81611,smo81613,smo81615,smo81617]);
const dirsmo91268 = smo81619.getStemDirection();
smo81619.setStemDirection(dirsmo91268);
smo81620.setStemDirection(dirsmo91268);
smo81621.setStemDirection(dirsmo91268);
smo81622.setStemDirection(dirsmo91268);
const smo91268 = new VF.Beam([smo81619,smo81620,smo81621,smo81622]);
const dirsmo91271 = smo82422.getStemDirection();
smo82422.setStemDirection(dirsmo91271);
smo82424.setStemDirection(dirsmo91271);
smo82426.setStemDirection(dirsmo91271);
smo82428.setStemDirection(dirsmo91271);
const smo91271 = new VF.Beam([smo82422,smo82424,smo82426,smo82428]);
const dirsmo91272 = smo82430.getStemDirection();
smo82430.setStemDirection(dirsmo91272);
smo82431.setStemDirection(dirsmo91272);
smo82432.setStemDirection(dirsmo91272);
smo82433.setStemDirection(dirsmo91272);
const smo91272 = new VF.Beam([smo82430,smo82431,smo82432,smo82433]);
const dirsmo91277 = smo84115.getStemDirection();
smo84115.setStemDirection(dirsmo91277);
smo84116.setStemDirection(dirsmo91277);
smo84117.setStemDirection(dirsmo91277);
smo84118.setStemDirection(dirsmo91277);
const smo91277 = new VF.Beam([smo84115,smo84116,smo84117,smo84118]);
 
// formatting measures in staff group smo84911
fmtsmo808190.format([smo80819v0,smo81638v0,smo82449v0,smo83249v0,smo84134v0], 290);
const stavesmo80819 = new VF.Stave(55, 255, 419);
stavesmo80819.setAttribute('id', 'stavesmo80819');
stavesmo80819.setBegBarType(1);
stavesmo80819.setTempo(JSON.parse('{"name":"Larghetto"}'), -1 * 0);
stavesmo80819.addClef('treble');
stavesmo80819.addTimeSignature('4/4');
const keysmo80819 = new VF.KeySignature('E');
keysmo80819.addToStave(stavesmo80819);
stavesmo80819.setContext(context);
stavesmo80819.draw();
smo80819v0.draw(context, stavesmo80819);
smo91262.setContext(context);
smo91262.draw();
smo91263.setContext(context);
smo91263.draw();
smo91264.setContext(context);
smo91264.draw();
const stavesmo81638 = new VF.Stave(55, 387, 419);
stavesmo81638.setAttribute('id', 'stavesmo81638');
stavesmo81638.setBegBarType(1);
stavesmo81638.addClef('treble');
stavesmo81638.addTimeSignature('4/4');
const keysmo81638 = new VF.KeySignature('E');
keysmo81638.addToStave(stavesmo81638);
stavesmo81638.setContext(context);
stavesmo81638.draw();
smo81638v0.draw(context, stavesmo81638);
smo91267.setContext(context);
smo91267.draw();
smo91268.setContext(context);
smo91268.draw();
const stavesmo82449 = new VF.Stave(55, 507, 419);
stavesmo82449.setAttribute('id', 'stavesmo82449');
stavesmo82449.setBegBarType(1);
stavesmo82449.addClef('alto');
stavesmo82449.addTimeSignature('4/4');
const keysmo82449 = new VF.KeySignature('E');
keysmo82449.addToStave(stavesmo82449);
stavesmo82449.setContext(context);
stavesmo82449.draw();
smo82449v0.draw(context, stavesmo82449);
smo91271.setContext(context);
smo91271.draw();
smo91272.setContext(context);
smo91272.draw();
const stavesmo83249 = new VF.Stave(55, 624, 419);
stavesmo83249.setAttribute('id', 'stavesmo83249');
stavesmo83249.setBegBarType(1);
stavesmo83249.addClef('treble');
stavesmo83249.addTimeSignature('4/4');
const keysmo83249 = new VF.KeySignature('E');
keysmo83249.addToStave(stavesmo83249);
stavesmo83249.setContext(context);
stavesmo83249.draw();
smo83249v0.draw(context, stavesmo83249);
const stavesmo84134 = new VF.Stave(55, 705, 419);
stavesmo84134.setAttribute('id', 'stavesmo84134');
stavesmo84134.setBegBarType(1);
stavesmo84134.addClef('bass');
stavesmo84134.addTimeSignature('4/4');
const keysmo84134 = new VF.KeySignature('E');
keysmo84134.addToStave(stavesmo84134);
stavesmo84134.setContext(context);
stavesmo84134.draw();
smo84134v0.draw(context, stavesmo84134);
smo91277.setContext(context);
smo91277.draw();
const leftsmo84911stavesmo808194 = new VF.StaveConnector(stavesmo80819, stavesmo84134).setType(4);
leftsmo84911stavesmo808194.setContext(context).draw();
const fmtsmo808431 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo80843v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80843v0ar = [];
const smo80820 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo80820.setAttribute('id', 'smo80820');
smo80843v0ar.push(smo80820);
const smo80821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo80821.setAttribute('id', 'smo80821');
smo80843v0ar.push(smo80821);
const smo80822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo80822.setAttribute('id', 'smo80822');
smo80843v0ar.push(smo80822);
const smo80823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo80823.setAttribute('id', 'smo80823');
smo80843v0ar.push(smo80823);
const smo80824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo80824.setAttribute('id', 'smo80824');
smo80843v0ar.push(smo80824);
const smo80825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo80825.setAttribute('id', 'smo80825');
smo80825.addModifier(new VF.Dot(), 0);
smo80843v0ar.push(smo80825);
const smo80826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo80826.setAttribute('id', 'smo80826');
smo80843v0ar.push(smo80826);
const smo80827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo80827.setAttribute('id', 'smo80827');
smo80843v0ar.push(smo80827);
smo80843v0.addTickables(smo80843v0ar)
fmtsmo808431.joinVoices([smo80843v0]);
const fmtsmo816621 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo81662v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81662v0ar = [];
const smo81639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81639.setAttribute('id', 'smo81639');
smo81662v0ar.push(smo81639);
const smo81640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81640.setAttribute('id', 'smo81640');
smo81662v0ar.push(smo81640);
const smo81641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo81641.setAttribute('id', 'smo81641');
smo81662v0ar.push(smo81641);
const smo81642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo81642.setAttribute('id', 'smo81642');
smo81662v0ar.push(smo81642);
const smo81643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo81643.setAttribute('id', 'smo81643');
smo81662v0ar.push(smo81643);
const smo81644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo81644.setAttribute('id', 'smo81644');
smo81662v0ar.push(smo81644);
const smo81645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo81645.setAttribute('id', 'smo81645');
smo81662v0ar.push(smo81645);
const smo81646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo81646.setAttribute('id', 'smo81646');
smo81662v0ar.push(smo81646);
smo81662v0.addTickables(smo81662v0ar)
fmtsmo816621.joinVoices([smo81662v0]);
const fmtsmo824731 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo82473v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo82473v0ar = [];
const smo82450 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82450.setAttribute('id', 'smo82450');
smo82473v0ar.push(smo82450);
const smo82451 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82451.setAttribute('id', 'smo82451');
smo82473v0ar.push(smo82451);
const smo82452 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82452.setAttribute('id', 'smo82452');
smo82473v0ar.push(smo82452);
const smo82453 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82453.setAttribute('id', 'smo82453');
smo82473v0ar.push(smo82453);
const smo82454 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo82454.setAttribute('id', 'smo82454');
smo82473v0ar.push(smo82454);
const smo82455 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo82455.setAttribute('id', 'smo82455');
smo82473v0ar.push(smo82455);
const smo82456 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo82456.setAttribute('id', 'smo82456');
smo82473v0ar.push(smo82456);
const smo82457 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo82457.setAttribute('id', 'smo82457');
smo82473v0ar.push(smo82457);
smo82473v0.addTickables(smo82473v0ar)
fmtsmo824731.joinVoices([smo82473v0]);
const fmtsmo832661 = new VF.Formatter();
//
// voices and notes for stave 3 1
const smo83266v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo83266v0ar = [];
const smo83250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo83250.setAttribute('id', 'smo83250');
smo83266v0ar.push(smo83250);
smo83266v0.addTickables(smo83266v0ar)
fmtsmo832661.joinVoices([smo83266v0]);
const fmtsmo841561 = new VF.Formatter();
//
// voices and notes for stave 4 1
const smo84156v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84156v0ar = [];
const smo84135 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo84135.setAttribute('id', 'smo84135');
smo84156v0ar.push(smo84135);
const smo84136 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84136.setAttribute('id', 'smo84136');
smo84156v0ar.push(smo84136);
const smo84137 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/2/n"]}'))
smo84137.setAttribute('id', 'smo84137');
smo84156v0ar.push(smo84137);
const smo84138 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/2/n"]}'))
smo84138.setAttribute('id', 'smo84138');
smo84156v0ar.push(smo84138);
const smo84139 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/2/n"]}'))
smo84139.setAttribute('id', 'smo84139');
smo84156v0ar.push(smo84139);
const smo84140 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/2/n"]}'))
smo84140.setAttribute('id', 'smo84140');
smo84156v0ar.push(smo84140);
smo84156v0.addTickables(smo84156v0ar)
fmtsmo841561.joinVoices([smo84156v0]);
// create beam groups and tuplets for format grp smo84911 before formatting
const dirsmo91280 = smo80820.getStemDirection();
smo80820.setStemDirection(dirsmo91280);
smo80821.setStemDirection(dirsmo91280);
const smo91280 = new VF.Beam([smo80820,smo80821]);
const dirsmo91281 = smo80822.getStemDirection();
smo80822.setStemDirection(dirsmo91281);
smo80823.setStemDirection(dirsmo91281);
const smo91281 = new VF.Beam([smo80822,smo80823]);
const dirsmo91282 = smo80825.getStemDirection();
smo80825.setStemDirection(dirsmo91282);
smo80826.setStemDirection(dirsmo91282);
smo80827.setStemDirection(dirsmo91282);
const smo91282 = new VF.Beam([smo80825,smo80826,smo80827]);
const dirsmo91285 = smo81639.getStemDirection();
smo81639.setStemDirection(dirsmo91285);
smo81640.setStemDirection(dirsmo91285);
smo81641.setStemDirection(dirsmo91285);
smo81642.setStemDirection(dirsmo91285);
const smo91285 = new VF.Beam([smo81639,smo81640,smo81641,smo81642]);
const dirsmo91286 = smo81643.getStemDirection();
smo81643.setStemDirection(dirsmo91286);
smo81644.setStemDirection(dirsmo91286);
smo81645.setStemDirection(dirsmo91286);
smo81646.setStemDirection(dirsmo91286);
const smo91286 = new VF.Beam([smo81643,smo81644,smo81645,smo81646]);
const dirsmo91289 = smo82450.getStemDirection();
smo82450.setStemDirection(dirsmo91289);
smo82451.setStemDirection(dirsmo91289);
smo82452.setStemDirection(dirsmo91289);
smo82453.setStemDirection(dirsmo91289);
const smo91289 = new VF.Beam([smo82450,smo82451,smo82452,smo82453]);
const dirsmo91290 = smo82454.getStemDirection();
smo82454.setStemDirection(dirsmo91290);
smo82455.setStemDirection(dirsmo91290);
smo82456.setStemDirection(dirsmo91290);
smo82457.setStemDirection(dirsmo91290);
const smo91290 = new VF.Beam([smo82454,smo82455,smo82456,smo82457]);
const dirsmo91295 = smo84137.getStemDirection();
smo84137.setStemDirection(dirsmo91295);
smo84138.setStemDirection(dirsmo91295);
smo84139.setStemDirection(dirsmo91295);
smo84140.setStemDirection(dirsmo91295);
const smo91295 = new VF.Beam([smo84137,smo84138,smo84139,smo84140]);
 
// formatting measures in staff group smo84911
fmtsmo808431.format([smo80843v0,smo81662v0,smo82473v0,smo83266v0,smo84156v0], 295);
const stavesmo80843 = new VF.Stave(474, 255, 309);
stavesmo80843.setAttribute('id', 'stavesmo80843');
stavesmo80843.setBegBarType(VF.Barline.type.NONE);
stavesmo80843.setContext(context);
stavesmo80843.draw();
smo80843v0.draw(context, stavesmo80843);
smo91280.setContext(context);
smo91280.draw();
smo91281.setContext(context);
smo91281.draw();
smo91282.setContext(context);
smo91282.draw();
const stavesmo81662 = new VF.Stave(474, 387, 309);
stavesmo81662.setAttribute('id', 'stavesmo81662');
stavesmo81662.setBegBarType(VF.Barline.type.NONE);
stavesmo81662.setContext(context);
stavesmo81662.draw();
smo81662v0.draw(context, stavesmo81662);
smo91285.setContext(context);
smo91285.draw();
smo91286.setContext(context);
smo91286.draw();
const stavesmo82473 = new VF.Stave(474, 507, 309);
stavesmo82473.setAttribute('id', 'stavesmo82473');
stavesmo82473.setBegBarType(VF.Barline.type.NONE);
stavesmo82473.setContext(context);
stavesmo82473.draw();
smo82473v0.draw(context, stavesmo82473);
smo91289.setContext(context);
smo91289.draw();
smo91290.setContext(context);
smo91290.draw();
const stavesmo83266 = new VF.Stave(474, 624, 309);
stavesmo83266.setAttribute('id', 'stavesmo83266');
stavesmo83266.setBegBarType(VF.Barline.type.NONE);
stavesmo83266.setContext(context);
stavesmo83266.draw();
smo83266v0.draw(context, stavesmo83266);
const stavesmo84156 = new VF.Stave(474, 705, 309);
stavesmo84156.setAttribute('id', 'stavesmo84156');
stavesmo84156.setBegBarType(VF.Barline.type.NONE);
stavesmo84156.setContext(context);
stavesmo84156.draw();
smo84156v0.draw(context, stavesmo84156);
smo91295.setContext(context);
smo91295.draw();
const fmtsmo808672 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo80867v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80867v0ar = [];
const smo80844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo80844.setAttribute('id', 'smo80844');
smo80867v0ar.push(smo80844);
const smo80845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo80845.setAttribute('id', 'smo80845');
smo80845.addModifier(new VF.Dot(), 0);
smo80867v0ar.push(smo80845);
const smo80846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo80846.setAttribute('id', 'smo80846');
smo80867v0ar.push(smo80846);
const smo80847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo80847.setAttribute('id', 'smo80847');
smo80867v0ar.push(smo80847);
const smo80848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo80848.setAttribute('id', 'smo80848');
smo80867v0ar.push(smo80848);
const smo80849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo80849.setAttribute('id', 'smo80849');
smo80867v0ar.push(smo80849);
const smo80850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo80850.setAttribute('id', 'smo80850');
smo80850.addModifier(new VF.Dot(), 0);
smo80867v0ar.push(smo80850);
const smo80851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo80851.setAttribute('id', 'smo80851');
smo80867v0ar.push(smo80851);
smo80867v0.addTickables(smo80867v0ar)
fmtsmo808672.joinVoices([smo80867v0]);
const fmtsmo816862 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo81686v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81686v0ar = [];
const smo81663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81663.setAttribute('id', 'smo81663');
smo81686v0ar.push(smo81663);
const smo81664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81664.setAttribute('id', 'smo81664');
smo81686v0ar.push(smo81664);
const smo81665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81665.setAttribute('id', 'smo81665');
smo81686v0ar.push(smo81665);
const smo81666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81666.setAttribute('id', 'smo81666');
smo81686v0ar.push(smo81666);
const smo81667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81667.setAttribute('id', 'smo81667');
smo81686v0ar.push(smo81667);
const smo81668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81668.setAttribute('id', 'smo81668');
smo81686v0ar.push(smo81668);
const smo81669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo81669.setAttribute('id', 'smo81669');
smo81686v0ar.push(smo81669);
const smo81670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo81670.setAttribute('id', 'smo81670');
smo81686v0ar.push(smo81670);
smo81686v0.addTickables(smo81686v0ar)
fmtsmo816862.joinVoices([smo81686v0]);
const fmtsmo824972 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo82497v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo82497v0ar = [];
const smo82474 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82474.setAttribute('id', 'smo82474');
smo82497v0ar.push(smo82474);
const smo82475 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82475.setAttribute('id', 'smo82475');
smo82497v0ar.push(smo82475);
const smo82476 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo82476.setAttribute('id', 'smo82476');
smo82497v0ar.push(smo82476);
const smo82477 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo82477.setAttribute('id', 'smo82477');
smo82497v0ar.push(smo82477);
const smo82478 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82478.setAttribute('id', 'smo82478');
smo82497v0ar.push(smo82478);
const smo82479 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82479.setAttribute('id', 'smo82479');
smo82497v0ar.push(smo82479);
const smo82480 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo82480.setAttribute('id', 'smo82480');
smo82497v0ar.push(smo82480);
const smo82481 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo82481.setAttribute('id', 'smo82481');
smo82497v0ar.push(smo82481);
smo82497v0.addTickables(smo82497v0ar)
fmtsmo824972.joinVoices([smo82497v0]);
const fmtsmo832832 = new VF.Formatter();
//
// voices and notes for stave 3 2
const smo83283v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo83283v0ar = [];
const smo83267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo83267.setAttribute('id', 'smo83267');
smo83283v0ar.push(smo83267);
smo83283v0.addTickables(smo83283v0ar)
fmtsmo832832.joinVoices([smo83283v0]);
const fmtsmo841802 = new VF.Formatter();
//
// voices and notes for stave 4 2
const smo84180v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84180v0ar = [];
const smo84157 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo84157.setAttribute('id', 'smo84157');
smo84180v0ar.push(smo84157);
const smo84158 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo84158.setAttribute('id', 'smo84158');
smo84180v0ar.push(smo84158);
const smo84159 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["c#/3/n"]}'))
smo84159.setAttribute('id', 'smo84159');
smo84180v0ar.push(smo84159);
const smo84160 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["c#/3/n"]}'))
smo84160.setAttribute('id', 'smo84160');
smo84180v0ar.push(smo84160);
const smo84161 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo84161.setAttribute('id', 'smo84161');
smo84180v0ar.push(smo84161);
const smo84162 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo84162.setAttribute('id', 'smo84162');
smo84180v0ar.push(smo84162);
const smo84163 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo84163.setAttribute('id', 'smo84163');
smo84180v0ar.push(smo84163);
const smo84164 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo84164.setAttribute('id', 'smo84164');
smo84180v0ar.push(smo84164);
smo84180v0.addTickables(smo84180v0ar)
fmtsmo841802.joinVoices([smo84180v0]);
// create beam groups and tuplets for format grp smo84911 before formatting
const dirsmo91298 = smo80844.getStemDirection();
smo80844.setStemDirection(dirsmo91298);
smo80845.setStemDirection(dirsmo91298);
smo80846.setStemDirection(dirsmo91298);
const smo91298 = new VF.Beam([smo80844,smo80845,smo80846]);
const dirsmo91299 = smo80847.getStemDirection();
smo80847.setStemDirection(dirsmo91299);
smo80848.setStemDirection(dirsmo91299);
const smo91299 = new VF.Beam([smo80847,smo80848]);
const dirsmo91300 = smo80850.getStemDirection();
smo80850.setStemDirection(dirsmo91300);
smo80851.setStemDirection(dirsmo91300);
const smo91300 = new VF.Beam([smo80850,smo80851]);
const dirsmo91303 = smo81663.getStemDirection();
smo81663.setStemDirection(dirsmo91303);
smo81664.setStemDirection(dirsmo91303);
smo81665.setStemDirection(dirsmo91303);
smo81666.setStemDirection(dirsmo91303);
const smo91303 = new VF.Beam([smo81663,smo81664,smo81665,smo81666]);
const dirsmo91304 = smo81667.getStemDirection();
smo81667.setStemDirection(dirsmo91304);
smo81668.setStemDirection(dirsmo91304);
smo81669.setStemDirection(dirsmo91304);
smo81670.setStemDirection(dirsmo91304);
const smo91304 = new VF.Beam([smo81667,smo81668,smo81669,smo81670]);
const dirsmo91307 = smo82474.getStemDirection();
smo82474.setStemDirection(dirsmo91307);
smo82475.setStemDirection(dirsmo91307);
smo82476.setStemDirection(dirsmo91307);
smo82477.setStemDirection(dirsmo91307);
const smo91307 = new VF.Beam([smo82474,smo82475,smo82476,smo82477]);
const dirsmo91308 = smo82478.getStemDirection();
smo82478.setStemDirection(dirsmo91308);
smo82479.setStemDirection(dirsmo91308);
smo82480.setStemDirection(dirsmo91308);
smo82481.setStemDirection(dirsmo91308);
const smo91308 = new VF.Beam([smo82478,smo82479,smo82480,smo82481]);
const dirsmo91313 = smo84157.getStemDirection();
smo84157.setStemDirection(dirsmo91313);
smo84158.setStemDirection(dirsmo91313);
smo84159.setStemDirection(dirsmo91313);
smo84160.setStemDirection(dirsmo91313);
const smo91313 = new VF.Beam([smo84157,smo84158,smo84159,smo84160]);
const dirsmo91314 = smo84161.getStemDirection();
smo84161.setStemDirection(dirsmo91314);
smo84162.setStemDirection(dirsmo91314);
smo84163.setStemDirection(dirsmo91314);
smo84164.setStemDirection(dirsmo91314);
const smo91314 = new VF.Beam([smo84161,smo84162,smo84163,smo84164]);
 
// formatting measures in staff group smo84911
fmtsmo808672.format([smo80867v0,smo81686v0,smo82497v0,smo83283v0,smo84180v0], 303);
const stavesmo80867 = new VF.Stave(783, 255, 317);
stavesmo80867.setAttribute('id', 'stavesmo80867');
stavesmo80867.setBegBarType(VF.Barline.type.NONE);
stavesmo80867.setContext(context);
stavesmo80867.draw();
smo80867v0.draw(context, stavesmo80867);
smo91298.setContext(context);
smo91298.draw();
smo91299.setContext(context);
smo91299.draw();
smo91300.setContext(context);
smo91300.draw();
const stavesmo81686 = new VF.Stave(783, 387, 317);
stavesmo81686.setAttribute('id', 'stavesmo81686');
stavesmo81686.setBegBarType(VF.Barline.type.NONE);
stavesmo81686.setContext(context);
stavesmo81686.draw();
smo81686v0.draw(context, stavesmo81686);
smo91303.setContext(context);
smo91303.draw();
smo91304.setContext(context);
smo91304.draw();
const stavesmo82497 = new VF.Stave(783, 507, 317);
stavesmo82497.setAttribute('id', 'stavesmo82497');
stavesmo82497.setBegBarType(VF.Barline.type.NONE);
stavesmo82497.setContext(context);
stavesmo82497.draw();
smo82497v0.draw(context, stavesmo82497);
smo91307.setContext(context);
smo91307.draw();
smo91308.setContext(context);
smo91308.draw();
const stavesmo83283 = new VF.Stave(783, 624, 317);
stavesmo83283.setAttribute('id', 'stavesmo83283');
stavesmo83283.setBegBarType(VF.Barline.type.NONE);
stavesmo83283.setContext(context);
stavesmo83283.draw();
smo83283v0.draw(context, stavesmo83283);
const stavesmo84180 = new VF.Stave(783, 705, 317);
stavesmo84180.setAttribute('id', 'stavesmo84180');
stavesmo84180.setBegBarType(VF.Barline.type.NONE);
stavesmo84180.setContext(context);
stavesmo84180.draw();
smo84180v0.draw(context, stavesmo84180);
smo91313.setContext(context);
smo91313.draw();
smo91314.setContext(context);
smo91314.draw();
const fmtsmo808883 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo80888v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80888v0ar = [];
const smo80868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo80868.setAttribute('id', 'smo80868');
smo80888v0ar.push(smo80868);
const smo80869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo80869.setAttribute('id', 'smo80869');
smo80888v0ar.push(smo80869);
const smo80870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo80870.setAttribute('id', 'smo80870');
smo80870.addModifier(new VF.Dot(), 0);
smo80888v0ar.push(smo80870);
const smo80871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo80871.setAttribute('id', 'smo80871');
smo80888v0ar.push(smo80871);
const smo80872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/5/n"]}'))
smo80872.setAttribute('id', 'smo80872');
smo80888v0ar.push(smo80872);
smo80888v0.addTickables(smo80888v0ar)
fmtsmo808883.joinVoices([smo80888v0]);
const fmtsmo817073 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo81707v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81707v0ar = [];
const smo81687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81687.setAttribute('id', 'smo81687');
smo81707v0ar.push(smo81687);
const smo81688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo81688.setAttribute('id', 'smo81688');
smo81707v0ar.push(smo81688);
const smo81689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["g#/5/n"]}'))
smo81689.setAttribute('id', 'smo81689');
smo81689.addModifier(new VF.Dot(), 0);
smo81707v0ar.push(smo81689);
const smo81690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo81690.setAttribute('id', 'smo81690');
smo81707v0ar.push(smo81690);
const smo81691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo81691.setAttribute('id', 'smo81691');
smo81707v0ar.push(smo81691);
smo81707v0.addTickables(smo81707v0ar)
fmtsmo817073.joinVoices([smo81707v0]);
const fmtsmo825183 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo82518v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo82518v0ar = [];
const smo82498 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
smo82498.setAttribute('id', 'smo82498');
smo82518v0ar.push(smo82498);
const smo82499 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
smo82499.setAttribute('id', 'smo82499');
smo82518v0ar.push(smo82499);
const smo82500 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo82500.setAttribute('id', 'smo82500');
smo82500.addModifier(new VF.Dot(), 0);
smo82518v0ar.push(smo82500);
const smo82501 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo82501.setAttribute('id', 'smo82501');
smo82518v0ar.push(smo82501);
const smo82502 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo82502.setAttribute('id', 'smo82502');
smo82518v0ar.push(smo82502);
smo82518v0.addTickables(smo82518v0ar)
fmtsmo825183.joinVoices([smo82518v0]);
const fmtsmo833063 = new VF.Formatter();
//
// voices and notes for stave 3 3
const smo83306v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo83306v0ar = [];
const smo83284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo83284.setAttribute('id', 'smo83284');
smo83284.addModifier(new VF.Dot(), 0);
const smo83285 = new VF.Annotation('Com');
smo83285.setAttribute('id', 'smo83285');
smo83285.setFont('Merriweather', 12, 'normal');
smo83285.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo83284.addModifier(smo83285);
smo83285.addClass('lyric lyric-0 lyric-hyphen');
smo83306v0ar.push(smo83284);
const smo83286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo83286.setAttribute('id', 'smo83286');
const smo83287 = new VF.Annotation('fort');
smo83287.setAttribute('id', 'smo83287');
smo83287.setFont('Merriweather', 12, 'normal');
smo83287.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo83286.addModifier(smo83287);
smo83287.addClass('lyric lyric-0');
smo83306v0ar.push(smo83286);
const smo83288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo83288.setAttribute('id', 'smo83288');
const smo83289 = new VF.Annotation('ye!');
smo83289.setAttribute('id', 'smo83289');
smo83289.setFont('Merriweather', 12, 'normal');
smo83289.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo83288.addModifier(smo83289);
smo83289.addClass('lyric lyric-0');
smo83306v0ar.push(smo83288);
const smo83290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo83290.setAttribute('id', 'smo83290');
smo83306v0ar.push(smo83290);
smo83306v0.addTickables(smo83306v0ar)
fmtsmo833063.joinVoices([smo83306v0]);
const fmtsmo841993 = new VF.Formatter();
//
// voices and notes for stave 4 3
const smo84199v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84199v0ar = [];
const smo84181 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo84181.setAttribute('id', 'smo84181');
smo84199v0ar.push(smo84181);
const smo84182 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84182.setAttribute('id', 'smo84182');
smo84199v0ar.push(smo84182);
const smo84183 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84183.setAttribute('id', 'smo84183');
smo84199v0ar.push(smo84183);
smo84199v0.addTickables(smo84199v0ar)
fmtsmo841993.joinVoices([smo84199v0]);
// create beam groups and tuplets for format grp smo84911 before formatting
const dirsmo91317 = smo80870.getStemDirection();
smo80870.setStemDirection(dirsmo91317);
smo80871.setStemDirection(dirsmo91317);
const smo91317 = new VF.Beam([smo80870,smo80871]);
const dirsmo91320 = smo81689.getStemDirection();
smo81689.setStemDirection(dirsmo91320);
smo81690.setStemDirection(dirsmo91320);
const smo91320 = new VF.Beam([smo81689,smo81690]);
const dirsmo91323 = smo82500.getStemDirection();
smo82500.setStemDirection(dirsmo91323);
smo82501.setStemDirection(dirsmo91323);
const smo91323 = new VF.Beam([smo82500,smo82501]);
const dirsmo91326 = smo83284.getStemDirection();
smo83284.setStemDirection(dirsmo91326);
smo83286.setStemDirection(dirsmo91326);
const smo91326 = new VF.Beam([smo83284,smo83286]);
 
// formatting measures in staff group smo84911
fmtsmo808883.format([smo80888v0,smo81707v0,smo82518v0,smo83306v0,smo84199v0], 261);
const stavesmo80888 = new VF.Stave(1100, 255, 275);
stavesmo80888.setAttribute('id', 'stavesmo80888');
stavesmo80888.setBegBarType(VF.Barline.type.NONE);
stavesmo80888.setContext(context);
stavesmo80888.draw();
smo80888v0.draw(context, stavesmo80888);
smo91317.setContext(context);
smo91317.draw();
const stavesmo81707 = new VF.Stave(1100, 387, 275);
stavesmo81707.setAttribute('id', 'stavesmo81707');
stavesmo81707.setBegBarType(VF.Barline.type.NONE);
stavesmo81707.setContext(context);
stavesmo81707.draw();
smo81707v0.draw(context, stavesmo81707);
smo91320.setContext(context);
smo91320.draw();
const stavesmo82518 = new VF.Stave(1100, 507, 275);
stavesmo82518.setAttribute('id', 'stavesmo82518');
stavesmo82518.setBegBarType(VF.Barline.type.NONE);
stavesmo82518.setContext(context);
stavesmo82518.draw();
smo82518v0.draw(context, stavesmo82518);
smo91323.setContext(context);
smo91323.draw();
const stavesmo83306 = new VF.Stave(1100, 624, 275);
stavesmo83306.setAttribute('id', 'stavesmo83306');
stavesmo83306.setBegBarType(VF.Barline.type.NONE);
stavesmo83306.setContext(context);
stavesmo83306.draw();
smo83306v0.draw(context, stavesmo83306);
smo91326.setContext(context);
smo91326.draw();
const stavesmo84199 = new VF.Stave(1100, 705, 275);
stavesmo84199.setAttribute('id', 'stavesmo84199');
stavesmo84199.setBegBarType(VF.Barline.type.NONE);
stavesmo84199.setContext(context);
stavesmo84199.draw();
smo84199v0.draw(context, stavesmo84199);
const rightsmo84911stavesmo808884 = new VF.StaveConnector(stavesmo80888, stavesmo84199).setType(0);
rightsmo84911stavesmo808884.setContext(context).draw();
const fmtsmo809124 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo80912v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80912v0ar = [];
const smo80889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo80889.setAttribute('id', 'smo80889');
smo80912v0ar.push(smo80889);
const smo80890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo80890.setAttribute('id', 'smo80890');
smo80912v0ar.push(smo80890);
const smo80891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo80891.setAttribute('id', 'smo80891');
smo80912v0ar.push(smo80891);
const smo80892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo80892.setAttribute('id', 'smo80892');
smo80912v0ar.push(smo80892);
const smo80893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo80893.setAttribute('id', 'smo80893');
smo80912v0ar.push(smo80893);
const smo80894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo80894.setAttribute('id', 'smo80894');
smo80894.addModifier(new VF.Dot(), 0);
smo80912v0ar.push(smo80894);
const smo80895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo80895.setAttribute('id', 'smo80895');
smo80912v0ar.push(smo80895);
const smo80896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo80896.setAttribute('id', 'smo80896');
smo80912v0ar.push(smo80896);
smo80912v0.addTickables(smo80912v0ar)
fmtsmo809124.joinVoices([smo80912v0]);
const fmtsmo817314 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo81731v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81731v0ar = [];
const smo81708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81708.setAttribute('id', 'smo81708');
smo81731v0ar.push(smo81708);
const smo81709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81709.setAttribute('id', 'smo81709');
smo81731v0ar.push(smo81709);
const smo81710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81710.setAttribute('id', 'smo81710');
smo81731v0ar.push(smo81710);
const smo81711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81711.setAttribute('id', 'smo81711');
smo81731v0ar.push(smo81711);
const smo81712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81712.setAttribute('id', 'smo81712');
smo81731v0ar.push(smo81712);
const smo81713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81713.setAttribute('id', 'smo81713');
smo81731v0ar.push(smo81713);
const smo81714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81714.setAttribute('id', 'smo81714');
smo81731v0ar.push(smo81714);
const smo81715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81715.setAttribute('id', 'smo81715');
smo81731v0ar.push(smo81715);
smo81731v0.addTickables(smo81731v0ar)
fmtsmo817314.joinVoices([smo81731v0]);
const fmtsmo825424 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo82542v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo82542v0ar = [];
const smo82519 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82519.setAttribute('id', 'smo82519');
smo82542v0ar.push(smo82519);
const smo82520 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82520.setAttribute('id', 'smo82520');
smo82542v0ar.push(smo82520);
const smo82521 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82521.setAttribute('id', 'smo82521');
smo82542v0ar.push(smo82521);
const smo82522 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82522.setAttribute('id', 'smo82522');
smo82542v0ar.push(smo82522);
const smo82523 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82523.setAttribute('id', 'smo82523');
smo82542v0ar.push(smo82523);
const smo82524 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82524.setAttribute('id', 'smo82524');
smo82542v0ar.push(smo82524);
const smo82525 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82525.setAttribute('id', 'smo82525');
smo82542v0ar.push(smo82525);
const smo82526 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82526.setAttribute('id', 'smo82526');
smo82542v0ar.push(smo82526);
smo82542v0.addTickables(smo82542v0ar)
fmtsmo825424.joinVoices([smo82542v0]);
const fmtsmo833254 = new VF.Formatter();
//
// voices and notes for stave 3 4
const smo83325v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo83325v0ar = [];
const smo83307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo83307.setAttribute('id', 'smo83307');
smo83325v0ar.push(smo83307);
const smo83308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo83308.setAttribute('id', 'smo83308');
const smo83309 = new VF.Annotation('com');
smo83309.setAttribute('id', 'smo83309');
smo83309.setFont('Merriweather', 12, 'normal');
smo83309.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo83308.addModifier(smo83309);
smo83309.addClass('lyric lyric-0');
smo83325v0ar.push(smo83308);
smo83325v0.addTickables(smo83325v0ar)
fmtsmo833254.joinVoices([smo83325v0]);
const fmtsmo842234 = new VF.Formatter();
//
// voices and notes for stave 4 4
const smo84223v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84223v0ar = [];
const smo84200 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo84200.setAttribute('id', 'smo84200');
smo84223v0ar.push(smo84200);
const smo84201 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo84201.setAttribute('id', 'smo84201');
smo84223v0ar.push(smo84201);
const smo84202 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo84202.setAttribute('id', 'smo84202');
smo84223v0ar.push(smo84202);
const smo84203 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo84203.setAttribute('id', 'smo84203');
smo84223v0ar.push(smo84203);
const smo84204 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
smo84204.setAttribute('id', 'smo84204');
smo84223v0ar.push(smo84204);
const smo84205 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
smo84205.setAttribute('id', 'smo84205');
smo84223v0ar.push(smo84205);
const smo84206 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
smo84206.setAttribute('id', 'smo84206');
smo84223v0ar.push(smo84206);
const smo84207 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
smo84207.setAttribute('id', 'smo84207');
smo84223v0ar.push(smo84207);
smo84223v0.addTickables(smo84223v0ar)
fmtsmo842234.joinVoices([smo84223v0]);
// create beam groups and tuplets for format grp smo84911 before formatting
const dirsmo91350 = smo80889.getStemDirection();
smo80889.setStemDirection(dirsmo91350);
smo80890.setStemDirection(dirsmo91350);
const smo91350 = new VF.Beam([smo80889,smo80890]);
const dirsmo91351 = smo80891.getStemDirection();
smo80891.setStemDirection(dirsmo91351);
smo80892.setStemDirection(dirsmo91351);
const smo91351 = new VF.Beam([smo80891,smo80892]);
const dirsmo91352 = smo80894.getStemDirection();
smo80894.setStemDirection(dirsmo91352);
smo80895.setStemDirection(dirsmo91352);
smo80896.setStemDirection(dirsmo91352);
const smo91352 = new VF.Beam([smo80894,smo80895,smo80896]);
const dirsmo91355 = smo81708.getStemDirection();
smo81708.setStemDirection(dirsmo91355);
smo81709.setStemDirection(dirsmo91355);
smo81710.setStemDirection(dirsmo91355);
smo81711.setStemDirection(dirsmo91355);
const smo91355 = new VF.Beam([smo81708,smo81709,smo81710,smo81711]);
const dirsmo91356 = smo81712.getStemDirection();
smo81712.setStemDirection(dirsmo91356);
smo81713.setStemDirection(dirsmo91356);
smo81714.setStemDirection(dirsmo91356);
smo81715.setStemDirection(dirsmo91356);
const smo91356 = new VF.Beam([smo81712,smo81713,smo81714,smo81715]);
const dirsmo91359 = smo82519.getStemDirection();
smo82519.setStemDirection(dirsmo91359);
smo82520.setStemDirection(dirsmo91359);
smo82521.setStemDirection(dirsmo91359);
smo82522.setStemDirection(dirsmo91359);
const smo91359 = new VF.Beam([smo82519,smo82520,smo82521,smo82522]);
const dirsmo91360 = smo82523.getStemDirection();
smo82523.setStemDirection(dirsmo91360);
smo82524.setStemDirection(dirsmo91360);
smo82525.setStemDirection(dirsmo91360);
smo82526.setStemDirection(dirsmo91360);
const smo91360 = new VF.Beam([smo82523,smo82524,smo82525,smo82526]);
const dirsmo91365 = smo84200.getStemDirection();
smo84200.setStemDirection(dirsmo91365);
smo84201.setStemDirection(dirsmo91365);
smo84202.setStemDirection(dirsmo91365);
smo84203.setStemDirection(dirsmo91365);
const smo91365 = new VF.Beam([smo84200,smo84201,smo84202,smo84203]);
const dirsmo91366 = smo84204.getStemDirection();
smo84204.setStemDirection(dirsmo91366);
smo84205.setStemDirection(dirsmo91366);
smo84206.setStemDirection(dirsmo91366);
smo84207.setStemDirection(dirsmo91366);
const smo91366 = new VF.Beam([smo84204,smo84205,smo84206,smo84207]);
 
// formatting measures in staff group smo84911
fmtsmo809124.format([smo80912v0,smo81731v0,smo82542v0,smo83325v0,smo84223v0], 312);
const stavesmo80912 = new VF.Stave(55, 839, 421);
stavesmo80912.setAttribute('id', 'stavesmo80912');
stavesmo80912.setBegBarType(1);
stavesmo80912.addClef('treble');
const keysmo80912 = new VF.KeySignature('E');
keysmo80912.addToStave(stavesmo80912);
stavesmo80912.setContext(context);
stavesmo80912.draw();
smo80912v0.draw(context, stavesmo80912);
smo91350.setContext(context);
smo91350.draw();
smo91351.setContext(context);
smo91351.draw();
smo91352.setContext(context);
smo91352.draw();
const stavesmo81731 = new VF.Stave(55, 933, 421);
stavesmo81731.setAttribute('id', 'stavesmo81731');
stavesmo81731.setBegBarType(1);
stavesmo81731.addClef('treble');
const keysmo81731 = new VF.KeySignature('E');
keysmo81731.addToStave(stavesmo81731);
stavesmo81731.setContext(context);
stavesmo81731.draw();
smo81731v0.draw(context, stavesmo81731);
smo91355.setContext(context);
smo91355.draw();
smo91356.setContext(context);
smo91356.draw();
const stavesmo82542 = new VF.Stave(55, 1011, 421);
stavesmo82542.setAttribute('id', 'stavesmo82542');
stavesmo82542.setBegBarType(1);
stavesmo82542.addClef('alto');
const keysmo82542 = new VF.KeySignature('E');
keysmo82542.addToStave(stavesmo82542);
stavesmo82542.setContext(context);
stavesmo82542.draw();
smo82542v0.draw(context, stavesmo82542);
smo91359.setContext(context);
smo91359.draw();
smo91360.setContext(context);
smo91360.draw();
const stavesmo83325 = new VF.Stave(55, 1109, 421);
stavesmo83325.setAttribute('id', 'stavesmo83325');
stavesmo83325.setBegBarType(1);
stavesmo83325.addClef('treble');
const keysmo83325 = new VF.KeySignature('E');
keysmo83325.addToStave(stavesmo83325);
stavesmo83325.setContext(context);
stavesmo83325.draw();
smo83325v0.draw(context, stavesmo83325);
const stavesmo84223 = new VF.Stave(55, 1231, 421);
stavesmo84223.setAttribute('id', 'stavesmo84223');
stavesmo84223.setBegBarType(1);
stavesmo84223.addClef('bass');
const keysmo84223 = new VF.KeySignature('E');
keysmo84223.addToStave(stavesmo84223);
stavesmo84223.setContext(context);
stavesmo84223.draw();
smo84223v0.draw(context, stavesmo84223);
smo91365.setContext(context);
smo91365.draw();
smo91366.setContext(context);
smo91366.draw();
const leftsmo84911stavesmo809124 = new VF.StaveConnector(stavesmo80912, stavesmo84223).setType(4);
leftsmo84911stavesmo809124.setContext(context).draw();
const fmtsmo809365 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo80936v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80936v0ar = [];
const smo80913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo80913.setAttribute('id', 'smo80913');
smo80936v0ar.push(smo80913);
const smo80914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo80914.setAttribute('id', 'smo80914');
smo80936v0ar.push(smo80914);
const smo80915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo80915.setAttribute('id', 'smo80915');
smo80936v0ar.push(smo80915);
const smo80916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo80916.setAttribute('id', 'smo80916');
smo80936v0ar.push(smo80916);
const smo80917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo80917.setAttribute('id', 'smo80917');
smo80936v0ar.push(smo80917);
const smo80918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo80918.setAttribute('id', 'smo80918');
smo80936v0ar.push(smo80918);
const smo80919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo80919.setAttribute('id', 'smo80919');
smo80936v0ar.push(smo80919);
const smo80920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo80920.setAttribute('id', 'smo80920');
smo80936v0ar.push(smo80920);
smo80936v0.addTickables(smo80936v0ar)
fmtsmo809365.joinVoices([smo80936v0]);
const fmtsmo817555 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo81755v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81755v0ar = [];
const smo81732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81732.setAttribute('id', 'smo81732');
smo81755v0ar.push(smo81732);
const smo81733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81733.setAttribute('id', 'smo81733');
smo81755v0ar.push(smo81733);
const smo81734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81734.setAttribute('id', 'smo81734');
smo81755v0ar.push(smo81734);
const smo81735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81735.setAttribute('id', 'smo81735');
smo81755v0ar.push(smo81735);
const smo81736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81736.setAttribute('id', 'smo81736');
smo81755v0ar.push(smo81736);
const smo81737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81737.setAttribute('id', 'smo81737');
smo81755v0ar.push(smo81737);
const smo81738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo81738.setAttribute('id', 'smo81738');
smo81755v0ar.push(smo81738);
const smo81739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo81739.setAttribute('id', 'smo81739');
smo81755v0ar.push(smo81739);
smo81755v0.addTickables(smo81755v0ar)
fmtsmo817555.joinVoices([smo81755v0]);
const fmtsmo825665 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo82566v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo82566v0ar = [];
const smo82543 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82543.setAttribute('id', 'smo82543');
smo82566v0ar.push(smo82543);
const smo82544 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82544.setAttribute('id', 'smo82544');
smo82566v0ar.push(smo82544);
const smo82545 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82545.setAttribute('id', 'smo82545');
smo82566v0ar.push(smo82545);
const smo82546 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82546.setAttribute('id', 'smo82546');
smo82566v0ar.push(smo82546);
const smo82547 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82547.setAttribute('id', 'smo82547');
smo82566v0ar.push(smo82547);
const smo82548 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82548.setAttribute('id', 'smo82548');
smo82566v0ar.push(smo82548);
const smo82549 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo82549.setAttribute('id', 'smo82549');
smo82566v0ar.push(smo82549);
const smo82550 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo82550.setAttribute('id', 'smo82550');
smo82566v0ar.push(smo82550);
smo82566v0.addTickables(smo82566v0ar)
fmtsmo825665.joinVoices([smo82566v0]);
const fmtsmo833525 = new VF.Formatter();
//
// voices and notes for stave 3 5
const smo83352v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo83352v0ar = [];
const smo83326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo83326.setAttribute('id', 'smo83326');
smo83326.addModifier(new VF.Dot(), 0);
const smo83327 = new VF.Annotation('-');
smo83327.setAttribute('id', 'smo83327');
smo83327.setFont('Merriweather', 12, 'normal');
smo83327.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo83326.addModifier(smo83327);
smo83327.addClass('lyric lyric-0 lyric-hyphen');
smo83352v0ar.push(smo83326);
const smo83328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo83328.setAttribute('id', 'smo83328');
const smo83329 = new VF.Annotation('fort');
smo83329.setAttribute('id', 'smo83329');
smo83329.setFont('Merriweather', 12, 'normal');
smo83329.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo83328.addModifier(smo83329);
smo83329.addClass('lyric lyric-0');
smo83352v0ar.push(smo83328);
const smo83330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/5/n"]}'))
smo83330.setAttribute('id', 'smo83330');
smo83352v0ar.push(smo83330);
const smo83331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo83331.setAttribute('id', 'smo83331');
const smo83332 = new VF.Annotation('ye');
smo83332.setAttribute('id', 'smo83332');
smo83332.setFont('Merriweather', 12, 'normal');
smo83332.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo83331.addModifier(smo83332);
smo83332.addClass('lyric lyric-0');
smo83352v0ar.push(smo83331);
const smo83333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo83333.setAttribute('id', 'smo83333');
smo83333.addModifier(new VF.Dot(), 0);
const smo83334 = new VF.Annotation('-');
smo83334.setAttribute('id', 'smo83334');
smo83334.setFont('Merriweather', 12, 'normal');
smo83334.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo83333.addModifier(smo83334);
smo83334.addClass('lyric lyric-0 lyric-hyphen');
smo83352v0ar.push(smo83333);
const smo83335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo83335.setAttribute('id', 'smo83335');
const smo83336 = new VF.Annotation('my');
smo83336.setAttribute('id', 'smo83336');
smo83336.setFont('Merriweather', 12, 'normal');
smo83336.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo83335.addModifier(smo83336);
smo83336.addClass('lyric lyric-0');
smo83352v0ar.push(smo83335);
smo83352v0.addTickables(smo83352v0ar)
fmtsmo833525.joinVoices([smo83352v0]);
const fmtsmo842475 = new VF.Formatter();
//
// voices and notes for stave 4 5
const smo84247v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84247v0ar = [];
const smo84224 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo84224.setAttribute('id', 'smo84224');
smo84247v0ar.push(smo84224);
const smo84225 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo84225.setAttribute('id', 'smo84225');
smo84247v0ar.push(smo84225);
const smo84226 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo84226.setAttribute('id', 'smo84226');
smo84247v0ar.push(smo84226);
const smo84227 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo84227.setAttribute('id', 'smo84227');
smo84247v0ar.push(smo84227);
const smo84228 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo84228.setAttribute('id', 'smo84228');
smo84247v0ar.push(smo84228);
const smo84229 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo84229.setAttribute('id', 'smo84229');
smo84247v0ar.push(smo84229);
const smo84230 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo84230.setAttribute('id', 'smo84230');
smo84247v0ar.push(smo84230);
const smo84231 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo84231.setAttribute('id', 'smo84231');
smo84247v0ar.push(smo84231);
smo84247v0.addTickables(smo84247v0ar)
fmtsmo842475.joinVoices([smo84247v0]);
// create beam groups and tuplets for format grp smo84911 before formatting
const dirsmo91369 = smo80913.getStemDirection();
smo80913.setStemDirection(dirsmo91369);
smo80914.setStemDirection(dirsmo91369);
smo80915.setStemDirection(dirsmo91369);
smo80916.setStemDirection(dirsmo91369);
const smo91369 = new VF.Beam([smo80913,smo80914,smo80915,smo80916]);
const dirsmo91370 = smo80917.getStemDirection();
smo80917.setStemDirection(dirsmo91370);
smo80918.setStemDirection(dirsmo91370);
smo80919.setStemDirection(dirsmo91370);
smo80920.setStemDirection(dirsmo91370);
const smo91370 = new VF.Beam([smo80917,smo80918,smo80919,smo80920]);
const dirsmo91373 = smo81732.getStemDirection();
smo81732.setStemDirection(dirsmo91373);
smo81733.setStemDirection(dirsmo91373);
smo81734.setStemDirection(dirsmo91373);
smo81735.setStemDirection(dirsmo91373);
const smo91373 = new VF.Beam([smo81732,smo81733,smo81734,smo81735]);
const dirsmo91374 = smo81736.getStemDirection();
smo81736.setStemDirection(dirsmo91374);
smo81737.setStemDirection(dirsmo91374);
smo81738.setStemDirection(dirsmo91374);
smo81739.setStemDirection(dirsmo91374);
const smo91374 = new VF.Beam([smo81736,smo81737,smo81738,smo81739]);
const dirsmo91377 = smo82543.getStemDirection();
smo82543.setStemDirection(dirsmo91377);
smo82544.setStemDirection(dirsmo91377);
smo82545.setStemDirection(dirsmo91377);
smo82546.setStemDirection(dirsmo91377);
const smo91377 = new VF.Beam([smo82543,smo82544,smo82545,smo82546]);
const dirsmo91378 = smo82547.getStemDirection();
smo82547.setStemDirection(dirsmo91378);
smo82548.setStemDirection(dirsmo91378);
smo82549.setStemDirection(dirsmo91378);
smo82550.setStemDirection(dirsmo91378);
const smo91378 = new VF.Beam([smo82547,smo82548,smo82549,smo82550]);
const dirsmo91381 = smo83328.getStemDirection();
smo83328.setStemDirection(dirsmo91381);
smo83330.setStemDirection(dirsmo91381);
const smo91381 = new VF.Beam([smo83328,smo83330]);
const dirsmo91382 = smo83333.getStemDirection();
smo83333.setStemDirection(dirsmo91382);
smo83335.setStemDirection(dirsmo91382);
const smo91382 = new VF.Beam([smo83333,smo83335]);
const dirsmo91385 = smo84224.getStemDirection();
smo84224.setStemDirection(dirsmo91385);
smo84225.setStemDirection(dirsmo91385);
smo84226.setStemDirection(dirsmo91385);
smo84227.setStemDirection(dirsmo91385);
const smo91385 = new VF.Beam([smo84224,smo84225,smo84226,smo84227]);
const dirsmo91386 = smo84228.getStemDirection();
smo84228.setStemDirection(dirsmo91386);
smo84229.setStemDirection(dirsmo91386);
smo84230.setStemDirection(dirsmo91386);
smo84231.setStemDirection(dirsmo91386);
const smo91386 = new VF.Beam([smo84228,smo84229,smo84230,smo84231]);
 
// formatting measures in staff group smo84911
fmtsmo809365.format([smo80936v0,smo81755v0,smo82566v0,smo83352v0,smo84247v0], 364);
const stavesmo80936 = new VF.Stave(476, 839, 378);
stavesmo80936.setAttribute('id', 'stavesmo80936');
stavesmo80936.setBegBarType(VF.Barline.type.NONE);
stavesmo80936.setContext(context);
stavesmo80936.draw();
smo80936v0.draw(context, stavesmo80936);
smo91369.setContext(context);
smo91369.draw();
smo91370.setContext(context);
smo91370.draw();
const stavesmo81755 = new VF.Stave(476, 933, 378);
stavesmo81755.setAttribute('id', 'stavesmo81755');
stavesmo81755.setBegBarType(VF.Barline.type.NONE);
stavesmo81755.setContext(context);
stavesmo81755.draw();
smo81755v0.draw(context, stavesmo81755);
smo91373.setContext(context);
smo91373.draw();
smo91374.setContext(context);
smo91374.draw();
const stavesmo82566 = new VF.Stave(476, 1011, 378);
stavesmo82566.setAttribute('id', 'stavesmo82566');
stavesmo82566.setBegBarType(VF.Barline.type.NONE);
stavesmo82566.setContext(context);
stavesmo82566.draw();
smo82566v0.draw(context, stavesmo82566);
smo91377.setContext(context);
smo91377.draw();
smo91378.setContext(context);
smo91378.draw();
const stavesmo83352 = new VF.Stave(476, 1109, 378);
stavesmo83352.setAttribute('id', 'stavesmo83352');
stavesmo83352.setBegBarType(VF.Barline.type.NONE);
stavesmo83352.setContext(context);
stavesmo83352.draw();
smo83352v0.draw(context, stavesmo83352);
smo91381.setContext(context);
smo91381.draw();
smo91382.setContext(context);
smo91382.draw();
const stavesmo84247 = new VF.Stave(476, 1231, 378);
stavesmo84247.setAttribute('id', 'stavesmo84247');
stavesmo84247.setBegBarType(VF.Barline.type.NONE);
stavesmo84247.setContext(context);
stavesmo84247.draw();
smo84247v0.draw(context, stavesmo84247);
smo91385.setContext(context);
smo91385.draw();
smo91386.setContext(context);
smo91386.draw();
const fmtsmo809586 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo80958v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80958v0ar = [];
const smo80937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo80937.setAttribute('id', 'smo80937');
smo80937.addModifier(new VF.Dot(), 0);
smo80958v0ar.push(smo80937);
const smo80938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo80938.setAttribute('id', 'smo80938');
smo80958v0ar.push(smo80938);
const smo80939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo80939.setAttribute('id', 'smo80939');
smo80958v0ar.push(smo80939);
const smo80940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["g#/5/n"]}'))
smo80940.setAttribute('id', 'smo80940');
smo80940.addModifier(new VF.Dot(), 0);
smo80958v0ar.push(smo80940);
const smo80941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo80941.setAttribute('id', 'smo80941');
smo80958v0ar.push(smo80941);
const smo80942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo80942.setAttribute('id', 'smo80942');
smo80958v0ar.push(smo80942);
smo80958v0.addTickables(smo80958v0ar)
fmtsmo809586.joinVoices([smo80958v0]);
const fmtsmo817776 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo81777v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81777v0ar = [];
const smo81756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo81756.setAttribute('id', 'smo81756');
smo81756.addModifier(new VF.Dot(), 0);
smo81777v0ar.push(smo81756);
const smo81757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo81757.setAttribute('id', 'smo81757');
smo81777v0ar.push(smo81757);
const smo81758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo81758.setAttribute('id', 'smo81758');
smo81777v0ar.push(smo81758);
const smo81759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo81759.setAttribute('id', 'smo81759');
smo81759.addModifier(new VF.Dot(), 0);
smo81777v0ar.push(smo81759);
const smo81760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo81760.setAttribute('id', 'smo81760');
smo81777v0ar.push(smo81760);
const smo81761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo81761.setAttribute('id', 'smo81761');
smo81777v0ar.push(smo81761);
smo81777v0.addTickables(smo81777v0ar)
fmtsmo817776.joinVoices([smo81777v0]);
const fmtsmo825886 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo82588v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo82588v0ar = [];
const smo82567 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo82567.setAttribute('id', 'smo82567');
smo82567.addModifier(new VF.Dot(), 0);
smo82588v0ar.push(smo82567);
const smo82568 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82568.setAttribute('id', 'smo82568');
smo82588v0ar.push(smo82568);
const smo82569 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo82569.setAttribute('id', 'smo82569');
smo82588v0ar.push(smo82569);
const smo82570 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo82570.setAttribute('id', 'smo82570');
smo82570.addModifier(new VF.Dot(), 0);
smo82588v0ar.push(smo82570);
const smo82571 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo82571.setAttribute('id', 'smo82571');
smo82588v0ar.push(smo82571);
const smo82572 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo82572.setAttribute('id', 'smo82572');
smo82588v0ar.push(smo82572);
smo82588v0.addTickables(smo82588v0ar)
fmtsmo825886.joinVoices([smo82588v0]);
const fmtsmo833766 = new VF.Formatter();
//
// voices and notes for stave 3 6
const smo83376v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo83376v0ar = [];
const smo83353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo83353.setAttribute('id', 'smo83353');
const smo83354 = new VF.Annotation('peo');
smo83354.setAttribute('id', 'smo83354');
smo83354.setFont('Merriweather', 12, 'normal');
smo83354.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo83353.addModifier(smo83354);
smo83354.addClass('lyric lyric-0');
smo83376v0ar.push(smo83353);
const smo83355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo83355.setAttribute('id', 'smo83355');
const smo83356 = new VF.Annotation('-');
smo83356.setAttribute('id', 'smo83356');
smo83356.setFont('Merriweather', 12, 'normal');
smo83356.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo83355.addModifier(smo83356);
smo83356.addClass('lyric lyric-0 lyric-hyphen');
smo83376v0ar.push(smo83355);
const smo83357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo83357.setAttribute('id', 'smo83357');
smo83376v0ar.push(smo83357);
const smo83358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo83358.setAttribute('id', 'smo83358');
const smo83359 = new VF.Annotation('ple');
smo83359.setAttribute('id', 'smo83359');
smo83359.setFont('Merriweather', 12, 'normal');
smo83359.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo83358.addModifier(smo83359);
smo83359.addClass('lyric lyric-0');
smo83376v0ar.push(smo83358);
const smo83360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo83360.setAttribute('id', 'smo83360');
smo83376v0ar.push(smo83360);
smo83376v0.addTickables(smo83376v0ar)
fmtsmo833766.joinVoices([smo83376v0]);
const fmtsmo842676 = new VF.Formatter();
//
// voices and notes for stave 4 6
const smo84267v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84267v0ar = [];
const smo84248 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo84248.setAttribute('id', 'smo84248');
smo84248.addModifier(new VF.Dot(), 0);
smo84267v0ar.push(smo84248);
const smo84249 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo84249.setAttribute('id', 'smo84249');
smo84267v0ar.push(smo84249);
const smo84250 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo84250.setAttribute('id', 'smo84250');
smo84267v0ar.push(smo84250);
const smo84251 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84251.setAttribute('id', 'smo84251');
smo84267v0ar.push(smo84251);
smo84267v0.addTickables(smo84267v0ar)
fmtsmo842676.joinVoices([smo84267v0]);
// create beam groups and tuplets for format grp smo84911 before formatting
const dirsmo91389 = smo80937.getStemDirection();
smo80937.setStemDirection(dirsmo91389);
smo80938.setStemDirection(dirsmo91389);
const smo91389 = new VF.Beam([smo80937,smo80938]);
const dirsmo91390 = smo80940.getStemDirection();
smo80940.setStemDirection(dirsmo91390);
smo80941.setStemDirection(dirsmo91390);
const smo91390 = new VF.Beam([smo80940,smo80941]);
const dirsmo91393 = smo81756.getStemDirection();
smo81756.setStemDirection(dirsmo91393);
smo81757.setStemDirection(dirsmo91393);
const smo91393 = new VF.Beam([smo81756,smo81757]);
const dirsmo91394 = smo81759.getStemDirection();
smo81759.setStemDirection(dirsmo91394);
smo81760.setStemDirection(dirsmo91394);
const smo91394 = new VF.Beam([smo81759,smo81760]);
const dirsmo91397 = smo82567.getStemDirection();
smo82567.setStemDirection(dirsmo91397);
smo82568.setStemDirection(dirsmo91397);
const smo91397 = new VF.Beam([smo82567,smo82568]);
const dirsmo91398 = smo82570.getStemDirection();
smo82570.setStemDirection(dirsmo91398);
smo82571.setStemDirection(dirsmo91398);
const smo91398 = new VF.Beam([smo82570,smo82571]);
const dirsmo91401 = smo83353.getStemDirection();
smo83353.setStemDirection(dirsmo91401);
smo83355.setStemDirection(dirsmo91401);
smo83357.setStemDirection(dirsmo91401);
const smo91401 = new VF.Beam([smo83353,smo83355,smo83357]);
const dirsmo91404 = smo84248.getStemDirection();
smo84248.setStemDirection(dirsmo91404);
smo84249.setStemDirection(dirsmo91404);
const smo91404 = new VF.Beam([smo84248,smo84249]);
 
// formatting measures in staff group smo84911
fmtsmo809586.format([smo80958v0,smo81777v0,smo82588v0,smo83376v0,smo84267v0], 275);
const stavesmo80958 = new VF.Stave(854, 839, 289);
stavesmo80958.setAttribute('id', 'stavesmo80958');
stavesmo80958.setBegBarType(VF.Barline.type.NONE);
stavesmo80958.setContext(context);
stavesmo80958.draw();
smo80958v0.draw(context, stavesmo80958);
smo91389.setContext(context);
smo91389.draw();
smo91390.setContext(context);
smo91390.draw();
const stavesmo81777 = new VF.Stave(854, 933, 289);
stavesmo81777.setAttribute('id', 'stavesmo81777');
stavesmo81777.setBegBarType(VF.Barline.type.NONE);
stavesmo81777.setContext(context);
stavesmo81777.draw();
smo81777v0.draw(context, stavesmo81777);
smo91393.setContext(context);
smo91393.draw();
smo91394.setContext(context);
smo91394.draw();
const stavesmo82588 = new VF.Stave(854, 1011, 289);
stavesmo82588.setAttribute('id', 'stavesmo82588');
stavesmo82588.setBegBarType(VF.Barline.type.NONE);
stavesmo82588.setContext(context);
stavesmo82588.draw();
smo82588v0.draw(context, stavesmo82588);
smo91397.setContext(context);
smo91397.draw();
smo91398.setContext(context);
smo91398.draw();
const stavesmo83376 = new VF.Stave(854, 1109, 289);
stavesmo83376.setAttribute('id', 'stavesmo83376');
stavesmo83376.setBegBarType(VF.Barline.type.NONE);
stavesmo83376.setContext(context);
stavesmo83376.draw();
smo83376v0.draw(context, stavesmo83376);
smo91401.setContext(context);
smo91401.draw();
const stavesmo84267 = new VF.Stave(854, 1231, 289);
stavesmo84267.setAttribute('id', 'stavesmo84267');
stavesmo84267.setBegBarType(VF.Barline.type.NONE);
stavesmo84267.setContext(context);
stavesmo84267.draw();
smo84267v0.draw(context, stavesmo84267);
smo91404.setContext(context);
smo91404.draw();
const fmtsmo809757 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo80975v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80975v0ar = [];
const smo80959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo80959.setAttribute('id', 'smo80959');
smo80975v0ar.push(smo80959);
smo80975v0.addTickables(smo80975v0ar)
fmtsmo809757.joinVoices([smo80975v0]);
const fmtsmo817947 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo81794v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81794v0ar = [];
const smo81778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo81778.setAttribute('id', 'smo81778');
smo81794v0ar.push(smo81778);
smo81794v0.addTickables(smo81794v0ar)
fmtsmo817947.joinVoices([smo81794v0]);
const fmtsmo826057 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo82605v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo82605v0ar = [];
const smo82589 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
smo82589.setAttribute('id', 'smo82589');
smo82605v0ar.push(smo82589);
smo82605v0.addTickables(smo82605v0ar)
fmtsmo826057.joinVoices([smo82605v0]);
const fmtsmo834007 = new VF.Formatter();
//
// voices and notes for stave 3 7
const smo83400v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo83400v0ar = [];
const smo83377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo83377.setAttribute('id', 'smo83377');
const smo83378 = new VF.Annotation('Com');
smo83378.setAttribute('id', 'smo83378');
smo83378.setFont('Merriweather', 12, 'normal');
smo83378.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo83377.addModifier(smo83378);
smo83378.addClass('lyric lyric-0');
smo83400v0ar.push(smo83377);
const smo83379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo83379.setAttribute('id', 'smo83379');
smo83379.addModifier(new VF.Dot(), 0);
const smo83380 = new VF.Annotation('-');
smo83380.setAttribute('id', 'smo83380');
smo83380.setFont('Merriweather', 12, 'normal');
smo83380.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo83379.addModifier(smo83380);
smo83380.addClass('lyric lyric-0 lyric-hyphen');
smo83400v0ar.push(smo83379);
const smo83381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo83381.setAttribute('id', 'smo83381');
const smo83382 = new VF.Annotation('fort');
smo83382.setAttribute('id', 'smo83382');
smo83382.setFont('Merriweather', 12, 'normal');
smo83382.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo83381.addModifier(smo83382);
smo83382.addClass('lyric lyric-0');
smo83400v0ar.push(smo83381);
const smo83383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo83383.setAttribute('id', 'smo83383');
const smo83384 = new VF.Annotation('ye,');
smo83384.setAttribute('id', 'smo83384');
smo83384.setFont('Merriweather', 12, 'normal');
smo83384.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo83383.addModifier(smo83384);
smo83384.addClass('lyric lyric-0');
smo83400v0ar.push(smo83383);
smo83400v0.addTickables(smo83400v0ar)
fmtsmo834007.joinVoices([smo83400v0]);
const fmtsmo842847 = new VF.Formatter();
//
// voices and notes for stave 4 7
const smo84284v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84284v0ar = [];
const smo84268 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84268.setAttribute('id', 'smo84268');
smo84284v0ar.push(smo84268);
smo84284v0.addTickables(smo84284v0ar)
fmtsmo842847.joinVoices([smo84284v0]);
// create beam groups and tuplets for format grp smo84911 before formatting
const dirsmo91413 = smo83379.getStemDirection();
smo83379.setStemDirection(dirsmo91413);
smo83381.setStemDirection(dirsmo91413);
const smo91413 = new VF.Beam([smo83379,smo83381]);
 
// formatting measures in staff group smo84911
fmtsmo809757.format([smo80975v0,smo81794v0,smo82605v0,smo83400v0,smo84284v0], 218);
const stavesmo80975 = new VF.Stave(1143, 839, 232);
stavesmo80975.setAttribute('id', 'stavesmo80975');
stavesmo80975.setBegBarType(VF.Barline.type.NONE);
stavesmo80975.setContext(context);
stavesmo80975.draw();
smo80975v0.draw(context, stavesmo80975);
const stavesmo81794 = new VF.Stave(1143, 933, 232);
stavesmo81794.setAttribute('id', 'stavesmo81794');
stavesmo81794.setBegBarType(VF.Barline.type.NONE);
stavesmo81794.setContext(context);
stavesmo81794.draw();
smo81794v0.draw(context, stavesmo81794);
const stavesmo82605 = new VF.Stave(1143, 1011, 232);
stavesmo82605.setAttribute('id', 'stavesmo82605');
stavesmo82605.setBegBarType(VF.Barline.type.NONE);
stavesmo82605.setContext(context);
stavesmo82605.draw();
smo82605v0.draw(context, stavesmo82605);
const stavesmo83400 = new VF.Stave(1143, 1109, 232);
stavesmo83400.setAttribute('id', 'stavesmo83400');
stavesmo83400.setBegBarType(VF.Barline.type.NONE);
stavesmo83400.setContext(context);
stavesmo83400.draw();
smo83400v0.draw(context, stavesmo83400);
smo91413.setContext(context);
smo91413.draw();
const stavesmo84284 = new VF.Stave(1143, 1231, 232);
stavesmo84284.setAttribute('id', 'stavesmo84284');
stavesmo84284.setBegBarType(VF.Barline.type.NONE);
stavesmo84284.setContext(context);
stavesmo84284.draw();
smo84284v0.draw(context, stavesmo84284);
const rightsmo84911stavesmo809754 = new VF.StaveConnector(stavesmo80975, stavesmo84284).setType(0);
rightsmo84911stavesmo809754.setContext(context).draw();
// modifier from 0-0-0-0 to 0-0-0-3
const smo92469 = new VF.Curve(smo80791, smo80798, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":25,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo92469.setContext(context).draw();
// modifier from 0-4-0-4 to 0-4-0-5
const smo92470 = new VF.Curve(smo80893, smo80894, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo92470.setContext(context).draw();
// modifier from 0-0-0-4 to 0-0-0-5
const smo92471 = new VF.Curve(smo80800, smo80801, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":5,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo92471.setContext(context).draw();
// modifier from 0-1-0-4 to 0-1-0-5
const smo92472 = new VF.Curve(smo80824, smo80825, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo92472.setContext(context).draw();
// modifier from 1-0-0-0 to 1-0-0-3
const smo92473 = new VF.Curve(smo81611, smo81617, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":20,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo92473.setContext(context).draw();
// modifier from 2-0-0-0 to 2-0-0-3
const smo92474 = new VF.Curve(smo82422, smo82428, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":20,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo92474.setContext(context).draw();
// modifier from 3-7-0-0 to 3-7-0-1
const smo92475 = new VF.Curve(smo83377, smo83379, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo92475.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo83285').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo83289').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo83309').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo83327').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo83329').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo83334').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo83336').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo83354').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo83356').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo83359').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo83378').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo83380').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo83382').setAttributeNS('', 'transform', 'translate(0 2)');
}
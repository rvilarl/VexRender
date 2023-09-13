// @@ Postillionlied p 1/3  by Franz Grothe
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
const fmtsmo2304670 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo230467v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230467v0ar = [];
const smo230451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo230451.setAttribute('id', 'smo230451');
smo230451.addModifier(new VF.Dot(), 0);
smo230467v0ar.push(smo230451);
smo230467v0.addTickables(smo230467v0ar)
fmtsmo2304670.joinVoices([smo230467v0]);
const fmtsmo2318670 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo231867v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231867v0ar = [];
const smo231849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo231849.setAttribute('id', 'smo231849');
smo231849.addModifier(new VF.Dot(), 0);
smo231867v0ar.push(smo231849);
const smo231850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo231850.setAttribute('id', 'smo231850');
smo231867v0ar.push(smo231850);
const smo231851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo231851.setAttribute('id', 'smo231851');
smo231867v0ar.push(smo231851);
smo231867v0.addTickables(smo231867v0ar)
fmtsmo2318670.joinVoices([smo231867v0]);
const fmtsmo2329880 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo232988v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232988v0ar = [];
const smo232970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo232970.setAttribute('id', 'smo232970');
smo232970.addModifier(new VF.Dot(), 0);
smo232988v0ar.push(smo232970);
const smo232971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo232971.setAttribute('id', 'smo232971');
smo232988v0ar.push(smo232971);
const smo232972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo232972.setAttribute('id', 'smo232972');
smo232988v0ar.push(smo232972);
smo232988v0.addTickables(smo232988v0ar)
fmtsmo2329880.joinVoices([smo232988v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo2304670.format([smo230467v0,smo231867v0,smo232988v0], 105);
const stavesmo230467 = new VF.Stave(66, 119, 202);
stavesmo230467.setAttribute('id', 'stavesmo230467');
stavesmo230467.setBegBarType(1);
stavesmo230467.setTempo(JSON.parse('{"duration":"4","dots":1,"bpm":120}'), -1 * 0);
stavesmo230467.addClef('treble');
stavesmo230467.addTimeSignature('6/8');
const keysmo230467 = new VF.KeySignature('G');
keysmo230467.addToStave(stavesmo230467);
stavesmo230467.setContext(context);
stavesmo230467.draw();
smo230467v0.draw(context, stavesmo230467);
const stavesmo231867 = new VF.Stave(66, 226, 202);
stavesmo231867.setAttribute('id', 'stavesmo231867');
stavesmo231867.setBegBarType(1);
stavesmo231867.addClef('treble');
stavesmo231867.addTimeSignature('6/8');
const keysmo231867 = new VF.KeySignature('G');
keysmo231867.addToStave(stavesmo231867);
stavesmo231867.setContext(context);
stavesmo231867.draw();
smo231867v0.draw(context, stavesmo231867);
const stavesmo232988 = new VF.Stave(66, 301, 202);
stavesmo232988.setAttribute('id', 'stavesmo232988');
stavesmo232988.setBegBarType(1);
stavesmo232988.addClef('treble');
stavesmo232988.addTimeSignature('6/8');
const keysmo232988 = new VF.KeySignature('G');
keysmo232988.addToStave(stavesmo232988);
stavesmo232988.setContext(context);
stavesmo232988.draw();
smo232988v0.draw(context, stavesmo232988);
const leftsmo234202stavesmo2304672 = new VF.StaveConnector(stavesmo230467, stavesmo232988).setType(1);
leftsmo234202stavesmo2304672.setContext(context).draw();
const fmtsmo2304841 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo230484v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230484v0ar = [];
const smo230468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo230468.setAttribute('id', 'smo230468');
smo230468.addModifier(new VF.Dot(), 0);
smo230484v0ar.push(smo230468);
smo230484v0.addTickables(smo230484v0ar)
fmtsmo2304841.joinVoices([smo230484v0]);
const fmtsmo2318851 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo231885v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231885v0ar = [];
const smo231868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo231868.setAttribute('id', 'smo231868');
smo231868.addModifier(new VF.Dot(), 0);
smo231885v0ar.push(smo231868);
const smo231869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo231869.setAttribute('id', 'smo231869');
smo231869.addModifier(new VF.Dot(), 0);
smo231885v0ar.push(smo231869);
smo231885v0.addTickables(smo231885v0ar)
fmtsmo2318851.joinVoices([smo231885v0]);
const fmtsmo2330061 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo233006v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233006v0ar = [];
const smo232989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo232989.setAttribute('id', 'smo232989');
smo232989.addModifier(new VF.Dot(), 0);
smo233006v0ar.push(smo232989);
const smo232990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo232990.setAttribute('id', 'smo232990');
smo232990.addModifier(new VF.Dot(), 0);
smo233006v0ar.push(smo232990);
smo233006v0.addTickables(smo233006v0ar)
fmtsmo2330061.joinVoices([smo233006v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo2304841.format([smo230484v0,smo231885v0,smo233006v0], 75);
const stavesmo230484 = new VF.Stave(268, 119, 89);
stavesmo230484.setAttribute('id', 'stavesmo230484');
stavesmo230484.setBegBarType(VF.Barline.type.NONE);
stavesmo230484.setContext(context);
stavesmo230484.draw();
smo230484v0.draw(context, stavesmo230484);
const stavesmo231885 = new VF.Stave(268, 226, 89);
stavesmo231885.setAttribute('id', 'stavesmo231885');
stavesmo231885.setBegBarType(VF.Barline.type.NONE);
stavesmo231885.setContext(context);
stavesmo231885.draw();
smo231885v0.draw(context, stavesmo231885);
const stavesmo233006 = new VF.Stave(268, 301, 89);
stavesmo233006.setAttribute('id', 'stavesmo233006');
stavesmo233006.setBegBarType(VF.Barline.type.NONE);
stavesmo233006.setContext(context);
stavesmo233006.draw();
smo233006v0.draw(context, stavesmo233006);
const fmtsmo2305012 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo230501v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230501v0ar = [];
const smo230485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo230485.setAttribute('id', 'smo230485');
smo230485.addModifier(new VF.Dot(), 0);
smo230501v0ar.push(smo230485);
smo230501v0.addTickables(smo230501v0ar)
fmtsmo2305012.joinVoices([smo230501v0]);
const fmtsmo2319062 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo231906v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231906v0ar = [];
const smo231886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo231886.setAttribute('id', 'smo231886');
smo231906v0ar.push(smo231886);
const smo231887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo231887.setAttribute('id', 'smo231887');
smo231906v0ar.push(smo231887);
const smo231888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo231888.setAttribute('id', 'smo231888');
smo231906v0ar.push(smo231888);
const smo231889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo231889.setAttribute('id', 'smo231889');
smo231906v0ar.push(smo231889);
const smo231890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo231890.setAttribute('id', 'smo231890');
smo231906v0ar.push(smo231890);
smo231906v0.addTickables(smo231906v0ar)
fmtsmo2319062.joinVoices([smo231906v0]);
const fmtsmo2330272 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo233027v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233027v0ar = [];
const smo233007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo233007.setAttribute('id', 'smo233007');
smo233027v0ar.push(smo233007);
const smo233008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo233008.setAttribute('id', 'smo233008');
smo233027v0ar.push(smo233008);
const smo233009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo233009.setAttribute('id', 'smo233009');
smo233027v0ar.push(smo233009);
const smo233010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo233010.setAttribute('id', 'smo233010');
smo233027v0ar.push(smo233010);
const smo233011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo233011.setAttribute('id', 'smo233011');
smo233027v0ar.push(smo233011);
smo233027v0.addTickables(smo233027v0ar)
fmtsmo2330272.joinVoices([smo233027v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240168 = smo231886.getStemDirection();
smo231886.setStemDirection(dirsmo240168);
smo231887.setStemDirection(dirsmo240168);
smo231888.setStemDirection(dirsmo240168);
const smo240168 = new VF.Beam([smo231886,smo231887,smo231888]);
const dirsmo240171 = smo233007.getStemDirection();
smo233007.setStemDirection(dirsmo240171);
smo233008.setStemDirection(dirsmo240171);
smo233009.setStemDirection(dirsmo240171);
const smo240171 = new VF.Beam([smo233007,smo233008,smo233009]);
 
// formatting measures in staff group smo234202
fmtsmo2305012.format([smo230501v0,smo231906v0,smo233027v0], 146);
const stavesmo230501 = new VF.Stave(357, 119, 160);
stavesmo230501.setAttribute('id', 'stavesmo230501');
stavesmo230501.setBegBarType(VF.Barline.type.NONE);
stavesmo230501.setContext(context);
stavesmo230501.draw();
smo230501v0.draw(context, stavesmo230501);
const stavesmo231906 = new VF.Stave(357, 226, 160);
stavesmo231906.setAttribute('id', 'stavesmo231906');
stavesmo231906.setBegBarType(VF.Barline.type.NONE);
stavesmo231906.setContext(context);
stavesmo231906.draw();
smo231906v0.draw(context, stavesmo231906);
smo240168.setContext(context);
smo240168.draw();
const stavesmo233027 = new VF.Stave(357, 301, 160);
stavesmo233027.setAttribute('id', 'stavesmo233027');
stavesmo233027.setBegBarType(VF.Barline.type.NONE);
stavesmo233027.setContext(context);
stavesmo233027.draw();
smo233027v0.draw(context, stavesmo233027);
smo240171.setContext(context);
smo240171.draw();
const fmtsmo2305183 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo230518v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230518v0ar = [];
const smo230502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo230502.setAttribute('id', 'smo230502');
smo230502.addModifier(new VF.Dot(), 0);
smo230518v0ar.push(smo230502);
smo230518v0.addTickables(smo230518v0ar)
fmtsmo2305183.joinVoices([smo230518v0]);
const fmtsmo2319273 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo231927v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231927v0ar = [];
const smo231907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo231907.setAttribute('id', 'smo231907');
smo231927v0ar.push(smo231907);
const smo231908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo231908.setAttribute('id', 'smo231908');
smo231927v0ar.push(smo231908);
const smo231909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo231909.setAttribute('id', 'smo231909');
smo231927v0ar.push(smo231909);
const smo231910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo231910.setAttribute('id', 'smo231910');
smo231927v0ar.push(smo231910);
const smo231911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo231911.setAttribute('id', 'smo231911');
smo231927v0ar.push(smo231911);
smo231927v0.addTickables(smo231927v0ar)
fmtsmo2319273.joinVoices([smo231927v0]);
const fmtsmo2330473 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo233047v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233047v0ar = [];
const smo233028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo233028.setAttribute('id', 'smo233028');
smo233047v0ar.push(smo233028);
const smo233029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo233029.setAttribute('id', 'smo233029');
smo233047v0ar.push(smo233029);
const smo233030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo233030.setAttribute('id', 'smo233030');
smo233047v0ar.push(smo233030);
const smo233031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n","f#/3/n"]}'))
smo233031.setAttribute('id', 'smo233031');
smo233031.addModifier(new VF.Dot(), 0);
smo233031.addModifier(new VF.Dot(), 1);
smo233047v0ar.push(smo233031);
smo233047v0.addTickables(smo233047v0ar)
fmtsmo2330473.joinVoices([smo233047v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240176 = smo231907.getStemDirection();
smo231907.setStemDirection(dirsmo240176);
smo231908.setStemDirection(dirsmo240176);
smo231909.setStemDirection(dirsmo240176);
const smo240176 = new VF.Beam([smo231907,smo231908,smo231909]);
const dirsmo240179 = smo233028.getStemDirection();
smo233028.setStemDirection(dirsmo240179);
smo233029.setStemDirection(dirsmo240179);
smo233030.setStemDirection(dirsmo240179);
const smo240179 = new VF.Beam([smo233028,smo233029,smo233030]);
 
// formatting measures in staff group smo234202
fmtsmo2305183.format([smo230518v0,smo231927v0,smo233047v0], 160);
const stavesmo230518 = new VF.Stave(517, 119, 174);
stavesmo230518.setAttribute('id', 'stavesmo230518');
stavesmo230518.setBegBarType(VF.Barline.type.NONE);
stavesmo230518.setContext(context);
stavesmo230518.draw();
smo230518v0.draw(context, stavesmo230518);
const stavesmo231927 = new VF.Stave(517, 226, 174);
stavesmo231927.setAttribute('id', 'stavesmo231927');
stavesmo231927.setBegBarType(VF.Barline.type.NONE);
stavesmo231927.setContext(context);
stavesmo231927.draw();
smo231927v0.draw(context, stavesmo231927);
smo240176.setContext(context);
smo240176.draw();
const stavesmo233047 = new VF.Stave(517, 301, 174);
stavesmo233047.setAttribute('id', 'stavesmo233047');
stavesmo233047.setBegBarType(VF.Barline.type.NONE);
stavesmo233047.setContext(context);
stavesmo233047.draw();
smo233047v0.draw(context, stavesmo233047);
smo240179.setContext(context);
smo240179.draw();
const fmtsmo2305354 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo230535v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230535v0ar = [];
const smo230519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo230519.setAttribute('id', 'smo230519');
smo230519.addModifier(new VF.Dot(), 0);
smo230535v0ar.push(smo230519);
smo230535v0.addTickables(smo230535v0ar)
fmtsmo2305354.joinVoices([smo230535v0]);
const fmtsmo2319444 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo231944v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231944v0ar = [];
const smo231928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo231928.setAttribute('id', 'smo231928');
smo231928.addModifier(new VF.Dot(), 0);
smo231944v0ar.push(smo231928);
smo231944v0.addTickables(smo231944v0ar)
fmtsmo2319444.joinVoices([smo231944v0]);
const fmtsmo2330674 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo233067v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233067v0ar = [];
const smo233048 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233048.setAttribute('id', 'smo233048');
smo233067v0ar.push(smo233048);
const smo233049 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233049.setAttribute('id', 'smo233049');
smo233067v0ar.push(smo233049);
const smo233050 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233050.setAttribute('id', 'smo233050');
smo233067v0ar.push(smo233050);
const smo233051 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233051.setAttribute('id', 'smo233051');
smo233067v0ar.push(smo233051);
smo233067v0.addTickables(smo233067v0ar)
fmtsmo2330674.joinVoices([smo233067v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo2305354.format([smo230535v0,smo231944v0,smo233067v0], 127);
const stavesmo230535 = new VF.Stave(691, 119, 183);
stavesmo230535.setAttribute('id', 'stavesmo230535');
stavesmo230535.setBegBarType(4);
stavesmo230535.setContext(context);
stavesmo230535.draw();
smo230535v0.draw(context, stavesmo230535);
const stavesmo231944 = new VF.Stave(691, 226, 183);
stavesmo231944.setAttribute('id', 'stavesmo231944');
stavesmo231944.setBegBarType(4);
stavesmo231944.setContext(context);
stavesmo231944.draw();
smo231944v0.draw(context, stavesmo231944);
const stavesmo233067 = new VF.Stave(691, 301, 183);
stavesmo233067.setAttribute('id', 'stavesmo233067');
stavesmo233067.setBegBarType(4);
stavesmo233067.addClef('bass');
stavesmo233067.setContext(context);
stavesmo233067.draw();
smo233067v0.draw(context, stavesmo233067);
const fmtsmo2305545 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo230554v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230554v0ar = [];
const smo230536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo230536.setAttribute('id', 'smo230536');
smo230536.addModifier(new VF.Dot(), 0);
smo230554v0ar.push(smo230536);
const smo230537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo230537.setAttribute('id', 'smo230537');
smo230537.addModifier(new VF.Dot(), 0);
const smo230538 = new VF.Annotation('Mein');
smo230538.setAttribute('id', 'smo230538');
smo230538.setFont('Merriweather', 12, 'normal');
smo230538.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230537.addModifier(smo230538);
smo230538.addClass('lyric lyric-0');
smo230554v0ar.push(smo230537);
smo230554v0.addTickables(smo230554v0ar)
fmtsmo2305545.joinVoices([smo230554v0]);
const fmtsmo2319625 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo231962v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231962v0ar = [];
const smo231945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo231945.setAttribute('id', 'smo231945');
smo231945.addModifier(new VF.Dot(), 0);
smo231962v0ar.push(smo231945);
const smo231946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo231946.setAttribute('id', 'smo231946');
smo231946.addModifier(new VF.Dot(), 0);
smo231962v0ar.push(smo231946);
smo231962v0.addTickables(smo231962v0ar)
fmtsmo2319625.joinVoices([smo231962v0]);
const fmtsmo2330875 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo233087v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233087v0ar = [];
const smo233068 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233068.setAttribute('id', 'smo233068');
smo233087v0ar.push(smo233068);
const smo233069 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233069.setAttribute('id', 'smo233069');
smo233087v0ar.push(smo233069);
const smo233070 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233070.setAttribute('id', 'smo233070');
smo233087v0ar.push(smo233070);
const smo233071 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233071.setAttribute('id', 'smo233071');
smo233087v0ar.push(smo233071);
smo233087v0.addTickables(smo233087v0ar)
fmtsmo2330875.joinVoices([smo233087v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo2305545.format([smo230554v0,smo231962v0,smo233087v0], 155);
const stavesmo230554 = new VF.Stave(874, 119, 169);
stavesmo230554.setAttribute('id', 'stavesmo230554');
stavesmo230554.setBegBarType(VF.Barline.type.NONE);
stavesmo230554.setContext(context);
stavesmo230554.draw();
smo230554v0.draw(context, stavesmo230554);
const stavesmo231962 = new VF.Stave(874, 226, 169);
stavesmo231962.setAttribute('id', 'stavesmo231962');
stavesmo231962.setBegBarType(VF.Barline.type.NONE);
stavesmo231962.setContext(context);
stavesmo231962.draw();
smo231962v0.draw(context, stavesmo231962);
const stavesmo233087 = new VF.Stave(874, 301, 169);
stavesmo233087.setAttribute('id', 'stavesmo233087');
stavesmo233087.setBegBarType(VF.Barline.type.NONE);
stavesmo233087.setContext(context);
stavesmo233087.draw();
smo233087v0.draw(context, stavesmo233087);
const fmtsmo2305726 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo230572v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230572v0ar = [];
const smo230555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo230555.setAttribute('id', 'smo230555');
smo230555.addModifier(new VF.Dot(), 0);
const smo230556 = new VF.Annotation('Shatz,');
smo230556.setAttribute('id', 'smo230556');
smo230556.setFont('Merriweather', 12, 'normal');
smo230556.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230555.addModifier(smo230556);
smo230556.addClass('lyric lyric-0');
smo230572v0ar.push(smo230555);
smo230572v0.addTickables(smo230572v0ar)
fmtsmo2305726.joinVoices([smo230572v0]);
const fmtsmo2319796 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo231979v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231979v0ar = [];
const smo231963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","f#/4/n"]}'))
smo231963.setAttribute('id', 'smo231963');
smo231963.addModifier(new VF.Dot(), 0);
smo231963.addModifier(new VF.Dot(), 1);
smo231979v0ar.push(smo231963);
smo231979v0.addTickables(smo231979v0ar)
fmtsmo2319796.joinVoices([smo231979v0]);
const fmtsmo2331076 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo233107v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233107v0ar = [];
const smo233088 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233088.setAttribute('id', 'smo233088');
smo233107v0ar.push(smo233088);
const smo233089 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233089.setAttribute('id', 'smo233089');
smo233107v0ar.push(smo233089);
const smo233090 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233090.setAttribute('id', 'smo233090');
smo233107v0ar.push(smo233090);
const smo233091 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233091.setAttribute('id', 'smo233091');
smo233107v0ar.push(smo233091);
smo233107v0.addTickables(smo233107v0ar)
fmtsmo2331076.joinVoices([smo233107v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo2305726.format([smo230572v0,smo231979v0,smo233107v0], 154);
const stavesmo230572 = new VF.Stave(1043, 119, 168);
stavesmo230572.setAttribute('id', 'stavesmo230572');
stavesmo230572.setBegBarType(VF.Barline.type.NONE);
stavesmo230572.setContext(context);
stavesmo230572.draw();
smo230572v0.draw(context, stavesmo230572);
const stavesmo231979 = new VF.Stave(1043, 226, 168);
stavesmo231979.setAttribute('id', 'stavesmo231979');
stavesmo231979.setBegBarType(VF.Barline.type.NONE);
stavesmo231979.setContext(context);
stavesmo231979.draw();
smo231979v0.draw(context, stavesmo231979);
const stavesmo233107 = new VF.Stave(1043, 301, 168);
stavesmo233107.setAttribute('id', 'stavesmo233107');
stavesmo233107.setBegBarType(VF.Barline.type.NONE);
stavesmo233107.setContext(context);
stavesmo233107.draw();
smo233107v0.draw(context, stavesmo233107);
const rightsmo234202stavesmo2305722 = new VF.StaveConnector(stavesmo230572, stavesmo233107).setType(0);
rightsmo234202stavesmo2305722.setContext(context).draw();
const fmtsmo2306027 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo230602v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230602v0ar = [];
const smo230573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo230573.setAttribute('id', 'smo230573');
smo230602v0ar.push(smo230573);
const smo230575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo230575.setAttribute('id', 'smo230575');
const smo230576 = new VF.Annotation('der');
smo230576.setAttribute('id', 'smo230576');
smo230576.setFont('Merriweather', 12, 'normal');
smo230576.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230575.addModifier(smo230576);
smo230576.addClass('lyric lyric-0');
const smo230577 = new VF.Annotation('hat');
smo230577.setAttribute('id', 'smo230577');
smo230577.setFont('Merriweather', 12, 'normal');
smo230577.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230575.addModifier(smo230577);
smo230577.addClass('lyric lyric-1');
smo230602v0ar.push(smo230575);
const smo230578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo230578.setAttribute('id', 'smo230578');
const smo230579 = new VF.Annotation('is');
smo230579.setAttribute('id', 'smo230579');
smo230579.setFont('Merriweather', 12, 'normal');
smo230579.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230578.addModifier(smo230579);
smo230579.addClass('lyric lyric-0');
const smo230580 = new VF.Annotation('vie');
smo230580.setAttribute('id', 'smo230580');
smo230580.setFont('Merriweather', 12, 'normal');
smo230580.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230578.addModifier(smo230580);
smo230580.addClass('lyric lyric-1 lyric-hyphen');
smo230602v0ar.push(smo230578);
const smo230581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo230581.setAttribute('id', 'smo230581');
const smo230582 = new VF.Annotation('Po');
smo230582.setAttribute('id', 'smo230582');
smo230582.setFont('Merriweather', 12, 'normal');
smo230582.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230581.addModifier(smo230582);
smo230582.addClass('lyric lyric-0 lyric-hyphen');
const smo230583 = new VF.Annotation('les');
smo230583.setAttribute('id', 'smo230583');
smo230583.setFont('Merriweather', 12, 'normal');
smo230583.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230581.addModifier(smo230583);
smo230583.addClass('lyric lyric-1');
smo230602v0ar.push(smo230581);
const smo230584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo230584.setAttribute('id', 'smo230584');
const smo230585 = new VF.Annotation('stil');
smo230585.setAttribute('id', 'smo230585');
smo230585.setFont('Merriweather', 12, 'normal');
smo230585.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230584.addModifier(smo230585);
smo230585.addClass('lyric lyric-0 lyric-hyphen');
const smo230586 = new VF.Annotation('ge');
smo230586.setAttribute('id', 'smo230586');
smo230586.setFont('Merriweather', 12, 'normal');
smo230586.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230584.addModifier(smo230586);
smo230586.addClass('lyric lyric-1 lyric-hyphen');
smo230602v0ar.push(smo230584);
smo230602v0.addTickables(smo230602v0ar)
fmtsmo2306027.joinVoices([smo230602v0]);
const fmtsmo2319967 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo231996v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231996v0ar = [];
const smo231980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","f#/4/n"]}'))
smo231980.setAttribute('id', 'smo231980');
smo231980.addModifier(new VF.Dot(), 0);
smo231980.addModifier(new VF.Dot(), 1);
smo231996v0ar.push(smo231980);
smo231996v0.addTickables(smo231996v0ar)
fmtsmo2319967.joinVoices([smo231996v0]);
const fmtsmo2331277 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo233127v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233127v0ar = [];
const smo233108 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233108.setAttribute('id', 'smo233108');
smo233127v0ar.push(smo233108);
const smo233109 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233109.setAttribute('id', 'smo233109');
smo233127v0ar.push(smo233109);
const smo233110 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233110.setAttribute('id', 'smo233110');
smo233127v0ar.push(smo233110);
const smo233111 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233111.setAttribute('id', 'smo233111');
smo233127v0ar.push(smo233111);
smo233127v0.addTickables(smo233127v0ar)
fmtsmo2331277.joinVoices([smo233127v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240204 = smo230578.getStemDirection();
smo230578.setStemDirection(dirsmo240204);
smo230581.setStemDirection(dirsmo240204);
smo230584.setStemDirection(dirsmo240204);
const smo240204 = new VF.Beam([smo230578,smo230581,smo230584]);
 
// formatting measures in staff group smo234202
fmtsmo2306027.format([smo230602v0,smo231996v0,smo233127v0], 232);
const stavesmo230602 = new VF.Stave(66, 451, 306);
stavesmo230602.setAttribute('id', 'stavesmo230602');
stavesmo230602.setBegBarType(1);
stavesmo230602.addClef('treble');
const keysmo230602 = new VF.KeySignature('G');
keysmo230602.addToStave(stavesmo230602);
stavesmo230602.setContext(context);
stavesmo230602.draw();
smo230602v0.draw(context, stavesmo230602);
smo240204.setContext(context);
smo240204.draw();
const stavesmo231996 = new VF.Stave(66, 566, 306);
stavesmo231996.setAttribute('id', 'stavesmo231996');
stavesmo231996.setBegBarType(1);
stavesmo231996.addClef('treble');
const keysmo231996 = new VF.KeySignature('G');
keysmo231996.addToStave(stavesmo231996);
stavesmo231996.setContext(context);
stavesmo231996.draw();
smo231996v0.draw(context, stavesmo231996);
const stavesmo233127 = new VF.Stave(66, 699, 306);
stavesmo233127.setAttribute('id', 'stavesmo233127');
stavesmo233127.setBegBarType(1);
stavesmo233127.addClef('bass');
const keysmo233127 = new VF.KeySignature('G');
keysmo233127.addToStave(stavesmo233127);
stavesmo233127.setContext(context);
stavesmo233127.draw();
smo233127v0.draw(context, stavesmo233127);
const leftsmo234202stavesmo2306022 = new VF.StaveConnector(stavesmo230602, stavesmo233127).setType(1);
leftsmo234202stavesmo2306022.setContext(context).draw();
const fmtsmo2306218 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo230621v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230621v0ar = [];
const smo230603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo230603.setAttribute('id', 'smo230603');
smo230603.addModifier(new VF.Dot(), 0);
const smo230604 = new VF.Annotation('lion,');
smo230604.setAttribute('id', 'smo230604');
smo230604.setFont('Merriweather', 12, 'normal');
smo230604.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230603.addModifier(smo230604);
smo230604.addClass('lyric lyric-0');
const smo230605 = new VF.Annotation('sehn');
smo230605.setAttribute('id', 'smo230605');
smo230605.setFont('Merriweather', 12, 'normal');
smo230605.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230603.addModifier(smo230605);
smo230605.addClass('lyric lyric-1');
smo230621v0ar.push(smo230603);
smo230621v0.addTickables(smo230621v0ar)
fmtsmo2306218.joinVoices([smo230621v0]);
const fmtsmo2320138 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo232013v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232013v0ar = [];
const smo231997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo231997.setAttribute('id', 'smo231997');
smo231997.addModifier(new VF.Dot(), 0);
smo231997.addModifier(new VF.Dot(), 1);
smo232013v0ar.push(smo231997);
smo232013v0.addTickables(smo232013v0ar)
fmtsmo2320138.joinVoices([smo232013v0]);
const fmtsmo2331528 = new VF.Formatter();
//
// voices and notes for stave 2 8
const smo233152v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233152v0ar = [];
const smo233128 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo233128.setAttribute('id', 'smo233128');
smo233152v0ar.push(smo233128);
const smo233129 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo233129.setAttribute('id', 'smo233129');
smo233152v0ar.push(smo233129);
const smo233130 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo233130.setAttribute('id', 'smo233130');
smo233152v0ar.push(smo233130);
const smo233131 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo233131.setAttribute('id', 'smo233131');
smo233152v0ar.push(smo233131);
smo233152v0.addTickables(smo233152v0ar)
fmtsmo2331528.joinVoices([smo233152v0]);
const smo233152v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233152v1ar = [];
const smo233132 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["cn/4/r"]}'))
smo233132.setAttribute('id', 'smo233132');
smo233132.setStyle({ fillStyle: "#115511" });
smo233152v1ar.push(smo233132);
const smo233133 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo233133.setAttribute('id', 'smo233133');
smo233133.setStyle({ fillStyle: "#115511" });
smo233152v1ar.push(smo233133);
const smo233134 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo233134.setAttribute('id', 'smo233134');
smo233134.setStyle({ fillStyle: "#115511" });
smo233152v1ar.push(smo233134);
const smo233135 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo233135.setAttribute('id', 'smo233135');
smo233135.setStyle({ fillStyle: "#115511" });
smo233152v1ar.push(smo233135);
const smo233136 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo233136.setAttribute('id', 'smo233136');
smo233136.setStyle({ fillStyle: "#115511" });
smo233152v1ar.push(smo233136);
smo233152v1.addTickables(smo233152v1ar)
fmtsmo2331528.joinVoices([smo233152v1]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240215 = smo233134.getStemDirection();
smo233134.setStemDirection(dirsmo240215);
smo233135.setStemDirection(dirsmo240215);
smo233136.setStemDirection(dirsmo240215);
const smo240215 = new VF.Beam([smo233134,smo233135,smo233136]);
 
// formatting measures in staff group smo234202
fmtsmo2306218.format([smo230621v0,smo232013v0,smo233152v0,smo233152v1], 161);
const stavesmo230621 = new VF.Stave(372, 451, 175);
stavesmo230621.setAttribute('id', 'stavesmo230621');
stavesmo230621.setBegBarType(VF.Barline.type.NONE);
stavesmo230621.setContext(context);
stavesmo230621.draw();
smo230621v0.draw(context, stavesmo230621);
const stavesmo232013 = new VF.Stave(372, 566, 175);
stavesmo232013.setAttribute('id', 'stavesmo232013');
stavesmo232013.setBegBarType(VF.Barline.type.NONE);
stavesmo232013.setContext(context);
stavesmo232013.draw();
smo232013v0.draw(context, stavesmo232013);
const stavesmo233152 = new VF.Stave(372, 699, 175);
stavesmo233152.setAttribute('id', 'stavesmo233152');
stavesmo233152.setBegBarType(VF.Barline.type.NONE);
stavesmo233152.setContext(context);
stavesmo233152.draw();
smo233152v0.draw(context, stavesmo233152);
smo233152v1.draw(context, stavesmo233152);
smo240215.setContext(context);
smo240215.draw();
const fmtsmo2306519 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo230651v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230651v0ar = [];
const smo230622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo230622.setAttribute('id', 'smo230622');
smo230651v0ar.push(smo230622);
const smo230624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo230624.setAttribute('id', 'smo230624');
const smo230625 = new VF.Annotation('er');
smo230625.setAttribute('id', 'smo230625');
smo230625.setFont('Merriweather', 12, 'normal');
smo230625.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230624.addModifier(smo230625);
smo230625.addClass('lyric lyric-0');
const smo230626 = new VF.Annotation('er');
smo230626.setAttribute('id', 'smo230626');
smo230626.setFont('Merriweather', 12, 'normal');
smo230626.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230624.addModifier(smo230626);
smo230626.addClass('lyric lyric-1');
smo230651v0ar.push(smo230624);
const smo230627 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo230627.setAttribute('id', 'smo230627');
const smo230628 = new VF.Annotation('fährt');
smo230628.setAttribute('id', 'smo230628');
smo230628.setFont('Merriweather', 12, 'normal');
smo230628.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230627.addModifier(smo230628);
smo230628.addClass('lyric lyric-0');
const smo230629 = new VF.Annotation('traf');
smo230629.setAttribute('id', 'smo230629');
smo230629.setFont('Merriweather', 12, 'normal');
smo230629.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230627.addModifier(smo230629);
smo230629.addClass('lyric lyric-1');
smo230651v0ar.push(smo230627);
const smo230630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo230630.setAttribute('id', 'smo230630');
const smo230631 = new VF.Annotation('durch');
smo230631.setAttribute('id', 'smo230631');
smo230631.setFont('Merriweather', 12, 'normal');
smo230631.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230630.addModifier(smo230631);
smo230631.addClass('lyric lyric-0');
const smo230632 = new VF.Annotation('la');
smo230632.setAttribute('id', 'smo230632');
smo230632.setFont('Merriweather', 12, 'normal');
smo230632.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230630.addModifier(smo230632);
smo230632.addClass('lyric lyric-1');
smo230651v0ar.push(smo230630);
const smo230633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo230633.setAttribute('id', 'smo230633');
const smo230634 = new VF.Annotation('de');
smo230634.setAttribute('id', 'smo230634');
smo230634.setFont('Merriweather', 12, 'normal');
smo230634.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230633.addModifier(smo230634);
smo230634.addClass('lyric lyric-0');
const smo230635 = new VF.Annotation('den');
smo230635.setAttribute('id', 'smo230635');
smo230635.setFont('Merriweather', 12, 'normal');
smo230635.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230633.addModifier(smo230635);
smo230635.addClass('lyric lyric-1');
smo230651v0ar.push(smo230633);
smo230651v0.addTickables(smo230651v0ar)
fmtsmo2306519.joinVoices([smo230651v0]);
const fmtsmo2320309 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo232030v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232030v0ar = [];
const smo232014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo232014.setAttribute('id', 'smo232014');
smo232014.addModifier(new VF.Dot(), 0);
smo232014.addModifier(new VF.Dot(), 1);
smo232030v0ar.push(smo232014);
smo232030v0.addTickables(smo232030v0ar)
fmtsmo2320309.joinVoices([smo232030v0]);
const fmtsmo2331749 = new VF.Formatter();
//
// voices and notes for stave 2 9
const smo233174v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233174v0ar = [];
const smo233153 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233153.setAttribute('id', 'smo233153');
smo233174v0ar.push(smo233153);
const smo233154 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233154.setAttribute('id', 'smo233154');
smo233174v0ar.push(smo233154);
const smo233155 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233155.setAttribute('id', 'smo233155');
smo233174v0ar.push(smo233155);
const smo233156 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233156.setAttribute('id', 'smo233156');
smo233174v0ar.push(smo233156);
smo233174v0.addTickables(smo233174v0ar)
fmtsmo2331749.joinVoices([smo233174v0]);
const smo233174v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233174v1ar = [];
const smo233157 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo233157.setAttribute('id', 'smo233157');
smo233157.setStyle({ fillStyle: "#115511" });
smo233157.addModifier(new VF.Dot(), 0);
smo233174v1ar.push(smo233157);
const smo233158 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo233158.setAttribute('id', 'smo233158');
smo233158.setStyle({ fillStyle: '#aaaaaa7f' });
smo233158.addModifier(new VF.Dot(), 0);
smo233174v1ar.push(smo233158);
smo233174v1.addTickables(smo233174v1ar)
fmtsmo2331749.joinVoices([smo233174v1]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240218 = smo230627.getStemDirection();
smo230627.setStemDirection(dirsmo240218);
smo230630.setStemDirection(dirsmo240218);
smo230633.setStemDirection(dirsmo240218);
const smo240218 = new VF.Beam([smo230627,smo230630,smo230633]);
 
// formatting measures in staff group smo234202
fmtsmo2306519.format([smo230651v0,smo232030v0,smo233174v0,smo233174v1], 282);
const stavesmo230651 = new VF.Stave(547, 451, 296);
stavesmo230651.setAttribute('id', 'stavesmo230651');
stavesmo230651.setBegBarType(VF.Barline.type.NONE);
stavesmo230651.setContext(context);
stavesmo230651.draw();
smo230651v0.draw(context, stavesmo230651);
smo240218.setContext(context);
smo240218.draw();
const stavesmo232030 = new VF.Stave(547, 566, 296);
stavesmo232030.setAttribute('id', 'stavesmo232030');
stavesmo232030.setBegBarType(VF.Barline.type.NONE);
stavesmo232030.setContext(context);
stavesmo232030.draw();
smo232030v0.draw(context, stavesmo232030);
const stavesmo233174 = new VF.Stave(547, 699, 296);
stavesmo233174.setAttribute('id', 'stavesmo233174');
stavesmo233174.setBegBarType(VF.Barline.type.NONE);
stavesmo233174.setContext(context);
stavesmo233174.draw();
smo233174v0.draw(context, stavesmo233174);
smo233174v1.draw(context, stavesmo233174);
const fmtsmo23067310 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo230673v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230673v0ar = [];
const smo230652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo230652.setAttribute('id', 'smo230652');
smo230652.addModifier(new VF.Dot(), 0);
const smo230653 = new VF.Annotation('Fel');
smo230653.setAttribute('id', 'smo230653');
smo230653.setFont('Merriweather', 12, 'normal');
smo230653.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230652.addModifier(smo230653);
smo230653.addClass('lyric lyric-0 lyric-hyphen');
const smo230654 = new VF.Annotation('Städt');
smo230654.setAttribute('id', 'smo230654');
smo230654.setFont('Merriweather', 12, 'normal');
smo230654.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230652.addModifier(smo230654);
smo230654.addClass('lyric lyric-1 lyric-hyphen');
smo230673v0ar.push(smo230652);
const smo230655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo230655.setAttribute('id', 'smo230655');
smo230655.addModifier(new VF.Dot(), 0);
const smo230656 = new VF.Annotation('der');
smo230656.setAttribute('id', 'smo230656');
smo230656.setFont('Merriweather', 12, 'normal');
smo230656.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230655.addModifier(smo230656);
smo230656.addClass('lyric lyric-0');
const smo230657 = new VF.Annotation('chen');
smo230657.setAttribute('id', 'smo230657');
smo230657.setFont('Merriweather', 12, 'normal');
smo230657.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230655.addModifier(smo230657);
smo230657.addClass('lyric lyric-1');
smo230673v0ar.push(smo230655);
smo230673v0.addTickables(smo230673v0ar)
fmtsmo23067310.joinVoices([smo230673v0]);
const fmtsmo23204710 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo232047v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232047v0ar = [];
const smo232031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/3/n","f#/4/n"]}'))
smo232031.setAttribute('id', 'smo232031');
smo232031.addModifier(new VF.Dot(), 0);
smo232031.addModifier(new VF.Dot(), 1);
smo232047v0ar.push(smo232031);
smo232047v0.addTickables(smo232047v0ar)
fmtsmo23204710.joinVoices([smo232047v0]);
const fmtsmo23319410 = new VF.Formatter();
//
// voices and notes for stave 2 10
const smo233194v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233194v0ar = [];
const smo233175 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233175.setAttribute('id', 'smo233175');
smo233194v0ar.push(smo233175);
const smo233176 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233176.setAttribute('id', 'smo233176');
smo233194v0ar.push(smo233176);
const smo233177 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233177.setAttribute('id', 'smo233177');
smo233194v0ar.push(smo233177);
const smo233178 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233178.setAttribute('id', 'smo233178');
smo233194v0ar.push(smo233178);
smo233194v0.addTickables(smo233194v0ar)
fmtsmo23319410.joinVoices([smo233194v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23067310.format([smo230673v0,smo232047v0,smo233194v0], 174);
const stavesmo230673 = new VF.Stave(843, 451, 188);
stavesmo230673.setAttribute('id', 'stavesmo230673');
stavesmo230673.setBegBarType(VF.Barline.type.NONE);
stavesmo230673.setContext(context);
stavesmo230673.draw();
smo230673v0.draw(context, stavesmo230673);
const stavesmo232047 = new VF.Stave(843, 566, 188);
stavesmo232047.setAttribute('id', 'stavesmo232047');
stavesmo232047.setBegBarType(VF.Barline.type.NONE);
stavesmo232047.setContext(context);
stavesmo232047.draw();
smo232047v0.draw(context, stavesmo232047);
const stavesmo233194 = new VF.Stave(843, 699, 188);
stavesmo233194.setAttribute('id', 'stavesmo233194');
stavesmo233194.setBegBarType(VF.Barline.type.NONE);
stavesmo233194.setContext(context);
stavesmo233194.draw();
smo233194v0.draw(context, stavesmo233194);
const fmtsmo23069511 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo230695v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230695v0ar = [];
const smo230674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo230674.setAttribute('id', 'smo230674');
smo230674.addModifier(new VF.Dot(), 0);
const smo230675 = new VF.Annotation('Wäl');
smo230675.setAttribute('id', 'smo230675');
smo230675.setFont('Merriweather', 12, 'normal');
smo230675.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230674.addModifier(smo230675);
smo230675.addClass('lyric lyric-0 lyric-hyphen');
const smo230676 = new VF.Annotation('Mäd');
smo230676.setAttribute('id', 'smo230676');
smo230676.setFont('Merriweather', 12, 'normal');
smo230676.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230674.addModifier(smo230676);
smo230676.addClass('lyric lyric-1 lyric-hyphen');
smo230695v0ar.push(smo230674);
const smo230677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo230677.setAttribute('id', 'smo230677');
smo230677.addModifier(new VF.Dot(), 0);
const smo230678 = new VF.Annotation('der');
smo230678.setAttribute('id', 'smo230678');
smo230678.setFont('Merriweather', 12, 'normal');
smo230678.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230677.addModifier(smo230678);
smo230678.addClass('lyric lyric-0');
const smo230679 = new VF.Annotation('chen');
smo230679.setAttribute('id', 'smo230679');
smo230679.setFont('Merriweather', 12, 'normal');
smo230679.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230677.addModifier(smo230679);
smo230679.addClass('lyric lyric-1');
smo230695v0ar.push(smo230677);
smo230695v0.addTickables(smo230695v0ar)
fmtsmo23069511.joinVoices([smo230695v0]);
const fmtsmo23206411 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo232064v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232064v0ar = [];
const smo232048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/3/n","f#/4/n"]}'))
smo232048.setAttribute('id', 'smo232048');
smo232048.addModifier(new VF.Dot(), 0);
smo232048.addModifier(new VF.Dot(), 1);
smo232064v0ar.push(smo232048);
smo232064v0.addTickables(smo232064v0ar)
fmtsmo23206411.joinVoices([smo232064v0]);
const fmtsmo23321411 = new VF.Formatter();
//
// voices and notes for stave 2 11
const smo233214v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233214v0ar = [];
const smo233195 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233195.setAttribute('id', 'smo233195');
smo233214v0ar.push(smo233195);
const smo233196 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233196.setAttribute('id', 'smo233196');
smo233214v0ar.push(smo233196);
const smo233197 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233197.setAttribute('id', 'smo233197');
smo233214v0ar.push(smo233197);
const smo233198 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233198.setAttribute('id', 'smo233198');
smo233214v0ar.push(smo233198);
smo233214v0.addTickables(smo233214v0ar)
fmtsmo23321411.joinVoices([smo233214v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23069511.format([smo230695v0,smo232064v0,smo233214v0], 168);
const stavesmo230695 = new VF.Stave(1031, 451, 182);
stavesmo230695.setAttribute('id', 'stavesmo230695');
stavesmo230695.setBegBarType(VF.Barline.type.NONE);
stavesmo230695.setContext(context);
stavesmo230695.draw();
smo230695v0.draw(context, stavesmo230695);
const stavesmo232064 = new VF.Stave(1031, 566, 182);
stavesmo232064.setAttribute('id', 'stavesmo232064');
stavesmo232064.setBegBarType(VF.Barline.type.NONE);
stavesmo232064.setContext(context);
stavesmo232064.draw();
smo232064v0.draw(context, stavesmo232064);
const stavesmo233214 = new VF.Stave(1031, 699, 182);
stavesmo233214.setAttribute('id', 'stavesmo233214');
stavesmo233214.setBegBarType(VF.Barline.type.NONE);
stavesmo233214.setContext(context);
stavesmo233214.draw();
smo233214v0.draw(context, stavesmo233214);
const rightsmo234202stavesmo2306952 = new VF.StaveConnector(stavesmo230695, stavesmo233214).setType(0);
rightsmo234202stavesmo2306952.setContext(context).draw();
const fmtsmo23072312 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo230723v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230723v0ar = [];
const smo230696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo230696.setAttribute('id', 'smo230696');
const smo230697 = new VF.Annotation('ü');
smo230697.setAttribute('id', 'smo230697');
smo230697.setFont('Merriweather', 12, 'normal');
smo230697.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230696.addModifier(smo230697);
smo230697.addClass('lyric lyric-0 lyric-hyphen');
const smo230698 = new VF.Annotation('schö');
smo230698.setAttribute('id', 'smo230698');
smo230698.setFont('Merriweather', 12, 'normal');
smo230698.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230696.addModifier(smo230698);
smo230698.addClass('lyric lyric-1 lyric-hyphen');
smo230723v0ar.push(smo230696);
const smo230699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo230699.setAttribute('id', 'smo230699');
const smo230700 = new VF.Annotation('ber');
smo230700.setAttribute('id', 'smo230700');
smo230700.setFont('Merriweather', 12, 'normal');
smo230700.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230699.addModifier(smo230700);
smo230700.addClass('lyric lyric-0 lyric-hyphen');
const smo230701 = new VF.Annotation('new');
smo230701.setAttribute('id', 'smo230701');
smo230701.setFont('Merriweather', 12, 'normal');
smo230701.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230699.addModifier(smo230701);
smo230701.addClass('lyric lyric-1');
smo230723v0ar.push(smo230699);
const smo230702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo230702.setAttribute('id', 'smo230702');
const smo230703 = new VF.Annotation('das');
smo230703.setAttribute('id', 'smo230703');
smo230703.setFont('Merriweather', 12, 'normal');
smo230703.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230702.addModifier(smo230703);
smo230703.addClass('lyric lyric-0');
const smo230704 = new VF.Annotation('als');
smo230704.setAttribute('id', 'smo230704');
smo230704.setFont('Merriweather', 12, 'normal');
smo230704.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230702.addModifier(smo230704);
smo230704.addClass('lyric lyric-1');
smo230723v0ar.push(smo230702);
const smo230705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo230705.setAttribute('id', 'smo230705');
smo230705.addModifier(new VF.Dot(), 0);
const smo230706 = new VF.Annotation('Land;');
smo230706.setAttribute('id', 'smo230706');
smo230706.setFont('Merriweather', 12, 'normal');
smo230706.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230705.addModifier(smo230706);
smo230706.addClass('lyric lyric-0 lyric-hyphen');
const smo230707 = new VF.Annotation('ich');
smo230707.setAttribute('id', 'smo230707');
smo230707.setFont('Merriweather', 12, 'normal');
smo230707.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230705.addModifier(smo230707);
smo230707.addClass('lyric lyric-1');
smo230723v0ar.push(smo230705);
smo230723v0.addTickables(smo230723v0ar)
fmtsmo23072312.joinVoices([smo230723v0]);
const fmtsmo23208412 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo232084v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232084v0ar = [];
const smo232065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo232065.setAttribute('id', 'smo232065');
smo232065.addModifier(new VF.Dot(), 0);
smo232065.addModifier(new VF.Dot(), 1);
smo232084v0ar.push(smo232065);
const smo232066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n"]}'))
smo232066.setAttribute('id', 'smo232066');
smo232084v0ar.push(smo232066);
const smo232067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bn/4/n"]}'))
smo232067.setAttribute('id', 'smo232067');
smo232084v0ar.push(smo232067);
const smo232068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","cn/5/n"]}'))
smo232068.setAttribute('id', 'smo232068');
smo232084v0ar.push(smo232068);
smo232084v0.addTickables(smo232084v0ar)
fmtsmo23208412.joinVoices([smo232084v0]);
const fmtsmo23323412 = new VF.Formatter();
//
// voices and notes for stave 2 12
const smo233234v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233234v0ar = [];
const smo233215 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233215.setAttribute('id', 'smo233215');
smo233234v0ar.push(smo233215);
const smo233216 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233216.setAttribute('id', 'smo233216');
smo233234v0ar.push(smo233216);
const smo233217 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233217.setAttribute('id', 'smo233217');
smo233234v0ar.push(smo233217);
const smo233218 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233218.setAttribute('id', 'smo233218');
smo233234v0ar.push(smo233218);
smo233234v0.addTickables(smo233234v0ar)
fmtsmo23323412.joinVoices([smo233234v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240245 = smo230696.getStemDirection();
smo230696.setStemDirection(dirsmo240245);
smo230699.setStemDirection(dirsmo240245);
smo230702.setStemDirection(dirsmo240245);
const smo240245 = new VF.Beam([smo230696,smo230699,smo230702]);
const dirsmo240248 = smo232066.getStemDirection();
smo232066.setStemDirection(dirsmo240248);
smo232067.setStemDirection(dirsmo240248);
smo232068.setStemDirection(dirsmo240248);
const smo240248 = new VF.Beam([smo232066,smo232067,smo232068]);
 
// formatting measures in staff group smo234202
fmtsmo23072312.format([smo230723v0,smo232084v0,smo233234v0], 289);
const stavesmo230723 = new VF.Stave(66, 844, 363);
stavesmo230723.setAttribute('id', 'stavesmo230723');
stavesmo230723.setBegBarType(1);
stavesmo230723.addClef('treble');
const keysmo230723 = new VF.KeySignature('G');
keysmo230723.addToStave(stavesmo230723);
stavesmo230723.setContext(context);
stavesmo230723.draw();
smo230723v0.draw(context, stavesmo230723);
smo240245.setContext(context);
smo240245.draw();
const stavesmo232084 = new VF.Stave(66, 967, 363);
stavesmo232084.setAttribute('id', 'stavesmo232084');
stavesmo232084.setBegBarType(1);
stavesmo232084.addClef('treble');
const keysmo232084 = new VF.KeySignature('G');
keysmo232084.addToStave(stavesmo232084);
stavesmo232084.setContext(context);
stavesmo232084.draw();
smo232084v0.draw(context, stavesmo232084);
smo240248.setContext(context);
smo240248.draw();
const stavesmo233234 = new VF.Stave(66, 1057, 363);
stavesmo233234.setAttribute('id', 'stavesmo233234');
stavesmo233234.setBegBarType(1);
stavesmo233234.addClef('bass');
const keysmo233234 = new VF.KeySignature('G');
keysmo233234.addToStave(stavesmo233234);
stavesmo233234.setContext(context);
stavesmo233234.draw();
smo233234v0.draw(context, stavesmo233234);
const leftsmo234202stavesmo2307232 = new VF.StaveConnector(stavesmo230723, stavesmo233234).setType(1);
leftsmo234202stavesmo2307232.setContext(context).draw();
const fmtsmo23074613 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo230746v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230746v0ar = [];
const smo230724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo230724.setAttribute('id', 'smo230724');
const smo230726 = new VF.Annotation('-');
smo230726.setAttribute('id', 'smo230726');
smo230726.setFont('Merriweather', 12, 'normal');
smo230726.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230724.addModifier(smo230726);
smo230726.addClass('lyric lyric-1 lyric-hyphen');
smo230746v0ar.push(smo230724);
const smo230727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo230727.setAttribute('id', 'smo230727');
smo230746v0ar.push(smo230727);
const smo230728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo230728.setAttribute('id', 'smo230728');
smo230728.addModifier(new VF.Dot(), 0);
const smo230729 = new VF.Annotation('von');
smo230729.setAttribute('id', 'smo230729');
smo230729.setFont('Merriweather', 12, 'normal');
smo230729.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230728.addModifier(smo230729);
smo230729.addClass('lyric lyric-0');
const smo230730 = new VF.Annotation('Trotz');
smo230730.setAttribute('id', 'smo230730');
smo230730.setFont('Merriweather', 12, 'normal');
smo230730.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230728.addModifier(smo230730);
smo230730.addClass('lyric lyric-1 lyric-hyphen');
smo230746v0ar.push(smo230728);
smo230746v0.addTickables(smo230746v0ar)
fmtsmo23074613.joinVoices([smo230746v0]);
const fmtsmo23210113 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo232101v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232101v0ar = [];
const smo232085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo232085.setAttribute('id', 'smo232085');
smo232085.addModifier(new VF.Dot(), 0);
smo232085.addModifier(new VF.Dot(), 1);
smo232101v0ar.push(smo232085);
smo232101v0.addTickables(smo232101v0ar)
fmtsmo23210113.joinVoices([smo232101v0]);
const fmtsmo23325413 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo233254v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233254v0ar = [];
const smo233235 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233235.setAttribute('id', 'smo233235');
smo233254v0ar.push(smo233235);
const smo233236 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233236.setAttribute('id', 'smo233236');
smo233254v0ar.push(smo233236);
const smo233237 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233237.setAttribute('id', 'smo233237');
smo233254v0ar.push(smo233237);
const smo233238 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo233238.setAttribute('id', 'smo233238');
smo233254v0ar.push(smo233238);
smo233254v0.addTickables(smo233254v0ar)
fmtsmo23325413.joinVoices([smo233254v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23074613.format([smo230746v0,smo232101v0,smo233254v0], 147);
const stavesmo230746 = new VF.Stave(429, 844, 161);
stavesmo230746.setAttribute('id', 'stavesmo230746');
stavesmo230746.setBegBarType(VF.Barline.type.NONE);
stavesmo230746.setContext(context);
stavesmo230746.draw();
smo230746v0.draw(context, stavesmo230746);
const stavesmo232101 = new VF.Stave(429, 967, 161);
stavesmo232101.setAttribute('id', 'stavesmo232101');
stavesmo232101.setBegBarType(VF.Barline.type.NONE);
stavesmo232101.setContext(context);
stavesmo232101.draw();
smo232101v0.draw(context, stavesmo232101);
const stavesmo233254 = new VF.Stave(429, 1057, 161);
stavesmo233254.setAttribute('id', 'stavesmo233254');
stavesmo233254.setBegBarType(VF.Barline.type.NONE);
stavesmo233254.setContext(context);
stavesmo233254.draw();
smo233254v0.draw(context, stavesmo233254);
const fmtsmo23076514 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo230765v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230765v0ar = [];
const smo230747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo230747.setAttribute('id', 'smo230747');
smo230747.addModifier(new VF.Dot(), 0);
const smo230748 = new VF.Annotation('fern');
smo230748.setAttribute('id', 'smo230748');
smo230748.setFont('Merriweather', 12, 'normal');
smo230748.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230747.addModifier(smo230748);
smo230748.addClass('lyric lyric-0');
const smo230749 = new VF.Annotation('dem');
smo230749.setAttribute('id', 'smo230749');
smo230749.setFont('Merriweather', 12, 'normal');
smo230749.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230747.addModifier(smo230749);
smo230749.addClass('lyric lyric-1');
smo230765v0ar.push(smo230747);
smo230765v0.addTickables(smo230765v0ar)
fmtsmo23076514.joinVoices([smo230765v0]);
const fmtsmo23211814 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo232118v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232118v0ar = [];
const smo232102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/3/n","f#/4/n"]}'))
smo232102.setAttribute('id', 'smo232102');
smo232102.addModifier(new VF.Dot(), 0);
smo232102.addModifier(new VF.Dot(), 1);
smo232118v0ar.push(smo232102);
smo232118v0.addTickables(smo232118v0ar)
fmtsmo23211814.joinVoices([smo232118v0]);
const fmtsmo23327614 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo233276v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233276v0ar = [];
const smo233255 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo233255.setAttribute('id', 'smo233255');
smo233276v0ar.push(smo233255);
const smo233256 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo233256.setAttribute('id', 'smo233256');
smo233276v0ar.push(smo233256);
const smo233257 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo233257.setAttribute('id', 'smo233257');
smo233276v0ar.push(smo233257);
const smo233258 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo233258.setAttribute('id', 'smo233258');
smo233276v0ar.push(smo233258);
smo233276v0.addTickables(smo233276v0ar)
fmtsmo23327614.joinVoices([smo233276v0]);
const smo233276v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233276v1ar = [];
const smo233259 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["dn/4/r"]}'))
smo233259.setAttribute('id', 'smo233259');
smo233259.setStyle({ fillStyle: "#115511" });
smo233259.addModifier(new VF.Dot(), 0);
smo233276v1ar.push(smo233259);
const smo233260 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo233260.setAttribute('id', 'smo233260');
smo233260.setStyle({ fillStyle: "#115511" });
smo233260.addModifier(new VF.Dot(), 0);
smo233276v1ar.push(smo233260);
smo233276v1.addTickables(smo233276v1ar)
fmtsmo23327614.joinVoices([smo233276v1]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23076514.format([smo230765v0,smo232118v0,smo233276v0,smo233276v1], 144);
const stavesmo230765 = new VF.Stave(590, 844, 158);
stavesmo230765.setAttribute('id', 'stavesmo230765');
stavesmo230765.setBegBarType(VF.Barline.type.NONE);
stavesmo230765.setContext(context);
stavesmo230765.draw();
smo230765v0.draw(context, stavesmo230765);
const stavesmo232118 = new VF.Stave(590, 967, 158);
stavesmo232118.setAttribute('id', 'stavesmo232118');
stavesmo232118.setBegBarType(VF.Barline.type.NONE);
stavesmo232118.setContext(context);
stavesmo232118.draw();
smo232118v0.draw(context, stavesmo232118);
const stavesmo233276 = new VF.Stave(590, 1057, 158);
stavesmo233276.setAttribute('id', 'stavesmo233276');
stavesmo233276.setBegBarType(VF.Barline.type.NONE);
stavesmo233276.setContext(context);
stavesmo233276.draw();
smo233276v0.draw(context, stavesmo233276);
smo233276v1.draw(context, stavesmo233276);
const fmtsmo23079515 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo230795v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230795v0ar = [];
const smo230766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo230766.setAttribute('id', 'smo230766');
const smo230767 = new VF.Annotation('-');
smo230767.setAttribute('id', 'smo230767');
smo230767.setFont('Merriweather', 12, 'normal');
smo230767.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230766.addModifier(smo230767);
smo230767.addClass('lyric lyric-0 lyric-hyphen');
smo230795v0ar.push(smo230766);
const smo230768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo230768.setAttribute('id', 'smo230768');
const smo230769 = new VF.Annotation('er');
smo230769.setAttribute('id', 'smo230769');
smo230769.setFont('Merriweather', 12, 'normal');
smo230769.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230768.addModifier(smo230769);
smo230769.addClass('lyric lyric-0 lyric-hyphen');
const smo230770 = new VF.Annotation('tat');
smo230770.setAttribute('id', 'smo230770');
smo230770.setFont('Merriweather', 12, 'normal');
smo230770.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230768.addModifier(smo230770);
smo230770.addClass('lyric lyric-1');
smo230795v0ar.push(smo230768);
const smo230771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo230771.setAttribute('id', 'smo230771');
const smo230772 = new VF.Annotation('kenn');
smo230772.setAttribute('id', 'smo230772');
smo230772.setFont('Merriweather', 12, 'normal');
smo230772.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230771.addModifier(smo230772);
smo230772.addClass('lyric lyric-0');
const smo230773 = new VF.Annotation('er');
smo230773.setAttribute('id', 'smo230773');
smo230773.setFont('Merriweather', 12, 'normal');
smo230773.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230771.addModifier(smo230773);
smo230773.addClass('lyric lyric-1');
smo230795v0ar.push(smo230771);
const smo230774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo230774.setAttribute('id', 'smo230774');
const smo230775 = new VF.Annotation('ich');
smo230775.setAttribute('id', 'smo230775');
smo230775.setFont('Merriweather', 12, 'normal');
smo230775.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230774.addModifier(smo230775);
smo230775.addClass('lyric lyric-0');
const smo230776 = new VF.Annotation('mir');
smo230776.setAttribute('id', 'smo230776');
smo230776.setFont('Merriweather', 12, 'normal');
smo230776.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230774.addModifier(smo230776);
smo230776.addClass('lyric lyric-1');
smo230795v0ar.push(smo230774);
const smo230777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo230777.setAttribute('id', 'smo230777');
const smo230778 = new VF.Annotation('ihn');
smo230778.setAttribute('id', 'smo230778');
smo230778.setFont('Merriweather', 12, 'normal');
smo230778.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230777.addModifier(smo230778);
smo230778.addClass('lyric lyric-0');
const smo230779 = new VF.Annotation('ge');
smo230779.setAttribute('id', 'smo230779');
smo230779.setFont('Merriweather', 12, 'normal');
smo230779.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230777.addModifier(smo230779);
smo230779.addClass('lyric lyric-1 lyric-hyphen');
smo230795v0ar.push(smo230777);
smo230795v0.addTickables(smo230795v0ar)
fmtsmo23079515.joinVoices([smo230795v0]);
const fmtsmo23213515 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo232135v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232135v0ar = [];
const smo232119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/3/n","f#/4/n"]}'))
smo232119.setAttribute('id', 'smo232119');
smo232119.addModifier(new VF.Dot(), 0);
smo232119.addModifier(new VF.Dot(), 1);
smo232135v0ar.push(smo232119);
smo232135v0.addTickables(smo232135v0ar)
fmtsmo23213515.joinVoices([smo232135v0]);
const fmtsmo23329815 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo233298v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233298v0ar = [];
const smo233277 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo233277.setAttribute('id', 'smo233277');
smo233298v0ar.push(smo233277);
const smo233278 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo233278.setAttribute('id', 'smo233278');
smo233298v0ar.push(smo233278);
const smo233279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo233279.setAttribute('id', 'smo233279');
smo233298v0ar.push(smo233279);
const smo233280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo233280.setAttribute('id', 'smo233280');
smo233298v0ar.push(smo233280);
smo233298v0.addTickables(smo233298v0ar)
fmtsmo23329815.joinVoices([smo233298v0]);
const smo233298v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233298v1ar = [];
const smo233281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo233281.setAttribute('id', 'smo233281');
smo233281.setStyle({ fillStyle: "#115511" });
smo233281.addModifier(new VF.Dot(), 0);
smo233298v1ar.push(smo233281);
const smo233282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo233282.setAttribute('id', 'smo233282');
smo233282.setStyle({ fillStyle: "#115511" });
smo233282.addModifier(new VF.Dot(), 0);
smo233298v1ar.push(smo233282);
smo233298v1.addTickables(smo233298v1ar)
fmtsmo23329815.joinVoices([smo233298v1]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240265 = smo230771.getStemDirection();
smo230771.setStemDirection(dirsmo240265);
smo230774.setStemDirection(dirsmo240265);
smo230777.setStemDirection(dirsmo240265);
const smo240265 = new VF.Beam([smo230771,smo230774,smo230777]);
 
// formatting measures in staff group smo234202
fmtsmo23079515.format([smo230795v0,smo232135v0,smo233298v0,smo233298v1], 265);
const stavesmo230795 = new VF.Stave(748, 844, 279);
stavesmo230795.setAttribute('id', 'stavesmo230795');
stavesmo230795.setBegBarType(VF.Barline.type.NONE);
stavesmo230795.setContext(context);
stavesmo230795.draw();
smo230795v0.draw(context, stavesmo230795);
smo240265.setContext(context);
smo240265.draw();
const stavesmo232135 = new VF.Stave(748, 967, 279);
stavesmo232135.setAttribute('id', 'stavesmo232135');
stavesmo232135.setBegBarType(VF.Barline.type.NONE);
stavesmo232135.setContext(context);
stavesmo232135.draw();
smo232135v0.draw(context, stavesmo232135);
const stavesmo233298 = new VF.Stave(748, 1057, 279);
stavesmo233298.setAttribute('id', 'stavesmo233298');
stavesmo233298.setBegBarType(VF.Barline.type.NONE);
stavesmo233298.setContext(context);
stavesmo233298.draw();
smo233298v0.draw(context, stavesmo233298);
smo233298v1.draw(context, stavesmo233298);
const fmtsmo23081416 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo230814v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230814v0ar = [];
const smo230796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo230796.setAttribute('id', 'smo230796');
smo230796.addModifier(new VF.Dot(), 0);
const smo230797 = new VF.Annotation('schen');
smo230797.setAttribute('id', 'smo230797');
smo230797.setFont('Merriweather', 12, 'normal');
smo230797.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230796.addModifier(smo230797);
smo230797.addClass('lyric lyric-0');
const smo230798 = new VF.Annotation('stehn');
smo230798.setAttribute('id', 'smo230798');
smo230798.setFont('Merriweather', 12, 'normal');
smo230798.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230796.addModifier(smo230798);
smo230798.addClass('lyric lyric-1');
smo230814v0ar.push(smo230796);
smo230814v0.addTickables(smo230814v0ar)
fmtsmo23081416.joinVoices([smo230814v0]);
const fmtsmo23215216 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo232152v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232152v0ar = [];
const smo232136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo232136.setAttribute('id', 'smo232136');
smo232136.addModifier(new VF.Dot(), 0);
smo232136.addModifier(new VF.Dot(), 1);
smo232152v0ar.push(smo232136);
smo232152v0.addTickables(smo232152v0ar)
fmtsmo23215216.joinVoices([smo232152v0]);
const fmtsmo23332316 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo233323v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233323v0ar = [];
const smo233299 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo233299.setAttribute('id', 'smo233299');
smo233323v0ar.push(smo233299);
const smo233300 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo233300.setAttribute('id', 'smo233300');
smo233323v0ar.push(smo233300);
const smo233301 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo233301.setAttribute('id', 'smo233301');
smo233323v0ar.push(smo233301);
const smo233302 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo233302.setAttribute('id', 'smo233302');
smo233323v0ar.push(smo233302);
smo233323v0.addTickables(smo233323v0ar)
fmtsmo23332316.joinVoices([smo233323v0]);
const smo233323v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233323v1ar = [];
const smo233303 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["eb/4/r"]}'))
smo233303.setAttribute('id', 'smo233303');
smo233303.setStyle({ fillStyle: "#115511" });
smo233323v1ar.push(smo233303);
const smo233304 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo233304.setAttribute('id', 'smo233304');
smo233304.setStyle({ fillStyle: "#115511" });
smo233323v1ar.push(smo233304);
const smo233305 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo233305.setAttribute('id', 'smo233305');
smo233305.setStyle({ fillStyle: "#115511" });
smo233323v1ar.push(smo233305);
const smo233306 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo233306.setAttribute('id', 'smo233306');
smo233306.setStyle({ fillStyle: "#115511" });
smo233323v1ar.push(smo233306);
const smo233307 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo233307.setAttribute('id', 'smo233307');
smo233307.setStyle({ fillStyle: "#115511" });
smo233323v1ar.push(smo233307);
smo233323v1.addTickables(smo233323v1ar)
fmtsmo23332316.joinVoices([smo233323v1]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240276 = smo233305.getStemDirection();
smo233305.setStemDirection(dirsmo240276);
smo233306.setStemDirection(dirsmo240276);
smo233307.setStemDirection(dirsmo240276);
const smo240276 = new VF.Beam([smo233305,smo233306,smo233307]);
 
// formatting measures in staff group smo234202
fmtsmo23081416.format([smo230814v0,smo232152v0,smo233323v0,smo233323v1], 170);
const stavesmo230814 = new VF.Stave(1027, 844, 184);
stavesmo230814.setAttribute('id', 'stavesmo230814');
stavesmo230814.setBegBarType(VF.Barline.type.NONE);
stavesmo230814.setContext(context);
stavesmo230814.draw();
smo230814v0.draw(context, stavesmo230814);
const stavesmo232152 = new VF.Stave(1027, 967, 184);
stavesmo232152.setAttribute('id', 'stavesmo232152');
stavesmo232152.setBegBarType(VF.Barline.type.NONE);
stavesmo232152.setContext(context);
stavesmo232152.draw();
smo232152v0.draw(context, stavesmo232152);
const stavesmo233323 = new VF.Stave(1027, 1057, 184);
stavesmo233323.setAttribute('id', 'stavesmo233323');
stavesmo233323.setBegBarType(VF.Barline.type.NONE);
stavesmo233323.setContext(context);
stavesmo233323.draw();
smo233323v0.draw(context, stavesmo233323);
smo233323v1.draw(context, stavesmo233323);
smo240276.setContext(context);
smo240276.draw();
const rightsmo234202stavesmo2308142 = new VF.StaveConnector(stavesmo230814, stavesmo233323).setType(0);
rightsmo234202stavesmo2308142.setContext(context).draw();
const fmtsmo23084417 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo230844v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230844v0ar = [];
const smo230815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo230815.setAttribute('id', 'smo230815');
const smo230816 = new VF.Annotation('-');
smo230816.setAttribute('id', 'smo230816');
smo230816.setFont('Merriweather', 12, 'normal');
smo230816.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230815.addModifier(smo230816);
smo230816.addClass('lyric lyric-0 lyric-hyphen');
smo230844v0ar.push(smo230815);
const smo230817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo230817.setAttribute('id', 'smo230817');
const smo230818 = new VF.Annotation('den');
smo230818.setAttribute('id', 'smo230818');
smo230818.setFont('Merriweather', 12, 'normal');
smo230818.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230817.addModifier(smo230818);
smo230818.addClass('lyric lyric-0');
const smo230819 = new VF.Annotation('er');
smo230819.setAttribute('id', 'smo230819');
smo230819.setFont('Merriweather', 12, 'normal');
smo230819.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230817.addModifier(smo230819);
smo230819.addClass('lyric lyric-1');
smo230844v0ar.push(smo230817);
const smo230820 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo230820.setAttribute('id', 'smo230820');
const smo230821 = new VF.Annotation('all\'');
smo230821.setAttribute('id', 'smo230821');
smo230821.setFont('Merriweather', 12, 'normal');
smo230821.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230820.addModifier(smo230821);
smo230821.addClass('lyric lyric-0');
const smo230822 = new VF.Annotation('splet');
smo230822.setAttribute('id', 'smo230822');
smo230822.setFont('Merriweather', 12, 'normal');
smo230822.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230820.addModifier(smo230822);
smo230822.addClass('lyric lyric-1');
smo230844v0ar.push(smo230820);
const smo230823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo230823.setAttribute('id', 'smo230823');
const smo230824 = new VF.Annotation('sei');
smo230824.setAttribute('id', 'smo230824');
smo230824.setFont('Merriweather', 12, 'normal');
smo230824.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230823.addModifier(smo230824);
smo230824.addClass('lyric lyric-0 lyric-hyphen');
const smo230825 = new VF.Annotation('sei');
smo230825.setAttribute('id', 'smo230825');
smo230825.setFont('Merriweather', 12, 'normal');
smo230825.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230823.addModifier(smo230825);
smo230825.addClass('lyric lyric-1 lyric-hyphen');
smo230844v0ar.push(smo230823);
const smo230826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo230826.setAttribute('id', 'smo230826');
const smo230827 = new VF.Annotation('ne');
smo230827.setAttribute('id', 'smo230827');
smo230827.setFont('Merriweather', 12, 'normal');
smo230827.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230826.addModifier(smo230827);
smo230827.addClass('lyric lyric-0');
const smo230828 = new VF.Annotation('ne');
smo230828.setAttribute('id', 'smo230828');
smo230828.setFont('Merriweather', 12, 'normal');
smo230828.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230826.addModifier(smo230828);
smo230828.addClass('lyric lyric-1');
smo230844v0ar.push(smo230826);
smo230844v0.addTickables(smo230844v0ar)
fmtsmo23084417.joinVoices([smo230844v0]);
const fmtsmo23217117 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo232171v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232171v0ar = [];
const smo232153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo232153.setAttribute('id', 'smo232153');
smo232153.addModifier(new VF.Dot(), 0);
smo232171v0ar.push(smo232153);
const smo232154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo232154.setAttribute('id', 'smo232154');
smo232171v0ar.push(smo232154);
const smo232155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo232155.setAttribute('id', 'smo232155');
smo232171v0ar.push(smo232155);
smo232171v0.addTickables(smo232171v0ar)
fmtsmo23217117.joinVoices([smo232171v0]);
const fmtsmo23334417 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo233344v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233344v0ar = [];
const smo233324 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo233324.setAttribute('id', 'smo233324');
smo233344v0ar.push(smo233324);
const smo233325 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo233325.setAttribute('id', 'smo233325');
smo233344v0ar.push(smo233325);
const smo233326 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo233326.setAttribute('id', 'smo233326');
smo233344v0ar.push(smo233326);
const smo233327 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo233327.setAttribute('id', 'smo233327');
smo233344v0ar.push(smo233327);
smo233344v0.addTickables(smo233344v0ar)
fmtsmo23334417.joinVoices([smo233344v0]);
const smo233344v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233344v1ar = [];
const smo233328 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo233328.setAttribute('id', 'smo233328');
smo233328.setStyle({ fillStyle: "#115511" });
smo233328.addModifier(new VF.Dot(), 0);
smo233344v1ar.push(smo233328);
smo233344v1.addTickables(smo233344v1ar)
fmtsmo23334417.joinVoices([smo233344v1]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240286 = smo230820.getStemDirection();
smo230820.setStemDirection(dirsmo240286);
smo230823.setStemDirection(dirsmo240286);
smo230826.setStemDirection(dirsmo240286);
const smo240286 = new VF.Beam([smo230820,smo230823,smo230826]);
 
// formatting measures in staff group smo234202
fmtsmo23084417.format([smo230844v0,smo232171v0,smo233344v0,smo233344v1], 245);
const stavesmo230844 = new VF.Stave(66, 1197, 319);
stavesmo230844.setAttribute('id', 'stavesmo230844');
stavesmo230844.setBegBarType(1);
stavesmo230844.addClef('treble');
const keysmo230844 = new VF.KeySignature('G');
keysmo230844.addToStave(stavesmo230844);
stavesmo230844.setContext(context);
stavesmo230844.draw();
smo230844v0.draw(context, stavesmo230844);
smo240286.setContext(context);
smo240286.draw();
const stavesmo232171 = new VF.Stave(66, 1309, 319);
stavesmo232171.setAttribute('id', 'stavesmo232171');
stavesmo232171.setBegBarType(1);
stavesmo232171.addClef('treble');
const keysmo232171 = new VF.KeySignature('G');
keysmo232171.addToStave(stavesmo232171);
stavesmo232171.setContext(context);
stavesmo232171.draw();
smo232171v0.draw(context, stavesmo232171);
const stavesmo233344 = new VF.Stave(66, 1449, 319);
stavesmo233344.setAttribute('id', 'stavesmo233344');
stavesmo233344.setBegBarType(1);
stavesmo233344.addClef('bass');
const keysmo233344 = new VF.KeySignature('G');
keysmo233344.addToStave(stavesmo233344);
stavesmo233344.setContext(context);
stavesmo233344.draw();
smo233344v0.draw(context, stavesmo233344);
smo233344v1.draw(context, stavesmo233344);
const leftsmo234202stavesmo2308442 = new VF.StaveConnector(stavesmo230844, stavesmo233344).setType(1);
leftsmo234202stavesmo2308442.setContext(context).draw();
const fmtsmo23086618 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo230866v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230866v0ar = [];
const smo230845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo230845.setAttribute('id', 'smo230845');
smo230845.addModifier(new VF.Dot(), 0);
const smo230846 = new VF.Annotation('Lie');
smo230846.setAttribute('id', 'smo230846');
smo230846.setFont('Merriweather', 12, 'normal');
smo230846.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230845.addModifier(smo230846);
smo230846.addClass('lyric lyric-0 lyric-hyphen');
const smo230847 = new VF.Annotation('Lie');
smo230847.setAttribute('id', 'smo230847');
smo230847.setFont('Merriweather', 12, 'normal');
smo230847.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230845.addModifier(smo230847);
smo230847.addClass('lyric lyric-1 lyric-hyphen');
smo230866v0ar.push(smo230845);
const smo230848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo230848.setAttribute('id', 'smo230848');
smo230848.addModifier(new VF.Dot(), 0);
const smo230849 = new VF.Annotation('der');
smo230849.setAttribute('id', 'smo230849');
smo230849.setFont('Merriweather', 12, 'normal');
smo230849.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230848.addModifier(smo230849);
smo230849.addClass('lyric lyric-0');
const smo230850 = new VF.Annotation('der');
smo230850.setAttribute('id', 'smo230850');
smo230850.setFont('Merriweather', 12, 'normal');
smo230850.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230848.addModifier(smo230850);
smo230850.addClass('lyric lyric-1');
smo230866v0ar.push(smo230848);
smo230866v0.addTickables(smo230866v0ar)
fmtsmo23086618.joinVoices([smo230866v0]);
const fmtsmo23218918 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo232189v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232189v0ar = [];
const smo232172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo232172.setAttribute('id', 'smo232172');
smo232172.addModifier(new VF.Dot(), 0);
smo232189v0ar.push(smo232172);
const smo232173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n","f#/4/n"]}'))
smo232173.setAttribute('id', 'smo232173');
smo232173.addModifier(new VF.Dot(), 0);
smo232173.addModifier(new VF.Dot(), 1);
smo232189v0ar.push(smo232173);
smo232189v0.addTickables(smo232189v0ar)
fmtsmo23218918.joinVoices([smo232189v0]);
const fmtsmo23336418 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo233364v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233364v0ar = [];
const smo233345 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo233345.setAttribute('id', 'smo233345');
smo233364v0ar.push(smo233345);
const smo233346 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo233346.setAttribute('id', 'smo233346');
smo233364v0ar.push(smo233346);
const smo233347 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo233347.setAttribute('id', 'smo233347');
smo233364v0ar.push(smo233347);
const smo233348 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo233348.setAttribute('id', 'smo233348');
smo233364v0ar.push(smo233348);
smo233364v0.addTickables(smo233364v0ar)
fmtsmo23336418.joinVoices([smo233364v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
 
// formatting measures in staff group smo234202
fmtsmo23086618.format([smo230866v0,smo232189v0,smo233364v0], 130);
const stavesmo230866 = new VF.Stave(385, 1197, 144);
stavesmo230866.setAttribute('id', 'stavesmo230866');
stavesmo230866.setBegBarType(VF.Barline.type.NONE);
stavesmo230866.setContext(context);
stavesmo230866.draw();
smo230866v0.draw(context, stavesmo230866);
const stavesmo232189 = new VF.Stave(385, 1309, 144);
stavesmo232189.setAttribute('id', 'stavesmo232189');
stavesmo232189.setBegBarType(VF.Barline.type.NONE);
stavesmo232189.setContext(context);
stavesmo232189.draw();
smo232189v0.draw(context, stavesmo232189);
const stavesmo233364 = new VF.Stave(385, 1449, 144);
stavesmo233364.setAttribute('id', 'stavesmo233364');
stavesmo233364.setBegBarType(VF.Barline.type.NONE);
stavesmo233364.setContext(context);
stavesmo233364.draw();
smo233364v0.draw(context, stavesmo233364);
const fmtsmo23089619 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo230896v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230896v0ar = [];
const smo230867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo230867.setAttribute('id', 'smo230867');
const smo230868 = new VF.Annotation('-');
smo230868.setAttribute('id', 'smo230868');
smo230868.setFont('Merriweather', 12, 'normal');
smo230868.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230867.addModifier(smo230868);
smo230868.addClass('lyric lyric-0 lyric-hyphen');
smo230896v0ar.push(smo230867);
const smo230869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo230869.setAttribute('id', 'smo230869');
const smo230870 = new VF.Annotation('sie');
smo230870.setAttribute('id', 'smo230870');
smo230870.setFont('Merriweather', 12, 'normal');
smo230870.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230869.addModifier(smo230870);
smo230870.addClass('lyric lyric-0');
const smo230871 = new VF.Annotation('doch');
smo230871.setAttribute('id', 'smo230871');
smo230871.setFont('Merriweather', 12, 'normal');
smo230871.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230869.addModifier(smo230871);
smo230871.addClass('lyric lyric-1');
smo230896v0ar.push(smo230869);
const smo230872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo230872.setAttribute('id', 'smo230872');
const smo230873 = new VF.Annotation('sind');
smo230873.setAttribute('id', 'smo230873');
smo230873.setFont('Merriweather', 12, 'normal');
smo230873.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230872.addModifier(smo230873);
smo230873.addClass('lyric lyric-0');
const smo230874 = new VF.Annotation('im');
smo230874.setAttribute('id', 'smo230874');
smo230874.setFont('Merriweather', 12, 'normal');
smo230874.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230872.addModifier(smo230874);
smo230874.addClass('lyric lyric-1 lyric-hyphen');
smo230896v0ar.push(smo230872);
const smo230875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo230875.setAttribute('id', 'smo230875');
const smo230876 = new VF.Annotation('ir');
smo230876.setAttribute('id', 'smo230876');
smo230876.setFont('Merriweather', 12, 'normal');
smo230876.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230875.addModifier(smo230876);
smo230876.addClass('lyric lyric-0');
const smo230877 = new VF.Annotation('mer');
smo230877.setAttribute('id', 'smo230877');
smo230877.setFont('Merriweather', 12, 'normal');
smo230877.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230875.addModifier(smo230877);
smo230877.addClass('lyric lyric-1');
smo230896v0ar.push(smo230875);
const smo230878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo230878.setAttribute('id', 'smo230878');
const smo230879 = new VF.Annotation('e');
smo230879.setAttribute('id', 'smo230879');
smo230879.setFont('Merriweather', 12, 'normal');
smo230879.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230878.addModifier(smo230879);
smo230879.addClass('lyric lyric-0 lyric-hyphen');
const smo230880 = new VF.Annotation('für');
smo230880.setAttribute('id', 'smo230880');
smo230880.setFont('Merriweather', 12, 'normal');
smo230880.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230878.addModifier(smo230880);
smo230880.addClass('lyric lyric-1');
smo230896v0ar.push(smo230878);
smo230896v0.addTickables(smo230896v0ar)
fmtsmo23089619.joinVoices([smo230896v0]);
const fmtsmo23220719 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo232207v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232207v0ar = [];
const smo232190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo232190.setAttribute('id', 'smo232190');
smo232190.addModifier(new VF.Dot(), 0);
smo232207v0ar.push(smo232190);
const smo232191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n","f#/4/n"]}'))
smo232191.setAttribute('id', 'smo232191');
smo232191.addModifier(new VF.Dot(), 0);
smo232191.addModifier(new VF.Dot(), 1);
smo232207v0ar.push(smo232191);
smo232207v0.addTickables(smo232207v0ar)
fmtsmo23220719.joinVoices([smo232207v0]);
const fmtsmo23338319 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo233383v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233383v0ar = [];
const smo233365 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo233365.setAttribute('id', 'smo233365');
smo233383v0ar.push(smo233365);
const smo233366 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo233366.setAttribute('id', 'smo233366');
smo233366.addModifier(new VF.Dot(), 0);
smo233383v0ar.push(smo233366);
const smo233367 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo233367.setAttribute('id', 'smo233367');
smo233383v0ar.push(smo233367);
smo233383v0.addTickables(smo233383v0ar)
fmtsmo23338319.joinVoices([smo233383v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240299 = smo230872.getStemDirection();
smo230872.setStemDirection(dirsmo240299);
smo230875.setStemDirection(dirsmo240299);
smo230878.setStemDirection(dirsmo240299);
const smo240299 = new VF.Beam([smo230872,smo230875,smo230878]);
 
// formatting measures in staff group smo234202
fmtsmo23089619.format([smo230896v0,smo232207v0,smo233383v0], 272);
const stavesmo230896 = new VF.Stave(529, 1197, 286);
stavesmo230896.setAttribute('id', 'stavesmo230896');
stavesmo230896.setBegBarType(VF.Barline.type.NONE);
stavesmo230896.setContext(context);
stavesmo230896.draw();
smo230896v0.draw(context, stavesmo230896);
smo240299.setContext(context);
smo240299.draw();
const stavesmo232207 = new VF.Stave(529, 1309, 286);
stavesmo232207.setAttribute('id', 'stavesmo232207');
stavesmo232207.setBegBarType(VF.Barline.type.NONE);
stavesmo232207.setContext(context);
stavesmo232207.draw();
smo232207v0.draw(context, stavesmo232207);
const stavesmo233383 = new VF.Stave(529, 1449, 286);
stavesmo233383.setAttribute('id', 'stavesmo233383');
stavesmo233383.setBegBarType(VF.Barline.type.NONE);
stavesmo233383.setContext(context);
stavesmo233383.draw();
smo233383v0.draw(context, stavesmo233383);
const fmtsmo23091520 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo230915v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230915v0ar = [];
const smo230897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo230897.setAttribute('id', 'smo230897');
smo230897.addModifier(new VF.Dot(), 0);
const smo230898 = new VF.Annotation('kannt');
smo230898.setAttribute('id', 'smo230898');
smo230898.setFont('Merriweather', 12, 'normal');
smo230898.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230897.addModifier(smo230898);
smo230898.addClass('lyric lyric-0');
const smo230899 = new VF.Annotation('mich');
smo230899.setAttribute('id', 'smo230899');
smo230899.setFont('Merriweather', 12, 'normal');
smo230899.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230897.addModifier(smo230899);
smo230899.addClass('lyric lyric-1');
smo230915v0ar.push(smo230897);
smo230915v0.addTickables(smo230915v0ar)
fmtsmo23091520.joinVoices([smo230915v0]);
const fmtsmo23222820 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo232228v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232228v0ar = [];
const smo232208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo232208.setAttribute('id', 'smo232208');
smo232228v0ar.push(smo232208);
const smo232209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo232209.setAttribute('id', 'smo232209');
smo232228v0ar.push(smo232209);
const smo232210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo232210.setAttribute('id', 'smo232210');
smo232228v0ar.push(smo232210);
const smo232211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo232211.setAttribute('id', 'smo232211');
smo232228v0ar.push(smo232211);
const smo232212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo232212.setAttribute('id', 'smo232212');
smo232228v0ar.push(smo232212);
smo232228v0.addTickables(smo232228v0ar)
fmtsmo23222820.joinVoices([smo232228v0]);
const fmtsmo23340320 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo233403v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233403v0ar = [];
const smo233384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo233384.setAttribute('id', 'smo233384');
smo233403v0ar.push(smo233384);
const smo233385 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo233385.setAttribute('id', 'smo233385');
smo233403v0ar.push(smo233385);
const smo233386 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo233386.setAttribute('id', 'smo233386');
smo233403v0ar.push(smo233386);
const smo233387 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo233387.setAttribute('id', 'smo233387');
smo233387.addModifier(new VF.Dot(), 0);
smo233403v0ar.push(smo233387);
smo233403v0.addTickables(smo233403v0ar)
fmtsmo23340320.joinVoices([smo233403v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240308 = smo232210.getStemDirection();
smo232210.setStemDirection(dirsmo240308);
smo232211.setStemDirection(dirsmo240308);
smo232212.setStemDirection(dirsmo240308);
const smo240308 = new VF.Beam([smo232210,smo232211,smo232212]);
const dirsmo240311 = smo233384.getStemDirection();
smo233384.setStemDirection(dirsmo240311);
smo233385.setStemDirection(dirsmo240311);
smo233386.setStemDirection(dirsmo240311);
const smo240311 = new VF.Beam([smo233384,smo233385,smo233386]);
 
// formatting measures in staff group smo234202
fmtsmo23091520.format([smo230915v0,smo232228v0,smo233403v0], 205);
const stavesmo230915 = new VF.Stave(815, 1197, 219);
stavesmo230915.setAttribute('id', 'stavesmo230915');
stavesmo230915.setBegBarType(VF.Barline.type.NONE);
stavesmo230915.setContext(context);
stavesmo230915.draw();
smo230915v0.draw(context, stavesmo230915);
const stavesmo232228 = new VF.Stave(815, 1309, 219);
stavesmo232228.setAttribute('id', 'stavesmo232228');
stavesmo232228.setBegBarType(VF.Barline.type.NONE);
stavesmo232228.setContext(context);
stavesmo232228.draw();
smo232228v0.draw(context, stavesmo232228);
smo240308.setContext(context);
smo240308.draw();
const stavesmo233403 = new VF.Stave(815, 1449, 219);
stavesmo233403.setAttribute('id', 'stavesmo233403');
stavesmo233403.setBegBarType(VF.Barline.type.NONE);
stavesmo233403.setContext(context);
stavesmo233403.draw();
smo233403v0.draw(context, stavesmo233403);
smo240311.setContext(context);
smo240311.draw();
const fmtsmo23093621 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo230936v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230936v0ar = [];
const smo230916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo230916.setAttribute('id', 'smo230916');
smo230916.addModifier(new VF.Dot(), 0);
const smo230917 = new VF.Annotation('-');
smo230917.setAttribute('id', 'smo230917');
smo230917.setFont('Merriweather', 12, 'normal');
smo230917.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230916.addModifier(smo230917);
smo230917.addClass('lyric lyric-0 lyric-hyphen');
smo230936v0ar.push(smo230916);
const smo230918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo230918.setAttribute('id', 'smo230918');
smo230918.addModifier(new VF.Dot(), 0);
const smo230919 = new VF.Annotation('Er');
smo230919.setAttribute('id', 'smo230919');
smo230919.setFont('Merriweather', 12, 'normal');
smo230919.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230918.addModifier(smo230919);
smo230919.addClass('lyric lyric-0');
const smo230920 = new VF.Annotation('Mein');
smo230920.setAttribute('id', 'smo230920');
smo230920.setFont('Merriweather', 12, 'normal');
smo230920.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo230918.addModifier(smo230920);
smo230920.addClass('lyric lyric-1');
smo230936v0ar.push(smo230918);
smo230936v0.addTickables(smo230936v0ar)
fmtsmo23093621.joinVoices([smo230936v0]);
const fmtsmo23224721 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo232247v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo232247v0ar = [];
const smo232229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo232229.setAttribute('id', 'smo232229');
smo232247v0ar.push(smo232229);
const smo232230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo232230.setAttribute('id', 'smo232230');
smo232247v0ar.push(smo232230);
const smo232231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo232231.setAttribute('id', 'smo232231');
smo232231.addModifier(new VF.Dot(), 0);
smo232247v0ar.push(smo232231);
smo232247v0.addTickables(smo232247v0ar)
fmtsmo23224721.joinVoices([smo232247v0]);
const fmtsmo23342421 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo233424v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo233424v0ar = [];
const smo233404 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo233404.setAttribute('id', 'smo233404');
smo233424v0ar.push(smo233404);
const smo233405 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo233405.setAttribute('id', 'smo233405');
smo233424v0ar.push(smo233405);
const smo233406 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo233406.setAttribute('id', 'smo233406');
smo233424v0ar.push(smo233406);
const smo233407 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo233407.setAttribute('id', 'smo233407');
smo233424v0ar.push(smo233407);
const smo233408 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo233408.setAttribute('id', 'smo233408');
smo233424v0ar.push(smo233408);
smo233424v0.addTickables(smo233424v0ar)
fmtsmo23342421.joinVoices([smo233424v0]);
// create beam groups and tuplets for format grp smo234202 before formatting
const dirsmo240318 = smo233404.getStemDirection();
smo233404.setStemDirection(dirsmo240318);
smo233405.setStemDirection(dirsmo240318);
smo233406.setStemDirection(dirsmo240318);
const smo240318 = new VF.Beam([smo233404,smo233405,smo233406]);
 
// formatting measures in staff group smo234202
fmtsmo23093621.format([smo230936v0,smo232247v0,smo233424v0], 166);
const stavesmo230936 = new VF.Stave(1034, 1197, 180);
stavesmo230936.setAttribute('id', 'stavesmo230936');
stavesmo230936.setBegBarType(VF.Barline.type.NONE);
stavesmo230936.setContext(context);
stavesmo230936.draw();
smo230936v0.draw(context, stavesmo230936);
const stavesmo232247 = new VF.Stave(1034, 1309, 180);
stavesmo232247.setAttribute('id', 'stavesmo232247');
stavesmo232247.setBegBarType(VF.Barline.type.NONE);
stavesmo232247.setContext(context);
stavesmo232247.draw();
smo232247v0.draw(context, stavesmo232247);
const stavesmo233424 = new VF.Stave(1034, 1449, 180);
stavesmo233424.setAttribute('id', 'stavesmo233424');
stavesmo233424.setBegBarType(VF.Barline.type.NONE);
stavesmo233424.setContext(context);
stavesmo233424.draw();
smo233424v0.draw(context, stavesmo233424);
smo240318.setContext(context);
smo240318.draw();
const rightsmo234202stavesmo2309362 = new VF.StaveConnector(stavesmo230936, stavesmo233424).setType(0);
rightsmo234202stavesmo2309362.setContext(context).draw();
// modifier from 0-12-0-3 to 0-13-0-0
const smo241119 = new VF.StaveTie({ first_note: smo230705, last_note: smo230724, 
          firstNote: smo230705, lastNote: smo230724, first_indices: [0], last_indices: [0]});
smo241119.setContext(context).draw();
// modifier from 0-14-0-0 to 0-15-0-0
const smo241120 = new VF.StaveTie({ first_note: smo230747, last_note: smo230766, 
          firstNote: smo230747, lastNote: smo230766, first_indices: [0], last_indices: [0]});
smo241120.setContext(context).draw();
// modifier from 0-16-0-0 to 0-16-0-0
const smo241121 = new VF.StaveTie({ first_note: smo230796, last_note: smo230796, 
          firstNote: smo230796, lastNote: smo230796, first_indices: [0], last_indices: [0]});
smo241121.setContext(context).draw();
// modifier from 0-18-0-1 to 0-19-0-0
const smo241122 = new VF.StaveTie({ first_note: smo230848, last_note: smo230867, 
          firstNote: smo230848, lastNote: smo230867, first_indices: [0], last_indices: [0]});
smo241122.setContext(context).draw();
// modifier from 0-20-0-0 to 0-21-0-0
const smo241123 = new VF.StaveTie({ first_note: smo230897, last_note: smo230916, 
          firstNote: smo230897, lastNote: smo230916, first_indices: [0], last_indices: [0]});
smo241123.setContext(context).draw();
// modifier from 1-8-0-0 to 1-9-0-0
const smo241124 = new VF.StaveTie({ first_note: smo231997, last_note: smo232014, 
          firstNote: smo231997, lastNote: smo232014, first_indices: [0,1], last_indices: [0,1]});
smo241124.setContext(context).draw();
// modifier from 1-10-0-0 to 1-11-0-0
const smo241125 = new VF.StaveTie({ first_note: smo232031, last_note: smo232048, 
          firstNote: smo232031, lastNote: smo232048, first_indices: [0,1], last_indices: [0,1]});
smo241125.setContext(context).draw();
// modifier from 1-6-0-0 to 1-7-0-0
const smo241126 = new VF.StaveTie({ first_note: smo231963, last_note: null, 
          firstNote: smo231963, lastNote: null, first_indices: [0,1], last_indices: [0,1]});
smo241126.setContext(context).draw();
// modifier from 1-6-0-0 to 1-7-0-0
const smo241127 = new VF.StaveTie({ first_note: null, last_note: smo231980, 
          firstNote: null, lastNote: smo231980, first_indices: [0,1], last_indices: [0,1]});
smo241127.setContext(context).draw();
// modifier from 1-4-0-0 to 1-5-0-0
const smo241128 = new VF.StaveTie({ first_note: smo231928, last_note: smo231945, 
          firstNote: smo231928, lastNote: smo231945, first_indices: [0], last_indices: [0]});
smo241128.setContext(context).draw();
// modifier from 2-15-1-0 to 2-15-1-1
const smo241129 = new VF.Curve(smo233281, smo233282, JSON.parse('{"thickness":2,"xShift":0,"yShift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo241129.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo230556').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo230576').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230577').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230579').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230580').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230582').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230583').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230585').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230586').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230604').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo230605').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo230626').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo230628').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230629').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230631').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230632').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230634').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230635').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230653').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230654').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230657').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo230675').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230676').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230679').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo230697').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230698').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230700').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230701').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230703').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230704').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230706').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo230707').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo230726').setAttributeNS('', 'transform', 'translate(0 38)');
context.svg.getElementById('vf-smo230730').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo230748').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo230749').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo230767').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo230769').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230770').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230772').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230773').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230775').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230776').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230778').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230779').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230797').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo230798').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo230816').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo230818').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230819').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230821').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230822').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230824').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230825').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230827').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230828').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230846').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230847').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230850').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo230870').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230871').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230873').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230874').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230876').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230877').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230879').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230880').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230898').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230899').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo230917').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230919').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo230920').setAttributeNS('', 'transform', 'translate(0 15)');
}
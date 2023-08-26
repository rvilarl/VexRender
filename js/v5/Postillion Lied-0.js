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
const fmtsmo2269620 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo226962v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226962v0ar = [];
const smo226946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo226946.setAttribute('id', 'smo226946');
smo226946.addModifier(new VF.Dot(), 0);
smo226962v0ar.push(smo226946);
smo226962v0.addTickables(smo226962v0ar)
fmtsmo2269620.joinVoices([smo226962v0]);
const fmtsmo2283620 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo228362v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228362v0ar = [];
const smo228344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228344.setAttribute('id', 'smo228344');
smo228344.addModifier(new VF.Dot(), 0);
smo228362v0ar.push(smo228344);
const smo228345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo228345.setAttribute('id', 'smo228345');
smo228362v0ar.push(smo228345);
const smo228346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo228346.setAttribute('id', 'smo228346');
smo228362v0ar.push(smo228346);
smo228362v0.addTickables(smo228362v0ar)
fmtsmo2283620.joinVoices([smo228362v0]);
const fmtsmo2294830 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo229483v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229483v0ar = [];
const smo229465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo229465.setAttribute('id', 'smo229465');
smo229465.addModifier(new VF.Dot(), 0);
smo229483v0ar.push(smo229465);
const smo229466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo229466.setAttribute('id', 'smo229466');
smo229483v0ar.push(smo229466);
const smo229467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229467.setAttribute('id', 'smo229467');
smo229483v0ar.push(smo229467);
smo229483v0.addTickables(smo229483v0ar)
fmtsmo2294830.joinVoices([smo229483v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo2269620.format([smo226962v0,smo228362v0,smo229483v0], 105);
const stavesmo226962 = new VF.Stave(66, 119, 202);
stavesmo226962.setAttribute('id', 'stavesmo226962');
stavesmo226962.setBegBarType(1);
stavesmo226962.setTempo(JSON.parse('{"duration":"4","dots":1,"bpm":120}'), -1 * 0);
stavesmo226962.addClef('treble');
stavesmo226962.addTimeSignature('6/8');
const keysmo226962 = new VF.KeySignature('G');
keysmo226962.addToStave(stavesmo226962);
stavesmo226962.setContext(context);
stavesmo226962.draw();
smo226962v0.draw(context, stavesmo226962);
const stavesmo228362 = new VF.Stave(66, 226, 202);
stavesmo228362.setAttribute('id', 'stavesmo228362');
stavesmo228362.setBegBarType(1);
stavesmo228362.addClef('treble');
stavesmo228362.addTimeSignature('6/8');
const keysmo228362 = new VF.KeySignature('G');
keysmo228362.addToStave(stavesmo228362);
stavesmo228362.setContext(context);
stavesmo228362.draw();
smo228362v0.draw(context, stavesmo228362);
const stavesmo229483 = new VF.Stave(66, 301, 202);
stavesmo229483.setAttribute('id', 'stavesmo229483');
stavesmo229483.setBegBarType(1);
stavesmo229483.addClef('treble');
stavesmo229483.addTimeSignature('6/8');
const keysmo229483 = new VF.KeySignature('G');
keysmo229483.addToStave(stavesmo229483);
stavesmo229483.setContext(context);
stavesmo229483.draw();
smo229483v0.draw(context, stavesmo229483);
const leftsmo230697stavesmo2269622 = new VF.StaveConnector(stavesmo226962, stavesmo229483).setType(1);
leftsmo230697stavesmo2269622.setContext(context).draw();
const fmtsmo2269791 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo226979v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226979v0ar = [];
const smo226963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo226963.setAttribute('id', 'smo226963');
smo226963.addModifier(new VF.Dot(), 0);
smo226979v0ar.push(smo226963);
smo226979v0.addTickables(smo226979v0ar)
fmtsmo2269791.joinVoices([smo226979v0]);
const fmtsmo2283801 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo228380v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228380v0ar = [];
const smo228363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo228363.setAttribute('id', 'smo228363');
smo228363.addModifier(new VF.Dot(), 0);
smo228380v0ar.push(smo228363);
const smo228364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo228364.setAttribute('id', 'smo228364');
smo228364.addModifier(new VF.Dot(), 0);
smo228380v0ar.push(smo228364);
smo228380v0.addTickables(smo228380v0ar)
fmtsmo2283801.joinVoices([smo228380v0]);
const fmtsmo2295011 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo229501v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229501v0ar = [];
const smo229484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo229484.setAttribute('id', 'smo229484');
smo229484.addModifier(new VF.Dot(), 0);
smo229501v0ar.push(smo229484);
const smo229485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229485.setAttribute('id', 'smo229485');
smo229485.addModifier(new VF.Dot(), 0);
smo229501v0ar.push(smo229485);
smo229501v0.addTickables(smo229501v0ar)
fmtsmo2295011.joinVoices([smo229501v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo2269791.format([smo226979v0,smo228380v0,smo229501v0], 75);
const stavesmo226979 = new VF.Stave(268, 119, 89);
stavesmo226979.setAttribute('id', 'stavesmo226979');
stavesmo226979.setBegBarType(VF.Barline.type.NONE);
stavesmo226979.setContext(context);
stavesmo226979.draw();
smo226979v0.draw(context, stavesmo226979);
const stavesmo228380 = new VF.Stave(268, 226, 89);
stavesmo228380.setAttribute('id', 'stavesmo228380');
stavesmo228380.setBegBarType(VF.Barline.type.NONE);
stavesmo228380.setContext(context);
stavesmo228380.draw();
smo228380v0.draw(context, stavesmo228380);
const stavesmo229501 = new VF.Stave(268, 301, 89);
stavesmo229501.setAttribute('id', 'stavesmo229501');
stavesmo229501.setBegBarType(VF.Barline.type.NONE);
stavesmo229501.setContext(context);
stavesmo229501.draw();
smo229501v0.draw(context, stavesmo229501);
const fmtsmo2269962 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo226996v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo226996v0ar = [];
const smo226980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo226980.setAttribute('id', 'smo226980');
smo226980.addModifier(new VF.Dot(), 0);
smo226996v0ar.push(smo226980);
smo226996v0.addTickables(smo226996v0ar)
fmtsmo2269962.joinVoices([smo226996v0]);
const fmtsmo2284012 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo228401v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228401v0ar = [];
const smo228381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo228381.setAttribute('id', 'smo228381');
smo228401v0ar.push(smo228381);
const smo228382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo228382.setAttribute('id', 'smo228382');
smo228401v0ar.push(smo228382);
const smo228383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo228383.setAttribute('id', 'smo228383');
smo228401v0ar.push(smo228383);
const smo228384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo228384.setAttribute('id', 'smo228384');
smo228401v0ar.push(smo228384);
const smo228385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo228385.setAttribute('id', 'smo228385');
smo228401v0ar.push(smo228385);
smo228401v0.addTickables(smo228401v0ar)
fmtsmo2284012.joinVoices([smo228401v0]);
const fmtsmo2295222 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo229522v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229522v0ar = [];
const smo229502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo229502.setAttribute('id', 'smo229502');
smo229522v0ar.push(smo229502);
const smo229503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229503.setAttribute('id', 'smo229503');
smo229522v0ar.push(smo229503);
const smo229504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo229504.setAttribute('id', 'smo229504');
smo229522v0ar.push(smo229504);
const smo229505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo229505.setAttribute('id', 'smo229505');
smo229522v0ar.push(smo229505);
const smo229506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo229506.setAttribute('id', 'smo229506');
smo229522v0ar.push(smo229506);
smo229522v0.addTickables(smo229522v0ar)
fmtsmo2295222.joinVoices([smo229522v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo236663 = smo228381.getStemDirection();
smo228381.setStemDirection(dirsmo236663);
smo228382.setStemDirection(dirsmo236663);
smo228383.setStemDirection(dirsmo236663);
const smo236663 = new VF.Beam([smo228381,smo228382,smo228383]);
const dirsmo236666 = smo229502.getStemDirection();
smo229502.setStemDirection(dirsmo236666);
smo229503.setStemDirection(dirsmo236666);
smo229504.setStemDirection(dirsmo236666);
const smo236666 = new VF.Beam([smo229502,smo229503,smo229504]);
 
// formatting measures in staff group smo230697
fmtsmo2269962.format([smo226996v0,smo228401v0,smo229522v0], 146);
const stavesmo226996 = new VF.Stave(357, 119, 160);
stavesmo226996.setAttribute('id', 'stavesmo226996');
stavesmo226996.setBegBarType(VF.Barline.type.NONE);
stavesmo226996.setContext(context);
stavesmo226996.draw();
smo226996v0.draw(context, stavesmo226996);
const stavesmo228401 = new VF.Stave(357, 226, 160);
stavesmo228401.setAttribute('id', 'stavesmo228401');
stavesmo228401.setBegBarType(VF.Barline.type.NONE);
stavesmo228401.setContext(context);
stavesmo228401.draw();
smo228401v0.draw(context, stavesmo228401);
smo236663.setContext(context);
smo236663.draw();
const stavesmo229522 = new VF.Stave(357, 301, 160);
stavesmo229522.setAttribute('id', 'stavesmo229522');
stavesmo229522.setBegBarType(VF.Barline.type.NONE);
stavesmo229522.setContext(context);
stavesmo229522.draw();
smo229522v0.draw(context, stavesmo229522);
smo236666.setContext(context);
smo236666.draw();
const fmtsmo2270133 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo227013v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227013v0ar = [];
const smo226997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo226997.setAttribute('id', 'smo226997');
smo226997.addModifier(new VF.Dot(), 0);
smo227013v0ar.push(smo226997);
smo227013v0.addTickables(smo227013v0ar)
fmtsmo2270133.joinVoices([smo227013v0]);
const fmtsmo2284223 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo228422v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228422v0ar = [];
const smo228402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228402.setAttribute('id', 'smo228402');
smo228422v0ar.push(smo228402);
const smo228403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo228403.setAttribute('id', 'smo228403');
smo228422v0ar.push(smo228403);
const smo228404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228404.setAttribute('id', 'smo228404');
smo228422v0ar.push(smo228404);
const smo228405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228405.setAttribute('id', 'smo228405');
smo228422v0ar.push(smo228405);
const smo228406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228406.setAttribute('id', 'smo228406');
smo228422v0ar.push(smo228406);
smo228422v0.addTickables(smo228422v0ar)
fmtsmo2284223.joinVoices([smo228422v0]);
const fmtsmo2295423 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo229542v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229542v0ar = [];
const smo229523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo229523.setAttribute('id', 'smo229523');
smo229542v0ar.push(smo229523);
const smo229524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo229524.setAttribute('id', 'smo229524');
smo229542v0ar.push(smo229524);
const smo229525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo229525.setAttribute('id', 'smo229525');
smo229542v0ar.push(smo229525);
const smo229526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n","f#/3/n"]}'))
smo229526.setAttribute('id', 'smo229526');
smo229526.addModifier(new VF.Dot(), 0);
smo229526.addModifier(new VF.Dot(), 1);
smo229542v0ar.push(smo229526);
smo229542v0.addTickables(smo229542v0ar)
fmtsmo2295423.joinVoices([smo229542v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo236671 = smo228402.getStemDirection();
smo228402.setStemDirection(dirsmo236671);
smo228403.setStemDirection(dirsmo236671);
smo228404.setStemDirection(dirsmo236671);
const smo236671 = new VF.Beam([smo228402,smo228403,smo228404]);
const dirsmo236674 = smo229523.getStemDirection();
smo229523.setStemDirection(dirsmo236674);
smo229524.setStemDirection(dirsmo236674);
smo229525.setStemDirection(dirsmo236674);
const smo236674 = new VF.Beam([smo229523,smo229524,smo229525]);
 
// formatting measures in staff group smo230697
fmtsmo2270133.format([smo227013v0,smo228422v0,smo229542v0], 160);
const stavesmo227013 = new VF.Stave(517, 119, 174);
stavesmo227013.setAttribute('id', 'stavesmo227013');
stavesmo227013.setBegBarType(VF.Barline.type.NONE);
stavesmo227013.setContext(context);
stavesmo227013.draw();
smo227013v0.draw(context, stavesmo227013);
const stavesmo228422 = new VF.Stave(517, 226, 174);
stavesmo228422.setAttribute('id', 'stavesmo228422');
stavesmo228422.setBegBarType(VF.Barline.type.NONE);
stavesmo228422.setContext(context);
stavesmo228422.draw();
smo228422v0.draw(context, stavesmo228422);
smo236671.setContext(context);
smo236671.draw();
const stavesmo229542 = new VF.Stave(517, 301, 174);
stavesmo229542.setAttribute('id', 'stavesmo229542');
stavesmo229542.setBegBarType(VF.Barline.type.NONE);
stavesmo229542.setContext(context);
stavesmo229542.draw();
smo229542v0.draw(context, stavesmo229542);
smo236674.setContext(context);
smo236674.draw();
const fmtsmo2270304 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo227030v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227030v0ar = [];
const smo227014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo227014.setAttribute('id', 'smo227014');
smo227014.addModifier(new VF.Dot(), 0);
smo227030v0ar.push(smo227014);
smo227030v0.addTickables(smo227030v0ar)
fmtsmo2270304.joinVoices([smo227030v0]);
const fmtsmo2284394 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo228439v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228439v0ar = [];
const smo228423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228423.setAttribute('id', 'smo228423');
smo228423.addModifier(new VF.Dot(), 0);
smo228439v0ar.push(smo228423);
smo228439v0.addTickables(smo228439v0ar)
fmtsmo2284394.joinVoices([smo228439v0]);
const fmtsmo2295624 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo229562v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229562v0ar = [];
const smo229543 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229543.setAttribute('id', 'smo229543');
smo229562v0ar.push(smo229543);
const smo229544 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229544.setAttribute('id', 'smo229544');
smo229562v0ar.push(smo229544);
const smo229545 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229545.setAttribute('id', 'smo229545');
smo229562v0ar.push(smo229545);
const smo229546 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229546.setAttribute('id', 'smo229546');
smo229562v0ar.push(smo229546);
smo229562v0.addTickables(smo229562v0ar)
fmtsmo2295624.joinVoices([smo229562v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo2270304.format([smo227030v0,smo228439v0,smo229562v0], 127);
const stavesmo227030 = new VF.Stave(691, 119, 183);
stavesmo227030.setAttribute('id', 'stavesmo227030');
stavesmo227030.setBegBarType(4);
stavesmo227030.setContext(context);
stavesmo227030.draw();
smo227030v0.draw(context, stavesmo227030);
const stavesmo228439 = new VF.Stave(691, 226, 183);
stavesmo228439.setAttribute('id', 'stavesmo228439');
stavesmo228439.setBegBarType(4);
stavesmo228439.setContext(context);
stavesmo228439.draw();
smo228439v0.draw(context, stavesmo228439);
const stavesmo229562 = new VF.Stave(691, 301, 183);
stavesmo229562.setAttribute('id', 'stavesmo229562');
stavesmo229562.setBegBarType(4);
stavesmo229562.addClef('bass');
stavesmo229562.setContext(context);
stavesmo229562.draw();
smo229562v0.draw(context, stavesmo229562);
const fmtsmo2270495 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo227049v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227049v0ar = [];
const smo227031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo227031.setAttribute('id', 'smo227031');
smo227031.addModifier(new VF.Dot(), 0);
smo227049v0ar.push(smo227031);
const smo227032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo227032.setAttribute('id', 'smo227032');
smo227032.addModifier(new VF.Dot(), 0);
const smo227033 = new VF.Annotation('Mein');
smo227033.setAttribute('id', 'smo227033');
smo227033.setFont('Merriweather', 12, 'normal');
smo227033.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227032.addModifier(smo227033);
smo227033.addClass('lyric lyric-0');
smo227049v0ar.push(smo227032);
smo227049v0.addTickables(smo227049v0ar)
fmtsmo2270495.joinVoices([smo227049v0]);
const fmtsmo2284575 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo228457v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228457v0ar = [];
const smo228440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228440.setAttribute('id', 'smo228440');
smo228440.addModifier(new VF.Dot(), 0);
smo228457v0ar.push(smo228440);
const smo228441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228441.setAttribute('id', 'smo228441');
smo228441.addModifier(new VF.Dot(), 0);
smo228457v0ar.push(smo228441);
smo228457v0.addTickables(smo228457v0ar)
fmtsmo2284575.joinVoices([smo228457v0]);
const fmtsmo2295825 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo229582v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229582v0ar = [];
const smo229563 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229563.setAttribute('id', 'smo229563');
smo229582v0ar.push(smo229563);
const smo229564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229564.setAttribute('id', 'smo229564');
smo229582v0ar.push(smo229564);
const smo229565 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229565.setAttribute('id', 'smo229565');
smo229582v0ar.push(smo229565);
const smo229566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229566.setAttribute('id', 'smo229566');
smo229582v0ar.push(smo229566);
smo229582v0.addTickables(smo229582v0ar)
fmtsmo2295825.joinVoices([smo229582v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo2270495.format([smo227049v0,smo228457v0,smo229582v0], 155);
const stavesmo227049 = new VF.Stave(874, 119, 169);
stavesmo227049.setAttribute('id', 'stavesmo227049');
stavesmo227049.setBegBarType(VF.Barline.type.NONE);
stavesmo227049.setContext(context);
stavesmo227049.draw();
smo227049v0.draw(context, stavesmo227049);
const stavesmo228457 = new VF.Stave(874, 226, 169);
stavesmo228457.setAttribute('id', 'stavesmo228457');
stavesmo228457.setBegBarType(VF.Barline.type.NONE);
stavesmo228457.setContext(context);
stavesmo228457.draw();
smo228457v0.draw(context, stavesmo228457);
const stavesmo229582 = new VF.Stave(874, 301, 169);
stavesmo229582.setAttribute('id', 'stavesmo229582');
stavesmo229582.setBegBarType(VF.Barline.type.NONE);
stavesmo229582.setContext(context);
stavesmo229582.draw();
smo229582v0.draw(context, stavesmo229582);
const fmtsmo2270676 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo227067v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227067v0ar = [];
const smo227050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227050.setAttribute('id', 'smo227050');
smo227050.addModifier(new VF.Dot(), 0);
const smo227051 = new VF.Annotation('Shatz,');
smo227051.setAttribute('id', 'smo227051');
smo227051.setFont('Merriweather', 12, 'normal');
smo227051.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227050.addModifier(smo227051);
smo227051.addClass('lyric lyric-0');
smo227067v0ar.push(smo227050);
smo227067v0.addTickables(smo227067v0ar)
fmtsmo2270676.joinVoices([smo227067v0]);
const fmtsmo2284746 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo228474v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228474v0ar = [];
const smo228458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","f#/4/n"]}'))
smo228458.setAttribute('id', 'smo228458');
smo228458.addModifier(new VF.Dot(), 0);
smo228458.addModifier(new VF.Dot(), 1);
smo228474v0ar.push(smo228458);
smo228474v0.addTickables(smo228474v0ar)
fmtsmo2284746.joinVoices([smo228474v0]);
const fmtsmo2296026 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo229602v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229602v0ar = [];
const smo229583 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229583.setAttribute('id', 'smo229583');
smo229602v0ar.push(smo229583);
const smo229584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229584.setAttribute('id', 'smo229584');
smo229602v0ar.push(smo229584);
const smo229585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229585.setAttribute('id', 'smo229585');
smo229602v0ar.push(smo229585);
const smo229586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229586.setAttribute('id', 'smo229586');
smo229602v0ar.push(smo229586);
smo229602v0.addTickables(smo229602v0ar)
fmtsmo2296026.joinVoices([smo229602v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo2270676.format([smo227067v0,smo228474v0,smo229602v0], 154);
const stavesmo227067 = new VF.Stave(1043, 119, 168);
stavesmo227067.setAttribute('id', 'stavesmo227067');
stavesmo227067.setBegBarType(VF.Barline.type.NONE);
stavesmo227067.setContext(context);
stavesmo227067.draw();
smo227067v0.draw(context, stavesmo227067);
const stavesmo228474 = new VF.Stave(1043, 226, 168);
stavesmo228474.setAttribute('id', 'stavesmo228474');
stavesmo228474.setBegBarType(VF.Barline.type.NONE);
stavesmo228474.setContext(context);
stavesmo228474.draw();
smo228474v0.draw(context, stavesmo228474);
const stavesmo229602 = new VF.Stave(1043, 301, 168);
stavesmo229602.setAttribute('id', 'stavesmo229602');
stavesmo229602.setBegBarType(VF.Barline.type.NONE);
stavesmo229602.setContext(context);
stavesmo229602.draw();
smo229602v0.draw(context, stavesmo229602);
const rightsmo230697stavesmo2270672 = new VF.StaveConnector(stavesmo227067, stavesmo229602).setType(0);
rightsmo230697stavesmo2270672.setContext(context).draw();
const fmtsmo2270977 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo227097v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227097v0ar = [];
const smo227068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo227068.setAttribute('id', 'smo227068');
smo227097v0ar.push(smo227068);
const smo227070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227070.setAttribute('id', 'smo227070');
const smo227071 = new VF.Annotation('der');
smo227071.setAttribute('id', 'smo227071');
smo227071.setFont('Merriweather', 12, 'normal');
smo227071.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227070.addModifier(smo227071);
smo227071.addClass('lyric lyric-0');
const smo227072 = new VF.Annotation('hat');
smo227072.setAttribute('id', 'smo227072');
smo227072.setFont('Merriweather', 12, 'normal');
smo227072.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227070.addModifier(smo227072);
smo227072.addClass('lyric lyric-1');
smo227097v0ar.push(smo227070);
const smo227073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227073.setAttribute('id', 'smo227073');
const smo227074 = new VF.Annotation('is');
smo227074.setAttribute('id', 'smo227074');
smo227074.setFont('Merriweather', 12, 'normal');
smo227074.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227073.addModifier(smo227074);
smo227074.addClass('lyric lyric-0');
const smo227075 = new VF.Annotation('vie');
smo227075.setAttribute('id', 'smo227075');
smo227075.setFont('Merriweather', 12, 'normal');
smo227075.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227073.addModifier(smo227075);
smo227075.addClass('lyric lyric-1 lyric-hyphen');
smo227097v0ar.push(smo227073);
const smo227076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo227076.setAttribute('id', 'smo227076');
const smo227077 = new VF.Annotation('Po');
smo227077.setAttribute('id', 'smo227077');
smo227077.setFont('Merriweather', 12, 'normal');
smo227077.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227076.addModifier(smo227077);
smo227077.addClass('lyric lyric-0 lyric-hyphen');
const smo227078 = new VF.Annotation('les');
smo227078.setAttribute('id', 'smo227078');
smo227078.setFont('Merriweather', 12, 'normal');
smo227078.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227076.addModifier(smo227078);
smo227078.addClass('lyric lyric-1');
smo227097v0ar.push(smo227076);
const smo227079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo227079.setAttribute('id', 'smo227079');
const smo227080 = new VF.Annotation('stil');
smo227080.setAttribute('id', 'smo227080');
smo227080.setFont('Merriweather', 12, 'normal');
smo227080.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227079.addModifier(smo227080);
smo227080.addClass('lyric lyric-0 lyric-hyphen');
const smo227081 = new VF.Annotation('ge');
smo227081.setAttribute('id', 'smo227081');
smo227081.setFont('Merriweather', 12, 'normal');
smo227081.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227079.addModifier(smo227081);
smo227081.addClass('lyric lyric-1 lyric-hyphen');
smo227097v0ar.push(smo227079);
smo227097v0.addTickables(smo227097v0ar)
fmtsmo2270977.joinVoices([smo227097v0]);
const fmtsmo2284917 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo228491v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228491v0ar = [];
const smo228475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","f#/4/n"]}'))
smo228475.setAttribute('id', 'smo228475');
smo228475.addModifier(new VF.Dot(), 0);
smo228475.addModifier(new VF.Dot(), 1);
smo228491v0ar.push(smo228475);
smo228491v0.addTickables(smo228491v0ar)
fmtsmo2284917.joinVoices([smo228491v0]);
const fmtsmo2296227 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo229622v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229622v0ar = [];
const smo229603 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229603.setAttribute('id', 'smo229603');
smo229622v0ar.push(smo229603);
const smo229604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229604.setAttribute('id', 'smo229604');
smo229622v0ar.push(smo229604);
const smo229605 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229605.setAttribute('id', 'smo229605');
smo229622v0ar.push(smo229605);
const smo229606 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229606.setAttribute('id', 'smo229606');
smo229622v0ar.push(smo229606);
smo229622v0.addTickables(smo229622v0ar)
fmtsmo2296227.joinVoices([smo229622v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo236699 = smo227073.getStemDirection();
smo227073.setStemDirection(dirsmo236699);
smo227076.setStemDirection(dirsmo236699);
smo227079.setStemDirection(dirsmo236699);
const smo236699 = new VF.Beam([smo227073,smo227076,smo227079]);
 
// formatting measures in staff group smo230697
fmtsmo2270977.format([smo227097v0,smo228491v0,smo229622v0], 232);
const stavesmo227097 = new VF.Stave(66, 451, 306);
stavesmo227097.setAttribute('id', 'stavesmo227097');
stavesmo227097.setBegBarType(1);
stavesmo227097.addClef('treble');
const keysmo227097 = new VF.KeySignature('G');
keysmo227097.addToStave(stavesmo227097);
stavesmo227097.setContext(context);
stavesmo227097.draw();
smo227097v0.draw(context, stavesmo227097);
smo236699.setContext(context);
smo236699.draw();
const stavesmo228491 = new VF.Stave(66, 566, 306);
stavesmo228491.setAttribute('id', 'stavesmo228491');
stavesmo228491.setBegBarType(1);
stavesmo228491.addClef('treble');
const keysmo228491 = new VF.KeySignature('G');
keysmo228491.addToStave(stavesmo228491);
stavesmo228491.setContext(context);
stavesmo228491.draw();
smo228491v0.draw(context, stavesmo228491);
const stavesmo229622 = new VF.Stave(66, 699, 306);
stavesmo229622.setAttribute('id', 'stavesmo229622');
stavesmo229622.setBegBarType(1);
stavesmo229622.addClef('bass');
const keysmo229622 = new VF.KeySignature('G');
keysmo229622.addToStave(stavesmo229622);
stavesmo229622.setContext(context);
stavesmo229622.draw();
smo229622v0.draw(context, stavesmo229622);
const leftsmo230697stavesmo2270972 = new VF.StaveConnector(stavesmo227097, stavesmo229622).setType(1);
leftsmo230697stavesmo2270972.setContext(context).draw();
const fmtsmo2271168 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo227116v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227116v0ar = [];
const smo227098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227098.setAttribute('id', 'smo227098');
smo227098.addModifier(new VF.Dot(), 0);
const smo227099 = new VF.Annotation('lion,');
smo227099.setAttribute('id', 'smo227099');
smo227099.setFont('Merriweather', 12, 'normal');
smo227099.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227098.addModifier(smo227099);
smo227099.addClass('lyric lyric-0');
const smo227100 = new VF.Annotation('sehn');
smo227100.setAttribute('id', 'smo227100');
smo227100.setFont('Merriweather', 12, 'normal');
smo227100.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227098.addModifier(smo227100);
smo227100.addClass('lyric lyric-1');
smo227116v0ar.push(smo227098);
smo227116v0.addTickables(smo227116v0ar)
fmtsmo2271168.joinVoices([smo227116v0]);
const fmtsmo2285088 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo228508v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228508v0ar = [];
const smo228492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo228492.setAttribute('id', 'smo228492');
smo228492.addModifier(new VF.Dot(), 0);
smo228492.addModifier(new VF.Dot(), 1);
smo228508v0ar.push(smo228492);
smo228508v0.addTickables(smo228508v0ar)
fmtsmo2285088.joinVoices([smo228508v0]);
const fmtsmo2296478 = new VF.Formatter();
//
// voices and notes for stave 2 8
const smo229647v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229647v0ar = [];
const smo229623 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo229623.setAttribute('id', 'smo229623');
smo229647v0ar.push(smo229623);
const smo229624 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo229624.setAttribute('id', 'smo229624');
smo229647v0ar.push(smo229624);
const smo229625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo229625.setAttribute('id', 'smo229625');
smo229647v0ar.push(smo229625);
const smo229626 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo229626.setAttribute('id', 'smo229626');
smo229647v0ar.push(smo229626);
smo229647v0.addTickables(smo229647v0ar)
fmtsmo2296478.joinVoices([smo229647v0]);
const smo229647v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229647v1ar = [];
const smo229627 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["cn/4/r"]}'))
smo229627.setAttribute('id', 'smo229627');
smo229627.setStyle({ fillStyle: "#115511" });
smo229647v1ar.push(smo229627);
const smo229628 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo229628.setAttribute('id', 'smo229628');
smo229628.setStyle({ fillStyle: "#115511" });
smo229647v1ar.push(smo229628);
const smo229629 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo229629.setAttribute('id', 'smo229629');
smo229629.setStyle({ fillStyle: "#115511" });
smo229647v1ar.push(smo229629);
const smo229630 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo229630.setAttribute('id', 'smo229630');
smo229630.setStyle({ fillStyle: "#115511" });
smo229647v1ar.push(smo229630);
const smo229631 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo229631.setAttribute('id', 'smo229631');
smo229631.setStyle({ fillStyle: "#115511" });
smo229647v1ar.push(smo229631);
smo229647v1.addTickables(smo229647v1ar)
fmtsmo2296478.joinVoices([smo229647v1]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo236710 = smo229629.getStemDirection();
smo229629.setStemDirection(dirsmo236710);
smo229630.setStemDirection(dirsmo236710);
smo229631.setStemDirection(dirsmo236710);
const smo236710 = new VF.Beam([smo229629,smo229630,smo229631]);
 
// formatting measures in staff group smo230697
fmtsmo2271168.format([smo227116v0,smo228508v0,smo229647v0,smo229647v1], 161);
const stavesmo227116 = new VF.Stave(372, 451, 175);
stavesmo227116.setAttribute('id', 'stavesmo227116');
stavesmo227116.setBegBarType(VF.Barline.type.NONE);
stavesmo227116.setContext(context);
stavesmo227116.draw();
smo227116v0.draw(context, stavesmo227116);
const stavesmo228508 = new VF.Stave(372, 566, 175);
stavesmo228508.setAttribute('id', 'stavesmo228508');
stavesmo228508.setBegBarType(VF.Barline.type.NONE);
stavesmo228508.setContext(context);
stavesmo228508.draw();
smo228508v0.draw(context, stavesmo228508);
const stavesmo229647 = new VF.Stave(372, 699, 175);
stavesmo229647.setAttribute('id', 'stavesmo229647');
stavesmo229647.setBegBarType(VF.Barline.type.NONE);
stavesmo229647.setContext(context);
stavesmo229647.draw();
smo229647v0.draw(context, stavesmo229647);
smo229647v1.draw(context, stavesmo229647);
smo236710.setContext(context);
smo236710.draw();
const fmtsmo2271469 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo227146v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227146v0ar = [];
const smo227117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo227117.setAttribute('id', 'smo227117');
smo227146v0ar.push(smo227117);
const smo227119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo227119.setAttribute('id', 'smo227119');
const smo227120 = new VF.Annotation('er');
smo227120.setAttribute('id', 'smo227120');
smo227120.setFont('Merriweather', 12, 'normal');
smo227120.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227119.addModifier(smo227120);
smo227120.addClass('lyric lyric-0');
const smo227121 = new VF.Annotation('er');
smo227121.setAttribute('id', 'smo227121');
smo227121.setFont('Merriweather', 12, 'normal');
smo227121.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227119.addModifier(smo227121);
smo227121.addClass('lyric lyric-1');
smo227146v0ar.push(smo227119);
const smo227122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo227122.setAttribute('id', 'smo227122');
const smo227123 = new VF.Annotation('fährt');
smo227123.setAttribute('id', 'smo227123');
smo227123.setFont('Merriweather', 12, 'normal');
smo227123.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227122.addModifier(smo227123);
smo227123.addClass('lyric lyric-0');
const smo227124 = new VF.Annotation('traf');
smo227124.setAttribute('id', 'smo227124');
smo227124.setFont('Merriweather', 12, 'normal');
smo227124.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227122.addModifier(smo227124);
smo227124.addClass('lyric lyric-1');
smo227146v0ar.push(smo227122);
const smo227125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227125.setAttribute('id', 'smo227125');
const smo227126 = new VF.Annotation('durch');
smo227126.setAttribute('id', 'smo227126');
smo227126.setFont('Merriweather', 12, 'normal');
smo227126.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227125.addModifier(smo227126);
smo227126.addClass('lyric lyric-0');
const smo227127 = new VF.Annotation('la');
smo227127.setAttribute('id', 'smo227127');
smo227127.setFont('Merriweather', 12, 'normal');
smo227127.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227125.addModifier(smo227127);
smo227127.addClass('lyric lyric-1');
smo227146v0ar.push(smo227125);
const smo227128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo227128.setAttribute('id', 'smo227128');
const smo227129 = new VF.Annotation('de');
smo227129.setAttribute('id', 'smo227129');
smo227129.setFont('Merriweather', 12, 'normal');
smo227129.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227128.addModifier(smo227129);
smo227129.addClass('lyric lyric-0');
const smo227130 = new VF.Annotation('den');
smo227130.setAttribute('id', 'smo227130');
smo227130.setFont('Merriweather', 12, 'normal');
smo227130.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227128.addModifier(smo227130);
smo227130.addClass('lyric lyric-1');
smo227146v0ar.push(smo227128);
smo227146v0.addTickables(smo227146v0ar)
fmtsmo2271469.joinVoices([smo227146v0]);
const fmtsmo2285259 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo228525v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228525v0ar = [];
const smo228509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo228509.setAttribute('id', 'smo228509');
smo228509.addModifier(new VF.Dot(), 0);
smo228509.addModifier(new VF.Dot(), 1);
smo228525v0ar.push(smo228509);
smo228525v0.addTickables(smo228525v0ar)
fmtsmo2285259.joinVoices([smo228525v0]);
const fmtsmo2296699 = new VF.Formatter();
//
// voices and notes for stave 2 9
const smo229669v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229669v0ar = [];
const smo229648 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229648.setAttribute('id', 'smo229648');
smo229669v0ar.push(smo229648);
const smo229649 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229649.setAttribute('id', 'smo229649');
smo229669v0ar.push(smo229649);
const smo229650 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229650.setAttribute('id', 'smo229650');
smo229669v0ar.push(smo229650);
const smo229651 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229651.setAttribute('id', 'smo229651');
smo229669v0ar.push(smo229651);
smo229669v0.addTickables(smo229669v0ar)
fmtsmo2296699.joinVoices([smo229669v0]);
const smo229669v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229669v1ar = [];
const smo229652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo229652.setAttribute('id', 'smo229652');
smo229652.setStyle({ fillStyle: "#115511" });
smo229652.addModifier(new VF.Dot(), 0);
smo229669v1ar.push(smo229652);
const smo229653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo229653.setAttribute('id', 'smo229653');
smo229653.setStyle({ fillStyle: '#aaaaaa7f' });
smo229653.addModifier(new VF.Dot(), 0);
smo229669v1ar.push(smo229653);
smo229669v1.addTickables(smo229669v1ar)
fmtsmo2296699.joinVoices([smo229669v1]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo236713 = smo227122.getStemDirection();
smo227122.setStemDirection(dirsmo236713);
smo227125.setStemDirection(dirsmo236713);
smo227128.setStemDirection(dirsmo236713);
const smo236713 = new VF.Beam([smo227122,smo227125,smo227128]);
 
// formatting measures in staff group smo230697
fmtsmo2271469.format([smo227146v0,smo228525v0,smo229669v0,smo229669v1], 282);
const stavesmo227146 = new VF.Stave(547, 451, 296);
stavesmo227146.setAttribute('id', 'stavesmo227146');
stavesmo227146.setBegBarType(VF.Barline.type.NONE);
stavesmo227146.setContext(context);
stavesmo227146.draw();
smo227146v0.draw(context, stavesmo227146);
smo236713.setContext(context);
smo236713.draw();
const stavesmo228525 = new VF.Stave(547, 566, 296);
stavesmo228525.setAttribute('id', 'stavesmo228525');
stavesmo228525.setBegBarType(VF.Barline.type.NONE);
stavesmo228525.setContext(context);
stavesmo228525.draw();
smo228525v0.draw(context, stavesmo228525);
const stavesmo229669 = new VF.Stave(547, 699, 296);
stavesmo229669.setAttribute('id', 'stavesmo229669');
stavesmo229669.setBegBarType(VF.Barline.type.NONE);
stavesmo229669.setContext(context);
stavesmo229669.draw();
smo229669v0.draw(context, stavesmo229669);
smo229669v1.draw(context, stavesmo229669);
const fmtsmo22716810 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo227168v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227168v0ar = [];
const smo227147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227147.setAttribute('id', 'smo227147');
smo227147.addModifier(new VF.Dot(), 0);
const smo227148 = new VF.Annotation('Fel');
smo227148.setAttribute('id', 'smo227148');
smo227148.setFont('Merriweather', 12, 'normal');
smo227148.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227147.addModifier(smo227148);
smo227148.addClass('lyric lyric-0 lyric-hyphen');
const smo227149 = new VF.Annotation('Städt');
smo227149.setAttribute('id', 'smo227149');
smo227149.setFont('Merriweather', 12, 'normal');
smo227149.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227147.addModifier(smo227149);
smo227149.addClass('lyric lyric-1 lyric-hyphen');
smo227168v0ar.push(smo227147);
const smo227150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo227150.setAttribute('id', 'smo227150');
smo227150.addModifier(new VF.Dot(), 0);
const smo227151 = new VF.Annotation('der');
smo227151.setAttribute('id', 'smo227151');
smo227151.setFont('Merriweather', 12, 'normal');
smo227151.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227150.addModifier(smo227151);
smo227151.addClass('lyric lyric-0');
const smo227152 = new VF.Annotation('chen');
smo227152.setAttribute('id', 'smo227152');
smo227152.setFont('Merriweather', 12, 'normal');
smo227152.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227150.addModifier(smo227152);
smo227152.addClass('lyric lyric-1');
smo227168v0ar.push(smo227150);
smo227168v0.addTickables(smo227168v0ar)
fmtsmo22716810.joinVoices([smo227168v0]);
const fmtsmo22854210 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo228542v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228542v0ar = [];
const smo228526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/3/n","f#/4/n"]}'))
smo228526.setAttribute('id', 'smo228526');
smo228526.addModifier(new VF.Dot(), 0);
smo228526.addModifier(new VF.Dot(), 1);
smo228542v0ar.push(smo228526);
smo228542v0.addTickables(smo228542v0ar)
fmtsmo22854210.joinVoices([smo228542v0]);
const fmtsmo22968910 = new VF.Formatter();
//
// voices and notes for stave 2 10
const smo229689v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229689v0ar = [];
const smo229670 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229670.setAttribute('id', 'smo229670');
smo229689v0ar.push(smo229670);
const smo229671 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229671.setAttribute('id', 'smo229671');
smo229689v0ar.push(smo229671);
const smo229672 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229672.setAttribute('id', 'smo229672');
smo229689v0ar.push(smo229672);
const smo229673 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229673.setAttribute('id', 'smo229673');
smo229689v0ar.push(smo229673);
smo229689v0.addTickables(smo229689v0ar)
fmtsmo22968910.joinVoices([smo229689v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22716810.format([smo227168v0,smo228542v0,smo229689v0], 174);
const stavesmo227168 = new VF.Stave(843, 451, 188);
stavesmo227168.setAttribute('id', 'stavesmo227168');
stavesmo227168.setBegBarType(VF.Barline.type.NONE);
stavesmo227168.setContext(context);
stavesmo227168.draw();
smo227168v0.draw(context, stavesmo227168);
const stavesmo228542 = new VF.Stave(843, 566, 188);
stavesmo228542.setAttribute('id', 'stavesmo228542');
stavesmo228542.setBegBarType(VF.Barline.type.NONE);
stavesmo228542.setContext(context);
stavesmo228542.draw();
smo228542v0.draw(context, stavesmo228542);
const stavesmo229689 = new VF.Stave(843, 699, 188);
stavesmo229689.setAttribute('id', 'stavesmo229689');
stavesmo229689.setBegBarType(VF.Barline.type.NONE);
stavesmo229689.setContext(context);
stavesmo229689.draw();
smo229689v0.draw(context, stavesmo229689);
const fmtsmo22719011 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo227190v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227190v0ar = [];
const smo227169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227169.setAttribute('id', 'smo227169');
smo227169.addModifier(new VF.Dot(), 0);
const smo227170 = new VF.Annotation('Wäl');
smo227170.setAttribute('id', 'smo227170');
smo227170.setFont('Merriweather', 12, 'normal');
smo227170.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227169.addModifier(smo227170);
smo227170.addClass('lyric lyric-0 lyric-hyphen');
const smo227171 = new VF.Annotation('Mäd');
smo227171.setAttribute('id', 'smo227171');
smo227171.setFont('Merriweather', 12, 'normal');
smo227171.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227169.addModifier(smo227171);
smo227171.addClass('lyric lyric-1 lyric-hyphen');
smo227190v0ar.push(smo227169);
const smo227172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo227172.setAttribute('id', 'smo227172');
smo227172.addModifier(new VF.Dot(), 0);
const smo227173 = new VF.Annotation('der');
smo227173.setAttribute('id', 'smo227173');
smo227173.setFont('Merriweather', 12, 'normal');
smo227173.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227172.addModifier(smo227173);
smo227173.addClass('lyric lyric-0');
const smo227174 = new VF.Annotation('chen');
smo227174.setAttribute('id', 'smo227174');
smo227174.setFont('Merriweather', 12, 'normal');
smo227174.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227172.addModifier(smo227174);
smo227174.addClass('lyric lyric-1');
smo227190v0ar.push(smo227172);
smo227190v0.addTickables(smo227190v0ar)
fmtsmo22719011.joinVoices([smo227190v0]);
const fmtsmo22855911 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo228559v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228559v0ar = [];
const smo228543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/3/n","f#/4/n"]}'))
smo228543.setAttribute('id', 'smo228543');
smo228543.addModifier(new VF.Dot(), 0);
smo228543.addModifier(new VF.Dot(), 1);
smo228559v0ar.push(smo228543);
smo228559v0.addTickables(smo228559v0ar)
fmtsmo22855911.joinVoices([smo228559v0]);
const fmtsmo22970911 = new VF.Formatter();
//
// voices and notes for stave 2 11
const smo229709v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229709v0ar = [];
const smo229690 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229690.setAttribute('id', 'smo229690');
smo229709v0ar.push(smo229690);
const smo229691 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229691.setAttribute('id', 'smo229691');
smo229709v0ar.push(smo229691);
const smo229692 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229692.setAttribute('id', 'smo229692');
smo229709v0ar.push(smo229692);
const smo229693 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229693.setAttribute('id', 'smo229693');
smo229709v0ar.push(smo229693);
smo229709v0.addTickables(smo229709v0ar)
fmtsmo22970911.joinVoices([smo229709v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22719011.format([smo227190v0,smo228559v0,smo229709v0], 168);
const stavesmo227190 = new VF.Stave(1031, 451, 182);
stavesmo227190.setAttribute('id', 'stavesmo227190');
stavesmo227190.setBegBarType(VF.Barline.type.NONE);
stavesmo227190.setContext(context);
stavesmo227190.draw();
smo227190v0.draw(context, stavesmo227190);
const stavesmo228559 = new VF.Stave(1031, 566, 182);
stavesmo228559.setAttribute('id', 'stavesmo228559');
stavesmo228559.setBegBarType(VF.Barline.type.NONE);
stavesmo228559.setContext(context);
stavesmo228559.draw();
smo228559v0.draw(context, stavesmo228559);
const stavesmo229709 = new VF.Stave(1031, 699, 182);
stavesmo229709.setAttribute('id', 'stavesmo229709');
stavesmo229709.setBegBarType(VF.Barline.type.NONE);
stavesmo229709.setContext(context);
stavesmo229709.draw();
smo229709v0.draw(context, stavesmo229709);
const rightsmo230697stavesmo2271902 = new VF.StaveConnector(stavesmo227190, stavesmo229709).setType(0);
rightsmo230697stavesmo2271902.setContext(context).draw();
const fmtsmo22721812 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo227218v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227218v0ar = [];
const smo227191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227191.setAttribute('id', 'smo227191');
const smo227192 = new VF.Annotation('ü');
smo227192.setAttribute('id', 'smo227192');
smo227192.setFont('Merriweather', 12, 'normal');
smo227192.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227191.addModifier(smo227192);
smo227192.addClass('lyric lyric-0 lyric-hyphen');
const smo227193 = new VF.Annotation('schö');
smo227193.setAttribute('id', 'smo227193');
smo227193.setFont('Merriweather', 12, 'normal');
smo227193.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227191.addModifier(smo227193);
smo227193.addClass('lyric lyric-1 lyric-hyphen');
smo227218v0ar.push(smo227191);
const smo227194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo227194.setAttribute('id', 'smo227194');
const smo227195 = new VF.Annotation('ber');
smo227195.setAttribute('id', 'smo227195');
smo227195.setFont('Merriweather', 12, 'normal');
smo227195.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227194.addModifier(smo227195);
smo227195.addClass('lyric lyric-0 lyric-hyphen');
const smo227196 = new VF.Annotation('new');
smo227196.setAttribute('id', 'smo227196');
smo227196.setFont('Merriweather', 12, 'normal');
smo227196.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227194.addModifier(smo227196);
smo227196.addClass('lyric lyric-1');
smo227218v0ar.push(smo227194);
const smo227197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo227197.setAttribute('id', 'smo227197');
const smo227198 = new VF.Annotation('das');
smo227198.setAttribute('id', 'smo227198');
smo227198.setFont('Merriweather', 12, 'normal');
smo227198.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227197.addModifier(smo227198);
smo227198.addClass('lyric lyric-0');
const smo227199 = new VF.Annotation('als');
smo227199.setAttribute('id', 'smo227199');
smo227199.setFont('Merriweather', 12, 'normal');
smo227199.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227197.addModifier(smo227199);
smo227199.addClass('lyric lyric-1');
smo227218v0ar.push(smo227197);
const smo227200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227200.setAttribute('id', 'smo227200');
smo227200.addModifier(new VF.Dot(), 0);
const smo227201 = new VF.Annotation('Land;');
smo227201.setAttribute('id', 'smo227201');
smo227201.setFont('Merriweather', 12, 'normal');
smo227201.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227200.addModifier(smo227201);
smo227201.addClass('lyric lyric-0 lyric-hyphen');
const smo227202 = new VF.Annotation('ich');
smo227202.setAttribute('id', 'smo227202');
smo227202.setFont('Merriweather', 12, 'normal');
smo227202.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227200.addModifier(smo227202);
smo227202.addClass('lyric lyric-1');
smo227218v0ar.push(smo227200);
smo227218v0.addTickables(smo227218v0ar)
fmtsmo22721812.joinVoices([smo227218v0]);
const fmtsmo22857912 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo228579v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228579v0ar = [];
const smo228560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo228560.setAttribute('id', 'smo228560');
smo228560.addModifier(new VF.Dot(), 0);
smo228560.addModifier(new VF.Dot(), 1);
smo228579v0ar.push(smo228560);
const smo228561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n"]}'))
smo228561.setAttribute('id', 'smo228561');
smo228579v0ar.push(smo228561);
const smo228562 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bn/4/n"]}'))
smo228562.setAttribute('id', 'smo228562');
smo228579v0ar.push(smo228562);
const smo228563 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","cn/5/n"]}'))
smo228563.setAttribute('id', 'smo228563');
smo228579v0ar.push(smo228563);
smo228579v0.addTickables(smo228579v0ar)
fmtsmo22857912.joinVoices([smo228579v0]);
const fmtsmo22972912 = new VF.Formatter();
//
// voices and notes for stave 2 12
const smo229729v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229729v0ar = [];
const smo229710 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229710.setAttribute('id', 'smo229710');
smo229729v0ar.push(smo229710);
const smo229711 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229711.setAttribute('id', 'smo229711');
smo229729v0ar.push(smo229711);
const smo229712 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229712.setAttribute('id', 'smo229712');
smo229729v0ar.push(smo229712);
const smo229713 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229713.setAttribute('id', 'smo229713');
smo229729v0ar.push(smo229713);
smo229729v0.addTickables(smo229729v0ar)
fmtsmo22972912.joinVoices([smo229729v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo236740 = smo227191.getStemDirection();
smo227191.setStemDirection(dirsmo236740);
smo227194.setStemDirection(dirsmo236740);
smo227197.setStemDirection(dirsmo236740);
const smo236740 = new VF.Beam([smo227191,smo227194,smo227197]);
const dirsmo236743 = smo228561.getStemDirection();
smo228561.setStemDirection(dirsmo236743);
smo228562.setStemDirection(dirsmo236743);
smo228563.setStemDirection(dirsmo236743);
const smo236743 = new VF.Beam([smo228561,smo228562,smo228563]);
 
// formatting measures in staff group smo230697
fmtsmo22721812.format([smo227218v0,smo228579v0,smo229729v0], 289);
const stavesmo227218 = new VF.Stave(66, 844, 363);
stavesmo227218.setAttribute('id', 'stavesmo227218');
stavesmo227218.setBegBarType(1);
stavesmo227218.addClef('treble');
const keysmo227218 = new VF.KeySignature('G');
keysmo227218.addToStave(stavesmo227218);
stavesmo227218.setContext(context);
stavesmo227218.draw();
smo227218v0.draw(context, stavesmo227218);
smo236740.setContext(context);
smo236740.draw();
const stavesmo228579 = new VF.Stave(66, 967, 363);
stavesmo228579.setAttribute('id', 'stavesmo228579');
stavesmo228579.setBegBarType(1);
stavesmo228579.addClef('treble');
const keysmo228579 = new VF.KeySignature('G');
keysmo228579.addToStave(stavesmo228579);
stavesmo228579.setContext(context);
stavesmo228579.draw();
smo228579v0.draw(context, stavesmo228579);
smo236743.setContext(context);
smo236743.draw();
const stavesmo229729 = new VF.Stave(66, 1057, 363);
stavesmo229729.setAttribute('id', 'stavesmo229729');
stavesmo229729.setBegBarType(1);
stavesmo229729.addClef('bass');
const keysmo229729 = new VF.KeySignature('G');
keysmo229729.addToStave(stavesmo229729);
stavesmo229729.setContext(context);
stavesmo229729.draw();
smo229729v0.draw(context, stavesmo229729);
const leftsmo230697stavesmo2272182 = new VF.StaveConnector(stavesmo227218, stavesmo229729).setType(1);
leftsmo230697stavesmo2272182.setContext(context).draw();
const fmtsmo22724113 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo227241v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227241v0ar = [];
const smo227219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227219.setAttribute('id', 'smo227219');
const smo227221 = new VF.Annotation('-');
smo227221.setAttribute('id', 'smo227221');
smo227221.setFont('Merriweather', 12, 'normal');
smo227221.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227219.addModifier(smo227221);
smo227221.addClass('lyric lyric-1 lyric-hyphen');
smo227241v0ar.push(smo227219);
const smo227222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo227222.setAttribute('id', 'smo227222');
smo227241v0ar.push(smo227222);
const smo227223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo227223.setAttribute('id', 'smo227223');
smo227223.addModifier(new VF.Dot(), 0);
const smo227224 = new VF.Annotation('von');
smo227224.setAttribute('id', 'smo227224');
smo227224.setFont('Merriweather', 12, 'normal');
smo227224.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227223.addModifier(smo227224);
smo227224.addClass('lyric lyric-0');
const smo227225 = new VF.Annotation('Trotz');
smo227225.setAttribute('id', 'smo227225');
smo227225.setFont('Merriweather', 12, 'normal');
smo227225.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227223.addModifier(smo227225);
smo227225.addClass('lyric lyric-1 lyric-hyphen');
smo227241v0ar.push(smo227223);
smo227241v0.addTickables(smo227241v0ar)
fmtsmo22724113.joinVoices([smo227241v0]);
const fmtsmo22859613 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo228596v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228596v0ar = [];
const smo228580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo228580.setAttribute('id', 'smo228580');
smo228580.addModifier(new VF.Dot(), 0);
smo228580.addModifier(new VF.Dot(), 1);
smo228596v0ar.push(smo228580);
smo228596v0.addTickables(smo228596v0ar)
fmtsmo22859613.joinVoices([smo228596v0]);
const fmtsmo22974913 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo229749v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229749v0ar = [];
const smo229730 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229730.setAttribute('id', 'smo229730');
smo229749v0ar.push(smo229730);
const smo229731 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229731.setAttribute('id', 'smo229731');
smo229749v0ar.push(smo229731);
const smo229732 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229732.setAttribute('id', 'smo229732');
smo229749v0ar.push(smo229732);
const smo229733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo229733.setAttribute('id', 'smo229733');
smo229749v0ar.push(smo229733);
smo229749v0.addTickables(smo229749v0ar)
fmtsmo22974913.joinVoices([smo229749v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22724113.format([smo227241v0,smo228596v0,smo229749v0], 147);
const stavesmo227241 = new VF.Stave(429, 844, 161);
stavesmo227241.setAttribute('id', 'stavesmo227241');
stavesmo227241.setBegBarType(VF.Barline.type.NONE);
stavesmo227241.setContext(context);
stavesmo227241.draw();
smo227241v0.draw(context, stavesmo227241);
const stavesmo228596 = new VF.Stave(429, 967, 161);
stavesmo228596.setAttribute('id', 'stavesmo228596');
stavesmo228596.setBegBarType(VF.Barline.type.NONE);
stavesmo228596.setContext(context);
stavesmo228596.draw();
smo228596v0.draw(context, stavesmo228596);
const stavesmo229749 = new VF.Stave(429, 1057, 161);
stavesmo229749.setAttribute('id', 'stavesmo229749');
stavesmo229749.setBegBarType(VF.Barline.type.NONE);
stavesmo229749.setContext(context);
stavesmo229749.draw();
smo229749v0.draw(context, stavesmo229749);
const fmtsmo22726014 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo227260v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227260v0ar = [];
const smo227242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227242.setAttribute('id', 'smo227242');
smo227242.addModifier(new VF.Dot(), 0);
const smo227243 = new VF.Annotation('fern');
smo227243.setAttribute('id', 'smo227243');
smo227243.setFont('Merriweather', 12, 'normal');
smo227243.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227242.addModifier(smo227243);
smo227243.addClass('lyric lyric-0');
const smo227244 = new VF.Annotation('dem');
smo227244.setAttribute('id', 'smo227244');
smo227244.setFont('Merriweather', 12, 'normal');
smo227244.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227242.addModifier(smo227244);
smo227244.addClass('lyric lyric-1');
smo227260v0ar.push(smo227242);
smo227260v0.addTickables(smo227260v0ar)
fmtsmo22726014.joinVoices([smo227260v0]);
const fmtsmo22861314 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo228613v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228613v0ar = [];
const smo228597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/3/n","f#/4/n"]}'))
smo228597.setAttribute('id', 'smo228597');
smo228597.addModifier(new VF.Dot(), 0);
smo228597.addModifier(new VF.Dot(), 1);
smo228613v0ar.push(smo228597);
smo228613v0.addTickables(smo228613v0ar)
fmtsmo22861314.joinVoices([smo228613v0]);
const fmtsmo22977114 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo229771v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229771v0ar = [];
const smo229750 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo229750.setAttribute('id', 'smo229750');
smo229771v0ar.push(smo229750);
const smo229751 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo229751.setAttribute('id', 'smo229751');
smo229771v0ar.push(smo229751);
const smo229752 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo229752.setAttribute('id', 'smo229752');
smo229771v0ar.push(smo229752);
const smo229753 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo229753.setAttribute('id', 'smo229753');
smo229771v0ar.push(smo229753);
smo229771v0.addTickables(smo229771v0ar)
fmtsmo22977114.joinVoices([smo229771v0]);
const smo229771v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229771v1ar = [];
const smo229754 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["dn/4/r"]}'))
smo229754.setAttribute('id', 'smo229754');
smo229754.setStyle({ fillStyle: "#115511" });
smo229754.addModifier(new VF.Dot(), 0);
smo229771v1ar.push(smo229754);
const smo229755 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo229755.setAttribute('id', 'smo229755');
smo229755.setStyle({ fillStyle: "#115511" });
smo229755.addModifier(new VF.Dot(), 0);
smo229771v1ar.push(smo229755);
smo229771v1.addTickables(smo229771v1ar)
fmtsmo22977114.joinVoices([smo229771v1]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22726014.format([smo227260v0,smo228613v0,smo229771v0,smo229771v1], 144);
const stavesmo227260 = new VF.Stave(590, 844, 158);
stavesmo227260.setAttribute('id', 'stavesmo227260');
stavesmo227260.setBegBarType(VF.Barline.type.NONE);
stavesmo227260.setContext(context);
stavesmo227260.draw();
smo227260v0.draw(context, stavesmo227260);
const stavesmo228613 = new VF.Stave(590, 967, 158);
stavesmo228613.setAttribute('id', 'stavesmo228613');
stavesmo228613.setBegBarType(VF.Barline.type.NONE);
stavesmo228613.setContext(context);
stavesmo228613.draw();
smo228613v0.draw(context, stavesmo228613);
const stavesmo229771 = new VF.Stave(590, 1057, 158);
stavesmo229771.setAttribute('id', 'stavesmo229771');
stavesmo229771.setBegBarType(VF.Barline.type.NONE);
stavesmo229771.setContext(context);
stavesmo229771.draw();
smo229771v0.draw(context, stavesmo229771);
smo229771v1.draw(context, stavesmo229771);
const fmtsmo22729015 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo227290v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227290v0ar = [];
const smo227261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227261.setAttribute('id', 'smo227261');
const smo227262 = new VF.Annotation('-');
smo227262.setAttribute('id', 'smo227262');
smo227262.setFont('Merriweather', 12, 'normal');
smo227262.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227261.addModifier(smo227262);
smo227262.addClass('lyric lyric-0 lyric-hyphen');
smo227290v0ar.push(smo227261);
const smo227263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227263.setAttribute('id', 'smo227263');
const smo227264 = new VF.Annotation('er');
smo227264.setAttribute('id', 'smo227264');
smo227264.setFont('Merriweather', 12, 'normal');
smo227264.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227263.addModifier(smo227264);
smo227264.addClass('lyric lyric-0 lyric-hyphen');
const smo227265 = new VF.Annotation('tat');
smo227265.setAttribute('id', 'smo227265');
smo227265.setFont('Merriweather', 12, 'normal');
smo227265.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227263.addModifier(smo227265);
smo227265.addClass('lyric lyric-1');
smo227290v0ar.push(smo227263);
const smo227266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227266.setAttribute('id', 'smo227266');
const smo227267 = new VF.Annotation('kenn');
smo227267.setAttribute('id', 'smo227267');
smo227267.setFont('Merriweather', 12, 'normal');
smo227267.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227266.addModifier(smo227267);
smo227267.addClass('lyric lyric-0');
const smo227268 = new VF.Annotation('er');
smo227268.setAttribute('id', 'smo227268');
smo227268.setFont('Merriweather', 12, 'normal');
smo227268.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227266.addModifier(smo227268);
smo227268.addClass('lyric lyric-1');
smo227290v0ar.push(smo227266);
const smo227269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo227269.setAttribute('id', 'smo227269');
const smo227270 = new VF.Annotation('ich');
smo227270.setAttribute('id', 'smo227270');
smo227270.setFont('Merriweather', 12, 'normal');
smo227270.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227269.addModifier(smo227270);
smo227270.addClass('lyric lyric-0');
const smo227271 = new VF.Annotation('mir');
smo227271.setAttribute('id', 'smo227271');
smo227271.setFont('Merriweather', 12, 'normal');
smo227271.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227269.addModifier(smo227271);
smo227271.addClass('lyric lyric-1');
smo227290v0ar.push(smo227269);
const smo227272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo227272.setAttribute('id', 'smo227272');
const smo227273 = new VF.Annotation('ihn');
smo227273.setAttribute('id', 'smo227273');
smo227273.setFont('Merriweather', 12, 'normal');
smo227273.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227272.addModifier(smo227273);
smo227273.addClass('lyric lyric-0');
const smo227274 = new VF.Annotation('ge');
smo227274.setAttribute('id', 'smo227274');
smo227274.setFont('Merriweather', 12, 'normal');
smo227274.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227272.addModifier(smo227274);
smo227274.addClass('lyric lyric-1 lyric-hyphen');
smo227290v0ar.push(smo227272);
smo227290v0.addTickables(smo227290v0ar)
fmtsmo22729015.joinVoices([smo227290v0]);
const fmtsmo22863015 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo228630v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228630v0ar = [];
const smo228614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/3/n","f#/4/n"]}'))
smo228614.setAttribute('id', 'smo228614');
smo228614.addModifier(new VF.Dot(), 0);
smo228614.addModifier(new VF.Dot(), 1);
smo228630v0ar.push(smo228614);
smo228630v0.addTickables(smo228630v0ar)
fmtsmo22863015.joinVoices([smo228630v0]);
const fmtsmo22979315 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo229793v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229793v0ar = [];
const smo229772 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo229772.setAttribute('id', 'smo229772');
smo229793v0ar.push(smo229772);
const smo229773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo229773.setAttribute('id', 'smo229773');
smo229793v0ar.push(smo229773);
const smo229774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo229774.setAttribute('id', 'smo229774');
smo229793v0ar.push(smo229774);
const smo229775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo229775.setAttribute('id', 'smo229775');
smo229793v0ar.push(smo229775);
smo229793v0.addTickables(smo229793v0ar)
fmtsmo22979315.joinVoices([smo229793v0]);
const smo229793v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229793v1ar = [];
const smo229776 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo229776.setAttribute('id', 'smo229776');
smo229776.setStyle({ fillStyle: "#115511" });
smo229776.addModifier(new VF.Dot(), 0);
smo229793v1ar.push(smo229776);
const smo229777 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo229777.setAttribute('id', 'smo229777');
smo229777.setStyle({ fillStyle: "#115511" });
smo229777.addModifier(new VF.Dot(), 0);
smo229793v1ar.push(smo229777);
smo229793v1.addTickables(smo229793v1ar)
fmtsmo22979315.joinVoices([smo229793v1]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo236760 = smo227266.getStemDirection();
smo227266.setStemDirection(dirsmo236760);
smo227269.setStemDirection(dirsmo236760);
smo227272.setStemDirection(dirsmo236760);
const smo236760 = new VF.Beam([smo227266,smo227269,smo227272]);
 
// formatting measures in staff group smo230697
fmtsmo22729015.format([smo227290v0,smo228630v0,smo229793v0,smo229793v1], 265);
const stavesmo227290 = new VF.Stave(748, 844, 279);
stavesmo227290.setAttribute('id', 'stavesmo227290');
stavesmo227290.setBegBarType(VF.Barline.type.NONE);
stavesmo227290.setContext(context);
stavesmo227290.draw();
smo227290v0.draw(context, stavesmo227290);
smo236760.setContext(context);
smo236760.draw();
const stavesmo228630 = new VF.Stave(748, 967, 279);
stavesmo228630.setAttribute('id', 'stavesmo228630');
stavesmo228630.setBegBarType(VF.Barline.type.NONE);
stavesmo228630.setContext(context);
stavesmo228630.draw();
smo228630v0.draw(context, stavesmo228630);
const stavesmo229793 = new VF.Stave(748, 1057, 279);
stavesmo229793.setAttribute('id', 'stavesmo229793');
stavesmo229793.setBegBarType(VF.Barline.type.NONE);
stavesmo229793.setContext(context);
stavesmo229793.draw();
smo229793v0.draw(context, stavesmo229793);
smo229793v1.draw(context, stavesmo229793);
const fmtsmo22730916 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo227309v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227309v0ar = [];
const smo227291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227291.setAttribute('id', 'smo227291');
smo227291.addModifier(new VF.Dot(), 0);
const smo227292 = new VF.Annotation('schen');
smo227292.setAttribute('id', 'smo227292');
smo227292.setFont('Merriweather', 12, 'normal');
smo227292.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227291.addModifier(smo227292);
smo227292.addClass('lyric lyric-0');
const smo227293 = new VF.Annotation('stehn');
smo227293.setAttribute('id', 'smo227293');
smo227293.setFont('Merriweather', 12, 'normal');
smo227293.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227291.addModifier(smo227293);
smo227293.addClass('lyric lyric-1');
smo227309v0ar.push(smo227291);
smo227309v0.addTickables(smo227309v0ar)
fmtsmo22730916.joinVoices([smo227309v0]);
const fmtsmo22864716 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo228647v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228647v0ar = [];
const smo228631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo228631.setAttribute('id', 'smo228631');
smo228631.addModifier(new VF.Dot(), 0);
smo228631.addModifier(new VF.Dot(), 1);
smo228647v0ar.push(smo228631);
smo228647v0.addTickables(smo228647v0ar)
fmtsmo22864716.joinVoices([smo228647v0]);
const fmtsmo22981816 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo229818v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229818v0ar = [];
const smo229794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo229794.setAttribute('id', 'smo229794');
smo229818v0ar.push(smo229794);
const smo229795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo229795.setAttribute('id', 'smo229795');
smo229818v0ar.push(smo229795);
const smo229796 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo229796.setAttribute('id', 'smo229796');
smo229818v0ar.push(smo229796);
const smo229797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo229797.setAttribute('id', 'smo229797');
smo229818v0ar.push(smo229797);
smo229818v0.addTickables(smo229818v0ar)
fmtsmo22981816.joinVoices([smo229818v0]);
const smo229818v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229818v1ar = [];
const smo229798 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["eb/4/r"]}'))
smo229798.setAttribute('id', 'smo229798');
smo229798.setStyle({ fillStyle: "#115511" });
smo229818v1ar.push(smo229798);
const smo229799 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo229799.setAttribute('id', 'smo229799');
smo229799.setStyle({ fillStyle: "#115511" });
smo229818v1ar.push(smo229799);
const smo229800 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo229800.setAttribute('id', 'smo229800');
smo229800.setStyle({ fillStyle: "#115511" });
smo229818v1ar.push(smo229800);
const smo229801 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo229801.setAttribute('id', 'smo229801');
smo229801.setStyle({ fillStyle: "#115511" });
smo229818v1ar.push(smo229801);
const smo229802 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo229802.setAttribute('id', 'smo229802');
smo229802.setStyle({ fillStyle: "#115511" });
smo229818v1ar.push(smo229802);
smo229818v1.addTickables(smo229818v1ar)
fmtsmo22981816.joinVoices([smo229818v1]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo236771 = smo229800.getStemDirection();
smo229800.setStemDirection(dirsmo236771);
smo229801.setStemDirection(dirsmo236771);
smo229802.setStemDirection(dirsmo236771);
const smo236771 = new VF.Beam([smo229800,smo229801,smo229802]);
 
// formatting measures in staff group smo230697
fmtsmo22730916.format([smo227309v0,smo228647v0,smo229818v0,smo229818v1], 170);
const stavesmo227309 = new VF.Stave(1027, 844, 184);
stavesmo227309.setAttribute('id', 'stavesmo227309');
stavesmo227309.setBegBarType(VF.Barline.type.NONE);
stavesmo227309.setContext(context);
stavesmo227309.draw();
smo227309v0.draw(context, stavesmo227309);
const stavesmo228647 = new VF.Stave(1027, 967, 184);
stavesmo228647.setAttribute('id', 'stavesmo228647');
stavesmo228647.setBegBarType(VF.Barline.type.NONE);
stavesmo228647.setContext(context);
stavesmo228647.draw();
smo228647v0.draw(context, stavesmo228647);
const stavesmo229818 = new VF.Stave(1027, 1057, 184);
stavesmo229818.setAttribute('id', 'stavesmo229818');
stavesmo229818.setBegBarType(VF.Barline.type.NONE);
stavesmo229818.setContext(context);
stavesmo229818.draw();
smo229818v0.draw(context, stavesmo229818);
smo229818v1.draw(context, stavesmo229818);
smo236771.setContext(context);
smo236771.draw();
const rightsmo230697stavesmo2273092 = new VF.StaveConnector(stavesmo227309, stavesmo229818).setType(0);
rightsmo230697stavesmo2273092.setContext(context).draw();
const fmtsmo22733917 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo227339v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227339v0ar = [];
const smo227310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo227310.setAttribute('id', 'smo227310');
const smo227311 = new VF.Annotation('-');
smo227311.setAttribute('id', 'smo227311');
smo227311.setFont('Merriweather', 12, 'normal');
smo227311.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227310.addModifier(smo227311);
smo227311.addClass('lyric lyric-0 lyric-hyphen');
smo227339v0ar.push(smo227310);
const smo227312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo227312.setAttribute('id', 'smo227312');
const smo227313 = new VF.Annotation('den');
smo227313.setAttribute('id', 'smo227313');
smo227313.setFont('Merriweather', 12, 'normal');
smo227313.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227312.addModifier(smo227313);
smo227313.addClass('lyric lyric-0');
const smo227314 = new VF.Annotation('er');
smo227314.setAttribute('id', 'smo227314');
smo227314.setFont('Merriweather', 12, 'normal');
smo227314.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227312.addModifier(smo227314);
smo227314.addClass('lyric lyric-1');
smo227339v0ar.push(smo227312);
const smo227315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo227315.setAttribute('id', 'smo227315');
const smo227316 = new VF.Annotation('all\'');
smo227316.setAttribute('id', 'smo227316');
smo227316.setFont('Merriweather', 12, 'normal');
smo227316.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227315.addModifier(smo227316);
smo227316.addClass('lyric lyric-0');
const smo227317 = new VF.Annotation('splet');
smo227317.setAttribute('id', 'smo227317');
smo227317.setFont('Merriweather', 12, 'normal');
smo227317.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227315.addModifier(smo227317);
smo227317.addClass('lyric lyric-1');
smo227339v0ar.push(smo227315);
const smo227318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227318.setAttribute('id', 'smo227318');
const smo227319 = new VF.Annotation('sei');
smo227319.setAttribute('id', 'smo227319');
smo227319.setFont('Merriweather', 12, 'normal');
smo227319.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227318.addModifier(smo227319);
smo227319.addClass('lyric lyric-0 lyric-hyphen');
const smo227320 = new VF.Annotation('sei');
smo227320.setAttribute('id', 'smo227320');
smo227320.setFont('Merriweather', 12, 'normal');
smo227320.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227318.addModifier(smo227320);
smo227320.addClass('lyric lyric-1 lyric-hyphen');
smo227339v0ar.push(smo227318);
const smo227321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo227321.setAttribute('id', 'smo227321');
const smo227322 = new VF.Annotation('ne');
smo227322.setAttribute('id', 'smo227322');
smo227322.setFont('Merriweather', 12, 'normal');
smo227322.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227321.addModifier(smo227322);
smo227322.addClass('lyric lyric-0');
const smo227323 = new VF.Annotation('ne');
smo227323.setAttribute('id', 'smo227323');
smo227323.setFont('Merriweather', 12, 'normal');
smo227323.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227321.addModifier(smo227323);
smo227323.addClass('lyric lyric-1');
smo227339v0ar.push(smo227321);
smo227339v0.addTickables(smo227339v0ar)
fmtsmo22733917.joinVoices([smo227339v0]);
const fmtsmo22866617 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo228666v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228666v0ar = [];
const smo228648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228648.setAttribute('id', 'smo228648');
smo228648.addModifier(new VF.Dot(), 0);
smo228666v0ar.push(smo228648);
const smo228649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228649.setAttribute('id', 'smo228649');
smo228666v0ar.push(smo228649);
const smo228650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228650.setAttribute('id', 'smo228650');
smo228666v0ar.push(smo228650);
smo228666v0.addTickables(smo228666v0ar)
fmtsmo22866617.joinVoices([smo228666v0]);
const fmtsmo22983917 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo229839v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229839v0ar = [];
const smo229819 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo229819.setAttribute('id', 'smo229819');
smo229839v0ar.push(smo229819);
const smo229820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo229820.setAttribute('id', 'smo229820');
smo229839v0ar.push(smo229820);
const smo229821 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo229821.setAttribute('id', 'smo229821');
smo229839v0ar.push(smo229821);
const smo229822 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo229822.setAttribute('id', 'smo229822');
smo229839v0ar.push(smo229822);
smo229839v0.addTickables(smo229839v0ar)
fmtsmo22983917.joinVoices([smo229839v0]);
const smo229839v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229839v1ar = [];
const smo229823 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo229823.setAttribute('id', 'smo229823');
smo229823.setStyle({ fillStyle: "#115511" });
smo229823.addModifier(new VF.Dot(), 0);
smo229839v1ar.push(smo229823);
smo229839v1.addTickables(smo229839v1ar)
fmtsmo22983917.joinVoices([smo229839v1]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo236781 = smo227315.getStemDirection();
smo227315.setStemDirection(dirsmo236781);
smo227318.setStemDirection(dirsmo236781);
smo227321.setStemDirection(dirsmo236781);
const smo236781 = new VF.Beam([smo227315,smo227318,smo227321]);
 
// formatting measures in staff group smo230697
fmtsmo22733917.format([smo227339v0,smo228666v0,smo229839v0,smo229839v1], 245);
const stavesmo227339 = new VF.Stave(66, 1197, 319);
stavesmo227339.setAttribute('id', 'stavesmo227339');
stavesmo227339.setBegBarType(1);
stavesmo227339.addClef('treble');
const keysmo227339 = new VF.KeySignature('G');
keysmo227339.addToStave(stavesmo227339);
stavesmo227339.setContext(context);
stavesmo227339.draw();
smo227339v0.draw(context, stavesmo227339);
smo236781.setContext(context);
smo236781.draw();
const stavesmo228666 = new VF.Stave(66, 1309, 319);
stavesmo228666.setAttribute('id', 'stavesmo228666');
stavesmo228666.setBegBarType(1);
stavesmo228666.addClef('treble');
const keysmo228666 = new VF.KeySignature('G');
keysmo228666.addToStave(stavesmo228666);
stavesmo228666.setContext(context);
stavesmo228666.draw();
smo228666v0.draw(context, stavesmo228666);
const stavesmo229839 = new VF.Stave(66, 1449, 319);
stavesmo229839.setAttribute('id', 'stavesmo229839');
stavesmo229839.setBegBarType(1);
stavesmo229839.addClef('bass');
const keysmo229839 = new VF.KeySignature('G');
keysmo229839.addToStave(stavesmo229839);
stavesmo229839.setContext(context);
stavesmo229839.draw();
smo229839v0.draw(context, stavesmo229839);
smo229839v1.draw(context, stavesmo229839);
const leftsmo230697stavesmo2273392 = new VF.StaveConnector(stavesmo227339, stavesmo229839).setType(1);
leftsmo230697stavesmo2273392.setContext(context).draw();
const fmtsmo22736118 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo227361v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227361v0ar = [];
const smo227340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227340.setAttribute('id', 'smo227340');
smo227340.addModifier(new VF.Dot(), 0);
const smo227341 = new VF.Annotation('Lie');
smo227341.setAttribute('id', 'smo227341');
smo227341.setFont('Merriweather', 12, 'normal');
smo227341.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227340.addModifier(smo227341);
smo227341.addClass('lyric lyric-0 lyric-hyphen');
const smo227342 = new VF.Annotation('Lie');
smo227342.setAttribute('id', 'smo227342');
smo227342.setFont('Merriweather', 12, 'normal');
smo227342.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227340.addModifier(smo227342);
smo227342.addClass('lyric lyric-1 lyric-hyphen');
smo227361v0ar.push(smo227340);
const smo227343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo227343.setAttribute('id', 'smo227343');
smo227343.addModifier(new VF.Dot(), 0);
const smo227344 = new VF.Annotation('der');
smo227344.setAttribute('id', 'smo227344');
smo227344.setFont('Merriweather', 12, 'normal');
smo227344.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227343.addModifier(smo227344);
smo227344.addClass('lyric lyric-0');
const smo227345 = new VF.Annotation('der');
smo227345.setAttribute('id', 'smo227345');
smo227345.setFont('Merriweather', 12, 'normal');
smo227345.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227343.addModifier(smo227345);
smo227345.addClass('lyric lyric-1');
smo227361v0ar.push(smo227343);
smo227361v0.addTickables(smo227361v0ar)
fmtsmo22736118.joinVoices([smo227361v0]);
const fmtsmo22868418 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo228684v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228684v0ar = [];
const smo228667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228667.setAttribute('id', 'smo228667');
smo228667.addModifier(new VF.Dot(), 0);
smo228684v0ar.push(smo228667);
const smo228668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n","f#/4/n"]}'))
smo228668.setAttribute('id', 'smo228668');
smo228668.addModifier(new VF.Dot(), 0);
smo228668.addModifier(new VF.Dot(), 1);
smo228684v0ar.push(smo228668);
smo228684v0.addTickables(smo228684v0ar)
fmtsmo22868418.joinVoices([smo228684v0]);
const fmtsmo22985918 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo229859v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229859v0ar = [];
const smo229840 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo229840.setAttribute('id', 'smo229840');
smo229859v0ar.push(smo229840);
const smo229841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo229841.setAttribute('id', 'smo229841');
smo229859v0ar.push(smo229841);
const smo229842 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo229842.setAttribute('id', 'smo229842');
smo229859v0ar.push(smo229842);
const smo229843 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo229843.setAttribute('id', 'smo229843');
smo229859v0ar.push(smo229843);
smo229859v0.addTickables(smo229859v0ar)
fmtsmo22985918.joinVoices([smo229859v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
 
// formatting measures in staff group smo230697
fmtsmo22736118.format([smo227361v0,smo228684v0,smo229859v0], 130);
const stavesmo227361 = new VF.Stave(385, 1197, 144);
stavesmo227361.setAttribute('id', 'stavesmo227361');
stavesmo227361.setBegBarType(VF.Barline.type.NONE);
stavesmo227361.setContext(context);
stavesmo227361.draw();
smo227361v0.draw(context, stavesmo227361);
const stavesmo228684 = new VF.Stave(385, 1309, 144);
stavesmo228684.setAttribute('id', 'stavesmo228684');
stavesmo228684.setBegBarType(VF.Barline.type.NONE);
stavesmo228684.setContext(context);
stavesmo228684.draw();
smo228684v0.draw(context, stavesmo228684);
const stavesmo229859 = new VF.Stave(385, 1449, 144);
stavesmo229859.setAttribute('id', 'stavesmo229859');
stavesmo229859.setBegBarType(VF.Barline.type.NONE);
stavesmo229859.setContext(context);
stavesmo229859.draw();
smo229859v0.draw(context, stavesmo229859);
const fmtsmo22739119 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo227391v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227391v0ar = [];
const smo227362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo227362.setAttribute('id', 'smo227362');
const smo227363 = new VF.Annotation('-');
smo227363.setAttribute('id', 'smo227363');
smo227363.setFont('Merriweather', 12, 'normal');
smo227363.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227362.addModifier(smo227363);
smo227363.addClass('lyric lyric-0 lyric-hyphen');
smo227391v0ar.push(smo227362);
const smo227364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo227364.setAttribute('id', 'smo227364');
const smo227365 = new VF.Annotation('sie');
smo227365.setAttribute('id', 'smo227365');
smo227365.setFont('Merriweather', 12, 'normal');
smo227365.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227364.addModifier(smo227365);
smo227365.addClass('lyric lyric-0');
const smo227366 = new VF.Annotation('doch');
smo227366.setAttribute('id', 'smo227366');
smo227366.setFont('Merriweather', 12, 'normal');
smo227366.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227364.addModifier(smo227366);
smo227366.addClass('lyric lyric-1');
smo227391v0ar.push(smo227364);
const smo227367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo227367.setAttribute('id', 'smo227367');
const smo227368 = new VF.Annotation('sind');
smo227368.setAttribute('id', 'smo227368');
smo227368.setFont('Merriweather', 12, 'normal');
smo227368.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227367.addModifier(smo227368);
smo227368.addClass('lyric lyric-0');
const smo227369 = new VF.Annotation('im');
smo227369.setAttribute('id', 'smo227369');
smo227369.setFont('Merriweather', 12, 'normal');
smo227369.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227367.addModifier(smo227369);
smo227369.addClass('lyric lyric-1 lyric-hyphen');
smo227391v0ar.push(smo227367);
const smo227370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo227370.setAttribute('id', 'smo227370');
const smo227371 = new VF.Annotation('ir');
smo227371.setAttribute('id', 'smo227371');
smo227371.setFont('Merriweather', 12, 'normal');
smo227371.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227370.addModifier(smo227371);
smo227371.addClass('lyric lyric-0');
const smo227372 = new VF.Annotation('mer');
smo227372.setAttribute('id', 'smo227372');
smo227372.setFont('Merriweather', 12, 'normal');
smo227372.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227370.addModifier(smo227372);
smo227372.addClass('lyric lyric-1');
smo227391v0ar.push(smo227370);
const smo227373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo227373.setAttribute('id', 'smo227373');
const smo227374 = new VF.Annotation('e');
smo227374.setAttribute('id', 'smo227374');
smo227374.setFont('Merriweather', 12, 'normal');
smo227374.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227373.addModifier(smo227374);
smo227374.addClass('lyric lyric-0 lyric-hyphen');
const smo227375 = new VF.Annotation('für');
smo227375.setAttribute('id', 'smo227375');
smo227375.setFont('Merriweather', 12, 'normal');
smo227375.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227373.addModifier(smo227375);
smo227375.addClass('lyric lyric-1');
smo227391v0ar.push(smo227373);
smo227391v0.addTickables(smo227391v0ar)
fmtsmo22739119.joinVoices([smo227391v0]);
const fmtsmo22870219 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo228702v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228702v0ar = [];
const smo228685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228685.setAttribute('id', 'smo228685');
smo228685.addModifier(new VF.Dot(), 0);
smo228702v0ar.push(smo228685);
const smo228686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n","f#/4/n"]}'))
smo228686.setAttribute('id', 'smo228686');
smo228686.addModifier(new VF.Dot(), 0);
smo228686.addModifier(new VF.Dot(), 1);
smo228702v0ar.push(smo228686);
smo228702v0.addTickables(smo228702v0ar)
fmtsmo22870219.joinVoices([smo228702v0]);
const fmtsmo22987819 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo229878v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229878v0ar = [];
const smo229860 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo229860.setAttribute('id', 'smo229860');
smo229878v0ar.push(smo229860);
const smo229861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo229861.setAttribute('id', 'smo229861');
smo229861.addModifier(new VF.Dot(), 0);
smo229878v0ar.push(smo229861);
const smo229862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo229862.setAttribute('id', 'smo229862');
smo229878v0ar.push(smo229862);
smo229878v0.addTickables(smo229878v0ar)
fmtsmo22987819.joinVoices([smo229878v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo236794 = smo227367.getStemDirection();
smo227367.setStemDirection(dirsmo236794);
smo227370.setStemDirection(dirsmo236794);
smo227373.setStemDirection(dirsmo236794);
const smo236794 = new VF.Beam([smo227367,smo227370,smo227373]);
 
// formatting measures in staff group smo230697
fmtsmo22739119.format([smo227391v0,smo228702v0,smo229878v0], 272);
const stavesmo227391 = new VF.Stave(529, 1197, 286);
stavesmo227391.setAttribute('id', 'stavesmo227391');
stavesmo227391.setBegBarType(VF.Barline.type.NONE);
stavesmo227391.setContext(context);
stavesmo227391.draw();
smo227391v0.draw(context, stavesmo227391);
smo236794.setContext(context);
smo236794.draw();
const stavesmo228702 = new VF.Stave(529, 1309, 286);
stavesmo228702.setAttribute('id', 'stavesmo228702');
stavesmo228702.setBegBarType(VF.Barline.type.NONE);
stavesmo228702.setContext(context);
stavesmo228702.draw();
smo228702v0.draw(context, stavesmo228702);
const stavesmo229878 = new VF.Stave(529, 1449, 286);
stavesmo229878.setAttribute('id', 'stavesmo229878');
stavesmo229878.setBegBarType(VF.Barline.type.NONE);
stavesmo229878.setContext(context);
stavesmo229878.draw();
smo229878v0.draw(context, stavesmo229878);
const fmtsmo22741020 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo227410v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227410v0ar = [];
const smo227392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo227392.setAttribute('id', 'smo227392');
smo227392.addModifier(new VF.Dot(), 0);
const smo227393 = new VF.Annotation('kannt');
smo227393.setAttribute('id', 'smo227393');
smo227393.setFont('Merriweather', 12, 'normal');
smo227393.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227392.addModifier(smo227393);
smo227393.addClass('lyric lyric-0');
const smo227394 = new VF.Annotation('mich');
smo227394.setAttribute('id', 'smo227394');
smo227394.setFont('Merriweather', 12, 'normal');
smo227394.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227392.addModifier(smo227394);
smo227394.addClass('lyric lyric-1');
smo227410v0ar.push(smo227392);
smo227410v0.addTickables(smo227410v0ar)
fmtsmo22741020.joinVoices([smo227410v0]);
const fmtsmo22872320 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo228723v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228723v0ar = [];
const smo228703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo228703.setAttribute('id', 'smo228703');
smo228723v0ar.push(smo228703);
const smo228704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228704.setAttribute('id', 'smo228704');
smo228723v0ar.push(smo228704);
const smo228705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228705.setAttribute('id', 'smo228705');
smo228723v0ar.push(smo228705);
const smo228706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228706.setAttribute('id', 'smo228706');
smo228723v0ar.push(smo228706);
const smo228707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228707.setAttribute('id', 'smo228707');
smo228723v0ar.push(smo228707);
smo228723v0.addTickables(smo228723v0ar)
fmtsmo22872320.joinVoices([smo228723v0]);
const fmtsmo22989820 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo229898v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229898v0ar = [];
const smo229879 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo229879.setAttribute('id', 'smo229879');
smo229898v0ar.push(smo229879);
const smo229880 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo229880.setAttribute('id', 'smo229880');
smo229898v0ar.push(smo229880);
const smo229881 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo229881.setAttribute('id', 'smo229881');
smo229898v0ar.push(smo229881);
const smo229882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo229882.setAttribute('id', 'smo229882');
smo229882.addModifier(new VF.Dot(), 0);
smo229898v0ar.push(smo229882);
smo229898v0.addTickables(smo229898v0ar)
fmtsmo22989820.joinVoices([smo229898v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo236803 = smo228705.getStemDirection();
smo228705.setStemDirection(dirsmo236803);
smo228706.setStemDirection(dirsmo236803);
smo228707.setStemDirection(dirsmo236803);
const smo236803 = new VF.Beam([smo228705,smo228706,smo228707]);
const dirsmo236806 = smo229879.getStemDirection();
smo229879.setStemDirection(dirsmo236806);
smo229880.setStemDirection(dirsmo236806);
smo229881.setStemDirection(dirsmo236806);
const smo236806 = new VF.Beam([smo229879,smo229880,smo229881]);
 
// formatting measures in staff group smo230697
fmtsmo22741020.format([smo227410v0,smo228723v0,smo229898v0], 205);
const stavesmo227410 = new VF.Stave(815, 1197, 219);
stavesmo227410.setAttribute('id', 'stavesmo227410');
stavesmo227410.setBegBarType(VF.Barline.type.NONE);
stavesmo227410.setContext(context);
stavesmo227410.draw();
smo227410v0.draw(context, stavesmo227410);
const stavesmo228723 = new VF.Stave(815, 1309, 219);
stavesmo228723.setAttribute('id', 'stavesmo228723');
stavesmo228723.setBegBarType(VF.Barline.type.NONE);
stavesmo228723.setContext(context);
stavesmo228723.draw();
smo228723v0.draw(context, stavesmo228723);
smo236803.setContext(context);
smo236803.draw();
const stavesmo229898 = new VF.Stave(815, 1449, 219);
stavesmo229898.setAttribute('id', 'stavesmo229898');
stavesmo229898.setBegBarType(VF.Barline.type.NONE);
stavesmo229898.setContext(context);
stavesmo229898.draw();
smo229898v0.draw(context, stavesmo229898);
smo236806.setContext(context);
smo236806.draw();
const fmtsmo22743121 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo227431v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo227431v0ar = [];
const smo227411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo227411.setAttribute('id', 'smo227411');
smo227411.addModifier(new VF.Dot(), 0);
const smo227412 = new VF.Annotation('-');
smo227412.setAttribute('id', 'smo227412');
smo227412.setFont('Merriweather', 12, 'normal');
smo227412.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227411.addModifier(smo227412);
smo227412.addClass('lyric lyric-0 lyric-hyphen');
smo227431v0ar.push(smo227411);
const smo227413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo227413.setAttribute('id', 'smo227413');
smo227413.addModifier(new VF.Dot(), 0);
const smo227414 = new VF.Annotation('Er');
smo227414.setAttribute('id', 'smo227414');
smo227414.setFont('Merriweather', 12, 'normal');
smo227414.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227413.addModifier(smo227414);
smo227414.addClass('lyric lyric-0');
const smo227415 = new VF.Annotation('Mein');
smo227415.setAttribute('id', 'smo227415');
smo227415.setFont('Merriweather', 12, 'normal');
smo227415.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo227413.addModifier(smo227415);
smo227415.addClass('lyric lyric-1');
smo227431v0ar.push(smo227413);
smo227431v0.addTickables(smo227431v0ar)
fmtsmo22743121.joinVoices([smo227431v0]);
const fmtsmo22874221 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo228742v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228742v0ar = [];
const smo228724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo228724.setAttribute('id', 'smo228724');
smo228742v0ar.push(smo228724);
const smo228725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228725.setAttribute('id', 'smo228725');
smo228742v0ar.push(smo228725);
const smo228726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228726.setAttribute('id', 'smo228726');
smo228726.addModifier(new VF.Dot(), 0);
smo228742v0ar.push(smo228726);
smo228742v0.addTickables(smo228742v0ar)
fmtsmo22874221.joinVoices([smo228742v0]);
const fmtsmo22991921 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo229919v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229919v0ar = [];
const smo229899 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo229899.setAttribute('id', 'smo229899');
smo229919v0ar.push(smo229899);
const smo229900 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo229900.setAttribute('id', 'smo229900');
smo229919v0ar.push(smo229900);
const smo229901 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo229901.setAttribute('id', 'smo229901');
smo229919v0ar.push(smo229901);
const smo229902 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo229902.setAttribute('id', 'smo229902');
smo229919v0ar.push(smo229902);
const smo229903 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo229903.setAttribute('id', 'smo229903');
smo229919v0ar.push(smo229903);
smo229919v0.addTickables(smo229919v0ar)
fmtsmo22991921.joinVoices([smo229919v0]);
// create beam groups and tuplets for format grp smo230697 before formatting
const dirsmo236813 = smo229899.getStemDirection();
smo229899.setStemDirection(dirsmo236813);
smo229900.setStemDirection(dirsmo236813);
smo229901.setStemDirection(dirsmo236813);
const smo236813 = new VF.Beam([smo229899,smo229900,smo229901]);
 
// formatting measures in staff group smo230697
fmtsmo22743121.format([smo227431v0,smo228742v0,smo229919v0], 166);
const stavesmo227431 = new VF.Stave(1034, 1197, 180);
stavesmo227431.setAttribute('id', 'stavesmo227431');
stavesmo227431.setBegBarType(VF.Barline.type.NONE);
stavesmo227431.setContext(context);
stavesmo227431.draw();
smo227431v0.draw(context, stavesmo227431);
const stavesmo228742 = new VF.Stave(1034, 1309, 180);
stavesmo228742.setAttribute('id', 'stavesmo228742');
stavesmo228742.setBegBarType(VF.Barline.type.NONE);
stavesmo228742.setContext(context);
stavesmo228742.draw();
smo228742v0.draw(context, stavesmo228742);
const stavesmo229919 = new VF.Stave(1034, 1449, 180);
stavesmo229919.setAttribute('id', 'stavesmo229919');
stavesmo229919.setBegBarType(VF.Barline.type.NONE);
stavesmo229919.setContext(context);
stavesmo229919.draw();
smo229919v0.draw(context, stavesmo229919);
smo236813.setContext(context);
smo236813.draw();
const rightsmo230697stavesmo2274312 = new VF.StaveConnector(stavesmo227431, stavesmo229919).setType(0);
rightsmo230697stavesmo2274312.setContext(context).draw();
// modifier from 0-12-0-3 to 0-13-0-0
const smo237614 = new VF.StaveTie({ first_note: smo227200, last_note: smo227219, 
          firstNote: smo227200, lastNote: smo227219, first_indices: [0], last_indices: [0]});
smo237614.setContext(context).draw();
// modifier from 0-14-0-0 to 0-15-0-0
const smo237615 = new VF.StaveTie({ first_note: smo227242, last_note: smo227261, 
          firstNote: smo227242, lastNote: smo227261, first_indices: [0], last_indices: [0]});
smo237615.setContext(context).draw();
// modifier from 0-16-0-0 to 0-16-0-0
const smo237616 = new VF.StaveTie({ first_note: smo227291, last_note: smo227291, 
          firstNote: smo227291, lastNote: smo227291, first_indices: [0], last_indices: [0]});
smo237616.setContext(context).draw();
// modifier from 0-18-0-1 to 0-19-0-0
const smo237617 = new VF.StaveTie({ first_note: smo227343, last_note: smo227362, 
          firstNote: smo227343, lastNote: smo227362, first_indices: [0], last_indices: [0]});
smo237617.setContext(context).draw();
// modifier from 0-20-0-0 to 0-21-0-0
const smo237618 = new VF.StaveTie({ first_note: smo227392, last_note: smo227411, 
          firstNote: smo227392, lastNote: smo227411, first_indices: [0], last_indices: [0]});
smo237618.setContext(context).draw();
// modifier from 1-8-0-0 to 1-9-0-0
const smo237619 = new VF.StaveTie({ first_note: smo228492, last_note: smo228509, 
          firstNote: smo228492, lastNote: smo228509, first_indices: [0,1], last_indices: [0,1]});
smo237619.setContext(context).draw();
// modifier from 1-10-0-0 to 1-11-0-0
const smo237620 = new VF.StaveTie({ first_note: smo228526, last_note: smo228543, 
          firstNote: smo228526, lastNote: smo228543, first_indices: [0,1], last_indices: [0,1]});
smo237620.setContext(context).draw();
// modifier from 1-6-0-0 to 1-7-0-0
const smo237621 = new VF.StaveTie({ first_note: smo228458, last_note: null, 
          firstNote: smo228458, lastNote: null, first_indices: [0,1], last_indices: [0,1]});
smo237621.setContext(context).draw();
// modifier from 1-6-0-0 to 1-7-0-0
const smo237622 = new VF.StaveTie({ first_note: null, last_note: smo228475, 
          firstNote: null, lastNote: smo228475, first_indices: [0,1], last_indices: [0,1]});
smo237622.setContext(context).draw();
// modifier from 1-4-0-0 to 1-5-0-0
const smo237623 = new VF.StaveTie({ first_note: smo228423, last_note: smo228440, 
          firstNote: smo228423, lastNote: smo228440, first_indices: [0], last_indices: [0]});
smo237623.setContext(context).draw();
// modifier from 2-15-1-0 to 2-15-1-1
const smo237624 = new VF.Curve(smo229776, smo229777, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo237624.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo227051').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo227071').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227072').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo227074').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227075').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo227077').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo227078').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo227080').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227081').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo227099').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo227100').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo227120').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo227121').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo227123').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227124').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo227126').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227127').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo227129').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227130').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo227148').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227149').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo227152').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo227170').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227171').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo227174').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo227192').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227193').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo227195').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo227196').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo227198').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo227199').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo227201').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227202').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo227221').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo227225').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo227243').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo227244').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo227262').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo227264').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227265').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo227267').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo227268').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo227270').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo227271').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo227273').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo227274').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo227292').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo227293').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo227311').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo227313').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227314').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo227316').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227317').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo227319').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227320').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo227322').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo227323').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo227341').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227342').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo227345').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo227363').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo227365').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227366').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo227368').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227369').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo227371').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo227372').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo227374').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo227375').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo227393').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo227394').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo227412').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo227414').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo227415').setAttributeNS('', 'transform', 'translate(0 18)');
}
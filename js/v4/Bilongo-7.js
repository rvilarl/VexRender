// @@ Bilongo (Mandinga) p 8/17  by Rodriguez/Palmieri/Newman
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1632.0398513887887');
svg.setAttributeNS('', 'height', '1344');
svg.setAttributeNS('', 'viewBox', '0 0 3264 2688');
//
// create the musical objects
VF.setMusicFont("Leland","Bravura","Gonville","Custom");
const fmtsmo25424963 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo254249v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo254249v0ar = [];
const smo254224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo254224.setAttribute('id', 'smo254224');
smo254249v0ar.push(smo254224);
const smo254225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo254225.setAttribute('id', 'smo254225');
smo254249v0ar.push(smo254225);
const smo254226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo254226.setAttribute('id', 'smo254226');
const smo254227 = new VF.Annotation('Ki');
smo254227.setAttribute('id', 'smo254227');
smo254227.setFont('times', 12, 'normal');
smo254227.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254226.addModifier(smo254227);
smo254227.addClass('lyric lyric-0 lyric-hyphen');
smo254249v0ar.push(smo254226);
const smo254228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo254228.setAttribute('id', 'smo254228');
smo254249v0ar.push(smo254228);
const smo254229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo254229.setAttribute('id', 'smo254229');
const smo254230 = new VF.Annotation('ki');
smo254230.setAttribute('id', 'smo254230');
smo254230.setFont('times', 12, 'normal');
smo254230.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254229.addModifier(smo254230);
smo254230.addClass('lyric lyric-0 lyric-hyphen');
smo254249v0ar.push(smo254229);
const smo254231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo254231.setAttribute('id', 'smo254231');
const smo254232 = new VF.Annotation('ri');
smo254232.setAttribute('id', 'smo254232');
smo254232.setFont('times', 12, 'normal');
smo254232.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254231.addModifier(smo254232);
smo254232.addClass('lyric lyric-0');
smo254249v0ar.push(smo254231);
smo254249v0.addTickables(smo254249v0ar)
fmtsmo25424963.joinVoices([smo254249v0]);
const fmtsmo25724363 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo257243v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257243v0ar = [];
const smo257218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo257218.setAttribute('id', 'smo257218');
smo257243v0ar.push(smo257218);
const smo257219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo257219.setAttribute('id', 'smo257219');
smo257243v0ar.push(smo257219);
const smo257220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo257220.setAttribute('id', 'smo257220');
const smo257221 = new VF.Annotation('Ki');
smo257221.setAttribute('id', 'smo257221');
smo257221.setFont('times', 12, 'normal');
smo257221.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257220.addModifier(smo257221);
smo257221.addClass('lyric lyric-0 lyric-hyphen');
smo257243v0ar.push(smo257220);
const smo257222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo257222.setAttribute('id', 'smo257222');
smo257243v0ar.push(smo257222);
const smo257223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo257223.setAttribute('id', 'smo257223');
const smo257224 = new VF.Annotation('ki');
smo257224.setAttribute('id', 'smo257224');
smo257224.setFont('times', 12, 'normal');
smo257224.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257223.addModifier(smo257224);
smo257224.addClass('lyric lyric-0 lyric-hyphen');
smo257243v0ar.push(smo257223);
const smo257225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo257225.setAttribute('id', 'smo257225');
const smo257226 = new VF.Annotation('ri');
smo257226.setAttribute('id', 'smo257226');
smo257226.setFont('times', 12, 'normal');
smo257226.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257225.addModifier(smo257226);
smo257226.addClass('lyric lyric-0');
smo257243v0ar.push(smo257225);
smo257243v0.addTickables(smo257243v0ar)
fmtsmo25724363.joinVoices([smo257243v0]);
const fmtsmo26038663 = new VF.Formatter();
//
// voices and notes for stave 2 63
const smo260386v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260386v0ar = [];
const smo260361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo260361.setAttribute('id', 'smo260361');
smo260386v0ar.push(smo260361);
const smo260362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo260362.setAttribute('id', 'smo260362');
smo260386v0ar.push(smo260362);
const smo260363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo260363.setAttribute('id', 'smo260363');
const smo260364 = new VF.Annotation('Ki');
smo260364.setAttribute('id', 'smo260364');
smo260364.setFont('times', 12, 'normal');
smo260364.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260363.addModifier(smo260364);
smo260364.addClass('lyric lyric-0 lyric-hyphen');
smo260386v0ar.push(smo260363);
const smo260365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo260365.setAttribute('id', 'smo260365');
smo260386v0ar.push(smo260365);
const smo260366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo260366.setAttribute('id', 'smo260366');
const smo260367 = new VF.Annotation('ki');
smo260367.setAttribute('id', 'smo260367');
smo260367.setFont('times', 12, 'normal');
smo260367.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260366.addModifier(smo260367);
smo260367.addClass('lyric lyric-0 lyric-hyphen');
smo260386v0ar.push(smo260366);
const smo260368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo260368.setAttribute('id', 'smo260368');
const smo260369 = new VF.Annotation('ri');
smo260369.setAttribute('id', 'smo260369');
smo260369.setFont('times', 12, 'normal');
smo260369.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260368.addModifier(smo260369);
smo260369.addClass('lyric lyric-0');
smo260386v0ar.push(smo260368);
smo260386v0.addTickables(smo260386v0ar)
fmtsmo26038663.joinVoices([smo260386v0]);
const fmtsmo26350263 = new VF.Formatter();
//
// voices and notes for stave 3 63
const smo263502v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263502v0ar = [];
const smo263477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo263477.setAttribute('id', 'smo263477');
smo263502v0ar.push(smo263477);
const smo263478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo263478.setAttribute('id', 'smo263478');
smo263502v0ar.push(smo263478);
const smo263479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo263479.setAttribute('id', 'smo263479');
const smo263480 = new VF.Annotation('Ki');
smo263480.setAttribute('id', 'smo263480');
smo263480.setFont('times', 12, 'normal');
smo263480.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263479.addModifier(smo263480);
smo263480.addClass('lyric lyric-0 lyric-hyphen');
smo263502v0ar.push(smo263479);
const smo263481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo263481.setAttribute('id', 'smo263481');
smo263502v0ar.push(smo263481);
const smo263482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo263482.setAttribute('id', 'smo263482');
const smo263483 = new VF.Annotation('ki');
smo263483.setAttribute('id', 'smo263483');
smo263483.setFont('times', 12, 'normal');
smo263483.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263482.addModifier(smo263483);
smo263483.addClass('lyric lyric-0 lyric-hyphen');
smo263502v0ar.push(smo263482);
const smo263484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo263484.setAttribute('id', 'smo263484');
const smo263485 = new VF.Annotation('ri');
smo263485.setAttribute('id', 'smo263485');
smo263485.setFont('times', 12, 'normal');
smo263485.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263484.addModifier(smo263485);
smo263485.addClass('lyric lyric-0');
smo263502v0ar.push(smo263484);
smo263502v0.addTickables(smo263502v0ar)
fmtsmo26350263.joinVoices([smo263502v0]);
const fmtsmo26652163 = new VF.Formatter();
//
// voices and notes for stave 4 63
const smo266521v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266521v0ar = [];
const smo266496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266496.setAttribute('id', 'smo266496');
smo266521v0ar.push(smo266496);
const smo266497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266497.setAttribute('id', 'smo266497');
smo266521v0ar.push(smo266497);
const smo266498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266498.setAttribute('id', 'smo266498');
const smo266499 = new VF.Annotation('Ki');
smo266499.setAttribute('id', 'smo266499');
smo266499.setFont('times', 12, 'normal');
smo266499.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266498.addModifier(smo266499);
smo266499.addClass('lyric lyric-0 lyric-hyphen');
smo266521v0ar.push(smo266498);
const smo266500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266500.setAttribute('id', 'smo266500');
smo266521v0ar.push(smo266500);
const smo266501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266501.setAttribute('id', 'smo266501');
const smo266502 = new VF.Annotation('ki');
smo266502.setAttribute('id', 'smo266502');
smo266502.setFont('times', 12, 'normal');
smo266502.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266501.addModifier(smo266502);
smo266502.addClass('lyric lyric-0 lyric-hyphen');
smo266521v0ar.push(smo266501);
const smo266503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266503.setAttribute('id', 'smo266503');
const smo266504 = new VF.Annotation('ri');
smo266504.setAttribute('id', 'smo266504');
smo266504.setFont('times', 12, 'normal');
smo266504.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266503.addModifier(smo266504);
smo266504.addClass('lyric lyric-0');
smo266521v0ar.push(smo266503);
smo266521v0.addTickables(smo266521v0ar)
fmtsmo26652163.joinVoices([smo266521v0]);
const fmtsmo26962863 = new VF.Formatter();
//
// voices and notes for stave 5 63
const smo269628v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269628v0ar = [];
const smo269602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo269602.setAttribute('id', 'smo269602');
smo269628v0ar.push(smo269602);
const smo269603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo269603.setAttribute('id', 'smo269603');
smo269628v0ar.push(smo269603);
const smo269604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo269604.setAttribute('id', 'smo269604');
smo269628v0ar.push(smo269604);
const smo269605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo269605.setAttribute('id', 'smo269605');
const smo269606 = new VF.Annotation('Ki');
smo269606.setAttribute('id', 'smo269606');
smo269606.setFont('times', 12, 'normal');
smo269606.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269605.addModifier(smo269606);
smo269606.addClass('lyric lyric-0 lyric-hyphen');
smo269628v0ar.push(smo269605);
const smo269607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo269607.setAttribute('id', 'smo269607');
smo269628v0ar.push(smo269607);
const smo269608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo269608.setAttribute('id', 'smo269608');
const smo269609 = new VF.Annotation('ki');
smo269609.setAttribute('id', 'smo269609');
smo269609.setFont('times', 12, 'normal');
smo269609.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269608.addModifier(smo269609);
smo269609.addClass('lyric lyric-0 lyric-hyphen');
smo269628v0ar.push(smo269608);
const smo269610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo269610.setAttribute('id', 'smo269610');
const smo269611 = new VF.Annotation('ri');
smo269611.setAttribute('id', 'smo269611');
smo269611.setFont('times', 12, 'normal');
smo269611.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269610.addModifier(smo269611);
smo269611.addClass('lyric lyric-0');
smo269628v0ar.push(smo269610);
smo269628v0.addTickables(smo269628v0ar)
fmtsmo26962863.joinVoices([smo269628v0]);
const fmtsmo27274063 = new VF.Formatter();
//
// voices and notes for stave 6 63
const smo272740v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272740v0ar = [];
const smo272715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272715.setAttribute('id', 'smo272715');
smo272740v0ar.push(smo272715);
const smo272716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272716.setAttribute('id', 'smo272716');
smo272740v0ar.push(smo272716);
const smo272717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272717.setAttribute('id', 'smo272717');
const smo272718 = new VF.Annotation('Ki');
smo272718.setAttribute('id', 'smo272718');
smo272718.setFont('times', 12, 'normal');
smo272718.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272717.addModifier(smo272718);
smo272718.addClass('lyric lyric-0 lyric-hyphen');
smo272740v0ar.push(smo272717);
const smo272719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272719.setAttribute('id', 'smo272719');
smo272740v0ar.push(smo272719);
const smo272720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272720.setAttribute('id', 'smo272720');
const smo272721 = new VF.Annotation('ki');
smo272721.setAttribute('id', 'smo272721');
smo272721.setFont('times', 12, 'normal');
smo272721.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272720.addModifier(smo272721);
smo272721.addClass('lyric lyric-0 lyric-hyphen');
smo272740v0ar.push(smo272720);
const smo272722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272722.setAttribute('id', 'smo272722');
const smo272723 = new VF.Annotation('ri');
smo272723.setAttribute('id', 'smo272723');
smo272723.setFont('times', 12, 'normal');
smo272723.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272722.addModifier(smo272723);
smo272723.addClass('lyric lyric-0');
smo272740v0ar.push(smo272722);
smo272740v0.addTickables(smo272740v0ar)
fmtsmo27274063.joinVoices([smo272740v0]);
const fmtsmo27584963 = new VF.Formatter();
//
// voices and notes for stave 7 63
const smo275849v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275849v0ar = [];
const smo275824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275824.setAttribute('id', 'smo275824');
smo275849v0ar.push(smo275824);
const smo275825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275825.setAttribute('id', 'smo275825');
smo275849v0ar.push(smo275825);
const smo275826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo275826.setAttribute('id', 'smo275826');
const smo275827 = new VF.Annotation('Ki');
smo275827.setAttribute('id', 'smo275827');
smo275827.setFont('times', 12, 'normal');
smo275827.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275826.addModifier(smo275827);
smo275827.addClass('lyric lyric-0 lyric-hyphen');
smo275849v0ar.push(smo275826);
const smo275828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo275828.setAttribute('id', 'smo275828');
smo275849v0ar.push(smo275828);
const smo275829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo275829.setAttribute('id', 'smo275829');
const smo275830 = new VF.Annotation('ki');
smo275830.setAttribute('id', 'smo275830');
smo275830.setFont('times', 12, 'normal');
smo275830.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275829.addModifier(smo275830);
smo275830.addClass('lyric lyric-0 lyric-hyphen');
smo275849v0ar.push(smo275829);
const smo275831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo275831.setAttribute('id', 'smo275831');
const smo275832 = new VF.Annotation('ri');
smo275832.setAttribute('id', 'smo275832');
smo275832.setFont('times', 12, 'normal');
smo275832.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275831.addModifier(smo275832);
smo275832.addClass('lyric lyric-0');
smo275849v0ar.push(smo275831);
smo275849v0.addTickables(smo275849v0ar)
fmtsmo27584963.joinVoices([smo275849v0]);
const fmtsmo27893563 = new VF.Formatter();
//
// voices and notes for stave 8 63
const smo278935v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278935v0ar = [];
const smo278910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo278910.setAttribute('id', 'smo278910');
smo278935v0ar.push(smo278910);
const smo278911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo278911.setAttribute('id', 'smo278911');
smo278935v0ar.push(smo278911);
const smo278912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo278912.setAttribute('id', 'smo278912');
const smo278913 = new VF.Annotation('Ki');
smo278913.setAttribute('id', 'smo278913');
smo278913.setFont('times', 12, 'normal');
smo278913.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278912.addModifier(smo278913);
smo278913.addClass('lyric lyric-0 lyric-hyphen');
smo278935v0ar.push(smo278912);
const smo278914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo278914.setAttribute('id', 'smo278914');
smo278935v0ar.push(smo278914);
const smo278915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo278915.setAttribute('id', 'smo278915');
const smo278916 = new VF.Annotation('ki');
smo278916.setAttribute('id', 'smo278916');
smo278916.setFont('times', 12, 'normal');
smo278916.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278915.addModifier(smo278916);
smo278916.addClass('lyric lyric-0 lyric-hyphen');
smo278935v0ar.push(smo278915);
const smo278917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo278917.setAttribute('id', 'smo278917');
const smo278918 = new VF.Annotation('ri');
smo278918.setAttribute('id', 'smo278918');
smo278918.setFont('times', 12, 'normal');
smo278918.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278917.addModifier(smo278918);
smo278918.addClass('lyric lyric-0');
smo278935v0ar.push(smo278917);
smo278935v0.addTickables(smo278935v0ar)
fmtsmo27893563.joinVoices([smo278935v0]);
const fmtsmo28202463 = new VF.Formatter();
//
// voices and notes for stave 9 63
const smo282024v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo282024v0ar = [];
const smo281999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo281999.setAttribute('id', 'smo281999');
smo282024v0ar.push(smo281999);
const smo282000 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo282000.setAttribute('id', 'smo282000');
smo282024v0ar.push(smo282000);
const smo282001 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo282001.setAttribute('id', 'smo282001');
const smo282002 = new VF.Annotation('Ki');
smo282002.setAttribute('id', 'smo282002');
smo282002.setFont('times', 12, 'normal');
smo282002.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282001.addModifier(smo282002);
smo282002.addClass('lyric lyric-0 lyric-hyphen');
smo282024v0ar.push(smo282001);
const smo282003 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo282003.setAttribute('id', 'smo282003');
smo282024v0ar.push(smo282003);
const smo282004 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo282004.setAttribute('id', 'smo282004');
const smo282005 = new VF.Annotation('ki');
smo282005.setAttribute('id', 'smo282005');
smo282005.setFont('times', 12, 'normal');
smo282005.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282004.addModifier(smo282005);
smo282005.addClass('lyric lyric-0 lyric-hyphen');
smo282024v0ar.push(smo282004);
const smo282006 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo282006.setAttribute('id', 'smo282006');
const smo282007 = new VF.Annotation('ri');
smo282007.setAttribute('id', 'smo282007');
smo282007.setFont('times', 12, 'normal');
smo282007.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282006.addModifier(smo282007);
smo282007.addClass('lyric lyric-0');
smo282024v0ar.push(smo282006);
smo282024v0.addTickables(smo282024v0ar)
fmtsmo28202463.joinVoices([smo282024v0]);
const fmtsmo28506463 = new VF.Formatter();
//
// voices and notes for stave 10 63
const smo285064v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285064v0ar = [];
const smo285039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo285039.setAttribute('id', 'smo285039');
smo285064v0ar.push(smo285039);
const smo285040 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo285040.setAttribute('id', 'smo285040');
smo285064v0ar.push(smo285040);
const smo285041 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo285041.setAttribute('id', 'smo285041');
const smo285042 = new VF.Annotation('Ki');
smo285042.setAttribute('id', 'smo285042');
smo285042.setFont('times', 12, 'normal');
smo285042.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285041.addModifier(smo285042);
smo285042.addClass('lyric lyric-0 lyric-hyphen');
smo285064v0ar.push(smo285041);
const smo285043 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo285043.setAttribute('id', 'smo285043');
smo285064v0ar.push(smo285043);
const smo285044 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo285044.setAttribute('id', 'smo285044');
const smo285045 = new VF.Annotation('ki');
smo285045.setAttribute('id', 'smo285045');
smo285045.setFont('times', 12, 'normal');
smo285045.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285044.addModifier(smo285045);
smo285045.addClass('lyric lyric-0 lyric-hyphen');
smo285064v0ar.push(smo285044);
const smo285046 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo285046.setAttribute('id', 'smo285046');
const smo285047 = new VF.Annotation('ri');
smo285047.setAttribute('id', 'smo285047');
smo285047.setFont('times', 12, 'normal');
smo285047.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285046.addModifier(smo285047);
smo285047.addClass('lyric lyric-0');
smo285064v0ar.push(smo285046);
smo285064v0.addTickables(smo285064v0ar)
fmtsmo28506463.joinVoices([smo285064v0]);
const fmtsmo28811863 = new VF.Formatter();
//
// voices and notes for stave 11 63
const smo288118v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo288118v0ar = [];
const smo288093 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo288093.setAttribute('id', 'smo288093');
smo288118v0ar.push(smo288093);
const smo288094 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo288094.setAttribute('id', 'smo288094');
smo288118v0ar.push(smo288094);
const smo288095 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo288095.setAttribute('id', 'smo288095');
const smo288096 = new VF.Annotation('Ki');
smo288096.setAttribute('id', 'smo288096');
smo288096.setFont('times', 12, 'normal');
smo288096.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288095.addModifier(smo288096);
smo288096.addClass('lyric lyric-0 lyric-hyphen');
smo288118v0ar.push(smo288095);
const smo288097 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo288097.setAttribute('id', 'smo288097');
smo288118v0ar.push(smo288097);
const smo288098 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo288098.setAttribute('id', 'smo288098');
const smo288099 = new VF.Annotation('ki');
smo288099.setAttribute('id', 'smo288099');
smo288099.setFont('times', 12, 'normal');
smo288099.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288098.addModifier(smo288099);
smo288099.addClass('lyric lyric-0 lyric-hyphen');
smo288118v0ar.push(smo288098);
const smo288100 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo288100.setAttribute('id', 'smo288100');
const smo288101 = new VF.Annotation('ri');
smo288101.setAttribute('id', 'smo288101');
smo288101.setFont('times', 12, 'normal');
smo288101.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288100.addModifier(smo288101);
smo288101.addClass('lyric lyric-0');
smo288118v0ar.push(smo288100);
smo288118v0.addTickables(smo288118v0ar)
fmtsmo28811863.joinVoices([smo288118v0]);
const fmtsmo29116163 = new VF.Formatter();
//
// voices and notes for stave 12 63
const smo291161v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo291161v0ar = [];
const smo291136 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo291136.setAttribute('id', 'smo291136');
smo291161v0ar.push(smo291136);
const smo291137 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo291137.setAttribute('id', 'smo291137');
smo291161v0ar.push(smo291137);
const smo291138 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo291138.setAttribute('id', 'smo291138');
const smo291139 = new VF.Annotation('Ki');
smo291139.setAttribute('id', 'smo291139');
smo291139.setFont('times', 12, 'normal');
smo291139.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291138.addModifier(smo291139);
smo291139.addClass('lyric lyric-0 lyric-hyphen');
smo291161v0ar.push(smo291138);
const smo291140 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo291140.setAttribute('id', 'smo291140');
smo291161v0ar.push(smo291140);
const smo291141 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo291141.setAttribute('id', 'smo291141');
const smo291142 = new VF.Annotation('ki');
smo291142.setAttribute('id', 'smo291142');
smo291142.setFont('times', 12, 'normal');
smo291142.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291141.addModifier(smo291142);
smo291142.addClass('lyric lyric-0 lyric-hyphen');
smo291161v0ar.push(smo291141);
const smo291143 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo291143.setAttribute('id', 'smo291143');
const smo291144 = new VF.Annotation('ri');
smo291144.setAttribute('id', 'smo291144');
smo291144.setFont('times', 12, 'normal');
smo291144.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291143.addModifier(smo291144);
smo291144.addClass('lyric lyric-0');
smo291161v0ar.push(smo291143);
smo291161v0.addTickables(smo291161v0ar)
fmtsmo29116163.joinVoices([smo291161v0]);
const fmtsmo29437763 = new VF.Formatter();
//
// voices and notes for stave 13 63
const smo294377v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294377v0ar = [];
const smo294354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo294354.setAttribute('id', 'smo294354');
smo294377v0ar.push(smo294354);
const smo294355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo294355.setAttribute('id', 'smo294355');
smo294377v0ar.push(smo294355);
const smo294356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo294356.setAttribute('id', 'smo294356');
smo294377v0ar.push(smo294356);
const smo294357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo294357.setAttribute('id', 'smo294357');
const smo2943570acc = new VF.Accidental('#');
smo294357.addModifier(smo2943570acc, 0);
smo294377v0ar.push(smo294357);
const smo294358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo294358.setAttribute('id', 'smo294358');
smo294377v0ar.push(smo294358);
const smo294359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo294359.setAttribute('id', 'smo294359');
smo294377v0ar.push(smo294359);
const smo294360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo294360.setAttribute('id', 'smo294360');
smo294377v0ar.push(smo294360);
smo294377v0.addTickables(smo294377v0ar)
fmtsmo29437763.joinVoices([smo294377v0]);
const fmtsmo29759063 = new VF.Formatter();
//
// voices and notes for stave 14 63
const smo297590v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297590v0ar = [];
const smo297567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","ab/4/n","bb/4/n","dn/5/n"]}'))
smo297567.setAttribute('id', 'smo297567');
const smo2975671acc = new VF.Accidental('b');
smo297567.addModifier(smo2975671acc, 1);
smo297590v0ar.push(smo297567);
const smo297568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo297568.setAttribute('id', 'smo297568');
smo297590v0ar.push(smo297568);
const smo297569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo297569.setAttribute('id', 'smo297569');
smo297590v0ar.push(smo297569);
const smo297570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo297570.setAttribute('id', 'smo297570');
const smo2975700acc = new VF.Accidental('#');
smo297570.addModifier(smo2975700acc, 0);
const smo2975701acc = new VF.Accidental('n');
smo297570.addModifier(smo2975701acc, 1);
smo297590v0ar.push(smo297570);
const smo297571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo297571.setAttribute('id', 'smo297571');
smo297590v0ar.push(smo297571);
const smo297572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo297572.setAttribute('id', 'smo297572');
smo297590v0ar.push(smo297572);
const smo297573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo297573.setAttribute('id', 'smo297573');
smo297590v0ar.push(smo297573);
smo297590v0.addTickables(smo297590v0ar)
fmtsmo29759063.joinVoices([smo297590v0]);
const fmtsmo30078563 = new VF.Formatter();
//
// voices and notes for stave 15 63
const smo300785v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300785v0ar = [];
const smo300762 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo300762.setAttribute('id', 'smo300762');
smo300785v0ar.push(smo300762);
const smo300763 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo300763.setAttribute('id', 'smo300763');
smo300785v0ar.push(smo300763);
const smo300764 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo300764.setAttribute('id', 'smo300764');
smo300785v0ar.push(smo300764);
const smo300765 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo300765.setAttribute('id', 'smo300765');
smo300785v0ar.push(smo300765);
const smo300766 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo300766.setAttribute('id', 'smo300766');
smo300785v0ar.push(smo300766);
const smo300767 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo300767.setAttribute('id', 'smo300767');
smo300785v0ar.push(smo300767);
const smo300768 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo300768.setAttribute('id', 'smo300768');
smo300785v0ar.push(smo300768);
smo300785v0.addTickables(smo300785v0ar)
fmtsmo30078563.joinVoices([smo300785v0]);
const fmtsmo30390463 = new VF.Formatter();
//
// voices and notes for stave 16 63
const smo303904v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303904v0ar = [];
const smo303885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo303885.setAttribute('id', 'smo303885');
smo303904v0ar.push(smo303885);
const smo303886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo303886.setAttribute('id', 'smo303886');
smo303904v0ar.push(smo303886);
const smo303887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo303887.setAttribute('id', 'smo303887');
smo303904v0ar.push(smo303887);
smo303904v0.addTickables(smo303904v0ar)
fmtsmo30390463.joinVoices([smo303904v0]);
const fmtsmo30708563 = new VF.Formatter();
//
// voices and notes for stave 17 63
const smo307085v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307085v0ar = [];
const smo307065 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo307065.setAttribute('id', 'smo307065');
const smo3070650acc = new VF.Accidental('n');
smo307065.addModifier(smo3070650acc, 0);
smo307065.addModifier(new VF.Dot(), 0);
smo307085v0ar.push(smo307065);
const smo307066 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo307066.setAttribute('id', 'smo307066');
smo307085v0ar.push(smo307066);
const smo307067 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo307067.setAttribute('id', 'smo307067');
smo307085v0ar.push(smo307067);
const smo307068 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo307068.setAttribute('id', 'smo307068');
smo307085v0ar.push(smo307068);
smo307085v0.addTickables(smo307085v0ar)
fmtsmo30708563.joinVoices([smo307085v0]);
// create beam groups and tuplets for format grp smo308886 before formatting
const dirsmo400157 = smo254226.getStemDirection();
smo254226.setStemDirection(dirsmo400157);
smo254228.setStemDirection(dirsmo400157);
const smo400157 = new VF.Beam([smo254226,smo254228]);
const dirsmo400160 = smo257220.getStemDirection();
smo257220.setStemDirection(dirsmo400160);
smo257222.setStemDirection(dirsmo400160);
const smo400160 = new VF.Beam([smo257220,smo257222]);
const dirsmo400163 = smo260363.getStemDirection();
smo260363.setStemDirection(dirsmo400163);
smo260365.setStemDirection(dirsmo400163);
const smo400163 = new VF.Beam([smo260363,smo260365]);
const dirsmo400166 = smo263479.getStemDirection();
smo263479.setStemDirection(dirsmo400166);
smo263481.setStemDirection(dirsmo400166);
const smo400166 = new VF.Beam([smo263479,smo263481]);
const dirsmo400169 = smo266498.getStemDirection();
smo266498.setStemDirection(dirsmo400169);
smo266500.setStemDirection(dirsmo400169);
const smo400169 = new VF.Beam([smo266498,smo266500]);
 
// formatting measures in staff group smo308886
fmtsmo25424963.format([smo254249v0,smo257243v0,smo260386v0,smo263502v0,smo266521v0], 261);
const stavesmo254249 = new VF.Stave(159, 210, 347);
stavesmo254249.setAttribute('id', 'stavesmo254249');
stavesmo254249.setBegBarType(1);
stavesmo254249.setSection('D', 0);
stavesmo254249.addClef('treble');
const keysmo254249 = new VF.KeySignature('D');
keysmo254249.addToStave(stavesmo254249);
stavesmo254249.setContext(context);
stavesmo254249.draw();
smo254249v0.draw(context, stavesmo254249);
smo400157.setContext(context);
smo400157.draw();
const stavesmo257243 = new VF.Stave(159, 316, 347);
stavesmo257243.setAttribute('id', 'stavesmo257243');
stavesmo257243.setBegBarType(1);
stavesmo257243.addClef('treble');
const keysmo257243 = new VF.KeySignature('D');
keysmo257243.addToStave(stavesmo257243);
stavesmo257243.setContext(context);
stavesmo257243.draw();
smo257243v0.draw(context, stavesmo257243);
smo400160.setContext(context);
smo400160.draw();
const stavesmo260386 = new VF.Stave(159, 437, 347);
stavesmo260386.setAttribute('id', 'stavesmo260386');
stavesmo260386.setBegBarType(1);
stavesmo260386.addClef('treble');
const keysmo260386 = new VF.KeySignature('G');
keysmo260386.addToStave(stavesmo260386);
stavesmo260386.setContext(context);
stavesmo260386.draw();
smo260386v0.draw(context, stavesmo260386);
smo400163.setContext(context);
smo400163.draw();
const stavesmo263502 = new VF.Stave(159, 553, 347);
stavesmo263502.setAttribute('id', 'stavesmo263502');
stavesmo263502.setBegBarType(1);
stavesmo263502.addClef('treble');
const keysmo263502 = new VF.KeySignature('G');
keysmo263502.addToStave(stavesmo263502);
stavesmo263502.setContext(context);
stavesmo263502.draw();
smo263502v0.draw(context, stavesmo263502);
smo400166.setContext(context);
smo400166.draw();
const stavesmo266521 = new VF.Stave(159, 659, 347);
stavesmo266521.setAttribute('id', 'stavesmo266521');
stavesmo266521.setBegBarType(1);
stavesmo266521.addClef('treble');
const keysmo266521 = new VF.KeySignature('D');
keysmo266521.addToStave(stavesmo266521);
stavesmo266521.setContext(context);
stavesmo266521.draw();
smo266521v0.draw(context, stavesmo266521);
smo400169.setContext(context);
smo400169.draw();
// create beam groups and tuplets for format grp smo308888 before formatting
const dirsmo400172 = smo269602.getStemDirection();
smo269602.setStemDirection(dirsmo400172);
smo269603.setStemDirection(dirsmo400172);
const smo400172 = new VF.Beam([smo269602,smo269603]);
const dirsmo400173 = smo269605.getStemDirection();
smo269605.setStemDirection(dirsmo400173);
smo269607.setStemDirection(dirsmo400173);
const smo400173 = new VF.Beam([smo269605,smo269607]);
const dirsmo400176 = smo272717.getStemDirection();
smo272717.setStemDirection(dirsmo400176);
smo272719.setStemDirection(dirsmo400176);
const smo400176 = new VF.Beam([smo272717,smo272719]);
const dirsmo400179 = smo275826.getStemDirection();
smo275826.setStemDirection(dirsmo400179);
smo275828.setStemDirection(dirsmo400179);
const smo400179 = new VF.Beam([smo275826,smo275828]);
const dirsmo400182 = smo278912.getStemDirection();
smo278912.setStemDirection(dirsmo400182);
smo278914.setStemDirection(dirsmo400182);
const smo400182 = new VF.Beam([smo278912,smo278914]);
 
// formatting measures in staff group smo308888
fmtsmo26962863.format([smo269628v0,smo272740v0,smo275849v0,smo278935v0], 274);
const stavesmo269628 = new VF.Stave(159, 780, 347);
stavesmo269628.setAttribute('id', 'stavesmo269628');
stavesmo269628.setBegBarType(1);
stavesmo269628.addClef('treble');
const keysmo269628 = new VF.KeySignature('G');
keysmo269628.addToStave(stavesmo269628);
stavesmo269628.setContext(context);
stavesmo269628.draw();
smo269628v0.draw(context, stavesmo269628);
smo400172.setContext(context);
smo400172.draw();
smo400173.setContext(context);
smo400173.draw();
const stavesmo272740 = new VF.Stave(159, 896, 347);
stavesmo272740.setAttribute('id', 'stavesmo272740');
stavesmo272740.setBegBarType(1);
stavesmo272740.addClef('treble');
const keysmo272740 = new VF.KeySignature('G');
keysmo272740.addToStave(stavesmo272740);
stavesmo272740.setContext(context);
stavesmo272740.draw();
smo272740v0.draw(context, stavesmo272740);
smo400176.setContext(context);
smo400176.draw();
const stavesmo275849 = new VF.Stave(159, 1012, 347);
stavesmo275849.setAttribute('id', 'stavesmo275849');
stavesmo275849.setBegBarType(1);
stavesmo275849.addClef('treble');
const keysmo275849 = new VF.KeySignature('G');
keysmo275849.addToStave(stavesmo275849);
stavesmo275849.setContext(context);
stavesmo275849.draw();
smo275849v0.draw(context, stavesmo275849);
smo400179.setContext(context);
smo400179.draw();
const stavesmo278935 = new VF.Stave(159, 1128, 347);
stavesmo278935.setAttribute('id', 'stavesmo278935');
stavesmo278935.setBegBarType(1);
stavesmo278935.addClef('treble');
const keysmo278935 = new VF.KeySignature('G');
keysmo278935.addToStave(stavesmo278935);
stavesmo278935.setContext(context);
stavesmo278935.draw();
smo278935v0.draw(context, stavesmo278935);
smo400182.setContext(context);
smo400182.draw();
// create beam groups and tuplets for format grp smo308890 before formatting
const dirsmo400185 = smo282001.getStemDirection();
smo282001.setStemDirection(dirsmo400185);
smo282003.setStemDirection(dirsmo400185);
const smo400185 = new VF.Beam([smo282001,smo282003]);
const dirsmo400188 = smo285041.getStemDirection();
smo285041.setStemDirection(dirsmo400188);
smo285043.setStemDirection(dirsmo400188);
const smo400188 = new VF.Beam([smo285041,smo285043]);
const dirsmo400191 = smo288095.getStemDirection();
smo288095.setStemDirection(dirsmo400191);
smo288097.setStemDirection(dirsmo400191);
const smo400191 = new VF.Beam([smo288095,smo288097]);
const dirsmo400194 = smo291138.getStemDirection();
smo291138.setStemDirection(dirsmo400194);
smo291140.setStemDirection(dirsmo400194);
const smo400194 = new VF.Beam([smo291138,smo291140]);
 
// formatting measures in staff group smo308890
fmtsmo28202463.format([smo282024v0,smo285064v0,smo288118v0,smo291161v0], 274);
const stavesmo282024 = new VF.Stave(159, 1264, 347);
stavesmo282024.setAttribute('id', 'stavesmo282024');
stavesmo282024.setBegBarType(1);
stavesmo282024.addClef('bass');
const keysmo282024 = new VF.KeySignature('F');
keysmo282024.addToStave(stavesmo282024);
stavesmo282024.setContext(context);
stavesmo282024.draw();
smo282024v0.draw(context, stavesmo282024);
smo400185.setContext(context);
smo400185.draw();
const stavesmo285064 = new VF.Stave(159, 1400, 347);
stavesmo285064.setAttribute('id', 'stavesmo285064');
stavesmo285064.setBegBarType(1);
stavesmo285064.addClef('bass');
const keysmo285064 = new VF.KeySignature('F');
keysmo285064.addToStave(stavesmo285064);
stavesmo285064.setContext(context);
stavesmo285064.draw();
smo285064v0.draw(context, stavesmo285064);
smo400188.setContext(context);
smo400188.draw();
const stavesmo288118 = new VF.Stave(159, 1536, 347);
stavesmo288118.setAttribute('id', 'stavesmo288118');
stavesmo288118.setBegBarType(1);
stavesmo288118.addClef('bass');
const keysmo288118 = new VF.KeySignature('F');
keysmo288118.addToStave(stavesmo288118);
stavesmo288118.setContext(context);
stavesmo288118.draw();
smo288118v0.draw(context, stavesmo288118);
smo400191.setContext(context);
smo400191.draw();
const stavesmo291161 = new VF.Stave(159, 1672, 347);
stavesmo291161.setAttribute('id', 'stavesmo291161');
stavesmo291161.setBegBarType(1);
stavesmo291161.addClef('bass');
const keysmo291161 = new VF.KeySignature('F');
keysmo291161.addToStave(stavesmo291161);
stavesmo291161.setContext(context);
stavesmo291161.draw();
smo291161v0.draw(context, stavesmo291161);
smo400194.setContext(context);
smo400194.draw();
// create beam groups and tuplets for format grp smo296209 before formatting
const dirsmo400197 = smo294357.getStemDirection();
smo294357.setStemDirection(dirsmo400197);
smo294358.setStemDirection(dirsmo400197);
const smo400197 = new VF.Beam([smo294357,smo294358]);
 
// formatting measures in staff group smo296209
fmtsmo29437763.format([smo294377v0], 276);
const stavesmo294377 = new VF.Stave(159, 1818, 347);
stavesmo294377.setAttribute('id', 'stavesmo294377');
stavesmo294377.setBegBarType(1);
stavesmo294377.addClef('treble');
const keysmo294377 = new VF.KeySignature('F');
keysmo294377.addToStave(stavesmo294377);
stavesmo294377.setContext(context);
stavesmo294377.draw();
smo294377v0.draw(context, stavesmo294377);
smo400197.setContext(context);
smo400197.draw();
// create beam groups and tuplets for format grp smo308884 before formatting
const dirsmo400200 = smo297570.getStemDirection();
smo297570.setStemDirection(dirsmo400200);
smo297571.setStemDirection(dirsmo400200);
const smo400200 = new VF.Beam([smo297570,smo297571]);
const dirsmo400203 = smo300765.getStemDirection();
smo300765.setStemDirection(dirsmo400203);
smo300766.setStemDirection(dirsmo400203);
const smo400203 = new VF.Beam([smo300765,smo300766]);
 
// formatting measures in staff group smo308884
fmtsmo29759063.format([smo297590v0,smo300785v0], 276);
const stavesmo297590 = new VF.Stave(159, 1924, 347);
stavesmo297590.setAttribute('id', 'stavesmo297590');
stavesmo297590.setBegBarType(1);
stavesmo297590.addClef('treble');
const keysmo297590 = new VF.KeySignature('F');
keysmo297590.addToStave(stavesmo297590);
stavesmo297590.setContext(context);
stavesmo297590.draw();
smo297590v0.draw(context, stavesmo297590);
smo400200.setContext(context);
smo400200.draw();
const stavesmo300785 = new VF.Stave(159, 2010, 347);
stavesmo300785.setAttribute('id', 'stavesmo300785');
stavesmo300785.setBegBarType(1);
stavesmo300785.addClef('bass');
const keysmo300785 = new VF.KeySignature('F');
keysmo300785.addToStave(stavesmo300785);
stavesmo300785.setContext(context);
stavesmo300785.draw();
smo300785v0.draw(context, stavesmo300785);
smo400203.setContext(context);
smo400203.draw();
// create beam groups and tuplets for format grp smo305722 before formatting
 
// formatting measures in staff group smo305722
fmtsmo30390463.format([smo303904v0], 274);
const stavesmo303904 = new VF.Stave(159, 2081, 347);
stavesmo303904.setAttribute('id', 'stavesmo303904');
stavesmo303904.setBegBarType(1);
stavesmo303904.addClef('bass');
const keysmo303904 = new VF.KeySignature('F');
keysmo303904.addToStave(stavesmo303904);
stavesmo303904.setContext(context);
stavesmo303904.draw();
smo303904v0.draw(context, stavesmo303904);
// create beam groups and tuplets for format grp smo308878 before formatting
 
// formatting measures in staff group smo308878
fmtsmo30708563.format([smo307085v0], 282);
const stavesmo307085 = new VF.Stave(159, 2152, 347);
stavesmo307085.setAttribute('id', 'stavesmo307085');
stavesmo307085.setBegBarType(1);
stavesmo307085.addClef('percussion');
const keysmo307085 = new VF.KeySignature('F');
keysmo307085.addToStave(stavesmo307085);
stavesmo307085.setContext(context);
stavesmo307085.draw();
smo307085v0.draw(context, stavesmo307085);
const leftsmo308878stavesmo25424917 = new VF.StaveConnector(stavesmo254249, stavesmo266521).setType(3);
leftsmo308878stavesmo25424917.setContext(context).draw();
const leftsmo308878stavesmo26962817 = new VF.StaveConnector(stavesmo269628, stavesmo278935).setType(3);
leftsmo308878stavesmo26962817.setContext(context).draw();
const leftsmo308878stavesmo28202417 = new VF.StaveConnector(stavesmo282024, stavesmo291161).setType(1);
leftsmo308878stavesmo28202417.setContext(context).draw();
const leftsmo308878stavesmo29759017 = new VF.StaveConnector(stavesmo297590, stavesmo300785).setType(3);
leftsmo308878stavesmo29759017.setContext(context).draw();
const fmtsmo25427464 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo254274v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo254274v0ar = [];
const smo254250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo254250.setAttribute('id', 'smo254250');
const smo254251 = new VF.Annotation('bun');
smo254251.setAttribute('id', 'smo254251');
smo254251.setFont('times', 12, 'normal');
smo254251.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254250.addModifier(smo254251);
smo254251.addClass('lyric lyric-0');
smo254274v0ar.push(smo254250);
const smo254252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo254252.setAttribute('id', 'smo254252');
smo254274v0ar.push(smo254252);
const smo254253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo254253.setAttribute('id', 'smo254253');
smo254274v0ar.push(smo254253);
const smo254254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo254254.setAttribute('id', 'smo254254');
const smo254255 = new VF.Annotation('Man');
smo254255.setAttribute('id', 'smo254255');
smo254255.setFont('times', 12, 'normal');
smo254255.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254254.addModifier(smo254255);
smo254255.addClass('lyric lyric-0 lyric-hyphen');
smo254274v0ar.push(smo254254);
const smo254256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo254256.setAttribute('id', 'smo254256');
smo254274v0ar.push(smo254256);
const smo254257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo254257.setAttribute('id', 'smo254257');
const smo2542570acc = new VF.Accidental('n');
smo254257.addModifier(smo2542570acc, 0);
const smo254258 = new VF.Annotation('ding');
smo254258.setAttribute('id', 'smo254258');
smo254258.setFont('times', 12, 'normal');
smo254258.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254257.addModifier(smo254258);
smo254258.addClass('lyric lyric-0 lyric-hyphen');
smo254274v0ar.push(smo254257);
smo254274v0.addTickables(smo254274v0ar)
fmtsmo25427464.joinVoices([smo254274v0]);
const fmtsmo25726864 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo257268v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257268v0ar = [];
const smo257244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo257244.setAttribute('id', 'smo257244');
const smo257245 = new VF.Annotation('bun');
smo257245.setAttribute('id', 'smo257245');
smo257245.setFont('times', 12, 'normal');
smo257245.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257244.addModifier(smo257245);
smo257245.addClass('lyric lyric-0');
smo257268v0ar.push(smo257244);
const smo257246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo257246.setAttribute('id', 'smo257246');
smo257268v0ar.push(smo257246);
const smo257247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo257247.setAttribute('id', 'smo257247');
smo257268v0ar.push(smo257247);
const smo257248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo257248.setAttribute('id', 'smo257248');
const smo257249 = new VF.Annotation('Man');
smo257249.setAttribute('id', 'smo257249');
smo257249.setFont('times', 12, 'normal');
smo257249.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257248.addModifier(smo257249);
smo257249.addClass('lyric lyric-0 lyric-hyphen');
smo257268v0ar.push(smo257248);
const smo257250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo257250.setAttribute('id', 'smo257250');
smo257268v0ar.push(smo257250);
const smo257251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo257251.setAttribute('id', 'smo257251');
const smo2572510acc = new VF.Accidental('n');
smo257251.addModifier(smo2572510acc, 0);
const smo257252 = new VF.Annotation('ding');
smo257252.setAttribute('id', 'smo257252');
smo257252.setFont('times', 12, 'normal');
smo257252.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257251.addModifier(smo257252);
smo257252.addClass('lyric lyric-0 lyric-hyphen');
smo257268v0ar.push(smo257251);
smo257268v0.addTickables(smo257268v0ar)
fmtsmo25726864.joinVoices([smo257268v0]);
const fmtsmo26041164 = new VF.Formatter();
//
// voices and notes for stave 2 64
const smo260411v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260411v0ar = [];
const smo260387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo260387.setAttribute('id', 'smo260387');
const smo260388 = new VF.Annotation('bun');
smo260388.setAttribute('id', 'smo260388');
smo260388.setFont('times', 12, 'normal');
smo260388.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260387.addModifier(smo260388);
smo260388.addClass('lyric lyric-0');
smo260411v0ar.push(smo260387);
const smo260389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo260389.setAttribute('id', 'smo260389');
smo260411v0ar.push(smo260389);
const smo260390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo260390.setAttribute('id', 'smo260390');
smo260411v0ar.push(smo260390);
const smo260391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo260391.setAttribute('id', 'smo260391');
const smo260392 = new VF.Annotation('Man');
smo260392.setAttribute('id', 'smo260392');
smo260392.setFont('times', 12, 'normal');
smo260392.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260391.addModifier(smo260392);
smo260392.addClass('lyric lyric-0 lyric-hyphen');
smo260411v0ar.push(smo260391);
const smo260393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo260393.setAttribute('id', 'smo260393');
smo260411v0ar.push(smo260393);
const smo260394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo260394.setAttribute('id', 'smo260394');
const smo2603940acc = new VF.Accidental('n');
smo260394.addModifier(smo2603940acc, 0);
const smo260395 = new VF.Annotation('ding');
smo260395.setAttribute('id', 'smo260395');
smo260395.setFont('times', 12, 'normal');
smo260395.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260394.addModifier(smo260395);
smo260395.addClass('lyric lyric-0 lyric-hyphen');
smo260411v0ar.push(smo260394);
smo260411v0.addTickables(smo260411v0ar)
fmtsmo26041164.joinVoices([smo260411v0]);
const fmtsmo26352764 = new VF.Formatter();
//
// voices and notes for stave 3 64
const smo263527v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263527v0ar = [];
const smo263503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo263503.setAttribute('id', 'smo263503');
const smo263504 = new VF.Annotation('bun');
smo263504.setAttribute('id', 'smo263504');
smo263504.setFont('times', 12, 'normal');
smo263504.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263503.addModifier(smo263504);
smo263504.addClass('lyric lyric-0');
smo263527v0ar.push(smo263503);
const smo263505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo263505.setAttribute('id', 'smo263505');
smo263527v0ar.push(smo263505);
const smo263506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo263506.setAttribute('id', 'smo263506');
smo263527v0ar.push(smo263506);
const smo263507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo263507.setAttribute('id', 'smo263507');
const smo263508 = new VF.Annotation('Man');
smo263508.setAttribute('id', 'smo263508');
smo263508.setFont('times', 12, 'normal');
smo263508.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263507.addModifier(smo263508);
smo263508.addClass('lyric lyric-0 lyric-hyphen');
smo263527v0ar.push(smo263507);
const smo263509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo263509.setAttribute('id', 'smo263509');
smo263527v0ar.push(smo263509);
const smo263510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo263510.setAttribute('id', 'smo263510');
const smo2635100acc = new VF.Accidental('n');
smo263510.addModifier(smo2635100acc, 0);
const smo263511 = new VF.Annotation('ding');
smo263511.setAttribute('id', 'smo263511');
smo263511.setFont('times', 12, 'normal');
smo263511.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263510.addModifier(smo263511);
smo263511.addClass('lyric lyric-0 lyric-hyphen');
smo263527v0ar.push(smo263510);
smo263527v0.addTickables(smo263527v0ar)
fmtsmo26352764.joinVoices([smo263527v0]);
const fmtsmo26654664 = new VF.Formatter();
//
// voices and notes for stave 4 64
const smo266546v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266546v0ar = [];
const smo266522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266522.setAttribute('id', 'smo266522');
const smo266523 = new VF.Annotation('bun');
smo266523.setAttribute('id', 'smo266523');
smo266523.setFont('times', 12, 'normal');
smo266523.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266522.addModifier(smo266523);
smo266523.addClass('lyric lyric-0');
smo266546v0ar.push(smo266522);
const smo266524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266524.setAttribute('id', 'smo266524');
smo266546v0ar.push(smo266524);
const smo266525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266525.setAttribute('id', 'smo266525');
smo266546v0ar.push(smo266525);
const smo266526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266526.setAttribute('id', 'smo266526');
const smo266527 = new VF.Annotation('Man');
smo266527.setAttribute('id', 'smo266527');
smo266527.setFont('times', 12, 'normal');
smo266527.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266526.addModifier(smo266527);
smo266527.addClass('lyric lyric-0 lyric-hyphen');
smo266546v0ar.push(smo266526);
const smo266528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266528.setAttribute('id', 'smo266528');
smo266546v0ar.push(smo266528);
const smo266529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo266529.setAttribute('id', 'smo266529');
const smo2665290acc = new VF.Accidental('n');
smo266529.addModifier(smo2665290acc, 0);
const smo266530 = new VF.Annotation('ding');
smo266530.setAttribute('id', 'smo266530');
smo266530.setFont('times', 12, 'normal');
smo266530.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266529.addModifier(smo266530);
smo266530.addClass('lyric lyric-0 lyric-hyphen');
smo266546v0ar.push(smo266529);
smo266546v0.addTickables(smo266546v0ar)
fmtsmo26654664.joinVoices([smo266546v0]);
const fmtsmo26965364 = new VF.Formatter();
//
// voices and notes for stave 5 64
const smo269653v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269653v0ar = [];
const smo269629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo269629.setAttribute('id', 'smo269629');
const smo269630 = new VF.Annotation('bun');
smo269630.setAttribute('id', 'smo269630');
smo269630.setFont('times', 12, 'normal');
smo269630.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269629.addModifier(smo269630);
smo269630.addClass('lyric lyric-0');
smo269653v0ar.push(smo269629);
const smo269631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo269631.setAttribute('id', 'smo269631');
smo269653v0ar.push(smo269631);
const smo269632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo269632.setAttribute('id', 'smo269632');
smo269653v0ar.push(smo269632);
const smo269633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo269633.setAttribute('id', 'smo269633');
const smo269634 = new VF.Annotation('Man');
smo269634.setAttribute('id', 'smo269634');
smo269634.setFont('times', 12, 'normal');
smo269634.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269633.addModifier(smo269634);
smo269634.addClass('lyric lyric-0 lyric-hyphen');
smo269653v0ar.push(smo269633);
const smo269635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo269635.setAttribute('id', 'smo269635');
smo269653v0ar.push(smo269635);
const smo269636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo269636.setAttribute('id', 'smo269636');
const smo2696360acc = new VF.Accidental('n');
smo269636.addModifier(smo2696360acc, 0);
const smo269637 = new VF.Annotation('ding');
smo269637.setAttribute('id', 'smo269637');
smo269637.setFont('times', 12, 'normal');
smo269637.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269636.addModifier(smo269637);
smo269637.addClass('lyric lyric-0 lyric-hyphen');
smo269653v0ar.push(smo269636);
smo269653v0.addTickables(smo269653v0ar)
fmtsmo26965364.joinVoices([smo269653v0]);
const fmtsmo27276564 = new VF.Formatter();
//
// voices and notes for stave 6 64
const smo272765v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272765v0ar = [];
const smo272741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272741.setAttribute('id', 'smo272741');
const smo272742 = new VF.Annotation('bun');
smo272742.setAttribute('id', 'smo272742');
smo272742.setFont('times', 12, 'normal');
smo272742.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272741.addModifier(smo272742);
smo272742.addClass('lyric lyric-0');
smo272765v0ar.push(smo272741);
const smo272743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272743.setAttribute('id', 'smo272743');
smo272765v0ar.push(smo272743);
const smo272744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272744.setAttribute('id', 'smo272744');
smo272765v0ar.push(smo272744);
const smo272745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272745.setAttribute('id', 'smo272745');
const smo272746 = new VF.Annotation('Man');
smo272746.setAttribute('id', 'smo272746');
smo272746.setFont('times', 12, 'normal');
smo272746.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272745.addModifier(smo272746);
smo272746.addClass('lyric lyric-0 lyric-hyphen');
smo272765v0ar.push(smo272745);
const smo272747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272747.setAttribute('id', 'smo272747');
smo272765v0ar.push(smo272747);
const smo272748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo272748.setAttribute('id', 'smo272748');
const smo2727480acc = new VF.Accidental('n');
smo272748.addModifier(smo2727480acc, 0);
const smo272749 = new VF.Annotation('ding');
smo272749.setAttribute('id', 'smo272749');
smo272749.setFont('times', 12, 'normal');
smo272749.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272748.addModifier(smo272749);
smo272749.addClass('lyric lyric-0 lyric-hyphen');
smo272765v0ar.push(smo272748);
smo272765v0.addTickables(smo272765v0ar)
fmtsmo27276564.joinVoices([smo272765v0]);
const fmtsmo27587464 = new VF.Formatter();
//
// voices and notes for stave 7 64
const smo275874v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275874v0ar = [];
const smo275850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo275850.setAttribute('id', 'smo275850');
const smo275851 = new VF.Annotation('bun');
smo275851.setAttribute('id', 'smo275851');
smo275851.setFont('times', 12, 'normal');
smo275851.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275850.addModifier(smo275851);
smo275851.addClass('lyric lyric-0');
smo275874v0ar.push(smo275850);
const smo275852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275852.setAttribute('id', 'smo275852');
smo275874v0ar.push(smo275852);
const smo275853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275853.setAttribute('id', 'smo275853');
smo275874v0ar.push(smo275853);
const smo275854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275854.setAttribute('id', 'smo275854');
const smo275855 = new VF.Annotation('Man');
smo275855.setAttribute('id', 'smo275855');
smo275855.setFont('times', 12, 'normal');
smo275855.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275854.addModifier(smo275855);
smo275855.addClass('lyric lyric-0 lyric-hyphen');
smo275874v0ar.push(smo275854);
const smo275856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275856.setAttribute('id', 'smo275856');
smo275874v0ar.push(smo275856);
const smo275857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo275857.setAttribute('id', 'smo275857');
const smo2758570acc = new VF.Accidental('n');
smo275857.addModifier(smo2758570acc, 0);
const smo275858 = new VF.Annotation('ding');
smo275858.setAttribute('id', 'smo275858');
smo275858.setFont('times', 12, 'normal');
smo275858.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275857.addModifier(smo275858);
smo275858.addClass('lyric lyric-0 lyric-hyphen');
smo275874v0ar.push(smo275857);
smo275874v0.addTickables(smo275874v0ar)
fmtsmo27587464.joinVoices([smo275874v0]);
const fmtsmo27896064 = new VF.Formatter();
//
// voices and notes for stave 8 64
const smo278960v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278960v0ar = [];
const smo278936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo278936.setAttribute('id', 'smo278936');
const smo278937 = new VF.Annotation('bun');
smo278937.setAttribute('id', 'smo278937');
smo278937.setFont('times', 12, 'normal');
smo278937.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278936.addModifier(smo278937);
smo278937.addClass('lyric lyric-0');
smo278960v0ar.push(smo278936);
const smo278938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo278938.setAttribute('id', 'smo278938');
smo278960v0ar.push(smo278938);
const smo278939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo278939.setAttribute('id', 'smo278939');
smo278960v0ar.push(smo278939);
const smo278940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo278940.setAttribute('id', 'smo278940');
const smo278941 = new VF.Annotation('Man');
smo278941.setAttribute('id', 'smo278941');
smo278941.setFont('times', 12, 'normal');
smo278941.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278940.addModifier(smo278941);
smo278941.addClass('lyric lyric-0 lyric-hyphen');
smo278960v0ar.push(smo278940);
const smo278942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo278942.setAttribute('id', 'smo278942');
smo278960v0ar.push(smo278942);
const smo278943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo278943.setAttribute('id', 'smo278943');
const smo2789430acc = new VF.Accidental('n');
smo278943.addModifier(smo2789430acc, 0);
const smo278944 = new VF.Annotation('ding');
smo278944.setAttribute('id', 'smo278944');
smo278944.setFont('times', 12, 'normal');
smo278944.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278943.addModifier(smo278944);
smo278944.addClass('lyric lyric-0 lyric-hyphen');
smo278960v0ar.push(smo278943);
smo278960v0.addTickables(smo278960v0ar)
fmtsmo27896064.joinVoices([smo278960v0]);
const fmtsmo28204964 = new VF.Formatter();
//
// voices and notes for stave 9 64
const smo282049v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo282049v0ar = [];
const smo282025 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo282025.setAttribute('id', 'smo282025');
const smo282026 = new VF.Annotation('bun');
smo282026.setAttribute('id', 'smo282026');
smo282026.setFont('times', 12, 'normal');
smo282026.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282025.addModifier(smo282026);
smo282026.addClass('lyric lyric-0');
smo282049v0ar.push(smo282025);
const smo282027 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo282027.setAttribute('id', 'smo282027');
smo282049v0ar.push(smo282027);
const smo282028 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo282028.setAttribute('id', 'smo282028');
smo282049v0ar.push(smo282028);
const smo282029 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo282029.setAttribute('id', 'smo282029');
const smo282030 = new VF.Annotation('Man');
smo282030.setAttribute('id', 'smo282030');
smo282030.setFont('times', 12, 'normal');
smo282030.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282029.addModifier(smo282030);
smo282030.addClass('lyric lyric-0 lyric-hyphen');
smo282049v0ar.push(smo282029);
const smo282031 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo282031.setAttribute('id', 'smo282031');
smo282049v0ar.push(smo282031);
const smo282032 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo282032.setAttribute('id', 'smo282032');
const smo2820320acc = new VF.Accidental('b');
smo282032.addModifier(smo2820320acc, 0);
const smo282033 = new VF.Annotation('ding');
smo282033.setAttribute('id', 'smo282033');
smo282033.setFont('times', 12, 'normal');
smo282033.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282032.addModifier(smo282033);
smo282033.addClass('lyric lyric-0 lyric-hyphen');
smo282049v0ar.push(smo282032);
smo282049v0.addTickables(smo282049v0ar)
fmtsmo28204964.joinVoices([smo282049v0]);
const fmtsmo28508964 = new VF.Formatter();
//
// voices and notes for stave 10 64
const smo285089v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285089v0ar = [];
const smo285065 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo285065.setAttribute('id', 'smo285065');
const smo285066 = new VF.Annotation('bun');
smo285066.setAttribute('id', 'smo285066');
smo285066.setFont('times', 12, 'normal');
smo285066.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285065.addModifier(smo285066);
smo285066.addClass('lyric lyric-0');
smo285089v0ar.push(smo285065);
const smo285067 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo285067.setAttribute('id', 'smo285067');
smo285089v0ar.push(smo285067);
const smo285068 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo285068.setAttribute('id', 'smo285068');
smo285089v0ar.push(smo285068);
const smo285069 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo285069.setAttribute('id', 'smo285069');
const smo285070 = new VF.Annotation('Man');
smo285070.setAttribute('id', 'smo285070');
smo285070.setFont('times', 12, 'normal');
smo285070.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285069.addModifier(smo285070);
smo285070.addClass('lyric lyric-0 lyric-hyphen');
smo285089v0ar.push(smo285069);
const smo285071 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo285071.setAttribute('id', 'smo285071');
smo285089v0ar.push(smo285071);
const smo285072 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo285072.setAttribute('id', 'smo285072');
const smo2850720acc = new VF.Accidental('b');
smo285072.addModifier(smo2850720acc, 0);
const smo285073 = new VF.Annotation('ding');
smo285073.setAttribute('id', 'smo285073');
smo285073.setFont('times', 12, 'normal');
smo285073.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285072.addModifier(smo285073);
smo285073.addClass('lyric lyric-0 lyric-hyphen');
smo285089v0ar.push(smo285072);
smo285089v0.addTickables(smo285089v0ar)
fmtsmo28508964.joinVoices([smo285089v0]);
const fmtsmo28814364 = new VF.Formatter();
//
// voices and notes for stave 11 64
const smo288143v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo288143v0ar = [];
const smo288119 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo288119.setAttribute('id', 'smo288119');
const smo288120 = new VF.Annotation('bun');
smo288120.setAttribute('id', 'smo288120');
smo288120.setFont('times', 12, 'normal');
smo288120.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288119.addModifier(smo288120);
smo288120.addClass('lyric lyric-0');
smo288143v0ar.push(smo288119);
const smo288121 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo288121.setAttribute('id', 'smo288121');
smo288143v0ar.push(smo288121);
const smo288122 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo288122.setAttribute('id', 'smo288122');
smo288143v0ar.push(smo288122);
const smo288123 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo288123.setAttribute('id', 'smo288123');
const smo288124 = new VF.Annotation('Man');
smo288124.setAttribute('id', 'smo288124');
smo288124.setFont('times', 12, 'normal');
smo288124.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288123.addModifier(smo288124);
smo288124.addClass('lyric lyric-0 lyric-hyphen');
smo288143v0ar.push(smo288123);
const smo288125 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo288125.setAttribute('id', 'smo288125');
smo288143v0ar.push(smo288125);
const smo288126 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo288126.setAttribute('id', 'smo288126');
const smo2881260acc = new VF.Accidental('b');
smo288126.addModifier(smo2881260acc, 0);
const smo288127 = new VF.Annotation('ding');
smo288127.setAttribute('id', 'smo288127');
smo288127.setFont('times', 12, 'normal');
smo288127.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288126.addModifier(smo288127);
smo288127.addClass('lyric lyric-0 lyric-hyphen');
smo288143v0ar.push(smo288126);
smo288143v0.addTickables(smo288143v0ar)
fmtsmo28814364.joinVoices([smo288143v0]);
const fmtsmo29118664 = new VF.Formatter();
//
// voices and notes for stave 12 64
const smo291186v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo291186v0ar = [];
const smo291162 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo291162.setAttribute('id', 'smo291162');
const smo291163 = new VF.Annotation('bun');
smo291163.setAttribute('id', 'smo291163');
smo291163.setFont('times', 12, 'normal');
smo291163.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291162.addModifier(smo291163);
smo291163.addClass('lyric lyric-0');
smo291186v0ar.push(smo291162);
const smo291164 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo291164.setAttribute('id', 'smo291164');
smo291186v0ar.push(smo291164);
const smo291165 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo291165.setAttribute('id', 'smo291165');
smo291186v0ar.push(smo291165);
const smo291166 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo291166.setAttribute('id', 'smo291166');
const smo291167 = new VF.Annotation('Man');
smo291167.setAttribute('id', 'smo291167');
smo291167.setFont('times', 12, 'normal');
smo291167.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291166.addModifier(smo291167);
smo291167.addClass('lyric lyric-0 lyric-hyphen');
smo291186v0ar.push(smo291166);
const smo291168 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo291168.setAttribute('id', 'smo291168');
smo291186v0ar.push(smo291168);
const smo291169 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo291169.setAttribute('id', 'smo291169');
const smo2911690acc = new VF.Accidental('b');
smo291169.addModifier(smo2911690acc, 0);
const smo291170 = new VF.Annotation('ding');
smo291170.setAttribute('id', 'smo291170');
smo291170.setFont('times', 12, 'normal');
smo291170.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291169.addModifier(smo291170);
smo291170.addClass('lyric lyric-0 lyric-hyphen');
smo291186v0ar.push(smo291169);
smo291186v0.addTickables(smo291186v0ar)
fmtsmo29118664.joinVoices([smo291186v0]);
const fmtsmo29439864 = new VF.Formatter();
//
// voices and notes for stave 13 64
const smo294398v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294398v0ar = [];
const smo294378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo294378.setAttribute('id', 'smo294378');
smo294378.addModifier(new VF.Dot(), 0);
smo294378.addModifier(new VF.Dot(), 1);
smo294378.addModifier(new VF.Dot(), 2);
smo294398v0ar.push(smo294378);
const smo294379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo294379.setAttribute('id', 'smo294379');
smo294398v0ar.push(smo294379);
const smo294380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo294380.setAttribute('id', 'smo294380');
smo294398v0ar.push(smo294380);
const smo294381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo294381.setAttribute('id', 'smo294381');
const smo2943812acc = new VF.Accidental('b');
smo294381.addModifier(smo2943812acc, 2);
smo294398v0ar.push(smo294381);
const smo294382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo294382.setAttribute('id', 'smo294382');
smo294398v0ar.push(smo294382);
smo294398v0.addTickables(smo294398v0ar)
fmtsmo29439864.joinVoices([smo294398v0]);
const fmtsmo29761164 = new VF.Formatter();
//
// voices and notes for stave 14 64
const smo297611v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297611v0ar = [];
const smo297591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo297591.setAttribute('id', 'smo297591');
smo297591.addModifier(new VF.Dot(), 0);
smo297591.addModifier(new VF.Dot(), 1);
smo297591.addModifier(new VF.Dot(), 2);
smo297611v0ar.push(smo297591);
const smo297592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo297592.setAttribute('id', 'smo297592');
smo297611v0ar.push(smo297592);
const smo297593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo297593.setAttribute('id', 'smo297593');
smo297611v0ar.push(smo297593);
const smo297594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo297594.setAttribute('id', 'smo297594');
const smo2975942acc = new VF.Accidental('b');
smo297594.addModifier(smo2975942acc, 2);
smo297611v0ar.push(smo297594);
const smo297595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo297595.setAttribute('id', 'smo297595');
smo297611v0ar.push(smo297595);
smo297611v0.addTickables(smo297611v0ar)
fmtsmo29761164.joinVoices([smo297611v0]);
const fmtsmo30080664 = new VF.Formatter();
//
// voices and notes for stave 15 64
const smo300806v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300806v0ar = [];
const smo300786 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo300786.setAttribute('id', 'smo300786');
smo300786.addModifier(new VF.Dot(), 0);
smo300806v0ar.push(smo300786);
const smo300787 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo300787.setAttribute('id', 'smo300787');
smo300806v0ar.push(smo300787);
const smo300788 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo300788.setAttribute('id', 'smo300788');
smo300806v0ar.push(smo300788);
const smo300789 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo300789.setAttribute('id', 'smo300789');
smo300806v0ar.push(smo300789);
const smo300790 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo300790.setAttribute('id', 'smo300790');
smo300806v0ar.push(smo300790);
smo300806v0.addTickables(smo300806v0ar)
fmtsmo30080664.joinVoices([smo300806v0]);
const fmtsmo30392464 = new VF.Formatter();
//
// voices and notes for stave 16 64
const smo303924v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303924v0ar = [];
const smo303905 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo303905.setAttribute('id', 'smo303905');
smo303905.addModifier(new VF.Dot(), 0);
smo303924v0ar.push(smo303905);
const smo303906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo303906.setAttribute('id', 'smo303906');
smo303924v0ar.push(smo303906);
const smo303907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo303907.setAttribute('id', 'smo303907');
smo303924v0ar.push(smo303907);
const smo303908 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo303908.setAttribute('id', 'smo303908');
smo303924v0ar.push(smo303908);
smo303924v0.addTickables(smo303924v0ar)
fmtsmo30392464.joinVoices([smo303924v0]);
const fmtsmo30711364 = new VF.Formatter();
//
// voices and notes for stave 17 64
const smo307113v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307113v0ar = [];
const smo307086 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307086.setAttribute('id', 'smo307086');
const smo307087 = new VF.Annotation('bun');
smo307087.setAttribute('id', 'smo307087');
smo307087.setFont('times', 12, 'normal');
smo307087.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo307086.addModifier(smo307087);
smo307087.addClass('lyric lyric-0');
smo307113v0ar.push(smo307086);
const smo307088 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo307088.setAttribute('id', 'smo307088');
smo307113v0ar.push(smo307088);
const smo307089 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo307089.setAttribute('id', 'smo307089');
smo307113v0ar.push(smo307089);
const smo307090 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307090.setAttribute('id', 'smo307090');
smo307113v0ar.push(smo307090);
smo307113v0.addTickables(smo307113v0ar)
fmtsmo30711364.joinVoices([smo307113v0]);
const smo307113v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307113v1ar = [];
const smo307091 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307091.setAttribute('id', 'smo307091');
smo307091.setStyle({ fillStyle: '#aaaaaa7f' });
smo307113v1ar.push(smo307091);
const smo307092 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307092.setAttribute('id', 'smo307092');
smo307092.setStyle({ fillStyle: '#aaaaaa7f' });
smo307113v1ar.push(smo307092);
const smo307093 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307093.setAttribute('id', 'smo307093');
smo307093.setStyle({ fillStyle: '#aaaaaa7f' });
smo307113v1ar.push(smo307093);
const smo307094 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307094.setAttribute('id', 'smo307094');
smo307094.setStyle({ fillStyle: '#aaaaaa7f' });
smo307113v1ar.push(smo307094);
smo307113v1.addTickables(smo307113v1ar)
fmtsmo30711364.joinVoices([smo307113v1]);
const smo307113v2 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307113v2ar = [];
const smo307095 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo307095.setAttribute('id', 'smo307095');
smo307095.setStyle({ fillStyle: '#aaaaaa7f' });
const smo3070950acc = new VF.Accidental('n');
smo307095.addModifier(smo3070950acc, 0);
smo307113v2ar.push(smo307095);
const smo307096 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307096.setAttribute('id', 'smo307096');
smo307096.setStyle({ fillStyle: '#aaaaaa7f' });
smo307113v2ar.push(smo307096);
const smo307097 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307097.setAttribute('id', 'smo307097');
smo307097.setStyle({ fillStyle: '#aaaaaa7f' });
smo307113v2ar.push(smo307097);
smo307113v2.addTickables(smo307113v2ar)
fmtsmo30711364.joinVoices([smo307113v2]);
// create beam groups and tuplets for format grp smo308886 before formatting
const dirsmo400210 = smo254254.getStemDirection();
smo254254.setStemDirection(dirsmo400210);
smo254256.setStemDirection(dirsmo400210);
const smo400210 = new VF.Beam([smo254254,smo254256]);
const dirsmo400213 = smo257248.getStemDirection();
smo257248.setStemDirection(dirsmo400213);
smo257250.setStemDirection(dirsmo400213);
const smo400213 = new VF.Beam([smo257248,smo257250]);
const dirsmo400216 = smo260391.getStemDirection();
smo260391.setStemDirection(dirsmo400216);
smo260393.setStemDirection(dirsmo400216);
const smo400216 = new VF.Beam([smo260391,smo260393]);
const dirsmo400219 = smo263507.getStemDirection();
smo263507.setStemDirection(dirsmo400219);
smo263509.setStemDirection(dirsmo400219);
const smo400219 = new VF.Beam([smo263507,smo263509]);
const dirsmo400222 = smo266526.getStemDirection();
smo266526.setStemDirection(dirsmo400222);
smo266528.setStemDirection(dirsmo400222);
const smo400222 = new VF.Beam([smo266526,smo266528]);
 
// formatting measures in staff group smo308886
fmtsmo25427464.format([smo254274v0,smo257268v0,smo260411v0,smo263527v0,smo266546v0], 288);
const stavesmo254274 = new VF.Stave(506, 210, 302);
stavesmo254274.setAttribute('id', 'stavesmo254274');
stavesmo254274.setBegBarType(VF.Barline.type.NONE);
stavesmo254274.setContext(context);
stavesmo254274.draw();
smo254274v0.draw(context, stavesmo254274);
smo400210.setContext(context);
smo400210.draw();
const stavesmo257268 = new VF.Stave(506, 316, 302);
stavesmo257268.setAttribute('id', 'stavesmo257268');
stavesmo257268.setBegBarType(VF.Barline.type.NONE);
stavesmo257268.setContext(context);
stavesmo257268.draw();
smo257268v0.draw(context, stavesmo257268);
smo400213.setContext(context);
smo400213.draw();
const stavesmo260411 = new VF.Stave(506, 437, 302);
stavesmo260411.setAttribute('id', 'stavesmo260411');
stavesmo260411.setBegBarType(VF.Barline.type.NONE);
stavesmo260411.setContext(context);
stavesmo260411.draw();
smo260411v0.draw(context, stavesmo260411);
smo400216.setContext(context);
smo400216.draw();
const stavesmo263527 = new VF.Stave(506, 553, 302);
stavesmo263527.setAttribute('id', 'stavesmo263527');
stavesmo263527.setBegBarType(VF.Barline.type.NONE);
stavesmo263527.setContext(context);
stavesmo263527.draw();
smo263527v0.draw(context, stavesmo263527);
smo400219.setContext(context);
smo400219.draw();
const stavesmo266546 = new VF.Stave(506, 659, 302);
stavesmo266546.setAttribute('id', 'stavesmo266546');
stavesmo266546.setBegBarType(VF.Barline.type.NONE);
stavesmo266546.setContext(context);
stavesmo266546.draw();
smo266546v0.draw(context, stavesmo266546);
smo400222.setContext(context);
smo400222.draw();
// create beam groups and tuplets for format grp smo308888 before formatting
const dirsmo400225 = smo269633.getStemDirection();
smo269633.setStemDirection(dirsmo400225);
smo269635.setStemDirection(dirsmo400225);
const smo400225 = new VF.Beam([smo269633,smo269635]);
const dirsmo400228 = smo272745.getStemDirection();
smo272745.setStemDirection(dirsmo400228);
smo272747.setStemDirection(dirsmo400228);
const smo400228 = new VF.Beam([smo272745,smo272747]);
const dirsmo400231 = smo275854.getStemDirection();
smo275854.setStemDirection(dirsmo400231);
smo275856.setStemDirection(dirsmo400231);
const smo400231 = new VF.Beam([smo275854,smo275856]);
const dirsmo400234 = smo278940.getStemDirection();
smo278940.setStemDirection(dirsmo400234);
smo278942.setStemDirection(dirsmo400234);
const smo400234 = new VF.Beam([smo278940,smo278942]);
 
// formatting measures in staff group smo308888
fmtsmo26965364.format([smo269653v0,smo272765v0,smo275874v0,smo278960v0], 288);
const stavesmo269653 = new VF.Stave(506, 780, 302);
stavesmo269653.setAttribute('id', 'stavesmo269653');
stavesmo269653.setBegBarType(VF.Barline.type.NONE);
stavesmo269653.setContext(context);
stavesmo269653.draw();
smo269653v0.draw(context, stavesmo269653);
smo400225.setContext(context);
smo400225.draw();
const stavesmo272765 = new VF.Stave(506, 896, 302);
stavesmo272765.setAttribute('id', 'stavesmo272765');
stavesmo272765.setBegBarType(VF.Barline.type.NONE);
stavesmo272765.setContext(context);
stavesmo272765.draw();
smo272765v0.draw(context, stavesmo272765);
smo400228.setContext(context);
smo400228.draw();
const stavesmo275874 = new VF.Stave(506, 1012, 302);
stavesmo275874.setAttribute('id', 'stavesmo275874');
stavesmo275874.setBegBarType(VF.Barline.type.NONE);
stavesmo275874.setContext(context);
stavesmo275874.draw();
smo275874v0.draw(context, stavesmo275874);
smo400231.setContext(context);
smo400231.draw();
const stavesmo278960 = new VF.Stave(506, 1128, 302);
stavesmo278960.setAttribute('id', 'stavesmo278960');
stavesmo278960.setBegBarType(VF.Barline.type.NONE);
stavesmo278960.setContext(context);
stavesmo278960.draw();
smo278960v0.draw(context, stavesmo278960);
smo400234.setContext(context);
smo400234.draw();
// create beam groups and tuplets for format grp smo308890 before formatting
const dirsmo400237 = smo282029.getStemDirection();
smo282029.setStemDirection(dirsmo400237);
smo282031.setStemDirection(dirsmo400237);
const smo400237 = new VF.Beam([smo282029,smo282031]);
const dirsmo400240 = smo285069.getStemDirection();
smo285069.setStemDirection(dirsmo400240);
smo285071.setStemDirection(dirsmo400240);
const smo400240 = new VF.Beam([smo285069,smo285071]);
const dirsmo400243 = smo288123.getStemDirection();
smo288123.setStemDirection(dirsmo400243);
smo288125.setStemDirection(dirsmo400243);
const smo400243 = new VF.Beam([smo288123,smo288125]);
const dirsmo400246 = smo291166.getStemDirection();
smo291166.setStemDirection(dirsmo400246);
smo291168.setStemDirection(dirsmo400246);
const smo400246 = new VF.Beam([smo291166,smo291168]);
 
// formatting measures in staff group smo308890
fmtsmo28204964.format([smo282049v0,smo285089v0,smo288143v0,smo291186v0], 288);
const stavesmo282049 = new VF.Stave(506, 1264, 302);
stavesmo282049.setAttribute('id', 'stavesmo282049');
stavesmo282049.setBegBarType(VF.Barline.type.NONE);
stavesmo282049.setContext(context);
stavesmo282049.draw();
smo282049v0.draw(context, stavesmo282049);
smo400237.setContext(context);
smo400237.draw();
const stavesmo285089 = new VF.Stave(506, 1400, 302);
stavesmo285089.setAttribute('id', 'stavesmo285089');
stavesmo285089.setBegBarType(VF.Barline.type.NONE);
stavesmo285089.setContext(context);
stavesmo285089.draw();
smo285089v0.draw(context, stavesmo285089);
smo400240.setContext(context);
smo400240.draw();
const stavesmo288143 = new VF.Stave(506, 1536, 302);
stavesmo288143.setAttribute('id', 'stavesmo288143');
stavesmo288143.setBegBarType(VF.Barline.type.NONE);
stavesmo288143.setContext(context);
stavesmo288143.draw();
smo288143v0.draw(context, stavesmo288143);
smo400243.setContext(context);
smo400243.draw();
const stavesmo291186 = new VF.Stave(506, 1672, 302);
stavesmo291186.setAttribute('id', 'stavesmo291186');
stavesmo291186.setBegBarType(VF.Barline.type.NONE);
stavesmo291186.setContext(context);
stavesmo291186.draw();
smo291186v0.draw(context, stavesmo291186);
smo400246.setContext(context);
smo400246.draw();
// create beam groups and tuplets for format grp smo296209 before formatting
const dirsmo400249 = smo294379.getStemDirection();
smo294379.setStemDirection(dirsmo400249);
smo294380.setStemDirection(dirsmo400249);
const smo400249 = new VF.Beam([smo294379,smo294380]);
 
// formatting measures in staff group smo296209
fmtsmo29439864.format([smo294398v0], 288);
const stavesmo294398 = new VF.Stave(506, 1818, 302);
stavesmo294398.setAttribute('id', 'stavesmo294398');
stavesmo294398.setBegBarType(VF.Barline.type.NONE);
stavesmo294398.setContext(context);
stavesmo294398.draw();
smo294398v0.draw(context, stavesmo294398);
smo400249.setContext(context);
smo400249.draw();
// create beam groups and tuplets for format grp smo308884 before formatting
const dirsmo400252 = smo297592.getStemDirection();
smo297592.setStemDirection(dirsmo400252);
smo297593.setStemDirection(dirsmo400252);
const smo400252 = new VF.Beam([smo297592,smo297593]);
const dirsmo400255 = smo300787.getStemDirection();
smo300787.setStemDirection(dirsmo400255);
smo300788.setStemDirection(dirsmo400255);
const smo400255 = new VF.Beam([smo300787,smo300788]);
 
// formatting measures in staff group smo308884
fmtsmo29761164.format([smo297611v0,smo300806v0], 288);
const stavesmo297611 = new VF.Stave(506, 1924, 302);
stavesmo297611.setAttribute('id', 'stavesmo297611');
stavesmo297611.setBegBarType(VF.Barline.type.NONE);
stavesmo297611.setContext(context);
stavesmo297611.draw();
smo297611v0.draw(context, stavesmo297611);
smo400252.setContext(context);
smo400252.draw();
const stavesmo300806 = new VF.Stave(506, 2010, 302);
stavesmo300806.setAttribute('id', 'stavesmo300806');
stavesmo300806.setBegBarType(VF.Barline.type.NONE);
stavesmo300806.setContext(context);
stavesmo300806.draw();
smo300806v0.draw(context, stavesmo300806);
smo400255.setContext(context);
smo400255.draw();
// create beam groups and tuplets for format grp smo305722 before formatting
 
// formatting measures in staff group smo305722
fmtsmo30392464.format([smo303924v0], 288);
const stavesmo303924 = new VF.Stave(506, 2081, 302);
stavesmo303924.setAttribute('id', 'stavesmo303924');
stavesmo303924.setBegBarType(VF.Barline.type.NONE);
stavesmo303924.setContext(context);
stavesmo303924.draw();
smo303924v0.draw(context, stavesmo303924);
// create beam groups and tuplets for format grp smo308878 before formatting
 
// formatting measures in staff group smo308878
fmtsmo30711364.format([smo307113v0,smo307113v1,smo307113v2], 288);
const stavesmo307113 = new VF.Stave(506, 2152, 302);
stavesmo307113.setAttribute('id', 'stavesmo307113');
stavesmo307113.setBegBarType(VF.Barline.type.NONE);
stavesmo307113.setContext(context);
stavesmo307113.draw();
smo307113v0.draw(context, stavesmo307113);
smo307113v1.draw(context, stavesmo307113);
smo307113v2.draw(context, stavesmo307113);
const fmtsmo25430165 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo254301v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo254301v0ar = [];
const smo254275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo254275.setAttribute('id', 'smo254275');
const smo2542750acc = new VF.Accidental('n');
smo254275.addModifier(smo2542750acc, 0);
smo254301v0ar.push(smo254275);
const smo254276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo254276.setAttribute('id', 'smo254276');
const smo254277 = new VF.Annotation('a');
smo254277.setAttribute('id', 'smo254277');
smo254277.setFont('times', 12, 'normal');
smo254277.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254276.addModifier(smo254277);
smo254277.addClass('lyric lyric-0');
smo254301v0ar.push(smo254276);
const smo254278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo254278.setAttribute('id', 'smo254278');
smo254301v0ar.push(smo254278);
const smo254279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo254279.setAttribute('id', 'smo254279');
const smo254280 = new VF.Annotation('Ki');
smo254280.setAttribute('id', 'smo254280');
smo254280.setFont('times', 12, 'normal');
smo254280.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254279.addModifier(smo254280);
smo254280.addClass('lyric lyric-0 lyric-hyphen');
smo254301v0ar.push(smo254279);
const smo254281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo254281.setAttribute('id', 'smo254281');
smo254301v0ar.push(smo254281);
const smo254282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo254282.setAttribute('id', 'smo254282');
const smo254283 = new VF.Annotation('ki');
smo254283.setAttribute('id', 'smo254283');
smo254283.setFont('times', 12, 'normal');
smo254283.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254282.addModifier(smo254283);
smo254283.addClass('lyric lyric-0');
smo254301v0ar.push(smo254282);
const smo254284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo254284.setAttribute('id', 'smo254284');
const smo254285 = new VF.Annotation('ri');
smo254285.setAttribute('id', 'smo254285');
smo254285.setFont('times', 12, 'normal');
smo254285.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254284.addModifier(smo254285);
smo254285.addClass('lyric lyric-0');
smo254301v0ar.push(smo254284);
smo254301v0.addTickables(smo254301v0ar)
fmtsmo25430165.joinVoices([smo254301v0]);
const fmtsmo25729565 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo257295v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257295v0ar = [];
const smo257269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo257269.setAttribute('id', 'smo257269');
const smo2572690acc = new VF.Accidental('n');
smo257269.addModifier(smo2572690acc, 0);
smo257295v0ar.push(smo257269);
const smo257270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo257270.setAttribute('id', 'smo257270');
const smo257271 = new VF.Annotation('a');
smo257271.setAttribute('id', 'smo257271');
smo257271.setFont('times', 12, 'normal');
smo257271.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257270.addModifier(smo257271);
smo257271.addClass('lyric lyric-0');
smo257295v0ar.push(smo257270);
const smo257272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo257272.setAttribute('id', 'smo257272');
smo257295v0ar.push(smo257272);
const smo257273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo257273.setAttribute('id', 'smo257273');
const smo257274 = new VF.Annotation('Ki');
smo257274.setAttribute('id', 'smo257274');
smo257274.setFont('times', 12, 'normal');
smo257274.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257273.addModifier(smo257274);
smo257274.addClass('lyric lyric-0 lyric-hyphen');
smo257295v0ar.push(smo257273);
const smo257275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo257275.setAttribute('id', 'smo257275');
smo257295v0ar.push(smo257275);
const smo257276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo257276.setAttribute('id', 'smo257276');
const smo257277 = new VF.Annotation('ki');
smo257277.setAttribute('id', 'smo257277');
smo257277.setFont('times', 12, 'normal');
smo257277.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257276.addModifier(smo257277);
smo257277.addClass('lyric lyric-0');
smo257295v0ar.push(smo257276);
const smo257278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo257278.setAttribute('id', 'smo257278');
const smo257279 = new VF.Annotation('ri');
smo257279.setAttribute('id', 'smo257279');
smo257279.setFont('times', 12, 'normal');
smo257279.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257278.addModifier(smo257279);
smo257279.addClass('lyric lyric-0');
smo257295v0ar.push(smo257278);
smo257295v0.addTickables(smo257295v0ar)
fmtsmo25729565.joinVoices([smo257295v0]);
const fmtsmo26043865 = new VF.Formatter();
//
// voices and notes for stave 2 65
const smo260438v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260438v0ar = [];
const smo260412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo260412.setAttribute('id', 'smo260412');
const smo2604120acc = new VF.Accidental('n');
smo260412.addModifier(smo2604120acc, 0);
smo260438v0ar.push(smo260412);
const smo260413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo260413.setAttribute('id', 'smo260413');
const smo260414 = new VF.Annotation('a');
smo260414.setAttribute('id', 'smo260414');
smo260414.setFont('times', 12, 'normal');
smo260414.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260413.addModifier(smo260414);
smo260414.addClass('lyric lyric-0');
smo260438v0ar.push(smo260413);
const smo260415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo260415.setAttribute('id', 'smo260415');
smo260438v0ar.push(smo260415);
const smo260416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo260416.setAttribute('id', 'smo260416');
const smo260417 = new VF.Annotation('Ki');
smo260417.setAttribute('id', 'smo260417');
smo260417.setFont('times', 12, 'normal');
smo260417.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260416.addModifier(smo260417);
smo260417.addClass('lyric lyric-0 lyric-hyphen');
smo260438v0ar.push(smo260416);
const smo260418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo260418.setAttribute('id', 'smo260418');
smo260438v0ar.push(smo260418);
const smo260419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo260419.setAttribute('id', 'smo260419');
const smo260420 = new VF.Annotation('ki');
smo260420.setAttribute('id', 'smo260420');
smo260420.setFont('times', 12, 'normal');
smo260420.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260419.addModifier(smo260420);
smo260420.addClass('lyric lyric-0');
smo260438v0ar.push(smo260419);
const smo260421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo260421.setAttribute('id', 'smo260421');
const smo260422 = new VF.Annotation('ri');
smo260422.setAttribute('id', 'smo260422');
smo260422.setFont('times', 12, 'normal');
smo260422.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260421.addModifier(smo260422);
smo260422.addClass('lyric lyric-0');
smo260438v0ar.push(smo260421);
smo260438v0.addTickables(smo260438v0ar)
fmtsmo26043865.joinVoices([smo260438v0]);
const fmtsmo26355465 = new VF.Formatter();
//
// voices and notes for stave 3 65
const smo263554v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263554v0ar = [];
const smo263528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo263528.setAttribute('id', 'smo263528');
const smo2635280acc = new VF.Accidental('n');
smo263528.addModifier(smo2635280acc, 0);
smo263554v0ar.push(smo263528);
const smo263529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo263529.setAttribute('id', 'smo263529');
const smo263530 = new VF.Annotation('a');
smo263530.setAttribute('id', 'smo263530');
smo263530.setFont('times', 12, 'normal');
smo263530.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263529.addModifier(smo263530);
smo263530.addClass('lyric lyric-0');
smo263554v0ar.push(smo263529);
const smo263531 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo263531.setAttribute('id', 'smo263531');
smo263554v0ar.push(smo263531);
const smo263532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo263532.setAttribute('id', 'smo263532');
const smo263533 = new VF.Annotation('Ki');
smo263533.setAttribute('id', 'smo263533');
smo263533.setFont('times', 12, 'normal');
smo263533.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263532.addModifier(smo263533);
smo263533.addClass('lyric lyric-0 lyric-hyphen');
smo263554v0ar.push(smo263532);
const smo263534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo263534.setAttribute('id', 'smo263534');
smo263554v0ar.push(smo263534);
const smo263535 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo263535.setAttribute('id', 'smo263535');
const smo263536 = new VF.Annotation('ki');
smo263536.setAttribute('id', 'smo263536');
smo263536.setFont('times', 12, 'normal');
smo263536.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263535.addModifier(smo263536);
smo263536.addClass('lyric lyric-0');
smo263554v0ar.push(smo263535);
const smo263537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo263537.setAttribute('id', 'smo263537');
const smo263538 = new VF.Annotation('ri');
smo263538.setAttribute('id', 'smo263538');
smo263538.setFont('times', 12, 'normal');
smo263538.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263537.addModifier(smo263538);
smo263538.addClass('lyric lyric-0');
smo263554v0ar.push(smo263537);
smo263554v0.addTickables(smo263554v0ar)
fmtsmo26355465.joinVoices([smo263554v0]);
const fmtsmo26657365 = new VF.Formatter();
//
// voices and notes for stave 4 65
const smo266573v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266573v0ar = [];
const smo266547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo266547.setAttribute('id', 'smo266547');
const smo2665470acc = new VF.Accidental('n');
smo266547.addModifier(smo2665470acc, 0);
smo266573v0ar.push(smo266547);
const smo266548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266548.setAttribute('id', 'smo266548');
const smo266549 = new VF.Annotation('a');
smo266549.setAttribute('id', 'smo266549');
smo266549.setFont('times', 12, 'normal');
smo266549.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266548.addModifier(smo266549);
smo266549.addClass('lyric lyric-0');
smo266573v0ar.push(smo266548);
const smo266550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266550.setAttribute('id', 'smo266550');
smo266573v0ar.push(smo266550);
const smo266551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266551.setAttribute('id', 'smo266551');
const smo266552 = new VF.Annotation('Ki');
smo266552.setAttribute('id', 'smo266552');
smo266552.setFont('times', 12, 'normal');
smo266552.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266551.addModifier(smo266552);
smo266552.addClass('lyric lyric-0 lyric-hyphen');
smo266573v0ar.push(smo266551);
const smo266553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266553.setAttribute('id', 'smo266553');
smo266573v0ar.push(smo266553);
const smo266554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266554.setAttribute('id', 'smo266554');
const smo266555 = new VF.Annotation('ki');
smo266555.setAttribute('id', 'smo266555');
smo266555.setFont('times', 12, 'normal');
smo266555.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266554.addModifier(smo266555);
smo266555.addClass('lyric lyric-0');
smo266573v0ar.push(smo266554);
const smo266556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266556.setAttribute('id', 'smo266556');
const smo266557 = new VF.Annotation('ri');
smo266557.setAttribute('id', 'smo266557');
smo266557.setFont('times', 12, 'normal');
smo266557.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266556.addModifier(smo266557);
smo266557.addClass('lyric lyric-0');
smo266573v0ar.push(smo266556);
smo266573v0.addTickables(smo266573v0ar)
fmtsmo26657365.joinVoices([smo266573v0]);
const fmtsmo26968065 = new VF.Formatter();
//
// voices and notes for stave 5 65
const smo269680v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269680v0ar = [];
const smo269654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo269654.setAttribute('id', 'smo269654');
const smo2696540acc = new VF.Accidental('n');
smo269654.addModifier(smo2696540acc, 0);
smo269680v0ar.push(smo269654);
const smo269655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo269655.setAttribute('id', 'smo269655');
const smo269656 = new VF.Annotation('a');
smo269656.setAttribute('id', 'smo269656');
smo269656.setFont('times', 12, 'normal');
smo269656.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269655.addModifier(smo269656);
smo269656.addClass('lyric lyric-0');
smo269680v0ar.push(smo269655);
const smo269657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo269657.setAttribute('id', 'smo269657');
smo269680v0ar.push(smo269657);
const smo269658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo269658.setAttribute('id', 'smo269658');
const smo269659 = new VF.Annotation('Ki');
smo269659.setAttribute('id', 'smo269659');
smo269659.setFont('times', 12, 'normal');
smo269659.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269658.addModifier(smo269659);
smo269659.addClass('lyric lyric-0 lyric-hyphen');
smo269680v0ar.push(smo269658);
const smo269660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo269660.setAttribute('id', 'smo269660');
smo269680v0ar.push(smo269660);
const smo269661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo269661.setAttribute('id', 'smo269661');
const smo269662 = new VF.Annotation('ki');
smo269662.setAttribute('id', 'smo269662');
smo269662.setFont('times', 12, 'normal');
smo269662.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269661.addModifier(smo269662);
smo269662.addClass('lyric lyric-0');
smo269680v0ar.push(smo269661);
const smo269663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo269663.setAttribute('id', 'smo269663');
const smo269664 = new VF.Annotation('ri');
smo269664.setAttribute('id', 'smo269664');
smo269664.setFont('times', 12, 'normal');
smo269664.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269663.addModifier(smo269664);
smo269664.addClass('lyric lyric-0');
smo269680v0ar.push(smo269663);
smo269680v0.addTickables(smo269680v0ar)
fmtsmo26968065.joinVoices([smo269680v0]);
const fmtsmo27279265 = new VF.Formatter();
//
// voices and notes for stave 6 65
const smo272792v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272792v0ar = [];
const smo272766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo272766.setAttribute('id', 'smo272766');
const smo2727660acc = new VF.Accidental('n');
smo272766.addModifier(smo2727660acc, 0);
smo272792v0ar.push(smo272766);
const smo272767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272767.setAttribute('id', 'smo272767');
const smo272768 = new VF.Annotation('a');
smo272768.setAttribute('id', 'smo272768');
smo272768.setFont('times', 12, 'normal');
smo272768.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272767.addModifier(smo272768);
smo272768.addClass('lyric lyric-0');
smo272792v0ar.push(smo272767);
const smo272769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272769.setAttribute('id', 'smo272769');
smo272792v0ar.push(smo272769);
const smo272770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272770.setAttribute('id', 'smo272770');
const smo272771 = new VF.Annotation('Ki');
smo272771.setAttribute('id', 'smo272771');
smo272771.setFont('times', 12, 'normal');
smo272771.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272770.addModifier(smo272771);
smo272771.addClass('lyric lyric-0 lyric-hyphen');
smo272792v0ar.push(smo272770);
const smo272772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272772.setAttribute('id', 'smo272772');
smo272792v0ar.push(smo272772);
const smo272773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272773.setAttribute('id', 'smo272773');
const smo272774 = new VF.Annotation('ki');
smo272774.setAttribute('id', 'smo272774');
smo272774.setFont('times', 12, 'normal');
smo272774.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272773.addModifier(smo272774);
smo272774.addClass('lyric lyric-0');
smo272792v0ar.push(smo272773);
const smo272775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272775.setAttribute('id', 'smo272775');
const smo272776 = new VF.Annotation('ri');
smo272776.setAttribute('id', 'smo272776');
smo272776.setFont('times', 12, 'normal');
smo272776.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272775.addModifier(smo272776);
smo272776.addClass('lyric lyric-0');
smo272792v0ar.push(smo272775);
smo272792v0.addTickables(smo272792v0ar)
fmtsmo27279265.joinVoices([smo272792v0]);
const fmtsmo27590165 = new VF.Formatter();
//
// voices and notes for stave 7 65
const smo275901v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275901v0ar = [];
const smo275875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo275875.setAttribute('id', 'smo275875');
const smo2758750acc = new VF.Accidental('n');
smo275875.addModifier(smo2758750acc, 0);
smo275901v0ar.push(smo275875);
const smo275876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275876.setAttribute('id', 'smo275876');
const smo275877 = new VF.Annotation('a');
smo275877.setAttribute('id', 'smo275877');
smo275877.setFont('times', 12, 'normal');
smo275877.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275876.addModifier(smo275877);
smo275877.addClass('lyric lyric-0');
smo275901v0ar.push(smo275876);
const smo275878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275878.setAttribute('id', 'smo275878');
smo275901v0ar.push(smo275878);
const smo275879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275879.setAttribute('id', 'smo275879');
const smo275880 = new VF.Annotation('Ki');
smo275880.setAttribute('id', 'smo275880');
smo275880.setFont('times', 12, 'normal');
smo275880.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275879.addModifier(smo275880);
smo275880.addClass('lyric lyric-0 lyric-hyphen');
smo275901v0ar.push(smo275879);
const smo275881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275881.setAttribute('id', 'smo275881');
smo275901v0ar.push(smo275881);
const smo275882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275882.setAttribute('id', 'smo275882');
const smo275883 = new VF.Annotation('ki');
smo275883.setAttribute('id', 'smo275883');
smo275883.setFont('times', 12, 'normal');
smo275883.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275882.addModifier(smo275883);
smo275883.addClass('lyric lyric-0');
smo275901v0ar.push(smo275882);
const smo275884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275884.setAttribute('id', 'smo275884');
const smo275885 = new VF.Annotation('ri');
smo275885.setAttribute('id', 'smo275885');
smo275885.setFont('times', 12, 'normal');
smo275885.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275884.addModifier(smo275885);
smo275885.addClass('lyric lyric-0');
smo275901v0ar.push(smo275884);
smo275901v0.addTickables(smo275901v0ar)
fmtsmo27590165.joinVoices([smo275901v0]);
const fmtsmo27898765 = new VF.Formatter();
//
// voices and notes for stave 8 65
const smo278987v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278987v0ar = [];
const smo278961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo278961.setAttribute('id', 'smo278961');
const smo2789610acc = new VF.Accidental('n');
smo278961.addModifier(smo2789610acc, 0);
smo278987v0ar.push(smo278961);
const smo278962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo278962.setAttribute('id', 'smo278962');
const smo278963 = new VF.Annotation('a');
smo278963.setAttribute('id', 'smo278963');
smo278963.setFont('times', 12, 'normal');
smo278963.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278962.addModifier(smo278963);
smo278963.addClass('lyric lyric-0');
smo278987v0ar.push(smo278962);
const smo278964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo278964.setAttribute('id', 'smo278964');
smo278987v0ar.push(smo278964);
const smo278965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo278965.setAttribute('id', 'smo278965');
const smo278966 = new VF.Annotation('Ki');
smo278966.setAttribute('id', 'smo278966');
smo278966.setFont('times', 12, 'normal');
smo278966.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278965.addModifier(smo278966);
smo278966.addClass('lyric lyric-0 lyric-hyphen');
smo278987v0ar.push(smo278965);
const smo278967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo278967.setAttribute('id', 'smo278967');
smo278987v0ar.push(smo278967);
const smo278968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo278968.setAttribute('id', 'smo278968');
const smo278969 = new VF.Annotation('ki');
smo278969.setAttribute('id', 'smo278969');
smo278969.setFont('times', 12, 'normal');
smo278969.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278968.addModifier(smo278969);
smo278969.addClass('lyric lyric-0');
smo278987v0ar.push(smo278968);
const smo278970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo278970.setAttribute('id', 'smo278970');
const smo278971 = new VF.Annotation('ri');
smo278971.setAttribute('id', 'smo278971');
smo278971.setFont('times', 12, 'normal');
smo278971.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278970.addModifier(smo278971);
smo278971.addClass('lyric lyric-0');
smo278987v0ar.push(smo278970);
smo278987v0.addTickables(smo278987v0ar)
fmtsmo27898765.joinVoices([smo278987v0]);
const fmtsmo28207665 = new VF.Formatter();
//
// voices and notes for stave 9 65
const smo282076v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo282076v0ar = [];
const smo282050 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo282050.setAttribute('id', 'smo282050');
const smo2820500acc = new VF.Accidental('b');
smo282050.addModifier(smo2820500acc, 0);
smo282076v0ar.push(smo282050);
const smo282051 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo282051.setAttribute('id', 'smo282051');
const smo282052 = new VF.Annotation('a');
smo282052.setAttribute('id', 'smo282052');
smo282052.setFont('times', 12, 'normal');
smo282052.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282051.addModifier(smo282052);
smo282052.addClass('lyric lyric-0');
smo282076v0ar.push(smo282051);
const smo282053 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo282053.setAttribute('id', 'smo282053');
smo282076v0ar.push(smo282053);
const smo282054 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo282054.setAttribute('id', 'smo282054');
const smo282055 = new VF.Annotation('Ki');
smo282055.setAttribute('id', 'smo282055');
smo282055.setFont('times', 12, 'normal');
smo282055.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282054.addModifier(smo282055);
smo282055.addClass('lyric lyric-0 lyric-hyphen');
smo282076v0ar.push(smo282054);
const smo282056 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo282056.setAttribute('id', 'smo282056');
smo282076v0ar.push(smo282056);
const smo282057 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo282057.setAttribute('id', 'smo282057');
const smo282058 = new VF.Annotation('ki');
smo282058.setAttribute('id', 'smo282058');
smo282058.setFont('times', 12, 'normal');
smo282058.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282057.addModifier(smo282058);
smo282058.addClass('lyric lyric-0');
smo282076v0ar.push(smo282057);
const smo282059 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo282059.setAttribute('id', 'smo282059');
const smo282060 = new VF.Annotation('ri');
smo282060.setAttribute('id', 'smo282060');
smo282060.setFont('times', 12, 'normal');
smo282060.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282059.addModifier(smo282060);
smo282060.addClass('lyric lyric-0');
smo282076v0ar.push(smo282059);
smo282076v0.addTickables(smo282076v0ar)
fmtsmo28207665.joinVoices([smo282076v0]);
const fmtsmo28511665 = new VF.Formatter();
//
// voices and notes for stave 10 65
const smo285116v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285116v0ar = [];
const smo285090 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo285090.setAttribute('id', 'smo285090');
const smo2850900acc = new VF.Accidental('b');
smo285090.addModifier(smo2850900acc, 0);
smo285116v0ar.push(smo285090);
const smo285091 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo285091.setAttribute('id', 'smo285091');
const smo285092 = new VF.Annotation('a');
smo285092.setAttribute('id', 'smo285092');
smo285092.setFont('times', 12, 'normal');
smo285092.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285091.addModifier(smo285092);
smo285092.addClass('lyric lyric-0');
smo285116v0ar.push(smo285091);
const smo285093 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo285093.setAttribute('id', 'smo285093');
smo285116v0ar.push(smo285093);
const smo285094 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo285094.setAttribute('id', 'smo285094');
const smo285095 = new VF.Annotation('Ki');
smo285095.setAttribute('id', 'smo285095');
smo285095.setFont('times', 12, 'normal');
smo285095.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285094.addModifier(smo285095);
smo285095.addClass('lyric lyric-0 lyric-hyphen');
smo285116v0ar.push(smo285094);
const smo285096 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo285096.setAttribute('id', 'smo285096');
smo285116v0ar.push(smo285096);
const smo285097 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo285097.setAttribute('id', 'smo285097');
const smo285098 = new VF.Annotation('ki');
smo285098.setAttribute('id', 'smo285098');
smo285098.setFont('times', 12, 'normal');
smo285098.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285097.addModifier(smo285098);
smo285098.addClass('lyric lyric-0');
smo285116v0ar.push(smo285097);
const smo285099 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo285099.setAttribute('id', 'smo285099');
const smo285100 = new VF.Annotation('ri');
smo285100.setAttribute('id', 'smo285100');
smo285100.setFont('times', 12, 'normal');
smo285100.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285099.addModifier(smo285100);
smo285100.addClass('lyric lyric-0');
smo285116v0ar.push(smo285099);
smo285116v0.addTickables(smo285116v0ar)
fmtsmo28511665.joinVoices([smo285116v0]);
const fmtsmo28817065 = new VF.Formatter();
//
// voices and notes for stave 11 65
const smo288170v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo288170v0ar = [];
const smo288144 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo288144.setAttribute('id', 'smo288144');
const smo2881440acc = new VF.Accidental('b');
smo288144.addModifier(smo2881440acc, 0);
smo288170v0ar.push(smo288144);
const smo288145 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo288145.setAttribute('id', 'smo288145');
const smo288146 = new VF.Annotation('a');
smo288146.setAttribute('id', 'smo288146');
smo288146.setFont('times', 12, 'normal');
smo288146.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288145.addModifier(smo288146);
smo288146.addClass('lyric lyric-0');
smo288170v0ar.push(smo288145);
const smo288147 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo288147.setAttribute('id', 'smo288147');
smo288170v0ar.push(smo288147);
const smo288148 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo288148.setAttribute('id', 'smo288148');
const smo288149 = new VF.Annotation('Ki');
smo288149.setAttribute('id', 'smo288149');
smo288149.setFont('times', 12, 'normal');
smo288149.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288148.addModifier(smo288149);
smo288149.addClass('lyric lyric-0 lyric-hyphen');
smo288170v0ar.push(smo288148);
const smo288150 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo288150.setAttribute('id', 'smo288150');
smo288170v0ar.push(smo288150);
const smo288151 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo288151.setAttribute('id', 'smo288151');
const smo288152 = new VF.Annotation('ki');
smo288152.setAttribute('id', 'smo288152');
smo288152.setFont('times', 12, 'normal');
smo288152.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288151.addModifier(smo288152);
smo288152.addClass('lyric lyric-0');
smo288170v0ar.push(smo288151);
const smo288153 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo288153.setAttribute('id', 'smo288153');
const smo288154 = new VF.Annotation('ri');
smo288154.setAttribute('id', 'smo288154');
smo288154.setFont('times', 12, 'normal');
smo288154.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288153.addModifier(smo288154);
smo288154.addClass('lyric lyric-0');
smo288170v0ar.push(smo288153);
smo288170v0.addTickables(smo288170v0ar)
fmtsmo28817065.joinVoices([smo288170v0]);
const fmtsmo29121365 = new VF.Formatter();
//
// voices and notes for stave 12 65
const smo291213v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo291213v0ar = [];
const smo291187 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo291187.setAttribute('id', 'smo291187');
const smo2911870acc = new VF.Accidental('b');
smo291187.addModifier(smo2911870acc, 0);
smo291213v0ar.push(smo291187);
const smo291188 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo291188.setAttribute('id', 'smo291188');
const smo291189 = new VF.Annotation('a');
smo291189.setAttribute('id', 'smo291189');
smo291189.setFont('times', 12, 'normal');
smo291189.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291188.addModifier(smo291189);
smo291189.addClass('lyric lyric-0');
smo291213v0ar.push(smo291188);
const smo291190 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo291190.setAttribute('id', 'smo291190');
smo291213v0ar.push(smo291190);
const smo291191 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo291191.setAttribute('id', 'smo291191');
const smo291192 = new VF.Annotation('Ki');
smo291192.setAttribute('id', 'smo291192');
smo291192.setFont('times', 12, 'normal');
smo291192.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291191.addModifier(smo291192);
smo291192.addClass('lyric lyric-0 lyric-hyphen');
smo291213v0ar.push(smo291191);
const smo291193 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo291193.setAttribute('id', 'smo291193');
smo291213v0ar.push(smo291193);
const smo291194 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo291194.setAttribute('id', 'smo291194');
const smo291195 = new VF.Annotation('ki');
smo291195.setAttribute('id', 'smo291195');
smo291195.setFont('times', 12, 'normal');
smo291195.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291194.addModifier(smo291195);
smo291195.addClass('lyric lyric-0');
smo291213v0ar.push(smo291194);
const smo291196 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo291196.setAttribute('id', 'smo291196');
const smo291197 = new VF.Annotation('ri');
smo291197.setAttribute('id', 'smo291197');
smo291197.setFont('times', 12, 'normal');
smo291197.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291196.addModifier(smo291197);
smo291197.addClass('lyric lyric-0');
smo291213v0ar.push(smo291196);
smo291213v0.addTickables(smo291213v0ar)
fmtsmo29121365.joinVoices([smo291213v0]);
const fmtsmo29441965 = new VF.Formatter();
//
// voices and notes for stave 13 65
const smo294419v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294419v0ar = [];
const smo294399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","eb/5/n"]}'))
smo294399.setAttribute('id', 'smo294399');
const smo2943992acc = new VF.Accidental('b');
smo294399.addModifier(smo2943992acc, 2);
smo294399.addModifier(new VF.Dot(), 0);
smo294399.addModifier(new VF.Dot(), 1);
smo294399.addModifier(new VF.Dot(), 2);
smo294419v0ar.push(smo294399);
const smo294400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo294400.setAttribute('id', 'smo294400');
const smo2944000acc = new VF.Accidental('#');
smo294400.addModifier(smo2944000acc, 0);
smo294419v0ar.push(smo294400);
const smo294401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo294401.setAttribute('id', 'smo294401');
smo294419v0ar.push(smo294401);
const smo294402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo294402.setAttribute('id', 'smo294402');
smo294419v0ar.push(smo294402);
const smo294403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo294403.setAttribute('id', 'smo294403');
smo294419v0ar.push(smo294403);
smo294419v0.addTickables(smo294419v0ar)
fmtsmo29441965.joinVoices([smo294419v0]);
const fmtsmo29763265 = new VF.Formatter();
//
// voices and notes for stave 14 65
const smo297632v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297632v0ar = [];
const smo297612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","eb/5/n"]}'))
smo297612.setAttribute('id', 'smo297612');
const smo2976122acc = new VF.Accidental('b');
smo297612.addModifier(smo2976122acc, 2);
smo297612.addModifier(new VF.Dot(), 0);
smo297612.addModifier(new VF.Dot(), 1);
smo297612.addModifier(new VF.Dot(), 2);
smo297632v0ar.push(smo297612);
const smo297613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo297613.setAttribute('id', 'smo297613');
const smo2976130acc = new VF.Accidental('#');
smo297613.addModifier(smo2976130acc, 0);
smo297632v0ar.push(smo297613);
const smo297614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo297614.setAttribute('id', 'smo297614');
smo297632v0ar.push(smo297614);
const smo297615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo297615.setAttribute('id', 'smo297615');
smo297632v0ar.push(smo297615);
const smo297616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo297616.setAttribute('id', 'smo297616');
smo297632v0ar.push(smo297616);
smo297632v0.addTickables(smo297632v0ar)
fmtsmo29763265.joinVoices([smo297632v0]);
const fmtsmo30082765 = new VF.Formatter();
//
// voices and notes for stave 15 65
const smo300827v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300827v0ar = [];
const smo300807 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo300807.setAttribute('id', 'smo300807');
smo300807.addModifier(new VF.Dot(), 0);
smo300827v0ar.push(smo300807);
const smo300808 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo300808.setAttribute('id', 'smo300808');
const smo3008080acc = new VF.Accidental('#');
smo300808.addModifier(smo3008080acc, 0);
smo300827v0ar.push(smo300808);
const smo300809 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo300809.setAttribute('id', 'smo300809');
smo300827v0ar.push(smo300809);
const smo300810 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo300810.setAttribute('id', 'smo300810');
smo300827v0ar.push(smo300810);
const smo300811 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo300811.setAttribute('id', 'smo300811');
smo300827v0ar.push(smo300811);
smo300827v0.addTickables(smo300827v0ar)
fmtsmo30082765.joinVoices([smo300827v0]);
const fmtsmo30394465 = new VF.Formatter();
//
// voices and notes for stave 16 65
const smo303944v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303944v0ar = [];
const smo303925 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo303925.setAttribute('id', 'smo303925');
smo303925.addModifier(new VF.Dot(), 0);
smo303944v0ar.push(smo303925);
const smo303926 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo303926.setAttribute('id', 'smo303926');
smo303944v0ar.push(smo303926);
const smo303927 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo303927.setAttribute('id', 'smo303927');
smo303944v0ar.push(smo303927);
const smo303928 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo303928.setAttribute('id', 'smo303928');
smo303944v0ar.push(smo303928);
smo303944v0.addTickables(smo303944v0ar)
fmtsmo30394465.joinVoices([smo303944v0]);
const fmtsmo30713365 = new VF.Formatter();
//
// voices and notes for stave 17 65
const smo307133v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307133v0ar = [];
const smo307114 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo307114.setAttribute('id', 'smo307114');
const smo3071140acc = new VF.Accidental('n');
smo307114.addModifier(smo3071140acc, 0);
smo307114.addModifier(new VF.Dot(), 0);
smo307133v0ar.push(smo307114);
const smo307115 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo307115.setAttribute('id', 'smo307115');
smo307133v0ar.push(smo307115);
const smo307116 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo307116.setAttribute('id', 'smo307116');
smo307133v0ar.push(smo307116);
const smo307117 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo307117.setAttribute('id', 'smo307117');
smo307133v0ar.push(smo307117);
smo307133v0.addTickables(smo307133v0ar)
fmtsmo30713365.joinVoices([smo307133v0]);
// create beam groups and tuplets for format grp smo308886 before formatting
const dirsmo400262 = smo254275.getStemDirection();
smo254275.setStemDirection(dirsmo400262);
smo254276.setStemDirection(dirsmo400262);
const smo400262 = new VF.Beam([smo254275,smo254276]);
const dirsmo400263 = smo254279.getStemDirection();
smo254279.setStemDirection(dirsmo400263);
smo254281.setStemDirection(dirsmo400263);
const smo400263 = new VF.Beam([smo254279,smo254281]);
const dirsmo400266 = smo257269.getStemDirection();
smo257269.setStemDirection(dirsmo400266);
smo257270.setStemDirection(dirsmo400266);
const smo400266 = new VF.Beam([smo257269,smo257270]);
const dirsmo400267 = smo257273.getStemDirection();
smo257273.setStemDirection(dirsmo400267);
smo257275.setStemDirection(dirsmo400267);
const smo400267 = new VF.Beam([smo257273,smo257275]);
const dirsmo400270 = smo260412.getStemDirection();
smo260412.setStemDirection(dirsmo400270);
smo260413.setStemDirection(dirsmo400270);
const smo400270 = new VF.Beam([smo260412,smo260413]);
const dirsmo400271 = smo260416.getStemDirection();
smo260416.setStemDirection(dirsmo400271);
smo260418.setStemDirection(dirsmo400271);
const smo400271 = new VF.Beam([smo260416,smo260418]);
const dirsmo400274 = smo263528.getStemDirection();
smo263528.setStemDirection(dirsmo400274);
smo263529.setStemDirection(dirsmo400274);
const smo400274 = new VF.Beam([smo263528,smo263529]);
const dirsmo400275 = smo263532.getStemDirection();
smo263532.setStemDirection(dirsmo400275);
smo263534.setStemDirection(dirsmo400275);
const smo400275 = new VF.Beam([smo263532,smo263534]);
const dirsmo400278 = smo266547.getStemDirection();
smo266547.setStemDirection(dirsmo400278);
smo266548.setStemDirection(dirsmo400278);
const smo400278 = new VF.Beam([smo266547,smo266548]);
const dirsmo400279 = smo266551.getStemDirection();
smo266551.setStemDirection(dirsmo400279);
smo266553.setStemDirection(dirsmo400279);
const smo400279 = new VF.Beam([smo266551,smo266553]);
 
// formatting measures in staff group smo308886
fmtsmo25430165.format([smo254301v0,smo257295v0,smo260438v0,smo263554v0,smo266573v0], 288);
const stavesmo254301 = new VF.Stave(808, 210, 302);
stavesmo254301.setAttribute('id', 'stavesmo254301');
stavesmo254301.setBegBarType(VF.Barline.type.NONE);
stavesmo254301.setContext(context);
stavesmo254301.draw();
smo254301v0.draw(context, stavesmo254301);
smo400262.setContext(context);
smo400262.draw();
smo400263.setContext(context);
smo400263.draw();
const stavesmo257295 = new VF.Stave(808, 316, 302);
stavesmo257295.setAttribute('id', 'stavesmo257295');
stavesmo257295.setBegBarType(VF.Barline.type.NONE);
stavesmo257295.setContext(context);
stavesmo257295.draw();
smo257295v0.draw(context, stavesmo257295);
smo400266.setContext(context);
smo400266.draw();
smo400267.setContext(context);
smo400267.draw();
const stavesmo260438 = new VF.Stave(808, 437, 302);
stavesmo260438.setAttribute('id', 'stavesmo260438');
stavesmo260438.setBegBarType(VF.Barline.type.NONE);
stavesmo260438.setContext(context);
stavesmo260438.draw();
smo260438v0.draw(context, stavesmo260438);
smo400270.setContext(context);
smo400270.draw();
smo400271.setContext(context);
smo400271.draw();
const stavesmo263554 = new VF.Stave(808, 553, 302);
stavesmo263554.setAttribute('id', 'stavesmo263554');
stavesmo263554.setBegBarType(VF.Barline.type.NONE);
stavesmo263554.setContext(context);
stavesmo263554.draw();
smo263554v0.draw(context, stavesmo263554);
smo400274.setContext(context);
smo400274.draw();
smo400275.setContext(context);
smo400275.draw();
const stavesmo266573 = new VF.Stave(808, 659, 302);
stavesmo266573.setAttribute('id', 'stavesmo266573');
stavesmo266573.setBegBarType(VF.Barline.type.NONE);
stavesmo266573.setContext(context);
stavesmo266573.draw();
smo266573v0.draw(context, stavesmo266573);
smo400278.setContext(context);
smo400278.draw();
smo400279.setContext(context);
smo400279.draw();
// create beam groups and tuplets for format grp smo308888 before formatting
const dirsmo400282 = smo269654.getStemDirection();
smo269654.setStemDirection(dirsmo400282);
smo269655.setStemDirection(dirsmo400282);
const smo400282 = new VF.Beam([smo269654,smo269655]);
const dirsmo400283 = smo269658.getStemDirection();
smo269658.setStemDirection(dirsmo400283);
smo269660.setStemDirection(dirsmo400283);
const smo400283 = new VF.Beam([smo269658,smo269660]);
const dirsmo400286 = smo272766.getStemDirection();
smo272766.setStemDirection(dirsmo400286);
smo272767.setStemDirection(dirsmo400286);
const smo400286 = new VF.Beam([smo272766,smo272767]);
const dirsmo400287 = smo272770.getStemDirection();
smo272770.setStemDirection(dirsmo400287);
smo272772.setStemDirection(dirsmo400287);
const smo400287 = new VF.Beam([smo272770,smo272772]);
const dirsmo400290 = smo275875.getStemDirection();
smo275875.setStemDirection(dirsmo400290);
smo275876.setStemDirection(dirsmo400290);
const smo400290 = new VF.Beam([smo275875,smo275876]);
const dirsmo400291 = smo275879.getStemDirection();
smo275879.setStemDirection(dirsmo400291);
smo275881.setStemDirection(dirsmo400291);
const smo400291 = new VF.Beam([smo275879,smo275881]);
const dirsmo400294 = smo278961.getStemDirection();
smo278961.setStemDirection(dirsmo400294);
smo278962.setStemDirection(dirsmo400294);
const smo400294 = new VF.Beam([smo278961,smo278962]);
const dirsmo400295 = smo278965.getStemDirection();
smo278965.setStemDirection(dirsmo400295);
smo278967.setStemDirection(dirsmo400295);
const smo400295 = new VF.Beam([smo278965,smo278967]);
 
// formatting measures in staff group smo308888
fmtsmo26968065.format([smo269680v0,smo272792v0,smo275901v0,smo278987v0], 288);
const stavesmo269680 = new VF.Stave(808, 780, 302);
stavesmo269680.setAttribute('id', 'stavesmo269680');
stavesmo269680.setBegBarType(VF.Barline.type.NONE);
stavesmo269680.setContext(context);
stavesmo269680.draw();
smo269680v0.draw(context, stavesmo269680);
smo400282.setContext(context);
smo400282.draw();
smo400283.setContext(context);
smo400283.draw();
const stavesmo272792 = new VF.Stave(808, 896, 302);
stavesmo272792.setAttribute('id', 'stavesmo272792');
stavesmo272792.setBegBarType(VF.Barline.type.NONE);
stavesmo272792.setContext(context);
stavesmo272792.draw();
smo272792v0.draw(context, stavesmo272792);
smo400286.setContext(context);
smo400286.draw();
smo400287.setContext(context);
smo400287.draw();
const stavesmo275901 = new VF.Stave(808, 1012, 302);
stavesmo275901.setAttribute('id', 'stavesmo275901');
stavesmo275901.setBegBarType(VF.Barline.type.NONE);
stavesmo275901.setContext(context);
stavesmo275901.draw();
smo275901v0.draw(context, stavesmo275901);
smo400290.setContext(context);
smo400290.draw();
smo400291.setContext(context);
smo400291.draw();
const stavesmo278987 = new VF.Stave(808, 1128, 302);
stavesmo278987.setAttribute('id', 'stavesmo278987');
stavesmo278987.setBegBarType(VF.Barline.type.NONE);
stavesmo278987.setContext(context);
stavesmo278987.draw();
smo278987v0.draw(context, stavesmo278987);
smo400294.setContext(context);
smo400294.draw();
smo400295.setContext(context);
smo400295.draw();
// create beam groups and tuplets for format grp smo308890 before formatting
const dirsmo400298 = smo282050.getStemDirection();
smo282050.setStemDirection(dirsmo400298);
smo282051.setStemDirection(dirsmo400298);
const smo400298 = new VF.Beam([smo282050,smo282051]);
const dirsmo400299 = smo282054.getStemDirection();
smo282054.setStemDirection(dirsmo400299);
smo282056.setStemDirection(dirsmo400299);
const smo400299 = new VF.Beam([smo282054,smo282056]);
const dirsmo400302 = smo285090.getStemDirection();
smo285090.setStemDirection(dirsmo400302);
smo285091.setStemDirection(dirsmo400302);
const smo400302 = new VF.Beam([smo285090,smo285091]);
const dirsmo400303 = smo285094.getStemDirection();
smo285094.setStemDirection(dirsmo400303);
smo285096.setStemDirection(dirsmo400303);
const smo400303 = new VF.Beam([smo285094,smo285096]);
const dirsmo400306 = smo288144.getStemDirection();
smo288144.setStemDirection(dirsmo400306);
smo288145.setStemDirection(dirsmo400306);
const smo400306 = new VF.Beam([smo288144,smo288145]);
const dirsmo400307 = smo288148.getStemDirection();
smo288148.setStemDirection(dirsmo400307);
smo288150.setStemDirection(dirsmo400307);
const smo400307 = new VF.Beam([smo288148,smo288150]);
const dirsmo400310 = smo291187.getStemDirection();
smo291187.setStemDirection(dirsmo400310);
smo291188.setStemDirection(dirsmo400310);
const smo400310 = new VF.Beam([smo291187,smo291188]);
const dirsmo400311 = smo291191.getStemDirection();
smo291191.setStemDirection(dirsmo400311);
smo291193.setStemDirection(dirsmo400311);
const smo400311 = new VF.Beam([smo291191,smo291193]);
 
// formatting measures in staff group smo308890
fmtsmo28207665.format([smo282076v0,smo285116v0,smo288170v0,smo291213v0], 288);
const stavesmo282076 = new VF.Stave(808, 1264, 302);
stavesmo282076.setAttribute('id', 'stavesmo282076');
stavesmo282076.setBegBarType(VF.Barline.type.NONE);
stavesmo282076.setContext(context);
stavesmo282076.draw();
smo282076v0.draw(context, stavesmo282076);
smo400298.setContext(context);
smo400298.draw();
smo400299.setContext(context);
smo400299.draw();
const stavesmo285116 = new VF.Stave(808, 1400, 302);
stavesmo285116.setAttribute('id', 'stavesmo285116');
stavesmo285116.setBegBarType(VF.Barline.type.NONE);
stavesmo285116.setContext(context);
stavesmo285116.draw();
smo285116v0.draw(context, stavesmo285116);
smo400302.setContext(context);
smo400302.draw();
smo400303.setContext(context);
smo400303.draw();
const stavesmo288170 = new VF.Stave(808, 1536, 302);
stavesmo288170.setAttribute('id', 'stavesmo288170');
stavesmo288170.setBegBarType(VF.Barline.type.NONE);
stavesmo288170.setContext(context);
stavesmo288170.draw();
smo288170v0.draw(context, stavesmo288170);
smo400306.setContext(context);
smo400306.draw();
smo400307.setContext(context);
smo400307.draw();
const stavesmo291213 = new VF.Stave(808, 1672, 302);
stavesmo291213.setAttribute('id', 'stavesmo291213');
stavesmo291213.setBegBarType(VF.Barline.type.NONE);
stavesmo291213.setContext(context);
stavesmo291213.draw();
smo291213v0.draw(context, stavesmo291213);
smo400310.setContext(context);
smo400310.draw();
smo400311.setContext(context);
smo400311.draw();
// create beam groups and tuplets for format grp smo296209 before formatting
const dirsmo400314 = smo294400.getStemDirection();
smo294400.setStemDirection(dirsmo400314);
smo294401.setStemDirection(dirsmo400314);
const smo400314 = new VF.Beam([smo294400,smo294401]);
 
// formatting measures in staff group smo296209
fmtsmo29441965.format([smo294419v0], 288);
const stavesmo294419 = new VF.Stave(808, 1818, 302);
stavesmo294419.setAttribute('id', 'stavesmo294419');
stavesmo294419.setBegBarType(VF.Barline.type.NONE);
stavesmo294419.setContext(context);
stavesmo294419.draw();
smo294419v0.draw(context, stavesmo294419);
smo400314.setContext(context);
smo400314.draw();
// create beam groups and tuplets for format grp smo308884 before formatting
const dirsmo400317 = smo297613.getStemDirection();
smo297613.setStemDirection(dirsmo400317);
smo297614.setStemDirection(dirsmo400317);
const smo400317 = new VF.Beam([smo297613,smo297614]);
const dirsmo400320 = smo300808.getStemDirection();
smo300808.setStemDirection(dirsmo400320);
smo300809.setStemDirection(dirsmo400320);
const smo400320 = new VF.Beam([smo300808,smo300809]);
 
// formatting measures in staff group smo308884
fmtsmo29763265.format([smo297632v0,smo300827v0], 288);
const stavesmo297632 = new VF.Stave(808, 1924, 302);
stavesmo297632.setAttribute('id', 'stavesmo297632');
stavesmo297632.setBegBarType(VF.Barline.type.NONE);
stavesmo297632.setContext(context);
stavesmo297632.draw();
smo297632v0.draw(context, stavesmo297632);
smo400317.setContext(context);
smo400317.draw();
const stavesmo300827 = new VF.Stave(808, 2010, 302);
stavesmo300827.setAttribute('id', 'stavesmo300827');
stavesmo300827.setBegBarType(VF.Barline.type.NONE);
stavesmo300827.setContext(context);
stavesmo300827.draw();
smo300827v0.draw(context, stavesmo300827);
smo400320.setContext(context);
smo400320.draw();
// create beam groups and tuplets for format grp smo305722 before formatting
 
// formatting measures in staff group smo305722
fmtsmo30394465.format([smo303944v0], 288);
const stavesmo303944 = new VF.Stave(808, 2081, 302);
stavesmo303944.setAttribute('id', 'stavesmo303944');
stavesmo303944.setBegBarType(VF.Barline.type.NONE);
stavesmo303944.setContext(context);
stavesmo303944.draw();
smo303944v0.draw(context, stavesmo303944);
// create beam groups and tuplets for format grp smo308878 before formatting
 
// formatting measures in staff group smo308878
fmtsmo30713365.format([smo307133v0], 288);
const stavesmo307133 = new VF.Stave(808, 2152, 302);
stavesmo307133.setAttribute('id', 'stavesmo307133');
stavesmo307133.setBegBarType(VF.Barline.type.NONE);
stavesmo307133.setContext(context);
stavesmo307133.draw();
smo307133v0.draw(context, stavesmo307133);
const fmtsmo25433066 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo254330v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo254330v0ar = [];
const smo254302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo254302.setAttribute('id', 'smo254302');
const smo254303 = new VF.Annotation('bun');
smo254303.setAttribute('id', 'smo254303');
smo254303.setFont('times', 12, 'normal');
smo254303.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254302.addModifier(smo254303);
smo254303.addClass('lyric lyric-0');
smo254330v0ar.push(smo254302);
const smo254304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo254304.setAttribute('id', 'smo254304');
const smo254305 = new VF.Annotation('yi');
smo254305.setAttribute('id', 'smo254305');
smo254305.setFont('times', 12, 'normal');
smo254305.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254304.addModifier(smo254305);
smo254305.addClass('lyric lyric-0 lyric-hyphen');
smo254330v0ar.push(smo254304);
const smo254306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo254306.setAttribute('id', 'smo254306');
const smo254307 = new VF.Annotation('ri');
smo254307.setAttribute('id', 'smo254307');
smo254307.setFont('times', 12, 'normal');
smo254307.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254306.addModifier(smo254307);
smo254307.addClass('lyric lyric-0');
smo254330v0ar.push(smo254306);
const smo254308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo254308.setAttribute('id', 'smo254308');
const smo254309 = new VF.Annotation('bun');
smo254309.setAttribute('id', 'smo254309');
smo254309.setFont('times', 12, 'normal');
smo254309.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254308.addModifier(smo254309);
smo254309.addClass('lyric lyric-0');
smo254330v0ar.push(smo254308);
const smo254310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo254310.setAttribute('id', 'smo254310');
const smo254311 = new VF.Annotation('Man');
smo254311.setAttribute('id', 'smo254311');
smo254311.setFont('times', 12, 'normal');
smo254311.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254310.addModifier(smo254311);
smo254311.addClass('lyric lyric-0 lyric-hyphen');
smo254330v0ar.push(smo254310);
const smo254312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo254312.setAttribute('id', 'smo254312');
smo254330v0ar.push(smo254312);
const smo254313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo254313.setAttribute('id', 'smo254313');
const smo254314 = new VF.Annotation('ding');
smo254314.setAttribute('id', 'smo254314');
smo254314.setFont('times', 12, 'normal');
smo254314.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254313.addModifier(smo254314);
smo254314.addClass('lyric lyric-0 lyric-hyphen');
smo254330v0ar.push(smo254313);
smo254330v0.addTickables(smo254330v0ar)
fmtsmo25433066.joinVoices([smo254330v0]);
const fmtsmo25732466 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo257324v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257324v0ar = [];
const smo257296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo257296.setAttribute('id', 'smo257296');
const smo257297 = new VF.Annotation('bun');
smo257297.setAttribute('id', 'smo257297');
smo257297.setFont('times', 12, 'normal');
smo257297.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257296.addModifier(smo257297);
smo257297.addClass('lyric lyric-0');
smo257324v0ar.push(smo257296);
const smo257298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo257298.setAttribute('id', 'smo257298');
const smo257299 = new VF.Annotation('yi');
smo257299.setAttribute('id', 'smo257299');
smo257299.setFont('times', 12, 'normal');
smo257299.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257298.addModifier(smo257299);
smo257299.addClass('lyric lyric-0 lyric-hyphen');
smo257324v0ar.push(smo257298);
const smo257300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo257300.setAttribute('id', 'smo257300');
const smo257301 = new VF.Annotation('ri');
smo257301.setAttribute('id', 'smo257301');
smo257301.setFont('times', 12, 'normal');
smo257301.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257300.addModifier(smo257301);
smo257301.addClass('lyric lyric-0');
smo257324v0ar.push(smo257300);
const smo257302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo257302.setAttribute('id', 'smo257302');
const smo257303 = new VF.Annotation('bun');
smo257303.setAttribute('id', 'smo257303');
smo257303.setFont('times', 12, 'normal');
smo257303.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257302.addModifier(smo257303);
smo257303.addClass('lyric lyric-0');
smo257324v0ar.push(smo257302);
const smo257304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo257304.setAttribute('id', 'smo257304');
const smo257305 = new VF.Annotation('Man');
smo257305.setAttribute('id', 'smo257305');
smo257305.setFont('times', 12, 'normal');
smo257305.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257304.addModifier(smo257305);
smo257305.addClass('lyric lyric-0 lyric-hyphen');
smo257324v0ar.push(smo257304);
const smo257306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo257306.setAttribute('id', 'smo257306');
smo257324v0ar.push(smo257306);
const smo257307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo257307.setAttribute('id', 'smo257307');
const smo257308 = new VF.Annotation('ding');
smo257308.setAttribute('id', 'smo257308');
smo257308.setFont('times', 12, 'normal');
smo257308.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257307.addModifier(smo257308);
smo257308.addClass('lyric lyric-0 lyric-hyphen');
smo257324v0ar.push(smo257307);
smo257324v0.addTickables(smo257324v0ar)
fmtsmo25732466.joinVoices([smo257324v0]);
const fmtsmo26046766 = new VF.Formatter();
//
// voices and notes for stave 2 66
const smo260467v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260467v0ar = [];
const smo260439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo260439.setAttribute('id', 'smo260439');
const smo260440 = new VF.Annotation('bun');
smo260440.setAttribute('id', 'smo260440');
smo260440.setFont('times', 12, 'normal');
smo260440.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260439.addModifier(smo260440);
smo260440.addClass('lyric lyric-0');
smo260467v0ar.push(smo260439);
const smo260441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo260441.setAttribute('id', 'smo260441');
const smo260442 = new VF.Annotation('yi');
smo260442.setAttribute('id', 'smo260442');
smo260442.setFont('times', 12, 'normal');
smo260442.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260441.addModifier(smo260442);
smo260442.addClass('lyric lyric-0 lyric-hyphen');
smo260467v0ar.push(smo260441);
const smo260443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo260443.setAttribute('id', 'smo260443');
const smo260444 = new VF.Annotation('ri');
smo260444.setAttribute('id', 'smo260444');
smo260444.setFont('times', 12, 'normal');
smo260444.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260443.addModifier(smo260444);
smo260444.addClass('lyric lyric-0');
smo260467v0ar.push(smo260443);
const smo260445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo260445.setAttribute('id', 'smo260445');
const smo260446 = new VF.Annotation('bun');
smo260446.setAttribute('id', 'smo260446');
smo260446.setFont('times', 12, 'normal');
smo260446.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260445.addModifier(smo260446);
smo260446.addClass('lyric lyric-0');
smo260467v0ar.push(smo260445);
const smo260447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo260447.setAttribute('id', 'smo260447');
const smo260448 = new VF.Annotation('Man');
smo260448.setAttribute('id', 'smo260448');
smo260448.setFont('times', 12, 'normal');
smo260448.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260447.addModifier(smo260448);
smo260448.addClass('lyric lyric-0 lyric-hyphen');
smo260467v0ar.push(smo260447);
const smo260449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo260449.setAttribute('id', 'smo260449');
smo260467v0ar.push(smo260449);
const smo260450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo260450.setAttribute('id', 'smo260450');
const smo260451 = new VF.Annotation('ding');
smo260451.setAttribute('id', 'smo260451');
smo260451.setFont('times', 12, 'normal');
smo260451.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260450.addModifier(smo260451);
smo260451.addClass('lyric lyric-0 lyric-hyphen');
smo260467v0ar.push(smo260450);
smo260467v0.addTickables(smo260467v0ar)
fmtsmo26046766.joinVoices([smo260467v0]);
const fmtsmo26358366 = new VF.Formatter();
//
// voices and notes for stave 3 66
const smo263583v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263583v0ar = [];
const smo263555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo263555.setAttribute('id', 'smo263555');
const smo263556 = new VF.Annotation('bun');
smo263556.setAttribute('id', 'smo263556');
smo263556.setFont('times', 12, 'normal');
smo263556.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263555.addModifier(smo263556);
smo263556.addClass('lyric lyric-0');
smo263583v0ar.push(smo263555);
const smo263557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo263557.setAttribute('id', 'smo263557');
const smo263558 = new VF.Annotation('yi');
smo263558.setAttribute('id', 'smo263558');
smo263558.setFont('times', 12, 'normal');
smo263558.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263557.addModifier(smo263558);
smo263558.addClass('lyric lyric-0 lyric-hyphen');
smo263583v0ar.push(smo263557);
const smo263559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo263559.setAttribute('id', 'smo263559');
const smo263560 = new VF.Annotation('ri');
smo263560.setAttribute('id', 'smo263560');
smo263560.setFont('times', 12, 'normal');
smo263560.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263559.addModifier(smo263560);
smo263560.addClass('lyric lyric-0');
smo263583v0ar.push(smo263559);
const smo263561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo263561.setAttribute('id', 'smo263561');
const smo263562 = new VF.Annotation('bun');
smo263562.setAttribute('id', 'smo263562');
smo263562.setFont('times', 12, 'normal');
smo263562.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263561.addModifier(smo263562);
smo263562.addClass('lyric lyric-0');
smo263583v0ar.push(smo263561);
const smo263563 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo263563.setAttribute('id', 'smo263563');
const smo263564 = new VF.Annotation('Man');
smo263564.setAttribute('id', 'smo263564');
smo263564.setFont('times', 12, 'normal');
smo263564.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263563.addModifier(smo263564);
smo263564.addClass('lyric lyric-0 lyric-hyphen');
smo263583v0ar.push(smo263563);
const smo263565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo263565.setAttribute('id', 'smo263565');
smo263583v0ar.push(smo263565);
const smo263566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo263566.setAttribute('id', 'smo263566');
const smo263567 = new VF.Annotation('ding');
smo263567.setAttribute('id', 'smo263567');
smo263567.setFont('times', 12, 'normal');
smo263567.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263566.addModifier(smo263567);
smo263567.addClass('lyric lyric-0 lyric-hyphen');
smo263583v0ar.push(smo263566);
smo263583v0.addTickables(smo263583v0ar)
fmtsmo26358366.joinVoices([smo263583v0]);
const fmtsmo26660266 = new VF.Formatter();
//
// voices and notes for stave 4 66
const smo266602v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266602v0ar = [];
const smo266574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266574.setAttribute('id', 'smo266574');
const smo266575 = new VF.Annotation('bun');
smo266575.setAttribute('id', 'smo266575');
smo266575.setFont('times', 12, 'normal');
smo266575.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266574.addModifier(smo266575);
smo266575.addClass('lyric lyric-0');
smo266602v0ar.push(smo266574);
const smo266576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266576.setAttribute('id', 'smo266576');
const smo266577 = new VF.Annotation('yi');
smo266577.setAttribute('id', 'smo266577');
smo266577.setFont('times', 12, 'normal');
smo266577.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266576.addModifier(smo266577);
smo266577.addClass('lyric lyric-0 lyric-hyphen');
smo266602v0ar.push(smo266576);
const smo266578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266578.setAttribute('id', 'smo266578');
const smo266579 = new VF.Annotation('ri');
smo266579.setAttribute('id', 'smo266579');
smo266579.setFont('times', 12, 'normal');
smo266579.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266578.addModifier(smo266579);
smo266579.addClass('lyric lyric-0');
smo266602v0ar.push(smo266578);
const smo266580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266580.setAttribute('id', 'smo266580');
const smo266581 = new VF.Annotation('bun');
smo266581.setAttribute('id', 'smo266581');
smo266581.setFont('times', 12, 'normal');
smo266581.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266580.addModifier(smo266581);
smo266581.addClass('lyric lyric-0');
smo266602v0ar.push(smo266580);
const smo266582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo266582.setAttribute('id', 'smo266582');
const smo266583 = new VF.Annotation('Man');
smo266583.setAttribute('id', 'smo266583');
smo266583.setFont('times', 12, 'normal');
smo266583.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266582.addModifier(smo266583);
smo266583.addClass('lyric lyric-0 lyric-hyphen');
smo266602v0ar.push(smo266582);
const smo266584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo266584.setAttribute('id', 'smo266584');
smo266602v0ar.push(smo266584);
const smo266585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266585.setAttribute('id', 'smo266585');
const smo266586 = new VF.Annotation('ding');
smo266586.setAttribute('id', 'smo266586');
smo266586.setFont('times', 12, 'normal');
smo266586.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266585.addModifier(smo266586);
smo266586.addClass('lyric lyric-0 lyric-hyphen');
smo266602v0ar.push(smo266585);
smo266602v0.addTickables(smo266602v0ar)
fmtsmo26660266.joinVoices([smo266602v0]);
const fmtsmo26970966 = new VF.Formatter();
//
// voices and notes for stave 5 66
const smo269709v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269709v0ar = [];
const smo269681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo269681.setAttribute('id', 'smo269681');
const smo269682 = new VF.Annotation('bun');
smo269682.setAttribute('id', 'smo269682');
smo269682.setFont('times', 12, 'normal');
smo269682.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269681.addModifier(smo269682);
smo269682.addClass('lyric lyric-0');
smo269709v0ar.push(smo269681);
const smo269683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo269683.setAttribute('id', 'smo269683');
const smo269684 = new VF.Annotation('yi');
smo269684.setAttribute('id', 'smo269684');
smo269684.setFont('times', 12, 'normal');
smo269684.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269683.addModifier(smo269684);
smo269684.addClass('lyric lyric-0 lyric-hyphen');
smo269709v0ar.push(smo269683);
const smo269685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo269685.setAttribute('id', 'smo269685');
const smo269686 = new VF.Annotation('ri');
smo269686.setAttribute('id', 'smo269686');
smo269686.setFont('times', 12, 'normal');
smo269686.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269685.addModifier(smo269686);
smo269686.addClass('lyric lyric-0');
smo269709v0ar.push(smo269685);
const smo269687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo269687.setAttribute('id', 'smo269687');
const smo269688 = new VF.Annotation('bun');
smo269688.setAttribute('id', 'smo269688');
smo269688.setFont('times', 12, 'normal');
smo269688.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269687.addModifier(smo269688);
smo269688.addClass('lyric lyric-0');
smo269709v0ar.push(smo269687);
const smo269689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo269689.setAttribute('id', 'smo269689');
const smo269690 = new VF.Annotation('Man');
smo269690.setAttribute('id', 'smo269690');
smo269690.setFont('times', 12, 'normal');
smo269690.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269689.addModifier(smo269690);
smo269690.addClass('lyric lyric-0 lyric-hyphen');
smo269709v0ar.push(smo269689);
const smo269691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo269691.setAttribute('id', 'smo269691');
smo269709v0ar.push(smo269691);
const smo269692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo269692.setAttribute('id', 'smo269692');
const smo269693 = new VF.Annotation('ding');
smo269693.setAttribute('id', 'smo269693');
smo269693.setFont('times', 12, 'normal');
smo269693.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269692.addModifier(smo269693);
smo269693.addClass('lyric lyric-0 lyric-hyphen');
smo269709v0ar.push(smo269692);
smo269709v0.addTickables(smo269709v0ar)
fmtsmo26970966.joinVoices([smo269709v0]);
const fmtsmo27282166 = new VF.Formatter();
//
// voices and notes for stave 6 66
const smo272821v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272821v0ar = [];
const smo272793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272793.setAttribute('id', 'smo272793');
const smo272794 = new VF.Annotation('bun');
smo272794.setAttribute('id', 'smo272794');
smo272794.setFont('times', 12, 'normal');
smo272794.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272793.addModifier(smo272794);
smo272794.addClass('lyric lyric-0');
smo272821v0ar.push(smo272793);
const smo272795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272795.setAttribute('id', 'smo272795');
const smo272796 = new VF.Annotation('yi');
smo272796.setAttribute('id', 'smo272796');
smo272796.setFont('times', 12, 'normal');
smo272796.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272795.addModifier(smo272796);
smo272796.addClass('lyric lyric-0 lyric-hyphen');
smo272821v0ar.push(smo272795);
const smo272797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272797.setAttribute('id', 'smo272797');
const smo272798 = new VF.Annotation('ri');
smo272798.setAttribute('id', 'smo272798');
smo272798.setFont('times', 12, 'normal');
smo272798.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272797.addModifier(smo272798);
smo272798.addClass('lyric lyric-0');
smo272821v0ar.push(smo272797);
const smo272799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272799.setAttribute('id', 'smo272799');
const smo272800 = new VF.Annotation('bun');
smo272800.setAttribute('id', 'smo272800');
smo272800.setFont('times', 12, 'normal');
smo272800.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272799.addModifier(smo272800);
smo272800.addClass('lyric lyric-0');
smo272821v0ar.push(smo272799);
const smo272801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo272801.setAttribute('id', 'smo272801');
const smo272802 = new VF.Annotation('Man');
smo272802.setAttribute('id', 'smo272802');
smo272802.setFont('times', 12, 'normal');
smo272802.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272801.addModifier(smo272802);
smo272802.addClass('lyric lyric-0 lyric-hyphen');
smo272821v0ar.push(smo272801);
const smo272803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo272803.setAttribute('id', 'smo272803');
smo272821v0ar.push(smo272803);
const smo272804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272804.setAttribute('id', 'smo272804');
const smo272805 = new VF.Annotation('ding');
smo272805.setAttribute('id', 'smo272805');
smo272805.setFont('times', 12, 'normal');
smo272805.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272804.addModifier(smo272805);
smo272805.addClass('lyric lyric-0 lyric-hyphen');
smo272821v0ar.push(smo272804);
smo272821v0.addTickables(smo272821v0ar)
fmtsmo27282166.joinVoices([smo272821v0]);
const fmtsmo27593066 = new VF.Formatter();
//
// voices and notes for stave 7 66
const smo275930v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275930v0ar = [];
const smo275902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275902.setAttribute('id', 'smo275902');
const smo275903 = new VF.Annotation('bun');
smo275903.setAttribute('id', 'smo275903');
smo275903.setFont('times', 12, 'normal');
smo275903.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275902.addModifier(smo275903);
smo275903.addClass('lyric lyric-0');
smo275930v0ar.push(smo275902);
const smo275904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275904.setAttribute('id', 'smo275904');
const smo275905 = new VF.Annotation('yi');
smo275905.setAttribute('id', 'smo275905');
smo275905.setFont('times', 12, 'normal');
smo275905.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275904.addModifier(smo275905);
smo275905.addClass('lyric lyric-0 lyric-hyphen');
smo275930v0ar.push(smo275904);
const smo275906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275906.setAttribute('id', 'smo275906');
const smo275907 = new VF.Annotation('ri');
smo275907.setAttribute('id', 'smo275907');
smo275907.setFont('times', 12, 'normal');
smo275907.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275906.addModifier(smo275907);
smo275907.addClass('lyric lyric-0');
smo275930v0ar.push(smo275906);
const smo275908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275908.setAttribute('id', 'smo275908');
const smo275909 = new VF.Annotation('bun');
smo275909.setAttribute('id', 'smo275909');
smo275909.setFont('times', 12, 'normal');
smo275909.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275908.addModifier(smo275909);
smo275909.addClass('lyric lyric-0');
smo275930v0ar.push(smo275908);
const smo275910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo275910.setAttribute('id', 'smo275910');
const smo275911 = new VF.Annotation('Man');
smo275911.setAttribute('id', 'smo275911');
smo275911.setFont('times', 12, 'normal');
smo275911.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275910.addModifier(smo275911);
smo275911.addClass('lyric lyric-0 lyric-hyphen');
smo275930v0ar.push(smo275910);
const smo275912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo275912.setAttribute('id', 'smo275912');
smo275930v0ar.push(smo275912);
const smo275913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo275913.setAttribute('id', 'smo275913');
const smo275914 = new VF.Annotation('ding');
smo275914.setAttribute('id', 'smo275914');
smo275914.setFont('times', 12, 'normal');
smo275914.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275913.addModifier(smo275914);
smo275914.addClass('lyric lyric-0 lyric-hyphen');
smo275930v0ar.push(smo275913);
smo275930v0.addTickables(smo275930v0ar)
fmtsmo27593066.joinVoices([smo275930v0]);
const fmtsmo27901666 = new VF.Formatter();
//
// voices and notes for stave 8 66
const smo279016v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo279016v0ar = [];
const smo278988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo278988.setAttribute('id', 'smo278988');
const smo278989 = new VF.Annotation('bun');
smo278989.setAttribute('id', 'smo278989');
smo278989.setFont('times', 12, 'normal');
smo278989.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278988.addModifier(smo278989);
smo278989.addClass('lyric lyric-0');
smo279016v0ar.push(smo278988);
const smo278990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo278990.setAttribute('id', 'smo278990');
const smo278991 = new VF.Annotation('yi');
smo278991.setAttribute('id', 'smo278991');
smo278991.setFont('times', 12, 'normal');
smo278991.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278990.addModifier(smo278991);
smo278991.addClass('lyric lyric-0 lyric-hyphen');
smo279016v0ar.push(smo278990);
const smo278992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo278992.setAttribute('id', 'smo278992');
const smo278993 = new VF.Annotation('ri');
smo278993.setAttribute('id', 'smo278993');
smo278993.setFont('times', 12, 'normal');
smo278993.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278992.addModifier(smo278993);
smo278993.addClass('lyric lyric-0');
smo279016v0ar.push(smo278992);
const smo278994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo278994.setAttribute('id', 'smo278994');
const smo278995 = new VF.Annotation('bun');
smo278995.setAttribute('id', 'smo278995');
smo278995.setFont('times', 12, 'normal');
smo278995.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278994.addModifier(smo278995);
smo278995.addClass('lyric lyric-0');
smo279016v0ar.push(smo278994);
const smo278996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo278996.setAttribute('id', 'smo278996');
const smo278997 = new VF.Annotation('Man');
smo278997.setAttribute('id', 'smo278997');
smo278997.setFont('times', 12, 'normal');
smo278997.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278996.addModifier(smo278997);
smo278997.addClass('lyric lyric-0 lyric-hyphen');
smo279016v0ar.push(smo278996);
const smo278998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo278998.setAttribute('id', 'smo278998');
smo279016v0ar.push(smo278998);
const smo278999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo278999.setAttribute('id', 'smo278999');
const smo279000 = new VF.Annotation('ding');
smo279000.setAttribute('id', 'smo279000');
smo279000.setFont('times', 12, 'normal');
smo279000.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278999.addModifier(smo279000);
smo279000.addClass('lyric lyric-0 lyric-hyphen');
smo279016v0ar.push(smo278999);
smo279016v0.addTickables(smo279016v0ar)
fmtsmo27901666.joinVoices([smo279016v0]);
const fmtsmo28210566 = new VF.Formatter();
//
// voices and notes for stave 9 66
const smo282105v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo282105v0ar = [];
const smo282077 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo282077.setAttribute('id', 'smo282077');
const smo282078 = new VF.Annotation('bun');
smo282078.setAttribute('id', 'smo282078');
smo282078.setFont('times', 12, 'normal');
smo282078.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282077.addModifier(smo282078);
smo282078.addClass('lyric lyric-0');
smo282105v0ar.push(smo282077);
const smo282079 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo282079.setAttribute('id', 'smo282079');
const smo282080 = new VF.Annotation('yi');
smo282080.setAttribute('id', 'smo282080');
smo282080.setFont('times', 12, 'normal');
smo282080.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282079.addModifier(smo282080);
smo282080.addClass('lyric lyric-0 lyric-hyphen');
smo282105v0ar.push(smo282079);
const smo282081 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo282081.setAttribute('id', 'smo282081');
const smo282082 = new VF.Annotation('ri');
smo282082.setAttribute('id', 'smo282082');
smo282082.setFont('times', 12, 'normal');
smo282082.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282081.addModifier(smo282082);
smo282082.addClass('lyric lyric-0');
smo282105v0ar.push(smo282081);
const smo282083 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo282083.setAttribute('id', 'smo282083');
const smo282084 = new VF.Annotation('bun');
smo282084.setAttribute('id', 'smo282084');
smo282084.setFont('times', 12, 'normal');
smo282084.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282083.addModifier(smo282084);
smo282084.addClass('lyric lyric-0');
smo282105v0ar.push(smo282083);
const smo282085 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo282085.setAttribute('id', 'smo282085');
const smo282086 = new VF.Annotation('Man');
smo282086.setAttribute('id', 'smo282086');
smo282086.setFont('times', 12, 'normal');
smo282086.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282085.addModifier(smo282086);
smo282086.addClass('lyric lyric-0 lyric-hyphen');
smo282105v0ar.push(smo282085);
const smo282087 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo282087.setAttribute('id', 'smo282087');
smo282105v0ar.push(smo282087);
const smo282088 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo282088.setAttribute('id', 'smo282088');
const smo282089 = new VF.Annotation('ding');
smo282089.setAttribute('id', 'smo282089');
smo282089.setFont('times', 12, 'normal');
smo282089.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282088.addModifier(smo282089);
smo282089.addClass('lyric lyric-0 lyric-hyphen');
smo282105v0ar.push(smo282088);
smo282105v0.addTickables(smo282105v0ar)
fmtsmo28210566.joinVoices([smo282105v0]);
const fmtsmo28514566 = new VF.Formatter();
//
// voices and notes for stave 10 66
const smo285145v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285145v0ar = [];
const smo285117 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo285117.setAttribute('id', 'smo285117');
const smo285118 = new VF.Annotation('bun');
smo285118.setAttribute('id', 'smo285118');
smo285118.setFont('times', 12, 'normal');
smo285118.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285117.addModifier(smo285118);
smo285118.addClass('lyric lyric-0');
smo285145v0ar.push(smo285117);
const smo285119 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo285119.setAttribute('id', 'smo285119');
const smo285120 = new VF.Annotation('yi');
smo285120.setAttribute('id', 'smo285120');
smo285120.setFont('times', 12, 'normal');
smo285120.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285119.addModifier(smo285120);
smo285120.addClass('lyric lyric-0 lyric-hyphen');
smo285145v0ar.push(smo285119);
const smo285121 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo285121.setAttribute('id', 'smo285121');
const smo285122 = new VF.Annotation('ri');
smo285122.setAttribute('id', 'smo285122');
smo285122.setFont('times', 12, 'normal');
smo285122.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285121.addModifier(smo285122);
smo285122.addClass('lyric lyric-0');
smo285145v0ar.push(smo285121);
const smo285123 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo285123.setAttribute('id', 'smo285123');
const smo285124 = new VF.Annotation('bun');
smo285124.setAttribute('id', 'smo285124');
smo285124.setFont('times', 12, 'normal');
smo285124.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285123.addModifier(smo285124);
smo285124.addClass('lyric lyric-0');
smo285145v0ar.push(smo285123);
const smo285125 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo285125.setAttribute('id', 'smo285125');
const smo285126 = new VF.Annotation('Man');
smo285126.setAttribute('id', 'smo285126');
smo285126.setFont('times', 12, 'normal');
smo285126.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285125.addModifier(smo285126);
smo285126.addClass('lyric lyric-0 lyric-hyphen');
smo285145v0ar.push(smo285125);
const smo285127 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo285127.setAttribute('id', 'smo285127');
smo285145v0ar.push(smo285127);
const smo285128 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo285128.setAttribute('id', 'smo285128');
const smo285129 = new VF.Annotation('ding');
smo285129.setAttribute('id', 'smo285129');
smo285129.setFont('times', 12, 'normal');
smo285129.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285128.addModifier(smo285129);
smo285129.addClass('lyric lyric-0 lyric-hyphen');
smo285145v0ar.push(smo285128);
smo285145v0.addTickables(smo285145v0ar)
fmtsmo28514566.joinVoices([smo285145v0]);
const fmtsmo28819966 = new VF.Formatter();
//
// voices and notes for stave 11 66
const smo288199v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo288199v0ar = [];
const smo288171 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo288171.setAttribute('id', 'smo288171');
const smo288172 = new VF.Annotation('bun');
smo288172.setAttribute('id', 'smo288172');
smo288172.setFont('times', 12, 'normal');
smo288172.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288171.addModifier(smo288172);
smo288172.addClass('lyric lyric-0');
smo288199v0ar.push(smo288171);
const smo288173 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo288173.setAttribute('id', 'smo288173');
const smo288174 = new VF.Annotation('yi');
smo288174.setAttribute('id', 'smo288174');
smo288174.setFont('times', 12, 'normal');
smo288174.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288173.addModifier(smo288174);
smo288174.addClass('lyric lyric-0 lyric-hyphen');
smo288199v0ar.push(smo288173);
const smo288175 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo288175.setAttribute('id', 'smo288175');
const smo288176 = new VF.Annotation('ri');
smo288176.setAttribute('id', 'smo288176');
smo288176.setFont('times', 12, 'normal');
smo288176.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288175.addModifier(smo288176);
smo288176.addClass('lyric lyric-0');
smo288199v0ar.push(smo288175);
const smo288177 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo288177.setAttribute('id', 'smo288177');
const smo288178 = new VF.Annotation('bun');
smo288178.setAttribute('id', 'smo288178');
smo288178.setFont('times', 12, 'normal');
smo288178.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288177.addModifier(smo288178);
smo288178.addClass('lyric lyric-0');
smo288199v0ar.push(smo288177);
const smo288179 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo288179.setAttribute('id', 'smo288179');
const smo288180 = new VF.Annotation('Man');
smo288180.setAttribute('id', 'smo288180');
smo288180.setFont('times', 12, 'normal');
smo288180.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288179.addModifier(smo288180);
smo288180.addClass('lyric lyric-0 lyric-hyphen');
smo288199v0ar.push(smo288179);
const smo288181 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo288181.setAttribute('id', 'smo288181');
smo288199v0ar.push(smo288181);
const smo288182 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo288182.setAttribute('id', 'smo288182');
const smo288183 = new VF.Annotation('ding');
smo288183.setAttribute('id', 'smo288183');
smo288183.setFont('times', 12, 'normal');
smo288183.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288182.addModifier(smo288183);
smo288183.addClass('lyric lyric-0 lyric-hyphen');
smo288199v0ar.push(smo288182);
smo288199v0.addTickables(smo288199v0ar)
fmtsmo28819966.joinVoices([smo288199v0]);
const fmtsmo29124266 = new VF.Formatter();
//
// voices and notes for stave 12 66
const smo291242v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo291242v0ar = [];
const smo291214 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo291214.setAttribute('id', 'smo291214');
const smo291215 = new VF.Annotation('bun');
smo291215.setAttribute('id', 'smo291215');
smo291215.setFont('times', 12, 'normal');
smo291215.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291214.addModifier(smo291215);
smo291215.addClass('lyric lyric-0');
smo291242v0ar.push(smo291214);
const smo291216 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo291216.setAttribute('id', 'smo291216');
const smo291217 = new VF.Annotation('yi');
smo291217.setAttribute('id', 'smo291217');
smo291217.setFont('times', 12, 'normal');
smo291217.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291216.addModifier(smo291217);
smo291217.addClass('lyric lyric-0 lyric-hyphen');
smo291242v0ar.push(smo291216);
const smo291218 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo291218.setAttribute('id', 'smo291218');
const smo291219 = new VF.Annotation('ri');
smo291219.setAttribute('id', 'smo291219');
smo291219.setFont('times', 12, 'normal');
smo291219.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291218.addModifier(smo291219);
smo291219.addClass('lyric lyric-0');
smo291242v0ar.push(smo291218);
const smo291220 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo291220.setAttribute('id', 'smo291220');
const smo291221 = new VF.Annotation('bun');
smo291221.setAttribute('id', 'smo291221');
smo291221.setFont('times', 12, 'normal');
smo291221.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291220.addModifier(smo291221);
smo291221.addClass('lyric lyric-0');
smo291242v0ar.push(smo291220);
const smo291222 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo291222.setAttribute('id', 'smo291222');
const smo291223 = new VF.Annotation('Man');
smo291223.setAttribute('id', 'smo291223');
smo291223.setFont('times', 12, 'normal');
smo291223.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291222.addModifier(smo291223);
smo291223.addClass('lyric lyric-0 lyric-hyphen');
smo291242v0ar.push(smo291222);
const smo291224 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo291224.setAttribute('id', 'smo291224');
smo291242v0ar.push(smo291224);
const smo291225 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo291225.setAttribute('id', 'smo291225');
const smo291226 = new VF.Annotation('ding');
smo291226.setAttribute('id', 'smo291226');
smo291226.setFont('times', 12, 'normal');
smo291226.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291225.addModifier(smo291226);
smo291226.addClass('lyric lyric-0 lyric-hyphen');
smo291242v0ar.push(smo291225);
smo291242v0.addTickables(smo291242v0ar)
fmtsmo29124266.joinVoices([smo291242v0]);
const fmtsmo29444166 = new VF.Formatter();
//
// voices and notes for stave 13 66
const smo294441v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294441v0ar = [];
const smo294420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo294420.setAttribute('id', 'smo294420');
const smo2944200acc = new VF.Accidental('#');
smo294420.addModifier(smo2944200acc, 0);
smo294420.addModifier(new VF.Dot(), 0);
smo294420.addModifier(new VF.Dot(), 1);
smo294420.addModifier(new VF.Dot(), 2);
smo294441v0ar.push(smo294420);
const smo294421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo294421.setAttribute('id', 'smo294421');
smo294441v0ar.push(smo294421);
const smo294422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo294422.setAttribute('id', 'smo294422');
smo294441v0ar.push(smo294422);
const smo294423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo294423.setAttribute('id', 'smo294423');
const smo2944232acc = new VF.Accidental('b');
smo294423.addModifier(smo2944232acc, 2);
smo294441v0ar.push(smo294423);
const smo294424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo294424.setAttribute('id', 'smo294424');
smo294441v0ar.push(smo294424);
const smo294425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo294425.setAttribute('id', 'smo294425');
smo294441v0ar.push(smo294425);
smo294441v0.addTickables(smo294441v0ar)
fmtsmo29444166.joinVoices([smo294441v0]);
const fmtsmo29765466 = new VF.Formatter();
//
// voices and notes for stave 14 66
const smo297654v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297654v0ar = [];
const smo297633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo297633.setAttribute('id', 'smo297633');
const smo2976330acc = new VF.Accidental('#');
smo297633.addModifier(smo2976330acc, 0);
smo297633.addModifier(new VF.Dot(), 0);
smo297633.addModifier(new VF.Dot(), 1);
smo297633.addModifier(new VF.Dot(), 2);
smo297654v0ar.push(smo297633);
const smo297634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo297634.setAttribute('id', 'smo297634');
smo297654v0ar.push(smo297634);
const smo297635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo297635.setAttribute('id', 'smo297635');
smo297654v0ar.push(smo297635);
const smo297636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo297636.setAttribute('id', 'smo297636');
const smo2976362acc = new VF.Accidental('b');
smo297636.addModifier(smo2976362acc, 2);
smo297654v0ar.push(smo297636);
const smo297637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo297637.setAttribute('id', 'smo297637');
smo297654v0ar.push(smo297637);
const smo297638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo297638.setAttribute('id', 'smo297638');
smo297654v0ar.push(smo297638);
smo297654v0.addTickables(smo297654v0ar)
fmtsmo29765466.joinVoices([smo297654v0]);
const fmtsmo30084966 = new VF.Formatter();
//
// voices and notes for stave 15 66
const smo300849v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300849v0ar = [];
const smo300828 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo300828.setAttribute('id', 'smo300828');
const smo3008280acc = new VF.Accidental('#');
smo300828.addModifier(smo3008280acc, 0);
smo300828.addModifier(new VF.Dot(), 0);
smo300849v0ar.push(smo300828);
const smo300829 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo300829.setAttribute('id', 'smo300829');
smo300849v0ar.push(smo300829);
const smo300830 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo300830.setAttribute('id', 'smo300830');
smo300849v0ar.push(smo300830);
const smo300831 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo300831.setAttribute('id', 'smo300831');
smo300849v0ar.push(smo300831);
const smo300832 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo300832.setAttribute('id', 'smo300832');
smo300849v0ar.push(smo300832);
const smo300833 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo300833.setAttribute('id', 'smo300833');
smo300849v0ar.push(smo300833);
smo300849v0.addTickables(smo300849v0ar)
fmtsmo30084966.joinVoices([smo300849v0]);
const fmtsmo30396466 = new VF.Formatter();
//
// voices and notes for stave 16 66
const smo303964v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303964v0ar = [];
const smo303945 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo303945.setAttribute('id', 'smo303945');
smo303945.addModifier(new VF.Dot(), 0);
smo303964v0ar.push(smo303945);
const smo303946 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
smo303946.setAttribute('id', 'smo303946');
const smo3039460acc = new VF.Accidental('b');
smo303946.addModifier(smo3039460acc, 0);
smo303964v0ar.push(smo303946);
const smo303947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
smo303947.setAttribute('id', 'smo303947');
smo303964v0ar.push(smo303947);
const smo303948 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo303948.setAttribute('id', 'smo303948');
smo303964v0ar.push(smo303948);
smo303964v0.addTickables(smo303964v0ar)
fmtsmo30396466.joinVoices([smo303964v0]);
const fmtsmo30716366 = new VF.Formatter();
//
// voices and notes for stave 17 66
const smo307163v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307163v0ar = [];
const smo307134 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo307134.setAttribute('id', 'smo307134');
smo307134.setStyle({ fillStyle: '#aaaaaa7f' });
const smo3071340acc = new VF.Accidental('n');
smo307134.addModifier(smo3071340acc, 0);
const smo307135 = new VF.Annotation('bun');
smo307135.setAttribute('id', 'smo307135');
smo307135.setFont('times', 12, 'normal');
smo307135.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo307134.addModifier(smo307135);
smo307135.addClass('lyric lyric-0');
smo307163v0ar.push(smo307134);
const smo307136 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo307136.setAttribute('id', 'smo307136');
smo307136.setStyle({ fillStyle: '#aaaaaa7f' });
const smo307137 = new VF.Annotation('yi');
smo307137.setAttribute('id', 'smo307137');
smo307137.setFont('times', 12, 'normal');
smo307137.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo307136.addModifier(smo307137);
smo307137.addClass('lyric lyric-0 lyric-hyphen');
smo307163v0ar.push(smo307136);
const smo307138 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo307138.setAttribute('id', 'smo307138');
smo307138.setStyle({ fillStyle: '#aaaaaa7f' });
const smo307139 = new VF.Annotation('ri');
smo307139.setAttribute('id', 'smo307139');
smo307139.setFont('times', 12, 'normal');
smo307139.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo307138.addModifier(smo307139);
smo307139.addClass('lyric lyric-0');
smo307163v0ar.push(smo307138);
const smo307140 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo307140.setAttribute('id', 'smo307140');
smo307140.setStyle({ fillStyle: '#aaaaaa7f' });
const smo307141 = new VF.Annotation('bun');
smo307141.setAttribute('id', 'smo307141');
smo307141.setFont('times', 12, 'normal');
smo307141.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo307140.addModifier(smo307141);
smo307141.addClass('lyric lyric-0');
smo307163v0ar.push(smo307140);
const smo307142 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo307142.setAttribute('id', 'smo307142');
smo307142.setStyle({ fillStyle: '#aaaaaa7f' });
const smo307143 = new VF.Annotation('Man');
smo307143.setAttribute('id', 'smo307143');
smo307143.setFont('times', 12, 'normal');
smo307143.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo307142.addModifier(smo307143);
smo307143.addClass('lyric lyric-0 lyric-hyphen');
smo307163v0ar.push(smo307142);
const smo307144 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo307144.setAttribute('id', 'smo307144');
smo307144.setStyle({ fillStyle: '#aaaaaa7f' });
smo307163v0ar.push(smo307144);
const smo307145 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo307145.setAttribute('id', 'smo307145');
smo307145.setStyle({ fillStyle: '#aaaaaa7f' });
const smo307146 = new VF.Annotation('ding');
smo307146.setAttribute('id', 'smo307146');
smo307146.setFont('times', 12, 'normal');
smo307146.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo307145.addModifier(smo307146);
smo307146.addClass('lyric lyric-0 lyric-hyphen');
smo307163v0ar.push(smo307145);
smo307163v0.addTickables(smo307163v0ar)
fmtsmo30716366.joinVoices([smo307163v0]);
const smo307163v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307163v1ar = [];
const smo307147 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307147.setAttribute('id', 'smo307147');
smo307147.setStyle({ fillStyle: "#115511" });
smo307163v1ar.push(smo307147);
smo307163v1.addTickables(smo307163v1ar)
fmtsmo30716366.joinVoices([smo307163v1]);
// create beam groups and tuplets for format grp smo308886 before formatting
const dirsmo400327 = smo254304.getStemDirection();
smo254304.setStemDirection(dirsmo400327);
smo254306.setStemDirection(dirsmo400327);
const smo400327 = new VF.Beam([smo254304,smo254306]);
const dirsmo400328 = smo254308.getStemDirection();
smo254308.setStemDirection(dirsmo400328);
smo254310.setStemDirection(dirsmo400328);
smo254312.setStemDirection(dirsmo400328);
smo254313.setStemDirection(dirsmo400328);
const smo400328 = new VF.Beam([smo254308,smo254310,smo254312,smo254313]);
const dirsmo400331 = smo257298.getStemDirection();
smo257298.setStemDirection(dirsmo400331);
smo257300.setStemDirection(dirsmo400331);
const smo400331 = new VF.Beam([smo257298,smo257300]);
const dirsmo400332 = smo257302.getStemDirection();
smo257302.setStemDirection(dirsmo400332);
smo257304.setStemDirection(dirsmo400332);
smo257306.setStemDirection(dirsmo400332);
smo257307.setStemDirection(dirsmo400332);
const smo400332 = new VF.Beam([smo257302,smo257304,smo257306,smo257307]);
const dirsmo400335 = smo260441.getStemDirection();
smo260441.setStemDirection(dirsmo400335);
smo260443.setStemDirection(dirsmo400335);
const smo400335 = new VF.Beam([smo260441,smo260443]);
const dirsmo400336 = smo260445.getStemDirection();
smo260445.setStemDirection(dirsmo400336);
smo260447.setStemDirection(dirsmo400336);
smo260449.setStemDirection(dirsmo400336);
smo260450.setStemDirection(dirsmo400336);
const smo400336 = new VF.Beam([smo260445,smo260447,smo260449,smo260450]);
const dirsmo400339 = smo263557.getStemDirection();
smo263557.setStemDirection(dirsmo400339);
smo263559.setStemDirection(dirsmo400339);
const smo400339 = new VF.Beam([smo263557,smo263559]);
const dirsmo400340 = smo263561.getStemDirection();
smo263561.setStemDirection(dirsmo400340);
smo263563.setStemDirection(dirsmo400340);
smo263565.setStemDirection(dirsmo400340);
smo263566.setStemDirection(dirsmo400340);
const smo400340 = new VF.Beam([smo263561,smo263563,smo263565,smo263566]);
const dirsmo400343 = smo266576.getStemDirection();
smo266576.setStemDirection(dirsmo400343);
smo266578.setStemDirection(dirsmo400343);
const smo400343 = new VF.Beam([smo266576,smo266578]);
const dirsmo400344 = smo266580.getStemDirection();
smo266580.setStemDirection(dirsmo400344);
smo266582.setStemDirection(dirsmo400344);
smo266584.setStemDirection(dirsmo400344);
smo266585.setStemDirection(dirsmo400344);
const smo400344 = new VF.Beam([smo266580,smo266582,smo266584,smo266585]);
 
// formatting measures in staff group smo308886
fmtsmo25433066.format([smo254330v0,smo257324v0,smo260467v0,smo263583v0,smo266602v0], 311);
const stavesmo254330 = new VF.Stave(1110, 210, 325);
stavesmo254330.setAttribute('id', 'stavesmo254330');
stavesmo254330.setBegBarType(VF.Barline.type.NONE);
stavesmo254330.setContext(context);
stavesmo254330.draw();
smo254330v0.draw(context, stavesmo254330);
smo400327.setContext(context);
smo400327.draw();
smo400328.setContext(context);
smo400328.draw();
const stavesmo257324 = new VF.Stave(1110, 316, 325);
stavesmo257324.setAttribute('id', 'stavesmo257324');
stavesmo257324.setBegBarType(VF.Barline.type.NONE);
stavesmo257324.setContext(context);
stavesmo257324.draw();
smo257324v0.draw(context, stavesmo257324);
smo400331.setContext(context);
smo400331.draw();
smo400332.setContext(context);
smo400332.draw();
const stavesmo260467 = new VF.Stave(1110, 437, 325);
stavesmo260467.setAttribute('id', 'stavesmo260467');
stavesmo260467.setBegBarType(VF.Barline.type.NONE);
stavesmo260467.setContext(context);
stavesmo260467.draw();
smo260467v0.draw(context, stavesmo260467);
smo400335.setContext(context);
smo400335.draw();
smo400336.setContext(context);
smo400336.draw();
const stavesmo263583 = new VF.Stave(1110, 553, 325);
stavesmo263583.setAttribute('id', 'stavesmo263583');
stavesmo263583.setBegBarType(VF.Barline.type.NONE);
stavesmo263583.setContext(context);
stavesmo263583.draw();
smo263583v0.draw(context, stavesmo263583);
smo400339.setContext(context);
smo400339.draw();
smo400340.setContext(context);
smo400340.draw();
const stavesmo266602 = new VF.Stave(1110, 659, 325);
stavesmo266602.setAttribute('id', 'stavesmo266602');
stavesmo266602.setBegBarType(VF.Barline.type.NONE);
stavesmo266602.setContext(context);
stavesmo266602.draw();
smo266602v0.draw(context, stavesmo266602);
smo400343.setContext(context);
smo400343.draw();
smo400344.setContext(context);
smo400344.draw();
// create beam groups and tuplets for format grp smo308888 before formatting
const dirsmo400347 = smo269683.getStemDirection();
smo269683.setStemDirection(dirsmo400347);
smo269685.setStemDirection(dirsmo400347);
const smo400347 = new VF.Beam([smo269683,smo269685]);
const dirsmo400348 = smo269687.getStemDirection();
smo269687.setStemDirection(dirsmo400348);
smo269689.setStemDirection(dirsmo400348);
smo269691.setStemDirection(dirsmo400348);
smo269692.setStemDirection(dirsmo400348);
const smo400348 = new VF.Beam([smo269687,smo269689,smo269691,smo269692]);
const dirsmo400351 = smo272795.getStemDirection();
smo272795.setStemDirection(dirsmo400351);
smo272797.setStemDirection(dirsmo400351);
const smo400351 = new VF.Beam([smo272795,smo272797]);
const dirsmo400352 = smo272799.getStemDirection();
smo272799.setStemDirection(dirsmo400352);
smo272801.setStemDirection(dirsmo400352);
smo272803.setStemDirection(dirsmo400352);
smo272804.setStemDirection(dirsmo400352);
const smo400352 = new VF.Beam([smo272799,smo272801,smo272803,smo272804]);
const dirsmo400355 = smo275904.getStemDirection();
smo275904.setStemDirection(dirsmo400355);
smo275906.setStemDirection(dirsmo400355);
const smo400355 = new VF.Beam([smo275904,smo275906]);
const dirsmo400356 = smo275908.getStemDirection();
smo275908.setStemDirection(dirsmo400356);
smo275910.setStemDirection(dirsmo400356);
smo275912.setStemDirection(dirsmo400356);
smo275913.setStemDirection(dirsmo400356);
const smo400356 = new VF.Beam([smo275908,smo275910,smo275912,smo275913]);
const dirsmo400359 = smo278990.getStemDirection();
smo278990.setStemDirection(dirsmo400359);
smo278992.setStemDirection(dirsmo400359);
const smo400359 = new VF.Beam([smo278990,smo278992]);
const dirsmo400360 = smo278994.getStemDirection();
smo278994.setStemDirection(dirsmo400360);
smo278996.setStemDirection(dirsmo400360);
smo278998.setStemDirection(dirsmo400360);
smo278999.setStemDirection(dirsmo400360);
const smo400360 = new VF.Beam([smo278994,smo278996,smo278998,smo278999]);
 
// formatting measures in staff group smo308888
fmtsmo26970966.format([smo269709v0,smo272821v0,smo275930v0,smo279016v0], 311);
const stavesmo269709 = new VF.Stave(1110, 780, 325);
stavesmo269709.setAttribute('id', 'stavesmo269709');
stavesmo269709.setBegBarType(VF.Barline.type.NONE);
stavesmo269709.setContext(context);
stavesmo269709.draw();
smo269709v0.draw(context, stavesmo269709);
smo400347.setContext(context);
smo400347.draw();
smo400348.setContext(context);
smo400348.draw();
const stavesmo272821 = new VF.Stave(1110, 896, 325);
stavesmo272821.setAttribute('id', 'stavesmo272821');
stavesmo272821.setBegBarType(VF.Barline.type.NONE);
stavesmo272821.setContext(context);
stavesmo272821.draw();
smo272821v0.draw(context, stavesmo272821);
smo400351.setContext(context);
smo400351.draw();
smo400352.setContext(context);
smo400352.draw();
const stavesmo275930 = new VF.Stave(1110, 1012, 325);
stavesmo275930.setAttribute('id', 'stavesmo275930');
stavesmo275930.setBegBarType(VF.Barline.type.NONE);
stavesmo275930.setContext(context);
stavesmo275930.draw();
smo275930v0.draw(context, stavesmo275930);
smo400355.setContext(context);
smo400355.draw();
smo400356.setContext(context);
smo400356.draw();
const stavesmo279016 = new VF.Stave(1110, 1128, 325);
stavesmo279016.setAttribute('id', 'stavesmo279016');
stavesmo279016.setBegBarType(VF.Barline.type.NONE);
stavesmo279016.setContext(context);
stavesmo279016.draw();
smo279016v0.draw(context, stavesmo279016);
smo400359.setContext(context);
smo400359.draw();
smo400360.setContext(context);
smo400360.draw();
// create beam groups and tuplets for format grp smo308890 before formatting
const dirsmo400363 = smo282079.getStemDirection();
smo282079.setStemDirection(dirsmo400363);
smo282081.setStemDirection(dirsmo400363);
const smo400363 = new VF.Beam([smo282079,smo282081]);
const dirsmo400364 = smo282083.getStemDirection();
smo282083.setStemDirection(dirsmo400364);
smo282085.setStemDirection(dirsmo400364);
smo282087.setStemDirection(dirsmo400364);
smo282088.setStemDirection(dirsmo400364);
const smo400364 = new VF.Beam([smo282083,smo282085,smo282087,smo282088]);
const dirsmo400367 = smo285119.getStemDirection();
smo285119.setStemDirection(dirsmo400367);
smo285121.setStemDirection(dirsmo400367);
const smo400367 = new VF.Beam([smo285119,smo285121]);
const dirsmo400368 = smo285123.getStemDirection();
smo285123.setStemDirection(dirsmo400368);
smo285125.setStemDirection(dirsmo400368);
smo285127.setStemDirection(dirsmo400368);
smo285128.setStemDirection(dirsmo400368);
const smo400368 = new VF.Beam([smo285123,smo285125,smo285127,smo285128]);
const dirsmo400371 = smo288173.getStemDirection();
smo288173.setStemDirection(dirsmo400371);
smo288175.setStemDirection(dirsmo400371);
const smo400371 = new VF.Beam([smo288173,smo288175]);
const dirsmo400372 = smo288177.getStemDirection();
smo288177.setStemDirection(dirsmo400372);
smo288179.setStemDirection(dirsmo400372);
smo288181.setStemDirection(dirsmo400372);
smo288182.setStemDirection(dirsmo400372);
const smo400372 = new VF.Beam([smo288177,smo288179,smo288181,smo288182]);
const dirsmo400375 = smo291216.getStemDirection();
smo291216.setStemDirection(dirsmo400375);
smo291218.setStemDirection(dirsmo400375);
const smo400375 = new VF.Beam([smo291216,smo291218]);
const dirsmo400376 = smo291220.getStemDirection();
smo291220.setStemDirection(dirsmo400376);
smo291222.setStemDirection(dirsmo400376);
smo291224.setStemDirection(dirsmo400376);
smo291225.setStemDirection(dirsmo400376);
const smo400376 = new VF.Beam([smo291220,smo291222,smo291224,smo291225]);
 
// formatting measures in staff group smo308890
fmtsmo28210566.format([smo282105v0,smo285145v0,smo288199v0,smo291242v0], 311);
const stavesmo282105 = new VF.Stave(1110, 1264, 325);
stavesmo282105.setAttribute('id', 'stavesmo282105');
stavesmo282105.setBegBarType(VF.Barline.type.NONE);
stavesmo282105.setContext(context);
stavesmo282105.draw();
smo282105v0.draw(context, stavesmo282105);
smo400363.setContext(context);
smo400363.draw();
smo400364.setContext(context);
smo400364.draw();
const stavesmo285145 = new VF.Stave(1110, 1400, 325);
stavesmo285145.setAttribute('id', 'stavesmo285145');
stavesmo285145.setBegBarType(VF.Barline.type.NONE);
stavesmo285145.setContext(context);
stavesmo285145.draw();
smo285145v0.draw(context, stavesmo285145);
smo400367.setContext(context);
smo400367.draw();
smo400368.setContext(context);
smo400368.draw();
const stavesmo288199 = new VF.Stave(1110, 1536, 325);
stavesmo288199.setAttribute('id', 'stavesmo288199');
stavesmo288199.setBegBarType(VF.Barline.type.NONE);
stavesmo288199.setContext(context);
stavesmo288199.draw();
smo288199v0.draw(context, stavesmo288199);
smo400371.setContext(context);
smo400371.draw();
smo400372.setContext(context);
smo400372.draw();
const stavesmo291242 = new VF.Stave(1110, 1672, 325);
stavesmo291242.setAttribute('id', 'stavesmo291242');
stavesmo291242.setBegBarType(VF.Barline.type.NONE);
stavesmo291242.setContext(context);
stavesmo291242.draw();
smo291242v0.draw(context, stavesmo291242);
smo400375.setContext(context);
smo400375.draw();
smo400376.setContext(context);
smo400376.draw();
// create beam groups and tuplets for format grp smo296209 before formatting
const dirsmo400379 = smo294421.getStemDirection();
smo294421.setStemDirection(dirsmo400379);
smo294422.setStemDirection(dirsmo400379);
smo294423.setStemDirection(dirsmo400379);
smo294424.setStemDirection(dirsmo400379);
const smo400379 = new VF.Beam([smo294421,smo294422,smo294423,smo294424]);
 
// formatting measures in staff group smo296209
fmtsmo29444166.format([smo294441v0], 311);
const stavesmo294441 = new VF.Stave(1110, 1818, 325);
stavesmo294441.setAttribute('id', 'stavesmo294441');
stavesmo294441.setBegBarType(VF.Barline.type.NONE);
stavesmo294441.setContext(context);
stavesmo294441.draw();
smo294441v0.draw(context, stavesmo294441);
smo400379.setContext(context);
smo400379.draw();
// create beam groups and tuplets for format grp smo308884 before formatting
const dirsmo400382 = smo297634.getStemDirection();
smo297634.setStemDirection(dirsmo400382);
smo297635.setStemDirection(dirsmo400382);
smo297636.setStemDirection(dirsmo400382);
smo297637.setStemDirection(dirsmo400382);
const smo400382 = new VF.Beam([smo297634,smo297635,smo297636,smo297637]);
const dirsmo400385 = smo300829.getStemDirection();
smo300829.setStemDirection(dirsmo400385);
smo300830.setStemDirection(dirsmo400385);
smo300831.setStemDirection(dirsmo400385);
smo300832.setStemDirection(dirsmo400385);
const smo400385 = new VF.Beam([smo300829,smo300830,smo300831,smo300832]);
 
// formatting measures in staff group smo308884
fmtsmo29765466.format([smo297654v0,smo300849v0], 311);
const stavesmo297654 = new VF.Stave(1110, 1924, 325);
stavesmo297654.setAttribute('id', 'stavesmo297654');
stavesmo297654.setBegBarType(VF.Barline.type.NONE);
stavesmo297654.setContext(context);
stavesmo297654.draw();
smo297654v0.draw(context, stavesmo297654);
smo400382.setContext(context);
smo400382.draw();
const stavesmo300849 = new VF.Stave(1110, 2010, 325);
stavesmo300849.setAttribute('id', 'stavesmo300849');
stavesmo300849.setBegBarType(VF.Barline.type.NONE);
stavesmo300849.setContext(context);
stavesmo300849.draw();
smo300849v0.draw(context, stavesmo300849);
smo400385.setContext(context);
smo400385.draw();
// create beam groups and tuplets for format grp smo305722 before formatting
 
// formatting measures in staff group smo305722
fmtsmo30396466.format([smo303964v0], 311);
const stavesmo303964 = new VF.Stave(1110, 2081, 325);
stavesmo303964.setAttribute('id', 'stavesmo303964');
stavesmo303964.setBegBarType(VF.Barline.type.NONE);
stavesmo303964.setContext(context);
stavesmo303964.draw();
smo303964v0.draw(context, stavesmo303964);
// create beam groups and tuplets for format grp smo308878 before formatting
const dirsmo400390 = smo307136.getStemDirection();
smo307136.setStemDirection(dirsmo400390);
smo307138.setStemDirection(dirsmo400390);
const smo400390 = new VF.Beam([smo307136,smo307138]);
const dirsmo400391 = smo307140.getStemDirection();
smo307140.setStemDirection(dirsmo400391);
smo307142.setStemDirection(dirsmo400391);
smo307144.setStemDirection(dirsmo400391);
smo307145.setStemDirection(dirsmo400391);
const smo400391 = new VF.Beam([smo307140,smo307142,smo307144,smo307145]);
 
// formatting measures in staff group smo308878
fmtsmo30716366.format([smo307163v0,smo307163v1], 311);
const stavesmo307163 = new VF.Stave(1110, 2152, 325);
stavesmo307163.setAttribute('id', 'stavesmo307163');
stavesmo307163.setBegBarType(VF.Barline.type.NONE);
stavesmo307163.setContext(context);
stavesmo307163.draw();
smo307163v0.draw(context, stavesmo307163);
smo307163v1.draw(context, stavesmo307163);
smo400390.setContext(context);
smo400390.draw();
smo400391.setContext(context);
smo400391.draw();
const fmtsmo25435267 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo254352v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo254352v0ar = [];
const smo254331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo254331.setAttribute('id', 'smo254331');
smo254352v0ar.push(smo254331);
const smo254332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo254332.setAttribute('id', 'smo254332');
const smo254333 = new VF.Annotation('a');
smo254333.setAttribute('id', 'smo254333');
smo254333.setFont('times', 12, 'normal');
smo254333.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254332.addModifier(smo254333);
smo254333.addClass('lyric lyric-0');
smo254352v0ar.push(smo254332);
const smo254334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo254334.setAttribute('id', 'smo254334');
smo254352v0ar.push(smo254334);
const smo254335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo254335.setAttribute('id', 'smo254335');
smo254352v0ar.push(smo254335);
const smo254336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo254336.setAttribute('id', 'smo254336');
smo254352v0ar.push(smo254336);
smo254352v0.addTickables(smo254352v0ar)
fmtsmo25435267.joinVoices([smo254352v0]);
const fmtsmo25734567 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo257345v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257345v0ar = [];
const smo257325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo257325.setAttribute('id', 'smo257325');
smo257345v0ar.push(smo257325);
const smo257326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo257326.setAttribute('id', 'smo257326');
const smo257327 = new VF.Annotation('a');
smo257327.setAttribute('id', 'smo257327');
smo257327.setFont('times', 12, 'normal');
smo257327.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257326.addModifier(smo257327);
smo257327.addClass('lyric lyric-0');
smo257345v0ar.push(smo257326);
const smo257328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo257328.setAttribute('id', 'smo257328');
smo257345v0ar.push(smo257328);
const smo257329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo257329.setAttribute('id', 'smo257329');
smo257345v0ar.push(smo257329);
smo257345v0.addTickables(smo257345v0ar)
fmtsmo25734567.joinVoices([smo257345v0]);
const fmtsmo26048967 = new VF.Formatter();
//
// voices and notes for stave 2 67
const smo260489v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260489v0ar = [];
const smo260468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo260468.setAttribute('id', 'smo260468');
smo260489v0ar.push(smo260468);
const smo260469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo260469.setAttribute('id', 'smo260469');
const smo260470 = new VF.Annotation('a');
smo260470.setAttribute('id', 'smo260470');
smo260470.setFont('times', 12, 'normal');
smo260470.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260469.addModifier(smo260470);
smo260470.addClass('lyric lyric-0');
smo260489v0ar.push(smo260469);
const smo260471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo260471.setAttribute('id', 'smo260471');
smo260489v0ar.push(smo260471);
const smo260472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo260472.setAttribute('id', 'smo260472');
smo260489v0ar.push(smo260472);
const smo260473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo260473.setAttribute('id', 'smo260473');
smo260489v0ar.push(smo260473);
smo260489v0.addTickables(smo260489v0ar)
fmtsmo26048967.joinVoices([smo260489v0]);
const fmtsmo26360567 = new VF.Formatter();
//
// voices and notes for stave 3 67
const smo263605v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263605v0ar = [];
const smo263584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo263584.setAttribute('id', 'smo263584');
smo263605v0ar.push(smo263584);
const smo263585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo263585.setAttribute('id', 'smo263585');
const smo263586 = new VF.Annotation('a');
smo263586.setAttribute('id', 'smo263586');
smo263586.setFont('times', 12, 'normal');
smo263586.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263585.addModifier(smo263586);
smo263586.addClass('lyric lyric-0');
smo263605v0ar.push(smo263585);
const smo263587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo263587.setAttribute('id', 'smo263587');
smo263605v0ar.push(smo263587);
const smo263588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo263588.setAttribute('id', 'smo263588');
smo263605v0ar.push(smo263588);
const smo263589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo263589.setAttribute('id', 'smo263589');
smo263605v0ar.push(smo263589);
smo263605v0.addTickables(smo263605v0ar)
fmtsmo26360567.joinVoices([smo263605v0]);
const fmtsmo26662467 = new VF.Formatter();
//
// voices and notes for stave 4 67
const smo266624v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266624v0ar = [];
const smo266603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266603.setAttribute('id', 'smo266603');
smo266624v0ar.push(smo266603);
const smo266604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo266604.setAttribute('id', 'smo266604');
const smo266605 = new VF.Annotation('a');
smo266605.setAttribute('id', 'smo266605');
smo266605.setFont('times', 12, 'normal');
smo266605.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266604.addModifier(smo266605);
smo266605.addClass('lyric lyric-0');
smo266624v0ar.push(smo266604);
const smo266606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266606.setAttribute('id', 'smo266606');
smo266624v0ar.push(smo266606);
const smo266607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266607.setAttribute('id', 'smo266607');
smo266624v0ar.push(smo266607);
const smo266608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266608.setAttribute('id', 'smo266608');
smo266624v0ar.push(smo266608);
smo266624v0.addTickables(smo266624v0ar)
fmtsmo26662467.joinVoices([smo266624v0]);
const fmtsmo26973167 = new VF.Formatter();
//
// voices and notes for stave 5 67
const smo269731v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269731v0ar = [];
const smo269710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo269710.setAttribute('id', 'smo269710');
smo269731v0ar.push(smo269710);
const smo269711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo269711.setAttribute('id', 'smo269711');
const smo269712 = new VF.Annotation('a');
smo269712.setAttribute('id', 'smo269712');
smo269712.setFont('times', 12, 'normal');
smo269712.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269711.addModifier(smo269712);
smo269712.addClass('lyric lyric-0');
smo269731v0ar.push(smo269711);
const smo269713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269713.setAttribute('id', 'smo269713');
smo269731v0ar.push(smo269713);
const smo269714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269714.setAttribute('id', 'smo269714');
smo269731v0ar.push(smo269714);
const smo269715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269715.setAttribute('id', 'smo269715');
smo269731v0ar.push(smo269715);
smo269731v0.addTickables(smo269731v0ar)
fmtsmo26973167.joinVoices([smo269731v0]);
const fmtsmo27284367 = new VF.Formatter();
//
// voices and notes for stave 6 67
const smo272843v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272843v0ar = [];
const smo272822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272822.setAttribute('id', 'smo272822');
smo272843v0ar.push(smo272822);
const smo272823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo272823.setAttribute('id', 'smo272823');
const smo272824 = new VF.Annotation('a');
smo272824.setAttribute('id', 'smo272824');
smo272824.setFont('times', 12, 'normal');
smo272824.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272823.addModifier(smo272824);
smo272824.addClass('lyric lyric-0');
smo272843v0ar.push(smo272823);
const smo272825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272825.setAttribute('id', 'smo272825');
smo272843v0ar.push(smo272825);
const smo272826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272826.setAttribute('id', 'smo272826');
smo272843v0ar.push(smo272826);
const smo272827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272827.setAttribute('id', 'smo272827');
smo272843v0ar.push(smo272827);
smo272843v0.addTickables(smo272843v0ar)
fmtsmo27284367.joinVoices([smo272843v0]);
const fmtsmo27595267 = new VF.Formatter();
//
// voices and notes for stave 7 67
const smo275952v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275952v0ar = [];
const smo275931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo275931.setAttribute('id', 'smo275931');
smo275952v0ar.push(smo275931);
const smo275932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo275932.setAttribute('id', 'smo275932');
const smo275933 = new VF.Annotation('a');
smo275933.setAttribute('id', 'smo275933');
smo275933.setFont('times', 12, 'normal');
smo275933.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275932.addModifier(smo275933);
smo275933.addClass('lyric lyric-0');
smo275952v0ar.push(smo275932);
const smo275934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275934.setAttribute('id', 'smo275934');
smo275952v0ar.push(smo275934);
const smo275935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275935.setAttribute('id', 'smo275935');
smo275952v0ar.push(smo275935);
const smo275936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275936.setAttribute('id', 'smo275936');
smo275952v0ar.push(smo275936);
smo275952v0.addTickables(smo275952v0ar)
fmtsmo27595267.joinVoices([smo275952v0]);
const fmtsmo27903867 = new VF.Formatter();
//
// voices and notes for stave 8 67
const smo279038v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo279038v0ar = [];
const smo279017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo279017.setAttribute('id', 'smo279017');
smo279038v0ar.push(smo279017);
const smo279018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo279018.setAttribute('id', 'smo279018');
const smo279019 = new VF.Annotation('a');
smo279019.setAttribute('id', 'smo279019');
smo279019.setFont('times', 12, 'normal');
smo279019.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279018.addModifier(smo279019);
smo279019.addClass('lyric lyric-0');
smo279038v0ar.push(smo279018);
const smo279020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo279020.setAttribute('id', 'smo279020');
smo279038v0ar.push(smo279020);
const smo279021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo279021.setAttribute('id', 'smo279021');
smo279038v0ar.push(smo279021);
const smo279022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo279022.setAttribute('id', 'smo279022');
smo279038v0ar.push(smo279022);
smo279038v0.addTickables(smo279038v0ar)
fmtsmo27903867.joinVoices([smo279038v0]);
const fmtsmo28212767 = new VF.Formatter();
//
// voices and notes for stave 9 67
const smo282127v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo282127v0ar = [];
const smo282106 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo282106.setAttribute('id', 'smo282106');
smo282127v0ar.push(smo282106);
const smo282107 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo282107.setAttribute('id', 'smo282107');
const smo282108 = new VF.Annotation('a');
smo282108.setAttribute('id', 'smo282108');
smo282108.setFont('times', 12, 'normal');
smo282108.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282107.addModifier(smo282108);
smo282108.addClass('lyric lyric-0');
smo282127v0ar.push(smo282107);
const smo282109 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo282109.setAttribute('id', 'smo282109');
smo282127v0ar.push(smo282109);
const smo282110 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo282110.setAttribute('id', 'smo282110');
smo282127v0ar.push(smo282110);
const smo282111 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo282111.setAttribute('id', 'smo282111');
smo282127v0ar.push(smo282111);
smo282127v0.addTickables(smo282127v0ar)
fmtsmo28212767.joinVoices([smo282127v0]);
const fmtsmo28516767 = new VF.Formatter();
//
// voices and notes for stave 10 67
const smo285167v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285167v0ar = [];
const smo285146 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo285146.setAttribute('id', 'smo285146');
smo285167v0ar.push(smo285146);
const smo285147 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo285147.setAttribute('id', 'smo285147');
const smo285148 = new VF.Annotation('a');
smo285148.setAttribute('id', 'smo285148');
smo285148.setFont('times', 12, 'normal');
smo285148.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285147.addModifier(smo285148);
smo285148.addClass('lyric lyric-0');
smo285167v0ar.push(smo285147);
const smo285149 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo285149.setAttribute('id', 'smo285149');
smo285167v0ar.push(smo285149);
const smo285150 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo285150.setAttribute('id', 'smo285150');
smo285167v0ar.push(smo285150);
const smo285151 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo285151.setAttribute('id', 'smo285151');
smo285167v0ar.push(smo285151);
smo285167v0.addTickables(smo285167v0ar)
fmtsmo28516767.joinVoices([smo285167v0]);
const fmtsmo28822167 = new VF.Formatter();
//
// voices and notes for stave 11 67
const smo288221v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo288221v0ar = [];
const smo288200 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo288200.setAttribute('id', 'smo288200');
smo288221v0ar.push(smo288200);
const smo288201 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo288201.setAttribute('id', 'smo288201');
const smo288202 = new VF.Annotation('a');
smo288202.setAttribute('id', 'smo288202');
smo288202.setFont('times', 12, 'normal');
smo288202.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288201.addModifier(smo288202);
smo288202.addClass('lyric lyric-0');
smo288221v0ar.push(smo288201);
const smo288203 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo288203.setAttribute('id', 'smo288203');
smo288221v0ar.push(smo288203);
const smo288204 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo288204.setAttribute('id', 'smo288204');
smo288221v0ar.push(smo288204);
const smo288205 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo288205.setAttribute('id', 'smo288205');
smo288221v0ar.push(smo288205);
smo288221v0.addTickables(smo288221v0ar)
fmtsmo28822167.joinVoices([smo288221v0]);
const fmtsmo29126467 = new VF.Formatter();
//
// voices and notes for stave 12 67
const smo291264v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo291264v0ar = [];
const smo291243 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo291243.setAttribute('id', 'smo291243');
smo291264v0ar.push(smo291243);
const smo291244 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo291244.setAttribute('id', 'smo291244');
const smo291245 = new VF.Annotation('a');
smo291245.setAttribute('id', 'smo291245');
smo291245.setFont('times', 12, 'normal');
smo291245.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291244.addModifier(smo291245);
smo291245.addClass('lyric lyric-0');
smo291264v0ar.push(smo291244);
const smo291246 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo291246.setAttribute('id', 'smo291246');
smo291264v0ar.push(smo291246);
const smo291247 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo291247.setAttribute('id', 'smo291247');
smo291264v0ar.push(smo291247);
const smo291248 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo291248.setAttribute('id', 'smo291248');
smo291264v0ar.push(smo291248);
smo291264v0.addTickables(smo291264v0ar)
fmtsmo29126467.joinVoices([smo291264v0]);
const fmtsmo29446367 = new VF.Formatter();
//
// voices and notes for stave 13 67
const smo294463v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294463v0ar = [];
const smo294442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo294442.setAttribute('id', 'smo294442');
smo294442.addModifier(new VF.Dot(), 0);
smo294442.addModifier(new VF.Dot(), 1);
smo294442.addModifier(new VF.Dot(), 2);
smo294463v0ar.push(smo294442);
const smo294443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo294443.setAttribute('id', 'smo294443');
smo294463v0ar.push(smo294443);
const smo294444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo294444.setAttribute('id', 'smo294444');
smo294463v0ar.push(smo294444);
const smo294445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo294445.setAttribute('id', 'smo294445');
smo294463v0ar.push(smo294445);
const smo294446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo294446.setAttribute('id', 'smo294446');
smo294463v0ar.push(smo294446);
const smo294447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo294447.setAttribute('id', 'smo294447');
smo294463v0ar.push(smo294447);
smo294463v0.addTickables(smo294463v0ar)
fmtsmo29446367.joinVoices([smo294463v0]);
const fmtsmo29767667 = new VF.Formatter();
//
// voices and notes for stave 14 67
const smo297676v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297676v0ar = [];
const smo297655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo297655.setAttribute('id', 'smo297655');
smo297655.addModifier(new VF.Dot(), 0);
smo297655.addModifier(new VF.Dot(), 1);
smo297655.addModifier(new VF.Dot(), 2);
smo297676v0ar.push(smo297655);
const smo297656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo297656.setAttribute('id', 'smo297656');
smo297676v0ar.push(smo297656);
const smo297657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo297657.setAttribute('id', 'smo297657');
smo297676v0ar.push(smo297657);
const smo297658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo297658.setAttribute('id', 'smo297658');
smo297676v0ar.push(smo297658);
const smo297659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo297659.setAttribute('id', 'smo297659');
smo297676v0ar.push(smo297659);
const smo297660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo297660.setAttribute('id', 'smo297660');
smo297676v0ar.push(smo297660);
smo297676v0.addTickables(smo297676v0ar)
fmtsmo29767667.joinVoices([smo297676v0]);
const fmtsmo30087167 = new VF.Formatter();
//
// voices and notes for stave 15 67
const smo300871v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300871v0ar = [];
const smo300850 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo300850.setAttribute('id', 'smo300850');
smo300850.addModifier(new VF.Dot(), 0);
smo300871v0ar.push(smo300850);
const smo300851 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo300851.setAttribute('id', 'smo300851');
smo300871v0ar.push(smo300851);
const smo300852 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo300852.setAttribute('id', 'smo300852');
smo300871v0ar.push(smo300852);
const smo300853 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo300853.setAttribute('id', 'smo300853');
smo300871v0ar.push(smo300853);
const smo300854 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo300854.setAttribute('id', 'smo300854');
smo300871v0ar.push(smo300854);
const smo300855 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo300855.setAttribute('id', 'smo300855');
smo300871v0ar.push(smo300855);
smo300871v0.addTickables(smo300871v0ar)
fmtsmo30087167.joinVoices([smo300871v0]);
const fmtsmo30398467 = new VF.Formatter();
//
// voices and notes for stave 16 67
const smo303984v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303984v0ar = [];
const smo303965 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo303965.setAttribute('id', 'smo303965');
smo303984v0ar.push(smo303965);
const smo303966 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo303966.setAttribute('id', 'smo303966');
smo303984v0ar.push(smo303966);
const smo303967 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo303967.setAttribute('id', 'smo303967');
smo303984v0ar.push(smo303967);
const smo303968 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo303968.setAttribute('id', 'smo303968');
smo303984v0ar.push(smo303968);
smo303984v0.addTickables(smo303984v0ar)
fmtsmo30398467.joinVoices([smo303984v0]);
const fmtsmo30718367 = new VF.Formatter();
//
// voices and notes for stave 17 67
const smo307183v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307183v0ar = [];
const smo307164 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307164.setAttribute('id', 'smo307164');
smo307183v0ar.push(smo307164);
const smo307165 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307165.setAttribute('id', 'smo307165');
smo307165.setStyle({ fillStyle: "#ffffff00" });
smo307183v0ar.push(smo307165);
smo307183v0.addTickables(smo307183v0ar)
fmtsmo30718367.joinVoices([smo307183v0]);
const smo307183v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307183v1ar = [];
const smo307166 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307166.setAttribute('id', 'smo307166');
smo307166.setStyle({ fillStyle: '#aaaaaa7f' });
smo307183v1ar.push(smo307166);
const smo307167 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307167.setAttribute('id', 'smo307167');
smo307167.setStyle({ fillStyle: "#115511" });
smo307183v1ar.push(smo307167);
smo307183v1.addTickables(smo307183v1ar)
fmtsmo30718367.joinVoices([smo307183v1]);
// create beam groups and tuplets for format grp smo308886 before formatting
const dirsmo400394 = smo254331.getStemDirection();
smo254331.setStemDirection(dirsmo400394);
smo254332.setStemDirection(dirsmo400394);
const smo400394 = new VF.Beam([smo254331,smo254332]);
const dirsmo400397 = smo257325.getStemDirection();
smo257325.setStemDirection(dirsmo400397);
smo257326.setStemDirection(dirsmo400397);
const smo400397 = new VF.Beam([smo257325,smo257326]);
const dirsmo400400 = smo260468.getStemDirection();
smo260468.setStemDirection(dirsmo400400);
smo260469.setStemDirection(dirsmo400400);
const smo400400 = new VF.Beam([smo260468,smo260469]);
const dirsmo400403 = smo263584.getStemDirection();
smo263584.setStemDirection(dirsmo400403);
smo263585.setStemDirection(dirsmo400403);
const smo400403 = new VF.Beam([smo263584,smo263585]);
const dirsmo400406 = smo266603.getStemDirection();
smo266603.setStemDirection(dirsmo400406);
smo266604.setStemDirection(dirsmo400406);
const smo400406 = new VF.Beam([smo266603,smo266604]);
 
// formatting measures in staff group smo308886
fmtsmo25435267.format([smo254352v0,smo257345v0,smo260489v0,smo263605v0,smo266624v0], 288);
const stavesmo254352 = new VF.Stave(1435, 210, 302);
stavesmo254352.setAttribute('id', 'stavesmo254352');
stavesmo254352.setBegBarType(VF.Barline.type.NONE);
stavesmo254352.setContext(context);
stavesmo254352.draw();
smo254352v0.draw(context, stavesmo254352);
smo400394.setContext(context);
smo400394.draw();
const stavesmo257345 = new VF.Stave(1435, 316, 302);
stavesmo257345.setAttribute('id', 'stavesmo257345');
stavesmo257345.setBegBarType(VF.Barline.type.NONE);
stavesmo257345.setContext(context);
stavesmo257345.draw();
smo257345v0.draw(context, stavesmo257345);
smo400397.setContext(context);
smo400397.draw();
const stavesmo260489 = new VF.Stave(1435, 437, 302);
stavesmo260489.setAttribute('id', 'stavesmo260489');
stavesmo260489.setBegBarType(VF.Barline.type.NONE);
stavesmo260489.setContext(context);
stavesmo260489.draw();
smo260489v0.draw(context, stavesmo260489);
smo400400.setContext(context);
smo400400.draw();
const stavesmo263605 = new VF.Stave(1435, 553, 302);
stavesmo263605.setAttribute('id', 'stavesmo263605');
stavesmo263605.setBegBarType(VF.Barline.type.NONE);
stavesmo263605.setContext(context);
stavesmo263605.draw();
smo263605v0.draw(context, stavesmo263605);
smo400403.setContext(context);
smo400403.draw();
const stavesmo266624 = new VF.Stave(1435, 659, 302);
stavesmo266624.setAttribute('id', 'stavesmo266624');
stavesmo266624.setBegBarType(VF.Barline.type.NONE);
stavesmo266624.setContext(context);
stavesmo266624.draw();
smo266624v0.draw(context, stavesmo266624);
smo400406.setContext(context);
smo400406.draw();
// create beam groups and tuplets for format grp smo308888 before formatting
const dirsmo400409 = smo269710.getStemDirection();
smo269710.setStemDirection(dirsmo400409);
smo269711.setStemDirection(dirsmo400409);
const smo400409 = new VF.Beam([smo269710,smo269711]);
const dirsmo400412 = smo272822.getStemDirection();
smo272822.setStemDirection(dirsmo400412);
smo272823.setStemDirection(dirsmo400412);
const smo400412 = new VF.Beam([smo272822,smo272823]);
const dirsmo400415 = smo275931.getStemDirection();
smo275931.setStemDirection(dirsmo400415);
smo275932.setStemDirection(dirsmo400415);
const smo400415 = new VF.Beam([smo275931,smo275932]);
const dirsmo400418 = smo279017.getStemDirection();
smo279017.setStemDirection(dirsmo400418);
smo279018.setStemDirection(dirsmo400418);
const smo400418 = new VF.Beam([smo279017,smo279018]);
 
// formatting measures in staff group smo308888
fmtsmo26973167.format([smo269731v0,smo272843v0,smo275952v0,smo279038v0], 288);
const stavesmo269731 = new VF.Stave(1435, 780, 302);
stavesmo269731.setAttribute('id', 'stavesmo269731');
stavesmo269731.setBegBarType(VF.Barline.type.NONE);
stavesmo269731.setContext(context);
stavesmo269731.draw();
smo269731v0.draw(context, stavesmo269731);
smo400409.setContext(context);
smo400409.draw();
const stavesmo272843 = new VF.Stave(1435, 896, 302);
stavesmo272843.setAttribute('id', 'stavesmo272843');
stavesmo272843.setBegBarType(VF.Barline.type.NONE);
stavesmo272843.setContext(context);
stavesmo272843.draw();
smo272843v0.draw(context, stavesmo272843);
smo400412.setContext(context);
smo400412.draw();
const stavesmo275952 = new VF.Stave(1435, 1012, 302);
stavesmo275952.setAttribute('id', 'stavesmo275952');
stavesmo275952.setBegBarType(VF.Barline.type.NONE);
stavesmo275952.setContext(context);
stavesmo275952.draw();
smo275952v0.draw(context, stavesmo275952);
smo400415.setContext(context);
smo400415.draw();
const stavesmo279038 = new VF.Stave(1435, 1128, 302);
stavesmo279038.setAttribute('id', 'stavesmo279038');
stavesmo279038.setBegBarType(VF.Barline.type.NONE);
stavesmo279038.setContext(context);
stavesmo279038.draw();
smo279038v0.draw(context, stavesmo279038);
smo400418.setContext(context);
smo400418.draw();
// create beam groups and tuplets for format grp smo308890 before formatting
const dirsmo400421 = smo282106.getStemDirection();
smo282106.setStemDirection(dirsmo400421);
smo282107.setStemDirection(dirsmo400421);
const smo400421 = new VF.Beam([smo282106,smo282107]);
const dirsmo400424 = smo285146.getStemDirection();
smo285146.setStemDirection(dirsmo400424);
smo285147.setStemDirection(dirsmo400424);
const smo400424 = new VF.Beam([smo285146,smo285147]);
const dirsmo400427 = smo288200.getStemDirection();
smo288200.setStemDirection(dirsmo400427);
smo288201.setStemDirection(dirsmo400427);
const smo400427 = new VF.Beam([smo288200,smo288201]);
const dirsmo400430 = smo291243.getStemDirection();
smo291243.setStemDirection(dirsmo400430);
smo291244.setStemDirection(dirsmo400430);
const smo400430 = new VF.Beam([smo291243,smo291244]);
 
// formatting measures in staff group smo308890
fmtsmo28212767.format([smo282127v0,smo285167v0,smo288221v0,smo291264v0], 288);
const stavesmo282127 = new VF.Stave(1435, 1264, 302);
stavesmo282127.setAttribute('id', 'stavesmo282127');
stavesmo282127.setBegBarType(VF.Barline.type.NONE);
stavesmo282127.setContext(context);
stavesmo282127.draw();
smo282127v0.draw(context, stavesmo282127);
smo400421.setContext(context);
smo400421.draw();
const stavesmo285167 = new VF.Stave(1435, 1400, 302);
stavesmo285167.setAttribute('id', 'stavesmo285167');
stavesmo285167.setBegBarType(VF.Barline.type.NONE);
stavesmo285167.setContext(context);
stavesmo285167.draw();
smo285167v0.draw(context, stavesmo285167);
smo400424.setContext(context);
smo400424.draw();
const stavesmo288221 = new VF.Stave(1435, 1536, 302);
stavesmo288221.setAttribute('id', 'stavesmo288221');
stavesmo288221.setBegBarType(VF.Barline.type.NONE);
stavesmo288221.setContext(context);
stavesmo288221.draw();
smo288221v0.draw(context, stavesmo288221);
smo400427.setContext(context);
smo400427.draw();
const stavesmo291264 = new VF.Stave(1435, 1672, 302);
stavesmo291264.setAttribute('id', 'stavesmo291264');
stavesmo291264.setBegBarType(VF.Barline.type.NONE);
stavesmo291264.setContext(context);
stavesmo291264.draw();
smo291264v0.draw(context, stavesmo291264);
smo400430.setContext(context);
smo400430.draw();
// create beam groups and tuplets for format grp smo296209 before formatting
const dirsmo400433 = smo294443.getStemDirection();
smo294443.setStemDirection(dirsmo400433);
smo294444.setStemDirection(dirsmo400433);
smo294445.setStemDirection(dirsmo400433);
smo294446.setStemDirection(dirsmo400433);
const smo400433 = new VF.Beam([smo294443,smo294444,smo294445,smo294446]);
 
// formatting measures in staff group smo296209
fmtsmo29446367.format([smo294463v0], 288);
const stavesmo294463 = new VF.Stave(1435, 1818, 302);
stavesmo294463.setAttribute('id', 'stavesmo294463');
stavesmo294463.setBegBarType(VF.Barline.type.NONE);
stavesmo294463.setContext(context);
stavesmo294463.draw();
smo294463v0.draw(context, stavesmo294463);
smo400433.setContext(context);
smo400433.draw();
// create beam groups and tuplets for format grp smo308884 before formatting
const dirsmo400436 = smo297656.getStemDirection();
smo297656.setStemDirection(dirsmo400436);
smo297657.setStemDirection(dirsmo400436);
smo297658.setStemDirection(dirsmo400436);
smo297659.setStemDirection(dirsmo400436);
const smo400436 = new VF.Beam([smo297656,smo297657,smo297658,smo297659]);
const dirsmo400439 = smo300851.getStemDirection();
smo300851.setStemDirection(dirsmo400439);
smo300852.setStemDirection(dirsmo400439);
smo300853.setStemDirection(dirsmo400439);
smo300854.setStemDirection(dirsmo400439);
const smo400439 = new VF.Beam([smo300851,smo300852,smo300853,smo300854]);
 
// formatting measures in staff group smo308884
fmtsmo29767667.format([smo297676v0,smo300871v0], 288);
const stavesmo297676 = new VF.Stave(1435, 1924, 302);
stavesmo297676.setAttribute('id', 'stavesmo297676');
stavesmo297676.setBegBarType(VF.Barline.type.NONE);
stavesmo297676.setContext(context);
stavesmo297676.draw();
smo297676v0.draw(context, stavesmo297676);
smo400436.setContext(context);
smo400436.draw();
const stavesmo300871 = new VF.Stave(1435, 2010, 302);
stavesmo300871.setAttribute('id', 'stavesmo300871');
stavesmo300871.setBegBarType(VF.Barline.type.NONE);
stavesmo300871.setContext(context);
stavesmo300871.draw();
smo300871v0.draw(context, stavesmo300871);
smo400439.setContext(context);
smo400439.draw();
// create beam groups and tuplets for format grp smo305722 before formatting
 
// formatting measures in staff group smo305722
fmtsmo30398467.format([smo303984v0], 288);
const stavesmo303984 = new VF.Stave(1435, 2081, 302);
stavesmo303984.setAttribute('id', 'stavesmo303984');
stavesmo303984.setBegBarType(VF.Barline.type.NONE);
stavesmo303984.setContext(context);
stavesmo303984.draw();
smo303984v0.draw(context, stavesmo303984);
// create beam groups and tuplets for format grp smo308878 before formatting
 
// formatting measures in staff group smo308878
fmtsmo30718367.format([smo307183v0,smo307183v1], 288);
const stavesmo307183 = new VF.Stave(1435, 2152, 302);
stavesmo307183.setAttribute('id', 'stavesmo307183');
stavesmo307183.setBegBarType(VF.Barline.type.NONE);
stavesmo307183.setContext(context);
stavesmo307183.draw();
smo307183v0.draw(context, stavesmo307183);
smo307183v1.draw(context, stavesmo307183);
const fmtsmo25436968 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo254369v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo254369v0ar = [];
const smo254353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo254353.setAttribute('id', 'smo254353');
smo254369v0ar.push(smo254353);
smo254369v0.addTickables(smo254369v0ar)
fmtsmo25436968.joinVoices([smo254369v0]);
const fmtsmo25736268 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo257362v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257362v0ar = [];
const smo257346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo257346.setAttribute('id', 'smo257346');
smo257362v0ar.push(smo257346);
smo257362v0.addTickables(smo257362v0ar)
fmtsmo25736268.joinVoices([smo257362v0]);
const fmtsmo26050668 = new VF.Formatter();
//
// voices and notes for stave 2 68
const smo260506v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260506v0ar = [];
const smo260490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo260490.setAttribute('id', 'smo260490');
smo260506v0ar.push(smo260490);
smo260506v0.addTickables(smo260506v0ar)
fmtsmo26050668.joinVoices([smo260506v0]);
const fmtsmo26362268 = new VF.Formatter();
//
// voices and notes for stave 3 68
const smo263622v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263622v0ar = [];
const smo263606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo263606.setAttribute('id', 'smo263606');
smo263622v0ar.push(smo263606);
smo263622v0.addTickables(smo263622v0ar)
fmtsmo26362268.joinVoices([smo263622v0]);
const fmtsmo26664168 = new VF.Formatter();
//
// voices and notes for stave 4 68
const smo266641v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266641v0ar = [];
const smo266625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266625.setAttribute('id', 'smo266625');
smo266641v0ar.push(smo266625);
smo266641v0.addTickables(smo266641v0ar)
fmtsmo26664168.joinVoices([smo266641v0]);
const fmtsmo26975168 = new VF.Formatter();
//
// voices and notes for stave 5 68
const smo269751v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269751v0ar = [];
const smo269732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269732.setAttribute('id', 'smo269732');
smo269751v0ar.push(smo269732);
const smo269733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269733.setAttribute('id', 'smo269733');
smo269751v0ar.push(smo269733);
const smo269734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269734.setAttribute('id', 'smo269734');
smo269751v0ar.push(smo269734);
const smo269735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269735.setAttribute('id', 'smo269735');
smo269751v0ar.push(smo269735);
smo269751v0.addTickables(smo269751v0ar)
fmtsmo26975168.joinVoices([smo269751v0]);
const fmtsmo27286068 = new VF.Formatter();
//
// voices and notes for stave 6 68
const smo272860v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272860v0ar = [];
const smo272844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272844.setAttribute('id', 'smo272844');
smo272860v0ar.push(smo272844);
smo272860v0.addTickables(smo272860v0ar)
fmtsmo27286068.joinVoices([smo272860v0]);
const fmtsmo27596968 = new VF.Formatter();
//
// voices and notes for stave 7 68
const smo275969v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275969v0ar = [];
const smo275953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275953.setAttribute('id', 'smo275953');
smo275969v0ar.push(smo275953);
smo275969v0.addTickables(smo275969v0ar)
fmtsmo27596968.joinVoices([smo275969v0]);
const fmtsmo27905568 = new VF.Formatter();
//
// voices and notes for stave 8 68
const smo279055v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo279055v0ar = [];
const smo279039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo279039.setAttribute('id', 'smo279039');
smo279055v0ar.push(smo279039);
smo279055v0.addTickables(smo279055v0ar)
fmtsmo27905568.joinVoices([smo279055v0]);
const fmtsmo28214468 = new VF.Formatter();
//
// voices and notes for stave 9 68
const smo282144v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo282144v0ar = [];
const smo282128 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo282128.setAttribute('id', 'smo282128');
smo282144v0ar.push(smo282128);
smo282144v0.addTickables(smo282144v0ar)
fmtsmo28214468.joinVoices([smo282144v0]);
const fmtsmo28518468 = new VF.Formatter();
//
// voices and notes for stave 10 68
const smo285184v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285184v0ar = [];
const smo285168 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo285168.setAttribute('id', 'smo285168');
smo285184v0ar.push(smo285168);
smo285184v0.addTickables(smo285184v0ar)
fmtsmo28518468.joinVoices([smo285184v0]);
const fmtsmo28823868 = new VF.Formatter();
//
// voices and notes for stave 11 68
const smo288238v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo288238v0ar = [];
const smo288222 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo288222.setAttribute('id', 'smo288222');
smo288238v0ar.push(smo288222);
smo288238v0.addTickables(smo288238v0ar)
fmtsmo28823868.joinVoices([smo288238v0]);
const fmtsmo29128168 = new VF.Formatter();
//
// voices and notes for stave 12 68
const smo291281v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo291281v0ar = [];
const smo291265 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo291265.setAttribute('id', 'smo291265');
smo291281v0ar.push(smo291265);
smo291281v0.addTickables(smo291281v0ar)
fmtsmo29128168.joinVoices([smo291281v0]);
const fmtsmo29448068 = new VF.Formatter();
//
// voices and notes for stave 13 68
const smo294480v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294480v0ar = [];
const smo294464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo294464.setAttribute('id', 'smo294464');
smo294480v0ar.push(smo294464);
smo294480v0.addTickables(smo294480v0ar)
fmtsmo29448068.joinVoices([smo294480v0]);
const fmtsmo29769368 = new VF.Formatter();
//
// voices and notes for stave 14 68
const smo297693v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297693v0ar = [];
const smo297677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo297677.setAttribute('id', 'smo297677');
smo297693v0ar.push(smo297677);
smo297693v0.addTickables(smo297693v0ar)
fmtsmo29769368.joinVoices([smo297693v0]);
const fmtsmo30088868 = new VF.Formatter();
//
// voices and notes for stave 15 68
const smo300888v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300888v0ar = [];
const smo300872 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo300872.setAttribute('id', 'smo300872');
smo300888v0ar.push(smo300872);
smo300888v0.addTickables(smo300888v0ar)
fmtsmo30088868.joinVoices([smo300888v0]);
const fmtsmo30400468 = new VF.Formatter();
//
// voices and notes for stave 16 68
const smo304004v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo304004v0ar = [];
const smo303985 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo303985.setAttribute('id', 'smo303985');
smo303985.addModifier(new VF.Dot(), 0);
smo304004v0ar.push(smo303985);
const smo303986 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo303986.setAttribute('id', 'smo303986');
smo304004v0ar.push(smo303986);
const smo303987 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo303987.setAttribute('id', 'smo303987');
smo304004v0ar.push(smo303987);
const smo303988 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo303988.setAttribute('id', 'smo303988');
smo304004v0ar.push(smo303988);
smo304004v0.addTickables(smo304004v0ar)
fmtsmo30400468.joinVoices([smo304004v0]);
const fmtsmo30720368 = new VF.Formatter();
//
// voices and notes for stave 17 68
const smo307203v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307203v0ar = [];
const smo307184 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307184.setAttribute('id', 'smo307184');
smo307203v0ar.push(smo307184);
const smo307185 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307185.setAttribute('id', 'smo307185');
smo307185.setStyle({ fillStyle: "#ffffff00" });
smo307203v0ar.push(smo307185);
smo307203v0.addTickables(smo307203v0ar)
fmtsmo30720368.joinVoices([smo307203v0]);
const smo307203v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307203v1ar = [];
const smo307186 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307186.setAttribute('id', 'smo307186');
smo307186.setStyle({ fillStyle: '#aaaaaa7f' });
smo307203v1ar.push(smo307186);
const smo307187 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307187.setAttribute('id', 'smo307187');
smo307187.setStyle({ fillStyle: "#115511" });
smo307203v1ar.push(smo307187);
smo307203v1.addTickables(smo307203v1ar)
fmtsmo30720368.joinVoices([smo307203v1]);
// create beam groups and tuplets for format grp smo308886 before formatting
 
// formatting measures in staff group smo308886
fmtsmo25436968.format([smo254369v0,smo257362v0,smo260506v0,smo263622v0,smo266641v0], 288);
const stavesmo254369 = new VF.Stave(1737, 210, 302);
stavesmo254369.setAttribute('id', 'stavesmo254369');
stavesmo254369.setBegBarType(VF.Barline.type.NONE);
stavesmo254369.setContext(context);
stavesmo254369.draw();
smo254369v0.draw(context, stavesmo254369);
const stavesmo257362 = new VF.Stave(1737, 316, 302);
stavesmo257362.setAttribute('id', 'stavesmo257362');
stavesmo257362.setBegBarType(VF.Barline.type.NONE);
stavesmo257362.setContext(context);
stavesmo257362.draw();
smo257362v0.draw(context, stavesmo257362);
const stavesmo260506 = new VF.Stave(1737, 437, 302);
stavesmo260506.setAttribute('id', 'stavesmo260506');
stavesmo260506.setBegBarType(VF.Barline.type.NONE);
stavesmo260506.setContext(context);
stavesmo260506.draw();
smo260506v0.draw(context, stavesmo260506);
const stavesmo263622 = new VF.Stave(1737, 553, 302);
stavesmo263622.setAttribute('id', 'stavesmo263622');
stavesmo263622.setBegBarType(VF.Barline.type.NONE);
stavesmo263622.setContext(context);
stavesmo263622.draw();
smo263622v0.draw(context, stavesmo263622);
const stavesmo266641 = new VF.Stave(1737, 659, 302);
stavesmo266641.setAttribute('id', 'stavesmo266641');
stavesmo266641.setBegBarType(VF.Barline.type.NONE);
stavesmo266641.setContext(context);
stavesmo266641.draw();
smo266641v0.draw(context, stavesmo266641);
// create beam groups and tuplets for format grp smo308888 before formatting
 
// formatting measures in staff group smo308888
fmtsmo26975168.format([smo269751v0,smo272860v0,smo275969v0,smo279055v0], 288);
const stavesmo269751 = new VF.Stave(1737, 780, 302);
stavesmo269751.setAttribute('id', 'stavesmo269751');
stavesmo269751.setBegBarType(VF.Barline.type.NONE);
stavesmo269751.setContext(context);
stavesmo269751.draw();
smo269751v0.draw(context, stavesmo269751);
const stavesmo272860 = new VF.Stave(1737, 896, 302);
stavesmo272860.setAttribute('id', 'stavesmo272860');
stavesmo272860.setBegBarType(VF.Barline.type.NONE);
stavesmo272860.setContext(context);
stavesmo272860.draw();
smo272860v0.draw(context, stavesmo272860);
const stavesmo275969 = new VF.Stave(1737, 1012, 302);
stavesmo275969.setAttribute('id', 'stavesmo275969');
stavesmo275969.setBegBarType(VF.Barline.type.NONE);
stavesmo275969.setContext(context);
stavesmo275969.draw();
smo275969v0.draw(context, stavesmo275969);
const stavesmo279055 = new VF.Stave(1737, 1128, 302);
stavesmo279055.setAttribute('id', 'stavesmo279055');
stavesmo279055.setBegBarType(VF.Barline.type.NONE);
stavesmo279055.setContext(context);
stavesmo279055.draw();
smo279055v0.draw(context, stavesmo279055);
// create beam groups and tuplets for format grp smo308890 before formatting
 
// formatting measures in staff group smo308890
fmtsmo28214468.format([smo282144v0,smo285184v0,smo288238v0,smo291281v0], 288);
const stavesmo282144 = new VF.Stave(1737, 1264, 302);
stavesmo282144.setAttribute('id', 'stavesmo282144');
stavesmo282144.setBegBarType(VF.Barline.type.NONE);
stavesmo282144.setContext(context);
stavesmo282144.draw();
smo282144v0.draw(context, stavesmo282144);
const stavesmo285184 = new VF.Stave(1737, 1400, 302);
stavesmo285184.setAttribute('id', 'stavesmo285184');
stavesmo285184.setBegBarType(VF.Barline.type.NONE);
stavesmo285184.setContext(context);
stavesmo285184.draw();
smo285184v0.draw(context, stavesmo285184);
const stavesmo288238 = new VF.Stave(1737, 1536, 302);
stavesmo288238.setAttribute('id', 'stavesmo288238');
stavesmo288238.setBegBarType(VF.Barline.type.NONE);
stavesmo288238.setContext(context);
stavesmo288238.draw();
smo288238v0.draw(context, stavesmo288238);
const stavesmo291281 = new VF.Stave(1737, 1672, 302);
stavesmo291281.setAttribute('id', 'stavesmo291281');
stavesmo291281.setBegBarType(VF.Barline.type.NONE);
stavesmo291281.setContext(context);
stavesmo291281.draw();
smo291281v0.draw(context, stavesmo291281);
// create beam groups and tuplets for format grp smo296209 before formatting
 
// formatting measures in staff group smo296209
fmtsmo29448068.format([smo294480v0], 288);
const stavesmo294480 = new VF.Stave(1737, 1818, 302);
stavesmo294480.setAttribute('id', 'stavesmo294480');
stavesmo294480.setBegBarType(VF.Barline.type.NONE);
stavesmo294480.setContext(context);
stavesmo294480.draw();
smo294480v0.draw(context, stavesmo294480);
// create beam groups and tuplets for format grp smo308884 before formatting
 
// formatting measures in staff group smo308884
fmtsmo29769368.format([smo297693v0,smo300888v0], 288);
const stavesmo297693 = new VF.Stave(1737, 1924, 302);
stavesmo297693.setAttribute('id', 'stavesmo297693');
stavesmo297693.setBegBarType(VF.Barline.type.NONE);
stavesmo297693.setContext(context);
stavesmo297693.draw();
smo297693v0.draw(context, stavesmo297693);
const stavesmo300888 = new VF.Stave(1737, 2010, 302);
stavesmo300888.setAttribute('id', 'stavesmo300888');
stavesmo300888.setBegBarType(VF.Barline.type.NONE);
stavesmo300888.setContext(context);
stavesmo300888.draw();
smo300888v0.draw(context, stavesmo300888);
// create beam groups and tuplets for format grp smo305722 before formatting
 
// formatting measures in staff group smo305722
fmtsmo30400468.format([smo304004v0], 288);
const stavesmo304004 = new VF.Stave(1737, 2081, 302);
stavesmo304004.setAttribute('id', 'stavesmo304004');
stavesmo304004.setBegBarType(VF.Barline.type.NONE);
stavesmo304004.setContext(context);
stavesmo304004.draw();
smo304004v0.draw(context, stavesmo304004);
// create beam groups and tuplets for format grp smo308878 before formatting
 
// formatting measures in staff group smo308878
fmtsmo30720368.format([smo307203v0,smo307203v1], 288);
const stavesmo307203 = new VF.Stave(1737, 2152, 302);
stavesmo307203.setAttribute('id', 'stavesmo307203');
stavesmo307203.setBegBarType(VF.Barline.type.NONE);
stavesmo307203.setContext(context);
stavesmo307203.draw();
smo307203v0.draw(context, stavesmo307203);
smo307203v1.draw(context, stavesmo307203);
const fmtsmo25438669 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo254386v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo254386v0ar = [];
const smo254370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo254370.setAttribute('id', 'smo254370');
smo254386v0ar.push(smo254370);
smo254386v0.addTickables(smo254386v0ar)
fmtsmo25438669.joinVoices([smo254386v0]);
const fmtsmo25737969 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo257379v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257379v0ar = [];
const smo257363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo257363.setAttribute('id', 'smo257363');
smo257379v0ar.push(smo257363);
smo257379v0.addTickables(smo257379v0ar)
fmtsmo25737969.joinVoices([smo257379v0]);
const fmtsmo26052369 = new VF.Formatter();
//
// voices and notes for stave 2 69
const smo260523v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260523v0ar = [];
const smo260507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo260507.setAttribute('id', 'smo260507');
smo260523v0ar.push(smo260507);
smo260523v0.addTickables(smo260523v0ar)
fmtsmo26052369.joinVoices([smo260523v0]);
const fmtsmo26363969 = new VF.Formatter();
//
// voices and notes for stave 3 69
const smo263639v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263639v0ar = [];
const smo263623 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo263623.setAttribute('id', 'smo263623');
smo263639v0ar.push(smo263623);
smo263639v0.addTickables(smo263639v0ar)
fmtsmo26363969.joinVoices([smo263639v0]);
const fmtsmo26665869 = new VF.Formatter();
//
// voices and notes for stave 4 69
const smo266658v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266658v0ar = [];
const smo266642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266642.setAttribute('id', 'smo266642');
smo266658v0ar.push(smo266642);
smo266658v0.addTickables(smo266658v0ar)
fmtsmo26665869.joinVoices([smo266658v0]);
const fmtsmo26977169 = new VF.Formatter();
//
// voices and notes for stave 5 69
const smo269771v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269771v0ar = [];
const smo269752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269752.setAttribute('id', 'smo269752');
smo269771v0ar.push(smo269752);
const smo269753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269753.setAttribute('id', 'smo269753');
smo269771v0ar.push(smo269753);
const smo269754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269754.setAttribute('id', 'smo269754');
smo269771v0ar.push(smo269754);
const smo269755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269755.setAttribute('id', 'smo269755');
smo269771v0ar.push(smo269755);
smo269771v0.addTickables(smo269771v0ar)
fmtsmo26977169.joinVoices([smo269771v0]);
const fmtsmo27287769 = new VF.Formatter();
//
// voices and notes for stave 6 69
const smo272877v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272877v0ar = [];
const smo272861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272861.setAttribute('id', 'smo272861');
smo272877v0ar.push(smo272861);
smo272877v0.addTickables(smo272877v0ar)
fmtsmo27287769.joinVoices([smo272877v0]);
const fmtsmo27598669 = new VF.Formatter();
//
// voices and notes for stave 7 69
const smo275986v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275986v0ar = [];
const smo275970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275970.setAttribute('id', 'smo275970');
smo275986v0ar.push(smo275970);
smo275986v0.addTickables(smo275986v0ar)
fmtsmo27598669.joinVoices([smo275986v0]);
const fmtsmo27907269 = new VF.Formatter();
//
// voices and notes for stave 8 69
const smo279072v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo279072v0ar = [];
const smo279056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo279056.setAttribute('id', 'smo279056');
smo279072v0ar.push(smo279056);
smo279072v0.addTickables(smo279072v0ar)
fmtsmo27907269.joinVoices([smo279072v0]);
const fmtsmo28216169 = new VF.Formatter();
//
// voices and notes for stave 9 69
const smo282161v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo282161v0ar = [];
const smo282145 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo282145.setAttribute('id', 'smo282145');
smo282161v0ar.push(smo282145);
smo282161v0.addTickables(smo282161v0ar)
fmtsmo28216169.joinVoices([smo282161v0]);
const fmtsmo28520169 = new VF.Formatter();
//
// voices and notes for stave 10 69
const smo285201v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285201v0ar = [];
const smo285185 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo285185.setAttribute('id', 'smo285185');
smo285201v0ar.push(smo285185);
smo285201v0.addTickables(smo285201v0ar)
fmtsmo28520169.joinVoices([smo285201v0]);
const fmtsmo28825569 = new VF.Formatter();
//
// voices and notes for stave 11 69
const smo288255v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo288255v0ar = [];
const smo288239 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo288239.setAttribute('id', 'smo288239');
smo288255v0ar.push(smo288239);
smo288255v0.addTickables(smo288255v0ar)
fmtsmo28825569.joinVoices([smo288255v0]);
const fmtsmo29129869 = new VF.Formatter();
//
// voices and notes for stave 12 69
const smo291298v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo291298v0ar = [];
const smo291282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo291282.setAttribute('id', 'smo291282');
smo291298v0ar.push(smo291282);
smo291298v0.addTickables(smo291298v0ar)
fmtsmo29129869.joinVoices([smo291298v0]);
const fmtsmo29449769 = new VF.Formatter();
//
// voices and notes for stave 13 69
const smo294497v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294497v0ar = [];
const smo294481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo294481.setAttribute('id', 'smo294481');
smo294497v0ar.push(smo294481);
smo294497v0.addTickables(smo294497v0ar)
fmtsmo29449769.joinVoices([smo294497v0]);
const fmtsmo29771069 = new VF.Formatter();
//
// voices and notes for stave 14 69
const smo297710v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297710v0ar = [];
const smo297694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo297694.setAttribute('id', 'smo297694');
smo297710v0ar.push(smo297694);
smo297710v0.addTickables(smo297710v0ar)
fmtsmo29771069.joinVoices([smo297710v0]);
const fmtsmo30090569 = new VF.Formatter();
//
// voices and notes for stave 15 69
const smo300905v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300905v0ar = [];
const smo300889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo300889.setAttribute('id', 'smo300889');
smo300905v0ar.push(smo300889);
smo300905v0.addTickables(smo300905v0ar)
fmtsmo30090569.joinVoices([smo300905v0]);
const fmtsmo30402469 = new VF.Formatter();
//
// voices and notes for stave 16 69
const smo304024v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo304024v0ar = [];
const smo304005 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo304005.setAttribute('id', 'smo304005');
smo304005.addModifier(new VF.Dot(), 0);
smo304024v0ar.push(smo304005);
const smo304006 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo304006.setAttribute('id', 'smo304006');
smo304024v0ar.push(smo304006);
const smo304007 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo304007.setAttribute('id', 'smo304007');
smo304024v0ar.push(smo304007);
const smo304008 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo304008.setAttribute('id', 'smo304008');
smo304024v0ar.push(smo304008);
smo304024v0.addTickables(smo304024v0ar)
fmtsmo30402469.joinVoices([smo304024v0]);
const fmtsmo30722369 = new VF.Formatter();
//
// voices and notes for stave 17 69
const smo307223v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307223v0ar = [];
const smo307204 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307204.setAttribute('id', 'smo307204');
smo307223v0ar.push(smo307204);
const smo307205 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307205.setAttribute('id', 'smo307205');
smo307205.setStyle({ fillStyle: "#ffffff00" });
smo307223v0ar.push(smo307205);
smo307223v0.addTickables(smo307223v0ar)
fmtsmo30722369.joinVoices([smo307223v0]);
const smo307223v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307223v1ar = [];
const smo307206 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307206.setAttribute('id', 'smo307206');
smo307206.setStyle({ fillStyle: '#aaaaaa7f' });
smo307223v1ar.push(smo307206);
const smo307207 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307207.setAttribute('id', 'smo307207');
smo307207.setStyle({ fillStyle: "#115511" });
smo307223v1ar.push(smo307207);
smo307223v1.addTickables(smo307223v1ar)
fmtsmo30722369.joinVoices([smo307223v1]);
// create beam groups and tuplets for format grp smo308886 before formatting
 
// formatting measures in staff group smo308886
fmtsmo25438669.format([smo254386v0,smo257379v0,smo260523v0,smo263639v0,smo266658v0], 288);
const stavesmo254386 = new VF.Stave(2039, 210, 302);
stavesmo254386.setAttribute('id', 'stavesmo254386');
stavesmo254386.setBegBarType(VF.Barline.type.NONE);
stavesmo254386.setContext(context);
stavesmo254386.draw();
smo254386v0.draw(context, stavesmo254386);
const stavesmo257379 = new VF.Stave(2039, 316, 302);
stavesmo257379.setAttribute('id', 'stavesmo257379');
stavesmo257379.setBegBarType(VF.Barline.type.NONE);
stavesmo257379.setContext(context);
stavesmo257379.draw();
smo257379v0.draw(context, stavesmo257379);
const stavesmo260523 = new VF.Stave(2039, 437, 302);
stavesmo260523.setAttribute('id', 'stavesmo260523');
stavesmo260523.setBegBarType(VF.Barline.type.NONE);
stavesmo260523.setContext(context);
stavesmo260523.draw();
smo260523v0.draw(context, stavesmo260523);
const stavesmo263639 = new VF.Stave(2039, 553, 302);
stavesmo263639.setAttribute('id', 'stavesmo263639');
stavesmo263639.setBegBarType(VF.Barline.type.NONE);
stavesmo263639.setContext(context);
stavesmo263639.draw();
smo263639v0.draw(context, stavesmo263639);
const stavesmo266658 = new VF.Stave(2039, 659, 302);
stavesmo266658.setAttribute('id', 'stavesmo266658');
stavesmo266658.setBegBarType(VF.Barline.type.NONE);
stavesmo266658.setContext(context);
stavesmo266658.draw();
smo266658v0.draw(context, stavesmo266658);
// create beam groups and tuplets for format grp smo308888 before formatting
 
// formatting measures in staff group smo308888
fmtsmo26977169.format([smo269771v0,smo272877v0,smo275986v0,smo279072v0], 288);
const stavesmo269771 = new VF.Stave(2039, 780, 302);
stavesmo269771.setAttribute('id', 'stavesmo269771');
stavesmo269771.setBegBarType(VF.Barline.type.NONE);
stavesmo269771.setContext(context);
stavesmo269771.draw();
smo269771v0.draw(context, stavesmo269771);
const stavesmo272877 = new VF.Stave(2039, 896, 302);
stavesmo272877.setAttribute('id', 'stavesmo272877');
stavesmo272877.setBegBarType(VF.Barline.type.NONE);
stavesmo272877.setContext(context);
stavesmo272877.draw();
smo272877v0.draw(context, stavesmo272877);
const stavesmo275986 = new VF.Stave(2039, 1012, 302);
stavesmo275986.setAttribute('id', 'stavesmo275986');
stavesmo275986.setBegBarType(VF.Barline.type.NONE);
stavesmo275986.setContext(context);
stavesmo275986.draw();
smo275986v0.draw(context, stavesmo275986);
const stavesmo279072 = new VF.Stave(2039, 1128, 302);
stavesmo279072.setAttribute('id', 'stavesmo279072');
stavesmo279072.setBegBarType(VF.Barline.type.NONE);
stavesmo279072.setContext(context);
stavesmo279072.draw();
smo279072v0.draw(context, stavesmo279072);
// create beam groups and tuplets for format grp smo308890 before formatting
 
// formatting measures in staff group smo308890
fmtsmo28216169.format([smo282161v0,smo285201v0,smo288255v0,smo291298v0], 288);
const stavesmo282161 = new VF.Stave(2039, 1264, 302);
stavesmo282161.setAttribute('id', 'stavesmo282161');
stavesmo282161.setBegBarType(VF.Barline.type.NONE);
stavesmo282161.setContext(context);
stavesmo282161.draw();
smo282161v0.draw(context, stavesmo282161);
const stavesmo285201 = new VF.Stave(2039, 1400, 302);
stavesmo285201.setAttribute('id', 'stavesmo285201');
stavesmo285201.setBegBarType(VF.Barline.type.NONE);
stavesmo285201.setContext(context);
stavesmo285201.draw();
smo285201v0.draw(context, stavesmo285201);
const stavesmo288255 = new VF.Stave(2039, 1536, 302);
stavesmo288255.setAttribute('id', 'stavesmo288255');
stavesmo288255.setBegBarType(VF.Barline.type.NONE);
stavesmo288255.setContext(context);
stavesmo288255.draw();
smo288255v0.draw(context, stavesmo288255);
const stavesmo291298 = new VF.Stave(2039, 1672, 302);
stavesmo291298.setAttribute('id', 'stavesmo291298');
stavesmo291298.setBegBarType(VF.Barline.type.NONE);
stavesmo291298.setContext(context);
stavesmo291298.draw();
smo291298v0.draw(context, stavesmo291298);
// create beam groups and tuplets for format grp smo296209 before formatting
 
// formatting measures in staff group smo296209
fmtsmo29449769.format([smo294497v0], 288);
const stavesmo294497 = new VF.Stave(2039, 1818, 302);
stavesmo294497.setAttribute('id', 'stavesmo294497');
stavesmo294497.setBegBarType(VF.Barline.type.NONE);
stavesmo294497.setContext(context);
stavesmo294497.draw();
smo294497v0.draw(context, stavesmo294497);
// create beam groups and tuplets for format grp smo308884 before formatting
 
// formatting measures in staff group smo308884
fmtsmo29771069.format([smo297710v0,smo300905v0], 288);
const stavesmo297710 = new VF.Stave(2039, 1924, 302);
stavesmo297710.setAttribute('id', 'stavesmo297710');
stavesmo297710.setBegBarType(VF.Barline.type.NONE);
stavesmo297710.setContext(context);
stavesmo297710.draw();
smo297710v0.draw(context, stavesmo297710);
const stavesmo300905 = new VF.Stave(2039, 2010, 302);
stavesmo300905.setAttribute('id', 'stavesmo300905');
stavesmo300905.setBegBarType(VF.Barline.type.NONE);
stavesmo300905.setContext(context);
stavesmo300905.draw();
smo300905v0.draw(context, stavesmo300905);
// create beam groups and tuplets for format grp smo305722 before formatting
 
// formatting measures in staff group smo305722
fmtsmo30402469.format([smo304024v0], 288);
const stavesmo304024 = new VF.Stave(2039, 2081, 302);
stavesmo304024.setAttribute('id', 'stavesmo304024');
stavesmo304024.setBegBarType(VF.Barline.type.NONE);
stavesmo304024.setContext(context);
stavesmo304024.draw();
smo304024v0.draw(context, stavesmo304024);
// create beam groups and tuplets for format grp smo308878 before formatting
 
// formatting measures in staff group smo308878
fmtsmo30722369.format([smo307223v0,smo307223v1], 288);
const stavesmo307223 = new VF.Stave(2039, 2152, 302);
stavesmo307223.setAttribute('id', 'stavesmo307223');
stavesmo307223.setBegBarType(VF.Barline.type.NONE);
stavesmo307223.setContext(context);
stavesmo307223.draw();
smo307223v0.draw(context, stavesmo307223);
smo307223v1.draw(context, stavesmo307223);
const fmtsmo25440370 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo254403v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo254403v0ar = [];
const smo254387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo254387.setAttribute('id', 'smo254387');
smo254403v0ar.push(smo254387);
smo254403v0.addTickables(smo254403v0ar)
fmtsmo25440370.joinVoices([smo254403v0]);
const fmtsmo25739670 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo257396v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257396v0ar = [];
const smo257380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo257380.setAttribute('id', 'smo257380');
smo257396v0ar.push(smo257380);
smo257396v0.addTickables(smo257396v0ar)
fmtsmo25739670.joinVoices([smo257396v0]);
const fmtsmo26054070 = new VF.Formatter();
//
// voices and notes for stave 2 70
const smo260540v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260540v0ar = [];
const smo260524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo260524.setAttribute('id', 'smo260524');
smo260540v0ar.push(smo260524);
smo260540v0.addTickables(smo260540v0ar)
fmtsmo26054070.joinVoices([smo260540v0]);
const fmtsmo26365670 = new VF.Formatter();
//
// voices and notes for stave 3 70
const smo263656v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263656v0ar = [];
const smo263640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo263640.setAttribute('id', 'smo263640');
smo263656v0ar.push(smo263640);
smo263656v0.addTickables(smo263656v0ar)
fmtsmo26365670.joinVoices([smo263656v0]);
const fmtsmo26667570 = new VF.Formatter();
//
// voices and notes for stave 4 70
const smo266675v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266675v0ar = [];
const smo266659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266659.setAttribute('id', 'smo266659');
smo266675v0ar.push(smo266659);
smo266675v0.addTickables(smo266675v0ar)
fmtsmo26667570.joinVoices([smo266675v0]);
const fmtsmo26979170 = new VF.Formatter();
//
// voices and notes for stave 5 70
const smo269791v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269791v0ar = [];
const smo269772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269772.setAttribute('id', 'smo269772');
smo269791v0ar.push(smo269772);
const smo269773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269773.setAttribute('id', 'smo269773');
smo269791v0ar.push(smo269773);
const smo269774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269774.setAttribute('id', 'smo269774');
smo269791v0ar.push(smo269774);
const smo269775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269775.setAttribute('id', 'smo269775');
smo269791v0ar.push(smo269775);
smo269791v0.addTickables(smo269791v0ar)
fmtsmo26979170.joinVoices([smo269791v0]);
const fmtsmo27289470 = new VF.Formatter();
//
// voices and notes for stave 6 70
const smo272894v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272894v0ar = [];
const smo272878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272878.setAttribute('id', 'smo272878');
smo272894v0ar.push(smo272878);
smo272894v0.addTickables(smo272894v0ar)
fmtsmo27289470.joinVoices([smo272894v0]);
const fmtsmo27600370 = new VF.Formatter();
//
// voices and notes for stave 7 70
const smo276003v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo276003v0ar = [];
const smo275987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275987.setAttribute('id', 'smo275987');
smo276003v0ar.push(smo275987);
smo276003v0.addTickables(smo276003v0ar)
fmtsmo27600370.joinVoices([smo276003v0]);
const fmtsmo27908970 = new VF.Formatter();
//
// voices and notes for stave 8 70
const smo279089v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo279089v0ar = [];
const smo279073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo279073.setAttribute('id', 'smo279073');
smo279089v0ar.push(smo279073);
smo279089v0.addTickables(smo279089v0ar)
fmtsmo27908970.joinVoices([smo279089v0]);
const fmtsmo28217870 = new VF.Formatter();
//
// voices and notes for stave 9 70
const smo282178v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo282178v0ar = [];
const smo282162 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo282162.setAttribute('id', 'smo282162');
smo282178v0ar.push(smo282162);
smo282178v0.addTickables(smo282178v0ar)
fmtsmo28217870.joinVoices([smo282178v0]);
const fmtsmo28521870 = new VF.Formatter();
//
// voices and notes for stave 10 70
const smo285218v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285218v0ar = [];
const smo285202 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo285202.setAttribute('id', 'smo285202');
smo285218v0ar.push(smo285202);
smo285218v0.addTickables(smo285218v0ar)
fmtsmo28521870.joinVoices([smo285218v0]);
const fmtsmo28827270 = new VF.Formatter();
//
// voices and notes for stave 11 70
const smo288272v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo288272v0ar = [];
const smo288256 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo288256.setAttribute('id', 'smo288256');
smo288272v0ar.push(smo288256);
smo288272v0.addTickables(smo288272v0ar)
fmtsmo28827270.joinVoices([smo288272v0]);
const fmtsmo29131570 = new VF.Formatter();
//
// voices and notes for stave 12 70
const smo291315v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo291315v0ar = [];
const smo291299 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo291299.setAttribute('id', 'smo291299');
smo291315v0ar.push(smo291299);
smo291315v0.addTickables(smo291315v0ar)
fmtsmo29131570.joinVoices([smo291315v0]);
const fmtsmo29451470 = new VF.Formatter();
//
// voices and notes for stave 13 70
const smo294514v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294514v0ar = [];
const smo294498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo294498.setAttribute('id', 'smo294498');
smo294514v0ar.push(smo294498);
smo294514v0.addTickables(smo294514v0ar)
fmtsmo29451470.joinVoices([smo294514v0]);
const fmtsmo29772770 = new VF.Formatter();
//
// voices and notes for stave 14 70
const smo297727v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297727v0ar = [];
const smo297711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo297711.setAttribute('id', 'smo297711');
smo297727v0ar.push(smo297711);
smo297727v0.addTickables(smo297727v0ar)
fmtsmo29772770.joinVoices([smo297727v0]);
const fmtsmo30092270 = new VF.Formatter();
//
// voices and notes for stave 15 70
const smo300922v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300922v0ar = [];
const smo300906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo300906.setAttribute('id', 'smo300906');
smo300922v0ar.push(smo300906);
smo300922v0.addTickables(smo300922v0ar)
fmtsmo30092270.joinVoices([smo300922v0]);
const fmtsmo30404470 = new VF.Formatter();
//
// voices and notes for stave 16 70
const smo304044v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo304044v0ar = [];
const smo304025 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo304025.setAttribute('id', 'smo304025');
smo304025.addModifier(new VF.Dot(), 0);
smo304044v0ar.push(smo304025);
const smo304026 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
smo304026.setAttribute('id', 'smo304026');
const smo3040260acc = new VF.Accidental('b');
smo304026.addModifier(smo3040260acc, 0);
smo304044v0ar.push(smo304026);
const smo304027 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
smo304027.setAttribute('id', 'smo304027');
smo304044v0ar.push(smo304027);
const smo304028 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo304028.setAttribute('id', 'smo304028');
smo304044v0ar.push(smo304028);
smo304044v0.addTickables(smo304044v0ar)
fmtsmo30404470.joinVoices([smo304044v0]);
const fmtsmo30724370 = new VF.Formatter();
//
// voices and notes for stave 17 70
const smo307243v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307243v0ar = [];
const smo307224 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307224.setAttribute('id', 'smo307224');
smo307243v0ar.push(smo307224);
const smo307225 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307225.setAttribute('id', 'smo307225');
smo307225.setStyle({ fillStyle: "#ffffff00" });
smo307243v0ar.push(smo307225);
smo307243v0.addTickables(smo307243v0ar)
fmtsmo30724370.joinVoices([smo307243v0]);
const smo307243v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307243v1ar = [];
const smo307226 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307226.setAttribute('id', 'smo307226');
smo307226.setStyle({ fillStyle: '#aaaaaa7f' });
smo307243v1ar.push(smo307226);
const smo307227 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307227.setAttribute('id', 'smo307227');
smo307227.setStyle({ fillStyle: "#115511" });
smo307243v1ar.push(smo307227);
smo307243v1.addTickables(smo307243v1ar)
fmtsmo30724370.joinVoices([smo307243v1]);
// create beam groups and tuplets for format grp smo308886 before formatting
 
// formatting measures in staff group smo308886
fmtsmo25440370.format([smo254403v0,smo257396v0,smo260540v0,smo263656v0,smo266675v0], 288);
const stavesmo254403 = new VF.Stave(2341, 210, 302);
stavesmo254403.setAttribute('id', 'stavesmo254403');
stavesmo254403.setBegBarType(VF.Barline.type.NONE);
stavesmo254403.setContext(context);
stavesmo254403.draw();
smo254403v0.draw(context, stavesmo254403);
const stavesmo257396 = new VF.Stave(2341, 316, 302);
stavesmo257396.setAttribute('id', 'stavesmo257396');
stavesmo257396.setBegBarType(VF.Barline.type.NONE);
stavesmo257396.setContext(context);
stavesmo257396.draw();
smo257396v0.draw(context, stavesmo257396);
const stavesmo260540 = new VF.Stave(2341, 437, 302);
stavesmo260540.setAttribute('id', 'stavesmo260540');
stavesmo260540.setBegBarType(VF.Barline.type.NONE);
stavesmo260540.setContext(context);
stavesmo260540.draw();
smo260540v0.draw(context, stavesmo260540);
const stavesmo263656 = new VF.Stave(2341, 553, 302);
stavesmo263656.setAttribute('id', 'stavesmo263656');
stavesmo263656.setBegBarType(VF.Barline.type.NONE);
stavesmo263656.setContext(context);
stavesmo263656.draw();
smo263656v0.draw(context, stavesmo263656);
const stavesmo266675 = new VF.Stave(2341, 659, 302);
stavesmo266675.setAttribute('id', 'stavesmo266675');
stavesmo266675.setBegBarType(VF.Barline.type.NONE);
stavesmo266675.setContext(context);
stavesmo266675.draw();
smo266675v0.draw(context, stavesmo266675);
// create beam groups and tuplets for format grp smo308888 before formatting
 
// formatting measures in staff group smo308888
fmtsmo26979170.format([smo269791v0,smo272894v0,smo276003v0,smo279089v0], 288);
const stavesmo269791 = new VF.Stave(2341, 780, 302);
stavesmo269791.setAttribute('id', 'stavesmo269791');
stavesmo269791.setBegBarType(VF.Barline.type.NONE);
stavesmo269791.setContext(context);
stavesmo269791.draw();
smo269791v0.draw(context, stavesmo269791);
const stavesmo272894 = new VF.Stave(2341, 896, 302);
stavesmo272894.setAttribute('id', 'stavesmo272894');
stavesmo272894.setBegBarType(VF.Barline.type.NONE);
stavesmo272894.setContext(context);
stavesmo272894.draw();
smo272894v0.draw(context, stavesmo272894);
const stavesmo276003 = new VF.Stave(2341, 1012, 302);
stavesmo276003.setAttribute('id', 'stavesmo276003');
stavesmo276003.setBegBarType(VF.Barline.type.NONE);
stavesmo276003.setContext(context);
stavesmo276003.draw();
smo276003v0.draw(context, stavesmo276003);
const stavesmo279089 = new VF.Stave(2341, 1128, 302);
stavesmo279089.setAttribute('id', 'stavesmo279089');
stavesmo279089.setBegBarType(VF.Barline.type.NONE);
stavesmo279089.setContext(context);
stavesmo279089.draw();
smo279089v0.draw(context, stavesmo279089);
// create beam groups and tuplets for format grp smo308890 before formatting
 
// formatting measures in staff group smo308890
fmtsmo28217870.format([smo282178v0,smo285218v0,smo288272v0,smo291315v0], 288);
const stavesmo282178 = new VF.Stave(2341, 1264, 302);
stavesmo282178.setAttribute('id', 'stavesmo282178');
stavesmo282178.setBegBarType(VF.Barline.type.NONE);
stavesmo282178.setContext(context);
stavesmo282178.draw();
smo282178v0.draw(context, stavesmo282178);
const stavesmo285218 = new VF.Stave(2341, 1400, 302);
stavesmo285218.setAttribute('id', 'stavesmo285218');
stavesmo285218.setBegBarType(VF.Barline.type.NONE);
stavesmo285218.setContext(context);
stavesmo285218.draw();
smo285218v0.draw(context, stavesmo285218);
const stavesmo288272 = new VF.Stave(2341, 1536, 302);
stavesmo288272.setAttribute('id', 'stavesmo288272');
stavesmo288272.setBegBarType(VF.Barline.type.NONE);
stavesmo288272.setContext(context);
stavesmo288272.draw();
smo288272v0.draw(context, stavesmo288272);
const stavesmo291315 = new VF.Stave(2341, 1672, 302);
stavesmo291315.setAttribute('id', 'stavesmo291315');
stavesmo291315.setBegBarType(VF.Barline.type.NONE);
stavesmo291315.setContext(context);
stavesmo291315.draw();
smo291315v0.draw(context, stavesmo291315);
// create beam groups and tuplets for format grp smo296209 before formatting
 
// formatting measures in staff group smo296209
fmtsmo29451470.format([smo294514v0], 288);
const stavesmo294514 = new VF.Stave(2341, 1818, 302);
stavesmo294514.setAttribute('id', 'stavesmo294514');
stavesmo294514.setBegBarType(VF.Barline.type.NONE);
stavesmo294514.setContext(context);
stavesmo294514.draw();
smo294514v0.draw(context, stavesmo294514);
// create beam groups and tuplets for format grp smo308884 before formatting
 
// formatting measures in staff group smo308884
fmtsmo29772770.format([smo297727v0,smo300922v0], 288);
const stavesmo297727 = new VF.Stave(2341, 1924, 302);
stavesmo297727.setAttribute('id', 'stavesmo297727');
stavesmo297727.setBegBarType(VF.Barline.type.NONE);
stavesmo297727.setContext(context);
stavesmo297727.draw();
smo297727v0.draw(context, stavesmo297727);
const stavesmo300922 = new VF.Stave(2341, 2010, 302);
stavesmo300922.setAttribute('id', 'stavesmo300922');
stavesmo300922.setBegBarType(VF.Barline.type.NONE);
stavesmo300922.setContext(context);
stavesmo300922.draw();
smo300922v0.draw(context, stavesmo300922);
// create beam groups and tuplets for format grp smo305722 before formatting
 
// formatting measures in staff group smo305722
fmtsmo30404470.format([smo304044v0], 288);
const stavesmo304044 = new VF.Stave(2341, 2081, 302);
stavesmo304044.setAttribute('id', 'stavesmo304044');
stavesmo304044.setBegBarType(VF.Barline.type.NONE);
stavesmo304044.setContext(context);
stavesmo304044.draw();
smo304044v0.draw(context, stavesmo304044);
// create beam groups and tuplets for format grp smo308878 before formatting
 
// formatting measures in staff group smo308878
fmtsmo30724370.format([smo307243v0,smo307243v1], 288);
const stavesmo307243 = new VF.Stave(2341, 2152, 302);
stavesmo307243.setAttribute('id', 'stavesmo307243');
stavesmo307243.setBegBarType(VF.Barline.type.NONE);
stavesmo307243.setContext(context);
stavesmo307243.draw();
smo307243v0.draw(context, stavesmo307243);
smo307243v1.draw(context, stavesmo307243);
const fmtsmo25442871 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo254428v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo254428v0ar = [];
const smo254404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo254404.setAttribute('id', 'smo254404');
smo254428v0ar.push(smo254404);
const smo254405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo254405.setAttribute('id', 'smo254405');
smo254428v0ar.push(smo254405);
const smo254406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo254406.setAttribute('id', 'smo254406');
const smo254407 = new VF.Annotation('Ki');
smo254407.setAttribute('id', 'smo254407');
smo254407.setFont('times', 12, 'normal');
smo254407.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254406.addModifier(smo254407);
smo254407.addClass('lyric lyric-0 lyric-hyphen');
smo254428v0ar.push(smo254406);
const smo254408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo254408.setAttribute('id', 'smo254408');
smo254428v0ar.push(smo254408);
const smo254409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo254409.setAttribute('id', 'smo254409');
const smo254410 = new VF.Annotation('ki');
smo254410.setAttribute('id', 'smo254410');
smo254410.setFont('times', 12, 'normal');
smo254410.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254409.addModifier(smo254410);
smo254410.addClass('lyric lyric-0 lyric-hyphen');
smo254428v0ar.push(smo254409);
const smo254411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo254411.setAttribute('id', 'smo254411');
const smo254412 = new VF.Annotation('ri');
smo254412.setAttribute('id', 'smo254412');
smo254412.setFont('times', 12, 'normal');
smo254412.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo254411.addModifier(smo254412);
smo254412.addClass('lyric lyric-0');
smo254428v0ar.push(smo254411);
smo254428v0.addTickables(smo254428v0ar)
fmtsmo25442871.joinVoices([smo254428v0]);
const fmtsmo25742171 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo257421v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257421v0ar = [];
const smo257397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo257397.setAttribute('id', 'smo257397');
smo257421v0ar.push(smo257397);
const smo257398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo257398.setAttribute('id', 'smo257398');
smo257421v0ar.push(smo257398);
const smo257399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo257399.setAttribute('id', 'smo257399');
const smo257400 = new VF.Annotation('Ki');
smo257400.setAttribute('id', 'smo257400');
smo257400.setFont('times', 12, 'normal');
smo257400.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257399.addModifier(smo257400);
smo257400.addClass('lyric lyric-0 lyric-hyphen');
smo257421v0ar.push(smo257399);
const smo257401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo257401.setAttribute('id', 'smo257401');
smo257421v0ar.push(smo257401);
const smo257402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo257402.setAttribute('id', 'smo257402');
const smo257403 = new VF.Annotation('ki');
smo257403.setAttribute('id', 'smo257403');
smo257403.setFont('times', 12, 'normal');
smo257403.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257402.addModifier(smo257403);
smo257403.addClass('lyric lyric-0 lyric-hyphen');
smo257421v0ar.push(smo257402);
const smo257404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo257404.setAttribute('id', 'smo257404');
const smo257405 = new VF.Annotation('ri');
smo257405.setAttribute('id', 'smo257405');
smo257405.setFont('times', 12, 'normal');
smo257405.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257404.addModifier(smo257405);
smo257405.addClass('lyric lyric-0');
smo257421v0ar.push(smo257404);
smo257421v0.addTickables(smo257421v0ar)
fmtsmo25742171.joinVoices([smo257421v0]);
const fmtsmo26056571 = new VF.Formatter();
//
// voices and notes for stave 2 71
const smo260565v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260565v0ar = [];
const smo260541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo260541.setAttribute('id', 'smo260541');
smo260565v0ar.push(smo260541);
const smo260542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo260542.setAttribute('id', 'smo260542');
smo260565v0ar.push(smo260542);
const smo260543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo260543.setAttribute('id', 'smo260543');
const smo260544 = new VF.Annotation('Ki');
smo260544.setAttribute('id', 'smo260544');
smo260544.setFont('times', 12, 'normal');
smo260544.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260543.addModifier(smo260544);
smo260544.addClass('lyric lyric-0 lyric-hyphen');
smo260565v0ar.push(smo260543);
const smo260545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo260545.setAttribute('id', 'smo260545');
smo260565v0ar.push(smo260545);
const smo260546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo260546.setAttribute('id', 'smo260546');
const smo260547 = new VF.Annotation('ki');
smo260547.setAttribute('id', 'smo260547');
smo260547.setFont('times', 12, 'normal');
smo260547.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260546.addModifier(smo260547);
smo260547.addClass('lyric lyric-0 lyric-hyphen');
smo260565v0ar.push(smo260546);
const smo260548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo260548.setAttribute('id', 'smo260548');
const smo260549 = new VF.Annotation('ri');
smo260549.setAttribute('id', 'smo260549');
smo260549.setFont('times', 12, 'normal');
smo260549.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260548.addModifier(smo260549);
smo260549.addClass('lyric lyric-0');
smo260565v0ar.push(smo260548);
smo260565v0.addTickables(smo260565v0ar)
fmtsmo26056571.joinVoices([smo260565v0]);
const fmtsmo26368171 = new VF.Formatter();
//
// voices and notes for stave 3 71
const smo263681v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263681v0ar = [];
const smo263657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo263657.setAttribute('id', 'smo263657');
smo263681v0ar.push(smo263657);
const smo263658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo263658.setAttribute('id', 'smo263658');
smo263681v0ar.push(smo263658);
const smo263659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo263659.setAttribute('id', 'smo263659');
const smo263660 = new VF.Annotation('Ki');
smo263660.setAttribute('id', 'smo263660');
smo263660.setFont('times', 12, 'normal');
smo263660.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263659.addModifier(smo263660);
smo263660.addClass('lyric lyric-0 lyric-hyphen');
smo263681v0ar.push(smo263659);
const smo263661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo263661.setAttribute('id', 'smo263661');
smo263681v0ar.push(smo263661);
const smo263662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo263662.setAttribute('id', 'smo263662');
const smo263663 = new VF.Annotation('ki');
smo263663.setAttribute('id', 'smo263663');
smo263663.setFont('times', 12, 'normal');
smo263663.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263662.addModifier(smo263663);
smo263663.addClass('lyric lyric-0 lyric-hyphen');
smo263681v0ar.push(smo263662);
const smo263664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo263664.setAttribute('id', 'smo263664');
const smo263665 = new VF.Annotation('ri');
smo263665.setAttribute('id', 'smo263665');
smo263665.setFont('times', 12, 'normal');
smo263665.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263664.addModifier(smo263665);
smo263665.addClass('lyric lyric-0');
smo263681v0ar.push(smo263664);
smo263681v0.addTickables(smo263681v0ar)
fmtsmo26368171.joinVoices([smo263681v0]);
const fmtsmo26670071 = new VF.Formatter();
//
// voices and notes for stave 4 71
const smo266700v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266700v0ar = [];
const smo266676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266676.setAttribute('id', 'smo266676');
smo266700v0ar.push(smo266676);
const smo266677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266677.setAttribute('id', 'smo266677');
smo266700v0ar.push(smo266677);
const smo266678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266678.setAttribute('id', 'smo266678');
const smo266679 = new VF.Annotation('Ki');
smo266679.setAttribute('id', 'smo266679');
smo266679.setFont('times', 12, 'normal');
smo266679.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266678.addModifier(smo266679);
smo266679.addClass('lyric lyric-0 lyric-hyphen');
smo266700v0ar.push(smo266678);
const smo266680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266680.setAttribute('id', 'smo266680');
smo266700v0ar.push(smo266680);
const smo266681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266681.setAttribute('id', 'smo266681');
const smo266682 = new VF.Annotation('ki');
smo266682.setAttribute('id', 'smo266682');
smo266682.setFont('times', 12, 'normal');
smo266682.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266681.addModifier(smo266682);
smo266682.addClass('lyric lyric-0 lyric-hyphen');
smo266700v0ar.push(smo266681);
const smo266683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266683.setAttribute('id', 'smo266683');
const smo266684 = new VF.Annotation('ri');
smo266684.setAttribute('id', 'smo266684');
smo266684.setFont('times', 12, 'normal');
smo266684.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266683.addModifier(smo266684);
smo266684.addClass('lyric lyric-0');
smo266700v0ar.push(smo266683);
smo266700v0.addTickables(smo266700v0ar)
fmtsmo26670071.joinVoices([smo266700v0]);
const fmtsmo26981671 = new VF.Formatter();
//
// voices and notes for stave 5 71
const smo269816v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269816v0ar = [];
const smo269792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo269792.setAttribute('id', 'smo269792');
smo269816v0ar.push(smo269792);
const smo269793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo269793.setAttribute('id', 'smo269793');
smo269816v0ar.push(smo269793);
const smo269794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo269794.setAttribute('id', 'smo269794');
const smo269795 = new VF.Annotation('Ki');
smo269795.setAttribute('id', 'smo269795');
smo269795.setFont('times', 12, 'normal');
smo269795.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269794.addModifier(smo269795);
smo269795.addClass('lyric lyric-0 lyric-hyphen');
smo269816v0ar.push(smo269794);
const smo269796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo269796.setAttribute('id', 'smo269796');
smo269816v0ar.push(smo269796);
const smo269797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo269797.setAttribute('id', 'smo269797');
const smo269798 = new VF.Annotation('ki');
smo269798.setAttribute('id', 'smo269798');
smo269798.setFont('times', 12, 'normal');
smo269798.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269797.addModifier(smo269798);
smo269798.addClass('lyric lyric-0 lyric-hyphen');
smo269816v0ar.push(smo269797);
const smo269799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo269799.setAttribute('id', 'smo269799');
const smo269800 = new VF.Annotation('ri');
smo269800.setAttribute('id', 'smo269800');
smo269800.setFont('times', 12, 'normal');
smo269800.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269799.addModifier(smo269800);
smo269800.addClass('lyric lyric-0');
smo269816v0ar.push(smo269799);
smo269816v0.addTickables(smo269816v0ar)
fmtsmo26981671.joinVoices([smo269816v0]);
const fmtsmo27291971 = new VF.Formatter();
//
// voices and notes for stave 6 71
const smo272919v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272919v0ar = [];
const smo272895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272895.setAttribute('id', 'smo272895');
smo272919v0ar.push(smo272895);
const smo272896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272896.setAttribute('id', 'smo272896');
smo272919v0ar.push(smo272896);
const smo272897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272897.setAttribute('id', 'smo272897');
const smo272898 = new VF.Annotation('Ki');
smo272898.setAttribute('id', 'smo272898');
smo272898.setFont('times', 12, 'normal');
smo272898.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272897.addModifier(smo272898);
smo272898.addClass('lyric lyric-0 lyric-hyphen');
smo272919v0ar.push(smo272897);
const smo272899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272899.setAttribute('id', 'smo272899');
smo272919v0ar.push(smo272899);
const smo272900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272900.setAttribute('id', 'smo272900');
const smo272901 = new VF.Annotation('ki');
smo272901.setAttribute('id', 'smo272901');
smo272901.setFont('times', 12, 'normal');
smo272901.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272900.addModifier(smo272901);
smo272901.addClass('lyric lyric-0 lyric-hyphen');
smo272919v0ar.push(smo272900);
const smo272902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272902.setAttribute('id', 'smo272902');
const smo272903 = new VF.Annotation('ri');
smo272903.setAttribute('id', 'smo272903');
smo272903.setFont('times', 12, 'normal');
smo272903.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272902.addModifier(smo272903);
smo272903.addClass('lyric lyric-0');
smo272919v0ar.push(smo272902);
smo272919v0.addTickables(smo272919v0ar)
fmtsmo27291971.joinVoices([smo272919v0]);
const fmtsmo27602871 = new VF.Formatter();
//
// voices and notes for stave 7 71
const smo276028v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo276028v0ar = [];
const smo276004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo276004.setAttribute('id', 'smo276004');
smo276028v0ar.push(smo276004);
const smo276005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo276005.setAttribute('id', 'smo276005');
smo276028v0ar.push(smo276005);
const smo276006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo276006.setAttribute('id', 'smo276006');
const smo276007 = new VF.Annotation('Ki');
smo276007.setAttribute('id', 'smo276007');
smo276007.setFont('times', 12, 'normal');
smo276007.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo276006.addModifier(smo276007);
smo276007.addClass('lyric lyric-0 lyric-hyphen');
smo276028v0ar.push(smo276006);
const smo276008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo276008.setAttribute('id', 'smo276008');
smo276028v0ar.push(smo276008);
const smo276009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo276009.setAttribute('id', 'smo276009');
const smo276010 = new VF.Annotation('ki');
smo276010.setAttribute('id', 'smo276010');
smo276010.setFont('times', 12, 'normal');
smo276010.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo276009.addModifier(smo276010);
smo276010.addClass('lyric lyric-0 lyric-hyphen');
smo276028v0ar.push(smo276009);
const smo276011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo276011.setAttribute('id', 'smo276011');
const smo276012 = new VF.Annotation('ri');
smo276012.setAttribute('id', 'smo276012');
smo276012.setFont('times', 12, 'normal');
smo276012.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo276011.addModifier(smo276012);
smo276012.addClass('lyric lyric-0');
smo276028v0ar.push(smo276011);
smo276028v0.addTickables(smo276028v0ar)
fmtsmo27602871.joinVoices([smo276028v0]);
const fmtsmo27911471 = new VF.Formatter();
//
// voices and notes for stave 8 71
const smo279114v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo279114v0ar = [];
const smo279090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo279090.setAttribute('id', 'smo279090');
smo279114v0ar.push(smo279090);
const smo279091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo279091.setAttribute('id', 'smo279091');
smo279114v0ar.push(smo279091);
const smo279092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo279092.setAttribute('id', 'smo279092');
const smo279093 = new VF.Annotation('Ki');
smo279093.setAttribute('id', 'smo279093');
smo279093.setFont('times', 12, 'normal');
smo279093.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279092.addModifier(smo279093);
smo279093.addClass('lyric lyric-0 lyric-hyphen');
smo279114v0ar.push(smo279092);
const smo279094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo279094.setAttribute('id', 'smo279094');
smo279114v0ar.push(smo279094);
const smo279095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo279095.setAttribute('id', 'smo279095');
const smo279096 = new VF.Annotation('ki');
smo279096.setAttribute('id', 'smo279096');
smo279096.setFont('times', 12, 'normal');
smo279096.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279095.addModifier(smo279096);
smo279096.addClass('lyric lyric-0 lyric-hyphen');
smo279114v0ar.push(smo279095);
const smo279097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo279097.setAttribute('id', 'smo279097');
const smo279098 = new VF.Annotation('ri');
smo279098.setAttribute('id', 'smo279098');
smo279098.setFont('times', 12, 'normal');
smo279098.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279097.addModifier(smo279098);
smo279098.addClass('lyric lyric-0');
smo279114v0ar.push(smo279097);
smo279114v0.addTickables(smo279114v0ar)
fmtsmo27911471.joinVoices([smo279114v0]);
const fmtsmo28220371 = new VF.Formatter();
//
// voices and notes for stave 9 71
const smo282203v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo282203v0ar = [];
const smo282179 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo282179.setAttribute('id', 'smo282179');
smo282203v0ar.push(smo282179);
const smo282180 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo282180.setAttribute('id', 'smo282180');
smo282203v0ar.push(smo282180);
const smo282181 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo282181.setAttribute('id', 'smo282181');
const smo282182 = new VF.Annotation('Ki');
smo282182.setAttribute('id', 'smo282182');
smo282182.setFont('times', 12, 'normal');
smo282182.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282181.addModifier(smo282182);
smo282182.addClass('lyric lyric-0 lyric-hyphen');
smo282203v0ar.push(smo282181);
const smo282183 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo282183.setAttribute('id', 'smo282183');
smo282203v0ar.push(smo282183);
const smo282184 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo282184.setAttribute('id', 'smo282184');
const smo282185 = new VF.Annotation('ki');
smo282185.setAttribute('id', 'smo282185');
smo282185.setFont('times', 12, 'normal');
smo282185.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282184.addModifier(smo282185);
smo282185.addClass('lyric lyric-0 lyric-hyphen');
smo282203v0ar.push(smo282184);
const smo282186 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo282186.setAttribute('id', 'smo282186');
const smo282187 = new VF.Annotation('ri');
smo282187.setAttribute('id', 'smo282187');
smo282187.setFont('times', 12, 'normal');
smo282187.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282186.addModifier(smo282187);
smo282187.addClass('lyric lyric-0');
smo282203v0ar.push(smo282186);
smo282203v0.addTickables(smo282203v0ar)
fmtsmo28220371.joinVoices([smo282203v0]);
const fmtsmo28524371 = new VF.Formatter();
//
// voices and notes for stave 10 71
const smo285243v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285243v0ar = [];
const smo285219 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo285219.setAttribute('id', 'smo285219');
smo285243v0ar.push(smo285219);
const smo285220 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo285220.setAttribute('id', 'smo285220');
smo285243v0ar.push(smo285220);
const smo285221 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo285221.setAttribute('id', 'smo285221');
const smo285222 = new VF.Annotation('Ki');
smo285222.setAttribute('id', 'smo285222');
smo285222.setFont('times', 12, 'normal');
smo285222.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285221.addModifier(smo285222);
smo285222.addClass('lyric lyric-0 lyric-hyphen');
smo285243v0ar.push(smo285221);
const smo285223 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo285223.setAttribute('id', 'smo285223');
smo285243v0ar.push(smo285223);
const smo285224 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo285224.setAttribute('id', 'smo285224');
const smo285225 = new VF.Annotation('ki');
smo285225.setAttribute('id', 'smo285225');
smo285225.setFont('times', 12, 'normal');
smo285225.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285224.addModifier(smo285225);
smo285225.addClass('lyric lyric-0 lyric-hyphen');
smo285243v0ar.push(smo285224);
const smo285226 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo285226.setAttribute('id', 'smo285226');
const smo285227 = new VF.Annotation('ri');
smo285227.setAttribute('id', 'smo285227');
smo285227.setFont('times', 12, 'normal');
smo285227.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285226.addModifier(smo285227);
smo285227.addClass('lyric lyric-0');
smo285243v0ar.push(smo285226);
smo285243v0.addTickables(smo285243v0ar)
fmtsmo28524371.joinVoices([smo285243v0]);
const fmtsmo28829771 = new VF.Formatter();
//
// voices and notes for stave 11 71
const smo288297v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo288297v0ar = [];
const smo288273 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo288273.setAttribute('id', 'smo288273');
smo288297v0ar.push(smo288273);
const smo288274 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo288274.setAttribute('id', 'smo288274');
smo288297v0ar.push(smo288274);
const smo288275 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo288275.setAttribute('id', 'smo288275');
const smo288276 = new VF.Annotation('Ki');
smo288276.setAttribute('id', 'smo288276');
smo288276.setFont('times', 12, 'normal');
smo288276.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288275.addModifier(smo288276);
smo288276.addClass('lyric lyric-0 lyric-hyphen');
smo288297v0ar.push(smo288275);
const smo288277 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo288277.setAttribute('id', 'smo288277');
smo288297v0ar.push(smo288277);
const smo288278 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo288278.setAttribute('id', 'smo288278');
const smo288279 = new VF.Annotation('ki');
smo288279.setAttribute('id', 'smo288279');
smo288279.setFont('times', 12, 'normal');
smo288279.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288278.addModifier(smo288279);
smo288279.addClass('lyric lyric-0 lyric-hyphen');
smo288297v0ar.push(smo288278);
const smo288280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo288280.setAttribute('id', 'smo288280');
const smo288281 = new VF.Annotation('ri');
smo288281.setAttribute('id', 'smo288281');
smo288281.setFont('times', 12, 'normal');
smo288281.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288280.addModifier(smo288281);
smo288281.addClass('lyric lyric-0');
smo288297v0ar.push(smo288280);
smo288297v0.addTickables(smo288297v0ar)
fmtsmo28829771.joinVoices([smo288297v0]);
const fmtsmo29134071 = new VF.Formatter();
//
// voices and notes for stave 12 71
const smo291340v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo291340v0ar = [];
const smo291316 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo291316.setAttribute('id', 'smo291316');
smo291340v0ar.push(smo291316);
const smo291317 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo291317.setAttribute('id', 'smo291317');
smo291340v0ar.push(smo291317);
const smo291318 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo291318.setAttribute('id', 'smo291318');
const smo291319 = new VF.Annotation('Ki');
smo291319.setAttribute('id', 'smo291319');
smo291319.setFont('times', 12, 'normal');
smo291319.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291318.addModifier(smo291319);
smo291319.addClass('lyric lyric-0 lyric-hyphen');
smo291340v0ar.push(smo291318);
const smo291320 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo291320.setAttribute('id', 'smo291320');
smo291340v0ar.push(smo291320);
const smo291321 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo291321.setAttribute('id', 'smo291321');
const smo291322 = new VF.Annotation('ki');
smo291322.setAttribute('id', 'smo291322');
smo291322.setFont('times', 12, 'normal');
smo291322.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291321.addModifier(smo291322);
smo291322.addClass('lyric lyric-0 lyric-hyphen');
smo291340v0ar.push(smo291321);
const smo291323 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo291323.setAttribute('id', 'smo291323');
const smo291324 = new VF.Annotation('ri');
smo291324.setAttribute('id', 'smo291324');
smo291324.setFont('times', 12, 'normal');
smo291324.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291323.addModifier(smo291324);
smo291324.addClass('lyric lyric-0');
smo291340v0ar.push(smo291323);
smo291340v0.addTickables(smo291340v0ar)
fmtsmo29134071.joinVoices([smo291340v0]);
const fmtsmo29453171 = new VF.Formatter();
//
// voices and notes for stave 13 71
const smo294531v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294531v0ar = [];
const smo294515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo294515.setAttribute('id', 'smo294515');
smo294531v0ar.push(smo294515);
smo294531v0.addTickables(smo294531v0ar)
fmtsmo29453171.joinVoices([smo294531v0]);
const fmtsmo29774471 = new VF.Formatter();
//
// voices and notes for stave 14 71
const smo297744v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297744v0ar = [];
const smo297728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo297728.setAttribute('id', 'smo297728');
smo297744v0ar.push(smo297728);
smo297744v0.addTickables(smo297744v0ar)
fmtsmo29774471.joinVoices([smo297744v0]);
const fmtsmo30093971 = new VF.Formatter();
//
// voices and notes for stave 15 71
const smo300939v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300939v0ar = [];
const smo300923 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo300923.setAttribute('id', 'smo300923');
smo300939v0ar.push(smo300923);
smo300939v0.addTickables(smo300939v0ar)
fmtsmo30093971.joinVoices([smo300939v0]);
const fmtsmo30406471 = new VF.Formatter();
//
// voices and notes for stave 16 71
const smo304064v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo304064v0ar = [];
const smo304045 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo304045.setAttribute('id', 'smo304045');
smo304064v0ar.push(smo304045);
const smo304046 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo304046.setAttribute('id', 'smo304046');
smo304064v0ar.push(smo304046);
const smo304047 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo304047.setAttribute('id', 'smo304047');
smo304064v0ar.push(smo304047);
const smo304048 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo304048.setAttribute('id', 'smo304048');
smo304064v0ar.push(smo304048);
smo304064v0.addTickables(smo304064v0ar)
fmtsmo30406471.joinVoices([smo304064v0]);
const fmtsmo30726371 = new VF.Formatter();
//
// voices and notes for stave 17 71
const smo307263v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307263v0ar = [];
const smo307244 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307244.setAttribute('id', 'smo307244');
smo307263v0ar.push(smo307244);
const smo307245 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307245.setAttribute('id', 'smo307245');
smo307245.setStyle({ fillStyle: "#ffffff00" });
smo307263v0ar.push(smo307245);
smo307263v0.addTickables(smo307263v0ar)
fmtsmo30726371.joinVoices([smo307263v0]);
const smo307263v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307263v1ar = [];
const smo307246 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307246.setAttribute('id', 'smo307246');
smo307246.setStyle({ fillStyle: '#aaaaaa7f' });
smo307263v1ar.push(smo307246);
const smo307247 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo307247.setAttribute('id', 'smo307247');
smo307247.setStyle({ fillStyle: "#115511" });
smo307263v1ar.push(smo307247);
smo307263v1.addTickables(smo307263v1ar)
fmtsmo30726371.joinVoices([smo307263v1]);
// create beam groups and tuplets for format grp smo308886 before formatting
const dirsmo400554 = smo254406.getStemDirection();
smo254406.setStemDirection(dirsmo400554);
smo254408.setStemDirection(dirsmo400554);
const smo400554 = new VF.Beam([smo254406,smo254408]);
const dirsmo400557 = smo257399.getStemDirection();
smo257399.setStemDirection(dirsmo400557);
smo257401.setStemDirection(dirsmo400557);
const smo400557 = new VF.Beam([smo257399,smo257401]);
const dirsmo400560 = smo260543.getStemDirection();
smo260543.setStemDirection(dirsmo400560);
smo260545.setStemDirection(dirsmo400560);
const smo400560 = new VF.Beam([smo260543,smo260545]);
const dirsmo400563 = smo263659.getStemDirection();
smo263659.setStemDirection(dirsmo400563);
smo263661.setStemDirection(dirsmo400563);
const smo400563 = new VF.Beam([smo263659,smo263661]);
const dirsmo400566 = smo266678.getStemDirection();
smo266678.setStemDirection(dirsmo400566);
smo266680.setStemDirection(dirsmo400566);
const smo400566 = new VF.Beam([smo266678,smo266680]);
 
// formatting measures in staff group smo308886
fmtsmo25442871.format([smo254428v0,smo257421v0,smo260565v0,smo263681v0,smo266700v0], 288);
const stavesmo254428 = new VF.Stave(2643, 210, 302);
stavesmo254428.setAttribute('id', 'stavesmo254428');
stavesmo254428.setBegBarType(VF.Barline.type.NONE);
stavesmo254428.setContext(context);
stavesmo254428.draw();
smo254428v0.draw(context, stavesmo254428);
smo400554.setContext(context);
smo400554.draw();
const stavesmo257421 = new VF.Stave(2643, 316, 302);
stavesmo257421.setAttribute('id', 'stavesmo257421');
stavesmo257421.setBegBarType(VF.Barline.type.NONE);
stavesmo257421.setContext(context);
stavesmo257421.draw();
smo257421v0.draw(context, stavesmo257421);
smo400557.setContext(context);
smo400557.draw();
const stavesmo260565 = new VF.Stave(2643, 437, 302);
stavesmo260565.setAttribute('id', 'stavesmo260565');
stavesmo260565.setBegBarType(VF.Barline.type.NONE);
stavesmo260565.setContext(context);
stavesmo260565.draw();
smo260565v0.draw(context, stavesmo260565);
smo400560.setContext(context);
smo400560.draw();
const stavesmo263681 = new VF.Stave(2643, 553, 302);
stavesmo263681.setAttribute('id', 'stavesmo263681');
stavesmo263681.setBegBarType(VF.Barline.type.NONE);
stavesmo263681.setContext(context);
stavesmo263681.draw();
smo263681v0.draw(context, stavesmo263681);
smo400563.setContext(context);
smo400563.draw();
const stavesmo266700 = new VF.Stave(2643, 659, 302);
stavesmo266700.setAttribute('id', 'stavesmo266700');
stavesmo266700.setBegBarType(VF.Barline.type.NONE);
stavesmo266700.setContext(context);
stavesmo266700.draw();
smo266700v0.draw(context, stavesmo266700);
smo400566.setContext(context);
smo400566.draw();
// create beam groups and tuplets for format grp smo308888 before formatting
const dirsmo400569 = smo269794.getStemDirection();
smo269794.setStemDirection(dirsmo400569);
smo269796.setStemDirection(dirsmo400569);
const smo400569 = new VF.Beam([smo269794,smo269796]);
const dirsmo400572 = smo272897.getStemDirection();
smo272897.setStemDirection(dirsmo400572);
smo272899.setStemDirection(dirsmo400572);
const smo400572 = new VF.Beam([smo272897,smo272899]);
const dirsmo400575 = smo276006.getStemDirection();
smo276006.setStemDirection(dirsmo400575);
smo276008.setStemDirection(dirsmo400575);
const smo400575 = new VF.Beam([smo276006,smo276008]);
const dirsmo400578 = smo279092.getStemDirection();
smo279092.setStemDirection(dirsmo400578);
smo279094.setStemDirection(dirsmo400578);
const smo400578 = new VF.Beam([smo279092,smo279094]);
 
// formatting measures in staff group smo308888
fmtsmo26981671.format([smo269816v0,smo272919v0,smo276028v0,smo279114v0], 288);
const stavesmo269816 = new VF.Stave(2643, 780, 302);
stavesmo269816.setAttribute('id', 'stavesmo269816');
stavesmo269816.setBegBarType(VF.Barline.type.NONE);
stavesmo269816.setContext(context);
stavesmo269816.draw();
smo269816v0.draw(context, stavesmo269816);
smo400569.setContext(context);
smo400569.draw();
const stavesmo272919 = new VF.Stave(2643, 896, 302);
stavesmo272919.setAttribute('id', 'stavesmo272919');
stavesmo272919.setBegBarType(VF.Barline.type.NONE);
stavesmo272919.setContext(context);
stavesmo272919.draw();
smo272919v0.draw(context, stavesmo272919);
smo400572.setContext(context);
smo400572.draw();
const stavesmo276028 = new VF.Stave(2643, 1012, 302);
stavesmo276028.setAttribute('id', 'stavesmo276028');
stavesmo276028.setBegBarType(VF.Barline.type.NONE);
stavesmo276028.setContext(context);
stavesmo276028.draw();
smo276028v0.draw(context, stavesmo276028);
smo400575.setContext(context);
smo400575.draw();
const stavesmo279114 = new VF.Stave(2643, 1128, 302);
stavesmo279114.setAttribute('id', 'stavesmo279114');
stavesmo279114.setBegBarType(VF.Barline.type.NONE);
stavesmo279114.setContext(context);
stavesmo279114.draw();
smo279114v0.draw(context, stavesmo279114);
smo400578.setContext(context);
smo400578.draw();
// create beam groups and tuplets for format grp smo308890 before formatting
const dirsmo400581 = smo282181.getStemDirection();
smo282181.setStemDirection(dirsmo400581);
smo282183.setStemDirection(dirsmo400581);
const smo400581 = new VF.Beam([smo282181,smo282183]);
const dirsmo400584 = smo285221.getStemDirection();
smo285221.setStemDirection(dirsmo400584);
smo285223.setStemDirection(dirsmo400584);
const smo400584 = new VF.Beam([smo285221,smo285223]);
const dirsmo400587 = smo288275.getStemDirection();
smo288275.setStemDirection(dirsmo400587);
smo288277.setStemDirection(dirsmo400587);
const smo400587 = new VF.Beam([smo288275,smo288277]);
const dirsmo400590 = smo291318.getStemDirection();
smo291318.setStemDirection(dirsmo400590);
smo291320.setStemDirection(dirsmo400590);
const smo400590 = new VF.Beam([smo291318,smo291320]);
 
// formatting measures in staff group smo308890
fmtsmo28220371.format([smo282203v0,smo285243v0,smo288297v0,smo291340v0], 288);
const stavesmo282203 = new VF.Stave(2643, 1264, 302);
stavesmo282203.setAttribute('id', 'stavesmo282203');
stavesmo282203.setBegBarType(VF.Barline.type.NONE);
stavesmo282203.setContext(context);
stavesmo282203.draw();
smo282203v0.draw(context, stavesmo282203);
smo400581.setContext(context);
smo400581.draw();
const stavesmo285243 = new VF.Stave(2643, 1400, 302);
stavesmo285243.setAttribute('id', 'stavesmo285243');
stavesmo285243.setBegBarType(VF.Barline.type.NONE);
stavesmo285243.setContext(context);
stavesmo285243.draw();
smo285243v0.draw(context, stavesmo285243);
smo400584.setContext(context);
smo400584.draw();
const stavesmo288297 = new VF.Stave(2643, 1536, 302);
stavesmo288297.setAttribute('id', 'stavesmo288297');
stavesmo288297.setBegBarType(VF.Barline.type.NONE);
stavesmo288297.setContext(context);
stavesmo288297.draw();
smo288297v0.draw(context, stavesmo288297);
smo400587.setContext(context);
smo400587.draw();
const stavesmo291340 = new VF.Stave(2643, 1672, 302);
stavesmo291340.setAttribute('id', 'stavesmo291340');
stavesmo291340.setBegBarType(VF.Barline.type.NONE);
stavesmo291340.setContext(context);
stavesmo291340.draw();
smo291340v0.draw(context, stavesmo291340);
smo400590.setContext(context);
smo400590.draw();
// create beam groups and tuplets for format grp smo296209 before formatting
 
// formatting measures in staff group smo296209
fmtsmo29453171.format([smo294531v0], 288);
const stavesmo294531 = new VF.Stave(2643, 1818, 302);
stavesmo294531.setAttribute('id', 'stavesmo294531');
stavesmo294531.setBegBarType(VF.Barline.type.NONE);
stavesmo294531.setContext(context);
stavesmo294531.draw();
smo294531v0.draw(context, stavesmo294531);
// create beam groups and tuplets for format grp smo308884 before formatting
 
// formatting measures in staff group smo308884
fmtsmo29774471.format([smo297744v0,smo300939v0], 288);
const stavesmo297744 = new VF.Stave(2643, 1924, 302);
stavesmo297744.setAttribute('id', 'stavesmo297744');
stavesmo297744.setBegBarType(VF.Barline.type.NONE);
stavesmo297744.setContext(context);
stavesmo297744.draw();
smo297744v0.draw(context, stavesmo297744);
const stavesmo300939 = new VF.Stave(2643, 2010, 302);
stavesmo300939.setAttribute('id', 'stavesmo300939');
stavesmo300939.setBegBarType(VF.Barline.type.NONE);
stavesmo300939.setContext(context);
stavesmo300939.draw();
smo300939v0.draw(context, stavesmo300939);
// create beam groups and tuplets for format grp smo305722 before formatting
 
// formatting measures in staff group smo305722
fmtsmo30406471.format([smo304064v0], 288);
const stavesmo304064 = new VF.Stave(2643, 2081, 302);
stavesmo304064.setAttribute('id', 'stavesmo304064');
stavesmo304064.setBegBarType(VF.Barline.type.NONE);
stavesmo304064.setContext(context);
stavesmo304064.draw();
smo304064v0.draw(context, stavesmo304064);
// create beam groups and tuplets for format grp smo308878 before formatting
 
// formatting measures in staff group smo308878
fmtsmo30726371.format([smo307263v0,smo307263v1], 288);
const stavesmo307263 = new VF.Stave(2643, 2152, 302);
stavesmo307263.setAttribute('id', 'stavesmo307263');
stavesmo307263.setBegBarType(VF.Barline.type.NONE);
stavesmo307263.setContext(context);
stavesmo307263.draw();
smo307263v0.draw(context, stavesmo307263);
smo307263v1.draw(context, stavesmo307263);
const rightsmo308878stavesmo25442817 = new VF.StaveConnector(stavesmo254428, stavesmo266700).setType(0);
rightsmo308878stavesmo25442817.setContext(context).draw();
const rightsmo308878stavesmo26981617 = new VF.StaveConnector(stavesmo269816, stavesmo279114).setType(0);
rightsmo308878stavesmo26981617.setContext(context).draw();
const rightsmo308878stavesmo28220317 = new VF.StaveConnector(stavesmo282203, stavesmo291340).setType(0);
rightsmo308878stavesmo28220317.setContext(context).draw();
const rightsmo308878stavesmo29774417 = new VF.StaveConnector(stavesmo297744, stavesmo300939).setType(0);
rightsmo308878stavesmo29774417.setContext(context).draw();
// modifier from 0-63-0-2 to 0-63-0-3
const smo409964 = new VF.StaveTie({ first_note: smo254226, last_note: smo254228, 
          firstNote: smo254226, lastNote: smo254228, first_indices: [0], last_indices: [0]});
smo409964.setContext(context).draw();
// modifier from 0-64-0-3 to 0-64-0-4
const smo409965 = new VF.StaveTie({ first_note: smo254254, last_note: smo254256, 
          firstNote: smo254254, lastNote: smo254256, first_indices: [0], last_indices: [0]});
smo409965.setContext(context).draw();
// modifier from 0-64-0-5 to 0-65-0-0
const smo409966 = new VF.StaveTie({ first_note: smo254257, last_note: smo254275, 
          firstNote: smo254257, lastNote: smo254275, first_indices: [0], last_indices: [0]});
smo409966.setContext(context).draw();
// modifier from 0-65-0-3 to 0-65-0-4
const smo409967 = new VF.StaveTie({ first_note: smo254279, last_note: smo254281, 
          firstNote: smo254279, lastNote: smo254281, first_indices: [0], last_indices: [0]});
smo409967.setContext(context).draw();
// modifier from 0-66-0-4 to 0-66-0-5
const smo409968 = new VF.StaveTie({ first_note: smo254310, last_note: smo254312, 
          firstNote: smo254310, lastNote: smo254312, first_indices: [0], last_indices: [0]});
smo409968.setContext(context).draw();
// modifier from 0-66-0-6 to 0-67-0-0
const smo409969 = new VF.StaveTie({ first_note: smo254313, last_note: smo254331, 
          firstNote: smo254313, lastNote: smo254331, first_indices: [0], last_indices: [0]});
smo409969.setContext(context).draw();
// modifier from 0-71-0-2 to 0-71-0-3
const smo409970 = new VF.StaveTie({ first_note: smo254406, last_note: smo254408, 
          firstNote: smo254406, lastNote: smo254408, first_indices: [0], last_indices: [0]});
smo409970.setContext(context).draw();
// modifier from 1-63-0-2 to 1-63-0-3
const smo409971 = new VF.StaveTie({ first_note: smo257220, last_note: smo257222, 
          firstNote: smo257220, lastNote: smo257222, first_indices: [0], last_indices: [0]});
smo409971.setContext(context).draw();
// modifier from 1-64-0-3 to 1-64-0-4
const smo409972 = new VF.StaveTie({ first_note: smo257248, last_note: smo257250, 
          firstNote: smo257248, lastNote: smo257250, first_indices: [0], last_indices: [0]});
smo409972.setContext(context).draw();
// modifier from 1-64-0-5 to 1-65-0-0
const smo409973 = new VF.StaveTie({ first_note: smo257251, last_note: smo257269, 
          firstNote: smo257251, lastNote: smo257269, first_indices: [0], last_indices: [0]});
smo409973.setContext(context).draw();
// modifier from 1-65-0-3 to 1-65-0-4
const smo409974 = new VF.StaveTie({ first_note: smo257273, last_note: smo257275, 
          firstNote: smo257273, lastNote: smo257275, first_indices: [0], last_indices: [0]});
smo409974.setContext(context).draw();
// modifier from 1-66-0-4 to 1-66-0-5
const smo409975 = new VF.StaveTie({ first_note: smo257304, last_note: smo257306, 
          firstNote: smo257304, lastNote: smo257306, first_indices: [0], last_indices: [0]});
smo409975.setContext(context).draw();
// modifier from 1-66-0-6 to 1-67-0-0
const smo409976 = new VF.StaveTie({ first_note: smo257307, last_note: smo257325, 
          firstNote: smo257307, lastNote: smo257325, first_indices: [0], last_indices: [0]});
smo409976.setContext(context).draw();
// modifier from 1-71-0-2 to 1-71-0-3
const smo409977 = new VF.StaveTie({ first_note: smo257399, last_note: smo257401, 
          firstNote: smo257399, lastNote: smo257401, first_indices: [0], last_indices: [0]});
smo409977.setContext(context).draw();
// modifier from 2-63-0-2 to 2-63-0-3
const smo409978 = new VF.StaveTie({ first_note: smo260363, last_note: smo260365, 
          firstNote: smo260363, lastNote: smo260365, first_indices: [0], last_indices: [0]});
smo409978.setContext(context).draw();
// modifier from 2-64-0-3 to 2-64-0-4
const smo409979 = new VF.StaveTie({ first_note: smo260391, last_note: smo260393, 
          firstNote: smo260391, lastNote: smo260393, first_indices: [0], last_indices: [0]});
smo409979.setContext(context).draw();
// modifier from 2-64-0-5 to 2-65-0-0
const smo409980 = new VF.StaveTie({ first_note: smo260394, last_note: smo260412, 
          firstNote: smo260394, lastNote: smo260412, first_indices: [0], last_indices: [0]});
smo409980.setContext(context).draw();
// modifier from 2-65-0-3 to 2-65-0-4
const smo409981 = new VF.StaveTie({ first_note: smo260416, last_note: smo260418, 
          firstNote: smo260416, lastNote: smo260418, first_indices: [0], last_indices: [0]});
smo409981.setContext(context).draw();
// modifier from 2-66-0-4 to 2-66-0-5
const smo409982 = new VF.StaveTie({ first_note: smo260447, last_note: smo260449, 
          firstNote: smo260447, lastNote: smo260449, first_indices: [0], last_indices: [0]});
smo409982.setContext(context).draw();
// modifier from 2-66-0-6 to 2-67-0-0
const smo409983 = new VF.StaveTie({ first_note: smo260450, last_note: smo260468, 
          firstNote: smo260450, lastNote: smo260468, first_indices: [0], last_indices: [0]});
smo409983.setContext(context).draw();
// modifier from 2-71-0-2 to 2-71-0-3
const smo409984 = new VF.StaveTie({ first_note: smo260543, last_note: smo260545, 
          firstNote: smo260543, lastNote: smo260545, first_indices: [0], last_indices: [0]});
smo409984.setContext(context).draw();
// modifier from 3-63-0-2 to 3-63-0-3
const smo409985 = new VF.StaveTie({ first_note: smo263479, last_note: smo263481, 
          firstNote: smo263479, lastNote: smo263481, first_indices: [0], last_indices: [0]});
smo409985.setContext(context).draw();
// modifier from 3-64-0-3 to 3-64-0-4
const smo409986 = new VF.StaveTie({ first_note: smo263507, last_note: smo263509, 
          firstNote: smo263507, lastNote: smo263509, first_indices: [0], last_indices: [0]});
smo409986.setContext(context).draw();
// modifier from 3-64-0-5 to 3-65-0-0
const smo409987 = new VF.StaveTie({ first_note: smo263510, last_note: smo263528, 
          firstNote: smo263510, lastNote: smo263528, first_indices: [0], last_indices: [0]});
smo409987.setContext(context).draw();
// modifier from 3-65-0-3 to 3-65-0-4
const smo409988 = new VF.StaveTie({ first_note: smo263532, last_note: smo263534, 
          firstNote: smo263532, lastNote: smo263534, first_indices: [0], last_indices: [0]});
smo409988.setContext(context).draw();
// modifier from 3-66-0-4 to 3-66-0-5
const smo409989 = new VF.StaveTie({ first_note: smo263563, last_note: smo263565, 
          firstNote: smo263563, lastNote: smo263565, first_indices: [0], last_indices: [0]});
smo409989.setContext(context).draw();
// modifier from 3-66-0-6 to 3-67-0-0
const smo409990 = new VF.StaveTie({ first_note: smo263566, last_note: smo263584, 
          firstNote: smo263566, lastNote: smo263584, first_indices: [0], last_indices: [0]});
smo409990.setContext(context).draw();
// modifier from 3-71-0-2 to 3-71-0-3
const smo409991 = new VF.StaveTie({ first_note: smo263659, last_note: smo263661, 
          firstNote: smo263659, lastNote: smo263661, first_indices: [0], last_indices: [0]});
smo409991.setContext(context).draw();
// modifier from 4-63-0-2 to 4-63-0-3
const smo409992 = new VF.StaveTie({ first_note: smo266498, last_note: smo266500, 
          firstNote: smo266498, lastNote: smo266500, first_indices: [0], last_indices: [0]});
smo409992.setContext(context).draw();
// modifier from 4-64-0-3 to 4-64-0-4
const smo409993 = new VF.StaveTie({ first_note: smo266526, last_note: smo266528, 
          firstNote: smo266526, lastNote: smo266528, first_indices: [0], last_indices: [0]});
smo409993.setContext(context).draw();
// modifier from 4-64-0-5 to 4-65-0-0
const smo409994 = new VF.StaveTie({ first_note: smo266529, last_note: smo266547, 
          firstNote: smo266529, lastNote: smo266547, first_indices: [0], last_indices: [0]});
smo409994.setContext(context).draw();
// modifier from 4-65-0-3 to 4-65-0-4
const smo409995 = new VF.StaveTie({ first_note: smo266551, last_note: smo266553, 
          firstNote: smo266551, lastNote: smo266553, first_indices: [0], last_indices: [0]});
smo409995.setContext(context).draw();
// modifier from 4-66-0-4 to 4-66-0-5
const smo409996 = new VF.StaveTie({ first_note: smo266582, last_note: smo266584, 
          firstNote: smo266582, lastNote: smo266584, first_indices: [0], last_indices: [0]});
smo409996.setContext(context).draw();
// modifier from 4-66-0-6 to 4-67-0-0
const smo409997 = new VF.StaveTie({ first_note: smo266585, last_note: smo266603, 
          firstNote: smo266585, lastNote: smo266603, first_indices: [0], last_indices: [0]});
smo409997.setContext(context).draw();
// modifier from 4-71-0-2 to 4-71-0-3
const smo409998 = new VF.StaveTie({ first_note: smo266678, last_note: smo266680, 
          firstNote: smo266678, lastNote: smo266680, first_indices: [0], last_indices: [0]});
smo409998.setContext(context).draw();
// modifier from 5-63-0-3 to 5-63-0-4
const smo409999 = new VF.StaveTie({ first_note: smo269605, last_note: smo269607, 
          firstNote: smo269605, lastNote: smo269607, first_indices: [0], last_indices: [0]});
smo409999.setContext(context).draw();
// modifier from 5-64-0-3 to 5-64-0-4
const smo410000 = new VF.StaveTie({ first_note: smo269633, last_note: smo269635, 
          firstNote: smo269633, lastNote: smo269635, first_indices: [0], last_indices: [0]});
smo410000.setContext(context).draw();
// modifier from 5-64-0-5 to 5-65-0-0
const smo410001 = new VF.StaveTie({ first_note: smo269636, last_note: smo269654, 
          firstNote: smo269636, lastNote: smo269654, first_indices: [0], last_indices: [0]});
smo410001.setContext(context).draw();
// modifier from 5-65-0-3 to 5-65-0-4
const smo410002 = new VF.StaveTie({ first_note: smo269658, last_note: smo269660, 
          firstNote: smo269658, lastNote: smo269660, first_indices: [0], last_indices: [0]});
smo410002.setContext(context).draw();
// modifier from 5-66-0-4 to 5-66-0-5
const smo410003 = new VF.StaveTie({ first_note: smo269689, last_note: smo269691, 
          firstNote: smo269689, lastNote: smo269691, first_indices: [0], last_indices: [0]});
smo410003.setContext(context).draw();
// modifier from 5-66-0-6 to 5-67-0-0
const smo410004 = new VF.StaveTie({ first_note: smo269692, last_note: smo269710, 
          firstNote: smo269692, lastNote: smo269710, first_indices: [0], last_indices: [0]});
smo410004.setContext(context).draw();
// modifier from 5-71-0-2 to 5-71-0-3
const smo410005 = new VF.StaveTie({ first_note: smo269794, last_note: smo269796, 
          firstNote: smo269794, lastNote: smo269796, first_indices: [0], last_indices: [0]});
smo410005.setContext(context).draw();
// modifier from 6-63-0-2 to 6-63-0-3
const smo410006 = new VF.StaveTie({ first_note: smo272717, last_note: smo272719, 
          firstNote: smo272717, lastNote: smo272719, first_indices: [0], last_indices: [0]});
smo410006.setContext(context).draw();
// modifier from 6-64-0-3 to 6-64-0-4
const smo410007 = new VF.StaveTie({ first_note: smo272745, last_note: smo272747, 
          firstNote: smo272745, lastNote: smo272747, first_indices: [0], last_indices: [0]});
smo410007.setContext(context).draw();
// modifier from 6-64-0-5 to 6-65-0-0
const smo410008 = new VF.StaveTie({ first_note: smo272748, last_note: smo272766, 
          firstNote: smo272748, lastNote: smo272766, first_indices: [0], last_indices: [0]});
smo410008.setContext(context).draw();
// modifier from 6-65-0-3 to 6-65-0-4
const smo410009 = new VF.StaveTie({ first_note: smo272770, last_note: smo272772, 
          firstNote: smo272770, lastNote: smo272772, first_indices: [0], last_indices: [0]});
smo410009.setContext(context).draw();
// modifier from 6-66-0-4 to 6-66-0-5
const smo410010 = new VF.StaveTie({ first_note: smo272801, last_note: smo272803, 
          firstNote: smo272801, lastNote: smo272803, first_indices: [0], last_indices: [0]});
smo410010.setContext(context).draw();
// modifier from 6-66-0-6 to 6-67-0-0
const smo410011 = new VF.StaveTie({ first_note: smo272804, last_note: smo272822, 
          firstNote: smo272804, lastNote: smo272822, first_indices: [0], last_indices: [0]});
smo410011.setContext(context).draw();
// modifier from 6-71-0-2 to 6-71-0-3
const smo410012 = new VF.StaveTie({ first_note: smo272897, last_note: smo272899, 
          firstNote: smo272897, lastNote: smo272899, first_indices: [0], last_indices: [0]});
smo410012.setContext(context).draw();
// modifier from 7-63-0-2 to 7-63-0-3
const smo410013 = new VF.StaveTie({ first_note: smo275826, last_note: smo275828, 
          firstNote: smo275826, lastNote: smo275828, first_indices: [0], last_indices: [0]});
smo410013.setContext(context).draw();
// modifier from 7-64-0-3 to 7-64-0-4
const smo410014 = new VF.StaveTie({ first_note: smo275854, last_note: smo275856, 
          firstNote: smo275854, lastNote: smo275856, first_indices: [0], last_indices: [0]});
smo410014.setContext(context).draw();
// modifier from 7-64-0-5 to 7-65-0-0
const smo410015 = new VF.StaveTie({ first_note: smo275857, last_note: smo275875, 
          firstNote: smo275857, lastNote: smo275875, first_indices: [0], last_indices: [0]});
smo410015.setContext(context).draw();
// modifier from 7-65-0-3 to 7-65-0-4
const smo410016 = new VF.StaveTie({ first_note: smo275879, last_note: smo275881, 
          firstNote: smo275879, lastNote: smo275881, first_indices: [0], last_indices: [0]});
smo410016.setContext(context).draw();
// modifier from 7-66-0-4 to 7-66-0-5
const smo410017 = new VF.StaveTie({ first_note: smo275910, last_note: smo275912, 
          firstNote: smo275910, lastNote: smo275912, first_indices: [0], last_indices: [0]});
smo410017.setContext(context).draw();
// modifier from 7-66-0-6 to 7-67-0-0
const smo410018 = new VF.StaveTie({ first_note: smo275913, last_note: smo275931, 
          firstNote: smo275913, lastNote: smo275931, first_indices: [0], last_indices: [0]});
smo410018.setContext(context).draw();
// modifier from 7-71-0-2 to 7-71-0-3
const smo410019 = new VF.StaveTie({ first_note: smo276006, last_note: smo276008, 
          firstNote: smo276006, lastNote: smo276008, first_indices: [0], last_indices: [0]});
smo410019.setContext(context).draw();
// modifier from 8-63-0-2 to 8-63-0-3
const smo410020 = new VF.StaveTie({ first_note: smo278912, last_note: smo278914, 
          firstNote: smo278912, lastNote: smo278914, first_indices: [0], last_indices: [0]});
smo410020.setContext(context).draw();
// modifier from 8-64-0-3 to 8-64-0-4
const smo410021 = new VF.StaveTie({ first_note: smo278940, last_note: smo278942, 
          firstNote: smo278940, lastNote: smo278942, first_indices: [0], last_indices: [0]});
smo410021.setContext(context).draw();
// modifier from 8-64-0-5 to 8-65-0-0
const smo410022 = new VF.StaveTie({ first_note: smo278943, last_note: smo278961, 
          firstNote: smo278943, lastNote: smo278961, first_indices: [0], last_indices: [0]});
smo410022.setContext(context).draw();
// modifier from 8-65-0-3 to 8-65-0-4
const smo410023 = new VF.StaveTie({ first_note: smo278965, last_note: smo278967, 
          firstNote: smo278965, lastNote: smo278967, first_indices: [0], last_indices: [0]});
smo410023.setContext(context).draw();
// modifier from 8-66-0-4 to 8-66-0-5
const smo410024 = new VF.StaveTie({ first_note: smo278996, last_note: smo278998, 
          firstNote: smo278996, lastNote: smo278998, first_indices: [0], last_indices: [0]});
smo410024.setContext(context).draw();
// modifier from 8-66-0-6 to 8-67-0-0
const smo410025 = new VF.StaveTie({ first_note: smo278999, last_note: smo279017, 
          firstNote: smo278999, lastNote: smo279017, first_indices: [0], last_indices: [0]});
smo410025.setContext(context).draw();
// modifier from 8-71-0-2 to 8-71-0-3
const smo410026 = new VF.StaveTie({ first_note: smo279092, last_note: smo279094, 
          firstNote: smo279092, lastNote: smo279094, first_indices: [0], last_indices: [0]});
smo410026.setContext(context).draw();
// modifier from 9-63-0-2 to 9-63-0-3
const smo410027 = new VF.StaveTie({ first_note: smo282001, last_note: smo282003, 
          firstNote: smo282001, lastNote: smo282003, first_indices: [0], last_indices: [0]});
smo410027.setContext(context).draw();
// modifier from 9-64-0-3 to 9-64-0-4
const smo410028 = new VF.StaveTie({ first_note: smo282029, last_note: smo282031, 
          firstNote: smo282029, lastNote: smo282031, first_indices: [0], last_indices: [0]});
smo410028.setContext(context).draw();
// modifier from 9-64-0-5 to 9-65-0-0
const smo410029 = new VF.StaveTie({ first_note: smo282032, last_note: smo282050, 
          firstNote: smo282032, lastNote: smo282050, first_indices: [0], last_indices: [0]});
smo410029.setContext(context).draw();
// modifier from 9-65-0-3 to 9-65-0-4
const smo410030 = new VF.StaveTie({ first_note: smo282054, last_note: smo282056, 
          firstNote: smo282054, lastNote: smo282056, first_indices: [0], last_indices: [0]});
smo410030.setContext(context).draw();
// modifier from 9-66-0-4 to 9-66-0-5
const smo410031 = new VF.StaveTie({ first_note: smo282085, last_note: smo282087, 
          firstNote: smo282085, lastNote: smo282087, first_indices: [0], last_indices: [0]});
smo410031.setContext(context).draw();
// modifier from 9-66-0-6 to 9-67-0-0
const smo410032 = new VF.StaveTie({ first_note: smo282088, last_note: smo282106, 
          firstNote: smo282088, lastNote: smo282106, first_indices: [0], last_indices: [0]});
smo410032.setContext(context).draw();
// modifier from 9-71-0-2 to 9-71-0-3
const smo410033 = new VF.StaveTie({ first_note: smo282181, last_note: smo282183, 
          firstNote: smo282181, lastNote: smo282183, first_indices: [0], last_indices: [0]});
smo410033.setContext(context).draw();
// modifier from 10-63-0-2 to 10-63-0-3
const smo410034 = new VF.StaveTie({ first_note: smo285041, last_note: smo285043, 
          firstNote: smo285041, lastNote: smo285043, first_indices: [0], last_indices: [0]});
smo410034.setContext(context).draw();
// modifier from 10-64-0-3 to 10-64-0-4
const smo410035 = new VF.StaveTie({ first_note: smo285069, last_note: smo285071, 
          firstNote: smo285069, lastNote: smo285071, first_indices: [0], last_indices: [0]});
smo410035.setContext(context).draw();
// modifier from 10-64-0-5 to 10-65-0-0
const smo410036 = new VF.StaveTie({ first_note: smo285072, last_note: smo285090, 
          firstNote: smo285072, lastNote: smo285090, first_indices: [0], last_indices: [0]});
smo410036.setContext(context).draw();
// modifier from 10-65-0-3 to 10-65-0-4
const smo410037 = new VF.StaveTie({ first_note: smo285094, last_note: smo285096, 
          firstNote: smo285094, lastNote: smo285096, first_indices: [0], last_indices: [0]});
smo410037.setContext(context).draw();
// modifier from 10-66-0-4 to 10-66-0-5
const smo410038 = new VF.StaveTie({ first_note: smo285125, last_note: smo285127, 
          firstNote: smo285125, lastNote: smo285127, first_indices: [0], last_indices: [0]});
smo410038.setContext(context).draw();
// modifier from 10-66-0-6 to 10-67-0-0
const smo410039 = new VF.StaveTie({ first_note: smo285128, last_note: smo285146, 
          firstNote: smo285128, lastNote: smo285146, first_indices: [0], last_indices: [0]});
smo410039.setContext(context).draw();
// modifier from 10-71-0-2 to 10-71-0-3
const smo410040 = new VF.StaveTie({ first_note: smo285221, last_note: smo285223, 
          firstNote: smo285221, lastNote: smo285223, first_indices: [0], last_indices: [0]});
smo410040.setContext(context).draw();
// modifier from 11-63-0-2 to 11-63-0-3
const smo410041 = new VF.StaveTie({ first_note: smo288095, last_note: smo288097, 
          firstNote: smo288095, lastNote: smo288097, first_indices: [0], last_indices: [0]});
smo410041.setContext(context).draw();
// modifier from 11-64-0-3 to 11-64-0-4
const smo410042 = new VF.StaveTie({ first_note: smo288123, last_note: smo288125, 
          firstNote: smo288123, lastNote: smo288125, first_indices: [0], last_indices: [0]});
smo410042.setContext(context).draw();
// modifier from 11-64-0-5 to 11-65-0-0
const smo410043 = new VF.StaveTie({ first_note: smo288126, last_note: smo288144, 
          firstNote: smo288126, lastNote: smo288144, first_indices: [0], last_indices: [0]});
smo410043.setContext(context).draw();
// modifier from 11-65-0-3 to 11-65-0-4
const smo410044 = new VF.StaveTie({ first_note: smo288148, last_note: smo288150, 
          firstNote: smo288148, lastNote: smo288150, first_indices: [0], last_indices: [0]});
smo410044.setContext(context).draw();
// modifier from 11-66-0-4 to 11-66-0-5
const smo410045 = new VF.StaveTie({ first_note: smo288179, last_note: smo288181, 
          firstNote: smo288179, lastNote: smo288181, first_indices: [0], last_indices: [0]});
smo410045.setContext(context).draw();
// modifier from 11-66-0-6 to 11-67-0-0
const smo410046 = new VF.StaveTie({ first_note: smo288182, last_note: smo288200, 
          firstNote: smo288182, lastNote: smo288200, first_indices: [0], last_indices: [0]});
smo410046.setContext(context).draw();
// modifier from 11-71-0-2 to 11-71-0-3
const smo410047 = new VF.StaveTie({ first_note: smo288275, last_note: smo288277, 
          firstNote: smo288275, lastNote: smo288277, first_indices: [0], last_indices: [0]});
smo410047.setContext(context).draw();
// modifier from 12-63-0-2 to 12-63-0-3
const smo410048 = new VF.StaveTie({ first_note: smo291138, last_note: smo291140, 
          firstNote: smo291138, lastNote: smo291140, first_indices: [0], last_indices: [0]});
smo410048.setContext(context).draw();
// modifier from 12-64-0-3 to 12-64-0-4
const smo410049 = new VF.StaveTie({ first_note: smo291166, last_note: smo291168, 
          firstNote: smo291166, lastNote: smo291168, first_indices: [0], last_indices: [0]});
smo410049.setContext(context).draw();
// modifier from 12-64-0-5 to 12-65-0-0
const smo410050 = new VF.StaveTie({ first_note: smo291169, last_note: smo291187, 
          firstNote: smo291169, lastNote: smo291187, first_indices: [0], last_indices: [0]});
smo410050.setContext(context).draw();
// modifier from 12-65-0-3 to 12-65-0-4
const smo410051 = new VF.StaveTie({ first_note: smo291191, last_note: smo291193, 
          firstNote: smo291191, lastNote: smo291193, first_indices: [0], last_indices: [0]});
smo410051.setContext(context).draw();
// modifier from 12-66-0-4 to 12-66-0-5
const smo410052 = new VF.StaveTie({ first_note: smo291222, last_note: smo291224, 
          firstNote: smo291222, lastNote: smo291224, first_indices: [0], last_indices: [0]});
smo410052.setContext(context).draw();
// modifier from 12-66-0-6 to 12-67-0-0
const smo410053 = new VF.StaveTie({ first_note: smo291225, last_note: smo291243, 
          firstNote: smo291225, lastNote: smo291243, first_indices: [0], last_indices: [0]});
smo410053.setContext(context).draw();
// modifier from 12-71-0-2 to 12-71-0-3
const smo410054 = new VF.StaveTie({ first_note: smo291318, last_note: smo291320, 
          firstNote: smo291318, lastNote: smo291320, first_indices: [0], last_indices: [0]});
smo410054.setContext(context).draw();
// modifier from 13-63-0-3 to 13-63-0-4
const smo410055 = new VF.StaveTie({ first_note: smo294357, last_note: smo294358, 
          firstNote: smo294357, lastNote: smo294358, first_indices: [0,1,2], last_indices: [0,1,2]});
smo410055.setContext(context).draw();
// modifier from 13-64-0-3 to 13-64-0-4
const smo410056 = new VF.StaveTie({ first_note: smo294381, last_note: smo294382, 
          firstNote: smo294381, lastNote: smo294382, first_indices: [0,1,2], last_indices: [0,1,2]});
smo410056.setContext(context).draw();
// modifier from 13-65-0-1 to 13-65-0-2
const smo410057 = new VF.StaveTie({ first_note: smo294400, last_note: smo294401, 
          firstNote: smo294400, lastNote: smo294401, first_indices: [0,1,2], last_indices: [0,1,2]});
smo410057.setContext(context).draw();
// modifier from 13-66-0-3 to 13-66-0-4
const smo410058 = new VF.StaveTie({ first_note: smo294423, last_note: smo294424, 
          firstNote: smo294423, lastNote: smo294424, first_indices: [0,1,2], last_indices: [0,1,2]});
smo410058.setContext(context).draw();
// modifier from 13-66-0-5 to 13-67-0-0
const smo410059 = new VF.StaveTie({ first_note: smo294425, last_note: smo294442, 
          firstNote: smo294425, lastNote: smo294442, first_indices: [0,1,2], last_indices: [0,1,2]});
smo410059.setContext(context).draw();
// modifier from 13-67-0-1 to 13-67-0-2
const smo410060 = new VF.StaveTie({ first_note: smo294443, last_note: smo294444, 
          firstNote: smo294443, lastNote: smo294444, first_indices: [0,1], last_indices: [0,1]});
smo410060.setContext(context).draw();
// modifier from 14-63-0-3 to 14-63-0-4
const smo410061 = new VF.StaveTie({ first_note: smo297570, last_note: smo297571, 
          firstNote: smo297570, lastNote: smo297571, first_indices: [0,1,2], last_indices: [0,1,2]});
smo410061.setContext(context).draw();
// modifier from 14-64-0-3 to 14-64-0-4
const smo410062 = new VF.StaveTie({ first_note: smo297594, last_note: smo297595, 
          firstNote: smo297594, lastNote: smo297595, first_indices: [0,1,2], last_indices: [0,1,2]});
smo410062.setContext(context).draw();
// modifier from 14-65-0-1 to 14-65-0-2
const smo410063 = new VF.StaveTie({ first_note: smo297613, last_note: smo297614, 
          firstNote: smo297613, lastNote: smo297614, first_indices: [0,1,2], last_indices: [0,1,2]});
smo410063.setContext(context).draw();
// modifier from 14-66-0-3 to 14-66-0-4
const smo410064 = new VF.StaveTie({ first_note: smo297636, last_note: smo297637, 
          firstNote: smo297636, lastNote: smo297637, first_indices: [0,1,2], last_indices: [0,1,2]});
smo410064.setContext(context).draw();
// modifier from 14-66-0-5 to 14-67-0-0
const smo410065 = new VF.StaveTie({ first_note: smo297638, last_note: smo297655, 
          firstNote: smo297638, lastNote: smo297655, first_indices: [0,1,2], last_indices: [0,1,2]});
smo410065.setContext(context).draw();
// modifier from 14-67-0-1 to 14-67-0-2
const smo410066 = new VF.StaveTie({ first_note: smo297656, last_note: smo297657, 
          firstNote: smo297656, lastNote: smo297657, first_indices: [0,1], last_indices: [0,1]});
smo410066.setContext(context).draw();
// modifier from 15-63-0-3 to 15-63-0-4
const smo410067 = new VF.StaveTie({ first_note: smo300765, last_note: smo300766, 
          firstNote: smo300765, lastNote: smo300766, first_indices: [0], last_indices: [0]});
smo410067.setContext(context).draw();
// modifier from 15-64-0-3 to 15-64-0-4
const smo410068 = new VF.StaveTie({ first_note: smo300789, last_note: smo300790, 
          firstNote: smo300789, lastNote: smo300790, first_indices: [0], last_indices: [0]});
smo410068.setContext(context).draw();
// modifier from 15-65-0-1 to 15-65-0-2
const smo410069 = new VF.StaveTie({ first_note: smo300808, last_note: smo300809, 
          firstNote: smo300808, lastNote: smo300809, first_indices: [0], last_indices: [0]});
smo410069.setContext(context).draw();
// modifier from 15-66-0-3 to 15-66-0-4
const smo410070 = new VF.StaveTie({ first_note: smo300831, last_note: smo300832, 
          firstNote: smo300831, lastNote: smo300832, first_indices: [0], last_indices: [0]});
smo410070.setContext(context).draw();
// modifier from 15-66-0-5 to 15-67-0-0
const smo410071 = new VF.StaveTie({ first_note: smo300833, last_note: smo300850, 
          firstNote: smo300833, lastNote: smo300850, first_indices: [0], last_indices: [0]});
smo410071.setContext(context).draw();
// modifier from 15-67-0-1 to 15-67-0-2
const smo410072 = new VF.StaveTie({ first_note: smo300851, last_note: smo300852, 
          firstNote: smo300851, lastNote: smo300852, first_indices: [0], last_indices: [0]});
smo410072.setContext(context).draw();
// modifier from 16-64-0-1 to 16-64-0-2
const smo410073 = new VF.StaveTie({ first_note: smo303906, last_note: smo303907, 
          firstNote: smo303906, lastNote: smo303907, first_indices: [0], last_indices: [0]});
smo410073.setContext(context).draw();
// modifier from 16-64-0-3 to 16-65-0-0
const smo410074 = new VF.StaveTie({ first_note: smo303908, last_note: smo303925, 
          firstNote: smo303908, lastNote: smo303925, first_indices: [0], last_indices: [0]});
smo410074.setContext(context).draw();
// modifier from 16-65-0-1 to 16-65-0-2
const smo410075 = new VF.StaveTie({ first_note: smo303926, last_note: smo303927, 
          firstNote: smo303926, lastNote: smo303927, first_indices: [0], last_indices: [0]});
smo410075.setContext(context).draw();
// modifier from 16-65-0-3 to 16-66-0-0
const smo410076 = new VF.StaveTie({ first_note: smo303928, last_note: smo303945, 
          firstNote: smo303928, lastNote: smo303945, first_indices: [0], last_indices: [0]});
smo410076.setContext(context).draw();
// modifier from 16-66-0-1 to 16-66-0-2
const smo410077 = new VF.StaveTie({ first_note: smo303946, last_note: smo303947, 
          firstNote: smo303946, lastNote: smo303947, first_indices: [0], last_indices: [0]});
smo410077.setContext(context).draw();
// modifier from 16-66-0-3 to 16-67-0-0
const smo410078 = new VF.StaveTie({ first_note: smo303948, last_note: smo303965, 
          firstNote: smo303948, lastNote: smo303965, first_indices: [0], last_indices: [0]});
smo410078.setContext(context).draw();
// modifier from 16-68-0-1 to 16-68-0-2
const smo410079 = new VF.StaveTie({ first_note: smo303986, last_note: smo303987, 
          firstNote: smo303986, lastNote: smo303987, first_indices: [0], last_indices: [0]});
smo410079.setContext(context).draw();
// modifier from 16-68-0-3 to 16-69-0-0
const smo410080 = new VF.StaveTie({ first_note: smo303988, last_note: smo304005, 
          firstNote: smo303988, lastNote: smo304005, first_indices: [0], last_indices: [0]});
smo410080.setContext(context).draw();
// modifier from 16-69-0-1 to 16-69-0-2
const smo410081 = new VF.StaveTie({ first_note: smo304006, last_note: smo304007, 
          firstNote: smo304006, lastNote: smo304007, first_indices: [0], last_indices: [0]});
smo410081.setContext(context).draw();
// modifier from 16-69-0-3 to 16-70-0-0
const smo410082 = new VF.StaveTie({ first_note: smo304008, last_note: smo304025, 
          firstNote: smo304008, lastNote: smo304025, first_indices: [0], last_indices: [0]});
smo410082.setContext(context).draw();
// modifier from 16-70-0-1 to 16-70-0-2
const smo410083 = new VF.StaveTie({ first_note: smo304026, last_note: smo304027, 
          firstNote: smo304026, lastNote: smo304027, first_indices: [0], last_indices: [0]});
smo410083.setContext(context).draw();
// modifier from 16-70-0-3 to 16-71-0-0
const smo410084 = new VF.StaveTie({ first_note: smo304028, last_note: smo304045, 
          firstNote: smo304028, lastNote: smo304045, first_indices: [0], last_indices: [0]});
smo410084.setContext(context).draw();
// modifier from 17-63-0-1 to 17-63-0-2
const smo410085 = new VF.StaveTie({ first_note: smo307066, last_note: smo307067, 
          firstNote: smo307066, lastNote: smo307067, first_indices: [0], last_indices: [0]});
smo410085.setContext(context).draw();
// modifier from 17-65-0-1 to 17-65-0-2
const smo410086 = new VF.StaveTie({ first_note: smo307115, last_note: smo307116, 
          firstNote: smo307115, lastNote: smo307116, first_indices: [0], last_indices: [0]});
smo410086.setContext(context).draw();
// modifier from 17-66-0-4 to 17-66-0-5
const smo410087 = new VF.StaveTie({ first_note: smo307142, last_note: smo307144, 
          firstNote: smo307142, lastNote: smo307144, first_indices: [0], last_indices: [0]});
smo410087.setContext(context).draw();
// modifier from 17-66-0-6 to 17-67-0-0
const smo410088 = new VF.StaveTie({ first_note: smo307145, last_note: smo307164, 
          firstNote: smo307145, lastNote: smo307164, first_indices: [0], last_indices: [0]});
smo410088.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo254227').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo254230').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo254232').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo257221').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo257224').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo257226').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo260364').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo260367').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo260369').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo263480').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo263483').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo263485').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266499').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266502').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266504').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269606').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269609').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269611').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272718').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272721').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272723').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275827').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275830').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275832').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278913').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278916').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278918').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo282002').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo282005').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo282007').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo285042').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo285045').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo285047').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo288096').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo288099').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo288101').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo291139').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo291142').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo291144').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo254251').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo254255').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo254258').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo257245').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo257249').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo257252').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo260388').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo260392').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo260395').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo263504').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo263508').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo263511').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo266523').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266527').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo266530').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo269630').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269634').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo269637').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo272742').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272746').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272749').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo275851').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275855').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275858').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo278937').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278941').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278944').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo282026').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo282030').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo285066').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo285070').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo288120').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo288124').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo291163').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo291167').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo307087').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo254277').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo254280').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo254283').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo254285').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo257271').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo257274').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo257277').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo257279').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo260414').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo260417').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo260420').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo260422').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo263530').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo263533').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo263536').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo263538').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266549').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266552').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo266555').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo266557').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo269656').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo269659').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo269662').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo269664').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272768').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272771').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272774').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272776').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275877').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275880').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275883').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275885').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278963').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278966').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278969').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278971').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo282052').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo282055').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo282058').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo282060').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo285092').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo285095').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo285098').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo285100').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo288146').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo288149').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo288152').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo288154').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo291189').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo291192').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo291195').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo291197').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo254303').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo254305').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo254307').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo254309').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo254311').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo254314').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo257297').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo257299').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo257301').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo257303').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo257305').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo257308').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo260440').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo260442').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo260444').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo260446').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo260451').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo263556').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo263558').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo263560').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo263562').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo263567').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo266575').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo266577').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo266579').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo266581').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo266583').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo266586').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo269682').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo269684').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo269686').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo269688').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo269693').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo272794').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272796').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo272798').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272800').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272805').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo275903').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275905').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo275907').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275909').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275914').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo278989').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278991').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo278993').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278995').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo279000').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo282078').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo282082').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo282084').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo282086').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo285118').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo285122').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo285124').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo285126').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo288172').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo288176').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo288178').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo288180').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo291215').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo291219').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo291221').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo291223').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo307135').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo307139').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo307141').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo307143').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo282108').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo285148').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo288202').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo291245').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo254407').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo254410').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo254412').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo257400').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo257403').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo257405').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo260544').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo260547').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo260549').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo263660').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo263663').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo263665').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266679').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266682').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266684').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269795').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269798').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269800').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272898').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272901').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272903').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo276007').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo276010').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo276012').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo279093').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo279096').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo279098').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo282182').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo282185').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo282187').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo285222').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo285225').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo285227').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo288276').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo288279').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo288281').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo291319').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo291322').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo291324').setAttributeNS('', 'transform', 'translate(0 3)');
}
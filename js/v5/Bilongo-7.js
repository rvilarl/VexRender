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
const fmtsmo25985663 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo259856v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259856v0ar = [];
const smo259831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259831.setAttribute('id', 'smo259831');
smo259856v0ar.push(smo259831);
const smo259832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259832.setAttribute('id', 'smo259832');
smo259856v0ar.push(smo259832);
const smo259833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo259833.setAttribute('id', 'smo259833');
const smo259834 = new VF.Annotation('Ki');
smo259834.setAttribute('id', 'smo259834');
smo259834.setFont('times', 12, 'normal');
smo259834.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259833.addModifier(smo259834);
smo259834.addClass('lyric lyric-0 lyric-hyphen');
smo259856v0ar.push(smo259833);
const smo259835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo259835.setAttribute('id', 'smo259835');
smo259856v0ar.push(smo259835);
const smo259836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo259836.setAttribute('id', 'smo259836');
const smo259837 = new VF.Annotation('ki');
smo259837.setAttribute('id', 'smo259837');
smo259837.setFont('times', 12, 'normal');
smo259837.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259836.addModifier(smo259837);
smo259837.addClass('lyric lyric-0 lyric-hyphen');
smo259856v0ar.push(smo259836);
const smo259838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo259838.setAttribute('id', 'smo259838');
const smo259839 = new VF.Annotation('ri');
smo259839.setAttribute('id', 'smo259839');
smo259839.setFont('times', 12, 'normal');
smo259839.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259838.addModifier(smo259839);
smo259839.addClass('lyric lyric-0');
smo259856v0ar.push(smo259838);
smo259856v0.addTickables(smo259856v0ar)
fmtsmo25985663.joinVoices([smo259856v0]);
const fmtsmo26285063 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo262850v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo262850v0ar = [];
const smo262825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262825.setAttribute('id', 'smo262825');
smo262850v0ar.push(smo262825);
const smo262826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262826.setAttribute('id', 'smo262826');
smo262850v0ar.push(smo262826);
const smo262827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo262827.setAttribute('id', 'smo262827');
const smo262828 = new VF.Annotation('Ki');
smo262828.setAttribute('id', 'smo262828');
smo262828.setFont('times', 12, 'normal');
smo262828.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262827.addModifier(smo262828);
smo262828.addClass('lyric lyric-0 lyric-hyphen');
smo262850v0ar.push(smo262827);
const smo262829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo262829.setAttribute('id', 'smo262829');
smo262850v0ar.push(smo262829);
const smo262830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo262830.setAttribute('id', 'smo262830');
const smo262831 = new VF.Annotation('ki');
smo262831.setAttribute('id', 'smo262831');
smo262831.setFont('times', 12, 'normal');
smo262831.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262830.addModifier(smo262831);
smo262831.addClass('lyric lyric-0 lyric-hyphen');
smo262850v0ar.push(smo262830);
const smo262832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo262832.setAttribute('id', 'smo262832');
const smo262833 = new VF.Annotation('ri');
smo262833.setAttribute('id', 'smo262833');
smo262833.setFont('times', 12, 'normal');
smo262833.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262832.addModifier(smo262833);
smo262833.addClass('lyric lyric-0');
smo262850v0ar.push(smo262832);
smo262850v0.addTickables(smo262850v0ar)
fmtsmo26285063.joinVoices([smo262850v0]);
const fmtsmo26599363 = new VF.Formatter();
//
// voices and notes for stave 2 63
const smo265993v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo265993v0ar = [];
const smo265968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo265968.setAttribute('id', 'smo265968');
smo265993v0ar.push(smo265968);
const smo265969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo265969.setAttribute('id', 'smo265969');
smo265993v0ar.push(smo265969);
const smo265970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo265970.setAttribute('id', 'smo265970');
const smo265971 = new VF.Annotation('Ki');
smo265971.setAttribute('id', 'smo265971');
smo265971.setFont('times', 12, 'normal');
smo265971.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265970.addModifier(smo265971);
smo265971.addClass('lyric lyric-0 lyric-hyphen');
smo265993v0ar.push(smo265970);
const smo265972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo265972.setAttribute('id', 'smo265972');
smo265993v0ar.push(smo265972);
const smo265973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo265973.setAttribute('id', 'smo265973');
const smo265974 = new VF.Annotation('ki');
smo265974.setAttribute('id', 'smo265974');
smo265974.setFont('times', 12, 'normal');
smo265974.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265973.addModifier(smo265974);
smo265974.addClass('lyric lyric-0 lyric-hyphen');
smo265993v0ar.push(smo265973);
const smo265975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo265975.setAttribute('id', 'smo265975');
const smo265976 = new VF.Annotation('ri');
smo265976.setAttribute('id', 'smo265976');
smo265976.setFont('times', 12, 'normal');
smo265976.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265975.addModifier(smo265976);
smo265976.addClass('lyric lyric-0');
smo265993v0ar.push(smo265975);
smo265993v0.addTickables(smo265993v0ar)
fmtsmo26599363.joinVoices([smo265993v0]);
const fmtsmo26910963 = new VF.Formatter();
//
// voices and notes for stave 3 63
const smo269109v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269109v0ar = [];
const smo269084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269084.setAttribute('id', 'smo269084');
smo269109v0ar.push(smo269084);
const smo269085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269085.setAttribute('id', 'smo269085');
smo269109v0ar.push(smo269085);
const smo269086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo269086.setAttribute('id', 'smo269086');
const smo269087 = new VF.Annotation('Ki');
smo269087.setAttribute('id', 'smo269087');
smo269087.setFont('times', 12, 'normal');
smo269087.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269086.addModifier(smo269087);
smo269087.addClass('lyric lyric-0 lyric-hyphen');
smo269109v0ar.push(smo269086);
const smo269088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo269088.setAttribute('id', 'smo269088');
smo269109v0ar.push(smo269088);
const smo269089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo269089.setAttribute('id', 'smo269089');
const smo269090 = new VF.Annotation('ki');
smo269090.setAttribute('id', 'smo269090');
smo269090.setFont('times', 12, 'normal');
smo269090.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269089.addModifier(smo269090);
smo269090.addClass('lyric lyric-0 lyric-hyphen');
smo269109v0ar.push(smo269089);
const smo269091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo269091.setAttribute('id', 'smo269091');
const smo269092 = new VF.Annotation('ri');
smo269092.setAttribute('id', 'smo269092');
smo269092.setFont('times', 12, 'normal');
smo269092.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269091.addModifier(smo269092);
smo269092.addClass('lyric lyric-0');
smo269109v0ar.push(smo269091);
smo269109v0.addTickables(smo269109v0ar)
fmtsmo26910963.joinVoices([smo269109v0]);
const fmtsmo27212863 = new VF.Formatter();
//
// voices and notes for stave 4 63
const smo272128v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272128v0ar = [];
const smo272103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo272103.setAttribute('id', 'smo272103');
smo272128v0ar.push(smo272103);
const smo272104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo272104.setAttribute('id', 'smo272104');
smo272128v0ar.push(smo272104);
const smo272105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272105.setAttribute('id', 'smo272105');
const smo272106 = new VF.Annotation('Ki');
smo272106.setAttribute('id', 'smo272106');
smo272106.setFont('times', 12, 'normal');
smo272106.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272105.addModifier(smo272106);
smo272106.addClass('lyric lyric-0 lyric-hyphen');
smo272128v0ar.push(smo272105);
const smo272107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272107.setAttribute('id', 'smo272107');
smo272128v0ar.push(smo272107);
const smo272108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272108.setAttribute('id', 'smo272108');
const smo272109 = new VF.Annotation('ki');
smo272109.setAttribute('id', 'smo272109');
smo272109.setFont('times', 12, 'normal');
smo272109.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272108.addModifier(smo272109);
smo272109.addClass('lyric lyric-0 lyric-hyphen');
smo272128v0ar.push(smo272108);
const smo272110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272110.setAttribute('id', 'smo272110');
const smo272111 = new VF.Annotation('ri');
smo272111.setAttribute('id', 'smo272111');
smo272111.setFont('times', 12, 'normal');
smo272111.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272110.addModifier(smo272111);
smo272111.addClass('lyric lyric-0');
smo272128v0ar.push(smo272110);
smo272128v0.addTickables(smo272128v0ar)
fmtsmo27212863.joinVoices([smo272128v0]);
const fmtsmo27523563 = new VF.Formatter();
//
// voices and notes for stave 5 63
const smo275235v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275235v0ar = [];
const smo275209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275209.setAttribute('id', 'smo275209');
smo275235v0ar.push(smo275209);
const smo275210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo275210.setAttribute('id', 'smo275210');
smo275235v0ar.push(smo275210);
const smo275211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo275211.setAttribute('id', 'smo275211');
smo275235v0ar.push(smo275211);
const smo275212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275212.setAttribute('id', 'smo275212');
const smo275213 = new VF.Annotation('Ki');
smo275213.setAttribute('id', 'smo275213');
smo275213.setFont('times', 12, 'normal');
smo275213.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275212.addModifier(smo275213);
smo275213.addClass('lyric lyric-0 lyric-hyphen');
smo275235v0ar.push(smo275212);
const smo275214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275214.setAttribute('id', 'smo275214');
smo275235v0ar.push(smo275214);
const smo275215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275215.setAttribute('id', 'smo275215');
const smo275216 = new VF.Annotation('ki');
smo275216.setAttribute('id', 'smo275216');
smo275216.setFont('times', 12, 'normal');
smo275216.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275215.addModifier(smo275216);
smo275216.addClass('lyric lyric-0 lyric-hyphen');
smo275235v0ar.push(smo275215);
const smo275217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275217.setAttribute('id', 'smo275217');
const smo275218 = new VF.Annotation('ri');
smo275218.setAttribute('id', 'smo275218');
smo275218.setFont('times', 12, 'normal');
smo275218.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275217.addModifier(smo275218);
smo275218.addClass('lyric lyric-0');
smo275235v0ar.push(smo275217);
smo275235v0.addTickables(smo275235v0ar)
fmtsmo27523563.joinVoices([smo275235v0]);
const fmtsmo27834763 = new VF.Formatter();
//
// voices and notes for stave 6 63
const smo278347v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278347v0ar = [];
const smo278322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278322.setAttribute('id', 'smo278322');
smo278347v0ar.push(smo278322);
const smo278323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278323.setAttribute('id', 'smo278323');
smo278347v0ar.push(smo278323);
const smo278324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo278324.setAttribute('id', 'smo278324');
const smo278325 = new VF.Annotation('Ki');
smo278325.setAttribute('id', 'smo278325');
smo278325.setFont('times', 12, 'normal');
smo278325.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278324.addModifier(smo278325);
smo278325.addClass('lyric lyric-0 lyric-hyphen');
smo278347v0ar.push(smo278324);
const smo278326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo278326.setAttribute('id', 'smo278326');
smo278347v0ar.push(smo278326);
const smo278327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo278327.setAttribute('id', 'smo278327');
const smo278328 = new VF.Annotation('ki');
smo278328.setAttribute('id', 'smo278328');
smo278328.setFont('times', 12, 'normal');
smo278328.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278327.addModifier(smo278328);
smo278328.addClass('lyric lyric-0 lyric-hyphen');
smo278347v0ar.push(smo278327);
const smo278329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo278329.setAttribute('id', 'smo278329');
const smo278330 = new VF.Annotation('ri');
smo278330.setAttribute('id', 'smo278330');
smo278330.setFont('times', 12, 'normal');
smo278330.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278329.addModifier(smo278330);
smo278330.addClass('lyric lyric-0');
smo278347v0ar.push(smo278329);
smo278347v0.addTickables(smo278347v0ar)
fmtsmo27834763.joinVoices([smo278347v0]);
const fmtsmo28145663 = new VF.Formatter();
//
// voices and notes for stave 7 63
const smo281456v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281456v0ar = [];
const smo281431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281431.setAttribute('id', 'smo281431');
smo281456v0ar.push(smo281431);
const smo281432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281432.setAttribute('id', 'smo281432');
smo281456v0ar.push(smo281432);
const smo281433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281433.setAttribute('id', 'smo281433');
const smo281434 = new VF.Annotation('Ki');
smo281434.setAttribute('id', 'smo281434');
smo281434.setFont('times', 12, 'normal');
smo281434.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281433.addModifier(smo281434);
smo281434.addClass('lyric lyric-0 lyric-hyphen');
smo281456v0ar.push(smo281433);
const smo281435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281435.setAttribute('id', 'smo281435');
smo281456v0ar.push(smo281435);
const smo281436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281436.setAttribute('id', 'smo281436');
const smo281437 = new VF.Annotation('ki');
smo281437.setAttribute('id', 'smo281437');
smo281437.setFont('times', 12, 'normal');
smo281437.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281436.addModifier(smo281437);
smo281437.addClass('lyric lyric-0 lyric-hyphen');
smo281456v0ar.push(smo281436);
const smo281438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281438.setAttribute('id', 'smo281438');
const smo281439 = new VF.Annotation('ri');
smo281439.setAttribute('id', 'smo281439');
smo281439.setFont('times', 12, 'normal');
smo281439.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281438.addModifier(smo281439);
smo281439.addClass('lyric lyric-0');
smo281456v0ar.push(smo281438);
smo281456v0.addTickables(smo281456v0ar)
fmtsmo28145663.joinVoices([smo281456v0]);
const fmtsmo28454263 = new VF.Formatter();
//
// voices and notes for stave 8 63
const smo284542v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284542v0ar = [];
const smo284517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo284517.setAttribute('id', 'smo284517');
smo284542v0ar.push(smo284517);
const smo284518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo284518.setAttribute('id', 'smo284518');
smo284542v0ar.push(smo284518);
const smo284519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo284519.setAttribute('id', 'smo284519');
const smo284520 = new VF.Annotation('Ki');
smo284520.setAttribute('id', 'smo284520');
smo284520.setFont('times', 12, 'normal');
smo284520.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284519.addModifier(smo284520);
smo284520.addClass('lyric lyric-0 lyric-hyphen');
smo284542v0ar.push(smo284519);
const smo284521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo284521.setAttribute('id', 'smo284521');
smo284542v0ar.push(smo284521);
const smo284522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo284522.setAttribute('id', 'smo284522');
const smo284523 = new VF.Annotation('ki');
smo284523.setAttribute('id', 'smo284523');
smo284523.setFont('times', 12, 'normal');
smo284523.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284522.addModifier(smo284523);
smo284523.addClass('lyric lyric-0 lyric-hyphen');
smo284542v0ar.push(smo284522);
const smo284524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo284524.setAttribute('id', 'smo284524');
const smo284525 = new VF.Annotation('ri');
smo284525.setAttribute('id', 'smo284525');
smo284525.setFont('times', 12, 'normal');
smo284525.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284524.addModifier(smo284525);
smo284525.addClass('lyric lyric-0');
smo284542v0ar.push(smo284524);
smo284542v0.addTickables(smo284542v0ar)
fmtsmo28454263.joinVoices([smo284542v0]);
const fmtsmo28763163 = new VF.Formatter();
//
// voices and notes for stave 9 63
const smo287631v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287631v0ar = [];
const smo287606 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo287606.setAttribute('id', 'smo287606');
smo287631v0ar.push(smo287606);
const smo287607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287607.setAttribute('id', 'smo287607');
smo287631v0ar.push(smo287607);
const smo287608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287608.setAttribute('id', 'smo287608');
const smo287609 = new VF.Annotation('Ki');
smo287609.setAttribute('id', 'smo287609');
smo287609.setFont('times', 12, 'normal');
smo287609.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287608.addModifier(smo287609);
smo287609.addClass('lyric lyric-0 lyric-hyphen');
smo287631v0ar.push(smo287608);
const smo287610 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287610.setAttribute('id', 'smo287610');
smo287631v0ar.push(smo287610);
const smo287611 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287611.setAttribute('id', 'smo287611');
const smo287612 = new VF.Annotation('ki');
smo287612.setAttribute('id', 'smo287612');
smo287612.setFont('times', 12, 'normal');
smo287612.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287611.addModifier(smo287612);
smo287612.addClass('lyric lyric-0 lyric-hyphen');
smo287631v0ar.push(smo287611);
const smo287613 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287613.setAttribute('id', 'smo287613');
const smo287614 = new VF.Annotation('ri');
smo287614.setAttribute('id', 'smo287614');
smo287614.setFont('times', 12, 'normal');
smo287614.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287613.addModifier(smo287614);
smo287614.addClass('lyric lyric-0');
smo287631v0ar.push(smo287613);
smo287631v0.addTickables(smo287631v0ar)
fmtsmo28763163.joinVoices([smo287631v0]);
const fmtsmo29067163 = new VF.Formatter();
//
// voices and notes for stave 10 63
const smo290671v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290671v0ar = [];
const smo290646 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo290646.setAttribute('id', 'smo290646');
smo290671v0ar.push(smo290646);
const smo290647 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290647.setAttribute('id', 'smo290647');
smo290671v0ar.push(smo290647);
const smo290648 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290648.setAttribute('id', 'smo290648');
const smo290649 = new VF.Annotation('Ki');
smo290649.setAttribute('id', 'smo290649');
smo290649.setFont('times', 12, 'normal');
smo290649.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290648.addModifier(smo290649);
smo290649.addClass('lyric lyric-0 lyric-hyphen');
smo290671v0ar.push(smo290648);
const smo290650 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290650.setAttribute('id', 'smo290650');
smo290671v0ar.push(smo290650);
const smo290651 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290651.setAttribute('id', 'smo290651');
const smo290652 = new VF.Annotation('ki');
smo290652.setAttribute('id', 'smo290652');
smo290652.setFont('times', 12, 'normal');
smo290652.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290651.addModifier(smo290652);
smo290652.addClass('lyric lyric-0 lyric-hyphen');
smo290671v0ar.push(smo290651);
const smo290653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290653.setAttribute('id', 'smo290653');
const smo290654 = new VF.Annotation('ri');
smo290654.setAttribute('id', 'smo290654');
smo290654.setFont('times', 12, 'normal');
smo290654.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290653.addModifier(smo290654);
smo290654.addClass('lyric lyric-0');
smo290671v0ar.push(smo290653);
smo290671v0.addTickables(smo290671v0ar)
fmtsmo29067163.joinVoices([smo290671v0]);
const fmtsmo29372563 = new VF.Formatter();
//
// voices and notes for stave 11 63
const smo293725v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293725v0ar = [];
const smo293700 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo293700.setAttribute('id', 'smo293700');
smo293725v0ar.push(smo293700);
const smo293701 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293701.setAttribute('id', 'smo293701');
smo293725v0ar.push(smo293701);
const smo293702 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293702.setAttribute('id', 'smo293702');
const smo293703 = new VF.Annotation('Ki');
smo293703.setAttribute('id', 'smo293703');
smo293703.setFont('times', 12, 'normal');
smo293703.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293702.addModifier(smo293703);
smo293703.addClass('lyric lyric-0 lyric-hyphen');
smo293725v0ar.push(smo293702);
const smo293704 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293704.setAttribute('id', 'smo293704');
smo293725v0ar.push(smo293704);
const smo293705 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293705.setAttribute('id', 'smo293705');
const smo293706 = new VF.Annotation('ki');
smo293706.setAttribute('id', 'smo293706');
smo293706.setFont('times', 12, 'normal');
smo293706.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293705.addModifier(smo293706);
smo293706.addClass('lyric lyric-0 lyric-hyphen');
smo293725v0ar.push(smo293705);
const smo293707 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293707.setAttribute('id', 'smo293707');
const smo293708 = new VF.Annotation('ri');
smo293708.setAttribute('id', 'smo293708');
smo293708.setFont('times', 12, 'normal');
smo293708.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293707.addModifier(smo293708);
smo293708.addClass('lyric lyric-0');
smo293725v0ar.push(smo293707);
smo293725v0.addTickables(smo293725v0ar)
fmtsmo29372563.joinVoices([smo293725v0]);
const fmtsmo29676863 = new VF.Formatter();
//
// voices and notes for stave 12 63
const smo296768v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296768v0ar = [];
const smo296743 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo296743.setAttribute('id', 'smo296743');
smo296768v0ar.push(smo296743);
const smo296744 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo296744.setAttribute('id', 'smo296744');
smo296768v0ar.push(smo296744);
const smo296745 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo296745.setAttribute('id', 'smo296745');
const smo296746 = new VF.Annotation('Ki');
smo296746.setAttribute('id', 'smo296746');
smo296746.setFont('times', 12, 'normal');
smo296746.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296745.addModifier(smo296746);
smo296746.addClass('lyric lyric-0 lyric-hyphen');
smo296768v0ar.push(smo296745);
const smo296747 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo296747.setAttribute('id', 'smo296747');
smo296768v0ar.push(smo296747);
const smo296748 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo296748.setAttribute('id', 'smo296748');
const smo296749 = new VF.Annotation('ki');
smo296749.setAttribute('id', 'smo296749');
smo296749.setFont('times', 12, 'normal');
smo296749.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296748.addModifier(smo296749);
smo296749.addClass('lyric lyric-0 lyric-hyphen');
smo296768v0ar.push(smo296748);
const smo296750 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo296750.setAttribute('id', 'smo296750');
const smo296751 = new VF.Annotation('ri');
smo296751.setAttribute('id', 'smo296751');
smo296751.setFont('times', 12, 'normal');
smo296751.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296750.addModifier(smo296751);
smo296751.addClass('lyric lyric-0');
smo296768v0ar.push(smo296750);
smo296768v0.addTickables(smo296768v0ar)
fmtsmo29676863.joinVoices([smo296768v0]);
const fmtsmo29998463 = new VF.Formatter();
//
// voices and notes for stave 13 63
const smo299984v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo299984v0ar = [];
const smo299961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo299961.setAttribute('id', 'smo299961');
smo299984v0ar.push(smo299961);
const smo299962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo299962.setAttribute('id', 'smo299962');
smo299984v0ar.push(smo299962);
const smo299963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo299963.setAttribute('id', 'smo299963');
smo299984v0ar.push(smo299963);
const smo299964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo299964.setAttribute('id', 'smo299964');
const smo2999640acc = new VF.Accidental('#');
smo299964.addModifier(smo2999640acc, 0);
smo299984v0ar.push(smo299964);
const smo299965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo299965.setAttribute('id', 'smo299965');
smo299984v0ar.push(smo299965);
const smo299966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo299966.setAttribute('id', 'smo299966');
smo299984v0ar.push(smo299966);
const smo299967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo299967.setAttribute('id', 'smo299967');
smo299984v0ar.push(smo299967);
smo299984v0.addTickables(smo299984v0ar)
fmtsmo29998463.joinVoices([smo299984v0]);
const fmtsmo30319763 = new VF.Formatter();
//
// voices and notes for stave 14 63
const smo303197v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303197v0ar = [];
const smo303174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","ab/4/n","bb/4/n","dn/5/n"]}'))
smo303174.setAttribute('id', 'smo303174');
const smo3031741acc = new VF.Accidental('b');
smo303174.addModifier(smo3031741acc, 1);
smo303197v0ar.push(smo303174);
const smo303175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo303175.setAttribute('id', 'smo303175');
smo303197v0ar.push(smo303175);
const smo303176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo303176.setAttribute('id', 'smo303176');
smo303197v0ar.push(smo303176);
const smo303177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo303177.setAttribute('id', 'smo303177');
const smo3031770acc = new VF.Accidental('#');
smo303177.addModifier(smo3031770acc, 0);
const smo3031771acc = new VF.Accidental('n');
smo303177.addModifier(smo3031771acc, 1);
smo303197v0ar.push(smo303177);
const smo303178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo303178.setAttribute('id', 'smo303178');
smo303197v0ar.push(smo303178);
const smo303179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo303179.setAttribute('id', 'smo303179');
smo303197v0ar.push(smo303179);
const smo303180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo303180.setAttribute('id', 'smo303180');
smo303197v0ar.push(smo303180);
smo303197v0.addTickables(smo303197v0ar)
fmtsmo30319763.joinVoices([smo303197v0]);
const fmtsmo30639263 = new VF.Formatter();
//
// voices and notes for stave 15 63
const smo306392v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306392v0ar = [];
const smo306369 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo306369.setAttribute('id', 'smo306369');
smo306392v0ar.push(smo306369);
const smo306370 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo306370.setAttribute('id', 'smo306370');
smo306392v0ar.push(smo306370);
const smo306371 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo306371.setAttribute('id', 'smo306371');
smo306392v0ar.push(smo306371);
const smo306372 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo306372.setAttribute('id', 'smo306372');
smo306392v0ar.push(smo306372);
const smo306373 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo306373.setAttribute('id', 'smo306373');
smo306392v0ar.push(smo306373);
const smo306374 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo306374.setAttribute('id', 'smo306374');
smo306392v0ar.push(smo306374);
const smo306375 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo306375.setAttribute('id', 'smo306375');
smo306392v0ar.push(smo306375);
smo306392v0.addTickables(smo306392v0ar)
fmtsmo30639263.joinVoices([smo306392v0]);
const fmtsmo30951163 = new VF.Formatter();
//
// voices and notes for stave 16 63
const smo309511v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309511v0ar = [];
const smo309492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo309492.setAttribute('id', 'smo309492');
smo309511v0ar.push(smo309492);
const smo309493 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo309493.setAttribute('id', 'smo309493');
smo309511v0ar.push(smo309493);
const smo309494 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo309494.setAttribute('id', 'smo309494');
smo309511v0ar.push(smo309494);
smo309511v0.addTickables(smo309511v0ar)
fmtsmo30951163.joinVoices([smo309511v0]);
const fmtsmo31269263 = new VF.Formatter();
//
// voices and notes for stave 17 63
const smo312692v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312692v0ar = [];
const smo312672 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo312672.setAttribute('id', 'smo312672');
const smo3126720acc = new VF.Accidental('n');
smo312672.addModifier(smo3126720acc, 0);
smo312672.addModifier(new VF.Dot(), 0);
smo312692v0ar.push(smo312672);
const smo312673 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo312673.setAttribute('id', 'smo312673');
smo312692v0ar.push(smo312673);
const smo312674 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo312674.setAttribute('id', 'smo312674');
smo312692v0ar.push(smo312674);
const smo312675 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo312675.setAttribute('id', 'smo312675');
smo312692v0ar.push(smo312675);
smo312692v0.addTickables(smo312692v0ar)
fmtsmo31269263.joinVoices([smo312692v0]);
// create beam groups and tuplets for format grp smo314493 before formatting
const dirsmo405764 = smo259833.getStemDirection();
smo259833.setStemDirection(dirsmo405764);
smo259835.setStemDirection(dirsmo405764);
const smo405764 = new VF.Beam([smo259833,smo259835]);
const dirsmo405767 = smo262827.getStemDirection();
smo262827.setStemDirection(dirsmo405767);
smo262829.setStemDirection(dirsmo405767);
const smo405767 = new VF.Beam([smo262827,smo262829]);
const dirsmo405770 = smo265970.getStemDirection();
smo265970.setStemDirection(dirsmo405770);
smo265972.setStemDirection(dirsmo405770);
const smo405770 = new VF.Beam([smo265970,smo265972]);
const dirsmo405773 = smo269086.getStemDirection();
smo269086.setStemDirection(dirsmo405773);
smo269088.setStemDirection(dirsmo405773);
const smo405773 = new VF.Beam([smo269086,smo269088]);
const dirsmo405776 = smo272105.getStemDirection();
smo272105.setStemDirection(dirsmo405776);
smo272107.setStemDirection(dirsmo405776);
const smo405776 = new VF.Beam([smo272105,smo272107]);
 
// formatting measures in staff group smo314493
fmtsmo25985663.format([smo259856v0,smo262850v0,smo265993v0,smo269109v0,smo272128v0], 262);
const stavesmo259856 = new VF.Stave(159, 210, 348);
stavesmo259856.setAttribute('id', 'stavesmo259856');
stavesmo259856.setBegBarType(1);
stavesmo259856.setSection('D', 0);
stavesmo259856.addClef('treble');
const keysmo259856 = new VF.KeySignature('D');
keysmo259856.addToStave(stavesmo259856);
stavesmo259856.setContext(context);
stavesmo259856.draw();
smo259856v0.draw(context, stavesmo259856);
smo405764.setContext(context);
smo405764.draw();
const stavesmo262850 = new VF.Stave(159, 309, 348);
stavesmo262850.setAttribute('id', 'stavesmo262850');
stavesmo262850.setBegBarType(1);
stavesmo262850.addClef('treble');
const keysmo262850 = new VF.KeySignature('D');
keysmo262850.addToStave(stavesmo262850);
stavesmo262850.setContext(context);
stavesmo262850.draw();
smo262850v0.draw(context, stavesmo262850);
smo405767.setContext(context);
smo405767.draw();
const stavesmo265993 = new VF.Stave(159, 423, 348);
stavesmo265993.setAttribute('id', 'stavesmo265993');
stavesmo265993.setBegBarType(1);
stavesmo265993.addClef('treble');
const keysmo265993 = new VF.KeySignature('G');
keysmo265993.addToStave(stavesmo265993);
stavesmo265993.setContext(context);
stavesmo265993.draw();
smo265993v0.draw(context, stavesmo265993);
smo405770.setContext(context);
smo405770.draw();
const stavesmo269109 = new VF.Stave(159, 532, 348);
stavesmo269109.setAttribute('id', 'stavesmo269109');
stavesmo269109.setBegBarType(1);
stavesmo269109.addClef('treble');
const keysmo269109 = new VF.KeySignature('G');
keysmo269109.addToStave(stavesmo269109);
stavesmo269109.setContext(context);
stavesmo269109.draw();
smo269109v0.draw(context, stavesmo269109);
smo405773.setContext(context);
smo405773.draw();
const stavesmo272128 = new VF.Stave(159, 631, 348);
stavesmo272128.setAttribute('id', 'stavesmo272128');
stavesmo272128.setBegBarType(1);
stavesmo272128.addClef('treble');
const keysmo272128 = new VF.KeySignature('D');
keysmo272128.addToStave(stavesmo272128);
stavesmo272128.setContext(context);
stavesmo272128.draw();
smo272128v0.draw(context, stavesmo272128);
smo405776.setContext(context);
smo405776.draw();
// create beam groups and tuplets for format grp smo314495 before formatting
const dirsmo405779 = smo275209.getStemDirection();
smo275209.setStemDirection(dirsmo405779);
smo275210.setStemDirection(dirsmo405779);
const smo405779 = new VF.Beam([smo275209,smo275210]);
const dirsmo405780 = smo275212.getStemDirection();
smo275212.setStemDirection(dirsmo405780);
smo275214.setStemDirection(dirsmo405780);
const smo405780 = new VF.Beam([smo275212,smo275214]);
const dirsmo405783 = smo278324.getStemDirection();
smo278324.setStemDirection(dirsmo405783);
smo278326.setStemDirection(dirsmo405783);
const smo405783 = new VF.Beam([smo278324,smo278326]);
const dirsmo405786 = smo281433.getStemDirection();
smo281433.setStemDirection(dirsmo405786);
smo281435.setStemDirection(dirsmo405786);
const smo405786 = new VF.Beam([smo281433,smo281435]);
const dirsmo405789 = smo284519.getStemDirection();
smo284519.setStemDirection(dirsmo405789);
smo284521.setStemDirection(dirsmo405789);
const smo405789 = new VF.Beam([smo284519,smo284521]);
 
// formatting measures in staff group smo314495
fmtsmo27523563.format([smo275235v0,smo278347v0,smo281456v0,smo284542v0], 275);
const stavesmo275235 = new VF.Stave(159, 745, 348);
stavesmo275235.setAttribute('id', 'stavesmo275235');
stavesmo275235.setBegBarType(1);
stavesmo275235.addClef('treble');
const keysmo275235 = new VF.KeySignature('G');
keysmo275235.addToStave(stavesmo275235);
stavesmo275235.setContext(context);
stavesmo275235.draw();
smo275235v0.draw(context, stavesmo275235);
smo405779.setContext(context);
smo405779.draw();
smo405780.setContext(context);
smo405780.draw();
const stavesmo278347 = new VF.Stave(159, 853, 348);
stavesmo278347.setAttribute('id', 'stavesmo278347');
stavesmo278347.setBegBarType(1);
stavesmo278347.addClef('treble');
const keysmo278347 = new VF.KeySignature('G');
keysmo278347.addToStave(stavesmo278347);
stavesmo278347.setContext(context);
stavesmo278347.draw();
smo278347v0.draw(context, stavesmo278347);
smo405783.setContext(context);
smo405783.draw();
const stavesmo281456 = new VF.Stave(159, 962, 348);
stavesmo281456.setAttribute('id', 'stavesmo281456');
stavesmo281456.setBegBarType(1);
stavesmo281456.addClef('treble');
const keysmo281456 = new VF.KeySignature('G');
keysmo281456.addToStave(stavesmo281456);
stavesmo281456.setContext(context);
stavesmo281456.draw();
smo281456v0.draw(context, stavesmo281456);
smo405786.setContext(context);
smo405786.draw();
const stavesmo284542 = new VF.Stave(159, 1071, 348);
stavesmo284542.setAttribute('id', 'stavesmo284542');
stavesmo284542.setBegBarType(1);
stavesmo284542.addClef('treble');
const keysmo284542 = new VF.KeySignature('G');
keysmo284542.addToStave(stavesmo284542);
stavesmo284542.setContext(context);
stavesmo284542.draw();
smo284542v0.draw(context, stavesmo284542);
smo405789.setContext(context);
smo405789.draw();
// create beam groups and tuplets for format grp smo314497 before formatting
const dirsmo405792 = smo287608.getStemDirection();
smo287608.setStemDirection(dirsmo405792);
smo287610.setStemDirection(dirsmo405792);
const smo405792 = new VF.Beam([smo287608,smo287610]);
const dirsmo405795 = smo290648.getStemDirection();
smo290648.setStemDirection(dirsmo405795);
smo290650.setStemDirection(dirsmo405795);
const smo405795 = new VF.Beam([smo290648,smo290650]);
const dirsmo405798 = smo293702.getStemDirection();
smo293702.setStemDirection(dirsmo405798);
smo293704.setStemDirection(dirsmo405798);
const smo405798 = new VF.Beam([smo293702,smo293704]);
const dirsmo405801 = smo296745.getStemDirection();
smo296745.setStemDirection(dirsmo405801);
smo296747.setStemDirection(dirsmo405801);
const smo405801 = new VF.Beam([smo296745,smo296747]);
 
// formatting measures in staff group smo314497
fmtsmo28763163.format([smo287631v0,smo290671v0,smo293725v0,smo296768v0], 275);
const stavesmo287631 = new VF.Stave(159, 1200, 348);
stavesmo287631.setAttribute('id', 'stavesmo287631');
stavesmo287631.setBegBarType(1);
stavesmo287631.addClef('bass');
const keysmo287631 = new VF.KeySignature('F');
keysmo287631.addToStave(stavesmo287631);
stavesmo287631.setContext(context);
stavesmo287631.draw();
smo287631v0.draw(context, stavesmo287631);
smo405792.setContext(context);
smo405792.draw();
const stavesmo290671 = new VF.Stave(159, 1329, 348);
stavesmo290671.setAttribute('id', 'stavesmo290671');
stavesmo290671.setBegBarType(1);
stavesmo290671.addClef('bass');
const keysmo290671 = new VF.KeySignature('F');
keysmo290671.addToStave(stavesmo290671);
stavesmo290671.setContext(context);
stavesmo290671.draw();
smo290671v0.draw(context, stavesmo290671);
smo405795.setContext(context);
smo405795.draw();
const stavesmo293725 = new VF.Stave(159, 1458, 348);
stavesmo293725.setAttribute('id', 'stavesmo293725');
stavesmo293725.setBegBarType(1);
stavesmo293725.addClef('bass');
const keysmo293725 = new VF.KeySignature('F');
keysmo293725.addToStave(stavesmo293725);
stavesmo293725.setContext(context);
stavesmo293725.draw();
smo293725v0.draw(context, stavesmo293725);
smo405798.setContext(context);
smo405798.draw();
const stavesmo296768 = new VF.Stave(159, 1587, 348);
stavesmo296768.setAttribute('id', 'stavesmo296768');
stavesmo296768.setBegBarType(1);
stavesmo296768.addClef('bass');
const keysmo296768 = new VF.KeySignature('F');
keysmo296768.addToStave(stavesmo296768);
stavesmo296768.setContext(context);
stavesmo296768.draw();
smo296768v0.draw(context, stavesmo296768);
smo405801.setContext(context);
smo405801.draw();
// create beam groups and tuplets for format grp smo301816 before formatting
const dirsmo405804 = smo299964.getStemDirection();
smo299964.setStemDirection(dirsmo405804);
smo299965.setStemDirection(dirsmo405804);
const smo405804 = new VF.Beam([smo299964,smo299965]);
 
// formatting measures in staff group smo301816
fmtsmo29998463.format([smo299984v0], 277);
const stavesmo299984 = new VF.Stave(159, 1726, 348);
stavesmo299984.setAttribute('id', 'stavesmo299984');
stavesmo299984.setBegBarType(1);
stavesmo299984.addClef('treble');
const keysmo299984 = new VF.KeySignature('F');
keysmo299984.addToStave(stavesmo299984);
stavesmo299984.setContext(context);
stavesmo299984.draw();
smo299984v0.draw(context, stavesmo299984);
smo405804.setContext(context);
smo405804.draw();
// create beam groups and tuplets for format grp smo314491 before formatting
const dirsmo405807 = smo303177.getStemDirection();
smo303177.setStemDirection(dirsmo405807);
smo303178.setStemDirection(dirsmo405807);
const smo405807 = new VF.Beam([smo303177,smo303178]);
const dirsmo405810 = smo306372.getStemDirection();
smo306372.setStemDirection(dirsmo405810);
smo306373.setStemDirection(dirsmo405810);
const smo405810 = new VF.Beam([smo306372,smo306373]);
 
// formatting measures in staff group smo314491
fmtsmo30319763.format([smo303197v0,smo306392v0], 277);
const stavesmo303197 = new VF.Stave(159, 1831, 348);
stavesmo303197.setAttribute('id', 'stavesmo303197');
stavesmo303197.setBegBarType(1);
stavesmo303197.addClef('treble');
const keysmo303197 = new VF.KeySignature('F');
keysmo303197.addToStave(stavesmo303197);
stavesmo303197.setContext(context);
stavesmo303197.draw();
smo303197v0.draw(context, stavesmo303197);
smo405807.setContext(context);
smo405807.draw();
const stavesmo306392 = new VF.Stave(159, 1917, 348);
stavesmo306392.setAttribute('id', 'stavesmo306392');
stavesmo306392.setBegBarType(1);
stavesmo306392.addClef('bass');
const keysmo306392 = new VF.KeySignature('F');
keysmo306392.addToStave(stavesmo306392);
stavesmo306392.setContext(context);
stavesmo306392.draw();
smo306392v0.draw(context, stavesmo306392);
smo405810.setContext(context);
smo405810.draw();
// create beam groups and tuplets for format grp smo311329 before formatting
 
// formatting measures in staff group smo311329
fmtsmo30951163.format([smo309511v0], 275);
const stavesmo309511 = new VF.Stave(159, 1988, 348);
stavesmo309511.setAttribute('id', 'stavesmo309511');
stavesmo309511.setBegBarType(1);
stavesmo309511.addClef('bass');
const keysmo309511 = new VF.KeySignature('F');
keysmo309511.addToStave(stavesmo309511);
stavesmo309511.setContext(context);
stavesmo309511.draw();
smo309511v0.draw(context, stavesmo309511);
// create beam groups and tuplets for format grp smo314485 before formatting
 
// formatting measures in staff group smo314485
fmtsmo31269263.format([smo312692v0], 283);
const stavesmo312692 = new VF.Stave(159, 2059, 348);
stavesmo312692.setAttribute('id', 'stavesmo312692');
stavesmo312692.setBegBarType(1);
stavesmo312692.addClef('percussion');
const keysmo312692 = new VF.KeySignature('F');
keysmo312692.addToStave(stavesmo312692);
stavesmo312692.setContext(context);
stavesmo312692.draw();
smo312692v0.draw(context, stavesmo312692);
const leftsmo314485stavesmo25985617 = new VF.StaveConnector(stavesmo259856, stavesmo272128).setType(3);
leftsmo314485stavesmo25985617.setContext(context).draw();
const leftsmo314485stavesmo27523517 = new VF.StaveConnector(stavesmo275235, stavesmo284542).setType(3);
leftsmo314485stavesmo27523517.setContext(context).draw();
const leftsmo314485stavesmo28763117 = new VF.StaveConnector(stavesmo287631, stavesmo296768).setType(1);
leftsmo314485stavesmo28763117.setContext(context).draw();
const leftsmo314485stavesmo30319717 = new VF.StaveConnector(stavesmo303197, stavesmo306392).setType(3);
leftsmo314485stavesmo30319717.setContext(context).draw();
const fmtsmo25988164 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo259881v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259881v0ar = [];
const smo259857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo259857.setAttribute('id', 'smo259857');
const smo259858 = new VF.Annotation('bun');
smo259858.setAttribute('id', 'smo259858');
smo259858.setFont('times', 12, 'normal');
smo259858.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259857.addModifier(smo259858);
smo259858.addClass('lyric lyric-0');
smo259881v0ar.push(smo259857);
const smo259859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259859.setAttribute('id', 'smo259859');
smo259881v0ar.push(smo259859);
const smo259860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259860.setAttribute('id', 'smo259860');
smo259881v0ar.push(smo259860);
const smo259861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259861.setAttribute('id', 'smo259861');
const smo259862 = new VF.Annotation('Man');
smo259862.setAttribute('id', 'smo259862');
smo259862.setFont('times', 12, 'normal');
smo259862.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259861.addModifier(smo259862);
smo259862.addClass('lyric lyric-0 lyric-hyphen');
smo259881v0ar.push(smo259861);
const smo259863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259863.setAttribute('id', 'smo259863');
smo259881v0ar.push(smo259863);
const smo259864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo259864.setAttribute('id', 'smo259864');
const smo2598640acc = new VF.Accidental('n');
smo259864.addModifier(smo2598640acc, 0);
const smo259865 = new VF.Annotation('ding');
smo259865.setAttribute('id', 'smo259865');
smo259865.setFont('times', 12, 'normal');
smo259865.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259864.addModifier(smo259865);
smo259865.addClass('lyric lyric-0 lyric-hyphen');
smo259881v0ar.push(smo259864);
smo259881v0.addTickables(smo259881v0ar)
fmtsmo25988164.joinVoices([smo259881v0]);
const fmtsmo26287564 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo262875v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo262875v0ar = [];
const smo262851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo262851.setAttribute('id', 'smo262851');
const smo262852 = new VF.Annotation('bun');
smo262852.setAttribute('id', 'smo262852');
smo262852.setFont('times', 12, 'normal');
smo262852.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262851.addModifier(smo262852);
smo262852.addClass('lyric lyric-0');
smo262875v0ar.push(smo262851);
const smo262853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262853.setAttribute('id', 'smo262853');
smo262875v0ar.push(smo262853);
const smo262854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262854.setAttribute('id', 'smo262854');
smo262875v0ar.push(smo262854);
const smo262855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo262855.setAttribute('id', 'smo262855');
const smo262856 = new VF.Annotation('Man');
smo262856.setAttribute('id', 'smo262856');
smo262856.setFont('times', 12, 'normal');
smo262856.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262855.addModifier(smo262856);
smo262856.addClass('lyric lyric-0 lyric-hyphen');
smo262875v0ar.push(smo262855);
const smo262857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo262857.setAttribute('id', 'smo262857');
smo262875v0ar.push(smo262857);
const smo262858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo262858.setAttribute('id', 'smo262858');
const smo2628580acc = new VF.Accidental('n');
smo262858.addModifier(smo2628580acc, 0);
const smo262859 = new VF.Annotation('ding');
smo262859.setAttribute('id', 'smo262859');
smo262859.setFont('times', 12, 'normal');
smo262859.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262858.addModifier(smo262859);
smo262859.addClass('lyric lyric-0 lyric-hyphen');
smo262875v0ar.push(smo262858);
smo262875v0.addTickables(smo262875v0ar)
fmtsmo26287564.joinVoices([smo262875v0]);
const fmtsmo26601864 = new VF.Formatter();
//
// voices and notes for stave 2 64
const smo266018v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266018v0ar = [];
const smo265994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo265994.setAttribute('id', 'smo265994');
const smo265995 = new VF.Annotation('bun');
smo265995.setAttribute('id', 'smo265995');
smo265995.setFont('times', 12, 'normal');
smo265995.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265994.addModifier(smo265995);
smo265995.addClass('lyric lyric-0');
smo266018v0ar.push(smo265994);
const smo265996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo265996.setAttribute('id', 'smo265996');
smo266018v0ar.push(smo265996);
const smo265997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo265997.setAttribute('id', 'smo265997');
smo266018v0ar.push(smo265997);
const smo265998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo265998.setAttribute('id', 'smo265998');
const smo265999 = new VF.Annotation('Man');
smo265999.setAttribute('id', 'smo265999');
smo265999.setFont('times', 12, 'normal');
smo265999.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265998.addModifier(smo265999);
smo265999.addClass('lyric lyric-0 lyric-hyphen');
smo266018v0ar.push(smo265998);
const smo266000 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266000.setAttribute('id', 'smo266000');
smo266018v0ar.push(smo266000);
const smo266001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo266001.setAttribute('id', 'smo266001');
const smo2660010acc = new VF.Accidental('n');
smo266001.addModifier(smo2660010acc, 0);
const smo266002 = new VF.Annotation('ding');
smo266002.setAttribute('id', 'smo266002');
smo266002.setFont('times', 12, 'normal');
smo266002.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266001.addModifier(smo266002);
smo266002.addClass('lyric lyric-0 lyric-hyphen');
smo266018v0ar.push(smo266001);
smo266018v0.addTickables(smo266018v0ar)
fmtsmo26601864.joinVoices([smo266018v0]);
const fmtsmo26913464 = new VF.Formatter();
//
// voices and notes for stave 3 64
const smo269134v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269134v0ar = [];
const smo269110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo269110.setAttribute('id', 'smo269110');
const smo269111 = new VF.Annotation('bun');
smo269111.setAttribute('id', 'smo269111');
smo269111.setFont('times', 12, 'normal');
smo269111.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269110.addModifier(smo269111);
smo269111.addClass('lyric lyric-0');
smo269134v0ar.push(smo269110);
const smo269112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269112.setAttribute('id', 'smo269112');
smo269134v0ar.push(smo269112);
const smo269113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269113.setAttribute('id', 'smo269113');
smo269134v0ar.push(smo269113);
const smo269114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo269114.setAttribute('id', 'smo269114');
const smo269115 = new VF.Annotation('Man');
smo269115.setAttribute('id', 'smo269115');
smo269115.setFont('times', 12, 'normal');
smo269115.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269114.addModifier(smo269115);
smo269115.addClass('lyric lyric-0 lyric-hyphen');
smo269134v0ar.push(smo269114);
const smo269116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo269116.setAttribute('id', 'smo269116');
smo269134v0ar.push(smo269116);
const smo269117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo269117.setAttribute('id', 'smo269117');
const smo2691170acc = new VF.Accidental('n');
smo269117.addModifier(smo2691170acc, 0);
const smo269118 = new VF.Annotation('ding');
smo269118.setAttribute('id', 'smo269118');
smo269118.setFont('times', 12, 'normal');
smo269118.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269117.addModifier(smo269118);
smo269118.addClass('lyric lyric-0 lyric-hyphen');
smo269134v0ar.push(smo269117);
smo269134v0.addTickables(smo269134v0ar)
fmtsmo26913464.joinVoices([smo269134v0]);
const fmtsmo27215364 = new VF.Formatter();
//
// voices and notes for stave 4 64
const smo272153v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272153v0ar = [];
const smo272129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272129.setAttribute('id', 'smo272129');
const smo272130 = new VF.Annotation('bun');
smo272130.setAttribute('id', 'smo272130');
smo272130.setFont('times', 12, 'normal');
smo272130.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272129.addModifier(smo272130);
smo272130.addClass('lyric lyric-0');
smo272153v0ar.push(smo272129);
const smo272131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo272131.setAttribute('id', 'smo272131');
smo272153v0ar.push(smo272131);
const smo272132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo272132.setAttribute('id', 'smo272132');
smo272153v0ar.push(smo272132);
const smo272133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo272133.setAttribute('id', 'smo272133');
const smo272134 = new VF.Annotation('Man');
smo272134.setAttribute('id', 'smo272134');
smo272134.setFont('times', 12, 'normal');
smo272134.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272133.addModifier(smo272134);
smo272134.addClass('lyric lyric-0 lyric-hyphen');
smo272153v0ar.push(smo272133);
const smo272135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo272135.setAttribute('id', 'smo272135');
smo272153v0ar.push(smo272135);
const smo272136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo272136.setAttribute('id', 'smo272136');
const smo2721360acc = new VF.Accidental('n');
smo272136.addModifier(smo2721360acc, 0);
const smo272137 = new VF.Annotation('ding');
smo272137.setAttribute('id', 'smo272137');
smo272137.setFont('times', 12, 'normal');
smo272137.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272136.addModifier(smo272137);
smo272137.addClass('lyric lyric-0 lyric-hyphen');
smo272153v0ar.push(smo272136);
smo272153v0.addTickables(smo272153v0ar)
fmtsmo27215364.joinVoices([smo272153v0]);
const fmtsmo27526064 = new VF.Formatter();
//
// voices and notes for stave 5 64
const smo275260v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275260v0ar = [];
const smo275236 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275236.setAttribute('id', 'smo275236');
const smo275237 = new VF.Annotation('bun');
smo275237.setAttribute('id', 'smo275237');
smo275237.setFont('times', 12, 'normal');
smo275237.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275236.addModifier(smo275237);
smo275237.addClass('lyric lyric-0');
smo275260v0ar.push(smo275236);
const smo275238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo275238.setAttribute('id', 'smo275238');
smo275260v0ar.push(smo275238);
const smo275239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo275239.setAttribute('id', 'smo275239');
smo275260v0ar.push(smo275239);
const smo275240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo275240.setAttribute('id', 'smo275240');
const smo275241 = new VF.Annotation('Man');
smo275241.setAttribute('id', 'smo275241');
smo275241.setFont('times', 12, 'normal');
smo275241.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275240.addModifier(smo275241);
smo275241.addClass('lyric lyric-0 lyric-hyphen');
smo275260v0ar.push(smo275240);
const smo275242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo275242.setAttribute('id', 'smo275242');
smo275260v0ar.push(smo275242);
const smo275243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo275243.setAttribute('id', 'smo275243');
const smo2752430acc = new VF.Accidental('n');
smo275243.addModifier(smo2752430acc, 0);
const smo275244 = new VF.Annotation('ding');
smo275244.setAttribute('id', 'smo275244');
smo275244.setFont('times', 12, 'normal');
smo275244.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275243.addModifier(smo275244);
smo275244.addClass('lyric lyric-0 lyric-hyphen');
smo275260v0ar.push(smo275243);
smo275260v0.addTickables(smo275260v0ar)
fmtsmo27526064.joinVoices([smo275260v0]);
const fmtsmo27837264 = new VF.Formatter();
//
// voices and notes for stave 6 64
const smo278372v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278372v0ar = [];
const smo278348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo278348.setAttribute('id', 'smo278348');
const smo278349 = new VF.Annotation('bun');
smo278349.setAttribute('id', 'smo278349');
smo278349.setFont('times', 12, 'normal');
smo278349.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278348.addModifier(smo278349);
smo278349.addClass('lyric lyric-0');
smo278372v0ar.push(smo278348);
const smo278350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278350.setAttribute('id', 'smo278350');
smo278372v0ar.push(smo278350);
const smo278351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278351.setAttribute('id', 'smo278351');
smo278372v0ar.push(smo278351);
const smo278352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo278352.setAttribute('id', 'smo278352');
const smo278353 = new VF.Annotation('Man');
smo278353.setAttribute('id', 'smo278353');
smo278353.setFont('times', 12, 'normal');
smo278353.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278352.addModifier(smo278353);
smo278353.addClass('lyric lyric-0 lyric-hyphen');
smo278372v0ar.push(smo278352);
const smo278354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo278354.setAttribute('id', 'smo278354');
smo278372v0ar.push(smo278354);
const smo278355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo278355.setAttribute('id', 'smo278355');
const smo2783550acc = new VF.Accidental('n');
smo278355.addModifier(smo2783550acc, 0);
const smo278356 = new VF.Annotation('ding');
smo278356.setAttribute('id', 'smo278356');
smo278356.setFont('times', 12, 'normal');
smo278356.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278355.addModifier(smo278356);
smo278356.addClass('lyric lyric-0 lyric-hyphen');
smo278372v0ar.push(smo278355);
smo278372v0.addTickables(smo278372v0ar)
fmtsmo27837264.joinVoices([smo278372v0]);
const fmtsmo28148164 = new VF.Formatter();
//
// voices and notes for stave 7 64
const smo281481v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281481v0ar = [];
const smo281457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281457.setAttribute('id', 'smo281457');
const smo281458 = new VF.Annotation('bun');
smo281458.setAttribute('id', 'smo281458');
smo281458.setFont('times', 12, 'normal');
smo281458.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281457.addModifier(smo281458);
smo281458.addClass('lyric lyric-0');
smo281481v0ar.push(smo281457);
const smo281459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281459.setAttribute('id', 'smo281459');
smo281481v0ar.push(smo281459);
const smo281460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281460.setAttribute('id', 'smo281460');
smo281481v0ar.push(smo281460);
const smo281461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281461.setAttribute('id', 'smo281461');
const smo281462 = new VF.Annotation('Man');
smo281462.setAttribute('id', 'smo281462');
smo281462.setFont('times', 12, 'normal');
smo281462.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281461.addModifier(smo281462);
smo281462.addClass('lyric lyric-0 lyric-hyphen');
smo281481v0ar.push(smo281461);
const smo281463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281463.setAttribute('id', 'smo281463');
smo281481v0ar.push(smo281463);
const smo281464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo281464.setAttribute('id', 'smo281464');
const smo2814640acc = new VF.Accidental('n');
smo281464.addModifier(smo2814640acc, 0);
const smo281465 = new VF.Annotation('ding');
smo281465.setAttribute('id', 'smo281465');
smo281465.setFont('times', 12, 'normal');
smo281465.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281464.addModifier(smo281465);
smo281465.addClass('lyric lyric-0 lyric-hyphen');
smo281481v0ar.push(smo281464);
smo281481v0.addTickables(smo281481v0ar)
fmtsmo28148164.joinVoices([smo281481v0]);
const fmtsmo28456764 = new VF.Formatter();
//
// voices and notes for stave 8 64
const smo284567v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284567v0ar = [];
const smo284543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo284543.setAttribute('id', 'smo284543');
const smo284544 = new VF.Annotation('bun');
smo284544.setAttribute('id', 'smo284544');
smo284544.setFont('times', 12, 'normal');
smo284544.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284543.addModifier(smo284544);
smo284544.addClass('lyric lyric-0');
smo284567v0ar.push(smo284543);
const smo284545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo284545.setAttribute('id', 'smo284545');
smo284567v0ar.push(smo284545);
const smo284546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo284546.setAttribute('id', 'smo284546');
smo284567v0ar.push(smo284546);
const smo284547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo284547.setAttribute('id', 'smo284547');
const smo284548 = new VF.Annotation('Man');
smo284548.setAttribute('id', 'smo284548');
smo284548.setFont('times', 12, 'normal');
smo284548.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284547.addModifier(smo284548);
smo284548.addClass('lyric lyric-0 lyric-hyphen');
smo284567v0ar.push(smo284547);
const smo284549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo284549.setAttribute('id', 'smo284549');
smo284567v0ar.push(smo284549);
const smo284550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo284550.setAttribute('id', 'smo284550');
const smo2845500acc = new VF.Accidental('n');
smo284550.addModifier(smo2845500acc, 0);
const smo284551 = new VF.Annotation('ding');
smo284551.setAttribute('id', 'smo284551');
smo284551.setFont('times', 12, 'normal');
smo284551.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284550.addModifier(smo284551);
smo284551.addClass('lyric lyric-0 lyric-hyphen');
smo284567v0ar.push(smo284550);
smo284567v0.addTickables(smo284567v0ar)
fmtsmo28456764.joinVoices([smo284567v0]);
const fmtsmo28765664 = new VF.Formatter();
//
// voices and notes for stave 9 64
const smo287656v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287656v0ar = [];
const smo287632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287632.setAttribute('id', 'smo287632');
const smo287633 = new VF.Annotation('bun');
smo287633.setAttribute('id', 'smo287633');
smo287633.setFont('times', 12, 'normal');
smo287633.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287632.addModifier(smo287633);
smo287633.addClass('lyric lyric-0');
smo287656v0ar.push(smo287632);
const smo287634 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287634.setAttribute('id', 'smo287634');
smo287656v0ar.push(smo287634);
const smo287635 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287635.setAttribute('id', 'smo287635');
smo287656v0ar.push(smo287635);
const smo287636 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287636.setAttribute('id', 'smo287636');
const smo287637 = new VF.Annotation('Man');
smo287637.setAttribute('id', 'smo287637');
smo287637.setFont('times', 12, 'normal');
smo287637.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287636.addModifier(smo287637);
smo287637.addClass('lyric lyric-0 lyric-hyphen');
smo287656v0ar.push(smo287636);
const smo287638 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287638.setAttribute('id', 'smo287638');
smo287656v0ar.push(smo287638);
const smo287639 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo287639.setAttribute('id', 'smo287639');
const smo2876390acc = new VF.Accidental('b');
smo287639.addModifier(smo2876390acc, 0);
const smo287640 = new VF.Annotation('ding');
smo287640.setAttribute('id', 'smo287640');
smo287640.setFont('times', 12, 'normal');
smo287640.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287639.addModifier(smo287640);
smo287640.addClass('lyric lyric-0 lyric-hyphen');
smo287656v0ar.push(smo287639);
smo287656v0.addTickables(smo287656v0ar)
fmtsmo28765664.joinVoices([smo287656v0]);
const fmtsmo29069664 = new VF.Formatter();
//
// voices and notes for stave 10 64
const smo290696v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290696v0ar = [];
const smo290672 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290672.setAttribute('id', 'smo290672');
const smo290673 = new VF.Annotation('bun');
smo290673.setAttribute('id', 'smo290673');
smo290673.setFont('times', 12, 'normal');
smo290673.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290672.addModifier(smo290673);
smo290673.addClass('lyric lyric-0');
smo290696v0ar.push(smo290672);
const smo290674 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290674.setAttribute('id', 'smo290674');
smo290696v0ar.push(smo290674);
const smo290675 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290675.setAttribute('id', 'smo290675');
smo290696v0ar.push(smo290675);
const smo290676 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290676.setAttribute('id', 'smo290676');
const smo290677 = new VF.Annotation('Man');
smo290677.setAttribute('id', 'smo290677');
smo290677.setFont('times', 12, 'normal');
smo290677.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290676.addModifier(smo290677);
smo290677.addClass('lyric lyric-0 lyric-hyphen');
smo290696v0ar.push(smo290676);
const smo290678 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290678.setAttribute('id', 'smo290678');
smo290696v0ar.push(smo290678);
const smo290679 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo290679.setAttribute('id', 'smo290679');
const smo2906790acc = new VF.Accidental('b');
smo290679.addModifier(smo2906790acc, 0);
const smo290680 = new VF.Annotation('ding');
smo290680.setAttribute('id', 'smo290680');
smo290680.setFont('times', 12, 'normal');
smo290680.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290679.addModifier(smo290680);
smo290680.addClass('lyric lyric-0 lyric-hyphen');
smo290696v0ar.push(smo290679);
smo290696v0.addTickables(smo290696v0ar)
fmtsmo29069664.joinVoices([smo290696v0]);
const fmtsmo29375064 = new VF.Formatter();
//
// voices and notes for stave 11 64
const smo293750v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293750v0ar = [];
const smo293726 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293726.setAttribute('id', 'smo293726');
const smo293727 = new VF.Annotation('bun');
smo293727.setAttribute('id', 'smo293727');
smo293727.setFont('times', 12, 'normal');
smo293727.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293726.addModifier(smo293727);
smo293727.addClass('lyric lyric-0');
smo293750v0ar.push(smo293726);
const smo293728 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293728.setAttribute('id', 'smo293728');
smo293750v0ar.push(smo293728);
const smo293729 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293729.setAttribute('id', 'smo293729');
smo293750v0ar.push(smo293729);
const smo293730 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293730.setAttribute('id', 'smo293730');
const smo293731 = new VF.Annotation('Man');
smo293731.setAttribute('id', 'smo293731');
smo293731.setFont('times', 12, 'normal');
smo293731.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293730.addModifier(smo293731);
smo293731.addClass('lyric lyric-0 lyric-hyphen');
smo293750v0ar.push(smo293730);
const smo293732 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293732.setAttribute('id', 'smo293732');
smo293750v0ar.push(smo293732);
const smo293733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo293733.setAttribute('id', 'smo293733');
const smo2937330acc = new VF.Accidental('b');
smo293733.addModifier(smo2937330acc, 0);
const smo293734 = new VF.Annotation('ding');
smo293734.setAttribute('id', 'smo293734');
smo293734.setFont('times', 12, 'normal');
smo293734.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293733.addModifier(smo293734);
smo293734.addClass('lyric lyric-0 lyric-hyphen');
smo293750v0ar.push(smo293733);
smo293750v0.addTickables(smo293750v0ar)
fmtsmo29375064.joinVoices([smo293750v0]);
const fmtsmo29679364 = new VF.Formatter();
//
// voices and notes for stave 12 64
const smo296793v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296793v0ar = [];
const smo296769 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo296769.setAttribute('id', 'smo296769');
const smo296770 = new VF.Annotation('bun');
smo296770.setAttribute('id', 'smo296770');
smo296770.setFont('times', 12, 'normal');
smo296770.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296769.addModifier(smo296770);
smo296770.addClass('lyric lyric-0');
smo296793v0ar.push(smo296769);
const smo296771 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo296771.setAttribute('id', 'smo296771');
smo296793v0ar.push(smo296771);
const smo296772 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo296772.setAttribute('id', 'smo296772');
smo296793v0ar.push(smo296772);
const smo296773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo296773.setAttribute('id', 'smo296773');
const smo296774 = new VF.Annotation('Man');
smo296774.setAttribute('id', 'smo296774');
smo296774.setFont('times', 12, 'normal');
smo296774.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296773.addModifier(smo296774);
smo296774.addClass('lyric lyric-0 lyric-hyphen');
smo296793v0ar.push(smo296773);
const smo296775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo296775.setAttribute('id', 'smo296775');
smo296793v0ar.push(smo296775);
const smo296776 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo296776.setAttribute('id', 'smo296776');
const smo2967760acc = new VF.Accidental('b');
smo296776.addModifier(smo2967760acc, 0);
const smo296777 = new VF.Annotation('ding');
smo296777.setAttribute('id', 'smo296777');
smo296777.setFont('times', 12, 'normal');
smo296777.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296776.addModifier(smo296777);
smo296777.addClass('lyric lyric-0 lyric-hyphen');
smo296793v0ar.push(smo296776);
smo296793v0.addTickables(smo296793v0ar)
fmtsmo29679364.joinVoices([smo296793v0]);
const fmtsmo30000564 = new VF.Formatter();
//
// voices and notes for stave 13 64
const smo300005v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300005v0ar = [];
const smo299985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo299985.setAttribute('id', 'smo299985');
smo299985.addModifier(new VF.Dot(), 0);
smo299985.addModifier(new VF.Dot(), 1);
smo299985.addModifier(new VF.Dot(), 2);
smo300005v0ar.push(smo299985);
const smo299986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo299986.setAttribute('id', 'smo299986');
smo300005v0ar.push(smo299986);
const smo299987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo299987.setAttribute('id', 'smo299987');
smo300005v0ar.push(smo299987);
const smo299988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo299988.setAttribute('id', 'smo299988');
const smo2999882acc = new VF.Accidental('b');
smo299988.addModifier(smo2999882acc, 2);
smo300005v0ar.push(smo299988);
const smo299989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo299989.setAttribute('id', 'smo299989');
smo300005v0ar.push(smo299989);
smo300005v0.addTickables(smo300005v0ar)
fmtsmo30000564.joinVoices([smo300005v0]);
const fmtsmo30321864 = new VF.Formatter();
//
// voices and notes for stave 14 64
const smo303218v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303218v0ar = [];
const smo303198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo303198.setAttribute('id', 'smo303198');
smo303198.addModifier(new VF.Dot(), 0);
smo303198.addModifier(new VF.Dot(), 1);
smo303198.addModifier(new VF.Dot(), 2);
smo303218v0ar.push(smo303198);
const smo303199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo303199.setAttribute('id', 'smo303199');
smo303218v0ar.push(smo303199);
const smo303200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo303200.setAttribute('id', 'smo303200');
smo303218v0ar.push(smo303200);
const smo303201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo303201.setAttribute('id', 'smo303201');
const smo3032012acc = new VF.Accidental('b');
smo303201.addModifier(smo3032012acc, 2);
smo303218v0ar.push(smo303201);
const smo303202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo303202.setAttribute('id', 'smo303202');
smo303218v0ar.push(smo303202);
smo303218v0.addTickables(smo303218v0ar)
fmtsmo30321864.joinVoices([smo303218v0]);
const fmtsmo30641364 = new VF.Formatter();
//
// voices and notes for stave 15 64
const smo306413v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306413v0ar = [];
const smo306393 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo306393.setAttribute('id', 'smo306393');
smo306393.addModifier(new VF.Dot(), 0);
smo306413v0ar.push(smo306393);
const smo306394 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo306394.setAttribute('id', 'smo306394');
smo306413v0ar.push(smo306394);
const smo306395 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo306395.setAttribute('id', 'smo306395');
smo306413v0ar.push(smo306395);
const smo306396 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo306396.setAttribute('id', 'smo306396');
smo306413v0ar.push(smo306396);
const smo306397 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo306397.setAttribute('id', 'smo306397');
smo306413v0ar.push(smo306397);
smo306413v0.addTickables(smo306413v0ar)
fmtsmo30641364.joinVoices([smo306413v0]);
const fmtsmo30953164 = new VF.Formatter();
//
// voices and notes for stave 16 64
const smo309531v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309531v0ar = [];
const smo309512 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo309512.setAttribute('id', 'smo309512');
smo309512.addModifier(new VF.Dot(), 0);
smo309531v0ar.push(smo309512);
const smo309513 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo309513.setAttribute('id', 'smo309513');
smo309531v0ar.push(smo309513);
const smo309514 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo309514.setAttribute('id', 'smo309514');
smo309531v0ar.push(smo309514);
const smo309515 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo309515.setAttribute('id', 'smo309515');
smo309531v0ar.push(smo309515);
smo309531v0.addTickables(smo309531v0ar)
fmtsmo30953164.joinVoices([smo309531v0]);
const fmtsmo31272064 = new VF.Formatter();
//
// voices and notes for stave 17 64
const smo312720v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312720v0ar = [];
const smo312693 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312693.setAttribute('id', 'smo312693');
const smo312694 = new VF.Annotation('bun');
smo312694.setAttribute('id', 'smo312694');
smo312694.setFont('times', 12, 'normal');
smo312694.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo312693.addModifier(smo312694);
smo312694.addClass('lyric lyric-0');
smo312720v0ar.push(smo312693);
const smo312695 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo312695.setAttribute('id', 'smo312695');
smo312720v0ar.push(smo312695);
const smo312696 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo312696.setAttribute('id', 'smo312696');
smo312720v0ar.push(smo312696);
const smo312697 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312697.setAttribute('id', 'smo312697');
smo312720v0ar.push(smo312697);
smo312720v0.addTickables(smo312720v0ar)
fmtsmo31272064.joinVoices([smo312720v0]);
const smo312720v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312720v1ar = [];
const smo312698 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312698.setAttribute('id', 'smo312698');
smo312698.setStyle({ fillStyle: '#aaaaaa7f' });
smo312720v1ar.push(smo312698);
const smo312699 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312699.setAttribute('id', 'smo312699');
smo312699.setStyle({ fillStyle: '#aaaaaa7f' });
smo312720v1ar.push(smo312699);
const smo312700 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312700.setAttribute('id', 'smo312700');
smo312700.setStyle({ fillStyle: '#aaaaaa7f' });
smo312720v1ar.push(smo312700);
const smo312701 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312701.setAttribute('id', 'smo312701');
smo312701.setStyle({ fillStyle: '#aaaaaa7f' });
smo312720v1ar.push(smo312701);
smo312720v1.addTickables(smo312720v1ar)
fmtsmo31272064.joinVoices([smo312720v1]);
const smo312720v2 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312720v2ar = [];
const smo312702 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo312702.setAttribute('id', 'smo312702');
smo312702.setStyle({ fillStyle: '#aaaaaa7f' });
const smo3127020acc = new VF.Accidental('n');
smo312702.addModifier(smo3127020acc, 0);
smo312720v2ar.push(smo312702);
const smo312703 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312703.setAttribute('id', 'smo312703');
smo312703.setStyle({ fillStyle: '#aaaaaa7f' });
smo312720v2ar.push(smo312703);
const smo312704 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312704.setAttribute('id', 'smo312704');
smo312704.setStyle({ fillStyle: '#aaaaaa7f' });
smo312720v2ar.push(smo312704);
smo312720v2.addTickables(smo312720v2ar)
fmtsmo31272064.joinVoices([smo312720v2]);
// create beam groups and tuplets for format grp smo314493 before formatting
const dirsmo405817 = smo259861.getStemDirection();
smo259861.setStemDirection(dirsmo405817);
smo259863.setStemDirection(dirsmo405817);
const smo405817 = new VF.Beam([smo259861,smo259863]);
const dirsmo405820 = smo262855.getStemDirection();
smo262855.setStemDirection(dirsmo405820);
smo262857.setStemDirection(dirsmo405820);
const smo405820 = new VF.Beam([smo262855,smo262857]);
const dirsmo405823 = smo265998.getStemDirection();
smo265998.setStemDirection(dirsmo405823);
smo266000.setStemDirection(dirsmo405823);
const smo405823 = new VF.Beam([smo265998,smo266000]);
const dirsmo405826 = smo269114.getStemDirection();
smo269114.setStemDirection(dirsmo405826);
smo269116.setStemDirection(dirsmo405826);
const smo405826 = new VF.Beam([smo269114,smo269116]);
const dirsmo405829 = smo272133.getStemDirection();
smo272133.setStemDirection(dirsmo405829);
smo272135.setStemDirection(dirsmo405829);
const smo405829 = new VF.Beam([smo272133,smo272135]);
 
// formatting measures in staff group smo314493
fmtsmo25988164.format([smo259881v0,smo262875v0,smo266018v0,smo269134v0,smo272153v0], 289);
const stavesmo259881 = new VF.Stave(507, 210, 303);
stavesmo259881.setAttribute('id', 'stavesmo259881');
stavesmo259881.setBegBarType(VF.Barline.type.NONE);
stavesmo259881.setContext(context);
stavesmo259881.draw();
smo259881v0.draw(context, stavesmo259881);
smo405817.setContext(context);
smo405817.draw();
const stavesmo262875 = new VF.Stave(507, 309, 303);
stavesmo262875.setAttribute('id', 'stavesmo262875');
stavesmo262875.setBegBarType(VF.Barline.type.NONE);
stavesmo262875.setContext(context);
stavesmo262875.draw();
smo262875v0.draw(context, stavesmo262875);
smo405820.setContext(context);
smo405820.draw();
const stavesmo266018 = new VF.Stave(507, 423, 303);
stavesmo266018.setAttribute('id', 'stavesmo266018');
stavesmo266018.setBegBarType(VF.Barline.type.NONE);
stavesmo266018.setContext(context);
stavesmo266018.draw();
smo266018v0.draw(context, stavesmo266018);
smo405823.setContext(context);
smo405823.draw();
const stavesmo269134 = new VF.Stave(507, 532, 303);
stavesmo269134.setAttribute('id', 'stavesmo269134');
stavesmo269134.setBegBarType(VF.Barline.type.NONE);
stavesmo269134.setContext(context);
stavesmo269134.draw();
smo269134v0.draw(context, stavesmo269134);
smo405826.setContext(context);
smo405826.draw();
const stavesmo272153 = new VF.Stave(507, 631, 303);
stavesmo272153.setAttribute('id', 'stavesmo272153');
stavesmo272153.setBegBarType(VF.Barline.type.NONE);
stavesmo272153.setContext(context);
stavesmo272153.draw();
smo272153v0.draw(context, stavesmo272153);
smo405829.setContext(context);
smo405829.draw();
// create beam groups and tuplets for format grp smo314495 before formatting
const dirsmo405832 = smo275240.getStemDirection();
smo275240.setStemDirection(dirsmo405832);
smo275242.setStemDirection(dirsmo405832);
const smo405832 = new VF.Beam([smo275240,smo275242]);
const dirsmo405835 = smo278352.getStemDirection();
smo278352.setStemDirection(dirsmo405835);
smo278354.setStemDirection(dirsmo405835);
const smo405835 = new VF.Beam([smo278352,smo278354]);
const dirsmo405838 = smo281461.getStemDirection();
smo281461.setStemDirection(dirsmo405838);
smo281463.setStemDirection(dirsmo405838);
const smo405838 = new VF.Beam([smo281461,smo281463]);
const dirsmo405841 = smo284547.getStemDirection();
smo284547.setStemDirection(dirsmo405841);
smo284549.setStemDirection(dirsmo405841);
const smo405841 = new VF.Beam([smo284547,smo284549]);
 
// formatting measures in staff group smo314495
fmtsmo27526064.format([smo275260v0,smo278372v0,smo281481v0,smo284567v0], 289);
const stavesmo275260 = new VF.Stave(507, 745, 303);
stavesmo275260.setAttribute('id', 'stavesmo275260');
stavesmo275260.setBegBarType(VF.Barline.type.NONE);
stavesmo275260.setContext(context);
stavesmo275260.draw();
smo275260v0.draw(context, stavesmo275260);
smo405832.setContext(context);
smo405832.draw();
const stavesmo278372 = new VF.Stave(507, 853, 303);
stavesmo278372.setAttribute('id', 'stavesmo278372');
stavesmo278372.setBegBarType(VF.Barline.type.NONE);
stavesmo278372.setContext(context);
stavesmo278372.draw();
smo278372v0.draw(context, stavesmo278372);
smo405835.setContext(context);
smo405835.draw();
const stavesmo281481 = new VF.Stave(507, 962, 303);
stavesmo281481.setAttribute('id', 'stavesmo281481');
stavesmo281481.setBegBarType(VF.Barline.type.NONE);
stavesmo281481.setContext(context);
stavesmo281481.draw();
smo281481v0.draw(context, stavesmo281481);
smo405838.setContext(context);
smo405838.draw();
const stavesmo284567 = new VF.Stave(507, 1071, 303);
stavesmo284567.setAttribute('id', 'stavesmo284567');
stavesmo284567.setBegBarType(VF.Barline.type.NONE);
stavesmo284567.setContext(context);
stavesmo284567.draw();
smo284567v0.draw(context, stavesmo284567);
smo405841.setContext(context);
smo405841.draw();
// create beam groups and tuplets for format grp smo314497 before formatting
const dirsmo405844 = smo287636.getStemDirection();
smo287636.setStemDirection(dirsmo405844);
smo287638.setStemDirection(dirsmo405844);
const smo405844 = new VF.Beam([smo287636,smo287638]);
const dirsmo405847 = smo290676.getStemDirection();
smo290676.setStemDirection(dirsmo405847);
smo290678.setStemDirection(dirsmo405847);
const smo405847 = new VF.Beam([smo290676,smo290678]);
const dirsmo405850 = smo293730.getStemDirection();
smo293730.setStemDirection(dirsmo405850);
smo293732.setStemDirection(dirsmo405850);
const smo405850 = new VF.Beam([smo293730,smo293732]);
const dirsmo405853 = smo296773.getStemDirection();
smo296773.setStemDirection(dirsmo405853);
smo296775.setStemDirection(dirsmo405853);
const smo405853 = new VF.Beam([smo296773,smo296775]);
 
// formatting measures in staff group smo314497
fmtsmo28765664.format([smo287656v0,smo290696v0,smo293750v0,smo296793v0], 289);
const stavesmo287656 = new VF.Stave(507, 1200, 303);
stavesmo287656.setAttribute('id', 'stavesmo287656');
stavesmo287656.setBegBarType(VF.Barline.type.NONE);
stavesmo287656.setContext(context);
stavesmo287656.draw();
smo287656v0.draw(context, stavesmo287656);
smo405844.setContext(context);
smo405844.draw();
const stavesmo290696 = new VF.Stave(507, 1329, 303);
stavesmo290696.setAttribute('id', 'stavesmo290696');
stavesmo290696.setBegBarType(VF.Barline.type.NONE);
stavesmo290696.setContext(context);
stavesmo290696.draw();
smo290696v0.draw(context, stavesmo290696);
smo405847.setContext(context);
smo405847.draw();
const stavesmo293750 = new VF.Stave(507, 1458, 303);
stavesmo293750.setAttribute('id', 'stavesmo293750');
stavesmo293750.setBegBarType(VF.Barline.type.NONE);
stavesmo293750.setContext(context);
stavesmo293750.draw();
smo293750v0.draw(context, stavesmo293750);
smo405850.setContext(context);
smo405850.draw();
const stavesmo296793 = new VF.Stave(507, 1587, 303);
stavesmo296793.setAttribute('id', 'stavesmo296793');
stavesmo296793.setBegBarType(VF.Barline.type.NONE);
stavesmo296793.setContext(context);
stavesmo296793.draw();
smo296793v0.draw(context, stavesmo296793);
smo405853.setContext(context);
smo405853.draw();
// create beam groups and tuplets for format grp smo301816 before formatting
const dirsmo405856 = smo299986.getStemDirection();
smo299986.setStemDirection(dirsmo405856);
smo299987.setStemDirection(dirsmo405856);
const smo405856 = new VF.Beam([smo299986,smo299987]);
 
// formatting measures in staff group smo301816
fmtsmo30000564.format([smo300005v0], 289);
const stavesmo300005 = new VF.Stave(507, 1726, 303);
stavesmo300005.setAttribute('id', 'stavesmo300005');
stavesmo300005.setBegBarType(VF.Barline.type.NONE);
stavesmo300005.setContext(context);
stavesmo300005.draw();
smo300005v0.draw(context, stavesmo300005);
smo405856.setContext(context);
smo405856.draw();
// create beam groups and tuplets for format grp smo314491 before formatting
const dirsmo405859 = smo303199.getStemDirection();
smo303199.setStemDirection(dirsmo405859);
smo303200.setStemDirection(dirsmo405859);
const smo405859 = new VF.Beam([smo303199,smo303200]);
const dirsmo405862 = smo306394.getStemDirection();
smo306394.setStemDirection(dirsmo405862);
smo306395.setStemDirection(dirsmo405862);
const smo405862 = new VF.Beam([smo306394,smo306395]);
 
// formatting measures in staff group smo314491
fmtsmo30321864.format([smo303218v0,smo306413v0], 289);
const stavesmo303218 = new VF.Stave(507, 1831, 303);
stavesmo303218.setAttribute('id', 'stavesmo303218');
stavesmo303218.setBegBarType(VF.Barline.type.NONE);
stavesmo303218.setContext(context);
stavesmo303218.draw();
smo303218v0.draw(context, stavesmo303218);
smo405859.setContext(context);
smo405859.draw();
const stavesmo306413 = new VF.Stave(507, 1917, 303);
stavesmo306413.setAttribute('id', 'stavesmo306413');
stavesmo306413.setBegBarType(VF.Barline.type.NONE);
stavesmo306413.setContext(context);
stavesmo306413.draw();
smo306413v0.draw(context, stavesmo306413);
smo405862.setContext(context);
smo405862.draw();
// create beam groups and tuplets for format grp smo311329 before formatting
 
// formatting measures in staff group smo311329
fmtsmo30953164.format([smo309531v0], 289);
const stavesmo309531 = new VF.Stave(507, 1988, 303);
stavesmo309531.setAttribute('id', 'stavesmo309531');
stavesmo309531.setBegBarType(VF.Barline.type.NONE);
stavesmo309531.setContext(context);
stavesmo309531.draw();
smo309531v0.draw(context, stavesmo309531);
// create beam groups and tuplets for format grp smo314485 before formatting
 
// formatting measures in staff group smo314485
fmtsmo31272064.format([smo312720v0,smo312720v1,smo312720v2], 289);
const stavesmo312720 = new VF.Stave(507, 2059, 303);
stavesmo312720.setAttribute('id', 'stavesmo312720');
stavesmo312720.setBegBarType(VF.Barline.type.NONE);
stavesmo312720.setContext(context);
stavesmo312720.draw();
smo312720v0.draw(context, stavesmo312720);
smo312720v1.draw(context, stavesmo312720);
smo312720v2.draw(context, stavesmo312720);
const fmtsmo25990865 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo259908v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259908v0ar = [];
const smo259882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo259882.setAttribute('id', 'smo259882');
const smo2598820acc = new VF.Accidental('n');
smo259882.addModifier(smo2598820acc, 0);
smo259908v0ar.push(smo259882);
const smo259883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259883.setAttribute('id', 'smo259883');
const smo259884 = new VF.Annotation('a');
smo259884.setAttribute('id', 'smo259884');
smo259884.setFont('times', 12, 'normal');
smo259884.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259883.addModifier(smo259884);
smo259884.addClass('lyric lyric-0');
smo259908v0ar.push(smo259883);
const smo259885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259885.setAttribute('id', 'smo259885');
smo259908v0ar.push(smo259885);
const smo259886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259886.setAttribute('id', 'smo259886');
const smo259887 = new VF.Annotation('Ki');
smo259887.setAttribute('id', 'smo259887');
smo259887.setFont('times', 12, 'normal');
smo259887.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259886.addModifier(smo259887);
smo259887.addClass('lyric lyric-0 lyric-hyphen');
smo259908v0ar.push(smo259886);
const smo259888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259888.setAttribute('id', 'smo259888');
smo259908v0ar.push(smo259888);
const smo259889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259889.setAttribute('id', 'smo259889');
const smo259890 = new VF.Annotation('ki');
smo259890.setAttribute('id', 'smo259890');
smo259890.setFont('times', 12, 'normal');
smo259890.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259889.addModifier(smo259890);
smo259890.addClass('lyric lyric-0');
smo259908v0ar.push(smo259889);
const smo259891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259891.setAttribute('id', 'smo259891');
const smo259892 = new VF.Annotation('ri');
smo259892.setAttribute('id', 'smo259892');
smo259892.setFont('times', 12, 'normal');
smo259892.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259891.addModifier(smo259892);
smo259892.addClass('lyric lyric-0');
smo259908v0ar.push(smo259891);
smo259908v0.addTickables(smo259908v0ar)
fmtsmo25990865.joinVoices([smo259908v0]);
const fmtsmo26290265 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo262902v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo262902v0ar = [];
const smo262876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo262876.setAttribute('id', 'smo262876');
const smo2628760acc = new VF.Accidental('n');
smo262876.addModifier(smo2628760acc, 0);
smo262902v0ar.push(smo262876);
const smo262877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo262877.setAttribute('id', 'smo262877');
const smo262878 = new VF.Annotation('a');
smo262878.setAttribute('id', 'smo262878');
smo262878.setFont('times', 12, 'normal');
smo262878.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262877.addModifier(smo262878);
smo262878.addClass('lyric lyric-0');
smo262902v0ar.push(smo262877);
const smo262879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262879.setAttribute('id', 'smo262879');
smo262902v0ar.push(smo262879);
const smo262880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo262880.setAttribute('id', 'smo262880');
const smo262881 = new VF.Annotation('Ki');
smo262881.setAttribute('id', 'smo262881');
smo262881.setFont('times', 12, 'normal');
smo262881.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262880.addModifier(smo262881);
smo262881.addClass('lyric lyric-0 lyric-hyphen');
smo262902v0ar.push(smo262880);
const smo262882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo262882.setAttribute('id', 'smo262882');
smo262902v0ar.push(smo262882);
const smo262883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo262883.setAttribute('id', 'smo262883');
const smo262884 = new VF.Annotation('ki');
smo262884.setAttribute('id', 'smo262884');
smo262884.setFont('times', 12, 'normal');
smo262884.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262883.addModifier(smo262884);
smo262884.addClass('lyric lyric-0');
smo262902v0ar.push(smo262883);
const smo262885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo262885.setAttribute('id', 'smo262885');
const smo262886 = new VF.Annotation('ri');
smo262886.setAttribute('id', 'smo262886');
smo262886.setFont('times', 12, 'normal');
smo262886.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262885.addModifier(smo262886);
smo262886.addClass('lyric lyric-0');
smo262902v0ar.push(smo262885);
smo262902v0.addTickables(smo262902v0ar)
fmtsmo26290265.joinVoices([smo262902v0]);
const fmtsmo26604565 = new VF.Formatter();
//
// voices and notes for stave 2 65
const smo266045v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266045v0ar = [];
const smo266019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo266019.setAttribute('id', 'smo266019');
const smo2660190acc = new VF.Accidental('n');
smo266019.addModifier(smo2660190acc, 0);
smo266045v0ar.push(smo266019);
const smo266020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266020.setAttribute('id', 'smo266020');
const smo266021 = new VF.Annotation('a');
smo266021.setAttribute('id', 'smo266021');
smo266021.setFont('times', 12, 'normal');
smo266021.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266020.addModifier(smo266021);
smo266021.addClass('lyric lyric-0');
smo266045v0ar.push(smo266020);
const smo266022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266022.setAttribute('id', 'smo266022');
smo266045v0ar.push(smo266022);
const smo266023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266023.setAttribute('id', 'smo266023');
const smo266024 = new VF.Annotation('Ki');
smo266024.setAttribute('id', 'smo266024');
smo266024.setFont('times', 12, 'normal');
smo266024.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266023.addModifier(smo266024);
smo266024.addClass('lyric lyric-0 lyric-hyphen');
smo266045v0ar.push(smo266023);
const smo266025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266025.setAttribute('id', 'smo266025');
smo266045v0ar.push(smo266025);
const smo266026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266026.setAttribute('id', 'smo266026');
const smo266027 = new VF.Annotation('ki');
smo266027.setAttribute('id', 'smo266027');
smo266027.setFont('times', 12, 'normal');
smo266027.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266026.addModifier(smo266027);
smo266027.addClass('lyric lyric-0');
smo266045v0ar.push(smo266026);
const smo266028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266028.setAttribute('id', 'smo266028');
const smo266029 = new VF.Annotation('ri');
smo266029.setAttribute('id', 'smo266029');
smo266029.setFont('times', 12, 'normal');
smo266029.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266028.addModifier(smo266029);
smo266029.addClass('lyric lyric-0');
smo266045v0ar.push(smo266028);
smo266045v0.addTickables(smo266045v0ar)
fmtsmo26604565.joinVoices([smo266045v0]);
const fmtsmo26916165 = new VF.Formatter();
//
// voices and notes for stave 3 65
const smo269161v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269161v0ar = [];
const smo269135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo269135.setAttribute('id', 'smo269135');
const smo2691350acc = new VF.Accidental('n');
smo269135.addModifier(smo2691350acc, 0);
smo269161v0ar.push(smo269135);
const smo269136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo269136.setAttribute('id', 'smo269136');
const smo269137 = new VF.Annotation('a');
smo269137.setAttribute('id', 'smo269137');
smo269137.setFont('times', 12, 'normal');
smo269137.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269136.addModifier(smo269137);
smo269137.addClass('lyric lyric-0');
smo269161v0ar.push(smo269136);
const smo269138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269138.setAttribute('id', 'smo269138');
smo269161v0ar.push(smo269138);
const smo269139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo269139.setAttribute('id', 'smo269139');
const smo269140 = new VF.Annotation('Ki');
smo269140.setAttribute('id', 'smo269140');
smo269140.setFont('times', 12, 'normal');
smo269140.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269139.addModifier(smo269140);
smo269140.addClass('lyric lyric-0 lyric-hyphen');
smo269161v0ar.push(smo269139);
const smo269141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo269141.setAttribute('id', 'smo269141');
smo269161v0ar.push(smo269141);
const smo269142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo269142.setAttribute('id', 'smo269142');
const smo269143 = new VF.Annotation('ki');
smo269143.setAttribute('id', 'smo269143');
smo269143.setFont('times', 12, 'normal');
smo269143.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269142.addModifier(smo269143);
smo269143.addClass('lyric lyric-0');
smo269161v0ar.push(smo269142);
const smo269144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo269144.setAttribute('id', 'smo269144');
const smo269145 = new VF.Annotation('ri');
smo269145.setAttribute('id', 'smo269145');
smo269145.setFont('times', 12, 'normal');
smo269145.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269144.addModifier(smo269145);
smo269145.addClass('lyric lyric-0');
smo269161v0ar.push(smo269144);
smo269161v0.addTickables(smo269161v0ar)
fmtsmo26916165.joinVoices([smo269161v0]);
const fmtsmo27218065 = new VF.Formatter();
//
// voices and notes for stave 4 65
const smo272180v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272180v0ar = [];
const smo272154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo272154.setAttribute('id', 'smo272154');
const smo2721540acc = new VF.Accidental('n');
smo272154.addModifier(smo2721540acc, 0);
smo272180v0ar.push(smo272154);
const smo272155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo272155.setAttribute('id', 'smo272155');
const smo272156 = new VF.Annotation('a');
smo272156.setAttribute('id', 'smo272156');
smo272156.setFont('times', 12, 'normal');
smo272156.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272155.addModifier(smo272156);
smo272156.addClass('lyric lyric-0');
smo272180v0ar.push(smo272155);
const smo272157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo272157.setAttribute('id', 'smo272157');
smo272180v0ar.push(smo272157);
const smo272158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo272158.setAttribute('id', 'smo272158');
const smo272159 = new VF.Annotation('Ki');
smo272159.setAttribute('id', 'smo272159');
smo272159.setFont('times', 12, 'normal');
smo272159.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272158.addModifier(smo272159);
smo272159.addClass('lyric lyric-0 lyric-hyphen');
smo272180v0ar.push(smo272158);
const smo272160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo272160.setAttribute('id', 'smo272160');
smo272180v0ar.push(smo272160);
const smo272161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo272161.setAttribute('id', 'smo272161');
const smo272162 = new VF.Annotation('ki');
smo272162.setAttribute('id', 'smo272162');
smo272162.setFont('times', 12, 'normal');
smo272162.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272161.addModifier(smo272162);
smo272162.addClass('lyric lyric-0');
smo272180v0ar.push(smo272161);
const smo272163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo272163.setAttribute('id', 'smo272163');
const smo272164 = new VF.Annotation('ri');
smo272164.setAttribute('id', 'smo272164');
smo272164.setFont('times', 12, 'normal');
smo272164.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272163.addModifier(smo272164);
smo272164.addClass('lyric lyric-0');
smo272180v0ar.push(smo272163);
smo272180v0.addTickables(smo272180v0ar)
fmtsmo27218065.joinVoices([smo272180v0]);
const fmtsmo27528765 = new VF.Formatter();
//
// voices and notes for stave 5 65
const smo275287v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275287v0ar = [];
const smo275261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo275261.setAttribute('id', 'smo275261');
const smo2752610acc = new VF.Accidental('n');
smo275261.addModifier(smo2752610acc, 0);
smo275287v0ar.push(smo275261);
const smo275262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo275262.setAttribute('id', 'smo275262');
const smo275263 = new VF.Annotation('a');
smo275263.setAttribute('id', 'smo275263');
smo275263.setFont('times', 12, 'normal');
smo275263.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275262.addModifier(smo275263);
smo275263.addClass('lyric lyric-0');
smo275287v0ar.push(smo275262);
const smo275264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo275264.setAttribute('id', 'smo275264');
smo275287v0ar.push(smo275264);
const smo275265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo275265.setAttribute('id', 'smo275265');
const smo275266 = new VF.Annotation('Ki');
smo275266.setAttribute('id', 'smo275266');
smo275266.setFont('times', 12, 'normal');
smo275266.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275265.addModifier(smo275266);
smo275266.addClass('lyric lyric-0 lyric-hyphen');
smo275287v0ar.push(smo275265);
const smo275267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo275267.setAttribute('id', 'smo275267');
smo275287v0ar.push(smo275267);
const smo275268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo275268.setAttribute('id', 'smo275268');
const smo275269 = new VF.Annotation('ki');
smo275269.setAttribute('id', 'smo275269');
smo275269.setFont('times', 12, 'normal');
smo275269.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275268.addModifier(smo275269);
smo275269.addClass('lyric lyric-0');
smo275287v0ar.push(smo275268);
const smo275270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo275270.setAttribute('id', 'smo275270');
const smo275271 = new VF.Annotation('ri');
smo275271.setAttribute('id', 'smo275271');
smo275271.setFont('times', 12, 'normal');
smo275271.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275270.addModifier(smo275271);
smo275271.addClass('lyric lyric-0');
smo275287v0ar.push(smo275270);
smo275287v0.addTickables(smo275287v0ar)
fmtsmo27528765.joinVoices([smo275287v0]);
const fmtsmo27839965 = new VF.Formatter();
//
// voices and notes for stave 6 65
const smo278399v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278399v0ar = [];
const smo278373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo278373.setAttribute('id', 'smo278373');
const smo2783730acc = new VF.Accidental('n');
smo278373.addModifier(smo2783730acc, 0);
smo278399v0ar.push(smo278373);
const smo278374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo278374.setAttribute('id', 'smo278374');
const smo278375 = new VF.Annotation('a');
smo278375.setAttribute('id', 'smo278375');
smo278375.setFont('times', 12, 'normal');
smo278375.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278374.addModifier(smo278375);
smo278375.addClass('lyric lyric-0');
smo278399v0ar.push(smo278374);
const smo278376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278376.setAttribute('id', 'smo278376');
smo278399v0ar.push(smo278376);
const smo278377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo278377.setAttribute('id', 'smo278377');
const smo278378 = new VF.Annotation('Ki');
smo278378.setAttribute('id', 'smo278378');
smo278378.setFont('times', 12, 'normal');
smo278378.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278377.addModifier(smo278378);
smo278378.addClass('lyric lyric-0 lyric-hyphen');
smo278399v0ar.push(smo278377);
const smo278379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo278379.setAttribute('id', 'smo278379');
smo278399v0ar.push(smo278379);
const smo278380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo278380.setAttribute('id', 'smo278380');
const smo278381 = new VF.Annotation('ki');
smo278381.setAttribute('id', 'smo278381');
smo278381.setFont('times', 12, 'normal');
smo278381.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278380.addModifier(smo278381);
smo278381.addClass('lyric lyric-0');
smo278399v0ar.push(smo278380);
const smo278382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo278382.setAttribute('id', 'smo278382');
const smo278383 = new VF.Annotation('ri');
smo278383.setAttribute('id', 'smo278383');
smo278383.setFont('times', 12, 'normal');
smo278383.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278382.addModifier(smo278383);
smo278383.addClass('lyric lyric-0');
smo278399v0ar.push(smo278382);
smo278399v0.addTickables(smo278399v0ar)
fmtsmo27839965.joinVoices([smo278399v0]);
const fmtsmo28150865 = new VF.Formatter();
//
// voices and notes for stave 7 65
const smo281508v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281508v0ar = [];
const smo281482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo281482.setAttribute('id', 'smo281482');
const smo2814820acc = new VF.Accidental('n');
smo281482.addModifier(smo2814820acc, 0);
smo281508v0ar.push(smo281482);
const smo281483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281483.setAttribute('id', 'smo281483');
const smo281484 = new VF.Annotation('a');
smo281484.setAttribute('id', 'smo281484');
smo281484.setFont('times', 12, 'normal');
smo281484.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281483.addModifier(smo281484);
smo281484.addClass('lyric lyric-0');
smo281508v0ar.push(smo281483);
const smo281485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281485.setAttribute('id', 'smo281485');
smo281508v0ar.push(smo281485);
const smo281486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281486.setAttribute('id', 'smo281486');
const smo281487 = new VF.Annotation('Ki');
smo281487.setAttribute('id', 'smo281487');
smo281487.setFont('times', 12, 'normal');
smo281487.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281486.addModifier(smo281487);
smo281487.addClass('lyric lyric-0 lyric-hyphen');
smo281508v0ar.push(smo281486);
const smo281488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281488.setAttribute('id', 'smo281488');
smo281508v0ar.push(smo281488);
const smo281489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281489.setAttribute('id', 'smo281489');
const smo281490 = new VF.Annotation('ki');
smo281490.setAttribute('id', 'smo281490');
smo281490.setFont('times', 12, 'normal');
smo281490.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281489.addModifier(smo281490);
smo281490.addClass('lyric lyric-0');
smo281508v0ar.push(smo281489);
const smo281491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281491.setAttribute('id', 'smo281491');
const smo281492 = new VF.Annotation('ri');
smo281492.setAttribute('id', 'smo281492');
smo281492.setFont('times', 12, 'normal');
smo281492.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281491.addModifier(smo281492);
smo281492.addClass('lyric lyric-0');
smo281508v0ar.push(smo281491);
smo281508v0.addTickables(smo281508v0ar)
fmtsmo28150865.joinVoices([smo281508v0]);
const fmtsmo28459465 = new VF.Formatter();
//
// voices and notes for stave 8 65
const smo284594v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284594v0ar = [];
const smo284568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo284568.setAttribute('id', 'smo284568');
const smo2845680acc = new VF.Accidental('n');
smo284568.addModifier(smo2845680acc, 0);
smo284594v0ar.push(smo284568);
const smo284569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo284569.setAttribute('id', 'smo284569');
const smo284570 = new VF.Annotation('a');
smo284570.setAttribute('id', 'smo284570');
smo284570.setFont('times', 12, 'normal');
smo284570.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284569.addModifier(smo284570);
smo284570.addClass('lyric lyric-0');
smo284594v0ar.push(smo284569);
const smo284571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo284571.setAttribute('id', 'smo284571');
smo284594v0ar.push(smo284571);
const smo284572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo284572.setAttribute('id', 'smo284572');
const smo284573 = new VF.Annotation('Ki');
smo284573.setAttribute('id', 'smo284573');
smo284573.setFont('times', 12, 'normal');
smo284573.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284572.addModifier(smo284573);
smo284573.addClass('lyric lyric-0 lyric-hyphen');
smo284594v0ar.push(smo284572);
const smo284574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo284574.setAttribute('id', 'smo284574');
smo284594v0ar.push(smo284574);
const smo284575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo284575.setAttribute('id', 'smo284575');
const smo284576 = new VF.Annotation('ki');
smo284576.setAttribute('id', 'smo284576');
smo284576.setFont('times', 12, 'normal');
smo284576.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284575.addModifier(smo284576);
smo284576.addClass('lyric lyric-0');
smo284594v0ar.push(smo284575);
const smo284577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo284577.setAttribute('id', 'smo284577');
const smo284578 = new VF.Annotation('ri');
smo284578.setAttribute('id', 'smo284578');
smo284578.setFont('times', 12, 'normal');
smo284578.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284577.addModifier(smo284578);
smo284578.addClass('lyric lyric-0');
smo284594v0ar.push(smo284577);
smo284594v0.addTickables(smo284594v0ar)
fmtsmo28459465.joinVoices([smo284594v0]);
const fmtsmo28768365 = new VF.Formatter();
//
// voices and notes for stave 9 65
const smo287683v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287683v0ar = [];
const smo287657 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo287657.setAttribute('id', 'smo287657');
const smo2876570acc = new VF.Accidental('b');
smo287657.addModifier(smo2876570acc, 0);
smo287683v0ar.push(smo287657);
const smo287658 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287658.setAttribute('id', 'smo287658');
const smo287659 = new VF.Annotation('a');
smo287659.setAttribute('id', 'smo287659');
smo287659.setFont('times', 12, 'normal');
smo287659.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287658.addModifier(smo287659);
smo287659.addClass('lyric lyric-0');
smo287683v0ar.push(smo287658);
const smo287660 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287660.setAttribute('id', 'smo287660');
smo287683v0ar.push(smo287660);
const smo287661 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287661.setAttribute('id', 'smo287661');
const smo287662 = new VF.Annotation('Ki');
smo287662.setAttribute('id', 'smo287662');
smo287662.setFont('times', 12, 'normal');
smo287662.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287661.addModifier(smo287662);
smo287662.addClass('lyric lyric-0 lyric-hyphen');
smo287683v0ar.push(smo287661);
const smo287663 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287663.setAttribute('id', 'smo287663');
smo287683v0ar.push(smo287663);
const smo287664 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287664.setAttribute('id', 'smo287664');
const smo287665 = new VF.Annotation('ki');
smo287665.setAttribute('id', 'smo287665');
smo287665.setFont('times', 12, 'normal');
smo287665.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287664.addModifier(smo287665);
smo287665.addClass('lyric lyric-0');
smo287683v0ar.push(smo287664);
const smo287666 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287666.setAttribute('id', 'smo287666');
const smo287667 = new VF.Annotation('ri');
smo287667.setAttribute('id', 'smo287667');
smo287667.setFont('times', 12, 'normal');
smo287667.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287666.addModifier(smo287667);
smo287667.addClass('lyric lyric-0');
smo287683v0ar.push(smo287666);
smo287683v0.addTickables(smo287683v0ar)
fmtsmo28768365.joinVoices([smo287683v0]);
const fmtsmo29072365 = new VF.Formatter();
//
// voices and notes for stave 10 65
const smo290723v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290723v0ar = [];
const smo290697 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo290697.setAttribute('id', 'smo290697');
const smo2906970acc = new VF.Accidental('b');
smo290697.addModifier(smo2906970acc, 0);
smo290723v0ar.push(smo290697);
const smo290698 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290698.setAttribute('id', 'smo290698');
const smo290699 = new VF.Annotation('a');
smo290699.setAttribute('id', 'smo290699');
smo290699.setFont('times', 12, 'normal');
smo290699.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290698.addModifier(smo290699);
smo290699.addClass('lyric lyric-0');
smo290723v0ar.push(smo290698);
const smo290700 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290700.setAttribute('id', 'smo290700');
smo290723v0ar.push(smo290700);
const smo290701 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290701.setAttribute('id', 'smo290701');
const smo290702 = new VF.Annotation('Ki');
smo290702.setAttribute('id', 'smo290702');
smo290702.setFont('times', 12, 'normal');
smo290702.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290701.addModifier(smo290702);
smo290702.addClass('lyric lyric-0 lyric-hyphen');
smo290723v0ar.push(smo290701);
const smo290703 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290703.setAttribute('id', 'smo290703');
smo290723v0ar.push(smo290703);
const smo290704 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290704.setAttribute('id', 'smo290704');
const smo290705 = new VF.Annotation('ki');
smo290705.setAttribute('id', 'smo290705');
smo290705.setFont('times', 12, 'normal');
smo290705.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290704.addModifier(smo290705);
smo290705.addClass('lyric lyric-0');
smo290723v0ar.push(smo290704);
const smo290706 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290706.setAttribute('id', 'smo290706');
const smo290707 = new VF.Annotation('ri');
smo290707.setAttribute('id', 'smo290707');
smo290707.setFont('times', 12, 'normal');
smo290707.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290706.addModifier(smo290707);
smo290707.addClass('lyric lyric-0');
smo290723v0ar.push(smo290706);
smo290723v0.addTickables(smo290723v0ar)
fmtsmo29072365.joinVoices([smo290723v0]);
const fmtsmo29377765 = new VF.Formatter();
//
// voices and notes for stave 11 65
const smo293777v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293777v0ar = [];
const smo293751 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo293751.setAttribute('id', 'smo293751');
const smo2937510acc = new VF.Accidental('b');
smo293751.addModifier(smo2937510acc, 0);
smo293777v0ar.push(smo293751);
const smo293752 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293752.setAttribute('id', 'smo293752');
const smo293753 = new VF.Annotation('a');
smo293753.setAttribute('id', 'smo293753');
smo293753.setFont('times', 12, 'normal');
smo293753.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293752.addModifier(smo293753);
smo293753.addClass('lyric lyric-0');
smo293777v0ar.push(smo293752);
const smo293754 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293754.setAttribute('id', 'smo293754');
smo293777v0ar.push(smo293754);
const smo293755 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293755.setAttribute('id', 'smo293755');
const smo293756 = new VF.Annotation('Ki');
smo293756.setAttribute('id', 'smo293756');
smo293756.setFont('times', 12, 'normal');
smo293756.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293755.addModifier(smo293756);
smo293756.addClass('lyric lyric-0 lyric-hyphen');
smo293777v0ar.push(smo293755);
const smo293757 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293757.setAttribute('id', 'smo293757');
smo293777v0ar.push(smo293757);
const smo293758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293758.setAttribute('id', 'smo293758');
const smo293759 = new VF.Annotation('ki');
smo293759.setAttribute('id', 'smo293759');
smo293759.setFont('times', 12, 'normal');
smo293759.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293758.addModifier(smo293759);
smo293759.addClass('lyric lyric-0');
smo293777v0ar.push(smo293758);
const smo293760 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293760.setAttribute('id', 'smo293760');
const smo293761 = new VF.Annotation('ri');
smo293761.setAttribute('id', 'smo293761');
smo293761.setFont('times', 12, 'normal');
smo293761.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293760.addModifier(smo293761);
smo293761.addClass('lyric lyric-0');
smo293777v0ar.push(smo293760);
smo293777v0.addTickables(smo293777v0ar)
fmtsmo29377765.joinVoices([smo293777v0]);
const fmtsmo29682065 = new VF.Formatter();
//
// voices and notes for stave 12 65
const smo296820v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296820v0ar = [];
const smo296794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo296794.setAttribute('id', 'smo296794');
const smo2967940acc = new VF.Accidental('b');
smo296794.addModifier(smo2967940acc, 0);
smo296820v0ar.push(smo296794);
const smo296795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo296795.setAttribute('id', 'smo296795');
const smo296796 = new VF.Annotation('a');
smo296796.setAttribute('id', 'smo296796');
smo296796.setFont('times', 12, 'normal');
smo296796.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296795.addModifier(smo296796);
smo296796.addClass('lyric lyric-0');
smo296820v0ar.push(smo296795);
const smo296797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo296797.setAttribute('id', 'smo296797');
smo296820v0ar.push(smo296797);
const smo296798 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo296798.setAttribute('id', 'smo296798');
const smo296799 = new VF.Annotation('Ki');
smo296799.setAttribute('id', 'smo296799');
smo296799.setFont('times', 12, 'normal');
smo296799.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296798.addModifier(smo296799);
smo296799.addClass('lyric lyric-0 lyric-hyphen');
smo296820v0ar.push(smo296798);
const smo296800 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo296800.setAttribute('id', 'smo296800');
smo296820v0ar.push(smo296800);
const smo296801 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo296801.setAttribute('id', 'smo296801');
const smo296802 = new VF.Annotation('ki');
smo296802.setAttribute('id', 'smo296802');
smo296802.setFont('times', 12, 'normal');
smo296802.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296801.addModifier(smo296802);
smo296802.addClass('lyric lyric-0');
smo296820v0ar.push(smo296801);
const smo296803 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo296803.setAttribute('id', 'smo296803');
const smo296804 = new VF.Annotation('ri');
smo296804.setAttribute('id', 'smo296804');
smo296804.setFont('times', 12, 'normal');
smo296804.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296803.addModifier(smo296804);
smo296804.addClass('lyric lyric-0');
smo296820v0ar.push(smo296803);
smo296820v0.addTickables(smo296820v0ar)
fmtsmo29682065.joinVoices([smo296820v0]);
const fmtsmo30002665 = new VF.Formatter();
//
// voices and notes for stave 13 65
const smo300026v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300026v0ar = [];
const smo300006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n","cn/5/n","eb/5/n"]}'))
smo300006.setAttribute('id', 'smo300006');
const smo3000062acc = new VF.Accidental('b');
smo300006.addModifier(smo3000062acc, 2);
smo300006.addModifier(new VF.Dot(), 0);
smo300006.addModifier(new VF.Dot(), 1);
smo300006.addModifier(new VF.Dot(), 2);
smo300026v0ar.push(smo300006);
const smo300007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo300007.setAttribute('id', 'smo300007');
const smo3000070acc = new VF.Accidental('#');
smo300007.addModifier(smo3000070acc, 0);
smo300026v0ar.push(smo300007);
const smo300008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo300008.setAttribute('id', 'smo300008');
smo300026v0ar.push(smo300008);
const smo300009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo300009.setAttribute('id', 'smo300009');
smo300026v0ar.push(smo300009);
const smo300010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo300010.setAttribute('id', 'smo300010');
smo300026v0ar.push(smo300010);
smo300026v0.addTickables(smo300026v0ar)
fmtsmo30002665.joinVoices([smo300026v0]);
const fmtsmo30323965 = new VF.Formatter();
//
// voices and notes for stave 14 65
const smo303239v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303239v0ar = [];
const smo303219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n","cn/5/n","eb/5/n"]}'))
smo303219.setAttribute('id', 'smo303219');
const smo3032192acc = new VF.Accidental('b');
smo303219.addModifier(smo3032192acc, 2);
smo303219.addModifier(new VF.Dot(), 0);
smo303219.addModifier(new VF.Dot(), 1);
smo303219.addModifier(new VF.Dot(), 2);
smo303239v0ar.push(smo303219);
const smo303220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo303220.setAttribute('id', 'smo303220');
const smo3032200acc = new VF.Accidental('#');
smo303220.addModifier(smo3032200acc, 0);
smo303239v0ar.push(smo303220);
const smo303221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo303221.setAttribute('id', 'smo303221');
smo303239v0ar.push(smo303221);
const smo303222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo303222.setAttribute('id', 'smo303222');
smo303239v0ar.push(smo303222);
const smo303223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo303223.setAttribute('id', 'smo303223');
smo303239v0ar.push(smo303223);
smo303239v0.addTickables(smo303239v0ar)
fmtsmo30323965.joinVoices([smo303239v0]);
const fmtsmo30643465 = new VF.Formatter();
//
// voices and notes for stave 15 65
const smo306434v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306434v0ar = [];
const smo306414 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo306414.setAttribute('id', 'smo306414');
smo306414.addModifier(new VF.Dot(), 0);
smo306434v0ar.push(smo306414);
const smo306415 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo306415.setAttribute('id', 'smo306415');
const smo3064150acc = new VF.Accidental('#');
smo306415.addModifier(smo3064150acc, 0);
smo306434v0ar.push(smo306415);
const smo306416 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo306416.setAttribute('id', 'smo306416');
smo306434v0ar.push(smo306416);
const smo306417 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo306417.setAttribute('id', 'smo306417');
smo306434v0ar.push(smo306417);
const smo306418 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo306418.setAttribute('id', 'smo306418');
smo306434v0ar.push(smo306418);
smo306434v0.addTickables(smo306434v0ar)
fmtsmo30643465.joinVoices([smo306434v0]);
const fmtsmo30955165 = new VF.Formatter();
//
// voices and notes for stave 16 65
const smo309551v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309551v0ar = [];
const smo309532 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo309532.setAttribute('id', 'smo309532');
smo309532.addModifier(new VF.Dot(), 0);
smo309551v0ar.push(smo309532);
const smo309533 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo309533.setAttribute('id', 'smo309533');
smo309551v0ar.push(smo309533);
const smo309534 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo309534.setAttribute('id', 'smo309534');
smo309551v0ar.push(smo309534);
const smo309535 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo309535.setAttribute('id', 'smo309535');
smo309551v0ar.push(smo309535);
smo309551v0.addTickables(smo309551v0ar)
fmtsmo30955165.joinVoices([smo309551v0]);
const fmtsmo31274065 = new VF.Formatter();
//
// voices and notes for stave 17 65
const smo312740v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312740v0ar = [];
const smo312721 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo312721.setAttribute('id', 'smo312721');
const smo3127210acc = new VF.Accidental('n');
smo312721.addModifier(smo3127210acc, 0);
smo312721.addModifier(new VF.Dot(), 0);
smo312740v0ar.push(smo312721);
const smo312722 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo312722.setAttribute('id', 'smo312722');
smo312740v0ar.push(smo312722);
const smo312723 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo312723.setAttribute('id', 'smo312723');
smo312740v0ar.push(smo312723);
const smo312724 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo312724.setAttribute('id', 'smo312724');
smo312740v0ar.push(smo312724);
smo312740v0.addTickables(smo312740v0ar)
fmtsmo31274065.joinVoices([smo312740v0]);
// create beam groups and tuplets for format grp smo314493 before formatting
const dirsmo405869 = smo259882.getStemDirection();
smo259882.setStemDirection(dirsmo405869);
smo259883.setStemDirection(dirsmo405869);
const smo405869 = new VF.Beam([smo259882,smo259883]);
const dirsmo405870 = smo259886.getStemDirection();
smo259886.setStemDirection(dirsmo405870);
smo259888.setStemDirection(dirsmo405870);
const smo405870 = new VF.Beam([smo259886,smo259888]);
const dirsmo405873 = smo262876.getStemDirection();
smo262876.setStemDirection(dirsmo405873);
smo262877.setStemDirection(dirsmo405873);
const smo405873 = new VF.Beam([smo262876,smo262877]);
const dirsmo405874 = smo262880.getStemDirection();
smo262880.setStemDirection(dirsmo405874);
smo262882.setStemDirection(dirsmo405874);
const smo405874 = new VF.Beam([smo262880,smo262882]);
const dirsmo405877 = smo266019.getStemDirection();
smo266019.setStemDirection(dirsmo405877);
smo266020.setStemDirection(dirsmo405877);
const smo405877 = new VF.Beam([smo266019,smo266020]);
const dirsmo405878 = smo266023.getStemDirection();
smo266023.setStemDirection(dirsmo405878);
smo266025.setStemDirection(dirsmo405878);
const smo405878 = new VF.Beam([smo266023,smo266025]);
const dirsmo405881 = smo269135.getStemDirection();
smo269135.setStemDirection(dirsmo405881);
smo269136.setStemDirection(dirsmo405881);
const smo405881 = new VF.Beam([smo269135,smo269136]);
const dirsmo405882 = smo269139.getStemDirection();
smo269139.setStemDirection(dirsmo405882);
smo269141.setStemDirection(dirsmo405882);
const smo405882 = new VF.Beam([smo269139,smo269141]);
const dirsmo405885 = smo272154.getStemDirection();
smo272154.setStemDirection(dirsmo405885);
smo272155.setStemDirection(dirsmo405885);
const smo405885 = new VF.Beam([smo272154,smo272155]);
const dirsmo405886 = smo272158.getStemDirection();
smo272158.setStemDirection(dirsmo405886);
smo272160.setStemDirection(dirsmo405886);
const smo405886 = new VF.Beam([smo272158,smo272160]);
 
// formatting measures in staff group smo314493
fmtsmo25990865.format([smo259908v0,smo262902v0,smo266045v0,smo269161v0,smo272180v0], 289);
const stavesmo259908 = new VF.Stave(810, 210, 303);
stavesmo259908.setAttribute('id', 'stavesmo259908');
stavesmo259908.setBegBarType(VF.Barline.type.NONE);
stavesmo259908.setContext(context);
stavesmo259908.draw();
smo259908v0.draw(context, stavesmo259908);
smo405869.setContext(context);
smo405869.draw();
smo405870.setContext(context);
smo405870.draw();
const stavesmo262902 = new VF.Stave(810, 309, 303);
stavesmo262902.setAttribute('id', 'stavesmo262902');
stavesmo262902.setBegBarType(VF.Barline.type.NONE);
stavesmo262902.setContext(context);
stavesmo262902.draw();
smo262902v0.draw(context, stavesmo262902);
smo405873.setContext(context);
smo405873.draw();
smo405874.setContext(context);
smo405874.draw();
const stavesmo266045 = new VF.Stave(810, 423, 303);
stavesmo266045.setAttribute('id', 'stavesmo266045');
stavesmo266045.setBegBarType(VF.Barline.type.NONE);
stavesmo266045.setContext(context);
stavesmo266045.draw();
smo266045v0.draw(context, stavesmo266045);
smo405877.setContext(context);
smo405877.draw();
smo405878.setContext(context);
smo405878.draw();
const stavesmo269161 = new VF.Stave(810, 532, 303);
stavesmo269161.setAttribute('id', 'stavesmo269161');
stavesmo269161.setBegBarType(VF.Barline.type.NONE);
stavesmo269161.setContext(context);
stavesmo269161.draw();
smo269161v0.draw(context, stavesmo269161);
smo405881.setContext(context);
smo405881.draw();
smo405882.setContext(context);
smo405882.draw();
const stavesmo272180 = new VF.Stave(810, 631, 303);
stavesmo272180.setAttribute('id', 'stavesmo272180');
stavesmo272180.setBegBarType(VF.Barline.type.NONE);
stavesmo272180.setContext(context);
stavesmo272180.draw();
smo272180v0.draw(context, stavesmo272180);
smo405885.setContext(context);
smo405885.draw();
smo405886.setContext(context);
smo405886.draw();
// create beam groups and tuplets for format grp smo314495 before formatting
const dirsmo405889 = smo275261.getStemDirection();
smo275261.setStemDirection(dirsmo405889);
smo275262.setStemDirection(dirsmo405889);
const smo405889 = new VF.Beam([smo275261,smo275262]);
const dirsmo405890 = smo275265.getStemDirection();
smo275265.setStemDirection(dirsmo405890);
smo275267.setStemDirection(dirsmo405890);
const smo405890 = new VF.Beam([smo275265,smo275267]);
const dirsmo405893 = smo278373.getStemDirection();
smo278373.setStemDirection(dirsmo405893);
smo278374.setStemDirection(dirsmo405893);
const smo405893 = new VF.Beam([smo278373,smo278374]);
const dirsmo405894 = smo278377.getStemDirection();
smo278377.setStemDirection(dirsmo405894);
smo278379.setStemDirection(dirsmo405894);
const smo405894 = new VF.Beam([smo278377,smo278379]);
const dirsmo405897 = smo281482.getStemDirection();
smo281482.setStemDirection(dirsmo405897);
smo281483.setStemDirection(dirsmo405897);
const smo405897 = new VF.Beam([smo281482,smo281483]);
const dirsmo405898 = smo281486.getStemDirection();
smo281486.setStemDirection(dirsmo405898);
smo281488.setStemDirection(dirsmo405898);
const smo405898 = new VF.Beam([smo281486,smo281488]);
const dirsmo405901 = smo284568.getStemDirection();
smo284568.setStemDirection(dirsmo405901);
smo284569.setStemDirection(dirsmo405901);
const smo405901 = new VF.Beam([smo284568,smo284569]);
const dirsmo405902 = smo284572.getStemDirection();
smo284572.setStemDirection(dirsmo405902);
smo284574.setStemDirection(dirsmo405902);
const smo405902 = new VF.Beam([smo284572,smo284574]);
 
// formatting measures in staff group smo314495
fmtsmo27528765.format([smo275287v0,smo278399v0,smo281508v0,smo284594v0], 289);
const stavesmo275287 = new VF.Stave(810, 745, 303);
stavesmo275287.setAttribute('id', 'stavesmo275287');
stavesmo275287.setBegBarType(VF.Barline.type.NONE);
stavesmo275287.setContext(context);
stavesmo275287.draw();
smo275287v0.draw(context, stavesmo275287);
smo405889.setContext(context);
smo405889.draw();
smo405890.setContext(context);
smo405890.draw();
const stavesmo278399 = new VF.Stave(810, 853, 303);
stavesmo278399.setAttribute('id', 'stavesmo278399');
stavesmo278399.setBegBarType(VF.Barline.type.NONE);
stavesmo278399.setContext(context);
stavesmo278399.draw();
smo278399v0.draw(context, stavesmo278399);
smo405893.setContext(context);
smo405893.draw();
smo405894.setContext(context);
smo405894.draw();
const stavesmo281508 = new VF.Stave(810, 962, 303);
stavesmo281508.setAttribute('id', 'stavesmo281508');
stavesmo281508.setBegBarType(VF.Barline.type.NONE);
stavesmo281508.setContext(context);
stavesmo281508.draw();
smo281508v0.draw(context, stavesmo281508);
smo405897.setContext(context);
smo405897.draw();
smo405898.setContext(context);
smo405898.draw();
const stavesmo284594 = new VF.Stave(810, 1071, 303);
stavesmo284594.setAttribute('id', 'stavesmo284594');
stavesmo284594.setBegBarType(VF.Barline.type.NONE);
stavesmo284594.setContext(context);
stavesmo284594.draw();
smo284594v0.draw(context, stavesmo284594);
smo405901.setContext(context);
smo405901.draw();
smo405902.setContext(context);
smo405902.draw();
// create beam groups and tuplets for format grp smo314497 before formatting
const dirsmo405905 = smo287657.getStemDirection();
smo287657.setStemDirection(dirsmo405905);
smo287658.setStemDirection(dirsmo405905);
const smo405905 = new VF.Beam([smo287657,smo287658]);
const dirsmo405906 = smo287661.getStemDirection();
smo287661.setStemDirection(dirsmo405906);
smo287663.setStemDirection(dirsmo405906);
const smo405906 = new VF.Beam([smo287661,smo287663]);
const dirsmo405909 = smo290697.getStemDirection();
smo290697.setStemDirection(dirsmo405909);
smo290698.setStemDirection(dirsmo405909);
const smo405909 = new VF.Beam([smo290697,smo290698]);
const dirsmo405910 = smo290701.getStemDirection();
smo290701.setStemDirection(dirsmo405910);
smo290703.setStemDirection(dirsmo405910);
const smo405910 = new VF.Beam([smo290701,smo290703]);
const dirsmo405913 = smo293751.getStemDirection();
smo293751.setStemDirection(dirsmo405913);
smo293752.setStemDirection(dirsmo405913);
const smo405913 = new VF.Beam([smo293751,smo293752]);
const dirsmo405914 = smo293755.getStemDirection();
smo293755.setStemDirection(dirsmo405914);
smo293757.setStemDirection(dirsmo405914);
const smo405914 = new VF.Beam([smo293755,smo293757]);
const dirsmo405917 = smo296794.getStemDirection();
smo296794.setStemDirection(dirsmo405917);
smo296795.setStemDirection(dirsmo405917);
const smo405917 = new VF.Beam([smo296794,smo296795]);
const dirsmo405918 = smo296798.getStemDirection();
smo296798.setStemDirection(dirsmo405918);
smo296800.setStemDirection(dirsmo405918);
const smo405918 = new VF.Beam([smo296798,smo296800]);
 
// formatting measures in staff group smo314497
fmtsmo28768365.format([smo287683v0,smo290723v0,smo293777v0,smo296820v0], 289);
const stavesmo287683 = new VF.Stave(810, 1200, 303);
stavesmo287683.setAttribute('id', 'stavesmo287683');
stavesmo287683.setBegBarType(VF.Barline.type.NONE);
stavesmo287683.setContext(context);
stavesmo287683.draw();
smo287683v0.draw(context, stavesmo287683);
smo405905.setContext(context);
smo405905.draw();
smo405906.setContext(context);
smo405906.draw();
const stavesmo290723 = new VF.Stave(810, 1329, 303);
stavesmo290723.setAttribute('id', 'stavesmo290723');
stavesmo290723.setBegBarType(VF.Barline.type.NONE);
stavesmo290723.setContext(context);
stavesmo290723.draw();
smo290723v0.draw(context, stavesmo290723);
smo405909.setContext(context);
smo405909.draw();
smo405910.setContext(context);
smo405910.draw();
const stavesmo293777 = new VF.Stave(810, 1458, 303);
stavesmo293777.setAttribute('id', 'stavesmo293777');
stavesmo293777.setBegBarType(VF.Barline.type.NONE);
stavesmo293777.setContext(context);
stavesmo293777.draw();
smo293777v0.draw(context, stavesmo293777);
smo405913.setContext(context);
smo405913.draw();
smo405914.setContext(context);
smo405914.draw();
const stavesmo296820 = new VF.Stave(810, 1587, 303);
stavesmo296820.setAttribute('id', 'stavesmo296820');
stavesmo296820.setBegBarType(VF.Barline.type.NONE);
stavesmo296820.setContext(context);
stavesmo296820.draw();
smo296820v0.draw(context, stavesmo296820);
smo405917.setContext(context);
smo405917.draw();
smo405918.setContext(context);
smo405918.draw();
// create beam groups and tuplets for format grp smo301816 before formatting
const dirsmo405921 = smo300007.getStemDirection();
smo300007.setStemDirection(dirsmo405921);
smo300008.setStemDirection(dirsmo405921);
const smo405921 = new VF.Beam([smo300007,smo300008]);
 
// formatting measures in staff group smo301816
fmtsmo30002665.format([smo300026v0], 289);
const stavesmo300026 = new VF.Stave(810, 1726, 303);
stavesmo300026.setAttribute('id', 'stavesmo300026');
stavesmo300026.setBegBarType(VF.Barline.type.NONE);
stavesmo300026.setContext(context);
stavesmo300026.draw();
smo300026v0.draw(context, stavesmo300026);
smo405921.setContext(context);
smo405921.draw();
// create beam groups and tuplets for format grp smo314491 before formatting
const dirsmo405924 = smo303220.getStemDirection();
smo303220.setStemDirection(dirsmo405924);
smo303221.setStemDirection(dirsmo405924);
const smo405924 = new VF.Beam([smo303220,smo303221]);
const dirsmo405927 = smo306415.getStemDirection();
smo306415.setStemDirection(dirsmo405927);
smo306416.setStemDirection(dirsmo405927);
const smo405927 = new VF.Beam([smo306415,smo306416]);
 
// formatting measures in staff group smo314491
fmtsmo30323965.format([smo303239v0,smo306434v0], 289);
const stavesmo303239 = new VF.Stave(810, 1831, 303);
stavesmo303239.setAttribute('id', 'stavesmo303239');
stavesmo303239.setBegBarType(VF.Barline.type.NONE);
stavesmo303239.setContext(context);
stavesmo303239.draw();
smo303239v0.draw(context, stavesmo303239);
smo405924.setContext(context);
smo405924.draw();
const stavesmo306434 = new VF.Stave(810, 1917, 303);
stavesmo306434.setAttribute('id', 'stavesmo306434');
stavesmo306434.setBegBarType(VF.Barline.type.NONE);
stavesmo306434.setContext(context);
stavesmo306434.draw();
smo306434v0.draw(context, stavesmo306434);
smo405927.setContext(context);
smo405927.draw();
// create beam groups and tuplets for format grp smo311329 before formatting
 
// formatting measures in staff group smo311329
fmtsmo30955165.format([smo309551v0], 289);
const stavesmo309551 = new VF.Stave(810, 1988, 303);
stavesmo309551.setAttribute('id', 'stavesmo309551');
stavesmo309551.setBegBarType(VF.Barline.type.NONE);
stavesmo309551.setContext(context);
stavesmo309551.draw();
smo309551v0.draw(context, stavesmo309551);
// create beam groups and tuplets for format grp smo314485 before formatting
 
// formatting measures in staff group smo314485
fmtsmo31274065.format([smo312740v0], 289);
const stavesmo312740 = new VF.Stave(810, 2059, 303);
stavesmo312740.setAttribute('id', 'stavesmo312740');
stavesmo312740.setBegBarType(VF.Barline.type.NONE);
stavesmo312740.setContext(context);
stavesmo312740.draw();
smo312740v0.draw(context, stavesmo312740);
const fmtsmo25993766 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo259937v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259937v0ar = [];
const smo259909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259909.setAttribute('id', 'smo259909');
const smo259910 = new VF.Annotation('bun');
smo259910.setAttribute('id', 'smo259910');
smo259910.setFont('times', 12, 'normal');
smo259910.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259909.addModifier(smo259910);
smo259910.addClass('lyric lyric-0');
smo259937v0ar.push(smo259909);
const smo259911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259911.setAttribute('id', 'smo259911');
const smo259912 = new VF.Annotation('yi');
smo259912.setAttribute('id', 'smo259912');
smo259912.setFont('times', 12, 'normal');
smo259912.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259911.addModifier(smo259912);
smo259912.addClass('lyric lyric-0 lyric-hyphen');
smo259937v0ar.push(smo259911);
const smo259913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259913.setAttribute('id', 'smo259913');
const smo259914 = new VF.Annotation('ri');
smo259914.setAttribute('id', 'smo259914');
smo259914.setFont('times', 12, 'normal');
smo259914.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259913.addModifier(smo259914);
smo259914.addClass('lyric lyric-0');
smo259937v0ar.push(smo259913);
const smo259915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259915.setAttribute('id', 'smo259915');
const smo259916 = new VF.Annotation('bun');
smo259916.setAttribute('id', 'smo259916');
smo259916.setFont('times', 12, 'normal');
smo259916.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259915.addModifier(smo259916);
smo259916.addClass('lyric lyric-0');
smo259937v0ar.push(smo259915);
const smo259917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo259917.setAttribute('id', 'smo259917');
const smo259918 = new VF.Annotation('Man');
smo259918.setAttribute('id', 'smo259918');
smo259918.setFont('times', 12, 'normal');
smo259918.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259917.addModifier(smo259918);
smo259918.addClass('lyric lyric-0 lyric-hyphen');
smo259937v0ar.push(smo259917);
const smo259919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo259919.setAttribute('id', 'smo259919');
smo259937v0ar.push(smo259919);
const smo259920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo259920.setAttribute('id', 'smo259920');
const smo259921 = new VF.Annotation('ding');
smo259921.setAttribute('id', 'smo259921');
smo259921.setFont('times', 12, 'normal');
smo259921.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259920.addModifier(smo259921);
smo259921.addClass('lyric lyric-0 lyric-hyphen');
smo259937v0ar.push(smo259920);
smo259937v0.addTickables(smo259937v0ar)
fmtsmo25993766.joinVoices([smo259937v0]);
const fmtsmo26293166 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo262931v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo262931v0ar = [];
const smo262903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo262903.setAttribute('id', 'smo262903');
const smo262904 = new VF.Annotation('bun');
smo262904.setAttribute('id', 'smo262904');
smo262904.setFont('times', 12, 'normal');
smo262904.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262903.addModifier(smo262904);
smo262904.addClass('lyric lyric-0');
smo262931v0ar.push(smo262903);
const smo262905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo262905.setAttribute('id', 'smo262905');
const smo262906 = new VF.Annotation('yi');
smo262906.setAttribute('id', 'smo262906');
smo262906.setFont('times', 12, 'normal');
smo262906.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262905.addModifier(smo262906);
smo262906.addClass('lyric lyric-0 lyric-hyphen');
smo262931v0ar.push(smo262905);
const smo262907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo262907.setAttribute('id', 'smo262907');
const smo262908 = new VF.Annotation('ri');
smo262908.setAttribute('id', 'smo262908');
smo262908.setFont('times', 12, 'normal');
smo262908.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262907.addModifier(smo262908);
smo262908.addClass('lyric lyric-0');
smo262931v0ar.push(smo262907);
const smo262909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo262909.setAttribute('id', 'smo262909');
const smo262910 = new VF.Annotation('bun');
smo262910.setAttribute('id', 'smo262910');
smo262910.setFont('times', 12, 'normal');
smo262910.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262909.addModifier(smo262910);
smo262910.addClass('lyric lyric-0');
smo262931v0ar.push(smo262909);
const smo262911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo262911.setAttribute('id', 'smo262911');
const smo262912 = new VF.Annotation('Man');
smo262912.setAttribute('id', 'smo262912');
smo262912.setFont('times', 12, 'normal');
smo262912.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262911.addModifier(smo262912);
smo262912.addClass('lyric lyric-0 lyric-hyphen');
smo262931v0ar.push(smo262911);
const smo262913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo262913.setAttribute('id', 'smo262913');
smo262931v0ar.push(smo262913);
const smo262914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo262914.setAttribute('id', 'smo262914');
const smo262915 = new VF.Annotation('ding');
smo262915.setAttribute('id', 'smo262915');
smo262915.setFont('times', 12, 'normal');
smo262915.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262914.addModifier(smo262915);
smo262915.addClass('lyric lyric-0 lyric-hyphen');
smo262931v0ar.push(smo262914);
smo262931v0.addTickables(smo262931v0ar)
fmtsmo26293166.joinVoices([smo262931v0]);
const fmtsmo26607466 = new VF.Formatter();
//
// voices and notes for stave 2 66
const smo266074v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266074v0ar = [];
const smo266046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266046.setAttribute('id', 'smo266046');
const smo266047 = new VF.Annotation('bun');
smo266047.setAttribute('id', 'smo266047');
smo266047.setFont('times', 12, 'normal');
smo266047.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266046.addModifier(smo266047);
smo266047.addClass('lyric lyric-0');
smo266074v0ar.push(smo266046);
const smo266048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266048.setAttribute('id', 'smo266048');
const smo266049 = new VF.Annotation('yi');
smo266049.setAttribute('id', 'smo266049');
smo266049.setFont('times', 12, 'normal');
smo266049.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266048.addModifier(smo266049);
smo266049.addClass('lyric lyric-0 lyric-hyphen');
smo266074v0ar.push(smo266048);
const smo266050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266050.setAttribute('id', 'smo266050');
const smo266051 = new VF.Annotation('ri');
smo266051.setAttribute('id', 'smo266051');
smo266051.setFont('times', 12, 'normal');
smo266051.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266050.addModifier(smo266051);
smo266051.addClass('lyric lyric-0');
smo266074v0ar.push(smo266050);
const smo266052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266052.setAttribute('id', 'smo266052');
const smo266053 = new VF.Annotation('bun');
smo266053.setAttribute('id', 'smo266053');
smo266053.setFont('times', 12, 'normal');
smo266053.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266052.addModifier(smo266053);
smo266053.addClass('lyric lyric-0');
smo266074v0ar.push(smo266052);
const smo266054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo266054.setAttribute('id', 'smo266054');
const smo266055 = new VF.Annotation('Man');
smo266055.setAttribute('id', 'smo266055');
smo266055.setFont('times', 12, 'normal');
smo266055.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266054.addModifier(smo266055);
smo266055.addClass('lyric lyric-0 lyric-hyphen');
smo266074v0ar.push(smo266054);
const smo266056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo266056.setAttribute('id', 'smo266056');
smo266074v0ar.push(smo266056);
const smo266057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo266057.setAttribute('id', 'smo266057');
const smo266058 = new VF.Annotation('ding');
smo266058.setAttribute('id', 'smo266058');
smo266058.setFont('times', 12, 'normal');
smo266058.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266057.addModifier(smo266058);
smo266058.addClass('lyric lyric-0 lyric-hyphen');
smo266074v0ar.push(smo266057);
smo266074v0.addTickables(smo266074v0ar)
fmtsmo26607466.joinVoices([smo266074v0]);
const fmtsmo26919066 = new VF.Formatter();
//
// voices and notes for stave 3 66
const smo269190v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269190v0ar = [];
const smo269162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo269162.setAttribute('id', 'smo269162');
const smo269163 = new VF.Annotation('bun');
smo269163.setAttribute('id', 'smo269163');
smo269163.setFont('times', 12, 'normal');
smo269163.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269162.addModifier(smo269163);
smo269163.addClass('lyric lyric-0');
smo269190v0ar.push(smo269162);
const smo269164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo269164.setAttribute('id', 'smo269164');
const smo269165 = new VF.Annotation('yi');
smo269165.setAttribute('id', 'smo269165');
smo269165.setFont('times', 12, 'normal');
smo269165.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269164.addModifier(smo269165);
smo269165.addClass('lyric lyric-0 lyric-hyphen');
smo269190v0ar.push(smo269164);
const smo269166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo269166.setAttribute('id', 'smo269166');
const smo269167 = new VF.Annotation('ri');
smo269167.setAttribute('id', 'smo269167');
smo269167.setFont('times', 12, 'normal');
smo269167.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269166.addModifier(smo269167);
smo269167.addClass('lyric lyric-0');
smo269190v0ar.push(smo269166);
const smo269168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo269168.setAttribute('id', 'smo269168');
const smo269169 = new VF.Annotation('bun');
smo269169.setAttribute('id', 'smo269169');
smo269169.setFont('times', 12, 'normal');
smo269169.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269168.addModifier(smo269169);
smo269169.addClass('lyric lyric-0');
smo269190v0ar.push(smo269168);
const smo269170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo269170.setAttribute('id', 'smo269170');
const smo269171 = new VF.Annotation('Man');
smo269171.setAttribute('id', 'smo269171');
smo269171.setFont('times', 12, 'normal');
smo269171.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269170.addModifier(smo269171);
smo269171.addClass('lyric lyric-0 lyric-hyphen');
smo269190v0ar.push(smo269170);
const smo269172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo269172.setAttribute('id', 'smo269172');
smo269190v0ar.push(smo269172);
const smo269173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo269173.setAttribute('id', 'smo269173');
const smo269174 = new VF.Annotation('ding');
smo269174.setAttribute('id', 'smo269174');
smo269174.setFont('times', 12, 'normal');
smo269174.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269173.addModifier(smo269174);
smo269174.addClass('lyric lyric-0 lyric-hyphen');
smo269190v0ar.push(smo269173);
smo269190v0.addTickables(smo269190v0ar)
fmtsmo26919066.joinVoices([smo269190v0]);
const fmtsmo27220966 = new VF.Formatter();
//
// voices and notes for stave 4 66
const smo272209v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272209v0ar = [];
const smo272181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo272181.setAttribute('id', 'smo272181');
const smo272182 = new VF.Annotation('bun');
smo272182.setAttribute('id', 'smo272182');
smo272182.setFont('times', 12, 'normal');
smo272182.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272181.addModifier(smo272182);
smo272182.addClass('lyric lyric-0');
smo272209v0ar.push(smo272181);
const smo272183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo272183.setAttribute('id', 'smo272183');
const smo272184 = new VF.Annotation('yi');
smo272184.setAttribute('id', 'smo272184');
smo272184.setFont('times', 12, 'normal');
smo272184.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272183.addModifier(smo272184);
smo272184.addClass('lyric lyric-0 lyric-hyphen');
smo272209v0ar.push(smo272183);
const smo272185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo272185.setAttribute('id', 'smo272185');
const smo272186 = new VF.Annotation('ri');
smo272186.setAttribute('id', 'smo272186');
smo272186.setFont('times', 12, 'normal');
smo272186.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272185.addModifier(smo272186);
smo272186.addClass('lyric lyric-0');
smo272209v0ar.push(smo272185);
const smo272187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo272187.setAttribute('id', 'smo272187');
const smo272188 = new VF.Annotation('bun');
smo272188.setAttribute('id', 'smo272188');
smo272188.setFont('times', 12, 'normal');
smo272188.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272187.addModifier(smo272188);
smo272188.addClass('lyric lyric-0');
smo272209v0ar.push(smo272187);
const smo272189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo272189.setAttribute('id', 'smo272189');
const smo272190 = new VF.Annotation('Man');
smo272190.setAttribute('id', 'smo272190');
smo272190.setFont('times', 12, 'normal');
smo272190.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272189.addModifier(smo272190);
smo272190.addClass('lyric lyric-0 lyric-hyphen');
smo272209v0ar.push(smo272189);
const smo272191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo272191.setAttribute('id', 'smo272191');
smo272209v0ar.push(smo272191);
const smo272192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272192.setAttribute('id', 'smo272192');
const smo272193 = new VF.Annotation('ding');
smo272193.setAttribute('id', 'smo272193');
smo272193.setFont('times', 12, 'normal');
smo272193.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272192.addModifier(smo272193);
smo272193.addClass('lyric lyric-0 lyric-hyphen');
smo272209v0ar.push(smo272192);
smo272209v0.addTickables(smo272209v0ar)
fmtsmo27220966.joinVoices([smo272209v0]);
const fmtsmo27531666 = new VF.Formatter();
//
// voices and notes for stave 5 66
const smo275316v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275316v0ar = [];
const smo275288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo275288.setAttribute('id', 'smo275288');
const smo275289 = new VF.Annotation('bun');
smo275289.setAttribute('id', 'smo275289');
smo275289.setFont('times', 12, 'normal');
smo275289.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275288.addModifier(smo275289);
smo275289.addClass('lyric lyric-0');
smo275316v0ar.push(smo275288);
const smo275290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo275290.setAttribute('id', 'smo275290');
const smo275291 = new VF.Annotation('yi');
smo275291.setAttribute('id', 'smo275291');
smo275291.setFont('times', 12, 'normal');
smo275291.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275290.addModifier(smo275291);
smo275291.addClass('lyric lyric-0 lyric-hyphen');
smo275316v0ar.push(smo275290);
const smo275292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo275292.setAttribute('id', 'smo275292');
const smo275293 = new VF.Annotation('ri');
smo275293.setAttribute('id', 'smo275293');
smo275293.setFont('times', 12, 'normal');
smo275293.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275292.addModifier(smo275293);
smo275293.addClass('lyric lyric-0');
smo275316v0ar.push(smo275292);
const smo275294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo275294.setAttribute('id', 'smo275294');
const smo275295 = new VF.Annotation('bun');
smo275295.setAttribute('id', 'smo275295');
smo275295.setFont('times', 12, 'normal');
smo275295.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275294.addModifier(smo275295);
smo275295.addClass('lyric lyric-0');
smo275316v0ar.push(smo275294);
const smo275296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo275296.setAttribute('id', 'smo275296');
const smo275297 = new VF.Annotation('Man');
smo275297.setAttribute('id', 'smo275297');
smo275297.setFont('times', 12, 'normal');
smo275297.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275296.addModifier(smo275297);
smo275297.addClass('lyric lyric-0 lyric-hyphen');
smo275316v0ar.push(smo275296);
const smo275298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo275298.setAttribute('id', 'smo275298');
smo275316v0ar.push(smo275298);
const smo275299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275299.setAttribute('id', 'smo275299');
const smo275300 = new VF.Annotation('ding');
smo275300.setAttribute('id', 'smo275300');
smo275300.setFont('times', 12, 'normal');
smo275300.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275299.addModifier(smo275300);
smo275300.addClass('lyric lyric-0 lyric-hyphen');
smo275316v0ar.push(smo275299);
smo275316v0.addTickables(smo275316v0ar)
fmtsmo27531666.joinVoices([smo275316v0]);
const fmtsmo27842866 = new VF.Formatter();
//
// voices and notes for stave 6 66
const smo278428v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278428v0ar = [];
const smo278400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo278400.setAttribute('id', 'smo278400');
const smo278401 = new VF.Annotation('bun');
smo278401.setAttribute('id', 'smo278401');
smo278401.setFont('times', 12, 'normal');
smo278401.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278400.addModifier(smo278401);
smo278401.addClass('lyric lyric-0');
smo278428v0ar.push(smo278400);
const smo278402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo278402.setAttribute('id', 'smo278402');
const smo278403 = new VF.Annotation('yi');
smo278403.setAttribute('id', 'smo278403');
smo278403.setFont('times', 12, 'normal');
smo278403.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278402.addModifier(smo278403);
smo278403.addClass('lyric lyric-0 lyric-hyphen');
smo278428v0ar.push(smo278402);
const smo278404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo278404.setAttribute('id', 'smo278404');
const smo278405 = new VF.Annotation('ri');
smo278405.setAttribute('id', 'smo278405');
smo278405.setFont('times', 12, 'normal');
smo278405.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278404.addModifier(smo278405);
smo278405.addClass('lyric lyric-0');
smo278428v0ar.push(smo278404);
const smo278406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo278406.setAttribute('id', 'smo278406');
const smo278407 = new VF.Annotation('bun');
smo278407.setAttribute('id', 'smo278407');
smo278407.setFont('times', 12, 'normal');
smo278407.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278406.addModifier(smo278407);
smo278407.addClass('lyric lyric-0');
smo278428v0ar.push(smo278406);
const smo278408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo278408.setAttribute('id', 'smo278408');
const smo278409 = new VF.Annotation('Man');
smo278409.setAttribute('id', 'smo278409');
smo278409.setFont('times', 12, 'normal');
smo278409.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278408.addModifier(smo278409);
smo278409.addClass('lyric lyric-0 lyric-hyphen');
smo278428v0ar.push(smo278408);
const smo278410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo278410.setAttribute('id', 'smo278410');
smo278428v0ar.push(smo278410);
const smo278411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo278411.setAttribute('id', 'smo278411');
const smo278412 = new VF.Annotation('ding');
smo278412.setAttribute('id', 'smo278412');
smo278412.setFont('times', 12, 'normal');
smo278412.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278411.addModifier(smo278412);
smo278412.addClass('lyric lyric-0 lyric-hyphen');
smo278428v0ar.push(smo278411);
smo278428v0.addTickables(smo278428v0ar)
fmtsmo27842866.joinVoices([smo278428v0]);
const fmtsmo28153766 = new VF.Formatter();
//
// voices and notes for stave 7 66
const smo281537v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281537v0ar = [];
const smo281509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281509.setAttribute('id', 'smo281509');
const smo281510 = new VF.Annotation('bun');
smo281510.setAttribute('id', 'smo281510');
smo281510.setFont('times', 12, 'normal');
smo281510.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281509.addModifier(smo281510);
smo281510.addClass('lyric lyric-0');
smo281537v0ar.push(smo281509);
const smo281511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281511.setAttribute('id', 'smo281511');
const smo281512 = new VF.Annotation('yi');
smo281512.setAttribute('id', 'smo281512');
smo281512.setFont('times', 12, 'normal');
smo281512.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281511.addModifier(smo281512);
smo281512.addClass('lyric lyric-0 lyric-hyphen');
smo281537v0ar.push(smo281511);
const smo281513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281513.setAttribute('id', 'smo281513');
const smo281514 = new VF.Annotation('ri');
smo281514.setAttribute('id', 'smo281514');
smo281514.setFont('times', 12, 'normal');
smo281514.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281513.addModifier(smo281514);
smo281514.addClass('lyric lyric-0');
smo281537v0ar.push(smo281513);
const smo281515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281515.setAttribute('id', 'smo281515');
const smo281516 = new VF.Annotation('bun');
smo281516.setAttribute('id', 'smo281516');
smo281516.setFont('times', 12, 'normal');
smo281516.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281515.addModifier(smo281516);
smo281516.addClass('lyric lyric-0');
smo281537v0ar.push(smo281515);
const smo281517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo281517.setAttribute('id', 'smo281517');
const smo281518 = new VF.Annotation('Man');
smo281518.setAttribute('id', 'smo281518');
smo281518.setFont('times', 12, 'normal');
smo281518.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281517.addModifier(smo281518);
smo281518.addClass('lyric lyric-0 lyric-hyphen');
smo281537v0ar.push(smo281517);
const smo281519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo281519.setAttribute('id', 'smo281519');
smo281537v0ar.push(smo281519);
const smo281520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281520.setAttribute('id', 'smo281520');
const smo281521 = new VF.Annotation('ding');
smo281521.setAttribute('id', 'smo281521');
smo281521.setFont('times', 12, 'normal');
smo281521.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281520.addModifier(smo281521);
smo281521.addClass('lyric lyric-0 lyric-hyphen');
smo281537v0ar.push(smo281520);
smo281537v0.addTickables(smo281537v0ar)
fmtsmo28153766.joinVoices([smo281537v0]);
const fmtsmo28462366 = new VF.Formatter();
//
// voices and notes for stave 8 66
const smo284623v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284623v0ar = [];
const smo284595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo284595.setAttribute('id', 'smo284595');
const smo284596 = new VF.Annotation('bun');
smo284596.setAttribute('id', 'smo284596');
smo284596.setFont('times', 12, 'normal');
smo284596.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284595.addModifier(smo284596);
smo284596.addClass('lyric lyric-0');
smo284623v0ar.push(smo284595);
const smo284597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo284597.setAttribute('id', 'smo284597');
const smo284598 = new VF.Annotation('yi');
smo284598.setAttribute('id', 'smo284598');
smo284598.setFont('times', 12, 'normal');
smo284598.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284597.addModifier(smo284598);
smo284598.addClass('lyric lyric-0 lyric-hyphen');
smo284623v0ar.push(smo284597);
const smo284599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo284599.setAttribute('id', 'smo284599');
const smo284600 = new VF.Annotation('ri');
smo284600.setAttribute('id', 'smo284600');
smo284600.setFont('times', 12, 'normal');
smo284600.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284599.addModifier(smo284600);
smo284600.addClass('lyric lyric-0');
smo284623v0ar.push(smo284599);
const smo284601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo284601.setAttribute('id', 'smo284601');
const smo284602 = new VF.Annotation('bun');
smo284602.setAttribute('id', 'smo284602');
smo284602.setFont('times', 12, 'normal');
smo284602.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284601.addModifier(smo284602);
smo284602.addClass('lyric lyric-0');
smo284623v0ar.push(smo284601);
const smo284603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo284603.setAttribute('id', 'smo284603');
const smo284604 = new VF.Annotation('Man');
smo284604.setAttribute('id', 'smo284604');
smo284604.setFont('times', 12, 'normal');
smo284604.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284603.addModifier(smo284604);
smo284604.addClass('lyric lyric-0 lyric-hyphen');
smo284623v0ar.push(smo284603);
const smo284605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo284605.setAttribute('id', 'smo284605');
smo284623v0ar.push(smo284605);
const smo284606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo284606.setAttribute('id', 'smo284606');
const smo284607 = new VF.Annotation('ding');
smo284607.setAttribute('id', 'smo284607');
smo284607.setFont('times', 12, 'normal');
smo284607.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284606.addModifier(smo284607);
smo284607.addClass('lyric lyric-0 lyric-hyphen');
smo284623v0ar.push(smo284606);
smo284623v0.addTickables(smo284623v0ar)
fmtsmo28462366.joinVoices([smo284623v0]);
const fmtsmo28771266 = new VF.Formatter();
//
// voices and notes for stave 9 66
const smo287712v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287712v0ar = [];
const smo287684 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287684.setAttribute('id', 'smo287684');
const smo287685 = new VF.Annotation('bun');
smo287685.setAttribute('id', 'smo287685');
smo287685.setFont('times', 12, 'normal');
smo287685.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287684.addModifier(smo287685);
smo287685.addClass('lyric lyric-0');
smo287712v0ar.push(smo287684);
const smo287686 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287686.setAttribute('id', 'smo287686');
const smo287687 = new VF.Annotation('yi');
smo287687.setAttribute('id', 'smo287687');
smo287687.setFont('times', 12, 'normal');
smo287687.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287686.addModifier(smo287687);
smo287687.addClass('lyric lyric-0 lyric-hyphen');
smo287712v0ar.push(smo287686);
const smo287688 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287688.setAttribute('id', 'smo287688');
const smo287689 = new VF.Annotation('ri');
smo287689.setAttribute('id', 'smo287689');
smo287689.setFont('times', 12, 'normal');
smo287689.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287688.addModifier(smo287689);
smo287689.addClass('lyric lyric-0');
smo287712v0ar.push(smo287688);
const smo287690 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287690.setAttribute('id', 'smo287690');
const smo287691 = new VF.Annotation('bun');
smo287691.setAttribute('id', 'smo287691');
smo287691.setFont('times', 12, 'normal');
smo287691.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287690.addModifier(smo287691);
smo287691.addClass('lyric lyric-0');
smo287712v0ar.push(smo287690);
const smo287692 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo287692.setAttribute('id', 'smo287692');
const smo287693 = new VF.Annotation('Man');
smo287693.setAttribute('id', 'smo287693');
smo287693.setFont('times', 12, 'normal');
smo287693.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287692.addModifier(smo287693);
smo287693.addClass('lyric lyric-0 lyric-hyphen');
smo287712v0ar.push(smo287692);
const smo287694 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo287694.setAttribute('id', 'smo287694');
smo287712v0ar.push(smo287694);
const smo287695 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287695.setAttribute('id', 'smo287695');
const smo287696 = new VF.Annotation('ding');
smo287696.setAttribute('id', 'smo287696');
smo287696.setFont('times', 12, 'normal');
smo287696.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287695.addModifier(smo287696);
smo287696.addClass('lyric lyric-0 lyric-hyphen');
smo287712v0ar.push(smo287695);
smo287712v0.addTickables(smo287712v0ar)
fmtsmo28771266.joinVoices([smo287712v0]);
const fmtsmo29075266 = new VF.Formatter();
//
// voices and notes for stave 10 66
const smo290752v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290752v0ar = [];
const smo290724 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290724.setAttribute('id', 'smo290724');
const smo290725 = new VF.Annotation('bun');
smo290725.setAttribute('id', 'smo290725');
smo290725.setFont('times', 12, 'normal');
smo290725.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290724.addModifier(smo290725);
smo290725.addClass('lyric lyric-0');
smo290752v0ar.push(smo290724);
const smo290726 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290726.setAttribute('id', 'smo290726');
const smo290727 = new VF.Annotation('yi');
smo290727.setAttribute('id', 'smo290727');
smo290727.setFont('times', 12, 'normal');
smo290727.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290726.addModifier(smo290727);
smo290727.addClass('lyric lyric-0 lyric-hyphen');
smo290752v0ar.push(smo290726);
const smo290728 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290728.setAttribute('id', 'smo290728');
const smo290729 = new VF.Annotation('ri');
smo290729.setAttribute('id', 'smo290729');
smo290729.setFont('times', 12, 'normal');
smo290729.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290728.addModifier(smo290729);
smo290729.addClass('lyric lyric-0');
smo290752v0ar.push(smo290728);
const smo290730 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290730.setAttribute('id', 'smo290730');
const smo290731 = new VF.Annotation('bun');
smo290731.setAttribute('id', 'smo290731');
smo290731.setFont('times', 12, 'normal');
smo290731.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290730.addModifier(smo290731);
smo290731.addClass('lyric lyric-0');
smo290752v0ar.push(smo290730);
const smo290732 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo290732.setAttribute('id', 'smo290732');
const smo290733 = new VF.Annotation('Man');
smo290733.setAttribute('id', 'smo290733');
smo290733.setFont('times', 12, 'normal');
smo290733.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290732.addModifier(smo290733);
smo290733.addClass('lyric lyric-0 lyric-hyphen');
smo290752v0ar.push(smo290732);
const smo290734 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo290734.setAttribute('id', 'smo290734');
smo290752v0ar.push(smo290734);
const smo290735 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290735.setAttribute('id', 'smo290735');
const smo290736 = new VF.Annotation('ding');
smo290736.setAttribute('id', 'smo290736');
smo290736.setFont('times', 12, 'normal');
smo290736.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290735.addModifier(smo290736);
smo290736.addClass('lyric lyric-0 lyric-hyphen');
smo290752v0ar.push(smo290735);
smo290752v0.addTickables(smo290752v0ar)
fmtsmo29075266.joinVoices([smo290752v0]);
const fmtsmo29380666 = new VF.Formatter();
//
// voices and notes for stave 11 66
const smo293806v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293806v0ar = [];
const smo293778 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293778.setAttribute('id', 'smo293778');
const smo293779 = new VF.Annotation('bun');
smo293779.setAttribute('id', 'smo293779');
smo293779.setFont('times', 12, 'normal');
smo293779.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293778.addModifier(smo293779);
smo293779.addClass('lyric lyric-0');
smo293806v0ar.push(smo293778);
const smo293780 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293780.setAttribute('id', 'smo293780');
const smo293781 = new VF.Annotation('yi');
smo293781.setAttribute('id', 'smo293781');
smo293781.setFont('times', 12, 'normal');
smo293781.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293780.addModifier(smo293781);
smo293781.addClass('lyric lyric-0 lyric-hyphen');
smo293806v0ar.push(smo293780);
const smo293782 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293782.setAttribute('id', 'smo293782');
const smo293783 = new VF.Annotation('ri');
smo293783.setAttribute('id', 'smo293783');
smo293783.setFont('times', 12, 'normal');
smo293783.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293782.addModifier(smo293783);
smo293783.addClass('lyric lyric-0');
smo293806v0ar.push(smo293782);
const smo293784 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293784.setAttribute('id', 'smo293784');
const smo293785 = new VF.Annotation('bun');
smo293785.setAttribute('id', 'smo293785');
smo293785.setFont('times', 12, 'normal');
smo293785.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293784.addModifier(smo293785);
smo293785.addClass('lyric lyric-0');
smo293806v0ar.push(smo293784);
const smo293786 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo293786.setAttribute('id', 'smo293786');
const smo293787 = new VF.Annotation('Man');
smo293787.setAttribute('id', 'smo293787');
smo293787.setFont('times', 12, 'normal');
smo293787.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293786.addModifier(smo293787);
smo293787.addClass('lyric lyric-0 lyric-hyphen');
smo293806v0ar.push(smo293786);
const smo293788 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo293788.setAttribute('id', 'smo293788');
smo293806v0ar.push(smo293788);
const smo293789 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293789.setAttribute('id', 'smo293789');
const smo293790 = new VF.Annotation('ding');
smo293790.setAttribute('id', 'smo293790');
smo293790.setFont('times', 12, 'normal');
smo293790.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293789.addModifier(smo293790);
smo293790.addClass('lyric lyric-0 lyric-hyphen');
smo293806v0ar.push(smo293789);
smo293806v0.addTickables(smo293806v0ar)
fmtsmo29380666.joinVoices([smo293806v0]);
const fmtsmo29684966 = new VF.Formatter();
//
// voices and notes for stave 12 66
const smo296849v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296849v0ar = [];
const smo296821 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo296821.setAttribute('id', 'smo296821');
const smo296822 = new VF.Annotation('bun');
smo296822.setAttribute('id', 'smo296822');
smo296822.setFont('times', 12, 'normal');
smo296822.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296821.addModifier(smo296822);
smo296822.addClass('lyric lyric-0');
smo296849v0ar.push(smo296821);
const smo296823 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo296823.setAttribute('id', 'smo296823');
const smo296824 = new VF.Annotation('yi');
smo296824.setAttribute('id', 'smo296824');
smo296824.setFont('times', 12, 'normal');
smo296824.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296823.addModifier(smo296824);
smo296824.addClass('lyric lyric-0 lyric-hyphen');
smo296849v0ar.push(smo296823);
const smo296825 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo296825.setAttribute('id', 'smo296825');
const smo296826 = new VF.Annotation('ri');
smo296826.setAttribute('id', 'smo296826');
smo296826.setFont('times', 12, 'normal');
smo296826.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296825.addModifier(smo296826);
smo296826.addClass('lyric lyric-0');
smo296849v0ar.push(smo296825);
const smo296827 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo296827.setAttribute('id', 'smo296827');
const smo296828 = new VF.Annotation('bun');
smo296828.setAttribute('id', 'smo296828');
smo296828.setFont('times', 12, 'normal');
smo296828.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296827.addModifier(smo296828);
smo296828.addClass('lyric lyric-0');
smo296849v0ar.push(smo296827);
const smo296829 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo296829.setAttribute('id', 'smo296829');
const smo296830 = new VF.Annotation('Man');
smo296830.setAttribute('id', 'smo296830');
smo296830.setFont('times', 12, 'normal');
smo296830.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296829.addModifier(smo296830);
smo296830.addClass('lyric lyric-0 lyric-hyphen');
smo296849v0ar.push(smo296829);
const smo296831 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo296831.setAttribute('id', 'smo296831');
smo296849v0ar.push(smo296831);
const smo296832 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo296832.setAttribute('id', 'smo296832');
const smo296833 = new VF.Annotation('ding');
smo296833.setAttribute('id', 'smo296833');
smo296833.setFont('times', 12, 'normal');
smo296833.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296832.addModifier(smo296833);
smo296833.addClass('lyric lyric-0 lyric-hyphen');
smo296849v0ar.push(smo296832);
smo296849v0.addTickables(smo296849v0ar)
fmtsmo29684966.joinVoices([smo296849v0]);
const fmtsmo30004866 = new VF.Formatter();
//
// voices and notes for stave 13 66
const smo300048v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300048v0ar = [];
const smo300027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo300027.setAttribute('id', 'smo300027');
const smo3000270acc = new VF.Accidental('#');
smo300027.addModifier(smo3000270acc, 0);
smo300027.addModifier(new VF.Dot(), 0);
smo300027.addModifier(new VF.Dot(), 1);
smo300027.addModifier(new VF.Dot(), 2);
smo300048v0ar.push(smo300027);
const smo300028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo300028.setAttribute('id', 'smo300028');
smo300048v0ar.push(smo300028);
const smo300029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo300029.setAttribute('id', 'smo300029');
smo300048v0ar.push(smo300029);
const smo300030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo300030.setAttribute('id', 'smo300030');
const smo3000302acc = new VF.Accidental('b');
smo300030.addModifier(smo3000302acc, 2);
smo300048v0ar.push(smo300030);
const smo300031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo300031.setAttribute('id', 'smo300031');
smo300048v0ar.push(smo300031);
const smo300032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo300032.setAttribute('id', 'smo300032');
smo300048v0ar.push(smo300032);
smo300048v0.addTickables(smo300048v0ar)
fmtsmo30004866.joinVoices([smo300048v0]);
const fmtsmo30326166 = new VF.Formatter();
//
// voices and notes for stave 14 66
const smo303261v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303261v0ar = [];
const smo303240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo303240.setAttribute('id', 'smo303240');
const smo3032400acc = new VF.Accidental('#');
smo303240.addModifier(smo3032400acc, 0);
smo303240.addModifier(new VF.Dot(), 0);
smo303240.addModifier(new VF.Dot(), 1);
smo303240.addModifier(new VF.Dot(), 2);
smo303261v0ar.push(smo303240);
const smo303241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo303241.setAttribute('id', 'smo303241');
smo303261v0ar.push(smo303241);
const smo303242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo303242.setAttribute('id', 'smo303242');
smo303261v0ar.push(smo303242);
const smo303243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo303243.setAttribute('id', 'smo303243');
const smo3032432acc = new VF.Accidental('b');
smo303243.addModifier(smo3032432acc, 2);
smo303261v0ar.push(smo303243);
const smo303244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo303244.setAttribute('id', 'smo303244');
smo303261v0ar.push(smo303244);
const smo303245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo303245.setAttribute('id', 'smo303245');
smo303261v0ar.push(smo303245);
smo303261v0.addTickables(smo303261v0ar)
fmtsmo30326166.joinVoices([smo303261v0]);
const fmtsmo30645666 = new VF.Formatter();
//
// voices and notes for stave 15 66
const smo306456v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306456v0ar = [];
const smo306435 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo306435.setAttribute('id', 'smo306435');
const smo3064350acc = new VF.Accidental('#');
smo306435.addModifier(smo3064350acc, 0);
smo306435.addModifier(new VF.Dot(), 0);
smo306456v0ar.push(smo306435);
const smo306436 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo306436.setAttribute('id', 'smo306436');
smo306456v0ar.push(smo306436);
const smo306437 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo306437.setAttribute('id', 'smo306437');
smo306456v0ar.push(smo306437);
const smo306438 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo306438.setAttribute('id', 'smo306438');
smo306456v0ar.push(smo306438);
const smo306439 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo306439.setAttribute('id', 'smo306439');
smo306456v0ar.push(smo306439);
const smo306440 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo306440.setAttribute('id', 'smo306440');
smo306456v0ar.push(smo306440);
smo306456v0.addTickables(smo306456v0ar)
fmtsmo30645666.joinVoices([smo306456v0]);
const fmtsmo30957166 = new VF.Formatter();
//
// voices and notes for stave 16 66
const smo309571v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309571v0ar = [];
const smo309552 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo309552.setAttribute('id', 'smo309552');
smo309552.addModifier(new VF.Dot(), 0);
smo309571v0ar.push(smo309552);
const smo309553 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n"]}'))
smo309553.setAttribute('id', 'smo309553');
const smo3095530acc = new VF.Accidental('b');
smo309553.addModifier(smo3095530acc, 0);
smo309571v0ar.push(smo309553);
const smo309554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n"]}'))
smo309554.setAttribute('id', 'smo309554');
smo309571v0ar.push(smo309554);
const smo309555 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo309555.setAttribute('id', 'smo309555');
smo309571v0ar.push(smo309555);
smo309571v0.addTickables(smo309571v0ar)
fmtsmo30957166.joinVoices([smo309571v0]);
const fmtsmo31277066 = new VF.Formatter();
//
// voices and notes for stave 17 66
const smo312770v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312770v0ar = [];
const smo312741 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo312741.setAttribute('id', 'smo312741');
smo312741.setStyle({ fillStyle: '#aaaaaa7f' });
const smo3127410acc = new VF.Accidental('n');
smo312741.addModifier(smo3127410acc, 0);
const smo312742 = new VF.Annotation('bun');
smo312742.setAttribute('id', 'smo312742');
smo312742.setFont('times', 12, 'normal');
smo312742.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo312741.addModifier(smo312742);
smo312742.addClass('lyric lyric-0');
smo312770v0ar.push(smo312741);
const smo312743 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo312743.setAttribute('id', 'smo312743');
smo312743.setStyle({ fillStyle: '#aaaaaa7f' });
const smo312744 = new VF.Annotation('yi');
smo312744.setAttribute('id', 'smo312744');
smo312744.setFont('times', 12, 'normal');
smo312744.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo312743.addModifier(smo312744);
smo312744.addClass('lyric lyric-0 lyric-hyphen');
smo312770v0ar.push(smo312743);
const smo312745 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo312745.setAttribute('id', 'smo312745');
smo312745.setStyle({ fillStyle: '#aaaaaa7f' });
const smo312746 = new VF.Annotation('ri');
smo312746.setAttribute('id', 'smo312746');
smo312746.setFont('times', 12, 'normal');
smo312746.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo312745.addModifier(smo312746);
smo312746.addClass('lyric lyric-0');
smo312770v0ar.push(smo312745);
const smo312747 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo312747.setAttribute('id', 'smo312747');
smo312747.setStyle({ fillStyle: '#aaaaaa7f' });
const smo312748 = new VF.Annotation('bun');
smo312748.setAttribute('id', 'smo312748');
smo312748.setFont('times', 12, 'normal');
smo312748.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo312747.addModifier(smo312748);
smo312748.addClass('lyric lyric-0');
smo312770v0ar.push(smo312747);
const smo312749 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo312749.setAttribute('id', 'smo312749');
smo312749.setStyle({ fillStyle: '#aaaaaa7f' });
const smo312750 = new VF.Annotation('Man');
smo312750.setAttribute('id', 'smo312750');
smo312750.setFont('times', 12, 'normal');
smo312750.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo312749.addModifier(smo312750);
smo312750.addClass('lyric lyric-0 lyric-hyphen');
smo312770v0ar.push(smo312749);
const smo312751 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo312751.setAttribute('id', 'smo312751');
smo312751.setStyle({ fillStyle: '#aaaaaa7f' });
smo312770v0ar.push(smo312751);
const smo312752 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo312752.setAttribute('id', 'smo312752');
smo312752.setStyle({ fillStyle: '#aaaaaa7f' });
const smo312753 = new VF.Annotation('ding');
smo312753.setAttribute('id', 'smo312753');
smo312753.setFont('times', 12, 'normal');
smo312753.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo312752.addModifier(smo312753);
smo312753.addClass('lyric lyric-0 lyric-hyphen');
smo312770v0ar.push(smo312752);
smo312770v0.addTickables(smo312770v0ar)
fmtsmo31277066.joinVoices([smo312770v0]);
const smo312770v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312770v1ar = [];
const smo312754 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312754.setAttribute('id', 'smo312754');
smo312754.setStyle({ fillStyle: "#115511" });
smo312770v1ar.push(smo312754);
smo312770v1.addTickables(smo312770v1ar)
fmtsmo31277066.joinVoices([smo312770v1]);
// create beam groups and tuplets for format grp smo314493 before formatting
const dirsmo405934 = smo259911.getStemDirection();
smo259911.setStemDirection(dirsmo405934);
smo259913.setStemDirection(dirsmo405934);
const smo405934 = new VF.Beam([smo259911,smo259913]);
const dirsmo405935 = smo259915.getStemDirection();
smo259915.setStemDirection(dirsmo405935);
smo259917.setStemDirection(dirsmo405935);
smo259919.setStemDirection(dirsmo405935);
smo259920.setStemDirection(dirsmo405935);
const smo405935 = new VF.Beam([smo259915,smo259917,smo259919,smo259920]);
const dirsmo405938 = smo262905.getStemDirection();
smo262905.setStemDirection(dirsmo405938);
smo262907.setStemDirection(dirsmo405938);
const smo405938 = new VF.Beam([smo262905,smo262907]);
const dirsmo405939 = smo262909.getStemDirection();
smo262909.setStemDirection(dirsmo405939);
smo262911.setStemDirection(dirsmo405939);
smo262913.setStemDirection(dirsmo405939);
smo262914.setStemDirection(dirsmo405939);
const smo405939 = new VF.Beam([smo262909,smo262911,smo262913,smo262914]);
const dirsmo405942 = smo266048.getStemDirection();
smo266048.setStemDirection(dirsmo405942);
smo266050.setStemDirection(dirsmo405942);
const smo405942 = new VF.Beam([smo266048,smo266050]);
const dirsmo405943 = smo266052.getStemDirection();
smo266052.setStemDirection(dirsmo405943);
smo266054.setStemDirection(dirsmo405943);
smo266056.setStemDirection(dirsmo405943);
smo266057.setStemDirection(dirsmo405943);
const smo405943 = new VF.Beam([smo266052,smo266054,smo266056,smo266057]);
const dirsmo405946 = smo269164.getStemDirection();
smo269164.setStemDirection(dirsmo405946);
smo269166.setStemDirection(dirsmo405946);
const smo405946 = new VF.Beam([smo269164,smo269166]);
const dirsmo405947 = smo269168.getStemDirection();
smo269168.setStemDirection(dirsmo405947);
smo269170.setStemDirection(dirsmo405947);
smo269172.setStemDirection(dirsmo405947);
smo269173.setStemDirection(dirsmo405947);
const smo405947 = new VF.Beam([smo269168,smo269170,smo269172,smo269173]);
const dirsmo405950 = smo272183.getStemDirection();
smo272183.setStemDirection(dirsmo405950);
smo272185.setStemDirection(dirsmo405950);
const smo405950 = new VF.Beam([smo272183,smo272185]);
const dirsmo405951 = smo272187.getStemDirection();
smo272187.setStemDirection(dirsmo405951);
smo272189.setStemDirection(dirsmo405951);
smo272191.setStemDirection(dirsmo405951);
smo272192.setStemDirection(dirsmo405951);
const smo405951 = new VF.Beam([smo272187,smo272189,smo272191,smo272192]);
 
// formatting measures in staff group smo314493
fmtsmo25993766.format([smo259937v0,smo262931v0,smo266074v0,smo269190v0,smo272209v0], 301);
const stavesmo259937 = new VF.Stave(1113, 210, 315);
stavesmo259937.setAttribute('id', 'stavesmo259937');
stavesmo259937.setBegBarType(VF.Barline.type.NONE);
stavesmo259937.setContext(context);
stavesmo259937.draw();
smo259937v0.draw(context, stavesmo259937);
smo405934.setContext(context);
smo405934.draw();
smo405935.setContext(context);
smo405935.draw();
const stavesmo262931 = new VF.Stave(1113, 309, 315);
stavesmo262931.setAttribute('id', 'stavesmo262931');
stavesmo262931.setBegBarType(VF.Barline.type.NONE);
stavesmo262931.setContext(context);
stavesmo262931.draw();
smo262931v0.draw(context, stavesmo262931);
smo405938.setContext(context);
smo405938.draw();
smo405939.setContext(context);
smo405939.draw();
const stavesmo266074 = new VF.Stave(1113, 423, 315);
stavesmo266074.setAttribute('id', 'stavesmo266074');
stavesmo266074.setBegBarType(VF.Barline.type.NONE);
stavesmo266074.setContext(context);
stavesmo266074.draw();
smo266074v0.draw(context, stavesmo266074);
smo405942.setContext(context);
smo405942.draw();
smo405943.setContext(context);
smo405943.draw();
const stavesmo269190 = new VF.Stave(1113, 532, 315);
stavesmo269190.setAttribute('id', 'stavesmo269190');
stavesmo269190.setBegBarType(VF.Barline.type.NONE);
stavesmo269190.setContext(context);
stavesmo269190.draw();
smo269190v0.draw(context, stavesmo269190);
smo405946.setContext(context);
smo405946.draw();
smo405947.setContext(context);
smo405947.draw();
const stavesmo272209 = new VF.Stave(1113, 631, 315);
stavesmo272209.setAttribute('id', 'stavesmo272209');
stavesmo272209.setBegBarType(VF.Barline.type.NONE);
stavesmo272209.setContext(context);
stavesmo272209.draw();
smo272209v0.draw(context, stavesmo272209);
smo405950.setContext(context);
smo405950.draw();
smo405951.setContext(context);
smo405951.draw();
// create beam groups and tuplets for format grp smo314495 before formatting
const dirsmo405954 = smo275290.getStemDirection();
smo275290.setStemDirection(dirsmo405954);
smo275292.setStemDirection(dirsmo405954);
const smo405954 = new VF.Beam([smo275290,smo275292]);
const dirsmo405955 = smo275294.getStemDirection();
smo275294.setStemDirection(dirsmo405955);
smo275296.setStemDirection(dirsmo405955);
smo275298.setStemDirection(dirsmo405955);
smo275299.setStemDirection(dirsmo405955);
const smo405955 = new VF.Beam([smo275294,smo275296,smo275298,smo275299]);
const dirsmo405958 = smo278402.getStemDirection();
smo278402.setStemDirection(dirsmo405958);
smo278404.setStemDirection(dirsmo405958);
const smo405958 = new VF.Beam([smo278402,smo278404]);
const dirsmo405959 = smo278406.getStemDirection();
smo278406.setStemDirection(dirsmo405959);
smo278408.setStemDirection(dirsmo405959);
smo278410.setStemDirection(dirsmo405959);
smo278411.setStemDirection(dirsmo405959);
const smo405959 = new VF.Beam([smo278406,smo278408,smo278410,smo278411]);
const dirsmo405962 = smo281511.getStemDirection();
smo281511.setStemDirection(dirsmo405962);
smo281513.setStemDirection(dirsmo405962);
const smo405962 = new VF.Beam([smo281511,smo281513]);
const dirsmo405963 = smo281515.getStemDirection();
smo281515.setStemDirection(dirsmo405963);
smo281517.setStemDirection(dirsmo405963);
smo281519.setStemDirection(dirsmo405963);
smo281520.setStemDirection(dirsmo405963);
const smo405963 = new VF.Beam([smo281515,smo281517,smo281519,smo281520]);
const dirsmo405966 = smo284597.getStemDirection();
smo284597.setStemDirection(dirsmo405966);
smo284599.setStemDirection(dirsmo405966);
const smo405966 = new VF.Beam([smo284597,smo284599]);
const dirsmo405967 = smo284601.getStemDirection();
smo284601.setStemDirection(dirsmo405967);
smo284603.setStemDirection(dirsmo405967);
smo284605.setStemDirection(dirsmo405967);
smo284606.setStemDirection(dirsmo405967);
const smo405967 = new VF.Beam([smo284601,smo284603,smo284605,smo284606]);
 
// formatting measures in staff group smo314495
fmtsmo27531666.format([smo275316v0,smo278428v0,smo281537v0,smo284623v0], 301);
const stavesmo275316 = new VF.Stave(1113, 745, 315);
stavesmo275316.setAttribute('id', 'stavesmo275316');
stavesmo275316.setBegBarType(VF.Barline.type.NONE);
stavesmo275316.setContext(context);
stavesmo275316.draw();
smo275316v0.draw(context, stavesmo275316);
smo405954.setContext(context);
smo405954.draw();
smo405955.setContext(context);
smo405955.draw();
const stavesmo278428 = new VF.Stave(1113, 853, 315);
stavesmo278428.setAttribute('id', 'stavesmo278428');
stavesmo278428.setBegBarType(VF.Barline.type.NONE);
stavesmo278428.setContext(context);
stavesmo278428.draw();
smo278428v0.draw(context, stavesmo278428);
smo405958.setContext(context);
smo405958.draw();
smo405959.setContext(context);
smo405959.draw();
const stavesmo281537 = new VF.Stave(1113, 962, 315);
stavesmo281537.setAttribute('id', 'stavesmo281537');
stavesmo281537.setBegBarType(VF.Barline.type.NONE);
stavesmo281537.setContext(context);
stavesmo281537.draw();
smo281537v0.draw(context, stavesmo281537);
smo405962.setContext(context);
smo405962.draw();
smo405963.setContext(context);
smo405963.draw();
const stavesmo284623 = new VF.Stave(1113, 1071, 315);
stavesmo284623.setAttribute('id', 'stavesmo284623');
stavesmo284623.setBegBarType(VF.Barline.type.NONE);
stavesmo284623.setContext(context);
stavesmo284623.draw();
smo284623v0.draw(context, stavesmo284623);
smo405966.setContext(context);
smo405966.draw();
smo405967.setContext(context);
smo405967.draw();
// create beam groups and tuplets for format grp smo314497 before formatting
const dirsmo405970 = smo287686.getStemDirection();
smo287686.setStemDirection(dirsmo405970);
smo287688.setStemDirection(dirsmo405970);
const smo405970 = new VF.Beam([smo287686,smo287688]);
const dirsmo405971 = smo287690.getStemDirection();
smo287690.setStemDirection(dirsmo405971);
smo287692.setStemDirection(dirsmo405971);
smo287694.setStemDirection(dirsmo405971);
smo287695.setStemDirection(dirsmo405971);
const smo405971 = new VF.Beam([smo287690,smo287692,smo287694,smo287695]);
const dirsmo405974 = smo290726.getStemDirection();
smo290726.setStemDirection(dirsmo405974);
smo290728.setStemDirection(dirsmo405974);
const smo405974 = new VF.Beam([smo290726,smo290728]);
const dirsmo405975 = smo290730.getStemDirection();
smo290730.setStemDirection(dirsmo405975);
smo290732.setStemDirection(dirsmo405975);
smo290734.setStemDirection(dirsmo405975);
smo290735.setStemDirection(dirsmo405975);
const smo405975 = new VF.Beam([smo290730,smo290732,smo290734,smo290735]);
const dirsmo405978 = smo293780.getStemDirection();
smo293780.setStemDirection(dirsmo405978);
smo293782.setStemDirection(dirsmo405978);
const smo405978 = new VF.Beam([smo293780,smo293782]);
const dirsmo405979 = smo293784.getStemDirection();
smo293784.setStemDirection(dirsmo405979);
smo293786.setStemDirection(dirsmo405979);
smo293788.setStemDirection(dirsmo405979);
smo293789.setStemDirection(dirsmo405979);
const smo405979 = new VF.Beam([smo293784,smo293786,smo293788,smo293789]);
const dirsmo405982 = smo296823.getStemDirection();
smo296823.setStemDirection(dirsmo405982);
smo296825.setStemDirection(dirsmo405982);
const smo405982 = new VF.Beam([smo296823,smo296825]);
const dirsmo405983 = smo296827.getStemDirection();
smo296827.setStemDirection(dirsmo405983);
smo296829.setStemDirection(dirsmo405983);
smo296831.setStemDirection(dirsmo405983);
smo296832.setStemDirection(dirsmo405983);
const smo405983 = new VF.Beam([smo296827,smo296829,smo296831,smo296832]);
 
// formatting measures in staff group smo314497
fmtsmo28771266.format([smo287712v0,smo290752v0,smo293806v0,smo296849v0], 301);
const stavesmo287712 = new VF.Stave(1113, 1200, 315);
stavesmo287712.setAttribute('id', 'stavesmo287712');
stavesmo287712.setBegBarType(VF.Barline.type.NONE);
stavesmo287712.setContext(context);
stavesmo287712.draw();
smo287712v0.draw(context, stavesmo287712);
smo405970.setContext(context);
smo405970.draw();
smo405971.setContext(context);
smo405971.draw();
const stavesmo290752 = new VF.Stave(1113, 1329, 315);
stavesmo290752.setAttribute('id', 'stavesmo290752');
stavesmo290752.setBegBarType(VF.Barline.type.NONE);
stavesmo290752.setContext(context);
stavesmo290752.draw();
smo290752v0.draw(context, stavesmo290752);
smo405974.setContext(context);
smo405974.draw();
smo405975.setContext(context);
smo405975.draw();
const stavesmo293806 = new VF.Stave(1113, 1458, 315);
stavesmo293806.setAttribute('id', 'stavesmo293806');
stavesmo293806.setBegBarType(VF.Barline.type.NONE);
stavesmo293806.setContext(context);
stavesmo293806.draw();
smo293806v0.draw(context, stavesmo293806);
smo405978.setContext(context);
smo405978.draw();
smo405979.setContext(context);
smo405979.draw();
const stavesmo296849 = new VF.Stave(1113, 1587, 315);
stavesmo296849.setAttribute('id', 'stavesmo296849');
stavesmo296849.setBegBarType(VF.Barline.type.NONE);
stavesmo296849.setContext(context);
stavesmo296849.draw();
smo296849v0.draw(context, stavesmo296849);
smo405982.setContext(context);
smo405982.draw();
smo405983.setContext(context);
smo405983.draw();
// create beam groups and tuplets for format grp smo301816 before formatting
const dirsmo405986 = smo300028.getStemDirection();
smo300028.setStemDirection(dirsmo405986);
smo300029.setStemDirection(dirsmo405986);
smo300030.setStemDirection(dirsmo405986);
smo300031.setStemDirection(dirsmo405986);
const smo405986 = new VF.Beam([smo300028,smo300029,smo300030,smo300031]);
 
// formatting measures in staff group smo301816
fmtsmo30004866.format([smo300048v0], 301);
const stavesmo300048 = new VF.Stave(1113, 1726, 315);
stavesmo300048.setAttribute('id', 'stavesmo300048');
stavesmo300048.setBegBarType(VF.Barline.type.NONE);
stavesmo300048.setContext(context);
stavesmo300048.draw();
smo300048v0.draw(context, stavesmo300048);
smo405986.setContext(context);
smo405986.draw();
// create beam groups and tuplets for format grp smo314491 before formatting
const dirsmo405989 = smo303241.getStemDirection();
smo303241.setStemDirection(dirsmo405989);
smo303242.setStemDirection(dirsmo405989);
smo303243.setStemDirection(dirsmo405989);
smo303244.setStemDirection(dirsmo405989);
const smo405989 = new VF.Beam([smo303241,smo303242,smo303243,smo303244]);
const dirsmo405992 = smo306436.getStemDirection();
smo306436.setStemDirection(dirsmo405992);
smo306437.setStemDirection(dirsmo405992);
smo306438.setStemDirection(dirsmo405992);
smo306439.setStemDirection(dirsmo405992);
const smo405992 = new VF.Beam([smo306436,smo306437,smo306438,smo306439]);
 
// formatting measures in staff group smo314491
fmtsmo30326166.format([smo303261v0,smo306456v0], 301);
const stavesmo303261 = new VF.Stave(1113, 1831, 315);
stavesmo303261.setAttribute('id', 'stavesmo303261');
stavesmo303261.setBegBarType(VF.Barline.type.NONE);
stavesmo303261.setContext(context);
stavesmo303261.draw();
smo303261v0.draw(context, stavesmo303261);
smo405989.setContext(context);
smo405989.draw();
const stavesmo306456 = new VF.Stave(1113, 1917, 315);
stavesmo306456.setAttribute('id', 'stavesmo306456');
stavesmo306456.setBegBarType(VF.Barline.type.NONE);
stavesmo306456.setContext(context);
stavesmo306456.draw();
smo306456v0.draw(context, stavesmo306456);
smo405992.setContext(context);
smo405992.draw();
// create beam groups and tuplets for format grp smo311329 before formatting
 
// formatting measures in staff group smo311329
fmtsmo30957166.format([smo309571v0], 301);
const stavesmo309571 = new VF.Stave(1113, 1988, 315);
stavesmo309571.setAttribute('id', 'stavesmo309571');
stavesmo309571.setBegBarType(VF.Barline.type.NONE);
stavesmo309571.setContext(context);
stavesmo309571.draw();
smo309571v0.draw(context, stavesmo309571);
// create beam groups and tuplets for format grp smo314485 before formatting
const dirsmo405997 = smo312743.getStemDirection();
smo312743.setStemDirection(dirsmo405997);
smo312745.setStemDirection(dirsmo405997);
const smo405997 = new VF.Beam([smo312743,smo312745]);
const dirsmo405998 = smo312747.getStemDirection();
smo312747.setStemDirection(dirsmo405998);
smo312749.setStemDirection(dirsmo405998);
smo312751.setStemDirection(dirsmo405998);
smo312752.setStemDirection(dirsmo405998);
const smo405998 = new VF.Beam([smo312747,smo312749,smo312751,smo312752]);
 
// formatting measures in staff group smo314485
fmtsmo31277066.format([smo312770v0,smo312770v1], 301);
const stavesmo312770 = new VF.Stave(1113, 2059, 315);
stavesmo312770.setAttribute('id', 'stavesmo312770');
stavesmo312770.setBegBarType(VF.Barline.type.NONE);
stavesmo312770.setContext(context);
stavesmo312770.draw();
smo312770v0.draw(context, stavesmo312770);
smo312770v1.draw(context, stavesmo312770);
smo405997.setContext(context);
smo405997.draw();
smo405998.setContext(context);
smo405998.draw();
const fmtsmo25995967 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo259959v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259959v0ar = [];
const smo259938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo259938.setAttribute('id', 'smo259938');
smo259959v0ar.push(smo259938);
const smo259939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo259939.setAttribute('id', 'smo259939');
const smo259940 = new VF.Annotation('a');
smo259940.setAttribute('id', 'smo259940');
smo259940.setFont('times', 12, 'normal');
smo259940.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259939.addModifier(smo259940);
smo259940.addClass('lyric lyric-0');
smo259959v0ar.push(smo259939);
const smo259941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259941.setAttribute('id', 'smo259941');
smo259959v0ar.push(smo259941);
const smo259942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259942.setAttribute('id', 'smo259942');
smo259959v0ar.push(smo259942);
const smo259943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259943.setAttribute('id', 'smo259943');
smo259959v0ar.push(smo259943);
smo259959v0.addTickables(smo259959v0ar)
fmtsmo25995967.joinVoices([smo259959v0]);
const fmtsmo26295267 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo262952v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo262952v0ar = [];
const smo262932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo262932.setAttribute('id', 'smo262932');
smo262952v0ar.push(smo262932);
const smo262933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo262933.setAttribute('id', 'smo262933');
const smo262934 = new VF.Annotation('a');
smo262934.setAttribute('id', 'smo262934');
smo262934.setFont('times', 12, 'normal');
smo262934.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262933.addModifier(smo262934);
smo262934.addClass('lyric lyric-0');
smo262952v0ar.push(smo262933);
const smo262935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262935.setAttribute('id', 'smo262935');
smo262952v0ar.push(smo262935);
const smo262936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262936.setAttribute('id', 'smo262936');
smo262952v0ar.push(smo262936);
smo262952v0.addTickables(smo262952v0ar)
fmtsmo26295267.joinVoices([smo262952v0]);
const fmtsmo26609667 = new VF.Formatter();
//
// voices and notes for stave 2 67
const smo266096v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266096v0ar = [];
const smo266075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo266075.setAttribute('id', 'smo266075');
smo266096v0ar.push(smo266075);
const smo266076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo266076.setAttribute('id', 'smo266076');
const smo266077 = new VF.Annotation('a');
smo266077.setAttribute('id', 'smo266077');
smo266077.setFont('times', 12, 'normal');
smo266077.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266076.addModifier(smo266077);
smo266077.addClass('lyric lyric-0');
smo266096v0ar.push(smo266076);
const smo266078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266078.setAttribute('id', 'smo266078');
smo266096v0ar.push(smo266078);
const smo266079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266079.setAttribute('id', 'smo266079');
smo266096v0ar.push(smo266079);
const smo266080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266080.setAttribute('id', 'smo266080');
smo266096v0ar.push(smo266080);
smo266096v0.addTickables(smo266096v0ar)
fmtsmo26609667.joinVoices([smo266096v0]);
const fmtsmo26921267 = new VF.Formatter();
//
// voices and notes for stave 3 67
const smo269212v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269212v0ar = [];
const smo269191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo269191.setAttribute('id', 'smo269191');
smo269212v0ar.push(smo269191);
const smo269192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo269192.setAttribute('id', 'smo269192');
const smo269193 = new VF.Annotation('a');
smo269193.setAttribute('id', 'smo269193');
smo269193.setFont('times', 12, 'normal');
smo269193.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269192.addModifier(smo269193);
smo269193.addClass('lyric lyric-0');
smo269212v0ar.push(smo269192);
const smo269194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269194.setAttribute('id', 'smo269194');
smo269212v0ar.push(smo269194);
const smo269195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269195.setAttribute('id', 'smo269195');
smo269212v0ar.push(smo269195);
const smo269196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269196.setAttribute('id', 'smo269196');
smo269212v0ar.push(smo269196);
smo269212v0.addTickables(smo269212v0ar)
fmtsmo26921267.joinVoices([smo269212v0]);
const fmtsmo27223167 = new VF.Formatter();
//
// voices and notes for stave 4 67
const smo272231v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272231v0ar = [];
const smo272210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272210.setAttribute('id', 'smo272210');
smo272231v0ar.push(smo272210);
const smo272211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo272211.setAttribute('id', 'smo272211');
const smo272212 = new VF.Annotation('a');
smo272212.setAttribute('id', 'smo272212');
smo272212.setFont('times', 12, 'normal');
smo272212.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272211.addModifier(smo272212);
smo272212.addClass('lyric lyric-0');
smo272231v0ar.push(smo272211);
const smo272213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo272213.setAttribute('id', 'smo272213');
smo272231v0ar.push(smo272213);
const smo272214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo272214.setAttribute('id', 'smo272214');
smo272231v0ar.push(smo272214);
const smo272215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo272215.setAttribute('id', 'smo272215');
smo272231v0ar.push(smo272215);
smo272231v0.addTickables(smo272231v0ar)
fmtsmo27223167.joinVoices([smo272231v0]);
const fmtsmo27533867 = new VF.Formatter();
//
// voices and notes for stave 5 67
const smo275338v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275338v0ar = [];
const smo275317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275317.setAttribute('id', 'smo275317');
smo275338v0ar.push(smo275317);
const smo275318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo275318.setAttribute('id', 'smo275318');
const smo275319 = new VF.Annotation('a');
smo275319.setAttribute('id', 'smo275319');
smo275319.setFont('times', 12, 'normal');
smo275319.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275318.addModifier(smo275319);
smo275319.addClass('lyric lyric-0');
smo275338v0ar.push(smo275318);
const smo275320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo275320.setAttribute('id', 'smo275320');
smo275338v0ar.push(smo275320);
const smo275321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo275321.setAttribute('id', 'smo275321');
smo275338v0ar.push(smo275321);
const smo275322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo275322.setAttribute('id', 'smo275322');
smo275338v0ar.push(smo275322);
smo275338v0.addTickables(smo275338v0ar)
fmtsmo27533867.joinVoices([smo275338v0]);
const fmtsmo27845067 = new VF.Formatter();
//
// voices and notes for stave 6 67
const smo278450v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278450v0ar = [];
const smo278429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo278429.setAttribute('id', 'smo278429');
smo278450v0ar.push(smo278429);
const smo278430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo278430.setAttribute('id', 'smo278430');
const smo278431 = new VF.Annotation('a');
smo278431.setAttribute('id', 'smo278431');
smo278431.setFont('times', 12, 'normal');
smo278431.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278430.addModifier(smo278431);
smo278431.addClass('lyric lyric-0');
smo278450v0ar.push(smo278430);
const smo278432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278432.setAttribute('id', 'smo278432');
smo278450v0ar.push(smo278432);
const smo278433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278433.setAttribute('id', 'smo278433');
smo278450v0ar.push(smo278433);
const smo278434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278434.setAttribute('id', 'smo278434');
smo278450v0ar.push(smo278434);
smo278450v0.addTickables(smo278450v0ar)
fmtsmo27845067.joinVoices([smo278450v0]);
const fmtsmo28155967 = new VF.Formatter();
//
// voices and notes for stave 7 67
const smo281559v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281559v0ar = [];
const smo281538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281538.setAttribute('id', 'smo281538');
smo281559v0ar.push(smo281538);
const smo281539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo281539.setAttribute('id', 'smo281539');
const smo281540 = new VF.Annotation('a');
smo281540.setAttribute('id', 'smo281540');
smo281540.setFont('times', 12, 'normal');
smo281540.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281539.addModifier(smo281540);
smo281540.addClass('lyric lyric-0');
smo281559v0ar.push(smo281539);
const smo281541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281541.setAttribute('id', 'smo281541');
smo281559v0ar.push(smo281541);
const smo281542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281542.setAttribute('id', 'smo281542');
smo281559v0ar.push(smo281542);
const smo281543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281543.setAttribute('id', 'smo281543');
smo281559v0ar.push(smo281543);
smo281559v0.addTickables(smo281559v0ar)
fmtsmo28155967.joinVoices([smo281559v0]);
const fmtsmo28464567 = new VF.Formatter();
//
// voices and notes for stave 8 67
const smo284645v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284645v0ar = [];
const smo284624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo284624.setAttribute('id', 'smo284624');
smo284645v0ar.push(smo284624);
const smo284625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo284625.setAttribute('id', 'smo284625');
const smo284626 = new VF.Annotation('a');
smo284626.setAttribute('id', 'smo284626');
smo284626.setFont('times', 12, 'normal');
smo284626.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284625.addModifier(smo284626);
smo284626.addClass('lyric lyric-0');
smo284645v0ar.push(smo284625);
const smo284627 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo284627.setAttribute('id', 'smo284627');
smo284645v0ar.push(smo284627);
const smo284628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo284628.setAttribute('id', 'smo284628');
smo284645v0ar.push(smo284628);
const smo284629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo284629.setAttribute('id', 'smo284629');
smo284645v0ar.push(smo284629);
smo284645v0.addTickables(smo284645v0ar)
fmtsmo28464567.joinVoices([smo284645v0]);
const fmtsmo28773467 = new VF.Formatter();
//
// voices and notes for stave 9 67
const smo287734v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287734v0ar = [];
const smo287713 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287713.setAttribute('id', 'smo287713');
smo287734v0ar.push(smo287713);
const smo287714 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo287714.setAttribute('id', 'smo287714');
const smo287715 = new VF.Annotation('a');
smo287715.setAttribute('id', 'smo287715');
smo287715.setFont('times', 12, 'normal');
smo287715.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287714.addModifier(smo287715);
smo287715.addClass('lyric lyric-0');
smo287734v0ar.push(smo287714);
const smo287716 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287716.setAttribute('id', 'smo287716');
smo287734v0ar.push(smo287716);
const smo287717 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287717.setAttribute('id', 'smo287717');
smo287734v0ar.push(smo287717);
const smo287718 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287718.setAttribute('id', 'smo287718');
smo287734v0ar.push(smo287718);
smo287734v0.addTickables(smo287734v0ar)
fmtsmo28773467.joinVoices([smo287734v0]);
const fmtsmo29077467 = new VF.Formatter();
//
// voices and notes for stave 10 67
const smo290774v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290774v0ar = [];
const smo290753 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290753.setAttribute('id', 'smo290753');
smo290774v0ar.push(smo290753);
const smo290754 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo290754.setAttribute('id', 'smo290754');
const smo290755 = new VF.Annotation('a');
smo290755.setAttribute('id', 'smo290755');
smo290755.setFont('times', 12, 'normal');
smo290755.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290754.addModifier(smo290755);
smo290755.addClass('lyric lyric-0');
smo290774v0ar.push(smo290754);
const smo290756 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290756.setAttribute('id', 'smo290756');
smo290774v0ar.push(smo290756);
const smo290757 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290757.setAttribute('id', 'smo290757');
smo290774v0ar.push(smo290757);
const smo290758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290758.setAttribute('id', 'smo290758');
smo290774v0ar.push(smo290758);
smo290774v0.addTickables(smo290774v0ar)
fmtsmo29077467.joinVoices([smo290774v0]);
const fmtsmo29382867 = new VF.Formatter();
//
// voices and notes for stave 11 67
const smo293828v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293828v0ar = [];
const smo293807 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293807.setAttribute('id', 'smo293807');
smo293828v0ar.push(smo293807);
const smo293808 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo293808.setAttribute('id', 'smo293808');
const smo293809 = new VF.Annotation('a');
smo293809.setAttribute('id', 'smo293809');
smo293809.setFont('times', 12, 'normal');
smo293809.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293808.addModifier(smo293809);
smo293809.addClass('lyric lyric-0');
smo293828v0ar.push(smo293808);
const smo293810 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293810.setAttribute('id', 'smo293810');
smo293828v0ar.push(smo293810);
const smo293811 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293811.setAttribute('id', 'smo293811');
smo293828v0ar.push(smo293811);
const smo293812 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293812.setAttribute('id', 'smo293812');
smo293828v0ar.push(smo293812);
smo293828v0.addTickables(smo293828v0ar)
fmtsmo29382867.joinVoices([smo293828v0]);
const fmtsmo29687167 = new VF.Formatter();
//
// voices and notes for stave 12 67
const smo296871v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296871v0ar = [];
const smo296850 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo296850.setAttribute('id', 'smo296850');
smo296871v0ar.push(smo296850);
const smo296851 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo296851.setAttribute('id', 'smo296851');
const smo296852 = new VF.Annotation('a');
smo296852.setAttribute('id', 'smo296852');
smo296852.setFont('times', 12, 'normal');
smo296852.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296851.addModifier(smo296852);
smo296852.addClass('lyric lyric-0');
smo296871v0ar.push(smo296851);
const smo296853 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo296853.setAttribute('id', 'smo296853');
smo296871v0ar.push(smo296853);
const smo296854 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo296854.setAttribute('id', 'smo296854');
smo296871v0ar.push(smo296854);
const smo296855 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo296855.setAttribute('id', 'smo296855');
smo296871v0ar.push(smo296855);
smo296871v0.addTickables(smo296871v0ar)
fmtsmo29687167.joinVoices([smo296871v0]);
const fmtsmo30007067 = new VF.Formatter();
//
// voices and notes for stave 13 67
const smo300070v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300070v0ar = [];
const smo300049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo300049.setAttribute('id', 'smo300049');
smo300049.addModifier(new VF.Dot(), 0);
smo300049.addModifier(new VF.Dot(), 1);
smo300049.addModifier(new VF.Dot(), 2);
smo300070v0ar.push(smo300049);
const smo300050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo300050.setAttribute('id', 'smo300050');
smo300070v0ar.push(smo300050);
const smo300051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo300051.setAttribute('id', 'smo300051');
smo300070v0ar.push(smo300051);
const smo300052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo300052.setAttribute('id', 'smo300052');
smo300070v0ar.push(smo300052);
const smo300053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo300053.setAttribute('id', 'smo300053');
smo300070v0ar.push(smo300053);
const smo300054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo300054.setAttribute('id', 'smo300054');
smo300070v0ar.push(smo300054);
smo300070v0.addTickables(smo300070v0ar)
fmtsmo30007067.joinVoices([smo300070v0]);
const fmtsmo30328367 = new VF.Formatter();
//
// voices and notes for stave 14 67
const smo303283v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303283v0ar = [];
const smo303262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo303262.setAttribute('id', 'smo303262');
smo303262.addModifier(new VF.Dot(), 0);
smo303262.addModifier(new VF.Dot(), 1);
smo303262.addModifier(new VF.Dot(), 2);
smo303283v0ar.push(smo303262);
const smo303263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo303263.setAttribute('id', 'smo303263');
smo303283v0ar.push(smo303263);
const smo303264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo303264.setAttribute('id', 'smo303264');
smo303283v0ar.push(smo303264);
const smo303265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo303265.setAttribute('id', 'smo303265');
smo303283v0ar.push(smo303265);
const smo303266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo303266.setAttribute('id', 'smo303266');
smo303283v0ar.push(smo303266);
const smo303267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo303267.setAttribute('id', 'smo303267');
smo303283v0ar.push(smo303267);
smo303283v0.addTickables(smo303283v0ar)
fmtsmo30328367.joinVoices([smo303283v0]);
const fmtsmo30647867 = new VF.Formatter();
//
// voices and notes for stave 15 67
const smo306478v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306478v0ar = [];
const smo306457 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo306457.setAttribute('id', 'smo306457');
smo306457.addModifier(new VF.Dot(), 0);
smo306478v0ar.push(smo306457);
const smo306458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo306458.setAttribute('id', 'smo306458');
smo306478v0ar.push(smo306458);
const smo306459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo306459.setAttribute('id', 'smo306459');
smo306478v0ar.push(smo306459);
const smo306460 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo306460.setAttribute('id', 'smo306460');
smo306478v0ar.push(smo306460);
const smo306461 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo306461.setAttribute('id', 'smo306461');
smo306478v0ar.push(smo306461);
const smo306462 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo306462.setAttribute('id', 'smo306462');
smo306478v0ar.push(smo306462);
smo306478v0.addTickables(smo306478v0ar)
fmtsmo30647867.joinVoices([smo306478v0]);
const fmtsmo30959167 = new VF.Formatter();
//
// voices and notes for stave 16 67
const smo309591v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309591v0ar = [];
const smo309572 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo309572.setAttribute('id', 'smo309572');
smo309591v0ar.push(smo309572);
const smo309573 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo309573.setAttribute('id', 'smo309573');
smo309591v0ar.push(smo309573);
const smo309574 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo309574.setAttribute('id', 'smo309574');
smo309591v0ar.push(smo309574);
const smo309575 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo309575.setAttribute('id', 'smo309575');
smo309591v0ar.push(smo309575);
smo309591v0.addTickables(smo309591v0ar)
fmtsmo30959167.joinVoices([smo309591v0]);
const fmtsmo31279067 = new VF.Formatter();
//
// voices and notes for stave 17 67
const smo312790v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312790v0ar = [];
const smo312771 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312771.setAttribute('id', 'smo312771');
smo312790v0ar.push(smo312771);
const smo312772 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312772.setAttribute('id', 'smo312772');
smo312772.setStyle({ fillStyle: "#ffffff00" });
smo312790v0ar.push(smo312772);
smo312790v0.addTickables(smo312790v0ar)
fmtsmo31279067.joinVoices([smo312790v0]);
const smo312790v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312790v1ar = [];
const smo312773 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312773.setAttribute('id', 'smo312773');
smo312773.setStyle({ fillStyle: '#aaaaaa7f' });
smo312790v1ar.push(smo312773);
const smo312774 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312774.setAttribute('id', 'smo312774');
smo312774.setStyle({ fillStyle: "#115511" });
smo312790v1ar.push(smo312774);
smo312790v1.addTickables(smo312790v1ar)
fmtsmo31279067.joinVoices([smo312790v1]);
// create beam groups and tuplets for format grp smo314493 before formatting
const dirsmo406001 = smo259938.getStemDirection();
smo259938.setStemDirection(dirsmo406001);
smo259939.setStemDirection(dirsmo406001);
const smo406001 = new VF.Beam([smo259938,smo259939]);
const dirsmo406004 = smo262932.getStemDirection();
smo262932.setStemDirection(dirsmo406004);
smo262933.setStemDirection(dirsmo406004);
const smo406004 = new VF.Beam([smo262932,smo262933]);
const dirsmo406007 = smo266075.getStemDirection();
smo266075.setStemDirection(dirsmo406007);
smo266076.setStemDirection(dirsmo406007);
const smo406007 = new VF.Beam([smo266075,smo266076]);
const dirsmo406010 = smo269191.getStemDirection();
smo269191.setStemDirection(dirsmo406010);
smo269192.setStemDirection(dirsmo406010);
const smo406010 = new VF.Beam([smo269191,smo269192]);
const dirsmo406013 = smo272210.getStemDirection();
smo272210.setStemDirection(dirsmo406013);
smo272211.setStemDirection(dirsmo406013);
const smo406013 = new VF.Beam([smo272210,smo272211]);
 
// formatting measures in staff group smo314493
fmtsmo25995967.format([smo259959v0,smo262952v0,smo266096v0,smo269212v0,smo272231v0], 289);
const stavesmo259959 = new VF.Stave(1428, 210, 303);
stavesmo259959.setAttribute('id', 'stavesmo259959');
stavesmo259959.setBegBarType(VF.Barline.type.NONE);
stavesmo259959.setContext(context);
stavesmo259959.draw();
smo259959v0.draw(context, stavesmo259959);
smo406001.setContext(context);
smo406001.draw();
const stavesmo262952 = new VF.Stave(1428, 309, 303);
stavesmo262952.setAttribute('id', 'stavesmo262952');
stavesmo262952.setBegBarType(VF.Barline.type.NONE);
stavesmo262952.setContext(context);
stavesmo262952.draw();
smo262952v0.draw(context, stavesmo262952);
smo406004.setContext(context);
smo406004.draw();
const stavesmo266096 = new VF.Stave(1428, 423, 303);
stavesmo266096.setAttribute('id', 'stavesmo266096');
stavesmo266096.setBegBarType(VF.Barline.type.NONE);
stavesmo266096.setContext(context);
stavesmo266096.draw();
smo266096v0.draw(context, stavesmo266096);
smo406007.setContext(context);
smo406007.draw();
const stavesmo269212 = new VF.Stave(1428, 532, 303);
stavesmo269212.setAttribute('id', 'stavesmo269212');
stavesmo269212.setBegBarType(VF.Barline.type.NONE);
stavesmo269212.setContext(context);
stavesmo269212.draw();
smo269212v0.draw(context, stavesmo269212);
smo406010.setContext(context);
smo406010.draw();
const stavesmo272231 = new VF.Stave(1428, 631, 303);
stavesmo272231.setAttribute('id', 'stavesmo272231');
stavesmo272231.setBegBarType(VF.Barline.type.NONE);
stavesmo272231.setContext(context);
stavesmo272231.draw();
smo272231v0.draw(context, stavesmo272231);
smo406013.setContext(context);
smo406013.draw();
// create beam groups and tuplets for format grp smo314495 before formatting
const dirsmo406016 = smo275317.getStemDirection();
smo275317.setStemDirection(dirsmo406016);
smo275318.setStemDirection(dirsmo406016);
const smo406016 = new VF.Beam([smo275317,smo275318]);
const dirsmo406019 = smo278429.getStemDirection();
smo278429.setStemDirection(dirsmo406019);
smo278430.setStemDirection(dirsmo406019);
const smo406019 = new VF.Beam([smo278429,smo278430]);
const dirsmo406022 = smo281538.getStemDirection();
smo281538.setStemDirection(dirsmo406022);
smo281539.setStemDirection(dirsmo406022);
const smo406022 = new VF.Beam([smo281538,smo281539]);
const dirsmo406025 = smo284624.getStemDirection();
smo284624.setStemDirection(dirsmo406025);
smo284625.setStemDirection(dirsmo406025);
const smo406025 = new VF.Beam([smo284624,smo284625]);
 
// formatting measures in staff group smo314495
fmtsmo27533867.format([smo275338v0,smo278450v0,smo281559v0,smo284645v0], 289);
const stavesmo275338 = new VF.Stave(1428, 745, 303);
stavesmo275338.setAttribute('id', 'stavesmo275338');
stavesmo275338.setBegBarType(VF.Barline.type.NONE);
stavesmo275338.setContext(context);
stavesmo275338.draw();
smo275338v0.draw(context, stavesmo275338);
smo406016.setContext(context);
smo406016.draw();
const stavesmo278450 = new VF.Stave(1428, 853, 303);
stavesmo278450.setAttribute('id', 'stavesmo278450');
stavesmo278450.setBegBarType(VF.Barline.type.NONE);
stavesmo278450.setContext(context);
stavesmo278450.draw();
smo278450v0.draw(context, stavesmo278450);
smo406019.setContext(context);
smo406019.draw();
const stavesmo281559 = new VF.Stave(1428, 962, 303);
stavesmo281559.setAttribute('id', 'stavesmo281559');
stavesmo281559.setBegBarType(VF.Barline.type.NONE);
stavesmo281559.setContext(context);
stavesmo281559.draw();
smo281559v0.draw(context, stavesmo281559);
smo406022.setContext(context);
smo406022.draw();
const stavesmo284645 = new VF.Stave(1428, 1071, 303);
stavesmo284645.setAttribute('id', 'stavesmo284645');
stavesmo284645.setBegBarType(VF.Barline.type.NONE);
stavesmo284645.setContext(context);
stavesmo284645.draw();
smo284645v0.draw(context, stavesmo284645);
smo406025.setContext(context);
smo406025.draw();
// create beam groups and tuplets for format grp smo314497 before formatting
const dirsmo406028 = smo287713.getStemDirection();
smo287713.setStemDirection(dirsmo406028);
smo287714.setStemDirection(dirsmo406028);
const smo406028 = new VF.Beam([smo287713,smo287714]);
const dirsmo406031 = smo290753.getStemDirection();
smo290753.setStemDirection(dirsmo406031);
smo290754.setStemDirection(dirsmo406031);
const smo406031 = new VF.Beam([smo290753,smo290754]);
const dirsmo406034 = smo293807.getStemDirection();
smo293807.setStemDirection(dirsmo406034);
smo293808.setStemDirection(dirsmo406034);
const smo406034 = new VF.Beam([smo293807,smo293808]);
const dirsmo406037 = smo296850.getStemDirection();
smo296850.setStemDirection(dirsmo406037);
smo296851.setStemDirection(dirsmo406037);
const smo406037 = new VF.Beam([smo296850,smo296851]);
 
// formatting measures in staff group smo314497
fmtsmo28773467.format([smo287734v0,smo290774v0,smo293828v0,smo296871v0], 289);
const stavesmo287734 = new VF.Stave(1428, 1200, 303);
stavesmo287734.setAttribute('id', 'stavesmo287734');
stavesmo287734.setBegBarType(VF.Barline.type.NONE);
stavesmo287734.setContext(context);
stavesmo287734.draw();
smo287734v0.draw(context, stavesmo287734);
smo406028.setContext(context);
smo406028.draw();
const stavesmo290774 = new VF.Stave(1428, 1329, 303);
stavesmo290774.setAttribute('id', 'stavesmo290774');
stavesmo290774.setBegBarType(VF.Barline.type.NONE);
stavesmo290774.setContext(context);
stavesmo290774.draw();
smo290774v0.draw(context, stavesmo290774);
smo406031.setContext(context);
smo406031.draw();
const stavesmo293828 = new VF.Stave(1428, 1458, 303);
stavesmo293828.setAttribute('id', 'stavesmo293828');
stavesmo293828.setBegBarType(VF.Barline.type.NONE);
stavesmo293828.setContext(context);
stavesmo293828.draw();
smo293828v0.draw(context, stavesmo293828);
smo406034.setContext(context);
smo406034.draw();
const stavesmo296871 = new VF.Stave(1428, 1587, 303);
stavesmo296871.setAttribute('id', 'stavesmo296871');
stavesmo296871.setBegBarType(VF.Barline.type.NONE);
stavesmo296871.setContext(context);
stavesmo296871.draw();
smo296871v0.draw(context, stavesmo296871);
smo406037.setContext(context);
smo406037.draw();
// create beam groups and tuplets for format grp smo301816 before formatting
const dirsmo406040 = smo300050.getStemDirection();
smo300050.setStemDirection(dirsmo406040);
smo300051.setStemDirection(dirsmo406040);
smo300052.setStemDirection(dirsmo406040);
smo300053.setStemDirection(dirsmo406040);
const smo406040 = new VF.Beam([smo300050,smo300051,smo300052,smo300053]);
 
// formatting measures in staff group smo301816
fmtsmo30007067.format([smo300070v0], 289);
const stavesmo300070 = new VF.Stave(1428, 1726, 303);
stavesmo300070.setAttribute('id', 'stavesmo300070');
stavesmo300070.setBegBarType(VF.Barline.type.NONE);
stavesmo300070.setContext(context);
stavesmo300070.draw();
smo300070v0.draw(context, stavesmo300070);
smo406040.setContext(context);
smo406040.draw();
// create beam groups and tuplets for format grp smo314491 before formatting
const dirsmo406043 = smo303263.getStemDirection();
smo303263.setStemDirection(dirsmo406043);
smo303264.setStemDirection(dirsmo406043);
smo303265.setStemDirection(dirsmo406043);
smo303266.setStemDirection(dirsmo406043);
const smo406043 = new VF.Beam([smo303263,smo303264,smo303265,smo303266]);
const dirsmo406046 = smo306458.getStemDirection();
smo306458.setStemDirection(dirsmo406046);
smo306459.setStemDirection(dirsmo406046);
smo306460.setStemDirection(dirsmo406046);
smo306461.setStemDirection(dirsmo406046);
const smo406046 = new VF.Beam([smo306458,smo306459,smo306460,smo306461]);
 
// formatting measures in staff group smo314491
fmtsmo30328367.format([smo303283v0,smo306478v0], 289);
const stavesmo303283 = new VF.Stave(1428, 1831, 303);
stavesmo303283.setAttribute('id', 'stavesmo303283');
stavesmo303283.setBegBarType(VF.Barline.type.NONE);
stavesmo303283.setContext(context);
stavesmo303283.draw();
smo303283v0.draw(context, stavesmo303283);
smo406043.setContext(context);
smo406043.draw();
const stavesmo306478 = new VF.Stave(1428, 1917, 303);
stavesmo306478.setAttribute('id', 'stavesmo306478');
stavesmo306478.setBegBarType(VF.Barline.type.NONE);
stavesmo306478.setContext(context);
stavesmo306478.draw();
smo306478v0.draw(context, stavesmo306478);
smo406046.setContext(context);
smo406046.draw();
// create beam groups and tuplets for format grp smo311329 before formatting
 
// formatting measures in staff group smo311329
fmtsmo30959167.format([smo309591v0], 289);
const stavesmo309591 = new VF.Stave(1428, 1988, 303);
stavesmo309591.setAttribute('id', 'stavesmo309591');
stavesmo309591.setBegBarType(VF.Barline.type.NONE);
stavesmo309591.setContext(context);
stavesmo309591.draw();
smo309591v0.draw(context, stavesmo309591);
// create beam groups and tuplets for format grp smo314485 before formatting
 
// formatting measures in staff group smo314485
fmtsmo31279067.format([smo312790v0,smo312790v1], 289);
const stavesmo312790 = new VF.Stave(1428, 2059, 303);
stavesmo312790.setAttribute('id', 'stavesmo312790');
stavesmo312790.setBegBarType(VF.Barline.type.NONE);
stavesmo312790.setContext(context);
stavesmo312790.draw();
smo312790v0.draw(context, stavesmo312790);
smo312790v1.draw(context, stavesmo312790);
const fmtsmo25997668 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo259976v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259976v0ar = [];
const smo259960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259960.setAttribute('id', 'smo259960');
smo259976v0ar.push(smo259960);
smo259976v0.addTickables(smo259976v0ar)
fmtsmo25997668.joinVoices([smo259976v0]);
const fmtsmo26296968 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo262969v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo262969v0ar = [];
const smo262953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262953.setAttribute('id', 'smo262953');
smo262969v0ar.push(smo262953);
smo262969v0.addTickables(smo262969v0ar)
fmtsmo26296968.joinVoices([smo262969v0]);
const fmtsmo26611368 = new VF.Formatter();
//
// voices and notes for stave 2 68
const smo266113v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266113v0ar = [];
const smo266097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266097.setAttribute('id', 'smo266097');
smo266113v0ar.push(smo266097);
smo266113v0.addTickables(smo266113v0ar)
fmtsmo26611368.joinVoices([smo266113v0]);
const fmtsmo26922968 = new VF.Formatter();
//
// voices and notes for stave 3 68
const smo269229v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269229v0ar = [];
const smo269213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269213.setAttribute('id', 'smo269213');
smo269229v0ar.push(smo269213);
smo269229v0.addTickables(smo269229v0ar)
fmtsmo26922968.joinVoices([smo269229v0]);
const fmtsmo27224868 = new VF.Formatter();
//
// voices and notes for stave 4 68
const smo272248v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272248v0ar = [];
const smo272232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo272232.setAttribute('id', 'smo272232');
smo272248v0ar.push(smo272232);
smo272248v0.addTickables(smo272248v0ar)
fmtsmo27224868.joinVoices([smo272248v0]);
const fmtsmo27535868 = new VF.Formatter();
//
// voices and notes for stave 5 68
const smo275358v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275358v0ar = [];
const smo275339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo275339.setAttribute('id', 'smo275339');
smo275358v0ar.push(smo275339);
const smo275340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo275340.setAttribute('id', 'smo275340');
smo275358v0ar.push(smo275340);
const smo275341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo275341.setAttribute('id', 'smo275341');
smo275358v0ar.push(smo275341);
const smo275342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo275342.setAttribute('id', 'smo275342');
smo275358v0ar.push(smo275342);
smo275358v0.addTickables(smo275358v0ar)
fmtsmo27535868.joinVoices([smo275358v0]);
const fmtsmo27846768 = new VF.Formatter();
//
// voices and notes for stave 6 68
const smo278467v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278467v0ar = [];
const smo278451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278451.setAttribute('id', 'smo278451');
smo278467v0ar.push(smo278451);
smo278467v0.addTickables(smo278467v0ar)
fmtsmo27846768.joinVoices([smo278467v0]);
const fmtsmo28157668 = new VF.Formatter();
//
// voices and notes for stave 7 68
const smo281576v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281576v0ar = [];
const smo281560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281560.setAttribute('id', 'smo281560');
smo281576v0ar.push(smo281560);
smo281576v0.addTickables(smo281576v0ar)
fmtsmo28157668.joinVoices([smo281576v0]);
const fmtsmo28466268 = new VF.Formatter();
//
// voices and notes for stave 8 68
const smo284662v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284662v0ar = [];
const smo284646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo284646.setAttribute('id', 'smo284646');
smo284662v0ar.push(smo284646);
smo284662v0.addTickables(smo284662v0ar)
fmtsmo28466268.joinVoices([smo284662v0]);
const fmtsmo28775168 = new VF.Formatter();
//
// voices and notes for stave 9 68
const smo287751v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287751v0ar = [];
const smo287735 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287735.setAttribute('id', 'smo287735');
smo287751v0ar.push(smo287735);
smo287751v0.addTickables(smo287751v0ar)
fmtsmo28775168.joinVoices([smo287751v0]);
const fmtsmo29079168 = new VF.Formatter();
//
// voices and notes for stave 10 68
const smo290791v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290791v0ar = [];
const smo290775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290775.setAttribute('id', 'smo290775');
smo290791v0ar.push(smo290775);
smo290791v0.addTickables(smo290791v0ar)
fmtsmo29079168.joinVoices([smo290791v0]);
const fmtsmo29384568 = new VF.Formatter();
//
// voices and notes for stave 11 68
const smo293845v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293845v0ar = [];
const smo293829 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293829.setAttribute('id', 'smo293829');
smo293845v0ar.push(smo293829);
smo293845v0.addTickables(smo293845v0ar)
fmtsmo29384568.joinVoices([smo293845v0]);
const fmtsmo29688868 = new VF.Formatter();
//
// voices and notes for stave 12 68
const smo296888v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296888v0ar = [];
const smo296872 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo296872.setAttribute('id', 'smo296872');
smo296888v0ar.push(smo296872);
smo296888v0.addTickables(smo296888v0ar)
fmtsmo29688868.joinVoices([smo296888v0]);
const fmtsmo30008768 = new VF.Formatter();
//
// voices and notes for stave 13 68
const smo300087v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300087v0ar = [];
const smo300071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo300071.setAttribute('id', 'smo300071');
smo300087v0ar.push(smo300071);
smo300087v0.addTickables(smo300087v0ar)
fmtsmo30008768.joinVoices([smo300087v0]);
const fmtsmo30330068 = new VF.Formatter();
//
// voices and notes for stave 14 68
const smo303300v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303300v0ar = [];
const smo303284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo303284.setAttribute('id', 'smo303284');
smo303300v0ar.push(smo303284);
smo303300v0.addTickables(smo303300v0ar)
fmtsmo30330068.joinVoices([smo303300v0]);
const fmtsmo30649568 = new VF.Formatter();
//
// voices and notes for stave 15 68
const smo306495v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306495v0ar = [];
const smo306479 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo306479.setAttribute('id', 'smo306479');
smo306495v0ar.push(smo306479);
smo306495v0.addTickables(smo306495v0ar)
fmtsmo30649568.joinVoices([smo306495v0]);
const fmtsmo30961168 = new VF.Formatter();
//
// voices and notes for stave 16 68
const smo309611v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309611v0ar = [];
const smo309592 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo309592.setAttribute('id', 'smo309592');
smo309592.addModifier(new VF.Dot(), 0);
smo309611v0ar.push(smo309592);
const smo309593 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo309593.setAttribute('id', 'smo309593');
smo309611v0ar.push(smo309593);
const smo309594 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo309594.setAttribute('id', 'smo309594');
smo309611v0ar.push(smo309594);
const smo309595 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo309595.setAttribute('id', 'smo309595');
smo309611v0ar.push(smo309595);
smo309611v0.addTickables(smo309611v0ar)
fmtsmo30961168.joinVoices([smo309611v0]);
const fmtsmo31281068 = new VF.Formatter();
//
// voices and notes for stave 17 68
const smo312810v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312810v0ar = [];
const smo312791 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312791.setAttribute('id', 'smo312791');
smo312810v0ar.push(smo312791);
const smo312792 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312792.setAttribute('id', 'smo312792');
smo312792.setStyle({ fillStyle: "#ffffff00" });
smo312810v0ar.push(smo312792);
smo312810v0.addTickables(smo312810v0ar)
fmtsmo31281068.joinVoices([smo312810v0]);
const smo312810v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312810v1ar = [];
const smo312793 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312793.setAttribute('id', 'smo312793');
smo312793.setStyle({ fillStyle: '#aaaaaa7f' });
smo312810v1ar.push(smo312793);
const smo312794 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312794.setAttribute('id', 'smo312794');
smo312794.setStyle({ fillStyle: "#115511" });
smo312810v1ar.push(smo312794);
smo312810v1.addTickables(smo312810v1ar)
fmtsmo31281068.joinVoices([smo312810v1]);
// create beam groups and tuplets for format grp smo314493 before formatting
 
// formatting measures in staff group smo314493
fmtsmo25997668.format([smo259976v0,smo262969v0,smo266113v0,smo269229v0,smo272248v0], 289);
const stavesmo259976 = new VF.Stave(1731, 210, 303);
stavesmo259976.setAttribute('id', 'stavesmo259976');
stavesmo259976.setBegBarType(VF.Barline.type.NONE);
stavesmo259976.setContext(context);
stavesmo259976.draw();
smo259976v0.draw(context, stavesmo259976);
const stavesmo262969 = new VF.Stave(1731, 309, 303);
stavesmo262969.setAttribute('id', 'stavesmo262969');
stavesmo262969.setBegBarType(VF.Barline.type.NONE);
stavesmo262969.setContext(context);
stavesmo262969.draw();
smo262969v0.draw(context, stavesmo262969);
const stavesmo266113 = new VF.Stave(1731, 423, 303);
stavesmo266113.setAttribute('id', 'stavesmo266113');
stavesmo266113.setBegBarType(VF.Barline.type.NONE);
stavesmo266113.setContext(context);
stavesmo266113.draw();
smo266113v0.draw(context, stavesmo266113);
const stavesmo269229 = new VF.Stave(1731, 532, 303);
stavesmo269229.setAttribute('id', 'stavesmo269229');
stavesmo269229.setBegBarType(VF.Barline.type.NONE);
stavesmo269229.setContext(context);
stavesmo269229.draw();
smo269229v0.draw(context, stavesmo269229);
const stavesmo272248 = new VF.Stave(1731, 631, 303);
stavesmo272248.setAttribute('id', 'stavesmo272248');
stavesmo272248.setBegBarType(VF.Barline.type.NONE);
stavesmo272248.setContext(context);
stavesmo272248.draw();
smo272248v0.draw(context, stavesmo272248);
// create beam groups and tuplets for format grp smo314495 before formatting
 
// formatting measures in staff group smo314495
fmtsmo27535868.format([smo275358v0,smo278467v0,smo281576v0,smo284662v0], 289);
const stavesmo275358 = new VF.Stave(1731, 745, 303);
stavesmo275358.setAttribute('id', 'stavesmo275358');
stavesmo275358.setBegBarType(VF.Barline.type.NONE);
stavesmo275358.setContext(context);
stavesmo275358.draw();
smo275358v0.draw(context, stavesmo275358);
const stavesmo278467 = new VF.Stave(1731, 853, 303);
stavesmo278467.setAttribute('id', 'stavesmo278467');
stavesmo278467.setBegBarType(VF.Barline.type.NONE);
stavesmo278467.setContext(context);
stavesmo278467.draw();
smo278467v0.draw(context, stavesmo278467);
const stavesmo281576 = new VF.Stave(1731, 962, 303);
stavesmo281576.setAttribute('id', 'stavesmo281576');
stavesmo281576.setBegBarType(VF.Barline.type.NONE);
stavesmo281576.setContext(context);
stavesmo281576.draw();
smo281576v0.draw(context, stavesmo281576);
const stavesmo284662 = new VF.Stave(1731, 1071, 303);
stavesmo284662.setAttribute('id', 'stavesmo284662');
stavesmo284662.setBegBarType(VF.Barline.type.NONE);
stavesmo284662.setContext(context);
stavesmo284662.draw();
smo284662v0.draw(context, stavesmo284662);
// create beam groups and tuplets for format grp smo314497 before formatting
 
// formatting measures in staff group smo314497
fmtsmo28775168.format([smo287751v0,smo290791v0,smo293845v0,smo296888v0], 289);
const stavesmo287751 = new VF.Stave(1731, 1200, 303);
stavesmo287751.setAttribute('id', 'stavesmo287751');
stavesmo287751.setBegBarType(VF.Barline.type.NONE);
stavesmo287751.setContext(context);
stavesmo287751.draw();
smo287751v0.draw(context, stavesmo287751);
const stavesmo290791 = new VF.Stave(1731, 1329, 303);
stavesmo290791.setAttribute('id', 'stavesmo290791');
stavesmo290791.setBegBarType(VF.Barline.type.NONE);
stavesmo290791.setContext(context);
stavesmo290791.draw();
smo290791v0.draw(context, stavesmo290791);
const stavesmo293845 = new VF.Stave(1731, 1458, 303);
stavesmo293845.setAttribute('id', 'stavesmo293845');
stavesmo293845.setBegBarType(VF.Barline.type.NONE);
stavesmo293845.setContext(context);
stavesmo293845.draw();
smo293845v0.draw(context, stavesmo293845);
const stavesmo296888 = new VF.Stave(1731, 1587, 303);
stavesmo296888.setAttribute('id', 'stavesmo296888');
stavesmo296888.setBegBarType(VF.Barline.type.NONE);
stavesmo296888.setContext(context);
stavesmo296888.draw();
smo296888v0.draw(context, stavesmo296888);
// create beam groups and tuplets for format grp smo301816 before formatting
 
// formatting measures in staff group smo301816
fmtsmo30008768.format([smo300087v0], 289);
const stavesmo300087 = new VF.Stave(1731, 1726, 303);
stavesmo300087.setAttribute('id', 'stavesmo300087');
stavesmo300087.setBegBarType(VF.Barline.type.NONE);
stavesmo300087.setContext(context);
stavesmo300087.draw();
smo300087v0.draw(context, stavesmo300087);
// create beam groups and tuplets for format grp smo314491 before formatting
 
// formatting measures in staff group smo314491
fmtsmo30330068.format([smo303300v0,smo306495v0], 289);
const stavesmo303300 = new VF.Stave(1731, 1831, 303);
stavesmo303300.setAttribute('id', 'stavesmo303300');
stavesmo303300.setBegBarType(VF.Barline.type.NONE);
stavesmo303300.setContext(context);
stavesmo303300.draw();
smo303300v0.draw(context, stavesmo303300);
const stavesmo306495 = new VF.Stave(1731, 1917, 303);
stavesmo306495.setAttribute('id', 'stavesmo306495');
stavesmo306495.setBegBarType(VF.Barline.type.NONE);
stavesmo306495.setContext(context);
stavesmo306495.draw();
smo306495v0.draw(context, stavesmo306495);
// create beam groups and tuplets for format grp smo311329 before formatting
 
// formatting measures in staff group smo311329
fmtsmo30961168.format([smo309611v0], 289);
const stavesmo309611 = new VF.Stave(1731, 1988, 303);
stavesmo309611.setAttribute('id', 'stavesmo309611');
stavesmo309611.setBegBarType(VF.Barline.type.NONE);
stavesmo309611.setContext(context);
stavesmo309611.draw();
smo309611v0.draw(context, stavesmo309611);
// create beam groups and tuplets for format grp smo314485 before formatting
 
// formatting measures in staff group smo314485
fmtsmo31281068.format([smo312810v0,smo312810v1], 289);
const stavesmo312810 = new VF.Stave(1731, 2059, 303);
stavesmo312810.setAttribute('id', 'stavesmo312810');
stavesmo312810.setBegBarType(VF.Barline.type.NONE);
stavesmo312810.setContext(context);
stavesmo312810.draw();
smo312810v0.draw(context, stavesmo312810);
smo312810v1.draw(context, stavesmo312810);
const fmtsmo25999369 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo259993v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259993v0ar = [];
const smo259977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259977.setAttribute('id', 'smo259977');
smo259993v0ar.push(smo259977);
smo259993v0.addTickables(smo259993v0ar)
fmtsmo25999369.joinVoices([smo259993v0]);
const fmtsmo26298669 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo262986v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo262986v0ar = [];
const smo262970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262970.setAttribute('id', 'smo262970');
smo262986v0ar.push(smo262970);
smo262986v0.addTickables(smo262986v0ar)
fmtsmo26298669.joinVoices([smo262986v0]);
const fmtsmo26613069 = new VF.Formatter();
//
// voices and notes for stave 2 69
const smo266130v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266130v0ar = [];
const smo266114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266114.setAttribute('id', 'smo266114');
smo266130v0ar.push(smo266114);
smo266130v0.addTickables(smo266130v0ar)
fmtsmo26613069.joinVoices([smo266130v0]);
const fmtsmo26924669 = new VF.Formatter();
//
// voices and notes for stave 3 69
const smo269246v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269246v0ar = [];
const smo269230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269230.setAttribute('id', 'smo269230');
smo269246v0ar.push(smo269230);
smo269246v0.addTickables(smo269246v0ar)
fmtsmo26924669.joinVoices([smo269246v0]);
const fmtsmo27226569 = new VF.Formatter();
//
// voices and notes for stave 4 69
const smo272265v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272265v0ar = [];
const smo272249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo272249.setAttribute('id', 'smo272249');
smo272265v0ar.push(smo272249);
smo272265v0.addTickables(smo272265v0ar)
fmtsmo27226569.joinVoices([smo272265v0]);
const fmtsmo27537869 = new VF.Formatter();
//
// voices and notes for stave 5 69
const smo275378v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275378v0ar = [];
const smo275359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo275359.setAttribute('id', 'smo275359');
smo275378v0ar.push(smo275359);
const smo275360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo275360.setAttribute('id', 'smo275360');
smo275378v0ar.push(smo275360);
const smo275361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo275361.setAttribute('id', 'smo275361');
smo275378v0ar.push(smo275361);
const smo275362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo275362.setAttribute('id', 'smo275362');
smo275378v0ar.push(smo275362);
smo275378v0.addTickables(smo275378v0ar)
fmtsmo27537869.joinVoices([smo275378v0]);
const fmtsmo27848469 = new VF.Formatter();
//
// voices and notes for stave 6 69
const smo278484v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278484v0ar = [];
const smo278468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278468.setAttribute('id', 'smo278468');
smo278484v0ar.push(smo278468);
smo278484v0.addTickables(smo278484v0ar)
fmtsmo27848469.joinVoices([smo278484v0]);
const fmtsmo28159369 = new VF.Formatter();
//
// voices and notes for stave 7 69
const smo281593v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281593v0ar = [];
const smo281577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281577.setAttribute('id', 'smo281577');
smo281593v0ar.push(smo281577);
smo281593v0.addTickables(smo281593v0ar)
fmtsmo28159369.joinVoices([smo281593v0]);
const fmtsmo28467969 = new VF.Formatter();
//
// voices and notes for stave 8 69
const smo284679v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284679v0ar = [];
const smo284663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo284663.setAttribute('id', 'smo284663');
smo284679v0ar.push(smo284663);
smo284679v0.addTickables(smo284679v0ar)
fmtsmo28467969.joinVoices([smo284679v0]);
const fmtsmo28776869 = new VF.Formatter();
//
// voices and notes for stave 9 69
const smo287768v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287768v0ar = [];
const smo287752 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287752.setAttribute('id', 'smo287752');
smo287768v0ar.push(smo287752);
smo287768v0.addTickables(smo287768v0ar)
fmtsmo28776869.joinVoices([smo287768v0]);
const fmtsmo29080869 = new VF.Formatter();
//
// voices and notes for stave 10 69
const smo290808v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290808v0ar = [];
const smo290792 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290792.setAttribute('id', 'smo290792');
smo290808v0ar.push(smo290792);
smo290808v0.addTickables(smo290808v0ar)
fmtsmo29080869.joinVoices([smo290808v0]);
const fmtsmo29386269 = new VF.Formatter();
//
// voices and notes for stave 11 69
const smo293862v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293862v0ar = [];
const smo293846 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293846.setAttribute('id', 'smo293846');
smo293862v0ar.push(smo293846);
smo293862v0.addTickables(smo293862v0ar)
fmtsmo29386269.joinVoices([smo293862v0]);
const fmtsmo29690569 = new VF.Formatter();
//
// voices and notes for stave 12 69
const smo296905v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296905v0ar = [];
const smo296889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo296889.setAttribute('id', 'smo296889');
smo296905v0ar.push(smo296889);
smo296905v0.addTickables(smo296905v0ar)
fmtsmo29690569.joinVoices([smo296905v0]);
const fmtsmo30010469 = new VF.Formatter();
//
// voices and notes for stave 13 69
const smo300104v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300104v0ar = [];
const smo300088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo300088.setAttribute('id', 'smo300088');
smo300104v0ar.push(smo300088);
smo300104v0.addTickables(smo300104v0ar)
fmtsmo30010469.joinVoices([smo300104v0]);
const fmtsmo30331769 = new VF.Formatter();
//
// voices and notes for stave 14 69
const smo303317v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303317v0ar = [];
const smo303301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo303301.setAttribute('id', 'smo303301');
smo303317v0ar.push(smo303301);
smo303317v0.addTickables(smo303317v0ar)
fmtsmo30331769.joinVoices([smo303317v0]);
const fmtsmo30651269 = new VF.Formatter();
//
// voices and notes for stave 15 69
const smo306512v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306512v0ar = [];
const smo306496 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo306496.setAttribute('id', 'smo306496');
smo306512v0ar.push(smo306496);
smo306512v0.addTickables(smo306512v0ar)
fmtsmo30651269.joinVoices([smo306512v0]);
const fmtsmo30963169 = new VF.Formatter();
//
// voices and notes for stave 16 69
const smo309631v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309631v0ar = [];
const smo309612 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo309612.setAttribute('id', 'smo309612');
smo309612.addModifier(new VF.Dot(), 0);
smo309631v0ar.push(smo309612);
const smo309613 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo309613.setAttribute('id', 'smo309613');
smo309631v0ar.push(smo309613);
const smo309614 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo309614.setAttribute('id', 'smo309614');
smo309631v0ar.push(smo309614);
const smo309615 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo309615.setAttribute('id', 'smo309615');
smo309631v0ar.push(smo309615);
smo309631v0.addTickables(smo309631v0ar)
fmtsmo30963169.joinVoices([smo309631v0]);
const fmtsmo31283069 = new VF.Formatter();
//
// voices and notes for stave 17 69
const smo312830v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312830v0ar = [];
const smo312811 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312811.setAttribute('id', 'smo312811');
smo312830v0ar.push(smo312811);
const smo312812 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312812.setAttribute('id', 'smo312812');
smo312812.setStyle({ fillStyle: "#ffffff00" });
smo312830v0ar.push(smo312812);
smo312830v0.addTickables(smo312830v0ar)
fmtsmo31283069.joinVoices([smo312830v0]);
const smo312830v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312830v1ar = [];
const smo312813 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312813.setAttribute('id', 'smo312813');
smo312813.setStyle({ fillStyle: '#aaaaaa7f' });
smo312830v1ar.push(smo312813);
const smo312814 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312814.setAttribute('id', 'smo312814');
smo312814.setStyle({ fillStyle: "#115511" });
smo312830v1ar.push(smo312814);
smo312830v1.addTickables(smo312830v1ar)
fmtsmo31283069.joinVoices([smo312830v1]);
// create beam groups and tuplets for format grp smo314493 before formatting
 
// formatting measures in staff group smo314493
fmtsmo25999369.format([smo259993v0,smo262986v0,smo266130v0,smo269246v0,smo272265v0], 289);
const stavesmo259993 = new VF.Stave(2034, 210, 303);
stavesmo259993.setAttribute('id', 'stavesmo259993');
stavesmo259993.setBegBarType(VF.Barline.type.NONE);
stavesmo259993.setContext(context);
stavesmo259993.draw();
smo259993v0.draw(context, stavesmo259993);
const stavesmo262986 = new VF.Stave(2034, 309, 303);
stavesmo262986.setAttribute('id', 'stavesmo262986');
stavesmo262986.setBegBarType(VF.Barline.type.NONE);
stavesmo262986.setContext(context);
stavesmo262986.draw();
smo262986v0.draw(context, stavesmo262986);
const stavesmo266130 = new VF.Stave(2034, 423, 303);
stavesmo266130.setAttribute('id', 'stavesmo266130');
stavesmo266130.setBegBarType(VF.Barline.type.NONE);
stavesmo266130.setContext(context);
stavesmo266130.draw();
smo266130v0.draw(context, stavesmo266130);
const stavesmo269246 = new VF.Stave(2034, 532, 303);
stavesmo269246.setAttribute('id', 'stavesmo269246');
stavesmo269246.setBegBarType(VF.Barline.type.NONE);
stavesmo269246.setContext(context);
stavesmo269246.draw();
smo269246v0.draw(context, stavesmo269246);
const stavesmo272265 = new VF.Stave(2034, 631, 303);
stavesmo272265.setAttribute('id', 'stavesmo272265');
stavesmo272265.setBegBarType(VF.Barline.type.NONE);
stavesmo272265.setContext(context);
stavesmo272265.draw();
smo272265v0.draw(context, stavesmo272265);
// create beam groups and tuplets for format grp smo314495 before formatting
 
// formatting measures in staff group smo314495
fmtsmo27537869.format([smo275378v0,smo278484v0,smo281593v0,smo284679v0], 289);
const stavesmo275378 = new VF.Stave(2034, 745, 303);
stavesmo275378.setAttribute('id', 'stavesmo275378');
stavesmo275378.setBegBarType(VF.Barline.type.NONE);
stavesmo275378.setContext(context);
stavesmo275378.draw();
smo275378v0.draw(context, stavesmo275378);
const stavesmo278484 = new VF.Stave(2034, 853, 303);
stavesmo278484.setAttribute('id', 'stavesmo278484');
stavesmo278484.setBegBarType(VF.Barline.type.NONE);
stavesmo278484.setContext(context);
stavesmo278484.draw();
smo278484v0.draw(context, stavesmo278484);
const stavesmo281593 = new VF.Stave(2034, 962, 303);
stavesmo281593.setAttribute('id', 'stavesmo281593');
stavesmo281593.setBegBarType(VF.Barline.type.NONE);
stavesmo281593.setContext(context);
stavesmo281593.draw();
smo281593v0.draw(context, stavesmo281593);
const stavesmo284679 = new VF.Stave(2034, 1071, 303);
stavesmo284679.setAttribute('id', 'stavesmo284679');
stavesmo284679.setBegBarType(VF.Barline.type.NONE);
stavesmo284679.setContext(context);
stavesmo284679.draw();
smo284679v0.draw(context, stavesmo284679);
// create beam groups and tuplets for format grp smo314497 before formatting
 
// formatting measures in staff group smo314497
fmtsmo28776869.format([smo287768v0,smo290808v0,smo293862v0,smo296905v0], 289);
const stavesmo287768 = new VF.Stave(2034, 1200, 303);
stavesmo287768.setAttribute('id', 'stavesmo287768');
stavesmo287768.setBegBarType(VF.Barline.type.NONE);
stavesmo287768.setContext(context);
stavesmo287768.draw();
smo287768v0.draw(context, stavesmo287768);
const stavesmo290808 = new VF.Stave(2034, 1329, 303);
stavesmo290808.setAttribute('id', 'stavesmo290808');
stavesmo290808.setBegBarType(VF.Barline.type.NONE);
stavesmo290808.setContext(context);
stavesmo290808.draw();
smo290808v0.draw(context, stavesmo290808);
const stavesmo293862 = new VF.Stave(2034, 1458, 303);
stavesmo293862.setAttribute('id', 'stavesmo293862');
stavesmo293862.setBegBarType(VF.Barline.type.NONE);
stavesmo293862.setContext(context);
stavesmo293862.draw();
smo293862v0.draw(context, stavesmo293862);
const stavesmo296905 = new VF.Stave(2034, 1587, 303);
stavesmo296905.setAttribute('id', 'stavesmo296905');
stavesmo296905.setBegBarType(VF.Barline.type.NONE);
stavesmo296905.setContext(context);
stavesmo296905.draw();
smo296905v0.draw(context, stavesmo296905);
// create beam groups and tuplets for format grp smo301816 before formatting
 
// formatting measures in staff group smo301816
fmtsmo30010469.format([smo300104v0], 289);
const stavesmo300104 = new VF.Stave(2034, 1726, 303);
stavesmo300104.setAttribute('id', 'stavesmo300104');
stavesmo300104.setBegBarType(VF.Barline.type.NONE);
stavesmo300104.setContext(context);
stavesmo300104.draw();
smo300104v0.draw(context, stavesmo300104);
// create beam groups and tuplets for format grp smo314491 before formatting
 
// formatting measures in staff group smo314491
fmtsmo30331769.format([smo303317v0,smo306512v0], 289);
const stavesmo303317 = new VF.Stave(2034, 1831, 303);
stavesmo303317.setAttribute('id', 'stavesmo303317');
stavesmo303317.setBegBarType(VF.Barline.type.NONE);
stavesmo303317.setContext(context);
stavesmo303317.draw();
smo303317v0.draw(context, stavesmo303317);
const stavesmo306512 = new VF.Stave(2034, 1917, 303);
stavesmo306512.setAttribute('id', 'stavesmo306512');
stavesmo306512.setBegBarType(VF.Barline.type.NONE);
stavesmo306512.setContext(context);
stavesmo306512.draw();
smo306512v0.draw(context, stavesmo306512);
// create beam groups and tuplets for format grp smo311329 before formatting
 
// formatting measures in staff group smo311329
fmtsmo30963169.format([smo309631v0], 289);
const stavesmo309631 = new VF.Stave(2034, 1988, 303);
stavesmo309631.setAttribute('id', 'stavesmo309631');
stavesmo309631.setBegBarType(VF.Barline.type.NONE);
stavesmo309631.setContext(context);
stavesmo309631.draw();
smo309631v0.draw(context, stavesmo309631);
// create beam groups and tuplets for format grp smo314485 before formatting
 
// formatting measures in staff group smo314485
fmtsmo31283069.format([smo312830v0,smo312830v1], 289);
const stavesmo312830 = new VF.Stave(2034, 2059, 303);
stavesmo312830.setAttribute('id', 'stavesmo312830');
stavesmo312830.setBegBarType(VF.Barline.type.NONE);
stavesmo312830.setContext(context);
stavesmo312830.draw();
smo312830v0.draw(context, stavesmo312830);
smo312830v1.draw(context, stavesmo312830);
const fmtsmo26001070 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo260010v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260010v0ar = [];
const smo259994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259994.setAttribute('id', 'smo259994');
smo260010v0ar.push(smo259994);
smo260010v0.addTickables(smo260010v0ar)
fmtsmo26001070.joinVoices([smo260010v0]);
const fmtsmo26300370 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo263003v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263003v0ar = [];
const smo262987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262987.setAttribute('id', 'smo262987');
smo263003v0ar.push(smo262987);
smo263003v0.addTickables(smo263003v0ar)
fmtsmo26300370.joinVoices([smo263003v0]);
const fmtsmo26614770 = new VF.Formatter();
//
// voices and notes for stave 2 70
const smo266147v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266147v0ar = [];
const smo266131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266131.setAttribute('id', 'smo266131');
smo266147v0ar.push(smo266131);
smo266147v0.addTickables(smo266147v0ar)
fmtsmo26614770.joinVoices([smo266147v0]);
const fmtsmo26926370 = new VF.Formatter();
//
// voices and notes for stave 3 70
const smo269263v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269263v0ar = [];
const smo269247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269247.setAttribute('id', 'smo269247');
smo269263v0ar.push(smo269247);
smo269263v0.addTickables(smo269263v0ar)
fmtsmo26926370.joinVoices([smo269263v0]);
const fmtsmo27228270 = new VF.Formatter();
//
// voices and notes for stave 4 70
const smo272282v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272282v0ar = [];
const smo272266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo272266.setAttribute('id', 'smo272266');
smo272282v0ar.push(smo272266);
smo272282v0.addTickables(smo272282v0ar)
fmtsmo27228270.joinVoices([smo272282v0]);
const fmtsmo27539870 = new VF.Formatter();
//
// voices and notes for stave 5 70
const smo275398v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275398v0ar = [];
const smo275379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo275379.setAttribute('id', 'smo275379');
smo275398v0ar.push(smo275379);
const smo275380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo275380.setAttribute('id', 'smo275380');
smo275398v0ar.push(smo275380);
const smo275381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo275381.setAttribute('id', 'smo275381');
smo275398v0ar.push(smo275381);
const smo275382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo275382.setAttribute('id', 'smo275382');
smo275398v0ar.push(smo275382);
smo275398v0.addTickables(smo275398v0ar)
fmtsmo27539870.joinVoices([smo275398v0]);
const fmtsmo27850170 = new VF.Formatter();
//
// voices and notes for stave 6 70
const smo278501v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278501v0ar = [];
const smo278485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278485.setAttribute('id', 'smo278485');
smo278501v0ar.push(smo278485);
smo278501v0.addTickables(smo278501v0ar)
fmtsmo27850170.joinVoices([smo278501v0]);
const fmtsmo28161070 = new VF.Formatter();
//
// voices and notes for stave 7 70
const smo281610v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281610v0ar = [];
const smo281594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281594.setAttribute('id', 'smo281594');
smo281610v0ar.push(smo281594);
smo281610v0.addTickables(smo281610v0ar)
fmtsmo28161070.joinVoices([smo281610v0]);
const fmtsmo28469670 = new VF.Formatter();
//
// voices and notes for stave 8 70
const smo284696v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284696v0ar = [];
const smo284680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo284680.setAttribute('id', 'smo284680');
smo284696v0ar.push(smo284680);
smo284696v0.addTickables(smo284696v0ar)
fmtsmo28469670.joinVoices([smo284696v0]);
const fmtsmo28778570 = new VF.Formatter();
//
// voices and notes for stave 9 70
const smo287785v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287785v0ar = [];
const smo287769 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287769.setAttribute('id', 'smo287769');
smo287785v0ar.push(smo287769);
smo287785v0.addTickables(smo287785v0ar)
fmtsmo28778570.joinVoices([smo287785v0]);
const fmtsmo29082570 = new VF.Formatter();
//
// voices and notes for stave 10 70
const smo290825v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290825v0ar = [];
const smo290809 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290809.setAttribute('id', 'smo290809');
smo290825v0ar.push(smo290809);
smo290825v0.addTickables(smo290825v0ar)
fmtsmo29082570.joinVoices([smo290825v0]);
const fmtsmo29387970 = new VF.Formatter();
//
// voices and notes for stave 11 70
const smo293879v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293879v0ar = [];
const smo293863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293863.setAttribute('id', 'smo293863');
smo293879v0ar.push(smo293863);
smo293879v0.addTickables(smo293879v0ar)
fmtsmo29387970.joinVoices([smo293879v0]);
const fmtsmo29692270 = new VF.Formatter();
//
// voices and notes for stave 12 70
const smo296922v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296922v0ar = [];
const smo296906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo296906.setAttribute('id', 'smo296906');
smo296922v0ar.push(smo296906);
smo296922v0.addTickables(smo296922v0ar)
fmtsmo29692270.joinVoices([smo296922v0]);
const fmtsmo30012170 = new VF.Formatter();
//
// voices and notes for stave 13 70
const smo300121v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300121v0ar = [];
const smo300105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo300105.setAttribute('id', 'smo300105');
smo300121v0ar.push(smo300105);
smo300121v0.addTickables(smo300121v0ar)
fmtsmo30012170.joinVoices([smo300121v0]);
const fmtsmo30333470 = new VF.Formatter();
//
// voices and notes for stave 14 70
const smo303334v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303334v0ar = [];
const smo303318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo303318.setAttribute('id', 'smo303318');
smo303334v0ar.push(smo303318);
smo303334v0.addTickables(smo303334v0ar)
fmtsmo30333470.joinVoices([smo303334v0]);
const fmtsmo30652970 = new VF.Formatter();
//
// voices and notes for stave 15 70
const smo306529v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306529v0ar = [];
const smo306513 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo306513.setAttribute('id', 'smo306513');
smo306529v0ar.push(smo306513);
smo306529v0.addTickables(smo306529v0ar)
fmtsmo30652970.joinVoices([smo306529v0]);
const fmtsmo30965170 = new VF.Formatter();
//
// voices and notes for stave 16 70
const smo309651v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309651v0ar = [];
const smo309632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo309632.setAttribute('id', 'smo309632');
smo309632.addModifier(new VF.Dot(), 0);
smo309651v0ar.push(smo309632);
const smo309633 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n"]}'))
smo309633.setAttribute('id', 'smo309633');
const smo3096330acc = new VF.Accidental('b');
smo309633.addModifier(smo3096330acc, 0);
smo309651v0ar.push(smo309633);
const smo309634 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n"]}'))
smo309634.setAttribute('id', 'smo309634');
smo309651v0ar.push(smo309634);
const smo309635 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo309635.setAttribute('id', 'smo309635');
smo309651v0ar.push(smo309635);
smo309651v0.addTickables(smo309651v0ar)
fmtsmo30965170.joinVoices([smo309651v0]);
const fmtsmo31285070 = new VF.Formatter();
//
// voices and notes for stave 17 70
const smo312850v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312850v0ar = [];
const smo312831 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312831.setAttribute('id', 'smo312831');
smo312850v0ar.push(smo312831);
const smo312832 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312832.setAttribute('id', 'smo312832');
smo312832.setStyle({ fillStyle: "#ffffff00" });
smo312850v0ar.push(smo312832);
smo312850v0.addTickables(smo312850v0ar)
fmtsmo31285070.joinVoices([smo312850v0]);
const smo312850v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312850v1ar = [];
const smo312833 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312833.setAttribute('id', 'smo312833');
smo312833.setStyle({ fillStyle: '#aaaaaa7f' });
smo312850v1ar.push(smo312833);
const smo312834 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312834.setAttribute('id', 'smo312834');
smo312834.setStyle({ fillStyle: "#115511" });
smo312850v1ar.push(smo312834);
smo312850v1.addTickables(smo312850v1ar)
fmtsmo31285070.joinVoices([smo312850v1]);
// create beam groups and tuplets for format grp smo314493 before formatting
 
// formatting measures in staff group smo314493
fmtsmo26001070.format([smo260010v0,smo263003v0,smo266147v0,smo269263v0,smo272282v0], 289);
const stavesmo260010 = new VF.Stave(2337, 210, 303);
stavesmo260010.setAttribute('id', 'stavesmo260010');
stavesmo260010.setBegBarType(VF.Barline.type.NONE);
stavesmo260010.setContext(context);
stavesmo260010.draw();
smo260010v0.draw(context, stavesmo260010);
const stavesmo263003 = new VF.Stave(2337, 309, 303);
stavesmo263003.setAttribute('id', 'stavesmo263003');
stavesmo263003.setBegBarType(VF.Barline.type.NONE);
stavesmo263003.setContext(context);
stavesmo263003.draw();
smo263003v0.draw(context, stavesmo263003);
const stavesmo266147 = new VF.Stave(2337, 423, 303);
stavesmo266147.setAttribute('id', 'stavesmo266147');
stavesmo266147.setBegBarType(VF.Barline.type.NONE);
stavesmo266147.setContext(context);
stavesmo266147.draw();
smo266147v0.draw(context, stavesmo266147);
const stavesmo269263 = new VF.Stave(2337, 532, 303);
stavesmo269263.setAttribute('id', 'stavesmo269263');
stavesmo269263.setBegBarType(VF.Barline.type.NONE);
stavesmo269263.setContext(context);
stavesmo269263.draw();
smo269263v0.draw(context, stavesmo269263);
const stavesmo272282 = new VF.Stave(2337, 631, 303);
stavesmo272282.setAttribute('id', 'stavesmo272282');
stavesmo272282.setBegBarType(VF.Barline.type.NONE);
stavesmo272282.setContext(context);
stavesmo272282.draw();
smo272282v0.draw(context, stavesmo272282);
// create beam groups and tuplets for format grp smo314495 before formatting
 
// formatting measures in staff group smo314495
fmtsmo27539870.format([smo275398v0,smo278501v0,smo281610v0,smo284696v0], 289);
const stavesmo275398 = new VF.Stave(2337, 745, 303);
stavesmo275398.setAttribute('id', 'stavesmo275398');
stavesmo275398.setBegBarType(VF.Barline.type.NONE);
stavesmo275398.setContext(context);
stavesmo275398.draw();
smo275398v0.draw(context, stavesmo275398);
const stavesmo278501 = new VF.Stave(2337, 853, 303);
stavesmo278501.setAttribute('id', 'stavesmo278501');
stavesmo278501.setBegBarType(VF.Barline.type.NONE);
stavesmo278501.setContext(context);
stavesmo278501.draw();
smo278501v0.draw(context, stavesmo278501);
const stavesmo281610 = new VF.Stave(2337, 962, 303);
stavesmo281610.setAttribute('id', 'stavesmo281610');
stavesmo281610.setBegBarType(VF.Barline.type.NONE);
stavesmo281610.setContext(context);
stavesmo281610.draw();
smo281610v0.draw(context, stavesmo281610);
const stavesmo284696 = new VF.Stave(2337, 1071, 303);
stavesmo284696.setAttribute('id', 'stavesmo284696');
stavesmo284696.setBegBarType(VF.Barline.type.NONE);
stavesmo284696.setContext(context);
stavesmo284696.draw();
smo284696v0.draw(context, stavesmo284696);
// create beam groups and tuplets for format grp smo314497 before formatting
 
// formatting measures in staff group smo314497
fmtsmo28778570.format([smo287785v0,smo290825v0,smo293879v0,smo296922v0], 289);
const stavesmo287785 = new VF.Stave(2337, 1200, 303);
stavesmo287785.setAttribute('id', 'stavesmo287785');
stavesmo287785.setBegBarType(VF.Barline.type.NONE);
stavesmo287785.setContext(context);
stavesmo287785.draw();
smo287785v0.draw(context, stavesmo287785);
const stavesmo290825 = new VF.Stave(2337, 1329, 303);
stavesmo290825.setAttribute('id', 'stavesmo290825');
stavesmo290825.setBegBarType(VF.Barline.type.NONE);
stavesmo290825.setContext(context);
stavesmo290825.draw();
smo290825v0.draw(context, stavesmo290825);
const stavesmo293879 = new VF.Stave(2337, 1458, 303);
stavesmo293879.setAttribute('id', 'stavesmo293879');
stavesmo293879.setBegBarType(VF.Barline.type.NONE);
stavesmo293879.setContext(context);
stavesmo293879.draw();
smo293879v0.draw(context, stavesmo293879);
const stavesmo296922 = new VF.Stave(2337, 1587, 303);
stavesmo296922.setAttribute('id', 'stavesmo296922');
stavesmo296922.setBegBarType(VF.Barline.type.NONE);
stavesmo296922.setContext(context);
stavesmo296922.draw();
smo296922v0.draw(context, stavesmo296922);
// create beam groups and tuplets for format grp smo301816 before formatting
 
// formatting measures in staff group smo301816
fmtsmo30012170.format([smo300121v0], 289);
const stavesmo300121 = new VF.Stave(2337, 1726, 303);
stavesmo300121.setAttribute('id', 'stavesmo300121');
stavesmo300121.setBegBarType(VF.Barline.type.NONE);
stavesmo300121.setContext(context);
stavesmo300121.draw();
smo300121v0.draw(context, stavesmo300121);
// create beam groups and tuplets for format grp smo314491 before formatting
 
// formatting measures in staff group smo314491
fmtsmo30333470.format([smo303334v0,smo306529v0], 289);
const stavesmo303334 = new VF.Stave(2337, 1831, 303);
stavesmo303334.setAttribute('id', 'stavesmo303334');
stavesmo303334.setBegBarType(VF.Barline.type.NONE);
stavesmo303334.setContext(context);
stavesmo303334.draw();
smo303334v0.draw(context, stavesmo303334);
const stavesmo306529 = new VF.Stave(2337, 1917, 303);
stavesmo306529.setAttribute('id', 'stavesmo306529');
stavesmo306529.setBegBarType(VF.Barline.type.NONE);
stavesmo306529.setContext(context);
stavesmo306529.draw();
smo306529v0.draw(context, stavesmo306529);
// create beam groups and tuplets for format grp smo311329 before formatting
 
// formatting measures in staff group smo311329
fmtsmo30965170.format([smo309651v0], 289);
const stavesmo309651 = new VF.Stave(2337, 1988, 303);
stavesmo309651.setAttribute('id', 'stavesmo309651');
stavesmo309651.setBegBarType(VF.Barline.type.NONE);
stavesmo309651.setContext(context);
stavesmo309651.draw();
smo309651v0.draw(context, stavesmo309651);
// create beam groups and tuplets for format grp smo314485 before formatting
 
// formatting measures in staff group smo314485
fmtsmo31285070.format([smo312850v0,smo312850v1], 289);
const stavesmo312850 = new VF.Stave(2337, 2059, 303);
stavesmo312850.setAttribute('id', 'stavesmo312850');
stavesmo312850.setBegBarType(VF.Barline.type.NONE);
stavesmo312850.setContext(context);
stavesmo312850.draw();
smo312850v0.draw(context, stavesmo312850);
smo312850v1.draw(context, stavesmo312850);
const fmtsmo26003571 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo260035v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260035v0ar = [];
const smo260011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo260011.setAttribute('id', 'smo260011');
smo260035v0ar.push(smo260011);
const smo260012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo260012.setAttribute('id', 'smo260012');
smo260035v0ar.push(smo260012);
const smo260013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo260013.setAttribute('id', 'smo260013');
const smo260014 = new VF.Annotation('Ki');
smo260014.setAttribute('id', 'smo260014');
smo260014.setFont('times', 12, 'normal');
smo260014.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260013.addModifier(smo260014);
smo260014.addClass('lyric lyric-0 lyric-hyphen');
smo260035v0ar.push(smo260013);
const smo260015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo260015.setAttribute('id', 'smo260015');
smo260035v0ar.push(smo260015);
const smo260016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo260016.setAttribute('id', 'smo260016');
const smo260017 = new VF.Annotation('ki');
smo260017.setAttribute('id', 'smo260017');
smo260017.setFont('times', 12, 'normal');
smo260017.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260016.addModifier(smo260017);
smo260017.addClass('lyric lyric-0 lyric-hyphen');
smo260035v0ar.push(smo260016);
const smo260018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo260018.setAttribute('id', 'smo260018');
const smo260019 = new VF.Annotation('ri');
smo260019.setAttribute('id', 'smo260019');
smo260019.setFont('times', 12, 'normal');
smo260019.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260018.addModifier(smo260019);
smo260019.addClass('lyric lyric-0');
smo260035v0ar.push(smo260018);
smo260035v0.addTickables(smo260035v0ar)
fmtsmo26003571.joinVoices([smo260035v0]);
const fmtsmo26302871 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo263028v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263028v0ar = [];
const smo263004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo263004.setAttribute('id', 'smo263004');
smo263028v0ar.push(smo263004);
const smo263005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo263005.setAttribute('id', 'smo263005');
smo263028v0ar.push(smo263005);
const smo263006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo263006.setAttribute('id', 'smo263006');
const smo263007 = new VF.Annotation('Ki');
smo263007.setAttribute('id', 'smo263007');
smo263007.setFont('times', 12, 'normal');
smo263007.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263006.addModifier(smo263007);
smo263007.addClass('lyric lyric-0 lyric-hyphen');
smo263028v0ar.push(smo263006);
const smo263008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo263008.setAttribute('id', 'smo263008');
smo263028v0ar.push(smo263008);
const smo263009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo263009.setAttribute('id', 'smo263009');
const smo263010 = new VF.Annotation('ki');
smo263010.setAttribute('id', 'smo263010');
smo263010.setFont('times', 12, 'normal');
smo263010.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263009.addModifier(smo263010);
smo263010.addClass('lyric lyric-0 lyric-hyphen');
smo263028v0ar.push(smo263009);
const smo263011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo263011.setAttribute('id', 'smo263011');
const smo263012 = new VF.Annotation('ri');
smo263012.setAttribute('id', 'smo263012');
smo263012.setFont('times', 12, 'normal');
smo263012.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263011.addModifier(smo263012);
smo263012.addClass('lyric lyric-0');
smo263028v0ar.push(smo263011);
smo263028v0.addTickables(smo263028v0ar)
fmtsmo26302871.joinVoices([smo263028v0]);
const fmtsmo26617271 = new VF.Formatter();
//
// voices and notes for stave 2 71
const smo266172v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266172v0ar = [];
const smo266148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266148.setAttribute('id', 'smo266148');
smo266172v0ar.push(smo266148);
const smo266149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266149.setAttribute('id', 'smo266149');
smo266172v0ar.push(smo266149);
const smo266150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo266150.setAttribute('id', 'smo266150');
const smo266151 = new VF.Annotation('Ki');
smo266151.setAttribute('id', 'smo266151');
smo266151.setFont('times', 12, 'normal');
smo266151.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266150.addModifier(smo266151);
smo266151.addClass('lyric lyric-0 lyric-hyphen');
smo266172v0ar.push(smo266150);
const smo266152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo266152.setAttribute('id', 'smo266152');
smo266172v0ar.push(smo266152);
const smo266153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo266153.setAttribute('id', 'smo266153');
const smo266154 = new VF.Annotation('ki');
smo266154.setAttribute('id', 'smo266154');
smo266154.setFont('times', 12, 'normal');
smo266154.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266153.addModifier(smo266154);
smo266154.addClass('lyric lyric-0 lyric-hyphen');
smo266172v0ar.push(smo266153);
const smo266155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo266155.setAttribute('id', 'smo266155');
const smo266156 = new VF.Annotation('ri');
smo266156.setAttribute('id', 'smo266156');
smo266156.setFont('times', 12, 'normal');
smo266156.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266155.addModifier(smo266156);
smo266156.addClass('lyric lyric-0');
smo266172v0ar.push(smo266155);
smo266172v0.addTickables(smo266172v0ar)
fmtsmo26617271.joinVoices([smo266172v0]);
const fmtsmo26928871 = new VF.Formatter();
//
// voices and notes for stave 3 71
const smo269288v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269288v0ar = [];
const smo269264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269264.setAttribute('id', 'smo269264');
smo269288v0ar.push(smo269264);
const smo269265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269265.setAttribute('id', 'smo269265');
smo269288v0ar.push(smo269265);
const smo269266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo269266.setAttribute('id', 'smo269266');
const smo269267 = new VF.Annotation('Ki');
smo269267.setAttribute('id', 'smo269267');
smo269267.setFont('times', 12, 'normal');
smo269267.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269266.addModifier(smo269267);
smo269267.addClass('lyric lyric-0 lyric-hyphen');
smo269288v0ar.push(smo269266);
const smo269268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo269268.setAttribute('id', 'smo269268');
smo269288v0ar.push(smo269268);
const smo269269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo269269.setAttribute('id', 'smo269269');
const smo269270 = new VF.Annotation('ki');
smo269270.setAttribute('id', 'smo269270');
smo269270.setFont('times', 12, 'normal');
smo269270.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269269.addModifier(smo269270);
smo269270.addClass('lyric lyric-0 lyric-hyphen');
smo269288v0ar.push(smo269269);
const smo269271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo269271.setAttribute('id', 'smo269271');
const smo269272 = new VF.Annotation('ri');
smo269272.setAttribute('id', 'smo269272');
smo269272.setFont('times', 12, 'normal');
smo269272.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269271.addModifier(smo269272);
smo269272.addClass('lyric lyric-0');
smo269288v0ar.push(smo269271);
smo269288v0.addTickables(smo269288v0ar)
fmtsmo26928871.joinVoices([smo269288v0]);
const fmtsmo27230771 = new VF.Formatter();
//
// voices and notes for stave 4 71
const smo272307v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272307v0ar = [];
const smo272283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo272283.setAttribute('id', 'smo272283');
smo272307v0ar.push(smo272283);
const smo272284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo272284.setAttribute('id', 'smo272284');
smo272307v0ar.push(smo272284);
const smo272285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272285.setAttribute('id', 'smo272285');
const smo272286 = new VF.Annotation('Ki');
smo272286.setAttribute('id', 'smo272286');
smo272286.setFont('times', 12, 'normal');
smo272286.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272285.addModifier(smo272286);
smo272286.addClass('lyric lyric-0 lyric-hyphen');
smo272307v0ar.push(smo272285);
const smo272287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272287.setAttribute('id', 'smo272287');
smo272307v0ar.push(smo272287);
const smo272288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272288.setAttribute('id', 'smo272288');
const smo272289 = new VF.Annotation('ki');
smo272289.setAttribute('id', 'smo272289');
smo272289.setFont('times', 12, 'normal');
smo272289.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272288.addModifier(smo272289);
smo272289.addClass('lyric lyric-0 lyric-hyphen');
smo272307v0ar.push(smo272288);
const smo272290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272290.setAttribute('id', 'smo272290');
const smo272291 = new VF.Annotation('ri');
smo272291.setAttribute('id', 'smo272291');
smo272291.setFont('times', 12, 'normal');
smo272291.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272290.addModifier(smo272291);
smo272291.addClass('lyric lyric-0');
smo272307v0ar.push(smo272290);
smo272307v0.addTickables(smo272307v0ar)
fmtsmo27230771.joinVoices([smo272307v0]);
const fmtsmo27542371 = new VF.Formatter();
//
// voices and notes for stave 5 71
const smo275423v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275423v0ar = [];
const smo275399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo275399.setAttribute('id', 'smo275399');
smo275423v0ar.push(smo275399);
const smo275400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo275400.setAttribute('id', 'smo275400');
smo275423v0ar.push(smo275400);
const smo275401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275401.setAttribute('id', 'smo275401');
const smo275402 = new VF.Annotation('Ki');
smo275402.setAttribute('id', 'smo275402');
smo275402.setFont('times', 12, 'normal');
smo275402.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275401.addModifier(smo275402);
smo275402.addClass('lyric lyric-0 lyric-hyphen');
smo275423v0ar.push(smo275401);
const smo275403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275403.setAttribute('id', 'smo275403');
smo275423v0ar.push(smo275403);
const smo275404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275404.setAttribute('id', 'smo275404');
const smo275405 = new VF.Annotation('ki');
smo275405.setAttribute('id', 'smo275405');
smo275405.setFont('times', 12, 'normal');
smo275405.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275404.addModifier(smo275405);
smo275405.addClass('lyric lyric-0 lyric-hyphen');
smo275423v0ar.push(smo275404);
const smo275406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275406.setAttribute('id', 'smo275406');
const smo275407 = new VF.Annotation('ri');
smo275407.setAttribute('id', 'smo275407');
smo275407.setFont('times', 12, 'normal');
smo275407.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275406.addModifier(smo275407);
smo275407.addClass('lyric lyric-0');
smo275423v0ar.push(smo275406);
smo275423v0.addTickables(smo275423v0ar)
fmtsmo27542371.joinVoices([smo275423v0]);
const fmtsmo27852671 = new VF.Formatter();
//
// voices and notes for stave 6 71
const smo278526v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278526v0ar = [];
const smo278502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278502.setAttribute('id', 'smo278502');
smo278526v0ar.push(smo278502);
const smo278503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278503.setAttribute('id', 'smo278503');
smo278526v0ar.push(smo278503);
const smo278504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo278504.setAttribute('id', 'smo278504');
const smo278505 = new VF.Annotation('Ki');
smo278505.setAttribute('id', 'smo278505');
smo278505.setFont('times', 12, 'normal');
smo278505.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278504.addModifier(smo278505);
smo278505.addClass('lyric lyric-0 lyric-hyphen');
smo278526v0ar.push(smo278504);
const smo278506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo278506.setAttribute('id', 'smo278506');
smo278526v0ar.push(smo278506);
const smo278507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo278507.setAttribute('id', 'smo278507');
const smo278508 = new VF.Annotation('ki');
smo278508.setAttribute('id', 'smo278508');
smo278508.setFont('times', 12, 'normal');
smo278508.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278507.addModifier(smo278508);
smo278508.addClass('lyric lyric-0 lyric-hyphen');
smo278526v0ar.push(smo278507);
const smo278509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo278509.setAttribute('id', 'smo278509');
const smo278510 = new VF.Annotation('ri');
smo278510.setAttribute('id', 'smo278510');
smo278510.setFont('times', 12, 'normal');
smo278510.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278509.addModifier(smo278510);
smo278510.addClass('lyric lyric-0');
smo278526v0ar.push(smo278509);
smo278526v0.addTickables(smo278526v0ar)
fmtsmo27852671.joinVoices([smo278526v0]);
const fmtsmo28163571 = new VF.Formatter();
//
// voices and notes for stave 7 71
const smo281635v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281635v0ar = [];
const smo281611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281611.setAttribute('id', 'smo281611');
smo281635v0ar.push(smo281611);
const smo281612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281612.setAttribute('id', 'smo281612');
smo281635v0ar.push(smo281612);
const smo281613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281613.setAttribute('id', 'smo281613');
const smo281614 = new VF.Annotation('Ki');
smo281614.setAttribute('id', 'smo281614');
smo281614.setFont('times', 12, 'normal');
smo281614.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281613.addModifier(smo281614);
smo281614.addClass('lyric lyric-0 lyric-hyphen');
smo281635v0ar.push(smo281613);
const smo281615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281615.setAttribute('id', 'smo281615');
smo281635v0ar.push(smo281615);
const smo281616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281616.setAttribute('id', 'smo281616');
const smo281617 = new VF.Annotation('ki');
smo281617.setAttribute('id', 'smo281617');
smo281617.setFont('times', 12, 'normal');
smo281617.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281616.addModifier(smo281617);
smo281617.addClass('lyric lyric-0 lyric-hyphen');
smo281635v0ar.push(smo281616);
const smo281618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281618.setAttribute('id', 'smo281618');
const smo281619 = new VF.Annotation('ri');
smo281619.setAttribute('id', 'smo281619');
smo281619.setFont('times', 12, 'normal');
smo281619.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281618.addModifier(smo281619);
smo281619.addClass('lyric lyric-0');
smo281635v0ar.push(smo281618);
smo281635v0.addTickables(smo281635v0ar)
fmtsmo28163571.joinVoices([smo281635v0]);
const fmtsmo28472171 = new VF.Formatter();
//
// voices and notes for stave 8 71
const smo284721v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284721v0ar = [];
const smo284697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo284697.setAttribute('id', 'smo284697');
smo284721v0ar.push(smo284697);
const smo284698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo284698.setAttribute('id', 'smo284698');
smo284721v0ar.push(smo284698);
const smo284699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo284699.setAttribute('id', 'smo284699');
const smo284700 = new VF.Annotation('Ki');
smo284700.setAttribute('id', 'smo284700');
smo284700.setFont('times', 12, 'normal');
smo284700.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284699.addModifier(smo284700);
smo284700.addClass('lyric lyric-0 lyric-hyphen');
smo284721v0ar.push(smo284699);
const smo284701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo284701.setAttribute('id', 'smo284701');
smo284721v0ar.push(smo284701);
const smo284702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo284702.setAttribute('id', 'smo284702');
const smo284703 = new VF.Annotation('ki');
smo284703.setAttribute('id', 'smo284703');
smo284703.setFont('times', 12, 'normal');
smo284703.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284702.addModifier(smo284703);
smo284703.addClass('lyric lyric-0 lyric-hyphen');
smo284721v0ar.push(smo284702);
const smo284704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo284704.setAttribute('id', 'smo284704');
const smo284705 = new VF.Annotation('ri');
smo284705.setAttribute('id', 'smo284705');
smo284705.setFont('times', 12, 'normal');
smo284705.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284704.addModifier(smo284705);
smo284705.addClass('lyric lyric-0');
smo284721v0ar.push(smo284704);
smo284721v0.addTickables(smo284721v0ar)
fmtsmo28472171.joinVoices([smo284721v0]);
const fmtsmo28781071 = new VF.Formatter();
//
// voices and notes for stave 9 71
const smo287810v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287810v0ar = [];
const smo287786 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287786.setAttribute('id', 'smo287786');
smo287810v0ar.push(smo287786);
const smo287787 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287787.setAttribute('id', 'smo287787');
smo287810v0ar.push(smo287787);
const smo287788 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287788.setAttribute('id', 'smo287788');
const smo287789 = new VF.Annotation('Ki');
smo287789.setAttribute('id', 'smo287789');
smo287789.setFont('times', 12, 'normal');
smo287789.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287788.addModifier(smo287789);
smo287789.addClass('lyric lyric-0 lyric-hyphen');
smo287810v0ar.push(smo287788);
const smo287790 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287790.setAttribute('id', 'smo287790');
smo287810v0ar.push(smo287790);
const smo287791 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287791.setAttribute('id', 'smo287791');
const smo287792 = new VF.Annotation('ki');
smo287792.setAttribute('id', 'smo287792');
smo287792.setFont('times', 12, 'normal');
smo287792.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287791.addModifier(smo287792);
smo287792.addClass('lyric lyric-0 lyric-hyphen');
smo287810v0ar.push(smo287791);
const smo287793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287793.setAttribute('id', 'smo287793');
const smo287794 = new VF.Annotation('ri');
smo287794.setAttribute('id', 'smo287794');
smo287794.setFont('times', 12, 'normal');
smo287794.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287793.addModifier(smo287794);
smo287794.addClass('lyric lyric-0');
smo287810v0ar.push(smo287793);
smo287810v0.addTickables(smo287810v0ar)
fmtsmo28781071.joinVoices([smo287810v0]);
const fmtsmo29085071 = new VF.Formatter();
//
// voices and notes for stave 10 71
const smo290850v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290850v0ar = [];
const smo290826 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290826.setAttribute('id', 'smo290826');
smo290850v0ar.push(smo290826);
const smo290827 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290827.setAttribute('id', 'smo290827');
smo290850v0ar.push(smo290827);
const smo290828 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290828.setAttribute('id', 'smo290828');
const smo290829 = new VF.Annotation('Ki');
smo290829.setAttribute('id', 'smo290829');
smo290829.setFont('times', 12, 'normal');
smo290829.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290828.addModifier(smo290829);
smo290829.addClass('lyric lyric-0 lyric-hyphen');
smo290850v0ar.push(smo290828);
const smo290830 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290830.setAttribute('id', 'smo290830');
smo290850v0ar.push(smo290830);
const smo290831 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290831.setAttribute('id', 'smo290831');
const smo290832 = new VF.Annotation('ki');
smo290832.setAttribute('id', 'smo290832');
smo290832.setFont('times', 12, 'normal');
smo290832.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290831.addModifier(smo290832);
smo290832.addClass('lyric lyric-0 lyric-hyphen');
smo290850v0ar.push(smo290831);
const smo290833 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290833.setAttribute('id', 'smo290833');
const smo290834 = new VF.Annotation('ri');
smo290834.setAttribute('id', 'smo290834');
smo290834.setFont('times', 12, 'normal');
smo290834.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290833.addModifier(smo290834);
smo290834.addClass('lyric lyric-0');
smo290850v0ar.push(smo290833);
smo290850v0.addTickables(smo290850v0ar)
fmtsmo29085071.joinVoices([smo290850v0]);
const fmtsmo29390471 = new VF.Formatter();
//
// voices and notes for stave 11 71
const smo293904v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293904v0ar = [];
const smo293880 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293880.setAttribute('id', 'smo293880');
smo293904v0ar.push(smo293880);
const smo293881 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293881.setAttribute('id', 'smo293881');
smo293904v0ar.push(smo293881);
const smo293882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293882.setAttribute('id', 'smo293882');
const smo293883 = new VF.Annotation('Ki');
smo293883.setAttribute('id', 'smo293883');
smo293883.setFont('times', 12, 'normal');
smo293883.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293882.addModifier(smo293883);
smo293883.addClass('lyric lyric-0 lyric-hyphen');
smo293904v0ar.push(smo293882);
const smo293884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293884.setAttribute('id', 'smo293884');
smo293904v0ar.push(smo293884);
const smo293885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293885.setAttribute('id', 'smo293885');
const smo293886 = new VF.Annotation('ki');
smo293886.setAttribute('id', 'smo293886');
smo293886.setFont('times', 12, 'normal');
smo293886.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293885.addModifier(smo293886);
smo293886.addClass('lyric lyric-0 lyric-hyphen');
smo293904v0ar.push(smo293885);
const smo293887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293887.setAttribute('id', 'smo293887');
const smo293888 = new VF.Annotation('ri');
smo293888.setAttribute('id', 'smo293888');
smo293888.setFont('times', 12, 'normal');
smo293888.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293887.addModifier(smo293888);
smo293888.addClass('lyric lyric-0');
smo293904v0ar.push(smo293887);
smo293904v0.addTickables(smo293904v0ar)
fmtsmo29390471.joinVoices([smo293904v0]);
const fmtsmo29694771 = new VF.Formatter();
//
// voices and notes for stave 12 71
const smo296947v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296947v0ar = [];
const smo296923 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo296923.setAttribute('id', 'smo296923');
smo296947v0ar.push(smo296923);
const smo296924 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo296924.setAttribute('id', 'smo296924');
smo296947v0ar.push(smo296924);
const smo296925 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo296925.setAttribute('id', 'smo296925');
const smo296926 = new VF.Annotation('Ki');
smo296926.setAttribute('id', 'smo296926');
smo296926.setFont('times', 12, 'normal');
smo296926.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296925.addModifier(smo296926);
smo296926.addClass('lyric lyric-0 lyric-hyphen');
smo296947v0ar.push(smo296925);
const smo296927 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo296927.setAttribute('id', 'smo296927');
smo296947v0ar.push(smo296927);
const smo296928 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo296928.setAttribute('id', 'smo296928');
const smo296929 = new VF.Annotation('ki');
smo296929.setAttribute('id', 'smo296929');
smo296929.setFont('times', 12, 'normal');
smo296929.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296928.addModifier(smo296929);
smo296929.addClass('lyric lyric-0 lyric-hyphen');
smo296947v0ar.push(smo296928);
const smo296930 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo296930.setAttribute('id', 'smo296930');
const smo296931 = new VF.Annotation('ri');
smo296931.setAttribute('id', 'smo296931');
smo296931.setFont('times', 12, 'normal');
smo296931.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296930.addModifier(smo296931);
smo296931.addClass('lyric lyric-0');
smo296947v0ar.push(smo296930);
smo296947v0.addTickables(smo296947v0ar)
fmtsmo29694771.joinVoices([smo296947v0]);
const fmtsmo30013871 = new VF.Formatter();
//
// voices and notes for stave 13 71
const smo300138v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300138v0ar = [];
const smo300122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo300122.setAttribute('id', 'smo300122');
smo300138v0ar.push(smo300122);
smo300138v0.addTickables(smo300138v0ar)
fmtsmo30013871.joinVoices([smo300138v0]);
const fmtsmo30335171 = new VF.Formatter();
//
// voices and notes for stave 14 71
const smo303351v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303351v0ar = [];
const smo303335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo303335.setAttribute('id', 'smo303335');
smo303351v0ar.push(smo303335);
smo303351v0.addTickables(smo303351v0ar)
fmtsmo30335171.joinVoices([smo303351v0]);
const fmtsmo30654671 = new VF.Formatter();
//
// voices and notes for stave 15 71
const smo306546v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306546v0ar = [];
const smo306530 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo306530.setAttribute('id', 'smo306530');
smo306546v0ar.push(smo306530);
smo306546v0.addTickables(smo306546v0ar)
fmtsmo30654671.joinVoices([smo306546v0]);
const fmtsmo30967171 = new VF.Formatter();
//
// voices and notes for stave 16 71
const smo309671v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309671v0ar = [];
const smo309652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo309652.setAttribute('id', 'smo309652');
smo309671v0ar.push(smo309652);
const smo309653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo309653.setAttribute('id', 'smo309653');
smo309671v0ar.push(smo309653);
const smo309654 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo309654.setAttribute('id', 'smo309654');
smo309671v0ar.push(smo309654);
const smo309655 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo309655.setAttribute('id', 'smo309655');
smo309671v0ar.push(smo309655);
smo309671v0.addTickables(smo309671v0ar)
fmtsmo30967171.joinVoices([smo309671v0]);
const fmtsmo31287071 = new VF.Formatter();
//
// voices and notes for stave 17 71
const smo312870v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312870v0ar = [];
const smo312851 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312851.setAttribute('id', 'smo312851');
smo312870v0ar.push(smo312851);
const smo312852 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312852.setAttribute('id', 'smo312852');
smo312852.setStyle({ fillStyle: "#ffffff00" });
smo312870v0ar.push(smo312852);
smo312870v0.addTickables(smo312870v0ar)
fmtsmo31287071.joinVoices([smo312870v0]);
const smo312870v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312870v1ar = [];
const smo312853 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312853.setAttribute('id', 'smo312853');
smo312853.setStyle({ fillStyle: '#aaaaaa7f' });
smo312870v1ar.push(smo312853);
const smo312854 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo312854.setAttribute('id', 'smo312854');
smo312854.setStyle({ fillStyle: "#115511" });
smo312870v1ar.push(smo312854);
smo312870v1.addTickables(smo312870v1ar)
fmtsmo31287071.joinVoices([smo312870v1]);
// create beam groups and tuplets for format grp smo314493 before formatting
const dirsmo406161 = smo260013.getStemDirection();
smo260013.setStemDirection(dirsmo406161);
smo260015.setStemDirection(dirsmo406161);
const smo406161 = new VF.Beam([smo260013,smo260015]);
const dirsmo406164 = smo263006.getStemDirection();
smo263006.setStemDirection(dirsmo406164);
smo263008.setStemDirection(dirsmo406164);
const smo406164 = new VF.Beam([smo263006,smo263008]);
const dirsmo406167 = smo266150.getStemDirection();
smo266150.setStemDirection(dirsmo406167);
smo266152.setStemDirection(dirsmo406167);
const smo406167 = new VF.Beam([smo266150,smo266152]);
const dirsmo406170 = smo269266.getStemDirection();
smo269266.setStemDirection(dirsmo406170);
smo269268.setStemDirection(dirsmo406170);
const smo406170 = new VF.Beam([smo269266,smo269268]);
const dirsmo406173 = smo272285.getStemDirection();
smo272285.setStemDirection(dirsmo406173);
smo272287.setStemDirection(dirsmo406173);
const smo406173 = new VF.Beam([smo272285,smo272287]);
 
// formatting measures in staff group smo314493
fmtsmo26003571.format([smo260035v0,smo263028v0,smo266172v0,smo269288v0,smo272307v0], 289);
const stavesmo260035 = new VF.Stave(2640, 210, 303);
stavesmo260035.setAttribute('id', 'stavesmo260035');
stavesmo260035.setBegBarType(VF.Barline.type.NONE);
stavesmo260035.setContext(context);
stavesmo260035.draw();
smo260035v0.draw(context, stavesmo260035);
smo406161.setContext(context);
smo406161.draw();
const stavesmo263028 = new VF.Stave(2640, 309, 303);
stavesmo263028.setAttribute('id', 'stavesmo263028');
stavesmo263028.setBegBarType(VF.Barline.type.NONE);
stavesmo263028.setContext(context);
stavesmo263028.draw();
smo263028v0.draw(context, stavesmo263028);
smo406164.setContext(context);
smo406164.draw();
const stavesmo266172 = new VF.Stave(2640, 423, 303);
stavesmo266172.setAttribute('id', 'stavesmo266172');
stavesmo266172.setBegBarType(VF.Barline.type.NONE);
stavesmo266172.setContext(context);
stavesmo266172.draw();
smo266172v0.draw(context, stavesmo266172);
smo406167.setContext(context);
smo406167.draw();
const stavesmo269288 = new VF.Stave(2640, 532, 303);
stavesmo269288.setAttribute('id', 'stavesmo269288');
stavesmo269288.setBegBarType(VF.Barline.type.NONE);
stavesmo269288.setContext(context);
stavesmo269288.draw();
smo269288v0.draw(context, stavesmo269288);
smo406170.setContext(context);
smo406170.draw();
const stavesmo272307 = new VF.Stave(2640, 631, 303);
stavesmo272307.setAttribute('id', 'stavesmo272307');
stavesmo272307.setBegBarType(VF.Barline.type.NONE);
stavesmo272307.setContext(context);
stavesmo272307.draw();
smo272307v0.draw(context, stavesmo272307);
smo406173.setContext(context);
smo406173.draw();
// create beam groups and tuplets for format grp smo314495 before formatting
const dirsmo406176 = smo275401.getStemDirection();
smo275401.setStemDirection(dirsmo406176);
smo275403.setStemDirection(dirsmo406176);
const smo406176 = new VF.Beam([smo275401,smo275403]);
const dirsmo406179 = smo278504.getStemDirection();
smo278504.setStemDirection(dirsmo406179);
smo278506.setStemDirection(dirsmo406179);
const smo406179 = new VF.Beam([smo278504,smo278506]);
const dirsmo406182 = smo281613.getStemDirection();
smo281613.setStemDirection(dirsmo406182);
smo281615.setStemDirection(dirsmo406182);
const smo406182 = new VF.Beam([smo281613,smo281615]);
const dirsmo406185 = smo284699.getStemDirection();
smo284699.setStemDirection(dirsmo406185);
smo284701.setStemDirection(dirsmo406185);
const smo406185 = new VF.Beam([smo284699,smo284701]);
 
// formatting measures in staff group smo314495
fmtsmo27542371.format([smo275423v0,smo278526v0,smo281635v0,smo284721v0], 289);
const stavesmo275423 = new VF.Stave(2640, 745, 303);
stavesmo275423.setAttribute('id', 'stavesmo275423');
stavesmo275423.setBegBarType(VF.Barline.type.NONE);
stavesmo275423.setContext(context);
stavesmo275423.draw();
smo275423v0.draw(context, stavesmo275423);
smo406176.setContext(context);
smo406176.draw();
const stavesmo278526 = new VF.Stave(2640, 853, 303);
stavesmo278526.setAttribute('id', 'stavesmo278526');
stavesmo278526.setBegBarType(VF.Barline.type.NONE);
stavesmo278526.setContext(context);
stavesmo278526.draw();
smo278526v0.draw(context, stavesmo278526);
smo406179.setContext(context);
smo406179.draw();
const stavesmo281635 = new VF.Stave(2640, 962, 303);
stavesmo281635.setAttribute('id', 'stavesmo281635');
stavesmo281635.setBegBarType(VF.Barline.type.NONE);
stavesmo281635.setContext(context);
stavesmo281635.draw();
smo281635v0.draw(context, stavesmo281635);
smo406182.setContext(context);
smo406182.draw();
const stavesmo284721 = new VF.Stave(2640, 1071, 303);
stavesmo284721.setAttribute('id', 'stavesmo284721');
stavesmo284721.setBegBarType(VF.Barline.type.NONE);
stavesmo284721.setContext(context);
stavesmo284721.draw();
smo284721v0.draw(context, stavesmo284721);
smo406185.setContext(context);
smo406185.draw();
// create beam groups and tuplets for format grp smo314497 before formatting
const dirsmo406188 = smo287788.getStemDirection();
smo287788.setStemDirection(dirsmo406188);
smo287790.setStemDirection(dirsmo406188);
const smo406188 = new VF.Beam([smo287788,smo287790]);
const dirsmo406191 = smo290828.getStemDirection();
smo290828.setStemDirection(dirsmo406191);
smo290830.setStemDirection(dirsmo406191);
const smo406191 = new VF.Beam([smo290828,smo290830]);
const dirsmo406194 = smo293882.getStemDirection();
smo293882.setStemDirection(dirsmo406194);
smo293884.setStemDirection(dirsmo406194);
const smo406194 = new VF.Beam([smo293882,smo293884]);
const dirsmo406197 = smo296925.getStemDirection();
smo296925.setStemDirection(dirsmo406197);
smo296927.setStemDirection(dirsmo406197);
const smo406197 = new VF.Beam([smo296925,smo296927]);
 
// formatting measures in staff group smo314497
fmtsmo28781071.format([smo287810v0,smo290850v0,smo293904v0,smo296947v0], 289);
const stavesmo287810 = new VF.Stave(2640, 1200, 303);
stavesmo287810.setAttribute('id', 'stavesmo287810');
stavesmo287810.setBegBarType(VF.Barline.type.NONE);
stavesmo287810.setContext(context);
stavesmo287810.draw();
smo287810v0.draw(context, stavesmo287810);
smo406188.setContext(context);
smo406188.draw();
const stavesmo290850 = new VF.Stave(2640, 1329, 303);
stavesmo290850.setAttribute('id', 'stavesmo290850');
stavesmo290850.setBegBarType(VF.Barline.type.NONE);
stavesmo290850.setContext(context);
stavesmo290850.draw();
smo290850v0.draw(context, stavesmo290850);
smo406191.setContext(context);
smo406191.draw();
const stavesmo293904 = new VF.Stave(2640, 1458, 303);
stavesmo293904.setAttribute('id', 'stavesmo293904');
stavesmo293904.setBegBarType(VF.Barline.type.NONE);
stavesmo293904.setContext(context);
stavesmo293904.draw();
smo293904v0.draw(context, stavesmo293904);
smo406194.setContext(context);
smo406194.draw();
const stavesmo296947 = new VF.Stave(2640, 1587, 303);
stavesmo296947.setAttribute('id', 'stavesmo296947');
stavesmo296947.setBegBarType(VF.Barline.type.NONE);
stavesmo296947.setContext(context);
stavesmo296947.draw();
smo296947v0.draw(context, stavesmo296947);
smo406197.setContext(context);
smo406197.draw();
// create beam groups and tuplets for format grp smo301816 before formatting
 
// formatting measures in staff group smo301816
fmtsmo30013871.format([smo300138v0], 289);
const stavesmo300138 = new VF.Stave(2640, 1726, 303);
stavesmo300138.setAttribute('id', 'stavesmo300138');
stavesmo300138.setBegBarType(VF.Barline.type.NONE);
stavesmo300138.setContext(context);
stavesmo300138.draw();
smo300138v0.draw(context, stavesmo300138);
// create beam groups and tuplets for format grp smo314491 before formatting
 
// formatting measures in staff group smo314491
fmtsmo30335171.format([smo303351v0,smo306546v0], 289);
const stavesmo303351 = new VF.Stave(2640, 1831, 303);
stavesmo303351.setAttribute('id', 'stavesmo303351');
stavesmo303351.setBegBarType(VF.Barline.type.NONE);
stavesmo303351.setContext(context);
stavesmo303351.draw();
smo303351v0.draw(context, stavesmo303351);
const stavesmo306546 = new VF.Stave(2640, 1917, 303);
stavesmo306546.setAttribute('id', 'stavesmo306546');
stavesmo306546.setBegBarType(VF.Barline.type.NONE);
stavesmo306546.setContext(context);
stavesmo306546.draw();
smo306546v0.draw(context, stavesmo306546);
// create beam groups and tuplets for format grp smo311329 before formatting
 
// formatting measures in staff group smo311329
fmtsmo30967171.format([smo309671v0], 289);
const stavesmo309671 = new VF.Stave(2640, 1988, 303);
stavesmo309671.setAttribute('id', 'stavesmo309671');
stavesmo309671.setBegBarType(VF.Barline.type.NONE);
stavesmo309671.setContext(context);
stavesmo309671.draw();
smo309671v0.draw(context, stavesmo309671);
// create beam groups and tuplets for format grp smo314485 before formatting
 
// formatting measures in staff group smo314485
fmtsmo31287071.format([smo312870v0,smo312870v1], 289);
const stavesmo312870 = new VF.Stave(2640, 2059, 303);
stavesmo312870.setAttribute('id', 'stavesmo312870');
stavesmo312870.setBegBarType(VF.Barline.type.NONE);
stavesmo312870.setContext(context);
stavesmo312870.draw();
smo312870v0.draw(context, stavesmo312870);
smo312870v1.draw(context, stavesmo312870);
const rightsmo314485stavesmo26003517 = new VF.StaveConnector(stavesmo260035, stavesmo272307).setType(0);
rightsmo314485stavesmo26003517.setContext(context).draw();
const rightsmo314485stavesmo27542317 = new VF.StaveConnector(stavesmo275423, stavesmo284721).setType(0);
rightsmo314485stavesmo27542317.setContext(context).draw();
const rightsmo314485stavesmo28781017 = new VF.StaveConnector(stavesmo287810, stavesmo296947).setType(0);
rightsmo314485stavesmo28781017.setContext(context).draw();
const rightsmo314485stavesmo30335117 = new VF.StaveConnector(stavesmo303351, stavesmo306546).setType(0);
rightsmo314485stavesmo30335117.setContext(context).draw();
// modifier from 0-63-0-2 to 0-63-0-3
const smo415571 = new VF.StaveTie({ first_note: smo259833, last_note: smo259835, 
          firstNote: smo259833, lastNote: smo259835, first_indices: [0], last_indices: [0]});
smo415571.setContext(context).draw();
// modifier from 0-64-0-3 to 0-64-0-4
const smo415572 = new VF.StaveTie({ first_note: smo259861, last_note: smo259863, 
          firstNote: smo259861, lastNote: smo259863, first_indices: [0], last_indices: [0]});
smo415572.setContext(context).draw();
// modifier from 0-64-0-5 to 0-65-0-0
const smo415573 = new VF.StaveTie({ first_note: smo259864, last_note: smo259882, 
          firstNote: smo259864, lastNote: smo259882, first_indices: [0], last_indices: [0]});
smo415573.setContext(context).draw();
// modifier from 0-65-0-3 to 0-65-0-4
const smo415574 = new VF.StaveTie({ first_note: smo259886, last_note: smo259888, 
          firstNote: smo259886, lastNote: smo259888, first_indices: [0], last_indices: [0]});
smo415574.setContext(context).draw();
// modifier from 0-66-0-4 to 0-66-0-5
const smo415575 = new VF.StaveTie({ first_note: smo259917, last_note: smo259919, 
          firstNote: smo259917, lastNote: smo259919, first_indices: [0], last_indices: [0]});
smo415575.setContext(context).draw();
// modifier from 0-66-0-6 to 0-67-0-0
const smo415576 = new VF.StaveTie({ first_note: smo259920, last_note: smo259938, 
          firstNote: smo259920, lastNote: smo259938, first_indices: [0], last_indices: [0]});
smo415576.setContext(context).draw();
// modifier from 0-71-0-2 to 0-71-0-3
const smo415577 = new VF.StaveTie({ first_note: smo260013, last_note: smo260015, 
          firstNote: smo260013, lastNote: smo260015, first_indices: [0], last_indices: [0]});
smo415577.setContext(context).draw();
// modifier from 1-63-0-2 to 1-63-0-3
const smo415578 = new VF.StaveTie({ first_note: smo262827, last_note: smo262829, 
          firstNote: smo262827, lastNote: smo262829, first_indices: [0], last_indices: [0]});
smo415578.setContext(context).draw();
// modifier from 1-64-0-3 to 1-64-0-4
const smo415579 = new VF.StaveTie({ first_note: smo262855, last_note: smo262857, 
          firstNote: smo262855, lastNote: smo262857, first_indices: [0], last_indices: [0]});
smo415579.setContext(context).draw();
// modifier from 1-64-0-5 to 1-65-0-0
const smo415580 = new VF.StaveTie({ first_note: smo262858, last_note: smo262876, 
          firstNote: smo262858, lastNote: smo262876, first_indices: [0], last_indices: [0]});
smo415580.setContext(context).draw();
// modifier from 1-65-0-3 to 1-65-0-4
const smo415581 = new VF.StaveTie({ first_note: smo262880, last_note: smo262882, 
          firstNote: smo262880, lastNote: smo262882, first_indices: [0], last_indices: [0]});
smo415581.setContext(context).draw();
// modifier from 1-66-0-4 to 1-66-0-5
const smo415582 = new VF.StaveTie({ first_note: smo262911, last_note: smo262913, 
          firstNote: smo262911, lastNote: smo262913, first_indices: [0], last_indices: [0]});
smo415582.setContext(context).draw();
// modifier from 1-66-0-6 to 1-67-0-0
const smo415583 = new VF.StaveTie({ first_note: smo262914, last_note: smo262932, 
          firstNote: smo262914, lastNote: smo262932, first_indices: [0], last_indices: [0]});
smo415583.setContext(context).draw();
// modifier from 1-71-0-2 to 1-71-0-3
const smo415584 = new VF.StaveTie({ first_note: smo263006, last_note: smo263008, 
          firstNote: smo263006, lastNote: smo263008, first_indices: [0], last_indices: [0]});
smo415584.setContext(context).draw();
// modifier from 2-63-0-2 to 2-63-0-3
const smo415585 = new VF.StaveTie({ first_note: smo265970, last_note: smo265972, 
          firstNote: smo265970, lastNote: smo265972, first_indices: [0], last_indices: [0]});
smo415585.setContext(context).draw();
// modifier from 2-64-0-3 to 2-64-0-4
const smo415586 = new VF.StaveTie({ first_note: smo265998, last_note: smo266000, 
          firstNote: smo265998, lastNote: smo266000, first_indices: [0], last_indices: [0]});
smo415586.setContext(context).draw();
// modifier from 2-64-0-5 to 2-65-0-0
const smo415587 = new VF.StaveTie({ first_note: smo266001, last_note: smo266019, 
          firstNote: smo266001, lastNote: smo266019, first_indices: [0], last_indices: [0]});
smo415587.setContext(context).draw();
// modifier from 2-65-0-3 to 2-65-0-4
const smo415588 = new VF.StaveTie({ first_note: smo266023, last_note: smo266025, 
          firstNote: smo266023, lastNote: smo266025, first_indices: [0], last_indices: [0]});
smo415588.setContext(context).draw();
// modifier from 2-66-0-4 to 2-66-0-5
const smo415589 = new VF.StaveTie({ first_note: smo266054, last_note: smo266056, 
          firstNote: smo266054, lastNote: smo266056, first_indices: [0], last_indices: [0]});
smo415589.setContext(context).draw();
// modifier from 2-66-0-6 to 2-67-0-0
const smo415590 = new VF.StaveTie({ first_note: smo266057, last_note: smo266075, 
          firstNote: smo266057, lastNote: smo266075, first_indices: [0], last_indices: [0]});
smo415590.setContext(context).draw();
// modifier from 2-71-0-2 to 2-71-0-3
const smo415591 = new VF.StaveTie({ first_note: smo266150, last_note: smo266152, 
          firstNote: smo266150, lastNote: smo266152, first_indices: [0], last_indices: [0]});
smo415591.setContext(context).draw();
// modifier from 3-63-0-2 to 3-63-0-3
const smo415592 = new VF.StaveTie({ first_note: smo269086, last_note: smo269088, 
          firstNote: smo269086, lastNote: smo269088, first_indices: [0], last_indices: [0]});
smo415592.setContext(context).draw();
// modifier from 3-64-0-3 to 3-64-0-4
const smo415593 = new VF.StaveTie({ first_note: smo269114, last_note: smo269116, 
          firstNote: smo269114, lastNote: smo269116, first_indices: [0], last_indices: [0]});
smo415593.setContext(context).draw();
// modifier from 3-64-0-5 to 3-65-0-0
const smo415594 = new VF.StaveTie({ first_note: smo269117, last_note: smo269135, 
          firstNote: smo269117, lastNote: smo269135, first_indices: [0], last_indices: [0]});
smo415594.setContext(context).draw();
// modifier from 3-65-0-3 to 3-65-0-4
const smo415595 = new VF.StaveTie({ first_note: smo269139, last_note: smo269141, 
          firstNote: smo269139, lastNote: smo269141, first_indices: [0], last_indices: [0]});
smo415595.setContext(context).draw();
// modifier from 3-66-0-4 to 3-66-0-5
const smo415596 = new VF.StaveTie({ first_note: smo269170, last_note: smo269172, 
          firstNote: smo269170, lastNote: smo269172, first_indices: [0], last_indices: [0]});
smo415596.setContext(context).draw();
// modifier from 3-66-0-6 to 3-67-0-0
const smo415597 = new VF.StaveTie({ first_note: smo269173, last_note: smo269191, 
          firstNote: smo269173, lastNote: smo269191, first_indices: [0], last_indices: [0]});
smo415597.setContext(context).draw();
// modifier from 3-71-0-2 to 3-71-0-3
const smo415598 = new VF.StaveTie({ first_note: smo269266, last_note: smo269268, 
          firstNote: smo269266, lastNote: smo269268, first_indices: [0], last_indices: [0]});
smo415598.setContext(context).draw();
// modifier from 4-63-0-2 to 4-63-0-3
const smo415599 = new VF.StaveTie({ first_note: smo272105, last_note: smo272107, 
          firstNote: smo272105, lastNote: smo272107, first_indices: [0], last_indices: [0]});
smo415599.setContext(context).draw();
// modifier from 4-64-0-3 to 4-64-0-4
const smo415600 = new VF.StaveTie({ first_note: smo272133, last_note: smo272135, 
          firstNote: smo272133, lastNote: smo272135, first_indices: [0], last_indices: [0]});
smo415600.setContext(context).draw();
// modifier from 4-64-0-5 to 4-65-0-0
const smo415601 = new VF.StaveTie({ first_note: smo272136, last_note: smo272154, 
          firstNote: smo272136, lastNote: smo272154, first_indices: [0], last_indices: [0]});
smo415601.setContext(context).draw();
// modifier from 4-65-0-3 to 4-65-0-4
const smo415602 = new VF.StaveTie({ first_note: smo272158, last_note: smo272160, 
          firstNote: smo272158, lastNote: smo272160, first_indices: [0], last_indices: [0]});
smo415602.setContext(context).draw();
// modifier from 4-66-0-4 to 4-66-0-5
const smo415603 = new VF.StaveTie({ first_note: smo272189, last_note: smo272191, 
          firstNote: smo272189, lastNote: smo272191, first_indices: [0], last_indices: [0]});
smo415603.setContext(context).draw();
// modifier from 4-66-0-6 to 4-67-0-0
const smo415604 = new VF.StaveTie({ first_note: smo272192, last_note: smo272210, 
          firstNote: smo272192, lastNote: smo272210, first_indices: [0], last_indices: [0]});
smo415604.setContext(context).draw();
// modifier from 4-71-0-2 to 4-71-0-3
const smo415605 = new VF.StaveTie({ first_note: smo272285, last_note: smo272287, 
          firstNote: smo272285, lastNote: smo272287, first_indices: [0], last_indices: [0]});
smo415605.setContext(context).draw();
// modifier from 5-63-0-3 to 5-63-0-4
const smo415606 = new VF.StaveTie({ first_note: smo275212, last_note: smo275214, 
          firstNote: smo275212, lastNote: smo275214, first_indices: [0], last_indices: [0]});
smo415606.setContext(context).draw();
// modifier from 5-64-0-3 to 5-64-0-4
const smo415607 = new VF.StaveTie({ first_note: smo275240, last_note: smo275242, 
          firstNote: smo275240, lastNote: smo275242, first_indices: [0], last_indices: [0]});
smo415607.setContext(context).draw();
// modifier from 5-64-0-5 to 5-65-0-0
const smo415608 = new VF.StaveTie({ first_note: smo275243, last_note: smo275261, 
          firstNote: smo275243, lastNote: smo275261, first_indices: [0], last_indices: [0]});
smo415608.setContext(context).draw();
// modifier from 5-65-0-3 to 5-65-0-4
const smo415609 = new VF.StaveTie({ first_note: smo275265, last_note: smo275267, 
          firstNote: smo275265, lastNote: smo275267, first_indices: [0], last_indices: [0]});
smo415609.setContext(context).draw();
// modifier from 5-66-0-4 to 5-66-0-5
const smo415610 = new VF.StaveTie({ first_note: smo275296, last_note: smo275298, 
          firstNote: smo275296, lastNote: smo275298, first_indices: [0], last_indices: [0]});
smo415610.setContext(context).draw();
// modifier from 5-66-0-6 to 5-67-0-0
const smo415611 = new VF.StaveTie({ first_note: smo275299, last_note: smo275317, 
          firstNote: smo275299, lastNote: smo275317, first_indices: [0], last_indices: [0]});
smo415611.setContext(context).draw();
// modifier from 5-71-0-2 to 5-71-0-3
const smo415612 = new VF.StaveTie({ first_note: smo275401, last_note: smo275403, 
          firstNote: smo275401, lastNote: smo275403, first_indices: [0], last_indices: [0]});
smo415612.setContext(context).draw();
// modifier from 6-63-0-2 to 6-63-0-3
const smo415613 = new VF.StaveTie({ first_note: smo278324, last_note: smo278326, 
          firstNote: smo278324, lastNote: smo278326, first_indices: [0], last_indices: [0]});
smo415613.setContext(context).draw();
// modifier from 6-64-0-3 to 6-64-0-4
const smo415614 = new VF.StaveTie({ first_note: smo278352, last_note: smo278354, 
          firstNote: smo278352, lastNote: smo278354, first_indices: [0], last_indices: [0]});
smo415614.setContext(context).draw();
// modifier from 6-64-0-5 to 6-65-0-0
const smo415615 = new VF.StaveTie({ first_note: smo278355, last_note: smo278373, 
          firstNote: smo278355, lastNote: smo278373, first_indices: [0], last_indices: [0]});
smo415615.setContext(context).draw();
// modifier from 6-65-0-3 to 6-65-0-4
const smo415616 = new VF.StaveTie({ first_note: smo278377, last_note: smo278379, 
          firstNote: smo278377, lastNote: smo278379, first_indices: [0], last_indices: [0]});
smo415616.setContext(context).draw();
// modifier from 6-66-0-4 to 6-66-0-5
const smo415617 = new VF.StaveTie({ first_note: smo278408, last_note: smo278410, 
          firstNote: smo278408, lastNote: smo278410, first_indices: [0], last_indices: [0]});
smo415617.setContext(context).draw();
// modifier from 6-66-0-6 to 6-67-0-0
const smo415618 = new VF.StaveTie({ first_note: smo278411, last_note: smo278429, 
          firstNote: smo278411, lastNote: smo278429, first_indices: [0], last_indices: [0]});
smo415618.setContext(context).draw();
// modifier from 6-71-0-2 to 6-71-0-3
const smo415619 = new VF.StaveTie({ first_note: smo278504, last_note: smo278506, 
          firstNote: smo278504, lastNote: smo278506, first_indices: [0], last_indices: [0]});
smo415619.setContext(context).draw();
// modifier from 7-63-0-2 to 7-63-0-3
const smo415620 = new VF.StaveTie({ first_note: smo281433, last_note: smo281435, 
          firstNote: smo281433, lastNote: smo281435, first_indices: [0], last_indices: [0]});
smo415620.setContext(context).draw();
// modifier from 7-64-0-3 to 7-64-0-4
const smo415621 = new VF.StaveTie({ first_note: smo281461, last_note: smo281463, 
          firstNote: smo281461, lastNote: smo281463, first_indices: [0], last_indices: [0]});
smo415621.setContext(context).draw();
// modifier from 7-64-0-5 to 7-65-0-0
const smo415622 = new VF.StaveTie({ first_note: smo281464, last_note: smo281482, 
          firstNote: smo281464, lastNote: smo281482, first_indices: [0], last_indices: [0]});
smo415622.setContext(context).draw();
// modifier from 7-65-0-3 to 7-65-0-4
const smo415623 = new VF.StaveTie({ first_note: smo281486, last_note: smo281488, 
          firstNote: smo281486, lastNote: smo281488, first_indices: [0], last_indices: [0]});
smo415623.setContext(context).draw();
// modifier from 7-66-0-4 to 7-66-0-5
const smo415624 = new VF.StaveTie({ first_note: smo281517, last_note: smo281519, 
          firstNote: smo281517, lastNote: smo281519, first_indices: [0], last_indices: [0]});
smo415624.setContext(context).draw();
// modifier from 7-66-0-6 to 7-67-0-0
const smo415625 = new VF.StaveTie({ first_note: smo281520, last_note: smo281538, 
          firstNote: smo281520, lastNote: smo281538, first_indices: [0], last_indices: [0]});
smo415625.setContext(context).draw();
// modifier from 7-71-0-2 to 7-71-0-3
const smo415626 = new VF.StaveTie({ first_note: smo281613, last_note: smo281615, 
          firstNote: smo281613, lastNote: smo281615, first_indices: [0], last_indices: [0]});
smo415626.setContext(context).draw();
// modifier from 8-63-0-2 to 8-63-0-3
const smo415627 = new VF.StaveTie({ first_note: smo284519, last_note: smo284521, 
          firstNote: smo284519, lastNote: smo284521, first_indices: [0], last_indices: [0]});
smo415627.setContext(context).draw();
// modifier from 8-64-0-3 to 8-64-0-4
const smo415628 = new VF.StaveTie({ first_note: smo284547, last_note: smo284549, 
          firstNote: smo284547, lastNote: smo284549, first_indices: [0], last_indices: [0]});
smo415628.setContext(context).draw();
// modifier from 8-64-0-5 to 8-65-0-0
const smo415629 = new VF.StaveTie({ first_note: smo284550, last_note: smo284568, 
          firstNote: smo284550, lastNote: smo284568, first_indices: [0], last_indices: [0]});
smo415629.setContext(context).draw();
// modifier from 8-65-0-3 to 8-65-0-4
const smo415630 = new VF.StaveTie({ first_note: smo284572, last_note: smo284574, 
          firstNote: smo284572, lastNote: smo284574, first_indices: [0], last_indices: [0]});
smo415630.setContext(context).draw();
// modifier from 8-66-0-4 to 8-66-0-5
const smo415631 = new VF.StaveTie({ first_note: smo284603, last_note: smo284605, 
          firstNote: smo284603, lastNote: smo284605, first_indices: [0], last_indices: [0]});
smo415631.setContext(context).draw();
// modifier from 8-66-0-6 to 8-67-0-0
const smo415632 = new VF.StaveTie({ first_note: smo284606, last_note: smo284624, 
          firstNote: smo284606, lastNote: smo284624, first_indices: [0], last_indices: [0]});
smo415632.setContext(context).draw();
// modifier from 8-71-0-2 to 8-71-0-3
const smo415633 = new VF.StaveTie({ first_note: smo284699, last_note: smo284701, 
          firstNote: smo284699, lastNote: smo284701, first_indices: [0], last_indices: [0]});
smo415633.setContext(context).draw();
// modifier from 9-63-0-2 to 9-63-0-3
const smo415634 = new VF.StaveTie({ first_note: smo287608, last_note: smo287610, 
          firstNote: smo287608, lastNote: smo287610, first_indices: [0], last_indices: [0]});
smo415634.setContext(context).draw();
// modifier from 9-64-0-3 to 9-64-0-4
const smo415635 = new VF.StaveTie({ first_note: smo287636, last_note: smo287638, 
          firstNote: smo287636, lastNote: smo287638, first_indices: [0], last_indices: [0]});
smo415635.setContext(context).draw();
// modifier from 9-64-0-5 to 9-65-0-0
const smo415636 = new VF.StaveTie({ first_note: smo287639, last_note: smo287657, 
          firstNote: smo287639, lastNote: smo287657, first_indices: [0], last_indices: [0]});
smo415636.setContext(context).draw();
// modifier from 9-65-0-3 to 9-65-0-4
const smo415637 = new VF.StaveTie({ first_note: smo287661, last_note: smo287663, 
          firstNote: smo287661, lastNote: smo287663, first_indices: [0], last_indices: [0]});
smo415637.setContext(context).draw();
// modifier from 9-66-0-4 to 9-66-0-5
const smo415638 = new VF.StaveTie({ first_note: smo287692, last_note: smo287694, 
          firstNote: smo287692, lastNote: smo287694, first_indices: [0], last_indices: [0]});
smo415638.setContext(context).draw();
// modifier from 9-66-0-6 to 9-67-0-0
const smo415639 = new VF.StaveTie({ first_note: smo287695, last_note: smo287713, 
          firstNote: smo287695, lastNote: smo287713, first_indices: [0], last_indices: [0]});
smo415639.setContext(context).draw();
// modifier from 9-71-0-2 to 9-71-0-3
const smo415640 = new VF.StaveTie({ first_note: smo287788, last_note: smo287790, 
          firstNote: smo287788, lastNote: smo287790, first_indices: [0], last_indices: [0]});
smo415640.setContext(context).draw();
// modifier from 10-63-0-2 to 10-63-0-3
const smo415641 = new VF.StaveTie({ first_note: smo290648, last_note: smo290650, 
          firstNote: smo290648, lastNote: smo290650, first_indices: [0], last_indices: [0]});
smo415641.setContext(context).draw();
// modifier from 10-64-0-3 to 10-64-0-4
const smo415642 = new VF.StaveTie({ first_note: smo290676, last_note: smo290678, 
          firstNote: smo290676, lastNote: smo290678, first_indices: [0], last_indices: [0]});
smo415642.setContext(context).draw();
// modifier from 10-64-0-5 to 10-65-0-0
const smo415643 = new VF.StaveTie({ first_note: smo290679, last_note: smo290697, 
          firstNote: smo290679, lastNote: smo290697, first_indices: [0], last_indices: [0]});
smo415643.setContext(context).draw();
// modifier from 10-65-0-3 to 10-65-0-4
const smo415644 = new VF.StaveTie({ first_note: smo290701, last_note: smo290703, 
          firstNote: smo290701, lastNote: smo290703, first_indices: [0], last_indices: [0]});
smo415644.setContext(context).draw();
// modifier from 10-66-0-4 to 10-66-0-5
const smo415645 = new VF.StaveTie({ first_note: smo290732, last_note: smo290734, 
          firstNote: smo290732, lastNote: smo290734, first_indices: [0], last_indices: [0]});
smo415645.setContext(context).draw();
// modifier from 10-66-0-6 to 10-67-0-0
const smo415646 = new VF.StaveTie({ first_note: smo290735, last_note: smo290753, 
          firstNote: smo290735, lastNote: smo290753, first_indices: [0], last_indices: [0]});
smo415646.setContext(context).draw();
// modifier from 10-71-0-2 to 10-71-0-3
const smo415647 = new VF.StaveTie({ first_note: smo290828, last_note: smo290830, 
          firstNote: smo290828, lastNote: smo290830, first_indices: [0], last_indices: [0]});
smo415647.setContext(context).draw();
// modifier from 11-63-0-2 to 11-63-0-3
const smo415648 = new VF.StaveTie({ first_note: smo293702, last_note: smo293704, 
          firstNote: smo293702, lastNote: smo293704, first_indices: [0], last_indices: [0]});
smo415648.setContext(context).draw();
// modifier from 11-64-0-3 to 11-64-0-4
const smo415649 = new VF.StaveTie({ first_note: smo293730, last_note: smo293732, 
          firstNote: smo293730, lastNote: smo293732, first_indices: [0], last_indices: [0]});
smo415649.setContext(context).draw();
// modifier from 11-64-0-5 to 11-65-0-0
const smo415650 = new VF.StaveTie({ first_note: smo293733, last_note: smo293751, 
          firstNote: smo293733, lastNote: smo293751, first_indices: [0], last_indices: [0]});
smo415650.setContext(context).draw();
// modifier from 11-65-0-3 to 11-65-0-4
const smo415651 = new VF.StaveTie({ first_note: smo293755, last_note: smo293757, 
          firstNote: smo293755, lastNote: smo293757, first_indices: [0], last_indices: [0]});
smo415651.setContext(context).draw();
// modifier from 11-66-0-4 to 11-66-0-5
const smo415652 = new VF.StaveTie({ first_note: smo293786, last_note: smo293788, 
          firstNote: smo293786, lastNote: smo293788, first_indices: [0], last_indices: [0]});
smo415652.setContext(context).draw();
// modifier from 11-66-0-6 to 11-67-0-0
const smo415653 = new VF.StaveTie({ first_note: smo293789, last_note: smo293807, 
          firstNote: smo293789, lastNote: smo293807, first_indices: [0], last_indices: [0]});
smo415653.setContext(context).draw();
// modifier from 11-71-0-2 to 11-71-0-3
const smo415654 = new VF.StaveTie({ first_note: smo293882, last_note: smo293884, 
          firstNote: smo293882, lastNote: smo293884, first_indices: [0], last_indices: [0]});
smo415654.setContext(context).draw();
// modifier from 12-63-0-2 to 12-63-0-3
const smo415655 = new VF.StaveTie({ first_note: smo296745, last_note: smo296747, 
          firstNote: smo296745, lastNote: smo296747, first_indices: [0], last_indices: [0]});
smo415655.setContext(context).draw();
// modifier from 12-64-0-3 to 12-64-0-4
const smo415656 = new VF.StaveTie({ first_note: smo296773, last_note: smo296775, 
          firstNote: smo296773, lastNote: smo296775, first_indices: [0], last_indices: [0]});
smo415656.setContext(context).draw();
// modifier from 12-64-0-5 to 12-65-0-0
const smo415657 = new VF.StaveTie({ first_note: smo296776, last_note: smo296794, 
          firstNote: smo296776, lastNote: smo296794, first_indices: [0], last_indices: [0]});
smo415657.setContext(context).draw();
// modifier from 12-65-0-3 to 12-65-0-4
const smo415658 = new VF.StaveTie({ first_note: smo296798, last_note: smo296800, 
          firstNote: smo296798, lastNote: smo296800, first_indices: [0], last_indices: [0]});
smo415658.setContext(context).draw();
// modifier from 12-66-0-4 to 12-66-0-5
const smo415659 = new VF.StaveTie({ first_note: smo296829, last_note: smo296831, 
          firstNote: smo296829, lastNote: smo296831, first_indices: [0], last_indices: [0]});
smo415659.setContext(context).draw();
// modifier from 12-66-0-6 to 12-67-0-0
const smo415660 = new VF.StaveTie({ first_note: smo296832, last_note: smo296850, 
          firstNote: smo296832, lastNote: smo296850, first_indices: [0], last_indices: [0]});
smo415660.setContext(context).draw();
// modifier from 12-71-0-2 to 12-71-0-3
const smo415661 = new VF.StaveTie({ first_note: smo296925, last_note: smo296927, 
          firstNote: smo296925, lastNote: smo296927, first_indices: [0], last_indices: [0]});
smo415661.setContext(context).draw();
// modifier from 13-63-0-3 to 13-63-0-4
const smo415662 = new VF.StaveTie({ first_note: smo299964, last_note: smo299965, 
          firstNote: smo299964, lastNote: smo299965, first_indices: [0,1,2], last_indices: [0,1,2]});
smo415662.setContext(context).draw();
// modifier from 13-64-0-3 to 13-64-0-4
const smo415663 = new VF.StaveTie({ first_note: smo299988, last_note: smo299989, 
          firstNote: smo299988, lastNote: smo299989, first_indices: [0,1,2], last_indices: [0,1,2]});
smo415663.setContext(context).draw();
// modifier from 13-65-0-1 to 13-65-0-2
const smo415664 = new VF.StaveTie({ first_note: smo300007, last_note: smo300008, 
          firstNote: smo300007, lastNote: smo300008, first_indices: [0,1,2], last_indices: [0,1,2]});
smo415664.setContext(context).draw();
// modifier from 13-66-0-3 to 13-66-0-4
const smo415665 = new VF.StaveTie({ first_note: smo300030, last_note: smo300031, 
          firstNote: smo300030, lastNote: smo300031, first_indices: [0,1,2], last_indices: [0,1,2]});
smo415665.setContext(context).draw();
// modifier from 13-66-0-5 to 13-67-0-0
const smo415666 = new VF.StaveTie({ first_note: smo300032, last_note: smo300049, 
          firstNote: smo300032, lastNote: smo300049, first_indices: [0,1,2], last_indices: [0,1,2]});
smo415666.setContext(context).draw();
// modifier from 13-67-0-1 to 13-67-0-2
const smo415667 = new VF.StaveTie({ first_note: smo300050, last_note: smo300051, 
          firstNote: smo300050, lastNote: smo300051, first_indices: [0,1], last_indices: [0,1]});
smo415667.setContext(context).draw();
// modifier from 14-63-0-3 to 14-63-0-4
const smo415668 = new VF.StaveTie({ first_note: smo303177, last_note: smo303178, 
          firstNote: smo303177, lastNote: smo303178, first_indices: [0,1,2], last_indices: [0,1,2]});
smo415668.setContext(context).draw();
// modifier from 14-64-0-3 to 14-64-0-4
const smo415669 = new VF.StaveTie({ first_note: smo303201, last_note: smo303202, 
          firstNote: smo303201, lastNote: smo303202, first_indices: [0,1,2], last_indices: [0,1,2]});
smo415669.setContext(context).draw();
// modifier from 14-65-0-1 to 14-65-0-2
const smo415670 = new VF.StaveTie({ first_note: smo303220, last_note: smo303221, 
          firstNote: smo303220, lastNote: smo303221, first_indices: [0,1,2], last_indices: [0,1,2]});
smo415670.setContext(context).draw();
// modifier from 14-66-0-3 to 14-66-0-4
const smo415671 = new VF.StaveTie({ first_note: smo303243, last_note: smo303244, 
          firstNote: smo303243, lastNote: smo303244, first_indices: [0,1,2], last_indices: [0,1,2]});
smo415671.setContext(context).draw();
// modifier from 14-66-0-5 to 14-67-0-0
const smo415672 = new VF.StaveTie({ first_note: smo303245, last_note: smo303262, 
          firstNote: smo303245, lastNote: smo303262, first_indices: [0,1,2], last_indices: [0,1,2]});
smo415672.setContext(context).draw();
// modifier from 14-67-0-1 to 14-67-0-2
const smo415673 = new VF.StaveTie({ first_note: smo303263, last_note: smo303264, 
          firstNote: smo303263, lastNote: smo303264, first_indices: [0,1], last_indices: [0,1]});
smo415673.setContext(context).draw();
// modifier from 15-63-0-3 to 15-63-0-4
const smo415674 = new VF.StaveTie({ first_note: smo306372, last_note: smo306373, 
          firstNote: smo306372, lastNote: smo306373, first_indices: [0], last_indices: [0]});
smo415674.setContext(context).draw();
// modifier from 15-64-0-3 to 15-64-0-4
const smo415675 = new VF.StaveTie({ first_note: smo306396, last_note: smo306397, 
          firstNote: smo306396, lastNote: smo306397, first_indices: [0], last_indices: [0]});
smo415675.setContext(context).draw();
// modifier from 15-65-0-1 to 15-65-0-2
const smo415676 = new VF.StaveTie({ first_note: smo306415, last_note: smo306416, 
          firstNote: smo306415, lastNote: smo306416, first_indices: [0], last_indices: [0]});
smo415676.setContext(context).draw();
// modifier from 15-66-0-3 to 15-66-0-4
const smo415677 = new VF.StaveTie({ first_note: smo306438, last_note: smo306439, 
          firstNote: smo306438, lastNote: smo306439, first_indices: [0], last_indices: [0]});
smo415677.setContext(context).draw();
// modifier from 15-66-0-5 to 15-67-0-0
const smo415678 = new VF.StaveTie({ first_note: smo306440, last_note: smo306457, 
          firstNote: smo306440, lastNote: smo306457, first_indices: [0], last_indices: [0]});
smo415678.setContext(context).draw();
// modifier from 15-67-0-1 to 15-67-0-2
const smo415679 = new VF.StaveTie({ first_note: smo306458, last_note: smo306459, 
          firstNote: smo306458, lastNote: smo306459, first_indices: [0], last_indices: [0]});
smo415679.setContext(context).draw();
// modifier from 16-64-0-1 to 16-64-0-2
const smo415680 = new VF.StaveTie({ first_note: smo309513, last_note: smo309514, 
          firstNote: smo309513, lastNote: smo309514, first_indices: [0], last_indices: [0]});
smo415680.setContext(context).draw();
// modifier from 16-64-0-3 to 16-65-0-0
const smo415681 = new VF.StaveTie({ first_note: smo309515, last_note: smo309532, 
          firstNote: smo309515, lastNote: smo309532, first_indices: [0], last_indices: [0]});
smo415681.setContext(context).draw();
// modifier from 16-65-0-1 to 16-65-0-2
const smo415682 = new VF.StaveTie({ first_note: smo309533, last_note: smo309534, 
          firstNote: smo309533, lastNote: smo309534, first_indices: [0], last_indices: [0]});
smo415682.setContext(context).draw();
// modifier from 16-65-0-3 to 16-66-0-0
const smo415683 = new VF.StaveTie({ first_note: smo309535, last_note: smo309552, 
          firstNote: smo309535, lastNote: smo309552, first_indices: [0], last_indices: [0]});
smo415683.setContext(context).draw();
// modifier from 16-66-0-1 to 16-66-0-2
const smo415684 = new VF.StaveTie({ first_note: smo309553, last_note: smo309554, 
          firstNote: smo309553, lastNote: smo309554, first_indices: [0], last_indices: [0]});
smo415684.setContext(context).draw();
// modifier from 16-66-0-3 to 16-67-0-0
const smo415685 = new VF.StaveTie({ first_note: smo309555, last_note: smo309572, 
          firstNote: smo309555, lastNote: smo309572, first_indices: [0], last_indices: [0]});
smo415685.setContext(context).draw();
// modifier from 16-68-0-1 to 16-68-0-2
const smo415686 = new VF.StaveTie({ first_note: smo309593, last_note: smo309594, 
          firstNote: smo309593, lastNote: smo309594, first_indices: [0], last_indices: [0]});
smo415686.setContext(context).draw();
// modifier from 16-68-0-3 to 16-69-0-0
const smo415687 = new VF.StaveTie({ first_note: smo309595, last_note: smo309612, 
          firstNote: smo309595, lastNote: smo309612, first_indices: [0], last_indices: [0]});
smo415687.setContext(context).draw();
// modifier from 16-69-0-1 to 16-69-0-2
const smo415688 = new VF.StaveTie({ first_note: smo309613, last_note: smo309614, 
          firstNote: smo309613, lastNote: smo309614, first_indices: [0], last_indices: [0]});
smo415688.setContext(context).draw();
// modifier from 16-69-0-3 to 16-70-0-0
const smo415689 = new VF.StaveTie({ first_note: smo309615, last_note: smo309632, 
          firstNote: smo309615, lastNote: smo309632, first_indices: [0], last_indices: [0]});
smo415689.setContext(context).draw();
// modifier from 16-70-0-1 to 16-70-0-2
const smo415690 = new VF.StaveTie({ first_note: smo309633, last_note: smo309634, 
          firstNote: smo309633, lastNote: smo309634, first_indices: [0], last_indices: [0]});
smo415690.setContext(context).draw();
// modifier from 16-70-0-3 to 16-71-0-0
const smo415691 = new VF.StaveTie({ first_note: smo309635, last_note: smo309652, 
          firstNote: smo309635, lastNote: smo309652, first_indices: [0], last_indices: [0]});
smo415691.setContext(context).draw();
// modifier from 17-63-0-1 to 17-63-0-2
const smo415692 = new VF.StaveTie({ first_note: smo312673, last_note: smo312674, 
          firstNote: smo312673, lastNote: smo312674, first_indices: [0], last_indices: [0]});
smo415692.setContext(context).draw();
// modifier from 17-65-0-1 to 17-65-0-2
const smo415693 = new VF.StaveTie({ first_note: smo312722, last_note: smo312723, 
          firstNote: smo312722, lastNote: smo312723, first_indices: [0], last_indices: [0]});
smo415693.setContext(context).draw();
// modifier from 17-66-0-4 to 17-66-0-5
const smo415694 = new VF.StaveTie({ first_note: smo312749, last_note: smo312751, 
          firstNote: smo312749, lastNote: smo312751, first_indices: [0], last_indices: [0]});
smo415694.setContext(context).draw();
// modifier from 17-66-0-6 to 17-67-0-0
const smo415695 = new VF.StaveTie({ first_note: smo312752, last_note: smo312771, 
          firstNote: smo312752, lastNote: smo312771, first_indices: [0], last_indices: [0]});
smo415695.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo259834').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo259837').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo259839').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo262828').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo262831').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo262833').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo265971').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo265974').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo265976').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269087').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269090').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269092').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272106').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272109').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272111').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275213').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275216').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275218').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278325').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278328').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278330').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281434').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281437').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281439').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo284520').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo284523').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo284525').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo259858').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo259862').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo259865').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo262852').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo262856').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo262859').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo265995').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo265999').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266002').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269111').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269115').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo269118').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272130').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272134').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo272137').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo275237').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275241').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275244').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278349').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278353').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278356').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281458').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281462').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281465').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo284544').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo284548').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo284551').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo259884').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo259887').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo259890').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo259892').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo262878').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo262881').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo262884').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo262886').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo266021').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266024').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266027').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266029').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo269137').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo269140').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo269143').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo269145').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272156').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272159').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo272162').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo272164').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo275263').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275266').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275269').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275271').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278375').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278378').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278381').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278383').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281484').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281487').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281490').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281492').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo284570').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo284573').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo284576').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo284578').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo259910').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo259912').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo259914').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo259916').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo259918').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo259921').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo262904').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo262906').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo262908').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo262910').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo262912').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo262915').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo266047').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266049').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266051').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266053').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266058').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269163').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo269165').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo269167').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo269169').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo269174').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272182').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo272184').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo272186').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo272188').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo272190').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo272193').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo275289').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275291').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275293').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275295').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275300').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278401').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278403').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278405').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278407').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278412').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281510').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281512').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281514').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281516').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281521').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo284596').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo284598').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo284600').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo284602').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo284607').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo260014').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo260017').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo260019').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo263007').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo263010').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo263012').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266151').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266154').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266156').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269267').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269270').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269272').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272286').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272289').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272291').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275402').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275405').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275407').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278505').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278508').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278510').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281614').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281617').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281619').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo284700').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo284703').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo284705').setAttributeNS('', 'transform', 'translate(0 10)');
}
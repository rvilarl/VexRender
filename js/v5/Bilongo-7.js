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
const fmtsmo25635163 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo256351v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo256351v0ar = [];
const smo256326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo256326.setAttribute('id', 'smo256326');
smo256351v0ar.push(smo256326);
const smo256327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo256327.setAttribute('id', 'smo256327');
smo256351v0ar.push(smo256327);
const smo256328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo256328.setAttribute('id', 'smo256328');
const smo256329 = new VF.Annotation('Ki');
smo256329.setAttribute('id', 'smo256329');
smo256329.setFont('times', 12, 'normal');
smo256329.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256328.addModifier(smo256329);
smo256329.addClass('lyric lyric-0 lyric-hyphen');
smo256351v0ar.push(smo256328);
const smo256330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo256330.setAttribute('id', 'smo256330');
smo256351v0ar.push(smo256330);
const smo256331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo256331.setAttribute('id', 'smo256331');
const smo256332 = new VF.Annotation('ki');
smo256332.setAttribute('id', 'smo256332');
smo256332.setFont('times', 12, 'normal');
smo256332.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256331.addModifier(smo256332);
smo256332.addClass('lyric lyric-0 lyric-hyphen');
smo256351v0ar.push(smo256331);
const smo256333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo256333.setAttribute('id', 'smo256333');
const smo256334 = new VF.Annotation('ri');
smo256334.setAttribute('id', 'smo256334');
smo256334.setFont('times', 12, 'normal');
smo256334.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256333.addModifier(smo256334);
smo256334.addClass('lyric lyric-0');
smo256351v0ar.push(smo256333);
smo256351v0.addTickables(smo256351v0ar)
fmtsmo25635163.joinVoices([smo256351v0]);
const fmtsmo25934563 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo259345v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259345v0ar = [];
const smo259320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259320.setAttribute('id', 'smo259320');
smo259345v0ar.push(smo259320);
const smo259321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259321.setAttribute('id', 'smo259321');
smo259345v0ar.push(smo259321);
const smo259322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo259322.setAttribute('id', 'smo259322');
const smo259323 = new VF.Annotation('Ki');
smo259323.setAttribute('id', 'smo259323');
smo259323.setFont('times', 12, 'normal');
smo259323.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259322.addModifier(smo259323);
smo259323.addClass('lyric lyric-0 lyric-hyphen');
smo259345v0ar.push(smo259322);
const smo259324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo259324.setAttribute('id', 'smo259324');
smo259345v0ar.push(smo259324);
const smo259325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo259325.setAttribute('id', 'smo259325');
const smo259326 = new VF.Annotation('ki');
smo259326.setAttribute('id', 'smo259326');
smo259326.setFont('times', 12, 'normal');
smo259326.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259325.addModifier(smo259326);
smo259326.addClass('lyric lyric-0 lyric-hyphen');
smo259345v0ar.push(smo259325);
const smo259327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo259327.setAttribute('id', 'smo259327');
const smo259328 = new VF.Annotation('ri');
smo259328.setAttribute('id', 'smo259328');
smo259328.setFont('times', 12, 'normal');
smo259328.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259327.addModifier(smo259328);
smo259328.addClass('lyric lyric-0');
smo259345v0ar.push(smo259327);
smo259345v0.addTickables(smo259345v0ar)
fmtsmo25934563.joinVoices([smo259345v0]);
const fmtsmo26248863 = new VF.Formatter();
//
// voices and notes for stave 2 63
const smo262488v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo262488v0ar = [];
const smo262463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262463.setAttribute('id', 'smo262463');
smo262488v0ar.push(smo262463);
const smo262464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262464.setAttribute('id', 'smo262464');
smo262488v0ar.push(smo262464);
const smo262465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo262465.setAttribute('id', 'smo262465');
const smo262466 = new VF.Annotation('Ki');
smo262466.setAttribute('id', 'smo262466');
smo262466.setFont('times', 12, 'normal');
smo262466.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262465.addModifier(smo262466);
smo262466.addClass('lyric lyric-0 lyric-hyphen');
smo262488v0ar.push(smo262465);
const smo262467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo262467.setAttribute('id', 'smo262467');
smo262488v0ar.push(smo262467);
const smo262468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo262468.setAttribute('id', 'smo262468');
const smo262469 = new VF.Annotation('ki');
smo262469.setAttribute('id', 'smo262469');
smo262469.setFont('times', 12, 'normal');
smo262469.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262468.addModifier(smo262469);
smo262469.addClass('lyric lyric-0 lyric-hyphen');
smo262488v0ar.push(smo262468);
const smo262470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo262470.setAttribute('id', 'smo262470');
const smo262471 = new VF.Annotation('ri');
smo262471.setAttribute('id', 'smo262471');
smo262471.setFont('times', 12, 'normal');
smo262471.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262470.addModifier(smo262471);
smo262471.addClass('lyric lyric-0');
smo262488v0ar.push(smo262470);
smo262488v0.addTickables(smo262488v0ar)
fmtsmo26248863.joinVoices([smo262488v0]);
const fmtsmo26560463 = new VF.Formatter();
//
// voices and notes for stave 3 63
const smo265604v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo265604v0ar = [];
const smo265579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo265579.setAttribute('id', 'smo265579');
smo265604v0ar.push(smo265579);
const smo265580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo265580.setAttribute('id', 'smo265580');
smo265604v0ar.push(smo265580);
const smo265581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo265581.setAttribute('id', 'smo265581');
const smo265582 = new VF.Annotation('Ki');
smo265582.setAttribute('id', 'smo265582');
smo265582.setFont('times', 12, 'normal');
smo265582.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265581.addModifier(smo265582);
smo265582.addClass('lyric lyric-0 lyric-hyphen');
smo265604v0ar.push(smo265581);
const smo265583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo265583.setAttribute('id', 'smo265583');
smo265604v0ar.push(smo265583);
const smo265584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo265584.setAttribute('id', 'smo265584');
const smo265585 = new VF.Annotation('ki');
smo265585.setAttribute('id', 'smo265585');
smo265585.setFont('times', 12, 'normal');
smo265585.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265584.addModifier(smo265585);
smo265585.addClass('lyric lyric-0 lyric-hyphen');
smo265604v0ar.push(smo265584);
const smo265586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo265586.setAttribute('id', 'smo265586');
const smo265587 = new VF.Annotation('ri');
smo265587.setAttribute('id', 'smo265587');
smo265587.setFont('times', 12, 'normal');
smo265587.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265586.addModifier(smo265587);
smo265587.addClass('lyric lyric-0');
smo265604v0ar.push(smo265586);
smo265604v0.addTickables(smo265604v0ar)
fmtsmo26560463.joinVoices([smo265604v0]);
const fmtsmo26862363 = new VF.Formatter();
//
// voices and notes for stave 4 63
const smo268623v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo268623v0ar = [];
const smo268598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo268598.setAttribute('id', 'smo268598');
smo268623v0ar.push(smo268598);
const smo268599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo268599.setAttribute('id', 'smo268599');
smo268623v0ar.push(smo268599);
const smo268600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo268600.setAttribute('id', 'smo268600');
const smo268601 = new VF.Annotation('Ki');
smo268601.setAttribute('id', 'smo268601');
smo268601.setFont('times', 12, 'normal');
smo268601.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268600.addModifier(smo268601);
smo268601.addClass('lyric lyric-0 lyric-hyphen');
smo268623v0ar.push(smo268600);
const smo268602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo268602.setAttribute('id', 'smo268602');
smo268623v0ar.push(smo268602);
const smo268603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo268603.setAttribute('id', 'smo268603');
const smo268604 = new VF.Annotation('ki');
smo268604.setAttribute('id', 'smo268604');
smo268604.setFont('times', 12, 'normal');
smo268604.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268603.addModifier(smo268604);
smo268604.addClass('lyric lyric-0 lyric-hyphen');
smo268623v0ar.push(smo268603);
const smo268605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo268605.setAttribute('id', 'smo268605');
const smo268606 = new VF.Annotation('ri');
smo268606.setAttribute('id', 'smo268606');
smo268606.setFont('times', 12, 'normal');
smo268606.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268605.addModifier(smo268606);
smo268606.addClass('lyric lyric-0');
smo268623v0ar.push(smo268605);
smo268623v0.addTickables(smo268623v0ar)
fmtsmo26862363.joinVoices([smo268623v0]);
const fmtsmo27173063 = new VF.Formatter();
//
// voices and notes for stave 5 63
const smo271730v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo271730v0ar = [];
const smo271704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo271704.setAttribute('id', 'smo271704');
smo271730v0ar.push(smo271704);
const smo271705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo271705.setAttribute('id', 'smo271705');
smo271730v0ar.push(smo271705);
const smo271706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo271706.setAttribute('id', 'smo271706');
smo271730v0ar.push(smo271706);
const smo271707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo271707.setAttribute('id', 'smo271707');
const smo271708 = new VF.Annotation('Ki');
smo271708.setAttribute('id', 'smo271708');
smo271708.setFont('times', 12, 'normal');
smo271708.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271707.addModifier(smo271708);
smo271708.addClass('lyric lyric-0 lyric-hyphen');
smo271730v0ar.push(smo271707);
const smo271709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo271709.setAttribute('id', 'smo271709');
smo271730v0ar.push(smo271709);
const smo271710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo271710.setAttribute('id', 'smo271710');
const smo271711 = new VF.Annotation('ki');
smo271711.setAttribute('id', 'smo271711');
smo271711.setFont('times', 12, 'normal');
smo271711.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271710.addModifier(smo271711);
smo271711.addClass('lyric lyric-0 lyric-hyphen');
smo271730v0ar.push(smo271710);
const smo271712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo271712.setAttribute('id', 'smo271712');
const smo271713 = new VF.Annotation('ri');
smo271713.setAttribute('id', 'smo271713');
smo271713.setFont('times', 12, 'normal');
smo271713.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271712.addModifier(smo271713);
smo271713.addClass('lyric lyric-0');
smo271730v0ar.push(smo271712);
smo271730v0.addTickables(smo271730v0ar)
fmtsmo27173063.joinVoices([smo271730v0]);
const fmtsmo27484263 = new VF.Formatter();
//
// voices and notes for stave 6 63
const smo274842v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo274842v0ar = [];
const smo274817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo274817.setAttribute('id', 'smo274817');
smo274842v0ar.push(smo274817);
const smo274818 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo274818.setAttribute('id', 'smo274818');
smo274842v0ar.push(smo274818);
const smo274819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo274819.setAttribute('id', 'smo274819');
const smo274820 = new VF.Annotation('Ki');
smo274820.setAttribute('id', 'smo274820');
smo274820.setFont('times', 12, 'normal');
smo274820.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo274819.addModifier(smo274820);
smo274820.addClass('lyric lyric-0 lyric-hyphen');
smo274842v0ar.push(smo274819);
const smo274821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo274821.setAttribute('id', 'smo274821');
smo274842v0ar.push(smo274821);
const smo274822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo274822.setAttribute('id', 'smo274822');
const smo274823 = new VF.Annotation('ki');
smo274823.setAttribute('id', 'smo274823');
smo274823.setFont('times', 12, 'normal');
smo274823.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo274822.addModifier(smo274823);
smo274823.addClass('lyric lyric-0 lyric-hyphen');
smo274842v0ar.push(smo274822);
const smo274824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo274824.setAttribute('id', 'smo274824');
const smo274825 = new VF.Annotation('ri');
smo274825.setAttribute('id', 'smo274825');
smo274825.setFont('times', 12, 'normal');
smo274825.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo274824.addModifier(smo274825);
smo274825.addClass('lyric lyric-0');
smo274842v0ar.push(smo274824);
smo274842v0.addTickables(smo274842v0ar)
fmtsmo27484263.joinVoices([smo274842v0]);
const fmtsmo27795163 = new VF.Formatter();
//
// voices and notes for stave 7 63
const smo277951v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo277951v0ar = [];
const smo277926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo277926.setAttribute('id', 'smo277926');
smo277951v0ar.push(smo277926);
const smo277927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo277927.setAttribute('id', 'smo277927');
smo277951v0ar.push(smo277927);
const smo277928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo277928.setAttribute('id', 'smo277928');
const smo277929 = new VF.Annotation('Ki');
smo277929.setAttribute('id', 'smo277929');
smo277929.setFont('times', 12, 'normal');
smo277929.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo277928.addModifier(smo277929);
smo277929.addClass('lyric lyric-0 lyric-hyphen');
smo277951v0ar.push(smo277928);
const smo277930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo277930.setAttribute('id', 'smo277930');
smo277951v0ar.push(smo277930);
const smo277931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo277931.setAttribute('id', 'smo277931');
const smo277932 = new VF.Annotation('ki');
smo277932.setAttribute('id', 'smo277932');
smo277932.setFont('times', 12, 'normal');
smo277932.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo277931.addModifier(smo277932);
smo277932.addClass('lyric lyric-0 lyric-hyphen');
smo277951v0ar.push(smo277931);
const smo277933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo277933.setAttribute('id', 'smo277933');
const smo277934 = new VF.Annotation('ri');
smo277934.setAttribute('id', 'smo277934');
smo277934.setFont('times', 12, 'normal');
smo277934.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo277933.addModifier(smo277934);
smo277934.addClass('lyric lyric-0');
smo277951v0ar.push(smo277933);
smo277951v0.addTickables(smo277951v0ar)
fmtsmo27795163.joinVoices([smo277951v0]);
const fmtsmo28103763 = new VF.Formatter();
//
// voices and notes for stave 8 63
const smo281037v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281037v0ar = [];
const smo281012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281012.setAttribute('id', 'smo281012');
smo281037v0ar.push(smo281012);
const smo281013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281013.setAttribute('id', 'smo281013');
smo281037v0ar.push(smo281013);
const smo281014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281014.setAttribute('id', 'smo281014');
const smo281015 = new VF.Annotation('Ki');
smo281015.setAttribute('id', 'smo281015');
smo281015.setFont('times', 12, 'normal');
smo281015.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281014.addModifier(smo281015);
smo281015.addClass('lyric lyric-0 lyric-hyphen');
smo281037v0ar.push(smo281014);
const smo281016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281016.setAttribute('id', 'smo281016');
smo281037v0ar.push(smo281016);
const smo281017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281017.setAttribute('id', 'smo281017');
const smo281018 = new VF.Annotation('ki');
smo281018.setAttribute('id', 'smo281018');
smo281018.setFont('times', 12, 'normal');
smo281018.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281017.addModifier(smo281018);
smo281018.addClass('lyric lyric-0 lyric-hyphen');
smo281037v0ar.push(smo281017);
const smo281019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281019.setAttribute('id', 'smo281019');
const smo281020 = new VF.Annotation('ri');
smo281020.setAttribute('id', 'smo281020');
smo281020.setFont('times', 12, 'normal');
smo281020.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281019.addModifier(smo281020);
smo281020.addClass('lyric lyric-0');
smo281037v0ar.push(smo281019);
smo281037v0.addTickables(smo281037v0ar)
fmtsmo28103763.joinVoices([smo281037v0]);
const fmtsmo28412663 = new VF.Formatter();
//
// voices and notes for stave 9 63
const smo284126v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284126v0ar = [];
const smo284101 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo284101.setAttribute('id', 'smo284101');
smo284126v0ar.push(smo284101);
const smo284102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo284102.setAttribute('id', 'smo284102');
smo284126v0ar.push(smo284102);
const smo284103 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo284103.setAttribute('id', 'smo284103');
const smo284104 = new VF.Annotation('Ki');
smo284104.setAttribute('id', 'smo284104');
smo284104.setFont('times', 12, 'normal');
smo284104.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284103.addModifier(smo284104);
smo284104.addClass('lyric lyric-0 lyric-hyphen');
smo284126v0ar.push(smo284103);
const smo284105 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo284105.setAttribute('id', 'smo284105');
smo284126v0ar.push(smo284105);
const smo284106 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo284106.setAttribute('id', 'smo284106');
const smo284107 = new VF.Annotation('ki');
smo284107.setAttribute('id', 'smo284107');
smo284107.setFont('times', 12, 'normal');
smo284107.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284106.addModifier(smo284107);
smo284107.addClass('lyric lyric-0 lyric-hyphen');
smo284126v0ar.push(smo284106);
const smo284108 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo284108.setAttribute('id', 'smo284108');
const smo284109 = new VF.Annotation('ri');
smo284109.setAttribute('id', 'smo284109');
smo284109.setFont('times', 12, 'normal');
smo284109.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284108.addModifier(smo284109);
smo284109.addClass('lyric lyric-0');
smo284126v0ar.push(smo284108);
smo284126v0.addTickables(smo284126v0ar)
fmtsmo28412663.joinVoices([smo284126v0]);
const fmtsmo28716663 = new VF.Formatter();
//
// voices and notes for stave 10 63
const smo287166v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287166v0ar = [];
const smo287141 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo287141.setAttribute('id', 'smo287141');
smo287166v0ar.push(smo287141);
const smo287142 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287142.setAttribute('id', 'smo287142');
smo287166v0ar.push(smo287142);
const smo287143 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287143.setAttribute('id', 'smo287143');
const smo287144 = new VF.Annotation('Ki');
smo287144.setAttribute('id', 'smo287144');
smo287144.setFont('times', 12, 'normal');
smo287144.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287143.addModifier(smo287144);
smo287144.addClass('lyric lyric-0 lyric-hyphen');
smo287166v0ar.push(smo287143);
const smo287145 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287145.setAttribute('id', 'smo287145');
smo287166v0ar.push(smo287145);
const smo287146 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287146.setAttribute('id', 'smo287146');
const smo287147 = new VF.Annotation('ki');
smo287147.setAttribute('id', 'smo287147');
smo287147.setFont('times', 12, 'normal');
smo287147.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287146.addModifier(smo287147);
smo287147.addClass('lyric lyric-0 lyric-hyphen');
smo287166v0ar.push(smo287146);
const smo287148 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287148.setAttribute('id', 'smo287148');
const smo287149 = new VF.Annotation('ri');
smo287149.setAttribute('id', 'smo287149');
smo287149.setFont('times', 12, 'normal');
smo287149.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287148.addModifier(smo287149);
smo287149.addClass('lyric lyric-0');
smo287166v0ar.push(smo287148);
smo287166v0.addTickables(smo287166v0ar)
fmtsmo28716663.joinVoices([smo287166v0]);
const fmtsmo29022063 = new VF.Formatter();
//
// voices and notes for stave 11 63
const smo290220v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290220v0ar = [];
const smo290195 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo290195.setAttribute('id', 'smo290195');
smo290220v0ar.push(smo290195);
const smo290196 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290196.setAttribute('id', 'smo290196');
smo290220v0ar.push(smo290196);
const smo290197 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290197.setAttribute('id', 'smo290197');
const smo290198 = new VF.Annotation('Ki');
smo290198.setAttribute('id', 'smo290198');
smo290198.setFont('times', 12, 'normal');
smo290198.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290197.addModifier(smo290198);
smo290198.addClass('lyric lyric-0 lyric-hyphen');
smo290220v0ar.push(smo290197);
const smo290199 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290199.setAttribute('id', 'smo290199');
smo290220v0ar.push(smo290199);
const smo290200 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290200.setAttribute('id', 'smo290200');
const smo290201 = new VF.Annotation('ki');
smo290201.setAttribute('id', 'smo290201');
smo290201.setFont('times', 12, 'normal');
smo290201.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290200.addModifier(smo290201);
smo290201.addClass('lyric lyric-0 lyric-hyphen');
smo290220v0ar.push(smo290200);
const smo290202 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290202.setAttribute('id', 'smo290202');
const smo290203 = new VF.Annotation('ri');
smo290203.setAttribute('id', 'smo290203');
smo290203.setFont('times', 12, 'normal');
smo290203.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290202.addModifier(smo290203);
smo290203.addClass('lyric lyric-0');
smo290220v0ar.push(smo290202);
smo290220v0.addTickables(smo290220v0ar)
fmtsmo29022063.joinVoices([smo290220v0]);
const fmtsmo29326363 = new VF.Formatter();
//
// voices and notes for stave 12 63
const smo293263v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293263v0ar = [];
const smo293238 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo293238.setAttribute('id', 'smo293238');
smo293263v0ar.push(smo293238);
const smo293239 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293239.setAttribute('id', 'smo293239');
smo293263v0ar.push(smo293239);
const smo293240 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293240.setAttribute('id', 'smo293240');
const smo293241 = new VF.Annotation('Ki');
smo293241.setAttribute('id', 'smo293241');
smo293241.setFont('times', 12, 'normal');
smo293241.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293240.addModifier(smo293241);
smo293241.addClass('lyric lyric-0 lyric-hyphen');
smo293263v0ar.push(smo293240);
const smo293242 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293242.setAttribute('id', 'smo293242');
smo293263v0ar.push(smo293242);
const smo293243 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293243.setAttribute('id', 'smo293243');
const smo293244 = new VF.Annotation('ki');
smo293244.setAttribute('id', 'smo293244');
smo293244.setFont('times', 12, 'normal');
smo293244.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293243.addModifier(smo293244);
smo293244.addClass('lyric lyric-0 lyric-hyphen');
smo293263v0ar.push(smo293243);
const smo293245 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293245.setAttribute('id', 'smo293245');
const smo293246 = new VF.Annotation('ri');
smo293246.setAttribute('id', 'smo293246');
smo293246.setFont('times', 12, 'normal');
smo293246.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293245.addModifier(smo293246);
smo293246.addClass('lyric lyric-0');
smo293263v0ar.push(smo293245);
smo293263v0.addTickables(smo293263v0ar)
fmtsmo29326363.joinVoices([smo293263v0]);
const fmtsmo29647963 = new VF.Formatter();
//
// voices and notes for stave 13 63
const smo296479v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296479v0ar = [];
const smo296456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo296456.setAttribute('id', 'smo296456');
smo296479v0ar.push(smo296456);
const smo296457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo296457.setAttribute('id', 'smo296457');
smo296479v0ar.push(smo296457);
const smo296458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo296458.setAttribute('id', 'smo296458');
smo296479v0ar.push(smo296458);
const smo296459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo296459.setAttribute('id', 'smo296459');
const smo2964590acc = new VF.Accidental('#');
smo296459.addModifier(smo2964590acc, 0);
smo296479v0ar.push(smo296459);
const smo296460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo296460.setAttribute('id', 'smo296460');
smo296479v0ar.push(smo296460);
const smo296461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo296461.setAttribute('id', 'smo296461');
smo296479v0ar.push(smo296461);
const smo296462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo296462.setAttribute('id', 'smo296462');
smo296479v0ar.push(smo296462);
smo296479v0.addTickables(smo296479v0ar)
fmtsmo29647963.joinVoices([smo296479v0]);
const fmtsmo29969263 = new VF.Formatter();
//
// voices and notes for stave 14 63
const smo299692v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo299692v0ar = [];
const smo299669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","ab/4/n","bb/4/n","dn/5/n"]}'))
smo299669.setAttribute('id', 'smo299669');
const smo2996691acc = new VF.Accidental('b');
smo299669.addModifier(smo2996691acc, 1);
smo299692v0ar.push(smo299669);
const smo299670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo299670.setAttribute('id', 'smo299670');
smo299692v0ar.push(smo299670);
const smo299671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo299671.setAttribute('id', 'smo299671');
smo299692v0ar.push(smo299671);
const smo299672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo299672.setAttribute('id', 'smo299672');
const smo2996720acc = new VF.Accidental('#');
smo299672.addModifier(smo2996720acc, 0);
const smo2996721acc = new VF.Accidental('n');
smo299672.addModifier(smo2996721acc, 1);
smo299692v0ar.push(smo299672);
const smo299673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo299673.setAttribute('id', 'smo299673');
smo299692v0ar.push(smo299673);
const smo299674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo299674.setAttribute('id', 'smo299674');
smo299692v0ar.push(smo299674);
const smo299675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo299675.setAttribute('id', 'smo299675');
smo299692v0ar.push(smo299675);
smo299692v0.addTickables(smo299692v0ar)
fmtsmo29969263.joinVoices([smo299692v0]);
const fmtsmo30288763 = new VF.Formatter();
//
// voices and notes for stave 15 63
const smo302887v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo302887v0ar = [];
const smo302864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo302864.setAttribute('id', 'smo302864');
smo302887v0ar.push(smo302864);
const smo302865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo302865.setAttribute('id', 'smo302865');
smo302887v0ar.push(smo302865);
const smo302866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo302866.setAttribute('id', 'smo302866');
smo302887v0ar.push(smo302866);
const smo302867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo302867.setAttribute('id', 'smo302867');
smo302887v0ar.push(smo302867);
const smo302868 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo302868.setAttribute('id', 'smo302868');
smo302887v0ar.push(smo302868);
const smo302869 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo302869.setAttribute('id', 'smo302869');
smo302887v0ar.push(smo302869);
const smo302870 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo302870.setAttribute('id', 'smo302870');
smo302887v0ar.push(smo302870);
smo302887v0.addTickables(smo302887v0ar)
fmtsmo30288763.joinVoices([smo302887v0]);
const fmtsmo30600663 = new VF.Formatter();
//
// voices and notes for stave 16 63
const smo306006v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306006v0ar = [];
const smo305987 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo305987.setAttribute('id', 'smo305987');
smo306006v0ar.push(smo305987);
const smo305988 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo305988.setAttribute('id', 'smo305988');
smo306006v0ar.push(smo305988);
const smo305989 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo305989.setAttribute('id', 'smo305989');
smo306006v0ar.push(smo305989);
smo306006v0.addTickables(smo306006v0ar)
fmtsmo30600663.joinVoices([smo306006v0]);
const fmtsmo30918763 = new VF.Formatter();
//
// voices and notes for stave 17 63
const smo309187v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309187v0ar = [];
const smo309167 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo309167.setAttribute('id', 'smo309167');
const smo3091670acc = new VF.Accidental('n');
smo309167.addModifier(smo3091670acc, 0);
smo309167.addModifier(new VF.Dot(), 0);
smo309187v0ar.push(smo309167);
const smo309168 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo309168.setAttribute('id', 'smo309168');
smo309187v0ar.push(smo309168);
const smo309169 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo309169.setAttribute('id', 'smo309169');
smo309187v0ar.push(smo309169);
const smo309170 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo309170.setAttribute('id', 'smo309170');
smo309187v0ar.push(smo309170);
smo309187v0.addTickables(smo309187v0ar)
fmtsmo30918763.joinVoices([smo309187v0]);
// create beam groups and tuplets for format grp smo310988 before formatting
const dirsmo402259 = smo256328.getStemDirection();
smo256328.setStemDirection(dirsmo402259);
smo256330.setStemDirection(dirsmo402259);
const smo402259 = new VF.Beam([smo256328,smo256330]);
const dirsmo402262 = smo259322.getStemDirection();
smo259322.setStemDirection(dirsmo402262);
smo259324.setStemDirection(dirsmo402262);
const smo402262 = new VF.Beam([smo259322,smo259324]);
const dirsmo402265 = smo262465.getStemDirection();
smo262465.setStemDirection(dirsmo402265);
smo262467.setStemDirection(dirsmo402265);
const smo402265 = new VF.Beam([smo262465,smo262467]);
const dirsmo402268 = smo265581.getStemDirection();
smo265581.setStemDirection(dirsmo402268);
smo265583.setStemDirection(dirsmo402268);
const smo402268 = new VF.Beam([smo265581,smo265583]);
const dirsmo402271 = smo268600.getStemDirection();
smo268600.setStemDirection(dirsmo402271);
smo268602.setStemDirection(dirsmo402271);
const smo402271 = new VF.Beam([smo268600,smo268602]);
 
// formatting measures in staff group smo310988
fmtsmo25635163.format([smo256351v0,smo259345v0,smo262488v0,smo265604v0,smo268623v0], 261);
const stavesmo256351 = new VF.Stave(159, 210, 347);
stavesmo256351.setAttribute('id', 'stavesmo256351');
stavesmo256351.setBegBarType(1);
stavesmo256351.setSection('D', 0);
stavesmo256351.addClef('treble');
const keysmo256351 = new VF.KeySignature('D');
keysmo256351.addToStave(stavesmo256351);
stavesmo256351.setContext(context);
stavesmo256351.draw();
smo256351v0.draw(context, stavesmo256351);
smo402259.setContext(context);
smo402259.draw();
const stavesmo259345 = new VF.Stave(159, 316, 347);
stavesmo259345.setAttribute('id', 'stavesmo259345');
stavesmo259345.setBegBarType(1);
stavesmo259345.addClef('treble');
const keysmo259345 = new VF.KeySignature('D');
keysmo259345.addToStave(stavesmo259345);
stavesmo259345.setContext(context);
stavesmo259345.draw();
smo259345v0.draw(context, stavesmo259345);
smo402262.setContext(context);
smo402262.draw();
const stavesmo262488 = new VF.Stave(159, 437, 347);
stavesmo262488.setAttribute('id', 'stavesmo262488');
stavesmo262488.setBegBarType(1);
stavesmo262488.addClef('treble');
const keysmo262488 = new VF.KeySignature('G');
keysmo262488.addToStave(stavesmo262488);
stavesmo262488.setContext(context);
stavesmo262488.draw();
smo262488v0.draw(context, stavesmo262488);
smo402265.setContext(context);
smo402265.draw();
const stavesmo265604 = new VF.Stave(159, 553, 347);
stavesmo265604.setAttribute('id', 'stavesmo265604');
stavesmo265604.setBegBarType(1);
stavesmo265604.addClef('treble');
const keysmo265604 = new VF.KeySignature('G');
keysmo265604.addToStave(stavesmo265604);
stavesmo265604.setContext(context);
stavesmo265604.draw();
smo265604v0.draw(context, stavesmo265604);
smo402268.setContext(context);
smo402268.draw();
const stavesmo268623 = new VF.Stave(159, 659, 347);
stavesmo268623.setAttribute('id', 'stavesmo268623');
stavesmo268623.setBegBarType(1);
stavesmo268623.addClef('treble');
const keysmo268623 = new VF.KeySignature('D');
keysmo268623.addToStave(stavesmo268623);
stavesmo268623.setContext(context);
stavesmo268623.draw();
smo268623v0.draw(context, stavesmo268623);
smo402271.setContext(context);
smo402271.draw();
// create beam groups and tuplets for format grp smo310990 before formatting
const dirsmo402274 = smo271704.getStemDirection();
smo271704.setStemDirection(dirsmo402274);
smo271705.setStemDirection(dirsmo402274);
const smo402274 = new VF.Beam([smo271704,smo271705]);
const dirsmo402275 = smo271707.getStemDirection();
smo271707.setStemDirection(dirsmo402275);
smo271709.setStemDirection(dirsmo402275);
const smo402275 = new VF.Beam([smo271707,smo271709]);
const dirsmo402278 = smo274819.getStemDirection();
smo274819.setStemDirection(dirsmo402278);
smo274821.setStemDirection(dirsmo402278);
const smo402278 = new VF.Beam([smo274819,smo274821]);
const dirsmo402281 = smo277928.getStemDirection();
smo277928.setStemDirection(dirsmo402281);
smo277930.setStemDirection(dirsmo402281);
const smo402281 = new VF.Beam([smo277928,smo277930]);
const dirsmo402284 = smo281014.getStemDirection();
smo281014.setStemDirection(dirsmo402284);
smo281016.setStemDirection(dirsmo402284);
const smo402284 = new VF.Beam([smo281014,smo281016]);
 
// formatting measures in staff group smo310990
fmtsmo27173063.format([smo271730v0,smo274842v0,smo277951v0,smo281037v0], 274);
const stavesmo271730 = new VF.Stave(159, 780, 347);
stavesmo271730.setAttribute('id', 'stavesmo271730');
stavesmo271730.setBegBarType(1);
stavesmo271730.addClef('treble');
const keysmo271730 = new VF.KeySignature('G');
keysmo271730.addToStave(stavesmo271730);
stavesmo271730.setContext(context);
stavesmo271730.draw();
smo271730v0.draw(context, stavesmo271730);
smo402274.setContext(context);
smo402274.draw();
smo402275.setContext(context);
smo402275.draw();
const stavesmo274842 = new VF.Stave(159, 896, 347);
stavesmo274842.setAttribute('id', 'stavesmo274842');
stavesmo274842.setBegBarType(1);
stavesmo274842.addClef('treble');
const keysmo274842 = new VF.KeySignature('G');
keysmo274842.addToStave(stavesmo274842);
stavesmo274842.setContext(context);
stavesmo274842.draw();
smo274842v0.draw(context, stavesmo274842);
smo402278.setContext(context);
smo402278.draw();
const stavesmo277951 = new VF.Stave(159, 1012, 347);
stavesmo277951.setAttribute('id', 'stavesmo277951');
stavesmo277951.setBegBarType(1);
stavesmo277951.addClef('treble');
const keysmo277951 = new VF.KeySignature('G');
keysmo277951.addToStave(stavesmo277951);
stavesmo277951.setContext(context);
stavesmo277951.draw();
smo277951v0.draw(context, stavesmo277951);
smo402281.setContext(context);
smo402281.draw();
const stavesmo281037 = new VF.Stave(159, 1128, 347);
stavesmo281037.setAttribute('id', 'stavesmo281037');
stavesmo281037.setBegBarType(1);
stavesmo281037.addClef('treble');
const keysmo281037 = new VF.KeySignature('G');
keysmo281037.addToStave(stavesmo281037);
stavesmo281037.setContext(context);
stavesmo281037.draw();
smo281037v0.draw(context, stavesmo281037);
smo402284.setContext(context);
smo402284.draw();
// create beam groups and tuplets for format grp smo310992 before formatting
const dirsmo402287 = smo284103.getStemDirection();
smo284103.setStemDirection(dirsmo402287);
smo284105.setStemDirection(dirsmo402287);
const smo402287 = new VF.Beam([smo284103,smo284105]);
const dirsmo402290 = smo287143.getStemDirection();
smo287143.setStemDirection(dirsmo402290);
smo287145.setStemDirection(dirsmo402290);
const smo402290 = new VF.Beam([smo287143,smo287145]);
const dirsmo402293 = smo290197.getStemDirection();
smo290197.setStemDirection(dirsmo402293);
smo290199.setStemDirection(dirsmo402293);
const smo402293 = new VF.Beam([smo290197,smo290199]);
const dirsmo402296 = smo293240.getStemDirection();
smo293240.setStemDirection(dirsmo402296);
smo293242.setStemDirection(dirsmo402296);
const smo402296 = new VF.Beam([smo293240,smo293242]);
 
// formatting measures in staff group smo310992
fmtsmo28412663.format([smo284126v0,smo287166v0,smo290220v0,smo293263v0], 274);
const stavesmo284126 = new VF.Stave(159, 1264, 347);
stavesmo284126.setAttribute('id', 'stavesmo284126');
stavesmo284126.setBegBarType(1);
stavesmo284126.addClef('bass');
const keysmo284126 = new VF.KeySignature('F');
keysmo284126.addToStave(stavesmo284126);
stavesmo284126.setContext(context);
stavesmo284126.draw();
smo284126v0.draw(context, stavesmo284126);
smo402287.setContext(context);
smo402287.draw();
const stavesmo287166 = new VF.Stave(159, 1400, 347);
stavesmo287166.setAttribute('id', 'stavesmo287166');
stavesmo287166.setBegBarType(1);
stavesmo287166.addClef('bass');
const keysmo287166 = new VF.KeySignature('F');
keysmo287166.addToStave(stavesmo287166);
stavesmo287166.setContext(context);
stavesmo287166.draw();
smo287166v0.draw(context, stavesmo287166);
smo402290.setContext(context);
smo402290.draw();
const stavesmo290220 = new VF.Stave(159, 1536, 347);
stavesmo290220.setAttribute('id', 'stavesmo290220');
stavesmo290220.setBegBarType(1);
stavesmo290220.addClef('bass');
const keysmo290220 = new VF.KeySignature('F');
keysmo290220.addToStave(stavesmo290220);
stavesmo290220.setContext(context);
stavesmo290220.draw();
smo290220v0.draw(context, stavesmo290220);
smo402293.setContext(context);
smo402293.draw();
const stavesmo293263 = new VF.Stave(159, 1672, 347);
stavesmo293263.setAttribute('id', 'stavesmo293263');
stavesmo293263.setBegBarType(1);
stavesmo293263.addClef('bass');
const keysmo293263 = new VF.KeySignature('F');
keysmo293263.addToStave(stavesmo293263);
stavesmo293263.setContext(context);
stavesmo293263.draw();
smo293263v0.draw(context, stavesmo293263);
smo402296.setContext(context);
smo402296.draw();
// create beam groups and tuplets for format grp smo298311 before formatting
const dirsmo402299 = smo296459.getStemDirection();
smo296459.setStemDirection(dirsmo402299);
smo296460.setStemDirection(dirsmo402299);
const smo402299 = new VF.Beam([smo296459,smo296460]);
 
// formatting measures in staff group smo298311
fmtsmo29647963.format([smo296479v0], 276);
const stavesmo296479 = new VF.Stave(159, 1818, 347);
stavesmo296479.setAttribute('id', 'stavesmo296479');
stavesmo296479.setBegBarType(1);
stavesmo296479.addClef('treble');
const keysmo296479 = new VF.KeySignature('F');
keysmo296479.addToStave(stavesmo296479);
stavesmo296479.setContext(context);
stavesmo296479.draw();
smo296479v0.draw(context, stavesmo296479);
smo402299.setContext(context);
smo402299.draw();
// create beam groups and tuplets for format grp smo310986 before formatting
const dirsmo402302 = smo299672.getStemDirection();
smo299672.setStemDirection(dirsmo402302);
smo299673.setStemDirection(dirsmo402302);
const smo402302 = new VF.Beam([smo299672,smo299673]);
const dirsmo402305 = smo302867.getStemDirection();
smo302867.setStemDirection(dirsmo402305);
smo302868.setStemDirection(dirsmo402305);
const smo402305 = new VF.Beam([smo302867,smo302868]);
 
// formatting measures in staff group smo310986
fmtsmo29969263.format([smo299692v0,smo302887v0], 276);
const stavesmo299692 = new VF.Stave(159, 1924, 347);
stavesmo299692.setAttribute('id', 'stavesmo299692');
stavesmo299692.setBegBarType(1);
stavesmo299692.addClef('treble');
const keysmo299692 = new VF.KeySignature('F');
keysmo299692.addToStave(stavesmo299692);
stavesmo299692.setContext(context);
stavesmo299692.draw();
smo299692v0.draw(context, stavesmo299692);
smo402302.setContext(context);
smo402302.draw();
const stavesmo302887 = new VF.Stave(159, 2010, 347);
stavesmo302887.setAttribute('id', 'stavesmo302887');
stavesmo302887.setBegBarType(1);
stavesmo302887.addClef('bass');
const keysmo302887 = new VF.KeySignature('F');
keysmo302887.addToStave(stavesmo302887);
stavesmo302887.setContext(context);
stavesmo302887.draw();
smo302887v0.draw(context, stavesmo302887);
smo402305.setContext(context);
smo402305.draw();
// create beam groups and tuplets for format grp smo307824 before formatting
 
// formatting measures in staff group smo307824
fmtsmo30600663.format([smo306006v0], 274);
const stavesmo306006 = new VF.Stave(159, 2081, 347);
stavesmo306006.setAttribute('id', 'stavesmo306006');
stavesmo306006.setBegBarType(1);
stavesmo306006.addClef('bass');
const keysmo306006 = new VF.KeySignature('F');
keysmo306006.addToStave(stavesmo306006);
stavesmo306006.setContext(context);
stavesmo306006.draw();
smo306006v0.draw(context, stavesmo306006);
// create beam groups and tuplets for format grp smo310980 before formatting
 
// formatting measures in staff group smo310980
fmtsmo30918763.format([smo309187v0], 282);
const stavesmo309187 = new VF.Stave(159, 2152, 347);
stavesmo309187.setAttribute('id', 'stavesmo309187');
stavesmo309187.setBegBarType(1);
stavesmo309187.addClef('percussion');
const keysmo309187 = new VF.KeySignature('F');
keysmo309187.addToStave(stavesmo309187);
stavesmo309187.setContext(context);
stavesmo309187.draw();
smo309187v0.draw(context, stavesmo309187);
const leftsmo310980stavesmo25635117 = new VF.StaveConnector(stavesmo256351, stavesmo268623).setType(3);
leftsmo310980stavesmo25635117.setContext(context).draw();
const leftsmo310980stavesmo27173017 = new VF.StaveConnector(stavesmo271730, stavesmo281037).setType(3);
leftsmo310980stavesmo27173017.setContext(context).draw();
const leftsmo310980stavesmo28412617 = new VF.StaveConnector(stavesmo284126, stavesmo293263).setType(1);
leftsmo310980stavesmo28412617.setContext(context).draw();
const leftsmo310980stavesmo29969217 = new VF.StaveConnector(stavesmo299692, stavesmo302887).setType(3);
leftsmo310980stavesmo29969217.setContext(context).draw();
const fmtsmo25637664 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo256376v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo256376v0ar = [];
const smo256352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo256352.setAttribute('id', 'smo256352');
const smo256353 = new VF.Annotation('bun');
smo256353.setAttribute('id', 'smo256353');
smo256353.setFont('times', 12, 'normal');
smo256353.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256352.addModifier(smo256353);
smo256353.addClass('lyric lyric-0');
smo256376v0ar.push(smo256352);
const smo256354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo256354.setAttribute('id', 'smo256354');
smo256376v0ar.push(smo256354);
const smo256355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo256355.setAttribute('id', 'smo256355');
smo256376v0ar.push(smo256355);
const smo256356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo256356.setAttribute('id', 'smo256356');
const smo256357 = new VF.Annotation('Man');
smo256357.setAttribute('id', 'smo256357');
smo256357.setFont('times', 12, 'normal');
smo256357.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256356.addModifier(smo256357);
smo256357.addClass('lyric lyric-0 lyric-hyphen');
smo256376v0ar.push(smo256356);
const smo256358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo256358.setAttribute('id', 'smo256358');
smo256376v0ar.push(smo256358);
const smo256359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo256359.setAttribute('id', 'smo256359');
const smo2563590acc = new VF.Accidental('n');
smo256359.addModifier(smo2563590acc, 0);
const smo256360 = new VF.Annotation('ding');
smo256360.setAttribute('id', 'smo256360');
smo256360.setFont('times', 12, 'normal');
smo256360.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256359.addModifier(smo256360);
smo256360.addClass('lyric lyric-0 lyric-hyphen');
smo256376v0ar.push(smo256359);
smo256376v0.addTickables(smo256376v0ar)
fmtsmo25637664.joinVoices([smo256376v0]);
const fmtsmo25937064 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo259370v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259370v0ar = [];
const smo259346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo259346.setAttribute('id', 'smo259346');
const smo259347 = new VF.Annotation('bun');
smo259347.setAttribute('id', 'smo259347');
smo259347.setFont('times', 12, 'normal');
smo259347.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259346.addModifier(smo259347);
smo259347.addClass('lyric lyric-0');
smo259370v0ar.push(smo259346);
const smo259348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259348.setAttribute('id', 'smo259348');
smo259370v0ar.push(smo259348);
const smo259349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259349.setAttribute('id', 'smo259349');
smo259370v0ar.push(smo259349);
const smo259350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259350.setAttribute('id', 'smo259350');
const smo259351 = new VF.Annotation('Man');
smo259351.setAttribute('id', 'smo259351');
smo259351.setFont('times', 12, 'normal');
smo259351.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259350.addModifier(smo259351);
smo259351.addClass('lyric lyric-0 lyric-hyphen');
smo259370v0ar.push(smo259350);
const smo259352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259352.setAttribute('id', 'smo259352');
smo259370v0ar.push(smo259352);
const smo259353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo259353.setAttribute('id', 'smo259353');
const smo2593530acc = new VF.Accidental('n');
smo259353.addModifier(smo2593530acc, 0);
const smo259354 = new VF.Annotation('ding');
smo259354.setAttribute('id', 'smo259354');
smo259354.setFont('times', 12, 'normal');
smo259354.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259353.addModifier(smo259354);
smo259354.addClass('lyric lyric-0 lyric-hyphen');
smo259370v0ar.push(smo259353);
smo259370v0.addTickables(smo259370v0ar)
fmtsmo25937064.joinVoices([smo259370v0]);
const fmtsmo26251364 = new VF.Formatter();
//
// voices and notes for stave 2 64
const smo262513v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo262513v0ar = [];
const smo262489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo262489.setAttribute('id', 'smo262489');
const smo262490 = new VF.Annotation('bun');
smo262490.setAttribute('id', 'smo262490');
smo262490.setFont('times', 12, 'normal');
smo262490.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262489.addModifier(smo262490);
smo262490.addClass('lyric lyric-0');
smo262513v0ar.push(smo262489);
const smo262491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262491.setAttribute('id', 'smo262491');
smo262513v0ar.push(smo262491);
const smo262492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262492.setAttribute('id', 'smo262492');
smo262513v0ar.push(smo262492);
const smo262493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo262493.setAttribute('id', 'smo262493');
const smo262494 = new VF.Annotation('Man');
smo262494.setAttribute('id', 'smo262494');
smo262494.setFont('times', 12, 'normal');
smo262494.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262493.addModifier(smo262494);
smo262494.addClass('lyric lyric-0 lyric-hyphen');
smo262513v0ar.push(smo262493);
const smo262495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo262495.setAttribute('id', 'smo262495');
smo262513v0ar.push(smo262495);
const smo262496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo262496.setAttribute('id', 'smo262496');
const smo2624960acc = new VF.Accidental('n');
smo262496.addModifier(smo2624960acc, 0);
const smo262497 = new VF.Annotation('ding');
smo262497.setAttribute('id', 'smo262497');
smo262497.setFont('times', 12, 'normal');
smo262497.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262496.addModifier(smo262497);
smo262497.addClass('lyric lyric-0 lyric-hyphen');
smo262513v0ar.push(smo262496);
smo262513v0.addTickables(smo262513v0ar)
fmtsmo26251364.joinVoices([smo262513v0]);
const fmtsmo26562964 = new VF.Formatter();
//
// voices and notes for stave 3 64
const smo265629v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo265629v0ar = [];
const smo265605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo265605.setAttribute('id', 'smo265605');
const smo265606 = new VF.Annotation('bun');
smo265606.setAttribute('id', 'smo265606');
smo265606.setFont('times', 12, 'normal');
smo265606.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265605.addModifier(smo265606);
smo265606.addClass('lyric lyric-0');
smo265629v0ar.push(smo265605);
const smo265607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo265607.setAttribute('id', 'smo265607');
smo265629v0ar.push(smo265607);
const smo265608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo265608.setAttribute('id', 'smo265608');
smo265629v0ar.push(smo265608);
const smo265609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo265609.setAttribute('id', 'smo265609');
const smo265610 = new VF.Annotation('Man');
smo265610.setAttribute('id', 'smo265610');
smo265610.setFont('times', 12, 'normal');
smo265610.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265609.addModifier(smo265610);
smo265610.addClass('lyric lyric-0 lyric-hyphen');
smo265629v0ar.push(smo265609);
const smo265611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo265611.setAttribute('id', 'smo265611');
smo265629v0ar.push(smo265611);
const smo265612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo265612.setAttribute('id', 'smo265612');
const smo2656120acc = new VF.Accidental('n');
smo265612.addModifier(smo2656120acc, 0);
const smo265613 = new VF.Annotation('ding');
smo265613.setAttribute('id', 'smo265613');
smo265613.setFont('times', 12, 'normal');
smo265613.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265612.addModifier(smo265613);
smo265613.addClass('lyric lyric-0 lyric-hyphen');
smo265629v0ar.push(smo265612);
smo265629v0.addTickables(smo265629v0ar)
fmtsmo26562964.joinVoices([smo265629v0]);
const fmtsmo26864864 = new VF.Formatter();
//
// voices and notes for stave 4 64
const smo268648v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo268648v0ar = [];
const smo268624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo268624.setAttribute('id', 'smo268624');
const smo268625 = new VF.Annotation('bun');
smo268625.setAttribute('id', 'smo268625');
smo268625.setFont('times', 12, 'normal');
smo268625.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268624.addModifier(smo268625);
smo268625.addClass('lyric lyric-0');
smo268648v0ar.push(smo268624);
const smo268626 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo268626.setAttribute('id', 'smo268626');
smo268648v0ar.push(smo268626);
const smo268627 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo268627.setAttribute('id', 'smo268627');
smo268648v0ar.push(smo268627);
const smo268628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo268628.setAttribute('id', 'smo268628');
const smo268629 = new VF.Annotation('Man');
smo268629.setAttribute('id', 'smo268629');
smo268629.setFont('times', 12, 'normal');
smo268629.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268628.addModifier(smo268629);
smo268629.addClass('lyric lyric-0 lyric-hyphen');
smo268648v0ar.push(smo268628);
const smo268630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo268630.setAttribute('id', 'smo268630');
smo268648v0ar.push(smo268630);
const smo268631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo268631.setAttribute('id', 'smo268631');
const smo2686310acc = new VF.Accidental('n');
smo268631.addModifier(smo2686310acc, 0);
const smo268632 = new VF.Annotation('ding');
smo268632.setAttribute('id', 'smo268632');
smo268632.setFont('times', 12, 'normal');
smo268632.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268631.addModifier(smo268632);
smo268632.addClass('lyric lyric-0 lyric-hyphen');
smo268648v0ar.push(smo268631);
smo268648v0.addTickables(smo268648v0ar)
fmtsmo26864864.joinVoices([smo268648v0]);
const fmtsmo27175564 = new VF.Formatter();
//
// voices and notes for stave 5 64
const smo271755v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo271755v0ar = [];
const smo271731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo271731.setAttribute('id', 'smo271731');
const smo271732 = new VF.Annotation('bun');
smo271732.setAttribute('id', 'smo271732');
smo271732.setFont('times', 12, 'normal');
smo271732.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271731.addModifier(smo271732);
smo271732.addClass('lyric lyric-0');
smo271755v0ar.push(smo271731);
const smo271733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo271733.setAttribute('id', 'smo271733');
smo271755v0ar.push(smo271733);
const smo271734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo271734.setAttribute('id', 'smo271734');
smo271755v0ar.push(smo271734);
const smo271735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo271735.setAttribute('id', 'smo271735');
const smo271736 = new VF.Annotation('Man');
smo271736.setAttribute('id', 'smo271736');
smo271736.setFont('times', 12, 'normal');
smo271736.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271735.addModifier(smo271736);
smo271736.addClass('lyric lyric-0 lyric-hyphen');
smo271755v0ar.push(smo271735);
const smo271737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo271737.setAttribute('id', 'smo271737');
smo271755v0ar.push(smo271737);
const smo271738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo271738.setAttribute('id', 'smo271738');
const smo2717380acc = new VF.Accidental('n');
smo271738.addModifier(smo2717380acc, 0);
const smo271739 = new VF.Annotation('ding');
smo271739.setAttribute('id', 'smo271739');
smo271739.setFont('times', 12, 'normal');
smo271739.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271738.addModifier(smo271739);
smo271739.addClass('lyric lyric-0 lyric-hyphen');
smo271755v0ar.push(smo271738);
smo271755v0.addTickables(smo271755v0ar)
fmtsmo27175564.joinVoices([smo271755v0]);
const fmtsmo27486764 = new VF.Formatter();
//
// voices and notes for stave 6 64
const smo274867v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo274867v0ar = [];
const smo274843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo274843.setAttribute('id', 'smo274843');
const smo274844 = new VF.Annotation('bun');
smo274844.setAttribute('id', 'smo274844');
smo274844.setFont('times', 12, 'normal');
smo274844.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo274843.addModifier(smo274844);
smo274844.addClass('lyric lyric-0');
smo274867v0ar.push(smo274843);
const smo274845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo274845.setAttribute('id', 'smo274845');
smo274867v0ar.push(smo274845);
const smo274846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo274846.setAttribute('id', 'smo274846');
smo274867v0ar.push(smo274846);
const smo274847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo274847.setAttribute('id', 'smo274847');
const smo274848 = new VF.Annotation('Man');
smo274848.setAttribute('id', 'smo274848');
smo274848.setFont('times', 12, 'normal');
smo274848.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo274847.addModifier(smo274848);
smo274848.addClass('lyric lyric-0 lyric-hyphen');
smo274867v0ar.push(smo274847);
const smo274849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo274849.setAttribute('id', 'smo274849');
smo274867v0ar.push(smo274849);
const smo274850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo274850.setAttribute('id', 'smo274850');
const smo2748500acc = new VF.Accidental('n');
smo274850.addModifier(smo2748500acc, 0);
const smo274851 = new VF.Annotation('ding');
smo274851.setAttribute('id', 'smo274851');
smo274851.setFont('times', 12, 'normal');
smo274851.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo274850.addModifier(smo274851);
smo274851.addClass('lyric lyric-0 lyric-hyphen');
smo274867v0ar.push(smo274850);
smo274867v0.addTickables(smo274867v0ar)
fmtsmo27486764.joinVoices([smo274867v0]);
const fmtsmo27797664 = new VF.Formatter();
//
// voices and notes for stave 7 64
const smo277976v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo277976v0ar = [];
const smo277952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo277952.setAttribute('id', 'smo277952');
const smo277953 = new VF.Annotation('bun');
smo277953.setAttribute('id', 'smo277953');
smo277953.setFont('times', 12, 'normal');
smo277953.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo277952.addModifier(smo277953);
smo277953.addClass('lyric lyric-0');
smo277976v0ar.push(smo277952);
const smo277954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo277954.setAttribute('id', 'smo277954');
smo277976v0ar.push(smo277954);
const smo277955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo277955.setAttribute('id', 'smo277955');
smo277976v0ar.push(smo277955);
const smo277956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo277956.setAttribute('id', 'smo277956');
const smo277957 = new VF.Annotation('Man');
smo277957.setAttribute('id', 'smo277957');
smo277957.setFont('times', 12, 'normal');
smo277957.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo277956.addModifier(smo277957);
smo277957.addClass('lyric lyric-0 lyric-hyphen');
smo277976v0ar.push(smo277956);
const smo277958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo277958.setAttribute('id', 'smo277958');
smo277976v0ar.push(smo277958);
const smo277959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo277959.setAttribute('id', 'smo277959');
const smo2779590acc = new VF.Accidental('n');
smo277959.addModifier(smo2779590acc, 0);
const smo277960 = new VF.Annotation('ding');
smo277960.setAttribute('id', 'smo277960');
smo277960.setFont('times', 12, 'normal');
smo277960.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo277959.addModifier(smo277960);
smo277960.addClass('lyric lyric-0 lyric-hyphen');
smo277976v0ar.push(smo277959);
smo277976v0.addTickables(smo277976v0ar)
fmtsmo27797664.joinVoices([smo277976v0]);
const fmtsmo28106264 = new VF.Formatter();
//
// voices and notes for stave 8 64
const smo281062v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281062v0ar = [];
const smo281038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281038.setAttribute('id', 'smo281038');
const smo281039 = new VF.Annotation('bun');
smo281039.setAttribute('id', 'smo281039');
smo281039.setFont('times', 12, 'normal');
smo281039.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281038.addModifier(smo281039);
smo281039.addClass('lyric lyric-0');
smo281062v0ar.push(smo281038);
const smo281040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281040.setAttribute('id', 'smo281040');
smo281062v0ar.push(smo281040);
const smo281041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281041.setAttribute('id', 'smo281041');
smo281062v0ar.push(smo281041);
const smo281042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281042.setAttribute('id', 'smo281042');
const smo281043 = new VF.Annotation('Man');
smo281043.setAttribute('id', 'smo281043');
smo281043.setFont('times', 12, 'normal');
smo281043.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281042.addModifier(smo281043);
smo281043.addClass('lyric lyric-0 lyric-hyphen');
smo281062v0ar.push(smo281042);
const smo281044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281044.setAttribute('id', 'smo281044');
smo281062v0ar.push(smo281044);
const smo281045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo281045.setAttribute('id', 'smo281045');
const smo2810450acc = new VF.Accidental('n');
smo281045.addModifier(smo2810450acc, 0);
const smo281046 = new VF.Annotation('ding');
smo281046.setAttribute('id', 'smo281046');
smo281046.setFont('times', 12, 'normal');
smo281046.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281045.addModifier(smo281046);
smo281046.addClass('lyric lyric-0 lyric-hyphen');
smo281062v0ar.push(smo281045);
smo281062v0.addTickables(smo281062v0ar)
fmtsmo28106264.joinVoices([smo281062v0]);
const fmtsmo28415164 = new VF.Formatter();
//
// voices and notes for stave 9 64
const smo284151v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284151v0ar = [];
const smo284127 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo284127.setAttribute('id', 'smo284127');
const smo284128 = new VF.Annotation('bun');
smo284128.setAttribute('id', 'smo284128');
smo284128.setFont('times', 12, 'normal');
smo284128.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284127.addModifier(smo284128);
smo284128.addClass('lyric lyric-0');
smo284151v0ar.push(smo284127);
const smo284129 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo284129.setAttribute('id', 'smo284129');
smo284151v0ar.push(smo284129);
const smo284130 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo284130.setAttribute('id', 'smo284130');
smo284151v0ar.push(smo284130);
const smo284131 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo284131.setAttribute('id', 'smo284131');
const smo284132 = new VF.Annotation('Man');
smo284132.setAttribute('id', 'smo284132');
smo284132.setFont('times', 12, 'normal');
smo284132.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284131.addModifier(smo284132);
smo284132.addClass('lyric lyric-0 lyric-hyphen');
smo284151v0ar.push(smo284131);
const smo284133 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo284133.setAttribute('id', 'smo284133');
smo284151v0ar.push(smo284133);
const smo284134 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo284134.setAttribute('id', 'smo284134');
const smo2841340acc = new VF.Accidental('b');
smo284134.addModifier(smo2841340acc, 0);
const smo284135 = new VF.Annotation('ding');
smo284135.setAttribute('id', 'smo284135');
smo284135.setFont('times', 12, 'normal');
smo284135.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284134.addModifier(smo284135);
smo284135.addClass('lyric lyric-0 lyric-hyphen');
smo284151v0ar.push(smo284134);
smo284151v0.addTickables(smo284151v0ar)
fmtsmo28415164.joinVoices([smo284151v0]);
const fmtsmo28719164 = new VF.Formatter();
//
// voices and notes for stave 10 64
const smo287191v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287191v0ar = [];
const smo287167 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287167.setAttribute('id', 'smo287167');
const smo287168 = new VF.Annotation('bun');
smo287168.setAttribute('id', 'smo287168');
smo287168.setFont('times', 12, 'normal');
smo287168.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287167.addModifier(smo287168);
smo287168.addClass('lyric lyric-0');
smo287191v0ar.push(smo287167);
const smo287169 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287169.setAttribute('id', 'smo287169');
smo287191v0ar.push(smo287169);
const smo287170 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287170.setAttribute('id', 'smo287170');
smo287191v0ar.push(smo287170);
const smo287171 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287171.setAttribute('id', 'smo287171');
const smo287172 = new VF.Annotation('Man');
smo287172.setAttribute('id', 'smo287172');
smo287172.setFont('times', 12, 'normal');
smo287172.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287171.addModifier(smo287172);
smo287172.addClass('lyric lyric-0 lyric-hyphen');
smo287191v0ar.push(smo287171);
const smo287173 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287173.setAttribute('id', 'smo287173');
smo287191v0ar.push(smo287173);
const smo287174 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo287174.setAttribute('id', 'smo287174');
const smo2871740acc = new VF.Accidental('b');
smo287174.addModifier(smo2871740acc, 0);
const smo287175 = new VF.Annotation('ding');
smo287175.setAttribute('id', 'smo287175');
smo287175.setFont('times', 12, 'normal');
smo287175.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287174.addModifier(smo287175);
smo287175.addClass('lyric lyric-0 lyric-hyphen');
smo287191v0ar.push(smo287174);
smo287191v0.addTickables(smo287191v0ar)
fmtsmo28719164.joinVoices([smo287191v0]);
const fmtsmo29024564 = new VF.Formatter();
//
// voices and notes for stave 11 64
const smo290245v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290245v0ar = [];
const smo290221 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290221.setAttribute('id', 'smo290221');
const smo290222 = new VF.Annotation('bun');
smo290222.setAttribute('id', 'smo290222');
smo290222.setFont('times', 12, 'normal');
smo290222.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290221.addModifier(smo290222);
smo290222.addClass('lyric lyric-0');
smo290245v0ar.push(smo290221);
const smo290223 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290223.setAttribute('id', 'smo290223');
smo290245v0ar.push(smo290223);
const smo290224 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290224.setAttribute('id', 'smo290224');
smo290245v0ar.push(smo290224);
const smo290225 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290225.setAttribute('id', 'smo290225');
const smo290226 = new VF.Annotation('Man');
smo290226.setAttribute('id', 'smo290226');
smo290226.setFont('times', 12, 'normal');
smo290226.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290225.addModifier(smo290226);
smo290226.addClass('lyric lyric-0 lyric-hyphen');
smo290245v0ar.push(smo290225);
const smo290227 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290227.setAttribute('id', 'smo290227');
smo290245v0ar.push(smo290227);
const smo290228 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo290228.setAttribute('id', 'smo290228');
const smo2902280acc = new VF.Accidental('b');
smo290228.addModifier(smo2902280acc, 0);
const smo290229 = new VF.Annotation('ding');
smo290229.setAttribute('id', 'smo290229');
smo290229.setFont('times', 12, 'normal');
smo290229.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290228.addModifier(smo290229);
smo290229.addClass('lyric lyric-0 lyric-hyphen');
smo290245v0ar.push(smo290228);
smo290245v0.addTickables(smo290245v0ar)
fmtsmo29024564.joinVoices([smo290245v0]);
const fmtsmo29328864 = new VF.Formatter();
//
// voices and notes for stave 12 64
const smo293288v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293288v0ar = [];
const smo293264 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293264.setAttribute('id', 'smo293264');
const smo293265 = new VF.Annotation('bun');
smo293265.setAttribute('id', 'smo293265');
smo293265.setFont('times', 12, 'normal');
smo293265.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293264.addModifier(smo293265);
smo293265.addClass('lyric lyric-0');
smo293288v0ar.push(smo293264);
const smo293266 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293266.setAttribute('id', 'smo293266');
smo293288v0ar.push(smo293266);
const smo293267 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293267.setAttribute('id', 'smo293267');
smo293288v0ar.push(smo293267);
const smo293268 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293268.setAttribute('id', 'smo293268');
const smo293269 = new VF.Annotation('Man');
smo293269.setAttribute('id', 'smo293269');
smo293269.setFont('times', 12, 'normal');
smo293269.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293268.addModifier(smo293269);
smo293269.addClass('lyric lyric-0 lyric-hyphen');
smo293288v0ar.push(smo293268);
const smo293270 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293270.setAttribute('id', 'smo293270');
smo293288v0ar.push(smo293270);
const smo293271 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo293271.setAttribute('id', 'smo293271');
const smo2932710acc = new VF.Accidental('b');
smo293271.addModifier(smo2932710acc, 0);
const smo293272 = new VF.Annotation('ding');
smo293272.setAttribute('id', 'smo293272');
smo293272.setFont('times', 12, 'normal');
smo293272.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293271.addModifier(smo293272);
smo293272.addClass('lyric lyric-0 lyric-hyphen');
smo293288v0ar.push(smo293271);
smo293288v0.addTickables(smo293288v0ar)
fmtsmo29328864.joinVoices([smo293288v0]);
const fmtsmo29650064 = new VF.Formatter();
//
// voices and notes for stave 13 64
const smo296500v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296500v0ar = [];
const smo296480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo296480.setAttribute('id', 'smo296480');
smo296480.addModifier(new VF.Dot(), 0);
smo296480.addModifier(new VF.Dot(), 1);
smo296480.addModifier(new VF.Dot(), 2);
smo296500v0ar.push(smo296480);
const smo296481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo296481.setAttribute('id', 'smo296481');
smo296500v0ar.push(smo296481);
const smo296482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo296482.setAttribute('id', 'smo296482');
smo296500v0ar.push(smo296482);
const smo296483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo296483.setAttribute('id', 'smo296483');
const smo2964832acc = new VF.Accidental('b');
smo296483.addModifier(smo2964832acc, 2);
smo296500v0ar.push(smo296483);
const smo296484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo296484.setAttribute('id', 'smo296484');
smo296500v0ar.push(smo296484);
smo296500v0.addTickables(smo296500v0ar)
fmtsmo29650064.joinVoices([smo296500v0]);
const fmtsmo29971364 = new VF.Formatter();
//
// voices and notes for stave 14 64
const smo299713v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo299713v0ar = [];
const smo299693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo299693.setAttribute('id', 'smo299693');
smo299693.addModifier(new VF.Dot(), 0);
smo299693.addModifier(new VF.Dot(), 1);
smo299693.addModifier(new VF.Dot(), 2);
smo299713v0ar.push(smo299693);
const smo299694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo299694.setAttribute('id', 'smo299694');
smo299713v0ar.push(smo299694);
const smo299695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo299695.setAttribute('id', 'smo299695');
smo299713v0ar.push(smo299695);
const smo299696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo299696.setAttribute('id', 'smo299696');
const smo2996962acc = new VF.Accidental('b');
smo299696.addModifier(smo2996962acc, 2);
smo299713v0ar.push(smo299696);
const smo299697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo299697.setAttribute('id', 'smo299697');
smo299713v0ar.push(smo299697);
smo299713v0.addTickables(smo299713v0ar)
fmtsmo29971364.joinVoices([smo299713v0]);
const fmtsmo30290864 = new VF.Formatter();
//
// voices and notes for stave 15 64
const smo302908v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo302908v0ar = [];
const smo302888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo302888.setAttribute('id', 'smo302888');
smo302888.addModifier(new VF.Dot(), 0);
smo302908v0ar.push(smo302888);
const smo302889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo302889.setAttribute('id', 'smo302889');
smo302908v0ar.push(smo302889);
const smo302890 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo302890.setAttribute('id', 'smo302890');
smo302908v0ar.push(smo302890);
const smo302891 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo302891.setAttribute('id', 'smo302891');
smo302908v0ar.push(smo302891);
const smo302892 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo302892.setAttribute('id', 'smo302892');
smo302908v0ar.push(smo302892);
smo302908v0.addTickables(smo302908v0ar)
fmtsmo30290864.joinVoices([smo302908v0]);
const fmtsmo30602664 = new VF.Formatter();
//
// voices and notes for stave 16 64
const smo306026v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306026v0ar = [];
const smo306007 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo306007.setAttribute('id', 'smo306007');
smo306007.addModifier(new VF.Dot(), 0);
smo306026v0ar.push(smo306007);
const smo306008 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo306008.setAttribute('id', 'smo306008');
smo306026v0ar.push(smo306008);
const smo306009 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo306009.setAttribute('id', 'smo306009');
smo306026v0ar.push(smo306009);
const smo306010 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo306010.setAttribute('id', 'smo306010');
smo306026v0ar.push(smo306010);
smo306026v0.addTickables(smo306026v0ar)
fmtsmo30602664.joinVoices([smo306026v0]);
const fmtsmo30921564 = new VF.Formatter();
//
// voices and notes for stave 17 64
const smo309215v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309215v0ar = [];
const smo309188 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309188.setAttribute('id', 'smo309188');
const smo309189 = new VF.Annotation('bun');
smo309189.setAttribute('id', 'smo309189');
smo309189.setFont('times', 12, 'normal');
smo309189.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo309188.addModifier(smo309189);
smo309189.addClass('lyric lyric-0');
smo309215v0ar.push(smo309188);
const smo309190 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo309190.setAttribute('id', 'smo309190');
smo309215v0ar.push(smo309190);
const smo309191 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo309191.setAttribute('id', 'smo309191');
smo309215v0ar.push(smo309191);
const smo309192 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309192.setAttribute('id', 'smo309192');
smo309215v0ar.push(smo309192);
smo309215v0.addTickables(smo309215v0ar)
fmtsmo30921564.joinVoices([smo309215v0]);
const smo309215v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309215v1ar = [];
const smo309193 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309193.setAttribute('id', 'smo309193');
smo309193.setStyle({ fillStyle: '#aaaaaa7f' });
smo309215v1ar.push(smo309193);
const smo309194 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309194.setAttribute('id', 'smo309194');
smo309194.setStyle({ fillStyle: '#aaaaaa7f' });
smo309215v1ar.push(smo309194);
const smo309195 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309195.setAttribute('id', 'smo309195');
smo309195.setStyle({ fillStyle: '#aaaaaa7f' });
smo309215v1ar.push(smo309195);
const smo309196 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309196.setAttribute('id', 'smo309196');
smo309196.setStyle({ fillStyle: '#aaaaaa7f' });
smo309215v1ar.push(smo309196);
smo309215v1.addTickables(smo309215v1ar)
fmtsmo30921564.joinVoices([smo309215v1]);
const smo309215v2 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309215v2ar = [];
const smo309197 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo309197.setAttribute('id', 'smo309197');
smo309197.setStyle({ fillStyle: '#aaaaaa7f' });
const smo3091970acc = new VF.Accidental('n');
smo309197.addModifier(smo3091970acc, 0);
smo309215v2ar.push(smo309197);
const smo309198 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309198.setAttribute('id', 'smo309198');
smo309198.setStyle({ fillStyle: '#aaaaaa7f' });
smo309215v2ar.push(smo309198);
const smo309199 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309199.setAttribute('id', 'smo309199');
smo309199.setStyle({ fillStyle: '#aaaaaa7f' });
smo309215v2ar.push(smo309199);
smo309215v2.addTickables(smo309215v2ar)
fmtsmo30921564.joinVoices([smo309215v2]);
// create beam groups and tuplets for format grp smo310988 before formatting
const dirsmo402312 = smo256356.getStemDirection();
smo256356.setStemDirection(dirsmo402312);
smo256358.setStemDirection(dirsmo402312);
const smo402312 = new VF.Beam([smo256356,smo256358]);
const dirsmo402315 = smo259350.getStemDirection();
smo259350.setStemDirection(dirsmo402315);
smo259352.setStemDirection(dirsmo402315);
const smo402315 = new VF.Beam([smo259350,smo259352]);
const dirsmo402318 = smo262493.getStemDirection();
smo262493.setStemDirection(dirsmo402318);
smo262495.setStemDirection(dirsmo402318);
const smo402318 = new VF.Beam([smo262493,smo262495]);
const dirsmo402321 = smo265609.getStemDirection();
smo265609.setStemDirection(dirsmo402321);
smo265611.setStemDirection(dirsmo402321);
const smo402321 = new VF.Beam([smo265609,smo265611]);
const dirsmo402324 = smo268628.getStemDirection();
smo268628.setStemDirection(dirsmo402324);
smo268630.setStemDirection(dirsmo402324);
const smo402324 = new VF.Beam([smo268628,smo268630]);
 
// formatting measures in staff group smo310988
fmtsmo25637664.format([smo256376v0,smo259370v0,smo262513v0,smo265629v0,smo268648v0], 288);
const stavesmo256376 = new VF.Stave(506, 210, 302);
stavesmo256376.setAttribute('id', 'stavesmo256376');
stavesmo256376.setBegBarType(VF.Barline.type.NONE);
stavesmo256376.setContext(context);
stavesmo256376.draw();
smo256376v0.draw(context, stavesmo256376);
smo402312.setContext(context);
smo402312.draw();
const stavesmo259370 = new VF.Stave(506, 316, 302);
stavesmo259370.setAttribute('id', 'stavesmo259370');
stavesmo259370.setBegBarType(VF.Barline.type.NONE);
stavesmo259370.setContext(context);
stavesmo259370.draw();
smo259370v0.draw(context, stavesmo259370);
smo402315.setContext(context);
smo402315.draw();
const stavesmo262513 = new VF.Stave(506, 437, 302);
stavesmo262513.setAttribute('id', 'stavesmo262513');
stavesmo262513.setBegBarType(VF.Barline.type.NONE);
stavesmo262513.setContext(context);
stavesmo262513.draw();
smo262513v0.draw(context, stavesmo262513);
smo402318.setContext(context);
smo402318.draw();
const stavesmo265629 = new VF.Stave(506, 553, 302);
stavesmo265629.setAttribute('id', 'stavesmo265629');
stavesmo265629.setBegBarType(VF.Barline.type.NONE);
stavesmo265629.setContext(context);
stavesmo265629.draw();
smo265629v0.draw(context, stavesmo265629);
smo402321.setContext(context);
smo402321.draw();
const stavesmo268648 = new VF.Stave(506, 659, 302);
stavesmo268648.setAttribute('id', 'stavesmo268648');
stavesmo268648.setBegBarType(VF.Barline.type.NONE);
stavesmo268648.setContext(context);
stavesmo268648.draw();
smo268648v0.draw(context, stavesmo268648);
smo402324.setContext(context);
smo402324.draw();
// create beam groups and tuplets for format grp smo310990 before formatting
const dirsmo402327 = smo271735.getStemDirection();
smo271735.setStemDirection(dirsmo402327);
smo271737.setStemDirection(dirsmo402327);
const smo402327 = new VF.Beam([smo271735,smo271737]);
const dirsmo402330 = smo274847.getStemDirection();
smo274847.setStemDirection(dirsmo402330);
smo274849.setStemDirection(dirsmo402330);
const smo402330 = new VF.Beam([smo274847,smo274849]);
const dirsmo402333 = smo277956.getStemDirection();
smo277956.setStemDirection(dirsmo402333);
smo277958.setStemDirection(dirsmo402333);
const smo402333 = new VF.Beam([smo277956,smo277958]);
const dirsmo402336 = smo281042.getStemDirection();
smo281042.setStemDirection(dirsmo402336);
smo281044.setStemDirection(dirsmo402336);
const smo402336 = new VF.Beam([smo281042,smo281044]);
 
// formatting measures in staff group smo310990
fmtsmo27175564.format([smo271755v0,smo274867v0,smo277976v0,smo281062v0], 288);
const stavesmo271755 = new VF.Stave(506, 780, 302);
stavesmo271755.setAttribute('id', 'stavesmo271755');
stavesmo271755.setBegBarType(VF.Barline.type.NONE);
stavesmo271755.setContext(context);
stavesmo271755.draw();
smo271755v0.draw(context, stavesmo271755);
smo402327.setContext(context);
smo402327.draw();
const stavesmo274867 = new VF.Stave(506, 896, 302);
stavesmo274867.setAttribute('id', 'stavesmo274867');
stavesmo274867.setBegBarType(VF.Barline.type.NONE);
stavesmo274867.setContext(context);
stavesmo274867.draw();
smo274867v0.draw(context, stavesmo274867);
smo402330.setContext(context);
smo402330.draw();
const stavesmo277976 = new VF.Stave(506, 1012, 302);
stavesmo277976.setAttribute('id', 'stavesmo277976');
stavesmo277976.setBegBarType(VF.Barline.type.NONE);
stavesmo277976.setContext(context);
stavesmo277976.draw();
smo277976v0.draw(context, stavesmo277976);
smo402333.setContext(context);
smo402333.draw();
const stavesmo281062 = new VF.Stave(506, 1128, 302);
stavesmo281062.setAttribute('id', 'stavesmo281062');
stavesmo281062.setBegBarType(VF.Barline.type.NONE);
stavesmo281062.setContext(context);
stavesmo281062.draw();
smo281062v0.draw(context, stavesmo281062);
smo402336.setContext(context);
smo402336.draw();
// create beam groups and tuplets for format grp smo310992 before formatting
const dirsmo402339 = smo284131.getStemDirection();
smo284131.setStemDirection(dirsmo402339);
smo284133.setStemDirection(dirsmo402339);
const smo402339 = new VF.Beam([smo284131,smo284133]);
const dirsmo402342 = smo287171.getStemDirection();
smo287171.setStemDirection(dirsmo402342);
smo287173.setStemDirection(dirsmo402342);
const smo402342 = new VF.Beam([smo287171,smo287173]);
const dirsmo402345 = smo290225.getStemDirection();
smo290225.setStemDirection(dirsmo402345);
smo290227.setStemDirection(dirsmo402345);
const smo402345 = new VF.Beam([smo290225,smo290227]);
const dirsmo402348 = smo293268.getStemDirection();
smo293268.setStemDirection(dirsmo402348);
smo293270.setStemDirection(dirsmo402348);
const smo402348 = new VF.Beam([smo293268,smo293270]);
 
// formatting measures in staff group smo310992
fmtsmo28415164.format([smo284151v0,smo287191v0,smo290245v0,smo293288v0], 288);
const stavesmo284151 = new VF.Stave(506, 1264, 302);
stavesmo284151.setAttribute('id', 'stavesmo284151');
stavesmo284151.setBegBarType(VF.Barline.type.NONE);
stavesmo284151.setContext(context);
stavesmo284151.draw();
smo284151v0.draw(context, stavesmo284151);
smo402339.setContext(context);
smo402339.draw();
const stavesmo287191 = new VF.Stave(506, 1400, 302);
stavesmo287191.setAttribute('id', 'stavesmo287191');
stavesmo287191.setBegBarType(VF.Barline.type.NONE);
stavesmo287191.setContext(context);
stavesmo287191.draw();
smo287191v0.draw(context, stavesmo287191);
smo402342.setContext(context);
smo402342.draw();
const stavesmo290245 = new VF.Stave(506, 1536, 302);
stavesmo290245.setAttribute('id', 'stavesmo290245');
stavesmo290245.setBegBarType(VF.Barline.type.NONE);
stavesmo290245.setContext(context);
stavesmo290245.draw();
smo290245v0.draw(context, stavesmo290245);
smo402345.setContext(context);
smo402345.draw();
const stavesmo293288 = new VF.Stave(506, 1672, 302);
stavesmo293288.setAttribute('id', 'stavesmo293288');
stavesmo293288.setBegBarType(VF.Barline.type.NONE);
stavesmo293288.setContext(context);
stavesmo293288.draw();
smo293288v0.draw(context, stavesmo293288);
smo402348.setContext(context);
smo402348.draw();
// create beam groups and tuplets for format grp smo298311 before formatting
const dirsmo402351 = smo296481.getStemDirection();
smo296481.setStemDirection(dirsmo402351);
smo296482.setStemDirection(dirsmo402351);
const smo402351 = new VF.Beam([smo296481,smo296482]);
 
// formatting measures in staff group smo298311
fmtsmo29650064.format([smo296500v0], 288);
const stavesmo296500 = new VF.Stave(506, 1818, 302);
stavesmo296500.setAttribute('id', 'stavesmo296500');
stavesmo296500.setBegBarType(VF.Barline.type.NONE);
stavesmo296500.setContext(context);
stavesmo296500.draw();
smo296500v0.draw(context, stavesmo296500);
smo402351.setContext(context);
smo402351.draw();
// create beam groups and tuplets for format grp smo310986 before formatting
const dirsmo402354 = smo299694.getStemDirection();
smo299694.setStemDirection(dirsmo402354);
smo299695.setStemDirection(dirsmo402354);
const smo402354 = new VF.Beam([smo299694,smo299695]);
const dirsmo402357 = smo302889.getStemDirection();
smo302889.setStemDirection(dirsmo402357);
smo302890.setStemDirection(dirsmo402357);
const smo402357 = new VF.Beam([smo302889,smo302890]);
 
// formatting measures in staff group smo310986
fmtsmo29971364.format([smo299713v0,smo302908v0], 288);
const stavesmo299713 = new VF.Stave(506, 1924, 302);
stavesmo299713.setAttribute('id', 'stavesmo299713');
stavesmo299713.setBegBarType(VF.Barline.type.NONE);
stavesmo299713.setContext(context);
stavesmo299713.draw();
smo299713v0.draw(context, stavesmo299713);
smo402354.setContext(context);
smo402354.draw();
const stavesmo302908 = new VF.Stave(506, 2010, 302);
stavesmo302908.setAttribute('id', 'stavesmo302908');
stavesmo302908.setBegBarType(VF.Barline.type.NONE);
stavesmo302908.setContext(context);
stavesmo302908.draw();
smo302908v0.draw(context, stavesmo302908);
smo402357.setContext(context);
smo402357.draw();
// create beam groups and tuplets for format grp smo307824 before formatting
 
// formatting measures in staff group smo307824
fmtsmo30602664.format([smo306026v0], 288);
const stavesmo306026 = new VF.Stave(506, 2081, 302);
stavesmo306026.setAttribute('id', 'stavesmo306026');
stavesmo306026.setBegBarType(VF.Barline.type.NONE);
stavesmo306026.setContext(context);
stavesmo306026.draw();
smo306026v0.draw(context, stavesmo306026);
// create beam groups and tuplets for format grp smo310980 before formatting
 
// formatting measures in staff group smo310980
fmtsmo30921564.format([smo309215v0,smo309215v1,smo309215v2], 288);
const stavesmo309215 = new VF.Stave(506, 2152, 302);
stavesmo309215.setAttribute('id', 'stavesmo309215');
stavesmo309215.setBegBarType(VF.Barline.type.NONE);
stavesmo309215.setContext(context);
stavesmo309215.draw();
smo309215v0.draw(context, stavesmo309215);
smo309215v1.draw(context, stavesmo309215);
smo309215v2.draw(context, stavesmo309215);
const fmtsmo25640365 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo256403v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo256403v0ar = [];
const smo256377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo256377.setAttribute('id', 'smo256377');
const smo2563770acc = new VF.Accidental('n');
smo256377.addModifier(smo2563770acc, 0);
smo256403v0ar.push(smo256377);
const smo256378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo256378.setAttribute('id', 'smo256378');
const smo256379 = new VF.Annotation('a');
smo256379.setAttribute('id', 'smo256379');
smo256379.setFont('times', 12, 'normal');
smo256379.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256378.addModifier(smo256379);
smo256379.addClass('lyric lyric-0');
smo256403v0ar.push(smo256378);
const smo256380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo256380.setAttribute('id', 'smo256380');
smo256403v0ar.push(smo256380);
const smo256381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo256381.setAttribute('id', 'smo256381');
const smo256382 = new VF.Annotation('Ki');
smo256382.setAttribute('id', 'smo256382');
smo256382.setFont('times', 12, 'normal');
smo256382.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256381.addModifier(smo256382);
smo256382.addClass('lyric lyric-0 lyric-hyphen');
smo256403v0ar.push(smo256381);
const smo256383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo256383.setAttribute('id', 'smo256383');
smo256403v0ar.push(smo256383);
const smo256384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo256384.setAttribute('id', 'smo256384');
const smo256385 = new VF.Annotation('ki');
smo256385.setAttribute('id', 'smo256385');
smo256385.setFont('times', 12, 'normal');
smo256385.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256384.addModifier(smo256385);
smo256385.addClass('lyric lyric-0');
smo256403v0ar.push(smo256384);
const smo256386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo256386.setAttribute('id', 'smo256386');
const smo256387 = new VF.Annotation('ri');
smo256387.setAttribute('id', 'smo256387');
smo256387.setFont('times', 12, 'normal');
smo256387.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256386.addModifier(smo256387);
smo256387.addClass('lyric lyric-0');
smo256403v0ar.push(smo256386);
smo256403v0.addTickables(smo256403v0ar)
fmtsmo25640365.joinVoices([smo256403v0]);
const fmtsmo25939765 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo259397v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259397v0ar = [];
const smo259371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo259371.setAttribute('id', 'smo259371');
const smo2593710acc = new VF.Accidental('n');
smo259371.addModifier(smo2593710acc, 0);
smo259397v0ar.push(smo259371);
const smo259372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259372.setAttribute('id', 'smo259372');
const smo259373 = new VF.Annotation('a');
smo259373.setAttribute('id', 'smo259373');
smo259373.setFont('times', 12, 'normal');
smo259373.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259372.addModifier(smo259373);
smo259373.addClass('lyric lyric-0');
smo259397v0ar.push(smo259372);
const smo259374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259374.setAttribute('id', 'smo259374');
smo259397v0ar.push(smo259374);
const smo259375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259375.setAttribute('id', 'smo259375');
const smo259376 = new VF.Annotation('Ki');
smo259376.setAttribute('id', 'smo259376');
smo259376.setFont('times', 12, 'normal');
smo259376.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259375.addModifier(smo259376);
smo259376.addClass('lyric lyric-0 lyric-hyphen');
smo259397v0ar.push(smo259375);
const smo259377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259377.setAttribute('id', 'smo259377');
smo259397v0ar.push(smo259377);
const smo259378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259378.setAttribute('id', 'smo259378');
const smo259379 = new VF.Annotation('ki');
smo259379.setAttribute('id', 'smo259379');
smo259379.setFont('times', 12, 'normal');
smo259379.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259378.addModifier(smo259379);
smo259379.addClass('lyric lyric-0');
smo259397v0ar.push(smo259378);
const smo259380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259380.setAttribute('id', 'smo259380');
const smo259381 = new VF.Annotation('ri');
smo259381.setAttribute('id', 'smo259381');
smo259381.setFont('times', 12, 'normal');
smo259381.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259380.addModifier(smo259381);
smo259381.addClass('lyric lyric-0');
smo259397v0ar.push(smo259380);
smo259397v0.addTickables(smo259397v0ar)
fmtsmo25939765.joinVoices([smo259397v0]);
const fmtsmo26254065 = new VF.Formatter();
//
// voices and notes for stave 2 65
const smo262540v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo262540v0ar = [];
const smo262514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo262514.setAttribute('id', 'smo262514');
const smo2625140acc = new VF.Accidental('n');
smo262514.addModifier(smo2625140acc, 0);
smo262540v0ar.push(smo262514);
const smo262515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo262515.setAttribute('id', 'smo262515');
const smo262516 = new VF.Annotation('a');
smo262516.setAttribute('id', 'smo262516');
smo262516.setFont('times', 12, 'normal');
smo262516.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262515.addModifier(smo262516);
smo262516.addClass('lyric lyric-0');
smo262540v0ar.push(smo262515);
const smo262517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262517.setAttribute('id', 'smo262517');
smo262540v0ar.push(smo262517);
const smo262518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo262518.setAttribute('id', 'smo262518');
const smo262519 = new VF.Annotation('Ki');
smo262519.setAttribute('id', 'smo262519');
smo262519.setFont('times', 12, 'normal');
smo262519.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262518.addModifier(smo262519);
smo262519.addClass('lyric lyric-0 lyric-hyphen');
smo262540v0ar.push(smo262518);
const smo262520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo262520.setAttribute('id', 'smo262520');
smo262540v0ar.push(smo262520);
const smo262521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo262521.setAttribute('id', 'smo262521');
const smo262522 = new VF.Annotation('ki');
smo262522.setAttribute('id', 'smo262522');
smo262522.setFont('times', 12, 'normal');
smo262522.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262521.addModifier(smo262522);
smo262522.addClass('lyric lyric-0');
smo262540v0ar.push(smo262521);
const smo262523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo262523.setAttribute('id', 'smo262523');
const smo262524 = new VF.Annotation('ri');
smo262524.setAttribute('id', 'smo262524');
smo262524.setFont('times', 12, 'normal');
smo262524.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262523.addModifier(smo262524);
smo262524.addClass('lyric lyric-0');
smo262540v0ar.push(smo262523);
smo262540v0.addTickables(smo262540v0ar)
fmtsmo26254065.joinVoices([smo262540v0]);
const fmtsmo26565665 = new VF.Formatter();
//
// voices and notes for stave 3 65
const smo265656v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo265656v0ar = [];
const smo265630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo265630.setAttribute('id', 'smo265630');
const smo2656300acc = new VF.Accidental('n');
smo265630.addModifier(smo2656300acc, 0);
smo265656v0ar.push(smo265630);
const smo265631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo265631.setAttribute('id', 'smo265631');
const smo265632 = new VF.Annotation('a');
smo265632.setAttribute('id', 'smo265632');
smo265632.setFont('times', 12, 'normal');
smo265632.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265631.addModifier(smo265632);
smo265632.addClass('lyric lyric-0');
smo265656v0ar.push(smo265631);
const smo265633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo265633.setAttribute('id', 'smo265633');
smo265656v0ar.push(smo265633);
const smo265634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo265634.setAttribute('id', 'smo265634');
const smo265635 = new VF.Annotation('Ki');
smo265635.setAttribute('id', 'smo265635');
smo265635.setFont('times', 12, 'normal');
smo265635.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265634.addModifier(smo265635);
smo265635.addClass('lyric lyric-0 lyric-hyphen');
smo265656v0ar.push(smo265634);
const smo265636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo265636.setAttribute('id', 'smo265636');
smo265656v0ar.push(smo265636);
const smo265637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo265637.setAttribute('id', 'smo265637');
const smo265638 = new VF.Annotation('ki');
smo265638.setAttribute('id', 'smo265638');
smo265638.setFont('times', 12, 'normal');
smo265638.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265637.addModifier(smo265638);
smo265638.addClass('lyric lyric-0');
smo265656v0ar.push(smo265637);
const smo265639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo265639.setAttribute('id', 'smo265639');
const smo265640 = new VF.Annotation('ri');
smo265640.setAttribute('id', 'smo265640');
smo265640.setFont('times', 12, 'normal');
smo265640.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265639.addModifier(smo265640);
smo265640.addClass('lyric lyric-0');
smo265656v0ar.push(smo265639);
smo265656v0.addTickables(smo265656v0ar)
fmtsmo26565665.joinVoices([smo265656v0]);
const fmtsmo26867565 = new VF.Formatter();
//
// voices and notes for stave 4 65
const smo268675v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo268675v0ar = [];
const smo268649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo268649.setAttribute('id', 'smo268649');
const smo2686490acc = new VF.Accidental('n');
smo268649.addModifier(smo2686490acc, 0);
smo268675v0ar.push(smo268649);
const smo268650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo268650.setAttribute('id', 'smo268650');
const smo268651 = new VF.Annotation('a');
smo268651.setAttribute('id', 'smo268651');
smo268651.setFont('times', 12, 'normal');
smo268651.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268650.addModifier(smo268651);
smo268651.addClass('lyric lyric-0');
smo268675v0ar.push(smo268650);
const smo268652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo268652.setAttribute('id', 'smo268652');
smo268675v0ar.push(smo268652);
const smo268653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo268653.setAttribute('id', 'smo268653');
const smo268654 = new VF.Annotation('Ki');
smo268654.setAttribute('id', 'smo268654');
smo268654.setFont('times', 12, 'normal');
smo268654.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268653.addModifier(smo268654);
smo268654.addClass('lyric lyric-0 lyric-hyphen');
smo268675v0ar.push(smo268653);
const smo268655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo268655.setAttribute('id', 'smo268655');
smo268675v0ar.push(smo268655);
const smo268656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo268656.setAttribute('id', 'smo268656');
const smo268657 = new VF.Annotation('ki');
smo268657.setAttribute('id', 'smo268657');
smo268657.setFont('times', 12, 'normal');
smo268657.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268656.addModifier(smo268657);
smo268657.addClass('lyric lyric-0');
smo268675v0ar.push(smo268656);
const smo268658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo268658.setAttribute('id', 'smo268658');
const smo268659 = new VF.Annotation('ri');
smo268659.setAttribute('id', 'smo268659');
smo268659.setFont('times', 12, 'normal');
smo268659.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268658.addModifier(smo268659);
smo268659.addClass('lyric lyric-0');
smo268675v0ar.push(smo268658);
smo268675v0.addTickables(smo268675v0ar)
fmtsmo26867565.joinVoices([smo268675v0]);
const fmtsmo27178265 = new VF.Formatter();
//
// voices and notes for stave 5 65
const smo271782v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo271782v0ar = [];
const smo271756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo271756.setAttribute('id', 'smo271756');
const smo2717560acc = new VF.Accidental('n');
smo271756.addModifier(smo2717560acc, 0);
smo271782v0ar.push(smo271756);
const smo271757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo271757.setAttribute('id', 'smo271757');
const smo271758 = new VF.Annotation('a');
smo271758.setAttribute('id', 'smo271758');
smo271758.setFont('times', 12, 'normal');
smo271758.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271757.addModifier(smo271758);
smo271758.addClass('lyric lyric-0');
smo271782v0ar.push(smo271757);
const smo271759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo271759.setAttribute('id', 'smo271759');
smo271782v0ar.push(smo271759);
const smo271760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo271760.setAttribute('id', 'smo271760');
const smo271761 = new VF.Annotation('Ki');
smo271761.setAttribute('id', 'smo271761');
smo271761.setFont('times', 12, 'normal');
smo271761.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271760.addModifier(smo271761);
smo271761.addClass('lyric lyric-0 lyric-hyphen');
smo271782v0ar.push(smo271760);
const smo271762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo271762.setAttribute('id', 'smo271762');
smo271782v0ar.push(smo271762);
const smo271763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo271763.setAttribute('id', 'smo271763');
const smo271764 = new VF.Annotation('ki');
smo271764.setAttribute('id', 'smo271764');
smo271764.setFont('times', 12, 'normal');
smo271764.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271763.addModifier(smo271764);
smo271764.addClass('lyric lyric-0');
smo271782v0ar.push(smo271763);
const smo271765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo271765.setAttribute('id', 'smo271765');
const smo271766 = new VF.Annotation('ri');
smo271766.setAttribute('id', 'smo271766');
smo271766.setFont('times', 12, 'normal');
smo271766.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271765.addModifier(smo271766);
smo271766.addClass('lyric lyric-0');
smo271782v0ar.push(smo271765);
smo271782v0.addTickables(smo271782v0ar)
fmtsmo27178265.joinVoices([smo271782v0]);
const fmtsmo27489465 = new VF.Formatter();
//
// voices and notes for stave 6 65
const smo274894v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo274894v0ar = [];
const smo274868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo274868.setAttribute('id', 'smo274868');
const smo2748680acc = new VF.Accidental('n');
smo274868.addModifier(smo2748680acc, 0);
smo274894v0ar.push(smo274868);
const smo274869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo274869.setAttribute('id', 'smo274869');
const smo274870 = new VF.Annotation('a');
smo274870.setAttribute('id', 'smo274870');
smo274870.setFont('times', 12, 'normal');
smo274870.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo274869.addModifier(smo274870);
smo274870.addClass('lyric lyric-0');
smo274894v0ar.push(smo274869);
const smo274871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo274871.setAttribute('id', 'smo274871');
smo274894v0ar.push(smo274871);
const smo274872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo274872.setAttribute('id', 'smo274872');
const smo274873 = new VF.Annotation('Ki');
smo274873.setAttribute('id', 'smo274873');
smo274873.setFont('times', 12, 'normal');
smo274873.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo274872.addModifier(smo274873);
smo274873.addClass('lyric lyric-0 lyric-hyphen');
smo274894v0ar.push(smo274872);
const smo274874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo274874.setAttribute('id', 'smo274874');
smo274894v0ar.push(smo274874);
const smo274875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo274875.setAttribute('id', 'smo274875');
const smo274876 = new VF.Annotation('ki');
smo274876.setAttribute('id', 'smo274876');
smo274876.setFont('times', 12, 'normal');
smo274876.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo274875.addModifier(smo274876);
smo274876.addClass('lyric lyric-0');
smo274894v0ar.push(smo274875);
const smo274877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo274877.setAttribute('id', 'smo274877');
const smo274878 = new VF.Annotation('ri');
smo274878.setAttribute('id', 'smo274878');
smo274878.setFont('times', 12, 'normal');
smo274878.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo274877.addModifier(smo274878);
smo274878.addClass('lyric lyric-0');
smo274894v0ar.push(smo274877);
smo274894v0.addTickables(smo274894v0ar)
fmtsmo27489465.joinVoices([smo274894v0]);
const fmtsmo27800365 = new VF.Formatter();
//
// voices and notes for stave 7 65
const smo278003v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278003v0ar = [];
const smo277977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo277977.setAttribute('id', 'smo277977');
const smo2779770acc = new VF.Accidental('n');
smo277977.addModifier(smo2779770acc, 0);
smo278003v0ar.push(smo277977);
const smo277978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo277978.setAttribute('id', 'smo277978');
const smo277979 = new VF.Annotation('a');
smo277979.setAttribute('id', 'smo277979');
smo277979.setFont('times', 12, 'normal');
smo277979.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo277978.addModifier(smo277979);
smo277979.addClass('lyric lyric-0');
smo278003v0ar.push(smo277978);
const smo277980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo277980.setAttribute('id', 'smo277980');
smo278003v0ar.push(smo277980);
const smo277981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo277981.setAttribute('id', 'smo277981');
const smo277982 = new VF.Annotation('Ki');
smo277982.setAttribute('id', 'smo277982');
smo277982.setFont('times', 12, 'normal');
smo277982.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo277981.addModifier(smo277982);
smo277982.addClass('lyric lyric-0 lyric-hyphen');
smo278003v0ar.push(smo277981);
const smo277983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo277983.setAttribute('id', 'smo277983');
smo278003v0ar.push(smo277983);
const smo277984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo277984.setAttribute('id', 'smo277984');
const smo277985 = new VF.Annotation('ki');
smo277985.setAttribute('id', 'smo277985');
smo277985.setFont('times', 12, 'normal');
smo277985.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo277984.addModifier(smo277985);
smo277985.addClass('lyric lyric-0');
smo278003v0ar.push(smo277984);
const smo277986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo277986.setAttribute('id', 'smo277986');
const smo277987 = new VF.Annotation('ri');
smo277987.setAttribute('id', 'smo277987');
smo277987.setFont('times', 12, 'normal');
smo277987.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo277986.addModifier(smo277987);
smo277987.addClass('lyric lyric-0');
smo278003v0ar.push(smo277986);
smo278003v0.addTickables(smo278003v0ar)
fmtsmo27800365.joinVoices([smo278003v0]);
const fmtsmo28108965 = new VF.Formatter();
//
// voices and notes for stave 8 65
const smo281089v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281089v0ar = [];
const smo281063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo281063.setAttribute('id', 'smo281063');
const smo2810630acc = new VF.Accidental('n');
smo281063.addModifier(smo2810630acc, 0);
smo281089v0ar.push(smo281063);
const smo281064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281064.setAttribute('id', 'smo281064');
const smo281065 = new VF.Annotation('a');
smo281065.setAttribute('id', 'smo281065');
smo281065.setFont('times', 12, 'normal');
smo281065.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281064.addModifier(smo281065);
smo281065.addClass('lyric lyric-0');
smo281089v0ar.push(smo281064);
const smo281066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281066.setAttribute('id', 'smo281066');
smo281089v0ar.push(smo281066);
const smo281067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281067.setAttribute('id', 'smo281067');
const smo281068 = new VF.Annotation('Ki');
smo281068.setAttribute('id', 'smo281068');
smo281068.setFont('times', 12, 'normal');
smo281068.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281067.addModifier(smo281068);
smo281068.addClass('lyric lyric-0 lyric-hyphen');
smo281089v0ar.push(smo281067);
const smo281069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281069.setAttribute('id', 'smo281069');
smo281089v0ar.push(smo281069);
const smo281070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281070.setAttribute('id', 'smo281070');
const smo281071 = new VF.Annotation('ki');
smo281071.setAttribute('id', 'smo281071');
smo281071.setFont('times', 12, 'normal');
smo281071.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281070.addModifier(smo281071);
smo281071.addClass('lyric lyric-0');
smo281089v0ar.push(smo281070);
const smo281072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281072.setAttribute('id', 'smo281072');
const smo281073 = new VF.Annotation('ri');
smo281073.setAttribute('id', 'smo281073');
smo281073.setFont('times', 12, 'normal');
smo281073.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281072.addModifier(smo281073);
smo281073.addClass('lyric lyric-0');
smo281089v0ar.push(smo281072);
smo281089v0.addTickables(smo281089v0ar)
fmtsmo28108965.joinVoices([smo281089v0]);
const fmtsmo28417865 = new VF.Formatter();
//
// voices and notes for stave 9 65
const smo284178v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284178v0ar = [];
const smo284152 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo284152.setAttribute('id', 'smo284152');
const smo2841520acc = new VF.Accidental('b');
smo284152.addModifier(smo2841520acc, 0);
smo284178v0ar.push(smo284152);
const smo284153 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo284153.setAttribute('id', 'smo284153');
const smo284154 = new VF.Annotation('a');
smo284154.setAttribute('id', 'smo284154');
smo284154.setFont('times', 12, 'normal');
smo284154.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284153.addModifier(smo284154);
smo284154.addClass('lyric lyric-0');
smo284178v0ar.push(smo284153);
const smo284155 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo284155.setAttribute('id', 'smo284155');
smo284178v0ar.push(smo284155);
const smo284156 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo284156.setAttribute('id', 'smo284156');
const smo284157 = new VF.Annotation('Ki');
smo284157.setAttribute('id', 'smo284157');
smo284157.setFont('times', 12, 'normal');
smo284157.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284156.addModifier(smo284157);
smo284157.addClass('lyric lyric-0 lyric-hyphen');
smo284178v0ar.push(smo284156);
const smo284158 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo284158.setAttribute('id', 'smo284158');
smo284178v0ar.push(smo284158);
const smo284159 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo284159.setAttribute('id', 'smo284159');
const smo284160 = new VF.Annotation('ki');
smo284160.setAttribute('id', 'smo284160');
smo284160.setFont('times', 12, 'normal');
smo284160.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284159.addModifier(smo284160);
smo284160.addClass('lyric lyric-0');
smo284178v0ar.push(smo284159);
const smo284161 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo284161.setAttribute('id', 'smo284161');
const smo284162 = new VF.Annotation('ri');
smo284162.setAttribute('id', 'smo284162');
smo284162.setFont('times', 12, 'normal');
smo284162.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284161.addModifier(smo284162);
smo284162.addClass('lyric lyric-0');
smo284178v0ar.push(smo284161);
smo284178v0.addTickables(smo284178v0ar)
fmtsmo28417865.joinVoices([smo284178v0]);
const fmtsmo28721865 = new VF.Formatter();
//
// voices and notes for stave 10 65
const smo287218v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287218v0ar = [];
const smo287192 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo287192.setAttribute('id', 'smo287192');
const smo2871920acc = new VF.Accidental('b');
smo287192.addModifier(smo2871920acc, 0);
smo287218v0ar.push(smo287192);
const smo287193 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287193.setAttribute('id', 'smo287193');
const smo287194 = new VF.Annotation('a');
smo287194.setAttribute('id', 'smo287194');
smo287194.setFont('times', 12, 'normal');
smo287194.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287193.addModifier(smo287194);
smo287194.addClass('lyric lyric-0');
smo287218v0ar.push(smo287193);
const smo287195 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287195.setAttribute('id', 'smo287195');
smo287218v0ar.push(smo287195);
const smo287196 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287196.setAttribute('id', 'smo287196');
const smo287197 = new VF.Annotation('Ki');
smo287197.setAttribute('id', 'smo287197');
smo287197.setFont('times', 12, 'normal');
smo287197.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287196.addModifier(smo287197);
smo287197.addClass('lyric lyric-0 lyric-hyphen');
smo287218v0ar.push(smo287196);
const smo287198 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287198.setAttribute('id', 'smo287198');
smo287218v0ar.push(smo287198);
const smo287199 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287199.setAttribute('id', 'smo287199');
const smo287200 = new VF.Annotation('ki');
smo287200.setAttribute('id', 'smo287200');
smo287200.setFont('times', 12, 'normal');
smo287200.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287199.addModifier(smo287200);
smo287200.addClass('lyric lyric-0');
smo287218v0ar.push(smo287199);
const smo287201 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287201.setAttribute('id', 'smo287201');
const smo287202 = new VF.Annotation('ri');
smo287202.setAttribute('id', 'smo287202');
smo287202.setFont('times', 12, 'normal');
smo287202.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287201.addModifier(smo287202);
smo287202.addClass('lyric lyric-0');
smo287218v0ar.push(smo287201);
smo287218v0.addTickables(smo287218v0ar)
fmtsmo28721865.joinVoices([smo287218v0]);
const fmtsmo29027265 = new VF.Formatter();
//
// voices and notes for stave 11 65
const smo290272v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290272v0ar = [];
const smo290246 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo290246.setAttribute('id', 'smo290246');
const smo2902460acc = new VF.Accidental('b');
smo290246.addModifier(smo2902460acc, 0);
smo290272v0ar.push(smo290246);
const smo290247 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290247.setAttribute('id', 'smo290247');
const smo290248 = new VF.Annotation('a');
smo290248.setAttribute('id', 'smo290248');
smo290248.setFont('times', 12, 'normal');
smo290248.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290247.addModifier(smo290248);
smo290248.addClass('lyric lyric-0');
smo290272v0ar.push(smo290247);
const smo290249 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290249.setAttribute('id', 'smo290249');
smo290272v0ar.push(smo290249);
const smo290250 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290250.setAttribute('id', 'smo290250');
const smo290251 = new VF.Annotation('Ki');
smo290251.setAttribute('id', 'smo290251');
smo290251.setFont('times', 12, 'normal');
smo290251.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290250.addModifier(smo290251);
smo290251.addClass('lyric lyric-0 lyric-hyphen');
smo290272v0ar.push(smo290250);
const smo290252 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290252.setAttribute('id', 'smo290252');
smo290272v0ar.push(smo290252);
const smo290253 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290253.setAttribute('id', 'smo290253');
const smo290254 = new VF.Annotation('ki');
smo290254.setAttribute('id', 'smo290254');
smo290254.setFont('times', 12, 'normal');
smo290254.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290253.addModifier(smo290254);
smo290254.addClass('lyric lyric-0');
smo290272v0ar.push(smo290253);
const smo290255 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290255.setAttribute('id', 'smo290255');
const smo290256 = new VF.Annotation('ri');
smo290256.setAttribute('id', 'smo290256');
smo290256.setFont('times', 12, 'normal');
smo290256.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290255.addModifier(smo290256);
smo290256.addClass('lyric lyric-0');
smo290272v0ar.push(smo290255);
smo290272v0.addTickables(smo290272v0ar)
fmtsmo29027265.joinVoices([smo290272v0]);
const fmtsmo29331565 = new VF.Formatter();
//
// voices and notes for stave 12 65
const smo293315v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293315v0ar = [];
const smo293289 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo293289.setAttribute('id', 'smo293289');
const smo2932890acc = new VF.Accidental('b');
smo293289.addModifier(smo2932890acc, 0);
smo293315v0ar.push(smo293289);
const smo293290 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293290.setAttribute('id', 'smo293290');
const smo293291 = new VF.Annotation('a');
smo293291.setAttribute('id', 'smo293291');
smo293291.setFont('times', 12, 'normal');
smo293291.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293290.addModifier(smo293291);
smo293291.addClass('lyric lyric-0');
smo293315v0ar.push(smo293290);
const smo293292 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293292.setAttribute('id', 'smo293292');
smo293315v0ar.push(smo293292);
const smo293293 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293293.setAttribute('id', 'smo293293');
const smo293294 = new VF.Annotation('Ki');
smo293294.setAttribute('id', 'smo293294');
smo293294.setFont('times', 12, 'normal');
smo293294.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293293.addModifier(smo293294);
smo293294.addClass('lyric lyric-0 lyric-hyphen');
smo293315v0ar.push(smo293293);
const smo293295 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293295.setAttribute('id', 'smo293295');
smo293315v0ar.push(smo293295);
const smo293296 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293296.setAttribute('id', 'smo293296');
const smo293297 = new VF.Annotation('ki');
smo293297.setAttribute('id', 'smo293297');
smo293297.setFont('times', 12, 'normal');
smo293297.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293296.addModifier(smo293297);
smo293297.addClass('lyric lyric-0');
smo293315v0ar.push(smo293296);
const smo293298 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293298.setAttribute('id', 'smo293298');
const smo293299 = new VF.Annotation('ri');
smo293299.setAttribute('id', 'smo293299');
smo293299.setFont('times', 12, 'normal');
smo293299.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293298.addModifier(smo293299);
smo293299.addClass('lyric lyric-0');
smo293315v0ar.push(smo293298);
smo293315v0.addTickables(smo293315v0ar)
fmtsmo29331565.joinVoices([smo293315v0]);
const fmtsmo29652165 = new VF.Formatter();
//
// voices and notes for stave 13 65
const smo296521v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296521v0ar = [];
const smo296501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n","cn/5/n","eb/5/n"]}'))
smo296501.setAttribute('id', 'smo296501');
const smo2965012acc = new VF.Accidental('b');
smo296501.addModifier(smo2965012acc, 2);
smo296501.addModifier(new VF.Dot(), 0);
smo296501.addModifier(new VF.Dot(), 1);
smo296501.addModifier(new VF.Dot(), 2);
smo296521v0ar.push(smo296501);
const smo296502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo296502.setAttribute('id', 'smo296502');
const smo2965020acc = new VF.Accidental('#');
smo296502.addModifier(smo2965020acc, 0);
smo296521v0ar.push(smo296502);
const smo296503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo296503.setAttribute('id', 'smo296503');
smo296521v0ar.push(smo296503);
const smo296504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo296504.setAttribute('id', 'smo296504');
smo296521v0ar.push(smo296504);
const smo296505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo296505.setAttribute('id', 'smo296505');
smo296521v0ar.push(smo296505);
smo296521v0.addTickables(smo296521v0ar)
fmtsmo29652165.joinVoices([smo296521v0]);
const fmtsmo29973465 = new VF.Formatter();
//
// voices and notes for stave 14 65
const smo299734v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo299734v0ar = [];
const smo299714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n","cn/5/n","eb/5/n"]}'))
smo299714.setAttribute('id', 'smo299714');
const smo2997142acc = new VF.Accidental('b');
smo299714.addModifier(smo2997142acc, 2);
smo299714.addModifier(new VF.Dot(), 0);
smo299714.addModifier(new VF.Dot(), 1);
smo299714.addModifier(new VF.Dot(), 2);
smo299734v0ar.push(smo299714);
const smo299715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo299715.setAttribute('id', 'smo299715');
const smo2997150acc = new VF.Accidental('#');
smo299715.addModifier(smo2997150acc, 0);
smo299734v0ar.push(smo299715);
const smo299716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo299716.setAttribute('id', 'smo299716');
smo299734v0ar.push(smo299716);
const smo299717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo299717.setAttribute('id', 'smo299717');
smo299734v0ar.push(smo299717);
const smo299718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo299718.setAttribute('id', 'smo299718');
smo299734v0ar.push(smo299718);
smo299734v0.addTickables(smo299734v0ar)
fmtsmo29973465.joinVoices([smo299734v0]);
const fmtsmo30292965 = new VF.Formatter();
//
// voices and notes for stave 15 65
const smo302929v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo302929v0ar = [];
const smo302909 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo302909.setAttribute('id', 'smo302909');
smo302909.addModifier(new VF.Dot(), 0);
smo302929v0ar.push(smo302909);
const smo302910 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo302910.setAttribute('id', 'smo302910');
const smo3029100acc = new VF.Accidental('#');
smo302910.addModifier(smo3029100acc, 0);
smo302929v0ar.push(smo302910);
const smo302911 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo302911.setAttribute('id', 'smo302911');
smo302929v0ar.push(smo302911);
const smo302912 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo302912.setAttribute('id', 'smo302912');
smo302929v0ar.push(smo302912);
const smo302913 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo302913.setAttribute('id', 'smo302913');
smo302929v0ar.push(smo302913);
smo302929v0.addTickables(smo302929v0ar)
fmtsmo30292965.joinVoices([smo302929v0]);
const fmtsmo30604665 = new VF.Formatter();
//
// voices and notes for stave 16 65
const smo306046v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306046v0ar = [];
const smo306027 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo306027.setAttribute('id', 'smo306027');
smo306027.addModifier(new VF.Dot(), 0);
smo306046v0ar.push(smo306027);
const smo306028 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo306028.setAttribute('id', 'smo306028');
smo306046v0ar.push(smo306028);
const smo306029 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo306029.setAttribute('id', 'smo306029');
smo306046v0ar.push(smo306029);
const smo306030 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo306030.setAttribute('id', 'smo306030');
smo306046v0ar.push(smo306030);
smo306046v0.addTickables(smo306046v0ar)
fmtsmo30604665.joinVoices([smo306046v0]);
const fmtsmo30923565 = new VF.Formatter();
//
// voices and notes for stave 17 65
const smo309235v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309235v0ar = [];
const smo309216 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo309216.setAttribute('id', 'smo309216');
const smo3092160acc = new VF.Accidental('n');
smo309216.addModifier(smo3092160acc, 0);
smo309216.addModifier(new VF.Dot(), 0);
smo309235v0ar.push(smo309216);
const smo309217 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo309217.setAttribute('id', 'smo309217');
smo309235v0ar.push(smo309217);
const smo309218 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo309218.setAttribute('id', 'smo309218');
smo309235v0ar.push(smo309218);
const smo309219 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo309219.setAttribute('id', 'smo309219');
smo309235v0ar.push(smo309219);
smo309235v0.addTickables(smo309235v0ar)
fmtsmo30923565.joinVoices([smo309235v0]);
// create beam groups and tuplets for format grp smo310988 before formatting
const dirsmo402364 = smo256377.getStemDirection();
smo256377.setStemDirection(dirsmo402364);
smo256378.setStemDirection(dirsmo402364);
const smo402364 = new VF.Beam([smo256377,smo256378]);
const dirsmo402365 = smo256381.getStemDirection();
smo256381.setStemDirection(dirsmo402365);
smo256383.setStemDirection(dirsmo402365);
const smo402365 = new VF.Beam([smo256381,smo256383]);
const dirsmo402368 = smo259371.getStemDirection();
smo259371.setStemDirection(dirsmo402368);
smo259372.setStemDirection(dirsmo402368);
const smo402368 = new VF.Beam([smo259371,smo259372]);
const dirsmo402369 = smo259375.getStemDirection();
smo259375.setStemDirection(dirsmo402369);
smo259377.setStemDirection(dirsmo402369);
const smo402369 = new VF.Beam([smo259375,smo259377]);
const dirsmo402372 = smo262514.getStemDirection();
smo262514.setStemDirection(dirsmo402372);
smo262515.setStemDirection(dirsmo402372);
const smo402372 = new VF.Beam([smo262514,smo262515]);
const dirsmo402373 = smo262518.getStemDirection();
smo262518.setStemDirection(dirsmo402373);
smo262520.setStemDirection(dirsmo402373);
const smo402373 = new VF.Beam([smo262518,smo262520]);
const dirsmo402376 = smo265630.getStemDirection();
smo265630.setStemDirection(dirsmo402376);
smo265631.setStemDirection(dirsmo402376);
const smo402376 = new VF.Beam([smo265630,smo265631]);
const dirsmo402377 = smo265634.getStemDirection();
smo265634.setStemDirection(dirsmo402377);
smo265636.setStemDirection(dirsmo402377);
const smo402377 = new VF.Beam([smo265634,smo265636]);
const dirsmo402380 = smo268649.getStemDirection();
smo268649.setStemDirection(dirsmo402380);
smo268650.setStemDirection(dirsmo402380);
const smo402380 = new VF.Beam([smo268649,smo268650]);
const dirsmo402381 = smo268653.getStemDirection();
smo268653.setStemDirection(dirsmo402381);
smo268655.setStemDirection(dirsmo402381);
const smo402381 = new VF.Beam([smo268653,smo268655]);
 
// formatting measures in staff group smo310988
fmtsmo25640365.format([smo256403v0,smo259397v0,smo262540v0,smo265656v0,smo268675v0], 288);
const stavesmo256403 = new VF.Stave(808, 210, 302);
stavesmo256403.setAttribute('id', 'stavesmo256403');
stavesmo256403.setBegBarType(VF.Barline.type.NONE);
stavesmo256403.setContext(context);
stavesmo256403.draw();
smo256403v0.draw(context, stavesmo256403);
smo402364.setContext(context);
smo402364.draw();
smo402365.setContext(context);
smo402365.draw();
const stavesmo259397 = new VF.Stave(808, 316, 302);
stavesmo259397.setAttribute('id', 'stavesmo259397');
stavesmo259397.setBegBarType(VF.Barline.type.NONE);
stavesmo259397.setContext(context);
stavesmo259397.draw();
smo259397v0.draw(context, stavesmo259397);
smo402368.setContext(context);
smo402368.draw();
smo402369.setContext(context);
smo402369.draw();
const stavesmo262540 = new VF.Stave(808, 437, 302);
stavesmo262540.setAttribute('id', 'stavesmo262540');
stavesmo262540.setBegBarType(VF.Barline.type.NONE);
stavesmo262540.setContext(context);
stavesmo262540.draw();
smo262540v0.draw(context, stavesmo262540);
smo402372.setContext(context);
smo402372.draw();
smo402373.setContext(context);
smo402373.draw();
const stavesmo265656 = new VF.Stave(808, 553, 302);
stavesmo265656.setAttribute('id', 'stavesmo265656');
stavesmo265656.setBegBarType(VF.Barline.type.NONE);
stavesmo265656.setContext(context);
stavesmo265656.draw();
smo265656v0.draw(context, stavesmo265656);
smo402376.setContext(context);
smo402376.draw();
smo402377.setContext(context);
smo402377.draw();
const stavesmo268675 = new VF.Stave(808, 659, 302);
stavesmo268675.setAttribute('id', 'stavesmo268675');
stavesmo268675.setBegBarType(VF.Barline.type.NONE);
stavesmo268675.setContext(context);
stavesmo268675.draw();
smo268675v0.draw(context, stavesmo268675);
smo402380.setContext(context);
smo402380.draw();
smo402381.setContext(context);
smo402381.draw();
// create beam groups and tuplets for format grp smo310990 before formatting
const dirsmo402384 = smo271756.getStemDirection();
smo271756.setStemDirection(dirsmo402384);
smo271757.setStemDirection(dirsmo402384);
const smo402384 = new VF.Beam([smo271756,smo271757]);
const dirsmo402385 = smo271760.getStemDirection();
smo271760.setStemDirection(dirsmo402385);
smo271762.setStemDirection(dirsmo402385);
const smo402385 = new VF.Beam([smo271760,smo271762]);
const dirsmo402388 = smo274868.getStemDirection();
smo274868.setStemDirection(dirsmo402388);
smo274869.setStemDirection(dirsmo402388);
const smo402388 = new VF.Beam([smo274868,smo274869]);
const dirsmo402389 = smo274872.getStemDirection();
smo274872.setStemDirection(dirsmo402389);
smo274874.setStemDirection(dirsmo402389);
const smo402389 = new VF.Beam([smo274872,smo274874]);
const dirsmo402392 = smo277977.getStemDirection();
smo277977.setStemDirection(dirsmo402392);
smo277978.setStemDirection(dirsmo402392);
const smo402392 = new VF.Beam([smo277977,smo277978]);
const dirsmo402393 = smo277981.getStemDirection();
smo277981.setStemDirection(dirsmo402393);
smo277983.setStemDirection(dirsmo402393);
const smo402393 = new VF.Beam([smo277981,smo277983]);
const dirsmo402396 = smo281063.getStemDirection();
smo281063.setStemDirection(dirsmo402396);
smo281064.setStemDirection(dirsmo402396);
const smo402396 = new VF.Beam([smo281063,smo281064]);
const dirsmo402397 = smo281067.getStemDirection();
smo281067.setStemDirection(dirsmo402397);
smo281069.setStemDirection(dirsmo402397);
const smo402397 = new VF.Beam([smo281067,smo281069]);
 
// formatting measures in staff group smo310990
fmtsmo27178265.format([smo271782v0,smo274894v0,smo278003v0,smo281089v0], 288);
const stavesmo271782 = new VF.Stave(808, 780, 302);
stavesmo271782.setAttribute('id', 'stavesmo271782');
stavesmo271782.setBegBarType(VF.Barline.type.NONE);
stavesmo271782.setContext(context);
stavesmo271782.draw();
smo271782v0.draw(context, stavesmo271782);
smo402384.setContext(context);
smo402384.draw();
smo402385.setContext(context);
smo402385.draw();
const stavesmo274894 = new VF.Stave(808, 896, 302);
stavesmo274894.setAttribute('id', 'stavesmo274894');
stavesmo274894.setBegBarType(VF.Barline.type.NONE);
stavesmo274894.setContext(context);
stavesmo274894.draw();
smo274894v0.draw(context, stavesmo274894);
smo402388.setContext(context);
smo402388.draw();
smo402389.setContext(context);
smo402389.draw();
const stavesmo278003 = new VF.Stave(808, 1012, 302);
stavesmo278003.setAttribute('id', 'stavesmo278003');
stavesmo278003.setBegBarType(VF.Barline.type.NONE);
stavesmo278003.setContext(context);
stavesmo278003.draw();
smo278003v0.draw(context, stavesmo278003);
smo402392.setContext(context);
smo402392.draw();
smo402393.setContext(context);
smo402393.draw();
const stavesmo281089 = new VF.Stave(808, 1128, 302);
stavesmo281089.setAttribute('id', 'stavesmo281089');
stavesmo281089.setBegBarType(VF.Barline.type.NONE);
stavesmo281089.setContext(context);
stavesmo281089.draw();
smo281089v0.draw(context, stavesmo281089);
smo402396.setContext(context);
smo402396.draw();
smo402397.setContext(context);
smo402397.draw();
// create beam groups and tuplets for format grp smo310992 before formatting
const dirsmo402400 = smo284152.getStemDirection();
smo284152.setStemDirection(dirsmo402400);
smo284153.setStemDirection(dirsmo402400);
const smo402400 = new VF.Beam([smo284152,smo284153]);
const dirsmo402401 = smo284156.getStemDirection();
smo284156.setStemDirection(dirsmo402401);
smo284158.setStemDirection(dirsmo402401);
const smo402401 = new VF.Beam([smo284156,smo284158]);
const dirsmo402404 = smo287192.getStemDirection();
smo287192.setStemDirection(dirsmo402404);
smo287193.setStemDirection(dirsmo402404);
const smo402404 = new VF.Beam([smo287192,smo287193]);
const dirsmo402405 = smo287196.getStemDirection();
smo287196.setStemDirection(dirsmo402405);
smo287198.setStemDirection(dirsmo402405);
const smo402405 = new VF.Beam([smo287196,smo287198]);
const dirsmo402408 = smo290246.getStemDirection();
smo290246.setStemDirection(dirsmo402408);
smo290247.setStemDirection(dirsmo402408);
const smo402408 = new VF.Beam([smo290246,smo290247]);
const dirsmo402409 = smo290250.getStemDirection();
smo290250.setStemDirection(dirsmo402409);
smo290252.setStemDirection(dirsmo402409);
const smo402409 = new VF.Beam([smo290250,smo290252]);
const dirsmo402412 = smo293289.getStemDirection();
smo293289.setStemDirection(dirsmo402412);
smo293290.setStemDirection(dirsmo402412);
const smo402412 = new VF.Beam([smo293289,smo293290]);
const dirsmo402413 = smo293293.getStemDirection();
smo293293.setStemDirection(dirsmo402413);
smo293295.setStemDirection(dirsmo402413);
const smo402413 = new VF.Beam([smo293293,smo293295]);
 
// formatting measures in staff group smo310992
fmtsmo28417865.format([smo284178v0,smo287218v0,smo290272v0,smo293315v0], 288);
const stavesmo284178 = new VF.Stave(808, 1264, 302);
stavesmo284178.setAttribute('id', 'stavesmo284178');
stavesmo284178.setBegBarType(VF.Barline.type.NONE);
stavesmo284178.setContext(context);
stavesmo284178.draw();
smo284178v0.draw(context, stavesmo284178);
smo402400.setContext(context);
smo402400.draw();
smo402401.setContext(context);
smo402401.draw();
const stavesmo287218 = new VF.Stave(808, 1400, 302);
stavesmo287218.setAttribute('id', 'stavesmo287218');
stavesmo287218.setBegBarType(VF.Barline.type.NONE);
stavesmo287218.setContext(context);
stavesmo287218.draw();
smo287218v0.draw(context, stavesmo287218);
smo402404.setContext(context);
smo402404.draw();
smo402405.setContext(context);
smo402405.draw();
const stavesmo290272 = new VF.Stave(808, 1536, 302);
stavesmo290272.setAttribute('id', 'stavesmo290272');
stavesmo290272.setBegBarType(VF.Barline.type.NONE);
stavesmo290272.setContext(context);
stavesmo290272.draw();
smo290272v0.draw(context, stavesmo290272);
smo402408.setContext(context);
smo402408.draw();
smo402409.setContext(context);
smo402409.draw();
const stavesmo293315 = new VF.Stave(808, 1672, 302);
stavesmo293315.setAttribute('id', 'stavesmo293315');
stavesmo293315.setBegBarType(VF.Barline.type.NONE);
stavesmo293315.setContext(context);
stavesmo293315.draw();
smo293315v0.draw(context, stavesmo293315);
smo402412.setContext(context);
smo402412.draw();
smo402413.setContext(context);
smo402413.draw();
// create beam groups and tuplets for format grp smo298311 before formatting
const dirsmo402416 = smo296502.getStemDirection();
smo296502.setStemDirection(dirsmo402416);
smo296503.setStemDirection(dirsmo402416);
const smo402416 = new VF.Beam([smo296502,smo296503]);
 
// formatting measures in staff group smo298311
fmtsmo29652165.format([smo296521v0], 288);
const stavesmo296521 = new VF.Stave(808, 1818, 302);
stavesmo296521.setAttribute('id', 'stavesmo296521');
stavesmo296521.setBegBarType(VF.Barline.type.NONE);
stavesmo296521.setContext(context);
stavesmo296521.draw();
smo296521v0.draw(context, stavesmo296521);
smo402416.setContext(context);
smo402416.draw();
// create beam groups and tuplets for format grp smo310986 before formatting
const dirsmo402419 = smo299715.getStemDirection();
smo299715.setStemDirection(dirsmo402419);
smo299716.setStemDirection(dirsmo402419);
const smo402419 = new VF.Beam([smo299715,smo299716]);
const dirsmo402422 = smo302910.getStemDirection();
smo302910.setStemDirection(dirsmo402422);
smo302911.setStemDirection(dirsmo402422);
const smo402422 = new VF.Beam([smo302910,smo302911]);
 
// formatting measures in staff group smo310986
fmtsmo29973465.format([smo299734v0,smo302929v0], 288);
const stavesmo299734 = new VF.Stave(808, 1924, 302);
stavesmo299734.setAttribute('id', 'stavesmo299734');
stavesmo299734.setBegBarType(VF.Barline.type.NONE);
stavesmo299734.setContext(context);
stavesmo299734.draw();
smo299734v0.draw(context, stavesmo299734);
smo402419.setContext(context);
smo402419.draw();
const stavesmo302929 = new VF.Stave(808, 2010, 302);
stavesmo302929.setAttribute('id', 'stavesmo302929');
stavesmo302929.setBegBarType(VF.Barline.type.NONE);
stavesmo302929.setContext(context);
stavesmo302929.draw();
smo302929v0.draw(context, stavesmo302929);
smo402422.setContext(context);
smo402422.draw();
// create beam groups and tuplets for format grp smo307824 before formatting
 
// formatting measures in staff group smo307824
fmtsmo30604665.format([smo306046v0], 288);
const stavesmo306046 = new VF.Stave(808, 2081, 302);
stavesmo306046.setAttribute('id', 'stavesmo306046');
stavesmo306046.setBegBarType(VF.Barline.type.NONE);
stavesmo306046.setContext(context);
stavesmo306046.draw();
smo306046v0.draw(context, stavesmo306046);
// create beam groups and tuplets for format grp smo310980 before formatting
 
// formatting measures in staff group smo310980
fmtsmo30923565.format([smo309235v0], 288);
const stavesmo309235 = new VF.Stave(808, 2152, 302);
stavesmo309235.setAttribute('id', 'stavesmo309235');
stavesmo309235.setBegBarType(VF.Barline.type.NONE);
stavesmo309235.setContext(context);
stavesmo309235.draw();
smo309235v0.draw(context, stavesmo309235);
const fmtsmo25643266 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo256432v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo256432v0ar = [];
const smo256404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo256404.setAttribute('id', 'smo256404');
const smo256405 = new VF.Annotation('bun');
smo256405.setAttribute('id', 'smo256405');
smo256405.setFont('times', 12, 'normal');
smo256405.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256404.addModifier(smo256405);
smo256405.addClass('lyric lyric-0');
smo256432v0ar.push(smo256404);
const smo256406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo256406.setAttribute('id', 'smo256406');
const smo256407 = new VF.Annotation('yi');
smo256407.setAttribute('id', 'smo256407');
smo256407.setFont('times', 12, 'normal');
smo256407.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256406.addModifier(smo256407);
smo256407.addClass('lyric lyric-0 lyric-hyphen');
smo256432v0ar.push(smo256406);
const smo256408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo256408.setAttribute('id', 'smo256408');
const smo256409 = new VF.Annotation('ri');
smo256409.setAttribute('id', 'smo256409');
smo256409.setFont('times', 12, 'normal');
smo256409.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256408.addModifier(smo256409);
smo256409.addClass('lyric lyric-0');
smo256432v0ar.push(smo256408);
const smo256410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo256410.setAttribute('id', 'smo256410');
const smo256411 = new VF.Annotation('bun');
smo256411.setAttribute('id', 'smo256411');
smo256411.setFont('times', 12, 'normal');
smo256411.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256410.addModifier(smo256411);
smo256411.addClass('lyric lyric-0');
smo256432v0ar.push(smo256410);
const smo256412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo256412.setAttribute('id', 'smo256412');
const smo256413 = new VF.Annotation('Man');
smo256413.setAttribute('id', 'smo256413');
smo256413.setFont('times', 12, 'normal');
smo256413.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256412.addModifier(smo256413);
smo256413.addClass('lyric lyric-0 lyric-hyphen');
smo256432v0ar.push(smo256412);
const smo256414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo256414.setAttribute('id', 'smo256414');
smo256432v0ar.push(smo256414);
const smo256415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo256415.setAttribute('id', 'smo256415');
const smo256416 = new VF.Annotation('ding');
smo256416.setAttribute('id', 'smo256416');
smo256416.setFont('times', 12, 'normal');
smo256416.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256415.addModifier(smo256416);
smo256416.addClass('lyric lyric-0 lyric-hyphen');
smo256432v0ar.push(smo256415);
smo256432v0.addTickables(smo256432v0ar)
fmtsmo25643266.joinVoices([smo256432v0]);
const fmtsmo25942666 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo259426v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259426v0ar = [];
const smo259398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259398.setAttribute('id', 'smo259398');
const smo259399 = new VF.Annotation('bun');
smo259399.setAttribute('id', 'smo259399');
smo259399.setFont('times', 12, 'normal');
smo259399.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259398.addModifier(smo259399);
smo259399.addClass('lyric lyric-0');
smo259426v0ar.push(smo259398);
const smo259400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259400.setAttribute('id', 'smo259400');
const smo259401 = new VF.Annotation('yi');
smo259401.setAttribute('id', 'smo259401');
smo259401.setFont('times', 12, 'normal');
smo259401.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259400.addModifier(smo259401);
smo259401.addClass('lyric lyric-0 lyric-hyphen');
smo259426v0ar.push(smo259400);
const smo259402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259402.setAttribute('id', 'smo259402');
const smo259403 = new VF.Annotation('ri');
smo259403.setAttribute('id', 'smo259403');
smo259403.setFont('times', 12, 'normal');
smo259403.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259402.addModifier(smo259403);
smo259403.addClass('lyric lyric-0');
smo259426v0ar.push(smo259402);
const smo259404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo259404.setAttribute('id', 'smo259404');
const smo259405 = new VF.Annotation('bun');
smo259405.setAttribute('id', 'smo259405');
smo259405.setFont('times', 12, 'normal');
smo259405.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259404.addModifier(smo259405);
smo259405.addClass('lyric lyric-0');
smo259426v0ar.push(smo259404);
const smo259406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo259406.setAttribute('id', 'smo259406');
const smo259407 = new VF.Annotation('Man');
smo259407.setAttribute('id', 'smo259407');
smo259407.setFont('times', 12, 'normal');
smo259407.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259406.addModifier(smo259407);
smo259407.addClass('lyric lyric-0 lyric-hyphen');
smo259426v0ar.push(smo259406);
const smo259408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo259408.setAttribute('id', 'smo259408');
smo259426v0ar.push(smo259408);
const smo259409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo259409.setAttribute('id', 'smo259409');
const smo259410 = new VF.Annotation('ding');
smo259410.setAttribute('id', 'smo259410');
smo259410.setFont('times', 12, 'normal');
smo259410.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259409.addModifier(smo259410);
smo259410.addClass('lyric lyric-0 lyric-hyphen');
smo259426v0ar.push(smo259409);
smo259426v0.addTickables(smo259426v0ar)
fmtsmo25942666.joinVoices([smo259426v0]);
const fmtsmo26256966 = new VF.Formatter();
//
// voices and notes for stave 2 66
const smo262569v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo262569v0ar = [];
const smo262541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo262541.setAttribute('id', 'smo262541');
const smo262542 = new VF.Annotation('bun');
smo262542.setAttribute('id', 'smo262542');
smo262542.setFont('times', 12, 'normal');
smo262542.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262541.addModifier(smo262542);
smo262542.addClass('lyric lyric-0');
smo262569v0ar.push(smo262541);
const smo262543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo262543.setAttribute('id', 'smo262543');
const smo262544 = new VF.Annotation('yi');
smo262544.setAttribute('id', 'smo262544');
smo262544.setFont('times', 12, 'normal');
smo262544.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262543.addModifier(smo262544);
smo262544.addClass('lyric lyric-0 lyric-hyphen');
smo262569v0ar.push(smo262543);
const smo262545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo262545.setAttribute('id', 'smo262545');
const smo262546 = new VF.Annotation('ri');
smo262546.setAttribute('id', 'smo262546');
smo262546.setFont('times', 12, 'normal');
smo262546.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262545.addModifier(smo262546);
smo262546.addClass('lyric lyric-0');
smo262569v0ar.push(smo262545);
const smo262547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo262547.setAttribute('id', 'smo262547');
const smo262548 = new VF.Annotation('bun');
smo262548.setAttribute('id', 'smo262548');
smo262548.setFont('times', 12, 'normal');
smo262548.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262547.addModifier(smo262548);
smo262548.addClass('lyric lyric-0');
smo262569v0ar.push(smo262547);
const smo262549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo262549.setAttribute('id', 'smo262549');
const smo262550 = new VF.Annotation('Man');
smo262550.setAttribute('id', 'smo262550');
smo262550.setFont('times', 12, 'normal');
smo262550.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262549.addModifier(smo262550);
smo262550.addClass('lyric lyric-0 lyric-hyphen');
smo262569v0ar.push(smo262549);
const smo262551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo262551.setAttribute('id', 'smo262551');
smo262569v0ar.push(smo262551);
const smo262552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo262552.setAttribute('id', 'smo262552');
const smo262553 = new VF.Annotation('ding');
smo262553.setAttribute('id', 'smo262553');
smo262553.setFont('times', 12, 'normal');
smo262553.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262552.addModifier(smo262553);
smo262553.addClass('lyric lyric-0 lyric-hyphen');
smo262569v0ar.push(smo262552);
smo262569v0.addTickables(smo262569v0ar)
fmtsmo26256966.joinVoices([smo262569v0]);
const fmtsmo26568566 = new VF.Formatter();
//
// voices and notes for stave 3 66
const smo265685v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo265685v0ar = [];
const smo265657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo265657.setAttribute('id', 'smo265657');
const smo265658 = new VF.Annotation('bun');
smo265658.setAttribute('id', 'smo265658');
smo265658.setFont('times', 12, 'normal');
smo265658.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265657.addModifier(smo265658);
smo265658.addClass('lyric lyric-0');
smo265685v0ar.push(smo265657);
const smo265659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo265659.setAttribute('id', 'smo265659');
const smo265660 = new VF.Annotation('yi');
smo265660.setAttribute('id', 'smo265660');
smo265660.setFont('times', 12, 'normal');
smo265660.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265659.addModifier(smo265660);
smo265660.addClass('lyric lyric-0 lyric-hyphen');
smo265685v0ar.push(smo265659);
const smo265661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo265661.setAttribute('id', 'smo265661');
const smo265662 = new VF.Annotation('ri');
smo265662.setAttribute('id', 'smo265662');
smo265662.setFont('times', 12, 'normal');
smo265662.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265661.addModifier(smo265662);
smo265662.addClass('lyric lyric-0');
smo265685v0ar.push(smo265661);
const smo265663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo265663.setAttribute('id', 'smo265663');
const smo265664 = new VF.Annotation('bun');
smo265664.setAttribute('id', 'smo265664');
smo265664.setFont('times', 12, 'normal');
smo265664.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265663.addModifier(smo265664);
smo265664.addClass('lyric lyric-0');
smo265685v0ar.push(smo265663);
const smo265665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo265665.setAttribute('id', 'smo265665');
const smo265666 = new VF.Annotation('Man');
smo265666.setAttribute('id', 'smo265666');
smo265666.setFont('times', 12, 'normal');
smo265666.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265665.addModifier(smo265666);
smo265666.addClass('lyric lyric-0 lyric-hyphen');
smo265685v0ar.push(smo265665);
const smo265667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo265667.setAttribute('id', 'smo265667');
smo265685v0ar.push(smo265667);
const smo265668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo265668.setAttribute('id', 'smo265668');
const smo265669 = new VF.Annotation('ding');
smo265669.setAttribute('id', 'smo265669');
smo265669.setFont('times', 12, 'normal');
smo265669.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265668.addModifier(smo265669);
smo265669.addClass('lyric lyric-0 lyric-hyphen');
smo265685v0ar.push(smo265668);
smo265685v0.addTickables(smo265685v0ar)
fmtsmo26568566.joinVoices([smo265685v0]);
const fmtsmo26870466 = new VF.Formatter();
//
// voices and notes for stave 4 66
const smo268704v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo268704v0ar = [];
const smo268676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo268676.setAttribute('id', 'smo268676');
const smo268677 = new VF.Annotation('bun');
smo268677.setAttribute('id', 'smo268677');
smo268677.setFont('times', 12, 'normal');
smo268677.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268676.addModifier(smo268677);
smo268677.addClass('lyric lyric-0');
smo268704v0ar.push(smo268676);
const smo268678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo268678.setAttribute('id', 'smo268678');
const smo268679 = new VF.Annotation('yi');
smo268679.setAttribute('id', 'smo268679');
smo268679.setFont('times', 12, 'normal');
smo268679.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268678.addModifier(smo268679);
smo268679.addClass('lyric lyric-0 lyric-hyphen');
smo268704v0ar.push(smo268678);
const smo268680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo268680.setAttribute('id', 'smo268680');
const smo268681 = new VF.Annotation('ri');
smo268681.setAttribute('id', 'smo268681');
smo268681.setFont('times', 12, 'normal');
smo268681.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268680.addModifier(smo268681);
smo268681.addClass('lyric lyric-0');
smo268704v0ar.push(smo268680);
const smo268682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo268682.setAttribute('id', 'smo268682');
const smo268683 = new VF.Annotation('bun');
smo268683.setAttribute('id', 'smo268683');
smo268683.setFont('times', 12, 'normal');
smo268683.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268682.addModifier(smo268683);
smo268683.addClass('lyric lyric-0');
smo268704v0ar.push(smo268682);
const smo268684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo268684.setAttribute('id', 'smo268684');
const smo268685 = new VF.Annotation('Man');
smo268685.setAttribute('id', 'smo268685');
smo268685.setFont('times', 12, 'normal');
smo268685.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268684.addModifier(smo268685);
smo268685.addClass('lyric lyric-0 lyric-hyphen');
smo268704v0ar.push(smo268684);
const smo268686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo268686.setAttribute('id', 'smo268686');
smo268704v0ar.push(smo268686);
const smo268687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo268687.setAttribute('id', 'smo268687');
const smo268688 = new VF.Annotation('ding');
smo268688.setAttribute('id', 'smo268688');
smo268688.setFont('times', 12, 'normal');
smo268688.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268687.addModifier(smo268688);
smo268688.addClass('lyric lyric-0 lyric-hyphen');
smo268704v0ar.push(smo268687);
smo268704v0.addTickables(smo268704v0ar)
fmtsmo26870466.joinVoices([smo268704v0]);
const fmtsmo27181166 = new VF.Formatter();
//
// voices and notes for stave 5 66
const smo271811v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo271811v0ar = [];
const smo271783 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo271783.setAttribute('id', 'smo271783');
const smo271784 = new VF.Annotation('bun');
smo271784.setAttribute('id', 'smo271784');
smo271784.setFont('times', 12, 'normal');
smo271784.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271783.addModifier(smo271784);
smo271784.addClass('lyric lyric-0');
smo271811v0ar.push(smo271783);
const smo271785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo271785.setAttribute('id', 'smo271785');
const smo271786 = new VF.Annotation('yi');
smo271786.setAttribute('id', 'smo271786');
smo271786.setFont('times', 12, 'normal');
smo271786.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271785.addModifier(smo271786);
smo271786.addClass('lyric lyric-0 lyric-hyphen');
smo271811v0ar.push(smo271785);
const smo271787 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo271787.setAttribute('id', 'smo271787');
const smo271788 = new VF.Annotation('ri');
smo271788.setAttribute('id', 'smo271788');
smo271788.setFont('times', 12, 'normal');
smo271788.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271787.addModifier(smo271788);
smo271788.addClass('lyric lyric-0');
smo271811v0ar.push(smo271787);
const smo271789 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo271789.setAttribute('id', 'smo271789');
const smo271790 = new VF.Annotation('bun');
smo271790.setAttribute('id', 'smo271790');
smo271790.setFont('times', 12, 'normal');
smo271790.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271789.addModifier(smo271790);
smo271790.addClass('lyric lyric-0');
smo271811v0ar.push(smo271789);
const smo271791 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo271791.setAttribute('id', 'smo271791');
const smo271792 = new VF.Annotation('Man');
smo271792.setAttribute('id', 'smo271792');
smo271792.setFont('times', 12, 'normal');
smo271792.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271791.addModifier(smo271792);
smo271792.addClass('lyric lyric-0 lyric-hyphen');
smo271811v0ar.push(smo271791);
const smo271793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo271793.setAttribute('id', 'smo271793');
smo271811v0ar.push(smo271793);
const smo271794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo271794.setAttribute('id', 'smo271794');
const smo271795 = new VF.Annotation('ding');
smo271795.setAttribute('id', 'smo271795');
smo271795.setFont('times', 12, 'normal');
smo271795.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271794.addModifier(smo271795);
smo271795.addClass('lyric lyric-0 lyric-hyphen');
smo271811v0ar.push(smo271794);
smo271811v0.addTickables(smo271811v0ar)
fmtsmo27181166.joinVoices([smo271811v0]);
const fmtsmo27492366 = new VF.Formatter();
//
// voices and notes for stave 6 66
const smo274923v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo274923v0ar = [];
const smo274895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo274895.setAttribute('id', 'smo274895');
const smo274896 = new VF.Annotation('bun');
smo274896.setAttribute('id', 'smo274896');
smo274896.setFont('times', 12, 'normal');
smo274896.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo274895.addModifier(smo274896);
smo274896.addClass('lyric lyric-0');
smo274923v0ar.push(smo274895);
const smo274897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo274897.setAttribute('id', 'smo274897');
const smo274898 = new VF.Annotation('yi');
smo274898.setAttribute('id', 'smo274898');
smo274898.setFont('times', 12, 'normal');
smo274898.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo274897.addModifier(smo274898);
smo274898.addClass('lyric lyric-0 lyric-hyphen');
smo274923v0ar.push(smo274897);
const smo274899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo274899.setAttribute('id', 'smo274899');
const smo274900 = new VF.Annotation('ri');
smo274900.setAttribute('id', 'smo274900');
smo274900.setFont('times', 12, 'normal');
smo274900.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo274899.addModifier(smo274900);
smo274900.addClass('lyric lyric-0');
smo274923v0ar.push(smo274899);
const smo274901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo274901.setAttribute('id', 'smo274901');
const smo274902 = new VF.Annotation('bun');
smo274902.setAttribute('id', 'smo274902');
smo274902.setFont('times', 12, 'normal');
smo274902.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo274901.addModifier(smo274902);
smo274902.addClass('lyric lyric-0');
smo274923v0ar.push(smo274901);
const smo274903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo274903.setAttribute('id', 'smo274903');
const smo274904 = new VF.Annotation('Man');
smo274904.setAttribute('id', 'smo274904');
smo274904.setFont('times', 12, 'normal');
smo274904.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo274903.addModifier(smo274904);
smo274904.addClass('lyric lyric-0 lyric-hyphen');
smo274923v0ar.push(smo274903);
const smo274905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo274905.setAttribute('id', 'smo274905');
smo274923v0ar.push(smo274905);
const smo274906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo274906.setAttribute('id', 'smo274906');
const smo274907 = new VF.Annotation('ding');
smo274907.setAttribute('id', 'smo274907');
smo274907.setFont('times', 12, 'normal');
smo274907.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo274906.addModifier(smo274907);
smo274907.addClass('lyric lyric-0 lyric-hyphen');
smo274923v0ar.push(smo274906);
smo274923v0.addTickables(smo274923v0ar)
fmtsmo27492366.joinVoices([smo274923v0]);
const fmtsmo27803266 = new VF.Formatter();
//
// voices and notes for stave 7 66
const smo278032v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278032v0ar = [];
const smo278004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo278004.setAttribute('id', 'smo278004');
const smo278005 = new VF.Annotation('bun');
smo278005.setAttribute('id', 'smo278005');
smo278005.setFont('times', 12, 'normal');
smo278005.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278004.addModifier(smo278005);
smo278005.addClass('lyric lyric-0');
smo278032v0ar.push(smo278004);
const smo278006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo278006.setAttribute('id', 'smo278006');
const smo278007 = new VF.Annotation('yi');
smo278007.setAttribute('id', 'smo278007');
smo278007.setFont('times', 12, 'normal');
smo278007.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278006.addModifier(smo278007);
smo278007.addClass('lyric lyric-0 lyric-hyphen');
smo278032v0ar.push(smo278006);
const smo278008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo278008.setAttribute('id', 'smo278008');
const smo278009 = new VF.Annotation('ri');
smo278009.setAttribute('id', 'smo278009');
smo278009.setFont('times', 12, 'normal');
smo278009.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278008.addModifier(smo278009);
smo278009.addClass('lyric lyric-0');
smo278032v0ar.push(smo278008);
const smo278010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo278010.setAttribute('id', 'smo278010');
const smo278011 = new VF.Annotation('bun');
smo278011.setAttribute('id', 'smo278011');
smo278011.setFont('times', 12, 'normal');
smo278011.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278010.addModifier(smo278011);
smo278011.addClass('lyric lyric-0');
smo278032v0ar.push(smo278010);
const smo278012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo278012.setAttribute('id', 'smo278012');
const smo278013 = new VF.Annotation('Man');
smo278013.setAttribute('id', 'smo278013');
smo278013.setFont('times', 12, 'normal');
smo278013.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278012.addModifier(smo278013);
smo278013.addClass('lyric lyric-0 lyric-hyphen');
smo278032v0ar.push(smo278012);
const smo278014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo278014.setAttribute('id', 'smo278014');
smo278032v0ar.push(smo278014);
const smo278015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo278015.setAttribute('id', 'smo278015');
const smo278016 = new VF.Annotation('ding');
smo278016.setAttribute('id', 'smo278016');
smo278016.setFont('times', 12, 'normal');
smo278016.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278015.addModifier(smo278016);
smo278016.addClass('lyric lyric-0 lyric-hyphen');
smo278032v0ar.push(smo278015);
smo278032v0.addTickables(smo278032v0ar)
fmtsmo27803266.joinVoices([smo278032v0]);
const fmtsmo28111866 = new VF.Formatter();
//
// voices and notes for stave 8 66
const smo281118v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281118v0ar = [];
const smo281090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281090.setAttribute('id', 'smo281090');
const smo281091 = new VF.Annotation('bun');
smo281091.setAttribute('id', 'smo281091');
smo281091.setFont('times', 12, 'normal');
smo281091.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281090.addModifier(smo281091);
smo281091.addClass('lyric lyric-0');
smo281118v0ar.push(smo281090);
const smo281092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281092.setAttribute('id', 'smo281092');
const smo281093 = new VF.Annotation('yi');
smo281093.setAttribute('id', 'smo281093');
smo281093.setFont('times', 12, 'normal');
smo281093.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281092.addModifier(smo281093);
smo281093.addClass('lyric lyric-0 lyric-hyphen');
smo281118v0ar.push(smo281092);
const smo281094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281094.setAttribute('id', 'smo281094');
const smo281095 = new VF.Annotation('ri');
smo281095.setAttribute('id', 'smo281095');
smo281095.setFont('times', 12, 'normal');
smo281095.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281094.addModifier(smo281095);
smo281095.addClass('lyric lyric-0');
smo281118v0ar.push(smo281094);
const smo281096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo281096.setAttribute('id', 'smo281096');
const smo281097 = new VF.Annotation('bun');
smo281097.setAttribute('id', 'smo281097');
smo281097.setFont('times', 12, 'normal');
smo281097.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281096.addModifier(smo281097);
smo281097.addClass('lyric lyric-0');
smo281118v0ar.push(smo281096);
const smo281098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo281098.setAttribute('id', 'smo281098');
const smo281099 = new VF.Annotation('Man');
smo281099.setAttribute('id', 'smo281099');
smo281099.setFont('times', 12, 'normal');
smo281099.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281098.addModifier(smo281099);
smo281099.addClass('lyric lyric-0 lyric-hyphen');
smo281118v0ar.push(smo281098);
const smo281100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo281100.setAttribute('id', 'smo281100');
smo281118v0ar.push(smo281100);
const smo281101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281101.setAttribute('id', 'smo281101');
const smo281102 = new VF.Annotation('ding');
smo281102.setAttribute('id', 'smo281102');
smo281102.setFont('times', 12, 'normal');
smo281102.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281101.addModifier(smo281102);
smo281102.addClass('lyric lyric-0 lyric-hyphen');
smo281118v0ar.push(smo281101);
smo281118v0.addTickables(smo281118v0ar)
fmtsmo28111866.joinVoices([smo281118v0]);
const fmtsmo28420766 = new VF.Formatter();
//
// voices and notes for stave 9 66
const smo284207v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284207v0ar = [];
const smo284179 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo284179.setAttribute('id', 'smo284179');
const smo284180 = new VF.Annotation('bun');
smo284180.setAttribute('id', 'smo284180');
smo284180.setFont('times', 12, 'normal');
smo284180.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284179.addModifier(smo284180);
smo284180.addClass('lyric lyric-0');
smo284207v0ar.push(smo284179);
const smo284181 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo284181.setAttribute('id', 'smo284181');
const smo284182 = new VF.Annotation('yi');
smo284182.setAttribute('id', 'smo284182');
smo284182.setFont('times', 12, 'normal');
smo284182.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284181.addModifier(smo284182);
smo284182.addClass('lyric lyric-0 lyric-hyphen');
smo284207v0ar.push(smo284181);
const smo284183 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo284183.setAttribute('id', 'smo284183');
const smo284184 = new VF.Annotation('ri');
smo284184.setAttribute('id', 'smo284184');
smo284184.setFont('times', 12, 'normal');
smo284184.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284183.addModifier(smo284184);
smo284184.addClass('lyric lyric-0');
smo284207v0ar.push(smo284183);
const smo284185 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo284185.setAttribute('id', 'smo284185');
const smo284186 = new VF.Annotation('bun');
smo284186.setAttribute('id', 'smo284186');
smo284186.setFont('times', 12, 'normal');
smo284186.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284185.addModifier(smo284186);
smo284186.addClass('lyric lyric-0');
smo284207v0ar.push(smo284185);
const smo284187 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo284187.setAttribute('id', 'smo284187');
const smo284188 = new VF.Annotation('Man');
smo284188.setAttribute('id', 'smo284188');
smo284188.setFont('times', 12, 'normal');
smo284188.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284187.addModifier(smo284188);
smo284188.addClass('lyric lyric-0 lyric-hyphen');
smo284207v0ar.push(smo284187);
const smo284189 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo284189.setAttribute('id', 'smo284189');
smo284207v0ar.push(smo284189);
const smo284190 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo284190.setAttribute('id', 'smo284190');
const smo284191 = new VF.Annotation('ding');
smo284191.setAttribute('id', 'smo284191');
smo284191.setFont('times', 12, 'normal');
smo284191.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284190.addModifier(smo284191);
smo284191.addClass('lyric lyric-0 lyric-hyphen');
smo284207v0ar.push(smo284190);
smo284207v0.addTickables(smo284207v0ar)
fmtsmo28420766.joinVoices([smo284207v0]);
const fmtsmo28724766 = new VF.Formatter();
//
// voices and notes for stave 10 66
const smo287247v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287247v0ar = [];
const smo287219 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287219.setAttribute('id', 'smo287219');
const smo287220 = new VF.Annotation('bun');
smo287220.setAttribute('id', 'smo287220');
smo287220.setFont('times', 12, 'normal');
smo287220.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287219.addModifier(smo287220);
smo287220.addClass('lyric lyric-0');
smo287247v0ar.push(smo287219);
const smo287221 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287221.setAttribute('id', 'smo287221');
const smo287222 = new VF.Annotation('yi');
smo287222.setAttribute('id', 'smo287222');
smo287222.setFont('times', 12, 'normal');
smo287222.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287221.addModifier(smo287222);
smo287222.addClass('lyric lyric-0 lyric-hyphen');
smo287247v0ar.push(smo287221);
const smo287223 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287223.setAttribute('id', 'smo287223');
const smo287224 = new VF.Annotation('ri');
smo287224.setAttribute('id', 'smo287224');
smo287224.setFont('times', 12, 'normal');
smo287224.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287223.addModifier(smo287224);
smo287224.addClass('lyric lyric-0');
smo287247v0ar.push(smo287223);
const smo287225 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo287225.setAttribute('id', 'smo287225');
const smo287226 = new VF.Annotation('bun');
smo287226.setAttribute('id', 'smo287226');
smo287226.setFont('times', 12, 'normal');
smo287226.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287225.addModifier(smo287226);
smo287226.addClass('lyric lyric-0');
smo287247v0ar.push(smo287225);
const smo287227 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo287227.setAttribute('id', 'smo287227');
const smo287228 = new VF.Annotation('Man');
smo287228.setAttribute('id', 'smo287228');
smo287228.setFont('times', 12, 'normal');
smo287228.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287227.addModifier(smo287228);
smo287228.addClass('lyric lyric-0 lyric-hyphen');
smo287247v0ar.push(smo287227);
const smo287229 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo287229.setAttribute('id', 'smo287229');
smo287247v0ar.push(smo287229);
const smo287230 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287230.setAttribute('id', 'smo287230');
const smo287231 = new VF.Annotation('ding');
smo287231.setAttribute('id', 'smo287231');
smo287231.setFont('times', 12, 'normal');
smo287231.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287230.addModifier(smo287231);
smo287231.addClass('lyric lyric-0 lyric-hyphen');
smo287247v0ar.push(smo287230);
smo287247v0.addTickables(smo287247v0ar)
fmtsmo28724766.joinVoices([smo287247v0]);
const fmtsmo29030166 = new VF.Formatter();
//
// voices and notes for stave 11 66
const smo290301v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290301v0ar = [];
const smo290273 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290273.setAttribute('id', 'smo290273');
const smo290274 = new VF.Annotation('bun');
smo290274.setAttribute('id', 'smo290274');
smo290274.setFont('times', 12, 'normal');
smo290274.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290273.addModifier(smo290274);
smo290274.addClass('lyric lyric-0');
smo290301v0ar.push(smo290273);
const smo290275 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290275.setAttribute('id', 'smo290275');
const smo290276 = new VF.Annotation('yi');
smo290276.setAttribute('id', 'smo290276');
smo290276.setFont('times', 12, 'normal');
smo290276.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290275.addModifier(smo290276);
smo290276.addClass('lyric lyric-0 lyric-hyphen');
smo290301v0ar.push(smo290275);
const smo290277 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290277.setAttribute('id', 'smo290277');
const smo290278 = new VF.Annotation('ri');
smo290278.setAttribute('id', 'smo290278');
smo290278.setFont('times', 12, 'normal');
smo290278.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290277.addModifier(smo290278);
smo290278.addClass('lyric lyric-0');
smo290301v0ar.push(smo290277);
const smo290279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo290279.setAttribute('id', 'smo290279');
const smo290280 = new VF.Annotation('bun');
smo290280.setAttribute('id', 'smo290280');
smo290280.setFont('times', 12, 'normal');
smo290280.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290279.addModifier(smo290280);
smo290280.addClass('lyric lyric-0');
smo290301v0ar.push(smo290279);
const smo290281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo290281.setAttribute('id', 'smo290281');
const smo290282 = new VF.Annotation('Man');
smo290282.setAttribute('id', 'smo290282');
smo290282.setFont('times', 12, 'normal');
smo290282.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290281.addModifier(smo290282);
smo290282.addClass('lyric lyric-0 lyric-hyphen');
smo290301v0ar.push(smo290281);
const smo290283 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo290283.setAttribute('id', 'smo290283');
smo290301v0ar.push(smo290283);
const smo290284 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290284.setAttribute('id', 'smo290284');
const smo290285 = new VF.Annotation('ding');
smo290285.setAttribute('id', 'smo290285');
smo290285.setFont('times', 12, 'normal');
smo290285.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290284.addModifier(smo290285);
smo290285.addClass('lyric lyric-0 lyric-hyphen');
smo290301v0ar.push(smo290284);
smo290301v0.addTickables(smo290301v0ar)
fmtsmo29030166.joinVoices([smo290301v0]);
const fmtsmo29334466 = new VF.Formatter();
//
// voices and notes for stave 12 66
const smo293344v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293344v0ar = [];
const smo293316 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293316.setAttribute('id', 'smo293316');
const smo293317 = new VF.Annotation('bun');
smo293317.setAttribute('id', 'smo293317');
smo293317.setFont('times', 12, 'normal');
smo293317.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293316.addModifier(smo293317);
smo293317.addClass('lyric lyric-0');
smo293344v0ar.push(smo293316);
const smo293318 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293318.setAttribute('id', 'smo293318');
const smo293319 = new VF.Annotation('yi');
smo293319.setAttribute('id', 'smo293319');
smo293319.setFont('times', 12, 'normal');
smo293319.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293318.addModifier(smo293319);
smo293319.addClass('lyric lyric-0 lyric-hyphen');
smo293344v0ar.push(smo293318);
const smo293320 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293320.setAttribute('id', 'smo293320');
const smo293321 = new VF.Annotation('ri');
smo293321.setAttribute('id', 'smo293321');
smo293321.setFont('times', 12, 'normal');
smo293321.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293320.addModifier(smo293321);
smo293321.addClass('lyric lyric-0');
smo293344v0ar.push(smo293320);
const smo293322 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo293322.setAttribute('id', 'smo293322');
const smo293323 = new VF.Annotation('bun');
smo293323.setAttribute('id', 'smo293323');
smo293323.setFont('times', 12, 'normal');
smo293323.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293322.addModifier(smo293323);
smo293323.addClass('lyric lyric-0');
smo293344v0ar.push(smo293322);
const smo293324 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo293324.setAttribute('id', 'smo293324');
const smo293325 = new VF.Annotation('Man');
smo293325.setAttribute('id', 'smo293325');
smo293325.setFont('times', 12, 'normal');
smo293325.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293324.addModifier(smo293325);
smo293325.addClass('lyric lyric-0 lyric-hyphen');
smo293344v0ar.push(smo293324);
const smo293326 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo293326.setAttribute('id', 'smo293326');
smo293344v0ar.push(smo293326);
const smo293327 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293327.setAttribute('id', 'smo293327');
const smo293328 = new VF.Annotation('ding');
smo293328.setAttribute('id', 'smo293328');
smo293328.setFont('times', 12, 'normal');
smo293328.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293327.addModifier(smo293328);
smo293328.addClass('lyric lyric-0 lyric-hyphen');
smo293344v0ar.push(smo293327);
smo293344v0.addTickables(smo293344v0ar)
fmtsmo29334466.joinVoices([smo293344v0]);
const fmtsmo29654366 = new VF.Formatter();
//
// voices and notes for stave 13 66
const smo296543v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296543v0ar = [];
const smo296522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo296522.setAttribute('id', 'smo296522');
const smo2965220acc = new VF.Accidental('#');
smo296522.addModifier(smo2965220acc, 0);
smo296522.addModifier(new VF.Dot(), 0);
smo296522.addModifier(new VF.Dot(), 1);
smo296522.addModifier(new VF.Dot(), 2);
smo296543v0ar.push(smo296522);
const smo296523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo296523.setAttribute('id', 'smo296523');
smo296543v0ar.push(smo296523);
const smo296524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo296524.setAttribute('id', 'smo296524');
smo296543v0ar.push(smo296524);
const smo296525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo296525.setAttribute('id', 'smo296525');
const smo2965252acc = new VF.Accidental('b');
smo296525.addModifier(smo2965252acc, 2);
smo296543v0ar.push(smo296525);
const smo296526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo296526.setAttribute('id', 'smo296526');
smo296543v0ar.push(smo296526);
const smo296527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo296527.setAttribute('id', 'smo296527');
smo296543v0ar.push(smo296527);
smo296543v0.addTickables(smo296543v0ar)
fmtsmo29654366.joinVoices([smo296543v0]);
const fmtsmo29975666 = new VF.Formatter();
//
// voices and notes for stave 14 66
const smo299756v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo299756v0ar = [];
const smo299735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo299735.setAttribute('id', 'smo299735');
const smo2997350acc = new VF.Accidental('#');
smo299735.addModifier(smo2997350acc, 0);
smo299735.addModifier(new VF.Dot(), 0);
smo299735.addModifier(new VF.Dot(), 1);
smo299735.addModifier(new VF.Dot(), 2);
smo299756v0ar.push(smo299735);
const smo299736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo299736.setAttribute('id', 'smo299736');
smo299756v0ar.push(smo299736);
const smo299737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo299737.setAttribute('id', 'smo299737');
smo299756v0ar.push(smo299737);
const smo299738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo299738.setAttribute('id', 'smo299738');
const smo2997382acc = new VF.Accidental('b');
smo299738.addModifier(smo2997382acc, 2);
smo299756v0ar.push(smo299738);
const smo299739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo299739.setAttribute('id', 'smo299739');
smo299756v0ar.push(smo299739);
const smo299740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo299740.setAttribute('id', 'smo299740');
smo299756v0ar.push(smo299740);
smo299756v0.addTickables(smo299756v0ar)
fmtsmo29975666.joinVoices([smo299756v0]);
const fmtsmo30295166 = new VF.Formatter();
//
// voices and notes for stave 15 66
const smo302951v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo302951v0ar = [];
const smo302930 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo302930.setAttribute('id', 'smo302930');
const smo3029300acc = new VF.Accidental('#');
smo302930.addModifier(smo3029300acc, 0);
smo302930.addModifier(new VF.Dot(), 0);
smo302951v0ar.push(smo302930);
const smo302931 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo302931.setAttribute('id', 'smo302931');
smo302951v0ar.push(smo302931);
const smo302932 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo302932.setAttribute('id', 'smo302932');
smo302951v0ar.push(smo302932);
const smo302933 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo302933.setAttribute('id', 'smo302933');
smo302951v0ar.push(smo302933);
const smo302934 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo302934.setAttribute('id', 'smo302934');
smo302951v0ar.push(smo302934);
const smo302935 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo302935.setAttribute('id', 'smo302935');
smo302951v0ar.push(smo302935);
smo302951v0.addTickables(smo302951v0ar)
fmtsmo30295166.joinVoices([smo302951v0]);
const fmtsmo30606666 = new VF.Formatter();
//
// voices and notes for stave 16 66
const smo306066v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306066v0ar = [];
const smo306047 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo306047.setAttribute('id', 'smo306047');
smo306047.addModifier(new VF.Dot(), 0);
smo306066v0ar.push(smo306047);
const smo306048 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n"]}'))
smo306048.setAttribute('id', 'smo306048');
const smo3060480acc = new VF.Accidental('b');
smo306048.addModifier(smo3060480acc, 0);
smo306066v0ar.push(smo306048);
const smo306049 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n"]}'))
smo306049.setAttribute('id', 'smo306049');
smo306066v0ar.push(smo306049);
const smo306050 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo306050.setAttribute('id', 'smo306050');
smo306066v0ar.push(smo306050);
smo306066v0.addTickables(smo306066v0ar)
fmtsmo30606666.joinVoices([smo306066v0]);
const fmtsmo30926566 = new VF.Formatter();
//
// voices and notes for stave 17 66
const smo309265v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309265v0ar = [];
const smo309236 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo309236.setAttribute('id', 'smo309236');
smo309236.setStyle({ fillStyle: '#aaaaaa7f' });
const smo3092360acc = new VF.Accidental('n');
smo309236.addModifier(smo3092360acc, 0);
const smo309237 = new VF.Annotation('bun');
smo309237.setAttribute('id', 'smo309237');
smo309237.setFont('times', 12, 'normal');
smo309237.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo309236.addModifier(smo309237);
smo309237.addClass('lyric lyric-0');
smo309265v0ar.push(smo309236);
const smo309238 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo309238.setAttribute('id', 'smo309238');
smo309238.setStyle({ fillStyle: '#aaaaaa7f' });
const smo309239 = new VF.Annotation('yi');
smo309239.setAttribute('id', 'smo309239');
smo309239.setFont('times', 12, 'normal');
smo309239.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo309238.addModifier(smo309239);
smo309239.addClass('lyric lyric-0 lyric-hyphen');
smo309265v0ar.push(smo309238);
const smo309240 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo309240.setAttribute('id', 'smo309240');
smo309240.setStyle({ fillStyle: '#aaaaaa7f' });
const smo309241 = new VF.Annotation('ri');
smo309241.setAttribute('id', 'smo309241');
smo309241.setFont('times', 12, 'normal');
smo309241.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo309240.addModifier(smo309241);
smo309241.addClass('lyric lyric-0');
smo309265v0ar.push(smo309240);
const smo309242 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo309242.setAttribute('id', 'smo309242');
smo309242.setStyle({ fillStyle: '#aaaaaa7f' });
const smo309243 = new VF.Annotation('bun');
smo309243.setAttribute('id', 'smo309243');
smo309243.setFont('times', 12, 'normal');
smo309243.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo309242.addModifier(smo309243);
smo309243.addClass('lyric lyric-0');
smo309265v0ar.push(smo309242);
const smo309244 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo309244.setAttribute('id', 'smo309244');
smo309244.setStyle({ fillStyle: '#aaaaaa7f' });
const smo309245 = new VF.Annotation('Man');
smo309245.setAttribute('id', 'smo309245');
smo309245.setFont('times', 12, 'normal');
smo309245.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo309244.addModifier(smo309245);
smo309245.addClass('lyric lyric-0 lyric-hyphen');
smo309265v0ar.push(smo309244);
const smo309246 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo309246.setAttribute('id', 'smo309246');
smo309246.setStyle({ fillStyle: '#aaaaaa7f' });
smo309265v0ar.push(smo309246);
const smo309247 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo309247.setAttribute('id', 'smo309247');
smo309247.setStyle({ fillStyle: '#aaaaaa7f' });
const smo309248 = new VF.Annotation('ding');
smo309248.setAttribute('id', 'smo309248');
smo309248.setFont('times', 12, 'normal');
smo309248.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo309247.addModifier(smo309248);
smo309248.addClass('lyric lyric-0 lyric-hyphen');
smo309265v0ar.push(smo309247);
smo309265v0.addTickables(smo309265v0ar)
fmtsmo30926566.joinVoices([smo309265v0]);
const smo309265v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309265v1ar = [];
const smo309249 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309249.setAttribute('id', 'smo309249');
smo309249.setStyle({ fillStyle: "#115511" });
smo309265v1ar.push(smo309249);
smo309265v1.addTickables(smo309265v1ar)
fmtsmo30926566.joinVoices([smo309265v1]);
// create beam groups and tuplets for format grp smo310988 before formatting
const dirsmo402429 = smo256406.getStemDirection();
smo256406.setStemDirection(dirsmo402429);
smo256408.setStemDirection(dirsmo402429);
const smo402429 = new VF.Beam([smo256406,smo256408]);
const dirsmo402430 = smo256410.getStemDirection();
smo256410.setStemDirection(dirsmo402430);
smo256412.setStemDirection(dirsmo402430);
smo256414.setStemDirection(dirsmo402430);
smo256415.setStemDirection(dirsmo402430);
const smo402430 = new VF.Beam([smo256410,smo256412,smo256414,smo256415]);
const dirsmo402433 = smo259400.getStemDirection();
smo259400.setStemDirection(dirsmo402433);
smo259402.setStemDirection(dirsmo402433);
const smo402433 = new VF.Beam([smo259400,smo259402]);
const dirsmo402434 = smo259404.getStemDirection();
smo259404.setStemDirection(dirsmo402434);
smo259406.setStemDirection(dirsmo402434);
smo259408.setStemDirection(dirsmo402434);
smo259409.setStemDirection(dirsmo402434);
const smo402434 = new VF.Beam([smo259404,smo259406,smo259408,smo259409]);
const dirsmo402437 = smo262543.getStemDirection();
smo262543.setStemDirection(dirsmo402437);
smo262545.setStemDirection(dirsmo402437);
const smo402437 = new VF.Beam([smo262543,smo262545]);
const dirsmo402438 = smo262547.getStemDirection();
smo262547.setStemDirection(dirsmo402438);
smo262549.setStemDirection(dirsmo402438);
smo262551.setStemDirection(dirsmo402438);
smo262552.setStemDirection(dirsmo402438);
const smo402438 = new VF.Beam([smo262547,smo262549,smo262551,smo262552]);
const dirsmo402441 = smo265659.getStemDirection();
smo265659.setStemDirection(dirsmo402441);
smo265661.setStemDirection(dirsmo402441);
const smo402441 = new VF.Beam([smo265659,smo265661]);
const dirsmo402442 = smo265663.getStemDirection();
smo265663.setStemDirection(dirsmo402442);
smo265665.setStemDirection(dirsmo402442);
smo265667.setStemDirection(dirsmo402442);
smo265668.setStemDirection(dirsmo402442);
const smo402442 = new VF.Beam([smo265663,smo265665,smo265667,smo265668]);
const dirsmo402445 = smo268678.getStemDirection();
smo268678.setStemDirection(dirsmo402445);
smo268680.setStemDirection(dirsmo402445);
const smo402445 = new VF.Beam([smo268678,smo268680]);
const dirsmo402446 = smo268682.getStemDirection();
smo268682.setStemDirection(dirsmo402446);
smo268684.setStemDirection(dirsmo402446);
smo268686.setStemDirection(dirsmo402446);
smo268687.setStemDirection(dirsmo402446);
const smo402446 = new VF.Beam([smo268682,smo268684,smo268686,smo268687]);
 
// formatting measures in staff group smo310988
fmtsmo25643266.format([smo256432v0,smo259426v0,smo262569v0,smo265685v0,smo268704v0], 311);
const stavesmo256432 = new VF.Stave(1110, 210, 325);
stavesmo256432.setAttribute('id', 'stavesmo256432');
stavesmo256432.setBegBarType(VF.Barline.type.NONE);
stavesmo256432.setContext(context);
stavesmo256432.draw();
smo256432v0.draw(context, stavesmo256432);
smo402429.setContext(context);
smo402429.draw();
smo402430.setContext(context);
smo402430.draw();
const stavesmo259426 = new VF.Stave(1110, 316, 325);
stavesmo259426.setAttribute('id', 'stavesmo259426');
stavesmo259426.setBegBarType(VF.Barline.type.NONE);
stavesmo259426.setContext(context);
stavesmo259426.draw();
smo259426v0.draw(context, stavesmo259426);
smo402433.setContext(context);
smo402433.draw();
smo402434.setContext(context);
smo402434.draw();
const stavesmo262569 = new VF.Stave(1110, 437, 325);
stavesmo262569.setAttribute('id', 'stavesmo262569');
stavesmo262569.setBegBarType(VF.Barline.type.NONE);
stavesmo262569.setContext(context);
stavesmo262569.draw();
smo262569v0.draw(context, stavesmo262569);
smo402437.setContext(context);
smo402437.draw();
smo402438.setContext(context);
smo402438.draw();
const stavesmo265685 = new VF.Stave(1110, 553, 325);
stavesmo265685.setAttribute('id', 'stavesmo265685');
stavesmo265685.setBegBarType(VF.Barline.type.NONE);
stavesmo265685.setContext(context);
stavesmo265685.draw();
smo265685v0.draw(context, stavesmo265685);
smo402441.setContext(context);
smo402441.draw();
smo402442.setContext(context);
smo402442.draw();
const stavesmo268704 = new VF.Stave(1110, 659, 325);
stavesmo268704.setAttribute('id', 'stavesmo268704');
stavesmo268704.setBegBarType(VF.Barline.type.NONE);
stavesmo268704.setContext(context);
stavesmo268704.draw();
smo268704v0.draw(context, stavesmo268704);
smo402445.setContext(context);
smo402445.draw();
smo402446.setContext(context);
smo402446.draw();
// create beam groups and tuplets for format grp smo310990 before formatting
const dirsmo402449 = smo271785.getStemDirection();
smo271785.setStemDirection(dirsmo402449);
smo271787.setStemDirection(dirsmo402449);
const smo402449 = new VF.Beam([smo271785,smo271787]);
const dirsmo402450 = smo271789.getStemDirection();
smo271789.setStemDirection(dirsmo402450);
smo271791.setStemDirection(dirsmo402450);
smo271793.setStemDirection(dirsmo402450);
smo271794.setStemDirection(dirsmo402450);
const smo402450 = new VF.Beam([smo271789,smo271791,smo271793,smo271794]);
const dirsmo402453 = smo274897.getStemDirection();
smo274897.setStemDirection(dirsmo402453);
smo274899.setStemDirection(dirsmo402453);
const smo402453 = new VF.Beam([smo274897,smo274899]);
const dirsmo402454 = smo274901.getStemDirection();
smo274901.setStemDirection(dirsmo402454);
smo274903.setStemDirection(dirsmo402454);
smo274905.setStemDirection(dirsmo402454);
smo274906.setStemDirection(dirsmo402454);
const smo402454 = new VF.Beam([smo274901,smo274903,smo274905,smo274906]);
const dirsmo402457 = smo278006.getStemDirection();
smo278006.setStemDirection(dirsmo402457);
smo278008.setStemDirection(dirsmo402457);
const smo402457 = new VF.Beam([smo278006,smo278008]);
const dirsmo402458 = smo278010.getStemDirection();
smo278010.setStemDirection(dirsmo402458);
smo278012.setStemDirection(dirsmo402458);
smo278014.setStemDirection(dirsmo402458);
smo278015.setStemDirection(dirsmo402458);
const smo402458 = new VF.Beam([smo278010,smo278012,smo278014,smo278015]);
const dirsmo402461 = smo281092.getStemDirection();
smo281092.setStemDirection(dirsmo402461);
smo281094.setStemDirection(dirsmo402461);
const smo402461 = new VF.Beam([smo281092,smo281094]);
const dirsmo402462 = smo281096.getStemDirection();
smo281096.setStemDirection(dirsmo402462);
smo281098.setStemDirection(dirsmo402462);
smo281100.setStemDirection(dirsmo402462);
smo281101.setStemDirection(dirsmo402462);
const smo402462 = new VF.Beam([smo281096,smo281098,smo281100,smo281101]);
 
// formatting measures in staff group smo310990
fmtsmo27181166.format([smo271811v0,smo274923v0,smo278032v0,smo281118v0], 311);
const stavesmo271811 = new VF.Stave(1110, 780, 325);
stavesmo271811.setAttribute('id', 'stavesmo271811');
stavesmo271811.setBegBarType(VF.Barline.type.NONE);
stavesmo271811.setContext(context);
stavesmo271811.draw();
smo271811v0.draw(context, stavesmo271811);
smo402449.setContext(context);
smo402449.draw();
smo402450.setContext(context);
smo402450.draw();
const stavesmo274923 = new VF.Stave(1110, 896, 325);
stavesmo274923.setAttribute('id', 'stavesmo274923');
stavesmo274923.setBegBarType(VF.Barline.type.NONE);
stavesmo274923.setContext(context);
stavesmo274923.draw();
smo274923v0.draw(context, stavesmo274923);
smo402453.setContext(context);
smo402453.draw();
smo402454.setContext(context);
smo402454.draw();
const stavesmo278032 = new VF.Stave(1110, 1012, 325);
stavesmo278032.setAttribute('id', 'stavesmo278032');
stavesmo278032.setBegBarType(VF.Barline.type.NONE);
stavesmo278032.setContext(context);
stavesmo278032.draw();
smo278032v0.draw(context, stavesmo278032);
smo402457.setContext(context);
smo402457.draw();
smo402458.setContext(context);
smo402458.draw();
const stavesmo281118 = new VF.Stave(1110, 1128, 325);
stavesmo281118.setAttribute('id', 'stavesmo281118');
stavesmo281118.setBegBarType(VF.Barline.type.NONE);
stavesmo281118.setContext(context);
stavesmo281118.draw();
smo281118v0.draw(context, stavesmo281118);
smo402461.setContext(context);
smo402461.draw();
smo402462.setContext(context);
smo402462.draw();
// create beam groups and tuplets for format grp smo310992 before formatting
const dirsmo402465 = smo284181.getStemDirection();
smo284181.setStemDirection(dirsmo402465);
smo284183.setStemDirection(dirsmo402465);
const smo402465 = new VF.Beam([smo284181,smo284183]);
const dirsmo402466 = smo284185.getStemDirection();
smo284185.setStemDirection(dirsmo402466);
smo284187.setStemDirection(dirsmo402466);
smo284189.setStemDirection(dirsmo402466);
smo284190.setStemDirection(dirsmo402466);
const smo402466 = new VF.Beam([smo284185,smo284187,smo284189,smo284190]);
const dirsmo402469 = smo287221.getStemDirection();
smo287221.setStemDirection(dirsmo402469);
smo287223.setStemDirection(dirsmo402469);
const smo402469 = new VF.Beam([smo287221,smo287223]);
const dirsmo402470 = smo287225.getStemDirection();
smo287225.setStemDirection(dirsmo402470);
smo287227.setStemDirection(dirsmo402470);
smo287229.setStemDirection(dirsmo402470);
smo287230.setStemDirection(dirsmo402470);
const smo402470 = new VF.Beam([smo287225,smo287227,smo287229,smo287230]);
const dirsmo402473 = smo290275.getStemDirection();
smo290275.setStemDirection(dirsmo402473);
smo290277.setStemDirection(dirsmo402473);
const smo402473 = new VF.Beam([smo290275,smo290277]);
const dirsmo402474 = smo290279.getStemDirection();
smo290279.setStemDirection(dirsmo402474);
smo290281.setStemDirection(dirsmo402474);
smo290283.setStemDirection(dirsmo402474);
smo290284.setStemDirection(dirsmo402474);
const smo402474 = new VF.Beam([smo290279,smo290281,smo290283,smo290284]);
const dirsmo402477 = smo293318.getStemDirection();
smo293318.setStemDirection(dirsmo402477);
smo293320.setStemDirection(dirsmo402477);
const smo402477 = new VF.Beam([smo293318,smo293320]);
const dirsmo402478 = smo293322.getStemDirection();
smo293322.setStemDirection(dirsmo402478);
smo293324.setStemDirection(dirsmo402478);
smo293326.setStemDirection(dirsmo402478);
smo293327.setStemDirection(dirsmo402478);
const smo402478 = new VF.Beam([smo293322,smo293324,smo293326,smo293327]);
 
// formatting measures in staff group smo310992
fmtsmo28420766.format([smo284207v0,smo287247v0,smo290301v0,smo293344v0], 311);
const stavesmo284207 = new VF.Stave(1110, 1264, 325);
stavesmo284207.setAttribute('id', 'stavesmo284207');
stavesmo284207.setBegBarType(VF.Barline.type.NONE);
stavesmo284207.setContext(context);
stavesmo284207.draw();
smo284207v0.draw(context, stavesmo284207);
smo402465.setContext(context);
smo402465.draw();
smo402466.setContext(context);
smo402466.draw();
const stavesmo287247 = new VF.Stave(1110, 1400, 325);
stavesmo287247.setAttribute('id', 'stavesmo287247');
stavesmo287247.setBegBarType(VF.Barline.type.NONE);
stavesmo287247.setContext(context);
stavesmo287247.draw();
smo287247v0.draw(context, stavesmo287247);
smo402469.setContext(context);
smo402469.draw();
smo402470.setContext(context);
smo402470.draw();
const stavesmo290301 = new VF.Stave(1110, 1536, 325);
stavesmo290301.setAttribute('id', 'stavesmo290301');
stavesmo290301.setBegBarType(VF.Barline.type.NONE);
stavesmo290301.setContext(context);
stavesmo290301.draw();
smo290301v0.draw(context, stavesmo290301);
smo402473.setContext(context);
smo402473.draw();
smo402474.setContext(context);
smo402474.draw();
const stavesmo293344 = new VF.Stave(1110, 1672, 325);
stavesmo293344.setAttribute('id', 'stavesmo293344');
stavesmo293344.setBegBarType(VF.Barline.type.NONE);
stavesmo293344.setContext(context);
stavesmo293344.draw();
smo293344v0.draw(context, stavesmo293344);
smo402477.setContext(context);
smo402477.draw();
smo402478.setContext(context);
smo402478.draw();
// create beam groups and tuplets for format grp smo298311 before formatting
const dirsmo402481 = smo296523.getStemDirection();
smo296523.setStemDirection(dirsmo402481);
smo296524.setStemDirection(dirsmo402481);
smo296525.setStemDirection(dirsmo402481);
smo296526.setStemDirection(dirsmo402481);
const smo402481 = new VF.Beam([smo296523,smo296524,smo296525,smo296526]);
 
// formatting measures in staff group smo298311
fmtsmo29654366.format([smo296543v0], 311);
const stavesmo296543 = new VF.Stave(1110, 1818, 325);
stavesmo296543.setAttribute('id', 'stavesmo296543');
stavesmo296543.setBegBarType(VF.Barline.type.NONE);
stavesmo296543.setContext(context);
stavesmo296543.draw();
smo296543v0.draw(context, stavesmo296543);
smo402481.setContext(context);
smo402481.draw();
// create beam groups and tuplets for format grp smo310986 before formatting
const dirsmo402484 = smo299736.getStemDirection();
smo299736.setStemDirection(dirsmo402484);
smo299737.setStemDirection(dirsmo402484);
smo299738.setStemDirection(dirsmo402484);
smo299739.setStemDirection(dirsmo402484);
const smo402484 = new VF.Beam([smo299736,smo299737,smo299738,smo299739]);
const dirsmo402487 = smo302931.getStemDirection();
smo302931.setStemDirection(dirsmo402487);
smo302932.setStemDirection(dirsmo402487);
smo302933.setStemDirection(dirsmo402487);
smo302934.setStemDirection(dirsmo402487);
const smo402487 = new VF.Beam([smo302931,smo302932,smo302933,smo302934]);
 
// formatting measures in staff group smo310986
fmtsmo29975666.format([smo299756v0,smo302951v0], 311);
const stavesmo299756 = new VF.Stave(1110, 1924, 325);
stavesmo299756.setAttribute('id', 'stavesmo299756');
stavesmo299756.setBegBarType(VF.Barline.type.NONE);
stavesmo299756.setContext(context);
stavesmo299756.draw();
smo299756v0.draw(context, stavesmo299756);
smo402484.setContext(context);
smo402484.draw();
const stavesmo302951 = new VF.Stave(1110, 2010, 325);
stavesmo302951.setAttribute('id', 'stavesmo302951');
stavesmo302951.setBegBarType(VF.Barline.type.NONE);
stavesmo302951.setContext(context);
stavesmo302951.draw();
smo302951v0.draw(context, stavesmo302951);
smo402487.setContext(context);
smo402487.draw();
// create beam groups and tuplets for format grp smo307824 before formatting
 
// formatting measures in staff group smo307824
fmtsmo30606666.format([smo306066v0], 311);
const stavesmo306066 = new VF.Stave(1110, 2081, 325);
stavesmo306066.setAttribute('id', 'stavesmo306066');
stavesmo306066.setBegBarType(VF.Barline.type.NONE);
stavesmo306066.setContext(context);
stavesmo306066.draw();
smo306066v0.draw(context, stavesmo306066);
// create beam groups and tuplets for format grp smo310980 before formatting
const dirsmo402492 = smo309238.getStemDirection();
smo309238.setStemDirection(dirsmo402492);
smo309240.setStemDirection(dirsmo402492);
const smo402492 = new VF.Beam([smo309238,smo309240]);
const dirsmo402493 = smo309242.getStemDirection();
smo309242.setStemDirection(dirsmo402493);
smo309244.setStemDirection(dirsmo402493);
smo309246.setStemDirection(dirsmo402493);
smo309247.setStemDirection(dirsmo402493);
const smo402493 = new VF.Beam([smo309242,smo309244,smo309246,smo309247]);
 
// formatting measures in staff group smo310980
fmtsmo30926566.format([smo309265v0,smo309265v1], 311);
const stavesmo309265 = new VF.Stave(1110, 2152, 325);
stavesmo309265.setAttribute('id', 'stavesmo309265');
stavesmo309265.setBegBarType(VF.Barline.type.NONE);
stavesmo309265.setContext(context);
stavesmo309265.draw();
smo309265v0.draw(context, stavesmo309265);
smo309265v1.draw(context, stavesmo309265);
smo402492.setContext(context);
smo402492.draw();
smo402493.setContext(context);
smo402493.draw();
const fmtsmo25645467 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo256454v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo256454v0ar = [];
const smo256433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo256433.setAttribute('id', 'smo256433');
smo256454v0ar.push(smo256433);
const smo256434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo256434.setAttribute('id', 'smo256434');
const smo256435 = new VF.Annotation('a');
smo256435.setAttribute('id', 'smo256435');
smo256435.setFont('times', 12, 'normal');
smo256435.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256434.addModifier(smo256435);
smo256435.addClass('lyric lyric-0');
smo256454v0ar.push(smo256434);
const smo256436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo256436.setAttribute('id', 'smo256436');
smo256454v0ar.push(smo256436);
const smo256437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo256437.setAttribute('id', 'smo256437');
smo256454v0ar.push(smo256437);
const smo256438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo256438.setAttribute('id', 'smo256438');
smo256454v0ar.push(smo256438);
smo256454v0.addTickables(smo256454v0ar)
fmtsmo25645467.joinVoices([smo256454v0]);
const fmtsmo25944767 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo259447v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259447v0ar = [];
const smo259427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo259427.setAttribute('id', 'smo259427');
smo259447v0ar.push(smo259427);
const smo259428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo259428.setAttribute('id', 'smo259428');
const smo259429 = new VF.Annotation('a');
smo259429.setAttribute('id', 'smo259429');
smo259429.setFont('times', 12, 'normal');
smo259429.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259428.addModifier(smo259429);
smo259429.addClass('lyric lyric-0');
smo259447v0ar.push(smo259428);
const smo259430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259430.setAttribute('id', 'smo259430');
smo259447v0ar.push(smo259430);
const smo259431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259431.setAttribute('id', 'smo259431');
smo259447v0ar.push(smo259431);
smo259447v0.addTickables(smo259447v0ar)
fmtsmo25944767.joinVoices([smo259447v0]);
const fmtsmo26259167 = new VF.Formatter();
//
// voices and notes for stave 2 67
const smo262591v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo262591v0ar = [];
const smo262570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo262570.setAttribute('id', 'smo262570');
smo262591v0ar.push(smo262570);
const smo262571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo262571.setAttribute('id', 'smo262571');
const smo262572 = new VF.Annotation('a');
smo262572.setAttribute('id', 'smo262572');
smo262572.setFont('times', 12, 'normal');
smo262572.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262571.addModifier(smo262572);
smo262572.addClass('lyric lyric-0');
smo262591v0ar.push(smo262571);
const smo262573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262573.setAttribute('id', 'smo262573');
smo262591v0ar.push(smo262573);
const smo262574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262574.setAttribute('id', 'smo262574');
smo262591v0ar.push(smo262574);
const smo262575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262575.setAttribute('id', 'smo262575');
smo262591v0ar.push(smo262575);
smo262591v0.addTickables(smo262591v0ar)
fmtsmo26259167.joinVoices([smo262591v0]);
const fmtsmo26570767 = new VF.Formatter();
//
// voices and notes for stave 3 67
const smo265707v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo265707v0ar = [];
const smo265686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo265686.setAttribute('id', 'smo265686');
smo265707v0ar.push(smo265686);
const smo265687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo265687.setAttribute('id', 'smo265687');
const smo265688 = new VF.Annotation('a');
smo265688.setAttribute('id', 'smo265688');
smo265688.setFont('times', 12, 'normal');
smo265688.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265687.addModifier(smo265688);
smo265688.addClass('lyric lyric-0');
smo265707v0ar.push(smo265687);
const smo265689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo265689.setAttribute('id', 'smo265689');
smo265707v0ar.push(smo265689);
const smo265690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo265690.setAttribute('id', 'smo265690');
smo265707v0ar.push(smo265690);
const smo265691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo265691.setAttribute('id', 'smo265691');
smo265707v0ar.push(smo265691);
smo265707v0.addTickables(smo265707v0ar)
fmtsmo26570767.joinVoices([smo265707v0]);
const fmtsmo26872667 = new VF.Formatter();
//
// voices and notes for stave 4 67
const smo268726v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo268726v0ar = [];
const smo268705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo268705.setAttribute('id', 'smo268705');
smo268726v0ar.push(smo268705);
const smo268706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo268706.setAttribute('id', 'smo268706');
const smo268707 = new VF.Annotation('a');
smo268707.setAttribute('id', 'smo268707');
smo268707.setFont('times', 12, 'normal');
smo268707.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268706.addModifier(smo268707);
smo268707.addClass('lyric lyric-0');
smo268726v0ar.push(smo268706);
const smo268708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo268708.setAttribute('id', 'smo268708');
smo268726v0ar.push(smo268708);
const smo268709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo268709.setAttribute('id', 'smo268709');
smo268726v0ar.push(smo268709);
const smo268710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo268710.setAttribute('id', 'smo268710');
smo268726v0ar.push(smo268710);
smo268726v0.addTickables(smo268726v0ar)
fmtsmo26872667.joinVoices([smo268726v0]);
const fmtsmo27183367 = new VF.Formatter();
//
// voices and notes for stave 5 67
const smo271833v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo271833v0ar = [];
const smo271812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo271812.setAttribute('id', 'smo271812');
smo271833v0ar.push(smo271812);
const smo271813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo271813.setAttribute('id', 'smo271813');
const smo271814 = new VF.Annotation('a');
smo271814.setAttribute('id', 'smo271814');
smo271814.setFont('times', 12, 'normal');
smo271814.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271813.addModifier(smo271814);
smo271814.addClass('lyric lyric-0');
smo271833v0ar.push(smo271813);
const smo271815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo271815.setAttribute('id', 'smo271815');
smo271833v0ar.push(smo271815);
const smo271816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo271816.setAttribute('id', 'smo271816');
smo271833v0ar.push(smo271816);
const smo271817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo271817.setAttribute('id', 'smo271817');
smo271833v0ar.push(smo271817);
smo271833v0.addTickables(smo271833v0ar)
fmtsmo27183367.joinVoices([smo271833v0]);
const fmtsmo27494567 = new VF.Formatter();
//
// voices and notes for stave 6 67
const smo274945v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo274945v0ar = [];
const smo274924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo274924.setAttribute('id', 'smo274924');
smo274945v0ar.push(smo274924);
const smo274925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo274925.setAttribute('id', 'smo274925');
const smo274926 = new VF.Annotation('a');
smo274926.setAttribute('id', 'smo274926');
smo274926.setFont('times', 12, 'normal');
smo274926.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo274925.addModifier(smo274926);
smo274926.addClass('lyric lyric-0');
smo274945v0ar.push(smo274925);
const smo274927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo274927.setAttribute('id', 'smo274927');
smo274945v0ar.push(smo274927);
const smo274928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo274928.setAttribute('id', 'smo274928');
smo274945v0ar.push(smo274928);
const smo274929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo274929.setAttribute('id', 'smo274929');
smo274945v0ar.push(smo274929);
smo274945v0.addTickables(smo274945v0ar)
fmtsmo27494567.joinVoices([smo274945v0]);
const fmtsmo27805467 = new VF.Formatter();
//
// voices and notes for stave 7 67
const smo278054v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278054v0ar = [];
const smo278033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo278033.setAttribute('id', 'smo278033');
smo278054v0ar.push(smo278033);
const smo278034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo278034.setAttribute('id', 'smo278034');
const smo278035 = new VF.Annotation('a');
smo278035.setAttribute('id', 'smo278035');
smo278035.setFont('times', 12, 'normal');
smo278035.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278034.addModifier(smo278035);
smo278035.addClass('lyric lyric-0');
smo278054v0ar.push(smo278034);
const smo278036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278036.setAttribute('id', 'smo278036');
smo278054v0ar.push(smo278036);
const smo278037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278037.setAttribute('id', 'smo278037');
smo278054v0ar.push(smo278037);
const smo278038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278038.setAttribute('id', 'smo278038');
smo278054v0ar.push(smo278038);
smo278054v0.addTickables(smo278054v0ar)
fmtsmo27805467.joinVoices([smo278054v0]);
const fmtsmo28114067 = new VF.Formatter();
//
// voices and notes for stave 8 67
const smo281140v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281140v0ar = [];
const smo281119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281119.setAttribute('id', 'smo281119');
smo281140v0ar.push(smo281119);
const smo281120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo281120.setAttribute('id', 'smo281120');
const smo281121 = new VF.Annotation('a');
smo281121.setAttribute('id', 'smo281121');
smo281121.setFont('times', 12, 'normal');
smo281121.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281120.addModifier(smo281121);
smo281121.addClass('lyric lyric-0');
smo281140v0ar.push(smo281120);
const smo281122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281122.setAttribute('id', 'smo281122');
smo281140v0ar.push(smo281122);
const smo281123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281123.setAttribute('id', 'smo281123');
smo281140v0ar.push(smo281123);
const smo281124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281124.setAttribute('id', 'smo281124');
smo281140v0ar.push(smo281124);
smo281140v0.addTickables(smo281140v0ar)
fmtsmo28114067.joinVoices([smo281140v0]);
const fmtsmo28422967 = new VF.Formatter();
//
// voices and notes for stave 9 67
const smo284229v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284229v0ar = [];
const smo284208 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo284208.setAttribute('id', 'smo284208');
smo284229v0ar.push(smo284208);
const smo284209 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo284209.setAttribute('id', 'smo284209');
const smo284210 = new VF.Annotation('a');
smo284210.setAttribute('id', 'smo284210');
smo284210.setFont('times', 12, 'normal');
smo284210.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284209.addModifier(smo284210);
smo284210.addClass('lyric lyric-0');
smo284229v0ar.push(smo284209);
const smo284211 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo284211.setAttribute('id', 'smo284211');
smo284229v0ar.push(smo284211);
const smo284212 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo284212.setAttribute('id', 'smo284212');
smo284229v0ar.push(smo284212);
const smo284213 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo284213.setAttribute('id', 'smo284213');
smo284229v0ar.push(smo284213);
smo284229v0.addTickables(smo284229v0ar)
fmtsmo28422967.joinVoices([smo284229v0]);
const fmtsmo28726967 = new VF.Formatter();
//
// voices and notes for stave 10 67
const smo287269v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287269v0ar = [];
const smo287248 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287248.setAttribute('id', 'smo287248');
smo287269v0ar.push(smo287248);
const smo287249 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo287249.setAttribute('id', 'smo287249');
const smo287250 = new VF.Annotation('a');
smo287250.setAttribute('id', 'smo287250');
smo287250.setFont('times', 12, 'normal');
smo287250.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287249.addModifier(smo287250);
smo287250.addClass('lyric lyric-0');
smo287269v0ar.push(smo287249);
const smo287251 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287251.setAttribute('id', 'smo287251');
smo287269v0ar.push(smo287251);
const smo287252 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287252.setAttribute('id', 'smo287252');
smo287269v0ar.push(smo287252);
const smo287253 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287253.setAttribute('id', 'smo287253');
smo287269v0ar.push(smo287253);
smo287269v0.addTickables(smo287269v0ar)
fmtsmo28726967.joinVoices([smo287269v0]);
const fmtsmo29032367 = new VF.Formatter();
//
// voices and notes for stave 11 67
const smo290323v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290323v0ar = [];
const smo290302 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290302.setAttribute('id', 'smo290302');
smo290323v0ar.push(smo290302);
const smo290303 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo290303.setAttribute('id', 'smo290303');
const smo290304 = new VF.Annotation('a');
smo290304.setAttribute('id', 'smo290304');
smo290304.setFont('times', 12, 'normal');
smo290304.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290303.addModifier(smo290304);
smo290304.addClass('lyric lyric-0');
smo290323v0ar.push(smo290303);
const smo290305 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290305.setAttribute('id', 'smo290305');
smo290323v0ar.push(smo290305);
const smo290306 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290306.setAttribute('id', 'smo290306');
smo290323v0ar.push(smo290306);
const smo290307 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290307.setAttribute('id', 'smo290307');
smo290323v0ar.push(smo290307);
smo290323v0.addTickables(smo290323v0ar)
fmtsmo29032367.joinVoices([smo290323v0]);
const fmtsmo29336667 = new VF.Formatter();
//
// voices and notes for stave 12 67
const smo293366v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293366v0ar = [];
const smo293345 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293345.setAttribute('id', 'smo293345');
smo293366v0ar.push(smo293345);
const smo293346 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo293346.setAttribute('id', 'smo293346');
const smo293347 = new VF.Annotation('a');
smo293347.setAttribute('id', 'smo293347');
smo293347.setFont('times', 12, 'normal');
smo293347.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293346.addModifier(smo293347);
smo293347.addClass('lyric lyric-0');
smo293366v0ar.push(smo293346);
const smo293348 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293348.setAttribute('id', 'smo293348');
smo293366v0ar.push(smo293348);
const smo293349 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293349.setAttribute('id', 'smo293349');
smo293366v0ar.push(smo293349);
const smo293350 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293350.setAttribute('id', 'smo293350');
smo293366v0ar.push(smo293350);
smo293366v0.addTickables(smo293366v0ar)
fmtsmo29336667.joinVoices([smo293366v0]);
const fmtsmo29656567 = new VF.Formatter();
//
// voices and notes for stave 13 67
const smo296565v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296565v0ar = [];
const smo296544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo296544.setAttribute('id', 'smo296544');
smo296544.addModifier(new VF.Dot(), 0);
smo296544.addModifier(new VF.Dot(), 1);
smo296544.addModifier(new VF.Dot(), 2);
smo296565v0ar.push(smo296544);
const smo296545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo296545.setAttribute('id', 'smo296545');
smo296565v0ar.push(smo296545);
const smo296546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo296546.setAttribute('id', 'smo296546');
smo296565v0ar.push(smo296546);
const smo296547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo296547.setAttribute('id', 'smo296547');
smo296565v0ar.push(smo296547);
const smo296548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo296548.setAttribute('id', 'smo296548');
smo296565v0ar.push(smo296548);
const smo296549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo296549.setAttribute('id', 'smo296549');
smo296565v0ar.push(smo296549);
smo296565v0.addTickables(smo296565v0ar)
fmtsmo29656567.joinVoices([smo296565v0]);
const fmtsmo29977867 = new VF.Formatter();
//
// voices and notes for stave 14 67
const smo299778v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo299778v0ar = [];
const smo299757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo299757.setAttribute('id', 'smo299757');
smo299757.addModifier(new VF.Dot(), 0);
smo299757.addModifier(new VF.Dot(), 1);
smo299757.addModifier(new VF.Dot(), 2);
smo299778v0ar.push(smo299757);
const smo299758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo299758.setAttribute('id', 'smo299758');
smo299778v0ar.push(smo299758);
const smo299759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo299759.setAttribute('id', 'smo299759');
smo299778v0ar.push(smo299759);
const smo299760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo299760.setAttribute('id', 'smo299760');
smo299778v0ar.push(smo299760);
const smo299761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo299761.setAttribute('id', 'smo299761');
smo299778v0ar.push(smo299761);
const smo299762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo299762.setAttribute('id', 'smo299762');
smo299778v0ar.push(smo299762);
smo299778v0.addTickables(smo299778v0ar)
fmtsmo29977867.joinVoices([smo299778v0]);
const fmtsmo30297367 = new VF.Formatter();
//
// voices and notes for stave 15 67
const smo302973v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo302973v0ar = [];
const smo302952 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo302952.setAttribute('id', 'smo302952');
smo302952.addModifier(new VF.Dot(), 0);
smo302973v0ar.push(smo302952);
const smo302953 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo302953.setAttribute('id', 'smo302953');
smo302973v0ar.push(smo302953);
const smo302954 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo302954.setAttribute('id', 'smo302954');
smo302973v0ar.push(smo302954);
const smo302955 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo302955.setAttribute('id', 'smo302955');
smo302973v0ar.push(smo302955);
const smo302956 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo302956.setAttribute('id', 'smo302956');
smo302973v0ar.push(smo302956);
const smo302957 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo302957.setAttribute('id', 'smo302957');
smo302973v0ar.push(smo302957);
smo302973v0.addTickables(smo302973v0ar)
fmtsmo30297367.joinVoices([smo302973v0]);
const fmtsmo30608667 = new VF.Formatter();
//
// voices and notes for stave 16 67
const smo306086v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306086v0ar = [];
const smo306067 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo306067.setAttribute('id', 'smo306067');
smo306086v0ar.push(smo306067);
const smo306068 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo306068.setAttribute('id', 'smo306068');
smo306086v0ar.push(smo306068);
const smo306069 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo306069.setAttribute('id', 'smo306069');
smo306086v0ar.push(smo306069);
const smo306070 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo306070.setAttribute('id', 'smo306070');
smo306086v0ar.push(smo306070);
smo306086v0.addTickables(smo306086v0ar)
fmtsmo30608667.joinVoices([smo306086v0]);
const fmtsmo30928567 = new VF.Formatter();
//
// voices and notes for stave 17 67
const smo309285v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309285v0ar = [];
const smo309266 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309266.setAttribute('id', 'smo309266');
smo309285v0ar.push(smo309266);
const smo309267 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309267.setAttribute('id', 'smo309267');
smo309267.setStyle({ fillStyle: "#ffffff00" });
smo309285v0ar.push(smo309267);
smo309285v0.addTickables(smo309285v0ar)
fmtsmo30928567.joinVoices([smo309285v0]);
const smo309285v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309285v1ar = [];
const smo309268 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309268.setAttribute('id', 'smo309268');
smo309268.setStyle({ fillStyle: '#aaaaaa7f' });
smo309285v1ar.push(smo309268);
const smo309269 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309269.setAttribute('id', 'smo309269');
smo309269.setStyle({ fillStyle: "#115511" });
smo309285v1ar.push(smo309269);
smo309285v1.addTickables(smo309285v1ar)
fmtsmo30928567.joinVoices([smo309285v1]);
// create beam groups and tuplets for format grp smo310988 before formatting
const dirsmo402496 = smo256433.getStemDirection();
smo256433.setStemDirection(dirsmo402496);
smo256434.setStemDirection(dirsmo402496);
const smo402496 = new VF.Beam([smo256433,smo256434]);
const dirsmo402499 = smo259427.getStemDirection();
smo259427.setStemDirection(dirsmo402499);
smo259428.setStemDirection(dirsmo402499);
const smo402499 = new VF.Beam([smo259427,smo259428]);
const dirsmo402502 = smo262570.getStemDirection();
smo262570.setStemDirection(dirsmo402502);
smo262571.setStemDirection(dirsmo402502);
const smo402502 = new VF.Beam([smo262570,smo262571]);
const dirsmo402505 = smo265686.getStemDirection();
smo265686.setStemDirection(dirsmo402505);
smo265687.setStemDirection(dirsmo402505);
const smo402505 = new VF.Beam([smo265686,smo265687]);
const dirsmo402508 = smo268705.getStemDirection();
smo268705.setStemDirection(dirsmo402508);
smo268706.setStemDirection(dirsmo402508);
const smo402508 = new VF.Beam([smo268705,smo268706]);
 
// formatting measures in staff group smo310988
fmtsmo25645467.format([smo256454v0,smo259447v0,smo262591v0,smo265707v0,smo268726v0], 288);
const stavesmo256454 = new VF.Stave(1435, 210, 302);
stavesmo256454.setAttribute('id', 'stavesmo256454');
stavesmo256454.setBegBarType(VF.Barline.type.NONE);
stavesmo256454.setContext(context);
stavesmo256454.draw();
smo256454v0.draw(context, stavesmo256454);
smo402496.setContext(context);
smo402496.draw();
const stavesmo259447 = new VF.Stave(1435, 316, 302);
stavesmo259447.setAttribute('id', 'stavesmo259447');
stavesmo259447.setBegBarType(VF.Barline.type.NONE);
stavesmo259447.setContext(context);
stavesmo259447.draw();
smo259447v0.draw(context, stavesmo259447);
smo402499.setContext(context);
smo402499.draw();
const stavesmo262591 = new VF.Stave(1435, 437, 302);
stavesmo262591.setAttribute('id', 'stavesmo262591');
stavesmo262591.setBegBarType(VF.Barline.type.NONE);
stavesmo262591.setContext(context);
stavesmo262591.draw();
smo262591v0.draw(context, stavesmo262591);
smo402502.setContext(context);
smo402502.draw();
const stavesmo265707 = new VF.Stave(1435, 553, 302);
stavesmo265707.setAttribute('id', 'stavesmo265707');
stavesmo265707.setBegBarType(VF.Barline.type.NONE);
stavesmo265707.setContext(context);
stavesmo265707.draw();
smo265707v0.draw(context, stavesmo265707);
smo402505.setContext(context);
smo402505.draw();
const stavesmo268726 = new VF.Stave(1435, 659, 302);
stavesmo268726.setAttribute('id', 'stavesmo268726');
stavesmo268726.setBegBarType(VF.Barline.type.NONE);
stavesmo268726.setContext(context);
stavesmo268726.draw();
smo268726v0.draw(context, stavesmo268726);
smo402508.setContext(context);
smo402508.draw();
// create beam groups and tuplets for format grp smo310990 before formatting
const dirsmo402511 = smo271812.getStemDirection();
smo271812.setStemDirection(dirsmo402511);
smo271813.setStemDirection(dirsmo402511);
const smo402511 = new VF.Beam([smo271812,smo271813]);
const dirsmo402514 = smo274924.getStemDirection();
smo274924.setStemDirection(dirsmo402514);
smo274925.setStemDirection(dirsmo402514);
const smo402514 = new VF.Beam([smo274924,smo274925]);
const dirsmo402517 = smo278033.getStemDirection();
smo278033.setStemDirection(dirsmo402517);
smo278034.setStemDirection(dirsmo402517);
const smo402517 = new VF.Beam([smo278033,smo278034]);
const dirsmo402520 = smo281119.getStemDirection();
smo281119.setStemDirection(dirsmo402520);
smo281120.setStemDirection(dirsmo402520);
const smo402520 = new VF.Beam([smo281119,smo281120]);
 
// formatting measures in staff group smo310990
fmtsmo27183367.format([smo271833v0,smo274945v0,smo278054v0,smo281140v0], 288);
const stavesmo271833 = new VF.Stave(1435, 780, 302);
stavesmo271833.setAttribute('id', 'stavesmo271833');
stavesmo271833.setBegBarType(VF.Barline.type.NONE);
stavesmo271833.setContext(context);
stavesmo271833.draw();
smo271833v0.draw(context, stavesmo271833);
smo402511.setContext(context);
smo402511.draw();
const stavesmo274945 = new VF.Stave(1435, 896, 302);
stavesmo274945.setAttribute('id', 'stavesmo274945');
stavesmo274945.setBegBarType(VF.Barline.type.NONE);
stavesmo274945.setContext(context);
stavesmo274945.draw();
smo274945v0.draw(context, stavesmo274945);
smo402514.setContext(context);
smo402514.draw();
const stavesmo278054 = new VF.Stave(1435, 1012, 302);
stavesmo278054.setAttribute('id', 'stavesmo278054');
stavesmo278054.setBegBarType(VF.Barline.type.NONE);
stavesmo278054.setContext(context);
stavesmo278054.draw();
smo278054v0.draw(context, stavesmo278054);
smo402517.setContext(context);
smo402517.draw();
const stavesmo281140 = new VF.Stave(1435, 1128, 302);
stavesmo281140.setAttribute('id', 'stavesmo281140');
stavesmo281140.setBegBarType(VF.Barline.type.NONE);
stavesmo281140.setContext(context);
stavesmo281140.draw();
smo281140v0.draw(context, stavesmo281140);
smo402520.setContext(context);
smo402520.draw();
// create beam groups and tuplets for format grp smo310992 before formatting
const dirsmo402523 = smo284208.getStemDirection();
smo284208.setStemDirection(dirsmo402523);
smo284209.setStemDirection(dirsmo402523);
const smo402523 = new VF.Beam([smo284208,smo284209]);
const dirsmo402526 = smo287248.getStemDirection();
smo287248.setStemDirection(dirsmo402526);
smo287249.setStemDirection(dirsmo402526);
const smo402526 = new VF.Beam([smo287248,smo287249]);
const dirsmo402529 = smo290302.getStemDirection();
smo290302.setStemDirection(dirsmo402529);
smo290303.setStemDirection(dirsmo402529);
const smo402529 = new VF.Beam([smo290302,smo290303]);
const dirsmo402532 = smo293345.getStemDirection();
smo293345.setStemDirection(dirsmo402532);
smo293346.setStemDirection(dirsmo402532);
const smo402532 = new VF.Beam([smo293345,smo293346]);
 
// formatting measures in staff group smo310992
fmtsmo28422967.format([smo284229v0,smo287269v0,smo290323v0,smo293366v0], 288);
const stavesmo284229 = new VF.Stave(1435, 1264, 302);
stavesmo284229.setAttribute('id', 'stavesmo284229');
stavesmo284229.setBegBarType(VF.Barline.type.NONE);
stavesmo284229.setContext(context);
stavesmo284229.draw();
smo284229v0.draw(context, stavesmo284229);
smo402523.setContext(context);
smo402523.draw();
const stavesmo287269 = new VF.Stave(1435, 1400, 302);
stavesmo287269.setAttribute('id', 'stavesmo287269');
stavesmo287269.setBegBarType(VF.Barline.type.NONE);
stavesmo287269.setContext(context);
stavesmo287269.draw();
smo287269v0.draw(context, stavesmo287269);
smo402526.setContext(context);
smo402526.draw();
const stavesmo290323 = new VF.Stave(1435, 1536, 302);
stavesmo290323.setAttribute('id', 'stavesmo290323');
stavesmo290323.setBegBarType(VF.Barline.type.NONE);
stavesmo290323.setContext(context);
stavesmo290323.draw();
smo290323v0.draw(context, stavesmo290323);
smo402529.setContext(context);
smo402529.draw();
const stavesmo293366 = new VF.Stave(1435, 1672, 302);
stavesmo293366.setAttribute('id', 'stavesmo293366');
stavesmo293366.setBegBarType(VF.Barline.type.NONE);
stavesmo293366.setContext(context);
stavesmo293366.draw();
smo293366v0.draw(context, stavesmo293366);
smo402532.setContext(context);
smo402532.draw();
// create beam groups and tuplets for format grp smo298311 before formatting
const dirsmo402535 = smo296545.getStemDirection();
smo296545.setStemDirection(dirsmo402535);
smo296546.setStemDirection(dirsmo402535);
smo296547.setStemDirection(dirsmo402535);
smo296548.setStemDirection(dirsmo402535);
const smo402535 = new VF.Beam([smo296545,smo296546,smo296547,smo296548]);
 
// formatting measures in staff group smo298311
fmtsmo29656567.format([smo296565v0], 288);
const stavesmo296565 = new VF.Stave(1435, 1818, 302);
stavesmo296565.setAttribute('id', 'stavesmo296565');
stavesmo296565.setBegBarType(VF.Barline.type.NONE);
stavesmo296565.setContext(context);
stavesmo296565.draw();
smo296565v0.draw(context, stavesmo296565);
smo402535.setContext(context);
smo402535.draw();
// create beam groups and tuplets for format grp smo310986 before formatting
const dirsmo402538 = smo299758.getStemDirection();
smo299758.setStemDirection(dirsmo402538);
smo299759.setStemDirection(dirsmo402538);
smo299760.setStemDirection(dirsmo402538);
smo299761.setStemDirection(dirsmo402538);
const smo402538 = new VF.Beam([smo299758,smo299759,smo299760,smo299761]);
const dirsmo402541 = smo302953.getStemDirection();
smo302953.setStemDirection(dirsmo402541);
smo302954.setStemDirection(dirsmo402541);
smo302955.setStemDirection(dirsmo402541);
smo302956.setStemDirection(dirsmo402541);
const smo402541 = new VF.Beam([smo302953,smo302954,smo302955,smo302956]);
 
// formatting measures in staff group smo310986
fmtsmo29977867.format([smo299778v0,smo302973v0], 288);
const stavesmo299778 = new VF.Stave(1435, 1924, 302);
stavesmo299778.setAttribute('id', 'stavesmo299778');
stavesmo299778.setBegBarType(VF.Barline.type.NONE);
stavesmo299778.setContext(context);
stavesmo299778.draw();
smo299778v0.draw(context, stavesmo299778);
smo402538.setContext(context);
smo402538.draw();
const stavesmo302973 = new VF.Stave(1435, 2010, 302);
stavesmo302973.setAttribute('id', 'stavesmo302973');
stavesmo302973.setBegBarType(VF.Barline.type.NONE);
stavesmo302973.setContext(context);
stavesmo302973.draw();
smo302973v0.draw(context, stavesmo302973);
smo402541.setContext(context);
smo402541.draw();
// create beam groups and tuplets for format grp smo307824 before formatting
 
// formatting measures in staff group smo307824
fmtsmo30608667.format([smo306086v0], 288);
const stavesmo306086 = new VF.Stave(1435, 2081, 302);
stavesmo306086.setAttribute('id', 'stavesmo306086');
stavesmo306086.setBegBarType(VF.Barline.type.NONE);
stavesmo306086.setContext(context);
stavesmo306086.draw();
smo306086v0.draw(context, stavesmo306086);
// create beam groups and tuplets for format grp smo310980 before formatting
 
// formatting measures in staff group smo310980
fmtsmo30928567.format([smo309285v0,smo309285v1], 288);
const stavesmo309285 = new VF.Stave(1435, 2152, 302);
stavesmo309285.setAttribute('id', 'stavesmo309285');
stavesmo309285.setBegBarType(VF.Barline.type.NONE);
stavesmo309285.setContext(context);
stavesmo309285.draw();
smo309285v0.draw(context, stavesmo309285);
smo309285v1.draw(context, stavesmo309285);
const fmtsmo25647168 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo256471v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo256471v0ar = [];
const smo256455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo256455.setAttribute('id', 'smo256455');
smo256471v0ar.push(smo256455);
smo256471v0.addTickables(smo256471v0ar)
fmtsmo25647168.joinVoices([smo256471v0]);
const fmtsmo25946468 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo259464v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259464v0ar = [];
const smo259448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259448.setAttribute('id', 'smo259448');
smo259464v0ar.push(smo259448);
smo259464v0.addTickables(smo259464v0ar)
fmtsmo25946468.joinVoices([smo259464v0]);
const fmtsmo26260868 = new VF.Formatter();
//
// voices and notes for stave 2 68
const smo262608v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo262608v0ar = [];
const smo262592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262592.setAttribute('id', 'smo262592');
smo262608v0ar.push(smo262592);
smo262608v0.addTickables(smo262608v0ar)
fmtsmo26260868.joinVoices([smo262608v0]);
const fmtsmo26572468 = new VF.Formatter();
//
// voices and notes for stave 3 68
const smo265724v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo265724v0ar = [];
const smo265708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo265708.setAttribute('id', 'smo265708');
smo265724v0ar.push(smo265708);
smo265724v0.addTickables(smo265724v0ar)
fmtsmo26572468.joinVoices([smo265724v0]);
const fmtsmo26874368 = new VF.Formatter();
//
// voices and notes for stave 4 68
const smo268743v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo268743v0ar = [];
const smo268727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo268727.setAttribute('id', 'smo268727');
smo268743v0ar.push(smo268727);
smo268743v0.addTickables(smo268743v0ar)
fmtsmo26874368.joinVoices([smo268743v0]);
const fmtsmo27185368 = new VF.Formatter();
//
// voices and notes for stave 5 68
const smo271853v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo271853v0ar = [];
const smo271834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo271834.setAttribute('id', 'smo271834');
smo271853v0ar.push(smo271834);
const smo271835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo271835.setAttribute('id', 'smo271835');
smo271853v0ar.push(smo271835);
const smo271836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo271836.setAttribute('id', 'smo271836');
smo271853v0ar.push(smo271836);
const smo271837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo271837.setAttribute('id', 'smo271837');
smo271853v0ar.push(smo271837);
smo271853v0.addTickables(smo271853v0ar)
fmtsmo27185368.joinVoices([smo271853v0]);
const fmtsmo27496268 = new VF.Formatter();
//
// voices and notes for stave 6 68
const smo274962v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo274962v0ar = [];
const smo274946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo274946.setAttribute('id', 'smo274946');
smo274962v0ar.push(smo274946);
smo274962v0.addTickables(smo274962v0ar)
fmtsmo27496268.joinVoices([smo274962v0]);
const fmtsmo27807168 = new VF.Formatter();
//
// voices and notes for stave 7 68
const smo278071v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278071v0ar = [];
const smo278055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278055.setAttribute('id', 'smo278055');
smo278071v0ar.push(smo278055);
smo278071v0.addTickables(smo278071v0ar)
fmtsmo27807168.joinVoices([smo278071v0]);
const fmtsmo28115768 = new VF.Formatter();
//
// voices and notes for stave 8 68
const smo281157v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281157v0ar = [];
const smo281141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281141.setAttribute('id', 'smo281141');
smo281157v0ar.push(smo281141);
smo281157v0.addTickables(smo281157v0ar)
fmtsmo28115768.joinVoices([smo281157v0]);
const fmtsmo28424668 = new VF.Formatter();
//
// voices and notes for stave 9 68
const smo284246v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284246v0ar = [];
const smo284230 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo284230.setAttribute('id', 'smo284230');
smo284246v0ar.push(smo284230);
smo284246v0.addTickables(smo284246v0ar)
fmtsmo28424668.joinVoices([smo284246v0]);
const fmtsmo28728668 = new VF.Formatter();
//
// voices and notes for stave 10 68
const smo287286v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287286v0ar = [];
const smo287270 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287270.setAttribute('id', 'smo287270');
smo287286v0ar.push(smo287270);
smo287286v0.addTickables(smo287286v0ar)
fmtsmo28728668.joinVoices([smo287286v0]);
const fmtsmo29034068 = new VF.Formatter();
//
// voices and notes for stave 11 68
const smo290340v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290340v0ar = [];
const smo290324 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290324.setAttribute('id', 'smo290324');
smo290340v0ar.push(smo290324);
smo290340v0.addTickables(smo290340v0ar)
fmtsmo29034068.joinVoices([smo290340v0]);
const fmtsmo29338368 = new VF.Formatter();
//
// voices and notes for stave 12 68
const smo293383v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293383v0ar = [];
const smo293367 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293367.setAttribute('id', 'smo293367');
smo293383v0ar.push(smo293367);
smo293383v0.addTickables(smo293383v0ar)
fmtsmo29338368.joinVoices([smo293383v0]);
const fmtsmo29658268 = new VF.Formatter();
//
// voices and notes for stave 13 68
const smo296582v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296582v0ar = [];
const smo296566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo296566.setAttribute('id', 'smo296566');
smo296582v0ar.push(smo296566);
smo296582v0.addTickables(smo296582v0ar)
fmtsmo29658268.joinVoices([smo296582v0]);
const fmtsmo29979568 = new VF.Formatter();
//
// voices and notes for stave 14 68
const smo299795v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo299795v0ar = [];
const smo299779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo299779.setAttribute('id', 'smo299779');
smo299795v0ar.push(smo299779);
smo299795v0.addTickables(smo299795v0ar)
fmtsmo29979568.joinVoices([smo299795v0]);
const fmtsmo30299068 = new VF.Formatter();
//
// voices and notes for stave 15 68
const smo302990v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo302990v0ar = [];
const smo302974 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo302974.setAttribute('id', 'smo302974');
smo302990v0ar.push(smo302974);
smo302990v0.addTickables(smo302990v0ar)
fmtsmo30299068.joinVoices([smo302990v0]);
const fmtsmo30610668 = new VF.Formatter();
//
// voices and notes for stave 16 68
const smo306106v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306106v0ar = [];
const smo306087 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo306087.setAttribute('id', 'smo306087');
smo306087.addModifier(new VF.Dot(), 0);
smo306106v0ar.push(smo306087);
const smo306088 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo306088.setAttribute('id', 'smo306088');
smo306106v0ar.push(smo306088);
const smo306089 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo306089.setAttribute('id', 'smo306089');
smo306106v0ar.push(smo306089);
const smo306090 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo306090.setAttribute('id', 'smo306090');
smo306106v0ar.push(smo306090);
smo306106v0.addTickables(smo306106v0ar)
fmtsmo30610668.joinVoices([smo306106v0]);
const fmtsmo30930568 = new VF.Formatter();
//
// voices and notes for stave 17 68
const smo309305v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309305v0ar = [];
const smo309286 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309286.setAttribute('id', 'smo309286');
smo309305v0ar.push(smo309286);
const smo309287 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309287.setAttribute('id', 'smo309287');
smo309287.setStyle({ fillStyle: "#ffffff00" });
smo309305v0ar.push(smo309287);
smo309305v0.addTickables(smo309305v0ar)
fmtsmo30930568.joinVoices([smo309305v0]);
const smo309305v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309305v1ar = [];
const smo309288 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309288.setAttribute('id', 'smo309288');
smo309288.setStyle({ fillStyle: '#aaaaaa7f' });
smo309305v1ar.push(smo309288);
const smo309289 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309289.setAttribute('id', 'smo309289');
smo309289.setStyle({ fillStyle: "#115511" });
smo309305v1ar.push(smo309289);
smo309305v1.addTickables(smo309305v1ar)
fmtsmo30930568.joinVoices([smo309305v1]);
// create beam groups and tuplets for format grp smo310988 before formatting
 
// formatting measures in staff group smo310988
fmtsmo25647168.format([smo256471v0,smo259464v0,smo262608v0,smo265724v0,smo268743v0], 288);
const stavesmo256471 = new VF.Stave(1737, 210, 302);
stavesmo256471.setAttribute('id', 'stavesmo256471');
stavesmo256471.setBegBarType(VF.Barline.type.NONE);
stavesmo256471.setContext(context);
stavesmo256471.draw();
smo256471v0.draw(context, stavesmo256471);
const stavesmo259464 = new VF.Stave(1737, 316, 302);
stavesmo259464.setAttribute('id', 'stavesmo259464');
stavesmo259464.setBegBarType(VF.Barline.type.NONE);
stavesmo259464.setContext(context);
stavesmo259464.draw();
smo259464v0.draw(context, stavesmo259464);
const stavesmo262608 = new VF.Stave(1737, 437, 302);
stavesmo262608.setAttribute('id', 'stavesmo262608');
stavesmo262608.setBegBarType(VF.Barline.type.NONE);
stavesmo262608.setContext(context);
stavesmo262608.draw();
smo262608v0.draw(context, stavesmo262608);
const stavesmo265724 = new VF.Stave(1737, 553, 302);
stavesmo265724.setAttribute('id', 'stavesmo265724');
stavesmo265724.setBegBarType(VF.Barline.type.NONE);
stavesmo265724.setContext(context);
stavesmo265724.draw();
smo265724v0.draw(context, stavesmo265724);
const stavesmo268743 = new VF.Stave(1737, 659, 302);
stavesmo268743.setAttribute('id', 'stavesmo268743');
stavesmo268743.setBegBarType(VF.Barline.type.NONE);
stavesmo268743.setContext(context);
stavesmo268743.draw();
smo268743v0.draw(context, stavesmo268743);
// create beam groups and tuplets for format grp smo310990 before formatting
 
// formatting measures in staff group smo310990
fmtsmo27185368.format([smo271853v0,smo274962v0,smo278071v0,smo281157v0], 288);
const stavesmo271853 = new VF.Stave(1737, 780, 302);
stavesmo271853.setAttribute('id', 'stavesmo271853');
stavesmo271853.setBegBarType(VF.Barline.type.NONE);
stavesmo271853.setContext(context);
stavesmo271853.draw();
smo271853v0.draw(context, stavesmo271853);
const stavesmo274962 = new VF.Stave(1737, 896, 302);
stavesmo274962.setAttribute('id', 'stavesmo274962');
stavesmo274962.setBegBarType(VF.Barline.type.NONE);
stavesmo274962.setContext(context);
stavesmo274962.draw();
smo274962v0.draw(context, stavesmo274962);
const stavesmo278071 = new VF.Stave(1737, 1012, 302);
stavesmo278071.setAttribute('id', 'stavesmo278071');
stavesmo278071.setBegBarType(VF.Barline.type.NONE);
stavesmo278071.setContext(context);
stavesmo278071.draw();
smo278071v0.draw(context, stavesmo278071);
const stavesmo281157 = new VF.Stave(1737, 1128, 302);
stavesmo281157.setAttribute('id', 'stavesmo281157');
stavesmo281157.setBegBarType(VF.Barline.type.NONE);
stavesmo281157.setContext(context);
stavesmo281157.draw();
smo281157v0.draw(context, stavesmo281157);
// create beam groups and tuplets for format grp smo310992 before formatting
 
// formatting measures in staff group smo310992
fmtsmo28424668.format([smo284246v0,smo287286v0,smo290340v0,smo293383v0], 288);
const stavesmo284246 = new VF.Stave(1737, 1264, 302);
stavesmo284246.setAttribute('id', 'stavesmo284246');
stavesmo284246.setBegBarType(VF.Barline.type.NONE);
stavesmo284246.setContext(context);
stavesmo284246.draw();
smo284246v0.draw(context, stavesmo284246);
const stavesmo287286 = new VF.Stave(1737, 1400, 302);
stavesmo287286.setAttribute('id', 'stavesmo287286');
stavesmo287286.setBegBarType(VF.Barline.type.NONE);
stavesmo287286.setContext(context);
stavesmo287286.draw();
smo287286v0.draw(context, stavesmo287286);
const stavesmo290340 = new VF.Stave(1737, 1536, 302);
stavesmo290340.setAttribute('id', 'stavesmo290340');
stavesmo290340.setBegBarType(VF.Barline.type.NONE);
stavesmo290340.setContext(context);
stavesmo290340.draw();
smo290340v0.draw(context, stavesmo290340);
const stavesmo293383 = new VF.Stave(1737, 1672, 302);
stavesmo293383.setAttribute('id', 'stavesmo293383');
stavesmo293383.setBegBarType(VF.Barline.type.NONE);
stavesmo293383.setContext(context);
stavesmo293383.draw();
smo293383v0.draw(context, stavesmo293383);
// create beam groups and tuplets for format grp smo298311 before formatting
 
// formatting measures in staff group smo298311
fmtsmo29658268.format([smo296582v0], 288);
const stavesmo296582 = new VF.Stave(1737, 1818, 302);
stavesmo296582.setAttribute('id', 'stavesmo296582');
stavesmo296582.setBegBarType(VF.Barline.type.NONE);
stavesmo296582.setContext(context);
stavesmo296582.draw();
smo296582v0.draw(context, stavesmo296582);
// create beam groups and tuplets for format grp smo310986 before formatting
 
// formatting measures in staff group smo310986
fmtsmo29979568.format([smo299795v0,smo302990v0], 288);
const stavesmo299795 = new VF.Stave(1737, 1924, 302);
stavesmo299795.setAttribute('id', 'stavesmo299795');
stavesmo299795.setBegBarType(VF.Barline.type.NONE);
stavesmo299795.setContext(context);
stavesmo299795.draw();
smo299795v0.draw(context, stavesmo299795);
const stavesmo302990 = new VF.Stave(1737, 2010, 302);
stavesmo302990.setAttribute('id', 'stavesmo302990');
stavesmo302990.setBegBarType(VF.Barline.type.NONE);
stavesmo302990.setContext(context);
stavesmo302990.draw();
smo302990v0.draw(context, stavesmo302990);
// create beam groups and tuplets for format grp smo307824 before formatting
 
// formatting measures in staff group smo307824
fmtsmo30610668.format([smo306106v0], 288);
const stavesmo306106 = new VF.Stave(1737, 2081, 302);
stavesmo306106.setAttribute('id', 'stavesmo306106');
stavesmo306106.setBegBarType(VF.Barline.type.NONE);
stavesmo306106.setContext(context);
stavesmo306106.draw();
smo306106v0.draw(context, stavesmo306106);
// create beam groups and tuplets for format grp smo310980 before formatting
 
// formatting measures in staff group smo310980
fmtsmo30930568.format([smo309305v0,smo309305v1], 288);
const stavesmo309305 = new VF.Stave(1737, 2152, 302);
stavesmo309305.setAttribute('id', 'stavesmo309305');
stavesmo309305.setBegBarType(VF.Barline.type.NONE);
stavesmo309305.setContext(context);
stavesmo309305.draw();
smo309305v0.draw(context, stavesmo309305);
smo309305v1.draw(context, stavesmo309305);
const fmtsmo25648869 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo256488v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo256488v0ar = [];
const smo256472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo256472.setAttribute('id', 'smo256472');
smo256488v0ar.push(smo256472);
smo256488v0.addTickables(smo256488v0ar)
fmtsmo25648869.joinVoices([smo256488v0]);
const fmtsmo25948169 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo259481v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259481v0ar = [];
const smo259465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259465.setAttribute('id', 'smo259465');
smo259481v0ar.push(smo259465);
smo259481v0.addTickables(smo259481v0ar)
fmtsmo25948169.joinVoices([smo259481v0]);
const fmtsmo26262569 = new VF.Formatter();
//
// voices and notes for stave 2 69
const smo262625v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo262625v0ar = [];
const smo262609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262609.setAttribute('id', 'smo262609');
smo262625v0ar.push(smo262609);
smo262625v0.addTickables(smo262625v0ar)
fmtsmo26262569.joinVoices([smo262625v0]);
const fmtsmo26574169 = new VF.Formatter();
//
// voices and notes for stave 3 69
const smo265741v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo265741v0ar = [];
const smo265725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo265725.setAttribute('id', 'smo265725');
smo265741v0ar.push(smo265725);
smo265741v0.addTickables(smo265741v0ar)
fmtsmo26574169.joinVoices([smo265741v0]);
const fmtsmo26876069 = new VF.Formatter();
//
// voices and notes for stave 4 69
const smo268760v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo268760v0ar = [];
const smo268744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo268744.setAttribute('id', 'smo268744');
smo268760v0ar.push(smo268744);
smo268760v0.addTickables(smo268760v0ar)
fmtsmo26876069.joinVoices([smo268760v0]);
const fmtsmo27187369 = new VF.Formatter();
//
// voices and notes for stave 5 69
const smo271873v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo271873v0ar = [];
const smo271854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo271854.setAttribute('id', 'smo271854');
smo271873v0ar.push(smo271854);
const smo271855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo271855.setAttribute('id', 'smo271855');
smo271873v0ar.push(smo271855);
const smo271856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo271856.setAttribute('id', 'smo271856');
smo271873v0ar.push(smo271856);
const smo271857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo271857.setAttribute('id', 'smo271857');
smo271873v0ar.push(smo271857);
smo271873v0.addTickables(smo271873v0ar)
fmtsmo27187369.joinVoices([smo271873v0]);
const fmtsmo27497969 = new VF.Formatter();
//
// voices and notes for stave 6 69
const smo274979v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo274979v0ar = [];
const smo274963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo274963.setAttribute('id', 'smo274963');
smo274979v0ar.push(smo274963);
smo274979v0.addTickables(smo274979v0ar)
fmtsmo27497969.joinVoices([smo274979v0]);
const fmtsmo27808869 = new VF.Formatter();
//
// voices and notes for stave 7 69
const smo278088v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278088v0ar = [];
const smo278072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278072.setAttribute('id', 'smo278072');
smo278088v0ar.push(smo278072);
smo278088v0.addTickables(smo278088v0ar)
fmtsmo27808869.joinVoices([smo278088v0]);
const fmtsmo28117469 = new VF.Formatter();
//
// voices and notes for stave 8 69
const smo281174v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281174v0ar = [];
const smo281158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281158.setAttribute('id', 'smo281158');
smo281174v0ar.push(smo281158);
smo281174v0.addTickables(smo281174v0ar)
fmtsmo28117469.joinVoices([smo281174v0]);
const fmtsmo28426369 = new VF.Formatter();
//
// voices and notes for stave 9 69
const smo284263v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284263v0ar = [];
const smo284247 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo284247.setAttribute('id', 'smo284247');
smo284263v0ar.push(smo284247);
smo284263v0.addTickables(smo284263v0ar)
fmtsmo28426369.joinVoices([smo284263v0]);
const fmtsmo28730369 = new VF.Formatter();
//
// voices and notes for stave 10 69
const smo287303v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287303v0ar = [];
const smo287287 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287287.setAttribute('id', 'smo287287');
smo287303v0ar.push(smo287287);
smo287303v0.addTickables(smo287303v0ar)
fmtsmo28730369.joinVoices([smo287303v0]);
const fmtsmo29035769 = new VF.Formatter();
//
// voices and notes for stave 11 69
const smo290357v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290357v0ar = [];
const smo290341 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290341.setAttribute('id', 'smo290341');
smo290357v0ar.push(smo290341);
smo290357v0.addTickables(smo290357v0ar)
fmtsmo29035769.joinVoices([smo290357v0]);
const fmtsmo29340069 = new VF.Formatter();
//
// voices and notes for stave 12 69
const smo293400v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293400v0ar = [];
const smo293384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293384.setAttribute('id', 'smo293384');
smo293400v0ar.push(smo293384);
smo293400v0.addTickables(smo293400v0ar)
fmtsmo29340069.joinVoices([smo293400v0]);
const fmtsmo29659969 = new VF.Formatter();
//
// voices and notes for stave 13 69
const smo296599v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296599v0ar = [];
const smo296583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo296583.setAttribute('id', 'smo296583');
smo296599v0ar.push(smo296583);
smo296599v0.addTickables(smo296599v0ar)
fmtsmo29659969.joinVoices([smo296599v0]);
const fmtsmo29981269 = new VF.Formatter();
//
// voices and notes for stave 14 69
const smo299812v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo299812v0ar = [];
const smo299796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo299796.setAttribute('id', 'smo299796');
smo299812v0ar.push(smo299796);
smo299812v0.addTickables(smo299812v0ar)
fmtsmo29981269.joinVoices([smo299812v0]);
const fmtsmo30300769 = new VF.Formatter();
//
// voices and notes for stave 15 69
const smo303007v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303007v0ar = [];
const smo302991 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo302991.setAttribute('id', 'smo302991');
smo303007v0ar.push(smo302991);
smo303007v0.addTickables(smo303007v0ar)
fmtsmo30300769.joinVoices([smo303007v0]);
const fmtsmo30612669 = new VF.Formatter();
//
// voices and notes for stave 16 69
const smo306126v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306126v0ar = [];
const smo306107 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo306107.setAttribute('id', 'smo306107');
smo306107.addModifier(new VF.Dot(), 0);
smo306126v0ar.push(smo306107);
const smo306108 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo306108.setAttribute('id', 'smo306108');
smo306126v0ar.push(smo306108);
const smo306109 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo306109.setAttribute('id', 'smo306109');
smo306126v0ar.push(smo306109);
const smo306110 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo306110.setAttribute('id', 'smo306110');
smo306126v0ar.push(smo306110);
smo306126v0.addTickables(smo306126v0ar)
fmtsmo30612669.joinVoices([smo306126v0]);
const fmtsmo30932569 = new VF.Formatter();
//
// voices and notes for stave 17 69
const smo309325v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309325v0ar = [];
const smo309306 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309306.setAttribute('id', 'smo309306');
smo309325v0ar.push(smo309306);
const smo309307 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309307.setAttribute('id', 'smo309307');
smo309307.setStyle({ fillStyle: "#ffffff00" });
smo309325v0ar.push(smo309307);
smo309325v0.addTickables(smo309325v0ar)
fmtsmo30932569.joinVoices([smo309325v0]);
const smo309325v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309325v1ar = [];
const smo309308 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309308.setAttribute('id', 'smo309308');
smo309308.setStyle({ fillStyle: '#aaaaaa7f' });
smo309325v1ar.push(smo309308);
const smo309309 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309309.setAttribute('id', 'smo309309');
smo309309.setStyle({ fillStyle: "#115511" });
smo309325v1ar.push(smo309309);
smo309325v1.addTickables(smo309325v1ar)
fmtsmo30932569.joinVoices([smo309325v1]);
// create beam groups and tuplets for format grp smo310988 before formatting
 
// formatting measures in staff group smo310988
fmtsmo25648869.format([smo256488v0,smo259481v0,smo262625v0,smo265741v0,smo268760v0], 288);
const stavesmo256488 = new VF.Stave(2039, 210, 302);
stavesmo256488.setAttribute('id', 'stavesmo256488');
stavesmo256488.setBegBarType(VF.Barline.type.NONE);
stavesmo256488.setContext(context);
stavesmo256488.draw();
smo256488v0.draw(context, stavesmo256488);
const stavesmo259481 = new VF.Stave(2039, 316, 302);
stavesmo259481.setAttribute('id', 'stavesmo259481');
stavesmo259481.setBegBarType(VF.Barline.type.NONE);
stavesmo259481.setContext(context);
stavesmo259481.draw();
smo259481v0.draw(context, stavesmo259481);
const stavesmo262625 = new VF.Stave(2039, 437, 302);
stavesmo262625.setAttribute('id', 'stavesmo262625');
stavesmo262625.setBegBarType(VF.Barline.type.NONE);
stavesmo262625.setContext(context);
stavesmo262625.draw();
smo262625v0.draw(context, stavesmo262625);
const stavesmo265741 = new VF.Stave(2039, 553, 302);
stavesmo265741.setAttribute('id', 'stavesmo265741');
stavesmo265741.setBegBarType(VF.Barline.type.NONE);
stavesmo265741.setContext(context);
stavesmo265741.draw();
smo265741v0.draw(context, stavesmo265741);
const stavesmo268760 = new VF.Stave(2039, 659, 302);
stavesmo268760.setAttribute('id', 'stavesmo268760');
stavesmo268760.setBegBarType(VF.Barline.type.NONE);
stavesmo268760.setContext(context);
stavesmo268760.draw();
smo268760v0.draw(context, stavesmo268760);
// create beam groups and tuplets for format grp smo310990 before formatting
 
// formatting measures in staff group smo310990
fmtsmo27187369.format([smo271873v0,smo274979v0,smo278088v0,smo281174v0], 288);
const stavesmo271873 = new VF.Stave(2039, 780, 302);
stavesmo271873.setAttribute('id', 'stavesmo271873');
stavesmo271873.setBegBarType(VF.Barline.type.NONE);
stavesmo271873.setContext(context);
stavesmo271873.draw();
smo271873v0.draw(context, stavesmo271873);
const stavesmo274979 = new VF.Stave(2039, 896, 302);
stavesmo274979.setAttribute('id', 'stavesmo274979');
stavesmo274979.setBegBarType(VF.Barline.type.NONE);
stavesmo274979.setContext(context);
stavesmo274979.draw();
smo274979v0.draw(context, stavesmo274979);
const stavesmo278088 = new VF.Stave(2039, 1012, 302);
stavesmo278088.setAttribute('id', 'stavesmo278088');
stavesmo278088.setBegBarType(VF.Barline.type.NONE);
stavesmo278088.setContext(context);
stavesmo278088.draw();
smo278088v0.draw(context, stavesmo278088);
const stavesmo281174 = new VF.Stave(2039, 1128, 302);
stavesmo281174.setAttribute('id', 'stavesmo281174');
stavesmo281174.setBegBarType(VF.Barline.type.NONE);
stavesmo281174.setContext(context);
stavesmo281174.draw();
smo281174v0.draw(context, stavesmo281174);
// create beam groups and tuplets for format grp smo310992 before formatting
 
// formatting measures in staff group smo310992
fmtsmo28426369.format([smo284263v0,smo287303v0,smo290357v0,smo293400v0], 288);
const stavesmo284263 = new VF.Stave(2039, 1264, 302);
stavesmo284263.setAttribute('id', 'stavesmo284263');
stavesmo284263.setBegBarType(VF.Barline.type.NONE);
stavesmo284263.setContext(context);
stavesmo284263.draw();
smo284263v0.draw(context, stavesmo284263);
const stavesmo287303 = new VF.Stave(2039, 1400, 302);
stavesmo287303.setAttribute('id', 'stavesmo287303');
stavesmo287303.setBegBarType(VF.Barline.type.NONE);
stavesmo287303.setContext(context);
stavesmo287303.draw();
smo287303v0.draw(context, stavesmo287303);
const stavesmo290357 = new VF.Stave(2039, 1536, 302);
stavesmo290357.setAttribute('id', 'stavesmo290357');
stavesmo290357.setBegBarType(VF.Barline.type.NONE);
stavesmo290357.setContext(context);
stavesmo290357.draw();
smo290357v0.draw(context, stavesmo290357);
const stavesmo293400 = new VF.Stave(2039, 1672, 302);
stavesmo293400.setAttribute('id', 'stavesmo293400');
stavesmo293400.setBegBarType(VF.Barline.type.NONE);
stavesmo293400.setContext(context);
stavesmo293400.draw();
smo293400v0.draw(context, stavesmo293400);
// create beam groups and tuplets for format grp smo298311 before formatting
 
// formatting measures in staff group smo298311
fmtsmo29659969.format([smo296599v0], 288);
const stavesmo296599 = new VF.Stave(2039, 1818, 302);
stavesmo296599.setAttribute('id', 'stavesmo296599');
stavesmo296599.setBegBarType(VF.Barline.type.NONE);
stavesmo296599.setContext(context);
stavesmo296599.draw();
smo296599v0.draw(context, stavesmo296599);
// create beam groups and tuplets for format grp smo310986 before formatting
 
// formatting measures in staff group smo310986
fmtsmo29981269.format([smo299812v0,smo303007v0], 288);
const stavesmo299812 = new VF.Stave(2039, 1924, 302);
stavesmo299812.setAttribute('id', 'stavesmo299812');
stavesmo299812.setBegBarType(VF.Barline.type.NONE);
stavesmo299812.setContext(context);
stavesmo299812.draw();
smo299812v0.draw(context, stavesmo299812);
const stavesmo303007 = new VF.Stave(2039, 2010, 302);
stavesmo303007.setAttribute('id', 'stavesmo303007');
stavesmo303007.setBegBarType(VF.Barline.type.NONE);
stavesmo303007.setContext(context);
stavesmo303007.draw();
smo303007v0.draw(context, stavesmo303007);
// create beam groups and tuplets for format grp smo307824 before formatting
 
// formatting measures in staff group smo307824
fmtsmo30612669.format([smo306126v0], 288);
const stavesmo306126 = new VF.Stave(2039, 2081, 302);
stavesmo306126.setAttribute('id', 'stavesmo306126');
stavesmo306126.setBegBarType(VF.Barline.type.NONE);
stavesmo306126.setContext(context);
stavesmo306126.draw();
smo306126v0.draw(context, stavesmo306126);
// create beam groups and tuplets for format grp smo310980 before formatting
 
// formatting measures in staff group smo310980
fmtsmo30932569.format([smo309325v0,smo309325v1], 288);
const stavesmo309325 = new VF.Stave(2039, 2152, 302);
stavesmo309325.setAttribute('id', 'stavesmo309325');
stavesmo309325.setBegBarType(VF.Barline.type.NONE);
stavesmo309325.setContext(context);
stavesmo309325.draw();
smo309325v0.draw(context, stavesmo309325);
smo309325v1.draw(context, stavesmo309325);
const fmtsmo25650570 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo256505v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo256505v0ar = [];
const smo256489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo256489.setAttribute('id', 'smo256489');
smo256505v0ar.push(smo256489);
smo256505v0.addTickables(smo256505v0ar)
fmtsmo25650570.joinVoices([smo256505v0]);
const fmtsmo25949870 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo259498v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259498v0ar = [];
const smo259482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259482.setAttribute('id', 'smo259482');
smo259498v0ar.push(smo259482);
smo259498v0.addTickables(smo259498v0ar)
fmtsmo25949870.joinVoices([smo259498v0]);
const fmtsmo26264270 = new VF.Formatter();
//
// voices and notes for stave 2 70
const smo262642v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo262642v0ar = [];
const smo262626 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262626.setAttribute('id', 'smo262626');
smo262642v0ar.push(smo262626);
smo262642v0.addTickables(smo262642v0ar)
fmtsmo26264270.joinVoices([smo262642v0]);
const fmtsmo26575870 = new VF.Formatter();
//
// voices and notes for stave 3 70
const smo265758v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo265758v0ar = [];
const smo265742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo265742.setAttribute('id', 'smo265742');
smo265758v0ar.push(smo265742);
smo265758v0.addTickables(smo265758v0ar)
fmtsmo26575870.joinVoices([smo265758v0]);
const fmtsmo26877770 = new VF.Formatter();
//
// voices and notes for stave 4 70
const smo268777v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo268777v0ar = [];
const smo268761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo268761.setAttribute('id', 'smo268761');
smo268777v0ar.push(smo268761);
smo268777v0.addTickables(smo268777v0ar)
fmtsmo26877770.joinVoices([smo268777v0]);
const fmtsmo27189370 = new VF.Formatter();
//
// voices and notes for stave 5 70
const smo271893v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo271893v0ar = [];
const smo271874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo271874.setAttribute('id', 'smo271874');
smo271893v0ar.push(smo271874);
const smo271875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo271875.setAttribute('id', 'smo271875');
smo271893v0ar.push(smo271875);
const smo271876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo271876.setAttribute('id', 'smo271876');
smo271893v0ar.push(smo271876);
const smo271877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo271877.setAttribute('id', 'smo271877');
smo271893v0ar.push(smo271877);
smo271893v0.addTickables(smo271893v0ar)
fmtsmo27189370.joinVoices([smo271893v0]);
const fmtsmo27499670 = new VF.Formatter();
//
// voices and notes for stave 6 70
const smo274996v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo274996v0ar = [];
const smo274980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo274980.setAttribute('id', 'smo274980');
smo274996v0ar.push(smo274980);
smo274996v0.addTickables(smo274996v0ar)
fmtsmo27499670.joinVoices([smo274996v0]);
const fmtsmo27810570 = new VF.Formatter();
//
// voices and notes for stave 7 70
const smo278105v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278105v0ar = [];
const smo278089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278089.setAttribute('id', 'smo278089');
smo278105v0ar.push(smo278089);
smo278105v0.addTickables(smo278105v0ar)
fmtsmo27810570.joinVoices([smo278105v0]);
const fmtsmo28119170 = new VF.Formatter();
//
// voices and notes for stave 8 70
const smo281191v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281191v0ar = [];
const smo281175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281175.setAttribute('id', 'smo281175');
smo281191v0ar.push(smo281175);
smo281191v0.addTickables(smo281191v0ar)
fmtsmo28119170.joinVoices([smo281191v0]);
const fmtsmo28428070 = new VF.Formatter();
//
// voices and notes for stave 9 70
const smo284280v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284280v0ar = [];
const smo284264 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo284264.setAttribute('id', 'smo284264');
smo284280v0ar.push(smo284264);
smo284280v0.addTickables(smo284280v0ar)
fmtsmo28428070.joinVoices([smo284280v0]);
const fmtsmo28732070 = new VF.Formatter();
//
// voices and notes for stave 10 70
const smo287320v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287320v0ar = [];
const smo287304 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287304.setAttribute('id', 'smo287304');
smo287320v0ar.push(smo287304);
smo287320v0.addTickables(smo287320v0ar)
fmtsmo28732070.joinVoices([smo287320v0]);
const fmtsmo29037470 = new VF.Formatter();
//
// voices and notes for stave 11 70
const smo290374v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290374v0ar = [];
const smo290358 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290358.setAttribute('id', 'smo290358');
smo290374v0ar.push(smo290358);
smo290374v0.addTickables(smo290374v0ar)
fmtsmo29037470.joinVoices([smo290374v0]);
const fmtsmo29341770 = new VF.Formatter();
//
// voices and notes for stave 12 70
const smo293417v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293417v0ar = [];
const smo293401 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293401.setAttribute('id', 'smo293401');
smo293417v0ar.push(smo293401);
smo293417v0.addTickables(smo293417v0ar)
fmtsmo29341770.joinVoices([smo293417v0]);
const fmtsmo29661670 = new VF.Formatter();
//
// voices and notes for stave 13 70
const smo296616v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296616v0ar = [];
const smo296600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo296600.setAttribute('id', 'smo296600');
smo296616v0ar.push(smo296600);
smo296616v0.addTickables(smo296616v0ar)
fmtsmo29661670.joinVoices([smo296616v0]);
const fmtsmo29982970 = new VF.Formatter();
//
// voices and notes for stave 14 70
const smo299829v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo299829v0ar = [];
const smo299813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo299813.setAttribute('id', 'smo299813');
smo299829v0ar.push(smo299813);
smo299829v0.addTickables(smo299829v0ar)
fmtsmo29982970.joinVoices([smo299829v0]);
const fmtsmo30302470 = new VF.Formatter();
//
// voices and notes for stave 15 70
const smo303024v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303024v0ar = [];
const smo303008 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo303008.setAttribute('id', 'smo303008');
smo303024v0ar.push(smo303008);
smo303024v0.addTickables(smo303024v0ar)
fmtsmo30302470.joinVoices([smo303024v0]);
const fmtsmo30614670 = new VF.Formatter();
//
// voices and notes for stave 16 70
const smo306146v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306146v0ar = [];
const smo306127 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo306127.setAttribute('id', 'smo306127');
smo306127.addModifier(new VF.Dot(), 0);
smo306146v0ar.push(smo306127);
const smo306128 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n"]}'))
smo306128.setAttribute('id', 'smo306128');
const smo3061280acc = new VF.Accidental('b');
smo306128.addModifier(smo3061280acc, 0);
smo306146v0ar.push(smo306128);
const smo306129 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n"]}'))
smo306129.setAttribute('id', 'smo306129');
smo306146v0ar.push(smo306129);
const smo306130 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo306130.setAttribute('id', 'smo306130');
smo306146v0ar.push(smo306130);
smo306146v0.addTickables(smo306146v0ar)
fmtsmo30614670.joinVoices([smo306146v0]);
const fmtsmo30934570 = new VF.Formatter();
//
// voices and notes for stave 17 70
const smo309345v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309345v0ar = [];
const smo309326 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309326.setAttribute('id', 'smo309326');
smo309345v0ar.push(smo309326);
const smo309327 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309327.setAttribute('id', 'smo309327');
smo309327.setStyle({ fillStyle: "#ffffff00" });
smo309345v0ar.push(smo309327);
smo309345v0.addTickables(smo309345v0ar)
fmtsmo30934570.joinVoices([smo309345v0]);
const smo309345v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309345v1ar = [];
const smo309328 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309328.setAttribute('id', 'smo309328');
smo309328.setStyle({ fillStyle: '#aaaaaa7f' });
smo309345v1ar.push(smo309328);
const smo309329 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309329.setAttribute('id', 'smo309329');
smo309329.setStyle({ fillStyle: "#115511" });
smo309345v1ar.push(smo309329);
smo309345v1.addTickables(smo309345v1ar)
fmtsmo30934570.joinVoices([smo309345v1]);
// create beam groups and tuplets for format grp smo310988 before formatting
 
// formatting measures in staff group smo310988
fmtsmo25650570.format([smo256505v0,smo259498v0,smo262642v0,smo265758v0,smo268777v0], 288);
const stavesmo256505 = new VF.Stave(2341, 210, 302);
stavesmo256505.setAttribute('id', 'stavesmo256505');
stavesmo256505.setBegBarType(VF.Barline.type.NONE);
stavesmo256505.setContext(context);
stavesmo256505.draw();
smo256505v0.draw(context, stavesmo256505);
const stavesmo259498 = new VF.Stave(2341, 316, 302);
stavesmo259498.setAttribute('id', 'stavesmo259498');
stavesmo259498.setBegBarType(VF.Barline.type.NONE);
stavesmo259498.setContext(context);
stavesmo259498.draw();
smo259498v0.draw(context, stavesmo259498);
const stavesmo262642 = new VF.Stave(2341, 437, 302);
stavesmo262642.setAttribute('id', 'stavesmo262642');
stavesmo262642.setBegBarType(VF.Barline.type.NONE);
stavesmo262642.setContext(context);
stavesmo262642.draw();
smo262642v0.draw(context, stavesmo262642);
const stavesmo265758 = new VF.Stave(2341, 553, 302);
stavesmo265758.setAttribute('id', 'stavesmo265758');
stavesmo265758.setBegBarType(VF.Barline.type.NONE);
stavesmo265758.setContext(context);
stavesmo265758.draw();
smo265758v0.draw(context, stavesmo265758);
const stavesmo268777 = new VF.Stave(2341, 659, 302);
stavesmo268777.setAttribute('id', 'stavesmo268777');
stavesmo268777.setBegBarType(VF.Barline.type.NONE);
stavesmo268777.setContext(context);
stavesmo268777.draw();
smo268777v0.draw(context, stavesmo268777);
// create beam groups and tuplets for format grp smo310990 before formatting
 
// formatting measures in staff group smo310990
fmtsmo27189370.format([smo271893v0,smo274996v0,smo278105v0,smo281191v0], 288);
const stavesmo271893 = new VF.Stave(2341, 780, 302);
stavesmo271893.setAttribute('id', 'stavesmo271893');
stavesmo271893.setBegBarType(VF.Barline.type.NONE);
stavesmo271893.setContext(context);
stavesmo271893.draw();
smo271893v0.draw(context, stavesmo271893);
const stavesmo274996 = new VF.Stave(2341, 896, 302);
stavesmo274996.setAttribute('id', 'stavesmo274996');
stavesmo274996.setBegBarType(VF.Barline.type.NONE);
stavesmo274996.setContext(context);
stavesmo274996.draw();
smo274996v0.draw(context, stavesmo274996);
const stavesmo278105 = new VF.Stave(2341, 1012, 302);
stavesmo278105.setAttribute('id', 'stavesmo278105');
stavesmo278105.setBegBarType(VF.Barline.type.NONE);
stavesmo278105.setContext(context);
stavesmo278105.draw();
smo278105v0.draw(context, stavesmo278105);
const stavesmo281191 = new VF.Stave(2341, 1128, 302);
stavesmo281191.setAttribute('id', 'stavesmo281191');
stavesmo281191.setBegBarType(VF.Barline.type.NONE);
stavesmo281191.setContext(context);
stavesmo281191.draw();
smo281191v0.draw(context, stavesmo281191);
// create beam groups and tuplets for format grp smo310992 before formatting
 
// formatting measures in staff group smo310992
fmtsmo28428070.format([smo284280v0,smo287320v0,smo290374v0,smo293417v0], 288);
const stavesmo284280 = new VF.Stave(2341, 1264, 302);
stavesmo284280.setAttribute('id', 'stavesmo284280');
stavesmo284280.setBegBarType(VF.Barline.type.NONE);
stavesmo284280.setContext(context);
stavesmo284280.draw();
smo284280v0.draw(context, stavesmo284280);
const stavesmo287320 = new VF.Stave(2341, 1400, 302);
stavesmo287320.setAttribute('id', 'stavesmo287320');
stavesmo287320.setBegBarType(VF.Barline.type.NONE);
stavesmo287320.setContext(context);
stavesmo287320.draw();
smo287320v0.draw(context, stavesmo287320);
const stavesmo290374 = new VF.Stave(2341, 1536, 302);
stavesmo290374.setAttribute('id', 'stavesmo290374');
stavesmo290374.setBegBarType(VF.Barline.type.NONE);
stavesmo290374.setContext(context);
stavesmo290374.draw();
smo290374v0.draw(context, stavesmo290374);
const stavesmo293417 = new VF.Stave(2341, 1672, 302);
stavesmo293417.setAttribute('id', 'stavesmo293417');
stavesmo293417.setBegBarType(VF.Barline.type.NONE);
stavesmo293417.setContext(context);
stavesmo293417.draw();
smo293417v0.draw(context, stavesmo293417);
// create beam groups and tuplets for format grp smo298311 before formatting
 
// formatting measures in staff group smo298311
fmtsmo29661670.format([smo296616v0], 288);
const stavesmo296616 = new VF.Stave(2341, 1818, 302);
stavesmo296616.setAttribute('id', 'stavesmo296616');
stavesmo296616.setBegBarType(VF.Barline.type.NONE);
stavesmo296616.setContext(context);
stavesmo296616.draw();
smo296616v0.draw(context, stavesmo296616);
// create beam groups and tuplets for format grp smo310986 before formatting
 
// formatting measures in staff group smo310986
fmtsmo29982970.format([smo299829v0,smo303024v0], 288);
const stavesmo299829 = new VF.Stave(2341, 1924, 302);
stavesmo299829.setAttribute('id', 'stavesmo299829');
stavesmo299829.setBegBarType(VF.Barline.type.NONE);
stavesmo299829.setContext(context);
stavesmo299829.draw();
smo299829v0.draw(context, stavesmo299829);
const stavesmo303024 = new VF.Stave(2341, 2010, 302);
stavesmo303024.setAttribute('id', 'stavesmo303024');
stavesmo303024.setBegBarType(VF.Barline.type.NONE);
stavesmo303024.setContext(context);
stavesmo303024.draw();
smo303024v0.draw(context, stavesmo303024);
// create beam groups and tuplets for format grp smo307824 before formatting
 
// formatting measures in staff group smo307824
fmtsmo30614670.format([smo306146v0], 288);
const stavesmo306146 = new VF.Stave(2341, 2081, 302);
stavesmo306146.setAttribute('id', 'stavesmo306146');
stavesmo306146.setBegBarType(VF.Barline.type.NONE);
stavesmo306146.setContext(context);
stavesmo306146.draw();
smo306146v0.draw(context, stavesmo306146);
// create beam groups and tuplets for format grp smo310980 before formatting
 
// formatting measures in staff group smo310980
fmtsmo30934570.format([smo309345v0,smo309345v1], 288);
const stavesmo309345 = new VF.Stave(2341, 2152, 302);
stavesmo309345.setAttribute('id', 'stavesmo309345');
stavesmo309345.setBegBarType(VF.Barline.type.NONE);
stavesmo309345.setContext(context);
stavesmo309345.draw();
smo309345v0.draw(context, stavesmo309345);
smo309345v1.draw(context, stavesmo309345);
const fmtsmo25653071 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo256530v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo256530v0ar = [];
const smo256506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo256506.setAttribute('id', 'smo256506');
smo256530v0ar.push(smo256506);
const smo256507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo256507.setAttribute('id', 'smo256507');
smo256530v0ar.push(smo256507);
const smo256508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo256508.setAttribute('id', 'smo256508');
const smo256509 = new VF.Annotation('Ki');
smo256509.setAttribute('id', 'smo256509');
smo256509.setFont('times', 12, 'normal');
smo256509.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256508.addModifier(smo256509);
smo256509.addClass('lyric lyric-0 lyric-hyphen');
smo256530v0ar.push(smo256508);
const smo256510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo256510.setAttribute('id', 'smo256510');
smo256530v0ar.push(smo256510);
const smo256511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo256511.setAttribute('id', 'smo256511');
const smo256512 = new VF.Annotation('ki');
smo256512.setAttribute('id', 'smo256512');
smo256512.setFont('times', 12, 'normal');
smo256512.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256511.addModifier(smo256512);
smo256512.addClass('lyric lyric-0 lyric-hyphen');
smo256530v0ar.push(smo256511);
const smo256513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo256513.setAttribute('id', 'smo256513');
const smo256514 = new VF.Annotation('ri');
smo256514.setAttribute('id', 'smo256514');
smo256514.setFont('times', 12, 'normal');
smo256514.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo256513.addModifier(smo256514);
smo256514.addClass('lyric lyric-0');
smo256530v0ar.push(smo256513);
smo256530v0.addTickables(smo256530v0ar)
fmtsmo25653071.joinVoices([smo256530v0]);
const fmtsmo25952371 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo259523v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259523v0ar = [];
const smo259499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259499.setAttribute('id', 'smo259499');
smo259523v0ar.push(smo259499);
const smo259500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo259500.setAttribute('id', 'smo259500');
smo259523v0ar.push(smo259500);
const smo259501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo259501.setAttribute('id', 'smo259501');
const smo259502 = new VF.Annotation('Ki');
smo259502.setAttribute('id', 'smo259502');
smo259502.setFont('times', 12, 'normal');
smo259502.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259501.addModifier(smo259502);
smo259502.addClass('lyric lyric-0 lyric-hyphen');
smo259523v0ar.push(smo259501);
const smo259503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo259503.setAttribute('id', 'smo259503');
smo259523v0ar.push(smo259503);
const smo259504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo259504.setAttribute('id', 'smo259504');
const smo259505 = new VF.Annotation('ki');
smo259505.setAttribute('id', 'smo259505');
smo259505.setFont('times', 12, 'normal');
smo259505.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259504.addModifier(smo259505);
smo259505.addClass('lyric lyric-0 lyric-hyphen');
smo259523v0ar.push(smo259504);
const smo259506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo259506.setAttribute('id', 'smo259506');
const smo259507 = new VF.Annotation('ri');
smo259507.setAttribute('id', 'smo259507');
smo259507.setFont('times', 12, 'normal');
smo259507.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo259506.addModifier(smo259507);
smo259507.addClass('lyric lyric-0');
smo259523v0ar.push(smo259506);
smo259523v0.addTickables(smo259523v0ar)
fmtsmo25952371.joinVoices([smo259523v0]);
const fmtsmo26266771 = new VF.Formatter();
//
// voices and notes for stave 2 71
const smo262667v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo262667v0ar = [];
const smo262643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262643.setAttribute('id', 'smo262643');
smo262667v0ar.push(smo262643);
const smo262644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo262644.setAttribute('id', 'smo262644');
smo262667v0ar.push(smo262644);
const smo262645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo262645.setAttribute('id', 'smo262645');
const smo262646 = new VF.Annotation('Ki');
smo262646.setAttribute('id', 'smo262646');
smo262646.setFont('times', 12, 'normal');
smo262646.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262645.addModifier(smo262646);
smo262646.addClass('lyric lyric-0 lyric-hyphen');
smo262667v0ar.push(smo262645);
const smo262647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo262647.setAttribute('id', 'smo262647');
smo262667v0ar.push(smo262647);
const smo262648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo262648.setAttribute('id', 'smo262648');
const smo262649 = new VF.Annotation('ki');
smo262649.setAttribute('id', 'smo262649');
smo262649.setFont('times', 12, 'normal');
smo262649.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262648.addModifier(smo262649);
smo262649.addClass('lyric lyric-0 lyric-hyphen');
smo262667v0ar.push(smo262648);
const smo262650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo262650.setAttribute('id', 'smo262650');
const smo262651 = new VF.Annotation('ri');
smo262651.setAttribute('id', 'smo262651');
smo262651.setFont('times', 12, 'normal');
smo262651.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo262650.addModifier(smo262651);
smo262651.addClass('lyric lyric-0');
smo262667v0ar.push(smo262650);
smo262667v0.addTickables(smo262667v0ar)
fmtsmo26266771.joinVoices([smo262667v0]);
const fmtsmo26578371 = new VF.Formatter();
//
// voices and notes for stave 3 71
const smo265783v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo265783v0ar = [];
const smo265759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo265759.setAttribute('id', 'smo265759');
smo265783v0ar.push(smo265759);
const smo265760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo265760.setAttribute('id', 'smo265760');
smo265783v0ar.push(smo265760);
const smo265761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo265761.setAttribute('id', 'smo265761');
const smo265762 = new VF.Annotation('Ki');
smo265762.setAttribute('id', 'smo265762');
smo265762.setFont('times', 12, 'normal');
smo265762.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265761.addModifier(smo265762);
smo265762.addClass('lyric lyric-0 lyric-hyphen');
smo265783v0ar.push(smo265761);
const smo265763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo265763.setAttribute('id', 'smo265763');
smo265783v0ar.push(smo265763);
const smo265764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo265764.setAttribute('id', 'smo265764');
const smo265765 = new VF.Annotation('ki');
smo265765.setAttribute('id', 'smo265765');
smo265765.setFont('times', 12, 'normal');
smo265765.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265764.addModifier(smo265765);
smo265765.addClass('lyric lyric-0 lyric-hyphen');
smo265783v0ar.push(smo265764);
const smo265766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo265766.setAttribute('id', 'smo265766');
const smo265767 = new VF.Annotation('ri');
smo265767.setAttribute('id', 'smo265767');
smo265767.setFont('times', 12, 'normal');
smo265767.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo265766.addModifier(smo265767);
smo265767.addClass('lyric lyric-0');
smo265783v0ar.push(smo265766);
smo265783v0.addTickables(smo265783v0ar)
fmtsmo26578371.joinVoices([smo265783v0]);
const fmtsmo26880271 = new VF.Formatter();
//
// voices and notes for stave 4 71
const smo268802v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo268802v0ar = [];
const smo268778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo268778.setAttribute('id', 'smo268778');
smo268802v0ar.push(smo268778);
const smo268779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo268779.setAttribute('id', 'smo268779');
smo268802v0ar.push(smo268779);
const smo268780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo268780.setAttribute('id', 'smo268780');
const smo268781 = new VF.Annotation('Ki');
smo268781.setAttribute('id', 'smo268781');
smo268781.setFont('times', 12, 'normal');
smo268781.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268780.addModifier(smo268781);
smo268781.addClass('lyric lyric-0 lyric-hyphen');
smo268802v0ar.push(smo268780);
const smo268782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo268782.setAttribute('id', 'smo268782');
smo268802v0ar.push(smo268782);
const smo268783 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo268783.setAttribute('id', 'smo268783');
const smo268784 = new VF.Annotation('ki');
smo268784.setAttribute('id', 'smo268784');
smo268784.setFont('times', 12, 'normal');
smo268784.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268783.addModifier(smo268784);
smo268784.addClass('lyric lyric-0 lyric-hyphen');
smo268802v0ar.push(smo268783);
const smo268785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo268785.setAttribute('id', 'smo268785');
const smo268786 = new VF.Annotation('ri');
smo268786.setAttribute('id', 'smo268786');
smo268786.setFont('times', 12, 'normal');
smo268786.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo268785.addModifier(smo268786);
smo268786.addClass('lyric lyric-0');
smo268802v0ar.push(smo268785);
smo268802v0.addTickables(smo268802v0ar)
fmtsmo26880271.joinVoices([smo268802v0]);
const fmtsmo27191871 = new VF.Formatter();
//
// voices and notes for stave 5 71
const smo271918v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo271918v0ar = [];
const smo271894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo271894.setAttribute('id', 'smo271894');
smo271918v0ar.push(smo271894);
const smo271895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo271895.setAttribute('id', 'smo271895');
smo271918v0ar.push(smo271895);
const smo271896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo271896.setAttribute('id', 'smo271896');
const smo271897 = new VF.Annotation('Ki');
smo271897.setAttribute('id', 'smo271897');
smo271897.setFont('times', 12, 'normal');
smo271897.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271896.addModifier(smo271897);
smo271897.addClass('lyric lyric-0 lyric-hyphen');
smo271918v0ar.push(smo271896);
const smo271898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo271898.setAttribute('id', 'smo271898');
smo271918v0ar.push(smo271898);
const smo271899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo271899.setAttribute('id', 'smo271899');
const smo271900 = new VF.Annotation('ki');
smo271900.setAttribute('id', 'smo271900');
smo271900.setFont('times', 12, 'normal');
smo271900.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271899.addModifier(smo271900);
smo271900.addClass('lyric lyric-0 lyric-hyphen');
smo271918v0ar.push(smo271899);
const smo271901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo271901.setAttribute('id', 'smo271901');
const smo271902 = new VF.Annotation('ri');
smo271902.setAttribute('id', 'smo271902');
smo271902.setFont('times', 12, 'normal');
smo271902.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo271901.addModifier(smo271902);
smo271902.addClass('lyric lyric-0');
smo271918v0ar.push(smo271901);
smo271918v0.addTickables(smo271918v0ar)
fmtsmo27191871.joinVoices([smo271918v0]);
const fmtsmo27502171 = new VF.Formatter();
//
// voices and notes for stave 6 71
const smo275021v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275021v0ar = [];
const smo274997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo274997.setAttribute('id', 'smo274997');
smo275021v0ar.push(smo274997);
const smo274998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo274998.setAttribute('id', 'smo274998');
smo275021v0ar.push(smo274998);
const smo274999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo274999.setAttribute('id', 'smo274999');
const smo275000 = new VF.Annotation('Ki');
smo275000.setAttribute('id', 'smo275000');
smo275000.setFont('times', 12, 'normal');
smo275000.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo274999.addModifier(smo275000);
smo275000.addClass('lyric lyric-0 lyric-hyphen');
smo275021v0ar.push(smo274999);
const smo275001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275001.setAttribute('id', 'smo275001');
smo275021v0ar.push(smo275001);
const smo275002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275002.setAttribute('id', 'smo275002');
const smo275003 = new VF.Annotation('ki');
smo275003.setAttribute('id', 'smo275003');
smo275003.setFont('times', 12, 'normal');
smo275003.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275002.addModifier(smo275003);
smo275003.addClass('lyric lyric-0 lyric-hyphen');
smo275021v0ar.push(smo275002);
const smo275004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275004.setAttribute('id', 'smo275004');
const smo275005 = new VF.Annotation('ri');
smo275005.setAttribute('id', 'smo275005');
smo275005.setFont('times', 12, 'normal');
smo275005.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275004.addModifier(smo275005);
smo275005.addClass('lyric lyric-0');
smo275021v0ar.push(smo275004);
smo275021v0.addTickables(smo275021v0ar)
fmtsmo27502171.joinVoices([smo275021v0]);
const fmtsmo27813071 = new VF.Formatter();
//
// voices and notes for stave 7 71
const smo278130v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278130v0ar = [];
const smo278106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278106.setAttribute('id', 'smo278106');
smo278130v0ar.push(smo278106);
const smo278107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo278107.setAttribute('id', 'smo278107');
smo278130v0ar.push(smo278107);
const smo278108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo278108.setAttribute('id', 'smo278108');
const smo278109 = new VF.Annotation('Ki');
smo278109.setAttribute('id', 'smo278109');
smo278109.setFont('times', 12, 'normal');
smo278109.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278108.addModifier(smo278109);
smo278109.addClass('lyric lyric-0 lyric-hyphen');
smo278130v0ar.push(smo278108);
const smo278110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo278110.setAttribute('id', 'smo278110');
smo278130v0ar.push(smo278110);
const smo278111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo278111.setAttribute('id', 'smo278111');
const smo278112 = new VF.Annotation('ki');
smo278112.setAttribute('id', 'smo278112');
smo278112.setFont('times', 12, 'normal');
smo278112.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278111.addModifier(smo278112);
smo278112.addClass('lyric lyric-0 lyric-hyphen');
smo278130v0ar.push(smo278111);
const smo278113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo278113.setAttribute('id', 'smo278113');
const smo278114 = new VF.Annotation('ri');
smo278114.setAttribute('id', 'smo278114');
smo278114.setFont('times', 12, 'normal');
smo278114.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278113.addModifier(smo278114);
smo278114.addClass('lyric lyric-0');
smo278130v0ar.push(smo278113);
smo278130v0.addTickables(smo278130v0ar)
fmtsmo27813071.joinVoices([smo278130v0]);
const fmtsmo28121671 = new VF.Formatter();
//
// voices and notes for stave 8 71
const smo281216v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281216v0ar = [];
const smo281192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281192.setAttribute('id', 'smo281192');
smo281216v0ar.push(smo281192);
const smo281193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo281193.setAttribute('id', 'smo281193');
smo281216v0ar.push(smo281193);
const smo281194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281194.setAttribute('id', 'smo281194');
const smo281195 = new VF.Annotation('Ki');
smo281195.setAttribute('id', 'smo281195');
smo281195.setFont('times', 12, 'normal');
smo281195.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281194.addModifier(smo281195);
smo281195.addClass('lyric lyric-0 lyric-hyphen');
smo281216v0ar.push(smo281194);
const smo281196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281196.setAttribute('id', 'smo281196');
smo281216v0ar.push(smo281196);
const smo281197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281197.setAttribute('id', 'smo281197');
const smo281198 = new VF.Annotation('ki');
smo281198.setAttribute('id', 'smo281198');
smo281198.setFont('times', 12, 'normal');
smo281198.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281197.addModifier(smo281198);
smo281198.addClass('lyric lyric-0 lyric-hyphen');
smo281216v0ar.push(smo281197);
const smo281199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo281199.setAttribute('id', 'smo281199');
const smo281200 = new VF.Annotation('ri');
smo281200.setAttribute('id', 'smo281200');
smo281200.setFont('times', 12, 'normal');
smo281200.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281199.addModifier(smo281200);
smo281200.addClass('lyric lyric-0');
smo281216v0ar.push(smo281199);
smo281216v0.addTickables(smo281216v0ar)
fmtsmo28121671.joinVoices([smo281216v0]);
const fmtsmo28430571 = new VF.Formatter();
//
// voices and notes for stave 9 71
const smo284305v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284305v0ar = [];
const smo284281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo284281.setAttribute('id', 'smo284281');
smo284305v0ar.push(smo284281);
const smo284282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo284282.setAttribute('id', 'smo284282');
smo284305v0ar.push(smo284282);
const smo284283 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo284283.setAttribute('id', 'smo284283');
const smo284284 = new VF.Annotation('Ki');
smo284284.setAttribute('id', 'smo284284');
smo284284.setFont('times', 12, 'normal');
smo284284.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284283.addModifier(smo284284);
smo284284.addClass('lyric lyric-0 lyric-hyphen');
smo284305v0ar.push(smo284283);
const smo284285 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo284285.setAttribute('id', 'smo284285');
smo284305v0ar.push(smo284285);
const smo284286 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo284286.setAttribute('id', 'smo284286');
const smo284287 = new VF.Annotation('ki');
smo284287.setAttribute('id', 'smo284287');
smo284287.setFont('times', 12, 'normal');
smo284287.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284286.addModifier(smo284287);
smo284287.addClass('lyric lyric-0 lyric-hyphen');
smo284305v0ar.push(smo284286);
const smo284288 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo284288.setAttribute('id', 'smo284288');
const smo284289 = new VF.Annotation('ri');
smo284289.setAttribute('id', 'smo284289');
smo284289.setFont('times', 12, 'normal');
smo284289.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284288.addModifier(smo284289);
smo284289.addClass('lyric lyric-0');
smo284305v0ar.push(smo284288);
smo284305v0.addTickables(smo284305v0ar)
fmtsmo28430571.joinVoices([smo284305v0]);
const fmtsmo28734571 = new VF.Formatter();
//
// voices and notes for stave 10 71
const smo287345v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287345v0ar = [];
const smo287321 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287321.setAttribute('id', 'smo287321');
smo287345v0ar.push(smo287321);
const smo287322 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo287322.setAttribute('id', 'smo287322');
smo287345v0ar.push(smo287322);
const smo287323 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287323.setAttribute('id', 'smo287323');
const smo287324 = new VF.Annotation('Ki');
smo287324.setAttribute('id', 'smo287324');
smo287324.setFont('times', 12, 'normal');
smo287324.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287323.addModifier(smo287324);
smo287324.addClass('lyric lyric-0 lyric-hyphen');
smo287345v0ar.push(smo287323);
const smo287325 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287325.setAttribute('id', 'smo287325');
smo287345v0ar.push(smo287325);
const smo287326 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287326.setAttribute('id', 'smo287326');
const smo287327 = new VF.Annotation('ki');
smo287327.setAttribute('id', 'smo287327');
smo287327.setFont('times', 12, 'normal');
smo287327.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287326.addModifier(smo287327);
smo287327.addClass('lyric lyric-0 lyric-hyphen');
smo287345v0ar.push(smo287326);
const smo287328 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo287328.setAttribute('id', 'smo287328');
const smo287329 = new VF.Annotation('ri');
smo287329.setAttribute('id', 'smo287329');
smo287329.setFont('times', 12, 'normal');
smo287329.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287328.addModifier(smo287329);
smo287329.addClass('lyric lyric-0');
smo287345v0ar.push(smo287328);
smo287345v0.addTickables(smo287345v0ar)
fmtsmo28734571.joinVoices([smo287345v0]);
const fmtsmo29039971 = new VF.Formatter();
//
// voices and notes for stave 11 71
const smo290399v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290399v0ar = [];
const smo290375 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290375.setAttribute('id', 'smo290375');
smo290399v0ar.push(smo290375);
const smo290376 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo290376.setAttribute('id', 'smo290376');
smo290399v0ar.push(smo290376);
const smo290377 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290377.setAttribute('id', 'smo290377');
const smo290378 = new VF.Annotation('Ki');
smo290378.setAttribute('id', 'smo290378');
smo290378.setFont('times', 12, 'normal');
smo290378.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290377.addModifier(smo290378);
smo290378.addClass('lyric lyric-0 lyric-hyphen');
smo290399v0ar.push(smo290377);
const smo290379 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290379.setAttribute('id', 'smo290379');
smo290399v0ar.push(smo290379);
const smo290380 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290380.setAttribute('id', 'smo290380');
const smo290381 = new VF.Annotation('ki');
smo290381.setAttribute('id', 'smo290381');
smo290381.setFont('times', 12, 'normal');
smo290381.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290380.addModifier(smo290381);
smo290381.addClass('lyric lyric-0 lyric-hyphen');
smo290399v0ar.push(smo290380);
const smo290382 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo290382.setAttribute('id', 'smo290382');
const smo290383 = new VF.Annotation('ri');
smo290383.setAttribute('id', 'smo290383');
smo290383.setFont('times', 12, 'normal');
smo290383.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290382.addModifier(smo290383);
smo290383.addClass('lyric lyric-0');
smo290399v0ar.push(smo290382);
smo290399v0.addTickables(smo290399v0ar)
fmtsmo29039971.joinVoices([smo290399v0]);
const fmtsmo29344271 = new VF.Formatter();
//
// voices and notes for stave 12 71
const smo293442v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293442v0ar = [];
const smo293418 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293418.setAttribute('id', 'smo293418');
smo293442v0ar.push(smo293418);
const smo293419 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo293419.setAttribute('id', 'smo293419');
smo293442v0ar.push(smo293419);
const smo293420 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293420.setAttribute('id', 'smo293420');
const smo293421 = new VF.Annotation('Ki');
smo293421.setAttribute('id', 'smo293421');
smo293421.setFont('times', 12, 'normal');
smo293421.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293420.addModifier(smo293421);
smo293421.addClass('lyric lyric-0 lyric-hyphen');
smo293442v0ar.push(smo293420);
const smo293422 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293422.setAttribute('id', 'smo293422');
smo293442v0ar.push(smo293422);
const smo293423 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293423.setAttribute('id', 'smo293423');
const smo293424 = new VF.Annotation('ki');
smo293424.setAttribute('id', 'smo293424');
smo293424.setFont('times', 12, 'normal');
smo293424.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293423.addModifier(smo293424);
smo293424.addClass('lyric lyric-0 lyric-hyphen');
smo293442v0ar.push(smo293423);
const smo293425 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo293425.setAttribute('id', 'smo293425');
const smo293426 = new VF.Annotation('ri');
smo293426.setAttribute('id', 'smo293426');
smo293426.setFont('times', 12, 'normal');
smo293426.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293425.addModifier(smo293426);
smo293426.addClass('lyric lyric-0');
smo293442v0ar.push(smo293425);
smo293442v0.addTickables(smo293442v0ar)
fmtsmo29344271.joinVoices([smo293442v0]);
const fmtsmo29663371 = new VF.Formatter();
//
// voices and notes for stave 13 71
const smo296633v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296633v0ar = [];
const smo296617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo296617.setAttribute('id', 'smo296617');
smo296633v0ar.push(smo296617);
smo296633v0.addTickables(smo296633v0ar)
fmtsmo29663371.joinVoices([smo296633v0]);
const fmtsmo29984671 = new VF.Formatter();
//
// voices and notes for stave 14 71
const smo299846v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo299846v0ar = [];
const smo299830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo299830.setAttribute('id', 'smo299830');
smo299846v0ar.push(smo299830);
smo299846v0.addTickables(smo299846v0ar)
fmtsmo29984671.joinVoices([smo299846v0]);
const fmtsmo30304171 = new VF.Formatter();
//
// voices and notes for stave 15 71
const smo303041v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303041v0ar = [];
const smo303025 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo303025.setAttribute('id', 'smo303025');
smo303041v0ar.push(smo303025);
smo303041v0.addTickables(smo303041v0ar)
fmtsmo30304171.joinVoices([smo303041v0]);
const fmtsmo30616671 = new VF.Formatter();
//
// voices and notes for stave 16 71
const smo306166v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306166v0ar = [];
const smo306147 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo306147.setAttribute('id', 'smo306147');
smo306166v0ar.push(smo306147);
const smo306148 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo306148.setAttribute('id', 'smo306148');
smo306166v0ar.push(smo306148);
const smo306149 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo306149.setAttribute('id', 'smo306149');
smo306166v0ar.push(smo306149);
const smo306150 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo306150.setAttribute('id', 'smo306150');
smo306166v0ar.push(smo306150);
smo306166v0.addTickables(smo306166v0ar)
fmtsmo30616671.joinVoices([smo306166v0]);
const fmtsmo30936571 = new VF.Formatter();
//
// voices and notes for stave 17 71
const smo309365v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309365v0ar = [];
const smo309346 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309346.setAttribute('id', 'smo309346');
smo309365v0ar.push(smo309346);
const smo309347 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309347.setAttribute('id', 'smo309347');
smo309347.setStyle({ fillStyle: "#ffffff00" });
smo309365v0ar.push(smo309347);
smo309365v0.addTickables(smo309365v0ar)
fmtsmo30936571.joinVoices([smo309365v0]);
const smo309365v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309365v1ar = [];
const smo309348 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309348.setAttribute('id', 'smo309348');
smo309348.setStyle({ fillStyle: '#aaaaaa7f' });
smo309365v1ar.push(smo309348);
const smo309349 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo309349.setAttribute('id', 'smo309349');
smo309349.setStyle({ fillStyle: "#115511" });
smo309365v1ar.push(smo309349);
smo309365v1.addTickables(smo309365v1ar)
fmtsmo30936571.joinVoices([smo309365v1]);
// create beam groups and tuplets for format grp smo310988 before formatting
const dirsmo402656 = smo256508.getStemDirection();
smo256508.setStemDirection(dirsmo402656);
smo256510.setStemDirection(dirsmo402656);
const smo402656 = new VF.Beam([smo256508,smo256510]);
const dirsmo402659 = smo259501.getStemDirection();
smo259501.setStemDirection(dirsmo402659);
smo259503.setStemDirection(dirsmo402659);
const smo402659 = new VF.Beam([smo259501,smo259503]);
const dirsmo402662 = smo262645.getStemDirection();
smo262645.setStemDirection(dirsmo402662);
smo262647.setStemDirection(dirsmo402662);
const smo402662 = new VF.Beam([smo262645,smo262647]);
const dirsmo402665 = smo265761.getStemDirection();
smo265761.setStemDirection(dirsmo402665);
smo265763.setStemDirection(dirsmo402665);
const smo402665 = new VF.Beam([smo265761,smo265763]);
const dirsmo402668 = smo268780.getStemDirection();
smo268780.setStemDirection(dirsmo402668);
smo268782.setStemDirection(dirsmo402668);
const smo402668 = new VF.Beam([smo268780,smo268782]);
 
// formatting measures in staff group smo310988
fmtsmo25653071.format([smo256530v0,smo259523v0,smo262667v0,smo265783v0,smo268802v0], 288);
const stavesmo256530 = new VF.Stave(2643, 210, 302);
stavesmo256530.setAttribute('id', 'stavesmo256530');
stavesmo256530.setBegBarType(VF.Barline.type.NONE);
stavesmo256530.setContext(context);
stavesmo256530.draw();
smo256530v0.draw(context, stavesmo256530);
smo402656.setContext(context);
smo402656.draw();
const stavesmo259523 = new VF.Stave(2643, 316, 302);
stavesmo259523.setAttribute('id', 'stavesmo259523');
stavesmo259523.setBegBarType(VF.Barline.type.NONE);
stavesmo259523.setContext(context);
stavesmo259523.draw();
smo259523v0.draw(context, stavesmo259523);
smo402659.setContext(context);
smo402659.draw();
const stavesmo262667 = new VF.Stave(2643, 437, 302);
stavesmo262667.setAttribute('id', 'stavesmo262667');
stavesmo262667.setBegBarType(VF.Barline.type.NONE);
stavesmo262667.setContext(context);
stavesmo262667.draw();
smo262667v0.draw(context, stavesmo262667);
smo402662.setContext(context);
smo402662.draw();
const stavesmo265783 = new VF.Stave(2643, 553, 302);
stavesmo265783.setAttribute('id', 'stavesmo265783');
stavesmo265783.setBegBarType(VF.Barline.type.NONE);
stavesmo265783.setContext(context);
stavesmo265783.draw();
smo265783v0.draw(context, stavesmo265783);
smo402665.setContext(context);
smo402665.draw();
const stavesmo268802 = new VF.Stave(2643, 659, 302);
stavesmo268802.setAttribute('id', 'stavesmo268802');
stavesmo268802.setBegBarType(VF.Barline.type.NONE);
stavesmo268802.setContext(context);
stavesmo268802.draw();
smo268802v0.draw(context, stavesmo268802);
smo402668.setContext(context);
smo402668.draw();
// create beam groups and tuplets for format grp smo310990 before formatting
const dirsmo402671 = smo271896.getStemDirection();
smo271896.setStemDirection(dirsmo402671);
smo271898.setStemDirection(dirsmo402671);
const smo402671 = new VF.Beam([smo271896,smo271898]);
const dirsmo402674 = smo274999.getStemDirection();
smo274999.setStemDirection(dirsmo402674);
smo275001.setStemDirection(dirsmo402674);
const smo402674 = new VF.Beam([smo274999,smo275001]);
const dirsmo402677 = smo278108.getStemDirection();
smo278108.setStemDirection(dirsmo402677);
smo278110.setStemDirection(dirsmo402677);
const smo402677 = new VF.Beam([smo278108,smo278110]);
const dirsmo402680 = smo281194.getStemDirection();
smo281194.setStemDirection(dirsmo402680);
smo281196.setStemDirection(dirsmo402680);
const smo402680 = new VF.Beam([smo281194,smo281196]);
 
// formatting measures in staff group smo310990
fmtsmo27191871.format([smo271918v0,smo275021v0,smo278130v0,smo281216v0], 288);
const stavesmo271918 = new VF.Stave(2643, 780, 302);
stavesmo271918.setAttribute('id', 'stavesmo271918');
stavesmo271918.setBegBarType(VF.Barline.type.NONE);
stavesmo271918.setContext(context);
stavesmo271918.draw();
smo271918v0.draw(context, stavesmo271918);
smo402671.setContext(context);
smo402671.draw();
const stavesmo275021 = new VF.Stave(2643, 896, 302);
stavesmo275021.setAttribute('id', 'stavesmo275021');
stavesmo275021.setBegBarType(VF.Barline.type.NONE);
stavesmo275021.setContext(context);
stavesmo275021.draw();
smo275021v0.draw(context, stavesmo275021);
smo402674.setContext(context);
smo402674.draw();
const stavesmo278130 = new VF.Stave(2643, 1012, 302);
stavesmo278130.setAttribute('id', 'stavesmo278130');
stavesmo278130.setBegBarType(VF.Barline.type.NONE);
stavesmo278130.setContext(context);
stavesmo278130.draw();
smo278130v0.draw(context, stavesmo278130);
smo402677.setContext(context);
smo402677.draw();
const stavesmo281216 = new VF.Stave(2643, 1128, 302);
stavesmo281216.setAttribute('id', 'stavesmo281216');
stavesmo281216.setBegBarType(VF.Barline.type.NONE);
stavesmo281216.setContext(context);
stavesmo281216.draw();
smo281216v0.draw(context, stavesmo281216);
smo402680.setContext(context);
smo402680.draw();
// create beam groups and tuplets for format grp smo310992 before formatting
const dirsmo402683 = smo284283.getStemDirection();
smo284283.setStemDirection(dirsmo402683);
smo284285.setStemDirection(dirsmo402683);
const smo402683 = new VF.Beam([smo284283,smo284285]);
const dirsmo402686 = smo287323.getStemDirection();
smo287323.setStemDirection(dirsmo402686);
smo287325.setStemDirection(dirsmo402686);
const smo402686 = new VF.Beam([smo287323,smo287325]);
const dirsmo402689 = smo290377.getStemDirection();
smo290377.setStemDirection(dirsmo402689);
smo290379.setStemDirection(dirsmo402689);
const smo402689 = new VF.Beam([smo290377,smo290379]);
const dirsmo402692 = smo293420.getStemDirection();
smo293420.setStemDirection(dirsmo402692);
smo293422.setStemDirection(dirsmo402692);
const smo402692 = new VF.Beam([smo293420,smo293422]);
 
// formatting measures in staff group smo310992
fmtsmo28430571.format([smo284305v0,smo287345v0,smo290399v0,smo293442v0], 288);
const stavesmo284305 = new VF.Stave(2643, 1264, 302);
stavesmo284305.setAttribute('id', 'stavesmo284305');
stavesmo284305.setBegBarType(VF.Barline.type.NONE);
stavesmo284305.setContext(context);
stavesmo284305.draw();
smo284305v0.draw(context, stavesmo284305);
smo402683.setContext(context);
smo402683.draw();
const stavesmo287345 = new VF.Stave(2643, 1400, 302);
stavesmo287345.setAttribute('id', 'stavesmo287345');
stavesmo287345.setBegBarType(VF.Barline.type.NONE);
stavesmo287345.setContext(context);
stavesmo287345.draw();
smo287345v0.draw(context, stavesmo287345);
smo402686.setContext(context);
smo402686.draw();
const stavesmo290399 = new VF.Stave(2643, 1536, 302);
stavesmo290399.setAttribute('id', 'stavesmo290399');
stavesmo290399.setBegBarType(VF.Barline.type.NONE);
stavesmo290399.setContext(context);
stavesmo290399.draw();
smo290399v0.draw(context, stavesmo290399);
smo402689.setContext(context);
smo402689.draw();
const stavesmo293442 = new VF.Stave(2643, 1672, 302);
stavesmo293442.setAttribute('id', 'stavesmo293442');
stavesmo293442.setBegBarType(VF.Barline.type.NONE);
stavesmo293442.setContext(context);
stavesmo293442.draw();
smo293442v0.draw(context, stavesmo293442);
smo402692.setContext(context);
smo402692.draw();
// create beam groups and tuplets for format grp smo298311 before formatting
 
// formatting measures in staff group smo298311
fmtsmo29663371.format([smo296633v0], 288);
const stavesmo296633 = new VF.Stave(2643, 1818, 302);
stavesmo296633.setAttribute('id', 'stavesmo296633');
stavesmo296633.setBegBarType(VF.Barline.type.NONE);
stavesmo296633.setContext(context);
stavesmo296633.draw();
smo296633v0.draw(context, stavesmo296633);
// create beam groups and tuplets for format grp smo310986 before formatting
 
// formatting measures in staff group smo310986
fmtsmo29984671.format([smo299846v0,smo303041v0], 288);
const stavesmo299846 = new VF.Stave(2643, 1924, 302);
stavesmo299846.setAttribute('id', 'stavesmo299846');
stavesmo299846.setBegBarType(VF.Barline.type.NONE);
stavesmo299846.setContext(context);
stavesmo299846.draw();
smo299846v0.draw(context, stavesmo299846);
const stavesmo303041 = new VF.Stave(2643, 2010, 302);
stavesmo303041.setAttribute('id', 'stavesmo303041');
stavesmo303041.setBegBarType(VF.Barline.type.NONE);
stavesmo303041.setContext(context);
stavesmo303041.draw();
smo303041v0.draw(context, stavesmo303041);
// create beam groups and tuplets for format grp smo307824 before formatting
 
// formatting measures in staff group smo307824
fmtsmo30616671.format([smo306166v0], 288);
const stavesmo306166 = new VF.Stave(2643, 2081, 302);
stavesmo306166.setAttribute('id', 'stavesmo306166');
stavesmo306166.setBegBarType(VF.Barline.type.NONE);
stavesmo306166.setContext(context);
stavesmo306166.draw();
smo306166v0.draw(context, stavesmo306166);
// create beam groups and tuplets for format grp smo310980 before formatting
 
// formatting measures in staff group smo310980
fmtsmo30936571.format([smo309365v0,smo309365v1], 288);
const stavesmo309365 = new VF.Stave(2643, 2152, 302);
stavesmo309365.setAttribute('id', 'stavesmo309365');
stavesmo309365.setBegBarType(VF.Barline.type.NONE);
stavesmo309365.setContext(context);
stavesmo309365.draw();
smo309365v0.draw(context, stavesmo309365);
smo309365v1.draw(context, stavesmo309365);
const rightsmo310980stavesmo25653017 = new VF.StaveConnector(stavesmo256530, stavesmo268802).setType(0);
rightsmo310980stavesmo25653017.setContext(context).draw();
const rightsmo310980stavesmo27191817 = new VF.StaveConnector(stavesmo271918, stavesmo281216).setType(0);
rightsmo310980stavesmo27191817.setContext(context).draw();
const rightsmo310980stavesmo28430517 = new VF.StaveConnector(stavesmo284305, stavesmo293442).setType(0);
rightsmo310980stavesmo28430517.setContext(context).draw();
const rightsmo310980stavesmo29984617 = new VF.StaveConnector(stavesmo299846, stavesmo303041).setType(0);
rightsmo310980stavesmo29984617.setContext(context).draw();
// modifier from 0-63-0-2 to 0-63-0-3
const smo412066 = new VF.StaveTie({ first_note: smo256328, last_note: smo256330, 
          firstNote: smo256328, lastNote: smo256330, first_indices: [0], last_indices: [0]});
smo412066.setContext(context).draw();
// modifier from 0-64-0-3 to 0-64-0-4
const smo412067 = new VF.StaveTie({ first_note: smo256356, last_note: smo256358, 
          firstNote: smo256356, lastNote: smo256358, first_indices: [0], last_indices: [0]});
smo412067.setContext(context).draw();
// modifier from 0-64-0-5 to 0-65-0-0
const smo412068 = new VF.StaveTie({ first_note: smo256359, last_note: smo256377, 
          firstNote: smo256359, lastNote: smo256377, first_indices: [0], last_indices: [0]});
smo412068.setContext(context).draw();
// modifier from 0-65-0-3 to 0-65-0-4
const smo412069 = new VF.StaveTie({ first_note: smo256381, last_note: smo256383, 
          firstNote: smo256381, lastNote: smo256383, first_indices: [0], last_indices: [0]});
smo412069.setContext(context).draw();
// modifier from 0-66-0-4 to 0-66-0-5
const smo412070 = new VF.StaveTie({ first_note: smo256412, last_note: smo256414, 
          firstNote: smo256412, lastNote: smo256414, first_indices: [0], last_indices: [0]});
smo412070.setContext(context).draw();
// modifier from 0-66-0-6 to 0-67-0-0
const smo412071 = new VF.StaveTie({ first_note: smo256415, last_note: smo256433, 
          firstNote: smo256415, lastNote: smo256433, first_indices: [0], last_indices: [0]});
smo412071.setContext(context).draw();
// modifier from 0-71-0-2 to 0-71-0-3
const smo412072 = new VF.StaveTie({ first_note: smo256508, last_note: smo256510, 
          firstNote: smo256508, lastNote: smo256510, first_indices: [0], last_indices: [0]});
smo412072.setContext(context).draw();
// modifier from 1-63-0-2 to 1-63-0-3
const smo412073 = new VF.StaveTie({ first_note: smo259322, last_note: smo259324, 
          firstNote: smo259322, lastNote: smo259324, first_indices: [0], last_indices: [0]});
smo412073.setContext(context).draw();
// modifier from 1-64-0-3 to 1-64-0-4
const smo412074 = new VF.StaveTie({ first_note: smo259350, last_note: smo259352, 
          firstNote: smo259350, lastNote: smo259352, first_indices: [0], last_indices: [0]});
smo412074.setContext(context).draw();
// modifier from 1-64-0-5 to 1-65-0-0
const smo412075 = new VF.StaveTie({ first_note: smo259353, last_note: smo259371, 
          firstNote: smo259353, lastNote: smo259371, first_indices: [0], last_indices: [0]});
smo412075.setContext(context).draw();
// modifier from 1-65-0-3 to 1-65-0-4
const smo412076 = new VF.StaveTie({ first_note: smo259375, last_note: smo259377, 
          firstNote: smo259375, lastNote: smo259377, first_indices: [0], last_indices: [0]});
smo412076.setContext(context).draw();
// modifier from 1-66-0-4 to 1-66-0-5
const smo412077 = new VF.StaveTie({ first_note: smo259406, last_note: smo259408, 
          firstNote: smo259406, lastNote: smo259408, first_indices: [0], last_indices: [0]});
smo412077.setContext(context).draw();
// modifier from 1-66-0-6 to 1-67-0-0
const smo412078 = new VF.StaveTie({ first_note: smo259409, last_note: smo259427, 
          firstNote: smo259409, lastNote: smo259427, first_indices: [0], last_indices: [0]});
smo412078.setContext(context).draw();
// modifier from 1-71-0-2 to 1-71-0-3
const smo412079 = new VF.StaveTie({ first_note: smo259501, last_note: smo259503, 
          firstNote: smo259501, lastNote: smo259503, first_indices: [0], last_indices: [0]});
smo412079.setContext(context).draw();
// modifier from 2-63-0-2 to 2-63-0-3
const smo412080 = new VF.StaveTie({ first_note: smo262465, last_note: smo262467, 
          firstNote: smo262465, lastNote: smo262467, first_indices: [0], last_indices: [0]});
smo412080.setContext(context).draw();
// modifier from 2-64-0-3 to 2-64-0-4
const smo412081 = new VF.StaveTie({ first_note: smo262493, last_note: smo262495, 
          firstNote: smo262493, lastNote: smo262495, first_indices: [0], last_indices: [0]});
smo412081.setContext(context).draw();
// modifier from 2-64-0-5 to 2-65-0-0
const smo412082 = new VF.StaveTie({ first_note: smo262496, last_note: smo262514, 
          firstNote: smo262496, lastNote: smo262514, first_indices: [0], last_indices: [0]});
smo412082.setContext(context).draw();
// modifier from 2-65-0-3 to 2-65-0-4
const smo412083 = new VF.StaveTie({ first_note: smo262518, last_note: smo262520, 
          firstNote: smo262518, lastNote: smo262520, first_indices: [0], last_indices: [0]});
smo412083.setContext(context).draw();
// modifier from 2-66-0-4 to 2-66-0-5
const smo412084 = new VF.StaveTie({ first_note: smo262549, last_note: smo262551, 
          firstNote: smo262549, lastNote: smo262551, first_indices: [0], last_indices: [0]});
smo412084.setContext(context).draw();
// modifier from 2-66-0-6 to 2-67-0-0
const smo412085 = new VF.StaveTie({ first_note: smo262552, last_note: smo262570, 
          firstNote: smo262552, lastNote: smo262570, first_indices: [0], last_indices: [0]});
smo412085.setContext(context).draw();
// modifier from 2-71-0-2 to 2-71-0-3
const smo412086 = new VF.StaveTie({ first_note: smo262645, last_note: smo262647, 
          firstNote: smo262645, lastNote: smo262647, first_indices: [0], last_indices: [0]});
smo412086.setContext(context).draw();
// modifier from 3-63-0-2 to 3-63-0-3
const smo412087 = new VF.StaveTie({ first_note: smo265581, last_note: smo265583, 
          firstNote: smo265581, lastNote: smo265583, first_indices: [0], last_indices: [0]});
smo412087.setContext(context).draw();
// modifier from 3-64-0-3 to 3-64-0-4
const smo412088 = new VF.StaveTie({ first_note: smo265609, last_note: smo265611, 
          firstNote: smo265609, lastNote: smo265611, first_indices: [0], last_indices: [0]});
smo412088.setContext(context).draw();
// modifier from 3-64-0-5 to 3-65-0-0
const smo412089 = new VF.StaveTie({ first_note: smo265612, last_note: smo265630, 
          firstNote: smo265612, lastNote: smo265630, first_indices: [0], last_indices: [0]});
smo412089.setContext(context).draw();
// modifier from 3-65-0-3 to 3-65-0-4
const smo412090 = new VF.StaveTie({ first_note: smo265634, last_note: smo265636, 
          firstNote: smo265634, lastNote: smo265636, first_indices: [0], last_indices: [0]});
smo412090.setContext(context).draw();
// modifier from 3-66-0-4 to 3-66-0-5
const smo412091 = new VF.StaveTie({ first_note: smo265665, last_note: smo265667, 
          firstNote: smo265665, lastNote: smo265667, first_indices: [0], last_indices: [0]});
smo412091.setContext(context).draw();
// modifier from 3-66-0-6 to 3-67-0-0
const smo412092 = new VF.StaveTie({ first_note: smo265668, last_note: smo265686, 
          firstNote: smo265668, lastNote: smo265686, first_indices: [0], last_indices: [0]});
smo412092.setContext(context).draw();
// modifier from 3-71-0-2 to 3-71-0-3
const smo412093 = new VF.StaveTie({ first_note: smo265761, last_note: smo265763, 
          firstNote: smo265761, lastNote: smo265763, first_indices: [0], last_indices: [0]});
smo412093.setContext(context).draw();
// modifier from 4-63-0-2 to 4-63-0-3
const smo412094 = new VF.StaveTie({ first_note: smo268600, last_note: smo268602, 
          firstNote: smo268600, lastNote: smo268602, first_indices: [0], last_indices: [0]});
smo412094.setContext(context).draw();
// modifier from 4-64-0-3 to 4-64-0-4
const smo412095 = new VF.StaveTie({ first_note: smo268628, last_note: smo268630, 
          firstNote: smo268628, lastNote: smo268630, first_indices: [0], last_indices: [0]});
smo412095.setContext(context).draw();
// modifier from 4-64-0-5 to 4-65-0-0
const smo412096 = new VF.StaveTie({ first_note: smo268631, last_note: smo268649, 
          firstNote: smo268631, lastNote: smo268649, first_indices: [0], last_indices: [0]});
smo412096.setContext(context).draw();
// modifier from 4-65-0-3 to 4-65-0-4
const smo412097 = new VF.StaveTie({ first_note: smo268653, last_note: smo268655, 
          firstNote: smo268653, lastNote: smo268655, first_indices: [0], last_indices: [0]});
smo412097.setContext(context).draw();
// modifier from 4-66-0-4 to 4-66-0-5
const smo412098 = new VF.StaveTie({ first_note: smo268684, last_note: smo268686, 
          firstNote: smo268684, lastNote: smo268686, first_indices: [0], last_indices: [0]});
smo412098.setContext(context).draw();
// modifier from 4-66-0-6 to 4-67-0-0
const smo412099 = new VF.StaveTie({ first_note: smo268687, last_note: smo268705, 
          firstNote: smo268687, lastNote: smo268705, first_indices: [0], last_indices: [0]});
smo412099.setContext(context).draw();
// modifier from 4-71-0-2 to 4-71-0-3
const smo412100 = new VF.StaveTie({ first_note: smo268780, last_note: smo268782, 
          firstNote: smo268780, lastNote: smo268782, first_indices: [0], last_indices: [0]});
smo412100.setContext(context).draw();
// modifier from 5-63-0-3 to 5-63-0-4
const smo412101 = new VF.StaveTie({ first_note: smo271707, last_note: smo271709, 
          firstNote: smo271707, lastNote: smo271709, first_indices: [0], last_indices: [0]});
smo412101.setContext(context).draw();
// modifier from 5-64-0-3 to 5-64-0-4
const smo412102 = new VF.StaveTie({ first_note: smo271735, last_note: smo271737, 
          firstNote: smo271735, lastNote: smo271737, first_indices: [0], last_indices: [0]});
smo412102.setContext(context).draw();
// modifier from 5-64-0-5 to 5-65-0-0
const smo412103 = new VF.StaveTie({ first_note: smo271738, last_note: smo271756, 
          firstNote: smo271738, lastNote: smo271756, first_indices: [0], last_indices: [0]});
smo412103.setContext(context).draw();
// modifier from 5-65-0-3 to 5-65-0-4
const smo412104 = new VF.StaveTie({ first_note: smo271760, last_note: smo271762, 
          firstNote: smo271760, lastNote: smo271762, first_indices: [0], last_indices: [0]});
smo412104.setContext(context).draw();
// modifier from 5-66-0-4 to 5-66-0-5
const smo412105 = new VF.StaveTie({ first_note: smo271791, last_note: smo271793, 
          firstNote: smo271791, lastNote: smo271793, first_indices: [0], last_indices: [0]});
smo412105.setContext(context).draw();
// modifier from 5-66-0-6 to 5-67-0-0
const smo412106 = new VF.StaveTie({ first_note: smo271794, last_note: smo271812, 
          firstNote: smo271794, lastNote: smo271812, first_indices: [0], last_indices: [0]});
smo412106.setContext(context).draw();
// modifier from 5-71-0-2 to 5-71-0-3
const smo412107 = new VF.StaveTie({ first_note: smo271896, last_note: smo271898, 
          firstNote: smo271896, lastNote: smo271898, first_indices: [0], last_indices: [0]});
smo412107.setContext(context).draw();
// modifier from 6-63-0-2 to 6-63-0-3
const smo412108 = new VF.StaveTie({ first_note: smo274819, last_note: smo274821, 
          firstNote: smo274819, lastNote: smo274821, first_indices: [0], last_indices: [0]});
smo412108.setContext(context).draw();
// modifier from 6-64-0-3 to 6-64-0-4
const smo412109 = new VF.StaveTie({ first_note: smo274847, last_note: smo274849, 
          firstNote: smo274847, lastNote: smo274849, first_indices: [0], last_indices: [0]});
smo412109.setContext(context).draw();
// modifier from 6-64-0-5 to 6-65-0-0
const smo412110 = new VF.StaveTie({ first_note: smo274850, last_note: smo274868, 
          firstNote: smo274850, lastNote: smo274868, first_indices: [0], last_indices: [0]});
smo412110.setContext(context).draw();
// modifier from 6-65-0-3 to 6-65-0-4
const smo412111 = new VF.StaveTie({ first_note: smo274872, last_note: smo274874, 
          firstNote: smo274872, lastNote: smo274874, first_indices: [0], last_indices: [0]});
smo412111.setContext(context).draw();
// modifier from 6-66-0-4 to 6-66-0-5
const smo412112 = new VF.StaveTie({ first_note: smo274903, last_note: smo274905, 
          firstNote: smo274903, lastNote: smo274905, first_indices: [0], last_indices: [0]});
smo412112.setContext(context).draw();
// modifier from 6-66-0-6 to 6-67-0-0
const smo412113 = new VF.StaveTie({ first_note: smo274906, last_note: smo274924, 
          firstNote: smo274906, lastNote: smo274924, first_indices: [0], last_indices: [0]});
smo412113.setContext(context).draw();
// modifier from 6-71-0-2 to 6-71-0-3
const smo412114 = new VF.StaveTie({ first_note: smo274999, last_note: smo275001, 
          firstNote: smo274999, lastNote: smo275001, first_indices: [0], last_indices: [0]});
smo412114.setContext(context).draw();
// modifier from 7-63-0-2 to 7-63-0-3
const smo412115 = new VF.StaveTie({ first_note: smo277928, last_note: smo277930, 
          firstNote: smo277928, lastNote: smo277930, first_indices: [0], last_indices: [0]});
smo412115.setContext(context).draw();
// modifier from 7-64-0-3 to 7-64-0-4
const smo412116 = new VF.StaveTie({ first_note: smo277956, last_note: smo277958, 
          firstNote: smo277956, lastNote: smo277958, first_indices: [0], last_indices: [0]});
smo412116.setContext(context).draw();
// modifier from 7-64-0-5 to 7-65-0-0
const smo412117 = new VF.StaveTie({ first_note: smo277959, last_note: smo277977, 
          firstNote: smo277959, lastNote: smo277977, first_indices: [0], last_indices: [0]});
smo412117.setContext(context).draw();
// modifier from 7-65-0-3 to 7-65-0-4
const smo412118 = new VF.StaveTie({ first_note: smo277981, last_note: smo277983, 
          firstNote: smo277981, lastNote: smo277983, first_indices: [0], last_indices: [0]});
smo412118.setContext(context).draw();
// modifier from 7-66-0-4 to 7-66-0-5
const smo412119 = new VF.StaveTie({ first_note: smo278012, last_note: smo278014, 
          firstNote: smo278012, lastNote: smo278014, first_indices: [0], last_indices: [0]});
smo412119.setContext(context).draw();
// modifier from 7-66-0-6 to 7-67-0-0
const smo412120 = new VF.StaveTie({ first_note: smo278015, last_note: smo278033, 
          firstNote: smo278015, lastNote: smo278033, first_indices: [0], last_indices: [0]});
smo412120.setContext(context).draw();
// modifier from 7-71-0-2 to 7-71-0-3
const smo412121 = new VF.StaveTie({ first_note: smo278108, last_note: smo278110, 
          firstNote: smo278108, lastNote: smo278110, first_indices: [0], last_indices: [0]});
smo412121.setContext(context).draw();
// modifier from 8-63-0-2 to 8-63-0-3
const smo412122 = new VF.StaveTie({ first_note: smo281014, last_note: smo281016, 
          firstNote: smo281014, lastNote: smo281016, first_indices: [0], last_indices: [0]});
smo412122.setContext(context).draw();
// modifier from 8-64-0-3 to 8-64-0-4
const smo412123 = new VF.StaveTie({ first_note: smo281042, last_note: smo281044, 
          firstNote: smo281042, lastNote: smo281044, first_indices: [0], last_indices: [0]});
smo412123.setContext(context).draw();
// modifier from 8-64-0-5 to 8-65-0-0
const smo412124 = new VF.StaveTie({ first_note: smo281045, last_note: smo281063, 
          firstNote: smo281045, lastNote: smo281063, first_indices: [0], last_indices: [0]});
smo412124.setContext(context).draw();
// modifier from 8-65-0-3 to 8-65-0-4
const smo412125 = new VF.StaveTie({ first_note: smo281067, last_note: smo281069, 
          firstNote: smo281067, lastNote: smo281069, first_indices: [0], last_indices: [0]});
smo412125.setContext(context).draw();
// modifier from 8-66-0-4 to 8-66-0-5
const smo412126 = new VF.StaveTie({ first_note: smo281098, last_note: smo281100, 
          firstNote: smo281098, lastNote: smo281100, first_indices: [0], last_indices: [0]});
smo412126.setContext(context).draw();
// modifier from 8-66-0-6 to 8-67-0-0
const smo412127 = new VF.StaveTie({ first_note: smo281101, last_note: smo281119, 
          firstNote: smo281101, lastNote: smo281119, first_indices: [0], last_indices: [0]});
smo412127.setContext(context).draw();
// modifier from 8-71-0-2 to 8-71-0-3
const smo412128 = new VF.StaveTie({ first_note: smo281194, last_note: smo281196, 
          firstNote: smo281194, lastNote: smo281196, first_indices: [0], last_indices: [0]});
smo412128.setContext(context).draw();
// modifier from 9-63-0-2 to 9-63-0-3
const smo412129 = new VF.StaveTie({ first_note: smo284103, last_note: smo284105, 
          firstNote: smo284103, lastNote: smo284105, first_indices: [0], last_indices: [0]});
smo412129.setContext(context).draw();
// modifier from 9-64-0-3 to 9-64-0-4
const smo412130 = new VF.StaveTie({ first_note: smo284131, last_note: smo284133, 
          firstNote: smo284131, lastNote: smo284133, first_indices: [0], last_indices: [0]});
smo412130.setContext(context).draw();
// modifier from 9-64-0-5 to 9-65-0-0
const smo412131 = new VF.StaveTie({ first_note: smo284134, last_note: smo284152, 
          firstNote: smo284134, lastNote: smo284152, first_indices: [0], last_indices: [0]});
smo412131.setContext(context).draw();
// modifier from 9-65-0-3 to 9-65-0-4
const smo412132 = new VF.StaveTie({ first_note: smo284156, last_note: smo284158, 
          firstNote: smo284156, lastNote: smo284158, first_indices: [0], last_indices: [0]});
smo412132.setContext(context).draw();
// modifier from 9-66-0-4 to 9-66-0-5
const smo412133 = new VF.StaveTie({ first_note: smo284187, last_note: smo284189, 
          firstNote: smo284187, lastNote: smo284189, first_indices: [0], last_indices: [0]});
smo412133.setContext(context).draw();
// modifier from 9-66-0-6 to 9-67-0-0
const smo412134 = new VF.StaveTie({ first_note: smo284190, last_note: smo284208, 
          firstNote: smo284190, lastNote: smo284208, first_indices: [0], last_indices: [0]});
smo412134.setContext(context).draw();
// modifier from 9-71-0-2 to 9-71-0-3
const smo412135 = new VF.StaveTie({ first_note: smo284283, last_note: smo284285, 
          firstNote: smo284283, lastNote: smo284285, first_indices: [0], last_indices: [0]});
smo412135.setContext(context).draw();
// modifier from 10-63-0-2 to 10-63-0-3
const smo412136 = new VF.StaveTie({ first_note: smo287143, last_note: smo287145, 
          firstNote: smo287143, lastNote: smo287145, first_indices: [0], last_indices: [0]});
smo412136.setContext(context).draw();
// modifier from 10-64-0-3 to 10-64-0-4
const smo412137 = new VF.StaveTie({ first_note: smo287171, last_note: smo287173, 
          firstNote: smo287171, lastNote: smo287173, first_indices: [0], last_indices: [0]});
smo412137.setContext(context).draw();
// modifier from 10-64-0-5 to 10-65-0-0
const smo412138 = new VF.StaveTie({ first_note: smo287174, last_note: smo287192, 
          firstNote: smo287174, lastNote: smo287192, first_indices: [0], last_indices: [0]});
smo412138.setContext(context).draw();
// modifier from 10-65-0-3 to 10-65-0-4
const smo412139 = new VF.StaveTie({ first_note: smo287196, last_note: smo287198, 
          firstNote: smo287196, lastNote: smo287198, first_indices: [0], last_indices: [0]});
smo412139.setContext(context).draw();
// modifier from 10-66-0-4 to 10-66-0-5
const smo412140 = new VF.StaveTie({ first_note: smo287227, last_note: smo287229, 
          firstNote: smo287227, lastNote: smo287229, first_indices: [0], last_indices: [0]});
smo412140.setContext(context).draw();
// modifier from 10-66-0-6 to 10-67-0-0
const smo412141 = new VF.StaveTie({ first_note: smo287230, last_note: smo287248, 
          firstNote: smo287230, lastNote: smo287248, first_indices: [0], last_indices: [0]});
smo412141.setContext(context).draw();
// modifier from 10-71-0-2 to 10-71-0-3
const smo412142 = new VF.StaveTie({ first_note: smo287323, last_note: smo287325, 
          firstNote: smo287323, lastNote: smo287325, first_indices: [0], last_indices: [0]});
smo412142.setContext(context).draw();
// modifier from 11-63-0-2 to 11-63-0-3
const smo412143 = new VF.StaveTie({ first_note: smo290197, last_note: smo290199, 
          firstNote: smo290197, lastNote: smo290199, first_indices: [0], last_indices: [0]});
smo412143.setContext(context).draw();
// modifier from 11-64-0-3 to 11-64-0-4
const smo412144 = new VF.StaveTie({ first_note: smo290225, last_note: smo290227, 
          firstNote: smo290225, lastNote: smo290227, first_indices: [0], last_indices: [0]});
smo412144.setContext(context).draw();
// modifier from 11-64-0-5 to 11-65-0-0
const smo412145 = new VF.StaveTie({ first_note: smo290228, last_note: smo290246, 
          firstNote: smo290228, lastNote: smo290246, first_indices: [0], last_indices: [0]});
smo412145.setContext(context).draw();
// modifier from 11-65-0-3 to 11-65-0-4
const smo412146 = new VF.StaveTie({ first_note: smo290250, last_note: smo290252, 
          firstNote: smo290250, lastNote: smo290252, first_indices: [0], last_indices: [0]});
smo412146.setContext(context).draw();
// modifier from 11-66-0-4 to 11-66-0-5
const smo412147 = new VF.StaveTie({ first_note: smo290281, last_note: smo290283, 
          firstNote: smo290281, lastNote: smo290283, first_indices: [0], last_indices: [0]});
smo412147.setContext(context).draw();
// modifier from 11-66-0-6 to 11-67-0-0
const smo412148 = new VF.StaveTie({ first_note: smo290284, last_note: smo290302, 
          firstNote: smo290284, lastNote: smo290302, first_indices: [0], last_indices: [0]});
smo412148.setContext(context).draw();
// modifier from 11-71-0-2 to 11-71-0-3
const smo412149 = new VF.StaveTie({ first_note: smo290377, last_note: smo290379, 
          firstNote: smo290377, lastNote: smo290379, first_indices: [0], last_indices: [0]});
smo412149.setContext(context).draw();
// modifier from 12-63-0-2 to 12-63-0-3
const smo412150 = new VF.StaveTie({ first_note: smo293240, last_note: smo293242, 
          firstNote: smo293240, lastNote: smo293242, first_indices: [0], last_indices: [0]});
smo412150.setContext(context).draw();
// modifier from 12-64-0-3 to 12-64-0-4
const smo412151 = new VF.StaveTie({ first_note: smo293268, last_note: smo293270, 
          firstNote: smo293268, lastNote: smo293270, first_indices: [0], last_indices: [0]});
smo412151.setContext(context).draw();
// modifier from 12-64-0-5 to 12-65-0-0
const smo412152 = new VF.StaveTie({ first_note: smo293271, last_note: smo293289, 
          firstNote: smo293271, lastNote: smo293289, first_indices: [0], last_indices: [0]});
smo412152.setContext(context).draw();
// modifier from 12-65-0-3 to 12-65-0-4
const smo412153 = new VF.StaveTie({ first_note: smo293293, last_note: smo293295, 
          firstNote: smo293293, lastNote: smo293295, first_indices: [0], last_indices: [0]});
smo412153.setContext(context).draw();
// modifier from 12-66-0-4 to 12-66-0-5
const smo412154 = new VF.StaveTie({ first_note: smo293324, last_note: smo293326, 
          firstNote: smo293324, lastNote: smo293326, first_indices: [0], last_indices: [0]});
smo412154.setContext(context).draw();
// modifier from 12-66-0-6 to 12-67-0-0
const smo412155 = new VF.StaveTie({ first_note: smo293327, last_note: smo293345, 
          firstNote: smo293327, lastNote: smo293345, first_indices: [0], last_indices: [0]});
smo412155.setContext(context).draw();
// modifier from 12-71-0-2 to 12-71-0-3
const smo412156 = new VF.StaveTie({ first_note: smo293420, last_note: smo293422, 
          firstNote: smo293420, lastNote: smo293422, first_indices: [0], last_indices: [0]});
smo412156.setContext(context).draw();
// modifier from 13-63-0-3 to 13-63-0-4
const smo412157 = new VF.StaveTie({ first_note: smo296459, last_note: smo296460, 
          firstNote: smo296459, lastNote: smo296460, first_indices: [0,1,2], last_indices: [0,1,2]});
smo412157.setContext(context).draw();
// modifier from 13-64-0-3 to 13-64-0-4
const smo412158 = new VF.StaveTie({ first_note: smo296483, last_note: smo296484, 
          firstNote: smo296483, lastNote: smo296484, first_indices: [0,1,2], last_indices: [0,1,2]});
smo412158.setContext(context).draw();
// modifier from 13-65-0-1 to 13-65-0-2
const smo412159 = new VF.StaveTie({ first_note: smo296502, last_note: smo296503, 
          firstNote: smo296502, lastNote: smo296503, first_indices: [0,1,2], last_indices: [0,1,2]});
smo412159.setContext(context).draw();
// modifier from 13-66-0-3 to 13-66-0-4
const smo412160 = new VF.StaveTie({ first_note: smo296525, last_note: smo296526, 
          firstNote: smo296525, lastNote: smo296526, first_indices: [0,1,2], last_indices: [0,1,2]});
smo412160.setContext(context).draw();
// modifier from 13-66-0-5 to 13-67-0-0
const smo412161 = new VF.StaveTie({ first_note: smo296527, last_note: smo296544, 
          firstNote: smo296527, lastNote: smo296544, first_indices: [0,1,2], last_indices: [0,1,2]});
smo412161.setContext(context).draw();
// modifier from 13-67-0-1 to 13-67-0-2
const smo412162 = new VF.StaveTie({ first_note: smo296545, last_note: smo296546, 
          firstNote: smo296545, lastNote: smo296546, first_indices: [0,1], last_indices: [0,1]});
smo412162.setContext(context).draw();
// modifier from 14-63-0-3 to 14-63-0-4
const smo412163 = new VF.StaveTie({ first_note: smo299672, last_note: smo299673, 
          firstNote: smo299672, lastNote: smo299673, first_indices: [0,1,2], last_indices: [0,1,2]});
smo412163.setContext(context).draw();
// modifier from 14-64-0-3 to 14-64-0-4
const smo412164 = new VF.StaveTie({ first_note: smo299696, last_note: smo299697, 
          firstNote: smo299696, lastNote: smo299697, first_indices: [0,1,2], last_indices: [0,1,2]});
smo412164.setContext(context).draw();
// modifier from 14-65-0-1 to 14-65-0-2
const smo412165 = new VF.StaveTie({ first_note: smo299715, last_note: smo299716, 
          firstNote: smo299715, lastNote: smo299716, first_indices: [0,1,2], last_indices: [0,1,2]});
smo412165.setContext(context).draw();
// modifier from 14-66-0-3 to 14-66-0-4
const smo412166 = new VF.StaveTie({ first_note: smo299738, last_note: smo299739, 
          firstNote: smo299738, lastNote: smo299739, first_indices: [0,1,2], last_indices: [0,1,2]});
smo412166.setContext(context).draw();
// modifier from 14-66-0-5 to 14-67-0-0
const smo412167 = new VF.StaveTie({ first_note: smo299740, last_note: smo299757, 
          firstNote: smo299740, lastNote: smo299757, first_indices: [0,1,2], last_indices: [0,1,2]});
smo412167.setContext(context).draw();
// modifier from 14-67-0-1 to 14-67-0-2
const smo412168 = new VF.StaveTie({ first_note: smo299758, last_note: smo299759, 
          firstNote: smo299758, lastNote: smo299759, first_indices: [0,1], last_indices: [0,1]});
smo412168.setContext(context).draw();
// modifier from 15-63-0-3 to 15-63-0-4
const smo412169 = new VF.StaveTie({ first_note: smo302867, last_note: smo302868, 
          firstNote: smo302867, lastNote: smo302868, first_indices: [0], last_indices: [0]});
smo412169.setContext(context).draw();
// modifier from 15-64-0-3 to 15-64-0-4
const smo412170 = new VF.StaveTie({ first_note: smo302891, last_note: smo302892, 
          firstNote: smo302891, lastNote: smo302892, first_indices: [0], last_indices: [0]});
smo412170.setContext(context).draw();
// modifier from 15-65-0-1 to 15-65-0-2
const smo412171 = new VF.StaveTie({ first_note: smo302910, last_note: smo302911, 
          firstNote: smo302910, lastNote: smo302911, first_indices: [0], last_indices: [0]});
smo412171.setContext(context).draw();
// modifier from 15-66-0-3 to 15-66-0-4
const smo412172 = new VF.StaveTie({ first_note: smo302933, last_note: smo302934, 
          firstNote: smo302933, lastNote: smo302934, first_indices: [0], last_indices: [0]});
smo412172.setContext(context).draw();
// modifier from 15-66-0-5 to 15-67-0-0
const smo412173 = new VF.StaveTie({ first_note: smo302935, last_note: smo302952, 
          firstNote: smo302935, lastNote: smo302952, first_indices: [0], last_indices: [0]});
smo412173.setContext(context).draw();
// modifier from 15-67-0-1 to 15-67-0-2
const smo412174 = new VF.StaveTie({ first_note: smo302953, last_note: smo302954, 
          firstNote: smo302953, lastNote: smo302954, first_indices: [0], last_indices: [0]});
smo412174.setContext(context).draw();
// modifier from 16-64-0-1 to 16-64-0-2
const smo412175 = new VF.StaveTie({ first_note: smo306008, last_note: smo306009, 
          firstNote: smo306008, lastNote: smo306009, first_indices: [0], last_indices: [0]});
smo412175.setContext(context).draw();
// modifier from 16-64-0-3 to 16-65-0-0
const smo412176 = new VF.StaveTie({ first_note: smo306010, last_note: smo306027, 
          firstNote: smo306010, lastNote: smo306027, first_indices: [0], last_indices: [0]});
smo412176.setContext(context).draw();
// modifier from 16-65-0-1 to 16-65-0-2
const smo412177 = new VF.StaveTie({ first_note: smo306028, last_note: smo306029, 
          firstNote: smo306028, lastNote: smo306029, first_indices: [0], last_indices: [0]});
smo412177.setContext(context).draw();
// modifier from 16-65-0-3 to 16-66-0-0
const smo412178 = new VF.StaveTie({ first_note: smo306030, last_note: smo306047, 
          firstNote: smo306030, lastNote: smo306047, first_indices: [0], last_indices: [0]});
smo412178.setContext(context).draw();
// modifier from 16-66-0-1 to 16-66-0-2
const smo412179 = new VF.StaveTie({ first_note: smo306048, last_note: smo306049, 
          firstNote: smo306048, lastNote: smo306049, first_indices: [0], last_indices: [0]});
smo412179.setContext(context).draw();
// modifier from 16-66-0-3 to 16-67-0-0
const smo412180 = new VF.StaveTie({ first_note: smo306050, last_note: smo306067, 
          firstNote: smo306050, lastNote: smo306067, first_indices: [0], last_indices: [0]});
smo412180.setContext(context).draw();
// modifier from 16-68-0-1 to 16-68-0-2
const smo412181 = new VF.StaveTie({ first_note: smo306088, last_note: smo306089, 
          firstNote: smo306088, lastNote: smo306089, first_indices: [0], last_indices: [0]});
smo412181.setContext(context).draw();
// modifier from 16-68-0-3 to 16-69-0-0
const smo412182 = new VF.StaveTie({ first_note: smo306090, last_note: smo306107, 
          firstNote: smo306090, lastNote: smo306107, first_indices: [0], last_indices: [0]});
smo412182.setContext(context).draw();
// modifier from 16-69-0-1 to 16-69-0-2
const smo412183 = new VF.StaveTie({ first_note: smo306108, last_note: smo306109, 
          firstNote: smo306108, lastNote: smo306109, first_indices: [0], last_indices: [0]});
smo412183.setContext(context).draw();
// modifier from 16-69-0-3 to 16-70-0-0
const smo412184 = new VF.StaveTie({ first_note: smo306110, last_note: smo306127, 
          firstNote: smo306110, lastNote: smo306127, first_indices: [0], last_indices: [0]});
smo412184.setContext(context).draw();
// modifier from 16-70-0-1 to 16-70-0-2
const smo412185 = new VF.StaveTie({ first_note: smo306128, last_note: smo306129, 
          firstNote: smo306128, lastNote: smo306129, first_indices: [0], last_indices: [0]});
smo412185.setContext(context).draw();
// modifier from 16-70-0-3 to 16-71-0-0
const smo412186 = new VF.StaveTie({ first_note: smo306130, last_note: smo306147, 
          firstNote: smo306130, lastNote: smo306147, first_indices: [0], last_indices: [0]});
smo412186.setContext(context).draw();
// modifier from 17-63-0-1 to 17-63-0-2
const smo412187 = new VF.StaveTie({ first_note: smo309168, last_note: smo309169, 
          firstNote: smo309168, lastNote: smo309169, first_indices: [0], last_indices: [0]});
smo412187.setContext(context).draw();
// modifier from 17-65-0-1 to 17-65-0-2
const smo412188 = new VF.StaveTie({ first_note: smo309217, last_note: smo309218, 
          firstNote: smo309217, lastNote: smo309218, first_indices: [0], last_indices: [0]});
smo412188.setContext(context).draw();
// modifier from 17-66-0-4 to 17-66-0-5
const smo412189 = new VF.StaveTie({ first_note: smo309244, last_note: smo309246, 
          firstNote: smo309244, lastNote: smo309246, first_indices: [0], last_indices: [0]});
smo412189.setContext(context).draw();
// modifier from 17-66-0-6 to 17-67-0-0
const smo412190 = new VF.StaveTie({ first_note: smo309247, last_note: smo309266, 
          firstNote: smo309247, lastNote: smo309266, first_indices: [0], last_indices: [0]});
smo412190.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo256329').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo256332').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo256334').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo259323').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo259326').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo259328').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo262466').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo262469').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo262471').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo265582').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo265585').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo265587').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo268601').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo268604').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo268606').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo271708').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo271711').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo271713').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo274820').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo274823').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo274825').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo277929').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo277932').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo277934').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281015').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281018').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281020').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo256353').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo256357').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo256360').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo259347').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo259351').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo259354').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo262490').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo262494').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo262497').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo265606').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo265610').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo265613').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo268625').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo268629').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo268632').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo271732').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo271736').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo271739').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo274844').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo274848').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo274851').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo277953').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo277957').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo277960').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281039').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281043').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281046').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo256379').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo256382').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo256385').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo256387').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo259373').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo259376').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo259379').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo259381').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo262516').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo262519').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo262522').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo262524').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo265632').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo265635').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo265638').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo265640').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo268651').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo268654').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo268657').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo268659').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo271758').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo271761').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo271764').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo271766').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo274870').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo274873').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo274876').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo274878').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo277979').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo277982').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo277985').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo277987').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281065').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281068').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281071').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281073').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo256405').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo256407').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo256409').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo256411').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo256413').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo256416').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo259399').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo259401').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo259403').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo259405').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo259407').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo259410').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo262542').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo262544').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo262546').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo262548').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo262553').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo265658').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo265660').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo265662').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo265664').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo265669').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo268677').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo268679').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo268681').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo268683').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo268685').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo268688').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo271784').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo271786').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo271788').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo271790').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo271795').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo274896').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo274898').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo274900').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo274902').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo274907').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278005').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278007').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278009').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278011').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278016').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281091').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281093').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281095').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281097').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281102').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo256509').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo256512').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo256514').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo259502').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo259505').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo259507').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo262646').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo262649').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo262651').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo265762').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo265765').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo265767').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo268781').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo268784').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo268786').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo271897').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo271900').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo271902').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275000').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275003').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275005').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278109').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278112').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278114').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281195').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281198').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281200').setAttributeNS('', 'transform', 'translate(0 10)');
}